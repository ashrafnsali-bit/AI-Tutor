import type { EducationTrack, EducationType, Lecture, Subject } from '../types';

type UnitPlan = {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  outcomesAr: string[];
  outcomesEn: string[];
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  vocabulary: [string, string][];
};

const englishUnits: UnitPlan[] = [
  {
    titleAr: 'الحياة في عالم رقمي',
    titleEn: 'Life in a Digital World',
    focusAr: 'وصف العادات اليومية في استخدام التقنية، والتمييز بين الاستخدام النافع والاستخدام المتوازن.',
    focusEn: 'Describe everyday technology habits and distinguish useful technology from balanced use.',
    outcomesAr: ['وصف روتين يومي باستخدام أفعال المضارع', 'استخدام مفردات الأجهزة والأنشطة الرقمية في سياق', 'اقتراح عادة آمنة ومتوازنة عند استخدام التقنية'],
    outcomesEn: ['Describe a daily routine using the present simple', 'Use vocabulary for devices and digital activities in context', 'Suggest a safe and balanced technology habit'],
    activityAr: 'اكتب روتينًا رقميًا من أربع جمل، ثم أضف نصيحة واحدة لحماية وقت الشاشة.',
    activityEn: 'Write a four-sentence digital routine and add one tip for managing screen time.',
    questionAr: 'أي جملة تصف عادة يومية بصورة صحيحة؟',
    questionEn: 'Which sentence correctly describes a daily habit?',
    optionsAr: ['I check my messages every morning.', 'I checking messages every morning.', 'I checks messages every morning.'],
    optionsEn: ['I check my messages every morning.', 'I checking messages every morning.', 'I checks messages every morning.'],
    correctIndex: 0,
    vocabulary: [['device', 'جهاز'], ['screen time', 'وقت استخدام الشاشة'], ['routine', 'روتين']]
  },
  {
    titleAr: 'التعلم لنتعلم',
    titleEn: 'Learning to Learn',
    focusAr: 'اختيار استراتيجيات للتعلم وتنظيم المذاكرة، وطلب المساعدة وشرح ما يساعد على التعلم.',
    focusEn: 'Choose learning strategies, organize study time, ask for help, and explain what supports learning.',
    outcomesAr: ['تحديد استراتيجية مناسبة لمهمة دراسية', 'تنظيم خطوات المذاكرة في خطة بسيطة', 'التعبير عن نصيحة أو حاجة دراسية بوضوح'],
    outcomesEn: ['Choose a strategy for a study task', 'Organize study steps in a simple plan', 'Clearly express a study need or piece of advice'],
    activityAr: 'أنشئ خطة مذاكرة قصيرة لمهمة واحدة، وبيّن كيف ستراجع ما تعلمته.',
    activityEn: 'Create a short study plan for one task and explain how you will review it.',
    questionAr: 'ما الخطوة التي تساعد على تذكر مفردات جديدة؟',
    questionEn: 'Which step can help you remember new vocabulary?',
    optionsAr: ['مراجعتها واستخدامها في جمل', 'قراءتها مرة واحدة دون تطبيق', 'تجاهل الكلمات غير المألوفة'],
    optionsEn: ['Review them and use them in sentences', 'Read them once without practice', 'Ignore unfamiliar words'],
    correctIndex: 0,
    vocabulary: [['strategy', 'استراتيجية'], ['review', 'مراجعة'], ['goal', 'هدف']]
  },
  {
    titleAr: 'القدوات',
    titleEn: 'Role Models',
    focusAr: 'التحدث عن شخصية ملهمة وصفاتها وإنجازاتها، وربط القدوة بالسلوك الإيجابي والعمل.',
    focusEn: 'Talk about an inspiring person, their qualities and achievements, and connect role models with positive action.',
    outcomesAr: ['تقديم معلومات أساسية عن شخصية', 'استخدام صفات مناسبة لوصف السلوك والإنجاز', 'دعم الرأي بمثال ذي صلة'],
    outcomesEn: ['Present basic information about a person', 'Use suitable adjectives to describe actions and achievements', 'Support an opinion with a relevant example'],
    activityAr: 'اختر قدوة واكتب ثلاث جمل عن صفة فيها، وإنجاز، وما يمكن تعلمه منها.',
    activityEn: 'Choose a role model and write three sentences about a quality, an achievement, and a lesson to learn.',
    questionAr: 'أي إجابة تذكر إنجازًا واضحًا؟',
    questionEn: 'Which response gives a clear example of an achievement?',
    optionsAr: ['She organized a reading club for younger students.', 'She is nice.', 'I like her very much.'],
    optionsEn: ['She organized a reading club for younger students.', 'She is nice.', 'I like her very much.'],
    correctIndex: 0,
    vocabulary: [['role model', 'قدوة'], ['achievement', 'إنجاز'], ['determined', 'مصمم']]
  },
  {
    titleAr: 'اختيارات ذكية',
    titleEn: 'Smart Choices',
    focusAr: 'موازنة البدائل والنتائج قبل اتخاذ قرار، والتعبير عن الرأي واحترام وجهات النظر.',
    focusEn: 'Compare options and consequences before deciding, while expressing opinions and respecting other viewpoints.',
    outcomesAr: ['تحديد البدائل في موقف يومي', 'شرح سبب اختيار معين', 'المشاركة في نقاش باحترام'],
    outcomesEn: ['Identify options in an everyday situation', 'Explain a reason for a choice', 'Take part in a discussion respectfully'],
    activityAr: 'قارن بين خيارين لموقف دراسي، واكتب سببًا ونتيجة متوقعة لكل خيار.',
    activityEn: 'Compare two choices in a school situation and give one reason and likely result for each.',
    questionAr: 'أي عبارة تقدم سببًا واضحًا للاختيار؟',
    questionEn: 'Which sentence gives a clear reason for a choice?',
    optionsAr: ['I chose the bus because it is safer in bad weather.', 'I chose it. That is all.', 'Maybe anything is fine.'],
    optionsEn: ['I chose the bus because it is safer in bad weather.', 'I chose it. That is all.', 'Maybe anything is fine.'],
    correctIndex: 0,
    vocabulary: [['choice', 'اختيار'], ['consequence', 'نتيجة'], ['responsibility', 'مسؤولية']]
  },
  {
    titleAr: 'أحلام المستقبل',
    titleEn: 'Future Dreams',
    focusAr: 'التعبير عن الطموحات والخطط المستقبلية، ووصف المهارات والخطوات اللازمة لتحقيق هدف.',
    focusEn: 'Express future ambitions and plans and describe the skills and steps needed to reach a goal.',
    outcomesAr: ['التحدث عن هدف شخصي أو مهني', 'ترتيب خطوات عملية لتحقيق الهدف', 'استخدام لغة مناسبة للتعبير عن المستقبل'],
    outcomesEn: ['Talk about a personal or career goal', 'Sequence practical steps toward a goal', 'Use suitable language to discuss the future'],
    activityAr: 'ارسم مسارًا من هدف إلى ثلاث خطوات واقعية، ثم اعرضه على زميل.',
    activityEn: 'Map a goal to three realistic steps and present the plan to a classmate.',
    questionAr: 'أي خطة تربط الطموح بخطوة قابلة للتنفيذ؟',
    questionEn: 'Which plan connects an ambition with an actionable step?',
    optionsAr: ['I will practise coding for twenty minutes three times a week.', 'I want success someday.', 'I will wait until I feel ready.'],
    optionsEn: ['I will practise coding for twenty minutes three times a week.', 'I want success someday.', 'I will wait until I feel ready.'],
    correctIndex: 0,
    vocabulary: [['ambition', 'طموح'], ['skill', 'مهارة'], ['plan', 'خطة']]
  },
  {
    titleAr: 'مواطنون عالميون',
    titleEn: 'Global Citizens',
    focusAr: 'فهم المواطنة والمسؤولية المشتركة، والتحدث عن التعاون واحترام التنوع وخدمة المجتمع.',
    focusEn: 'Explore citizenship and shared responsibility, discussing cooperation, respect for diversity, and community service.',
    outcomesAr: ['تحديد سلوك يعزز المواطنة المسؤولة', 'اقتراح عمل تعاوني يخدم المجتمع', 'تبادل الرأي حول التنوع والاحترام'],
    outcomesEn: ['Identify a behavior that supports responsible citizenship', 'Suggest cooperative community action', 'Exchange views about diversity and respect'],
    activityAr: 'صمم مبادرة صفية بسيطة لتحسين مكان مشترك وحدد دور كل مشارك.',
    activityEn: 'Design a simple class initiative to improve a shared space and assign each participant a role.',
    questionAr: 'أي فعل يعبر عن مسؤولية تجاه المجتمع؟',
    questionEn: 'Which action shows responsibility toward a community?',
    optionsAr: ['التعاون في إبقاء المكان العام نظيفًا', 'ترك المخلفات للآخرين', 'منع الآخرين من المشاركة'],
    optionsEn: ['Working together to keep a public place clean', 'Leaving litter for others', 'Preventing others from taking part'],
    correctIndex: 0,
    vocabulary: [['citizen', 'مواطن'], ['community', 'مجتمع'], ['respect', 'احترام']]
  }
];

