import type { Lecture, LectureDiagramStep, Question } from '../types';

interface LifeSkillsLesson {
  titleAr: string;
  titleEn: string;
  page: number;
  focusAr: string;
  focusEn: string;
  visualSteps: [string, string][];
}

interface LifeSkillsUnit {
  titleAr: string;
  titleEn: string;
  lessons: LifeSkillsLesson[];
  question: Question;
}

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-tfml.pdf';
const sourceNoteAr =
  'المصدر: كتاب المهارات الحياتية والأسرية للصف الخامس الابتدائي، طبعة الغلاف 1448هـ/2026م، وكتاب كامل غير مجزأ. يذكر سجل النشر الداخلي في PDF ص 2 سنة 1446هـ؛ وقد أُظهر الاختلاف. طوبقت أسماء الوحدات والدروس وأرقام الصفحات المطبوعة مع الفهرس في PDF ص 7. روجعت بدايات الدروس في الصفحات المطبوعة 11 و17 و29 و37 و51 و69 و89 و98. دليل الأسرة وأنشطة الأسرة ولغة الإشارة مواد مساندة وليست دروسًا مفهرسة. الشروح والرسوم والأسئلة هنا أصلية من إعداد المنصة وليست منقولة من متن الكتاب. إرشادات الصحة والدواء تعليمية عامة؛ وعند الحاجة يرجع الطالب إلى ولي أمره أو المختص.';
const sourceNoteEn =
  'Source: the Grade 5 Life and Family Skills textbook, whose cover states 1448 AH/2026; the book is undivided. The internal publication record on PDF p. 2 states 1446 AH, and this difference is disclosed. Unit and lesson titles and printed page references were checked against the contents on PDF p. 7. Lesson openings on printed pp. 11, 17, 29, 37, 51, 69, 89, and 98 were reviewed. The family guide, family activities, and sign-language material are supplementary, not indexed lessons. Explanations, diagrams, and questions here are original platform material, not copied from the textbook. Health and medicine guidance is general and educational; consult a parent or qualified professional when needed.';

const makeQuestion = (
  id: string,
  textAr: string,
  textEn: string,
  correctAr: string,
  correctEn: string,
  incorrectAr: [string, string, string],
  incorrectEn: [string, string, string],
  conceptAr: string,
  conceptEn: string,
  explanationAr: string,
  explanationEn: string
): Question => ({
  id,
  textAr,
  textEn,
  optionsAr: [correctAr, ...incorrectAr],
  optionsEn: [correctEn, ...incorrectEn],
  correctIndex: 0,
  conceptTestedAr: conceptAr,
  conceptTestedEn: conceptEn,
  explanationAr,
  explanationEn,
  difficulty: 'easy',
});

