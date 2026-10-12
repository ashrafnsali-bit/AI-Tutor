import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ENGLISH_G1_BOOK = {
  title: 'SMILE Starter 1 Pupil’s Book',
  edition: '2nd Edition 2020',
  units: [
    { title: 'Hello!', page: 1, activityPage: 41 },
    { title: 'Numbers', page: 9, activityPage: 49 },
    { title: 'Colours', page: 17, activityPage: 57 },
    { title: 'About Me', page: 25, activityPage: 65 },
    { title: 'My School', page: 33, activityPage: 73 }
  ]
} as const;

interface LessonSpec {
  title: string;
  focus: string;
  question: string;
  options: [string, string, string];
  answerIndex: number;
}

const lessonSpecs: LessonSpec[] = [
  { title: 'Greetings and the alphabet', focus: 'Listen to and say simple greetings; recognize and chant the English alphabet.', question: 'Which is a greeting?', options: ['Hello!', 'Seven', 'Blue'], answerIndex: 0 },
  { title: 'Numbers one to four', focus: 'Listen, point, and count from one to four; connect the number words to familiar classroom objects.', question: 'How many is 2?', options: ['Two', 'Five', 'Ten'], answerIndex: 0 },
  { title: 'Numbers five to ten', focus: 'Recognize and say the numbers from five to ten, and practice reading simple words beginning with c and d.', question: 'Which number comes after five?', options: ['Six', 'Four', 'Two'], answerIndex: 0 },
  { title: 'Asking and saying names', focus: 'Ask and answer a simple question about a person’s name, and recognize words beginning with e and f.', question: 'Which question asks someone’s name?', options: ['What is your name?', 'How many cats?', 'What colour is it?'], answerIndex: 0 },
  { title: 'Introducing people', focus: 'Use a simple introduction to identify a person and recognize familiar words beginning with g and h.', question: 'Which phrase introduces a person?', options: ['This is my friend.', 'It is ten.', 'The light is red.'], answerIndex: 0 },
  { title: 'Asking where someone is from', focus: 'Listen to a short dialogue about nationality and practice respectful introductions; recognize i and j words.', question: 'Which question asks about nationality?', options: ['Are you Sudanese?', 'How many are there?', 'Where is my pencil?'], answerIndex: 0 },
  { title: 'Asking how someone feels', focus: 'Ask and answer a simple question about how someone is, and recognize words beginning with k and l.', question: 'Which reply tells how someone feels?', options: ['I am fine, thanks.', 'It is a bag.', 'There are four.'], answerIndex: 0 },
  { title: 'Letters a to l', focus: 'Listen for and identify the letters a to l in familiar words, then say the letter sounds and example words.', question: 'Which word begins with the letter b?', options: ['Bag', 'Egg', 'Flag'], answerIndex: 0 },

  { title: 'Letters m and n', focus: 'Recognize, say, and hear m and n in familiar words; practice counting with a short chant.', question: 'Which word begins with m?', options: ['Man', 'Pen', 'Van'], answerIndex: 0 },
  { title: 'Age and numbers one to nine', focus: 'Ask and answer a simple question about age and count objects using numbers from one to nine.', question: 'Which question asks a person’s age?', options: ['How old are you?', 'What colour is it?', 'Where is the book?'], answerIndex: 0 },
  { title: 'Counting from ten to fifteen', focus: 'Count and say numbers from ten to fifteen, and recognize q and r in familiar words.', question: 'Which number comes after twelve?', options: ['Thirteen', 'Ten', 'Nine'], answerIndex: 0 },
  { title: 'Counting to twenty', focus: 'Count objects and ask or answer how many there are; recognize the number words and s and t.', question: 'Which question asks for a quantity?', options: ['How many cats are there?', 'What is your name?', 'Are you fine?'], answerIndex: 0 },
  { title: 'Little Ali and counting', focus: 'Follow a short picture story and count groups of animals, using number words and u and v examples.', question: 'What skill helps describe the animal groups?', options: ['Counting', 'Naming colours only', 'Saying goodbye'], answerIndex: 0 },
  { title: 'Finding the way home', focus: 'Follow simple dialogue in a story and understand a short direction such as “This way”; recognize w and x.', question: 'Which phrase gives a direction?', options: ['This way.', 'I am eight.', 'It is green.'], answerIndex: 0 },
  { title: 'Telling the time on the hour', focus: 'Ask and answer about a clock time using a simple “o’clock” expression; recognize y and z.', question: 'Which phrase tells a time on the hour?', options: ['Seven o’clock.', 'A blue bag.', 'My name is Ali.'], answerIndex: 0 },
  { title: 'Letters m to z', focus: 'Listen for and identify letters m to z in familiar words, then review the alphabet sounds.', question: 'Which letter comes after x?', options: ['y', 'w', 't'], answerIndex: 0 },

  { title: 'Following colour instructions', focus: 'Listen to and follow simple instructions about colours, then name a colour in a classroom activity.', question: 'Which word names a colour?', options: ['Red', 'Desk', 'Hello'], answerIndex: 0 },
  { title: 'Naming common colours', focus: 'Recognize and say common colour words, then use a short phrase to name an object’s colour.', question: 'Which is a colour word?', options: ['Yellow', 'Chair', 'Four'], answerIndex: 0 },
  { title: 'Traffic lights', focus: 'Recognize the colours in a traffic-light context and describe a light using a colour word.', question: 'Which colour means stop at a traffic light?', options: ['Red', 'Blue', 'White'], answerIndex: 0 },
  { title: 'Asking about colours and letters', focus: 'Ask what colour an object is, count letters in a short colour word, and answer with a colour.', question: 'Which question asks about an object’s colour?', options: ['What colour is it?', 'How old are you?', 'Where is my toy?'], answerIndex: 0 },
  { title: 'The Sudanese flag', focus: 'Name the colours of the Sudanese flag and describe a flag using a simple sentence about its colours.', question: 'Which set includes colours of the Sudanese flag?', options: ['Red, white, black, and green', 'Pink and purple only', 'Blue and orange only'], answerIndex: 0 },
  { title: 'Describing pictures and colours', focus: 'Look at a picture and describe an object with a short sentence that names its colour.', question: 'Which sentence describes an object and its colour?', options: ['It is a blue bag.', 'How old are you?', 'There are ten.'], answerIndex: 0 },
  { title: 'Describing people', focus: 'Use simple words for colours and appearance to answer questions about a person in a picture.', question: 'Which question asks about eye colour?', options: ['What colour are her eyes?', 'Where is the desk?', 'How many bags?'], answerIndex: 0 },
  { title: 'Asking and answering about colours', focus: 'Ask and answer questions about the colours of people and objects in pictures.', question: 'Which answer completes “What colour is it?”', options: ['It is green.', 'I am eight.', 'This is my friend.'], answerIndex: 0 },

  { title: 'What I have: fruit and colours', focus: 'Use a simple “I have got” pattern to talk about familiar fruit and describe its colour.', question: 'Which sentence says you have something?', options: ['I have got a lemon.', 'Where are you from?', 'How many are there?'], answerIndex: 0 },
  { title: 'Describing people and their things', focus: 'Ask who a person is and describe a familiar object the person has, using short model sentences.', question: 'Which question asks who a person is?', options: ['Who is that boy?', 'What colour is the light?', 'What time is it?'], answerIndex: 0 },
  { title: 'Parts of the body', focus: 'Listen, point to, and name familiar parts of the body.', question: 'Which word names a body part?', options: ['Hand', 'Desk', 'Green'], answerIndex: 0 },
  { title: 'Nationality, age, and class', focus: 'Ask and answer simple questions about nationality, age, and class in a short dialogue.', question: 'Which question asks about a school class?', options: ['What class are you in?', 'What colour is your bag?', 'How many cats?'], answerIndex: 0 },
  { title: 'Describing animals', focus: 'Match simple descriptions to animals and talk about a visible feature using “It has got…” or “They have got…”.', question: 'Which phrase describes an animal’s feature?', options: ['It has got a long neck.', 'It is nine o’clock.', 'My name is Cathy.'], answerIndex: 0 },
  { title: 'Animal characters and greetings', focus: 'Listen and act out a short dialogue with animal characters, using greetings and simple descriptions.', question: 'Which phrase is a greeting?', options: ['Hello!', 'Under the desk', 'Black and white'], answerIndex: 0 },
  { title: 'A picture of the Nile', focus: 'Look at a picture and ask or answer simple questions about familiar places and things, including the Nile.', question: 'Which word names a river in Sudan?', options: ['The Nile', 'A pencil', 'A classroom'], answerIndex: 0 },
  { title: 'Asking about pictures', focus: 'Ask and answer a simple “Have you got…?” question about a picture and recognize familiar names and letters.', question: 'Which answer means that you have it?', options: ['Yes, I have.', 'No, I am not.', 'It is red.'], answerIndex: 0 },

  { title: 'School objects and spelling', focus: 'Recognize familiar school objects, follow a pointing instruction, and spell a short classroom word.', question: 'Which word names a school object?', options: ['Desk', 'Happy', 'Eight'], answerIndex: 0 },
  { title: 'Asking what an object is', focus: 'Ask what an object is in English, answer with a simple noun phrase, and describe a familiar property.', question: 'Which question asks for an object’s name?', options: ['What is this in English?', 'How old are you?', 'Where are you from?'], answerIndex: 0 },
  { title: 'Where things are: next to', focus: 'Ask where a person or object is and use “next to” to describe a position.', question: 'Which phrase describes position beside something?', options: ['Next to', 'How old', 'My name'], answerIndex: 0 },
  { title: 'Describing position and size', focus: 'Use simple position words such as “on” and describe objects as small or big.', question: 'Which word describes position on a surface?', options: ['On', 'Green', 'Hello'], answerIndex: 0 },
  { title: 'Where is my toy?', focus: 'Understand and use simple location expressions such as “in”, “under”, and “in the classroom”.', question: 'Which phrase tells where an object is?', options: ['In your bag.', 'I am fine.', 'It is blue.'], answerIndex: 0 },
  { title: 'Asking where an object is', focus: 'Ask whether an object is in or under a familiar place, and use a letter clue in a simple guessing game.', question: 'Which question asks about location?', options: ['Is it under your chair?', 'What colour is it?', 'How old are you?'], answerIndex: 0 },
  { title: 'Meeting someone: name, age, and place', focus: 'Ask and answer short questions about a person’s name, age, and where they are from.', question: 'Which question asks where someone is from?', options: ['Where are you from?', 'What is this?', 'How many are there?'], answerIndex: 0 },
  { title: 'Finding a hidden classroom object', focus: 'Read and answer simple location questions using “in”, “under”, and “behind”; recognize the “th” sound in familiar words.', question: 'Which word tells that something is at the back of another thing?', options: ['Behind', 'Three', 'Thanks'], answerIndex: 0 }
];

