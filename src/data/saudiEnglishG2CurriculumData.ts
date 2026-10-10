import type { EducationTrack, Lecture } from '../types';

export const SAUDI_G2_ENGLISH_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-ENGLMH-part1.pdf';

const sourceNoteAr =
  'المصدر: We Can! Student’s Book 2، نشر McGraw-Hill Education؛ يذكر سجل النشر في PDF ص 2 حقوق الأصل ©2009 وحقوق التكييف ©2025. عناوين الوحدات وصفحاتها مطابقة لفهرس PDF ص 3، ومحاور المفردات والأصوات والتواصل مطابقة لجدول النطاق والتسلسل في PDF ص 4–7. فُحصت صفحات افتتاح الوحدات المطبوعة ص 4 و12 و20 و28 و36، وبدايات المكونات المساندة. رمز 1448 في رابط عين لا يثبت وحده سنة الطبعة المطبوعة، ولم تراجع صفحات الدروس وكتاب التمارين كاملة. الشروح والأنشطة والأسئلة والمخططات أدناه أصلية ومساندة من إعداد المنصة، وليست نصوصًا أو صورًا من الكتاب.';
const sourceNoteEn =
  'Source: We Can! Student’s Book 2, published by McGraw-Hill Education; the publication record on PDF p. 2 states ©2009 for the original and ©2025 for the adaptation. Unit titles and pages follow the contents on PDF p. 3, and vocabulary, phonics, and communication areas follow the Scope and Sequence on PDF pp. 4–7. The opening pages of the five units (printed pp. 4, 12, 20, 28, and 36) and the starts of supplementary components were checked. The 1448 identifier in the IEN URL alone does not establish the printed edition year. The lesson and workbook pages were not reviewed in full. Explanations, activities, questions, and diagrams below are original supplementary platform material, not textbook text or images.';