const units: LifeSkillsUnit[] = [
  {
    titleAr: 'صحتي وسلامتي',
    titleEn: 'My Health and Safety',
    lessons: [
      {
        titleAr: 'العلامات الحيوية في الجسم (درجة الحرارة - النبض)',
        titleEn: 'Vital Signs in the Body (Temperature and Pulse)',
        page: 11,
        focusAr: 'يتعرف المتعلم إلى درجة الحرارة والنبض بوصفهما من العلامات الحيوية، ويتدرب على استعمال أدوات القياس بإرشاد شخص بالغ.',
        focusEn: 'Learn that body temperature and pulse are vital signs, and practise using measuring tools with an adult’s guidance.',
        visualSteps: [
          ['تعرف العلامة الحيوية', 'Identify a vital sign'],
          ['استخدم الأداة المناسبة', 'Use a suitable tool'],
          ['سجل القراءة بدقة', 'Record the reading'],
          ['أخبر شخصًا بالغًا عند الحاجة', 'Tell an adult when needed'],
        ],
      },
      {
        titleAr: 'التعامل مع الأدوية',
        titleEn: 'Handling Medicines',
        page: 17,
        focusAr: 'يتعرف المتعلم إلى قواعد السلامة الأساسية للدواء، مثل الرجوع إلى شخص بالغ موثوق وعدم استعماله دون توجيه.',
        focusEn: 'Learn basic medicine-safety practices, including asking a trusted adult and never taking medicine without guidance.',
        visualSteps: [
          ['استشر شخصًا بالغًا', 'Ask a trusted adult'],
          ['اقرأ الإرشادات معه', 'Review instructions together'],
          ['تحقق من العبوة والصلاحية', 'Check the package and expiry'],
          ['احفظ الدواء بأمان', 'Store medicine safely'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g5-life-skills-q1',
      'ما التصرف الآمن عند الحاجة إلى دواء؟',
      'What is a safe action when medicine may be needed?',
      'أطلب مساعدة ولي الأمر أو المختص وأتبع توجيهاته',
      'Ask a parent or qualified professional and follow their guidance',
      ['أختار دواءً بنفسي', 'أستعمل دواء شخص آخر', 'أتجاهل تعليمات العبوة'],
      ['Choose a medicine by myself', 'Use someone else’s medicine', 'Ignore the package instructions'],
      'السلامة عند التعامل مع الأدوية',
      'Medicine safety',
      'يجب أن يكون التعامل مع الدواء بإرشاد ولي الأمر أو المختص، لا بالاختيار أو التجربة الذاتية.',
      'Medicine should be handled with a parent’s or professional’s guidance, not chosen or tried independently.',
    ),
  },
  {
    titleAr: 'مهاراتي في الحياة',
    titleEn: 'My Life Skills',
    lessons: [
      {
        titleAr: 'كيف تذاكر؟',
        titleEn: 'How Do You Study?',
        page: 29,
        focusAr: 'ينظم المتعلم المذاكرة بخطة مناسبة، ويختار مكانًا يساعد على التركيز، ويوازن وقت الدراسة والراحة.',
        focusEn: 'Plan study time, choose a place that supports concentration, and balance study with rest.',
        visualSteps: [
          ['حدد المطلوب', 'Set a learning goal'],
          ['اختر وقتًا ومكانًا', 'Choose a time and place'],
          ['ذاكر على فترات', 'Study in manageable sessions'],
          ['راجع ما تعلمت', 'Review what you learned'],
        ],
      },
      {
        titleAr: 'كيف تجيب عن أسئلة الاختبار؟',
        titleEn: 'How Do You Answer Test Questions?',
        page: 37,
        focusAr: 'يقرأ المتعلم التعليمات والسؤال بعناية، ويختار طريقة للإجابة، ثم يراجع عمله بهدوء.',
        focusEn: 'Read directions and questions carefully, choose an answering strategy, and review the work calmly.',
        visualSteps: [
          ['اقرأ التعليمات', 'Read the directions'],
          ['افهم المطلوب', 'Understand the question'],
          ['أجب بترتيب', 'Answer methodically'],
          ['راجع الإجابة', 'Check the answer'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g5-life-skills-q2',
      'ما الخطوة المفيدة قبل الإجابة عن سؤال الاختبار؟',
      'What is a helpful step before answering a test question?',
      'قراءة التعليمات وفهم المطلوب',
      'Read the directions and understand what is asked',
      ['اختيار إجابة قبل قراءة السؤال', 'ترك السؤال دون محاولة', 'الاستعجال دون مراجعة'],
      ['Choose an answer before reading', 'Leave the question without trying', 'Rush without checking'],
      'استراتيجية الإجابة عن الأسئلة',
      'Answering strategy',
      'فهم التعليمات والسؤال يساعد على اختيار إجابة مناسبة ومراجعتها.',
      'Understanding the directions and question helps you choose and check an appropriate answer.',
    ),
  },
  {
    titleAr: 'مسكني',
    titleEn: 'My Home',
    lessons: [
      {
        titleAr: 'المسكن الصحي',
        titleEn: 'A Healthy Home',
        page: 51,
        focusAr: 'يتعرف المتعلم إلى صفات المسكن الصحي، مثل النظافة والتهوية والمرافق المناسبة ومسارات الحركة الآمنة.',
        focusEn: 'Explore features of a healthy home, including cleanliness, ventilation, suitable facilities, and safe movement.',
        visualSteps: [
          ['هواء وإضاءة مناسبين', 'Suitable air and light'],
          ['نظافة ومرافق آمنة', 'Clean and safe facilities'],
          ['مسارات خالية من العوائق', 'Clear paths without obstacles'],
          ['استعداد للطوارئ', 'Prepare for emergencies'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g5-life-skills-q3',
      'أي صفة تساعد على جعل المسكن أكثر صحة وسلامة؟',
      'Which feature helps make a home healthier and safer?',
      'تهوية مناسبة ومسارات حركة خالية من العوائق',
      'Suitable ventilation and clear paths for moving safely',
      ['حجب النوافذ والهواء', 'ترك العوائق في الممرات', 'إهمال النظافة'],
      ['Block windows and airflow', 'Leave obstacles in walkways', 'Ignore cleanliness'],
      'صفات المسكن الصحي',
      'Healthy-home features',
      'التهوية والنظافة والممرات الآمنة من العناصر التي تدعم صحة وسلامة المسكن.',
      'Ventilation, cleanliness, and safe walkways support a healthy and safe home.',
    ),
  },
  {
    titleAr: 'مجتمعي',
    titleEn: 'My Community',
    lessons: [
      {
        titleAr: 'آداب التعامل خارج المنزل',
        titleEn: 'Good Manners Outside the Home',
        page: 69,
        focusAr: 'يمارس المتعلم الاحترام والتعاون وحسن الخلق عند التعامل مع المعلمين والآخرين في الأماكن العامة.',
        focusEn: 'Practise respect, cooperation, and consideration when interacting with teachers and others in public places.',
        visualSteps: [
          ['لاحظ من حولك', 'Be aware of others'],
          ['تحدث باحترام', 'Speak respectfully'],
          ['تعاون عند الحاجة', 'Cooperate when needed'],
          ['حافظ على المكان', 'Care for the shared place'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g5-life-skills-q4',
      'ما السلوك المناسب في مكان عام؟',
      'Which behavior is appropriate in a public place?',
      'احترام الآخرين والمحافظة على المكان',
      'Respect others and take care of the place',
      ['إزعاج الموجودين', 'ترك المخلفات في المكان', 'تجاهل قواعد السلامة'],
      ['Disturb people nearby', 'Leave litter behind', 'Ignore safety rules'],
      'آداب التعامل في المجتمع',
      'Community manners',
      'الاحترام والتعاون والمحافظة على الأماكن المشتركة سلوك مسؤول.',
      'Respect, cooperation, and care for shared places are responsible behaviors.',
    ),
  },
  {
    titleAr: 'غذائي',
    titleEn: 'My Food',
    lessons: [
      {
        titleAr: 'العناصر الغذائية',
        titleEn: 'Nutrients',
        page: 89,
        focusAr: 'يتعرف المتعلم إلى مجموعات غذائية متنوعة ودورها العام في دعم النمو والطاقة ووظائف الجسم.',
        focusEn: 'Explore a variety of food groups and their general roles in growth, energy, and body functions.',
        visualSteps: [
          ['تعرف مجموعات الغذاء', 'Identify food groups'],
          ['نوع اختياراتك', 'Choose a variety'],
          ['وازن الوجبة', 'Balance a meal'],
          ['راجع العادات اليومية', 'Review daily habits'],
        ],
      },
      {
        titleAr: 'البيض',
        titleEn: 'Eggs',
        page: 98,
        focusAr: 'يتعرف المتعلم إلى أجزاء البيضة وبعض استخداماتها الغذائية، ويراعي قواعد النظافة والسلامة عند إعداد الطعام بإشراف بالغ.',
        focusEn: 'Identify parts of an egg and some food uses, observing hygiene and safety when preparing food with adult supervision.',
        visualSteps: [
          ['تعرف القشرة', 'Identify the shell'],
          ['لاحظ البياض والصفار', 'Notice the white and yolk'],
          ['اختر طريقة إعداد مناسبة', 'Choose a suitable preparation'],
          ['اتبع قواعد النظافة', 'Follow hygiene practices'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g5-life-skills-q5',
      'ما الأجزاء الأساسية التي يدرسها موضوع البيض؟',
      'Which basic parts are studied in the lesson about eggs?',
      'القشرة والبياض والصفار',
      'The shell, white, and yolk',
      ['الساق والجذر والورقة', 'القشرة والعظم والعضلة', 'الريش والمنقار والجناح'],
      ['Stem, root, and leaf', 'Shell, bone, and muscle', 'Feathers, beak, and wing'],
      'تركيب البيضة',
      'Parts of an egg',
      'تتكون البيضة من القشرة والبياض والصفار، ولكل جزء موضعه في الرسم التعليمي.',
      'An egg has a shell, white, and yolk, each shown as a distinct part in a learning diagram.',
    ),
  },
];

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'] as const;

export const SAUDI_G5_LIFE_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G5_LIFE_SKILLS_UNIT_COUNT = units.length;
export const SAUDI_G5_LIFE_SKILLS_LESSON_COUNT = units.reduce(
  (total, unit) => total + unit.lessons.length,
  0
);
export const SAUDI_G5_LIFE_SKILLS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    unitTitleAr: unit.titleAr,
    titleAr: lesson.titleAr,
    page: lesson.page,
  }))
);

export const SAUDI_G5_LIFE_SKILLS_LECTURES: Lecture[] = units.map((unit, unitIndex) => {
  const order = unitIndex + 1;
  const titleAr = `الوحدة ${unitNumbersAr[unitIndex]}: ${unit.titleAr}`;
  const titleEn = `Unit ${order}: ${unit.titleEn}`;
  const sections = unit.lessons.map((lesson, lessonIndex) => {
    const visualSteps: LectureDiagramStep[] = lesson.visualSteps.map(([labelAr, labelEn]) => ({
      labelAr,
      labelEn,
    }));

    return {
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص ${lesson.page}. هذا شرح إرشادي أصلي مبني على فهرس الدرس ومطلع صفحته، وليس نقلًا من متن الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This original guidance is based on the lesson heading and opening page, not copied from the textbook text.`,
      diagram: {
        id: `saudi-g5-life-skills-1448-unit-${order}-lesson-${lessonIndex + 1}`,
        figureNumberAr: `شكل (${order}-${lessonIndex + 1})`,
        figureNumberEn: `Figure (${order}-${lessonIndex + 1})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual guide: ${lesson.titleEn}`,
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        captionEn: 'An original platform-created visual, not an image from the textbook.',
        diagramType: 'life_skills' as const,
        visualSteps,
      },
    };
  });

  const lectureId = `saudi-g5-life-skills-1448-unit-${order}`;
  const lessonReferencesAr = unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`);
  const lessonReferencesEn = unit.lessons.map((lesson) => `${lesson.titleEn} (p. ${lesson.page})`);

  return {
    id: lectureId,
    order,
    titleAr,
    titleEn,
    subtitleAr: `كتاب كامل غير مجزأ — الصف الخامس الابتدائي — فهرس PDF ص 7`,
    subtitleEn: 'Full undivided textbook — Grade 5 — PDF contents p. 7',
    descriptionAr: `${sourceNoteAr}\n\nتضم الوحدة ${unit.lessons.length} دروس مفهرسة. الشروح والرسوم والأسئلة من إعداد المنصة.`,
    descriptionEn: `${sourceNoteEn}\n\nThis unit contains ${unit.lessons.length} indexed lessons. Explanations, visuals, and questions are original platform material.`,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'LIFE_SKILLS',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب المهارات الحياتية والأسرية',
    ministryEn: 'Saudi Ministry of Education — Life and Family Skills textbook',
    gradeLevelNameAr: 'الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Grade 5',
    termAr: 'كتاب كامل غير مجزأ — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Full undivided textbook — 1448 AH/2026 cover edition',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `${titleAr} — ${unit.lessons.length} دروس`,
    lessonNumberEn: `${titleEn} — ${unit.lessons.length} lessons`,
    warmupHookAr: `كيف تساعدك المهارات الحياتية في موقف يومي مرتبط بموضوع «${unit.titleAr}»؟`,
    warmupHookEn: `How can life skills help you in an everyday situation related to “${unit.titleEn}”?`,
    learningOutcomesAr: [
      `يتعرف عناوين دروس الوحدة «${unit.titleAr}» ويربطها بصفحات الكتاب.`,
      'يطبق عادات عملية آمنة ومسؤولة مرتبطة بموضوعات الوحدة.',
    ],
    learningOutcomesEn: [
      `Identify the lessons in “${unit.titleEn}” and match them to the textbook pages.`,
      'Apply practical, safe, and responsible habits related to the unit topics.',
    ],
    keyConceptsAr: lessonReferencesAr,
    keyConceptsEn: lessonReferencesEn,
    summaryAr: `${lessonReferencesAr.join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${lessonReferencesEn.join('\n')}\n\n${sourceNoteEn}`,
    sections,
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم الوحدة ${unitNumbersAr[unitIndex]}: ${unit.titleAr}`,
      titleEn: `Unit ${order} Check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question],
    },
  };
});
