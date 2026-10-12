import type { Lecture } from '../types';

export const SUDAN_PRIMARY_ENGLISH_G2_BOOK = {
  title: 'SMILE Starter 2 Pupil’s Book',
  edition: '2nd Edition 2020',
  units: [
    { title: 'Home', page: 1, activityPage: 41 },
    { title: 'My Family', page: 9, activityPage: 49 },
    { title: 'Toys and Games', page: 17, activityPage: 57 },
    { title: 'Animals', page: 25, activityPage: 65 },
    { title: 'Food and Drink', page: 33, activityPage: 73 }
  ]
} as const;

interface LessonSpec {
  title: string;
  titleAr: string;
  focus: string;
  question: string;
  options: [string, string, string];
}

const lessonSpecs: LessonSpec[] = [
  { title: 'Rooms and furniture at home', titleAr: 'غرف المنزل وأثاثه', focus: 'Name familiar rooms and household objects and follow simple instructions with “put” and room names.', question: 'Where do we usually find a bed?', options: ['In the bedroom', 'In the river', 'In the market'] },
  { title: 'Places in town and their locations', titleAr: 'أماكن البلدة ومواقعها', focus: 'Recognize familiar places in town and ask or answer where a place is using “There is/There are” and “next to”.', question: 'Which phrase tells where the library is?', options: ['It is next to the market.', 'It is hungry.', 'I can swim.'] },
  { title: 'Homes and where people live', titleAr: 'المنازل وأماكن السكن', focus: 'Say where a person or animal lives using the present simple “I live in/next to” and familiar home words.', question: 'Which sentence tells where a bird lives?', options: ['I live in a tree.', 'I live in a fridge.', 'I live in a chair.'] },
  { title: 'Animal homes and the “sh” sound', titleAr: 'مساكن الحيوانات وصوت sh', focus: 'Describe simple animal homes and practise hearing and saying the “sh” sound in familiar words.', question: 'Which word begins with the “sh” sound?', options: ['Shell', 'Fish', 'Tree'] },
  { title: 'A new home for the animals', titleAr: 'بيت جديد للحيوانات', focus: 'Follow a short picture story about animals needing a home and understand simple commands such as “Stop!” and “Cut!”.', question: 'What do the animals need in the story?', options: ['A new home', 'A new classroom', 'A new road'] },
  { title: 'Planting seeds and growing trees', titleAr: 'زراعة البذور ونمو الأشجار', focus: 'Understand and act out simple instructions with “wait”, “plant”, “grow”, and “look at” in a story about caring for trees.', question: 'What can we plant to grow new trees?', options: ['Seeds', 'Chairs', 'Shoes'] },
  { title: 'Introducing yourself and describing your street', titleAr: 'التعريف بالنفس ووصف الشارع', focus: 'Give simple personal information and describe a home, street, or nearby place using familiar words and “lots of”.', question: 'Which question asks where someone is from?', options: ['Where are you from?', 'How many wheels?', 'What do you eat?'] },
  { title: 'Homes of people and animals', titleAr: 'مساكن الناس والحيوانات', focus: 'Use “I’ve got a home” and “I live in” to describe where people and familiar animals live.', question: 'Where does a snail live?', options: ['In its shell', 'In a bedroom', 'In a school bag'] },

  { title: 'My family', titleAr: 'أسرتي', focus: 'Name close family members and use “this is” and “and” to talk about a family picture.', question: 'Which word names a family member?', options: ['Sister', 'Market', 'Wheel'] },
  { title: 'A family picture', titleAr: 'صورة الأسرة', focus: 'Identify relatives in a family picture and use possessive names such as “Dalia’s family”.', question: 'Which phrase means the family belonging to Dalia?', options: ['Dalia’s family', 'Dalia family’s', 'Family Dalia is'] },
  { title: 'Family members and numbers', titleAr: 'أفراد الأسرة والأعداد', focus: 'Ask and answer about family members and quantities using numbers to twenty, “any”, and “How many?”.', question: 'Which question asks about the number of brothers?', options: ['How many brothers have you got?', 'Where is the library?', 'What colour is it?'] },
  { title: 'Describing people', titleAr: 'وصف الأشخاص', focus: 'Describe people with simple adjectives and phrases such as “tall”, “short”, “long hair”, and “between”.', question: 'Which word describes someone’s height?', options: ['Tall', 'Breakfast', 'Under'] },
  { title: 'Positions in a family picture', titleAr: 'المواقع في صورة الأسرة', focus: 'Give and follow simple instructions using “stand”, “stay”, and the position words “in”, “on”, “under”, and “next to”.', question: 'Which phrase means beside someone?', options: ['Next to', 'At breakfast', 'Long hair'] },
  { title: 'Daily routines and times', titleAr: 'الروتين اليومي والأوقات', focus: 'Talk about daily routines with “we” and simple verbs for waking up, going to school, eating breakfast, and going to bed.', question: 'Which phrase tells a daily routine?', options: ['We go to school.', 'We are a tree.', 'We have got a wheel.'] },
  { title: 'Talking about people and routines', titleAr: 'الحديث عن الأشخاص وروتينهم', focus: 'Use familiar subject pronouns and time phrases such as “at” and “after” to read and describe a simple daily schedule.', question: 'Which word can replace “Eman and I”?', options: ['We', 'He', 'It'] },
  { title: 'People and places at home', titleAr: 'الأشخاص والأماكن في المنزل', focus: 'Ask and answer where family members are, using “in” and “with” in short descriptions.', question: 'Which sentence tells where someone is?', options: ['He is in the living room.', 'He is a breakfast.', 'He is under tall.'] },

  { title: 'Toys and games: what can you see?', titleAr: 'الألعاب: ماذا ترى؟', focus: 'Name familiar toys and objects and use “I can see” to describe what is visible in a picture.', question: 'Which sentence describes something you can see?', options: ['I can see a book.', 'I can sleep a book.', 'I can next to a book.'] },
  { title: 'Classroom and game instructions', titleAr: 'تعليمات الصف واللعب', focus: 'Understand and give simple positive and negative commands such as “Sit down”, “Come here”, and “Don’t play”.', question: 'Which is a negative instruction?', options: ['Don’t play a game.', 'Play a game.', 'Come here.'] },
  { title: 'Things we can do', titleAr: 'أشياء نستطيع فعلها', focus: 'Talk about abilities using “can” and ask “How many?” about people or actions in a picture.', question: 'Which sentence tells an ability?', options: ['I can run.', 'I can a run.', 'I run can.'] },
  { title: 'Counting and adding', titleAr: 'العد والجمع', focus: 'Count groups in pictures and answer “How many?” questions, joining quantities with “and”.', question: 'What is 2 and 7 and 6?', options: ['15', '14', '16'] },
  { title: 'Describing objects and possession', titleAr: 'وصف الأشياء والملكية', focus: 'Describe familiar objects using “this”, “that”, “our”, and simple size or feature words.', question: 'Which word shows that something belongs to us?', options: ['Our', 'Their', 'Under'] },
  { title: 'Likes and dislikes', titleAr: 'ما نحب وما لا نحب', focus: 'Say what you like or do not like using “I like”, “I don’t like”, and “and”.', question: 'Which sentence expresses a dislike?', options: ['I don’t like fish.', 'I can see fish.', 'Fish are next to me.'] },
  { title: 'Parts of a car and asking about pictures', titleAr: 'أجزاء السيارة والسؤال عن الصور', focus: 'Name car parts and ask or answer about colour and quantity using “What colour…?” and “How many…?”.', question: 'Which is a part of a car?', options: ['Wheel', 'Breakfast', 'Forest'] },
  { title: 'Giving instructions with “it”', titleAr: 'إعطاء التعليمات باستخدام it', focus: 'Give positive and negative commands about familiar actions and objects, using “Don’t” and the object pronoun “it”.', question: 'Which command tells someone not to kick an object?', options: ['Don’t kick it.', 'Kick don’t.', 'It kick not.'] },

  { title: 'Farm animals and animal sounds', titleAr: 'حيوانات المزرعة وأصواتها', focus: 'Name familiar farm animals and ask or answer simple questions about how they are.', question: 'Which animal is named in the lesson?', options: ['Goat', 'Fridge', 'Carrot'] },
  { title: 'Nile animals and animal features', titleAr: 'حيوانات النيل وصفاتها', focus: 'Read simple facts about Nile animals and snakes using “we”, “have got”, “lay eggs”, and descriptions of size and features.', question: 'Which animal lays eggs?', options: ['A snake', 'A hippo', 'A camel'] },
  { title: 'Animals and their habitats in Sudan', titleAr: 'الحيوانات وبيئاتها في السودان', focus: 'Identify familiar animals and habitats such as rivers, mountains, forests, and deserts, using “There are” and “live”.', question: 'Where do crocodiles live?', options: ['In rivers', 'In bedrooms', 'In fridges'] },
  { title: 'Animal abilities and the “ph” sound', titleAr: 'قدرات الحيوانات وصوت ph', focus: 'Talk about what animals can do and practise the “ph” sound in familiar words.', question: 'Which sentence tells what an animal can do?', options: ['They can swim.', 'They can’t a swim.', 'They swim can’t.'] },
  { title: 'What animals can and cannot do', titleAr: 'ما تستطيع الحيوانات فعله وما لا تستطيع', focus: 'Ask and answer about animal abilities using “can” and “can’t” with actions such as fly, walk, and swim.', question: 'Which sentence is true in the lesson example?', options: ['Lions can walk.', 'Lions can fly.', 'Lions can’t walk.'] },
  { title: 'Describing camels', titleAr: 'وصف الجمال', focus: 'Describe animal features and ask about height and length using “have got” and simple measurements.', question: 'Which feature is used to describe a camel?', options: ['A big hump', 'A small wheel', 'A long window'] },
  { title: 'Talking about animals and abilities', titleAr: 'الحديث عن الحيوانات وقدراتها', focus: 'Follow a short animal dialogue and respond to questions about what animals can do or whether we like them.', question: 'Which question asks about ability?', options: ['Can camels fly?', 'Where is my book?', 'What is your name?'] },
  { title: 'Animal homes and actions', titleAr: 'مساكن الحيوانات وأفعالها', focus: 'Read short descriptions of animal homes and use “can” with place words such as “in” and “up”.', question: 'Where can a monkey swing?', options: ['In a tree', 'In a glass', 'On a plate'] },

  { title: 'Food and drink: naming items', titleAr: 'الطعام والشراب: تسمية الأشياء', focus: 'Name familiar food and drink and describe a picture using “There is some” and “There are some”.', question: 'Which phrase is used with a plural countable noun?', options: ['There are some tomatoes.', 'There are some milk.', 'There is some eggs.'] },
  { title: 'Food on the table and shelf', titleAr: 'الطعام على الطاولة والرف', focus: 'Ask where food is and describe what is on a shelf or in a fridge using “some” and familiar food words.', question: 'Which question asks about a location?', options: ['Where are the peanuts?', 'How old are you?', 'Can it fly?'] },
  { title: 'Fruit or vegetable?', titleAr: 'فاكهة أم خضار؟', focus: 'Identify familiar fruit and vegetables and ask or answer using “Is it a fruit or a vegetable?” and “or”.', question: 'Which is a fruit?', options: ['Banana', 'Potato', 'Onion'] },
  { title: 'Making mango juice', titleAr: 'إعداد عصير المانجو', focus: 'Follow a sequence of simple instructions for making juice, using action words such as wash, cut, add, and mix.', question: 'What should you do after cutting the mangoes?', options: ['Put them in a mixer.', 'Plant them in a tree.', 'Stand next to them.'] },
  { title: 'Favourite food and drink', titleAr: 'الطعام والشراب المفضلان', focus: 'Talk about favourite food and drink, use simple taste and smell words, and ask “What’s your favourite…?”.', question: 'Which question asks about a favourite drink?', options: ['What’s your favourite drink?', 'Where is your drink?', 'How many drinks can you see?'] },
  { title: 'Fruit and vegetables are different', titleAr: 'الاختلاف بين الفاكهة والخضروات', focus: 'Read a simple comparison of fruit and vegetables and identify familiar examples using “or”.', question: 'Which item is identified as a vegetable in the reading?', options: ['Potato', 'Banana', 'Orange juice'] },
  { title: 'Offering food and drink politely', titleAr: 'عرض الطعام والشراب بأدب', focus: 'Offer a drink or food and make a polite request using “Would you like…?” and “I’d like… please”.', question: 'Which phrase makes a polite request?', options: ['I’d like tea, please.', 'Tea I like would.', 'Please tea like I.'] },
  { title: 'Food groups and likes', titleAr: 'أنواع الطعام وما نحبه', focus: 'Sort familiar food words into simple groups and say what you like or do not like using “is”, “or”, and “I like”.', question: 'Which sentence expresses a food preference?', options: ['I like apples.', 'I apple like?', 'Apples are under.'] }
];

