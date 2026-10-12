import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ARABIC_G1_TEXTBOOK_PAGES = [
  6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 34, 35, 37, 38, 39, 41,
  44, 47, 50, 52, 56, 58, 60, 62, 65, 68, 71, 72, 75, 78, 80, 81, 84, 85, 87,
  89, 90, 92, 96, 97, 98, 100, 102, 104, 107, 110, 113, 115, 117, 118, 119,
  120
] as const;

interface Lesson {
  titleAr: string;
  focusAr: string;
  questionAr: string;
  answerAr: string;
  distractorsAr: [string, string];
}

const lessons: Lesson[] = [
  { titleAr: 'الأسد وصوت حرف الألف', focusAr: 'يتعرف المتعلم كلمة «أسد» من صورتها، وينطقها، ويلاحظ صوت الألف في أولها.', questionAr: 'بأي صوت تبدأ كلمة «أسد»؟', answerAr: 'أ', distractorsAr: ['ب', 'س'] },
  { titleAr: 'البقرة وصوت حرف الباء', focusAr: 'يتعرف المتعلم كلمة «بقرة»، ويستمع إلى صوت الباء في أول الكلمة وينطقه.', questionAr: 'بأي حرف تبدأ كلمة «بقرة»؟', answerAr: 'ب', distractorsAr: ['ت', 'د'] },
  { titleAr: 'الولد وصوت حرف الواو', focusAr: 'يقرأ المتعلم كلمة «ولد» ويربط صوت الواو بالكلمة والصورة.', questionAr: 'أي كلمة تبدأ بصوت الواو؟', answerAr: 'ولد', distractorsAr: ['أسد', 'بقرة'] },
  { titleAr: 'الليمون وصوت حرف اللام', focusAr: 'يتعرف المتعلم كلمة «ليمون» ويتمرن على سماع اللام ونطقها وقراءتها.', questionAr: 'ما الحرف الأول في كلمة «ليمون»؟', answerAr: 'ل', distractorsAr: ['م', 'ن'] },
  { titleAr: 'الدجاجة وصوت حرف الدال', focusAr: 'يلاحظ المتعلم صوت الدال في كلمة «دجاجة» ويردد الكلمة ويقرؤها.', questionAr: 'بأي حرف تبدأ كلمة «دجاجة»؟', answerAr: 'د', distractorsAr: ['ج', 'ذ'] },
  { titleAr: 'النمر وصوت حرف النون', focusAr: 'يتعرف المتعلم كلمة «نمر» ويحدد صوت النون في بدايتها.', questionAr: 'ما الحرف الأول في كلمة «نمر»؟', answerAr: 'ن', distractorsAr: ['م', 'ر'] },
  { titleAr: 'التمر وصوت حرف التاء', focusAr: 'يقرأ المتعلم كلمة «تمر» ويربط صوت التاء بصورة مألوفة.', questionAr: 'بأي حرف تبدأ كلمة «تمر»؟', answerAr: 'ت', distractorsAr: ['ث', 'ب'] },
  { titleAr: 'أنا ولد وأنا بنت', focusAr: 'يقرأ المتعلم كلمات مألوفة مثل ولد وبنت وأب وبلد، ويستخدم «أنا» للتعريف بنفسه.', questionAr: 'أكمل: ___ ولد.', answerAr: 'أنا', distractorsAr: ['هذا', 'أنتِ'] },
  { titleAr: 'أنا وأنتَ وأنتِ', focusAr: 'يميز المتعلم بين «أنا» و«أنتَ» و«أنتِ» في حوار قصير بين ولد وبنت.', questionAr: 'ما الكلمة التي نخاطب بها بنتًا؟', answerAr: 'أنتِ', distractorsAr: ['أنتَ', 'أنا'] },
  { titleAr: 'الجرس وصوت حرف الجيم', focusAr: 'يتعرف المتعلم كلمة «جرس» ويستمع إلى صوت الجيم وينطقه في أول الكلمة.', questionAr: 'بأي حرف تبدأ كلمة «جرس»؟', answerAr: 'ج', distractorsAr: ['ح', 'خ'] },
  { titleAr: 'اليد وصوت حرف الياء', focusAr: 'يقرأ المتعلم كلمة «يد» ويتعرف صوت الياء في أولها.', questionAr: 'ما الحرف الأول في كلمة «يد»؟', answerAr: 'ي', distractorsAr: ['د', 'ر'] },
  { titleAr: 'السمك وصوت حرف السين', focusAr: 'يتعرف المتعلم كلمة «سمك» ويتمرن على نطق السين وقراءتها.', questionAr: 'بأي حرف تبدأ كلمة «سمك»؟', answerAr: 'س', distractorsAr: ['ش', 'ص'] },
  { titleAr: 'القلم وصوت حرف القاف', focusAr: 'يقرأ المتعلم كلمة «قلم» ويلاحظ صوت القاف في بدايتها.', questionAr: 'ما الحرف الأول في كلمة «قلم»؟', answerAr: 'ق', distractorsAr: ['ك', 'ف'] },
  { titleAr: 'قال الولد وقالت البنت', focusAr: 'يقرأ المتعلم جملًا قصيرة ويميز صيغة الفعل في عبارتي «قال الولد» و«قالت البنت».', questionAr: 'أي جملة تناسب البنت؟', answerAr: 'قالت البنت', distractorsAr: ['قال الولد', 'جلس الولد'] },
  { titleAr: 'الموز وصوت حرف الميم', focusAr: 'يتعرف المتعلم كلمة «موز» وينطق الميم، ثم يقرأ الكلمة من صورتها.', questionAr: 'ما الحرف الأول في كلمة «موز»؟', answerAr: 'م', distractorsAr: ['و', 'ز'] },
  { titleAr: 'من جلس؟', focusAr: 'يقرأ المتعلم جملًا عن الولد والبنت، ويجيب عن سؤال «من؟» لتحديد من قام بالفعل.', questionAr: 'أي كلمة تجيب عن سؤال «من جلس؟»؟', answerAr: 'الولد', distractorsAr: ['القلم', 'السمك'] },
  { titleAr: 'ما الذي وجده الولد؟', focusAr: 'يقرأ المتعلم جملًا قصيرة عن الولد والبنت والقلم، ويفهم السؤال «ما؟».', questionAr: 'ما الذي وجده الولد في الجملة؟', answerAr: 'القلم', distractorsAr: ['الجرس', 'الليمون'] },
  { titleAr: 'الفراشة وصوت حرف الفاء', focusAr: 'يتعرف المتعلم كلمة «فراشة» ويحدد صوت الفاء في أولها.', questionAr: 'بأي حرف تبدأ كلمة «فراشة»؟', answerAr: 'ف', distractorsAr: ['ق', 'ك'] },
  { titleAr: 'الكلب وصوت حرف الكاف', focusAr: 'يقرأ المتعلم كلمة «كلب» وينطق الكاف، ويميزها من الحروف القريبة في الصوت.', questionAr: 'ما الحرف الأول في كلمة «كلب»؟', answerAr: 'ك', distractorsAr: ['ق', 'ج'] },
  { titleAr: 'الرجل وصوت حرف الراء', focusAr: 'يتعرف المتعلم كلمة «رجل» ويقرأها، ويربط صوت الراء بالكلمة.', questionAr: 'بأي حرف تبدأ كلمة «رجل»؟', answerAr: 'ر', distractorsAr: ['ز', 'ل'] },
  { titleAr: 'ماذا يرسم الولد وماذا تكتب البنت؟', focusAr: 'يقرأ المتعلم أفعالًا وجملًا مثل يرسم الولد وتكتب البنت، ويميز الفعل بحسب الشخص.', questionAr: 'من تكتب في الجملة؟', answerAr: 'البنت', distractorsAr: ['الولد', 'الأسد'] },
  { titleAr: 'تكوين الكلمات من الحروف', focusAr: 'يرتب المتعلم حروفًا معروفة ليكوّن كلمات قصيرة مثل رجل وديك، ثم يقرأها.', questionAr: 'ما الذي نفعله بالحروف المرتبة لتكوين كلمة؟', answerAr: 'نقرأ الكلمة', distractorsAr: ['نحذفها كلها', 'نخلطها دون ترتيب'] },
  { titleAr: 'قرأ الولد وقرأت البنت', focusAr: 'يقرأ المتعلم جملًا قصيرة ويميز بين «قرأ» للولد و«قرأت» للبنت.', questionAr: 'أي صيغة تناسب البنت؟', answerAr: 'قرأت', distractorsAr: ['قرأ', 'يرسم'] },
  { titleAr: 'الثعلب وصوت حرف الثاء', focusAr: 'يتعرف المتعلم كلمة «ثعلب» ويلاحظ الثاء ونقاطها وموضعها في الكلمة.', questionAr: 'بأي حرف تبدأ كلمة «ثعلب»؟', answerAr: 'ث', distractorsAr: ['ت', 'ب'] },
  { titleAr: 'الذيل وصوت حرف الذال', focusAr: 'يقرأ المتعلم كلمة «ذيل» وينطق الذال ويميزها من الدال.', questionAr: 'ما الحرف الأول في كلمة «ذيل»؟', answerAr: 'ذ', distractorsAr: ['د', 'ز'] },
  { titleAr: 'الحل وصوت حرف الحاء', focusAr: 'يتعرف المتعلم كلمة «حل» ويربط صوت الحاء بالكلمة، مع التمييز بين ح وج وخ.', questionAr: 'أي حرف تبدأ به كلمة «حل»؟', answerAr: 'ح', distractorsAr: ['ج', 'خ'] },
  { titleAr: 'الثمر والثمار وصوت حرف الثاء', focusAr: 'يقرأ المتعلم كلمات فيها ثاء مثل ثمر وثمار، ويلاحظ الثاء في أول الكلمة ووسطها.', questionAr: 'أي كلمة فيها حرف الثاء؟', answerAr: 'ثمار', distractorsAr: ['حمار', 'علم'] },
  { titleAr: 'العلم وصوت حرف العين', focusAr: 'يتعرف المتعلم كلمة «علم» ويتمرن على صوت العين وأشكالها في الكلمات.', questionAr: 'بأي حرف تبدأ كلمة «علم»؟', answerAr: 'ع', distractorsAr: ['غ', 'أ'] },
  { titleAr: 'الهاتف وصوت حرف الهاء', focusAr: 'يقرأ المتعلم كلمة «هاتف» ويلاحظ صوت الهاء في بدايتها.', questionAr: 'ما الحرف الأول في كلمة «هاتف»؟', answerAr: 'هـ', distractorsAr: ['ح', 'خ'] },
  { titleAr: 'هذا وهذه', focusAr: 'يستخدم المتعلم «هذا» مع اسم مذكر و«هذه» مع اسم مؤنث في أمثلة مصورة.', questionAr: 'أكمل: ___ ولد.', answerAr: 'هذا', distractorsAr: ['هذه', 'أنتِ'] },
  { titleAr: 'ما هذا؟ وما هذه؟', focusAr: 'يسأل المتعلم ويجيب عن الأشياء والأشخاص باستخدام «ما هذا؟» و«ما هذه؟» و«من؟».', questionAr: 'أي سؤال يناسب السؤال عن شيء مؤنث؟', answerAr: 'ما هذه؟', distractorsAr: ['ما هذا؟', 'من أنتَ؟'] },
  { titleAr: 'الشجرة وصوت حرف الشين', focusAr: 'يتعرف المتعلم كلمة «شجرة» وينطق الشين، ويلاحظ اختلافها عن السين.', questionAr: 'ما الحرف الأول في كلمة «شجرة»؟', answerAr: 'ش', distractorsAr: ['س', 'ص'] },
  { titleAr: 'أفعال من حياتنا اليومية', focusAr: 'يقرأ المتعلم جملًا عن اللعب والأكل والشرب، ويربط الفعل بصاحبه في الجملة.', questionAr: 'أي فعل يناسب الكرة؟', answerAr: 'لعب', distractorsAr: ['شرب', 'نام'] },
  { titleAr: 'تعبير مصور: غذائي', focusAr: 'يصف المتعلم ما يراه في صور الطعام مستخدمًا أسماء مألوفة وجملًا بسيطة.', questionAr: 'ما المهارة التي نتدرب عليها عند الحديث عن صور الطعام؟', answerAr: 'وصف الصورة', distractorsAr: ['عد الحروف فقط', 'رسم خط مستقيم'] },
  { titleAr: 'الصقر وصوت حرف الصاد', focusAr: 'يتعرف المتعلم كلمة «صقر» ويلاحظ الصاد ويميز صوتها من السين.', questionAr: 'بأي حرف تبدأ كلمة «صقر»؟', answerAr: 'ص', distractorsAr: ['س', 'ض'] },
  { titleAr: 'الصباح في المدرسة', focusAr: 'يقرأ المتعلم عبارات عن الحضور إلى المدرسة صباحًا ومصافحة الأصدقاء، ويرتب معنى الجملة.', questionAr: 'متى يحضر الولد إلى المدرسة في النص؟', answerAr: 'في الصباح', distractorsAr: ['في الليل', 'وقت النوم'] },
  { titleAr: 'الزهرة وصوت حرف الزاي', focusAr: 'يتعرف المتعلم كلمة «زهرة» وينطق الزاي ويميزها من الذال.', questionAr: 'ما الحرف الأول في كلمة «زهرة»؟', answerAr: 'ز', distractorsAr: ['ذ', 'ر'] },
  { titleAr: 'الضب وصوت حرف الضاد', focusAr: 'يقرأ المتعلم كلمة «ضب» ويتعرف صوت الضاد وشكلها.', questionAr: 'بأي حرف تبدأ كلمة «ضب»؟', answerAr: 'ض', distractorsAr: ['ص', 'ط'] },
  { titleAr: 'أفعال الحركة: حضر وركض وقفز', focusAr: 'يقرأ المتعلم أفعالًا تصف الحركة، ويميز صيغة الفعل في الجمل القصيرة.', questionAr: 'أي كلمة تدل على القفز؟', answerAr: 'قفز', distractorsAr: ['قلم', 'زهرة'] },
  { titleAr: 'أقرأ وأستخدم هذا وهذه', focusAr: 'يقرأ المتعلم جملًا قصيرة ويختار «هذا» أو «هذه» بما يناسب الاسم.', questionAr: 'أكمل: ___ بنت.', answerAr: 'هذه', distractorsAr: ['هذا', 'نحن'] },
  { titleAr: 'الطير وصوت حرف الطاء', focusAr: 'يتعرف المتعلم كلمة «طير» ويلاحظ الطاء في بدايتها ويقرأ كلمات مماثلة.', questionAr: 'بأي حرف تبدأ كلمة «طير»؟', answerAr: 'ط', distractorsAr: ['ت', 'ظ'] },
  { titleAr: 'كلمات جديدة في قصة الصقر والكلب', focusAr: 'يقرأ المتعلم كلمات فعلية مثل هرب وسقط وجرى وطار، ويربطها بأحداث القصة.', questionAr: 'أي كلمة تدل على حركة في الهواء؟', answerAr: 'طار', distractorsAr: ['قلم', 'ذيل'] },
  { titleAr: 'تعبير مصور: غذائي', focusAr: 'يعبر المتعلم بجملة قصيرة عن صورة مرتبطة بالغذاء، ويذكر ما يراه فيها.', questionAr: 'بماذا نصف ما نراه في الصورة؟', answerAr: 'بجملة واضحة', distractorsAr: ['بحرف منفرد فقط', 'برقم لا علاقة له بها'] },
  { titleAr: 'الخروف وصوت حرف الخاء', focusAr: 'يتعرف المتعلم كلمة «خروف» وينطق الخاء ويميز صوتها من الحاء.', questionAr: 'ما الحرف الأول في كلمة «خروف»؟', answerAr: 'خ', distractorsAr: ['ح', 'ج'] },
  { titleAr: 'الغزال وصوت حرف الغين', focusAr: 'يقرأ المتعلم كلمة «غزال» وينطق الغين ويميزها من العين.', questionAr: 'بأي حرف تبدأ كلمة «غزال»؟', answerAr: 'غ', distractorsAr: ['ع', 'ق'] },
  { titleAr: 'قصة الولد والغنم', focusAr: 'يقرأ المتعلم جملًا مترابطة عن خروج الولد مع الكلب والغنم وأكل الغنم ورقادها، ويتتبع أحداثها.', questionAr: 'ماذا أكلت الغنم في القصة؟', answerAr: 'العشب', distractorsAr: ['القلم', 'الكتاب'] },
  { titleAr: 'آدم وسعاد: قال وقالت', focusAr: 'يقرأ المتعلم حوارًا قصيرًا ويميز المتحدث، ويستعمل أنا وأمي وهذا وهذه في السياق.', questionAr: 'أي صيغة تناسب كلام سعاد؟', answerAr: 'قالت سعاد', distractorsAr: ['قال آدم', 'طار الغزال'] },
  { titleAr: 'أنا أتعلم في الصف الأول', focusAr: 'يقرأ المتعلم عبارات عن التلميذ والتلميذة والكتاب والقلم والدرس، ويعبر عن تعلمه.', questionAr: 'بماذا أقرأ الدرس؟', answerAr: 'بالكتاب', distractorsAr: ['بالكرة', 'بالجرس'] },
  { titleAr: 'يوم العيد', focusAr: 'يقرأ المتعلم حوارًا عن فرحة العيد واللباس الجديد، ويميز بين عبارتي الولد والبنت.', questionAr: 'ماذا يلبس الطفل يوم العيد؟', answerAr: 'الجديد', distractorsAr: ['القديم الممزق', 'الحجر'] },
  { titleAr: 'علم السودان وكلمات من الدرس', focusAr: 'يقرأ المتعلم كلمات وجملًا بسيطة عن علم السودان وألوانه، ويتدرب على القراءة والكتابة.', questionAr: 'ما الألوان التي يذكرها وصف العلم؟', answerAr: 'الأحمر والأبيض والأخضر والأسود', distractorsAr: ['الأزرق والوردي فقط', 'الأصفر والبنفسجي فقط'] },
  { titleAr: 'هيا نلعب: أنا ونحن', focusAr: 'يقرأ المتعلم عبارات عن اللعب مع الأصدقاء وركوب الدراجات، ويميز «أنا» و«نحن».', questionAr: 'أي كلمة تدل على المتكلم مع جماعة؟', answerAr: 'نحن', distractorsAr: ['أنا', 'أنتَ'] },
  { titleAr: 'المطر والعمل والزراعة', focusAr: 'يقرأ المتعلم نصًا قصيرًا عن المطر والعمل وزراعة محاصيل مثل الذرة والدخن والقطن والفول.', questionAr: 'ماذا يساعد المطر الناس على فعله في النص؟', answerAr: 'زراعة المحاصيل', distractorsAr: ['إيقاف الزراعة', 'تلوين الكتاب'] },
  { titleAr: 'قصة الصدق', focusAr: 'يقرأ المتعلم قصة قصيرة ويتابع أحداثها، ثم يحدد السلوك الصادق في موقف يومي.', questionAr: 'أي سلوك يعبر عن الصدق؟', answerAr: 'قول الحقيقة', distractorsAr: ['إخفاء الحقيقة', 'اتهام الآخرين'] },
  { titleAr: 'زيارة حديقة الحيوان', focusAr: 'يقرأ المتعلم نصًا عن زيارة جماعية لحديقة الحيوان، ويتتبع الشخصيات وتسلسل الأحداث.', questionAr: 'إلى أين ذهب التلاميذ في النص؟', answerAr: 'حديقة الحيوان', distractorsAr: ['السوق', 'المزرعة'] },
  { titleAr: 'تعبير مصور: في حديقة الحيوان', focusAr: 'يصف المتعلم صورة من حديقة الحيوان، ويسمي ما يراه ويكوّن جملة مفهومة.', questionAr: 'ما المطلوب في التعبير المصور؟', answerAr: 'وصف ما أراه في الصورة', distractorsAr: ['نسخ رقم الصفحة', 'عد النقاط فقط'] }
];

