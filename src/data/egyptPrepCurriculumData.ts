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
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE') return false;
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