const frenchUnits: UnitPlan[] = [
  {
    titleAr: 'العطلات والسفر',
    titleEn: 'Vacances et voyages',
    focusAr: 'التحدث عن العطلة والوجهات والأنشطة، ووصف تجربة سفر بجمل بسيطة مترابطة.',
    focusEn: 'Talk about holidays, destinations, and activities, and describe a trip in connected simple sentences.',
    outcomesAr: ['ذكر وجهة ونشاط في العطلة', 'طرح سؤال والإجابة عنه حول السفر', 'ترتيب أحداث تجربة قصيرة'],
    outcomesEn: ['Name a holiday destination and activity', 'Ask and answer a question about travel', 'Sequence events in a short account'],
    activityAr: 'خطط لرحلة خيالية من يومين: اختر وجهة ونشاطين ووسيلة انتقال.',
    activityEn: 'Plan an imaginary two-day trip by choosing a destination, two activities, and transport.',
    questionAr: 'أي عبارة تسأل عن وجهة العطلة؟',
    questionEn: 'Which phrase asks about a holiday destination?',
    optionsAr: ['Où vas-tu en vacances ?', 'Quelle heure est-il ?', 'Combien de livres as-tu ?'],
    optionsEn: ['Où vas-tu en vacances ?', 'Quelle heure est-il ?', 'Combien de livres as-tu ?'],
    correctIndex: 0,
    vocabulary: [['les vacances', 'العطلة'], ['voyager', 'يسافر'], ['la destination', 'الوجهة']]
  },
  {
    titleAr: 'الرياضة',
    titleEn: 'Le sport',
    focusAr: 'تسمية الأنشطة الرياضية والتعبير عن التفضيل والعادات والمشاركة في حوار عن الصحة والنشاط.',
    focusEn: 'Name sports, express preferences and habits, and discuss health and activity.',
    outcomesAr: ['ذكر رياضة مفضلة وسبب تفضيلها', 'السؤال عن نشاط رياضي والإجابة', 'استخدام أفعال شائعة لوصف الممارسة'],
    outcomesEn: ['Name a preferred sport and give a reason', 'Ask and answer about a sport', 'Use common verbs to describe participation'],
    activityAr: 'أنشئ بطاقة تعريف برياضة تتضمن اسمها ومكان ممارستها وفائدة واحدة.',
    activityEn: 'Create a fact card for a sport with its name, where it is played, and one benefit.',
    questionAr: 'أي سؤال يسأل عن الرياضة المفضلة؟',
    questionEn: 'Which question asks about a favourite sport?',
    optionsAr: ['Quel sport préfères-tu ?', 'Où habites-tu ?', 'Quel âge a ton frère ?'],
    optionsEn: ['Quel sport préfères-tu ?', 'Où habites-tu ?', 'Quel âge a ton frère ?'],
    correctIndex: 0,
    vocabulary: [['le sport', 'الرياضة'], ['jouer', 'يلعب'], ['préférer', 'يفضل']]
  },
  {
    titleAr: 'العروض والمشاهد',
    titleEn: 'Spectacles et sorties',
    focusAr: 'الحديث عن عرض أو نشاط ثقافي، وإبداء الرأي وتحديد موعد أو اقتراح خطة مع الآخرين.',
    focusEn: 'Talk about a show or cultural activity, give an opinion, and suggest a time or plan.',
    outcomesAr: ['وصف نشاط ثقافي مفضل', 'قبول اقتراح أو الاعتذار عنه بلباقة', 'تحديد وقت ومكان للقاء'],
    outcomesEn: ['Describe a preferred cultural activity', 'Politely accept or decline a suggestion', 'Agree on a meeting time and place'],
    activityAr: 'اكتب دعوة قصيرة لزميل لحضور نشاط ثقافي، مع ذكر الموعد والمكان.',
    activityEn: 'Write a short invitation to a cultural activity, including the time and place.',
    questionAr: 'أي عبارة تقدم اقتراحًا لحضور عرض؟',
    questionEn: 'Which phrase suggests going to a show?',
    optionsAr: ['On va au spectacle samedi ?', 'Je ferme la fenêtre.', 'Il fait froid en hiver.'],
    optionsEn: ['On va au spectacle samedi ?', 'Je ferme la fenêtre.', 'Il fait froid en hiver.'],
    correctIndex: 0,
    vocabulary: [['le spectacle', 'العرض'], ['la sortie', 'النزهة'], ['inviter', 'يدعو']]
  },
  {
    titleAr: 'الطعام والتغذية',
    titleEn: 'L’alimentation',
    focusAr: 'تسمية الأطعمة والوجبات والتعبير عن الاختيارات الغذائية وطلب شيء بأدب.',
    focusEn: 'Name foods and meals, express food choices, and make a polite request.',
    outcomesAr: ['تصنيف أطعمة ضمن وجبة', 'التعبير عن التفضيل وعدم التفضيل', 'صياغة طلب مهذب في متجر أو مقهى'],
    outcomesEn: ['Group foods into a meal', 'Express likes and dislikes', 'Make a polite request in a shop or café'],
    activityAr: 'كوّن قائمة وجبة متوازنة واكتب جملة فرنسية لطلب أحد عناصرها.',
    activityEn: 'Create a balanced meal and write a French sentence to order one item.',
    questionAr: 'أي عبارة طلب مهذب؟',
    questionEn: 'Which phrase is a polite request?',
    optionsAr: ['Je voudrais un jus, s’il vous plaît.', 'Donne-moi ça !', 'Tu es une table.'],
    optionsEn: ['Je voudrais un jus, s’il vous plaît.', 'Donne-moi ça !', 'Tu es une table.'],
    correctIndex: 0,
    vocabulary: [['un repas', 'وجبة'], ['les légumes', 'الخضروات'], ['je voudrais', 'أودّ']]
  },
  {
    titleAr: 'الملابس والموضة',
    titleEn: 'La mode et les vêtements',
    focusAr: 'وصف الملابس والألوان والاختيارات الشخصية، ومقارنة مظهرين بلغة محترمة.',
    focusEn: 'Describe clothes, colours, and personal choices, and compare two styles respectfully.',
    outcomesAr: ['تسمية قطع ملابس وألوان', 'وصف اختيار مناسب لمناسبة', 'التعبير عن الرأي والتفضيل'],
    outcomesEn: ['Name clothing items and colours', 'Describe an outfit suitable for an occasion', 'Express an opinion and preference'],
    activityAr: 'صمم وصفًا لفظيًا لملابس مناسبة لمناسبة مدرسية، مع تبرير اختيار اللون.',
    activityEn: 'Describe an outfit for a school occasion and explain the colour choice.',
    questionAr: 'أي سؤال يسأل عن لون قطعة ملابس؟',
    questionEn: 'Which question asks about the colour of a clothing item?',
    optionsAr: ['De quelle couleur est ta veste ?', 'Où est la gare ?', 'À quelle heure commence le film ?'],
    optionsEn: ['De quelle couleur est ta veste ?', 'Où est la gare ?', 'À quelle heure commence le film ?'],
    correctIndex: 0,
    vocabulary: [['un vêtement', 'قطعة ملابس'], ['la couleur', 'اللون'], ['porter', 'يرتدي']]
  },
  {
    titleAr: 'السكن والمسكن',
    titleEn: 'Le logement',
    focusAr: 'وصف المنزل والغرف وموقع الأشياء، ومقارنة احتياجات السكن والتعبير عن مكان الإقامة.',
    focusEn: 'Describe a home and its rooms, locate objects, compare housing needs, and say where one lives.',
    outcomesAr: ['تسمية غرف وأجزاء من المنزل', 'وصف موقع غرض مألوف', 'تقديم وصف مختصر للمسكن'],
    outcomesEn: ['Name rooms and parts of a home', 'Describe where a familiar object is', 'Give a brief description of a home'],
    activityAr: 'ارسم مخطط غرفة بسيطة واكتب ثلاث جمل تصف محتوياتها ومواقعها.',
    activityEn: 'Sketch a simple room and write three sentences describing its contents and locations.',
    questionAr: 'أي عبارة تصف مكان السكن؟',
    questionEn: 'Which phrase describes where someone lives?',
    optionsAr: ['J’habite dans un appartement.', 'Je regarde un spectacle.', 'Nous jouons au tennis.'],
    optionsEn: ['J’habite dans un appartement.', 'Je regarde un spectacle.', 'Nous jouons au tennis.'],
    correctIndex: 0,
    vocabulary: [['un logement', 'مسكن'], ['une pièce', 'غرفة'], ['habiter', 'يسكن']]
  }
];

