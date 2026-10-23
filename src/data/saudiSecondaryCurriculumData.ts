import type { EducationTrack, EducationType, GradeLevel, Lecture, Subject } from '../types';
import { getSaudiMathG10Curriculum, getSaudiMathG11Curriculum } from './saudiMathCurriculumData';
import { HIGH_MATH_G12_LECTURES } from './highMath12CurriculumData';
import { HIGH_PHYSICS_G10_LECTURES } from './highPhysics10CurriculumData';
import { getSaudiPhysics2G11Curriculum } from './saudiPhysics2G11CurriculumData';
import { HIGH_PHYSICS_G12_LECTURES } from './highPhysics12CurriculumData';
import { getSaudiChemistryG10Curriculum, getSaudiChemistryG11Curriculum } from './saudiChemistryCurriculumData';
import { HIGH_CHEMISTRY_G12_LECTURES } from './highChemistry12CurriculumData';
import { getSaudiBiologyG10Curriculum } from './saudiBiologyCurriculumData';
import { getSaudiBiology2G11Curriculum } from './saudiBiology2G11CurriculumData';
import { BIOLOGY_LECTURES } from './stemCurriculumData';
import { getSaudiEnglishG10Curriculum } from './saudiEnglishG10CurriculumData';
import { getSaudiEnglishG11Curriculum } from './saudiEnglishG11CurriculumData';
import { SAUDI_G11_HEALTH_SCIENCE_LECTURES } from './saudiHealthScienceG11CurriculumData';
import { SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LECTURES } from './saudiBusinessDigitalTechnologyG11CurriculumData';
import { SAUDI_G11_HISTORY_LECTURES } from './saudiHistoryG11CurriculumData';
import { SAUDI_HIGH_GEOGRAPHY_G10_LECTURES, SAUDI_HIGH_HISTORY_G10_LECTURES } from './nationalHistoryGeographyData';
import { SAUDI_SECONDARY_DIGITAL_TECHNOLOGY_SUPPLEMENTARY } from './saudiDigitalSkillsSupplementaryCurriculumData';
import { getSaudiArabicCurriculum } from './saudiArabicCurriculumData';
import { HIGH_ARABIC_LIT_G10_LECTURES } from './highArabicLit10CurriculumData';
import { HIGH_ARABIC_LIT_G12_LECTURES } from './highArabicLit12CurriculumData';
import { ISLAMIC_STUDIES_FULL } from './islamicArabicCurriculum';
import { SAUDI_G6_LIFE_SKILLS_LECTURES } from './saudiGrade6LifeSkillsCurriculumData';
import { HIGH_COMP_G10_LECTURES } from './highComp10CurriculumData';
import { HIGH_COMP_G11_LECTURES } from './highComp11CurriculumData';
import { HIGH_COMP_G12_LECTURES } from './highComp12CurriculumData';

/**
 * Official Saudi Secondary Pathways Curriculum System (نظام المسارات للثانوية العامة)
 * - Grade 10: Common First Year (السنة الأولى المشتركة)
 * - Grade 11: Specialized Pathways (المسارات التخصصية: عام، حاسب وهندسة، صحة وحياة، إدارة أعمال، شرعي)
 * - Grade 12: Specialized Pathways (المسارات التخصصية: عام، حاسب وهندسة، صحة وحياة، إدارة أعمال، شرعي)
 */

// Grade 10 - Common First Year subjects
export const SAUDI_G10_COMMON_SUBJECTS: Subject[] = [
  'MATH',
  'PHYSICS',
  'CHEMISTRY',
  'BIOLOGY',
  'COMPUTER_SCIENCE',
  'ENGLISH',
  'ARABIC_LIT',
  'ISLAMIC_STUDIES',
  'HISTORY',
  'LIFE_SKILLS'
];

