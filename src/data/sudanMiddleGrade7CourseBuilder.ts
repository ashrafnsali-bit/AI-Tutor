import type { Lecture, LectureDiagramStep, Subject } from '../types';

export interface SudanMiddleGrade7Unit {
  titleAr: string;
  titleEn: string;
  firstPage?: number;
  lastPage?: number;
}

export interface SudanMiddleGrade7Lesson {
  unit: number;
  page?: number;
  lastPage?: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  distractorsAr: [string, string];
  distractorsEn: [string, string];
}

export function grade7Lesson(
  unit: number,
  page: number | undefined,
  lastPage: number | undefined,
  titleAr: string,
  titleEn: string,
  focusAr: string,
  focusEn: string,
  answerAr: string = focusAr,
  answerEn: string = focusEn,
  distractorsAr: [string, string] = [
    'فكرة لا ترتبط بموضوع الدرس',
    'استنتاج لا تدعمه تفاصيل الدرس'
  ],
  distractorsEn: [string, string] = [
    'An idea unrelated to the lesson',
    'A conclusion unsupported by lesson details'
  ]
): SudanMiddleGrade7Lesson {
  return {
    unit,
    page,
    lastPage,
    titleAr,
    titleEn,
    focusAr,
    focusEn,
    questionAr: `أي عبارة تلخص الفكرة الرئيسة في «${titleAr}»؟`,
    questionEn: `Which statement summarizes the main idea of “${titleEn}”?`,
    answerAr,
    answerEn,
    distractorsAr,
    distractorsEn
  };
}

export interface SudanMiddleGrade7Course {
  key: string;
  subject: Subject;
  gradeLevel?: 'G7' | 'G8' | 'G9';
  titleAr: string;
  titleEn: string;
  edition: string;
  units: SudanMiddleGrade7Unit[];
  lessons: SudanMiddleGrade7Lesson[];
}

export function createSudanMiddleGrade7Book(course: SudanMiddleGrade7Course) {
  return {
    title: course.titleAr,
    titleEn: course.titleEn,
    edition: course.edition,
    units: course.units
  } as const;
}

export function createSudanMiddleGrade7TableOfContents(course: SudanMiddleGrade7Course) {
  return course.lessons.map((lesson, index) => ({
    lessonNumber: index + 1,
    unit: lesson.unit,
    page: lesson.page,
    lastPage: lesson.lastPage ?? lesson.page,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn
  }));
}

