import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_SCIENCE_G3_BOOK = {
  title: 'العلوم — الصف الثالث الابتدائي',
  titleEn: 'Science — Grade 3 Primary',
  edition: 'جمهورية السودان — وزارة التربية والتعليم — بخت الرضا',
  units: [
    { titleAr: 'عالم الأحياء', titleEn: 'The Living World', firstPage: 1, lastPage: 28 },
    { titleAr: 'المادة', titleEn: 'Matter', firstPage: 29, lastPage: 38 },
    { titleAr: 'الطاقة', titleEn: 'Energy', firstPage: 39, lastPage: 54 }
  ]
} as const;

interface ScienceLesson {
  unit: number;
  page: number;
  lastPage: number;
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

const lessons: ScienceLesson[] = [
  {
    unit: 1, page: 1, lastPage: 5, titleAr: 'الكائنات الحية والأشياء غير الحية', titleEn: 'Living and Non-living Things',
    focusAr: 'نصنف ما حولنا إلى كائنات حية تحتاج إلى الهواء والماء والغذاء، مثل الإنسان والنبات والحيوان، وأشياء غير حية لا تحتاج إليها لتبقى حية، مثل الصخور والكرسي.',
    focusEn: 'Classify things around us as living things, which need air, water, and food, such as people, plants, and animals, or non-living things, which do not need them to stay alive, such as rocks and chairs.',
    questionAr: 'أيٌّ من الآتي كائن حي يحتاج إلى الماء والغذاء؟', questionEn: 'Which of these is a living thing that needs water and food?',
    optionsAr: ['النبات', 'الصخرة', 'القلم'], optionsEn: ['A plant', 'A rock', 'A pencil'],
    visualStepsAr: ['لاحظ الأشياء', 'اسأل: هل تحتاج؟', 'صنّفها', 'حي أو غير حي'],
    visualStepsEn: ['Observe things', 'Ask: does it need them?', 'Sort them', 'Living or non-living']
  },
  {
    unit: 1, page: 6, lastPage: 8, titleAr: 'خصائص الكائنات الحية', titleEn: 'Characteristics of Living Things',
    focusAr: 'تتميز الكائنات الحية بأنها تنمو وتتحرك وتحس بما حولها وتنتج أفرادًا جديدة. ويبين تعاقب مراحل حياة الكائن كيف ينمو من بداية حياته إلى الكبر.',
    focusEn: 'Living things grow, move, sense what is around them, and produce new living things. The stages in a life cycle show how an organism changes as it grows.',
    questionAr: 'أي صفة من صفات الكائن الحي تساعد على استمرار نوعه؟', questionEn: 'Which characteristic helps a kind of living thing continue?',
    optionsAr: ['إنتاج أفراد جديدة', 'التحول إلى صخر', 'عدم النمو'], optionsEn: ['Producing new living things', 'Turning into a rock', 'Not growing'],
    visualStepsAr: ['بداية الحياة', 'نمو', 'حركة وإحساس', 'أفراد جديدة'],
    visualStepsEn: ['Beginning of life', 'Growth', 'Movement and sensing', 'New offspring']
  },
  {
    unit: 1, page: 9, lastPage: 11, titleAr: 'حاجات الكائنات الحية', titleEn: 'What Living Things Need',
    focusAr: 'تحتاج الكائنات الحية إلى الهواء والماء والغذاء. ويحتاج النبات كذلك إلى ضوء الشمس، ويصنع غذاءه بنفسه، بينما يحصل الإنسان والحيوان على الغذاء من مصادر أخرى.',
    focusEn: 'Living things need air, water, and food. Plants also need sunlight and make their own food, while people and animals get food from other sources.',
    questionAr: 'ما الذي يحتاج إليه النبات ليصنع غذاءه؟', questionEn: 'What does a plant need to make its food?',
    optionsAr: ['ضوء الشمس', 'الزجاج', 'الصخور فقط'], optionsEn: ['Sunlight', 'Glass', 'Rocks only'],
    visualStepsAr: ['هواء', 'ماء', 'ضوء وغذاء', 'حياة ونمو'],
    visualStepsEn: ['Air', 'Water', 'Light and food', 'Life and growth']
  },
  {
    unit: 1, page: 12, lastPage: 14, titleAr: 'مواطن الكائنات الحية', titleEn: 'Habitats of Living Things',
    focusAr: 'الموطن هو المكان الذي يعيش فيه الكائن الحي. توجد مواطن على اليابسة، مثل الصحراء والغابة والمناطق القطبية، ومواطن مائية عذبة كالنهر والبركة أو مالحة كالبحر والمحيط.',
    focusEn: 'A habitat is the place where a living thing lives. Land habitats include deserts, forests, and polar regions; water habitats include fresh water such as rivers and ponds, and salty water such as seas and oceans.',
    questionAr: 'أي موطن مائي مالح؟', questionEn: 'Which habitat contains salty water?',
    optionsAr: ['البحر', 'النهر', 'البركة'], optionsEn: ['The sea', 'The river', 'The pond'],
    visualStepsAr: ['كائن حي', 'يحتاج مكانًا', 'يابسة أو ماء', 'موطن مناسب'],
    visualStepsEn: ['A living thing', 'Needs a place', 'Land or water', 'A suitable habitat']
  },
  {
    unit: 1, page: 15, lastPage: 15, titleAr: 'جسم الإنسان', titleEn: 'The Human Body',
    focusAr: 'يتكون جسم الإنسان من ثلاثة أجزاء رئيسة: الرأس والجذع والأطراف. ويشمل الجذع الصدر والبطن، أما الأطراف فتشمل الذراعين والرجلين.',
    focusEn: 'The human body has three main parts: the head, trunk, and limbs. The trunk includes the chest and abdomen, while the limbs include the arms and legs.',
    questionAr: 'ما الأجزاء الرئيسة الثلاثة لجسم الإنسان؟', questionEn: 'What are the three main parts of the human body?',
    optionsAr: ['الرأس والجذع والأطراف', 'العين والأنف والفم', 'الصدر واليد والقدم'], optionsEn: ['Head, trunk, and limbs', 'Eye, nose, and mouth', 'Chest, hand, and foot'],
    visualStepsAr: ['الرأس', 'الجذع', 'الأطراف', 'جسم الإنسان'],
    visualStepsEn: ['Head', 'Trunk', 'Limbs', 'Human body']
  },
  {
    unit: 1, page: 16, lastPage: 16, titleAr: 'أعضاء الحس', titleEn: 'The Sense Organs',
    focusAr: 'نتعرف إلى الأشياء بحواسنا الخمس: نرى بالعينين، ونسمع بالأذنين، ونشم بالأنف، ونتذوق باللسان، ونلمس بالجلد. تساعدنا الحواس على ملاحظة ما حولنا.',
    focusEn: 'We use five senses to learn about things: eyes help us see, ears hear, the nose smells, the tongue tastes, and the skin feels. Our senses help us notice the world around us.',
    questionAr: 'أي عضو نستخدمه للإحساس بالحرارة والبرودة؟', questionEn: 'Which organ do we use to feel hot and cold?',
    optionsAr: ['الجلد', 'الأذن', 'اللسان'], optionsEn: ['The skin', 'The ear', 'The tongue'],
    visualStepsAr: ['العينان: البصر', 'الأذنان: السمع', 'الأنف والفم: الشم والذوق', 'الجلد: اللمس'],
    visualStepsEn: ['Eyes: sight', 'Ears: hearing', 'Nose and mouth: smell and taste', 'Skin: touch']
  },
  {
    unit: 1, page: 17, lastPage: 17, titleAr: 'حاسة السمع', titleEn: 'The Sense of Hearing',
    focusAr: 'نستخدم الأذنين لسماع الأصوات وتمييز مصادرها. نحافظ عليهما بعدم إدخال أجسام حادة فيهما، ونتجنب الصراخ قرب الأذن أو ضربها أثناء اللعب.',
    focusEn: 'We use our ears to hear sounds and identify where they come from. Protect your ears by keeping sharp objects out of them and avoiding loud shouting or hitting near them.',
    questionAr: 'بأي عضو نميز الأصوات؟', questionEn: 'Which organ helps us distinguish sounds?',
    optionsAr: ['الأذن', 'الأنف', 'الجلد'], optionsEn: ['The ear', 'The nose', 'The skin'],
    visualStepsAr: ['يصدر صوت', 'تلتقطه الأذن', 'ننتبه إليه', 'نحافظ على السمع'],
    visualStepsEn: ['A sound is made', 'The ear detects it', 'We notice it', 'We protect our hearing']
  },
  {
    unit: 1, page: 18, lastPage: 18, titleAr: 'حاسة البصر', titleEn: 'The Sense of Sight',
    focusAr: 'نستخدم العينين لرؤية الأشياء عندما يوجد الضوء، ولا نرى بوضوح في الظلام. نحافظ على البصر بتجنب النظر إلى الشمس أو الضوء القوي، والقراءة في مكان جيد الإضاءة.',
    focusEn: 'We use our eyes to see when there is light, and cannot see clearly in darkness. Protect your sight by never looking at the Sun or bright lights and by reading in a well-lit place.',
    questionAr: 'متى نستطيع رؤية الأشياء؟', questionEn: 'When can we see things?',
    optionsAr: ['عندما يتوفر الضوء', 'في الظلام التام', 'عند إغماض العينين'], optionsEn: ['When there is light', 'In complete darkness', 'With our eyes closed'],
    visualStepsAr: ['يسقط الضوء', 'تصل الصورة للعين', 'نرى الشيء', 'نحمي العينين'],
    visualStepsEn: ['Light shines', 'The image reaches the eye', 'We see the object', 'We protect our eyes']
  },
  {
    unit: 1, page: 19, lastPage: 19, titleAr: 'حاسة الشم', titleEn: 'The Sense of Smell',
    focusAr: 'يساعدنا الأنف على تمييز الروائح المختلفة، مثل رائحة البرتقال أو العطر. والشم يساعد الإنسان والحيوان على التعرف إلى أشياء في البيئة.',
    focusEn: 'The nose helps us notice different smells, such as an orange or perfume. Smell helps people and animals learn about things in their surroundings.',
    questionAr: 'ما العضو الذي نستخدمه لتمييز الروائح؟', questionEn: 'Which organ do we use to notice smells?',
    optionsAr: ['الأنف', 'العين', 'الأذن'], optionsEn: ['The nose', 'The eye', 'The ear'],
    visualStepsAr: ['رائحة في الهواء', 'تصل إلى الأنف', 'نميز الرائحة', 'نستجيب لها'],
    visualStepsEn: ['A smell is in the air', 'It reaches the nose', 'We notice the smell', 'We respond to it']
  },
  {
    unit: 1, page: 20, lastPage: 20, titleAr: 'حاسة الذوق', titleEn: 'The Sense of Taste',
    focusAr: 'نستخدم اللسان لتذوق الطعام والشراب وتمييز مذاقها. يساعدنا التذوق على وصف ما نأكله، مع اختيار طعام نظيف وآمن.',
    focusEn: 'We use the tongue to taste food and drinks and notice their flavours. Taste helps us describe what we eat; always choose clean, safe food.',
    questionAr: 'ما العضو الذي يساعدنا على تذوق الطعام؟', questionEn: 'Which organ helps us taste food?',
    optionsAr: ['اللسان', 'الأذن', 'اليد'], optionsEn: ['The tongue', 'The ear', 'The hand'],
    visualStepsAr: ['طعام أو شراب', 'يلامس اللسان', 'نميز المذاق', 'نصف الطعم'],
    visualStepsEn: ['Food or drink', 'Touches the tongue', 'We notice its taste', 'We describe the flavour']
  },
  {
    unit: 1, page: 21, lastPage: 22, titleAr: 'حاسة اللمس وصحة الجلد', titleEn: 'Touch and Skin Care',
    focusAr: 'يساعد الجلد واليدان على الإحساس بصفات الأشياء، كالنعومة والخشونة والصلابة والبرودة. نحافظ على صحة الجلد بنظافته بالماء والصابون، ونتجنب لمس الأشياء الخطرة.',
    focusEn: 'The skin and hands help us feel properties such as smoothness, roughness, hardness, and coolness. Keep skin clean with soap and water, and do not touch dangerous objects.',
    questionAr: 'أي عضو يساعدنا على معرفة أن الشيء خشن؟', questionEn: 'Which organ helps us feel that something is rough?',
    optionsAr: ['الجلد', 'الأنف', 'العين'], optionsEn: ['The skin', 'The nose', 'The eye'],
    visualStepsAr: ['اليد تلمس شيئًا', 'الجلد يستقبل الإحساس', 'نميز صفته', 'نحافظ على الجلد'],
    visualStepsEn: ['A hand touches an object', 'The skin senses it', 'We notice its property', 'We care for our skin']
  },
  {
    unit: 1, page: 23, lastPage: 24, titleAr: 'النباتات وأشكالها وأحجامها', titleEn: 'Plants: Shapes and Sizes',
    focusAr: 'النباتات كائنات حية، وتختلف في أشكالها وأحجامها. فمنها الحشائش والأعشاب الصغيرة، ومنها الشجيرات والأشجار الكبيرة، ويمكن ملاحظة تنوعها في الحديقة أو المدرسة.',
    focusEn: 'Plants are living things, and they differ in shape and size. Some are small grasses and herbs, while others are larger shrubs and trees. We can observe this variety in a garden or schoolyard.',
    questionAr: 'أي مجموعة تضم نباتات كبيرة الحجم؟', questionEn: 'Which group includes large plants?',
    optionsAr: ['الأشجار', 'الحشائش فقط', 'الأعشاب الصغيرة فقط'], optionsEn: ['Trees', 'Grasses only', 'Small herbs only'],
    visualStepsAr: ['نبات صغير', 'عشب أو حشيشة', 'شجيرة', 'شجرة كبيرة'],
    visualStepsEn: ['A small plant', 'Herb or grass', 'A shrub', 'A large tree']
  },
  {
    unit: 1, page: 25, lastPage: 28, titleAr: 'مجموعات الحيوانات', titleEn: 'Animal Groups',
    focusAr: 'نصنف الحيوانات بحسب صفاتها إلى ثدييات وطيور وزواحف وأسماك وبرمائيات وحشرات. فالثدييات تلد وترضع صغارها، بينما تبيض مجموعات كثيرة أخرى، مثل الطيور والأسماك.',
    focusEn: 'Animals can be grouped by their characteristics as mammals, birds, reptiles, fish, amphibians, and insects. Mammals give birth and feed their young milk, while many other groups, such as birds and fish, lay eggs.',
    questionAr: 'أي مجموعة من الحيوانات تلد وترضع صغارها؟', questionEn: 'Which animal group gives birth and feeds its young milk?',
    optionsAr: ['الثدييات', 'الطيور', 'الأسماك'], optionsEn: ['Mammals', 'Birds', 'Fish'],
    visualStepsAr: ['لاحظ صفات الحيوان', 'قارن بين الحيوانات', 'حدد المجموعة', 'ثدييات أو طيور أو غيرها'],
    visualStepsEn: ['Observe an animal’s traits', 'Compare animals', 'Identify the group', 'Mammals, birds, or another group']
  },
  {
    unit: 2, page: 29, lastPage: 31, titleAr: 'المادة من حولنا', titleEn: 'Matter Around Us',
    focusAr: 'تتكون الأشياء من مواد مختلفة؛ فقد يصنع الشيء من الخشب أو البلاستيك أو الزجاج أو الطين أو الورق أو المطاط. وقد يتكون الشيء الواحد من مادة واحدة أو من أكثر من مادة.',
    focusEn: 'Objects are made from different materials, such as wood, plastic, glass, clay, paper, or rubber. One object may be made from a single material or from several materials.',
    questionAr: 'ممّ يمكن أن يصنع الكتاب؟', questionEn: 'What can a book be made from?',
    optionsAr: ['الورق', 'الماء فقط', 'الهواء'], optionsEn: ['Paper', 'Water only', 'Air'],
    visualStepsAr: ['شيء حولنا', 'نلاحظ مادته', 'نسمي المادة', 'قد يجمع مواد'],
    visualStepsEn: ['An object around us', 'Observe its material', 'Name the material', 'It may combine materials']
  },
  {
    unit: 2, page: 32, lastPage: 33, titleAr: 'خواص المواد', titleEn: 'Properties of Materials',
    focusAr: 'للمواد خواص تساعدنا على وصفها وتمييزها. نستخدم حواسنا لملاحظة اللون والشكل والحجم والملمس، كما يمكن وصف خواص أخرى مثل الصلابة والهشاشة والشفافية والخفة والمتانة.',
    focusEn: 'Materials have properties that help us describe and distinguish them. Our senses can notice colour, shape, size, and texture; other properties include hardness, brittleness, transparency, lightness, and strength.',
    questionAr: 'أيٌّ مما يأتي خاصية فيزيائية يمكن ملاحظتها؟', questionEn: 'Which of these is a physical property we can observe?',
    optionsAr: ['اللون', 'اسم صاحب الشيء', 'مكان شراء الشيء'], optionsEn: ['Colour', 'The owner’s name', 'Where it was bought'],
    visualStepsAr: ['اختر مادة', 'لاحظ اللون والشكل', 'تحسس الملمس', 'سجل الخواص'],
    visualStepsEn: ['Choose a material', 'Notice colour and shape', 'Feel its texture', 'Record the properties']
  },
  {
    unit: 2, page: 34, lastPage: 35, titleAr: 'تصنيف المواد', titleEn: 'Classifying Materials',
    focusAr: 'نصنف المواد بجمع الأشياء التي تشترك في صفة، مثل اللون أو الشكل أو المادة المصنوعة منها. ويمكن أيضًا تصنيف الأشياء بحسب استخدامها، مثل مواد البناء وأواني الطهي والأثاث.',
    focusEn: 'We classify materials by grouping objects that share a property, such as colour, shape, or what they are made from. Objects can also be grouped by use, such as building materials, cooking vessels, and furniture.',
    questionAr: 'على أي أساس يمكن جمع الأشياء في مجموعة واحدة؟', questionEn: 'What can be used to group objects together?',
    optionsAr: ['صفة مشتركة بينها', 'أسماؤها فقط', 'ترتيب شرائها'], optionsEn: ['A property they share', 'Their names only', 'The order they were bought'],
    visualStepsAr: ['اجمع أشياء', 'لاحظ خواصها', 'اختر صفة مشتركة', 'كوّن مجموعة'],
    visualStepsEn: ['Collect objects', 'Observe their properties', 'Choose a shared property', 'Make a group']
  },
  {
    unit: 2, page: 36, lastPage: 38, titleAr: 'استخدام المواد واختيارها', titleEn: 'Uses and Choice of Materials',
    focusAr: 'نختار المادة لصنع الشيء بحسب خواصها؛ فالمتانة والخفة تجعلان البلاستيك مناسبًا لبعض الأشياء، وسهولة الطي تناسب القماش، وسهولة التشكيل تناسب الصلصال. وقد يصنع الشيء من مواد متعددة.',
    focusEn: 'We choose a material for an object according to its properties. Plastic can be useful when lightness and strength are needed, cloth can be folded easily, and clay is easy to shape. An object may use several materials.',
    questionAr: 'لماذا نختار القماش لصنع الملابس؟', questionEn: 'Why is cloth chosen for making clothes?',
    optionsAr: ['لأنه يمكن طيه وارتداؤه', 'لأنه شفاف مثل الزجاج', 'لأنه صلب كالحجر'], optionsEn: ['It can be folded and worn', 'It is transparent like glass', 'It is hard like stone'],
    visualStepsAr: ['حدد الشيء المطلوب', 'قارن خواص المواد', 'اختر مادة مناسبة', 'اصنع الشيء واستعمله'],
    visualStepsEn: ['Decide what to make', 'Compare material properties', 'Choose a suitable material', 'Make and use the object']
  },
  {
    unit: 3, page: 39, lastPage: 42, titleAr: 'مفهوم الطاقة وأشكالها', titleEn: 'Energy and Its Forms',
    focusAr: 'الطاقة هي القدرة على إحداث تغيير أو بذل شغل. نلاحظ أشكالًا للطاقة في حياتنا، مثل الضوء والحرارة والصوت والحركة والكهرباء، وتحتاج الكائنات والأشياء إلى الطاقة لتعمل.',
    focusEn: 'Energy is the ability to cause change or do work. We notice forms of energy in daily life, such as light, heat, sound, movement, and electricity. Living things and objects need energy to function.',
    questionAr: 'أيٌّ مما يأتي صورة من صور الطاقة؟', questionEn: 'Which of these is a form of energy?',
    optionsAr: ['الضوء', 'الكرسي', 'الكتاب'], optionsEn: ['Light', 'A chair', 'A book'],
    visualStepsAr: ['مصدر للطاقة', 'ضوء أو حرارة أو حركة', 'يحدث تأثير', 'نستفيد من الطاقة'],
    visualStepsEn: ['An energy source', 'Light, heat, or movement', 'An effect occurs', 'We use the energy']
  },
  {
    unit: 3, page: 43, lastPage: 43, titleAr: 'الضوء وانتقاله', titleEn: 'Light and How It Travels',
    focusAr: 'الضوء صورة من صور الطاقة يمكن رؤيتها، ومصدره الأساسي على سطح الأرض هو الشمس. ينتقل الضوء في خطوط مستقيمة، ويمكن ملاحظة ذلك عندما تصطف الثقوب في طريقه.',
    focusEn: 'Light is a form of energy that we can see, and the Sun is Earth’s main source of light. Light travels in straight lines, which can be observed when holes are lined up in its path.',
    questionAr: 'كيف ينتقل الضوء؟', questionEn: 'How does light travel?',
    optionsAr: ['في خطوط مستقيمة', 'في دوائر حول الأشياء', 'في خطوط متعرجة دائمًا'], optionsEn: ['In straight lines', 'In circles around objects', 'Always in zigzags'],
    visualStepsAr: ['الشمس مصدر للضوء', 'ينطلق الضوء', 'يسير بخط مستقيم', 'نرى الأشياء المضيئة'],
    visualStepsEn: ['The Sun is a light source', 'Light travels outward', 'It moves in a straight line', 'We see illuminated objects']
  },
  {
    unit: 3, page: 44, lastPage: 44, titleAr: 'الظل', titleEn: 'Shadows',
    focusAr: 'يتكون الظل عندما يحجب جسم معتم الضوء عن جزء من سطح خلفه. لذلك يظهر الظل في الجهة المقابلة لمصدر الضوء، ويتغير موضعه بحسب موضع الضوء والجسم.',
    focusEn: 'A shadow forms when an opaque object blocks light from reaching part of a surface behind it. The shadow appears on the side away from the light, and its position depends on where the light and object are.',
    questionAr: 'ماذا يلزم لتكوين ظل واضح؟', questionEn: 'What is needed to form a clear shadow?',
    optionsAr: ['ضوء وجسم معتم', 'ماء ومرآة', 'هواء وجسم شفاف فقط'], optionsEn: ['Light and an opaque object', 'Water and a mirror', 'Air and only a transparent object'],
    visualStepsAr: ['مصدر ضوء', 'جسم معتم يحجب الضوء', 'سطح خلف الجسم', 'يتكون الظل'],
    visualStepsEn: ['A light source', 'An opaque object blocks light', 'A surface behind it', 'A shadow forms']
  },
  {
    unit: 3, page: 45, lastPage: 46, titleAr: 'الأجسام الشفافة والمعتمة', titleEn: 'Transparent and Opaque Objects',
    focusAr: 'تختلف المواد في مرور الضوء خلالها: تسمح المادة الشفافة بمرور الضوء ونرى الأشياء من خلالها بوضوح، وتسمح شبه الشفافة بمرور بعضه، أما المادة المعتمة فلا تسمح بمروره.',
    focusEn: 'Materials differ in how much light passes through them. A transparent material lets light through so objects can be seen clearly; a translucent material lets some light through; an opaque material blocks light.',
    questionAr: 'أي مادة تسمح برؤية الأشياء من خلالها بوضوح؟', questionEn: 'Which material lets us see objects clearly through it?',
    optionsAr: ['الزجاج الشفاف', 'الكرتون المقوى', 'قطعة خشب'], optionsEn: ['Clear glass', 'Thick cardboard', 'A piece of wood'],
    visualStepsAr: ['سلط الضوء على المادة', 'شفافة: يمر الضوء', 'شبه شفافة: يمر بعضه', 'معتمة: تحجبه'],
    visualStepsEn: ['Shine light on the material', 'Transparent: light passes', 'Translucent: some passes', 'Opaque: light is blocked']
  },
  {
    unit: 3, page: 47, lastPage: 50, titleAr: 'مصادر الكهرباء', titleEn: 'Sources of Electricity',
    focusAr: 'نحصل على الكهرباء من مصادر منها البطارية والمولد الكهربائي. للبطاريات أحجام وأنواع مختلفة، وتستخدم لتشغيل أجهزة مثل المصباح اليدوي، ويولد دينمو الدراجة الكهرباء عند دورانه.',
    focusEn: 'Electricity comes from sources such as batteries and electric generators. Batteries come in different sizes and types and can power devices such as a flashlight; a bicycle dynamo generates electricity as it turns.',
    questionAr: 'أي مصدر كهربائي يمكن أن يشغل مصباحًا يدويًا؟', questionEn: 'Which source of electricity can power a flashlight?',
    optionsAr: ['البطارية', 'قطعة قماش', 'كوب ماء'], optionsEn: ['A battery', 'A piece of cloth', 'A cup of water'],
    visualStepsAr: ['بطارية أو مولد', 'تنتج كهرباء', 'تنتقل عبر الأسلاك', 'تشغل جهازًا'],
    visualStepsEn: ['A battery or generator', 'Produces electricity', 'It travels through wires', 'Powers a device']
  },
  {
    unit: 3, page: 51, lastPage: 54, titleAr: 'الدائرة الكهربائية والمفتاح', titleEn: 'Electric Circuits and the Switch',
    focusAr: 'تحتاج الدائرة البسيطة إلى مصدر كهرباء كالبطارية وأسلاك ومصباح. يضيء المصباح عندما تكون الدائرة مغلقة ومتصلة، ولا يضيء إذا انقطعت. يفتح المفتاح الدائرة ويغلقها؛ ولا نلمس الكهرباء أو الأسلاك بأيدٍ مبللة.',
    focusEn: 'A simple circuit needs a power source such as a battery, wires, and a bulb. The bulb lights when the connected circuit is closed and goes out when the path is broken. A switch opens or closes the circuit; never handle electricity or wires with wet hands.',
    questionAr: 'متى يضيء المصباح في الدائرة؟', questionEn: 'When does a bulb light in a circuit?',
    optionsAr: ['عندما تكون الدائرة مغلقة', 'عندما يكون السلك مقطوعًا', 'عندما تكون الدائرة مفتوحة'], optionsEn: ['When the circuit is closed', 'When a wire is broken', 'When the circuit is open'],
    visualStepsAr: ['بطارية توفر الكهرباء', 'أسلاك توصل الأجزاء', 'مفتاح يغلق المسار', 'مصباح يضيء'],
    visualStepsEn: ['A battery supplies electricity', 'Wires connect the parts', 'A switch closes the path', 'The bulb lights']
  }
];

export const SUDAN_PRIMARY_SCIENCE_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_SCIENCE_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-science-g3-${order}`;
  const unit = SUDAN_PRIMARY_SCIENCE_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));
  const pageRangeEn = lesson.lastPage === lesson.page ? `p. ${lesson.page}` : `pp. ${lesson.page}–${lesson.lastPage}`;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `العلوم — الصف الثالث الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 3 Science — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'GENERAL_SCIENCE',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان — العلوم — الصف الثالث الابتدائي',
    gradeLevelNameEn: 'Republic of Sudan — Grade 3 Primary Science',
    ministryAr: 'وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
    ministryEn: 'Ministry of Education — National Center for Curricula and Educational Research — Bakht Al-Ruda',
    termAr: 'العلوم — الصف الثالث',
    termEn: 'Grade 3 Science',
    unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `لاحظ شيئًا من حولك يرتبط بموضوع «${lesson.titleAr}». ما الذي تستطيع أن تكتشفه عنه؟`,
    warmupHookEn: `Notice something around you connected to “${lesson.titleEn}.” What can you discover about it?`,
    learningOutcomesAr: [lesson.focusAr, `يجيب عن سؤال يوضح فهمه لموضوع «${lesson.titleAr}».`],
    learningOutcomesEn: [lesson.focusEn, `Answer a question to show understanding of “${lesson.titleEn}.”`],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nاقرأ المخطط خطوة خطوة، ثم اشرح ما تعلمته بكلماتك واربطه بمثال من بيئتك.`,
      contentEn: `${lesson.focusEn}\n\nRead the diagram one step at a time, then explain what you learned in your own words and connect it to an example around you.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط: ${lesson.titleAr}`,
        titleEn: `Diagram: ${lesson.titleEn}`,
        captionAr: `أربع خطوات بصرية لتوضيح «${lesson.titleAr}».`,
        captionEn: `Four visual steps explaining “${lesson.titleEn}.”`,
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
