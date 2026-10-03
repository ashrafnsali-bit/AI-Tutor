import { getCurriculumForSubject, loadSubjectLectures } from '../src/data/curriculumData';
import { getNationalTextbookInfo, SUPPORTED_COUNTRIES } from '../src/data/curriculumCountries';
import type { CountryCode, GradeLevel, Subject } from '../src/types';

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

// Verify that changing country changes lesson title
assert(lecsEG[0].titleAr !== lecsSA[0].titleAr, `Country change transforms curriculum: Egypt title != Saudi title`);
assert(lecsEG[0].topicAr !== lecsSA[0].topicAr, `Country change transforms topic: Egypt topic != Saudi topic`);

console.log('\n====================================================');
console.log(`SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED!`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