// Grade 11 - Subjects by specialized pathway
export const SAUDI_G11_SUBJECTS_BY_TRACK: Record<EducationTrack, Subject[]> = {
  GENERAL: [
    'MATH',
    'PHYSICS',
    'CHEMISTRY',
    'BIOLOGY',
    'ENGLISH',
    'ARABIC_LIT',
    'COMPUTER_SCIENCE',
    'HISTORY',
    'ISLAMIC_STUDIES',
    'HEALTH_SCIENCE'
  ],
  CS_ENGINEERING: [
    'MATH',
    'PHYSICS',
    'CHEMISTRY',
    'COMPUTER_SCIENCE',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ],
  HEALTH_LIFE: [
    'BIOLOGY',
    'HEALTH_SCIENCE',
    'CHEMISTRY',
    'PHYSICS',
    'MATH',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ],
  BUSINESS: [
    'COMPUTER_SCIENCE',
    'MATH',
    'ENGLISH',
    'ARABIC_LIT',
    'HISTORY',
    'ISLAMIC_STUDIES'
  ],
  SHARIA_HUMANITIES: [
    'ISLAMIC_STUDIES',
    'ARABIC_LIT',
    'HISTORY',
    'GEOGRAPHY',
    'ENGLISH'
  ],
  SCIENCE_BIO: [
    'BIOLOGY',
    'CHEMISTRY',
    'PHYSICS',
    'MATH',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ],
  SCIENCE_MATH: [
    'MATH',
    'PHYSICS',
    'CHEMISTRY',
    'COMPUTER_SCIENCE',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ]
};

// Grade 12 - Subjects by specialized pathway
export const SAUDI_G12_SUBJECTS_BY_TRACK: Record<EducationTrack, Subject[]> = {
  GENERAL: [
    'MATH',
    'PHYSICS',
    'CHEMISTRY',
    'BIOLOGY',
    'ENGLISH',
    'ARABIC_LIT',
    'COMPUTER_SCIENCE',
    'ISLAMIC_STUDIES'
  ],
  CS_ENGINEERING: [
    'MATH',
    'PHYSICS',
    'COMPUTER_SCIENCE',
    'CHEMISTRY',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ],
  HEALTH_LIFE: [
    'BIOLOGY',
    'HEALTH_SCIENCE',
    'CHEMISTRY',
    'PHYSICS',
    'MATH',
    'ENGLISH',
    'ISLAMIC_STUDIES'
  ],
  BUSINESS: [
    'MATH',
    'COMPUTER_SCIENCE',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ],
  SHARIA_HUMANITIES: [
    'ISLAMIC_STUDIES',
    'ARABIC_LIT',
    'HISTORY',
    'GEOGRAPHY',
    'ENGLISH'
  ],
  SCIENCE_BIO: [
    'BIOLOGY',
    'CHEMISTRY',
    'PHYSICS',
    'MATH',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ],
  SCIENCE_MATH: [
    'MATH',
    'PHYSICS',
    'COMPUTER_SCIENCE',
    'CHEMISTRY',
    'ENGLISH',
    'ARABIC_LIT',
    'ISLAMIC_STUDIES'
  ]
};

/**
 * Get verified subjects for Saudi secondary stage by grade and track
 */
export function getSaudiSecondarySubjects(gradeLevel: GradeLevel, track: EducationTrack = 'GENERAL'): Subject[] {
  if (gradeLevel === 'G10') {
    return [...SAUDI_G10_COMMON_SUBJECTS];
  }
  if (gradeLevel === 'G11') {
    return SAUDI_G11_SUBJECTS_BY_TRACK[track] || SAUDI_G11_SUBJECTS_BY_TRACK.GENERAL;
  }
  if (gradeLevel === 'G12') {
    return SAUDI_G12_SUBJECTS_BY_TRACK[track] || SAUDI_G12_SUBJECTS_BY_TRACK.GENERAL;
  }
  return [];
}

/**
 * Verify whether a subject is available for a Saudi secondary student
 */
export function isSaudiSecondarySubjectAvailable(
  subject: Subject,
  gradeLevel: GradeLevel,
  track: EducationTrack = 'GENERAL',
  _educationType: EducationType = 'PUBLIC'
): boolean {
  if (!['G10', 'G11', 'G12'].includes(gradeLevel)) return false;
  const normalizedSubject: Subject = subject === 'ARABIC_LANG' ? 'ARABIC_LIT' : subject;
  const available = getSaudiSecondarySubjects(gradeLevel, track);
  return available.includes(normalizedSubject);
}

/**
 * Mega Goal 3 Grade 12 English authentic curriculum
 */
