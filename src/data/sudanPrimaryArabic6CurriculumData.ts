import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'arabic',
  subject: 'PRIMARY_ARABIC',
  titleAr: 'اللغة العربية',
  titleEn: 'Arabic Language',
  edition: 'الصف السادس الابتدائي',
  units: [
    { titleAr: 'مراجعة عامة', titleEn: 'General Review', firstPage: 1, lastPage: 29 },
    { titleAr: 'قيم وآداب', titleEn: 'Values and Manners', firstPage: 30, lastPage: 81 },
    { titleAr: 'حكم وطرائف', titleEn: 'Wisdom and Anecdotes', firstPage: 82, lastPage: 123 },
    { titleAr: 'متفرقات', titleEn: 'Miscellaneous Topics', firstPage: 124, lastPage: 155 },
    { titleAr: 'وطني', titleEn: 'My Country', firstPage: 156, lastPage: 189 }
  ],
  lessons: [
    grade6Lesson(1, 2, 4, 'أكرم من حاتم', 'More Generous Than Hatim', 'يعرض النص موقفاً في الكرم، ويستدل القارئ من أفعال الشخصيات على معنى الجود.', 'The reading presents an act of generosity; readers use the characters’ actions to understand what generosity means.'),
    grade6Lesson(1, 5, 7, 'ترشيد استهلاك المياه', 'Using Water Wisely', 'يربط الموضوع بين الماء والحياة اليومية، ويبين كيف يحافظ السلوك المسؤول على هذا المورد.', 'This topic connects water with daily life and shows how responsible choices help conserve it.'),
    grade6Lesson(1, 8, 10, 'المأمون ومؤدب ولديه', 'Al-Ma’mun and His Sons’ Teacher', 'يتابع القارئ حواراً ويستنتج منه آداب التعلم واحترام المعلم.', 'Follow a conversation and infer good learning manners and respect for a teacher.'),
    grade6Lesson(1, 11, 13, 'من وصايا حكيم', 'Advice from a Wise Person', 'تقدم الوصايا إرشادات موجزة؛ ويحدد المتعلم معناها ويصوغ تطبيقاً عملياً لها.', 'The advice offers concise guidance; identify its meaning and describe a practical way to follow it.'),
    grade6Lesson(1, 14, 16, 'أغنية الشمس', 'Song of the Sun', 'يستكشف المتعلم الصور والألفاظ في نص شعري، ثم يوضح الفكرة التي توحي بها.', 'Explore the imagery and words in a poem, then explain the idea they suggest.'),
    grade6Lesson(1, 17, 20, 'من خطبة حجة الوداع', 'From the Farewell Sermon', 'يتعرف المتعلم إلى معانٍ أخلاقية وإنسانية في الخطبة، ويستشهد بما يدل عليها من النص.', 'Explore ethical and human values in the sermon and support an explanation with details from the text.'),
    grade6Lesson(1, 21, 24, 'الإعاقة', 'Disability and Inclusion', 'يعرض الموضوع مفهوم احترام الأشخاص ذوي الإعاقة، ويشجع على إزالة العوائق والتعاون.', 'Learn about respecting people with disabilities, removing barriers, and cooperating inclusively.'),
    grade6Lesson(2, 30, 45, 'قراءة في القيم والآداب', 'Reading About Values and Manners', 'يقرأ المتعلم نصوص الوحدة، ويستخرج الفكرة الرئيسة والسلوك الإيجابي الذي تعرضه.', 'Read the unit texts, identify their main ideas, and recognize the positive conduct they describe.'),
    grade6Lesson(2, 46, 63, 'التراكيب اللغوية في سياق النص', 'Language Patterns in Context', 'يربط المتعلم بين التراكيب اللغوية ومعناها في الجملة والنص، ثم يستخدمها في أمثلة جديدة.', 'Connect language patterns to meaning in sentences and texts, then use them in new examples.'),
    grade6Lesson(2, 64, 81, 'التعبير عن قيمة نبيلة', 'Expressing a Positive Value', 'ينظم المتعلم فكرة قصيرة عن قيمة حسنة، ويدعمها بمثال واضح وعبارات مترابطة.', 'Organize a short explanation of a positive value, supporting it with a clear example and connected sentences.'),
    grade6Lesson(3, 82, 95, 'فهم الحكم والطرائف', 'Understanding Proverbs and Anecdotes', 'يستنتج المتعلم المغزى من موقف أو قول، ويميز بين المعنى المباشر وما يراد منه.', 'Infer the lesson in a saying or anecdote and distinguish literal wording from intended meaning.'),
    grade6Lesson(3, 96, 109, 'المفردات والتراكيب', 'Vocabulary and Language Patterns', 'يستعين المتعلم بسياق النص لفهم المفردات، ثم يلاحظ أثر التراكيب في وضوح المعنى.', 'Use context to understand vocabulary and notice how language patterns clarify meaning.'),
    grade6Lesson(3, 110, 123, 'حكاية موجزة وعبرتها', 'A Short Anecdote and Its Lesson', 'يرتب المتعلم أحداث الحكاية ويشرح العبرة مستنداً إلى ما ورد فيها.', 'Put the anecdote’s events in order and explain its lesson using details from the text.'),
    grade6Lesson(4, 124, 139, 'قراءة موضوعات متنوعة', 'Reading Varied Topics', 'يقارن المتعلم بين أفكار موضوعات مختلفة، ويستخرج معلومة صريحة واستنتاجاً مناسباً.', 'Compare ideas across varied readings, identifying an explicit detail and a reasonable inference.'),
    grade6Lesson(4, 140, 155, 'التلخيص والتعبير', 'Summarizing and Expressing Ideas', 'يلخص المتعلم موضوعاً في تسلسل واضح، ويعيد صياغة فكرته بلغة سليمة.', 'Summarize a topic in a clear sequence and restate its main idea in accurate language.'),
    grade6Lesson(5, 156, 172, 'السودان وطننا', 'Sudan, Our Homeland', 'يتناول المتعلم موضوعات عن الوطن، ويحدد المعلومات والأفكار التي تعزز الانتماء والمسؤولية.', 'Explore topics about the homeland and identify ideas that encourage belonging and responsibility.'),
    grade6Lesson(5, 173, 189, 'التعبير عن الوطن', 'Writing About the Homeland', 'ينظم المتعلم وصفاً أو فقرة عن الوطن، مستخدماً تفاصيل مترابطة وألفاظاً مناسبة.', 'Organize a description or paragraph about the homeland using relevant details and suitable words.')
  ]
};

export const SUDAN_PRIMARY_ARABIC_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_ARABIC_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_ARABIC_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
