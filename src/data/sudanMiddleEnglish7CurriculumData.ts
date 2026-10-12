import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const units = [
  { titleAr: 'مرحبًا بعودتكم', titleEn: 'Welcome Back!', firstPage: 1, lastPage: 8 },
  { titleAr: 'البيت الجميل', titleEn: 'Home Sweet Home', firstPage: 9, lastPage: 16 },
  { titleAr: 'نتعلم أشياء جديدة', titleEn: 'Learning New Things', firstPage: 17, lastPage: 24 },
  { titleAr: 'التكنولوجيا', titleEn: 'Technology', firstPage: 25, lastPage: 32 },
  { titleAr: 'أشخاص مميزون', titleEn: 'Amazing People', firstPage: 33, lastPage: 40 },
  { titleAr: 'الفنون', titleEn: 'The Arts', firstPage: 41, lastPage: 48 },
  { titleAr: 'الاحتفالات', titleEn: 'Celebrations', firstPage: 49, lastPage: 56 },
  { titleAr: 'السفر', titleEn: 'Travelling', firstPage: 57, lastPage: 64 }
];

const unitLessons = [
  ['You and Me', 'My Family', 'Free Time', 'Staying Healthy', 'Time', 'A Helping Hand', 'The Scorpion', 'New Friends'],
  ['Types of Houses', 'A Good Place to Live', 'Rooms and Furniture', 'Where is it?', 'Technology in Our Houses', 'Finding a Place', 'Safety at Home', 'My Family House'],
  ['At School', 'My School', 'School Rules', 'The Khalwa', 'My Favourite Subject', 'Different Schools', 'A Tidy School', 'Revision: School Time'],
  ['How Much?', 'Before Mobile Phones', 'Technology Everywhere', 'e-Learning', 'How Does It Work?', 'The Internet', 'A Request', 'Revision: Gadget Time'],
  ['Everyone is Good at Something', 'A Heroine', 'Living with Gorillas', 'The Best I Can Be', 'Role Models', 'A Special Award', 'An Amazing Man', 'Special People'],
  ['The Arts', 'Sudanese Arts', 'Three Famous Sudanese', 'Once Upon a Time', 'A Young Artist', 'Handicrafts', 'Sudanese Music', 'Which Art do you like?'],
  ['Eid Mubarak!', 'Celebrations around the World', 'A School Sports Day', 'Independence Day', 'International Children’s Day', 'A Wedding', 'A Special Day', 'Special Days'],
  ['Holiday Time', 'Getting Around', 'Places to Visit', 'Radom National Park', 'A Special Journey', 'A Visit to Dubai', 'My Journey', 'Time to Travel']
];

const lessons = unitLessons.flatMap((titles, unitIndex) => {
  const unit = units[unitIndex];
  return titles.map((title, lessonIndex) => {
    const page = unit.firstPage + lessonIndex;
    const focusEn = `Build listening, speaking, reading, and writing skills through “${title}” and the ${unit.titleEn.toLowerCase()} theme.`;
    const focusAr = `يتدرب المتعلم على مهارات الاستماع والتحدث والقراءة والكتابة من خلال موضوع «${title}» ضمن محور «${unit.titleAr}».`;
    return grade7Lesson(
      unitIndex + 1,
      page,
      page,
      `الدرس ${lessonIndex + 1}: ${title}`,
      title,
      focusAr,
      focusEn
    );
  });
});

const course: SudanMiddleGrade7Course = {
  key: 'english',
  subject: 'ENGLISH',
  titleAr: 'اللغة الإنجليزية',
  titleEn: 'English',
  edition: 'SMILE Book 7 — الطبعة الثانية 2021م',
  units,
  lessons
};

export const SUDAN_MIDDLE_ENGLISH_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_ENGLISH_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_ENGLISH_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
