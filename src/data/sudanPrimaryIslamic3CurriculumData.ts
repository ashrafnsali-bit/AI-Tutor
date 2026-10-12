import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ISLAMIC_G3_BOOK = {
  title: 'التربية الإسلامية — الصف الثالث الأساسي',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'من القرآن الكريم', titleEn: 'From the Holy Quran', firstPage: 4, lastPage: 15 },
    { titleAr: 'من الحديث النبوي الشريف', titleEn: 'From the Prophetic Hadith', firstPage: 16, lastPage: 28 },
    { titleAr: 'الفقه', titleEn: 'Islamic Jurisprudence', firstPage: 29, lastPage: 36 },
    { titleAr: 'أركان الإيمان', titleEn: 'The Pillars of Faith', firstPage: 37, lastPage: 41 },
    { titleAr: 'من مكارم الأخلاق', titleEn: 'Noble Character', firstPage: 42, lastPage: 51 },
    { titleAr: 'السيرة النبوية الشريفة', titleEn: 'The Prophetic Biography', firstPage: 52, lastPage: 71 }
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
  {
    unit: 1, page: 6, titleAr: 'سور الحفظ', titleEn: 'Surahs for Memorization',
    focusAr: 'يتدرب على حفظ سور التكاثر والقارعة والزلزلة والضحى والليل والأعلى والبلد، بمراجعة مقاطع قصيرة والاستماع إلى تلاوة واضحة.',
    focusEn: 'Practice memorizing Surahs At-Takathur, Al-Qariah, Az-Zalzalah, Ad-Duha, Al-Layl, Al-Ala, and Al-Balad in short sections with careful listening.',
    questionAr: 'أي سورة من الآتي وردت ضمن سور الحفظ؟', questionEn: 'Which surah is included among the memorization selections?',
    optionsAr: ['سورة الضحى', 'سورة الانفطار', 'سورة التكوير'], optionsEn: ['Surah Ad-Duha', 'Surah Al-Infitar', 'Surah At-Takwir']
  },
  {
    unit: 1, page: 14, titleAr: 'سور التلاوة', titleEn: 'Surahs for Recitation',
    focusAr: 'يستمع إلى سور المطففين والانفطار والتكوير ويتدرب على تلاوتها بهدوء ووضوح، مع احترام المصحف ومراعاة آداب الاستماع.',
    focusEn: 'Listen to and practice reciting Surahs Al-Mutaffifin, Al-Infitar, and At-Takwir clearly and calmly, treating the Quran respectfully.',
    questionAr: 'أي سورة من الآتي وردت ضمن سور التلاوة؟', questionEn: 'Which surah is included among the recitation selections?',
    optionsAr: ['سورة المطففين', 'سورة الزلزلة', 'سورة الليل'], optionsEn: ['Surah Al-Mutaffifin', 'Surah Az-Zalzalah', 'Surah Al-Layl']
  },
  {
    unit: 2, page: 18, titleAr: 'احترام الناس ونبذ التمييز', titleEn: 'Respecting People and Rejecting Discrimination',
    focusAr: 'يتعلم أن كرامة الناس لا تتوقف على اللون أو اللغة أو الأصل، ويختار كلمات وأفعالًا عادلة تحترم الجميع.',
    focusEn: 'Learn that people’s dignity does not depend on color, language, or background, and choose fair words and actions that respect everyone.',
    questionAr: 'ما التصرف الذي يعبر عن احترام الناس؟', questionEn: 'Which action shows respect for people?',
    optionsAr: ['معاملة الجميع بإنصاف', 'السخرية من اختلاف الآخرين', 'استبعاد شخص بسبب مظهره'],
    optionsEn: ['Treating everyone fairly', 'Mocking people’s differences', 'Excluding someone because of appearance']
  },
  {
    unit: 2, page: 20, titleAr: 'الرفق واللين في التعامل', titleEn: 'Gentleness in Our Interactions',
    focusAr: 'يفهم أن اللطف والرفق يساعدان على التواصل وحل الخلاف، وأن الحزم يمكن أن يكون مهذبًا وغير مؤذٍ.',
    focusEn: 'Understand that kindness helps communication and resolving disagreements, and that firmness can be polite and non-harmful.',
    questionAr: 'كيف يعبر التلميذ عن الرفق عند الاختلاف؟', questionEn: 'How can a student show gentleness during a disagreement?',
    optionsAr: ['يتحدث بهدوء ويستمع', 'يصرخ ويهين', 'يرفض سماع الرأي الآخر'],
    optionsEn: ['Speak calmly and listen', 'Shout and insult', 'Refuse to hear another view']
  },
  {
    unit: 2, page: 23, titleAr: 'طلب العلم وحبه', titleEn: 'Seeking and Valuing Knowledge',
    focusAr: 'يشجع الدرس على التعلم المستمر، والاستماع باهتمام، واحترام المعلمين، واستخدام المعرفة فيما ينفع.',
    focusEn: 'The lesson encourages ongoing learning, attentive listening, respect for teachers, and using knowledge in helpful ways.',
    questionAr: 'ما السلوك الذي يساعد على التعلم؟', questionEn: 'Which behavior supports learning?',
    optionsAr: ['الإنصات وطرح الأسئلة', 'رفض التعلم', 'تشتيت زملاء الصف'],
    optionsEn: ['Listening and asking questions', 'Refusing to learn', 'Distracting classmates']
  },
  {
    unit: 2, page: 26, titleAr: 'الرحمة بالصغير واحترام الكبير', titleEn: 'Caring for the Young and Respecting Elders',
    focusAr: 'يتعلم أن الرحمة بالصغار واحترام الأكبر سنًا يظهران في المساعدة والكلام الطيب والإنصات المتبادل.',
    focusEn: 'Learn that caring for younger people and respecting elders can be shown through help, kind words, and attentive listening.',
    questionAr: 'أي عمل يجمع بين الرحمة والاحترام؟', questionEn: 'Which action shows both care and respect?',
    optionsAr: ['مساعدة طفل والإنصات لكبير', 'إزعاج الصغار ومقاطعة الكبار', 'تجاهل من يحتاج للمساعدة'],
    optionsEn: ['Helping a child and listening to an elder', 'Disturbing children and interrupting elders', 'Ignoring someone who needs help']
  },
  {
    unit: 3, page: 31, titleAr: 'أحكام المياه', titleEn: 'Types and Uses of Water',
    focusAr: 'يميز بين الماء النقي الصالح للشرب والوضوء، والماء الذي تغير بشيء طاهر، والماء الذي تلوث، ويقدر نعمة الماء ويحافظ عليها.',
    focusEn: 'Distinguish clean water suitable for drinking and ablution from water changed by a clean substance and from polluted water, while valuing and conserving water.',
    questionAr: 'أي ماء يصلح للوضوء بحسب الدرس؟', questionEn: 'Which type of water is suitable for ablution in the lesson?',
    optionsAr: ['الماء الطهور', 'الماء المتنجس', 'ماء تغيرت رائحته بالنجاسة'],
    optionsEn: ['Pure, clean water', 'Water made impure', 'Water whose smell changed because of impurity']
  },
  {
    unit: 3, page: 33, titleAr: 'آداب قضاء الحاجة', titleEn: 'Personal-Care Etiquette',
    focusAr: 'يتعلم المحافظة على النظافة والخصوصية، واختيار مكان لا يؤذي الناس أو يلوث الماء، وترك المكان نظيفًا للآخرين.',
    focusEn: 'Learn to maintain cleanliness and privacy, choose a place that does not harm others or pollute water, and leave the area clean for others.',
    questionAr: 'ما التصرف الذي يراعي راحة الآخرين ونظافة المكان؟', questionEn: 'Which action respects others and keeps the place clean?',
    optionsAr: ['ترك المكان نظيفًا', 'تلويث مصدر الماء', 'اختيار مكان يمر به الناس'],
    optionsEn: ['Leave the place clean', 'Pollute a water source', 'Choose a place where people pass']
  },
  {
    unit: 3, page: 36, titleAr: 'فرائض الوضوء وسننه', titleEn: 'Obligatory and Recommended Acts of Ablution',
    focusAr: 'يراجع ترتيب فرائض الوضوء ويميزها من السنن، ويتدرب على الوضوء بتأنٍ مع تجنب الإسراف في الماء.',
    focusEn: 'Review the order of obligatory acts of ablution, distinguish them from recommended acts, and practice carefully without wasting water.',
    questionAr: 'ما العمل الذي يشمله الوضوء؟', questionEn: 'Which action is part of ablution?',
    optionsAr: ['غسل الوجه', 'غسل الحقيبة', 'ترتيب الكتب'],
    optionsEn: ['Washing the face', 'Washing a schoolbag', 'Arranging books']
  },
  {
    unit: 4, page: 39, titleAr: 'الإيمان بالملائكة', titleEn: 'Belief in Angels',
    focusAr: 'يتعرف أن الإيمان بالملائكة من أركان الإيمان، ويتعلم عن عبادتهم لله ومهامهم كما تعرضها المادة، دون ادعاء معرفة ما غاب عنا.',
    focusEn: 'Learn that belief in angels is a pillar of faith and that they worship God and have roles described in the lesson, while recognizing that some matters are beyond human knowledge.',
    questionAr: 'أي عبارة تلخص موضوع الدرس؟', questionEn: 'Which statement summarizes the lesson?',
    optionsAr: ['الإيمان بالملائكة من أركان الإيمان', 'الملائكة من البشر', 'لا يتناول الدرس الإيمان'],
    optionsEn: ['Belief in angels is a pillar of faith', 'Angels are human beings', 'The lesson does not discuss faith']
  },
  {
    unit: 5, page: 44, titleAr: 'التعاون مع الآخرين', titleEn: 'Cooperating with Others',
    focusAr: 'يفهم أن التعاون يكون على الخير ومساعدة الناس، ويشارك في أعمال نافعة في البيت والمدرسة والمجتمع.',
    focusEn: 'Understand that cooperation means working for good and helping people, and take part in helpful activities at home, school, and in the community.',
    questionAr: 'أي مثال يمثل التعاون النافع؟', questionEn: 'Which example shows helpful cooperation?',
    optionsAr: ['تنظيف الصف مع الزملاء', 'إفساد عمل الآخرين', 'رفض مساعدة من يحتاج'],
    optionsEn: ['Cleaning the classroom with classmates', 'Damaging other people’s work', 'Refusing to help someone in need']
  },
  {
    unit: 5, page: 46, titleAr: 'حب الخير للناس', titleEn: 'Wishing Good for Others',
    focusAr: 'يتدرب على أن يتمنى للآخرين ما ينفعهم، وينصح بلطف، ويبتعد عن إيذائهم أو الشماتة بهم.',
    focusEn: 'Practice wishing others well, offering advice kindly, and avoiding harm or gloating over others.',
    questionAr: 'كيف ينصح التلميذ زميله إذا أخطأ؟', questionEn: 'How should a student advise a classmate who makes a mistake?',
    optionsAr: ['بلطف واحترام', 'بالسخرية أمام الآخرين', 'بالغضب والإيذاء'],
    optionsEn: ['With kindness and respect', 'By mocking them publicly', 'With anger and harm']
  },
  {
    unit: 5, page: 47, titleAr: 'المحافظة على المدرسة', titleEn: 'Caring for the School',
    focusAr: 'يتحمل المتعلم مسؤولية المحافظة على مرافق المدرسة ونظافتها، وينبه زملاءه إلى ذلك بأسلوب مهذب.',
    focusEn: 'Take responsibility for caring for school facilities and keeping them clean, and remind classmates politely.',
    questionAr: 'أي تصرف يحافظ على المدرسة؟', questionEn: 'Which action helps care for the school?',
    optionsAr: ['المحافظة على المقاعد والحديقة', 'الكتابة على الجدران', 'رمي النفايات في الصف'],
    optionsEn: ['Taking care of desks and the garden', 'Writing on the walls', 'Littering in the classroom']
  },
  {
    unit: 5, page: 49, titleAr: 'من آداب الطريق', titleEn: 'Etiquette for Shared Roads',
    focusAr: 'يتعلم مراعاة مستخدمي الطريق، وتجنب الأذى، وإزالة ما قد يعثر به الناس، وعبور الطريق بحذر.',
    focusEn: 'Learn to consider other road users, avoid causing harm, remove things that could trip people, and cross carefully.',
    questionAr: 'ماذا يفعل التلميذ قبل عبور الطريق؟', questionEn: 'What should a student do before crossing a road?',
    optionsAr: ['يتأكد من خلوه ويتبع قواعد السلامة', 'يركض دون انتباه', 'يلعب في مسار المركبات'],
    optionsEn: ['Check it is clear and follow safety rules', 'Run without looking', 'Play in the path of vehicles']
  },
  {
    unit: 5, page: 51, titleAr: 'احترام المعلم', titleEn: 'Respecting the Teacher',
    focusAr: 'يقدر دور المعلم في تنمية المعرفة، ويعبر عن الاحترام بالإنصات والسؤال بأدب والاجتهاد في أداء الواجبات.',
    focusEn: 'Value the teacher’s role in building knowledge and show respect by listening, asking questions politely, and working diligently.',
    questionAr: 'ما الطريقة المناسبة لإظهار احترام المعلم؟', questionEn: 'What is an appropriate way to show respect for a teacher?',
    optionsAr: ['الإنصات وطلب التوضيح بأدب', 'مقاطعته والاستهزاء به', 'إهمال جميع التوجيهات'],
    optionsEn: ['Listen and ask for clarification politely', 'Interrupt and mock them', 'Ignore all guidance']
  },
  {
    unit: 6, page: 54, titleAr: 'بداية النبوة والرسالة', titleEn: 'The Beginning of Prophethood and the Message',
    focusAr: 'يتعرف بداية الوحي في غار حراء ومساندة خديجة رضي الله عنها، ويستخلص معاني الطمأنينة والثقة والرحمة في التعامل.',
    focusEn: 'Learn about the beginning of revelation in the Cave of Hira and Khadija’s support, reflecting on reassurance, trust, and compassion.',
    questionAr: 'من ساندت النبي صلى الله عليه وسلم بعد عودته من غار حراء؟', questionEn: 'Who supported the Prophet after he returned from the Cave of Hira?',
    optionsAr: ['خديجة رضي الله عنها', 'أبو لهب', 'أبو جهل'],
    optionsEn: ['Khadija', 'Abu Lahab', 'Abu Jahl']
  },
  {
    unit: 6, page: 57, titleAr: 'من جهاد الدعوة إلى الله', titleEn: 'The Early Call to Faith',
    focusAr: 'يتابع بدايات الدعوة ومراحلها الأولى، ويتعرف دور التعلم والقدوة والصبر في إيصال الأفكار بالحكمة.',
    focusEn: 'Follow the beginnings and early stages of the call, and consider how learning, good example, and patience help communicate ideas wisely.',
    questionAr: 'ما المرحلة التي بدأت بها الدعوة في مكة؟', questionEn: 'Which stage began the call in Mecca?',
    optionsAr: ['الدعوة السرية', 'الدعوة في المدينة', 'مرحلة الهجرة إلى الحبشة'],
    optionsEn: ['The private call', 'The call in Medina', 'The migration to Abyssinia']
  },
  {
    unit: 6, page: 61, titleAr: 'مرحلة إعلان الدعوة الجهرية', titleEn: 'The Public Call',
    focusAr: 'يتعرف كيف انتقلت الدعوة إلى الأقارب ثم إلى الناس، ويركز على التواصل المسؤول واحترام اختلاف المواقف.',
    focusEn: 'Learn how the message was shared first with relatives and then more widely, focusing on responsible communication and respect for differing views.',
    questionAr: 'بمن بدأ النبي صلى الله عليه وسلم دعوته الجهرية؟', questionEn: 'With whom did the Prophet begin sharing the message publicly?',
    optionsAr: ['عشيرته الأقربين', 'أهل بلاد بعيدة أولًا', 'أصحاب التجارة في الشام'],
    optionsEn: ['His closest relatives', 'People in distant lands first', 'Merchants in Syria']
  },
  {
    unit: 6, page: 64, titleAr: 'طرق مجابهة الدعوة', titleEn: 'Responses to the Call',
    focusAr: 'يدرس صور المعارضة التاريخية، مثل السخرية ومحاولة منع الاستماع، ويميزها من الحوار المحترم والتعامل السلمي.',
    focusEn: 'Study historical forms of opposition, such as mockery and attempts to prevent listening, and distinguish them from respectful dialogue and peaceful conduct.',
    questionAr: 'أي تصرف يمثل حوارًا محترمًا؟', questionEn: 'Which action is an example of respectful dialogue?',
    optionsAr: ['الاستماع والرد بأدب', 'السخرية لمنع الآخرين من الكلام', 'نشر اتهامات دون تحقق'],
    optionsEn: ['Listen and respond politely', 'Mock others to silence them', 'Spread unverified accusations']
  },
  {
    unit: 6, page: 66, titleAr: 'الاضطهاد والتعذيب', titleEn: 'Persecution and Hardship',
    focusAr: 'يتعرف ما تعرض له بعض المسلمين الأوائل من أذى بوصفه حدثًا تاريخيًا مؤلمًا، ويتأمل في قيمة التعاطف ورفض الظلم وحماية من يتعرض للأذى.',
    focusEn: 'Learn that some early Muslims experienced painful historical persecution, and reflect on empathy, rejecting injustice, and protecting people who are harmed.',
    questionAr: 'ما القيمة التي نتعلمها من تعرض الناس للظلم؟', questionEn: 'What value can we learn from people experiencing injustice?',
    optionsAr: ['التعاطف ومساندة المتضرر', 'الشماتة بمن يتألم', 'تجاهل طلب المساعدة'],
    optionsEn: ['Empathy and supporting those affected', 'Gloating over someone’s pain', 'Ignoring a request for help']
  },
  {
    unit: 6, page: 69, titleAr: 'الاعتداء على الرسول صلى الله عليه وسلم', titleEn: 'Attacks on the Prophet',
    focusAr: 'يتناول أمثلة تاريخية على الأذى الذي تعرض له النبي، ويركز على رفض الاعتداء، والتعاطف مع المتضرر، وطلب الحماية من الكبار الموثوقين.',
    focusEn: 'Consider historical examples of harm directed at the Prophet, focusing on rejecting assault, empathizing with those harmed, and seeking help from trusted adults.',
    questionAr: 'ماذا ينبغي أن نفعل إذا رأينا شخصًا يتعرض للأذى؟', questionEn: 'What should we do if we see someone being harmed?',
    optionsAr: ['نطلب المساعدة ونسانده بأمان', 'نشارك في إيذائه', 'نصور الموقف وننشره للسخرية'],
    optionsEn: ['Get help and support them safely', 'Join in harming them', 'Record it and share it to mock them']
  }
];

