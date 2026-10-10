import { getCurriculumForSubject, loadSubjectLectures } from '../src/data/curriculumData';
import {
  ACTIVE_CURRICULUM_COUNTRIES,
  getSpecializationForEducationTrack,
  getNationalSubjectLabel,
  getNationalTextbookInfo,
  isActiveCurriculumCountry,
  isSaudiPublicEnglishAvailable,
  isSaudiPublicG2EnglishAvailable,
  isSaudiPublicG3EnglishAvailable,
  isSaudiPublicG5EnglishAvailable,
  isSaudiPublicG11EnglishAvailable,
  isSaudiPublicCommonYearEnglishAvailable,
  isSaudiPublicBusinessG11DigitalTechnologyAvailable,
  isSaudiPublicG11BiologyAvailable,
  isSaudiPublicG11HealthScienceAvailable,
  isSaudiPublicG11PhysicsAvailable,
  isSaudiPublicG4TajweedAvailable,
  isSaudiPublicG5TajweedAvailable,
  isSaudiPublicG6TajweedAvailable,
  isSaudiPublicTajweedAvailable,
  isSaudiPublicG6QuranRecitationAvailable,
  isSaudiPublicG5QuranRecitationAvailable,
  isSaudiPublicQuranRecitationAvailable,
  isSaudiPublicG4VisualArtsAvailable,
  isSaudiPublicG5VisualArtsAvailable,
  isSaudiPublicG6VisualArtsAvailable,
  isSaudiPublicG2VisualArtsAvailable,
  isSaudiPublicG3VisualArtsAvailable,
  isSaudiPublicG4IslamicStudiesAvailable,
  isSaudiPublicG5IslamicStudiesAvailable,
  isSaudiPublicG6IslamicStudiesAvailable,
  isSaudiPublicG3IslamicStudiesAvailable,
  isSaudiPublicG2IslamicStudiesAvailable,
  isSaudiPublicG5PrimaryMathAvailable,
  isSaudiPublicG6PrimaryMathAvailable,
  isSaudiPublicG4PrimaryMathAvailable,
  isSaudiPublicG3PrimaryMathAvailable,
  isSaudiPublicG2PrimaryMathAvailable,
  isSaudiPublicG3PrimaryArabicAvailable,
  isSaudiPublicG2PrimaryArabicAvailable,
  isSaudiPublicG4PrimaryArabicAvailable,
  isSaudiPublicG5DigitalSkillsAvailable,
  isSaudiPublicG6DigitalSkillsAvailable,
  isSaudiPublicG6LifeSkillsAvailable,
  isSaudiPublicG5LifeSkillsAvailable,
  isSaudiPublicG4LifeSkillsAvailable,
  isSaudiPublicG3LifeSkillsAvailable,
  isSaudiPublicLifeSkillsAvailable,
  isSaudiPublicG4SocialStudiesAvailable,
  isSaudiPublicG5SocialStudiesAvailable,
  isSaudiPublicG6SocialStudiesAvailable,
  normalizeEducationTrackForCountry,
  normalizeEducationTypeForCountry,
  SUPPORTED_COUNTRIES
} from '../src/data/curriculumCountries';
import { getNationalLessonOverrides } from '../src/data/nationalCurricula';
import { SAUDI_G4_PRIMARY_ARABIC_TABLE_OF_CONTENTS } from '../src/data/saudiPrimaryArabic4CurriculumData';
import {
  SAUDI_G3_PRIMARY_ARABIC_LECTURES,
  SAUDI_G3_PRIMARY_ARABIC_LESSON_COUNT,
  SAUDI_G3_PRIMARY_ARABIC_TABLE_OF_CONTENTS,
  SAUDI_G3_PRIMARY_ARABIC_TEXTBOOK_URL,
  SAUDI_G3_PRIMARY_ARABIC_UNIT_COUNT
} from '../src/data/saudiPrimaryArabic3CurriculumData';
import {
  SAUDI_G2_PRIMARY_ARABIC_LECTURES,
  SAUDI_G2_PRIMARY_ARABIC_LESSON_COUNT,
  SAUDI_G2_PRIMARY_ARABIC_TABLE_OF_CONTENTS,
  SAUDI_G2_PRIMARY_ARABIC_TEXTBOOK_URL,
  SAUDI_G2_PRIMARY_ARABIC_UNIT_COUNT
} from '../src/data/saudiPrimaryArabic2CurriculumData';
import {
  SAUDI_G6_DIGITAL_SKILLS_LESSON_COUNT,
  SAUDI_G6_DIGITAL_SKILLS_LECTURES,
  SAUDI_G6_DIGITAL_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_G6_DIGITAL_SKILLS_TEXTBOOK_URL,
  SAUDI_G6_DIGITAL_SKILLS_UNIT_COUNT
} from '../src/data/saudiDigitalSkillsG6CurriculumData';
import {
  SAUDI_G5_DIGITAL_SKILLS_LESSON_COUNT,
  SAUDI_G5_DIGITAL_SKILLS_LECTURES,
  SAUDI_G5_DIGITAL_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_G5_DIGITAL_SKILLS_TEXTBOOK_URL,
  SAUDI_G5_DIGITAL_SKILLS_UNIT_COUNT
} from '../src/data/saudiDigitalSkillsG5CurriculumData';
import {
  SAUDI_G4_DIGITAL_SKILLS_LESSON_COUNT,
  SAUDI_G4_DIGITAL_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_PRIMARY_DIGITAL_SKILLS_TEXTBOOK_URLS
} from '../src/data/saudiDigitalSkillsSupplementaryCurriculumData';
import {
  SAUDI_G4_LIFE_SKILLS_LESSON_COUNT,
  SAUDI_G4_LIFE_SKILLS_LECTURES,
  SAUDI_G4_LIFE_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_G4_LIFE_SKILLS_TEXTBOOK_URL,
  SAUDI_G4_LIFE_SKILLS_UNIT_COUNT
} from '../src/data/saudiGrade4LifeSkillsCurriculumData';
import {
  SAUDI_G3_LIFE_SKILLS_LESSON_COUNT,
  SAUDI_G3_LIFE_SKILLS_LECTURES,
  SAUDI_G3_LIFE_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_G3_LIFE_SKILLS_TEXTBOOK_URL,
  SAUDI_G3_LIFE_SKILLS_UNIT_COUNT
} from '../src/data/saudiGrade3LifeSkillsCurriculumData';
import {
  SAUDI_G6_LIFE_SKILLS_LESSON_COUNT,
  SAUDI_G6_LIFE_SKILLS_LECTURES,
  SAUDI_G6_LIFE_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_G6_LIFE_SKILLS_TEXTBOOK_URL,
  SAUDI_G6_LIFE_SKILLS_UNIT_COUNT
} from '../src/data/saudiGrade6LifeSkillsCurriculumData';
import {
  SAUDI_G5_LIFE_SKILLS_LECTURES,
  SAUDI_G5_LIFE_SKILLS_LESSON_COUNT,
  SAUDI_G5_LIFE_SKILLS_TABLE_OF_CONTENTS,
  SAUDI_G5_LIFE_SKILLS_TEXTBOOK_URL,
  SAUDI_G5_LIFE_SKILLS_UNIT_COUNT
} from '../src/data/saudiGrade5LifeSkillsCurriculumData';
import {
  SAUDI_G7_DIGITAL_SKILLS_LESSON_COUNT,
  SAUDI_G7_DIGITAL_SKILLS_LECTURES,
  SAUDI_G7_DIGITAL_SKILLS_TEXTBOOK_URL
} from '../src/data/saudiDigitalSkillsG7CurriculumData';
import {
  SAUDI_G8_DIGITAL_SKILLS_LESSON_COUNT,
  SAUDI_G8_DIGITAL_SKILLS_LECTURES,
  SAUDI_G8_DIGITAL_SKILLS_TEXTBOOK_URL
} from '../src/data/saudiDigitalSkillsG8CurriculumData';
import {
  SAUDI_G9_DIGITAL_SKILLS_LESSON_COUNT,
  SAUDI_G9_DIGITAL_SKILLS_LECTURES,
  SAUDI_G9_DIGITAL_SKILLS_TEXTBOOK_URL
} from '../src/data/saudiDigitalSkillsG9CurriculumData';
import {
  SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LESSON_COUNT,
  SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LECTURES,
  SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TABLE_OF_CONTENTS,
  SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TEXTBOOK_URL
} from '../src/data/saudiBusinessDigitalTechnologyG11CurriculumData';
import { SAUDI_SCIENCE_CURRICULA } from '../src/data/saudiScienceCurriculumData';
import { SAUDI_G5_TAJWEED_CURRICULUM } from '../src/data/saudiGrade5TajweedCurriculumData';
import { SAUDI_G6_TAJWEED_CURRICULUM } from '../src/data/saudiGrade6TajweedCurriculumData';
import {
  SAUDI_G4_TAJWEED_CURRICULUM,
  SAUDI_G4_TAJWEED_TEXTBOOK_URL
} from '../src/data/saudiGrade4TajweedCurriculumData';
import { SAUDI_G6_QURAN_RECITATION_CURRICULUM } from '../src/data/saudiGrade6QuranRecitationCurriculumData';
import {
  getSaudiEnglishG2Curriculum,
  SAUDI_G2_ENGLISH_LECTURE_COUNT,
  SAUDI_G2_ENGLISH_SUPPLEMENTARY_CONTENTS,
  SAUDI_G2_ENGLISH_TABLE_OF_CONTENTS,
  SAUDI_G2_ENGLISH_TEXTBOOK_URL,
  SAUDI_G2_ENGLISH_UNIT_COUNT
} from '../src/data/saudiEnglishG2CurriculumData';
import {
  getSaudiEnglishG5Curriculum,
  SAUDI_G5_ENGLISH_TABLE_OF_CONTENTS,
  SAUDI_G5_ENGLISH_TEXTBOOK_URL,
  SAUDI_G5_ENGLISH_UNIT_COUNT
} from '../src/data/saudiEnglishG5CurriculumData';
import {
  getSaudiEnglishG3Curriculum,
  SAUDI_G3_ENGLISH_LECTURE_COUNT,
  SAUDI_G3_ENGLISH_SUPPLEMENTARY_CONTENTS,
  SAUDI_G3_ENGLISH_TABLE_OF_CONTENTS,
  SAUDI_G3_ENGLISH_TEXTBOOK_URL,
  SAUDI_G3_ENGLISH_UNIT_COUNT
} from '../src/data/saudiEnglishG3CurriculumData';
import {
  SAUDI_G5_QURAN_RECITATION_CURRICULUM,
  SAUDI_G5_QURAN_RECITATION_TABLE_OF_CONTENTS,
  SAUDI_G5_QURAN_RECITATION_TEXTBOOK_URL,
  SAUDI_G5_QURAN_RECITATION_TOPIC_COUNT,
  SAUDI_G5_QURAN_RECITATION_UNIT_COUNT
} from '../src/data/saudiGrade5QuranRecitationCurriculumData';
import {
  SAUDI_G4_VISUAL_ARTS_CURRICULUM,
  SAUDI_G4_VISUAL_ARTS_TABLE_OF_CONTENTS,
  SAUDI_G4_VISUAL_ARTS_TEXTBOOK_URL,
  SAUDI_G4_VISUAL_ARTS_TOPIC_COUNT,
  SAUDI_G4_VISUAL_ARTS_UNIT_COUNT
} from '../src/data/saudiGrade4VisualArtsCurriculumData';
import {
  SAUDI_G3_VISUAL_ARTS_CURRICULUM,
  SAUDI_G3_VISUAL_ARTS_TABLE_OF_CONTENTS,
  SAUDI_G3_VISUAL_ARTS_TEXTBOOK_URL,
  SAUDI_G3_VISUAL_ARTS_TOPIC_COUNT,
  SAUDI_G3_VISUAL_ARTS_UNIT_COUNT
} from '../src/data/saudiGrade3VisualArtsCurriculumData';
import {
  SAUDI_G2_VISUAL_ARTS_CURRICULUM,
  SAUDI_G2_VISUAL_ARTS_TABLE_OF_CONTENTS,
  SAUDI_G2_VISUAL_ARTS_TEXTBOOK_URL,
  SAUDI_G2_VISUAL_ARTS_TOPIC_COUNT,
  SAUDI_G2_VISUAL_ARTS_UNIT_COUNT
} from '../src/data/saudiGrade2VisualArtsCurriculumData';
import {
  SAUDI_G5_VISUAL_ARTS_CURRICULUM,
  SAUDI_G5_VISUAL_ARTS_TABLE_OF_CONTENTS,
  SAUDI_G5_VISUAL_ARTS_TEXTBOOK_URL,
  SAUDI_G5_VISUAL_ARTS_TOPIC_COUNT,
  SAUDI_G5_VISUAL_ARTS_UNIT_COUNT
} from '../src/data/saudiGrade5VisualArtsCurriculumData';
import { SAUDI_G6_VISUAL_ARTS_CURRICULUM } from '../src/data/saudiGrade6VisualArtsCurriculumData';
import { SAUDI_G6_PRIMARY_MATH_CURRICULUM } from '../src/data/saudiPrimaryMath6CurriculumData';
import {
  SAUDI_G4_PRIMARY_MATH_CURRICULUM,
  SAUDI_G4_PRIMARY_MATH_TABLE_OF_CONTENTS,
  SAUDI_G4_PRIMARY_MATH_TEXTBOOK_URL,
  SAUDI_G4_PRIMARY_MATH_TOPIC_COUNT,
  SAUDI_G4_PRIMARY_MATH_UNIT_COUNT
} from '../src/data/saudiPrimaryMath4CurriculumData';
import {
  SAUDI_G3_PRIMARY_MATH_CURRICULUM,
  SAUDI_G3_PRIMARY_MATH_TABLE_OF_CONTENTS,
  SAUDI_G3_PRIMARY_MATH_TEXTBOOK_URL,
  SAUDI_G3_PRIMARY_MATH_TOPIC_COUNT,
  SAUDI_G3_PRIMARY_MATH_UNIT_COUNT
} from '../src/data/saudiPrimaryMath3CurriculumData';
import {
  SAUDI_G2_PRIMARY_MATH_CURRICULUM,
  SAUDI_G2_PRIMARY_MATH_TABLE_OF_CONTENTS,
  SAUDI_G2_PRIMARY_MATH_TEXTBOOK_URL,
  SAUDI_G2_PRIMARY_MATH_TOPIC_COUNT,
  SAUDI_G2_PRIMARY_MATH_UNIT_COUNT,
  SAUDI_G2_PRIMARY_MATH_AXES_COMPARISON
} from '../src/data/saudiPrimaryMath2CurriculumData';
import {
  SAUDI_G5_PRIMARY_MATH_CURRICULUM,
  SAUDI_G5_PRIMARY_MATH_TABLE_OF_CONTENTS,
  SAUDI_G5_PRIMARY_MATH_TEXTBOOK_URL,
  SAUDI_G5_PRIMARY_MATH_TOPIC_COUNT,
  SAUDI_G5_PRIMARY_MATH_UNIT_COUNT
} from '../src/data/saudiPrimaryMath5CurriculumData';
import {
  SAUDI_SOCIAL_STUDIES_CURRICULUM,
  SAUDI_SOCIAL_STUDIES_COVERED_GRADES,
  SAUDI_SOCIAL_STUDIES_OFFICIAL_TEXTBOOK_VERIFIED
} from '../src/data/saudiSocialStudiesCurriculumData';
import {
  SAUDI_G4_SOCIAL_STUDIES_CURRICULUM,
  SAUDI_G4_SOCIAL_STUDIES_LESSON_COUNT,
  SAUDI_G4_SOCIAL_STUDIES_TABLE_OF_CONTENTS,
  SAUDI_G4_SOCIAL_STUDIES_TEXTBOOK_URL,
  SAUDI_G4_SOCIAL_STUDIES_UNIT_COUNT
} from '../src/data/saudiGrade4SocialStudiesCurriculumData';
import {
  SAUDI_G5_SOCIAL_STUDIES_CURRICULUM,
  SAUDI_G5_SOCIAL_STUDIES_LESSON_COUNT,
  SAUDI_G5_SOCIAL_STUDIES_TABLE_OF_CONTENTS,
  SAUDI_G5_SOCIAL_STUDIES_TEXTBOOK_URL,
  SAUDI_G5_SOCIAL_STUDIES_UNIT_COUNT
} from '../src/data/saudiGrade5SocialStudiesCurriculumData';
import {
  SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM,
  SAUDI_G3_ISLAMIC_STUDIES_LESSON_COUNT,
  SAUDI_G3_ISLAMIC_STUDIES_SECTION_COUNT,
  SAUDI_G3_ISLAMIC_STUDIES_TABLE_OF_CONTENTS,
  SAUDI_G3_ISLAMIC_STUDIES_TEXTBOOK_URL
} from '../src/data/saudiGrade3IslamicStudiesCurriculumData';
import {
  SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM,
  SAUDI_G2_ISLAMIC_STUDIES_LESSON_COUNT,
  SAUDI_G2_ISLAMIC_STUDIES_SECTION_COUNT,
  SAUDI_G2_ISLAMIC_STUDIES_TABLE_OF_CONTENTS,
  SAUDI_G2_ISLAMIC_STUDIES_TEXTBOOK_URL
} from '../src/data/saudiGrade2IslamicStudiesCurriculumData';
import {
  SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM,
  SAUDI_G4_ISLAMIC_STUDIES_LESSON_COUNT,
  SAUDI_G4_ISLAMIC_STUDIES_SECTION_COUNT,
  SAUDI_G4_ISLAMIC_STUDIES_TABLE_OF_CONTENTS,
  SAUDI_G4_ISLAMIC_STUDIES_TEXTBOOK_URL
} from '../src/data/saudiGrade4IslamicStudiesCurriculumData';
import {
  SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM,
  SAUDI_G5_ISLAMIC_STUDIES_LESSON_COUNT,
  SAUDI_G5_ISLAMIC_STUDIES_TEXTBOOK_URL,
  SAUDI_G5_ISLAMIC_STUDIES_UNIT_COUNT
} from '../src/data/saudiGrade5IslamicStudiesCurriculumData';
import {
  SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM,
  SAUDI_G6_ISLAMIC_STUDIES_LESSON_COUNT,
  SAUDI_G6_ISLAMIC_STUDIES_TEXTBOOK_URL,
  SAUDI_G6_ISLAMIC_STUDIES_UNIT_COUNT
} from '../src/data/saudiGrade6IslamicStudiesCurriculumData';
import {
  SAUDI_G11_HISTORY_LECTURES,
  SAUDI_G11_HISTORY_LESSON_COUNT,
  SAUDI_G11_HISTORY_TEXTBOOK_LESSONS,
  SAUDI_G11_HISTORY_UNIT_REVIEW_COUNT
} from '../src/data/saudiHistoryG11CurriculumData';
import {
  SAUDI_G11_HEALTH_SCIENCE_CHAPTER_COUNT,
  SAUDI_G11_HEALTH_SCIENCE_LECTURES,
  SAUDI_G11_HEALTH_SCIENCE_LESSON_COUNT,
  SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_LESSONS,
  SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_URL
} from '../src/data/saudiHealthScienceG11CurriculumData';
import type { CountryCode, EducationTrack, Subject } from '../src/types';
import { removeExternalLinksFromText, sanitizeLectureForStudents } from '../src/services/studentContentSanitizer';

console.log('====================================================');
console.log('TESTING MIDDLE & HIGH SCHOOL CURRICULUM INTEGRITY');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function assert(condition: boolean, msg: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] ${msg}`);
  } else {
    console.error(`[FAIL] ${msg}`);
  }
}

function collectStringValues(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStringValues);
  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectStringValues);
  }
  return [];
}

const sanitizedSampleLecture = sanitizeLectureForStudents({
  id: 'test-link-removal',
  order: 1,
  titleAr: 'درس تجريبي',
  titleEn: 'Sample lesson',
  subtitleAr: '[المصدر الرسمي](https://iencontent.ien.edu.sa/books/sample.pdf)',
  subtitleEn: 'Official textbook source: https://example.org/lesson.',
  ministryAr: 'وزارة التعليم',
  durationMinutes: 30,
  isLocked: false,
  isCompleted: false,
  passingScoreRequired: 80,
  keyConceptsAr: ['راجع الدرس: https://example.org/book.pdf'],
  keyConceptsEn: ['Visit www.example.org for more'],
  descriptionAr: 'المصدر المعتمد: كتاب رسمي ورابط خارجي.\n\nاشرح مفهوم الآحاد والعشرات باستخدام مكعبات آمنة.',
  assessment: {
    id: 'test-assessment',
    titleAr: 'اختبار',
    titleEn: 'Assessment',
    passingScore: 80,
    questions: []
  }
});
assert(
  !JSON.stringify(sanitizedSampleLecture).match(/https?:\/\/|www\./i) &&
    sanitizedSampleLecture.subtitleAr === '' &&
    sanitizedSampleLecture.ministryAr === '' &&
    sanitizedSampleLecture.descriptionAr === 'اشرح مفهوم الآحاد والعشرات باستخدام مكعبات آمنة.',
  'External sources, institutions, and comparison metadata are removed while lesson instruction remains'
);
assert(
  !removeExternalLinksFromText('https://example.org/resource').includes('example.org') &&
    removeExternalLinksFromText('xmlns="http://www.w3.org/2000/svg"').includes('http://www.w3.org/2000/svg') &&
    removeExternalLinksFromText('مقارنة العنوان: عنوان المحور مقابل عنوان الكتاب المدرسي.').length === 0 &&
    removeExternalLinksFromText('لم تتوفر نسخة قابلة للتحقق من كتاب العلوم؛ لذا لم تطابق عناوينه مع فهرس طبعة وزارة بعينها.').length === 0 &&
    removeExternalLinksFromText('This is not a verbatim textbook excerpt.').length === 0,
  'External URLs, source caveats, book comparisons, and citations are hidden without damaging SVG namespace declarations'
);
const allStudentCurriculumLectures = ACTIVE_CURRICULUM_COUNTRIES.flatMap((country) =>
  (['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'] as const)
    .flatMap((gradeLevel) =>
      ([
        'PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES',
        'TAJWEED', 'QURAN_RECITATION', 'VISUAL_ARTS', 'MATH', 'PHYSICS',
        'CHEMISTRY', 'BIOLOGY', 'ENGLISH', 'ARABIC_LIT', 'ARABIC_LANG',
        'GENERAL_SCIENCE', 'COMPUTER_SCIENCE', 'GEOGRAPHY', 'HISTORY',
        'HEALTH_SCIENCE', 'LIFE_SKILLS', 'SAUDI_SOCIAL_STUDIES'
      ] as const).flatMap((subject) =>
        getCurriculumForSubject(subject, gradeLevel, country, 'PUBLIC')
      )
    )
).map(sanitizeLectureForStudents);
const externalStudentContentPattern =
  /(?:https?:\/\/|ftp:\/\/|www\.)|\bIEN\b|وزارة التعليم|المصدر المعتمد|المصدر الرسمي|مرجع الفهرس|عنوان الكتاب المدرسي|مقارنة المحور|مقارنة العنوان|official source|official reference|contents reference|textbook/i;
const externalStudentContentLeaks = allStudentCurriculumLectures.flatMap((lecture) =>
  collectStringValues(lecture)
    .map((text) => text.replace(/http:\/\/www\.w3\.org\/2000\/svg/gi, ''))
    .filter((text) => externalStudentContentPattern.test(text))
    .map((text) => `${lecture.id}: ${text}`)
);
assert(
  allStudentCurriculumLectures.length > 0 &&
    externalStudentContentLeaks.length === 0,
  `All public curriculum routes hide external links, source attributions, institutions, and source-to-platform comparisons${externalStudentContentLeaks.length ? `: ${externalStudentContentLeaks.slice(0, 5).join(' | ')}` : ''}`
);

assert(
  ACTIVE_CURRICULUM_COUNTRIES.join(',') === 'SA,EG,SD' &&
    ACTIVE_CURRICULUM_COUNTRIES.every(isActiveCurriculumCountry),
  'Only Saudi Arabia, Egypt, and Sudan are active curriculum countries'
);
assert(
  !isActiveCurriculumCountry('AE') &&
    !isActiveCurriculumCountry('INTL') &&
    normalizeEducationTypeForCountry('SD', 'INTERNATIONAL') === 'PUBLIC' &&
    normalizeEducationTrackForCountry('SD', 'CS_ENGINEERING') === 'GENERAL',
  'Inactive countries and unsupported country-specific study options normalize safely'
);
assert(
  getSpecializationForEducationTrack('GENERAL') === 'GENERAL' &&
    getSpecializationForEducationTrack('CS_ENGINEERING') === 'STEM' &&
    getSpecializationForEducationTrack('HEALTH_LIFE') === 'HEALTH' &&
    getSpecializationForEducationTrack('BUSINESS') === 'VOCATIONAL' &&
    getSpecializationForEducationTrack('SHARIA_HUMANITIES') === 'HUMANITIES',
  'Secondary specialization metadata is consistently derived from the selected track'
);

// 1. Test Middle School Subjects (G7, G8, G9)
console.log('--- 1. Testing Middle School Differentiation (G7, G8, G9) ---');
const middleSubjects: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];

for (const subj of middleSubjects) {
  const g7 = getCurriculumForSubject(subj, 'G7');
  const g8 = getCurriculumForSubject(subj, 'G8');
  const g9 = getCurriculumForSubject(subj, 'G9');

  assert(g7 && g7.length > 0, `${subj} G7 has ${g7?.length} lectures`);
  assert(g8 && g8.length > 0, `${subj} G8 has ${g8?.length} lectures`);
  assert(g9 && g9.length > 0, `${subj} G9 has ${g9?.length} lectures`);

  // Ensure lecture IDs and titles are distinct between grades
  const g7Title = g7[0]?.titleAr || '';
  const g8Title = g8[0]?.titleAr || '';
  const g9Title = g9[0]?.titleAr || '';

  assert(g7Title !== g8Title, `${subj}: G7 ("${g7Title.substring(0, 30)}...") != G8 ("${g8Title.substring(0, 30)}...")`);
  assert(g8Title !== g9Title, `${subj}: G8 ("${g8Title.substring(0, 30)}...") != G9 ("${g9Title.substring(0, 30)}...")`);
  assert(g7Title !== g9Title, `${subj}: G7 != G9`);
}

// 2. Test High School Subjects (G10, G11, G12)
console.log('\n--- 2. Testing High School Differentiation (G10, G11, G12) ---');
const highSubjects: Subject[] = ['MATH', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'COMPUTER_SCIENCE', 'ARABIC_LIT'];

for (const subj of highSubjects) {
  const g10 = getCurriculumForSubject(subj, 'G10');
  const g11 = getCurriculumForSubject(
    subj,
    'G11',
    'SA',
    'PUBLIC',
    subj === 'PHYSICS'
      ? 'CS_ENGINEERING'
      : subj === 'BIOLOGY'
        ? 'HEALTH_LIFE'
        : subj === 'COMPUTER_SCIENCE' ? 'BUSINESS' : 'GENERAL'
  );
  const g12 = getCurriculumForSubject(subj, 'G12');

  assert(g10 && g10.length > 0, `${subj} G10 has ${g10?.length} lectures`);
  assert(g11 && g11.length > 0, `${subj} G11 has ${g11?.length} lectures`);
  assert(g12 && g12.length > 0, `${subj} G12 has ${g12?.length} lectures`);

  const g10Title = g10[0]?.titleAr || '';
  const g11Title = g11[0]?.titleAr || '';
  const g12Title = g12[0]?.titleAr || '';

  assert(
    subj === 'ARABIC_LIT'
      ? g10[0].summaryAr !== g11[0].summaryAr
      : g10Title !== g11Title,
    `${subj}: G10 and G11 contain grade-specific lessons`
  );
  assert(g11Title !== g12Title, `${subj}: G11 ("${g11Title.substring(0, 30)}...") != G12 ("${g12Title.substring(0, 30)}...")`);
  assert(g10Title !== g12Title, `${subj}: G10 != G12`);
}

// 3. Test Specific High School G10 Physics Real Topics vs G12
console.log('\n--- 3. Verifying G10 Physics is Kinematics & Dimensions (NOT Grade 12) ---');
const physG10 = getCurriculumForSubject('PHYSICS', 'G10');
const physG12 = getCurriculumForSubject('PHYSICS', 'G12', 'EG');
const egyptianPhysG10 = getCurriculumForSubject('PHYSICS', 'G10', 'EG');
assert(physG10[0].titleAr.includes('القياس') || physG10[0].titleAr.includes('الأبعاد'), 'G10 Physics covers Measurement & Dimensions');
assert(physG12[0].titleAr.includes('الكهربي') || physG12[0].titleAr.includes('التيار'), 'G12 Physics covers Electromagnetism & Modern Physics');
assert(
  egyptianPhysG10[0].titleAr.includes('القياس') || egyptianPhysG10[0].titleAr.includes('الأبعاد'),
  'Non-Saudi physics courses retain their existing curriculum route'
);

// 4. Test Country Adaptation for the currently active countries
console.log('\n--- 4. Testing Country Adaptation Engine across active countries ---');
const testCountries: CountryCode[] = [...ACTIVE_CURRICULUM_COUNTRIES];

for (const country of testCountries) {
  // Test Middle School Math G8
  const tbMiddle = getNationalTextbookInfo(country, 'MATH', 'G8');
  assert(tbMiddle.textbookName.length > 0, `Country ${country}: Middle Math G8 textbook is "${tbMiddle.textbookName}"`);

  // Test High School Physics G10
  const tbHighPhys = getNationalTextbookInfo(country, 'PHYSICS', 'G10');
  assert(tbHighPhys.textbookName.length > 0, `Country ${country}: High Physics G10 textbook is "${tbHighPhys.textbookName}"`);

  // Test High School Arabic Literature G12
  const tbHighLit = getNationalTextbookInfo(country, 'ARABIC_LIT', 'G12');
  assert(tbHighLit.textbookName.length > 0, `Country ${country}: High Arabic Lit G12 textbook is "${tbHighLit.textbookName}"`);

  // Test loadSubjectLectures country injection
  const adaptedLecs = loadSubjectLectures('PHYSICS', country, 'G10');
  assert(adaptedLecs[0].country === country, `loadSubjectLectures sets country to ${country}`);
  assert(adaptedLecs[0].gradeLevelNameAr?.includes(SUPPORTED_COUNTRIES[country].nameAr), `gradeLevelNameAr includes country name for ${country}`);
}

// 5. Test active-country differentiation and inactive-country isolation
console.log('\n--- 5. Testing active-country differentiation and inactive-country isolation ---');
const lecsSA = loadSubjectLectures('PHYSICS', 'SA', 'G10');
const lecsEG = loadSubjectLectures('PHYSICS', 'EG', 'G10');
const lecsSD = loadSubjectLectures('PHYSICS', 'SD', 'G10');
const inactiveCountryLecs = ['AE', 'JO', 'KW', 'MA', 'DZ', 'TN', 'OM', 'QA', 'BH', 'IQ', 'INTL']
  .map(country => loadSubjectLectures('PHYSICS', country, 'G10'));

assert(lecsEG[0]?.titleAr.includes('القياس الفيزيائي والكميات الأساسية'), 'Egypt G10 Physics uses its configured national lesson title');
assert(lecsSA.length > 0 && lecsEG.length > 0 && lecsSD.length > 0, 'Active countries retain their curriculum routing');
assert(
  inactiveCountryLecs.every(lectures => lectures.length === 0) &&
    getCurriculumForSubject('PHYSICS', 'G10', 'INTL').length === 0,
  'Inactive countries and the legacy INTL country code cannot load national curricula'
);

// 6. Saudi Grade 7 Digital Technology must not inherit generic international/AP lessons
console.log('\n--- 6. Verifying Saudi Grade 7 Digital Technology curriculum isolation ---');
const saudiDigitalTechnology = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G7');
const saudiDigitalTechnologyText = saudiDigitalTechnology
  .map((lecture) =>
    `${lecture.titleAr} ${lecture.subtitleAr} ${lecture.unitTitleAr} ${lecture.descriptionAr} ${
      lecture.sections?.map((section) => `${section.titleAr} ${section.contentAr}`).join(' ') || ''
    }`
  )
  .join(' ');
const internationalComputerScience = getNationalLessonOverrides('INTL', 'COMPUTER_SCIENCE', 'G7');
const internationalSchoolComputerScience = getNationalLessonOverrides('SA', 'COMPUTER_SCIENCE', 'G7', 'INTERNATIONAL');
const officialSaudiBookLessonTitles = [
  'أجهزة الحاسب', 'نظام التشغيل', 'إعدادات نظام التشغيل الأساسية',
  'التنسيق المتقدم', 'دمج المراسلات', 'إتمام عملية الدمج',
  'التنسيق المتقدم', 'الدوال المتقدمة',
  'ما البرنامج', 'المتغيرات والثوابت', 'إدخال البيانات', 'المعاملات في بايثون', 'الرسم باستخدام البرمجة',
  'شبكة الإنترنت', 'إرسال واستقبال رسائل البريد الإلكتروني', 'تنظيم البريد الإلكتروني', 'الاستخدام الآمن للإنترنت',
  'الدوال المنطقية', 'تنسيق المخططات',
  'الشرائح والنصوص والصور', 'تأثيرات الوسائط المتعددة المتقدمة', 'المخططات البيانية ونصائح لعرض متميز',
  'الروبوتات الافتراضية', 'الإحداثيات في البرمجة', 'الحركة التلقائية'
];
const officialSaudiBookUnitTitles = [
  'تعلم الأساسيات', 'معالجة النصوص المتقدمة', 'التنسيق المتقدم والدوال', 'البرمجة مع بايثون',
  'الاتصال بالإنترنت', 'الدوال المنطقية والمخططات', 'عرض الأفكار من خلال العرض التقديمي', 'برمجة الروبوت الافتراضي'
];
const routedSaudiBookLessonTitles = saudiDigitalTechnology
  .flatMap((lecture) => lecture.sections || [])
  .filter((section) => !section.titleAr.includes('الذكاء الاصطناعي'))
  .map((section) => section.titleAr);

assert(saudiDigitalTechnology.length > 0, 'Saudi G7 Digital Technology has lessons');
assert(
  getNationalTextbookInfo('SA', 'COMPUTER_SCIENCE', 'G7').textbookName.includes('المهارات الرقمية'),
  'Saudi G7 Computer Science resolves to the official Digital Skills textbook title'
);
assert(
  !/AP Computer Science|Big-O|التعقيد الزمني|هياكل البيانات/i.test(saudiDigitalTechnologyText),
  'Saudi G7 Digital Technology excludes advanced AP Computer Science topics'
);
assert(
  !getNationalLessonOverrides('SA', 'COMPUTER_SCIENCE', 'G7'),
  'Saudi public-school G7 does not inherit international Computer Science overrides'
);
assert(
  SAUDI_G7_DIGITAL_SKILLS_LESSON_COUNT === 25 &&
    JSON.stringify(SAUDI_G7_DIGITAL_SKILLS_LECTURES.map((lecture) => lecture.unitTitleAr)) === JSON.stringify(officialSaudiBookUnitTitles) &&
    JSON.stringify(routedSaudiBookLessonTitles) === JSON.stringify(officialSaudiBookLessonTitles),
  'Saudi G7 public curriculum maps all 8 units and 25 lessons in official textbook order'
);
assert(
  SAUDI_G7_DIGITAL_SKILLS_TEXTBOOK_URL === 'https://iencontent.ien.edu.sa/books/1448-GE-ME-K07-SM1-mcomp.pdf',
  'Saudi G7 curriculum crosswalk cites the current 1448–2026 IEN-hosted textbook'
);
assert(
  SAUDI_G7_DIGITAL_SKILLS_LECTURES.every((lecture) =>
    lecture.sections
      ?.filter((section) => section.titleAr !== 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)')
      .every((section) =>
        section.diagram?.diagramType === 'digital_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.diagram.titleAr.includes(section.titleAr)
      )
  ),
  'Every Saudi G7 lesson includes an original illustration titled for that lesson'
);
assert(
  SAUDI_G7_DIGITAL_SKILLS_LECTURES[7].sections?.at(-1)?.diagram?.visualSteps?.length === 4,
  'Saudi G7 AI enrichment includes a separate original visual illustration'
);
assert(
  !/Scratch|GIMP|Big-O|AP Computer Science/i.test(saudiDigitalTechnologyText),
  'Saudi G7 public curriculum excludes unrelated legacy and advanced topics'
);
assert(
  internationalComputerScience?.[0]?.titleAr.includes('AP Computer Science'),
  'International curriculum retains its AP Computer Science override'
);
assert(
  internationalSchoolComputerScience?.[0]?.titleAr.includes('AP Computer Science'),
  'Saudi international schools retain their international Computer Science override'
);

console.log('\n--- 7. Verifying Saudi Grade 6 Digital Skills against the 1448–2026 textbook ---');
const saudiGrade8DigitalSkills = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G8');
const saudiGrade9DigitalSkills = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G9');
const saudiPrimaryDigitalSkills = ['G4', 'G5', 'G6'].map((grade) =>
  loadSubjectLectures('COMPUTER_SCIENCE', 'SA', grade as 'G4' | 'G5' | 'G6', 'PUBLIC')
);
const saudiGrade6DigitalSkills = saudiPrimaryDigitalSkills[2];
const saudiSecondaryDigitalTechnology = ['G10', 'G11', 'G12'].map((grade) =>
  loadSubjectLectures('COMPUTER_SCIENCE', 'SA', grade as 'G10' | 'G11' | 'G12', 'PUBLIC')
);
const saudiBusinessG11DigitalTechnology = loadSubjectLectures(
  'COMPUTER_SCIENCE',
  'SA',
  'G11',
  'PUBLIC',
  'BUSINESS'
);
const saudiDigitalSkillsLectures = [
  ...saudiPrimaryDigitalSkills.flat(),
  ...saudiDigitalTechnology,
  ...saudiGrade8DigitalSkills,
  ...saudiGrade9DigitalSkills,
  ...saudiSecondaryDigitalTechnology.flat(),
  ...saudiBusinessG11DigitalTechnology
];

assert(
  saudiPrimaryDigitalSkills.every((lectures) => lectures.length > 0) &&
    saudiSecondaryDigitalTechnology[0].length > 0 &&
    saudiSecondaryDigitalTechnology[1].length === 0 &&
    saudiSecondaryDigitalTechnology[2].length > 0 &&
    saudiBusinessG11DigitalTechnology.length === SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LESSON_COUNT,
  'Saudi digital-skills routes isolate unverified G11 tracks and load the verified Business-track edition'
);
const officialSaudiG4DigitalSkillsContents = [
  [1, 'تعلم الأساسيات', 'الحاسب', 14, '7'],
  [1, 'تعلم الأساسيات', 'سطح المكتب', 20, '7'],
  [1, 'تعلم الأساسيات', 'إعدادات جهاز الحاسب', 33, '7'],
  [2, 'العمل على النص', 'لوحة المفاتيح', 44, '8'],
  [2, 'العمل على النص', 'تحرير النص', 53, '8'],
  [2, 'العمل على النص', 'تنسيق النص', 66, '8'],
  [2, 'العمل على النص', 'تنسيق الفقرة', 74, '8'],
  [3, 'عالمي المتصل', 'الموقع الإلكتروني', 88, '9'],
  [3, 'عالمي المتصل', 'البحث في الإنترنت', 94, '9'],
  [3, 'عالمي المتصل', 'مصادر المعلومات', 100, '9'],
  [3, 'عالمي المتصل', 'السلامة على الإنترنت', 107, '9'],
  [4, 'العمل مع البرمجة باستخدام سكراتش', 'أساسيات سكراتش', 120, '9–10'],
  [4, 'العمل مع البرمجة باستخدام سكراتش', 'استخدام اللبنات البرمجية', 130, '10'],
  [4, 'العمل مع البرمجة باستخدام سكراتش', 'التكرارات في سكراتش', 141, '10'],
  [4, 'العمل مع البرمجة باستخدام سكراتش', 'الرسم بواسطة سكراتش', 147, '10']
];
const actualSaudiG4DigitalSkillsContents = saudiPrimaryDigitalSkills[0].map((lecture) => {
  const section = lecture.sections?.[0];
  const unitNumber = lecture.id.match(/-u(\d+)-/)?.[1];
  const page = section?.contentAr.match(/مرجع الكتاب: ص (\d+)\./)?.[1];
  const contentsPdfPages = section?.contentAr.match(/صفحة الفهرس في PDF: ([\d–-]+)\./)?.[1];
  return [Number(unitNumber), lecture.unitTitleAr, section?.titleAr, Number(page), contentsPdfPages];
});
assert(
  SAUDI_PRIMARY_DIGITAL_SKILLS_TEXTBOOK_URLS.G4 ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-mcomp.pdf' &&
    SAUDI_G4_DIGITAL_SKILLS_LESSON_COUNT === 15 &&
    JSON.stringify(SAUDI_G4_DIGITAL_SKILLS_TABLE_OF_CONTENTS.map((lesson) => [
      lesson.unitNumber,
      lesson.unitTitleAr,
      lesson.titleAr,
      lesson.page,
      lesson.contentsPdfPages
    ])) === JSON.stringify(officialSaudiG4DigitalSkillsContents) &&
    JSON.stringify(actualSaudiG4DigitalSkillsContents) === JSON.stringify(officialSaudiG4DigitalSkillsContents) &&
    saudiPrimaryDigitalSkills[0].every((lecture, index) =>
      lecture.order === index + 1 &&
      lecture.sections?.[0]?.diagram?.diagramType === 'digital_skills' &&
      lecture.sections[0].diagram.visualSteps?.length === 4 &&
      lecture.assessment.questions.length === 1
    ) &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G4', 'SA', 'PUBLIC', 'GENERAL').length === 15 &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G4', 'SA', 'PRIVATE', 'GENERAL').length === 0,
  'Saudi Grade 4 Digital Skills maps all 15 Part One lessons, units, and page references from official PDF contents pp. 7–10'
);
const grade4DigitalSkillsTextbook = getNationalTextbookInfo(
  'SA',
  'COMPUTER_SCIENCE',
  'G4',
  'GENERAL',
  'ar',
  'PUBLIC'
);
assert(
  grade4DigitalSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade4DigitalSkillsTextbook.textbookName.includes('1447هـ') &&
    grade4DigitalSkillsTextbook.textbookName.includes('15 عنوان درس') &&
    grade4DigitalSkillsTextbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    getNationalSubjectLabel('COMPUTER_SCIENCE', 'SA', 'G4', 'ar', 'PUBLIC', 'GENERAL') ===
      'المهارات الرقمية (الصف الرابع)',
  'Grade 4 textbook metadata identifies the verified Part One edition and discloses the internal publication year'
);
const officialSaudiG6DigitalSkillsContents = [
  [1, 'التصميم ثلاثي الأبعاد', 'مقدمة إلى النمذجة ثلاثية الأبعاد', 12],
  [1, 'التصميم ثلاثي الأبعاد', 'معالجة الأشكال ثلاثية الأبعاد', 37],
  [1, 'جداول البيانات', 'تنفيذ العمليات الحسابية', 61],
  [1, 'جداول البيانات', 'المخططات البيانية', 79],
  [1, 'قواعد البيانات', 'مقدمة عن قواعد البيانات', 97],
  [1, 'قواعد البيانات', 'إنشاء قاعدة بيانات', 108],
  [1, 'قواعد البيانات', 'الفرز والتصفية', 118],
  [1, 'البرمجة باستخدام سكراتش', 'التكرار في سكراتش', 134],
  [1, 'البرمجة باستخدام سكراتش', 'برمجة العمليات الحسابية', 142],
  [1, 'البرمجة باستخدام سكراتش', 'اتخاذ القرارات', 153],
  [1, 'البرمجة باستخدام سكراتش', 'الإحداثيات في سكراتش', 160],
  [1, 'البرمجة باستخدام سكراتش', 'القرارات المركبة في سكراتش', 172],
  [1, 'البرمجة باستخدام سكراتش', 'الألعاب في سكراتش', 180],
  [2, 'التصميم المتقدم للمستندات', 'إنشاء الجداول وتنسيقها', 211],
  [2, 'التصميم المتقدم للمستندات', 'تحرير الجداول', 219],
  [2, 'التصميم المتقدم للمستندات', 'التنسيق المتقدم', 228],
  [2, 'تصميم المواقع الإلكترونية', 'تصميم صفحة إلكترونية', 252],
  [2, 'تصميم المواقع الإلكترونية', 'إضافة الصفحات', 272],
  [2, 'تصميم المواقع الإلكترونية', 'نشر الموقع الإلكتروني', 283],
  [2, 'تصميم ألعاب جهاز الحاسب', 'تخطيط وتصميم ألعاب جهاز الحاسب', 296],
  [2, 'تصميم ألعاب جهاز الحاسب', 'برمجة ألعاب جهاز الحاسب', 314],
  [2, 'المستشعرات في علم الروبوت', 'مستشعرات الروبوت', 334],
  [2, 'المستشعرات في علم الروبوت', 'اتخاذ القرارات', 348],
  [2, 'المستشعرات في علم الروبوت', 'إنشاء الخرائط', 363]
];
assert(
  SAUDI_G6_DIGITAL_SKILLS_UNIT_COUNT === 8 &&
    SAUDI_G6_DIGITAL_SKILLS_LESSON_COUNT === 24 &&
    JSON.stringify(SAUDI_G6_DIGITAL_SKILLS_TABLE_OF_CONTENTS.map(({ part, unitTitleAr, titleAr, page }) => [
      part,
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(officialSaudiG6DigitalSkillsContents) &&
    JSON.stringify(saudiGrade6DigitalSkills.map((lecture) => lecture.unitTitleAr)) === JSON.stringify([
      'التصميم ثلاثي الأبعاد',
      'جداول البيانات',
      'قواعد البيانات',
      'البرمجة باستخدام سكراتش',
      'التصميم المتقدم للمستندات',
      'تصميم المواقع الإلكترونية',
      'تصميم ألعاب جهاز الحاسب',
      'المستشعرات في علم الروبوت'
    ]),
  'Saudi public Grade 6 Digital Skills maps all 8 official units and 24 lessons in textbook order with verified page references'
);
assert(
  SAUDI_G6_DIGITAL_SKILLS_TEXTBOOK_URL ===
    'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-mcomp.pdf' &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G6', 'SA', 'PUBLIC', 'GENERAL').length === 8 &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G6', 'SA', 'PUBLIC', 'BUSINESS').length === 0 &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G6', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G6', 'INTL', 'PUBLIC', 'GENERAL').length === 0,
  'Verified Saudi Grade 6 Digital Skills is restricted to Saudi public General-track profiles'
);
assert(
  SAUDI_G6_DIGITAL_SKILLS_LECTURES.reduce(
    (count, lecture) => count + (lecture.sections?.filter((section) =>
      section.titleAr !== 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)'
    ).length ?? 0),
    0
  ) === 24 &&
    SAUDI_G6_DIGITAL_SKILLS_LECTURES.every((lecture) =>
      lecture.sections
        ?.filter((section) => section.titleAr !== 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)')
        .every((section) =>
          section.diagram?.diagramType === 'digital_skills' &&
          section.diagram.visualSteps?.length === 4 &&
          section.diagram.titleAr.includes(section.titleAr)
        )
    ) &&
    SAUDI_G6_DIGITAL_SKILLS_LECTURES[7].sections?.at(-1)?.titleAr ===
      'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)' &&
    SAUDI_G6_DIGITAL_SKILLS_LECTURES[7].sections?.at(-1)?.diagram?.visualSteps?.length === 4,
  'Saudi Grade 6 includes 24 illustrated lessons and keeps AI as separate, illustrated enrichment'
);
const grade6DigitalSkillsTextbook = getNationalTextbookInfo(
  'SA',
  'COMPUTER_SCIENCE',
  'G6',
  'GENERAL',
  'ar',
  'PUBLIC'
);
assert(
  grade6DigitalSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade6DigitalSkillsTextbook.textbookName.includes('1447هـ') &&
    grade6DigitalSkillsTextbook.semester.includes('الجزآن الأول والثاني') &&
    getNationalSubjectLabel('COMPUTER_SCIENCE', 'SA', 'G6', 'ar', 'PUBLIC', 'GENERAL') ===
      'المهارات الرقمية (الصف السادس)' &&
    isSaudiPublicG6DigitalSkillsAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6DigitalSkillsAvailable('SA', 'G6', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicG6DigitalSkillsAvailable('SA', 'G6', 'PRIVATE', 'GENERAL'),
  'Grade 6 metadata discloses the 1448/1447 edition-year difference and both parts, with strict route eligibility'
);
const officialSaudiG5DigitalSkillsContents = [
  [1, 'تعلم الأساسيات', 'أجهزة الحاسب', 15],
  [1, 'تعلم الأساسيات', 'أجزاء الحاسب', 25],
  [1, 'تعلم الأساسيات', 'الملفات والمجلدات', 39],
  [1, 'التعامل مع المستندات', 'الصور والرسومات', 62],
  [1, 'التعامل مع المستندات', 'التنسيق المتقدم', 69],
  [1, 'التعامل مع المستندات', 'إدراج الرسومات التوضيحية', 81],
  [1, 'التعامل مع المستندات', 'التدقيق والطباعة', 90],
  [1, 'الوسائط المتعددة', 'استخدام أجهزة الالتقاط وتحرير مقاطع الصوت', 103],
  [1, 'الوسائط المتعددة', 'البحث عن الوسائط المتعددة وإنشاء وتحرير مقاطع الفيديو', 132],
  [1, 'البرمجة والتفاعل في سكراتش', 'كيفية تصميم برنامج', 162],
  [1, 'البرمجة والتفاعل في سكراتش', 'الكائنات في سكراتش', 170],
  [1, 'البرمجة والتفاعل في سكراتش', 'المعاملات الشرطية', 182],
  [1, 'البرمجة والتفاعل في سكراتش', 'الحركة في سكراتش', 193],
  [1, 'البرمجة والتفاعل في سكراتش', 'رسائل البث', 207],
  [1, 'البرمجة والتفاعل في سكراتش', 'الاستشعار', 217],
  [2, 'أدوات البحث والاتصال ومشاركة الملفات', 'الإنترنت والشبكة العنكبوتية', 245],
  [2, 'أدوات البحث والاتصال ومشاركة الملفات', 'الإنترنت وأدوات التواصل', 255],
  [2, 'أدوات البحث والاتصال ومشاركة الملفات', 'مشاركة الملفات', 269],
  [2, 'جداول البيانات', 'الصفوف والأعمدة', 287],
  [2, 'جداول البيانات', 'العمليات الحسابية', 303],
  [2, 'وسائل التواصل الاجتماعي', 'وسائل التواصل الاجتماعي', 320],
  [2, 'وسائل التواصل الاجتماعي', 'التدوين', 326],
  [2, 'وسائل التواصل الاجتماعي', 'الملكية الفكرية', 347],
  [2, 'برمجة الروبوت', 'الروبوتات في حياتنا اليومية', 359],
  [2, 'برمجة الروبوت', 'استخدام التكرارات', 368],
  [2, 'برمجة الروبوت', 'رسم مكعب', 383]
];
const grade5DigitalSkills = getCurriculumForSubject(
  'COMPUTER_SCIENCE',
  'G5',
  'SA',
  'PUBLIC',
  'GENERAL'
);
const actualSaudiG5DigitalSkillsContents = grade5DigitalSkills.flatMap((lecture) =>
  (lecture.sections ?? [])
    .filter((section) => section.titleAr !== 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)')
    .map((section) => {
      const page = section.contentAr.match(/مرجع الكتاب: ص (\d+)\./)?.[1];
      return [
        lecture.id.includes('-part-1-') ? 1 : 2,
        lecture.unitTitleAr,
        section.titleAr,
        Number(page)
      ];
    })
);
assert(
  SAUDI_G5_DIGITAL_SKILLS_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-mcomp.pdf' &&
    SAUDI_G5_DIGITAL_SKILLS_UNIT_COUNT === 8 &&
    SAUDI_G5_DIGITAL_SKILLS_LESSON_COUNT === 26 &&
    SAUDI_G5_DIGITAL_SKILLS_LECTURES.length === 8,
  'Saudi Grade 5 Digital Skills defines the official textbook, 8 units, and 26 numbered lessons'
);
assert(
  JSON.stringify(SAUDI_G5_DIGITAL_SKILLS_TABLE_OF_CONTENTS.map(({ part, unitTitleAr, titleAr, page }) => [
    part,
    unitTitleAr,
    titleAr,
    page
  ])) === JSON.stringify(officialSaudiG5DigitalSkillsContents),
  'Saudi Grade 5 Digital Skills table of contents matches the official unit, lesson, and page references'
);
assert(
  grade5DigitalSkills.length === 8 &&
    JSON.stringify(actualSaudiG5DigitalSkillsContents) === JSON.stringify(officialSaudiG5DigitalSkillsContents),
  'Saudi Grade 5 Digital Skills route serves the exact indexed lessons in order with matching page references'
);
assert(
  grade5DigitalSkills.every((lecture, index) =>
    lecture.id === SAUDI_G5_DIGITAL_SKILLS_LECTURES[index].id &&
    lecture.order === index + 1 &&
    lecture.gradeLevel === 'G5' &&
    lecture.subject === 'COMPUTER_SCIENCE' &&
    lecture.country === 'SA' &&
    lecture.educationType === 'PUBLIC' &&
    lecture.educationTrack === 'GENERAL' &&
    lecture.sections
      ?.filter((section) => section.titleAr !== 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)')
      .every((section) =>
        section.diagram?.diagramType === 'digital_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.diagram.titleAr.includes(section.titleAr)
      )
  ) &&
    grade5DigitalSkills.map((lecture) => lecture.unitTitleAr).join('|') === [
      'تعلم الأساسيات',
      'التعامل مع المستندات',
      'الوسائط المتعددة',
      'البرمجة والتفاعل في سكراتش',
      'أدوات البحث والاتصال ومشاركة الملفات',
      'جداول البيانات',
      'وسائل التواصل الاجتماعي',
      'برمجة الروبوت'
    ].join('|'),
  'Saudi Grade 5 Digital Skills preserves unit order, route metadata, and original lesson diagrams'
);
assert(
  grade5DigitalSkills[7].sections?.at(-1)?.titleAr ===
      'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)' &&
    grade5DigitalSkills[7].sections?.at(-1)?.contentAr.includes('ص 410–418') &&
    grade5DigitalSkills[7].sections?.at(-1)?.diagram?.visualSteps?.length === 4,
  'Saudi Grade 5 AI is separate enrichment with an original illustration, not a numbered lesson'
);
assert(
  isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PUBLIC', 'INTERNATIONAL') &&
    !isSaudiPublicG5DigitalSkillsAvailable('EG', 'G5', 'PUBLIC', 'GENERAL') &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G5', 'SA', 'PUBLIC', 'GENERAL').length === 8 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'COMPUTER_SCIENCE',
        'G5',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G5', 'SA', 'PUBLIC', 'BUSINESS').length === 0 &&
    ['G1', 'G2', 'G3', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('COMPUTER_SCIENCE', grade, 'SA', 'PUBLIC', 'GENERAL')
        .every((lecture) => !lecture.id.startsWith('saudi-g5-digital-skills-'))
    ),
  'Saudi Grade 5 Digital Skills is restricted to the verified public General-track pathway'
);
const grade5DigitalSkillsTextbook = getNationalTextbookInfo(
  'SA',
  'COMPUTER_SCIENCE',
  'G5',
  'GENERAL',
  'ar',
  'PUBLIC'
);
assert(
  grade5DigitalSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade5DigitalSkillsTextbook.textbookName.includes('1447هـ') &&
    grade5DigitalSkillsTextbook.textbookName.includes('ص 7–11 و239–241') &&
    grade5DigitalSkillsTextbook.semester.includes('الجزآن الأول والثاني') &&
    getNationalSubjectLabel('COMPUTER_SCIENCE', 'SA', 'G5', 'ar', 'PUBLIC', 'GENERAL') ===
      'المهارات الرقمية (الصف الخامس)' &&
    isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicG5DigitalSkillsAvailable('SA', 'G5', 'PRIVATE', 'GENERAL'),
  'Grade 5 metadata discloses both parts, the 1448/1447 edition-year difference, and strict public General-track eligibility'
);
console.log('\n--- 7a. Verifying Saudi Grade 3 Life and Family Skills against the 1448 textbook ---');
const saudiGrade3LifeSkills = loadSubjectLectures('LIFE_SKILLS', 'SA', 'G3', 'PUBLIC', 'GENERAL');
const officialSaudiG3LifeSkillsContents = [
 ['صحتي وسلامتي', 'معاني الرموز الإرشادية', 10],
 ['صحتي وسلامتي', 'السلامة في تناول الدواء', 18],
 ['صحتي وسلامتي', 'القامة الصحيحة', 25],
 ['صحتي وسلامتي', 'حمل الأشياء بطريقة صحيحة', 35],
 ['شخصيتي', 'كيف أتصرف إذا خرج والداي من المنزل؟', 46],
 ['شخصيتي', 'كيف أتصرف بملابسي التي لا أحتاجها؟', 55]
];
assert(
 SAUDI_G3_LIFE_SKILLS_UNIT_COUNT === 2 &&
   SAUDI_G3_LIFE_SKILLS_LESSON_COUNT === 6 &&
   JSON.stringify(SAUDI_G3_LIFE_SKILLS_TABLE_OF_CONTENTS.map(({ unitTitleAr, titleAr, page }) => [
     unitTitleAr,
     titleAr,
     page
   ])) === JSON.stringify(officialSaudiG3LifeSkillsContents) &&
   JSON.stringify(saudiGrade3LifeSkills.map((lecture) => lecture.unitTitleAr)) === JSON.stringify([
     'صحتي وسلامتي',
     'شخصيتي'
   ]),
 'Saudi public Grade 3 Life and Family Skills maps both indexed units and all six lessons in official order'
);
assert(
 SAUDI_G3_LIFE_SKILLS_TEXTBOOK_URL ===
   'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-tfml-part1.pdf' &&
   getCurriculumForSubject('LIFE_SKILLS', 'G3', 'SA', 'PUBLIC', 'GENERAL').length === 2 &&
   getCurriculumForSubject('LIFE_SKILLS', 'G3', 'SA', 'PUBLIC', 'BUSINESS').length === 0 &&
   getCurriculumForSubject('LIFE_SKILLS', 'G3', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
   getCurriculumForSubject('LIFE_SKILLS', 'G3', 'EG', 'PUBLIC', 'GENERAL').length === 0,
 'Verified Grade 3 Life and Family Skills is only routed to Saudi public General-track students'
);
assert(
 SAUDI_G3_LIFE_SKILLS_LECTURES.reduce(
   (count, lecture) => count + (lecture.sections?.length ?? 0), 0
 ) === 6 &&
   SAUDI_G3_LIFE_SKILLS_LECTURES.every((lecture) =>
     lecture.gradeLevel === 'G3' &&
     lecture.subject === 'LIFE_SKILLS' &&
     lecture.country === 'SA' &&
     lecture.educationType === 'PUBLIC' &&
     lecture.educationTrack === 'GENERAL' &&
     lecture.sections?.every((section) =>
       section.diagram?.diagramType === 'life_skills' &&
       section.diagram.visualSteps?.length === 4 &&
       section.diagram.titleAr.includes(section.titleAr) &&
       section.contentAr.includes('ليس نقلًا من متن الكتاب')
     ) &&
     (lecture.assessment.questions?.length ?? 0) > 0
   ) &&
   SAUDI_G3_LIFE_SKILLS_TABLE_OF_CONTENTS.every(({ unitTitleAr, titleAr, page }) =>
     saudiGrade3LifeSkills.some((lecture) =>
       lecture.unitTitleAr === unitTitleAr &&
       lecture.sections?.some((section) =>
         section.titleAr === titleAr &&
         section.contentAr.includes(`ص ${page}.`)
       )
     )
   ),
 'Every indexed Grade 3 Life and Family Skills lesson has its page, original visual, and unit assessment'
);
const grade3LifeSkillsTextbook = getNationalTextbookInfo(
 'SA', 'LIFE_SKILLS', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
 grade3LifeSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
   grade3LifeSkillsTextbook.textbookName.includes('1446هـ') &&
   grade3LifeSkillsTextbook.textbookName.includes('الجزء الأول') &&
   grade3LifeSkillsTextbook.semester.includes('الجزء الأول') &&
   getNationalSubjectLabel('LIFE_SKILLS', 'SA', 'G3', 'ar', 'PUBLIC', 'GENERAL') ===
     'المهارات الحياتية والأسرية (الصف الثالث)' &&
   isSaudiPublicG3LifeSkillsAvailable('SA', 'G3', 'PUBLIC', 'GENERAL') &&
   isSaudiPublicLifeSkillsAvailable('SA', 'G3', 'PUBLIC', 'GENERAL') &&
   !isSaudiPublicG3LifeSkillsAvailable('SA', 'G3', 'PUBLIC', 'BUSINESS') &&
   !isSaudiPublicG3LifeSkillsAvailable('SA', 'G3', 'PRIVATE', 'GENERAL'),
 'Grade 3 Life and Family Skills metadata discloses the edition discrepancy and Part One with strict eligibility'
);
const previousG3LifeSkillsStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const g3LifeSkillsStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
 configurable: true,
 value: {
   getItem: (key: string) => g3LifeSkillsStorage.get(key) ?? null,
   setItem: (key: string, value: string) => { g3LifeSkillsStorage.set(key, value); },
   removeItem: (key: string) => { g3LifeSkillsStorage.delete(key); },
   clear: () => g3LifeSkillsStorage.clear()
 }
});
try {
 const staleG3LifeSkillsLecture = {
   ...SAUDI_G3_LIFE_SKILLS_LECTURES[0],
   titleAr: 'محتوى أسري قديم غير مطابق'
 };
 g3LifeSkillsStorage.set(
   'TEACHER_AI_LECTURES_V5_SA_PUBLIC_LIFE_SKILLS_G3_GENERAL',
   JSON.stringify([staleG3LifeSkillsLecture])
 );
 g3LifeSkillsStorage.set(
   'TEACHER_AI_SHARED_LECS_SA_PUBLIC_LIFE_SKILLS_G3_GENERAL',
   JSON.stringify([staleG3LifeSkillsLecture])
 );
 assert(
   loadSubjectLectures('LIFE_SKILLS', 'SA', 'G3', 'PUBLIC', 'GENERAL').length === 2 &&
     !loadSubjectLectures('LIFE_SKILLS', 'SA', 'G3', 'PUBLIC', 'GENERAL')
       .some((lecture) => lecture.titleAr === 'محتوى أسري قديم غير مطابق'),
   'Verified Grade 3 Life and Family Skills ignores stale and shared cached content'
 );
} finally {
 if (previousG3LifeSkillsStorage) {
   Object.defineProperty(globalThis, 'localStorage', previousG3LifeSkillsStorage);
 } else {
   Reflect.deleteProperty(globalThis, 'localStorage');
 }
}

console.log('\n--- 7b. Verifying Saudi Grade 4 Life and Family Skills against the 1448 textbook ---');
const saudiGrade4LifeSkills = loadSubjectLectures('LIFE_SKILLS', 'SA', 'G4', 'PUBLIC', 'GENERAL');
const officialSaudiG4LifeSkillsContents = [
  ['صحتي وسلامتي', 'نظافة الجسم والسلامة أثناء الاستحمام', 11],
  ['صحتي وسلامتي', 'سلامة العينين والأذنين', 18],
  ['صحتي وسلامتي', 'العناية بالفم والأسنان', 27],
  ['مهاراتي في الحياة', 'كيف تنظم وقتك؟', 43],
  ['مهاراتي في الحياة', 'كيف تكون مجتهدًا في الصف؟', 47],
  ['مسكني', 'غرفتي', 61],
  ['ملبسي', 'الملابس المدرسية والملابس الداخلية', 73],
  ['ملبسي', 'الجوارب والحذاء', 78],
  ['غذائي', 'الخضراوات', 93],
  ['غذائي', 'الفواكه', 101]
];
assert(
  SAUDI_G4_LIFE_SKILLS_UNIT_COUNT === 5 &&
    SAUDI_G4_LIFE_SKILLS_LESSON_COUNT === 10 &&
    JSON.stringify(SAUDI_G4_LIFE_SKILLS_TABLE_OF_CONTENTS.map(({ unitTitleAr, titleAr, page }) => [
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(officialSaudiG4LifeSkillsContents) &&
    JSON.stringify(saudiGrade4LifeSkills.map((lecture) => lecture.unitTitleAr)) === JSON.stringify([
      'صحتي وسلامتي',
      'مهاراتي في الحياة',
      'مسكني',
      'ملبسي',
      'غذائي'
    ]),
  'Saudi public Grade 4 Life and Family Skills maps all 5 indexed units and 10 lessons in official order'
);
assert(
  SAUDI_G4_LIFE_SKILLS_TEXTBOOK_URL ===
    'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-tfml.pdf' &&
    getCurriculumForSubject('LIFE_SKILLS', 'G4', 'SA', 'PUBLIC', 'GENERAL').length === 5 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G4', 'SA', 'PUBLIC', 'BUSINESS').length === 0 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G4', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G4', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Verified Grade 4 Life and Family Skills is only routed to Saudi public General-track students'
);
assert(
  SAUDI_G4_LIFE_SKILLS_LECTURES.reduce(
    (count, lecture) => count + (lecture.sections?.length ?? 0), 0
  ) === 10 &&
    SAUDI_G4_LIFE_SKILLS_LECTURES.every((lecture) =>
      lecture.gradeLevel === 'G4' &&
      lecture.subject === 'LIFE_SKILLS' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.sections?.every((section) =>
        section.diagram?.diagramType === 'life_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.diagram.titleAr.includes(section.titleAr) &&
        section.contentAr.includes('ليس نقلًا من متن الكتاب')
      ) &&
      (lecture.assessment.questions?.length ?? 0) > 0
    ) &&
    SAUDI_G4_LIFE_SKILLS_TABLE_OF_CONTENTS.every(({ unitTitleAr, titleAr, page }) =>
      saudiGrade4LifeSkills.some((lecture) =>
        lecture.unitTitleAr === unitTitleAr &&
        lecture.sections?.some((section) =>
          section.titleAr === titleAr &&
          section.contentAr.includes(`ص ${page}.`)
        )
      )
    ),
  'Every indexed Grade 4 Life and Family Skills lesson has its page, original visual, and unit assessment'
);
const grade4LifeSkillsTextbook = getNationalTextbookInfo(
  'SA', 'LIFE_SKILLS', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  grade4LifeSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade4LifeSkillsTextbook.textbookName.includes('1446هـ') &&
    grade4LifeSkillsTextbook.textbookName.includes('الجزء الأول') &&
    grade4LifeSkillsTextbook.semester.includes('الجزء الأول') &&
    getNationalSubjectLabel('LIFE_SKILLS', 'SA', 'G4', 'ar', 'PUBLIC', 'GENERAL') ===
      'المهارات الحياتية والأسرية (الصف الرابع)' &&
    isSaudiPublicG4LifeSkillsAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    isSaudiPublicLifeSkillsAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4LifeSkillsAvailable('SA', 'G4', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicG4LifeSkillsAvailable('SA', 'G4', 'PRIVATE', 'GENERAL'),
  'Grade 4 Life and Family Skills metadata discloses the edition discrepancy and Part One with strict eligibility'
);
const previousG4LifeSkillsStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const g4LifeSkillsStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => g4LifeSkillsStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { g4LifeSkillsStorage.set(key, value); },
    removeItem: (key: string) => { g4LifeSkillsStorage.delete(key); },
    clear: () => g4LifeSkillsStorage.clear()
  }
});
try {
  const staleG4LifeSkillsLecture = {
    ...SAUDI_G4_LIFE_SKILLS_LECTURES[0],
    titleAr: 'محتوى أسري قديم غير مطابق'
  };
  g4LifeSkillsStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_LIFE_SKILLS_G4_GENERAL',
    JSON.stringify([staleG4LifeSkillsLecture])
  );
  g4LifeSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_LIFE_SKILLS_G4_GENERAL',
    JSON.stringify([staleG4LifeSkillsLecture])
  );
  assert(
    loadSubjectLectures('LIFE_SKILLS', 'SA', 'G4', 'PUBLIC', 'GENERAL').length === 5 &&
      !loadSubjectLectures('LIFE_SKILLS', 'SA', 'G4', 'PUBLIC', 'GENERAL')
        .some((lecture) => lecture.titleAr === 'محتوى أسري قديم غير مطابق'),
    'Verified Grade 4 Life and Family Skills ignores stale and shared cached content'
  );
} finally {
  if (previousG4LifeSkillsStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousG4LifeSkillsStorage);
  } else {
    Reflect.deleteProperty(globalThis, 'localStorage');
  }
}

const saudiGrade6LifeSkills = loadSubjectLectures('LIFE_SKILLS', 'SA', 'G6', 'PUBLIC', 'GENERAL');
const officialSaudiG6LifeSkillsContents = [
  ['صحتي وسلامتي', 'بشرتي', 11],
  ['صحتي وسلامتي', 'العناية بشعري وأظفاري', 17],
  ['صحتي وسلامتي', 'التعامل مع الأجهزة الإلكترونية', 23],
  ['مسكني', 'الحوادث داخل المنزل', 37],
  ['ملبسي', 'اختيار الملابس', 55],
  ['بيئتي', 'التخلص من النفايات الصلبة', 69],
  ['غذائي', 'القهوة', 83],
  ['غذائي', 'التمر', 87]
];
assert(
  SAUDI_G6_LIFE_SKILLS_UNIT_COUNT === 5 &&
    SAUDI_G6_LIFE_SKILLS_LESSON_COUNT === 8 &&
    JSON.stringify(SAUDI_G6_LIFE_SKILLS_TABLE_OF_CONTENTS.map(({ unitTitleAr, titleAr, page }) => [
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(officialSaudiG6LifeSkillsContents) &&
    JSON.stringify(saudiGrade6LifeSkills.map((lecture) => lecture.unitTitleAr)) === JSON.stringify([
      'صحتي وسلامتي',
      'مسكني',
      'ملبسي',
      'بيئتي',
      'غذائي'
    ]),
  'Saudi public Grade 6 Life and Family Skills maps all 5 indexed units and 8 lessons in official order'
);
assert(
  SAUDI_G6_LIFE_SKILLS_TEXTBOOK_URL ===
    'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-tfml.pdf' &&
    getCurriculumForSubject('LIFE_SKILLS', 'G6', 'SA', 'PUBLIC', 'GENERAL').length === 5 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G6', 'SA', 'PUBLIC', 'BUSINESS').length === 0 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G6', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G6', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Verified Grade 6 Life and Family Skills is only routed to Saudi public General-track students'
);
assert(
  SAUDI_G6_LIFE_SKILLS_LECTURES.reduce((count, lecture) => count + (lecture.sections?.length ?? 0), 0) === 8 &&
    SAUDI_G6_LIFE_SKILLS_LECTURES.every((lecture) =>
      lecture.sections?.every((section) =>
        section.diagram?.diagramType === 'life_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.diagram.titleAr.includes(section.titleAr)
      ) &&
      (lecture.assessment.questions?.length ?? 0) > 0
    ),
  'Each indexed Life and Family Skills lesson has an original illustration and its unit has an assessment'
);
const grade6LifeSkillsTextbook = getNationalTextbookInfo(
  'SA',
  'LIFE_SKILLS',
  'G6',
  'GENERAL',
  'ar',
  'PUBLIC'
);
assert(
  grade6LifeSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade6LifeSkillsTextbook.textbookName.includes('1446هـ') &&
    grade6LifeSkillsTextbook.textbookName.includes('الجزء الأول') &&
    grade6LifeSkillsTextbook.semester.includes('الجزء الأول') &&
    getNationalSubjectLabel('LIFE_SKILLS', 'SA', 'G6', 'ar', 'PUBLIC', 'GENERAL') ===
      'المهارات الحياتية والأسرية (الصف السادس)' &&
    isSaudiPublicG6LifeSkillsAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6LifeSkillsAvailable('SA', 'G6', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicG6LifeSkillsAvailable('SA', 'G6', 'PRIVATE', 'GENERAL'),
  'Life and Family Skills metadata discloses the edition discrepancy and Part One with strict eligibility'
);
const saudiGrade5LifeSkills = getCurriculumForSubject(
  'LIFE_SKILLS', 'G5', 'SA', 'PUBLIC', 'GENERAL'
);
const officialSaudiG5LifeSkillsContents = [
  ['صحتي وسلامتي', 'العلامات الحيوية في الجسم (درجة الحرارة - النبض)', 11],
  ['صحتي وسلامتي', 'التعامل مع الأدوية', 17],
  ['مهاراتي في الحياة', 'كيف تذاكر؟', 29],
  ['مهاراتي في الحياة', 'كيف تجيب عن أسئلة الاختبار؟', 37],
  ['مسكني', 'المسكن الصحي', 51],
  ['مجتمعي', 'آداب التعامل خارج المنزل', 69],
  ['غذائي', 'العناصر الغذائية', 89],
  ['غذائي', 'البيض', 98],
];
assert(
  SAUDI_G5_LIFE_SKILLS_UNIT_COUNT === 5 &&
    SAUDI_G5_LIFE_SKILLS_LESSON_COUNT === 8 &&
    JSON.stringify(SAUDI_G5_LIFE_SKILLS_TABLE_OF_CONTENTS.map(({ unitTitleAr, titleAr, page }) => [
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(officialSaudiG5LifeSkillsContents) &&
    SAUDI_G5_LIFE_SKILLS_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-tfml.pdf' &&
    saudiGrade5LifeSkills.length === 5 &&
    JSON.stringify(saudiGrade5LifeSkills.map((lecture) => lecture.unitTitleAr)) === JSON.stringify([
      'صحتي وسلامتي',
      'مهاراتي في الحياة',
      'مسكني',
      'مجتمعي',
      'غذائي'
    ]) &&
    SAUDI_G5_LIFE_SKILLS_LECTURES.reduce(
      (count, lecture) => count + (lecture.sections?.length ?? 0), 0
    ) === 8 &&
    SAUDI_G5_LIFE_SKILLS_LECTURES.every((lecture) =>
      lecture.subject === 'LIFE_SKILLS' &&
      lecture.gradeLevel === 'G5' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.summaryAr?.includes('1446هـ') &&
      lecture.summaryAr?.includes('كامل غير مجزأ') &&
      lecture.sections?.every((section) =>
        section.diagram?.diagramType === 'life_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.diagram.titleAr.includes(section.titleAr) &&
        section.contentAr.includes('ليس نقلًا من متن الكتاب')
      ) &&
      lecture.assessment.questions.length === 1
    ) &&
    SAUDI_G5_LIFE_SKILLS_TABLE_OF_CONTENTS.every(({ unitTitleAr, titleAr, page }) =>
      saudiGrade5LifeSkills.some((lecture) =>
        lecture.unitTitleAr === unitTitleAr &&
        lecture.sections?.some((section) =>
          section.titleAr === titleAr &&
          section.contentAr.includes(`ص ${page}.`)
        )
      )
    ),
  'Saudi public Grade 5 Life and Family Skills maps all 5 indexed units and 8 lessons, pages, diagrams, and reviews'
);
const grade5LifeSkillsTextbook = getNationalTextbookInfo(
  'SA', 'LIFE_SKILLS', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  grade5LifeSkillsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade5LifeSkillsTextbook.textbookName.includes('1446هـ') &&
    grade5LifeSkillsTextbook.textbookName.includes('كامل غير مجزأ') &&
  getNationalTextbookInfo('SA', 'LIFE_SKILLS', 'G5', 'GENERAL', 'ar', 'PRIVATE').textbookName.includes('الصف الخامس') &&
  !getNationalTextbookInfo('SA', 'LIFE_SKILLS', 'G5', 'GENERAL', 'ar', 'PRIVATE').textbookName.includes('الصف السادس') &&
    grade5LifeSkillsTextbook.semester.includes('كتاب كامل غير مجزأ') &&
    getNationalSubjectLabel('LIFE_SKILLS', 'SA', 'G5', 'ar', 'PUBLIC', 'GENERAL') ===
      'المهارات الحياتية والأسرية (الصف الخامس)' &&
    isSaudiPublicG5LifeSkillsAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    isSaudiPublicLifeSkillsAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    isSaudiPublicLifeSkillsAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5LifeSkillsAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicLifeSkillsAvailable('SA', 'G5', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicLifeSkillsAvailable('SA', 'G5', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicLifeSkillsAvailable('SA', 'G5', 'INTERNATIONAL', 'GENERAL') &&
    !isSaudiPublicLifeSkillsAvailable('EG', 'G5', 'PUBLIC', 'GENERAL') &&
    getCurriculumForSubject('LIFE_SKILLS', 'G5', 'SA', 'PUBLIC', 'BUSINESS').length === 0 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G5', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
    getCurriculumForSubject('LIFE_SKILLS', 'G5', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Grade 5 Life and Family Skills metadata discloses the undivided edition and limits the route to Saudi public General profiles'
);
const previousG5LifeSkillsStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const g5LifeSkillsStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => g5LifeSkillsStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { g5LifeSkillsStorage.set(key, value); },
    removeItem: (key: string) => { g5LifeSkillsStorage.delete(key); },
    clear: () => g5LifeSkillsStorage.clear()
  }
});
try {
  const staleG5LifeSkillsLecture = {
    ...SAUDI_G5_LIFE_SKILLS_LECTURES[0],
    titleAr: 'محتوى أسري قديم غير مطابق'
  };
  g5LifeSkillsStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_LIFE_SKILLS_G5_GENERAL',
    JSON.stringify([staleG5LifeSkillsLecture])
  );
  g5LifeSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_LIFE_SKILLS_G5_GENERAL',
    JSON.stringify([staleG5LifeSkillsLecture])
  );
  assert(
    loadSubjectLectures('LIFE_SKILLS', 'SA', 'G5', 'PUBLIC', 'GENERAL').length === 5 &&
      !loadSubjectLectures('LIFE_SKILLS', 'SA', 'G5', 'PUBLIC', 'GENERAL')
        .some((lecture) => lecture.titleAr === 'محتوى أسري قديم غير مطابق'),
    'Verified Grade 5 Life and Family Skills ignores stale and shared cached content'
  );
} finally {
  if (previousG5LifeSkillsStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousG5LifeSkillsStorage);
  } else {
    Reflect.deleteProperty(globalThis, 'localStorage');
  }
}
const previousG6LifeSkillsStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const g6LifeSkillsStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => g6LifeSkillsStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { g6LifeSkillsStorage.set(key, value); },
    removeItem: (key: string) => { g6LifeSkillsStorage.delete(key); },
    clear: () => g6LifeSkillsStorage.clear()
  }
});
try {
  const staleLifeSkillsLecture = {
    ...SAUDI_G6_LIFE_SKILLS_LECTURES[0],
    titleAr: 'محتوى أسري قديم غير مطابق'
  };
  g6LifeSkillsStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_LIFE_SKILLS_G6_GENERAL',
    JSON.stringify([staleLifeSkillsLecture])
  );
  g6LifeSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_LIFE_SKILLS_G6_GENERAL',
    JSON.stringify([staleLifeSkillsLecture])
  );
  assert(
    loadSubjectLectures('LIFE_SKILLS', 'SA', 'G6', 'PUBLIC', 'GENERAL').length === 5 &&
      !loadSubjectLectures('LIFE_SKILLS', 'SA', 'G6', 'PUBLIC', 'GENERAL')
        .some((lecture) => lecture.titleAr === 'محتوى أسري قديم غير مطابق'),
    'Verified Life and Family Skills ignores stale cached course content'
  );
} finally {
  if (previousG6LifeSkillsStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousG6LifeSkillsStorage);
  } else {
    Reflect.deleteProperty(globalThis, 'localStorage');
  }
}
const previousG6DigitalSkillsStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const g6DigitalSkillsStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => g6DigitalSkillsStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { g6DigitalSkillsStorage.set(key, value); },
    removeItem: (key: string) => { g6DigitalSkillsStorage.delete(key); },
    clear: () => g6DigitalSkillsStorage.clear()
  }
});
try {
  const staleDigitalSkillsLecture = {
    ...SAUDI_G6_DIGITAL_SKILLS_LECTURES[0],
    titleAr: 'منهج قديم غير مطابق لفهرس 1448'
  };
  g6DigitalSkillsStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_COMPUTER_SCIENCE_G6_GENERAL',
    JSON.stringify([staleDigitalSkillsLecture])
  );
  g6DigitalSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_COMPUTER_SCIENCE_G6_GENERAL',
    JSON.stringify([staleDigitalSkillsLecture])
  );
  assert(
    loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G6', 'PUBLIC', 'GENERAL').length === 8 &&
      !loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G6', 'PUBLIC', 'GENERAL')
        .some((lecture) => lecture.titleAr === 'منهج قديم غير مطابق لفهرس 1448'),
    'Saudi Grade 6 official Digital Skills ignores stale saved and shared lecture content'
  );
  g6DigitalSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_COMPUTER_SCIENCE_G6_BUSINESS',
    JSON.stringify([staleDigitalSkillsLecture])
  );
  assert(
    loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G6', 'PUBLIC', 'BUSINESS').length === 0,
    'Saudi Grade 6 Digital Skills blocks cached content on an ineligible education track'
  );
} finally {
  if (previousG6DigitalSkillsStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousG6DigitalSkillsStorage);
  } else {
    Reflect.deleteProperty(globalThis, 'localStorage');
  }
}
const previousG5DigitalSkillsStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const g5DigitalSkillsStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => g5DigitalSkillsStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { g5DigitalSkillsStorage.set(key, value); },
    removeItem: (key: string) => { g5DigitalSkillsStorage.delete(key); },
    clear: () => g5DigitalSkillsStorage.clear()
  }
});
try {
  const staleDigitalSkillsLecture = {
    ...SAUDI_G5_DIGITAL_SKILLS_LECTURES[0],
    titleAr: 'منهج قديم غير مطابق لفهرس الصف الخامس'
  };
  g5DigitalSkillsStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_COMPUTER_SCIENCE_G5_GENERAL',
    JSON.stringify([staleDigitalSkillsLecture])
  );
  g5DigitalSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_COMPUTER_SCIENCE_G5_GENERAL',
    JSON.stringify([staleDigitalSkillsLecture])
  );
  assert(
    loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G5', 'PUBLIC', 'GENERAL').length === 8 &&
      !loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G5', 'PUBLIC', 'GENERAL')
        .some((lecture) => lecture.titleAr === 'منهج قديم غير مطابق لفهرس الصف الخامس'),
    'Saudi Grade 5 official Digital Skills ignores stale saved and shared lecture content'
  );
  g5DigitalSkillsStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_COMPUTER_SCIENCE_G5_BUSINESS',
    JSON.stringify([staleDigitalSkillsLecture])
  );
  assert(
    loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G5', 'PUBLIC', 'BUSINESS').length === 0,
    'Saudi Grade 5 Digital Skills blocks cached content on an ineligible education track'
  );
} finally {
  if (previousG5DigitalSkillsStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousG5DigitalSkillsStorage);
  } else {
    Reflect.deleteProperty(globalThis, 'localStorage');
  }
}
assert(
  getCurriculumForSubject('COMPUTER_SCIENCE', 'G3', 'SA', 'PUBLIC').length === 0,
  'Saudi public Grades 1–3 do not fall back to an unrelated high-school computer-science course'
);
assert(
  saudiPrimaryDigitalSkills[0].every((lecture) =>
    lecture.summaryAr?.includes('طوبقت مع فهرس PDF ص 7–10') &&
    lecture.summaryAr.includes('لم تراجع صفحات متن الدروس')
  ) &&
    [saudiSecondaryDigitalTechnology[0], saudiSecondaryDigitalTechnology[2]].every((lectures) =>
      lectures.every((lecture) => lecture.summaryAr?.includes('ليس ادعاءً بمطابقة كتاب مقرر سعودي'))
    ),
  'Grade 4 and secondary digital-skills content clearly disclose textbook verification scope'
);
assert(
  saudiDigitalSkillsLectures.every((lecture) =>
    lecture.sections?.some((section) => (section.diagram?.visualSteps?.length ?? 0) > 0) &&
    (lecture.assessment.questions?.length ?? 0) > 0
  ),
  'Every Saudi digital-skills lecture has a non-empty illustration and assessment'
);
assert(
  !loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G4', 'PRIVATE').some((lecture) => lecture.id.startsWith('sa-ds4-')),
  'Saudi primary supplementary digital-skills content is not routed to private-school profiles'
);
assert(
  isSaudiPublicBusinessG11DigitalTechnologyAvailable('SA', 'G11', 'PUBLIC', 'BUSINESS') &&
    !isSaudiPublicBusinessG11DigitalTechnologyAvailable('SA', 'G11', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicBusinessG11DigitalTechnologyAvailable('SA', 'G11', 'PRIVATE', 'BUSINESS') &&
    !isSaudiPublicBusinessG11DigitalTechnologyAvailable('EG', 'G11', 'PUBLIC', 'BUSINESS'),
  'Saudi Digital Technology 2 is restricted to public Grade 11 Business Management'
);
assert(
  SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TEXTBOOK_URL ===
    'https://iencontent.ien.edu.sa/books/1448-GE-CBM-BM-TRC2-SM1-mcomp.pdf' &&
    SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LESSON_COUNT === 18 &&
    SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TABLE_OF_CONTENTS.length === 18 &&
    JSON.stringify(SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TABLE_OF_CONTENTS.map(({ page, practicePage }) => [page, practicePage])) ===
      JSON.stringify([[11, 23], [25, 42], [45, 59], [65, 72], [75, 86], [87, 92], [97, 115], [118, 132], [134, 146], [151, 163], [165, 179], [181, 197], [205, 211], [213, 228], [232, 250], [252, 269], [275, 293], [301, 311]]),
  'Verified Digital Technology 2 records its official source and all 18 lessons from the contents'
);
const businessDigitalTechnologyTextbook = getNationalTextbookInfo(
  'SA',
  'COMPUTER_SCIENCE',
  'G11',
  'BUSINESS',
  'ar',
  'PUBLIC'
);
const businessDigitalTechnologyTitles = [
  'البيانات والمعلومات والمعرفة',
  'جمع البيانات والتحقق من صحتها',
  'التنبؤ باستخدام إكسل',
  'مفاهيم الذكاء الاصطناعي',
  'تطبيقات الذكاء الاصطناعي',
  'الذكاء الاصطناعي باستخدام البرمجة',
  'التصميم الرسومي',
  'تصميم ملصق إعلاني',
  'الإعلانات المتحركة',
  'مفهوم التسويق الإلكتروني',
  'التسويق عبر البريد الإلكتروني',
  'حملة التسويق عبر البريد الإلكتروني',
  'التنسيق باستخدام وسوم HTML',
  'تصميم صفحات التنسيق النمطية',
  'تصميم الموقع الإلكتروني',
  'التصميم المستجيب للمواقع الإلكترونية',
  'الموقع الإلكتروني التفاعلي',
  'الرسائل الإخبارية الرقمية'
];
assert(
  JSON.stringify(SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TABLE_OF_CONTENTS.map(({ titleAr }) => titleAr)) ===
    JSON.stringify(businessDigitalTechnologyTitles) &&
    [3, 3, 3, 3, 6].every((count, unitIndex) =>
      SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TABLE_OF_CONTENTS.filter((lesson) =>
        lesson.unitAr.startsWith(`الوحدة ${['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'][unitIndex]}`)
      ).length === count
    ),
  'Business-track lesson order and five-unit distribution match the official contents'
);
assert(
  businessDigitalTechnologyTextbook.textbookName.includes('1448هـ/2026م') &&
    businessDigitalTechnologyTextbook.textbookName.includes('BM') &&
    businessDigitalTechnologyTextbook.semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('COMPUTER_SCIENCE', 'SA', 'G11', 'ar', 'PUBLIC', 'BUSINESS') ===
      'التقنية الرقمية 2 (مسار إدارة الأعمال)',
  'Saudi Grade 11 Business digital-technology label and textbook metadata identify the verified BM edition'
);
assert(
  (['GENERAL', 'CS_ENGINEERING', 'HEALTH_LIFE', 'SHARIA_HUMANITIES'] as EducationTrack[]).every((track) =>
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G11', 'SA', 'PUBLIC', track).length === 0
  ) &&
    getCurriculumForSubject('COMPUTER_SCIENCE', 'G11', 'SA', 'PRIVATE', 'BUSINESS').length === 0,
  'The BM edition is not exposed to other Saudi tracks or non-public education'
);
assert(
  SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LECTURES.every((lecture) =>
    lecture.summaryAr.includes(SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TEXTBOOK_URL) &&
    lecture.summaryAr.includes('1448هـ/2026م') &&
    lecture.sections?.some((section) =>
      section.diagram?.diagramType === 'digital_skills' &&
      section.diagram.visualSteps?.length === 4
    ) &&
    lecture.assessment.questions.length > 0
  ),
  'Every verified Business-track digital-technology lesson cites the book and has an original illustration and assessment'
);
const saudiInternationalGrade9ComputerScience = getCurriculumForSubject(
  'COMPUTER_SCIENCE', 'G9', 'SA', 'INTERNATIONAL'
);
const egyptianGrade9ComputerScience = getCurriculumForSubject('COMPUTER_SCIENCE', 'G9', 'EG');
const saudiInternationalGrade8ComputerScience = getCurriculumForSubject(
  'COMPUTER_SCIENCE', 'G8', 'SA', 'INTERNATIONAL'
);
const egyptianGrade8ComputerScience = getCurriculumForSubject('COMPUTER_SCIENCE', 'G8', 'EG');
const officialSaudiGrade8LessonTitles = [
  'الوسائط المتعددة', 'إنشاء فيلم', 'التأثيرات البصرية',
  'مقدمة إلى مخطط المعلومات البياني', 'تخصيص التصميم',
  'المعاملات الشرطية والمعاملات المنطقية في بايثون', 'الجمل الشرطية في البايثون', 'اتخاذ القرارات',
  'الشروط المتداخلة', 'الحلقات', 'الحلقات المتداخلة', 'الدوال', 'جداول بيانات إكسل في بايثون',
  'قواعد البيانات والنماذج', 'التعامل مع قاعدة البيانات',
  'العمليات الحسابية المركّبة', 'الدوال والمراجع',
  'أساسيات الشبكات', 'أدوات التواصل والمواطنة الرقمية',
  'المخططات البيانية المتقدمة', 'التعامل مع المخططات البيانية',
  'التحكم في الروبوت', 'البرمجة التركيبية'
];
const officialSaudiGrade8UnitTitles = [
  'إنتاج مقطع فيديو', 'مخطط المعلومات البياني', 'البرمجة مع بايثون',
  'جمع المعلومات', 'تحليل البيانات', 'التواصل عبر الإنترنت',
  'المخططات البيانية', 'برمجة الروبوت'
];
const routedSaudiGrade8LessonTitles = saudiGrade8DigitalSkills
  .flatMap((lecture) => lecture.sections || [])
  .filter((section) => !section.titleAr.includes('الذكاء الاصطناعي'))
  .map((section) => section.titleAr);
const saudiGrade8TextbookName = getNationalTextbookInfo('SA', 'COMPUTER_SCIENCE', 'G8').textbookName;
const saudiGrade8DigitalSkillsText = saudiGrade8DigitalSkills
  .map((lecture) =>
    `${lecture.titleAr} ${lecture.subtitleAr} ${lecture.unitTitleAr} ${lecture.descriptionAr} ${
      lecture.sections?.map((section) => `${section.titleAr} ${section.contentAr}`).join(' ') || ''
    }`
  )
  .join(' ');

assert(
  saudiGrade8TextbookName.includes('المهارات الرقمية') && saudiGrade8TextbookName.includes('الصف الثاني المتوسط'),
  'Saudi G8 curriculum identifies the official Grade 8 Digital Skills textbook'
);
assert(
  SAUDI_G8_DIGITAL_SKILLS_LESSON_COUNT === 23 &&
    JSON.stringify(SAUDI_G8_DIGITAL_SKILLS_LECTURES.map((lecture) => lecture.unitTitleAr)) === JSON.stringify(officialSaudiGrade8UnitTitles) &&
    JSON.stringify(routedSaudiGrade8LessonTitles) === JSON.stringify(officialSaudiGrade8LessonTitles),
  'Saudi G8 public curriculum maps all 8 official units and 23 lessons in textbook order'
);
assert(
  SAUDI_G8_DIGITAL_SKILLS_TEXTBOOK_URL === 'https://iencontent.ien.edu.sa/books/1448-GE-ME-K08-SM1-mcomp.pdf',
  'Saudi G8 curriculum crosswalk cites the current IEN-hosted 1448–2026 textbook'
);
assert(
  SAUDI_G8_DIGITAL_SKILLS_LECTURES.every((lecture) =>
    lecture.sections?.filter((section) => section.titleAr !== 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)')
      .every((section) => section.diagram?.diagramType === 'digital_skills' && section.diagram.visualSteps?.length === 4)
  ),
  'Every numbered Saudi G8 lesson includes an original four-step visual illustration'
);
assert(
  SAUDI_G8_DIGITAL_SKILLS_LECTURES[7].sections?.at(-1)?.diagram?.visualSteps?.length === 4,
  'The Saudi G8 AI enrichment section includes its own original visual illustration'
);
assert(
  !/HTML5?|CSS|JavaScript|DOM|Web Development|AP Computer Science|Big-O/i.test(saudiGrade8DigitalSkillsText),
  'Saudi G8 public curriculum excludes web-development and advanced content from the previous bank'
);
assert(
  !saudiInternationalGrade8ComputerScience.some((lecture) => lecture.id.startsWith('sa-ds8-')),
  'Saudi international schools do not receive the Saudi public Grade 8 curriculum'
);
assert(
  !egyptianGrade8ComputerScience.some((lecture) => lecture.id.startsWith('sa-ds8-')),
  'Saudi Grade 8 curriculum routing does not replace another country’s course'
);
console.log('\n--- 8. Verifying Saudi Grade 9 Digital Skills against the 1448–2026 IEN textbook ---');
const officialSaudiGrade9UnitTitles = [
  'الأمن السيبراني', 'قواعد البيانات', 'التجارة الإلكترونية', 'البرمجة مع بايثون'
];
const officialSaudiGrade9LessonTitles = [
  'مقدمة في الأمن السيبراني', 'حماية جهاز الحاسب الشخصي',
  'إنشاء قواعد البيانات', 'الاستعلام في قاعدة البيانات', 'التقارير في قواعد البيانات',
  'مقدمة في التجارة الإلكترونية', 'التعاملات عبر الإنترنت',
  'القوائم وصفوف البيانات', 'المكتبات البرمجية', 'بناء الواجهات الرسومية بلغة البايثون',
  'القواميس والقوائم المتداخلة والملفات'
];
const routedSaudiGrade9LessonTitles = saudiGrade9DigitalSkills.flatMap((lecture) =>
  lecture.sections?.map((section) => section.titleAr) || []
);
const saudiGrade9TextbookName = getNationalTextbookInfo('SA', 'COMPUTER_SCIENCE', 'G9').textbookName;
const saudiGrade9CurriculumText = saudiGrade9DigitalSkills
  .map((lecture) =>
    `${lecture.titleAr} ${lecture.subtitleAr} ${lecture.unitTitleAr} ${lecture.descriptionAr} ${
      lecture.sections?.map((section) => `${section.titleAr} ${section.contentAr}`).join(' ') || ''
    }`
  )
  .join(' ');
assert(
  saudiGrade9TextbookName.includes('المهارات الرقمية') &&
    saudiGrade9TextbookName.includes('الصف الثالث المتوسط') &&
    saudiGrade9TextbookName.includes('1448–2026'),
  'Saudi G9 curriculum identifies the current official Digital Skills Part One textbook'
);
assert(
  SAUDI_G9_DIGITAL_SKILLS_LESSON_COUNT === 11 &&
    JSON.stringify(SAUDI_G9_DIGITAL_SKILLS_LECTURES.map((lecture) => lecture.unitTitleAr)) === JSON.stringify(officialSaudiGrade9UnitTitles) &&
    JSON.stringify(routedSaudiGrade9LessonTitles) === JSON.stringify(officialSaudiGrade9LessonTitles),
  'Saudi G9 Part One maps the 4 official units and 11 listed lessons in textbook order'
);
assert(
  SAUDI_G9_DIGITAL_SKILLS_TEXTBOOK_URL === 'https://iencontent.ien.edu.sa/books/1448-GE-ME-K09-SM1-mcomp.pdf',
  'Saudi G9 curriculum crosswalk cites the official IEN-hosted 1448–2026 Part One textbook'
);
assert(
  SAUDI_G9_DIGITAL_SKILLS_LECTURES.every((lecture) =>
    lecture.sections?.every((section) => section.diagram?.diagramType === 'digital_skills' && section.diagram.visualSteps?.length === 4)
  ),
  'Every Saudi G9 Part One lesson includes an original four-step visual illustration'
);
assert(
  !/AP Computer Science|Big-O|التعقيد الزمني|هياكل البيانات|Object-Oriented Programming|Ethical Hacking/i.test(saudiGrade9CurriculumText),
  'Saudi G9 public curriculum excludes advanced and unrelated content from the previous generic bank'
);
assert(
  !saudiInternationalGrade9ComputerScience.some((lecture) => lecture.id.startsWith('sa-ds9-')),
  'Saudi international schools do not receive the Saudi public Grade 9 curriculum'
);
assert(
  !egyptianGrade9ComputerScience.some((lecture) => lecture.id.startsWith('sa-ds9-')),
  'Saudi Grade 9 routing does not replace another country’s course'
);

const previousLocalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const isolationStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => isolationStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { isolationStorage.set(key, value); },
    removeItem: (key: string) => { isolationStorage.delete(key); },
    clear: () => isolationStorage.clear()
  }
});
try {
  const targetDimensions = {
    country: 'EG',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G7',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL'
  } as const;
  const mismatchedDimensions = [
    { ...targetDimensions, country: 'SA' },
    { ...targetDimensions, subject: 'MATH' },
    { ...targetDimensions, gradeLevel: 'G8' },
    { ...targetDimensions, educationType: 'PRIVATE' },
    { ...targetDimensions, educationTrack: 'CS_ENGINEERING' }
  ];
  const contaminatingLectures = mismatchedDimensions.map((dimensions, index) => ({
    ...SAUDI_G7_DIGITAL_SKILLS_LECTURES[0],
    ...dimensions,
    id: `gen-cross-curriculum-leak-${index}`,
    titleAr: 'اختبار تسرب محتوى من منهج آخر',
    isSharedCommunity: true
  }));
  const { educationTrack: _missingTrack, ...legacyLectureWithoutTrack } = SAUDI_G7_DIGITAL_SKILLS_LECTURES[0];
  const legacyLecture = {
    ...legacyLectureWithoutTrack,
    id: 'gen-cross-curriculum-missing-track',
    titleAr: 'اختبار تسرب محتوى بلا تحديد المسار',
    isSharedCommunity: true
  };
  contaminatingLectures.push(legacyLecture);
  isolationStorage.set(
    'TEACHER_AI_SHARED_LECS_EG_PUBLIC_COMPUTER_SCIENCE_G7_GENERAL',
    JSON.stringify(contaminatingLectures)
  );
  isolationStorage.set(
    'TEACHER_AI_LECTURES_V5_EG_PUBLIC_COMPUTER_SCIENCE_G7_GENERAL',
    JSON.stringify(contaminatingLectures)
  );
  isolationStorage.set('TEACHER_AI_CLOUD_SHARED_LECTURES', JSON.stringify(contaminatingLectures));
  isolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_COMPUTER_SCIENCE_G7_GENERAL',
    JSON.stringify([contaminatingLectures[0]])
  );
  const g9GeneratedContamination = {
    ...SAUDI_G9_DIGITAL_SKILLS_LECTURES[0],
    id: 'gen-cross-curriculum-saudi-g9',
    titleAr: 'اختبار تسرب إلى منهج الصف التاسع السعودي',
    isSharedCommunity: true
  };
  isolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_COMPUTER_SCIENCE_G9_GENERAL',
    JSON.stringify([g9GeneratedContamination])
  );
  isolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_COMPUTER_SCIENCE_G9_GENERAL',
    JSON.stringify([SAUDI_G9_DIGITAL_SKILLS_LECTURES[0], g9GeneratedContamination])
  );
  const isolatedSaudiCurriculum = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G7', 'PUBLIC', 'GENERAL');
  const isolatedOtherGrade = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G8', 'PUBLIC', 'GENERAL');
  const isolatedSaudiGrade9 = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G9', 'PUBLIC', 'GENERAL');
  const isolatedOtherCountry = loadSubjectLectures(
    'COMPUTER_SCIENCE', 'EG', 'G7', 'PUBLIC', 'GENERAL'
  );
  const privateBusinessDigitalTechnologyContamination = {
    ...SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LECTURES[0],
    id: 'gen-unverified-business-digital-technology',
    titleAr: 'محتوى تجريبي غير موثق لمسار خاص',
    country: 'SA',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G11',
    educationType: 'PRIVATE',
    educationTrack: 'BUSINESS',
    isSharedCommunity: true
  };
  isolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PRIVATE_COMPUTER_SCIENCE_G11_BUSINESS',
    JSON.stringify([privateBusinessDigitalTechnologyContamination])
  );
  isolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PRIVATE_COMPUTER_SCIENCE_G11_BUSINESS',
    JSON.stringify([privateBusinessDigitalTechnologyContamination])
  );
  isolationStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([privateBusinessDigitalTechnologyContamination])
  );
  const isolatedPrivateBusinessDigitalTechnology = loadSubjectLectures(
    'COMPUTER_SCIENCE',
    'SA',
    'G11',
    'PRIVATE',
    'BUSINESS'
  );

  assert(
    !isolatedOtherCountry.some((lecture) => lecture.id.startsWith('gen-cross-curriculum-leak-')),
    'Shared, cloud, and saved lessons must match country, subject, grade, education type, and track'
  );
  assert(
    !isolatedSaudiCurriculum.some((lecture) => lecture.id.startsWith('gen-cross-curriculum-leak-')),
    'Saudi G7 cannot receive curriculum content saved under another country profile'
  );
  assert(
    !isolatedOtherGrade.some((lecture) => lecture.id.startsWith('sa-ds7-')),
    'Saudi G8 never receives the Saudi G7 official curriculum'
  );
  assert(
    isolatedSaudiGrade9.some((lecture) => lecture.id === 'sa-ds9-part1-unit1') &&
      !isolatedSaudiGrade9.some((lecture) => lecture.id === 'gen-cross-curriculum-saudi-g9'),
    'Saudi G9 keeps its official curriculum and rejects shared and cached generated lessons'
  );
  assert(
    isolatedPrivateBusinessDigitalTechnology.length === 0,
    'Saudi private G11 Business rejects shared, cloud, and saved copies of the public BM textbook route'
  );
} finally {
  if (previousLocalStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousLocalStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

console.log('\n--- 8. Verifying Saudi science pathways and country isolation ---');
const saudiScienceRoutes = [
  ...['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].map((grade) => ({
    grade,
    subject: 'PRIMARY_SCIENCE' as const
  })),
  ...['G7', 'G8', 'G9'].map((grade) => ({
    grade,
    subject: 'GENERAL_SCIENCE' as const
  })),
  ...['G10', 'G11', 'G12'].flatMap((grade) =>
    (['PHYSICS', 'CHEMISTRY', 'BIOLOGY'] as const)
      .filter((subject) =>
        !(grade === 'G11' && (subject === 'PHYSICS' || subject === 'BIOLOGY'))
      )
      .map((subject) => ({ grade, subject }))
  )
];

for (const { grade, subject } of saudiScienceRoutes) {
  const curriculum = getCurriculumForSubject(subject, grade, 'SA', 'PUBLIC');
  const expectedPrefix = grade === 'G12' && subject === 'CHEMISTRY'
    ? 'sa-chem3-1448-g12'
    : grade === 'G3' && subject === 'PRIMARY_SCIENCE'
    ? 'sa-primary-science-g3-1448'
    : grade === 'G4' && subject === 'PRIMARY_SCIENCE'
    ? 'sa-primary-science-g4-1448'
    : grade === 'G5' && subject === 'PRIMARY_SCIENCE'
    ? 'sa-primary-science-g5-1448'
    : grade === 'G6' && subject === 'PRIMARY_SCIENCE'
    ? 'sa-primary-science-g6-1448'
    : grade === 'G10' && subject === 'CHEMISTRY'
    ? 'sa-chemistry1-1448-g10-general'
    : grade === 'G11' && subject === 'CHEMISTRY'
    ? 'sa-chemistry2-1448-g11-general'
    : grade === 'G10' && subject === 'BIOLOGY'
    ? 'sa-biology1-1448-g10-general'
    : `sa-science-${grade.toLowerCase()}-${subject.toLowerCase()}`;
  assert(
    curriculum.length > 0 &&
      curriculum.every((lecture) =>
        lecture.id.startsWith(expectedPrefix)
      ),
    `Saudi ${grade} ${subject} routes to its own science course`
  );
}

const saudiPhysics2Titles = [
  'الجاذبية',
  'الحركة الدورانية',
  'الزخم وحفظه',
  'الشغل والطاقة والآلات البسيطة',
  'الطاقة وحفظها',
  'الطاقة الحرارية'
];
const saudiPhysics2Pages = ['8–35', '36–65', '66–95', '96–129', '130–163', '164–200'];
const saudiPhysics2 = getCurriculumForSubject(
  'PHYSICS', 'G11', 'SA', 'PUBLIC', 'CS_ENGINEERING'
);
assert(
  saudiPhysics2.length === saudiPhysics2Titles.length &&
    saudiPhysics2.every((lecture, index) =>
      lecture.id.startsWith('sa-physics2-1448-g11-cs_engineering-') &&
      lecture.titleAr === saudiPhysics2Titles[index] &&
      lecture.unitTitleAr === `الفصل ${index + 1}: ${saudiPhysics2Titles[index]}` &&
      lecture.descriptionAr.includes(saudiPhysics2Pages[index]) &&
      lecture.country === 'SA' &&
      lecture.subject === 'PHYSICS' &&
      lecture.gradeLevel === 'G11' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'CS_ENGINEERING' &&
      lecture.assessment?.questions.length === 1 &&
      lecture.sections?.[0]?.diagram?.visualSteps?.length === 4
    ),
  'Saudi Physics 2 G11 chapter order, page ranges, illustrations, and assessments match the supplied 1448 AH contents'
);
assert(
  saudiPhysics2.map((lecture) => lecture.topicAr).join('|') === [
    '1-1 حركة الكواكب والجاذبية (ص 9)؛ 1-2 استخدام قانون الجذب الكوني (ص 18)',
    '2-1 وصف الحركة الدورانية (ص 37)؛ 2-2 ديناميكا الحركة الدورانية (ص 42)؛ 2-3 الاتزان (ص 47)',
    '3-1 الدفع والزخم (ص 67)؛ 3-2 حفظ الزخم (ص 74)',
    '4-1 الطاقة والشغل (ص 97)؛ 4-2 الآلات (ص 109)',
    '5-1 الأشكال المتعددة للطاقة (ص 131)؛ 5-2 حفظ الطاقة (ص 141)',
    '6-1 درجة الحرارة والطاقة الحرارية (ص 165)؛ 6-2 تغيرات حالة المادة وقوانين الديناميكا الحرارية (ص 178)'
  ].join('|'),
  'Saudi Physics 2 lesson headings and printed page numbers match the supplied contents'
);
assert(
  ['CS_ENGINEERING', 'HEALTH_LIFE'].every((track) =>
    isSaudiPublicG11PhysicsAvailable('SA', 'G11', 'PUBLIC', track as EducationTrack) &&
    getCurriculumForSubject('PHYSICS', 'G11', 'SA', 'PUBLIC', track as EducationTrack).length === 6
  ) &&
    ['GENERAL', 'BUSINESS', 'SHARIA_HUMANITIES'].every((track) =>
      !isSaudiPublicG11PhysicsAvailable('SA', 'G11', 'PUBLIC', track as EducationTrack) &&
      getCurriculumForSubject('PHYSICS', 'G11', 'SA', 'PUBLIC', track as EducationTrack).length === 0
    ) &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((type) =>
      getCurriculumForSubject('PHYSICS', 'G11', 'SA', type as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL', 'CS_ENGINEERING').length === 0
    ) &&
    !getCurriculumForSubject('PHYSICS', 'G11', 'EG', 'PUBLIC', 'CS_ENGINEERING')
      .some((lecture) => lecture.id.startsWith('sa-physics2-1448-g11')) &&
    getCurriculumForSubject('PHYSICS', 'G10', 'SA', 'PUBLIC', 'CS_ENGINEERING').length > 0 &&
    getCurriculumForSubject('PHYSICS', 'G12', 'SA', 'PUBLIC', 'CS_ENGINEERING').length > 0 &&
    !getCurriculumForSubject('PHYSICS', 'G10', 'SA', 'PUBLIC', 'CS_ENGINEERING')
      .some((lecture) => lecture.id.startsWith('sa-physics2-1448-g11')) &&
    !getCurriculumForSubject('PHYSICS', 'G12', 'SA', 'PUBLIC', 'CS_ENGINEERING')
      .some((lecture) => lecture.id.startsWith('sa-physics2-1448-g11')),
  'Saudi Physics 2 is isolated to G11 public CS & Engineering and Health & Life tracks'
);
const physics2Textbook = getNationalTextbookInfo(
  'SA', 'PHYSICS', 'G11', 'CS_ENGINEERING', 'ar', 'PUBLIC'
);
assert(
  getNationalSubjectLabel('PHYSICS', 'SA', 'G10', 'ar', 'PUBLIC', 'BUSINESS') ===
    'الفيزياء 1 (السنة الأولى المشتركة)' &&
    getNationalSubjectLabel('PHYSICS', 'SA', 'G10', 'ar', 'PRIVATE', 'BUSINESS') ===
      'الفيزياء 1 (مسار غير متحقق)',
  'Saudi Grade 10 physics is labeled as common-year content, not as a contradictory high-school track'
);
assert(
  physics2Textbook.textbookName.includes('1448هـ/2026م') &&
    physics2Textbook.semester === 'الفصل الدراسي الأول' &&
    getNationalTextbookInfo('SA', 'PHYSICS', 'G11', 'GENERAL', 'ar', 'PUBLIC')
      .textbookName.includes('لم يتم التحقق') &&
    getNationalSubjectLabel('PHYSICS', 'SA', 'G11', 'ar', 'PUBLIC', 'GENERAL')
      .includes('غير متحقق'),
  'Saudi Physics 2 textbook metadata and labels identify the verified edition and mark unsupported tracks'
);

const saudiBiology2Titles = [
  'شوكيات الجلد واللافقاريات الحبلية',
  'الأسماك والبرمائيات',
  'الزواحف والطيور',
  'الثدييات',
  'مقدمة في النباتات',
  'تركيب النباتات ووظائفها',
  'التكاثر في النباتات الزهرية',
  'تركيب الخلية ووظائفها',
  'الطاقة الخلوية'
];
const saudiBiology2Pages = [
  '10–33', '34–65', '66–93', '94–121', '122–147',
  '148–171', '172–195', '196–233', '234–259'
];
const saudiBiology2 = getCurriculumForSubject(
  'BIOLOGY', 'G11', 'SA', 'PUBLIC', 'HEALTH_LIFE'
);
assert(
  saudiBiology2.length === saudiBiology2Titles.length &&
    saudiBiology2.every((lecture, index) =>
      lecture.id.startsWith('sa-biology2-1448-g11-health_life-') &&
      lecture.titleAr === saudiBiology2Titles[index] &&
      lecture.unitTitleAr === `الفصل ${index + 1}: ${saudiBiology2Titles[index]}` &&
      lecture.descriptionAr.includes(saudiBiology2Pages[index]) &&
      lecture.country === 'SA' &&
      lecture.subject === 'BIOLOGY' &&
      lecture.gradeLevel === 'G11' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'HEALTH_LIFE' &&
      lecture.assessment?.questions.length === 1 &&
      lecture.sections?.[0]?.diagram?.visualSteps?.length === 4
    ),
  'Saudi Biology 2-1 G11 chapter order, page ranges, original illustrations, and reviews match the supplied 1448 AH contents'
);
assert(
  saudiBiology2.map((lecture) => lecture.topicAr).join('|') === [
    '1-1 خصائص شوكيات الجلد (ص 12)؛ 1-2 اللافقاريات الحبلية (ص 22)',
    '2-1 الأسماك (ص 36)؛ 2-2 البرمائيات (ص 49)',
    '3-1 الزواحف (ص 68)؛ 3-2 الطيور (ص 77)',
    '4-1 خصائص الثدييات (ص 96)؛ 4-2 تنوع الثدييات (ص 107)',
    '5-1 النباتات اللاوعائية (ص 124)؛ 5-2 النباتات الوعائية اللابذرية (ص 129)؛ 5-3 النباتات الوعائية البذرية (ص 133)',
    '6-1 خلايا النبات وأنسجته (ص 152)؛ 6-2 هرمونات النبات واستجاباتها (ص 158)',
    '7-1 الأزهار (ص 174)؛ 7-2 النباتات الزهرية (ص 181)',
    '8-1 التراكيب الخلوية والعضيات (ص 198)؛ 8-2 كيمياء الخلية (ص 215)',
    '9-1 كيف تحصل المخلوقات الحية على الطاقة؟ (ص 236)؛ 9-2 البناء الضوئي (ص 241)؛ 9-3 التنفس الخلوي (ص 249)'
  ].join('|'),
  'Saudi Biology 2-1 lesson headings and printed page numbers match the supplied contents'
);
assert(
  isSaudiPublicG11BiologyAvailable('SA', 'G11', 'PUBLIC', 'HEALTH_LIFE') &&
    getCurriculumForSubject('BIOLOGY', 'G11', 'SA', 'PUBLIC', 'HEALTH_LIFE').length === 9 &&
    ['GENERAL', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES'].every((track) =>
      !isSaudiPublicG11BiologyAvailable('SA', 'G11', 'PUBLIC', track as EducationTrack) &&
      getCurriculumForSubject('BIOLOGY', 'G11', 'SA', 'PUBLIC', track as EducationTrack).length === 0
    ) &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((type) =>
      getCurriculumForSubject('BIOLOGY', 'G11', 'SA', type as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL', 'HEALTH_LIFE').length === 0
    ) &&
    !getCurriculumForSubject('BIOLOGY', 'G11', 'EG', 'PUBLIC', 'HEALTH_LIFE')
      .some((lecture) => lecture.id.startsWith('sa-biology2-1448-g11')) &&
    getCurriculumForSubject('BIOLOGY', 'G10', 'SA', 'PUBLIC', 'HEALTH_LIFE').length > 0 &&
    getCurriculumForSubject('BIOLOGY', 'G12', 'SA', 'PUBLIC', 'HEALTH_LIFE').length > 0,
  'Saudi Biology 2-1 is isolated to G11 public Health & Life profiles and cannot leak across tracks, education types, grades, or countries'
);
const biology2Textbook = getNationalTextbookInfo(
  'SA', 'BIOLOGY', 'G11', 'HEALTH_LIFE', 'ar', 'PUBLIC'
);
assert(
  biology2Textbook.textbookName.includes('1448هـ/2026م') &&
    biology2Textbook.semester === 'الفصل الدراسي الأول' &&
    getNationalTextbookInfo('SA', 'BIOLOGY', 'G11', 'CS_ENGINEERING', 'ar', 'PUBLIC')
      .textbookName.includes('لم يتم التحقق') &&
    getNationalSubjectLabel('BIOLOGY', 'SA', 'G11', 'ar', 'PUBLIC', 'GENERAL')
      .includes('غير متحقق'),
  'Saudi Biology 2-1 textbook metadata and labels identify the checked edition and mark unsupported tracks'
);

const saudiScienceLectures = saudiScienceRoutes.flatMap(({ grade, subject }) =>
  loadSubjectLectures(subject, 'SA', grade, 'PUBLIC', 'GENERAL')
);
const saudiChemistry3 = loadSubjectLectures('CHEMISTRY', 'SA', 'G12', 'PUBLIC', 'GENERAL');
const saudiChemistry3Titles = [
  'أنواع المخاليط',
  'تركيز المحلول',
  'العوامل المؤثرة في الذوبان',
  'الخواص الجامعة للمحاليل',
  'مقدمة في الأحماض والقواعد',
  'قوة الأحماض والقواعد',
  'أيونات الهيدروجين والرقم الهيدروجيني',
  'التعادل',
  'تفاعلات الأكسدة والاختزال',
  'وزن معادلات الأكسدة والاختزال',
  'الخلايا الجلفانية',
  'البطاريات',
  'التحليل الكهربائي'
];
assert(
  saudiChemistry3.length === saudiChemistry3Titles.length &&
    saudiChemistry3.every((lecture, index) =>
      lecture.titleAr === saudiChemistry3Titles[index] &&
      lecture.lessonNumberAr === ['1-1', '1-2', '1-3', '1-4', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '4-1', '4-2', '4-3'][index]
    ) &&
    saudiChemistry3[0].unitTitleAr === 'الفصل الأول: المخاليط والمحاليل' &&
    saudiChemistry3[12].unitTitleAr === 'الفصل الرابع: الكيمياء الكهربائية',
  'Saudi Chemistry 3 G12 titles and chapter order match the supplied 1448 AH Semester 1 contents page'
);
assert(
  saudiChemistry3.every((lecture) =>
    lecture.gradeLevelNameAr.includes('طبعة 1448هـ') &&
    lecture.termAr?.includes('الفصل الدراسي الأول') &&
    lecture.sections?.every((section) =>
      section.contentAr.trim().length > 0 &&
      !/فهرس كتاب الكيمياء|إعداد المنصة|مصدر\s*:|source|textbook/i.test(section.contentAr)
    )
  ) &&
    getNationalTextbookInfo('SA', 'CHEMISTRY', 'G12', 'GENERAL', 'ar', 'PUBLIC').textbookName
      .includes('طبعة 1448هـ') &&
    getNationalTextbookInfo('SA', 'CHEMISTRY', 'G12', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('CHEMISTRY', 'SA', 'G12', 'ar', 'PUBLIC') === 'الكيمياء 3 (الثالث الثانوي)',
  'Verified Chemistry 3 metadata identifies the supplied edition while distinguishing original platform explanations'
);
const saudiChemistry1 = loadSubjectLectures('CHEMISTRY', 'SA', 'G10', 'PUBLIC', 'GENERAL');
const saudiChemistry1Titles = [
  'مقدمة في علم الكيمياء',
  'المادة - الخواص والتغيرات',
  'تركيب الذرة',
  'التفاعلات الكيميائية',
  'المول'
];
const saudiChemistry1Topics = [
  ['1-1 قصة مادتين', '1-2 الكيمياء والمادة', '1-3 الطرائق العلمية', '1-4 البحث العلمي'],
  ['2-1 خواص المادة', '2-2 تغيرات المادة', '2-3 المخاليط', '2-4 العناصر والمركبات'],
  ['3-1 الأفكار القديمة للمادة', '3-2 تعريف الذرة', '3-3 كيف تختلف الذرات؟', '3-4 الأنوية غير المستقرة والتحلل الإشعاعي'],
  ['4-1 التفاعلات والمعادلات', '4-2 تصنيف التفاعلات الكيميائية', '4-3 التفاعلات في المحاليل المائية'],
  ['5-1 قياس المادة', '5-2 الكتلة والمول', '5-3 مولات المركبات']
];
assert(
  saudiChemistry1.length === saudiChemistry1Titles.length &&
    saudiChemistry1.every((lecture, index) =>
      lecture.titleAr === saudiChemistry1Titles[index] &&
      saudiChemistry1Topics[index].every((topic) => lecture.topicAr?.includes(topic)) &&
      lecture.descriptionAr?.includes(['12–38', '42–69', '74–103', '110–146', '152–180'][index]) &&
      lecture.descriptionAr.includes('chmi1-part1.pdf') &&
      lecture.gradeLevelNameAr.includes('طبعة 1448هـ/2026م') &&
      lecture.termAr?.includes('الفصل الدراسي الأول') &&
      lecture.sections?.some((section) =>
        section.contentAr.includes('فهرس كتاب الكيمياء 1 السعودي') &&
        section.contentAr.includes('الشرح والرسم والتقويم من إعداد المنصة') &&
        !!section.diagram &&
        (section.diagram.visualSteps?.length ?? 0) === 4
      ) &&
      (lecture.assessment.questions?.length ?? 0) > 0
    ),
  'Saudi Chemistry 1 G10 chapters, lesson headings, pages, source notes, original diagrams, and assessments match the supplied contents'
);
assert(
  getNationalTextbookInfo('SA', 'CHEMISTRY', 'G10', 'GENERAL', 'ar', 'PUBLIC').textbookName
    .includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'CHEMISTRY', 'G10', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('CHEMISTRY', 'SA', 'G10', 'ar', 'PUBLIC') === 'الكيمياء 1 (السنة الأولى المشتركة)' &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('CHEMISTRY', 'G10', 'SA', 'PUBLIC', track)
          .length === 5 &&
        getCurriculumForSubject('CHEMISTRY', 'G10', 'SA', 'PUBLIC', track)
          .every((lecture) => lecture.educationTrack === track)
      ) &&
    !getCurriculumForSubject('CHEMISTRY', 'G10', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('CHEMISTRY', 'G10', 'SA', 'INTERNATIONAL').length &&
    !loadSubjectLectures('CHEMISTRY', 'SA', 'G10', 'PRIVATE').length &&
    !loadSubjectLectures('CHEMISTRY', 'SA', 'G10', 'INTERNATIONAL').length,
  'Verified Saudi Chemistry 1 is routed only to public common-year profiles and never to other education types'
);
assert(
  !getCurriculumForSubject('CHEMISTRY', 'G10', 'EG', 'PUBLIC')
    .some((lecture) => lecture.id.startsWith('sa-chemistry1-')),
  'Saudi Chemistry 1 never enters another country’s chemistry course'
);
const saudiChemistry2 = loadSubjectLectures('CHEMISTRY', 'SA', 'G11', 'PUBLIC', 'GENERAL');
const saudiChemistry2Titles = [
  'الإلكترونات في الذرات',
  'الجدول الدوري والتدرج في خواص العناصر',
  'المركبات الأيونية والفلزات',
  'الروابط التساهمية',
  'الحسابات الكيميائية',
  'حالات المادة',
  'الغازات'
];
const saudiChemistry2PageRanges = [
  '10–47', '48–81', '82–115', '116–159', '160–215', '216–259', '260–295'
];
const saudiChemistry2Topics = [
  ['1-1 الضوء وطاقة الكم (ص 12)', '1-2 نظرية الكم والذرة (ص 22)', '1-3 التوزيع الإلكتروني (ص 32)'],
  ['2-1 تطور الجدول الدوري الحديث (ص 50)', '2-2 تصنيف العناصر (ص 58)', '2-3 تدرج خواص العناصر (ص 63)'],
  ['3-1 تكون الأيون (ص 84)', '3-2 الروابط الأيونية والمركبات الأيونية (ص 88)', '3-3 صيغ المركبات الأيونية وأسماؤها (ص 96)', '3-4 الروابط الفلزية وخواص الفلزات (ص 103)'],
  ['4-1 الرابطة التساهمية (ص 118)', '4-2 تسمية الجزيئات (ص 126)', '4-3 التراكيب الجزيئية (ص 131)', '4-4 أشكال الجزيئات (ص 140)', '4-5 الكهرسالبية والقطبية (ص 144)'],
  ['5-1 الصيغة الأولية والصيغة الجزيئية (ص 162)', '5-2 صيغ الأملاح المائية (ص 172)', '5-3 المقصود بالحسابات الكيميائية (ص 176)', '5-4 حسابات المعادلات الكيميائية (ص 181)', '5-5 المادة المحددة للتفاعل (ص 187)', '5-6 نسبة المردود المئوية (ص 194)'],
  ['6-1 قوانين الغازات (ص 218)', '6-2 قوى التجاذب (ص 228)', '6-3 المواد السائلة والمواد الصلبة (ص 233)', '6-4 تغيرات الحالة الفيزيائية (ص 243)'],
  ['7-1 قوانين الغازات (ص 262)', '7-2 قانون الغاز المثالي (ص 273)', '7-3 الحسابات المتعلقة بالغازات (ص 281)']
];
assert(
  saudiChemistry2.length === saudiChemistry2Titles.length &&
    saudiChemistry2.every((lecture, index) =>
      lecture.titleAr === saudiChemistry2Titles[index] &&
      saudiChemistry2Topics[index].every((topic) => lecture.topicAr?.includes(topic)) &&
      lecture.descriptionAr?.includes(`صفحات الفصل والتقويم: ${saudiChemistry2PageRanges[index]}`) &&
      lecture.descriptionAr.includes('CHMI2.1.pdf') &&
      lecture.descriptionAr.includes('فهرس كتاب الكيمياء 2-1 السعودي') &&
      lecture.descriptionAr.includes('ص 6') &&
      lecture.descriptionAr.includes('ليست منقولة من صفحات الكتاب') &&
      lecture.gradeLevel === 'G11' &&
      lecture.gradeLevelNameAr.includes('طبعة 1448هـ/2026م') &&
      lecture.termAr?.includes('الفصل الدراسي الأول') &&
      lecture.sections?.some((section) =>
        section.contentAr.includes('فهرس الكتاب') &&
        section.contentAr.includes('الشرح والرسم والتقويم من إعداد المنصة') &&
        !!section.diagram &&
        (section.diagram.visualSteps?.length ?? 0) === 4
      ) &&
      (lecture.assessment.questions?.length ?? 0) === 1 &&
      lecture.assessment.questions[0].optionsEn.length === 4 &&
      lecture.assessment.questions[0].correctIndex >= 0 &&
      lecture.assessment.questions[0].correctIndex < lecture.assessment.questions[0].optionsEn.length
    ),
  'Saudi Chemistry 2-1 G11 chapters, contents topics, page ranges, source notes, original diagrams, and assessments match the supplied 1448 book'
);
assert(
  getNationalTextbookInfo('SA', 'CHEMISTRY', 'G11', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'CHEMISTRY', 'G11', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('الكيمياء 2-1') &&
    getNationalTextbookInfo('SA', 'CHEMISTRY', 'G11', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('CHEMISTRY', 'SA', 'G11', 'ar', 'PUBLIC') === 'الكيمياء 2-1 (الصف الثاني الثانوي)' &&
    getNationalSubjectLabel('CHEMISTRY', 'SA', 'G11', 'ar', 'PRIVATE') === 'الكيمياء 2-1 (مسار غير متحقق)' &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('CHEMISTRY', 'G11', 'SA', 'PUBLIC', track).length === 7 &&
        getCurriculumForSubject('CHEMISTRY', 'G11', 'SA', 'PUBLIC', track).every((lecture) =>
          lecture.educationTrack === track && lecture.gradeLevel === 'G11'
        )
      ) &&
    !getCurriculumForSubject('CHEMISTRY', 'G11', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('CHEMISTRY', 'G11', 'SA', 'INTERNATIONAL').length &&
    !loadSubjectLectures('CHEMISTRY', 'SA', 'G11', 'PRIVATE').length &&
    !loadSubjectLectures('CHEMISTRY', 'SA', 'G11', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('CHEMISTRY', 'G11', 'EG', 'PUBLIC')
      .some((lecture) => lecture.id.startsWith('sa-chemistry2-1448-g11-')) &&
    !getCurriculumForSubject('CHEMISTRY', 'G11', 'SD', 'PUBLIC')
      .some((lecture) => lecture.id.startsWith('sa-chemistry2-1448-g11-')),
  'Verified Saudi Chemistry 2-1 is isolated to public G11 profiles, configured tracks, and Saudi routing'
);
const saudiBiology1 = loadSubjectLectures('BIOLOGY', 'SA', 'G10', 'PUBLIC', 'GENERAL');
const saudiBiology1Titles = [
  'دراسة الحياة',
  'تنظيم تنوع الحياة',
  'الفيروسات والبكتيريا',
  'الطلائعيات',
  'الفطريات',
  'مدخل إلى الحيوانات',
  'الديدان والرخويات',
  'المفصليات'
];
const saudiBiology1Topics = [
  ['1-1 مدخل إلى علم الأحياء', '1-2 طبيعة العلم وطرائقه'],
  ['2-1 تاريخ التصنيف', '2-2 التصنيف الحديث'],
  ['3-1 الفيروسات والبريونات', '3-2 البكتيريا'],
  ['4-1 مدخل إلى الطلائعيات', '4-2 تنوع الطلائعيات'],
  ['5-1 مدخل إلى الفطريات', '5-2 تنوع الفطريات وبيئتها'],
  ['6-1 خصائص الحيوانات', '6-2 مستويات بناء جسم الحيوان', '6-3 الإسفنجيات واللاسعات'],
  ['7-1 الديدان المفلطحة', '7-2 الديدان الأسطوانية والدوارات', '7-3 الرخويات', '7-4 الديدان الحلقية'],
  ['8-1 خصائص المفصليات', '8-2 تنوع المفصليات', '8-3 الحشرات وأشباهها']
];
assert(
  saudiBiology1.length === saudiBiology1Titles.length &&
    saudiBiology1.every((lecture, index) =>
      lecture.titleAr === saudiBiology1Titles[index] &&
      saudiBiology1Topics[index].every((topic) => lecture.topicAr?.includes(topic)) &&
      lecture.descriptionAr?.includes(['10–33', '36–57', '60–83', '88–115', '120–142', '146–175', '180–209', '214–238'][index]) &&
      lecture.descriptionAr.includes('biog1.pdf') &&
      lecture.gradeLevelNameAr.includes('طبعة 1448هـ/2026م') &&
      lecture.termAr?.includes('الفصل الدراسي الأول') &&
      lecture.sections?.some((section) =>
        section.contentAr.includes('فهرس كتاب الأحياء 1 السعودي') &&
        section.contentAr.includes('الشرح والرسم والتقويم من إعداد المنصة') &&
        section.diagram?.diagramType === 'digital_skills' &&
        (section.diagram.visualSteps?.length ?? 0) === 4
      ) &&
      (lecture.assessment.questions?.length ?? 0) > 0
    ),
  'Saudi Biology 1 G10 chapters, lesson headings, pages, source notes, original diagrams, and assessments match the supplied contents'
);
assert(
  getNationalTextbookInfo('SA', 'BIOLOGY', 'G10', 'GENERAL', 'ar', 'PUBLIC').textbookName
    .includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'BIOLOGY', 'G10', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('BIOLOGY', 'SA', 'G10', 'ar', 'PUBLIC') === 'الأحياء 1 (السنة الأولى المشتركة)' &&
  getNationalSubjectLabel('BIOLOGY', 'SA', 'G10', 'ar', 'PRIVATE') === 'الأحياء 1 (مسار غير متحقق)' &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('BIOLOGY', 'G10', 'SA', 'PUBLIC', track)
          .length === 8 &&
        getCurriculumForSubject('BIOLOGY', 'G10', 'SA', 'PUBLIC', track)
          .every((lecture) => lecture.educationTrack === track)
      ) &&
    !getCurriculumForSubject('BIOLOGY', 'G10', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('BIOLOGY', 'G10', 'SA', 'INTERNATIONAL').length &&
    !loadSubjectLectures('BIOLOGY', 'SA', 'G10', 'PRIVATE').length &&
    !loadSubjectLectures('BIOLOGY', 'SA', 'G10', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('BIOLOGY', 'G10', 'EG', 'PUBLIC')
      .some((lecture) => lecture.id.startsWith('sa-biology1-')),
  'Verified Saudi Biology 1 is restricted to public common-year profiles and stays isolated from other countries'
);
const saudiEnglish1 = getCurriculumForSubject('ENGLISH', 'G10', 'SA', 'PUBLIC', 'GENERAL');
const saudiEnglish1Titles = [
  'Big Changes',
  'Careers',
  'What Will Be, Will Be',
  'The Art of Advertising',
  'Did You Hurt Yourself?',
  'Take My Advice',
  'You’ve Got Mail!',
  'Wishful Thinking',
  'Complaints, Complaints',
  'I Wonder What Happened',
  'If It Hadn’t Happened',
  'What They Said'
];
const saudiEnglish1Pages = [
  '6–19', '20–33', '34–47', '54–67', '68–81', '82–95',
  '106–119', '120–133', '134–147', '154–167', '168–181', '182–195'
];
assert(
  saudiEnglish1.length === 12 &&
    saudiEnglish1.every((lecture, index) =>
      lecture.titleEn === saudiEnglish1Titles[index] &&
      lecture.descriptionAr?.includes(`صفحات الوحدة: ${saudiEnglish1Pages[index]}`) &&
      lecture.descriptionAr.includes('1448-GE-CBM-TRC1-SM1-engl1mh1.1.pdf') &&
      lecture.descriptionAr.includes('ص iii') &&
      lecture.descriptionAr.includes('ص iv–vii') &&
      lecture.descriptionAr.includes('ليست منقولة من صفحات الكتاب') &&
      lecture.gradeLevelNameAr.includes('السنة الأولى المشتركة') &&
      lecture.termAr === 'Mega Goal 1، طبعة 1448هـ' &&
      lecture.sections?.length === 2 &&
      lecture.sections[0].diagram?.diagramType === 'digital_skills' &&
      lecture.sections[0].diagram?.visualSteps?.length === 4 &&
      lecture.sections[0].diagram?.captionAr.includes('ليست صورة من الكتاب') &&
      lecture.assessment.questions?.length === 1 &&
      lecture.assessment.questions[0].optionsEn?.length === 4 &&
      lecture.assessment.questions[0].correctIndex >= 0 &&
      lecture.assessment.questions[0].correctIndex < lecture.assessment.questions[0].optionsEn.length
    ),
  'Saudi Mega Goal 1 unit order, page spans, source scope, original diagrams, and assessments match the supplied 1448 edition'
);
assert(
  isSaudiPublicCommonYearEnglishAvailable('SA', 'G10', 'PUBLIC') &&
    !isSaudiPublicCommonYearEnglishAvailable('SA', 'G10', 'PRIVATE') &&
    !isSaudiPublicCommonYearEnglishAvailable('SA', 'G11', 'PUBLIC') &&
    !isSaudiPublicCommonYearEnglishAvailable('EG', 'G10', 'PUBLIC') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G10', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('Mega Goal 1') &&
    !getNationalTextbookInfo('SA', 'ENGLISH', 'G10', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('الفصل الدراسي الأول') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G10', 'GENERAL', 'ar', 'PUBLIC').semester === '' &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G10', 'ar', 'PUBLIC') === 'اللغة الإنجليزية 1 (Mega Goal)' &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G10', 'ar', 'PRIVATE') === 'اللغة الإنجليزية 1 (مسار غير متحقق)' &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('ENGLISH', 'G10', 'SA', 'PUBLIC', track).length === 12 &&
        getCurriculumForSubject('ENGLISH', 'G10', 'SA', 'PUBLIC', track).every((lecture) =>
          lecture.educationTrack === track && lecture.subject === 'ENGLISH'
        )
      ) &&
    !getCurriculumForSubject('ENGLISH', 'G10', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('ENGLISH', 'G10', 'SA', 'INTERNATIONAL').length &&
    !loadSubjectLectures('ENGLISH', 'SA', 'G10', 'PRIVATE').length &&
    !loadSubjectLectures('ENGLISH', 'SA', 'G10', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('ENGLISH', 'G12', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('ENGLISH', 'G10', 'EG', 'PUBLIC').length,
  'Mega Goal 1 remains limited to Saudi public common-year G10 and is isolated from unverified G12, foreign, and non-public routes'
);
const saudiEnglishG5 = getCurriculumForSubject('ENGLISH', 'G5', 'SA', 'PUBLIC', 'GENERAL');
const saudiEnglishG2 = getCurriculumForSubject('ENGLISH', 'G2', 'SA', 'PUBLIC', 'GENERAL');
const saudiEnglishG3 = getCurriculumForSubject('ENGLISH', 'G3', 'SA', 'PUBLIC', 'GENERAL');
const saudiEnglishG2Contents = [
  [1, 'Feelings', 4, 11],
  [2, 'Things We Wear', 12, 19],
  [3, 'Things We Do', 20, 27],
  [4, 'Beautiful Nature', 28, 35],
  [5, 'Friends, Actions, Things', 36, 43],
] as const;
assert(
  SAUDI_G2_ENGLISH_TEXTBOOK_URL.endsWith('/1448-GE-PE-K02-SM1-ENGLMH-part1.pdf') &&
    SAUDI_G2_ENGLISH_UNIT_COUNT === 5 &&
    SAUDI_G2_ENGLISH_LECTURE_COUNT === 6 &&
    SAUDI_G2_ENGLISH_TABLE_OF_CONTENTS.map(({ unitNumber, titleEn, pageStart, pageEnd }) =>
      [unitNumber, titleEn, pageStart, pageEnd]
    ).every((row, index) => JSON.stringify(row) === JSON.stringify(saudiEnglishG2Contents[index])) &&
    SAUDI_G2_ENGLISH_SUPPLEMENTARY_CONTENTS.map(({ titleEn, pageStart, pageEnd }) =>
      [titleEn, pageStart, pageEnd]
    ).every((row, index) => JSON.stringify(row) === JSON.stringify([
      ['Classroom English', 2, 3],
      ['Phonics Practice', 44, 51],
      ['Picture Dictionary', 52, 56],
      ['Audio Track Lists', 57, 58],
      ['Word List', 59, 59],
      ['Objectives', 60, 61],
      ['Workbook', 62, 103],
    ][index])) &&
    saudiEnglishG2.length === SAUDI_G2_ENGLISH_LECTURE_COUNT &&
    getSaudiEnglishG2Curriculum('GENERAL').map((lecture) => lecture.id).join('|') ===
      saudiEnglishG2.map((lecture) => lecture.id).join('|') &&
    saudiEnglishG2.every((lecture, index) =>
      lecture.id === (index === SAUDI_G2_ENGLISH_UNIT_COUNT
        ? 'sa-english-wecan2-1448-g2-general-references'
        : `sa-english-wecan2-1448-g2-general-${index + 1}`) &&
      lecture.order === index + 1 &&
      lecture.subject === 'ENGLISH' &&
      lecture.gradeLevel === 'G2' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.descriptionAr?.includes('PDF ص 2') &&
      lecture.descriptionAr?.includes('PDF ص 3') &&
      lecture.descriptionAr?.includes('PDF ص 4–7') &&
      lecture.descriptionAr?.includes('1448-GE-PE-K02-SM1-ENGLMH-part1.pdf') &&
      lecture.descriptionAr?.includes('لم تراجع صفحات الدروس وكتاب التمارين كاملة') &&
      lecture.sections?.length === 3 &&
      (index === SAUDI_G2_ENGLISH_UNIT_COUNT
        ? lecture.titleEn === 'Phonics, Picture Dictionary, and Workbook'
        : lecture.titleEn === saudiEnglishG2Contents[index][1] &&
          lecture.topicEn.includes(`pp. ${saudiEnglishG2Contents[index][2]}–${saudiEnglishG2Contents[index][3]}`)) &&
      (index === SAUDI_G2_ENGLISH_UNIT_COUNT
        ? lecture.sections.every((section) =>
          section.diagram?.diagramType === 'digital_skills' &&
          section.diagram.visualSteps?.length === 4 &&
          section.diagram.captionAr.includes('ليس صورة من الكتاب')
        )
        : lecture.sections[0].diagram?.diagramType === 'digital_skills' &&
          lecture.sections[0].diagram.visualSteps?.length === 4 &&
          lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب')) &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsEn?.length === 4 &&
      lecture.assessment.questions[0].correctIndex === 0
    ),
  'Saudi Grade 2 We Can! matches all indexed units, supplementary references, source scope, original diagrams, and checks'
);
assert(
  isSaudiPublicG2EnglishAvailable('SA', 'G2', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G2', 'PUBLIC') &&
    !isSaudiPublicG2EnglishAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG2EnglishAvailable('SA', 'G2', 'PRIVATE') &&
    !isSaudiPublicEnglishAvailable('SA', 'G2', 'INTERNATIONAL') &&
    !isSaudiPublicEnglishAvailable('EG', 'G2', 'PUBLIC') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G2', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('We Can! Student’s Book 2') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G2', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('الجزء الأول') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G2', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('©2025') &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G2', 'ar', 'PUBLIC').includes('We Can!') &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G2', 'ar', 'PRIVATE').includes('غير متحقق') &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('ENGLISH', 'G2', 'SA', 'PUBLIC', track).length === SAUDI_G2_ENGLISH_LECTURE_COUNT &&
        getCurriculumForSubject('ENGLISH', 'G2', 'SA', 'PUBLIC', track).every((lecture) =>
          lecture.educationTrack === track && lecture.subject === 'ENGLISH'
        )
      ) &&
    !getCurriculumForSubject('ENGLISH', 'G2', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('ENGLISH', 'G2', 'SA', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('ENGLISH', 'G2', 'EG', 'PUBLIC').length &&
    !getCurriculumForSubject('ENGLISH', 'G1', 'SA', 'PUBLIC').length,
  'We Can! Grade 2 is available only on the Saudi public route with verified book metadata and labels'
);
const saudiEnglishG3Contents = [
  [1, 'It’s Nice to Meet You!', 2, 9],
  [2, 'Sea Animals', 10, 17],
  [3, 'Sports and Activities', 18, 25],
  [4, 'Chores', 26, 33],
  [5, 'Yesterday and Today', 34, 41],
  [6, 'Jobs', 42, 49],
] as const;
assert(
  SAUDI_G3_ENGLISH_TEXTBOOK_URL.endsWith('/1448-GE-PE-K03-SM1-ENGLMH.pdf') &&
    SAUDI_G3_ENGLISH_UNIT_COUNT === 6 &&
    SAUDI_G3_ENGLISH_LECTURE_COUNT === 7 &&
    SAUDI_G3_ENGLISH_TABLE_OF_CONTENTS.map(({ unitNumber, titleEn, pageStart, pageEnd }) =>
      [unitNumber, titleEn, pageStart, pageEnd]
    ).every((row, index) => JSON.stringify(row) === JSON.stringify(saudiEnglishG3Contents[index])) &&
    SAUDI_G3_ENGLISH_SUPPLEMENTARY_CONTENTS.map(({ titleEn, pageStart, pageEnd }) =>
      [titleEn, pageStart, pageEnd]
    ).every((row, index) => JSON.stringify(row) === JSON.stringify([
      ['Phonics Practice', 50, 61],
      ['Picture Dictionary', 62, 65],
      ['Word List', 66, 66],
      ['Audio Track Lists', 67, 67],
      ['Objectives', 68, 68],
      ['Workbook', 69, 118],
    ][index])) &&
    saudiEnglishG3.length === SAUDI_G3_ENGLISH_LECTURE_COUNT &&
    getSaudiEnglishG3Curriculum('GENERAL').map((lecture) => lecture.id).join('|') ===
      saudiEnglishG3.map((lecture) => lecture.id).join('|') &&
    saudiEnglishG3.every((lecture, index) =>
      lecture.id === (index === SAUDI_G3_ENGLISH_UNIT_COUNT
        ? 'sa-english-wecan3-1448-g3-general-phonics'
        : `sa-english-wecan3-1448-g3-general-${index + 1}`) &&
      lecture.order === index + 1 &&
      lecture.subject === 'ENGLISH' &&
      lecture.gradeLevel === 'G3' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.descriptionAr?.includes('PDF ص 3') &&
      lecture.descriptionAr?.includes('PDF ص 4–7') &&
      lecture.descriptionAr?.includes('1448-GE-PE-K03-SM1-ENGLMH.pdf') &&
      lecture.descriptionAr?.includes('لا تكفي وحدها لإثبات سنة الطبعة المطبوعة') &&
      lecture.sections?.length === 3 &&
      (index === SAUDI_G3_ENGLISH_UNIT_COUNT
        ? lecture.titleEn === 'Phonics, Picture Dictionary, and Workbook'
        : lecture.titleEn === saudiEnglishG3Contents[index][1] &&
          lecture.topicEn.includes(`pp. ${saudiEnglishG3Contents[index][2]}–${saudiEnglishG3Contents[index][3]}`)) &&
      lecture.sections[0].diagram?.diagramType === 'digital_skills' &&
      lecture.sections[0].diagram?.visualSteps?.length === 4 &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsEn?.length === 4 &&
      lecture.assessment.questions[0].correctIndex === 0
    ),
  'Saudi Grade 3 We Can! maps all indexed units and supplementary sections, page references, source scope, original diagrams, and checks'
);
assert(
  isSaudiPublicG3EnglishAvailable('SA', 'G3', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG3EnglishAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG3EnglishAvailable('SA', 'G3', 'PRIVATE') &&
    !isSaudiPublicEnglishAvailable('SA', 'G3', 'INTERNATIONAL') &&
    !isSaudiPublicEnglishAvailable('EG', 'G3', 'PUBLIC') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G3', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('We Can! Student’s Book 3') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G3', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('©2025') &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G3', 'ar', 'PUBLIC').includes('We Can!') &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G3', 'ar', 'PRIVATE').includes('غير متحقق') &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('ENGLISH', 'G3', 'SA', 'PUBLIC', track).length === SAUDI_G3_ENGLISH_LECTURE_COUNT &&
        getCurriculumForSubject('ENGLISH', 'G3', 'SA', 'PUBLIC', track).every((lecture) =>
          lecture.educationTrack === track && lecture.subject === 'ENGLISH'
        )
      ) &&
    !getCurriculumForSubject('ENGLISH', 'G3', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('ENGLISH', 'G3', 'SA', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('ENGLISH', 'G3', 'EG', 'PUBLIC').length,
  'We Can! Grade 3 is available only on the Saudi public route with book metadata and labels'
);
const saudiEnglishG5Contents = [
  [1, 1, 'Personal Interests', 10, 21],
  [2, 1, 'House Designs', 22, 33],
  [3, 1, 'Job Paths', 34, 45],
  [4, 1, 'Glorious Food', 46, 57],
  [5, 2, 'Storylines', 58, 69],
  [6, 2, 'Outdoor Activities', 70, 81],
  [7, 2, 'Trips', 82, 93],
  [8, 2, 'Outfits', 94, 105],
];
assert(
  SAUDI_G5_ENGLISH_TEXTBOOK_URL.endsWith('/1448-GE-PE-K05-SM1-ENMG.pdf') &&
    SAUDI_G5_ENGLISH_UNIT_COUNT === 8 &&
    SAUDI_G5_ENGLISH_TABLE_OF_CONTENTS.map(({ unitNumber, part, titleEn, pageStart, pageEnd }) =>
      [unitNumber, part, titleEn, pageStart, pageEnd]
    ).every((row, index) => JSON.stringify(row) === JSON.stringify(saudiEnglishG5Contents[index])) &&
    saudiEnglishG5.length === SAUDI_G5_ENGLISH_UNIT_COUNT &&
    getSaudiEnglishG5Curriculum('GENERAL').map((lecture) => lecture.id).join('|') ===
      saudiEnglishG5.map((lecture) => lecture.id).join('|') &&
    saudiEnglishG5.every((lecture, index) =>
      lecture.id === `sa-english-topgoal2-1448-g5-general-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleEn === saudiEnglishG5Contents[index][2] &&
      lecture.subject === 'ENGLISH' &&
      lecture.gradeLevel === 'G5' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.descriptionAr?.includes('PDF ص 3') &&
      lecture.descriptionAr?.includes('PDF ص 4–7') &&
      lecture.descriptionAr?.includes('1448-GE-PE-K05-SM1-ENMG.pdf') &&
      lecture.descriptionAr?.includes('لم تراجع صفحات الدروس') &&
      lecture.descriptionAr?.includes(`ص ${saudiEnglishG5Contents[index][3]}–${saudiEnglishG5Contents[index][4]}`) &&
      lecture.termAr?.includes('الجزءان الأول والثاني') &&
      lecture.sections?.length === 2 &&
      lecture.sections[0].contentEn.includes(
        `pp. ${saudiEnglishG5Contents[index][3]}–${saudiEnglishG5Contents[index][4]}`
      ) &&
      lecture.sections[0].diagram?.diagramType === 'digital_skills' &&
      lecture.sections[0].diagram?.visualSteps?.length === 4 &&
      lecture.sections[0].diagram?.captionAr.includes('ليست صورة من الكتاب المدرسي') &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsEn?.length === 4 &&
      lecture.assessment.questions[0].correctIndex === 0
    ),
  'Saudi Grade 5 Top Goal maps all 8 indexed units, printed pages, source scope, original learning maps, and checks'
);
assert(
  isSaudiPublicG5EnglishAvailable('SA', 'G5', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G5', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G10', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G11', 'PUBLIC') &&
    !isSaudiPublicG5EnglishAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicEnglishAvailable('SA', 'G5', 'PRIVATE') &&
    !isSaudiPublicEnglishAvailable('SA', 'G5', 'INTERNATIONAL') &&
    !isSaudiPublicEnglishAvailable('EG', 'G5', 'PUBLIC') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G5', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('Top Goal, Student Book 2') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G5', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('©2025') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G5', 'GENERAL', 'ar', 'PUBLIC').semester === '' &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G5', 'ar', 'PUBLIC').includes('Top Goal') &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G5', 'ar', 'PRIVATE').includes('غير متحقق') &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('ENGLISH', 'G5', 'SA', 'PUBLIC', track).length === SAUDI_G5_ENGLISH_UNIT_COUNT &&
        getCurriculumForSubject('ENGLISH', 'G5', 'SA', 'PUBLIC', track).every((lecture) =>
          lecture.educationTrack === track && lecture.subject === 'ENGLISH'
        )
      ) &&
    !getCurriculumForSubject('ENGLISH', 'G5', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('ENGLISH', 'G5', 'SA', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('ENGLISH', 'G5', 'EG', 'PUBLIC').length,
  'Top Goal Grade 5 is offered only for the Saudi public route, with book metadata and labels'
);
const saudiEnglish2 = getCurriculumForSubject('ENGLISH', 'G11', 'SA', 'PUBLIC', 'GENERAL');
const saudiEnglish2Titles = [
  'Connected by Technology',
  'Crime Doesn’t Pay',
  'Far and Away',
  'TV Around the World',
  'Working 9 to 5',
  'Going Green',
  'There’s No Place Like Home',
  'The Sporting Life',
  'Laugh Out Loud',
  'You Are What You Eat',
  'Amazing Animals',
  'What Would You Do?'
];
const saudiEnglish2Pages = [
  '6–19', '20–33', '34–47', '54–67', '68–81', '82–95',
  '106–119', '120–133', '134–147', '154–167', '168–181', '182–195'
];
assert(
  saudiEnglish2.length === 12 &&
    saudiEnglish2.every((lecture, index) =>
      lecture.titleEn === saudiEnglish2Titles[index] &&
      lecture.descriptionAr?.includes(`صفحات الوحدة: ${saudiEnglish2Pages[index]}`) &&
      lecture.descriptionAr.includes('1448-GE-CBM-GNRL-TRC2-SM1-ENGL2MH2.1.PDF') &&
      lecture.descriptionAr.includes('ص iii') &&
      lecture.descriptionAr.includes('ص iv–vi') &&
      lecture.descriptionAr.includes('رمز المصدر GNRL') &&
      lecture.gradeLevel === 'G11' &&
      lecture.gradeLevelNameAr.includes('الصف الثاني الثانوي') &&
      lecture.termAr === 'Mega Goal 2، طبعة 1448هـ' &&
      lecture.sections?.length === 2 &&
      lecture.sections[0].diagram?.visualSteps?.length === 4 &&
      lecture.sections[0].diagram?.captionAr.includes('ليست صورة من الكتاب') &&
      lecture.assessment.questions?.length === 1 &&
      lecture.assessment.questions[0].optionsEn?.length === 4 &&
      lecture.assessment.questions[0].correctIndex >= 0 &&
      lecture.assessment.questions[0].correctIndex < lecture.assessment.questions[0].optionsEn.length
    ),
  'Saudi Mega Goal 2 unit order, page spans, scope, source caveat, original diagrams, and assessments match the supplied 1448 edition'
);
assert(
  isSaudiPublicG11EnglishAvailable('SA', 'G11', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G10', 'PUBLIC') &&
    isSaudiPublicEnglishAvailable('SA', 'G11', 'PUBLIC') &&
    !isSaudiPublicG11EnglishAvailable('SA', 'G10', 'PUBLIC') &&
    !isSaudiPublicG11EnglishAvailable('SA', 'G11', 'PRIVATE') &&
    !isSaudiPublicG11EnglishAvailable('SA', 'G11', 'INTERNATIONAL') &&
    !isSaudiPublicG11EnglishAvailable('EG', 'G11', 'PUBLIC') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G11', 'GENERAL', 'ar', 'PUBLIC').textbookName.includes('Mega Goal 2') &&
    getNationalTextbookInfo('SA', 'ENGLISH', 'G11', 'GENERAL', 'ar', 'PUBLIC').semester === '' &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G11', 'ar', 'PUBLIC') === 'اللغة الإنجليزية 2 (Mega Goal 2)' &&
    getNationalSubjectLabel('ENGLISH', 'SA', 'G11', 'ar', 'PRIVATE').includes('غير متحقق') &&
    (['GENERAL', 'HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
      .every((track) =>
        getCurriculumForSubject('ENGLISH', 'G11', 'SA', 'PUBLIC', track).length === 12 &&
        getCurriculumForSubject('ENGLISH', 'G11', 'SA', 'PUBLIC', track).every((lecture) =>
          lecture.educationTrack === track && lecture.subject === 'ENGLISH'
        )
      ) &&
    !getCurriculumForSubject('ENGLISH', 'G11', 'SA', 'PRIVATE').length &&
    !getCurriculumForSubject('ENGLISH', 'G11', 'SA', 'INTERNATIONAL').length &&
    !loadSubjectLectures('ENGLISH', 'SA', 'G11', 'PRIVATE').length &&
    !loadSubjectLectures('ENGLISH', 'SA', 'G11', 'INTERNATIONAL').length &&
    !getCurriculumForSubject('ENGLISH', 'G12', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('ENGLISH', 'G11', 'EG', 'PUBLIC').length,
  'Mega Goal 2 is available only to Saudi public G11 profiles across tracks and blocked from unverified education contexts'
);
const saudiArabic1 = loadSubjectLectures('ARABIC_LIT', 'SA', 'G10', 'PUBLIC', 'GENERAL');
const saudiArabic1Titles = [
  'الكفاية النحوية',
  'الكفاية الإملائية',
  'الكفاية القرائية',
  'كفاية الاتصال الكتابي',
  'كفاية التواصل الشفهي'
];
assert(
  saudiArabic1.length === saudiArabic1Titles.length &&
    saudiArabic1.every((lecture, index) =>
      lecture.titleAr === saudiArabic1Titles[index] &&
      lecture.descriptionAr?.includes('1448هـ/2026م') &&
      lecture.descriptionAr.includes('ص 8') &&
        lecture.descriptionAr.includes(['11–57', '59–100', '101–144', '145–185', '187–217'][index]) &&
        lecture.descriptionAr.includes('logh1.1.pdf') &&
        lecture.sections?.some((section) => !!section.diagram)
      ) &&
      saudiArabic1[0].summaryAr.includes('إعراب الفعل المضارع') &&
      saudiArabic1[2].summaryAr.includes('المتعمقة') &&
    saudiArabic1[4].summaryAr.includes('مهارة تعلم'),
  'Saudi Arabic 1-1 G10 competencies follow the supplied 1448 AH contents, with source notes and original diagrams'
);
assert(
  getNationalTextbookInfo('SA', 'ARABIC_LIT', 'G10', 'GENERAL', 'ar', 'PUBLIC').textbookName
    .includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'ARABIC_LIT', 'G10', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('ARABIC_LIT', 'SA', 'G10', 'ar', 'PUBLIC') === 'اللغة العربية 1-1 (الكفايات اللغوية)',
  'Saudi Grade 10 Arabic metadata identifies the supplied textbook, edition, term, and course name'
);
const saudiArabic2 = loadSubjectLectures('ARABIC_LIT', 'SA', 'G11', 'PUBLIC', 'GENERAL');
const saudiArabic2Titles = [
  'الكفاية النحوية',
  'الكفاية الإملائية',
  'الكفاية القرائية',
  'كفاية الاتصال الكتابي',
  'كفاية التواصل الشفهي'
];
assert(
  saudiArabic2.length === saudiArabic2Titles.length &&
    saudiArabic2.every((lecture, index) =>
      lecture.titleAr === saudiArabic2Titles[index] &&
      lecture.descriptionAr?.includes('1448هـ/2026م') &&
      lecture.descriptionAr.includes('ص 8') &&
      lecture.descriptionAr.includes(['11–54', '55–85', '87–132', '133–162', '163–191'][index]) &&
      lecture.descriptionAr.includes('LOGH2.1-part1.pdf') &&
      lecture.sections?.some((section) => !!section.diagram)
    ) &&
    saudiArabic2[0].summaryAr.includes('العطف والتوكيد والنعت') &&
    saudiArabic2[1].summaryAr.includes('الألف المتطرفة') &&
    saudiArabic2[2].summaryAr.includes('عناصر الفعل القرائي') &&
    saudiArabic2[3].summaryAr.includes('البرهنة والاستدلال') &&
    saudiArabic2[4].summaryAr.includes('نماذج التأثير'),
  'Saudi Arabic 1-2 G11 competencies follow the supplied 1448 AH contents, with source notes, page ranges, and original diagrams'
);
assert(
  getNationalTextbookInfo('SA', 'ARABIC_LIT', 'G11', 'GENERAL', 'ar', 'PUBLIC').textbookName
    .includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'ARABIC_LIT', 'G11', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('ARABIC_LIT', 'SA', 'G11', 'ar', 'PUBLIC') === 'اللغة العربية 1-2 (الكفايات اللغوية)',
  'Saudi Grade 11 Arabic metadata identifies the supplied textbook, edition, term, and course name'
);
const saudiMath21 = loadSubjectLectures('MATH', 'SA', 'G11', 'PUBLIC', 'GENERAL');
const saudiMath21Titles = [
  'الدوال والمتباينات',
  'المصفوفات',
  'كثيرات الحدود ودوالها',
  'العلاقات والدوال العكسية والجذرية'
];
const saudiMath11 = loadSubjectLectures('MATH', 'SA', 'G10', 'PUBLIC', 'GENERAL');
const saudiMath11Titles = [
  'التبرير والبرهان',
  'التوازي والتعامد',
  'المثلثات المتطابقة',
  'العلاقات في المثلث'
];
assert(
  saudiMath11.length === saudiMath11Titles.length &&
    saudiMath11.every((lecture, index) =>
      lecture.titleAr === saudiMath11Titles[index] &&
      lecture.descriptionAr?.includes('1448هـ/2026م') &&
      lecture.descriptionAr.includes('ص 8–9') &&
      lecture.descriptionAr.includes(['11–82', '85–142', '145–210', '213–272'][index]) &&
      lecture.descriptionAr.includes('math1.1-part1.pdf') &&
      lecture.country === 'SA' &&
      lecture.gradeLevel === 'G10' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.sections?.some((section) =>
        section.diagram?.diagramType === 'digital_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.contentAr.includes('الشرح والأنشطة والتقويمات والرسوم من إعداد المنصة')
      ) &&
      lecture.assessment.questions.length > 0
    ) &&
    saudiMath11[0].keyConceptsAr.some((topic) => topic.includes('العبارات الشرطية')) &&
    saudiMath11[1].keyConceptsAr.some((topic) => topic.includes('ميل المستقيم')) &&
    saudiMath11[2].keyConceptsAr.some((topic) => topic.includes('SSS, SAS')) &&
    saudiMath11[3].keyConceptsAr.some((topic) => topic.includes('متباينة المثلث')),
  'Saudi Grade 10 Mathematics 1-1 chapters, topics, page ranges, source notes, assessments, and illustrations match the supplied contents'
);
const saudiGrade10MathTracks = [
  'GENERAL',
  'CS_ENGINEERING',
  'HEALTH_LIFE',
  'BUSINESS',
  'SHARIA_HUMANITIES',
  'SCIENCE_MATH',
  'SCIENCE_BIO'
] as const satisfies readonly EducationTrack[];
assert(
  saudiGrade10MathTracks.every((track) => {
    const course = getCurriculumForSubject('MATH', 'G10', 'SA', 'PUBLIC', track);
    return course.length === 4 && course.every((lecture) => lecture.educationTrack === track);
  }),
  'Saudi public Mathematics 1-1 follows the shared common-first-year route for each configured track'
);
assert(
  !getCurriculumForSubject('MATH', 'G10', 'SA', 'PRIVATE', 'GENERAL').length &&
    !loadSubjectLectures('MATH', 'SA', 'G10', 'PRIVATE', 'GENERAL').length &&
    !getCurriculumForSubject('MATH', 'G10', 'SA', 'INTERNATIONAL', 'GENERAL').length &&
    !loadSubjectLectures('MATH', 'SA', 'G10', 'INTERNATIONAL', 'GENERAL').length &&
    getCurriculumForSubject('MATH', 'G10', 'EG', 'PUBLIC').every((lecture) =>
      !lecture.id.startsWith('sa-math1-1-g10-')
    ),
  'Saudi Mathematics 1-1 remains separate from private, international, and Egyptian routes'
);
assert(
  getNationalTextbookInfo('SA', 'MATH', 'G10', 'GENERAL', 'ar', 'PUBLIC').textbookName
    .includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'MATH', 'G10', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalSubjectLabel('MATH', 'SA', 'G10', 'ar', 'PUBLIC') === 'رياضيات 1-1 (السنة الأولى المشتركة)' &&
    getNationalTextbookInfo('SA', 'MATH', 'G10', 'GENERAL', 'ar', 'PRIVATE').textbookName
      .includes('غير مطابق لكتاب حكومي وطني'),
  'Saudi Grade 10 mathematics metadata identifies the verified edition only for public common-year education'
);
const saudiMath21PageRanges = ['11–58', '61–104', '107–174', '177–234'];
assert(
  saudiMath21.length === saudiMath21Titles.length &&
    saudiMath21.every((lecture, index) =>
      lecture.titleAr === saudiMath21Titles[index] &&
      lecture.descriptionAr?.includes('1448هـ/2026م') &&
      lecture.descriptionAr.includes('ص 8–9') &&
      lecture.descriptionAr.includes(saudiMath21PageRanges[index]) &&
      lecture.descriptionAr.includes('MATH2.1.pdf') &&
      lecture.country === 'SA' &&
      lecture.gradeLevel === 'G11' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.sections?.some((section) =>
        section.diagram?.diagramType === 'digital_skills' &&
        section.diagram.visualSteps?.length === 4 &&
        section.contentAr.includes('الشرح والأنشطة والتقويمات والرسوم من إعداد المنصة')
      ) &&
      lecture.assessment.questions.length > 0
    ) &&
    saudiMath21[0].keyConceptsAr.some((topic) => topic.includes('البرمجة الخطية والحل الأمثل')) &&
    saudiMath21[1].keyConceptsAr.some((topic) => topic.includes('قاعدة كرامر')) &&
    saudiMath21[2].keyConceptsAr.some((topic) => topic.includes('نظرية الباقي والعوامل')) &&
    saudiMath21[3].keyConceptsAr.some((topic) => topic.includes('الأسس النسبية')),
  'Saudi Grade 11 Mathematics 2-1 chapters, topics, page ranges, source notes, assessments, and illustrations match the supplied contents'
);
const saudiMath21Cs = getCurriculumForSubject('MATH', 'G11', 'SA', 'PUBLIC', 'CS_ENGINEERING');
assert(
  getCurriculumForSubject('MATH', 'G11', 'SA', 'PUBLIC', 'GENERAL').length === 4 &&
    saudiMath21Cs.length === 4 &&
    saudiMath21Cs.every((lecture) => lecture.educationTrack === 'CS_ENGINEERING'),
  'Saudi public Mathematics 2-1 routes only to its configured general and computer-science pathways'
);
assert(
  (['HEALTH_LIFE', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
    .every((track) =>
      !getCurriculumForSubject('MATH', 'G11', 'SA', 'PUBLIC', track).length &&
      !loadSubjectLectures('MATH', 'SA', 'G11', 'PUBLIC', track).length
    ) &&
    !getCurriculumForSubject('MATH', 'G11', 'SA', 'PRIVATE', 'GENERAL').length &&
    !loadSubjectLectures('MATH', 'SA', 'G11', 'PRIVATE', 'GENERAL').length &&
    !getCurriculumForSubject('MATH', 'G11', 'SA', 'INTERNATIONAL', 'GENERAL').length &&
    !loadSubjectLectures('MATH', 'SA', 'G11', 'INTERNATIONAL', 'GENERAL').length,
  'Saudi Mathematics 2-1 does not leak into unverified Saudi tracks or non-public education types'
);
assert(
  getCurriculumForSubject('MATH', 'G11', 'EG', 'PUBLIC').every((lecture) =>
    !lecture.id.startsWith('sa-math2-1-g11-')
  ),
  'The Saudi Mathematics 2-1 course does not replace Egypt’s Grade 11 mathematics route'
);
assert(
  getNationalTextbookInfo('SA', 'MATH', 'G11', 'GENERAL', 'ar', 'PUBLIC').textbookName
    .includes('1448هـ/2026م') &&
    getNationalTextbookInfo('SA', 'MATH', 'G11', 'GENERAL', 'ar', 'PUBLIC').semester === 'الفصل الدراسي الأول' &&
    getNationalTextbookInfo('SA', 'MATH', 'G11', 'CS_ENGINEERING', 'ar', 'PUBLIC').textbookName
      .includes('رياضيات 2-1') &&
    getNationalSubjectLabel('MATH', 'SA', 'G11', 'ar', 'PUBLIC') === 'رياضيات 2-1 (نظام المسارات)' &&
    getNationalTextbookInfo('SA', 'MATH', 'G11', 'BUSINESS', 'ar', 'PUBLIC').textbookName
      .includes('لم يتم التحقق'),
  'Saudi Grade 11 mathematics metadata identifies the verified edition only for supported pathways'
);
const previousMathStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const mathIsolationStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => mathIsolationStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { mathIsolationStorage.set(key, value); },
    removeItem: (key: string) => { mathIsolationStorage.delete(key); },
    clear: () => { mathIsolationStorage.clear(); }
  }
});
try {
  const firstLecture = saudiMath21[0];
  mathIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_MATH_G10_GENERAL',
    JSON.stringify([
      { ...saudiMath11[0], titleAr: 'عنوان صف عاشر قديم' },
      {
        ...saudiMath11[0],
        id: 'ai-gen-saudi-grade10-math-wrong-topic',
        titleAr: 'موضوع صف عاشر مولد غير موجود'
      }
    ])
  );
  mathIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_MATH_G10_GENERAL',
    JSON.stringify([{
      ...saudiMath11[0],
      id: 'shared-saudi-grade10-math-wrong-topic',
      titleAr: 'محتوى صف عاشر مجتمعي زائد'
    }])
  );
  mathIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_MATH_G11_GENERAL',
    JSON.stringify([
      { ...firstLecture, titleAr: 'عنوان قديم غير مطابق للكتاب' },
      {
        ...firstLecture,
        id: 'ai-gen-saudi-math-wrong-topic',
        titleAr: 'موضوع مولد غير موجود في الكتاب'
      }
    ])
  );
  mathIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_MATH_G11_GENERAL',
    JSON.stringify([{
      ...firstLecture,
      id: 'shared-saudi-math-wrong-topic',
      titleAr: 'محتوى مجتمعي زائد'
    }])
  );
  const isolatedSaudiMath10 = loadSubjectLectures('MATH', 'SA', 'G10', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiMath10.length === 4 &&
      isolatedSaudiMath10.map((lecture) => lecture.titleAr).join('|') === saudiMath11Titles.join('|') &&
      isolatedSaudiMath10[0].summaryAr === saudiMath11[0].summaryAr &&
      !isolatedSaudiMath10.some((lecture) => lecture.titleAr.includes('زائد') || lecture.titleAr.includes('مولد')),
    'Saudi Mathematics 1-1 ignores stale, shared, and generated content while preserving the verified sequence'
  );
  const isolatedSaudiMath = loadSubjectLectures('MATH', 'SA', 'G11', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiMath.length === 4 &&
      isolatedSaudiMath.map((lecture) => lecture.titleAr).join('|') === saudiMath21Titles.join('|') &&
      isolatedSaudiMath[0].summaryAr === firstLecture.summaryAr &&
      !isolatedSaudiMath.some((lecture) => lecture.titleAr.includes('زائد') || lecture.titleAr.includes('مولد')),
    'Saudi Mathematics 2-1 ignores stale, shared, and generated content while preserving the verified sequence'
  );
} finally {
  if (previousMathStorage) Object.defineProperty(globalThis, 'localStorage', previousMathStorage);
  else delete (globalThis as { localStorage?: Storage }).localStorage;
}
assert(
  (['HEALTH_LIFE', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'] as const satisfies readonly EducationTrack[])
    .every((track) =>
      !getCurriculumForSubject('CHEMISTRY', 'G12', 'SA', 'PUBLIC', track).length &&
      !loadSubjectLectures('CHEMISTRY', 'SA', 'G12', 'PUBLIC', track).length
    ) &&
    !getCurriculumForSubject('CHEMISTRY', 'G12', 'SA', 'PRIVATE', 'GENERAL').length,
  'The verified Saudi public general Chemistry 3 book does not leak into unverified tracks or education types'
);
const supportedScienceDiagrams = new Set([
  'digital_skills',
  'primary_water_cycle', 'plant_animal_cell', 'matter_states_compound',
  'energy_transformation_chain', 'forces_motion_vector', 'atomic_structure',
  'primary_science_g3_unit',
  'chemistry_mixtures_solutions', 'chemistry_acid_base', 'chemistry_redox', 'chemistry_electrochemistry',
  'chemical_kinetics', 'dna_cell_biology', 'kinematics_graph', 'circuit', 'health_science'
]);
const grade3ScienceChapterTitles = [
  'مهارات العلوم والاستقصاء',
  'الوحدة الأولى: المخلوقات الحية — الفصل الأول: التعرف على المخلوقات الحية',
  'الوحدة الأولى: المخلوقات الحية — الفصل الثاني: المخلوقات الحية تنمو وتتغير',
  'الوحدة الثانية: النظام البيئي — الفصل الثالث: النظام البيئي',
  'الوحدة الثانية: النظام البيئي — الفصل الرابع: التغيرات في النظام البيئي',
  'الوحدة الثالثة: الأرض ومواردها — الفصل الخامس: الأرض تتغير',
  'الوحدة الثالثة: الأرض ومواردها — الفصل السادس: موارد الأرض',
] as const;
const saudiGrade3ScienceContents = [
  [0, 'الطريقة العلمية', '8'],
  [0, 'المهارات العلمية', '18'],
  [0, 'تعليمات السلامة', '22'],
  [1, 'الدرس الأول: المخلوقات الحية واحتياجاتها', '26'],
  [1, 'العلوم والرياضيات: ترتيب الحيوانات', '34'],
  [1, 'الدرس الثاني: النباتات وأجزاؤها', '36'],
  [1, 'أعمل كالعلماء: ما الذي تحتاج إليه النباتات لكي تعيش وتنمو؟', '44'],
  [1, 'مراجعة الفصل الأول ونموذج الاختبار', '46'],
  [2, 'الدرس الأول: دورات حياة النباتات', '52'],
  [2, 'التركيز على المهارات: مهارة الاستقصاء: تكوين فرضية', '60'],
  [2, 'الدرس الثاني: دورات حياة الحيوانات', '62'],
  [2, 'مهن مرتبطة مع العلوم: مدرب الحيوانات', '70'],
  [2, 'مراجعة الفصل الثاني ونموذج الاختبار (1)', '71'],
  [2, 'نموذج الاختبار (2)', '75'],
  [3, 'الدرس الأول: السلاسل والشبكات الغذائية', '80'],
  [3, 'التركيز على المهارات: مهارة الاستقصاء: التواصل', '88'],
  [3, 'الدرس الثاني: التكيف', '90'],
  [3, 'أعمل كالعلماء: كيف يساعد التخفي بعض الحيوانات على البقاء حية؟', '98'],
  [3, 'مراجعة الفصل الثالث ونموذج الاختبار', '100'],
  [4, 'الدرس الأول: المخلوقات الحية تغير بيئاتها', '106'],
  [4, 'التركيز على المهارات: مهارة الاستقصاء: استخدام الأرقام', '114'],
  [4, 'الدرس الثاني: تغيرات تؤثر في المخلوقات الحية', '116'],
  [4, 'العلوم والرياضيات: طرح الأعداد الكبيرة', '124'],
  [4, 'مراجعة الفصل الرابع ونموذج الاختبار (1)', '125'],
  [4, 'نموذج الاختبار (2)', '129'],
  [5, 'الدرس الأول: تغيرات الأرض الفجائية', '134'],
  [5, 'قراءة علمية: انزلاق التربة', '141'],
  [5, 'الدرس الثاني: التجوية والتعرية', '142'],
  [5, 'كتابة علمية: الأجزاء المفقودة', '149'],
  [5, 'مراجعة الفصل الخامس ونموذج الاختبار', '150'],
  [6, 'الدرس الأول: التربة', '156'],
  [6, 'التركيز على المهارات: مهارة الاستقصاء: استخدام المتغيرات', '164'],
  [6, 'الدرس الثاني: الأحافير والوقود الأحفوري', '166'],
  [6, 'قراءة علمية: موارد الطاقة المتجددة', '174'],
  [6, 'مراجعة الفصل السادس ونموذج الاختبار (1)', '176'],
  [6, 'نموذج الاختبار (2)', '180'],
] as const;
const saudiGrade3Science = SAUDI_SCIENCE_CURRICULA.G3?.PRIMARY_SCIENCE ?? [];
const saudiPublicGrade3Science = getCurriculumForSubject(
  'PRIMARY_SCIENCE', 'G3', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  saudiGrade3Science.length === saudiGrade3ScienceContents.length &&
    saudiGrade3Science.every((lecture, index) => {
      const [chapter, titleAr] = saudiGrade3ScienceContents[index];
      return lecture.id === `sa-primary-science-g3-1448-${index + 1}` &&
        lecture.order === index + 1 &&
        lecture.titleAr === titleAr &&
        lecture.unitTitleAr === grade3ScienceChapterTitles[chapter] &&
        lecture.sections?.length === 1 &&
          lecture.sections[0].contentAr.trim().length > 0 &&
          lecture.gradeLevelNameAr.includes('طبعة 1448هـ/2026م') &&
          lecture.termAr.includes('الجزء الأول من المقرر') &&
        lecture.sections[0].diagram?.diagramType === 'primary_science_g3_unit' &&
        lecture.sections[0].diagram?.id.endsWith(`-unit-${chapter}-visual`) &&
        lecture.sections[0].diagram?.visualSteps?.length === 4 &&
        lecture.sections[0].diagram?.captionAr === 'رسم توضيحي للفكرة العلمية.' &&
        lecture.assessment.questions.length === 1 &&
        lecture.assessment.questions[0].optionsAr.length === 4 &&
        lecture.assessment.questions[0].correctIndex === 0;
    }) &&
    saudiPublicGrade3Science.map((lecture) => lecture.id).join('|') ===
      saudiGrade3Science.map((lecture) => lecture.id).join('|') &&
    !['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].some((educationType) =>
      getCurriculumForSubject(
        'PRIMARY_SCIENCE',
        'G3',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).some((lecture) => lecture.id.startsWith('sa-primary-science-g3-1448-'))
    ),
  'Saudi Grade 3 Science follows all 36 verified contents entries, visuals, and assessments on the public-school route'
);
const saudiGrade3ScienceTextbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
const saudiGrade3ScienceTextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G3', 'GENERAL', 'en', 'PUBLIC'
);
const saudiGrade3ScienceTextbookPrivate = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G3', 'GENERAL', 'ar', 'PRIVATE'
);
assert(
  saudiGrade3ScienceTextbook.textbookName.includes('36 موضوعًا') &&
    saudiGrade3ScienceTextbook.textbookName.includes('1448هـ/2026م') &&
    saudiGrade3ScienceTextbook.textbookName.includes('1446هـ') &&
    saudiGrade3ScienceTextbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    saudiGrade3ScienceTextbookEn.textbookName.includes('36 introductory') &&
    saudiGrade3ScienceTextbookPrivate.textbookName.includes('غير مطابق لكتاب حكومي وطني') &&
    getNationalSubjectLabel('PRIMARY_SCIENCE', 'SA', 'G3', 'ar', 'PUBLIC').includes('فهرس الجزء الأول المطبوع موثق') &&
    getNationalSubjectLabel('PRIMARY_SCIENCE', 'SA', 'G3', 'ar', 'PRIVATE').includes('نوع التعليم غير متحقق'),
  'Saudi Grade 3 Science metadata verifies the public Part One textbook and labels other education types unverified'
);
const saudiGrade6ScienceTitles = [
  'أعمل كالعلماء',
  'الطريقة العلمية',
  'المهارات العلمية',
  'تعليمات السلامة',
  'الدرس الأول: نظرية الخلية',
  'التركيز على المهارات: الملاحظة',
  'الدرس الثاني: الخلية النباتية والخلية الحيوانية',
  'أعمل كالعلماء: ما التنفس الخلوي؟',
  'مراجعة الفصل الأول ونموذج الاختبار',
  'الدرس الأول: انقسام الخلايا',
  'قراءة علمية: السرطان: خلل في دورة الخلية',
  'الدرس الثاني: الوراثة والصفات',
  'كتابة علمية: تحسين المنتجات الزراعية',
  'مراجعة الفصل الثاني ونموذج الاختبار',
  'الدرس الأول: عمليات الحياة في النباتات',
  'قراءة علمية: هجرة النباتات',
  'الدرس الثاني: عمليات الحياة في المخلوقات الحية الدقيقة',
  'كتابة علمية: الحياة في الأعماق',
  'مراجعة الفصل الثالث ونموذج الاختبار',
  'الدرس الأول: الهضم والإخراج والتنفس والدوران',
  'أعمل كالعلماء: كيف أقارن بين أحجام مختلفة من الأوعية الدموية؟',
  'الدرس الثاني: الحركة والإحساس',
  'كتابة علمية: المحافظة على الصحة',
  'مراجعة الفصل الرابع ونموذج الاختبار',
  'الدرس الأول: السلاسل والشبكات الغذائية وهرم الطاقة',
  'العلوم والرياضيات: الطيور المهاجرة',
  'الدرس الثاني: مقارنة الأنظمة البيئية',
  'كتابة علمية: رحلة إلى محمية طبيعية',
  'مراجعة الفصل الخامس ونموذج الاختبار',
  'الدرس الأول: التربة',
  'أعمل كالعلماء: أي أنواع التربة أفضل لنمو النبات؟',
  'الدرس الثاني: حماية الموارد',
  'قراءة علمية: الطاقة النظيفة',
  'مراجعة الفصل السادس ونموذج الاختبار'
];
const saudiGrade6Science = SAUDI_SCIENCE_CURRICULA.G6?.PRIMARY_SCIENCE ?? [];
const saudiPublicGrade6Science = getCurriculumForSubject(
  'PRIMARY_SCIENCE', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  saudiGrade6Science.length === saudiGrade6ScienceTitles.length &&
    saudiGrade6Science.every((lecture, index) =>
      lecture.id === `sa-primary-science-g6-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === saudiGrade6ScienceTitles[index] &&
      lecture.sections?.[0].contentAr.trim().length > 0 &&
      lecture.gradeLevelNameAr.includes('طبعة 1448هـ/2026م') &&
      lecture.termAr.includes('الجزء الأول من المقرر') &&
      !!lecture.sections[0].diagram &&
      lecture.sections[0].diagram.captionAr === 'رسم توضيحي للفكرة العلمية.' &&
      lecture.sections[0].diagram.visualSteps?.length === 4 &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 4
    ) &&
    saudiPublicGrade6Science.map((lecture) => lecture.id).join('|') ===
      saudiGrade6Science.map((lecture) => lecture.id).join('|') &&
    !['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].some((educationType) =>
      getCurriculumForSubject(
        'PRIMARY_SCIENCE',
        'G6',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).some((lecture) => lecture.id.startsWith('sa-primary-science-g6-1448-'))
    ),
  'Saudi Grade 6 Science follows all 34 verified contents entries and stays on the public-school route'
);
const saudiGrade6ScienceTextbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  saudiGrade6ScienceTextbook.textbookName.includes('الجزء الأول من المقرر') &&
    saudiGrade6ScienceTextbook.textbookName.includes('1448هـ/2026م') &&
  saudiGrade6ScienceTextbook.textbookName.includes('مطابقة للفهرس ص 4–5'),
  'Saudi Grade 6 Science textbook metadata identifies the verified part and edition'
);
const saudiGrade4ScienceTitles = [
  'أعمل كالعلماء',
  'الطريقة العلمية',
  'المهارات العلمية',
  'تعليمات السلامة',
  'الدرس الأول: الخلايا',
  'الدرس الثاني: تصنيف المخلوقات الحية',
  'مراجعة الفصل الأول ونموذج الاختبار',
  'الدرس الأول: الحيوانات اللافقارية',
  'الدرس الثاني: الحيوانات الفقارية',
  'الدرس الثالث: أجهزة أجسام الحيوانات',
  'مراجعة الفصل الثاني ونموذج الاختبار',
  'نموذج اختبار (2)',
  'الدرس الأول: مقدمة في الأنظمة البيئية',
  'الدرس الثاني: العلاقات في الأنظمة البيئية',
  'الدرس الثالث: التغيرات في الأنظمة البيئية',
  'مراجعة الفصل الثالث ونموذج الاختبار',
  'نموذج اختبار (2)',
  'الدرس الأول: الأمراض',
  'الدرس الثاني: العدوى وانتقالها',
  'مراجعة الفصل الرابع ونموذج الاختبار (1)',
  'الدرس الأول: المحافظة على الصحة',
  'الدرس الثاني: الغذاء والتغذية',
  'مراجعة الفصل الخامس ونموذج الاختبار (1)',
  'نموذج اختبار (2)'
];
const saudiGrade4Science = SAUDI_SCIENCE_CURRICULA.G4?.PRIMARY_SCIENCE ?? [];
const saudiPublicGrade4Science = getCurriculumForSubject(
  'PRIMARY_SCIENCE', 'G4', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  saudiGrade4Science.length === saudiGrade4ScienceTitles.length &&
    saudiGrade4Science.every((lecture, index) =>
      lecture.id === `sa-primary-science-g4-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === saudiGrade4ScienceTitles[index] &&
      lecture.sections?.[0].contentAr.trim().length > 0 &&
      lecture.gradeLevelNameAr.includes('1448هـ/2026م') &&
      lecture.termAr.includes('الجزء الأول من المقرر') &&
      !!lecture.sections[0].diagram &&
      lecture.sections[0].diagram.captionAr === 'رسم توضيحي للفكرة العلمية.' &&
      lecture.sections[0].diagram.visualSteps?.length === 4 &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 4
    ) &&
    saudiPublicGrade4Science.map((lecture) => lecture.id).join('|') ===
      saudiGrade4Science.map((lecture) => lecture.id).join('|') &&
    !['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].some((educationType) =>
      getCurriculumForSubject(
        'PRIMARY_SCIENCE',
        'G4',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).some((lecture) => lecture.id.startsWith('sa-primary-science-g4-1448-'))
    ),
  'Saudi Grade 4 Science matches the verified core lessons, reviews, and test pages and stays on the public-school route'
);
const saudiGrade4ScienceTextbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
const saudiGrade4ScienceTextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G4', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  saudiGrade4ScienceTextbook.textbookName.includes('الصف الرابع الابتدائي') &&
    saudiGrade4ScienceTextbook.textbookName.includes('الجزء الأول من المقرر') &&
    saudiGrade4ScienceTextbook.textbookName.includes('1448هـ/2026م') &&
    saudiGrade4ScienceTextbook.textbookName.includes('مطابقة للفهرس ص 5–6') &&
    saudiGrade4ScienceTextbook.textbookName.includes('رُوجعت مطالع الدروس الرئيسة') &&
    saudiGrade4ScienceTextbookEn.textbookName.includes('Grade 4') &&
    saudiGrade4ScienceTextbookEn.textbookName.includes('contents pp. 5–6') &&
    saudiGrade4ScienceTextbookEn.textbookName.includes('main lesson openings reviewed') &&
    saudiGrade4ScienceTextbookEn.textbookName.includes('1446 AH'),
  'Saudi Grade 4 Science textbook metadata identifies the verified contents and notes the cover edition'
);
const saudiGrade5ScienceTitles = [
  'أعمل كالعلماء',
  'الطريقة العلمية',
  'المهارات العلمية',
  'تعليمات السلامة',
  'الدرس الأول: تصنيف المخلوقات الحية',
  'كتابة علمية: حياة فأر الخلد تحت الأرض',
  'الدرس الثاني: النباتات',
  'قراءة علمية: توفير الماء على طريقة نبات الصبار',
  'مراجعة الفصل الأول ونموذج الاختبار',
  'الدرس الأول: التكاثر',
  'العلوم والرياضيات: تكاثر البكتيريا',
  'الدرس الثاني: دورات الحياة',
  'التركيز على المهارات: الملاحظة',
  'مراجعة الفصل الثاني ونموذج الاختبار',
  'الدرس الأول: العلاقات في الأنظمة البيئية',
  'كتابة علمية: من حكايات الصحراء: الثعبان والجربوع',
  'الدرس الثاني: التكيف والبقاء',
  'قراءة علمية: أشجار القرم',
  'مراجعة الفصل الثالث ونموذج الاختبار',
  'الدرس الأول: الدورات في الأنظمة البيئية',
  'أعمل كالعلماء: كيف ينتقل الماء داخل النبات وخارجه؟',
  'الدرس الثاني: التغيرات في الأنظمة البيئية',
  'كتابة علمية: المها العربي',
  'مراجعة الفصل الرابع ونموذج الاختبار',
  'الدرس الأول: معالم سطح الأرض',
  'كتابة علمية: القارات العملاقة',
  'الدرس الثاني: العمليات المؤثرة في سطح الأرض',
  'أعمل كالعلماء: كيف تساعد البراكين على تشكيل الجزر؟',
  'مراجعة الفصل الخامس ونموذج الاختبار',
  'الدرس الأول: مصادر الطاقة',
  'مهنة علمية: الجيولوجي في حفر الآبار',
  'الدرس الثاني: الهواء والماء',
  'العلوم والرياضيات: الماء على الأرض',
  'مراجعة الفصل السادس ونموذج الاختبار',
  'مصطلحات العلوم'
];
const saudiGrade5Science = SAUDI_SCIENCE_CURRICULA.G5?.PRIMARY_SCIENCE ?? [];
const saudiPublicGrade5Science = getCurriculumForSubject(
  'PRIMARY_SCIENCE', 'G5', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  saudiGrade5Science.length === saudiGrade5ScienceTitles.length &&
    saudiGrade5Science.every((lecture, index) =>
      lecture.id === `sa-primary-science-g5-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === saudiGrade5ScienceTitles[index] &&
      lecture.sections?.[0].contentAr.trim().length > 0 &&
      lecture.gradeLevelNameAr.includes('طبعة 1448هـ/2026م') &&
      lecture.termAr.includes('الجزء الأول من المقرر') &&
      !!lecture.sections[0].diagram &&
      lecture.sections[0].diagram.captionAr === 'رسم توضيحي للفكرة العلمية.' &&
      lecture.sections[0].diagram.visualSteps?.length === 4 &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 4
    ) &&
    saudiPublicGrade5Science.map((lecture) => lecture.id).join('|') ===
      saudiGrade5Science.map((lecture) => lecture.id).join('|') &&
    !['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].some((educationType) =>
      getCurriculumForSubject(
        'PRIMARY_SCIENCE',
        'G5',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).some((lecture) => lecture.id.startsWith('sa-primary-science-g5-1448-'))
    ),
  'Saudi Grade 5 Science follows all 35 verified contents entries and stays on the public-school route'
);
const saudiGrade5ScienceTextbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
const saudiGrade5ScienceTextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_SCIENCE', 'G5', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  saudiGrade5ScienceTextbook.textbookName.includes('الصف الخامس الابتدائي') &&
    saudiGrade5ScienceTextbook.textbookName.includes('الجزء الأول من المقرر') &&
    saudiGrade5ScienceTextbook.textbookName.includes('1448هـ/2026م') &&
    saudiGrade5ScienceTextbook.textbookName.includes('مطابقة للفهرس') &&
    saudiGrade5ScienceTextbook.textbookName.includes('ص 5') &&
    saudiGrade5ScienceTextbookEn.textbookName.includes('Grade 5') &&
    saudiGrade5ScienceTextbookEn.textbookName.includes('contents pp. 5–6'),
  'Saudi Grade 5 Science textbook metadata identifies the verified part, contents, and edition'
);
assert(
  saudiScienceLectures.some((lecture) =>
    lecture.titleAr === 'النباتات والحيوانات وبيئاتها' &&
    lecture.sections?.[0].contentAr ===
      'تتعرف المخلوقات الحية إلى موارد البيئة التي تحتاج إليها.\n\nتساعد أجزاء النبات والحيوان على أداء وظائف مختلفة.'
  ),
  'Grade 2 science displays the two instructional concepts without the preparation disclaimer'
);
assert(
  saudiScienceLectures.length === saudiScienceRoutes.length * 2 + 146 &&
    saudiScienceLectures.every((lecture) =>
      lecture.sections?.some((section) =>
        !!section.diagram &&
        supportedScienceDiagrams.has(section.diagram.diagramType) &&
        (section.diagram.visualSteps?.length ?? 0) === 4 &&
        section.contentAr.trim().length > 0 &&
        !/المصدر المعتمد|مرجع المكوّن|لم تتوفر نسخة قابلة للتحقق|طبعة وزارة بعينها|ليس صورة من كتاب الوزارة/i.test(
          `${section.contentAr} ${section.diagram.captionAr}`
        )
      ) &&
      (lecture.assessment.questions?.length ?? 0) > 0
    ),
  'Every Saudi science lesson across G1–G12 has clear instructional content, an illustration, and an assessment without source disclaimers'
);
assert(
  saudiScienceLectures.every((lecture) =>
    !/Egyptian|Egypt|الإعدادي|منهج مصر|الصف الثاني الإعدادي/i.test(
      `${lecture.titleAr} ${lecture.titleEn} ${lecture.gradeLevelNameAr} ${lecture.gradeLevelNameEn}`
    )
  ),
  'Saudi science titles and grade labels contain no foreign-country course labels'
);
assert(
  getCurriculumForSubject('GENERAL_SCIENCE', 'G9', 'SD', 'PUBLIC').some((lecture) =>
    lecture.id.startsWith('sd-')
  ) &&
    !getCurriculumForSubject('GENERAL_SCIENCE', 'G8', 'EG', 'PUBLIC').some((lecture) =>
      lecture.id.startsWith('sa-science-')
    ) &&
    !getCurriculumForSubject('PRIMARY_SCIENCE', 'G4', 'SA', 'INTERNATIONAL').some((lecture) =>
      lecture.id.startsWith('sa-science-') ||
      lecture.id.startsWith('sa-primary-science-g4-1448-')
    ),
  'Saudi science content stays out of Sudanese, Egyptian, and Saudi international-school routes'
);

const previousScienceStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const scienceIsolationStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => scienceIsolationStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { scienceIsolationStorage.set(key, value); },
    removeItem: (key: string) => { scienceIsolationStorage.delete(key); },
    clear: () => scienceIsolationStorage.clear()
  }
});
try {
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_CHEMISTRY_G12_GENERAL',
    JSON.stringify([
      {
        ...saudiChemistry3[0],
        id: 'sa-science-g12-chemistry-1',
        titleAr: 'الاتزان الكيميائي والعوامل المؤثرة فيه'
      },
      {
        ...saudiChemistry3[1],
        id: 'sa-science-g12-chemistry-2',
        titleAr: 'الكيمياء العضوية والمواد في الحياة'
      }
    ])
  );
  const refreshedChemistry3 = loadSubjectLectures('CHEMISTRY', 'SA', 'G12', 'PUBLIC', 'GENERAL');
  assert(
    refreshedChemistry3.length === 13 &&
      refreshedChemistry3[0].titleAr === 'أنواع المخاليط' &&
      refreshedChemistry3[12].titleAr === 'التحليل الكهربائي',
    'Outdated cached Saudi Chemistry 3 lessons are replaced by the supplied 1448 AH course sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_CHEMISTRY_G10_GENERAL',
    JSON.stringify([{
      ...saudiChemistry1[0],
      id: 'sa-science-g10-chemistry-1',
      titleAr: 'محتوى كيمياء قديم غير مطابق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_CHEMISTRY_G10_GENERAL',
    JSON.stringify([{
      ...saudiChemistry1[0],
      id: 'shared-saudi-chemistry-cross-course',
      titleAr: 'محتوى مجتمعي زائد',
      isSharedCommunity: true
    }])
  );
  const isolatedChemistry1 = loadSubjectLectures('CHEMISTRY', 'SA', 'G10', 'PUBLIC', 'GENERAL');
  assert(
    isolatedChemistry1.length === 5 &&
      isolatedChemistry1.map((lecture) => lecture.titleAr).join('|') === saudiChemistry1Titles.join('|') &&
      !isolatedChemistry1.some((lecture) => lecture.titleAr.includes('قديم') || lecture.titleAr.includes('زائد')),
    'Saudi Chemistry 1 ignores stale and shared cached content while preserving the verified chapter sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_CHEMISTRY_G11_GENERAL',
    JSON.stringify([{
      ...saudiChemistry2[0],
      id: 'stale-saudi-chemistry2-content',
      titleAr: 'محتوى كيمياء 2 قديم غير مطابق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_CHEMISTRY_G11_GENERAL',
    JSON.stringify([{
      ...saudiChemistry2[0],
      id: 'shared-saudi-chemistry2-content',
      titleAr: 'محتوى كيمياء 2 مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  const isolatedChemistry2 = loadSubjectLectures('CHEMISTRY', 'SA', 'G11', 'PUBLIC', 'GENERAL');
  assert(
    isolatedChemistry2.length === saudiChemistry2Titles.length &&
      isolatedChemistry2.map((lecture) => lecture.titleAr).join('|') === saudiChemistry2Titles.join('|') &&
      !isolatedChemistry2.some((lecture) => lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')),
    'Saudi Chemistry 2-1 ignores stale and shared cached content while preserving the verified chapter sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PHYSICS_G11_CS_ENGINEERING',
    JSON.stringify([{
      ...saudiPhysics2[0],
      titleAr: 'محتوى فيزياء قديم غير مطابق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PHYSICS_G11_CS_ENGINEERING',
    JSON.stringify([{
      ...saudiPhysics2[0],
      id: 'shared-saudi-physics2-content',
      titleAr: 'محتوى فيزياء مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([{
      ...saudiPhysics2[0],
      id: 'cloud-saudi-physics2-content',
      titleAr: 'محتوى فيزياء سحابي من مسار آخر',
      isSharedCommunity: true
    }])
  );
  const isolatedPhysics2 = loadSubjectLectures(
    'PHYSICS', 'SA', 'G11', 'PUBLIC', 'CS_ENGINEERING'
  );
  assert(
    isolatedPhysics2.length === saudiPhysics2Titles.length &&
      isolatedPhysics2.map((lecture) => lecture.titleAr).join('|') === saudiPhysics2Titles.join('|') &&
      !isolatedPhysics2.some((lecture) => /قديم|مشترك|سحابي/.test(lecture.titleAr)),
    'Saudi Physics 2 ignores stale, shared, and cloud-cached content while preserving the verified sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_BIOLOGY_G11_HEALTH_LIFE',
    JSON.stringify([{
      ...saudiBiology2[0],
      titleAr: 'محتوى أحياء قديم غير مطابق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_BIOLOGY_G11_HEALTH_LIFE',
    JSON.stringify([{
      ...saudiBiology2[0],
      id: 'shared-saudi-biology2-content',
      titleAr: 'محتوى أحياء مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([{
      ...saudiBiology2[0],
      id: 'cloud-saudi-biology2-content',
      titleAr: 'محتوى أحياء سحابي من مسار آخر',
      isSharedCommunity: true
    }])
  );
  const isolatedBiology2 = loadSubjectLectures(
    'BIOLOGY', 'SA', 'G11', 'PUBLIC', 'HEALTH_LIFE'
  );
  assert(
    isolatedBiology2.length === saudiBiology2Titles.length &&
      isolatedBiology2.map((lecture) => lecture.titleAr).join('|') === saudiBiology2Titles.join('|') &&
      !isolatedBiology2.some((lecture) => /قديم|مشترك|سحابي/.test(lecture.titleAr)),
    'Saudi Biology 2-1 ignores stale, shared, and cloud-cached content while preserving the verified sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_BIOLOGY_G11_GENERAL',
    JSON.stringify(saudiBiology2)
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_BIOLOGY_G11_GENERAL',
    JSON.stringify(saudiBiology2)
  );
  assert(
    loadSubjectLectures('BIOLOGY', 'SA', 'G11', 'PUBLIC', 'GENERAL').length === 0,
    'Saudi Biology 2-1 never falls back to public, shared, or cached content on an unsupported track'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_BIOLOGY_G10_GENERAL',
    JSON.stringify([{
      ...saudiBiology1[0],
      id: 'sa-science-g10-biology-1',
      titleAr: 'محتوى أحياء قديم غير مطابق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_BIOLOGY_G10_GENERAL',
    JSON.stringify([{
      ...saudiBiology1[0],
      id: 'shared-saudi-biology-cross-course',
      titleAr: 'محتوى أحياء مجتمعي زائد',
      isSharedCommunity: true
    }])
  );
  const isolatedBiology1 = loadSubjectLectures('BIOLOGY', 'SA', 'G10', 'PUBLIC', 'GENERAL');
  assert(
    isolatedBiology1.length === 8 &&
      isolatedBiology1.map((lecture) => lecture.titleAr).join('|') === saudiBiology1Titles.join('|') &&
      !isolatedBiology1.some((lecture) => lecture.titleAr.includes('قديم') || lecture.titleAr.includes('زائد')),
    'Saudi Biology 1 ignores stale and shared cached content while preserving the verified chapter sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ENGLISH_G10_GENERAL',
    JSON.stringify([{
      ...saudiEnglish1[0],
      id: 'stale-saudi-english-content',
      titleEn: 'Stale non-Mega Goal unit'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ENGLISH_G10_GENERAL',
    JSON.stringify([{
      ...saudiEnglish1[0],
      id: 'shared-saudi-english-content',
      titleEn: 'Shared English from another course',
      isSharedCommunity: true
    }])
  );
  const isolatedEnglish1 = loadSubjectLectures('ENGLISH', 'SA', 'G10', 'PUBLIC', 'GENERAL');
  assert(
    isolatedEnglish1.length === 12 &&
      isolatedEnglish1.map((lecture) => lecture.titleEn).join('|') === saudiEnglish1Titles.join('|') &&
      !isolatedEnglish1.some((lecture) => lecture.titleEn.includes('Stale') || lecture.titleEn.includes('Shared')),
    'Saudi Mega Goal 1 ignores stale and shared cached content while preserving the verified unit sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ENGLISH_G11_GENERAL',
    JSON.stringify([{
      ...saudiEnglish2[0],
      id: 'stale-saudi-english2-content',
      titleEn: 'Stale non-Mega Goal 2 unit'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ENGLISH_G11_GENERAL',
    JSON.stringify([{
      ...saudiEnglish2[0],
      id: 'shared-saudi-english2-content',
      titleEn: 'Shared English 2 from another course',
      isSharedCommunity: true
    }])
  );
  const isolatedEnglish2 = loadSubjectLectures('ENGLISH', 'SA', 'G11', 'PUBLIC', 'GENERAL');
  assert(
    isolatedEnglish2.length === 12 &&
      isolatedEnglish2.map((lecture) => lecture.titleEn).join('|') === saudiEnglish2Titles.join('|') &&
      !isolatedEnglish2.some((lecture) => lecture.titleEn.includes('Stale') || lecture.titleEn.includes('Shared')),
    'Saudi Mega Goal 2 ignores stale and shared cached content while preserving the verified unit sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ENGLISH_G5_GENERAL',
    JSON.stringify([{
      ...saudiEnglishG5[0],
      titleEn: 'Stale unverified Grade 5 English',
      isCompleted: true
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ENGLISH_G5_GENERAL',
    JSON.stringify([{
      ...saudiEnglishG5[0],
      id: 'shared-g5-english-content',
      titleEn: 'Shared English from another route',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiEnglishG5 = loadSubjectLectures('ENGLISH', 'SA', 'G5', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiEnglishG5.length === SAUDI_G5_ENGLISH_UNIT_COUNT &&
      isolatedSaudiEnglishG5.map((lecture) => lecture.id).join('|') ===
        saudiEnglishG5.map((lecture) => lecture.id).join('|') &&
      isolatedSaudiEnglishG5[0].titleEn === 'Personal Interests' &&
      !isolatedSaudiEnglishG5.some((lecture) =>
        lecture.titleEn.includes('Stale') || lecture.titleEn.includes('Shared')
      ),
    'Saudi Grade 5 English ignores stale and shared cached content while preserving the verified book sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ENGLISH_G2_GENERAL',
    JSON.stringify([{
      ...saudiEnglishG2[0],
      titleEn: 'Stale unverified Grade 2 English',
      isCompleted: true
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ENGLISH_G2_GENERAL',
    JSON.stringify([{
      ...saudiEnglishG2[0],
      id: 'shared-g2-english-content',
      titleEn: 'Shared English from another route',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiEnglishG2 = loadSubjectLectures('ENGLISH', 'SA', 'G2', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiEnglishG2.length === SAUDI_G2_ENGLISH_LECTURE_COUNT &&
      isolatedSaudiEnglishG2.map((lecture) => lecture.id).join('|') ===
        saudiEnglishG2.map((lecture) => lecture.id).join('|') &&
      isolatedSaudiEnglishG2[0].titleEn === 'Feelings' &&
      !isolatedSaudiEnglishG2.some((lecture) =>
        lecture.titleEn.includes('Stale') || lecture.titleEn.includes('Shared')
      ),
    'Saudi Grade 2 English ignores stale and shared cached content while preserving the verified book sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ENGLISH_G3_GENERAL',
    JSON.stringify([{
      ...saudiEnglishG3[0],
      titleEn: 'Stale unverified Grade 3 English',
      isCompleted: true
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ENGLISH_G3_GENERAL',
    JSON.stringify([{
      ...saudiEnglishG3[0],
      id: 'shared-g3-english-content',
      titleEn: 'Shared English from another route',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiEnglishG3 = loadSubjectLectures('ENGLISH', 'SA', 'G3', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiEnglishG3.length === SAUDI_G3_ENGLISH_LECTURE_COUNT &&
      isolatedSaudiEnglishG3.map((lecture) => lecture.id).join('|') ===
        saudiEnglishG3.map((lecture) => lecture.id).join('|') &&
      isolatedSaudiEnglishG3[0].titleEn === 'It’s Nice to Meet You!' &&
      !isolatedSaudiEnglishG3.some((lecture) =>
        lecture.titleEn.includes('Stale') || lecture.titleEn.includes('Shared')
      ),
    'Saudi Grade 3 English ignores stale and shared cached content while preserving the verified book sequence'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_SCIENCE_G3_GENERAL',
    JSON.stringify([{
      ...saudiGrade3Science[0],
      id: 'stale-saudi-grade3-science-content',
      titleAr: 'محتوى علوم قديم غير متحقق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_SCIENCE_G3_GENERAL',
    JSON.stringify([{
      ...saudiGrade3Science[0],
      id: 'shared-saudi-grade3-science-content',
      titleAr: 'محتوى علوم مشترك غير معتمد',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiGrade3Science = loadSubjectLectures(
    'PRIMARY_SCIENCE', 'SA', 'G3', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade3Science.length === saudiGrade3ScienceContents.length &&
      isolatedSaudiGrade3Science.map((lecture) => lecture.id).join('|') ===
        saudiGrade3Science.map((lecture) => lecture.id).join('|') &&
      !isolatedSaudiGrade3Science.some((lecture) =>
        lecture.id.includes('stale') || lecture.id.includes('shared') ||
        lecture.titleAr.includes('غير متحقق') || lecture.titleAr.includes('غير معتمد')
      ),
    'Verified Saudi Grade 3 Science ignores stale and shared cached content'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_SCIENCE_G4_GENERAL',
    JSON.stringify([{
      ...saudiGrade4Science[0],
      id: 'stale-saudi-grade4-science-content',
      titleAr: 'محتوى علوم قديم غير متحقق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_SCIENCE_G4_GENERAL',
    JSON.stringify([{
      ...saudiGrade4Science[0],
      id: 'shared-saudi-grade4-science-content',
      titleAr: 'محتوى علوم مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiGrade4Science = loadSubjectLectures(
    'PRIMARY_SCIENCE', 'SA', 'G4', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade4Science.length === saudiGrade4ScienceTitles.length &&
      isolatedSaudiGrade4Science.map((lecture) => lecture.id).join('|') ===
        saudiGrade4Science.map((lecture) => lecture.id).join('|') &&
      !isolatedSaudiGrade4Science.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
      ),
    'Verified Saudi Grade 4 Science ignores stale and shared cached lessons'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_SCIENCE_G6_GENERAL',
    JSON.stringify([{
      ...saudiGrade6Science[0],
      id: 'stale-saudi-grade6-science-content',
      titleAr: 'محتوى علوم قديم غير متحقق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_SCIENCE_G5_GENERAL',
    JSON.stringify([{
      ...saudiGrade5Science[0],
      id: 'stale-saudi-grade5-science-content',
      titleAr: 'محتوى علوم قديم غير متحقق'
    }])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_SCIENCE_G5_GENERAL',
    JSON.stringify([{
      ...saudiGrade5Science[0],
      id: 'shared-saudi-grade5-science-content',
      titleAr: 'محتوى علوم مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiGrade5Science = loadSubjectLectures(
    'PRIMARY_SCIENCE', 'SA', 'G5', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade5Science.length === saudiGrade5ScienceTitles.length &&
      isolatedSaudiGrade5Science.map((lecture) => lecture.id).join('|') ===
        saudiGrade5Science.map((lecture) => lecture.id).join('|') &&
      !isolatedSaudiGrade5Science.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
      ),
    'Verified Saudi Grade 5 Science ignores stale and shared cached lessons'
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_SCIENCE_G6_GENERAL',
    JSON.stringify([{
      ...saudiGrade6Science[0],
      id: 'shared-saudi-grade6-science-content',
      titleAr: 'محتوى علوم مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  const isolatedSaudiGrade6Science = loadSubjectLectures(
    'PRIMARY_SCIENCE', 'SA', 'G6', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade6Science.length === saudiGrade6ScienceTitles.length &&
      isolatedSaudiGrade6Science.map((lecture) => lecture.id).join('|') ===
        saudiGrade6Science.map((lecture) => lecture.id).join('|') &&
      !isolatedSaudiGrade6Science.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
      ),
    'Verified Saudi Grade 6 Science ignores stale and shared cached lessons'
  );

  const scienceCourse = SAUDI_SCIENCE_CURRICULA.G8?.GENERAL_SCIENCE || [];
  const contamination = {
    ...scienceCourse[0],
    id: 'gen-cross-country-science',
    titleAr: 'تسرب من منهج دولة أخرى',
    isSharedCommunity: true,
    country: 'SA' as const,
    subject: 'GENERAL_SCIENCE' as const,
    gradeLevel: 'G8' as const,
    educationType: 'PUBLIC' as const,
    educationTrack: 'GENERAL' as const
  };
  scienceIsolationStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_GENERAL_SCIENCE_G8_GENERAL',
    JSON.stringify([contamination])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([contamination])
  );
  scienceIsolationStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_GENERAL_SCIENCE_G8_GENERAL',
    JSON.stringify([...scienceCourse, contamination])
  );
  const isolatedSaudiScience = loadSubjectLectures(
    'GENERAL_SCIENCE', 'SA', 'G8', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiScience.length === 2 &&
      !isolatedSaudiScience.some((lecture) => lecture.id === contamination.id),
    'Saudi science course ignores shared, cloud, and cached foreign/community lessons'
  );
} finally {
  if (previousScienceStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousScienceStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

console.log('\n--- 9. Verifying Saudi social studies pathways and country isolation ---');
const saudiSocialGrades = [
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
  'G7', 'G8', 'G9', 'G10', 'G11', 'G12'
] as const;
const expectedSaudiSocialStudiesUnits = [
  {
    title: 'التاريخ',
    reviewPage: 19,
    lessons: [
      { title: 'مفهوم التاريخ', page: 12 },
      { title: 'المصطلحات التاريخية', page: 15 },
    ],
  },
  {
    title: 'الدولة السعودية الأولى',
    reviewPage: 51,
    lessons: [
      { title: 'شبه الجزيرة العربية قبل قيام الدولة السعودية الأولى', page: 24 },
      { title: 'تأسيس الدولة السعودية الأولى', page: 28 },
      { title: 'أئمة الدولة السعودية الأولى', page: 38 },
      { title: 'معارك الدفاع عن الدولة السعودية الأولى', page: 44 },
    ],
  },
  {
    title: 'الدولة السعودية الثانية',
    reviewPage: 70,
    lessons: [
      { title: 'تأسيس الدولة السعودية الثانية', page: 56 },
      { title: 'أئمة الدولة السعودية الثانية', page: 61 },
      { title: 'الجوانب الحضارية للدولتين السعوديتين الأولى والثانية', page: 67 },
    ],
  },
  {
    title: 'المملكة العربية السعودية',
    reviewPage: 104,
    lessons: [
      { title: 'الملك عبدالعزيز بن عبدالرحمن بن فيصل آل سعود', page: 76 },
      { title: 'توحيد المملكة العربية السعودية', page: 81 },
      { title: 'ملوك المملكة العربية السعودية (الملك سعود - الملك فيصل)', page: 91 },
      { title: 'ملوك المملكة العربية السعودية (الملك خالد - الملك فهد - الملك عبدالله)', page: 96 },
    ],
  },
  {
    title: 'خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود',
    reviewPage: 126,
    lessons: [
      { title: 'نشأة خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود', page: 112 },
      { title: 'شخصية ومواقف خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود', page: 115 },
      { title: 'إنجازات خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود', page: 119 },
    ],
  },
  {
    title: 'رؤية المملكة العربية السعودية',
    reviewPage: 145,
    lessons: [
      { title: 'رؤية المملكة 2030', page: 132 },
      { title: 'برامج تحقيق رؤية المملكة 2030', page: 135 },
      { title: 'برنامج جودة الحياة', page: 139 },
      { title: 'برنامج تنمية القدرات البشرية', page: 142 },
    ],
  },
  {
    title: 'المواطنة الاجتماعية والاقتصادية',
    reviewPage: 165,
    lessons: [
      { title: 'المواطنة', page: 150 },
      { title: 'الأمانة والصدق', page: 152 },
      { title: 'الآثار التاريخية الوطنية', page: 155 },
      { title: 'الضرائب', page: 160 },
    ],
  },
  {
    title: 'الجغرافيا والمجتمع',
    reviewPage: 187,
    lessons: [
      { title: 'خطوط الطول ودوائر العرض', page: 170 },
      { title: 'موقع وطني', page: 174 },
      { title: 'مناخ وطني', page: 178 },
      { title: 'سكان وطني', page: 181 },
      { title: 'المشاركة المجتمعية', page: 184 },
    ],
  },
];
const expectedSaudiSocialStudiesLessons = expectedSaudiSocialStudiesUnits.flatMap((unit) =>
  unit.lessons.map((lesson) => ({ ...lesson, unit }))
);
const expectedSaudiG5SocialStudiesContents = [
  [1, 'الخلفاء الراشدون', 'الخلفاء الراشدون', 12],
  [1, 'الخلفاء الراشدون', 'الخليفة أبو بكر الصديق', 16],
  [1, 'الخلفاء الراشدون', 'الخليفة عمر بن الخطاب', 19],
  [1, 'الخلفاء الراشدون', 'الخليفة عثمان بن عفان', 22],
  [1, 'الخلفاء الراشدون', 'الخليفة علي بن أبي طالب', 25],
  [2, 'التاريخ الإسلامي', 'الدولة الأموية', 34],
  [2, 'التاريخ الإسلامي', 'الدولة العباسية', 37],
  [2, 'التاريخ الإسلامي', 'الحضارة الإسلامية', 41],
  [3, 'الأمن الوطني', 'الأمن', 52],
  [3, 'الأمن الوطني', 'أجهزة الأمن', 55],
  [4, 'جغرافية وطني المملكة العربية السعودية', 'الموقع والحدود', 64],
  [4, 'جغرافية وطني المملكة العربية السعودية', 'مظاهر السطح', 67],
  [4, 'جغرافية وطني المملكة العربية السعودية', 'المناطق الرملية', 73],
  [4, 'جغرافية وطني المملكة العربية السعودية', 'الأودية', 76],
  [4, 'جغرافية وطني المملكة العربية السعودية', 'المناطق الساحلية والجزر', 80],
  [4, 'جغرافية وطني المملكة العربية السعودية', 'المناطق الإدارية', 83],
  [5, 'مؤسسات الدولة', 'مفهوم مؤسسات الدولة', 106],
  [5, 'مؤسسات الدولة', 'الخِدْمات الحكومية', 109],
  [5, 'مؤسسات الدولة', 'الحِماية الاجتماعية والصحية', 112],
  [6, 'الخرائط والسكان', 'تاريخ الخرائط وتطورها', 120],
  [6, 'الخرائط والسكان', 'السكان', 124],
  [6, 'الخرائط والسكان', 'توزيع السكان (العوامل الطبيعية: التضاريس والمياه)', 128],
  [6, 'الخرائط والسكان', 'توزيع السكان (العوامل الطبيعية: المناخ والموارد)', 132],
  [6, 'الخرائط والسكان', 'توزيع السكان (العوامل البشرية)', 136],
  [7, 'الموارد الاقتصادية', 'المياه', 144],
  [7, 'الموارد الاقتصادية', 'النبات الطبيعي', 147],
  [7, 'الموارد الاقتصادية', 'الثروة الحيوانية', 151],
  [7, 'الموارد الاقتصادية', 'النفط والمعادن', 154],
  [8, 'الأنشطة الاقتصادية', 'الزراعة والرعي', 166],
  [8, 'الأنشطة الاقتصادية', 'الصناعة والتجارة والخِدْمات', 170],
];
const expectedSaudiG5SocialStudiesReviewPages = [28, 45, 59, 97, 115, 139, 160, 176];
const expectedSaudiG4SocialStudiesUnits = [
  { title: 'المواطنة', page: 10, reviewPage: 34 },
  { title: 'التاريخ', page: 38, reviewPage: 58 },
  { title: 'الجغرافيا', page: 62, reviewPage: 85 },
  { title: 'الاقتصاد', page: 90, reviewPage: 106 },
  { title: 'الأرض والخريطة', page: 112, reviewPage: 137 },
  { title: 'المواطنة المسؤولة', page: 142, reviewPage: 156 },
  { title: 'شبه الجزيرة العربية', page: 160, reviewPage: 180 },
  { title: 'الأنبياء', page: 184, reviewPage: 198 },
  { title: 'السِّيْرَة النبوية', page: 202, reviewPage: 225 },
];
const expectedSaudiG4SocialStudiesContents = [
  [1, 'المواطنة', 'الدراسات الاجتماعية', 12],
  [1, 'المواطنة', 'الهوية الوطنية', 16],
  [1, 'المواطنة', 'نظام الحكم', 20],
  [1, 'المواطنة', 'الرموز الوطنية', 24],
  [2, 'التاريخ', 'مفهوم التاريخ', 40],
  [2, 'التاريخ', 'المصادر', 43],
  [2, 'التاريخ', 'السبب والنتيجة', 47],
  [2, 'التاريخ', 'الترتيب الزمني', 51],
  [3, 'الجغرافيا', 'مفهوم الجغرافيا', 64],
  [3, 'الجغرافيا', 'الموقع', 69],
  [3, 'الجغرافيا', 'المكان', 72],
  [3, 'الجغرافيا', 'البيئة', 75],
  [3, 'الجغرافيا', 'الحركة', 79],
  [4, 'الاقتصاد', 'مفهوم الاقتصاد', 92],
  [4, 'الاقتصاد', 'الموارد والاستهلاك', 95],
  [4, 'الاقتصاد', 'التبادل التجاري', 99],
  [5, 'الأرض والخريطة', 'الأرض', 114],
  [5, 'الأرض والخريطة', 'أشكال سطح الأرض', 117],
  [5, 'الأرض والخريطة', 'دوران الأرض', 123],
  [5, 'الأرض والخريطة', 'دوران القمر حول الأرض', 126],
  [5, 'الأرض والخريطة', 'الخريطة', 130],
  [6, 'المواطنة المسؤولة', 'الأسرة والمجتمع', 144],
  [6, 'المواطنة المسؤولة', 'الحقوق والمسؤوليات', 147],
  [6, 'المواطنة المسؤولة', 'العمل الجماعي', 150],
  [7, 'شبه الجزيرة العربية', 'شبه الجزيرة العربية: الموقع والحضارة', 162],
  [7, 'شبه الجزيرة العربية', 'شبه الجزيرة العربية: السكان وأحوالهم', 166],
  [7, 'شبه الجزيرة العربية', 'قِبْلَة المسلمين', 170],
  [7, 'شبه الجزيرة العربية', 'الآثار', 174],
  [8, 'الأنبياء', 'آدم ونوح عليهما السلام', 186],
  [8, 'الأنبياء', 'أولو العزم من الرسل', 189],
  [9, 'السِّيْرَة النبوية', 'نَسَبُ النبي محمد ﷺ ونشأته', 204],
  [9, 'السِّيْرَة النبوية', 'بِعْثَة النبي محمد ﷺ', 208],
  [9, 'السِّيْرَة النبوية', 'الهجرة إلى المدينة المنورة', 212],
  [9, 'السِّيْرَة النبوية', 'غَزَوَات النبي محمد ﷺ', 218],
];
const saudiGrade4SocialStudies = loadSubjectLectures(
  'SAUDI_SOCIAL_STUDIES', 'SA', 'G4', 'PUBLIC', 'GENERAL'
);
const saudiGrade5SocialStudies = loadSubjectLectures(
  'SAUDI_SOCIAL_STUDIES', 'SA', 'G5', 'PUBLIC', 'GENERAL'
);
const saudiSocialStudies = loadSubjectLectures(
  'SAUDI_SOCIAL_STUDIES', 'SA', 'G6', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_SOCIAL_STUDIES_COVERED_GRADES.join('|') === 'G4|G5|G6' &&
    saudiSocialGrades.every((grade) =>
      grade === 'G4'
        ? SAUDI_SOCIAL_STUDIES_CURRICULUM.G4?.length === SAUDI_G4_SOCIAL_STUDIES_LESSON_COUNT &&
          getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL')
            .every((lecture) => lecture.id.startsWith('sa-social-g4-'))
        : grade === 'G5'
        ? SAUDI_SOCIAL_STUDIES_CURRICULUM.G5?.length === SAUDI_G5_SOCIAL_STUDIES_LESSON_COUNT &&
          getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL')
            .every((lecture) => lecture.id.startsWith('sa-social-g5-'))
        : grade === 'G6'
        ? SAUDI_SOCIAL_STUDIES_CURRICULUM.G6?.length === expectedSaudiSocialStudiesLessons.length &&
          getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL')
            .every((lecture) => lecture.id.startsWith('sa-social-g6-'))
        : getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ),
  'Verified Saudi Grade 4, Grade 5, and Grade 6 social studies are available; unverified grades have no curriculum route'
);
assert(
  SAUDI_G4_SOCIAL_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-EJTSM.pdf' &&
    SAUDI_G4_SOCIAL_STUDIES_UNIT_COUNT === expectedSaudiG4SocialStudiesUnits.length &&
    SAUDI_G4_SOCIAL_STUDIES_LESSON_COUNT === expectedSaudiG4SocialStudiesContents.length &&
    SAUDI_G4_SOCIAL_STUDIES_CURRICULUM.length === expectedSaudiG4SocialStudiesContents.length &&
    saudiGrade4SocialStudies.length === expectedSaudiG4SocialStudiesContents.length &&
    JSON.stringify(SAUDI_G4_SOCIAL_STUDIES_TABLE_OF_CONTENTS.map(({
      unitNumber, unitTitleAr, unitPage, titleAr, page
    }) => [unitNumber, unitTitleAr, unitPage, titleAr, page])) ===
      JSON.stringify(expectedSaudiG4SocialStudiesContents.map(([unitNumber, unitTitle, title, page]) => [
        unitNumber,
        unitTitle,
        expectedSaudiG4SocialStudiesUnits[(unitNumber as number) - 1].page,
        title,
        page
      ])) &&
    JSON.stringify(SAUDI_G4_SOCIAL_STUDIES_TABLE_OF_CONTENTS
      .filter(({ reviewPage }) => reviewPage !== undefined)
      .map(({ unitNumber, reviewPage }) => [unitNumber, reviewPage])) ===
      JSON.stringify(expectedSaudiG4SocialStudiesUnits.map((unit, index) => [index + 1, unit.reviewPage])),
  'Saudi Grade 4 Social Studies maps both official contents pages, all 9 units, 34 lessons, and unit review pages'
);
assert(
  expectedSaudiG4SocialStudiesContents.every(([unitNumber, unitTitle, title, page], index) => {
    const lecture = saudiGrade4SocialStudies[index];
    const nextUnitNumber = expectedSaudiG4SocialStudiesContents[index + 1]?.[0];
    const isLastLessonInUnit = nextUnitNumber !== unitNumber;
    const reviewPage = expectedSaudiG4SocialStudiesUnits[(unitNumber as number) - 1].reviewPage;
    return lecture &&
      lecture.titleAr === title &&
      lecture.lessonNumberAr.endsWith(`ص ${page}`) &&
      lecture.unitTitleAr === `الوحدة ${unitNumber}: ${unitTitle}` &&
      lecture.gradeLevel === 'G4' &&
      lecture.subject === 'SAUDI_SOCIAL_STUDIES' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.termAr.includes((unitNumber as number) <= 4 ? 'الجزء الأول' : 'الجزء الثاني') &&
      lecture.summaryAr.includes('عناوين الوحدات والدروس وأرقام صفحاتها مطابقة لفهرسي الجزأين') &&
      lecture.summaryAr.includes('الغلاف يذكر طبعة 1448هـ/2026م') &&
      lecture.summaryAr.includes('سجل النشر الداخلي في صفحة PDF 2 يذكر 1446هـ') &&
      lecture.summaryAr.includes('لم تراجع صفحات الدروس تفصيليًا') &&
      lecture.sections?.[0].diagram?.diagramType === 'social_studies' &&
      lecture.sections[0].diagram.visualSteps?.length === 4 &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].explanationAr.includes('ليس سؤالًا منقولًا') &&
      (isLastLessonInUnit
        ? lecture.keyConceptsAr.includes(`تقويم الوحدة في الكتاب: ص ${reviewPage}.`)
        : !lecture.keyConceptsAr.some((concept) => concept.startsWith('تقويم الوحدة في الكتاب:')));
  }),
  'All 34 Saudi Grade 4 lessons preserve indexed titles, pages, part order, original diagrams, assessments, and review references'
);
const grade4SocialStudiesTextbook = getNationalTextbookInfo(
  'SA', 'SAUDI_SOCIAL_STUDIES', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  isSaudiPublicG4SocialStudiesAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4SocialStudiesAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4SocialStudiesAvailable('SA', 'G4', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG4SocialStudiesAvailable('SA', 'G4', 'ISLAMIC', 'GENERAL') &&
    !isSaudiPublicG4SocialStudiesAvailable('EG', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4SocialStudiesAvailable('SA', 'G4', 'PUBLIC', 'CS_ENGINEERING') &&
    grade4SocialStudiesTextbook.textbookName.includes('9 وحدات و34 درسًا') &&
    grade4SocialStudiesTextbook.semester === 'العام الدراسي (الجزآن الأول والثاني)' &&
    grade4SocialStudiesTextbook.ministry.includes('وزارة التعليم'),
  'Saudi Grade 4 Social Studies is identified as a verified full-year book and limited to public general education'
);
assert(
  SAUDI_G5_SOCIAL_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-EJTSM.pdf' &&
    SAUDI_G5_SOCIAL_STUDIES_UNIT_COUNT === 8 &&
    SAUDI_G5_SOCIAL_STUDIES_LESSON_COUNT === 30 &&
    SAUDI_G5_SOCIAL_STUDIES_CURRICULUM.length === 30 &&
    saudiGrade5SocialStudies.length === 30 &&
    JSON.stringify(SAUDI_G5_SOCIAL_STUDIES_TABLE_OF_CONTENTS.map(({ unitNumber, unitTitleAr, titleAr, page }) => [
      unitNumber,
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(expectedSaudiG5SocialStudiesContents),
  'Saudi Grade 5 Social Studies maps all 8 units and 30 indexed lesson titles and page references'
);
assert(
  JSON.stringify(saudiGrade5SocialStudies.map((lecture) => [
    lecture.titleAr,
    Number(lecture.lessonNumberAr.match(/ص (\d+)$/)?.[1])
  ])) === JSON.stringify(expectedSaudiG5SocialStudiesContents.map(([, , title, page]) => [
    title,
    page
  ])) &&
    saudiGrade5SocialStudies.every((lecture, index) => {
      const unitIndex = expectedSaudiG5SocialStudiesContents[index][0] as number;
      const lastLessonInUnit = expectedSaudiG5SocialStudiesContents[index + 1]?.[0] !== unitIndex;
      return lecture.gradeLevel === 'G5' &&
        lecture.subject === 'SAUDI_SOCIAL_STUDIES' &&
        lecture.country === 'SA' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.educationTrack === 'GENERAL' &&
        lecture.termAr.includes(index < 16 ? 'الجزء الأول' : 'الجزء الثاني') &&
        lecture.summaryAr.includes('فهرسا الجزأين الأول والثاني') &&
        lecture.summaryAr.includes('الغلاف يذكر 1448هـ/2026م') &&
        lecture.summaryAr.includes('سجل النشر الداخلي في صفحة PDF 2 عام 1446هـ') &&
        lecture.summaryAr.includes('لم تراجع تفاصيل صفحات الدروس') &&
        lecture.sections?.[0].diagram?.diagramType === 'social_studies' &&
        lecture.sections[0].diagram.visualSteps?.length === 4 &&
        lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
        lecture.assessment.questions.length === 1 &&
        (lastLessonInUnit
          ? lecture.keyConceptsAr.includes(
              `تقويم الوحدة في الكتاب: ص ${expectedSaudiG5SocialStudiesReviewPages[unitIndex - 1]}.`
            )
          : !lecture.keyConceptsAr.some((concept) => concept.startsWith('تقويم الوحدة في الكتاب:')));
    }),
  'Saudi Grade 5 lesson routes retain part order, original diagrams and assessments, source disclosures, and review-page references'
);
assert(
  isSaudiPublicG5SocialStudiesAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5SocialStudiesAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5SocialStudiesAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5SocialStudiesAvailable('SA', 'G5', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG5SocialStudiesAvailable('EG', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5SocialStudiesAvailable('SA', 'G5', 'PUBLIC', 'CS_ENGINEERING'),
  'Saudi Grade 5 Social Studies is limited to public general education'
);
assert(
  saudiSocialStudies.length === expectedSaudiSocialStudiesLessons.length &&
    expectedSaudiSocialStudiesLessons.every((expectedLesson, index) => {
      const lecture = saudiSocialStudies[index];
      const unitNumber = expectedSaudiSocialStudiesUnits.indexOf(expectedLesson.unit) + 1;
      const unitLastLesson = expectedLesson.unit.lessons[expectedLesson.unit.lessons.length - 1];
      return lecture &&
      lecture.titleAr === expectedLesson.title &&
      lecture.lessonNumberAr.endsWith(`ص ${expectedLesson.page}`) &&
      lecture.unitTitleAr === `الوحدة ${unitNumber}: ${expectedLesson.unit.title}` &&
      lecture.keyConceptsAr.includes(`تقويم الوحدة في الكتاب: ص ${expectedLesson.unit.reviewPage}.`) ===
        (expectedLesson.title === unitLastLesson.title) &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.subject === 'SAUDI_SOCIAL_STUDIES' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.termAr.includes(unitNumber <= 4 ? 'الجزء الأول' : 'الجزء الثاني') &&
      lecture.summaryAr.includes('عناوين الوحدات والدروس وأرقام صفحاتها مطابقة للفهرسين') &&
      lecture.summaryAr.includes('الغلاف يذكر 1448هـ/2026م') &&
      lecture.summaryAr.includes('بيانات النشر الداخلية في صفحة PDF 2 تذكر 1446هـ') &&
      lecture.summaryAr.includes('لم تراجع تفاصيل صفحات الدروس') &&
      lecture.sections?.some((section) =>
        section.titleAr === expectedLesson.title &&
        section.contentAr.includes(`مرجع الفهرس: ص ${expectedLesson.page}`) &&
        section.diagram?.diagramType === 'social_studies' &&
        (section.diagram.visualSteps?.length ?? 0) === 4 &&
        section.diagram.captionAr.includes('ليس صورة من الكتاب المدرسي')
      ) &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].explanationAr.includes('ليس سؤالًا منقولًا');
    }),
  'All 29 Saudi Grade 6 social studies lessons, pages, unit reviews, original diagrams, and source limitations match the verified contents'
);
assert(
  SAUDI_SOCIAL_STUDIES_OFFICIAL_TEXTBOOK_VERIFIED &&
    isSaudiPublicG6SocialStudiesAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6SocialStudiesAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6SocialStudiesAvailable('SA', 'G7', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6SocialStudiesAvailable('SA', 'G6', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG6SocialStudiesAvailable('SA', 'G6', 'ISLAMIC', 'GENERAL') &&
    !isSaudiPublicG6SocialStudiesAvailable('EG', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6SocialStudiesAvailable('SA', 'G6', 'PUBLIC', 'CS_ENGINEERING'),
  'The verified social studies textbook route is limited to Saudi public Grade 6 general education'
);
assert(
  !getNationalLessonOverrides('SA', 'PHYSICS', 'G10', 'PRIVATE') &&
    !getNationalLessonOverrides('SA', 'PHYSICS', 'G10', 'ISLAMIC') &&
    !getNationalLessonOverrides('SA', 'PHYSICS', 'G10', 'INTERNATIONAL')?.[0]?.descriptionAr?.includes('المسار السعودي الحكومي') &&
    !!getNationalLessonOverrides('SA', 'PHYSICS', 'G10', 'PUBLIC') &&
    !!getNationalLessonOverrides('SA', 'PHYSICS', 'G10', 'INTERNATIONAL')?.[0]?.descriptionAr?.includes('AP'),
  'Saudi public overrides stay on public profiles while international profiles resolve to international standards'
);
assert(
  !getCurriculumForSubject('PHYSICS', 'G9', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('CHEMISTRY', 'G7', 'EG', 'PUBLIC').length &&
    !getCurriculumForSubject('BIOLOGY', 'G6', 'SD', 'PUBLIC').length &&
    !getCurriculumForSubject('GEOGRAPHY', 'G9', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('HISTORY', 'G12', 'EG', 'PUBLIC').length &&
    !getCurriculumForSubject('GENERAL_SCIENCE', 'G10', 'SA', 'PUBLIC').length,
  'Subjects without a curriculum for the selected grade return no unrelated fallback grade'
);
assert(
  !getCurriculumForSubject('PRIMARY_ARABIC', 'G8', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('PRIMARY_MATH', 'G10', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('ARABIC_LANG', 'G10', 'SA', 'PUBLIC').length &&
    !getCurriculumForSubject('ARABIC_LIT', 'G8', 'SA', 'PUBLIC').length,
  'Primary, middle, and secondary language subjects cannot fall through to another stage'
);
const saudiPublicPrimaryArabic = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G6', 'PUBLIC');
const saudiPrivatePrimaryArabic = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G6', 'PRIVATE');
const saudiPrimaryArabicTitles = [
  'تهيئة الوحدة ومراجعة المكتسبات السابقة',
  'التخطيط لمشروع الوحدة',
  'الاستماع لاستخراج الفكرة والتفاصيل',
  'أبو بكر الصديق: الفهم القرائي والسيرة',
  'التصفح والقراءة الاستطلاعية',
  'همزتا الوصل والقطع، وابن وابنة، والهمزة المتوسطة',
  'الأفعال الناسخة والحروف الناسخة',
  'المشتقات: اسم الفاعل واسم المفعول',
  'كتابة عبارات بخط النسخ',
  'عمر بن الخطاب رضي الله عنه ورسول كسرى',
  'وصف شخصية والتلخيص',
  'كتابة وصف شخصية وكتابة تلخيص',
  'عرض سيرة وإجراء مقابلة شفهية',
  'مراجعة واختبار الوحدة الأولى'
];
const saudiPrimaryArabicPages = [
  '11، 22، 28', '35', '36', '41', '54، 60', '65، 73، 78', '85، 91',
  '99، 105', '109', '116', '122، 129', '137، 143', '150، 152، 154', '156'
];
assert(
  saudiPublicPrimaryArabic.length === saudiPrimaryArabicTitles.length &&
    saudiPublicPrimaryArabic.every((lecture, index) =>
      lecture.titleAr === saudiPrimaryArabicTitles[index] &&
      lecture.descriptionAr?.includes(`موضع المكوّن في الكتاب: ص ${saudiPrimaryArabicPages[index]}`) &&
      lecture.descriptionAr.includes('خطة المحتويات والفهرس ص 9–10') &&
      lecture.descriptionAr.includes('1448-GE-PE-K06-SM1-BLNG.pdf') &&
      lecture.gradeLevel === 'G6' &&
      lecture.subject === 'PRIMARY_ARABIC' &&
      lecture.termAr?.includes('الجزء الأول من المقرر') &&
      lecture.sections?.[0].diagram?.captionAr.includes('ليس صورة من الكتاب') === true &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr?.length === 4 &&
      lecture.assessment.questions[0].correctIndex >= 0 &&
      lecture.assessment.questions[0].correctIndex < (lecture.assessment.questions[0].optionsAr?.length ?? 0)
    ) &&
    !saudiPublicPrimaryArabic.some((lecture) =>
      lecture.titleAr.includes('الفعل المضارع') || lecture.titleAr.includes('الهمزة المتطرفة')
    ) &&
    !saudiPrivatePrimaryArabic.some((lecture) => lecture.id.startsWith('sa-primary-arabic-g6-')),
  'Saudi Grade 6 Arabic follows the verified 1448 Part One contents and excludes mismatched lessons'
);
const saudiPrimaryArabicTextbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  saudiPrimaryArabicTextbook.textbookName.includes('لغتي الجميلة') &&
    saudiPrimaryArabicTextbook.textbookName.includes('الجزء الأول من المقرر') &&
    saudiPrimaryArabicTextbook.textbookName.includes('1448هـ/2026م'),
  'Saudi Grade 6 Arabic textbook metadata identifies the verified first-part edition'
);
const saudiPublicPrimaryArabicG2 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G2', 'PUBLIC');
const saudiPrivatePrimaryArabicG2 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G2', 'PRIVATE');
const officialSaudiPrimaryArabicG2Lessons = [
  ['أقاربي', 'الدرس الأول: صلة الرحم', 27],
  ['أقاربي', 'الدرس الثاني: عذرًا يا جدي', 36],
  ['أصدقائي وجيراني', 'الدرس الأول: الصديقان', 60],
  ['أصدقائي وجيراني', 'الدرس الثاني: الجار الصغير', 71],
  ['وطني السعودية', 'الدرس الأول: مدينتان مقدستان', 94],
  ['وطني السعودية', 'الدرس الثاني: علم بلادي', 105],
  ['محاصيل من بلادي', 'الدرس الأول: رحلة حبة قمح', 126],
  ['محاصيل من بلادي', 'الدرس الثاني: من أنا؟', 137]
];
const saudiPrimaryArabicG2LessonRows = SAUDI_G2_PRIMARY_ARABIC_TABLE_OF_CONTENTS.filter(
  (component) => component.titleAr.startsWith('الدرس')
);
assert(
  isSaudiPublicG2PrimaryArabicAvailable('SA', 'G2', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG2PrimaryArabicAvailable('SA', 'G2', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG2PrimaryArabicAvailable('SA', 'G2', 'PUBLIC', 'ISLAMIC') &&
    !isSaudiPublicG2PrimaryArabicAvailable('EG', 'G2', 'PUBLIC', 'GENERAL') &&
    SAUDI_G2_PRIMARY_ARABIC_UNIT_COUNT === 4 &&
    SAUDI_G2_PRIMARY_ARABIC_LESSON_COUNT === 8 &&
    JSON.stringify(saudiPrimaryArabicG2LessonRows.map(({ unitTitleAr, titleAr, page }) => [
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(officialSaudiPrimaryArabicG2Lessons) &&
    SAUDI_G2_PRIMARY_ARABIC_TABLE_OF_CONTENTS.length === 35 &&
    saudiPublicPrimaryArabicG2.map((lecture) => lecture.id).join('|') ===
      SAUDI_G2_PRIMARY_ARABIC_LECTURES.map((lecture) => lecture.id).join('|') &&
    saudiPublicPrimaryArabicG2.map((lecture) => lecture.unitTitleAr).join('|') ===
      ['التهيئة', 'أقاربي', 'أصدقائي وجيراني', 'وطني السعودية', 'محاصيل من بلادي'].join('|'),
  'Saudi Grade 2 Arabic follows all four verified 1448 Part One units and eight lesson pages'
);
assert(
  SAUDI_G2_PRIMARY_ARABIC_TEXTBOOK_URL ===
    'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-lang.pdf' &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G2', 'SA', 'PUBLIC', 'GENERAL')
      .map((lecture) => lecture.id).join('|') === saudiPublicPrimaryArabicG2.map((lecture) => lecture.id).join('|') &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G2', 'SA', 'PUBLIC', 'ISLAMIC').length === 0 &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G2', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G2', 'EG', 'PUBLIC', 'GENERAL')
      .every((lecture) => !lecture.id.startsWith('sa-primary-arabic-g2-')) &&
    !saudiPrivatePrimaryArabicG2.some((lecture) => lecture.id.startsWith('sa-primary-arabic-g2-')),
  'Verified Grade 2 Arabic route is limited to Saudi public General-track students'
);
assert(
  SAUDI_G2_PRIMARY_ARABIC_LECTURES.every((lecture) =>
    lecture.gradeLevel === 'G2' &&
    lecture.subject === 'PRIMARY_ARABIC' &&
    lecture.country === 'SA' &&
    lecture.educationType === 'PUBLIC' &&
    lecture.educationTrack === 'GENERAL' &&
    lecture.descriptionAr.includes('1448هـ/2026م') &&
    lecture.descriptionAr.includes('1446هـ') &&
    lecture.sections?.every((section) =>
      section.diagram?.diagramType === 'arabic_learning_map' &&
      section.diagram.visualSteps?.length === 4 &&
      section.diagram.captionAr.includes('أصلي')
    ) === true &&
    lecture.assessment.questions.length === 1 &&
    lecture.assessment.questions[0].optionsAr?.length === 4 &&
    lecture.assessment.questions[0].correctIndex >= 0 &&
    lecture.assessment.questions[0].correctIndex <
      (lecture.assessment.questions[0].optionsAr?.length ?? 0)
  ) &&
    SAUDI_G2_PRIMARY_ARABIC_TABLE_OF_CONTENTS.filter(({ titleAr }) =>
      titleAr.startsWith('الدرس')
    ).every(({ unitTitleAr, titleAr, page }) =>
      saudiPublicPrimaryArabicG2.some((lecture) =>
        lecture.unitTitleAr === unitTitleAr &&
        lecture.sections?.some((section) =>
          section.titleAr === titleAr &&
          section.contentAr.includes(`ص ${page}.`)
        )
      )
    ),
  'Every Grade 2 Arabic unit includes original four-step diagrams and valid assessments with textbook references'
);
const saudiPrimaryArabicG2Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G2', 'GENERAL', 'ar', 'PUBLIC'
);
const saudiPrimaryArabicG2TextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G2', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  saudiPrimaryArabicG2Textbook.textbookName.includes('لغتي') &&
    saudiPrimaryArabicG2Textbook.textbookName.includes('الصف الثاني الابتدائي الحكومي') &&
    saudiPrimaryArabicG2Textbook.textbookName.includes('1448هـ/2026م') &&
    saudiPrimaryArabicG2Textbook.textbookName.includes('1446هـ') &&
    saudiPrimaryArabicG2TextbookEn.textbookName.includes('Grade 2') &&
    saudiPrimaryArabicG2TextbookEn.textbookName.includes('1448 AH/2026') &&
    getNationalSubjectLabel('PRIMARY_ARABIC', 'SA', 'G2', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الثاني الحكومي'),
  'Saudi Grade 2 Arabic metadata identifies the official cover edition and internal-record discrepancy'
);
const staleSaudiPrimaryArabicG2 = {
  ...SAUDI_G2_PRIMARY_ARABIC_LECTURES[0],
  id: 'stale-saudi-grade2-arabic-content',
  titleAr: 'محتوى عربي قديم غير موثق'
};
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_ARABIC_G2_GENERAL',
  JSON.stringify([staleSaudiPrimaryArabicG2])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_ARABIC_G2_GENERAL',
  JSON.stringify([{
    ...staleSaudiPrimaryArabicG2,
    id: 'shared-saudi-grade2-arabic-content',
    titleAr: 'محتوى عربي مشترك من مقرر آخر',
    isSharedCommunity: true
  }])
);
const isolatedSaudiPrimaryArabicG2 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G2', 'PUBLIC');
scienceIsolationStorage.delete('TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_ARABIC_G2_GENERAL');
scienceIsolationStorage.delete('TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_ARABIC_G2_GENERAL');
assert(
  isolatedSaudiPrimaryArabicG2.map((lecture) => lecture.id).join('|') ===
    SAUDI_G2_PRIMARY_ARABIC_LECTURES.map((lecture) => lecture.id).join('|') &&
    !isolatedSaudiPrimaryArabicG2.some((lecture) =>
      lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
    ),
  'Saudi Grade 2 Arabic textbook content cannot be replaced by stale or shared curriculum storage'
);
const saudiPublicPrimaryArabicG3 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G3', 'PUBLIC');
const saudiPrivatePrimaryArabicG3 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G3', 'PRIVATE');
const saudiPrimaryArabicG3Titles = [
  'التهيئة: مراجعة المكتسبات السابقة وفن الخط',
  'الوحدة الأولى: التواصل مع الآخرين',
  'الوحدة الثانية: ربوع من بلادي',
  'الوحدة الثالثة: أخلاق المسلم',
  'الوحدة الرابعة: وسائل الاتصالات'
];
const saudiPrimaryArabicG3LessonRows = SAUDI_G3_PRIMARY_ARABIC_TABLE_OF_CONTENTS.filter(
  (component) => component.titleAr.startsWith('الدرس')
);
assert(
  isSaudiPublicG3PrimaryArabicAvailable('SA', 'G3', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG3PrimaryArabicAvailable('SA', 'G3', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG3PrimaryArabicAvailable('SA', 'G3', 'PUBLIC', 'ISLAMIC') &&
    !isSaudiPublicG3PrimaryArabicAvailable('EG', 'G3', 'PUBLIC', 'GENERAL') &&
    SAUDI_G3_PRIMARY_ARABIC_UNIT_COUNT === 4 &&
    SAUDI_G3_PRIMARY_ARABIC_LESSON_COUNT === 8 &&
    SAUDI_G3_PRIMARY_ARABIC_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-lang-part1.pdf' &&
    SAUDI_G3_PRIMARY_ARABIC_TABLE_OF_CONTENTS.length === 38 &&
    saudiPublicPrimaryArabicG3.length === saudiPrimaryArabicG3Titles.length &&
    SAUDI_G3_PRIMARY_ARABIC_LECTURES.map((lecture) => lecture.id).join('|') ===
      saudiPublicPrimaryArabicG3.map((lecture) => lecture.id).join('|') &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G3', 'SA', 'PUBLIC', 'GENERAL')
      .map((lecture) => lecture.id).join('|') === saudiPublicPrimaryArabicG3.map((lecture) => lecture.id).join('|') &&
    saudiPublicPrimaryArabicG3.every((lecture, index) =>
      lecture.titleAr === saudiPrimaryArabicG3Titles[index] &&
      lecture.gradeLevel === 'G3' &&
      lecture.subject === 'PRIMARY_ARABIC' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.descriptionAr?.includes('1448-GE-PE-K03-SM1-lang-part1.pdf') === true &&
      lecture.descriptionAr?.includes('1446هـ') === true &&
      lecture.sections?.length === (index === 0 ? 2 : 4) &&
      lecture.sections?.every((section) =>
        section.diagram?.diagramType === 'arabic_learning_map' &&
        section.diagram.captionAr.includes('أصلي')
      ) === true &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr?.length === 4 &&
      lecture.assessment.questions[0].correctIndex >= 0 &&
      lecture.assessment.questions[0].correctIndex < (lecture.assessment.questions[0].optionsAr?.length ?? 0)
    ) &&
    saudiPrimaryArabicG3LessonRows.length === 8 &&
    saudiPrimaryArabicG3LessonRows.every((component) =>
      saudiPublicPrimaryArabicG3.some((lecture) =>
        lecture.descriptionAr.includes(`${component.titleAr} (ص ${component.pages})`)
      )
    ) &&
    !saudiPrivatePrimaryArabicG3.some((lecture) => lecture.id.startsWith('sa-primary-arabic-g3-')) &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G3', 'SA', 'PUBLIC', 'ISLAMIC').length === 0,
  'Saudi Grade 3 Arabic follows the verified 1448 Part One contents with original diagrams and stays public-general specific'
);
const saudiPrimaryArabicG3Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
const saudiPrimaryArabicG3TextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G3', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  saudiPrimaryArabicG3Textbook.textbookName.includes('لغتي') &&
    saudiPrimaryArabicG3Textbook.textbookName.includes('الصف الثالث الابتدائي الحكومي') &&
    saudiPrimaryArabicG3Textbook.textbookName.includes('1448هـ/2026م') &&
    saudiPrimaryArabicG3TextbookEn.textbookName.includes('Grade 3') &&
    saudiPrimaryArabicG3TextbookEn.textbookName.includes('1448 AH/2026') &&
    getNationalSubjectLabel('PRIMARY_ARABIC', 'SA', 'G3', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الثالث الحكومي'),
  'Saudi Grade 3 Arabic metadata identifies the verified printed Part One source in Arabic and English'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_ARABIC_G3_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabicG3[0],
    id: 'stale-saudi-grade3-arabic-content',
    titleAr: 'محتوى عربي قديم غير موثق'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_ARABIC_G3_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabicG3[0],
    id: 'shared-saudi-grade3-arabic-content',
    titleAr: 'محتوى عربي مشترك من مقرر آخر',
    isSharedCommunity: true
  }])
);
const isolatedSaudiPrimaryArabicG3 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G3', 'PUBLIC');
assert(
  isolatedSaudiPrimaryArabicG3.map((lecture) => lecture.id).join('|') ===
    SAUDI_G3_PRIMARY_ARABIC_LECTURES.map((lecture) => lecture.id).join('|'),
  'Saudi Grade 3 Arabic textbook content cannot be replaced by stale or shared curriculum storage'
);
const saudiPublicPrimaryArabicG5 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G5', 'PUBLIC');
const saudiPrivatePrimaryArabicG5 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G5', 'PRIVATE');
const saudiPrimaryArabicG5Titles = [
  'تهيئة الوحدة ومراجعة المكتسبات السابقة',
  'أنشطة تمهيدية لوحدة أخلاق وفضائل',
  'التخطيط لمشروع الوحدة',
  'عدل الملك عبد العزيز: الاستماع واستخراج الفكرة',
  'أخلاق المؤمنين: الفهم القرائي',
  'استراتيجيات القراءة: نصوص موضوعات الوحدة',
  'الصنف اللغوي: جمع المذكر السالم والأفعال الخمسة وأنواع الجموع',
  'الهمزة المتوسطة على الألف والواو',
  'رفع المبتدأ والخبر والفاعل بالعلامات الفرعية',
  'التدرب على خط النسخ',
  'من أصادق؟: قراءة النص الشعري',
  'بنية النص: القصص والنص الإعلاني',
  'كتابة قصة مكتملة العناصر وتصميم إعلان',
  'سرد قصة وعرض شفهي عن مشكلة بيئية',
  'مراجعة واختبار الوحدة الأولى'
];
const saudiPrimaryArabicG5Pages = [
  '11، 16', '27', '37', '38', '41', '53، 59، 61، 63', '65، 66، 68',
  '69، 76', '83، 90', '98', '100', '106، 108، 112، 115',
  '119، 121', '127، 130', '131'
];
assert(
  saudiPublicPrimaryArabicG5.length === saudiPrimaryArabicG5Titles.length &&
    saudiPublicPrimaryArabicG5.every((lecture, index) =>
      lecture.titleAr === saudiPrimaryArabicG5Titles[index] &&
      lecture.descriptionAr?.includes(`موضع المكوّن في الكتاب: ص ${saudiPrimaryArabicG5Pages[index]}`) &&
      lecture.descriptionAr.includes('1448-GE-PE-K05-SM1-BLNG.pdf') &&
      lecture.descriptionAr.includes('تمت مراجعة الغلاف والفهرس فقط') &&
      lecture.gradeLevel === 'G5' &&
      lecture.subject === 'PRIMARY_ARABIC' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.termAr?.includes('الجزء الأول من المقرر') === true &&
      lecture.sections?.[0].diagram?.captionAr.includes('ليس صورة من الكتاب') === true &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr?.length === 4 &&
      lecture.assessment.questions[0].correctIndex >= 0 &&
      lecture.assessment.questions[0].correctIndex < (lecture.assessment.questions[0].optionsAr?.length ?? 0)
    ) &&
    !saudiPrivatePrimaryArabicG5.some((lecture) => lecture.id.startsWith('sa-primary-arabic-g5-')),
  'Saudi Grade 5 Arabic follows the verified 1448 Part One contents and remains public-school specific'
);
const saudiPrimaryArabicG5Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
const saudiPrimaryArabicG5TextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G5', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  saudiPrimaryArabicG5Textbook.textbookName.includes('لغتي الجميلة') &&
    saudiPrimaryArabicG5Textbook.textbookName.includes('الصف الخامس الابتدائي') &&
    saudiPrimaryArabicG5Textbook.textbookName.includes('1448هـ/2026م') &&
    saudiPrimaryArabicG5TextbookEn.textbookName.includes('Grade 5') &&
    saudiPrimaryArabicG5TextbookEn.textbookName.includes('1448 AH/2026'),
  'Saudi Grade 5 Arabic textbook metadata identifies the verified first-part edition in both languages'
);
const saudiPublicPrimaryArabicG4 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G4', 'PUBLIC');
const saudiPrivatePrimaryArabicG4 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G4', 'PRIVATE');
const saudiPrimaryArabicG4Titles = [
  'مراجعة المكتسبات السابقة',
  'التهيئة وتحديد نقطة البداية',
  'أنشطة تمهيدية لوحدة صحتي وبيئتي',
  'التخطيط لمشروع عن الصحة والبيئة',
  'الاستماع لاستخراج الفكرة والتفاصيل',
  'قراءة نص عن التصحر وفهمه',
  'التمييز بين همزتي القطع والوصل',
  'كتابة الهمزة المتطرفة',
  'التفريق بين التاء المربوطة والتاء المفتوحة',
  'كتابة كلمات حذفت الألف من وسطها',
  'تصنيف الكلمات والتعرف إلى الجملة',
  'تحديد المبتدأ والخبر',
  'التعرف إلى الاسم المجرور بحرف الجر',
  'تمييز أنواع الفعل',
  'تحديد الفاعل في الجملة الفعلية',
  'تحديد المفعول به',
  'تحسين كتابة الحروف المرتكزة على السطر',
  'تذوق نص شعري وفهم صورته',
  'إبداء الرأي ووصف المشاهدات وتمثيل الحوار',
  'تنظيم أحداث قصة وكتابتها',
  'مراجعة تعلم الوحدة والاستعداد للتقويم'
];
assert(
  isSaudiPublicG4PrimaryArabicAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4PrimaryArabicAvailable('SA', 'G4', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG4PrimaryArabicAvailable('SA', 'G4', 'PUBLIC', 'ISLAMIC') &&
    !isSaudiPublicG4PrimaryArabicAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4PrimaryArabicAvailable('EG', 'G4', 'PUBLIC', 'GENERAL') &&
    saudiPublicPrimaryArabicG4.length === saudiPrimaryArabicG4Titles.length &&
    SAUDI_G4_PRIMARY_ARABIC_TABLE_OF_CONTENTS.length === saudiPrimaryArabicG4Titles.length &&
    getCurriculumForSubject('PRIMARY_ARABIC', 'G4', 'SA', 'PUBLIC', 'GENERAL')
      .map((lecture) => lecture.id).join('|') === saudiPublicPrimaryArabicG4.map((lecture) => lecture.id).join('|') &&
    saudiPublicPrimaryArabicG4.every((lecture, index) =>
      lecture.id === `sa-primary-arabic-g4-1448-u1-${String(index + 1).padStart(2, '0')}` &&
      lecture.titleAr === saudiPrimaryArabicG4Titles[index] &&
      lecture.descriptionAr?.includes(`موضع المكوّن في الكتاب: ص ${SAUDI_G4_PRIMARY_ARABIC_TABLE_OF_CONTENTS[index].pages}`) &&
      lecture.descriptionAr.includes('1448-GE-PE-K04-SM1-BLNG.pdf') &&
      lecture.descriptionAr.includes('بيانات PDF الداخلية') &&
      lecture.gradeLevel === 'G4' &&
      lecture.subject === 'PRIMARY_ARABIC' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.unitTitleAr === 'الوحدة الأولى: صحتي وبيئتي' &&
      lecture.sections?.[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr?.length === 4 &&
      lecture.assessment.questions[0].correctIndex === 0
    ) &&
    !saudiPrivatePrimaryArabicG4.some((lecture) => lecture.id.startsWith('sa-primary-arabic-g4-')),
  'Saudi Grade 4 Arabic follows the printed 1448 Part One contents and stays within public general education'
);
const saudiPrimaryArabicG4Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_ARABIC', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  saudiPrimaryArabicG4Textbook.textbookName.includes('الصف الرابع الابتدائي الحكومي') &&
    saudiPrimaryArabicG4Textbook.textbookName.includes('الفهرس المطبوع ص 9–10') &&
    saudiPrimaryArabicG4Textbook.textbookName.includes('تعارض بيانات PDF الداخلية') &&
    getNationalSubjectLabel('PRIMARY_ARABIC', 'SA', 'G4', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الرابع الحكومي'),
  'Saudi Grade 4 Arabic metadata identifies the printed source and discloses the PDF metadata conflict'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_ARABIC_G4_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabicG4[0],
    id: 'stale-saudi-grade4-arabic-content',
    titleAr: 'درس عربي قديم غير متحقق'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_ARABIC_G4_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabicG4[0],
    id: 'shared-saudi-grade4-arabic-content',
    titleAr: 'محتوى عربي مشترك من مقرر آخر',
    isSharedCommunity: true
  }])
);
const isolatedSaudiPrimaryArabicG4 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G4', 'PUBLIC');
assert(
  isolatedSaudiPrimaryArabicG4.length === saudiPrimaryArabicG4Titles.length &&
    isolatedSaudiPrimaryArabicG4.map((lecture) => lecture.titleAr).join('|') === saudiPrimaryArabicG4Titles.join('|') &&
    !isolatedSaudiPrimaryArabicG4.some((lecture) =>
      lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
    ),
  'Verified Saudi Grade 4 Arabic ignores stale and shared cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_ARABIC_G5_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabicG5[0],
    id: 'stale-saudi-grade5-arabic-content',
    titleAr: 'درس عربي قديم غير متحقق'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_ARABIC_G5_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabicG5[0],
    id: 'shared-saudi-grade5-arabic-content',
    titleAr: 'محتوى عربي مشترك من مقرر آخر',
    isSharedCommunity: true
  }])
);
const isolatedSaudiPrimaryArabicG5 = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G5', 'PUBLIC');
assert(
  isolatedSaudiPrimaryArabicG5.length === saudiPrimaryArabicG5Titles.length &&
    isolatedSaudiPrimaryArabicG5.map((lecture) => lecture.titleAr).join('|') === saudiPrimaryArabicG5Titles.join('|') &&
    !isolatedSaudiPrimaryArabicG5.some((lecture) =>
      lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
    ),
  'Verified Saudi Grade 5 Arabic ignores stale and shared cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_ARABIC_G6_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabic[0],
    id: 'stale-saudi-grade6-arabic-content',
    titleAr: 'درس عربي قديم غير متحقق'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_ARABIC_G6_GENERAL',
  JSON.stringify([{
    ...saudiPublicPrimaryArabic[0],
    id: 'shared-saudi-grade6-arabic-content',
    titleAr: 'محتوى عربي مشترك من مقرر آخر',
    isSharedCommunity: true
  }])
);
const isolatedSaudiPrimaryArabic = loadSubjectLectures('PRIMARY_ARABIC', 'SA', 'G6', 'PUBLIC');
assert(
  isolatedSaudiPrimaryArabic.length === saudiPrimaryArabicTitles.length &&
    isolatedSaudiPrimaryArabic.map((lecture) => lecture.titleAr).join('|') === saudiPrimaryArabicTitles.join('|') &&
    !isolatedSaudiPrimaryArabic.some((lecture) =>
      lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك')
    ),
  'Verified Saudi Grade 6 Arabic ignores stale and shared cached lessons'
);
const tajweedTitles = [
  'الدرس الأول: المد',
  'الدرس الثاني: حروف المد',
  'الدرس الثالث: أقسام المد',
  'الدرس الرابع: أنواع المد الفرعي',
  'الدرس الخامس: المد المتصل',
  'الدرس السادس: المد المنفصل',
  'الدرس السابع: المد العارض للسكون',
  'الدرس الثامن: المد اللازم',
  'الدرس التاسع: المد اللازم الكلمي',
  'الدرس العاشر: المد اللازم الحرفي',
  'الدرس الحادي عشر: درس تطبيقي شامل لأنواع المدود'
];
const tajweedPages = [8, 12, 18, 24, 30, 35, 42, 47, 52, 57, 62];
const saudiGrade6Tajweed = getCurriculumForSubject('TAJWEED', 'G6', 'SA', 'PUBLIC', 'GENERAL');
assert(
  SAUDI_G6_TAJWEED_CURRICULUM.length === tajweedTitles.length &&
    SAUDI_G6_TAJWEED_CURRICULUM.every((lecture, index) =>
      lecture.id === `saudi-g6-tajweed-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === tajweedTitles[index] &&
      lecture.lessonNumberAr?.includes(`ص ${tajweedPages[index]}`) &&
      lecture.gradeLevelNameAr?.includes('اختياري') &&
      lecture.sections?.[0].contentAr.includes('لم تتم مراجعة صفحات الدروس الداخلية') &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      (lecture.sections[0].diagram.visualSteps?.length ?? 0) >= 4 &&
      lecture.assessment.questions.length === 1
    ) &&
    saudiGrade6Tajweed.map((lecture) => lecture.id).join('|') ===
      SAUDI_G6_TAJWEED_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    isSaudiPublicG6TajweedAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG6TajweedAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG6TajweedAvailable('SA', 'G7', 'PUBLIC') &&
    !isSaudiPublicG6TajweedAvailable('SA', 'G6', 'PRIVATE') &&
    !isSaudiPublicG6TajweedAvailable('SA', 'G6', 'ISLAMIC') &&
    !isSaudiPublicG6TajweedAvailable('EG', 'G6', 'PUBLIC') &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'TAJWEED',
        'G6',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('TAJWEED', 'G6', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Saudi Grade 6 Tajweed matches the verified contents and is restricted to the optional public Grade 6 route'
);
const tajweedTextbook = getNationalTextbookInfo('SA', 'TAJWEED', 'G6', 'GENERAL', 'ar', 'PUBLIC');
assert(
  tajweedTextbook.textbookName.includes('مقرر تجويد اختياري') &&
    tajweedTextbook.textbookName.includes('مدارس تحفيظ القرآن الكريم') &&
    tajweedTextbook.textbookName.includes('مطابقة للفهرس ص 7') &&
    getNationalSubjectLabel('TAJWEED', 'SA', 'G6', 'ar', 'PUBLIC').includes('اختياري'),
  'Saudi Grade 6 Tajweed metadata clearly discloses the optional platform scope and textbook source'
);
const grade4TajweedTitles = [
  'الدرس الأول: التعريف بالقرآن الكريم',
  'الدرس الثاني: التجويد',
  'الدرس الثالث: أهمية تلاوة القرآن الكريم وفضله',
  'الدرس الرابع: آداب تلاوة القرآن الكريم',
  'الدرس الخامس: فضل حفظ القرآن الكريم',
  'الدرس السادس: طريقة حفظ القرآن الكريم',
  'الدرس السابع: مراجعة القرآن الكريم وتعاهده',
  'الدرس الثامن: آداب استماع القرآن الكريم'
];
const grade4TajweedPages = [8, 13, 17, 23, 28, 34, 40, 45];
const saudiGrade4Tajweed = getCurriculumForSubject('TAJWEED', 'G4', 'SA', 'PUBLIC', 'GENERAL');
assert(
  SAUDI_G4_TAJWEED_CURRICULUM.length === grade4TajweedTitles.length &&
    saudiGrade4Tajweed.length === grade4TajweedTitles.length &&
    SAUDI_G4_TAJWEED_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-TTGWD.pdf' &&
    saudiGrade4Tajweed.every((lecture, index) =>
      lecture.id === `saudi-g4-tajweed-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === grade4TajweedTitles[index] &&
      lecture.lessonNumberAr?.includes(`ص ${grade4TajweedPages[index]}`) &&
      lecture.gradeLevel === 'G4' &&
      lecture.subject === 'TAJWEED' &&
      lecture.gradeLevelNameAr?.includes('اختياري') &&
      lecture.termAr?.includes('الجزء الأول من المقرر') &&
      lecture.sections?.[0].contentAr.includes('فهرس كتاب التجويد للصف الرابع') &&
      lecture.sections[0].contentAr.includes('صفحة PDF 7') &&
      lecture.sections[0].contentAr.includes('غير مجزأ') &&
      lecture.sections[0].contentAr.includes('1446هـ') &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      (lecture.sections[0].diagram.visualSteps?.length ?? 0) >= 4 &&
      lecture.sections[0].formativeCheck?.optionsAr.length === 4 &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 4
    ) &&
    saudiGrade4Tajweed.map((lecture) => lecture.id).join('|') ===
      SAUDI_G4_TAJWEED_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    isSaudiPublicG4TajweedAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG4TajweedAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG4TajweedAvailable('SA', 'G4', 'PRIVATE') &&
    !isSaudiPublicG4TajweedAvailable('EG', 'G4', 'PUBLIC') &&
    isSaudiPublicTajweedAvailable('SA', 'G4', 'PUBLIC') &&
    isSaudiPublicTajweedAvailable('SA', 'G5', 'PUBLIC') &&
    isSaudiPublicTajweedAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicTajweedAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicTajweedAvailable('SA', 'G7', 'PUBLIC') &&
    !isSaudiPublicTajweedAvailable('SA', 'G4', 'ISLAMIC') &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'TAJWEED',
        'G4',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('TAJWEED', 'G4', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Saudi Grade 4 Tajweed matches all eight verified contents titles and pages and is restricted to the optional public route'
);
const grade4TajweedTextbook = getNationalTextbookInfo(
  'SA', 'TAJWEED', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
const grade4TajweedTextbookEn = getNationalTextbookInfo(
  'SA', 'TAJWEED', 'G4', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  grade4TajweedTextbook.textbookName.includes('مقرر تجويد اختياري') &&
    grade4TajweedTextbook.textbookName.includes('كتاب الصف الرابع') &&
    grade4TajweedTextbook.textbookName.includes('1448هـ/2026م') &&
    grade4TajweedTextbook.textbookName.includes('1446هـ') &&
    grade4TajweedTextbook.textbookName.includes('مطابقة للفهرس ص 7') &&
    getNationalSubjectLabel('TAJWEED', 'SA', 'G4', 'ar', 'PUBLIC').includes('اختيارية') &&
    getNationalSubjectLabel('TAJWEED', 'SA', 'G4', 'ar', 'PUBLIC').includes('الصف الرابع') &&
    grade4TajweedTextbookEn.textbookName.includes('Grade 4') &&
    grade4TajweedTextbookEn.textbookName.includes('1446 AH') &&
    grade4TajweedTextbookEn.textbookName.includes('contents p. 7'),
  'Saudi Grade 4 Tajweed metadata discloses the book scope, contents, and edition discrepancy'
);
const grade5TajweedTitles = [
  'الدرس الأول: أحكام النون الساكنة والتنوين',
  'الدرس الثاني: الإظهار',
  'الدرس الثالث: حروف الإظهار (أ، هـ)',
  'الدرس الرابع: حروف الإظهار (ع، ح)',
  'الدرس الخامس: حروف الإظهار (غ، خ)',
  'الدرس السادس: الإدغام',
  'الدرس السابع: الإدغام بغنة',
  'الدرس الثامن: الإدغام بغير غنة',
  'الدرس التاسع: الإقلاب',
  'الدرس العاشر: الإخفاء',
  'الدرس الحادي عشر: حروف الإخفاء (ت، ث، ف، ق، ك)',
  'الدرس الثاني عشر: حروف الإخفاء (ج، د، ذ، ز)',
  'الدرس الثالث عشر: حروف الإخفاء (س، ش، ص، ض، ط، ظ)',
];
const grade5TajweedPages = [8, 12, 17, 22, 27, 32, 38, 44, 49, 56, 63, 69, 74];
const saudiGrade5Tajweed = getCurriculumForSubject('TAJWEED', 'G5', 'SA', 'PUBLIC', 'GENERAL');
assert(
  SAUDI_G5_TAJWEED_CURRICULUM.length === grade5TajweedTitles.length &&
    saudiGrade5Tajweed.length === grade5TajweedTitles.length &&
    saudiGrade5Tajweed.every((lecture, index) =>
      lecture.id === `saudi-g5-tajweed-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === grade5TajweedTitles[index] &&
      lecture.lessonNumberAr?.includes(`ص ${grade5TajweedPages[index]}`) &&
      lecture.gradeLevel === 'G5' &&
      lecture.gradeLevelNameAr?.includes('اختياري') &&
      lecture.sections?.length === 1 &&
      lecture.sections[0].contentAr.includes('عام 1446هـ') &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      (lecture.sections[0].diagram.visualSteps?.length ?? 0) >= 4 &&
      lecture.sections[0].formativeCheck?.optionsAr.length === 3 &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 3
    ) &&
    SAUDI_G5_TAJWEED_CURRICULUM.every((lecture, index) =>
      lecture.id === saudiGrade5Tajweed[index].id
    ) &&
    isSaudiPublicG5TajweedAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG5TajweedAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG5TajweedAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG5TajweedAvailable('SA', 'G5', 'PRIVATE') &&
    !isSaudiPublicG5TajweedAvailable('EG', 'G5', 'PUBLIC') &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'TAJWEED',
        'G5',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    ['G1', 'G2', 'G3', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('TAJWEED', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ) &&
    getCurriculumForSubject('TAJWEED', 'G5', 'SA', 'PUBLIC').length === 13,
  'Saudi Grade 5 optional Tajweed matches all 13 contents titles and pages and is restricted to the public Grade 5 route'
);
const grade5TajweedTextbook = getNationalTextbookInfo(
  'SA', 'TAJWEED', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  grade5TajweedTextbook.textbookName.includes('مقرر تجويد اختياري') &&
    grade5TajweedTextbook.textbookName.includes('للصف الخامس') &&
    grade5TajweedTextbook.textbookName.includes('1448هـ/2026م') &&
    grade5TajweedTextbook.textbookName.includes('1446هـ') &&
    grade5TajweedTextbook.textbookName.includes('مطابقة للفهرس ص 7') &&
    getNationalSubjectLabel('TAJWEED', 'SA', 'G5', 'ar', 'PUBLIC').includes('اختيارية') &&
    getNationalSubjectLabel('TAJWEED', 'SA', 'G5', 'ar', 'PUBLIC').includes('الصف الخامس'),
  'Saudi Grade 5 Tajweed metadata discloses its optional scope, verified index, and publication-date discrepancy'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_TAJWEED_G4_GENERAL',
  JSON.stringify([{
    ...saudiGrade4Tajweed[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق للصف الرابع',
    isCompleted: true
  }, {
    ...saudiGrade4Tajweed[0],
    id: 'ai-gen-stale-grade4-tajweed',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد للصف الرابع'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_TAJWEED_G4_GENERAL',
  JSON.stringify([{
    ...saudiGrade4Tajweed[0],
    id: 'shared-grade4-tajweed-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد للصف الرابع',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade4Tajweed = loadSubjectLectures('TAJWEED', 'SA', 'G4', 'PUBLIC', 'GENERAL');
assert(
  isolatedSaudiGrade4Tajweed.length === grade4TajweedTitles.length &&
    isolatedSaudiGrade4Tajweed.map((lecture) => lecture.id).join('|') ===
      saudiGrade4Tajweed.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade4Tajweed[0].titleAr === grade4TajweedTitles[0] &&
    !isolatedSaudiGrade4Tajweed.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 4 Tajweed ignores stale, shared, and generated cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_TAJWEED_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5Tajweed[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق للصف الخامس',
    isCompleted: true
  }, {
    ...saudiGrade5Tajweed[0],
    id: 'ai-gen-stale-grade5-tajweed',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد للصف الخامس'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_TAJWEED_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5Tajweed[0],
    id: 'shared-grade5-tajweed-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد للصف الخامس',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade5Tajweed = loadSubjectLectures('TAJWEED', 'SA', 'G5', 'PUBLIC', 'GENERAL');
assert(
  isolatedSaudiGrade5Tajweed.length === grade5TajweedTitles.length &&
    isolatedSaudiGrade5Tajweed.map((lecture) => lecture.id).join('|') ===
      saudiGrade5Tajweed.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade5Tajweed[0].titleAr === grade5TajweedTitles[0] &&
    !isolatedSaudiGrade5Tajweed.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 5 Tajweed ignores stale, shared, and generated cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_TAJWEED_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6Tajweed[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade6Tajweed[0],
    id: 'ai-gen-stale-tajweed',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_TAJWEED_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6Tajweed[0],
    id: 'shared-tajweed-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade6Tajweed = loadSubjectLectures('TAJWEED', 'SA', 'G6', 'PUBLIC', 'GENERAL');
assert(
  isolatedSaudiGrade6Tajweed.length === tajweedTitles.length &&
    isolatedSaudiGrade6Tajweed.map((lecture) => lecture.id).join('|') ===
      saudiGrade6Tajweed.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade6Tajweed[0].titleAr === tajweedTitles[0] &&
    !isolatedSaudiGrade6Tajweed.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 6 Tajweed ignores stale, shared, and generated cached lessons'
);
const quranRecitationUnitTitles = [
  'الوحدة الأولى: فضل تلاوة القرآن الكريم',
  'الوحدة الثانية: فضل حفظ القرآن الكريم',
  'الوحدة الثالثة: المد: تعريفه وحروفه',
  'الوحدة الرابعة: أقسام المد الأصلي والفرعي',
  'الوحدة الخامسة: حفظ سورة القلم من الآية (1) إلى الآية (32)',
  'الوحدة السادسة: أنواع المد الفرعي',
  'الوحدة السابعة: المد المتصل',
  'الوحدة الثامنة: المد المنفصل',
  'الوحدة التاسعة: المد العارض للسكون',
  'الوحدة العاشرة: المد اللازم',
  'الوحدة الحادية عشرة: حفظ سورة القلم من الآية (24) حتى نهاية السورة',
  'الوحدة الثانية عشرة: المد اللازم الكلمي',
  'الوحدة الثالثة عشرة: المد اللازم الحرفي'
];
const quranRecitationTopicPages = [
  { unit: 1, title: 'فضل تلاوة القرآن الكريم', page: 10 },
  { unit: 1, title: 'سورة ص من الآية (1) إلى الآية (26)', page: 13 },
  { unit: 2, title: 'فضل حفظ القرآن الكريم', page: 18 },
  { unit: 2, title: 'فضائل بعض سور القرآن الكريم', page: 22 },
  { unit: 2, title: 'سورة ص من الآية (27) إلى الآية (66)', page: 26 },
  { unit: 3, title: 'المد (تعريفه - حروفه)', page: 30 },
  { unit: 3, title: 'من الآية (67) من سورة ص إلى الآية (39) من سورة الصافات', page: 34 },
  { unit: 4, title: 'أقسام المد (الأصلي - الفرعي)', page: 38 },
  { unit: 4, title: 'سورة الصافات من الآية (40) إلى الآية (98)', page: 42 },
  { unit: 5, title: 'سورة القلم من الآية (1) إلى الآية (32)', page: 46 },
  { unit: 6, title: 'أنواع المد الفرعي', page: 48 },
  { unit: 6, title: 'سورة الصافات من الآية (99) إلى الآية (157)', page: 51 },
  { unit: 7, title: 'المد المتصل (تعريفه - حكمه - مقداره - أمثلته)', page: 56 },
  { unit: 7, title: 'من الآية (158) من سورة الصافات إلى الآية (19) من سورة يس', page: 59 },
  { unit: 8, title: 'المد المنفصل (تعريفه - حكمه - مقداره - أمثلته)', page: 64 },
  { unit: 8, title: 'سورة يس من الآية (20) إلى الآية (50)', page: 68 },
  { unit: 9, title: 'المد العارض للسكون (تعريفه - حكمه - مقداره - أمثلته)', page: 74 },
  { unit: 9, title: 'سورة يس من الآية (51) إلى الآية (76)', page: 78 },
  { unit: 10, title: 'المد اللازم (تعريفه - أقسامه - حكمه - أمثلته)', page: 82 },
  { unit: 10, title: 'من الآية (77) من سورة يس إلى الآية (11) من سورة فاطر', page: 86 },
  { unit: 11, title: 'سورة القلم من الآية (24) حتى نهاية السورة', page: 90 },
  { unit: 12, title: 'المد اللازم الكلمي (تعريفه - أنواعه - أمثلته)', page: 92 },
  { unit: 12, title: 'سورة فاطر من الآية (12) إلى الآية (30)', page: 96 },
  { unit: 13, title: 'المد اللازم الحرفي (تعريفه - أقسامه - أمثلته)', page: 100 },
  { unit: 13, title: 'سورة فاطر من الآية (31) إلى نهاية السورة', page: 104 }
];
const saudiGrade6QuranRecitation = getCurriculumForSubject(
  'QURAN_RECITATION', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G6_QURAN_RECITATION_CURRICULUM.length === quranRecitationUnitTitles.length &&
    SAUDI_G6_QURAN_RECITATION_CURRICULUM.every((lecture, index) =>
      lecture.id === `saudi-g6-quran-recitation-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === quranRecitationUnitTitles[index] &&
      lecture.sections?.length > 0 &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.summaryAr?.includes('لم تتم مراجعة صفحات الدروس الداخلية') &&
      lecture.assessment.questions.length === 1
    ) &&
    quranRecitationTopicPages.every(({ unit, title, page }) =>
      SAUDI_G6_QURAN_RECITATION_CURRICULUM[unit - 1].sections?.some((section) =>
        section.titleAr.includes(title) && section.contentAr.includes(`ص ${page}`)
      )
    ) &&
    saudiGrade6QuranRecitation.map((lecture) => lecture.id).join('|') ===
      SAUDI_G6_QURAN_RECITATION_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    saudiGrade6Tajweed.every((lecture) => lecture.subject === 'TAJWEED') &&
    saudiGrade6QuranRecitation.every((lecture) => lecture.subject === 'QURAN_RECITATION') &&
    !saudiGrade6Tajweed.some((lecture) =>
      saudiGrade6QuranRecitation.some((other) => other.id === lecture.id)
    ) &&
    isSaudiPublicG6QuranRecitationAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG6QuranRecitationAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG6QuranRecitationAvailable('SA', 'G7', 'PUBLIC') &&
    !isSaudiPublicG6QuranRecitationAvailable('SA', 'G6', 'PRIVATE') &&
    !isSaudiPublicG6QuranRecitationAvailable('SA', 'G6', 'ISLAMIC') &&
    !isSaudiPublicG6QuranRecitationAvailable('EG', 'G6', 'PUBLIC') &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'QURAN_RECITATION',
        'G6',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('QURAN_RECITATION', 'G6', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Saudi Grade 6 Quran Recitation and Tajweed matches the general textbook contents and public route'
);
const quranRecitationTextbook = getNationalTextbookInfo(
  'SA', 'QURAN_RECITATION', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  quranRecitationTextbook.textbookName.includes('تلاوة القرآن الكريم وتجويده') &&
    quranRecitationTextbook.textbookName.includes('1448هـ/2026م') &&
    quranRecitationTextbook.textbookName.includes('ص 6–8') &&
    getNationalSubjectLabel('QURAN_RECITATION', 'SA', 'G6', 'ar', 'PUBLIC')
      .includes('تلاوة القرآن الكريم وتجويده'),
  'General Grade 6 Quran Recitation metadata names the government textbook and its verified contents pages'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_QURAN_RECITATION_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6QuranRecitation[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade6QuranRecitation[0],
    id: 'ai-gen-stale-quran-recitation',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_QURAN_RECITATION_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6QuranRecitation[0],
    id: 'shared-quran-recitation-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade6QuranRecitation = loadSubjectLectures(
  'QURAN_RECITATION', 'SA', 'G6', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade6QuranRecitation.length === quranRecitationUnitTitles.length &&
    isolatedSaudiGrade6QuranRecitation.map((lecture) => lecture.id).join('|') ===
      saudiGrade6QuranRecitation.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade6QuranRecitation[0].titleAr === quranRecitationUnitTitles[0] &&
    !isolatedSaudiGrade6QuranRecitation.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 6 Quran Recitation ignores stale, shared, and generated cached lessons'
);
const grade5QuranRecitationContents = [
  [1, 'tajweed', 'آداب التعامل مع المصحف الشريف', 12, null],
  [1, 'recitation', 'سورة الدخان من الآية (1) إلى الآية (42)', 16, 18],
  [2, 'tajweed', 'معنى التجويد وفضله', 20, null],
  [2, 'recitation', 'من الآية (43) من سورة الدخان إلى الآية (18) من سورة الزخرف', 23, 25],
  [3, 'tajweed', 'أحكام النون الساكنة والتنوين', 28, null],
  [3, 'recitation', 'سورة الزخرف من الآية (19) إلى الآية (45)', 32, 34],
  [4, 'tajweed', 'الإظهار', 36, null],
  [4, 'recitation', 'سورة الزخرف من الآية (46) إلى الآية (80)', 40, 42],
  [5, 'memorization', 'سورة المعارج من الآية (1) إلى الآية (25)', 44, null],
  [6, 'tajweed', 'الإدغام', 46, null],
  [6, 'recitation', 'من الآية (81) من سورة الزخرف إلى الآية (12) من سورة الشورى', 51, 53],
  [7, 'tajweed', 'الإدغام بغنة', 56, null],
  [7, 'recitation', 'سورة الشورى من الآية (13) إلى الآية (23)', 60, 62],
  [8, 'tajweed', 'الإدغام بغير غنة', 64, null],
  [8, 'recitation', 'سورة الشورى من الآية (24) إلى الآية (46)', 68, 70],
  [9, 'tajweed', 'الإقلاب', 72, null],
  [9, 'recitation', 'من الآية (47) من سورة الشورى إلى الآية (8) من سورة فصلت', 76, 78],
  [10, 'tajweed', 'الإخفاء', 80, null],
  [10, 'recitation', 'سورة فصلت من الآية (9) إلى الآية (24)', 84, 86],
  [11, 'memorization', 'سورة المعارج من الآية (26) إلى نهاية السورة', 88, null],
  [12, 'tajweed', 'حروف الإخفاء', 90, null],
  [12, 'recitation', 'سورة فصلت من الآية (25) إلى الآية (40)', 94, 96],
  [13, 'tajweed', 'حروف الإخفاء', 98, null],
  [13, 'recitation', 'سورة فصلت من الآية (41) إلى نهاية السورة', 102, 104],
];
const saudiGrade5QuranRecitation = getCurriculumForSubject(
  'QURAN_RECITATION', 'G5', 'SA', 'PUBLIC', 'GENERAL'
);
const grade5QuranRecitationUnitTitles = [
  'الوحدة الأولى', 'الوحدة الثانية', 'الوحدة الثالثة', 'الوحدة الرابعة', 'الوحدة الخامسة',
  'الوحدة السادسة', 'الوحدة السابعة', 'الوحدة الثامنة', 'الوحدة التاسعة', 'الوحدة العاشرة',
  'الوحدة الحادية عشرة', 'الوحدة الثانية عشرة', 'الوحدة الثالثة عشرة'
];
assert(
  SAUDI_G5_QURAN_RECITATION_TEXTBOOK_URL.endsWith('/1448-GE-PE-K05-SM1-tgwd.pdf') &&
    SAUDI_G5_QURAN_RECITATION_UNIT_COUNT === 13 &&
    SAUDI_G5_QURAN_RECITATION_TOPIC_COUNT === 24 &&
    SAUDI_G5_QURAN_RECITATION_TABLE_OF_CONTENTS.length === grade5QuranRecitationContents.length &&
    SAUDI_G5_QURAN_RECITATION_TABLE_OF_CONTENTS.map(({ unitNumber, kind, titleAr, page, pageEnd }) =>
      [unitNumber, kind, titleAr, page, pageEnd ?? null]
    ).every((row, index) => JSON.stringify(row) === JSON.stringify(grade5QuranRecitationContents[index])) &&
    SAUDI_G5_QURAN_RECITATION_CURRICULUM.length === grade5QuranRecitationUnitTitles.length &&
    SAUDI_G5_QURAN_RECITATION_CURRICULUM.every((lecture, index) =>
      lecture.id === `saudi-g5-quran-recitation-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.unitTitleAr === grade5QuranRecitationUnitTitles[index] &&
      lecture.gradeLevel === 'G5' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.subject === 'QURAN_RECITATION' &&
      lecture.sections?.length > 0 &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.summaryAr?.includes('1446هـ') &&
      lecture.summaryAr?.includes('كامل غير مجزأ') &&
      lecture.assessment.questions.length === 1
    ) &&
    SAUDI_G5_QURAN_RECITATION_CURRICULUM.flatMap((lecture) =>
      (lecture.sections ?? []).map((section) => section.contentAr)
    ).length === SAUDI_G5_QURAN_RECITATION_TOPIC_COUNT &&
    SAUDI_G5_QURAN_RECITATION_TABLE_OF_CONTENTS.every(({ unitNumber, kind, titleAr, page, pageEnd }) =>
      SAUDI_G5_QURAN_RECITATION_CURRICULUM[unitNumber - 1].sections?.some((section) =>
        section.titleAr.startsWith(
          `${kind === 'tajweed' ? 'التجويد' : kind === 'recitation' ? 'التلاوة' : 'الحفظ'}: ${titleAr}`
        ) &&
        section.contentAr.includes(`ص ${page}${pageEnd ? `–${pageEnd}` : ''}`)
      )
    ) &&
    isSaudiPublicG5QuranRecitationAvailable('SA', 'G5', 'PUBLIC') &&
    isSaudiPublicQuranRecitationAvailable('SA', 'G5', 'PUBLIC') &&
    isSaudiPublicQuranRecitationAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG5QuranRecitationAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicQuranRecitationAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicQuranRecitationAvailable('SA', 'G5', 'PRIVATE') &&
    !isSaudiPublicQuranRecitationAvailable('EG', 'G5', 'PUBLIC') &&
    getCurriculumForSubject('QURAN_RECITATION', 'G5', 'EG', 'PUBLIC', 'GENERAL').length === 0 &&
    saudiGrade5QuranRecitation.length === SAUDI_G5_QURAN_RECITATION_UNIT_COUNT &&
    saudiGrade5Tajweed.every((lecture) => lecture.subject === 'TAJWEED') &&
    saudiGrade5QuranRecitation.every((lecture) => lecture.subject === 'QURAN_RECITATION') &&
    !saudiGrade5Tajweed.some((lecture) =>
      saudiGrade5QuranRecitation.some((other) => other.id === lecture.id)
    ),
  'Saudi Grade 5 Quran Recitation matches all 13 units and 24 textbook contents entries and remains separate from Tajweed'
);
const quranRecitationG5Textbook = getNationalTextbookInfo(
  'SA', 'QURAN_RECITATION', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  quranRecitationG5Textbook.textbookName.includes('تلاوة القرآن الكريم وتجويده') &&
    quranRecitationG5Textbook.textbookName.includes('1448هـ/2026م') &&
    quranRecitationG5Textbook.textbookName.includes('غير مجزأ') &&
    quranRecitationG5Textbook.textbookName.includes('1446هـ') &&
    getNationalSubjectLabel('QURAN_RECITATION', 'SA', 'G5', 'ar', 'PUBLIC')
      .includes('تلاوة القرآن الكريم وتجويده'),
  'General Grade 5 Quran Recitation metadata identifies the undivided textbook and publication-date discrepancy'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_QURAN_RECITATION_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5QuranRecitation[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade5QuranRecitation[0],
    id: 'ai-gen-stale-g5-quran-recitation',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_QURAN_RECITATION_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5QuranRecitation[0],
    id: 'shared-g5-quran-recitation-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade5QuranRecitation = loadSubjectLectures(
  'QURAN_RECITATION', 'SA', 'G5', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade5QuranRecitation.length === SAUDI_G5_QURAN_RECITATION_UNIT_COUNT &&
    isolatedSaudiGrade5QuranRecitation.map((lecture) => lecture.id).join('|') ===
      saudiGrade5QuranRecitation.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade5QuranRecitation[0].titleAr === saudiGrade5QuranRecitation[0].titleAr &&
    !isolatedSaudiGrade5QuranRecitation.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 5 Quran Recitation ignores stale, shared, and generated cached lessons'
);
const visualArtsG5Topics = [
  [1, 1, 'الخامات المختلفة والمنظور والنسب والتناسب', 12],
  [1, 1, 'المآذن والقبب في العمارة الإسلامية', 19],
  [1, 1, 'الحرف الشعبية', 33],
  [1, 2, 'تجريد وحدة زخرفية نباتية', 42],
  [1, 2, 'التوريق في الزخارف الإسلامية', 49],
  [1, 3, 'مطبوعات بالتفريغ', 58],
  [1, 3, 'طباعة زخرفية بالتفريغ', 69],
  [1, 4, 'زخارف بارزة على المسطحات الطينية', 80],
  [1, 4, 'تشكيل المجسم بطريقة الشرائح الطينية', 92],
  [2, 1, 'الفنون الإسلامية', 118],
  [2, 1, 'الرسم من الطبيعة، أو الخيال', 127],
  [2, 1, 'رسم الإيقاعات الحركية في الألعاب الرياضية', 139],
  [2, 2, 'تحوير الوحدة الزخرفية النباتية', 150],
  [2, 2, 'تكوينات جمالية مبتكرة من الوحدات الزخرفية النباتية', 158],
  [2, 3, 'التشكيل بالشرائح المعدنية بطريقة الثني والربط', 166],
  [2, 3, 'تكوين مجسمات جمالية بالعلب المعدنية', 180],
  [2, 4, 'الحفر على الخشب - الإعداد', 196],
  [2, 4, 'الحفر على الخشب - التنفيذ', 204],
  [2, 5, 'إعداد النول وتسديته', 216],
  [2, 5, 'النسيج الشعبي', 228],
];
const visualArtsG5ReviewPages = [40, 55, 78, 102, 148, 164, 193, 214, 239];
const visualArtsG5UnitTitles = [
  'الجزء الأول — الوحدة الأولى: مجال الرسم',
  'الجزء الأول — الوحدة الثانية: مجال الزخرفة',
  'الجزء الأول — الوحدة الثالثة: مجال الطباعة',
  'الجزء الأول — الوحدة الرابعة: مجال الخزف',
  'الجزء الثاني — الوحدة الأولى: مجال الرسم',
  'الجزء الثاني — الوحدة الثانية: مجال الزخرفة',
  'الجزء الثاني — الوحدة الثالثة: مجال أشغال المعادن',
  'الجزء الثاني — الوحدة الرابعة: مجال أشغال الخشب',
  'الجزء الثاني — الوحدة الخامسة: مجال النسيج',
];
const saudiGrade5VisualArts = getCurriculumForSubject(
  'VISUAL_ARTS', 'G5', 'SA', 'PUBLIC', 'GENERAL'
);
const actualSaudiGrade5VisualArtsTopics = saudiGrade5VisualArts.flatMap((lecture) =>
  (lecture.sections ?? [])
    .filter((section) => section.titleAr !== 'تقويم الوحدة')
    .map((section) => {
      const match = lecture.id.match(/part-(\d)-unit-(\d+)/);
      const page = section.contentAr.match(/مرجع الفهرس: ص (\d+)\./)?.[1];
      return [Number(match?.[1]), Number(match?.[2]), section.titleAr, Number(page)];
    })
);
assert(
  SAUDI_G5_VISUAL_ARTS_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-tart.pdf' &&
    SAUDI_G5_VISUAL_ARTS_UNIT_COUNT === 9 &&
    SAUDI_G5_VISUAL_ARTS_TOPIC_COUNT === 20 &&
    SAUDI_G5_VISUAL_ARTS_CURRICULUM.length === 9 &&
    saudiGrade5VisualArts.length === 9,
  'Saudi Grade 5 Art Education records the official textbook, both parts, 9 units, and 20 indexed topics'
);
assert(
  JSON.stringify(SAUDI_G5_VISUAL_ARTS_TABLE_OF_CONTENTS.map(({ part, unitNumber, titleAr, page }) => [
    part,
    unitNumber,
    titleAr,
    page
  ])) === JSON.stringify(visualArtsG5Topics) &&
    JSON.stringify(actualSaudiGrade5VisualArtsTopics) === JSON.stringify(visualArtsG5Topics) &&
    JSON.stringify(saudiGrade5VisualArts.map((lecture) => lecture.sections
      ?.find((section) => section.titleAr === 'تقويم الوحدة')?.contentAr
      .match(/مرجع الفهرس: ص (\d+)\./)?.[1])) === JSON.stringify(
        visualArtsG5ReviewPages.map(String)
      ),
  'Saudi Grade 5 Art Education maps all indexed titles, pages, and unit-review pages in order'
);
assert(
  saudiGrade5VisualArts.map((lecture) => lecture.titleAr).join('|') === visualArtsG5UnitTitles.join('|') &&
    saudiGrade5VisualArts.every((lecture, index) =>
      lecture.id === SAUDI_G5_VISUAL_ARTS_CURRICULUM[index].id &&
      lecture.order === index + 1 &&
      lecture.gradeLevel === 'G5' &&
      lecture.subject === 'VISUAL_ARTS' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.[0].diagram?.diagramType === 'visual_arts' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.sections[0].diagram.visualSteps?.length === lecture.sections.length - 1 &&
      lecture.summaryAr?.includes('لم تراجع صفحات الدروس الداخلية') &&
      lecture.assessment.questions.length === 1
    ),
  'Saudi Grade 5 Art Education preserves both part sequences and adds original illustrated units and assessments'
);
assert(
  isSaudiPublicG5VisualArtsAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG5VisualArtsAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG5VisualArtsAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG5VisualArtsAvailable('SA', 'G5', 'PRIVATE') &&
    !isSaudiPublicG5VisualArtsAvailable('EG', 'G5', 'PUBLIC') &&
    getCurriculumForSubject('VISUAL_ARTS', 'G5', 'SA', 'PUBLIC', 'GENERAL').length === 9 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'VISUAL_ARTS',
        'G5',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('VISUAL_ARTS', 'G5', 'EG', 'PUBLIC', 'GENERAL').length === 0 &&
    getCurriculumForSubject('VISUAL_ARTS', 'G4', 'SA', 'PUBLIC', 'GENERAL').length ===
      SAUDI_G4_VISUAL_ARTS_UNIT_COUNT,
  'Saudi Grade 5 Art Education remains restricted to its public-school route alongside the separate Grade 4 route'
);
const visualArtsG5Textbook = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  visualArtsG5Textbook.textbookName.includes('1448هـ/2026م') &&
    visualArtsG5Textbook.textbookName.includes('1446هـ') &&
    visualArtsG5Textbook.textbookName.includes('ص 10 و115–116') &&
    visualArtsG5Textbook.semester.includes('الجزآن الأول والثاني') &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G5', 'ar', 'PUBLIC') ===
      'التربية الفنية (الصف الخامس)',
  'Grade 5 Art Education metadata discloses both parts and the 1448/1446 edition-year discrepancy'
);
const saudiGrade3VisualArts = getCurriculumForSubject(
  'VISUAL_ARTS', 'G3', 'SA', 'PUBLIC', 'GENERAL'
);
const grade3VisualArtsExpectedContents = [
  [1, 'مجال الرسم', 10, 26, [['عناصر التصميم', 10, 17], ['التخطيط الأولي (الاسكتش)', 18, 25]]],
  [2, 'مجال الزخرفة', 28, 58, [['الزخرفة البدائية والشعبية', 28, 45], ['الزخارف الشعبية السعودية', 46, 57]]],
  [3, 'مجال الطباعة', 60, 80, [['أطبع بوحداتي الهندسية', 60, 65], ['تكوينات وملامس مطبوعة', 66, 71], ['طباعة وحدات ذات ملامس مختلفة', 72, 79]]],
  [4, 'مجال النسيج', 82, 93, [['النسيج البسيط الملون', 82, 92]]],
] as const;
const actualSaudiGrade3VisualArtsTopics = saudiGrade3VisualArts.flatMap((lecture) =>
  (lecture.sections ?? [])
    .filter((section) => section.titleAr !== 'تقويم الوحدة')
    .map((section) => {
      const unitNumber = Number(lecture.id.match(/unit-(\d+)/)?.[1]);
      const pageRange = section.contentAr.match(/مرجع الفهرس: ص (\d+)–(\d+)\./);
      return [unitNumber, section.titleAr, Number(pageRange?.[1]), Number(pageRange?.[2])];
    })
);
const actualSaudiGrade3VisualArtsReviewPages = saudiGrade3VisualArts.map((lecture) =>
  lecture.sections?.find((section) => section.titleAr === 'تقويم الوحدة')?.contentAr
    .match(/مرجع الفهرس: ص (\d+)\./)?.[1]
);
assert(
  SAUDI_G3_VISUAL_ARTS_TEXTBOOK_URL.endsWith('/1448-GE-PE-K03-SM1-tart-part1.pdf') &&
    SAUDI_G3_VISUAL_ARTS_UNIT_COUNT === 4 &&
    SAUDI_G3_VISUAL_ARTS_TOPIC_COUNT === 8 &&
    SAUDI_G3_VISUAL_ARTS_CURRICULUM.length === 4 &&
    saudiGrade3VisualArts.length === 4 &&
    JSON.stringify(SAUDI_G3_VISUAL_ARTS_TABLE_OF_CONTENTS.map((unit) => [
      unit.unitNumber,
      unit.titleAr,
      unit.page,
      unit.reviewPage,
      unit.topics.map(({ titleAr, pageStart, pageEnd }) => [titleAr, pageStart, pageEnd]),
    ])) === JSON.stringify(grade3VisualArtsExpectedContents) &&
    JSON.stringify(actualSaudiGrade3VisualArtsTopics) === JSON.stringify(
      grade3VisualArtsExpectedContents.flatMap(([unit, , , , topics]) =>
        topics.map(([title, start, end]) => [unit, title, start, end])
      )
    ) &&
    JSON.stringify(actualSaudiGrade3VisualArtsReviewPages) === JSON.stringify(['26', '58', '80', '93']) &&
    saudiGrade3VisualArts.every((lecture, index) =>
      lecture.id === `saudi-g3-visual-arts-1448-part-1-unit-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.gradeLevel === 'G3' &&
      lecture.subject === 'VISUAL_ARTS' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.length === grade3VisualArtsExpectedContents[index][4].length + 1 &&
      lecture.sections[0].diagram?.diagramType === (index === 3 ? 'arabic_learning_map' : 'visual_arts') &&
      lecture.sections[0].diagram?.visualSteps?.length ===
        (index === 3 ? 4 : grade3VisualArtsExpectedContents[index][4].length) &&
      lecture.sections[0].diagram?.captionAr.includes('وليس صورة من الكتاب المدرسي') &&
      lecture.descriptionAr.includes('1448هـ/2026م') &&
      lecture.descriptionAr.includes('1446هـ') &&
      lecture.descriptionAr.includes('لم تراجع جميع صفحات الدروس الداخلية') &&
      lecture.assessment.questions.length === 1
    ),
  'Saudi Grade 3 Art Education maps the official four-unit contents, all eight topics, review pages, original illustrations, and checks'
);
const grade3VisualArtsTextbook = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
const grade3VisualArtsTextbookEn = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G3', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  isSaudiPublicG3VisualArtsAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG3VisualArtsAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG3VisualArtsAvailable('SA', 'G3', 'PRIVATE') &&
    !isSaudiPublicG3VisualArtsAvailable('EG', 'G3', 'PUBLIC') &&
    grade3VisualArtsTextbook.textbookName.includes('4 وحدات و8 موضوعات') &&
    grade3VisualArtsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade3VisualArtsTextbook.textbookName.includes('1446هـ') &&
    grade3VisualArtsTextbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    grade3VisualArtsTextbookEn.textbookName.includes('4 units and 8 topics') &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G3', 'ar', 'PUBLIC') ===
      'التربية الفنية (الصف الثالث)' &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G3', 'ar', 'PRIVATE').includes('غير متاحة'),
  'Saudi Grade 3 Art Education is restricted to the public route and exposes the verified Part One book metadata'
);
const grade2VisualArtsExpectedContents = [
  {
    unit: 1,
    title: 'مجال الرسم',
    page: 10,
    reviewPage: 26,
    topics: [['الطبيعة في بلادي', 10, 17], ['التجريب بالرسم والخطوط', 18, 25]],
  },
  {
    unit: 2,
    title: 'مجال الزخرفة',
    page: 28,
    reviewPage: 58,
    topics: [['التكرار في الزخرفة الهندسية', 28, 45], ['الزخارف الشعبية السعودية', 46, 57]],
  },
  {
    unit: 3,
    title: 'مجال النسيج',
    page: 60,
    reviewPage: 80,
    topics: [
      ['التداخل البسيط للخيوط', 60, 65],
      ['تكوين أشكال منسوجة', 66, 71],
      ['الخامات والملامس النسيجية', 72, 79],
    ],
  },
  {
    unit: 4,
    title: 'مجال الطباعة',
    page: 82,
    reviewPage: 116,
    topics: [
      ['الطباعة من الطبيعة', 82, 89],
      ['الطباعة بأشكال هندسية', 90, 101],
      ['طباعة زخارف هندسية', 102, 115],
    ],
  },
] as const;
const saudiGrade2VisualArts = getCurriculumForSubject(
  'VISUAL_ARTS', 'G2', 'SA', 'PUBLIC', 'GENERAL'
);
const actualSaudiGrade2VisualArtsTopics = saudiGrade2VisualArts.flatMap((lecture) =>
  (lecture.sections ?? [])
    .filter((section) => section.titleAr !== 'تقويم الوحدة')
    .map((section) => {
      const unitNumber = Number(lecture.id.match(/unit-(\d+)/)?.[1]);
      const pageRange = section.contentAr.match(/مرجع الفهرس: ص (\d+)–(\d+)\./);
      return [unitNumber, section.titleAr, Number(pageRange?.[1]), Number(pageRange?.[2])];
    })
);
const actualSaudiGrade2VisualArtsReviewPages = saudiGrade2VisualArts.map((lecture) =>
  lecture.sections?.find((section) => section.titleAr === 'تقويم الوحدة')?.contentAr
    .match(/مرجع الفهرس: ص (\d+)\./)?.[1]
);
assert(
  SAUDI_G2_VISUAL_ARTS_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-tart.pdf' &&
    SAUDI_G2_VISUAL_ARTS_UNIT_COUNT === 4 &&
    SAUDI_G2_VISUAL_ARTS_TOPIC_COUNT === 10 &&
    SAUDI_G2_VISUAL_ARTS_CURRICULUM.length === 4 &&
    saudiGrade2VisualArts.length === 4 &&
    JSON.stringify(SAUDI_G2_VISUAL_ARTS_TABLE_OF_CONTENTS.map((unit) => [
      unit.unitNumber,
      unit.titleAr,
      unit.page,
      unit.reviewPage,
      unit.topics.map(({ titleAr, pageStart, pageEnd }) => [titleAr, pageStart, pageEnd]),
    ])) === JSON.stringify(grade2VisualArtsExpectedContents.map((unit) => [
      unit.unit,
      unit.title,
      unit.page,
      unit.reviewPage,
      unit.topics,
    ])) &&
    JSON.stringify(actualSaudiGrade2VisualArtsTopics) === JSON.stringify(
      grade2VisualArtsExpectedContents.flatMap(({ unit, topics }) =>
        topics.map(([title, start, end]) => [unit, title, start, end])
      )
    ) &&
    JSON.stringify(actualSaudiGrade2VisualArtsReviewPages) === JSON.stringify(['26', '58', '80', '116']) &&
    saudiGrade2VisualArts.every((lecture, index) =>
      lecture.id === `saudi-g2-visual-arts-1448-part-1-unit-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.gradeLevel === 'G2' &&
      lecture.subject === 'VISUAL_ARTS' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.length === grade2VisualArtsExpectedContents[index].topics.length + 1 &&
      lecture.sections[0].diagram?.diagramType === 'visual_arts' &&
      lecture.sections[0].diagram?.visualSteps?.length ===
        grade2VisualArtsExpectedContents[index].topics.length &&
      lecture.sections[0].diagram?.captionAr.includes('وليس صورة من الكتاب المدرسي') &&
      lecture.descriptionAr.includes('1448هـ/2026م') &&
      lecture.descriptionAr.includes('1446هـ') &&
      lecture.descriptionAr.includes('ليست صورًا من الكتاب') &&
      lecture.assessment.questions.length === 1
    ),
  'Saudi Grade 2 Art Education maps the official four fields, ten topic page ranges, review pages, and original diagrams'
);
const grade2VisualArtsTextbook = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G2', 'GENERAL', 'ar', 'PUBLIC'
);
const grade2VisualArtsTextbookEn = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G2', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  isSaudiPublicG2VisualArtsAvailable('SA', 'G2', 'PUBLIC') &&
    !isSaudiPublicG2VisualArtsAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG2VisualArtsAvailable('SA', 'G2', 'PRIVATE') &&
    !isSaudiPublicG2VisualArtsAvailable('EG', 'G2', 'PUBLIC') &&
    grade2VisualArtsTextbook.textbookName.includes('4 وحدات و10 موضوعات') &&
    grade2VisualArtsTextbook.textbookName.includes('1448هـ/2026م') &&
    grade2VisualArtsTextbook.textbookName.includes('1446هـ') &&
    grade2VisualArtsTextbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    grade2VisualArtsTextbookEn.textbookName.includes('4 units and 10 topics') &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G2', 'ar', 'PUBLIC') ===
      'التربية الفنية (الصف الثاني)' &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G2', 'ar', 'PRIVATE').includes('غير متاحة') &&
    getCurriculumForSubject('VISUAL_ARTS', 'G2', 'SA', 'PRIVATE', 'GENERAL').length === 0 &&
    getCurriculumForSubject('VISUAL_ARTS', 'G2', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Saudi Grade 2 Art Education is limited to public schools and exposes the checked Part One book metadata'
);
const visualArtsUnitTitles = [
  'الوحدة الأولى: جمال الرسم',
  'الوحدة الثانية: جمال الزخرفة',
  'الوحدة الثالثة: جمال الطباعة',
  'الوحدة الرابعة: جمال الخزف',
];
const visualArtsTopicPages = [
  { unit: 1, title: 'أسس التصميم في الرسم', page: 10 },
  { unit: 1, title: 'الرسم بالألوان الزيتية', page: 15 },
  { unit: 1, title: 'التجريدية في الرسم', page: 26 },
  { unit: 2, title: 'التشكيل الزخرفي من نقطة', page: 34 },
  { unit: 2, title: 'التشكيل الزخرفي على أسطح متنوعة', page: 46 },
  { unit: 3, title: 'الحفر والطباعة بالقوالب (الإعداد والتنفيذ)', page: 60 },
  { unit: 4, title: 'تشكيل آنية خزفية منتظمة الشكل', page: 88 },
  { unit: 4, title: 'تكوينات زخرفية غائرة على أسطح الطينة المتجلدة', page: 107 },
  { unit: 4, title: 'أهداف المشروع الفني', page: 119 },
];
const saudiGrade6VisualArts = getCurriculumForSubject(
  'VISUAL_ARTS', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G6_VISUAL_ARTS_CURRICULUM.length === visualArtsUnitTitles.length &&
    SAUDI_G6_VISUAL_ARTS_CURRICULUM.every((lecture, index) =>
      lecture.id === `saudi-g6-visual-arts-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.titleAr === visualArtsUnitTitles[index] &&
      lecture.subject === 'VISUAL_ARTS' &&
      lecture.gradeLevel === 'G6' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.length > 1 &&
      lecture.sections[0].diagram?.diagramType === 'visual_arts' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.summaryAr?.includes('لم تراجع صفحات الدروس الداخلية') &&
      lecture.assessment.questions.length === 1
    ) &&
    visualArtsTopicPages.every(({ unit, title, page }) =>
      SAUDI_G6_VISUAL_ARTS_CURRICULUM[unit - 1].sections?.some((section) =>
        section.titleAr === title && section.contentAr.includes(`ص ${page}`)
      )
    ) &&
    saudiGrade6VisualArts.map((lecture) => lecture.id).join('|') ===
      SAUDI_G6_VISUAL_ARTS_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    isSaudiPublicG6VisualArtsAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG6VisualArtsAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG6VisualArtsAvailable('SA', 'G7', 'PUBLIC') &&
    !isSaudiPublicG6VisualArtsAvailable('SA', 'G6', 'PRIVATE') &&
    !isSaudiPublicG6VisualArtsAvailable('SA', 'G6', 'ISLAMIC') &&
    !isSaudiPublicG6VisualArtsAvailable('EG', 'G6', 'PUBLIC') &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'VISUAL_ARTS',
        'G6',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('VISUAL_ARTS', 'G6', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Saudi Grade 6 Art Education follows the verified textbook contents and public-school route'
);
const visualArtsTextbook = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  visualArtsTextbook.textbookName.includes('التربية الفنية') &&
    visualArtsTextbook.textbookName.includes('1448هـ/2026م') &&
    visualArtsTextbook.textbookName.includes('ص 8') &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G6', 'ar', 'PUBLIC')
      .includes('التربية الفنية'),
  'Saudi Grade 6 Art Education metadata identifies the textbook edition and verified contents page'
);
const officialSaudiGrade4VisualArtsContents: [
  number,
  number,
  string,
  number,
  number,
  [string, number, number][],
  number | null
][] = [
  [1, 1, 'مجال الرسم', 15, 36, [
    ['مبادئ التكوين الفني', 15, 22],
    ['الضوء والظل والثمار', 23, 29],
    ['رسم أوراق الشجر', 30, 35]
  ], null],
  [1, 2, 'مجال الزخرفة', 39, 51, [
    ['الزخرفة الهندسية', 39, 44],
    ['الأقطار في الزخرفة الهندسية', 45, 50]
  ], null],
  [1, 3, 'مجال الطباعة', 55, 69, [
    ['الطباعة بقوالب مختلفة الخامات', 55, 61],
    ['الطباعة بقوالب الشكل والأرضية', 62, 68]
  ], null],
  [1, 4, 'مجال الخزف', 72, 90, [
    ['تشكيل أواني بطريقة الحبال', 72, 80],
    ['تشكيلات مبتكرة بطريقة الحبال', 81, 89]
  ], 91],
  [2, 1, 'مجال الرسم', 103, 112, [
    ['التصوير من الطبيعة الصامتة', 103, 108],
    ['تصميم الجرافيك', 109, 111]
  ], null],
  [2, 2, 'مجال الزخرفة', 115, 123, [
    ['التماثل الكلي في زخارفنا الإسلامية', 115, 119],
    ['التماثل الكلي المتعاكس في زخارفنا', 120, 122]
  ], null],
  [2, 3, 'مجال أشغال المعادن', 127, 138, [
    ['لوحة فنية بالضغط على النحاس', 127, 132],
    ['لوحة زخرفية باستخدام ألوان الزجاج على النحاس', 133, 137]
  ], null],
  [2, 4, 'مجال أشغال الخشب', 141, 152, [
    ['تكوين جمالي مسطح بالخشب', 141, 147],
    ['تكوين جمالي مجسم بالخشب', 148, 151]
  ], null],
  [2, 5, 'مجال النسيج', 155, 172, [
    ['النسيج البسيط', 155, 164],
    ['تشكيلات متنوعة بالنسيج', 165, 171]
  ], 173]
];
const saudiGrade4VisualArts = getCurriculumForSubject(
  'VISUAL_ARTS', 'G4', 'SA', 'PUBLIC', 'GENERAL'
);
const actualSaudiGrade4VisualArtsTopics = saudiGrade4VisualArts.flatMap((lecture) => {
  const match = lecture.id.match(/part-(\d)-unit-(\d+)/);
  return (lecture.sections ?? [])
    .filter((section) => section.titleAr !== 'تقويم الوحدة' && section.titleAr !== 'المشروع الفصلي')
    .map((section) => {
      const pages = section.contentAr.match(/مرجع الفهرس: ص (\d+)–(\d+)\./);
      return [Number(match?.[1]), Number(match?.[2]), section.titleAr, Number(pages?.[1]), Number(pages?.[2])];
    });
});
const actualSaudiGrade4VisualArtsReviewPages = saudiGrade4VisualArts.map((lecture) =>
  lecture.sections?.find((section) => section.titleAr === 'تقويم الوحدة')?.contentAr
    .match(/مرجع الفهرس: ص (\d+)\./)?.[1]
);
const actualSaudiGrade4VisualArtsProjectPages = saudiGrade4VisualArts.map((lecture) =>
  lecture.sections?.find((section) => section.titleAr === 'المشروع الفصلي')?.contentAr
    .match(/مرجع الفهرس: ص (\d+)\./)?.[1] ?? null
);
assert(
  SAUDI_G4_VISUAL_ARTS_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-tart.pdf' &&
    SAUDI_G4_VISUAL_ARTS_UNIT_COUNT === 9 &&
    SAUDI_G4_VISUAL_ARTS_TOPIC_COUNT === 19 &&
    SAUDI_G4_VISUAL_ARTS_CURRICULUM.length === 9 &&
    saudiGrade4VisualArts.length === 9 &&
    JSON.stringify(SAUDI_G4_VISUAL_ARTS_TABLE_OF_CONTENTS.map((unit) => [
      unit.part,
      unit.unitNumber,
      unit.titleAr,
      unit.page,
      unit.reviewPage,
      unit.topics,
      unit.projectPage
    ])) === JSON.stringify(officialSaudiGrade4VisualArtsContents) &&
    JSON.stringify(actualSaudiGrade4VisualArtsTopics) === JSON.stringify(
      officialSaudiGrade4VisualArtsContents.flatMap(([part, unit, , , , topics]) =>
        topics.map(([title, start, end]) => [
          part,
          unit,
          title,
          start,
          end
        ])
      )
    ) &&
    JSON.stringify(actualSaudiGrade4VisualArtsReviewPages) ===
      JSON.stringify(officialSaudiGrade4VisualArtsContents.map((unit) => String(unit[4]))) &&
    JSON.stringify(actualSaudiGrade4VisualArtsProjectPages) ===
      JSON.stringify(officialSaudiGrade4VisualArtsContents.map((unit) =>
        unit[6] === null ? null : String(unit[6])
      )) &&
    saudiGrade4VisualArts.every((lecture, index) =>
      lecture.id === `saudi-g4-visual-arts-1448-part-${officialSaudiGrade4VisualArtsContents[index][0]}-unit-${officialSaudiGrade4VisualArtsContents[index][1]}` &&
      lecture.order === index + 1 &&
      lecture.gradeLevel === 'G4' &&
      lecture.subject === 'VISUAL_ARTS' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.[0].diagram?.diagramType === 'visual_arts' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.sections[0].diagram.visualSteps?.length === officialSaudiGrade4VisualArtsContents[index][5].length &&
      lecture.summaryAr?.includes('لم تراجع صفحات الموضوعات الداخلية') &&
      lecture.assessment.questions.length === 1
    ),
  'Saudi Grade 4 Art Education maps both parts, all 9 units, 19 topics, page ranges, reviews, and semester projects'
);
assert(
  isSaudiPublicG4VisualArtsAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG4VisualArtsAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG4VisualArtsAvailable('SA', 'G4', 'PRIVATE') &&
    !isSaudiPublicG4VisualArtsAvailable('EG', 'G4', 'PUBLIC') &&
    getCurriculumForSubject('VISUAL_ARTS', 'G4', 'SA', 'PUBLIC', 'GENERAL').length === 9 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'VISUAL_ARTS',
        'G4',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('VISUAL_ARTS', 'G4', 'EG', 'PUBLIC', 'GENERAL').length === 0,
  'Saudi Grade 4 Art Education is restricted to its verified public-school route'
);
const visualArtsG4Textbook = getNationalTextbookInfo(
  'SA', 'VISUAL_ARTS', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  visualArtsG4Textbook.textbookName.includes('1448هـ/2026م') &&
    visualArtsG4Textbook.textbookName.includes('1446هـ') &&
    visualArtsG4Textbook.textbookName.includes('9 وحدات و19 موضوعًا') &&
    visualArtsG4Textbook.textbookName.includes('ص 8–9 و98–99') &&
    visualArtsG4Textbook.semester === 'العام الدراسي (الجزآن الأول والثاني)' &&
    getNationalSubjectLabel('VISUAL_ARTS', 'SA', 'G4', 'ar', 'PUBLIC') ===
      'التربية الفنية (الصف الرابع)',
  'Grade 4 Art Education metadata records the full-year source, index pages, and disclosed edition-year difference'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_VISUAL_ARTS_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6VisualArts[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade6VisualArts[0],
    id: 'ai-gen-stale-visual-arts',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_VISUAL_ARTS_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6VisualArts[0],
    id: 'shared-visual-arts-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade6VisualArts = loadSubjectLectures(
  'VISUAL_ARTS', 'SA', 'G6', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade6VisualArts.length === visualArtsUnitTitles.length &&
    isolatedSaudiGrade6VisualArts.map((lecture) => lecture.id).join('|') ===
      saudiGrade6VisualArts.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade6VisualArts[0].titleAr === visualArtsUnitTitles[0] &&
    !isolatedSaudiGrade6VisualArts.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 6 Art Education ignores stale, shared, and generated cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_VISUAL_ARTS_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5VisualArts[0],
    titleAr: 'عنوان قديم غير مطابق لفهرس الصف الخامس'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_VISUAL_ARTS_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5VisualArts[0],
    id: 'shared-g5-visual-arts-content',
    titleAr: 'محتوى مشترك غير معتمد'
  }])
);
const isolatedSaudiGrade5VisualArts = loadSubjectLectures(
  'VISUAL_ARTS', 'SA', 'G5', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade5VisualArts.length === visualArtsG5UnitTitles.length &&
    isolatedSaudiGrade5VisualArts.map((lecture) => lecture.id).join('|') ===
      saudiGrade5VisualArts.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade5VisualArts[0].titleAr === visualArtsG5UnitTitles[0] &&
    !isolatedSaudiGrade5VisualArts.some((lecture) =>
      lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') ||
      lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 5 Art Education ignores stale and shared cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_VISUAL_ARTS_G4_GENERAL',
  JSON.stringify([{
    ...saudiGrade4VisualArts[0],
    titleAr: 'عنوان قديم غير مطابق لفهرس الصف الرابع'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_VISUAL_ARTS_G4_GENERAL',
  JSON.stringify([{
    ...saudiGrade4VisualArts[0],
    id: 'shared-g4-visual-arts-content',
    titleAr: 'محتوى مشترك غير معتمد'
  }])
);
const isolatedSaudiGrade4VisualArts = loadSubjectLectures(
  'VISUAL_ARTS', 'SA', 'G4', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade4VisualArts.length === SAUDI_G4_VISUAL_ARTS_UNIT_COUNT &&
    isolatedSaudiGrade4VisualArts.map((lecture) => lecture.id).join('|') ===
      saudiGrade4VisualArts.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade4VisualArts[0].titleAr === saudiGrade4VisualArts[0].titleAr &&
    !isolatedSaudiGrade4VisualArts.some((lecture) =>
      lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') ||
      lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 4 Art Education ignores stale and shared cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_VISUAL_ARTS_G3_GENERAL',
  JSON.stringify([{
    ...saudiGrade3VisualArts[0],
    titleAr: 'عنوان قديم غير مطابق لفهرس الصف الثالث',
    isCompleted: true
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_VISUAL_ARTS_G3_GENERAL',
  JSON.stringify([{
    ...saudiGrade3VisualArts[0],
    id: 'shared-g3-visual-arts-content',
    titleAr: 'محتوى مشترك غير معتمد للصف الثالث',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade3VisualArts = loadSubjectLectures(
  'VISUAL_ARTS', 'SA', 'G3', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade3VisualArts.length === SAUDI_G3_VISUAL_ARTS_UNIT_COUNT &&
    isolatedSaudiGrade3VisualArts.map((lecture) => lecture.id).join('|') ===
      saudiGrade3VisualArts.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade3VisualArts[0].titleAr === saudiGrade3VisualArts[0].titleAr &&
    !isolatedSaudiGrade3VisualArts.some((lecture) =>
      lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') ||
      lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 3 Art Education ignores stale and shared cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_VISUAL_ARTS_G2_GENERAL',
  JSON.stringify([{
    ...saudiGrade2VisualArts[0],
    titleAr: 'عنوان قديم غير مطابق لفهرس الصف الثاني',
    isCompleted: true
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_VISUAL_ARTS_G2_GENERAL',
  JSON.stringify([{
    ...saudiGrade2VisualArts[0],
    id: 'shared-g2-visual-arts-content',
    titleAr: 'محتوى مشترك غير معتمد للصف الثاني',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade2VisualArts = loadSubjectLectures(
  'VISUAL_ARTS', 'SA', 'G2', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade2VisualArts.length === SAUDI_G2_VISUAL_ARTS_UNIT_COUNT &&
    isolatedSaudiGrade2VisualArts.map((lecture) => lecture.id).join('|') ===
      saudiGrade2VisualArts.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade2VisualArts[0].titleAr === saudiGrade2VisualArts[0].titleAr &&
    !isolatedSaudiGrade2VisualArts.some((lecture) =>
      lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') ||
      lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 2 Art Education ignores stale and shared cached lessons'
);
const primaryMathContents = [
  {
    title: 'الفصل الأول: الجبر: الأنماط العددية والدوال',
    topics: [
      { title: 'التهيئة', page: 11 },
      { title: 'الخطوات الأربع لحل المسألة', page: 12 },
      { title: 'العوامل الأولية', page: 17 },
      { title: 'القوى والأسس', page: 22 },
      { title: 'ترتيب العمليات', page: 27 },
      { title: 'اختبار منتصف الفصل', page: 32 },
      { title: 'الجبر: المتغيرات والعبارات', page: 33 },
      { title: 'الجبر: الدوال', page: 38 },
      { title: 'خطة حل المسألة: التخمين والتحقق', page: 43 },
      { title: 'الجبر: المعادلات', page: 45 },
      { title: 'اختبار الفصل', page: 49 },
      { title: 'الاختبار التراكمي (1)', page: 50, pageEnd: 51 },
    ],
  },
  {
    title: 'الفصل الثاني: الإحصاء والتمثيلات البيانية',
    topics: [
      { title: 'التهيئة', page: 53 },
      { title: 'إنشاء جدول', page: 54 },
      { title: 'التمثيل بالأعمدة وبالخطوط', page: 56 },
      { title: 'توسع: التمثيل بالأعمدة وبالخطوط', page: 61 },
      { title: 'التمثيل بالنقاط', page: 63 },
      { title: 'اختبار منتصف الفصل', page: 69 },
      { title: 'المتوسط الحسابي', page: 70 },
      { title: 'الوسيط والمنوال والمدى', page: 75 },
      { title: 'اختبار الفصل', page: 81 },
      { title: 'الاختبار التراكمي (2)', page: 82, pageEnd: 83 },
    ],
  },
  {
    title: 'الفصل الثالث: العمليات على الكسور العشرية',
    topics: [
      { title: 'التهيئة', page: 85 },
      { title: 'تمثيل الكسور العشرية', page: 86 },
      { title: 'مقارنة الكسور العشرية وترتيبها', page: 90 },
      { title: 'تقريب الكسور العشرية', page: 94 },
      { title: 'تقدير ناتج جمع الكسور العشرية وطرحها', page: 98 },
      { title: 'استكشاف: جمع الكسور العشرية وطرحها باستعمال النماذج', page: 103 },
      { title: 'جمع الكسور العشرية وطرحها', page: 104 },
      { title: 'اختبار منتصف الفصل', page: 109 },
      { title: 'استكشاف: ضرب الكسور العشرية في أعداد كلية', page: 110 },
      { title: 'ضرب الكسور العشرية في أعداد كلية', page: 111 },
      { title: 'استكشاف: ضرب الكسور العشرية', page: 115 },
      { title: 'ضرب الكسور العشرية', page: 117 },
      { title: 'قسمة الكسور العشرية على أعداد كلية', page: 121 },
      { title: 'استكشاف: القسمة على كسر عشري', page: 125 },
      { title: 'القسمة على كسر عشري', page: 127 },
      { title: 'خطة حل المسألة: التحقق من معقولية الإجابة', page: 133 },
      { title: 'اختبار الفصل', page: 135 },
      { title: 'الاختبار التراكمي (3)', page: 136, pageEnd: 137 },
    ],
  },
  {
    title: 'الفصل الرابع: الكسور الاعتيادية والكسور العشرية',
    topics: [
      { title: 'التهيئة', page: 139 },
      { title: 'القاسم المشترك الأكبر', page: 140 },
      { title: 'استكشاف: الكسور المتكافئة', page: 145 },
      { title: 'تبسيط الكسور الاعتيادية', page: 147 },
      { title: 'الأعداد الكسرية والكسور غير الفعلية', page: 152 },
      { title: 'خطة حل المسألة: إنشاء قائمة منظمة', page: 156 },
      { title: 'اختبار منتصف الفصل', page: 158 },
      { title: 'المضاعف المشترك الأصغر', page: 159 },
      { title: 'مقارنة الكسور الاعتيادية وترتيبها', page: 163 },
      { title: 'كتابة الكسور العشرية في صورة كسور اعتيادية', page: 168 },
      { title: 'كتابة الكسور الاعتيادية في صورة كسور عشرية', page: 172 },
      { title: 'اختبار الفصل', page: 177 },
      { title: 'الاختبار التراكمي (4)', page: 178, pageEnd: 179 },
    ],
  },
  {
    title: 'الفصل الخامس: القياس: الطول والكتلة والسعة',
    topics: [
      { title: 'التهيئة', page: 181 },
      { title: 'استكشاف: النظام المتري', page: 182 },
      { title: 'الطول في النظام المتري', page: 184 },
      { title: 'الكتلة والسعة في النظام المتري', page: 189 },
      { title: 'اختبار منتصف الفصل', page: 195 },
      { title: 'مهارة حل المسألة: استعمال مقياس مرجعي', page: 196 },
      { title: 'التحويل بين الوحدات في النظام المتري', page: 198 },
      { title: 'اختبار الفصل', page: 203 },
      { title: 'الاختبار التراكمي (5)', page: 204, pageEnd: 205 },
    ],
  },
];
const saudiGrade6PrimaryMath = getCurriculumForSubject(
  'PRIMARY_MATH', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G6_PRIMARY_MATH_CURRICULUM.length === primaryMathContents.length &&
    SAUDI_G6_PRIMARY_MATH_CURRICULUM.every((lecture, chapterIndex) => {
      const chapter = primaryMathContents[chapterIndex];
      return lecture.id === `saudi-g6-primary-math-1448-${chapterIndex + 1}` &&
        lecture.order === chapterIndex + 1 &&
        lecture.titleAr === chapter.title &&
        lecture.subject === 'PRIMARY_MATH' &&
        lecture.gradeLevel === 'G6' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.sections?.length === chapter.topics.length &&
        lecture.sections?.[0].diagram?.diagramType === 'primary_math_unit' &&
        lecture.sections?.[0].diagram?.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
        lecture.summaryAr?.includes('صفحات PDF 1 و6–7') &&
        chapter.topics.every((topic) =>
          lecture.sections?.some((section) =>
            section.titleAr === topic.title &&
            section.contentAr.includes(`ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}`)
          )
        ) &&
        lecture.assessment.questions.length === 1;
    }) &&
    saudiGrade6PrimaryMath.map((lecture) => lecture.id).join('|') ===
      SAUDI_G6_PRIMARY_MATH_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    isSaudiPublicG6PrimaryMathAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG6PrimaryMathAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG6PrimaryMathAvailable('SA', 'G7', 'PUBLIC') &&
    !isSaudiPublicG6PrimaryMathAvailable('SA', 'G6', 'PRIVATE') &&
    !isSaudiPublicG6PrimaryMathAvailable('SA', 'G6', 'ISLAMIC') &&
    !isSaudiPublicG6PrimaryMathAvailable('EG', 'G6', 'PUBLIC') &&
    !getCurriculumForSubject('PRIMARY_MATH', 'G6', 'EG', 'PUBLIC', 'GENERAL')
      .some((lecture) => lecture.id.startsWith('saudi-g6-primary-math-')),
  'Saudi Grade 6 Mathematics follows all verified Part One contents and remains scoped to the public curriculum'
);
const primaryMathTextbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  primaryMathTextbook.textbookName.includes('الرياضيات') &&
    primaryMathTextbook.textbookName.includes('1448هـ/2026م') &&
    primaryMathTextbook.textbookName.includes('ص 6–7') &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G6', 'ar', 'PUBLIC')
      .includes('الصف السادس الحكومي'),
  'Saudi public Grade 6 Mathematics metadata names the verified textbook and contents pages'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_MATH_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6PrimaryMath[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade6PrimaryMath[0],
    id: 'ai-gen-stale-primary-math',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_MATH_G6_GENERAL',
  JSON.stringify([{
    ...saudiGrade6PrimaryMath[0],
    id: 'shared-primary-math-content',
    educationTrack: 'GENERAL',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade6PrimaryMath = loadSubjectLectures(
  'PRIMARY_MATH', 'SA', 'G6', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade6PrimaryMath.length === primaryMathContents.length &&
    isolatedSaudiGrade6PrimaryMath.map((lecture) => lecture.id).join('|') ===
      saudiGrade6PrimaryMath.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade6PrimaryMath[0].titleAr === primaryMathContents[0].title &&
    !isolatedSaudiGrade6PrimaryMath.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 6 Mathematics ignores stale, shared, and generated cached lessons'
);
const primaryMathG5Contents = [
  {
    title: 'الفصل الأول: القيمة المنزلية',
    topics: [
      { title: 'التهيئة', page: 12 },
      { title: 'القيمة المنزلية ضمن البلايين', page: 13 },
      { title: 'المقارنة بين الأعداد', page: 16 },
      { title: 'استكشاف: الكسور الاعتيادية والكسور العشرية', page: 20 },
      { title: 'تمثيل الكسور العشرية', page: 22 },
      { title: 'القيمة المنزلية ضمن أجزاء الألف', page: 25 },
      { title: 'اختبار منتصف الفصل', page: 29 },
      { title: 'مقارنة الكسور العشرية', page: 30 },
      { title: 'ترتيب الأعداد والكسور العشرية', page: 33 },
      { title: 'خطة حل المسألة: التخمين والتحقق', page: 38 },
      { title: 'هيا بنا نلعب', page: 40 },
      { title: 'اختبار الفصل', page: 41 },
      { title: 'الاختبار التراكمي (1)', page: 42 },
    ]
  },
  {
    title: 'الفصل الثاني: الجمع والطرح',
    topics: [
      { title: 'التهيئة', page: 46 },
      { title: 'تقريب الأعداد والكسور العشرية', page: 47 },
      { title: 'تقدير نواتج الجمع والطرح', page: 50 },
      { title: 'خطة حل المسألة: الحل عكسياً', page: 54 },
      { title: 'اختبار منتصف الفصل', page: 56 },
      { title: 'استكشاف: جمع الكسور العشرية وطرحها', page: 57 },
      { title: 'جمع الكسور العشرية وطرحها', page: 59 },
      { title: 'هيا بنا نلعب', page: 63 },
      { title: 'خصائص الجمع', page: 64 },
      { title: 'الجمع والطرح ذهنياً', page: 67 },
      { title: 'اختبار الفصل', page: 71 },
      { title: 'الاختبار التراكمي (2)', page: 72 },
    ]
  },
  {
    title: 'الفصل الثالث: الضرب',
    topics: [
      { title: 'التهيئة', page: 76 },
      { title: 'أنماط الضرب', page: 77 },
      { title: 'استكشاف: الضرب الذهني', page: 80 },
      { title: 'خاصية التوزيع', page: 82 },
      { title: 'تقدير نواتج الضرب', page: 86 },
      { title: 'الضرب في عدد من رقم واحد', page: 90 },
      { title: 'اختبار منتصف الفصل', page: 94 },
      { title: 'خطة حل المسألة: رسم صورة', page: 95 },
      { title: 'الضرب في عدد من رقمين', page: 97 },
      { title: 'خصائص الضرب', page: 100 },
      { title: 'استقصاء حل المسألة', page: 103 },
      { title: 'اختبار الفصل', page: 105 },
      { title: 'الاختبار التراكمي (3)', page: 106 },
    ]
  },
  {
    title: 'الفصل الرابع: القسمة',
    topics: [
      { title: 'التهيئة', page: 110 },
      { title: 'أنماط القسمة', page: 111 },
      { title: 'تقدير نواتج القسمة', page: 114 },
      { title: 'استكشاف: القسمة باستعمال النماذج', page: 118 },
      { title: 'القسمة على عدد من رقم واحد', page: 120 },
      { title: 'اختبار منتصف الفصل', page: 123 },
      { title: 'القسمة على عدد من رقمين', page: 124 },
      { title: 'خطة حل المسألة: تمثيل المعطيات', page: 128 },
      { title: 'استكشاف: تفسير باقي القسمة', page: 130 },
      { title: 'تفسير باقي القسمة', page: 132 },
      { title: 'هيا بنا نلعب', page: 136 },
      { title: 'اختبار الفصل', page: 137 },
      { title: 'الاختبار التراكمي (4)', page: 138 },
    ]
  },
  {
    title: 'الفصل الخامس: العبارات الجبرية والمعادلات',
    topics: [
      { title: 'التهيئة', page: 142 },
      { title: 'عبارات الجمع والطرح الجبرية', page: 143 },
      { title: 'خطة حل المسألة: حل مسألة أبسط', page: 146 },
      { title: 'عبارات الضرب والقسمة الجبرية', page: 148 },
      { title: 'استقصاء حل المسألة', page: 153 },
      { title: 'اختبار منتصف الفصل', page: 155 },
      { title: 'استكشاف: آلات الدوال', page: 156 },
      { title: 'جداول الدوال', page: 158 },
      { title: 'ترتيب العمليات', page: 162 },
      { title: 'استكشاف: تمثيل معادلات الجمع والطرح بنماذج', page: 166 },
      { title: 'معادلات الجمع والطرح', page: 168 },
      { title: 'استكشاف: تمثيل معادلات الضرب بنماذج', page: 172 },
      { title: 'معادلات الضرب', page: 174 },
      { title: 'اختبار الفصل', page: 177 },
      { title: 'الاختبار التراكمي (5)', page: 178 },
    ]
  },
  {
    title: 'الفصل السادس: الكسور الاعتيادية',
    topics: [
      { title: 'التهيئة', page: 182 },
      { title: 'القسمة والكسور الاعتيادية', page: 183 },
      { title: 'استكشاف: تمثيل الأعداد الكسرية والكسور غير الفعلية بالنماذج', page: 186 },
      { title: 'الكسور غير الفعلية', page: 188 },
      { title: 'خطة حل المسألة: التمثيل بأشكال فن', page: 192 },
      { title: 'الأعداد الكسرية', page: 194 },
      { title: 'اختبار منتصف الفصل', page: 197 },
      { title: 'مقارنة الكسور الاعتيادية والأعداد الكسرية', page: 198 },
      { title: 'تقريب الكسور', page: 201 },
      { title: 'استقصاء حل المسألة', page: 205 },
      { title: 'اختبار الفصل', page: 207 },
      { title: 'الاختبار التراكمي (6)', page: 208 },
    ]
  },
];
const expectedSaudiG5PrimaryMathContents = primaryMathG5Contents.flatMap((chapter, chapterIndex) =>
  chapter.topics.map((topic) => [chapterIndex + 1, chapter.title.replace(/^الفصل [^:]+: /, ''), topic.title, topic.page])
);
const saudiGrade5PrimaryMath = getCurriculumForSubject(
  'PRIMARY_MATH', 'G5', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G5_PRIMARY_MATH_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-math.pdf' &&
    SAUDI_G5_PRIMARY_MATH_UNIT_COUNT === primaryMathG5Contents.length &&
    SAUDI_G5_PRIMARY_MATH_TOPIC_COUNT === expectedSaudiG5PrimaryMathContents.length &&
    JSON.stringify(SAUDI_G5_PRIMARY_MATH_TABLE_OF_CONTENTS.map(({ unitNumber, unitTitleAr, titleAr, page }) => [
      unitNumber,
      unitTitleAr,
      titleAr,
      page
    ])) === JSON.stringify(expectedSaudiG5PrimaryMathContents),
  'Saudi Grade 5 Mathematics maps all six chapters and indexed titles and page references'
);
assert(
  SAUDI_G5_PRIMARY_MATH_CURRICULUM.length === primaryMathG5Contents.length &&
    SAUDI_G5_PRIMARY_MATH_CURRICULUM.every((lecture, chapterIndex) => {
      const chapter = primaryMathG5Contents[chapterIndex];
      return lecture.id === `saudi-g5-primary-math-1448-${chapterIndex + 1}` &&
        lecture.order === chapterIndex + 1 &&
        lecture.titleAr === chapter.title &&
        lecture.gradeLevel === 'G5' &&
        lecture.subject === 'PRIMARY_MATH' &&
        lecture.country === 'SA' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.sections?.length === chapter.topics.length &&
        lecture.sections?.[0].diagram?.diagramType === 'primary_math_g5_unit' &&
        lecture.sections?.[0].diagram?.visualSteps?.length === 4 &&
        lecture.sections?.[0].diagram?.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
        lecture.descriptionAr?.includes('صفحات PDF 1 و2 و6–7') &&
        lecture.descriptionAr?.includes('سجل النشر الداخلي 1446هـ') &&
        chapter.topics.every((topic) =>
          lecture.sections?.some((section) =>
            section.titleAr === topic.title && section.contentAr.includes(`ص ${topic.page}`)
          )
        ) &&
        lecture.assessment.questions.length === 1;
    }) &&
    saudiGrade5PrimaryMath.map((lecture) => lecture.id).join('|') ===
      SAUDI_G5_PRIMARY_MATH_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    isSaudiPublicG5PrimaryMathAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG5PrimaryMathAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG5PrimaryMathAvailable('SA', 'G6', 'PUBLIC') &&
    !isSaudiPublicG5PrimaryMathAvailable('SA', 'G5', 'PRIVATE') &&
    !isSaudiPublicG5PrimaryMathAvailable('SA', 'G5', 'ISLAMIC') &&
    !isSaudiPublicG5PrimaryMathAvailable('EG', 'G5', 'PUBLIC') &&
    !getCurriculumForSubject('PRIMARY_MATH', 'G5', 'EG', 'PUBLIC', 'GENERAL')
      .some((lecture) => lecture.id.startsWith('saudi-g5-primary-math-')),
  'Saudi Grade 5 Mathematics follows the verified contents and remains scoped to the public curriculum'
);
const primaryMathG5Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  primaryMathG5Textbook.textbookName.includes('1448هـ/2026م') &&
    primaryMathG5Textbook.textbookName.includes('1446هـ') &&
    primaryMathG5Textbook.textbookName.includes('ص 6–7') &&
    primaryMathG5Textbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G5', 'ar', 'PUBLIC') ===
      'الرياضيات (الصف الخامس الحكومي — الجزء الأول)',
  'Saudi public Grade 5 Mathematics metadata identifies the verified book and discloses its edition discrepancy'
);
const primaryMathG3Contents = [
  {
    titleAr: 'القيمة المنزلية',
    topics: [
      ['preparation', 'التهيئة', 12],
      ['lesson', 'الجبر: الأنماط العددية', 13],
      ['lesson', 'مهارة حل المسألة: استعمال الخطوات الأربع', 16],
      ['exploration', 'استكشف القيمة المنزلية', 18],
      ['lesson', 'القيمة المنزلية ضمن الألوف', 20],
      ['lesson', 'القيمة المنزلية ضمن عشرات الألوف', 24],
      ['midterm', 'اختبار منتصف الفصل', 28],
      ['lesson', 'مقارنة الأعداد', 29],
      ['lesson', 'ترتيب الأعداد', 33],
      ['lesson', 'التقريب إلى أقرب عشرة وإلى أقرب مئة', 37],
      ['extension', 'هيا بنا نلعب', 40],
      ['lesson', 'التقريب إلى أقرب ألف', 41],
      ['chapterReview', 'اختبار الفصل', 45],
      ['cumulative', 'اختبار تراكمي (1)', 46],
      ['cumulative', 'اختبر نفسك', 48],
    ],
  },
  {
    titleAr: 'الجمع',
    topics: [
      ['preparation', 'التهيئة', 52],
      ['lesson', 'الجبر: خصائص الجمع', 53],
      ['lesson', 'تقدير نواتج الجمع', 56],
      ['lesson', 'مهارة حل المسألة: الجواب الدقيق أم التقديري', 60],
      ['midterm', 'اختبار منتصف الفصل', 62],
      ['lesson', 'جمع الأعداد المكونة من رقمين', 63],
      ['lesson', 'مهارة حل المسألة: استعمال الخطوات الأربع', 66],
      ['exploration', 'استكشف جمع الأعداد المكونة من ثلاثة أرقام', 68],
      ['lesson', 'جمع الأعداد المكونة من ثلاثة أرقام', 70],
      ['chapterReview', 'اختبار الفصل', 75],
      ['cumulative', 'اختبار تراكمي (2)', 76],
    ],
  },
  {
    titleAr: 'الطرح',
    topics: [
      ['preparation', 'التهيئة', 80],
      ['lesson', 'طرح الأعداد المكونة من رقمين', 81],
      ['lesson', 'تقدير نواتج الطرح', 84],
      ['lesson', 'مهارة حل المسألة: معقولية الجواب', 88],
      ['midterm', 'اختبار منتصف الفصل', 90],
      ['exploration', 'استكشف طرح الأعداد المكونة من ثلاثة أرقام، مع إعادة التجميع', 91],
      ['lesson', 'طرح الأعداد المكونة من ثلاثة أرقام، مع إعادة التجميع', 93],
      ['extension', 'هيا بنا نلعب', 97],
      ['lesson', 'الطرح مع وجود الأصفار', 98],
      ['chapterReview', 'اختبار الفصل', 103],
      ['cumulative', 'اختبار تراكمي (3)', 104],
      ['cumulative', 'اختبر نفسك', 106],
    ],
  },
  {
    titleAr: 'الضرب (1)',
    topics: [
      ['preparation', 'التهيئة', 110],
      ['exploration', 'استكشف معنى الضرب', 111],
      ['lesson', 'الشبكات وعملية الضرب', 113],
      ['lesson', 'الضرب في ٢', 116],
      ['lesson', 'الضرب في ٤', 119],
      ['lesson', 'مهارة حل المسألة: تحديد المعطيات الزائدة والناقصة', 122],
      ['midterm', 'اختبار منتصف الفصل', 124],
      ['lesson', 'الضرب في ٥', 125],
      ['lesson', 'الضرب في ١٠', 128],
      ['exploration', 'استقصاء حل المسألة', 131],
      ['lesson', 'الضرب في الصفر وفي الواحد', 133],
      ['extension', 'تدريبات على حقائق الضرب', 136],
      ['chapterReview', 'اختبار الفصل', 137],
      ['cumulative', 'اختبار تراكمي (4)', 138],
    ],
  },
  {
    titleAr: 'الضرب (2)',
    topics: [
      ['preparation', 'التهيئة', 142],
      ['exploration', 'استكشف جداول الضرب', 143],
      ['lesson', 'الضرب في ٣', 145],
      ['lesson', 'الضرب في ٦', 147],
      ['extension', 'هيا بنا نلعب', 151],
      ['lesson', 'خطة حل المسألة: البحث عن نمط', 152],
      ['lesson', 'الضرب في ٧', 154],
      ['midterm', 'اختبار منتصف الفصل', 157],
      ['lesson', 'الضرب في ٨', 158],
      ['lesson', 'الضرب في ٩', 161],
      ['lesson', 'الجبر: الخاصية التجميعية للضرب', 164],
      ['extension', 'تدريبات على حقائق الضرب', 168],
      ['chapterReview', 'اختبار الفصل', 169],
      ['cumulative', 'اختبار تراكمي (5)', 170],
      ['cumulative', 'اختبر نفسك', 172],
    ],
  },
] as const;
const expectedSaudiG3PrimaryMathContents = primaryMathG3Contents.flatMap((chapter, chapterIndex) =>
  chapter.topics.map(([kind, title, page]) => [
    chapterIndex + 1,
    chapter.titleAr,
    title,
    page,
    kind,
  ])
);
const saudiGrade3PrimaryMath = getCurriculumForSubject(
  'PRIMARY_MATH', 'G3', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G3_PRIMARY_MATH_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-math-part1.pdf' &&
    SAUDI_G3_PRIMARY_MATH_UNIT_COUNT === primaryMathG3Contents.length &&
    SAUDI_G3_PRIMARY_MATH_TOPIC_COUNT === expectedSaudiG3PrimaryMathContents.length &&
    SAUDI_G3_PRIMARY_MATH_CURRICULUM.length === primaryMathG3Contents.length &&
    saudiGrade3PrimaryMath.length === primaryMathG3Contents.length &&
    JSON.stringify(SAUDI_G3_PRIMARY_MATH_TABLE_OF_CONTENTS.map(({ unitNumber, unitTitleAr, titleAr, page, kind }) => [
      unitNumber,
      unitTitleAr,
      titleAr,
      page,
      kind,
    ])) === JSON.stringify(expectedSaudiG3PrimaryMathContents),
  'Saudi Grade 3 Mathematics records the official Part One textbook and all five indexed chapters'
);
assert(
  SAUDI_G3_PRIMARY_MATH_CURRICULUM.every((lecture, chapterIndex) => {
    const chapter = primaryMathG3Contents[chapterIndex];
    return lecture.id === `saudi-g3-primary-math-1448-${chapterIndex + 1}` &&
      lecture.order === chapterIndex + 1 &&
      lecture.titleAr === `الفصل ${['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس'][chapterIndex]}: ${chapter.titleAr}` &&
      lecture.gradeLevel === 'G3' &&
      lecture.subject === 'PRIMARY_MATH' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.length === chapter.topics.length &&
      lecture.sections?.[0].diagram?.diagramType === 'primary_math_g3_unit' &&
      lecture.sections?.[0].diagram?.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.sections?.[0].diagram?.visualSteps?.length === 4 &&
      lecture.summaryAr?.includes('فهرسي الكتاب (PDF ص 6–7)') &&
      lecture.descriptionAr?.includes('بيانات النشر الداخلية (PDF ص 2)') &&
      lecture.descriptionAr?.includes('1446هـ') &&
      lecture.sections?.every((section, topicIndex) =>
        section.titleAr === chapter.topics[topicIndex][1] &&
        section.contentAr.includes(`مرجع الفهرس: ص ${chapter.topics[topicIndex][2]}.`)
      ) &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 3 &&
      lecture.assessment.questions[0].correctIndex === 0;
  }) &&
    saudiGrade3PrimaryMath.map((lecture) => lecture.id).join('|') ===
      SAUDI_G3_PRIMARY_MATH_CURRICULUM.map((lecture) => lecture.id).join('|'),
  'Saudi Grade 3 Mathematics lessons, original chapter illustrations, contents pages, and assessments match the verified book'
);
const primaryMathG3Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
const primaryMathG3TextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G3', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  isSaudiPublicG3PrimaryMathAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG3PrimaryMathAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG3PrimaryMathAvailable('SA', 'G3', 'PRIVATE') &&
    !isSaudiPublicG3PrimaryMathAvailable('SA', 'G3', 'ISLAMIC') &&
    !isSaudiPublicG3PrimaryMathAvailable('EG', 'G3', 'PUBLIC') &&
    primaryMathG3Textbook.textbookName.includes('الفصول الخمسة') &&
    primaryMathG3Textbook.textbookName.includes('1448هـ/2026م') &&
    primaryMathG3Textbook.textbookName.includes('1446هـ') &&
    primaryMathG3Textbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    primaryMathG3TextbookEn.textbookName.includes('all five chapters') &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G3', 'ar', 'PUBLIC') ===
      'الرياضيات (الصف الثالث الحكومي — الجزء الأول)' &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G3', 'ar', 'PRIVATE').includes('غير متحقق'),
  'Saudi Grade 3 Mathematics is limited to the public route with verified Part One metadata'
);
const saudiGrade2PrimaryMath = getCurriculumForSubject(
  'PRIMARY_MATH', 'G2', 'SA', 'PUBLIC', 'GENERAL'
);
const primaryMathG2Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G2', 'GENERAL', 'ar', 'PUBLIC'
);
const primaryMathG2TextbookEn = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G2', 'GENERAL', 'en', 'PUBLIC'
);
assert(
  SAUDI_G2_PRIMARY_MATH_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-math.pdf' &&
    SAUDI_G2_PRIMARY_MATH_UNIT_COUNT === 6 &&
    SAUDI_G2_PRIMARY_MATH_TOPIC_COUNT === 84 &&
    SAUDI_G2_PRIMARY_MATH_CURRICULUM.length === 6 &&
    saudiGrade2PrimaryMath.length === 6 &&
    SAUDI_G2_PRIMARY_MATH_AXES_COMPARISON.length === 6 &&
    SAUDI_G2_PRIMARY_MATH_AXES_COMPARISON.every((ax) =>
      ax.platformAxisTitleAr !== ax.bookChapterTitleAr &&
      ax.comparisonRationaleAr.length > 20
    ),
  'Saudi Grade 2 Mathematics records the official textbook URL, 6 chapters, and descriptive platform axes distinct from book titles'
);
const expectedGrade2MathPages = [
  [9, 10, 13, 15, 17, 19, 21, 22, 23, 25, 27, 28, 30, 32, 34],
  [37, 38, 40, 42, 44, 46, 47, 48, 50, 52, 54, 56, 58],
  [61, 62, 64, 66, 68, 70, 71, 72, 74, 76, 78, 80],
  [83, 84, 86, 88, 90, 92, 93, 94, 96, 98, 99, 100, 102, 104, 106],
  [109, 110, 112, 114, 116, 118, 120, 121, 122, 124, 126, 128, 130, 132, 134],
  [137, 138, 140, 142, 144, 146, 148, 149, 150, 152, 154, 156, 158, 160]
];
assert(
  SAUDI_G2_PRIMARY_MATH_CURRICULUM.every((chapter, index) =>
    JSON.stringify(SAUDI_G2_PRIMARY_MATH_TABLE_OF_CONTENTS
      .filter((topic) => topic.unitNumber === index + 1)
      .map((topic) => topic.page)) === JSON.stringify(expectedGrade2MathPages[index]) &&
    chapter.sections?.[0]?.titleAr === (index === 0
      ? 'التهيئة التفاعلية: استرجاع العد ومقارنة المجموعات وقراءة الأعداد وترتيبها'
      : chapter.sections?.[0]?.titleAr) &&
    chapter.sections?.[0]?.contentAr.includes('تحت إشراف المعلم')
  ),
  'Saudi Grade 2 Mathematics represented topics and preparations follow the printed contents pages in sequence'
);
assert(
  SAUDI_G2_PRIMARY_MATH_CURRICULUM[0].sections?.[0]?.contentAr.includes('يطابق العدد المكتوب بالكلمات') &&
    SAUDI_G2_PRIMARY_MATH_CURRICULUM[0].sections?.[0]?.contentAr.includes('يرتب أعدادًا بسيطة') &&
    SAUDI_G2_PRIMARY_MATH_CURRICULUM[0].subtitleAr.includes('الرياضيات'),
  'The Grade 2 place-value preparation reflects the lesson activities without exposing source-page metadata'
);
assert(
  SAUDI_G2_PRIMARY_MATH_CURRICULUM.every((lecture, chapterIndex) => {
    return lecture.id === `saudi-g2-primary-math-1448-${chapterIndex + 1}` &&
      lecture.order === chapterIndex + 1 &&
      lecture.gradeLevel === 'G2' &&
      lecture.subject === 'PRIMARY_MATH' &&
      lecture.country === 'SA' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.sections?.length > 0 &&
      lecture.sections?.[0].diagram?.diagramType === 'primary_math_g2_unit' &&
      lecture.sections?.[0].diagram?.captionAr.includes('رسم تعليمي أصلي') &&
      lecture.sections?.[0].diagram?.captionAr.includes('تحت إشراف المعلم') &&
      lecture.descriptionAr?.includes('إرشادات السلامة والخامات الآمنة') &&
      lecture.descriptionAr?.includes('تحت إشراف المعلم') &&
      lecture.termAr === 'الفصل الدراسي الأول' &&
      lecture.sections?.every((section) =>
        section.contentAr.includes('خامات آمنة تحت إشراف المعلم') &&
        !section.contentAr.includes('مرجع الفهرس الرسمي')
      ) &&
      lecture.assessment.questions.length === 1 &&
      lecture.assessment.questions[0].optionsAr.length === 3 &&
      lecture.assessment.questions[0].correctIndex === 0;
  }) &&
    saudiGrade2PrimaryMath.map((lecture) => lecture.id).join('|') ===
      SAUDI_G2_PRIMARY_MATH_CURRICULUM.map((lecture) => lecture.id).join('|'),
  'Saudi Grade 2 Mathematics lectures include child-safe activities, teacher supervision, original diagrams, and matching chapters'
);
const studentFacingGrade2Math = SAUDI_G2_PRIMARY_MATH_CURRICULUM.map(sanitizeLectureForStudents);
assert(
  studentFacingGrade2Math.every((lecture) =>
    !JSON.stringify(lecture).match(/https?:\/\/|www\.|\bIEN\b|وزارة التعليم|المصدر المعتمد|المصدر الرسمي|مرجع الفهرس|عنوان الكتاب المدرسي|مقارنة المحور|مقارنة العنوان|textbook|official source|contents reference|(?:ص|p\.?)\s*\d+/i) &&
    !lecture.descriptionAr?.includes('1448هـ/2026م') &&
    !lecture.descriptionAr?.includes('1446هـ') &&
    lecture.sections?.every((section) =>
      !section.contentAr.includes('الكتاب المدرسي') &&
      !section.contentAr.includes('مقارنة العنوان') &&
      !section.contentEn.includes('textbook')
    )
  ),
  'All Grade 2 mathematics lessons hide source, authority, textbook-comparison, and page-reference metadata from student display'
);
assert(
  isSaudiPublicG2PrimaryMathAvailable('SA', 'G2', 'PUBLIC') &&
    !isSaudiPublicG2PrimaryMathAvailable('SA', 'G1', 'PUBLIC') &&
    !isSaudiPublicG2PrimaryMathAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG2PrimaryMathAvailable('SA', 'G2', 'PRIVATE') &&
    !isSaudiPublicG2PrimaryMathAvailable('SA', 'G2', 'ISLAMIC') &&
    !isSaudiPublicG2PrimaryMathAvailable('EG', 'G2', 'PUBLIC') &&
    primaryMathG2Textbook.textbookName.includes('الفصول') &&
    primaryMathG2Textbook.textbookName.includes('1448هـ/2026م') &&
    primaryMathG2Textbook.textbookName.includes('1446هـ') &&
    primaryMathG2Textbook.textbookName.includes('خامات آمنة تحت إشراف المعلم') &&
    primaryMathG2Textbook.semester === 'الفصل الدراسي الأول' &&
    primaryMathG2TextbookEn.textbookName.includes('six chapter headings') &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G2', 'ar', 'PUBLIC') ===
      'الرياضيات (الصف الثاني الحكومي — محاور وصفية موثقة)' &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G2', 'ar', 'PRIVATE').includes('غير متحقق') &&
    getCurriculumForSubject('PRIMARY_MATH', 'G2', 'SA', 'PRIVATE', 'GENERAL').length === 0,
  'Saudi Grade 2 Mathematics is strictly restricted to public education and blocks unverified tracks'
);
const primaryMathG4Contents = [
  {
    titleAr: 'القيمة المنزلية',
    topics: [
      { titleAr: 'التهيئة', page: 12 },
      { titleAr: 'القيمة المنزلية ضمن مئات الألوف', page: 13 },
      { titleAr: 'إلى أي مدى يكون المليون كبيرًا؟', page: 16 },
      { titleAr: 'القيمة المنزلية ضمن الملايين', page: 18 },
      { titleAr: 'مهارة حل المسألة: استعمال الخطوات الأربع', page: 22 },
      { titleAr: 'المقارنة بين الأعداد', page: 24 },
      { titleAr: 'اختبار منتصف الفصل', page: 28 },
      { titleAr: 'ترتيب الأعداد', page: 29 },
      { titleAr: 'هيا بنا نلعب', page: 32 },
      { titleAr: 'تقريب الأعداد', page: 33 },
      { titleAr: 'استقصاء حل المسألة: اختيار الخطة المناسبة', page: 37 },
      { titleAr: 'اختبار الفصل', page: 39 },
      { titleAr: 'الاختبار التراكمي (1)', page: 40, pageEnd: 41 },
      { titleAr: 'اختبر نفسك', page: 42, pageEnd: 43 }
    ]
  },
  {
    titleAr: 'الجمع والطرح',
    topics: [
      { titleAr: 'التهيئة', page: 46 },
      { titleAr: 'الجبر: خصائص الجمع وقواعد الطرح', page: 47 },
      { titleAr: 'تقدير المجموع والفرق', page: 50 },
      { titleAr: 'مهارة حل المسألة: التقدير أو الإجابة الدقيقة', page: 54 },
      { titleAr: 'الجمع', page: 56 },
      { titleAr: 'اختبار منتصف الفصل', page: 60 },
      { titleAr: 'استكشاف الطرح', page: 61 },
      { titleAr: 'الطرح', page: 63 },
      { titleAr: 'هيا بنا نلعب', page: 66 },
      { titleAr: 'الطرح مع وجود الأصفار', page: 67 },
      { titleAr: 'اختبار الفصل', page: 71 },
      { titleAr: 'الاختبار التراكمي (2)', page: 72, pageEnd: 73 },
      { titleAr: 'اختبر نفسك', page: 74, pageEnd: 75 }
    ]
  },
  {
    titleAr: 'تنظيم البيانات وعرضها وتفسيرها',
    topics: [
      { titleAr: 'التهيئة', page: 78 },
      { titleAr: 'جمع البيانات وتنظيمها', page: 79 },
      { titleAr: 'خطة حل المسألة: إنشاء جدول', page: 82 },
      { titleAr: 'التمثيل بالأعمدة', page: 84 },
      { titleAr: 'اختبار منتصف الفصل', page: 86 },
      { titleAr: 'التمثيل بالخطوط', page: 87 },
      { titleAr: 'التمثيل بالقطاعات الدائرية', page: 90 },
      { titleAr: 'الاحتمال', page: 93 },
      { titleAr: 'اختبار الفصل', page: 97 },
      { titleAr: 'الاختبار التراكمي (3)', page: 98, pageEnd: 99 },
      { titleAr: 'اختبر نفسك', page: 100, pageEnd: 101 }
    ]
  },
  {
    titleAr: 'الأنماط والجبر',
    topics: [
      { titleAr: 'التهيئة', page: 104 },
      { titleAr: 'استكشاف تمثيل العبارات العددية', page: 105 },
      { titleAr: 'العبارات والجمل العددية', page: 107 },
      { titleAr: 'تمثيل الجمل العددية وكتابتها', page: 110 },
      { titleAr: 'خطة حل المسألة: الاستدلال المنطقي', page: 114 },
      { titleAr: 'اكتشاف قاعدة من جدول', page: 116 },
      { titleAr: 'جداول الدوال: جداول الجمع والطرح', page: 120 },
      { titleAr: 'اختبار منتصف الفصل', page: 124 },
      { titleAr: 'استقصاء حل المسألة: اختيار الخطة المناسبة', page: 125 },
      { titleAr: 'جداول الدوال: جداول الضرب والقسمة', page: 127 },
      { titleAr: 'اختبار الفصل', page: 131 },
      { titleAr: 'الاختبار التراكمي (4)', page: 132, pageEnd: 133 },
      { titleAr: 'اختبر نفسك', page: 134, pageEnd: 135 }
    ]
  },
  {
    titleAr: 'الضرب في عدد من رقم واحد',
    topics: [
      { titleAr: 'التهيئة', page: 138 },
      { titleAr: 'القواسم والمضاعفات', page: 139 },
      { titleAr: 'الضرب في مضاعفات 10 و100 و1000', page: 142 },
      { titleAr: 'مهارة حل المسألة: تقدير معقولية الإجابة', page: 145 },
      { titleAr: 'تقدير نواتج الضرب', page: 147 },
      { titleAr: 'ضرب عدد من رقمين في عدد من رقم واحد دون إعادة التجميع', page: 151 },
      { titleAr: 'اختبار منتصف الفصل', page: 154 },
      { titleAr: 'استكشاف ضرب عدد من رقمين في عدد من رقم واحد مع إعادة التجميع', page: 155 },
      { titleAr: 'ضرب عدد من رقمين في عدد من رقم واحد مع إعادة التجميع', page: 157 },
      { titleAr: 'استقصاء حل المسألة: اختيار الخطة المناسبة', page: 161 },
      { titleAr: 'ضرب عدد من ثلاثة أرقام في عدد من رقم واحد', page: 163 },
      { titleAr: 'اختبار الفصل', page: 168 },
      { titleAr: 'الاختبار التراكمي (5)', page: 170, pageEnd: 171 }
    ]
  },
  {
    titleAr: 'الضرب في عدد من رقمين',
    topics: [
      { titleAr: 'التهيئة', page: 174 },
      { titleAr: 'الضرب في مضاعفات العشرة', page: 175 },
      { titleAr: 'تقدير نواتج الضرب', page: 179 },
      { titleAr: 'خطة حل المسألة: تمثيل المسألة', page: 183 },
      { titleAr: 'اختبار منتصف الفصل', page: 185 },
      { titleAr: 'استكشاف ضرب عدد من رقمين في عدد من رقمين', page: 186 },
      { titleAr: 'ضرب عدد من رقمين في عدد من رقمين', page: 188 },
      { titleAr: 'ضرب عدد من ثلاثة أرقام في عدد من رقمين', page: 191 },
      { titleAr: 'اختبار الفصل', page: 195 },
      { titleAr: 'الاختبار التراكمي (6)', page: 196, pageEnd: 197 },
      { titleAr: 'اختبر نفسك', page: 198, pageEnd: 199 }
    ]
  }
] as const;
const expectedSaudiG4PrimaryMathContents = primaryMathG4Contents.flatMap((chapter, chapterIndex) =>
  chapter.topics.map((topic) => [
    chapterIndex + 1,
    chapter.titleAr,
    topic.titleAr,
    topic.page,
    topic.pageEnd ?? null
  ])
);
const saudiGrade4PrimaryMath = getCurriculumForSubject(
  'PRIMARY_MATH', 'G4', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G4_PRIMARY_MATH_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-math.pdf' &&
    SAUDI_G4_PRIMARY_MATH_UNIT_COUNT === primaryMathG4Contents.length &&
    SAUDI_G4_PRIMARY_MATH_TOPIC_COUNT === expectedSaudiG4PrimaryMathContents.length &&
    JSON.stringify(SAUDI_G4_PRIMARY_MATH_TABLE_OF_CONTENTS.map(({ unitNumber, unitTitleAr, titleAr, page, pageEnd }) => [
      unitNumber,
      unitTitleAr,
      titleAr,
      page,
      pageEnd ?? null
    ])) === JSON.stringify(expectedSaudiG4PrimaryMathContents),
  'Saudi Grade 4 Mathematics maps all six printed chapters and every indexed title and page'
);
const primaryMathG4ChapterNumbersAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'];
assert(
  SAUDI_G4_PRIMARY_MATH_CURRICULUM.length === primaryMathG4Contents.length &&
    SAUDI_G4_PRIMARY_MATH_CURRICULUM.every((lecture, chapterIndex) => {
      const chapter = primaryMathG4Contents[chapterIndex];
      return lecture.id === `saudi-g4-primary-math-1448-${chapterIndex + 1}` &&
        lecture.order === chapterIndex + 1 &&
        lecture.titleAr === `الفصل ${primaryMathG4ChapterNumbersAr[chapterIndex]}: ${chapter.titleAr}` &&
        lecture.gradeLevel === 'G4' &&
        lecture.subject === 'PRIMARY_MATH' &&
        lecture.country === 'SA' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.sections?.length === chapter.topics.length &&
        lecture.sections?.[0].diagram?.diagramType === 'primary_math_unit' &&
        lecture.sections?.[0].diagram?.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
        lecture.summaryAr?.includes('صفحات PDF 1 و6–7') &&
        lecture.descriptionAr?.includes('سجل النشر في الصفحة الثانية 1446هـ') &&
        chapter.topics.every((topic) =>
          lecture.sections?.some((section) =>
            section.titleAr === topic.titleAr &&
            section.contentAr.includes(`ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}`)
          )
        ) &&
        lecture.assessment.questions.length === 1 &&
        lecture.assessment.questions[0].optionsAr.length === 3 &&
        lecture.assessment.questions[0].correctIndex === 0;
    }) &&
    saudiGrade4PrimaryMath.map((lecture) => lecture.id).join('|') ===
      SAUDI_G4_PRIMARY_MATH_CURRICULUM.map((lecture) => lecture.id).join('|'),
  'Saudi Grade 4 Mathematics lessons, page references, original diagrams, and assessments match the verified contents'
);
assert(
  isSaudiPublicG4PrimaryMathAvailable('SA', 'G4', 'PUBLIC') &&
    !isSaudiPublicG4PrimaryMathAvailable('SA', 'G3', 'PUBLIC') &&
    !isSaudiPublicG4PrimaryMathAvailable('SA', 'G5', 'PUBLIC') &&
    !isSaudiPublicG4PrimaryMathAvailable('SA', 'G4', 'PRIVATE') &&
    !isSaudiPublicG4PrimaryMathAvailable('SA', 'G4', 'ISLAMIC') &&
    !isSaudiPublicG4PrimaryMathAvailable('EG', 'G4', 'PUBLIC') &&
    !getCurriculumForSubject('PRIMARY_MATH', 'G4', 'SA', 'PRIVATE', 'GENERAL')
      .some((lecture) => lecture.id.startsWith('saudi-g4-primary-math-1448-')) &&
    !getCurriculumForSubject('PRIMARY_MATH', 'G4', 'EG', 'PUBLIC', 'GENERAL')
      .some((lecture) => lecture.id.startsWith('saudi-g4-primary-math-1448-')),
  'Saudi Grade 4 Mathematics uses the verified textbook only for public Saudi profiles'
);
const primaryMathG4Textbook = getNationalTextbookInfo(
  'SA', 'PRIMARY_MATH', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  primaryMathG4Textbook.textbookName.includes('الصف الرابع الابتدائي الحكومي') &&
    primaryMathG4Textbook.textbookName.includes('1448هـ/2026م') &&
    primaryMathG4Textbook.textbookName.includes('1446هـ') &&
    primaryMathG4Textbook.textbookName.includes('ص 6–7') &&
    primaryMathG4Textbook.semester === 'الفصل الدراسي الأول — الجزء الأول' &&
    getNationalSubjectLabel('PRIMARY_MATH', 'SA', 'G4', 'ar', 'PUBLIC') ===
      'الرياضيات (الصف الرابع الحكومي — الجزء الأول)',
  'Saudi public Grade 4 Mathematics metadata identifies the printed edition and discloses its discrepancy'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_MATH_G4_GENERAL',
  JSON.stringify([{
    ...saudiGrade4PrimaryMath[0],
    id: 'stale-saudi-grade4-math-content',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_MATH_G4_GENERAL',
  JSON.stringify([{
    ...saudiGrade4PrimaryMath[0],
    id: 'shared-saudi-grade4-math-content',
    titleAr: 'محتوى رياضيات مشترك من مقرر آخر',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade4PrimaryMath = loadSubjectLectures('PRIMARY_MATH', 'SA', 'G4', 'PUBLIC');
assert(
  isolatedSaudiGrade4PrimaryMath.length === SAUDI_G4_PRIMARY_MATH_CURRICULUM.length &&
    isolatedSaudiGrade4PrimaryMath.map((lecture) => lecture.id).join('|') ===
      SAUDI_G4_PRIMARY_MATH_CURRICULUM.map((lecture) => lecture.id).join('|') &&
    !isolatedSaudiGrade4PrimaryMath.some((lecture) =>
      lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مشترك') || lecture.isCompleted
    ),
  'Verified Saudi Grade 4 Mathematics ignores stale and shared cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_MATH_G3_GENERAL',
  JSON.stringify([{
    ...saudiGrade3PrimaryMath[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade3PrimaryMath[0],
    id: 'ai-gen-stale-primary-math-g3',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_MATH_G3_GENERAL',
  JSON.stringify([{
    ...saudiGrade3PrimaryMath[0],
    educationTrack: 'GENERAL',
    id: 'shared-primary-math-g3-content',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade3PrimaryMath = loadSubjectLectures(
  'PRIMARY_MATH', 'SA', 'G3', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade3PrimaryMath.length === primaryMathG3Contents.length &&
    isolatedSaudiGrade3PrimaryMath.map((lecture) => lecture.id).join('|') ===
      saudiGrade3PrimaryMath.map((lecture) => lecture.id).join('|') &&
    !isolatedSaudiGrade3PrimaryMath.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 3 Mathematics ignores stale, shared, and generated cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_MATH_G2_GENERAL',
  JSON.stringify([{
    ...saudiGrade2PrimaryMath[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان مخزن قديم غير معتمد',
    isCompleted: true
  }, {
    ...saudiGrade2PrimaryMath[0],
    id: 'ai-gen-stale-primary-math-g2',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد عشوائي قديم'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_MATH_G2_GENERAL',
  JSON.stringify([{
    id: 'shared-primary-math-g2-content',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
const isolatedSaudiGrade2PrimaryMath = loadSubjectLectures(
  'PRIMARY_MATH', 'SA', 'G2', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade2PrimaryMath.length === 6 &&
    isolatedSaudiGrade2PrimaryMath.map((lecture) => lecture.id).join('|') ===
      saudiGrade2PrimaryMath.map((lecture) => lecture.id).join('|') &&
    !isolatedSaudiGrade2PrimaryMath.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.titleAr.includes('غير معتمد') || lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 2 Mathematics ignores stale, shared, and generated cached lessons'
);
scienceIsolationStorage.set(
  'TEACHER_AI_LECTURES_V5_SA_PUBLIC_PRIMARY_MATH_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5PrimaryMath[0],
    educationTrack: 'GENERAL',
    titleAr: 'عنوان قديم غير موثق',
    isCompleted: true
  }, {
    ...saudiGrade5PrimaryMath[0],
    id: 'ai-gen-stale-primary-math-g5',
    educationTrack: 'GENERAL',
    titleAr: 'درس مولد غير معتمد'
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_SHARED_LECS_SA_PUBLIC_PRIMARY_MATH_G5_GENERAL',
  JSON.stringify([{
    ...saudiGrade5PrimaryMath[0],
    educationTrack: 'GENERAL',
    id: 'shared-primary-math-g5-content',
    titleAr: 'محتوى مشترك غير معتمد',
    isSharedCommunity: true
  }])
);
scienceIsolationStorage.set(
  'TEACHER_AI_CLOUD_SHARED_LECTURES',
  JSON.stringify([{
    ...saudiGrade5PrimaryMath[0],
    educationTrack: 'GENERAL',
    id: 'cloud-primary-math-g5-content',
    titleAr: 'محتوى سحابي غير معتمد'
  }])
);
const isolatedSaudiGrade5PrimaryMath = loadSubjectLectures(
  'PRIMARY_MATH', 'SA', 'G5', 'PUBLIC', 'GENERAL'
);
assert(
  isolatedSaudiGrade5PrimaryMath.length === primaryMathG5Contents.length &&
    isolatedSaudiGrade5PrimaryMath.map((lecture) => lecture.id).join('|') ===
      saudiGrade5PrimaryMath.map((lecture) => lecture.id).join('|') &&
    isolatedSaudiGrade5PrimaryMath[0].titleAr === primaryMathG5Contents[0].title &&
    !isolatedSaudiGrade5PrimaryMath.some((lecture) =>
      lecture.id.includes('stale') || lecture.id.includes('shared') ||
      lecture.id.includes('cloud') || lecture.titleAr.includes('غير معتمد') ||
      lecture.titleAr.includes('قديم')
    ),
  'Verified Saudi Grade 5 Mathematics ignores stale, shared, cloud, and generated cached lessons'
);
const saudiPrivateMetadata = getNationalTextbookInfo('SA', 'PHYSICS', 'G10', 'GENERAL', 'ar', 'PRIVATE');
const saudiIslamicMetadata = getNationalTextbookInfo('SA', 'PHYSICS', 'G10', 'GENERAL', 'ar', 'ISLAMIC');
assert(
  saudiPrivateMetadata.textbookName.includes('غير مطابق لكتاب حكومي') &&
    saudiIslamicMetadata.textbookName.includes('غير مطابق لكتاب التعليم الحكومي'),
  'Non-public Saudi textbook labels do not claim to be public-school textbooks'
);
const socialStudiesTextbookInfo = getNationalTextbookInfo(
  'SA', 'SAUDI_SOCIAL_STUDIES', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
const grade5SocialStudiesTextbookInfo = getNationalTextbookInfo(
  'SA', 'SAUDI_SOCIAL_STUDIES', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
const grade4SocialStudiesTextbookInfo = getNationalTextbookInfo(
  'SA', 'SAUDI_SOCIAL_STUDIES', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
const unverifiedSocialStudiesTextbookInfo = getNationalTextbookInfo(
  'SA', 'SAUDI_SOCIAL_STUDIES', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
assert(
  socialStudiesTextbookInfo.textbookName.includes('1448هـ/2026م') &&
    socialStudiesTextbookInfo.textbookName.includes('ص 9 و109') &&
    socialStudiesTextbookInfo.textbookName.includes('1446هـ') &&
    socialStudiesTextbookInfo.ministry.includes('فهرسي الجزأين') &&
    grade5SocialStudiesTextbookInfo.textbookName.includes('1448هـ/2026م') &&
    grade5SocialStudiesTextbookInfo.textbookName.includes('ص 9 و103') &&
    grade5SocialStudiesTextbookInfo.textbookName.includes('1446هـ') &&
    grade5SocialStudiesTextbookInfo.semester.includes('الجزآن الأول والثاني') &&
    grade4SocialStudiesTextbookInfo.textbookName.includes('9 وحدات و34 درسًا') &&
    grade4SocialStudiesTextbookInfo.textbookName.includes('ص 9 و111') &&
    grade4SocialStudiesTextbookInfo.semester.includes('الجزآن الأول والثاني') &&
    getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', 'SA', 'G4', 'ar', 'PUBLIC', 'GENERAL') ===
      'الدراسات الاجتماعية السعودية (الصف الرابع الحكومي — فهرس موثق)' &&
    getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', 'SA', 'G5', 'ar', 'PUBLIC', 'GENERAL') ===
      'الدراسات الاجتماعية السعودية (الصف الخامس الحكومي — فهرس موثق)' &&
    unverifiedSocialStudiesTextbookInfo.textbookName.includes('غير متاحة') &&
    unverifiedSocialStudiesTextbookInfo.ministry.includes('لم يتم التحقق'),
  'Social studies metadata verifies Grades 4–6 contents, discloses the edition discrepancy, and labels other grades unavailable'
);
assert(
  !['SD', 'EG', 'INTL'].some((country) =>
    ['G4', 'G5', 'G6'].some((grade) =>
      getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, country, 'PUBLIC', 'GENERAL')
        .some((lecture) => lecture.id.startsWith('sa-social-'))
    )
  ) &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      ['G4', 'G5', 'G6'].every((grade) =>
        getCurriculumForSubject(
          'SAUDI_SOCIAL_STUDIES',
          grade,
          'SA',
          educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
          'GENERAL'
        ).length === 0
      )
    ) &&
    ['G4', 'G5', 'G6'].every((grade) =>
      getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, 'SA', 'PUBLIC', 'CS_ENGINEERING').length === 0
    ) &&
    ['G1', 'G2', 'G3', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ) &&
    getCurriculumForSubject('GEOGRAPHY', 'G6', 'SA', 'PUBLIC')
      .every((lecture) => !lecture.id.startsWith('sa-social-')),
  'Saudi social studies is isolated to verified public Grades 4–6, countries, education types, and tracks'
);
const nonGeneralSaudiTracks = [
  'CS_ENGINEERING', 'HEALTH_LIFE', 'BUSINESS',
  'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO'
] as const;
assert(
  nonGeneralSaudiTracks.every((track) =>
    getCurriculumForSubject('SAUDI_SOCIAL_STUDIES', 'G10', 'SA', 'PUBLIC', track).length === 0 &&
      getCurriculumForSubject('GEOGRAPHY', 'G10', 'SA', 'PUBLIC', track).length === 0 &&
      getCurriculumForSubject('HISTORY', 'G10', 'SA', 'PUBLIC', track).length === 0
  ) &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject('GEOGRAPHY', 'G10', 'SA', educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL', 'GENERAL').length === 0 &&
        getCurriculumForSubject('HISTORY', 'G10', 'SA', educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL', 'GENERAL').length === 0
    ) &&
    getCurriculumForSubject('GEOGRAPHY', 'G10', 'INTL', 'INTERNATIONAL', 'GENERAL').length === 0 &&
    getCurriculumForSubject('HISTORY', 'G10', 'INTL', 'INTERNATIONAL', 'GENERAL').length === 0,
  'Saudi government social studies, geography, and history do not route into specialized tracks or other education types'
);
const saudiGrade11History = getCurriculumForSubject('HISTORY', 'G11', 'SA', 'PUBLIC', 'GENERAL');
const saudiGrade11HistoryInfo = getNationalTextbookInfo(
  'SA', 'HISTORY', 'G11', 'GENERAL', 'ar', 'PUBLIC'
);
const expectedHistoryPages = [
  12, 16, 20, 23, 25, 29, 42, 45, 48, 51, 53, 56, 59,
  70, 73, 75, 78, 82, 85, 87, 91, 94, 96, 98,
  106, 109, 112, 115, 122, 127, 135, 137, 144, 151, 156, 159, 163
];
assert(
  saudiGrade11History.length === SAUDI_G11_HISTORY_LESSON_COUNT + SAUDI_G11_HISTORY_UNIT_REVIEW_COUNT &&
    SAUDI_G11_HISTORY_LECTURES.length === saudiGrade11History.length &&
    SAUDI_G11_HISTORY_TEXTBOOK_LESSONS.length === SAUDI_G11_HISTORY_LESSON_COUNT &&
    SAUDI_G11_HISTORY_TEXTBOOK_LESSONS.every((lesson, index) =>
      lesson.page === expectedHistoryPages[index] &&
      saudiGrade11History.some((lecture) =>
        lecture.lessonNumberAr === `الدرس ${index + 1} – ص ${lesson.page}` &&
        lecture.titleAr.endsWith(lesson.titleAr)
      )
    ) &&
    saudiGrade11History.filter((lecture) => lecture.id.includes('-unit-')).length ===
      SAUDI_G11_HISTORY_UNIT_REVIEW_COUNT &&
    saudiGrade11History.every((lecture) =>
      lecture.country === 'SA' &&
      lecture.subject === 'HISTORY' &&
      lecture.gradeLevel === 'G11' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.sections?.[0]?.diagram?.diagramType === 'social_studies' &&
      lecture.assessment.questions.length === 1 &&
      lecture.summaryAr?.includes('1448هـ/2026م') &&
      lecture.summaryAr?.includes('من إعداد المنصة')
    ) &&
    saudiGrade11HistoryInfo.textbookName.includes('1448هـ/2026م') &&
      saudiGrade11HistoryInfo.textbookName.includes('مطابقة للفهرس'),
    'Saudi Grade 11 history lessons, page references, unit reviews, visuals, and source notes match the supplied 1448 textbook contents'
);
const saudiGrade11HealthScience = getCurriculumForSubject(
    'HEALTH_SCIENCE',
    'G11',
    'SA',
    'PUBLIC',
    'HEALTH_LIFE'
);
const saudiGrade11HealthScienceInfo = getNationalTextbookInfo(
    'SA',
    'HEALTH_SCIENCE',
    'G11',
    'HEALTH_LIFE',
    'ar',
    'PUBLIC'
);
const saudiHealthScienceLessons = SAUDI_G11_HEALTH_SCIENCE_LECTURES.filter((lecture) =>
    lecture.id.includes('-lesson-')
);
assert(
    isSaudiPublicG11HealthScienceAvailable('SA', 'G11', 'PUBLIC', 'HEALTH_LIFE') &&
      SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_URL ===
        'https://iencontent.ien.edu.sa/books/1448-GE-CBM-HL-TRC2-SM1-APHS1.1.pdf' &&
      SAUDI_G11_HEALTH_SCIENCE_CHAPTER_COUNT === 14 &&
      SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_LESSONS.length === SAUDI_G11_HEALTH_SCIENCE_LESSON_COUNT &&
      SAUDI_G11_HEALTH_SCIENCE_LESSON_COUNT === 75 &&
      saudiGrade11HealthScience.length ===
        SAUDI_G11_HEALTH_SCIENCE_LESSON_COUNT + SAUDI_G11_HEALTH_SCIENCE_CHAPTER_COUNT &&
      SAUDI_G11_HEALTH_SCIENCE_LECTURES.length === saudiGrade11HealthScience.length &&
      SAUDI_G11_HEALTH_SCIENCE_TEXTBOOK_LESSONS.every((lesson, index) => {
        const lecture = saudiHealthScienceLessons[index];
        return lecture &&
          lecture.lessonNumberAr === `الدرس ${lesson.chapterNumber}.${lesson.lessonNumber} – ص ${lesson.page}` &&
          lecture.titleAr.endsWith(lesson.titleAr) &&
          lecture.country === 'SA' &&
          lecture.subject === 'HEALTH_SCIENCE' &&
          lecture.gradeLevel === 'G11' &&
          lecture.educationType === 'PUBLIC' &&
          lecture.educationTrack === 'HEALTH_LIFE' &&
          lecture.sections?.[0]?.diagram?.diagramType === 'health_science' &&
          lecture.assessment.questions.length === 1 &&
          lecture.summaryAr?.includes('1448هـ/2026م') &&
          lecture.summaryAr?.includes('من إعداد المنصة');
      }) &&
      SAUDI_G11_HEALTH_SCIENCE_LECTURES.filter((lecture) => lecture.id.includes('-review')).length ===
        SAUDI_G11_HEALTH_SCIENCE_CHAPTER_COUNT &&
      saudiGrade11HealthScienceInfo.textbookName.includes('1448هـ/2026م') &&
      saudiGrade11HealthScienceInfo.textbookName.includes('مطابقة للفهرس'),
    'Saudi Grade 11 health-science lesson count, contents, pages, reviews, visuals, safety notes, and source metadata match the supplied 1448 textbook'
);
assert(
    ['GENERAL', 'CS_ENGINEERING', 'BUSINESS', 'SHARIA_HUMANITIES', 'SCIENCE_MATH', 'SCIENCE_BIO']
      .every((track) =>
        !isSaudiPublicG11HealthScienceAvailable('SA', 'G11', 'PUBLIC', track as EducationTrack) &&
        getCurriculumForSubject('HEALTH_SCIENCE', 'G11', 'SA', 'PUBLIC', track as EducationTrack).length === 0
      ) &&
      !isSaudiPublicG11HealthScienceAvailable('SA', 'G11', 'PRIVATE', 'HEALTH_LIFE') &&
      !isSaudiPublicG11HealthScienceAvailable('SA', 'G11', 'INTERNATIONAL', 'HEALTH_LIFE') &&
      !isSaudiPublicG11HealthScienceAvailable('EG', 'G11', 'PUBLIC', 'HEALTH_LIFE') &&
      ['G10', 'G12'].every((grade) =>
        getCurriculumForSubject('HEALTH_SCIENCE', grade, 'SA', 'PUBLIC', 'HEALTH_LIFE').length === 0
      ) &&
      ['EG', 'SD', 'INTL'].every((country) =>
        getCurriculumForSubject('HEALTH_SCIENCE', 'G11', country, 'PUBLIC', 'HEALTH_LIFE').length === 0
      ),
    'Health science is available only to Saudi public Grade 11 students in the Health & Life pathway'
);
assert(
    getCurriculumForSubject('HISTORY', 'G10', 'SA', 'PUBLIC', 'GENERAL')
      .some((lecture) => lecture.id === 'sa-g10-hist-1') &&
    nonGeneralSaudiTracks.every((track) =>
      getCurriculumForSubject('HISTORY', 'G11', 'SA', 'PUBLIC', track).length === 0
    ) &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'HISTORY',
        'G11',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    ['EG', 'SD', 'INTL'].every((country) =>
      getCurriculumForSubject('HISTORY', 'G11', country, 'PUBLIC', 'GENERAL').length === 0
    ),
  'Saudi Grade 11 history is isolated from the Grade 10, other-track, non-public, and foreign curricula'
);

console.log('\n--- 10. Verifying Saudi Grade 6 Islamic Studies contents and route isolation ---');
const saudiGrade6IslamicStudies = getCurriculumForSubject(
  'ISLAMIC_STUDIES', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
const saudiGrade5IslamicStudies = getCurriculumForSubject(
  'ISLAMIC_STUDIES', 'G5', 'SA', 'PUBLIC', 'GENERAL'
);
const saudiGrade3IslamicStudies = loadSubjectLectures(
  'ISLAMIC_STUDIES', 'SA', 'G3', 'PUBLIC', 'GENERAL'
);
const verifiedSaudiGrade3IslamicStudiesTextbook = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G3', 'GENERAL', 'ar', 'PUBLIC'
);
const verifiedSaudiGrade3IslamicStudiesTextbookEn = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G3', 'GENERAL', 'en', 'PUBLIC'
);
const saudiGrade2IslamicStudies = getCurriculumForSubject(
  'ISLAMIC_STUDIES', 'G2', 'SA', 'PUBLIC', 'GENERAL'
);
const verifiedSaudiGrade2IslamicStudiesTextbook = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G2', 'GENERAL', 'ar', 'PUBLIC'
);
const verifiedSaudiGrade2IslamicStudiesTextbookEn = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G2', 'GENERAL', 'en', 'PUBLIC'
);
const expectedGrade2IslamicStudyContents = [
  'QURAN|مقرر القرآن الكريم|خطة مقرر القرآن الكريم|11',
  'TAWHEED|أسماء الله وصفاته|الله الواحد|14',
  'TAWHEED|أسماء الله وصفاته|الله الرحمن الرحيم|16',
  'TAWHEED|أسماء الله وصفاته|الله السميع البصير|18',
  'TAWHEED|أسماء الله وصفاته|لماذا خلقنا الله؟|22',
  'TAWHEED|العبادة وما يضادها من الشرك|العبادة|24',
  'TAWHEED|العبادة وما يضادها من الشرك|عبادة الله وحده|28',
  'TAWHEED|العبادة وما يضادها من الشرك|عبادة غير الله شرك|30',
  'FIQH|التعامل مع الناس|الآداب (1)|34',
  'FIQH|التعامل مع الناس|الآداب (2)|36',
  'FIQH|التعامل مع الناس|الآداب (3)|42',
  'FIQH|الأذكار والأدعية|أذكار الصباح والمساء|46',
  'FIQH|الأذكار والأدعية|أذكار العطاس والنوم|50',
  'FIQH|آداب النظافة|نظافة البدن|54',
  'FIQH|آداب النظافة|نظافة الملابس والمكان|60',
  'FIQH|آداب الأكل والشرب|آداب الأكل والشرب (1)|66',
  'FIQH|آداب الأكل والشرب|آداب الأكل والشرب (2)|68',
  'FIQH|المحافظة على الممتلكات|المحافظة على الممتلكات الخاصة وحقوق الآخرين|72',
  'FIQH|المحافظة على الممتلكات|المحافظة على البيئة|76',
  'FIQH|المحافظة على الممتلكات|المحافظة على الممتلكات العامة|82',
];
assert(
  SAUDI_G2_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-ISLM.pdf' &&
    SAUDI_G2_ISLAMIC_STUDIES_SECTION_COUNT === 3 &&
    SAUDI_G2_ISLAMIC_STUDIES_LESSON_COUNT === 19 &&
    SAUDI_G2_ISLAMIC_STUDIES_TABLE_OF_CONTENTS.map(({ area, unitTitleAr, titleAr, page }) =>
      `${area}|${unitTitleAr}|${titleAr}|${page}`
    ).join('\n') === expectedGrade2IslamicStudyContents.join('\n'),
  'Saudi Grade 2 Islamic Studies maps its Quran plan and all 19 Tawheed and Fiqh topics to the printed contents pages'
);
assert(
  SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM.length === 3 &&
    saudiGrade2IslamicStudies.length === 3 &&
    saudiGrade2IslamicStudies.every((lecture, index) => {
      const expectedArea = ['QURAN', 'TAWHEED', 'FIQH'][index];
      const expectedTopics = expectedGrade2IslamicStudyContents
        .filter((entry) => entry.startsWith(`${expectedArea}|`))
        .map((entry) => entry.split('|'));
      const expectedTitles = expectedTopics.map((entry) => entry[2]);
      const expectedPages = expectedTopics.map((entry) => entry[3]);
      return lecture.id === `saudi-g2-islamic-studies-1448-${index + 1}` &&
        lecture.order === index + 1 &&
        lecture.subject === 'ISLAMIC_STUDIES' &&
        lecture.country === 'SA' &&
        lecture.gradeLevel === 'G2' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.educationTrack === 'GENERAL' &&
        lecture.sections?.map((section) => section.titleAr).join('|') === expectedTitles.join('|') &&
        lecture.sections?.every((section, topicIndex) =>
          section.contentAr.includes(`مرجع الفهرس: ص ${expectedPages[topicIndex]}.`) &&
          (topicIndex === 0
            ? section.diagram?.diagramType === 'arabic_learning_map' &&
              section.diagram.visualSteps?.length === 4 &&
              section.diagram.captionAr.includes('ليس صورة من الكتاب المدرسي')
            : true)
        ) &&
        lecture.assessment.questions.length === Math.min(3, expectedTitles.length) &&
        lecture.assessment.questions.every((question) =>
          question.optionsAr?.length === 3 &&
          new Set(question.optionsAr).size === question.optionsAr.length &&
          question.correctIndex >= 0 &&
          question.correctIndex < question.optionsAr.length
        ) &&
        lecture.descriptionAr.includes('الغلاف طبعة 1448هـ/2026م') &&
        lecture.descriptionAr.includes('سجل النشر الداخلي في PDF ص 2 سنة 1446هـ') &&
        lecture.descriptionAr.includes('لم تراجع جميع صفحات الكتاب') &&
        (index === 0
          ? lecture.termAr.includes('خطة مقرر القرآن') &&
            lecture.sections?.[0].contentAr.includes('لا يقدم تدريبًا تفصيليًا')
          : lecture.termAr.includes('الجزء الأول'));
    }),
  'Saudi Grade 2 Islamic Studies includes teacher-directed Quran-plan guidance, original diagrams, and valid index-based assessments'
);
assert(
  isSaudiPublicG2IslamicStudiesAvailable('SA', 'G2', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG2IslamicStudiesAvailable('SA', 'G3', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG2IslamicStudiesAvailable('SA', 'G2', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG2IslamicStudiesAvailable('SA', 'G2', 'ISLAMIC', 'GENERAL') &&
    !isSaudiPublicG2IslamicStudiesAvailable('SA', 'G2', 'PUBLIC', 'ISLAMIC') &&
    !isSaudiPublicG2IslamicStudiesAvailable('EG', 'G2', 'PUBLIC', 'GENERAL') &&
    saudiGrade2IslamicStudies.length === 3 &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G2', 'SA', 'PUBLIC', 'CS_ENGINEERING').length === 0 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'ISLAMIC_STUDIES',
        'G2',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    ['G1', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('ISLAMIC_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ),
  'Saudi Grade 2 Islamic Studies is restricted to public General education without enabling unsupported routes'
);
assert(
  verifiedSaudiGrade2IslamicStudiesTextbook.textbookName.includes('الصف الثاني الابتدائي الحكومي') &&
    verifiedSaudiGrade2IslamicStudiesTextbook.textbookName.includes('1448هـ/2026م') &&
    verifiedSaudiGrade2IslamicStudiesTextbook.textbookName.includes('1446هـ') &&
    verifiedSaudiGrade2IslamicStudiesTextbookEn.textbookName.includes('Grade 2') &&
    verifiedSaudiGrade2IslamicStudiesTextbookEn.textbookName.includes('1448 AH/2026') &&
    verifiedSaudiGrade2IslamicStudiesTextbook.semester === 'الجزء الأول من المقرر' &&
    verifiedSaudiGrade2IslamicStudiesTextbook.ministry.includes('1446هـ') &&
    getNationalSubjectLabel('ISLAMIC_STUDIES', 'SA', 'G2', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الثاني الحكومي — فهرسا الجزء الأول موثقان'),
  'Saudi Grade 2 Islamic Studies metadata identifies the official source, part, and edition-year discrepancy'
);
const previousGrade2IslamicStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const grade2IslamicStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => grade2IslamicStorage.get(key) ?? null,
    setItem: (key: string, value: string) => { grade2IslamicStorage.set(key, value); },
    removeItem: (key: string) => { grade2IslamicStorage.delete(key); },
    clear: () => grade2IslamicStorage.clear()
  }
});
try {
  const staleGrade2IslamicLecture = {
    ...SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM[0],
    id: 'stale-saudi-grade2-islamic-content',
    titleAr: 'محتوى إسلامي قديم غير موثق'
  };
  grade2IslamicStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ISLAMIC_STUDIES_G2_GENERAL',
    JSON.stringify([staleGrade2IslamicLecture])
  );
  grade2IslamicStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ISLAMIC_STUDIES_G2_GENERAL',
    JSON.stringify([{
      ...staleGrade2IslamicLecture,
      id: 'shared-saudi-grade2-islamic-content',
      titleAr: 'محتوى إسلامي مشترك من مقرر آخر',
      isSharedCommunity: true
    }])
  );
  assert(
    loadSubjectLectures('ISLAMIC_STUDIES', 'SA', 'G2', 'PUBLIC', 'GENERAL')
      .map((lecture) => lecture.id).join('|') ===
      SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM.map((lecture) => lecture.id).join('|'),
    'Saudi Grade 2 Islamic Studies cannot be replaced by stale or shared curriculum storage'
  );
} finally {
  if (previousGrade2IslamicStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousGrade2IslamicStorage);
  } else {
    Reflect.deleteProperty(globalThis, 'localStorage');
  }
}
const expectedGrade3IslamicStudyContents = [
  'QURAN|0|خطة مقرر القرآن الكريم|11',
  'TAWHEED|1|مراتب الدين|14',
  'TAWHEED|1|أركان الإسلام|18',
  'TAWHEED|1|شهادة أن لا إله إلا الله|23',
  'TAWHEED|1|شهادة أن محمدًا رسول الله|26',
  'TAWHEED|1|إقام الصلاة|29',
  'TAWHEED|1|إيتاء الزكاة|32',
  'TAWHEED|1|صوم رمضان|35',
  'TAWHEED|1|حج بيت الله الحرام|37',
  'FIQH|1|آداب قضاء الحاجة (1)|42',
  'FIQH|1|آداب قضاء الحاجة (2)|45',
  'FIQH|1|إزالة النجاسة عن البدن (الجسم)|48',
  'FIQH|1|إزالة النجاسة عن الملابس ومكان الصلاة|52',
  'FIQH|1|التيمم|56',
  'FIQH|1|مكانة الصلاة|60',
  'FIQH|1|شروط الصلاة (1)|63',
  'FIQH|1|شروط الصلاة (2)|66',
  'FIQH|1|آداب دخول المسجد والخروج منه|72',
  'FIQH|1|صلاة الجماعة|78',
];
assert(
  SAUDI_G3_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-ISLM-part1.pdf' &&
    SAUDI_G3_ISLAMIC_STUDIES_SECTION_COUNT === 3 &&
    SAUDI_G3_ISLAMIC_STUDIES_LESSON_COUNT === 18 &&
    SAUDI_G3_ISLAMIC_STUDIES_TABLE_OF_CONTENTS.map(({ area, part, titleAr, page }) =>
      `${area}|${part}|${titleAr}|${page}`
    ).join('\n') === expectedGrade3IslamicStudyContents.join('\n'),
  'Saudi Grade 3 Islamic Studies maps the Quran plan and all 18 indexed Part One lessons to their printed pages'
);
assert(
  SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM.length === 3 &&
    saudiGrade3IslamicStudies.length === 3 &&
    saudiGrade3IslamicStudies.every((lecture, index) => {
      const expectedArea = ['QURAN', 'TAWHEED', 'FIQH'][index];
      const group = expectedGrade3IslamicStudyContents.filter((entry) =>
        entry.startsWith(`${expectedArea}|`)
      );
      const expectedTitles = group.map((entry) => entry.split('|')[2]);
      const expectedPages = group.map((entry) => entry.split('|')[3]);
      return lecture.id === `saudi-g3-islamic-studies-1448-${index + 1}` &&
        lecture.order === index + 1 &&
        lecture.subject === 'ISLAMIC_STUDIES' &&
        lecture.country === 'SA' &&
        lecture.gradeLevel === 'G3' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.educationTrack === 'GENERAL' &&
        lecture.sections?.map((section) => section.titleAr).join('|') === expectedTitles.join('|') &&
        lecture.sections?.every((section, topicIndex) =>
          section.contentAr.includes(`مرجع الفهرس: ص ${expectedPages[topicIndex]}.`) &&
          section.contentAr.includes('نشاط من إعداد المنصة') &&
          (topicIndex === 0
            ? section.diagram?.diagramType === 'arabic_learning_map' &&
              section.diagram.visualSteps?.length === 4 &&
              section.diagram.captionAr.includes('ليس صورة من الكتاب المدرسي')
            : !section.diagram)
        ) &&
        lecture.assessment.questions.length === Math.min(3, expectedTitles.length) &&
        lecture.assessment.questions.every((question) =>
          question.optionsAr?.length === 3 &&
          new Set(question.optionsAr).size === question.optionsAr.length &&
          question.correctIndex >= 0 &&
          question.correctIndex < question.optionsAr.length
        ) &&
        lecture.descriptionAr.includes('يذكر الغلاف طبعة 1448هـ/2026م') &&
        lecture.descriptionAr.includes('سجل النشر الداخلي في صفحة PDF 2 سنة 1446هـ') &&
        lecture.descriptionAr.includes('لم تراجع جميع صفحات الكتاب') &&
        (index === 0
          ? lecture.termAr.includes('خطة مقرر القرآن') &&
            lecture.sections?.[0].contentAr.includes('لا يقدم هذا المسار تدريبًا تفصيليًا')
          : lecture.termAr.includes('الجزء الأول'));
    }),
  'Saudi Grade 3 Islamic Studies provides original guidance, diagrams, assessments, and explicit Quran-plan limits'
);
assert(
  isSaudiPublicG3IslamicStudiesAvailable('SA', 'G3', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG3IslamicStudiesAvailable('SA', 'G3', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG3IslamicStudiesAvailable('SA', 'G3', 'ISLAMIC', 'GENERAL') &&
    !isSaudiPublicG3IslamicStudiesAvailable('SA', 'G3', 'PUBLIC', 'ISLAMIC') &&
    !isSaudiPublicG3IslamicStudiesAvailable('EG', 'G3', 'PUBLIC', 'GENERAL') &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G3', 'SA', 'PUBLIC', 'GENERAL').length === 3 &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G3', 'SA', 'PUBLIC', 'CS_ENGINEERING').length === 0 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'ISLAMIC_STUDIES',
        'G3',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    ['G1', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('ISLAMIC_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ),
  'Saudi Grade 3 Islamic Studies stays restricted to public general education without changing unsupported grades'
);
const expectedGrade5IslamicLessonEntries = [
  'فضل العلم وأهميته|16',
  'العلم الذي يجب على كل مسلم تعلمه|20',
  'العمل بالعلم الشرعي|24',
  'الحنيفية السمحة|27',
  'معرفة الرب|30',
  'دلائل معرفة الرب عز وجل|34',
  'استحقاق الله للعبادة|40',
  'الدعاء والاستعانة|45',
  'الاستعاذة والاستعانة|50',
  'الخوف والرجاء|52',
  'التوكل|56',
  'الخشوع والإنابة|59',
  'الذبح لله|61',
  'هديه ﷺ في الطهارة|66',
  'هديه ﷺ في الصلاة|70',
  'هديه ﷺ في يوم الجمعة|74',
  'هديه ﷺ في العيد|77',
  'هديه ﷺ في الزكاة والصدقة|80',
  'هديه ﷺ في الصيام|82',
  'هديه ﷺ في الحج|86',
  'هديه ﷺ في العبادة|90',
  'هديه ﷺ في قراءة القرآن|94',
  'فضل تلاوة القرآن الكريم|97',
  'هديه ﷺ في الذكر|102',
  'فضل الذكر|104',
  'مكانة المسجد عند النبي ﷺ|108',
  'فضل بناء المساجد|111',
  'تحية المسجد|114',
  'الأذان|118',
  'سنن الأذان|121',
  'معاني جمل الأذان|125',
  'الإقامة|129',
  'آداب المشي إلى الصلاة|134',
  'آداب انتظار الصلاة|138',
  'مكانة الصلاة|142',
  'فرضية الصلاة|144',
  'صفة الصلاة (1)|148',
  'صفة الصلاة (2)|152',
  'صفة الصلاة (3)|158',
  'سنن الصلاة|164',
  'مكروهات الصلاة|168',
  'الخشوع في الصلاة|171',
];
const actualGrade5IslamicLessonEntries = saudiGrade5IslamicStudies
  .filter((lecture) => lecture.unitTitleAr !== 'مقرر القرآن الكريم')
  .flatMap((lecture) => lecture.sections ?? [])
  .map((section) => {
    const page = section.contentAr.match(/مرجع الفهرس: ص (\d+)\./)?.[1];
    return `${section.titleAr}|${page ?? 'missing'}`;
  });
assert(
  SAUDI_G5_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-ISLM.pdf' &&
    SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM.length === SAUDI_G5_ISLAMIC_STUDIES_UNIT_COUNT &&
    SAUDI_G5_ISLAMIC_STUDIES_UNIT_COUNT === 4 &&
    SAUDI_G5_ISLAMIC_STUDIES_LESSON_COUNT === 42 &&
    saudiGrade5IslamicStudies.length === 4 &&
    saudiGrade5IslamicStudies.every((lecture, index) =>
      lecture.id === `saudi-g5-islamic-studies-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.subject === 'ISLAMIC_STUDIES' &&
      lecture.country === 'SA' &&
      lecture.gradeLevel === 'G5' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.sections?.length &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.assessment.questions.length === 1 &&
      lecture.summaryAr?.includes('1448هـ/2026م') &&
      lecture.descriptionAr?.includes('لم تراجع جميع صفحات الدروس')
    ) &&
    actualGrade5IslamicLessonEntries.join('\n') === expectedGrade5IslamicLessonEntries.join('\n') &&
    saudiGrade5IslamicStudies[0].sections?.length === 3 &&
    saudiGrade5IslamicStudies[0].sections?.some((section) =>
      section.titleAr === 'خطة التعليم العام للقرآن الكريم' &&
      section.contentAr.includes('التدريب التفصيلي')
    ),
  'Saudi Grade 5 Islamic Studies matches all 42 indexed Part One lessons and page references, includes the introductory Quran plan, and uses original diagrams'
);
assert(
  isSaudiPublicG5IslamicStudiesAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5IslamicStudiesAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5IslamicStudiesAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG5IslamicStudiesAvailable('SA', 'G5', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG5IslamicStudiesAvailable('SA', 'G5', 'PUBLIC', 'ISLAMIC') &&
    !isSaudiPublicG5IslamicStudiesAvailable('SA', 'G5', 'PUBLIC', 'CS_ENGINEERING') &&
    !isSaudiPublicG5IslamicStudiesAvailable('EG', 'G5', 'PUBLIC', 'GENERAL') &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G5', 'SA', 'PUBLIC', 'GENERAL').length === 4 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'ISLAMIC_STUDIES',
        'G5',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    ['G1', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('ISLAMIC_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ) &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G5', 'SA', 'PUBLIC', 'CS_ENGINEERING').length === 0,
  'Saudi Grade 5 Islamic Studies is restricted to the verified public general-education pathway'
);
const expectedGrade4IslamicStudiesContents = [
  'QURAN|0|مقرر القرآن الكريم|6',
  'QURAN|0|أهداف مقرر القرآن الكريم|7',
  'QURAN|0|خطة التعليم العام للقرآن الكريم|8',
  'TAWHEED|1|التوحيد وأنواعه|16',
  'TAWHEED|1|توحيد الربوبية والإقرار به|20',
  'TAWHEED|1|التعريف بتوحيد الألوهية|23',
  'TAWHEED|1|أهمية توحيد الألوهية وموقف المشركين منه|27',
  'TAWHEED|1|العبادة|32',
  'TAWHEED|1|أنواع العبادة|34',
  'TAWHEED|1|شروط قبول العبادة|36',
  'HADITH|1|أتعلم سيرة النبي ﷺ|42',
  'HADITH|1|نسب النبي ﷺ|45',
  'HADITH|1|أوصاف النبي ﷺ|47',
  'HADITH|1|النبي ﷺ أفضل الناس|50',
  'HADITH|1|من فضائل النبي ﷺ|54',
  'HADITH|1|عيش النبي ﷺ|57',
  'HADITH|1|بيت النبي ﷺ|62',
  'HADITH|1|أم المؤمنين خديجة بنت خويلد|65',
  'HADITH|1|أم المؤمنين عائشة بنت أبي بكر الصديق|68',
  'HADITH|1|أم المؤمنين حفصة بنت عمر بن الخطاب|72',
  'HADITH|1|أولاد النبي ﷺ وأهل بيته|74',
  'HADITH|1|معاملة النبي ﷺ لأزواجه|78',
  'HADITH|1|حسن تعامله ﷺ مع أهله|80',
  'HADITH|1|حسن تعامله ﷺ مع القائمين على قضاء حوائجه|82',
  'FIQH|1|نعمة الماء|88',
  'FIQH|1|الماء الطهور|91',
  'FIQH|1|الماء النجس|94',
  'FIQH|1|فضل الطهارة|98',
  'FIQH|1|الوضوء|103',
  'FIQH|1|فروض الوضوء|107',
  'FIQH|1|سنن الوضوء|110',
  'FIQH|1|نواقض الوضوء|115',
  'FIQH|1|الخف والجورب|118',
  'FIQH|1|مدة المسح|121',
  'TAWHEED|2|توحيد الأسماء والصفات وأثره في حياة المسلم|132',
  'TAWHEED|2|أسماء الله الحسنى|136',
  'TAWHEED|2|معاني أسماء الله الحسنى (1)|139',
  'TAWHEED|2|معاني أسماء الله الحسنى (2)|142',
  'TAWHEED|2|أثر الإيمان بأسماء الله وصفاته في حياتنا|146',
  'HADITH|2|نظافة النبي ﷺ|152',
  'HADITH|2|لباس النبي ﷺ|156',
  'HADITH|2|الاقتداء بالهدي النبوي في اللباس|158',
  'HADITH|2|أكل النبي ﷺ وشربه|162',
  'HADITH|2|نوم النبي ﷺ|166',
  'HADITH|2|سلام النبي ﷺ|172',
  'HADITH|2|فضل السلام|174',
  'HADITH|2|استئذان النبي ﷺ|177',
  'HADITH|2|من آداب الاستئذان|180',
  'HADITH|2|صفة كلام النبي ﷺ|182',
  'HADITH|2|صفة استماع النبي ﷺ|184',
  'HADITH|2|البعد عن الكلام السيئ|187',
  'HADITH|2|صفة ضحك النبي ﷺ|190',
  'HADITH|2|صفة مزاح النبي ﷺ|193',
  'HADITH|2|الصدق في المزاح|195',
  'FIQH|2|التيمم|200',
  'FIQH|2|منزلة الصلاة|204',
  'FIQH|2|التبكير إلى الصلاة|208',
  'FIQH|2|أوقات الصلوات المفروضة|210',
  'FIQH|2|صلاة الجماعة|212',
  'FIQH|2|قضاء الصلاة الفائتة|214',
  'FIQH|2|آداب المسجد|217',
  'FIQH|2|أركان الصلاة|222',
  'FIQH|2|واجبات الصلاة|227',
  'FIQH|2|فضل سورة الفاتحة وتفسيرها|231',
  'FIQH|2|الذكر بعد الصلاة|238',
];
const expectedGrade4IslamicStudySections = [
  'مقرر القرآن الكريم',
  'التوحيد — الجزء الأول',
  'الحديث والسيرة — الجزء الأول',
  'الفقه — الجزء الأول',
  'التوحيد — الجزء الثاني',
  'الحديث والسيرة — الجزء الثاني',
  'الفقه — الجزء الثاني',
];
const expectedGrade4IslamicStudySectionKeys: Array<[string, number]> = [
  ['QURAN', 0],
  ['TAWHEED', 1],
  ['HADITH', 1],
  ['FIQH', 1],
  ['TAWHEED', 2],
  ['HADITH', 2],
  ['FIQH', 2],
];
const saudiGrade4IslamicStudies = loadSubjectLectures(
  'ISLAMIC_STUDIES', 'SA', 'G4', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G3_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-ISLM-part1.pdf' &&
    verifiedSaudiGrade3IslamicStudiesTextbook.textbookName.includes('الصف الثالث الابتدائي الحكومي') &&
    verifiedSaudiGrade3IslamicStudiesTextbook.textbookName.includes('18 درسًا') &&
    verifiedSaudiGrade3IslamicStudiesTextbook.textbookName.includes('1448هـ/2026م') &&
    verifiedSaudiGrade3IslamicStudiesTextbook.textbookName.includes('1446هـ') &&
    verifiedSaudiGrade3IslamicStudiesTextbook.semester === 'الجزء الأول من المقرر' &&
    verifiedSaudiGrade3IslamicStudiesTextbook.ministry.includes('1446هـ') &&
    verifiedSaudiGrade3IslamicStudiesTextbookEn.textbookName.includes('Grade 3') &&
    verifiedSaudiGrade3IslamicStudiesTextbookEn.textbookName.includes('18') &&
    getNationalSubjectLabel('ISLAMIC_STUDIES', 'SA', 'G3', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الثالث الحكومي — فهرس الجزء الأول موثق') &&
    SAUDI_G4_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-ISLM.pdf' &&
    SAUDI_G4_ISLAMIC_STUDIES_SECTION_COUNT === expectedGrade4IslamicStudySections.length &&
    SAUDI_G4_ISLAMIC_STUDIES_LESSON_COUNT === 62 &&
    SAUDI_G4_ISLAMIC_STUDIES_TABLE_OF_CONTENTS.length === expectedGrade4IslamicStudiesContents.length &&
    SAUDI_G4_ISLAMIC_STUDIES_TABLE_OF_CONTENTS.map(({ area, part, titleAr, page }) =>
      `${area}|${part}|${titleAr}|${page}`
    ).join('\n') === expectedGrade4IslamicStudiesContents.join('\n'),
  'Saudi Grade 4 Islamic Studies maps the Quran plan and all 62 indexed Tawheed, Hadith/Seerah, and Fiqh topics across both parts'
);
assert(
  SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM.length === expectedGrade4IslamicStudySections.length &&
    saudiGrade4IslamicStudies.length === expectedGrade4IslamicStudySections.length &&
    saudiGrade4IslamicStudies.every((lecture, index) => {
      const [expectedArea, expectedPart] = expectedGrade4IslamicStudySectionKeys[index];
      const group = expectedGrade4IslamicStudiesContents.filter((entry) => {
        const [area, part] = entry.split('|');
        return area === expectedArea && Number(part) === expectedPart;
      });
      const expectedTitles = group.map((entry) => entry.split('|')[2]);
      const expectedPages = group.map((entry) => entry.split('|')[3]);
      return lecture.id === `saudi-g4-islamic-studies-1448-${index + 1}` &&
        lecture.order === index + 1 &&
        lecture.titleAr === expectedGrade4IslamicStudySections[index] &&
        lecture.subject === 'ISLAMIC_STUDIES' &&
        lecture.country === 'SA' &&
        lecture.gradeLevel === 'G4' &&
        lecture.educationType === 'PUBLIC' &&
        lecture.educationTrack === 'GENERAL' &&
        lecture.sections?.map((section) => section.titleAr).join('|') === expectedTitles.join('|') &&
        lecture.sections?.every((section, topicIndex) =>
          section.contentAr.includes(`مرجع الفهرس: ص ${expectedPages[topicIndex]}.`) &&
          section.contentAr.includes('نشاط من إعداد المنصة') &&
          (topicIndex === 0
            ? section.diagram?.diagramType === 'arabic_learning_map' &&
              section.diagram.visualSteps?.length === 4 &&
              section.diagram.captionAr.includes('ليس صورة من الكتاب المدرسي')
            : !section.diagram)
        ) &&
        lecture.assessment.questions.length === 1 &&
        lecture.assessment.questions[0].optionsAr.length === 3 &&
        lecture.assessment.questions[0].correctIndex === 0 &&
        lecture.assessment.questions[0].explanationAr.includes('لا يغني عن دراسة صفحات الدرس') &&
        lecture.descriptionAr.includes('غلاف يذكر طبعة 1448هـ/2026م') &&
        lecture.descriptionAr.includes('سجل النشر الداخلي في صفحة PDF 2 يذكر 1446هـ') &&
        lecture.descriptionAr.includes('PDF ص 126–129') &&
        lecture.descriptionAr.includes('لم تراجع جميع صفحات الدروس تفصيليًا') &&
        (index === 0
          ? lecture.termAr.includes('التعليم العام') &&
            lecture.sections?.some((section) =>
              section.titleAr === 'خطة التعليم العام للقرآن الكريم' &&
              section.contentAr.includes('التدريب التفصيلي')
            )
          : lecture.termAr.includes(index < 4 ? 'الجزء الأول' : 'الجزء الثاني'));
    }),
  'Grade 4 Islamic Studies courses retain the full-year section order, source pages, original diagrams, guided activities, and Quran-scope limits'
);
assert(
  isSaudiPublicG4IslamicStudiesAvailable('SA', 'G4', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4IslamicStudiesAvailable('SA', 'G3', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4IslamicStudiesAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG4IslamicStudiesAvailable('SA', 'G4', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG4IslamicStudiesAvailable('SA', 'G4', 'ISLAMIC', 'GENERAL') &&
    !isSaudiPublicG4IslamicStudiesAvailable('SA', 'G4', 'INTERNATIONAL', 'GENERAL') &&
    !isSaudiPublicG4IslamicStudiesAvailable('SA', 'G4', 'PUBLIC', 'CS_ENGINEERING') &&
    !isSaudiPublicG4IslamicStudiesAvailable('EG', 'G4', 'PUBLIC', 'GENERAL') &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G4', 'SA', 'PUBLIC', 'GENERAL').length === 7 &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'ISLAMIC_STUDIES',
        'G4',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G4', 'SA', 'PUBLIC', 'CS_ENGINEERING').length === 0,
  'Saudi Grade 4 Islamic Studies is restricted to the verified public general-education route'
);
const expectedIslamicUnitTitles = [
  'مقرر القرآن الكريم',
  'الوحدة الأولى: الإيمان',
  'الوحدة الثانية: الشرك',
  'الوحدة الثالثة: البدع والذنوب والمعاصي',
  'الوحدة الرابعة: منهج أهل السنة والجماعة في العقيدة',
  'الوحدة الأولى: هدي النبي ﷺ في معاملة الصغار والأقارب والأصحاب والجيران',
  'الوحدة الثانية: هدي النبي ﷺ في معاملة القائمين على قضاء حوائجه والعمال والضيوف',
  'الوحدة الثالثة: هدي النبي ﷺ مع غير المسلمين',
  'الوحدة الرابعة: هدي النبي ﷺ في التعامل مع الحيوان',
  'الوحدة الأولى: صلاة الجمعة',
  'الوحدة الثانية: الحكمة من مشروعية العيد وصلاة العيدين',
  'الوحدة الثالثة: صلاة الاستسقاء',
  'الوحدة الرابعة: صلاة الكسوف والخسوف',
  'الوحدة الخامسة: الصلاة على الميت',
  'الوحدة الأولى: اليوم الآخر',
  'الوحدة الثانية: حقوق الرسول ﷺ',
  'الوحدة الثالثة: حقوق أهل بيت النبي ﷺ وزوجاته',
  'الوحدة الرابعة: حقوق الصحابة والخلفاء الراشدين',
  'الوحدة الخامسة: حقوق ولي الأمر',
  'الوحدة الأولى: بركة النبي ﷺ',
  'الوحدة الثانية: حفظ الله لنبيه ﷺ',
  'الوحدة الثالثة: النبي القدوة ﷺ',
  'الوحدة الرابعة: الصلاة على النبي ﷺ',
  'الوحدة الخامسة: الصحابة وأهل بيت النبي ﷺ',
  'الوحدة الأولى: الزكاة',
  'الوحدة الثانية: زكاة الفطر وصدقة التطوع',
  'الوحدة الثالثة: الصيام',
  'الوحدة الرابعة: الحج والعمرة',
];
const expectedIslamicLessonEntries = [
  'الإيمان|16',
  'شُعَب الإيمان|20',
  'نواقض الإيمان ومنقصاته|24',
  'معنى الشرك|28',
  'أنواع الشرك|31',
  'مظاهر الشرك|34',
  'البدع|38',
  'الذنوب والمعاصي|40',
  'منهج أهل السنة والجماعة في العقيدة|44',
  'رحمة النبي ﷺ للصغار وملاطفته لهم|50',
  'دعاؤه ﷺ للصغار وتشجيعهم على العمل|53',
  'الرحمة بالصغير وتقدير الكبير|55',
  'محبته ﷺ لذوي رحمه ودعوتهم للخير|57',
  'من فضائل صلة الرحم|61',
  'تواضعه ﷺ وبشاشته مع جلسائه|63',
  'من آداب المجلس|66',
  'هدي النبي ﷺ في تعامله مع جيرانه|68',
  'هدي النبي ﷺ في معاملة القائمين على قضاء حوائجه|72',
  'نهي النبي ﷺ عن منع الأجير أجره|76',
  'هدي النبي ﷺ في التعامل مع الوفود والضيوف|79',
  'هدي النبي ﷺ في التعامل مع غير المسلمين|84',
  'صلة الوالدين غير المسلمين|88',
  'إحسان النبي ﷺ إلى الحيوان|92',
  'حكم صلاة الجمعة، وصفتها|100',
  'مستحبات الجمعة|103',
  'الحكمة من مشروعية العيد|108',
  'صلاة العيدين|110',
  'سنن العيدين|114',
  'الاستسقاء|120',
  'الكسوف والخسوف|126',
  'صفة صلاة الكسوف والخسوف|129',
  'الصلاة على الميت|134',
  'الإيمان باليوم الآخر|144',
  'الجنة والنار|146',
  'حقوق الرسول ﷺ ونتائج القيام بها|152',
  'حقوق أهل بيت النبي ﷺ|158',
  'حقوق زوجات النبي ﷺ|160',
  'حقوق الصحابة|166',
  'حقوق الخلفاء الراشدين|169',
  'الواجب لولي الأمر|176',
  'تكثير الماء بين يدي النبي ﷺ|182',
  'تكثير الطعام بين يدي النبي ﷺ|184',
  'البركة في الطعام|187',
  'مواقف من حفظ الله لنبيه ﷺ|190',
  'أسباب حفظ الله للإنسان|193',
  'محبة النبي ﷺ|198',
  'التأسي بالنبي ﷺ وأمثلته|202',
  'التأسي بالنبي ﷺ في صلاته|206',
  'الصلاة على النبي ﷺ: معناها، فضلها، صفتها|210',
  'الصلاة على النبي ﷺ بعد الأذان|214',
  'الصلاة على النبي ﷺ عند الدعاء|217',
  'وصية النبي ﷺ بأهل بيته|222',
  'محبة الصحابة لأهل بيت النبي ﷺ|226',
  'حكم الزكاة ومكانتها|232',
  'زكاة الفطر|236',
  'صدقة التطوع|238',
  'الصيام (مكانته - حكمه)|242',
  'الذين يباح لهم الفطر في رمضان|246',
  'العشر الأواخر|249',
  'الحج والعمرة ومنزلتهما|252',
  'مواقيت الحج والعمرة|255',
  'الإحرام|257',
  'أركان العمرة وواجباتها|260',
  'صفة العمرة|261',
];
const actualIslamicLessonEntries = saudiGrade6IslamicStudies
  .filter((lecture) => lecture.unitTitleAr !== 'مقرر القرآن الكريم')
  .flatMap((lecture) => lecture.sections ?? [])
  .map((section) => {
    const page = section.contentAr.match(/مرجع الفهرس: ص (\d+)\./)?.[1];
    return `${section.titleAr}|${page ?? 'missing'}`;
  });
assert(
  SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM.length === SAUDI_G6_ISLAMIC_STUDIES_UNIT_COUNT &&
    SAUDI_G6_ISLAMIC_STUDIES_UNIT_COUNT === 28 &&
    SAUDI_G6_ISLAMIC_STUDIES_LESSON_COUNT === 64 &&
    saudiGrade6IslamicStudies.length === 28 &&
    saudiGrade6IslamicStudies.every((lecture, index) =>
      lecture.id === `saudi-g6-islamic-studies-1448-${index + 1}` &&
      lecture.order === index + 1 &&
      lecture.unitTitleAr === expectedIslamicUnitTitles[index] &&
      lecture.subject === 'ISLAMIC_STUDIES' &&
      lecture.country === 'SA' &&
      lecture.gradeLevel === 'G6' &&
      lecture.educationType === 'PUBLIC' &&
      lecture.educationTrack === 'GENERAL' &&
      lecture.sections?.length &&
      lecture.sections[0].diagram?.diagramType === 'arabic_learning_map' &&
      lecture.sections[0].diagram.captionAr.includes('ليس صورة من الكتاب المدرسي') &&
      lecture.assessment.questions.length === 1 &&
      lecture.summaryAr?.includes('1446هـ') &&
      lecture.descriptionAr?.includes('لم تراجع جميع صفحات الدروس')
    ) &&
    actualIslamicLessonEntries.join('\n') === expectedIslamicLessonEntries.join('\n') &&
    saudiGrade6IslamicStudies[0].sections?.length === 3 &&
    saudiGrade6IslamicStudies[0].sections?.some((section) =>
      section.titleAr === 'خطة التعليم العام للقرآن الكريم' &&
      section.contentAr.includes('مسارات مستقلة')
    ),
  'Saudi Grade 6 Islamic Studies includes all 64 indexed Tawheed, Hadith/Seerah, and Fiqh lessons with exact titles/pages, plus the Quran course outline and original diagrams'
);
assert(
  isSaudiPublicG6IslamicStudiesAvailable('SA', 'G6', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6IslamicStudiesAvailable('SA', 'G5', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6IslamicStudiesAvailable('SA', 'G7', 'PUBLIC', 'GENERAL') &&
    !isSaudiPublicG6IslamicStudiesAvailable('SA', 'G6', 'PRIVATE', 'GENERAL') &&
    !isSaudiPublicG6IslamicStudiesAvailable('SA', 'G6', 'ISLAMIC', 'GENERAL') &&
    !isSaudiPublicG6IslamicStudiesAvailable('SA', 'G6', 'INTERNATIONAL', 'GENERAL') &&
    !isSaudiPublicG6IslamicStudiesAvailable('SA', 'G6', 'PUBLIC', 'CS_ENGINEERING') &&
    !isSaudiPublicG6IslamicStudiesAvailable('EG', 'G6', 'PUBLIC', 'GENERAL') &&
    ['PRIVATE', 'ISLAMIC', 'INTERNATIONAL'].every((educationType) =>
      getCurriculumForSubject(
        'ISLAMIC_STUDIES',
        'G6',
        'SA',
        educationType as 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL',
        'GENERAL'
      ).length === 0
    ) &&
    ['G1', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12'].every((grade) =>
      getCurriculumForSubject('ISLAMIC_STUDIES', grade, 'SA', 'PUBLIC', 'GENERAL').length === 0
    ) &&
    getCurriculumForSubject('ISLAMIC_STUDIES', 'G6', 'SA', 'PUBLIC', 'CS_ENGINEERING').length === 0 &&
    ['EG', 'SD', 'INTL'].every((country) =>
      getCurriculumForSubject('ISLAMIC_STUDIES', 'G6', country, 'PUBLIC', 'GENERAL')
        .every((lecture) => !lecture.id.startsWith('saudi-g6-islamic-studies-'))
    ),
  'Saudi Islamic Studies is shown only for verified public Grade 6 general education; unsupported Saudi grades and school types stay unavailable'
);
const saudiGrade6IslamicStudiesTextbook = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G6', 'GENERAL', 'ar', 'PUBLIC'
);
const verifiedSaudiGrade4IslamicStudiesTextbook = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G4', 'GENERAL', 'ar', 'PUBLIC'
);
const verifiedSaudiGrade5IslamicStudiesTextbook = getNationalTextbookInfo(
  'SA', 'ISLAMIC_STUDIES', 'G5', 'GENERAL', 'ar', 'PUBLIC'
);
const separateSaudiGrade6QuranRecitation = getCurriculumForSubject(
  'QURAN_RECITATION', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
const separateSaudiGrade6Tajweed = getCurriculumForSubject(
  'TAJWEED', 'G6', 'SA', 'PUBLIC', 'GENERAL'
);
assert(
  SAUDI_G4_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-ISLM.pdf' &&
    verifiedSaudiGrade4IslamicStudiesTextbook.textbookName.includes('62 موضوعًا') &&
    verifiedSaudiGrade4IslamicStudiesTextbook.textbookName.includes('PDF ص 5–12 و126–129') &&
    verifiedSaudiGrade4IslamicStudiesTextbook.textbookName.includes('1446هـ') &&
    verifiedSaudiGrade4IslamicStudiesTextbook.semester === 'العام الدراسي (الجزآن الأول والثاني)' &&
    verifiedSaudiGrade4IslamicStudiesTextbook.ministry.includes('1446هـ') &&
    getNationalSubjectLabel('ISLAMIC_STUDIES', 'SA', 'G4', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الرابع الحكومي — فهرسا العام الدراسي موثقان') &&
    SAUDI_G6_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-ISLM.pdf' &&
    SAUDI_G5_ISLAMIC_STUDIES_TEXTBOOK_URL ===
      'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-ISLM.pdf' &&
    verifiedSaudiGrade5IslamicStudiesTextbook.textbookName.includes('الصف الخامس') &&
    verifiedSaudiGrade5IslamicStudiesTextbook.textbookName.includes('1448هـ/2026م') &&
    verifiedSaudiGrade5IslamicStudiesTextbook.ministry.includes('الجزء الأول') &&
    getNationalSubjectLabel('ISLAMIC_STUDIES', 'SA', 'G5', 'ar', 'PUBLIC', 'GENERAL')
      .includes('الصف الخامس الحكومي') &&
    saudiGrade6IslamicStudiesTextbook.textbookName.includes('1448هـ/2026م') &&
    saudiGrade6IslamicStudiesTextbook.textbookName.includes('1446هـ') &&
    saudiGrade6IslamicStudiesTextbook.ministry.includes('سجل النشر الداخلي') &&
    getNationalSubjectLabel('ISLAMIC_STUDIES', 'SA', 'G6', 'ar', 'PUBLIC', 'GENERAL')
      .includes('فهرس كتاب موثق') &&
    separateSaudiGrade6QuranRecitation.length > 0 &&
    separateSaudiGrade6Tajweed.length > 0 &&
    separateSaudiGrade6QuranRecitation.every((lecture) => lecture.subject === 'QURAN_RECITATION') &&
    separateSaudiGrade6Tajweed.every((lecture) => lecture.subject === 'TAJWEED') &&
    !saudiGrade6IslamicStudies.some((lecture) =>
      separateSaudiGrade6QuranRecitation.some((quranLecture) => quranLecture.id === lecture.id) ||
      separateSaudiGrade6Tajweed.some((tajweedLecture) => tajweedLecture.id === lecture.id)
    ),
  'Saudi Islamic Studies metadata discloses the edition discrepancy and preserves distinct Quran Recitation and Tajweed routes'
);

const previousIslamicStudiesStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const islamicStudiesStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => islamicStudiesStorage.get(key) ?? null,
    setItem: (key: string, value: string) => islamicStudiesStorage.set(key, value),
    removeItem: (key: string) => islamicStudiesStorage.delete(key),
    clear: () => islamicStudiesStorage.clear()
  }
});
try {
  const verifiedIslamicUnit = SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM[0];
  const staleIslamicLesson = {
    ...verifiedIslamicUnit,
    titleAr: 'محتوى قديم غير مطابق للفهرس',
    isCompleted: true
  };
  const sharedIslamicLesson = {
    ...verifiedIslamicUnit,
    id: 'ai-gen-unverified-islamic-content',
    titleAr: 'محتوى مولد غير متحقق',
    isSharedCommunity: true
  };
  islamicStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ISLAMIC_STUDIES_G6_GENERAL',
    JSON.stringify([staleIslamicLesson, sharedIslamicLesson])
  );
  islamicStudiesStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ISLAMIC_STUDIES_G6_GENERAL',
    JSON.stringify([sharedIslamicLesson])
  );
  islamicStudiesStorage.set('TEACHER_AI_CLOUD_SHARED_LECTURES', JSON.stringify([sharedIslamicLesson]));
  const isolatedSaudiIslamicStudies = loadSubjectLectures(
    'ISLAMIC_STUDIES', 'SA', 'G6', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiIslamicStudies.length === SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM.length &&
      isolatedSaudiIslamicStudies.every((lecture, index) =>
        lecture.id === SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM[index].id
      ) &&
      isolatedSaudiIslamicStudies[0].titleAr === SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM[0].titleAr &&
      !isolatedSaudiIslamicStudies.some((lecture) =>
        lecture.titleAr.includes('قديم') ||
        lecture.titleAr.includes('مولد') ||
        lecture.titleAr.includes('غير متحقق')
      ),
    'Verified Saudi Islamic Studies ignores stale, shared, cloud, and generated cached lessons'
  );
} finally {
  if (previousIslamicStudiesStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousIslamicStudiesStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

const previousGrade5IslamicStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const grade5IslamicStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => grade5IslamicStorage.get(key) ?? null,
    setItem: (key: string, value: string) => grade5IslamicStorage.set(key, value),
    removeItem: (key: string) => grade5IslamicStorage.delete(key),
    clear: () => grade5IslamicStorage.clear()
  }
});
try {
  const verifiedGrade5IslamicUnit = SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM[0];
  const staleGrade5IslamicLesson = {
    ...verifiedGrade5IslamicUnit,
    titleAr: 'محتوى قديم غير مطابق لفهرس الصف الخامس',
    isCompleted: true
  };
  const sharedGrade5IslamicLesson = {
    ...verifiedGrade5IslamicUnit,
    id: 'ai-gen-unverified-g5-islamic-content',
    titleAr: 'محتوى مولد غير متحقق للصف الخامس',
    isSharedCommunity: true
  };
  grade5IslamicStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ISLAMIC_STUDIES_G5_GENERAL',
    JSON.stringify([staleGrade5IslamicLesson, sharedGrade5IslamicLesson])
  );
  grade5IslamicStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ISLAMIC_STUDIES_G5_GENERAL',
    JSON.stringify([sharedGrade5IslamicLesson])
  );
  grade5IslamicStorage.set('TEACHER_AI_CLOUD_SHARED_LECTURES', JSON.stringify([sharedGrade5IslamicLesson]));
  const isolatedSaudiGrade5IslamicStudies = loadSubjectLectures(
    'ISLAMIC_STUDIES', 'SA', 'G5', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade5IslamicStudies.length === SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM.length &&
      isolatedSaudiGrade5IslamicStudies.every((lecture, index) =>
        lecture.id === SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM[index].id
      ) &&
      isolatedSaudiGrade5IslamicStudies[0].titleAr === SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM[0].titleAr &&
      !isolatedSaudiGrade5IslamicStudies.some((lecture) =>
        lecture.titleAr.includes('قديم') ||
        lecture.titleAr.includes('مولد') ||
        lecture.titleAr.includes('غير متحقق')
      ),
    'Verified Saudi Grade 5 Islamic Studies ignores stale, shared, cloud, and generated cached lessons'
  );
} finally {
  if (previousGrade5IslamicStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousGrade5IslamicStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

const previousGrade4IslamicStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const previousGrade3IslamicStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const grade3IslamicStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => grade3IslamicStorage.get(key) ?? null,
    setItem: (key: string, value: string) => grade3IslamicStorage.set(key, value),
    removeItem: (key: string) => grade3IslamicStorage.delete(key),
    clear: () => grade3IslamicStorage.clear()
  }
});
try {
  const verifiedGrade3IslamicUnit = SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM[0];
  const staleGrade3IslamicLesson = {
    ...verifiedGrade3IslamicUnit,
    id: 'stale-g3-islamic-unverified-content',
    titleAr: 'محتوى قديم غير مطابق لفهرس الصف الثالث'
  };
  const generatedGrade3IslamicLesson = {
    ...verifiedGrade3IslamicUnit,
    id: 'ai-gen-unverified-g3-islamic-content',
    titleAr: 'محتوى مولد غير متحقق للصف الثالث'
  };
  grade3IslamicStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ISLAMIC_STUDIES_G3_GENERAL',
    JSON.stringify([staleGrade3IslamicLesson, generatedGrade3IslamicLesson])
  );
  grade3IslamicStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ISLAMIC_STUDIES_G3_GENERAL',
    JSON.stringify([generatedGrade3IslamicLesson])
  );
  grade3IslamicStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([generatedGrade3IslamicLesson])
  );
  const isolatedSaudiGrade3IslamicStudies = loadSubjectLectures(
    'ISLAMIC_STUDIES', 'SA', 'G3', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade3IslamicStudies.length === SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM.length &&
      isolatedSaudiGrade3IslamicStudies.every((lecture, index) =>
        lecture.id === SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM[index].id
      ) &&
      isolatedSaudiGrade3IslamicStudies[0].titleAr === 'مقرر القرآن الكريم' &&
      !isolatedSaudiGrade3IslamicStudies.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مولد') ||
        lecture.titleAr.includes('غير متحقق')
      ),
    'Verified Saudi Grade 3 Islamic Studies ignores stale, shared, cloud, and generated cached lessons'
  );
} finally {
  if (previousGrade3IslamicStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousGrade3IslamicStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

const grade4IslamicStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => grade4IslamicStorage.get(key) ?? null,
    setItem: (key: string, value: string) => grade4IslamicStorage.set(key, value),
    removeItem: (key: string) => grade4IslamicStorage.delete(key),
    clear: () => grade4IslamicStorage.clear()
  }
});
try {
  const verifiedGrade4IslamicUnit = SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM[0];
  const staleGrade4IslamicLesson = {
    ...verifiedGrade4IslamicUnit,
    titleAr: 'محتوى قديم غير مطابق لفهرس الصف الرابع'
  };
  const generatedGrade4IslamicLesson = {
    ...verifiedGrade4IslamicUnit,
    id: 'ai-gen-unverified-g4-islamic-content',
    titleAr: 'محتوى مولد غير متحقق للصف الرابع'
  };
  grade4IslamicStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_ISLAMIC_STUDIES_G4_GENERAL',
    JSON.stringify([staleGrade4IslamicLesson, generatedGrade4IslamicLesson])
  );
  grade4IslamicStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_ISLAMIC_STUDIES_G4_GENERAL',
    JSON.stringify([generatedGrade4IslamicLesson])
  );
  grade4IslamicStorage.set('TEACHER_AI_CLOUD_SHARED_LECTURES', JSON.stringify([generatedGrade4IslamicLesson]));
  const isolatedSaudiGrade4IslamicStudies = loadSubjectLectures(
    'ISLAMIC_STUDIES', 'SA', 'G4', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade4IslamicStudies.length === SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM.length &&
      isolatedSaudiGrade4IslamicStudies.every((lecture, index) =>
        lecture.id === SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM[index].id
      ) &&
      isolatedSaudiGrade4IslamicStudies[0].titleAr === 'مقرر القرآن الكريم' &&
      !isolatedSaudiGrade4IslamicStudies.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.titleAr.includes('مولد') ||
        lecture.titleAr.includes('غير متحقق')
      ),
    'Verified Saudi Grade 4 Islamic Studies ignores stale, shared, cloud, and generated cached lessons'
  );
} finally {
  if (previousGrade4IslamicStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousGrade4IslamicStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

const previousSocialStudiesStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const socialStudiesStorage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => socialStudiesStorage.get(key) ?? null,
    setItem: (key: string, value: string) => socialStudiesStorage.set(key, value),
    removeItem: (key: string) => socialStudiesStorage.delete(key)
  }
});
try {
  const baseLecture = SAUDI_SOCIAL_STUDIES_CURRICULUM.G6![0];
  const foreignSharedLecture = { ...baseLecture, id: 'gen-cross-curriculum-saudi-g6' };
  socialStudiesStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_SAUDI_SOCIAL_STUDIES_G6_GENERAL',
    JSON.stringify([foreignSharedLecture])
  );
  socialStudiesStorage.set('TEACHER_AI_CLOUD_SHARED_LECTURES', JSON.stringify([foreignSharedLecture]));
  socialStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_SAUDI_SOCIAL_STUDIES_G6_GENERAL',
    JSON.stringify([baseLecture, { ...foreignSharedLecture, id: 'ai-gen-cross-curriculum-saudi-g6' }])
  );
  const isolatedSaudiSocialStudies = loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G6', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiSocialStudies.length === expectedSaudiSocialStudiesLessons.length &&
      isolatedSaudiSocialStudies.every((lecture) => lecture.id.startsWith('sa-social-g6-')) &&
      isolatedSaudiSocialStudies[0].titleAr === 'مفهوم التاريخ' &&
      isolatedSaudiSocialStudies[0].lessonNumberAr.endsWith('ص 12'),
    'Verified Saudi Grade 6 social studies rejects shared and generated cache entries while preserving textbook lesson references'
  );
  const staleGrade5SocialStudiesLecture = {
    ...SAUDI_G5_SOCIAL_STUDIES_CURRICULUM[0],
    titleAr: 'درس قديم غير مطابق لفهرس الصف الخامس'
  };
  socialStudiesStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_SAUDI_SOCIAL_STUDIES_G5_GENERAL',
    JSON.stringify([staleGrade5SocialStudiesLecture])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([foreignSharedLecture, staleGrade5SocialStudiesLecture])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_SAUDI_SOCIAL_STUDIES_G5_GENERAL',
    JSON.stringify([staleGrade5SocialStudiesLecture, {
      ...staleGrade5SocialStudiesLecture,
      id: 'ai-gen-stale-saudi-g5-social-studies'
    }])
  );
  const isolatedSaudiGrade5SocialStudies = loadSubjectLectures(
    'SAUDI_SOCIAL_STUDIES', 'SA', 'G5', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade5SocialStudies.length === SAUDI_G5_SOCIAL_STUDIES_LESSON_COUNT &&
      isolatedSaudiGrade5SocialStudies.every((lecture) => lecture.id.startsWith('sa-social-g5-')) &&
      isolatedSaudiGrade5SocialStudies[0].titleAr === 'الخلفاء الراشدون' &&
      !isolatedSaudiGrade5SocialStudies.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.id.includes('ai-gen')
      ),
    'Verified Saudi Grade 5 social studies rejects stale, shared, cloud, and generated cache entries'
  );
  const staleGrade4SocialStudiesLecture = {
    ...SAUDI_G4_SOCIAL_STUDIES_CURRICULUM[0],
    titleAr: 'درس قديم غير مطابق لفهرس الصف الرابع'
  };
  socialStudiesStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_PUBLIC_SAUDI_SOCIAL_STUDIES_G4_GENERAL',
    JSON.stringify([staleGrade4SocialStudiesLecture])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([foreignSharedLecture, staleGrade4SocialStudiesLecture])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_SAUDI_SOCIAL_STUDIES_G4_GENERAL',
    JSON.stringify([staleGrade4SocialStudiesLecture, {
      ...staleGrade4SocialStudiesLecture,
      id: 'ai-gen-stale-saudi-g4-social-studies'
    }])
  );
  const isolatedSaudiGrade4SocialStudies = loadSubjectLectures(
    'SAUDI_SOCIAL_STUDIES', 'SA', 'G4', 'PUBLIC', 'GENERAL'
  );
  assert(
    isolatedSaudiGrade4SocialStudies.length === SAUDI_G4_SOCIAL_STUDIES_LESSON_COUNT &&
      isolatedSaudiGrade4SocialStudies.every((lecture) => lecture.id.startsWith('sa-social-g4-')) &&
      isolatedSaudiGrade4SocialStudies[0].titleAr === 'الدراسات الاجتماعية' &&
      !isolatedSaudiGrade4SocialStudies.some((lecture) =>
        lecture.titleAr.includes('قديم') || lecture.id.includes('ai-gen')
      ),
    'Verified Saudi Grade 4 social studies rejects stale, shared, cloud, and generated cache entries'
  );
  assert(
    loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G6', 'PUBLIC', 'CS_ENGINEERING').length === 0 &&
      loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G6', 'INTERNATIONAL', 'GENERAL').length === 0 &&
      loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G4', 'PUBLIC', 'CS_ENGINEERING').length === 0 &&
      loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G4', 'PRIVATE', 'GENERAL').length === 0 &&
      loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G5', 'PUBLIC', 'CS_ENGINEERING').length === 0 &&
      loadSubjectLectures('SAUDI_SOCIAL_STUDIES', 'SA', 'G5', 'PRIVATE', 'GENERAL').length === 0,
    'Ineligible Saudi school tracks cannot load the social studies curriculum or its cache'
  );
  const generatedHistoryCacheEntry = {
    ...saudiGrade11History[0],
    id: 'ai-gen-history-extra-lesson',
    titleAr: 'محتوى مولد غير مطابق لفهرس التاريخ'
  };
  socialStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_HISTORY_G11_GENERAL',
    JSON.stringify([...saudiGrade11History, generatedHistoryCacheEntry])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([generatedHistoryCacheEntry])
  );
  const isolatedSaudiHistory = loadSubjectLectures('HISTORY', 'SA', 'G11', 'PUBLIC', 'GENERAL');
  assert(
    isolatedSaudiHistory.length === SAUDI_G11_HISTORY_LECTURES.length &&
      isolatedSaudiHistory.every((lecture) => !lecture.id.startsWith('ai-gen-')) &&
      isolatedSaudiHistory.every((lecture, index) => lecture.id === SAUDI_G11_HISTORY_LECTURES[index].id) &&
      loadSubjectLectures('HISTORY', 'SA', 'G11', 'PUBLIC', 'HEALTH_LIFE').length === 0 &&
      loadSubjectLectures('HISTORY', 'SA', 'G11', 'PRIVATE', 'GENERAL').length === 0,
    'Verified Saudi Grade 11 history rejects generated/shared additions and remains isolated in the lesson loader'
  );
  const generatedHealthScienceCacheEntry = {
    ...SAUDI_G11_HEALTH_SCIENCE_LECTURES[0],
    id: 'ai-gen-health-science-extra-lesson',
    titleAr: 'محتوى مولد غير مطابق لفهرس العلوم الصحية'
  };
  const healthScienceCacheKey =
    'TEACHER_AI_LECTURES_V5_SA_PUBLIC_HEALTH_SCIENCE_G11_HEALTH_LIFE';
  socialStudiesStorage.set(
    healthScienceCacheKey,
    JSON.stringify([...SAUDI_G11_HEALTH_SCIENCE_LECTURES, generatedHealthScienceCacheEntry])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_CLOUD_SHARED_LECTURES',
    JSON.stringify([generatedHealthScienceCacheEntry])
  );
  const isolatedSaudiHealthScience = loadSubjectLectures(
    'HEALTH_SCIENCE',
    'SA',
    'G11',
    'PUBLIC',
    'HEALTH_LIFE'
  );
  assert(
    isolatedSaudiHealthScience.length === SAUDI_G11_HEALTH_SCIENCE_LECTURES.length &&
      isolatedSaudiHealthScience.every((lecture, index) =>
        lecture.id === SAUDI_G11_HEALTH_SCIENCE_LECTURES[index].id
      ) &&
      loadSubjectLectures('HEALTH_SCIENCE', 'SA', 'G11', 'PUBLIC', 'GENERAL').length === 0 &&
      loadSubjectLectures('HEALTH_SCIENCE', 'SA', 'G11', 'PRIVATE', 'HEALTH_LIFE').length === 0 &&
      loadSubjectLectures('HEALTH_SCIENCE', 'G10', 'SA', 'PUBLIC', 'HEALTH_LIFE').length === 0,
    'Verified Saudi health science rejects shared/generated cache additions and remains isolated to its official route'
  );
  const mislabeledInternationalGeography = {
    ...baseLecture,
    id: 'sa-gov-leaked-international-geography',
    subject: 'GEOGRAPHY' as const,
    gradeLevel: 'G10' as const,
    educationType: 'INTERNATIONAL' as const
  };
  socialStudiesStorage.set(
    'TEACHER_AI_SHARED_LECS_SA_INTERNATIONAL_GEOGRAPHY_G10_GENERAL',
    JSON.stringify([mislabeledInternationalGeography])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_SA_INTERNATIONAL_GEOGRAPHY_G10_GENERAL',
    JSON.stringify([mislabeledInternationalGeography])
  );
  assert(
    loadSubjectLectures('GEOGRAPHY', 'SA', 'G10', 'INTERNATIONAL', 'GENERAL').length === 0,
    'Mislabeled Saudi public geography content is rejected from international shared and cached routes'
  );
  const mislabeledGlobalHistory = {
    ...mislabeledInternationalGeography,
    id: 'sa-gov-leaked-global-history',
    subject: 'HISTORY' as const,
    country: 'INTL' as const
  };
  socialStudiesStorage.set(
    'TEACHER_AI_SHARED_LECS_INTL_INTERNATIONAL_HISTORY_G10_GENERAL',
    JSON.stringify([mislabeledGlobalHistory])
  );
  socialStudiesStorage.set(
    'TEACHER_AI_LECTURES_V5_INTL_INTERNATIONAL_HISTORY_G10_GENERAL',
    JSON.stringify([mislabeledGlobalHistory])
  );
  assert(
    loadSubjectLectures('HISTORY', 'INTL', 'G10', 'INTERNATIONAL', 'GENERAL').length === 0,
    'Saudi legacy history is not reused as a global curriculum from shared or cached content'
  );
} finally {
  if (previousSocialStudiesStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousSocialStudiesStorage);
  } else {
    delete (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage;
  }
}

// Verify that changing country changes lesson title
assert(lecsEG[0].titleAr !== lecsSA[0].titleAr, `Country change transforms curriculum: Egypt title != Saudi title`);
assert(lecsEG[0].topicAr !== lecsSA[0].topicAr, `Country change transforms topic: Egypt topic != Saudi topic`);

console.log('\n====================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED!`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
