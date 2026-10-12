import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ARABIC_G2_BOOK = {
  title: 'اللغة العربية — الصف الثاني الأساسي',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'مراجعة', titleEn: 'Review', firstPage: 1, lastPage: 8 },
    { titleAr: 'أسرتي', titleEn: 'My Family', firstPage: 9, lastPage: 25 },
    { titleAr: 'مدرستي', titleEn: 'My School', firstPage: 26, lastPage: 40 },
    { titleAr: 'ألعب وأتعلم', titleEn: 'I Play and Learn', firstPage: 41, lastPage: 61 },
    { titleAr: 'صحتي', titleEn: 'My Health', firstPage: 62, lastPage: 77 },
    { titleAr: 'بلادي', titleEn: 'My Country', firstPage: 78, lastPage: 96 }
  ]
} as const;

interface Lesson {
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
}

const lessons: Lesson[] = [
  { unit: 1, page: 2, titleAr: 'قراءة الكلمات وتحليلها', titleEn: 'Reading and Analyzing Words', focusAr: 'يراجع قراءة كلمات مألوفة، ويجزئها إلى أصواتها أو حروفها، ويربط الكلمة بمعناها وصورتها.', focusEn: 'Review reading familiar words, breaking them into sounds or letters, and connecting each word to its meaning and picture.', questionAr: 'ما المهارة التي تساعد على معرفة حروف الكلمة؟', questionEn: 'Which skill helps identify the letters in a word?', optionsAr: ['تحليل الكلمة', 'عدّ الجمل', 'رسم خط'], optionsEn: ['Analyzing the word', 'Counting sentences', 'Drawing a line'] },
  { unit: 1, page: 3, titleAr: 'النطق وملاحظة اختلاف الكلمات', titleEn: 'Pronunciation and Word Differences', focusAr: 'ينطق كلمات متقاربة بوضوح، ويلاحظ كيف يغير اختلاف صوت أو حرف معنى الكلمة.', focusEn: 'Pronounce similar words clearly and notice how changing a sound or letter can change meaning.', questionAr: 'ما الذي يساعد على التمييز بين كلمتين متقاربتين؟', questionEn: 'What helps distinguish two similar words?', optionsAr: ['الانتباه إلى أصوات الحروف', 'تجاهل النطق', 'حذف الحروف'], optionsEn: ['Listening to letter sounds', 'Ignoring pronunciation', 'Deleting letters'] },
  { unit: 1, page: 4, titleAr: 'اللام الشمسية والقمرية', titleEn: 'The Sun and Moon Forms of Alif-Lam', focusAr: 'يقرأ كلمات تبدأ بـ«الـ»، ويميز نطق اللام في أمثلة اللام الشمسية واللام القمرية.', focusEn: 'Read words beginning with alif-lam and distinguish how the lam is pronounced in sun-letter and moon-letter examples.', questionAr: 'في أي كلمة تظهر اللام منطوقة بوضوح؟', questionEn: 'In which word is the lam pronounced clearly?', optionsAr: ['القمر', 'الشمس', 'النهر'], optionsEn: ['Al-qamar', 'Ash-shams', 'An-nahr'] },
  { unit: 1, page: 6, titleAr: 'تمييز الحروف المتقاربة', titleEn: 'Distinguishing Similar Letters', focusAr: 'يقارن كلمات تختلف في حرف أو صوت، وينطقها بدقة ليميز معانيها.', focusEn: 'Compare words that differ by a letter or sound and pronounce them accurately to distinguish their meanings.', questionAr: 'كيف نميز كلمتين يختلف معناهما بحرف واحد؟', questionEn: 'How can we distinguish words whose meanings differ by one letter?', optionsAr: ['نلاحظ الحرف وننطق الكلمتين', 'نقرأهما بالسرعة نفسها دون انتباه', 'نحذف الحرف المختلف'], optionsEn: ['Notice the letter and pronounce both words', 'Read quickly without attention', 'Remove the different letter'] },
  { unit: 1, page: 8, titleAr: 'قراءة الكلمات وتحليلها إلى مقاطع', titleEn: 'Reading Words and Dividing Them into Syllables', focusAr: 'يقرأ الكلمات المألوفة ثم يحللها إلى حروف ومقاطع صوتية بسيطة.', focusEn: 'Read familiar words and divide them into letters and simple sound groups.', questionAr: 'إلى ماذا يمكن تحليل الكلمة عند تعلم قراءتها؟', questionEn: 'What can a word be broken into while learning to read it?', optionsAr: ['حروف ومقاطع', 'أرقام فقط', 'صور بلا أصوات'], optionsEn: ['Letters and syllables', 'Numbers only', 'Pictures without sounds'] },

  { unit: 2, page: 10, titleAr: 'أسرة نفيسة', titleEn: 'Nafisa’s Family', focusAr: 'يقرأ نصًا عن أسرة نفيسة، ويتعرف أفراد الأسرة وأعمالهم، ويجيب عن أسئلة مباشرة من النص.', focusEn: 'Read about Nafisa’s family, identify family members and their occupations, and answer direct questions from the text.', questionAr: 'ما الفكرة الرئيسة في نص نفيسة؟', questionEn: 'What is the main idea of Nafisa’s text?', optionsAr: ['أفراد أسرتها وتعاونهم', 'رحلة إلى البحر', 'مباراة رياضية'], optionsEn: ['Her family and how they help one another', 'A trip to the sea', 'A sports match'] },
  { unit: 2, page: 12, titleAr: 'بيت حسام', titleEn: 'Hussam’s Home', focusAr: 'يقرأ وصفًا للبيت ومرافقه، ويستخرج كلمات تصف المكان والأشياء القريبة منه.', focusEn: 'Read a description of a home and its surroundings, and identify words that describe places and objects.', questionAr: 'أي كلمة تصف بيتًا مرتبًا؟', questionEn: 'Which word can describe a tidy home?', optionsAr: ['نظيف', 'مكسور', 'عطشان'], optionsEn: ['Clean', 'Broken', 'Thirsty'] },
  { unit: 2, page: 14, titleAr: 'نشيد أمي', titleEn: 'A Song for My Mother', focusAr: 'يقرأ نشيدًا عن محبة الأم ورعايتها، ويعبر بجمل قصيرة عن الامتنان والبر.', focusEn: 'Read a song about a mother’s love and care, and express gratitude and kindness in short sentences.', questionAr: 'ما السلوك الذي يعبر عن محبة الأم؟', questionEn: 'Which action expresses love for one’s mother?', optionsAr: ['مساعدتها واحترامها', 'إزعاجها', 'إهمال نصيحتها'], optionsEn: ['Helping and respecting her', 'Disturbing her', 'Ignoring her advice'] },
  { unit: 2, page: 16, titleAr: 'نوافذ غرفتي', titleEn: 'The Windows in My Room', focusAr: 'يفهم نصًا حواريًا عن تهوية الغرفة، ويتعلم كلمات مرتبطة بالهواء والصحة.', focusEn: 'Understand a dialogue about airing a room and learn words related to air and health.', questionAr: 'لماذا نفتح نوافذ الغرفة أحيانًا؟', questionEn: 'Why do we sometimes open room windows?', optionsAr: ['لتجديد الهواء', 'لإطفاء المصباح', 'لإخفاء الأثاث'], optionsEn: ['To let fresh air in', 'To turn off a lamp', 'To hide furniture'] },
  { unit: 2, page: 18, titleAr: 'في مزرعة أبي', titleEn: 'At My Father’s Farm', focusAr: 'يقرأ نصًا عن المزرعة والمحاصيل والحيوانات، ويصنف كلمات من البيئة الزراعية.', focusEn: 'Read about a farm, crops, and animals, and classify words related to a farm environment.', questionAr: 'أين تأكل الحيوانات في المزرعة؟', questionEn: 'Where do the animals eat on a farm?', optionsAr: ['في الحظيرة أو المرعى', 'في المكتبة', 'في غرفة الصف'], optionsEn: ['In a pen or pasture', 'In a library', 'In a classroom'] },
  { unit: 2, page: 21, titleAr: 'الغراب النبيه', titleEn: 'The Clever Crow', focusAr: 'يتابع أحداث حكاية الغراب، ويرتب خطوات حل المشكلة، ويستنتج أثر التفكير قبل التصرف.', focusEn: 'Follow the crow’s story, order the steps used to solve a problem, and infer the value of thinking before acting.', questionAr: 'ما السلوك الذي ساعد الغراب على الوصول إلى الماء؟', questionEn: 'What helped the crow reach the water?', optionsAr: ['فكر واستخدم الحصى', 'ترك الجرّة ورحل', 'كسر الجرّة'], optionsEn: ['It thought and used pebbles', 'It left the jar and went away', 'It broke the jar'] },
  { unit: 2, page: 23, titleAr: 'نشيد أبي', titleEn: 'A Song for My Father', focusAr: 'يقرأ نشيدًا عن محبة الأب ورعايته، ويختار كلمات مناسبة للدعاء له وشكره.', focusEn: 'Read a song about a father’s love and care and choose suitable words to thank and wish him well.', questionAr: 'أي عبارة تناسب التعبير عن الشكر للأب؟', questionEn: 'Which phrase is suitable for thanking one’s father?', optionsAr: ['أشكرك يا أبي على رعايتك', 'لا أريد مساعدتك', 'لن أستمع إليك'], optionsEn: ['Thank you, Father, for caring for me', 'I do not want your help', 'I will not listen to you'] },
  { unit: 2, page: 25, titleAr: 'مطبخ بيتنا', titleEn: 'Our Home Kitchen', focusAr: 'يتعرف مفردات المطبخ وأدواته، ويقرأ جملًا تصف أنشطة الأسرة فيه.', focusEn: 'Learn kitchen vocabulary and read sentences describing family activities there.', questionAr: 'أي شيء يوجد عادةً في المطبخ؟', questionEn: 'Which item is usually found in a kitchen?', optionsAr: ['قدر الطبخ', 'سبورة المدرسة', 'إشارة المرور'], optionsEn: ['A cooking pot', 'A classroom board', 'A traffic light'] },

  { unit: 3, page: 27, titleAr: 'مدرستي', titleEn: 'My School', focusAr: 'يقرأ وصفًا للمدرسة ومرافقها، ويحدد الأفكار والتفاصيل التي تصف مكان التعلم.', focusEn: 'Read a description of a school and its facilities, identifying details about the learning environment.', questionAr: 'أي مرفق يساعد التلاميذ على القراءة والبحث؟', questionEn: 'Which school facility helps pupils read and explore?', optionsAr: ['المكتبة', 'المطبخ', 'المزرعة'], optionsEn: ['The library', 'The kitchen', 'The farm'] },
  { unit: 3, page: 30, titleAr: 'فصلي', titleEn: 'My Classroom', focusAr: 'يقرأ نصًا عن الفصل ومقاعده ولوحاته، ويصف ما فيه بجمل مفيدة.', focusEn: 'Read about a classroom, its seats and displays, and describe it in complete sentences.', questionAr: 'ما السلوك الذي يحافظ على نظافة الفصل؟', questionEn: 'Which action helps keep a classroom clean?', optionsAr: ['أنظفه مع زملائي', 'أرمي المخلفات على الأرض', 'أكتب على الجدران'], optionsEn: ['Clean it with my classmates', 'Throw rubbish on the floor', 'Write on the walls'] },
  { unit: 3, page: 32, titleAr: 'عام دراسي جديد', titleEn: 'A New School Year', focusAr: 'يقرأ نصًا عن بداية العام الدراسي، ويرتب أحداث الاستعداد للمدرسة، ويستخدم كلمات الزمن.', focusEn: 'Read about the start of a school year, order preparation events, and use words that describe time.', questionAr: 'أي فعل يناسب الاستعداد ليوم دراسي جديد؟', questionEn: 'Which action helps prepare for a new school day?', optionsAr: ['أستيقظ مبكرًا', 'أتأخر عن المدرسة', 'أهمل كتبي'], optionsEn: ['Wake up early', 'Arrive late at school', 'Neglect my books'] },
  { unit: 3, page: 35, titleAr: 'طابور الصباح', titleEn: 'The Morning Assembly Line', focusAr: 'يفهم نصًا عن الطابور الصباحي، ويصف ترتيب التلاميذ والأنشطة التي تبدأ بها المدرسة.', focusEn: 'Understand a text about morning assembly and describe how pupils line up and begin the school day.', questionAr: 'كيف يقف التلاميذ في الطابور؟', questionEn: 'How do pupils stand during assembly?', optionsAr: ['في صفوف منظمة', 'متفرقين في الطريق', 'داخل المكتبة'], optionsEn: ['In orderly lines', 'Scattered on the road', 'Inside the library'] },
  { unit: 3, page: 37, titleAr: 'أهلًا بها مدرستي', titleEn: 'Welcome, My School', focusAr: 'يقرأ أبياتًا ترحب بالمدرسة، ويعبر عن الاعتزاز بالتعلم والانتماء إلى المدرسة.', focusEn: 'Read welcoming verses about school and express pride in learning and belonging to the school.', questionAr: 'بماذا يشعر التلميذ تجاه مدرسته؟', questionEn: 'How does the pupil feel about school?', optionsAr: ['الترحيب والاعتزاز', 'الخوف من الكتب', 'الرغبة في إهمالها'], optionsEn: ['Welcome and pride', 'Fear of books', 'A wish to neglect it'] },
  { unit: 3, page: 38, titleAr: 'هدية النجاح', titleEn: 'A Gift for Success', focusAr: 'يتابع قصة نجاح أدروب، ويحدد الشخصيات والأحداث، ويعبر عن قيمة الاجتهاد والتشجيع.', focusEn: 'Follow Adrob’s success story, identify characters and events, and discuss effort and encouragement.', questionAr: 'ما الذي يساعد التلميذ على النجاح؟', questionEn: 'What helps a pupil succeed?', optionsAr: ['الاجتهاد والمثابرة', 'ترك الدراسة', 'إهمال الواجبات'], optionsEn: ['Effort and persistence', 'Giving up study', 'Neglecting assignments'] },

  { unit: 4, page: 42, titleAr: 'الرياضة البدنية', titleEn: 'Physical Exercise', focusAr: 'يقرأ عن الرياضة وفوائدها للجسم، ويتحدث عن نشاط بدني يحبه مع مراعاة السلامة.', focusEn: 'Read about exercise and its benefits, and talk about a favorite physical activity while considering safety.', questionAr: 'ما فائدة ممارسة الرياضة؟', questionEn: 'What is one benefit of exercise?', optionsAr: ['تقوية الجسم', 'إضعاف الجسم دائمًا', 'منع الحركة'], optionsEn: ['Strengthening the body', 'Always weakening the body', 'Preventing movement'] },
  { unit: 4, page: 44, titleAr: 'كتابي', titleEn: 'My Book', focusAr: 'يقرأ نشيدًا عن الكتاب والقراءة، ويعبر عن فائدة القراءة في التعلم واكتساب المعرفة.', focusEn: 'Read a song about books and reading and explain how reading supports learning and knowledge.', questionAr: 'ما فائدة القراءة؟', questionEn: 'What is one benefit of reading?', optionsAr: ['اكتساب المعرفة', 'نسيان الكلمات', 'إضاعة كل الوقت'], optionsEn: ['Gaining knowledge', 'Forgetting words', 'Wasting all time'] },
  { unit: 4, page: 46, titleAr: 'لعب من الورق', titleEn: 'Toys Made from Paper', focusAr: 'يقرأ حوارًا عن صنع ألعاب ورقية، ويتعرف خطوات العمل والمواد البسيطة المستخدمة.', focusEn: 'Read a dialogue about making paper toys and identify the steps and simple materials used.', questionAr: 'ما إحدى الألعاب التي يمكن صنعها من الورق؟', questionEn: 'Which is a toy that can be made from paper?', optionsAr: ['طائرة ورقية', 'قدر معدني', 'حذاء جلدي'], optionsEn: ['A paper airplane', 'A metal pot', 'A leather shoe'] },
  { unit: 4, page: 49, titleAr: 'تعبير: الرياضة', titleEn: 'Writing: Sports', focusAr: 'يلاحظ صورًا لأنشطة رياضية، ثم يجيب بجمل كاملة ويستخدم أسماء الألعاب والأفعال المناسبة.', focusEn: 'Observe pictures of sports, answer in complete sentences, and use suitable names of games and actions.', questionAr: 'أي جملة مكتملة تصف نشاطًا رياضيًا؟', questionEn: 'Which complete sentence describes a sport?', optionsAr: ['يلعب الأطفال كرة القدم.', 'كرة والأطفال.', 'في الملعب.'], optionsEn: ['The children play football.', 'Ball and children.', 'At the field.'], },
  { unit: 4, page: 51, titleAr: 'هوايات الأطفال', titleEn: 'Children’s Hobbies', focusAr: 'يقرأ عن أطفال من مدن سودانية وهواياتهم، ويحدد معلومات الشخص والمكان والهواية.', focusEn: 'Read about children from Sudanese towns and their hobbies, identifying people, places, and activities.', questionAr: 'أي سؤال يساعد على معرفة هواية شخص؟', questionEn: 'Which question helps find out someone’s hobby?', optionsAr: ['ما هوايتك؟', 'كم نافذة في الفصل؟', 'أين الملعقة؟'], optionsEn: ['What is your hobby?', 'How many windows are in the classroom?', 'Where is the spoon?'] },
  { unit: 4, page: 54, titleAr: 'الفتى النشيط', titleEn: 'The Active Boy', focusAr: 'يقرأ نصًا أو نشيدًا عن النشاط والاجتهاد، ويستخرج أفعالًا تصف العمل اليومي.', focusEn: 'Read a text or song about activity and diligence and identify verbs that describe daily actions.', questionAr: 'أي صفة تناسب الفتى النشيط؟', questionEn: 'Which quality suits an active boy?', optionsAr: ['مجتهد', 'كسول', 'مهمل'], optionsEn: ['Diligent', 'Lazy', 'Careless'] },
  { unit: 4, page: 56, titleAr: 'أنا والحاسوب', titleEn: 'Me and the Computer', focusAr: 'يقرأ عن التعلم باستخدام الحاسوب، ويذكر استعمالًا مفيدًا وآمنًا للتقنية.', focusEn: 'Read about learning with a computer and name a useful and safe way to use technology.', questionAr: 'أي استخدام للحاسوب يساعد على التعلم؟', questionEn: 'Which use of a computer can support learning?', optionsAr: ['قراءة مادة تعليمية', 'إزعاج الآخرين', 'ترك الواجبات دائمًا'], optionsEn: ['Reading learning material', 'Disturbing others', 'Always leaving assignments undone'] },
  { unit: 4, page: 58, titleAr: 'أحب القراءة', titleEn: 'I Love Reading', focusAr: 'يفهم قصة عن طفل يحب القراءة، ويحدد ما يشجعه على القراءة وكيف يعامل أصدقاءه.', focusEn: 'Understand a story about a child who enjoys reading and identify what encourages reading and how friends should behave.', questionAr: 'كيف يتعامل الصديق مع من يقرأ؟', questionEn: 'How should a friend treat someone who is reading?', optionsAr: ['يشجعه ويحترم تركيزه', 'يسخر منه', 'يمزق كتابه'], optionsEn: ['Encourage them and respect their focus', 'Mock them', 'Tear their book'] },
  { unit: 4, page: 60, titleAr: 'الرسام الصغير', titleEn: 'The Little Artist', focusAr: 'يقرأ قصة مصورة عن الرسم والطبيعة، ويصف عناصر اللوحة ويعبر عن فكرة الرسام.', focusEn: 'Read an illustrated story about art and nature, describe picture details, and express the artist’s idea.', questionAr: 'ما الذي يساعد على وصف لوحة؟', questionEn: 'What helps describe a picture?', optionsAr: ['ذكر ما نراه فيها', 'إغلاق العينين', 'تجاهل تفاصيلها'], optionsEn: ['Naming what we see in it', 'Closing our eyes', 'Ignoring its details'] },

  { unit: 5, page: 63, titleAr: 'نظافة الحي', titleEn: 'Keeping the Neighborhood Clean', focusAr: 'يقرأ حوارًا عن نظافة الحي، ويقترح أعمالًا جماعية تقلل الأوساخ والمياه الراكدة.', focusEn: 'Read a dialogue about neighborhood cleanliness and suggest shared actions to reduce rubbish and stagnant water.', questionAr: 'ما العمل الذي يساعد على نظافة الحي؟', questionEn: 'Which action helps keep a neighborhood clean?', optionsAr: ['جمع النفايات والتخلص منها بأمان', 'تركها قرب المنازل', 'رميها في الماء'], optionsEn: ['Collecting rubbish and disposing of it safely', 'Leaving it near homes', 'Throwing it into water'] },
  { unit: 5, page: 65, titleAr: 'الوقاية خير من العلاج', titleEn: 'Prevention Is Better Than Cure', focusAr: 'يتعرف سلوكيات وقائية تحمي الصحة، مثل التخلص الآمن من النفايات والحد من الحشرات الناقلة للمرض.', focusEn: 'Learn preventive habits that protect health, including safe waste disposal and reducing disease-carrying insects.', questionAr: 'ما الذي يساعد على الحد من تكاثر الناموس؟', questionEn: 'What can help reduce mosquitoes?', optionsAr: ['إزالة المياه الراكدة', 'تجميع الماء حول المنزل', 'ترك الحفر ممتلئة بالماء'], optionsEn: ['Removing stagnant water', 'Collecting water around the home', 'Leaving water-filled holes'] },
  { unit: 5, page: 67, titleAr: 'نشيد دعاء التلميذ', titleEn: 'A Pupil’s Prayer', focusAr: 'يقرأ نشيد دعاء التلميذ، ويحدد معاني طلب العون والتوفيق في الدراسة والعمل.', focusEn: 'Read a pupil’s prayer and identify its meanings of asking for help and success in study and good work.', questionAr: 'فيم يطلب التلميذ العون؟', questionEn: 'What does the pupil ask for help with?', optionsAr: ['الدروس والواجبات', 'إيذاء الآخرين', 'إهمال المدرسة'], optionsEn: ['Lessons and assignments', 'Harming others', 'Neglecting school'] },
  { unit: 5, page: 69, titleAr: 'غذائي السليم', titleEn: 'Healthy Food', focusAr: 'يتعرف أهمية الغذاء المتنوع والمتوازن، ويميز عادات الأكل التي تساعد على صحة الجسم.', focusEn: 'Understand the importance of varied, balanced food and identify eating habits that support health.', questionAr: 'أي اختيار يساعد على غذاء متنوع؟', questionEn: 'Which choice helps make a diet varied?', optionsAr: ['تناول أصناف مختلفة ومفيدة', 'تناول صنف واحد دائمًا', 'ترك الطعام الصحي'], optionsEn: ['Eating different nourishing foods', 'Always eating one kind of food', 'Avoiding healthy food'] },
  { unit: 5, page: 71, titleAr: 'نشيد نصائح غالية', titleEn: 'Valuable Health Advice', focusAr: 'يستخرج نصائح صحية من النشيد، مثل العناية بالأسنان والنظافة واختيار الطعام المناسب.', focusEn: 'Identify health advice in the song, such as caring for teeth, keeping clean, and choosing suitable food.', questionAr: 'بماذا ننظف أسناننا؟', questionEn: 'What do we use to clean our teeth?', optionsAr: ['الفرشاة والمعجون', 'التراب', 'الورق'], optionsEn: ['A toothbrush and toothpaste', 'Soil', 'Paper'] },
  { unit: 5, page: 73, titleAr: 'حماية الطفل', titleEn: 'Keeping Children Safe', focusAr: 'يفهم قصة توضح مخاطر تناول الدواء دون إشراف، ويتعلم إخبار شخص بالغ عند الشعور بالخطر أو المرض.', focusEn: 'Understand a story about the danger of taking medicine without supervision and learn to tell an adult when unsafe or unwell.', questionAr: 'ماذا يفعل الطفل إذا وجد دواءً؟', questionEn: 'What should a child do if they find medicine?', optionsAr: ['يخبر شخصًا بالغًا ولا يتناوله', 'يتناوله وحده', 'يعطيه لطفل آخر'], optionsEn: ['Tell an adult and not take it', 'Take it alone', 'Give it to another child'] },
  { unit: 5, page: 75, titleAr: 'الرحلة', titleEn: 'The Journey', focusAr: 'يتابع أحداث رحلة عائلية، ويرتب تسلسلها، ويتعرف مفردات السفر والزيارة.', focusEn: 'Follow the events of a family journey, put them in order, and learn words related to travel and visiting.', questionAr: 'ما الذي نفعله قبل بدء الرحلة؟', questionEn: 'What should we do before beginning a journey?', optionsAr: ['نستعد ونرافق الأسرة', 'نبتعد دون إخبار أحد', 'نترك حاجاتنا في الطريق'], optionsEn: ['Prepare and go with the family', 'Leave without telling anyone', 'Leave our belongings on the road'] },
  { unit: 5, page: 76, titleAr: 'النظافة الشخصية', titleEn: 'Personal Cleanliness', focusAr: 'يصف عادات النظافة اليومية، مثل الاستحمام وغسل اليدين والعناية بالملابس والأسنان.', focusEn: 'Describe daily hygiene habits such as bathing, washing hands, and caring for clothes and teeth.', questionAr: 'أي عادة تساعد على نظافة الجسم؟', questionEn: 'Which habit helps keep the body clean?', optionsAr: ['الاستحمام بالماء والصابون', 'ارتداء ملابس متسخة', 'عدم غسل اليدين'], optionsEn: ['Bathing with water and soap', 'Wearing dirty clothes', 'Not washing hands'] },

  { unit: 6, page: 79, titleAr: 'سوداننا', titleEn: 'Our Sudan', focusAr: 'يقرأ كلمات ونشيدًا عن الوطن، ويستخدم عبارات تصف الأسرة والأرض والانتماء إلى السودان.', focusEn: 'Read words and a song about the homeland and use phrases describing family, land, and belonging to Sudan.', questionAr: 'عن أي وطن يتحدث الدرس؟', questionEn: 'Which homeland does the lesson describe?', optionsAr: ['السودان', 'بلد بعيد غير مسمى', 'مدينة خيالية'], optionsEn: ['Sudan', 'An unnamed distant country', 'An imaginary city'] },
  { unit: 6, page: 80, titleAr: 'علم البلاد', titleEn: 'The National Flag', focusAr: 'يتعرف علم السودان وألوانه، ويقرأ جملًا تصف مواضع الألوان والعلم بوصفه رمزًا وطنيًا.', focusEn: 'Recognize Sudan’s flag and its colors, read sentences describing its design, and understand it as a national symbol.', questionAr: 'ما الذي يمثله العلم؟', questionEn: 'What does a flag represent?', optionsAr: ['رمزًا للوطن', 'أداة للكتابة', 'نوعًا من الطعام'], optionsEn: ['A symbol of the country', 'A writing tool', 'A kind of food'] },
  { unit: 6, page: 83, titleAr: 'بلادي غنية', titleEn: 'My Country Is Rich', focusAr: 'يقرأ وصفًا للسودان وموارده وأرضه، ويكمل جملًا بكلمات تصف الوطن والعمل على بنائه.', focusEn: 'Read a description of Sudan, its resources and land, and complete sentences about the homeland and contributing to it.', questionAr: 'كيف نساهم في بناء بلادنا؟', questionEn: 'How can we help build our country?', optionsAr: ['بالعمل والتعاون', 'بإهمال الممتلكات', 'بإتلاف الموارد'], optionsEn: ['Through work and cooperation', 'By neglecting property', 'By damaging resources'] },
  { unit: 6, page: 86, titleAr: 'تعبير عن الزراعة والوطن', titleEn: 'Writing About Farming and the Homeland', focusAr: 'يلاحظ صورًا عن الزراعة، ويصف ما يراه بجمل قصيرة مترابطة مستخدمًا أسماء المحاصيل والأفعال.', focusEn: 'Observe pictures about farming and describe them in connected short sentences using crop names and action words.', questionAr: 'ما الذي يساعد على وصف صورة زراعية؟', questionEn: 'What helps describe a farming picture?', optionsAr: ['ذكر المحصول والعمل الظاهر', 'كتابة أرقام بلا معنى', 'تجاهل الصورة'], optionsEn: ['Naming the crop and visible activity', 'Writing meaningless numbers', 'Ignoring the picture'] },
  { unit: 6, page: 88, titleAr: 'نشيد المطر', titleEn: 'A Song About Rain', focusAr: 'يقرأ نشيدًا عن المطر وأثره في الأرض والنبات، ويذكر مفردات مرتبطة بالماء والزراعة.', focusEn: 'Read a song about rain and its effect on land and plants, and identify words related to water and farming.', questionAr: 'ما أثر المطر في النبات؟', questionEn: 'What effect can rain have on plants?', optionsAr: ['يساعدها على النمو', 'يجعلها كتبًا', 'يحولها إلى ألعاب'], optionsEn: ['It helps them grow', 'It turns them into books', 'It turns them into toys'] },
  { unit: 6, page: 90, titleAr: 'مدينة من بلادي', titleEn: 'A City in My Country', focusAr: 'يقرأ عن مدينة سودانية، ويستخرج معلومات عن موقعها واتجاهها، ويقارن بين المدن والبيئات.', focusEn: 'Read about a Sudanese city, identify its location and direction, and compare towns and environments.', questionAr: 'أي كلمة تساعد على وصف موقع مدينة؟', questionEn: 'Which word helps describe a city’s location?', optionsAr: ['شرق', 'سريع', 'ناعم'], optionsEn: ['East', 'Fast', 'Soft'] },
  { unit: 6, page: 91, titleAr: 'صناعاتنا اليدوية', titleEn: 'Our Handicrafts', focusAr: 'يتعرف خامات طبيعية ومعدنية تستخدم في الصناعات اليدوية، ويربط المنتج بالمادة المناسبة.', focusEn: 'Learn about natural and mineral materials used in handicrafts and match products with suitable materials.', questionAr: 'أي مادة نباتية يمكن استخدامها في صناعة بعض المنتجات؟', questionEn: 'Which plant-based material can be used to make some products?', optionsAr: ['الخشب', 'الحديد', 'الذهب'], optionsEn: ['Wood', 'Iron', 'Gold'] },
  { unit: 6, page: 93, titleAr: 'تعبير: في السوق', titleEn: 'Writing: At the Market', focusAr: 'يصف صور السوق وأعمال الباعة، ويستخدم كلمات البيع والشراء والقياس في جمل واضحة.', focusEn: 'Describe market pictures and sellers’ work, using words for buying, selling, and measuring in clear sentences.', questionAr: 'بأي وحدة يمكن أن يبيع البقال السكر؟', questionEn: 'Which unit might a grocer use to sell sugar?', optionsAr: ['الكيلوغرام', 'الساعة', 'المتر المربع'], optionsEn: ['The kilogram', 'The hour', 'The square meter'] },
  { unit: 6, page: 95, titleAr: 'نعم للسلام لا للحرب', titleEn: 'Yes to Peace, No to War', focusAr: 'يقرأ نصًا يدعو إلى السلام، ويتعرف آثار النزاع على الناس، ويعبر عن أهمية الأمان والتعايش.', focusEn: 'Read a text promoting peace, recognize how conflict affects people, and express the importance of safety and coexistence.', questionAr: 'ما القيمة التي يدعو إليها الدرس؟', questionEn: 'Which value does the lesson promote?', optionsAr: ['السلام والتعايش', 'الخصام وإيذاء الناس', 'إتلاف الممتلكات'], optionsEn: ['Peace and coexistence', 'Conflict and harming people', 'Damaging property'] }
];

