export type Specialization = 'STEM' | 'HUMANITIES' | 'GENERAL' | 'HEALTH' | 'VOCATIONAL';

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

export interface StudentProfile {
  id: string;
  name: string;
  nameAr?: string;
  nameEn?: string;
  username?: string;
  email?: string;
  age: number;
  dateOfBirth: string;
  specialization: Specialization;
  subject: Subject;
  gradeLevel: GradeLevel;
  language: Language;
  parentEmail?: string;
  isParentVerified: boolean;
  timeLimitMinutes: number;
  usedTodayMinutes: number;
  masteryPoints: number;
}

export interface UserAccount extends StudentProfile {
  username: string;
  email: string;
  password?: string;
  createdAt: number;
  lastLoginAt: number;
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

export interface LectureSection {
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  interactiveExample?: InteractiveExample;
  tipsAr: string[];
  tipsEn: string[];
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
  keyConceptsAr: string[];
  keyConceptsEn: string[];
  summaryAr: string;
  summaryEn: string;
  sections: LectureSection[];
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
