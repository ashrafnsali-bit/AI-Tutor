import type { Assessment, Lecture, LectureDiagram, Question } from '../types';

export const SAUDI_G4_PRIMARY_ARABIC_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-BLNG.pdf';

const sourceNoteAr =
  'المصدر: كتاب لغتي الجميلة للصف الرابع الابتدائي، الجزء الأول، طبعة 1448هـ/2026م بحسب الغلاف. عناوين المكونات والصفحات مطابقة للفهرس المطبوع ص 9–10. تتضمن بيانات PDF الداخلية إشارات متعارضة إلى طبعة/فصل آخر؛ لذلك اقتصر التوثيق على الغلاف والفهرس المطبوعين. الشروح والأمثلة والرسوم والأنشطة والأسئلة من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Source: Grade 4 Lughati Al-Jameelah, Part One, 1448 AH/2026 edition as identified on the cover. Component titles and pages follow the printed contents on pp. 9–10. The PDF metadata contains conflicting references to another edition/term, so the course is grounded only in the printed cover and contents. Platform explanations, examples, diagrams, activities, and questions are original and are not copied from textbook pages.';

type ArabicGrade4Lesson = {
  componentAr: string;
  componentEn: string;
  titleAr: string;
  titleEn: string;
  pages: string;
  focusAr: string;
  focusEn: string;
  stepsAr: string[];
  stepsEn: string[];
  exampleAr: string;
  exampleEn: string;
};

const unitTitleAr = 'الوحدة الأولى: صحتي وبيئتي';
const unitTitleEn = 'Unit 1: My Health and Environment';

export const SAUDI_G4_PRIMARY_ARABIC_TABLE_OF_CONTENTS: ReadonlyArray<{
  titleAr: string;
  pages: string;
}> = [
  { titleAr: 'مراجعة المكتسبات السابقة', pages: '11' },
  { titleAr: 'التهيئة والاختبار التشخيصي', pages: '19' },
  { titleAr: 'أنشطة تمهيدية للوحدة', pages: '24' },
  { titleAr: 'مشروع الوحدة', pages: '30' },
  { titleAr: 'نص الاستماع: ناقل الأمراض', pages: '32' },
  { titleAr: 'نص الفهم القرائي: التصحر وأثره في البيئة', pages: '36' },
  { titleAr: 'همزتا القطع والوصل', pages: '50' },
  { titleAr: 'الهمزة المتطرفة', pages: '54' },
  { titleAr: 'التاء المربوطة والتاء المفتوحة', pages: '58' },
  { titleAr: 'كلمات حذفت الألف من وسطها', pages: '64' },
  { titleAr: 'أنواع الكلمة والجملة', pages: '67' },
  { titleAr: 'المبتدأ والخبر', pages: '77' },
  { titleAr: 'الاسم المجرور بحرف الجر', pages: '84' },
  { titleAr: 'أنواع الفعل', pages: '92' },
  { titleAr: 'الفاعل', pages: '103' },
  { titleAr: 'المفعول به', pages: '112' },
  { titleAr: 'الحروف المرتكزة على السطر', pages: '120' },
  { titleAr: 'النص الشعري: لِمَ تألمت الفراشة؟', pages: '133' },
  { titleAr: 'التواصل الشفهي', pages: '139، 141، 143، 144' },
  { titleAr: 'التواصل الكتابي: كتابة قصة', pages: '146، 148، 150' },
  { titleAr: 'مراجعة وتقويم الوحدة', pages: '151، 155' }
];