export const SUDAN_PRIMARY_ARABIC_G2_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ARABIC_G2_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-ar-g2-${order}`;
  const unit = SUDAN_PRIMARY_ARABIC_G2_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `اللغة العربية — الصف الثاني الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 2 Arabic — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثاني الابتدائي',
    gradeLevelNameEn: 'Grade 2 Primary',
    termAr: 'اللغة العربية — الصف الثاني',
    termEn: 'Grade 2 Arabic',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل عنوان «${lesson.titleAr}» وفكر في كلمة أو صورة ترتبط به.`,
    warmupHookEn: `Look at “${lesson.titleEn}” and think of a word or picture connected to it.`,
    learningOutcomesAr: [lesson.focusAr, 'يقرأ الكلمات أو الجمل المستهدفة قراءة واضحة، ويجيب عن سؤال مرتبط بالموضوع.'],
    learningOutcomesEn: [lesson.focusEn, 'Read the target words or sentences clearly and answer a question about the topic.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط: اقرأ كلمات أو جملًا قصيرة عن الموضوع، ثم صف صورة مرتبطة به بجملة مفيدة من إنشائك.`,
      contentEn: `${lesson.focusEn}\n\nActivity: Read short words or sentences about the topic, then describe a related picture in an original complete sentence.`
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
    }
  };
});
