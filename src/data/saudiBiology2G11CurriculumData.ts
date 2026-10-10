import type { Lecture } from '../types';

const sourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-CBM-GNRL-TRC2-SM1-BLOG2.1.pdf';
const sourceNoteAr =
  'عناوين الفصول والدروس وأرقام صفحاتها مأخوذة من غلاف وفهرس كتاب الأحياء 2-1 السعودي، طبعة 1448هـ/2026م، ص 5–6. تمت مراجعة الغلاف والفهرس فقط؛ الشرح والرسم والتقويم من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page numbers follow the cover and contents (pp. 5–6) of the Saudi Biology 2-1 textbook, 1448 AH/2026 edition. Only the cover and contents were checked; explanations, diagrams, and assessments are original platform material, not copied textbook pages.';

const chapters = [
  {
    titleAr: 'شوكيات الجلد واللافقاريات الحبلية',
    titleEn: 'Echinoderms and Invertebrate Chordates',
    pageRange: '10–33',
    topics: [
      ['1-1 خصائص شوكيات الجلد', 'Echinoderm Characteristics', '12'],
      ['1-2 اللافقاريات الحبلية', 'Invertebrate Chordates', '22']
    ],
    conceptsAr: [
      'تتميز شوكيات الجلد بخصائص تركيبية ووظيفية تساعدها على العيش في البيئات البحرية.',
      'تضم اللافقاريات الحبلية مجموعات لها صفات حبلية في مرحلة من دورة حياتها، مع اختلافها عن الفقاريات.'
    ],
    conceptsEn: [
      'Echinoderms have structural and functional traits that support life in marine environments.',
      'Invertebrate chordates include groups that display chordate features during a life stage while differing from vertebrates.'
    ],
    visualTitleAr: 'مقارنة خصائص مجموعات اللافقاريات',
    visualTitleEn: 'Comparing Invertebrate Group Characteristics',
    diagramType: 'digital_skills',
    stepsAr: ['مقارنة تركيب الجسم', 'تحديد الصفات المشتركة', 'تمييز الصفات الفارقة', 'ربط الصفة ببيئتها'],
    stepsEn: ['Compare body structures', 'Identify shared traits', 'Distinguish defining traits', 'Relate a trait to its habitat'],
    questionAr: 'ما أفضل طريقة لتمييز شوكيات الجلد عن اللافقاريات الحبلية؟',
    questionEn: 'What is the best way to distinguish echinoderms from invertebrate chordates?',
    optionsAr: ['مقارنة صفاتها التركيبية المميزة', 'الاعتماد على لونها وحده', 'اعتبار جميعها فقاريات', 'مقارنة حجمها فقط'],
    optionsEn: ['Compare their defining structural traits', 'Use color alone', 'Classify them all as vertebrates', 'Compare size only'],
    correctIndex: 0,
    explanationAr: 'تُصنف المجموعات بمقارنة صفاتها المشتركة والمميزة، لا بالاعتماد على مظهر واحد.',
    explanationEn: 'Groups are classified by comparing shared and defining traits, not by relying on one appearance.'
  },
  {
    titleAr: 'الأسماك والبرمائيات',
    titleEn: 'Fishes and Amphibians',
    pageRange: '34–65',
    topics: [
      ['2-1 الأسماك', 'Fishes', '36'],
      ['2-2 البرمائيات', 'Amphibians', '49']
    ],
    conceptsAr: [
      'تتكيف الأسماك مع الحياة المائية من خلال تراكيب وأجهزة تساعدها على الحركة والتنفس.',
      'تمر البرمائيات بتغيرات في دورة حياتها، وترتبط كثير من أنواعها بالبيئات المائية واليابسة.'
    ],
    conceptsEn: [
      'Fishes are adapted to aquatic life through structures and systems that support movement and respiration.',
      'Amphibians undergo life-cycle changes, and many species are associated with both aquatic and terrestrial habitats.'
    ],
    visualTitleAr: 'دورة حياة البرمائيات والتكيف',
    visualTitleEn: 'Amphibian Life Cycle and Adaptation',
    diagramType: 'digital_skills',
    stepsAr: ['بيض في الماء', 'يرقة مائية', 'تحول في تراكيب الجسم', 'فرد بالغ وبيئتان'],
    stepsEn: ['Eggs in water', 'Aquatic larva', 'Changes in body structures', 'Adult using two habitats'],
    questionAr: 'أي صفة تلائم كثيرًا من البرمائيات؟',
    questionEn: 'Which trait is characteristic of many amphibians?',
    optionsAr: ['ارتباط دورة حياتها بالماء واليابسة', 'وجود ريش يغطي الجسم', 'التنفس بالخياشيم طوال الحياة فقط', 'إنتاج بذور داخل مخاريط'],
    optionsEn: ['A life cycle associated with water and land', 'A body covered with feathers', 'Using gills only throughout life', 'Producing seeds in cones'],
    correctIndex: 0,
    explanationAr: 'تجمع دورة حياة كثير من البرمائيات بين طور مائي وتغيرات تقود إلى أفراد قادرة على العيش على اليابسة.',
    explanationEn: 'Many amphibians have an aquatic stage followed by changes that lead to adults able to live on land.'
  },
  {
    titleAr: 'الزواحف والطيور',
    titleEn: 'Reptiles and Birds',
    pageRange: '66–93',
    topics: [
      ['3-1 الزواحف', 'Reptiles', '68'],
      ['3-2 الطيور', 'Birds', '77']
    ],
    conceptsAr: [
      'تساعد صفات الزواحف على الحد من فقد الماء والتكاثر في البيئات البرية.',
      'تتكيف الطيور للطيران بصفات تركيبية ووظيفية، مع تنوعها في البيئات وأنماط المعيشة.'
    ],
    conceptsEn: [
      'Reptile traits help reduce water loss and support reproduction in terrestrial environments.',
      'Birds have structural and functional adaptations for flight, with diverse habitats and lifestyles.'
    ],
    visualTitleAr: 'ربط التكيف بوظيفة الجسم',
    visualTitleEn: 'Linking Adaptations to Body Function',
    diagramType: 'digital_skills',
    stepsAr: ['صفة تركيبية', 'أثرها الوظيفي', 'تفاعلها مع البيئة', 'ميزة البقاء والتكاثر'],
    stepsEn: ['Structural trait', 'Its functional effect', 'Interaction with the environment', 'Survival and reproductive advantage'],
    questionAr: 'كيف تساعد بعض صفات الزواحف على العيش في البيئات البرية؟',
    questionEn: 'How do some reptile traits support life in terrestrial environments?',
    optionsAr: ['تحد من فقد الماء وتدعم التكاثر على اليابسة', 'تجعلها تعتمد على الخياشيم دائمًا', 'تمنعها من الحركة', 'تنتج غذاءها بالبناء الضوئي'],
    optionsEn: ['They reduce water loss and support reproduction on land', 'They require gills at all times', 'They prevent movement', 'They make food by photosynthesis'],
    correctIndex: 0,
    explanationAr: 'تساعد تراكيب مثل الجلد الجاف ذي الحراشف والبيض الملائم على اليابسة على تقليل الاعتماد على الماء.',
    explanationEn: 'Features such as dry scaly skin and eggs adapted for land reduce dependence on water.'
  },
  {
    titleAr: 'الثدييات',
    titleEn: 'Mammals',
    pageRange: '94–121',
    topics: [
      ['4-1 خصائص الثدييات', 'Mammalian Characteristics', '96'],
      ['4-2 تنوع الثدييات', 'Mammalian Diversity', '107']
    ],
    conceptsAr: [
      'تتميز الثدييات بصفات مشتركة، منها الشعر والغدد اللبنية، مع تنوع في طرائق التكاثر.',
      'تتنوع الثدييات في أشكالها وبيئاتها، وتُصنف مجموعاتها بحسب صفاتها وطرائق نمو صغارها.'
    ],
    conceptsEn: [
      'Mammals share traits such as hair and mammary glands, while differing in reproductive strategies.',
      'Mammals vary in form and habitat, and groups are distinguished by traits and patterns of development.'
    ],
    visualTitleAr: 'صفات الثدييات وتنوعها',
    visualTitleEn: 'Mammalian Traits and Diversity',
    diagramType: 'digital_skills',
    stepsAr: ['صفة مشتركة', 'مجموعات متنوعة', 'اختلاف في التكاثر', 'تكيف مع البيئة'],
    stepsEn: ['Shared characteristic', 'Diverse groups', 'Different reproductive strategies', 'Adaptation to habitat'],
    questionAr: 'أي صفة تُعد من الخصائص المشتركة للثدييات؟',
    questionEn: 'Which trait is shared by mammals?',
    optionsAr: ['وجود الشعر في مرحلة من مراحل الحياة', 'وجود الريش', 'التنفس بالخياشيم', 'إنتاج الأبواغ'],
    optionsEn: ['Having hair at some stage of life', 'Having feathers', 'Breathing with gills', 'Producing spores'],
    correctIndex: 0,
    explanationAr: 'الشعر من الصفات الأساسية للثدييات، وقد يختلف ظهوره وكثافته بين الأنواع.',
    explanationEn: 'Hair is a defining mammalian trait, though its appearance and density vary among species.'
  },
  {
    titleAr: 'مقدمة في النباتات',
    titleEn: 'Introduction to Plants',
    pageRange: '122–147',
    topics: [
      ['5-1 النباتات اللاوعائية', 'Nonvascular Plants', '124'],
      ['5-2 النباتات الوعائية اللابذرية', 'Seedless Vascular Plants', '129'],
      ['5-3 النباتات الوعائية البذرية', 'Seed-Bearing Vascular Plants', '133']
    ],
    conceptsAr: [
      'تختلف مجموعات النباتات في وجود الأنسجة الوعائية والبذور، وتساعد هذه الصفات على فهم تنوعها.',
      'تسهم الأنسجة الوعائية في نقل الماء والمواد، بينما ترتبط البذور بحماية الجنين وانتشاره.'
    ],
    conceptsEn: [
      'Plant groups differ in vascular tissues and seeds, traits that help explain plant diversity.',
      'Vascular tissues transport water and materials, while seeds protect and disperse the embryo.'
    ],
    visualTitleAr: 'مقارنة مجموعات النباتات',
    visualTitleEn: 'Comparing Plant Groups',
    diagramType: 'plant_animal_cell',
    stepsAr: ['أنسجة وعائية؟', 'أبواغ أم بذور؟', 'تحديد المجموعة النباتية', 'ربط الصفة بالانتشار'],
    stepsEn: ['Vascular tissue?', 'Spores or seeds?', 'Identify the plant group', 'Relate traits to dispersal'],
    questionAr: 'ما الصفة التي تميز النباتات الوعائية عن النباتات اللاوعائية؟',
    questionEn: 'Which trait distinguishes vascular plants from nonvascular plants?',
    optionsAr: ['وجود أنسجة متخصصة لنقل الماء والمواد', 'إنتاج الأزهار في جميع الأنواع', 'العيش في الماء فقط', 'غياب الخلايا من تراكيبها'],
    optionsEn: ['Specialized tissues for transporting water and materials', 'Producing flowers in every species', 'Living only in water', 'Having no cells in their structures'],
    correctIndex: 0,
    explanationAr: 'تحتوي النباتات الوعائية أنسجة ناقلة، بينما تفتقر إليها النباتات اللاوعائية.',
    explanationEn: 'Vascular plants have transport tissues; nonvascular plants lack them.'
  },
  {
    titleAr: 'تركيب النباتات ووظائفها',
    titleEn: 'Plant Structure and Function',
    pageRange: '148–171',
    topics: [
      ['6-1 خلايا النبات وأنسجته', 'Plant Cells and Tissues', '152'],
      ['6-2 هرمونات النبات واستجاباتها', 'Plant Hormones and Responses', '158']
    ],
    conceptsAr: [
      'تتخصص خلايا النبات وأنسجته في وظائف مثل النقل والدعم والنمو.',
      'تنظم الهرمونات النباتية عمليات النمو، وتستجيب النباتات للمؤثرات البيئية بطرائق مختلفة.'
    ],
    conceptsEn: [
      'Plant cells and tissues specialize in functions such as transport, support, and growth.',
      'Plant hormones regulate growth processes, and plants respond to environmental stimuli in different ways.'
    ],
    visualTitleAr: 'من الخلية النباتية إلى استجابة النبات',
    visualTitleEn: 'From Plant Cell to Plant Response',
    diagramType: 'plant_animal_cell',
    stepsAr: ['خلية متخصصة', 'نسيج نباتي', 'نقل أو نمو', 'استجابة لمؤثر'],
    stepsEn: ['Specialized cell', 'Plant tissue', 'Transport or growth', 'Response to a stimulus'],
    questionAr: 'ما الدور العام للهرمونات النباتية؟',
    questionEn: 'What is the general role of plant hormones?',
    optionsAr: ['تنظيم النمو والاستجابة للمؤثرات', 'نقل الصفات الوراثية وحده', 'إنتاج التربة', 'إيقاف جميع عمليات الخلية'],
    optionsEn: ['Regulate growth and responses to stimuli', 'Carry hereditary information only', 'Produce soil', 'Stop all cellular processes'],
    correctIndex: 0,
    explanationAr: 'تعمل الهرمونات النباتية بوصفها إشارات كيميائية تنظم النمو وبعض استجابات النبات.',
    explanationEn: 'Plant hormones act as chemical signals that regulate growth and some plant responses.'
  },
  {
    titleAr: 'التكاثر في النباتات الزهرية',
    titleEn: 'Reproduction in Flowering Plants',
    pageRange: '172–195',
    topics: [
      ['7-1 الأزهار', 'Flowers', '174'],
      ['7-2 النباتات الزهرية', 'Flowering Plants', '181']
    ],
    conceptsAr: [
      'تؤدي أجزاء الزهرة أدوارًا في تكوين الأمشاج وحدوث التلقيح والإخصاب.',
      'ينتج عن الإخصاب بذور، وتساعد الثمار في حماية البذور وانتشارها.'
    ],
    conceptsEn: [
      'Flower structures contribute to gamete formation, pollination, and fertilization.',
      'Fertilization produces seeds, and fruits can protect and disperse them.'
    ],
    visualTitleAr: 'دورة التكاثر في النباتات الزهرية',
    visualTitleEn: 'Reproductive Cycle of Flowering Plants',
    diagramType: 'energy_transformation_chain',
    stepsAr: ['تكوين حبوب اللقاح', 'التلقيح', 'الإخصاب', 'بذور وانتشار'],
    stepsEn: ['Pollen formation', 'Pollination', 'Fertilization', 'Seeds and dispersal'],
    questionAr: 'ما الحدث الذي ينقل حبوب اللقاح إلى الجزء المستقبل في الزهرة؟',
    questionEn: 'What event transfers pollen to the receptive part of a flower?',
    optionsAr: ['التلقيح', 'الإنبات', 'النتح', 'التنفس الخلوي'],
    optionsEn: ['Pollination', 'Germination', 'Transpiration', 'Cellular respiration'],
    correctIndex: 0,
    explanationAr: 'التلقيح هو انتقال حبوب اللقاح إلى الميسم، ويسبق الإخصاب في دورة التكاثر.',
    explanationEn: 'Pollination is the transfer of pollen to the stigma and precedes fertilization.'
  },
  {
    titleAr: 'تركيب الخلية ووظائفها',
    titleEn: 'Cell Structure and Function',
    pageRange: '196–233',
    topics: [
      ['8-1 التراكيب الخلوية والعضيات', 'Cell Structures and Organelles', '198'],
      ['8-2 كيمياء الخلية', 'The Chemistry of the Cell', '215']
    ],
    conceptsAr: [
      'تعمل التراكيب والعضيات الخلوية بتكامل للمحافظة على أنشطة الخلية.',
      'تسهم الجزيئات الحيوية وتفاعلاتها في بناء الخلايا وأداء وظائفها.'
    ],
    conceptsEn: [
      'Cell structures and organelles work together to maintain cellular activities.',
      'Biomolecules and their interactions contribute to cell structure and function.'
    ],
    visualTitleAr: 'تركيب الخلية وعلاقته بوظائفها',
    visualTitleEn: 'Cell Structure and Its Relationship to Function',
    diagramType: 'dna_cell_biology',
    stepsAr: ['غشاء ينظم التبادل', 'عضيات متخصصة', 'جزيئات حيوية', 'وظائف خلوية متكاملة'],
    stepsEn: ['Membrane regulates exchange', 'Specialized organelles', 'Biomolecules', 'Integrated cellular functions'],
    questionAr: 'ما الفائدة من تخصص العضيات داخل الخلية؟',
    questionEn: 'What is the benefit of organelle specialization within a cell?',
    optionsAr: ['توزيع الوظائف بكفاءة بين تراكيب الخلية', 'إلغاء الحاجة إلى الغشاء الخلوي', 'جعل كل العضيات تؤدي وظيفة واحدة', 'منع حدوث التفاعلات الكيميائية'],
    optionsEn: ['Efficiently distribute functions among cell structures', 'Eliminate the need for a cell membrane', 'Make every organelle perform one identical function', 'Prevent chemical reactions'],
    correctIndex: 0,
    explanationAr: 'تخصص العضيات يتيح أداء وظائف مختلفة ومنسقة داخل الخلية.',
    explanationEn: 'Organelle specialization enables different, coordinated functions within the cell.'
  },
  {
    titleAr: 'الطاقة الخلوية',
    titleEn: 'Cellular Energy',
    pageRange: '234–259',
    topics: [
      ['9-1 كيف تحصل المخلوقات الحية على الطاقة؟', 'How Organisms Obtain Energy', '236'],
      ['9-2 البناء الضوئي', 'Photosynthesis', '241'],
      ['9-3 التنفس الخلوي', 'Cellular Respiration', '249']
    ],
    conceptsAr: [
      'تحتاج الخلايا إلى الطاقة لإتمام عملياتها، وتحوّل الجزيئات الحاملة للطاقة بين صور قابلة للاستخدام.',
      'يحوّل البناء الضوئي الطاقة الضوئية إلى طاقة كيميائية، وتحرر عملية التنفس الخلوي طاقة من الجزيئات العضوية.'
    ],
    conceptsEn: [
      'Cells need energy for their processes and transform energy-carrying molecules into usable forms.',
      'Photosynthesis converts light energy to chemical energy, while cellular respiration releases energy from organic molecules.'
    ],
    visualTitleAr: 'تحولات الطاقة في الخلية',
    visualTitleEn: 'Energy Transformations in Cells',
    diagramType: 'energy_transformation_chain',
    stepsAr: ['طاقة ضوئية', 'طاقة كيميائية مخزنة', 'تحلل جزيئات عضوية', 'طاقة تستخدمها الخلية'],
    stepsEn: ['Light energy', 'Stored chemical energy', 'Breakdown of organic molecules', 'Energy used by the cell'],
    questionAr: 'كيف تختلف وظيفة البناء الضوئي عن وظيفة التنفس الخلوي؟',
    questionEn: 'How does the role of photosynthesis differ from cellular respiration?',
    optionsAr: ['يخزن البناء الضوئي الطاقة، ويحرر التنفس الخلوي طاقة قابلة للاستخدام', 'يحدث البناء الضوئي في جميع الخلايا الحيوانية', 'يوقف التنفس الخلوي انتقال الطاقة', 'تنتج العمليتان المواد نفسها دائمًا'],
    optionsEn: ['Photosynthesis stores energy, while cellular respiration releases usable energy', 'Photosynthesis occurs in all animal cells', 'Cellular respiration stops energy transfer', 'Both processes always produce the same substances'],
    correctIndex: 0,
    explanationAr: 'يحوّل البناء الضوئي الطاقة ويخزنها في مركبات عضوية، ثم تستخلص الخلايا طاقة قابلة للاستخدام عبر التنفس الخلوي.',
    explanationEn: 'Photosynthesis transforms and stores energy in organic compounds; cells then extract usable energy through cellular respiration.'
  }
] as const;

