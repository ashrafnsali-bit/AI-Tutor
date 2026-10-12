import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_GEOGRAPHY_G5_BOOK = {
  title: 'الجغرافيا — الصف الخامس الابتدائي',
  titleEn: 'Geography — Grade 5 Primary',
  edition: 'جمهورية السودان — الطبعة الأولى — 2021',
  units: [
    { titleAr: 'البيئة من حولنا', titleEn: 'The Environment Around Us', firstPage: 5, lastPage: 16 },
    { titleAr: 'مدرستي', titleEn: 'My School', firstPage: 17, lastPage: 30 },
    { titleAr: 'وطني السودان', titleEn: 'My Homeland, Sudan', firstPage: 32, lastPage: 37 }
  ]
} as const;

interface GeographyLesson {
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

const lessons: GeographyLesson[] = [
  {
    unit: 1, page: 6, lastPage: 6, titleAr: 'ما هي الجغرافيا؟', titleEn: 'What Is Geography?',
    focusAr: 'تدرس الجغرافيا الأرض وما عليها، من مظاهر طبيعية كالماء والتضاريس إلى السكان وأنشطتهم. وتساعدنا على فهم صلات الناس بالأماكن والبيئة.',
    focusEn: 'Geography studies Earth and its features, from water and landforms to people and their activities. It helps us understand how people and places relate to their environment.',
    questionAr: 'أي موضوع يدرسه الجغرافي؟', questionEn: 'Which topic might a geographer study?',
    optionsAr: ['علاقة السكان بالمكان الذي يعيشون فيه', 'ترتيب الحروف الهجائية', 'قواعد جمع الأعداد'],
    optionsEn: ['How people relate to the places where they live', 'The order of letters in an alphabet', 'Rules for adding numbers'],
    visualStepsAr: ['مكان على الأرض', 'معالمه الطبيعية والبشرية', 'حياة الناس فيه', 'نفهم صلات الإنسان بالمكان'],
    visualStepsEn: ['A place on Earth', 'Its natural and human features', 'People’s lives there', 'Understand people–place connections']
  },
  {
    unit: 1, page: 7, lastPage: 10, titleAr: 'الصورة والخريطة', titleEn: 'Pictures and Maps',
    focusAr: 'تعرض الصورة المكان من زاوية النظر، أما الخريطة فتمثله من أعلى بصورة مبسطة. نقرأ عنوان الخريطة وسهم الشمال ومفتاح الرموز لفهم مواقع معالمها.',
    focusEn: 'A picture shows a place from a viewpoint; a map represents it simply from above. Read the map title, north arrow, and symbol key to understand where features are.',
    questionAr: 'ما الذي يفسر معنى الرموز المرسومة على الخريطة؟', questionEn: 'What explains the meaning of symbols shown on a map?',
    optionsAr: ['مفتاح الخريطة', 'عنوان الصورة', 'مقياس حرارة'],
    optionsEn: ['The map key', 'The picture title', 'A thermometer'],
    visualStepsAr: ['ننظر إلى عنوان الخريطة', 'نحدد سهم الشمال', 'نراجع مفتاح الرموز', 'نستدل على مواقع المعالم'],
    visualStepsEn: ['Read the map title', 'Find the north arrow', 'Check the symbol key', 'Locate the features']
  },
  {
    unit: 1, page: 11, lastPage: 13, titleAr: 'الاتجاهات', titleEn: 'Cardinal Directions',
    focusAr: 'تسمى الشمال والجنوب والشرق والغرب الجهات الأصلية. تساعد هذه الجهات على وصف مواقع الأشياء والطرق؛ فالشرق يقابل الغرب والشمال يقابل الجنوب.',
    focusEn: 'North, south, east, and west are the cardinal directions. They help describe places and routes: east is opposite west, and north is opposite south.',
    questionAr: 'ما الجهة المقابلة للجنوب؟', questionEn: 'Which direction is opposite south?',
    optionsAr: ['الشمال', 'الشرق', 'الغرب'],
    optionsEn: ['North', 'East', 'West'],
    visualStepsAr: ['نحدد الشمال', 'نقف ووجهنا شمالًا', 'الشرق على يميننا', 'الجنوب خلفنا والغرب يسارنا'],
    visualStepsEn: ['Identify north', 'Face north', 'East is on our right', 'South is behind; west is left']
  },
  {
    unit: 1, page: 14, lastPage: 16, titleAr: 'الجهات الفرعية', titleEn: 'Intermediate Directions',
    focusAr: 'تقع الجهات الفرعية بين جهتين أصليتين متجاورتين: شمال شرقي، وشمال غربي، وجنوب شرقي، وجنوب غربي. نصف بها موقعًا أدق من الجهات الأصلية وحدها.',
    focusEn: 'Intermediate directions lie between neighboring cardinal directions: northeast, northwest, southeast, and southwest. They describe a more precise location.',
    questionAr: 'أين تقع جهة الجنوب الشرقي؟', questionEn: 'Where is southeast?',
    optionsAr: ['بين الجنوب والشرق', 'بين الشمال والغرب', 'بين الشمال والشرق'],
    optionsEn: ['Between south and east', 'Between north and west', 'Between north and east'],
    visualStepsAr: ['نحدد الجنوب والشرق', 'نبحث عن الجهة بينهما', 'نسميها الجنوب الشرقي', 'نستخدمها لوصف موقع أدق'],
    visualStepsEn: ['Identify south and east', 'Find the direction between them', 'Name it southeast', 'Use it for a more precise location']
  },
  {
    unit: 2, page: 17, lastPage: 18, titleAr: 'فصلي (1)', titleEn: 'My Classroom (1)',
    focusAr: 'الفصل مكان نتعلم فيه ونتشارك استخدامه. ملاحظة ما فيه ومواقع أجزائه تجعل وصف البيئة الصفية ورسمها أسهل.',
    focusEn: 'A classroom is a place where we learn and share space. Noticing its features and their positions makes it easier to describe and map.',
    questionAr: 'ما الفائدة من معرفة مواقع الأشياء في الفصل؟', questionEn: 'Why learn where things are in a classroom?',
    optionsAr: ['لوصف المكان ورسم خريطته', 'لمعرفة أسماء القارات', 'لتحديد فصول السنة'],
    optionsEn: ['To describe the room and map it', 'To learn the names of continents', 'To identify the seasons'],
    visualStepsAr: ['نلاحظ الفصل', 'نسمي الأشياء الموجودة فيه', 'نصف مواقعها واتجاهاتها', 'نرسم مخططًا بسيطًا'],
    visualStepsEn: ['Observe the classroom', 'Name its features', 'Describe their positions and directions', 'Draw a simple plan']
  },
  {
    unit: 2, page: 19, lastPage: 19, titleAr: 'فصلي (2)', titleEn: 'My Classroom (2)',
    focusAr: 'تؤثر النوافذ والباب وترتيب المقاعد في استخدام الفصل. نسجل مواقع عناصره من منظور علوي لنحوّل المكان المعروف إلى رسم واضح.',
    focusEn: 'Windows, doors, and desk arrangements shape how a classroom is used. A top-down view helps turn the familiar room into a clear drawing.',
    questionAr: 'أي منظور يساعد على رسم خريطة للفصل؟', questionEn: 'Which viewpoint helps us draw a classroom map?',
    optionsAr: ['النظر إليه من أعلى', 'النظر إليه من أسفل الأرض', 'النظر إلى صورة قريبة لشيء واحد'],
    optionsEn: ['Viewing it from above', 'Looking up from beneath the floor', 'Looking at a close-up of one object'],
    visualStepsAr: ['نختار موضعًا مرتفعًا للنظر', 'نرسم حدود الفصل', 'نضع الباب والنوافذ والمقاعد', 'نضيف عنوانًا للرسم'],
    visualStepsEn: ['Imagine a view from above', 'Draw the classroom outline', 'Place the door, windows, and desks', 'Add a title']
  },
  {
    unit: 2, page: 20, lastPage: 21, titleAr: 'فصلي (3)', titleEn: 'My Classroom (3)',
    focusAr: 'الخريطة الصفية رسم من أعلى يبين مواقع العناصر بالنسبة إلى بعضها. نستعملها لتحديد مكاننا ووصف مسار بسيط مثل الطريق من المقعد إلى الباب.',
    focusEn: 'A classroom map is a top-down drawing showing where features are in relation to one another. Use it to locate yourself or describe a route, such as from a desk to the door.',
    questionAr: 'كيف نحدد طريقًا من المقعد إلى الباب على الخريطة؟', questionEn: 'How can we show a route from a desk to the door on a map?',
    optionsAr: ['نتتبع المسار بين موقعيهما', 'نحذف موقع الباب', 'نقيس ارتفاع السقف'],
    optionsEn: ['Trace the route between their positions', 'Remove the door’s location', 'Measure the ceiling height'],
    visualStepsAr: ['نجد رمز المقعد', 'نحدد موقع الباب', 'نتتبع المسار بينهما', 'نصف الاتجاهات بالترتيب'],
    visualStepsEn: ['Find the desk symbol', 'Locate the door', 'Trace the route between them', 'Describe the directions in order']
  },
  {
    unit: 2, page: 22, lastPage: 22, titleAr: 'مدرستي (1)', titleEn: 'My School (1)',
    focusAr: 'تضم المدرسة أماكن متعددة مثل الفصول والمرافق والساحات. نلاحظ هذه الأجزاء ونصف كيف تتوزع، ثم نفكر في مسؤوليتنا المشتركة عن بيئتها.',
    focusEn: 'A school includes different places such as classrooms, facilities, and yards. Observe how they are arranged and consider our shared responsibility for the school environment.',
    questionAr: 'ما الخطوة الأولى لوصف توزيع مرافق المدرسة؟', questionEn: 'What is a first step in describing school facilities?',
    optionsAr: ['ملاحظة المرافق وتحديد مواقعها', 'حذفها من الخريطة', 'تغيير اتجاه الشمال'],
    optionsEn: ['Observe the facilities and locate them', 'Leave them off the map', 'Change the direction of north'],
    visualStepsAr: ['نستكشف المدرسة', 'نسجل مرافقها', 'نحدد مواقع المرافق', 'نصف التوزيع ونحافظ على المكان'],
    visualStepsEn: ['Explore the school', 'List its facilities', 'Locate each facility', 'Describe the layout and care for the place']
  },
  {
    unit: 2, page: 23, lastPage: 24, titleAr: 'مدرستي (2)', titleEn: 'My School (2)',
    focusAr: 'تساعد خريطة المدرسة على مقارنة مواقع الفصول والساحات والمباني. بقراءة الاتجاهات نختار طريقًا واضحًا بين موضعين ونتحقق من وصوله.',
    focusEn: 'A school map helps compare the locations of classrooms, yards, and buildings. Use directions to choose and check a clear route between two places.',
    questionAr: 'ما الذي يساعد على وصف طريق بين مبنيين في المدرسة؟', questionEn: 'What helps describe a route between two school buildings?',
    optionsAr: ['مواقع المباني والاتجاهات', 'ألوان الطلاء وحدها', 'عدد نوافذ الفصل فقط'],
    optionsEn: ['Building locations and directions', 'Paint colors alone', 'Only the number of classroom windows'],
    visualStepsAr: ['نحدد نقطة البداية', 'نجد الوجهة على الخريطة', 'نتبع الطريق الممكن', 'نشرح الطريق بالاتجاهات'],
    visualStepsEn: ['Locate the starting point', 'Find the destination on the map', 'Follow a possible route', 'Explain it using directions']
  },
  {
    unit: 2, page: 25, lastPage: 25, titleAr: 'مدرستي (3)', titleEn: 'My School (3)',
    focusAr: 'تحيط بالمدرسة مبانٍ وأماكن قريبة تختلف مواقعها. نستخدم الجهات الأصلية والفرعية لوصف موقع كل مكان بالنسبة إلى المدرسة.',
    focusEn: 'Buildings and other places lie around a school in different positions. Use cardinal and intermediate directions to describe each place relative to the school.',
    questionAr: 'كيف نصف موقع مبنى قريب من المدرسة بدقة أكبر؟', questionEn: 'How can we describe a nearby building’s location more precisely?',
    optionsAr: ['باستخدام جهة أصلية أو فرعية مناسبة', 'بذكر لونه فقط', 'بمعرفة وقت بنائه'],
    optionsEn: ['Use a suitable cardinal or intermediate direction', 'Name only its color', 'Find out when it was built'],
    visualStepsAr: ['نحدد المدرسة على الخريطة', 'نحدد المبنى القريب', 'نقارن موقعيهما', 'نسمي الجهة بينهما'],
    visualStepsEn: ['Locate the school on the map', 'Locate the nearby building', 'Compare their positions', 'Name the direction between them']
  },
  {
    unit: 2, page: 26, lastPage: 27, titleAr: 'مدرستي (4)', titleEn: 'My School (4)',
    focusAr: 'المدرسة الصحية مكان آمن ونظيف. تساعدنا الخريطة على تحديد مواضع سلال النفايات ومتابعة مسار جمعها، ويقلل التخلص السليم من التلوث.',
    focusEn: 'A healthy school is safe and clean. A map can locate waste bins and show collection routes; proper disposal helps reduce pollution.',
    questionAr: 'لماذا نحدد أماكن سلال النفايات في خريطة المدرسة؟', questionEn: 'Why mark waste bins on a school map?',
    optionsAr: ['لتسهيل استخدامها والمحافظة على النظافة', 'لتغطية ممرات المدرسة', 'لإخفاء مواقع الفصول'],
    optionsEn: ['To make them easy to use and keep the school clean', 'To block school pathways', 'To hide classroom locations'],
    visualStepsAr: ['نلاحظ مصادر النفايات', 'نختار مواقع مناسبة للسلال', 'نحددها على الخريطة', 'نستخدمها ونتابع الجمع'],
    visualStepsEn: ['Notice where waste is produced', 'Choose suitable bin locations', 'Mark them on the map', 'Use the bins and arrange collection']
  },
  {
    unit: 2, page: 28, lastPage: 30, titleAr: 'تطبيقات ومراجعات', titleEn: 'Applications and Review',
    focusAr: 'نجمع مهارات قراءة الخريطة ورسمها: نستخدم العنوان والاتجاهات والرموز، ونحدد المواقع ونشرح الطرق بوضوح لزميل أو زميلة.',
    focusEn: 'Bring map skills together: use titles, directions, and symbols; locate places and clearly explain routes to a classmate.',
    questionAr: 'ما المعلومات الأساسية التي تساعد على قراءة خريطة المدرسة؟', questionEn: 'Which basic information helps us read a school map?',
    optionsAr: ['العنوان والاتجاهات والرموز', 'الطقس وأيام الأسبوع', 'أسماء الألوان فقط'],
    optionsEn: ['The title, directions, and symbols', 'Weather and days of the week', 'Color names only'],
    visualStepsAr: ['نقرأ عنوان الخريطة', 'نحدد الشمال والجهات', 'نفسر الرموز بالمفتاح', 'نختار الموقع أو الطريق'],
    visualStepsEn: ['Read the map title', 'Find north and the directions', 'Interpret symbols with the key', 'Choose a place or route']
  },
  {
    unit: 3, page: 33, lastPage: 37, titleAr: 'موقع السودان', titleEn: 'The Location of Sudan',
    focusAr: 'يقع السودان في قارة إفريقيا، في جهتها الشمالية الشرقية. نستخدم خريطة القارات لتحديد موقعه، ونميز الحدود الطبيعية كالنهر عن الحدود السياسية بين الدول.',
    focusEn: 'Sudan lies in Africa’s northeastern part. Use a continent map to locate it, and distinguish natural boundaries such as a river from political boundaries between countries.',
    questionAr: 'في أي جزء من قارة إفريقيا يقع السودان؟', questionEn: 'In which part of Africa is Sudan located?',
    optionsAr: ['الشمال الشرقي', 'الجنوب الغربي', 'الجنوب الشرقي'],
    optionsEn: ['The northeast', 'The southwest', 'The southeast'],
    visualStepsAr: ['نحدد قارة إفريقيا', 'نبحث عن السودان داخلها', 'نلاحظ موقعه الشمالي الشرقي', 'نقرأ حدوده حول الخريطة'],
    visualStepsEn: ['Locate the continent of Africa', 'Find Sudan within it', 'Notice its northeastern position', 'Read the boundaries around it']
  }
];

export const SUDAN_PRIMARY_GEOGRAPHY_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_GEOGRAPHY_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-geography-g5-${order}`;
  const unit = SUDAN_PRIMARY_GEOGRAPHY_G5_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `الجغرافيا — الصف الخامس الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 Geography — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'GEOGRAPHY',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Grade 5 Primary',
    termAr: 'الجغرافيا — الصف الخامس',
    termEn: 'Grade 5 Geography',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في مكان قريب يرتبط بموضوع «${lesson.titleAr}»، ثم صف ما تلاحظه فيه.`,
    warmupHookEn: `Think of a nearby place connected to “${lesson.titleEn},” then describe what you notice there.`,
    learningOutcomesAr: [lesson.focusAr, 'يستخدم مفهومًا أو اتجاهًا جغرافيًا لوصف مكان مألوف.'],
    learningOutcomesEn: [lesson.focusEn, 'Use a geographic concept or direction to describe a familiar place.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: تتبع الخطوات الأربع، ثم طبّق الفكرة على مكان تعرفه.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Follow the four steps, then apply the idea to a place you know.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual Guide: ${lesson.titleEn}`,
        captionAr: `مخطط تعليمي من أربع خطوات لموضوع «${lesson.titleAr}».`,
        captionEn: `A four-step learning diagram for “${lesson.titleEn}.”`,
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
    topicAr: `ص ${lesson.page}${lesson.lastPage === lesson.page ? '' : `–${lesson.lastPage}`}`,
    topicEn: `p. ${lesson.page}${lesson.lastPage === lesson.page ? '' : `–${lesson.lastPage}`}`
  };
});
