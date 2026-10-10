import type { EducationTrack, Lecture } from '../types';

const sourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-CBM-TRC1-SM1-biog1.pdf';
const sourceNoteAr =
  'عناوين الفصول والدروس وأرقام الصفحات مأخوذة من فهرس كتاب الأحياء 1 السعودي، طبعة 1448هـ/2026م، ص 5–6. تمت مراجعة الغلاف والفهرس فقط؛ الشرح والرسم والتقويم من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page numbers follow the contents pages (pp. 5–6) of the Saudi Biology 1 textbook, 1448 AH/2026 edition. Only the cover and contents were checked; explanations, diagrams, and assessments are original platform material, not copied textbook pages.';

const chapters = [
  {
    titleAr: 'دراسة الحياة',
    titleEn: 'Studying Life',
    pageRange: '10–33',
    topics: [
      ['1-1 مدخل إلى علم الأحياء', 'Introduction to Biology', '12'],
      ['1-2 طبيعة العلم وطرائقه', 'The Nature of Science and Its Methods', '19']
    ],
    conceptsAr: [
      'يدرس علم الأحياء المخلوقات الحية وخصائصها وتنوعها وعلاقاتها ببيئاتها.',
      'تدعم الملاحظة والقياس وتحليل البيانات بناء تفسيرات علمية قابلة للفحص.'
    ],
    conceptsEn: [
      'Biology studies living organisms, their characteristics and diversity, and their relationships with environments.',
      'Observation, measurement, and data analysis support testable scientific explanations.'
    ],
    visualTitleAr: 'من ملاحظة الحياة إلى تفسيرها',
    visualTitleEn: 'From Observing Life to Explaining It',
    stepsAr: ['مخلوق أو ظاهرة حية', 'ملاحظة وطرح سؤال', 'جمع البيانات وتحليلها', 'استنتاج مدعوم بالأدلة'],
    stepsEn: ['Living organism or phenomenon', 'Observe and ask a question', 'Collect and analyze data', 'Evidence-supported conclusion'],
    questionAr: 'ما المجال الذي يدرسه علم الأحياء؟',
    questionEn: 'What does biology study?',
    optionsAr: ['المخلوقات الحية وخصائصها وعلاقاتها', 'حركة الكواكب فقط', 'تركيب الصخور وحده', 'التفاعلات الكيميائية غير الحيوية فقط'],
    optionsEn: ['Living organisms, their traits, and relationships', 'Only the motion of planets', 'Only the composition of rocks', 'Only nonliving chemical reactions'],
    correctIndex: 0,
    explanationAr: 'يهتم علم الأحياء بالمخلوقات الحية وخصائصها وتنوعها وتفاعلها مع البيئة.',
    explanationEn: 'Biology concerns living organisms, their characteristics and diversity, and their interactions with the environment.'
  },
  {
    titleAr: 'تنظيم تنوع الحياة',
    titleEn: 'Organizing the Diversity of Life',
    pageRange: '36–57',
    topics: [
      ['2-1 تاريخ التصنيف', 'History of Classification', '38'],
      ['2-2 التصنيف الحديث', 'Modern Classification', '45']
    ],
    conceptsAr: [
      'يساعد تصنيف المخلوقات الحية على تنظيم التنوع الحيوي وتسهيل دراسته.',
      'يعتمد التصنيف الحديث على أدلة وخصائص مشتركة وعلاقات بين المخلوقات.'
    ],
    conceptsEn: [
      'Classifying organisms helps organize biodiversity and makes it easier to study.',
      'Modern classification uses evidence, shared characteristics, and relationships among organisms.'
    ],
    visualTitleAr: 'من الصفات المشتركة إلى التصنيف',
    visualTitleEn: 'From Shared Traits to Classification',
    stepsAr: ['مقارنة الصفات', 'تحديد أوجه التشابه', 'تجميع المخلوقات', 'تسمية وتصنيف علمي'],
    stepsEn: ['Compare characteristics', 'Identify similarities', 'Group organisms', 'Scientific naming and classification'],
    questionAr: 'ما فائدة تصنيف المخلوقات الحية؟',
    questionEn: 'What is a benefit of classifying organisms?',
    optionsAr: ['تنظيم التنوع وتسهيل دراسة المخلوقات', 'إثبات أن جميع المخلوقات متطابقة', 'إلغاء الحاجة إلى الأدلة', 'تغيير صفات المخلوق الحي'],
    optionsEn: ['Organizing diversity and making organisms easier to study', 'Proving that all organisms are identical', 'Eliminating the need for evidence', 'Changing an organism’s traits'],
    correctIndex: 0,
    explanationAr: 'يوفر التصنيف طريقة منظمة للتعرف على المخلوقات ومقارنة خصائصها.',
    explanationEn: 'Classification provides an organized way to identify organisms and compare their characteristics.'
  },
  {
    titleAr: 'الفيروسات والبكتيريا',
    titleEn: 'Viruses and Bacteria',
    pageRange: '60–83',
    topics: [
      ['3-1 الفيروسات والبريونات', 'Viruses and Prions', '62'],
      ['3-2 البكتيريا', 'Bacteria', '69']
    ],
    conceptsAr: [
      'الفيروسات تراكيب غير خلوية تعتمد على خلايا العائل لإنتاج نسخ منها.',
      'البكتيريا مخلوقات حية وحيدة الخلية، وتختلف في تركيبها وتنوعها عن الفيروسات.'
    ],
    conceptsEn: [
      'Viruses are noncellular structures that rely on host cells to make copies of themselves.',
      'Bacteria are living single-celled organisms and differ from viruses in their organization and diversity.'
    ],
    visualTitleAr: 'مقارنة موجزة بين الفيروسات والبكتيريا',
    visualTitleEn: 'A Brief Comparison of Viruses and Bacteria',
    stepsAr: ['تركيب غير خلوي', 'دخول خلية عائل', 'تضاعف داخل العائل', 'بكتيريا خلية حية مستقلة'],
    stepsEn: ['Noncellular structure', 'Enter a host cell', 'Replicate inside the host', 'Bacterium: an independent living cell'],
    questionAr: 'ما الذي تحتاج إليه الفيروسات لتتكاثر؟',
    questionEn: 'What do viruses require to reproduce?',
    optionsAr: ['خلية عائل حية', 'ضوء الشمس وحده', 'تربة جافة فقط', 'خلية بكتيرية مكتملة دائمًا'],
    optionsEn: ['A living host cell', 'Sunlight alone', 'Only dry soil', 'Always a complete bacterial cell'],
    correctIndex: 0,
    explanationAr: 'لا تمتلك الفيروسات بنية خلوية مكتملة، وتعتمد على آليات خلية العائل للتضاعف.',
    explanationEn: 'Viruses lack complete cellular organization and depend on host-cell machinery to replicate.'
  },
  {
    titleAr: 'الطلائعيات',
    titleEn: 'Protists',
    pageRange: '88–115',
    topics: [
      ['4-1 مدخل إلى الطلائعيات', 'Introduction to Protists', '90'],
      ['4-2 تنوع الطلائعيات', 'Diversity of Protists', '94']
    ],
    conceptsAr: [
      'الطلائعيات حقيقية النوى، وتضم مجموعات متنوعة تختلف في صفاتها وطرائق حصولها على الغذاء.',
      'تساعد خصائص الخلايا والتغذية والحركة على وصف مجموعات الطلائعيات ومقارنتها.'
    ],
    conceptsEn: [
      'Protists are eukaryotes and include diverse groups with different traits and ways of obtaining food.',
      'Cell characteristics, nutrition, and movement help describe and compare protist groups.'
    ],
    visualTitleAr: 'تنوع الطلائعيات وطرائق معيشتها',
    visualTitleEn: 'Protist Diversity and Ways of Life',
    stepsAr: ['خلية حقيقية النوى', 'تنوع في البنية', 'طرائق مختلفة للتغذي', 'مجموعات طلائعية متنوعة'],
    stepsEn: ['Eukaryotic cell', 'Structural diversity', 'Different ways of feeding', 'Diverse protist groups'],
    questionAr: 'ما الصفة الخلوية التي تشترك فيها الطلائعيات؟',
    questionEn: 'What cellular feature do protists share?',
    optionsAr: ['خلايا حقيقية النوى', 'خلايا بلا مادة وراثية', 'أنسجة وأعضاء معقدة دائمًا', 'جدار خلوي من الكيتين في جميعها'],
    optionsEn: ['Eukaryotic cells', 'Cells with no genetic material', 'Always complex tissues and organs', 'A chitin cell wall in all of them'],
    correctIndex: 0,
    explanationAr: 'تضم الطلائعيات مخلوقات حقيقية النوى؛ أي إن خلاياها تحتوي نواة.',
    explanationEn: 'Protists are eukaryotes, meaning their cells contain a nucleus.'
  },
  {
    titleAr: 'الفطريات',
    titleEn: 'Fungi',
    pageRange: '120–142',
    topics: [
      ['5-1 مدخل إلى الفطريات', 'Introduction to Fungi', '122'],
      ['5-2 تنوع الفطريات وبيئتها', 'Fungal Diversity and Their Environment', '128']
    ],
    conceptsAr: [
      'الفطريات مخلوقات حقيقية النوى غير ذاتية التغذي، وتمتص المواد الغذائية من محيطها.',
      'تتنوع الفطريات في أشكالها وطرائق تكاثرها وأدوارها في الأنظمة البيئية.'
    ],
    conceptsEn: [
      'Fungi are eukaryotic heterotrophs that absorb nutrients from their surroundings.',
      'Fungi vary in form and reproduction and play different roles in ecosystems.'
    ],
    visualTitleAr: 'التغذي والانتشار في الفطريات',
    visualTitleEn: 'Feeding and Spread in Fungi',
    stepsAr: ['مادة عضوية في البيئة', 'إفراز إنزيمات وهضم خارجي', 'امتصاص المغذيات', 'نمو أو تكوين أبواغ'],
    stepsEn: ['Organic matter in the environment', 'Enzymes and external digestion', 'Nutrient absorption', 'Growth or spore formation'],
    questionAr: 'كيف تحصل الفطريات غالبًا على المواد الغذائية؟',
    questionEn: 'How do fungi commonly obtain nutrients?',
    optionsAr: ['تهضم خارجيا ثم تمتص المغذيات', 'تصنع غذاءها بالبناء الضوئي جميعها', 'تبتلع الغذاء بفم وأمعاء', 'تحصل على الطاقة من ضوء القمر'],
    optionsEn: ['They digest externally and then absorb nutrients', 'They all make food by photosynthesis', 'They swallow food through a mouth and intestine', 'They obtain energy from moonlight'],
    correctIndex: 0,
    explanationAr: 'تفرز الفطريات إنزيمات على الغذاء ثم تمتص الجزيئات الناتجة.',
    explanationEn: 'Fungi release enzymes onto food and then absorb the resulting molecules.'
  },
  {
    titleAr: 'مدخل إلى الحيوانات',
    titleEn: 'Introduction to Animals',
    pageRange: '146–175',
    topics: [
      ['6-1 خصائص الحيوانات', 'Animal Characteristics', '148'],
      ['6-2 مستويات بناء جسم الحيوان', 'Levels of Animal Body Organization', '154'],
      ['6-3 الإسفنجيات واللاسعات', 'Sponges and Cnidarians', '162']
    ],
    conceptsAr: [
      'الحيوانات مخلوقات حقيقية النوى متعددة الخلايا وغير ذاتية التغذي.',
      'تتنوع الحيوانات في مستويات التنظيم وبنية الجسم، ومنها الإسفنجيات واللاسعات.'
    ],
    conceptsEn: [
      'Animals are multicellular eukaryotes that obtain food from other organisms.',
      'Animals vary in levels of organization and body structure; sponges and cnidarians are among the groups studied.'
    ],
    visualTitleAr: 'مستويات التنظيم في جسم الحيوان',
    visualTitleEn: 'Levels of Organization in an Animal',
    stepsAr: ['خلية متخصصة', 'نسيج', 'عضو', 'جهاز في جسم الحيوان'],
    stepsEn: ['Specialized cell', 'Tissue', 'Organ', 'Animal body system'],
    questionAr: 'أي وصف ينطبق على الحيوانات؟',
    questionEn: 'Which description applies to animals?',
    optionsAr: ['مخلوقات حقيقية النوى متعددة الخلايا وغير ذاتية التغذي', 'مخلوقات بدائية النوى وحيدة الخلية جميعها', 'كائنات تصنع غذاءها بالتمثيل الضوئي جميعها', 'مواد غير حية لا تنمو'],
    optionsEn: ['Multicellular eukaryotes that are heterotrophic', 'All are single-celled prokaryotes', 'All make food by photosynthesis', 'Nonliving materials that do not grow'],
    correctIndex: 0,
    explanationAr: 'تتميز الحيوانات بأنها متعددة الخلايا وحقيقية النوى وتعتمد على غيرها في الغذاء.',
    explanationEn: 'Animals are multicellular eukaryotes that depend on other organisms for food.'
  },
  {
    titleAr: 'الديدان والرخويات',
    titleEn: 'Worms and Mollusks',
    pageRange: '180–209',
    topics: [
      ['7-1 الديدان المفلطحة', 'Flatworms', '182'],
      ['7-2 الديدان الأسطوانية والدوارات', 'Roundworms and Rotifers', '187'],
      ['7-3 الرخويات', 'Mollusks', '192'],
      ['7-4 الديدان الحلقية', 'Annelids', '200']
    ],
    conceptsAr: [
      'تختلف مجموعات الديدان والرخويات في شكل الجسم والتناظر والتجزؤ وطرائق المعيشة.',
      'تساعد صفات الجسم والأجهزة الحيوية على التمييز بين المجموعات الحيوانية.'
    ],
    conceptsEn: [
      'Worm and mollusk groups differ in body shape, symmetry, segmentation, and ways of life.',
      'Body features and organ systems help distinguish animal groups.'
    ],
    visualTitleAr: 'مقارنة صفات الديدان والرخويات',
    visualTitleEn: 'Comparing Worm and Mollusk Traits',
    stepsAr: ['شكل الجسم وتناظره', 'وجود التجزؤ', 'تراكيب وأجهزة متخصصة', 'مقارنة المجموعات'],
    stepsEn: ['Body shape and symmetry', 'Presence of segmentation', 'Specialized structures and systems', 'Compare groups'],
    questionAr: 'ما الصفة التي تميز الديدان الحلقية؟',
    questionEn: 'Which trait distinguishes annelids?',
    optionsAr: ['جسم مقسم إلى حلقات', 'جسم مغطى بريش', 'أطراف مفصلية وستة أرجل', 'خلايا بلا نواة'],
    optionsEn: ['A body divided into segments', 'A body covered with feathers', 'Jointed limbs and six legs', 'Cells without nuclei'],
    correctIndex: 0,
    explanationAr: 'يشير اسم الديدان الحلقية إلى أجسامها المقسمة إلى وحدات أو حلقات متتابعة.',
    explanationEn: 'The name annelids refers to their bodies being divided into repeated segments or rings.'
  },
  {
    titleAr: 'المفصليات',
    titleEn: 'Arthropods',
    pageRange: '214–238',
    topics: [
      ['8-1 خصائص المفصليات', 'Arthropod Characteristics', '216'],
      ['8-2 تنوع المفصليات', 'Arthropod Diversity', '224'],
      ['8-3 الحشرات وأشباهها', 'Insects and Their Relatives', '229']
    ],
    conceptsAr: [
      'تتميز المفصليات بأطراف مفصلية وهيكل خارجي وأجسام مقسمة إلى أجزاء.',
      'تضم المفصليات مجموعات متنوعة، منها الحشرات وأشباهها.'
    ],
    conceptsEn: [
      'Arthropods have jointed appendages, an exoskeleton, and segmented bodies.',
      'Arthropods include diverse groups, including insects and their relatives.'
    ],
    visualTitleAr: 'الصفات الرئيسة للمفصليات',
    visualTitleEn: 'Key Arthropod Characteristics',
    stepsAr: ['هيكل خارجي', 'جسم مقسم', 'زوائد مفصلية', 'تنوع مجموعات المفصليات'],
    stepsEn: ['Exoskeleton', 'Segmented body', 'Jointed appendages', 'Diversity of arthropod groups'],
    questionAr: 'أي مجموعة من الصفات تميز المفصليات؟',
    questionEn: 'Which set of traits characterizes arthropods?',
    optionsAr: ['هيكل خارجي وجسم مقسم وزوائد مفصلية', 'عمود فقري وريش', 'جسم لين بلا أي زوائد', 'خلية واحدة بلا نواة'],
    optionsEn: ['An exoskeleton, segmented body, and jointed appendages', 'A backbone and feathers', 'A soft body with no appendages', 'One cell without a nucleus'],
    correctIndex: 0,
    explanationAr: 'تعد الزوائد المفصلية والهيكل الخارجي وتقسيم الجسم سمات أساسية للمفصليات.',
    explanationEn: 'Jointed appendages, an exoskeleton, and body segmentation are key arthropod traits.'
  }
] as const;