const unitActivitySpecs: LessonSpec[] = [
  { title: 'Home — rooms, places, and sentence practice', titleAr: 'المنزل — الغرف والأماكن والتدرب على الجمل', focus: 'Review home and town words, practise spelling, and arrange familiar words into simple sentences.', question: 'Which word names a room?', options: ['Kitchen', 'Crocodile', 'Peanut'] },
  { title: 'My Family — people, positions, and routines', titleAr: 'أسرتي — الأشخاص والمواقع والروتين', focus: 'Review family words, descriptions, location phrases, and simple sentences about everyday routines.', question: 'Which word names a family member?', options: ['Grandmother', 'Wheel', 'Mango'] },
  { title: 'Toys and Games — actions and instructions', titleAr: 'الألعاب — الأفعال والتعليمات', focus: 'Review action words and commands, practise spelling and sentence order, and talk about what people can do.', question: 'Which sentence gives an instruction?', options: ['Stand up.', 'I am a camel.', 'There is some milk.'] },
  { title: 'Animals — names, features, and abilities', titleAr: 'الحيوانات — الأسماء والصفات والقدرات', focus: 'Review animal names, habitats, features, and abilities with short reading, matching, and sentence activities.', question: 'Which word names an animal?', options: ['Camel', 'Bedroom', 'Tomato'] },
  { title: 'Food and Drink — food words and preferences', titleAr: 'الطعام والشراب — المفردات والتفضيلات', focus: 'Review food and drink words, categories, preferences, and simple polite requests through short written exercises.', question: 'Which is a drink?', options: ['Orange juice', 'Potato', 'Onion'] }
];

