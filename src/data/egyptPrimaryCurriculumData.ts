import type { EducationTrack, EducationType, GradeLevel, Lecture, Subject } from '../types';
import { PRIMARY_ARABIC_G1_LECTURES } from './primaryArabic1CurriculumData';
import { PRIMARY_ARABIC_G2_LECTURES } from './primaryArabic2CurriculumData';
import { PRIMARY_ARABIC_G3_LECTURES } from './primaryArabic3CurriculumData';
import { PRIMARY_ARABIC_G4_LECTURES } from './primaryArabic4CurriculumData';
import { PRIMARY_ARABIC_G5_LECTURES } from './primaryArabic5CurriculumData';
import { PRIMARY_ARABIC_G6_LECTURES } from './primaryArabic6CurriculumData';

import { PRIMARY_MATH_G1_LECTURES } from './primaryMath1CurriculumData';
import { PRIMARY_MATH_G2_LECTURES } from './primaryMath2CurriculumData';
import { PRIMARY_MATH_G3_LECTURES } from './primaryMath3CurriculumData';
import { PRIMARY_MATH_LECTURES } from './primaryCurriculumData';
import { PRIMARY_MATH_G5_LECTURES } from './primaryMath5CurriculumData';
import { PRIMARY_MATH_G6_LECTURES } from './primaryMath6CurriculumData';

import { PRIMARY_SCIENCE_G1_LECTURES } from './primaryScience1CurriculumData';
import { PRIMARY_SCIENCE_G2_LECTURES } from './primaryScience2CurriculumData';
import { PRIMARY_SCIENCE_G3_LECTURES } from './primaryScience3CurriculumData';
import { PRIMARY_SCIENCE_LECTURES } from './primaryCurriculumData';
import { PRIMARY_SCIENCE_G5_LECTURES } from './primaryScience5CurriculumData';
import { PRIMARY_SCIENCE_G6_LECTURES } from './primaryScience6CurriculumData';

import { PRIMARY_ISLAMIC_G1_LECTURES } from './primaryIslamic1CurriculumData';
import { PRIMARY_ISLAMIC_G2_LECTURES } from './primaryIslamic2CurriculumData';
import { PRIMARY_ISLAMIC_G3_LECTURES } from './primaryIslamic3CurriculumData';
import { PRIMARY_ISLAMIC_G4_LECTURES } from './primaryIslamic4CurriculumData';
import { PRIMARY_ISLAMIC_G5_LECTURES } from './primaryIslamic5CurriculumData';
import { PRIMARY_ISLAMIC_G6_LECTURES } from './primaryIslamic6CurriculumData';

// ---------------------------------------------------------------------------
// Egyptian Primary School Curriculum (المرحلة الابتدائية المصرية - منظومة التعليم 2.0)
// ---------------------------------------------------------------------------

export const EGYPT_PRIMARY_LOWER_SUBJECTS: readonly Subject[] = [
  'PRIMARY_ARABIC',
  'PRIMARY_MATH',
  'ENGLISH',
  'ISLAMIC_STUDIES'
];

export const EGYPT_PRIMARY_UPPER_SUBJECTS: readonly Subject[] = [
  'PRIMARY_ARABIC',
  'PRIMARY_MATH',
  'PRIMARY_SCIENCE',
  'ENGLISH',
  'GEOGRAPHY',
  'HISTORY',
  'COMPUTER_SCIENCE',
  'ISLAMIC_STUDIES'
];