export function getSaudiBiologyG10Curriculum(track: EducationTrack): Lecture[] {
  return chapters.map((chapter, index) => {
    const order = index + 1;
    const lectureId = `sa-biology1-1448-g10-${track.toLowerCase()}-${order}`;
    const topicListAr = chapter.topics.map(([title, , page]) => `${title} (ص ${page})`).join('؛ ');
    const topicListEn = chapter.topics.map(([, title, page]) => `${title} (p. ${page})`).join('; ');

    return {
      id: lectureId,
      order,
      titleAr: chapter.titleAr,
      titleEn: chapter.titleEn,
      subtitleAr: `الفصل ${order} — الأحياء 1`,
      subtitleEn: `Chapter ${order} — Biology 1`,
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
      gradeLevel: 'G10',
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الأول الثانوي — السنة الأولى المشتركة، نظام المسارات، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'First Secondary — Common First Year, Pathways System, 1448 AH/2026 edition',
      termAr: 'الفصل الدراسي الأول — كتاب الأحياء 1، طبعة 1448هـ',
      termEn: 'Semester 1 — Biology 1, 1448 AH edition',
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
          captionAr: 'رسم توضيحي أصلي من إعداد المنصة لربط المفاهيم الرئيسة في الفصل.',
          captionEn: 'Original platform illustration connecting the chapter’s main concepts.',
          diagramType: 'digital_skills',
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