export const SUDAN_PRIMARY_ENGLISH_G2_TABLE_OF_CONTENTS = lessonSpecs.map((lesson, index) => {
  const unitIndex = Math.floor(index / 8);
  const lessonInUnit = index % 8 + 1;

  return {
    lessonNumber: index + 1,
    unit: unitIndex + 1,
    page: SUDAN_PRIMARY_ENGLISH_G2_BOOK.units[unitIndex].page + lessonInUnit - 1,
    titleAr: lesson.titleAr,
    titleEn: lesson.title
  };
});

function createSudanGrade2EnglishLecture(
  unitIndex: number,
  lessonInUnit: number,
  spec: LessonSpec,
  activity = false
): Lecture {
  const unit = SUDAN_PRIMARY_ENGLISH_G2_BOOK.units[unitIndex];
  const order = unitIndex * 9 + lessonInUnit;
  const id = `sd-primary-en-g2-${order}`;
  const titleEn = activity
    ? `Unit ${unitIndex + 1} Activity: ${spec.title}`
    : `Unit ${unitIndex + 1}, Lesson ${lessonInUnit}: ${spec.title}`;
  const titleAr = activity
    ? `نشاط الوحدة ${unitIndex + 1}: ${unitActivitySpecs[unitIndex].titleAr}`
    : `الوحدة ${unitIndex + 1}، الدرس ${lessonInUnit}: ${spec.titleAr}`;
  const focusAr = activity
    ? `يراجع المتعلم مفردات ومهارات وحدة «${unit.title}» من خلال القراءة والاستماع والتحدث والكتابة في تدريبات قصيرة.`
    : `يتدرب المتعلم على ${spec.titleAr} باستخدام كلمات وتراكيب إنجليزية قصيرة في أنشطة الاستماع والتحدث والقراءة.`;
  const optionsAr = [...spec.options];

  return {
    id,
    order,
    titleAr,
    titleEn,
    subtitleAr: `اللغة الإنجليزية — الصف الثاني الأساسي — ${unit.title}`,
    subtitleEn: `SMILE Starter 2 — Unit ${unitIndex + 1}: ${unit.title}`,
    descriptionAr: focusAr,
    descriptionEn: spec.focus,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ENGLISH',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثاني الأساسي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 2 Basic Level — Republic of the Sudan',
    termAr: 'كتاب التلميذ — SMILE Starter 2',
    termEn: 'Pupil’s Book — SMILE Starter 2',
    unitTitleAr: unit.title,
    unitTitleEn: `Unit ${unitIndex + 1}: ${unit.title}`,
    lessonNumberAr: activity ? `نشاط الوحدة ${unitIndex + 1}` : `الدرس ${lessonInUnit}`,
    lessonNumberEn: activity ? `Unit ${unitIndex + 1} Activity` : `Lesson ${lessonInUnit}`,
    warmupHookAr: focusAr,
    warmupHookEn: spec.focus,
    learningOutcomesAr: [focusAr, 'يستمع إلى الكلمات الإنجليزية ويرددها ويستخدمها في تدريب شفهي قصير.'],
    learningOutcomesEn: [spec.focus, 'Listen, repeat, and use the target words in a short speaking practice.'],
    keyConceptsAr: [titleAr],
    keyConceptsEn: [spec.title],
    summaryAr: focusAr,
    summaryEn: spec.focus,
    sections: [{
      titleAr,
      titleEn: spec.title,
      contentAr: `${focusAr}\n\nتدريب: استمع إلى الكلمات، ورددها، ثم استخدمها في جملة أو سؤال وجواب قصير.`,
      contentEn: `${spec.focus}\n\nPractice: listen to the words, repeat them, then use them in a sentence or short question-and-answer exchange.`
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم ${activity ? 'نشاط الوحدة' : 'الدرس'} ${activity ? unitIndex + 1 : lessonInUnit}`,
      titleEn: `${activity ? 'Unit Activity' : 'Lesson'} Check`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: `اختر العبارة الإنجليزية المناسبة لموضوع «${activity ? unitActivitySpecs[unitIndex].titleAr : spec.titleAr}».`,
        textEn: spec.question,
        optionsAr,
        optionsEn: [...spec.options],
        correctIndex: 0,
        conceptTestedAr: titleAr,
        conceptTestedEn: spec.title,
        explanationAr: `الإجابة المناسبة للتدرب على الموضوع هي: ${spec.options[0]}.`,
        explanationEn: `The suitable answer is “${spec.options[0]}”.`,
        difficulty: 'easy'
      }]
    },
    topicAr: activity ? `أنشطة الوحدة ${unitIndex + 1} — ص ${unit.activityPage}` : `الدرس ${lessonInUnit} — ص ${unit.page + lessonInUnit - 1}`,
    topicEn: activity ? `Unit ${unitIndex + 1} Activities — p. ${unit.activityPage}` : `Unit ${unitIndex + 1}, Lesson ${lessonInUnit} — p. ${unit.page + lessonInUnit - 1}`
  };
}

export const SUDAN_PRIMARY_ENGLISH_G2_LECTURES: Lecture[] = Array.from(
  { length: 5 },
  (_, unitIndex) => [
    ...lessonSpecs.slice(unitIndex * 8, unitIndex * 8 + 8).map((spec, index) =>
      createSudanGrade2EnglishLecture(unitIndex, index + 1, spec)
    ),
    createSudanGrade2EnglishLecture(unitIndex, 9, unitActivitySpecs[unitIndex], true)
  ]
).flat();
