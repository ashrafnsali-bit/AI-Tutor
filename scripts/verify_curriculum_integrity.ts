import { getCurriculumForSubject, loadSubjectLectures } from '../src/data/curriculumData';
import { getNationalTextbookInfo, SUPPORTED_COUNTRIES } from '../src/data/curriculumCountries';
import { getNationalLessonOverrides } from '../src/data/nationalCurricula';
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
import type { CountryCode, Subject } from '../src/types';

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
  const g11 = getCurriculumForSubject(subj, 'G11');
  const g12 = getCurriculumForSubject(subj, 'G12');

  assert(g10 && g10.length > 0, `${subj} G10 has ${g10?.length} lectures`);
  assert(g11 && g11.length > 0, `${subj} G11 has ${g11?.length} lectures`);
  assert(g12 && g12.length > 0, `${subj} G12 has ${g12?.length} lectures`);

  const g10Title = g10[0]?.titleAr || '';
  const g11Title = g11[0]?.titleAr || '';
  const g12Title = g12[0]?.titleAr || '';

  assert(g10Title !== g11Title, `${subj}: G10 ("${g10Title.substring(0, 30)}...") != G11 ("${g11Title.substring(0, 30)}...")`);
  assert(g11Title !== g12Title, `${subj}: G11 ("${g11Title.substring(0, 30)}...") != G12 ("${g12Title.substring(0, 30)}...")`);
  assert(g10Title !== g12Title, `${subj}: G10 != G12`);
}

// 3. Test Specific High School G10 Physics Real Topics vs G12
console.log('\n--- 3. Verifying G10 Physics is Kinematics & Dimensions (NOT Grade 12) ---');
const physG10 = getCurriculumForSubject('PHYSICS', 'G10');
const physG12 = getCurriculumForSubject('PHYSICS', 'G12');
assert(physG10[0].titleAr.includes('القياس') || physG10[0].titleAr.includes('الأبعاد'), 'G10 Physics covers Measurement & Dimensions');
assert(physG12[0].titleAr.includes('الكهربي') || physG12[0].titleAr.includes('التيار'), 'G12 Physics covers Electromagnetism & Modern Physics');

// 4. Test Country Adaptation for Middle & High School across all 13 countries
console.log('\n--- 4. Testing Country Adaptation Engine across all 13 Countries ---');
const testCountries: CountryCode[] = Object.keys(SUPPORTED_COUNTRIES) as CountryCode[];

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

// 5. Test Country-Specific Lesson Titles & Syllabus Transformation
console.log('\n--- 5. Testing National Lesson Titles & Topic Transformation per Country ---');
const lecsSA = loadSubjectLectures('PHYSICS', 'SA', 'G10');
const lecsEG = loadSubjectLectures('PHYSICS', 'EG', 'G10');
const lecsAE = loadSubjectLectures('PHYSICS', 'AE', 'G10');
const lecsJO = loadSubjectLectures('PHYSICS', 'JO', 'G10');
const lecsKW = loadSubjectLectures('PHYSICS', 'KW', 'G10');
const lecsMA = loadSubjectLectures('PHYSICS', 'MA', 'G10');
const lecsDZ = loadSubjectLectures('PHYSICS', 'DZ', 'G10');
const lecsTN = loadSubjectLectures('PHYSICS', 'TN', 'G10');
const lecsOM = loadSubjectLectures('PHYSICS', 'OM', 'G10');
const lecsQA = loadSubjectLectures('PHYSICS', 'QA', 'G10');
const lecsBH = loadSubjectLectures('PHYSICS', 'BH', 'G10');
const lecsIQ = loadSubjectLectures('PHYSICS', 'IQ', 'G10');
const lecsINTL = loadSubjectLectures('PHYSICS', 'INTL', 'G10');

assert(lecsEG[0].titleAr.includes('القياس الفيزيائي والكميات الأساسية'), `Egypt G10 Physics Lesson 1 is authentic Egyptian textbook: "${lecsEG[0].titleAr}"`);
assert(lecsAE[0].titleAr.includes('نظام ESE'), `UAE G10 Physics Lesson 1 is authentic ESE textbook: "${lecsAE[0].titleAr}"`);
assert(lecsJO[0].titleAr.includes('المنهاج المطور'), `Jordan G10 Physics Lesson 1 is authentic Collins textbook: "${lecsJO[0].titleAr}"`);
assert(lecsKW[0].titleAr.includes('المعادلات الحركية'), `Kuwait G10 Physics Lesson 1 is authentic Kuwaiti textbook: "${lecsKW[0].titleAr}"`);
assert(lecsMA[0].titleAr.includes('الجدع المشترك'), `Morocco G10 Physics Lesson 1 is authentic Moroccan textbook: "${lecsMA[0].titleAr}"`);
assert(lecsDZ[0].titleAr.includes('المنهاج الجزائري'), `Algeria G10 Physics Lesson 1 is authentic Algerian textbook: "${lecsDZ[0].titleAr}"`);
assert(lecsTN[0].titleAr.includes('البرنامج التونسي'), `Tunisia G10 Physics Lesson 1 is authentic Tunisian textbook: "${lecsTN[0].titleAr}"`);
assert(lecsOM[0].titleAr.includes('سلاسل كامبريدج بعُمان'), `Oman G10 Physics Lesson 1 is authentic Omani textbook: "${lecsOM[0].titleAr}"`);
assert(lecsQA[0].titleAr.includes('المسار العلمي القطري'), `Qatar G10 Physics Lesson 1 is authentic Qatari textbook: "${lecsQA[0].titleAr}"`);
assert(lecsBH[0].titleAr.includes('توحيد المسارات بالبحرين'), `Bahrain G10 Physics Lesson 1 is authentic Bahraini textbook: "${lecsBH[0].titleAr}"`);
assert(lecsIQ[0].titleAr.includes('المنهج العراقي'), `Iraq G10 Physics Lesson 1 is authentic Iraqi textbook: "${lecsIQ[0].titleAr}"`);
assert(lecsINTL[0].titleAr.includes('AP / IB Physics'), `International G10 Physics Lesson 1 is AP/IB: "${lecsINTL[0].titleAr}"`);

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

console.log('\n--- 7. Verifying Saudi Grade 8 Digital Skills against the 1448–2026 textbook ---');
const saudiGrade8DigitalSkills = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G8');
const saudiGrade9DigitalSkills = loadSubjectLectures('COMPUTER_SCIENCE', 'SA', 'G9');
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
} finally {
  if (previousLocalStorage) {
    Object.defineProperty(globalThis, 'localStorage', previousLocalStorage);
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
