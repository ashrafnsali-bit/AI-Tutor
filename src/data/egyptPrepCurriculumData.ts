import type { EducationTrack, EducationType, GradeLevel, Lecture, Subject } from '../types';
import { MIDDLE_MATH_LECTURES } from './middleMathCurriculumData';
import { MIDDLE_MATH_G8_LECTURES } from './middleMath8CurriculumData';
import { MIDDLE_MATH_G9_LECTURES } from './middleMath9CurriculumData';
import { GENERAL_SCIENCE_LECTURES } from './curriculumData';
import { MIDDLE_SCIENCE_G8_LECTURES } from './middleScience8CurriculumData';
import { MIDDLE_SCIENCE_G9_LECTURES } from './middleScience9CurriculumData';
import { ARABIC_LANG_LECTURES } from './curriculumData';
import { MIDDLE_ARABIC_G8_LECTURES } from './middleArabic8CurriculumData';
import { MIDDLE_ARABIC_G9_LECTURES } from './middleArabic9CurriculumData';
import { MIDDLE_COMPUTER_SCIENCE_LECTURES } from './middleCompCurriculumData';
import { MIDDLE_COMPUTER_SCIENCE_G8_LECTURES } from './middleComp8CurriculumData';
import { MIDDLE_COMPUTER_SCIENCE_G9_LECTURES } from './middleComp9CurriculumData';

// ---------------------------------------------------------------------------
// Egyptian Preparatory School (المرحلة الإعدادية المصرية - الصفوف 1 و 2 و 3 إعدادي)
// ---------------------------------------------------------------------------

export const EGYPT_PREP_SUBJECTS: readonly Subject[] = [
  'ARABIC_LANG',
  'MATH',
  'GENERAL_SCIENCE',
  'ENGLISH',
  'GEOGRAPHY',
  'HISTORY',
  'COMPUTER_SCIENCE',
  'ISLAMIC_STUDIES'
];

export function isEgyptPrepSubjectAvailable(
  subject: Subject,
  gradeLevel?: GradeLevel,
  educationType: EducationType = 'PUBLIC'
): boolean {
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE' && educationType !== 'INTERNATIONAL') return false;
  if (!gradeLevel || !['G7', 'G8', 'G9'].includes(gradeLevel)) return false;
  return EGYPT_PREP_SUBJECTS.includes(subject);
}

export function getEgyptPrepSubjects(gradeLevel: GradeLevel = 'G7'): Subject[] {
  if (!['G7', 'G8', 'G9'].includes(gradeLevel)) return [];
  return [...EGYPT_PREP_SUBJECTS];
}

// ---------------------------------------------------------------------------
// Helper Builder for Custom Prep Units (English, Social Studies, Islamic)
// ---------------------------------------------------------------------------
interface PrepLessonDefinition {
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  vocabulary: [string, string][];
}

interface PrepUnitDefinition {
  unitTitleAr: string;
  unitTitleEn: string;
  lessons: PrepLessonDefinition[];
}

function buildPrepLectures(
  units: PrepUnitDefinition[],
  subject: Subject,
  gradeLevel: GradeLevel,
  gradeNameAr: string,
  gradeNameEn: string,
  educationType: EducationType = 'PUBLIC',
  track: EducationTrack = 'GENERAL'
): Lecture[] {
  let runningOrder = 1;
  return units.flatMap((unit) =>
    unit.lessons.map((lesson) => {
      const order = runningOrder++;
      const id = `eg-prep-${gradeLevel.toLowerCase()}-${subject.toLowerCase().replace(/_/g, '-')}-${order}`;
      return {
        id,
        order,
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        subtitleAr: lesson.subtitleAr,
        subtitleEn: lesson.subtitleEn,
        durationMinutes: 35,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel,
        educationType,
        educationTrack: track,
        gradeLevelNameAr: `${gradeNameAr} - المنهج المصري المعتمد`,
        gradeLevelNameEn: `${gradeNameEn} - Egyptian National Curriculum`,
        termAr: 'العام الدراسي الكامل',
        termEn: 'Full Academic Year',
        unitTitleAr: unit.unitTitleAr,
        unitTitleEn: unit.unitTitleEn,
        lessonNumberAr: `الدرس ${order}`,
        lessonNumberEn: `Lesson ${order}`,
        warmupHookAr: `كيف يربط درس «${lesson.titleAr}» بين مفاهيم كتاب الوزارة والتطبيقات الحياتية المعاصرة؟`,
        warmupHookEn: `How does “${lesson.titleEn}” connect official Ministry textbook standards to everyday real-world contexts?`,
        learningOutcomesAr: [
          lesson.focusAr,
          `حل أسئلة وتدريبات كتاب المدرسة المعتمد على «${lesson.titleAr}».`
        ],
        learningOutcomesEn: [
          lesson.focusEn,
          `Complete exercises and evaluations for “${lesson.titleEn}.”`
        ],
        vocabulary: lesson.vocabulary.map(([termEn, termAr]) => ({
          termAr,
          termEn,
          definitionAr: `مفهوم أساسي مقرر في درس «${lesson.titleAr}».`,
          definitionEn: `Core concept in “${lesson.titleEn}.”`
        })),
        keyConceptsAr: [unit.unitTitleAr, lesson.titleAr],
        keyConceptsEn: [unit.unitTitleEn, lesson.titleEn],
        summaryAr: lesson.focusAr,
        summaryEn: lesson.focusEn,
        mainContentAr: `${lesson.focusAr}\n\nنشاط تطبيقي: ${lesson.activityAr}\n\nهذا المحتوى التعليمي تم بناؤه ومطابقته بدقة وفقاً لكتب وزارة التربية والتعليم والتعليم الفني المصرية للمرحلة الإعدادية.`,
        mainContentEn: `${lesson.focusEn}\n\nApplication Activity: ${lesson.activityEn}\n\nThis lesson is aligned strictly with official Egyptian Ministry of Education preparatory textbooks.`,
        sections: [
          {
            titleAr: 'الشرح والمفاهيم الأساسية',
            titleEn: 'Core Concepts & Explanation',
            contentAr: lesson.focusAr,
            contentEn: lesson.focusEn,
            tipsAr: ['احرص على قراءة نصوص الكتاب المدرسي وحل أنشطة الفهم والتطبيق.', 'ناقش الأفكار مع المعلم وزملائك.'],
            tipsEn: ['Study textbook exercises and practice analytical tasks.', 'Participate actively in class discussions.']
          },
          {
            titleAr: 'النشاط العملي والتطبيقي',
            titleEn: 'Practical Application Activity',
            contentAr: lesson.activityAr,
            contentEn: lesson.activityEn
          }
        ],
        formativeAssessment: [
          {
            id: `${id}-check`,
            questionAr: lesson.questionAr,
            questionEn: lesson.questionEn,
            optionsAr: [...lesson.optionsAr],
            optionsEn: [...lesson.optionsEn],
            correctIndex: lesson.correctIndex,
            explanationAr: 'تستند الإجابة إلى المفاهيم والشروح الواردة في كتاب الوزارة الرسمي.',
            explanationEn: 'The answer is directly based on the official Ministry curriculum.'
          }
        ],
        assessment: {
          id: `${id}-assessment`,
          lectureId: id,
          titleAr: `تقويم: ${lesson.titleAr}`,
          titleEn: `Assessment: ${lesson.titleEn}`,
          passingScore: 80,
          questions: [
            {
              id: `${id}-q1`,
              textAr: lesson.questionAr,
              textEn: lesson.questionEn,
              optionsAr: [...lesson.optionsAr],
              optionsEn: [...lesson.optionsEn],
              correctIndex: lesson.correctIndex,
              conceptTestedAr: lesson.titleAr,
              conceptTestedEn: lesson.titleEn,
              explanationAr: 'الإجابة المعتمدة وفق معايير التقييم الوزارية المصرية.',
              explanationEn: 'Verified answer according to official curriculum guidelines.',
              difficulty: 'medium'
            }
          ]
        }
      };
    })
  );
}