export const SUDAN_PRIMARY_ARABIC_G1_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  page: SUDAN_PRIMARY_ARABIC_G1_TEXTBOOK_PAGES[index],
  titleAr: lesson.titleAr
}));

export const SUDAN_PRIMARY_ARABIC_G1_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-ar-g1-${order}`;
  const optionsAr = [lesson.answerAr, ...lesson.distractorsAr];
  const conceptsAr = [lesson.focusAr];
  const contentEn = `Read lesson ${order}, connect words and sounds with meaning, and practice the reading, speaking, or sentence skill introduced in this lesson.`;

  return {
    id,
    order,
    titleAr: `الدرس ${order}: ${lesson.titleAr}`,
    titleEn: `Lesson ${order}: Sudanese Arabic`,
    subtitleAr: 'اللغة العربية — الصف الأول الابتدائي',
    subtitleEn: 'Arabic Language — Grade 1',
    descriptionAr: lesson.focusAr,
    descriptionEn: contentEn,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G1',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الأول الابتدائي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 1 Primary — Republic of Sudan',
    termAr: 'دروس الكتاب',
    termEn: 'Textbook lessons',
    unitTitleAr: lesson.titleAr,
    unitTitleEn: `Lesson ${order}`,
    lessonNumberAr: `الدرس ${order}`,
    lessonNumberEn: `Lesson ${order}`,
    warmupHookAr: `انظر إلى الكلمات والصور، واستعد لقراءة درس «${lesson.titleAr}».`,
    warmupHookEn: `Look at the words and pictures, then get ready to read "${lesson.titleAr}".`,
    learningOutcomesAr: [lesson.focusAr, 'ينطق الكلمات بوضوح ويتتبعها قراءةً وكتابةً بمساعدة المعلم.'],
    learningOutcomesEn: [contentEn, 'Pronounce familiar words clearly and practice reading and writing with teacher guidance.'],
    keyConceptsAr: conceptsAr,
    keyConceptsEn: [contentEn],
    summaryAr: lesson.focusAr,
    summaryEn: contentEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: `Lesson ${order}`,
      contentAr: `${lesson.focusAr}\n\nتدريب: استمع إلى الكلمة، ورددها، ثم اقرأها. ابحث عن الحرف أو العبارة المستهدفة في كلمات الدرس.`,
      contentEn: `${contentEn}\n\nPractice: listen to the word, repeat it, and read it. Find the target letter or phrase in the lesson words.`
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم الدرس ${order}`,
      titleEn: `Lesson ${order} Check`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: lesson.questionAr,
        textEn: `Choose the correct answer for lesson ${order}.`,
        optionsAr,
        optionsEn: optionsAr.map((option) => option),
        correctIndex: 0,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: `Lesson ${order}`,
        explanationAr: `الإجابة الصحيحة: ${lesson.answerAr}.`,
        explanationEn: `Correct answer: ${lesson.answerAr}.`,
        difficulty: 'easy'
      }]
    }
  };
});
