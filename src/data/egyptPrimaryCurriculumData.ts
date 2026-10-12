import type { EducationTrack, EducationType, GradeLevel, Lecture, Subject } from '../types';
import { PRIMARY_ARABIC_G1_LECTURES } from './primaryArabic1CurriculumData';
import { PRIMARY_ARABIC_G2_LECTURES } from './primaryArabic2CurriculumData';
import { PRIMARY_ARABIC_G3_LECTURES } from './primaryArabic3CurriculumData';
import { PRIMARY_ARABIC_G4_LECTURES } from './primaryArabic4CurriculumData';
import { PRIMARY_ARABIC_G5_LECTURES } from './primaryArabic5CurriculumData';
import { PRIMARY_ARABIC_G6_LECTURES } from './primaryArabic6CurriculumData';

import { PRIMARY_MATH_G1_LECTURES } from './primaryMath1CurriculumData';
import { PRIMARY_MATH_G2_LECTURES } from './primaryMath2CurriculumData';
import { PRIMARY_MATH_G3_LECTURES } from './primaryMath3CurriculumData';
import { PRIMARY_MATH_LECTURES } from './primaryCurriculumData';
import { PRIMARY_MATH_G5_LECTURES } from './primaryMath5CurriculumData';
import { PRIMARY_MATH_G6_LECTURES } from './primaryMath6CurriculumData';

import { PRIMARY_SCIENCE_G1_LECTURES } from './primaryScience1CurriculumData';
import { PRIMARY_SCIENCE_G2_LECTURES } from './primaryScience2CurriculumData';
import { PRIMARY_SCIENCE_G3_LECTURES } from './primaryScience3CurriculumData';
import { PRIMARY_SCIENCE_LECTURES } from './primaryCurriculumData';
import { PRIMARY_SCIENCE_G5_LECTURES } from './primaryScience5CurriculumData';
import { PRIMARY_SCIENCE_G6_LECTURES } from './primaryScience6CurriculumData';

import { PRIMARY_ISLAMIC_G1_LECTURES } from './primaryIslamic1CurriculumData';
import { PRIMARY_ISLAMIC_G2_LECTURES } from './primaryIslamic2CurriculumData';
import { PRIMARY_ISLAMIC_G3_LECTURES } from './primaryIslamic3CurriculumData';
import { PRIMARY_ISLAMIC_G4_LECTURES } from './primaryIslamic4CurriculumData';
import { PRIMARY_ISLAMIC_G5_LECTURES } from './primaryIslamic5CurriculumData';
import { PRIMARY_ISLAMIC_G6_LECTURES } from './primaryIslamic6CurriculumData';

// ---------------------------------------------------------------------------
// Egyptian Primary School Curriculum (المرحلة الابتدائية المصرية - منظومة التعليم 2.0)
// ---------------------------------------------------------------------------

export const EGYPT_PRIMARY_LOWER_SUBJECTS: readonly Subject[] = [
  'PRIMARY_ARABIC',
  'PRIMARY_MATH',
  'ENGLISH',
  'ISLAMIC_STUDIES'
];

export const EGYPT_PRIMARY_UPPER_SUBJECTS: readonly Subject[] = [
  'PRIMARY_ARABIC',
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'ENGLISH',
  'GEOGRAPHY',
  'HISTORY',
  'COMPUTER_SCIENCE',
  'ISLAMIC_STUDIES'
];

export function isEgyptPrimarySubjectAvailable(
  subject: Subject,
  gradeLevel?: GradeLevel,
  educationType: EducationType = 'PUBLIC'
): boolean {
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE') return false;
  if (!gradeLevel || !['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(gradeLevel)) return false;

  // For math and science aliases
  const normalizedSubject = subject === 'MATH' ? 'PRIMARY_MATH' : (subject === 'GENERAL_SCIENCE' ? 'PRIMARY_SCIENCE' : subject);

  if (['G1', 'G2', 'G3'].includes(gradeLevel)) {
    return EGYPT_PRIMARY_LOWER_SUBJECTS.includes(normalizedSubject as Subject) || normalizedSubject === 'PRIMARY_SCIENCE';
  }
  return EGYPT_PRIMARY_UPPER_SUBJECTS.includes(normalizedSubject as Subject);
}

export function getEgyptPrimarySubjects(gradeLevel: GradeLevel = 'G4'): Subject[] {
  if (['G1', 'G2', 'G3'].includes(gradeLevel)) {
    return [...EGYPT_PRIMARY_LOWER_SUBJECTS];
  }
  if (['G4', 'G5', 'G6'].includes(gradeLevel)) {
    return [...EGYPT_PRIMARY_UPPER_SUBJECTS];
  }
  return [];
}

// ---------------------------------------------------------------------------
// Helper Builder for Custom Egyptian Primary Courses (Connect English, ICT, Geography, History)
// ---------------------------------------------------------------------------
interface PrimaryLessonDefinition {
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

interface PrimaryUnitDefinition {
  unitTitleAr: string;
  unitTitleEn: string;
  lessons: PrimaryLessonDefinition[];
}

function buildPrimaryLectures(
  units: PrimaryUnitDefinition[],
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
      const id = `eg-prim-${gradeLevel.toLowerCase()}-${subject.toLowerCase().replace(/_/g, '-')}-${order}`;
      return {
        id,
        order,
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        subtitleAr: lesson.subtitleAr,
        subtitleEn: lesson.subtitleEn,
        durationMinutes: 25,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel,
        educationType,
        educationTrack: track,
        gradeLevelNameAr: gradeNameAr,
        gradeLevelNameEn: gradeNameEn,
        termAr: order <= 3 ? 'الفصل الدراسي الأول' : 'الفصل الدراسي الثاني',
        termEn: order <= 3 ? 'Term 1' : 'Term 2',
        unitTitleAr: unit.unitTitleAr,
        unitTitleEn: unit.unitTitleEn,
        lessonNumberAr: `الدرس ${order}: ${lesson.titleAr}`,
        lessonNumberEn: `Lesson ${order}: ${lesson.titleEn}`,
        warmupHookAr: `مرحباً بك يا بطل! استعد لاكتشاف عالم المعرفة في ${lesson.titleAr} وفق كتاب الوزارة المدرسي الممتع.`,
        warmupHookEn: `Welcome hero! Get ready to explore the exciting world of ${lesson.titleEn} aligned with the official textbook.`,
        keyConceptsAr: [
          lesson.focusAr,
          'التطبيق العملي والممارسة اليومية لترسيخ الفهم والمهارات.',
          'الربط بين التعلم وحياتنا اليومية ومجتمعنا الجميل.'
        ],
        keyConceptsEn: [
          lesson.focusEn,
          'Hands-on practice to solidify comprehension and foundational skills.',
          'Connecting lessons to daily life and our environment.'
        ],
        learningOutcomesAr: [
          lesson.focusAr,
          `حل تدريبات وأنشطة كتاب الوزارة لدرس «${lesson.titleAr}» بإتقان تام.`
        ],
        learningOutcomesEn: [
          lesson.focusEn,
          `Solve all official textbook activities and exercises for "${lesson.titleEn}".`
        ],
        vocabulary: lesson.vocabulary.map(([ar, en]) => ({
          termAr: ar,
          termEn: en,
          definitionAr: `مفردة ومصطلح أساسي في كتاب الوزارة لدرس «${lesson.titleAr}».`,
          definitionEn: `Core curriculum term from the official textbook for "${lesson.titleEn}".`
        })),
        summaryAr: lesson.focusAr,
        summaryEn: lesson.focusEn,
        mainContentAr: `${lesson.focusAr}\n\nالنشاط العملي: ${lesson.activityAr}\n\nهذا الدرس مصمم ومطابق تماماً لكتاب وزارة التربية والتعليم والتعليم الفني المصرية (منظومة التعليم 2.0).`,
        mainContentEn: `${lesson.focusEn}\n\nPractical Activity: ${lesson.activityEn}\n\nThis lesson is strictly aligned with the Egyptian Ministry of Education 2.0 reformed textbooks.`,
        sections: [
          {
            titleAr: 'الشرح والمفاهيم الأساسية',
            titleEn: 'Core Concepts & Explanation',
            contentAr: lesson.focusAr,
            contentEn: lesson.focusEn,
            tipsAr: ['اقرأ نص الدرس بعناية من كتاب الوزارة المدرسي.', 'طبق المفاهيم من خلال حل الأنشطة والتطبيقات.'],
            tipsEn: ['Read the official textbook carefully.', 'Apply concepts through hands-on practice.']
          },
          {
            titleAr: 'النشاط التطبيقي العملي',
            titleEn: 'Hands-on Activity',
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
            explanationAr: `الإجابة الصحيحة هي "${lesson.optionsAr[lesson.correctIndex]}"؛ وفق شروحات وتدريبات كتاب الوزارة.`,
            explanationEn: `Correct answer is "${lesson.optionsEn[lesson.correctIndex]}" based on official textbook guidelines.`
          }
        ],
        assessment: {
          id: `${id}-assessment`,
          lectureId: id,
          titleAr: `تقييم درس ${lesson.titleAr}`,
          titleEn: `Assessment for ${lesson.titleEn}`,
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
              explanationAr: `الإجابة الصحيحة هي "${lesson.optionsAr[lesson.correctIndex]}"؛ وفق شروحات وتدريبات كتاب الوزارة.`,
              explanationEn: `Correct answer is "${lesson.optionsEn[lesson.correctIndex]}" based on official textbook guidelines.`,
              difficulty: 'easy'
            }
          ]
        }
      };
    })
  );
}