export function getSaudiBiology2G11Curriculum(): Lecture[] {
  return chapters.map((chapter, index) => {
    const order = index + 1;
    const lectureId = `sa-biology2-1448-g11-health_life-${order}`;
    const topicListAr = chapter.topics.map(([title, , page]) => `${title} (ص ${page})`).join('؛ ');
    const topicListEn = chapter.topics.map(([, title, page]) => `${title} (p. ${page})`).join('; ');

    return {
      id: lectureId,
      order,
      titleAr: chapter.titleAr,
      titleEn: chapter.titleEn,
      subtitleAr: `الفصل ${order} — الأحياء 2-1`,
      subtitleEn: `Chapter ${order} — Biology 2-1`,
      descriptionAr: `${sourceNoteAr} موضوعات الفهرس: ${topicListAr}. صفحات الفصل والتقويم: ${chapter.pageRange}. المصدر: ${sourceUrl}`,
      descriptionEn: `${sourceNoteEn} Contents topics: ${topicListEn}. Chapter and review pages: ${chapter.pageRange}. Source: ${sourceUrl}`,
      topicAr: topicListAr,
      topicEn: topicListEn,
      durationMinutes: 45,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'BIOLOGY',
      gradeLevel: 'G11',
      educationType: 'PUBLIC',
      educationTrack: 'HEALTH_LIFE',
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'Second Secondary, Pathways System, 1448 AH/2026 edition',
      termAr: 'الفصل الدراسي الأول — الأحياء 2-1، طبعة 1448هـ',
      termEn: 'Semester 1 — Biology 2-1, 1448 AH edition',
      unitTitleAr: `الفصل ${order}: ${chapter.titleAr}`,
      unitTitleEn: `Chapter ${order}: ${chapter.titleEn}`,
      lessonNumberAr: `الفصل ${order}`,
      lessonNumberEn: `Chapter ${order}`,
      keyConceptsAr: [...chapter.conceptsAr],
      keyConceptsEn: [...chapter.conceptsEn],
      summaryAr: chapter.conceptsAr.join(' '),
      summaryEn: chapter.conceptsEn.join(' '),
      sections: [{
        titleAr: 'موضوعات الفصل كما وردت في فهرس الكتاب',
        titleEn: 'Chapter topics listed in the textbook contents',
        contentAr: `${topicListAr}. تمت مطابقة هذه العناوين وأرقام صفحاتها مع فهرس الكتاب. ${sourceNoteAr}`,
        contentEn: `${topicListEn}. These titles and page numbers were checked against the book contents. ${sourceNoteEn}`,
        diagram: {
          id: `${lectureId}-figure`,
          figureNumberAr: `شكل (${order}-1)`,
          figureNumberEn: `Figure (${order}-1)`,
          titleAr: chapter.visualTitleAr,
          titleEn: chapter.visualTitleEn,
          captionAr: 'رسم توضيحي أصلي من إعداد المنصة لربط المفاهيم الرئيسة في الفصل، وليس صورة من الكتاب.',
          captionEn: 'An original platform illustration connecting the chapter’s main concepts, not an image from the textbook.',
          diagramType: chapter.diagramType,
          visualSteps: chapter.stepsAr.map((labelAr, stepIndex) => ({
            labelAr,
            labelEn: chapter.stepsEn[stepIndex]
          }))
        }
      }],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم الفصل ${order}`,
        titleEn: `Chapter ${order} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-question-1`,
          textAr: chapter.questionAr,
          textEn: chapter.questionEn,
          optionsAr: [...chapter.optionsAr],
          optionsEn: [...chapter.optionsEn],
          correctIndex: chapter.correctIndex,
          conceptTestedAr: chapter.titleAr,
          conceptTestedEn: chapter.titleEn,
          explanationAr: chapter.explanationAr,
          explanationEn: chapter.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}
