import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_HISTORY_G5_BOOK = {
  title: 'التاريخ والتربية الوطنية — الصف الخامس للتعليم الأساسي',
  titleEn: 'History and National Education — Grade 5 Basic Level',
  units: [
    { titleAr: 'من تاريخ السودان', titleEn: 'From the History of Sudan', firstPage: 7, lastPage: 42 },
    { titleAr: 'تطور الدولة الإسلامية حتى العصر الأموي', titleEn: 'Development of the Islamic State to the Umayyad Era', firstPage: 43, lastPage: 70 },
    { titleAr: 'من تاريخ إفريقيا', titleEn: 'From the History of Africa', firstPage: 71, lastPage: 95 },
    { titleAr: 'من تاريخ أوربا', titleEn: 'From the History of Europe', firstPage: 96, lastPage: 105 },
    { titleAr: 'في التربية الوطنية', titleEn: 'National Education', firstPage: 106, lastPage: 120 }
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
    unit: 1, page: 8, titleAr: 'وطننا السودان', titleEn: 'Our Homeland, Sudan',
    focusAr: 'السودان وطن واسع يجمع أقاليم وبيئات وسكانًا متنوعين. تساعدنا دراسة ماضيه على فهم الروابط التي تجمع الناس والمكان.',
    focusEn: 'Sudan is a large homeland with varied regions, environments, and people. Studying its past helps us understand the connections between people and place.',
    questionAr: 'ما الذي تساعدنا دراسة تاريخ السودان على فهمه؟', questionEn: 'What can studying Sudan’s history help us understand?',
    optionsAr: ['روابط الناس والمكان عبر الزمن', 'أسماء الكواكب فقط', 'حالة الطقس في يوم واحد'],
    optionsEn: ['Connections between people and place over time', 'Only the names of planets', 'The weather on one day'],
    visualStepsAr: ['أرض السودان', 'أقاليم متنوعة', 'سكان ومجتمعات', 'وطن مشترك'],
    visualStepsEn: ['The land of Sudan', 'Varied regions', 'People and communities', 'A shared homeland']
  },
  {
    unit: 1, page: 13, titleAr: 'التقويم', titleEn: 'Review and Assessment',
    focusAr: 'نراجع كيف تكشف الآثار والمواقع والأخبار المنقولة عن حياة الناس في السودان قديمًا، ثم نرتب الأدلة والأحداث زمنيًا.',
    focusEn: 'Review how remains, places, and recorded accounts reveal life in Sudan’s past, then arrange evidence and events in time order.',
    questionAr: 'أي مصدر قد يساعد المؤرخ على معرفة حياة الناس قديمًا؟', questionEn: 'Which source may help a historian learn about people’s lives in the past?',
    optionsAr: ['أداة أثرية محفوظة', 'توقعات الطقس غدًا', 'قائمة مشتريات حديثة'],
    optionsEn: ['A preserved archaeological object', 'Tomorrow’s weather forecast', 'A modern shopping list'],
    visualStepsAr: ['سؤال عن الماضي', 'جمع دليل', 'ترتيب الأحداث', 'مراجعة الاستنتاج'],
    visualStepsEn: ['Ask about the past', 'Gather evidence', 'Order events', 'Review the conclusion']
  },
  {
    unit: 1, page: 15, titleAr: 'حضارات السودان القديمة', titleEn: 'Ancient Civilizations of Sudan',
    focusAr: 'نشأت مجتمعات قديمة في وادي النيل ومناطق السودان، وتركت آثارًا تساعدنا على التعرف إلى أنشطتها وعلاقاتها.',
    focusEn: 'Ancient communities grew in the Nile Valley and other parts of Sudan. Their remains help us learn about their activities and connections.',
    questionAr: 'ما الذي يمكن أن تكشفه آثار المجتمعات القديمة؟', questionEn: 'What can the remains of ancient communities reveal?',
    optionsAr: ['جوانب من حياتها وأنشطتها', 'شكل المستقبل بالتفصيل', 'درجة حرارة اليوم'],
    optionsEn: ['Aspects of their lives and activities', 'The future in detail', 'Today’s temperature'],
    visualStepsAr: ['مجتمع قديم', 'عمل وحياة يومية', 'أثر باقٍ', 'دليل على الماضي'],
    visualStepsEn: ['An ancient community', 'Work and daily life', 'A surviving remain', 'Evidence of the past']
  },
  {
    unit: 1, page: 18, titleAr: 'حضارة كرمة', titleEn: 'The Kerma Civilization',
    focusAr: 'قامت مملكة كرمة في شمال السودان قرب النيل، وازدهرت فيها صناعة الفخار والتجارة والبناء. تكشف آثارها عن مجتمع منظم ومهارات متنوعة.',
    focusEn: 'The Kingdom of Kerma developed in northern Sudan near the Nile. Pottery, trade, and building flourished there, and its remains show an organized society with varied skills.',
    questionAr: 'أي نشاط اشتهرت به مملكة كرمة؟', questionEn: 'Which activity was notable in the Kingdom of Kerma?',
    optionsAr: ['صناعة الفخار', 'الطباعة الرقمية', 'السفر بالطائرات'],
    optionsEn: ['Pottery making', 'Digital printing', 'Air travel'],
    visualStepsAr: ['استقرار قرب النيل', 'مهارات في الصناعة', 'تبادل وتجارة', 'ازدهار كرمة'],
    visualStepsEn: ['Settlement near the Nile', 'Craft skills develop', 'Exchange and trade', 'Kerma flourishes']
  },
  {
    unit: 1, page: 20, titleAr: 'حضارة كوش', titleEn: 'The Kingdom of Kush',
    focusAr: 'نشأت مملكة كوش في وادي النيل بالسودان، وتعاقبت فيها مراكز حكم مهمة مثل نبتة ومروي. تروي المعابد والأهرام والكتابات بعض جوانب تاريخها.',
    focusEn: 'The Kingdom of Kush arose in Sudan’s Nile Valley, with important centres of rule including Napata and Meroë. Temples, pyramids, and writing tell parts of its story.',
    questionAr: 'ما الموقعان اللذان ارتبطا بحكم كوش؟', questionEn: 'Which two places were important centres of Kushite rule?',
    optionsAr: ['نبتة ومروي', 'كرمة والخرطوم', 'سوبا وسنار'],
    optionsEn: ['Napata and Meroë', 'Kerma and Khartoum', 'Soba and Sennar'],
    visualStepsAr: ['وادي النيل', 'مراكز حكم كوش', 'مبانٍ وكتابات', 'شواهد تاريخية'],
    visualStepsEn: ['The Nile Valley', 'Kushite centres of rule', 'Buildings and writing', 'Historical evidence']
  },
  {
    unit: 1, page: 25, titleAr: 'ممالك النوبة المسيحية', titleEn: 'The Christian Kingdoms of Nubia',
    focusAr: 'ظهرت ممالك مسيحية في النوبة، منها نوباتيا والمقرة وعلوة. ساعد موقعها على النيل في التواصل، وتبقى الكنائس والآثار شواهد على تاريخها.',
    focusEn: 'Christian kingdoms emerged in Nubia, including Nobatia, Makuria, and Alodia. Their Nile setting supported contact, while churches and other remains bear witness to their history.',
    questionAr: 'ما اسم إحدى ممالك النوبة المسيحية؟', questionEn: 'Which is one of the Christian kingdoms of Nubia?',
    optionsAr: ['المقرة', 'كرمة', 'الفور'],
    optionsEn: ['Makuria', 'Kerma', 'Funj'],
    visualStepsAr: ['ممالك في النوبة', 'تواصل على النيل', 'كنائس وآثار', 'ذاكرة تاريخية'],
    visualStepsEn: ['Kingdoms in Nubia', 'Contact along the Nile', 'Churches and remains', 'A historical record']
  },
  {
    unit: 1, page: 30, titleAr: 'الفتح الإسلامي لأرض السودان', titleEn: 'The Arrival of Islam in Sudan',
    focusAr: 'وصل الإسلام إلى السودان عبر مراحل من الاتصال والتبادل، وتنوعت التجارب بين المناطق. يدرس المؤرخ هذه التحولات من خلال الروايات والآثار.',
    focusEn: 'Islam reached Sudan through stages of contact and exchange, with different experiences across regions. Historians study these changes through accounts and material evidence.',
    questionAr: 'كيف يدرس المؤرخ وصول الإسلام إلى مناطق السودان؟', questionEn: 'How can historians study Islam’s arrival in Sudan?',
    optionsAr: ['بمقارنة الروايات والآثار', 'بتجاهل الأدلة', 'بالاعتماد على الخيال وحده'],
    optionsEn: ['By comparing accounts and material evidence', 'By ignoring evidence', 'By relying only on imagination'],
    visualStepsAr: ['اتصال بين مناطق', 'تبادل ومعرفة', 'تغيرات عبر الزمن', 'دراسة الشواهد'],
    visualStepsEn: ['Contact between regions', 'Exchange and learning', 'Changes over time', 'Study the evidence']
  },
  {
    unit: 1, page: 33, titleAr: 'دخول العرب إلى السودان', titleEn: 'The Arrival of Arabs in Sudan',
    focusAr: 'أسهمت الرحلات والتجارة والجوار في تواصل العرب مع سكان السودان. ومع الزمن نشأت صلات ثقافية واجتماعية متعددة بين المجتمعات.',
    focusEn: 'Travel, trade, and neighbouring regions brought Arabs into contact with Sudan’s people. Over time, diverse cultural and social connections developed.',
    questionAr: 'أي عامل ساعد على تواصل العرب مع سكان السودان؟', questionEn: 'Which factor helped Arabs connect with people in Sudan?',
    optionsAr: ['الرحلات والتجارة', 'انقطاع الطرق', 'غياب التبادل'],
    optionsEn: ['Travel and trade', 'Closed routes', 'Lack of exchange'],
    visualStepsAr: ['رحلات وتجارة', 'لقاء مجتمعات', 'تبادل ثقافي', 'صلات جديدة'],
    visualStepsEn: ['Travel and trade', 'Communities meet', 'Cultural exchange', 'New connections']
  },
  {
    unit: 1, page: 37, titleAr: 'السلطنات الإسلامية في السودان (1)', titleEn: 'Islamic Sultanates in Sudan (1)',
    focusAr: 'تعرّفنا السلطنات الإسلامية على نماذج من الحكم والمجتمع في السودان خلال العصور الوسطى. وتوضح المدن والوثائق والآثار جوانب من تنظيمها.',
    focusEn: 'The Islamic sultanates offer examples of government and society in medieval Sudan. Towns, written records, and remains reveal aspects of how they were organized.',
    questionAr: 'ما الذي يساعدنا على معرفة تنظيم السلطنة؟', questionEn: 'What can help us learn how a sultanate was organized?',
    optionsAr: ['المدن والوثائق والآثار', 'حكاية بلا مصدر', 'خريطة للطقس'],
    optionsEn: ['Towns, records, and remains', 'A story with no source', 'A weather map'],
    visualStepsAr: ['قيام سلطنة', 'إدارة ومجتمع', 'مدن وآثار', 'قراءة تاريخية'],
    visualStepsEn: ['A sultanate forms', 'Government and society', 'Towns and remains', 'Historical study']
  },
  {
    unit: 1, page: 40, titleAr: 'السلطنات الإسلامية في السودان (2)', titleEn: 'Islamic Sultanates in Sudan (2)',
    focusAr: 'تختلف السلطنات في مواقعها وأزمنتها، لكنها تفاعلت مع جيرانها عبر التجارة والرحلات. تساعد المقارنة على ملاحظة أوجه التشابه والاختلاف بينها.',
    focusEn: 'Sultanates differed in place and time, yet interacted with neighbours through trade and travel. Comparing them helps us notice similarities and differences.',
    questionAr: 'ما فائدة مقارنة السلطنات التاريخية؟', questionEn: 'Why compare historical sultanates?',
    optionsAr: ['لملاحظة أوجه الشبه والاختلاف', 'لمحو اختلاف الأزمنة', 'لخلط الأحداث بعضها ببعض'],
    optionsEn: ['To notice similarities and differences', 'To erase differences in time', 'To mix events together'],
    visualStepsAr: ['تحديد السلطنتين', 'جمع معلومات عنهما', 'مقارنة الأدلة', 'استخلاص أوجه الشبه والاختلاف'],
    visualStepsEn: ['Choose two sultanates', 'Gather information', 'Compare evidence', 'Find similarities and differences']
  },
  {
    unit: 2, page: 44, titleAr: 'الدعوة والدولة الإسلامية في عهد النبي صلى الله عليه وسلم', titleEn: 'The Call and the Islamic State in the Prophet’s Time',
    focusAr: 'بدأت الدعوة الإسلامية في مكة، ثم انتقل المسلمون إلى المدينة حيث تأسس مجتمع جديد يقوم على التعاون والعهود المشتركة.',
    focusEn: 'The Islamic call began in Mecca. Muslims later migrated to Medina, where a new community was built on cooperation and shared agreements.',
    questionAr: 'في أي مدينة تأسس المجتمع الإسلامي بعد الهجرة؟', questionEn: 'In which city was the Muslim community established after the migration?',
    optionsAr: ['المدينة', 'الطائف', 'دمشق'],
    optionsEn: ['Medina', 'Taif', 'Damascus'],
    visualStepsAr: ['الدعوة في مكة', 'الهجرة إلى المدينة', 'تنظيم المجتمع', 'تعاون وعهود'],
    visualStepsEn: ['The call in Mecca', 'Migration to Medina', 'A community is organized', 'Cooperation and agreements']
  },
  {
    unit: 2, page: 51, titleAr: 'الدولة الإسلامية في عهد الخلفاء الراشدين', titleEn: 'The Islamic State under the Rightly Guided Caliphs',
    focusAr: 'بعد وفاة النبي صلى الله عليه وسلم تولى الخلفاء الراشدون قيادة المسلمين، وتوسعت الدولة ونظمت شؤونها عبر مراحل متتابعة.',
    focusEn: 'After the Prophet’s death, the Rightly Guided Caliphs led the Muslim community. The state expanded and organized its affairs through successive stages.',
    questionAr: 'ماذا حدث للدولة الإسلامية في عهد الخلفاء الراشدين؟', questionEn: 'What happened to the Islamic state under the Rightly Guided Caliphs?',
    optionsAr: ['توسعت ونظمت شؤونها', 'اختفت الكتابة من العالم', 'توقفت كل الرحلات'],
    optionsEn: ['It expanded and organized its affairs', 'Writing disappeared from the world', 'All travel stopped'],
    visualStepsAr: ['قيادة الخلفاء', 'إدارة شؤون الناس', 'اتساع الدولة', 'مراحل متتابعة'],
    visualStepsEn: ['The caliphs lead', 'People’s affairs are managed', 'The state expands', 'Successive stages']
  },
  {
    unit: 2, page: 59, titleAr: 'الدولة الأموية', titleEn: 'The Umayyad State',
    focusAr: 'قامت الدولة الأموية بعد عهد الخلفاء الراشدين، واتخذت دمشق مركزًا للحكم. شهد عصرها اتساع الدولة وتطور الإدارة.',
    focusEn: 'The Umayyad state followed the era of the Rightly Guided Caliphs and had its centre of government in Damascus. Its period saw expansion and administrative development.',
    questionAr: 'ما المدينة التي اتخذتها الدولة الأموية مركزًا للحكم؟', questionEn: 'Which city was the Umayyad state’s centre of government?',
    optionsAr: ['دمشق', 'المدينة', 'مروي'],
    optionsEn: ['Damascus', 'Medina', 'Meroë'],
    visualStepsAr: ['قيام الدولة الأموية', 'دمشق مركز الحكم', 'تنظيم الإدارة', 'اتساع الدولة'],
    visualStepsEn: ['The Umayyad state forms', 'Damascus is the centre', 'Administration develops', 'The state expands']
  },
  {
    unit: 2, page: 64, titleAr: 'الفتوحات في عهد الدولة الأموية', titleEn: 'Expansion in the Umayyad Period',
    focusAr: 'اتسعت الدولة الأموية إلى أقاليم جديدة خلال القرن الأول الهجري، وربطت الطرق بين مناطق واسعة. ندرس حركة التوسع مع الانتباه إلى المكان والزمن.',
    focusEn: 'The Umayyad state expanded into new regions during the first Islamic century, linking far-reaching areas. We study this expansion with attention to place and time.',
    questionAr: 'ما الذي يساعد على فهم حركة التوسع التاريخية؟', questionEn: 'What helps us understand historical expansion?',
    optionsAr: ['تحديد الأماكن والأزمنة', 'إهمال الخرائط والتواريخ', 'تبديل ترتيب الأحداث'],
    optionsEn: ['Identifying places and dates', 'Ignoring maps and dates', 'Reversing the order of events'],
    visualStepsAr: ['مركز الدولة', 'طرق واتصالات', 'أقاليم جديدة', 'خريطة للتوسع'],
    visualStepsEn: ['The state’s centre', 'Routes and connections', 'New regions', 'A map of expansion']
  },
  {
    unit: 2, page: 69, titleAr: 'سقوط الدولة الأموية', titleEn: 'The Fall of the Umayyad State',
    focusAr: 'انتهى حكم الدولة الأموية سنة 132هـ، وبدأ بعده حكم العباسيين. يساعد الخط الزمني على تمييز تعاقب الدول من دون الخلط بين أحداثها.',
    focusEn: 'Umayyad rule ended in 132 AH, followed by Abbasid rule. A timeline helps us distinguish successive states without confusing their events.',
    questionAr: 'أي دولة تولت الحكم بعد الدولة الأموية؟', questionEn: 'Which state came to power after the Umayyad state?',
    optionsAr: ['الدولة العباسية', 'مملكة كرمة', 'سلطنة الفونج'],
    optionsEn: ['The Abbasid state', 'The Kingdom of Kerma', 'The Funj Sultanate'],
    visualStepsAr: ['حكم أموي', 'تحولات سياسية', 'نهاية سنة 132هـ', 'بداية الحكم العباسي'],
    visualStepsEn: ['Umayyad rule', 'Political changes', 'The end in 132 AH', 'Abbasid rule begins']
  },
  {
    unit: 3, page: 72, titleAr: 'إفريقيا والإفريقيون', titleEn: 'Africa and African Peoples',
    focusAr: 'إفريقيا قارة واسعة تضم شعوبًا ولغات وبيئات كثيرة. يثري تنوعها تاريخها، وتجمع بين مجتمعاتها صلات قديمة ومتجددة.',
    focusEn: 'Africa is a vast continent with many peoples, languages, and environments. Its diversity enriches its history, and its communities share long-standing and changing connections.',
    questionAr: 'أي وصف يلائم قارة إفريقيا؟', questionEn: 'Which description fits the continent of Africa?',
    optionsAr: ['قارة متنوعة الشعوب والبيئات', 'جزيرة صغيرة ذات شعب واحد', 'مدينة واحدة'],
    optionsEn: ['A continent with diverse peoples and environments', 'A small island with one people', 'A single city'],
    visualStepsAr: ['قارة واسعة', 'بيئات متعددة', 'شعوب متنوعة', 'تاريخ مشترك ومتصل'],
    visualStepsEn: ['A vast continent', 'Many environments', 'Diverse peoples', 'Connected histories']
  },
  {
    unit: 3, page: 77, titleAr: 'موقع إفريقيا وسكانها', titleEn: 'Africa’s Location and People',
    focusAr: 'تقع إفريقيا بين البحر المتوسط والمحيطين الأطلسي والهندي، ويعبرها خط الاستواء. ساعد اختلاف الأقاليم على تنوع أنماط الحياة والسكان.',
    focusEn: 'Africa lies between the Mediterranean Sea and the Atlantic and Indian Oceans, and the Equator crosses it. Different regions support varied ways of life and populations.',
    questionAr: 'أي محيط يحد إفريقيا من الغرب؟', questionEn: 'Which ocean borders Africa to the west?',
    optionsAr: ['المحيط الأطلسي', 'المحيط الهادئ', 'المحيط المتجمد الشمالي'],
    optionsEn: ['The Atlantic Ocean', 'The Pacific Ocean', 'The Arctic Ocean'],
    visualStepsAr: ['موقع على الخريطة', 'بحار ومحيطات', 'أقاليم ومناخات', 'سكان متنوعون'],
    visualStepsEn: ['Locate it on a map', 'Seas and oceans', 'Regions and climates', 'Diverse populations']
  },
  {
    unit: 3, page: 81, titleAr: 'نماذج من حضارات إفريقيا القديمة', titleEn: 'Examples of Ancient African Civilizations',
    focusAr: 'عرفت إفريقيا حضارات قديمة في وادي النيل ومناطق أخرى، وازدهرت فيها الزراعة والصناعة والتجارة. تتيح الآثار مقارنة تجارب تلك المجتمعات.',
    focusEn: 'Ancient civilizations flourished in the Nile Valley and other African regions, with farming, crafts, and trade. Archaeological evidence lets us compare their experiences.',
    questionAr: 'ما النشاط الذي ساعد مجتمعات قديمة على الاستقرار؟', questionEn: 'Which activity helped ancient communities settle?',
    optionsAr: ['الزراعة', 'السفر إلى الفضاء', 'الاتصال بالهاتف'],
    optionsEn: ['Farming', 'Space travel', 'Telephone calls'],
    visualStepsAr: ['موارد وموقع', 'استقرار السكان', 'زراعة وصناعة', 'حضارة وآثار'],
    visualStepsEn: ['Resources and location', 'People settle', 'Farming and crafts', 'Civilization and remains']
  },
  {
    unit: 3, page: 84, titleAr: 'دخول المسيحية في إفريقيا', titleEn: 'The Arrival of Christianity in Africa',
    focusAr: 'انتشرت المسيحية في أجزاء من إفريقيا عبر التواصل والرحلات، واختلف زمن انتشارها من منطقة إلى أخرى. بقيت الكنائس والمخطوطات شواهد على ذلك التاريخ.',
    focusEn: 'Christianity spread through parts of Africa through contact and travel, at different times in different regions. Churches and manuscripts remain as evidence of that history.',
    questionAr: 'أي أثر قد يدل على تاريخ المسيحية في منطقة؟', questionEn: 'Which remain may offer evidence of Christianity’s history in a region?',
    optionsAr: ['كنيسة أو مخطوطة', 'بذرة حديثة', 'خريطة للنجوم'],
    optionsEn: ['A church or manuscript', 'A modern seed', 'A star map'],
    visualStepsAr: ['تواصل ورحلات', 'وصول أفكار دينية', 'تجارب إقليمية متنوعة', 'آثار ومخطوطات'],
    visualStepsEn: ['Contact and travel', 'Religious ideas arrive', 'Regional experiences vary', 'Remains and manuscripts']
  },
  {
    unit: 3, page: 87, titleAr: 'طرق انتشار الإسلام في إفريقيا', titleEn: 'Ways Islam Spread in Africa',
    focusAr: 'انتشر الإسلام في مناطق إفريقية متعددة عبر طرق مختلفة، منها التجارة والرحلات والتعلم. شارك الناس في نقل الأفكار وبناء علاقات بين المجتمعات.',
    focusEn: 'Islam spread in many African regions through different routes, including trade, travel, and learning. People helped carry ideas and build ties between communities.',
    questionAr: 'أي طريق أسهم في انتشار الإسلام في إفريقيا؟', questionEn: 'Which route contributed to the spread of Islam in Africa?',
    optionsAr: ['التجارة والرحلات', 'منع اللقاءات', 'إغلاق طرق التعلم'],
    optionsEn: ['Trade and travel', 'Preventing contact', 'Closing routes to learning'],
    visualStepsAr: ['تجار ورحالة', 'لقاء مجتمعات', 'تبادل أفكار', 'انتشار تدريجي'],
    visualStepsEn: ['Traders and travellers', 'Communities meet', 'Ideas are exchanged', 'Gradual spread']
  },
  {
    unit: 3, page: 90, titleAr: 'عوامل ووسائل انتشار الإسلام في إفريقيا', titleEn: 'Factors and Means in Islam’s Spread in Africa',
    focusAr: 'تعددت عوامل الاتصال بين المجتمعات الإفريقية، مثل التجارة والتعليم والانتقال بين الأقاليم. أسهمت هذه الوسائل في تبادل المعرفة عبر الزمن.',
    focusEn: 'Trade, education, and movement between regions were among the many ways African communities connected. These means supported the exchange of knowledge over time.',
    questionAr: 'ما إحدى الوسائل التي عززت التواصل بين المجتمعات؟', questionEn: 'Which was one means that strengthened contact between communities?',
    optionsAr: ['التعليم وتبادل المعرفة', 'منع السفر دائمًا', 'العزلة التامة'],
    optionsEn: ['Education and knowledge exchange', 'Always preventing travel', 'Complete isolation'],
    visualStepsAr: ['حاجة إلى التواصل', 'وسيلة مثل التجارة', 'لقاء وتبادل', 'أثر عبر الزمن'],
    visualStepsEn: ['A need for contact', 'A means such as trade', 'Meeting and exchange', 'An effect over time']
  },
  {
    unit: 3, page: 93, titleAr: 'انتشار الإسلام في شمال إفريقيا', titleEn: 'The Spread of Islam in North Africa',
    focusAr: 'انتشر الإسلام في شمال إفريقيا على مراحل، وربطت الطرق بين مدن الساحل والداخل. نتتبع التغيرات التاريخية بمراعاة اختلاف الأزمنة والمناطق.',
    focusEn: 'Islam spread through North Africa in stages, and routes connected coastal and inland towns. We trace historical change while noting differences in time and place.',
    questionAr: 'كيف نصف انتشار الإسلام في شمال إفريقيا؟', questionEn: 'How can we describe Islam’s spread in North Africa?',
    optionsAr: ['حدث على مراحل عبر الزمن', 'وقع في يوم واحد', 'اقتصر على مدينة واحدة'],
    optionsEn: ['It happened in stages over time', 'It happened in one day', 'It was limited to one city'],
    visualStepsAr: ['طرق إلى شمال إفريقيا', 'تواصل بين المدن', 'تغيرات على مراحل', 'تاريخ إقليمي'],
    visualStepsEn: ['Routes into North Africa', 'Towns connect', 'Changes unfold in stages', 'A regional history']
  },
  {
    unit: 4, page: 97, titleAr: 'أوربا في عصور الظلام', titleEn: 'Europe in the Middle Ages',
    focusAr: 'مرت أجزاء من أوربا في العصور الوسطى بظروف سياسية واجتماعية متغيرة. ويساعدنا وصف هذه الفترة بمصادر متعددة على فهمها دون تعميم.',
    focusEn: 'Parts of Europe experienced changing political and social conditions during the Middle Ages. Using varied sources helps us understand the period without overgeneralizing.',
    questionAr: 'لماذا نستخدم مصادر متعددة عند دراسة تاريخ أوربا؟', questionEn: 'Why use several sources when studying European history?',
    optionsAr: ['لفهم الفترة من جوانب مختلفة', 'لإثبات أن كل مكان متشابه', 'لتجاهل التغيرات'],
    optionsEn: ['To understand the period from different viewpoints', 'To claim every place was the same', 'To ignore change'],
    visualStepsAr: ['تحديد الفترة', 'اختيار مصادر', 'مقارنة مناطق', 'فهم التغير'],
    visualStepsEn: ['Set the time period', 'Choose sources', 'Compare regions', 'Understand change']
  },
  {
    unit: 4, page: 100, titleAr: 'أثر الحضارة الإسلامية على أوربا', titleEn: 'The Influence of Islamic Civilization on Europe',
    focusAr: 'انتقلت معارف وأفكار بين مجتمعات العالم عبر الترجمة والتجارة والتعلم. وأسهم العلماء والمترجمون في وصول معارف من الحضارة الإسلامية إلى أوربا.',
    focusEn: 'Knowledge and ideas travelled between societies through translation, trade, and learning. Scholars and translators helped Islamic learning reach Europe.',
    questionAr: 'أي وسيلة ساعدت على انتقال المعارف إلى أوربا؟', questionEn: 'Which means helped knowledge reach Europe?',
    optionsAr: ['الترجمة والتعلم', 'إخفاء الكتب', 'قطع طرق التواصل'],
    optionsEn: ['Translation and learning', 'Hiding books', 'Cutting off contact'],
    visualStepsAr: ['معرفة في مجتمع', 'ترجمة وتبادل', 'انتقال عبر الطرق', 'تعلم في أماكن جديدة'],
    visualStepsEn: ['Knowledge in a society', 'Translation and exchange', 'Travel along routes', 'Learning in new places']
  },
  {
    unit: 4, page: 102, titleAr: 'النهضة الأوربية', titleEn: 'The European Renaissance',
    focusAr: 'شهدت أوربا نهضة تجدد فيها الاهتمام بالفنون والعلوم والكتب القديمة. ساعد التعلم والطباعة والتبادل على نشر أفكار جديدة.',
    focusEn: 'Europe experienced a Renaissance that renewed interest in arts, sciences, and classical books. Learning, printing, and exchange helped new ideas spread.',
    questionAr: 'أي ابتكار ساعد على انتشار الكتب والأفكار؟', questionEn: 'Which innovation helped books and ideas spread?',
    optionsAr: ['الطباعة', 'البوصلة وحدها', 'المحراث الخشبي'],
    optionsEn: ['Printing', 'The compass alone', 'The wooden plough'],
    visualStepsAr: ['اهتمام بالمعرفة', 'كتب وأفكار جديدة', 'الطباعة والنشر', 'نهضة ثقافية'],
    visualStepsEn: ['Interest in knowledge', 'New books and ideas', 'Printing and publishing', 'Cultural renewal']
  },
  {
    unit: 5, page: 107, titleAr: 'خصائص الإنسان السوداني', titleEn: 'Characteristics of the Sudanese People',
    focusAr: 'يعيش في السودان أناس متنوعون في لغاتهم وعاداتهم وتجاربهم، وتجمعهم روابط الوطن والتعاون. احترام التنوع يقوي العيش المشترك.',
    focusEn: 'People in Sudan have varied languages, customs, and experiences, while homeland and cooperation connect them. Respect for diversity strengthens shared life.',
    questionAr: 'ما السلوك الذي يدعم التعايش في مجتمع متنوع؟', questionEn: 'Which behaviour supports life in a diverse community?',
    optionsAr: ['احترام الآخرين والتعاون معهم', 'السخرية من اختلافهم', 'رفض العمل المشترك'],
    optionsEn: ['Respecting others and cooperating with them', 'Mocking their differences', 'Refusing to work together'],
    visualStepsAr: ['أفراد متنوعون', 'احترام متبادل', 'تعاون يومي', 'مجتمع متماسك'],
    visualStepsEn: ['Diverse individuals', 'Mutual respect', 'Everyday cooperation', 'A connected community']
  },
  {
    unit: 5, page: 110, titleAr: 'خصائص المجتمع السوداني', titleEn: 'Characteristics of Sudanese Society',
    focusAr: 'المجتمع مجموعة من الناس تربطهم صلات ومؤسسات وعادات مشتركة. يتشكل المجتمع السوداني من جماعات متنوعة تتفاعل في الحياة اليومية.',
    focusEn: 'A society is a group of people connected through relationships, institutions, and customs. Sudanese society includes diverse groups interacting in daily life.',
    questionAr: 'ما الذي يصف المجتمع؟', questionEn: 'What describes a society?',
    optionsAr: ['ناس تجمعهم صلات وتفاعلات', 'شخص يعيش وحده بلا صلات', 'مكان خالٍ من السكان'],
    optionsEn: ['People connected through relationships and interaction', 'One person with no connections', 'An uninhabited place'],
    visualStepsAr: ['أفراد', 'صلات بينهم', 'تفاعل ومشاركة', 'مجتمع'],
    visualStepsEn: ['Individuals', 'Connections between them', 'Interaction and participation', 'A society']
  },
  {
    unit: 5, page: 114, titleAr: 'مميزات الأرض السودانية', titleEn: 'Features of the Land of Sudan',
    focusAr: 'تتنوع أرض السودان بين أقاليم النيل والسهول والمرتفعات والصحارى، وتختلف مواردها من مكان إلى آخر. يعتمد الناس على هذه الموارد ويحافظون عليها.',
    focusEn: 'Sudan’s land includes Nile regions, plains, highlands, and deserts, with resources that vary from place to place. People depend on these resources and care for them.',
    questionAr: 'لماذا تختلف موارد الأرض السودانية من منطقة إلى أخرى؟', questionEn: 'Why do Sudan’s land resources vary from region to region?',
    optionsAr: ['لتنوع الأقاليم والبيئات', 'لأن كل المناطق متطابقة', 'لعدم وجود تضاريس'],
    optionsEn: ['Because regions and environments vary', 'Because every region is identical', 'Because there is no landform variety'],
    visualStepsAr: ['تضاريس متنوعة', 'مياه وتربة', 'موارد محلية', 'استخدام ورعاية'],
    visualStepsEn: ['Varied landforms', 'Water and soil', 'Local resources', 'Use and care']
  },
  {
    unit: 5, page: 117, titleAr: 'إسهام السودان في الحضارة الإنسانية', titleEn: 'Sudan’s Contributions to Human Civilization',
    focusAr: 'أسهم سكان السودان قديمًا في مجالات مثل صناعة الفخار والحديد والكتابة المروية. وتظهر هذه الإنجازات كيف تطورت المهارات والمعارف وتبادلتها الشعوب.',
    focusEn: 'People in ancient Sudan contributed in areas such as pottery, ironworking, and Meroitic writing. These achievements show how skills and knowledge developed and travelled.',
    questionAr: 'أي إنجاز ارتبط بتاريخ السودان القديم؟', questionEn: 'Which achievement is linked to ancient Sudanese history?',
    optionsAr: ['الكتابة المروية', 'الطباعة بالحاسوب', 'بناء الأقمار الصناعية'],
    optionsEn: ['Meroitic writing', 'Computer printing', 'Building satellites'],
    visualStepsAr: ['مهارة ومعرفة', 'إنجاز محلي', 'تبادل مع الآخرين', 'إسهام حضاري'],
    visualStepsEn: ['Skill and knowledge', 'A local achievement', 'Exchange with others', 'A contribution to civilization']
  }
];

