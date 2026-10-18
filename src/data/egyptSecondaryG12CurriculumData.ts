import type { EducationTrack, EducationType, Lecture, Subject } from '../types';
import { HIGH_PHYSICS_G12_LECTURES } from './highPhysics12CurriculumData';
import { HIGH_CHEMISTRY_G12_LECTURES } from './highChemistry12CurriculumData';
import { HIGH_MATH_G12_LECTURES } from './highMath12CurriculumData';
import { HIGH_ARABIC_LIT_G12_LECTURES } from './highArabicLit12CurriculumData';

export interface EgyptG12LessonPlan {
  id: string;
  order: number;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  unitTitleAr: string;
  unitTitleEn: string;
  termAr: string;
  termEn: string;
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

// ---------------------------------------------------------------------------
// Grade 12 Track Configurations (الثانوية العامة المصرية)
// ---------------------------------------------------------------------------
const COMMON_G12_SUBJECTS: readonly Subject[] = [
  'ARABIC_LIT',
  'ENGLISH',
  'FRENCH',
  'GERMAN',
  'ITALIAN',
  'ISLAMIC_STUDIES'
];

// شعبة علمي علوم
const SCIENCE_BIO_G12_SUBJECTS: readonly Subject[] = [
  ...COMMON_G12_SUBJECTS,
  'BIOLOGY',
  'CHEMISTRY',
  'PHYSICS',
  'MATH' // الإحصاء
];

// شعبة علمي رياضة
const SCIENCE_MATH_G12_SUBJECTS: readonly Subject[] = [
  ...COMMON_G12_SUBJECTS,
  'MATH', // الرياضيات البحتة (تفاضل وتكامل وجبر وهندسة فراغية)
  'COMPUTER_SCIENCE', // الرياضيات التطبيقية (استاتيكا وديناميكا)
  'PHYSICS',
  'CHEMISTRY'
];

// الشعبة الأدبية
const LITERARY_G12_SUBJECTS: readonly Subject[] = [
  ...COMMON_G12_SUBJECTS,
  'HISTORY',
  'GEOGRAPHY',
  'PHILOSOPHY',
  'MATH' // الإحصاء
];

// المسار العام المشترك (يتضمن جميع المواد المعتمدة)
const ALL_G12_SUBJECTS: readonly Subject[] = [
  ...COMMON_G12_SUBJECTS,
  'PHYSICS',
  'CHEMISTRY',
  'BIOLOGY',
  'MATH',
  'COMPUTER_SCIENCE',
  'HISTORY',
  'GEOGRAPHY',
  'PHILOSOPHY'
];

export function isEgyptG12SubjectAvailable(
  subject: Subject,
  track: EducationTrack = 'GENERAL',
  educationType: EducationType = 'PUBLIC'
): boolean {
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE' && educationType !== 'INTERNATIONAL') return false;
  if (track === 'SCIENCE_BIO' || track === 'HEALTH_LIFE') {
    return SCIENCE_BIO_G12_SUBJECTS.includes(subject);
  }
  if (track === 'SCIENCE_MATH' || track === 'CS_ENGINEERING') {
    return SCIENCE_MATH_G12_SUBJECTS.includes(subject);
  }
  if (track === 'SHARIA_HUMANITIES') {
    return LITERARY_G12_SUBJECTS.includes(subject);
  }
  return ALL_G12_SUBJECTS.includes(subject);
}

export function getEgyptG12Subjects(track: EducationTrack = 'GENERAL'): Subject[] {
  if (track === 'SCIENCE_BIO' || track === 'HEALTH_LIFE') {
    return [...SCIENCE_BIO_G12_SUBJECTS];
  }
  if (track === 'SCIENCE_MATH' || track === 'CS_ENGINEERING') {
    return [...SCIENCE_MATH_G12_SUBJECTS];
  }
  if (track === 'SHARIA_HUMANITIES') {
    return [...LITERARY_G12_SUBJECTS];
  }
  return [...ALL_G12_SUBJECTS];
}

// ---------------------------------------------------------------------------
// Unit Type & Lecture Builder Helper
// ---------------------------------------------------------------------------
type UnitDefinition = {
  unitTitleAr: string;
  unitTitleEn: string;
  lessons: Omit<EgyptG12LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[];
};

function buildLecturesFromUnits(
  units: UnitDefinition[],
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  let runningOrder = 1;
  return units.flatMap((unit) =>
    unit.lessons.map((lesson) => {
      const order = runningOrder++;
      const id = `eg-g12-${subject.toLowerCase().replace(/_/g, '-')}-${order}`;
      return {
        id,
        order,
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        subtitleAr: lesson.subtitleAr,
        subtitleEn: lesson.subtitleEn,
        durationMinutes: 45,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel: 'G12',
        educationType,
        educationTrack: track,
        gradeLevelNameAr: educationType === 'INTERNATIONAL'
          ? 'الصف الثالث الثانوي (مسار مدارس اللغات - التجريبية والرسمية)'
          : 'الصف الثالث الثانوي (الثانوية العامة - المسار العام العربي)',
        gradeLevelNameEn: educationType === 'INTERNATIONAL'
          ? 'Secondary 3 / Grade 12 (Language Schools Track - English Medium)'
          : 'Secondary 3 / Grade 12 (Egyptian National Curriculum)',
        termAr: 'العام الدراسي الكامل',
        termEn: 'Full Academic Year',
        unitTitleAr: unit.unitTitleAr,
        unitTitleEn: unit.unitTitleEn,
        lessonNumberAr: `الدرس ${order}`,
        lessonNumberEn: `Lesson ${order}`,
        warmupHookAr: `كيف يساهم موضوع «${lesson.titleAr}» في فهم المسائل التطبيقية والنماذج الامتحانية الوزارية المتقدمة؟`,
        warmupHookEn: `How does “${lesson.titleEn}” provide conceptual depth for national examination success and real-world mastery?`,
        learningOutcomesAr: [
          lesson.focusAr,
          `تحليل الأسئلة الوزارية وحل التدريبات التطبيقية على «${lesson.titleAr}».`
        ],
        learningOutcomesEn: [
          lesson.focusEn,
          `Analyze national exam problems and solve exercises related to “${lesson.titleEn}.”`
        ],
        vocabulary: lesson.vocabulary.map(([termEn, termAr]) => ({
          termAr,
          termEn,
          definitionAr: `مفهوم علمي/لغوي مقرر في درس «${lesson.titleAr}».`,
          definitionEn: `Core concept in the lesson “${lesson.titleEn}.”`
        })),
        keyConceptsAr: [unit.unitTitleAr, lesson.titleAr],
        keyConceptsEn: [unit.unitTitleEn, lesson.titleEn],
        summaryAr: lesson.focusAr,
        summaryEn: lesson.focusEn,
        mainContentAr: `${lesson.focusAr}\n\nنشاط تطبيقي تفاعلي: ${lesson.activityAr}\n\nهذا المحتوى الرقمي الموثق تم تصميمه وفقاً للمعايير الرسمية لكتب وزارة التربية والتعليم والتعليم الفني المصرية للصف الثالث الثانوي.`,
        mainContentEn: `${lesson.focusEn}\n\nPractical application activity: ${lesson.activityEn}\n\nThis verified digital curriculum aligns strictly with the official Egyptian Ministry of Education Secondary 3 textbooks.`,
        sections: [
          {
            titleAr: 'الفكرة الرئيسة والمفاهيم الأساسية',
            titleEn: 'Core Concepts & Analytical Principles',
            contentAr: lesson.focusAr,
            contentEn: lesson.focusEn,
            tipsAr: ['احرص على الفهم الشامل والربط بين المفاهيم ومخرجات التعلم.', 'تدرب على أسئلة المستويات العليا ونماذج الوزارة الاسترشادية.'],
            tipsEn: ['Focus on analytical reasoning and conceptual integration.', 'Practice higher-order thinking exam questions.']
          },
          {
            titleAr: 'النشاط التطبيقي والتدريب العملي',
            titleEn: 'Practical Problem Solving & Exercises',
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
            explanationAr: 'تستند الإجابة إلى القواعد والمفاهيم العلمية الواردة في كتاب الوزارة الرسمي.',
            explanationEn: 'The answer directly follows principles from the official Ministry textbook.'
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
              explanationAr: 'الإجابة المعتمدة وفق شرح كتاب المدرسة الرسمي ونماذج التقييم الوزارية.',
              explanationEn: 'Verified answer according to official curriculum standards.',
              difficulty: 'medium'
            }
          ]
        }
      };
    })
  );
}

