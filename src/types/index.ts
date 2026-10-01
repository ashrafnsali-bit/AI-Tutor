export type Specialization = 'STEM' | 'HUMANITIES' | 'GENERAL' | 'HEALTH' | 'VOCATIONAL';

export type EducationType = 'PUBLIC' | 'PRIVATE' | 'ISLAMIC' | 'INTERNATIONAL';

export type EducationTrack = 
  | 'GENERAL' 
  | 'CS_ENGINEERING' 
  | 'HEALTH_LIFE' 
  | 'BUSINESS' 
  | 'SHARIA_HUMANITIES' 
  | 'SCIENCE_MATH' 
  | 'SCIENCE_BIO';

export type Subject = 
  | 'PRIMARY_MATH'
  | 'PRIMARY_ARABIC'
  | 'PRIMARY_SCIENCE'
  | 'ISLAMIC_STUDIES'
  | 'MATH' 
  | 'PHYSICS' 
  | 'CHEMISTRY' 
  | 'BIOLOGY' 
  | 'ARABIC_LIT' 
  | 'ARABIC_LANG' 
  | 'GENERAL_SCIENCE' 
  | 'COMPUTER_SCIENCE';

export type GradeLevel = 
  | 'G1' | 'G2' | 'G3' | 'G4' | 'G5' | 'G6' 
  | 'G7' | 'G8' | 'G9' 
  | 'G10' | 'G11' | 'G12';

export type Language = 'ar' | 'en';

export type CountryCode = 
  | 'SA' 
  | 'EG' 
  | 'AE' 
  | 'KW' 
  | 'JO' 
  | 'OM' 
  | 'QA' 
  | 'BH' 
  | 'IQ' 
  | 'MA' 
  | 'DZ' 
  | 'TN' 
  | 'INTL';

export interface StudentProfile {
  id: string;
  name: string;
  nameAr?: string;
  nameEn?: string;
  username?: string;
  email?: string;
  age: number;
  dateOfBirth: string;
  country: CountryCode;
  educationType?: EducationType;
  educationTrack?: EducationTrack;
  specialization: Specialization;
  subject: Subject;
  gradeLevel: GradeLevel;
  language: Language;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  isParentVerified: boolean;
  parentalSettings?: ParentalControlSettings;
  timeLimitMinutes: number;
  usedTodayMinutes: number;
  masteryPoints: number;
  isAutoDetectedCountry?: boolean;
  detectedCity?: string;
  detectedIp?: string;
}

export interface UserAccount extends StudentProfile {
  username: string;
  email: string;
  password?: string;
  createdAt: number;
  lastLoginAt: number;
}

export interface AdminStudentView extends UserAccount {
  currentLectureTitle: string;
  currentLectureOrder: number;
  completedLecturesCount: number;
  totalLecturesCount: number;
  progressPercentage: number;
  averageScore: number;
  bestScore: number;
  totalAssessmentsPassed: number;
  totalAssessmentsFailed: number;
  totalStudyMinutes: number;
  lastActiveDate: string;
  recentScores: number[];
  lecturesStatus: {
    lectureId: string;
    order: number;
    title: string;
    isCompleted: boolean;
    isLocked: boolean;
    score?: number;
    passed?: boolean;
    attemptCount?: number;
  }[];
}

