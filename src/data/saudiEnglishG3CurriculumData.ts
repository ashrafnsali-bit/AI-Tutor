import type { EducationTrack, Lecture } from '../types';

export const SAUDI_G3_ENGLISH_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books//1448-GE-PE-K03-SM1-ENGLMH.pdf';

const sourceNoteAr =
  `المصدر: We Can! Student’s Book 3 — Part 1، من McGraw-Hill Education. رابط مورد عين: ${SAUDI_G3_ENGLISH_TEXTBOOK_URL}. تذكر بيانات النشر حقوق النسخة الأصلية ©2009 وحقوق التكييف ©2025. يحمل رابط مورد عين رمز 1448، لكن الصفحات التي روجعت لا تكفي وحدها لإثبات سنة الطبعة المطبوعة. طوبقت الوحدات الست وصفحات بدايتها مع فهرس كتاب الطالب (PDF ص 3)، ومحاور التواصل والقواعد والقراءة والإيقاع والأصوات مع جدول النطاق والتسلسل (PDF ص 4–7). روجعت مطالع الوحدات في الصفحات المطبوعة 2، 10، 18، 26، 34، 42. يضم الملف كذلك تدريبات صوتية وقاموسًا مصورًا وقائمة كلمات وأهدافًا وكتاب تمارين (ص 50–118). لم تراجع جميع صفحات الدروس والتمارين. الشروح والأنشطة والرسوم والأسئلة هنا مواد أصلية مساندة من إعداد المنصة، وليست صورًا أو نصوصًا منقولة من الكتاب.`;

const sourceNoteEn =
  `Source: We Can! Student’s Book 3 — Part 1, by McGraw-Hill Education. IEN resource: ${SAUDI_G3_ENGLISH_TEXTBOOK_URL}. The publication record lists ©2009 for the original edition and ©2025 for the adaptation. The IEN resource URL carries the 1448 code, but the pages reviewed do not independently establish the printed edition year. The six units and their starting pages were checked against the Student Book contents (PDF p. 3), and communication, grammar, reading, rhythm, and sound topics against the syllabus/scope sequence (PDF pp. 4–7). Unit openings on printed pp. 2, 10, 18, 26, 34, and 42 were reviewed. The PDF also includes phonics practice, a picture dictionary, word list, objectives, and workbook (pp. 50–118). Not all lesson and workbook pages were reviewed. Platform explanations, activities, diagrams, and questions are original supplementary material, not copied text or images from the book.`;

interface EnglishUnit {
  titleAr: string;
  titleEn: string;
  pageStart: number;
  pageEnd: number;
  focusAr: string;
  focusEn: string;
  languageAr: string;
  languageEn: string;
  practiceAr: string;
  practiceEn: string;
  projectAr: string;
  projectEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string, string];
  optionsEn: [string, string, string, string];
}