export const SUDAN_PRIMARY_HISTORY_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_HISTORY_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-history-g5-${order}`;
  const unit = SUDAN_PRIMARY_HISTORY_G5_BOOK.units[lesson.unit - 1];
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
    subtitleAr: `التاريخ والتربية الوطنية — الصف الخامس الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 History and National Education — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'HISTORY',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الخامس من مرحلة التعليم الأساسي',
    gradeLevelNameEn: 'Grade 5 Basic Level',
    termAr: 'التاريخ والتربية الوطنية — الصف الخامس',
    termEn: 'Grade 5 History and National Education',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في موضوع «${lesson.titleAr}»، ثم اذكر شيئًا تود معرفته عن الماضي.`,
    warmupHookEn: `Think about “${lesson.titleEn},” then name one thing you would like to learn about the past.`,
    learningOutcomesAr: [lesson.focusAr, `يذكر دليلًا أو مثالًا مرتبطًا بموضوع «${lesson.titleAr}».`],
    learningOutcomesEn: [lesson.focusEn, `Give one piece of evidence or example related to “${lesson.titleEn}.”`],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط: رتب خطوات المخطط، ثم تحدث عن الصلة بين كل خطوة والتي تليها.`,
      contentEn: `${lesson.focusEn}\n\nActivity: Put the diagram steps in order, then explain how each step connects to the next.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط تعليمي: ${lesson.titleAr}`,
        titleEn: `Learning Sequence: ${lesson.titleEn}`,
        captionAr: `أربع خطوات مترابطة للتفكير في موضوع «${lesson.titleAr}».`,
        captionEn: `Four connected steps for thinking about “${lesson.titleEn}.”`,
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
    topicEn: `p. ${lesson.page}`
  };
});