// ---------------------------------------------------------------------------
// 1. Egyptian Primary English (Connect Series - كونكت 1 إلى 6)
// ---------------------------------------------------------------------------

const connectG1Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: من أكون؟ (Theme 1: Who Am I?)',
    unitTitleEn: 'Theme 1: Who Am I?',
    lessons: [
      {
        titleAr: 'الوحدة 1: أهلاً! (Hello!) - التحيات والتعارف',
        titleEn: 'Unit 1: Hello! - Greetings and Introductions',
        subtitleAr: 'التحيات: Hello, Goodbye, My name is... ونطق حرف B',
        subtitleEn: 'Greetings, personal introduction, and phonics sound /b/',
        focusAr: 'يتعلم التلميذ تقديم نفسه باللغة الإنجليزية: Hello! I am Hany. I am Amira. ونطق كلمات تبدأ بصوت /b/ مثل book, bag, bee.',
        focusEn: 'Students learn to introduce themselves: Hello! I am Hany. Phonics /b/: book, bag, blue, busy bee.',
        activityAr: 'تدريب المحادثة مع الأصدقاء: قل Hello! ثم اذكر اسمك، وحدد الأشياء التي تبدأ بحرف B.',
        activityEn: 'Practice speaking with peers: Say Hello, state your name, identify /b/ items.',
        questionAr: 'ما العبارة الصحيحة لتقديم نفسك بالإنجليزية؟',
        questionEn: 'What is the correct sentence to introduce yourself?',
        optionsAr: ['Hello, I am Adam.', 'Goodbye car.', 'Open the bag book.'],
        optionsEn: ['Hello, I am Adam.', 'Goodbye car.', 'Open the bag book.'],
        correctIndex: 0,
        vocabulary: [['مرحباً', 'Hello'], ['اسمي', 'My name is'], ['حقيبة', 'Bag'], ['كتاب', 'Book']]
      },
      {
        titleAr: 'الوحدة 2: هذا أنا وجسمي (This is me!)',
        titleEn: 'Unit 2: This is me! - Parts of the Body',
        subtitleAr: 'أجزاء الجسم: Nose, Eye, Ear, Hand, Mouth ونطق حرف N',
        subtitleEn: 'Body parts: Nose, Eye, Ear, Hand, Mouth and phonics /n/',
        focusAr: 'التعرف على أجزاء الوجه والجسم واستخدام: Touch your nose! Touch your mouth!',
        focusEn: 'Identify body parts and respond to commands: Touch your nose! Touch your ear!',
        activityAr: 'لعبة الأوامر الحركية: المس أنفك ثم أشر لعينيك وأذنك مع تكرار الكلمات بالإنجليزية.',
        activityEn: 'Simon says game: Touch your nose, point to eyes and ears while repeating English terms.',
        questionAr: 'ما الكلمة الإنجليزية التي تعني "أنف"؟',
        questionEn: 'Which English word means "أنف"?',
        optionsAr: ['Nose', 'Hand', 'Eye'],
        optionsEn: ['Nose', 'Hand', 'Eye'],
        correctIndex: 0,
        vocabulary: [['أنف', 'Nose'], ['عين', 'Eye'], ['أذن', 'Ear'], ['يد', 'Hand']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: العالم من حولي (Theme 2: The World Around Me)',
    unitTitleEn: 'Theme 2: The World Around Me',
    lessons: [
      {
        titleAr: 'الوحدة 3: في حقيبتي المدرسية (My School Bag)',
        titleEn: 'Unit 3: My School Bag - School Items & Numbers',
        subtitleAr: 'الأدوات المدرسية والأرقام من 1 إلى 5: Pen, Pencil, Ruler',
        subtitleEn: 'Classroom supplies and counting 1 to 5',
        focusAr: 'تسمية الأدوات المدرسية وعدها: One pen, two pencils, three rulers. استخدام: What is this? It is a pencil.',
        focusEn: 'Naming and counting school items: One pen, two pencils. Asking: What is this? It is a pen.',
        activityAr: 'أخرج أدواتك المدرسية وعدّها بالإنجليزية بصوت مرتفع.',
        activityEn: 'Take out your school items and count them aloud in English.',
        questionAr: 'ماذا نقول عند السؤال عن شيء غير عاقل قريب؟',
        questionEn: 'What do we ask about a near classroom object?',
        optionsAr: ['What is this?', 'Who are you?', 'Where do you go?'],
        optionsEn: ['What is this?', 'Who are you?', 'Where do you go?'],
        correctIndex: 0,
        vocabulary: [['قلم رصاص', 'Pencil'], ['مسطرة', 'Ruler'], ['واحد', 'One'], ['اثنان', 'Two']]
      },
      {
        titleAr: 'الوحدة 5: مع عائلتي (With my Family)',
        titleEn: 'Unit 5: With my Family - Family Members & Politeness',
        subtitleAr: 'أفراد الأسرة: Father, Mother, Brother, Sister وكلمات الشكر',
        subtitleEn: 'Family members and polite expressions',
        focusAr: 'تقديم أفراد الأسرة: This is my mother. This is my father. واستخدام عبارة الشكر: Thank you.',
        focusEn: 'Introducing family: This is my mother. This is my father. Practicing: Please and Thank you.',
        activityAr: 'ارسم شجرة عائلتك وأشر لكل فرد بالإنجليزية: This is my father/mother.',
        activityEn: 'Draw your family tree and introduce each member in English.',
        questionAr: 'من هي "Mother" باللغة العربية؟',
        questionEn: 'What is "Mother" in Arabic?',
        optionsAr: ['الأم', 'الأب', 'الأخ'],
        optionsEn: ['Mother', 'Father', 'Brother'],
        correctIndex: 0,
        vocabulary: [['أم', 'Mother'], ['أب', 'Father'], ['أخ', 'Brother'], ['أخت', 'Sister']]
      }
    ]
  }
];

const connectG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: اكتشف ذاتي (Theme 1: Discovering Myself)',
    unitTitleEn: 'Theme 1: Discovering Myself',
    lessons: [
      {
        titleAr: 'الوحدة 1: أشعر بأنني بحالة رائعة! (I feel good!) - الأطعمة وصحة الجسم',
        titleEn: 'Unit 1: I feel good! - Food, Digestion & Respiratory System',
        subtitleAr: 'الأطعمة المصرية، الجهاز الهضمي والتنفسي، واستخدام and / but',
        subtitleEn: 'Egyptian foods, digestive and respiratory systems, conjunctions and/but',
        focusAr: 'الأطعمة المنتجة في مصر (Rice, Onions, Potatoes, Chickens) ورحلة الطعام في الجهاز الهضمي (Stomach, Small intestine, Large intestine).',
        focusEn: 'Egyptian farm products and how food travels through our digestive and respiratory organs.',
        activityAr: 'ارسم مخطط مسار الطعام من الفم للمعدة، واكتب جملة مستخدماً الرابط and و but.',
        activityEn: 'Trace the path of digestion and write compound sentences using and/but.',
        questionAr: 'ما العضو الذي يهضم الطعام ويمزجه بالعصارة الهضمية؟',
        questionEn: 'Which organ churns food with special digestive liquids?',
        optionsAr: ['Stomach (المعدة)', 'Lungs (الرئتان)', 'Bones (العظام)'],
        optionsEn: ['Stomach', 'Lungs', 'Bones'],
        correctIndex: 0,
        vocabulary: [['جهاز هضمي', 'Digestive system'], ['معدة', 'Stomach'], ['رئتان', 'Lungs'], ['يمضغ', 'Chew']]
      },
      {
        titleAr: 'الوحدة 2: حيوانات الصحراء (Desert Animals) - المقارنة والتكيف',
        titleEn: 'Unit 2: Desert Animals - Camels, Fennec Fox & Comparatives',
        subtitleAr: 'ثعلب الفنك، الجمل، النسور، وصيغ المقارنة: Short adjective + -er + than',
        subtitleEn: 'Fennec fox, camels, eagles, and comparative adjectives',
        focusAr: 'تكيف الحيوانات الصحراوية: ثعلب الفنك ذو الآذان الكبيرة، والجمل ذو الخف المسطح. تكوين المقارنة: The camel is bigger than the fox.',
        focusEn: 'Desert animal adaptations and comparative grammar: The camel is heavier than the horse.',
        activityAr: 'قارن بين ثعلب الفنك والنسر في الحجم والسرعة مستخدماً صفات المقارنة.',
        activityEn: 'Compare the fennec fox and the eagle using comparative adjectives.',
        questionAr: 'ما صيغة المقارنة الصحيحة بين الفيل والجمل في الحجم؟',
        questionEn: 'What is the correct comparative sentence?',
        optionsAr: ['The elephant is bigger than the camel.', 'The elephant is big than the camel.', 'The elephant biggest camel.'],
        optionsEn: ['The elephant is bigger than the camel.', 'The elephant is big than the camel.', 'The elephant biggest camel.'],
        correctIndex: 0,
        vocabulary: [['ثعلب الفنك', 'Fennec fox'], ['جمل', 'Camel'], ['أكبر من', 'Bigger than'], ['فراء سميك', 'Thick fur']]
      },
      {
        titleAr: 'الوحدة 3: لماذا النباتات خضراء؟ (Why are plants green?) - دورة حياة النبات',
        titleEn: 'Unit 3: Why are plants green? - Plant Life Cycle & Superlatives',
        subtitleAr: 'إنبات البذور، حبوب اللقاح، صيغة التفضيل: The + adjective + -est',
        subtitleEn: 'Germination, plant parts, pollinators, and superlative adjectives',
        focusAr: 'أجزاء النبات (Roots, Stem, Leaves, Flower)، عملية الإنبات (Germination)، وصيغ التفضيل العليا: The sunflower is the heaviest flower.',
        focusEn: 'Plant lifecycle, photosynthesis, and superlative adjectives: The rose is the most beautiful flower.',
        activityAr: 'رتب مراحل إنبات حبة الفول من البذرة إلى الإزهار.',
        activityEn: 'Sequence the stages of bean germination from seed to flowering plant.',
        questionAr: 'ما الجزء الذي ينمو تحت التربة ويمتص الماء والأملاح؟',
        questionEn: 'Which plant part grows under the soil to absorb water?',
        optionsAr: ['Roots (الجذور)', 'Leaves (الأوراق)', 'Stem (الساق)'],
        optionsEn: ['Roots', 'Leaves', 'Stem'],
        correctIndex: 0,
        vocabulary: [['جذور', 'Roots'], ['إنبات', 'Germination'], ['أوراق الشجر', 'Leaves'], ['بذور', 'Seeds']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: العالم من حولي (Theme 2: The World Around Me)',
    unitTitleEn: 'Theme 2: The World Around Me',
    lessons: [
      {
        titleAr: 'الوحدة 4: أين تعيش؟ (Where do you live?) - المنازل والبيئات',
        titleEn: 'Unit 4: Where do you live? - Homes, Rooms & Prepositions',
        subtitleAr: 'أنواع البيوت (House, Apartment, Tent, Houseboat) وحروف الجر المكانية',
        subtitleEn: 'Types of homes and prepositions of place (in, on, under, next to, between)',
        focusAr: 'وصف البيوت والغرف المختلفة في مصر (Apartment building, Floating home, Bedouin tent). حروف المكان: next to, behind, in front of.',
        focusEn: 'Describing dwellings across Egypt and using prepositions of place.',
        activityAr: 'صف غرفتك أو منزلك وحدد موقع السرير والمكتب باستخدام حروف الجر المكانية.',
        activityEn: 'Describe your room and position of furniture using spatial prepositions.',
        questionAr: 'ما الكلمة التي تعني "منزل عائم في النيل"؟',
        questionEn: 'Which word means a floating house on the river?',
        optionsAr: ['Houseboat', 'Tent', 'Cave'],
        optionsEn: ['Houseboat', 'Tent', 'Cave'],
        correctIndex: 0,
        vocabulary: [['منزل عائم', 'Houseboat'], ['شقة سكنية', 'Apartment'], ['بجوار', 'Next to'], ['بين', 'Between']]
      },
      {
        titleAr: 'الوحدة 5: من أين يأتي؟ (Where does it come from?) - الوظائف والطاقة',
        titleEn: 'Unit 5: Where does it come from? - Electricians, Plumbers & Connectors',
        subtitleAr: 'المهن الحرفية (Plumber, Electrician, Bus driver) ودوائر الكهرباء بأمان',
        subtitleEn: 'Trades, utilities, and electrical safety',
        focusAr: 'أهمية كل مهنة في مجتمعنا: السباك يصلح المواسير، والكهربائي يوصل التيار بأمان دون لمس الأسلاك العارية.',
        focusEn: 'Community helpers: plumbers, electricians, bus drivers, and home safety rules.',
        activityAr: 'اربط كل أداة بصاحب المهنة الذي يستخدمها في إصلاح وصيانة المنزل.',
        activityEn: 'Match utility tools to the craftsman who uses them.',
        questionAr: 'من يقوم بتوصيل الكهرباء حتى تعمل المصابيح والأجهزة؟',
        questionEn: 'Who connects electricity so lights and appliances work?',
        optionsAr: ['An electrician', 'A plumber', 'A mail carrier'],
        optionsEn: ['An electrician', 'A plumber', 'A mail carrier'],
        correctIndex: 0,
        vocabulary: [['كهربائي', 'Electrician'], ['سباك', 'Plumber'], ['أمان كهربائي', 'Electrical safety'], ['مقبس', 'Socket']]
      }
    ]
  }
];

const connectG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: العلاقات والبيئة (Theme 1: Relationships & Environment)',
    unitTitleEn: 'Theme 1: Relationships & Environment',
    lessons: [
      {
        titleAr: 'الوحدة 1: المدن الخضراء (Green Cities) - حدائق الأسطح والمجتمع',
        titleEn: 'Unit 1: Green Cities - Community Roof Gardens & Present Simple',
        subtitleAr: 'زراعة أسطح المباني، الهواء النقي، وظروف التكرار: always, usually, often, never',
        subtitleEn: 'Roof gardens, local community action, and adverbs of frequency',
        focusAr: 'مشروع حديقة السطح الخضراء (Roof garden) لمساعدة البيئة وتوفير خضراوات طازجة وتنقية الهواء. استخدام ظروف التكرار مع المضارع البسيط.',
        focusEn: 'Community roof gardens for urban agriculture and adverbs of frequency in present simple.',
        activityAr: 'اكتب 3 جمل عن عاداتك البيئية اليومية مستخدماً ظروف التكرار.',
        activityEn: 'Write 3 sentences about your daily eco habits using adverbs of frequency.',
        questionAr: 'أين يوضع ظرف التكرار (always / usually) بالنسبة للفعل الأساسي؟',
        questionEn: 'Where do frequency adverbs go relative to main verbs?',
        optionsAr: ['قبل الفعل الأساسي (Before the main verb)', 'بعد الفعل الأساسي دائماً', 'في نهاية الجملة حصراً'],
        optionsEn: ['Before main verb', 'Always after main verb', 'Exclusively at the end'],
        correctIndex: 0,
        vocabulary: [['حديقة على السطح', 'Roof garden'], ['سماد عضوي', 'Natural fertilizer'], ['دائماً', 'Always'], ['أبداً', 'Never']]
      },
      {
        titleAr: 'الوحدة 2: نحن جميعاً مختلفون (We are all different) - الصفات والشخصية',
        titleEn: 'Unit 2: We are all different - Personality & Relative Pronouns',
        subtitleAr: 'صفات الشخصية (Kind, Polite, Shy, Clever) والضمائر الموصولة: who, which, where',
        subtitleEn: 'Describing character and using relative pronouns (who, which, where)',
        focusAr: 'وصف الشخصيات والاهتمامات واستخدام الضمائر الموصولة: The teacher who helped me, the park where we play, the book which I read.',
        focusEn: 'Character descriptions and relative clauses with who (people), which (things), and where (places).',
        activityAr: 'أكمل الجمل بالضمير الموصول المناسب: who أو which أو where.',
        activityEn: 'Complete sentences with who, which, or where.',
        questionAr: 'ما الضمير الموصول المستخدم للإشارة إلى المكان؟',
        questionEn: 'Which relative pronoun refers to places?',
        optionsAr: ['Where', 'Who', 'Which'],
        optionsEn: ['Where', 'Who', 'Which'],
        correctIndex: 0,
        vocabulary: [['مؤدب', 'Polite'], ['خجول', 'Shy'], ['الذي للشخص', 'Who'], ['حيث للمكان', 'Where']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: التاريخ والابتكار (Theme 2: History & Innovation)',
    unitTitleEn: 'Theme 2: History & Innovation',
    lessons: [
      {
        titleAr: 'الوحدة 3: ذكريات الإجازة (Vacation Memories) - الماضي البسيط والسياحة',
        titleEn: 'Unit 3: Vacation Memories - Past Simple & Egyptian Heritage',
        subtitleAr: 'المعالم السياحية في مصر، الأفعال المنتظمة وغير المنتظمة في الماضي',
        subtitleEn: 'Historical trips, regular and irregular verbs in the past simple',
        focusAr: 'زيارة المعالم المصرية (Luxor, Aswan, Pyramids, Alexandria Library) وصياغة الماضي البسيط: We visited Luxor and saw the ancient temples.',
        focusEn: 'Travel narratives in Egypt and narrative past tense structures.',
        activityAr: 'اكتب فقرة قصيرة عن رحلة قمت بها إلى مكان تاريخي في مصر مستخدماً زمن الماضي البسيط.',
        activityEn: 'Write a short journal entry about a historical visit using past simple.',
        questionAr: 'ما الماضي الصحيح للفعل غير المنتظم (go)؟',
        questionEn: 'What is the past simple form of "go"?',
        optionsAr: ['Went', 'Goed', 'Going'],
        optionsEn: ['Went', 'Goed', 'Going'],
        correctIndex: 0,
        vocabulary: [['رحلة تاريخية', 'Historical trip'], ['معبد قديم', 'Ancient temple'], ['ذهب', 'Went'], ['شاهد', 'Saw']]
      },
      {
        titleAr: 'الوحدة 5: تكنولوجيا مذهلة (Amazing Technology) - المستقبل والذكاء الاصطناعي',
        titleEn: 'Unit 5: Amazing Technology - Future with will, AI & Inventions',
        subtitleAr: 'تطبيقات الذكاء الاصطناعي، الأجهزة الذكية، وصياغة المستقبل: will + infinitive',
        subtitleEn: 'AI apps, smart devices, and expressing predictions with will',
        focusAr: 'كيف ستغير التكنولوجيا الحديثة التعليم والطب وحماية البيئة. التنبؤ بالمستقبل: Robots will help doctors. Clean energy will power electric cars.',
        focusEn: 'Future technologies, artificial intelligence in daily life, and will for predictions.',
        activityAr: 'تخيل اختراعاً ذكياً في عام 2050 واشرح ما سيفعله مستخدماً will.',
        activityEn: 'Envision a smart 2050 invention and describe it using will.',
        questionAr: 'كيف نصيغ جملة التنبؤ بالمستقبل مع الفعل (help)؟',
        questionEn: 'How do we form a future prediction with "help"?',
        optionsAr: ['Robots will help us.', 'Robots helping us.', 'Robots helps us.'],
        optionsEn: ['Robots will help us.', 'Robots helping us.', 'Robots helps us.'],
        correctIndex: 0,
        vocabulary: [['ذكاء اصطناعي', 'Artificial intelligence'], ['مستقبل', 'Future'], ['روبوت', 'Robot'], ['سوف يساعد', 'Will help']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 2. Egyptian Primary ICT (تكنولوجيا المعلومات والاتصالات - الصفوف 4، 5، 6)
// ---------------------------------------------------------------------------

const ictG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: دور تكنولوجيا المعلومات في حياتنا',
    unitTitleEn: 'Theme 1: The Role of ICT in Our Lives',
    lessons: [
      {
        titleAr: 'المستكشف النشط: د. ألبرت لين وأدوات الاستكشاف الرقمية',
        titleEn: 'Active Explorer: Dr. Albert Lin & Digital Tools',
        subtitleAr: 'استخدام الرادار المخترق للأرض ومقياس المغناطيسية والـ GPS في التنقيب دون حفر',
        subtitleEn: 'Ground Penetrating Radar, Magnetometer, and GPS in non-destructive archaeology',
        focusAr: 'كيف يستخدم علماء الآثار التكنولوجيا الحديثة لاكتشاف الآثار المدفونة بدقة ودون الإضرار بالأرض عبر الرادار ومقياس المغناطيسية ونظام تحديد المواقع العالمي (GPS).',
        focusEn: 'How scientists explore buried heritage using GPR, magnetometers, and GPS without digging.',
        activityAr: 'طابق بين كل أداة تكنولوجية ووظيفتها في استكشاف ما فوق الأرض وما تحتها.',
        activityEn: 'Match each digital tool with its archaeological exploration function.',
        questionAr: 'أي جهاز يُستخدم للعثور على المعادن المدفونة في باطن الأرض؟',
        questionEn: 'Which device is used to find underground metals?',
        optionsAr: ['مقياس المغناطيسية (Magnetometer)', 'الطابعة (Printer)', 'الفأرة (Mouse)'],
        optionsEn: ['Magnetometer', 'Printer', 'Mouse'],
        correctIndex: 0,
        vocabulary: [['مقياس المغناطيسية', 'Magnetometer'], ['رادار مخترق للأرض', 'GPR'], ['نظام تحديد المواقع', 'GPS'], ['استكشاف', 'Exploration']]
      },
      {
        titleAr: 'مكونات جهاز الكمبيوتر وأجهزة الإدخال والإخراج',
        titleEn: 'Computer Components: Input and Output Devices',
        subtitleAr: 'لوحة المفاتيح، الفأرة، الميكروفون، الشاشة، مكبر الصوت، ومركب الكلام',
        subtitleEn: 'Keyboards, mouse, microphone, monitor, speakers, and speech synthesizers',
        focusAr: 'التمييز بين أجهزة الإدخال (تدخل البيانات للكمبيوتر) وأجهزة الإخراج (تخرج المعلومات للمستخدم)، والتكنولوجيا المساعدة لذوي الهمم كمركب الكلام وشاشة برايل.',
        focusEn: 'Distinguishing input vs output hardware, and assistive tech like speech synthesizers.',
        activityAr: 'صنف بطاقات الأجهزة إلى وحدات إدخال ووحدات إخراج.',
        activityEn: 'Categorize computer peripheral cards into input and output units.',
        questionAr: 'تعتبر الشاشة (Monitor) من أجهزة:',
        questionEn: 'The computer monitor is an:',
        optionsAr: ['الإخراج (Output)', 'الإدخال (Input)', 'التخزين الحركي'],
        optionsEn: ['Output device', 'Input device', 'Kinetic storage'],
        correctIndex: 0,
        vocabulary: [['وحدات إدخال', 'Input devices'], ['وحدات إخراج', 'Output devices'], ['تكنولوجيا مساعدة', 'Assistive technology'], ['مركب الكلام', 'Speech synthesizer']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: احتياطات السلامة الرقمية والمواطنة',
    unitTitleEn: 'Theme 2: Digital Safety and Citizenship',
    lessons: [
      {
        titleAr: 'المخاطر المرتبطة بشبكة الإنترنت وكيفية تجنبها',
        titleEn: 'Internet Hazards & Safe Online Navigation',
        subtitleAr: 'التنمر الرقمي، سرقة الهوية، الرسائل المجهولة، واستشارة الوالدين والمعلم',
        subtitleEn: 'Cyberbullying, identity theft, spam messages, and trusted adult guidance',
        focusAr: 'التعامل الآمن مع الإنترنت: عدم التحدث مع الغرباء، تجنب مشاركة البيانات الشخصية كعنوان المنزل ورقم الهاتف، والإبلاغ فوراً عند مواجهة تنمر إلكتروني.',
        focusEn: 'Digital hygiene: guarding privacy, resisting cyberbullying, and notifying adults.',
        activityAr: 'ضع علامة صح أمام التصرف الرقمي السليم وعلامة خطأ أمام التصرف الخطر.',
        activityEn: 'Mark safe versus hazardous digital behaviors.',
        questionAr: 'ما التصرف الصحيح عند تلقي رسالة مجهولة تطلب كلمة مرورك أو عنوان منزلك؟',
        questionEn: 'What is the correct action when receiving an unknown message asking for personal info?',
        optionsAr: ['حظر المرسل وإبلاغ ولي الأمر فوراً', 'إرسال العنوان والبيانات', 'مشاركتها مع جميع الأصدقاء'],
        optionsEn: ['Block sender and report to parents', 'Send private details', 'Share with friends'],
        correctIndex: 0,
        vocabulary: [['تنمر إلكتروني', 'Cyberbullying'], ['بيانات شخصية', 'Personal data'], ['أمان رقمي', 'Digital safety'], ['حظر', 'Block']]
      },
      {
        titleAr: 'إنشاء كلمات مرور قوية وحماية الحسابات',
        titleEn: 'Creating Strong Passwords & Account Protection',
        subtitleAr: 'قواعد كلمة المرور (حروف كبيرة وصغيرة وأرقام ورموز ولا تقل عن 8 خانات)',
        subtitleEn: 'Password strength rules: 8+ characters, uppercase, numbers, and symbols',
        focusAr: 'كيفية إنشاء كلمة مرور قوية يصعب تخمينها أو اختراقها، وتجنب استخدام اسمك أو تاريخ ميلادك، واستخدام كلمات مرور مختلفة لكل حساب.',
        focusEn: 'Constructing robust passwords with varied characters and using distinct credentials across apps.',
        activityAr: 'قم بتركيب كلمة مرور قوية باتباع شروط الأمان الأربعة وافحص مدى قوتها.',
        activityEn: 'Construct a strong multi-character password following four security rules.',
        questionAr: 'أي من الكلمات التالية تمثل كلمة مرور قوية وآمنة؟',
        questionEn: 'Which password is secure and strong?',
        optionsAr: ['Eg#2024!Smart', '12345678', 'ahmed123'],
        optionsEn: ['Eg#2024!Smart', '12345678', 'ahmed123'],
        correctIndex: 0,
        vocabulary: [['كلمة مرور قوية', 'Strong password'], ['أمن الحساب', 'Account security'], ['رموز خاصة', 'Special characters'], ['قرصنة', 'Hacking']]
      }
    ]
  }
];

const ictG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: البنية التحتية والشبكات والذكاء الاصطناعي',
    unitTitleEn: 'Theme 1: Infrastructure, Networks & AI',
    lessons: [
      {
        titleAr: 'شبكات الكمبيوتر وأنواعها وأجهزة الاتصال',
        titleEn: 'Computer Networks, Modems & Switches',
        subtitleAr: 'الشبكة السلكية (Wired) واللاسلكية (Wi-Fi)، المحول (Switch) والمودم (Modem)',
        subtitleEn: 'Wired vs wireless LANs, network switches, and modems',
        focusAr: 'كيفية ربط أجهزة الكمبيوتر لتبادل البيانات: شبكات LAN، دور المودم في تحويل إشارة الإنترنت، ودور المحول الذكي في إرسال البيانات للجهاز المعني فقط.',
        focusEn: 'Connecting systems via local area networks, broadband modems, and packet switches.',
        activityAr: 'ارسم خريطة شبكة منزلية توضح مسار الإنترنت من كابل الهاتف إلى المودم والأجهزة.',
        activityEn: 'Draw a home network diagram tracking connectivity from line to modem to client devices.',
        questionAr: 'ما الجهاز الذي يربط شبكتك المحلية بالإنترنت ويحول إشارة مزود الخدمة؟',
        questionEn: 'Which hardware device connects your home network to the ISP internet signal?',
        optionsAr: ['المودم (Modem)', 'السماعة (Speaker)', 'الماسح الضوئي (Scanner)'],
        optionsEn: ['Modem', 'Speaker', 'Scanner'],
        correctIndex: 0,
        vocabulary: [['شبكة محلية', 'LAN'], ['مودم', 'Modem'], ['محول شبكة', 'Switch'], ['كابل سلكي', 'Wired cable']]
      },
      {
        titleAr: 'الحوسبة السحابية والتخزين السحابي (Cloud Computing)',
        titleEn: 'Cloud Computing & Online Storage Solutions',
        subtitleAr: 'تخزين الملفات على خوادم الإنترنت، مزايا الحوسبة السحابية، ونسخ البيانات احتياطياً',
        subtitleEn: 'Storing files on remote internet servers, benefits, and automated backups',
        focusAr: 'مفهوم السحابة (Cloud): الوصول إلى ملفاتك وتطبيقاتك من أي مكان وأي جهاز عبر الإنترنت، والمشاركة والتعاون الجماعي في تحرير المستندات بأمان.',
        focusEn: 'Cloud platforms for ubiquitous access, cooperative authoring, and redundant data backup.',
        activityAr: 'قم بإنشاء مجلد مشترك تجريبي وتعرف على خطوات مشاركة رابط الملف وتحديد الصلاحيات.',
        activityEn: 'Practice file sharing configurations and read/write permission levels.',
        questionAr: 'ما الفائدة الكبرى للتخزين السحابي (Cloud Storage)؟',
        questionEn: 'What is the primary advantage of cloud storage?',
        optionsAr: ['الوصول إلى ملفاتك من أي جهاز متصل بالإنترنت', 'جعل الكمبيوتر أثقل وزناً', 'منع الاتصال بالإنترنت'],
        optionsEn: ['Access files anywhere with internet', 'Make computers heavier', 'Block internet'],
        correctIndex: 0,
        vocabulary: [['حوسبة سحابية', 'Cloud computing'], ['خادم بعيد', 'Remote server'], ['نسخ احتياطي', 'Backup'], ['مشاركة الملفات', 'File sharing']]
      },
      {
        titleAr: 'تطبيقات الذكاء الاصطناعي (AI) وأخلاقيات استخدامه',
        titleEn: 'Artificial Intelligence (AI) Applications & Ethics',
        subtitleAr: 'كيف يتعلم الذكاء الاصطناعي من البيانات، المساعد الصوتي، وأخلاقيات النزاهة',
        subtitleEn: 'How machine learning models train on datasets, virtual assistants, and integrity',
        focusAr: 'مفهوم الذكاء الاصطناعي كقدرة الآلات على محاكاة التفكير البشري وحل المشكلات، واستخدامه كأداة مساعدة مع الالتزام بعدم الاعتماد التام عليه والتحقق من صحة مخرجاته.',
        focusEn: 'AI as machine intelligence augmenting human tasks; ethics of verifying AI-generated output.',
        activityAr: 'جرب صياغة أمر بحثي (Prompt) مفصل وافحص الإجابة للتأكد من خلوها من الأخطاء.',
        activityEn: 'Draft an effective prompting query and critique the output for accuracy.',
        questionAr: 'ما الموقف الصحيح تجاه المعلومات التي يولدها الذكاء الاصطناعي؟',
        questionEn: 'What is the correct attitude towards AI-generated content?',
        optionsAr: ['التأكد من صحتها ومراجعتها من مصادر موثوقة', 'تصديقها فوراً دون تفكير', 'حذف جميع الكتب المدرسية'],
        optionsEn: ['Fact-check using trusted sources', 'Accept blindly without scrutiny', 'Delete all textbooks'],
        correctIndex: 0,
        vocabulary: [['ذكاء اصطناعي', 'Artificial intelligence'], ['أمر توجيهي', 'Prompt'], ['أخلاقيات رقمية', 'Digital ethics'], ['تعلم الآلة', 'Machine learning']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: الأمن السيبراني والمواطنة الرقمية',
    unitTitleEn: 'Theme 2: Cybersecurity & Digital Citizenship',
    lessons: [
      {
        titleAr: 'الأمن السيبراني وحماية الأجهزة من البرمجيات الخبيثة',
        titleEn: 'Cybersecurity & Protection Against Malware',
        subtitleAr: 'مضادات الفيروسات، تحديث أنظمة التشغيل، والمصادقة متعددة العوامل (MFA)',
        subtitleEn: 'Antivirus tools, OS patching, and multi-factor authentication (MFA)',
        focusAr: 'حماية البيانات الشخصية عبر برامج الحماية، تحديث التطبيقات بانتظام لسد الثغرات الأمنية، واستخدام المصادقة الثنائية لحماية الحسابات البنكية والتعليمية.',
        focusEn: 'Defense against malware through updated security patches, antivirus scanning, and 2FA.',
        activityAr: 'افحص إعدادات أمان هاتفك أو حاسوبك وتحقق من تفعيل التحديثات التلقائية.',
        activityEn: 'Inspect device security settings and verify automated patch updates.',
        questionAr: 'ما هي المصادقة متعددة العوامل (Multi-Factor Authentication)؟',
        questionEn: 'What is Multi-Factor Authentication (MFA)?',
        optionsAr: ['تأكيد الهوية عبر خطوتين مثل كلمة المرور ورمز يرسل للهاتف', 'كتابة كلمة المرور فقط', 'إلغاء كلمة المرور تماماً'],
        optionsEn: ['Two-step identity proof (password + SMS code)', 'Single password only', 'No security credentials'],
        correctIndex: 0,
        vocabulary: [['أمن سيبراني', 'Cybersecurity'], ['برمجيات خبيثة', 'Malware'], ['مصادقة ثنائية', 'MFA'], ['تحديث النظام', 'System update']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. Egyptian Primary Geography & History (الدراسات الاجتماعية - الصفوف 4، 5، 6)
// ---------------------------------------------------------------------------

const geographyG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: البيئة الطبيعية والموقع الجغرافي لمصر',
    unitTitleEn: 'Theme 1: Physical Geography & Egypt Location',
    lessons: [
      {
        titleAr: 'موقع مصر الجغرافي وأهميته العالمية',
        titleEn: 'Egypt Geographic Location & Global Importance',
        subtitleAr: 'قلب العالم القديم، ملتقى قارات إفريقيا وآسيا وأوروبا، وقناة السويس',
        subtitleEn: 'Heart of the Old World, crossroads of continents, and the Suez Canal',
        focusAr: 'تتميز مصر بموقع استراتيجي فريد في الركن الشمالي الشرقي لقارة إفريقيا، وتطل على بحرين هامين (المتوسط والأحمر)، وزادت أهميتها بحفر قناة السويس وقناة السويس الجديدة.',
        focusEn: 'Egypt strategic position at northeastern Africa, Red and Mediterranean Seas, and Suez Canal.',
        activityAr: 'حدد على خريطة مصر موقع البحر المتوسط والبحر الأحمر وقناة السويس ونهر النيل.',
        activityEn: 'Pinpoint the Mediterranean, Red Sea, Suez Canal, and Nile River on the Egypt map.',
        questionAr: 'في أي ركن من قارة إفريقيا تقع جمهورية مصر العربية؟',
        questionEn: 'In which part of the African continent is Egypt located?',
        optionsAr: ['الشمالي الشرقي', 'الجنوبي الغربي', 'الوسطى'],
        optionsEn: ['Northeastern', 'Southwestern', 'Central'],
        correctIndex: 0,
        vocabulary: [['موقع جغرافي', 'Geographic location'], ['قناة السويس', 'Suez Canal'], ['قارات العالم القديم', 'Old World'], ['مضيق وقناة', 'Canal']]
      },
      {
        titleAr: 'البيئات المصرية وخصائصها الطبيعية',
        titleEn: 'Egyptian Natural Environments & Characteristics',
        subtitleAr: 'البيئة الزراعية (وادي النيل والدلتا)، البيئة الساحلية، والبيئة الصحراوية',
        subtitleEn: 'Agricultural (Nile Valley & Delta), Coastal, and Desert environments',
        focusAr: 'تنوع البيئات في مصر: البيئة الزراعية الغنية بالطمي الصالح للزراعة، البيئة الساحلية على البحرين، والبيئة الصحراوية الغنية بالمعادن والواحات والرمال البيضاء والصفراء.',
        focusEn: 'Diversity of Egyptian biomes: fertile agricultural valley, coastal shorelines, and mineral-rich deserts.',
        activityAr: 'قارن في جدول بين البيئة الزراعية والبيئة الصحراوية من حيث السطح وأهم الأنشطة.',
        activityEn: 'Tabulate differences between Nile agricultural and desert geographic features.',
        questionAr: 'أين تتركز البيئة الزراعية الفيضية في مصر؟',
        questionEn: 'Where is the fertile agricultural valley concentrated in Egypt?',
        optionsAr: ['وادي النيل والدلتا ومنخفض الفيوم', 'الصحراء الغربية فقط', 'جبال البحر الأحمر'],
        optionsEn: ['Nile Valley, Delta & Fayoum', 'Western desert only', 'Red Sea mountains'],
        correctIndex: 0,
        vocabulary: [['بيئة زراعية', 'Agricultural biome'], ['بيئة ساحلية', 'Coastal biome'], ['بيئة صحراوية', 'Desert biome'], ['دلتا النيل', 'Nile Delta']]
      }
    ]
  }
];

const historyG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: الهوية الوطنية والشخصيات المصرية الخالدة',
    unitTitleEn: 'Theme 1: National Identity & Historical Figures',
    lessons: [
      {
        titleAr: 'علم مصر وشعارها والأعياد القومية للمحافظات',
        titleEn: 'The Egyptian Flag, National Emblem & Local Holidays',
        subtitleAr: 'ألوان العلم ودلالاتها (الأحمر، الأبيض، الأسود، النسر الذهبي)، واحترام العلم',
        subtitleEn: 'Symbolism of flag colors, golden eagle, and patriotic civic respect',
        focusAr: 'دلالات ألوان علم مصر: الأحمر للدم والشهداء، الأبيض للسلام، الأسود لعصور الظلم والاستعمار، والنسر الذهبي المأخوذ من نسر صلاح الدين رمز القوة والعزة.',
        focusEn: 'Significance of Egyptian flag colors: red sacrifice, white peace, black colonial defiance, golden eagle.',
        activityAr: 'ارسم علم مصر بالألوان الصحيحة واكتب جملة تعبر عن واجبك تجاه احترام علم وطنك.',
        activityEn: 'Color the national flag and articulate civic duties toward national symbols.',
        questionAr: 'ماذا يرمز النسر الموجود في وسط علم مصر؟',
        questionEn: 'What does the golden eagle at the center of the flag represent?',
        optionsAr: ['القوة وعراقة الحضارة المصرية', 'ضعف الدولة', 'المساحات الزراعية فقط'],
        optionsEn: ['Strength and venerable heritage', 'Weakness', 'Farmland only'],
        correctIndex: 0,
        vocabulary: [['علم مصر', 'Egyptian flag'], ['نسر صلاح الدين', 'Eagle of Saladin'], ['شعار وطني', 'National emblem'], ['سلام', 'Peace']]
      },
      {
        titleAr: 'شخصيات مصرية مؤثرة: جمال حمدان وطلعت حرب',
        titleEn: 'Influential Egyptian Figures: Gamal Hemdan & Talaat Harb',
        subtitleAr: 'عالم الجغرافيا صاحب كتاب "شخصية مصر"، ومؤسس بنك مصر الوطني',
        subtitleEn: 'Geographer Gamal Hemdan ("Personality of Egypt") and Talaat Harb (Bank Misr founder)',
        focusAr: 'دراسة سيرة المفكر د. جمال حمدان الذي وثق عبقرية مكان مصر، والاقتصادي طلعت حرب الذي أسس بنك مصر لدعم المشروعات الوطنية وتحرير الاقتصاد المصري.',
        focusEn: 'Achievements of Dr. Gamal Hemdan on Egyptian geography and Talaat Harb founding national industries.',
        activityAr: 'اكتب بطاقة تعريفية بالمشروعات التي أنشأها طلعت حرب كشركة مصر للطيران ومصر للغزل والنسيج.',
        activityEn: 'Compile a brief fact file on companies established by Talaat Harb.',
        questionAr: 'ما المؤسسة المالية الوطنية الكبرى التي أسسها طلعت حرب عام 1920؟',
        questionEn: 'Which landmark financial institution was founded by Talaat Harb in 1920?',
        optionsAr: ['بنك مصر', 'هيئة البريد', 'متحف الآثار'],
        optionsEn: ['Bank Misr', 'Postal Authority', 'Antiquities Museum'],
        correctIndex: 0,
        vocabulary: [['طلعت حرب', 'Talaat Harb'], ['جمال حمدان', 'Gamal Hemdan'], ['بنك مصر', 'Bank Misr'], ['اقتصاد وطني', 'National economy']]
      }
    ]
  }
];

const geographyG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: جغرافية البيئات المصرية والتنمية المستدامة',
    unitTitleEn: 'Theme 1: Egyptian Biomes & Sustainable Development',
    lessons: [
      {
        titleAr: 'البيئة الزراعية في مصر والأنشطة الاقتصادية المرتبطة بها',
        titleEn: 'Agricultural Environment & Economic Activities in Egypt',
        subtitleAr: 'الزراعة المروية، مشكلات تجريف التربة، والزحف العمراني وجهود الدولة',
        subtitleEn: 'Irrigated farming, soil scraping issues, urban encroachment, and reclamation projects',
        focusAr: 'خصائص البيئة الزراعية الفيضية ومصادر الري من نهر النيل، والصناعات الحرفية كالسجاد اليدوي والفخار، ومواجهة تجريف التربة عبر التشريعات والمشروعات القومية كتوشكى والدلتا الجديدة.',
        focusEn: 'Nile irrigation dynamics, cottage agro-industries, and reclamation megaprojects like New Delta.',
        activityAr: 'اقترح ثلاثة حلول مبتكرة للحد من إهدار مياه الري في الأراضي الزراعية.',
        activityEn: 'Propose three modern irrigation practices to conserve agricultural water.',
        questionAr: 'ما المشروع القومي الحديث الذي يهدف لاستصلاح ملايين الأفدنة في الساحل الشمالي الغربي؟',
        questionEn: 'Which agricultural reclamation megaproject is in the northwest?',
        optionsAr: ['مشروع الدلتا الجديدة', 'السد العالي قديماً', 'حفر قناة السويس'],
        optionsEn: ['New Delta Project', 'Aswan Dam', 'Suez Canal digging'],
        correctIndex: 0,
        vocabulary: [['بيئة زراعية', 'Agricultural biome'], ['الدلتا الجديدة', 'New Delta'], ['ري حديث', 'Modern irrigation'], ['تجريف التربة', 'Soil erosion']]
      },
      {
        titleAr: 'البيئة الصحراوية ومصادر الطاقة والتعدين في مصر',
        titleEn: 'Desert Environment: Minerals, Energy & Sustainable Ecotourism',
        subtitleAr: 'الصحراء الغربية والشرقية وشبه جزيرة سيناء، المياه الجوفية، والطاقة الشمسية',
        subtitleEn: 'Western & Eastern deserts, Sinai, groundwater oases, solar energy (Benban)',
        focusAr: 'الموارد الطبيعية في صحاري مصر: الحديد بالواحات البحرية، الفوسفات بأبو طرطور، المنجنيز بسيناء، ومشروعات الطاقة المتجددة كمحطة بنبان للطاقة الشمسية بأسوان ومزرعة رياح الزعفرانة.',
        focusEn: 'Mineral wealth across Egyptian deserts and clean energy production in Benban solar park.',
        activityAr: 'حدد على خريطة مصر مواقع أهم المعادن ومحطات الطاقة المتجددة في الصحراء.',
        activityEn: 'Map locations of major mineral deposits and green energy installations.',
        questionAr: 'أين تقع أكبر محطة لإنتاج الطاقة الشمسية في مصر وإفريقيا (محطة بنبان)؟',
        questionEn: 'Where is the Benban solar park situated?',
        optionsAr: ['محافظة أسوان', 'محافظة الإسكندرية', 'محافظة مطروح'],
        optionsEn: ['Aswan Governorate', 'Alexandria', 'Matrouh'],
        correctIndex: 0,
        vocabulary: [['طاقة متجددة', 'Renewable energy'], ['محطة بنبان', 'Benban solar park'], ['تعدين', 'Mining'], ['واحات', 'Oases']]
      }
    ]
  }
];

const historyG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: تاريخ مصر الحديث وبطولات الشعب والجيش',
    unitTitleEn: 'Theme 1: Modern Egyptian History & National Triumphs',
    lessons: [
      {
        titleAr: 'ثورة 1919 والزعيم سعد زغلول والوحدة الوطنية',
        titleEn: 'The 1919 Revolution: Saad Zaghloul & National Unity',
        subtitleAr: 'مواجهة الاحتلال البريطاني، حركة الوفد المصري، وتكاتف المسلمين والمسيحيين',
        subtitleEn: 'Defiance against British rule, Wafd party, and interfaith national unity',
        focusAr: 'أسباب قيام ثورة 1919 بقيادة سعد زغلول بعد نفيه لجزيرة مالطا، ومشاركة كافة فئات الشعب من عمال وطلاب ونساء، وشعار الهلال مع الصليب تجسيداً للوحدة الوطنية الراسخة.',
        focusEn: 'Catalysts of 1919 revolution, Saad Zaghloul leadership, women participation, and national unity.',
        activityAr: 'اكتب مقالاً قصيراً تشرح فيه كيف عكست ثورة 1919 تلاحم أطياف الشعب المصري كافة.',
        activityEn: 'Write a brief exposition on how the 1919 revolution united all segments of Egyptian society.',
        questionAr: 'من هو زعيم ثورة 1919 ومؤسس حزب الوفد المصري؟',
        questionEn: 'Who led the 1919 revolution and championed the national delegation?',
        optionsAr: ['سعد زغلول', 'محمد علي باشا', 'أحمد عرابي'],
        optionsEn: ['Saad Zaghloul', 'Muhammad Ali', 'Ahmed Orabi'],
        correctIndex: 0,
        vocabulary: [['ثورة 1919', '1919 Revolution'], ['سعد زغلول', 'Saad Zaghloul'], ['وحدة وطنية', 'National unity'], ['استقلال', 'Independence']]
      },
      {
        titleAr: 'حرب أكتوبر 1973 المجيدة واسترداد أرض سيناء الغالية',
        titleEn: 'The Glorious October 1973 War & Liberation of Sinai',
        subtitleAr: 'التخطيط الاستراتيجي، عبور خط بارليف، وبطولات القوات المسلحة المصرية الباسلة',
        subtitleEn: 'Strategic surprise, breaching the Bar Lev Line, and military valor',
        focusAr: 'ملحمة نصر السادس من أكتوبر العاشر من رمضان: التنسيق العسكري المحكم، الضربة الجوية، سلاح المهندسين وتدمير الساتر الترابي بخراطيم المياه، واستعادة العزة والسيادة الوطنية.',
        focusEn: 'October 1973 victory: military tactics, crossing the Suez Canal, breaching sand barriers, liberating Sinai.',
        activityAr: 'لخص خطة تدمير الساتر الترابي لخط بارليف وكيف كان الابتكار الهندسي مفتاح النصر.',
        activityEn: 'Summarize the engineering water-cannon breakthrough that collapsed the Bar Lev sand rampart.',
        questionAr: 'في أي تاريخ تم عبور قناة السويس وتحطيم خط بارليف الحصين؟',
        questionEn: 'On what date did Egyptian forces breach the Suez Canal and Bar Lev Line?',
        optionsAr: ['السادس من أكتوبر 1973', 'الثالث والعشرين من يوليو 1952', 'الخامس والعشرين من يناير 2011'],
        optionsEn: ['6th of October 1973', '23rd of July 1952', '25th of January 2011'],
        correctIndex: 0,
        vocabulary: [['نصر أكتوبر', 'October victory'], ['خط بارليف', 'Bar Lev Line'], ['القوات المسلحة', 'Armed forces'], ['سيناء', 'Sinai']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Curriculum Selector for Egypt Primary
// ---------------------------------------------------------------------------

export function getEgyptPrimaryCurriculum(
  subject: Subject,
  gradeLevel: GradeLevel,
  educationType: EducationType = 'PUBLIC',
  track: EducationTrack = 'GENERAL'
): Lecture[] {
  const gradeNumber = parseInt(gradeLevel.replace('G', ''), 10) || 4;
  const nameAr = `الصف ${gradeNumber} الابتدائي (التعليم الأساسي المصري)`;
  const nameEn = `Primary Grade ${gradeNumber} (Egyptian Basic Education)`;

  switch (subject) {
    case 'PRIMARY_ARABIC':
    case 'ARABIC_LANG':
      if (gradeLevel === 'G1') return PRIMARY_ARABIC_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_ARABIC_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_ARABIC_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_ARABIC_G4_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_ARABIC_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_ARABIC_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'PRIMARY_MATH':
    case 'MATH':
      if (gradeLevel === 'G1') return PRIMARY_MATH_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_MATH_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_MATH_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_MATH_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_MATH_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_MATH_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'PRIMARY_SCIENCE':
    case 'GENERAL_SCIENCE':
      if (gradeLevel === 'G1') return PRIMARY_SCIENCE_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_SCIENCE_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_SCIENCE_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_SCIENCE_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_SCIENCE_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_SCIENCE_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'ISLAMIC_STUDIES':
      if (gradeLevel === 'G1') return PRIMARY_ISLAMIC_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_ISLAMIC_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_ISLAMIC_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_ISLAMIC_G4_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_ISLAMIC_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_ISLAMIC_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'ENGLISH':
      if (gradeLevel === 'G1' || gradeLevel === 'G2' || gradeLevel === 'G3') {
        return buildPrimaryLectures(connectG1Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(connectG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(connectG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    case 'COMPUTER_SCIENCE':
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(ictG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(ictG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    case 'GEOGRAPHY':
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(geographyG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(geographyG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    case 'HISTORY':
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(historyG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(historyG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    default:
      return [];
  }
}
