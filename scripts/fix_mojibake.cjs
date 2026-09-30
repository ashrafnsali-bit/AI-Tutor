const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== 1. Restoring clean UTF-8 curriculumData.ts from 033a16a ===');
const cleanCurriculumBuffer = execSync('git show 033a16a:src/data/curriculumData.ts');
let cleanCurriculum = cleanCurriculumBuffer.toString('utf8');

// Add the new imports and mappings in clean UTF-8
const newImports = `import { CHEMISTRY_LECTURES, BIOLOGY_LECTURES, COMPUTER_SCIENCE_LECTURES } from './stemCurriculumData';
import { ISLAMIC_STUDIES_FULL, PRIMARY_ARABIC_FULL } from './islamicArabicCurriculum';\n`;

cleanCurriculum = cleanCurriculum.replace(
  "import type { Lecture, StudentProfile, Subject } from '../types';",
  "import type { Lecture, StudentProfile, Subject } from '../types';\n" + newImports
);

const oldRegistry = `export const SUBJECT_CURRICULA: Record<Subject, Lecture[]> = {
  PRIMARY_MATH: PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC: PRIMARY_ARABIC_LECTURES,
  PRIMARY_SCIENCE: PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES: ISLAMIC_STUDIES_LECTURES,
  MATH: MATH_LECTURES,
  PHYSICS: PHYSICS_LECTURES,
  CHEMISTRY: PHYSICS_LECTURES, // Mapped to science track
  BIOLOGY: GENERAL_SCIENCE_LECTURES,
  COMPUTER_SCIENCE: MATH_LECTURES, // Mapped to computational track
  ARABIC_LIT: ARABIC_LIT_LECTURES,
  ARABIC_LANG: ARABIC_LANG_LECTURES,
  GENERAL_SCIENCE: GENERAL_SCIENCE_LECTURES
};`;

const newRegistry = `export const SUBJECT_CURRICULA: Record<Subject, Lecture[]> = {
  PRIMARY_MATH: PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC: PRIMARY_ARABIC_FULL,
  PRIMARY_SCIENCE: PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES: ISLAMIC_STUDIES_FULL,
  MATH: MATH_LECTURES,
  PHYSICS: PHYSICS_LECTURES,
  CHEMISTRY: CHEMISTRY_LECTURES,
  BIOLOGY: BIOLOGY_LECTURES,
  COMPUTER_SCIENCE: COMPUTER_SCIENCE_LECTURES,
  ARABIC_LIT: ARABIC_LIT_LECTURES,
  ARABIC_LANG: ARABIC_LANG_LECTURES,
  GENERAL_SCIENCE: GENERAL_SCIENCE_LECTURES
};`;

cleanCurriculum = cleanCurriculum.replace(oldRegistry, newRegistry);
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'curriculumData.ts'), cleanCurriculum, 'utf8');
console.log('curriculumData.ts restored with clean Arabic!');