const units = [
  {
    titleAr: 'المشاعر',
    titleEn: 'Feelings',
    pageStart: 4,
    pageEnd: 11,
    focusAr: 'التعارف والتحية والسؤال عن الحال، والتعبير عن مشاعر وحالات يومية بكلمات مناسبة.',
    focusEn: 'Meeting and greeting people, asking how they are, and naming everyday feelings and states.',
    languageAr: 'مفردات المشاعر والحالات، وصيغ التحية والتعارف، والتدرب على ملاحظة أصوات الحروف والكلمات القصيرة.',
    languageEn: 'Vocabulary for feelings and states, greeting and introduction expressions, and noticing letter sounds in short words.',
    practiceAr: 'استخدم تعبير الوجه ونبرة الصوت والإشارات المناسبة في تعارف قصير، ثم اختر كلمة تصف حالة شخص في موقف مألوف.',
    practiceEn: 'Use suitable facial expressions, voice, and gestures in a short introduction, then choose a word for someone’s state in a familiar situation.',
    projectAr: 'أنشئ بطاقة مشاعر أصلية: ارسم وجهًا، واكتب كلمة إنجليزية مناسبة، وشاركها مع زميل.',
    projectEn: 'Create an original feelings card: draw a face, add a suitable English word, and share it with a partner.',
    stepsAr: ['أحيّي وأتعارف', 'أسأل عن الحال', 'ألاحظ الشعور', 'أختار كلمة مناسبة'],
    stepsEn: ['Greet and meet', 'Ask how someone is', 'Notice the feeling', 'Choose a suitable word'],
    questionAr: 'ما العبارة المناسبة لبدء تعارف مهذب باللغة الإنجليزية؟',
    questionEn: 'Which expression is suitable for beginning a polite introduction?',
    optionsAr: ['It’s nice to meet you.', 'I am a window.', 'Goodbye yesterday.', 'Where is the blue?'],
    optionsEn: ['It’s nice to meet you.', 'I am a window.', 'Goodbye yesterday.', 'Where is the blue?'],
  },
  {
    titleAr: 'ما نرتديه',
    titleEn: 'Things We Wear',
    pageStart: 12,
    pageEnd: 19,
    focusAr: 'التعرف إلى أسماء الملابس والألوان، ووصف ما يرتديه الشخص، والسؤال عن ملكية غرض.',
    focusEn: 'Naming clothes and colors, describing what someone wears, and asking who owns an item.',
    languageAr: 'استخدام مفردات الملابس والألوان، وصيغ الملكية مثل mine، والسؤال بـ whose، مع تمييز أصوات wh وبعض العناقيد الحرفية.',
    languageEn: 'Using clothing and color words, possessive mine, and whose questions, while noticing wh sounds and selected consonant clusters.',
    practiceAr: 'صف قطعة ملابس بلونها، ثم اسأل عن صاحب غرض وأجب بما يوضح إن كان لك أو لشخص آخر.',
    practiceEn: 'Describe an item of clothing by its color, then ask who owns an object and say whether it belongs to you or someone else.',
    projectAr: 'صمم بطاقة خزانة مصورة من ابتكارك، وضع تسميات إنجليزية واضحة لثلاث قطع وألوانها.',
    projectEn: 'Design an original illustrated wardrobe card and clearly label three items and their colors in English.',
    stepsAr: ['أتعرف إلى القطعة', 'أحدد اللون', 'أسأل عن المالك', 'أجيب عن الملكية'],
    stepsEn: ['Identify the item', 'Name its color', 'Ask who owns it', 'Answer about ownership'],
    questionAr: 'أي سؤال يُستخدم للاستفسار عن صاحب قطعة ملابس؟',
    questionEn: 'Which question asks who owns an item of clothing?',
    optionsAr: ['Whose hat is this?', 'How old is the hat?', 'Where do hats sleep?', 'What time is the hat?'],
    optionsEn: ['Whose hat is this?', 'How old is the hat?', 'Where do hats sleep?', 'What time is the hat?'],
  },
  {
    titleAr: 'ما نفعله',
    titleEn: 'Things We Do',
    pageStart: 20,
    pageEnd: 27,
    focusAr: 'التحدث عن الأنشطة الجارية في المنزل أو وقت الفراغ، والسؤال عما يفعله الشخص الآن.',
    focusEn: 'Talking about activities happening at home or during free time and asking what someone is doing now.',
    languageAr: 'السؤال والجواب عن الأفعال الجارية باستخدام المضارع المستمر، ومفردات أنشطة يومية، وملاحظة ph و-ing وبعض العناقيد الصوتية.',
    languageEn: 'Asking and answering about ongoing actions with the present continuous, using everyday activity words, and noticing ph, -ing, and selected sound patterns.',
    practiceAr: 'لاحظ مشهدًا من الحياة اليومية، واسأل عن فعل شخص، ثم كوّن إجابة قصيرة تصف ما يفعله الآن.',
    practiceEn: 'Look at an everyday scene, ask about someone’s activity, and give a short answer describing what they are doing now.',
    projectAr: 'ارسم مشهدًا أصليًا لوقت نشاط، وأضف تسميات إنجليزية لأفعال شخصين على الأقل.',
    projectEn: 'Draw an original activity scene and add English labels for the actions of at least two people.',
    stepsAr: ['ألاحظ الشخص', 'أحدد الفعل', 'أسأل عمّا يجري', 'أصف النشاط'],
    stepsEn: ['Notice the person', 'Identify the action', 'Ask what is happening', 'Describe the activity'],
    questionAr: 'أي جملة تصف نشاطًا يحدث الآن؟',
    questionEn: 'Which sentence describes an activity happening now?',
    optionsAr: ['She is reading now.', 'She read tomorrow.', 'She reads last night.', 'She are reading yesterday.'],
    optionsEn: ['She is reading now.', 'She read tomorrow.', 'She reads last night.', 'She are reading yesterday.'],
  },
  {
    titleAr: 'جمال الطبيعة',
    titleEn: 'Beautiful Nature',
    pageStart: 28,
    pageEnd: 35,
    focusAr: 'ملاحظة عناصر الطبيعة ووصفها بأضداد مناسبة تتعلق بالطول والحجم والجمال والهدوء والقوة.',
    focusEn: 'Noticing features of nature and describing them with suitable opposites for length, size, beauty, quietness, and strength.',
    languageAr: 'استخدام صفات متقابلة في جمل وصفية قصيرة، والتدرب على أصوات c وg وعناقيد الحروف ومخارج بعض الأصوات.',
    languageEn: 'Using contrasting adjectives in short descriptions, and practising c and g sounds, consonant clusters, and selected sound endings.',
    practiceAr: 'قارن بين عنصرين من مشهد طبيعي باستخدام صفتين واضحتين، ثم اذكر ما تلاحظه دون الإضرار بالطبيعة.',
    practiceEn: 'Compare two features in a nature scene using clear adjectives, then say what you notice without harming nature.',
    projectAr: 'أنشئ لوحة طبيعة أصلية من البيئة المحلية، وأضف إليها وصفين متقابلين باللغة الإنجليزية.',
    projectEn: 'Create an original nature scene from the local environment and add two contrasting English descriptions.',
    stepsAr: ['ألاحظ عنصرًا طبيعيًا', 'أختار صفة', 'أقارن بصفة مضادة', 'أصف المشهد'],
    stepsEn: ['Notice a natural feature', 'Choose an adjective', 'Compare with its opposite', 'Describe the scene'],
    questionAr: 'أي زوج من الصفات يصف تضادًا في الطول؟',
    questionEn: 'Which pair of adjectives describes opposite lengths?',
    optionsAr: ['long / short', 'quiet / noisy', 'sweet / sour', 'hot / cold'],
    optionsEn: ['long / short', 'quiet / noisy', 'sweet / sour', 'hot / cold'],
  },
  {
    titleAr: 'أصدقاء وأفعال وأشياء',
    titleEn: 'Friends, Actions, Things',
    pageStart: 36,
    pageEnd: 43,
    focusAr: 'التعريف بالأصدقاء والتحية في أوقات مختلفة، والتحدث عن أفعال جارية وأطعمة وأشياء مألوفة.',
    focusEn: 'Introducing friends and greeting people at different times, and talking about ongoing actions, foods, and familiar things.',
    languageAr: 'استخدام صيغ التعريف بالأصدقاء وcan’t، والمضارع المستمر، ومفردات مذاقات الطعام، وصيغ have وwhose ونهايات الجمع الصوتية.',
    languageEn: 'Using friend introductions and can’t, the present continuous, food-taste words, have and whose forms, and plural ending sounds.',
    practiceAr: 'قدّم صديقًا، وقل ما يفعله شخص الآن، ثم صنّف طعامًا بمذاق مناسب واسأل عن شيء يعود لشخص.',
    practiceEn: 'Introduce a friend, say what someone is doing now, describe a food with a suitable taste word, and ask who owns an object.',
    projectAr: 'أنشئ بطاقة أصلية لنزهة مع الأصدقاء، تتضمن تحية، ونشاطًا، وطعامًا موصوفًا بكلمة مناسبة.',
    projectEn: 'Create an original friends’ picnic card with a greeting, an activity, and a food described with a suitable word.',
    stepsAr: ['أحيّي وأعرّف بصديق', 'أصف فعلًا جاريًا', 'أصف طعامًا', 'أسأل عن غرض'],
    stepsEn: ['Greet and introduce a friend', 'Describe an ongoing action', 'Describe a food', 'Ask about an object'],
    questionAr: 'أي سؤال يناسب الاستفسار عن مذاق طعام؟',
    questionEn: 'Which question is suitable for asking about the taste of a food?',
    optionsAr: ['Is it sweet or sour?', 'Is it wearing a hat?', 'Is it running or reading?', 'Is it long or short?'],
    optionsEn: ['Is it sweet or sour?', 'Is it wearing a hat?', 'Is it running or reading?', 'Is it long or short?'],
  },
] as const;

