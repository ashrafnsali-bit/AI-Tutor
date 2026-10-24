import type { EducationType, GradeLevel, Lecture, Subject } from '../types';
import { SAUDI_G7_DIGITAL_SKILLS_LECTURES } from './saudiDigitalSkillsG7CurriculumData';
import { SAUDI_G8_DIGITAL_SKILLS_LECTURES } from './saudiDigitalSkillsG8CurriculumData';
import { SAUDI_G9_DIGITAL_SKILLS_LECTURES } from './saudiDigitalSkillsG9CurriculumData';
import { SAUDI_SCIENCE_CURRICULA } from './saudiScienceCurriculumData';
import { getSaudiArabicCurriculum } from './saudiArabicCurriculumData';
import { MIDDLE_MATH_LECTURES } from './middleMathCurriculumData';
import { MIDDLE_MATH_G8_LECTURES } from './middleMath8CurriculumData';
import { MIDDLE_MATH_G9_LECTURES } from './middleMath9CurriculumData';

/**
 * Official Saudi Middle School Curriculum System (المرحلة المتوسطة بالتعليم العام السعودي)
 * - Grade 7: First Intermediate (الأول متوسط)
 * - Grade 8: Second Intermediate (الثاني متوسط)
 * - Grade 9: Third Intermediate (الثالث متوسط)
 */