const megaGoal3Units = [
  {
    titleEn: 'Two Is Better Than One',
    titleAr: 'اثنان خير من واحد (التعاون والشراكات)',
    pageRange: '6–19',
    focusEn: 'Discussing partnerships, famous teams and collaborations, and complementary abilities.',
    focusAr: 'مناقشة الشراكات والفرق المشهورة والتعاون والقدرات التكاملية.',
    grammarEn: 'Compound adjectives, forming new words with prefixes and suffixes, past narrative tenses.',
    grammarAr: 'الصفات المركبة، وصياغة الكلمات بالبوادئ واللواحق، وأزمنة السرد في الماضي.',
    exampleEn: 'The research team formed a well-established partnership that achieved great success.',
    exampleAr: 'كوّن فريق البحث شراكة وثيقة وناجحة حققت إنجازات باهرة.',
    questionEn: 'Choose the correct compound adjective: They have a ___ partnership.',
    questionAr: 'اختر الصفة المركبة الصحيحة: They have a ___ partnership.',
    optionsEn: ['well-known', 'well known', 'better-known', 'best-known'],
    optionsAr: ['well-known', 'well known', 'better-known', 'best-known'],
    correctIndex: 0,
    explanationEn: 'Compound adjectives before nouns are typically hyphenated (well-known).',
    explanationAr: 'تُربط الصفات المركبة الواقعة قبل الأسماء بفاصلة ربط (hyphen).'
  },
  {
    titleEn: 'Rags to Riches',
    titleAr: 'من الفقر إلى الثراء (قصص النجاح)',
    pageRange: '20–33',
    focusEn: 'Describing life stories, overcome hardships, entrepreneurship, and personal ambitions.',
    focusAr: 'وصف السير الذاتية وقصص النجاح والتغلب على الصعاب وريادة الأعمال والطموح.',
    grammarEn: 'Used to vs. would, past perfect continuous vs. past simple, expressing past regrets with wish/should have.',
    grammarAr: 'الفرق بين used to وwould، والماضي التام المستمر والماضي البسيط، والتعبير عن الندم في الماضي.',
    exampleEn: 'Before founding the enterprise, he had been working tirelessly for five years.',
    exampleAr: 'قبل تأسيس الشركة، كان يعمل بلا كلل لمدة خمس سنوات.',
    questionEn: 'Which structure expresses past habit with action verbs?',
    questionAr: 'أي تركيب يعبر عن عادة في الماضي مع أفعال الحركة؟',
    optionsEn: ['would + base form', 'will + base form', 'must + base form', 'should + base form'],
    optionsAr: ['would + base form', 'will + base form', 'must + base form', 'should + base form'],
    correctIndex: 0,
    explanationEn: 'Would followed by a base verb can describe repeated past actions and habits.',
    explanationAr: 'تُستخدم would متبوعة بالمصدر لوصف الأفعال والعادات المتكررة في الماضي.'
  },
  {
    titleEn: 'What Will They Think of Next?',
    titleAr: 'ماذا سيخترعون تالياً؟ (المستقبل والابتكارات)',
    pageRange: '34–47',
    focusEn: 'Discussing future technology, artificial intelligence, space exploration, and transportation.',
    focusAr: 'مناقشة تقنيات المستقبل والذكاء الاصطناعي واستكشاف الفضاء ووسائل النقل الذكية.',
    grammarEn: 'Future perfect, future progressive, and future with dependent time clauses.',
    grammarAr: 'المستقبل التام والمستقبل المستمر والجمل الظرفية الدالة على الزمن المستقبلي.',
    exampleEn: 'By 2030, scientists will have developed more sustainable energy solutions.',
    exampleAr: 'بحلول عام 2030، سيكون العلماء قد طوروا حلول طاقة أكثر استدامة.',
    questionEn: 'Complete: By next year, the engineers ___ the new solar facility.',
    questionAr: 'أكمل: By next year, the engineers ___ the new solar facility.',
    optionsEn: ['will have completed', 'will be completing', 'completed', 'completes'],
    optionsAr: ['will have completed', 'will be completing', 'completed', 'completes'],
    correctIndex: 0,
    explanationEn: 'By + future time marker takes the Future Perfect (will have + past participle).',
    explanationAr: 'تتطلب العبارة الدالة (By + زمن مستقبلي) صيغة المستقبل التام (will have + التصريف الثالث).'
  },
  {
    titleEn: 'The World of TV',
    titleAr: 'عالم التلفزيون والإعلام',
    pageRange: '48–61',
    focusEn: 'Media impact, documentaries, film reviews, critical viewing, and media ethics.',
    focusAr: 'أثر وسائل الإعلام والأفلام الوثائقية والنقد التلفزيوني والتحليل الإعلامي والمصداقية.',
    grammarEn: 'Both...and, neither...nor, either...or, and independent clauses with coordinating conjunctions.',
    grammarAr: 'روابط الربط المزدوجة (both...and / neither...nor) وربط الجمل المستقلة بحروف العطف.',
    exampleEn: 'Neither the presenter nor the producers anticipated such audience engagement.',
    exampleAr: 'لم يتوقع المقدم ولا المنتجون هذا التفاعل الجماهيري الكبير.',
    questionEn: 'Choose the correct pair: The film was ___ thrilling ___ educational.',
    questionAr: 'اختر رابط الربط الصحيح: The film was ___ thrilling ___ educational.',
    optionsEn: ['both / and', 'either / nor', 'neither / or', 'both / nor'],
    optionsAr: ['both / and', 'either / nor', 'neither / or', 'both / nor'],
    correctIndex: 0,
    explanationEn: 'The correlative pair is "both...and" to link two complementary attributes.',
    explanationAr: 'الرابط المزدوج المتناسق هو both...and للجمع بين صفتين متكاملتين.'
  },
  {
    titleEn: 'Do You Really Need It?',
    titleAr: 'هل تحتاجه حقاً؟ (التسويق وسلوك المستهلك)',
    pageRange: '62–75',
    focusEn: 'Advertising techniques, persuasion, consumer spending, financial wisdom, and smart shopping.',
    focusAr: 'أساليب الإعلان والإقناع وسلوك المستهلك والإدارة المالية والترشيد.',
    grammarEn: 'Conditional sentences with wish, unreal conditions in the past, and causative verbs (make, have, get, let).',
    grammarAr: 'الجمل الشرطية غير الواقعية في الماضي وأفعال السببية (make, have, get, let).',
    exampleEn: 'Advertisements try to make consumers believe they need every new product.',
    exampleAr: 'تحاول الإعلانات جعل المستهلكين يعتقدون أنهم بحاجة إلى كل منتج جديد.',
    questionEn: 'Which verb takes an object and a base verb: The ad made him ___ the product.',
    questionAr: 'أي صيغة صحيحة بعد فعل السببية make: The ad made him ___ the product.',
    optionsEn: ['buy', 'to buy', 'buying', 'bought'],
    optionsAr: ['buy', 'to buy', 'buying', 'bought'],
    correctIndex: 0,
    explanationEn: 'Causative "make" takes an object followed by the base form of the verb without "to".',
    explanationAr: 'يأتي بعد فعل السببية make مفعول به يليه الفعل المجرد بدون to.'
  },
  {
    titleEn: 'The Gender Divide',
    titleAr: 'التواصل والاهتمامات المتنوعة',
    pageRange: '76–89',
    focusEn: 'Communication styles, verbal and non-verbal expression, problem solving, and social psychology.',
    focusAr: 'أنماط التواصل، التعبير اللفظي وغير اللفظي، حل المشكلات، وعلم النفس الاجتماعي.',
    grammarEn: 'Verbs followed by gerunds or infinitives with difference in meaning; reporting verbs with that clauses.',
    grammarAr: 'الأفعال المتبوعة بالمصدر أو اسم الفاعل واختلاف المعنى، وأفعال نقل القول (reporting verbs).',
    exampleEn: 'He remembered to send the report before the scheduled meeting.',
    exampleAr: 'تذكر أن يرسل التقرير قبل الاجتماع المحدد.',
    questionEn: 'Which sentence means "stopped an action in progress":',
    questionAr: 'أي جملة تعني التوقف عن ممارسة الفعل:',
    optionsEn: ['He stopped smoking.', 'He stopped to smoke.', 'He stopped smoke.', 'He stop smoking.'],
    optionsAr: ['He stopped smoking.', 'He stopped to smoke.', 'He stopped smoke.', 'He stop smoking.'],
    correctIndex: 0,
    explanationEn: 'Stop + gerund means discontinuing the action completely.',
    explanationAr: 'استخدام stop متبوعاً بالـ gerund يعني الامتناع عن الفعل والتوقف عنه تماماً.'
  }
];