export function isEgyptPrimarySubjectAvailable(
  subject: Subject,
  gradeLevel?: GradeLevel,
  educationType: EducationType = 'PUBLIC'
): boolean {
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE') return false;
  if (!gradeLevel || !['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(gradeLevel)) return false;

  // For math and science aliases
  const normalizedSubject = subject === 'MATH' ? 'PRIMARY_MATH' : (subject === 'GENERAL_SCIENCE' ? 'PRIMARY_SCIENCE' : subject);

  if (['G1', 'G2', 'G3'].includes(gradeLevel)) {
    return EGYPT_PRIMARY_LOWER_SUBJECTS.includes(normalizedSubject as Subject) || normalizedSubject === 'PRIMARY_SCIENCE';
  }
  return EGYPT_PRIMARY_UPPER_SUBJECTS.includes(normalizedSubject as Subject);
}

export function getEgyptPrimarySubjects(gradeLevel: GradeLevel = 'G4'): Subject[] {
  if (['G1', 'G2', 'G3'].includes(gradeLevel)) {
    return [...EGYPT_PRIMARY_LOWER_SUBJECTS];
  }
  if (['G4', 'G5', 'G6'].includes(gradeLevel)) {
    return [...EGYPT_PRIMARY_UPPER_SUBJECTS];
  }
  return [];
}

// ---------------------------------------------------------------------------
// Helper Builder for Custom Egyptian Primary Courses (Connect English, ICT, Geography, History)
// ---------------------------------------------------------------------------
interface PrimaryWorkedExample {
  id: string;
  titleAr: string;
  titleEn: string;
  problemAr: string;
  problemEn: string;
  stepsAr: string[];
  stepsEn?: string[];
  solutionAr: string;
  takeawayAr: string;
  takeawayEn?: string;
}

interface PrimaryLessonDefinition {
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  vocabulary: [string, string][];
  imageUrl?: string;
  diagramTitleAr?: string;
  diagramTitleEn?: string;
  diagramCaptionAr?: string;
  diagramCaptionEn?: string;
  workedExamples?: PrimaryWorkedExample[];
}

interface PrimaryUnitDefinition {
  unitTitleAr: string;
  unitTitleEn: string;
  lessons: PrimaryLessonDefinition[];
}

function buildPrimaryLectures(
  units: PrimaryUnitDefinition[],
  subject: Subject,
  gradeLevel: GradeLevel,
  gradeNameAr: string,
  gradeNameEn: string,
  educationType: EducationType = 'PUBLIC',
  track: EducationTrack = 'GENERAL'
): Lecture[] {
  let runningOrder = 1;
  return units.flatMap((unit) =>
    unit.lessons.map((lesson) => {
      const order = runningOrder++;
      const id = `eg-prim-${gradeLevel.toLowerCase()}-${subject.toLowerCase().replace(/_/g, '-')}-${order}`;
      const defaultImageUrl = subject === 'ENGLISH' && gradeLevel === 'G1'
        ? '/curriculum_covers/egypt_primary_1_english.png'
        : lesson.imageUrl;

      const diagramObj = defaultImageUrl ? {
        id: `diag-${id}`,
        figureNumberAr: `نموذج الكتاب (${order})`,
        figureNumberEn: `Textbook Model (${order})`,
        titleAr: lesson.diagramTitleAr || `كتاب الوزارة المعتمد: ${lesson.titleAr}`,
        titleEn: lesson.diagramTitleEn || `Official Curriculum: ${lesson.titleEn}`,
        captionAr: lesson.diagramCaptionAr || `نموذج مصور من كتاب وزارة التربية والتعليم الرسمي - Connect 1`,
        captionEn: lesson.diagramCaptionEn || `Illustrated model from the official Ministry of Education textbook - Connect 1`,
        diagramType: 'custom_svg' as any,
        imageUrl: defaultImageUrl,
        keyLabels: [
          { tagAr: 'كتاب الوزارة الرسمي', tagEn: 'Official MOE Book', color: '#10b981' },
          { tagAr: 'نماذج وتطبيقات', tagEn: 'Worked Models', color: '#6366f1' },
          { tagAr: 'صوتيات واستماع', tagEn: 'Phonics & Audio', color: '#f59e0b' }
        ],
        takeawayFormulaAr: 'تطبيق مباشر يطابق نماذج وتمارين الكتاب المدرسي.',
        takeawayFormulaEn: 'Direct application matching official textbook exercises.'
      } : undefined;

      return {
        id,
        order,
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        subtitleAr: lesson.subtitleAr,
        subtitleEn: lesson.subtitleEn,
        durationMinutes: 25,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel,
        educationType,
        educationTrack: track,
        gradeLevelNameAr: gradeNameAr,
        gradeLevelNameEn: gradeNameEn,
        termAr: order <= 3 ? 'الفصل الدراسي الأول' : 'الفصل الدراسي الثاني',
        termEn: order <= 3 ? 'Term 1' : 'Term 2',
        unitTitleAr: unit.unitTitleAr,
        unitTitleEn: unit.unitTitleEn,
        lessonNumberAr: `الدرس ${order}: ${lesson.titleAr}`,
        lessonNumberEn: `Lesson ${order}: ${lesson.titleEn}`,
        warmupHookAr: `مرحباً بك يا بطل! استعد لاكتشاف عالم المعرفة في ${lesson.titleAr} بأسلوب شيق وتطبيقات تفاعلية ممتعة.`,
        warmupHookEn: `Welcome hero! Get ready to explore the exciting world of ${lesson.titleEn} through engaging activities.`,
        keyConceptsAr: [
          lesson.focusAr,
          'التطبيق العملي والممارسة اليومية لترسيخ الفهم والمهارات.',
          'الربط بين التعلم وحياتنا اليومية ومجتمعنا الجميل.'
        ],
        keyConceptsEn: [
          lesson.focusEn,
          'Hands-on practice to solidify comprehension and foundational skills.',
          'Connecting lessons to daily life and our environment.'
        ],
        learningOutcomesAr: [
          lesson.focusAr,
          `إتقان حل التدريبات والأنشطة التطبيقية لدرس «${lesson.titleAr}» بالكامل.`
        ],
        learningOutcomesEn: [
          lesson.focusEn,
          `Master all activities, questions, and practical exercises for "${lesson.titleEn}".`
        ],
        vocabulary: lesson.vocabulary.map(([ar, en]) => ({
          termAr: ar,
          termEn: en,
          definitionAr: `المعنى: ${ar} — مفردة أساسية في درس «${lesson.titleAr}».`,
          definitionEn: `Meaning: ${ar} — Essential vocabulary word in "${lesson.titleEn}".`
        })),
        summaryAr: lesson.focusAr,
        summaryEn: lesson.focusEn,
        mainContentAr: `${lesson.focusAr}\n\nالنشاط العملي: ${lesson.activityAr}\n\nهذا الدرس مصمم لتعزيز الفهم والاستيعاب عبر التطبيق العملي والمحادثة التفاعلية.`,
        mainContentEn: `${lesson.focusEn}\n\nPractical Activity: ${lesson.activityEn}\n\nThis lesson is designed to enhance understanding through interactive practice and conversational skills.`,
        sections: [
          {
            titleAr: 'الشرح والمفاهيم الأساسية',
            titleEn: 'Core Concepts & Explanation',
            contentAr: lesson.focusAr,
            contentEn: lesson.focusEn,
            diagram: diagramObj,
            tipsAr: ['اقرأ الكلمات والعبارات بعناية ورددها بصوت واضح.', 'طبق المفاهيم من خلال حل الأنشطة والتطبيقات.'],
            tipsEn: ['Read and practice the words aloud with clear pronunciation.', 'Apply concepts through hands-on practice.']
          },
          {
            titleAr: 'النشاط التطبيقي العملي',
            titleEn: 'Hands-on Activity',
            contentAr: lesson.activityAr,
            contentEn: lesson.activityEn
          },
          {
            titleAr: 'الصوتيات والتدريب على النطق السليم',
            titleEn: 'Phonics & Pronunciation Practice',
            contentAr: 'تدريبات صوتية مكثفة للتمييز بين أصوات الحروف ومخارجها الصحيحة، مع أمثلة من كلمات الكتاب المدرسي المقررة.',
            contentEn: 'Focused phonics drills distinguishing letter sounds and standard pronunciation using textbook vocabulary.'
          },
          {
            titleAr: 'المحادثة والتواصل اليومي',
            titleEn: 'Conversational Communication & Role Play',
            contentAr: 'محاكاة المحادثات الواقعية في الفصل والمنزل باستخدام الجمل والأنماط اللغوية المستفادة من الدرس.',
            contentEn: 'Real-world dialogue simulation applying targeted sentence patterns in class and home environments.'
          }
        ],
        diagramType: defaultImageUrl ? ('custom_svg' as any) : undefined,
        diagramData: diagramObj,
        workedExamples: lesson.workedExamples,
        formativeAssessment: [
          {
            id: `${id}-check`,
            questionAr: lesson.questionAr,
            questionEn: lesson.questionEn,
            optionsAr: [...lesson.optionsAr],
            optionsEn: [...lesson.optionsEn],
            correctIndex: lesson.correctIndex,
            explanationAr: `الإجابة الصحيحة هي "${lesson.optionsAr[lesson.correctIndex]}" لتعزيز الاستيعاب الصحيح للدرس.`,
            explanationEn: `Correct answer is "${lesson.optionsEn[lesson.correctIndex]}" following the lesson guidelines.`
          }
        ],
        assessment: {
          id: `${id}-assessment`,
          lectureId: id,
          titleAr: `تقييم درس ${lesson.titleAr}`,
          titleEn: `Assessment for ${lesson.titleEn}`,
          passingScore: 80,
          questions: [
            {
              id: `${id}-q1`,
              textAr: lesson.questionAr,
              textEn: lesson.questionEn,
              optionsAr: [...lesson.optionsAr],
              optionsEn: [...lesson.optionsEn],
              correctIndex: lesson.correctIndex,
              conceptTestedAr: lesson.titleAr,
              conceptTestedEn: lesson.titleEn,
              explanationAr: `الإجابة الصحيحة هي "${lesson.optionsAr[lesson.correctIndex]}" لتعزيز الاستيعاب الصحيح للدرس.`,
              explanationEn: `Correct answer is "${lesson.optionsEn[lesson.correctIndex]}" following the lesson guidelines.`,
              difficulty: 'easy'
            }
          ]
        }
      };
    })
  );
}

// ---------------------------------------------------------------------------
// 1. Egyptian Primary English (Connect 1 - الكتاب الوزاري الرسمي المحدث 2024/2025)
// ---------------------------------------------------------------------------

const connectG1Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'الوحدة 1: أهلاً بكم في مدرستي (Unit 1: Welcome to My School)',
    unitTitleEn: 'Unit 1: Welcome to My School',
    lessons: [
      {
        titleAr: 'التحيات وتكوين الصداقات والأدوات المدرسية',
        titleEn: 'Greetings, Friends & Classroom Objects',
        subtitleAr: 'التحيات: Hello, Goodbye, My name is... والأدوات: Bag, Book, Pencil, Desk',
        subtitleEn: 'Greetings, names, friendship, and essential classroom tools',
        focusAr: 'يتعلم التلميذ التحية والتعارف: Hello, I am Adam. What is your name? وتسمية الأدوات المدرسية: book, pencil, bag, desk, chair.',
        focusEn: 'Students learn introductions: Hello, I am Adam. What is your name? and identify classroom items: book, pencil, bag, desk, chair.',
        activityAr: 'تدريب ثنائي مع زميلك: قل مرحباً وعرفه باسمك ثم أشر إلى حقيبتك وكتابك بالإنجليزية.',
        activityEn: 'Pair practice: Greet your partner, introduce yourself, and point to your bag and book.',
        questionAr: 'ما العبارة الصحيحة عندما تسأل صديقك الجديد عن اسمه؟',
        questionEn: 'What is the correct question to ask a new friend their name?',
        optionsAr: ['What is your name?', 'How old are you?', 'Where is the book?'],
        optionsEn: ['What is your name?', 'How old are you?', 'Where is the book?'],
        correctIndex: 0,
        vocabulary: [
          ['مرحباً', 'Hello'],
          ['إلى اللقاء', 'Goodbye'],
          ['أصدقاء', 'Friends'],
          ['يصافح باليد', 'Shake hands'],
          ['حقيبة مدرسية', 'Bag'],
          ['كتاب', 'Book'],
          ['قلم رصاص', 'Pencil'],
          ['معلم', 'Teacher']
        ],
        imageUrl: '/curriculum_covers/connect1_unit1_classroom.jpg',
        diagramTitleAr: 'الوحدة الأولى: أهلاً بكم في مدرستي (Connect 1 - الفصل المدرسي المعلمة منى والتلاميذ)',
        diagramTitleEn: 'Unit 1: Welcome to My School (Connect 1 - Miss Mona and Students)',
        diagramCaptionAr: 'رسم توضيحي ملون أصيل من كتاب Connect 1 المعتمد يوضح المعلمة منى والتلاميذ آدم ودينا والنحلة النشيطة Busy Bee وأدوات الفصل',
        diagramCaptionEn: 'Authentic MOE Connect 1 textbook illustration featuring Miss Mona, Adam, Dina, and Busy Bee in the classroom',
        workedExamples: [
          {
            id: 'we-g1-u1-1',
            titleAr: 'النموذج 1 من 4: محادثة التعارف وتقديم النفس',
            titleEn: 'Worked Example 1 of 4: Introduction and Greetings',
            problemAr: 'Miss Mona: Hello! Welcome to our school. Let us make new friends!',
            problemEn: 'Miss Mona: Hello! Welcome to our school. Let us make new friends!',
            stepsAr: [
              'Miss Mona: Hello! I am Miss Mona. What is your name?',
              'Adam: Hello Miss Mona! I am Adam.',
              'Dina: Hello! I am Dina.',
              'Busy Bee: Shake hands and say hello to your new friends!'
            ],
            stepsEn: [
              'Miss Mona: Hello! I am Miss Mona. What is your name?',
              'Adam: Hello Miss Mona! I am Adam.',
              'Dina: Hello! I am Dina.',
              'Busy Bee: Shake hands and say hello to your new friends!'
            ],
            solutionAr: '"Hello! My name is Adam. What is your name?" — نموذج محادثة معتمد من كتاب الوزارة (Connect 1).',
            takeawayAr: 'التحية والمصافحة تصنع صداقات رائعة وتساعد على التعلم التعاوني في الفصل.',
            takeawayEn: 'Greeting and shaking hands build wonderful friendships in class.'
          },
          {
            id: 'we-g1-u1-2',
            titleAr: 'النموذج 2 من 4: تسمية الأدوات المدرسية المحيطة',
            titleEn: 'Worked Example 2 of 4: Naming Classroom Objects',
            problemAr: 'Busy Bee: Look around your classroom! What can you see?',
            problemEn: 'Busy Bee: Look around your classroom! What can you see?',
            stepsAr: [
              'Adam: Look! It is a pencil. I write with it.',
              'Dina: Look! It is a book. I read with Miss Mona.',
              'Adam: It is my bag. It has my books and pencils!',
              'Miss Mona: Excellent work Adam and Dina! Well done.'
            ],
            stepsEn: [
              'Adam: Look! It is a pencil. I write with it.',
              'Dina: Look! It is a book. I read with Miss Mona.',
              'Adam: It is my bag. It has my books and pencils!',
              'Miss Mona: Excellent work Adam and Dina! Well done.'
            ],
            solutionAr: 'استخدام أداة النكرة "a" مع المفرد المعدود: a book, a pencil, a bag.',
            takeawayAr: 'أداة النكرة "a" تسبق الأسماء المفردة التي تبدأ بصوت ساكن.',
            takeawayEn: 'The indefinite article "a" precedes singular countable nouns.'
          },
          {
            id: 'we-g1-u1-3',
            titleAr: 'النموذج 3 من 4: التمييز بين التحية وتوديع الفصل',
            titleEn: 'Worked Example 3 of 4: Distinguishing Hello vs Goodbye',
            problemAr: 'Miss Mona: When do we say Hello and when do we say Goodbye?',
            problemEn: 'Miss Mona: When do we say Hello and when do we say Goodbye?',
            stepsAr: [
              'Adam: In the morning when we enter class, we say: Hello Miss Mona!',
              'Dina: At the end of the school day, we say: Goodbye friends!',
              'Busy Bee: Always say goodbye with a cheerful wave and smile!'
            ],
            stepsEn: [
              'Adam: In the morning when we enter class, we say: Hello Miss Mona!',
              'Dina: At the end of the school day, we say: Goodbye friends!',
              'Busy Bee: Always say goodbye with a cheerful wave and smile!'
            ],
            solutionAr: 'Hello للترحيب واللقاء، و Goodbye للوداع عند المغادرة.',
            takeawayAr: 'اختيار العبارة الصحيحة بحسب التوقيت يعكس اللباقة والاحترام.',
            takeawayEn: 'Using the right expression at the right time shows politeness and awareness.'
          },
          {
            id: 'we-g1-u1-4',
            titleAr: 'النموذج 4 من 4: الأوامر المدرسية وتنفيذ التوجيهات',
            titleEn: 'Worked Example 4 of 4: Following Classroom Commands',
            problemAr: 'Miss Mona: Listen and follow classroom instructions!',
            problemEn: 'Miss Mona: Listen and follow classroom instructions!',
            stepsAr: [
              'Miss Mona: Stand up, please! Open your Connect book.',
              'Adam: I open my book on page 10.',
              'Miss Mona: Close your book and sit down, please.',
              'Busy Bee: Good listeners become great learners in class!'
            ],
            stepsEn: [
              'Miss Mona: Stand up, please! Open your Connect book.',
              'Adam: I open my book on page 10.',
              'Miss Mona: Close your book and sit down, please.',
              'Busy Bee: Good listeners become great learners in class!'
            ],
            solutionAr: 'فعل الأمر في اللغة الإنجليزية يبدأ بالفعل في المصدر: Open your book / Stand up.',
            takeawayAr: 'اتباع تعليمات المعلم بدقة يضمن تنظيماً ممتازاً داخل غرفة الصف.',
            takeawayEn: 'Following teacher instructions ensures an orderly and focused classroom.'
          }
        ]
      },
      {
        titleAr: 'الأوامر الصفية وصوتيات حرفي T و I',
        titleEn: 'Classroom Commands & Phonics: Letters Tt and Ii',
        subtitleAr: 'تعليمات: Stand up, Sit down وصوت /t/ (table, tree) وصوت /ɪ/ (ink, insect)',
        subtitleEn: 'Classroom commands and phonics sounds /t/ (tree, table) and /ɪ/ (ink, insect)',
        focusAr: 'اتباع تعليمات الفصل: Stand up, Sit down, Open your book, Close your bag، وإتقان نطق حرف Tt (/t/) وحرف Ii (/ɪ/).',
        focusEn: 'Following instructions: Stand up, Sit down, and mastering phonics /t/ (tomato, table, tree) and /ɪ/ (ink, insect, ill).',
        activityAr: 'لعبة الأوامر الحركية السريعة: استجب فوراً لأوامر Stand up و Sit down مع تكرار أصوات الحروف.',
        activityEn: 'Action game: Respond quickly to Stand up and Sit down commands while practicing phonics sounds.',
        questionAr: 'أي من الكلمات التالية تبدأ بصوت حرف Tt (/t/)؟',
        questionEn: 'Which of the following words begins with the /t/ sound?',
        optionsAr: ['Table (طاولة)', 'Ink (حبر)', 'Bag (حقيبة)'],
        optionsEn: ['Table', 'Ink', 'Bag'],
        correctIndex: 0,
        vocabulary: [
          ['قف', 'Stand up'],
          ['اجلس', 'Sit down'],
          ['افتح', 'Open'],
          ['أغلق', 'Close'],
          ['طاولة', 'Table'],
          ['شجرة', 'Tree'],
          ['حبر', 'Ink'],
          ['حشرة', 'Insect']
        ],
        imageUrl: '/curriculum_covers/connect1_unit1_phonics.jpg',
        diagramTitleAr: 'معمل صوتيات الوحدة الأولى: حرفي Tt و Ii مع Busy Bee',
        diagramTitleEn: 'Unit 1 Phonics Lab: Letters Tt and Ii with Busy Bee',
        diagramCaptionAr: 'صفحة تدريب الصوتيات المصورة من كتاب الوزارة Connect 1: أصوات الحروف مع الكلمات المصورة (table, tree, tomato, ink, insect)',
        diagramCaptionEn: 'Official Connect 1 phonics page: Illustrated pronunciation guide for letters Tt and Ii with Busy Bee',
        workedExamples: [
          {
            id: 'we-g1-u1-2-1',
            titleAr: 'النموذج 1 من 4: صوت حرف Tt ومخارجه الصوتية',
            titleEn: 'Worked Example 1 of 4: Phonics Sound /t/',
            problemAr: 'Busy Bee: Learn sounds with Busy Bee! Listen to letter Tt.',
            problemEn: 'Busy Bee: Learn sounds with Busy Bee! Listen to letter Tt.',
            stepsAr: [
              'Miss Mona: Put your tongue behind your top teeth and make the gentle /t/ sound.',
              'Adam: /t/ ... Table!',
              'Dina: /t/ ... Tree!',
              'Busy Bee: Great pronunciation! Table and Tree start with T.'
            ],
            stepsEn: [
              'Miss Mona: Put your tongue behind your top teeth and make the gentle /t/ sound.',
              'Adam: /t/ ... Table!',
              'Dina: /t/ ... Tree!',
              'Busy Bee: Great pronunciation! Table and Tree start with T.'
            ],
            solutionAr: 'صوت /t/ هو صوت ساكن مهموس يظهر في أول كلمة Table و Tree.',
            takeawayAr: 'النطق السليم لمخارج الحروف يبني القراءة الصحيحة والتهجئة الدقيقة.',
            takeawayEn: 'Clear articulation builds correct reading and spelling habits.'
          },
          {
            id: 'we-g1-u1-2-2',
            titleAr: 'النموذج 2 من 4: صوت حرف Ii القصير (Short /ɪ/)',
            titleEn: 'Worked Example 2 of 4: Phonics Sound /ɪ/',
            problemAr: 'Busy Bee: Learn the short vowel /ɪ/ sound with Busy Bee!',
            problemEn: 'Busy Bee: Learn the short vowel /ɪ/ sound with Busy Bee!',
            stepsAr: [
              'Miss Mona: Open your mouth a little and relax your lips: /ɪ/.',
              'Adam: /ɪ/ ... Ink!',
              'Dina: /ɪ/ ... Insect!',
              'Busy Bee: Super! Ink and Insect have the crisp short /ɪ/ sound.'
            ],
            stepsEn: [
              'Miss Mona: Open your mouth a little and relax your lips: /ɪ/.',
              'Adam: /ɪ/ ... Ink!',
              'Dina: /ɪ/ ... Insect!',
              'Busy Bee: Super! Ink and Insect have the crisp short /ɪ/ sound.'
            ],
            solutionAr: 'صوت حرف I في منهج أولى ابتدائي هو صوت العلة القصير Short /ɪ/.',
            takeawayAr: 'أصوات العلة القصيرة تُنطق سريعة وموجزة داخل الكلمة.',
            takeawayEn: 'Short vowel sounds are quick and crisp within words.'
          },
          {
            id: 'we-g1-u1-2-3',
            titleAr: 'النموذج 3 من 4: مطابقة الصوت مع الصورة والكلمة',
            titleEn: 'Worked Example 3 of 4: Matching Sounds with Visuals',
            problemAr: 'Miss Mona: Look at the pictures! Which starts with /t/ and which with /ɪ/?',
            problemEn: 'Miss Mona: Look at the pictures! Which starts with /t/ and which with /ɪ/?',
            stepsAr: [
              'Adam: The picture of the tree starts with /t/ ... Tree!',
              'Dina: The picture of the ink bottle starts with /ɪ/ ... Ink!',
              'Busy Bee: High five! You matched the sounds and pictures perfectly!'
            ],
            stepsEn: [
              'Adam: The picture of the tree starts with /t/ ... Tree!',
              'Dina: The picture of the ink bottle starts with /ɪ/ ... Ink!',
              'Busy Bee: High five! You matched the sounds and pictures perfectly!'
            ],
            solutionAr: 'Tree -> /t/، و Ink -> /ɪ/. المطابقة مطابقة لمعايير كتاب الوزارة.',
            takeawayAr: 'ربط الحرف بالصورة يرسخ الكلمة في الذاكرة البصرية والسمعية معاً.',
            takeawayEn: 'Linking letters with images reinforces both visual and auditory memory.'
          },
          {
            id: 'we-g1-u1-2-4',
            titleAr: 'النموذج 4 من 4: التفاعل مع الأوامر المتعاكسة',
            titleEn: 'Worked Example 4 of 4: Interacting with Opposite Commands',
            problemAr: 'Miss Mona: Let us play the opposites game!',
            problemEn: 'Miss Mona: Let us play the opposites game!',
            stepsAr: [
              'Miss Mona: Stand up! What is the opposite?',
              'Adam: Sit down!',
              'Miss Mona: Open your bag! What is the opposite?',
              'Dina: Close your bag!',
              'Busy Bee: Amazing! You know all your classroom opposites!'
            ],
            stepsEn: [
              'Miss Mona: Stand up! What is the opposite?',
              'Adam: Sit down!',
              'Miss Mona: Open your bag! What is the opposite?',
              'Dina: Close your bag!',
              'Busy Bee: Amazing! You know all your classroom opposites!'
            ],
            solutionAr: 'تعلم الأضداد يضاعف الحصيلة اللغوية للتلميذ في وقت قصير.',
            takeawayAr: 'الأضداد الحركية تساعد الصغار على تذكر معاني الأفعال بسلاسة ومرح.',
            takeawayEn: 'Opposite pairs help young learners remember verb meanings joyfully.'
          }
        ]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة 2: حديقة الألوان والأشكال (Unit 2: The Garden of Colors and Shapes)',
    unitTitleEn: 'Unit 2: The Garden of Colors and Shapes',
    lessons: [
      {
        titleAr: 'عناصر الطبيعة في الحديقة وتسمية الألوان',
        titleEn: 'Garden Nature & Colors: I can see...',
        subtitleAr: 'عناصر الحديقة: Grass, Flower, Tree, Sky والألوان: Red, Green, Blue, Yellow',
        subtitleEn: 'Garden elements and colors with the pattern: I can see a...',
        focusAr: 'وصف الطبيعة والتعبير عن المشاهدات: I can see green grass. The sky is blue. The sun is yellow. The flower is red.',
        focusEn: 'Describing nature and using "I can see...": The grass is green, the sky is blue, the flower is red.',
        activityAr: 'انظر من النافذة أو في فناء المدرسة، وعد 3 أشياء ملونة تستطيع رؤيتها مستخدماً I can see.',
        activityEn: 'Look outside and name three colored objects using "I can see a...".',
        questionAr: 'ما اللون الحقيقي للعشب (Grass) في الحديقة باللغة الإنجليزية؟',
        questionEn: 'What is the color of grass in the garden?',
        optionsAr: ['Green (أخضر)', 'Red (أحمر)', 'Blue (أزرق)'],
        optionsEn: ['Green', 'Red', 'Blue'],
        correctIndex: 0,
        vocabulary: [
          ['عشب', 'Grass'],
          ['زهرة', 'Flower'],
          ['شجرة', 'Tree'],
          ['سماء', 'Sky'],
          ['عصفور', 'Bird'],
          ['فراشة', 'Butterfly'],
          ['أخضر', 'Green'],
          ['أزرق', 'Blue'],
          ['أحمر', 'Red'],
          ['أصفر', 'Yellow']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'حديقة الألوان والأشكال (Connect 1)',
        diagramTitleEn: 'The Garden of Colors and Shapes (Connect 1)',
        diagramCaptionAr: 'مخطط الطبيعة والألوان الأساسية من كتاب وزارة التربية والتعليم الرسمي',
        diagramCaptionEn: 'Primary colors and garden nature diagram from the official MOE textbook',
        workedExamples: [
          {
            id: 'we-g1-u2-1',
            titleAr: 'النموذج 1 من 4: استخدام نمط "I can see..."',
            titleEn: 'Worked Example 1 of 4: Using "I can see..." Pattern',
            problemAr: 'أنت في الحديقة وترى شجرة خضراء وعصفوراً يطير، كيف تعبر عن ذلك؟',
            problemEn: 'You are in the garden and see a green tree and a bird. How do you describe this?',
            stepsAr: [
              'الخطوة 1: ابدأ بعبارة التعبير عن الرؤية: "I can see".',
              'الخطوة 2: ضع اللون قبل الاسم: "a green tree".',
              'الخطوة 3: ركب الجملة كاملة: "I can see a green tree".'
            ],
            solutionAr: '"I can see a green tree and a flying bird" — نمط كتاب الوزارة المعتمد.',
            takeawayAr: 'في اللغة الإنجليزية تأتي صفة اللون قبل الاسم الموصوف دائماً: red flower, blue sky.',
            takeawayEn: 'Color adjectives always precede the noun in English.'
          },
          {
            id: 'we-g1-u2-2',
            titleAr: 'النموذج 2 من 4: ربط السماء والشمس بالألوان الصحيحة',
            titleEn: 'Worked Example 2 of 4: Matching Nature with Colors',
            problemAr: 'صياغة جمل صحيحة عن الطبيعة: ما لون السماء وما لون الشمس؟',
            problemEn: 'Forming accurate nature descriptions: What color is the sky and the sun?',
            stepsAr: [
              'الخطوة 1: السماء = Sky، ولونها أزرق = Blue: "The sky is blue".',
              'الخطوة 2: الشمس = Sun، ولونها أصفر = Yellow: "The sun is yellow".'
            ],
            solutionAr: 'الجمل تعتمد على الفعل is مع المفرد: The sky is blue / The sun is yellow.',
            takeawayAr: 'استخدام Verb to be (is) لوصف حالة أو لون الشيء المفرد.',
            takeawayEn: 'Use verb to be "is" when describing singular subjects.'
          },
          {
            id: 'we-g1-u2-3',
            titleAr: 'النموذج 3 من 4: كشف الخطأ الشائع في ترتيب الصفة والاسم',
            titleEn: 'Worked Example 3 of 4: Correcting Adjective Order',
            problemAr: 'قارن بين "flower red" و "red flower"، أيهما الصواب باللغة الإنجليزية؟',
            problemEn: 'Compare "flower red" vs "red flower". Which is correct in English?',
            stepsAr: [
              'الخطوة 1: في اللغة العربية نقول "زهرة حمراء" (الاسم أولاً ثم الصفة).',
              'الخطوة 2: في اللغة الإنجليزية نعكس الترتيب فتأتي الصفة أولاً: "red flower".'
            ],
            solutionAr: 'الصواب هو "a red flower" وليس "flower red".',
            takeawayAr: 'الانتباه للفارق بين اللغتين يمنع الخطأ الشائع في ترجمة التراكيب.',
            takeawayEn: 'Paying attention to language structure differences prevents common translation mistakes.'
          },
          {
            id: 'we-g1-u2-4',
            titleAr: 'النموذج 4 من 4: تحدي استكشاف الحديقة',
            titleEn: 'Worked Example 4 of 4: Garden Explorer Challenge',
            problemAr: 'عد أربعة عناصر طبيعية مختلفة بألوانها الأربعة المقررة.',
            problemEn: 'Name four distinct natural objects using all four targeted colors.',
            stepsAr: [
              'الخطوة 1: Green -> "green grass" (عشب أخضر).',
              'الخطوة 2: Blue -> "blue sky" (سماء زرقاء).',
              'الخطوة 3: Red -> "red flower" (زهرة حمراء).',
              'الخطوة 4: Yellow -> "yellow sun" (شمس صفراء).'
            ],
            solutionAr: 'إتقان الألوان الأربعة وتطبيقها على عناصر البيئة بنجاح.',
            takeawayAr: 'التكرار والربط بالبيئة يمنح المتعلم الصغير ثقة تامة في التعبير.',
            takeawayEn: 'Regular repetition connected to real life gives young learners complete confidence.'
          }
        ]
      },
      {
        titleAr: 'الأشكال الهندسية وصوتيات حرفي S و A',
        titleEn: 'Geometric Shapes & Phonics: Letters Ss and Aa',
        subtitleAr: 'الأشكال: Circle, Square, Triangle وصوت /s/ (sun, star) وصوت /æ/ (ant, apple)',
        subtitleEn: 'Shapes: Circle, Square, Triangle and phonics /s/ (sun, star) and /æ/ (ant, apple)',
        focusAr: 'التعرف على الأشكال الهندسية الأساسية وتسميتها، وإتقان نطق حرف Ss (/s/) في sun, star, snake وحرف Aa (/æ/) في ant, apple.',
        focusEn: 'Naming shapes (circle, square, triangle, rectangle) and phonics /s/ (sun, star, snake) and /æ/ (ant, axe, apple).',
        activityAr: 'ارسم دائرة ومربعاً ومثلثاً ولون كل شكل بلون مختلف واذكر اسمه بالإنجليزية.',
        activityEn: 'Draw a circle, square, and triangle. Color each and say its English name.',
        questionAr: 'ما الشكل الهندسي الذي يعني "دائرة" باللغة الإنجليزية؟',
        questionEn: 'Which English word means "دائرة"?',
        optionsAr: ['Circle (دائرة)', 'Square (مربع)', 'Triangle (مثلث)'],
        optionsEn: ['Circle', 'Square', 'Triangle'],
        correctIndex: 0,
        vocabulary: [
          ['دائرة', 'Circle'],
          ['مربع', 'Square'],
          ['مثلث', 'Triangle'],
          ['مستطيل', 'Rectangle'],
          ['شمس', 'Sun'],
          ['نجمة', 'Star'],
          ['نملة', 'Ant'],
          ['تفاحة', 'Apple']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'الأشكال الهندسية والصوتيات (Connect 1)',
        diagramTitleEn: 'Shapes and Phonics (Connect 1)',
        diagramCaptionAr: 'نماذج الأشكال الهندسية وصوتيات حرفي Ss و Aa من كتاب الوزارة',
        diagramCaptionEn: 'Shapes and phonics models for letters Ss and Aa from the MOE book',
        workedExamples: [
          {
            id: 'we-g1-u2-2-1',
            titleAr: 'النموذج 1 من 4: التمييز البصري واللفظي بين الأشكال',
            titleEn: 'Worked Example 1 of 4: Visual & Oral Shape Identification',
            problemAr: 'كيف نميز بين المربع والمثلث والدائرة باللغة الإنجليزية؟',
            problemEn: 'How do we distinguish between a circle, square, and triangle in English?',
            stepsAr: [
              'الخطوة 1: الشكل الدائري بدون زوايا: "It is a circle".',
              'الخطوة 2: الشكل ذو الأربعة أضلاع المتساوية: "It is a square".',
              'الخطوة 3: الشكل ذو الثلاثة أضلاع: "It is a triangle".'
            ],
            solutionAr: 'تسمية دقيقة لكل شكل: a circle, a square, a triangle.',
            takeawayAr: 'ربط الرياضيات باللغة الإنجليزية ينمي التفكير المنطقي والمهارات المتكاملة.',
            takeawayEn: 'Integrating math with English develops logical thinking and cross-curricular skills.'
          },
          {
            id: 'we-g1-u2-2-2',
            titleAr: 'النموذج 2 من 4: صوت حرف Ss ومخارجه الصوتية',
            titleEn: 'Worked Example 2 of 4: Phonics Sound /s/',
            problemAr: 'كيف يخرج صوت الصفير النقي /s/ في كلمات: Sun, Star, Snake؟',
            problemEn: 'How do we produce the clear /s/ sound in Sun, Star, Snake?',
            stepsAr: [
              'الخطوة 1: اقفل الأسنان برفق واجعل طرف اللسان قرب سقف الحلق.',
              'الخطوة 2: ادفع الهواء بشكل مستمر لإصدار صوت الصفير: /s/.',
              'الخطوة 3: انطق: /s/.. Sun، /s/.. Star.'
            ],
            solutionAr: 'صوت /s/ هو صوت صفيري غير جهري يظهر في أول كلمة Sun.',
            takeawayAr: 'التدريب المستمر أمام المرآة يساعد الأطفال على ضبط مخارج الحروف بدقة.',
            takeawayEn: 'Practicing in front of a mirror helps children master articulation points.'
          },
          {
            id: 'we-g1-u2-2-3',
            titleAr: 'النموذج 3 من 4: صوت حرف Aa القصير (Short /æ/)',
            titleEn: 'Worked Example 3 of 4: Phonics Sound /æ/',
            problemAr: 'ما الطريقة المثالية لنطق صوت /æ/ القصير في Apple و Ant؟',
            problemEn: 'What is the optimal way to pronounce short /æ/ in Apple and Ant?',
            stepsAr: [
              'الخطوة 1: افتح الفم إلى الأسفل بدرجة متوسطة.',
              'الخطوة 2: انطق صوتاً منفتحاً وواضحاً: /æ/.',
              'الخطوة 3: ردد: /æ/.. Apple، /æ/.. Ant.'
            ],
            solutionAr: 'صوت Aa في أولى ابتدائي هو الصوت القصير /æ/.',
            takeawayAr: 'التمييز بين صوت الحرف واسم الحرف هو المفتاح الذهبي لتعلم القراءة الإنجليزية.',
            takeawayEn: 'Distinguishing letter name from letter sound is the golden key to early reading.'
          },
          {
            id: 'we-g1-u2-2-4',
            titleAr: 'النموذج 4 من 4: دمج الأشكال مع الألوان في جمل مركبة',
            titleEn: 'Worked Example 4 of 4: Combining Shapes & Colors',
            problemAr: 'صف مثلثاً أحمر ودائرة زرقاء ومربعاً أصفر بأسلوب صحيح.',
            problemEn: 'Describe a red triangle, a blue circle, and a yellow square correctly.',
            stepsAr: [
              'الخطوة 1: المثلث الأحمر -> "a red triangle".',
              'الخطوة 2: الدائرة الزرقاء -> "a blue circle".',
              'الخطوة 3: المربع الأصفر -> "a yellow square".'
            ],
            solutionAr: 'القاعدة: أداة النكرة + صفة اللون + اسم الشكل الهندسي.',
            takeawayAr: 'بناء الجمل المتكاملة يعزز الطلاقة اللغوية المبكرة لدى تلاميذ الصف الأول.',
            takeawayEn: 'Building compound descriptive phrases fosters early English fluency.'
          }
        ]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة 3: أنا أحب عائلتي (Unit 3: I Love My Family)',
    unitTitleEn: 'Unit 3: I Love My Family',
    lessons: [
      {
        titleAr: 'أفراد الأسرة وتقديم العائلة',
        titleEn: 'Family Members & Introducing Relatives',
        subtitleAr: 'أفراد الأسرة: Father, Mother, Brother, Sister, Grandfather, Grandmother',
        subtitleEn: 'Family members and introducing them with: This is my...',
        focusAr: 'التعرف على أفراد العائلة واستخدام نمط التقديم: This is my mother. This is my father. والتعبير عن المشاعر: I love my family.',
        focusEn: 'Identifying family members and introducing them: This is my mum, This is my dad. Expressing feelings: I love my family.',
        activityAr: 'احضر صورة عائلتك أو ارسمها، وقدم كل فرد لزملائك قائلاً: This is my...',
        activityEn: 'Draw your family and present each member saying: This is my...',
        questionAr: 'ما العبارة الصحيحة لتقديم والدتك لزميلك بالإنجليزية؟',
        questionEn: 'How do you correctly introduce your mother in English?',
        optionsAr: ['This is my mother.', 'This is my bag.', 'Goodbye mother.'],
        optionsEn: ['This is my mother.', 'This is my bag.', 'Goodbye mother.'],
        correctIndex: 0,
        vocabulary: [
          ['أم', 'Mother (Mum)'],
          ['أب', 'Father (Dad)'],
          ['أخ', 'Brother'],
          ['أخت', 'Sister'],
          ['جد', 'Grandfather'],
          ['جدة', 'Grandmother'],
          ['طفل رضيع', 'Baby'],
          ['يحب', 'Love']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'شجرة العائلة والمشاعر الإيجابية (Connect 1)',
        diagramTitleEn: 'Family Tree and Positive Emotions (Connect 1)',
        diagramCaptionAr: 'نموذج تقديم أفراد الأسرة من كتاب وزارة التربية والتعليم الرسمي',
        diagramCaptionEn: 'Family presentation model from the official MOE Connect 1 textbook',
        workedExamples: [
          {
            id: 'we-g1-u3-1',
            titleAr: 'النموذج 1 من 4: تقديم أفراد العائلة بعبارة "This is my..."',
            titleEn: 'Worked Example 1 of 4: Presenting Family Members',
            problemAr: 'تريد أن تعرف صديقك على والدك ووالدتك، ماذا تقول؟',
            problemEn: 'You want to introduce your father and mother to a friend. What do you say?',
            stepsAr: [
              'الخطوة 1: أشر لوالدك وقل: "This is my father".',
              'الخطوة 2: أشر لوالدتك وقل: "This is my mother".',
              'الخطوة 3: أضف عبارة المحبة: "I love my family".'
            ],
            solutionAr: '"This is my father. This is my mother. I love my family." — نمط معتمد.',
            takeawayAr: 'عبارة "This is my..." هي النمط الأساسي للإشارة وتقديم الأشخاص المقربين.',
            takeawayEn: '"This is my..." is the foundational structure for introducing close relatives.'
          },
          {
            id: 'we-g1-u3-2',
            titleAr: 'النموذج 2 من 4: التمييز بين الأخ والأخت (Brother & Sister)',
            titleEn: 'Worked Example 2 of 4: Distinguishing Brother vs Sister',
            problemAr: 'كيف تفرق باللغة الإنجليزية عند التحدث عن أخيك وعن أختك؟',
            problemEn: 'How do you differentiate between your brother and your sister in English?',
            stepsAr: [
              'الخطوة 1: المذكر (الأخ) = Brother: "He is my brother".',
              'الخطوة 2: المؤنث (الأخت) = Sister: "She is my sister".'
            ],
            solutionAr: 'Brother للأخ الذكر، و Sister للأخت المؤنثة.',
            takeawayAr: 'الربط بين المفردة والضمير (He / She) يمهد للقواعد اللغوية السليمة.',
            takeawayEn: 'Connecting family terms to subject pronouns (He/She) builds grammatical precision.'
          },
          {
            id: 'we-g1-u3-3',
            titleAr: 'النموذج 3 من 4: احترام الجد والجدة (Grandfather & Grandmother)',
            titleEn: 'Worked Example 3 of 4: Introducing Grandparents',
            problemAr: 'ما التعبير المناسب لتقديم الجد والجدة وإظهار التقدير لهما؟',
            problemEn: 'What is the appropriate way to introduce grandparents and express appreciation?',
            stepsAr: [
              'الخطوة 1: الجد = Grandfather: "This is my grandfather".',
              'الخطوة 2: الجدة = Grandmother: "This is my grandmother".',
              'الخطوة 3: التعبير عن الرعاية: "I help my grandparents".'
            ],
            solutionAr: 'تسمية الجد والجدة والاعتزاز بدورهما في الأسرة.',
            takeawayAr: 'القيم الأخلاقية واحترام كبار السن جزء لا يتجزأ من المنهج التعليمي المصري.',
            takeawayEn: 'Respecting elders and moral values are core pillars of the national curriculum.'
          },
          {
            id: 'we-g1-u3-4',
            titleAr: 'النموذج 4 من 4: كتابة بطاقة محبة للأسرة',
            titleEn: 'Worked Example 4 of 4: Family Love Card Project',
            problemAr: 'صمم بطاقة قصيرة تعبر فيها عن حبك لعائلتك باللغة الإنجليزية.',
            problemEn: 'Create a short message expressing love for your family in English.',
            stepsAr: [
              'الخطوة 1: ابدأ بعبارة: "To my dear family".',
              'الخطوة 2: اكتب الرسالة الرئيسية: "I love my mum and dad".',
              'الخطوة 3: وقع باسمك: "From Adam".'
            ],
            solutionAr: 'بطاقة بسيطة ومؤثرة تعزز مهارة الكتابة والتعبير الوجداني.',
            takeawayAr: 'ربط اللغة بالمشاعر الصادقة يحبب التلميذ في تعلم الإنجليزية.',
            takeawayEn: 'Connecting language to genuine feelings makes learning English enjoyable.'
          }
        ]
      },
      {
        titleAr: 'التعاون الأسري وصوتيات حرفي H و N',
        titleEn: 'Helping at Home & Phonics: Letters Hh and Nn',
        subtitleAr: 'المساعدة في المنزل وصوت /h/ (hat, hand) وصوت /n/ (nut, net, nose)',
        subtitleEn: 'Helping family members and phonics /h/ (hat, hand) and /n/ (nut, net, nose)',
        focusAr: 'التعاون والمساعدة الأسرية (Thank you, Please) وإتقان نطق صوت /h/ لحرف Hh في hat, hand, hen وصوت /n/ لحرف Nn في nut, net, nose.',
        focusEn: 'Family values (kindness, cooperation) and mastering phonics /h/ (hat, hand, hen) and /n/ (nut, net, nose).',
        activityAr: 'تدريب صوتي مع حركة اليد: ارفع يدك (Hand) عند سماع صوت /h/ والمس أنفك (Nose) عند سماع صوت /n/.',
        activityEn: 'Kinesthetic phonics game: Raise your hand for /h/ and touch your nose for /n/.',
        questionAr: 'أي من الكلمات الآتية تبدأ بصوت حرف Hh (/h/)؟',
        questionEn: 'Which word begins with the /h/ sound?',
        optionsAr: ['Hand (يد)', 'Nose (أنف)', 'Cat (قطة)'],
        optionsEn: ['Hand', 'Nose', 'Cat'],
        correctIndex: 0,
        vocabulary: [
          ['قبعة', 'Hat'],
          ['يد', 'Hand'],
          ['دجاجة', 'Hen'],
          ['مكسرات/بندقة', 'Nut'],
          ['شبكة', 'Net'],
          ['أنف', 'Nose'],
          ['شكراً لك', 'Thank you'],
          ['من فضلك', 'Please']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'صوتيات وقيم الوحدة الثالثة (Connect 1)',
        diagramTitleEn: 'Unit 3 Phonics and Values (Connect 1)',
        diagramCaptionAr: 'صوتيات حرفي Hh و Nn وعبارات الشكر والتعاون من كتاب الوزارة',
        diagramCaptionEn: 'Phonics for letters Hh and Nn with courtesy phrases from the MOE book',
        workedExamples: [
          {
            id: 'we-g1-u3-2-1',
            titleAr: 'النموذج 1 من 4: صوت حرف Hh ومخارجه الصوتية',
            titleEn: 'Worked Example 1 of 4: Phonics Sound /h/',
            problemAr: 'كيف ننطق صوت /h/ الهوائي النقي في: Hat, Hand, Hen؟',
            problemEn: 'How do we produce the airy /h/ sound in Hat, Hand, Hen?',
            stepsAr: [
              'الخطوة 1: افتح الفم برفق وأخرج تيار هواء دافئ من الحلق كالتنفس.',
              'الخطوة 2: انطق صوتاً خفيفاً مهموساً: /h/.',
              'الخطوة 3: طبق على الكلمات: /h/.. Hand، /h/.. Hat.'
            ],
            solutionAr: 'صوت Hh هو صوت هواء نقي يشبه الهاء الخفيفة في العربية.',
            takeawayAr: 'صوت /h/ لا يتطلب اهتزازاً في الحبال الصوتية بل انسياباً للهواء.',
            takeawayEn: 'The /h/ sound is an unvoiced gentle breath sound.'
          },
          {
            id: 'we-g1-u3-2-2',
            titleAr: 'النموذج 2 من 4: صوت حرف Nn الأنفي (Nasal Sound /n/)',
            titleEn: 'Worked Example 2 of 4: Phonics Sound /n/',
            problemAr: 'كيف يخرج صوت الغنة /n/ في: Nose, Nut, Net؟',
            problemEn: 'How do we articulate the nasal /n/ sound in Nose, Nut, Net?',
            stepsAr: [
              'الخطوة 1: الصق طرف اللسان باللثة العلوية خلف الأسنان.',
              'الخطوة 2: اسمح للهواء بالخروج من الأنف برنين خفيف: /n/.',
              'الخطوة 3: انطق: /n/.. Nose، /n/.. Nut.'
            ],
            solutionAr: 'صوت Nn يخرج بمساعدة الأنف (Nasal consonant).',
            takeawayAr: 'وعي الطفل بمخارج الحروف يجعل القراءة سهلة وتلقائية.',
            takeawayEn: 'Phonological awareness makes early reading smooth and automatic.'
          },
          {
            id: 'we-g1-u3-2-3',
            titleAr: 'النموذج 3 من 4: استخدام عبارات الأدب (Please & Thank you)',
            titleEn: 'Worked Example 3 of 4: Using Polite Phrases',
            problemAr: 'كيف تطلب مساعدة من والدتك وكيف تشكرها عند تلبيتها؟',
            problemEn: 'How do you ask your mother for help and thank her politely?',
            stepsAr: [
              'الخطوة 1: عند الطلب استخدم "Please": "Help me, please Mum".',
              'الخطوة 2: عند استلام المساعدة قل بابتسامة: "Thank you, Mum".'
            ],
            solutionAr: 'استخدام Please للطلب المهذب، و Thank you للتعبير عن الشكر والامتنان.',
            takeawayAr: 'التهذيب اللغوي يعزز العلاقات الإيجابية داخل الأسرة والمجتمع.',
            takeawayEn: 'Polite words foster warmth and respect within family and society.'
          },
          {
            id: 'we-g1-u3-2-4',
            titleAr: 'النموذج 4 من 4: لعبة تصنيف الكلمات بحسب الصوت الأول',
            titleEn: 'Worked Example 4 of 4: Sound Sorting Challenge',
            problemAr: 'صنف الكلمات التالية إلى مجموعتين: Hat, Nose, Hand, Nut.',
            problemEn: 'Sort the words into two sound groups: Hat, Nose, Hand, Nut.',
            stepsAr: [
              'الخطوة 1: مجموعة صوت /h/: Hat, Hand.',
              'الخطوة 2: مجموعة صوت /n/: Nose, Nut.'
            ],
            solutionAr: 'تصنيف سمعي وبصري سليم يطابق أهداف تقييم وزارة التربية والتعليم.',
            takeawayAr: 'الفرز الصوتي ينمي مهارات التفكير التحليلي والتمييز السمعي.',
            takeawayEn: 'Sound sorting builds analytical thinking and phonemic discrimination.'
          }
        ]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة 4: جسمي وحواسي الخمس (Unit 4: My Body and My Senses)',
    unitTitleEn: 'Unit 4: My Body and My Senses',
    lessons: [
      {
        titleAr: 'أجزاء الوجه والجسم والأفعال الحركية',
        titleEn: 'Parts of the Body: Touch your nose!',
        subtitleAr: 'أجزاء الوجه: Eye, Nose, Ear, Mouth, Hand والأفعال الحركية',
        subtitleEn: 'Facial and body parts with action imperatives: Touch your ear!',
        focusAr: 'التعرف على أجزاء الوجه والجسم واستخدام صيغ الأوامر والتوجيهات: Touch your nose. Touch your mouth. Open your eyes. Close your hands.',
        focusEn: 'Identifying body parts and responding to commands: Touch your nose! Touch your ear! Open your mouth.',
        activityAr: 'لعبة سيمون يقول (Simon Says): نفذ الأمر فقط عندما تسمع Touch your... وتحرك بمرونة.',
        activityEn: 'Play "Simon says": Touch your ear, touch your nose, and practice body vocabulary.',
        questionAr: 'ما الكلمة الإنجليزية التي تعني "عين"؟',
        questionEn: 'Which English word means "عين"?',
        optionsAr: ['Eye (عين)', 'Nose (أنف)', 'Ear (أذن)'],
        optionsEn: ['Eye', 'Nose', 'Ear'],
        correctIndex: 0,
        vocabulary: [
          ['رأس', 'Head'],
          ['عين', 'Eye'],
          ['أنف', 'Nose'],
          ['فم', 'Mouth'],
          ['أذن', 'Ear'],
          ['يد', 'Hand'],
          ['قدم', 'Foot'],
          ['ساق', 'Leg']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'جسمي وحواسي (Connect 1)',
        diagramTitleEn: 'My Body and My Senses (Connect 1)',
        diagramCaptionAr: 'مخطط أجزاء الوجه والجسم من كتاب وزارة التربية والتعليم الرسمي',
        diagramCaptionEn: 'Body parts and sensory organs diagram from the official MOE textbook',
        workedExamples: [
          {
            id: 'we-g1-u4-1',
            titleAr: 'النموذج 1 من 4: تنفيذ أوامر لمس أجزاء الوجه',
            titleEn: 'Worked Example 1 of 4: Body Part Action Commands',
            problemAr: 'عندما يُطلب منك: "Touch your nose"، ما الخطوات العملية للاستجابة؟',
            problemEn: 'When instructed "Touch your nose", what is the correct physical response?',
            stepsAr: [
              'الخطوة 1: استمع للأمر وحدد العضو المطلوب: "nose" (الأنف).',
              'الخطوة 2: ارفع يدك والمس أنفك مباشرة.',
              'الخطوة 3: كرر الكلمة بصوت واضح: "This is my nose".'
            ],
            solutionAr: 'الاستجابة الحركية الصحيحة مع ترديد العبارة: "This is my nose".',
            takeawayAr: 'التعلم الحركي يربط المفهوم بالذاكرة العضلية ويسرع استدعاء الكلمات.',
            takeawayEn: 'Total Physical Response (TPR) links vocabulary to muscle memory.'
          },
          {
            id: 'we-g1-u4-2',
            titleAr: 'النموذج 2 من 4: المفرد والجمع لأعضاء الجسم',
            titleEn: 'Worked Example 2 of 4: Singular and Plural Body Parts',
            problemAr: 'كيف ننتقل من المفرد إلى الجمع: عين واحدة مقابل عينين، ويد واحدة مقابل يدين؟',
            problemEn: 'How do we form plurals: one eye vs two eyes, one hand vs two hands?',
            stepsAr: [
              'الخطوة 1: للمفرد نقول: "one eye" (عين واحدة) و "one hand" (يد واحدة).',
              'الخطوة 2: للجمع نضيف صوت /s/ في النهاية: "two eyes" و "two hands".'
            ],
            solutionAr: 'one eye -> two eyes، و one hand -> two hands.',
            takeawayAr: 'إضافة حرف s في نهاية الأسماء المعدودة تدل على الجمع في الإنجليزية.',
            takeawayEn: 'Adding "s" to countable nouns creates standard plural forms.'
          },
          {
            id: 'we-g1-u4-3',
            titleAr: 'النموذج 3 من 4: تصحيح الخطأ الشائع في أسماء الإشارة',
            titleEn: 'Worked Example 3 of 4: Correcting Demonstrative Agreement',
            problemAr: 'لماذا نقول "This is my nose" ولكن نقول "These are my eyes"؟',
            problemEn: 'Why do we say "This is my nose" but "These are my eyes"?',
            stepsAr: [
              'الخطوة 1: الأنف مفرد (واحد) فنستخدم معه اسم الإشارة المفرد: "This is my nose".',
              'الخطوة 2: العينان جمع (اثنتان) فنستخدم معهما اسم الإشارة للجمع: "These are my eyes".'
            ],
            solutionAr: 'This is للمفرد القريب، و These are للجمع القريب.',
            takeawayAr: 'التوافق بين الفاعل واسم الإشارة ركيزة أساسية في بناء الجملة الإنجليزية.',
            takeawayEn: 'Subject and demonstrative agreement is fundamental in English syntax.'
          },
          {
            id: 'we-g1-u4-4',
            titleAr: 'النموذج 4 من 4: مشروع النظافة الشخصية والعناية بالجسم',
            titleEn: 'Worked Example 4 of 4: Personal Hygiene & Body Care',
            problemAr: 'ما العبارات الإنجليزية التي نستخدمها للعناية بنظافة اليدين والأسنان؟',
            problemEn: 'What English expressions do we use for hand washing and dental hygiene?',
            stepsAr: [
              'الخطوة 1: غسل اليدين -> "Wash your hands with soap".',
              'الخطوة 2: تنظيف الأسنان -> "Brush your teeth".',
              'الخطوة 3: غسل الوجه -> "Wash your face with clean water".'
            ],
            solutionAr: 'ربط اللغة بالعادات الصحية اليومية المقررة في المنهج الوزاري.',
            takeawayAr: 'الصحة والنظافة اليومية تحمي أبطالنا الصغار وتبني أسلوب حياة سليم.',
            takeawayEn: 'Daily hygiene practices build healthy lifestyle habits for young learners.'
          }
        ]
      },
      {
        titleAr: 'الحواس الخمس وصوتيات حرفي C و K',
        titleEn: 'The Five Senses & Phonics: Letters Cc and Kk',
        subtitleAr: 'الحواس الخمس وصوت /k/ المشترك لحرفي C (cat, car) و K (kite, king)',
        subtitleEn: 'The five senses (see, hear, touch, smell, taste) and phonics /k/ (cat, kite)',
        focusAr: 'استخدام الحواس الخمس في جمل وظيفية: I can see with my eyes. I can hear with my ears. I can touch with my hands. ونطق صوت /k/ لحرفي C و K.',
        focusEn: 'Functional sentences with senses: I see with my eyes, I hear with my ears. Phonics sound /k/ for Cc (cat, car, cake) and Kk (kite, king, kangaroo).',
        activityAr: 'اربط كل حاسة بعضوها: أغمض عينيك وتعرف على أصوات الفصل بأذنيك قائلاً: I can hear with my ears.',
        activityEn: 'Sensory matching: Close eyes and identify sounds saying: "I can hear with my ears".',
        questionAr: 'بماذا نرى الأشياء من حولنا؟ (I can see with my...)؟',
        questionEn: 'Complete the sentence: "I can see with my _______."',
        optionsAr: ['Eyes (عيني)', 'Ears (أذني)', 'Nose (أنفي)'],
        optionsEn: ['Eyes', 'Ears', 'Nose'],
        correctIndex: 0,
        vocabulary: [
          ['يلمس', 'Touch'],
          ['يرى', 'See'],
          ['يسمع', 'Hear'],
          ['يشم', 'Smell'],
          ['يتذوق', 'Taste'],
          ['قطة', 'Cat'],
          ['سيارة', 'Car'],
          ['طائرة ورقية', 'Kite']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'الحواس الخمس وصوت حرف الكاف (Connect 1)',
        diagramTitleEn: 'Five Senses and /k/ Sound (Connect 1)',
        diagramCaptionAr: 'وظائف الحواس الخمس وصوتيات حرفي C و K من كتاب الوزارة الرسمي',
        diagramCaptionEn: 'Sensory functions and phonics drills for letters Cc and Kk from the MOE book',
        workedExamples: [
          {
            id: 'we-g1-u4-2-1',
            titleAr: 'النموذج 1 من 4: ربط كل حاسة بعضوها الخاص',
            titleEn: 'Worked Example 1 of 4: Linking Senses to Organs',
            problemAr: 'كيف نعبر عن وظيفة كل حاسة من الحواس الخمس بجملة إنجليزية متكاملة؟',
            problemEn: 'How do we express each sensory function in complete English sentences?',
            stepsAr: [
              'الخطوة 1: حاسة البصر -> "I see with my eyes".',
              'الخطوة 2: حاسة السمع -> "I hear with my ears".',
              'الخطوة 3: حاسة الشم -> "I smell with my nose".',
              'الخطوة 4: حاسة التذوق -> "I taste with my mouth".'
            ],
            solutionAr: 'تركيب الجملة: الفاعل (I) + فعل الحاسة + with my + العضو.',
            takeawayAr: 'حرف الجر "with" هنا يعني "بواسطة" أو "باستخدام".',
            takeawayEn: 'The preposition "with" indicates the instrument or sensory organ used.'
          },
          {
            id: 'we-g1-u4-2-2',
            titleAr: 'النموذج 2 من 4: صوت /k/ لحرف Cc في الكلمات المقررة',
            titleEn: 'Worked Example 2 of 4: Phonics Sound /k/ with Letter C',
            problemAr: 'كيف ننطق حرف C بصوت /k/ في: Cat, Car, Cake, Computer؟',
            problemEn: 'How do we articulate letter C with /k/ sound in Cat, Car, Cake, Computer?',
            stepsAr: [
              'الخطوة 1: ارفع مؤخرة اللسان نحو الحلق واحبس الهواء لحظة.',
              'الخطوة 2: اطلق الهواء فجأة لإصدار صوت /k/ الانفجاري النقي.',
              'الخطوة 3: انطق: Cat ... Car ... Cake.'
            ],
            solutionAr: 'حرف C يُنطق /k/ في أغلب الكلمات ما لم يتبعه e أو i أو y.',
            takeawayAr: 'معرفة القاعدة الصوتية تسهل على التلميذ قراءة الكلمات الجديدة بثقة.',
            takeawayEn: 'Mastering the hard C rule enables confident reading of new words.'
          },
          {
            id: 'we-g1-u4-2-3',
            titleAr: 'النموذج 3 من 4: صوت /k/ لحرف Kk وتطبيقاته',
            titleEn: 'Worked Example 3 of 4: Phonics Sound /k/ with Letter K',
            problemAr: 'ما الكلمات التي تبدأ بحرف K ولها نفس صوت /k/ في منهج أولى ابتدائي؟',
            problemEn: 'What words begin with letter K sharing the /k/ sound in Primary 1?',
            stepsAr: [
              'الخطوة 1: كلمة طائرة ورقية = Kite، تبدأ بحرف K وصوتها /k/.',
              'الخطوة 2: كلمة ملك = King، تبدأ بحرف K وصوتها /k/.'
            ],
            solutionAr: 'حرف C وحرف K يشتركان في نفس الصوت /k/ في بداية الكلمات.',
            takeawayAr: 'اشتراك الحروف في نفس الصوت يعلم الطفل التمييز الصوتي والكتابي.',
            takeawayEn: 'Shared phonemes teach children both auditory and orthographic distinction.'
          },
          {
            id: 'we-g1-u4-2-4',
            titleAr: 'النموذج 4 من 4: مسابقة التخمين بالحواس',
            titleEn: 'Worked Example 4 of 4: Sensory Mystery Game',
            problemAr: 'المس شيئاً ناعماً أو استمع لصوت جرس، وعبر عن الحاسة المستخدمة.',
            problemEn: 'Touch a soft object or listen to a bell and name the sense used.',
            stepsAr: [
              'الخطوة 1: عند لمس دمية ناعمة -> "I can touch it with my hand".',
              'الخطوة 2: عند سماع جرس الحصة -> "I can hear it with my ear".'
            ],
            solutionAr: 'تطبيق عملي واقعي يربط الحواس بالتجربة الحسية المباشرة.',
            takeawayAr: 'الأنشطة الاستكشافية تحفز ذكاء الأطفال وتشعل شغف التعلم.',
            takeawayEn: 'Discovery activities stimulate children curiosity and passion for learning.'
          }
        ]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة 5: في المزرعة (Unit 5: On the Farm)',
    unitTitleEn: 'Unit 5: On the Farm',
    lessons: [
      {
        titleAr: 'حيوانات المزرعة والحياة الريفية',
        titleEn: 'Farm Animals: Cows, Horses & Ducks',
        subtitleAr: 'حيوانات المزرعة: Duck, Horse, Cow, Sheep, Goat, Chicken وفوائدها',
        subtitleEn: 'Farm animals and their benefits: milk, eggs, wool, and country life',
        focusAr: 'التعرف على حيوانات المزرعة: cow, horse, sheep, duck, goat, chicken، وما تقدمه لنا: Cows give us milk. Chickens give us eggs.',
        focusEn: 'Identifying farm animals and their roles: Cows give us milk, chickens give us eggs, sheep have wool.',
        activityAr: 'طابق بين كل حيوان ومزرعته والفائدة التي يقدمها للإنسان مستخدماً جمل إنجليزية بسيطة.',
        activityEn: 'Match farm animals with their products (milk, eggs) using simple English sentences.',
        questionAr: 'أي من الحيوانات الآتية يعطينا الحليب (Milk) في المزرعة؟',
        questionEn: 'Which farm animal gives us milk?',
        optionsAr: ['Cow (البقرة)', 'Duck (البطة)', 'Cat (القطة)'],
        optionsEn: ['Cow', 'Duck', 'Cat'],
        correctIndex: 0,
        vocabulary: [
          ['بطة', 'Duck'],
          ['حصان', 'Horse'],
          ['بقرة', 'Cow'],
          ['خروف', 'Sheep'],
          ['ماعز', 'Goat'],
          ['دجاجة', 'Chicken'],
          ['مزرعة', 'Farm'],
          ['حليب', 'Milk']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'حيوانات المزرعة والخيرات الريفية (Connect 1)',
        diagramTitleEn: 'Farm Animals and Countryside (Connect 1)',
        diagramCaptionAr: 'مخطط حيوانات المزرعة من كتاب وزارة التربية والتعليم الرسمي',
        diagramCaptionEn: 'Farm animals and agricultural life from the official MOE textbook',
        workedExamples: [
          {
            id: 'we-g1-u5-1',
            titleAr: 'النموذج 1 من 4: تسمية حيوانات المزرعة والتعرف عليها',
            titleEn: 'Worked Example 1 of 4: Identifying Farm Animals',
            problemAr: 'أنت في زيارة لمزرعة ريفية ورأيت بقرة وحصاناً وبطة، كيف تصفها؟',
            problemEn: 'You visit a farm and see a cow, horse, and duck. How do you describe them?',
            stepsAr: [
              'الخطوة 1: أشر للبقرة وقل: "This is a cow".',
              'الخطوة 2: أشر للحصان وقل: "This is a horse. The horse is fast".',
              'الخطوة 3: أشر للبطة وقل: "This is a duck. The duck can swim".'
            ],
            solutionAr: '"This is a cow. This is a horse. This is a duck." — نمط معتمد.',
            takeawayAr: 'استخدام الصفات والأفعال البسيطة يثري وصف الحيوانات ويجعل الحديث حيوياً.',
            takeawayEn: 'Using simple verbs and adjectives enriches animal descriptions vividly.'
          },
          {
            id: 'we-g1-u5-2',
            titleAr: 'النموذج 2 من 4: جمع أسماء الحيوانات (Singular & Plural)',
            titleEn: 'Worked Example 2 of 4: Plural Farm Animals',
            problemAr: 'كيف نجمع: duck واحدة مقابل 4 بطات، و horse واحد مقابل 3 خيول؟',
            problemEn: 'How do we pluralize: one duck vs four ducks, one horse vs three horses?',
            stepsAr: [
              'الخطوة 1: One duck -> Four ducks (إضافة حرف s).',
              'الخطوة 2: One horse -> Three horses (إضافة حرف s).',
              'الخطوة 3: خروف: One sheep -> Five sheep (جمع شاذ لا يتغير). '
            ],
            solutionAr: 'إضافة s لمعظم الأسماء، مع ملاحظة أن كلمة sheep تبقى كما هي في المفرد والجمع.',
            takeawayAr: 'الانتباه للجموع الخاصة مثل sheep يمنح التلميذ تميزاً مبكراً.',
            takeawayEn: 'Noticing irregular plurals like sheep fosters early linguistic mastery.'
          },
          {
            id: 'we-g1-u5-3',
            titleAr: 'النموذج 3 من 4: من أين نحصل على غذائنا؟ (Food Origins)',
            titleEn: 'Worked Example 3 of 4: Where Food Comes From',
            problemAr: 'اربط بين منتجات الطعام اليومية وحيوان المزرعة المنتج لها.',
            problemEn: 'Connect daily breakfast food items to their source farm animals.',
            stepsAr: [
              'الخطوة 1: الحليب والجبن -> "Cows give us milk".',
              'الخطوة 2: البيض الطازج -> "Chickens give us eggs".',
              'الخطوة 3: الصوف للملابس -> "Sheep give us wool".'
            ],
            solutionAr: 'فهم دور المزرعة في تغذية الإنسان وبناء صحته.',
            takeawayAr: 'تقدير الطبيعة والحيوانات يعلم التلميذ الامتنان والرفق بالكائنات الحية.',
            takeawayEn: 'Appreciating nature and animals teaches gratitude and kindness.'
          },
          {
            id: 'we-g1-u5-4',
            titleAr: 'النموذج 4 من 4: محاكاة أصوات وحركات الحيوانات',
            titleEn: 'Worked Example 4 of 4: Animal Action Simulation',
            problemAr: 'لعبة مسرحية: كيف تقلد حركة وصوت حيوانك المفضل في المزرعة؟',
            problemEn: 'Role-play game: Mimic the sound and movement of your favorite farm animal.',
            stepsAr: [
              'الخطوة 1: الحصان يجري -> "The horse runs fast".',
              'الخطوة 2: البطة تسبح في الماء -> "The duck swims in the pond".'
            ],
            solutionAr: 'محاكاة حركية تفاعلية تعزز الفهم الشامل للمفردات الإنجليزية.',
            takeawayAr: 'الدراما والتمثيل الصفي ينقلان تعلم اللغة من الحفظ إلى الممارسة الحية.',
            takeawayEn: 'Classroom drama transforms language learning into active living experience.'
          }
        ]
      },
      {
        titleAr: 'عد الحيوانات من 1 إلى 10 وصوتيات M, G, O, F',
        titleEn: 'Counting 1-10 & Phonics: Letters Mm, Gg, Oo, Ff',
        subtitleAr: 'الأرقام من 1 إلى 10 وصوتيات: M (moon), G (goat), O (octopus), F (fish)',
        subtitleEn: 'Numbers 1 to 10 and phonics sounds /m/, /g/, /ɒ/, /f/',
        focusAr: 'عد الحيوانات والأشياء من 1 إلى 10: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten، وإتقان نطق حروف Mm, Gg, Oo, Ff.',
        focusEn: 'Counting items 1-10: I can see 3 horses, Count the ducks. Phonics /m/ (moon, milk), /g/ (goat, girl), /ɒ/ (octopus), /f/ (fish, fan).',
        activityAr: 'عد أصابع يديك من 1 إلى 10 بالإنجليزية بصوت مرتفع، ثم عد الحيوانات في الصورة.',
        activityEn: 'Count your fingers from 1 to 10 aloud in English, then count farm animals.',
        questionAr: 'كم عدد البطات إذا رأيت: (One, Two, Three ducks)؟',
        questionEn: 'How many ducks are there: (One, Two, Three)?',
        optionsAr: ['3 (Three)', '5 (Five)', '2 (Two)'],
        optionsEn: ['3 (Three)', '5 (Five)', '2 (Two)'],
        correctIndex: 0,
        vocabulary: [
          ['واحد', 'One'],
          ['اثنان', 'Two'],
          ['ثلاثة', 'Three'],
          ['أربعة', 'Four'],
          ['خمسة', 'Five'],
          ['ستة', 'Six'],
          ['سبعة', 'Seven'],
          ['ثمانية', 'Eight'],
          ['تسعة', 'Nine'],
          ['عشرة', 'Ten']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'الأرقام والصوتيات في المزرعة (Connect 1)',
        diagramTitleEn: 'Numbers and Farm Phonics (Connect 1)',
        diagramCaptionAr: 'عد الأرقام وصوتيات حروف Mm, Gg, Oo, Ff من كتاب الوزارة الرسمي',
        diagramCaptionEn: 'Counting and phonics drills for Mm, Gg, Oo, Ff from the MOE book',
        workedExamples: [
          {
            id: 'we-g1-u5-2-1',
            titleAr: 'النموذج 1 من 4: عد الأشياء وطرح سؤال "How many...?"',
            titleEn: 'Worked Example 1 of 4: Counting with "How many...?"',
            problemAr: 'أمامك صورة بها 4 خيول، كيف تسأل وتجيب عن عددها بالإنجليزية؟',
            problemEn: 'You see a picture with 4 horses. How do you ask and answer their number?',
            stepsAr: [
              'الخطوة 1: صيغة السؤال: "How many horses can you see?".',
              'الخطوة 2: عد الخيول: "One, two, three, four".',
              'الخطوة 3: الإجابة التامة: "There are four horses" أو "I can see four horses".'
            ],
            solutionAr: '"How many horses? — There are four horses." — نمط كتاب الوزارة.',
            takeawayAr: 'استخدام "How many" للسؤال عن العدد متبوعاً بالاسم الجمع دائماً.',
            takeawayEn: '"How many" is always followed by a plural countable noun.'
          },
          {
            id: 'we-g1-u5-2-2',
            titleAr: 'النموذج 2 من 4: صوت حرف Mm وصوت حرف Gg',
            titleEn: 'Worked Example 2 of 4: Phonics Sounds /m/ and /g/',
            problemAr: 'كيف نميز بين نطق صوت الشفتين /m/ في Milk وصوت الحلق /g/ في Goat؟',
            problemEn: 'How do we differentiate the bilabial /m/ in Milk and velar /g/ in Goat?',
            stepsAr: [
              'الخطوة 1: صوت /m/ يُنطق بإطباق الشفتين مع رنين صوتي: /m/.. Milk، /m/.. Moon.',
              'الخطوة 2: صوت /g/ يُنطق من أقصى اللسان مع الحلق: /g/.. Goat، /g/.. Girl.'
            ],
            solutionAr: 'صوتان متمايزان وواضحان يسهل تمييزهما بالتدريب العملي.',
            takeawayAr: 'إطباق الشفتين يميز صوت M، وانفجار الهواء من الحلق يميز صوت G الصلب.',
            takeawayEn: 'Lip closure marks /m/, while velar airflow marks hard /g/.'
          },
          {
            id: 'we-g1-u5-2-3',
            titleAr: 'النموذج 3 من 4: صوت حرف Oo القصير وصوت حرف Ff',
            titleEn: 'Worked Example 3 of 4: Phonics Sounds /ɒ/ and /f/',
            problemAr: 'نطق صوت العلة المستدير في Octopus وصوت الاحتكاك في Fish.',
            problemEn: 'Pronouncing the rounded vowel in Octopus and the fricative in Fish.',
            stepsAr: [
              'الخطوة 1: صوت Oo القصير /ɒ/ بتدوير الشفتين: /ɒ/.. Octopus.',
              'الخطوة 2: صوت Ff /f/ بلمس الأسنان العلوية للشفة السفلية: /f/.. Fish، /f/.. Fan.'
            ],
            solutionAr: 'مخارج صوتية دقيقة ومطابقة للمعايير الصوتية لكتاب كونكت 1.',
            takeawayAr: 'تطابق الأسنان مع الشفة يضمن إخراج صوت F ناصعاً وخالياً من الخلط.',
            takeawayEn: 'Upper teeth touching the lower lip ensures crisp /f/ pronunciation.'
          },
          {
            id: 'we-g1-u5-2-4',
            titleAr: 'النموذج 4 من 4: خط الأعداد الإنجليزي من 1 إلى 10',
            titleEn: 'Worked Example 4 of 4: English Number Line (1 to 10)',
            problemAr: 'ترتيب الأرقام التسلسلي من الأصغر للأكبر مع كتابتها بالكلمات.',
            problemEn: 'Sequencing numbers from 1 to 10 with their English word spellings.',
            stepsAr: [
              'الخطوة 1: المجموعة الأولى: 1 (One), 2 (Two), 3 (Three), 4 (Four), 5 (Five).',
              'الخطوة 2: المجموعة الثانية: 6 (Six), 7 (Seven), 8 (Eight), 9 (Nine), 10 (Ten).'
            ],
            solutionAr: 'إتقان العد والترتيب الشفهي والكتابي حتى الرقم 10.',
            takeawayAr: 'الدمج بين العد اللغوي والعد الرياضي يقوي الذاكرة الرياضية المبكرة.',
            takeawayEn: 'Integrating number words with math strengthens early numeracy skills.'
          }
        ]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة 6: الحيوانات من حولي (Unit 6: Animals Around Me)',
    unitTitleEn: 'Unit 6: Animals Around Me',
    lessons: [
      {
        titleAr: 'الحيوانات البرية والأليفة وصفاتها',
        titleEn: 'Wild Animals & Pets: Big & Small',
        subtitleAr: 'الحيوانات: Lion, Elephant, Giraffe, Monkey, Cat, Dog وحجمها وسرعتها',
        subtitleEn: 'Jungle and domestic animals: size, strength, and habitats',
        focusAr: 'التمييز بين الحيوانات الأليفة في البيت (Cat, Dog) والحيوانات البرية (Lion, Elephant, Giraffe)، واستخدام الصفات: big, small, fast, tall.',
        focusEn: 'Distinguishing pets (cat, dog) and wild animals (lion, elephant, giraffe) with adjectives: The elephant is big. The giraffe is tall.',
        activityAr: 'قلد حركة الفيل الضخم أو الزرافة الطويلة وعبر عنها بجملة إنجليزية قصيرة.',
        activityEn: 'Mime being a big elephant or tall giraffe and say a descriptive sentence.',
        questionAr: 'ما الحيوان الذي يتميز برقبته الطويلة جداً في الغابة؟',
        questionEn: 'Which animal is very tall with a long neck?',
        optionsAr: ['Giraffe (زرافة)', 'Dog (كلب)', 'Cat (قطة)'],
        optionsEn: ['Giraffe', 'Dog', 'Cat'],
        correctIndex: 0,
        vocabulary: [
          ['قطة', 'Cat'],
          ['كلب', 'Dog'],
          ['سلحفاة', 'Turtle'],
          ['طائر', 'Bird'],
          ['أسد', 'Lion'],
          ['فيل', 'Elephant'],
          ['قرد', 'Monkey'],
          ['زرافة', 'Giraffe'],
          ['كبير', 'Big'],
          ['طويل', 'Tall']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'الحيوانات من حولي (Connect 1)',
        diagramTitleEn: 'Animals Around Me (Connect 1)',
        diagramCaptionAr: 'مخطط الحيوانات البرية والأليفة من كتاب وزارة التربية والتعليم الرسمي',
        diagramCaptionEn: 'Wild animals and domestic pets diagram from the official MOE textbook',
        workedExamples: [
          {
            id: 'we-g1-u6-1',
            titleAr: 'النموذج 1 من 4: وصف الحيوانات باستخدام الصفات (Adjectives)',
            titleEn: 'Worked Example 1 of 4: Describing Animals with Adjectives',
            problemAr: 'كيف تصف الفيل والزرافة والأسد باللغة الإنجليزية؟',
            problemEn: 'How do you describe an elephant, giraffe, and lion in English?',
            stepsAr: [
              'الخطوة 1: الفيل ضخم وكبير -> "The elephant is big".',
              'الخطوة 2: الزرافة طويلة الرقبة -> "The giraffe is tall".',
              'الخطوة 3: الأسد قوي وسريع -> "The lion is strong".'
            ],
            solutionAr: 'صياغة جمل اسمية وصفية بسيطة: Subject + is + Adjective.',
            takeawayAr: 'الصفات تساعدنا على توضيح الفروق بين الحيوانات بطريقة دقيقة.',
            takeawayEn: 'Adjectives help us describe clear differences between animals accurately.'
          },
          {
            id: 'we-g1-u6-2',
            titleAr: 'النموذج 2 من 4: التصنيف بين الحيوان الأليف والحيوان البري',
            titleEn: 'Worked Example 2 of 4: Pets vs Wild Animals',
            problemAr: 'صنف الحيوانات الآتية: Cat, Lion, Dog, Elephant إلى أليفة وبرية.',
            problemEn: 'Classify the animals: Cat, Lion, Dog, Elephant into pets and wild animals.',
            stepsAr: [
              'الخطوة 1: حيوانات أليفة تعيش معنا في المنزل (Pets): Cat, Dog.',
              'الخطوة 2: حيوانات برية تعيش في الغابة (Wild animals): Lion, Elephant.'
            ],
            solutionAr: 'Cat & Dog = Pets، و Lion & Elephant = Wild animals.',
            takeawayAr: 'التصنيف البيولوجي المبكر يعزز المعرفة البيئية لدى الأطفال.',
            takeawayEn: 'Early biological classification fosters environmental awareness.'
          },
          {
            id: 'we-g1-u6-3',
            titleAr: 'النموذج 3 من 4: أفعال حركة الحيوانات (Animal Actions)',
            titleEn: 'Worked Example 3 of 4: Animal Action Verbs',
            problemAr: 'ماذا تفعل الحيوانات؟ الطائر يطير، والقرد يتسلق، والسمكة تسبح.',
            problemEn: 'How do animals move? Birds fly, monkeys climb, fish swim.',
            stepsAr: [
              'الخطوة 1: الطائر -> "The bird flies in the sky".',
              'الخطوة 2: القرد -> "The monkey climbs trees".',
              'الخطوة 3: السمكة -> "The fish swims in water".'
            ],
            solutionAr: 'ربط الحيوان بالفعل الحركي المناسب لقدراته الطبيعية.',
            takeawayAr: 'ربط الأسماء بالأفعال ينقل المتعلم من مستوى الكلمات المفردة إلى الجمل الكاملة.',
            takeawayEn: 'Connecting nouns with action verbs moves learners from words to full sentences.'
          },
          {
            id: 'we-g1-u6-4',
            titleAr: 'النموذج 4 من 4: حماية الحيوانات والرفق بها',
            titleEn: 'Worked Example 4 of 4: Caring for Animals and Wildlife',
            problemAr: 'كيف نعبر عن الرفق بالحيوانات الأليفة وإطعامها بانتظام؟',
            problemEn: 'How do we express kindness to pets and taking care of them?',
            stepsAr: [
              'الخطوة 1: تقديم الطعام والماء -> "Feed the cat. Give water to the dog".',
              'الخطوة 2: التعامل بلطف -> "Be kind to animals".'
            ],
            solutionAr: 'غرس قيمة الرفق بالحيوان ضمن نصوص وتمارين المنهج الوزاري.',
            takeawayAr: 'الرحمة بالحيوانات فضيلة سامية يحرص المنهج القومي على ترسيخها.',
            takeawayEn: 'Kindness to animals is a core moral value in the national curriculum.'
          }
        ]
      },
      {
        titleAr: 'حروف الجر المكانية وصوتيات B, L, U, J',
        titleEn: 'Prepositions: In, On, Under & Phonics: Bb, Ll, Uu, Jj',
        subtitleAr: 'حروف الجر: In (في)، On (على)، Under (تحت) وصوتيات B, L, U, J',
        subtitleEn: 'Prepositions of place (in, on, under) and phonics /b/, /l/, /ʌ/, /dʒ/',
        focusAr: 'تحديد مواضع الأشياء والحيوانات: The cat is under the chair. The bird is in the tree. The dog is on the grass. وإتقان نطق حروف Bb, Ll, Uu, Jj.',
        focusEn: 'Prepositions of place: Where is the cat? The cat is under the chair. Phonics /b/ (boy, ball), /l/ (leaf, lion), /ʌ/ (under, up), /dʒ/ (jar, jam).',
        activityAr: 'لعبة الاختباء بالدمية: ضع لعبتك فوق الطاولة أو تحت الكرسي أو داخل الصندوق واسأل زميلك: Where is it?',
        activityEn: 'Hide and seek game: Place a toy in, on, or under furniture and ask: Where is it?',
        questionAr: 'أين القطة إذا كانت جالسة أسفل الكرسي؟',
        questionEn: 'Where is the cat if it sits beneath the chair?',
        optionsAr: ['The cat is under the chair.', 'The cat is in the chair.', 'The cat is on the sky.'],
        optionsEn: ['The cat is under the chair.', 'The cat is in the chair.', 'The cat is on the sky.'],
        correctIndex: 0,
        vocabulary: [
          ['في/داخل', 'In'],
          ['على/فوق', 'On'],
          ['تحت/أسفل', 'Under'],
          ['ولد', 'Boy'],
          ['كرة', 'Ball'],
          ['ورقة شجر', 'Leaf'],
          ['فوق/أعلى', 'Up'],
          ['برطمان', 'Jar']
        ],
        imageUrl: '/curriculum_covers/egypt_primary_1_english.png',
        diagramTitleAr: 'حروف الجر المكانية والصوتيات (Connect 1)',
        diagramTitleEn: 'Prepositions of Place and Phonics (Connect 1)',
        diagramCaptionAr: 'نماذج حروف الجر (In, On, Under) وصوتيات Bb, Ll, Uu, Jj من كتاب الوزارة',
        diagramCaptionEn: 'Prepositions (in, on, under) and phonics drills for Bb, Ll, Uu, Jj from the MOE book',
        workedExamples: [
          {
            id: 'we-g1-u6-2-1',
            titleAr: 'النموذج 1 من 4: استخدام حروف الجر (In, On, Under)',
            titleEn: 'Worked Example 1 of 4: Using Prepositions (In, On, Under)',
            problemAr: 'حدد موضع الكرة في ثلاث حالات مختلفة: داخل الصندوق، فوق الطاولة، وتحت الكرسي.',
            problemEn: 'Locate a ball in three positions: inside box, on table, and under chair.',
            stepsAr: [
              'الخطوة 1: داخل الصندوق = In: "The ball is in the box".',
              'الخطوة 2: فوق الطاولة = On: "The ball is on the table".',
              'الخطوة 3: أسفل الكرسي = Under: "The ball is under the chair".'
            ],
            solutionAr: 'تطبيق دقيق لحروف الجر المكانية الثلاثة المقررة في كتاب الوزارة.',
            takeawayAr: 'حروف الجر المكانية تحدد موقع الأشياء بالنسبة لبعضها بدقة بالغة.',
            takeawayEn: 'Spatial prepositions describe exact relative locations effortlessly.'
          },
          {
            id: 'we-g1-u6-2-2',
            titleAr: 'النموذج 2 من 4: السؤال عن المكان بـ "Where is...?"',
            titleEn: 'Worked Example 2 of 4: Asking Location with "Where is...?"',
            problemAr: 'أنت تبحث عن قطتك، كيف تسأل وتجيب عن مكانها بالإنجليزية؟',
            problemEn: 'You are looking for your cat. How do you ask and answer in English?',
            stepsAr: [
              'الخطوة 1: السؤال عن المكان يبدأ بأداة الاستفهام "Where": "Where is the cat?".',
              'الخطوة 2: الإجابة بحرف الجر المناسب: "The cat is under the bed".'
            ],
            solutionAr: '"Where is the cat? — It is under the bed." — حوار نموذجي معتمد.',
            takeawayAr: 'أداة الاستفهام "Where" تسأل دائماً عن الموقع أو المكان.',
            takeawayEn: 'The question word "Where" always inquires about location.'
          },
          {
            id: 'we-g1-u6-2-3',
            titleAr: 'النموذج 3 من 4: صوتيات حروف Bb, Ll, Uu, Jj',
            titleEn: 'Worked Example 3 of 4: Phonics Quad (Bb, Ll, Uu, Jj)',
            problemAr: 'التدريب على نطق أربعة أصوات أساسية من ختام منهج الترم الأول.',
            problemEn: 'Practicing four essential phonics sounds concluding Term 1 syllabus.',
            stepsAr: [
              'الخطوة 1: حرف Bb بصوت الشفتين /b/: Boy, Ball.',
              'الخطوة 2: حرف Ll بصوت اللسان /l/: Leaf, Lion.',
              'الخطوة 3: حرف Uu بصوت العلة المنفتح /ʌ/: Under, Up.',
              'الخطوة 4: حرف Jj بصوت /dʒ/: Jar, Jam.'
            ],
            solutionAr: 'إتقان نطق الحروف الأربعة وتطبيقها على الكلمات المصورة.',
            takeawayAr: 'اكتمال أصوات الحروف يمنح التلميذ القدرة الكاملة على تهجئة كلمات جديدة.',
            takeawayEn: 'Completing foundational phonics equips young readers to decode new words.'
          },
          {
            id: 'we-g1-u6-2-4',
            titleAr: 'النموذج 4 من 4: الاختبار التكاملي الشامل للمنهج',
            titleEn: 'Worked Example 4 of 4: Comprehensive Term 1 Integrative Review',
            problemAr: 'دمج الحيوانات والألوان والأرقام وحروف الجر في جملة واحدة متقدمة.',
            problemEn: 'Synthesize animals, colors, numbers, and prepositions into one integrative sentence.',
            stepsAr: [
              'الخطوة 1: تحديد العدد واللون والحيوان: "Two brown dogs".',
              'الخطوة 2: تحديد موقعها بحرف الجر: "under the green tree".',
              'الخطوة 3: تركيب الجملة: "I can see two brown dogs under the green tree".'
            ],
            solutionAr: 'جملة متكاملة تثبت الإتقان الفائق لجميع أهداف منهج Connect 1 للفصل الدراسي الأول.',
            takeawayAr: 'التكامل بين المهارات هو قمة النجاح في تعلم اللغة الإنجليزية للمرحلة الابتدائية.',
            takeawayEn: 'Skill integration represents the pinnacle of primary English learning mastery.'
          }
        ]
      }
    ]
  }
];

const connectG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: اكتشف ذاتي (Theme 1: Discovering Myself)',
    unitTitleEn: 'Theme 1: Discovering Myself',
    lessons: [
      {
        titleAr: 'الوحدة 1: أشعر بأنني بحالة رائعة! (I feel good!) - الأطعمة وصحة الجسم',
        titleEn: 'Unit 1: I feel good! - Food, Digestion & Respiratory System',
        subtitleAr: 'الأطعمة المصرية، الجهاز الهضمي والتنفسي، واستخدام and / but',
        subtitleEn: 'Egyptian foods, digestive and respiratory systems, conjunctions and/but',
        focusAr: 'الأطعمة المنتجة في مصر (Rice, Onions, Potatoes, Chickens) ورحلة الطعام في الجهاز الهضمي (Stomach, Small intestine, Large intestine).',
        focusEn: 'Egyptian farm products and how food travels through our digestive and respiratory organs.',
        activityAr: 'ارسم مخطط مسار الطعام من الفم للمعدة، واكتب جملة مستخدماً الرابط and و but.',
        activityEn: 'Trace the path of digestion and write compound sentences using and/but.',
        questionAr: 'ما العضو الذي يهضم الطعام ويمزجه بالعصارة الهضمية؟',
        questionEn: 'Which organ churns food with special digestive liquids?',
        optionsAr: ['Stomach (المعدة)', 'Lungs (الرئتان)', 'Bones (العظام)'],
        optionsEn: ['Stomach', 'Lungs', 'Bones'],
        correctIndex: 0,
        vocabulary: [['جهاز هضمي', 'Digestive system'], ['معدة', 'Stomach'], ['رئتان', 'Lungs'], ['يمضغ', 'Chew']]
      },
      {
        titleAr: 'الوحدة 2: حيوانات الصحراء (Desert Animals) - المقارنة والتكيف',
        titleEn: 'Unit 2: Desert Animals - Camels, Fennec Fox & Comparatives',
        subtitleAr: 'ثعلب الفنك، الجمل، النسور، وصيغ المقارنة: Short adjective + -er + than',
        subtitleEn: 'Fennec fox, camels, eagles, and comparative adjectives',
        focusAr: 'تكيف الحيوانات الصحراوية: ثعلب الفنك ذو الآذان الكبيرة، والجمل ذو الخف المسطح. تكوين المقارنة: The camel is bigger than the fox.',
        focusEn: 'Desert animal adaptations and comparative grammar: The camel is heavier than the horse.',
        activityAr: 'قارن بين ثعلب الفنك والنسر في الحجم والسرعة مستخدماً صفات المقارنة.',
        activityEn: 'Compare the fennec fox and the eagle using comparative adjectives.',
        questionAr: 'ما صيغة المقارنة الصحيحة بين الفيل والجمل في الحجم؟',
        questionEn: 'What is the correct comparative sentence?',
        optionsAr: ['The elephant is bigger than the camel.', 'The elephant is big than the camel.', 'The elephant biggest camel.'],
        optionsEn: ['The elephant is bigger than the camel.', 'The elephant is big than the camel.', 'The elephant biggest camel.'],
        correctIndex: 0,
        vocabulary: [['ثعلب الفنك', 'Fennec fox'], ['جمل', 'Camel'], ['أكبر من', 'Bigger than'], ['فراء سميك', 'Thick fur']]
      },
      {
        titleAr: 'الوحدة 3: لماذا النباتات خضراء؟ (Why are plants green?) - دورة حياة النبات',
        titleEn: 'Unit 3: Why are plants green? - Plant Life Cycle & Superlatives',
        subtitleAr: 'إنبات البذور، حبوب اللقاح، صيغة التفضيل: The + adjective + -est',
        subtitleEn: 'Germination, plant parts, pollinators, and superlative adjectives',
        focusAr: 'أجزاء النبات (Roots, Stem, Leaves, Flower)، عملية الإنبات (Germination)، وصيغ التفضيل العليا: The sunflower is the heaviest flower.',
        focusEn: 'Plant lifecycle, photosynthesis, and superlative adjectives: The rose is the most beautiful flower.',
        activityAr: 'رتب مراحل إنبات حبة الفول من البذرة إلى الإزهار.',
        activityEn: 'Sequence the stages of bean germination from seed to flowering plant.',
        questionAr: 'ما الجزء الذي ينمو تحت التربة ويمتص الماء والأملاح؟',
        questionEn: 'Which plant part grows under the soil to absorb water?',
        optionsAr: ['Roots (الجذور)', 'Leaves (الأوراق)', 'Stem (الساق)'],
        optionsEn: ['Roots', 'Leaves', 'Stem'],
        correctIndex: 0,
        vocabulary: [['جذور', 'Roots'], ['إنبات', 'Germination'], ['أوراق الشجر', 'Leaves'], ['بذور', 'Seeds']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: العالم من حولي (Theme 2: The World Around Me)',
    unitTitleEn: 'Theme 2: The World Around Me',
    lessons: [
      {
        titleAr: 'الوحدة 4: أين تعيش؟ (Where do you live?) - المنازل والبيئات',
        titleEn: 'Unit 4: Where do you live? - Homes, Rooms & Prepositions',
        subtitleAr: 'أنواع البيوت (House, Apartment, Tent, Houseboat) وحروف الجر المكانية',
        subtitleEn: 'Types of homes and prepositions of place (in, on, under, next to, between)',
        focusAr: 'وصف البيوت والغرف المختلفة في مصر (Apartment building, Floating home, Bedouin tent). حروف المكان: next to, behind, in front of.',
        focusEn: 'Describing dwellings across Egypt and using prepositions of place.',
        activityAr: 'صف غرفتك أو منزلك وحدد موقع السرير والمكتب باستخدام حروف الجر المكانية.',
        activityEn: 'Describe your room and position of furniture using spatial prepositions.',
        questionAr: 'ما الكلمة التي تعني "منزل عائم في النيل"؟',
        questionEn: 'Which word means a floating house on the river?',
        optionsAr: ['Houseboat', 'Tent', 'Cave'],
        optionsEn: ['Houseboat', 'Tent', 'Cave'],
        correctIndex: 0,
        vocabulary: [['منزل عائم', 'Houseboat'], ['شقة سكنية', 'Apartment'], ['بجوار', 'Next to'], ['بين', 'Between']]
      },
      {
        titleAr: 'الوحدة 5: من أين يأتي؟ (Where does it come from?) - الوظائف والطاقة',
        titleEn: 'Unit 5: Where does it come from? - Electricians, Plumbers & Connectors',
        subtitleAr: 'المهن الحرفية (Plumber, Electrician, Bus driver) ودوائر الكهرباء بأمان',
        subtitleEn: 'Trades, utilities, and electrical safety',
        focusAr: 'أهمية كل مهنة في مجتمعنا: السباك يصلح المواسير، والكهربائي يوصل التيار بأمان دون لمس الأسلاك العارية.',
        focusEn: 'Community helpers: plumbers, electricians, bus drivers, and home safety rules.',
        activityAr: 'اربط كل أداة بصاحب المهنة الذي يستخدمها في إصلاح وصيانة المنزل.',
        activityEn: 'Match utility tools to the craftsman who uses them.',
        questionAr: 'من يقوم بتوصيل الكهرباء حتى تعمل المصابيح والأجهزة؟',
        questionEn: 'Who connects electricity so lights and appliances work?',
        optionsAr: ['An electrician', 'A plumber', 'A mail carrier'],
        optionsEn: ['An electrician', 'A plumber', 'A mail carrier'],
        correctIndex: 0,
        vocabulary: [['كهربائي', 'Electrician'], ['سباك', 'Plumber'], ['أمان كهربائي', 'Electrical safety'], ['مقبس', 'Socket']]
      },
      {
        titleAr: 'الوحدة 6: ماذا تعمل؟ (What do you do?) - المهن والقطاعات',
        titleEn: 'Unit 6: What do you do? - Occupations & Economic Sectors',
        subtitleAr: 'المهن المصرية (Farmer, Fisherman, Guide) والقطاعات الاقتصادية',
        subtitleEn: 'Occupations, industries (farming, fishing, tourism), and workplace roles',
        focusAr: 'التعرف على القطاعات الاقتصادية في مصر (Tourism, Fishing, Farming, Mining) ودور كل مهنة في خدمة الوطن والمجتمع.',
        focusEn: 'Exploring key economic sectors in Egypt: farming, fishing, tourism, and mining, and their community value.',
        activityAr: 'اختر مهنة تحلم بها في المستقبل واشرح ما ستقدمه لوطنك ومجتمعك بالإنجليزية.',
        activityEn: 'Choose an occupation and describe how you will help your society.',
        questionAr: 'من هو الشخص الذي يزرع المحاصيل ويرعى الحيوانات في المزرعة؟',
        questionEn: 'Who grows crops and takes care of animals on a farm?',
        optionsAr: ['A farmer (المزارع)', 'A guide (المرشد)', 'A doctor (الطبيب)'],
        optionsEn: ['A farmer', 'A guide', 'A doctor'],
        correctIndex: 0,
        vocabulary: [['مزارع', 'Farmer'], ['صياد', 'Fisherman'], ['سياحة', 'Tourism'], ['مهنة', 'Occupation']]
      }
    ]
  }
];

const connectG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: العلاقات والبيئة (Theme 1: Relationships & Environment)',
    unitTitleEn: 'Theme 1: Relationships & Environment',
    lessons: [
      {
        titleAr: 'الوحدة 1: المدن الخضراء (Green Cities) - حدائق الأسطح والمجتمع',
        titleEn: 'Unit 1: Green Cities - Community Roof Gardens & Present Simple',
        subtitleAr: 'زراعة أسطح المباني، الهواء النقي، وظروف التكرار: always, usually, often, never',
        subtitleEn: 'Roof gardens, local community action, and adverbs of frequency',
        focusAr: 'مشروع حديقة السطح الخضراء (Roof garden) لمساعدة البيئة وتوفير خضراوات طازجة وتنقية الهواء. استخدام ظروف التكرار مع المضارع البسيط.',
        focusEn: 'Community roof gardens for urban agriculture and adverbs of frequency in present simple.',
        activityAr: 'اكتب 3 جمل عن عاداتك البيئية اليومية مستخدماً ظروف التكرار.',
        activityEn: 'Write 3 sentences about your daily eco habits using adverbs of frequency.',
        questionAr: 'أين يوضع ظرف التكرار (always / usually) بالنسبة للفعل الأساسي؟',
        questionEn: 'Where do frequency adverbs go relative to main verbs?',
        optionsAr: ['قبل الفعل الأساسي (Before the main verb)', 'بعد الفعل الأساسي دائماً', 'في نهاية الجملة حصراً'],
        optionsEn: ['Before main verb', 'Always after main verb', 'Exclusively at the end'],
        correctIndex: 0,
        vocabulary: [['حديقة على السطح', 'Roof garden'], ['سماد عضوي', 'Natural fertilizer'], ['دائماً', 'Always'], ['أبداً', 'Never']]
      },
      {
        titleAr: 'الوحدة 2: نحن جميعاً مختلفون (We are all different) - الصفات والشخصية',
        titleEn: 'Unit 2: We are all different - Personality & Relative Pronouns',
        subtitleAr: 'صفات الشخصية (Kind, Polite, Shy, Clever) والضمائر الموصولة: who, which, where',
        subtitleEn: 'Describing character and using relative pronouns (who, which, where)',
        focusAr: 'وصف الشخصيات والاهتمامات واستخدام الضمائر الموصولة: The teacher who helped me, the park where we play, the book which I read.',
        focusEn: 'Character descriptions and relative clauses with who (people), which (things), and where (places).',
        activityAr: 'أكمل الجمل بالضمير الموصول المناسب: who أو which أو where.',
        activityEn: 'Complete sentences with who, which, or where.',
        questionAr: 'ما الضمير الموصول المستخدم للإشارة إلى المكان؟',
        questionEn: 'Which relative pronoun refers to places?',
        optionsAr: ['Where', 'Who', 'Which'],
        optionsEn: ['Where', 'Who', 'Which'],
        correctIndex: 0,
        vocabulary: [['مؤدب', 'Polite'], ['خجول', 'Shy'], ['الذي للشخص', 'Who'], ['حيث للمكان', 'Where']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: التاريخ والابتكار (Theme 2: History & Innovation)',
    unitTitleEn: 'Theme 2: History & Innovation',
    lessons: [
      {
        titleAr: 'الوحدة 3: ذكريات الإجازة (Vacation Memories) - الماضي البسيط والسياحة',
        titleEn: 'Unit 3: Vacation Memories - Past Simple & Egyptian Heritage',
        subtitleAr: 'المعالم السياحية في مصر، الأفعال المنتظمة وغير المنتظمة في الماضي',
        subtitleEn: 'Historical trips, regular and irregular verbs in the past simple',
        focusAr: 'زيارة المعالم المصرية (Luxor, Aswan, Pyramids, Alexandria Library) وصياغة الماضي البسيط: We visited Luxor and saw the ancient temples.',
        focusEn: 'Travel narratives in Egypt and narrative past tense structures.',
        activityAr: 'اكتب فقرة قصيرة عن رحلة قمت بها إلى مكان تاريخي في مصر مستخدماً زمن الماضي البسيط.',
        activityEn: 'Write a short journal entry about a historical visit using past simple.',
        questionAr: 'ما الماضي الصحيح للفعل غير المنتظم (go)؟',
        questionEn: 'What is the past simple form of "go"?',
        optionsAr: ['Went', 'Goed', 'Going'],
        optionsEn: ['Went', 'Goed', 'Going'],
        correctIndex: 0,
        vocabulary: [['رحلة تاريخية', 'Historical trip'], ['معبد قديم', 'Ancient temple'], ['ذهب', 'Went'], ['شاهد', 'Saw']]
      },
      {
        titleAr: 'الوحدة 4: أوقات الاحتفال (Celebrate Good Times!) - المناسبات والأعياد',
        titleEn: 'Unit 4: Celebrate Good Times! - Festivals, Celebrations & Quantifiers',
        subtitleAr: 'المهرجانات والمناسبات، ومحددات الكمية: a lot of, some, a few',
        subtitleEn: 'Festivals, celebrations, cultural traditions, and quantifiers',
        focusAr: 'الحديث عن الاحتفالات الشعبية والأعياد وإرسال الدعوات: Sending invitations, blowing balloons, decorating. استخدام محددات الكمية: a few invitations, some cake.',
        focusEn: 'Describing celebrations, party preparations, invitations, and quantifiers (some, any, a few, a little).',
        activityAr: 'صمم بطاقة دعوة لحفل عيد ميلاد أو مناسبة خاصة مستخدماً عبارات الدعوة بالإنجليزية.',
        activityEn: 'Design an invitation card for a celebration using English polite invitation expressions.',
        questionAr: 'ما العبارة المناسبة لدعوة صديق إلى حفل؟',
        questionEn: 'Which phrase is polite for inviting a friend to a celebration?',
        optionsAr: ['Would you like to come to my party?', 'Leave the party now.', 'I don\'t want guests.'],
        optionsEn: ['Would you like to come to my party?', 'Leave the party now.', 'I don\'t want guests.'],
        correctIndex: 0,
        vocabulary: [['احتفال', 'Celebration'], ['دعوة', 'Invitation'], ['بالونات', 'Balloons'], ['مهرجان', 'Festival']]
      },
      {
        titleAr: 'الوحدة 5: تكنولوجيا مذهلة (Amazing Technology) - المستقبل والذكاء الاصطناعي',
        titleEn: 'Unit 5: Amazing Technology - Future with will, AI & Inventions',
        subtitleAr: 'تطبيقات الذكاء الاصطناعي، الأجهزة الذكية، وصياغة المستقبل: will + infinitive',
        subtitleEn: 'AI apps, smart devices, and expressing predictions with will',
        focusAr: 'كيف ستغير التكنولوجيا الحديثة التعليم والطب وحماية البيئة. التنبؤ بالمستقبل: Robots will help doctors. Clean energy will power electric cars.',
        focusEn: 'Future technologies, artificial intelligence in daily life, and will for predictions.',
        activityAr: 'تخيل اختراعاً ذكياً في عام 2050 واشرح ما سيفعله مستخدماً will.',
        activityEn: 'Envision a smart 2050 invention and describe it using will.',
        questionAr: 'كيف نصيغ جملة التنبؤ بالمستقبل مع الفعل (help)؟',
        questionEn: 'How do we form a future prediction with "help"?',
        optionsAr: ['Robots will help us.', 'Robots helping us.', 'Robots helps us.'],
        optionsEn: ['Robots will help us.', 'Robots helping us.', 'Robots helps us.'],
        correctIndex: 0,
        vocabulary: [['ذكاء اصطناعي', 'Artificial intelligence'], ['مستقبل', 'Future'], ['روبوت', 'Robot'], ['سوف يساعد', 'Will help']]
      },
      {
        titleAr: 'الوحدة 6: الرعاية الصحية والعافية (Taking Care) - الصحة والرفاهية',
        titleEn: 'Unit 6: Taking Care - Health, Well-being & Modal Verbs',
        subtitleAr: 'العادات الصحية، النوم الجيد، واستخدام should / shouldn\'t للنصيحة',
        subtitleEn: 'Healthy habits, sleep hygiene, mental well-being, and modal verbs for advice',
        focusAr: 'أهمية شرب الماء الكافي، ممارسة الرياضة، والنوم المنتظم. إعطاء النصائح الصحية: You should get 8 hours of sleep. You shouldn\'t stay up late.',
        focusEn: 'Health guidelines: hydration, balanced meals, sleep hygiene, and giving advice with should / shouldn\'t.',
        activityAr: 'قدم 3 نصائح صحية لزميلك للمحافظة على نشاطه وتركيزه أثناء المذاكرة.',
        activityEn: 'Give 3 health tips using should and shouldn\'t for maintaining high energy and focus.',
        questionAr: 'ما الفعل الناقص المستخدم لتقديم النصيحة الإيجابية بالإنجليزية؟',
        questionEn: 'Which modal verb is used to give positive advice?',
        optionsAr: ['Should', 'Must not', 'Will not'],
        optionsEn: ['Should', 'Must not', 'Will not'],
        correctIndex: 0,
        vocabulary: [['صحة', 'Health'], ['نصيحة', 'Advice'], ['ينبغي أن', 'Should'], ['نوم كافٍ', 'Enough sleep']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 2. Egyptian Primary ICT (تكنولوجيا المعلومات والاتصالات - الصفوف 4، 5، 6)
// ---------------------------------------------------------------------------

const ictG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: دور تكنولوجيا المعلومات في حياتنا',
    unitTitleEn: 'Theme 1: The Role of ICT in Our Lives',
    lessons: [
      {
        titleAr: 'المستكشف النشط: د. ألبرت لين وأدوات الاستكشاف الرقمية',
        titleEn: 'Active Explorer: Dr. Albert Lin & Digital Tools',
        subtitleAr: 'استخدام الرادار المخترق للأرض ومقياس المغناطيسية والـ GPS في التنقيب دون حفر',
        subtitleEn: 'Ground Penetrating Radar, Magnetometer, and GPS in non-destructive archaeology',
        focusAr: 'كيف يستخدم علماء الآثار التكنولوجيا الحديثة لاكتشاف الآثار المدفونة بدقة ودون الإضرار بالأرض عبر الرادار ومقياس المغناطيسية ونظام تحديد المواقع العالمي (GPS).',
        focusEn: 'How scientists explore buried heritage using GPR, magnetometers, and GPS without digging.',
        activityAr: 'طابق بين كل أداة تكنولوجية ووظيفتها في استكشاف ما فوق الأرض وما تحتها.',
        activityEn: 'Match each digital tool with its archaeological exploration function.',
        questionAr: 'أي جهاز يُستخدم للعثور على المعادن المدفونة في باطن الأرض؟',
        questionEn: 'Which device is used to find underground metals?',
        optionsAr: ['مقياس المغناطيسية (Magnetometer)', 'الطابعة (Printer)', 'الفأرة (Mouse)'],
        optionsEn: ['Magnetometer', 'Printer', 'Mouse'],
        correctIndex: 0,
        vocabulary: [['مقياس المغناطيسية', 'Magnetometer'], ['رادار مخترق للأرض', 'GPR'], ['نظام تحديد المواقع', 'GPS'], ['استكشاف', 'Exploration']]
      },
      {
        titleAr: 'مكونات جهاز الكمبيوتر وأجهزة الإدخال والإخراج',
        titleEn: 'Computer Components: Input and Output Devices',
        subtitleAr: 'لوحة المفاتيح، الفأرة، الميكروفون، الشاشة، مكبر الصوت، ومركب الكلام',
        subtitleEn: 'Keyboards, mouse, microphone, monitor, speakers, and speech synthesizers',
        focusAr: 'التمييز بين أجهزة الإدخال (تدخل البيانات للكمبيوتر) وأجهزة الإخراج (تخرج المعلومات للمستخدم)، والتكنولوجيا المساعدة لذوي الهمم كمركب الكلام وشاشة برايل.',
        focusEn: 'Distinguishing input vs output hardware, and assistive tech like speech synthesizers.',
        activityAr: 'صنف بطاقات الأجهزة إلى وحدات إدخال ووحدات إخراج.',
        activityEn: 'Categorize computer peripheral cards into input and output units.',
        questionAr: 'تعتبر الشاشة (Monitor) من أجهزة:',
        questionEn: 'The computer monitor is an:',
        optionsAr: ['الإخراج (Output)', 'الإدخال (Input)', 'التخزين الحركي'],
        optionsEn: ['Output device', 'Input device', 'Kinetic storage'],
        correctIndex: 0,
        vocabulary: [['وحدات إدخال', 'Input devices'], ['وحدات إخراج', 'Output devices'], ['تكنولوجيا مساعدة', 'Assistive technology'], ['مركب الكلام', 'Speech synthesizer']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: احتياطات السلامة الرقمية والمواطنة',
    unitTitleEn: 'Theme 2: Digital Safety and Citizenship',
    lessons: [
      {
        titleAr: 'المخاطر المرتبطة بشبكة الإنترنت وكيفية تجنبها',
        titleEn: 'Internet Hazards & Safe Online Navigation',
        subtitleAr: 'التنمر الرقمي، سرقة الهوية، الرسائل المجهولة، واستشارة الوالدين والمعلم',
        subtitleEn: 'Cyberbullying, identity theft, spam messages, and trusted adult guidance',
        focusAr: 'التعامل الآمن مع الإنترنت: عدم التحدث مع الغرباء، تجنب مشاركة البيانات الشخصية كعنوان المنزل ورقم الهاتف، والإبلاغ فوراً عند مواجهة تنمر إلكتروني.',
        focusEn: 'Digital hygiene: guarding privacy, resisting cyberbullying, and notifying adults.',
        activityAr: 'ضع علامة صح أمام التصرف الرقمي السليم وعلامة خطأ أمام التصرف الخطر.',
        activityEn: 'Mark safe versus hazardous digital behaviors.',
        questionAr: 'ما التصرف الصحيح عند تلقي رسالة مجهولة تطلب كلمة مرورك أو عنوان منزلك؟',
        questionEn: 'What is the correct action when receiving an unknown message asking for personal info?',
        optionsAr: ['حظر المرسل وإبلاغ ولي الأمر فوراً', 'إرسال العنوان والبيانات', 'مشاركتها مع جميع الأصدقاء'],
        optionsEn: ['Block sender and report to parents', 'Send private details', 'Share with friends'],
        correctIndex: 0,
        vocabulary: [['تنمر إلكتروني', 'Cyberbullying'], ['بيانات شخصية', 'Personal data'], ['أمان رقمي', 'Digital safety'], ['حظر', 'Block']]
      },
      {
        titleAr: 'إنشاء كلمات مرور قوية وحماية الحسابات',
        titleEn: 'Creating Strong Passwords & Account Protection',
        subtitleAr: 'قواعد كلمة المرور (حروف كبيرة وصغيرة وأرقام ورموز ولا تقل عن 8 خانات)',
        subtitleEn: 'Password strength rules: 8+ characters, uppercase, numbers, and symbols',
        focusAr: 'كيفية إنشاء كلمة مرور قوية يصعب تخمينها أو اختراقها، وتجنب استخدام اسمك أو تاريخ ميلادك، واستخدام كلمات مرور مختلفة لكل حساب.',
        focusEn: 'Constructing robust passwords with varied characters and using distinct credentials across apps.',
        activityAr: 'قم بتركيب كلمة مرور قوية باتباع شروط الأمان الأربعة وافحص مدى قوتها.',
        activityEn: 'Construct a strong multi-character password following four security rules.',
        questionAr: 'أي من الكلمات التالية تمثل كلمة مرور قوية وآمنة؟',
        questionEn: 'Which password is secure and strong?',
        optionsAr: ['Eg#2024!Smart', '12345678', 'ahmed123'],
        optionsEn: ['Eg#2024!Smart', '12345678', 'ahmed123'],
        correctIndex: 0,
        vocabulary: [['كلمة مرور قوية', 'Strong password'], ['أمن الحساب', 'Account security'], ['رموز خاصة', 'Special characters'], ['قرصنة', 'Hacking']]
      }
    ]
  }
];

const ictG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: البنية التحتية والشبكات والذكاء الاصطناعي',
    unitTitleEn: 'Theme 1: Infrastructure, Networks & AI',
    lessons: [
      {
        titleAr: 'شبكات الكمبيوتر وأنواعها وأجهزة الاتصال',
        titleEn: 'Computer Networks, Modems & Switches',
        subtitleAr: 'الشبكة السلكية (Wired) واللاسلكية (Wi-Fi)، المحول (Switch) والمودم (Modem)',
        subtitleEn: 'Wired vs wireless LANs, network switches, and modems',
        focusAr: 'كيفية ربط أجهزة الكمبيوتر لتبادل البيانات: شبكات LAN، دور المودم في تحويل إشارة الإنترنت، ودور المحول الذكي في إرسال البيانات للجهاز المعني فقط.',
        focusEn: 'Connecting systems via local area networks, broadband modems, and packet switches.',
        activityAr: 'ارسم خريطة شبكة منزلية توضح مسار الإنترنت من كابل الهاتف إلى المودم والأجهزة.',
        activityEn: 'Draw a home network diagram tracking connectivity from line to modem to client devices.',
        questionAr: 'ما الجهاز الذي يربط شبكتك المحلية بالإنترنت ويحول إشارة مزود الخدمة؟',
        questionEn: 'Which hardware device connects your home network to the ISP internet signal?',
        optionsAr: ['المودم (Modem)', 'السماعة (Speaker)', 'الماسح الضوئي (Scanner)'],
        optionsEn: ['Modem', 'Speaker', 'Scanner'],
        correctIndex: 0,
        vocabulary: [['شبكة محلية', 'LAN'], ['مودم', 'Modem'], ['محول شبكة', 'Switch'], ['كابل سلكي', 'Wired cable']]
      },
      {
        titleAr: 'الحوسبة السحابية والتخزين السحابي (Cloud Computing)',
        titleEn: 'Cloud Computing & Online Storage Solutions',
        subtitleAr: 'تخزين الملفات على خوادم الإنترنت، مزايا الحوسبة السحابية، ونسخ البيانات احتياطياً',
        subtitleEn: 'Storing files on remote internet servers, benefits, and automated backups',
        focusAr: 'مفهوم السحابة (Cloud): الوصول إلى ملفاتك وتطبيقاتك من أي مكان وأي جهاز عبر الإنترنت، والمشاركة والتعاون الجماعي في تحرير المستندات بأمان.',
        focusEn: 'Cloud platforms for ubiquitous access, cooperative authoring, and redundant data backup.',
        activityAr: 'قم بإنشاء مجلد مشترك تجريبي وتعرف على خطوات مشاركة رابط الملف وتحديد الصلاحيات.',
        activityEn: 'Practice file sharing configurations and read/write permission levels.',
        questionAr: 'ما الفائدة الكبرى للتخزين السحابي (Cloud Storage)؟',
        questionEn: 'What is the primary advantage of cloud storage?',
        optionsAr: ['الوصول إلى ملفاتك من أي جهاز متصل بالإنترنت', 'جعل الكمبيوتر أثقل وزناً', 'منع الاتصال بالإنترنت'],
        optionsEn: ['Access files anywhere with internet', 'Make computers heavier', 'Block internet'],
        correctIndex: 0,
        vocabulary: [['حوسبة سحابية', 'Cloud computing'], ['خادم بعيد', 'Remote server'], ['نسخ احتياطي', 'Backup'], ['مشاركة الملفات', 'File sharing']]
      },
      {
        titleAr: 'تطبيقات الذكاء الاصطناعي (AI) وأخلاقيات استخدامه',
        titleEn: 'Artificial Intelligence (AI) Applications & Ethics',
        subtitleAr: 'كيف يتعلم الذكاء الاصطناعي من البيانات، المساعد الصوتي، وأخلاقيات النزاهة',
        subtitleEn: 'How machine learning models train on datasets, virtual assistants, and integrity',
        focusAr: 'مفهوم الذكاء الاصطناعي كقدرة الآلات على محاكاة التفكير البشري وحل المشكلات، واستخدامه كأداة مساعدة مع الالتزام بعدم الاعتماد التام عليه والتحقق من صحة مخرجاته.',
        focusEn: 'AI as machine intelligence augmenting human tasks; ethics of verifying AI-generated output.',
        activityAr: 'جرب صياغة أمر بحثي (Prompt) مفصل وافحص الإجابة للتأكد من خلوها من الأخطاء.',
        activityEn: 'Draft an effective prompting query and critique the output for accuracy.',
        questionAr: 'ما الموقف الصحيح تجاه المعلومات التي يولدها الذكاء الاصطناعي؟',
        questionEn: 'What is the correct attitude towards AI-generated content?',
        optionsAr: ['التأكد من صحتها ومراجعتها من مصادر موثوقة', 'تصديقها فوراً دون تفكير', 'حذف جميع الكتب المدرسية'],
        optionsEn: ['Fact-check using trusted sources', 'Accept blindly without scrutiny', 'Delete all textbooks'],
        correctIndex: 0,
        vocabulary: [['ذكاء اصطناعي', 'Artificial intelligence'], ['أمر توجيهي', 'Prompt'], ['أخلاقيات رقمية', 'Digital ethics'], ['تعلم الآلة', 'Machine learning']]
      }
    ]
  },
  {
    unitTitleAr: 'المحور الثاني: الأمن السيبراني والمواطنة الرقمية',
    unitTitleEn: 'Theme 2: Cybersecurity & Digital Citizenship',
    lessons: [
      {
        titleAr: 'الأمن السيبراني وحماية الأجهزة من البرمجيات الخبيثة',
        titleEn: 'Cybersecurity & Protection Against Malware',
        subtitleAr: 'مضادات الفيروسات، تحديث أنظمة التشغيل، والمصادقة متعددة العوامل (MFA)',
        subtitleEn: 'Antivirus tools, OS patching, and multi-factor authentication (MFA)',
        focusAr: 'حماية البيانات الشخصية عبر برامج الحماية، تحديث التطبيقات بانتظام لسد الثغرات الأمنية، واستخدام المصادقة الثنائية لحماية الحسابات البنكية والتعليمية.',
        focusEn: 'Defense against malware through updated security patches, antivirus scanning, and 2FA.',
        activityAr: 'افحص إعدادات أمان هاتفك أو حاسوبك وتحقق من تفعيل التحديثات التلقائية.',
        activityEn: 'Inspect device security settings and verify automated patch updates.',
        questionAr: 'ما هي المصادقة متعددة العوامل (Multi-Factor Authentication)؟',
        questionEn: 'What is Multi-Factor Authentication (MFA)?',
        optionsAr: ['تأكيد الهوية عبر خطوتين مثل كلمة المرور ورمز يرسل للهاتف', 'كتابة كلمة المرور فقط', 'إلغاء كلمة المرور تماماً'],
        optionsEn: ['Two-step identity proof (password + SMS code)', 'Single password only', 'No security credentials'],
        correctIndex: 0,
        vocabulary: [['أمن سيبراني', 'Cybersecurity'], ['برمجيات خبيثة', 'Malware'], ['مصادقة ثنائية', 'MFA'], ['تحديث النظام', 'System update']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. Egyptian Primary Geography & History (الدراسات الاجتماعية - الصفوف 4، 5، 6)
// ---------------------------------------------------------------------------

const geographyG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: البيئة الطبيعية والموقع الجغرافي لمصر',
    unitTitleEn: 'Theme 1: Physical Geography & Egypt Location',
    lessons: [
      {
        titleAr: 'موقع مصر الجغرافي وأهميته العالمية',
        titleEn: 'Egypt Geographic Location & Global Importance',
        subtitleAr: 'قلب العالم القديم، ملتقى قارات إفريقيا وآسيا وأوروبا، وقناة السويس',
        subtitleEn: 'Heart of the Old World, crossroads of continents, and the Suez Canal',
        focusAr: 'تتميز مصر بموقع استراتيجي فريد في الركن الشمالي الشرقي لقارة إفريقيا، وتطل على بحرين هامين (المتوسط والأحمر)، وزادت أهميتها بحفر قناة السويس وقناة السويس الجديدة.',
        focusEn: 'Egypt strategic position at northeastern Africa, Red and Mediterranean Seas, and Suez Canal.',
        activityAr: 'حدد على خريطة مصر موقع البحر المتوسط والبحر الأحمر وقناة السويس ونهر النيل.',
        activityEn: 'Pinpoint the Mediterranean, Red Sea, Suez Canal, and Nile River on the Egypt map.',
        questionAr: 'في أي ركن من قارة إفريقيا تقع جمهورية مصر العربية؟',
        questionEn: 'In which part of the African continent is Egypt located?',
        optionsAr: ['الشمالي الشرقي', 'الجنوبي الغربي', 'الوسطى'],
        optionsEn: ['Northeastern', 'Southwestern', 'Central'],
        correctIndex: 0,
        vocabulary: [['موقع جغرافي', 'Geographic location'], ['قناة السويس', 'Suez Canal'], ['قارات العالم القديم', 'Old World'], ['مضيق وقناة', 'Canal']]
      },
      {
        titleAr: 'البيئات المصرية وخصائصها الطبيعية',
        titleEn: 'Egyptian Natural Environments & Characteristics',
        subtitleAr: 'البيئة الزراعية (وادي النيل والدلتا)، البيئة الساحلية، والبيئة الصحراوية',
        subtitleEn: 'Agricultural (Nile Valley & Delta), Coastal, and Desert environments',
        focusAr: 'تنوع البيئات في مصر: البيئة الزراعية الغنية بالطمي الصالح للزراعة، البيئة الساحلية على البحرين، والبيئة الصحراوية الغنية بالمعادن والواحات والرمال البيضاء والصفراء.',
        focusEn: 'Diversity of Egyptian biomes: fertile agricultural valley, coastal shorelines, and mineral-rich deserts.',
        activityAr: 'قارن في جدول بين البيئة الزراعية والبيئة الصحراوية من حيث السطح وأهم الأنشطة.',
        activityEn: 'Tabulate differences between Nile agricultural and desert geographic features.',
        questionAr: 'أين تتركز البيئة الزراعية الفيضية في مصر؟',
        questionEn: 'Where is the fertile agricultural valley concentrated in Egypt?',
        optionsAr: ['وادي النيل والدلتا ومنخفض الفيوم', 'الصحراء الغربية فقط', 'جبال البحر الأحمر'],
        optionsEn: ['Nile Valley, Delta & Fayoum', 'Western desert only', 'Red Sea mountains'],
        correctIndex: 0,
        vocabulary: [['بيئة زراعية', 'Agricultural biome'], ['بيئة ساحلية', 'Coastal biome'], ['بيئة صحراوية', 'Desert biome'], ['دلتا النيل', 'Nile Delta']]
      },
      {
        titleAr: 'الطقس والمناخ والموارد الطبيعية في مصر',
        titleEn: 'Weather, Climate & Natural Resources in Egypt',
        subtitleAr: 'الفرق بين الطقس والمناخ، ومصادر الطاقة المتجددة (الشمس والرياح والمياه)',
        subtitleEn: 'Weather vs climate, meteorological instruments, and clean renewable energy resources',
        focusAr: 'التمييز بين الطقس (حالة الجو لفترة قصيرة) والمناخ (لفترة زمنية طويلة)، والتعرف على أدوات القياس كدوارة الرياح والترمومتر، والمحافظة على الموارد المائية والشمسية.',
        focusEn: 'Distinguish weather vs climate; use weather measurement tools and explore renewable wind and solar energy.',
        activityAr: 'سجل حالة الطقس في مدينتك لمدة أسبوع مستخدماً رموز الطقس ودرجات الحرارة.',
        activityEn: 'Keep a 7-day weather log using weather symbols and temperature recordings.',
        questionAr: 'ما الجهاز المستخدم لقياس درجات الحرارة بدقة؟',
        questionEn: 'Which device measures atmospheric temperature accurately?',
        optionsAr: ['الترمومتر (ميزان الحرارة)', 'دوارة الرياح', 'مقياس المطر'],
        optionsEn: ['Thermometer', 'Wind vane', 'Rain gauge'],
        correctIndex: 0,
        vocabulary: [['طقس', 'Weather'], ['مناخ', 'Climate'], ['ترمومتر', 'Thermometer'], ['طاقة شمسية', 'Solar energy']]
      },
      {
        titleAr: 'نحو بيئة مستدامة ومبادرة اتحضر للأخضر',
        titleEn: 'Toward a Sustainable Environment: Go Green Initiative',
        subtitleAr: 'المشكلات البيئية (التلوث، الإسراف في المياه)، وإعادة التدوير والمحافظة على الموارد',
        subtitleEn: 'Environmental challenges, recycling, water conservation, and eco-friendly citizen habits',
        focusAr: 'مواجهة التلوث البيئي في الهواء والتربة والماء، وأهمية مبادرة "اتحضر للأخضر" لزيادة المساحات الخضراء والحد من استخدام البلاستيك.',
        focusEn: 'Promote environmental sustainability, waste recycling, and active participation in civic conservation programs.',
        activityAr: 'صمم لوحة إرشادية تحث زملاءك على ترشيد استهلاك المياه وفرز القمامة لإعادة التدوير.',
        activityEn: 'Design an eco-poster promoting water conservation and waste sorting for recycling.',
        questionAr: 'ما المبادرة الوطنية التي أطلقتها مصر لنشر الوعي البيئي وحماية الطبيعة؟',
        questionEn: 'Which national Egyptian initiative promotes green environmental awareness?',
        optionsAr: ['مبادرة اتحضر للأخضر (Go Green)', 'مبادرة بناء المصانع فقط', 'مبادرة زيادة البلاستيك'],
        optionsEn: ['Go Green Initiative', 'Factories-only initiative', 'Plastic increase'],
        correctIndex: 0,
        vocabulary: [['استدامة بيئية', 'Environmental sustainability'], ['إعادة التدوير', 'Recycling'], ['ترشيد المياه', 'Water conservation'], ['اتحضر للأخضر', 'Go Green']]
      }
    ]
  }
];

const historyG4Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: الهوية الوطنية والشخصيات المصرية الخالدة',
    unitTitleEn: 'Theme 1: National Identity & Historical Figures',
    lessons: [
      {
        titleAr: 'علم مصر وشعارها والأعياد القومية للمحافظات',
        titleEn: 'The Egyptian Flag, National Emblem & Local Holidays',
        subtitleAr: 'ألوان العلم ودلالاتها (الأحمر، الأبيض، الأسود، النسر الذهبي)، واحترام العلم',
        subtitleEn: 'Symbolism of flag colors, golden eagle, and patriotic civic respect',
        focusAr: 'دلالات ألوان علم مصر: الأحمر للدم والشهداء، الأبيض للسلام، الأسود لعصور الظلم والاستعمار، والنسر الذهبي المأخوذ من نسر صلاح الدين رمز القوة والعزة.',
        focusEn: 'Significance of Egyptian flag colors: red sacrifice, white peace, black colonial defiance, golden eagle.',
        activityAr: 'ارسم علم مصر بالألوان الصحيحة واكتب جملة تعبر عن واجبك تجاه احترام علم وطنك.',
        activityEn: 'Color the national flag and articulate civic duties toward national symbols.',
        questionAr: 'ماذا يرمز النسر الموجود في وسط علم مصر؟',
        questionEn: 'What does the golden eagle at the center of the flag represent?',
        optionsAr: ['القوة وعراقة الحضارة المصرية', 'ضعف الدولة', 'المساحات الزراعية فقط'],
        optionsEn: ['Strength and venerable heritage', 'Weakness', 'Farmland only'],
        correctIndex: 0,
        vocabulary: [['علم مصر', 'Egyptian flag'], ['نسر صلاح الدين', 'Eagle of Saladin'], ['شعار وطني', 'National emblem'], ['سلام', 'Peace']]
      },
      {
        titleAr: 'شخصيات مصرية مؤثرة: جمال حمدان وطلعت حرب',
        titleEn: 'Influential Egyptian Figures: Gamal Hemdan & Talaat Harb',
        subtitleAr: 'عالم الجغرافيا صاحب كتاب "شخصية مصر"، ومؤسس بنك مصر الوطني',
        subtitleEn: 'Geographer Gamal Hemdan ("Personality of Egypt") and Talaat Harb (Bank Misr founder)',
        focusAr: 'دراسة سيرة المفكر د. جمال حمدان الذي وثق عبقرية مكان مصر، والاقتصادي طلعت حرب الذي أسس بنك مصر لدعم المشروعات الوطنية وتحرير الاقتصاد المصري.',
        focusEn: 'Achievements of Dr. Gamal Hemdan on Egyptian geography and Talaat Harb founding national industries.',
        activityAr: 'اكتب بطاقة تعريفية بالمشروعات التي أنشأها طلعت حرب كشركة مصر للطيران ومصر للغزل والنسيج.',
        activityEn: 'Compile a brief fact file on companies established by Talaat Harb.',
        questionAr: 'ما المؤسسة المالية الوطنية الكبرى التي أسسها طلعت حرب عام 1920؟',
        questionEn: 'Which landmark financial institution was founded by Talaat Harb in 1920?',
        optionsAr: ['بنك مصر', 'هيئة البريد', 'متحف الآثار'],
        optionsEn: ['Bank Misr', 'Postal Authority', 'Antiquities Museum'],
        correctIndex: 0,
        vocabulary: [['طلعت حرب', 'Talaat Harb'], ['جمال حمدان', 'Gamal Hemdan'], ['بنك مصر', 'Bank Misr'], ['اقتصاد وطني', 'National economy']]
      },
      {
        titleAr: 'الحياة الاقتصادية والتجارة والصناعة في مصر القديمة',
        titleEn: 'Economy, Craftsmanship & Trade in Ancient Egypt',
        subtitleAr: 'الزراعة على ضفاف النيل، الصناعات الفخارية والزجاجية، والتبادل التجاري مع بلاد بونت',
        subtitleEn: 'Nile agriculture, glass and textile craftsmanship, and naval trade with the Land of Punt',
        focusAr: 'كيف بني الاقتصاد المصري القديم على التعاون والابتكار: مواسم الزراعة المرتبطة بفيضان النيل، استخراج المعادن من سيناء، والرحلات التجارية لبلاد بونت.',
        focusEn: 'Analyze ancient Egyptian economic pillars: seasonal Nile inundation farming, metallurgy, and maritime commerce with Punt.',
        activityAr: 'ارسم لوحة توضح المراكب التجارية المصرية القديمة وهي محملة بالبخور وخشب الأبنوس من بلاد بونت.',
        activityEn: 'Illustrate an ancient Egyptian merchant vessel laden with frankincense, gold, and timber from Punt.',
        questionAr: 'ما الملكة المصرية التي أرسلت بعثة تجارية كبرى إلى بلاد بونت (الصومال حالياً)؟',
        questionEn: 'Which Egyptian queen sent a renowned trading expedition to the Land of Punt?',
        optionsAr: ['الملكة حتشبسوت', 'الملكة كليوباترا', 'الملكة نفرتيتي'],
        optionsEn: ['Queen Hatshepsut', 'Queen Cleopatra', 'Queen Nefertiti'],
        correctIndex: 0,
        vocabulary: [['بلاد بونت', 'Land of Punt'], ['فيضان النيل', 'Nile Flood'], ['صناعة الفخار', 'Pottery'], ['تجارة بحرية', 'Maritime trade']]
      },
      {
        titleAr: 'ملوك خالدون ومعالم أثرية: الأهرامات والمعابد والكرنك',
        titleEn: 'Enduring Monarchs & Heritage Monuments: Pyramids & Karnak',
        subtitleAr: 'الملوك بناة الأهرامات ومعابد الأقصر وأبو سمبل والكرنك وواجبنا في صيانة الآثار',
        subtitleEn: 'The Pyramid builders, Luxor and Abu Simbel temples, Karnak, and preservation ethics',
        focusAr: 'عظمة العمارة والهندسة في مصر القديمة: دقة بناء الأهرامات وتعامد الشمس على وجه رمسيس الثاني في أبو سمبل، والمسؤولية الوطنية في حماية الآثار والترحيب بالسياح.',
        focusEn: 'Examine ancient architectural engineering marvels and instill civic duties of heritage preservation and ecotourism.',
        activityAr: 'اكتب رسالة إلى سائح أجنبي تدعوه فيها لزيارة معالم مصر الأثرية وتشرح له أهميتها التاريخية.',
        activityEn: 'Write an invitation letter to a foreign visitor highlighting key monuments of Egypt.',
        questionAr: 'في أي معبد مصري تتعامد الشمس مرتين سنوياً على وجه تمثال الملك رمسيس الثاني؟',
        questionEn: 'At which monumental temple does the sun align twice a year on the statue of Ramesses II?',
        optionsAr: ['معبد أبو سمبل بأسوان', 'معبد الكرنك بالأقصر', 'معبد حتشبسوت بالدير البحري'],
        optionsEn: ['Abu Simbel Temple in Aswan', 'Karnak Temple in Luxor', 'Hatshepsut Temple'],
        correctIndex: 0,
        vocabulary: [['معبد أبو سمبل', 'Abu Simbel'], ['تعامد الشمس', 'Solar alignment'], ['آثار خالدة', 'Timeless monuments'], ['سياحة ثقافية', 'Cultural tourism']]
      }
    ]
  }
];

const geographyG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: جغرافية البيئات المصرية والتنمية المستدامة',
    unitTitleEn: 'Theme 1: Egyptian Biomes & Sustainable Development',
    lessons: [
      {
        titleAr: 'البيئة الزراعية في مصر والأنشطة الاقتصادية المرتبطة بها',
        titleEn: 'Agricultural Environment & Economic Activities in Egypt',
        subtitleAr: 'الزراعة المروية، مشكلات تجريف التربة، والزحف العمراني وجهود الدولة',
        subtitleEn: 'Irrigated farming, soil scraping issues, urban encroachment, and reclamation projects',
        focusAr: 'خصائص البيئة الزراعية الفيضية ومصادر الري من نهر النيل، والصناعات الحرفية كالسجاد اليدوي والفخار، ومواجهة تجريف التربة عبر التشريعات والمشروعات القومية كتوشكى والدلتا الجديدة.',
        focusEn: 'Nile irrigation dynamics, cottage agro-industries, and reclamation megaprojects like New Delta.',
        activityAr: 'اقترح ثلاثة حلول مبتكرة للحد من إهدار مياه الري في الأراضي الزراعية.',
        activityEn: 'Propose three modern irrigation practices to conserve agricultural water.',
        questionAr: 'ما المشروع القومي الحديث الذي يهدف لاستصلاح ملايين الأفدنة في الساحل الشمالي الغربي؟',
        questionEn: 'Which agricultural reclamation megaproject is in the northwest?',
        optionsAr: ['مشروع الدلتا الجديدة', 'السد العالي قديماً', 'حفر قناة السويس'],
        optionsEn: ['New Delta Project', 'Aswan Dam', 'Suez Canal digging'],
        correctIndex: 0,
        vocabulary: [['بيئة زراعية', 'Agricultural biome'], ['الدلتا الجديدة', 'New Delta'], ['ري حديث', 'Modern irrigation'], ['تجريف التربة', 'Soil erosion']]
      },
      {
        titleAr: 'البيئة الصحراوية ومصادر الطاقة والتعدين في مصر',
        titleEn: 'Desert Environment: Minerals, Energy & Sustainable Ecotourism',
        subtitleAr: 'الصحراء الغربية والشرقية وشبه جزيرة سيناء، المياه الجوفية، والطاقة الشمسية',
        subtitleEn: 'Western & Eastern deserts, Sinai, groundwater oases, solar energy (Benban)',
        focusAr: 'الموارد الطبيعية في صحاري مصر: الحديد بالواحات البحرية، الفوسفات بأبو طرطور، المنجنيز بسيناء، ومشروعات الطاقة المتجددة كمحطة بنبان للطاقة الشمسية بأسوان ومزرعة رياح الزعفرانة.',
        focusEn: 'Mineral wealth across Egyptian deserts and clean energy production in Benban solar park.',
        activityAr: 'حدد على خريطة مصر مواقع أهم المعادن ومحطات الطاقة المتجددة في الصحراء.',
        activityEn: 'Map locations of major mineral deposits and green energy installations.',
        questionAr: 'أين تقع أكبر محطة لإنتاج الطاقة الشمسية في مصر وإفريقيا (محطة بنبان)؟',
        questionEn: 'Where is the Benban solar park situated?',
        optionsAr: ['محافظة أسوان', 'محافظة الإسكندرية', 'محافظة مطروح'],
        optionsEn: ['Aswan Governorate', 'Alexandria', 'Matrouh'],
        correctIndex: 0,
        vocabulary: [['طاقة متجددة', 'Renewable energy'], ['محطة بنبان', 'Benban solar park'], ['تعدين', 'Mining'], ['واحات', 'Oases']]
      },
      {
        titleAr: 'البيئة الساحلية في مصر: الموارد البحرية والموانئ والسياحة الشاطئية',
        titleEn: 'Coastal Biome in Egypt: Marine Wealth, Ports & Ecotourism',
        subtitleAr: 'ساحل البحر المتوسط والبحر الأحمر، الشعاب المرجانية، الصيد البحري، وموانئ الإسكندرية ودمياط وبورسعيد',
        subtitleEn: 'Mediterranean vs Red Sea coastal zones, coral reefs, fisheries, and major international trade ports',
        focusAr: 'الفروق التضاريسية والمناخية بين ساحل البحر المتوسط الواسع الرملي وساحل البحر الأحمر الجبلي الغني بالشعاب المرجانية، وحماية الثروة السمكية من التلوث.',
        focusEn: 'Contrast broad sandy Mediterranean shores with steep Red Sea coral habitats; analyze commercial port dynamics.',
        activityAr: 'صمم خريطة ذهنية توضح أهم الأنشطة الاقتصادية لسكان البيئة الساحلية في مصر.',
        activityEn: 'Create a concept map outlining economic activities in Egyptian coastal zones.',
        questionAr: 'ما الظاهرة الطبيعية النادرة التي تجذب ملايين السياح للغوص في مياه البحر الأحمر؟',
        questionEn: 'Which natural wonder attracts millions of ecotourists to dive in the Red Sea?',
        optionsAr: ['الشعاب المرجانية الملونة', 'الجليد المتراكم', 'الكثبان الرملية العميقة'],
        optionsEn: ['Vibrant coral reefs', 'Glacial ice', 'Deep sand dunes'],
        correctIndex: 0,
        vocabulary: [['شعاب مرجانية', 'Coral reefs'], ['بيئة ساحلية', 'Coastal biome'], ['ميناء بحري', 'Seaport'], ['ثروة سمكية', 'Fisheries']]
      },
      {
        titleAr: 'البيئة الصناعية في مصر: الصناعات النظيفة والمناطق الصناعية الحديثة',
        titleEn: 'Industrial Biome in Egypt: Clean Technologies & Eco-Industrial Parks',
        subtitleAr: 'الصناعات الغذائية والغزل والنسيج والهندسية، شروط إقامة المصانع الخضراء، وتوطين التكنولوجيا',
        subtitleEn: 'Textiles, food processing, manufacturing clusters, green industrial standards, and technology localization',
        focusAr: 'عوامل قيام الصناعة (الطبيعية والبشرية)، وأهمية التحول نحو الصناعة الخضراء صديقة البيئة التي تعتمد على الطاقة النظيفة وتدوير المخلفات.',
        focusEn: 'Examine prerequisites for modern industrial clusters and understand policy shifts toward decarbonized green manufacturing.',
        activityAr: 'اقترح فكرة مشروع صناعي صديق للبيئة يعتمد على تدوير المخلفات الزراعية أو الصناعية.',
        activityEn: 'Propose an eco-friendly manufacturing initiative utilizing recycled industrial or agricultural waste.',
        questionAr: 'ما هو الهدف الأساسي من إنشاء المدن والمناطق الصناعية الخضراء في مصر؟',
        questionEn: 'What is the primary objective of establishing eco-industrial parks in Egypt?',
        optionsAr: ['تقليل التلوث البيئي وترشيد استهلاك الطاقة', 'زيادة الانبعاثات الكربونية', 'وقف الإنتاج الصناعي'],
        optionsEn: ['Reduce pollution and save energy', 'Increase carbon emissions', 'Halt manufacturing'],
        correctIndex: 0,
        vocabulary: [['صناعة خضراء', 'Green industry'], ['توطين التكنولوجيا', 'Technology localization'], ['غزل ونسيج', 'Textiles'], ['طاقة نظيفة', 'Clean energy']]
      }
    ]
  }
];

const historyG6Units: PrimaryUnitDefinition[] = [
  {
    unitTitleAr: 'المحور الأول: تاريخ مصر الحديث وبطولات الشعب والجيش',
    unitTitleEn: 'Theme 1: Modern Egyptian History & National Triumphs',
    lessons: [
      {
        titleAr: 'ثورة 1919 والزعيم سعد زغلول والوحدة الوطنية',
        titleEn: 'The 1919 Revolution: Saad Zaghloul & National Unity',
        subtitleAr: 'مواجهة الاحتلال البريطاني، حركة الوفد المصري، وتكاتف المسلمين والمسيحيين',
        subtitleEn: 'Defiance against British rule, Wafd party, and interfaith national unity',
        focusAr: 'أسباب قيام ثورة 1919 بقيادة سعد زغلول بعد نفيه لجزيرة مالطا، ومشاركة كافة فئات الشعب من عمال وطلاب ونساء، وشعار الهلال مع الصليب تجسيداً للوحدة الوطنية الراسخة.',
        focusEn: 'Catalysts of 1919 revolution, Saad Zaghloul leadership, women participation, and national unity.',
        activityAr: 'اكتب مقالاً قصيراً تشرح فيه كيف عكست ثورة 1919 تلاحم أطياف الشعب المصري كافة.',
        activityEn: 'Write a brief exposition on how the 1919 revolution united all segments of Egyptian society.',
        questionAr: 'من هو زعيم ثورة 1919 ومؤسس حزب الوفد المصري؟',
        questionEn: 'Who led the 1919 revolution and championed the national delegation?',
        optionsAr: ['سعد زغلول', 'محمد علي باشا', 'أحمد عرابي'],
        optionsEn: ['Saad Zaghloul', 'Muhammad Ali', 'Ahmed Orabi'],
        correctIndex: 0,
        vocabulary: [['ثورة 1919', '1919 Revolution'], ['سعد زغلول', 'Saad Zaghloul'], ['وحدة وطنية', 'National unity'], ['استقلال', 'Independence']]
      },
      {
        titleAr: 'ثورة 23 يوليو 1952 المجيدة والتحولات الاقتصادية والاجتماعية',
        titleEn: 'The Glorious July 23, 1952 Revolution & Social Reforms',
        subtitleAr: 'تنظيم الضباط الأحرار، إنهاء الملكية وإعلان الجمهورية، قانون الإصلاح الزراعي، وتأميم قناة السويس',
        subtitleEn: 'Free Officers movement, proclamation of the Republic, Agrarian Reform law, and nationalization of the Suez Canal',
        focusAr: 'مبادئ وأهداف ثورة 23 يوليو 1952 الستة (القضاء على الاستعمار، الإقطاع، الاحتكار، وإقامة جيش وطني، عدالة اجتماعية، حياة ديمقراطية سليمة)، وإنجازاتها الكبرى كبناء السد العالي ومجانية التعليم.',
        focusEn: 'Analyze the six foundational pillars of the 1952 revolution, agrarian justice, and the landmark construction of the Aswan High Dam.',
        activityAr: 'لخص أثر قانون الإصلاح الزراعي في إعادة الأرض للفلاحين وتحقيق العدالة الاجتماعية.',
        activityEn: 'Evaluate the transformative social impact of the Agrarian Reform law empowering Egyptian farmers.',
        questionAr: 'ما الإنجاز الهندسي المائي العظيم الذي تم افتتاحه عام 1971 لحماية مصر من الفيضان والجفاف؟',
        questionEn: 'Which monumental hydro-engineering structure was inaugurated in 1971 to protect Egypt from flood and drought?',
        optionsAr: ['السد العالي بأسوان', 'قناطر الدلتا', 'سد النهضة'],
        optionsEn: ['Aswan High Dam', 'Delta Barrages', 'Grand Renaissance Dam'],
        correctIndex: 0,
        vocabulary: [['ثورة 23 يوليو', 'July 23 Revolution'], ['السد العالي', 'Aswan High Dam'], ['عدالة اجتماعية', 'Social justice'], ['تأميم قناة السويس', 'Suez nationalization']]
      },
      {
        titleAr: 'حرب أكتوبر 1973 المجيدة واسترداد أرض سيناء الغالية',
        titleEn: 'The Glorious October 1973 War & Liberation of Sinai',
        subtitleAr: 'التخطيط الاستراتيجي، عبور خط بارليف، وبطولات القوات المسلحة المصرية الباسلة',
        subtitleEn: 'Strategic surprise, breaching the Bar Lev Line, and military valor',
        focusAr: 'ملحمة نصر السادس من أكتوبر العاشر من رمضان: التنسيق العسكري المحكم، الضربة الجوية، سلاح المهندسين وتدمير الساتر الترابي بخراطيم المياه، واستعادة العزة والسيادة الوطنية.',
        focusEn: 'October 1973 victory: military tactics, crossing the Suez Canal, breaching sand barriers, liberating Sinai.',
        activityAr: 'لخص خطة تدمير الساتر الترابي لخط بارليف وكيف كان الابتكار الهندسي مفتاح النصر.',
        activityEn: 'Summarize the engineering water-cannon breakthrough that collapsed the Bar Lev sand rampart.',
        questionAr: 'في أي تاريخ تم عبور قناة السويس وتحطيم خط بارليف الحصين؟',
        questionEn: 'On what date did Egyptian forces breach the Suez Canal and Bar Lev Line?',
        optionsAr: ['السادس من أكتوبر 1973', 'الثالث والعشرين من يوليو 1952', 'الخامس والعشرين من يناير 2011'],
        optionsEn: ['6th of October 1973', '23rd of July 1952', '25th of January 2011'],
        correctIndex: 0,
        vocabulary: [['نصر أكتوبر', 'October victory'], ['خط بارليف', 'Bar Lev Line'], ['القوات المسلحة', 'Armed forces'], ['سيناء', 'Sinai']]
      },
      {
        titleAr: 'مصر الحديثة في مطلع الألفية والمشروعات القومية الكبرى',
        titleEn: 'Modern Egypt in the 21st Century & National Megaprojects',
        subtitleAr: 'تطوير العاصمة الإدارية الجديدة، شبكة الطرق القومية، مبادرة حياة كريمة، والتحول الرقمي',
        subtitleEn: 'New Administrative Capital, national highways, Decent Life initiative, and digital transformation',
        focusAr: 'استراتيجية التنمية المستدامة (رؤية مصر 2030): مشروعات الإسكان الاجتماعي، القضاء على العشوائيات، تطوير الريف المصري عبر حياة كريمة، وبناء المدن الذكية.',
        focusEn: 'Egypt Vision 2030: sustainable infrastructure, Decent Life rural development, and smart digital governance.',
        activityAr: 'اكتب تقريراً مصوراً عن أحد المشروعات القومية الحديثة التي تم إنجازها في محافظتك أو بالقرب منك.',
        activityEn: 'Write a brief report describing a major modern national development project near your hometown.',
        questionAr: 'ما اسم المبادرة الرئاسية الكبرى لتطوير قرى الريف المصري وتحسين معيشة أكثر من 60 مليون مواطن؟',
        questionEn: 'What is the comprehensive presidential initiative modernizing Egyptian rural villages?',
        optionsAr: ['مبادرة حياة كريمة', 'مبادرة محو الأمية فقط', 'مبادرة النقل البري'],
        optionsEn: ['Decent Life Initiative (Haya Karima)', 'Literacy only', 'Road transit'],
        correctIndex: 0,
        vocabulary: [['حياة كريمة', 'Decent Life'], ['رؤية مصر 2030', 'Egypt Vision 2030'], ['مدن ذكية', 'Smart cities'], ['تحول رقمي', 'Digital transformation']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Curriculum Selector for Egypt Primary
// ---------------------------------------------------------------------------

export function getEgyptPrimaryCurriculum(
  subject: Subject,
  gradeLevel: GradeLevel,
  educationType: EducationType = 'PUBLIC',
  track: EducationTrack = 'GENERAL'
): Lecture[] {
  const gradeNumber = parseInt(gradeLevel.replace('G', ''), 10) || 4;
  const nameAr = `الصف ${gradeNumber} الابتدائي (التعليم الأساسي المصري)`;
  const nameEn = `Primary Grade ${gradeNumber} (Egyptian Basic Education)`;

  switch (subject) {
    case 'PRIMARY_ARABIC':
    case 'ARABIC_LANG':
      if (gradeLevel === 'G1') return PRIMARY_ARABIC_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_ARABIC_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_ARABIC_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_ARABIC_G4_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_ARABIC_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_ARABIC_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'PRIMARY_MATH':
    case 'MATH':
      if (gradeLevel === 'G1') return PRIMARY_MATH_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_MATH_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_MATH_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_MATH_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_MATH_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_MATH_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'PRIMARY_SCIENCE':
    case 'GENERAL_SCIENCE':
      if (gradeLevel === 'G1') return PRIMARY_SCIENCE_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_SCIENCE_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_SCIENCE_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_SCIENCE_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_SCIENCE_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_SCIENCE_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'ISLAMIC_STUDIES':
      if (gradeLevel === 'G1') return PRIMARY_ISLAMIC_G1_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G2') return PRIMARY_ISLAMIC_G2_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G3') return PRIMARY_ISLAMIC_G3_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G4') return PRIMARY_ISLAMIC_G4_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      if (gradeLevel === 'G5') return PRIMARY_ISLAMIC_G5_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));
      return PRIMARY_ISLAMIC_G6_LECTURES.map(l => ({ ...l, country: 'EG', educationType }));

    case 'ENGLISH':
      if (gradeLevel === 'G1' || gradeLevel === 'G2' || gradeLevel === 'G3') {
        return buildPrimaryLectures(connectG1Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(connectG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(connectG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    case 'COMPUTER_SCIENCE':
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(ictG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(ictG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    case 'GEOGRAPHY':
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(geographyG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(geographyG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    case 'HISTORY':
      if (gradeLevel === 'G4' || gradeLevel === 'G5') {
        return buildPrimaryLectures(historyG4Units, subject, gradeLevel, nameAr, nameEn, educationType, track);
      }
      return buildPrimaryLectures(historyG6Units, subject, gradeLevel, nameAr, nameEn, educationType, track);

    default:
      return [];
  }
}