const frenchTexts: Pick<UnitPlan, 'focusEn' | 'outcomesEn' | 'activityEn' | 'questionEn'>[] = [
  {
    focusEn: 'Parler des vacances, des destinations et des activités, puis raconter un voyage avec des phrases simples et liées.',
    outcomesEn: ['Nommer une destination et une activité de vacances', 'Poser une question sur un voyage et y répondre', 'Mettre en ordre les événements d’un court récit'],
    activityEn: 'Prépare un voyage imaginaire de deux jours : choisis une destination, deux activités et un moyen de transport.',
    questionEn: 'Quelle phrase demande la destination des vacances ?'
  },
  {
    focusEn: 'Nommer des sports, exprimer ses préférences et ses habitudes, et échanger sur la santé et l’activité physique.',
    outcomesEn: ['Nommer un sport préféré et donner une raison', 'Poser une question sur un sport et y répondre', 'Utiliser des verbes courants pour décrire une pratique'],
    activityEn: 'Crée une fiche sur un sport : son nom, où on le pratique et un avantage.',
    questionEn: 'Quelle question demande le sport préféré ?'
  },
  {
    focusEn: 'Parler d’un spectacle ou d’une activité culturelle, donner son avis, fixer un rendez-vous ou proposer un projet.',
    outcomesEn: ['Décrire une activité culturelle préférée', 'Accepter ou refuser poliment une proposition', 'Fixer l’heure et le lieu d’un rendez-vous'],
    activityEn: 'Écris une courte invitation à une activité culturelle avec la date et le lieu.',
    questionEn: 'Quelle phrase propose d’aller voir un spectacle ?'
  },
  {
    focusEn: 'Nommer les aliments et les repas, exprimer ses choix alimentaires et faire une demande polie.',
    outcomesEn: ['Classer des aliments dans un repas', 'Exprimer ce qu’on aime et ce qu’on n’aime pas', 'Faire une demande polie dans un magasin ou un café'],
    activityEn: 'Compose un repas équilibré et écris une phrase pour commander un des éléments.',
    questionEn: 'Quelle phrase est une demande polie ?'
  },
  {
    focusEn: 'Décrire des vêtements, des couleurs et des choix personnels, et comparer deux styles avec respect.',
    outcomesEn: ['Nommer des vêtements et des couleurs', 'Décrire une tenue adaptée à une occasion', 'Exprimer une opinion et une préférence'],
    activityEn: 'Décris une tenue pour une occasion scolaire et explique le choix de la couleur.',
    questionEn: 'Quelle question demande la couleur d’un vêtement ?'
  },
  {
    focusEn: 'Décrire une maison et ses pièces, situer des objets, comparer des besoins de logement et dire où l’on habite.',
    outcomesEn: ['Nommer les pièces et les parties d’une maison', 'Situer un objet familier', 'Faire une courte description d’un logement'],
    activityEn: 'Dessine le plan d’une pièce et écris trois phrases pour décrire son contenu et la place des objets.',
    questionEn: 'Quelle phrase indique où quelqu’un habite ?'
  }
];

