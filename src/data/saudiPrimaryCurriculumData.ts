import type { EducationType, GradeLevel, Lecture, Subject } from '../types';
import { SAUDI_SCIENCE_CURRICULA } from './saudiScienceCurriculumData';
import { getSaudiArabicCurriculum } from './saudiArabicCurriculumData';
import { SAUDI_G2_PRIMARY_ARABIC_LECTURES } from './saudiPrimaryArabic2CurriculumData';
import { SAUDI_G3_PRIMARY_ARABIC_LECTURES } from './saudiPrimaryArabic3CurriculumData';
import { SAUDI_PRIMARY_ARABIC_G4_LECTURES } from './saudiPrimaryArabic4CurriculumData';
import { SAUDI_PRIMARY_ARABIC_G5_LECTURES } from './saudiPrimaryArabic5CurriculumData';
import { SAUDI_PRIMARY_ARABIC_G6_LECTURES } from './saudiPrimaryArabic6CurriculumData';
import { SAUDI_G2_PRIMARY_MATH_CURRICULUM } from './saudiPrimaryMath2CurriculumData';
import { SAUDI_G3_PRIMARY_MATH_CURRICULUM } from './saudiPrimaryMath3CurriculumData';
import { SAUDI_G4_PRIMARY_MATH_CURRICULUM } from './saudiPrimaryMath4CurriculumData';
import { SAUDI_G5_PRIMARY_MATH_CURRICULUM } from './saudiPrimaryMath5CurriculumData';
import { SAUDI_G6_PRIMARY_MATH_CURRICULUM } from './saudiPrimaryMath6CurriculumData';
import { getSaudiEnglishG2Curriculum } from './saudiEnglishG2CurriculumData';
import { getSaudiEnglishG3Curriculum } from './saudiEnglishG3CurriculumData';
import { getSaudiEnglishG5Curriculum } from './saudiEnglishG5CurriculumData';
import { SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM } from './saudiGrade2IslamicStudiesCurriculumData';
import { SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM } from './saudiGrade3IslamicStudiesCurriculumData';
import { SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM } from './saudiGrade4IslamicStudiesCurriculumData';
import { SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM } from './saudiGrade5IslamicStudiesCurriculumData';
import { SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM } from './saudiGrade6IslamicStudiesCurriculumData';
import { SAUDI_G4_TAJWEED_CURRICULUM } from './saudiGrade4TajweedCurriculumData';
import { SAUDI_G5_TAJWEED_CURRICULUM } from './saudiGrade5TajweedCurriculumData';
import { SAUDI_G6_TAJWEED_CURRICULUM } from './saudiGrade6TajweedCurriculumData';
import { SAUDI_G5_QURAN_RECITATION_CURRICULUM } from './saudiGrade5QuranRecitationCurriculumData';
import { SAUDI_G6_QURAN_RECITATION_CURRICULUM } from './saudiGrade6QuranRecitationCurriculumData';
import { SAUDI_G4_SOCIAL_STUDIES_CURRICULUM } from './saudiGrade4SocialStudiesCurriculumData';
import { SAUDI_G5_SOCIAL_STUDIES_CURRICULUM } from './saudiGrade5SocialStudiesCurriculumData';
import { SAUDI_SOCIAL_STUDIES_CURRICULUM } from './saudiSocialStudiesCurriculumData';
import { SAUDI_G5_DIGITAL_SKILLS_LECTURES } from './saudiDigitalSkillsG5CurriculumData';
import { SAUDI_G6_DIGITAL_SKILLS_LECTURES } from './saudiDigitalSkillsG6CurriculumData';
import { SAUDI_G2_VISUAL_ARTS_CURRICULUM } from './saudiGrade2VisualArtsCurriculumData';
import { SAUDI_G3_VISUAL_ARTS_CURRICULUM } from './saudiGrade3VisualArtsCurriculumData';
import { SAUDI_G4_VISUAL_ARTS_CURRICULUM } from './saudiGrade4VisualArtsCurriculumData';
import { SAUDI_G5_VISUAL_ARTS_CURRICULUM } from './saudiGrade5VisualArtsCurriculumData';
import { SAUDI_G6_VISUAL_ARTS_CURRICULUM } from './saudiGrade6VisualArtsCurriculumData';
import { SAUDI_G3_LIFE_SKILLS_LECTURES } from './saudiGrade3LifeSkillsCurriculumData';
import { SAUDI_G4_LIFE_SKILLS_LECTURES } from './saudiGrade4LifeSkillsCurriculumData';
import { SAUDI_G5_LIFE_SKILLS_LECTURES } from './saudiGrade5LifeSkillsCurriculumData';
import { SAUDI_G6_LIFE_SKILLS_LECTURES } from './saudiGrade6LifeSkillsCurriculumData';

/**
 * Official Saudi Primary School Curriculum System (المرحلة الابتدائية بالتعليم العام السعودي)
 * - Grade 1: First Primary (الأول الابتدائي)
 * - Grade 2: Second Primary (الثاني الابتدائي)
 * - Grade 3: Third Primary (الثالث الابتدائي)
 * - Grade 4: Fourth Primary (الرابع الابتدائي)
 * - Grade 5: Fifth Primary (الخامس الابتدائي)
 * - Grade 6: Sixth Primary (السادس الابتدائي)
 */