const units: EnglishUnit[] = [
  {
    titleAr: 'مسرور بلقائك!',
    titleEn: 'It’s Nice to Meet You!',
    pageStart: 2,
    pageEnd: 9,
    focusAr: 'التعارف وتبادل معلومات مناسبة عن الاسم والعمر ومكان السكن، ثم التعريف بأفراد الأسرة.',
    focusEn: 'Meeting people and exchanging appropriate information about names, ages, and where they live, then introducing family members.',
    languageAr: 'استخدام أسئلة What’s your name? وHow old are you? وWhere do you live? ومراجعة صفات الملكية my وyour وhis وher وour وtheir والضمائر mine وyours.',
    languageEn: 'Asking “What’s your name?”, “How old are you?”, and “Where do you live?” and practising possessive adjectives and pronouns such as my, your, his, her, our, their, mine, and yours.',
    practiceAr: 'تدرّب مع زميل على حوار تعارف، ثم اكتب جملًا قصيرة تعرف فيها بنفسك وبشخص تعرفه.',
    practiceEn: 'Practise a getting-to-know-you dialogue with a partner, then write short sentences introducing yourself and someone you know.',
    projectAr: 'أنشئ بطاقة تعريف أصلية تتضمن معلومات آمنة تختار مشاركتها، واسمًا أو رسمًا لشخصيتك.',
    projectEn: 'Create an original introduction card with safe information you choose to share and a name or drawing for your character.',
    stepsAr: ['أحيّي شريكي', 'أسأل عن الاسم', 'أتبادل معلومة مناسبة', 'أعرّف بشخص'],
    stepsEn: ['Greet a partner', 'Ask a name', 'Share suitable information', 'Introduce someone'],
    questionAr: 'أي جملة صحيحة للتعريف بأختك؟',
    questionEn: 'Which sentence correctly introduces your sister?',
    optionsAr: ['Her name is Sara.', 'She name is Sara.', 'Hers name is Sara.', 'Her names are Sara.'],
    optionsEn: ['Her name is Sara.', 'She name is Sara.', 'Hers name is Sara.', 'Her names are Sara.'],
  },
  {
    titleAr: 'حيوانات البحر',
    titleEn: 'Sea Animals',
    pageStart: 10,
    pageEnd: 17,
    focusAr: 'التعرف إلى حيوانات بحرية ووصفها، والتعبير عن الرأي في صفاتها باستخدام جمل بسيطة.',
    focusEn: 'Recognising sea animals, describing them, and expressing opinions about their features in simple sentences.',
    languageAr: 'السؤال عن المفرد والجمع باستخدام What’s that? وWhat are those? ووصف الصفات والمقارنة بينها مثل big وbigger وthe biggest.',
    languageEn: 'Asking about singular and plural objects with “What’s that?” and “What are those?” and comparing adjectives such as big, bigger, and the biggest.',
    practiceAr: 'اختر حيوانًا بحريًا من قائمة تعلمية، ثم صفه بكلمتين وقارن حجمه أو سرعته بحيوان آخر.',
    practiceEn: 'Choose a sea animal from a learning list, describe it with two words, and compare its size or speed with another animal.',
    projectAr: 'صمم بطاقة مصورة أصلية لحيوان بحري، وأضف إليها وصفًا قصيرًا ورأيك فيه.',
    projectEn: 'Design an original illustrated card for a sea animal and add a short description and opinion.',
    stepsAr: ['أتعرف الحيوان', 'أختار صفة', 'أعبّر عن رأيي', 'أقارن بلطف'],
    stepsEn: ['Identify an animal', 'Choose a feature', 'Share an opinion', 'Make a comparison'],
    questionAr: 'اختر جملة مقارنة صحيحة.',
    questionEn: 'Choose a correct comparison.',
    optionsAr: ['A seahorse is slower than a dolphin.', 'A seahorse is slow than a dolphin.', 'A seahorse are slower than a dolphin.', 'A seahorse is more slow than a dolphin.'],
    optionsEn: ['A seahorse is slower than a dolphin.', 'A seahorse is slow than a dolphin.', 'A seahorse are slower than a dolphin.', 'A seahorse is more slow than a dolphin.'],
  },
  {
    titleAr: 'الرياضات والأنشطة',
    titleEn: 'Sports and Activities',
    pageStart: 18,
    pageEnd: 25,
    focusAr: 'التحدث عن الرياضات والأنشطة التي يحبها المتعلم أو يرغب في تجربتها، والاستفسار عن تفضيلات الآخرين.',
    focusEn: 'Talking about sports and activities a learner enjoys or wants to try and asking about other people’s preferences.',
    languageAr: 'صياغة الأسئلة باستخدام Do وDoes، والإجابة بـ Yes, I do وYes, he does وNo, they don’t، والتعبير عن التفضيل.',
    languageEn: 'Forming questions with do and does, answering with short forms such as “Yes, I do,” “Yes, he does,” and “No, they don’t,” and expressing preferences.',
    practiceAr: 'أجرِ مقابلة قصيرة مع زميل عن نشاط يحبه ونشاط يريد تجربته، ثم لخّص إجابته.',
    practiceEn: 'Interview a partner about an activity they enjoy and one they want to try, then summarise the answers.',
    projectAr: 'أنشئ جدولًا مصورًا للأنشطة الصفية التي يفضلها زملاؤك مع احترام اختلاف الأذواق.',
    projectEn: 'Create an illustrated chart of classmates’ favourite activities while respecting different preferences.',
    stepsAr: ['أختار نشاطًا', 'أسأل Do أو Does', 'أستمع للإجابة', 'أشارك النتيجة'],
    stepsEn: ['Choose an activity', 'Ask with do or does', 'Listen to the answer', 'Share the result'],
    questionAr: 'ما الإجابة القصيرة المناسبة للسؤال: Does Ali like football?',
    questionEn: 'Which short answer fits: “Does Ali like football?”',
    optionsAr: ['Yes, he does.', 'Yes, he do.', 'Yes, does he.', 'Yes, he is.'],
    optionsEn: ['Yes, he does.', 'Yes, he do.', 'Yes, does he.', 'Yes, he is.'],
  },
  {
    titleAr: 'الأعمال المنزلية',
    titleEn: 'Chores',
    pageStart: 26,
    pageEnd: 33,
    focusAr: 'التحدث عن الأعمال اليومية وتقاسم المسؤوليات المنزلية بأسلوب إيجابي ومحترم.',
    focusEn: 'Talking about everyday chores and sharing household responsibilities in a positive and respectful way.',
    languageAr: 'السؤال عن الأعمال باستخدام What chores do you do? وWhat chores does your sister do? ومطابقة الفعل مع الفاعل مثل walk/walks وgo/goes.',
    languageEn: 'Asking about chores with “What chores do you do?” and “What chores does your sister do?” and matching verbs to subjects, such as walk/walks and go/goes.',
    practiceAr: 'صنّف أمثلة على الأعمال المنزلية، ثم اكتب سؤالًا وجوابًا عن مهمة يمكن لأفراد الأسرة تقاسمها.',
    practiceEn: 'Sort examples of household chores, then write a question and answer about a task family members can share.',
    projectAr: 'صمم مخططًا أسبوعيًا أصليًا يوزع مهامًا مناسبة لأفراد الأسرة بالتعاون والاتفاق.',
    projectEn: 'Design an original weekly chart for sharing age-appropriate family tasks through cooperation and agreement.',
    stepsAr: ['أتعرف المهمة', 'أسأل من يقوم بها', 'أستخدم الفعل المناسب', 'أخطط للتعاون'],
    stepsEn: ['Identify a task', 'Ask who does it', 'Use the matching verb', 'Plan to cooperate'],
    questionAr: 'اختر الفعل الصحيح: Mona ___ the table.',
    questionEn: 'Choose the correct verb: “Mona ___ the table.”',
    optionsAr: ['sets', 'set', 'setting', 'is set'],
    optionsEn: ['sets', 'set', 'setting', 'is set'],
  },
  {
    titleAr: 'الأمس واليوم',
    titleEn: 'Yesterday and Today',
    pageStart: 34,
    pageEnd: 41,
    focusAr: 'المقارنة بين الروتين اليومي وما حدث في اليوم السابق، والتحدث عن أوقات الأنشطة.',
    focusEn: 'Comparing daily routines with what happened the day before and talking about the times of activities.',
    languageAr: 'استخدام usually للعادة وyesterday للماضي، والتدرب على أفعال ماضية مثل get up/got up وgo/went وeat/ate.',
    languageEn: 'Using “usually” for routines and “yesterday” for the past and practising past forms such as get up/got up, go/went, and eat/ate.',
    practiceAr: 'رتب صورًا أو أحداثًا في تسلسل زمني، واكتب جملة عن عادة وأخرى عن نشاط حدث أمس.',
    practiceEn: 'Put picture prompts or events in time order and write one sentence about a routine and another about something that happened yesterday.',
    projectAr: 'أنشئ شريطًا زمنيًا مصورًا يوضح نشاطًا يوميًا وما اختلف فيه أمس.',
    projectEn: 'Create an illustrated timeline showing a daily activity and how it was different yesterday.',
    stepsAr: ['أحدد الزمن', 'أذكر العادة', 'أختار صيغة الماضي', 'أقارن الحدثين'],
    stepsEn: ['Identify the time', 'State the routine', 'Choose the past form', 'Compare the events'],
    questionAr: 'أي جملة تصف حدثًا وقع أمس؟',
    questionEn: 'Which sentence describes something that happened yesterday?',
    optionsAr: ['Yesterday, I went to bed at nine.', 'Yesterday, I go to bed at nine.', 'Usually, I went to bed at nine.', 'Tomorrow, I went to bed at nine.'],
    optionsEn: ['Yesterday, I went to bed at nine.', 'Yesterday, I go to bed at nine.', 'Usually, I went to bed at nine.', 'Tomorrow, I went to bed at nine.'],
  },
  {
    titleAr: 'المهن',
    titleEn: 'Jobs',
    pageStart: 42,
    pageEnd: 49,
    focusAr: 'التعرف إلى مهن متنوعة، والتحدث عن مكان العمل وما قد يرغب المتعلم في أن يصبح عليه مستقبلًا.',
    focusEn: 'Learning about different jobs, talking about workplaces, and discussing what a learner might like to be in the future.',
    languageAr: 'السؤال باستخدام What does he/she do? وWhere does he/she work? والتدرب على أسماء المهن وأماكن العمل.',
    languageEn: 'Asking “What does he/she do?” and “Where does he/she work?” and practising job and workplace vocabulary.',
    practiceAr: 'صل بين المهنة ومكان العمل، ثم اطرح أسئلة عن وظيفة شخص في صورة تعليمية.',
    practiceEn: 'Match jobs to workplaces, then ask questions about the job of a person in a learning picture.',
    projectAr: 'صمم بطاقة مهنة أصلية تذكر مهامها ومكان عملها والمهارات المفيدة فيها.',
    projectEn: 'Create an original job card showing its tasks, workplace, and useful skills.',
    stepsAr: ['أتعرف المهنة', 'أسأل عن العمل', 'أحدد المكان', 'أصف مهارة مفيدة'],
    stepsEn: ['Identify a job', 'Ask about the work', 'Name the workplace', 'Describe a useful skill'],
    questionAr: 'اختر الجملة التي تصل مهنة بمكان عمل مناسب.',
    questionEn: 'Choose the sentence that matches a job with a suitable workplace.',
    optionsAr: ['A nurse works in a hospital.', 'A nurse works in a swimming pool.', 'A nurse are work in a hospital.', 'A nurse working yesterday in a hospital.'],
    optionsEn: ['A nurse works in a hospital.', 'A nurse works in a swimming pool.', 'A nurse are work in a hospital.', 'A nurse working yesterday in a hospital.'],
  },
];