type LanguageLabels = {
  unit: string; activity: string; vocab: string; unitActivity: string; check: string;
  concept: string; explanationCheck: string; explanationAnswer: string;
  subtitleAr: string; subtitleEn: string; topicAr: string; topicEn: string;
  definition: (title: string) => string;
};

const LANGUAGE_LABELS: Record<string, LanguageLabels> = {
  ENGLISH: {
    unit: 'Unit', activity: 'Practice', vocab: 'Vocabulary and Communication', unitActivity: 'Unit Activity',
    check: 'Unit Check', concept: 'Unit vocabulary and communication',
    explanationCheck: 'Check the meaning and context before choosing.',
    explanationAnswer: 'The correct answer follows the unit objective and context.',
    subtitleAr: 'اللغة الإنجليزية — الصف الأول الثانوي', subtitleEn: 'English Second Language — Secondary 1',
    topicAr: 'مقرر اللغة الإنجليزية (لغة ثانية)', topicEn: 'English Second Language Course',
    definition: title => `A key word for the topic “${title}.”`
  },
  FRENCH: {
    unit: 'Unité', activity: 'Activité', vocab: 'Vocabulaire et communication', unitActivity: 'Activité de l’unité',
    check: 'Évaluation de l’unité', concept: 'Vocabulaire et communication de l’unité',
    explanationCheck: 'Vérifie le sens et le contexte avant de choisir.',
    explanationAnswer: 'La bonne réponse correspond à l’objectif et au contexte de l’unité.',
    subtitleAr: 'الفرنسية لغة أولى — الصف الأول الثانوي', subtitleEn: 'Français langue 1 — 1re secondaire',
    topicAr: 'مسار الفرنسية لغة أولى — دعم مدرسي', topicEn: 'Français langue 1 — soutien scolaire',
    definition: title => `Mot essentiel du thème « ${title} ».`
  },
  GERMAN: {
    unit: 'Einheit', activity: 'Aufgabe', vocab: 'Wortschatz und Kommunikation', unitActivity: 'Aufgabe der Einheit',
    check: 'Einheitstest', concept: 'Wortschatz und Kommunikation der Einheit',
    explanationCheck: 'Prüfe Bedeutung und Kontext, bevor du antwortest.',
    explanationAnswer: 'Die richtige Antwort entspricht dem Ziel und dem Kontext der Einheit.',
    subtitleAr: 'الألمانية لغة ثانية — الصف الأول الثانوي', subtitleEn: 'Deutsch als zweite Fremdsprache — 1. Sekundarstufe',
    topicAr: 'الألمانية المستوى A1 — دعم مدرسي', topicEn: 'Deutsch A1 — schulische Unterstützung',
    definition: title => `Schlüsselwort zum Thema „${title}“.`
  },
  ITALIAN: {
    unit: 'Unità', activity: 'Attività', vocab: 'Lessico e comunicazione', unitActivity: 'Attività dell’unità',
    check: 'Verifica dell’unità', concept: 'Lessico e comunicazione dell’unità',
    explanationCheck: 'Verifica il significato e il contesto prima di scegliere.',
    explanationAnswer: 'La risposta corretta rispecchia l’obiettivo e il contesto dell’unità.',
    subtitleAr: 'الإيطالية لغة ثانية — الصف الأول الثانوي', subtitleEn: 'Italiano seconda lingua straniera — 1ª secondaria',
    topicAr: 'الإيطالية المستوى A1 — دعم مدرسي', topicEn: 'Italiano A1 — supporto scolastico',
    definition: title => `Parola chiave del tema «${title}».`
  }
};