const unitActivitySpecs: LessonSpec[] = [
  { title: 'Hello! — alphabet and word practice', focus: 'Review the unit by writing and matching familiar letters and words, then read each word aloud.', question: 'Which word begins with b?', options: ['Bag', 'Egg', 'Flag'], answerIndex: 0 },
  { title: 'Numbers — letters, numbers, and capitals', focus: 'Review number and letter recognition, copy examples, practice capital letters, and play a short matching game.', question: 'Which number comes after four?', options: ['Five', 'Three', 'One'], answerIndex: 0 },
  { title: 'Colours — letters, numbers, and a picture', focus: 'Review colour words by saying, copying, and colouring a picture; connect familiar letters and numbers.', question: 'Which word names a colour?', options: ['Green', 'Desk', 'Name'], answerIndex: 0 },
  { title: 'About Me — personal language review', focus: 'Practice the unit’s words and sentence patterns for names, age, appearance, and familiar people.', question: 'Which question asks someone’s name?', options: ['What is your name?', 'Where is the ruler?', 'What colour is the light?'], answerIndex: 0 },
  { title: 'My School — letters and classroom words', focus: 'Review school vocabulary, write and join familiar letters, and listen for letters in classroom words.', question: 'Which word names a place for learning?', options: ['School', 'Crocodile', 'Lemon'], answerIndex: 0 }
];

