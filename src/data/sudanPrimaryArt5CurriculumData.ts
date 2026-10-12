import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ART_G5_BOOK = {
  title: 'التربية الفنية — الصف الخامس الابتدائي',
  titleEn: 'Art Education — Grade 5 Primary',
  edition: 'جمهورية السودان — وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
  units: [
    { titleAr: 'الرسم', titleEn: 'Drawing', firstPage: 2, lastPage: 21 },
    { titleAr: 'التصميم والزخرفة', titleEn: 'Design and Ornament', firstPage: 24, lastPage: 36 },
    { titleAr: 'التشكيل والتركيب', titleEn: 'Forming and Construction', firstPage: 40, lastPage: 55 }
  ]
} as const;

interface ArtLesson {
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

const lessons: ArtLesson[] = [
  {
    unit: 1, page: 2, titleAr: 'رسم الأواني المنزلية', titleEn: 'Drawing Household Vessels',
    focusAr: 'رتّب إناءين آمنين ولاحظ حدود كل منهما والضوء والظل. ارسم الأشكال بخفة ثم أضف الظلال؛ لا تستخدم أواني ساخنة أو قابلة للكسر.',
    focusEn: 'Arrange two safe vessels and notice their outlines, light, and shade. Sketch their shapes lightly, then add shadows; avoid hot or breakable objects.',
    questionAr: 'ما الذي يساعد على إظهار حجم الإناء في الرسم؟', questionEn: 'What helps show a vessel’s volume in a drawing?',
    optionsAr: ['الضوء والظل', 'تكرار خط واحد فقط', 'إخفاء حدود الإناء'], optionsEn: ['Light and shade', 'Repeating just one line', 'Hiding the vessel’s outline'],
    visualStepsAr: ['اختر أواني آمنة', 'لاحظ حدودها والضوء', 'ارسم الأشكال بخفة', 'أضف الظلال'], visualStepsEn: ['Choose safe vessels', 'Notice outlines and light', 'Sketch the shapes lightly', 'Add the shadows']
  },
  {
    unit: 1, page: 9, titleAr: 'التدرج اللوني', titleEn: 'Color Gradation',
    focusAr: 'قسّم شريطًا إلى خانات وامزج لونًا واحدًا تدريجيًا بالأبيض للتفتيح أو بالأسود للتعتيم. استخدم ألوانًا مائية غير سامة، واغسل يديك بعد النشاط.',
    focusEn: 'Divide a strip into boxes and gradually mix one color with white to lighten it or black to darken it. Use non-toxic watercolor and wash your hands afterward.',
    questionAr: 'كيف نحصل على درجة أفتح من لون؟', questionEn: 'How can we make a lighter tint of a color?',
    optionsAr: ['نضيف قليلًا من الأبيض', 'نضيف مزيدًا من الأسود', 'نمزج ألوانًا كثيرة عشوائيًا'], optionsEn: ['Add a little white', 'Add more black', 'Mix many colors at random'],
    visualStepsAr: ['ارسم خانات متتابعة', 'اختر لونًا واحدًا', 'أضف الأبيض قليلًا قليلًا', 'لوّن من الداكن إلى الفاتح'], visualStepsEn: ['Draw a row of boxes', 'Choose one color', 'Add white little by little', 'Paint from dark to light']
  },
  {
    unit: 1, page: 13, titleAr: 'فرحة العيد', titleEn: 'Eid Celebration',
    focusAr: 'ابتكر بطاقة أو مشهدًا صغيرًا يعبّر عن فرحة العيد بعناصر من اختيارك، مثل الزينة أو الهلال أو هدية. رتّب الأشكال والألوان للتعبير عن أجواء بهيجة.',
    focusEn: 'Create a card or small scene that celebrates Eid using details you choose, such as decorations, a crescent, or a gift. Arrange shapes and colors to express a joyful mood.',
    questionAr: 'ما الذي يجعل الرسم مرتبطًا بموضوع العيد؟', questionEn: 'What makes a picture connect to the Eid theme?',
    optionsAr: ['اختيار رموز وتفاصيل مناسبة', 'رسم أشكال بلا صلة بالموضوع', 'تغطية الورقة بلون واحد'], optionsEn: ['Choosing fitting symbols and details', 'Drawing unrelated shapes', 'Covering the page with one color'],
    visualStepsAr: ['اختر فكرة للعيد', 'ارسم رموزًا مناسبة', 'رتّبها في البطاقة', 'أضف ألوانًا مبهجة'], visualStepsEn: ['Choose an Eid idea', 'Sketch fitting symbols', 'Arrange them on the card', 'Add cheerful colors']
  },
  {
    unit: 1, page: 15, titleAr: 'التراث الشعبي', titleEn: 'Folk Heritage',
    focusAr: 'صمّم رسمًا لأداة أو نقش مألوف من التراث المحلي بعد سؤال أحد أفراد الأسرة أو ملاحظة صورة. احترم اختلاف العادات، وارسم من دون أخذ مقتنيات أو إتلافها.',
    focusEn: 'Draw a familiar local heritage object or pattern after asking a family member or observing a picture. Respect different traditions, and draw without taking or damaging objects.',
    questionAr: 'ما مصدر مناسب لفكرة رسم عن التراث؟', questionEn: 'What is a suitable source for a folk-heritage drawing?',
    optionsAr: ['ملاحظة صورة أو شيء مألوف', 'إتلاف قطعة تراثية', 'نسخ أي شكل دون فهمه'], optionsEn: ['Observing a picture or familiar object', 'Damaging a heritage item', 'Copying any shape without understanding it'],
    visualStepsAr: ['اسأل أو لاحظ صورة', 'اختر عنصرًا تراثيًا', 'ارسم شكله المميز', 'أضف زخرفة من ابتكارك'], visualStepsEn: ['Ask or observe a picture', 'Choose a heritage object', 'Draw its distinctive shape', 'Add your own decoration']
  },
  {
    unit: 1, page: 17, titleAr: 'رسم منظر طبيعي', titleEn: 'Drawing a Landscape',
    focusAr: 'ارسم منظرًا من الذاكرة أو من مكان آمن، واجعل بعض العناصر قريبة وأخرى بعيدة. أظهر العمق بتصغير البعيد وتخفيف تفاصيله، ولا تقترب من الطرق أو الحواف المرتفعة للملاحظة.',
    focusEn: 'Draw a remembered landscape or observe from a safe place, with some objects near and others far away. Show depth by making distant objects smaller and less detailed; stay away from roads and high edges.',
    questionAr: 'كيف يبدو الجسم البعيد عادة في الرسم؟', questionEn: 'How does a distant object usually look in a drawing?',
    optionsAr: ['أصغر وأقل تفصيلًا', 'أكبر من الجسم القريب دائمًا', 'بالتفاصيل نفسها مهما ابتعد'], optionsEn: ['Smaller and less detailed', 'Always larger than a nearby object', 'With the same detail at every distance'],
    visualStepsAr: ['اختر منظرًا آمنًا', 'ارسم خط الأفق', 'ضع القريب أكبر', 'أضف البعيد بألوان هادئة'], visualStepsEn: ['Choose a safe view', 'Draw the horizon', 'Make nearby objects larger', 'Add distant forms in softer colors']
  },
  {
    unit: 1, page: 19, titleAr: 'الطواف حول الكعبة الشريفة', titleEn: 'Tawaf around the Holy Kaaba',
    focusAr: 'أنشئ لوحة رمزية محترمة للكعبة والمطاف، مستخدمًا أشكالًا واضحة وألوانًا هادئة. يمكن تمثيل الحجاج بنقاط أو أشكال مبسطة دون تفاصيل شخصية.',
    focusEn: 'Create a respectful symbolic picture of the Kaaba and the circumambulation area, using clear shapes and calm colors. Pilgrims may be shown as dots or simple forms without personal details.',
    questionAr: 'ما طريقة مناسبة لتمثيل الحجاج في لوحة رمزية؟', questionEn: 'What is a suitable way to represent pilgrims in a symbolic picture?',
    optionsAr: ['أشكال مبسطة ومحترمة', 'تفاصيل ساخرة أو مؤذية', 'إخفاء الموضوع كله'], optionsEn: ['Simple, respectful forms', 'Mocking or hurtful details', 'Hiding the whole subject'],
    visualStepsAr: ['خطط لمشهد محترم', 'ارسم الكعبة بوضوح', 'أضف أشكالًا مبسطة حولها', 'وازن اللون والمساحة'], visualStepsEn: ['Plan a respectful scene', 'Draw the Kaaba clearly', 'Add simple forms around it', 'Balance color and space']
  },
  {
    unit: 1, page: 21, titleAr: 'السوق', titleEn: 'The Market',
    focusAr: 'ارسم مشهد سوق صغيرًا يضم سلعًا وأشكالًا مختلفة، ووزّعها في المقدمة والخلفية. استلهم من الذاكرة أو صورة، ولا تصوّر أشخاصًا حقيقيين دون إذنهم.',
    focusEn: 'Draw a small market scene with varied goods and shapes, arranging them in foreground and background. Work from memory or a picture, and do not portray real people without their permission.',
    questionAr: 'ما الذي يساعد على تنظيم مشهد السوق؟', questionEn: 'What helps organize a market scene?',
    optionsAr: ['توزيع السلع في مساحة الرسم', 'وضع كل شيء فوق بعضه', 'استخدام حجم واحد لكل عنصر'], optionsEn: ['Arranging goods across the picture space', 'Stacking everything on top of itself', 'Using one size for every object'],
    visualStepsAr: ['اختر سلعًا للسوق', 'حدّد أماكنها', 'ارسم القريب والبعيد', 'أضف تفاصيل وألوانًا'], visualStepsEn: ['Choose market goods', 'Plan where they go', 'Draw near and far objects', 'Add details and colors']
  },
  {
    unit: 2, page: 24, titleAr: 'التصميم الفني', titleEn: 'Artistic Design',
    focusAr: 'أنشئ تصميمًا صغيرًا يوضح الخط والشكل واللون والملمس، مستخدمًا مواد رسم مألوفة. جرّب ترتيب العناصر قبل تثبيت اختيارك.',
    focusEn: 'Make a small design that explores line, shape, color, and texture using familiar art materials. Try arranging the elements before settling on a layout.',
    questionAr: 'أيٌّ مما يأتي عنصر من عناصر التصميم؟', questionEn: 'Which of these is an element of design?',
    optionsAr: ['الخط', 'الممحاة وحدها', 'حقيبة الأدوات'], optionsEn: ['Line', 'An eraser by itself', 'The art-supply bag'],
    visualStepsAr: ['اختر فكرة بسيطة', 'جرّب خطوطًا وأشكالًا', 'رتّب العناصر', 'أضف لونًا وملمسًا'], visualStepsEn: ['Choose a simple idea', 'Try lines and shapes', 'Arrange the elements', 'Add color and texture']
  },
  {
    unit: 2, page: 26, titleAr: 'تصميم زخرفي', titleEn: 'Decorative Design',
    focusAr: 'ابتكر وحدة زخرفية من أشكال بسيطة، ثم كررها في صف أو إطار. ارسم بالقلم دون ضغط قوي كي يسهل تعديل النمط.',
    focusEn: 'Invent an ornamental unit from simple shapes, then repeat it in a row or border. Sketch lightly so the pattern is easy to adjust.',
    questionAr: 'ما الذي يصنع نمطًا زخرفيًا متكررًا؟', questionEn: 'What creates a repeating decorative pattern?',
    optionsAr: ['تكرار وحدة بترتيب', 'وضع شكل واحد في زاوية', 'مسح كل الأشكال'], optionsEn: ['Repeating a unit in an arrangement', 'Putting one shape in a corner', 'Erasing every shape'],
    visualStepsAr: ['ابتكر وحدة صغيرة', 'اختر اتجاهًا للتكرار', 'كرر الوحدة بمسافات متقاربة', 'لوّن النمط برفق'], visualStepsEn: ['Invent a small unit', 'Choose a repeating direction', 'Repeat it at even intervals', 'Color the pattern gently']
  },
  {
    unit: 2, page: 28, titleAr: 'التداخل بين الأشكال', titleEn: 'Overlapping Shapes',
    focusAr: 'رتّب دوائر ومربعات متقاطعة لتوضيح التداخل، ثم ميّز الأجزاء التي تظهر أمام غيرها. استخدم قصاصات ورقية أو ارسمها بدل الأدوات الحادة.',
    focusEn: 'Arrange overlapping circles and squares, then show which parts appear in front. Use paper shapes or draw them rather than using sharp tools.',
    questionAr: 'كيف نوضح أن شكلًا يقع أمام شكل آخر؟', questionEn: 'How can we show that one shape is in front of another?',
    optionsAr: ['نجعل حدوده تغطي جزءًا من الشكل الخلفي', 'نمحو الشكلين كليًا', 'نضعهما بعيدين دون تداخل'], optionsEn: ['Let its outline cover part of the shape behind', 'Erase both shapes completely', 'Place them apart with no overlap'],
    visualStepsAr: ['اختر شكلين', 'رتّبهما متداخلين', 'أظهر حدود الشكل الأمامي', 'لوّن المساحات المختلفة'], visualStepsEn: ['Choose two shapes', 'Arrange them to overlap', 'Show the front shape’s outline', 'Color the different areas']
  },
  {
    unit: 2, page: 30, titleAr: 'تصميم مصلية أو سجادة الصلاة', titleEn: 'Designing a Prayer Mat or Rug',
    focusAr: 'صمّم سجادة ورقية مستطيلة لها إطار ووسط منظم، باستلهام أشكال هندسية أو نباتية. اجعل الزخرفة هادئة ومتوازنة واحترم قدسية موضوع الصلاة.',
    focusEn: 'Design a rectangular paper prayer mat with a border and an orderly center, using geometric or plant-inspired shapes. Keep the decoration calm and balanced, respecting the sacred context of prayer.',
    questionAr: 'كيف يمكن تنظيم تصميم السجادة؟', questionEn: 'How can a rug design be organized?',
    optionsAr: ['إطار يحيط بمساحة وسطى', 'زخرفة مزدحمة بلا ترتيب', 'ترك الشكل دون تخطيط'], optionsEn: ['A border around a central area', 'Crowded decoration without order', 'Leaving the design unplanned'],
    visualStepsAr: ['ارسم مستطيل السجادة', 'أضف إطارًا', 'رتّب وحدة في الوسط', 'وازن الزخارف والألوان'], visualStepsEn: ['Draw the rug rectangle', 'Add a border', 'Arrange a motif in the center', 'Balance decoration and color']
  },
  {
    unit: 2, page: 32, titleAr: 'الخطوط العربية', titleEn: 'Arabic Lettering',
    focusAr: 'جرّب كتابة كلمة عربية قصيرة بخط كبير واضح، ثم زيّن المساحة حولها بخطوط بسيطة لا تحجب الحروف. اكتب كلمات لائقة وتجنب نسخ نصوص دينية للزينة العابرة.',
    focusEn: 'Practice lettering a short Arabic word clearly and large, then add simple lines around it without hiding the letters. Choose respectful words and avoid treating sacred texts as casual decoration.',
    questionAr: 'ما الأولوية عند تصميم كلمة عربية؟', questionEn: 'What should come first when designing Arabic lettering?',
    optionsAr: ['وضوح الحروف وترتيبها', 'إخفاء الحروف بالزخرفة', 'تغيير ترتيب الكلمة'], optionsEn: ['Clear, correctly ordered letters', 'Hiding letters with decoration', 'Changing the word’s order'],
    visualStepsAr: ['اختر كلمة مناسبة', 'ارسم الحروف بخفة', 'راجع اتصالها ووضوحها', 'أضف إطارًا بسيطًا'], visualStepsEn: ['Choose a suitable word', 'Sketch the letters lightly', 'Check their connections and clarity', 'Add a simple border']
  },
  {
    unit: 2, page: 34, titleAr: 'الزخرفة النباتية', titleEn: 'Plant Ornament',
    focusAr: 'لاحظ شكل ورقة أو زهرة في صورة، ثم حوّلها إلى وحدة زخرفية مبسطة وكررها حول مركز. لا تقطف نباتًا حيًا لأجل النشاط.',
    focusEn: 'Observe a leaf or flower in a picture, simplify it into an ornamental unit, and repeat it around a center. Do not pick a living plant for the activity.',
    questionAr: 'ما مصدر آمن لملاحظة شكل نباتي؟', questionEn: 'What is a safe source for observing a plant form?',
    optionsAr: ['نبات في مكانه أو صورة له', 'اقتلاع النبات', 'إزالة أوراقه كلها'], optionsEn: ['A plant where it grows or its picture', 'Pulling up the plant', 'Removing all its leaves'],
    visualStepsAr: ['لاحظ ورقة أو زهرة', 'بسّط شكلها', 'كرر الوحدة حول المركز', 'أضف ألوانًا متناغمة'], visualStepsEn: ['Observe a leaf or flower', 'Simplify its shape', 'Repeat the unit around a center', 'Add harmonious colors']
  },
  {
    unit: 2, page: 36, titleAr: 'الزخرفة الهندسية', titleEn: 'Geometric Ornament',
    focusAr: 'كوّن نمطًا من مثلثات ومربعات ودوائر باستخدام مسطرة وأدوات رسم آمنة، ثم كرر الأشكال بانتظام. اطلب مساعدة المعلم عند استخدام أي أداة غير مألوفة.',
    focusEn: 'Build a pattern from triangles, squares, and circles with a ruler and safe drawing tools, then repeat the shapes regularly. Ask your teacher before using unfamiliar tools.',
    questionAr: 'ما الذي يجعل الزخرفة الهندسية منتظمة؟', questionEn: 'What makes a geometric pattern regular?',
    optionsAr: ['تكرار الأشكال بمسافات وترتيب واضحين', 'تغيير موضع كل شكل عشوائيًا', 'رسم خط واحد فقط'], optionsEn: ['Repeating shapes with clear spacing and order', 'Moving every shape at random', 'Drawing only one line'],
    visualStepsAr: ['اختر أشكالًا هندسية', 'خطط وحدة صغيرة', 'كررها بانتظام', 'لوّن النمط'], visualStepsEn: ['Choose geometric shapes', 'Plan a small unit', 'Repeat it regularly', 'Color the pattern']
  },
  {
    unit: 3, page: 40, titleAr: 'التشكيل بخامات متنوعة', titleEn: 'Forming with Different Materials',
    focusAr: 'اجمع قصاصات ورق وكرتون نظيفة وخامات آمنة، ثم رتّبها لصنع لوحة بارزة بسيطة. تجنب الزجاج والمعادن الحادة والخامات المجهولة، واطلب إشرافًا عند اللصق.',
    focusEn: 'Gather clean paper and card scraps with other safe materials, then arrange them into a simple raised picture. Avoid glass, sharp metal, and unknown materials; get supervision when gluing.',
    questionAr: 'ما الخامة الأنسب لمشروع آمن؟', questionEn: 'Which material is most suitable for a safe project?',
    optionsAr: ['قصاصات ورق نظيفة', 'زجاج مكسور', 'مادة مجهولة الرائحة'], optionsEn: ['Clean paper scraps', 'Broken glass', 'A material with an unknown odor'],
    visualStepsAr: ['اختر خامات آمنة', 'جرّب ترتيبها', 'ثبتها بإشراف', 'اترك العمل حتى يجف'], visualStepsEn: ['Choose safe materials', 'Try arranging them', 'Attach them with supervision', 'Let the work dry']
  },
  {
    unit: 3, page: 44, titleAr: 'الأصباغ', titleEn: 'Dyes and Pigments',
    focusAr: 'جرّب لونين مائيين غير سامين على قصاصة ورق ولاحظ أثر الفرشاة وتداخل اللونين. لا تتذوق الأصباغ أو تضعها قرب العينين، واغسل يديك بعد الاستخدام.',
    focusEn: 'Test two non-toxic water-based colors on scrap paper and observe brush marks and how the colors meet. Never taste pigments or put them near your eyes, and wash your hands afterward.',
    questionAr: 'ما التصرف الآمن عند استخدام الأصباغ؟', questionEn: 'What is a safe practice when using pigments?',
    optionsAr: ['استخدام ألوان غير سامة وغسل اليدين', 'تذوق اللون لمعرفة مكوناته', 'الرسم قرب العينين'], optionsEn: ['Use non-toxic colors and wash hands', 'Taste the color to identify it', 'Paint close to the eyes'],
    visualStepsAr: ['جهّز قصاصة ورق', 'اختر ألوانًا آمنة', 'جرّب الفرشاة والمزج', 'نظف الأدوات ويديك'], visualStepsEn: ['Prepare scrap paper', 'Choose safe colors', 'Test brushwork and mixing', 'Clean tools and hands']
  },
  {
    unit: 3, page: 46, titleAr: 'أعمال النسيج الورقي', titleEn: 'Paper Weaving',
    focusAr: 'اصنع نسيجًا مسطحًا بتمرير شرائط ورقية ملونة فوق شرائط قاعدة وتحتها بالتبادل. استخدم شرائط مجهزة مسبقًا أو مقصًا مدرسيًا غير حاد بإشراف المعلم.',
    focusEn: 'Make a flat weave by passing colored paper strips over and under base strips in turn. Use pre-cut strips or blunt school scissors with teacher supervision.',
    questionAr: 'كيف تتشابك شرائط النسيج الورقي؟', questionEn: 'How do strips interlace in paper weaving?',
    optionsAr: ['فوق شريط وتحت الذي يليه بالتبادل', 'بلصقها كلها فوق بعضها', 'بتمزيقها إلى قطع صغيرة'], optionsEn: ['Alternately over one strip and under the next', 'By gluing them all on top of one another', 'By tearing them into tiny pieces'],
    visualStepsAr: ['رتب شرائط القاعدة', 'مرر شريطًا فوق وتحت', 'اعكس الترتيب في الشريط التالي', 'سوِّ الأطراف وثبتها'], visualStepsEn: ['Arrange the base strips', 'Pass a strip over and under', 'Reverse the order on the next strip', 'Align and secure the ends']
  },
  {
    unit: 3, page: 48, titleAr: 'الطباعة بالرش', titleEn: 'Spray Printing',
    focusAr: 'ضع قالبًا ورقيًا فوق ورقة وجرب طباعة أثر من حول حوافه بفرشاة رطبة يجهزها المعلم. لا ترش باليد أو الفم، وأبعد اللون عن الوجه واحمِ سطح العمل.',
    focusEn: 'Place a paper stencil on a sheet and try making a print around its edges with a damp brush prepared by the teacher. Do not spray by hand or mouth; keep paint away from faces and protect the work surface.',
    questionAr: 'ما الطريقة الآمنة لتجربة الطباعة بالرش؟', questionEn: 'What is a safe way to try spray printing?',
    optionsAr: ['استخدام فرشاة رطبة بإشراف المعلم', 'نفخ اللون من الفم', 'توجيه الرذاذ نحو الوجه'], optionsEn: ['Use a damp brush with teacher supervision', 'Blow paint from the mouth', 'Aim droplets toward the face'],
    visualStepsAr: ['ضع قالبًا فوق الورقة', 'جهّز لونًا مائيًا آمنًا', 'اطبع حول القالب بإشراف', 'ارفع القالب واترك الأثر يجف'], visualStepsEn: ['Place a stencil on the paper', 'Prepare safe water-based paint', 'Print around it with supervision', 'Lift the stencil and let the print dry']
  },
  {
    unit: 3, page: 50, titleAr: 'أعمال الطين', titleEn: 'Clay Work',
    focusAr: 'شكّل قطعة صغيرة من طين نظيف أو صلصال مدرسي إلى إناء أو شكل بسيط، ثم زخرف سطحه بأداة آمنة. لا تستخدم طينًا مجهول المصدر، واغسل يديك بعد الانتهاء.',
    focusEn: 'Shape clean clay or classroom modeling dough into a small vessel or simple form, then decorate it with a safe tool. Avoid clay of unknown origin and wash your hands when finished.',
    questionAr: 'كيف نبدأ تشكيل قطعة من الطين؟', questionEn: 'How do we begin shaping a piece of clay?',
    optionsAr: ['نعجنها ونكوّن الشكل باليد', 'نستخدم أداة حادة', 'نضع الطين في الفم'], optionsEn: ['Knead it and shape it by hand', 'Use a sharp tool', 'Put the clay in the mouth'],
    visualStepsAr: ['جهّز طينًا نظيفًا', 'اعجنه برفق', 'شكّل هيئة بسيطة', 'زخرفها ونظف المكان'], visualStepsEn: ['Prepare clean clay', 'Knead it gently', 'Shape a simple form', 'Decorate it and clean up']
  },
  {
    unit: 3, page: 52, titleAr: 'التشكيل بالحبوب', titleEn: 'Forming with Grains',
    focusAr: 'كوّن صورة صغيرة من حبوب جافة نظيفة فوق ورق مقوى، ورتبها أولًا ثم ثبتها بكمية قليلة من غراء مدرسي آمن. لا تأكل الحبوب المستخدمة واغسل يديك بعد العمل.',
    focusEn: 'Make a small picture from clean, dry grains on card. Arrange them first, then attach them with a little safe school glue. Do not eat the grains used for art, and wash your hands afterward.',
    questionAr: 'ماذا نفعل قبل تثبيت الحبوب؟', questionEn: 'What should we do before attaching the grains?',
    optionsAr: ['نرتبها لتجربة التصميم', 'نرميها عشوائيًا', 'نتذوقها أثناء العمل'], optionsEn: ['Arrange them to test the design', 'Scatter them at random', 'Taste them while working'],
    visualStepsAr: ['اختر حبوبًا نظيفة', 'رتبها فوق الورق', 'ثبتها بغراء آمن', 'اترك العمل يجف ونظف المكان'], visualStepsEn: ['Choose clean grains', 'Arrange them on the card', 'Attach them with safe glue', 'Let the work dry and clean up']
  },
  {
    unit: 3, page: 55, titleAr: 'التشكيل ثلاثي الأبعاد', titleEn: 'Three-Dimensional Forming',
    focusAr: 'ابنِ مجسمًا صغيرًا من ورق أو كرتون معاد الاستخدام، واجعله ثابتًا بقاعدة عريضة. اطلب مساعدة المعلم في أي قص أو تثبيت، وتجنب الأسلاك والأطراف الحادة.',
    focusEn: 'Build a small model from reused paper or card and give it a wide, steady base. Ask your teacher for help with any cutting or fastening, and avoid wire and sharp edges.',
    questionAr: 'ما الذي يساعد المجسم على الثبات؟', questionEn: 'What helps a three-dimensional model stand steadily?',
    optionsAr: ['قاعدة عريضة ومتوازنة', 'قاعدة صغيرة مائلة', 'إزالة كل نقاط التثبيت'], optionsEn: ['A wide, balanced base', 'A small tilted base', 'Removing all supports'],
    visualStepsAr: ['خطط شكلًا بسيطًا', 'اطوِ الورق لتكوين أجزاء', 'ثبت الأجزاء على قاعدة', 'اختبر الثبات وزيّن المجسم'], visualStepsEn: ['Plan a simple form', 'Fold paper to make parts', 'Attach the parts to a base', 'Check stability and decorate']
  }
];

export const SUDAN_PRIMARY_ART_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ART_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-art-g5-${order}`;
  const unit = SUDAN_PRIMARY_ART_G5_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `المجال ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Field ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الفنية — الصف الخامس الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 Art Education — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان — التربية الفنية — الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Republic of Sudan — Grade 5 Primary Art Education',
    ministryAr: 'وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
    ministryEn: 'Ministry of Education — National Center for Curricula and Educational Research — Bakht Al-Ruda',
    termAr: 'التربية الفنية — الصف الخامس',
    termEn: 'Grade 5 Art Education',
    unitTitleAr: `المجال ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Field ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل شيئًا من حولك يرتبط بموضوع «${lesson.titleAr}». ما الأشكال أو الألوان أو الخامات التي تلاحظها؟`,
    warmupHookEn: `Observe something around you connected to “${lesson.titleEn}.” What shapes, colors, or materials do you notice?`,
    learningOutcomesAr: [
      lesson.focusAr,
      `ينفذ نشاطًا فنيًا آمنًا مرتبطًا بموضوع «${lesson.titleAr}».`,
      `يشرح اختياره الفني ويجيب عن سؤال قصير حول «${lesson.titleAr}».`
    ],
    learningOutcomesEn: [
      lesson.focusEn,
      `Complete a safe art activity connected to “${lesson.titleEn}.”`,
      `Explain an artistic choice and answer a short question about “${lesson.titleEn}.”`
    ],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنفّذ النشاط خطوة خطوة، ثم تأمل عملك واشرح ما تعلمته بكلماتك.`,
      contentEn: `${lesson.focusEn}\n\nComplete the activity step by step, then look at your work and explain what you learned in your own words.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط: ${lesson.titleAr}`,
        titleEn: `Diagram: ${lesson.titleEn}`,
        captionAr: `أربع خطوات بصرية لنشاط «${lesson.titleAr}».`,
        captionEn: `Four visual steps for the “${lesson.titleEn}” activity.`,
        diagramType: 'primary_lesson_sequence',
        visualSteps
      }
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم عملي: ${lesson.titleAr}`,
      titleEn: `Hands-on Check: ${lesson.titleEn}`,
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
        explanationAr: `الإجابة الصحيحة: ${lesson.optionsAr[0]}. جرّب الفكرة في نشاطك الفني.`,
        explanationEn: `Correct answer: ${lesson.optionsEn[0]}. Try the idea in your art activity.`,
        difficulty: 'easy'
      }]
    },
    topicAr: `ص ${lesson.page}`,
    topicEn: `p. ${lesson.page}`
  };
});
