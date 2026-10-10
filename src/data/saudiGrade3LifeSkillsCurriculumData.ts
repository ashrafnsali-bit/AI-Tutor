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

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-tfml-part1.pdf';
const sourceNoteAr =
  'المصدر: كتاب المهارات الحياتية والأسرية للصف الثالث الابتدائي، الجزء الأول من المقرر، 79 صفحة. يذكر الغلاف طبعة 1448هـ/2026م، بينما يذكر سجل النشر الداخلي في PDF ص 2 سنة 1446هـ؛ أُظهر الاختلاف دون حسمه. طوبقت موضوعات الوحدة الأولى مع افتتاحيتها في PDF ص 8، وموضوعات الوحدة الثانية مع افتتاحيتها في PDF ص 44، ورُوجعت مطالع الدروس في الصفحات المطبوعة 10، 18، 25، 35، 46، 55. دليل الأسرة وأنشطتها ومفردات لغة الإشارة مواد مساندة وليست دروسًا مستقلة في هذا المسار. الشروح والأنشطة والرسوم والتقويمات أصلية من إعداد المنصة وليست نقلًا من متن الكتاب أو صوره.';
const sourceNoteEn =
  'Source: Grade 3 Life and Family Skills, Part One of the curriculum, 79 pages. The cover states 1448 AH/2026 CE, while the internal publication record on PDF p. 2 states 1446 AH; the discrepancy is disclosed without resolving it. Unit 1 topics were checked against its opening on PDF p. 8, Unit 2 topics against its opening on PDF p. 44, and lesson openings on printed pp. 10, 18, 25, 35, 46, and 55 were reviewed. The family guide, family activities, and sign-language vocabulary are supplementary, not separate lessons in this path. Explanations, activities, diagrams, and assessments are original platform material, not copied from the textbook text or images.';

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
        titleAr: 'معاني الرموز الإرشادية',
        titleEn: 'Meanings of Guidance Symbols',
        page: 10,
        focusAr: 'تعرف إلى الأشكال الشائعة للرموز الإرشادية، مثل لوحات التحذير والمنع والإرشاد، وانتبه إلى معناها في المكان.',
        focusEn: 'Recognize common guidance-symbol shapes, including warning, prohibition, and information signs, and notice what they mean in context.',
        visualSteps: [
          ['لاحظ شكل الرمز ولونه', 'Notice the symbol’s shape and color'],
          ['اقرأ العلامة أو الصورة', 'Read its sign or picture'],
          ['حدد نوع الإرشاد', 'Identify the type of guidance'],
          ['تصرف بما يحافظ على السلامة', 'Act in a way that supports safety'],
        ],
      },
      {
        titleAr: 'السلامة في تناول الدواء',
        titleEn: 'Safety When Taking Medicine',
        page: 18,
        focusAr: 'لا تتناول دواءً من تلقاء نفسك؛ ارجع إلى ولي أمرك أو المختص واتبع توجيهاته. لا تشارك الدواء مع الآخرين.',
        focusEn: 'Never take medicine on your own; ask a parent or qualified professional and follow their guidance. Do not share medicine.',
        visualSteps: [
          ['اسأل ولي الأمر أو المختص', 'Ask a parent or qualified professional'],
          ['تحقق من اسم الدواء وإرشاداته', 'Check the medicine name and directions'],
          ['اتبع التوجيه دون تغيير', 'Follow the guidance as given'],
          ['أعد الدواء إلى مكان آمن', 'Return the medicine to a safe place'],
        ],
      },
      {
        titleAr: 'القامة الصحيحة',
        titleEn: 'Correct Posture',
        page: 25,
        focusAr: 'انتبه إلى طريقة الوقوف والمشي والجلوس؛ فالقامة المتوازنة تساعد على الحركة براحة، ويُطلب دعم شخص بالغ عند وجود ألم أو صعوبة.',
        focusEn: 'Pay attention to how you stand, walk, and sit. Balanced posture supports comfortable movement; ask an adult for help if you feel pain or difficulty.',
        visualSteps: [
          ['اجعل الرأس متوازنًا', 'Keep the head balanced'],
          ['قف باعتدال', 'Stand upright'],
          ['اجلس بوضع مريح', 'Sit comfortably'],
          ['تحرك دون إجهاد', 'Move without strain'],
        ],
      },
      {
        titleAr: 'حمل الأشياء بطريقة صحيحة',
        titleEn: 'Carrying Objects Correctly',
        page: 35,
        focusAr: 'قدّر وزن الشيء قبل حمله، واجعله قريبًا من الجسم، واطلب مساعدة شخص بالغ إذا كان ثقيلًا أو يصعب حمله.',
        focusEn: 'Consider an object’s weight before lifting, keep it close to your body, and ask an adult for help if it is heavy or difficult to carry.',
        visualSteps: [
          ['قدّر الوزن والحجم', 'Consider the weight and size'],
          ['قف قريبًا من الشيء', 'Stand close to the object'],
          ['احمله بطريقة مريحة', 'Carry it in a comfortable way'],
          ['اطلب المساعدة عند الحاجة', 'Ask for help when needed'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g3-life-skills-q1',
      'ما التصرف الآمن عند الحاجة إلى دواء؟',
      'What is a safe action when medicine may be needed?',
      'أرجع إلى ولي أمري أو المختص وأتبع توجيهاته',
      'Ask a parent or qualified professional and follow their guidance',
      ['أختار دواءً بنفسي', 'أستعمل دواء شخص آخر', 'أغير طريقة الاستخدام من تلقاء نفسي'],
      ['Choose a medicine by myself', 'Use someone else’s medicine', 'Change how it is used on my own'],
      'السلامة في تناول الدواء',
      'Medicine safety',
      'يكون تناول الدواء بإرشاد ولي الأمر أو المختص، لا بالاختيار أو التجربة الذاتية.',
      'Medicine should be taken with a parent’s or professional’s guidance, not chosen or tried independently.',
    ),
  },
  {
    titleAr: 'شخصيتي',
    titleEn: 'My Identity',
    lessons: [
      {
        titleAr: 'كيف أتصرف إذا خرج والداي من المنزل؟',
        titleEn: 'What Should I Do If My Parents Leave Home?',
        page: 46,
        focusAr: 'التزم بخطة الأسرة وتعليمات والديك، وابقَ في المكان الآمن المتفق عليه. لا تفتح الباب لشخص غير معروف، وأخبر شخصًا بالغًا موثوقًا إذا احتجت إلى مساعدة.',
        focusEn: 'Follow your family plan and your parents’ instructions, and stay in the agreed safe place. Do not open the door to an unfamiliar person; tell a trusted adult if you need help.',
        visualSteps: [
          ['تذكر تعليمات والديك', 'Remember your parents’ instructions'],
          ['ابقَ في المكان الآمن', 'Stay in the safe place'],
          ['لا تفتح الباب لغريب', 'Do not open the door to a stranger'],
          ['اطلب مساعدة بالغ موثوق', 'Ask a trusted adult for help'],
        ],
      },
      {
        titleAr: 'كيف أتصرف بملابسي التي لا أحتاجها؟',
        titleEn: 'What Should I Do With Clothes I No Longer Need?',
        page: 55,
        focusAr: 'ناقش مع أسرتك طرق الاستفادة من الملابس النظيفة الصالحة، مثل إعادة استخدامها أو التبرع بها عن طريق جهة موثوقة، وتجنب الهدر.',
        focusEn: 'Discuss with your family how to use clean, wearable clothes, such as reusing or donating them through a trusted organization, and avoid waste.',
        visualSteps: [
          ['تحقق من سلامة الملابس ونظافتها', 'Check that clothes are clean and wearable'],
          ['اسأل أسرتك عن الخيارات', 'Ask your family about options'],
          ['أعد الاستخدام أو تبرع عبر جهة موثوقة', 'Reuse or donate through a trusted organization'],
          ['تجنب الهدر', 'Avoid waste'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g3-life-skills-q2',
      'ماذا أفعل بملابس نظيفة لا أحتاج إليها؟',
      'What can I do with clean clothes I no longer need?',
      'أناقش مع أسرتي إعادة استخدامها أو التبرع بها عبر جهة موثوقة',
      'Discuss reusing or donating them through a trusted organization with my family',
      ['أمزقها وأرميها', 'أحتفظ بها كلها دون حاجة', 'أتخلص منها في الطريق'],
      ['Tear them up and throw them away', 'Keep all of them even when unneeded', 'Leave them in the street'],
      'الاستفادة من الملابس التي لا نحتاج إليها',
      'Making use of clothing we no longer need',
      'تساعد إعادة الاستخدام أو التبرع المنظم على تقليل الهدر مع إشراك الأسرة.',
      'Reuse or organized donation can reduce waste with family guidance.',
    ),
  },
];

const unitNumbersAr = ['الأولى', 'الثانية'] as const;

export const SAUDI_G3_LIFE_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G3_LIFE_SKILLS_UNIT_COUNT = units.length;
export const SAUDI_G3_LIFE_SKILLS_LESSON_COUNT = units.reduce(
  (total, unit) => total + unit.lessons.length,
  0
);
export const SAUDI_G3_LIFE_SKILLS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    unitTitleAr: unit.titleAr,
    titleAr: lesson.titleAr,
    page: lesson.page,
  }))
);