export interface Question {
  id: string;
  textAr: string;
  textEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  conceptTestedAr: string;
  conceptTestedEn: string;
  explanationAr: string;
  explanationEn: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Assessment {
  id: string;
  lectureId: string;
  titleAr: string;
  titleEn: string;
  passingScore: number; // default 80%
  questions: Question[];
}

export interface AssessmentResult {
  score: number;
  totalQuestions: number;
  correctCount: number;
  passed: boolean;
  geminiFeedback: string;
  conceptBreakdown: {
    concept: string;
    isCorrect: boolean;
    advice: string;
  }[];
  timestamp: number;
}

export interface StepItem {
  stepNumber: number;
  textAr: string;
  textEn: string;
  noteAr?: string;
  noteEn?: string;
}

export interface InteractiveExample {
  titleAr: string;
  titleEn: string;
  equation?: string;
  steps: StepItem[];
  takeawayAr: string;
  takeawayEn: string;
}

export interface FormativeCheck {
  id: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
  hintAr?: string;
  hintEn?: string;
}

export interface VocabularyItem {
  termAr: string;
  termEn: string;
  definitionAr: string;
  definitionEn: string;
}

export interface TextbookExercise {
  id: string;
  questionAr: string;
  questionEn: string;
  solutionStepsAr: string[];
  solutionStepsEn: string[];
  answerAr: string;
  answerEn: string;
}

export interface DiagramKeyLabel {
  tagAr: string;
  tagEn: string;
  descAr?: string;
  descEn?: string;
  color?: string;
}

export interface LectureDiagram {
  id: string;
  figureNumberAr: string; // e.g. "شكل (1-3)"
  figureNumberEn: string; // e.g. "Figure (1-3)"
  titleAr: string;
  titleEn: string;
  captionAr: string;
  captionEn: string;
  diagramType: 
    | 'electric_field' 
    | 'circuit' 
    | 'vector_3d' 
    | 'pv_carnot' 
    | 'faraday_induction' 
    | 'calculus_integral' 
    | 'derivative_slope' 
    | 'discontinuity_graph'
    | 'unit_circle_trig'
    | 'solid_revolution'
    | 'chemical_kinetics'
    | 'dna_cell_biology'
    | 'binary_tree_cs'
    | 'primary_fractions'
    | 'primary_water_cycle'
    | 'islamic_pillars'
    | 'kinematics_graph'
    | 'atomic_structure'
    | 'matter_states_compound'
    | 'arabic_parts_of_speech'
    | 'arabic_sentence_structure'
    | 'rhetoric_simile_map'
    | 'polynomial_curve' 
    | 'apparatus' 
    | 'custom_svg';
  imageUrl?: string;
  svgContent?: string;
  keyLabels?: DiagramKeyLabel[];
  takeawayFormulaAr?: string;
  takeawayFormulaEn?: string;
}

export interface LectureSection {
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  diagram?: LectureDiagram;
  interactiveExample?: InteractiveExample;
  tipsAr?: string[];
  tipsEn?: string[];
  formativeCheck?: FormativeCheck;
}

export interface Lecture {
  id: string;
  order: number;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  durationMinutes: number;
  isLocked: boolean;
  isCompleted: boolean;
  passingScoreRequired: number; // 80%
  prerequisiteLectureId?: string;
  prerequisiteTitleAr?: string;
  prerequisiteTitleEn?: string;

  // Official National Curriculum Metadata
  country?: CountryCode;
  ministryAr?: string;
  ministryEn?: string;
  gradeLevelNameAr?: string;
  gradeLevelNameEn?: string;
  termAr?: string;
  termEn?: string;
  unitTitleAr?: string;
  unitTitleEn?: string;
  lessonNumberAr?: string;
  lessonNumberEn?: string;

  // Real-world warm-up & Hook
  warmupHookAr?: string;
  warmupHookEn?: string;

  // Targeted Learning Outcomes
  learningOutcomesAr?: string[];
  learningOutcomesEn?: string[];

  // Key Vocabulary
  vocabulary?: VocabularyItem[];

  keyConceptsAr: string[];
  keyConceptsEn: string[];
  summaryAr: string;
  summaryEn: string;
  sections: LectureSection[];

  // Concept Map / Golden takeaways
  conceptMapAr?: string[];
  conceptMapEn?: string[];
  conceptMapSummaryAr?: string;
  conceptMapSummaryEn?: string;
  goldenRulesAr?: string[];
  goldenRulesEn?: string[];

  // Guided Textbook Exercises
  textbookExercises?: TextbookExercise[];

  assessment: Assessment;
  lastAttempt?: AssessmentResult;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  scaffoldingType?: 'hint' | 'socratic_question' | 'encouragement' | 'clarification';
  suggestedFollowUps?: string[];
}

export interface ParentalControlSettings {
  curfewEnabled: boolean;
  curfewStart: string; // e.g. "21:00"
  curfewEnd: string; // e.g. "07:00"
  maxDailyMinutes: number;
  restrictedTopics: string[];
  consentStatus: 'VERIFIED' | 'PENDING' | 'EXEMPT';
}

// ─────────────────────────────────────────────
// GRADE RECORD — stored in IndexedDB
// ─────────────────────────────────────────────
export interface GradeRecord {
  id: string;
  userId: string;
  lectureId: string;
  lectureTitle: string;
  subject: Subject;
  gradeLevel: string;
  score: number;
  passed: boolean;
  correctCount: number;
  totalQuestions: number;
  attemptNumber: number;
  timestamp: number;
  feedback?: string;
  conceptResults?: { concept: string; isCorrect: boolean; advice: string }[];
}