const supplementaryContents = [
  { titleEn: 'Classroom English', pageStart: 2, pageEnd: 3 },
  { titleEn: 'Phonics Practice', pageStart: 44, pageEnd: 51 },
  { titleEn: 'Picture Dictionary', pageStart: 52, pageEnd: 56 },
  { titleEn: 'Audio Track Lists', pageStart: 57, pageEnd: 58 },
  { titleEn: 'Word List', pageStart: 59, pageEnd: 59 },
  { titleEn: 'Objectives', pageStart: 60, pageEnd: 61 },
  { titleEn: 'Workbook', pageStart: 62, pageEnd: 103 },
] as const;

const referenceSections = [
  {
    titleAr: 'الأصوات والكلمات',
    titleEn: 'Sounds and Words',
    contentAr: 'راجع أنماط الأصوات المرتبطة بالوحدات، واستمع إلى الصوت ثم انطقه واقرأ كلمة تدريبية من إنشائك. مرجع كتاب الطالب: تدريبات الأصوات ص 44–51.',
    contentEn: 'Review sound patterns connected to the units: listen, say the sound, and read an original practice word. Student Book reference: Phonics Practice, pp. 44–51.',
  },
  {
    titleAr: 'القاموس المصور والمفردات',
    titleEn: 'Picture Dictionary and Vocabulary',
    contentAr: 'استخدم الصورة أو قائمة الكلمات للعثور على مفردة، ثم أضفها إلى بطاقة موضوعية من إعدادك. مرجع كتاب الطالب: القاموس المصور ص 52–56، وقائمة الكلمات ص 59.',
    contentEn: 'Use a picture or the word list to find a word, then add it to an original topic card. Student Book references: Picture Dictionary, pp. 52–56; Word List, p. 59.',
  },
  {
    titleAr: 'أهداف التعلم وكتاب التمارين',
    titleEn: 'Objectives and Workbook',
    contentAr: 'تابع أهداف التعلم، وأكمل تدريبًا مناسبًا في كتاب التمارين بمراجعة المعلم. قوائم التسجيلات ص 57–58 وأهداف التعلم ص 60–61 وكتاب التمارين ص 62–103 في كتاب الطالب.',
    contentEn: 'Track the learning objectives and complete a suitable workbook practice activity with teacher review. Student Book references: Audio Track Lists, pp. 57–58; Objectives, pp. 60–61; Workbook, pp. 62–103.',
  },
] as const;