export function getSaudiEnglishG12Curriculum(_track: EducationTrack = 'GENERAL'): Lecture[] {
  return megaGoal3Units.map((unit, index) => {
    const lectureId = `sa-g12-eng-u${index + 1}`;
    const order = index + 1;
    const lessonNumberAr = `الوحدة ${order}`;
    const lessonNumberEn = `Unit ${order}`;

    return {
      id: lectureId,
      order,
      titleAr: `اللغة الإنجليزية 3 (Mega Goal 3): ${unit.titleAr}`,
      titleEn: `English 3 (Mega Goal 3): ${unit.titleEn}`,
      subtitleAr: `${lessonNumberAr} — Mega Goal 3`,
      subtitleEn: `${lessonNumberEn} — Mega Goal 3`,
      descriptionAr: `منهج اللغة الإنجليزية المعتمد للصف الثالث الثانوي مسارات (Mega Goal 3). صفحات الوحدة: ${unit.pageRange}.`,
      descriptionEn: `Official Third Secondary English curriculum (Mega Goal 3). Unit pages: ${unit.pageRange}.`,
      topicAr: `${unit.titleAr} (ص ${unit.pageRange})`,
      topicEn: `${unit.titleEn} (pp. ${unit.pageRange})`,
      durationMinutes: 45,
      isLocked: index > 0,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA' as const,
      subject: 'ENGLISH' as const,
      gradeLevel: 'G12' as const,
      educationType: 'PUBLIC' as const,
      educationTrack: _track,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الثالث الثانوي، نظام المسارات، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'Third Secondary, Pathways System, 1448 AH/2026 edition',
      termAr: 'Mega Goal 3، طبعة 1448هـ',
      termEn: 'Mega Goal 3, 1448 AH edition',
      unitTitleAr: unit.titleAr,
      unitTitleEn: unit.titleEn,
      lessonNumberAr,
      lessonNumberEn,
      keyConceptsAr: [unit.focusAr, unit.grammarAr],
      keyConceptsEn: [unit.focusEn, unit.grammarEn],
      summaryAr: `الوحدة ${index + 1} (ص ${unit.pageRange}): ${unit.focusAr} القواعد المستهدفة: ${unit.grammarAr}`,
      summaryEn: `Unit ${index + 1} (pp. ${unit.pageRange}): ${unit.focusEn} Grammar: ${unit.grammarEn}`,
      sections: [
        {
          id: `${lectureId}-s1`,
          titleAr: '1. أهداف الوحدة والسياق اللغوي',
          titleEn: '1. Unit Focus & Language Context',
          contentAr: `موضوع الوحدة: ${unit.titleAr}\nنطاق الصفحات: ص ${unit.pageRange}\nالتركيز الوظيفي: ${unit.focusAr}`,
          contentEn: `Unit Topic: ${unit.titleEn}\nPage Span: pp. ${unit.pageRange}\nFocus: ${unit.focusEn}`
        },
        {
          id: `${lectureId}-s2`,
          titleAr: '2. القواعد والتطبيقات التعبيرية',
          titleEn: '2. Grammar Rules & Usage',
          contentAr: `القواعد النحوية المقررة: ${unit.grammarAr}\nمثال تطبيقي: ${unit.exampleAr} (${unit.exampleEn})`,
          contentEn: `Grammar Focus: ${unit.grammarEn}\nApplied Example: ${unit.exampleEn}`
        }
      ],
      diagrams: [
        {
          id: `${lectureId}-diag`,
          titleAr: `خريطة مهارات: ${unit.titleAr}`,
          titleEn: `Skills Map: ${unit.titleEn}`,
          figureNumberAr: `شكل ${index + 1}`,
          figureNumberEn: `Figure ${index + 1}`,
          captionAr: `مخطط وظائف التواصل والقواعد المقررة في الوحدة ${index + 1} من Mega Goal 3.`,
          captionEn: `Scope diagram of language functions and target grammar for Unit ${index + 1}.`,
          diagramType: 'concept_flow',
          visualSteps: [
            { labelAr: 'القراءة والمفردات', labelEn: 'Reading & Vocabulary' },
            { labelAr: 'القواعد والتراكيب', labelEn: 'Grammar & Structures' },
            { labelAr: 'الاستماع والمحادثة', labelEn: 'Listening & Speaking' },
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
          id: `${lectureId}-question-1`,
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

/**
 * Return authentic Saudi secondary lectures for the specified subject, grade, and track
 */
export function getSaudiSecondaryCurriculum(
  subject: Subject,
  gradeLevel: GradeLevel,
  track: EducationTrack = 'GENERAL',
  _educationType: EducationType = 'PUBLIC'
): Lecture[] {
  const normalizedSubject: Subject = subject === 'ARABIC_LANG' ? 'ARABIC_LIT' : subject;

  // Grade 10 - Common First Year
  if (gradeLevel === 'G10') {
    switch (normalizedSubject) {
      case 'MATH':
        return getSaudiMathG10Curriculum(track);
      case 'PHYSICS':
        return HIGH_PHYSICS_G10_LECTURES;
      case 'CHEMISTRY':
        return getSaudiChemistryG10Curriculum(track);
      case 'BIOLOGY':
        return getSaudiBiologyG10Curriculum(track);
      case 'COMPUTER_SCIENCE':
        return SAUDI_SECONDARY_DIGITAL_TECHNOLOGY_SUPPLEMENTARY.G10 || HIGH_COMP_G10_LECTURES;
      case 'ENGLISH':
        return getSaudiEnglishG10Curriculum(track);
      case 'ARABIC_LIT':
        return getSaudiArabicCurriculum('G10', 'ARABIC_LIT') || HIGH_ARABIC_LIT_G10_LECTURES;
      case 'ISLAMIC_STUDIES':
        return ISLAMIC_STUDIES_FULL;
      case 'HISTORY':
        return SAUDI_HIGH_HISTORY_G10_LECTURES;
      case 'LIFE_SKILLS':
        return SAUDI_G6_LIFE_SKILLS_LECTURES;
      default:
        return [];
    }
  }

  // Grade 11 - Specialized Pathways
  if (gradeLevel === 'G11') {
    switch (normalizedSubject) {
      case 'MATH':
        return getSaudiMathG11Curriculum(track);
      case 'PHYSICS':
        return getSaudiPhysics2G11Curriculum(track);
      case 'CHEMISTRY':
        return getSaudiChemistryG11Curriculum(track);
      case 'BIOLOGY':
        return getSaudiBiology2G11Curriculum();
      case 'COMPUTER_SCIENCE':
        return track === 'BUSINESS'
          ? SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LECTURES
          : SAUDI_SECONDARY_DIGITAL_TECHNOLOGY_SUPPLEMENTARY.G11 || HIGH_COMP_G11_LECTURES;
      case 'ENGLISH':
        return getSaudiEnglishG11Curriculum(track);
      case 'ARABIC_LIT':
        return getSaudiArabicCurriculum('G11', 'ARABIC_LIT') || HIGH_ARABIC_LIT_G10_LECTURES;
      case 'ISLAMIC_STUDIES':
        return ISLAMIC_STUDIES_FULL;
      case 'HISTORY':
        return SAUDI_G11_HISTORY_LECTURES;
      case 'GEOGRAPHY':
        return SAUDI_HIGH_GEOGRAPHY_G10_LECTURES;
      case 'HEALTH_SCIENCE':
        return SAUDI_G11_HEALTH_SCIENCE_LECTURES;
      default:
        return [];
    }
  }

  // Grade 12 - Specialized Pathways
  if (gradeLevel === 'G12') {
    switch (normalizedSubject) {
      case 'MATH':
        return HIGH_MATH_G12_LECTURES;
      case 'PHYSICS':
        return HIGH_PHYSICS_G12_LECTURES;
      case 'CHEMISTRY':
        return HIGH_CHEMISTRY_G12_LECTURES;
      case 'BIOLOGY':
        return BIOLOGY_LECTURES;
      case 'COMPUTER_SCIENCE':
        return SAUDI_SECONDARY_DIGITAL_TECHNOLOGY_SUPPLEMENTARY.G12 || HIGH_COMP_G12_LECTURES;
      case 'ENGLISH':
        return getSaudiEnglishG12Curriculum(track);
      case 'ARABIC_LIT':
        return getSaudiArabicCurriculum('G12', 'ARABIC_LIT') || HIGH_ARABIC_LIT_G12_LECTURES;
      case 'ISLAMIC_STUDIES':
        return ISLAMIC_STUDIES_FULL;
      case 'HISTORY':
        return SAUDI_G11_HISTORY_LECTURES;
      case 'GEOGRAPHY':
        return SAUDI_HIGH_GEOGRAPHY_G10_LECTURES;
      case 'HEALTH_SCIENCE':
        return SAUDI_G11_HEALTH_SCIENCE_LECTURES;
      default:
        return [];
    }
  }

  return [];
}