export const SAUDI_MIDDLE_G7_SUBJECTS: Subject[] = [
  'MATH',
  'GENERAL_SCIENCE',
  'ARABIC_LANG',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'HISTORY',
  'COMPUTER_SCIENCE',
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_MIDDLE_G8_SUBJECTS: Subject[] = [
  'MATH',
  'GENERAL_SCIENCE',
  'ARABIC_LANG',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'HISTORY',
  'COMPUTER_SCIENCE',
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_MIDDLE_G9_SUBJECTS: Subject[] = [
  'MATH',
  'GENERAL_SCIENCE',
  'ARABIC_LANG',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'HISTORY',
  'COMPUTER_SCIENCE',
  'VISUAL_ARTS',
  'LIFE_SKILLS',
  'PHILOSOPHY' // التفكير الناقد - مقرر معتمد في الصف الثالث متوسط
];

export function getSaudiMiddleSubjects(gradeLevel: GradeLevel): Subject[] {
  if (gradeLevel === 'G7') return SAUDI_MIDDLE_G7_SUBJECTS;
  if (gradeLevel === 'G8') return SAUDI_MIDDLE_G8_SUBJECTS;
  if (gradeLevel === 'G9') return SAUDI_MIDDLE_G9_SUBJECTS;
  return [];
}

export function isSaudiMiddleSubjectAvailable(
  subject: Subject,
  gradeLevel: GradeLevel,
  _educationType: EducationType = 'PUBLIC'
): boolean {
  if (gradeLevel === 'G7') return SAUDI_MIDDLE_G7_SUBJECTS.includes(subject);
  if (gradeLevel === 'G8') return SAUDI_MIDDLE_G8_SUBJECTS.includes(subject);
  if (gradeLevel === 'G9') return SAUDI_MIDDLE_G9_SUBJECTS.includes(subject);
  return false;
}

// ============================================================================
// 1. SUPER GOAL ENGLISH SERIES (Official Saudi Ministry of Education Series)
// Super Goal 1 (G7), Super Goal 2 (G8), Super Goal 3 (G9)
// ============================================================================

interface SuperGoalUnit {
  titleAr: string;
  titleEn: string;
  pageRange: string;
  focusAr: string;
  focusEn: string;
  grammarAr: string;
  grammarEn: string;
  exampleAr: string;
  exampleEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string, string];
  optionsEn: [string, string, string, string];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

const superGoal1Units: SuperGoalUnit[] = [
  {
    titleAr: 'صباح الخير والترحيب',
    titleEn: 'Good Morning! / Welcome',
    pageRange: '2–7',
    focusAr: 'التحيات، التعارف، أسماء الإشارة، والضمائر الشخصية.',
    focusEn: 'Greetings, introductions, demonstratives, and personal pronouns.',
    grammarAr: 'فعل الكينونة (Verb to Be) في الحاضر: I am, You are, He/She is.',
    grammarEn: 'Verb to be in simple present affirmative and questions.',
    exampleAr: 'أنا طالب في الصف الأول متوسط: I am a student in Grade 7.',
    exampleEn: 'I am a student in Grade 7.',
    questionAr: 'اختر الضمير المناسب للجملة: "___ is my new English teacher."',
    questionEn: 'Choose the correct pronoun: "___ is my new English teacher."',
    optionsAr: ['He', 'They', 'We', 'You'],
    optionsEn: ['He', 'They', 'We', 'You'],
    correctIndex: 0,
    explanationAr: 'نستخدم He للمفرد المذكر الغائب مع فعل الكينونة is.',
    explanationEn: 'Use "He" for singular third-person masculine subjects with "is".'
  },
  {
    titleAr: 'ما هو اليوم؟ والتقويم',
    titleEn: 'What Day Is Today? / Calendar',
    pageRange: '8–13',
    focusAr: 'أيام الأسبوع، شهور السنة، الأرقام الترتيبية، والمناسبات.',
    focusEn: 'Days of the week, months, ordinal numbers, and dates.',
    grammarAr: 'حروف الجر الزمنية: on مع الأيام، in مع الشهور والسنوات.',
    grammarEn: 'Prepositions of time: on with days, in with months and years.',
    exampleAr: 'الامتحان يوم الأحد: The exam is on Sunday.',
    exampleEn: 'The exam is on Sunday.',
    questionAr: 'أي حرف جر نستخدم مع أيام الأسبوع:',
    questionEn: 'Which preposition is used with days of the week:',
    optionsAr: ['on', 'in', 'at', 'by'],
    optionsEn: ['on', 'in', 'at', 'by'],
    correctIndex: 0,
    explanationAr: 'نستخدم on دائماً قبل أيام الأسبوع.',
    explanationEn: 'We always use "on" before days of the week.'
  },
  {
    titleAr: 'ما هذا؟ والأدوات المدرسية',
    titleEn: "What's That? / Classroom Items",
    pageRange: '14–19',
    focusAr: 'تسمية الأغراض المدرسية، صيغ الجمع، وأسماء الإشارة للقريب والبعيد.',
    focusEn: 'Classroom objects, regular plurals, this/that/these/those.',
    grammarAr: 'أسماء الإشارة: This/These للقريب، That/Those للبعيد.',
    grammarEn: 'Demonstratives: this/these for near, that/those for distant objects.',
    exampleAr: 'هذا قلمي، وتلك حقيبتك: This is my pen and that is your bag.',
    exampleEn: 'This is my pen and that is your bag.',
    questionAr: 'اختر اسم الإشارة المناسب للجمع القريب: "___ are my textbooks."',
    questionEn: 'Choose the correct demonstrative for near plural: "___ are my textbooks."',
    optionsAr: ['These', 'This', 'That', 'Those'],
    optionsEn: ['These', 'This', 'That', 'Those'],
    correctIndex: 0,
    explanationAr: 'نستخدم These للإشارة إلى الجمع القريب.',
    explanationEn: 'Use "These" for plural objects that are nearby.'
  },
  {
    titleAr: 'حول العالم والجنسيات',
    titleEn: 'Around the World / Countries & Nationalities',
    pageRange: '20–25',
    focusAr: 'الدول والعواصم، الجنسيات، وحروف الجر الدالة على المكان والأصل.',
    focusEn: 'Countries, capitals, nationalities, and origins with from/in.',
    grammarAr: 'السؤال عن الأصل والمنشأ: Where are you from? I am from Saudi Arabia.',
    grammarEn: 'Origin questions with where and from: Where are you from? I am Saudi.',
    exampleAr: 'أنا من الرياض، المملكة العربية السعودية: I am from Riyadh, Saudi Arabia.',
    exampleEn: 'I am from Riyadh, Saudi Arabia.',
    questionAr: 'ما صيغة السؤال الصحيحة عن المكان أو البلد:',
    questionEn: 'What is the correct question word for asking about places:',
    optionsAr: ['Where', 'What', 'Who', 'When'],
    optionsEn: ['Where', 'What', 'Who', 'When'],
    correctIndex: 0,
    explanationAr: 'نستخدم Where للسؤال عن المكان والأصل الجغرافي.',
    explanationEn: 'Use "Where" to ask about location and origin.'
  },
  {
    titleAr: 'عائلتي والعلاقات الأسرية',
    titleEn: 'Families, Families / Family Members',
    pageRange: '26–31',
    focusAr: 'أفراد الأسرة، صفات الملكية، والتعبير عن الامتلاك.',
    focusEn: 'Family tree members, possessive adjectives, have/has got.',
    grammarAr: 'استخدام have مع (I, You, We, They) واستخدام has مع (He, She, It).',
    grammarEn: 'Simple present of have/has for possession and family relations.',
    exampleAr: 'لدي أخ وأختان: I have one brother and two sisters.',
    exampleEn: 'I have one brother and two sisters.',
    questionAr: 'أكمل الجملة: "She ___ two brothers."',
    questionEn: 'Complete the sentence: "She ___ two brothers."',
    optionsAr: ['has', 'have', 'having', 'are'],
    optionsEn: ['has', 'have', 'having', 'are'],
    correctIndex: 0,
    explanationAr: 'نستخدم has مع الفاعل المفرد الغائب She.',
    explanationEn: 'Use "has" with singular third-person subjects like "She".'
  },
  {
    titleAr: 'هل هناك إطلالة؟ والمنزل',
    titleEn: 'Is There a View? / Homes & Rooms',
    pageRange: '32–37',
    focusAr: 'أجزاء المنزل، الأثاث، ووصف الموقع وحروف الجر المكانية.',
    focusEn: 'Rooms in a house, furniture, there is/are, prepositions of place.',
    grammarAr: 'التعبير عن الوجود: There is للمفرد و There are للجمع.',
    grammarEn: 'Existential there is (singular) and there are (plural).',
    exampleAr: 'يوجد حاسوب في غرفتي: There is a computer in my room.',
    exampleEn: 'There is a computer in my room.',
    questionAr: 'أكمل الجملة: "___ three bedrooms in our house."',
    questionEn: 'Complete the sentence: "___ three bedrooms in our house."',
    optionsAr: ['There are', 'There is', 'There be', 'There was'],
    optionsEn: ['There are', 'There is', 'There be', 'There was'],
    correctIndex: 0,
    explanationAr: 'نستخدم There are مع الاسم الجمع three bedrooms.',
    explanationEn: 'Use "There are" with plural nouns.'
  }
];

const superGoal2Units: SuperGoalUnit[] = [
  {
    titleAr: 'هل أنت هنا في إجازة؟',
    titleEn: 'Are You Here on Vacation?',
    pageRange: '2–7',
    focusAr: 'الأنشطة الترفيهية، السفر، وصف المهن، والماضي البسيط لفعل be.',
    focusEn: 'Vacations, travel, professions, and past tense of be (was/were).',
    grammarAr: 'الماضي البسيط: was مع المفرد، were مع الجمع.',
    grammarEn: 'Past simple of be: was for singular, were for plural subjects.',
    exampleAr: 'كنت في مكة المكرمة الأسبوع الماضي: I was in Makkah last week.',
    exampleEn: 'I was in Makkah last week.',
    questionAr: 'أكمل الجملة: "They ___ in Jeddah yesterday."',
    questionEn: 'Complete the sentence: "They ___ in Jeddah yesterday."',
    optionsAr: ['were', 'was', 'are', 'is'],
    optionsEn: ['were', 'was', 'are', 'is'],
    correctIndex: 0,
    explanationAr: 'نستخدم were مع ضمير الجمع They في صيغة الماضي.',
    explanationEn: 'Use "were" with plural subjects in the past tense.'
  },
  {
    titleAr: 'ماذا يصنعون؟ والمضارع المستمر',
    titleEn: 'What Are They Making? / Actions in Progress',
    pageRange: '8–13',
    focusAr: 'الأفعال الجارية الآن، الطهي، والأنشطة اللحظية.',
    focusEn: 'Actions happening right now, food preparation, progressive aspect.',
    grammarAr: 'زمن المضارع المستمر: am/is/are + verb-ing.',
    grammarEn: 'Present continuous tense for actions happening at the moment of speaking.',
    exampleAr: 'هو يقرأ كتاب العلوم الآن: He is reading a science book now.',
    exampleEn: 'He is reading a science book now.',
    questionAr: 'اختر الصيغة الصحيحة: "Look! The students ___ soccer."',
    questionEn: 'Choose the correct form: "Look! The students ___ soccer."',
    optionsAr: ['are playing', 'play', 'played', 'is playing'],
    optionsEn: ['are playing', 'play', 'played', 'is playing'],
    correctIndex: 0,
    explanationAr: 'نستخدم are playing لأن الفاعل جمع والحدث يقع الآن.',
    explanationEn: 'Use "are playing" for plural subjects performing actions right now.'
  },
  {
    titleAr: 'من هو؟ والضمائر الموصولة',
    titleEn: "Who's Who / Relative Pronouns",
    pageRange: '14–19',
    focusAr: 'وصف الأشخاص، الوظائف، وربط الجمل باستخدام who و which.',
    focusEn: 'Defining people, jobs, and using relative pronouns who and which.',
    grammarAr: 'الضمائر الموصولة: who للعاقل، which لغير العاقل.',
    grammarEn: 'Relative pronouns: who for persons, which for objects and animals.',
    exampleAr: 'هذا هو المهندس الذي صمم المبنى: This is the engineer who designed the building.',
    exampleEn: 'This is the engineer who designed the building.',
    questionAr: 'أي ضمير موصول نستخدم لوصف الإنسان والعاقل:',
    questionEn: 'Which relative pronoun is used for people:',
    optionsAr: ['who', 'which', 'where', 'when'],
    optionsEn: ['who', 'which', 'where', 'when'],
    correctIndex: 0,
    explanationAr: 'نستخدم who دائماً مع الأشخاص والعاقل.',
    explanationEn: 'We use "who" to refer to people.'
  },
  {
    titleAr: 'الهوايات المفضلة وأوقات الفراغ',
    titleEn: 'Favorite Pastimes / Hobbies & Free Time',
    pageRange: '20–25',
    focusAr: 'الهوايات، الرياضة، التفضيلات، ومقارنة المضارع البسيط بالمستمر.',
    focusEn: 'Sports, leisure activities, preferences, simple present vs progressive.',
    grammarAr: 'المضارع البسيط للعادات، والمضارع المستمر للأحداث المؤقتة.',
    grammarEn: 'Simple present for routines vs present progressive for temporary actions.',
    exampleAr: 'ألعب كرة القدم كل يوم جمعة: I play football every Friday.',
    exampleEn: 'I play football every Friday.',
    questionAr: 'اختر الفعل المناسب للعادة الروتينية: "He always ___ early."',
    questionEn: 'Choose the correct verb for routine: "He always ___ early."',
    optionsAr: ['wakes up', 'is waking up', 'woke up', 'waking up'],
    optionsEn: ['wakes up', 'is waking up', 'woke up', 'waking up'],
    correctIndex: 0,
    explanationAr: 'نستخدم المضارع البسيط wakes up مع ظروف التكرار always.',
    explanationEn: 'Use simple present "wakes up" with frequency adverbs like "always".'
  },
  {
    titleAr: 'مقارنة الصفات والتشابه',
    titleEn: 'Like Father, Like Son / Comparisons',
    pageRange: '26–31',
    focusAr: 'صفات الشخصية والمظهر الخارجي، وصيغ المقارنة والتفضيل.',
    focusEn: 'Physical features, personality traits, comparatives and superlatives.',
    grammarAr: 'المقارنة: صفة قصيرة + er + than (taller than)، أو more + صفة طويلة + than.',
    grammarEn: 'Comparative adjectives: short adj + er + than, or more + long adj + than.',
    exampleAr: 'علي أطول من أحمد: Ali is taller than Ahmed.',
    exampleEn: 'Ali is taller than Ahmed.',
    questionAr: 'أكمل المقارنة: "Math is ___ than History for me."',
    questionEn: 'Complete the comparison: "Math is ___ than History for me."',
    optionsAr: ['more difficult', 'difficult', 'most difficult', 'difficulter'],
    optionsEn: ['more difficult', 'difficult', 'most difficult', 'difficulter'],
    correctIndex: 0,
    explanationAr: 'نستخدم more difficult لأن difficult صفة طويلة تتكون من أكثر من مقطع.',
    explanationEn: 'Use "more difficult" because "difficult" is a multi-syllable adjective.'
  },
  {
    titleAr: 'هل تحتاجه حقاً؟ والتسوق',
    titleEn: 'Do You Really Need It? / Shopping & Requests',
    pageRange: '32–37',
    focusAr: 'التسوق، الأسعار، ضمائر المفعول به، والأفعال المساعدة للطلب المهذب.',
    focusEn: 'Shopping, prices, object pronouns, polite modal requests (can/could).',
    grammarAr: 'ضمائر المفعول به: me, him, her, us, them بعد الأفعال وحروف الجر.',
    grammarEn: 'Object pronouns used after verbs and prepositions.',
    exampleAr: 'هل يمكنك مساعدتي من فضلك؟ Can you help me, please?',
    exampleEn: 'Can you help me, please?',
    questionAr: 'اختر ضمير المفعول به الصحيح: "My teacher gave ___ high marks."',
    questionEn: 'Choose the correct object pronoun: "My teacher gave ___ high marks."',
    optionsAr: ['us', 'we', 'they', 'he'],
    optionsEn: ['us', 'we', 'they', 'he'],
    correctIndex: 0,
    explanationAr: 'نستخدم ضمير المفعول us بعد الفعل gave.',
    explanationEn: 'Use the object pronoun "us" following the transitive verb "gave".'
  }
];

const superGoal3Units: SuperGoalUnit[] = [
  {
    titleAr: 'أنماط الحياة والعادات الصحية',
    titleEn: 'Lifestyles / Daily Habits & Wellness',
    pageRange: '2–7',
    focusAr: 'العادات اليومية، النمط الصحي، والأنشطة البدنية وظروف التكرار.',
    focusEn: 'Daily habits, healthy lifestyle, physical fitness, frequency adverbs.',
    grammarAr: 'ظروف التكرار (always, usually, often, sometimes, never) وموقعها قبل الفعل الرئيسي.',
    grammarEn: 'Adverbs of frequency and their position before the main verb.',
    exampleAr: 'أتناول الخضروات والفواكه دائماً: I always eat vegetables and fruits.',
    exampleEn: 'I always eat vegetables and fruits.',
    questionAr: 'أين نضع ظرف التكرار usually في الجملة:',
    questionEn: 'Where do we place the frequency adverb "usually" in a sentence:',
    optionsAr: ['قبل الفعل الرئيسي', 'في نهاية الجملة دائماً', 'قبل الفاعل', 'بعد المفعول به'],
    optionsEn: ['Before the main verb', 'Always at the end', 'Before the subject', 'After the object'],
    correctIndex: 0,
    explanationAr: 'تأتي ظروف التكرار عادةً قبل الفعل الرئيسي وبعد فعل الكينونة be.',
    explanationEn: 'Frequency adverbs generally precede main verbs and follow verb to be.'
  },
  {
    titleAr: 'قصص الحياة والماضي البسيط',
    titleEn: 'Life Stories / Biographies & Past Events',
    pageRange: '8–13',
    focusAr: 'المحطات التاريخية، السير الذاتية، والأفعال المنتظمة وغير المنتظمة في الماضي.',
    focusEn: 'Biographical milestones, historical achievements, irregular past verbs.',
    grammarAr: 'الماضي البسيط مع الكلمات الدلالية: ago, yesterday, in 2020.',
    grammarEn: 'Simple past tense regular (-ed) and irregular verbs with past time markers.',
    exampleAr: 'ولد الملك عبدالعزيز في الرياض: King Abdulaziz was born in Riyadh.',
    exampleEn: 'King Abdulaziz was born in Riyadh.',
    questionAr: 'ما التصريف الماضي غير المنتظم للفعل go:',
    questionEn: 'What is the past form of the irregular verb "go":',
    optionsAr: ['went', 'goed', 'gone', 'going'],
    optionsEn: ['went', 'goed', 'gone', 'going'],
    correctIndex: 0,
    explanationAr: 'التصريف الماضي غير المنتظم للفعل go هو went.',
    explanationEn: 'The irregular simple past tense of "go" is "went".'
  },
  {
    titleAr: 'متى ستسافر؟ والمستقبل',
    titleEn: 'When Are You Traveling? / Future Plans',
    pageRange: '14–19',
    focusAr: 'التخطيط للسفر، حجز الرحلات، والتعبير عن الخطط المستقبلية المؤكدة.',
    focusEn: 'Travel arrangements, bookings, expressing future plans with be going to.',
    grammarAr: 'المستقبل المخطط له: be going to + verb للتعبير عن النوايا والخطط المسبقة.',
    grammarEn: 'Future with "be going to" for intentions and prior arrangements.',
    exampleAr: 'سأزور المدينة المنورة الشهر القادم: I am going to visit Madinah next month.',
    exampleEn: 'I am going to visit Madinah next month.',
    questionAr: 'أكمل الجملة للتعبير عن خطة مستقبلية: "We ___ going to fly to Riyadh."',
    questionEn: 'Complete for a future plan: "We ___ going to fly to Riyadh."',
    optionsAr: ['are', 'is', 'am', 'was'],
    optionsEn: ['are', 'is', 'am', 'was'],
    correctIndex: 0,
    explanationAr: 'نستخدم are مع الفاعل الجمع We في صيغة be going to.',
    explanationEn: 'Use "are" with plural subject "We" in "be going to" structure.'
  },
  {
    titleAr: 'ماذا تحتاج أن تشتري؟ والكميات',
    titleEn: 'What Do You Need to Buy? / Quantifiers',
    pageRange: '20–25',
    focusAr: 'المعدود وغير المعدود، التسوق والوجبات، ومحددات الكمية.',
    focusEn: 'Countable vs uncountable nouns, food recipes, much/many, some/any.',
    grammarAr: 'استخدام many مع الأسماء المعدودة، و much مع غير المعدودة، و some في الإثبات.',
    grammarEn: 'Quantifiers: many with countable nouns, much with uncountable, some in positive sentences.',
    exampleAr: 'كم من الماء تشرب يومياً؟ How much water do you drink daily?',
    exampleEn: 'How much water do you drink daily?',
    questionAr: 'أي محدد كمية نستخدم مع الاسم غير المعدود (مثل الماء أو الشاي):',
    questionEn: 'Which quantifier is used with uncountable nouns like water or tea:',
    optionsAr: ['much', 'many', 'few', 'several'],
    optionsEn: ['much', 'many', 'few', 'several'],
    correctIndex: 0,
    explanationAr: 'نستخدم much مع الأسماء غير المعدودة.',
    explanationEn: 'We use "much" with uncountable nouns.'
  },
  {
    titleAr: 'منذ متى؟ والمضارع التام',
    titleEn: 'Since When? / Present Perfect',
    pageRange: '26–31',
    focusAr: 'الإنجازات، المدد الزمنية، والأنشطة التي بدأت في الماضي ومستمرة حتى الآن.',
    focusEn: 'Life achievements, duration of activities, present perfect with since/for.',
    grammarAr: 'المضارع التام: have/has + Past Participle مع since لنقطة البداية، و for للمدة.',
    grammarEn: 'Present perfect tense with "since" (specific point in time) and "for" (duration).',
    exampleAr: 'أعيش في الرياض منذ عام 2018: I have lived in Riyadh since 2018.',
    exampleEn: 'I have lived in Riyadh since 2018.',
    questionAr: 'اختر الكلمة المناسبة لتحديد نقطة بداية زمنية: "I have studied English ___ 2021."',
    questionEn: 'Choose the correct time marker for starting point: "I have studied English ___ 2021."',
    optionsAr: ['since', 'for', 'ago', 'in'],
    optionsEn: ['since', 'for', 'ago', 'in'],
    correctIndex: 0,
    explanationAr: 'نستخدم since لتحديد نقطة البداية الزمنية المحددة (مثل عام 2021).',
    explanationEn: 'Use "since" with specific starting points in time like 2021.'
  },
  {
    titleAr: 'هل تعرف أين موقعه؟ والاتجاهات',
    titleEn: 'Do You Know Where It Is? / Directions',
    pageRange: '32–37',
    focusAr: 'وصف المواقع الجغرافية، معالم المدينة، والأسئلة غير المباشرة المهذبة.',
    focusEn: 'Giving directions, landmarks, city navigation, and polite indirect questions.',
    grammarAr: 'الأسئلة غير المباشرة: Do you know where the library is? بصيغة الجملة الخبرية.',
    grammarEn: 'Indirect questions with statement word order following question word.',
    exampleAr: 'هل تعرف أين يقع المتحف الوطني؟ Do you know where the National Museum is?',
    exampleEn: 'Do you know where the National Museum is?',
    questionAr: 'اختر الترتيب الصحيح للسؤال غير المباشر: "Can you tell me where ___?"',
    questionEn: 'Choose the correct order for indirect question: "Can you tell me where ___?"',
    optionsAr: ['the station is', 'is the station', 'station is the', 'are the station'],
    optionsEn: ['the station is', 'is the station', 'station is the', 'are the station'],
    correctIndex: 0,
    explanationAr: 'في السؤال غير المباشر يتبع الفاعل كلمة الاستفهام ثم يأتي الفعل (the station is).',
    explanationEn: 'In indirect questions, the subject precedes the verb after the question word.'
  }
];

export function getSaudiSuperGoalCurriculum(gradeLevel: 'G7' | 'G8' | 'G9'): Lecture[] {
  const units = gradeLevel === 'G7' ? superGoal1Units : gradeLevel === 'G8' ? superGoal2Units : superGoal3Units;
  const seriesNum = gradeLevel === 'G7' ? '1' : gradeLevel === 'G8' ? '2' : '3';
  const gradeNameAr = gradeLevel === 'G7' ? 'الأول متوسط' : gradeLevel === 'G8' ? 'الثاني متوسط' : 'الثالث متوسط';
  const gradeNameEn = gradeLevel === 'G7' ? 'First Intermediate' : gradeLevel === 'G8' ? 'Second Intermediate' : 'Third Intermediate';

  return units.map((unit, index) => {
    const lectureId = `sa-${gradeLevel.toLowerCase()}-eng-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الوحدة ${order}`;
    const lessonNumberEn = `Unit ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `اللغة الإنجليزية (Super Goal ${seriesNum}): ${unit.titleAr}`,
      titleEn: `English (Super Goal ${seriesNum}): ${unit.titleEn}`,
      subtitleAr: `${lessonNumberAr} — Super Goal ${seriesNum} (${gradeNameAr})`,
      subtitleEn: `${lessonNumberEn} — Super Goal ${seriesNum} (${gradeNameEn})`,
      descriptionAr: `منهج اللغة الإنجليزية المعتمد من وزارة التعليم بالمملكة العربية السعودية (Super Goal ${seriesNum}). صفحات الوحدة: ${unit.pageRange}.`,
      descriptionEn: `Official Saudi Ministry of Education English curriculum (Super Goal ${seriesNum}). Unit page range: ${unit.pageRange}.`,
      topicAr: `${unit.titleAr} (ص ${unit.pageRange})`,
      topicEn: `${unit.titleEn} (pp. ${unit.pageRange})`,
      durationMinutes: 40,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'ENGLISH' as const,
      gradeLevel,
      educationType: 'PUBLIC' as const,
      educationTrack: 'GENERAL' as const,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: `الصف ${gradeNameAr}، المرحلة المتوسطة، طبعة 1448هـ/2026م`,
      gradeLevelNameEn: `Grade ${gradeLevel.slice(1)} Intermediate, Middle School, 1448 AH/2026 edition`,
      termAr: `Super Goal ${seriesNum}، طبعة 1448هـ المعتمدة`,
      termEn: `Super Goal ${seriesNum}, 1448 AH Official Edition`,
      unitTitleAr: unit.titleAr,
      unitTitleEn: unit.titleEn,
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: [unit.focusAr, unit.grammarAr],
      keyConceptsEn: [unit.focusEn, unit.grammarEn],
      summaryAr: `الوحدة ${order} (ص ${unit.pageRange}): ${unit.focusAr} القواعد المقررة: ${unit.grammarAr}`,
      summaryEn: `Unit ${order} (pp. ${unit.pageRange}): ${unit.focusEn} Grammar rules: ${unit.grammarEn}`,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. السياق الوظيفي والمفردات المستهدفة',
          titleEn: '1. Language Functions & Targeted Vocabulary',
          contentAr: `موضوع الوحدة: ${unit.titleAr}\nنطاق الصفحات المعتمدة: ص ${unit.pageRange}\nالتركيز الوظيفي: ${unit.focusAr}`,
          contentEn: `Unit Topic: ${unit.titleEn}\nAccredited Page Range: pp. ${unit.pageRange}\nLanguage Focus: ${unit.focusEn}`
        },
        {
          id: `${lectureId}-s2`,
          titleAr: '2. القواعد والتطبيقات التعبيرية',
          titleEn: '2. Grammar Rules & Applied Models',
          contentAr: `القاعدة النحوية المقررة: ${unit.grammarAr}\nمثال تطبيقي: ${unit.exampleAr} (${unit.exampleEn})`,
          contentEn: `Target Grammar: ${unit.grammarEn}\nApplied Example: ${unit.exampleEn}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diagram`,
          titleAr: `خريطة تعلم: ${unit.titleAr}`,
          titleEn: `Learning Map: ${unit.titleEn}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          captionAr: `مخطط مهارات التواصل والقواعد المقررة في الوحدة ${order} من كتاب Super Goal ${seriesNum}.`,
          captionEn: `Scope map of communication skills and target grammar for Super Goal ${seriesNum} Unit ${order}.`,
          diagramType: 'concept_flow',
          visualSteps: [
            { labelAr: 'الاستماع والمحادثة', labelEn: 'Listening & Speaking' },
            { labelAr: 'القواعد والتراكيب', labelEn: 'Grammar & Forms' },
            { labelAr: 'القراءة والفهم', labelEn: 'Reading & Comprehension' },
            { labelAr: 'الكتابة والمشروع', labelEn: 'Writing & Project' }
          ]
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم ${lessonNumberAr}`,
        titleEn: `${lessonNumberEn} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-q1`,
          textAr: unit.questionAr,
          textEn: unit.questionEn,
          optionsAr: [...unit.optionsAr],
          optionsEn: [...unit.optionsEn],
          correctIndex: unit.correctIndex,
          conceptTestedAr: unit.titleAr,
          conceptTestedEn: unit.titleEn,
          explanationAr: unit.explanationAr,
          explanationEn: unit.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}

// ============================================================================
// 2. SOCIAL STUDIES (الدراسات الاجتماعية والمواطنة)
// ============================================================================

interface MiddleSocialLesson {
  titleAr: string;
  titleEn: string;
  unitAr: string;
  unitEn: string;
  summaryAr: string;
  summaryEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string, string];
  optionsEn: [string, string, string, string];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

const middleG7SocialLessons: MiddleSocialLesson[] = [
  {
    titleAr: 'شبه الجزيرة العربية: الموقع والخصائص الطبيعية والحضارية',
    titleEn: 'Arabian Peninsula: Location, Geography, and Heritage',
    unitAr: 'الجغرافيا والتاريخ الإسلامي',
    unitEn: 'Geography & Islamic History',
    summaryAr: 'دراسة الموقع الجغرافي الاستراتيجي لشبه الجزيرة العربية وربطها بين قارات العالم القديم وأهميتها الدينية والتاريخية.',
    summaryEn: 'Strategic geography of the Arabian Peninsula linking ancient continents and its sacred religious and historical significance.',
    stepsAr: ['الموقع الاستراتيجي', 'التضاريس والمناخ', 'طرق التجارة القديمة', 'مهبط الرسالة'],
    stepsEn: ['Strategic location', 'Terrain and climate', 'Ancient trade routes', 'Cradle of revelation'],
    questionAr: 'ما الأهمية الدينية الكبرى لشبه الجزيرة العربية؟',
    questionEn: 'What is the greatest religious significance of the Arabian Peninsula?',
    optionsAr: ['مهبط الوحي وبها الحرمان الشريفان', 'وجود سلاسل جبلية فقط', 'كثرة الأنهار والبحيرات', 'النشاط الزراعي في الصحراء'],
    optionsEn: ['Cradle of revelation and home to the Two Holy Mosques', 'Presence of mountain ranges only', 'Abundance of rivers', 'Agricultural desert activity'],
    correctIndex: 0,
    explanationAr: 'شبه الجزيرة العربية هي مهبط الوحي الخاتم وبها مكة المكرمة والمدينة المنورة.',
    explanationEn: 'The Arabian Peninsula is the cradle of Islam containing the Two Holy Mosques in Makkah and Madinah.'
  },
  {
    titleAr: 'الدولة النبوية وعصر الخلفاء الراشدين رضي الله عنهم',
    titleEn: 'The Prophetic State and the Rightly-Guided Caliphs',
    unitAr: 'التاريخ والحضارة الإسلامية',
    unitEn: 'History & Islamic Civilization',
    summaryAr: 'تأسيس الدولة النبوية في المدينة المنورة ومسيرة الخلفاء الراشدين الأربعة في ترسيخ العدل والشورى وحماية الدولة.',
    summaryEn: 'Establishment of the Prophetic State in Madinah and the governance of the Rightly-Guided Caliphs.',
    stepsAr: ['الهجرة النبوية', 'وثيقة المدينة', 'مبدأ الشورى والعدل', 'حفظ الأمن والاستقرار'],
    stepsEn: ['Prophetic migration', 'Constitution of Madinah', 'Shura and justice', 'Security and stability'],
    questionAr: 'من هو أول الخلفاء الراشدين رضي الله عنهم بعد وفاة النبي ﷺ؟',
    questionEn: 'Who was the first Rightly-Guided Caliph after the Prophet ﷺ?',
    optionsAr: ['أبو بكر الصديق رضي الله عنه', 'عمر بن الخطاب رضي الله عنه', 'عثمان بن عفان رضي الله عنه', 'علي بن أبي طالب رضي الله عنه'],
    optionsEn: ['Abu Bakr As-Siddiq', 'Umar ibn Al-Khattab', 'Uthman ibn Affan', 'Ali ibn Abi Talib'],
    correctIndex: 0,
    explanationAr: 'أبو بكر الصديق رضي الله عنه هو أول الخلفاء الراشدين بإجماع الصحابة في سقيفة بني ساعدة.',
    explanationEn: 'Abu Bakr As-Siddiq was the first Rightly-Guided Caliph by consensus of the Companions.'
  },
  {
    titleAr: 'الهوية الوطنية والمواطنة المسؤولة ورؤية 2030',
    titleEn: 'National Identity, Responsible Citizenship & Vision 2030',
    unitAr: 'المواطنة والتنمية',
    unitEn: 'Citizenship & Development',
    summaryAr: 'ترسيخ مقومات الهوية الوطنية السعودية، والاعتزاز باللغة والدين والتاريخ والمساهمة الفاعلة في تحقيق مستهدفات رؤية 2030.',
    summaryEn: 'Fostering Saudi national identity, pride in language, religion, history, and active civic participation in Vision 2030.',
    stepsAr: ['مقومات الهوية', 'الولاء والانتماء', 'المواطنة المسؤولة', 'رؤية المملكة 2030'],
    stepsEn: ['Identity pillars', 'Loyalty and belonging', 'Responsible citizenship', 'Saudi Vision 2030'],
    questionAr: 'ما المحور الأساسي الذي تنطلق منه رؤية السعودية 2030؟',
    questionEn: 'What is the core foundational pillar of Saudi Vision 2030?',
    optionsAr: ['مجتمع حيوي واقتصاد مزدهر ووطن طموح', 'الاعتماد على مورد واحد فقط', 'إيقاف خطط التنمية', 'إلغاء البرامج التقنية'],
    optionsEn: ['A vibrant society, thriving economy, and ambitious nation', 'Relying solely on one resource', 'Freezing development', 'Cancelling tech programs'],
    correctIndex: 0,
    explanationAr: 'ترتكز رؤية 2030 على ثلاثة محاور رئيسة: مجتمع حيوي، اقتصاد مزدهر، ووطن طموح.',
    explanationEn: 'Vision 2030 is built around three pillars: a vibrant society, a thriving economy, and an ambitious nation.'
  }
];

const middleG8SocialLessons: MiddleSocialLesson[] = [
  {
    titleAr: 'الدولة الأموية: النشأة وأبرز الإنجازات والفتوحات',
    titleEn: 'Umayyad Dynasty: Origin, Achievements and Expansion',
    unitAr: 'التاريخ الإسلامي',
    unitEn: 'Islamic History',
    summaryAr: 'قيام الدولة الأموية عام 41هـ وعاصمتها دمشق، وأبرز خلفائها (معاوية بن أبي سفيان، وعبدالملك بن مروان، والوليد بن عبدالملك، وعمر بن عبدالعزيز).',
    summaryEn: 'Establishment of the Umayyad Caliphate in 41 AH with Damascus as capital and its key caliphs and administrative milestones.',
    stepsAr: ['عام الجماعة 41هـ', 'تعريب الدواوين وصك العملة', 'التنظيم الإداري والبريد', 'اتساع الفتوحات'],
    stepsEn: ['Year of Unity 41 AH', 'Arabization of records & coinage', 'Administrative systems', 'Territorial expansion'],
    questionAr: 'من هو الخليفة الأموي الذي عُرّبت في عهده الدواوين وصُكّ أول دينار إسلامي؟',
    questionEn: 'Which Umayyad Caliph Arabized administrative records and minted the first Islamic dinar?',
    optionsAr: ['عبدالملك بن مروان', 'معاوية بن أبي سفيان', 'عمر بن عبدالعزيز', 'مروان بن محمد'],
    optionsEn: ['Abd al-Malik ibn Marwan', 'Muawiyah ibn Abi Sufyan', 'Umar ibn Abd al-Aziz', 'Marwan ibn Muhammad'],
    correctIndex: 0,
    explanationAr: 'عبدالملك بن مروان هو الخليفة الأموي الذي قام بتعريب الدواوين وإصدار أول عملة إسلامية مستقلة.',
    explanationEn: 'Abd al-Malik ibn Marwan standardized administrative records into Arabic and minted Islamic currency.'
  },
  {
    titleAr: 'الدولة العباسية والدول المتتابعة والحضارة الإسلامية',
    titleEn: 'Abbasid Caliphate, Successive States & Civilization',
    unitAr: 'التاريخ الإسلامي والحضارة',
    unitEn: 'Islamic Civilization',
    summaryAr: 'قيام الدولة العباسية عام 132هـ، تأسيس بغداد، بيت الحكمة والنهضة العلمية في الفلك والطب والرياضيات والجغرافيا.',
    summaryEn: 'Establishment of the Abbasid Caliphate in 132 AH, Baghdad, Bayt al-Hikmah, and scientific contributions to medicine and math.',
    stepsAr: ['قيام الدولة 132هـ', 'تأسيس بغداد', 'بيت الحكمة والترجمة', 'إشعاع الحضارة الإسلامية'],
    stepsEn: ['Establishment 132 AH', 'Founding Baghdad', 'Bayt al-Hikmah translation', 'Islamic scientific legacy'],
    questionAr: 'ما المؤسسة العلمية الشهيرة التي تأسست في بغداد وازدهرت فيها حركة الترجمة والبحث العلمي؟',
    questionEn: 'What famous scientific institution was established in Baghdad for translation and research?',
    optionsAr: ['بيت الحكمة', 'دار الفنون', 'مجمع اللغات', 'الديوان الكبير'],
    optionsEn: ['Bayt al-Hikmah (House of Wisdom)', 'Dar al-Funun', 'Languages Academy', 'Grand Diwan'],
    correctIndex: 0,
    explanationAr: 'بيت الحكمة في بغداد كان أعظم مركز علمي في العصر العباسي للترجمة والتأليف والبحث العلمي.',
    explanationEn: 'Bayt al-Hikmah in Baghdad was the premier research and translation center of the Abbasid era.'
  },
  {
    titleAr: 'جغرافية العالم العربي والإسلامي وموارده الطبيعية والتحديات',
    titleEn: 'Geography of the Arab and Islamic World & Resources',
    unitAr: 'الجغرافيا الاقتصادية',
    unitEn: 'Economic Geography',
    summaryAr: 'الموقع الفلكي والجغرافي للعالم العربي والإسلامي، الممرات المائية الحيوية (مضيق هرمز، باب المندب، وقناة السويس)، والموارد الطبيعية ومواجهة التصحر وشح المياه.',
    summaryEn: 'Astronomical and geographical position of the Muslim world, strategic chokepoints, natural wealth, and combating water scarcity.',
    stepsAr: ['الموقع الجغرافي الفلكي', 'المضائق والممرات الدولية', 'الثروات المعدنية والنفطية', 'التحديات البيئية والمائية'],
    stepsEn: ['Geographical location', 'Strategic straits', 'Mineral and oil resources', 'Water and environmental challenges'],
    questionAr: 'أي ممر مائي استراتيجي يربط البحر الأحمر بالمحيط الهندي وخليج عدن؟',
    questionEn: 'Which strategic strait connects the Red Sea to the Indian Ocean and Gulf of Aden?',
    optionsAr: ['مضيق باب المندب', 'مضيق هرمز', 'مضيق جبل طارق', 'مضيق البوسفور'],
    optionsEn: ['Bab al-Mandab Strait', 'Strait of Hormuz', 'Strait of Gibraltar', 'Bosphorus Strait'],
    correctIndex: 0,
    explanationAr: 'مضيق باب المندب يقع عند المدخل الجنوبي للبحر الأحمر ويربطه بخليج عدن وبحر العرب.',
    explanationEn: 'Bab al-Mandab Strait controls the southern entrance of the Red Sea connecting it to the Gulf of Aden.'
  }
];

const middleG9SocialLessons: MiddleSocialLesson[] = [
  {
    titleAr: 'الأنظمة في المملكة العربية السعودية: النظام الأساسي ومجلس الوزراء والشورى',
    titleEn: 'Governance Systems of Saudi Arabia: Basic Law, Cabinet, and Shura',
    unitAr: 'الأنظمة والحكم في المملكة',
    unitEn: 'Saudi Constitutional Systems',
    summaryAr: 'دراسة الأنظمة الأساسية الصادرة بأمر ملكي: النظام الأساسي للحكم القائم على كتاب الله وسنة رسوله، ونظام مجلس الوزراء، ونظام مجلس الشورى، ونظام المناطق.',
    summaryEn: 'The constitutional framework of Saudi Arabia: Basic Law of Governance founded on Quran and Sunnah, Council of Ministers, and Shura Council.',
    stepsAr: ['النظام الأساسي للحكم', 'مجلس الوزراء والسلطات التنفيذية', 'مجلس الشورى والدور الرقابي', 'نظام المناطق الإدارية'],
    stepsEn: ['Basic Law of Governance', 'Council of Ministers', 'Shura Council oversight', 'Provinces system'],
    questionAr: 'ما المصدر الأساسي والوحيد للتشريع ونظام الحكم في المملكة العربية السعودية؟',
    questionEn: 'What is the primary foundation of law and governance in Saudi Arabia?',
    optionsAr: ['كتاب الله تعالى وسنة رسوله ﷺ', 'القوانين الوضعية المستوردة', 'الأعراف غير المسندة', 'الاجتهادات الفردية'],
    optionsEn: ['Book of Allah (Quran) and Sunnah of Prophet ﷺ', 'Imported civil laws', 'Unverified customs', 'Individual guesswork'],
    correctIndex: 0,
    explanationAr: 'تنص المادة الأولى من النظام الأساسي للحكم على أن دستور المملكة هو كتاب الله تعالى وسنة رسوله ﷺ.',
    explanationEn: 'Article 1 of the Basic Law of Governance establishes the Quran and Sunnah as the kingdom’s constitution.'
  },
  {
    titleAr: 'التنمية الوطنية الشاملة وبرامج ومشاريع رؤية السعودية 2030',
    titleEn: 'Comprehensive National Development & Vision 2030 Mega Projects',
    unitAr: 'التنمية والاقتصاد الوطني',
    unitEn: 'National Economy & Development',
    summaryAr: 'جهود المملكة في التنمية الصحية والتعليمية والاجتماعية، والمشاريع الكبرى مثل نيوم، والقدية، ومشروع البحر الأحمر، وبرنامج جودة الحياة وتوطين الصناعات.',
    summaryEn: 'Health, educational, and social development, alongside giga-projects like NEOM, Qiddiya, Red Sea, and Quality of Life.',
    stepsAr: ['التنمية الصحية والتعليمية', 'المشاريع العملاقة (نيوم والقدية)', 'التحول الرقمي والذكاء الاصطناعي', 'برنامج جودة الحياة'],
    stepsEn: ['Healthcare & education growth', 'Giga-projects (NEOM, Qiddiya)', 'Digital transformation', 'Quality of Life Program'],
    questionAr: 'ما المشروع السعودي العملاق الذي يركز على الابتكار والاستدامة وطاقة المستقبل في شمال غرب المملكة؟',
    questionEn: 'Which Saudi giga-project pioneers innovation, sustainability, and green future energy in the northwest?',
    optionsAr: ['نيوم (NEOM)', 'مشروع سد مأرب', 'مشروع الحجر الصناعي', 'مشروع التوليد التقليدي'],
    optionsEn: ['NEOM', 'Marib Dam Project', 'Old Quarry Project', 'Conventional Generation'],
    correctIndex: 0,
    explanationAr: 'نيوم هي مدينة المستقبل الذكية العالمية المعتمدة على الطاقة النظيفة بنسبة 100% وركيزة من ركائز رؤية 2030.',
    explanationEn: 'NEOM is a global smart city powered 100% by renewable energy and a cornerstone of Vision 2030.'
  },
  {
    titleAr: 'الأمن الوطني والإنجاز الذاتي والمشاركة المجتمعية',
    titleEn: 'National Security, Personal Achievement & Civic Participation',
    unitAr: 'الأمن والمجتمع',
    unitEn: 'Security & Society',
    summaryAr: 'مفهوم الأمن الوطني وأبعاده (العسكري، الاقتصادي، الفكري، والسيبراني)، ودور المواطن كرجل الأمن الأول، وقيم العمل التطوعي والإنجاز الذاتي.',
    summaryEn: 'Dimensions of national security (defense, intellectual, cyber), citizen role as the first line of defense, and volunteerism.',
    stepsAr: ['أبعاد الأمن الوطني', 'الأمن الفكري والسيبراني', 'المواطن رجل الأمن الأول', 'المشاركة المجتمعية والتطوع'],
    stepsEn: ['National security dimensions', 'Intellectual & cybersecurity', 'Citizens as first security pillar', 'Volunteering & civic contribution'],
    questionAr: 'ما المقصود بعبارة "المواطن رجل الأمن الأول"؟',
    questionEn: 'What is meant by the principle "The citizen is the first security officer"?',
    optionsAr: ['وعي المواطن ومسؤوليته المشتركة في حفظ أمن وطنه ومجتمعه', 'تحمل المهام العسكرية بمفرده', 'الانعزال التام عن الأحداث', 'تجاهل الإبلاغ عن المخاطر'],
    optionsEn: ['Citizen awareness and shared responsibility in safeguarding home security', 'Sole military duty', 'Total isolation', 'Ignoring risk reports'],
    correctIndex: 0,
    explanationAr: 'تجسد العبارة التكامل والوعي الوطني بين المواطنين وأجهزة الدولة لحماية مقدرات الوطن وأمنه الفكري والميداني.',
    explanationEn: 'It expresses the mutual partnership and vigilant civic responsibility between citizens and state institutions.'
  }
];

export function getSaudiMiddleSocialStudiesCurriculum(gradeLevel: 'G7' | 'G8' | 'G9'): Lecture[] {
  const lessons = gradeLevel === 'G7' ? middleG7SocialLessons : gradeLevel === 'G8' ? middleG8SocialLessons : middleG9SocialLessons;
  const gradeNameAr = gradeLevel === 'G7' ? 'الأول متوسط' : gradeLevel === 'G8' ? 'الثاني متوسط' : 'الثالث متوسط';
  const gradeNameEn = gradeLevel === 'G7' ? 'First Intermediate' : gradeLevel === 'G8' ? 'Second Intermediate' : 'Third Intermediate';

  return lessons.map((lesson, index) => {
    const lectureId = `sa-${gradeLevel.toLowerCase()}-soc-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الدرس ${order}`;
    const lessonNumberEn = `Lesson ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `الدراسات الاجتماعية: ${lesson.titleAr}`,
      titleEn: `Social Studies: ${lesson.titleEn}`,
      subtitleAr: `${lessonNumberAr} — ${lesson.unitAr} (${gradeNameAr})`,
      subtitleEn: `${lessonNumberEn} — ${lesson.unitEn} (${gradeNameEn})`,
      descriptionAr: `منهج الدراسات الاجتماعية والمواطنة المعتمد من وزارة التعليم لطلاب الصف ${gradeNameAr}.`,
      descriptionEn: `Official Saudi Ministry of Education Social Studies and Citizenship curriculum for Grade ${gradeLevel.slice(1)}.`,
      topicAr: lesson.titleAr,
      topicEn: lesson.titleEn,
      durationMinutes: 35,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'HISTORY' as const,
      gradeLevel,
      educationType: 'PUBLIC' as const,
      educationTrack: 'GENERAL' as const,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: `الصف ${gradeNameAr}، المرحلة المتوسطة، طبعة 1448هـ/2026م`,
      gradeLevelNameEn: `Grade ${gradeLevel.slice(1)} Intermediate, Middle School, 1448 AH/2026 edition`,
      termAr: 'الدراسات الاجتماعية، طبعة 1448هـ',
      termEn: 'Social Studies, 1448 AH Edition',
      unitTitleAr: lesson.unitAr,
      unitTitleEn: lesson.unitEn,
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: lesson.stepsAr,
      keyConceptsEn: lesson.stepsEn,
      summaryAr: lesson.summaryAr,
      summaryEn: lesson.summaryEn,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. الشرح والمفاهيم الوطنية والتاريخية',
          titleEn: '1. National & Historical Concepts',
          contentAr: `${lesson.summaryAr}\nالمحاور الأساسية:\n- ${lesson.stepsAr.join('\n- ')}`,
          contentEn: `${lesson.summaryEn}\nKey themes:\n- ${lesson.stepsEn.join('\n- ')}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diag`,
          titleAr: `مخطط المعرفة: ${lesson.titleAr}`,
          titleEn: `Knowledge Map: ${lesson.titleEn}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          captionAr: 'مخطط تسلسل المفاهيم التاريخية والوطنية المعد خصيصاً على منصة المعلم الذكي.',
          captionEn: 'Conceptual flow map designed for the AI Tutor platform.',
          diagramType: 'concept_flow',
          visualSteps: lesson.stepsAr.map((labelAr, stepIdx) => ({
            labelAr,
            labelEn: lesson.stepsEn[stepIdx]
          }))
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم ${lessonNumberAr}`,
        titleEn: `${lessonNumberEn} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-q1`,
          textAr: lesson.questionAr,
          textEn: lesson.questionEn,
          optionsAr: [...lesson.optionsAr],
          optionsEn: [...lesson.optionsEn],
          correctIndex: lesson.correctIndex,
          conceptTestedAr: lesson.titleAr,
          conceptTestedEn: lesson.titleEn,
          explanationAr: lesson.explanationAr,
          explanationEn: lesson.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}

// ============================================================================
// 3. CRITICAL THINKING (التفكير الناقد - الصف الثالث متوسط G9)
// ============================================================================

interface CriticalThinkingUnit {
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string, string];
  optionsEn: [string, string, string, string];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

const criticalThinkingLessons: CriticalThinkingUnit[] = [
  {
    titleAr: 'التفكير الناقد وخصائصه ومعاييره الأساسية',
    titleEn: 'Critical Thinking: Characteristics and Core Standards',
    summaryAr: 'تعريف التفكير الناقد كنشاط عقلي هادف يقوم على الفحص والتمحيص والتقويم الموضوعي، ومعاييره: الوضوح، الصحة، الدقة، الربط، والعمق والاتساع.',
    summaryEn: 'Defining critical thinking as purposeful objective evaluation, and its standards: clarity, accuracy, precision, relevance, depth, and breadth.',
    stepsAr: ['فحص الادعاءات', 'تطبيق معيار الوضوح', 'التحقق من صحة الأدلة', 'الوصول إلى نتيجة موضوعية'],
    stepsEn: ['Examine claims', 'Apply clarity test', 'Verify evidence accuracy', 'Reach objective conclusion'],
    questionAr: 'ما معيار التفكير الناقد الذي يركز على سلامة المعلومة وخلوها من الأخطاء التوثيقية؟',
    questionEn: 'Which critical thinking standard focuses on factual truth and correctness of information?',
    optionsAr: ['معيار الصحة (Accuracy)', 'معيار الطول والحجم', 'معيار التكرار والترديد', 'معيار الرأي الشخصي'],
    optionsEn: ['Accuracy standard', 'Length and size standard', 'Repetition standard', 'Personal opinion standard'],
    correctIndex: 0,
    explanationAr: 'معيار الصحة يعني التأكد من أن القضية أو المعلومة صادقة وموثقة ومطابقة للواقع.',
    explanationEn: 'The accuracy standard requires verifying that information is objectively true and correctly evidenced.'
  },
  {
    titleAr: 'الاستدلال المنطقي: الاستقراء والاستنباط والتمييز بينهما',
    titleEn: 'Logical Reasoning: Induction, Deduction, and Differences',
    summaryAr: 'دراسة أنماط الاستدلال: الاستنباط (الانتقال من العام إلى الخاص بحكم يقيني)، والاستقراء (الانتقال من الحالات الخاصة إلى قاعدة عامة بحكم احتمالي).',
    summaryEn: 'Logical reasoning types: deductive reasoning (general premises to certain specific conclusion) and inductive reasoning (observations to probable general rule).',
    stepsAr: ['مقدمات استدلالية', 'تحليل العلاقات المنطقية', 'استنباط يقيني', 'استقراء احتمالي مدعوم'],
    stepsEn: ['Argument premises', 'Logical relations analysis', 'Deductive certainty', 'Inductive probability'],
    questionAr: 'ما نوع الاستدلال الذي ينتقل فيه الباحث من ملاحظة حالات فردية متعددة لصياغة تعميم علمي؟',
    questionEn: 'Which reasoning type transitions from specific individual observations to a general scientific rule?',
    optionsAr: ['الاستدلال الاستقرائي (Induction)', 'الاستدلال الاستنباطي (Deduction)', 'التفكير الخرافي', 'المصادرة على المطلوب'],
    optionsEn: ['Inductive reasoning', 'Deductive reasoning', 'Superstitious thinking', 'Begging the question'],
    correctIndex: 0,
    explanationAr: 'الاستقراء يبدأ من فحص الجزئيات والملاحظات التجريبية للوصول إلى قانون عام.',
    explanationEn: 'Inductive reasoning moves from observing specific instances to formulating general laws.'
  },
  {
    titleAr: 'الحجاج والمغالطات المنطقية وكشف التضليل الإعلامي',
    titleEn: 'Argumentation, Logical Fallacies, and Media Literacy',
    summaryAr: 'بناء الحجة القوية المدعمة بالبراهين، وكشف المغالطات المنطقية الشائعة (مغالطة رجل القش، الشخصنة Ad Hominem، والتعميم المتسرع)، والتعامل الناقد مع المحتوى الرقمي.',
    summaryEn: 'Constructing robust evidence-based arguments, identifying logical fallacies (straw man, ad hominem, hasty generalization), and digital media literacy.',
    stepsAr: ['بناء الحجة بالدليل', 'فصل الفكرة عن صاحبها', 'كشف المغالطات غير الصورية', 'التحقق الناقد من المحتوى'],
    stepsEn: ['Build evidenced argument', 'Separate idea from person', 'Detect informal fallacies', 'Critical digital evaluation'],
    questionAr: 'ما المغالطة التي يرتكبها شخص حين يهاجم شخصية المحاور بدلاً من مناقشة حجته ودليله؟',
    questionEn: 'Which fallacy is committed when attacking an opponent’s personal character instead of refuting their argument?',
    optionsAr: ['مغالطة الشخصنة (Ad Hominem)', 'مغالطة التعميم المتسرع', 'مغالطة الاحتكام إلى الأغلبية', 'مغالطة السؤال المركب'],
    optionsEn: ['Ad Hominem (Personal Attack)', 'Hasty Generalization', 'Bandwagon fallacy', 'Complex question fallacy'],
    correctIndex: 0,
    explanationAr: 'مغالطة الشخصنة تقع عندما يترك المجادل القضية المطروحة ويوجه هجومه إلى شخص الخصم أو سلوكه.',
    explanationEn: 'The Ad Hominem fallacy occurs when attacking the person presenting the argument rather than addressing the argument itself.'
  }
];

export function getSaudiMiddleCriticalThinkingCurriculum(): Lecture[] {
  return criticalThinkingLessons.map((lesson, index) => {
    const lectureId = `sa-g9-phil-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الدرس ${order}`;
    const lessonNumberEn = `Lesson ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `التفكير الناقد: ${lesson.titleAr}`,
      titleEn: `Critical Thinking: ${lesson.titleEn}`,
      subtitleAr: `${lessonNumberAr} — التفكير الناقد (الصف الثالث متوسط)`,
      subtitleEn: `${lessonNumberEn} — Critical Thinking (Grade 9 Intermediate)`,
      descriptionAr: 'المقرر الوزاري المعتمد للتفكير الناقد لطلاب المرحلة المتوسطة في المملكة العربية السعودية.',
      descriptionEn: 'Official Saudi Ministry of Education Critical Thinking curriculum for Grade 9 students.',
      topicAr: lesson.titleAr,
      topicEn: lesson.titleEn,
      durationMinutes: 40,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'PHILOSOPHY' as const,
      gradeLevel: 'G9' as const,
      educationType: 'PUBLIC' as const,
      educationTrack: 'GENERAL' as const,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الثالث المتوسط، المرحلة المتوسطة، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'Third Intermediate, Middle School, 1448 AH/2026 edition',
      termAr: 'كتاب التفكير الناقد، طبعة 1448هـ',
      termEn: 'Critical Thinking Textbook, 1448 AH Edition',
      unitTitleAr: 'مهارات التفكير الناقد والاستدلال',
      unitTitleEn: 'Critical Thinking & Logical Reasoning',
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: lesson.stepsAr,
      keyConceptsEn: lesson.stepsEn,
      summaryAr: lesson.summaryAr,
      summaryEn: lesson.summaryEn,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. الشرح المعرفي والتحليل المنطقي',
          titleEn: '1. Conceptual & Logical Analysis',
          contentAr: `${lesson.summaryAr}\n\nخطوات التطبيق العملي:\n- ${lesson.stepsAr.join('\n- ')}`,
          contentEn: `${lesson.summaryEn}\n\nPractical reasoning steps:\n- ${lesson.stepsEn.join('\n- ')}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diag`,
          titleAr: `خريطة التفكير: ${lesson.titleAr}`,
          titleEn: `Thinking Map: ${lesson.titleEn}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          captionAr: 'مخطط مهارات ومعايير التفكير الناقد المعتمدة لدى المنصة.',
          captionEn: 'Critical thinking framework diagram.',
          diagramType: 'concept_flow',
          visualSteps: lesson.stepsAr.map((labelAr, stepIdx) => ({
            labelAr,
            labelEn: lesson.stepsEn[stepIdx]
          }))
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم ${lessonNumberAr}`,
        titleEn: `${lessonNumberEn} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-q1`,
          textAr: lesson.questionAr,
          textEn: lesson.questionEn,
          optionsAr: [...lesson.optionsAr],
          optionsEn: [...lesson.optionsEn],
          correctIndex: lesson.correctIndex,
          conceptTestedAr: lesson.titleAr,
          conceptTestedEn: lesson.titleEn,
          explanationAr: lesson.explanationAr,
          explanationEn: lesson.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}

// ============================================================================
// 4. ISLAMIC STUDIES (الدراسات الإسلامية - المرحلة المتوسطة)
// ============================================================================

interface MiddleIslamicLesson {
  titleAr: string;
  titleEn: string;
  branchAr: string;
  branchEn: string;
  summaryAr: string;
  summaryEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string, string];
  optionsEn: [string, string, string, string];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

const middleIslamicLessons: Record<'G7' | 'G8' | 'G9', MiddleIslamicLesson[]> = {
  G7: [
    {
      titleAr: 'التوحيد: أهميته وأقسامه ودلائل قدرة الله تعالى',
      titleEn: 'Tawheed: Importance, Divisions, and Divine Signs',
      branchAr: 'التوحيد والعقيدة',
      branchEn: 'Tawheed & Creed',
      summaryAr: 'بيان توحيد الربوبية والألوهية والأسماء والصفات، وإفراد الله تعالى بالعبادة وحده لا شريك له.',
      summaryEn: 'Oneness of Allah in Lordship, Worship, and Names & Attributes, worshipping Him exclusively.',
      stepsAr: ['معرفة التوحيد', 'توحيد الربوبية', 'توحيد الألوهية', 'الأسماء والصفات'],
      stepsEn: ['Understanding Tawheed', 'Lordship (Rububiyyah)', 'Worship (Uluhiyyah)', 'Names and Attributes'],
      questionAr: 'ما هو التوحيد الذي دعت إليه جميع الرسل عليهم السلام وكان محل الخصومة مع أقوامهم؟',
      questionEn: 'Which category of Tawheed was the primary mission of all messengers?',
      optionsAr: ['توحيد الألوهية (العبادة)', 'توحيد الربوبية وحده', 'الاعتراف بالخلق فقط', 'التفكر بدون عمل'],
      optionsEn: ['Tawheed al-Uluhiyyah (Worship)', 'Rububiyyah alone', 'Mere intellectual affirmation', 'Meditation without worship'],
      correctIndex: 0,
      explanationAr: 'توحيد الألوهية هو إفراد الله بجميع أنواع العبادة كالرجاء والخوف والدعاء وهو أساس دعوة الرسل.',
      explanationEn: 'Tawheed al-Uluhiyyah is devoting all acts of worship exclusively to Allah, the core call of all prophets.'
    },
    {
      titleAr: 'الفقه: أحكام الطهارة والصلاة وسننها',
      titleEn: 'Fiqh: Purification, Prayer, and Sunan',
      branchAr: 'الفقه والعبادات',
      branchEn: 'Jurisprudence & Worship',
      summaryAr: 'شروط صحة الصلاة، أركانها، واجباتها، وسننها القولية والفعلية، وسجود السهو وأحكامه.',
      summaryEn: 'Prerequisites, pillars, obligatory acts, and sunan of Salah, along with Sujood as-Sahw.',
      stepsAr: ['الطهارة والوضوء', 'شروط الصلاة', 'أركان وواجبات الصلاة', 'سجود السهو'],
      stepsEn: ['Purification and wudu', 'Conditions of Salah', 'Pillars and obligations', 'Prostration of forgetfulness'],
      questionAr: 'ما حكم تكبيرة الإحرام في الصلاة؟',
      questionEn: 'What is the ruling on Takbirat al-Ihram in Salah?',
      optionsAr: ['ركن لا تصح الصلاة بدونه', 'سنة مستحبة', 'مكروهة', 'مباحة'],
      optionsEn: ['A vital pillar (Rukn) without which prayer is invalid', 'Recommended sunnah', 'Disliked', 'Optional'],
      correctIndex: 0,
      explanationAr: 'تكبيرة الإحرام هي الركن الأول الذي تبدأ به الصلاة ولا تنعقد بدونها.',
      explanationEn: 'Takbirat al-Ihram is the opening pillar of prayer without which prayer cannot begin.'
    }
  ],
  G8: [
    {
      titleAr: 'التفسير: تدبر سورة الفرقان وآيات عباد الرحمن',
      titleEn: 'Tafsir: Surat Al-Furqan and Attributes of Ibad ar-Rahman',
      branchAr: 'التفسير وعلوم القرآن',
      branchEn: 'Quranic Exegesis',
      summaryAr: 'دراسة صفات عباد الرحمن في سورة الفرقان: التواضع، قيام الليل، الخوف من عذاب النار، والاعتدال في الإنفاق وتجنب الكبائر.',
      summaryEn: 'Attributes of the Servants of the Most Merciful in Surat Al-Furqan: humility, night prayer, moderation, and piety.',
      stepsAr: ['التواضع والمشي بسكينة', 'قيام الليل والدعاء', 'الاعتدال في الإنفاق', 'اجتناب الشرك والكبائر'],
      stepsEn: ['Humility in conduct', 'Night prayer and supplication', 'Financial moderation', 'Shunning major sins'],
      questionAr: 'كيف وصف الله تعالى إنفاق عباد الرحمن في سورة الفرقان؟',
      questionEn: 'How does Allah describe the spending of Ibad ar-Rahman in Surat Al-Furqan?',
      optionsAr: ['بين الإسراف والتقتير قواماً واعتدالاً', 'بالإسراف المفرط', 'بالبخل والتقتير التام', 'بالتوقف عن الصدقات'],
      optionsEn: ['Balanced moderation between wastefulness and stinginess', 'Excessive extravagance', 'Total miserliness', 'Stopping charity'],
      correctIndex: 0,
      explanationAr: 'قال تعالى: ﴿وَالَّذِينَ إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا﴾.',
      explanationEn: 'Quran states: "And those who, when they spend, are neither extravagant nor miserly, but hold a medium between those."'
    },
    {
      titleAr: 'الحديث: الأخلاق النبوية والمسؤولية المجتمعية',
      titleEn: 'Hadith: Prophetic Morals & Social Responsibility',
      branchAr: 'الحديث الشريف',
      branchEn: 'Prophetic Traditions',
      summaryAr: 'دراسة الأحاديث النبوية الشريفة في فضل حسن الخلق، كف الأذى، الصدق في القول والعمل، والمسؤولية المشتركة في المجتمع.',
      summaryEn: 'Prophetic traditions on noble character, refraining from harm, truthfulness, and communal social responsibility.',
      stepsAr: ['فضل حسن الخلق', 'الصدق والأمانة', 'كف الأذى وإماطة العظام', 'التعاون والتكافل'],
      stepsEn: ['Noble character virtue', 'Truth and trust', 'Removing harm from path', 'Mutual cooperation'],
      questionAr: 'ما أثقل شيء يوضع في ميزان العبد المؤمن يوم القيامة كما أخبر النبي ﷺ؟',
      questionEn: 'What is the heaviest deed on the believer’s scale on Judgment Day according to the Prophet ﷺ?',
      optionsAr: ['حُسن الخُلق', 'كثرة الكلام المجرد', 'التفاخر بالأنساب', 'جمع الأموال دون إنفاق'],
      optionsEn: ['Good character (Husn al-Khuluq)', 'Idle speech', 'Genealogical boasting', 'Hoarding wealth'],
      correctIndex: 0,
      explanationAr: 'قال رسول الله ﷺ: «ما شيء أثقل في ميزان المؤمن يوم القيامة من خُلُقٍ حَسَن».',
      explanationEn: 'The Prophet ﷺ said: "Nothing is heavier upon the scale of a believer on the Day of Resurrection than good character."'
    }
  ],
  G9: [
    {
      titleAr: 'التوحيد: حماية جناب التوحيد ونبذ البدع والخرافات',
      titleEn: 'Tawheed: Protecting Monotheism & Rejecting Superstitions',
      branchAr: 'التوحيد والعقيدة',
      branchEn: 'Tawheed & Creed',
      summaryAr: 'حماية التوحيد الخالص من الشرك الأصغر، الرياء، التطيّر، ادعاء علم الغيب، والتمسك بالسنة النبوية الصحيحة.',
      summaryEn: 'Safeguarding pure monotheism from minor shirk, showing off (Riyaa), bad omens, claiming unseen knowledge, and adhering to Sunnah.',
      stepsAr: ['إخلاص العمل لله', 'الحذر من الشرك الأصغر والرياء', 'التوكل الصحيح', 'نفي علم الغيب عن غير الله'],
      stepsEn: ['Sincerity for Allah', 'Warning against minor shirk/riyaa', 'True reliance (Tawakkul)', 'Unseen known only to Allah'],
      questionAr: 'ما حكم التوكل على الله تعالى مع الأخذ بالأسباب المشروعة؟',
      questionEn: 'What is the Islamic ruling on relying upon Allah while utilizing legitimate means?',
      optionsAr: ['واجب شرعي وعين التوحيد', 'بدعة لا تجوز', 'مكروه', 'منافٍ للإيمان'],
      optionsEn: ['Religious obligation and core of Tawheed', 'An innovation', 'Disliked', 'Contradictory to faith'],
      correctIndex: 0,
      explanationAr: 'التوكل الصادق يجمع بين الاعتماد القلبي التام على الله وبذل الأسباب المادية المشروعة.',
      explanationEn: 'Authentic Tawakkul combines complete internal reliance upon Allah with pursuing lawful practical means.'
    },
    {
      titleAr: 'الفقه: أحكام المعاملات المالية والبيوع والأطعمة في الإسلام',
      titleEn: 'Fiqh: Commercial Transactions, Sales, and Dietary Laws',
      branchAr: 'الفقه والمعاملات',
      branchEn: 'Islamic Jurisprudence',
      summaryAr: 'شروط صحة البيع، تحريم الربا والغرر والاحتيال المالي، وضوابط الأطعمة الحلال والذكاة الشرعية والتجارة النزيهة.',
      summaryEn: 'Prerequisites of valid contracts, prohibition of usury (Riba) and deception, halal foods, and ethical commerce.',
      stepsAr: ['التراضي والصدق في البيع', 'تحريم الربا والغرر', 'الوفاء بالعقود', 'الأطعمة الحلال والطيبة'],
      stepsEn: ['Mutual consent and honesty', 'Prohibition of usury/deception', 'Fulfilling contracts', 'Halal and pure foods'],
      questionAr: 'ما الحكم الشرعي الصريح للربا في الشريعة الإسلامية؟',
      questionEn: 'What is the clear Islamic ruling on usury (Riba)?',
      optionsAr: ['محرّم قطعيّاً ومن كبائر الذنوب', 'مباح في التجارات الكبرى', 'مستحب للنمو السريع', 'مكروه تنزيهاً'],
      optionsEn: ['Strictly forbidden and a major sin', 'Permissible in large business', 'Recommended', 'Mildly disliked'],
      correctIndex: 0,
      explanationAr: 'قال تعالى: ﴿وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا﴾، فالربا محرم بنص القرآن الكريم وإجماع المسلمين.',
      explanationEn: 'Allah says: "Allah has permitted trade and has forbidden interest (usury)." It is categorically prohibited.'
    }
  ]
};

export function getSaudiMiddleIslamicCurriculum(gradeLevel: 'G7' | 'G8' | 'G9'): Lecture[] {
  const lessons = middleIslamicLessons[gradeLevel];
  const gradeNameAr = gradeLevel === 'G7' ? 'الأول متوسط' : gradeLevel === 'G8' ? 'الثاني متوسط' : 'الثالث متوسط';
  const gradeNameEn = gradeLevel === 'G7' ? 'First Intermediate' : gradeLevel === 'G8' ? 'Second Intermediate' : 'Third Intermediate';

  return lessons.map((lesson, index) => {
    const lectureId = `sa-${gradeLevel.toLowerCase()}-isl-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الدرس ${order}`;
    const lessonNumberEn = `Lesson ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `الدراسات الإسلامية: ${lesson.titleAr}`,
      titleEn: `Islamic Studies: ${lesson.titleEn}`,
      subtitleAr: `${lessonNumberAr} — ${lesson.branchAr} (${gradeNameAr})`,
      subtitleEn: `${lessonNumberEn} — ${lesson.branchEn} (${gradeNameEn})`,
      descriptionAr: `منهج الدراسات الإسلامية المعتمد من وزارة التعليم بالمملكة العربية السعودية لطلاب الصف ${gradeNameAr}.`,
      descriptionEn: `Official Saudi Ministry of Education Islamic Studies curriculum for Grade ${gradeLevel.slice(1)}.`,
      topicAr: lesson.titleAr,
      topicEn: lesson.titleEn,
      durationMinutes: 35,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'ISLAMIC_STUDIES' as const,
      gradeLevel,
      educationType: 'PUBLIC' as const,
      educationTrack: 'GENERAL' as const,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: `الصف ${gradeNameAr}، المرحلة المتوسطة، طبعة 1448هـ/2026م`,
      gradeLevelNameEn: `Grade ${gradeLevel.slice(1)} Intermediate, Middle School, 1448 AH/2026 edition`,
      termAr: 'الدراسات الإسلامية، طبعة 1448هـ المعتمدة',
      termEn: 'Islamic Studies, 1448 AH Official Edition',
      unitTitleAr: lesson.branchAr,
      unitTitleEn: lesson.branchEn,
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: lesson.stepsAr,
      keyConceptsEn: lesson.stepsEn,
      summaryAr: lesson.summaryAr,
      summaryEn: lesson.summaryEn,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. الشرح والتأصيل الشرعي والأدلة',
          titleEn: '1. Islamic Principles & Evidences',
          contentAr: `${lesson.summaryAr}\n\nالأحكام والفوائد المقررة:\n- ${lesson.stepsAr.join('\n- ')}`,
          contentEn: `${lesson.summaryEn}\n\nKey rules and benefits:\n- ${lesson.stepsEn.join('\n- ')}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diag`,
          titleAr: `خريطة المفاهيم الشرعية: ${lesson.titleAr}`,
          titleEn: `Islamic Concepts Map: ${lesson.titleEn}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          captionAr: 'مخطط المفاهيم الشرعية والأحكام الفقهية.',
          captionEn: 'Doctrinal and jurisprudence concept flow map.',
          diagramType: 'concept_flow',
          visualSteps: lesson.stepsAr.map((labelAr, stepIdx) => ({
            labelAr,
            labelEn: lesson.stepsEn[stepIdx]
          }))
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم ${lessonNumberAr}`,
        titleEn: `${lessonNumberEn} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-q1`,
          textAr: lesson.questionAr,
          textEn: lesson.questionEn,
          optionsAr: [...lesson.optionsAr],
          optionsEn: [...lesson.optionsEn],
          correctIndex: lesson.correctIndex,
          conceptTestedAr: lesson.titleAr,
          conceptTestedEn: lesson.titleEn,
          explanationAr: lesson.explanationAr,
          explanationEn: lesson.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}

// ============================================================================
// 5. ART EDUCATION (التربية الفنية - المرحلة المتوسطة)
// ============================================================================

export function getSaudiMiddleVisualArtsCurriculum(gradeLevel: 'G7' | 'G8' | 'G9'): Lecture[] {
  const gradeNameAr = gradeLevel === 'G7' ? 'الأول متوسط' : gradeLevel === 'G8' ? 'الثاني متوسط' : 'الثالث متوسط';
  const gradeNameEn = gradeLevel === 'G7' ? 'First Intermediate' : gradeLevel === 'G8' ? 'Second Intermediate' : 'Third Intermediate';

  const topics = [
    {
      titleAr: 'فنون الرسم والتصوير التشكيلي وقواعد المنظور والتظليل',
      titleEn: 'Drawing, Painting, Perspective, and Shading',
      focusAr: 'أسس المنظور الهندسي ذو النقطة والنقطتين، درجات الظل والنور، ونسب الطبيعة الصامتة.',
      focusEn: 'One-point and two-point linear perspective, value and shading, and still life proportions.',
      stepsAr: ['خط الأفق ونقطة التلاشي', 'رسم خطوط المنظور', 'توزيع الظل والنور', 'إخراج اللوحة الفنية'],
      stepsEn: ['Horizon line and vanishing point', 'Perspective guidelines', 'Value and shading', 'Artwork presentation'],
      questionAr: 'ما العنصر الأساسي في قواعد المنظور الذي تلتقي عنده جميع الخطوط المتوازية المتراجعة؟',
      questionEn: 'What key perspective element is the point where receding parallel lines converge?',
      optionsAr: ['نقطة التلاشي (Vanishing Point)', 'مركز الإطار العشوائي', 'نهاية قلم الرصاص', 'حافة الطاولة'],
      optionsEn: ['Vanishing Point', 'Random frame center', 'Pencil edge', 'Table rim'],
      correctIndex: 0,
      explanationAr: 'نقطة التلاشي تقع على خط الأفق وتلتقي عندها الخطوط المتراجعة لإعطاء إحساس بالعمق الثلاثي الأبعاد.',
      explanationEn: 'The vanishing point lies on the horizon line where parallel lines converge to produce three-dimensional depth.'
    },
    {
      titleAr: 'الزخرفة الإسلامية وتشكيل الخزف والتراث السعودي',
      titleEn: 'Islamic Ornamentation, Ceramic Arts, and Saudi Heritage',
      focusAr: 'التكرار والتماثل في الزخارف الهندسية والنباتية، التشكيل بالطين وبناء الأواني الفخارية والتراثية.',
      focusEn: 'Repetition and symmetry in geometric Islamic arabesques, clay modeling, and heritage pottery.',
      stepsAr: ['الوحدة الزخرفية', 'التناظر والتشعب', 'تشكيل الطين الخزفي', 'الحرق والتلوين'],
      stepsEn: ['Ornamental motif', 'Symmetry and branching', 'Clay shaping', 'Firing and glazing'],
      questionAr: 'أي من الخصائص الآتية تعد السمة البارزة في الزخرفة الإسلامية الهندسية؟',
      questionEn: 'Which of the following is a primary feature of Islamic geometric decoration?',
      optionsAr: ['التكرار والتناظر والتوازن الحركي', 'العشوائية وعدم الانتظام', 'طمس الأشكال بالكامل', 'استخدام لون واحد فقط دائماً'],
      optionsEn: ['Repetition, symmetry, and rhythmic balance', 'Randomness and disorder', 'Blurring shapes entirely', 'Monochrome only always'],
      correctIndex: 0,
      explanationAr: 'تقوم الزخرفة الإسلامية على التكرار والتناظر والتوازن الرياضي الدقيق الذي يعكس الجمال والنظام.',
      explanationEn: 'Islamic ornamentation relies on mathematical repetition, symmetry, and balance reflecting aesthetic order.'
    }
  ];

  return topics.map((t, index) => {
    const lectureId = `sa-${gradeLevel.toLowerCase()}-art-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الوحدة ${order}`;
    const lessonNumberEn = `Unit ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `التربية الفنية: ${t.titleAr}`,
      titleEn: `Art Education: ${t.titleEn}`,
      subtitleAr: `${lessonNumberAr} — التربية الفنية (${gradeNameAr})`,
      subtitleEn: `${lessonNumberEn} — Art Education (${gradeNameEn})`,
      descriptionAr: `منهج التربية الفنية المعتمد من وزارة التعليم بالمملكة العربية السعودية لطلاب الصف ${gradeNameAr}.`,
      descriptionEn: `Official Saudi Ministry of Education Art Education curriculum for Grade ${gradeLevel.slice(1)}.`,
      topicAr: t.titleAr,
      topicEn: t.titleEn,
      durationMinutes: 30,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'VISUAL_ARTS' as const,
      gradeLevel,
      educationType: 'PUBLIC' as const,
      educationTrack: 'GENERAL' as const,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: `الصف ${gradeNameAr}، المرحلة المتوسطة، طبعة 1448هـ/2026م`,
      gradeLevelNameEn: `Grade ${gradeLevel.slice(1)} Intermediate, Middle School, 1448 AH/2026 edition`,
      termAr: 'التربية الفنية، طبعة 1448هـ',
      termEn: 'Art Education, 1448 AH Edition',
      unitTitleAr: t.titleAr,
      unitTitleEn: t.titleEn,
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: t.stepsAr,
      keyConceptsEn: t.stepsEn,
      summaryAr: t.focusAr,
      summaryEn: t.focusEn,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. الأسس الفنية والتقنيات التطبيقية',
          titleEn: '1. Artistic Foundations and Techniques',
          contentAr: `${t.focusAr}\n\nخطوات العمل الفني:\n- ${t.stepsAr.join('\n- ')}`,
          contentEn: `${t.focusEn}\n\nCreative steps:\n- ${t.stepsEn.join('\n- ')}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diag`,
          titleAr: `مخطط الإنجاز الفني: ${t.titleAr}`,
          titleEn: `Artistic Flow: ${t.titleEn}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          captionAr: 'مخطط مراحل العمل الفني والجمالي.',
          captionEn: 'Creative workflow and aesthetics.',
          diagramType: 'concept_flow',
          visualSteps: t.stepsAr.map((labelAr, stepIdx) => ({
            labelAr,
            labelEn: t.stepsEn[stepIdx]
          }))
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم ${lessonNumberAr}`,
        titleEn: `${lessonNumberEn} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-q1`,
          textAr: t.questionAr,
          textEn: t.questionEn,
          optionsAr: [...t.optionsAr],
          optionsEn: [...t.optionsEn],
          correctIndex: t.correctIndex,
          conceptTestedAr: t.titleAr,
          conceptTestedEn: t.titleEn,
          explanationAr: t.explanationAr,
          explanationEn: t.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}

// ============================================================================
// 6. LIFE & FAMILY SKILLS (المهارات الحياتية والأسرية - المرحلة المتوسطة)
// ============================================================================

export function getSaudiMiddleLifeSkillsCurriculum(gradeLevel: 'G7' | 'G8' | 'G9'): Lecture[] {
  const gradeNameAr = gradeLevel === 'G7' ? 'الأول متوسط' : gradeLevel === 'G8' ? 'الثاني متوسط' : 'الثالث متوسط';
  const gradeNameEn = gradeLevel === 'G7' ? 'First Intermediate' : gradeLevel === 'G8' ? 'Second Intermediate' : 'Third Intermediate';

  const topics = [
    {
      titleAr: 'الغذاء والتغذية الصحية المتوازنة وإعداد الوجبات',
      titleEn: 'Nutrition, Balanced Diet, and Meal Planning',
      focusAr: 'المجموعات الغذائية الرئيسة، حساب السعرات، الهرم الغذائي الصحي، والوقاية من السمنة وسوء التغذية.',
      focusEn: 'Major food groups, calorie intake, food pyramid guidelines, and balanced nutrition.',
      stepsAr: ['المجموعات الغذائية', 'توازن السعرات', 'اختيار الأطعمة الطازجة', 'سلامة حفظ الغذاء'],
      stepsEn: ['Food groups', 'Calorie balance', 'Selecting fresh foods', 'Safe food storage'],
      questionAr: 'ما العنصر الغذائي الأساسي المسؤول عن بناء أنسجة وخلايا الجسم وتجديدها؟',
      questionEn: 'Which essential nutrient is primarily responsible for building and repairing body tissues?',
      optionsAr: ['البروتينات (Proteins)', 'السكريات البسيطة', 'الدهون المشبعة', 'الأملاح الزائدة'],
      optionsEn: ['Proteins', 'Simple sugars', 'Saturated fats', 'Excess salts'],
      correctIndex: 0,
      explanationAr: 'البروتينات هي حجر البناء الأساسي لخلايا وأنسجة العضلات والنمو في جسم الإنسان.',
      explanationEn: 'Proteins are the essential structural building blocks for cells, muscles, and biological tissues.'
    },
    {
      titleAr: 'إدارة الوقت والموارد الأسرية والوعي الاستهلاكي والمالي',
      titleEn: 'Time Management, Family Resources, and Financial Literacy',
      focusAr: 'تنظيم جدول الأولويات، وضع الميزانية الشخصية والأسرية، الادخار وتجنب الشراء الاندفاعي.',
      focusEn: 'Prioritization, personal and household budgeting, smart savings, and avoiding impulsive spending.',
      stepsAr: ['تحديد الأولويات', 'وضع ميزانية واضحة', 'التمييز بين الحاجات والرغبات', 'الادخار والتخطيط'],
      stepsEn: ['Set priorities', 'Create clear budget', 'Distinguish needs from wants', 'Save and plan'],
      questionAr: 'ما الخطوة الأولى الصحيحة لإدارة المصروف الشخصي بوعي مالي؟',
      questionEn: 'What is the primary first step to managing personal pocket money with financial literacy?',
      optionsAr: ['التمييز بين الحاجات الأساسية والرغبات الثانوية', 'إنفاق كل المبلغ فور استلامه', 'الاستدانة لشراء كماليات', 'تجنب تسجيل المصروفات'],
      optionsEn: ['Distinguishing essential needs from secondary wants', 'Spending all money immediately', 'Borrowing for luxuries', 'Avoiding expense tracking'],
      correctIndex: 0,
      explanationAr: 'التمييز بين الحاجة الضرورية والرغبة التكميلية هو أساس التخطيط المالي السليم والادخار.',
      explanationEn: 'Distinguishing between essential needs and non-essential wants is the foundational pillar of financial literacy.'
    }
  ];

  return topics.map((t, index) => {
    const lectureId = `sa-${gradeLevel.toLowerCase()}-life-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الوحدة ${order}`;
    const lessonNumberEn = `Unit ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `المهارات الحياتية والأسرية: ${t.titleAr}`,
      titleEn: `Life and Family Skills: ${t.titleEn}`,
      subtitleAr: `${lessonNumberAr} — المهارات الحياتية والأسرية (${gradeNameAr})`,
      subtitleEn: `${lessonNumberEn} — Life and Family Skills (${gradeNameEn})`,
      descriptionAr: `منهج المهارات الحياتية والأسرية المعتمد من وزارة التعليم بالمملكة العربية السعودية لطلاب الصف ${gradeNameAr}.`,
      descriptionEn: `Official Saudi Ministry of Education Life and Family Skills curriculum for Grade ${gradeLevel.slice(1)}.`,
      topicAr: t.titleAr,
      topicEn: t.titleEn,
      durationMinutes: 30,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'LIFE_SKILLS' as const,
      gradeLevel,
      educationType: 'PUBLIC' as const,
      educationTrack: 'GENERAL' as const,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: `الصف ${gradeNameAr}، المرحلة المتوسطة، طبعة 1448هـ/2026م`,
      gradeLevelNameEn: `Grade ${gradeLevel.slice(1)} Intermediate, Middle School, 1448 AH/2026 edition`,
      termAr: 'المهارات الحياتية والأسرية، طبعة 1448هـ',
      termEn: 'Life and Family Skills, 1448 AH Edition',
      unitTitleAr: t.titleAr,
      unitTitleEn: t.titleEn,
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: t.stepsAr,
      keyConceptsEn: t.stepsEn,
      summaryAr: t.focusAr,
      summaryEn: t.focusEn,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. المهارات العملية والتطبيقات اليومية',
          titleEn: '1. Practical Skills & Daily Applications',
          contentAr: `${t.focusAr}\n\nالإرشادات العملية:\n- ${t.stepsAr.join('\n- ')}`,
          contentEn: `${t.focusEn}\n\nPractical guidance:\n- ${t.stepsEn.join('\n- ')}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diag`,
          titleAr: `مخطط المهارات: ${t.titleAr}`,
          titleEn: `Skills Flow: ${t.titleEn}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          captionAr: 'مخطط خطوات المهارة الحياتية والوعي الأسري.',
          captionEn: 'Practical life skill workflow diagram.',
          diagramType: 'concept_flow',
          visualSteps: t.stepsAr.map((labelAr, stepIdx) => ({
            labelAr,
            labelEn: t.stepsEn[stepIdx]
          }))
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم ${lessonNumberAr}`,
        titleEn: `${lessonNumberEn} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-q1`,
          textAr: t.questionAr,
          textEn: t.questionEn,
          optionsAr: [...t.optionsAr],
          optionsEn: [...t.optionsEn],
          correctIndex: t.correctIndex,
          conceptTestedAr: t.titleAr,
          conceptTestedEn: t.titleEn,
          explanationAr: t.explanationAr,
          explanationEn: t.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}

// ============================================================================
// 7. MAIN SAUDI MIDDLE DISPATCHER
// ============================================================================

export function getSaudiMiddleCurriculum(
  subject: Subject,
  gradeLevel: GradeLevel,
  _educationType: EducationType = 'PUBLIC'
): Lecture[] {
  if (gradeLevel !== 'G7' && gradeLevel !== 'G8' && gradeLevel !== 'G9') {
    return [];
  }

  // 1. Mathematics (الرياضيات)
  if (subject === 'MATH') {
    if (gradeLevel === 'G7') return MIDDLE_MATH_LECTURES;
    if (gradeLevel === 'G8') return MIDDLE_MATH_G8_LECTURES;
    if (gradeLevel === 'G9') return MIDDLE_MATH_G9_LECTURES;
  }

  // 2. General Science (العلوم)
  if (subject === 'GENERAL_SCIENCE') {
    const scienceLecs = SAUDI_SCIENCE_CURRICULA[gradeLevel]?.['GENERAL_SCIENCE'];
    if (scienceLecs && scienceLecs.length > 0) return scienceLecs;
  }

  // 3. Arabic Language (لغتي الخالدة)
  if (subject === 'ARABIC_LANG') {
    const arabicLecs = getSaudiArabicCurriculum(gradeLevel, 'ARABIC_LANG');
    if (arabicLecs && arabicLecs.length > 0) return arabicLecs;
  }

  // 4. English Language (Super Goal 1, 2, 3)
  if (subject === 'ENGLISH') {
    return getSaudiSuperGoalCurriculum(gradeLevel);
  }

  // 5. Islamic Studies (الدراسات الإسلامية)
  if (subject === 'ISLAMIC_STUDIES') {
    return getSaudiMiddleIslamicCurriculum(gradeLevel);
  }

  // 6. Social Studies (الدراسات الاجتماعية والمواطنة)
  if (subject === 'HISTORY') {
    return getSaudiMiddleSocialStudiesCurriculum(gradeLevel);
  }

  // 7. Digital Skills (المهارات الرقمية)
  if (subject === 'COMPUTER_SCIENCE') {
    if (gradeLevel === 'G7') return SAUDI_G7_DIGITAL_SKILLS_LECTURES;
    if (gradeLevel === 'G8') return SAUDI_G8_DIGITAL_SKILLS_LECTURES;
    if (gradeLevel === 'G9') return SAUDI_G9_DIGITAL_SKILLS_LECTURES;
  }

  // 8. Art Education (التربية الفنية)
  if (subject === 'VISUAL_ARTS') {
    return getSaudiMiddleVisualArtsCurriculum(gradeLevel);
  }

  // 9. Life and Family Skills (المهارات الحياتية والأسرية)
  if (subject === 'LIFE_SKILLS') {
    return getSaudiMiddleLifeSkillsCurriculum(gradeLevel);
  }

  // 10. Critical Thinking (التفكير الناقد - الصف الثالث متوسط)
  if (subject === 'PHILOSOPHY' && gradeLevel === 'G9') {
    return getSaudiMiddleCriticalThinkingCurriculum();
  }

  return [];
}