export const SAUDI_PRIMARY_G1_SUBJECTS: Subject[] = [
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'PRIMARY_ARABIC',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_PRIMARY_G2_SUBJECTS: Subject[] = [
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'PRIMARY_ARABIC',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_PRIMARY_G3_SUBJECTS: Subject[] = [
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'PRIMARY_ARABIC',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_PRIMARY_G4_SUBJECTS: Subject[] = [
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'PRIMARY_ARABIC',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'TAJWEED',
  'HISTORY', // الدراسات الاجتماعية
  'COMPUTER_SCIENCE', // المهارات الرقمية
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_PRIMARY_G5_SUBJECTS: Subject[] = [
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'PRIMARY_ARABIC',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'TAJWEED',
  'QURAN_RECITATION',
  'HISTORY', // الدراسات الاجتماعية
  'COMPUTER_SCIENCE', // المهارات الرقمية
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export const SAUDI_PRIMARY_G6_SUBJECTS: Subject[] = [
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'PRIMARY_ARABIC',
  'ENGLISH',
  'ISLAMIC_STUDIES',
  'TAJWEED',
  'QURAN_RECITATION',
  'HISTORY', // الدراسات الاجتماعية
  'COMPUTER_SCIENCE', // المهارات الرقمية
  'VISUAL_ARTS',
  'LIFE_SKILLS'
];

export function getSaudiPrimarySubjects(gradeLevel: GradeLevel): Subject[] {
  switch (gradeLevel) {
    case 'G1': return SAUDI_PRIMARY_G1_SUBJECTS;
    case 'G2': return SAUDI_PRIMARY_G2_SUBJECTS;
    case 'G3': return SAUDI_PRIMARY_G3_SUBJECTS;
    case 'G4': return SAUDI_PRIMARY_G4_SUBJECTS;
    case 'G5': return SAUDI_PRIMARY_G5_SUBJECTS;
    case 'G6': return SAUDI_PRIMARY_G6_SUBJECTS;
    default: return [];
  }
}

function normalizeSubjectAlias(subject: Subject): Subject {
  if (subject === 'MATH') return 'PRIMARY_MATH';
  if (subject === 'GENERAL_SCIENCE') return 'PRIMARY_SCIENCE';
  if (subject === 'ARABIC_LANG' || subject === 'ARABIC_LIT') return 'PRIMARY_ARABIC';
  if (subject === 'SAUDI_SOCIAL_STUDIES') return 'HISTORY';
  return subject;
}

export function isSaudiPrimarySubjectAvailable(
  subject: Subject,
  gradeLevel: GradeLevel,
  _educationType: EducationType = 'PUBLIC'
): boolean {
  const norm = normalizeSubjectAlias(subject);
  const list = getSaudiPrimarySubjects(gradeLevel);
  return list.includes(norm) || list.includes(subject);
}

// ============================================================================
// 1. GRADE 1 AUTHENTIC SAUDI MATHEMATICS (الرياضيات — الصف الأول الابتدائي)
// Official Saudi Ministry of Education Textbook Curriculum
// ============================================================================

function toLecture(raw: any): Lecture {
  const sections = (raw.sections || []).map((s: any) => ({
    titleAr: s.titleAr,
    titleEn: s.titleEn,
    contentAr: s.contentAr,
    contentEn: s.contentEn,
    ...(s.diagram ? { diagram: s.diagram } : raw.diagram ? { diagram: raw.diagram } : {}),
    ...(s.interactiveExample ? { interactiveExample: s.interactiveExample } : {}),
    ...(s.tipsAr ? { tipsAr: s.tipsAr } : {}),
    ...(s.tipsEn ? { tipsEn: s.tipsEn } : {}),
    ...(s.formativeCheck ? { formativeCheck: s.formativeCheck } : {})
  }));

  const questions = (raw.assessment?.questions || []).map((q: any) => ({
    id: q.id,
    textAr: q.textAr,
    textEn: q.textEn,
    optionsAr: q.optionsAr,
    optionsEn: q.optionsEn,
    correctIndex: q.correctIndex,
    conceptTestedAr: q.conceptTestedAr || q.textAr,
    conceptTestedEn: q.conceptTestedEn || q.textEn,
    explanationAr: q.explanationAr,
    explanationEn: q.explanationEn,
    difficulty: q.difficulty || 'easy'
  }));

  return {
    id: raw.id,
    order: raw.order,
    titleAr: raw.titleAr,
    titleEn: raw.titleEn,
    subtitleAr: raw.subtitleAr || raw.descriptionAr || raw.titleAr,
    subtitleEn: raw.subtitleEn || raw.descriptionEn || raw.titleEn,
    descriptionAr: raw.descriptionAr,
    descriptionEn: raw.descriptionEn,
    durationMinutes: raw.durationMinutes || raw.duration || 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: raw.passingScoreRequired || 80,
    country: 'SA',
    subject: raw.subject,
    gradeLevel: raw.gradeLevel,
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
    ministryEn: 'Saudi Ministry of Education',
    learningOutcomesAr: raw.objectivesAr || raw.learningOutcomesAr,
    learningOutcomesEn: raw.objectivesEn || raw.learningOutcomesEn,
    keyConceptsAr: raw.keyConceptsAr,
    keyConceptsEn: raw.keyConceptsEn,
    summaryAr: raw.summaryAr,
    summaryEn: raw.summaryEn,
    sections: sections.length > 0 ? sections : [{
      titleAr: raw.titleAr,
      titleEn: raw.titleEn,
      contentAr: raw.descriptionAr || raw.titleAr,
      contentEn: raw.descriptionEn || raw.titleEn
    }],
    assessment: {
      id: raw.assessment?.id || `${raw.id}-assessment`,
      lectureId: raw.id,
      titleAr: raw.assessment?.titleAr || `تقويم: ${raw.titleAr}`,
      titleEn: raw.assessment?.titleEn || `Assessment: ${raw.titleEn}`,
      passingScore: raw.assessment?.passingScore || 80,
      questions
    }
  };
}

const RAW_SAUDI_G1_MATH_LECTURES = [
  {
    id: 'sa-g1-math-u1',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G1',
    order: 1,
    titleAr: 'المقارنة والتصنيف: تحديد الخصائص والمجموعات',
    titleEn: 'Comparison & Classification: Identifying Attributes & Sets',
    descriptionAr: 'التصنيف وفق خاصية واحدة وخاصيتين (اللون، الشكل، الحجم)، ومقارنة المجموعات: أكثر من، أقل من، يساوي.',
    descriptionEn: 'Classifying by one or two attributes (color, shape, size), and comparing sets: more than, fewer than, equal to.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'تصنيف الأشياء حسب اللون أو الشكل أو الحجم بدقة',
      'المقارنة بين مجموعتين باستخدام مفاهيم: أكثر من، أقل من، بقدر (يساوي)',
      'الربط المنطقي بين عناصر المجموعات المتقابلة'
    ],
    objectivesEn: [
      'Classify items by color, shape, or size accurately',
      'Compare two sets using concepts: more than, fewer than, as many as (equal)',
      'Establish one-to-one correspondence between sets'
    ],
    sections: [
      {
        id: 'sa-g1-math-u1-s1',
        titleAr: 'التصنيف وفق خاصية اللون والشكل والحجم',
        titleEn: 'Classifying by Color, Shape, and Size',
        contentAr: 'في كتاب الرياضيات للصف الأول الابتدائي، يبدأ التعلم بتأمل البيئة المحيطة وفرز الأشياء. عندما نضع المكعبات الحمراء معاً والمكعبات الزرقاء معاً نكون صنفنا وفق اللون. وإذا عزلنا الكرات الكبيرة عن الكرات الصغيرة نكون صنفنا وفق الحجم. يساعدنا التصنيف على تنظيم أفكارنا وحل المسائل اليومية بترتيب ووضوح.',
        contentEn: 'In the Grade 1 Mathematics textbook, learning starts by observing our surroundings and sorting objects. Grouping red cubes together and blue cubes together is classification by color. Separating large balls from small balls is classification by size. Classification trains logical organization.'
      },
      {
        id: 'sa-g1-math-u1-s2',
        titleAr: 'مقارنة المجموعات والتقابل الأحادي',
        titleEn: 'Comparing Sets & One-to-One Correspondence',
        contentAr: 'نقارن بين مجموعتين بوضع كل عنصر من المجموعة الأولى في مقابلة عنصر من المجموعة الثانية. إذا زادت عناصر إحدى المجموعتين نقول إنها «أكثر من»، وإذا نقصت نقول «أقل من»، وإذا تساوت عناصر المجموعتين تماماً نقول «تساوي» أو «بقدر».',
        contentEn: 'We compare two sets by pairing each element from the first set with one element from the second set. If one set has leftovers, it is more than; if it runs out first, it is fewer than; if every element matches, they are equal.'
      }
    ],
    diagram: {
      id: 'sa-g1-math-u1-diag',
      titleAr: 'خريطة مهارة المقارنة والتصنيف',
      titleEn: 'Comparison & Classification Roadmap',
      captionAr: 'خطوات الفرز والمطابقة خطوة بخطوة',
      captionEn: 'Step-by-step sorting and matching procedure',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'ملاحظة الخاصية', labelEn: 'Observe Attribute' },
        { labelAr: 'فرز المجموعات', labelEn: 'Sort into Sets' },
        { labelAr: 'التقابل عنصراً بعنصر', labelEn: 'Pair 1-to-1' },
        { labelAr: 'إصدار الحكم (أكثر/أقل/يساوي)', labelEn: 'Conclude (More/Less/Equal)' }
      ]
    },
    assessment: {
      id: 'sa-g1-math-u1-ass',
      lectureId: 'sa-g1-math-u1',
      titleAr: 'تقييم مهارات التصنيف والمقارنة',
      titleEn: 'Classification & Comparison Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-math-u1-q1',
          textAr: 'إذا كان لدينا 5 تفاحات و5 برتقالات، فما العلاقة بين المجموعتين؟',
          textEn: 'If we have 5 apples and 5 oranges, what is the relation between both sets?',
          optionsAr: ['مجموعة التفاح تساوي مجموعة البرتقال', 'التفاح أكثر من البرتقال', 'التفاح أقل من البرتقال', 'لا توجد علاقة'],
          optionsEn: ['Apples set equals oranges set', 'Apples are more than oranges', 'Apples are fewer than oranges', 'No relation'],
          correctIndex: 0,
          explanationAr: 'لأن عدد عناصر المجموعتين متطابق (5 يقابل 5)، إذن المجموعتان متساويتان.',
          explanationEn: 'Because both sets have an equal count (5 pairs with 5), they are equal in number.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sa-g1-math-u2',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G1',
    order: 2,
    titleAr: 'الأعداد حتى 20: العد والكتابة والترتيب',
    titleEn: 'Numbers up to 20: Counting, Writing & Ordering',
    descriptionAr: 'قراءة وكتابة وتمثيل الأعداد من 0 حتى 20، خط الأعداد، العدد السابق والتالي، ومفهوم العشرات والآحاد.',
    descriptionEn: 'Reading, writing, and representing numbers 0 to 20, number line, predecessor/successor, and tens/ones concept.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'قراءة وكتابة الأعداد من 0 حتى 20 بطريقة صحيحة',
      'تحديد العدد السابق والعدد التالي ومقارنة الأعداد حتى 20',
      'تمثيل العدد بالنماذج وقطع العد وإطار العشرة'
    ],
    objectivesEn: [
      'Read and write numbers 0 through 20 correctly',
      'Identify predecessor and successor numbers up to 20',
      'Represent numbers using counters and ten-frames'
    ],
    sections: [
      {
        id: 'sa-g1-math-u2-s1',
        titleAr: 'إطار العشرة وتكوين الأعداد',
        titleEn: 'The Ten-Frame & Number Composition',
        contentAr: 'إطار العشرة هو أداة بصرية تمكّن التلميذ من رؤية العدد في صورة أجزاء وعشرات كاملة. فالعدد 7 هو 5 مضافاً إليها 2، والعدد 14 هو عشرة كاملة وأربعة آحاد. هذا التصور يرسخ القيمة المكانية والجمع التلقائي.',
        contentEn: 'The ten-frame visually organizes numbers into structured parts and tens. 7 is a full five plus two, and 14 is one full ten plus four ones. This builds mental math fluency.'
      },
      {
        id: 'sa-g1-math-u2-s2',
        titleAr: 'الترتيب والمقارنة على خط الأعداد',
        titleEn: 'Ordering & Comparing on the Number Line',
        contentAr: 'على خط الأعداد، تكبر الأعداد كلما اتجهنا يميناً. العدد 9 يقع بعد 8 مباشرة (العدد التالي) وقبل 10 مباشرة (العدد السابق). نستعمل الرموز > و < و = للمقارنة بدقة.',
        contentEn: 'On the number line, numbers increase from left to right. 9 comes immediately after 8 (successor) and immediately before 10 (predecessor).'
      }
    ],
    diagram: {
      id: 'sa-g1-math-u2-diag',
      titleAr: 'خط الأعداد وإطار العشرة',
      titleEn: 'Number Line & Ten-Frame',
      captionAr: 'تمثيل الأعداد من 0 حتى 20 بصرياً',
      captionEn: 'Visualizing numbers 0 to 20',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'العد بالأصابع والمكعبات', labelEn: 'Count with Manipulatives' },
        { labelAr: 'إكمال إطار العشرة', labelEn: 'Fill Ten-Frame' },
        { labelAr: 'كتابة رمز العدد والاسم', labelEn: 'Write Digit & Word' },
        { labelAr: 'تحديد السابق والتالي', labelEn: 'Identify Prev & Next' }
      ]
    },
    assessment: {
      id: 'sa-g1-math-u2-ass',
      lectureId: 'sa-g1-math-u2',
      titleAr: 'تقييم مهارات الأعداد حتى 20',
      titleEn: 'Numbers up to 20 Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-math-u2-q1',
          textAr: 'ما هو العدد التالي للعدد 15 مباشرة؟',
          textEn: 'What is the immediate successor of number 15?',
          optionsAr: ['16', '14', '17', '10'],
          optionsEn: ['16', '14', '17', '10'],
          correctIndex: 0,
          explanationAr: 'العدد التالي للعدد 15 بإضافة 1 هو 16.',
          explanationEn: 'The number immediately following 15 is 16.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sa-g1-math-u3',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G1',
    order: 3,
    titleAr: 'طرائق الجمع والطرح حتى 20',
    titleEn: 'Addition & Subtraction Strategies up to 20',
    descriptionAr: 'مفهوم الجمع كضم مجموعتين، ومفهوم الطرح كحذف أو فرق، الجمع بالعد التصاعدي والطرح بالعد التنازلي وحقائق الأعداد.',
    descriptionEn: 'Addition as combining sets, subtraction as removing or finding difference, counting on and counting back strategies.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'استخدام إشارة الزائد (+) والناقص (-) واليساوي (=) في جمل عددية صحيحة',
      'إتقان العد التصاعدي للجمع والعد التنازلي للطرح',
      'استنتاج الحقائق المترابطة بين الجمع والطرح'
    ],
    objectivesEn: [
      'Use plus (+), minus (-), and equals (=) signs in correct number sentences',
      'Master counting on for addition and counting back for subtraction',
      'Recognize fact families relating addition and subtraction'
    ],
    sections: [
      {
        id: 'sa-g1-math-u3-s1',
        titleAr: 'جملة الجمع والعد التصاعدي',
        titleEn: 'Addition Sentences & Counting On',
        contentAr: 'الجمع هو ضم مجموعتين لمعرفة الكل. لحساب 8 + 3، نضع العدد الأكبر (8) في الذاكرة ونعد تصاعدياً بمقدار 3 خطوات: 9، 10، 11. إذن الناتج هو 11. نكتب الجملة: 8 + 3 = 11.',
        contentEn: 'Addition combines groups to find the whole. To calculate 8 + 3, keep the larger number (8) in mind and count on 3 steps: 9, 10, 11. Thus 8 + 3 = 11.'
      },
      {
        id: 'sa-g1-math-u3-s2',
        titleAr: 'جملة الطرح والعد التنازلي',
        titleEn: 'Subtraction Sentences & Counting Back',
        contentAr: 'الطرح هو أخذ جزء من الكل أو إيجاد الباقي. لحساب 12 - 3، نبدأ من 12 ونعد تنازلياً 3 خطوات: 11، 10، 9. إذن الباقي هو 9. الطرح والجمع عمليتان عكسيتان.',
        contentEn: 'Subtraction finds remaining parts. To solve 12 - 3, start at 12 and count back 3 steps: 11, 10, 9. Addition and subtraction are inverse operations.'
      }
    ],
    diagram: {
      id: 'sa-g1-math-u3-diag',
      titleAr: 'استراتيجيات الجمع والطرح',
      titleEn: 'Addition & Subtraction Strategies',
      captionAr: 'العد التصاعدي للجمع والتنازلي للطرح',
      captionEn: 'Counting on for addition, counting back for subtraction',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'تحديد العدد الأكبر', labelEn: 'Locate Greater Number' },
        { labelAr: 'القفز للأمام (+) أو الخلف (-)', labelEn: 'Hop Forward (+) or Back (-)' },
        { labelAr: 'كتابة الجملة العددية', labelEn: 'Write Number Sentence' },
        { labelAr: 'التحقق بالنماذج', labelEn: 'Verify with Models' }
      ]
    },
    assessment: {
      id: 'sa-g1-math-u3-ass',
      lectureId: 'sa-g1-math-u3',
      titleAr: 'تقييم مهارات الجمع والطرح',
      titleEn: 'Addition & Subtraction Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-math-u3-q1',
          textAr: 'ما ناتج: 9 + 4؟',
          textEn: 'What is 9 + 4?',
          optionsAr: ['13', '12', '14', '15'],
          optionsEn: ['13', '12', '14', '15'],
          correctIndex: 0,
          explanationAr: 'بالعد تصاعدياً 4 خطوات من 9: 10، 11، 12، 13.',
          explanationEn: 'Counting on 4 steps from 9: 10, 11, 12, 13.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sa-g1-math-u4',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G1',
    order: 4,
    titleAr: 'الأشكال الهندسية والكسور والقياس والنقود',
    titleEn: 'Geometry, Fractions, Measurement & Money',
    descriptionAr: 'المجسمات (المكعب، الأسطوانة، الكرة، المخروط) والأشكال المستوية (المربع، الدائرة، المثلث، المستطيل)، كسر النصف والربع، ووحدات القياس غير القياسية، والنقود السعودية (الريال و5 و10 ريالات).',
    descriptionEn: '3D shapes & 2D figures, halves and quarters, non-standard measurement, and Saudi currency (1, 5, 10 Riyals).',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'التمييز بين المجسمات ثلاثية الأبعاد والأشكال المستوية ثنائية الأبعاد',
      'تحديد مفهوم النصف (1/2) والربع (1/4) كأجزاء متطابقة من الكل',
      'قياس الأطوال بالوحدات غير القياسية، والتعرف إلى العملات النقدية السعودية'
    ],
    objectivesEn: [
      'Distinguish 3D solids from 2D plane geometric shapes',
      'Understand half (1/2) and quarter (1/4) as equal parts of a whole',
      'Measure lengths using non-standard units and identify Saudi currency'
    ],
    sections: [
      {
        id: 'sa-g1-math-u4-s1',
        titleAr: 'المجسمات والأشكال المستوية والكسور',
        titleEn: '3D Solids, 2D Shapes & Equal Fractions',
        contentAr: 'المجسم يشغل حيزاً في الفراغ وله أبعاد، كعلبة المناديل (متوازي مستطيلات) أو الكرة أو الأسطوانة. أما الأشكال المستوية فهي وجوه المجسمات: المربع والمستطيل والمثلث والدائرة. وعندما نقسم شكلاً إلى جزأين متطابقين، يسمى كل جزء «نصفاً»، وإلى 4 أجزاء متطابقة يسمى كل جزء «ربعاً».',
        contentEn: '3D solids occupy space (cube, cylinder, sphere, cone). 2D shapes form their faces (square, rectangle, triangle, circle). Dividing a shape into two equal parts yields halves, and four equal parts yields quarters.'
      },
      {
        id: 'sa-g1-math-u4-s2',
        titleAr: 'القياس والنقود السعودية المعتمدة',
        titleEn: 'Measurement & Saudi National Currency',
        contentAr: 'نقيس أطوال الأشياء بمكعبات العد أو مشابك الورق من البداية إلى النهاية بدون فجوات. ونتعرف إلى النقود السعودية: فئة الريال الواحد، والخمسة ريالات، والعشرة ريالات، ونتعلم كيف نعد النقود لشراء السلع والمحافظة على ميزانيتنا.',
        contentEn: 'We measure length using non-standard units like paperclips end-to-end without gaps. We also learn Saudi currency: 1 Riyal, 5 Riyals, and 10 Riyals to manage money wisely.'
      }
    ],
    diagram: {
      id: 'sa-g1-math-u4-diag',
      titleAr: 'لوحة الأشكال والنقود السعودية',
      titleEn: 'Shapes & Saudi Currency Board',
      captionAr: 'استكشاف الأشكال المستوية والنقود والكسور',
      captionEn: 'Exploring 2D shapes, currency and fractions',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'تمييز الشكل والوجه', labelEn: 'Identify Shape/Face' },
        { labelAr: 'تقسيم الكل لأجزاء متطابقة', labelEn: 'Divide into Equal Parts' },
        { labelAr: 'القياس بالوحدات', labelEn: 'Measure with Units' },
        { labelAr: 'عد النقود (ريال، 5، 10)', labelEn: 'Count Currency (SAR 1, 5, 10)' }
      ]
    },
    assessment: {
      id: 'sa-g1-math-u4-ass',
      lectureId: 'sa-g1-math-u4',
      titleAr: 'تقييم الهندسة والنقود والكسور',
      titleEn: 'Geometry, Money & Fractions Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-math-u4-q1',
          textAr: 'عند تقسيم شطيرة دائرية إلى جزأين متطابقين تماماً، ماذا نسمى كل جزء؟',
          textEn: 'When dividing a round sandwich into two exactly equal parts, what is each part called?',
          optionsAr: ['نصف (1/2)', 'ربع (1/4)', 'ثلث (1/3)', 'كل كامل'],
          optionsEn: ['Half (1/2)', 'Quarter (1/4)', 'Third (1/3)', 'Whole'],
          correctIndex: 0,
          explanationAr: 'كل جزء من جزأين متطابقين يمثل النصف (1/2).',
          explanationEn: 'Each of two equal parts represents one half (1/2).',
          difficulty: 'easy'
        }
      ]
    }
  }
];

