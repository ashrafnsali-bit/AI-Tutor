import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_SCIENCE_G4_BOOK = {
  title: 'العلوم — الصف الرابع الابتدائي',
  titleEn: 'Natural Science — Grade 4 Primary',
  edition: 'جمهورية السودان — الطبعة الأولى — 2021',
  units: [
    { titleAr: 'الجهاز الحركي في الإنسان', titleEn: 'The Human Musculoskeletal System', firstPage: 1, lastPage: 14 },
    { titleAr: 'النباتات', titleEn: 'Plants', firstPage: 15, lastPage: 24 },
    { titleAr: 'الحيوانات', titleEn: 'Animals', firstPage: 25, lastPage: 35 },
    { titleAr: 'بيئات الكائنات الحية', titleEn: 'Environments of Living Things', firstPage: 36, lastPage: 42 },
    { titleAr: 'المواد', titleEn: 'Materials', firstPage: 43, lastPage: 55 },
    { titleAr: 'الهواء', titleEn: 'Air', firstPage: 56, lastPage: 69 },
    { titleAr: 'الصوت', titleEn: 'Sound', firstPage: 70, lastPage: 80 },
    { titleAr: 'الحرارة', titleEn: 'Heat', firstPage: 81, lastPage: 90 }
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
    unit: 1, page: 2, lastPage: 5, titleAr: 'الهيكل العظمي', titleEn: 'The Skeleton',
    focusAr: 'يتكون الهيكل العظمي من عظام كثيرة متصلة، ويعطي الجسم شكله ويسنده. تحمي بعض العظام أعضاء مهمة؛ فالجمجمة تحيط بالدماغ، والقفص الصدري يحمي القلب والرئتين.',
    focusEn: 'The skeleton is made of many connected bones. It supports the body and gives it shape. Some bones protect important organs: the skull surrounds the brain, and the rib cage protects the heart and lungs.',
    questionAr: 'أي جزء من الهيكل العظمي يحيط بالدماغ ويحميه؟', questionEn: 'Which part of the skeleton surrounds and protects the brain?',
    optionsAr: ['الجمجمة', 'القفص الصدري', 'عظام القدم'], optionsEn: ['The skull', 'The rib cage', 'The bones of the foot'],
    visualStepsAr: ['عظام كثيرة', 'تتصل معًا', 'تكوّن هيكلًا', 'يسند الجسم ويحميه'],
    visualStepsEn: ['Many bones', 'Connect together', 'Form a skeleton', 'Support and protect the body']
  },
  {
    unit: 1, page: 6, lastPage: 9, titleAr: 'وظائف الهيكل العظمي', titleEn: 'Functions of the Skeleton',
    focusAr: 'يساعد الهيكل العظمي الجسم على الوقوف ويحافظ على شكله، ويحمي أعضاء داخلية، كما تعمل العظام مع العضلات والمفاصل لتمكيننا من الحركة. فالعظام وحدها لا تحرك الجسم.',
    focusEn: 'The skeleton helps the body stand and keeps its shape. It protects internal organs, and bones work with muscles and joints so we can move. Bones alone cannot move the body.',
    questionAr: 'كيف تساعد العظام على حركة الجسم؟', questionEn: 'How do bones help the body move?',
    optionsAr: ['تعمل مع العضلات والمفاصل', 'تصنع الهواء', 'تذيب الطعام'], optionsEn: ['They work with muscles and joints', 'They make air', 'They dissolve food'],
    visualStepsAr: ['العظام تسند', 'المفصل يصل العظام', 'العضلة تشد العظم', 'يتحرك الجسم'],
    visualStepsEn: ['Bones support', 'A joint connects bones', 'A muscle pulls a bone', 'The body moves']
  },
  {
    unit: 1, page: 10, lastPage: 14, titleAr: 'العضلات', titleEn: 'Muscles',
    focusAr: 'ترتبط العضلات ببعض العظام، وعندما تنقبض أو ترتخي تسحب العظام عند المفاصل فتحدث الحركة. تعمل عضلات الذراع في أزواج؛ تنقبض إحداها بينما ترتخي الأخرى.',
    focusEn: 'Muscles attach to some bones. When a muscle contracts or relaxes, it pulls bones at joints and produces movement. Arm muscles work in pairs: one contracts while the other relaxes.',
    questionAr: 'ماذا يحدث للعضلة عندما تنقبض؟', questionEn: 'What happens to a muscle when it contracts?',
    optionsAr: ['تقصر وتشد العظم', 'تتحول إلى عظم', 'تتوقف عن الاتصال بالجسم'], optionsEn: ['It shortens and pulls a bone', 'It turns into bone', 'It stops connecting to the body'],
    visualStepsAr: ['عضلة متصلة بعظم', 'تنقبض العضلة', 'تشد العظم عند المفصل', 'تحدث الحركة'],
    visualStepsEn: ['A muscle attaches to a bone', 'The muscle contracts', 'It pulls the bone at a joint', 'Movement happens']
  },
  {
    unit: 2, page: 15, lastPage: 15, titleAr: 'أجزاء النبات', titleEn: 'Parts of a Plant',
    focusAr: 'يتكون النبات غالبًا من جذور وساق وأوراق وأزهار. وقد ينتج ثمارًا وبذورًا. تختلف أشكال هذه الأجزاء بين النباتات، لكن لكل جزء شكل يساعده على أداء عمله.',
    focusEn: 'A plant usually has roots, a stem, leaves, and flowers. It may also produce fruits and seeds. These parts look different in different plants, and each has a form suited to its job.',
    questionAr: 'أي جزء من النبات يثبت النبات في التربة؟', questionEn: 'Which plant part anchors the plant in the soil?',
    optionsAr: ['الجذور', 'الأزهار', 'الأوراق'], optionsEn: ['The roots', 'The flowers', 'The leaves'],
    visualStepsAr: ['جذور في التربة', 'ساق فوقها', 'أوراق وأزهار', 'نبات كامل'],
    visualStepsEn: ['Roots in the soil', 'A stem above them', 'Leaves and flowers', 'A whole plant']
  },
  {
    unit: 2, page: 16, lastPage: 17, titleAr: 'وظائف أجزاء النبات', titleEn: 'Functions of Plant Parts',
    focusAr: 'تمتص الجذور الماء من التربة وتثبت النبات، وتحمل الساق الأوراق والأزهار. تصنع الأوراق الغذاء للنبات، وتساعد الأزهار على تكوين الثمار والبذور في كثير من النباتات.',
    focusEn: 'Roots absorb water from the soil and anchor the plant. The stem holds leaves and flowers. Leaves make food for the plant, and flowers help many plants form fruits and seeds.',
    questionAr: 'أي جزء يحمل الأوراق ويرفعها نحو الضوء؟', questionEn: 'Which part holds the leaves up toward the light?',
    optionsAr: ['الساق', 'الجذر', 'البذرة'], optionsEn: ['The stem', 'The root', 'The seed'],
    visualStepsAr: ['الجذر يمتص الماء', 'الساق يحمل النبات', 'الورقة تصنع الغذاء', 'الزهرة تكوّن البذور'],
    visualStepsEn: ['The root absorbs water', 'The stem supports the plant', 'The leaf makes food', 'The flower forms seeds']
  },
  {
    unit: 2, page: 18, lastPage: 24, titleAr: 'النبات يصنع غذاءه', titleEn: 'Plants Make Their Own Food',
    focusAr: 'تصنع الأوراق غذاء النبات بمساعدة ضوء الشمس والماء والهواء. يصل الماء من الجذور، وتستقبل الأوراق الضوء والهواء. يحتاج النبات إلى هذه المواد لينمو، ولا يصنع غذاءه من التربة وحدها.',
    focusEn: 'Leaves make food for the plant with the help of sunlight, water, and air. Water comes from the roots, while leaves receive light and air. The plant needs these to grow; soil alone does not make its food.',
    questionAr: 'ما مصدر الطاقة الذي يساعد الورقة على صنع الغذاء؟', questionEn: 'What energy source helps a leaf make food?',
    optionsAr: ['ضوء الشمس', 'صوت الرياح', 'ظل الصخور'], optionsEn: ['Sunlight', 'The sound of wind', 'The shade of rocks'],
    visualStepsAr: ['ماء من الجذور', 'هواء يصل إلى الورقة', 'ضوء الشمس', 'تصنع الورقة الغذاء'],
    visualStepsEn: ['Water from the roots', 'Air reaches the leaf', 'Sunlight shines', 'The leaf makes food']
  },
  {
    unit: 3, page: 26, lastPage: 29, titleAr: 'الحركة في الحيوانات', titleEn: 'Movement in Animals',
    focusAr: 'تتحرك الحيوانات بطرائق تناسب أجسامها وبيئاتها. تمشي بعض الحيوانات أو تجري، ويطير بعضها بالأجنحة، وتسبح حيوانات أخرى باستخدام الزعانف أو أطرافها.',
    focusEn: 'Animals move in ways suited to their bodies and environments. Some walk or run, some fly with wings, and others swim using fins or their limbs.',
    questionAr: 'ما الذي يساعد السمكة على السباحة؟', questionEn: 'What helps a fish swim?',
    optionsAr: ['الزعانف', 'الأجنحة', 'الجذور'], optionsEn: ['Fins', 'Wings', 'Roots'],
    visualStepsAr: ['لاحظ جسم الحيوان', 'حدد أعضاء الحركة', 'اربطها بالبيئة', 'اختر طريقة الحركة'],
    visualStepsEn: ['Observe the animal’s body', 'Identify its moving parts', 'Relate them to its habitat', 'Name how it moves']
  },
  {
    unit: 3, page: 30, lastPage: 31, titleAr: 'التغذية في الحيوانات', titleEn: 'Feeding in Animals',
    focusAr: 'تحصل الحيوانات على غذائها من كائنات أخرى أو من أجزاء منها. تأكل الحيوانات العاشبة النباتات، واللاحمة حيوانات أخرى، بينما تتناول القوارت أنواعًا مختلفة من الغذاء.',
    focusEn: 'Animals get food from other living things or their parts. Herbivores eat plants, carnivores eat other animals, and omnivores eat different kinds of food.',
    questionAr: 'ماذا تأكل الحيوانات العاشبة؟', questionEn: 'What do herbivores eat?',
    optionsAr: ['النباتات', 'الحجارة', 'الماء فقط'], optionsEn: ['Plants', 'Stones', 'Only water'],
    visualStepsAr: ['ابحث عن غذاء الحيوان', 'نباتات أو حيوانات', 'قارن أنواع الغذاء', 'عاشب أو لاحم أو قارت'],
    visualStepsEn: ['Find the animal’s food', 'Plants or animals', 'Compare food types', 'Herbivore, carnivore, or omnivore']
  },
  {
    unit: 3, page: 32, lastPage: 35, titleAr: 'غطاء الحيوانات', titleEn: 'Animal Coverings',
    focusAr: 'تغطي أجسام الحيوانات مواد مختلفة، مثل الشعر والريش والحراشف والجلد. قد يساعد الغطاء الحيوان على حمايته أو تدفئته أو تمويهه، وتختلف أغطية الحيوانات بحسب نوعها وبيئتها.',
    focusEn: 'Animals have different body coverings, such as hair, feathers, scales, and skin. A covering may protect, warm, or camouflage an animal. Coverings vary with the animal and its environment.',
    questionAr: 'أي غطاء يوجد على جسم الطيور؟', questionEn: 'Which covering is found on birds?',
    optionsAr: ['الريش', 'الحراشف', 'الشعر الكثيف دائمًا'], optionsEn: ['Feathers', 'Scales', 'Always thick hair'],
    visualStepsAr: ['لاحظ جسم الحيوان', 'تعرف إلى غطائه', 'اسأل كيف يساعده', 'غطاء يناسب البيئة'],
    visualStepsEn: ['Observe the animal', 'Identify its covering', 'Ask how it helps', 'A covering suited to its habitat']
  },
  {
    unit: 4, page: 37, lastPage: 39, titleAr: 'تكيف الكائنات الحية للعيش في البيئة اليابسة', titleEn: 'Adaptations for Living on Land',
    focusAr: 'تساعد صفات الجسم وسلوك الكائن الحي على العيش في بيئته. فقد تساعد الأرجل على الحركة فوق اليابسة، وتقلل الأغطية الواقية فقد الماء أو تحمي من الحر. وتتنوع التكيفات بين الكائنات.',
    focusEn: 'Body features and behaviors help living things survive in their environments. Legs can help an animal move on land, and protective coverings can reduce water loss or shield it from heat. Adaptations vary among organisms.',
    questionAr: 'كيف تساعد الأرجل القوية حيوانًا يعيش على اليابسة؟', questionEn: 'How can strong legs help an animal that lives on land?',
    optionsAr: ['تساعده على الحركة', 'تساعده على صنع ضوء الشمس', 'تجعله يعيش بلا ماء'], optionsEn: ['They help it move', 'They help it make sunlight', 'They let it live without water'],
    visualStepsAr: ['ظروف البيئة اليابسة', 'صفة في جسم الكائن', 'تساعده على أداء عمل', 'يعيش في بيئته'],
    visualStepsEn: ['Conditions on land', 'A body feature', 'It helps with a task', 'The organism lives in its habitat']
  },
  {
    unit: 4, page: 40, lastPage: 40, titleAr: 'البيئة المائية', titleEn: 'The Aquatic Environment',
    focusAr: 'تعيش كائنات كثيرة في الماء، مثل الأسماك والنباتات المائية. تساعد الخياشيم بعض الحيوانات على أخذ الأكسجين من الماء، وتساعد الزعانف على السباحة. وتختلف البيئات المائية بين العذبة والمالحة.',
    focusEn: 'Many living things live in water, including fish and aquatic plants. Gills help some animals take oxygen from water, and fins help with swimming. Aquatic environments may be fresh or salty.',
    questionAr: 'أي عضو يساعد السمكة على أخذ الأكسجين من الماء؟', questionEn: 'Which organ helps a fish take oxygen from water?',
    optionsAr: ['الخياشيم', 'الرئتان فقط', 'الأوراق'], optionsEn: ['Gills', 'Only lungs', 'Leaves'],
    visualStepsAr: ['ماء عذب أو مالح', 'كائن يعيش في الماء', 'صفة تساعده', 'حياة في البيئة المائية'],
    visualStepsEn: ['Fresh or salty water', 'An organism lives in water', 'A feature helps it', 'Life in an aquatic environment']
  },
  {
    unit: 4, page: 41, lastPage: 42, titleAr: 'حماية بيئة الكائنات الحية', titleEn: 'Protecting Living Things’ Environments',
    focusAr: 'تعتمد الكائنات الحية على بيئاتها للحصول على الماء والغذاء والمأوى. نحمي هذه البيئات بعدم رمي النفايات، والمحافظة على الماء والنباتات، وعدم إيذاء الحيوانات أو تدمير مساكنها.',
    focusEn: 'Living things depend on their environments for water, food, and shelter. We can protect habitats by not littering, conserving water and plants, and avoiding harm to animals or their homes.',
    questionAr: 'أي عمل يساعد على حماية بيئة الكائنات الحية؟', questionEn: 'Which action helps protect living things’ environments?',
    optionsAr: ['وضع النفايات في مكانها', 'تلويث النهر', 'إتلاف أعشاش الطيور'], optionsEn: ['Putting waste in its proper place', 'Polluting a river', 'Damaging birds’ nests'],
    visualStepsAr: ['بيئة توفر حاجات الكائن', 'تجنب تلويثها', 'حافظ على مواردها', 'تبقى آمنة للكائنات'],
    visualStepsEn: ['A habitat provides what organisms need', 'Avoid polluting it', 'Care for its resources', 'It stays safe for living things']
  },
  {
    unit: 5, page: 44, lastPage: 46, titleAr: 'خواص المواد', titleEn: 'Properties of Materials',
    focusAr: 'لكل مادة خواص يمكن ملاحظتها، مثل اللون والملمس والصلابة والمرونة. نقارن المواد بهذه الخواص ونختار المادة المناسبة للغرض؛ فالزجاج شفاف، والمطاط مرن.',
    focusEn: 'Each material has properties we can observe, such as color, texture, hardness, and flexibility. We compare these properties to choose a material for a purpose; glass is transparent and rubber is flexible.',
    questionAr: 'أي خاصية تجعل المطاط مناسبًا للتمدد والانثناء؟', questionEn: 'Which property makes rubber suitable for stretching and bending?',
    optionsAr: ['المرونة', 'الشفافية', 'الهشاشة'], optionsEn: ['Flexibility', 'Transparency', 'Brittleness'],
    visualStepsAr: ['اختر مادة', 'لاحظ خواصها', 'قارنها بغيرها', 'اختر استعمالًا مناسبًا'],
    visualStepsEn: ['Choose a material', 'Observe its properties', 'Compare it with others', 'Choose a suitable use']
  },
  {
    unit: 5, page: 47, lastPage: 49, titleAr: 'حالات المادة', titleEn: 'States of Matter',
    focusAr: 'توجد المادة في حالات منها الصلبة والسائلة والغازية. يحتفظ الجسم الصلب بشكله غالبًا، ويأخذ السائل شكل الوعاء، أما الغاز فينتشر ليملأ الحيز المتاح له.',
    focusEn: 'Matter exists in states including solid, liquid, and gas. A solid usually keeps its shape, a liquid takes the shape of its container, and a gas spreads to fill the space available to it.',
    questionAr: 'أي حالة من المادة تأخذ شكل الوعاء؟', questionEn: 'Which state of matter takes the shape of its container?',
    optionsAr: ['السائلة', 'الصلبة', 'لا شيء منها'], optionsEn: ['Liquid', 'Solid', 'Neither'],
    visualStepsAr: ['مادة صلبة', 'تسخين أو تبريد', 'سائل أو غاز', 'حالة تختلف بظروفها'],
    visualStepsEn: ['A solid material', 'Heating or cooling', 'A liquid or a gas', 'A state affected by conditions']
  },
  {
    unit: 5, page: 50, lastPage: 52, titleAr: 'تغير المواد', titleEn: 'Changes in Materials',
    focusAr: 'قد تتغير المواد عند تسخينها أو تبريدها أو خلطها. فالجليد ينصهر فيتحول إلى ماء سائل، وقد يتجمد الماء فيعود صلبًا. نلاحظ التغير ونصف ما حدث للمادة.',
    focusEn: 'Materials can change when heated, cooled, or mixed. Ice melts into liquid water, and water can freeze and become solid again. We observe the change and describe what happened to the material.',
    questionAr: 'ماذا يحدث للجليد عندما يدفأ؟', questionEn: 'What happens to ice when it warms?',
    optionsAr: ['ينصهر إلى ماء سائل', 'يتحول إلى خشب', 'يصبح أكثر صلابة دائمًا'], optionsEn: ['It melts into liquid water', 'It turns into wood', 'It always becomes harder'],
    visualStepsAr: ['مادة قبل التغير', 'تسخين أو تبريد', 'تتغير حالتها أو صفاتها', 'لاحظ النتيجة'],
    visualStepsEn: ['Material before a change', 'Heat or cool it', 'Its state or properties change', 'Observe the result']
  },
  {
    unit: 5, page: 53, lastPage: 55, titleAr: 'استخدام المواد', titleEn: 'Uses of Materials',
    focusAr: 'نختار المواد لصنع الأشياء وفق خواصها. يستخدم الخشب لصنع بعض الأثاث، والزجاج للنوافذ لأنه شفاف، والمعادن في أدوات كثيرة لقوتها. وقد تُستخدم المادة الواحدة لأغراض متعددة.',
    focusEn: 'We choose materials for objects according to their properties. Wood is used for some furniture, glass for windows because it is transparent, and metals for many tools because they are strong. One material can have many uses.',
    questionAr: 'لماذا يستخدم الزجاج في كثير من النوافذ؟', questionEn: 'Why is glass used in many windows?',
    optionsAr: ['لأنه شفاف', 'لأنه يمتص الماء كله', 'لأنه لين مثل القماش'], optionsEn: ['Because it is transparent', 'Because it absorbs all water', 'Because it is soft like cloth'],
    visualStepsAr: ['حدد حاجة الشيء', 'قارن خواص المواد', 'اختر مادة مناسبة', 'اصنع أو استخدم الشيء'],
    visualStepsEn: ['Identify what an object needs', 'Compare material properties', 'Choose a suitable material', 'Make or use the object']
  },
  {
    unit: 6, page: 57, lastPage: 58, titleAr: 'وجود الهواء', titleEn: 'The Presence of Air',
    focusAr: 'الهواء موجود حولنا، مع أننا لا نراه. نشعر به عندما يتحرك كنسيم، ويمكن ملاحظة أنه يشغل حيزًا عندما ينفخ بالونًا أو يدفع شراعًا. تحتاج الكائنات الحية إلى الهواء.',
    focusEn: 'Air is all around us even though we cannot see it. We feel it moving as a breeze, and notice that it takes up space when it inflates a balloon or pushes a sail. Living things need air.',
    questionAr: 'ما الدليل على أن الهواء يشغل حيزًا؟', questionEn: 'What is evidence that air takes up space?',
    optionsAr: ['ينتفخ البالون عند ملئه', 'لا يمكن تحريك الهواء', 'يختفي الماء في كل وعاء'], optionsEn: ['A balloon expands when filled', 'Air cannot be moved', 'Water disappears in every container'],
    visualStepsAr: ['هواء حولنا', 'يدخل البالون', 'يمتلئ ويأخذ حيزًا', 'نلاحظ وجود الهواء'],
    visualStepsEn: ['Air is around us', 'It enters a balloon', 'The balloon fills and takes space', 'We observe that air is present']
  },
  {
    unit: 6, page: 59, lastPage: 61, titleAr: 'الغازات المكونة للهواء', titleEn: 'Gases That Make Up Air',
    focusAr: 'الهواء خليط من غازات، وأكبر أجزائه غاز النيتروجين، ويليه الأكسجين، مع كميات قليلة من غازات أخرى. تحتاج أجسامنا إلى الأكسجين في التنفس، وتستخدم النباتات ثاني أكسيد الكربون لصنع الغذاء.',
    focusEn: 'Air is a mixture of gases. Nitrogen makes up the largest part, followed by oxygen, with small amounts of other gases. Our bodies need oxygen for breathing, and plants use carbon dioxide to make food.',
    questionAr: 'أي غاز نحتاج إليه في عملية التنفس؟', questionEn: 'Which gas do we need for breathing?',
    optionsAr: ['الأكسجين', 'النيتروجين وحده', 'بخار الماء وحده'], optionsEn: ['Oxygen', 'Nitrogen alone', 'Water vapor alone'],
    visualStepsAr: ['هواء خليط غازات', 'نيتروجين أكثر', 'أكسجين وغازات أخرى', 'لكل غاز دور'],
    visualStepsEn: ['Air is a mixture of gases', 'More nitrogen', 'Oxygen and other gases', 'Each gas has a role']
  },
  {
    unit: 6, page: 62, lastPage: 63, titleAr: 'خواص الهواء', titleEn: 'Properties of Air',
    focusAr: 'الهواء غاز لا لون له ولا شكل ثابت، ويشغل حيزًا ويمكن أن يتحرك. وعندما يُحصر في وعاء يمكن ضغطه، كما يؤثر الهواء المتحرك في الأشياء الخفيفة مثل الأوراق والطائرات الورقية.',
    focusEn: 'Air is a gas with no color or fixed shape. It takes up space and can move. When trapped in a container it can be compressed, and moving air affects light objects such as leaves and kites.',
    questionAr: 'ماذا يمكن أن يفعل الهواء المتحرك بالطائرة الورقية؟', questionEn: 'What can moving air do to a kite?',
    optionsAr: ['يدفعها ويحركها', 'يحولها إلى ماء', 'يجعلها تختفي'], optionsEn: ['Push and move it', 'Turn it into water', 'Make it disappear'],
    visualStepsAr: ['الهواء غاز', 'يشغل حيزًا', 'يمكن ضغطه أو تحريكه', 'يؤثر في الأجسام'],
    visualStepsEn: ['Air is a gas', 'It takes up space', 'It can be compressed or moved', 'It affects objects']
  },
  {
    unit: 6, page: 64, lastPage: 69, titleAr: 'فوائد الهواء', titleEn: 'Benefits of Air',
    focusAr: 'نحتاج إلى الهواء للتنفس، وتحتاج النباتات والحيوانات إليه بطرائق مختلفة. تساعد حركة الهواء على تحريك الأشرعة وطواحين الهواء وتجفيف الملابس. ومن المهم أن نحافظ على نظافة الهواء.',
    focusEn: 'We need air to breathe, and plants and animals use it in different ways. Moving air can turn sails and windmills and help dry clothes. It is important to keep the air clean.',
    questionAr: 'أي عمل من الآتي يستخدم حركة الهواء؟', questionEn: 'Which activity uses moving air?',
    optionsAr: ['تحريك شراع القارب', 'إذابة حجر بارد', 'إيقاف نمو النباتات'], optionsEn: ['Moving a boat’s sail', 'Melting a cold stone', 'Stopping plants from growing'],
    visualStepsAr: ['هواء نقي', 'تتنفس الكائنات', 'تتحرك الرياح', 'نستفيد ونحافظ عليه'],
    visualStepsEn: ['Clean air', 'Living things breathe', 'Wind moves', 'We benefit from and protect it']
  },
  {
    unit: 7, page: 71, lastPage: 73, titleAr: 'إصدار الصوت', titleEn: 'Producing Sound',
    focusAr: 'ينشأ الصوت عندما يهتز جسم. يمكن سماع اهتزاز وتر مشدود أو قرع طبلة، كما تهتز الأحبال الصوتية عندما نتكلم. إذا توقف الاهتزاز توقف الصوت.',
    focusEn: 'Sound is produced when an object vibrates. We can hear a plucked string or a struck drum, and our vocal cords vibrate when we speak. When the vibration stops, the sound stops.',
    questionAr: 'ما الذي يحدث للجسم عندما يصدر صوتًا؟', questionEn: 'What happens to an object when it produces sound?',
    optionsAr: ['يهتز', 'يتجمد دائمًا', 'يصبح شفافًا'], optionsEn: ['It vibrates', 'It always freezes', 'It becomes transparent'],
    visualStepsAr: ['نقرع أو نحرك جسمًا', 'يهتز الجسم', 'ينشأ صوت', 'يتوقف الصوت بزوال الاهتزاز'],
    visualStepsEn: ['Strike or move an object', 'The object vibrates', 'A sound is produced', 'Sound stops when vibration ends']
  },
  {
    unit: 7, page: 74, lastPage: 74, titleAr: 'خواص الصوت', titleEn: 'Properties of Sound',
    focusAr: 'تختلف الأصوات في شدتها ودرجتها؛ فقد يكون الصوت عاليًا أو خافتًا، وحادًا أو غليظًا. يعتمد ذلك على الاهتزاز، ونستطيع مقارنة أصوات مألوفة مع المحافظة على هدوء المكان.',
    focusEn: 'Sounds differ in loudness and pitch: a sound may be loud or soft, high or low. These qualities depend on vibrations. We can compare familiar sounds while keeping our surroundings calm.',
    questionAr: 'أي وصف يدل على صوت خافت؟', questionEn: 'Which description means a soft, quiet sound?',
    optionsAr: ['صوت منخفض الشدة', 'صوت يهز النوافذ دائمًا', 'صوت لا ينتقل'], optionsEn: ['A sound with low loudness', 'A sound that always shakes windows', 'A sound that cannot travel'],
    visualStepsAr: ['يهتز مصدر الصوت', 'ينشأ صوت', 'نلاحظ شدته ودرجته', 'نصف ما نسمع'],
    visualStepsEn: ['A sound source vibrates', 'Sound is produced', 'Notice its loudness and pitch', 'Describe what we hear']
  },
  {
    unit: 7, page: 75, lastPage: 75, titleAr: 'انتقال الصوت', titleEn: 'How Sound Travels',
    focusAr: 'ينتقل الصوت من مصدره عبر مواد مثل الهواء والماء والأجسام الصلبة. يصل الصوت إلى أذننا بعد انتقاله، لكنه لا ينتقل في الفراغ الذي لا توجد فيه مادة.',
    focusEn: 'Sound travels from its source through materials such as air, water, and solids. It reaches our ears after traveling, but it cannot travel through a vacuum where there is no material.',
    questionAr: 'أي مما يأتي يمكن أن ينتقل الصوت خلاله؟', questionEn: 'Through which of these can sound travel?',
    optionsAr: ['الهواء', 'الفراغ', 'العدم'], optionsEn: ['Air', 'A vacuum', 'Nothingness'],
    visualStepsAr: ['مصدر يهتز', 'ينتقل الصوت في مادة', 'يصل إلى مكان آخر', 'تسمعه الأذن'],
    visualStepsEn: ['A source vibrates', 'Sound travels through material', 'It reaches another place', 'The ear hears it']
  },
  {
    unit: 7, page: 76, lastPage: 77, titleAr: 'كيف نسمع الأصوات', titleEn: 'How We Hear Sounds',
    focusAr: 'تجمع الأذن الصوت وتساعد على سماعه. تدخل الموجات الصوتية الأذن فتجعل أجزاء داخلها تهتز، ثم يرسل العصب السمعي إشارات إلى الدماغ الذي يفسرها أصواتًا. نحمي آذاننا من الأصوات الشديدة.',
    focusEn: 'The ear collects sound and helps us hear. Sound waves enter the ear and make parts inside it vibrate; the hearing nerve then sends signals to the brain, which interprets them as sounds. We protect our ears from very loud sounds.',
    questionAr: 'أي عضو يفسر إشارات السمع؟', questionEn: 'Which organ interprets hearing signals?',
    optionsAr: ['الدماغ', 'الركبة', 'المعدة'], optionsEn: ['The brain', 'The knee', 'The stomach'],
    visualStepsAr: ['الصوت يصل إلى الأذن', 'تهتز أجزاء داخلها', 'تنتقل إشارات عصبية', 'يفسر الدماغ الصوت'],
    visualStepsEn: ['Sound reaches the ear', 'Parts inside vibrate', 'Nerve signals travel', 'The brain interprets the sound']
  },
  {
    unit: 7, page: 78, lastPage: 78, titleAr: 'الصدى', titleEn: 'Echo',
    focusAr: 'الصدى هو سماع الصوت مرة أخرى بعد انعكاسه عن سطح بعيد وصلب، مثل جدار أو جبل. يحتاج الصوت إلى وقت ليعود، لذلك لا نسمع صدى واضحًا من كل سطح.',
    focusEn: 'An echo is hearing a sound again after it reflects from a distant, hard surface such as a wall or mountain. The sound takes time to return, so not every surface produces a clear echo.',
    questionAr: 'كيف يتكون الصدى؟', questionEn: 'How is an echo formed?',
    optionsAr: ['ينعكس الصوت عن سطح ويعود', 'يختفي الصوت قبل أن ينتقل', 'يتحول الصوت إلى ضوء'], optionsEn: ['Sound reflects from a surface and returns', 'Sound disappears before traveling', 'Sound changes into light'],
    visualStepsAr: ['يصدر صوت', 'يسافر نحو سطح بعيد', 'ينعكس عن السطح', 'يعود إلينا صدى'],
    visualStepsEn: ['A sound is made', 'It travels toward a distant surface', 'It reflects from the surface', 'An echo returns to us']
  },
  {
    unit: 7, page: 79, lastPage: 80, titleAr: 'الضوضاء', titleEn: 'Noise',
    focusAr: 'الضوضاء أصوات مزعجة أو عالية قد تشتت الانتباه وتؤذي السمع إذا اشتدت أو طالت. نقللها بخفض صوت الأجهزة، والابتعاد عن مصادرها، والتحدث بهدوء واحترام راحة الآخرين.',
    focusEn: 'Noise is unwanted or loud sound that can distract us and harm hearing if it is very loud or lasts a long time. We can reduce it by turning devices down, moving away from its source, and speaking quietly.',
    questionAr: 'ما التصرف الذي يقلل الضوضاء؟', questionEn: 'Which action helps reduce noise?',
    optionsAr: ['خفض صوت الجهاز', 'الصراخ قرب الآخرين', 'تشغيل أصوات كثيرة معًا'], optionsEn: ['Turning a device down', 'Shouting near others', 'Playing many sounds at once'],
    visualStepsAr: ['مصدر يصدر ضوضاء', 'تزعج من حوله', 'نخفض الصوت أو نبتعد', 'مكان أهدأ وآذان آمنة'],
    visualStepsEn: ['A source makes noise', 'It disturbs people nearby', 'Turn it down or move away', 'A calmer place and safer ears']
  },
  {
    unit: 8, page: 83, lastPage: 86, titleAr: 'الطاقة الحرارية', titleEn: 'Thermal Energy',
    focusAr: 'نشعر بالحرارة عندما تنتقل الطاقة الحرارية إلى أجسامنا، وبالبرودة عندما تنتقل منها. تنتقل الحرارة عادة من الجسم الأدفأ إلى الجسم الأبرد، ويمكن أن تدفئ الشمس الأرض والأشياء.',
    focusEn: 'We feel warmth when thermal energy moves to our bodies, and coolness when it moves away. Heat usually transfers from a warmer object to a cooler one. The Sun can warm the ground and other objects.',
    questionAr: 'في أي اتجاه تنتقل الحرارة عادة؟', questionEn: 'In which direction does heat usually transfer?',
    optionsAr: ['من الأدفأ إلى الأبرد', 'من الأبرد إلى الأدفأ دائمًا', 'لا تنتقل بين الأجسام'], optionsEn: ['From warmer to cooler', 'Always from cooler to warmer', 'It never transfers between objects'],
    visualStepsAr: ['جسم دافئ وآخر أبرد', 'تنتقل الطاقة الحرارية', 'يسخن الأبرد', 'يقترب الجسمان في الحرارة'],
    visualStepsEn: ['A warm object and a cooler one', 'Thermal energy transfers', 'The cooler one warms', 'Their temperatures become closer']
  },
  {
    unit: 8, page: 87, lastPage: 90, titleAr: 'الموصلات والعوازل', titleEn: 'Conductors and Insulators',
    focusAr: 'تنقل بعض المواد الحرارة بسهولة وتسمى موصلات، مثل كثير من المعادن. وتبطئ مواد أخرى انتقال الحرارة وتسمى عوازل، مثل الخشب والقماش. نستخدم العوازل للمساعدة على إمساك الأشياء الساخنة بأمان.',
    focusEn: 'Some materials transfer heat easily and are called conductors, such as many metals. Other materials slow heat transfer and are called insulators, such as wood and cloth. Insulators can help us hold hot objects safely.',
    questionAr: 'أي مادة تعد عازلًا للحرارة في الاستخدامات اليومية؟', questionEn: 'Which material is a heat insulator in everyday use?',
    optionsAr: ['الخشب', 'الحديد', 'النحاس'], optionsEn: ['Wood', 'Iron', 'Copper'],
    visualStepsAr: ['حرارة تنتقل', 'الموصل ينقلها بسهولة', 'العازل يبطئ انتقالها', 'نختار مادة آمنة'],
    visualStepsEn: ['Heat is transferring', 'A conductor transfers it easily', 'An insulator slows it down', 'Choose a safe material']
  }
];

export const SUDAN_PRIMARY_SCIENCE_G4_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_SCIENCE_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-science-g4-${order}`;
  const unit = SUDAN_PRIMARY_SCIENCE_G4_BOOK.units[lesson.unit - 1];
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
    subtitleAr: `العلوم الطبيعية — الصف الرابع الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 4 Natural Science — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان — العلوم الطبيعية — الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Republic of Sudan — Grade 4 Primary Natural Science',
    ministryAr: 'وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
    ministryEn: 'Ministry of Education — National Center for Curricula and Educational Research — Bakht Al-Ruda',
    termAr: 'العلوم الطبيعية — الصف الرابع',
    termEn: 'Grade 4 Natural Science',
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
