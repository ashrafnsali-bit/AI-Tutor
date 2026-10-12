import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ARABIC_G5_BOOK = {
  title: 'اللغة العربية — الصف الخامس الابتدائي',
  titleEn: 'Arabic Language — Grade 5 Primary',
  edition: 'المرحلة الابتدائية — الصف الخامس',
  units: [
    { titleAr: 'مراجعة', titleEn: 'Review', firstPage: 5, lastPage: 23 },
    { titleAr: 'قيم وآداب', titleEn: 'Values and Manners', firstPage: 24, lastPage: 59 },
    { titleAr: 'الأسرة والمجتمع', titleEn: 'Family and Society', firstPage: 60, lastPage: 90 },
    { titleAr: 'البيئة والصحة', titleEn: 'Environment and Health', firstPage: 91, lastPage: 121 },
    { titleAr: 'وطني', titleEn: 'My Country', firstPage: 122, lastPage: 151 }
  ]
} as const;

interface ArabicLesson {
  unit: number;
  page: number;
  lastPage: number;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
  visualStepsAr: [string, string, string, string];
  visualStepsEn: [string, string, string, string];
}

const lessons: ArabicLesson[] = [
  {
    unit: 1, page: 6, lastPage: 10, titleAr: 'المرافق العامة', titleEn: 'Public Facilities',
    summaryAr: 'يتعرف المتعلم إلى دور المرافق العامة في خدمة الناس، ويقترح سلوكاً يحافظ عليها وينفع المجتمع.',
    summaryEn: 'Explore how public facilities serve people and suggest ways to care for them for the good of the community.',
    questionAr: 'أي تصرف يحافظ على مرفق عام؟', questionEn: 'Which action helps care for a public facility?',
    optionsAr: ['استعماله بعناية وتركه نظيفاً', 'إتلاف ما فيه للعب', 'منع الآخرين من استخدامه'], optionsEn: ['Use it carefully and leave it clean', 'Damage it for fun', 'Stop others from using it'],
    visualStepsAr: ['حدّد المرفق', 'تعرّف إلى فائدته', 'اختر سلوكاً مسؤولاً', 'شارك فكرتك'], visualStepsEn: ['Name the facility', 'Identify its purpose', 'Choose a responsible action', 'Share your idea']
  },
  {
    unit: 1, page: 11, lastPage: 14, titleAr: 'الولد الرحيم', titleEn: 'The Kind Boy',
    summaryAr: 'يتابع المتعلم أحداث حكاية قصيرة، ويلاحظ كيف يظهر اللطف في أفعال الشخصية وقراراتها.',
    summaryEn: 'Follow a short story and notice how kindness appears in a character’s actions and choices.',
    questionAr: 'ما الدليل الأوضح على الرحمة في حكاية؟', questionEn: 'What is the clearest sign of kindness in a story?',
    optionsAr: ['مساعدة من يحتاج إلى العون', 'السخرية من ضعيف', 'تجاهل من يطلب المساعدة'], optionsEn: ['Helping someone who needs support', 'Mocking someone who is vulnerable', 'Ignoring a request for help'],
    visualStepsAr: ['تعرّف إلى الشخصية', 'تابع الموقف', 'لاحظ اختيارها', 'استنتج أثره'], visualStepsEn: ['Meet the character', 'Follow the situation', 'Notice the choice', 'Infer its effect']
  },
  {
    unit: 1, page: 15, lastPage: 20, titleAr: 'الببغاء واللص', titleEn: 'The Parrot and the Thief',
    summaryAr: 'يرتب المتعلم أحداث القصة، ويربط بين ما تقوله الشخصية وما يحدث نتيجة لذلك.',
    summaryEn: 'Put the story events in order and connect a character’s words with what happens next.',
    questionAr: 'كيف يساعد ترتيب الأحداث على فهم القصة؟', questionEn: 'How does ordering events help us understand a story?',
    optionsAr: ['يوضح ما أدى إلى النتيجة', 'يبدل أسماء الشخصيات', 'يحذف سبب المشكلة'], optionsEn: ['It shows what led to the outcome', 'It changes the characters’ names', 'It removes the cause of the problem'],
    visualStepsAr: ['اقرأ بداية القصة', 'رتّب الأحداث', 'اربط القول بالفعل', 'لخّص النهاية'], visualStepsEn: ['Read the opening', 'Order the events', 'Connect words and actions', 'Summarize the ending']
  },
  {
    unit: 1, page: 21, lastPage: 23, titleAr: 'الجملة الاسمية والفعلية', titleEn: 'Nominal and Verbal Sentences',
    summaryAr: 'يميّز المتعلم الجملة التي تبدأ باسم من الجملة التي تبدأ بفعل، ويصنف أمثلة واضحة.',
    summaryEn: 'Distinguish a sentence that begins with a noun from one that begins with a verb, then classify clear examples.',
    questionAr: 'بماذا تبدأ الجملة الفعلية؟', questionEn: 'What does a verbal sentence begin with?',
    optionsAr: ['بفعل', 'بحرف جر دائماً', 'بصفة دائماً'], optionsEn: ['A verb', 'Always a preposition', 'Always an adjective'],
    visualStepsAr: ['اقرأ الجملة', 'حدّد أول كلمة', 'صنّف نوعها', 'تحقق من المثال'], visualStepsEn: ['Read the sentence', 'Identify its first word', 'Classify its type', 'Check the example']
  },
  {
    unit: 2, page: 25, lastPage: 30, titleAr: 'الأمانة', titleEn: 'Honesty',
    summaryAr: 'يتأمل المتعلم موقفاً عن الأمانة، ويبين كيف يساعد الصدق والإنصاف على حل الخلاف.',
    summaryEn: 'Consider a story about honesty and explain how truthfulness and fairness can help resolve a disagreement.',
    questionAr: 'ما التصرف الأمين عند العثور على شيء ليس لنا؟', questionEn: 'What is an honest choice when we find something that is not ours?',
    optionsAr: ['نسعى إلى إعادته لصاحبه', 'نخفيه لأنفسنا', 'نتصرف فيه دون سؤال'], optionsEn: ['Try to return it to its owner', 'Hide it for ourselves', 'Use it without asking'],
    visualStepsAr: ['افهم الموقف', 'حدّد أصحاب الحق', 'اختر تصرفاً منصفاً', 'اشرح السبب'], visualStepsEn: ['Understand the situation', 'Identify who has a claim', 'Choose a fair action', 'Explain why']
  },
  {
    unit: 2, page: 31, lastPage: 34, titleAr: 'العمل', titleEn: 'Work',
    summaryAr: 'يستكشف المتعلم أثر العمل في حياة الناس، ويقدّر تنوع المهارات التي تسهم في بناء المجتمع.',
    summaryEn: 'Explore the place of work in people’s lives and value the different skills that contribute to a community.',
    questionAr: 'كيف ينتفع المجتمع بتنوع الأعمال؟', questionEn: 'How does a community benefit from different kinds of work?',
    optionsAr: ['تتكامل المهارات لتلبية حاجات الناس', 'يؤدي الجميع العمل نفسه', 'تُهمل الأعمال التي تخدم الآخرين'], optionsEn: ['Different skills work together to meet people’s needs', 'Everyone does the same job', 'Work that serves others is ignored'],
    visualStepsAr: ['سمّ مهنة', 'حدّد مهارتها', 'اربطها بحاجة', 'قدّر أثرها'], visualStepsEn: ['Name a job', 'Identify its skill', 'Connect it to a need', 'Value its contribution']
  },
  {
    unit: 2, page: 35, lastPage: 39, titleAr: 'أيها العمال', titleEn: 'O Workers',
    summaryAr: 'يقرأ المتعلم نصاً شعرياً عن العمل، ويلاحظ ألفاظ التقدير، ثم يشرح فكرته بكلمات بسيطة.',
    summaryEn: 'Read a poem about work, notice words of appreciation, and explain its idea in simple language.',
    questionAr: 'ما طريقة مناسبة للتعبير عن تقدير العامل؟', questionEn: 'What is a thoughtful way to show appreciation for a worker?',
    optionsAr: ['احترام جهده وشكره', 'الاستهانة بعمله', 'مقاطعته وهو يؤدي مهمته'], optionsEn: ['Respect their effort and thank them', 'Dismiss their work', 'Interrupt them while they work'],
    visualStepsAr: ['اقرأ الأبيات', 'لاحظ ألفاظ التقدير', 'استخرج الفكرة', 'عبّر عنها'], visualStepsEn: ['Read the verses', 'Notice words of appreciation', 'Find the main idea', 'Express it']
  },
  {
    unit: 2, page: 40, lastPage: 45, titleAr: 'أهمية التعاون', titleEn: 'The Value of Cooperation',
    summaryAr: 'يفهم المتعلم كيف تتكامل مساهمات أفراد المجموعة، ويقترح طريقة عادلة لإنجاز مهمة مشتركة.',
    summaryEn: 'Explore how group members’ contributions fit together and suggest a fair way to complete a shared task.',
    questionAr: 'ما الذي يجعل التعاون مثمراً؟', questionEn: 'What makes cooperation productive?',
    optionsAr: ['تقاسم الأدوار والاستماع لبعضنا', 'قيام شخص واحد بكل شيء', 'إخفاء المعلومات عن الفريق'], optionsEn: ['Sharing roles and listening to one another', 'One person doing everything', 'Hiding information from the team'],
    visualStepsAr: ['حدّد الهدف', 'وزّع الأدوار', 'تعاون في التنفيذ', 'راجعوا النتيجة'], visualStepsEn: ['Set the goal', 'Share the roles', 'Work together', 'Review the result']
  },
  {
    unit: 2, page: 46, lastPage: 48, titleAr: 'فضل التعاون', titleEn: 'The Benefits of Cooperation',
    summaryAr: 'يتتبع المتعلم صورة التعاون في القصيدة، ويفسر كيف يدعم العمل المشترك إنجازاً نافعاً.',
    summaryEn: 'Notice how cooperation is pictured in the poem and explain how shared effort supports a useful result.',
    questionAr: 'أي موقف يوضح فضل التعاون؟', questionEn: 'Which situation shows the benefit of cooperation?',
    optionsAr: ['يتشارك الزملاء مهمة ويتبادلون المساعدة', 'يتنافس الزملاء على تعطيل المهمة', 'يرفض كل فرد مشاركة ما يعرفه'], optionsEn: ['Classmates share a task and help one another', 'Classmates compete to disrupt the task', 'Everyone refuses to share what they know'],
    visualStepsAr: ['اقرأ القصيدة', 'لاحظ صور العمل', 'حدّد أثر التعاون', 'قدّم مثالاً'], visualStepsEn: ['Read the poem', 'Notice images of work', 'Identify cooperation’s effect', 'Give an example']
  },
  {
    unit: 2, page: 49, lastPage: 55, titleAr: 'حسن المعاملة', titleEn: 'Kind Treatment',
    summaryAr: 'يتعلم المتعلم الإصغاء والتحدث باحترام، ويفكر في أثر المعاملة الحسنة على العلاقات.',
    summaryEn: 'Practice listening and speaking respectfully, and consider how kind treatment affects relationships.',
    questionAr: 'كيف نختلف مع شخص ونحافظ على الاحترام؟', questionEn: 'How can we disagree while remaining respectful?',
    optionsAr: ['نشرح رأينا بهدوء ونستمع إليه', 'نرفع صوتنا ونمنعه من الكلام', 'نسخر من وجهة نظره'], optionsEn: ['Explain our view calmly and listen to theirs', 'Raise our voice and stop them speaking', 'Mock their point of view'],
    visualStepsAr: ['استمع جيداً', 'عبّر بهدوء', 'تفهّم الرأي الآخر', 'اختر رداً محترماً'], visualStepsEn: ['Listen carefully', 'Speak calmly', 'Consider another view', 'Choose a respectful reply']
  },
  {
    unit: 2, page: 56, lastPage: 59, titleAr: 'المبتدأ والخبر', titleEn: 'The Subject and Predicate',
    summaryAr: 'يتعرف المتعلم إلى المبتدأ والخبر بوصفهما جزأين أساسيين في الجملة الاسمية، ويكمل جملاً قصيرة.',
    summaryEn: 'Recognize the subject and predicate as key parts of a nominal sentence and complete short sentences.',
    questionAr: 'ما دور الخبر في الجملة الاسمية؟', questionEn: 'What is the role of the predicate in a nominal sentence?',
    optionsAr: ['يكمل معنى المبتدأ', 'يسبق المبتدأ دائماً', 'يحوّل الجملة إلى سؤال'], optionsEn: ['It completes the meaning of the subject', 'It always comes before the subject', 'It turns the sentence into a question'],
    visualStepsAr: ['اقرأ الجملة', 'عيّن المبتدأ', 'ابحث عن خبره', 'اقرأ المعنى كاملاً'], visualStepsEn: ['Read the sentence', 'Find the subject', 'Find its predicate', 'Read the complete meaning']
  },
  {
    unit: 3, page: 61, lastPage: 65, titleAr: 'تربية الأبناء', titleEn: 'Raising Children',
    summaryAr: 'يناقش المتعلم دور الرعاية والتعليم في نمو الأبناء، ويحدد أمثلة على المسؤولية والتعاون الأسري.',
    summaryEn: 'Explore how care and learning support children’s growth and identify examples of family responsibility and cooperation.',
    questionAr: 'ما الذي يساعد الأبناء على النمو والتعلم؟', questionEn: 'What helps children grow and learn?',
    optionsAr: ['الرعاية والتوجيه والتشجيع', 'إهمال حاجاتهم وأسئلتهم', 'منعهم من التعلم والتجربة'], optionsEn: ['Care, guidance, and encouragement', 'Ignoring their needs and questions', 'Preventing them from learning and trying'],
    visualStepsAr: ['اقرأ الموضوع', 'حدّد أدوار الرعاية', 'اربطها بالتعلم', 'لخّص الفكرة'], visualStepsEn: ['Read the topic', 'Identify ways of caring', 'Connect them to learning', 'Summarize the idea']
  },
  {
    unit: 3, page: 66, lastPage: 69, titleAr: 'حقوق الوالدين', titleEn: 'Parents’ Rights',
    summaryAr: 'يتأمل المتعلم معاني التقدير والوفاء داخل الأسرة، ويقترح تعبيراً عملياً عن الامتنان.',
    summaryEn: 'Consider appreciation and care within a family and suggest a practical way to express gratitude.',
    questionAr: 'أي سلوك يعبّر عن التقدير داخل الأسرة؟', questionEn: 'Which action shows appreciation within a family?',
    optionsAr: ['الإصغاء والمساعدة بلطف', 'تجاهل الحديث والحاجة', 'الرد بقسوة عند الاختلاف'], optionsEn: ['Listening and helping kindly', 'Ignoring a conversation or need', 'Responding harshly when opinions differ'],
    visualStepsAr: ['اقرأ الفكرة', 'حدّد معنى التقدير', 'اختر فعلاً مناسباً', 'عبّر عن أثره'], visualStepsEn: ['Read the idea', 'Identify what appreciation means', 'Choose a fitting action', 'Describe its effect']
  },
  {
    unit: 3, page: 70, lastPage: 72, titleAr: 'وصية أب لابنه', titleEn: 'A Father’s Advice to His Son',
    summaryAr: 'يستخرج المتعلم فكرة من نص النصح، ويعيد صياغتها، ثم يربطها بموقف حياتي آمن ومناسب.',
    summaryEn: 'Draw an idea from a piece of advice, restate it, and connect it to a suitable everyday situation.',
    questionAr: 'كيف نستفيد من نصيحة نقرؤها؟', questionEn: 'How can we benefit from advice we read?',
    optionsAr: ['نفهمها ونختار تطبيقاً مناسباً', 'نكررها دون فهم', 'نتجاهل معناها وسياقها'], optionsEn: ['Understand it and choose a suitable way to apply it', 'Repeat it without understanding', 'Ignore its meaning and context'],
    visualStepsAr: ['اقرأ الوصية', 'اشرح فكرتها', 'اختر موقفاً مناسباً', 'صغ تطبيقاً'], visualStepsEn: ['Read the advice', 'Explain its idea', 'Choose a suitable situation', 'Describe an application']
  },
  {
    unit: 3, page: 73, lastPage: 76, titleAr: 'الصديق الذكي', titleEn: 'The Clever Friend',
    summaryAr: 'يتابع المتعلم طريقة تفكير الشخصية في القصة، ويستدل من القرائن على سبب اختيارها.',
    summaryEn: 'Follow a character’s reasoning in the story and use clues to infer why they made a choice.',
    questionAr: 'ما الذي يساعدنا على فهم قرار شخصية؟', questionEn: 'What helps us understand a character’s decision?',
    optionsAr: ['القرائن في كلامها ومواقفها', 'تجاهل أحداث القصة', 'تغيير نهاية الحكاية قبل قراءتها'], optionsEn: ['Clues in their words and actions', 'Ignoring the story’s events', 'Changing the ending before reading'],
    visualStepsAr: ['تعرّف إلى الموقف', 'اجمع القرائن', 'فسّر القرار', 'تحقق من النتيجة'], visualStepsEn: ['Understand the situation', 'Gather clues', 'Explain the choice', 'Check the outcome']
  },
  {
    unit: 3, page: 77, lastPage: 81, titleAr: 'التكافل الاجتماعي', titleEn: 'Social Solidarity',
    summaryAr: 'يفهم المتعلم كيف يقوي التعاطف والتعاون الروابط بين الناس، ويقترح مبادرة بسيطة وآمنة.',
    summaryEn: 'Explore how empathy and cooperation strengthen community ties and suggest a simple, safe act of support.',
    questionAr: 'ما مثال مناسب على التكافل؟', questionEn: 'What is a suitable example of solidarity?',
    optionsAr: ['مساندة الجار أو الزميل عند الحاجة', 'استبعاد من يحتاج إلى مشاركة', 'نشر أمر خاص دون إذن'], optionsEn: ['Supporting a neighbor or classmate when needed', 'Excluding someone who needs to take part', 'Sharing private information without permission'],
    visualStepsAr: ['لاحظ حاجة الآخرين', 'فكّر في دعم مناسب', 'تعاون باحترام', 'تأمل الأثر'], visualStepsEn: ['Notice others’ needs', 'Think of suitable support', 'Help respectfully', 'Reflect on the effect']
  },
  {
    unit: 3, page: 82, lastPage: 86, titleAr: 'الكريم', titleEn: 'The Generous Person',
    summaryAr: 'يلاحظ المتعلم كيف يظهر الكرم في السلوك اليومي، ويميز المشاركة الواعية من التباهي أو الإسراف.',
    summaryEn: 'Notice how generosity appears in everyday actions and distinguish thoughtful sharing from showing off or waste.',
    questionAr: 'أي تصرف يعبّر عن كرم متزن؟', questionEn: 'Which action shows thoughtful generosity?',
    optionsAr: ['مشاركة ما نستطيع بلطف', 'التباهي بما نقدمه', 'إهدار الموارد لإثارة الانتباه'], optionsEn: ['Kindly sharing what we can', 'Showing off what we give', 'Wasting resources to attract attention'],
    visualStepsAr: ['اقرأ الموقف', 'حدّد حاجة الشخص', 'اختر مشاركة مناسبة', 'لاحظ أثرها'], visualStepsEn: ['Read the situation', 'Identify the person’s need', 'Choose suitable sharing', 'Notice its effect']
  },
  {
    unit: 3, page: 87, lastPage: 90, titleAr: 'الظرف', titleEn: 'Adverbs of Time and Place',
    summaryAr: 'يتعرف المتعلم إلى كلمات تبين زمان الفعل أو مكانه، ويستخدمها لإضافة معلومة واضحة إلى الجملة.',
    summaryEn: 'Recognize words that show when or where an action happens and use them to add clear information to a sentence.',
    questionAr: 'ماذا يبين ظرف المكان؟', questionEn: 'What does an adverb of place show?',
    optionsAr: ['مكان حدوث الفعل', 'اسم الفاعل دائماً', 'عدد حروف الكلمة'], optionsEn: ['Where an action happens', 'Always the subject’s name', 'The number of letters in a word'],
    visualStepsAr: ['اقرأ الجملة', 'ابحث عن كلمة الزمان أو المكان', 'حدّد ما توضحه', 'أكمل بجملة جديدة'], visualStepsEn: ['Read the sentence', 'Find the time or place word', 'Identify what it tells us', 'Write a new sentence']
  },
  {
    unit: 4, page: 92, lastPage: 96, titleAr: 'صحة الفم والأسنان', titleEn: 'Oral and Dental Health',
    summaryAr: 'يتعلم المتعلم عادات يومية للعناية بالفم، ويفكر في خيارات صحية مناسبة ويطلب مساعدة بالغ موثوق عند الحاجة.',
    summaryEn: 'Learn daily habits for oral care, consider suitable healthy choices, and ask a trusted adult for help when needed.',
    questionAr: 'أي عادة تدعم صحة الأسنان؟', questionEn: 'Which habit supports dental health?',
    optionsAr: ['تنظيف الأسنان بانتظام', 'إهمال نظافة الفم', 'تناول الحلوى بدلاً من الوجبات دائماً'], optionsEn: ['Cleaning teeth regularly', 'Neglecting oral care', 'Always eating sweets instead of meals'],
    visualStepsAr: ['تعرّف إلى العادة', 'اختر وقتاً مناسباً', 'اعتنِ بنظافة الفم', 'اطلب المساعدة عند الحاجة'], visualStepsEn: ['Identify the habit', 'Choose a regular time', 'Care for oral hygiene', 'Ask for help when needed']
  },
  {
    unit: 4, page: 97, lastPage: 100, titleAr: 'احمِ الطبيعة يا فتى', titleEn: 'Protect Nature, Young Friend',
    summaryAr: 'يتأمل المتعلم قيمة الطبيعة، ويحدد أفعالاً يومية تقلل الضرر وتحافظ على الموارد.',
    summaryEn: 'Consider the value of nature and identify everyday actions that reduce harm and conserve resources.',
    questionAr: 'أي سلوك يحافظ على البيئة؟', questionEn: 'Which action helps protect the environment?',
    optionsAr: ['تقليل النفايات واحترام الكائنات', 'إلقاء المخلفات في الماء', 'إتلاف النباتات للعب'], optionsEn: ['Reducing waste and respecting living things', 'Throwing rubbish into water', 'Damaging plants for fun'],
    visualStepsAr: ['لاحظ عنصراً طبيعياً', 'حدّد ما يحتاجه', 'اختر فعلاً يحميه', 'شارك الآخرين'], visualStepsEn: ['Notice a natural feature', 'Identify what it needs', 'Choose an action to protect it', 'Share the idea']
  },
  {
    unit: 4, page: 101, lastPage: 105, titleAr: 'عند طبيب العيون', titleEn: 'At the Eye Doctor',
    summaryAr: 'يتعرف المتعلم إلى أهمية الانتباه لصحة العين، والتعبير بوضوح عن الحاجة إلى فحص أو مساعدة من مختص.',
    summaryEn: 'Explore why eye health matters and how to clearly explain a need for a check-up or help from a professional.',
    questionAr: 'ماذا نفعل إذا أقلقتنا مشكلة في العين؟', questionEn: 'What should we do if an eye problem concerns us?',
    optionsAr: ['نخبر بالغاً موثوقاً ونطلب رأي مختص', 'نخفي المشكلة دائماً', 'نستخدم علاجاً من تلقاء أنفسنا'], optionsEn: ['Tell a trusted adult and ask a professional', 'Always hide the problem', 'Use a treatment on our own'],
    visualStepsAr: ['لاحظ ما تشعر به', 'اشرحه لشخص موثوق', 'استمع إلى المختص', 'اتبع إرشاداً مناسباً'], visualStepsEn: ['Notice how you feel', 'Explain it to a trusted person', 'Listen to a professional', 'Follow suitable guidance']
  },
  {
    unit: 4, page: 106, lastPage: 108, titleAr: 'تدوير النفايات', titleEn: 'Recycling Waste',
    summaryAr: 'يفهم المتعلم كيف يقلل الفرز وإعادة الاستخدام بعض النفايات، ويصنف أمثلة مألوفة بطريقة آمنة.',
    summaryEn: 'Explore how sorting and reusing can reduce some waste and safely classify familiar examples.',
    questionAr: 'ما فائدة فرز المواد القابلة للتدوير؟', questionEn: 'What is one benefit of sorting recyclable materials?',
    optionsAr: ['يساعد على إعادة استخدامها', 'يزيد اختلاطها بالنفايات', 'يجعل رميها في الشارع أفضل'], optionsEn: ['It helps them be reused', 'It mixes them more with other waste', 'It makes littering a better choice'],
    visualStepsAr: ['لاحظ نوع المادة', 'افرزها بأمان', 'أعد استخدامها إن أمكن', 'ضع الباقي في مكانه'], visualStepsEn: ['Identify the material', 'Sort it safely', 'Reuse it if possible', 'Place the rest properly']
  },
  {
    unit: 4, page: 109, lastPage: 111, titleAr: 'الدواء في الغذاء', titleEn: 'Medicine in Food',
    summaryAr: 'يربط المتعلم بين الغذاء المتنوع والعافية، ويميّز المعلومات الصحية العامة عن النصيحة الطبية المتخصصة.',
    summaryEn: 'Connect varied foods with wellbeing and distinguish general health information from professional medical advice.',
    questionAr: 'من نسأل عن غذاء يناسب حالة صحية خاصة؟', questionEn: 'Whom should we ask about food for a specific health condition?',
    optionsAr: ['مختص صحي مع بالغ موثوق', 'شائعة غير معروفة المصدر', 'أي شخص دون التحقق'], optionsEn: ['A health professional with a trusted adult', 'An unverified rumor', 'Anyone without checking'],
    visualStepsAr: ['اقرأ الفكرة', 'ميّز المعلومة العامة', 'اسأل مختصاً عند الحاجة', 'اختر غذاءً متنوعاً'], visualStepsEn: ['Read the idea', 'Identify general information', 'Ask a professional when needed', 'Choose varied foods']
  },
  {
    unit: 4, page: 112, lastPage: 115, titleAr: 'الفأس والشجرة', titleEn: 'The Axe and the Tree',
    summaryAr: 'يتأمل المتعلم العلاقة بين تصرف الإنسان وأثره في الأشجار، ويقترح بديلاً يحمي الطبيعة.',
    summaryEn: 'Consider how human actions affect trees and suggest an alternative that protects nature.',
    questionAr: 'ما خيار مسؤول عند الحاجة إلى مورد من الطبيعة؟', questionEn: 'What is a responsible choice when we need a natural resource?',
    optionsAr: ['استخدامه بحكمة وتقليل الضرر', 'إتلاف أشجار أكثر من الحاجة', 'إهمال أثر الفعل على البيئة'], optionsEn: ['Use it thoughtfully and limit harm', 'Damage more trees than necessary', 'Ignore the action’s effect on nature'],
    visualStepsAr: ['لاحظ المشكلة', 'تأمل أثرها', 'اختر بديلاً مسؤولاً', 'اقترح حماية للمستقبل'], visualStepsEn: ['Notice the problem', 'Consider its effect', 'Choose a responsible alternative', 'Suggest future protection']
  },
  {
    unit: 4, page: 116, lastPage: 121, titleAr: 'كان وأخواتها', titleEn: 'Kāna and Its Sisters',
    summaryAr: 'يتعرف المتعلم إلى أفعال تدخل على الجملة الاسمية وتغير ضبط جزأيها، ويمارس ملاحظتها في أمثلة قصيرة.',
    summaryEn: 'Explore verbs that enter a nominal sentence and affect the form of its two parts, then notice them in short examples.',
    questionAr: 'ما الذي تفعله كان وأخواتها بالجملة الاسمية؟', questionEn: 'What do kāna and its sisters do to a nominal sentence?',
    optionsAr: ['تدخل عليها وتؤثر في إعراب جزأيها', 'تحذف كل كلماتها', 'تحول كل اسم إلى حرف'], optionsEn: ['They enter it and affect the grammatical case of its two parts', 'They remove all its words', 'They turn every noun into a particle'],
    visualStepsAr: ['اقرأ الجملة الاسمية', 'أدخل الفعل الناسخ', 'لاحظ التغيير', 'تحقق من المعنى والإعراب'], visualStepsEn: ['Read the nominal sentence', 'Add the auxiliary verb', 'Notice the change', 'Check meaning and grammar']
  },
  {
    unit: 5, page: 123, lastPage: 128, titleAr: 'الكنداكات', titleEn: 'The Kandakas',
    summaryAr: 'يتعرف المتعلم إلى حضور الكنداكات في تاريخ السودان، ويستدل على أثر الشخصيات التاريخية من المعلومات الواردة.',
    summaryEn: 'Learn about the Kandakas in Sudanese history and use information from the text to consider historical figures’ influence.',
    questionAr: 'كيف نبني فهماً لشخصية تاريخية؟', questionEn: 'How can we build an understanding of a historical figure?',
    optionsAr: ['نجمع معلومات موثوقة ونربطها بسياقها', 'نعتمد على التخمين وحده', 'نتجاهل زمن الأحداث'], optionsEn: ['Gather reliable information and connect it to its context', 'Rely only on guesses', 'Ignore when events happened'],
    visualStepsAr: ['تعرّف إلى الاسم', 'اجمع قرائن النص', 'اربطها بالسياق', 'لخّص الأثر'], visualStepsEn: ['Meet the figure', 'Gather textual clues', 'Connect them to context', 'Summarize the influence']
  },
  {
    unit: 5, page: 129, lastPage: 134, titleAr: 'أمة الأمجاد', titleEn: 'A Nation of Achievements',
    summaryAr: 'يقرأ المتعلم أبياتاً عن تاريخ المجتمع، ويلاحظ ألفاظ الاعتزاز، ثم يعبّر عن الفكرة دون انتقاص من الآخرين.',
    summaryEn: 'Read verses about a community’s history, notice expressions of pride, and share the idea without putting others down.',
    questionAr: 'كيف يكون الاعتزاز بالوطن جامعاً ومحترماً؟', questionEn: 'How can national pride be inclusive and respectful?',
    optionsAr: ['نقدر تاريخنا ونحترم الشعوب الأخرى', 'نقلل من شأن ثقافات الآخرين', 'نزعم أن تاريخ الجميع واحد'], optionsEn: ['Value our history and respect other peoples', 'Dismiss other cultures', 'Claim that everyone has the same history'],
    visualStepsAr: ['اقرأ الأبيات', 'لاحظ ألفاظ الاعتزاز', 'استخرج الفكرة', 'عبّر باحترام'], visualStepsEn: ['Read the verses', 'Notice words of pride', 'Find the main idea', 'Express it respectfully']
  },
  {
    unit: 5, page: 135, lastPage: 137, titleAr: 'السلطان تاج الدين', titleEn: 'Sultan Taj al-Din',
    summaryAr: 'يتعرف المتعلم إلى شخصية من التاريخ السوداني، ويرتب المعلومات والأحداث لفهم دورها في النص.',
    summaryEn: 'Learn about a figure from Sudanese history and organize information and events to understand their role in the text.',
    questionAr: 'ما الذي يساعد على فهم دور شخصية تاريخية؟', questionEn: 'What helps us understand the role of a historical figure?',
    optionsAr: ['ربط أفعالها بزمنها وسياقها', 'فصل الأحداث عن سياقها', 'إضافة أحداث لم يذكرها النص'], optionsEn: ['Connect their actions to their time and context', 'Separate events from their context', 'Add events not mentioned in the text'],
    visualStepsAr: ['حدّد الشخصية', 'رتّب الأحداث', 'اربطها بالسياق', 'استنتج دورها'], visualStepsEn: ['Identify the figure', 'Order the events', 'Connect them to context', 'Infer the role']
  },
  {
    unit: 5, page: 138, lastPage: 140, titleAr: 'الأميرة مندي بنت السلطان عجبنا', titleEn: 'Princess Mandi, Daughter of Sultan Ajabna',
    summaryAr: 'يتابع المتعلم سيرة أميرة سودانية، ويستخرج من النص معلومات تدعم وصف شخصيتها وأفعالها.',
    summaryEn: 'Follow the account of a Sudanese princess and use details from the text to describe her character and actions.',
    questionAr: 'ما الطريقة الأدق لوصف شخصية في سيرة؟', questionEn: 'What is the most accurate way to describe someone in a biography?',
    optionsAr: ['الاستناد إلى أفعال ومعلومات النص', 'الاكتفاء بالظن', 'نسب أقوال إليها دون دليل'], optionsEn: ['Use actions and information from the text', 'Rely only on assumptions', 'Attribute words to them without evidence'],
    visualStepsAr: ['اقرأ السيرة', 'اجمع معلوماتها', 'استدل على الصفات', 'صغ وصفاً دقيقاً'], visualStepsEn: ['Read the account', 'Gather its information', 'Use evidence for traits', 'Write an accurate description']
  },
  {
    unit: 5, page: 141, lastPage: 144, titleAr: 'بشير يوسف التيجاني', titleEn: 'Bashir Yousif al-Tijani',
    summaryAr: 'يتعرف المتعلم إلى شاعر سوداني، ويلتقط معلومات عن حياته وأسلوبه من النص دون الخلط بين الحقيقة والرأي.',
    summaryEn: 'Learn about a Sudanese poet and identify details about his life and style while distinguishing fact from opinion.',
    questionAr: 'أي عبارة تعد معلومة يمكن التحقق منها؟', questionEn: 'Which statement is a detail that can be checked?',
    optionsAr: ['ذكر اسم عمل أو حدث يورده النص', 'قول إن كل قارئ سيحبه', 'تخمين ما لم يذكره النص'], optionsEn: ['Naming a work or event given in the text', 'Saying every reader will like him', 'Guessing what the text does not say'],
    visualStepsAr: ['تعرّف إلى الشاعر', 'اجمع المعلومات', 'ميّز الحقيقة من الرأي', 'لخّص إسهامه'], visualStepsEn: ['Meet the poet', 'Gather information', 'Separate fact from opinion', 'Summarize his contribution']
  },
  {
    unit: 5, page: 145, lastPage: 151, titleAr: 'إن وأخواتها', titleEn: 'Inna and Its Sisters',
    summaryAr: 'يتعرف المتعلم إلى حروف تدخل على الجملة الاسمية وتغير ضبط جزأيها، ويتدرب على ملاحظتها في أمثلة واضحة.',
    summaryEn: 'Explore particles that enter a nominal sentence and affect the grammatical case of its two parts, then notice them in clear examples.',
    questionAr: 'ماذا تفعل إن وأخواتها عند دخولها على الجملة الاسمية؟', questionEn: 'What happens when inna and its sisters enter a nominal sentence?',
    optionsAr: ['تؤثر في إعراب المبتدأ والخبر', 'تحذف المبتدأ والخبر دائماً', 'تجعل الجملة بلا معنى'], optionsEn: ['They affect the grammatical case of the subject and predicate', 'They always delete the subject and predicate', 'They make the sentence meaningless'],
    visualStepsAr: ['اقرأ الجملة الاسمية', 'أدخل الحرف الناسخ', 'لاحظ أثره', 'راجع الإعراب'], visualStepsEn: ['Read the nominal sentence', 'Add the particle', 'Notice its effect', 'Review the grammar']
  }
];

