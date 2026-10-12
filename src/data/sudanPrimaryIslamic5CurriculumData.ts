import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ISLAMIC_G5_BOOK = {
  title: 'التربية الإسلامية — الصف الخامس الأساسي',
  edition: 'الطبعة الأولى 2021م',
  pdfPages: 105,
  units: [
    { titleAr: 'سور من القرآن الكريم', titleEn: 'Selected Quranic Surahs', firstPage: 1, lastPage: 23 },
    { titleAr: 'أحاديث من الحديث النبوي الشريف', titleEn: 'Selected Prophetic Hadiths', firstPage: 24, lastPage: 42 },
    { titleAr: 'من أركان الإيمان', titleEn: 'Pillars of Faith', firstPage: 43, lastPage: 54 },
    { titleAr: 'الفقه', titleEn: 'Islamic Jurisprudence', firstPage: 55, lastPage: 65 },
    { titleAr: 'من مكارم الأخلاق', titleEn: 'Noble Character', firstPage: 66, lastPage: 79 },
    { titleAr: 'من السيرة النبوية الشريفة', titleEn: 'The Prophetic Biography', firstPage: 80, lastPage: 99 }
  ]
} as const;

interface IslamicLesson {
  unit: number;
  page: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

const lessons: IslamicLesson[] = [
  {
    unit: 1, page: 1, titleAr: 'سور الحفظ', titleEn: 'Surahs for Memorization',
    focusAr: 'يتدرّب على مراجعة سور الحفظ المقررة مقطعًا مقطعًا، مع الإنصات للتلاوة والتعامل باحترام مع القرآن الكريم.',
    focusEn: 'Practice the assigned memorization surahs in short sections, listening carefully and treating the Quran with respect.',
    questionAr: 'ما الطريقة التي تساعد على مراجعة السورة؟', questionEn: 'What is a helpful way to review a surah?',
    optionsAr: ['مراجعة مقطع قصير بإنصات', 'التعجل دون تركيز', 'مقاطعة من يتلو'],
    optionsEn: ['Review a short section attentively', 'Rush without focus', 'Interrupt the reciter']
  },
  {
    unit: 1, page: 18, titleAr: 'سور التلاوة', titleEn: 'Surahs for Recitation',
    focusAr: 'يقرأ سورتي الملك والقلم بتؤدة ووضوح، ويستمع للمعلم أو القارئ، ثم يذكر فكرة فهمها دون نسخ نص الآيات.',
    focusEn: 'Read Surahs Al-Mulk and Al-Qalam calmly and clearly, listen to a teacher or reciter, and share an idea without copying verses.',
    questionAr: 'ما أدب مناسب عند الاستماع إلى التلاوة؟', questionEn: 'What is a respectful way to listen to recitation?',
    optionsAr: ['الإنصات بهدوء', 'إحداث الضوضاء', 'السخرية من أخطاء الآخرين'],
    optionsEn: ['Listen quietly', 'Make noise', 'Mock another learner’s mistakes']
  },
  {
    unit: 2, page: 25, titleAr: 'المسلم يحافظ على الصلاة', titleEn: 'A Muslim Cares for Prayer',
    focusAr: 'يتأمل أثر المواظبة على الصلاة في تنظيم اليوم وتقوية الصلة بالله، ويتعلم أداءها في وقتها وبخشوع بحسب توجيه أسرته ومعلمه.',
    focusEn: 'Reflect on how regular prayer can structure the day and strengthen one’s relationship with Allah, following family and teacher guidance.',
    questionAr: 'أي سلوك يعبر عن المحافظة على الصلاة؟', questionEn: 'Which action shows care for prayer?',
    optionsAr: ['الاستعداد لها في وقتها', 'تأجيلها بلا سبب', 'التشويش على المصلين'],
    optionsEn: ['Prepare for it at its time', 'Delay it without reason', 'Distract people who are praying']
  },
  {
    unit: 2, page: 28, titleAr: 'حب الأمانة', titleEn: 'Valuing Trustworthiness',
    focusAr: 'يفهم أن الأمانة تظهر في حفظ ما اؤتمن عليه وردّه، والصدق في المسؤوليات الصغيرة في البيت والمدرسة.',
    focusEn: 'Understand that trustworthiness means caring for what is entrusted to us, returning it, and being honest in everyday responsibilities.',
    questionAr: 'ماذا يفعل التلميذ إذا استعار كتابًا؟', questionEn: 'What should a learner do after borrowing a book?',
    optionsAr: ['يعيده بحالة جيدة وفي موعده', 'يحتفظ به دون إذن', 'ينكر أنه استعاره'],
    optionsEn: ['Return it in good condition and on time', 'Keep it without permission', 'Deny borrowing it']
  },
  {
    unit: 2, page: 31, titleAr: 'أحب الأماكن', titleEn: 'Beloved Places',
    focusAr: 'يتعرف فضل المساجد بوصفها أماكن للعبادة والتعلم، ويفكر في السلوك الذي يحفظ نظافتها وراحة من فيها.',
    focusEn: 'Learn about mosques as places for worship and learning, and consider how to keep them clean and welcoming.',
    questionAr: 'كيف يحافظ الزائر على احترام المسجد؟', questionEn: 'How can a visitor show respect for a mosque?',
    optionsAr: ['يحافظ على الهدوء والنظافة', 'يترك المخلفات في المكان', 'يشغل المصلين بالحديث'],
    optionsEn: ['Keep the space quiet and clean', 'Leave litter behind', 'Distract people who are praying']
  },
  {
    unit: 2, page: 33, titleAr: 'آداب من البيع والشراء', titleEn: 'Courtesy in Buying and Selling',
    focusAr: 'يتعلم الصدق واللطف والوضوح في البيع والشراء، واحترام حق كل طرف في السؤال والاختيار.',
    focusEn: 'Practice honesty, kindness, and clarity in buying and selling, while respecting each person’s right to ask questions and choose.',
    questionAr: 'أي تصرف يوافق آداب التعامل؟', questionEn: 'Which action reflects courteous dealing?',
    optionsAr: ['بيان السلعة بصدق', 'إخفاء عيب معروف', 'الضغط على المشتري'],
    optionsEn: ['Describe an item honestly', 'Hide a known flaw', 'Pressure the buyer']
  },
  {
    unit: 2, page: 35, titleAr: 'حفظ السر', titleEn: 'Keeping a Confidence',
    focusAr: 'يدرك أن الحديث الخاص أمانة، وأن حفظه يبني الثقة؛ وإذا تعلق الأمر بسلامة شخص، يطلب العون من بالغ موثوق.',
    focusEn: 'Understand that private conversations deserve care and that keeping confidence builds trust; if someone’s safety is at risk, tell a trusted adult.',
    questionAr: 'ماذا يفعل من سمع أمرًا خاصًا لا يهدد سلامة أحد؟', questionEn: 'What should someone do with private information that does not threaten anyone’s safety?',
    optionsAr: ['يحفظه ولا ينشره', 'يرسله إلى الجميع', 'يضيف إليه شائعات'],
    optionsEn: ['Keep it private and do not spread it', 'Share it with everyone', 'Add rumors to it']
  },
  {
    unit: 2, page: 38, titleAr: 'دعاء السفر', titleEn: 'Supplication for Travel',
    focusAr: 'يتعرف معنى الدعاء عند السفر، ويستعد للرحلة مع أسرته، ويلتزم بتعليمات السلامة ورفقة الكبار.',
    focusEn: 'Learn about supplication when travelling, prepare with family, and follow safety guidance while staying with responsible adults.',
    questionAr: 'ما التصرف الآمن قبل رحلة مدرسية؟', questionEn: 'What is a safe choice before a school trip?',
    optionsAr: ['اتباع تعليمات المعلم والبقاء مع المجموعة', 'الابتعاد وحدي عن المجموعة', 'تجاهل قواعد السلامة'],
    optionsEn: ['Follow the teacher’s directions and stay with the group', 'Walk away from the group alone', 'Ignore safety rules']
  },
  {
    unit: 2, page: 41, titleAr: 'صلة الرحم', titleEn: 'Maintaining Family Ties',
    focusAr: 'يتعلم الاهتمام بالأقارب بالسؤال عنهم ومساعدتهم بما يناسب، مع مراعاة ظروفهم وحدودهم.',
    focusEn: 'Learn to care for relatives by checking on them and offering suitable help while respecting their circumstances and boundaries.',
    questionAr: 'أي عمل يعبر عن صلة الرحم؟', questionEn: 'Which action helps maintain family ties?',
    optionsAr: ['السؤال عن قريب ومساعدته بلطف', 'تجاهل قريب يطلب العون', 'افتعال خلاف بين أفراد الأسرة'],
    optionsEn: ['Check on a relative and offer kind help', 'Ignore a relative asking for help', 'Create conflict among family members']
  },
  {
    unit: 3, page: 44, titleAr: 'الإيمان باليوم الآخر', titleEn: 'Belief in the Last Day',
    focusAr: 'يفهم أن الإيمان باليوم الآخر يذكّر بالمسؤولية عن الأعمال، ويشجعه على اختيار الخير والعدل في حياته اليومية.',
    focusEn: 'Understand that belief in the Last Day reminds people to take responsibility for their actions and choose what is good and fair.',
    questionAr: 'ما أثر تذكر المسؤولية عن الأعمال؟', questionEn: 'What can remembering responsibility for our actions encourage?',
    optionsAr: ['اختيار الصدق والعمل الصالح', 'إيذاء الآخرين دون اكتراث', 'إهمال حقوق الناس'],
    optionsEn: ['Choose honesty and good actions', 'Harm others without concern', 'Neglect people’s rights']
  },
  {
    unit: 3, page: 46, titleAr: 'علامات الساعة', titleEn: 'Signs of the Hour',
    focusAr: 'يتعرف أن وقت الساعة من علم الله، وأن دراسة العلامات تكون بتواضع وتثبت، لا بتخمين موعدها أو نشر أخبار غير موثوقة.',
    focusEn: 'Learn that the timing of the Hour is known to Allah, and study its signs thoughtfully without guessing a date or spreading unreliable claims.',
    questionAr: 'كيف نتعامل مع خبر غير موثوق عن موعد الساعة؟', questionEn: 'How should we respond to an unreliable claim about the Hour’s timing?',
    optionsAr: ['لا نخمن موعدًا ونتثبت من المعلومات', 'ننشره فورًا', 'نؤكد الخبر دون دليل'],
    optionsEn: ['Avoid guessing and check information', 'Share it immediately', 'Confirm it without evidence']
  },
  {
    unit: 3, page: 48, titleAr: 'فعل الخيرات', titleEn: 'Doing Good Deeds',
    focusAr: 'يختار أعمالًا نافعة تناسب عمره، مثل الكلمة الطيبة ومساعدة المحتاج والعناية بالحيوان، دون انتظار مقابل.',
    focusEn: 'Choose helpful actions suited to one’s age, such as kind words, assisting someone in need, or caring for an animal, without expecting a reward.',
    questionAr: 'أي عمل يعد من فعل الخير؟', questionEn: 'Which action is a good deed?',
    optionsAr: ['مساعدة زميل بلطف', 'إزعاج شخص يحتاج إلى الراحة', 'إهمال حيوان عطشان'],
    optionsEn: ['Kindly help a classmate', 'Disturb someone who needs rest', 'Ignore a thirsty animal']
  },
  {
    unit: 3, page: 50, titleAr: 'أسماء الله الحسنى (1)', titleEn: 'The Beautiful Names of Allah (1)',
    focusAr: 'يتعلم معاني مجموعة من أسماء الله الحسنى الواردة في الدرس، ويتحدث عنها بتوقير، ويميز أن صفات الخالق لا تماثل صفات البشر.',
    focusEn: 'Learn meanings of names of Allah introduced in the lesson, speak of them reverently, and recognize that the Creator’s attributes are unlike human attributes.',
    questionAr: 'كيف نتعلم أسماء الله الحسنى؟', questionEn: 'How should we learn the Beautiful Names of Allah?',
    optionsAr: ['بالتوقير وفهم المعنى الصحيح', 'بالمزاح أو السخرية', 'بإطلاق أوصاف لا تليق بالبشر'],
    optionsEn: ['With reverence and a sound understanding of their meanings', 'By joking or mocking', 'By applying unsuitable human descriptions']
  },
  {
    unit: 3, page: 51, titleAr: 'أسماء الله الحسنى (2)', titleEn: 'The Beautiful Names of Allah (2)',
    focusAr: 'يراجع أسماء الله الحسنى ومعانيها بأسلوب يحفظ الاحترام، ويربط التعلم بالشكر والاعتماد على الله والعمل النافع.',
    focusEn: 'Review the Beautiful Names of Allah respectfully, connecting learning with gratitude, reliance on Allah, and helpful actions.',
    questionAr: 'أي سلوك ينسجم مع تعلم أسماء الله الحسنى؟', questionEn: 'Which action fits learning the Beautiful Names of Allah?',
    optionsAr: ['التعلم بأدب والعمل بخير', 'استخدام الأسماء للاستهزاء', 'ادعاء معرفة الغيب'],
    optionsEn: ['Learn respectfully and do good', 'Use the names to mock', 'Claim to know the unseen']
  },
  {
    unit: 3, page: 53, titleAr: 'المجموعة الثالثة من أسماء الله الحسنى', titleEn: 'The Beautiful Names of Allah: Group Three',
    focusAr: 'يراجع معاني المجموعة الثالثة من الأسماء، ويعبّر عن فهمه بكلمات محترمة، دون تشبيه صفات الله بصفات المخلوقين.',
    focusEn: 'Review meanings in the third group of names and explain them respectfully without comparing Allah’s attributes with those of created beings.',
    questionAr: 'ما الأسلوب المناسب عند شرح أسماء الله؟', questionEn: 'What is an appropriate way to discuss the names of Allah?',
    optionsAr: ['الشرح باحترام وتجنب التشبيه', 'الاستهزاء بالمعاني', 'نسبة صفات النقص إلى الله'],
    optionsEn: ['Explain respectfully and avoid comparisons', 'Mock the meanings', 'Attribute imperfection to Allah']
  },
  {
    unit: 4, page: 56, titleAr: 'صلاة الجماعة', titleEn: 'Congregational Prayer',
    focusAr: 'يتعرف معنى الصلاة مع جماعة وإمام، ويتعلم الهدوء واحترام الآخرين واتباع توجيهات الإمام والمعلم.',
    focusEn: 'Learn what it means to pray with a congregation and an imam, practising calm, respect for others, and following guidance.',
    questionAr: 'ما السلوك المناسب في صلاة الجماعة؟', questionEn: 'What is appropriate during congregational prayer?',
    optionsAr: ['الوقوف بهدوء واتباع الإمام', 'الحديث لإشغال المصلين', 'مغادرة الصف دون حاجة'],
    optionsEn: ['Stand calmly and follow the imam', 'Talk and distract worshippers', 'Leave the row without need']
  },
  {
    unit: 4, page: 58, titleAr: 'فوائد الصلاة', titleEn: 'Benefits of Prayer',
    focusAr: 'يتأمل كيف تعين الصلاة على الطمأنينة والانضباط، وتذكّر المسلم بفعل الخير والابتعاد عن إيذاء الناس.',
    focusEn: 'Reflect on how prayer can support calm and self-discipline and remind a person to do good and avoid harming others.',
    questionAr: 'أي أثر نافع يمكن أن تعززه الصلاة؟', questionEn: 'Which helpful quality can prayer encourage?',
    optionsAr: ['الطمأنينة والانضباط', 'التكبر على الناس', 'إهمال المسؤوليات'],
    optionsEn: ['Calmness and self-discipline', 'Arrogance toward others', 'Neglect of responsibilities']
  },
  {
    unit: 4, page: 60, titleAr: 'نوافل الصلاة القبلية والبعدية', titleEn: 'Voluntary Prayers Before and After Obligatory Prayers',
    focusAr: 'يتعرف أمثلة من النوافل والسنن الرواتب، ويسأل معلّمه عن أوقاتها وكيفية أدائها، مع إدراك أنها عبادات تطوعية.',
    focusEn: 'Learn examples of voluntary and regular sunnah prayers, asking a teacher about their times and practice and recognizing them as voluntary worship.',
    questionAr: 'ماذا يفعل المتعلم إذا لم يفهم وقت نافلة؟', questionEn: 'What should a learner do if unsure when a voluntary prayer is offered?',
    optionsAr: ['يسأل معلّمًا أو فردًا موثوقًا من أسرته', 'يخمن ثم يعلّم الآخرين', 'يسخر من السؤال'],
    optionsEn: ['Ask a teacher or trusted family member', 'Guess and teach others', 'Mock the question']
  },
  {
    unit: 4, page: 62, titleAr: 'قضاء الفوائت', titleEn: 'Making Up Missed Prayers',
    focusAr: 'يتعلم أن يسأل شخصًا بالغًا موثوقًا عن أحكام الصلاة الفائتة، ويفهم أهمية التذكر والتنظيم وطلب الإرشاد بهدوء.',
    focusEn: 'Learn to ask a trusted adult about missed-prayer guidance and recognize the value of remembering, planning, and seeking calm instruction.',
    questionAr: 'إلى من يرجع التلميذ عند سؤاله عن حكم ديني؟', questionEn: 'Whom should a learner ask about a religious ruling?',
    optionsAr: ['معلم أو بالغ موثوق لديه معرفة', 'شخص مجهول على الإنترنت', 'من يخمن دون علم'],
    optionsEn: ['A knowledgeable teacher or trusted adult', 'An unknown person online', 'Someone guessing without knowledge']
  },
  {
    unit: 4, page: 64, titleAr: 'سجود السهو', titleEn: 'The Prostration of Forgetfulness',
    focusAr: 'يتعرف أن السهو قد يقع، ويتعلم الرجوع إلى شرح موثوق لمعرفة التصرف المناسب، دون لوم من يخطئ أو إحراجه.',
    focusEn: 'Learn that forgetfulness can happen and seek reliable guidance about what to do, without blaming or embarrassing someone who makes a mistake.',
    questionAr: 'ما التصرف الأفضل عند عدم معرفة حكم السهو في الصلاة؟', questionEn: 'What is best if unsure about what to do after a prayer mistake?',
    optionsAr: ['سؤال المعلم أو الإمام بهدوء', 'اختراع حكم من عند النفس', 'إحراج من أخطأ أمام الناس'],
    optionsEn: ['Calmly ask a teacher or imam', 'Invent a ruling', 'Embarrass the person publicly']
  },
  {
    unit: 5, page: 67, titleAr: 'مسؤولية الراعي', titleEn: 'A Leader’s Responsibility',
    focusAr: 'يتعلم من القصة أن المسؤول يهتم بحاجات الناس ويتصرف برحمة وعدل، وأن طلب المساعدة حق لمن يواجه صعوبة.',
    focusEn: 'Learn from the story that a person in charge should care for people’s needs with compassion and fairness, and that asking for help is acceptable.',
    questionAr: 'ما صفة المسؤول الذي يرعى الناس؟', questionEn: 'What is a good quality in someone responsible for others?',
    optionsAr: ['الاهتمام بحاجاتهم والإنصاف', 'تجاهل من يحتاج إلى عون', 'استعمال المسؤولية لمصلحته فقط'],
    optionsEn: ['Care for their needs and act fairly', 'Ignore people who need help', 'Use responsibility only for personal gain']
  },
  {
    unit: 5, page: 70, titleAr: 'العفو عند المقدرة', titleEn: 'Forgiving When Able',
    focusAr: 'يفكر في العفو بوصفه خيارًا رحيمًا عند القدرة، مع طلب المساندة من بالغ موثوق إذا كان الأذى مستمرًا أو كان أحد غير آمن.',
    focusEn: 'Consider forgiveness as a compassionate choice when possible, while seeking trusted adult help if harm continues or anyone is unsafe.',
    questionAr: 'ماذا يفعل المتعلم إذا استمر تعرضه للأذى؟', questionEn: 'What should a learner do if someone continues to harm them?',
    optionsAr: ['يخبر بالغًا موثوقًا ليحصل على الدعم', 'يبقى وحده دون طلب مساعدة', 'يرد بالأذى'],
    optionsEn: ['Tell a trusted adult and get support', 'Stay alone without asking for help', 'Respond by harming the other person']
  },
  {
    unit: 5, page: 73, titleAr: 'عاقبة المروءة', titleEn: 'The Reward of Generous Character',
    focusAr: 'يتأمل قيمة مساعدة الغريب والمحتاج بإخلاص، ويحترم كرامة الناس ولا ينتظر منهم مكافأة.',
    focusEn: 'Reflect on sincerely helping a stranger or someone in need, respecting people’s dignity without expecting a reward.',
    questionAr: 'كيف يقدم المتعلم المساعدة بكرامة؟', questionEn: 'How can a learner offer help while respecting dignity?',
    optionsAr: ['يسأل بلطف ويقدم ما يستطيع', 'يسخر من المحتاج', 'يشترط مكافأة قبل المساعدة'],
    optionsEn: ['Ask kindly and offer what they can', 'Mock someone in need', 'Demand a reward before helping']
  },
  {
    unit: 5, page: 77, titleAr: 'جزاء الأمانة', titleEn: 'The Reward of Trustworthiness',
    focusAr: 'يلاحظ كيف يقود الحرص على حقوق الآخرين إلى الثقة، ويتعلم إعادة ما ليس له وطلب الإذن قبل أخذ شيء.',
    focusEn: 'Notice how protecting other people’s rights builds trust, and practise returning what is not yours and asking permission before taking things.',
    questionAr: 'ماذا يفعل من وجد شيئًا لا يملكه؟', questionEn: 'What should someone do after finding something they do not own?',
    optionsAr: ['يحفظه ويبحث عن صاحبه بمساعدة بالغ', 'يأخذه دون سؤال', 'يخفيه عن الجميع'],
    optionsEn: ['Keep it safe and seek the owner with adult help', 'Take it without asking', 'Hide it from everyone']
  },
  {
    unit: 6, page: 81, titleAr: 'عرض الإسلام على الجميع', titleEn: 'Sharing the Message with All',
    focusAr: 'يتعرف كيف دُعي الناس إلى الإسلام في السيرة، ويركز على الحوار الواضح والاحترام، دون ضغط أو إساءة إلى من يختلف.',
    focusEn: 'Learn how people were invited to Islam in the biography, focusing on clear and respectful dialogue without pressure or mistreating those who differ.',
    questionAr: 'ما الأسلوب المحترم عند الحديث عن المعتقد؟', questionEn: 'What is a respectful way to discuss belief?',
    optionsAr: ['الحديث بلطف والاستماع للآخر', 'الإكراه أو الإهانة', 'منع الآخرين من السؤال'],
    optionsEn: ['Speak kindly and listen to others', 'Coerce or insult', 'Stop others from asking questions']
  },
  {
    unit: 6, page: 86, titleAr: 'عرض الإسلام على وفد يثرب من الأنصار', titleEn: 'Sharing Islam with the Delegation from Yathrib',
    focusAr: 'يتعلم من لقاء وفد يثرب قيمة الإصغاء والحوار والتعلم، ويتعرف دور مصعب بن عمير في تعليم من أراد المعرفة.',
    focusEn: 'Learn from the meeting with the delegation from Yathrib about listening, dialogue, and learning, including Mus’ab ibn Umayr’s teaching role.',
    questionAr: 'ما السلوك الذي يساعد على حوار نافع؟', questionEn: 'What helps make a conversation constructive?',
    optionsAr: ['الإصغاء والتحدث بأدب', 'مقاطعة المتحدث', 'السخرية من الأسئلة'],
    optionsEn: ['Listen and speak politely', 'Interrupt the speaker', 'Mock questions']
  },
  {
    unit: 6, page: 89, titleAr: 'طلائع الهجرة', titleEn: 'The First Migrants',
    focusAr: 'يتعرف أمثلة من هجرة المسلمين الأوائل طلبًا للأمان، ويتأمل الصبر والتعاون ومساعدة من يمر بانتقال صعب.',
    focusEn: 'Learn about early Muslims who migrated in search of safety, reflecting on patience, cooperation, and helping people through difficult transitions.',
    questionAr: 'ما قيمة نتعلمها من مساعدة المهاجر؟', questionEn: 'What value can we learn from helping a migrant?',
    optionsAr: ['التعاون والرحمة', 'إيذاء من يطلب الأمان', 'رفض مساعدة المحتاج'],
    optionsEn: ['Cooperation and compassion', 'Harm someone seeking safety', 'Refuse to help someone in need']
  },
  {
    unit: 6, page: 92, titleAr: 'سيدنا بلال بن رباح رضي الله عنه', titleEn: 'Bilal ibn Rabah',
    focusAr: 'يتعرف جوانب من سيرة بلال بن رباح، ويقدر ثباته وإسهامه، ويرفض التمييز بسبب الأصل أو اللون.',
    focusEn: 'Learn about Bilal ibn Rabah’s life and contributions, appreciate his steadfastness, and reject discrimination based on background or skin color.',
    questionAr: 'ما المبدأ الذي تؤكده سيرة بلال؟', questionEn: 'Which principle is highlighted by Bilal’s story?',
    optionsAr: ['كرامة الناس لا تتعلق بلونهم أو أصلهم', 'تفضيل الناس بسبب لونهم', 'السخرية من اختلاف الآخرين'],
    optionsEn: ['People’s dignity does not depend on color or background', 'Favor people because of their color', 'Mock people’s differences']
  },
  {
    unit: 6, page: 95, titleAr: 'سيدنا عمار بن ياسر رضي الله عنه', titleEn: 'Ammar ibn Yasir',
    focusAr: 'يتعرف سيرة عمار وأسرته وما واجهوه من مشقة، ويتعلم التعاطف وطلب المساندة الآمنة ورفض الاعتداء.',
    focusEn: 'Learn about Ammar and his family and the hardships they faced, practising empathy, seeking safe support, and rejecting abuse.',
    questionAr: 'كيف نساند شخصًا يواجه الأذى؟', questionEn: 'How can we support someone who is being harmed?',
    optionsAr: ['نطلب العون من بالغ موثوق ونسانده بأمان', 'نلومه ونتجاهله', 'نشارك في إيذائه'],
    optionsEn: ['Seek trusted adult help and support them safely', 'Blame and ignore them', 'Join in harming them']
  },
  {
    unit: 6, page: 97, titleAr: 'سيدنا عثمان بن عفان رضي الله عنه التاجر', titleEn: 'Uthman ibn Affan: The Merchant',
    focusAr: 'يتعرف جوانب من سيرة عثمان بن عفان وإنفاقه للخير، ويفكر في استخدام المال والموارد بسخاء ومسؤولية.',
    focusEn: 'Learn about Uthman ibn Affan’s life and generosity, and consider using money and resources generously and responsibly.',
    questionAr: 'ما التصرف الذي يعبر عن العطاء المسؤول؟', questionEn: 'Which action shows responsible generosity?',
    optionsAr: ['مشاركة ما أستطيع لمساعدة الناس', 'التفاخر بما أملك', 'إهدار الموارد دون تفكير'],
    optionsEn: ['Share what I can to help people', 'Boast about what I own', 'Waste resources carelessly']
  }
];

const visualSteps = [
  { labelAr: 'اقرأ الموضوع', labelEn: 'Read the topic' },
  { labelAr: 'افهم الفكرة', labelEn: 'Understand the idea' },
  { labelAr: 'اربطها بمثال', labelEn: 'Connect it to an example' },
  { labelAr: 'راجع تعلمك', labelEn: 'Review your learning' }
];

export const SUDAN_PRIMARY_ISLAMIC_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ISLAMIC_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-islamic-g5-${order}`;
  const unit = SUDAN_PRIMARY_ISLAMIC_G5_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الإسلامية — الصف الخامس الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 Islamic Studies — ${unit.titleEn}`,
    topicAr: `ص ${lesson.page}`,
    topicEn: `p. ${lesson.page}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Grade 5 Primary',
    termAr: 'التربية الإسلامية — الصف الخامس',
    termEn: 'Grade 5 Islamic Studies',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في موقف يومي يرتبط بموضوع «${lesson.titleAr}».`,
    warmupHookEn: `Think of an everyday situation connected to “${lesson.titleEn}.”`,
    learningOutcomesAr: [lesson.focusAr, 'يذكر مثالًا مناسبًا يطبق به ما تعلمه في حياته اليومية.'],
    learningOutcomesEn: [lesson.focusEn, 'Give an appropriate example of applying the lesson in everyday life.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nتأمل تسلسل التعلم، ثم ناقش مثالًا يوضح كيف تطبق الفكرة باحترام وأمان.`,
      contentEn: `${lesson.focusEn}\n\nFollow the learning sequence, then discuss an example of applying the idea respectfully and safely.`,
      diagram: {
        id: `${id}-lesson-sequence`,
        figureNumberAr: 'شكل توضيحي',
        figureNumberEn: 'Illustration',
        titleAr: 'تسلسل التعلم',
        titleEn: 'Learning Sequence',
        captionAr: 'خطوات بصرية مبسطة لفهم الموضوع ومراجعته باحترام.',
        captionEn: 'A simple, respectful visual sequence for understanding and reviewing the topic.',
        diagramType: 'primary_lesson_sequence' as const,
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
        explanationAr: `الإجابة الأنسب: ${lesson.optionsAr[0]}.`,
        explanationEn: `Best answer: ${lesson.optionsEn[0]}.`,
        difficulty: 'easy'
      }]
    }
  };
});