export const SAUDI_G3_LIFE_SKILLS_LECTURES: Lecture[] = units.map((unit, unitIndex) => {
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
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص ${lesson.page}. هذا شرح إرشادي أصلي مبني على عنوان الدرس ومطلع صفحته، وليس نقلًا من متن الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This original guidance is based on the lesson heading and opening page, not copied from the textbook text.`,
      diagram: {
        id: `saudi-g3-life-skills-1448-unit-${order}-lesson-${lessonIndex + 1}`,
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

  const lectureId = `saudi-g3-life-skills-1448-unit-${order}`;
  const lessonReferencesAr = unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`);
  const lessonReferencesEn = unit.lessons.map((lesson) => `${lesson.titleEn} (p. ${lesson.page})`);

  return {
    id: lectureId,
    order,
    titleAr,
    titleEn,
    subtitleAr: 'الجزء الأول من المقرر — الصف الثالث الابتدائي — موضوعات افتتاحيتي الوحدتين PDF ص 8 و44',
    subtitleEn: 'Part One — Grade 3 — unit topic lists on PDF pp. 8 and 44',
    descriptionAr: `${sourceNoteAr}\n\nتضم الوحدة ${unit.lessons.length} دروس مفهرسة. الشروح والأنشطة والرسوم والأسئلة من إعداد المنصة.`,
    descriptionEn: `${sourceNoteEn}\n\nThis unit contains ${unit.lessons.length} indexed lessons. Explanations, activities, visuals, and questions are original platform material.`,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'LIFE_SKILLS',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب المهارات الحياتية والأسرية',
    ministryEn: 'Saudi Ministry of Education — Life and Family Skills textbook',
    gradeLevelNameAr: 'الصف الثالث الابتدائي',
    gradeLevelNameEn: 'Grade 3',
    termAr: 'الجزء الأول — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 cover edition',
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
