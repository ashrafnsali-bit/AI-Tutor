import type { Subject } from '../types';
import {
  createSudanMiddleGrade7Lectures,
  grade7Lesson,
  type SudanMiddleGrade7Course,
  type SudanMiddleGrade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course = (
  key: string,
  subject: Subject,
  titleAr: string,
  titleEn: string,
  edition: string,
  units: SudanMiddleGrade7Course['units'],
  lessons: SudanMiddleGrade7Lesson[]
): SudanMiddleGrade7Course => ({
  key,
  subject,
  gradeLevel: 'G9',
  titleAr,
  titleEn,
  edition,
  units,
  lessons
});

const unit = (
  titleAr: string,
  titleEn: string,
  firstPage?: number,
  lastPage?: number
): SudanMiddleGrade7Course['units'][number] => ({ titleAr, titleEn, firstPage, lastPage });

const lesson = (
  unitNumber: number,
  page: number | undefined,
  lastPage: number | undefined,
  titleAr: string,
  titleEn: string,
  focusAr: string,
  focusEn: string
) => grade7Lesson(unitNumber, page, lastPage, titleAr, titleEn, focusAr, focusEn);

const courses: Partial<Record<Subject, SudanMiddleGrade7Course>> = {
  ENGLISH: course(
    'english',
    'ENGLISH',
    'اللغة الإنجليزية',
    'English',
    'SMILE Book 9 — Pupil’s Book — Intermediate Level 3',
    [
      unit('People and Science', 'People and Science', 1, 8),
      unit('Arts and Literature', 'Arts and Literature', 9, 16),
      unit('Around the World', 'Around the World', 17, 24),
      unit('Work and Play', 'Work and Play', 25, 32),
      unit('Food and Health', 'Food and Health', 33, 40),
      unit('Money and Shopping', 'Money and Shopping', 41, 48),
      unit('Learning', 'Learning', 49, 56),
      unit('Looking Back', 'Looking Back', 57, 64)
    ],
    [
      lesson(1, 1, 8, 'الناس والعلوم', 'People and Science', 'يتدرب المتعلم على فهم نصوص الوحدة والتحدث والكتابة حول الناس والعلوم.', 'Practise understanding, speaking, and writing about people and science.'),
      lesson(2, 9, 16, 'الفنون والأدب', 'Arts and Literature', 'يستخدم المتعلم مفردات وتراكيب الوحدة للتواصل حول الفنون والأدب.', 'Use the unit vocabulary and structures to communicate about arts and literature.'),
      lesson(3, 17, 24, 'حول العالم', 'Around the World', 'يقرأ ويتحدث عن أماكن وثقافات مختلفة مستخدمًا مهارات اللغة في الوحدة.', 'Read and talk about places and cultures using the language skills in the unit.'),
      lesson(4, 25, 32, 'العمل واللعب', 'Work and Play', 'يعبر المتعلم عن العمل ووقت الفراغ من خلال أنشطة الاستماع والقراءة والتواصل.', 'Communicate about work and leisure through listening, reading, and speaking activities.'),
      lesson(5, 33, 40, 'الطعام والصحة', 'Food and Health', 'يطبق مفردات الوحدة وتراكيبها في مواقف تتصل بالطعام والصحة.', 'Apply the unit vocabulary and structures in contexts about food and health.'),
      lesson(6, 41, 48, 'النقود والتسوق', 'Money and Shopping', 'يتواصل المتعلم باللغة الإنجليزية في مواقف البيع والشراء والتعامل مع النقود.', 'Communicate in English in shopping and money-related situations.'),
      lesson(7, 49, 56, 'التعلم', 'Learning', 'يقرأ ويتحدث عن التعلم ويطبق المهارات اللغوية الواردة في الوحدة.', 'Read and communicate about learning while applying the unit language skills.'),
      lesson(8, 57, 64, 'مراجعة', 'Looking Back', 'يراجع المتعلم المفردات والتراكيب ومهارات اللغة التي تناولتها الوحدات السابقة.', 'Review the vocabulary, structures, and language skills from the preceding units.')
    ]
  ),
  HISTORY: course(
    'history',
    'HISTORY',
    'التاريخ',
    'History',
    'كتاب التاريخ — الصف الثالث المتوسط',
    [
      unit('الثورة والدولة المهدية', 'The Mahdist Revolution and State'),
      unit('نظم الحكم والإدارة في فترة الحكم الثنائي', 'Government and Administration under Condominium Rule'),
      unit('مقاومة السودانيين للحكم الثنائي', 'Sudanese Resistance to Condominium Rule'),
      unit('التطورات السياسية والاجتماعية في السودان (1954–1985م)', 'Political and Social Developments in Sudan (1954–1985)'),
      unit('الحكم العثماني للولايات العربية ونتائجه', 'Ottoman Rule in the Arab Provinces and Its Consequences'),
      unit('تقسيم أفريقيا وحركات التحرر الوطني', 'The Partition of Africa and National Liberation Movements'),
      unit('التطورات العالمية بعد الحرب العالمية الثانية', 'Global Developments after the Second World War')
    ],
    [
      lesson(1, undefined, undefined, 'الثورة والدولة المهدية', 'The Mahdist Revolution and State', 'يتتبع نشأة الثورة المهدية وتطور الدولة المهدية في السودان ضمن سياقها التاريخي.', 'Trace the emergence of the Mahdist Revolution and the development of the Mahdist state in Sudan.'),
      lesson(2, undefined, undefined, 'نظم الحكم والإدارة في فترة الحكم الثنائي', 'Government and Administration under Condominium Rule', 'يصف نظم الحكم والإدارة في السودان خلال فترة الحكم الثنائي.', 'Describe systems of government and administration in Sudan under condominium rule.'),
      lesson(3, undefined, undefined, 'مقاومة السودانيين للحكم الثنائي', 'Sudanese Resistance to Condominium Rule', 'يحلل صور المقاومة السودانية للحكم الثنائي، ومنها الحركات الدينية والقبلية.', 'Examine Sudanese resistance to condominium rule, including religious and tribal movements.'),
      lesson(4, undefined, undefined, 'التطورات السياسية والاجتماعية في السودان (1954–1985م)', 'Political and Social Developments in Sudan (1954–1985)', 'يرتب أبرز التطورات السياسية والاجتماعية في السودان خلال الفترة المحددة.', 'Place major political and social developments in Sudan in chronological context.'),
      lesson(5, undefined, undefined, 'الحكم العثماني للولايات العربية ونتائجه', 'Ottoman Rule in the Arab Provinces and Its Consequences', 'يفسر مظاهر الحكم العثماني في الولايات العربية وما ترتب عليه.', 'Explain Ottoman rule in the Arab provinces and its consequences.'),
      lesson(6, undefined, undefined, 'تقسيم أفريقيا وحركات التحرر الوطني', 'The Partition of Africa and National Liberation Movements', 'يربط بين تقسيم القارة الأفريقية والاستعمار ونشأة حركات التحرر الوطني.', 'Connect the partition of Africa and colonial rule with national liberation movements.'),
      lesson(7, undefined, undefined, 'التطورات العالمية بعد الحرب العالمية الثانية', 'Global Developments after the Second World War', 'يتعرف التحولات العالمية الرئيسة التي أعقبت الحرب العالمية الثانية.', 'Identify major global changes following the Second World War.')
    ]
  )
};

export const SUDAN_MIDDLE_G9_LECTURES: Partial<Record<Subject, ReturnType<typeof createSudanMiddleGrade7Lectures>>> =
  Object.fromEntries(
    Object.entries(courses).map(([subject, courseData]) => [
      subject,
      createSudanMiddleGrade7Lectures(courseData)
    ])
  ) as Partial<Record<Subject, ReturnType<typeof createSudanMiddleGrade7Lectures>>>;

export function getSudanMiddleGrade9Curriculum(subject: Subject) {
  return SUDAN_MIDDLE_G9_LECTURES[subject] ?? null;
}