const phonicsAndReferenceSections = [
  {
    titleAr: 'مراجعة الأصوات والتهجئة',
    titleEn: 'Sound and Spelling Review',
    contentAr: 'تدرب على ملاحظة أنماط الحروف والأصوات المرتبطة بوحدات الكتاب، مثل ee/ea وoa/ow وoy/oi وar/or وng/ck والأحرف الصامتة. اقرأ الأمثلة بصوت واضح واستعن بتسجيلات الكتاب ومعلمك عند الحاجة.\n\nمرجع الفهرس: تدريبات الأصوات ص 50–61.',
    contentEn: 'Notice the letter and sound patterns connected to the book units, including ee/ea, oa/ow, oy/oi, ar/or, ng/ck, and silent letters. Read example words aloud and use the book audio and teacher guidance when needed.\n\nContents reference: Phonics Practice, pp. 50–61.',
  },
  {
    titleAr: 'القاموس المصور وقائمة الكلمات',
    titleEn: 'Picture Dictionary and Word List',
    contentAr: 'استخدم القاموس المصور للعثور على مفردات مرتبطة بالصور، ثم راجع كتابة الكلمة ومعناها من قائمة الكلمات.\n\nمرجع الفهرس: القاموس المصور ص 62–65، وقائمة الكلمات ص 66.',
    contentEn: 'Use the picture dictionary to find words related to images, then check spelling and meaning in the word list.\n\nContents reference: Picture Dictionary, pp. 62–65; Word List, p. 66.',
  },
  {
    titleAr: 'كتاب التمارين وأهداف التعلم',
    titleEn: 'Workbook and Learning Objectives',
    contentAr: 'طبّق ما تعلمته في أنشطة كتاب التمارين، وتابع أهداف التعلم لتلاحظ ما أتقنته وما يحتاج إلى مراجعة مع المعلم.\n\nمرجع الفهرس: أهداف التعلم ص 68، وكتاب التمارين ص 69–118.',
    contentEn: 'Apply learning through workbook activities and use the objectives to notice what you have mastered and what to review with the teacher.\n\nContents reference: Objectives, p. 68; Workbook, pp. 69–118.',
  },
] as const;