const arabicLessonTitles = [
  'التحية والحروف الإنجليزية',
  'الأعداد من واحد إلى أربعة',
  'الأعداد من خمسة إلى عشرة',
  'السؤال عن الاسم والتعريف به',
  'التعريف بالأشخاص',
  'السؤال عن الجنسية',
  'السؤال عن الحال',
  'الحروف من A إلى L',
  'الحرفان M وN',
  'العمر والأعداد من واحد إلى تسعة',
  'العد من عشرة إلى خمسة عشر',
  'العد حتى عشرين',
  'قصة علي الصغير والعد',
  'إرشاد علي إلى طريق المنزل',
  'قراءة الوقت بالساعات',
  'الحروف من M إلى Z',
  'اتباع تعليمات الألوان',
  'أسماء الألوان الشائعة',
  'إشارات المرور',
  'السؤال عن الألوان والحروف',
  'ألوان علم السودان',
  'وصف الصور والألوان',
  'وصف الأشخاص',
  'السؤال والإجابة عن الألوان',
  'ما أملكه: الفاكهة والألوان',
  'وصف الأشخاص وما يملكون',
  'أجزاء الجسم',
  'الجنسية والعمر والصف',
  'وصف الحيوانات',
  'شخصيات الحيوانات والتحية',
  'صورة للنيل',
  'السؤال عن الصور',
  'أدوات المدرسة وتهجئة الكلمات',
  'السؤال عن أسماء الأشياء',
  'المواقع: بجانب',
  'وصف الموقع والحجم',
  'أين لعبتي؟',
  'السؤال عن مكان الأشياء',
  'التعارف: الاسم والعمر والبلد',
  'العثور على شيء مخفي في الصف'
];