// ---------------------------------------------------------------------------
// 1. English (New Hello! Prep 1, Prep 2, Prep 3)
// ---------------------------------------------------------------------------
const englishPrep1Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: My Family and Me & Unit 2: It’s My Favorite Subject',
    unitTitleEn: 'Unit 1: My Family and Me & Unit 2: It’s My Favorite Subject',
    lessons: [
      {
        titleAr: 'My Family, Daily Routines & Possessive Pronouns',
        titleEn: 'My Family, Daily Routines & Possessive Pronouns',
        subtitleAr: 'المفردات الخاصة بالأسرة، الهوايات، والضمائر (ضمائر الفاعل، المفعول، وصفات وضمائر الملكية)',
        subtitleEn: 'Family members, hobbies, musical instruments, and subject/object/possessive pronouns',
        focusAr: 'التعرف على أفراد الأسرة والتعبير عن الروتين اليومي واستخدام ضمائر الفاعل والمفعول وصفات الملكية.',
        focusEn: 'Talk about family members, twin brothers/sisters, daily hobbies, and master pronoun distinctions.',
        activityAr: 'اكتب فقرة قصيرة من 5 جمل تصف فيها أفراد أسرتك وهواياتهم المفضلة مستخدماً صفات الملكية.',
        activityEn: 'Write a 5-sentence paragraph describing your family members and their hobbies using possessives.',
        questionAr: 'Choose the correct word: "This is my brother. _______ name is Ali."',
        questionEn: 'Choose the correct word: "This is my brother. _______ name is Ali."',
        optionsAr: ['His', 'Her', 'Him'],
        optionsEn: ['His', 'Her', 'Him'],
        correctIndex: 0,
        vocabulary: [['family tree', 'شجرة العائلة'], ['twins', 'توأم'], ['voluntary work', 'عمل تطوعي']]
      },
      {
        titleAr: 'School Subjects, Daily Timetables & Adverbs of Frequency',
        titleEn: 'School Subjects, Daily Timetables & Adverbs of Frequency',
        subtitleAr: 'المواد الدراسية (Maths, Science, Arabic, English, Computer Studies) وظروف التكرار (Always, Usually, Often, Never)',
        subtitleEn: 'School subjects, telling the time, daily school routines, and adverbs of frequency',
        focusAr: 'التحدث عن المواد الدراسية المفضلة والجدول المدرسي، وموقع ظروف التكرار قبل الفعل الأساسي وبعد Verb to be.',
        focusEn: 'Discuss school subjects, bell schedules, and apply adverbs of frequency before main verbs and after "be".',
        activityAr: 'صف يومك الدراسي المفضل والمواد التي تدرسها فيه مستخدماً ظرفين من ظروف التكرار.',
        activityEn: 'Describe your favorite school day and subjects studied using at least two frequency adverbs.',
        questionAr: 'Where does the adverb of frequency go: "She _______ late for school."',
        questionEn: 'Where does the adverb of frequency go: "She _______ late for school."',
        optionsAr: ['is never', 'never is', 'is always never'],
        optionsEn: ['is never', 'never is', 'is always never'],
        correctIndex: 0,
        vocabulary: [['timetable', 'جدول الحصص'], ['bell', 'جرس المدرسة'], ['drama', 'مادة التربية المسرحية']]
      },
      {
        titleAr: 'Different People: Appearance, Character & Can/Has Got',
        titleEn: 'Different People: Appearance, Character & Can/Has Got',
        subtitleAr: 'وصف المظهر والشخصية (Dark hair, Glasses, Friendly) وقواعد has got و can للقدرة',
        subtitleEn: 'Physical appearance, personality traits, have/has got, and modal verb can for abilities',
        focusAr: 'وصف مظهر الأشخاص وشخصياتهم واستخدام has got / have got والتعبير عن المهارات باستخدام can و can\'t.',
        focusEn: 'Describe appearance and personality traits; master has got / have got and express abilities with can / can\'t.',
        activityAr: 'اكتب فقرة تصف فيها صديقك المفضل: شكله، صفاته، والأشياء التي يستطيع والتي لا يستطيع فعلها.',
        activityEn: 'Write a paragraph describing your best friend: their appearance, traits, and abilities.',
        questionAr: 'Choose the correct form: "Mohamed Salah _______ curly dark hair."',
        questionEn: 'Choose the correct form: "Mohamed Salah _______ curly dark hair."',
        optionsAr: ['has got', 'have got', 'is got'],
        optionsEn: ['has got', 'have got', 'is got'],
        correctIndex: 0,
        vocabulary: [['curly hair', 'شعر مجعد'], ['straight hair', 'شعر ناعم'], ['friendly', 'ودود']]
      },
      {
        titleAr: 'Using Technology: Gadgets, Present Continuous & Online Safety',
        titleEn: 'Using Technology: Gadgets, Present Continuous & Online Safety',
        subtitleAr: 'الأجهزة الحديثة (Laptop, Tablet, Charger, Selfie) والمضارع المستمر وقواعد الأمان الإلكتروني',
        subtitleEn: 'Digital devices, chargers, selfie stick, present continuous tense, and imperative safety rules',
        focusAr: 'الحديث عن التكنولوجيا الحديثة واستخدام المضارع المستمر للأحداث الجارية (am/is/are + verb-ing) وقواعد السلامة على الإنترنت.',
        focusEn: 'Discuss technology devices, form present continuous sentences for ongoing actions, and follow online safety rules.',
        activityAr: 'صف ما يفعله أفراد أسرتك في هذه اللحظة باستخدام المضارع المستمر والأجهزة الذكية.',
        activityEn: 'Describe what your family members are doing right now using the Present Continuous tense.',
        questionAr: 'Choose the correct form: "Look! Omar _______ a selfie with his new phone."',
        questionEn: 'Choose the correct form: "Look! Omar _______ a selfie with his new phone."',
        optionsAr: ['is taking', 'takes', 'take'],
        optionsEn: ['is taking', 'takes', 'take'],
        correctIndex: 0,
        vocabulary: [['charger', 'شاحن'], ['tablet', 'حاسوب لوحي'], ['password', 'كلمة سر']]
      }
    ]
  }
];

const englishPrep2Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: Coming Home & Unit 2: How Are You Feeling?',
    unitTitleEn: 'Unit 1: Coming Home & Unit 2: How Are You Feeling?',
    lessons: [
      {
        titleAr: 'Daily Routines, Texting Friends & Present Simple vs Continuous',
        titleEn: 'Daily Routines, Texting Friends & Present Simple vs Continuous',
        subtitleAr: 'الروتين اليومي، الأنشطة المعتادة، والتمييز بين المضارع البسيط (العادات) والمضارع المستمر (الأحداث الآنية)',
        subtitleEn: 'Daily habits, weekend activities, and contrasting Present Simple with Present Continuous',
        focusAr: 'المقارنة بين استخدام المضارع البسيط للحقائق والعادات، والمضارع المستمر للأفعال التي تحدث لحظة الكلام.',
        focusEn: 'Contrast permanent habits (Present Simple) with temporary ongoing actions (Present Continuous).',
        activityAr: 'كون جملتين تصف في إحداهما ما تفعله كل يوم سبت، وفي الأخرى ما تفعله في هذه اللحظة.',
        activityEn: 'Formulate two sentences contrasting your weekend habit with what you are doing right now.',
        questionAr: 'Choose the correct form: "Listen! The baby _______ in the room."',
        questionEn: 'Choose the correct form: "Listen! The baby _______ in the room."',
        optionsAr: ['is crying', 'cries', 'cry'],
        optionsEn: ['is crying', 'cries', 'cry'],
        correctIndex: 0,
        vocabulary: [['routine', 'روتين يومي'], ['text messaging', 'مراسلة نصية'], ['calligrapher', 'خطاط']]
      },
      {
        titleAr: 'The Great Outdoors: Nature, Wildlife & Past Simple Tense',
        titleEn: 'The Great Outdoors: Nature, Wildlife & Past Simple Tense',
        subtitleAr: 'الطبيعة والحيوانات البرية (Jungle, Desert, River) وصياغة الماضي البسيط للأفعال المنتظمة وغير المنتظمة',
        subtitleEn: 'Nature landscapes, wildlife, regular and irregular verbs in the past simple tense',
        focusAr: 'وصف البيئات الطبيعية والتحدث عن مغامرات ورحلات سابقة باستخدام زمن الماضي البسيط (Past Simple).',
        focusEn: 'Describe natural landscapes and narrate past weekend trips using past simple forms.',
        activityAr: 'اكتب فقرة من 4 جمل عن رحلة خلوية قمت بها في الإجازة الماضية مستخدماً الماضي البسيط.',
        activityEn: 'Write a 4-sentence journal entry about a trip to a natural park using past tense verbs.',
        questionAr: 'Choose the correct verb: "Yesterday, we _______ to Wadi El-Rayan by bus."',
        questionEn: 'Choose the correct verb: "Yesterday, we _______ to Wadi El-Rayan by bus."',
        optionsAr: ['went', 'go', 'going'],
        optionsEn: ['went', 'go', 'going'],
        correctIndex: 0,
        vocabulary: [['waterfall', 'شلال'], ['wildlife', 'حياة برية'], ['sand dunes', 'كثبان رملية']]
      },
      {
        titleAr: 'Great Jobs: Community Heroes & Used to / Past Simple',
        titleEn: 'Great Jobs: Community Heroes & Used to / Past Simple',
        subtitleAr: 'الوظائف البطولية (Surgeon, Volunteer, Scientist) واستخدام used to للعادات الماضية التي انقطعت',
        subtitleEn: 'Healthcare workers, volunteers, past heroes, and used to for past discontinued habits',
        focusAr: 'الحديث عن الشخصيات الملهمة في التاريخ والمهن الطبية، وصياغة used to + مصدر للتعبير عن عادات سابقة.',
        focusEn: 'Discuss inspiring historical and modern heroes, and apply "used to + infinitive" for past states.',
        activityAr: 'قارن بين عادات الناس قديماً والآن باستخدام used to و didn\'t use to.',
        activityEn: 'Contrast life in the past and present using "used to" and "didn\'t use to".',
        questionAr: 'Choose the correct structure: "Grandfather _______ travel by camel when he was young."',
        questionEn: 'Choose the correct structure: "Grandfather _______ travel by camel when he was young."',
        optionsAr: ['used to', 'use to', 'uses to'],
        optionsEn: ['used to', 'use to', 'uses to'],
        correctIndex: 0,
        vocabulary: [['surgeon', 'جراح'], ['charity', 'جمعية خيرية'], ['emergency', 'طوارئ']]
      },
      {
        titleAr: 'Into the Future: Technology, Inventions & Future with Will / First Conditional',
        titleEn: 'Into the Future: Technology, Inventions & Future with Will / First Conditional',
        subtitleAr: 'الاختراعات المستقبلية، الروبوتات، والتنبؤ باستخدام will والحالة الشرطية الأولى (If + present, will)',
        subtitleEn: 'Future technologies, drones, AI, predictions with will, and the first conditional (If/When)',
        focusAr: 'التنبؤ بالمستقبل وصياغة الجمل الشرطية الاحتمالية: If we use green energy, our planet will be cleaner.',
        focusEn: 'Make predictions with will/won\'t and construct conditional cause-and-effect clauses with If/When.',
        activityAr: 'اكتب 3 تنبؤات عن شكل التعليم والمدارس في عام 2050 مستخدماً will و won\'t.',
        activityEn: 'Write 3 predictions about schools in 2050 using will and won\'t.',
        questionAr: 'Choose the correct verb: "If it rains tomorrow, we _______ stay at home."',
        questionEn: 'Choose the correct verb: "If it rains tomorrow, we _______ stay at home."',
        optionsAr: ['will', 'would', 'did'],
        optionsEn: ['will', 'would', 'did'],
        correctIndex: 0,
        vocabulary: [['solar panels', 'ألواح شمسية'], ['drone', 'طائرة مسيرة'], ['virtual reality', 'واقع افتراضي']]
      }
    ]
  }
];

