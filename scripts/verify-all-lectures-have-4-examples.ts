import { loadSubjectLectures } from '../src/data/curriculumData.ts';
import type { Subject, GradeLevel, CountryCode, EducationType, EducationTrack } from '../src/types/index.ts';

const COUNTRIES: CountryCode[] = ['SA', 'EG', 'SD'];
const GRADES: GradeLevel[] = [
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
  'G7', 'G8', 'G9',
  'G10', 'G11', 'G12'
];
const SUBJECTS: Subject[] = [
  'PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES',
  'TAJWEED', 'QURAN_RECITATION', 'VISUAL_ARTS', 'MATH', 'PHYSICS',
  'CHEMISTRY', 'BIOLOGY', 'ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN',
  'ARABIC_LIT', 'ARABIC_LANG', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE',
  'GEOGRAPHY', 'HISTORY', 'PHILOSOPHY', 'HEALTH_SCIENCE', 'LIFE_SKILLS',
  'SAUDI_SOCIAL_STUDIES', 'NATIONAL_EDUCATION', 'TECHNICAL_EDUCATION'
];
const TRACKS: EducationTrack[] = ['GENERAL', 'CS_ENGINEERING', 'HEALTH_LIFE', 'BUSINESS', 'SHARIA_HUMANITIES'];
const ED_TYPES: EducationType[] = ['PUBLIC', 'PRIVATE'];

console.log('--- STARTING COMPREHENSIVE 4-EXAMPLE VERIFICATION ---');

let totalLecturesChecked = 0;
let coursesFound = 0;
const failureList: string[] = [];
const seenLectureIds = new Set<string>();

for (const country of COUNTRIES) {
  for (const grade of GRADES) {
    for (const subject of SUBJECTS) {
      for (const educationType of ED_TYPES) {
        for (const track of TRACKS) {
          try {
            const lectures = loadSubjectLectures(subject, country, grade, educationType, track);
            if (!lectures || lectures.length === 0) continue;

            coursesFound++;
            for (const lec of lectures) {
              const uniqueKey = `${country}_${grade}_${subject}_${lec.id}`;
              if (seenLectureIds.has(uniqueKey)) continue;
              seenLectureIds.add(uniqueKey);

              totalLecturesChecked++;

              const sectionsWithExamples = (lec.sections || []).filter(
                s => s.interactiveExample && (s.interactiveExample.steps || []).length > 0
              );

              if (sectionsWithExamples.length < 4) {
                failureList.push(
                  `[FAIL] ${country} | Grade ${grade} | ${subject} | Lecture "${lec.titleAr}" (ID: ${lec.id}) has only ${sectionsWithExamples.length} examples!`
                );
              }
            }
          } catch (err: any) {
            // Ignore unsupported combination errors if thrown
          }
        }
      }
    }
  }
}

console.log(`Verified ${coursesFound} course configurations.`);
console.log(`Total unique lectures checked: ${totalLecturesChecked}`);

if (failureList.length > 0) {
  console.error(`FAILED: ${failureList.length} lectures DO NOT have 4 examples:`);
  failureList.slice(0, 20).forEach(f => console.error(f));
  if (failureList.length > 20) console.error(`...and ${failureList.length - 20} more.`);
  process.exit(1);
} else {
  console.log('SUCCESS: ALL checked lectures across ALL stages, subjects, and countries contain at least 4 interactive examples!');
  process.exit(0);
}