const lessons: ArabicGrade4Lesson[] = [
  {
    componentAr: 'مراجعة المكتسبات السابقة',
    componentEn: 'Prerequisite Review',
    titleAr: 'مراجعة المكتسبات السابقة',
    titleEn: 'Reviewing Prerequisite Skills',
    pages: '11',
    focusAr: 'استرجاع المهارات اللغوية السابقة، وشرح طريقة التفكير في الإجابة قبل بدء موضوعات الوحدة.',
    focusEn: 'Recall prior language skills and explain the reasoning behind an answer before beginning the unit.',
    stepsAr: ['أقرأ المطلوب', 'أستدعي المهارة المناسبة', 'أجيب مع تفسير', 'أحدد ما أحتاج إلى مراجعته'],
    stepsEn: ['Read the task', 'Recall the relevant skill', 'Answer and explain', 'Identify what to review'],
    exampleAr: 'أراجع جملة قصيرة، وأحدد الكلمة التي أحتاج إلى ضبطها، ثم أشرح سبب اختياري.',
    exampleEn: 'Review a short sentence, identify the word that needs attention, and explain the choice.'
  },
  {
    componentAr: 'التهيئة والاختبار التشخيصي',
    componentEn: 'Preparation and Diagnostic Check',
    titleAr: 'التهيئة وتحديد نقطة البداية',
    titleEn: 'Preparation and Setting a Starting Point',
    pages: '19',
    focusAr: 'استخدام التقويم التشخيصي لمعرفة المهارات المتقنة والجوانب التي تحتاج إلى تدريب.',
    focusEn: 'Use a diagnostic check to identify secure skills and areas that need practice.',
    stepsAr: ['أجيب باستقلال', 'أراجع إجابتي', 'أتعرف موضع القوة', 'أضع هدفًا للتعلم'],
    stepsEn: ['Answer independently', 'Review the response', 'Identify a strength', 'Set a learning goal'],
    exampleAr: 'بعد حل سؤال لغوي، أختار مهارة واحدة أتقنتها وأخرى سأتمرن عليها.',
    exampleEn: 'After solving a language question, name one skill you have mastered and one to practise.'
  },
  {
    componentAr: 'المدخل',
    componentEn: 'Unit Introduction',
    titleAr: 'أنشطة تمهيدية لوحدة صحتي وبيئتي',
    titleEn: 'Opening Activities: My Health and Environment',
    pages: '24',
    focusAr: 'ربط موضوع الوحدة بعادات العناية بالصحة والمحافظة على البيئة في الحياة اليومية.',
    focusEn: 'Connect the unit theme to everyday habits that support health and protect the environment.',
    stepsAr: ['ألاحظ موقفًا', 'أصفه بدقة', 'أربطه بموضوع الوحدة', 'أشارك فكرة نافعة'],
    stepsEn: ['Observe a situation', 'Describe it clearly', 'Connect it to the unit', 'Share a useful idea'],
    exampleAr: 'أصف طريقة آمنة للتخلص من النفايات، وأوضح أثرها في نظافة الحي.',
    exampleEn: 'Describe a safe way to dispose of waste and explain its effect on a neighborhood.'
  },
  {
    componentAr: 'مشروع الوحدة',
    componentEn: 'Unit Project',
    titleAr: 'التخطيط لمشروع عن الصحة والبيئة',
    titleEn: 'Planning a Health and Environment Project',
    pages: '30',
    focusAr: 'تخطيط عمل تعاوني برسالة واضحة ومهام مناسبة ومصدر معلومات موثوق.',
    focusEn: 'Plan a collaborative project with a clear message, suitable tasks, and a reliable source.',
    stepsAr: ['أحدد رسالة المشروع', 'أجمع معلومات مناسبة', 'أوزع الأدوار', 'أعرض الناتج وأراجعه'],
    stepsEn: ['Define the project message', 'Gather relevant information', 'Assign roles', 'Present and review the result'],
    exampleAr: 'ينظم فريق ملصقًا عن عادة صحية، فيراجع المعلومات ثم يوزع مهام الكتابة والرسم والعرض.',
    exampleEn: 'A team plans a poster about a healthy habit, checks its information, and shares writing, illustration, and presentation tasks.'
  },
  {
    componentAr: 'نص الاستماع: ناقل الأمراض',
    componentEn: 'Listening Text: Disease Carriers',
    titleAr: 'الاستماع لاستخراج الفكرة والتفاصيل',
    titleEn: 'Listening for the Main Idea and Details',
    pages: '32',
    focusAr: 'الإنصات للنص، وتحديد فكرته العامة، ثم تمييز التفاصيل التي تفسرها.',
    focusEn: 'Listen to a passage, identify its main idea, and distinguish details that explain it.',
    stepsAr: ['أستعد للاستماع', 'ألتقط الفكرة العامة', 'أسجل التفاصيل', 'ألخص ما فهمت'],
    stepsEn: ['Prepare to listen', 'Catch the main idea', 'Record details', 'Summarize what you understood'],
    exampleAr: 'أستمع إلى شرح صحي، ثم أذكر الفكرة الأساسية وتفصيلًا واحدًا يدعمها.',
    exampleEn: 'Listen to a health explanation, then state its main idea and one supporting detail.'
  },
  {
    componentAr: 'نص الفهم القرائي: التصحر وأثره في البيئة',
    componentEn: 'Reading Text: Desertification and Its Environmental Impact',
    titleAr: 'قراءة نص عن التصحر وفهمه',
    titleEn: 'Reading and Understanding a Text about Desertification',
    pages: '36',
    focusAr: 'استخراج الفكرة الرئيسة، وتفسير المفردات من السياق، وربط الأسباب بالآثار.',
    focusEn: 'Find the main idea, infer vocabulary from context, and connect causes with effects.',
    stepsAr: ['أتوقع موضوع النص', 'أقرأ للفكرة الرئيسة', 'أستدل من السياق', 'أربط السبب بالأثر'],
    stepsEn: ['Predict the topic', 'Read for the main idea', 'Use context as evidence', 'Connect cause and effect'],
    exampleAr: 'أرتب سببًا بيئيًا ونتيجته، ثم أستشهد بتفصيل مناسب من نص معلوماتي.',
    exampleEn: 'Pair an environmental cause with its effect and support the link with a detail from an informational text.'
  },
  {
    componentAr: 'الظاهرة الإملائية: همزتا القطع والوصل',
    componentEn: 'Spelling: Hamzat al-Qaṭʿ and Hamzat al-Waṣl',
    titleAr: 'التمييز بين همزتي القطع والوصل',
    titleEn: 'Distinguishing Hamzat al-Qaṭʿ from Hamzat al-Waṣl',
    pages: '50',
    focusAr: 'تمييز الهمزة التي تثبت في الابتداء والوصل من الهمزة التي تظهر عند الابتداء وتسقط في الوصل.',
    focusEn: 'Distinguish the hamza pronounced both initially and in connection from the one pronounced only initially.',
    stepsAr: ['ألاحظ موضع الهمزة', 'أصل الكلمة بما قبلها', 'أحدد نطق الهمزة', 'أكتب الكلمة وأراجعها'],
    stepsEn: ['Notice the hamza position', 'Connect the word to what precedes it', 'Determine its pronunciation', 'Write and check the word'],
    exampleAr: 'أقارن نطق الهمزة في كلمتين داخل جملة، ثم أفسر اختلاف كتابتهما.',
    exampleEn: 'Compare the hamza in two words within a sentence and explain the spelling difference.'
  },
  {
    componentAr: 'الظاهرة الإملائية: الهمزة المتطرفة',
    componentEn: 'Spelling: Final Hamza',
    titleAr: 'كتابة الهمزة المتطرفة',
    titleEn: 'Writing the Final Hamza',
    pages: '54',
    focusAr: 'اختيار صورة الهمزة المتطرفة بالنظر إلى حركة الحرف الذي يسبقها.',
    focusEn: 'Choose the form of a final hamza by considering the vowel on the preceding letter.',
    stepsAr: ['أحدد الهمزة الأخيرة', 'ألاحظ حركة ما قبلها', 'أختار صورتها الكتابية', 'أراجع الكلمة في سياقها'],
    stepsEn: ['Locate the final hamza', 'Check the preceding vowel', 'Choose its written form', 'Review the word in context'],
    exampleAr: 'أكتب كلمات تنتهي بهمزة في جمل مفيدة، وأقارن رسمها بحركة الحرف السابق.',
    exampleEn: 'Write words ending in hamza in meaningful sentences and compare their forms with the preceding vowels.'
  },
  {
    componentAr: 'الظاهرة الإملائية: التاء المربوطة والتاء المفتوحة',
    componentEn: 'Spelling: Tāʾ Marbūṭa and Open Tāʾ',
    titleAr: 'التفريق بين التاء المربوطة والتاء المفتوحة',
    titleEn: 'Distinguishing Tāʾ Marbūṭa and Open Tāʾ',
    pages: '58',
    focusAr: 'ملاحظة نطق التاء في الوقف والوصل للاستدلال على صورتها في نهاية الكلمة.',
    focusEn: 'Use pronunciation when pausing and connecting speech to identify the final tāʾ form.',
    stepsAr: ['أحدد التاء الأخيرة', 'أنطق الكلمة عند الوقف', 'أقارن نطقها بالوصل', 'أختار الرسم المناسب'],
    stepsEn: ['Locate the final tāʾ', 'Pronounce the word at a pause', 'Compare it with connected speech', 'Choose the correct spelling'],
    exampleAr: 'أضع كلمة في جملة، ثم أقرأها عند الوقف والوصل لأتحقق من كتابتها.',
    exampleEn: 'Place a word in a sentence, then read it with a pause and in connected speech to check its spelling.'
  },
  {
    componentAr: 'الظاهرة الإملائية: كلمات حذفت الألف من وسطها',
    componentEn: 'Spelling: Words with a Medial Alif Omitted',
    titleAr: 'كتابة كلمات حذفت الألف من وسطها',
    titleEn: 'Writing Words with an Omitted Medial Alif',
    pages: '64',
    focusAr: 'التعرف إلى كلمات مألوفة حذفت الألف من وسطها، وكتابتها بصورتها الإملائية الصحيحة.',
    focusEn: 'Recognize familiar words with an omitted medial alif and write their accepted spelling.',
    stepsAr: ['أقرأ الكلمة كاملة', 'أتعرف موضع الحذف', 'أكتب صورتها الصحيحة', 'أراجعها في جملة'],
    stepsEn: ['Read the whole word', 'Locate the omitted letter', 'Write its accepted form', 'Check it in a sentence'],
    exampleAr: 'أراجع كتابة كلمة شائعة وردت في نص، ثم أستخدمها في جملة من إنشائي.',
    exampleEn: 'Check the spelling of a familiar word from a text, then use it in an original sentence.'
  },
  {
    componentAr: 'الوظيفة النحوية: أنواع الكلمة والجملة',
    componentEn: 'Grammar: Word and Sentence Types',
    titleAr: 'تصنيف الكلمات والتعرف إلى الجملة',
    titleEn: 'Classifying Words and Recognizing Sentences',
    pages: '67',
    focusAr: 'تصنيف الكلمات بحسب نوعها، وملاحظة طريقة انتظامها لتكوين جملة مفيدة.',
    focusEn: 'Classify words by type and notice how they combine to form a meaningful sentence.',
    stepsAr: ['أقرأ الكلمة في سياقها', 'أحدد نوعها', 'ألاحظ ترتيب الكلمات', 'أكوّن جملة مفيدة'],
    stepsEn: ['Read the word in context', 'Identify its type', 'Notice word order', 'Build a meaningful sentence'],
    exampleAr: 'أصنف كلمات جملة قصيرة، ثم أرتبها لتكوين معنى واضح.',
    exampleEn: 'Classify words in a short sentence, then arrange them to express a clear meaning.'
  },
  {
    componentAr: 'الوظيفة النحوية: المبتدأ والخبر',
    componentEn: 'Grammar: Mubtadaʾ and Khabar',
    titleAr: 'تحديد المبتدأ والخبر',
    titleEn: 'Identifying the Mubtadaʾ and Khabar',
    pages: '77',
    focusAr: 'التعرف إلى الاسم الذي تبدأ به الجملة الاسمية والخبر الذي يتمم معناها.',
    focusEn: 'Identify the noun that begins a nominal sentence and the predicate that completes its meaning.',
    stepsAr: ['أقرأ الجملة الاسمية', 'أحدد المبتدأ', 'أبحث عما يتمم المعنى', 'أتحقق من ترابطهما'],
    stepsEn: ['Read the nominal sentence', 'Find the subject', 'Find what completes the meaning', 'Check how the two relate'],
    exampleAr: 'في جملة عن البيئة، أحدد الاسم الذي نتحدث عنه والخبر الذي يصفه.',
    exampleEn: 'In a sentence about the environment, identify the noun being discussed and the predicate describing it.'
  },
  {
    componentAr: 'الوظيفة النحوية: الاسم المجرور بحرف الجر',
    componentEn: 'Grammar: Noun Governed by a Preposition',
    titleAr: 'التعرف إلى الاسم المجرور بحرف الجر',
    titleEn: 'Recognizing a Noun after a Preposition',
    pages: '84',
    focusAr: 'العثور على حرف الجر والاسم الذي يأتي بعده في تركيب ذي معنى.',
    focusEn: 'Find a preposition and the noun that follows it in a meaningful phrase.',
    stepsAr: ['أحدد حرف الجر', 'أقرأ الكلمة التي تليه', 'أربطهما في التركيب', 'أستخدم التركيب في جملة'],
    stepsEn: ['Identify the preposition', 'Read the following word', 'Connect them as a phrase', 'Use the phrase in a sentence'],
    exampleAr: 'أحدد حرف الجر والاسم بعده في عبارة تصف مكانًا أو اتجاهًا.',
    exampleEn: 'Identify a preposition and its following noun in a phrase describing a place or direction.'
  },
  {
    componentAr: 'الوظيفة النحوية: أنواع الفعل',
    componentEn: 'Grammar: Verb Types',
    titleAr: 'تمييز أنواع الفعل',
    titleEn: 'Distinguishing Verb Types',
    pages: '92',
    focusAr: 'ملاحظة زمن الحدث للاستدلال على الفعل الماضي أو المضارع أو الأمر.',
    focusEn: 'Use when an action happens to distinguish past, present, and imperative verbs.',
    stepsAr: ['أحدد الحدث', 'ألاحظ زمنه', 'أصنف الفعل', 'أستخدمه في سياق مناسب'],
    stepsEn: ['Identify the action', 'Notice its time', 'Classify the verb', 'Use it in a suitable context'],
    exampleAr: 'أقارن أفعالًا تصف العناية بنبتة، وأصنفها بحسب زمن حدوثها.',
    exampleEn: 'Compare verbs describing plant care and classify them by when the actions happen.'
  },
  {
    componentAr: 'الوظيفة النحوية: الفاعل',
    componentEn: 'Grammar: The Doer of the Action',
    titleAr: 'تحديد الفاعل في الجملة الفعلية',
    titleEn: 'Identifying the Doer in a Verbal Sentence',
    pages: '103',
    focusAr: 'تحديد من قام بالفعل بعد التعرف إلى الفعل وقراءة الجملة كاملة.',
    focusEn: 'Identify who performed an action after locating the verb and reading the whole sentence.',
    stepsAr: ['أحدد الفعل', 'أسأل من قام به', 'أعين الفاعل', 'أعيد قراءة الجملة'],
    stepsEn: ['Find the verb', 'Ask who performed it', 'Identify the doer', 'Reread the sentence'],
    exampleAr: 'أقرأ جملة عن تنظيف الحديقة، ثم أتعرف إلى من قام بالتنظيف.',
    exampleEn: 'Read a sentence about cleaning a garden, then identify who did the cleaning.'
  },
  {
    componentAr: 'الوظيفة النحوية: المفعول به',
    componentEn: 'Grammar: The Object',
    titleAr: 'تحديد المفعول به',
    titleEn: 'Identifying the Object',
    pages: '112',
    focusAr: 'تحديد ما وقع عليه الفعل في جملة مكتملة المعنى.',
    focusEn: 'Identify what receives the action in a complete sentence.',
    stepsAr: ['أحدد الفعل', 'أتعرف إلى الفاعل', 'أسأل عمّا وقع عليه الفعل', 'أتحقق من المعنى'],
    stepsEn: ['Find the verb', 'Identify the doer', 'Ask what received the action', 'Check the meaning'],
    exampleAr: 'في جملة عن زراعة شجرة، أحدد الفعل ومن قام به وما وقع عليه.',
    exampleEn: 'In a sentence about planting a tree, identify the action, the doer, and what received the action.'
  },
  {
    componentAr: 'الرسم الكتابي: الحروف المرتكزة على السطر',
    componentEn: 'Handwriting: Letters Resting on the Line',
    titleAr: 'تحسين كتابة الحروف المرتكزة على السطر',
    titleEn: 'Practising Letters Resting on the Line',
    pages: '120',
    focusAr: 'التدرب على رسم الحروف المحددة بوضوح ومراعاة اتجاه الكتابة ومواقع الحروف.',
    focusEn: 'Practise the specified letter forms clearly while observing writing direction and placement.',
    stepsAr: ['ألاحظ نموذج الحرف', 'أتتبع اتجاهه', 'أكتبه في كلمة', 'أراجع وضوحه واتصاله'],
    stepsEn: ['Observe the letter model', 'Follow its direction', 'Write it in a word', 'Check clarity and connections'],
    exampleAr: 'أتدرب على كتابة كلمة قصيرة، وأراجع انتظام الحروف على السطر.',
    exampleEn: 'Practise writing a short word and check that its letters sit neatly on the line.'
  },
  {
    componentAr: 'النص الشعري: لِمَ تألمت الفراشة؟',
    componentEn: 'Poetry: Why Was the Butterfly Hurt?',
    titleAr: 'تذوق نص شعري وفهم صورته',
    titleEn: 'Understanding and Appreciating a Poem',
    pages: '133',
    focusAr: 'قراءة النص بإيقاع مناسب، وفهم فكرته، والتعبير عن أثر الصورة الشعرية.',
    focusEn: 'Read with suitable rhythm, understand the poem’s idea, and describe the effect of an image.',
    stepsAr: ['أقرأ الأبيات بهدوء', 'أحدد الفكرة', 'أتخيل الصورة', 'أعبر عن إحساسي'],
    stepsEn: ['Read the lines carefully', 'Identify the idea', 'Imagine the image', 'Describe your response'],
    exampleAr: 'أصف صورة من الطبيعة بكلماتي، وأوضح الشعور الذي توحي به.',
    exampleEn: 'Describe a nature image in your own words and explain the feeling it suggests.'
  },
  {
    componentAr: 'التواصل الشفهي',
    componentEn: 'Oral Communication',
    titleAr: 'إبداء الرأي ووصف المشاهدات وتمثيل الحوار',
    titleEn: 'Sharing Opinions, Describing Observations, and Role-Playing',
    pages: '139، 141، 143، 144',
    focusAr: 'تنظيم الحديث الشفهي، ودعم الرأي بسبب، ووصف ما شوهد، واحترام آداب الحوار.',
    focusEn: 'Organize spoken ideas, support an opinion with a reason, describe observations, and respect discussion norms.',
    stepsAr: ['أحدد غرض الحديث', 'أرتب فكرتي', 'أتحدث بوضوح واحترام', 'أستمع وأستجيب'],
    stepsEn: ['Set the purpose', 'Organize the idea', 'Speak clearly and respectfully', 'Listen and respond'],
    exampleAr: 'أشارك رأيًا عن سلوك يحافظ على البيئة، وأذكر سببًا وأصغي إلى رأي زميلي.',
    exampleEn: 'Share an opinion about an environmentally helpful action, give a reason, and listen to a classmate.'
  },
  {
    componentAr: 'التواصل الكتابي: كتابة قصة',
    componentEn: 'Written Communication: Writing a Story',
    titleAr: 'تنظيم أحداث قصة وكتابتها',
    titleEn: 'Planning and Writing a Story',
    pages: '146، 148، 150',
    focusAr: 'بناء قصة مترابطة بأحداث مرتبة وشخصيات واضحة ونهاية تناسب فكرتها.',
    focusEn: 'Build a coherent story with ordered events, clear characters, and an ending suited to its idea.',
    stepsAr: ['أحدد الفكرة والشخصيات', 'أرتب الأحداث', 'أكتب مسودة مترابطة', 'أراجع اللغة والتسلسل'],
    stepsEn: ['Choose an idea and characters', 'Order the events', 'Write a connected draft', 'Review language and sequence'],
    exampleAr: 'أخطط لقصة قصيرة عن موقف صحي، ثم أرتب بدايتها وحدثها الرئيس ونهايتها.',
    exampleEn: 'Plan a short story about a health-related situation, then order its opening, main event, and ending.'
  },
  {
    componentAr: 'مراجعة وتقويم الوحدة',
    componentEn: 'Unit Review and Assessment',
    titleAr: 'مراجعة تعلم الوحدة والاستعداد للتقويم',
    titleEn: 'Reviewing Unit Learning and Preparing for Assessment',
    pages: '151، 155',
    focusAr: 'مراجعة مهارات القراءة والإملاء والنحو والتواصل، ثم استخدام نتيجة التقويم لتحديد الخطوة التالية.',
    focusEn: 'Review reading, spelling, grammar, and communication skills, then use assessment results to plan next steps.',
    stepsAr: ['أراجع أهداف الوحدة', 'أحل تدريبًا متنوعًا', 'أتحقق من إجاباتي', 'أحدد مهارة أطورها'],
    stepsEn: ['Review unit goals', 'Complete varied practice', 'Check your answers', 'Choose a skill to improve'],
    exampleAr: 'أجيب عن أسئلة متنوعة، ثم أعود إلى المهارة التي أخطأت فيها وأتدرب عليها.',
    exampleEn: 'Answer varied questions, then revisit and practise a skill where you made an error.'
  }
];

