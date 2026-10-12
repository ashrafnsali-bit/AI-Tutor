import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ARABIC_G3_BOOK = {
  title: 'اللغة العربية — الصف الثالث الابتدائي',
  titleEn: 'Arabic Language — Grade 3 Primary',
  edition: 'جمهورية السودان — وزارة التربية والتعليم — بخت الرضا',
  units: [
    { titleAr: 'قيم وآداب', titleEn: 'Values and Manners', firstPage: 5, lastPage: 21 },
    { titleAr: 'مدرستي', titleEn: 'My School', firstPage: 22, lastPage: 43 },
    { titleAr: 'وطني', titleEn: 'My Country', firstPage: 44, lastPage: 66 },
    { titleAr: 'من حكم الحيوان', titleEn: 'Lessons from Animal Stories', firstPage: 67, lastPage: 84 },
    { titleAr: 'صحتي', titleEn: 'My Health', firstPage: 85, lastPage: 106 },
    { titleAr: 'تأملات متباينة', titleEn: 'Different Reflections', firstPage: 107, lastPage: 130 }
  ]
} as const;

interface ArabicLesson {
  unit: number;
  page: number;
  lastPage: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
  visualStepsAr: [string, string, string, string];
  visualStepsEn: [string, string, string, string];
}

const lessons: ArabicLesson[] = [
  {
    unit: 1, page: 6, lastPage: 8, titleAr: 'حب الوالدين', titleEn: 'Love for Parents',
    focusAr: 'يقرأ حوار أحمد وعلي عن المحبة والامتنان، ويحدد من النص أفعالاً بسيطة للتعبير عن التقدير، مثل الكلام اللطيف والمساعدة.',
    focusEn: 'Read Ahmed and Ali’s conversation about care and gratitude, and find simple actions in the text that show appreciation, such as kind words and helpfulness.',
    questionAr: 'أي فعل يعبّر عن التقدير لأفراد الأسرة؟', questionEn: 'Which action shows appreciation for family members?',
    optionsAr: ['التحدث بلطف وتقديم المساعدة', 'مقاطعة المتحدث', 'إهمال العمل المشترك'], optionsEn: ['Speaking kindly and offering help', 'Interrupting the speaker', 'Ignoring shared tasks'],
    visualStepsAr: ['اقرأ الحوار', 'لاحظ أفعال المحبة', 'استخرج كلمة جديدة', 'عبّر بجملة لطيفة'], visualStepsEn: ['Read the dialogue', 'Notice caring actions', 'Find a new word', 'Write a kind sentence']
  },
  {
    unit: 1, page: 9, lastPage: 10, titleAr: 'نشيد أبي وأمي', titleEn: 'A Song for My Parents',
    focusAr: 'يقرأ نشيداً قصيراً بإيقاع واضح، ويحدد الكلمات التي تصف الامتنان، ثم يعبّر شفهياً عن فكرة النشيد بلغته.',
    focusEn: 'Read a short poem with clear rhythm, identify words that express gratitude, and explain its main idea in your own words.',
    questionAr: 'ما الفكرة التي يعبّر عنها النشيد؟', questionEn: 'What idea does the poem express?',
    optionsAr: ['المحبة والامتنان للأسرة', 'وصف رحلة بحرية', 'قواعد لعبة رياضية'], optionsEn: ['Love and gratitude for family', 'A sea journey', 'Rules for a sports game'],
    visualStepsAr: ['استمع إلى الإيقاع', 'اقرأ الأبيات', 'تعرّف معنى الكلمات', 'لخّص الفكرة'], visualStepsEn: ['Listen to the rhythm', 'Read the lines', 'Explore word meanings', 'Summarize the idea']
  },
  {
    unit: 1, page: 11, lastPage: 14, titleAr: 'إكرام الجار والضيف', titleEn: 'Kindness to Neighbours and Guests',
    focusAr: 'يتابع أحداث حكاية نزار، ويستخرج أمثلة على حسن الاستقبال والتعاون ومراعاة راحة الآخرين، ويتدرب على ترتيب الأحداث.',
    focusEn: 'Follow Nizar’s story, identify examples of welcoming guests, helping others, and respecting people’s comfort, and practise sequencing events.',
    questionAr: 'ماذا فعل نزار ليعاون جاره؟', questionEn: 'What did Nizar do to help his neighbour?',
    optionsAr: ['حمل عنه أحد المقطفين', 'أخفى أغراضه', 'رفع صوت المذياع'], optionsEn: ['He carried one of his baskets', 'He hid his belongings', 'He turned up the radio'],
    visualStepsAr: ['تعرّف الشخصيات', 'رتّب الأحداث', 'لاحظ فعل التعاون', 'اذكر مثالاً من حياتك'], visualStepsEn: ['Meet the characters', 'Sequence the events', 'Notice the helpful action', 'Give an everyday example']
  },
  {
    unit: 1, page: 15, lastPage: 18, titleAr: 'العيش الشريف', titleEn: 'Living with Dignity',
    focusAr: 'يقرأ وصفاً لشخصية العم حمدان، ويركز على صفات الأمانة والاجتهاد والتواصل مع الناس دون اختزال الشخص في إعاقته.',
    focusEn: 'Read a description of Uncle Hamdan, focusing on honesty, effort, and community relationships without reducing a person to a disability.',
    questionAr: 'أي صفة اشتهر بها العم حمدان؟', questionEn: 'Which quality was Uncle Hamdan known for?',
    optionsAr: ['الصدق والأمانة', 'إزعاج المارة', 'ترك العمل'], optionsEn: ['Honesty and trustworthiness', 'Disturbing passers-by', 'Avoiding work'],
    visualStepsAr: ['اقرأ الوصف', 'استخرج الصفات', 'ميّز الفعل عن المظهر', 'اكتب وصفاً محترماً'], visualStepsEn: ['Read the description', 'Find character qualities', 'Separate actions from appearance', 'Write a respectful description']
  },
  {
    unit: 1, page: 19, lastPage: 21, titleAr: 'من مكارم الأخلاق', titleEn: 'Good Character',
    focusAr: 'يقرأ أبياتاً قصيرة عن الصدق والوفاء والرفق، ويتعرف الأفعال والأسماء التي تعبّر عن السلوك الحسن.',
    focusEn: 'Read short verses about honesty, keeping promises, and kindness, and identify words for positive actions and qualities.',
    questionAr: 'أي سلوك يتفق مع معاني الأبيات؟', questionEn: 'Which behaviour matches the meaning of the verses?',
    optionsAr: ['الوفاء بالوعد', 'إيذاء الآخرين', 'إزعاج الجيران'], optionsEn: ['Keeping a promise', 'Harming others', 'Disturbing neighbours'],
    visualStepsAr: ['اقرأ الأبيات', 'حدّد الصفة', 'اربطها بالفعل', 'صغ جملة من إنشائك'], visualStepsEn: ['Read the verses', 'Identify a quality', 'Match it to an action', 'Write your own sentence']
  },

  {
    unit: 2, page: 23, lastPage: 25, titleAr: 'العودة إلى المدرسة', titleEn: 'Returning to School',
    focusAr: 'يقرأ نشيد العودة إلى المدرسة، ويفسر مفردات مثل «أبهاك» من السياق، ويلاحظ الكلمات المتقاربة في الكتابة والصوت.',
    focusEn: 'Read a poem about returning to school, infer words such as “splendid” from context, and notice words that look or sound alike.',
    questionAr: 'ماذا تعني «ما أبهاكِ» في سياق النشيد؟', questionEn: 'What does “How splendid you are” mean in the poem?',
    optionsAr: ['ما أجملك', 'ما أبعدك', 'ما أهدأك'], optionsEn: ['How beautiful you are', 'How far away you are', 'How quiet you are'],
    visualStepsAr: ['اقرأ النشيد', 'استدل بالسياق', 'فسّر مفردة', 'ردّد بيتاً بوضوح'], visualStepsEn: ['Read the poem', 'Use context clues', 'Explain a word', 'Recite a line clearly']
  },
  {
    unit: 2, page: 26, lastPage: 29, titleAr: 'نظافة المدرسة', titleEn: 'Keeping the School Clean',
    focusAr: 'يتابع نصاً عن تعاون التلاميذ على ترتيب المدرسة، ويميز بين الأفكار الرئيسة والتفاصيل، ويقترح أعمالاً آمنة للنظافة.',
    focusEn: 'Follow a text about pupils working together to tidy their school, distinguish main ideas from details, and suggest safe ways to keep it clean.',
    questionAr: 'كيف تعاون التلاميذ في المدرسة؟', questionEn: 'How did the pupils work together at school?',
    optionsAr: ['تقاسموا أعمال الترتيب والتنظيف', 'تركوا الصفوف مبعثرة', 'رموا الأوراق في الساحة'], optionsEn: ['They shared tidying and cleaning tasks', 'They left classrooms untidy', 'They threw papers in the yard'],
    visualStepsAr: ['حدّد حاجة المدرسة', 'اقرأ أدوار المجموعات', 'صنّف العمل الآمن', 'اقترح خطة تعاون'], visualStepsEn: ['Identify a school need', 'Read each group’s role', 'Choose safe tasks', 'Suggest a teamwork plan']
  },
  {
    unit: 2, page: 30, lastPage: 33, titleAr: 'تحية العلم', titleEn: 'A School Flag Ceremony',
    focusAr: 'يقرأ وصفاً موجزاً لمراسم مدرسية، ويرتب خطواتها، ويتدرب على ألفاظ الترتيب والوصف دون تقييم معتقدات أو مواقف سياسية.',
    focusEn: 'Read a brief description of a school ceremony, sequence its steps, and practise sequencing and descriptive words without judging political beliefs or positions.',
    questionAr: 'ماذا فعل التلاميذ بعد التحية؟', questionEn: 'What did the pupils do after the greeting?',
    optionsAr: ['عادوا إلى صفوفهم بهدوء ونظام', 'غادروا المدرسة دون ترتيب', 'بدؤوا سباقاً في الساحة'], optionsEn: ['They returned to their classrooms calmly and in order', 'They left school without order', 'They began a race in the yard'],
    visualStepsAr: ['اقرأ وصف المراسم', 'رتّب الخطوات', 'تعرّف ألفاظ النظام', 'لخّص الحدث'], visualStepsEn: ['Read the ceremony description', 'Sequence its steps', 'Notice words for order', 'Summarize the event']
  },
  {
    unit: 2, page: 34, lastPage: 38, titleAr: 'في الطريق', titleEn: 'On the Way',
    focusAr: 'يتعرف إرشادات عامة للسير الآمن في الطريق، ويستخرج أفعال الأمر والنصح، ويستخدم جملاً واضحة لوصف قواعد السلامة.',
    focusEn: 'Learn general road-safety guidance, find imperative and advice-giving verbs, and use clear sentences to describe safe practices.',
    questionAr: 'ما التصرف الآمن قبل عبور الشارع؟', questionEn: 'What is a safe action before crossing a street?',
    optionsAr: ['التوقف والانتباه إلى حركة الطريق', 'العبور مسرعاً دون نظر', 'اللعب بين السيارات'], optionsEn: ['Stop and pay attention to traffic', 'Rush across without looking', 'Play among vehicles'],
    visualStepsAr: ['لاحظ الطريق', 'تعرّف كلمات النصح', 'اختر التصرف الآمن', 'صغ قاعدة واضحة'], visualStepsEn: ['Observe the road', 'Notice advice words', 'Choose a safe action', 'Write a clear rule']
  },
  {
    unit: 2, page: 39, lastPage: 43, titleAr: 'كيف أمشي في الطريق؟', titleEn: 'How Do I Walk on the Road?',
    focusAr: 'يقرأ نشيداً إرشادياً عن المشي والانتباه للآخرين، ويميز بين السلوك المناسب وغير المناسب، ويتدرب على إيقاع الشعر.',
    focusEn: 'Read an instructional poem about walking and being aware of others, distinguish suitable from unsuitable behaviour, and practise poetic rhythm.',
    questionAr: 'أين يسير الماشي عندما يتوفر رصيف؟', questionEn: 'Where should a pedestrian walk when a pavement is available?',
    optionsAr: ['على الرصيف', 'في وسط الطريق', 'خلف سيارة متحركة'], optionsEn: ['On the pavement', 'In the middle of the road', 'Behind a moving car'],
    visualStepsAr: ['اقرأ أبيات النشيد', 'لاحظ أفعال الحركة', 'ميّز السلوك الآمن', 'أنشد بوضوح'], visualStepsEn: ['Read the poem', 'Notice movement verbs', 'Identify safe behaviour', 'Recite clearly']
  },

  {
    unit: 3, page: 46, lastPage: 50, titleAr: 'أحب بلادي', titleEn: 'I Love My Country',
    focusAr: 'يقرأ نصاً يصف الانتماء إلى الوطن، ويلاحظ احترام تعدد اللغات بين الناس، ويستخرج كلمات لوصف الطبيعة والمشاعر.',
    focusEn: 'Read a text about belonging, notice its respect for people’s different languages, and find words that describe nature and feelings.',
    questionAr: 'كيف يجمع الوطن أفراد المجتمع؟', questionEn: 'How does a country bring people in its community together?',
    optionsAr: ['يجمعهم مع احترام تنوعهم', 'يجعل الجميع يتحدثون بالطريقة نفسها', 'يفصل الجيران عن بعضهم'], optionsEn: ['By bringing them together while respecting their diversity', 'By making everyone speak in the same way', 'By separating neighbours'],
    visualStepsAr: ['اقرأ وصف الوطن', 'استخرج كلمات الطبيعة', 'لاحظ فكرة التنوع', 'عبّر عن مكان تحبه'], visualStepsEn: ['Read the description', 'Find nature words', 'Notice the idea of diversity', 'Describe a place you like']
  },
  {
    unit: 3, page: 51, lastPage: 52, titleAr: 'نشيد يا بلدي', titleEn: '“O My Country” Poem',
    focusAr: 'يقرأ نشيداً عن محبة المكان وأشجاره وثماره، ويفسر مفردات وصفية، ويربط الصور الشعرية بمعانيها.',
    focusEn: 'Read a poem celebrating a place, its trees, and fruit; explain descriptive vocabulary and connect poetic images with their meanings.',
    questionAr: 'أي كلمة تصف الأشجار في النشيد؟', questionEn: 'Which word describes the trees in the poem?',
    optionsAr: ['بهيّة', 'مكسورة', 'بعيدة'], optionsEn: ['Beautiful', 'Broken', 'Distant'],
    visualStepsAr: ['استمع إلى النشيد', 'اقرأ الصور الشعرية', 'فسّر مفردة وصفية', 'اذكر صورة تحبها'], visualStepsEn: ['Listen to the poem', 'Read its images', 'Explain a descriptive word', 'Name an image you like']
  },
  {
    unit: 3, page: 53, lastPage: 57, titleAr: 'بطلة من بلادي: مهيرة بنت عبود', titleEn: 'A Woman from Sudanese History: Mahira bint Aboud',
    focusAr: 'يتعرف نصاً سيرياً عن شخصية سودانية، ويرتب معلوماتها في خط زمني، ويتعلم مفردات السيرة والشعر مع التركيز على القراءة والفهم.',
    focusEn: 'Explore a biographical text about a Sudanese historical figure, organize information on a timeline, and learn biography and poetry vocabulary through reading comprehension.',
    questionAr: 'أي أداة تساعد على ترتيب أحداث السيرة؟', questionEn: 'Which tool helps organize events in a biography?',
    optionsAr: ['خط زمني', 'قائمة مشتريات', 'جدول ضرب'], optionsEn: ['A timeline', 'A shopping list', 'A multiplication table'],
    visualStepsAr: ['اقرأ عنوان السيرة', 'استخرج معلومات النص', 'رتّبها زمنياً', 'لخّصها بلغة محايدة'], visualStepsEn: ['Read the biography title', 'Find information in the text', 'Put it in time order', 'Summarize it neutrally']
  },
  {
    unit: 3, page: 58, lastPage: 63, titleAr: 'عبد الفضيل الماظ', titleEn: 'Abd al-Fadil al-Maz',
    focusAr: 'يقرأ نصاً سيرياً تاريخياً، ويحدد أسماء الأماكن وتسلسل محطات حياة الشخصية، ويتدرب على تلخيص المعلومات من دون تمجيد العنف.',
    focusEn: 'Read a historical biography, identify place names and the sequence of life events, and practise summarizing without glorifying violence.',
    questionAr: 'ما الذي يساعد القارئ على فهم تسلسل أحداث السيرة؟', questionEn: 'What helps a reader understand the order of events in a biography?',
    optionsAr: ['ترتيب المحطات حسب الزمن', 'تغيير ترتيب الجمل عشوائياً', 'حذف أسماء الأماكن'], optionsEn: ['Putting events in chronological order', 'Rearranging sentences at random', 'Removing place names'],
    visualStepsAr: ['حدّد موضوع السيرة', 'اجمع المعلومات الأساسية', 'رتّب المحطات', 'اكتب خلاصة هادئة'], visualStepsEn: ['Identify the biography topic', 'Gather key information', 'Order the milestones', 'Write a calm summary']
  },
  {
    unit: 3, page: 64, lastPage: 66, titleAr: 'عيد الاستقلال', titleEn: 'Independence Day',
    focusAr: 'يقرأ مقالاً عن مناسبة وطنية، ويستخرج التاريخ والمفردات والأفكار الرئيسة، ويتدرب على تلخيص نص تاريخي بلغة محايدة.',
    focusEn: 'Read an article about a national occasion, find its date, vocabulary, and main ideas, and practise summarizing historical text in neutral language.',
    questionAr: 'في أي شهر يذكر النص الاحتفال بعيد الاستقلال؟', questionEn: 'In which month does the text say Independence Day is observed?',
    optionsAr: ['يناير', 'أبريل', 'أغسطس'], optionsEn: ['January', 'April', 'August'],
    visualStepsAr: ['اقرأ المقال', 'استخرج التاريخ', 'حدّد الفكرة الرئيسة', 'لخّص بمفردات دقيقة'], visualStepsEn: ['Read the article', 'Find the date', 'Identify the main idea', 'Summarize with precise words']
  },

  {
    unit: 4, page: 68, lastPage: 70, titleAr: 'الديك والثعلب', titleEn: 'The Rooster and the Fox',
    focusAr: 'يتابع حواراً قصصياً بين حيوانين، ويستدل على مقصد المتحدث من كلماته، ويرتب أحداث الحكاية ويتدرب على أسماء الأصوات.',
    focusEn: 'Follow a story dialogue between two animals, infer a speaker’s intention from their words, sequence events, and practise animal-sound vocabulary.',
    questionAr: 'ما الذي ساعد الديك على تجنب خدعة الثعلب؟', questionEn: 'What helped the rooster avoid the fox’s trick?',
    optionsAr: ['فكّر في الكلام واستدعى المساعدة', 'صدّق كل ما سمعه فوراً', 'غادر مكانه دون انتباه'], optionsEn: ['He thought about the words and called for help', 'He immediately believed everything he heard', 'He left without paying attention'],
    visualStepsAr: ['تعرّف الشخصيات', 'اقرأ الحوار', 'استدل على النية', 'رتّب نهاية الحكاية'], visualStepsEn: ['Meet the characters', 'Read the dialogue', 'Infer the intention', 'Sequence the ending']
  },
  {
    unit: 4, page: 71, lastPage: 74, titleAr: 'خلية النحل', titleEn: 'The Bee Colony',
    focusAr: 'يتعرف من نص معلوماتي إلى انتقال النحل بين الأزهار والخلايا، ويلتقط المفردات الوصفية، ويميز اللام الشمسية والقمرية في أمثلة.',
    focusEn: 'Learn from an informational passage how bees move between flowers and their colony, notice descriptive vocabulary, and distinguish sun and moon letters in examples.',
    questionAr: 'ماذا تجمع النحلة من الأزهار؟', questionEn: 'What does a bee collect from flowers?',
    optionsAr: ['الرحيق', 'الحصى', 'الأوراق المكتوبة'], optionsEn: ['Nectar', 'Pebbles', 'Written pages'],
    visualStepsAr: ['اقرأ النص المعلوماتي', 'تتبّع حركة النحلة', 'تعرّف مفردة جديدة', 'اقرأ أمثلة «الـ»'], visualStepsEn: ['Read the information text', 'Trace a bee’s movement', 'Learn a new word', 'Read examples with “al-”']
  },
  {
    unit: 4, page: 75, lastPage: 77, titleAr: 'الفأر والقط', titleEn: 'The Mouse and the Cat',
    focusAr: 'يستمع إلى حكاية قصيرة ويحدد المكان وتسلسل الأحداث، ثم يناقش كيف تساعد ملاحظة التفاصيل وطلب العون على فهم المواقف.',
    focusEn: 'Listen to a short story and identify its setting and sequence, then discuss how noticing details and asking for help can clarify a situation.',
    questionAr: 'ما المهارة القرائية التي تساعد على فهم الموقف في الحكاية؟', questionEn: 'Which reading skill helps explain what is happening in the story?',
    optionsAr: ['الانتباه إلى تفاصيل الحوار والمكان', 'تجاهل كلمات الشخصيات', 'تغيير نهاية القصة قبل قراءتها'], optionsEn: ['Paying attention to dialogue and setting', 'Ignoring the characters’ words', 'Changing the ending before reading'],
    visualStepsAr: ['استمع إلى القصة', 'حدّد المكان', 'رتّب الأحداث', 'استنتج من التفاصيل'], visualStepsEn: ['Listen to the story', 'Identify the setting', 'Sequence the events', 'Infer from details']
  },
  {
    unit: 4, page: 78, lastPage: 80, titleAr: 'طيور الرياض', titleEn: 'Birds in the Gardens',
    focusAr: 'يقرأ قصيدة تصف الطيور والزهور والماء، ويتذوق الصور الحسية، ويتعرف مفردات أصوات الطبيعة مثل التغريد والخرير.',
    focusEn: 'Read a poem describing birds, flowers, and water, notice sensory images, and learn nature-sound words such as chirping and rippling.',
    questionAr: 'أي صوت يناسب جريان الماء؟', questionEn: 'Which sound word matches flowing water?',
    optionsAr: ['الخرير', 'الرنين', 'الصهيل'], optionsEn: ['Rippling', 'Ringing', 'Neighing'],
    visualStepsAr: ['اقرأ أبيات القصيدة', 'لاحظ صور الطبيعة', 'طابق الصوت بمصدره', 'صف مشهداً بجملة'], visualStepsEn: ['Read the poem’s lines', 'Notice nature images', 'Match a sound to its source', 'Describe a scene in one sentence']
  },
  {
    unit: 4, page: 81, lastPage: 84, titleAr: 'النمل', titleEn: 'Ants',
    focusAr: 'يقرأ نصاً وصفياً عن حياة النمل والعمل الجماعي، ويميز المعلومات والتفاصيل، ويتعلم مفردات تدل على الصفات والعلاقات.',
    focusEn: 'Read a descriptive text about ants and group activity, distinguish information from details, and learn words that express qualities and relationships.',
    questionAr: 'كيف تتواصل النملة مع أفراد جماعتها بحسب النص؟', questionEn: 'According to the text, how does an ant communicate with its group?',
    optionsAr: ['تتعرف إليهم بالرائحة', 'ترسل رسالة مكتوبة', 'تستخدم جرساً'], optionsEn: ['It recognizes them by scent', 'It sends a written message', 'It uses a bell'],
    visualStepsAr: ['تعرّف موضوع النص', 'استخرج معلومات النمل', 'صنّف التفاصيل', 'لخّص فكرة التعاون'], visualStepsEn: ['Identify the text topic', 'Find facts about ants', 'Sort the details', 'Summarize the idea of cooperation']
  },

  {
    unit: 5, page: 86, lastPage: 88, titleAr: 'أنا جسمك', titleEn: 'I Am Your Body',
    focusAr: 'يتعرف أجزاء الجسم وحاجاته اليومية للنمو والعافية، ويستخرج من النص كلمات تدل على الحركة والراحة والغذاء.',
    focusEn: 'Identify body parts and everyday needs for growth and well-being, and find words in the text for movement, rest, and food.',
    questionAr: 'أي مجموعة تضم الأجزاء الرئيسة للجسم المذكورة في الدرس؟', questionEn: 'Which group names the main body parts in the lesson?',
    optionsAr: ['الرأس والجذع والأطراف', 'الأزهار والجذور والأوراق', 'الماء والهواء والتربة'], optionsEn: ['Head, trunk, and limbs', 'Flowers, roots, and leaves', 'Water, air, and soil'],
    visualStepsAr: ['اقرأ وصف الجسم', 'سمّ الأجزاء الرئيسة', 'استخرج حاجاته', 'لخّص فكرة العافية'], visualStepsEn: ['Read the body description', 'Name its main parts', 'Find its needs', 'Summarize well-being']
  },
  {
    unit: 5, page: 89, lastPage: 91, titleAr: 'الحواس الخمس', titleEn: 'The Five Senses',
    focusAr: 'يربط أعضاء الحس بوظائفها في أمثلة يومية، ويستخدم الأفعال المناسبة لوصف الملاحظة، ويذكر سلوكاً يحافظ على سلامة الحواس.',
    focusEn: 'Match sense organs with their functions in everyday examples, use suitable verbs to describe observations, and name a way to care for the senses.',
    questionAr: 'بأي عضو نسمع الأصوات؟', questionEn: 'Which organ do we use to hear sounds?',
    optionsAr: ['الأذن', 'العين', 'الأنف'], optionsEn: ['The ear', 'The eye', 'The nose'],
    visualStepsAr: ['لاحظ شيئاً حولك', 'اختر الحاسة المناسبة', 'سمّ العضو', 'صف الملاحظة'], visualStepsEn: ['Notice something around you', 'Choose the relevant sense', 'Name the organ', 'Describe what you noticed']
  },
  {
    unit: 5, page: 92, lastPage: 95, titleAr: 'الدواء في الغذاء', titleEn: 'Food and Well-being',
    focusAr: 'يقرأ حواراً عن تنوع الطعام والاعتدال، ويميز الفكرة الرئيسة من الأمثلة، ويتعلم التعبير عن اختيارات غذائية متوازنة دون وصف علاجي.',
    focusEn: 'Read a dialogue about food variety and moderation, distinguish the main idea from examples, and practise describing balanced food choices without medical claims.',
    questionAr: 'ما الفكرة التي تؤكدها الأم في الحوار؟', questionEn: 'What idea does the mother emphasize in the dialogue?',
    optionsAr: ['تنوع الطعام والاعتدال في تناوله', 'تناول نوع واحد بكثرة', 'ترك الطعام طوال اليوم'], optionsEn: ['Variety and moderation in eating', 'Eating a large amount of only one food', 'Skipping food all day'],
    visualStepsAr: ['اقرأ الحوار', 'حدّد الفكرة الرئيسة', 'اجمع أمثلة الطعام', 'عبّر عن اختيار متنوع'], visualStepsEn: ['Read the dialogue', 'Identify the main idea', 'Collect food examples', 'Describe a varied choice']
  },
  {
    unit: 5, page: 96, lastPage: 100, titleAr: 'المحافظة على الأسنان', titleEn: 'Caring for Teeth',
    focusAr: 'يتعرف وظيفة الأسنان وخطوات العناية اليومية بها، ويستخرج إرشادات واضحة من الحوار، ويراجع الكلمات الدالة على الترتيب.',
    focusEn: 'Learn what teeth do and everyday ways to care for them, find clear guidance in the dialogue, and review sequencing words.',
    questionAr: 'ما الأداة التي تساعد على تنظيف الأسنان؟', questionEn: 'Which tool helps clean teeth?',
    optionsAr: ['فرشاة الأسنان', 'ملعقة الطعام', 'المسطرة'], optionsEn: ['A toothbrush', 'A spoon', 'A ruler'],
    visualStepsAr: ['اقرأ الحوار', 'تعرّف وظيفة الأسنان', 'رتّب خطوات العناية', 'لخّص النصيحة'], visualStepsEn: ['Read the dialogue', 'Learn what teeth do', 'Sequence care steps', 'Summarize the advice']
  },
  {
    unit: 5, page: 101, lastPage: 106, titleAr: 'الأطعمة المكشوفة', titleEn: 'Uncovered Food',
    focusAr: 'يقرأ حواراً عن نظافة الطعام والوقاية، ويستخرج النصائح المرتبطة بغسل الفاكهة وحفظ الطعام، ويصوغها بلغة واضحة.',
    focusEn: 'Read a dialogue about food hygiene and prevention, find advice about washing fruit and storing food, and restate it clearly.',
    questionAr: 'ماذا ينبغي أن نفعل بالفاكهة قبل تناولها؟', questionEn: 'What should we do to fruit before eating it?',
    optionsAr: ['نغسلها بماء نظيف', 'نتركها مكشوفة في الغبار', 'نضعها قرب مواد التنظيف'], optionsEn: ['Wash it with clean water', 'Leave it uncovered in dust', 'Put it near cleaning products'],
    visualStepsAr: ['اقرأ النصيحة', 'ابحث عن سببها', 'اختر سلوك النظافة', 'اكتب إرشاداً قصيراً'], visualStepsEn: ['Read the advice', 'Look for its reason', 'Choose the hygienic action', 'Write a short instruction']
  },

  {
    unit: 6, page: 108, lastPage: 111, titleAr: 'المزارع الحكيم', titleEn: 'The Wise Farmer',
    focusAr: 'يتابع حكاية المزارع وابنه، ويستنتج قيمة العمل والصبر من تسلسل الأحداث، ويميز بين المعنى الحرفي والمقصود من النصيحة.',
    focusEn: 'Follow the farmer and his son’s story, infer the value of work and patience from the events, and distinguish literal wording from the advice’s intended meaning.',
    questionAr: 'كيف استفاد الابن من أرضه في نهاية الحكاية؟', questionEn: 'How did the son benefit from his land at the end of the story?',
    optionsAr: ['زرعها فحصد محصولاً وباعه', 'تركها دون عمل', 'حوّلها إلى مكتبة'], optionsEn: ['He planted it, harvested a crop, and sold it', 'He left it unused', 'He turned it into a library'],
    visualStepsAr: ['اقرأ بداية الحكاية', 'تتبّع النصيحة', 'رتّب ما فعله الابن', 'استنتج العبرة'], visualStepsEn: ['Read the story opening', 'Follow the advice', 'Sequence the son’s actions', 'Infer the lesson']
  },
  {
    unit: 6, page: 112, lastPage: 112, titleAr: 'الفأر وجرّة العسل', titleEn: 'The Mouse and the Jar of Honey',
    focusAr: 'يقرأ تسلسلاً مصوراً لحكاية فأر، ويصف ما يتغير في كل صورة، ويستخدم أدوات الربط ليعيد سرد الأحداث بترتيبها.',
    focusEn: 'Read a picture sequence about a mouse, describe what changes in each picture, and use linking words to retell events in order.',
    questionAr: 'ما الذي يساعد على إعادة سرد الحكاية المصورة؟', questionEn: 'What helps retell a picture story?',
    optionsAr: ['ترتيب الصور ووصف كل حدث', 'بدء السرد من صورة عشوائية', 'تجاهل ما يتغير بين الصور'], optionsEn: ['Ordering the pictures and describing each event', 'Starting with a random picture', 'Ignoring changes between pictures'],
    visualStepsAr: ['لاحظ الصورة الأولى', 'قارن الصور التالية', 'رتّب الأحداث', 'أعد سرد الحكاية'], visualStepsEn: ['Observe the first picture', 'Compare the next pictures', 'Order the events', 'Retell the story']
  },
  {
    unit: 6, page: 113, lastPage: 116, titleAr: 'أشعب الأكول', titleEn: 'Ashʿab the Eager Eater',
    focusAr: 'يقرأ حكاية فكاهية عن أشعب، ويتابع الحوار وسوء الفهم المقصود، ويستنتج كيف تُبنى المفارقة في نهاية القصة.',
    focusEn: 'Read a humorous story about Ashʿab, follow its dialogue and playful misunderstanding, and notice how a surprise ending creates humour.',
    questionAr: 'ما الذي جعل نهاية حكاية أشعب طريفة؟', questionEn: 'What makes the ending of Ashʿab’s story humorous?',
    optionsAr: ['أنه تناول الطعام قبل أن يصدر حكمه', 'أنه غادر قبل وصول الطعام', 'أنه نسي أسماء الشخصيات'], optionsEn: ['He ate the food before giving his judgment', 'He left before the food arrived', 'He forgot the characters’ names'],
    visualStepsAr: ['تعرّف الشخصيات', 'تابع الحوار', 'لاحظ المفارقة', 'اشرح سبب الطرافة'], visualStepsEn: ['Meet the characters', 'Follow the dialogue', 'Notice the surprise', 'Explain the humour']
  },
  {
    unit: 6, page: 117, lastPage: 120, titleAr: 'ملح الطعام', titleEn: 'Table Salt',
    focusAr: 'يقرأ نصاً معلوماتياً يصف وجود الملح في الصخور والماء وتبخر الماء في أحواض، ويتدرب على تتبع خطوات وصفية ومفردات المادة.',
    focusEn: 'Read an informational text about salt in rocks and water and the evaporation of water in ponds, practising process sequencing and material vocabulary.',
    questionAr: 'ما الذي يحدث للماء في أحواض الملح بفعل حرارة الشمس؟', questionEn: 'What happens to water in salt ponds under the sun’s heat?',
    optionsAr: ['يتبخر ويبقى الملح', 'يتحول إلى حجر', 'يزداد حجمه إلى الأبد'], optionsEn: ['It evaporates and the salt remains', 'It turns into stone', 'It grows in volume forever'],
    visualStepsAr: ['اقرأ وصف الملح', 'حدّد مصدره', 'رتّب خطوات التبخر', 'لخّص العملية'], visualStepsEn: ['Read about salt', 'Identify its source', 'Sequence evaporation steps', 'Summarize the process']
  },
  {
    unit: 6, page: 120, lastPage: 127, titleAr: 'التاجر علي واللصوص', titleEn: 'Ali the Merchant and the Thieves',
    focusAr: 'يقرأ نصاً مسرحياً عن علي ومرجانة، ويتتبع القرائن والحوار، ويركز على طلب مساعدة شخص بالغ موثوق عند مواجهة خطر بدلاً من تقليد أفعال غير آمنة.',
    focusEn: 'Read a play about Ali and Marjana, follow clues and dialogue, and focus on seeking help from a trusted adult when facing danger rather than imitating unsafe actions.',
    questionAr: 'ما التصرف الآمن إذا لاحظ طفل موقفاً مقلقاً؟', questionEn: 'What is a safe response if a child notices a worrying situation?',
    optionsAr: ['إخبار شخص بالغ موثوق وطلب المساعدة', 'مواجهة الخطر وحده', 'استخدام أداة مؤذية'], optionsEn: ['Tell a trusted adult and ask for help', 'Face the danger alone', 'Use a harmful object'],
    visualStepsAr: ['اقرأ المشهد', 'تتبّع القرائن', 'ميّز القرار الآمن', 'تدرّب على طلب العون'], visualStepsEn: ['Read the scene', 'Follow the clues', 'Identify a safe choice', 'Practise asking for help']
  },
  {
    unit: 6, page: 128, lastPage: 130, titleAr: 'لعبة الولد التائه', titleEn: 'The Lost Child Game',
    focusAr: 'يتعرف خطوات لعبة جماعية تعتمد على دائرتين وإشارات لفظية، ويفهم التعليمات المكانية، ويتدرب على اتباع الدور والتعاون.',
    focusEn: 'Learn a group game using two circles and spoken cues, understand spatial instructions, and practise taking turns and cooperating.',
    questionAr: 'ما الذي يساعد المجموعة على لعب اللعبة بوضوح؟', questionEn: 'What helps the group play the game clearly?',
    optionsAr: ['اتباع التعليمات وانتظار الدور', 'تغيير القواعد دون إخبار الآخرين', 'دفع اللاعبين للخروج من الدائرة'], optionsEn: ['Following directions and waiting for a turn', 'Changing the rules without telling others', 'Pushing players out of the circle'],
    visualStepsAr: ['كوّن دائرتين', 'استمع إلى الإشارة', 'تحرك حسب الدور', 'تعاون مع المجموعة'], visualStepsEn: ['Form two circles', 'Listen for the cue', 'Move in turn', 'Cooperate with the group']
  }
];

