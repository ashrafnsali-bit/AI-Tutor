import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ARABIC_G4_BOOK = {
  title: 'اللغة العربية — الصف الرابع الابتدائي',
  titleEn: 'Arabic Language — Grade 4 Primary',
  edition: 'المرحلة الابتدائية — الصف الرابع',
  units: [
    { titleAr: 'قيم وآداب', titleEn: 'Values and Manners', firstPage: 5, lastPage: 27 },
    { titleAr: 'البيئة', titleEn: 'The Environment', firstPage: 28, lastPage: 44 },
    { titleAr: 'عظماء من بلادي', titleEn: 'Notable People of My Country', firstPage: 45, lastPage: 62 },
    { titleAr: 'من قصص الحيوان', titleEn: 'From Animal Stories', firstPage: 63, lastPage: 84 },
    { titleAr: 'موضوعات متنوعة', titleEn: 'A Variety of Topics', firstPage: 85, lastPage: 104 }
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
    unit: 1, page: 6, lastPage: 8, titleAr: 'ابتهالات', titleEn: 'Reflections and Prayers',
    summaryAr: 'يقرأ المتعلم أبيات «ابتهالات» بتأنٍّ، ويلاحظ الصور والكلمات المتكررة، ثم يشرح الفكرة التي فهمها بأسلوبه.',
    summaryEn: 'Read the verses of “Reflections and Prayers” carefully, notice their imagery and repeated words, then explain the idea in your own words.',
    questionAr: 'ما الذي يساعد القارئ على فهم صورة شعرية؟', questionEn: 'What helps a reader understand a poetic image?',
    optionsAr: ['ربط الكلمات بسياق الأبيات', 'تجاهل الكلمات المحيطة', 'قراءة العنوان وحده'], optionsEn: ['Connecting the words to the verses around them', 'Ignoring the surrounding words', 'Reading only the title'],
    visualStepsAr: ['اقرأ الأبيات', 'لاحظ الكلمات المتكررة', 'فسّر صورة من السياق', 'عبّر عن الفكرة'], visualStepsEn: ['Read the verses', 'Notice repeated words', 'Interpret an image from context', 'Explain the idea']
  },
  {
    unit: 1, page: 9, lastPage: 15, titleAr: 'الصداقة كنز لا يفنى', titleEn: 'Friendship Is a Lasting Treasure',
    summaryAr: 'يتتبع المتعلم معنى الصداقة في النص، ويستدل على الوفاء والمساندة من أقوال الشخصيات وأفعالها.',
    summaryEn: 'Explore the meaning of friendship in the text and use characters’ words and actions to identify loyalty and support.',
    questionAr: 'أي موقف يدل على صداقة متينة؟', questionEn: 'Which situation shows a strong friendship?',
    optionsAr: ['مساندة الصديق وقت الحاجة', 'نشر سرّ الصديق', 'الابتعاد عند ظهور مشكلة'], optionsEn: ['Supporting a friend when needed', 'Sharing a friend’s secret', 'Leaving when a problem appears'],
    visualStepsAr: ['تعرّف الشخصيات', 'تابع مواقفها', 'استخرج دليلاً على الوفاء', 'لخّص معنى الصداقة'], visualStepsEn: ['Meet the characters', 'Follow their actions', 'Find evidence of loyalty', 'Summarize the meaning of friendship']
  },
  {
    unit: 1, page: 16, lastPage: 20, titleAr: 'شجاعة ونبل', titleEn: 'Courage and Nobility',
    summaryAr: 'يتابع المتعلم أحداث الحكاية، ويميّز بين الشجاعة المتزنة والتسرع، ويلاحظ كيف يجتمع حسن التصرف مع مساعدة الآخرين.',
    summaryEn: 'Follow the story, distinguish thoughtful courage from rashness, and notice how good judgment can help others.',
    questionAr: 'ما الذي يجعل التصرف الشجاع متزناً؟', questionEn: 'What makes a courageous action thoughtful?',
    optionsAr: ['التفكير في الموقف واختيار مساعدة مناسبة', 'الاندفاع من دون تقدير', 'ترك الآخرين يواجهون المشكلة وحدهم'], optionsEn: ['Considering the situation and choosing a helpful response', 'Rushing in without thinking', 'Leaving others to face the problem alone'],
    visualStepsAr: ['اقرأ بداية الحكاية', 'رتّب الأحداث', 'لاحظ قرار الشخصية', 'استنتج أثره'], visualStepsEn: ['Read the story opening', 'Put events in order', 'Notice the character’s decision', 'Infer its effect']
  },
  {
    unit: 1, page: 21, lastPage: 24, titleAr: 'حرية وسلام وعدالة', titleEn: 'Freedom, Peace, and Justice',
    summaryAr: 'يتأمل المتعلم معاني الحرية والسلام والعدل كما يعرضها النص، ويميّز بين التعبير عن الرأي واحترام حقوق الآخرين.',
    summaryEn: 'Consider how the text presents freedom, peace, and justice, and distinguish expressing an opinion from respecting others’ rights.',
    questionAr: 'أي سلوك يجمع بين حرية الرأي واحترام الآخرين؟', questionEn: 'Which action combines freedom of opinion with respect for others?',
    optionsAr: ['التعبير عن الرأي بهدوء والاستماع للآخرين', 'منع الآخرين من الكلام', 'السخرية من رأي مختلف'], optionsEn: ['Sharing an opinion calmly and listening to others', 'Preventing others from speaking', 'Mocking a different opinion'],
    visualStepsAr: ['اقرأ النص', 'حدّد الكلمات الرئيسة', 'قارن بين المفاهيم', 'صغ مثالاً محترماً'], visualStepsEn: ['Read the text', 'Identify key words', 'Compare the ideas', 'Give a respectful example']
  },
  {
    unit: 1, page: 25, lastPage: 27, titleAr: 'نصيحة أم لابنتها', titleEn: 'A Mother’s Advice to Her Daughter',
    summaryAr: 'يتعرف المتعلم إلى نصيحة الأم، ويستخرج منها توجيهات عملية للحوار والتصرف الحسن، ثم يعيد صياغة فكرة منها.',
    summaryEn: 'Explore the mother’s advice, identify practical guidance for kind communication and thoughtful conduct, then restate one idea.',
    questionAr: 'كيف نستفيد من نصيحة نقرؤها؟', questionEn: 'How can we make use of advice we read?',
    optionsAr: ['نفهم معناها ونختار تطبيقاً مناسباً', 'نكررها دون فهم', 'نرفضها قبل الاستماع إليها'], optionsEn: ['Understand it and choose a suitable way to apply it', 'Repeat it without understanding', 'Reject it before listening'],
    visualStepsAr: ['اقرأ النصيحة', 'اشرح كلماتها', 'اختر توجيهاً عملياً', 'اكتب مثالاً'], visualStepsEn: ['Read the advice', 'Explain its words', 'Choose practical guidance', 'Write an example']
  },

  {
    unit: 2, page: 29, lastPage: 30, titleAr: 'الماء في حياتنا', titleEn: 'Water in Our Lives',
    summaryAr: 'يستكشف المتعلم استعمالات الماء في الحياة، ويجمع أمثلة من النص، ثم يذكر طريقة مسؤولة للمحافظة عليه.',
    summaryEn: 'Explore how water is used in daily life, gather examples from the text, and name a responsible way to conserve it.',
    questionAr: 'أي عادة تساعد على المحافظة على الماء؟', questionEn: 'Which habit helps conserve water?',
    optionsAr: ['إغلاق الصنبور عند عدم الحاجة', 'ترك الماء جارياً بلا استخدام', 'ملء الأوعية ثم إهمالها'], optionsEn: ['Turning off a tap when it is not needed', 'Leaving water running unused', 'Filling containers and then leaving them'],
    visualStepsAr: ['اقرأ الفقرة', 'استخرج استعمالات الماء', 'ناقش أهميته', 'اقترح سلوكاً للمحافظة عليه'], visualStepsEn: ['Read the passage', 'Find uses of water', 'Discuss its importance', 'Suggest a conservation habit']
  },
  {
    unit: 2, page: 31, lastPage: 33, titleAr: 'المطر', titleEn: 'Rain',
    summaryAr: 'يقرأ المتعلم وصف المطر في أبيات النص، ويربط مفرداته بما يراه في الطبيعة، ثم يلخص أثر المطر في البيئة.',
    summaryEn: 'Read how the verses describe rain, connect their vocabulary to observations in nature, and summarize rain’s effect on the environment.',
    questionAr: 'ما الذي يمكن أن يلاحظه القارئ في وصف المطر؟', questionEn: 'What might a reader notice in a description of rain?',
    optionsAr: ['أصواته وآثاره في الطبيعة', 'ألوان أدوات الصف', 'ترتيب أيام الأسبوع'], optionsEn: ['Its sounds and effects in nature', 'The colors of classroom supplies', 'The order of the days of the week'],
    visualStepsAr: ['اقرأ الأبيات', 'تخيّل المشهد', 'فسّر مفردة من السياق', 'لخّص أثر المطر'], visualStepsEn: ['Read the verses', 'Picture the scene', 'Explain a word from context', 'Summarize rain’s effect']
  },
  {
    unit: 2, page: 34, lastPage: 37, titleAr: 'غابات السودان', titleEn: 'Forests of Sudan',
    summaryAr: 'يتعرف المتعلم إلى ما تقدمه الغابات من موارد ومنافع، مثل موائل الحيوانات والمواد التي يستفيد منها الناس، ويستند إلى النص في ذكرها.',
    summaryEn: 'Learn about benefits and resources forests provide, including animal habitats and materials people use, citing details from the passage.',
    questionAr: 'أي فائدة للغابات يذكرها النص؟', questionEn: 'Which benefit of forests is mentioned in the passage?',
    optionsAr: ['توفير موائل للحيوان وموارد للناس', 'إيقاف نمو جميع النباتات', 'منع هطول المطر دائماً'], optionsEn: ['Providing wildlife habitats and resources for people', 'Stopping all plants from growing', 'Always preventing rainfall'],
    visualStepsAr: ['اقرأ وصف الغابات', 'استخرج مواردها', 'صنّف المنافع', 'اربطها بالبيئة'], visualStepsEn: ['Read about forests', 'Find their resources', 'Group the benefits', 'Connect them to the environment']
  },
  {
    unit: 2, page: 38, lastPage: 44, titleAr: 'كيف نحافظ على الغابات؟', titleEn: 'How Can We Care for Forests?',
    summaryAr: 'يناقش المتعلم أساليب حماية الغابات، ويربط بين سلامة الأشجار واستمرار منافعها، ويقترح خطوات بسيطة تراعي البيئة.',
    summaryEn: 'Discuss ways to protect forests, connect healthy trees with continuing benefits, and suggest simple actions that care for the environment.',
    questionAr: 'أي عمل يساعد على حماية الغابة؟', questionEn: 'Which action helps protect a forest?',
    optionsAr: ['تجنب إتلاف الأشجار وترك المكان نظيفاً', 'إشعال النار قرب الأشجار', 'قطع الأغصان للعب بها'], optionsEn: ['Avoiding damage to trees and leaving the area clean', 'Lighting a fire near trees', 'Breaking branches for play'],
    visualStepsAr: ['تأمل منافع الغابة', 'حدّد ما يهددها', 'اختر سلوكاً حامياً', 'شارك اقتراحك'], visualStepsEn: ['Consider forest benefits', 'Identify what may harm them', 'Choose a protective action', 'Share your suggestion']
  },

  {
    unit: 3, page: 46, lastPage: 49, titleAr: 'بابكر بدري', titleEn: 'Babiker Badri',
    summaryAr: 'يقرأ المتعلم سيرة بابكر بدري كما يعرضها النص، ويستخرج معلومات عن جهوده في التعليم، ثم يرتبها في جمل واضحة.',
    summaryEn: 'Read the account of Babiker Badri, identify information about his work in education, and organize it in clear sentences.',
    questionAr: 'أي مجال تركز عليه سيرة بابكر بدري في هذا النص؟', questionEn: 'Which field does this account of Babiker Badri focus on?',
    optionsAr: ['التعليم وجهوده فيه', 'استكشاف أعماق البحار', 'تصميم الطائرات'], optionsEn: ['Education and his work in it', 'Exploring the deep sea', 'Designing aircraft'],
    visualStepsAr: ['تعرّف الشخصية', 'استخرج معلومات السيرة', 'رتّبها زمنياً', 'لخّص أبرز الجهود'], visualStepsEn: ['Meet the person', 'Find biographical details', 'Put them in order', 'Summarize key efforts']
  },
  {
    unit: 3, page: 50, lastPage: 53, titleAr: 'إسماعيل الأزهري', titleEn: 'Ismail Al-Azhari',
    summaryAr: 'يتابع المتعلم محطات من حياة إسماعيل الأزهري الواردة في النص، ويميز بين المعلومات الزمنية والتعليمية، من غير تعميم أو مبالغة.',
    summaryEn: 'Follow points in Ismail Al-Azhari’s life described in the text and distinguish time and education details without overgeneralizing.',
    questionAr: 'ما الطريقة المناسبة لفهم سيرة شخصية؟', questionEn: 'What is a good way to understand a person’s biography?',
    optionsAr: ['ترتيب المعلومات والتحقق من معناها في النص', 'إضافة تفاصيل لم ترد فيه', 'الاعتماد على الاسم وحده'], optionsEn: ['Organizing details and checking their meaning in the text', 'Adding details that are not included', 'Relying on the name alone'],
    visualStepsAr: ['اقرأ السيرة', 'حدّد الأحداث', 'رتّب المعلومات', 'لخّصها بحياد'], visualStepsEn: ['Read the account', 'Identify events', 'Organize the details', 'Summarize neutrally']
  },
  {
    unit: 3, page: 54, lastPage: 56, titleAr: 'عبد القادر أوكير', titleEn: 'Abd al-Qadir Awkir',
    summaryAr: 'يستخرج المتعلم من النص معلومات عن عبد القادر أوكير وصلته بمدينة سواكن، ويتدرب على شرح المفردات واستخدامها.',
    summaryEn: 'Find details in the text about Abd al-Qadir Awkir and his connection with Suakin, then practise explaining and using vocabulary.',
    questionAr: 'ما المكان الذي يرد في بداية النص عن عبد القادر أوكير؟', questionEn: 'Which place is mentioned near the beginning of the text about Abd al-Qadir Awkir?',
    optionsAr: ['مدينة سواكن', 'مدينة في أعماق الصحراء', 'جزيرة بعيدة في المحيط'], optionsEn: ['The city of Suakin', 'A city deep in the desert', 'A distant island in the ocean'],
    visualStepsAr: ['اقرأ المقطع', 'حدّد اسم المكان', 'استخرج معلومة عنه', 'استخدم كلمة جديدة'], visualStepsEn: ['Read the passage', 'Identify the place', 'Find a detail about it', 'Use a new word']
  },
  {
    unit: 3, page: 57, lastPage: 59, titleAr: 'الشيخة أمونة', titleEn: 'Sheikha Amuna',
    summaryAr: 'يتعرف المتعلم إلى ما يذكره النص عن تعليم الشيخة أمونة وعنايتها بالناس، ويستخلص كيف تخدم المعرفة والتكافل المجتمع.',
    summaryEn: 'Explore what the text says about Sheikha Amuna’s teaching and care for people, and consider how learning and mutual support serve a community.',
    questionAr: 'أي عملين يصفهما النص للشيخة أمونة؟', questionEn: 'Which two activities does the text describe Sheikha Amuna doing?',
    optionsAr: ['تعليم القرآن وإطعام الطعام', 'صناعة السفن ورسم الخرائط', 'رعي الخيل وزراعة القطن'], optionsEn: ['Teaching the Quran and providing food', 'Building ships and drawing maps', 'Herding horses and growing cotton'],
    visualStepsAr: ['اقرأ السيرة', 'استخرج أعمالها', 'اربط العمل بأثره', 'عبّر عن قيمة التعلم'], visualStepsEn: ['Read the account', 'Find her activities', 'Connect actions to their effects', 'Express the value of learning']
  },
  {
    unit: 3, page: 60, lastPage: 62, titleAr: 'خليل فرح', titleEn: 'Khalil Farah',
    summaryAr: 'يقرأ المتعلم نبذة خليل فرح، ويتعرف إلى اهتمامه بالفن والكلمة، ويفرق بين المعلومات التي يقدمها النص وانطباعاته الشخصية.',
    summaryEn: 'Read about Khalil Farah, learn about his interest in art and words, and distinguish details in the text from personal impressions.',
    questionAr: 'ما الذي يساعد على تلخيص سيرة فنان؟', questionEn: 'What helps when summarizing an artist’s biography?',
    optionsAr: ['ذكر معلومات النص عن حياته وفنه', 'اختراع أحداث جديدة', 'وصف مظهره فقط'], optionsEn: ['Using the text’s details about the person and their art', 'Inventing new events', 'Describing appearance only'],
    visualStepsAr: ['اقرأ النبذة', 'استخرج معلومات عن الفن', 'ميّز الحقيقة من الرأي', 'اكتب خلاصة قصيرة'], visualStepsEn: ['Read the account', 'Find details about the art', 'Separate fact from opinion', 'Write a short summary']
  },

  {
    unit: 4, page: 64, lastPage: 66, titleAr: 'لغة الحيوان', titleEn: 'The Language of Animals',
    summaryAr: 'يتابع المتعلم تفاصيل الحكاية، ويفسر الإشارات والأصوات في سياقها، ويلاحظ كيف يصف النص تواصل الكائنات.',
    summaryEn: 'Follow the story, interpret signals and sounds in context, and notice how the text describes communication among living things.',
    questionAr: 'كيف نفهم كلمة غير مألوفة في الحكاية؟', questionEn: 'How can we understand an unfamiliar word in a story?',
    optionsAr: ['نربطها بالجملة والأحداث', 'نختار معناها من دون سياق', 'نتوقف عن قراءة النص'], optionsEn: ['Connect it to the sentence and events', 'Choose a meaning without context', 'Stop reading the text'],
    visualStepsAr: ['تعرّف الشخصيات', 'لاحظ الإشارات', 'فسّر كلمة من السياق', 'رتّب أحداث الحكاية'], visualStepsEn: ['Meet the characters', 'Notice the signals', 'Explain a word from context', 'Sequence the story events']
  },
  {
    unit: 4, page: 67, lastPage: 72, titleAr: 'من وفاء الحيوان', titleEn: 'Animal Loyalty',
    summaryAr: 'يستكشف المتعلم حكاية عن الوفاء، ويتتبع أفعال الشخصيات ونتائجها، ثم يتدرب على استعمال الضمائر في جمل من النص.',
    summaryEn: 'Explore a story about loyalty, follow characters’ actions and their results, then practise using pronouns in sentences from the text.',
    questionAr: 'ما الذي يساعد على معرفة مرجع الضمير في الجملة؟', questionEn: 'What helps identify what a pronoun refers to in a sentence?',
    optionsAr: ['الانتباه إلى الاسم والسياق السابقين', 'تجاهل بقية الجملة', 'تبديل الضمير عشوائياً'], optionsEn: ['Looking at the noun and context before it', 'Ignoring the rest of the sentence', 'Changing the pronoun at random'],
    visualStepsAr: ['اقرأ الحكاية', 'تتبّع فعل الشخصية', 'حدّد الضمائر', 'اشرح أثر الوفاء'], visualStepsEn: ['Read the story', 'Follow a character’s action', 'Identify the pronouns', 'Explain the effect of loyalty']
  },
  {
    unit: 4, page: 73, lastPage: 75, titleAr: 'الحمامة المطوقة', titleEn: 'The Collared Dove',
    summaryAr: 'يقرأ المتعلم حكاية الحمامة وصاحباتها، ويراقب كيف يؤدي التعاون إلى الخروج من المأزق، ويلاحظ الضمائر المتصلة.',
    summaryEn: 'Read the story of the collared dove and her companions, see how cooperation helps them out of difficulty, and notice attached pronouns.',
    questionAr: 'ما الفكرة التي تبرزها مساعدة الحمائم بعضها لبعض؟', questionEn: 'What idea is shown when the doves help one another?',
    optionsAr: ['التعاون يجمع الجهود لحل المشكلة', 'يجب أن يعمل كل فرد وحده', 'لا فائدة من التخطيط'], optionsEn: ['Cooperation brings efforts together to solve a problem', 'Everyone must work alone', 'Planning is useless'],
    visualStepsAr: ['تعرّف الحمائم', 'تابع المشكلة', 'لاحظ التعاون', 'لخّص الحل'], visualStepsEn: ['Meet the doves', 'Follow the problem', 'Notice the cooperation', 'Summarize the solution']
  },
  {
    unit: 4, page: 76, lastPage: 79, titleAr: 'أُكلت يوم أكل الثور الأبيض', titleEn: 'I Was Lost the Day the White Bull Was Lost',
    summaryAr: 'يتأمل المتعلم حكاية الثيران والأسد، ويتعرف إلى أثر الانقسام وضعف التشاور، ويستدل على معنى المثل من أحداث القصة.',
    summaryEn: 'Consider the story of the bulls and the lion, explore how division and poor communication affect them, and infer the saying from events.',
    questionAr: 'ما الذي أضعف قدرة الثيران على حماية نفسها؟', questionEn: 'What weakened the bulls’ ability to protect themselves?',
    optionsAr: ['تفرقها وعدم تعاونها', 'تبادلها المساعدة', 'إنصاتها إلى بعضها'], optionsEn: ['Their division and lack of cooperation', 'Their helping one another', 'Their listening to one another'],
    visualStepsAr: ['اقرأ أحداث الحكاية', 'لاحظ قرارات الشخصيات', 'استنتج سبب المشكلة', 'فسّر المثل'], visualStepsEn: ['Read the story events', 'Notice the characters’ decisions', 'Infer the cause of the problem', 'Explain the saying']
  },
  {
    unit: 4, page: 80, lastPage: 84, titleAr: 'من يعلّق الجرس؟', titleEn: 'Who Will Hang the Bell?',
    summaryAr: 'تتداول الفئران خطة لإبعاد الخطر، ثم تكشف الحكاية الفرق بين اقتراح فكرة وتنفيذها، وتدعو إلى التفكير في خطوات ممكنة.',
    summaryEn: 'The mice discuss a plan to avoid danger; the story reveals the difference between suggesting an idea and carrying it out, and invites practical thinking.',
    questionAr: 'ما السؤال العملي الذي بقي بعد اقتراح الجرس؟', questionEn: 'What practical question remained after the bell was suggested?',
    optionsAr: ['من سيعلّق الجرس في القط؟', 'ما لون بيت الفئران؟', 'كم نافذة في المنزل؟'], optionsEn: ['Who would hang the bell on the cat?', 'What color was the mice’s home?', 'How many windows were in the house?'],
    visualStepsAr: ['اقرأ المشكلة', 'تتبّع الاقتراحات', 'حدّد العائق العملي', 'اقترح حلاً قابلاً للتنفيذ'], visualStepsEn: ['Read the problem', 'Follow the suggestions', 'Identify the practical obstacle', 'Suggest a workable solution']
  },

  {
    unit: 5, page: 86, lastPage: 88, titleAr: 'نور القمر', titleEn: 'Moonlight',
    summaryAr: 'يتأمل المتعلم صور القمر في الأبيات، ويفسر مفردات مثل «الدجى» و«تألأل» من السياق، ثم يوضح الصورة التي أعجبته.',
    summaryEn: 'Explore the moon images in the verses, infer words such as “darkness” and “shimmered” from context, then describe an image you liked.',
    questionAr: 'ما الذي يساعد على تفسير مفردة شعرية؟', questionEn: 'What helps explain a word in a poem?',
    optionsAr: ['قراءة البيت وملاحظة الصورة', 'عزل الكلمة عن النص', 'تجاهل معنى البيت'], optionsEn: ['Reading the verse and noticing its image', 'Separating the word from the text', 'Ignoring the meaning of the verse'],
    visualStepsAr: ['اقرأ الأبيات', 'تخيّل صورة القمر', 'استدل بالسياق', 'صف صورة شعرية'], visualStepsEn: ['Read the verses', 'Picture the moon', 'Use context clues', 'Describe a poetic image']
  },
  {
    unit: 5, page: 89, lastPage: 92, titleAr: 'الصياد والجمجمة', titleEn: 'The Fisherman and the Skull',
    summaryAr: 'يتابع المتعلم الحوار في الحكاية، ويرتب أقوال الشخصيات، ويفكر في أثر الإصغاء والتحقق قبل اتخاذ قرار.',
    summaryEn: 'Follow the dialogue, put the characters’ statements in order, and consider the value of listening and checking before making a decision.',
    questionAr: 'ما التصرف الأفضل عند سماع خبر غريب؟', questionEn: 'What is a sensible response to hearing a surprising claim?',
    optionsAr: ['الاستماع وطلب التوضيح قبل الحكم', 'نشر الخبر فوراً', 'اتخاذ قرار من دون سؤال'], optionsEn: ['Listen and ask for clarification before judging', 'Share the claim immediately', 'Decide without asking questions'],
    visualStepsAr: ['تعرّف المتحدثين', 'رتّب الحوار', 'لاحظ سبب الخلاف', 'اقترح استجابة متأنية'], visualStepsEn: ['Meet the speakers', 'Sequence the dialogue', 'Notice the cause of disagreement', 'Suggest a thoughtful response']
  },
  {
    unit: 5, page: 93, lastPage: 98, titleAr: 'العَلَم', titleEn: 'The Flag',
    summaryAr: 'يقرأ المتعلم أبيات «العلم»، ويفسر مفرداتها وصورها، ويميز بين المعنى الذي يصنعه الشاعر وانطباع القارئ.',
    summaryEn: 'Read the verses of “The Flag,” explore their vocabulary and imagery, and distinguish the poet’s meaning from a reader’s impression.',
    questionAr: 'ما الخطوة التي تساعد على فهم صورة في الشعر؟', questionEn: 'What step helps interpret an image in poetry?',
    optionsAr: ['ربط الصورة بالكلمات المحيطة بها', 'تغيير كلمات البيت', 'قراءة المفردات بلا سياق'], optionsEn: ['Connecting the image to the surrounding words', 'Changing the words of the verse', 'Reading vocabulary without context'],
    visualStepsAr: ['اقرأ الأبيات', 'استكشف المفردات', 'فسّر صورة النص', 'عبّر عن فهمك'], visualStepsEn: ['Read the verses', 'Explore the vocabulary', 'Interpret an image', 'Explain your understanding']
  },
  {
    unit: 5, page: 99, lastPage: 102, titleAr: 'حقوق الطفل', titleEn: 'Children’s Rights',
    summaryAr: 'يتعرف المتعلم إلى حقوق الطفل التي يذكرها النص، ويميز بين الحق والمسؤولية، ويشرح لماذا تساعد الحماية والتعليم على نمو الأطفال.',
    summaryEn: 'Explore children’s rights in the text, distinguish rights from responsibilities, and explain how protection and education support children’s growth.',
    questionAr: 'أي خيار يعبّر عن حق أساسي للطفل؟', questionEn: 'Which choice describes a basic right of a child?',
    optionsAr: ['التعلم والرعاية والحماية', 'العمل المؤذي بدلاً من الدراسة', 'الحرمان من الرعاية'], optionsEn: ['Learning, care, and protection', 'Harmful work instead of schooling', 'Being denied care'],
    visualStepsAr: ['اقرأ الفقرة', 'حدّد الحقوق', 'قارن الحق بالمسؤولية', 'اذكر مثالاً للحماية'], visualStepsEn: ['Read the passage', 'Identify the rights', 'Compare a right with a responsibility', 'Give an example of protection']
  },
  {
    unit: 5, page: 103, lastPage: 104, titleAr: 'بلادي', titleEn: 'My Country',
    summaryAr: 'يقرأ المتعلم نشيد «بلادي»، ويلاحظ ألفاظ الانتماء والصور الشعرية، ثم يعبّر عن تقديره للمجتمع والطبيعة بلغة جامعة ومحترمة.',
    summaryEn: 'Read the song “My Country,” notice words of belonging and poetic images, then express appreciation for community and nature in inclusive, respectful language.',
    questionAr: 'ما الطريقة المناسبة للتعبير عن تقدير الوطن؟', questionEn: 'What is a thoughtful way to express appreciation for one’s country?',
    optionsAr: ['ذكر ما نقدّره من مجتمعها وطبيعتها', 'انتقاص شعوب أخرى', 'الادعاء أن الناس جميعاً متشابهون'], optionsEn: ['Naming what we value in its people and nature', 'Putting other peoples down', 'Claiming that all people are the same'],
    visualStepsAr: ['اقرأ النشيد', 'استخرج كلمات الانتماء', 'لاحظ الصور الشعرية', 'اكتب تعبيراً جامعاً'], visualStepsEn: ['Read the song', 'Find words of belonging', 'Notice the poetic images', 'Write an inclusive expression']
  }
];

export const SUDAN_PRIMARY_ARABIC_G4_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ARABIC_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-arabic-g4-${order}`;
  const unit = SUDAN_PRIMARY_ARABIC_G4_BOOK.units[lesson.unit - 1];
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
    subtitleAr: `اللغة العربية — الصف الرابع الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 4 Arabic — ${unit.titleEn}`,
    descriptionAr: lesson.summaryAr,
    descriptionEn: lesson.summaryEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Grade 4 Primary',
    termAr: 'اللغة العربية — الصف الرابع',
    termEn: 'Grade 4 Arabic',
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