const englishPrep3Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: Around Town & Unit 2: Let’s Go Shopping',
    unitTitleEn: 'Unit 1: Around Town & Unit 2: Let’s Go Shopping',
    lessons: [
      {
        titleAr: 'Directions, Public Transport, Prepositions of Place & Time',
        titleEn: 'Directions, Public Transport, Prepositions of Place & Time',
        subtitleAr: 'إعطاء الاتجاهات، وسائل النقل (Ferry, Metro, Train)، وحروف الجر الخاصة بالزمان والمكان (in, on, at)',
        subtitleEn: 'Giving directions, public transit maps, and prepositions of time and place',
        focusAr: 'استخدام خريطة المدينة لوصف الاتجاهات ومواعيد وسائل النقل العامة بالمضارع البسيط وحروف الجر in/on/at.',
        focusEn: 'Navigate city landmarks, read public transport schedules using present simple timetables, and use prepositions.',
        activityAr: 'صف لزميلك كيف يصل من محطة المترو إلى المتحف مستخدماً تعبيرات الاتجاهات.',
        activityEn: 'Write step-by-step directions from a metro station to a nearby museum using transition words.',
        questionAr: 'Choose the correct preposition: "The train leaves _______ 7:30 AM."',
        questionEn: 'Choose the correct preposition: "The train leaves _______ 7:30 AM."',
        optionsAr: ['at', 'on', 'in'],
        optionsEn: ['at', 'on', 'in'],
        correctIndex: 0,
        vocabulary: [['ferry', 'معدية / عبّارة'], ['botanical gardens', 'حدائق نباتية'], ['platform', 'رصيف قطار']]
      },
      {
        titleAr: 'Let\'s Go Shopping: Electronic Goods & Comparatives/Superlatives',
        titleEn: 'Let\'s Go Shopping: Electronic Goods & Comparatives/Superlatives',
        subtitleAr: 'التسوق الإلكتروني، الأجهزة المنزلية الذكية (Microwave, Kettle)، وصيغ المقارنة والتفضيل ومحددات both / neither / either',
        subtitleEn: 'Online shopping, appliances, comparatives, superlatives, and quantifiers: both, neither, either',
        focusAr: 'المقارنة بين المنتجات والأسعار باستخدام صفات المقارنة والتفضيل، واستخدام both of / neither of بدقة.',
        focusEn: 'Compare products and consumer deals using regular/irregular comparatives, superlatives, and both/neither/either.',
        activityAr: 'قارن بين نوعين من الهواتف الذكية من حيث السعر والسرعة وحجم الشاشة مستخدماً صيغ المقارنة.',
        activityEn: 'Write a consumer product comparison between two devices using comparative and superlative structures.',
        questionAr: 'Choose the correct option: "This laptop is _______ expensive than the tablet."',
        questionEn: 'Choose the correct option: "This laptop is _______ expensive than the tablet."',
        optionsAr: ['more', 'most', 'as'],
        optionsEn: ['more', 'most', 'as'],
        correctIndex: 0,
        vocabulary: [['kettle', 'غلاية كهربائية'], ['discount', 'خصم'], ['delivery', 'توصيل']]
      },
      {
        titleAr: 'My Community: Social Services, Facilities & Present Perfect with Ever/Never',
        titleEn: 'My Community: Social Services, Facilities & Present Perfect with Ever/Never',
        subtitleAr: 'المرافق العامة، المبادرات المجتمعية (حياة كريمة)، وزمن المضارع التام (Have/Has + p.p) مع ever و never',
        subtitleEn: 'Community facilities, Decent Life initiative, and Present Perfect tense with ever/never',
        focusAr: 'التحدث عن الخدمات والمشروعات التنموية في الحي والقرية، وصياغة المضارع التام للتعبير عن التجارب الشخصية.',
        focusEn: 'Discuss local community development and structure present perfect statements and questions with ever/never.',
        activityAr: 'اسأل زميلك 3 أسئلة باستخدام Have you ever...? عن تجاربه في التطوع وخدمة المجتمع.',
        activityEn: 'Interview a peer with 3 "Have you ever...?" questions on community voluntary experiences.',
        questionAr: 'Choose the correct form: "Have you ever _______ a tree in your neighborhood park?"',
        questionEn: 'Choose the correct form: "Have you ever _______ a tree in your neighborhood park?"',
        optionsAr: ['planted', 'plant', 'planting'],
        optionsEn: ['planted', 'plant', 'planting'],
        correctIndex: 0,
        vocabulary: [['neighborhood', 'حي سكني'], ['facilities', 'مرافق وخدمات'], ['decent life', 'حياة كريمة']]
      },
      {
        titleAr: 'Inspiring People: Biographies & Present Perfect with Since and For',
        titleEn: 'Inspiring People: Biographies & Present Perfect with Since and For',
        subtitleAr: 'قصص نجاح الشخصيات البارزة، والتمييز بين since (نقطة البداية) و for (طول المدة الزمنية) في المضارع التام',
        subtitleEn: 'Inspiring biographies, achievements, and distinguishing since vs for in present perfect',
        focusAr: 'كتابة سيرة ذاتية لشخصية ناجحة، واستخدام since مع التواريخ المحددة و for مع الفترات الزمنية الممتدة.',
        focusEn: 'Narrate achievements and life trajectories applying "since" (specific point) and "for" (duration).',
        activityAr: 'اكتب 3 جمل عن هواياتك والمدة التي مارستها فيها مستخدماً since و for.',
        activityEn: 'Write 3 sentences about your skills and hobbies using since and for.',
        questionAr: 'Choose the correct word: "Dr. Magdi Yacoub has helped heart patients _______ many years."',
        questionEn: 'Choose the correct word: "Dr. Magdi Yacoub has helped heart patients _______ many years."',
        optionsAr: ['for', 'since', 'ago'],
        optionsEn: ['for', 'since', 'ago'],
        correctIndex: 0,
        vocabulary: [['role model', 'قدوة حسنة'], ['achievement', 'إنجاز'], ['inspiration', 'إلهام']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 2. Social Studies: Geography (Prep 1, 2, 3)
// ---------------------------------------------------------------------------
const geographyPrep1Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: رحلة عبر الفضاء & الوحدة الثانية: كوكب الأرض',
    unitTitleEn: 'Unit 1: Journey through Space & Unit 2: Planet Earth',
    lessons: [
      {
        titleAr: 'ظواهر كونية والمجموعة الشمسية',
        titleEn: 'Cosmic Phenomena & The Solar System',
        subtitleAr: 'النجوم والكواكب والأقمار والمجرات، الشهب والنيازك والسدم، وكواكب المجموعة الشمسية الداخلية والخارجية',
        subtitleEn: 'Stars, planets, moons, galaxies, meteors, meteorites, and inner/outer planets of the Solar System',
        focusAr: 'التمييز بين الأجرام السماوية وفهم خصائص كواكب المجموعة الشمسية ولماذا كوكب الأرض هو كوكب الحياة.',
        focusEn: 'Analyze celestial bodies and evaluate the physical characteristics that make Earth suitable for life.',
        activityAr: 'قارن في جدول بين كواكب المجموعة الشمسية الداخلية (عطارد، الزهرة، الأرض، المريخ) والخارجية من حيث الحجم والتكوين.',
        activityEn: 'Create a comparative table contrasting terrestrial inner planets with gas outer giants.',
        questionAr: 'ما هو الكوكب المائي الذي يشغل الماء 70.7% من مساحته في المجموعة الشمسية؟',
        questionEn: 'Which planet in the solar system is known as the Water Planet where water covers 70.7% of its area?',
        optionsAr: ['كوكب الأرض', 'كوكب المريخ', 'كوكب الزهرة'],
        optionsEn: ['Earth', 'Mars', 'Venus'],
        correctIndex: 0,
        vocabulary: [['المجرة', 'galaxy'], ['الشهب والنيازك', 'meteors and meteorites'], ['السديم', 'nebula']]
      },
      {
        titleAr: 'شكل الأرض وأبعادها وحركاتها وفصول السنة',
        titleEn: 'Earth’s Shape, Dimensions, Axial/Orbital Motions & The Four Seasons',
        subtitleAr: 'الشكل البيضاوي للأرض، خطوط الطول ودوائر العرض، الدورة اليومية وتعاقب الليل والنهار، والدورة السنوية وفصول السنة الأربعة',
        subtitleEn: 'Oblate spheroid Earth, parallels/meridians, diurnal rotation, annual revolution, and seasonal solstices/equinoxes',
        focusAr: 'فهم أسباب تعاقب الليل والنهار بسبب دوران الأرض حول محورها، وأسباب حدوث فصول السنة الأربعة بسبب ميل محور الأرض ودورانها حول الشمس.',
        focusEn: 'Explain day/night cycle via axial rotation and seasonal variations due to axial tilt and solar revolution.',
        activityAr: 'وضح ماذا يحدث إذا كان محور الأرض عمودياً وغير مائل بزاوية 23.5 درجة أثناء دورانها حول الشمس.',
        activityEn: 'Hypothesize climatic consequences if Earth’s axis were perpendicular instead of tilted at 23.5 degrees.',
        questionAr: 'ما الظاهرة الناتجة عن دوران الأرض حول محورها أمام الشمس من الغرب إلى الشرق كل 24 ساعة؟',
        questionEn: 'Which phenomenon results from Earth’s rotation around its axis from west to east every 24 hours?',
        optionsAr: ['تعاقب الليل والنهار', 'حدوث الفصول الأربعة', 'الخسوف والكسوف'],
        optionsEn: ['Succession of day and night', 'Four seasons cycle', 'Eclipses'],
        correctIndex: 0,
        vocabulary: [['محور الأرض', 'Earth’s axis'], ['خط الاستواء', 'Equator'], ['الانقلاب الصيفي', 'summer solstice']]
      },
      {
        titleAr: 'اليابس والماء: نشأة القارات والمحيطات ونظرية زحزحة القارات',
        titleEn: 'Land and Water: Continental Drift & Ocean Basins',
        subtitleAr: 'نظرية فجنر (بانجيا)، مراحل نشأة القارات، توزيع اليابس والماء في نصفي الكرة الأرضية',
        subtitleEn: 'Wegener’s continental drift, Pangea supercontinent, and global hydrosphere distribution',
        focusAr: 'فهم مراحل تكوين القارات وتوزيع المحيطات الكبرى (الهادي، الأطلنطي، الهندي، المتجمد)، ودور الماء كعصب الحياة.',
        focusEn: 'Analyze the stages of continental drift theory, oceanic distribution, and fresh vs saltwater resources.',
        activityAr: 'ارسم رسماً تخطيطياً يوضح مراحل نظرية زحزحة القارات من كتلة بانجيا حتى الوضع الحالي.',
        activityEn: 'Diagram the three stages of Wegener’s continental drift theory from Pangea to modern continents.',
        questionAr: 'من هو العالم الألماني صاحب نظرية زحزحة القارات ونشأة اليابس والماء؟',
        questionEn: 'Which German scientist formulated the continental drift theory?',
        optionsAr: ['ألفريد فجنر', 'إسحاق نيوتن', 'فيثاغورس'],
        optionsEn: ['Alfred Wegener', 'Isaac Newton', 'Pythagoras'],
        correctIndex: 0,
        vocabulary: [['بانجيا', 'Pangea'], ['زحزحة القارات', 'continental drift'], ['المحيط الهادي', 'Pacific Ocean']]
      },
      {
        titleAr: 'مظاهر سطح الأرض وعوامل تشكيلها الباطنية والظاهرية',
        titleEn: 'Landforms & Internal / External Geomorphic Agents',
        subtitleAr: 'الجبال والهضاب والسهول والأودية، والبراكين والزلازل والتعرية المائية والهوائية والجليدية',
        subtitleEn: 'Mountains, plateaus, plains, valleys, tectonic faults, volcanic action, and wind/water erosion',
        focusAr: 'التمييز بين العوامل الباطنية السريعة (زلازل وبراكين) والبطيئة (انكسارات والتواءات)، والعوامل الظاهرية (التعرية النهرية والريحية).',
        focusEn: 'Differentiate between endogenic catastrophic/gradual forces and exogenic erosion shaping landforms.',
        activityAr: 'صنف التضاريس التالية وفق عوامل تشكيلها: الكثبان الرملية، دلتا النيل، وهضبة إثيوبيا البركانية.',
        activityEn: 'Classify given landforms according to internal vs external geomorphic agents.',
        questionAr: 'ما العامل الظاهري المسؤول عن تكوين الكثبان الرملية والمنخفضات في الصحراء؟',
        questionEn: 'Which external agent is primarily responsible for forming desert sand dunes?',
        optionsAr: ['التعرية الهوائية بفعل الرياح', 'التعرية الجليدية', 'الزلازل والبراكين'],
        optionsEn: ['Wind erosion', 'Glacial erosion', 'Earthquakes and volcanoes'],
        correctIndex: 0,
        vocabulary: [['عوامل باطنية', 'internal forces'], ['تعرية مائية', 'water erosion'], ['كثبان رملية', 'sand dunes']]
      }
    ]
  }
];

const geographyPrep2Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: وطننا العربي: مكان واحد وطبيعة متنوعة',
    unitTitleEn: 'Unit 1: Our Arab Homeland: Location, Landforms & Climate',
    lessons: [
      {
        titleAr: 'الموقع الجغرافي والفلكي والأهمية الاستراتيجية للوطن العربي',
        titleEn: 'Geographic, Astronomical Location & Strategic Importance of Arab World',
        subtitleAr: 'حدود الوطن العربي، المضايق والممرات المائية (مضيق هرمز، باب المندب، جبل طارق، وقناة السويس)، والأهمية الحضارية والدينية',
        subtitleEn: 'Arab world territorial borders, marine straits (Hormuz, Bab-el-Mandeb, Gibraltar, Suez Canal), and strategic importance',
        focusAr: 'تحديد موقع الوطن العربي في قلب العالم القديم وأهمية المضايق البحرية الأربعة المشرفة على طرق التجارة العالمية.',
        focusEn: 'Locate the Arab world across Asia and Africa and analyze its control over vital international maritime straits.',
        activityAr: 'حدد على خريطة صماء للوطن العربي المضايق البحرية الأربعة والدول العربية التي تشرف عليها.',
        activityEn: 'Locate the four strategic maritime straits on an outline map of the Arab world.',
        questionAr: 'ما المضيق البحري العربي الخالص الذي تشرف عليه دولتان عربيتان هما جيبوتي واليمن؟',
        questionEn: 'Which purely Arab maritime strait is controlled by the two Arab countries Djibouti and Yemen?',
        optionsAr: ['مضيق باب المندب', 'مضيق هرمز', 'مضيق جبل طارق'],
        optionsEn: ['Bab-el-Mandeb Strait', 'Strait of Hormuz', 'Strait of Gibraltar'],
        correctIndex: 0,
        vocabulary: [['الموقع الاستراتيجي', 'strategic location'], ['مضيق باب المندب', 'Bab-el-Mandeb Strait'], ['قناة السويس', 'Suez Canal']]
      },
      {
        titleAr: 'تضاريس وطننا العربي: الجبال والهضاب والسهول وأثرها في الوحدة',
        titleEn: 'Landforms of the Arab World: Mountains, Plateaus & Plains',
        subtitleAr: 'الجبال الالتوائية (أطلس وعمان وزاغروس) والانكسارية (البحر الأحمر وبلاد الشام)، الهضاب، والسهول الفيضية والساحلية',
        subtitleEn: 'Fold mountains (Atlas, Oman), fault mountains (Red Sea, Levant), African/Asian plateaus, and river plains',
        focusAr: 'التمييز بين الجبال الالتوائية والانكسارية، والتعرف على الواحات والأودية الجافة كطرق مواصلات ومصادر مياه.',
        focusEn: 'Distinguish fold vs fault mountain belts and evaluate economic significance of desert oases and dry valleys.',
        activityAr: 'قارن بين جبال البحر الأحمر وجبال أطلس من حيث سبب النشأة والامتداد الجغرافي.',
        activityEn: 'Compare the Red Sea fault mountains with the Atlas fold chain regarding origin and spatial extent.',
        questionAr: 'أي من السلاسل الجبلية التالية في الوطن العربي نشأت نتيجة حركات انكسارية في القشرة الأرضية؟',
        questionEn: 'Which mountain range originated from tectonic crustal faulting?',
        optionsAr: ['جبال البحر الأحمر وجبال الشام', 'جبال أطلس', 'جبال عمان'],
        optionsEn: ['Red Sea and Levant mountains', 'Atlas Mountains', 'Oman Mountains'],
        correctIndex: 0,
        vocabulary: [['جبال انكسارية', 'fault mountains'], ['جبال التوائية', 'fold mountains'], ['أودية جافة', 'dry valleys']]
      },
      {
        titleAr: 'المناخ والنبات الطبيعي في وطننا العربي والأقاليم المناخية',
        titleEn: 'Climate & Natural Vegetation Zones in the Arab World',
        subtitleAr: 'العوامل المؤثرة في المناخ (الموقع الفلكي، القرب من المسطحات، والتضاريس) والأقاليم: البحر المتوسط، الصحراوي، والمداري',
        subtitleEn: 'Climatic determinants, Mediterranean biome, Sahara desert climate, and southern tropical savannah zone',
        focusAr: 'توزيع الأقاليم المناخية الثلاثة في الوطن العربي: إقليم البحر المتوسط المعتدل، الإقليم الصحراوي الحار (80% من المساحة)، والإقليم المداري الحار.',
        focusEn: 'Analyze the 3 Arab climatic zones and correlate seasonal rainfall patterns with native flora (cedar, olive, acacia).',
        activityAr: 'بين خصائص غابات البحر المتوسط والغابات المدارية وحشائش السافانا المتدرجة في الطول.',
        activityEn: 'Analyze climatic adaptations of Mediterranean evergreen forests vs tropical savanna grasses.',
        questionAr: 'ما الإقليم المناخي الذي يشغل النسبة الكبرى (نحو 80%) من مساحة الوطن العربي؟',
        questionEn: 'Which climatic biome covers approximately 80% of the Arab world?',
        optionsAr: ['الإقليم الصحراوي', 'إقليم البحر المتوسط', 'الإقليم المداري'],
        optionsEn: ['Desert climate', 'Mediterranean climate', 'Tropical climate'],
        correctIndex: 0,
        vocabulary: [['إقليم مناخي', 'climatic zone'], ['حشائش السافانا', 'savanna grasslands'], ['شجر الأرز', 'cedar tree']]
      },
      {
        titleAr: 'سكان وطننا العربي: التوزيع والخصائص الديموغرافية والوحدة والتكامل',
        titleEn: 'Demographics of the Arab World: Distribution, Density & Integration',
        subtitleAr: 'مناطق الكثافة السكانية المرتفعة والمتوسطة والمنخفضة، أنماط السكان (البدو والريفيون والحضر)، وخصائص الهرم السكاني',
        subtitleEn: 'Population density patterns, rural-urban migration, nomadism, age pyramid structure, and cultural cohesion',
        focusAr: 'فهم العوامل الطبيعية والبشرية المؤثرة في توزيع السكان، وأهمية التكامل الاقتصادي العربي والاستثمار في التعليم والصحة.',
        focusEn: 'Evaluate spatial population determinants and argue for Arab economic integration and human capital development.',
        activityAr: 'اقترح حلولاً للحد من الهجرة من الريف إلى المدن وظاهرة الأحياء العشوائية في العواصم العربية.',
        activityEn: 'Formulate policy proposals to curb rural-to-urban migration and informal settlement sprawl.',
        questionAr: 'ما العامل الطبيعي الأكثر تأثيراً في تركز السكان بكثافة مرتفعة جداً في الوطن العربي؟',
        questionEn: 'Which physical factor most strongly drives high population concentration in the Arab world?',
        optionsAr: ['توافر المياه العذبة والتربة الخصبة', 'وعورة التضاريس الجبلية', 'المناخ الصحراوي الجاف'],
        optionsEn: ['Freshwater and fertile soils', 'Rugged mountain relief', 'Arid desert climate'],
        correctIndex: 0,
        vocabulary: [['كثافة سكانية', 'population density'], ['عشوائيات', 'informal settlements'], ['تكامل عربي', 'Arab integration']]
      }
    ]
  }
];