export const SUDAN_PRIMARY_ARABIC_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ARABIC_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-arabic-g3-${order}`;
  const unit = SUDAN_PRIMARY_ARABIC_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));
  const pageRangeEn = lesson.lastPage === lesson.page
    ? `p. ${lesson.page}`
    : `pp. ${lesson.page}–${lesson.lastPage}`;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `اللغة العربية — الصف الثالث الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 3 Arabic — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثالث الابتدائي',
    gradeLevelNameEn: 'Grade 3 Primary',
    ministryAr: 'وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
    ministryEn: 'Ministry of Education — National Center for Curricula and Educational Research — Bakht Al-Ruda',
    termAr: 'اللغة العربية — الصف الثالث',
    termEn: 'Grade 3 Arabic',
    unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل عنوان «${lesson.titleAr}». ما كلمة أو فكرة تتوقع أن تقرأ عنها؟`,
    warmupHookEn: `Look at “${lesson.titleEn}.” What word or idea do you expect to read about?`,
    learningOutcomesAr: [lesson.focusAr, 'يقرأ الفكرة أو المفردات المستهدفة ويجيب عن سؤال مناسب للنص.'],
    learningOutcomesEn: [lesson.focusEn, 'Read the target idea or vocabulary and answer a question about the text.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nاتبع المخطط خطوة خطوة، ثم اشرح ما فهمته بكلماتك، مستنداً إلى عنوان الدرس وكلماته.`,
      contentEn: `${lesson.focusEn}\n\nFollow the diagram one step at a time, then explain what you understood in your own words using the lesson title and vocabulary.`,
      diagram: {
        id: `${id}-lesson-sequence`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `تسلسل التعلم: ${lesson.titleAr}`,
        titleEn: `Learning sequence: ${lesson.titleEn}`,
        captionAr: 'أربع خطوات بصرية لقراءة الموضوع وفهمه والتعبير عنه.',
        captionEn: 'Four visual steps for reading, understanding, and expressing the topic.',
        diagramType: 'primary_lesson_sequence',
        visualSteps
      }
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم: ${lesson.titleAr}`,
      titleEn: `Check: ${lesson.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: lesson.questionAr,
        textEn: lesson.questionEn,
        optionsAr: [...lesson.optionsAr],
        optionsEn: [...lesson.optionsEn],
        correctIndex: 0,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: lesson.titleEn,
        explanationAr: `الإجابة الصحيحة: ${lesson.optionsAr[0]}.`,
        explanationEn: `Correct answer: ${lesson.optionsEn[0]}.`,
        difficulty: 'easy'
      }]
    },
    topicAr: `ص ${lesson.page}`,
    topicEn: pageRangeEn
  };
});
