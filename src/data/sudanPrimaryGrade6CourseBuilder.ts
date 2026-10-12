import type { Lecture, LectureDiagramStep, Subject } from '../types';

export interface SudanPrimaryGrade6Unit {
  titleAr: string;
  titleEn: string;
  firstPage: number;
  lastPage: number;
}

export interface SudanPrimaryGrade6Lesson {
  unit: number;
  page: number;
  lastPage: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr?: string;
  questionEn?: string;
  answerAr?: string;
  answerEn?: string;
  distractorsAr?: [string, string];
  distractorsEn?: [string, string];
}

export interface SudanPrimaryGrade6Course {
  key: string;
  subject: Subject;
  titleAr: string;
  titleEn: string;
  edition: string;
  units: SudanPrimaryGrade6Unit[];
  lessons: SudanPrimaryGrade6Lesson[];
}

export function grade6Lesson(
  unit: number,
  page: number,
  lastPage: number,
  titleAr: string,
  titleEn: string,
  focusAr: string,
  focusEn: string
): SudanPrimaryGrade6Lesson {
  return { unit, page, lastPage, titleAr, titleEn, focusAr, focusEn };
}

export function createSudanPrimaryGrade6Book(course: SudanPrimaryGrade6Course) {
  return {
    title: course.titleAr,
    titleEn: course.titleEn,
    edition: course.edition,
    units: course.units
  } as const;
}

export function createSudanPrimaryGrade6TableOfContents(course: SudanPrimaryGrade6Course) {
  return course.lessons.map((lesson, index) => ({
    lessonNumber: index + 1,
    unit: lesson.unit,
    page: lesson.page,
    lastPage: lesson.lastPage,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn
  }));
}

export function createSudanPrimaryGrade6Lectures(course: SudanPrimaryGrade6Course): Lecture[] {
  const lessonsInUnit = new Map<number, number>();

  return course.lessons.map((lesson, index) => {
    const order = index + 1;
    const id = `sd-primary-${course.key}-g6-${order}`;
    const unit = course.units[lesson.unit - 1];
    const lessonInUnit = (lessonsInUnit.get(lesson.unit) ?? 0) + 1;
    lessonsInUnit.set(lesson.unit, lessonInUnit);

    const visualSteps: LectureDiagramStep[] = [
      { labelAr: `ابدأ بعنوان «${lesson.titleAr}»`, labelEn: `Start with “${lesson.titleEn}”` },
      { labelAr: 'تعرّف إلى الفكرة والعناصر الرئيسة', labelEn: 'Identify the main idea and its key parts' },
      { labelAr: 'اربط التفاصيل بعضها ببعض', labelEn: 'Connect the details to one another' },
      { labelAr: 'استنتج الفكرة وطبّقها', labelEn: 'Draw a conclusion and apply it' }
    ];
    const answerAr = lesson.answerAr ?? lesson.focusAr;
    const answerEn = lesson.answerEn ?? lesson.focusEn;
    const questionAr = lesson.questionAr ?? `أي عبارة تلخص موضوع «${lesson.titleAr}»؟`;
    const questionEn = lesson.questionEn ?? `Which statement summarizes “${lesson.titleEn}”?`;
    const distractorsAr = lesson.distractorsAr ?? ['يخلط بين الفكرة وموضوع آخر', 'يذكر تخميناً لا تدعمه معلومات الدرس'];
    const distractorsEn = lesson.distractorsEn ?? ['It confuses the idea with another topic', 'It gives a guess unsupported by the lesson'];
    const correctIndex = order % 3;
    const optionsAr = [answerAr, ...distractorsAr];
    const optionsEn = [answerEn, ...distractorsEn];
    const orderedOptionsAr = optionsAr.map((_, optionIndex) => optionsAr[(optionIndex - correctIndex + 3) % 3]);
    const orderedOptionsEn = optionsEn.map((_, optionIndex) => optionsEn[(optionIndex - correctIndex + 3) % 3]);
    const pageRangeEn = lesson.page === lesson.lastPage
      ? `p. ${lesson.page}`
      : `pp. ${lesson.page}–${lesson.lastPage}`;

    return {
      id,
      order,
      titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
      titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
      subtitleAr: `${course.titleAr} — الصف السادس الابتدائي — ${unit.titleAr}`,
      subtitleEn: `Grade 6 Primary ${course.titleEn} — ${unit.titleEn}`,
      descriptionAr: lesson.focusAr,
      descriptionEn: lesson.focusEn,
      durationMinutes: 25,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SD',
      subject: course.subject,
      gradeLevel: 'G6',
      educationType: 'PUBLIC',
      educationTrack: 'GENERAL',
      gradeLevelNameAr: 'الصف السادس الابتدائي',
      gradeLevelNameEn: 'Grade 6 Primary',
      termAr: `${course.titleAr} — الصف السادس`,
      termEn: `Grade 6 ${course.titleEn}`,
      unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
      unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
      lessonNumberAr: `الدرس ${lessonInUnit}`,
      lessonNumberEn: `Lesson ${lessonInUnit}`,
      warmupHookAr: `تأمل موضوع «${lesson.titleAr}». ما الذي تعرفه عنه، وما السؤال الذي تود الإجابة عنه؟`,
      warmupHookEn: `Think about “${lesson.titleEn}.” What do you already know, and what would you like to find out?`,
      learningOutcomesAr: [lesson.focusAr, `أن يشرح المتعلم الفكرة الرئيسة في «${lesson.titleAr}» بكلماته.`],
      learningOutcomesEn: [lesson.focusEn, `Explain the main idea of “${lesson.titleEn}” in your own words.`],
      keyConceptsAr: [lesson.titleAr],
      keyConceptsEn: [lesson.titleEn],
      summaryAr: lesson.focusAr,
      summaryEn: lesson.focusEn,
      sections: [{
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        contentAr: `${lesson.focusAr}\n\nاقرأ المخطط من بدايته إلى نهايته، ثم أعد شرح الفكرة بمثال من بيئتك أو دراستك.`,
        contentEn: `${lesson.focusEn}\n\nFollow the diagram from start to finish, then explain the idea with an example from your surroundings or studies.`,
        diagram: {
          id: `${id}-visual`,
          figureNumberAr: `شكل توضيحي (${order})`,
          figureNumberEn: `Illustration (${order})`,
          titleAr: `مخطط تعلّم: ${lesson.titleAr}`,
          titleEn: `Learning diagram: ${lesson.titleEn}`,
          captionAr: 'تسلسل بصري يساعد على فهم الفكرة وربط عناصرها.',
          captionEn: 'A visual sequence for understanding the idea and connecting its parts.',
          diagramType: 'primary_lesson_sequence',
          visualSteps
        }
      }],
      assessment: {
        id: `${id}-assessment`,
        lectureId: id,
        titleAr: `تقويم: ${lesson.titleAr}`,
        titleEn: `Check: ${lesson.titleEn}`,
        passingScore: 80,
        questions: [{
          id: `${id}-q1`,
          textAr: questionAr,
          textEn: questionEn,
          optionsAr: orderedOptionsAr,
          optionsEn: orderedOptionsEn,
          correctIndex,
          conceptTestedAr: lesson.titleAr,
          conceptTestedEn: lesson.titleEn,
          explanationAr: `الإجابة الصحيحة: ${answerAr}`,
          explanationEn: `Correct answer: ${answerEn}`,
          difficulty: 'easy'
        }]
      },
      topicAr: `ص ${lesson.page}${lesson.lastPage === lesson.page ? '' : `–${lesson.lastPage}`}`,
      topicEn: pageRangeEn
    };
  });
}