type TargetText = {
  title: string; focus: string; outcomes: string[]; activity: string; question: string;
  options: string[]; vocabulary: string[];
};

const germanTexts: TargetText[] = [
  { title: 'Ferien und Reisen', focus: 'Über Ferien, Reiseziele und Aktivitäten sprechen und eine Reise mit einfachen, verbundenen Sätzen beschreiben.', outcomes: ['Ein Reiseziel und eine Ferienaktivität nennen', 'Eine Frage zur Reise stellen und beantworten', 'Die Ereignisse einer kurzen Reise ordnen'], activity: 'Plane eine erfundene Reise von zwei Tagen: Wähle ein Reiseziel, zwei Aktivitäten und ein Verkehrsmittel.', question: 'Welche Frage fragt nach dem Reiseziel?', options: ['Wohin fährst du in den Ferien?', 'Wie spät ist es?', 'Wie viele Bücher hast du?'], vocabulary: ['die Ferien', 'reisen', 'das Reiseziel'] },
  { title: 'Sport', focus: 'Sportarten nennen, Vorlieben und Gewohnheiten ausdrücken und über Gesundheit und Bewegung sprechen.', outcomes: ['Eine Lieblingssportart nennen und begründen', 'Eine Frage zum Sport stellen und beantworten', 'Häufige Verben für das Training verwenden'], activity: 'Erstelle eine Karte zu einer Sportart mit Name, Ort und einem Vorteil.', question: 'Welche Frage fragt nach dem Lieblingssport?', options: ['Welchen Sport magst du am liebsten?', 'Wo wohnst du?', 'Wie alt ist dein Bruder?'], vocabulary: ['der Sport', 'spielen', 'trainieren'] },
  { title: 'Veranstaltungen und Ausflüge', focus: 'Über eine Veranstaltung oder kulturelle Aktivität sprechen, eine Meinung äußern und einen Termin vorschlagen.', outcomes: ['Eine bevorzugte kulturelle Aktivität beschreiben', 'Einen Vorschlag höflich annehmen oder ablehnen', 'Zeit und Ort für ein Treffen vereinbaren'], activity: 'Schreibe eine kurze Einladung zu einer kulturellen Aktivität mit Datum und Ort.', question: 'Welcher Satz schlägt einen Theaterbesuch vor?', options: ['Gehen wir am Samstag ins Theater?', 'Ich schließe das Fenster.', 'Im Winter ist es kalt.'], vocabulary: ['die Veranstaltung', 'der Ausflug', 'einladen'] },
  { title: 'Essen und Trinken', focus: 'Lebensmittel und Mahlzeiten nennen, Essenswünsche äußern und höflich bestellen.', outcomes: ['Lebensmittel einer Mahlzeit zuordnen', 'Sagen, was man mag und was nicht', 'Höflich im Geschäft oder im Café bestellen'], activity: 'Stelle eine ausgewogene Mahlzeit zusammen und schreibe einen Satz, um ein Gericht zu bestellen.', question: 'Welcher Satz ist eine höfliche Bitte?', options: ['Ich möchte bitte einen Saft.', 'Gib mir das!', 'Du bist ein Tisch.'], vocabulary: ['die Mahlzeit', 'das Gemüse', 'ich möchte'] },
  { title: 'Kleidung und Mode', focus: 'Kleidung und Farben beschreiben, persönliche Vorlieben äußern und zwei Stile respektvoll vergleichen.', outcomes: ['Kleidungsstücke und Farben nennen', 'Ein passendes Outfit für einen Anlass beschreiben', 'Meinung und Vorliebe ausdrücken'], activity: 'Beschreibe ein Outfit für einen Schulanlass und erkläre die Wahl der Farbe.', question: 'Welche Frage fragt nach der Farbe eines Kleidungsstücks?', options: ['Welche Farbe hat deine Jacke?', 'Wo ist der Bahnhof?', 'Wann beginnt der Film?'], vocabulary: ['die Kleidung', 'die Farbe', 'tragen'] },
  { title: 'Wohnen', focus: 'Ein Haus und seine Zimmer beschreiben, Gegenstände verorten und sagen, wo man wohnt.', outcomes: ['Zimmer und Teile eines Hauses benennen', 'Sagen, wo ein vertrauter Gegenstand ist', 'Die Wohnung kurz beschreiben'], activity: 'Zeichne den Grundriss eines Zimmers und schreibe drei Sätze zu Inhalt und Lage.', question: 'Welcher Satz sagt, wo jemand wohnt?', options: ['Ich wohne in einer Wohnung.', 'Ich sehe eine Show.', 'Wir spielen Tennis.'], vocabulary: ['die Wohnung', 'das Zimmer', 'wohnen'] }
];

