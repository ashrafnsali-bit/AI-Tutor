import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_HISTORY_G3_BOOK = {
  title: 'التاريخ والتربية الوطنية — الصف الثالث للتعليم الأساسي',
  edition: 'الطبعة الأولى 2016م',
  units: [
    { titleAr: 'نحن والكون والعالم', titleEn: 'Us, the Universe, and the World', firstPage: 1, lastPage: 12 },
    { titleAr: 'وطننا السودان', titleEn: 'Our Homeland, Sudan', firstPage: 13, lastPage: 19 },
    { titleAr: 'دولتنا الإسلامية', titleEn: 'The Islamic State', firstPage: 20, lastPage: 28 },
    { titleAr: 'قارتنا إفريقيا', titleEn: 'Our Continent, Africa', firstPage: 29, lastPage: 35 },
    { titleAr: 'أوربا وآسيا', titleEn: 'Europe and Asia', firstPage: 36, lastPage: 40 },
    { titleAr: 'أنا سوداني', titleEn: 'I Am Sudanese', firstPage: 41, lastPage: 48 }
  ]
} as const;

interface HistoryLesson {
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
  visualStepsAr: [string, string, string, string];
  visualStepsEn: [string, string, string, string];
}

const lessons: HistoryLesson[] = [
  {
    unit: 1, page: 7, titleAr: 'خلق الكون', titleEn: 'The Creation of the Universe',
    focusAr: 'يتأمل الكون بوصفه فضاءً يضم الأرض والنجوم والكواكب، ويتعرف أن الإنسان يعيش على الأرض وينتفع بمواردها مع المحافظة عليها.',
    focusEn: 'Explore the universe as the space containing Earth, stars, and planets, and recognize that people live on Earth and should care for its resources.',
    questionAr: 'أي مما يأتي نجم يمد الأرض بالضوء والحرارة؟', questionEn: 'Which of these is a star that gives Earth light and heat?',
    optionsAr: ['الشمس', 'القمر', 'السحاب'],
    optionsEn: ['The Sun', 'The Moon', 'A cloud'],
    visualStepsAr: ['الكون', 'النجوم والكواكب', 'الأرض', 'الحياة عليها'],
    visualStepsEn: ['Universe', 'Stars and planets', 'Earth', 'Life on Earth']
  },
  {
    unit: 1, page: 7, titleAr: 'خلق الإنسان', titleEn: 'The Creation of Humankind',
    focusAr: 'يتعرف أن البشر ينتمون إلى أصل إنساني مشترك، ويتأمل تنوع المجتمعات واللغات والعادات ويتعامل مع الآخرين باحترام.',
    focusEn: 'Recognize humanity’s shared origins, reflect on the diversity of communities, languages, and customs, and treat others with respect.',
    questionAr: 'ما السلوك المناسب عند التعرف إلى أشخاص من عادات مختلفة؟', questionEn: 'How should we act when meeting people with different customs?',
    optionsAr: ['احترامهم والتعرف إلى عاداتهم', 'السخرية منهم', 'رفض الحديث معهم'],
    optionsEn: ['Respect them and learn about their customs', 'Make fun of them', 'Refuse to speak with them'],
    visualStepsAr: ['بشر', 'مجتمعات متنوعة', 'تعارف', 'احترام متبادل'],
    visualStepsEn: ['People', 'Diverse communities', 'Getting to know one another', 'Mutual respect']
  },
  {
    unit: 1, page: 10, titleAr: 'انتشار الإنسان في الأرض', titleEn: 'Human Movement Across the Earth',
    focusAr: 'يتعرف أن انتقال الناس من مكان إلى آخر يسمى هجرة، ويستكشف دوافع الانتقال وآثاره في تبادل الخبرات ونمو المجتمعات.',
    focusEn: 'Learn that moving from one place to another is migration, and explore reasons for movement and its effects on sharing knowledge and building communities.',
    questionAr: 'ما المقصود بالهجرة؟', questionEn: 'What does migration mean?',
    optionsAr: ['انتقال الناس من مكان إلى آخر', 'تغير فصول السنة', 'رسم خريطة للمكان'],
    optionsEn: ['People moving from one place to another', 'The change of seasons', 'Drawing a map of a place'],
    visualStepsAr: ['حاجة أو سبب', 'انتقال', 'لقاء مجتمعات', 'تبادل خبرات'],
    visualStepsEn: ['A need or reason', 'Movement', 'Communities meet', 'Experiences are shared']
  },
  {
    unit: 2, page: 14, titleAr: 'معنى السودان', titleEn: 'The Meaning of Sudan',
    focusAr: 'يحدد السودان على خريطة إفريقيا، ويتعرف معنى الوطن وبعض الموارد الطبيعية التي يعتمد عليها السكان.',
    focusEn: 'Locate Sudan on a map of Africa, understand the idea of homeland, and identify natural resources people depend on.',
    questionAr: 'في أي قارة يقع السودان؟', questionEn: 'On which continent is Sudan located?',
    optionsAr: ['إفريقيا', 'أوربا', 'أمريكا الجنوبية'],
    optionsEn: ['Africa', 'Europe', 'South America'],
    visualStepsAr: ['العالم', 'قارة إفريقيا', 'السودان', 'وطن السكان'],
    visualStepsEn: ['The world', 'Africa', 'Sudan', 'People’s homeland']
  },
  {
    unit: 2, page: 15, titleAr: 'تكوين السودان', titleEn: 'The People of Sudan',
    focusAr: 'يتعرف أن مجتمع السودان تشكل عبر تاريخ طويل من التواصل والحركة والاستقرار، ويقدر تنوع مكوناته وروابطه المشتركة.',
    focusEn: 'Learn that Sudanese society developed through a long history of contact, movement, and settlement, and value its diversity and shared connections.',
    questionAr: 'ما الذي يساعد على تكوين مجتمع متنوع؟', questionEn: 'What helps shape a diverse community?',
    optionsAr: ['التواصل والحركة والاستقرار عبر الزمن', 'العيش دون تواصل', 'الابتعاد عن تبادل الخبرات'],
    optionsEn: ['Contact, movement, and settlement over time', 'Living without contact', 'Avoiding shared experiences'],
    visualStepsAr: ['مناطق متعددة', 'حركة السكان', 'تواصل وتبادل', 'مجتمع متنوع'],
    visualStepsEn: ['Different regions', 'People move', 'Contact and exchange', 'A diverse community']
  },
  {
    unit: 2, page: 16, titleAr: 'حضارة ومدنية السودان', titleEn: 'Sudan’s Civilizations and Ways of Life',
    focusAr: 'يميز بين الحضارة والمدنية، ويتعرف شواهد من حياة المجتمعات القديمة في السودان وأهمية حفظ الآثار ودراستها.',
    focusEn: 'Distinguish civilization from material ways of life, learn about evidence of ancient Sudanese communities, and understand why heritage should be preserved and studied.',
    questionAr: 'ماذا تساعدنا الآثار على معرفته؟', questionEn: 'What can archaeological remains help us learn?',
    optionsAr: ['جوانب من حياة المجتمعات الماضية', 'توقع الطقس غدًا', 'أسماء الكواكب'],
    optionsEn: ['Aspects of life in past communities', 'Tomorrow’s weather', 'The names of planets'],
    visualStepsAr: ['مجتمع قديم', 'أدوات ومبانٍ', 'آثار محفوظة', 'معرفة الماضي'],
    visualStepsEn: ['An ancient community', 'Tools and buildings', 'Preserved remains', 'Learning about the past']
  },
  {
    unit: 3, page: 21, titleAr: 'سيرة النبي محمد صلى الله عليه وسلم', titleEn: 'The Life of Prophet Muhammad',
    focusAr: 'يتعرف محطات أساسية من السيرة النبوية في سياقها التاريخي، مثل النشأة وبداية الرسالة والدعوة إلى قيم الصدق والأمانة.',
    focusEn: 'Explore key events in the Prophet’s life in historical context, including his early life, the beginning of the message, and teachings about honesty and trustworthiness.',
    questionAr: 'ما من القيم التي عُرف بها النبي محمد؟', questionEn: 'Which value was the Prophet Muhammad known for?',
    optionsAr: ['الصدق والأمانة', 'الإهمال', 'نقض العهد'],
    optionsEn: ['Honesty and trustworthiness', 'Carelessness', 'Breaking agreements'],
    visualStepsAr: ['النشأة بمكة', 'بداية الرسالة', 'الدعوة', 'قيم الصدق والأمانة'],
    visualStepsEn: ['Early life in Mecca', 'The message begins', 'The call', 'Honesty and trustworthiness']
  },
  {
    unit: 3, page: 21, titleAr: 'الدعوة الإسلامية', titleEn: 'The Islamic Call',
    focusAr: 'يتعرف بداية الدعوة الإسلامية وانتقالها من الدعوة بين المقربين إلى إعلانها، ويستوعب ما واجهه المسلمون الأوائل من تحديات.',
    focusEn: 'Learn how the Islamic call began among close companions before becoming public, and understand challenges faced by early Muslims.',
    questionAr: 'كيف بدأت الدعوة الإسلامية؟', questionEn: 'How did the Islamic call begin?',
    optionsAr: ['بين النبي وأهله والمقربين منه', 'في قارة أوربا', 'بعد قيام الدولة الحديثة'],
    optionsEn: ['Among the Prophet’s family and close companions', 'On the continent of Europe', 'After the modern state was established'],
    visualStepsAr: ['دعوة بين المقربين', 'اتساع الدعوة', 'تحديات', 'ثبات المؤمنين'],
    visualStepsEn: ['A call among close companions', 'The call expands', 'Challenges', 'Believers remain steadfast']
  },
  {
    unit: 3, page: 22, titleAr: 'هجرة النبي صلى الله عليه وسلم', titleEn: 'The Prophet’s Migration',
    focusAr: 'يتعرف الهجرة النبوية من مكة إلى المدينة بوصفها حدثًا محوريًا، ويميز بين المهاجرين والأنصار ودور التعاون بينهم.',
    focusEn: 'Learn about the Prophet’s migration from Mecca to Medina as a pivotal event, distinguish the migrants from the Ansar, and recognize their cooperation.',
    questionAr: 'إلى أي مدينة هاجر النبي من مكة؟', questionEn: 'To which city did the Prophet migrate from Mecca?',
    optionsAr: ['المدينة', 'القدس', 'الخرطوم'],
    optionsEn: ['Medina', 'Jerusalem', 'Khartoum'],
    visualStepsAr: ['مكة', 'طريق الهجرة', 'المدينة', 'تعاون المهاجرين والأنصار'],
    visualStepsEn: ['Mecca', 'The migration journey', 'Medina', 'Cooperation between migrants and the Ansar']
  },
  {
    unit: 3, page: 22, titleAr: 'قيام الدولة الإسلامية', titleEn: 'The Establishment of the Islamic State',
    focusAr: 'يتعرف جوانب من تنظيم المجتمع في المدينة، مثل التعاون بين السكان والاتفاقات المنظمة للحياة المشتركة وتقديم الخدمات.',
    focusEn: 'Learn about aspects of organizing the community in Medina, including cooperation, agreements for shared life, and providing services.',
    questionAr: 'ما فائدة القواعد والاتفاقات في المجتمع؟', questionEn: 'What is the purpose of rules and agreements in a community?',
    optionsAr: ['تنظيم الحياة والحقوق والمسؤوليات', 'منع التعاون', 'إلغاء الخدمات'],
    optionsEn: ['Organize life, rights, and responsibilities', 'Prevent cooperation', 'Remove services'],
    visualStepsAr: ['مجتمع المدينة', 'تعاون السكان', 'قواعد مشتركة', 'تنظيم شؤون المجتمع'],
    visualStepsEn: ['The Medina community', 'Residents cooperate', 'Shared rules', 'Community affairs are organized']
  },
  {
    unit: 4, page: 30, titleAr: 'إفريقيا والإفريقيون', titleEn: 'Africa and Its Peoples',
    focusAr: 'يتعرف إفريقيا قارة واسعة ومتنوعة، ويستكشف تنوع بيئاتها ومجتمعاتها وإسهاماتها الحضارية دون تعميم صفات على شعوبها.',
    focusEn: 'Explore Africa as a large and diverse continent, learning about its environments, communities, and contributions without stereotyping its peoples.',
    questionAr: 'أي وصف أدق لشعوب إفريقيا؟', questionEn: 'Which description best reflects the peoples of Africa?',
    optionsAr: ['متنوعون في لغاتهم وثقافاتهم وبيئاتهم', 'يتحدثون لغة واحدة جميعًا', 'يعيشون في بيئة واحدة متشابهة'],
    optionsEn: ['Diverse in languages, cultures, and environments', 'They all speak one language', 'They all live in the same environment'],
    visualStepsAr: ['قارة إفريقيا', 'بيئات متنوعة', 'شعوب متعددة', 'ثقافات غنية'],
    visualStepsEn: ['Africa', 'Diverse environments', 'Many peoples', 'Rich cultures']
  },
  {
    unit: 4, page: 32, titleAr: 'علاقة السودان بإفريقيا', titleEn: 'Sudan’s Connections with Africa',
    focusAr: 'يستكشف روابط السودان ببلدان القارة من خلال الموقع والجوار والتاريخ والتبادل والتعاون بين المجتمعات.',
    focusEn: 'Explore Sudan’s connections with countries across the continent through location, neighbouring communities, history, exchange, and cooperation.',
    questionAr: 'ما مثال على رابط بين السودان وبلدان إفريقية أخرى؟', questionEn: 'What is one connection between Sudan and other African countries?',
    optionsAr: ['التواصل والتبادل والتعاون', 'انعدام العلاقات', 'اختلاف الكواكب'],
    optionsEn: ['Contact, exchange, and cooperation', 'No relations at all', 'Different planets'],
    visualStepsAr: ['السودان', 'بلدان إفريقية', 'تبادل وتواصل', 'تعاون مشترك'],
    visualStepsEn: ['Sudan', 'African countries', 'Exchange and contact', 'Cooperation']
  },
  {
    unit: 4, page: 32, titleAr: 'انتشار المسيحية والإسلام في إفريقيا وأثره', titleEn: 'The Spread and Influence of Christianity and Islam in Africa',
    focusAr: 'يتعرف وصول المسيحية والإسلام إلى مناطق مختلفة من إفريقيا عبر فترات تاريخية، ويلاحظ أثر الأديان في حياة المجتمعات وتراثها.',
    focusEn: 'Learn that Christianity and Islam reached different parts of Africa in different historical periods, and consider how religions influenced community life and heritage.',
    questionAr: 'ما أثر يمكن أن تتركه الأديان في المجتمعات؟', questionEn: 'What is one way religions can influence communities?',
    optionsAr: ['التأثير في الممارسات والتراث', 'تغيير مدار الأرض', 'تكوين المحيطات'],
    optionsEn: ['Influence practices and heritage', 'Change Earth’s orbit', 'Form oceans'],
    visualStepsAr: ['مجتمعات إفريقية', 'وصول أديان عبر الزمن', 'تفاعل محلي', 'تراث متنوع'],
    visualStepsEn: ['African communities', 'Religions arrive over time', 'Local interaction', 'Diverse heritage']
  },
  {
    unit: 5, page: 37, titleAr: 'أوربا والأوربيون', titleEn: 'Europe and Its Peoples',
    focusAr: 'يتعرف موقع قارة أوربا وبعض ملامح بيئاتها ومجتمعاتها، ويقدر تنوع السكان والثقافات فيها.',
    focusEn: 'Locate Europe and learn about some of its environments and communities, while recognizing the diversity of its peoples and cultures.',
    questionAr: 'أي عبارة صحيحة عن مجتمعات أوربا؟', questionEn: 'Which statement about European communities is accurate?',
    optionsAr: ['تتنوع مجتمعاتها وثقافاتها', 'تتكون من مجتمع واحد متطابق', 'تقع كلها في إفريقيا'],
    optionsEn: ['Its communities and cultures are diverse', 'They are all one identical community', 'They are all located in Africa'],
    visualStepsAr: ['قارة أوربا', 'مناطق متعددة', 'مجتمعات متنوعة', 'ثقافات مختلفة'],
    visualStepsEn: ['Europe', 'Different regions', 'Diverse communities', 'Different cultures']
  },
  {
    unit: 5, page: 37, titleAr: 'علاقتنا بأوربا', titleEn: 'Our Connections with Europe',
    focusAr: 'يتعرف صورًا من التواصل التاريخي والمعاصر بين إفريقيا وأوربا، ويفكر في آثار التبادل والتعاون والاحتلال في التاريخ.',
    focusEn: 'Explore historical and contemporary connections between Africa and Europe, and consider the effects of exchange, cooperation, and colonization in history.',
    questionAr: 'ما المقصود بالاستعمار في التاريخ؟', questionEn: 'What does colonization mean in history?',
    optionsAr: ['سيطرة دولة على بلد آخر وحكمه', 'تبادل التحيات فقط', 'رسم حدود على خريطة'],
    optionsEn: ['A country controlling and governing another', 'Only exchanging greetings', 'Drawing borders on a map'],
    visualStepsAr: ['تواصل تاريخي', 'تبادل وعلاقات', 'تجربة استعمارية', 'تأمل آثار الماضي'],
    visualStepsEn: ['Historical contact', 'Exchange and relations', 'Colonial experience', 'Reflecting on the past']
  },
  {
    unit: 5, page: 37, titleAr: 'حضارة ومدنية أوربا', titleEn: 'European Civilizations and Ways of Life',
    focusAr: 'يتعرف أمثلة من الحضارات الأوروبية القديمة وإسهامات المجتمعات في البناء والفنون والمعرفة عبر العصور.',
    focusEn: 'Learn examples of ancient European civilizations and how communities contributed to architecture, arts, and knowledge over time.',
    questionAr: 'ما الذي يساعدنا على دراسة الحضارات القديمة؟', questionEn: 'What helps us study ancient civilizations?',
    optionsAr: ['آثارها ومصادرها التاريخية', 'التنبؤات اليومية', 'إشارات المرور'],
    optionsEn: ['Their remains and historical sources', 'Daily forecasts', 'Traffic signals'],
    visualStepsAr: ['مجتمعات قديمة', 'عمارة وفنون', 'آثار ومصادر', 'معرفة تاريخية'],
    visualStepsEn: ['Ancient communities', 'Architecture and arts', 'Remains and sources', 'Historical knowledge']
  },
  {
    unit: 5, page: 38, titleAr: 'آسيا والآسيويون', titleEn: 'Asia and Its Peoples',
    focusAr: 'يتعرف موقع آسيا واتساعها وتنوع مجتمعاتها ولغاتها وبيئاتها، ويستعمل الخريطة لتحديد موقعها بالنسبة إلى إفريقيا.',
    focusEn: 'Explore Asia’s location, size, and diverse communities, languages, and environments, using a map to locate it relative to Africa.',
    questionAr: 'ما القارة التي تقع إلى الشرق من إفريقيا؟', questionEn: 'Which continent lies east of Africa?',
    optionsAr: ['آسيا', 'أمريكا الجنوبية', 'أوربا'],
    optionsEn: ['Asia', 'South America', 'Europe'],
    visualStepsAr: ['إفريقيا', 'البحر الأحمر', 'آسيا', 'مجتمعات متنوعة'],
    visualStepsEn: ['Africa', 'The Red Sea', 'Asia', 'Diverse communities']
  },
  {
    unit: 5, page: 39, titleAr: 'علاقتنا بآسيا', titleEn: 'Our Connections with Asia',
    focusAr: 'يستكشف روابط تاريخية وثقافية وتجارية بين السودان ومناطق في آسيا، ويفهم دور التواصل والتبادل بين المجتمعات.',
    focusEn: 'Explore historical, cultural, and trade connections between Sudan and parts of Asia, and understand the role of contact and exchange.',
    questionAr: 'أي نشاط يقوي الروابط بين المجتمعات؟', questionEn: 'Which activity can strengthen connections between communities?',
    optionsAr: ['التبادل والتعاون', 'منع التواصل', 'إتلاف الآثار'],
    optionsEn: ['Exchange and cooperation', 'Preventing contact', 'Damaging heritage'],
    visualStepsAr: ['السودان', 'طرق التواصل', 'تبادل السلع والأفكار', 'علاقات متبادلة'],
    visualStepsEn: ['Sudan', 'Routes of contact', 'Exchange of goods and ideas', 'Mutual relations']
  },
  {
    unit: 5, page: 39, titleAr: 'مدنيات آسيا القديمة', titleEn: 'Ancient Asian Civilizations',
    focusAr: 'يتعرف أمثلة من حضارات قديمة في آسيا، ويلاحظ إسهاماتها في الزراعة والعمارة والفنون وتنظيم المجتمعات.',
    focusEn: 'Learn examples of ancient Asian civilizations and notice their contributions to agriculture, architecture, arts, and community organization.',
    questionAr: 'أي مما يأتي من مجالات إسهام الحضارات القديمة؟', questionEn: 'Which is an area of contribution by ancient civilizations?',
    optionsAr: ['الزراعة والعمارة والفنون', 'تغيير دوران الأرض', 'إيقاف تعاقب الليل والنهار'],
    optionsEn: ['Agriculture, architecture, and arts', 'Changing Earth’s rotation', 'Stopping day and night'],
    visualStepsAr: ['حضارات قديمة', 'زراعة', 'عمارة وفنون', 'إرث حضاري'],
    visualStepsEn: ['Ancient civilizations', 'Agriculture', 'Architecture and arts', 'Civilizational heritage']
  },
  {
    unit: 6, page: 42, titleAr: 'جنسيتنا', titleEn: 'Our Nationality',
    focusAr: 'يفهم معنى الجنسية والانتماء الوطني، ويربط المواطنة بالحقوق والمسؤوليات واحترام أفراد المجتمع.',
    focusEn: 'Understand nationality and civic belonging, connecting citizenship with rights, responsibilities, and respect for community members.',
    questionAr: 'ما الذي يرتبط بالمواطنة؟', questionEn: 'What is associated with citizenship?',
    optionsAr: ['حقوق ومسؤوليات واحترام متبادل', 'حقوق دون مسؤوليات', 'رفض المشاركة المجتمعية'],
    optionsEn: ['Rights, responsibilities, and mutual respect', 'Rights without responsibilities', 'Refusing community participation'],
    visualStepsAr: ['وطن', 'انتماء', 'حقوق ومسؤوليات', 'مواطنة فاعلة'],
    visualStepsEn: ['Homeland', 'Belonging', 'Rights and responsibilities', 'Active citizenship']
  },
  {
    unit: 6, page: 45, titleAr: 'صفاتنا وأخلاقنا', titleEn: 'Our Values and Good Conduct',
    focusAr: 'يتأمل قيمًا إنسانية مشتركة مثل الصدق والتسامح والكرم والشجاعة، ويطبقها في تعامله مع الآخرين دون حصرها في شعب بعينه.',
    focusEn: 'Reflect on shared human values such as honesty, tolerance, generosity, and courage, applying them without treating them as traits of any one people.',
    questionAr: 'أي سلوك يعبر عن التسامح؟', questionEn: 'Which action shows tolerance?',
    optionsAr: ['احترام الآخرين رغم اختلافهم', 'السخرية من الاختلاف', 'رفض الاستماع للآخرين'],
    optionsEn: ['Respecting others despite differences', 'Mocking differences', 'Refusing to listen to others'],
    visualStepsAr: ['الصدق', 'التسامح', 'الكرم', 'تعاون واحترام'],
    visualStepsEn: ['Honesty', 'Tolerance', 'Generosity', 'Cooperation and respect']
  },
  {
    unit: 6, page: 46, titleAr: 'عاداتنا وتقاليدنا', titleEn: 'Our Customs and Traditions',
    focusAr: 'يميز بين العادات اليومية والتقاليد المرتبطة بالمناسبات، ويقدر تنوع التراث ويختار الممارسات التي تعزز السلامة والاحترام.',
    focusEn: 'Distinguish everyday customs from traditions associated with occasions, value cultural heritage, and choose practices that support safety and respect.',
    questionAr: 'أي ممارسة تساعد على حفظ التراث بصورة إيجابية؟', questionEn: 'Which practice helps preserve heritage positively?',
    optionsAr: ['التعرف إليه واحترام تنوعه', 'السخرية من ثقافات الآخرين', 'اتباع ممارسات غير آمنة'],
    optionsEn: ['Learning about it and respecting its diversity', 'Mocking other cultures', 'Following unsafe practices'],
    visualStepsAr: ['حياة يومية', 'عادات', 'مناسبات وتقاليد', 'تراث يحترم التنوع'],
    visualStepsEn: ['Everyday life', 'Customs', 'Occasions and traditions', 'Heritage that respects diversity']
  }
];