const SAUDI_G1_MATH_LECTURES: Lecture[] = RAW_SAUDI_G1_MATH_LECTURES.map(toLecture);

// ============================================================================
// 2. WE CAN! ENGLISH SERIES (Official Saudi Ministry of Education Series)
// We Can! 1 (G1), We Can! 4 (G4), We Can! 6 (G6)
// (G2, G3, G5 already loaded via dedicated modules)
// ============================================================================

interface WeCanUnit {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  vocabAr: string;
  vocabEn: string;
  grammarAr: string;
  grammarEn: string;
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

const weCan1Units: WeCanUnit[] = [
  {
    titleAr: 'الترحيب والمشاعر',
    titleEn: 'Feelings & Greetings',
    focusAr: 'التحية الصباحية، والتعريف بالنفس، والسؤال عن الحال والتعبير عن المشاعر (سعيد، حزين، جائع، عطشان).',
    focusEn: 'Morning greetings, self-introductions, asking "How are you?" and naming feelings (happy, sad, hungry, thirsty).',
    vocabAr: 'Hello, Good morning, Happy, Sad, Hungry, Thirsty, Tired, Fine.',
    vocabEn: 'Hello, Good morning, Happy, Sad, Hungry, Thirsty, Tired, Fine.',
    grammarAr: 'استخدام: I am happy / How are you? - I am fine, thank you.',
    grammarEn: 'Structures: "How are you? — I\'m fine, thank you." and "I am [feeling]."',
    stepsAr: ['أحيّي بلباقة', 'أسأل عن الحال', 'أجيب عن شعوري', 'أتعرف إلى الحرف الأول'],
    stepsEn: ['Greet politely', 'Ask how you are', 'State your feeling', 'Notice initial phonics'],
    questionAr: 'ما الرد المناسب على سؤال: "How are you?"',
    questionEn: 'What is the correct response to "How are you?"',
    optionsAr: ["I'm fine, thank you.", "My name is pencil.", "Good night morning.", "I have a ball."],
    optionsEn: ["I'm fine, thank you.", "My name is pencil.", "Good night morning.", "I have a ball."],
    correctIndex: 0,
    explanationAr: 'الرد المعتمد والمهذب على السؤال عن الحال هو: I\'m fine, thank you.',
    explanationEn: 'The accredited polite response to "How are you?" is "I\'m fine, thank you."'
  },
  {
    titleAr: 'أدوات صفي والألوان',
    titleEn: 'Classroom Objects & Colors',
    focusAr: 'تسمية أدوات المدرسة (كتاب، قلم، مسطرة، حقيبة) وتمييز الألوان الأساسية وتطبيق صيغة المفرد والجمع.',
    focusEn: 'Naming classroom items (book, pen, ruler, bag), identifying colors, and basic singular/plural.',
    vocabAr: 'Pencil, Pen, Book, Eraser, Ruler, Bag, Red, Blue, Yellow, Green.',
    vocabEn: 'Pencil, Pen, Book, Eraser, Ruler, Bag, Red, Blue, Yellow, Green.',
    grammarAr: 'استخدام: This is a pencil / What color is it? - It is red.',
    grammarEn: 'Structures: "What\'s this? — It\'s a pencil." and "What color is it? — It\'s red."',
    stepsAr: ['أشير للأداة', 'أنطق اسمها', 'أحدد لونها', 'أستخدمها في جملة'],
    stepsEn: ['Point to the object', 'Say its name', 'Name its color', 'Use in a sentence'],
    questionAr: 'كيف تصف كتاباً لونه أزرق بالإنجليزية؟',
    questionEn: 'How do you describe a blue book in English?',
    optionsAr: ['It is a blue book.', 'It is red apple.', 'Book green ruler.', 'Where is yellow?'],
    optionsEn: ['It is a blue book.', 'It is red apple.', 'Book green ruler.', 'Where is yellow?'],
    correctIndex: 0,
    explanationAr: 'في اللغة الإنجليزية تأتي صفة اللون قبل الاسم الموصوف: a blue book.',
    explanationEn: 'In English, color adjectives precede the noun: "a blue book."'
  },
  {
    titleAr: 'الحيوانات والأرقام حتى 10',
    titleEn: 'Animals & Numbers to 10',
    focusAr: 'تسمية حيوانات المزرعة والأليفة، والعد من 1 إلى 10، واستخدام صيغة الجمع بإضافة حرف (s).',
    focusEn: 'Naming animals, counting 1 to 10, and forming regular plurals with -s.',
    vocabAr: 'Cat, Dog, Bird, Fish, Cow, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.',
    vocabEn: 'Cat, Dog, Bird, Fish, Cow, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.',
    grammarAr: 'استخدام: How many cats? - Three cats / One dog, two dogs.',
    grammarEn: 'Structures: "How many [animals]? — [Number] [animals]s."',
    stepsAr: ['أشاهد الحيوان', 'أعد المجموعة', 'أنطق العدد', 'أضيف صوت الجمع -s'],
    stepsEn: ['Spot the animal', 'Count the group', 'Say the number', 'Add plural -s sound'],
    questionAr: 'ما الجمع الصحيح لكلمة (cat) عند وجود 3 منها؟',
    questionEn: 'What is the correct plural form when there are 3 of (cat)?',
    optionsAr: ['Three cats', 'Three cat', 'Cat three', 'One cats'],
    optionsEn: ['Three cats', 'Three cat', 'Cat three', 'One cats'],
    correctIndex: 0,
    explanationAr: 'نضيف حرف (s) إلى الاسم للدلالة على الجمع: Three cats.',
    explanationEn: 'We add -s to form the regular plural: Three cats.'
  },
  {
    titleAr: 'الأسرة والحروف الهجائية الصوتية',
    titleEn: 'Family & Phonics Sounds',
    focusAr: 'تسمية أفراد العائلة (أب، أم، أخ، أخت) ونطق أصوات الحروف الإنجليزية القصيرة بوضوح.',
    focusEn: 'Naming family members (father, mother, brother, sister) and producing clear phonics letter sounds.',
    vocabAr: 'Father, Mother, Brother, Sister, Baby, Phonics A to Z sounds.',
    vocabEn: 'Father, Mother, Brother, Sister, Baby, Phonics A to Z sounds.',
    grammarAr: 'استخدام: This is my father / This is my mother.',
    grammarEn: 'Structures: "This is my [family member]."',
    stepsAr: ['أعرّف بأفراد أسرتي', 'أستخدم This is my', 'أنطق صوت الحرف', 'أربط الصوت بالكلمة'],
    stepsEn: ['Introduce family', 'Use "This is my"', 'Make phonics sound', 'Link sound to word'],
    questionAr: 'كيف تقدم والدتك مهذباً باللغة الإنجليزية؟',
    questionEn: 'How do you politely introduce your mother in English?',
    optionsAr: ['This is my mother.', 'I am mother.', 'My mother is pen.', 'Where is mother?'],
    optionsEn: ['This is my mother.', 'I am mother.', 'My mother is pen.', 'Where is mother?'],
    correctIndex: 0,
    explanationAr: 'نستخدم عبارة التقديم المعتمدة: This is my mother.',
    explanationEn: 'The standard introduction phrase is: "This is my mother."'
  }
];

const weCan4Units: WeCanUnit[] = [
  {
    titleAr: 'المشاعر وما نرتديه',
    titleEn: 'Feelings & Things We Wear',
    focusAr: 'التعبير عن المشاعر المركبة، ووصف الملابس الرسمية واليومية وألوانها واستخدام صيغ الملكية (Whose is this?).',
    focusEn: 'Complex feelings, clothing descriptions, colors, and possessive questions (Whose is this?).',
    vocabAr: 'Excited, Bored, Scared, Proud, Thirsty, Jacket, Shirt, Shoes, Cap, Watch.',
    vocabEn: 'Excited, Bored, Scared, Proud, Thirsty, Jacket, Shirt, Shoes, Cap, Watch.',
    grammarAr: 'استخدام: Whose cap is this? - It is mine / He is wearing a blue jacket.',
    grammarEn: 'Structures: "Whose cap is this? — It\'s mine / Ali\'s." and Present Continuous for clothes.',
    stepsAr: ['أصف المظهر والملبس', 'أسأل عن الملكية', 'أستخدم ضمائر الملكية', 'أتقن نطق الأصوات'],
    stepsEn: ['Describe outfit', 'Ask about ownership', 'Use possessives', 'Practice phonics clusters'],
    questionAr: 'أي سؤال يُستخدم للاستفسار عن صاحب القبعة؟',
    questionEn: 'Which question asks who owns the cap?',
    optionsAr: ['Whose cap is this?', 'What time is cap?', 'How old is cap?', 'Where is cap walking?'],
    optionsEn: ['Whose cap is this?', 'What time is cap?', 'How old is cap?', 'Where is cap walking?'],
    correctIndex: 0,
    explanationAr: 'كلمة Whose تُستخدم للسؤال عن الملكية.',
    explanationEn: '"Whose" is used to ask about ownership.'
  },
  {
    titleAr: 'الحيوانات والطبيعة الجميلة',
    titleEn: 'Beautiful Nature & Animals',
    focusAr: 'وصف الحيوانات البرية والبحرية، ومقارنة الصفات (أكبر من، أسرع من)، وملاحظة جمال الطبيعة.',
    focusEn: 'Describing wild and sea animals, comparative adjectives (bigger than, faster than), and nature.',
    vocabAr: 'Cheetah, Elephant, Dolphin, Shark, Fast, Slow, Big, Small, Tree, Mountain.',
    vocabEn: 'Cheetah, Elephant, Dolphin, Shark, Fast, Slow, Big, Small, Tree, Mountain.',
    grammarAr: 'استخدام المقارنة: The cheetah is faster than the elephant.',
    grammarEn: 'Comparatives: "The cheetah is faster than the elephant."',
    stepsAr: ['أسمي الكائن الحي', 'أحدد الصفة المناسبة', 'أقارن بإضافة -er than', 'أقرأ النص القصير'],
    stepsEn: ['Name the creature', 'Pick the adjective', 'Compare using -er than', 'Read short text'],
    questionAr: 'اختر الجملة المقارنة الصحيحة قواعدياً:',
    questionEn: 'Choose the grammatically correct comparative sentence:',
    optionsAr: ['A horse is faster than a turtle.', 'A horse is fast turtle.', 'A horse fastest turtle.', 'A horse is more fast turtle.'],
    optionsEn: ['A horse is faster than a turtle.', 'A horse is fast turtle.', 'A horse fastest turtle.', 'A horse is more fast turtle.'],
    correctIndex: 0,
    explanationAr: 'نضيف -er إلى الصفة القصيرة متبوعة بـ than عند المقارنة بين اثنين.',
    explanationEn: 'Short adjectives take -er followed by "than" when comparing two nouns.'
  },
  {
    titleAr: 'الروتين اليومي والأعمال المنزلية',
    titleEn: 'Daily Routines & Chores',
    focusAr: 'التحدث عن الأنشطة اليومية، وأوقات الاستيقاظ، والمساعدة في المنزل، واستخدام زمن المضارع البسيط.',
    focusEn: 'Talking about daily routines, wake-up times, household chores, and simple present tense.',
    vocabAr: 'Wake up, Eat breakfast, Brush teeth, Clean my room, Do homework, Go to bed.',
    vocabEn: 'Wake up, Eat breakfast, Brush teeth, Clean my room, Do homework, Go to bed.',
    grammarAr: 'استخدام: What time do you get up? - I get up at 6:00 AM / He cleans his room.',
    grammarEn: 'Simple Present routines and telling time with "at [time]".',
    stepsAr: ['أحدد وقت النشاط', 'أستخدم فعل المضارع', 'أضبط صيغة المفرد الغائب -s', 'أشارك جدولي اليومي'],
    stepsEn: ['State activity time', 'Use present verb', 'Apply third-person -s', 'Share daily schedule'],
    questionAr: 'ما التعبير الصحيح عن وقت الاستيقاظ في السادسة صباحاً؟',
    questionEn: 'What is the correct way to state waking up at 6:00 AM?',
    optionsAr: ['I wake up at 6:00 AM.', 'I wake up on 6:00 AM.', 'I waking at 6:00 AM.', 'Wake up 6:00 AM yesterday.'],
    optionsEn: ['I wake up at 6:00 AM.', 'I wake up on 6:00 AM.', 'I waking at 6:00 AM.', 'Wake up 6:00 AM yesterday.'],
    correctIndex: 0,
    explanationAr: 'نستخدم حرف الجر at لتحديد الساعات المحددة: at 6:00 AM.',
    explanationEn: 'We use the preposition "at" with clock times: "at 6:00 AM."'
  }
];

const weCan6Units: WeCanUnit[] = [
  {
    titleAr: 'تقلبات الحياة والخبرات الماضية',
    titleEn: "Life's Ups & Downs",
    focusAr: 'التحدث عن أحداث سعيدة وتجارب ماضية، واستخدام الأفعال المنتظمة وغير المنتظمة في زمن الماضي البسيط.',
    focusEn: 'Discussing past events, good and bad news, and regular/irregular verbs in the Past Simple.',
    vocabAr: 'Won, Lost, Got, Scored, Visited, Had, Happy event, Challenge.',
    vocabEn: 'Won, Lost, Got, Scored, Visited, Had, Happy event, Challenge.',
    grammarAr: 'استخدام الماضي البسيط: We won a basketball game / What happened? - I got first place.',
    grammarEn: 'Past Simple statements and questions: "What happened? — We won the match."',
    stepsAr: ['أحدد زمن الحدث', 'أحول الفعل إلى صيغة الماضي', 'أعبر عن النتيجة بمشاعر ملائمة', 'أطبق قواعد الأصوات'],
    stepsEn: ['Locate past time', 'Form past tense verb', 'Express outcome politely', 'Apply pronunciation rules'],
    questionAr: 'ما صيغة الماضي الصحيحة للفعل (win)؟',
    questionEn: 'What is the correct past simple form of the verb "win"?',
    optionsAr: ['Won', 'Winned', 'Winning', 'Wins'],
    optionsEn: ['Won', 'Winned', 'Winning', 'Wins'],
    correctIndex: 0,
    explanationAr: 'الفعل win فعل غير منتظم ماضيه هو won.',
    explanationEn: '"Win" is an irregular verb whose past tense is "won."'
  },
  {
    titleAr: 'مدرستي الرائعة والأنشطة',
    titleEn: 'My School Is Cool',
    focusAr: 'وصف المرافق المدرسية، والمواد الدراسية المفضلة، والقواعد الصفية والأنشطة الرياضية والثقافية.',
    focusEn: 'Describing school facilities, favorite subjects, school rules, sports and cultural activities.',
    vocabAr: 'Science lab, Library, Computer room, Playground, Favorite subject, Rules.',
    vocabEn: 'Science lab, Library, Computer room, Playground, Favorite subject, Rules.',
    grammarAr: 'استخدام: My favorite subject is Science / You must listen to the teacher.',
    grammarEn: 'Structures: "My favorite subject is..." and modal obligation "must / must not."',
    stepsAr: ['أسمي المرفق المدرسي', 'أعبر عن مادتي المفضلة', 'أذكر قاعدة مدرسية', 'أكتب فقرة قصيرة'],
    stepsEn: ['Name facility', 'State favorite subject', 'State a rule', 'Write a short paragraph'],
    questionAr: 'أي جملة تعبر عن الالتزام بالقواعد المدرسية؟',
    questionEn: 'Which sentence expresses following school rules?',
    optionsAr: ['We must listen to the teacher.', 'We run on desks.', 'We forget books.', 'We shout in library.'],
    optionsEn: ['We must listen to the teacher.', 'We run on desks.', 'We forget books.', 'We shout in library.'],
    correctIndex: 0,
    explanationAr: 'تُستخدم must للدلالة على الالتزام والواجب المدرسي الإيجابي.',
    explanationEn: '"Must" expresses necessary positive school conduct and rules.'
  },
  {
    titleAr: 'حياة صحية ونشاط بدني',
    titleEn: 'A Healthy Life & Wellness',
    focusAr: 'العادات الصحية، التغذية المتوازنة، النوم الكافي، ممارسة الرياضة، وإعطاء النصائح باستخدام (Should / Shouldn\'t).',
    focusEn: 'Healthy habits, balanced diet, adequate sleep, exercise, and giving advice with should/shouldn\'t.',
    vocabAr: 'Vegetables, Fruits, Water, Early sleep, Exercise, Healthy, Unhealthy.',
    vocabEn: 'Vegetables, Fruits, Water, Early sleep, Exercise, Healthy, Unhealthy.',
    grammarAr: 'استخدام: You should drink plenty of water / You shouldn\'t stay up late.',
    grammarEn: 'Advice modal structures: "You should..." and "You shouldn\'t..."',
    stepsAr: ['أحدد العادة الصحية', 'أصيغ النصيحة بـ should', 'أحذر من الضار بـ shouldn\'t', 'أقيم سلوكاً يومياً'],
    stepsEn: ['Identify habit', 'Give advice with "should"', 'Warn with "shouldn\'t"', 'Evaluate routine'],
    questionAr: 'ما النصيحة الصحية الصحيحة لنمط حياة متوازن؟',
    questionEn: 'What is the correct healthy advice for a balanced lifestyle?',
    optionsAr: ['You should eat fruits and vegetables.', 'You should drink only soda.', 'You should sleep 2 hours.', 'You shouldn\'t exercise.'],
    optionsEn: ['You should eat fruits and vegetables.', 'You should drink only soda.', 'You should sleep 2 hours.', 'You shouldn\'t exercise.'],
    correctIndex: 0,
    explanationAr: 'النصيحة الإيجابية الموصى بها هي تناول الفواكه والخضراوات يومياً.',
    explanationEn: 'The positive health advice recommends eating fruits and vegetables daily.'
  }
];

function buildWeCanLectures(gradeLevel: GradeLevel, units: WeCanUnit[], gNameAr: string, gNameEn: string, seriesNum: number): Lecture[] {
  return units.map((unit, index) => {
    const order = index + 1;
    return toLecture({
      id: `sa-${gradeLevel.toLowerCase()}-wecan${seriesNum}-u${order}`,
      subject: 'ENGLISH',
      gradeLevel,
      order,
      titleAr: `We Can! ${seriesNum} — الوحدة ${order}: ${unit.titleAr}`,
      titleEn: `We Can! ${seriesNum} — Unit ${order}: ${unit.titleEn}`,
      descriptionAr: `كتاب وزارة التعليم المعتمد (${gNameAr})؛ ${unit.focusAr}`,
      descriptionEn: `Official Ministry accredited textbook (${gNameEn}); ${unit.focusEn}`,
      duration: 35,
      difficulty: 'easy',
      objectivesAr: [
        `إتقان مفردات الوحدة: ${unit.vocabAr}`,
        `تطبيق القواعد اللغوية السليمة: ${unit.grammarAr}`,
        'المحادثة والتفاعل الصفي باللغة الإنجليزية بثقة ومخارج صوتية صحيحة'
      ],
      objectivesEn: [
        `Master unit vocabulary: ${unit.vocabEn}`,
        `Apply core grammar structures: ${unit.grammarEn}`,
        'Engage in classroom conversations with correct phonics and confidence'
      ],
      sections: [
        {
          titleAr: 'المحادثة والمفردات والتراكيب المعتمدة',
          titleEn: 'Conversation, Vocabulary & Accredited Structures',
          contentAr: `في هذه الوحدة من كتاب We Can! ${seriesNum} المعتمد من وزارة التعليم بالمملكة العربية السعودية، يتعلم الطالب: ${unit.focusAr}، مع التركيز على المفردات الأساسية: (${unit.vocabAr}) والتراكيب اللغوية: (${unit.grammarAr}). يتم التدريب عبر الحوارات التفاعلية والأنشطة الصوتية.`,
          contentEn: `In this unit from the official Saudi Ministry of Education We Can! ${seriesNum} textbook, learners explore: ${unit.focusEn}. Key vocabulary: (${unit.vocabEn}). Grammar: (${unit.grammarEn}).`
        },
        {
          titleAr: 'التدريبات الصوتية والقراءة التطبيقية',
          titleEn: 'Phonics Practice & Applied Reading',
          contentAr: 'تركز السلسلة على النطق الصوتي الدقيق للحروف والمقاطع، والتمييز بين الأصوات القصيرة والطويلة، والقراءة الجهرية لجمل قصيرة معبرة، وممارسة مهارات الاستماع الفعال.',
          contentEn: 'The series emphasizes accurate phonics, distinguishing short and long vowels, reading expressive sentences aloud, and active listening skills.'
        }
      ],
      diagram: {
        id: `sa-${gradeLevel.toLowerCase()}-wecan${seriesNum}-u${order}-diag`,
        titleAr: `مخطط مهارات We Can! ${seriesNum}`,
        titleEn: `We Can! ${seriesNum} Skill Flow`,
        captionAr: 'خطوات إتقان المفردات والمحادثة والقواعد',
        captionEn: 'Steps to master vocabulary, speaking, and phonics',
        diagramType: 'concept_flow',
        visualSteps: unit.stepsAr.map((labelAr, stepIdx) => ({
          labelAr,
          labelEn: unit.stepsEn[stepIdx]
        }))
      },
      assessment: {
        id: `sa-${gradeLevel.toLowerCase()}-wecan${seriesNum}-u${order}-ass`,
        lectureId: `sa-${gradeLevel.toLowerCase()}-wecan${seriesNum}-u${order}`,
        titleAr: `تقييم الوحدة ${order} — We Can! ${seriesNum}`,
        titleEn: `Unit ${order} Assessment — We Can! ${seriesNum}`,
        passingScore: 80,
        questions: [
          {
            id: `sa-${gradeLevel.toLowerCase()}-wecan${seriesNum}-u${order}-q1`,
            textAr: unit.questionAr,
            textEn: unit.questionEn,
            optionsAr: [...unit.optionsAr],
            optionsEn: [...unit.optionsEn],
            correctIndex: unit.correctIndex,
            explanationAr: unit.explanationAr,
            explanationEn: unit.explanationEn,
            difficulty: 'easy'
          }
        ]
      }
    });
  });
}

const SAUDI_G1_ENGLISH_LECTURES = buildWeCanLectures('G1', weCan1Units, 'الصف الأول الابتدائي', 'Grade 1 Primary', 1);
const SAUDI_G4_ENGLISH_LECTURES = buildWeCanLectures('G4', weCan4Units, 'الصف الرابع الابتدائي', 'Grade 4 Primary', 4);
const SAUDI_G6_ENGLISH_LECTURES = buildWeCanLectures('G6', weCan6Units, 'الصف السادس الابتدائي', 'Grade 6 Primary', 6);

// ============================================================================
// 3. GRADE 1 ISLAMIC STUDIES (الدراسات الإسلامية — الصف الأول الابتدائي)
// ============================================================================

const RAW_SAUDI_G1_ISLAMIC_LECTURES = [
  {
    id: 'sa-g1-islamic-u1',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G1',
    order: 1,
    titleAr: 'التوحيد: معرفة الله عز وجل ربي وخالقي',
    titleEn: 'Tawheed: Knowing Allah My Lord and Creator',
    descriptionAr: 'معرفة أن الله ربي الذي خلقني وخلق كل شيء ورزقني، لا شريك له، أعبده وحده ولا أشرك به شيئاً.',
    descriptionEn: 'Knowing Allah my Lord who created me and everything, gives sustenance, with no partner.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'معرفة أن الله تعالى هو الخالق الرازق المالك لكل شيء',
      'الإقرار بأن الله ربي وحده لا شريك له',
      'حب الله تعالى وشكره على نعمه الكثيرة'
    ],
    objectivesEn: [
      'Know that Allah is the Creator, Provider, and Master of all',
      'Acknowledge that Allah is my only Lord without partners',
      'Love Allah and thank Him for His abundant blessings'
    ],
    sections: [
      {
        id: 'sa-g1-islamic-u1-s1',
        titleAr: 'الله ربي وخالقي ورازقي',
        titleEn: 'Allah is My Lord, Creator & Sustainer',
        contentAr: 'من ربك؟ ربي الله الذي ربّاني وربّى جميع العالمين بنعمه. خلق السماء ورفعها، وبسط الأرض، وخلق الإنسان في أحسن تقويم. كل ما نراه في هذا الكون البديع من شمس وقمر ونجوم وبحار هو من خلق الله وحده، ولذلك نعبده وحده ولا نعبد أحداً سواه.',
        contentEn: 'Who is your Lord? My Lord is Allah who nurtured me and all worlds with His blessings. He created the heavens and earth and fashioned mankind. We worship Him alone.'
      }
    ],
    diagram: {
      id: 'sa-g1-islamic-u1-diag',
      titleAr: 'أركان معرفة الله تعالى',
      titleEn: 'Pillars of Knowing Allah',
      captionAr: 'معرفة الخالق وشكره وتوحيده بالعبادة',
      captionEn: 'Knowing the Creator, thanking Him and worshipping Him alone',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'التفكر في خلق الله', labelEn: 'Reflect on Creation' },
        { labelAr: 'الإقرار بأن الله ربي', labelEn: 'Affirm Allah is My Lord' },
        { labelAr: 'شكر النعم', labelEn: 'Thank for Blessings' },
        { labelAr: 'إخلاص العبادة لله', labelEn: 'Sincere Worship' }
      ]
    },
    assessment: {
      id: 'sa-g1-islamic-u1-ass',
      lectureId: 'sa-g1-islamic-u1',
      titleAr: 'تقييم درس معرفة الله تعالى',
      titleEn: 'Knowing Allah Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-islamic-u1-q1',
          textAr: 'من هو خالقنا وخالق كل شيء والرازق لجميع المخلوقات؟',
          textEn: 'Who is our Creator, the Creator of everything and the Sustainer?',
          optionsAr: ['الله سبحانه وتعالى وحده', 'الشمس', 'الإنسان', 'الطبيعة'],
          optionsEn: ['Allah Alone', 'The Sun', 'Humans', 'Nature'],
          correctIndex: 0,
          explanationAr: 'الله وحده هو الخالق الرازق المدبر لكل شيء.',
          explanationEn: 'Allah alone is the Creator and Provider of all.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sa-g1-islamic-u2',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G1',
    order: 2,
    titleAr: 'الفقه والسلوك: تعظيم كتاب الله والوضوء والصلاة',
    titleEn: 'Fiqh & Conduct: Honoring the Quran, Wudu & Prayer',
    descriptionAr: 'آداب التعامل مع المصحف الشريف، فضل الطهارة والوضوء، وأهمية الصلوات الخمس في حياة المسلم.',
    descriptionEn: 'Etiquette with the Holy Quran, virtues of purity and wudu, and the 5 daily prayers.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'تعظيم المصحف الشريف وتلاوته بطهارة وأدب',
      'تعلم الخطوات الأساسية للوضوء',
      'معرفة الصلوات الخمس والمحافظة عليها'
    ],
    objectivesEn: [
      'Venerate the Holy Quran and recite with purity',
      'Learn the essential steps of Wudu',
      'Identify the five daily prayers and maintain them'
    ],
    sections: [
      {
        id: 'sa-g1-islamic-u2-s1',
        titleAr: 'الوضوء ومكانة الصلوات الخمس',
        titleEn: 'Wudu & The Five Daily Prayers',
        contentAr: 'القرآن الكريم كلام الله، نلمسه بطهارة ونقرؤه بتدبر. والوضوء شرط لصحة الصلاة، يبدأ بالتسمية وغسل الكفين والمضمضة والاستنشاق وغسل الوجه واليدين إلى المرفقين ومسح الرأس وغسل الرجلين إلى الكعبين. والصلاة هي الركن الثاني من أركان الإسلام، نصلي خمس صلوات في اليوم والليلة: الفجر، والظهر، والعصر، والمغرب، والعشاء.',
        contentEn: 'The Quran is Allah\'s word, held in purity. Wudu is required before prayer. Muslims pray five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha.'
      }
    ],
    diagram: {
      id: 'sa-g1-islamic-u2-diag',
      titleAr: 'الصلوات الخمس اليومية',
      titleEn: 'The Five Daily Prayers',
      captionAr: 'مواقيت الصلوات الخمس في حياة المسلم',
      captionEn: 'Five daily prayers in a Muslim\'s day',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'صلاة الفجر', labelEn: 'Fajr Prayer' },
        { labelAr: 'صلاة الظهر', labelEn: 'Dhuhr Prayer' },
        { labelAr: 'صلاة العصر', labelEn: 'Asr Prayer' },
        { labelAr: 'المغرب والعشاء', labelEn: 'Maghrib & Isha' }
      ]
    },
    assessment: {
      id: 'sa-g1-islamic-u2-ass',
      lectureId: 'sa-g1-islamic-u2',
      titleAr: 'تقييم درس الوضوء والصلاة',
      titleEn: 'Wudu & Prayer Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-islamic-u2-q1',
          textAr: 'كم عدد الصلوات المفروضة التي يؤديها المسلم في اليوم والليلة؟',
          textEn: 'How many obligatory prayers does a Muslim perform daily?',
          optionsAr: ['خمس صلوات', 'ثلاث صلوات', 'أربع صلوات', 'ست صلوات'],
          optionsEn: ['Five prayers', 'Three prayers', 'Four prayers', 'Six prayers'],
          correctIndex: 0,
          explanationAr: 'الصلوات المفروضة خمس: الفجر والظهر والعصر والمغرب والعشاء.',
          explanationEn: 'The obligatory daily prayers are five: Fajr, Dhuhr, Asr, Maghrib, and Isha.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

const SAUDI_G1_ISLAMIC_LECTURES: Lecture[] = RAW_SAUDI_G1_ISLAMIC_LECTURES.map(toLecture);

// ============================================================================
// 4. GRADE 4 DIGITAL SKILLS (المهارات الرقمية — الصف الرابع الابتدائي)
// ============================================================================

const RAW_SAUDI_G4_DIGITAL_SKILLS_LECTURES = [
  {
    id: 'sa-g4-digitalskills-u1',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G4',
    order: 1,
    titleAr: 'أساسيات الحاسب والملفات والمواطنة الرقمية',
    titleEn: 'Computer Fundamentals, Files & Digital Citizenship',
    descriptionAr: 'مكونات الحاسب المادية والبرمجية، سطح المكتب، إدارة الملفات والمجلدات، والاستخدام الآمن للإنترنت وحماية البيانات.',
    descriptionEn: 'Hardware and software components, desktop environment, file management, safe web searching and data security.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'التمييز بين أجهزة الإدخال والإخراج ووحدة المعالجة المركزية',
      'إنشاء وتسمية وتنظيم الملفات والمجلدات على الحاسب',
      'تطبيق قواعد السلامة الرقمية والمواطنة الرقمية المسؤولة'
    ],
    objectivesEn: [
      'Distinguish input, output devices and CPU',
      'Create, name, and organize folders and files',
      'Apply safe digital browsing and cyber etiquette'
    ],
    sections: [
      {
        id: 'sa-g4-digitalskills-u1-s1',
        titleAr: 'مكونات الحاسب وإدارة الملفات',
        titleEn: 'Computer Components & File Organization',
        contentAr: 'يتكون الحاسب من عتاد مادي (شاشة، لوحة مفاتيح، فارة، وحدة المعالجة) وبرمجيات (نظام التشغيل والتطبيقات). لحفظ عملنا المدرسي، ننشئ مجلدات مخصصة لكل مادة ونحفظ الملفات بأسماء واضحة وتاريخ محدد لتسهيل الوصول إليها.',
        contentEn: 'Computers consist of hardware and software. To keep schoolwork organized, create distinct folders for subjects with clear filenames.'
      }
    ],
    diagram: {
      id: 'sa-g4-digitalskills-u1-diag',
      titleAr: 'هيكل نظام الحاسب وإدارة الملفات',
      titleEn: 'Computer Architecture & File Structure',
      captionAr: 'من الإدخال والمعالجة إلى الحفظ والتنظيم',
      captionEn: 'From input and processing to storage and organization',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'أجهزة الإدخال', labelEn: 'Input Devices' },
        { labelAr: 'المعالجة المركزية (CPU)', labelEn: 'Central Processing' },
        { labelAr: 'أجهزة الإخراج', labelEn: 'Output Devices' },
        { labelAr: 'التخزين المنظم بالمجلدات', labelEn: 'Folder Storage' }
      ]
    },
    assessment: {
      id: 'sa-g4-digitalskills-u1-ass',
      lectureId: 'sa-g4-digitalskills-u1',
      titleAr: 'تقييم أساسيات الحاسب والمجلدات',
      titleEn: 'Computer Fundamentals Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g4-digitalskills-u1-q1',
          textAr: 'أي مما يلي يُعد من وحدات الإدخال الأساسية في الحاسب؟',
          textEn: 'Which of the following is a primary input device?',
          optionsAr: ['لوحة المفاتيح والفأرة', 'الشاشة والطابعة', 'السماعات', 'وحدة التغذية الكهربائية'],
          optionsEn: ['Keyboard and Mouse', 'Monitor and Printer', 'Speakers', 'Power Supply'],
          correctIndex: 0,
          explanationAr: 'لوحة المفاتيح والفأرة تُدخلان البيانات والأوامر إلى الحاسب.',
          explanationEn: 'The keyboard and mouse input data and commands to the computer.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sa-g4-digitalskills-u2',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G4',
    order: 2,
    titleAr: 'معالجة النصوص والبرمجة الرسومية بـ Scratch',
    titleEn: 'Word Processing & Visual Coding with Scratch',
    descriptionAr: 'تنسيق النصوص وإدراج الصور والجداول، ومقدمة الخوارزميات والبرمجة الرسومية بواسطة لبنات سكراتش.',
    descriptionEn: 'Formatting text, inserting images, algorithms, and visual block programming using Scratch.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'تنسيق الفقرات وتغيير الخط والألوان وإدراج الصور في مستند نصي',
      'فهم مفهوم الخوارزمية والتسلسل المنطقي للأوامر',
      'بناء مشروع تفاعلي بسيط باستخدام لبنات سكراتش وتحريك الكائنات'
    ],
    objectivesEn: [
      'Format text, fonts, colors, and insert images in documents',
      'Understand algorithms and step-by-step logic',
      'Build a simple interactive Scratch project to animate sprites'
    ],
    sections: [
      {
        id: 'sa-g4-digitalskills-u2-s1',
        titleAr: 'التفكير الحوسبي والبرمجة بلبنات سكراتش',
        titleEn: 'Computational Thinking & Scratch Blocks',
        contentAr: 'البرمجة هي إعطاء الحاسب تعليمات دقيقة خطوة بخطوة لينفذ مهمة محددة. في بيئة سكراتش (Scratch)، نركب لبنات الأوامر البرمجية مثل لبنة «تحرك 10 خطوات» ولبنة «استدر» ولبنة «كرر»، مما ينمي مهارات التفكير المنطقي وحل المشكلات.',
        contentEn: 'Programming provides step-by-step instructions. In Scratch, interlocking code blocks such as "move", "turn", and "repeat" build logical problem-solving.'
      }
    ],
    diagram: {
      id: 'sa-g4-digitalskills-u2-diag',
      titleAr: 'خطوات بناء برنامج بسكراتش',
      titleEn: 'Scratch Coding Steps',
      captionAr: 'من الفكرة والخوارزمية إلى التشغيل والاختبار',
      captionEn: 'From concept and algorithm to run and debug',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'تحديد فكرة المشروع', labelEn: 'Define Project Idea' },
        { labelAr: 'كتابة الخوارزمية خطوة بخطوة', labelEn: 'Write Algorithm' },
        { labelAr: 'تجميع اللبنات البرمجية', labelEn: 'Assemble Blocks' },
        { labelAr: 'النقر على العلم الأخضر واختباره', labelEn: 'Click Green Flag & Test' }
      ]
    },
    assessment: {
      id: 'sa-g4-digitalskills-u2-ass',
      lectureId: 'sa-g4-digitalskills-u2',
      titleAr: 'تقييم معالجة النصوص وسكراتش',
      titleEn: 'Word Processing & Scratch Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g4-digitalskills-u2-q1',
          textAr: 'ما الزر الذي نضغط عليه في منصة سكراتش لبدء تشغيل البرنامج؟',
          textEn: 'Which button is clicked in Scratch to run the script?',
          optionsAr: ['العلم الأخضر', 'الدائرة الحمراء', 'زر الحذف', 'زر الطباعة'],
          optionsEn: ['Green Flag', 'Red Stop Sign', 'Delete Button', 'Print Button'],
          correctIndex: 0,
          explanationAr: 'العلم الأخضر هو زر التشغيل الرسمي لبرامج ومقاطع سكراتش.',
          explanationEn: 'The green flag is the official start trigger for Scratch scripts.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

const SAUDI_G4_DIGITAL_SKILLS_LECTURES: Lecture[] = RAW_SAUDI_G4_DIGITAL_SKILLS_LECTURES.map(toLecture);

// ============================================================================
// 5. GRADE 1 VISUAL ARTS & LIFE SKILLS (التربية الفنية والمهارات الحياتية — G1)
// ============================================================================

const RAW_SAUDI_G1_VISUAL_ARTS_LECTURES = [
  {
    id: 'sa-g1-visualarts-u1',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G1',
    order: 1,
    titleAr: 'التربية الفنية: عالم الألوان والخطوط والتشكيل بالصلصال',
    titleEn: 'Visual Arts: Colors, Lines & Clay Modeling',
    descriptionAr: 'الألوان الأساسية (الأحمر، الأصفر، الأزرق)، الخطوط المستقيمة والمنحنية، والتشكيل المجسم بخامات البيئة والصلصال.',
    descriptionEn: 'Primary colors (red, yellow, blue), straight/curved lines, and 3D modeling with clay.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'التعرف إلى الألوان الأساسية وتطبيقها في لوحات تعبيرية',
      'رسم الخطوط المتنوعة واستخدامها في تكوين أشكال جميلة',
      'التشكيل المجسم بالصلصال مع الحفاظ على نظافة المكان والأدوات'
    ],
    objectivesEn: [
      'Identify and use primary colors in expressive art',
      'Draw varied lines to compose balanced drawings',
      'Sculpt figures with clay while maintaining clean workspace'
    ],
    sections: [
      {
        id: 'sa-g1-visualarts-u1-s1',
        titleAr: 'الألوان الأساسية والخط في التعبير الفني',
        titleEn: 'Primary Colors & Expressive Lines',
        contentAr: 'الألوان الأساسية ثلاثة: الأحمر والأصفر والأزرق، ومنها نبتكر ألواناً جديدة عند خلطها. والخط هو أساس كل رسم، فهناك خطوط مستقيمة ومنحنية ومتعرجة. بالرسم والتلوين نعبر عن مشاعرنا ونظهر جمال بيئتنا وتراث وطننا الغالي.',
        contentEn: 'Primary colors are red, yellow, and blue. Mixing them creates secondary colors. Lines form the basis of all artwork, expressing feelings and culture.'
      }
    ],
    diagram: {
      id: 'sa-g1-visualarts-u1-diag',
      titleAr: 'دائرة الألوان الأساسية',
      titleEn: 'Primary Color Wheel',
      captionAr: 'الألوان والخطوط والتشكيل بالصلصال',
      captionEn: 'Colors, lines and sculpting',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'اللون الأحمر', labelEn: 'Red' },
        { labelAr: 'اللون الأصفر', labelEn: 'Yellow' },
        { labelAr: 'اللون الأزرق', labelEn: 'Blue' },
        { labelAr: 'الإبداع والتشكيل', labelEn: 'Create & Sculpt' }
      ]
    },
    assessment: {
      id: 'sa-g1-visualarts-u1-ass',
      lectureId: 'sa-g1-visualarts-u1',
      titleAr: 'تقييم الألوان والتربية الفنية',
      titleEn: 'Art & Colors Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-visualarts-u1-q1',
          textAr: 'ما هي الألوان الأساسية الثلاثة في التربية الفنية؟',
          textEn: 'What are the three primary colors in visual arts?',
          optionsAr: ['الأحمر والأصفر والأزرق', 'الأخضر والبرتقالي والبنفسجي', 'الأبيض والأسود والرمادي', 'البني والوردي والذهبي'],
          optionsEn: ['Red, Yellow, Blue', 'Green, Orange, Purple', 'White, Black, Gray', 'Brown, Pink, Gold'],
          correctIndex: 0,
          explanationAr: 'الألوان الأساسية هي الأحمر والأصفر والأزرق، وهي أصل بقية الألوان.',
          explanationEn: 'The primary colors are red, yellow, and blue.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

const SAUDI_G1_VISUAL_ARTS_LECTURES: Lecture[] = RAW_SAUDI_G1_VISUAL_ARTS_LECTURES.map(toLecture);

const RAW_SAUDI_G1_LIFE_SKILLS_LECTURES = [
  {
    id: 'sa-g1-lifeskills-u1',
    subject: 'LIFE_SKILLS',
    gradeLevel: 'G1',
    order: 1,
    titleAr: 'المهارات الحياتية والأسرية: صحتي وسلامتي في المنزل والمدرسة',
    titleEn: 'Life Skills: Health & Safety at Home and School',
    descriptionAr: 'النظافة الشخصية، غسل اليدين، ترتيب الأدوات، السلامة من المخاطر الكهربائية والحادة، وآداب التعامل مع الأسرة والزملاء.',
    descriptionEn: 'Personal hygiene, hand washing, organizing belongings, home/school safety, and polite family etiquette.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'ممارسة عادات النظافة اليومية وغسل اليدين بطريقة صحيحة',
      'الالتزام بقواعد السلامة وتجنب العبث بالأجهزة الخطرة',
      'المشاركة الإيجابية في الأسرة وتنظيم الوقت'
    ],
    objectivesEn: [
      'Practice daily hygiene and correct handwashing',
      'Follow safety rules and avoid hazardous appliances',
      'Participate positively at home and organize time'
    ],
    sections: [
      {
        id: 'sa-g1-lifeskills-u1-s1',
        titleAr: 'صحتي ونظافتي وسلامتي',
        titleEn: 'My Hygiene, Health & Safety',
        contentAr: 'المسلم نظيف في بدنه وثيابه ومدرسته. نغسل أيدينا بالماء والصابون قبل الأكل وبعده وعند العودة للمنزل. ونحافظ على سلامتنا بعدم لمس مفاتيح الكهرباء بأيدٍ مبللة، وعدم اللعب بالأدوات الحادة، والتعاون مع الوالدين والإخوة بمحبة واحترام.',
        contentEn: 'Hygiene is a cornerstone of daily wellness. Wash hands with soap and water before meals. Stay safe by not touching electrical switches with wet hands.'
      }
    ],
    diagram: {
      id: 'sa-g1-lifeskills-u1-diag',
      titleAr: 'خطوات غسل اليدين والعادات الصحية',
      titleEn: 'Handwashing & Healthy Habits',
      captionAr: 'عادات يومية تحفظ الصحة والسلامة',
      captionEn: 'Daily habits preserving health and safety',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'الماء والصابون', labelEn: 'Water & Soap' },
        { labelAr: 'فرك الكفين والأصابع', labelEn: 'Rub Palms & Fingers' },
        { labelAr: 'الشطف والتجفيف', labelEn: 'Rinse & Dry' },
        { labelAr: 'النظافة والسلامة الدائمة', labelEn: 'Continual Wellness' }
      ]
    },
    assessment: {
      id: 'sa-g1-lifeskills-u1-ass',
      lectureId: 'sa-g1-lifeskills-u1',
      titleAr: 'تقييم المهارات الحياتية والسلامة',
      titleEn: 'Life Skills Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g1-lifeskills-u1-q1',
          textAr: 'ما التصرف الصحيح للمحافظة على نظافة اليدين والوقاية من الجراثيم؟',
          textEn: 'What is the correct action to maintain hand hygiene and prevent germs?',
          optionsAr: ['غسلهما بالماء والصابون جيداً', 'مسحهما بالملابس فقط', 'تركهما دون غسيل', 'لمس الأشياء الملوثة'],
          optionsEn: ['Wash them thoroughly with soap and water', 'Wipe on clothes only', 'Leave unwashed', 'Touch dirty surfaces'],
          correctIndex: 0,
          explanationAr: 'غسل اليدين بالماء والصابون يقضي على الجراثيم ويحمي الجسم من الأمراض.',
          explanationEn: 'Washing hands with soap and water eliminates germs and protects health.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

const SAUDI_G1_LIFE_SKILLS_LECTURES: Lecture[] = RAW_SAUDI_G1_LIFE_SKILLS_LECTURES.map(toLecture);

const RAW_SAUDI_G2_LIFE_SKILLS_LECTURES = [
  {
    id: 'sa-g2-lifeskills-u1',
    subject: 'LIFE_SKILLS',
    gradeLevel: 'G2',
    order: 1,
    titleAr: 'المهارات الحياتية والأسرية: الغذاء الصحي وآداب السلوك والميزانية',
    titleEn: 'Life Skills: Healthy Nutrition, Good Manners & Budgeting',
    descriptionAr: 'المجموعات الغذائية، وجبة الإفطار الصحية، آداب المجالس والزيارة، والادخار وترشيد استهلاك الماء والكهرباء.',
    descriptionEn: 'Food groups, nutritious breakfast, visitation etiquette, saving money, and conserving water and energy.',
    duration: 35,
    difficulty: 'easy',
    objectivesAr: [
      'اختيار الأطعمة المفيدة وتجنب الوجبات السريعة والمشروبات الغازية',
      'تطبيق آداب الحوار واحترام الآخرين في المنزل والمدرسة',
      'ترشيد استهلاك المياه والكهرباء والمحافظة على ميزانية الأسرة'
    ],
    objectivesEn: [
      'Choose nutritious foods and avoid unhealthy junk snacks',
      'Apply respectful communication at home and school',
      'Conserve water and electricity and practice budgeting'
    ],
    sections: [
      {
        id: 'sa-g2-lifeskills-u1-s1',
        titleAr: 'التغذية المتوازنة وترشيد الموارد',
        titleEn: 'Balanced Nutrition & Resource Conservation',
        contentAr: 'الوجبة الصحية المتكاملة تحتوي على الخضراوات والفواكه والحبوب والبروتينات والحليب ومشتقاته. وتناول وجبة الإفطار يعطينا طاقة ونشاطاً للتعلم. كما نحرص على عدم الإسراف في استخدام الماء أثناء الوضوء وإطفاء الأنوار عند مغادرة الغرفة.',
        contentEn: 'Balanced nutrition provides energy for learning. Conserving water during ablution and turning off unneeded lights demonstrates wise responsibility.'
      }
    ],
    diagram: {
      id: 'sa-g2-lifeskills-u1-diag',
      titleAr: 'الهرم الغذائي والترشيد اليومي',
      titleEn: 'Food Pyramid & Daily Conservation',
      captionAr: 'غذاء متوازن ومسؤولية مجتمعية واعية',
      captionEn: 'Balanced meals and civic responsibility',
      diagramType: 'concept_flow',
      visualSteps: [
        { labelAr: 'إفطار صحي متكامل', labelEn: 'Nutritious Breakfast' },
        { labelAr: 'مياه شرب كافية', labelEn: 'Adequate Hydration' },
        { labelAr: 'ترشيد استهلاك الكهرباء', labelEn: 'Conserve Electricity' },
        { labelAr: 'الادخار والتنظيم', labelEn: 'Budget & Organize' }
      ]
    },
    assessment: {
      id: 'sa-g2-lifeskills-u1-ass',
      lectureId: 'sa-g2-lifeskills-u1',
      titleAr: 'تقييم الغذاء الصحي والترشيد',
      titleEn: 'Nutrition & Conservation Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g2-lifeskills-u1-q1',
          textAr: 'أي من الأطعمة التالية يُعتبر خياراً صحياً مثالياً لوجبة الإفطار المدرسية؟',
          textEn: 'Which of the following is an ideal healthy school breakfast choice?',
          optionsAr: ['شطيرة جبن مع حليب وفاكهة طازجة', 'حلوى ملونة ومشروب غازي', 'شيبس مقلي فقط', 'تخطي وجبة الإفطار تماماً'],
          optionsEn: ['Cheese sandwich with milk and fresh fruit', 'Candy and carbonated soda', 'Fried chips only', 'Skipping breakfast completely'],
          correctIndex: 0,
          explanationAr: 'الإفطار الصحي يجمع بين البروتين والنشويات والفيتامينات لمد الجسم بالطاقة.',
          explanationEn: 'A healthy breakfast combines protein, complex carbs, and fruit vitamins.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

const SAUDI_G2_LIFE_SKILLS_LECTURES: Lecture[] = RAW_SAUDI_G2_LIFE_SKILLS_LECTURES.map(toLecture);

// ============================================================================
// 6. MASTER PRIMARY CURRICULUM RETRIEVAL FUNCTION (Strict 4D Isolation)
// ============================================================================

export function getSaudiPrimaryCurriculum(
  subject: Subject,
  gradeLevel: GradeLevel,
  _educationType: EducationType = 'PUBLIC'
): Lecture[] {
  const norm = normalizeSubjectAlias(subject);

  // Mathematics
  if (norm === 'PRIMARY_MATH') {
    switch (gradeLevel) {
      case 'G1': return SAUDI_G1_MATH_LECTURES;
      case 'G2': return SAUDI_G2_PRIMARY_MATH_CURRICULUM;
      case 'G3': return SAUDI_G3_PRIMARY_MATH_CURRICULUM;
      case 'G4': return SAUDI_G4_PRIMARY_MATH_CURRICULUM;
      case 'G5': return SAUDI_G5_PRIMARY_MATH_CURRICULUM;
      case 'G6': return SAUDI_G6_PRIMARY_MATH_CURRICULUM;
      default: return [];
    }
  }

  // Science
  if (norm === 'PRIMARY_SCIENCE') {
    const sc = SAUDI_SCIENCE_CURRICULA[gradeLevel]?.[norm] ?? SAUDI_SCIENCE_CURRICULA[gradeLevel]?.['GENERAL_SCIENCE'];
    if (sc && sc.length > 0) return sc;
    return [];
  }

  // Arabic Language (لغتي الجميلة)
  if (norm === 'PRIMARY_ARABIC') {
    switch (gradeLevel) {
      case 'G1': {
        const arabicG1 = getSaudiArabicCurriculum('G1', 'PRIMARY_ARABIC');
        return arabicG1 && arabicG1.length > 0 ? arabicG1 : [];
      }
      case 'G2': return SAUDI_G2_PRIMARY_ARABIC_LECTURES;
      case 'G3': return SAUDI_G3_PRIMARY_ARABIC_LECTURES;
      case 'G4': return SAUDI_PRIMARY_ARABIC_G4_LECTURES;
      case 'G5': return SAUDI_PRIMARY_ARABIC_G5_LECTURES;
      case 'G6': return SAUDI_PRIMARY_ARABIC_G6_LECTURES;
      default: return [];
    }
  }

  // English Language (We Can! Series)
  if (norm === 'ENGLISH') {
    switch (gradeLevel) {
      case 'G1': return SAUDI_G1_ENGLISH_LECTURES;
      case 'G2': return getSaudiEnglishG2Curriculum('GENERAL');
      case 'G3': return getSaudiEnglishG3Curriculum('GENERAL');
      case 'G4': return SAUDI_G4_ENGLISH_LECTURES;
      case 'G5': return getSaudiEnglishG5Curriculum('GENERAL');
      case 'G6': return SAUDI_G6_ENGLISH_LECTURES;
      default: return [];
    }
  }

  // Islamic Studies (الدراسات الإسلامية)
  if (norm === 'ISLAMIC_STUDIES') {
    switch (gradeLevel) {
      case 'G1': return SAUDI_G1_ISLAMIC_LECTURES;
      case 'G2': return SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM;
      case 'G3': return SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM;
      case 'G4': return SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM;
      case 'G5': return SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM;
      case 'G6': return SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM;
      default: return [];
    }
  }

  // Tajweed
  if (norm === 'TAJWEED') {
    switch (gradeLevel) {
      case 'G4': return SAUDI_G4_TAJWEED_CURRICULUM;
      case 'G5': return SAUDI_G5_TAJWEED_CURRICULUM;
      case 'G6': return SAUDI_G6_TAJWEED_CURRICULUM;
      default: return [];
    }
  }

  // Quran Recitation
  if (norm === 'QURAN_RECITATION') {
    switch (gradeLevel) {
      case 'G5': return SAUDI_G5_QURAN_RECITATION_CURRICULUM;
      case 'G6': return SAUDI_G6_QURAN_RECITATION_CURRICULUM;
      default: return [];
    }
  }

  // Social Studies (الدراسات الاجتماعية والمواطنة)
  if (norm === 'HISTORY') {
    switch (gradeLevel) {
      case 'G4': return SAUDI_G4_SOCIAL_STUDIES_CURRICULUM;
      case 'G5': return SAUDI_G5_SOCIAL_STUDIES_CURRICULUM;
      case 'G6': return SAUDI_SOCIAL_STUDIES_CURRICULUM['G6'] ?? [];
      default: return [];
    }
  }

  // Digital Skills (المهارات الرقمية)
  if (norm === 'COMPUTER_SCIENCE') {
    switch (gradeLevel) {
      case 'G4': return SAUDI_G4_DIGITAL_SKILLS_LECTURES;
      case 'G5': return SAUDI_G5_DIGITAL_SKILLS_LECTURES;
      case 'G6': return SAUDI_G6_DIGITAL_SKILLS_LECTURES;
      default: return [];
    }
  }

  // Visual Arts (التربية الفنية)
  if (norm === 'VISUAL_ARTS') {
    switch (gradeLevel) {
      case 'G1': return SAUDI_G1_VISUAL_ARTS_LECTURES;
      case 'G2': return SAUDI_G2_VISUAL_ARTS_CURRICULUM;
      case 'G3': return SAUDI_G3_VISUAL_ARTS_CURRICULUM;
      case 'G4': return SAUDI_G4_VISUAL_ARTS_CURRICULUM;
      case 'G5': return SAUDI_G5_VISUAL_ARTS_CURRICULUM;
      case 'G6': return SAUDI_G6_VISUAL_ARTS_CURRICULUM;
      default: return [];
    }
  }

  // Life Skills (المهارات الحياتية والأسرية)
  if (norm === 'LIFE_SKILLS') {
    switch (gradeLevel) {
      case 'G1': return SAUDI_G1_LIFE_SKILLS_LECTURES;
      case 'G2': return SAUDI_G2_LIFE_SKILLS_LECTURES;
      case 'G3': return SAUDI_G3_LIFE_SKILLS_LECTURES;
      case 'G4': return SAUDI_G4_LIFE_SKILLS_LECTURES;
      case 'G5': return SAUDI_G5_LIFE_SKILLS_LECTURES;
      case 'G6': return SAUDI_G6_LIFE_SKILLS_LECTURES;
      default: return [];
    }
  }

  return [];
}
