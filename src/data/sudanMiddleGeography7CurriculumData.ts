import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'geography',
  subject: 'GEOGRAPHY',
  titleAr: 'الجغرافيا',
  titleEn: 'Geography',
  edition: 'الصف الأول المتوسط',
  units: [
    { titleAr: 'قارة إفريقيا', titleEn: 'Africa', firstPage: 2, lastPage: 36 },
    { titleAr: 'قارة آسيا', titleEn: 'Asia', firstPage: 37, lastPage: 58 },
    { titleAr: 'قارة أوروبا', titleEn: 'Europe', firstPage: 59, lastPage: 100 }
  ],
  lessons: [
    grade7Lesson(1, 4, 11, 'قارات العالم', 'The Continents of the World', 'يتعرف المتعلم القارات ومواقعها النسبية على خريطة العالم.', 'Identify the continents and their relative locations on a world map.'),
    grade7Lesson(1, 12, 13, 'قارة إفريقيا', 'The Continent of Africa', 'يحدد موقع إفريقيا وحدودها والبحار والمحيطات المحيطة بها.', 'Locate Africa and identify its boundaries and surrounding seas and oceans.'),
    grade7Lesson(1, 14, 18, 'السطح والتضاريس في إفريقيا', 'African Relief and Landforms', 'يفسر تنوع سطح إفريقيا بين الهضاب والجبال والأحواض والسهول.', 'Describe Africa’s varied relief, including plateaus, mountains, basins, and plains.'),
    grade7Lesson(1, 19, 21, 'التصريف وموارد المياه', 'Drainage and Water Resources', 'يتتبع الأنهار وأحواض التصريف ويبين أهميتها للمياه والسكان والنشاط الاقتصادي.', 'Trace rivers and drainage basins and explain their importance to water, people, and economic activity.'),
    grade7Lesson(1, 22, 25, 'المناخ في إفريقيا', 'Climate in Africa', 'يربط الموقع والعوامل الطبيعية بتنوع المناخ في أقاليم القارة.', 'Connect location and physical factors to climate differences across the continent.'),
    grade7Lesson(1, 26, 29, 'الأقاليم المناخية والنباتية', 'Climate and Vegetation Regions', 'يقارن بين الأقاليم المناخية والنباتية وعلاقة النبات بكمية المطر والحرارة.', 'Compare climate and vegetation regions and relate plant cover to rainfall and temperature.'),
    grade7Lesson(1, 30, 36, 'السكان والنشاط الاقتصادي', 'Population and Economic Activity', 'يصف توزيع السكان وأمثلة من الأنشطة الاقتصادية في إفريقيا.', 'Describe population distribution and examples of economic activity in Africa.'),
    grade7Lesson(2, 38, 38, 'جغرافية آسيا الطبيعية', 'The Physical Geography of Asia', 'يعرض السمات الطبيعية الكبرى لقارة آسيا وموقعها واتساعها.', 'Describe Asia’s location, extent, and major physical features.'),
    grade7Lesson(2, 39, 44, 'التضاريس في آسيا', 'Asian Landforms', 'يميز السلاسل الجبلية والهضاب والسهول والأحواض الرئيسة في آسيا.', 'Identify Asia’s major mountain ranges, plateaus, plains, and basins.'),
    grade7Lesson(2, 45, 50, 'المناخ والنباتات الطبيعية في آسيا', 'Climate and Natural Vegetation in Asia', 'يربط تنوع المناخ الآسيوي بتوزيع الأقاليم والنباتات الطبيعية.', 'Relate Asia’s varied climates to the distribution of natural vegetation.'),
    grade7Lesson(2, 51, 55, 'السكان والنشاط الاقتصادي في آسيا', 'Population and Economic Activity in Asia', 'يقارن بين توزيع السكان وبعض الأنشطة الاقتصادية في أقاليم آسيا.', 'Compare population distribution and economic activities across Asian regions.'),
    grade7Lesson(2, 56, 58, 'أهم المشكلات البيئية في آسيا', 'Major Environmental Issues in Asia', 'يحدد مشكلات بيئية تؤثر في أقاليم آسيا ويستنتج سبلًا عامة للحد منها.', 'Identify environmental issues affecting Asia and consider general ways to reduce them.'),
    grade7Lesson(3, 61, 64, 'قارة أوروبا', 'The Continent of Europe', 'يحدد موقع أوروبا وخصائصها العامة على خريطة العالم.', 'Locate Europe and describe its general characteristics on a world map.'),
    grade7Lesson(3, 65, 67, 'التضاريس في أوروبا', 'European Landforms', 'يقارن بين المرتفعات والسهول الرئيسة في أوروبا.', 'Compare Europe’s major highlands and plains.'),
    grade7Lesson(3, 68, 69, 'التصريف المائي في أوروبا', 'European Drainage', 'يتعرف شبكات الأنهار وموارد المياه في القارة وأهميتها.', 'Explore Europe’s river systems and water resources and explain their importance.'),
    grade7Lesson(3, 70, 79, 'المناخ والأقاليم النباتية في أوروبا', 'Climate and Vegetation Regions in Europe', 'يفسر اختلاف المناخ والنبات الطبيعي في أقاليم أوروبا.', 'Explain differences in climate and natural vegetation across Europe.'),
    grade7Lesson(3, 80, 80, 'الجغرافيا البشرية والاقتصادية', 'Human and Economic Geography', 'يربط توزيع السكان والأنشطة الاقتصادية بخصائص البيئة الأوروبية.', 'Relate population patterns and economic activity to Europe’s environmental features.'),
    grade7Lesson(3, 81, 83, 'السكان في أوروبا', 'Population in Europe', 'يصف توزيع السكان وبعض خصائصهم في أوروبا.', 'Describe population distribution and selected population characteristics in Europe.'),
    grade7Lesson(3, 84, 92, 'النشاط الاقتصادي في أوروبا', 'Economic Activity in Europe', 'يصنف أمثلة للأنشطة الاقتصادية الأوروبية ويفسر صلتها بالموارد والموقع.', 'Classify examples of European economic activity and relate them to resources and location.'),
    grade7Lesson(3, 93, 95, 'أهم المشكلات البيئية في أوروبا', 'Major Environmental Issues in Europe', 'يتعرف قضايا بيئية في أوروبا ويقترح سلوكًا مسؤولًا تجاه البيئة.', 'Explore environmental issues in Europe and suggest responsible environmental actions.'),
    grade7Lesson(3, 96, 100, 'الجزر البريطانية', 'The British Isles', 'يحدد الجزر البريطانية وموقعها وملامحها الجغرافية العامة.', 'Locate the British Isles and describe their general geographical features.')
  ]
};

export const SUDAN_MIDDLE_GEOGRAPHY_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_GEOGRAPHY_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_GEOGRAPHY_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