export const SUDAN_PRIMARY_HISTORY_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_HISTORY_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-history-g3-${order}`;
  const unit = SUDAN_PRIMARY_HISTORY_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التاريخ والتربية الوطنية — الصف الثالث الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 3 History and National Education — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'HISTORY',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثالث من مرحلة التعليم الأساسي',
    gradeLevelNameEn: 'Grade 3 Basic Level',
    termAr: 'التاريخ والتربية الوطنية — الصف الثالث',
    termEn: 'Grade 3 History and National Education',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل موضوع «${lesson.titleAr}»، ثم اذكر فكرة أو مثالًا تعرفه عنه.`,
    warmupHookEn: `Think about “${lesson.titleEn},” then share an idea or example you already know.`,
    learningOutcomesAr: [lesson.focusAr, `يشرح فكرة أساسية من موضوع «${lesson.titleAr}» بمثال مناسب.`],
    learningOutcomesEn: [lesson.focusEn, `Explain one key idea from “${lesson.titleEn}” with a suitable example.`],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: تتبع عناصر المخطط، ثم صل بينها بفكرة تشرح موضوع الدرس.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Follow the diagram, then connect its parts to explain the lesson topic.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual Guide: ${lesson.titleEn}`,
        captionAr: `مخطط تعليمي مبسط لموضوع «${lesson.titleAr}».`,
        captionEn: `A simple educational diagram for “${lesson.titleEn}.”`,
        diagramType: 'primary_history_g3',
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
    topicEn: `p. ${lesson.page}`
  };
});