export function createSudanMiddleGrade7Lectures(course: SudanMiddleGrade7Course): Lecture[] {
  const gradeLevel = course.gradeLevel ?? 'G7';
  const gradeNumber = gradeLevel.slice(1);
  const gradeNameAr = gradeLevel === 'G9'
    ? 'الصف الثالث المتوسط'
    : gradeLevel === 'G8'
      ? 'الصف الثاني المتوسط'
      : 'الصف الأول المتوسط';
  const gradeNameEn = gradeLevel === 'G9'
    ? 'Grade 9 — Third Year of Middle School'
    : gradeLevel === 'G8'
      ? 'Grade 8 — Second Year of Middle School'
      : 'Grade 7 — First Year of Middle School';
  const lessonsInUnit = new Map<number, number>();

  return course.lessons.map((lesson, index) => {
    const order = index + 1;
    const id = `sd-middle-${course.key}-g${gradeNumber}-${order}`;
    const unit = course.units[lesson.unit - 1];
    const lessonInUnit = (lessonsInUnit.get(lesson.unit) ?? 0) + 1;
    lessonsInUnit.set(lesson.unit, lessonInUnit);
    const correctIndex = order % 3;
    const optionsAr = [lesson.answerAr, ...lesson.distractorsAr];
    const optionsEn = [lesson.answerEn, ...lesson.distractorsEn];
    const orderedOptionsAr = optionsAr.map((_, optionIndex) =>
      optionsAr[(optionIndex - correctIndex + 3) % 3]);
    const orderedOptionsEn = optionsEn.map((_, optionIndex) =>
      optionsEn[(optionIndex - correctIndex + 3) % 3]);
    const visualSteps: LectureDiagramStep[] = [
      { labelAr: `السؤال المحوري: ${lesson.titleAr}`, labelEn: `Focus question: ${lesson.titleEn}` },
      { labelAr: `الفكرة الرئيسة: ${lesson.focusAr}`, labelEn: `Main idea: ${lesson.focusEn}` },
      { labelAr: 'لاحظ التفاصيل والأمثلة المرتبطة بالفكرة', labelEn: 'Notice details and examples connected to the idea' },
      { labelAr: `طبّق ما تعلمته على موقف أو مثال جديد`, labelEn: 'Apply the learning to a new example or situation' }
    ];
    const lastPage = lesson.lastPage ?? lesson.page;
    const pageRangeAr = lesson.page === undefined
      ? undefined
      : lesson.page === lastPage ? `ص ${lesson.page}` : `ص ${lesson.page}–${lastPage}`;
    const pageRangeEn = lesson.page === undefined
      ? undefined
      : lesson.page === lastPage ? `p. ${lesson.page}` : `pp. ${lesson.page}–${lastPage}`;

    return {
      id,
      order,
      titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
      titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
      subtitleAr: `${course.titleAr} — ${gradeNameAr} — ${unit.titleAr}`,
      subtitleEn: `Grade ${gradeNumber} Middle School ${course.titleEn} — ${unit.titleEn}`,
      descriptionAr: lesson.focusAr,
      descriptionEn: lesson.focusEn,
      durationMinutes: 30,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SD',
      subject: course.subject,
      gradeLevel,
      educationType: 'PUBLIC',
      educationTrack: 'GENERAL',
      gradeLevelNameAr: gradeNameAr,
      gradeLevelNameEn: gradeNameEn,
      termAr: `${course.titleAr} — ${gradeNameAr}`,
      termEn: `Grade ${gradeNumber} ${course.titleEn}`,
      unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
      unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
      lessonNumberAr: `الدرس ${lessonInUnit}`,
      lessonNumberEn: `Lesson ${lessonInUnit}`,
      warmupHookAr: `تأمل موضوع «${lesson.titleAr}». ماذا تعرف عنه، وما السؤال الذي تريد الإجابة عنه؟`,
      warmupHookEn: `Think about “${lesson.titleEn}.” What do you already know, and what question would you like to answer?`,
      learningOutcomesAr: [
        lesson.focusAr,
        `أن يشرح المتعلم الفكرة الرئيسة في «${lesson.titleAr}» مستندًا إلى ما تعلمه.`
      ],
      learningOutcomesEn: [
        lesson.focusEn,
        `Explain the main idea of “${lesson.titleEn}” using evidence from the lesson.`
      ],
      keyConceptsAr: [lesson.titleAr],
      keyConceptsEn: [lesson.titleEn],
      summaryAr: lesson.focusAr,
      summaryEn: lesson.focusEn,
      sections: [{
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        contentAr: `${lesson.focusAr}\n\nاقرأ المخطط، واربط الفكرة بتفاصيل الدرس، ثم اشرحها بمثال من بيئتك أو دراستك.`,
        contentEn: `${lesson.focusEn}\n\nFollow the diagram, connect the idea to lesson details, then explain it with an example from your surroundings or studies.`,
        diagram: {
          id: `${id}-visual`,
          figureNumberAr: `شكل توضيحي (${order})`,
          figureNumberEn: `Illustration (${order})`,
          titleAr: `مخطط تعلّم: ${lesson.titleAr}`,
          titleEn: `Learning diagram: ${lesson.titleEn}`,
          captionAr: 'تسلسل بصري يربط السؤال بالفكرة والتفاصيل والتطبيق.',
          captionEn: 'A visual sequence connecting the question, main idea, details, and application.',
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
          textAr: lesson.questionAr,
          textEn: lesson.questionEn,
          optionsAr: orderedOptionsAr,
          optionsEn: orderedOptionsEn,
          correctIndex,
          conceptTestedAr: lesson.titleAr,
          conceptTestedEn: lesson.titleEn,
          explanationAr: `الإجابة الصحيحة: ${lesson.answerAr}`,
          explanationEn: `Correct answer: ${lesson.answerEn}`,
          difficulty: 'medium'
        }]
      },
      topicAr: pageRangeAr,
      topicEn: pageRangeEn
    };
  });
}