export const SUDAN_PRIMARY_ARABIC_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ARABIC_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-arabic-g5-${order}`;
  const unit = SUDAN_PRIMARY_ARABIC_G5_BOOK.units[lesson.unit - 1];
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
    subtitleAr: `اللغة العربية — الصف الخامس الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 Arabic — ${unit.titleEn}`,
    descriptionAr: lesson.summaryAr,
    descriptionEn: lesson.summaryEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Grade 5 Primary',
    termAr: 'اللغة العربية — الصف الخامس',
    termEn: 'Grade 5 Arabic',
    unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل عنوان «${lesson.titleAr}». ما الفكرة أو المفردة التي تتوقع أن تقرأ عنها؟`,
    warmupHookEn: `Look at “${lesson.titleEn}.” What idea or word do you expect to read about?`,
    learningOutcomesAr: [lesson.summaryAr, 'يستدل من النص ويجيب عن سؤال بفكرة واضحة.'],
    learningOutcomesEn: [lesson.summaryEn, 'Use details from the text to answer a question clearly.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.summaryAr,
    summaryEn: lesson.summaryEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.summaryAr}\n\nاقرأ النص، ثم استعن بالخطوات لتحديد فكرته والتعبير عنها بكلماتك.`,
      contentEn: `${lesson.summaryEn}\n\nRead the text, then use the steps to identify its main idea and explain it in your own words.`,
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