function createSudanGrade1EnglishLecture(
  unitIndex: number,
  lessonInUnit: number,
  spec: LessonSpec,
  activity = false
): Lecture {
  const unit = SUDAN_PRIMARY_ENGLISH_G1_BOOK.units[unitIndex];
  const order = unitIndex * 9 + lessonInUnit;
  const id = `sd-primary-en-g1-${order}`;
  const title = activity ? `Unit ${unitIndex + 1} Activity: ${spec.title}` : `Unit ${unitIndex + 1}, Lesson ${lessonInUnit}: ${spec.title}`;
  const options = spec.options;
  const explanation = `The correct answer is “${options[spec.answerIndex]}”.`;
  const titleAr = activity
    ? `نشاط الوحدة ${unitIndex + 1}: ${unitActivitySpecs[unitIndex].title}`
    : `الوحدة ${unitIndex + 1}، الدرس ${lessonInUnit}: ${arabicLessonTitles[order - 1]}`;
  const focusAr = `يتدرب المتعلم على ${activity ? unit.title : arabicLessonTitles[order - 1]} من خلال الاستماع والترديد واستخدام الكلمات الإنجليزية في مواقف وأسئلة قصيرة.`;
  const optionsAr = [...options];

  return {
    id,
    order,
    titleAr,
    titleEn: title,
    subtitleAr: `اللغة الإنجليزية — الصف الأول الأساسي — ${unit.title}`,
    subtitleEn: `SMILE Starter 1 — Unit ${unitIndex + 1}: ${unit.title}`,
    descriptionAr: focusAr,
    descriptionEn: spec.focus,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ENGLISH',
    gradeLevel: 'G1',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الأول الأساسي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 1 Basic Level — Republic of the Sudan',
    termAr: 'كتاب التلميذ — SMILE Starter 1',
    termEn: 'Pupil’s Book — SMILE Starter 1',
    unitTitleAr: unit.title,
    unitTitleEn: `Unit ${unitIndex + 1}: ${unit.title}`,
    lessonNumberAr: activity ? `نشاط الوحدة ${unitIndex + 1}` : `الدرس ${lessonInUnit}`,
    lessonNumberEn: activity ? `Unit ${unitIndex + 1} Activity` : `Lesson ${lessonInUnit}`,
    warmupHookAr: focusAr,
    warmupHookEn: spec.focus,
    learningOutcomesAr: [focusAr, 'يستمع إلى الكلمات الإنجليزية ويرددها ويستخدمها في تدريب شفهي قصير.'],
    learningOutcomesEn: [spec.focus, 'Listen, repeat, and use the target words in a short speaking practice.'],
    keyConceptsAr: [titleAr, focusAr],
    keyConceptsEn: [spec.title, spec.focus],
    summaryAr: focusAr,
    summaryEn: spec.focus,
    sections: [{
      titleAr,
      titleEn: spec.title,
      contentAr: `${focusAr}\n\nتدريب شفهي: استمع إلى الكلمات الإنجليزية، ورددها، ثم استخدمها في سؤال وجواب قصير مع زميل أو معلم.`,
      contentEn: `${spec.focus}\n\nSpeaking practice: listen to the words, repeat them, and use them in a short question-and-answer exchange with a classmate or teacher.`
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم ${activity ? 'نشاط الوحدة' : 'الدرس'} ${activity ? unitIndex + 1 : lessonInUnit}`,
      titleEn: `${activity ? 'Unit Activity' : 'Lesson'} Check`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: `اختر العبارة الإنجليزية التي تناسب مهارة «${arabicLessonTitles[order - 1] ?? unit.title}».`,
        textEn: spec.question,
        optionsAr,
        optionsEn: [...options],
        correctIndex: spec.answerIndex,
        conceptTestedAr: spec.title,
        conceptTestedEn: spec.title,
        explanationAr: `الإجابة المناسبة للتدرب على موضوع الدرس هي: ${options[spec.answerIndex]}.`,
        explanationEn: explanation,
        difficulty: 'easy'
      }]
    },
    topicAr: activity ? `أنشطة الوحدة ${unitIndex + 1} — ص ${unit.activityPage}` : `الدرس ${lessonInUnit} — ص ${unit.page + lessonInUnit - 1}`,
    topicEn: activity ? `Unit ${unitIndex + 1} Activities — p. ${unit.activityPage}` : `Unit ${unitIndex + 1}, Lesson ${lessonInUnit}`
  };
}

export const SUDAN_PRIMARY_ENGLISH_G1_LECTURES: Lecture[] = Array.from(
  { length: 5 },
  (_, unitIndex) => {
    const unitLessons = lessonSpecs.slice(unitIndex * 8, unitIndex * 8 + 8);
    return [
      ...unitLessons.map((spec, index) =>
        createSudanGrade1EnglishLecture(unitIndex, index + 1, spec)
      ),
      createSudanGrade1EnglishLecture(unitIndex, 9, unitActivitySpecs[unitIndex], true)
    ];
  }
).flat();