// ---------------------------------------------------------------------------
// 1. Biology G12 (علمي علوم - الثانوية العامة)
// ---------------------------------------------------------------------------
const biologyUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الباب الأول: التركيب والوظيفة - الفصل الأول: الدعامة والحركة',
    unitTitleEn: 'Part 1: Structure & Function - Chapter 1: Support & Movement',
    lessons: [
      {
        titleAr: 'الدعامة في النبات (الفسيولوجية والتركيبية)',
        titleEn: 'Support in Plants (Physiological & Structural)',
        subtitleAr: 'الخاصية الأسموزية، ضغط الامتلاء، وترسيب السيليلوز واللجنين والكيوتين والسبيرين في الجدر الخلوية',
        subtitleEn: 'Osmotic pressure, turgor pressure, and deposition of cellulose, lignin, cutin, and suberin',
        focusAr: 'التمييز بين الدعامة الفسيولوجية المؤقتة المعتمدة على الخاصية الأسموزية، والدعامة التركيبية الدائمة المعتمدة على ترسيب مواد كيميائية تقي النبات من فقد الماء وتكسبه الصلابة.',
        focusEn: 'Differentiate between temporary physiological support via osmosis and permanent structural support via cell wall thickening.',
        activityAr: 'قارن بين استقامة ساق نبات عشبي بعد الرية وذبوله عند الجفاف، وحدد دور الكيوتين والسيليلوز في ذلك.',
        activityEn: 'Examine wilting and recovery in herbaceous plants under hydration changes.',
        questionAr: 'أي المواد الآتية تترسب في جدر خلايا الفلين لإكسابها عدم نفاذية الماء؟',
        questionEn: 'Which substance is deposited in cork cell walls making them impermeable to water?',
        optionsAr: ['السبيرين', 'البكتين', 'النشا'],
        optionsEn: ['Suberin', 'Pectin', 'Starch'],
        correctIndex: 0,
        vocabulary: [['الدعامة الفسيولوجية', 'physiological support'], ['الدعامة التركيبية', 'structural support'], ['السبيرين', 'suberin']]
      },
      {
        titleAr: 'الهيكل العظمي المحوري والطرفي في الإنسان',
        titleEn: 'Human Axial and Appendicular Skeleton',
        subtitleAr: 'الجمجمة والعمود الفقري والقفص الصدري، والأحزمة والأطراف، والمفاصل والغضاريف والأربطة والأوتار',
        subtitleEn: 'Vertebral column, skull, ribcage, girdles, limbs, joints, cartilage, ligaments, and tendons',
        focusAr: 'دراسة تركيب العظام والمفاصل (ليفية، غضروفية، زلالية)، وتحديد وظيفة الأربطة في تحديد اتجاه حركة المفاصل ودور وتر أخيليس.',
        focusEn: 'Analyze skeletal anatomy, classifications of joints (fibrous, cartilaginous, synovial), ligaments, and tendons.',
        activityAr: 'وضح كيف يربط وتر أخيليس العضلة التوأمية بعظمة الكعب وما يترتب على تمزقه.',
        activityEn: 'Trace the Achilles tendon attaching the gastrocnemius to the calcaneus and consequences of rupture.',
        questionAr: 'ما نوع المفاصل التي توجد بين فقرات العمود الفقري؟',
        questionEn: 'Which type of joints is located between the vertebrae of the human spine?',
        optionsAr: ['مفاصل غضروفية', 'مفاصل ليفية عديمة الحركة', 'مفاصل زلالية واسعة الحركة'],
        optionsEn: ['Cartilaginous joints', 'Immovable fibrous joints', 'Freely movable synovial joints'],
        correctIndex: 0,
        vocabulary: [['الهيكل المحوري', 'axial skeleton'], ['المفاصل الزلالية', 'synovial joints'], ['وتر أخيليس', 'Achilles tendon']]
      },
      {
        titleAr: 'الحركة في الكائنات الحية وانقباض العضلات (نظرية الخيوط المنزلقة لهكسلي)',
        titleEn: 'Locomotion and Muscle Contraction (Huxley Sliding Filament Theory)',
        subtitleAr: 'آلية الانقباض العضلي، دور أيونات الكالسيوم وATP والروابط المستعرضة، والوحدة الحركية والإجهاد والشد العضلي',
        subtitleEn: 'Sliding filament model, calcium ions, ATP, cross-bridges, motor units, and muscle fatigue/cramp',
        focusAr: 'فهم نظرية الخيوط المنزلقة وانزلاق خيوط الأكتين والمايوسين بوساطة الروابط المستعرضة، وتفسير الإجهاد العضلي بتراكم حمض اللاكتيك.',
        focusEn: 'Explain Huxley sliding filaments with actin/myosin cross-bridges, role of Ca2+ and ATP, and lactic acid accumulation.',
        activityAr: 'ارسم رسماً تخطيطياً لقطعة عضلية (ساركومير) في حالة الانبساط وحالة الانقباض التام.',
        activityEn: 'Diagram a sarcomere showing changes in I-band, H-zone, and A-band during full contraction.',
        questionAr: 'أثناء الانقباض العضلي التام، ماذا يحدث لطول المنطقة شبه المضيئة (H)؟',
        questionEn: 'During complete muscle contraction, what happens to the length of the H-zone?',
        optionsAr: ['تنعدم أو تختفي تماماً', 'تزداد في الطول', 'تظل ثابتة'],
        optionsEn: ['Disappears completely', 'Increases in length', 'Remains unchanged'],
        correctIndex: 0,
        vocabulary: [['الساركومير', 'sarcomere'], ['الأكتين والمايوسين', 'actin and myosin'], ['الوحدة الحركية', 'motor unit']]
      }
    ]
  },
  {
    unitTitleAr: 'الباب الأول: التركيب والوظيفة - الفصل الثاني: التنسيق الهرموني في الكائنات الحية',
    unitTitleEn: 'Part 1: Structure & Function - Chapter 2: Hormonal Coordination',
    lessons: [
      {
        titleAr: 'الغدد الصماء والغدة النخامية (سيدة الغدد)',
        titleEn: 'Endocrine Glands and the Pituitary (Master Gland)',
        subtitleAr: 'هرمون النمو (GH)، الهرمونات المنبهة للغدد الأخرى (TSH, ACTH, FSH, LH, Prolactin)، وهرمونات الجزء العصبي (ADH, Oxytocin)',
        subtitleEn: 'Growth hormone, tropic hormones, and posterior pituitary neurohormones (ADH, oxytocin)',
        focusAr: 'فهم السيطرة الهرمونية للغدة النخامية وتأثير هرمون النمو على التمثيل الغذائي (القزامة والعملاقة والأكروميجالي)، ودور ADH في حفظ التوازن المائي.',
        focusEn: 'Analyze pituitary control of bodily glands and disorders of growth hormone and ADH regulation.',
        activityAr: 'فسر ظهور أعراض الأكروميجالي في البالغين عند زيادة إفراز هرمون النمو.',
        activityEn: 'Explain acromegaly development in mature adults due to hypersecretion of growth hormone.',
        questionAr: 'أي هرمون يعمل على إعادة امتصاص الماء في النفرونات لتقليل كمية البول؟',
        questionEn: 'Which hormone triggers water reabsorption in renal nephrons to reduce urine volume?',
        optionsAr: ['الهرمون المضاد لإدرار البول (ADH)', 'الكالسيتونين', 'الأنسولين'],
        optionsEn: ['Antidiuretic hormone (ADH)', 'Calcitonin', 'Insulin'],
        correctIndex: 0,
        vocabulary: [['الغدة النخامية', 'pituitary gland'], ['هرمون النمو', 'growth hormone'], ['الأكروميجالي', 'acromegaly']]
      },
      {
        titleAr: 'الغدد الدرقية، الجاردرقية، الكظرية، والبنكرياس',
        titleEn: 'Thyroid, Parathyroid, Adrenal, and Pancreatic Hormones',
        subtitleAr: 'الثيروكسين والكالسيتونين والباراثورمون، الأدرينالين والألدوستيرون، وهرمونا الأنسولين والجلوكاجون لتنظيم سكر الدم',
        subtitleEn: 'Thyroxine, calcitonin, parathormone, adrenaline, aldosterone, insulin, and glucagon glucose regulation',
        focusAr: 'فهم تنظيم مستوى الكالسيوم بين الكالسيتونين والباراثورمون، وضبط الجلوكوز بالأنسولين والجلوكاجون، وهرمونات الطوارئ من نخاع الكظرية.',
        focusEn: 'Contrast calcitonin vs parathormone, insulin vs glucagon, and adrenal medulla catecholamines during fight-or-flight.',
        activityAr: 'احسب أثر نقص إفراز الأنسولين في الإصابة بمرض البول السكري وأعراضه.',
        activityEn: 'Map glucose homeostasis and physiological mechanisms leading to diabetes mellitus.',
        questionAr: 'ما الهرمون الذي يخفض مستوى الكالسيوم في الدم ويمنع سحبه من العظام؟',
        questionEn: 'Which hormone reduces blood calcium levels and prevents bone resorption?',
        optionsAr: ['الكالسيتونين', 'الباراثورمون', 'الثيروكسين'],
        optionsEn: ['Calcitonin', 'Parathormone', 'Thyroxine'],
        correctIndex: 0,
        vocabulary: [['الثيروكسين', 'thyroxine'], ['الكالسيتونين', 'calcitonin'], ['الأنسولين', 'insulin']]
      }
    ]
  },
  {
    unitTitleAr: 'الباب الأول: الفصل الثالث: التكاثر في الكائنات الحية',
    unitTitleEn: 'Part 1: Chapter 3: Reproduction in Living Organisms',
    lessons: [
      {
        titleAr: 'صور التكاثر اللاجنسي والجنسي وتعاقب الأجيال (بلازموديوم الملاريا وسرخس الفوجير)',
        titleEn: 'Asexual & Sexual Reproduction and Alternation of Generations (Plasmodium & Polypodium)',
        subtitleAr: 'الانشطار الثنائي، التبرعم، التجدد، التجرثم، التوالد البكري، وزراعة الأنسجة، ودورة حياة بلازموديوم الملاريا ونبات الفوجير',
        subtitleEn: 'Binary fission, budding, regeneration, sporogenesis, parthenogenesis, tissue culture, Plasmodium and fern life cycles',
        focusAr: 'مقارنة صور التكاثر وتفسير ظاهرة تعاقب الأجيال كنموذج يجمع بين مميزات التكاثر الجنسي في التنوع الوراثي والتكاثر اللاجنسي في سرعة الإنتاج.',
        focusEn: 'Analyze forms of asexual and sexual reproduction and the evolutionary significance of alternation of generations.',
        activityAr: 'تتبع دورة حياة طفيل الملاريا في جسم البعوضة والإنسان وحدد مكان حدوث التكاثر الجنسي واللاجنسي.',
        activityEn: 'Trace the life cycle of Plasmodium in Anopheles mosquitoes and humans.',
        questionAr: 'أين يحدث التكاثر الجنسي في دورة حياة بلازموديوم الملاريا؟',
        questionEn: 'Where does sexual reproduction take place in the life cycle of Plasmodium malariae?',
        optionsAr: ['في معدة أنثى بعوضة الأنوفيلس', 'في خلايا كبد الإنسان', 'في كريات الدم الحمراء'],
        optionsEn: ['In the stomach of the female Anopheles mosquito', 'In human liver hepatocytes', 'Inside red blood cells'],
        correctIndex: 0,
        vocabulary: [['تعاقب الأجيال', 'alternation of generations'], ['التوالد البكري', 'parthenogenesis'], ['الإسبوروزويتات', 'sporozoites']]
      },
      {
        titleAr: 'التكاثر في النباتات الزهرية والإنسان',
        titleEn: 'Reproduction in Flowering Plants and Humans',
        subtitleAr: 'تكوين حبوب اللقاح والبويضات، الإخصاب المزدوج، تكوين الثمرة والبذرة، والجهاز التناسلي المذكر والمؤنث ودورة الطمث',
        subtitleEn: 'Gametogenesis, double fertilization, seed/fruit formation, human male/female reproductive systems and menstrual cycle',
        focusAr: 'فهم الإخصاب المزدوج وتكوين الإندوسبرم (3n) والجنين (2n)، ومراحل دورة الطمث والتغيرات الهرمونية (FSH, LH, Estrogen, Progesterone) ومراحل تكوين الجنين.',
        focusEn: 'Master double fertilization, endosperm formation, human gametogenesis, menstrual cycle hormone spikes, and embryogenesis.',
        activityAr: 'ارسم مخططاً بيانيّاً لتغير مستويات هرمونات الاستروجين والبروجسترون وLH خلال أيام دورة الطمث الـ 28.',
        activityEn: 'Plot menstrual cycle hormonal curves across the 28-day cycle detailing follicular and luteal phases.',
        questionAr: 'ما المجموعة الصبغية لنسيج الإندوسبرم الناتج عن الاندماج الثلاثي؟',
        questionEn: 'What is the ploidy level of endosperm tissue formed by triple fusion in angiosperms?',
        optionsAr: ['ثلاثية المجموعة الصبغية (3n)', 'ثنائية المجموعة الصبغية (2n)', 'أحادية المجموعة الصبغية (n)'],
        optionsEn: ['Triploid (3n)', 'Diploid (2n)', 'Haploid (n)'],
        correctIndex: 0,
        vocabulary: [['الإخصاب المزدوج', 'double fertilization'], ['الإندوسبرم', 'endosperm'], ['الجسم الأصفر', 'corpus luteum']]
      }
    ]
  },
  {
    unitTitleAr: 'الباب الأول: الفصل الرابع: المناعة في الكائنات الحية',
    unitTitleEn: 'Part 1: Chapter 4: Immunology in Living Organisms',
    lessons: [
      {
        titleAr: 'المناعة في النبات والجهاز المناعي في الإنسان',
        titleEn: 'Plant Immunity and Human Immune System',
        subtitleAr: 'المناعة التركيبية والبيوكيميائية في النبات، الأعضاء الليمفاوية، الخلايا الليمفاوية (B, T, NK)، الأجسام المضادة والمتممات',
        subtitleEn: 'Plant structural/biochemical defenses, lymphatic organs, B/T/NK lymphocytes, antibodies, and complement system',
        focusAr: 'فهم آليات الدفاع النباتي ضد مسببات الأمراض، وتشريح الجهاز الليمفاوي البشري، وأنواع الخلايا المناعية والأجسام المضادة (IgG, IgM, IgA, IgE, IgD).',
        focusEn: 'Contrast plant innate defenses with human lymphatic organs, lymphocyte maturation, and antibody structures.',
        activityAr: 'ارسم تركيب الجسم المضاد موضحاً السلاسل الثقيلة والخفيفة، والمنطقة المتغيرة وموقع الارتباط بالانتيجين.',
        activityEn: 'Diagram an antibody molecule detailing heavy/light chains, variable regions, and antigen-binding sites.',
        questionAr: 'أين تنضج وتتمايز الخلايا الليمفاوية التائية (T cells) في جسم الإنسان؟',
        questionEn: 'Where do T-lymphocytes mature and differentiate in the human body?',
        optionsAr: ['في الغدة التيموسية تحت تأثير هرمون التيموسين', 'في نخاع العظام الأحمر', 'في الطحال'],
        optionsEn: ['In the thymus gland via thymosin', 'In red bone marrow', 'In the spleen'],
        correctIndex: 0,
        vocabulary: [['الغدة التيموسية', 'thymus gland'], ['الأجسام المضادة', 'antibodies'], ['الخلايا البلعمية', 'macrophages']]
      },
      {
        titleAr: 'آليات المناعة المكتسبة (المناعة الخلطية والخلوية)',
        titleEn: 'Acquired Immune Mechanisms: Humoral and Cell-Mediated Immunity',
        subtitleAr: 'خطوط الدفاع الثلاثة، دور الخلايا التائية المساعدة (TH) والسيتوكينات، الخلايا السامة (TC)، والمثبطة (TS)، وخلايا الذاكرة',
        subtitleEn: 'Three lines of defense, Helper T cells, Interleukins, Cytokines, Cytotoxic T cells, Suppressor T cells, memory cells',
        focusAr: 'تتبع مراحل المناعة الخلطية بالأجسام المضادة والمناعة الخلوية بالخلايا التائية، ومقارنة الاستجابة المناعية الأولية والثانوية.',
        focusEn: 'Trace humoral B-cell response and cell-mediated T-cell destruction of virally infected/cancer cells, and memory persistence.',
        activityAr: 'قارن بين الاستجابة المناعية الأولية والثانوية من حيث سرعة الاستجابة وكمية الأجسام المضادة وخلايا الذاكرة.',
        activityEn: 'Graph primary vs secondary immune responses highlighting antibody titers and speed of memory activation.',
        questionAr: 'ما المادة الكيميائية التي تفرزها خلايا TC لإحداث ثقوب في غشاء الخلية المصابة؟',
        questionEn: 'Which protein do cytotoxic T cells secrete to perforate the membranes of target cells?',
        optionsAr: ['البيرفورين (البروتين صانع الثقوب)', 'الهيستامين', 'المتممات'],
        optionsEn: ['Perforin (pore-forming protein)', 'Histamine', 'Complements'],
        correctIndex: 0,
        vocabulary: [['البيرفورين', 'perforin'], ['المناعة الخلطية', 'humoral immunity'], ['المناعة الخلوية', 'cell-mediated immunity']]
      }
    ]
  },
  {
    unitTitleAr: 'الباب الثاني: البيولوجيا الجزيئية - الفصل الأول: الحمض النووي والمعلومات الوراثية',
    unitTitleEn: 'Part 2: Molecular Biology - Chapter 1: DNA & Genetic Information',
    lessons: [
      {
        titleAr: 'إثبات أن DNA هو المادة الوراثية وتركيب جزيء DNA',
        titleEn: 'DNA as Genetic Material and Watson-Crick Double Helix Structure',
        subtitleAr: 'تجارب التحول البكتيري (جريفيث وأفري)، لاقمات البكتيريا (هيرشي وتشيس)، وتركيب النيوكليوتيدة ونموذج واتسون وكريك',
        subtitleEn: 'Bacterial transformation (Griffith, Avery), Hershey-Chase phage experiment, nucleotide anatomy, and Watson-Crick model',
        focusAr: 'تحليل الأدلة التجريبية على أن الحمض النووي DNA هو مادة الوراثة، وفهم القواعد النيتروجينية وقواعد شارجاف وتكامل الشريطان المتعاكسان.',
        focusEn: 'Analyze historic experiments proving DNA is genetic material and evaluate Chargaff complementary base pairing (A=T, G≡C).',
        activityAr: 'إذا كانت نسبة الأدينين في عينة من لولب مزدوج لـ DNA هي 22%، فاحسب نسب باقي القواعد النيتروجينية.',
        activityEn: 'Calculate thymine, guanine, and cytosine percentages when adenine is 22% in duplex DNA.',
        questionAr: 'كم عدد الروابط الهيدروجينية التي تربط بين الجوانين (G) والسيتوزين (C) في لولب DNA؟',
        questionEn: 'How many hydrogen bonds connect guanine (G) to cytosine (C) in duplex DNA?',
        optionsAr: ['3 روابط هيدروجينية', 'رابطتان هيدروجينيتان', 'رابطة هيدروجينية واحدة'],
        optionsEn: ['3 hydrogen bonds', '2 hydrogen bonds', '1 hydrogen bond'],
        correctIndex: 0,
        vocabulary: [['التحول البكتيري', 'bacterial transformation'], ['النيوكليوتيدة', 'nucleotide'], ['الروابط الهيدروجينية', 'hydrogen bonds']]
      },
      {
        titleAr: 'تضاعف DNA وإصلاح عيوبه وتكثيفه (الكروماتين والكروموسومات)',
        titleEn: 'DNA Replication, Repair Enzymes, and Chromatin Compaction',
        subtitleAr: 'إنزيمات اللولب والبلمرة والربط، إصلاح تلف القواعد، والبروتينات الهستونية وغير الهستونية والنيوكليوسومات',
        subtitleEn: 'Helicase, DNA polymerase, ligase, DNA repair systems, histones, non-histones, and nucleosomes',
        focusAr: 'فهم اتجاه عمل إنزيم البلمرة (5\' إلى 3\')، وتكوين الشريطة الرائدة والشريطة المتأخرة، وإصلاح العيوب بإنزيمات الربط، وتكثيف جزيء DNA.',
        focusEn: 'Detail 5\' to 3\' polymerase activity, Okazaki fragment synthesis, ligase-driven proofreading/repair, and nucleosome folding.',
        activityAr: 'اشرح كيف تتعاون إنزيمات الربط في الحفاظ على ثبات التركيب الوراثي وإصلاح التلف اليومي للقواعد.',
        activityEn: 'Examine repair mechanisms by ligases correcting spontaneous purine and pyrimidine loss.',
        questionAr: 'ما الإنزيم المسؤول عن ربط قطع النيوكليوتيدات أثناء تضاعف DNA وإصلاح عيوبه؟',
        questionEn: 'Which enzyme seals nicks in the phosphodiester backbone during replication and DNA repair?',
        optionsAr: ['إنزيم الربط (DNA Ligase)', 'إنزيم اللولب (Helicase)', 'إنزيم بلمرة RNA'],
        optionsEn: ['DNA Ligase', 'Helicase', 'RNA Polymerase'],
        correctIndex: 0,
        vocabulary: [['إنزيم اللولب', 'helicase'], ['إنزيم الربط', 'DNA ligase'], ['النيوكليوسومات', 'nucleosomes']]
      }
    ]
  },
  {
    unitTitleAr: 'الباب الثاني: الفصل الثاني: الأحماض النووية وتخليق البروتين والتكنولوجيا الجزيئية',
    unitTitleEn: 'Part 2: Chapter 2: RNA, Protein Synthesis & Genetic Engineering',
    lessons: [
      {
        titleAr: 'أنواع RNA، الشفرة الوراثية، ومراحل تخليق البروتين',
        titleEn: 'RNA Types, The Genetic Code, and Translation Stages',
        subtitleAr: 'الحمض النووي الريبوزي (mRNA, tRNA, rRNA)، الشفرة الوراثية ثلاثية، كودون البدء وكودونات الوقف، ومراحل الترجمة',
        subtitleEn: 'mRNA transcription, tRNA anticodons, ribosomal subunits, degenerate triplet code, initiation, elongation, and termination',
        focusAr: 'فهم عملية النسخ من شريط القالب، والشفرة الوراثية كشفرة ثلاثية عالمية، ودور الريبوسومات وإنزيم ببتيديل ترانسفيريز في بناء عديد الببتيد.',
        focusEn: 'Trace transcription of mRNA, universal triplet codons (AUG start, UAA/UAG/UGA stop), and peptidyl transferase peptide formation.',
        activityAr: 'قم بترجمة تسلسل mRNA الآتي إلى أحماض أمينية: 5\'-AUG-CCU-GCA-UAA-3\'.',
        activityEn: 'Translate the mRNA sequence 5\'-AUG-CCU-GCA-UAA-3\' determining anticodons and peptide length.',
        questionAr: 'ما هو كودون البدء في جزيء mRNA المسؤول عن بدء ترجمة البروتين؟',
        questionEn: 'What is the standard initiation (start) codon on mRNA signaling translation start?',
        optionsAr: ['AUG (يشفر للميثيونين)', 'UAA (كودون وقف)', 'UAG (كودون وقف)'],
        optionsEn: ['AUG (codes for Methionine)', 'UAA (stop codon)', 'UAG (stop codon)'],
        correctIndex: 0,
        vocabulary: [['الشفرة الوراثية', 'genetic code'], ['كودون البدء', 'start codon'], ['إنزيم ببتيديل ترانسفيريز', 'peptidyl transferase']]
      },
      {
        titleAr: 'التكنولوجيا الجزيئية والهندسة الوراثية (DNA معاد الاتحاد ومكتبة الجينات)',
        titleEn: 'Molecular Technology & Genetic Engineering (Recombinant DNA)',
        subtitleAr: 'إنزيمات القصر البكتيرية والأطراف اللاصقة، البلازميدات، تفاعل البلمرة المتسلسل PCR، وفصل العينات واستنساخ الجينات',
        subtitleEn: 'Restriction endonucleases, sticky ends, plasmids, PCR amplification, gel electrophoresis, and gene cloning',
        focusAr: 'تطبيق التكنولوجيا الجزيئية في إنتاج الإنسولين البشري والإنترفيرون، واستخدام إنزيمات القصر لفصل الجينات ودمجها في البلازميدات واستنساخها.',
        focusEn: 'Evaluate recombinant DNA technology in pharmaceutical synthesis (human insulin, interferon), and PCR amplification.',
        activityAr: 'وضح الخطوات المتبعة لإنتاج هرمون الإنسولين البشري في خلايا البكتيريا باستخدام تقنية DNA معاد الاتحاد.',
        activityEn: 'Outline industrial production of recombinant human insulin utilizing bacterial plasmid vectors.',
        questionAr: 'ما وظيفة إنزيمات القصر (Restriction enzymes) التي تعزل من سلالات البكتيريا؟',
        questionEn: 'What is the biological function of bacterial restriction endonucleases?',
        optionsAr: ['التعرف على تسلسلات نيوكليوتيدات محددة وقطع DNA عندها', 'مضاعفة DNA في جهاز PCR', 'إصلاح عيوب DNA'],
        optionsEn: ['Recognize specific palindromic sequences and cleave DNA', 'Amplify DNA in PCR thermocycler', 'Repair base pair lesions'],
        correctIndex: 0,
        vocabulary: [['إنزيمات القصر', 'restriction enzymes'], ['DNA معاد الاتحاد', 'recombinant DNA'], ['البلازميد', 'plasmid vector']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 2. Applied Mathematics G12 (علمي رياضة: استاتيكا وديناميكا)
// ---------------------------------------------------------------------------
const appliedMathUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الفرع الأول: الاستاتيكا - الفصل الأول والثاني: الاحتكاك والعزوم',
    unitTitleEn: 'Branch 1: Statics - Chapters 1 & 2: Friction & Moments of Forces',
    lessons: [
      {
        titleAr: 'اتزان جسم على مستوى أفقي ومستوى مائل خشن',
        titleEn: 'Equilibrium on Rough Horizontal and Inclined Planes',
        subtitleAr: 'قوة الاحتكاك السكوني (Fs)، الاحتكاك النهائي (Fs = μs × R)، معامل الاحتكاك، وزاوية الاحتكاك (λ)',
        subtitleEn: 'Static friction, limiting friction Fs = μs R, coefficient of friction, and angle of friction λ',
        focusAr: 'حل معادلات الاتزان لجسم موضوع على مستوى خشن تحت تأثير قوى أفقية ومائلة، وإيجاد أقل قوة تحفظ اتزان الجسم أو تجعله على وشك الحركة.',
        focusEn: 'Formulate equilibrium equations on horizontal and inclined rough planes with limiting friction conditions.',
        activityAr: 'احسب أقل قوة مائلة بزاوية 30 على الأفقي تجعل جسماً وزنه 40 نيوتن على وشك الحركة على مستوى أفقي معامل احتكاكه 0.5.',
        activityEn: 'Solve for the minimum inclined pulling force maintaining impending motion on rough planes.',
        questionAr: 'عندما يكون الجسم على وشك الانزلاق على مستوى مائل خشن تحت تأثير وزنه فقط، فإن زاوية ميل المستوى (θ) تساوي:',
        questionEn: 'When a body is on the verge of sliding down a rough inclined plane under its weight only, the inclination angle θ equals:',
        optionsAr: ['زاوية الاحتكاك (λ)', 'ضعف زاوية الاحتكاك (2λ)', 'صفر'],
        optionsEn: ['Angle of friction (λ)', 'Twice the angle of friction (2λ)', 'Zero'],
        correctIndex: 0,
        vocabulary: [['معامل الاحتكاك', 'coefficient of friction'], ['قوة رد الفعل المحصل', 'resultant reaction force'], ['زاوية الاحتكاك', 'angle of friction']]
      },
      {
        titleAr: 'عزوم القوى في نظام إحداثي ثنائي وثلاثي الأبعاد والاتزان العام',
        titleEn: 'Moments of Forces in 2D and 3D Systems & General Equilibrium',
        subtitleAr: 'عزم قوة حول نقطة [M = r × F]، نظرية فارينون (Varignon)، شروط الاتزان العام (ΣFx = 0, ΣFy = 0, ΣM = 0)',
        subtitleEn: 'Vector moments M = r × F, Varignon’s theorem of moments, and general rigid body equilibrium conditions',
        focusAr: 'تطبيق متجه العزم في الفراغ واستنتاج طول العمود الساقط من نقطة على خط عمل القوة، وتطبيق شروط الاتزان العام على القضبان والسلالم.',
        focusEn: 'Calculate moments about points in vector space, perpendicular distances, and solve ladder/beam equilibrium problems.',
        activityAr: 'حل مسألة سلم منتظم يستند بطرفه السفلي على أرض خشنة وبطرفه العلوي على حائط رأسي أملس وأوجد زاوية الميل عند وشك الانزلاق.',
        activityEn: 'Solve classic ladder equilibrium with rough floor and smooth vertical wall under impending slip.',
        questionAr: 'ما الشرطان الضروريان والكافيان لاتزان جسم جاسيء تحت تأثير مجموعة من القوى المستوية؟',
        questionEn: 'What are the necessary and sufficient conditions for planar equilibrium of a rigid body?',
        optionsAr: ['محصلة القوى تنعدم (R = 0) ومجموع العزوم حول أي نقطة ينعدم (ΣM = 0)', 'محصلة القوى تنعدم فقط', 'العزوم تنعدم فقط'],
        optionsEn: ['Resultant force is zero (R = 0) and sum of moments about any point is zero (ΣM = 0)', 'Resultant force zero only', 'Moments zero only'],
        correctIndex: 0,
        vocabulary: [['عزم القوة', 'moment of force'], ['الاتزان العام', 'general equilibrium'], ['ذراع العزم', 'moment arm']]
      }
    ]
  },
  {
    unitTitleAr: 'الفرع الأول: الاستاتيكا - الفصل الثالث: الازدواج ومركز الثقل',
    unitTitleEn: 'Branch 1: Statics - Chapters 3 & 4: Couples & Center of Gravity',
    lessons: [
      {
        titleAr: 'الازدواج، الازدواجات المتكافئة، ومركز الثقل',
        titleEn: 'Couples, Equivalent Couples, and Center of Gravity',
        subtitleAr: 'عزم الازدواج، الاتزان تحت تأثير ازدواجين، إحداثيات مركز الثقل، وطريقة الكتلة السالبة في الألواح والصفائح المنتظمة',
        subtitleEn: 'Couple moments, couple equivalence, coordinates of center of gravity, and negative mass method for cutout laminae',
        focusAr: 'فهم خواص الازدواج بأنه لا يحدث حركة انتقالية بل دورانية، وحساب عزم الازدواج المحصل، وتعيين إحداثيات مركز الثقل للأجسام المركبة.',
        focusEn: 'Analyze couples as pure rotational effects, calculate couple moments, and compute center of mass via moment of mass theorems.',
        activityAr: 'صفيحة رقيقة منتظمة على شكل مربع اقتطع منها جزء مربع، عين مركز ثقل الجزء المتبقي بطريقة الكتلة السالبة.',
        activityEn: 'Determine the center of gravity of a square lamina with a cutout hole using the negative mass method.',
        questionAr: 'ما قيمة محصلة القوتين المكونتين لازدواج؟',
        questionEn: 'What is the resultant force of two forces forming a mechanical couple?',
        optionsAr: ['تساوي المتجه الصفري (0)', 'تساوي ضعف إحدى القوتين', 'تساوي مربع إحدى القوتين'],
        optionsEn: ['Zero vector (0)', 'Twice one force', 'Square of one force'],
        correctIndex: 0,
        vocabulary: [['الازدواج', 'couple'], ['مركز الثقل', 'center of gravity'], ['الكتلة السالبة', 'negative mass technique']]
      }
    ]
  },
  {
    unitTitleAr: 'الفرع الثاني: الديناميكا - الفصل الأول: تفاضل وتكامل الدوال المتجهة وقوانين نيوتن',
    unitTitleEn: 'Branch 2: Dynamics - Chapter 1: Vector Calculus of Motion & Newton’s Laws',
    lessons: [
      {
        titleAr: 'تفاضل وتكامل الدوال المتجهة وقانون نيوتن الأول والثاني',
        titleEn: 'Calculus of Vector Motion and Newton’s First & Second Laws of Motion',
        subtitleAr: 'متجه الموضع والإزاحة والسرعة والعجلة (v = dr/dt, a = dv/dt)، وتطبيقات قانون نيوتن الثاني (F = dp/dt = m × a)',
        subtitleEn: 'Position, displacement, velocity and acceleration vectors, momentum p = mv, and Newton’s law F = dp/dt = m·a',
        focusAr: 'التمييز بين الحركة عندما تكون العجلة دالة في الزمن أو الموضع أو السرعة وإجراء التكامل المحدد، وصياغة معادلات الحركة لنيوتن للكتل الثابتة والمتغيرة.',
        focusEn: 'Differentiate and integrate displacement, velocity, and variable acceleration equations; apply Newton’s 2nd Law F = ma.',
        activityAr: 'إذا كانت إزاحة جسيم تعطى بالعلاقة s = 3t^2 - 12t، أوجد موعد سكون الجسيم لحظياً والعجلة عند تلك اللحظة.',
        activityEn: 'Find instantaneous rest and acceleration when displacement is defined as s = 3t^2 - 12t.',
        questionAr: 'عندما تكون العجلة دالة في الإزاحة a = f(s)، كيف يُحسب تكامل العجلة؟',
        questionEn: 'When acceleration is a function of position a = f(s), which integration identity is applied?',
        optionsAr: ['∫ a ds = ∫ v dv = 1/2 (v^2 - v0^2)', '∫ a ds = v × t', '∫ a ds = s^2'],
        optionsEn: ['∫ a ds = ∫ v dv = 1/2 (v^2 - v0^2)', '∫ a ds = v · t', '∫ a ds = s^2'],
        correctIndex: 0,
        vocabulary: [['كمية الحركة', 'linear momentum'], ['العجلة كدالة في الموضع', 'acceleration as function of position'], ['قانون نيوتن الثاني', 'Newton’s second law']]
      },
      {
        titleAr: 'قانون نيوتن الثالث، حركة المصاعد، والبكرات البسيطة',
        titleEn: 'Newton’s Third Law, Elevator Apparent Weight & Simple Pulley Systems',
        subtitleAr: 'الوزن الحقيقي والوزن الظاهري وضغط الجسم على أرضية المصعد، وحركة الأجسام المتصلة بخيوط على البكرات الملساء',
        subtitleEn: 'Real weight vs apparent weight in elevators, tension in strings, and connected masses on simple pulleys',
        focusAr: 'حساب الوزن الظاهري لقراءة الميزان الزنبركي والميزان المعتاد في مصعد يتسارع أو يتباطأ، وتحليل حركة كتل معلقة على بكرة ملساء.',
        focusEn: 'Analyze elevator scale readings during upwards/downwards acceleration and compute pulley string tension and common acceleration.',
        activityAr: 'احسب قراءة ميزان ضغط يرتكز عليه شخص كتلته 70 كجم داخل مصعد يصعد بعجلة منتظمة قدرها 1.4 م/ث^2.',
        activityEn: 'Calculate the apparent weight of a 70 kg passenger in an elevator accelerating upward at 1.4 m/s^2.',
        questionAr: 'إذا كان المصعد يهبط بعجلة تقصيرية (تباطؤ)، فما العلاقة بين الوزن الظاهري (N) والوزن الحقيقي (mg)؟',
        questionEn: 'If an elevator descends with deceleration (upward net acceleration), how does apparent weight N compare to real weight mg?',
        optionsAr: ['الوزن الظاهري أكبر من الوزن الحقيقي (N > mg)', 'الوزن الظاهري أقل من الوزن الحقيقي (N < mg)', 'الوزن الظاهري يساوي الوزن الحقيقي (N = mg)'],
        optionsEn: ['Apparent weight exceeds real weight (N > mg)', 'Apparent weight is less than real weight (N < mg)', 'Apparent weight equals real weight (N = mg)'],
        correctIndex: 0,
        vocabulary: [['الوزن الظاهري', 'apparent weight'], ['البكرات الملساء', 'frictionless pulleys'], ['قانون نيوتن الثالث', 'Newton’s third law']]
      }
    ]
  },
  {
    unitTitleAr: 'الفرع الثاني: الديناميكا - الفصل الثاني: الدفع والتصادم والشغل والطاقة والقدرة',
    unitTitleEn: 'Branch 2: Dynamics - Chapter 2: Impulse, Collisions, Work, Energy & Power',
    lessons: [
      {
        titleAr: 'الدفع والتصادم ومبدأ حفظ كمية الحركة',
        titleEn: 'Impulse, Elastic/Inelastic Collisions and Conservation of Momentum',
        subtitleAr: 'متجه الدفع [I = F × Δt = Δp = m(v2 - v1)]، التصادم المرن وغير المرن، والسرعة المشتركة بعد الالتحام',
        subtitleEn: 'Impulse I = F Δt = Δp = m(v2 - v1), elastic/inelastic collisions, and post-collision common velocity',
        focusAr: 'تطبيق نظرية الدفع وكمية الحركة وحساب قوة الدفع المؤثرة على الأجسام، وحل مسائل تصادم الكرات وتكون جسم واحد بعد التصادم.',
        focusEn: 'Formulate impulse-momentum equivalence, calculate impulsive contact forces, and apply momentum conservation during collisions.',
        activityAr: 'اصطدمت كرة كتلتها 200 جم تتحرك بسرعة 8 م/ث بكرة أخرى ساكنة كتلتها 300 جم وتحركتا كجسم واحد، احسب سرعتهما المشتركة.',
        activityEn: 'Solve a plastic collision problem between moving and stationary masses calculating the common post-impact speed.',
        questionAr: 'ما العلاقة بين الدفع ومقدار التغير في كمية حركة الجسم؟',
        questionEn: 'What is the relation between applied impulse and change in momentum?',
        optionsAr: ['الدفع يساوي التغير في كمية الحركة (I = Δp)', 'الدفع يساوي نصف التغير في كمية الحركة', 'الدفع يساوي مربع كمية الحركة'],
        optionsEn: ['Impulse equals change in momentum (I = Δp)', 'Impulse equals half momentum change', 'Impulse equals momentum squared'],
        correctIndex: 0,
        vocabulary: [['الدفع', 'impulse'], ['التصادم المرن', 'elastic collision'], ['حفظ كمية الحركة', 'conservation of linear momentum']]
      },
      {
        titleAr: 'الشغل وطاقة الحركة وطاقة الوضع ومبدأ ثبوت الطاقة والقدرة',
        titleEn: 'Work, Kinetic Energy, Potential Energy, Conservation of Mechanical Energy & Power',
        subtitleAr: 'الشغل W = F · s = ∫ F ds، طاقة الحركة T = 1/2 m v^2، مبدأ الشغل والطاقة [T - T0 = W]، وطاقة الوضع والقدرة P = F · v',
        subtitleEn: 'Work W = F · s, kinetic energy T = 1/2 m v^2, work-energy theorem T - T0 = W, gravitational potential energy and power P = F · v',
        focusAr: 'تطبيق مبدأ الشغل والطاقة لحساب سرعات الأجسام وقوى المقاومة، وحساب القدرة القصوى للمحركات والقدرة اللحظية بالحصان والوات.',
        focusEn: 'Apply the Work-Energy Theorem to determine vehicle dynamics, resist friction work, and compute horsepower and engine efficiency.',
        activityAr: 'قطار كتلته 200 طن يصعد منحدراً يميل بزاوية جيبها 1/100 بأقصى سرعة وقدرها 72 كم/ساعة ومقاومة 10 ثقل كجم لكل طن، احسب قدرة القاطرة بالحصان.',
        activityEn: 'Compute locomotive engine horsepower moving at maximum steady speed uphill against resistive forces.',
        questionAr: 'ما نص مبدأ الشغل والطاقة لجسم يتحرك تحت تأثير قوى متغيرة أو ثابتة؟',
        questionEn: 'What is the mathematical formulation of the Work-Energy Theorem?',
        optionsAr: ['التغير في طاقة حركة الجسم يساوي الشغل المبذول بواسطة محصلة القوى (T - T0 = W)', 'الشغل يساوي طاقة الوضع فقط', 'القدرة تساوي الشغل مقسوماً على الإزاحة'],
        optionsEn: ['Change in kinetic energy equals total work done (T - T0 = W)', 'Work equals potential energy only', 'Power equals work divided by displacement'],
        correctIndex: 0,
        vocabulary: [['مبدأ الشغل والطاقة', 'work-energy theorem'], ['القدرة الحصانية', 'horsepower'], ['طاقة الوضع', 'potential energy']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. Statistics G12 (الإحصاء - الشعبة الأدبية وعلمي علوم)
// ---------------------------------------------------------------------------
const statisticsUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى: الارتباط والانحدار الخطي',
    unitTitleEn: 'Unit 1: Correlation & Linear Regression',
    lessons: [
      {
        titleAr: 'معامل ارتباط بيرسون الخطي ومعامل ارتباط الرتب لسبيرمان',
        titleEn: 'Pearson’s Linear Correlation and Spearman’s Rank Correlation',
        subtitleAr: 'قانون بيرسون لمعامل الارتباط (r)، الارتباط الطردي والعكسي التام والمتوسط والضعيف، ومعامل ارتباط الرتب لسبيرمان',
        subtitleEn: 'Pearson’s product-moment correlation r, positive/negative correlation strength, and Spearman’s rank coefficient rs',
        focusAr: 'حساب معامل ارتباط بيرسون بدلالة مجموع القيم وحساب معامل ارتباط سبيرمان للرتب البيانية والوصفية وتفسير اتجاه وقوة الارتباط.',
        focusEn: 'Compute Pearson r correlation from raw sums and Spearman rank coefficient rs for numerical and qualitative data.',
        activityAr: 'احسب معامل ارتباط سبيرمان لتقديرات مجموعة من الطلاب في مادتي الرياضيات والفيزياء وحدد نوعه وقوته.',
        activityEn: 'Calculate Spearman rank correlation on student grade rankings and assess association degree.',
        questionAr: 'إذا كان معامل الارتباط بين متغيرين r = -0.95، فما هو وصف الارتباط؟',
        questionEn: 'If the correlation coefficient between two variables is r = -0.95, how is the relationship described?',
        optionsAr: ['ارتباط عكسي قوي جداً', 'ارتباط طردي قوي جداً', 'ارتباط عكسي تام'],
        optionsEn: ['Very strong negative correlation', 'Very strong positive correlation', 'Perfect negative correlation'],
        correctIndex: 0,
        vocabulary: [['معامل ارتباط بيرسون', 'Pearson correlation coefficient'], ['معامل ارتباط الرتب', 'Spearman rank correlation'], ['الارتباط العكسي', 'negative correlation']]
      },
      {
        titleAr: 'معادلة خط انحدار ص على س ومقدار الخطأ',
        titleEn: 'Linear Regression Line of Y on X and Error Estimation',
        subtitleAr: 'معادلة خط الانحدار y^ = a + bx، حساب الثابتين a و b، والتنبؤ بقيمة ص بمعلومية س، وحساب مقدار الخطأ',
        subtitleEn: 'Regression line equation y^ = a + bx, estimation of intercept and slope, prediction, and error magnitude formula',
        focusAr: 'استخدام معادلة خط الانحدار للتنبؤ بقيم الظواهر المستقبلية وحساب مقدار الخطأ = |القيمة الجدولية - القيمة التي تحقق معادلة الانحدار|.',
        focusEn: 'Formulate least squares regression y^ = a + bx, forecast variable values, and evaluate absolute error magnitude.',
        activityAr: 'أوجد معادلة خط انحدار ص على س وتنبأ بقيمة ص عندما س = 10 إذا كان a = 2 و b = 1.5 ثم احسب مقدار الخطأ إذا كانت القيمة الفعلية 16.',
        activityEn: 'Forecast response y when x = 10 given line y = 2 + 1.5x and calculate error with observed value 16.',
        questionAr: 'ما هي الصيغة الرياضية لحساب مقدار الخطأ في الانحدار الخطي؟',
        questionEn: 'What is the formula to calculate the magnitude of error in linear regression?',
        optionsAr: ['|القيمة الجدولية - القيمة من معادلة خط الانحدار|', 'القيمة الجدولية + قيمة الانحدار', 'القيمة الجدولية مقسومة على قيمة الانحدار'],
        optionsEn: ['|Observed table value - Predicted regression value|', 'Table value + regression value', 'Table value divided by regression value'],
        correctIndex: 0,
        vocabulary: [['معادلة خط الانحدار', 'regression line equation'], ['معامل الانحدار', 'regression slope'], ['مقدار الخطأ', 'magnitude of error']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية والثالثة: الاحتمال الشرطي والمتغيرات العشوائية',
    unitTitleEn: 'Units 2 & 3: Conditional Probability & Random Variables',
    lessons: [
      {
        titleAr: 'الاحتمال الشرطي والأحداث المستقلة',
        titleEn: 'Conditional Probability and Independent Events',
        subtitleAr: 'قانون الاحتمال الشرطي P(A|B) = P(A ∩ B) / P(B)، وشرط استقلال حدثين [P(A ∩ B) = P(A) × P(B)]',
        subtitleEn: 'Conditional probability P(A|B) = P(A ∩ B)/P(B) and independence criteria P(A ∩ B) = P(A) · P(B)',
        focusAr: 'حل مسائل الاحتمال الشرطي وملاحظة الفرق بين الأحداث المتنافية والأحداث المستقلة في فضاء العينات.',
        focusEn: 'Distinguish mutually exclusive events from independent events and apply conditional probability rules in contingency tables.',
        activityAr: 'إذا كان P(A) = 0.4 و P(B) = 0.5 وكان الحدثان مستقلين، فاحسب P(A ∪ B) و P(A|B).',
        activityEn: 'Calculate union and conditional probability for independent events with P(A)=0.4 and P(B)=0.5.',
        questionAr: 'إذا كان الحدثان A و B مستقلين، فما قيمة الاحتمال الشرطي P(A|B)؟',
        questionEn: 'If events A and B are independent, what does conditional probability P(A|B) equal?',
        optionsAr: ['P(A)', 'P(B)', 'P(A ∩ B)'],
        optionsEn: ['P(A)', 'P(B)', 'P(A ∩ B)'],
        correctIndex: 0,
        vocabulary: [['الاحتمال الشرطي', 'conditional probability'], ['الأحداث المستقلة', 'independent events'], ['الأحداث المتنافية', 'mutually exclusive events']]
      },
      {
        titleAr: 'المتغير العشوائي المتقطع ودالة التوزيع الاحتمالي والتوقع والتباين',
        titleEn: 'Discrete Random Variables, Probability Distribution, Expectation (μ) & Variance (σ²)',
        subtitleAr: 'دالة التوزيع الاحتمالي f(x) حيث Σ f(x) = 1، المتوسط الحسابي (μ = Σ x f(x))، التباين (σ²)، والانحراف المعياري (σ)',
        subtitleEn: 'Probability mass function Σ f(x) = 1, expected mean μ = Σ x f(x), variance σ² = Σ x² f(x) - μ², and standard deviation σ',
        focusAr: 'تكوين جدول التوزيع الاحتمالي للمتغير العشوائي المتقطع وحساب معامل الاختلاف = (σ / μ) × 100%.',
        focusEn: 'Construct discrete distribution tables, calculate mean, variance, standard deviation, and coefficient of variation.',
        activityAr: 'في تجربة إلقاء قطعتي نقود، إذا كان المتغير س يعبر عن عدد الصور، كون جدول التوزيع الاحتمالي واحسب توقعه.',
        activityEn: 'Determine the distribution table and expected value for number of heads in two coin tosses.',
        questionAr: 'في أي دالة توزيع احتمالي لمتغير عشوائي متقطع، ما هو المجموع الكلي للاحتمالات Σ f(x)؟',
        questionEn: 'In any discrete probability distribution, what is the sum of all probabilities Σ f(x)?',
        optionsAr: ['1 صحيح دائماً', 'صفر', 'حسب عدد عناصر الفضاء'],
        optionsEn: ['Always exactly 1', 'Zero', 'Depends on sample space size'],
        correctIndex: 0,
        vocabulary: [['المتوسط الحسابي (التوقع)', 'expected value μ'], ['التباين', 'variance σ²'], ['معامل الاختلاف', 'coefficient of variation']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الرابعة: التوزيع الطبيعي المعياري',
    unitTitleEn: 'Unit 4: Standard Normal Distribution',
    lessons: [
      {
        titleAr: 'المتغير العشوائي المتصل ومنحنى التوزيع الطبيعي المعياري (Z)',
        titleEn: 'Continuous Random Variables & Standard Normal Distribution Z-Score',
        subtitleAr: 'دالة كثافة الاحتمال، خصائص المنحنى الجرسي، التحويل للمعياري [Z = (X - μ) / σ]، وحساب المساحات باستخدام الجدول الإحصائي',
        subtitleEn: 'Probability density function, bell curve properties, z-score standardization Z = (X - μ)/σ, and cumulative area table lookup',
        focusAr: 'فهم خصائص المنحنى الطبيعي المتماثل حول المتوسط (المساحة الكلية = 1)، واستخدام جداول التوزيع الطبيعي لحساب الاحتمالات.',
        focusEn: 'Apply z-score normalization to solve real-world normally distributed variables and look up area probabilities under the bell curve.',
        activityAr: 'إذا كانت أوزان 1000 طالب تتبع توزيعاً طبيعياً بمتوسط 65 كجم وانحراف معياري 5 كجم، احسب نسبة الطلاب الذين تزيد أوزانهم عن 75 كجم.',
        activityEn: 'Calculate the percentage of students weighing over 75 kg given normal distribution parameters μ = 65 and σ = 5.',
        questionAr: 'ما هي المساحة الكلية الواقعة تحت منحنى التوزيع الطبيعي المعياري بالكامل؟',
        questionEn: 'What is the total area under the entire standard normal distribution bell curve?',
        optionsAr: ['1 صحيح', '0.5', '2'],
        optionsEn: ['Exactly 1', '0.5', '2'],
        correctIndex: 0,
        vocabulary: [['التوزيع الطبيعي المعياري', 'standard normal distribution'], ['الدرجة المعيارية', 'Z-score'], ['المنحنى الجرسي', 'bell curve']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 4. History G12 (تاريخ مصر والعرب الحديث والمعاصر - الشعبة الأدبية)
// ---------------------------------------------------------------------------
const historyUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الفصل الأول: الحملة الفرنسية على مصر والشام (1798 - 1801)',
    unitTitleEn: 'Chapter 1: The French Expedition to Egypt & the Levant (1798 - 1801)',
    lessons: [
      {
        titleAr: 'أحوال المجتمع المصري قبيل الحملة ونزول نابليون بونابرت',
        titleEn: 'Egyptian Society on the Eve of the Expedition and Napoleon’s Arrival',
        subtitleAr: 'تدهور الأوضاع الاقتصادية والاجتماعية في العهد العثماني، مقاومة أهالي الإسكندرية ومعركة شبراخيت وإمبابة، وموقعة أبو قير البحرية',
        subtitleEn: 'Socio-economic decline under Ottoman rule, Alexandria resistance, battles of Shubra Khit and Imbaba, and Battle of the Nile',
        focusAr: 'تحليل أسباب الحملة الفرنسية والتنافس الاستعماري الإنجليزي الفرنسي، وأثر موقعة أبو قير البحرية في حصار الحملة داخل مصر.',
        focusEn: 'Analyze colonial Anglo-French rivalry, French expedition motives, and strategic consequences of the naval defeat at Aboukir.',
        activityAr: 'قارن بين المجتمع الفرنسي والمجتمع المصري قبيل الحملة ووضح أثر الفارق الحضاري في نتائج المواجهات.',
        activityEn: 'Contrast French and Egyptian societies on the eve of the campaign evaluating civil-technological disparities.',
        questionAr: 'ما المعركة البحرية التي قضت على آمال فرنسا في السيطرة على حوض البحر المتوسط وحاصرت جيش نابليون في مصر؟',
        questionEn: 'Which naval battle crushed French hopes of Mediterranean dominance and stranded Napoleon’s army in Egypt?',
        optionsAr: ['موقعة أبو قير البحرية (أغسطس 1798)', 'معركة إمبابة', 'موقعة نافارين'],
        optionsEn: ['Battle of Aboukir Bay (August 1798)', 'Battle of Imbaba', 'Battle of Navarino'],
        correctIndex: 0,
        vocabulary: [['موقعة أبو قير البحرية', 'Battle of the Nile / Aboukir'], ['التنافس الاستعماري', 'colonial rivalry'], ['المجمع العلمي', 'Institut d’Égypte']]
      },
      {
        titleAr: 'مقاومة الشعب المصري وجلاء الحملة وآثارها السياسية والفكرية',
        titleEn: 'Egyptian Resistance, Evacuation, and Political/Scientific Impacts',
        subtitleAr: 'ثورتا القاهرة الأولى والثانية، مقاومة الصعيد، اتفاقية العريش، المجمع العلمي المصري، وفك رموز حجر رشيد',
        subtitleEn: 'Cairo revolts, Upper Egypt guerrilla war, Treaty of El-Arish, scientific institute, and deciphering the Rosetta Stone',
        focusAr: 'استنتاج الآثار الفكرية والسياسية للحملة الفرنسية وظهور الدواوين وتنبيه المصريين إلى فكرة المشاركة في الحكم بدلاً من الحكم المطلق.',
        focusEn: 'Evaluate long-term political, administrative, and scientific consequences of the expedition and birth of Egyptian national consciousness.',
        activityAr: 'بين دور المجمع العلمي وفك رموز حجر رشيد على يد شامبليون في فتح أبواب الحضارة المصرية القديمة للعالم.',
        activityEn: 'Examine Champollion’s decipherment of the Rosetta Stone and scientific legacy of the expedition.',
        questionAr: 'من هو العالم الفرنسي الذي استطاع فك رموز اللغة المصرية القديمة على حجر رشيد؟',
        questionEn: 'Which French scholar deciphered ancient Egyptian hieroglyphs on the Rosetta Stone?',
        optionsAr: ['جان فرانسوا شامبليون', 'كليبر', 'مينو'],
        optionsEn: ['Jean-François Champollion', 'Kléber', 'Menou'],
        correctIndex: 0,
        vocabulary: [['حجر رشيد', 'Rosetta Stone'], ['الدواوين السياسية', 'consultative councils'], ['الوعي القومي', 'national consciousness']]
      }
    ]
  },
  {
    unitTitleAr: 'الفصل الثاني: بناء الدولة الحديثة في مصر في عهد محمد علي (1805 - 1848)',
    unitTitleEn: 'Chapter 2: Building Modern Egypt under Muhammad Ali Pasha (1805 - 1848)',
    lessons: [
      {
        titleAr: 'تولي محمد علي الحكم وتثبيت سلطته (1805 - 1811)',
        titleEn: 'Muhammad Ali’s Rise to Power and Consolidation of Rule (1805 - 1811)',
        subtitleAr: 'اجتماع دار المحكمة (مايو 1805) كأول صك ديمقراطي، التخلص من حملة فريزر، القضاء على الزعامة الشعبية ومذبحة القلعة',
        subtitleEn: 'House of Justice covenant 1805, repelling the Fraser Expedition, neutralizing Umar Makram, and the Citadel massacre',
        focusAr: 'تحليل دلالة اختيار الشعب لمحمد علي بشروط، واستراتيجية محمد علي في الانفراد بالحكم حتى مذبحة القلعة والتخلص من المماليك.',
        focusEn: 'Analyze the constitutional significance of the 1805 popular mandate and political elimination of internal rivals.',
        activityAr: 'وضح كيف مثل اجتماع بيت القاضي في 13 مايو 1805 انتصاراً تاريخياً لإرادة الشعب المصري وزعامته.',
        activityEn: 'Explain the historical impact of the May 1805 popular uprising appointing Muhammad Ali.',
        questionAr: 'ما الحدث الذي تخلص فيه محمد علي نهائياً من خطر المماليك عام 1811 لينفرد بحكم مصر؟',
        questionEn: 'Which event in 1811 permanently eliminated the Mamluk threat allowing Muhammad Ali autocratic control?',
        optionsAr: ['مذبحة القلعة (مارس 1811)', 'نفي عمر مكرم إلى دمياط', 'معركة شبراخيت'],
        optionsEn: ['The Citadel Massacre (March 1811)', 'Exile of Umar Makram', 'Battle of Shubra Khit'],
        correctIndex: 0,
        vocabulary: [['دار المحكمة', 'House of Justice covenant'], ['الزعامة الشعبية', 'popular leadership'], ['مذبحة القلعة', 'Citadel Massacre']]
      },
      {
        titleAr: 'نظام الاحتكار وبناء القوة الذاتية والجيش والسياسة الخارجية',
        titleEn: 'The Monopoly System, Army Modernization, and Expansionist Foreign Policy',
        subtitleAr: 'تطبيق الاحتكار في الزراعة والصناعة والتجارة، بناء الجيش والأسطول، حروب الشام والجزيرة، ومعاهدة لندن 1840',
        subtitleEn: 'State monopoly economic system, modern military build-up, Levantine wars, and Treaty of London 1840',
        focusAr: 'فهم نظام الاحتكار الاقتصادي لتأمين السيادة الوطنية والاستقلال، وتحليل حروب محمد علي وتدخل الدول الأوروبية لفرض معاهدة لندن 1840.',
        focusEn: 'Analyze the monopoly system driving industrial/agricultural expansion and European containment via the Treaty of London 1840.',
        activityAr: 'ارسم خريطة مفاهيمية للحروب التي خاضها محمد علي تفرق بين الحروب التي استجاب فيها لأمر السلطان والحروب التي تمت بإرادته.',
        activityEn: 'Map Muhammad Ali’s military campaigns distinguishing Ottoman sultan mandates from autonomous imperial expansions.',
        questionAr: 'ما المعاهدة الدولية المفروضة عام 1840 التي قضت على مشروع التوسع الإمبراطوري لمحمد علي؟',
        questionEn: 'Which international treaty imposed in 1840 dismantled Muhammad Ali’s regional empire?',
        optionsAr: ['معاهدة لندن (1840)', 'صلح كوتاهية (1833)', 'معاهدة بلطة ليمان'],
        optionsEn: ['Treaty of London (1840)', 'Convention of Kütahya', 'Treaty of Balta Liman'],
        correctIndex: 0,
        vocabulary: [['نظام الاحتكار', 'state monopoly system'], ['معاهدة لندن 1840', 'Treaty of London 1840'], ['فرمانا 1841', '1841 Firmans']]
      }
    ]
  },
  {
    unitTitleAr: 'الفصل الثالث والرابع: مصر من الثورة العرابية حتى ثورة 1919 وثورة 23 يوليو 1952',
    unitTitleEn: 'Chapters 3 & 4: From Urabi Revolt through the 1919 and 1952 Revolutions',
    lessons: [
      {
        titleAr: 'الثورة العرابية (1881) والاحتلال البريطاني لمصر (1882)',
        titleEn: 'The Urabi Revolution (1881) and British Occupation of Egypt (1882)',
        subtitleAr: 'الأزمة المالية والتدخل الأجنبي، مظاهرة عابدين 9 سبتمبر 1881، معركة التل الكبير، والقانون الأساسي للورد دفرين 1883',
        subtitleEn: 'Financial crisis, dual control, Abdeen demonstration, Battle of Tell El-Kebir, and Dufferin’s Basic Law 1883',
        focusAr: 'تحليل أسباب الثورة العرابية ومطالب الجيش والشعب في عابدين، وأسباب فشل الثورة واحتلال الإنجليز لمصر وسياسة اللورد كرومر.',
        focusEn: 'Analyze causes of the Urabi uprising, demands presented at Abdeen Palace, military collapse at Tell El-Kebir, and British direct rule.',
        activityAr: 'لخص مطالب أحمد عرابي في مظاهرة عابدين 9 سبتمبر 1881 ووضح رد الخديوي توفيق وموقف الحركة الوطنية.',
        activityEn: 'Detail Ahmed Urabi’s three demands during the September 1881 Abdeen Palace demonstration.',
        questionAr: 'ما المعركة الحاسمة التي هُزم فيها الجيش المصري عام 1882 وأدت إلى احتلال الإنجليز للقاهرة؟',
        questionEn: 'Which decisive battle in 1882 resulted in the defeat of the Egyptian army and British capture of Cairo?',
        optionsAr: ['معركة التل الكبير', 'معركة كفر الدوار', 'معركة القصاصين'],
        optionsEn: ['Battle of Tell El-Kebir', 'Battle of Kafr El-Dawar', 'Battle of Kassassin'],
        correctIndex: 0,
        vocabulary: [['الثورة العرابية', 'Urabi Revolt'], ['معركة التل الكبير', 'Battle of Tell El-Kebir'], ['القانون الأساسي', 'Lord Dufferin’s Basic Law']]
      },
      {
        titleAr: 'ثورة 1919 بقيادة سعد زغلول وثورة 23 يوليو 1952 وإنجازاتها',
        titleEn: 'The 1919 National Revolution and 1952 Free Officers Revolution',
        subtitleAr: 'نفي سعد زغلول واندلاع ثورة 1919 الشعبية الشاملة، تصريح 28 فبراير 1922، تنظيم الضباط الأحرار، وإلغاء الملكية وإعلان الجمهورية',
        subtitleEn: 'Saad Zaghloul’s exile, 1919 nationwide uprising, Declaration of 1922, Free Officers Movement, and abolition of the monarchy',
        focusAr: 'إبراز دور ثورة 1919 كثورة شعبية موحدة لجميع أطياف الشعب ومشاركة المرأة، وتحليل أهداف ثورة 23 يوليو 1952 وإنجازاتها في تأميم قناة السويس ودعم التحرر العربي والإفريقي.',
        focusEn: 'Evaluate the unified social fabric of the 1919 revolution and assess the political/social transformations of the July 1952 Revolution.',
        activityAr: 'وضح أهم إنجازات ثورة 23 يوليو 1952 في المجال السياسي (تأميم القناة) والمجال الاجتماعي (مجانية التعليم وقانون الإصلاح الزراعي).',
        activityEn: 'Assess the major political and economic achievements of the 1952 Revolution including Suez nationalization and agrarian reform.',
        questionAr: 'ما التصريح البريطاني الصادر عام 1922 الذي اعترف بمصر دولة مستقلة ذات سيادة مع وجود التحفظات الأربعة؟',
        questionEn: 'Which British unilateral declaration in 1922 recognized Egypt as an independent sovereign kingdom subject to four reserved points?',
        optionsAr: ['تصريح 28 فبراير 1922', 'معاهدة 1936', 'اتفاقية الجلاء 1954'],
        optionsEn: ['Declaration of 28 February 1922', '1936 Anglo-Egyptian Treaty', '1954 Evacuation Agreement'],
        correctIndex: 0,
        vocabulary: [['ثورة 1919', '1919 Egyptian Revolution'], ['تصريح 28 فبراير', 'Declaration of 28 February 1922'], ['تأميم قناة السويس', 'nationalization of the Suez Canal']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 5. Political Geography G12 (الجغرافيا السياسية - الشعبة الأدبية)
// ---------------------------------------------------------------------------
const geographyUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة التمهيدية والأولى: الجغرافيا السياسية ومقومات الدولة',
    unitTitleEn: 'Introductory & Unit 1: Political Geography & Foundations of the State',
    lessons: [
      {
        titleAr: 'مدخل لدراسة الجغرافيا السياسية ومفهوم الدولة والأمة',
        titleEn: 'Introduction to Political Geography: State vs Nation Concepts',
        subtitleAr: 'تطور علم الجغرافيا السياسية (أرسطو، ابن خلدون، راتزل، كيلين)، الجيوبولتيك، والفرق بين الدولة والأمة، وأنواع الدول',
        subtitleEn: 'Evolution from Aristotle/Ibn Khaldun to Ratzel and Kjellén, Geopolitics vs Political Geography, and Unitary vs Federal states',
        focusAr: 'التمييز بين الجغرافيا السياسية وعلم الجيوبولتيك، والمقارنة بين الدولة المركزية الوحدوية والدولة الاتحادية الفيدرالية والكونفدرالية.',
        focusEn: 'Contrast objective political geography with dynamic geopolitics and differentiate unitary states from federations and confederations.',
        activityAr: 'قارن بين مقومات قيام الدولة (أرض وشعب وسلطة) ومقومات قيام الأمة مع الاستشهاد بالأمة العربية ودولة اليابان وسويسرا.',
        activityEn: 'Compare prerequisites of a State versus a Nation referencing the Arab Nation, Switzerland, and Japan.',
        questionAr: 'من هو العالم الجغرافي الذي وضع كتاب «مقدمة التاريخ» وتحدث فيه عن دورة حياة الدولة ونشأتها وشبابها واضمحلالها؟',
        questionEn: 'Which scholar discussed the biological life cycle of states (growth, maturity, decline) in his historical Muqaddimah?',
        optionsAr: ['عبد الرحمن ابن خلدون', 'أرسطو', 'فريدريك راتزل'],
        optionsEn: ['Ibn Khaldun', 'Aristotle', 'Friedrich Ratzel'],
        correctIndex: 0,
        vocabulary: [['الجغرافيا السياسية', 'political geography'], ['الجيوبولتيك', 'geopolitics'], ['الدولة الفيدرالية', 'federal state']]
      },
      {
        titleAr: 'المقومات الطبيعية والبشرية لقوة الدولة ووزنها الجيوسياسي',
        titleEn: 'Physical and Human Components of State Geopolitical Power',
        subtitleAr: 'الموقع الفلكي والجغرافي والمساحة والشكل والتضاريس والمناخ، الحجم السكاني والخصائص الديموغرافية والتركيب الاقتصادي',
        subtitleEn: 'Geographical location, shape, topography, climate, demographic volume, ethnic composition, and economic power',
        focusAr: 'تحليل أثر الشكل المندمج مقابل المجزأ أو الشريطي على قوة الدفاع والإدارة، ودور التنوع التضاريسي والمناخي، ووزن القوة العسكرية والاقتصادية.',
        focusEn: 'Analyze how spatial shapes (compact vs elongated/fragmented), natural resources, demographic size, and industrial capacity determine geopolitical weight.',
        activityAr: 'وضح مميزات الشكل المندمج المنتظم (مثل مصر وفرنسا) للدولة من حيث سهولة الاتصال وحسن الإدارة وحماية الحدود.',
        activityEn: 'Evaluate defense and governance advantages of compact state shapes (such as Egypt and France).',
        questionAr: 'أي من أشكال الدول الآتية يعتبر الأفضل من حيث سهولة الدفاع والإدارة الداخلية والسيطرة على الأطراف؟',
        questionEn: 'Which geographical shape is considered optimal for national defense, internal cohesion, and border surveillance?',
        optionsAr: ['الشكل المندمج (المنتظم)', 'الشكل الشريطي المستطيل', 'الشكل المجزأ المحتوى'],
        optionsEn: ['Compact (regular) shape', 'Elongated (strip) shape', 'Fragmented / perforated shape'],
        correctIndex: 0,
        vocabulary: [['الشكل المندمج', 'compact shape'], ['الموقع الاستراتيجي', 'strategic maritime location'], ['القدرة الاقتصادية', 'economic capability']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية والثالثة والرابعة: الحدود السياسية والتكتلات والنظام العالمي',
    unitTitleEn: 'Units 2, 3 & 4: Political Boundaries, Blocs & The New World Order',
    lessons: [
      {
        titleAr: 'الحدود السياسية وأنواعها ووظائفها والمشكلات الحدودية',
        titleEn: 'Political Boundaries: Types, Functions and Border Disputes',
        subtitleAr: 'الفرق بين الحدود والتخوم، مراحل تخطيط الحد السياسي، الحدود الهندسية والطبيعية والإثنوغرافية، ومشكلات المياه والطاقة وسبتة ومليلية',
        subtitleEn: 'Boundaries vs frontiers, stages of boundary delimitation, geometric/natural/ethnographic borders, and water/energy disputes',
        focusAr: 'فهم مراحل تخطيط الحدود (التعريف والتحديد والتعيين وإدارة الحد)، ووظائف الحدود في الحماية والأمن، وتحليل بؤر النزاعات الدولية.',
        focusEn: 'Trace the four stages of boundary demarcation, examine border security functions, and analyze territorial disputes.',
        activityAr: 'بين أهمية الحدود الحضارية الإثنوغرافية (اللغوية والدينية) في وسط أوروبا بعد الحرب العالمية الأولى لمنع النزاعات.',
        activityEn: 'Examine post-WWI ethnographic boundary creation in Central Europe designed to prevent ethnic conflict.',
        questionAr: 'ما هي المرحلة الأولى من مراحل تخطيط ورسم الحدود السياسية بين الدول؟',
        questionEn: 'What is the initial phase in establishing an international political boundary?',
        optionsAr: ['مرحلة التعريف والتخطيط (صياغة المعاهدة)', 'مرحلة التحديد على الخريطة', 'مرحلة التعيين على الطبيعة'],
        optionsEn: ['Definition and treaty drafting', 'Delimitation on cartographic maps', 'Demarcation on the ground'],
        correctIndex: 0,
        vocabulary: [['الحدود السياسية', 'political boundaries'], ['الحدود الإثنوغرافية', 'ethnographic borders'], ['المياه الإقليمية', 'territorial waters']]
      },
      {
        titleAr: 'التكتلات الاقتصادية والأحلاف العسكرية والنظام العالمي الجديد',
        titleEn: 'Economic Blocs, Military Alliances, and the New World Order',
        subtitleAr: 'الاتحاد الأوروبي، الكوميسا، النفتا، حلف شمال الأطلسي (الناتو)، سقوط الاتحاد السوفيتي، والعولمة والنظام العالمي أحادي القطبية',
        subtitleEn: 'European Union, COMESA, NATO, collapse of the Soviet Union, globalization, and the unipolar New World Order',
        focusAr: 'تحليل مراحل التكامل الاقتصادي (منطقة التجارة الحرة، الاتحاد الجمركي، السوق المشتركة، الوحدة الاقتصادية)، وأهداف حلف الناتو، وتأثير النظام العالمي الجديد على الدول النامية.',
        focusEn: 'Analyze stages of economic integration, evaluate NATO expansion, and discuss the geopolitical impact of the New World Order on developing nations.',
        activityAr: 'وضح المزايا الاقتصادية والتجارية التي تجنيها مصر من عضويتها في تجمع الكوميسا (COMESA) في إفريقيا.',
        activityEn: 'Assess Egypt’s economic and commercial benefits from its membership in the COMESA African trading bloc.',
        questionAr: 'ما التكتل الاقتصادي الإفريقي الذي انضمت إليه مصر لتعزيز التبادل التجاري مع دول شرق وجنوب إفريقيا؟',
        questionEn: 'Which regional economic integration bloc did Egypt join to expand commerce across Eastern and Southern Africa?',
        optionsAr: ['تجمع الكوميسا (COMESA)', 'تجمع النفتا (NAFTA)', 'الاتحاد الأوروبي'],
        optionsEn: ['COMESA bloc', 'NAFTA bloc', 'European Union'],
        correctIndex: 0,
        vocabulary: [['التكتلات الاقتصادية', 'economic trading blocs'], ['الكوميسا', 'COMESA'], ['النظام العالمي الجديد', 'New World Order']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 6. Philosophy & Logic G12 (الفلسفة والمنطق - الشعبة الأدبية)
// ---------------------------------------------------------------------------
const philosophyUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الفرع الأول: الفلسفة التطبيقية - قضايا البيئة والبيوتيقا وأخلاقيات المهنة',
    unitTitleEn: 'Branch 1: Applied Philosophy - Environmental Ethics, Bioethics & Work Ethics',
    lessons: [
      {
        titleAr: 'الفلسفة وقضايا البيئة وحقوق الأجيال القادمة (هانز يوناس)',
        titleEn: 'Environmental Philosophy and Responsibilities to Future Generations (Hans Jonas)',
        subtitleAr: 'مراحل علاقة الإنسان بالبيئة، الفلسفة الطاوية عند لاوتسو، أخلاق الأرض عند ليوبولد، والإيكولوجيا العميقة لأرني نايس',
        subtitleEn: 'Stages of human-environment interaction, Taoist ethics of Laozi, Leopold’s land ethic, Arne Naess’s deep ecology, and Hans Jonas',
        focusAr: 'تتبع مراحل علاقة الإنسان بالبيئة من التقديس إلى التفسير والسيطرة والقهر حتى الاحترام والصون، ومسؤولية حماية البيئة للأجيال القادمة.',
        focusEn: 'Trace historical human-nature phases, evaluate Aldo Leopold’s land ethic, deep ecology principles, and Hans Jonas’s generational duty.',
        activityAr: 'لخص المبادئ الثمانية للإيكولوجيا العميقة عند أرني نايس ووضح كيف تحمي التنوع الحيوي لكوكب الأرض.',
        activityEn: 'Examine Arne Naess’s eight core principles of deep ecology emphasizing inherent biosphere value.',
        questionAr: 'من هو الفيلسوف المعاصر صاحب نظرية «أخلاق المسؤولية» ودعوة الحفاظ على حقوق الأجيال القادمة في الموارد الطبيعية؟',
        questionEn: 'Which philosopher established the “Ethics of Responsibility” safeguarding resources for unborn generations?',
        optionsAr: ['هانز يوناس', 'ألدو ليوبولد', 'دانيال كالهان'],
        optionsEn: ['Hans Jonas', 'Aldo Leopold', 'Daniel Callahan'],
        correctIndex: 0,
        vocabulary: [['أخلاق المسؤولية', 'ethics of responsibility'], ['الإيكولوجيا العميقة', 'deep ecology'], ['أخلاق الأرض', 'land ethic']]
      },
      {
        titleAr: 'الرؤية الفلسفية للأخلاق البيولوجية والطبية (البيوتيقا) وأخلاقيات المهنة',
        titleEn: 'Bioethics (Medical Dilemmas) and Occupational Professional Ethics',
        subtitleAr: 'مفهوم البيوتيقا، الإنجاب الاصطناعي والاستنساخ، الموت الرحيم وزرع الأعضاء، الموافقة المستنيرة، ومعايير أخلاقيات المهنة',
        subtitleEn: 'Bioethics definition, assisted reproduction, cloning, organ transplantation, brain death, informed consent, and professional codes',
        focusAr: 'تحليل المشكلات الأخلاقية الناجمة عن التقدم في علوم الطب والبيولوجيا، ودور الفلسفة في ترسيخ الواجب المهني ومواثيق الشرف الوظيفي.',
        focusEn: 'Analyze moral dilemmas in genetic engineering, cloning, brain death criteria, informed consent, and professional business ethics.',
        activityAr: 'حدد عناصر الموافقة المستنيرة في الممارسات الطبية (الإفصاح، الفهم، الأهلية، الطواعية، والموافقة).',
        activityEn: 'Detail the five essential elements of informed consent in medical research ethics.',
        questionAr: 'ما هو العنصر في الموافقة المستنيرة الذي يعني حق المريض في اتخاذ قراره بمحض إرادته دون ضغط أو إكراه؟',
        questionEn: 'Which element of informed consent guarantees voluntary decision-making without external coercion?',
        optionsAr: ['الطواعية (Voluntariness)', 'الإفصاح (Disclosure)', 'الأهلية (Competence)'],
        optionsEn: ['Voluntariness', 'Disclosure', 'Competence'],
        correctIndex: 0,
        vocabulary: [['البيوتيقا', 'bioethics'], ['الموافقة المستنيرة', 'informed consent'], ['أخلاقيات المهنة', 'occupational ethics']]
      }
    ]
  },
  {
    unitTitleAr: 'الفرع الثاني: المنطق وتطبيقاته - الاستقراء والاستنباط والذكاء الاصطناعي',
    unitTitleEn: 'Branch 2: Logic & Applications - Induction, Deduction & Artificial Intelligence',
    lessons: [
      {
        titleAr: 'الاستقراء والمنهج العلمي المعاصر وطرق جون ستيوارت مل',
        titleEn: 'Scientific Induction and John Stuart Mill’s Five Methods of Causal Proof',
        subtitleAr: 'الفرق بين الاستدلال الاستنباطي والاستقرائي، خطوات المنهج الاستقرائي، وأوهام فرانسيس بيكون، وطرق مل الخمس للتحقق من العلية',
        subtitleEn: 'Induction vs deduction, Bacon’s idols of the mind, and John Stuart Mill’s five methods for testing causal relations',
        focusAr: 'فهم أوهام بيكون الأربعة (الجنس، الكهف، السوق، المسرح)، وتطبيق طرق مل (الاتفاق، الاختلاف، الجمع بينهما، التلازم في التغير، والبواقي).',
        focusEn: 'Master Francis Bacon’s cognitive biases and apply John Stuart Mill’s methods of agreement, difference, concomitant variations, and residues.',
        activityAr: 'حل مسألة تطبيقية تبين طريقة التلازم في التغير عند مل (مثل العلاقة الطردية بين زيادة الإعلانات وزيادة المبيعات).',
        activityEn: 'Analyze Mill’s method of concomitant variations linking advertising expenditure to commercial sales.',
        questionAr: 'ما هي الطريقة عند جون ستيوارت مل التي تنص على أنه: "إذا اشتركت حالتان أو أكثر للظاهرة في ظرف واحد فقط، فإن هذا الظرف هو العلة"؟',
        questionEn: 'Which of John Stuart Mill’s methods posits that if two or more instances share only one common circumstance, that is the cause?',
        optionsAr: ['طريقة الاتفاق (الاتفاق في الحضور)', 'طريقة الاختلاف', 'طريقة البواقي'],
        optionsEn: ['Method of Agreement', 'Method of Difference', 'Method of Residues'],
        correctIndex: 0,
        vocabulary: [['المنهج الاستقرائي', 'inductive scientific method'], ['طريقة الاتفاق', 'method of agreement'], ['أوهام بيكون', 'Baconian idols']]
      },
      {
        titleAr: 'المنطق الرمزي والنسق الاستنباطي الرياضي والذكاء الاصطناعي',
        titleEn: 'Symbolic Logic, Deductive Mathematical Systems & Artificial Intelligence',
        subtitleAr: 'النسق الاستنباطي الرياضي (المعرفات، اللامعرفات، البديهيات، المسلمات)، الروابط المنطقية وجداول الصدق، والمنطق المرن في الذكاء الاصطناعي',
        subtitleEn: 'Axiomatic deductive systems, truth tables for propositional connectives, knowledge representation, and fuzzy logic in AI systems',
        focusAr: 'صياغة القضايا بالرموز والتحقق من صدقها عبر جداول الصدق (الوصل، الفصل، الشرط، التشارط)، وفهم دور المنطق في هندسة المعرفة والذكاء الاصطناعي.',
        focusEn: 'Formulate propositional logic expressions with truth tables (conjunction, disjunction, implication, biconditional) and analyze fuzzy logic in AI.',
        activityAr: 'أنشئ جدول الصدق لرابطة الشرط التبادلي (التشارط: p ↔ q) وحدد متى تكون القضية المركبة صادقة.',
        activityEn: 'Construct the truth table for biconditional implication proving when compound propositions evaluate to true.',
        questionAr: 'تكون القضية الشرطية (إذا كان p فإن q) كاذبة في حالة واحدة فقط، ما هي؟',
        questionEn: 'A material conditional proposition (p → q) is false in exactly one scenario; which one?',
        optionsAr: ['عندما يكون المقدم صادقاً والتالي كاذباً', 'عندما يكون المقدم كاذباً والتالي صادقاً', 'عندما يكون الطرفان كاذبين'],
        optionsEn: ['When antecedent is true and consequent is false', 'When antecedent is false and consequent is true', 'When both are false'],
        correctIndex: 0,
        vocabulary: [['النسق الاستنباطي', 'axiomatic deductive system'], ['جداول الصدق', 'truth tables'], ['المنطق المرن', 'fuzzy logic in AI']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 7. English G12 (First Foreign Language - Official MOE 2026/2027 Framework)
// ---------------------------------------------------------------------------
const englishUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'Unit 1: Inside the World of Care',
    unitTitleEn: 'Unit 1: Inside the World of Care',
    lessons: [
      {
        titleAr: 'A Day in the Life of a Hospital Nurse',
        titleEn: 'A Day in the Life of a Hospital Nurse',
        subtitleAr: 'Hospital workflow, 12-hour shifts, patient care, and administering medication',
        subtitleEn: 'Hospital workflow, 12-hour shifts, patient care, and administering medication',
        focusAr: 'Analyze reading comprehension regarding healthcare careers, emergency department routines, and vocabulary in context (shift, buzz, administer, attention, victim, chaos, heartbreaking, rewarding).',
        focusEn: 'Analyze reading comprehension regarding healthcare careers, emergency department routines, and vocabulary in context (shift, buzz, administer, attention, victim, chaos, heartbreaking, rewarding).',
        activityAr: 'Analyze Nurse Sarah\'s daily challenges and explain how interprofessional teamwork mitigates emergency crises.',
        activityEn: 'Analyze Nurse Sarah\'s daily challenges and explain how interprofessional teamwork mitigates emergency crises.',
        questionAr: 'Which phrase best defines the idiom \'Teamwork makes the dream work\' as used in healthcare settings?',
        questionEn: 'Which phrase best defines the idiom \'Teamwork makes the dream work\' as used in healthcare settings?',
        optionsAr: [
          'Collaborative effort between professionals produces optimal outcomes.',
          'Individual competition yields higher efficiency.',
          'Strict hierarchy prevents clinical errors.'
        ],
        optionsEn: [
          'Collaborative effort between professionals produces optimal outcomes.',
          'Individual competition yields higher efficiency.',
          'Strict hierarchy prevents clinical errors.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['administer medication', 'administer medication'],
          ['shift work', 'shift work'],
          ['interprofessional teamwork', 'interprofessional teamwork'],
          ['rewarding career', 'rewarding career']
        ]
      },
      {
        titleAr: 'Grammar: Present Perfect Simple vs. Present Perfect Continuous',
        titleEn: 'Grammar: Present Perfect Simple vs. Present Perfect Continuous',
        subtitleAr: 'Contrasting completed action results (have/has + p.p.) with continuous ongoing duration (have/has been + -ing)',
        subtitleEn: 'Contrasting completed action results (have/has + p.p.) with continuous ongoing duration (have/has been + -ing)',
        focusAr: 'Master syntactic distinctions between the Present Perfect Simple for completed experiences/results and Present Perfect Continuous for actions lasting over a period of time with for, since, lately, and recently.',
        focusEn: 'Master syntactic distinctions between the Present Perfect Simple for completed experiences/results and Present Perfect Continuous for actions lasting over a period of time with for, since, lately, and recently.',
        activityAr: 'Complete sentence transformations comparing \'Nurse Sarah has treated 15 patients today\' with \'Nurse Sarah has been treating patients for eight hours.\'',
        activityEn: 'Complete sentence transformations comparing \'Nurse Sarah has treated 15 patients today\' with \'Nurse Sarah has been treating patients for eight hours.\'',
        questionAr: 'Choose the correct form: \'Dr. Hany looks exhausted because he _______ in surgery for six consecutive hours.\'',
        questionEn: 'Choose the correct form: \'Dr. Hany looks exhausted because he _______ in surgery for six consecutive hours.\'',
        optionsAr: [
          'has been operating',
          'has operated',
          'was operated'
        ],
        optionsEn: [
          'has been operating',
          'has operated',
          'was operated'
        ],
        correctIndex: 0,
        vocabulary: [
          ['present perfect continuous', 'present perfect continuous'],
          ['duration marker', 'duration marker'],
          ['ongoing action', 'ongoing action'],
          ['present result', 'present result']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Unit 2: The Power of Machines',
    unitTitleEn: 'Unit 2: The Power of Machines',
    lessons: [
      {
        titleAr: 'Artificial Intelligence & Robotics in Modern Society',
        titleEn: 'Artificial Intelligence & Robotics in Modern Society',
        subtitleAr: 'Technological disruption, surgical robotics, workplace automation, and human-machine collaboration',
        subtitleEn: 'Technological disruption, surgical robotics, workplace automation, and human-machine collaboration',
        focusAr: 'Evaluate reading texts concerning artificial intelligence, robotic assistance in healthcare and industry, ethical dilemmas, and the preservation of human empathy in technology-driven fields.',
        focusEn: 'Evaluate reading texts concerning artificial intelligence, robotic assistance in healthcare and industry, ethical dilemmas, and the preservation of human empathy in technology-driven fields.',
        activityAr: 'Participate in a structured discussion weighing the advantages of AI diagnostic accuracy against the irreplaceable value of human empathy.',
        activityEn: 'Participate in a structured discussion weighing the advantages of AI diagnostic accuracy against the irreplaceable value of human empathy.',
        questionAr: 'What is highlighted as the primary challenge when integrating autonomous AI into medical decision-making?',
        questionEn: 'What is highlighted as the primary challenge when integrating autonomous AI into medical decision-making?',
        optionsAr: [
          'Balancing computational algorithms with empathetic human clinical judgment.',
          'Eliminating all human medical practitioners from operating theaters.',
          'Replacing diagnostic software with manual handwritten charts.'
        ],
        optionsEn: [
          'Balancing computational algorithms with empathetic human clinical judgment.',
          'Eliminating all human medical practitioners from operating theaters.',
          'Replacing diagnostic software with manual handwritten charts.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['artificial intelligence', 'artificial intelligence'],
          ['workplace automation', 'workplace automation'],
          ['surgical robotics', 'surgical robotics'],
          ['human-centered tech', 'human-centered tech']
        ]
      },
      {
        titleAr: 'Grammar: Reported Speech (Statements, Commands & Requests)',
        titleEn: 'Grammar: Reported Speech (Statements, Commands & Requests)',
        subtitleAr: 'Tense backshifting, pronoun alterations, time/place adverbial shifts, and reporting verbs (explain, claim, instruct, urge)',
        subtitleEn: 'Tense backshifting, pronoun alterations, time/place adverbial shifts, and reporting verbs (explain, claim, instruct, urge)',
        focusAr: 'Apply rules of indirect speech to convert direct statements and commands into reported structures, mastering changes in modal auxiliaries, demonstratives, and reporting verb patterns.',
        focusEn: 'Apply rules of indirect speech to convert direct statements and commands into reported structures, mastering changes in modal auxiliaries, demonstratives, and reporting verb patterns.',
        activityAr: 'Transform direct commands from hospital safety guidelines into formal indirect reporting using told, advised, and instructed.',
        activityEn: 'Transform direct commands from hospital safety guidelines into formal indirect reporting using told, advised, and instructed.',
        questionAr: 'Which sentence correctly converts: \'The chief surgeon said, \"Sterilize the instruments before entering\"\'',
        questionEn: 'Which sentence correctly converts: \'The chief surgeon said, \"Sterilize the instruments before entering\"\'',
        optionsAr: [
          'The chief surgeon instructed the nurses to sterilize the instruments before entering.',
          'The chief surgeon said that sterilizing the instruments before entering.',
          'The chief surgeon told to sterilize the instruments before entering.'
        ],
        optionsEn: [
          'The chief surgeon instructed the nurses to sterilize the instruments before entering.',
          'The chief surgeon said that sterilizing the instruments before entering.',
          'The chief surgeon told to sterilize the instruments before entering.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['reported speech', 'reported speech'],
          ['reporting verb', 'reporting verb'],
          ['tense backshift', 'tense backshift'],
          ['indirect command', 'indirect command']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Unit 3: Protect Nature, Protect Future',
    unitTitleEn: 'Unit 3: Protect Nature, Protect Future',
    lessons: [
      {
        titleAr: 'Ecological Sustainability, Green Energy & Egypt\'s Initiatives',
        titleEn: 'Ecological Sustainability, Green Energy & Egypt\'s Initiatives',
        subtitleAr: 'Renewable energy projects, Benban Solar Park, green hydrogen, and carbon footprint reduction',
        subtitleEn: 'Renewable energy projects, Benban Solar Park, green hydrogen, and carbon footprint reduction',
        focusAr: 'Examine Egypt’s national sustainability initiatives, transition to solar and wind energy at Benban and the Gulf of Suez, and methods for mitigating global climate change through civic responsibility.',
        focusEn: 'Examine Egypt’s national sustainability initiatives, transition to solar and wind energy at Benban and the Gulf of Suez, and methods for mitigating global climate change through civic responsibility.',
        activityAr: 'Draft an analytical cause-and-effect summary of the economic and environmental dividends yielded by large-scale solar installations.',
        activityEn: 'Draft an analytical cause-and-effect summary of the economic and environmental dividends yielded by large-scale solar installations.',
        questionAr: 'What distinction makes the Benban Solar Park a global benchmark for clean energy transitions?',
        questionEn: 'What distinction makes the Benban Solar Park a global benchmark for clean energy transitions?',
        optionsAr: [
          'It is one of the world’s largest photovoltaic solar complexes, significantly reducing greenhouse gas emissions.',
          'It relies primarily on fossil fuel generators during daytime operation.',
          'It is exclusively designed for nuclear power desalination plants.'
        ],
        optionsEn: [
          'It is one of the world’s largest photovoltaic solar complexes, significantly reducing greenhouse gas emissions.',
          'It relies primarily on fossil fuel generators during daytime operation.',
          'It is exclusively designed for nuclear power desalination plants.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['ecological sustainability', 'ecological sustainability'],
          ['photovoltaic park', 'photovoltaic park'],
          ['green hydrogen', 'green hydrogen'],
          ['carbon footprint', 'carbon footprint']
        ]
      },
      {
        titleAr: 'Grammar: Modals of Deduction and Probability',
        titleEn: 'Grammar: Modals of Deduction and Probability',
        subtitleAr: 'Expressing certainty, impossibility, and past deduction using must, can’t, might, and modal perfects (must have + p.p.)',
        subtitleEn: 'Expressing certainty, impossibility, and past deduction using must, can’t, might, and modal perfects (must have + p.p.)',
        focusAr: 'Differentiate degrees of epistemic modality in present and past contexts, contrasting \'must have been\' (certainty) with \'can\'t have been\' (impossibility) and \'might have been\' (possibility).',
        focusEn: 'Differentiate degrees of epistemic modality in present and past contexts, contrasting \'must have been\' (certainty) with \'can\'t have been\' (impossibility) and \'might have been\' (possibility).',
        activityAr: 'Evaluate circumstantial scientific evidence to formulate logical deductions using appropriate modal perfect structures.',
        activityEn: 'Evaluate circumstantial scientific evidence to formulate logical deductions using appropriate modal perfect structures.',
        questionAr: 'Choose the correct deduction: \'The laboratory equipment was completely cool and packed away; the researchers _______ their experiment hours ago.\'',
        questionEn: 'Choose the correct deduction: \'The laboratory equipment was completely cool and packed away; the researchers _______ their experiment hours ago.\'',
        optionsAr: [
          'must have finished',
          'can\'t have finished',
          'might finish'
        ],
        optionsEn: [
          'must have finished',
          'can\'t have finished',
          'might finish'
        ],
        correctIndex: 0,
        vocabulary: [
          ['logical deduction', 'logical deduction'],
          ['epistemic modality', 'epistemic modality'],
          ['past deduction', 'past deduction'],
          ['degrees of certainty', 'degrees of certainty']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Review 1: Cumulative Synthesis (Units 1 - 3)',
    unitTitleEn: 'Review 1: Cumulative Synthesis (Units 1 - 3)',
    lessons: [
      {
        titleAr: 'Lexical Collocations, Phrasal Verbs & Advanced Translation',
        titleEn: 'Lexical Collocations, Phrasal Verbs & Advanced Translation',
        subtitleAr: 'Synthesis of healthcare, artificial intelligence, and environmental lexemes with bidirectional translation',
        subtitleEn: 'Synthesis of healthcare, artificial intelligence, and environmental lexemes with bidirectional translation',
        focusAr: 'Synthesize vocabulary and grammar across Units 1 to 3, applying lexical collocations, phrasal verbs, and standardized bilateral translation techniques aligned with national secondary examinations.',
        focusEn: 'Synthesize vocabulary and grammar across Units 1 to 3, applying lexical collocations, phrasal verbs, and standardized bilateral translation techniques aligned with national secondary examinations.',
        activityAr: 'Translate an authentic analytical paragraph on sustainable healthcare and robotics into precise academic English.',
        activityEn: 'Translate an authentic analytical paragraph on sustainable healthcare and robotics into precise academic English.',
        questionAr: 'Which option represents the most accurate academic translation for: \'تلعب الطاقة المتجددة دوراً محورياً في الحد من الانبعاثات الكربونية وتحقيق التنمية المستدامة\'? ',
        questionEn: 'Which option represents the most accurate academic translation for: \'تلعب الطاقة المتجددة دوراً محورياً في الحد من الانبعاثات الكربونية وتحقيق التنمية المستدامة\'? ',
        optionsAr: [
          'Renewable energy plays a pivotal role in reducing carbon emissions and achieving sustainable development.',
          'Renewable energy makes a small work for carbon emissions and continuous growing.',
          'Renewable energy has taken over carbon emissions for industrial building.'
        ],
        optionsEn: [
          'Renewable energy plays a pivotal role in reducing carbon emissions and achieving sustainable development.',
          'Renewable energy makes a small work for carbon emissions and continuous growing.',
          'Renewable energy has taken over carbon emissions for industrial building.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['pivotal role', 'pivotal role'],
          ['bilateral translation', 'bilateral translation'],
          ['lexical collocation', 'lexical collocation'],
          ['academic synthesis', 'academic synthesis']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Unit 4: Marine Life',
    unitTitleEn: 'Unit 4: Marine Life',
    lessons: [
      {
        titleAr: 'The Red Sea Marine Ecosystem & Coral Reef Conservation',
        titleEn: 'The Red Sea Marine Ecosystem & Coral Reef Conservation',
        subtitleAr: 'Endemic biodiversity, coral bleaching, protected marine reserves (Ras Mohamed), and ocean ecology',
        subtitleEn: 'Endemic biodiversity, coral bleaching, protected marine reserves (Ras Mohamed), and ocean ecology',
        focusAr: 'Analyze scientific and expository texts on the unique thermal resilience of Red Sea coral reefs, marine biodiversity hotspots, threats posed by plastic pollution, and ecological preservation measures.',
        focusEn: 'Analyze scientific and expository texts on the unique thermal resilience of Red Sea coral reefs, marine biodiversity hotspots, threats posed by plastic pollution, and ecological preservation measures.',
        activityAr: 'Create an infographic outline detailing three conservation strategies preserving Egyptian marine nature reserves.',
        activityEn: 'Create an infographic outline detailing three conservation strategies preserving Egyptian marine nature reserves.',
        questionAr: 'Why do global marine biologists regard the northern Red Sea coral reefs as exceptionally significant for climate study?',
        questionEn: 'Why do global marine biologists regard the northern Red Sea coral reefs as exceptionally significant for climate study?',
        optionsAr: [
          'They demonstrate high biological resilience to rising ocean water temperatures.',
          'They are artificial structures constructed by deep-sea oil drilling platforms.',
          'They contain zero fish species due to excessive water salinity.'
        ],
        optionsEn: [
          'They demonstrate high biological resilience to rising ocean water temperatures.',
          'They are artificial structures constructed by deep-sea oil drilling platforms.',
          'They contain zero fish species due to excessive water salinity.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['marine biodiversity', 'marine biodiversity'],
          ['coral bleaching', 'coral bleaching'],
          ['thermal resilience', 'thermal resilience'],
          ['marine sanctuary', 'marine sanctuary']
        ]
      },
      {
        titleAr: 'Grammar: Defining and Non-Defining Relative Clauses',
        titleEn: 'Grammar: Defining and Non-Defining Relative Clauses',
        subtitleAr: 'Relative pronouns (who, which, that, whose, where, when), comma conventions, and pronoun omission rules',
        subtitleEn: 'Relative pronouns (who, which, that, whose, where, when), comma conventions, and pronoun omission rules',
        focusAr: 'Master syntactic distinctions between defining relative clauses (essential identifying information, no commas, \'that\' permitted) and non-defining relative clauses (extra descriptive detail, commas required, \'that\' forbidden).',
        focusEn: 'Master syntactic distinctions between defining relative clauses (essential identifying information, no commas, \'that\' permitted) and non-defining relative clauses (extra descriptive detail, commas required, \'that\' forbidden).',
        activityAr: 'Combine complex sentences regarding marine biology using correct relative pronouns and standard comma punctuation.',
        activityEn: 'Combine complex sentences regarding marine biology using correct relative pronouns and standard comma punctuation.',
        questionAr: 'Which sentence correctly demonstrates a non-defining relative clause with proper punctuation?',
        questionEn: 'Which sentence correctly demonstrates a non-defining relative clause with proper punctuation?',
        optionsAr: [
          'Ras Mohamed National Park, which was declared a marine sanctuary in 1983, attracts researchers globally.',
          'Ras Mohamed National Park that was declared a marine sanctuary in 1983 attracts researchers globally.',
          'Ras Mohamed National Park which was declared a marine sanctuary in 1983 attracts, researchers globally.'
        ],
        optionsEn: [
          'Ras Mohamed National Park, which was declared a marine sanctuary in 1983, attracts researchers globally.',
          'Ras Mohamed National Park that was declared a marine sanctuary in 1983 attracts researchers globally.',
          'Ras Mohamed National Park which was declared a marine sanctuary in 1983 attracts, researchers globally.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['defining clause', 'defining clause'],
          ['non-defining clause', 'non-defining clause'],
          ['relative pronoun', 'relative pronoun'],
          ['comma convention', 'comma convention']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Unit 5: From Muscles to Mindset',
    unitTitleEn: 'Unit 5: From Muscles to Mindset',
    lessons: [
      {
        titleAr: 'Athletic Endurance, Sports Science & the Growth Mindset',
        titleEn: 'Athletic Endurance, Sports Science & the Growth Mindset',
        subtitleAr: 'Physical physiology, deliberate training, cognitive resilience, and psychological determination',
        subtitleEn: 'Physical physiology, deliberate training, cognitive resilience, and psychological determination',
        focusAr: 'Explore psychological and physical dimensions of athletic excellence, contrasting fixed and growth mindsets, understanding neural adaptation through deliberate practice, and overcoming performance plateaus.',
        focusEn: 'Explore psychological and physical dimensions of athletic excellence, contrasting fixed and growth mindsets, understanding neural adaptation through deliberate practice, and overcoming performance plateaus.',
        activityAr: 'Formulate a 4-step cognitive reframing plan to transform academic or athletic setbacks into productive learning milestones.',
        activityEn: 'Formulate a 4-step cognitive reframing plan to transform academic or athletic setbacks into productive learning milestones.',
        questionAr: 'According to educational psychology, what characterizes an individual possessing a \'growth mindset\'? ',
        questionEn: 'According to educational psychology, what characterizes an individual possessing a \'growth mindset\'? ',
        optionsAr: [
          'Viewing challenges and effort as pathways to expand intellectual and physical capacity.',
          'Believing that talent and intellect are unchangeable biological traits.',
          'Avoiding difficult tasks to protect self-esteem from failure.'
        ],
        optionsEn: [
          'Viewing challenges and effort as pathways to expand intellectual and physical capacity.',
          'Believing that talent and intellect are unchangeable biological traits.',
          'Avoiding difficult tasks to protect self-esteem from failure.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['growth mindset', 'growth mindset'],
          ['deliberate practice', 'deliberate practice'],
          ['cognitive resilience', 'cognitive resilience'],
          ['neuroplasticity', 'neuroplasticity']
        ]
      },
      {
        titleAr: 'Grammar: Gerunds and Infinitives in Complex Syntax',
        titleEn: 'Grammar: Gerunds and Infinitives in Complex Syntax',
        subtitleAr: 'Verbs followed exclusively by gerunds (-ing) or to-infinitives, and verbs exhibiting semantic shifts (remember, stop, forget, regret)',
        subtitleEn: 'Verbs followed exclusively by gerunds (-ing) or to-infinitives, and verbs exhibiting semantic shifts (remember, stop, forget, regret)',
        focusAr: 'Master structural rules governing verb complements, differentiating subtle semantic changes in dual-behavior verbs such as \'stop to do\' (halt in order to perform an action) versus \'stop doing\' (discontinue an ongoing action).',
        focusEn: 'Master structural rules governing verb complements, differentiating subtle semantic changes in dual-behavior verbs such as \'stop to do\' (halt in order to perform an action) versus \'stop doing\' (discontinue an ongoing action).',
        activityAr: 'Analyze and correct student sentences with ambiguous gerund and infinitive usage.',
        activityEn: 'Analyze and correct student sentences with ambiguous gerund and infinitive usage.',
        questionAr: 'Choose the sentence that correctly conveys: \'The runner discontinued eating refined sugar completely to enhance endurance\':',
        questionEn: 'Choose the sentence that correctly conveys: \'The runner discontinued eating refined sugar completely to enhance endurance\':',
        optionsAr: [
          'The runner stopped eating refined sugar to enhance endurance.',
          'The runner stopped to eat refined sugar to enhance endurance.',
          'The runner stopped eat refined sugar to enhance endurance.'
        ],
        optionsEn: [
          'The runner stopped eating refined sugar to enhance endurance.',
          'The runner stopped to eat refined sugar to enhance endurance.',
          'The runner stopped eat refined sugar to enhance endurance.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['gerund complement', 'gerund complement'],
          ['to-infinitive', 'to-infinitive'],
          ['semantic contrast', 'semantic contrast'],
          ['verb complementation', 'verb complementation']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Unit 6: Let\'s Hang Out!',
    unitTitleEn: 'Unit 6: Let\'s Hang Out!',
    lessons: [
      {
        titleAr: 'Youth Social Life, Leisure & Digital Wellness',
        titleEn: 'Youth Social Life, Leisure & Digital Wellness',
        subtitleAr: 'Peer interactions, managing digital screen time, overcoming FOMO, and healthy recreation',
        subtitleEn: 'Peer interactions, managing digital screen time, overcoming FOMO, and healthy recreation',
        focusAr: 'Analyze modern sociological patterns among teenagers, examining the balance between social media engagement and authentic face-to-face interpersonal relationships for mental well-being.',
        focusEn: 'Analyze modern sociological patterns among teenagers, examining the balance between social media engagement and authentic face-to-face interpersonal relationships for mental well-being.',
        activityAr: 'Write a persuasive editorial offering practical guidelines for teenagers seeking digital detox while staying connected with peers.',
        activityEn: 'Write a persuasive editorial offering practical guidelines for teenagers seeking digital detox while staying connected with peers.',
        questionAr: 'What is recognized as a key symptom of digital fatigue among students spending excessive screen time on social media?',
        questionEn: 'What is recognized as a key symptom of digital fatigue among students spending excessive screen time on social media?',
        optionsAr: [
          'Decreased sleep quality and feelings of social isolation due to constant online comparison.',
          'Substantial increase in offline sports participation and literary reading.',
          'Complete eradication of interpersonal communication friction.'
        ],
        optionsEn: [
          'Decreased sleep quality and feelings of social isolation due to constant online comparison.',
          'Substantial increase in offline sports participation and literary reading.',
          'Complete eradication of interpersonal communication friction.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['digital wellness', 'digital wellness'],
          ['screen time balance', 'screen time balance'],
          ['interpersonal connection', 'interpersonal connection'],
          ['healthy recreation', 'healthy recreation']
        ]
      },
      {
        titleAr: 'Grammar: Phrasal Verbs & Advanced Idiomatic Expressions',
        titleEn: 'Grammar: Phrasal Verbs & Advanced Idiomatic Expressions',
        subtitleAr: 'Separable vs. inseparable phrasal verbs, three-word phrasal verbs (look forward to, run out of), and particle semantics',
        subtitleEn: 'Separable vs. inseparable phrasal verbs, three-word phrasal verbs (look forward to, run out of), and particle semantics',
        focusAr: 'Master syntactic rules of transitive and intransitive phrasal verbs, pronoun object placement in separable verbs (e.g. \'turn it off\' vs *\'turn off it\'), and idiomatic prepositional verbs.',
        focusEn: 'Master syntactic rules of transitive and intransitive phrasal verbs, pronoun object placement in separable verbs (e.g. \'turn it off\' vs *\'turn off it\'), and idiomatic prepositional verbs.',
        activityAr: 'Categorize a list of 15 phrasal verbs into separable and inseparable structures and create contextual dialogues.',
        activityEn: 'Categorize a list of 15 phrasal verbs into separable and inseparable structures and create contextual dialogues.',
        questionAr: 'Which sentence demonstrates correct object placement with a separable phrasal verb?',
        questionEn: 'Which sentence demonstrates correct object placement with a separable phrasal verb?',
        optionsAr: [
          'The proposal was unreasonable, so the board turned it down immediately.',
          'The proposal was unreasonable, so the board turned down it immediately.',
          'The proposal was unreasonable, so the board turned down them immediately.'
        ],
        optionsEn: [
          'The proposal was unreasonable, so the board turned it down immediately.',
          'The proposal was unreasonable, so the board turned down it immediately.',
          'The proposal was unreasonable, so the board turned down them immediately.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['separable phrasal verb', 'separable phrasal verb'],
          ['inseparable phrasal verb', 'inseparable phrasal verb'],
          ['particle semantics', 'particle semantics'],
          ['idiomatic fluency', 'idiomatic fluency']
        ]
      }
    ]
  },
  {
    unitTitleAr: 'Review 2: Comprehensive National Exam Synthesis (Units 1 - 6)',
    unitTitleEn: 'Review 2: Comprehensive National Exam Synthesis (Units 1 - 6)',
    lessons: [
      {
        titleAr: 'National High-School Standardized Exam Simulation',
        titleEn: 'National High-School Standardized Exam Simulation',
        subtitleAr: 'Full-term comprehensive reading, advanced vocabulary mastery, grammar analysis, and academic essay composition',
        subtitleEn: 'Full-term comprehensive reading, advanced vocabulary mastery, grammar analysis, and academic essay composition',
        focusAr: 'Synthesize all lexical, grammatical, and communicative competencies across the full first-term curriculum, practicing official Ministry standardized examination questions with a strict 80% mastery threshold.',
        focusEn: 'Synthesize all lexical, grammatical, and communicative competencies across the full first-term curriculum, practicing official Ministry standardized examination questions with a strict 80% mastery threshold.',
        activityAr: 'Complete a full mock examination evaluating reading inference, structural mechanics, bilateral translation, and argumentative writing.',
        activityEn: 'Complete a full mock examination evaluating reading inference, structural mechanics, bilateral translation, and argumentative writing.',
        questionAr: 'Which writing component constitutes the core argumentative claim governing an entire formal academic essay?',
        questionEn: 'Which writing component constitutes the core argumentative claim governing an entire formal academic essay?',
        optionsAr: [
          'The concise, arguable thesis statement positioned in the introductory paragraph.',
          'A random concluding sentence offering unrelated historical facts.',
          'An informal rhetorical question lacking analytical support.'
        ],
        optionsEn: [
          'The concise, arguable thesis statement positioned in the introductory paragraph.',
          'A random concluding sentence offering unrelated historical facts.',
          'An informal rhetorical question lacking analytical support.'
        ],
        correctIndex: 0,
        vocabulary: [
          ['thesis statement', 'thesis statement'],
          ['reading inference', 'reading inference'],
          ['examination simulation', 'examination simulation'],
          ['standardized assessment', 'standardized assessment']
        ]
      }
    ]
  }
];


// 8. German G12 (اللغة الألمانية كلغة ثانية)
// ---------------------------------------------------------------------------
const germanUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى والثانية: التواصل اليومي والقواعد المتقدمة بالألمانية',
    unitTitleEn: 'Lektion 1 & 2: Alltagskommunikation und Fortgeschrittene Grammatik',
    lessons: [
      {
        titleAr: 'Leseverstehen und Wortschatz: Berufe, Zukunftspläne und Medien',
        titleEn: 'Reading & Vocabulary: Careers, Future Plans, and Modern Media',
        subtitleAr: 'نصوص القراءة حول المهن والدراسة الجامعية، والأنشطة اليومية، ومصطلحات وسائل الإعلام والتكنولوجيا',
        subtitleEn: 'German reading comprehension on professions, university education, media, and technology',
        focusAr: 'فهم النصوص الألمانية واستخراج المعلومات الأساسية، والتعبير عن الخطط المستقبلية باللغة الألمانية السليمة.',
        focusEn: 'Analyze authentic German texts, extract specific details, and express future career goals fluently.',
        activityAr: 'Beantworte die Fragen zum Text über die Berufsausbildung in Deutschland.',
        activityEn: 'Answer reading comprehension questions regarding vocational training in Germany.',
        questionAr: 'Welches Wort passt: "Nach dem Abitur möchte Ahmed an der Universität Medizin _______"?',
        questionEn: 'Which verb correctly completes: "Nach dem Abitur möchte Ahmed an der Universität Medizin _______"?',
        optionsAr: ['studieren', 'lernen', 'arbeiten'],
        optionsEn: ['studieren', 'lernen', 'arbeiten'],
        correctIndex: 0,
        vocabulary: [['das Abitur', 'الثانوية العامة'], ['die Universität', 'الجامعة'], ['der Beruf', 'المهنة']]
      },
      {
        titleAr: 'Grammatik: Perfekt, Präteritum, Modalverben und Nebensätze (weil / dass / wenn)',
        titleEn: 'Grammar: Past Tenses (Perfekt & Präteritum), Modal Verbs and Subordinate Clauses',
        subtitleAr: 'الماضي في الألمانية، تصريف الأفعال المساعدة مع الأفعال الناقصة، وترتيب الكلمات في الجمل الجانبية مع weil و dass و wenn',
        subtitleEn: 'German past tenses, modal auxiliaries, and word order inversion in subordinate clauses with weil, dass, and wenn',
        focusAr: 'إتقان استخدام زمن الماضي Perfekt وصياغة الجمل الثانوية بوضع الفعل المصرف في نهاية الجملة بعد الروابط.',
        focusEn: 'Master German subordinate clause structure placing the finite verb at the sentence end with subordinating conjunctions.',
        activityAr: 'Verbinde die zwei Sätze mit "weil": "Ich lerne Deutsch. Ich möchte in Berlin studieren."',
        activityEn: 'Combine two sentences using "weil" ensuring correct subordinate clause verb-final placement.',
        questionAr: 'Welcher Satz hat die richtige Wortstellung?',
        questionEn: 'Which German sentence has the correct subordinate clause word order?',
        optionsAr: ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil bin ich krank.', 'Ich bleibe zu Hause, weil ich bin krank.'],
        optionsEn: ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil bin ich krank.', 'Ich bleibe zu Hause, weil ich bin krank.'],
        correctIndex: 0,
        vocabulary: [['die Konjunktion', 'أداة الربط'], ['der Nebensatz', 'الجملة الجانبية'], ['das Hilfsverb', 'الفعل المساعد']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 9. French G12 (اللغة الفرنسية كلغة ثانية)
// ---------------------------------------------------------------------------
const frenchUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى والثانية: اللغة الفرنسية للثانوية العامة',
    unitTitleEn: 'Unités 1 & 2: Français pour le Baccalauréat Secondaire',
    lessons: [
      {
        titleAr: 'Compréhension écrite: Les sports, l\'alimentation et les loisirs',
        titleEn: 'Reading Comprehension: Sports, Healthy Nutrition and Leisure',
        subtitleAr: 'استيعاب النصوص حول الأنشطة الرياضية وعادات الغذاء الصحية والتسوق والمستلزمات اليومية',
        subtitleEn: 'French reading comprehension on athletic activities, nutritional habits, and daily life',
        focusAr: 'قراءة النصوص واستخراج الأفكار الرئيسة والتعبير عن الميول والرغبات باللغة الفرنسية السليمة.',
        focusEn: 'Comprehend thematic texts, identify key arguments, and describe leisure and dietary preferences.',
        activityAr: 'Lisez le texte et répondez aux questions sur les sports extrêmes et le bien-être.',
        activityEn: 'Read the short passage and answer true/false questions on extreme sports.',
        questionAr: 'Choisissez la bonne réponse: "Pour rester en bonne santé, il faut faire _______ sport régulièrement."',
        questionEn: 'Choose the correct answer: "Pour rester en bonne santé, il faut faire _______ sport régulièrement."',
        optionsAr: ['du', 'de la', 'des'],
        optionsEn: ['du', 'de la', 'des'],
        correctIndex: 0,
        vocabulary: [['le sport', 'الرياضة'], ['l\'alimentation', 'التغذية'], ['la santé', 'الصحة']]
      },
      {
        titleAr: 'Grammaire: Les pronoms personnels (COD / COI / en / y) et le passé composé',
        titleEn: 'Grammar: Personal Pronouns (COD, COI, EN, Y) and Passé Composé',
        subtitleAr: 'استخدام الضمائر الشخصية المباشرة وغير المباشرة، ضمائر المكان والكمية (y, en)، وتصريف الماضي المركب مع avoir و être',
        subtitleEn: 'Direct/indirect object pronouns, adverbial pronouns EN and Y, and compound past tense agreement',
        focusAr: 'استبدال الأسماء بالضمائر الشخصية المناسبة لتجنب التكرار وتصريف الأفعال بدقة في الماضي المركب.',
        focusEn: 'Master object and adverbial pronoun replacements and past participle agreements with auxiliary verbs.',
        activityAr: 'Remplacez le mot souligné par le pronom convenable: "Tu penses à ton avenir?" -> "Oui, j\'y pense."',
        activityEn: 'Replace prepositional phrases with adverbial pronoun "y" or "en".',
        questionAr: 'Complétez avec le bon pronom: "Tu manges des fruits? — Oui, j\'_______ mange tous les jours."',
        questionEn: 'Complete with the correct pronoun: "Tu manges des fruits? — Oui, j\'_______ mange tous les jours."',
        optionsAr: ['en', 'y', 'le'],
        optionsEn: ['en', 'y', 'le'],
        correctIndex: 0,
        vocabulary: [['le pronom personnel', 'الضمير الشخصي'], ['le passé composé', 'الماضي المركب'], ['l\'accord', 'المطابقة']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 10. Islamic Studies G12 (التربية الدينية الإسلامية)
// ---------------------------------------------------------------------------
const islamicUnitsG12: UnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة الأولى والثانية: العقيدة والقرآن الكريم والحديث الشريف',
    unitTitleEn: 'Units 1 & 2: Islamic Creed, Quranic Exegesis and Prophetic Hadith',
    lessons: [
      {
        titleAr: 'سورة لقمان والوصايا التربوية وقيم المسؤولية والمواطنة',
        titleEn: 'Surah Luqman: Educational Values, Accountability and Civic Duty',
        subtitleAr: 'تفسير الآيات الكريمة من سورة لقمان، بر الوالدين، مراقبة الله في السر والعلانية، وخفض الصوت والتواضع',
        subtitleEn: 'Quranic exegesis of Surah Luqman, honoring parents, God consciousness, humility and ethical civility',
        focusAr: 'استنباط القيم الإيمانية والأخلاقية من وصايا لقمان الحكيم لابنه وتطبيقها في السلوك اليومي والمسؤولية المجتمعية.',
        focusEn: 'Examine moral principles embedded in Luqman’s counsel, emphasizing piety, familial duty, and social humility.',
        activityAr: 'اذكر ثلاث وصايا تضمنتها سورة لقمان في مجال السلوك والآداب الاجتماعية.',
        activityEn: 'Identify three moral precepts taught in Surah Luqman promoting social cohesion and respectful conduct.',
        questionAr: 'ما الرذيلة الأخلاقية التي نهى لقمان ابنه عنها بقوله تعالى: ﴿وَلَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ﴾؟',
        questionEn: 'Which vice did Luqman forbid his son from practicing in the verse "Do not turn your cheek away from people"?',
        optionsAr: ['التكبر والتعالي على الناس', 'البخل والشح', 'الرياء والنفاق'],
        optionsEn: ['Arrogance and condescension', 'Miserliness', 'Hypocrisy'],
        correctIndex: 0,
        vocabulary: [['وصايا لقمان', 'counsels of Luqman'], ['خفض الجناح', 'humility'], ['المواطنة الصالحة', 'righteous citizenship']]
      },
      {
        titleAr: 'الإسلام وقبول الآخر، وسماحة الشريعة، والاجتهاد وتجديد الخطاب الديني',
        titleEn: 'Tolerance in Islam, Sharia Flexibility, Ijtihad and Contemporary Renewal',
        subtitleAr: 'حرية العقيدة في الإسلام، وثيقة المدينة كدستور للتعايش، ضوابط الاجتهاد الفقهي، ووسطية المنهج الإسلامي',
        subtitleEn: 'Freedom of conscience, Charter of Medina as a model for pluralism, rules of Ijtihad, and Islamic moderation',
        focusAr: 'فهم مبدأ التعايش الإنساني وحرية الاعتقاد كما قررتها الشريعة الإسلامية ووثيقة المدينة المنورة، ودور الاجتهاد في مواكبة مستجدات العصر.',
        focusEn: 'Analyze Islamic tenets of mutual coexistence, tolerance documented in the Constitution of Medina, and role of Ijtihad.',
        activityAr: 'بين كيف أرست وثيقة المدينة المنورة أسس الدولة المدنية والمواطنة المتساوية بين المسلمين وغيرهم.',
        activityEn: 'Explain how the Constitution of Medina established equal citizenship and mutual defense pacts.',
        questionAr: 'ما الوثيقة التاريخية النبوية التي أرست قواعد المواطنة والتعايش السلمي بين سكان المدينة المنورة من مختلف الأديان؟',
        questionEn: 'Which historic prophetic covenant established peaceful coexistence and equal civil status in Medina?',
        optionsAr: ['وثيقة (دستور) المدينة المنورة', 'صلح الحديبية', 'بيعة العقبة'],
        optionsEn: ['Constitution of Medina', 'Treaty of Hudaybiyyah', 'Pledge of Aqaba'],
        correctIndex: 0,
        vocabulary: [['وثيقة المدينة', 'Constitution of Medina'], ['حرية الاعتقاد', 'freedom of belief'], ['الاجتهاد', 'Ijtihad']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Main Curriculum Retrieval for Egypt Grade 12
// ---------------------------------------------------------------------------
export function getEgyptG12Curriculum(
  subject: Subject,
  track: EducationTrack = 'GENERAL',
  educationType: EducationType = 'PUBLIC'
): Lecture[] {
  if (!isEgyptG12SubjectAvailable(subject, track, educationType)) return [];

  const isLangTrack = educationType === 'INTERNATIONAL';
  const gradeLevelNameAr = isLangTrack
    ? 'الصف الثالث الثانوي (مسار مدارس اللغات - التجريبية والرسمية)'
    : 'الصف الثالث الثانوي (الثانوية العامة - المسار العام العربي)';
  const gradeLevelNameEn = isLangTrack
    ? 'Secondary 3 / Grade 12 (Language Schools Track - English Medium)'
    : 'Secondary 3 / Grade 12 (Egyptian National Curriculum)';

  switch (subject) {
    case 'PHYSICS':
      return HIGH_PHYSICS_G12_LECTURES.map((lec) => ({
        ...lec,
        subject: 'PHYSICS',
        country: 'EG',
        gradeLevel: 'G12',
        educationType,
        educationTrack: track,
        gradeLevelNameAr,
        gradeLevelNameEn
      }));

    case 'CHEMISTRY':
      return HIGH_CHEMISTRY_G12_LECTURES.map((lec) => ({
        ...lec,
        subject: 'CHEMISTRY',
        country: 'EG',
        gradeLevel: 'G12',
        educationType,
        educationTrack: track,
        gradeLevelNameAr,
        gradeLevelNameEn
      }));

    case 'BIOLOGY':
      return buildLecturesFromUnits(biologyUnitsG12, subject, educationType, track);

    case 'MATH':
      // إذا كان مسار أدبي أو علمي علوم: مادة الإحصاء المعتمدة
      if (track === 'SHARIA_HUMANITIES' || track === 'SCIENCE_BIO') {
        return buildLecturesFromUnits(statisticsUnitsG12, subject, educationType, track);
      }
      // علمي رياضة أو عام: الرياضيات البحتة (تفاضل وتكامل وجبر وهندسة فراغية)
      return HIGH_MATH_G12_LECTURES.map((lec) => ({
        ...lec,
        subject: 'MATH',
        country: 'EG',
        gradeLevel: 'G12',
        educationType,
        educationTrack: track,
        gradeLevelNameAr,
        gradeLevelNameEn
      }));

    case 'COMPUTER_SCIENCE':
      // في علمي رياضة: الرياضيات التطبيقية (استاتيكا وديناميكا)
      return buildLecturesFromUnits(appliedMathUnitsG12, subject, educationType, track);

    case 'HISTORY':
      return buildLecturesFromUnits(historyUnitsG12, subject, educationType, track);

    case 'GEOGRAPHY':
      return buildLecturesFromUnits(geographyUnitsG12, subject, educationType, track);

    case 'PHILOSOPHY':
      return buildLecturesFromUnits(philosophyUnitsG12, subject, educationType, track);

    case 'ARABIC_LIT':
      return HIGH_ARABIC_LIT_G12_LECTURES.map((lec) => ({
        ...lec,
        subject: 'ARABIC_LIT',
        country: 'EG',
        gradeLevel: 'G12',
        educationType,
        educationTrack: track,
        gradeLevelNameAr: 'الصف الثالث الثانوي (الثانوية العامة المصرية)',
        gradeLevelNameEn: 'Secondary 3 / Grade 12 (Egyptian Curriculum)'
      }));

    case 'ENGLISH':
      return buildLecturesFromUnits(englishUnitsG12, subject, educationType, track);

    case 'GERMAN':
      return buildLecturesFromUnits(germanUnitsG12, subject, educationType, track);

    case 'FRENCH':
      return buildLecturesFromUnits(frenchUnitsG12, subject, educationType, track);

    case 'ITALIAN':
      return buildLecturesFromUnits(frenchUnitsG12, subject, educationType, track);

    case 'ISLAMIC_STUDIES':
      return buildLecturesFromUnits(islamicUnitsG12, subject, educationType, track);

    default:
      return [];
  }
}