const visualSteps = [
  { labelAr: 'اقرأ الموضوع', labelEn: 'Read the topic' },
  { labelAr: 'افهم الفكرة', labelEn: 'Understand the idea' },
  { labelAr: 'اربطها بمثال', labelEn: 'Connect it to an example' },
  { labelAr: 'راجع تعلمك', labelEn: 'Review your learning' }
];

export const SUDAN_PRIMARY_ISLAMIC_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ISLAMIC_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-islamic-g3-${order}`;
  const unit = SUDAN_PRIMARY_ISLAMIC_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الإسلامية — الصف الثالث الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 3 Islamic Studies — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثالث الابتدائي',
    gradeLevelNameEn: 'Grade 3 Primary',
    termAr: 'التربية الإسلامية — الصف الثالث',
    termEn: 'Grade 3 Islamic Studies',
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
      contentAr: `${lesson.focusAr}\n\nتأمل تسلسل التعلم، ثم ناقش مثالًا يوضح كيف تطبق الفكرة باحترام وأمان.`,
      contentEn: `${lesson.focusEn}\n\nFollow the learning sequence, then discuss an example of applying the idea respectfully and safely.`,
      diagram: {
        id: `${id}-lesson-sequence`,
        figureNumberAr: 'شكل توضيحي',
        figureNumberEn: 'Illustration',
        titleAr: 'تسلسل التعلم',
        titleEn: 'Learning Sequence',
        captionAr: 'خطوات بصرية مبسطة لفهم الموضوع ومراجعته.',
        captionEn: 'A simple visual sequence for understanding and reviewing the topic.',
        diagramType: 'primary_lesson_sequence' as const,
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