const italianTexts: TargetText[] = [
  { title: 'Vacanze e viaggi', focus: 'Parlare di vacanze, destinazioni e attività e descrivere un viaggio con frasi semplici e collegate.', outcomes: ['Nominare una destinazione e un’attività di vacanza', 'Fare una domanda su un viaggio e rispondere', 'Mettere in ordine gli eventi di un breve racconto'], activity: 'Pianifica un viaggio immaginario di due giorni: scegli una destinazione, due attività e un mezzo di trasporto.', question: 'Quale frase chiede la destinazione delle vacanze?', options: ['Dove vai in vacanza?', 'Che ore sono?', 'Quanti libri hai?'], vocabulary: ['le vacanze', 'viaggiare', 'la destinazione'] },
  { title: 'Lo sport', focus: 'Nominare gli sport, esprimere preferenze e abitudini e parlare di salute e attività fisica.', outcomes: ['Nominare uno sport preferito e dare un motivo', 'Fare una domanda su uno sport e rispondere', 'Usare verbi comuni per descrivere la pratica'], activity: 'Crea una scheda su uno sport con il nome, il luogo e un vantaggio.', question: 'Quale domanda chiede lo sport preferito?', options: ['Qual è il tuo sport preferito?', 'Dove abiti?', 'Quanti anni ha tuo fratello?'], vocabulary: ['lo sport', 'giocare', 'allenarsi'] },
  { title: 'Spettacoli e uscite', focus: 'Parlare di uno spettacolo o di un’attività culturale, dare un’opinione e proporre un appuntamento.', outcomes: ['Descrivere un’attività culturale preferita', 'Accettare o rifiutare con gentilezza una proposta', 'Fissare ora e luogo di un incontro'], activity: 'Scrivi un breve invito a un’attività culturale con data e luogo.', question: 'Quale frase propone di andare a teatro?', options: ['Andiamo a teatro sabato?', 'Chiudo la finestra.', 'In inverno fa freddo.'], vocabulary: ['lo spettacolo', 'l’uscita', 'invitare'] },
  { title: 'L’alimentazione', focus: 'Nominare cibi e pasti, esprimere le scelte alimentari e fare una richiesta cortese.', outcomes: ['Classificare i cibi in un pasto', 'Dire che cosa piace e che cosa non piace', 'Fare una richiesta cortese in un negozio o in un bar'], activity: 'Componi un pasto equilibrato e scrivi una frase per ordinare uno degli elementi.', question: 'Quale frase è una richiesta cortese?', options: ['Vorrei un succo, per favore.', 'Dammi quello!', 'Tu sei un tavolo.'], vocabulary: ['il pasto', 'la verdura', 'vorrei'] },
  { title: 'La moda e i vestiti', focus: 'Descrivere vestiti, colori e scelte personali e confrontare due stili con rispetto.', outcomes: ['Nominare capi di abbigliamento e colori', 'Descrivere un abbigliamento adatto a un’occasione', 'Esprimere un’opinione e una preferenza'], activity: 'Descrivi un abbigliamento per un’occasione scolastica e spiega la scelta del colore.', question: 'Quale domanda chiede il colore di un capo?', options: ['Di che colore è la tua giacca?', 'Dov’è la stazione?', 'A che ora inizia il film?'], vocabulary: ['il vestito', 'il colore', 'indossare'] },
  { title: 'La casa', focus: 'Descrivere una casa e le sue stanze, collocare gli oggetti e dire dove si abita.', outcomes: ['Nominare le stanze e le parti di una casa', 'Dire dove si trova un oggetto familiare', 'Fare una breve descrizione dell’abitazione'], activity: 'Disegna la pianta di una stanza e scrivi tre frasi su contenuto e posizione.', question: 'Quale frase dice dove abita qualcuno?', options: ['Abito in un appartamento.', 'Guardo uno spettacolo.', 'Giochiamo a tennis.'], vocabulary: ['l’appartamento', 'la stanza', 'abitare'] }
];

