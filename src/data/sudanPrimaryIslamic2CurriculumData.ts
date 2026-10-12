import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ISLAMIC_G2_BOOK = {
  title: 'التربية الإسلامية — الصف الثاني الأساسي',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'من القرآن الكريم', titleEn: 'From the Holy Quran', firstPage: 5, lastPage: 14 },
    { titleAr: 'الحديث النبوي ومكارم الأخلاق', titleEn: 'Prophetic Hadith and Noble Character', firstPage: 15, lastPage: 26 },
    { titleAr: 'الصلاة', titleEn: 'Prayer', firstPage: 27, lastPage: 32 },
    { titleAr: 'من أركان الإيمان', titleEn: 'From the Pillars of Faith', firstPage: 33, lastPage: 42 },
    { titleAr: 'من السيرة النبوية الشريفة', titleEn: 'From the Prophetic Biography', firstPage: 43, lastPage: 54 }
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
  visualSteps?: Array<{ labelAr: string; labelEn: string }>;
}

const lessons: IslamicLesson[] = [
  {
    unit: 1, page: 6, titleAr: 'سور الحفظ', titleEn: 'Surahs for Memorization',
    focusAr: 'يتدرب على حفظ سور قريش والقدر والتين والشرح والكافرون والماعون والفيل والهمزة والعلق، ويقسم المراجعة إلى مقاطع قصيرة مع التلاوة المتقنة.',
    focusEn: 'Practice memorizing Surahs Quraysh, Al-Qadr, At-Tin, Ash-Sharh, Al-Kafirun, Al-Maun, Al-Fil, Al-Humazah, and Al-Alaq, reviewing them in short sections.',
    questionAr: 'أي سورة من الآتي ضمن سور الحفظ؟', questionEn: 'Which surah is included among those for memorization?',
    optionsAr: ['سورة قريش', 'سورة الفجر', 'سورة الغاشية'], optionsEn: ['Surah Quraysh', 'Surah Al-Fajr', 'Surah Al-Ghashiyah']
  },
  {
    unit: 1, page: 11, titleAr: 'سور التلاوة', titleEn: 'Surahs for Recitation',
    focusAr: 'يستمع إلى سور الفجر والغاشية والبروج والانشقاق والمطففين ويتدرب على تلاوتها بوضوح وإنصات واحترام.',
    focusEn: 'Listen to and practice reciting Surahs Al-Fajr, Al-Ghashiyah, Al-Buruj, Al-Inshiqaq, and Al-Mutaffifin clearly and attentively.',
    questionAr: 'أي سورة من الآتي ضمن سور التلاوة؟', questionEn: 'Which surah is included among those for recitation?',
    optionsAr: ['سورة البروج', 'سورة قريش', 'سورة القدر'], optionsEn: ['Surah Al-Buruj', 'Surah Quraysh', 'Surah Al-Qadr']
  },

  {
    unit: 2, page: 16, titleAr: 'بر الوالدين', titleEn: 'Kindness to Parents',
    focusAr: 'يتعرف فضل الإحسان إلى الوالدين، ويذكر صورًا يومية لاحترامهما ومساعدتهما والتحدث إليهما بلطف.',
    focusEn: 'Learn the value of kindness to parents and identify everyday ways to respect, help, and speak gently with them.',
    questionAr: 'أي عمل يدل على بر الوالدين؟', questionEn: 'Which action shows kindness to parents?',
    optionsAr: ['مساعدتهما واحترامهما', 'رفع الصوت عليهما', 'إهمال حديثهما'], optionsEn: ['Helping and respecting them', 'Shouting at them', 'Ignoring them']
  },
  {
    unit: 2, page: 18, titleAr: 'الجمال والنظافة في الإسلام', titleEn: 'Beauty and Cleanliness in Islam',
    focusAr: 'يفهم أهمية النظافة والجمال، ويطبق العناية ببدنه وثيابه وكراسته ومدرسته.',
    focusEn: 'Understand the value of cleanliness and beauty and care for the body, clothes, schoolwork, and classroom.',
    questionAr: 'أي سلوك يحافظ على النظافة؟', questionEn: 'Which action helps maintain cleanliness?',
    optionsAr: ['ترتيب الثياب والمكان', 'ترك الأوساخ على الأرض', 'إهمال نظافة البدن'], optionsEn: ['Keeping clothes and surroundings tidy', 'Leaving litter on the floor', 'Neglecting personal cleanliness']
  },
  {
    unit: 2, page: 20, titleAr: 'تحية الإسلام', titleEn: 'The Islamic Greeting',
    focusAr: 'يتعرف صيغة تحية الإسلام، ويتدرب على إلقائها بأدب عند لقاء الأسرة والمعلمين والناس.',
    focusEn: 'Learn the Islamic greeting and practice offering it politely when meeting family, teachers, and others.',
    questionAr: 'بم يحيي المسلم غيره؟', questionEn: 'How does a Muslim greet another person?',
    optionsAr: ['السلام عليكم ورحمة الله وبركاته', 'صباح الخير فقط', 'لا يحييه'], optionsEn: ['Peace, mercy, and blessings of God be upon you', 'Only “Good morning”', 'Do not greet them']
  },
  {
    unit: 2, page: 21, titleAr: 'حب الوطن', titleEn: 'Love of One’s Homeland',
    focusAr: 'يتعرف صورًا نافعة للتعبير عن حب الوطن، مثل الاعتزاز به والدعاء له والمحافظة على مرافقه العامة.',
    focusEn: 'Identify helpful ways to care for one’s homeland, such as taking pride in it, wishing it well, and protecting public places.',
    questionAr: 'أي عمل يحافظ على مرافق الوطن؟', questionEn: 'Which action helps care for public places in one’s homeland?',
    optionsAr: ['المحافظة عليها', 'إتلافها', 'ترك المخلفات فيها'], optionsEn: ['Taking care of them', 'Damaging them', 'Leaving litter there']
  },
  {
    unit: 2, page: 23, titleAr: 'مكانة الأم والوالدين', titleEn: 'The Status of Mothers and Parents',
    focusAr: 'يتعلم منزلة الأم والوالدين، ويعبر عن التقدير بالإنصات والمساعدة والرفق.',
    focusEn: 'Learn about the status of mothers and parents and show appreciation by listening, helping, and being gentle.',
    questionAr: 'أي تصرف يعبر عن تقدير الوالدين؟', questionEn: 'Which action shows appreciation for parents?',
    optionsAr: ['الإنصات إليهما ومساعدتهما', 'مقاطعتهما وإزعاجهما', 'رفض المساعدة دائمًا'], optionsEn: ['Listening and helping them', 'Interrupting and disturbing them', 'Always refusing to help']
  },
  {
    unit: 2, page: 23, titleAr: 'اجتناب العقوق', titleEn: 'Avoiding Disobedience to Parents',
    focusAr: 'يميز بين السلوك البار والسلوك المؤذي للوالدين، ويختار كلمات وأفعالًا تدل على الاحترام.',
    focusEn: 'Distinguish caring behavior from behavior that hurts parents and choose respectful words and actions.',
    questionAr: 'أي سلوك ينبغي اجتنابه؟', questionEn: 'Which behavior should be avoided?',
    optionsAr: ['إيذاء الوالدين', 'التحدث بلطف', 'مساعدتهما'], optionsEn: ['Hurting one’s parents', 'Speaking gently', 'Helping them']
  },
  {
    unit: 2, page: 24, titleAr: 'الصدق', titleEn: 'Truthfulness',
    focusAr: 'يتتبع أثر الصدق في قصة الصبي، ويستنتج كيف يقود الصدق إلى الثقة وإصلاح السلوك.',
    focusEn: 'Follow the story of the truthful boy and consider how honesty builds trust and can change behavior.',
    questionAr: 'ما الخلق الذي تمسك به الصبي في قصته؟', questionEn: 'Which quality did the boy maintain in the story?',
    optionsAr: ['الصدق', 'السخرية', 'الغش'], optionsEn: ['Truthfulness', 'Mockery', 'Cheating']
  },
  {
    unit: 2, page: 26, titleAr: 'الوفاء بالوعد', titleEn: 'Keeping a Promise',
    focusAr: 'يفهم معنى الوفاء بالوعد من القصة، ويشرح لماذا يلتزم الإنسان بكلمته ويصون ثقة الآخرين.',
    focusEn: 'Understand keeping a promise through the story and explain why people should honor their word and protect others’ trust.',
    questionAr: 'ما الخلق الذي أظهره سهيل حين عاد؟', questionEn: 'Which quality did Suhayl show when he returned?',
    optionsAr: ['الوفاء بالوعد', 'التسرع', 'الأنانية'], optionsEn: ['Keeping a promise', 'Hastiness', 'Selfishness']
  },

  {
    unit: 3, page: 28, titleAr: 'صفة الصلاة وخطواتها', titleEn: 'The Form and Steps of Prayer',
    focusAr: 'يتعرف تسلسلًا مبسطًا لهيئة الصلاة كما تعرضه الدروس، ويتدرب على ترتيب القيام والركوع والاعتدال والسجود والجلوس.',
    focusEn: 'Learn the basic sequence of prayer presented in the lessons and arrange standing, bowing, rising, prostrating, and sitting.',
    questionAr: 'ما الحركة التي تأتي بعد الركوع في تسلسل الدرس؟', questionEn: 'Which movement follows bowing in the lesson sequence?',
    optionsAr: ['الاعتدال قائمًا', 'الجلوس للتشهد الأخير مباشرة', 'مغادرة مكان الصلاة'], optionsEn: ['Rising upright', 'Immediately sitting for the final testimony', 'Leaving the place of prayer'],
    visualSteps: [
      { labelAr: 'القيام', labelEn: 'Standing' },
      { labelAr: 'الركوع', labelEn: 'Bowing' },
      { labelAr: 'الاعتدال', labelEn: 'Rising' },
      { labelAr: 'السجود', labelEn: 'Prostrating' },
      { labelAr: 'الجلوس', labelEn: 'Sitting' },
      { labelAr: 'السجود', labelEn: 'Prostrating' }
    ]
  },
  {
    unit: 3, page: 31, titleAr: 'من فضائل الصلاة', titleEn: 'Some Virtues of Prayer',
    focusAr: 'يتعرف بعض فضائل الصلاة وأثرها في الإيمان والطمأنينة وحسن السلوك، ويعبر عن أهمية المحافظة عليها.',
    focusEn: 'Learn some virtues of prayer and its relationship to faith, calmness, and good conduct, and explain the importance of observing it.',
    questionAr: 'أي أثر إيجابي يذكره الدرس للصلاة؟', questionEn: 'Which positive effect of prayer is described in the lesson?',
    optionsAr: ['تشرح الصدر وتعين على حسن الخلق', 'تزيد الخصام', 'تمنع مساعدة الآخرين'], optionsEn: ['It brings calm and supports good conduct', 'It increases conflict', 'It prevents helping others']
  },
  {
    unit: 3, page: 32, titleAr: 'التشهدان في الصلاة', titleEn: 'The Two Testimonies in Prayer',
    focusAr: 'يتعرف موضع التشهدين في الصلاة، وينصت إلى صيغتهما ويتدرب على ترديدهما باحترام.',
    focusEn: 'Learn where the two testimonies occur in prayer, listen to their wording, and practice reciting them respectfully.',
    questionAr: 'متى يوضح المعلم قراءة التشهد؟', questionEn: 'When does the teacher explain the recitation of the testimony?',
    optionsAr: ['في موضعه من الصلاة', 'قبل تعلم الصلاة', 'خارج موضوع الصلاة'], optionsEn: ['At its place in prayer', 'Before learning about prayer', 'Outside the topic of prayer']
  },

  {
    unit: 4, page: 34, titleAr: 'الإيمان بالله', titleEn: 'Belief in God',
    focusAr: 'يتعرف أن الله موجود وخالق، خلقنا لعبادته، ويتعلم شكره وطاعته.',
    focusEn: 'Learn that God exists and is the Creator, created people to worship Him, and is to be thanked and obeyed.',
    questionAr: 'أي معنى يتصل بالإيمان بالله في الدرس؟', questionEn: 'Which idea about belief in God is taught in the lesson?',
    optionsAr: ['الله هو الخالق', 'الإنسان خلق الكون', 'الطاعة غير مهمة'], optionsEn: ['God is the Creator', 'People created the universe', 'Obedience is unimportant']
  },
  {
    unit: 4, page: 36, titleAr: 'الإيمان بالرسل', titleEn: 'Belief in the Messengers',
    focusAr: 'يتعرف أن الرسل أرسلهم الله للدعوة إلى توحيده، وأنهم صادقون، ويذكر أن أولهم آدم وخاتمهم محمد عليهما الصلاة والسلام.',
    focusEn: 'Learn that God sent messengers to call people to worship Him alone, that they were truthful, and that Adam was the first and Muhammad the final messenger.',
    questionAr: 'إلى ماذا دعا الرسل؟', questionEn: 'What did the messengers call people to?',
    optionsAr: ['عبادة الله وحده', 'عبادة الأصنام', 'ترك الخير'], optionsEn: ['Worship God alone', 'Worship idols', 'Abandoning good']
  },
  {
    unit: 4, page: 38, titleAr: 'قصة آدم عليه السلام', titleEn: 'The Story of Adam',
    focusAr: 'يتعرف خلق آدم عليه السلام وبداية سكن ذريته في الأرض، ويستخلص العبرة من التوبة والرجوع إلى الله.',
    focusEn: 'Learn about the creation of Adam and the beginning of human life on earth, and reflect on repentance and returning to God.',
    questionAr: 'ماذا فعل آدم عليه السلام بعد خطئه؟', questionEn: 'What did Adam do after his mistake?',
    optionsAr: ['تاب إلى الله', 'أصر على الخطأ', 'دعا الناس لعبادة الأصنام'], optionsEn: ['Repented to God', 'Persisted in the mistake', 'Called people to worship idols']
  },
  {
    unit: 4, page: 39, titleAr: 'قصة نوح عليه السلام', titleEn: 'The Story of Noah',
    focusAr: 'يتابع دعوة نوح عليه السلام قومه وصبره في أداء رسالته، ويتعلم الثبات والعمل مع المؤمنين.',
    focusEn: 'Follow Noah’s call to his people and his patience in carrying out his mission, and learn perseverance and cooperation.',
    questionAr: 'إلى ماذا دعا نوح عليه السلام قومه؟', questionEn: 'What did Noah call his people to do?',
    optionsAr: ['عبادة الله وحده', 'عبادة الأصنام', 'ترك مساعدة المحتاج'], optionsEn: ['Worship God alone', 'Worship idols', 'Stop helping those in need']
  },
  {
    unit: 4, page: 40, titleAr: 'قصة إبراهيم عليه السلام', titleEn: 'The Story of Abraham',
    focusAr: 'يتعرف دعوة إبراهيم عليه السلام إلى عبادة الله وحده، وثباته، وإكرامه للضيف.',
    focusEn: 'Learn about Abraham’s call to worship God alone, his steadfastness, and his generosity to guests.',
    questionAr: 'أي خلق نتعلمه من قصة إبراهيم عليه السلام؟', questionEn: 'Which quality can we learn from Abraham’s story?',
    optionsAr: ['إكرام الضيف', 'السخرية من الضيف', 'نقض العهد'], optionsEn: ['Honoring a guest', 'Mocking a guest', 'Breaking a promise']
  },

  {
    unit: 5, page: 44, titleAr: 'مولد النبي صلى الله عليه وسلم وطفولته', titleEn: 'The Prophet’s Birth and Childhood',
    focusAr: 'يتعرف بدايات سيرة النبي صلى الله عليه وسلم ورعايته في طفولته، ويتأمل معاني الرحمة والعناية بالطفل.',
    focusEn: 'Learn about the beginning of the Prophet’s life and his care in childhood, reflecting on compassion and caring for children.',
    questionAr: 'من مرضعة النبي صلى الله عليه وسلم التي يذكرها الدرس؟', questionEn: 'Which foster mother is mentioned in the lesson?',
    optionsAr: ['حليمة السعدية', 'آمنة بنت وهب', 'خديجة بنت خويلد'], optionsEn: ['Halima al-Sa‘diyya', 'Amina bint Wahb', 'Khadija bint Khuwaylid']
  },
  {
    unit: 5, page: 47, titleAr: 'الشوق إلى رسول الله صلى الله عليه وسلم', titleEn: 'Longing for the Messenger',
    focusAr: 'يتفاعل مع نشيد المحبة والشوق إلى رسول الله صلى الله عليه وسلم، ويعبر عن محبته بأدب واتباع الخير.',
    focusEn: 'Engage with the lesson’s song of love and longing for the Messenger and express respect by following good teachings.',
    questionAr: 'عن من يعبر نشيد الدرس بالمحبة والشوق؟', questionEn: 'For whom does the lesson’s song express love and longing?',
    optionsAr: ['رسول الله صلى الله عليه وسلم', 'الملك النعمان', 'سيدنا نوح عليه السلام'], optionsEn: ['The Messenger of God', 'King Al-Nu‘man', 'Prophet Noah']
  },
  {
    unit: 5, page: 48, titleAr: 'عودة النبي إلى أمه ورعاية جده وعمه', titleEn: 'The Prophet’s Return to His Mother and Care by His Family',
    focusAr: 'يتتبع عودة النبي صلى الله عليه وسلم إلى أمه ثم رعاية جده عبد المطلب وعمه أبي طالب له.',
    focusEn: 'Follow the Prophet’s return to his mother and the care he received from his grandfather Abd al-Muttalib and uncle Abu Talib.',
    questionAr: 'من كفل النبي صلى الله عليه وسلم بعد وفاة جده؟', questionEn: 'Who cared for the Prophet after his grandfather died?',
    optionsAr: ['عمه أبو طالب', 'الملك النعمان', 'سهيل الطائي'], optionsEn: ['His uncle Abu Talib', 'King Al-Nu‘man', 'Suhayl al-Ta’i']
  },
  {
    unit: 5, page: 51, titleAr: 'مرحلة شبابه صلى الله عليه وسلم', titleEn: 'The Prophet’s Youth',
    focusAr: 'يتعرف جوانب من عمل النبي صلى الله عليه وسلم في شبابه، ومشاركته في مواقف لنصرة المظلوم والإصلاح بين الناس.',
    focusEn: 'Learn about the Prophet’s work in his youth and his participation in efforts to support the wronged and promote reconciliation.',
    questionAr: 'ما العمل الذي مارسه النبي صلى الله عليه وسلم في شبابه؟', questionEn: 'Which work did the Prophet do in his youth?',
    optionsAr: ['رعي الغنم والتجارة', 'الزراعة وحدها', 'صناعة السفن'], optionsEn: ['Herding sheep and trading', 'Farming only', 'Building ships']
  },
  {
    unit: 5, page: 54, titleAr: 'زواج النبي صلى الله عليه وسلم بخديجة', titleEn: 'The Prophet’s Marriage to Khadija',
    focusAr: 'يتعرف زواج النبي صلى الله عليه وسلم من خديجة رضي الله عنها، ويستخلص معاني الثقة والوفاء وحسن المعاملة.',
    focusEn: 'Learn about the Prophet’s marriage to Khadija and reflect on trust, loyalty, and considerate treatment.',
    questionAr: 'ما الخلق الذي ينسجم مع معاملة النبي صلى الله عليه وسلم لخديجة؟', questionEn: 'Which quality reflects the Prophet’s treatment of Khadija?',
    optionsAr: ['حسن المعاملة والوفاء', 'الظلم والإهمال', 'نقض الوعد'], optionsEn: ['Consideration and loyalty', 'Injustice and neglect', 'Breaking promises']
  }
];