export const SAUDI_G2_ENGLISH_UNIT_COUNT = units.length;
export const SAUDI_G2_ENGLISH_TABLE_OF_CONTENTS = units.map((unit, index) => ({
  unitNumber: index + 1,
  titleAr: unit.titleAr,
  titleEn: unit.titleEn,
  pageStart: unit.pageStart,
  pageEnd: unit.pageEnd,
}));
export const SAUDI_G2_ENGLISH_SUPPLEMENTARY_CONTENTS = supplementaryContents;
export const SAUDI_G2_ENGLISH_LECTURE_COUNT = units.length + 1;

export function getSaudiEnglishG2Curriculum(track: EducationTrack): Lecture[] {
  const unitLectures = units.map((unit, index): Lecture => {
    const order = index + 1;
    const lectureId = `sa-english-wecan2-1448-g2-${track.toLowerCase()}-${order}`;
    const pageRange = `${unit.pageStart}–${unit.pageEnd}`;
    const steps = unit.stepsAr.map((labelAr, stepIndex) => ({
      labelAr,
      labelEn: unit.stepsEn[stepIndex],
    }));

    return {
      id: lectureId,
      order,
      titleAr: unit.titleAr,
      titleEn: unit.titleEn,
      subtitleAr: 'اللغة الإنجليزية للصف الثاني — كتاب الطالب، الجزء الأول',
      subtitleEn: 'Grade 2 English — Student’s Book, Part 1',
      descriptionAr: `${sourceNoteAr}\n\nصفحات الوحدة في كتاب الطالب: ص ${pageRange}. المصدر: ${SAUDI_G2_ENGLISH_TEXTBOOK_URL}`,
      descriptionEn: `${sourceNoteEn}\n\nStudent Book unit pages: ${pageRange}. Source: ${SAUDI_G2_ENGLISH_TEXTBOOK_URL}`,
      topicAr: `${unit.titleAr} (ص ${pageRange})`,
      topicEn: `${unit.titleEn} (pp. ${pageRange})`,
      durationMinutes: 25,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'ENGLISH',
      gradeLevel: 'G2',
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم السعودية — موارد عين التعليمية؛ نشر الكتاب: McGraw-Hill Education',
      ministryEn: 'Saudi Ministry of Education — IEN resources; publisher: McGraw-Hill Education',
      gradeLevelNameAr: 'الصف الثاني الابتدائي — We Can! Student’s Book 2',
      gradeLevelNameEn: 'Grade 2 — We Can! Student’s Book 2',
      termAr: 'We Can! Student’s Book 2 — الجزء الأول',
      termEn: 'We Can! Student’s Book 2 — Part 1',
      unitTitleAr: `الوحدة ${order}: ${unit.titleAr}`,
      unitTitleEn: `Unit ${order}: ${unit.titleEn}`,
      lessonNumberAr: `الوحدة ${order} (ص ${pageRange})`,
      lessonNumberEn: `Unit ${order} (pp. ${pageRange})`,
      warmupHookAr: `ما الكلمات الإنجليزية التي تعرفها عن «${unit.titleAr}»؟`,
      warmupHookEn: `Which English words do you already know about “${unit.titleEn}”?`,
      learningOutcomesAr: [
        unit.focusAr,
        unit.languageAr,
        unit.practiceAr,
        unit.projectAr,
      ],
      learningOutcomesEn: [
        unit.focusEn,
        unit.languageEn,
        unit.practiceEn,
        unit.projectEn,
      ],
      keyConceptsAr: [unit.focusAr, unit.languageAr, unit.practiceAr],
      keyConceptsEn: [unit.focusEn, unit.languageEn, unit.practiceEn],
      summaryAr: `${unit.focusAr} ${unit.languageAr} ${unit.practiceAr}\n\n${sourceNoteAr}`,
      summaryEn: `${unit.focusEn} ${unit.languageEn} ${unit.practiceEn}\n\n${sourceNoteEn}`,
      sections: [
        {
          titleAr: `خريطة تعلم الوحدة: ${unit.titleAr}`,
          titleEn: `Unit ${order} Learning Map: ${unit.titleEn}`,
          contentAr: `${unit.focusAr}\n\nمحور اللغة: ${unit.languageAr}\n\nمرجع الوحدة: كتاب الطالب ص ${pageRange}.`,
          contentEn: `${unit.focusEn}\n\nLanguage focus: ${unit.languageEn}\n\nUnit reference: Student Book pp. ${pageRange}.`,
          diagram: {
            id: `${lectureId}-map`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Learning Map (${order})`,
            titleAr: `خريطة تعلم: ${unit.titleAr}`,
            titleEn: `Learning Map: ${unit.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
            captionEn: 'An original learning diagram created by the platform, not an image from the textbook.',
            diagramType: 'digital_skills',
            visualSteps: steps,
            keyLabels: [
              { tagAr: 'الموضوع', tagEn: 'Topic', descAr: unit.titleAr, descEn: unit.titleEn },
              { tagAr: 'تطبيق', tagEn: 'Practice', descAr: 'تحدث وطبّق', descEn: 'Speak and apply' },
            ],
          },
        },
        {
          titleAr: 'تواصل وتطبيق',
          titleEn: 'Communicate and Apply',
          contentAr: `${unit.practiceAr}\n\n${unit.projectAr}`,
          contentEn: `${unit.practiceEn}\n\n${unit.projectEn}`,
        },
        {
          titleAr: 'تدريب كتاب التمارين',
          titleEn: 'Workbook Practice',
          contentAr: 'أكمل أنشطة الوحدة المناسبة في كتاب التمارين، ثم راجع إجاباتك مع معلمك.',
          contentEn: 'Complete the matching unit activities in the workbook, then review your answers with your teacher.',
        },
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        lectureId,
        titleAr: `تحقق من الوحدة ${order}`,
        titleEn: `Unit ${order} Check`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-question-1`,
          textAr: unit.questionAr,
          textEn: unit.questionEn,
          optionsAr: [...unit.optionsAr],
          optionsEn: [...unit.optionsEn],
          correctIndex: 0,
          conceptTestedAr: unit.titleAr,
          conceptTestedEn: unit.titleEn,
          explanationAr: 'تطبق الإجابة الصحيحة مفردة أو تركيبًا لغويًا أو مهارة تواصل مستهدفة في الوحدة.',
          explanationEn: 'The correct answer applies vocabulary, a language form, or a communication skill targeted in the unit.',
          difficulty: 'easy',
        }],
      },
    };
  });

  const supplementaryLectureId = `sa-english-wecan2-1448-g2-${track.toLowerCase()}-references`;
  const supplementaryLecture: Lecture = {
    id: supplementaryLectureId,
    order: units.length + 1,
    titleAr: 'الأصوات والقاموس وكتاب التمارين',
    titleEn: 'Phonics, Picture Dictionary, and Workbook',
    subtitleAr: 'مراجعة المهارات المساندة — الجزء الأول',
    subtitleEn: 'Supplementary Skills Review — Part 1',
    descriptionAr: `${sourceNoteAr}\n\nالمكونات المطابقة للفهرس: Classroom English ص 2–3؛ تدريبات الأصوات ص 44–51؛ القاموس المصور ص 52–56؛ قوائم التسجيلات ص 57–58؛ قائمة الكلمات ص 59؛ أهداف التعلم ص 60–61؛ وكتاب التمارين ص 62–103. المصدر: ${SAUDI_G2_ENGLISH_TEXTBOOK_URL}`,
    descriptionEn: `${sourceNoteEn}\n\nIndexed components: Classroom English pp. 2–3; Phonics Practice pp. 44–51; Picture Dictionary pp. 52–56; Audio Track Lists pp. 57–58; Word List p. 59; Objectives pp. 60–61; Workbook pp. 62–103. Source: ${SAUDI_G2_ENGLISH_TEXTBOOK_URL}`,
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'ENGLISH',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    educationTrack: track,
    ministryAr: 'وزارة التعليم السعودية — موارد عين التعليمية؛ نشر الكتاب: McGraw-Hill Education',
    ministryEn: 'Saudi Ministry of Education — IEN resources; publisher: McGraw-Hill Education',
    gradeLevelNameAr: 'الصف الثاني الابتدائي — We Can! Student’s Book 2',
    gradeLevelNameEn: 'Grade 2 — We Can! Student’s Book 2',
    termAr: 'We Can! Student’s Book 2 — الجزء الأول',
    termEn: 'We Can! Student’s Book 2 — Part 1',
    unitTitleAr: 'مراجعة المهارات المساندة',
    unitTitleEn: 'Supplementary Skills Review',
    lessonNumberAr: 'الأصوات والقاموس وكتاب التمارين',
    lessonNumberEn: 'Phonics, dictionary, and workbook',
    warmupHookAr: 'كيف تساعدك ملاحظة الأصوات والصور على تذكر الكلمات وقراءتها؟',
    warmupHookEn: 'How can noticing sounds and pictures help you remember and read words?',
    learningOutcomesAr: [
      'يراجع أنماط الأصوات المرتبطة بوحدات الكتاب.',
      'يستخدم القاموس المصور وقائمة الكلمات للعثور على المفردات.',
      'يتابع أهداف التعلم ويتدرب من كتاب التمارين.',
    ],
    learningOutcomesEn: [
      'Review sound patterns connected to the book units.',
      'Use the picture dictionary and word list to find vocabulary.',
      'Track learning objectives and practise with the workbook.',
    ],
    keyConceptsAr: supplementaryContents.map(
      (item) => `${item.titleEn} (ص ${item.pageStart}${item.pageEnd !== item.pageStart ? `–${item.pageEnd}` : ''})`
    ),
    keyConceptsEn: supplementaryContents.map(
      (item) => `${item.titleEn} (pp. ${item.pageStart}–${item.pageEnd})`
    ),
    summaryAr: `تدريبات الأصوات، والقاموس المصور، وقائمة الكلمات، وكتاب التمارين.\n\n${sourceNoteAr}`,
    summaryEn: `Phonics practice, picture dictionary, word list, and workbook review.\n\n${sourceNoteEn}`,
    sections: referenceSections.map((section, index) => ({
      ...section,
      diagram: {
        id: `${supplementaryLectureId}-reference-${index + 1}`,
        figureNumberAr: `مخطط مراجعة (${index + 1})`,
        figureNumberEn: `Review Map (${index + 1})`,
        titleAr: section.titleAr,
        titleEn: section.titleEn,
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        captionEn: 'An original learning diagram created by the platform, not an image from the textbook.',
        diagramType: 'digital_skills' as const,
        visualSteps: [
          { labelAr: 'ألاحظ', labelEn: 'Notice' },
          { labelAr: 'أقرأ', labelEn: 'Read' },
          { labelAr: 'أتدرب', labelEn: 'Practise' },
          { labelAr: 'أراجع', labelEn: 'Review' },
        ],
      },
    })),
    assessment: {
      id: `${supplementaryLectureId}-assessment`,
      lectureId: supplementaryLectureId,
      titleAr: 'تحقق من أدوات المراجعة',
      titleEn: 'Review Tools Check',
      passingScore: 80,
      questions: [{
        id: `${supplementaryLectureId}-question`,
        textAr: 'أين تبحث عن كلمة عندما تعرف صورتها وتحتاج إلى مراجعة كتابتها؟',
        textEn: 'Where can you look up a word when you recognise its picture and need to check its spelling?',
        optionsAr: ['القاموس المصور وقائمة الكلمات', 'جدول الحصص', 'خريطة الطقس', 'جدول الضرب'],
        optionsEn: ['The picture dictionary and word list', 'A class timetable', 'A weather map', 'A multiplication table'],
        correctIndex: 0,
        conceptTestedAr: 'استخدام أدوات الكتاب',
        conceptTestedEn: 'Using the book references',
        explanationAr: 'يساعد القاموس المصور وقائمة الكلمات على العثور على المفردات ومراجعة كتابتها.',
        explanationEn: 'The picture dictionary and word list help learners find vocabulary and check spelling.',
        difficulty: 'easy',
      }],
    },
  };

  return [...unitLectures, supplementaryLecture];
}