function buildTargetUnits(texts: TargetText[]): UnitPlan[] {
  return frenchUnits.map((base, index) => {
    const text = texts[index];
    return {
      ...base,
      titleEn: text.title,
      focusEn: text.focus,
      outcomesEn: text.outcomes,
      activityEn: text.activity,
      questionEn: text.question,
      optionsAr: text.options,
      optionsEn: text.options,
      vocabulary: text.vocabulary.map((term, termIndex) => [term, base.vocabulary[termIndex][1]] as [string, string])
    };
  });
}

function createLectures(
  plans: UnitPlan[],
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack,
  idPrefix: string,
  termAr: string,
  termEn: string
): Lecture[] {
  const t = LANGUAGE_LABELS[subject] ?? LANGUAGE_LABELS.ENGLISH;
  return plans.map((unit, index) => {
    const order = index + 1;
    const id = `${idPrefix}-${order}`;
    const vocabulary = unit.vocabulary.map(([term, translation]) => ({
      termAr: `${term} — ${translation}`,
      termEn: term,
      definitionAr: `مفردة أساسية في موضوع «${unit.titleAr}».`,
      definitionEn: t.definition(unit.titleEn)
    }));

    return {
      id,
      order,
      titleAr: unit.titleAr,
      titleEn: unit.titleEn,
      subtitleAr: t.subtitleAr,
      subtitleEn: t.subtitleEn,
      descriptionAr: unit.focusAr,
      descriptionEn: unit.focusEn,
      topicAr: t.topicAr,
      topicEn: t.topicEn,
      durationMinutes: 35,
      isLocked: false,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'EG',
      subject,
      gradeLevel: 'G10',
      educationType,
      educationTrack: track,
      gradeLevelNameAr: 'الصف الأول الثانوي',
      gradeLevelNameEn: 'Secondary 1',
      termAr,
      termEn,
      unitTitleAr: `الوحدة ${['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة'][index]}: ${unit.titleAr}`,
      unitTitleEn: `${t.unit} ${order}: ${unit.titleEn}`,
      lessonNumberAr: `الوحدة ${order}`,
            lessonNumberEn: `${t.unit} ${order}`,
      learningOutcomesAr: [...unit.outcomesAr],
      learningOutcomesEn: [...unit.outcomesEn],
      vocabulary,
      keyConceptsAr: [unit.titleAr, ...unit.outcomesAr],
      keyConceptsEn: [unit.titleEn, ...unit.outcomesEn],
      summaryAr: unit.focusAr,
      summaryEn: unit.focusEn,
      mainContentAr: `${unit.focusAr}\n\nنشاط تطبيقي: ${unit.activityAr}`,
      mainContentEn: `${unit.focusEn}\n\n${t.activity} : ${unit.activityEn}`,
      sections: [{
        titleAr: 'المفردات والتواصل',
        titleEn: t.vocab,
        contentAr: `${unit.focusAr}\n\n${unit.outcomesAr.map((outcome, outcomeIndex) => `${outcomeIndex + 1}. ${outcome}`).join('\n')}`,
        contentEn: `${unit.focusEn}\n\n${unit.outcomesEn.map((outcome, outcomeIndex) => `${outcomeIndex + 1}. ${outcome}`).join('\n')}`
      }, {
        titleAr: 'نشاط الوحدة',
        titleEn: t.unitActivity,
        contentAr: unit.activityAr,
        contentEn: unit.activityEn
      }],
      formativeAssessment: [{
        id: `${id}-check`,
        questionAr: unit.questionAr,
        questionEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: unit.correctIndex,
        explanationAr: 'تحقق من معنى العبارة وسياقها قبل اختيار الإجابة.',
        explanationEn: t.explanationCheck
      }],
      assessment: {
        id: `${id}-assessment`,
        lectureId: id,
        titleAr: `تقويم الوحدة: ${unit.titleAr}`,
        titleEn: `${t.check}: ${unit.titleEn}`,
        passingScore: 80,
        questions: [{
          id: `${id}-q1`,
          textAr: unit.questionAr,
          textEn: unit.questionEn,
          optionsAr: [...unit.optionsAr],
          optionsEn: [...unit.optionsEn],
          correctIndex: unit.correctIndex,
          conceptTestedAr: 'مفردات الوحدة والتواصل',
          conceptTestedEn: t.concept,
          explanationAr: 'تستند الإجابة الصحيحة إلى هدف الوحدة وسياقها.',
          explanationEn: t.explanationAnswer,
          difficulty: 'easy'
        }]
      }
    };
  });
}

