import type { Lecture, LectureDiagramStep } from '../types';

export const SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-CBM-HL-TRC2-SM1-APHS1.1.pdf';
export const SAUDI_G11_HEALTH_SCIENCE_CHAPTER_COUNT = 14;
export const SAUDI_G11_HEALTH_SCIENCE_LESSON_COUNT = 75;

interface HealthScienceLesson {
  titleAr: string;
  titleEn: string;
  page: number;
}

interface HealthScienceChapter {
  titleAr: string;
  titleEn: string;
  overviewAr: string;
  overviewEn: string;
  reviewPage: number;
  visualSteps: LectureDiagramStep[];
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
  lessons: HealthScienceLesson[];
}

const chapters: HealthScienceChapter[] = [
  {
    titleAr: 'تاريخ الرعاية الصحية والاتجاهات الحديثة فيها',
    titleEn: 'History of Health Care and Modern Trends',
    overviewAr: 'يتناول الفصل تطور الرعاية الصحية واتجاهاتها، وكيف تتغير الخدمات استجابةً لاحتياجات المجتمع والتقدم العلمي.',
    overviewEn: 'This chapter examines the development and changing directions of health care as services respond to community needs and scientific progress.',
    reviewPage: 28,
    visualSteps: [
      { labelAr: 'احتياجات المجتمع', labelEn: 'Community needs' },
      { labelAr: 'تطور المعرفة', labelEn: 'Growth of knowledge' },
      { labelAr: 'تغير الخدمات', labelEn: 'Changing services' },
      { labelAr: 'اتجاهات حديثة', labelEn: 'Modern trends' }
    ],
    questionAr: 'ما الذي يساعد على تفسير تطور الرعاية الصحية واتجاهاتها؟',
    questionEn: 'What helps explain the development and direction of health care?',
    optionsAr: ['ربط تغير الخدمات باحتياجات المجتمع والمعرفة الصحية', 'عزل الخدمات عن حاجات الناس', 'اعتماد الانطباعات دون معلومات', 'اعتبار الخدمات ثابتة لا تتغير'],
    optionsEn: ['Relating changing services to community needs and health knowledge', 'Separating services from people’s needs', 'Relying on impressions without information', 'Assuming services never change'],
    correctIndex: 0,
    explanationAr: 'يتضح تطور الرعاية الصحية عند ربط تغير الخدمات باحتياجات المجتمع وما يستجد من معرفة.',
    explanationEn: 'Health-care development is understood by connecting service changes with community needs and new knowledge.',
    lessons: [
      { titleAr: 'تاريخ الرعاية الصحية', titleEn: 'History of Health Care', page: 19 },
      { titleAr: 'اتجاهات الرعاية الصحية', titleEn: 'Health-Care Trends', page: 20 }
    ]
  },
  {
    titleAr: 'أنظمة الرعاية الصحية',
    titleEn: 'Health-Care Systems',
    overviewAr: 'يعرض الفصل مرافق الرعاية الصحية والجهات المنظمة والممولة لها، ويبين دور الوكالات التطوعية وغير الربحية والتأمين الصحي.',
    overviewEn: 'This chapter introduces health-care facilities and the bodies that govern and fund them, including voluntary, nonprofit, and insurance organizations.',
    reviewPage: 45,
    visualSteps: [
      { labelAr: 'مستفيدو الخدمة', labelEn: 'People served' },
      { labelAr: 'المرافق الصحية', labelEn: 'Health facilities' },
      { labelAr: 'تنظيم وتمويل', labelEn: 'Governance and funding' },
      { labelAr: 'تقديم الرعاية', labelEn: 'Care delivery' }
    ],
    questionAr: 'ما التصور الأنسب لفهم نظام الرعاية الصحية؟',
    questionEn: 'Which approach best supports understanding a health-care system?',
    optionsAr: ['النظر إلى تفاعل المرافق والجهات المنظمة والتمويل والخدمات', 'حصر النظام في مبنى واحد', 'إغفال الجهات المسؤولة عن التنظيم', 'فصل تمويل الرعاية عن إتاحتها'],
    optionsEn: ['Consider how facilities, governing bodies, funding, and services interact', 'Reduce the system to one building', 'Ignore the bodies responsible for governance', 'Separate health-care funding from access'],
    correctIndex: 0,
    explanationAr: 'النظام يتكون من أطراف ومرافق وترتيبات تمويل وتنظيم تتفاعل في تقديم الخدمات.',
    explanationEn: 'A system includes interacting people, facilities, funding, and governance arrangements that support service delivery.',
    lessons: [
      { titleAr: 'مرافق الرعاية الصحية', titleEn: 'Health-Care Facilities', page: 31 },
      { titleAr: 'حوكمة القطاع الصحي ووكلاؤه', titleEn: 'Health-Sector Governance and Agencies', page: 35 },
      { titleAr: 'الوكالات التطوعية أو غير الربحية', titleEn: 'Voluntary or Nonprofit Agencies', page: 36 },
      { titleAr: 'الهيكل التنظيمي', titleEn: 'Organizational Structure', page: 37 },
      { titleAr: 'التأمين الصحي', titleEn: 'Health Insurance', page: 39 },
      { titleAr: 'أثر المشكلات المستجدة على أنظمة التقديم', titleEn: 'How Emerging Challenges Affect Delivery Systems', page: 43 }
    ]
  },
  {
    titleAr: 'المهن في مجال الرعاية الصحية',
    titleEn: 'Health-Care Professions',
    overviewAr: 'يستعرض الفصل مجالات المهن الصحية، ومنها الخدمات العلاجية والتشخيصية والمعلوماتية الصحية وخدمات الدعم والبحث والتطوير.',
    overviewEn: 'This chapter surveys health-care occupations, including treatment, diagnostic, health-information, support, research, and biotechnology roles.',
    reviewPage: 70,
    visualSteps: [
      { labelAr: 'مجال مهني', labelEn: 'Career field' },
      { labelAr: 'دور ومسؤولية', labelEn: 'Role and responsibility' },
      { labelAr: 'مهارات وتأهيل', labelEn: 'Skills and preparation' },
      { labelAr: 'فريق الرعاية', labelEn: 'Care team' }
    ],
    questionAr: 'ما العامل الذي ينبغي مراعاته عند التعرف على مهنة صحية؟',
    questionEn: 'What should be considered when learning about a health profession?',
    optionsAr: ['المهام والتأهيل وحدود الدور المهني', 'المسمى الوظيفي وحده', 'تجاهل التدريب المطلوب', 'افتراض أن جميع المهن تؤدي المهام نفسها'],
    optionsEn: ['Its duties, preparation, and professional scope', 'The job title alone', 'Ignore required training', 'Assume all professions have identical duties'],
    correctIndex: 0,
    explanationAr: 'يساعد فهم المهام والتأهيل ونطاق الممارسة على التمييز بين الأدوار الصحية المختلفة.',
    explanationEn: 'Understanding duties, preparation, and scope helps distinguish the different roles in health care.',
    lessons: [
      { titleAr: 'مدخل إلى المهن في مجال الرعاية الصحية', titleEn: 'Introduction to Health-Care Professions', page: 49 },
      { titleAr: 'مهن الخدمات العلاجية', titleEn: 'Therapeutic-Service Professions', page: 52 },
      { titleAr: 'مهن الخدمات التشخيصية', titleEn: 'Diagnostic-Service Professions', page: 61 },
      { titleAr: 'مهن المعلوماتية الصحية', titleEn: 'Health-Informatics Professions', page: 64 },
      { titleAr: 'مهن خدمات الدعم', titleEn: 'Support-Service Professions', page: 66 },
      { titleAr: 'مهن البحث والتطوير في مجال التكنولوجيا الحيوية', titleEn: 'Biotechnology Research and Development Professions', page: 67 }
    ]
  },
  {
    titleAr: 'الصفات الشخصية والمهنية لأعضاء فريق الرعاية الصحية',
    titleEn: 'Personal and Professional Qualities of the Health-Care Team',
    overviewAr: 'يركز الفصل على السلوك المهني والتواصل والعلاقات والعمل الجماعي والقيادة وإدارة الإجهاد والوقت في بيئات الرعاية الصحية.',
    overviewEn: 'This chapter focuses on professional conduct, communication, relationships, teamwork, leadership, stress, and time management in health-care settings.',
    reviewPage: 90,
    visualSteps: [
      { labelAr: 'سلوك مهني', labelEn: 'Professional conduct' },
      { labelAr: 'تواصل فعّال', labelEn: 'Effective communication' },
      { labelAr: 'تعاون وقيادة', labelEn: 'Teamwork and leadership' },
      { labelAr: 'رعاية أفضل', labelEn: 'Better care' }
    ],
    questionAr: 'أي سلوك يعزز التعاون المهني داخل فريق الرعاية؟',
    questionEn: 'Which behavior supports professional collaboration in a care team?',
    optionsAr: ['التواصل باحترام ووضوح والالتزام بمسؤولية الدور', 'حجب المعلومات اللازمة عن الفريق', 'تجاهل آراء المستفيدين والزملاء', 'تجاوز حدود الدور المهني'],
    optionsEn: ['Communicate respectfully and clearly and honor role responsibilities', 'Withhold information the team needs', 'Dismiss the views of clients and colleagues', 'Work beyond one’s professional scope'],
    correctIndex: 0,
    explanationAr: 'التواصل الواضح واحترام المسؤوليات يدعمان العمل الجماعي والعلاقات المهنية السليمة.',
    explanationEn: 'Clear communication and respect for responsibilities support teamwork and healthy professional relationships.',
    lessons: [
      { titleAr: 'المظهر الشخصي', titleEn: 'Personal Appearance', page: 73 },
      { titleAr: 'الصفات الشخصية', titleEn: 'Personal Qualities', page: 74 },
      { titleAr: 'التواصل الفعال', titleEn: 'Effective Communication', page: 75 },
      { titleAr: 'العلاقات السليمة بين الأفراد', titleEn: 'Healthy Interpersonal Relationships', page: 80 },
      { titleAr: 'العمل الجماعي', titleEn: 'Teamwork', page: 82 },
      { titleAr: 'القيادة المهنية', titleEn: 'Professional Leadership', page: 84 },
      { titleAr: 'الإجهاد', titleEn: 'Stress', page: 84 },
      { titleAr: 'إدارة الوقت', titleEn: 'Time Management', page: 87 }
    ]
  },
  {
    titleAr: 'المسؤوليات القانونية والأخلاقية',
    titleEn: 'Legal and Ethical Responsibilities',
    overviewAr: 'يتناول الفصل المسؤوليات القانونية والأخلاقية وحقوق المرضى والمعايير المهنية، مع تأكيد احترام الخصوصية والأنظمة.',
    overviewEn: 'This chapter covers legal and ethical responsibilities, patient rights, and professional standards, emphasizing privacy and applicable rules.',
    reviewPage: 105,
    visualSteps: [
      { labelAr: 'أنظمة مهنية', labelEn: 'Professional rules' },
      { labelAr: 'مبادئ أخلاقية', labelEn: 'Ethical principles' },
      { labelAr: 'حقوق المستفيد', labelEn: 'Client rights' },
      { labelAr: 'ممارسة مسؤولة', labelEn: 'Responsible practice' }
    ],
    questionAr: 'ما المبدأ الذي يجب أن يوجه التعامل مع معلومات المريض؟',
    questionEn: 'Which principle should guide the handling of patient information?',
    optionsAr: ['حفظ الخصوصية ومشاركة المعلومات وفق الصلاحية والأنظمة', 'نشر المعلومات دون حاجة أو إذن', 'إهمال حقوق المريض', 'تجاوز الأنظمة بحجة تسريع العمل'],
    optionsEn: ['Protect privacy and share information only as authorized and permitted', 'Disclose information without need or permission', 'Disregard patient rights', 'Bypass rules to work faster'],
    correctIndex: 0,
    explanationAr: 'حماية الخصوصية واحترام الأنظمة وحقوق المريض من أسس الممارسة المهنية المسؤولة.',
    explanationEn: 'Protecting privacy and respecting rules and patient rights are foundations of responsible practice.',
    lessons: [
      { titleAr: 'المسؤوليات القانونية', titleEn: 'Legal Responsibilities', page: 93 },
      { titleAr: 'الأخلاقيات', titleEn: 'Ethics', page: 99 },
      { titleAr: 'حقوق المرضى', titleEn: 'Patient Rights', page: 102 },
      { titleAr: 'المعايير المهنية', titleEn: 'Professional Standards', page: 103 }
    ]
  },
  {
    titleAr: 'المصطلحات الطبية',
    titleEn: 'Medical Terminology',
    overviewAr: 'يعرض الفصل تحليل أجزاء الكلمات الطبية والتعرف على الاختصارات، للمساعدة على فهم المصطلحات في سياقها المهني.',
    overviewEn: 'This chapter introduces word-part analysis and abbreviations to support understanding of medical terms in context.',
    reviewPage: 117,
    visualSteps: [
      { labelAr: 'بادئة', labelEn: 'Prefix' },
      { labelAr: 'جذر الكلمة', labelEn: 'Word root' },
      { labelAr: 'لاحقة', labelEn: 'Suffix' },
      { labelAr: 'مصطلح في سياقه', labelEn: 'Term in context' }
    ],
    questionAr: 'ما الطريقة المناسبة لفهم مصطلح طبي جديد؟',
    questionEn: 'What is an appropriate way to understand an unfamiliar medical term?',
    optionsAr: ['تحليل أجزائه والتحقق من معناه في سياقه ومصدره المعتمد', 'تخمين المعنى من اختصار غير معروف', 'استخدام المصطلح دون فهمه', 'تغيير معنى المصطلح بحسب الانطباع'],
    optionsEn: ['Analyze its parts and verify its meaning in an appropriate context and reference', 'Guess from an unfamiliar abbreviation', 'Use the term without understanding it', 'Change its meaning based on impression'],
    correctIndex: 0,
    explanationAr: 'تحليل أجزاء الكلمة والتحقق من المصطلحات والاختصارات يقللان الالتباس.',
    explanationEn: 'Analyzing word parts and verifying terms and abbreviations helps reduce confusion.',
    lessons: [
      { titleAr: 'تفسير أجزاء الكلمات', titleEn: 'Interpreting Word Parts', page: 109 },
      { titleAr: 'استخدام اختصارات المصطلحات الطبية', titleEn: 'Using Medical-Term Abbreviations', page: 115 }
    ]
  },
  {
    titleAr: 'نمو الإنسان وتطوره',
    titleEn: 'Human Growth and Development',
    overviewAr: 'يربط الفصل مراحل حياة الإنسان باحتياجاته، ويبين أهمية فهم النمو عند تقديم رعاية تراعي العمر والفروق الفردية.',
    overviewEn: 'This chapter connects life stages with human needs and explains why care should account for age and individual differences.',
    reviewPage: 144,
    visualSteps: [
      { labelAr: 'مرحلة عمرية', labelEn: 'Life stage' },
      { labelAr: 'نمو وتغير', labelEn: 'Growth and change' },
      { labelAr: 'احتياجات إنسانية', labelEn: 'Human needs' },
      { labelAr: 'دعم ملائم', labelEn: 'Appropriate support' }
    ],
    questionAr: 'ما الذي ينبغي مراعاته عند دراسة احتياجات الإنسان؟',
    questionEn: 'What should be considered when studying human needs?',
    optionsAr: ['مرحلة الحياة والسياق والفروق الفردية', 'العمر وحده في جميع الحالات', 'افتراض أن احتياجات الجميع متماثلة', 'إغفال تغير الاحتياجات مع النمو'],
    optionsEn: ['Life stage, context, and individual differences', 'Age alone in every case', 'Assume everyone has identical needs', 'Ignore how needs change with development'],
    correctIndex: 0,
    explanationAr: 'تتباين الاحتياجات باختلاف مراحل الحياة والظروف؛ لذا يلزم فهم السياق والفروق الفردية.',
    explanationEn: 'Needs vary with life stage and circumstances, so context and individual differences matter.',
    lessons: [
      { titleAr: 'مراحل الحياة', titleEn: 'Life Stages', page: 121 },
      { titleAr: 'احتياجات الإنسان', titleEn: 'Human Needs', page: 136 }
    ]
  },
  {
    titleAr: 'التغذية والأنظمة الغذائية',
    titleEn: 'Nutrition and Diets',
    overviewAr: 'يعرض الفصل مبادئ التغذية والمغذيات واستخدامها، والعادات الغذائية السليمة وإدارة الوزن والأنظمة العلاجية تحت إشراف المختصين.',
    overviewEn: 'This chapter covers nutrition principles, nutrients, healthy dietary habits, weight management, and therapeutic diets under qualified supervision.',
    reviewPage: 165,
    visualSteps: [
      { labelAr: 'احتياجات غذائية', labelEn: 'Nutritional needs' },
      { labelAr: 'مغذيات متنوعة', labelEn: 'Varied nutrients' },
      { labelAr: 'اختيارات متوازنة', labelEn: 'Balanced choices' },
      { labelAr: 'صحة مستدامة', labelEn: 'Long-term health' }
    ],
    questionAr: 'ما النهج الأنسب عند التعامل مع نظام غذائي علاجي؟',
    questionEn: 'What is the appropriate approach to a therapeutic diet?',
    optionsAr: ['اتباع توجيه المختص ومراعاة احتياجات الفرد', 'وصف نظام علاجي للآخرين دون تأهيل', 'تجاهل الحالة والاحتياجات الفردية', 'استبدال المشورة المهنية بتجربة عشوائية'],
    optionsEn: ['Follow qualified guidance and consider individual needs', 'Prescribe a therapeutic diet without qualification', 'Ignore the person’s condition and needs', 'Replace professional guidance with guesswork'],
    correctIndex: 0,
    explanationAr: 'الأنظمة العلاجية تحتاج إلى مراعاة الحالة والاحتياجات وتوجيه المختص الصحي.',
    explanationEn: 'Therapeutic diets require attention to the person’s condition and needs and guidance from a qualified professional.',
    lessons: [
      { titleAr: 'المبادئ الأساسية للتغذية', titleEn: 'Basic Principles of Nutrition', page: 147 },
      { titleAr: 'المغذيات الأساسية', titleEn: 'Essential Nutrients', page: 148 },
      { titleAr: 'استخدام المغذيات', titleEn: 'Use of Nutrients', page: 154 },
      { titleAr: 'الحفاظ على تغذية سليمة', titleEn: 'Maintaining Good Nutrition', page: 156 },
      { titleAr: 'إدارة الوزن', titleEn: 'Weight Management', page: 157 },
      { titleAr: 'الحميات الغذائية العلاجية', titleEn: 'Therapeutic Diets', page: 161 }
    ]
  },
  {
    titleAr: 'الحاسب والتكنولوجيا في الرعاية الصحية',
    titleEn: 'Computers and Technology in Health Care',
    overviewAr: 'يتناول الفصل أنظمة المعلومات والتقنيات المستخدمة في الرعاية الصحية، مع مراعاة دقة البيانات والخصوصية ودور المختص.',
    overviewEn: 'This chapter explores information systems and technologies used in health care, emphasizing data accuracy, privacy, and professional judgment.',
    reviewPage: 186,
    visualSteps: [
      { labelAr: 'بيانات صحية', labelEn: 'Health data' },
      { labelAr: 'نظام معلومات', labelEn: 'Information system' },
      { labelAr: 'استخدام مهني', labelEn: 'Professional use' },
      { labelAr: 'خصوصية المستفيد', labelEn: 'Client privacy' }
    ],
    questionAr: 'ما الاستخدام المهني المسؤول للمعلومات الصحية؟',
    questionEn: 'What is a responsible professional use of health information?',
    optionsAr: ['استخدامها لغرض مصرح به مع حماية دقتها وخصوصيتها', 'مشاركتها عبر قنوات عامة', 'تعديلها دون توثيق', 'اعتبار النظام الحاسوبي بديلًا عن الحكم المهني'],
    optionsEn: ['Use it for an authorized purpose while protecting accuracy and privacy', 'Share it through public channels', 'Change it without documentation', 'Treat a computer system as a substitute for professional judgment'],
    correctIndex: 0,
    explanationAr: 'تتطلب المعلومات الصحية استخدامًا مصرحًا ودقيقًا يحفظ الخصوصية، مع بقاء المسؤولية المهنية على مقدم الخدمة.',
    explanationEn: 'Health information must be used accurately and with authorization and privacy safeguards; professional responsibility remains with the provider.',
    lessons: [
      { titleAr: 'أنظمة المعلومات', titleEn: 'Information Systems', page: 171 },
      { titleAr: 'أنظمة المعلومات الصحية', titleEn: 'Health Information Systems', page: 172 },
      { titleAr: 'الفحوصات التشخيصية', titleEn: 'Diagnostic Tests', page: 175 },
      { titleAr: 'العلاج', titleEn: 'Treatment', page: 178 },
      { titleAr: 'مراقبة المريض', titleEn: 'Patient Monitoring', page: 180 },
      { titleAr: 'التعليم', titleEn: 'Education', page: 181 },
      { titleAr: 'البحث', titleEn: 'Research', page: 182 },
      { titleAr: 'التواصل', titleEn: 'Communication', page: 184 }
    ]
  },
  {
    titleAr: 'تعزيز السلامة',
    titleEn: 'Promoting Safety',
    overviewAr: 'يركز الفصل على ميكانيكا الجسم والوقاية من الحوادث والإصابات والاستجابة الآمنة لحالات الحريق وفق التعليمات المعتمدة.',
    overviewEn: 'This chapter addresses body mechanics, accident and injury prevention, and safe responses to fire in accordance with approved procedures.',
    reviewPage: 204,
    visualSteps: [
      { labelAr: 'تحديد المخاطر', labelEn: 'Identify hazards' },
      { labelAr: 'وقاية وتخطيط', labelEn: 'Prevention and planning' },
      { labelAr: 'إجراء آمن', labelEn: 'Safe action' },
      { labelAr: 'بيئة أكثر أمانًا', labelEn: 'Safer environment' }
    ],
    questionAr: 'ما المبدأ الذي يدعم السلامة في بيئة الرعاية؟',
    questionEn: 'Which principle supports safety in a care environment?',
    optionsAr: ['التعرف على الخطر واتباع إجراءات الوقاية والاستجابة المعتمدة', 'تجاهل المخاطر الصغيرة', 'الارتجال بدل خطة الطوارئ', 'التحرك دون مراعاة سلامة الآخرين'],
    optionsEn: ['Recognize hazards and follow approved prevention and response procedures', 'Ignore minor hazards', 'Improvise instead of following an emergency plan', 'Act without considering others’ safety'],
    correctIndex: 0,
    explanationAr: 'تبدأ السلامة بتحديد المخاطر والالتزام بإجراءات الوقاية وخطط الاستجابة المعتمدة.',
    explanationEn: 'Safety begins with hazard recognition and adherence to approved prevention and response procedures.',
    lessons: [
      { titleAr: 'استخدام ميكانيكا الجسم', titleEn: 'Using Body Mechanics', page: 191 },
      { titleAr: 'تجنب الحوادث والإصابات', titleEn: 'Preventing Accidents and Injuries', page: 192 },
      { titleAr: 'الحفاظ على السلامة عند حدوث حريق', titleEn: 'Maintaining Safety During a Fire', page: 198 }
    ]
  },
  {
    titleAr: 'مكافحة العدوى',
    titleEn: 'Infection Control',
    overviewAr: 'يعرض الفصل مبادئ مكافحة العدوى ونظافة اليدين والاحتياطات المعيارية والتنظيف والتطهير والتعقيم لمنع انتقال العدوى.',
    overviewEn: 'This chapter covers infection-control principles, hand hygiene, standard precautions, cleaning, disinfection, sterilization, and transmission prevention.',
    reviewPage: 233,
    visualSteps: [
      { labelAr: 'مصدر العدوى', labelEn: 'Infection source' },
      { labelAr: 'نظافة اليدين', labelEn: 'Hand hygiene' },
      { labelAr: 'احتياطات معيارية', labelEn: 'Standard precautions' },
      { labelAr: 'منع الانتقال', labelEn: 'Prevent transmission' }
    ],
    questionAr: 'ما الذي يساعد على تقليل انتقال العدوى في بيئة الرعاية؟',
    questionEn: 'What helps reduce infection transmission in a care environment?',
    optionsAr: ['اتباع نظافة اليدين والاحتياطات المعيارية المعتمدة', 'تجاوز الاحتياطات عند الانشغال', 'إعادة استخدام أدوات أحادية الاستخدام', 'إهمال تعليمات التنظيف والتعقيم'],
    optionsEn: ['Follow hand hygiene and approved standard precautions', 'Skip precautions when busy', 'Reuse single-use items', 'Ignore cleaning and sterilization instructions'],
    correctIndex: 0,
    explanationAr: 'تطبيق نظافة اليدين والاحتياطات المعيارية وفق السياسات المعتمدة من أسس الحد من انتقال العدوى.',
    explanationEn: 'Hand hygiene and standard precautions, applied according to approved policy, are fundamental to reducing transmission.',
    lessons: [
      { titleAr: 'فهم مبادئ مكافحة العدوى', titleEn: 'Understanding Infection-Control Principles', page: 209 },
      { titleAr: 'غسل اليدين', titleEn: 'Handwashing', page: 215 },
      { titleAr: 'الالتزام بالاحتياطات المعيارية', titleEn: 'Following Standard Precautions', page: 218 },
      { titleAr: 'التعقيم والتطهير والتنظيف بالموجات فوق الصوتية', titleEn: 'Sterilization, Disinfection, and Ultrasonic Cleaning', page: 221 },
      { titleAr: 'استخدام تقنيات التعقيم', titleEn: 'Using Sterilization Techniques', page: 223 },
      { titleAr: 'الالتزام بالاحتياطات لمنع انتقال العدوى', titleEn: 'Precautions to Prevent Infection Transmission', page: 227 }
    ]
  },
  {
    titleAr: 'العلامات الحيوية',
    titleEn: 'Vital Signs',
    overviewAr: 'يقدم الفصل طرق قياس العلامات الحيوية وتسجيلها؛ ويؤكد اتباع التدريب والأدوات والسياسات، وإبلاغ المختص بالنتائج التي تستدعي المتابعة.',
    overviewEn: 'This chapter introduces measuring and recording vital signs, emphasizing training, appropriate equipment and policy, and reporting results that need follow-up.',
    reviewPage: 254,
    visualSteps: [
      { labelAr: 'قياس مدرّب', labelEn: 'Trained measurement' },
      { labelAr: 'تسجيل دقيق', labelEn: 'Accurate recording' },
      { labelAr: 'مقارنة ومتابعة', labelEn: 'Review and follow-up' },
      { labelAr: 'إبلاغ المختص', labelEn: 'Notify a professional' }
    ],
    questionAr: 'ما الممارسة المسؤولة عند قياس علامة حيوية؟',
    questionEn: 'What is responsible practice when measuring a vital sign?',
    optionsAr: ['اتباع التدريب والسياسة، وتسجيل النتيجة بدقة وإبلاغ المختص عند الحاجة', 'تقدير النتيجة دون استخدام الطريقة المعتمدة', 'تشخيص الحالة من قراءة واحدة خارج نطاق الصلاحية', 'تغيير السجل لتوافق توقعًا مسبقًا'],
    optionsEn: ['Follow training and policy, record accurately, and notify a professional when needed', 'Estimate the result without the approved method', 'Diagnose from one reading beyond one’s scope', 'Alter the record to fit an expectation'],
    correctIndex: 0,
    explanationAr: 'القياس والتسجيل الدقيقان واتباع حدود الدور المهني أساس الاستخدام المسؤول للعلامات الحيوية.',
    explanationEn: 'Accurate measurement and recording, together with professional scope, are essential to responsible use of vital signs.',
    lessons: [
      { titleAr: 'قياس العلامات الحيوية وتسجيلها', titleEn: 'Measuring and Recording Vital Signs', page: 237 },
      { titleAr: 'قياس درجة الحرارة وتسجيلها', titleEn: 'Measuring and Recording Temperature', page: 239 },
      { titleAr: 'قياس النبض وتسجيله', titleEn: 'Measuring and Recording Pulse', page: 244 },
      { titleAr: 'قياس التنفس وتسجيله', titleEn: 'Measuring and Recording Respiration', page: 246 },
      { titleAr: 'قياس النبض القمي وتسجيله', titleEn: 'Measuring and Recording Apical Pulse', page: 247 },
      { titleAr: 'قياس ضغط الدم وتسجيله', titleEn: 'Measuring and Recording Blood Pressure', page: 249 }
    ]
  },
  {
    titleAr: 'الإسعافات الأولية',
    titleEn: 'First Aid',
    overviewAr: 'يتناول الفصل التعرف على مواقف الطوارئ ومبادئ الإسعاف الأولي. تُقدَّم الموضوعات للتعلم فقط؛ ويجب تفعيل خدمات الطوارئ واتباع التدريب المعتمد وعدم تجاوز حدود الدور.',
    overviewEn: 'This chapter introduces emergency recognition and first-aid principles for education only. Activate emergency services, follow approved training, and do not exceed one’s role.',
    reviewPage: 302,
    visualSteps: [
      { labelAr: 'تقدير أمان المكان', labelEn: 'Check scene safety' },
      { labelAr: 'طلب المساعدة', labelEn: 'Call for help' },
      { labelAr: 'إجراء ضمن التدريب', labelEn: 'Act within training' },
      { labelAr: 'متابعة المختصين', labelEn: 'Support responders' }
    ],
    questionAr: 'ما التصرف العام الآمن عند مواجهة حالة طارئة؟',
    questionEn: 'What is a generally safe response to an emergency?',
    optionsAr: ['تأمين الموقف وطلب خدمات الطوارئ واتباع التدريب المعتمد', 'تأخير طلب المساعدة لتجربة إجراء غير معروف', 'تقديم علاج يتجاوز التأهيل والصلاحية', 'نقل المصاب دون تقدير السلامة أو الحاجة'],
    optionsEn: ['Make the scene safe, contact emergency services, and follow approved training', 'Delay help to try an unfamiliar procedure', 'Provide treatment beyond one’s training and authority', 'Move the person without considering safety or need'],
    correctIndex: 0,
    explanationAr: 'الأولوية هي أمان المكان وتفعيل المساعدة المختصة، ثم الاقتصار على ما تسمح به التدريبات والإجراءات المعتمدة.',
    explanationEn: 'Prioritize scene safety and qualified emergency help, then act only within approved training and procedures.',
    lessons: [
      { titleAr: 'تقديم الإسعافات الأولية', titleEn: 'Providing First Aid', page: 259 },
      { titleAr: 'تطبيق الإنعاش القلبي الرئوي', titleEn: 'Applying Cardiopulmonary Resuscitation', page: 264 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات النزيف والجروح', titleEn: 'First Aid for Bleeding and Wounds', page: 272 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات الصدمة', titleEn: 'First Aid for Shock', page: 276 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات التسمم', titleEn: 'First Aid for Poisoning', page: 279 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات الحروق', titleEn: 'First Aid for Burns', page: 282 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات التعرض المفرط للحرارة', titleEn: 'First Aid for Heat Exposure', page: 286 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات التعرض للبرد', titleEn: 'First Aid for Cold Exposure', page: 288 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات إصابات العظام والمفاصل', titleEn: 'First Aid for Bone and Joint Injuries', page: 290 },
      { titleAr: 'تقديم الإسعافات الأولية في حالات المرض المفاجئ', titleEn: 'First Aid for Sudden Illness', page: 294 }
    ]
  },
  {
    titleAr: 'الاستعداد للحياة العملية',
    titleEn: 'Preparing for Working Life',
    overviewAr: 'يجمع الفصل مهارات الاستعداد للوظيفة، مثل السيرة الذاتية والمقابلة والتقدم للوظيفة وفهم صافي الدخل وإعداد الميزانية.',
    overviewEn: 'This chapter brings together employment-readiness skills, including résumés, interviews, applications, net income, and budgeting.',
    reviewPage: 326,
    visualSteps: [
      { labelAr: 'مهارات مهنية', labelEn: 'Career skills' },
      { labelAr: 'طلب وسيرة ذاتية', labelEn: 'Application and résumé' },
      { labelAr: 'مقابلة وظيفية', labelEn: 'Job interview' },
      { labelAr: 'دخل وميزانية', labelEn: 'Income and budget' }
    ],
    questionAr: 'ما الخطوة التي تدعم الاستعداد المهني والمالي؟',
    questionEn: 'Which step supports career and financial readiness?',
    optionsAr: ['إعداد وثائق دقيقة والتخطيط للدخل والنفقات', 'تقديم معلومات غير دقيقة في الطلب', 'إهمال فهم صافي الدخل', 'اتخاذ قرارات مالية دون مراجعة الميزانية'],
    optionsEn: ['Prepare accurate documents and plan income and expenses', 'Provide inaccurate application information', 'Ignore net income', 'Make financial decisions without reviewing a budget'],
    correctIndex: 0,
    explanationAr: 'تدعم الوثائق الدقيقة وفهم الدخل والتخطيط للنفقات الانتقال المنظم إلى الحياة العملية.',
    explanationEn: 'Accurate documents, understanding income, and planning expenses support an organized transition to working life.',
    lessons: [
      { titleAr: 'تطوير مهارات الحفاظ على الوظيفة', titleEn: 'Developing Job-Retention Skills', page: 307 },
      { titleAr: 'كتابة خطاب التعريف وإعداد السيرة الذاتية', titleEn: 'Writing a Cover Letter and Résumé', page: 311 },
      { titleAr: 'ملء استمارة التقدم إلى الوظيفة', titleEn: 'Completing a Job Application', page: 317 },
      { titleAr: 'المشاركة في مقابلة توظيف', titleEn: 'Participating in a Job Interview', page: 319 },
      { titleAr: 'تحديد صافي الدخل', titleEn: 'Determining Net Income', page: 322 },
      { titleAr: 'احتساب الميزانية', titleEn: 'Calculating a Budget', page: 323 }
    ]
  }
];

const sourceNoteAr =
  'عنوان الفصل والدرس ورقم الصفحة مطابق لفهرس كتاب مبادئ العلوم الصحية للصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م. الشرح والرسم والتقويم من إعداد المنصة، وليست مقتبسة من الكتاب.';
const sourceNoteEn =
  'The chapter and lesson titles and page references match the contents of the Grade 11 Pathways Health Science Principles textbook, 1448 AH/2026 edition. The explanation, diagram, and assessment are original platform material, not copied from the textbook.';
const safetyNoteAr =
  'محتوى تعليمي عام، وليس تشخيصًا أو توجيهًا علاجيًا. في الطوارئ تُطلب المساعدة المختصة فورًا، وتُتبع الإجراءات والتدريبات المعتمدة دون تجاوز حدود الصلاحية.';
const safetyNoteEn =
  'For general education only; not diagnosis or treatment advice. In an emergency, contact qualified responders promptly and follow approved procedures and training within your scope.';

function createLecture(
  chapter: HealthScienceChapter,
  chapterIndex: number,
  lesson: HealthScienceLesson | undefined,
  lessonIndex: number,
  order: number,
  lessonId: number
): Lecture {
  const chapterNumber = chapterIndex + 1;
  const isReview = !lesson;
  const titleAr = lesson
    ? `الدرس ${chapterNumber}.${lessonIndex + 1}: ${lesson.titleAr}`
    : `مراجعة الفصل ${chapterNumber}: ${chapter.titleAr}`;
  const titleEn = lesson
    ? `Lesson ${chapterNumber}.${lessonIndex + 1}: ${lesson.titleEn}`
    : `Chapter ${chapterNumber} Review: ${chapter.titleEn}`;
  const page = lesson?.page ?? chapter.reviewPage;
  const id = lesson
    ? `sa-g11-health-science-lesson-${lessonId}`
    : `sa-g11-health-science-chapter-${chapterNumber}-review`;
  const safetyNote = chapterIndex >= 9 && chapterIndex <= 12
    ? `\n\n${safetyNoteAr}`
    : '';
  const safetyNoteEnForChapter = chapterIndex >= 9 && chapterIndex <= 12
    ? `\n\n${safetyNoteEn}`
    : '';
  const focusAr = lesson
    ? `يركز الدرس على «${lesson.titleAr}» ضمن فصل «${chapter.titleAr}». ${chapter.overviewAr}`
    : `تراجع هذه المحاضرة موضوعات فصل «${chapter.titleAr}» ومفاهيمه الأساسية. ${chapter.overviewAr}`;
  const focusEn = lesson
    ? `This lesson focuses on “${lesson.titleEn}” in “${chapter.titleEn}.” ${chapter.overviewEn}`
    : `This review revisits the main topics and concepts in “${chapter.titleEn}.” ${chapter.overviewEn}`;

  return {
    id,
    order,
    subject: 'HEALTH_SCIENCE',
    gradeLevel: 'G11',
    country: 'SA',
    educationType: 'PUBLIC',
    educationTrack: 'HEALTH_LIFE',
    gradeLevelNameAr: 'المملكة العربية السعودية – الصف الثاني الثانوي – مسار الصحة والحياة',
    gradeLevelNameEn: 'Kingdom of Saudi Arabia – Grade 11 – Health & Life Pathway',
    ministryAr: 'وزارة التعليم – المملكة العربية السعودية',
    ministryEn: 'Ministry of Education – Kingdom of Saudi Arabia',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First semester',
    unitTitleAr: `الفصل ${chapterNumber}: ${chapter.titleAr}`,
    unitTitleEn: `Chapter ${chapterNumber}: ${chapter.titleEn}`,
    lessonNumberAr: lesson
      ? `الدرس ${chapterNumber}.${lessonIndex + 1} – ص ${page}`
      : `مراجعة الفصل ${chapterNumber} – ص ${page}`,
    lessonNumberEn: lesson
      ? `Lesson ${chapterNumber}.${lessonIndex + 1} – p. ${page}`
      : `Chapter ${chapterNumber} review – p. ${page}`,
    titleAr,
    titleEn,
    subtitleAr: chapter.titleAr,
    subtitleEn: chapter.titleEn,
    descriptionAr: `${focusAr}\n\n${sourceNoteAr}${safetyNote}`,
    descriptionEn: `${focusEn}\n\n${sourceNoteEn}${safetyNoteEnForChapter}`,
    durationMinutes: isReview ? 20 : 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: `ما المهارة أو المعلومة التي يضيفها درس «${lesson?.titleAr ?? chapter.titleAr}» إلى فهم الرعاية الصحية؟`,
    warmupHookEn: `What skill or understanding does “${lesson?.titleEn ?? chapter.titleEn}” add to health-care literacy?`,
    learningOutcomesAr: [
      `أن يشرح المتعلم الفكرة الأساسية المرتبطة بموضوع «${lesson?.titleAr ?? chapter.titleAr}».`,
      'أن يربط المفهوم بسياقه المهني، مع مراعاة السلامة والأنظمة والخصوصية.'
    ],
    learningOutcomesEn: [
      `Explain the central idea related to “${lesson?.titleEn ?? chapter.titleEn}.”`,
      'Relate the concept to its professional context while respecting safety, rules, and privacy.'
    ],
    keyConceptsAr: [lesson?.titleAr ?? chapter.titleAr, 'الممارسة المهنية', 'السلامة والخصوصية'],
    keyConceptsEn: [lesson?.titleEn ?? chapter.titleEn, 'Professional practice', 'Safety and privacy'],
    summaryAr: `${focusAr}\n\n${sourceNoteAr}${safetyNote}`,
    summaryEn: `${focusEn}\n\n${sourceNoteEn}${safetyNoteEnForChapter}`,
    sections: [{
      titleAr: lesson?.titleAr ?? chapter.titleAr,
      titleEn: lesson?.titleEn ?? chapter.titleEn,
      contentAr: `${focusAr}\n\nفكر في كيفية تطبيق المفهوم في بيئة الرعاية، ومن الجهة المخولة، وما التعليمات أو ضمانات السلامة والخصوصية الواجب اتباعها.\n\n${sourceNoteAr}${safetyNote}`,
      contentEn: `${focusEn}\n\nConsider how the concept applies in a care setting, who is authorized to act, and which safety and privacy rules apply.\n\n${sourceNoteEn}${safetyNoteEnForChapter}`,
      diagram: {
        id: `${id}-diagram`,
        figureNumberAr: `شكل (${order})`,
        figureNumberEn: `Figure (${order})`,
        titleAr: `رسم تعليمي أصلي: ${lesson?.titleAr ?? chapter.titleAr}`,
        titleEn: `Original learning diagram: ${lesson?.titleEn ?? chapter.titleEn}`,
        captionAr: 'مخطط تعليمي أصلي للمنصة، وليس صورة من الكتاب المدرسي.',
        captionEn: 'An original instructional diagram created by the platform, not an image from the textbook.',
        diagramType: 'health_science',
        visualSteps: chapter.visualSteps
      }
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم: ${lesson?.titleAr ?? chapter.titleAr}`,
      titleEn: `Check: ${lesson?.titleEn ?? chapter.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `${id}-question`,
        textAr: chapter.questionAr,
        textEn: chapter.questionEn,
        optionsAr: chapter.optionsAr,
        optionsEn: chapter.optionsEn,
        correctIndex: chapter.correctIndex,
        conceptTestedAr: chapter.titleAr,
        conceptTestedEn: chapter.titleEn,
        explanationAr: chapter.explanationAr,
        explanationEn: chapter.explanationEn,
        difficulty: 'easy'
      }]
    }
  };
}

export const SAUDI_G11_HEALTH_SCIENCE_LECTURES: Lecture[] = chapters.flatMap((chapter, chapterIndex) => {
  const firstLessonId = chapters
    .slice(0, chapterIndex)
    .reduce((count, previousChapter) => count + previousChapter.lessons.length, 0);
  const firstOrder = chapters
    .slice(0, chapterIndex)
    .reduce((count, previousChapter) => count + previousChapter.lessons.length + 1, 0);
  const lessons = chapter.lessons.map((lesson, lessonIndex) =>
    createLecture(
      chapter,
      chapterIndex,
      lesson,
      lessonIndex,
      firstOrder + lessonIndex + 1,
      firstLessonId + lessonIndex + 1
    )
  );
  const review = createLecture(
    chapter,
    chapterIndex,
    undefined,
    0,
    firstOrder + lessons.length + 1,
    firstLessonId + lessons.length + 1
  );
  return [...lessons, review];
});

export const SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_LESSONS = chapters.flatMap(
  (chapter, chapterIndex) => chapter.lessons.map((lesson, lessonIndex) => ({
    chapterNumber: chapterIndex + 1,
    lessonNumber: lessonIndex + 1,
    titleAr: lesson.titleAr,
    page: lesson.page
  }))
);