const geographyPrep3Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: جغرافية العالم الطبيعية: القارات والتضاريس والمناخ',
    unitTitleEn: 'Unit 1: Physical Geography of the World: Continents, Landforms & Climate',
    lessons: [
      {
        titleAr: 'قارات العالم (الموقع والمساحة) وتضاريس قارات العالم',
        titleEn: 'World Continents (Location & Area) and Global Topography',
        subtitleAr: 'قارات العالم القديم والحديث، الجبال والهضاب والسهول (الفيضية والساحلية والصحراوية) في قارات آسيا وإفريقيا وأوروبا والأمريكتين',
        subtitleEn: 'Old and New World continents, mountain chains, plateaus, and river basins across global continents',
        focusAr: 'توزيع القارات والمحيطات السبعة على خريطة العالم وتحديد السلاسل الجبلية الكبرى (مثل الهيمالايا، الألب، الأطلس، الروكي، والأنديز) وأحواض الأنهار.',
        focusEn: 'Map global continents and identify major landforms including the Himalayas, Alps, Andes, Nile, and Amazon basins.',
        activityAr: 'عين على خريطة العالم أعلى قمة جبلية في العالم وهضبة التبت الملقبة بسقف العالم.',
        activityEn: 'Locate Mount Everest and the Tibetan Plateau (Roof of the World) on a world physical map.',
        questionAr: 'ما هي أعلى قمة جبلية في العالم وتقع في سلسلة جبال الهيمالايا في قارة آسيا؟',
        questionEn: 'What is the highest mountain peak in the world, located in the Himalayas in Asia?',
        optionsAr: ['قمة إفرست (8848 متراً)', 'قمة كلمنجارو', 'قمة مون بلان'],
        optionsEn: ['Mount Everest (8,848m)', 'Mount Kilimanjaro', 'Mont Blanc'],
        correctIndex: 0,
        vocabulary: [['سقف العالم', 'Roof of the World'], ['السهول الفيضية', 'alluvial floodplains'], ['قمة إفرست', 'Mount Everest']]
      },
      {
        titleAr: 'المناخ والنبات الطبيعي في العالم: الأقاليم الحارة والمعتدلة والباردة',
        titleEn: 'World Climates & Biomes: Tropical, Temperate & Polar Regions',
        subtitleAr: 'الأقاليم الحارة (الاستوائي، المداري، الموسمي)، المعتدلة الدفيئة والباردة (الصيني، اللورنسي، البحر المتوسط)، والقطبية (التندرا)',
        subtitleEn: 'Tropical wet/dry, monsoonal, Mediterranean, Laurentian, and polar tundra biomes across all continents',
        focusAr: 'تصنيف الأقاليم المناخية العالمية وربط دوائر العرض بنوعية الغابات (الاستوائية، المخروطية الصنوبرية، النفضية) وحشائش السافانا والاستبس.',
        focusEn: 'Synthesize global climate patterns and delineate rainforest, deciduous, coniferous (Taiga), and tundra distributions.',
        activityAr: 'قارن بين الإقليم الصيني (شرق القارات) وإقليم البحر المتوسط (غرب القارات) من حيث درجات الحرارة وسقوط الأمطار.',
        activityEn: 'Compare the Humid Subtropical (China) climate with Mediterranean climate regarding seasonal precipitation.',
        questionAr: 'ما الإقليم المناخي الذي تسقط أمطاره طوال العام وتنمو به أشجار الصنوبر والشربين ذات الأوراق الإبرية؟',
        questionEn: 'Which climate experiences year-round precipitation and hosts needle-leaved coniferous forests?',
        optionsAr: ['الإقليم المعتدل البارد (اللورنسي)', 'إقليم التندرا شديد البرودة', 'الإقليم الصحراوي الحار'],
        optionsEn: ['Laurentian climate', 'Tundra polar climate', 'Hot desert climate'],
        correctIndex: 0,
        vocabulary: [['غابات مخروطية', 'coniferous forests'], ['إقليم التندرا', 'tundra biome'], ['حشائش الاستبس', 'steppe grasslands']]
      },
      {
        titleAr: 'السلالات البشرية في العالم وتوزيعها والتعايش الإنساني',
        titleEn: 'Human Races of the World: Origin, Distribution & Pluralism',
        subtitleAr: 'السلالات الرئيسية الثلاث: الزنجية (10%)، القوقازية (50%)، والمغولية (40%)، ونشأتها وأماكن انتشارها وتمازجها',
        subtitleEn: 'The three major human lineages (Caucasoid, Negroid, Mongoloid), physical adaptations, and modern cultural synthesis',
        focusAr: 'فهم أسباب نشأة السلالات البشرية بسبب استقرار الإنسان في بيئات جغرافية مختلفة، والتأكيد على المساواة الإنسانية ورفض العنصرية التمييزية.',
        focusEn: 'Analyze geographic environmental adaptations shaping human physical traits and emphasize racial equality and anti-discrimination.',
        activityAr: 'اكتب مقالاً قصيراً تؤكد فيه أن جوهر الإنسان يكمن في فكره وعمله وإنسانيته وليس في لونه أو سلالته.',
        activityEn: 'Compose a reflective essay arguing against biological determinism and promoting global human equality.',
        questionAr: 'ما السلالة البشرية التي تمثل نحو 50% من سكان العالم وينتمي إليها سكان الوطن العربي وجنوب أوروبا؟',
        questionEn: 'Which human racial group comprises approximately 50% of the world population, including Arabs and southern Europeans?',
        optionsAr: ['السلالة القوقازية', 'السلالة المغولية', 'السلالة الزنجية'],
        optionsEn: ['Caucasian race', 'Mongoloid race', 'Negroid race'],
        correctIndex: 0,
        vocabulary: [['السلالة القوقازية', 'Caucasian lineage'], ['السلالة المغولية', 'Mongoloid lineage'], ['التمازج البشري', 'human integration']]
      },
      {
        titleAr: 'توزيع سكان العالم والخصائص الديموغرافية والاقتصادية للقارات',
        titleEn: 'World Population Distribution, Demographics & Economic Structure',
        subtitleAr: 'مناطق التركز السكاني في آسيا وأوروبا وأمريكا، ودول الدخل القومي المرتفع والمتوسط والمنخفض، والرعاية الصحية والتعليم',
        subtitleEn: 'Global population clusters, birth/death rates, life expectancy, and economic income tiers across developed and developing nations',
        focusAr: 'تحليل أسباب تركز أكثر من نصف سكان العالم في قارة آسيا، والعلاقة بين النشاط الاقتصادي (الصناعي مقابل الزراعي) ومستوى معيشة الأفراد.',
        focusEn: 'Analyze global demographic clusters in Asia and Europe and evaluate correlation between industrialization and HDI.',
        activityAr: 'فسر سبب ارتفاع نسبة فئة صغار السن في الدول النامية وأثر ذلك على ميزانية الدولة في التعليم والصحة.',
        activityEn: 'Examine economic burdens associated with high youth dependency ratios in developing countries.',
        questionAr: 'ما القارة التي تضم أكبر عدد من سكان العالم وتستحوذ على نحو 60% من سكان الكرة الأرضية؟',
        questionEn: 'Which continent has the largest population, hosting approximately 60% of the world’s people?',
        optionsAr: ['قارة آسيا', 'قارة إفريقيا', 'قارة أوروبا'],
        optionsEn: ['Asia', 'Africa', 'Europe'],
        correctIndex: 0,
        vocabulary: [['هرم سكاني', 'population pyramid'], ['الدخل القومي', 'national income'], ['معدل الزيادة الطبيعية', 'natural increase rate']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. Social Studies: History (Prep 1, 2, 3)
// ---------------------------------------------------------------------------
const historyPrep1Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الرابعة والخامسة: مصر عبر العصور القديمة والحضارة المصرية',
    unitTitleEn: 'Units 4 & 5: Ancient Egypt Across Eras and Egyptian Civilization',
    lessons: [
      {
        titleAr: 'وحدة شعب وعصر بناة الأهرام (الدولة القديمة)',
        titleEn: 'Unity of the People and the Age of Pyramid Builders (Old Kingdom)',
        subtitleAr: 'عصور ما قبل التاريخ، توحيد مينا للقطرين (3200 ق.م)، ملوك الدولة القديمة (زوسر، خوفو، خفرع، ومنكاورع) وبناء الأهرامات',
        subtitleEn: 'Prehistoric eras, King Menes’ unification of Egypt (3200 BC), and Old Kingdom Pharaohs (Djoser, Khufu, Khafre, Menkaure)',
        focusAr: 'استيعاب جهود الملك مينا في تحقيق الوحدة السياسية، وفهم عقيدة البعث والخلود عند الفراعنة التي دفعتهم لتشييد الأهرامات الحصينة.',
        focusEn: 'Analyze Menes’ unification of Upper and Lower Egypt and religious beliefs of resurrection and eternity driving pyramid construction.',
        activityAr: 'فسر سبب تسمية عصر الدولة القديمة بعصر بناة الأهرام، ووضح تطور المقبرة من مصطبة إلى هرم مدرج.',
        activityEn: 'Explain why the Old Kingdom is designated the Age of the Pyramids and trace mastaba evolution into the Step Pyramid.',
        questionAr: 'من هو الملك المصري الذي شيد هرم سقارة المدرج كأول بناء حجري ضخم في التاريخ؟',
        questionEn: 'Which Egyptian pharaoh built the Step Pyramid of Saqqara, the first large-scale stone monument in history?',
        optionsAr: ['الملك زوسر', 'الملك خوفو', 'الملك مينا'],
        optionsEn: ['King Djoser', 'King Khufu', 'King Menes'],
        correctIndex: 0,
        vocabulary: [['عصر بناة الأهرام', 'Age of the Pyramids'], ['لوحة نارمر', 'Narmer Palette'], ['البعث والخلود', 'resurrection and eternity']]
      },
      {
        titleAr: 'عصر الرخاء الاقتصادي (الدولة الوسطى) وقناة سيزوستريس',
        titleEn: 'Age of Economic Prosperity (Middle Kingdom) & Sesostris Canal',
        subtitleAr: 'الملوك أمنمحات الأول، سنوسرت الثالث، وأمنمحات الثالث، ومشروعات الري والزراعة وسد اللاهون وقناة سيزوستريس',
        subtitleEn: 'Pharaohs Amenemhat I, Senusret III, and Amenemhat III; Avaris reclamation, Lahun Dam, and Sesostris canal',
        focusAr: 'أهمية مشروعات التنمية الزراعية والتجارية في الدولة الوسطى، وحفر قناة سيزوستريس لربط البحرين عبر نهر النيل.',
        focusEn: 'Examine Middle Kingdom infrastructural modernization, agricultural reclamation, and early Red Sea-Nile connectivity.',
        activityAr: 'بين الأهمية الاستراتيجية لقناة سيزوستريس في عهد سنوسرت الثالث وتأثيرها على التجارة مع بلاد بونت وجزر البحر المتوسط.',
        activityEn: 'Evaluate the economic impacts of the Sesostris Canal linking Egypt to Punt and Mediterranean trade routes.',
        questionAr: 'من هو ملك الدولة الوسطى الذي حفر قناة سيزوستريس لتوصيل البحر الأحمر بنهر النيل؟',
        questionEn: 'Which Middle Kingdom pharaoh excavated the Sesostris Canal connecting the Nile with the Red Sea?',
        optionsAr: ['الملك سنوسرت الثالث', 'الملك مينا', 'الملك خوفو'],
        optionsEn: ['King Senusret III', 'King Menes', 'King Khufu'],
        correctIndex: 0,
        vocabulary: [['قناة سيزوستريس', 'Sesostris Canal'], ['سد اللاهون', 'Lahun Dam'], ['الرخاء الاقتصادي', 'economic prosperity']]
      },
      {
        titleAr: 'عصر المجد الحربي (الدولة الحديثة) وطرد الهكسوس والإمبراطورية المصرية',
        titleEn: 'Age of Military Glory (New Kingdom): Hyksos Expulsion & Empire',
        subtitleAr: 'كفاح أحمس ضد الهكسوس، الملكة حتشبسوت، تحتمس الثالث (معركة مجدو)، رمسيس الثاني ومعركة قادش وأقدم معاهدة سلام',
        subtitleEn: 'Ahmose I repelling the Hyksos, Queen Hatshepsut, Thutmose III (Megiddo), Ramesses II, and the Treaty of Kadesh',
        focusAr: 'تكوين أول إمبراطورية مصرية عسكرية في التاريخ امتدت لآسيا وإفريقيا، وفهم معاهدة قادش كأول معاهدة سلام مكتوبة في العالم.',
        focusEn: 'Analyze New Kingdom imperial expansion across the Levant, Thutmose III’s military tactics, and Ramesses II’s diplomacy.',
        activityAr: 'لخص دور المرأة المصرية في الدفاع عن الوطن متمثلاً في الملكة إياح حتب وتشجيعها لابنها أحمس على طرد الغزاة.',
        activityEn: 'Highlight the patriotic leadership of Queen Ahhotep I inspiring Ahmose to liberate Egypt from the Hyksos.',
        questionAr: 'من هو القائد العبقري الذي خاض معركة مجدو وقسم الجيش إلى قلب وجناحين ودرب الجنود ببراعة؟',
        questionEn: 'Which military genius pharaoh fought the Battle of Megiddo and pioneered strategic army formations?',
        optionsAr: ['الملك تحتمس الثالث', 'الملك أحمس الأول', 'الملك إخناتون'],
        optionsEn: ['King Thutmose III', 'King Ahmose I', 'King Akhenaten'],
        correctIndex: 0,
        vocabulary: [['معركة مجدو', 'Battle of Megiddo'], ['معاهدة سلام', 'peace treaty'], ['الهكسوس', 'the Hyksos']]
      },
      {
        titleAr: 'مظاهر الحضارة المصرية القديمة: الحياة السياسية والدينية والاجتماعية',
        titleEn: 'Facets of Ancient Egyptian Civilization: Governance, Religion & Society',
        subtitleAr: 'نظام الحكم (الفرعون، الوزير، حكام الأقاليم، الجيش)، تعدد الآلهة وثورة إخناتون الدينية، والطبقات الاجتماعية والأسرة',
        subtitleEn: 'State governance (Pharaoh, Vizier, Nomarchs), polytheism and Akhenaten’s monotheistic revolution, and societal strata',
        focusAr: 'استيعاب البنية المتكاملة للدولة الفرعونية وكيف أسهمت العدالة وسيادة القانون في استقرار الحضارة لآلاف السنين.',
        focusEn: 'Examine ancient Egyptian institutional administration, ethical codes of Ma\'at, and daily social equilibrium.',
        activityAr: 'وضح دور الوزير في مصر القديمة والشروط الواجب توافرها فيمن يتولى هذه المسؤولية الوطنية الرفيعة.',
        activityEn: 'Analyze the administrative portfolio and requisite ethical standards of the ancient Egyptian Vizier.',
        questionAr: 'ما الإله الذي دعا الملك إخناتون إلى عبادته كإله واحد ورمز له بقرص الشمس؟',
        questionEn: 'Which deity was worshipped as the sole god in Akhenaten’s monotheistic reform, symbolized by the sun disc?',
        optionsAr: ['الإله آتون', 'الإله آمون', 'الإله أوزوريس'],
        optionsEn: ['Aten', 'Amun', 'Osiris'],
        correctIndex: 0,
        vocabulary: [['الإله آتون', 'God Aten'], ['منصب الوزير', 'Vizierate'], ['قوانين ماعت', 'Codes of Maat']]
      }
    ]
  }
];

const historyPrep2Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الثالثة والرابعة: سيرة النبي ﷺ والخلافة الإسلامية',
    unitTitleEn: 'Units 3 & 4: Biography of Prophet Muhammad ﷺ & The Rightly Guided Caliphate',
    lessons: [
      {
        titleAr: 'مولد النبي ﷺ وبعثته وهجرته وبناء الدولة الإسلامية بالمدينة',
        titleEn: 'Birth, Prophethood, Migration (Hijrah) & State-Building in Medina',
        subtitleAr: 'نشأة النبي ﷺ في مكة، نزول الوحي في غار حراء، مراحل الدعوة الإسلامية، الهجرة النبوية، ودعائم بناء الدولة في المدينة المنورة',
        subtitleEn: 'Early life in Mecca, revelation in Cave Hira, stages of Islamic call, the Hijrah, and pillars of Medinan society',
        focusAr: 'فهم أسس بناء الدولة الإسلامية في المدينة: بناء المسجد النبوي، المؤاخاة بين المهاجرين والأنصار، وصحيفة المدينة للتعايش.',
        focusEn: 'Analyze foundational pillars of the Islamic state in Medina: Prophet’s Mosque, brotherhood pact, and Charter of Medina.',
        activityAr: 'وضح أهمية صحيفة المدينة (دستور المدينة) كأول وثيقة لحقوق الإنسان وحرية العقيدة والتعايش السلمي في التاريخ.',
        activityEn: 'Discuss the historical significance of the Charter of Medina establishing pluralism and equal civil rights.',
        questionAr: 'ما هو الركن الأول الذي أقامه النبي ﷺ عند وصوله إلى المدينة المنورة ليكون مركزاً للعبادة وإدارة شؤون الدولة؟',
        questionEn: 'What was the first foundation established by the Prophet ﷺ upon arriving in Medina as a center of worship and governance?',
        optionsAr: ['بناء المسجد النبوي الشريف', 'المؤاخاة بين المهاجرين والأنصار', 'كتابة صحيفة المدينة'],
        optionsEn: ['Building the Prophet’s Mosque', 'Fraternity between Muhajirun and Ansar', 'Drafting the Medina Charter'],
        correctIndex: 0,
        vocabulary: [['المهاجرون والأنصار', 'Muhajirun and Ansar'], ['صحيفة المدينة', 'Constitution of Medina'], ['الهجرة النبوية', 'the Hijrah']]
      },
      {
        titleAr: 'غزوات الرسول ﷺ: بدر وأحد والخندق وفتح مكة ودروس القيادة',
        titleEn: 'Expeditions of the Prophet ﷺ: Badr, Uhud, Trench, Conquest of Mecca',
        subtitleAr: 'مبدأ الشورى في الإسلام، حفر الخندق بمشورة سلمان الفارسي، صلح الحديبية، وفتح مكة والعفو عند المقدرة',
        subtitleEn: 'Principle of Shura, Battle of Badr, trench defense, Treaty of Hudaybiyyah, and peaceful conquest of Mecca',
        focusAr: 'ترسيخ القيم الأخلاقية العسكرية النبوية: الشورى، الوفاء بالعهود، الرحمة والتسامح مع الخصوم عند النصر.',
        focusEn: 'Analyze prophetic military ethics: consultative governance (Shura), tactical innovation, and magnanimity at victory.',
        activityAr: 'استخرج من موقف النبي ﷺ يوم فتح مكة ("اذهبوا فأنتم الطلقاء") درساً في التسامح والعفو لبناء المجتمعات.',
        activityEn: 'Reflect upon the Prophet’s amnesty at Mecca as a timeless precedent for restorative justice and reconciliation.',
        questionAr: 'من الصحابي الجليل الذي أشار على النبي ﷺ بحفر خندق حول المدينة المنورة في غزوة الأحزاب؟',
        questionEn: 'Which companion advised digging the defensive trench around Medina during the Battle of the Ahzab?',
        optionsAr: ['سلمان الفارسي رضي الله عنه', 'أبو بكر الصديق رضي الله عنه', 'خالد بن الوليد رضي الله عنه'],
        optionsEn: ['Salman al-Farsi (RA)', 'Abu Bakr (RA)', 'Khalid ibn al-Walid (RA)'],
        correctIndex: 0,
        vocabulary: [['مبدأ الشورى', 'Shura principle'], ['صلح الحديبية', 'Treaty of Hudaybiyyah'], ['غزوة الخندق', 'Battle of the Trench']]
      },
      {
        titleAr: 'خلافة أبي بكر الصديق وعمر بن الخطاب رضي الله عنهما',
        titleEn: 'Caliphates of Abu Bakr Al-Siddiq & Umar Ibn Al-Khattab (RA)',
        subtitleAr: 'بيعة السقيفة، حروب الردة وجمع القرآن، الفتوحات الإسلامية في الشام ومصر والعراق، والتقويم الهجري والشرطة',
        subtitleEn: 'Saqifah consensus, Riddah wars, Quran compilation, administrative diwans, Hijri calendar, and liberation of Egypt',
        focusAr: 'إدارة الأزمات في عهد الصديق، والعبقرية الإدارية للفاروق عمر في إنشاء الدواوين ونظام القضاء وفتح بيت المقدس ومصر على يد عمرو بن العاص.',
        focusEn: 'Examine Abu Bakr’s crisis leadership preserving state unity and Umar’s institutional innovations establishing diwans and justice.',
        activityAr: 'وضح وثيقة الأمان (العهدة العمرية) التي منحها عمر بن الخطاب لأهل إيلياء (القدس) وأثرها في التسامح الديني.',
        activityEn: 'Discuss the historical guarantees of religious liberty codified in Umar’s Assurance of Safety to Jerusalem (Aelia).',
        questionAr: 'من هو القائد المسلم الذي قاد جيش الفتح الإسلامي لمصر عام 21 هـ في عهد الفاروق عمر؟',
        questionEn: 'Which general led the Muslim army that opened Egypt in 21 AH during the caliphate of Umar?',
        optionsAr: ['عمرو بن العاص رضي الله عنه', 'خالد بن الوليد رضي الله عنه', 'سعد بن أبي وقاص رضي الله عنه'],
        optionsEn: ['Amr ibn al-Aas (RA)', 'Khalid ibn al-Walid (RA)', 'Saad ibn Abi Waqqas (RA)'],
        correctIndex: 0,
        vocabulary: [['العهدة العمرية', 'assurance of safety'], ['الدواوين', 'administrative diwans'], ['جمع القرآن', 'compilation of Quran']]
      },
      {
        titleAr: 'خلافة عثمان بن عفان وعلي بن أبي طالب رضي الله عنهما',
        titleEn: 'Caliphates of Uthman Ibn Affan & Ali Ibn Abi Talib (RA)',
        subtitleAr: 'كتابة المصحف الإمام وتوزيعه على الأمصار، إنشاء أول أسطول بحري إسلامي، والعدل القضائي في عهد الإمام علي',
        subtitleEn: 'Uthmanic codex unification, inaugural Islamic maritime fleet, and Ali’s legal jurisprudence and capital relocation to Kufa',
        focusAr: 'توحيد قراءة القرآن في المصحف العثماني لحفظ الأمة من الاختلاف، وبناء الأسطول البحري لحماية شواطئ مصر والشام، وزهد الإمام علي وعدله.',
        focusEn: 'Evaluate Uthman’s canonization of the standard Quranic mushaf and naval defense, alongside Ali’s rigorous judicial integrity.',
        activityAr: 'بين أهمية بناء أول أسطول بحري إسلامي في معركة ذات الصواري ضد الأسطول البيزنطي.',
        activityEn: 'Assess the strategic significance of the inaugural Islamic naval fleet in the Battle of Dhat al-Sawari.',
        questionAr: 'في عهد أي من الخلفاء الراشدين تم نسخ القرآن الكريم في مصحف واحد موحد وأرسل إلى الأمصار؟',
        questionEn: 'Under which caliph’s leadership was the standard single mushaf transcribed and dispatched across the provinces?',
        optionsAr: ['عثمان بن عفان رضي الله عنه', 'علي بن أبي طالب رضي الله عنه', 'عمر بن الخطاب رضي الله عنه'],
        optionsEn: ['Uthman ibn Affan (RA)', 'Ali ibn Abi Talib (RA)', 'Umar ibn al-Khattab (RA)'],
        correctIndex: 0,
        vocabulary: [['المصحف العثماني', 'Uthmanic mushaf'], ['معركة ذات الصواري', 'Battle of the Masts'], ['أسطول بحري', 'naval fleet']]
      }
    ]
  }
];