const makeDiagram = (lesson: ArabicGrade4Lesson, id: string, order: number): LectureDiagram => ({
  id,
  figureNumberAr: `شكل (${order}-1)`,
  figureNumberEn: `Figure (${order}-1)`,
  titleAr: `خريطة تعلم: ${lesson.componentAr}`,
  titleEn: `Learning Map: ${lesson.componentEn}`,
  captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
  captionEn: 'An original platform learning diagram, not an image from the textbook.',
  diagramType: 'arabic_learning_map',
  visualSteps: lesson.stepsAr.map((labelAr, index) => ({
    labelAr,
    labelEn: lesson.stepsEn[index]
  }))
});

const makeQuestion = (lesson: ArabicGrade4Lesson, id: string): Question => ({
  id,
  textAr: `ما الخطوة الأولى المناسبة عند تعلم ${lesson.componentAr}؟`,
  textEn: `What is the first suitable step when learning ${lesson.componentEn.toLowerCase()}?`,
  optionsAr: lesson.stepsAr,
  optionsEn: lesson.stepsEn,
  correctIndex: 0,
  conceptTestedAr: lesson.componentAr,
  conceptTestedEn: lesson.componentEn,
  explanationAr: `تبدأ المهارة بـ${lesson.stepsAr[0]}، ثم تُستكمل بقية الخطوات بالترتيب.`,
  explanationEn: `Begin with “${lesson.stepsEn[0]},” then continue through the remaining steps in order.`,
  difficulty: 'easy'
});