export function getEgyptSecondaryEnglishG10Curriculum(
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  if (subject !== 'ENGLISH' || !(['PUBLIC', 'PRIVATE'] as EducationType[]).includes(educationType)) {
    return [];
  }

  return createLectures(
    englishUnits,
    subject,
    educationType,
    track,
    'eg-english-g10',
    'العام الدراسي — كتاب الصف الأول الثانوي',
    'School year — Secondary 1 textbook'
  );
}

export function getEgyptFrenchChampion1G10Curriculum(
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  if (
    subject !== 'FRENCH' ||
    (educationType !== 'PUBLIC' && educationType !== 'PRIVATE')
  ) return [];

  return createLectures(
    frenchUnits.map((unit, index) => ({ ...unit, ...frenchTexts[index] })),
    subject,
    educationType,
    track,
    'eg-french-champion1-g10',
    'مسار دعم مدرسي؛ الكتاب المرفق لا يحدد فصلًا دراسيًا',
    'Cours de soutien ; le livre fourni ne précise pas de semestre'
  );
}

export function getEgyptSecondLanguageG10Curriculum(
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  if (
    (subject !== 'GERMAN' && subject !== 'ITALIAN') ||
    (educationType !== 'PUBLIC' && educationType !== 'PRIVATE')
  ) return [];

  const german = subject === 'GERMAN';
  return createLectures(
    buildTargetUnits(german ? germanTexts : italianTexts),
    subject,
    educationType,
    track,
    german ? 'eg-german-a1-g10' : 'eg-italian-a1-g10',
    'مسار دعم مدرسي؛ غير مطابق لكتاب وزاري موثق',
    german ? 'Schulische Unterstützung; kein verifiziertes Ministeriumsbuch' : 'Supporto scolastico; non è un libro ministeriale verificato'
  );
}