export const SAUDI_G3_ENGLISH_UNIT_COUNT = units.length;
export const SAUDI_G3_ENGLISH_TABLE_OF_CONTENTS = units.map((unit, index) => ({
  unitNumber: index + 1,
  titleAr: unit.titleAr,
  titleEn: unit.titleEn,
  pageStart: unit.pageStart,
  pageEnd: unit.pageEnd,
}));
export const SAUDI_G3_ENGLISH_SUPPLEMENTARY_CONTENTS = [
  { titleEn: 'Phonics Practice', pageStart: 50, pageEnd: 61 },
  { titleEn: 'Picture Dictionary', pageStart: 62, pageEnd: 65 },
  { titleEn: 'Word List', pageStart: 66, pageEnd: 66 },
  { titleEn: 'Audio Track Lists', pageStart: 67, pageEnd: 67 },
  { titleEn: 'Objectives', pageStart: 68, pageEnd: 68 },
  { titleEn: 'Workbook', pageStart: 69, pageEnd: 118 },
];
export const SAUDI_G3_ENGLISH_LECTURE_COUNT = units.length + 1;

export function getSaudiEnglishG3Curriculum(track: EducationTrack): Lecture[] {
  const unitLectures = units.map((unit, index): Lecture => {
    const order = index + 1;
    const lectureId = `sa-english-wecan3-1448-g3-${track.toLowerCase()}-${order}`;
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
      subtitleAr: `اللغة الإنجليزية للصف الثالث — كتاب الطالب، الجزء الأول`,
      subtitleEn: 'Grade 3 English — Student’s Book, Part 1',
      descriptionAr: `${sourceNoteAr}\n\nصفحات الوحدة في كتاب الطالب: ص ${pageRange}.`,
      descriptionEn: `${sourceNoteEn}\n\nStudent Book unit pages: ${pageRange}.`,
      topicAr: `${unit.titleAr} (ص ${pageRange})`,
      topicEn: `${unit.titleEn} (pp. ${pageRange})`,
      durationMinutes: 30,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'ENGLISH',
      gradeLevel: 'G3',
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم السعودية — موارد عين التعليمية؛ نشر الكتاب: McGraw-Hill Education',
      ministryEn: 'Saudi Ministry of Education — IEN resources; publisher: McGraw-Hill Education',
      gradeLevelNameAr: 'الصف الثالث الابتدائي — We Can! Student’s Book 3',
      gradeLevelNameEn: 'Grade 3 — We Can! Student’s Book 3',
      termAr: 'We Can! Student’s Book 3 — الجزء الأول',
      termEn: 'We Can! Student’s Book 3 — Part 1',
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
              { tagAr: 'تطبيق', tagEn: 'Practice', descAr: 'تحدث واكتب', descEn: 'Speak and write' },
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
        titleAr: `تقويم الوحدة ${order}`,
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
          explanationAr: 'الإجابة الصحيحة تطبق مفردة أو تركيبًا لغويًا أو مهارة تواصل مرتبطة بالوحدة.',
          explanationEn: 'The correct answer applies vocabulary, a language form, or a communication skill from the unit.',
          difficulty: 'easy',
        }],
      },
    };
  });

  const supplementaryLecture: Lecture = {
    id: `sa-english-wecan3-1448-g3-${track.toLowerCase()}-phonics`,
    order: units.length + 1,
    titleAr: 'الأصوات والقاموس وكتاب التمارين',
    titleEn: 'Phonics, Picture Dictionary, and Workbook',
    subtitleAr: 'مراجعة المهارات المساندة — الجزء الأول',
    subtitleEn: 'Supplementary Skills Review — Part 1',
    descriptionAr: `${sourceNoteAr}\n\nالمكونات المساندة المطابقة للفهرس: تدريبات الأصوات ص 50–61، القاموس المصور ص 62–65، قائمة الكلمات ص 66، قوائم التسجيلات ص 67، أهداف التعلم ص 68، وكتاب التمارين ص 69–118.`,
    descriptionEn: `${sourceNoteEn}\n\nIndexed supplementary components: Phonics Practice pp. 50–61; Picture Dictionary pp. 62–65; Word List p. 66; Audio Track Lists p. 67; Objectives p. 68; Workbook pp. 69–118.`,
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'ENGLISH',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    educationTrack: track,
    ministryAr: 'وزارة التعليم السعودية — موارد عين التعليمية؛ نشر الكتاب: McGraw-Hill Education',
    ministryEn: 'Saudi Ministry of Education — IEN resources; publisher: McGraw-Hill Education',
    gradeLevelNameAr: 'الصف الثالث الابتدائي — We Can! Student’s Book 3',
    gradeLevelNameEn: 'Grade 3 — We Can! Student’s Book 3',
    termAr: 'We Can! Student’s Book 3 — الجزء الأول',
    termEn: 'We Can! Student’s Book 3 — Part 1',
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
    keyConceptsAr: SAUDI_G3_ENGLISH_SUPPLEMENTARY_CONTENTS.map(
      (item) => `${item.titleEn} (ص ${item.pageStart}${item.pageEnd !== item.pageStart ? `–${item.pageEnd}` : ''})`
    ),
    keyConceptsEn: SAUDI_G3_ENGLISH_SUPPLEMENTARY_CONTENTS.map(
      (item) => `${item.titleEn} (pp. ${item.pageStart}–${item.pageEnd})`
    ),
    summaryAr: `تدريبات الأصوات، والقاموس المصور، وقائمة الكلمات، وكتاب التمارين.\n\n${sourceNoteAr}`,
    summaryEn: `Phonics practice, picture dictionary, word list, and workbook review.\n\n${sourceNoteEn}`,
    sections: phonicsAndReferenceSections.map((section) => ({
      ...section,
      diagram: {
        id: `sa-english-wecan3-1448-g3-${track.toLowerCase()}-${section.titleEn.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        figureNumberAr: 'مخطط مراجعة',
        figureNumberEn: 'Review Map',
        titleAr: section.titleAr,
        titleEn: section.titleEn,
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة.',
        captionEn: 'An original learning diagram created by the platform.',
        diagramType: 'digital_skills',
        visualSteps: [
          { labelAr: 'ألاحظ', labelEn: 'Notice' },
          { labelAr: 'أقرأ', labelEn: 'Read' },
          { labelAr: 'أتدرب', labelEn: 'Practise' },
          { labelAr: 'أراجع', labelEn: 'Review' },
        ],
      },
    })),
    assessment: {
      id: `sa-english-wecan3-1448-g3-${track.toLowerCase()}-phonics-assessment`,
      lectureId: `sa-english-wecan3-1448-g3-${track.toLowerCase()}-phonics`,
      titleAr: 'تحقق من مهارات المراجعة',
      titleEn: 'Review Skills Check',
      passingScore: 80,
      questions: [{
        id: `sa-english-wecan3-1448-g3-${track.toLowerCase()}-phonics-question`,
        textAr: 'أين تبحث عن كلمة عند معرفة صورتها وعدم تذكر طريقة كتابتها؟',
        textEn: 'Where can you look up a word when you recognise its picture but do not remember its spelling?',
        optionsAr: ['القاموس المصور وقائمة الكلمات', 'قائمة أوقات الصلاة', 'خريطة المدن', 'جدول الضرب'],
        optionsEn: ['The picture dictionary and word list', 'A prayer-time list', 'A city map', 'A multiplication table'],
        correctIndex: 0,
        conceptTestedAr: 'استخدام أدوات الكتاب',
        conceptTestedEn: 'Using the book references',
        explanationAr: 'يساعد القاموس المصور وقائمة الكلمات على العثور على المفردات وكتابة كلماتها.',
        explanationEn: 'The picture dictionary and word list help learners find vocabulary and check spelling.',
        difficulty: 'easy',
      }],
    },
  };

  return [...unitLectures, supplementaryLecture];
}
