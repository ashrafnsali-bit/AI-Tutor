import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'geography',
  subject: 'GEOGRAPHY',
  titleAr: 'الجغرافيا',
  titleEn: 'Geography',
  edition: 'الصف السادس الابتدائي',
  units: [
    { titleAr: 'البيئة الطبيعية للوطن', titleEn: 'The Homeland’s Natural Environment', firstPage: 1, lastPage: 14 },
    { titleAr: 'الموارد الإنتاجية', titleEn: 'Productive Resources', firstPage: 15, lastPage: 40 },
    { titleAr: 'الجغرافيا البشرية', titleEn: 'Human Geography', firstPage: 41, lastPage: 55 }
  ],
  lessons: [
    grade6Lesson(1, 2, 3, 'بيئات السودان المختلفة', 'Sudan’s Different Environments', 'يتعرف المتعلم إلى تنوع البيئات في السودان، ويلاحظ ارتباط خصائصها بالمكان والظروف الطبيعية.', 'Explore the varied environments of Sudan and notice how their features relate to place and natural conditions.'),
    grade6Lesson(1, 4, 4, 'خطوط الطول والعرض', 'Lines of Longitude and Latitude', 'تساعد خطوط الطول والعرض على تحديد المواقع ووصف مواضع الأماكن على الخرائط.', 'Lines of longitude and latitude help locate and describe places on maps.'),
    grade6Lesson(1, 5, 14, 'موقع السودان وتنوعه', 'Sudan’s Location and Diversity', 'يحدد المتعلم موقع السودان ويستكشف تنوع مظاهره الطبيعية وأقاليمه.', 'Locate Sudan and explore the diversity of its natural features and regions.'),
    grade6Lesson(2, 15, 26, 'الزراعة', 'Agriculture', 'تسهم الزراعة في توفير الغذاء والمواد الأولية، وترتبط ممارستها بالماء والتربة والظروف المحلية.', 'Agriculture provides food and raw materials and depends on water, soil, and local conditions.'),
    grade6Lesson(2, 27, 28, 'الصناعة', 'Industry', 'تحول الصناعة المواد الأولية إلى منتجات، وتستفيد من الموارد والمهارات ووسائل النقل.', 'Industry turns raw materials into products and relies on resources, skills, and transport.'),
    grade6Lesson(2, 29, 36, 'الرعي', 'Pastoralism', 'يرتبط الرعي بتوافر المراعي والمياه وحركة القطعان، ويعد مورداً لمجتمعات كثيرة.', 'Pastoralism depends on grazing, water, and herd movement and supports many communities.'),
    grade6Lesson(2, 37, 40, 'التعدين', 'Mining', 'يوفر التعدين معادن وموارد تدخل في الصناعة والبناء، ويحتاج إلى استخدام مسؤول للموارد.', 'Mining supplies minerals used in industry and construction and requires responsible resource use.'),
    grade6Lesson(3, 41, 43, 'السكان في السودان', 'The Population of Sudan', 'يدرس المتعلم السكان وتوزعهم، ويلاحظ صلة الاستقرار البشري بالمكان والموارد.', 'Study Sudan’s population and distribution and consider how settlement relates to place and resources.'),
    grade6Lesson(3, 44, 54, 'المرافق الخدمية في السودان', 'Public Services in Sudan', 'تقدم المرافق الخدمية احتياجات للمجتمع، ويستكشف المتعلم دورها في حياة السكان.', 'Public services meet community needs; explore their role in people’s lives.'),
    grade6Lesson(3, 55, 55, 'مدن السودان', 'Cities of Sudan', 'يتعرف المتعلم إلى مدن السودان ومواقعها وأدوارها في حياة البلاد.', 'Learn about Sudan’s cities, their locations, and their roles in the country.')
  ]
};

export const SUDAN_PRIMARY_GEOGRAPHY_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_GEOGRAPHY_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_GEOGRAPHY_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
