import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ISLAMIC_G1_BOOK = {
  title: 'التربية الإسلامية — الصف الأول الأساسي',
  edition: '2020م',
  units: [
    { titleAr: 'سور من القرآن الكريم', titleEn: 'Selected Quranic Surahs', firstPage: 1, lastPage: 9 },
    { titleAr: 'أحاديث من الحديث النبوي الشريف', titleEn: 'Selected Prophetic Hadiths', firstPage: 10, lastPage: 13 },
    { titleAr: 'الإسلام والإيمان', titleEn: 'Islam and Faith', firstPage: 14, lastPage: 16 },
    { titleAr: 'الطهارة والوضوء', titleEn: 'Purification and Ablution', firstPage: 17, lastPage: 22 },
    { titleAr: 'التهذيب والآداب', titleEn: 'Good Character and Manners', firstPage: 23, lastPage: 30 },
    { titleAr: 'السيرة النبوية الشريفة', titleEn: 'The Prophetic Biography', firstPage: 31, lastPage: 32 }
  ]
} as const;

interface IslamicLesson {
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

const lessons: IslamicLesson[] = [
  { unit: 1, page: 3, titleAr: 'سورتا الفلق والإخلاص', titleEn: 'Surahs Al-Falaq and Al-Ikhlas', focusAr: 'يتدرب المتعلم على تلاوة سورتي الفلق والإخلاص وحفظهما، وينصت إلى التلاوة ويرددها بتأنٍ.', focusEn: 'Practice listening to, reciting, and memorizing Surahs Al-Falaq and Al-Ikhlas.', questionAr: 'أي السورتين يبدأ اسمها بحرف الفاء؟', questionEn: 'Which surah name begins with the letter F?', optionsAr: ['الفلق', 'الإخلاص', 'الناس'], optionsEn: ['Al-Falaq', 'Al-Ikhlas', 'An-Nas'] },
  { unit: 1, page: 4, titleAr: 'سورتا الناس والفاتحة', titleEn: 'Surahs An-Nas and Al-Fatiha', focusAr: 'يتلو المتعلم سورة الناس وسورة الفاتحة ويراجع حفظهما، مع العناية بالاستماع والنطق الواضح.', focusEn: 'Recite and review Surahs An-Nas and Al-Fatiha, listening carefully and speaking clearly.', questionAr: 'أي سورة يفتتح بها المصلي قراءته في الصلاة؟', questionEn: 'Which surah begins the recitation in prayer?', optionsAr: ['الفاتحة', 'الناس', 'الفلق'], optionsEn: ['Al-Fatiha', 'An-Nas', 'Al-Falaq'] },
  { unit: 1, page: 5, titleAr: 'سور الكوثر والنصر والعصر', titleEn: 'Surahs Al-Kawthar, An-Nasr, and Al-Asr', focusAr: 'يتدرب المتعلم على تلاوة سور الكوثر والنصر والعصر ومراجعتها، ويقسم الحفظ إلى مقاطع قصيرة.', focusEn: 'Practice reciting and reviewing Surahs Al-Kawthar, An-Nasr, and Al-Asr in short sections.', questionAr: 'أي اسم من الآتي هو اسم سورة؟', questionEn: 'Which of these is the name of a surah?', optionsAr: ['الكوثر', 'الوضوء', 'الأمانة'], optionsEn: ['Al-Kawthar', 'Ablution', 'Trustworthiness'] },
  { unit: 1, page: 6, titleAr: 'سورتا العاديات والقارعة', titleEn: 'Surahs Al-Adiyat and Al-Qariah', focusAr: 'يستمع المتعلم إلى تلاوة سورتي العاديات والقارعة ويتدرب على القراءة الصحيحة دون استعجال.', focusEn: 'Listen to and practice reciting Surahs Al-Adiyat and Al-Qariah carefully and without rushing.', questionAr: 'أي السورتين يرد اسمها في هذا الدرس؟', questionEn: 'Which surah is included in this lesson?', optionsAr: ['القارعة', 'الفاتحة', 'الإخلاص'], optionsEn: ['Al-Qariah', 'Al-Fatiha', 'Al-Ikhlas'] },
  { unit: 1, page: 6, titleAr: 'سور التكاثر والهمزة والفيل', titleEn: 'Surahs At-Takathur, Al-Humazah, and Al-Fil', focusAr: 'يتدرب المتعلم على تلاوة سور التكاثر والهمزة والفيل، ويميز أسماءها عند الاستماع إليها.', focusEn: 'Practice reciting Surahs At-Takathur, Al-Humazah, and Al-Fil, and recognize their names when heard.', questionAr: 'أي سورة من الآتي ضمن سور التلاوة؟', questionEn: 'Which of these is included among the recitation surahs?', optionsAr: ['الفيل', 'الناس', 'الإخلاص'], optionsEn: ['Al-Fil', 'An-Nas', 'Al-Ikhlas'] },
  { unit: 1, page: 7, titleAr: 'سورتا الأعلى والبلد', titleEn: 'Surahs Al-Ala and Al-Balad', focusAr: 'يستمع المتعلم إلى سورتي الأعلى والبلد ويتدرب على تلاوتهما بتدرج ومراجعة ما سبق تعلمه.', focusEn: 'Listen to and practice reciting Surahs Al-Ala and Al-Balad, gradually reviewing earlier practice.', questionAr: 'ما السورة التي يختتم بها هذا الجزء من سور التلاوة؟', questionEn: 'Which surah concludes this group of recitation surahs?', optionsAr: ['البلد', 'الفيل', 'العاديات'], optionsEn: ['Al-Balad', 'Al-Fil', 'Al-Adiyat'] },

  { unit: 2, page: 11, titleAr: 'الحديث عن مكارم الأخلاق', titleEn: 'Hadith: Noble Character', focusAr: 'يتعرف المتعلم أن الدعوة إلى مكارم الأخلاق من القيم الأساسية، ويذكر سلوكًا حسنًا يطبقه في يومه.', focusEn: 'Recognize good character as a central value and name one good behavior to practice each day.', questionAr: 'أي سلوك يدل على حسن الخلق؟', questionEn: 'Which action shows good character?', optionsAr: ['الرفق بالآخرين', 'إيذاء الزملاء', 'السخرية من الناس'], optionsEn: ['Treating others kindly', 'Hurting classmates', 'Mocking people'] },
  { unit: 2, page: 11, titleAr: 'الإيمان وحسن الخلق', titleEn: 'Faith and Good Character', focusAr: 'يربط المتعلم بين الإيمان والسلوك الحسن، ويختار أمثلة على الصدق والرفق والاحترام.', focusEn: 'Connect faith with good conduct and identify examples of honesty, kindness, and respect.', questionAr: 'أي صفة تناسب المؤمن حسن الخلق؟', questionEn: 'Which quality describes a person of good character?', optionsAr: ['الصدق', 'الغش', 'الأذى'], optionsEn: ['Honesty', 'Cheating', 'Harm'] },
  { unit: 2, page: 11, titleAr: 'الأمانة والابتعاد عن الغش', titleEn: 'Trustworthiness and Avoiding Cheating', focusAr: 'يفهم المتعلم أن الغش سلوك مرفوض، ويتدرب على الأمانة في اللعب والتعلم والتعامل.', focusEn: 'Understand that cheating is wrong and practice honesty in play, learning, and everyday dealings.', questionAr: 'ماذا يفعل المتعلم إذا وجد شيئًا ليس له؟', questionEn: 'What should a learner do after finding something that is not theirs?', optionsAr: ['يسلمه لصاحبه أو لمعلمه', 'يخفيه لنفسه', 'يعطيه لمن لا يعرفه'], optionsEn: ['Return it to its owner or teacher', 'Keep it hidden', 'Give it to a stranger'] },
  { unit: 2, page: 12, titleAr: 'ترك ما لا يعنينا', titleEn: 'Avoiding What Does Not Concern Us', focusAr: 'يتعلم المتعلم أن يوجه وقته وكلامه إلى ما ينفعه، وألا يتدخل فيما لا يعنيه أو يضر غيره.', focusEn: 'Learn to focus time and words on what is useful and avoid interfering in matters that do not concern us.', questionAr: 'أي تصرف يناسب هذا الأدب؟', questionEn: 'Which action follows this good manner?', optionsAr: ['الانشغال بما ينفعني', 'التجسس على الآخرين', 'نشر كلام لا أتأكد منه'], optionsEn: ['Focusing on what is useful', 'Spying on others', 'Sharing unverified talk'] },
  { unit: 2, page: 12, titleAr: 'بر الوالدين والإحسان إلى الأم', titleEn: 'Kindness to Parents and Care for Mothers', focusAr: 'يتعرف المتعلم مكانة الوالدين، ويذكر أفعالًا يومية يظهر بها الاحترام والمساعدة واللطف.', focusEn: 'Recognize the importance of parents and name everyday ways to show respect, help, and kindness.', questionAr: 'أي عمل يدل على بر الوالدين؟', questionEn: 'Which action shows kindness to parents?', optionsAr: ['مساعدتهما والتحدث إليهما بلطف', 'إهمال طلبهما', 'رفع الصوت عليهما'], optionsEn: ['Helping and speaking kindly to them', 'Ignoring their requests', 'Shouting at them'] },
  { unit: 2, page: 13, titleAr: 'حفظ الناس من الأذى', titleEn: 'Keeping Others Safe from Harm', focusAr: 'يفهم المتعلم أن المسلم يحفظ الآخرين من أذى اللسان واليد، ويطبق ذلك في البيت والمدرسة.', focusEn: 'Understand the importance of protecting others from harm through words and actions at home and school.', questionAr: 'أي تصرف يحفظ الآخرين من الأذى؟', questionEn: 'Which action protects others from harm?', optionsAr: ['الكلام الطيب وعدم الضرب', 'الشتم والدفع', 'إفساد ممتلكات الآخرين'], optionsEn: ['Kind words and not hitting', 'Insults and pushing', 'Damaging others’ belongings'] },
  { unit: 2, page: 13, titleAr: 'الإحسان إلى الأم', titleEn: 'Showing Care for One’s Mother', focusAr: 'يعزز المتعلم معنى الإحسان إلى الأم، ويقترح وسائل مناسبة لشكرها وخدمتها واحترامها.', focusEn: 'Strengthen understanding of kindness to one’s mother and suggest respectful ways to thank and help her.', questionAr: 'كيف يظهر الطفل إحسانه إلى أمه؟', questionEn: 'How can a child show kindness to their mother?', optionsAr: ['يساعدها ويعاملها برفق', 'يتجاهلها دائمًا', 'يؤذيها بكلامه'], optionsEn: ['Help her and treat her gently', 'Always ignore her', 'Hurt her with words'] },

  { unit: 3, page: 15, titleAr: 'أركان الإسلام', titleEn: 'The Pillars of Islam', focusAr: 'يتعرف المتعلم أركان الإسلام الخمسة إجمالًا: الشهادتان، والصلاة، والزكاة، وصوم رمضان، والحج للمستطيع.', focusEn: 'Become familiar with the five pillars of Islam: the two testimonies, prayer, zakat, Ramadan fasting, and pilgrimage for those able.', questionAr: 'كم عدد أركان الإسلام؟', questionEn: 'How many pillars of Islam are there?', optionsAr: ['خمسة', 'ثلاثة', 'سبعة'], optionsEn: ['Five', 'Three', 'Seven'] },
  { unit: 3, page: 16, titleAr: 'أركان الإيمان', titleEn: 'The Pillars of Faith', focusAr: 'يتعرف المتعلم أركان الإيمان الستة: الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر.', focusEn: 'Become familiar with the six pillars of faith: belief in God, angels, revealed books, messengers, the Last Day, and divine decree.', questionAr: 'أي مما يأتي من أركان الإيمان؟', questionEn: 'Which of these is a pillar of faith?', optionsAr: ['الإيمان بالملائكة', 'إقامة السوق', 'السفر في العطلة'], optionsEn: ['Belief in angels', 'Opening a market', 'Traveling on holiday'] },

  { unit: 4, page: 18, titleAr: 'النظافة والطهارة', titleEn: 'Cleanliness and Purification', focusAr: 'يفهم المتعلم أهمية نظافة البدن والثياب والمكان، ويذكر أمثلة على المحافظة على النظافة والاستعداد للصلاة.', focusEn: 'Understand the importance of clean bodies, clothing, and surroundings, and describe how cleanliness helps prepare for prayer.', questionAr: 'أي مثال يدل على النظافة؟', questionEn: 'Which example shows cleanliness?', optionsAr: ['تنظيف البدن والثياب', 'ترك الأوساخ في المكان', 'إهمال غسل اليدين'], optionsEn: ['Keeping the body and clothes clean', 'Leaving rubbish behind', 'Not washing hands'] },
  { unit: 4, page: 19, titleAr: 'التيمم عند تعذر استعمال الماء', titleEn: 'Tayammum When Water Cannot Be Used', focusAr: 'يتعرف المتعلم أن التيمم طهارة بديلة عند عدم وجود الماء أو تعذر استعماله، ويتعلم خطواته بصورة مبسطة.', focusEn: 'Learn that tayammum is an alternative purification when water is unavailable or cannot be used, and review its basic steps.', questionAr: 'متى يلجأ المسلم إلى التيمم؟', questionEn: 'When may a Muslim use tayammum?', optionsAr: ['عند عدم وجود الماء أو تعذر استعماله', 'كلما أراد اللعب', 'بعد تناول الطعام دائمًا'], optionsEn: ['When water is unavailable or cannot be used', 'Whenever they want to play', 'Always after eating'] },
  { unit: 4, page: 20, titleAr: 'الوضوء: غسل الأعضاء بالترتيب', titleEn: 'Ablution: Washing in Order', focusAr: 'يتعرف المتعلم الوضوء بوصفه طهارة تسبق الصلاة، ويتدرب على ترتيب غسل اليدين والمضمضة والاستنشاق والوجه والذراعين.', focusEn: 'Understand ablution as purification before prayer and practice the sequence of washing hands, rinsing the mouth and nose, face, and arms.', questionAr: 'ما العضو الذي يُغسل بعد الوجه في ترتيب الدرس؟', questionEn: 'Which part is washed after the face in the lesson sequence?', optionsAr: ['الذراعان', 'الشعر', 'الكتفان'], optionsEn: ['The arms', 'The hair', 'The shoulders'] },
  { unit: 4, page: 21, titleAr: 'الوضوء: مسح الرأس والأذنين', titleEn: 'Ablution: Wiping the Head and Ears', focusAr: 'يراجع المتعلم موضع مسح الرأس والأذنين في الوضوء، ويحافظ على ترتيب خطوات الطهارة.', focusEn: 'Review where wiping the head and ears fits in ablution and maintain the sequence of purification steps.', questionAr: 'أي عمل يخص الرأس في الوضوء؟', questionEn: 'Which action is performed on the head during ablution?', optionsAr: ['المسح', 'غسل الشعر بالصابون', 'تمشيط الشعر'], optionsEn: ['Wiping', 'Washing hair with soap', 'Combing the hair'] },
  { unit: 4, page: 22, titleAr: 'الوضوء: غسل القدمين ومراجعة الخطوات', titleEn: 'Ablution: Washing the Feet and Reviewing the Steps', focusAr: 'يتعلم المتعلم غسل القدمين إلى الكعبين، ثم يراجع خطوات الوضوء بالترتيب.', focusEn: 'Learn to wash the feet to the ankles and review the ablution steps in order.', questionAr: 'إلى أين يصل غسل القدمين في الوضوء؟', questionEn: 'Up to where are the feet washed in ablution?', optionsAr: ['الكعبين', 'الركبتين', 'الخصر'], optionsEn: ['The ankles', 'The knees', 'The waist'] },

  { unit: 5, page: 24, titleAr: 'النظافة من مكارم السلوك', titleEn: 'Cleanliness as Good Conduct', focusAr: 'يستخلص المتعلم من موقف يومي أن المحافظة على نظافة المدرسة والشارع مسؤولية مشتركة.', focusEn: 'Learn from an everyday situation that keeping the school and neighborhood clean is a shared responsibility.', questionAr: 'أين يضع المتعلم المخلفات؟', questionEn: 'Where should a learner put rubbish?', optionsAr: ['في سلة النفايات', 'على أرض المدرسة', 'في الطريق'], optionsEn: ['In a rubbish bin', 'On the school floor', 'On the road'] },
  { unit: 5, page: 26, titleAr: 'احترام الكبير والرفق بالصغير', titleEn: 'Respecting Elders and Caring for Younger People', focusAr: 'يتعلم المتعلم احترام كبار السن ومساعدة من يحتاج إلى المساعدة، والرفق بالصغار.', focusEn: 'Learn to respect older people, help those who need assistance, and be gentle with younger children.', questionAr: 'ماذا يفعل الطفل إذا رأى كبيرًا يحتاج إلى مقعد؟', questionEn: 'What should a child do if an older person needs a seat?', optionsAr: ['يعرض عليه مقعده', 'يتجاهله', 'يدفعه بعيدًا'], optionsEn: ['Offer their seat', 'Ignore them', 'Push them away'] },
  { unit: 5, page: 27, titleAr: 'الأمانة ورد الحقوق', titleEn: 'Honesty and Returning What Belongs to Others', focusAr: 'يميز المتعلم التصرف الأمين، ويتعلم إعادة المال أو الشيء الزائد إلى صاحبه.', focusEn: 'Identify honest behavior and learn to return extra money or belongings to their owner.', questionAr: 'ماذا تفعل التلميذة إذا أعاد إليها البائع مبلغًا زائدًا؟', questionEn: 'What should a pupil do if a shopkeeper gives too much change?', optionsAr: ['تعيد المبلغ الزائد', 'تحتفظ به دون إخبار أحد', 'تخفيه عن أهلها'], optionsEn: ['Return the extra amount', 'Keep it without telling anyone', 'Hide it from her family'] },
  { unit: 5, page: 28, titleAr: 'آداب الطعام', titleEn: 'Good Manners at Mealtimes', focusAr: 'يتعرف المتعلم آداب الطعام المناسبة، مثل التسمية، والأكل باليمين، والأكل مما يليه، وشكر الله بعد الطعام.', focusEn: 'Learn appropriate mealtime manners, such as beginning with God’s name, eating with the right hand, taking nearby food, and giving thanks afterward.', questionAr: 'أي سلوك من آداب الطعام؟', questionEn: 'Which action is a good mealtime manner?', optionsAr: ['الأكل باليد اليمنى', 'مد اليد إلى طعام بعيد', 'ترك شكر النعمة'], optionsEn: ['Eating with the right hand', 'Reaching for distant food', 'Not giving thanks for the meal'] },

  { unit: 6, page: 32, titleAr: 'مولد النبي ونشأته', titleEn: 'The Prophet’s Birth and Early Life', focusAr: 'يتعرف المتعلم أحداثًا مناسبة لعمره من مولد النبي محمد ونشأته، ويستخلص معاني الرحمة والمحبة من السيرة.', focusEn: 'Learn age-appropriate facts about the birth and early life of Prophet Muhammad and reflect on compassion and care.', questionAr: 'ما اسم العام الذي ارتبط بمولد النبي في الدرس؟', questionEn: 'Which year is associated with the Prophet’s birth in the lesson?', optionsAr: ['عام الفيل', 'عام الهجرة', 'عام بدر'], optionsEn: ['The Year of the Elephant', 'The Year of the Migration', 'The Year of Badr'] }
];

export const SUDAN_PRIMARY_ISLAMIC_G1_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ISLAMIC_G1_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-islamic-g1-${order}`;
  const unit = SUDAN_PRIMARY_ISLAMIC_G1_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الإسلامية — الصف الأول الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 1 Islamic Studies — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G1',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الأول الابتدائي',
    gradeLevelNameEn: 'Grade 1 Primary',
    termAr: 'التربية الإسلامية — الصف الأول',
    termEn: 'Grade 1 Islamic Studies',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في موقف من حياتك يرتبط بموضوع «${lesson.titleAr}».`,
    warmupHookEn: `Think of an everyday situation connected to “${lesson.titleEn}.”`,
    learningOutcomesAr: [lesson.focusAr, 'يذكر مثالًا عمليًا يطبق به ما تعلمه في حياته اليومية.'],
    learningOutcomesEn: [lesson.focusEn, 'Give one practical example of applying the lesson in everyday life.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: أنشئ بطاقة مصورة أو مخططًا بسيطًا يوضح الفكرة، ثم ناقش معلمك أو أسرتك كيف تطبقها.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Make a picture card or simple diagram to show the idea, then discuss with your teacher or family how to apply it.`
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
