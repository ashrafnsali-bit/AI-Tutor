import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ISLAMIC_G4_BOOK = {
  title: 'التربية الإسلامية — الصف الرابع الأساسي',
  edition: 'الطبعة الأولى 2021م',
  pdfPages: 81,
  units: [
    { titleAr: 'سور من القرآن الكريم', titleEn: 'Selected Quranic Surahs', firstPage: 1, lastPage: 12 },
    { titleAr: 'أحاديث من الحديث النبوي الشريف', titleEn: 'Selected Prophetic Hadiths', firstPage: 13, lastPage: 25 },
    { titleAr: 'من أركان الإيمان', titleEn: 'Pillars of Faith', firstPage: 26, lastPage: 39 },
    { titleAr: 'الفقه', titleEn: 'Islamic Jurisprudence', firstPage: 40, lastPage: 48 },
    { titleAr: 'من مكارم الأخلاق', titleEn: 'Noble Character', firstPage: 49, lastPage: 58 },
    { titleAr: 'من السيرة النبوية الشريفة', titleEn: 'The Prophetic Biography', firstPage: 59, lastPage: 76 }
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
    unit: 1, page: 2, titleAr: 'سور الحفظ', titleEn: 'Surahs for Memorization',
    focusAr: 'يتدرّب على حفظ سور عبس والمطففين والتكوير والانشقاق والشمس، بتقسيم الآيات إلى مقاطع قصيرة ومراجعتها بتأنٍ واحترام.',
    focusEn: 'Practice memorizing Surahs Abasa, Al-Mutaffifin, At-Takwir, Al-Inshiqaq, and Ash-Shams in short sections with respectful, unhurried review.',
    questionAr: 'أي سورة من الآتي ضمن سور الحفظ؟', questionEn: 'Which surah is included among the memorization selections?',
    optionsAr: ['سورة الشمس', 'سورة النبأ', 'سورة النازعات'], optionsEn: ['Surah Ash-Shams', 'Surah An-Naba', 'Surah An-Naziat']
  },
  {
    unit: 1, page: 2, titleAr: 'سور التلاوة', titleEn: 'Surahs for Recitation',
    focusAr: 'يستمع إلى سور المرسلات والنازعات والنبأ، ويتدرّب على تلاوتها بوضوح وإنصات، مع مراعاة آداب التعامل مع القرآن الكريم.',
    focusEn: 'Listen to and practice reciting Surahs Al-Mursalat, An-Naziat, and An-Naba clearly and attentively, observing respectful Quran etiquette.',
    questionAr: 'أي سورة من الآتي وردت ضمن سور التلاوة؟', questionEn: 'Which surah is included among the recitation selections?',
    optionsAr: ['سورة المرسلات', 'سورة عبس', 'سورة الانشقاق'], optionsEn: ['Surah Al-Mursalat', 'Surah Abasa', 'Surah Al-Inshiqaq']
  },
  {
    unit: 2, page: 14, titleAr: 'الحسد خلق سيئ', titleEn: 'Envy Is a Harmful Trait',
    focusAr: 'يتعرف معنى الحسد وآثاره، ويتعلم أن يفرح بالخير للآخرين ويشكر الله على النعم التي لديه.',
    focusEn: 'Understand envy and its effects, and practice being glad for others’ good fortune while appreciating one’s own blessings.',
    questionAr: 'ما التصرف الذي يساعد على الابتعاد عن الحسد؟', questionEn: 'Which action helps a person avoid envy?',
    optionsAr: ['الفرح بخير الآخرين وشكر الله', 'تمني زوال نعمة الآخرين', 'مقارنة النفس بالناس باستمرار'],
    optionsEn: ['Be glad for others and give thanks', 'Wish for others to lose their blessings', 'Constantly compare oneself with others']
  },
  {
    unit: 2, page: 16, titleAr: 'الرفق بالحيوان', titleEn: 'Kindness to Animals',
    focusAr: 'يتأمل قصة الجمل ويتعلم أن الرفق يشمل الحيوان؛ فيعامله بلطف، ولا يرهقه، ويحرص على حاجاته ورعايته.',
    focusEn: 'Reflect on the story of the camel and learn that kindness includes animals: treat them gently, do not overwork them, and care for their needs.',
    questionAr: 'كيف يطبق المتعلم الرفق بالحيوان؟', questionEn: 'How can a learner show kindness to an animal?',
    optionsAr: ['يعتني به ولا يؤذيه', 'يرهقه للعمل بلا راحة', 'يهمله إذا احتاج إلى الماء'],
    optionsEn: ['Care for it and avoid harming it', 'Make it work without rest', 'Ignore it when it needs water']
  },
  {
    unit: 2, page: 18, titleAr: 'من غشنا فليس منا', titleEn: 'Avoiding Deception',
    focusAr: 'يفهم أن الغش يضر الناس ويضعف الثقة، ويختار الصدق والأمانة في التعلم والبيع وسائر التعاملات.',
    focusEn: 'Understand that deception harms people and weakens trust, and choose honesty in learning, trade, and everyday dealings.',
    questionAr: 'ما السلوك الذي ينسجم مع معنى الدرس؟', questionEn: 'Which behavior reflects the lesson?',
    optionsAr: ['الصدق في التعامل', 'إخفاء عيب في شيء أبيعه', 'نسخ عمل زميل دون إذنه'],
    optionsEn: ['Be honest in dealings', 'Hide a flaw in something I sell', 'Copy a classmate’s work without permission']
  },
  {
    unit: 2, page: 20, titleAr: 'من صفات المؤمن', titleEn: 'Qualities of a Believer',
    focusAr: 'يتعلم حفظ اللسان واحترام الناس، فيبتعد عن الطعن واللعن والكلام الفاحش والبذيء، ويختار ألفاظًا طيبة.',
    focusEn: 'Practice respectful speech by avoiding insults, curses, and vulgar or rude words, and choosing kind language.',
    questionAr: 'أي عبارة تدل على حفظ اللسان؟', questionEn: 'Which choice shows care with one’s words?',
    optionsAr: ['التحدث بأدب واحترام', 'السخرية من شخص أمام زملائه', 'استخدام ألفاظ جارحة عند الخلاف'],
    optionsEn: ['Speak politely and respectfully', 'Mock someone in front of classmates', 'Use hurtful words during a disagreement']
  },
  {
    unit: 2, page: 22, titleAr: 'من صفات المنافق', titleEn: 'Traits of a Hypocrite',
    focusAr: 'يتعرف التحذير من الكذب وإخلاف الوعد وخيانة الأمانة، ويدرك أن الصدق والوفاء يعززان الثقة بين الناس.',
    focusEn: 'Learn the warning against lying, breaking promises, and betraying trust, and recognize how honesty and keeping promises build trust.',
    questionAr: 'أي خلق يقوي الثقة بين الناس؟', questionEn: 'Which quality strengthens trust between people?',
    optionsAr: ['الوفاء بالوعد', 'الكذب لإخفاء الخطأ', 'إهمال الأمانة التي اؤتمن عليها'],
    optionsEn: ['Keeping a promise', 'Lying to hide a mistake', 'Neglecting something entrusted to you']
  },
  {
    unit: 2, page: 24, titleAr: 'بر الرحم', titleEn: 'Kindness to Relatives',
    focusAr: 'يتعلم صلة الأقارب والإحسان إليهم، ويقترح صورًا مناسبة للتواصل والمساعدة مع مراعاة حاجات أفراد الأسرة.',
    focusEn: 'Learn to maintain family ties and treat relatives well, suggesting considerate ways to stay in touch and offer help.',
    questionAr: 'أي عمل يعد من صلة الرحم؟', questionEn: 'Which action helps maintain family ties?',
    optionsAr: ['السؤال عن الأقارب ومساعدتهم', 'تجاهل قريب يحتاج إلى دعم', 'إثارة الخلاف بين أفراد الأسرة'],
    optionsEn: ['Check on relatives and help them', 'Ignore a relative who needs support', 'Stir up conflict among family members']
  },
  {
    unit: 3, page: 27, titleAr: 'أسماء الله وصفاته في آية الكرسي', titleEn: 'Names and Attributes of Allah in Ayat al-Kursi',
    focusAr: 'يتأمل ما تدل عليه آية الكرسي من عظمة الله وعلمه وقدرته وقيوميته، ويتعلمها باحترام دون الحاجة إلى نسخ نصها.',
    focusEn: 'Reflect on how Ayat al-Kursi teaches about Allah’s greatness, knowledge, power, and sustaining care, approaching it respectfully without copying its text.',
    questionAr: 'ما معنى أن الله هو القيوم؟', questionEn: 'What does it mean that Allah is the Sustainer?',
    optionsAr: ['يقوم على تدبير خلقه ورعايتهم', 'يحتاج إلى من يعينه', 'يغيب عن أحوال المخلوقات'],
    optionsEn: ['He sustains and cares for creation', 'He needs someone to assist Him', 'He is unaware of creation']
  },
  {
    unit: 3, page: 30, titleAr: 'الإيمان بالكتب السماوية', titleEn: 'Belief in the Revealed Books',
    focusAr: 'يتعرف أن الله أنزل كتبًا على رسله لهداية الناس، ويتعلم الإيمان بها واحترامها، ومعرفة مكانة القرآن الكريم.',
    focusEn: 'Learn that Allah revealed books to messengers to guide people, and study belief in and respect for them and the place of the Quran.',
    questionAr: 'ما الغاية من إنزال الكتب السماوية؟', questionEn: 'Why were the revealed books sent?',
    optionsAr: ['هداية الناس إلى عبادة الله', 'التفاخر على الآخرين', 'إثارة الخصام بين الناس'],
    optionsEn: ['To guide people to worship Allah', 'To boast over others', 'To create arguments among people']
  },
  {
    unit: 3, page: 34, titleAr: 'المجموعة الأولى من أسماء الله الحسنى', titleEn: 'The First Group of the Beautiful Names of Allah',
    focusAr: 'يتأمل معاني أسماء المجموعة الأولى مثل الرحمن والرحيم والملك والسلام، ويربط التعلم بالتواضع والرحمة والسلام بين الناس.',
    focusEn: 'Explore meanings in the first group of Allah’s Beautiful Names, including Ar-Rahman, Ar-Rahim, Al-Malik, and As-Salam, and connect learning with humility, mercy, and peace.',
    questionAr: 'أي اسم يدل على سعة الرحمة؟', questionEn: 'Which name points to encompassing mercy?',
    optionsAr: ['الرحمن', 'العزيز', 'الجبار'], optionsEn: ['Ar-Rahman', 'Al-Aziz', 'Al-Jabbar']
  },
  {
    unit: 3, page: 36, titleAr: 'المجموعة الثانية من أسماء الله الحسنى', titleEn: 'The Second Group of the Beautiful Names of Allah',
    focusAr: 'يتعرف معاني أسماء المجموعة الثانية، ومنها الخالق والبارئ والمصور والغفار والوهاب والرزاق، ويتأمل نعم الخلق والرزق.',
    focusEn: 'Learn meanings in the second group, including Al-Khaliq, Al-Bari, Al-Musawwir, Al-Ghaffar, Al-Wahhab, and Ar-Razzaq, and reflect on creation and provision.',
    questionAr: 'أي اسم يدل على أن الله يهب عباده النعم؟', questionEn: 'Which name points to Allah granting blessings?',
    optionsAr: ['الوهاب', 'الفتاح', 'القابض'], optionsEn: ['Al-Wahhab', 'Al-Fattah', 'Al-Qabid']
  },
  {
    unit: 3, page: 38, titleAr: 'المجموعة الثالثة من أسماء الله الحسنى', titleEn: 'The Third Group of the Beautiful Names of Allah',
    focusAr: 'يتعرف معاني أسماء المجموعة الثالثة، مثل السميع والبصير والحكم والعدل واللطيف، ويتأمل أهمية الإنصاف واللطف في تعامله.',
    focusEn: 'Learn meanings in the third group, including As-Sami, Al-Basir, Al-Hakam, Al-Adl, and Al-Latif, and consider fairness and gentleness in daily life.',
    questionAr: 'أي اسم يدل على كمال العدل؟', questionEn: 'Which name expresses perfect justice?',
    optionsAr: ['العدل', 'الرافع', 'الخبير'], optionsEn: ['Al-Adl', 'Ar-Rafi', 'Al-Khabir']
  },
  {
    unit: 4, page: 41, titleAr: 'التشهد', titleEn: 'The Testimony in Prayer',
    focusAr: 'يتعلم موضع التشهد في الصلاة وآدابه، ويتدرب على متابعة المعلم بهدوء واحترام، ويراجع خطوات الصلاة التي درسها.',
    focusEn: 'Learn where the testimony occurs in prayer and its etiquette, following a teacher calmly and respectfully while reviewing the prayer steps already studied.',
    questionAr: 'متى يأتي التشهد في الصلاة؟', questionEn: 'When does the testimony occur in prayer?',
    optionsAr: ['في الجلوس المخصص له', 'قبل دخول وقت الصلاة', 'بعد الانتهاء من كل أعمال اليوم'],
    optionsEn: ['During the sitting assigned to it', 'Before the prayer time begins', 'After finishing all activities of the day']
  },
  {
    unit: 4, page: 43, titleAr: 'الأذان', titleEn: 'The Call to Prayer',
    focusAr: 'يتعرف وظيفة الأذان بوصفه إعلانًا لدخول وقت الصلاة ودعوةً إليها، ويتعلم الاستماع إليه باحترام والتعرف إلى دور المؤذن.',
    focusEn: 'Understand the call to prayer as announcing prayer time and inviting people to pray, and learn to listen respectfully and recognize the caller’s role.',
    questionAr: 'ما إحدى وظائف الأذان؟', questionEn: 'What is one purpose of the call to prayer?',
    optionsAr: ['الإعلان عن دخول وقت الصلاة', 'تحديد وقت اللعب', 'إلغاء الحاجة إلى الصلاة'],
    optionsEn: ['Announce that prayer time has begun', 'Set a time for play', 'Remove the need to pray']
  },
  {
    unit: 4, page: 45, titleAr: 'الإقامة', titleEn: 'The Iqama',
    focusAr: 'يتعرف الإقامة وما يميزها عن الأذان، ويتعلم أن يتبع توجيه معلمه في التعرف إلى موضعها قبل بدء الصلاة.',
    focusEn: 'Learn what the iqama is and how it differs from the call to prayer, following a teacher’s guidance about its place before prayer begins.',
    questionAr: 'ما الغرض من الإقامة؟', questionEn: 'What is the purpose of the iqama?',
    optionsAr: ['الإعلان عن قيام الصلاة', 'الإعلان عن انتهاء اليوم الدراسي', 'دعوة الناس إلى الطعام'],
    optionsEn: ['Announce that the prayer is about to begin', 'Announce the end of the school day', 'Invite people to a meal']
  },
  {
    unit: 4, page: 47, titleAr: 'من أذكار الصلاة بعد السلام', titleEn: 'Remembrance after Prayer',
    focusAr: 'يتعرف أمثلة من الذكر والدعاء بعد الصلاة، ويتعلم أن يذكر الله بخشوع وهدوء، وأن يسأل معلمه عن كيفية أداء ما يتعلمه.',
    focusEn: 'Learn examples of remembrance and supplication after prayer, practicing calmly and reverently and asking a teacher how to follow what is taught.',
    questionAr: 'ما السلوك المناسب عند الذكر بعد الصلاة؟', questionEn: 'What is an appropriate way to remember Allah after prayer?',
    optionsAr: ['الذكر بهدوء واحترام', 'إزعاج المصلين', 'الاستعجال دون إنصات'],
    optionsEn: ['Remember Allah calmly and respectfully', 'Disturb people who are praying', 'Rush without paying attention']
  },
  {
    unit: 5, page: 50, titleAr: 'الأمانة', titleEn: 'Trustworthiness',
    focusAr: 'يتأمل قصة عبد القيوم ويتعلم حفظ حقوق الآخرين ورد الأمانات، ويستنتج أن الأمانة خلق حسن في البيت والعمل والتعامل.',
    focusEn: 'Reflect on the story of Abd al-Qayyum and learn to protect others’ rights and return entrusted items, practicing trustworthiness at home and in daily life.',
    questionAr: 'ماذا يفعل الأمين إذا وجد شيئًا ليس له؟', questionEn: 'What should a trustworthy person do after finding something that is not theirs?',
    optionsAr: ['يحفظه حتى يصل إلى صاحبه', 'يأخذه لنفسه دون سؤال', 'يخفيه عن الجميع'],
    optionsEn: ['Keep it safe until it reaches its owner', 'Take it without asking', 'Hide it from everyone']
  },
  {
    unit: 5, page: 54, titleAr: 'الصدق منجاة', titleEn: 'Truthfulness Brings Safety',
    focusAr: 'يستخلص من القصة أن الصدق يساعد على النجاة وبناء الثقة، ويتعلم طلب العون من شخص موثوق والتحدث بصدق عند الشدة.',
    focusEn: 'Learn from the story that truthfulness supports safety and trust, and practice asking a trusted person for help and speaking honestly in difficulty.',
    questionAr: 'ماذا ينبغي أن يفعل من وقع في مشكلة؟', questionEn: 'What should someone do when facing a problem?',
    optionsAr: ['يتحدث بصدق ويطلب العون', 'يختلق قصة لإخفاء الأمر', 'يترك الآخرين في حيرة'],
    optionsEn: ['Speak honestly and ask for help', 'Make up a story to hide it', 'Leave others confused']
  },
  {
    unit: 5, page: 56, titleAr: 'حرية وعدالة', titleEn: 'Freedom and Justice',
    focusAr: 'يتأمل قصة عمر بن الخطاب والشاب المصري، ويتعلم أن العدل والكرامة والحقوق ينبغي أن تصان، وأن الشكوى تطلب بطرق آمنة.',
    focusEn: 'Reflect on the account of Umar ibn al-Khattab and the Egyptian youth, learning that justice, dignity, and rights should be protected and concerns raised safely.',
    questionAr: 'ما القيمة التي تؤكدها القصة؟', questionEn: 'Which value does the story emphasize?',
    optionsAr: ['العدل وصيانة كرامة الناس', 'التفرقة بين الناس في الحقوق', 'التعدي على من يختلف عنا'],
    optionsEn: ['Justice and respect for people’s dignity', 'Unequal rights for different people', 'Mistreating people who differ from us']
  },
  {
    unit: 6, page: 59, titleAr: 'هجرة الصحابة إلى الحبشة الأولى والثانية', titleEn: 'The First and Second Migrations to Abyssinia',
    focusAr: 'يتعرف دوافع هجرة بعض الصحابة إلى الحبشة بحثًا عن الأمان لدينهم، ويتأمل قيمة الرحمة بالناس وحمايتهم من الظلم.',
    focusEn: 'Learn why some companions migrated to Abyssinia to seek safety for their faith, reflecting on compassion and protecting people from injustice.',
    questionAr: 'ما الذي دفع بعض الصحابة إلى الهجرة؟', questionEn: 'What led some companions to migrate?',
    optionsAr: ['طلب الأمان من الأذى', 'الرغبة في إيذاء الآخرين', 'ترك مساعدة بعضهم بعضًا'],
    optionsEn: ['Seeking safety from harm', 'Wanting to harm others', 'Refusing to help one another']
  },
  {
    unit: 6, page: 60, titleAr: 'مكيدة قريش بمهاجري الحبشة', titleEn: 'Quraysh’s Plan Concerning the Migrants to Abyssinia',
    focusAr: 'يتابع أحداث محاولة قريش التأثير في مقام المهاجرين، ويفهم أهمية التثبت من الأخبار والإنصاف في الحكم على الناس.',
    focusEn: 'Follow the account of Quraysh’s attempt to influence the migrants’ situation, and consider checking information and judging people fairly.',
    questionAr: 'ما السلوك الحكيم عند سماع خبر عن جماعة من الناس؟', questionEn: 'What is a wise response to hearing a report about a group of people?',
    optionsAr: ['التحقق من الخبر قبل تصديقه', 'نشره مباشرة دون تحقق', 'الحكم على الجميع من إشاعة'],
    optionsEn: ['Check the report before believing it', 'Share it immediately without checking', 'Judge everyone based on a rumor']
  },
  {
    unit: 6, page: 62, titleAr: 'الشدة في التعذيب ومحاولة القضاء على الرسول', titleEn: 'Hardship and Attempts to Harm the Prophet',
    focusAr: 'يتعرف ما تعرض له النبي وأصحابه من أذى بوصفه حدثًا تاريخيًا مؤلمًا، ويركز على التعاطف ورفض الاعتداء ومساندة المتضرر بأمان.',
    focusEn: 'Learn that the Prophet and his companions faced painful historical harm, focusing on empathy, rejecting violence, and safely supporting those affected.',
    questionAr: 'ما الموقف المناسب تجاه من يتعرض للأذى؟', questionEn: 'How should we respond when someone is being harmed?',
    optionsAr: ['نطلب المساعدة ونسانده بأمان', 'نشارك في إيذائه', 'نتجاهل حاجته إلى العون'],
    optionsEn: ['Get help and support them safely', 'Join in harming them', 'Ignore their need for help']
  },
  {
    unit: 6, page: 65, titleAr: 'إسلام عمر بن الخطاب رضي الله عنه', titleEn: 'The Acceptance of Islam by Umar ibn al-Khattab',
    focusAr: 'يتابع قصة إسلام عمر ويتأمل أثر التغير في الموقف والحوار، ويتعلم التعامل باحترام مع من يراجع أفكاره ويختار طريقًا جديدًا.',
    focusEn: 'Follow the account of Umar accepting Islam and reflect on changing perspectives and dialogue, respecting people who reconsider their views.',
    questionAr: 'ما السلوك الذي يعكس الاحترام عند اختلاف الآراء؟', questionEn: 'Which action shows respect when opinions differ?',
    optionsAr: ['الاستماع والتحدث بأدب', 'السخرية من المتحدث', 'منع الآخرين من التعبير'],
    optionsEn: ['Listen and speak politely', 'Mock the speaker', 'Prevent others from expressing themselves']
  },
  {
    unit: 6, page: 68, titleAr: 'مفاوضات ومساومات قريش لرسول الله', titleEn: 'Quraysh’s Negotiations with the Prophet',
    focusAr: 'يتعرف محاولات قريش لمساومة النبي على دعوته، ويتأمل الثبات على المبدأ مع الصبر والحوار المسؤول.',
    focusEn: 'Learn about Quraysh’s attempts to bargain with the Prophet over his message, reflecting on principled commitment, patience, and responsible dialogue.',
    questionAr: 'ما الذي يوضحه موقف النبي في هذه الأحداث؟', questionEn: 'What does the Prophet’s response in these events illustrate?',
    optionsAr: ['الثبات على المبدأ والصبر', 'التخلي عن القيم لإرضاء الآخرين', 'إيذاء من يخالفه'],
    optionsEn: ['Commitment to principle and patience', 'Abandoning values to please others', 'Harming those who disagree']
  },
  {
    unit: 6, page: 69, titleAr: 'أثر قراءة القرآن على عتبة', titleEn: 'The Effect of the Quran’s Recitation on Utbah',
    focusAr: 'يتأمل ما ترويه الوحدة عن استماع عتبة إلى القرآن، ويتعلم الإنصات والتفكر قبل إصدار الأحكام.',
    focusEn: 'Reflect on the unit’s account of Utbah listening to the Quran, and practice listening thoughtfully before making judgments.',
    questionAr: 'ما التصرف الذي يظهر حسن الإنصات؟', questionEn: 'Which action shows attentive listening?',
    optionsAr: ['الإصغاء والتفكر فيما أسمع', 'مقاطعة المتحدث', 'إصدار حكم قبل الاستماع'],
    optionsEn: ['Listen carefully and reflect', 'Interrupt the speaker', 'Judge before listening']
  },
  {
    unit: 6, page: 71, titleAr: 'المقاطعة العامة لبني هاشم وبني المطلب', titleEn: 'The General Boycott of Banu Hashim and Banu al-Muttalib',
    focusAr: 'يتعرف المقاطعة وما سببته من مشقة تاريخية، ويتأمل أهمية التعاون والتراحم ومساندة الأسر في أوقات الصعوبة.',
    focusEn: 'Learn about the boycott and the hardship it caused, reflecting on cooperation, compassion, and supporting families in difficult times.',
    questionAr: 'ما الخلق الذي يعين الناس في أوقات الشدة؟', questionEn: 'Which quality helps people through hardship?',
    optionsAr: ['التعاون والتراحم', 'الشماتة بالمتضررين', 'منع المساعدة عن المحتاج'],
    optionsEn: ['Cooperation and compassion', 'Gloating over those affected', 'Withholding help from someone in need']
  },
  {
    unit: 6, page: 74, titleAr: 'عام الحزن', titleEn: 'The Year of Sorrow',
    focusAr: 'يتعرف أثر وفاة خديجة وأبي طالب على النبي صلى الله عليه وسلم، ويتأمل قيمة المواساة والثبات وطلب الدعم عند الحزن.',
    focusEn: 'Learn about the effect of the deaths of Khadija and Abu Talib on the Prophet, reflecting on comfort, perseverance, and seeking support during grief.',
    questionAr: 'ما التصرف المناسب لمواساة شخص حزين؟', questionEn: 'What is a considerate way to comfort someone who is grieving?',
    optionsAr: ['الإنصات إليه ومساندته بلطف', 'لومه على حزنه', 'تجاهله حين يطلب الدعم'],
    optionsEn: ['Listen and support them gently', 'Blame them for feeling sad', 'Ignore them when they ask for support']
  },
  {
    unit: 6, page: 75, titleAr: 'اشتداد أذى أهل مكة للنبي وأصحابه', titleEn: 'The Intensifying Harm Faced by the Prophet and His Companions',
    focusAr: 'يتأمل اشتداد الأذى بعد وفاة أبي طالب، ويتعلم التعاطف مع من يواجه المصاعب ورفض الظلم والبحث عن العون الموثوق.',
    focusEn: 'Reflect on the increased hardship after Abu Talib’s death, showing empathy for people in difficulty, rejecting injustice, and seeking trusted help.',
    questionAr: 'ما المبدأ الذي نتمسك به عند رؤية الظلم؟', questionEn: 'Which principle should guide us when we witness injustice?',
    optionsAr: ['نرفض الظلم ونطلب المساعدة المناسبة', 'نؤذي من وقع عليه الظلم', 'ننشر الخبر دون مراعاة لسلامة الناس'],
    optionsEn: ['Reject injustice and seek appropriate help', 'Harm the person who was treated unfairly', 'Share the story without considering people’s safety']
  }
];

const visualSteps = [
  { labelAr: 'اقرأ الموضوع', labelEn: 'Read the topic' },
  { labelAr: 'افهم الفكرة', labelEn: 'Understand the idea' },
  { labelAr: 'اربطها بمثال', labelEn: 'Connect it to an example' },
  { labelAr: 'راجع تعلمك', labelEn: 'Review your learning' }
];

export const SUDAN_PRIMARY_ISLAMIC_G4_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ISLAMIC_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-islamic-g4-${order}`;
  const unit = SUDAN_PRIMARY_ISLAMIC_G4_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الإسلامية — الصف الرابع الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 4 Islamic Studies — ${unit.titleEn}`,
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
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Grade 4 Primary',
    termAr: 'التربية الإسلامية — الصف الرابع',
    termEn: 'Grade 4 Islamic Studies',
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
        captionAr: 'خطوات بصرية مبسطة لفهم الموضوع ومراجعته.',
        captionEn: 'A simple visual sequence for understanding and reviewing the topic.',
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