const makeAssessment = (lesson: ArabicGrade4Lesson, id: string, order: number): Assessment => ({
  id,
  titleAr: `تقويم ${lesson.componentAr}`,
  titleEn: `${lesson.componentEn} Check`,
  passingScore: 80,
  questions: [makeQuestion(lesson, `${id}-q${order}`)]
});

export const SAUDI_PRIMARY_ARABIC_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const lectureId = `sa-primary-arabic-g4-1448-u1-${String(order).padStart(2, '0')}`;

  return {
    id: lectureId,
    order,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn,
    subtitleAr: lesson.componentAr,
    subtitleEn: lesson.componentEn,
    descriptionAr: `${sourceNoteAr} موضع المكوّن في الكتاب: ص ${lesson.pages}. المصدر: ${SAUDI_G4_PRIMARY_ARABIC_TEXTBOOK_URL}`,
    descriptionEn: `${sourceNoteEn} Component pages: ${lesson.pages}. Source: ${SAUDI_G4_PRIMARY_ARABIC_TEXTBOOK_URL}`,
    topicAr: `${lesson.componentAr} (ص ${lesson.pages})`,
    topicEn: `${lesson.componentEn} (pp. ${lesson.pages})`,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'الصف الرابع الابتدائي — لغتي الجميلة، الجزء الأول، طبعة 1448هـ/2026م',
    gradeLevelNameEn: 'Grade 4 Primary — Lughati Al-Jameelah, Part One, 1448 AH/2026 edition',
    ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
    ministryEn: 'Ministry of Education, Saudi Arabia',
    termAr: 'الجزء الأول من المقرر — طبعة 1448هـ/2026م',
    termEn: 'Part One of the curriculum — 1448 AH/2026 edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `المكوّن ${order}: ${lesson.componentAr}`,
    lessonNumberEn: `Component ${order}: ${lesson.componentEn}`,
    warmupHookAr: `كيف تطبق مهارة ${lesson.componentAr} في موضوع «صحتي وبيئتي»؟`,
    warmupHookEn: `How can you apply ${lesson.componentEn.toLowerCase()} to “My Health and Environment”?`,
    learningOutcomesAr: [lesson.focusAr],
    learningOutcomesEn: [lesson.focusEn],
    keyConceptsAr: [lesson.focusAr],
    keyConceptsEn: [lesson.focusEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [
      {
        titleAr: 'المهارة وخطواتها',
        titleEn: 'Skill and Steps',
        contentAr: `${lesson.focusAr} ${sourceNoteAr}`,
        contentEn: `${lesson.focusEn} ${sourceNoteEn}`,
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