const historyPrep3Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الثالثة والرابعة: مصر تحت الحكم العثماني وثورة 1919 حتى ثورة 23 يوليو',
    unitTitleEn: 'Units 3 & 4: Egypt Under Ottoman Rule, 1919 Revolution & 1952 Revolution',
    lessons: [
      {
        titleAr: 'مصر بين المماليك والعثمانيين وبناء الدولة الحديثة في عهد محمد علي',
        titleEn: 'Egypt Between Mamluks & Ottomans, and Muhammad Ali’s State Building',
        subtitleAr: 'معركتا مرج دابق والريدانية (1517)، أحوال مصر تحت الحكم العثماني، الحملة الفرنسية، واختيار الشعب لمحمد علي والنهضة التعليمية والعسكرية',
        subtitleEn: 'Battles of Marj Dabiq and Raydaniyya, French Expedition, popular appointment of Muhammad Ali, and modern economic reforms',
        focusAr: 'تتبع مراحل تحول مصر إلى ولاية عثمانية، وأثر الحملة الفرنسية، ودور الزعامة الشعبية في تولية محمد علي وبناء الجيش والتعليم الحديث.',
        focusEn: 'Examine Egypt’s transition to an Ottoman province, the awakening under the French campaign, and Muhammad Ali’s modernization.',
        activityAr: 'قارن بين نظام التعليم في مصر في العصر العثماني والنهضة التعليمية في عهد محمد علي والبعثات العلمية لأوروبا.',
        activityEn: 'Contrast Egyptian education during Ottoman decline with Muhammad Ali’s modern schools and educational missions to Europe.',
        questionAr: 'في أي معركة عام 1517 انتهت دولة المماليك وأصبحت مصر ولاية عثمانية؟',
        questionEn: 'In which battle in 1517 did the Mamluk Sultanate end, converting Egypt into an Ottoman province?',
        optionsAr: ['معركة الريدانية', 'معركة مرج دابق', 'معركة ديو البحرية'],
        optionsEn: ['Battle of Raydaniyya', 'Battle of Marj Dabiq', 'Battle of Diu'],
        correctIndex: 0,
        vocabulary: [['معركة الريدانية', 'Battle of Raydaniyya'], ['الزعامة الشعبية', 'popular leadership'], ['النهضة التعليمية', 'educational renaissance']]
      },
      {
        titleAr: 'خلفاء محمد علي وازدياد التدخل الأجنبي وحفر قناة السويس',
        titleEn: 'Successors of Muhammad Ali, Foreign Intervention & Suez Canal',
        subtitleAr: 'عهد عباس وسعيد، امتياز حفر قناة السويس (1856)، عصر الخديوي إسماعيل بين النهضة العمرانية وتفاقم الديون والأزمة المالية',
        subtitleEn: 'Reigns of Abbas, Said, Ferdinand de Lesseps concession, Khedive Ismail’s architectural modernization and fiscal debt',
        focusAr: 'فهم شروط امتياز قناة السويس الجائرة على مصر، والتناقض في عصر إسماعيل بين الازدهار الثقافي والعمراني والتدخل الأجنبي وصندوق الدين.',
        focusEn: 'Analyze the onerous conditions of the 1856 Suez Canal concession and foreign financial subjugation under Khedive Ismail.',
        activityAr: 'انقد شروط امتياز حفر قناة السويس مبيناً التضحيات الكبرى التي قدمها الشعب المصري في حفرها.',
        activityEn: 'Critique the inequitable terms of the Suez Canal concession and the sacrifices of Egyptian peasant corvee labor.',
        questionAr: 'من هو خديوي مصر الذي شهد عصره نهضة عمرانية وثقافية كبرى وتأسيس دار الأوبرا لكنه وقع في أزمة الديون؟',
        questionEn: 'Which ruler oversaw cultural modernization, the Opera House, but succumbed to foreign debt?',
        optionsAr: ['الخديوي إسماعيل', 'محمد علي باشا', 'عباس حلمي الأول'],
        optionsEn: ['Khedive Ismail', 'Muhammad Ali Pasha', 'Abbas Hilmi I'],
        correctIndex: 0,
        vocabulary: [['امتياز قناة السويس', 'Suez concession'], ['صندوق الدين', 'Caisse de la Dette'], ['دار الأوبرا', 'Opera House']]
      },
      {
        titleAr: 'الثورة العرابية والاحتلال البريطاني لمصر ومعركة التل الكبير (1882)',
        titleEn: 'Urabi Revolt, British Occupation of Egypt & Battle of Tell El-Kebir (1882)',
        subtitleAr: 'أسباب الثورة العرابية، مظاهرة عابدين (9 سبتمبر 1881)، الموقف الوطني لأحمد عرابي، وخيانة ديلسبس والاحتلال الإنجليزي',
        subtitleEn: 'Causes of the Urabi movement, Abdeen Palace confrontation, British naval bombardment of Alexandria, and Tell El-Kebir',
        focusAr: 'صمود الزعيم أحمد عرابي ومطالب الأمة بالحرية والدستور والجيش الوطني، وكيف استغل الاحتلال البريطاني الأوضاع لاحتلال مصر لـ 74 عاماً.',
        focusEn: 'Evaluate Ahmed Urabi’s constitutional demands at Abdeen Palace and factors leading to military setback at Tell El-Kebir.',
        activityAr: 'حلل المقولة التاريخية لأحمد عرابي أمام الخديوي توفيق: "لقد خلقنا الله أحراراً ولم يخلقنا تراثاً أو عقاراً".',
        activityEn: 'Analyze Urabi’s famous declaration of human dignity and liberty before Khedive Tawfiq.',
        questionAr: 'في أي معركة حاسمة عام 1882 استبسل الجيش المصري بقيادة عرابي ومحمد عبيد قبل دخول الإنجليز القاهرة؟',
        questionEn: 'At which decisive 1882 battle did the Egyptian army make its heroic stand before British forces entered Cairo?',
        optionsAr: ['معركة التل الكبير', 'معركة كفر الدوار', 'معركة الريدانية'],
        optionsEn: ['Battle of Tell El-Kebir', 'Battle of Kafr El-Dawwar', 'Battle of Raydaniyya'],
        correctIndex: 0,
        vocabulary: [['مظاهرة عابدين', 'Abdeen demonstration'], ['معركة التل الكبير', 'Tell El-Kebir'], ['الحركة الوطنية', 'nationalist movement']]
      },
      {
        titleAr: 'الحركة الوطنية: مصطفى كامل ومحمد فريد حتى ثورة 1919 والتحرر الوطني',
        titleEn: 'National Struggle: Mustafa Kamel, Muhammad Farid & 1919 Revolution',
        subtitleAr: 'حادثة دنشواي (1906)، جريدة اللواء، تأسيس الحزب الوطني، كفاح محمد فريد، ثورة 1919 بقيادة سعد زغلول والوحدة الوطنية',
        subtitleEn: 'Denshawai Incident, Al-Liwaa newspaper, National Party, Muhammad Farid’s labor syndicates, and Saad Zaghloul’s 1919 revolution',
        focusAr: 'تتبع نضال الزعماء الوطنيين في فضح جرائم الاحتلال في المحافل الدولية، والوحدة الوطنية التاريخية بين المسلمين والأقباط في ثورة 1919.',
        focusEn: 'Analyze Mustafa Kamel’s international diplomatic campaign following Denshawai and the unprecedented interfaith unity of 1919.',
        activityAr: 'بين مظاهر الوحدة الوطنية في ثورة 1919 وكيف اتحد الهلال مع الصليب وشاركت المرأة المصرية في الثورة لأول مرة.',
        activityEn: 'Detail the interfaith solidarity and pioneering political mobilization of Egyptian women in the 1919 Revolution.',
        questionAr: 'من هو الزعيم الوطني الذي أسس جريدة اللواء والحزب الوطني وفضح فظائع حادثة دنشواي في أوروبا؟',
        questionEn: 'Which national leader established the newspaper Al-Liwaa and catalyzed international outrage over Denshawai?',
        optionsAr: ['الزعيم مصطفى كامل', 'الزعيم سعد زغلول', 'أحمد عرابي'],
        optionsEn: ['Mustafa Kamel', 'Saad Zaghloul', 'Ahmed Urabi'],
        correctIndex: 0,
        vocabulary: [['حادثة دنشواي', 'Denshawai incident'], ['ثورة 1919', '1919 Revolution'], ['الوحدة الوطنية', 'national unity']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 4. Islamic Studies (Prep 1, 2, 3)
// ---------------------------------------------------------------------------
const islamicPrep1Units: PrepUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى والثانية: من دلائل قدرة الله والقرآن الكريم والعبادات',
    unitTitleEn: 'Units 1 & 2: Signs of Divine Power, Quran & Worship',
    lessons: [
      {
        titleAr: 'التأمل في مخلوقات الله، وسورة يس، وأحكام الصوم',
        titleEn: 'Contemplation of Creation, Surah Yasin & Rulings of Fasting',
        subtitleAr: 'النظر والتفكر في الكون وعمارة الأرض، حفظ وتدبر آيات من سورة يس، وحكمة مشروعية صيام رمضان وشروطه وسننه',
        subtitleEn: 'Contemplating creation, reciting verses from Surah Yasin, and the wisdom and rulings of fasting Ramadan',
        focusAr: 'ترسيخ الإيمان عبر التأمل في بديع صنع الله في الكون والنبات والإنسان، وفهم أحكام الصوم ومبطلاته وسننه وآدابه.',
        focusEn: 'Foster faith through reflection on cosmic creation, memorize Surah Yasin passages, and learn the fiqh of Ramadan fasting.',
        activityAr: 'بين الحكمة من فرض الصيام وكيف يربي المسلم على الصبر والتقوى والإحساس بالفقراء والمحتاجين.',
        activityEn: 'Explain the spiritual and moral wisdom behind fasting fostering patience, empathy, and social solidarity.',
        questionAr: 'ما الركن الرابع من أركان الإسلام الذي فرضه الله في شهر رمضان المبارك؟',
        questionEn: 'What is the fourth pillar of Islam prescribed during the holy month of Ramadan?',
        optionsAr: ['صوم رمضان', 'إيتاء الزكاة', 'حج البيت'],
        optionsEn: ['Fasting Ramadan', 'Paying Zakat', 'Hajj to the House'],
        correctIndex: 0,
        vocabulary: [['التفكر في الكون', 'cosmic contemplation'], ['سورة يس', 'Surah Yasin'], ['أحكام الصيام', 'rulings of fasting']]
      },
      {
        titleAr: 'يسر الإسلام في الطهارة وأحكام المسح على الخفين والجبيرة',
        titleEn: 'Facilitation in Islamic Purification: Wiping over Khuffayn & Casts',
        subtitleAr: 'مظاهر رفع الحرج في الشريعة، شروط المسح على الخفين ومدته للمقيم والمسافر، والتيمم عند فقد الماء',
        subtitleEn: 'Leniency in Islamic law, conditions and duration for wiping over socks/shoes, and Tayammum',
        focusAr: 'فهم مبدأ التيسير في الشريعة الإسلامية: "إن الدين يسر"، وكيف شرع الله المسح على الخفين والجبيرة رفعاً للمشقة عن المريض والمسافر.',
        focusEn: 'Analyze legal facilitation (Rukhsah) in Islamic jurisprudence and rules of wiping over footgear and medical casts.',
        activityAr: 'قارن بين مدة المسح على الخفين للمقيم (يوم وليلة) وللمسافر (ثلاثة أيام بلياليها).',
        activityEn: 'Contrast allowable durations for wiping over footgear between resident (24 hrs) and traveler (72 hrs).',
        questionAr: 'ما مدة المسح على الخفين للمسافر سفراً مباحاً في الفقه الإسلامي؟',
        questionEn: 'What is the permissible duration for a traveler to wipe over socks/footgear?',
        optionsAr: ['ثلاثة أيام بلياليها', 'يوم وليلة فقط', 'أسبوع كامل'],
        optionsEn: ['Three days and nights', 'One day and night', 'One whole week'],
        correctIndex: 0,
        vocabulary: [['المسح على الخفين', 'wiping over socks'], ['رخصة شرعية', 'legal facilitation'], ['التيمم', 'Tayammum']]
      },
      {
        titleAr: 'سيرة الصحابة ومواقف من التكافل الاجتماعي في الإسلام',
        titleEn: 'Companions’ Biographies & Social Solidarity in Islam',
        subtitleAr: 'نماذج من تضحيات الصحابة، عثمان بن عفان وتجهيز جيش العسرة وبئر رومة، وأبو ذر الغفاري ونصرة الضعفاء',
        subtitleEn: 'Noble sacrifices of the Sahaba, Uthman financing the Tabuk expedition, and Abu Dharr’s social advocacy',
        focusAr: 'غرس خلق البذل والعطاء في سبيل الله والتكافل المجتمعي لمساعدة الفقراء والمعوزين وبناء مجتمع إسلامي متماسك كالبنيان المرصوص.',
        focusEn: 'Cultivate social altruism, philanthropic endowment (Waqf), and civic solidarity through historical examples.',
        activityAr: 'اذكر موقفا لعثمان بن عفان رضي الله عنه ضرب فيه أروع الأمثلة في الجود والإنفاق لتفريج كرب المسلمين.',
        activityEn: 'Detail Uthman ibn Affan’s philanthropic purchase of the Ruma well for universal community access.',
        questionAr: 'من هو الصحابي الجليل الذي جهز جيش العسرة في غزوة تبوك من ماله الخاص واشترى بئر رومة وجعلها وقفاً للمسلمين؟',
        questionEn: 'Which companion outfitted the Tabuk expedition and endowed the Ruma well as a public trust?',
        optionsAr: ['عثمان بن عفان رضي الله عنه', 'علي بن أبي طالب رضي الله عنه', 'سعد بن معاذ رضي الله عنه'],
        optionsEn: ['Uthman ibn Affan (RA)', 'Ali ibn Abi Talib (RA)', 'Saad ibn Muadh (RA)'],
        correctIndex: 0,
        vocabulary: [['التكافل الاجتماعي', 'social solidarity'], ['جيش العسرة', 'Tabuk expedition'], ['الوقف الخيري', 'charitable endowment']]
      },
      {
        titleAr: 'حماية البيئة في المنظور الإسلامي وعمارة الأرض',
        titleEn: 'Environmental Stewardship in Islam & Earth Cultivation',
        subtitleAr: 'عمارة الأرض والاستخلاف، النهي عن الإفساد والإسراف في المياه، وغرس الأشجار وإماطة الأذى عن الطريق',
        subtitleEn: 'Stewardship (Khilafah), conservation of water, afforestation, sanitation, and prevention of ecological corruption',
        focusAr: 'المنهج الإسلامي الراقي في المحافظة على البيئة ومواردها، وترشيد استهلاك الماء حتى في العبادات، واعتبار إماطة الأذى صدقة وشعبة من شعب الإيمان.',
        focusEn: 'Formulate an eco-theology of earth preservation, water stewardship, and the prophetic mandate for afforestation.',
        activityAr: 'استشهد بحديث نبوي شريف يحث على الزراعة والغرس ولو قامت القيامة، وبين دلالته الإيمانية والعملية.',
        activityEn: 'Cite and analyze the prophetic tradition urging the planting of seedlings even at the onset of the Final Hour.',
        questionAr: 'ما حكم تلويث المجاري المائية وإلقاء القمامة والملوثات في الطرقات والحدائق العامة في الشريعة الإسلامية؟',
        questionEn: 'What is the Islamic ruling regarding polluting waterways and littering public spaces?',
        optionsAr: ['محرم وإثم شرعي ينافي الإيمان', 'مباح دون حرج', 'مستحب للضرورة'],
        optionsEn: ['Prohibited and sinful', 'Permissible', 'Encouraged'],
        correctIndex: 0,
        vocabulary: [['عمارة الأرض', 'earth cultivation'], ['ترشيد المياه', 'water conservation'], ['إماطة الأذى', 'removing harm']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Main Preparatory Curriculum Router
// ---------------------------------------------------------------------------
export function getEgyptPrepCurriculum(
  subject: Subject,
  gradeLevel: GradeLevel = 'G7',
  educationType: EducationType = 'PUBLIC',
  _track?: EducationTrack
): Lecture[] {
  if (!isEgyptPrepSubjectAvailable(subject, gradeLevel, educationType)) return [];

  const gradeNames: Record<GradeLevel, [string, string]> = {
    G7: ['الصف الأول الإعدادي', 'Prep 1 / Grade 7'],
    G8: ['الصف الثاني الإعدادي', 'Prep 2 / Grade 8'],
    G9: ['الصف الثالث الإعدادي (الشهادة الإعدادية)', 'Prep 3 / Grade 9 (Middle School Certificate)'],
    G1: ['', ''], G2: ['', ''], G3: ['', ''], G4: ['', ''], G5: ['', ''], G6: ['', ''],
    G10: ['', ''], G11: ['', ''], G12: ['', '']
  };

  const [nameAr, nameEn] = gradeNames[gradeLevel] || ['المرحلة الإعدادية', 'Preparatory School'];

  switch (subject) {
    case 'MATH':
      if (gradeLevel === 'G7') {
        return MIDDLE_MATH_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G7',
          educationType,
          gradeLevelNameAr: `${nameAr} - الرياضيات (الجبر والهندسة)`,
          gradeLevelNameEn: `${nameEn} - Mathematics`
        }));
      }
      if (gradeLevel === 'G8') {
        return MIDDLE_MATH_G8_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G8',
          educationType,
          gradeLevelNameAr: `${nameAr} - الرياضيات (الجبر والهندسة)`,
          gradeLevelNameEn: `${nameEn} - Mathematics`
        }));
      }
      return MIDDLE_MATH_G9_LECTURES.map((l) => ({
        ...l,
        country: 'EG',
        gradeLevel: 'G9',
        educationType,
        gradeLevelNameAr: `${nameAr} - الرياضيات (الجبر وحساب المثلثات والهندسة التحليلية)`,
        gradeLevelNameEn: `${nameEn} - Mathematics`
      }));

    case 'GENERAL_SCIENCE':
      if (gradeLevel === 'G7') {
        return GENERAL_SCIENCE_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G7',
          educationType,
          gradeLevelNameAr: `${nameAr} - مادة العلوم الرسمية`,
          gradeLevelNameEn: `${nameEn} - General Science`
        }));
      }
      if (gradeLevel === 'G8') {
        return MIDDLE_SCIENCE_G8_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G8',
          educationType,
          gradeLevelNameAr: `${nameAr} - مادة العلوم الرسمية`,
          gradeLevelNameEn: `${nameEn} - General Science`
        }));
      }
      return MIDDLE_SCIENCE_G9_LECTURES.map((l) => ({
        ...l,
        country: 'EG',
        gradeLevel: 'G9',
        educationType,
        gradeLevelNameAr: `${nameAr} - مادة العلوم الرسمية`,
        gradeLevelNameEn: `${nameEn} - General Science`
      }));

    case 'ARABIC_LANG':
      if (gradeLevel === 'G7') {
        return ARABIC_LANG_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G7',
          educationType,
          gradeLevelNameAr: `${nameAr} - اللغة العربية والنحو`,
          gradeLevelNameEn: `${nameEn} - Arabic Language`
        }));
      }
      if (gradeLevel === 'G8') {
        return MIDDLE_ARABIC_G8_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G8',
          educationType,
          gradeLevelNameAr: `${nameAr} - اللغة العربية والنحو`,
          gradeLevelNameEn: `${nameEn} - Arabic Language`
        }));
      }
      return MIDDLE_ARABIC_G9_LECTURES.map((l) => ({
        ...l,
        country: 'EG',
        gradeLevel: 'G9',
        educationType,
        gradeLevelNameAr: `${nameAr} - اللغة العربية والنحو`,
        gradeLevelNameEn: `${nameEn} - Arabic Language`
      }));

    case 'COMPUTER_SCIENCE':
      if (gradeLevel === 'G7') {
        return MIDDLE_COMPUTER_SCIENCE_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G7',
          educationType,
          gradeLevelNameAr: `${nameAr} - الكمبيوتر وتكنولوجيا المعلومات`,
          gradeLevelNameEn: `${nameEn} - Computer Science & ICT`
        }));
      }
      if (gradeLevel === 'G8') {
        return MIDDLE_COMPUTER_SCIENCE_G8_LECTURES.map((l) => ({
          ...l,
          country: 'EG',
          gradeLevel: 'G8',
          educationType,
          gradeLevelNameAr: `${nameAr} - الكمبيوتر وتكنولوجيا المعلومات`,
          gradeLevelNameEn: `${nameEn} - Computer Science & ICT`
        }));
      }
      return MIDDLE_COMPUTER_SCIENCE_G9_LECTURES.map((l) => ({
        ...l,
        country: 'EG',
        gradeLevel: 'G9',
        educationType,
        gradeLevelNameAr: `${nameAr} - الكمبيوتر وتكنولوجيا المعلومات`,
        gradeLevelNameEn: `${nameEn} - Computer Science & ICT`
      }));

    case 'ENGLISH':
      if (gradeLevel === 'G7') return buildPrepLectures(englishPrep1Units, subject, gradeLevel, nameAr, nameEn, educationType);
      if (gradeLevel === 'G8') return buildPrepLectures(englishPrep2Units, subject, gradeLevel, nameAr, nameEn, educationType);
      return buildPrepLectures(englishPrep3Units, subject, gradeLevel, nameAr, nameEn, educationType);

    case 'GEOGRAPHY':
      if (gradeLevel === 'G7') return buildPrepLectures(geographyPrep1Units, subject, gradeLevel, nameAr, nameEn, educationType);
      if (gradeLevel === 'G8') return buildPrepLectures(geographyPrep2Units, subject, gradeLevel, nameAr, nameEn, educationType);
      return buildPrepLectures(geographyPrep3Units, subject, gradeLevel, nameAr, nameEn, educationType);

    case 'HISTORY':
      if (gradeLevel === 'G7') return buildPrepLectures(historyPrep1Units, subject, gradeLevel, nameAr, nameEn, educationType);
      if (gradeLevel === 'G8') return buildPrepLectures(historyPrep2Units, subject, gradeLevel, nameAr, nameEn, educationType);
      return buildPrepLectures(historyPrep3Units, subject, gradeLevel, nameAr, nameEn, educationType);

    case 'ISLAMIC_STUDIES':
      return buildPrepLectures(islamicPrep1Units, subject, gradeLevel, nameAr, nameEn, educationType);

    default:
      return [];
  }
}