export const SUDAN_PRIMARY_ISLAMIC_G2_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ISLAMIC_G2_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-islamic-g2-${order}`;
  const unit = SUDAN_PRIMARY_ISLAMIC_G2_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الإسلامية — الصف الثاني الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 2 Islamic Studies — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثاني الابتدائي',
    gradeLevelNameEn: 'Grade 2 Primary',
    termAr: 'التربية الإسلامية — الصف الثاني',
    termEn: 'Grade 2 Islamic Studies',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في موقف يومي يرتبط بموضوع «${lesson.titleAr}».`,
    warmupHookEn: `Think of an everyday situation connected to “${lesson.titleEn}.”`,
    learningOutcomesAr: [lesson.focusAr, 'يذكر مثالًا مناسبًا يطبق به ما تعلمه في حياته اليومية.'],
    learningOutcomesEn: [lesson.focusEn, 'Give an appropriate example of applying the lesson in everyday life.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: ارسم موقفًا أو مخططًا بسيطًا يوضح الفكرة، ثم ناقش كيف تطبقها في حياتك.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Draw a situation or simple diagram to show the idea, then discuss how to apply it in everyday life.`,
      ...(lesson.visualSteps
        ? {
            diagram: {
              id: `${id}-prayer-steps`,
              figureNumberAr: 'شكل توضيحي',
              figureNumberEn: 'Illustration',
              titleAr: 'تسلسل حركات الصلاة',
              titleEn: 'Sequence of Prayer Movements',
              captionAr: 'مخطط بصري مبسط لتذكر تسلسل الحركات الوارد في الدرس.',
              captionEn: 'A simple visual guide to remember the movement sequence described in the lesson.',
              diagramType: 'prayer_sequence' as const,
              visualSteps: lesson.visualSteps
            }
          }
        : {})
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
