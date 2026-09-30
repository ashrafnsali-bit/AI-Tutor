import type { Lecture, StudentProfile, Subject } from '../types';
import { CHEMISTRY_LECTURES, BIOLOGY_LECTURES, COMPUTER_SCIENCE_LECTURES } from './stemCurriculumData';
import { ISLAMIC_STUDIES_FULL, PRIMARY_ARABIC_FULL } from './islamicArabicCurriculum';
import {
  PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC_LECTURES,
  PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES_LECTURES
} from './primaryCurriculumData';

export {
  PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC_LECTURES,
  PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES_LECTURES
};

// ============================================================================
// 1. MATHEMATICS CURRICULUM (ط§ظ„ط±ظٹط§ط¶ظٹط§طھ ظˆط§ظ„ط¬ط¨ط±)
// ============================================================================
export const MATH_LECTURES: Lecture[] = [
  {
    id: 'math-1',
    order: 1,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ظ…ط¯ط®ظ„ ط¥ظ„ظ‰ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط§ظ„ط®ط·ظٹط© ظˆط®ط§طµظٹط© ط§ظ„طھظˆط§ط²ظ†',
    titleEn: 'Lecture 1: Introduction to Linear Equations & The Balance Property',
    subtitleAr: 'ظپظ‡ظ… ظ…ظپظ‡ظˆظ… ط§ظ„ظ…طھط؛ظٹط±طŒ ظˆطھط¨ط³ظٹط· ط§ظ„ط­ط¯ظˆط¯ ط§ظ„ظ…طھط´ط§ط¨ظ‡ط©طŒ ظˆطھط·ط¨ظٹظ‚ ط®ط§طµظٹط© ط§ظ„طھظˆط§ط²ظ† ظپظٹ ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ط­ط³ط§ط¨ظٹط©',
    subtitleEn: 'Master variables, balance properties, and inverse arithmetic operations to isolate unknowns.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'ط§ظ„طµظپ ط§ظ„ط£ظˆظ„ ظ…طھظˆط³ط· - ط§ظ„ظ…ط±ط­ظ„ط© ط§ظ„ظ…طھظˆط³ط·ط©',
    gradeLevelNameEn: 'Grade 7 / Intermediate - Middle School',
    termAr: 'ط§ظ„ظپطµظ„ ط§ظ„ط¯ط±ط§ط³ظٹ ط§ظ„ط£ظˆظ„',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'ط§ظ„ظˆط­ط¯ط© ط§ظ„ط«ط§ظ„ط«ط©: ط§ظ„ط¬ط¨ط± ظˆط§ظ„ط¯ظˆط§ظ„ ظˆط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط§ظ„ط®ط·ظٹط©',
    unitTitleEn: 'Unit 3: Algebra, Functions & Linear Equations',
    lessonNumberAr: 'ط§ظ„ط¯ط±ط³ 1: ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ظˆط®طµط§ط¦طµ ط§ظ„طھظˆط§ط²ظ† ط§ظ„ط¬ط¨ط±ظٹ',
    lessonNumberEn: 'Lesson 1: Equations & Balance Properties',

    // Real-world hook
    warmupHookAr: 'ط¹ظ†ط¯ظ…ط§ طھط°ظ‡ط¨ ط¥ظ„ظ‰ ط§ظ„ط³ظˆظ‚ ظˆطھط±ظ‰ ط§ظ„ط¨ط§ط¦ط¹ ظٹط¶ط¹ ط§ظ„ط£ط«ظ‚ط§ظ„ ط§ظ„ط­ط¯ظٹط¯ظٹط© ظپظٹ ظƒظپط©طŒ ظˆظٹط¶ط¹ ط§ظ„ظپط§ظƒظ‡ط© ظپظٹ ط§ظ„ظƒظپط© ط§ظ„ط£ط®ط±ظ‰ ط­طھظ‰ طھط³طھظˆظٹ ظƒظپطھط§ ط§ظ„ظ…ظٹط²ط§ظ† طھظ…ط§ظ…ط§ظ‹طŒ ظپط¥ظ†ظƒ طھط´ط§ظ‡ط¯ ظپظٹ ط§ظ„ظˆط§ظ‚ط¹ ظ…ط¹ط§ط¯ظ„ط© ط¬ط¨ط±ظٹط© ط­ظ‚ظٹظ‚ظٹط©! ط¥ط°ط§ ط£ط¶ظپطھ ظƒظٹظ„ظˆط؛ط±ط§ظ…ط§ظ‹ ظ„ظƒظپط© ط±ط¬ط­طھطŒ ظˆظ„ط¥ط¹ط§ط¯ط© ط§ظ„طھظˆط§ط²ظ† ظٹط¬ط¨ ط£ظ† طھط¶ظٹظپ ظˆط²ظ†ط§ظ‹ ظ…ظƒط§ظپط¦ط§ظ‹ ظ„ظ„ظƒظپط© ط§ظ„ظ…ظ‚ط§ط¨ظ„ط©. ظ‡ط°ظ‡ ظ‡ظٹ ط®ط§طµظٹط© ط§ظ„طھظˆط§ط²ظ† ط§ظ„ط±ظٹط§ط¶ظٹ ط§ظ„طھظٹ ظٹظ‚ظˆظ… ط¹ظ„ظٹظ‡ط§ ط¹ظ„ظ… ط§ظ„ط¬ط¨ط± ط¨ط£ظƒظ…ظ„ظ‡!',
    warmupHookEn: 'An old balance scale mirrors an algebraic equation: add an apple to one side, and you must add equal weight to the other to restore equilibrium. This is the immutable balance property of algebra!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'ط£ظ† ظٹط¹ط±ظ‘ظپ ط§ظ„ط·ط§ظ„ط¨ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط®ط·ظٹط© ظˆظٹظ…ظٹظ‘ط² ط¨ظٹظ† ط§ظ„ط«ظˆط§ط¨طھ ظˆط§ظ„ظ…طھط؛ظٹط±ط§طھ ط¨ط¯ظ‚ط©',
      'ط£ظ† ظٹط·ط¨ظ‚ ط®ط§طµظٹط© ط§ظ„ط¥ط¶ط§ظپط© ظˆط§ظ„ط·ط±ط­ ظ„ظ„ظ…ط³ط§ظˆط§ط© ظ„ط¹ط²ظ„ ط§ظ„ظ…طھط؛ظٹط± ط§ظ„ط¬ط¨ط±ظٹ',
      'ط£ظ† ظٹط·ط¨ظ‚ ط®ط§طµظٹط© ط§ظ„ط¶ط±ط¨ ظˆط§ظ„ظ‚ط³ظ…ط© ظ„ظ„ظ…ط³ط§ظˆط§ط© ظ„ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ظ…ط¹ط§ظ…ظ„ط§طھ ط§ظ„ط¹ط¯ط¯ظٹط©',
      'ط£ظ† ظٹطھط­ظ‚ظ‚ ظ…ظ† طµط­ط© ط§ظ„ط­ظ„ ط§ظ„ط¬ط¨ط±ظٹ ط¨ط§ظ„طھط¹ظˆظٹط¶ ط§ظ„ظ…ط¨ط§ط´ط± ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط£طµظ„ظٹط©'
    ],
    learningOutcomesEn: [
      'Define linear equations and distinguish constants from unknown variables',
      'Apply addition and subtraction equality properties to isolate unknowns',
      'Utilize multiplication and division equality properties to eliminate coefficients',
      'Verify algebraic solutions via direct substitution'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط®ط·ظٹط© (Linear Equation)',
        termEn: 'Linear Equation',
        definitionAr: 'ط¬ظ…ظ„ط© ط±ظٹط§ط¶ظٹط© طھط¤ظƒط¯ طھظƒط§ظپط¤ ط¹ط¨ط§ط±طھظٹظ† ط¬ط¨ط±ظٹطھظٹظ† طھط­طھظˆظٹط§ظ† ط¹ظ„ظ‰ ظ…طھط؛ظٹط± ظ…ظ† ط§ظ„ط¯ط±ط¬ط© ط§ظ„ط£ظˆظ„ظ‰ طھظپطµظ„ ط¨ظٹظ†ظ‡ظ…ط§ ط¹ظ„ط§ظ…ط© ط§ظ„ظ…ط³ط§ظˆط§ط© (=).',
        definitionEn: 'An algebraic statement asserting the equivalence of two expressions containing a first-degree variable.'
      },
      {
        termAr: 'ط§ظ„ظ…طھط؛ظٹط± ط§ظ„ط¬ط¨ط±ظٹ (Variable)',
        termEn: 'Variable',
        definitionAr: 'ط±ظ…ط² ظٹظ…ط«ظ„ ظƒظ…ظٹط© ظ…ط¬ظ‡ظˆظ„ط© ظ†ط¨ط­ط« ط¹ظ† ظ‚ظٹظ…طھظ‡ط§ ط§ظ„ط¹ط¯ط¯ظٹط© ط§ظ„طھظٹ طھط¬ط¹ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© طµط­ظٹط­ط©.',
        definitionEn: 'A symbol representing an unknown value that satisfies the equation.'
      },
      {
        termAr: 'ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ط¹ظƒط³ظٹط© (Inverse Operations)',
        termEn: 'Inverse Operations',
        definitionAr: 'ط¹ظ…ظ„ظٹط§طھ طھظ„ط؛ظٹ ط¥ط­ط¯ط§ظ‡ظ…ط§ ط§ظ„ط£ط®ط±ظ‰ (ط§ظ„ط¬ظ…ط¹ ظٹظ„ط؛ظٹ ط§ظ„ط·ط±ط­طŒ ظˆط§ظ„ط¶ط±ط¨ ظٹظ„ط؛ظٹ ط§ظ„ظ‚ط³ظ…ط©) ظˆطھط³طھط®ط¯ظ… ظ„ط¹ط²ظ„ ط§ظ„ظ…طھط؛ظٹط±.',
        definitionEn: 'Operations that reverse each other used to isolate variables.'
      }
    ],

    keyConceptsAr: [
      'طھط¹ط±ظٹظپ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط®ط·ظٹط© ظˆط§ظ„ظ…طھط؛ظٹط± ط§ظ„ط¬ط¨ط±ظٹ',
      'ط®ط§طµظٹط© ط§ظ„ط¥ط¶ط§ظپط© ظˆط§ظ„ط·ط±ط­ ظ„ظ„ظ…ط³ط§ظˆط§ط©',
      'ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ط¹ظƒط³ظٹط© ظˆط§ظ„ظ…ط¹ط§ظƒط³ط© ظ„ظ„ظ…ط³ط§ظˆط§ط©',
      'ط§ظ„طھط­ظ‚ظ‚ ظ…ظ† طµط­ط© ط§ظ„ط­ظ„ ط¨ط§ظ„طھط¹ظˆظٹط¶ ط§ظ„ظ…ط¨ط§ط´ط±'
    ],
    keyConceptsEn: [
      'Linear Equations & Variable Definition',
      'Addition & Subtraction Balance Property',
      'Inverse Arithmetic Operations',
      'Verification via Solution Substitution'
    ],
    summaryAr: 'ظپظٹ ظ‡ط°ظ‡ ط§ظ„ظ…ط­ط§ط¶ط±ط© ظ†ط¶ط¹ ط­ط¬ط± ط§ظ„ط£ط³ط§ط³ ظ„ظ„ط¬ط¨ط±ط› ط­ظٹط« ظ†طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ظƒظ…ظٹط²ط§ظ† ط°ظٹ ظƒظپطھظٹظ† ظ…طھط³ط§ظˆظٹطھظٹظ† طھظ…ط§ظ…ط§ظ‹طŒ ظˆط£ظٹ ط¹ظ…ظ„ظٹط© طھط¬ط±ظٹظ‡ط§ ط¹ظ„ظ‰ ط§ظ„ط·ط±ظپ ط§ظ„ط£ظٹظ…ظ† ظٹط¬ط¨ ط¥ط¬ط±ط§ط¤ظ‡ط§ ط¨ط¯ظ‚ط© ط¹ظ„ظ‰ ط§ظ„ط·ط±ظپ ط§ظ„ط£ظٹط³ط± ظ„ظ„ط­ظپط§ط¸ ط¹ظ„ظ‰ ط§ظ„ظ…ط³ط§ظˆط§ط©.',
    summaryEn: 'In this lecture, we establish the bedrock of algebra: treating equations as balanced scales where any arithmetic operation performed on one side must be mirrored on the other to preserve equality.',
    sections: [
      {
        titleAr: '1. ظ…ط§ ظ‡ظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط¬ط¨ط±ظٹط©طں ظƒظپط© ط§ظ„ظ…ظٹط²ط§ظ† ظˆط®ط§طµظٹط© ط§ظ„ط¬ظ…ط¹ ظˆط§ظ„ط·ط±ط­',
        titleEn: '1. What is an Algebraic Equation? The Balance Scale',
        contentAr: 'ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ظ‡ظٹ ط¬ظ…ظ„ط© ط±ظٹط§ط¶ظٹط© طھط­طھظˆظٹ ط¹ظ„ظ‰ ط¹ظ„ط§ظ…ط© ط§ظ„ظ…ط³ط§ظˆط§ط© (=) ظˆطھط¤ظƒط¯ ط£ظ† ط§ظ„ظ…ظ‚ط¯ط§ط±ظٹظ† ط¹ظ„ظ‰ ط¬ط§ظ†ط¨ظٹظ‡ط§ ظ…طھظƒط§ظپط¦ط§ظ† ظپظٹ ط§ظ„ظ‚ظٹظ…ط©. ظ†ط³طھط®ط¯ظ… ط§ظ„ظ…طھط؛ظٹط± (ظ…ط«ظ„ x) ظ„طھظ…ط«ظٹظ„ ظƒظ…ظٹط© ظ…ط¬ظ‡ظˆظ„ط© ظ†ط¨ط­ط« ط¹ظ† ظ‚ظٹظ…طھظ‡ط§ ط§ظ„طھظٹ طھط¬ط¹ظ„ ط§ظ„ط¬ظ…ظ„ط© طµط­ظٹط­ط©.',
        contentEn: 'An equation is a mathematical statement containing an equality symbol (=) asserting that expressions on both sides have identical values. We employ variables (such as x) to denote unknown quantities.',
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„ طھط·ط¨ظٹظ‚ظٹ: ط®ط§طµظٹط© ط§ظ„ط·ط±ط­ ظ„ظ„ظ…ط³ط§ظˆط§ط©',
          titleEn: 'Worked Example: Subtraction Property of Equality',
          equation: 'x + 7 = 19',
          steps: [
            { stepNumber: 1, textAr: 'ظ„ط§ط­ط¸ ط£ظ† ط§ظ„ط¹ط¯ط¯ 7 ظ…ط¶ط§ظپ ط¥ظ„ظ‰ ط§ظ„ظ…طھط؛ظٹط± x.', textEn: 'Notice that 7 is currently added to the variable x.', noteAr: 'ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط­ط§ظ„ظٹط©: ط¬ظ…ط¹', noteEn: 'Active operation: Addition' },
            { stepNumber: 2, textAr: 'ظ†ط¹ظƒط³ ط§ظ„ط¹ظ…ظ„ظٹط© ط¨ط·ط±ط­ 7 ظ…ظ† ط·ط±ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: (x + 7) - 7 = 19 - 7', textEn: 'Invert the operation by subtracting 7 from both sides: (x + 7) - 7 = 19 - 7', noteAr: 'ط®ط§طµظٹط© ط§ظ„ط·ط±ط­ ظ„ظ„ظ…ط³ط§ظˆط§ط©', noteEn: 'Subtraction Property of Equality' },
            { stepNumber: 3, textAr: 'ط§ظ„ظ†ط§طھط¬: x = 12', textEn: 'Result: x = 12', noteAr: 'طھظ… ط¹ط²ظ„ ط§ظ„ظ…طھط؛ظٹط± ط¨ظ†ط¬ط§ط­', noteEn: 'Variable isolated successfully' },
            { stepNumber: 4, textAr: 'ط§ظ„طھط­ظ‚ظ‚: 12 + 7 = 19 (طµط­ظٹط­ 100%)', textEn: 'Verification check: 12 + 7 = 19 (Equivalence confirmed)', noteAr: 'ط®ط·ظˆط© ظپط­طµ ط§ظ„ط¥ط¬ط§ط¨ط©', noteEn: 'Verification step' }
          ],
          takeawayAr: 'ط§ظ„ظ‚ط§ط¹ط¯ط© ط§ظ„ط°ظ‡ط¨ظٹط©: ظ„ط¹ط²ظ„ ط§ظ„ظ…طھط؛ظٹط±طŒ ظ†ط·ط¨ظ‚ ط¯ط§ط¦ظ…ط§ظ‹ ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط¹ظƒط³ظٹط© ط¹ظ„ظ‰ ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†.',
          takeawayEn: 'Golden Rule: To isolate an unknown variable, always apply the inverse operation equally to both sides.'
        },
        formativeCheck: {
          id: 'fc-math1-1',
          questionAr: 'ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: x + 9 = 24طŒ ظ…ط§ ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط¹ظƒط³ظٹط© ط§ظ„طµط­ظٹط­ط© ظ„ط¹ط²ظ„ ط§ظ„ظ…طھط؛ظٹط± xطں',
          questionEn: 'In x + 9 = 24, which inverse operation isolates x?',
          optionsAr: ['ط·ط±ط­ 9 ظ…ظ† ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†', 'ط¬ظ…ط¹ 9 ظ„ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†', 'ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 9', 'ط¶ط±ط¨ ط§ظ„ط·ط±ظپظٹظ† ظپظٹ 9'],
          optionsEn: ['Subtract 9 from both sides', 'Add 9 to both sides', 'Divide both sides by 9', 'Multiply both sides by 9'],
          correctIndex: 0,
          explanationAr: 'ط¨ظ…ط§ ط£ظ† ط§ظ„ط¹ط¯ط¯ 9 ظ…ط¶ط§ظپ (+)طŒ ظپط¥ظ† ط¹ظƒط³ ط§ظ„ط¬ظ…ط¹ ظ‡ظˆ ط§ظ„ط·ط±ط­ (-)طŒ ظپظ†ط·ط±ط­ 9 ظ…ظ† ط·ط±ظپظٹ ط§ظ„ظ…ط³ط§ظˆط§ط©.',
          explanationEn: 'Since 9 is added, the inverse operation is subtracting 9 from both sides.',
          hintAr: 'ظ…ط§ ظ‡ظٹ ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ظ…ط¹ط§ظƒط³ط© ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط¬ظ…ط¹طں',
          hintEn: 'What operation inverses addition?'
        },
        tipsAr: ['ط¹ظƒط³ ط§ظ„ط¬ظ…ط¹ ظ‡ظˆ ط§ظ„ط·ط±ط­ ط¯ط§ط¦ظ…ط§ظ‹.', 'ط¹ظ„ط§ظ…ط© (=) طھط¹ظ†ظٹ طھظˆط§ط²ظ†ط§ظ‹ ظ…ط·ظ„ظ‚ط§ظ‹طŒ ظ„ط§ طھط؛ظٹط± ظƒظپط© ط¯ظˆظ† ط§ظ„ط£ط®ط±ظ‰.'],
        tipsEn: ['The inverse of addition is always subtraction.', 'The equal sign represents an immutable scale: whatever is done to one side must be done to the other.']
      },
      {
        titleAr: '2. ط®ط§طµظٹط© ط§ظ„ط¶ط±ط¨ ظˆط§ظ„ظ‚ط³ظ…ط© ظ„ظ„ظ…ط³ط§ظˆط§ط©',
        titleEn: '2. Multiplication & Division Property of Equality',
        contentAr: 'ط¹ظ†ط¯ظ…ط§ ظٹظƒظˆظ† ط§ظ„ظ…طھط؛ظٹط± ظ…ط¶ط±ظˆط¨ط§ظ‹ ظپظٹ ظ…ط¹ط§ظ…ظ„ (ظ…ط«ظ„ 4x)طŒ ظپط¥ظ† ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط¹ظƒط³ظٹط© ظ„ظ„ط¶ط±ط¨ ظ‡ظٹ ط§ظ„ظ‚ط³ظ…ط© ط¹ظ„ظ‰ ظ†ظپط³ ط§ظ„ظ…ط¹ط§ظ…ظ„ ظ„ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†طŒ ط¨ط´ط±ط· ط£ظ„ط§ ظٹظƒظˆظ† ط§ظ„ظ…ط¹ط§ظ…ظ„ طµظپط±ط§ظ‹.',
        contentEn: 'When an unknown is bound by a coefficient (e.g. 4x), the inverse operation is division by that coefficient across both sides, provided the divisor is non-zero.',
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„: ط§ظ„ظ‚ط³ظ…ط© ظ„ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ظ…ط¹ط§ظ…ظ„',
          titleEn: 'Example: Division to Eliminate Coefficients',
          equation: '4x = 28',
          steps: [
            { stepNumber: 1, textAr: 'ط§ظ„ظ…طھط؛ظٹط± x ظ…ط¶ط±ظˆط¨ ظپظٹ 4.', textEn: 'The variable x is multiplied by 4.', noteAr: 'ط§ظ„ظ…ط¹ط§ظ…ظ„ ظ‡ظˆ 4', noteEn: 'Coefficient is 4' },
            { stepNumber: 2, textAr: 'ظ†ظ‚ط³ظ… ظƒظ„ط§ ط·ط±ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط¹ظ„ظ‰ 4: (4x أ· 4) = (28 أ· 4)', textEn: 'Divide both sides of the equation by 4: (4x أ· 4) = (28 أ· 4)', noteAr: 'ط®ط§طµظٹط© ط§ظ„ظ‚ط³ظ…ط© ظ„ظ„ظ…ط³ط§ظˆط§ط©', noteEn: 'Division Property of Equality' },
            { stepNumber: 3, textAr: 'ط§ظ„ظ†ط§طھط¬: x = 7', textEn: 'Result: x = 7', noteAr: 'ظ‚ظٹظ…ط© ط§ظ„ظ…ط¬ظ‡ظˆظ„', noteEn: 'Isolated solution' }
          ],
          takeawayAr: 'ط¹ظ†ط¯ ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ†طŒ ط§ط­ط±طµ ط¹ظ„ظ‰ ظ‚ط³ظ…ط© ظƒط§ظ…ظ„ ط§ظ„ظ…ظ‚ط¯ط§ط± ظپظٹ ظƒظ„ ط·ط±ظپ.',
          takeawayEn: 'When dividing equations, ensure the entire expression across each side is divided.'
        },
        formativeCheck: {
          id: 'fc-math1-2',
          questionAr: 'ظ…ط§ ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط®ط·ظٹط© ط§ظ„طھط§ظ„ظٹط©: 5y = 35طں',
          questionEn: 'What is the solution to 5y = 35?',
          optionsAr: ['y = 5', 'y = 7', 'y = 30', 'y = 40'],
          optionsEn: ['y = 5', 'y = 7', 'y = 30', 'y = 40'],
          correctIndex: 1,
          explanationAr: 'ظ†ظ‚ط³ظ… ط·ط±ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط¹ظ„ظ‰ ظ…ط¹ط§ظ…ظ„ y ظˆظ‡ظˆ 5: 35 أ· 5 = 7.',
          explanationEn: 'Divide both sides by 5: 35 / 5 = 7.',
          hintAr: 'ط§ظ‚ط³ظ… 35 ط¹ظ„ظ‰ 5.',
          hintEn: 'Divide 35 by 5.'
        },
        tipsAr: ['ط¥ط°ط§ ظƒط§ظ† ط§ظ„ظ…ط¹ط§ظ…ظ„ ظƒط³ط±ط§ظ‹ (ظ…ط«ظ„ آ½x = 6)طŒ ط§ط¶ط±ط¨ ظپظٹ ظ…ظ‚ظ„ظˆط¨ظ‡ ظ„ظ„طھط®ظ„طµ ظ…ظ†ظ‡ ط¨ط®ط·ظˆط© ظˆط§ط­ط¯ط©.'],
        tipsEn: ['If the coefficient is a fraction (e.g., آ½x = 6), multiply by the reciprocal (2) to solve directly.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ظƒظ…ظٹط²ط§ظ† ط°ظٹ ظƒظپطھظٹظ†: ظ…ط§ ظٹظڈط¬ط±ظ‰ ط¹ظ„ظ‰ ط§ظ„ظٹظ…ظٹظ† ظٹظڈط¬ط±ظ‰ ط¨ط¯ظ‚ط© ط¹ظ„ظ‰ ط§ظ„ظٹط³ط§ط±',
      'ط§ظ„ظ…طھط؛ظٹط± ط§ظ„ظ…ط¬ظ…ظˆط¹ (+) -> ظ†طھط®ظ„طµ ظ…ظ†ظ‡ ط¨ط§ظ„ط·ط±ط­ (-) ظ…ظ† ط§ظ„ط·ط±ظپظٹظ†',
      'ط§ظ„ظ…طھط؛ظٹط± ط§ظ„ظ…ط·ط±ظˆط­ (-) -> ظ†طھط®ظ„طµ ظ…ظ†ظ‡ ط¨ط§ظ„ط¬ظ…ط¹ (+) ظ„ظ„ط·ط±ظپظٹظ†',
      'ط§ظ„ظ…طھط؛ظٹط± ط§ظ„ظ…ط¶ط±ظˆط¨ (أ—) -> ظ†طھط®ظ„طµ ظ…ظ†ظ‡ ط¨ط§ظ„ظ‚ط³ظ…ط© (أ·) ط¹ظ„ظ‰ ط§ظ„ظ…ط¹ط§ظ…ظ„',
      'ط®ط·ظˆط© ط§ظ„طھط­ظ‚ظ‚ ط§ظ„ط°ظ‡ط¨ظٹط©: ط¹ظˆظ‘ط¶ ط¨ط§ظ„ظ†ط§طھط¬ ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط£طµظ„ظٹط© ظ„ظ„طھط£ظƒط¯ ظ…ظ† طµط­ط© ط§ظ„ظ…ط³ط§ظˆط§ط©'
    ],
    conceptMapEn: [
      'Equations operate as balanced scales',
      'Addition inversed via subtraction',
      'Subtraction inversed via addition',
      'Multiplication inversed via division',
      'Verification: Plug back into original equation'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-math1-1',
        questionAr: 'ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط®ط·ظٹط© ط§ظ„طھط§ظ„ظٹط© ط®ط·ظˆط© ط¨ط®ط·ظˆط© ظ…ط¹ ط§ظ„طھط­ظ‚ظ‚: 3x + 5 = 26',
        questionEn: 'Solve and verify: 3x + 5 = 26',
        solutionStepsAr: [
          'ط§ظ„ط®ط·ظˆط© 1 (ط·ط±ط­ ط§ظ„ط«ط§ط¨طھ): ظ†ط·ط±ط­ 5 ظ…ظ† ط§ظ„ط·ط±ظپظٹظ†: 3x = 26 - 5 = 21',
          'ط§ظ„ط®ط·ظˆط© 2 (ط§ظ„ظ‚ط³ظ…ط© ط¹ظ„ظ‰ ط§ظ„ظ…ط¹ط§ظ…ظ„): ظ†ظ‚ط³ظ… ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 3: x = 21 أ· 3 = 7',
          'ط§ظ„ط®ط·ظˆط© 3 (ط§ظ„طھط­ظ‚ظ‚ ط¨ط§ظ„طھط¹ظˆظٹط¶): 3 أ— 7 + 5 = 21 + 5 = 26 (طµط­ظٹط­ 100%)'
        ],
        solutionStepsEn: [
          'Subtract 5 from both sides: 3x = 21',
          'Divide both sides by 3: x = 7',
          'Verify: 3(7) + 5 = 26 (confirmed)'
        ],
        answerAr: 'ظ‚ظٹظ…ط© ط§ظ„ظ…طھط؛ظٹط±: x = 7',
        answerEn: 'Variable value: x = 7'
      }
    ],
    assessment: {
      id: 'quiz-math-1',
      lectureId: 'math-1',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط£ظˆظ„ظ‰: ظ…ظ‡ط§ط±ط§طھ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط°ط§طھ ط§ظ„ط®ط·ظˆط© ط§ظ„ظˆط§ط­ط¯ط©',
      titleEn: 'Lecture 1 Assessment: Single-Step Equation Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qm1-1',
          textAr: 'ظ…ط§ ظ‡ظٹ ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط¹ظƒط³ظٹط© ط§ظ„ظ…ظ†ط§ط³ط¨ط© ظ„ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: x - 15 = 40 طں',
          textEn: 'What is the appropriate inverse operation to solve: x - 15 = 40 ?',
          optionsAr: ['ط·ط±ط­ 15 ظ…ظ† ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†', 'ط¥ط¶ط§ظپط© 15 ظ„ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†', 'ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 15', 'ط¶ط±ط¨ ط§ظ„ط·ط±ظپظٹظ† ظپظٹ 15'],
          optionsEn: ['Subtract 15 from both sides', 'Add 15 to both sides', 'Divide both sides by 15', 'Multiply both sides by 15'],
          correctIndex: 1,
          conceptTestedAr: 'ط®ط§طµظٹط© ط§ظ„ط¥ط¶ط§ظپط© ظˆط§ظ„ط·ط±ط­ ظ„ظ„ظ…ط³ط§ظˆط§ط©',
          conceptTestedEn: 'Addition & Subtraction Property of Equality',
          explanationAr: 'ط¨ظ…ط§ ط£ظ† ط§ظ„ط¹ط¯ط¯ 15 ظ…ط·ط±ظˆط­ ظ…ظ† xطŒ ظپط¥ظ† ط§ظ„ط¹ظ…ظ„ظٹط© ط§ظ„ط¹ظƒط³ظٹط© ظ„ظ„ط·ط±ط­ ظ‡ظٹ ط§ظ„ط¬ظ…ط¹ (ط¥ط¶ط§ظپط© 15 ظ„ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†) ظ„ظٹظƒظˆظ† x = 55.',
          explanationEn: 'Since 15 is subtracted from x, the inverse operation is addition (+15 on both sides), yielding x = 55.',
          difficulty: 'easy'
        },
        {
          id: 'qm1-2',
          textAr: 'ط¥ط°ط§ ظƒط§ظ†طھ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ظ‡ظٹ 6x = 54طŒ ظپظ…ط§ ظ‚ظٹظ…ط© ط§ظ„ظ…طھط؛ظٹط± x طں',
          textEn: 'If 6x = 54, what is the value of variable x ?',
          optionsAr: ['x = 48', 'x = 60', 'x = 9', 'x = 7'],
          optionsEn: ['x = 48', 'x = 60', 'x = 9', 'x = 7'],
          correctIndex: 2,
          conceptTestedAr: 'ط®ط§طµظٹط© ط§ظ„ط¶ط±ط¨ ظˆط§ظ„ظ‚ط³ظ…ط© ظ„ظ„ظ…ط³ط§ظˆط§ط©',
          conceptTestedEn: 'Multiplication & Division Property of Equality',
          explanationAr: 'ط¨ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ ظ…ط¹ط§ظ…ظ„ x ظˆظ‡ظˆ 6: (54 أ· 6 = 9)طŒ ط¥ط°ظ† x = 9.',
          explanationEn: 'Dividing both sides by the coefficient 6 yields 54 أ· 6 = 9, so x = 9.',
          difficulty: 'easy'
        },
        {
          id: 'qm1-3',
          textAr: 'ط£ظٹ ظ…ظ† ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط§ظ„طھط§ظ„ظٹط© طھظ…ط«ظ„ ط­ظ„ط§ظ‹ طµط­ظٹط­ط§ظ‹ ظٹط¹ط·ظٹ x = 8 طں',
          textEn: 'Which of the following equations has a solution of x = 8 ?',
          optionsAr: ['x + 10 = 17', '3x = 24', 'x - 4 = 14', 'x / 2 = 16'],
          optionsEn: ['x + 10 = 17', '3x = 24', 'x - 4 = 14', 'x / 2 = 16'],
          correctIndex: 1,
          conceptTestedAr: 'ط§ظ„طھط­ظ‚ظ‚ ظ…ظ† طµط­ط© ط§ظ„ط­ظ„ ظˆط§ظ„طھط¹ظˆظٹط¶',
          conceptTestedEn: 'Verification & Substitution',
          explanationAr: 'ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© 3x = 24طŒ ط¨ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 3 ظٹظ†طھط¬ x = 8. ط¨ط§ظ‚ظٹ ط§ظ„ط®ظٹط§ط±ط§طھ ظ„ط§ طھظ†طھط¬ 8.',
          explanationEn: 'In 3x = 24, dividing by 3 yields x = 8. The other options yield different values.',
          difficulty: 'medium'
        },
        {
          id: 'qm1-4',
          textAr: 'ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: (â…“)x = 9 طŒ ظ…ط§ ظ‡ظٹ ظ‚ظٹظ…ط© xطں',
          textEn: 'Solve the equation: (â…“)x = 9. What is x ?',
          optionsAr: ['x = 3', 'x = 6', 'x = 27', 'x = 12'],
          optionsEn: ['x = 3', 'x = 6', 'x = 27', 'x = 12'],
          correctIndex: 2,
          conceptTestedAr: 'ط§ظ„طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ظ…ط¹ط§ظ…ظ„ط§طھ ط§ظ„ظƒط³ط±ظٹط© ظˆظ…ظ‚ظ„ظˆط¨ ط§ظ„ط¹ط¯ط¯',
          conceptTestedEn: 'Fractional Coefficients & Reciprocals',
          explanationAr: 'ظ„ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ظƒط³ط± â…“طŒ ظ†ط¶ط±ط¨ ط§ظ„ط·ط±ظپظٹظ† ظپظٹ ظ…ظ‚ظ„ظˆط¨ظ‡ ظˆظ‡ظˆ 3: (9 أ— 3 = 27).',
          explanationEn: 'Multiply both sides by the reciprocal (3): x = 9 أ— 3 = 27.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-2',
    order: 2,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط°ط§طھ ط§ظ„ط®ط·ظˆطھظٹظ† ظˆط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ظ…ط¹ط§ظƒط³ط©',
    titleEn: 'Lecture 2: Solving Two-Step Equations & Precedence',
    subtitleAr: 'ط§ظ„ط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط¬ظ…ط¹ ظˆط§ظ„ط¶ط±ط¨طŒ ظˆطھط±طھظٹط¨ ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ط¹ظƒط³ظٹط© ظ„ط¹ط²ظ„ ط§ظ„ظ…طھط؛ظٹط± ط¨ط¯ظ‚ط©',
    subtitleEn: 'Combine operations and reverse standard precedence to isolate variables cleanly.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-1',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ظ…ط¯ط®ظ„ ط¥ظ„ظ‰ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط§ظ„ط®ط·ظٹط© ظˆط®ط§طµظٹط© ط§ظ„طھظˆط§ط²ظ†',
    prerequisiteTitleEn: 'Lecture 1: Introduction to Linear Equations & The Balance Property',
    keyConceptsAr: [
      'ط¹ظƒط³ طھط±طھظٹط¨ ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ط­ط³ط§ط¨ظٹط© ط§ظ„ظ‚ظٹط§ط³ظٹ',
      'ط§ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ط­ط¯ ط§ظ„ط«ط§ط¨طھ ط£ظˆظ„ط§ظ‹ ط«ظ… ط§ظ„ظ…ط¹ط§ظ…ظ„',
      'ط§ظ„طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ط¥ط´ط§ط±ط§طھ ط§ظ„ط³ط§ظ„ط¨ط© ط¨ط¯ظ‚ط©',
      'طھط·ط¨ظٹظ‚ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ظپظٹ ط­ط³ط§ط¨ ط§ظ„ظ…ط³ط§ظپط§طھ ظˆط§ظ„طھظƒط§ظ„ظٹظپ'
    ],
    keyConceptsEn: [
      'Reverse Order of Operations',
      'Eliminating Constants Before Coefficients',
      'Handling Negative Coefficients & Signs',
      'Linear Modeling for Real-World Scenarios'
    ],
    summaryAr: 'طھط­طھظˆظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط°ط§طھ ط§ظ„ط®ط·ظˆطھظٹظ† ط¹ظ„ظ‰ ط¹ظ…ظ„ظٹطھظٹظ† ط­ط³ط§ط¨ظٹطھظٹظ† ظ…ط®طھظ„ظپطھظٹظ† طھط¤ط«ط±ط§ظ† ط¹ظ„ظ‰ ط§ظ„ظ…طھط؛ظٹط±. ط§ظ„ط³ط± ظپظٹ ط­ظ„ظ‡ط§ ظٹظƒظ…ظ† ظپظٹ ط¹ظƒط³ طھط±طھظٹط¨ ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ظ‚ظٹط§ط³ظٹ (ط§ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ط¬ظ…ط¹ ظˆط§ظ„ط·ط±ط­ ط£ظˆظ„ط§ظ‹طŒ ط«ظ… ط§ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ط¶ط±ط¨ ظˆط§ظ„ظ‚ط³ظ…ط©).',
    summaryEn: 'A two-step equation features two distinct operations. The core principle is applying operations in reverse standard order: undo addition/subtraction before multiplication/division.',
    sections: [
      {
        titleAr: '1. ط§ط³طھط±ط§طھظٹط¬ظٹط© ط§ظ„ط®ط·ظˆطھظٹظ†: ط§ظ„طھط±طھظٹط¨ ظ‡ظˆ ط§ظ„ظ…ظپطھط§ط­',
        titleEn: '1. Two-Step Strategy: Sequencing is Key',
        contentAr: 'ط¹ظ†ط¯ ط­ظ„ ظ…ط¹ط§ط¯ظ„ط© ظ…ط«ظ„ 2x + 5 = 17طŒ ظ†ط³ط£ظ„ ط£ظ†ظپط³ظ†ط§: ظ…ط§ ط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„طھظٹ ط·ط±ط£طھ ط¹ظ„ظ‰ xطں ظ„ظ‚ط¯ طھظ… ط¶ط±ط¨ظ‡ ظپظٹ 2 ط«ظ… ط£ظڈط¶ظٹظپ ط¥ظ„ظٹظ‡ 5. ظ„ط¹ظƒط³ ط°ظ„ظƒطŒ ظ†ط¨ط¯ط£ ط¨ط§ظ„ط¹ظƒط³: ظ†طھط®ظ„طµ ظ…ظ† +5 ط£ظˆظ„ط§ظ‹ ط¨ط§ظ„ط·ط±ط­طŒ ط«ظ… ظ†طھط®ظ„طµ ظ…ظ† ط¶ط±ط¨ 2 ط¨ط§ظ„ظ‚ط³ظ…ط©.',
        contentEn: 'To solve 2x + 5 = 17, analyze the transformations on x: it is multiplied by 2, then incremented by 5. Inverting requires unwinding backwards: subtract 5 first, then divide by 2.',
        interactiveExample: {
          titleAr: 'ط­ظ„ ظ†ظ…ظˆط°ط¬ظٹ ظ„ظ…ط¹ط§ط¯ظ„ط© ط°ط§طھ ط®ط·ظˆطھظٹظ†',
          titleEn: 'Worked Example: Two-Step Decomposition',
          equation: '2x + 5 = 17',
          steps: [
            { stepNumber: 1, textAr: 'ط§ط·ط±ط­ 5 ظ…ظ† ط§ظ„ط·ط±ظپظٹظ†: 2x = 17 - 5', textEn: 'Subtract 5 from both sides: 2x = 17 - 5', noteAr: 'ط§ظ„ط®ط·ظˆط© 1: ط¹ط²ظ„ ط§ظ„ط­ط¯ ط§ظ„ظ…ط­طھظˆظٹ ط¹ظ„ظ‰ ط§ظ„ظ…طھط؛ظٹط±', noteEn: 'Step 1: Isolate the variable term' },
            { stepNumber: 2, textAr: 'ط§ظ„طھط¨ط³ظٹط·: 2x = 12', textEn: 'Simplify: 2x = 12', noteAr: 'ط£طµط¨ط­ ظ„ط¯ظٹظ†ط§ ظ…ط¹ط§ط¯ظ„ط© ط®ط·ظˆط© ظˆط§ط­ط¯ط©', noteEn: 'Now reduced to a single-step equation' },
            { stepNumber: 3, textAr: 'ط§ظ‚ط³ظ… ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 2: x = 12 أ· 2', textEn: 'Divide both sides by 2: x = 12 أ· 2', noteAr: 'ط§ظ„ط®ط·ظˆط© 2: ط¹ط²ظ„ x ظ†ظپط³ظ‡', noteEn: 'Step 2: Isolate x' },
            { stepNumber: 4, textAr: 'ط§ظ„ظ†طھظٹط¬ط© ط§ظ„ظ†ظ‡ط§ط¦ظٹط©: x = 6', textEn: 'Final Solution: x = 6', noteAr: 'ط§ظ„طھط­ظ‚ظ‚: 2(6) + 5 = 12 + 5 = 17 (طµط­ظٹط­)', noteEn: 'Check: 2(6) + 5 = 17 (Verified)' }
          ],
          takeawayAr: 'طھط®ظ„طµ ط¯ط§ط¦ظ…ط§ظ‹ ظ…ظ† ط§ظ„ط­ط¯ ط§ظ„ط«ط§ط¨طھ (ط§ظ„ط¨ط¹ظٹط¯ ط¹ظ† ط§ظ„ظ…طھط؛ظٹط±) ظ‚ط¨ظ„ ط§ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ظ…ط¹ط§ظ…ظ„ ط§ظ„ظ…ظ„ط§طµظ‚ ظ„ظ‡.',
          takeawayEn: 'Always eliminate the loose constant term prior to dividing by the coefficient.'
        },
        tipsAr: ['ط§ط­ط°ط± ظ…ظ† ظ‚ط³ظ…ط© ط§ظ„ظ…ط¹ط§ط¯ظ„ط© ط¹ظ„ظ‰ ط§ظ„ظ…ط¹ط§ظ…ظ„ ظپظٹ ط§ظ„ط¨ط¯ط§ظٹط©ط› ط§ظ„ط¨ط¯ط، ط¨ط§ظ„ط·ط±ط­ ط¯ط§ط¦ظ…ط§ظ‹ ط£ط³ظ„ظ… ظˆط£ط³ظ‡ظ„.'],
        tipsEn: ['Avoid dividing by the coefficient first if it creates awkward fractions; subtracting the constant first is cleaner.']
      }
    ],
    assessment: {
      id: 'quiz-math-2',
      lectureId: 'math-2',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ†ظٹط©: ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط°ط§طھ ط§ظ„ط®ط·ظˆطھظٹظ†',
      titleEn: 'Lecture 2 Assessment: Two-Step Equations & Sequencing',
      passingScore: 80,
      questions: [
        {
          id: 'qm2-1',
          textAr: 'ظ…ط§ ظ‡ظٹ ط§ظ„ط®ط·ظˆط© ط§ظ„ط£ظˆظ„ظ‰ ط§ظ„ظ…ط«ظ„ظ‰ ظ„ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: 3x - 8 = 16 طں',
          textEn: 'What is the optimal first step to solve: 3x - 8 = 16 ?',
          optionsAr: ['ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 3', 'ط¥ط¶ط§ظپط© 8 ظ„ظƒظ„ط§ ط§ظ„ط·ط±ظپظٹظ†', 'ط·ط±ط­ 16 ظ…ظ† ط§ظ„ط·ط±ظپظٹظ†', 'ط¶ط±ط¨ ط§ظ„ط·ط±ظپظٹظ† ظپظٹ 8'],
          optionsEn: ['Divide both sides by 3', 'Add 8 to both sides', 'Subtract 16 from both sides', 'Multiply both sides by 8'],
          correctIndex: 1,
          conceptTestedAr: 'طھط±طھظٹط¨ ط§ظ„ط®ط·ظˆط§طھ ظˆط¹ط²ظ„ ط§ظ„ط­ط¯ ط§ظ„ط«ط§ط¨طھ ط£ظˆظ„ط§ظ‹',
          conceptTestedEn: 'Operation Precedence & Constant Isolation',
          explanationAr: 'ط§ظ„ط®ط·ظˆط© ط§ظ„ط£ظˆظ„ظ‰ ط§ظ„طµط­ظٹط­ط© ظ‡ظٹ ط§ظ„طھط®ظ„طµ ظ…ظ† ط§ظ„ط­ط¯ ط§ظ„ط«ط§ط¨طھ (-8) ط¨ط¥ط¶ط§ظپط© 8 ظ„ظ„ط·ط±ظپظٹظ†طŒ ظ„ظٹطµط¨ط­ 3x = 24.',
          explanationEn: 'The first step is isolating the variable term by neutralizing -8 with +8, giving 3x = 24.',
          difficulty: 'easy'
        },
        {
          id: 'qm2-2',
          textAr: 'ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: 5x + 10 = 45. ظ…ط§ ظ‡ظٹ ظ‚ظٹظ…ط© xطں',
          textEn: 'Solve the equation: 5x + 10 = 45. What is x ?',
          optionsAr: ['x = 11', 'x = 7', 'x = 9', 'x = 5'],
          optionsEn: ['x = 11', 'x = 7', 'x = 9', 'x = 5'],
          correctIndex: 1,
          conceptTestedAr: 'ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط°ط§طھ ط§ظ„ط®ط·ظˆطھظٹظ†',
          conceptTestedEn: 'Two-Step Equation Execution',
          explanationAr: 'ط·ط±ط­ 10 ظ…ظ† ط§ظ„ط·ط±ظپظٹظ† ظٹط¹ط·ظٹ 5x = 35طŒ ط«ظ… ظ‚ط³ظ…ط© ط§ظ„ط·ط±ظپظٹظ† ط¹ظ„ظ‰ 5 طھط¹ط·ظٹ x = 7.',
          explanationEn: 'Subtracting 10 gives 5x = 35; dividing by 5 yields x = 7.',
          difficulty: 'medium'
        },
        {
          id: 'qm2-3',
          textAr: 'ط§ط´طھط±ظ‰ ط£ط­ظ…ط¯ 3 ظƒطھط¨ ظˆط¯ظپط¹ ط±ط³ظˆظ… طھظˆطµظٹظ„ ظ‚ط¯ط±ظ‡ط§ 15 ط±ظٹط§ظ„ط§ظ‹طŒ ظپظƒط§ظ† ط¥ط¬ظ…ط§ظ„ظٹ ط§ظ„ظ…ط¨ظ„ط؛ 75 ط±ظٹط§ظ„ط§ظ‹. ط£ظٹ ظ…ط¹ط§ط¯ظ„ط© طھظ…ط«ظ„ ط³ط¹ط± ط§ظ„ظƒطھط§ط¨ ط§ظ„ظˆط§ط­ط¯ (b)طں',
          textEn: 'Ahmad bought 3 books with a $15 delivery fee totaling $75. Which equation models the book price (b)?',
          optionsAr: ['3b + 15 = 75', '15b + 3 = 75', '3b - 15 = 75', 'b + 15 = 75'],
          optionsEn: ['3b + 15 = 75', '15b + 3 = 75', '3b - 15 = 75', 'b + 15 = 75'],
          correctIndex: 0,
          conceptTestedAr: 'ط§ظ„ظ†ظ…ط°ط¬ط© ط§ظ„ط±ظٹط§ط¶ظٹط© ظ„ظ„ظ…ط³ط§ط¦ظ„ ط§ظ„ظ„ظپط¸ظٹط©',
          conceptTestedEn: 'Mathematical Word Problem Modeling',
          explanationAr: '3 ظƒطھط¨ ظٹط¹ظ†ظٹ 3bطŒ ظ…ط¶ط§ظپط§ظ‹ ط¥ظ„ظٹظ‡ط§ 15 ط±ط³ظˆظ…طŒ ط¨ظ…ط¬ظ…ظˆط¹ ظٹط³ط§ظˆظٹ 75: 3b + 15 = 75.',
          explanationEn: '3 books (3b) plus $15 shipping fee equals $75: 3b + 15 = 75.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-3',
    order: 3,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ظ…ط¹ ظ…طھط؛ظٹط±ط§طھ ظپظٹ ط§ظ„ط·ط±ظپظٹظ† ظˆط®ط§طµظٹط© ط§ظ„طھظˆط²ظٹط¹',
    titleEn: 'Lecture 3: Variables on Both Sides & The Distributive Property',
    subtitleAr: 'طھط¬ظ…ظٹط¹ ط§ظ„ط­ط¯ظˆط¯ ط§ظ„ظ…طھط´ط§ط¨ظ‡ط©طŒ ظˆظپظƒ ط§ظ„ط£ظ‚ظˆط§ط³طŒ ظˆط§ظ„طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ط­ط§ظ„ط§طھ ط§ظ„ط®ط§طµط© ظ„ظ„ظ…طھط·ط§ط¨ظ‚ط§طھ',
    subtitleEn: 'Combine like terms, distribute parenthesis, and categorize special cases.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-2',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط°ط§طھ ط§ظ„ط®ط·ظˆطھظٹظ† ظˆط§ظ„ط¹ظ…ظ„ظٹط§طھ ط§ظ„ظ…ط¹ط§ظƒط³ط©',
    prerequisiteTitleEn: 'Lecture 2: Solving Two-Step Equations & Precedence',
    keyConceptsAr: ['ط®ط§طµظٹط© ط§ظ„طھظˆط²ظٹط¹ ط¹ظ„ظ‰ ط§ظ„ط­ط¯ظˆط¯', 'طھط¬ظ…ظٹط¹ ط§ظ„ط­ط¯ظˆط¯ ط§ظ„ظ…طھط´ط§ط¨ظ‡ط© ظپظٹ ط·ط±ظپ ظˆط§ط­ط¯', 'ط§ظ„ظ…طھط·ط§ط¨ظ‚ط§طھ ظˆط§ظ„ط­ظ„ظˆظ„ ط§ظ„ظ„ط§ظ†ظ‡ط§ط¦ظٹط©'],
    keyConceptsEn: ['Distributive Property', 'Combining Like Terms across Sides', 'Identities & Infinite Solutions'],
    summaryAr: 'ط¹ظ†ط¯ظ…ط§ ظٹط¸ظ‡ط± ط§ظ„ظ…طھط؛ظٹط± ظپظٹ ظƒظ„ط§ ط·ط±ظپظٹ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©طŒ ظ†ظ‚ظˆظ… ط£ظˆظ„ط§ظ‹ ط¨ظ†ظ‚ظ„ ط§ظ„ط­ط¯ظˆط¯ ط§ظ„ظ…طھط¶ظ…ظ†ط© ظ„ظ„ظ…طھط؛ظٹط± ط¥ظ„ظ‰ ط¬ظ‡ط© ظˆط§ط­ط¯ط© ظˆط§ظ„ط­ط¯ظˆط¯ ط§ظ„ط«ط§ط¨طھط© ط¥ظ„ظ‰ ط§ظ„ط¬ظ‡ط© ط§ظ„ط£ط®ط±ظ‰.',
    summaryEn: 'When unknowns populate both sides of an equality, collect variable terms onto a single side and constant terms on the other.',
    sections: [
      {
        titleAr: '1. ظ†ظ‚ظ„ ط§ظ„ظ…طھط؛ظٹط±ط§طھ ط¥ظ„ظ‰ ط·ط±ظپ ظˆط§ط­ط¯',
        titleEn: '1. Collecting Variables onto One Side',
        contentAr: 'ط§ظ„ظ…ط¹ط§ط¯ظ„ط© 5x - 4 = 2x + 11 طھط­طھظˆظٹ ط¹ظ„ظ‰ ظ…طھط؛ظٹط±ط§طھ ظٹظ…ظٹظ†ط§ظ‹ ظˆظٹط³ط§ط±ط§ظ‹. ظ†ط²ظٹظ„ ط§ظ„ط­ط¯ ط§ظ„ط£طµط؛ط± ظ„ظ„ظ…طھط؛ظٹط± (2x) ط¨ط·ط±ط­ظ‡ ظ…ظ† ط§ظ„ط·ط±ظپظٹظ†.',
        contentEn: 'The equation 5x - 4 = 2x + 11 presents variables on both sides. Subtract the smaller term (2x) from both sides.',
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„: ط¬ظ…ط¹ ط§ظ„ط­ط¯ظˆط¯ ظپظٹ ط·ط±ظپ',
          titleEn: 'Worked Example: Multi-Variable Consolidation',
          equation: '5x - 4 = 2x + 11',
          steps: [
            { stepNumber: 1, textAr: 'ط§ط·ط±ط­ 2x ظ…ظ† ط§ظ„ط·ط±ظپظٹظ†: 3x - 4 = 11', textEn: 'Subtract 2x from both sides: 3x - 4 = 11' },
            { stepNumber: 2, textAr: 'ط£ط¶ظپ 4 ط¥ظ„ظ‰ ط§ظ„ط·ط±ظپظٹظ†: 3x = 15', textEn: 'Add 4 to both sides: 3x = 15' },
            { stepNumber: 3, textAr: 'ط§ظ‚ط³ظ… ط¹ظ„ظ‰ 3: x = 5', textEn: 'Divide by 3: x = 5' }
          ],
          takeawayAr: 'ط§ط·ط±ط­ ط¯ط§ط¦ظ…ط§ظ‹ ط§ظ„ظ…ط¹ط§ظ…ظ„ ط§ظ„ط£طµط؛ط± ظ„طھظپط§ط¯ظٹ ط§ظ„ط¥ط´ط§ط±ط§طھ ط§ظ„ط³ط§ظ„ط¨ط©.',
          takeawayEn: 'Subtract the smaller variable coefficient to keep values positive.'
        },
        tipsAr: ['ظپظƒ ط§ظ„ط£ظ‚ظˆط§ط³ ط¯ط§ط¦ظ…ط§ظ‹ ظ‚ط¨ظ„ ظ†ظ‚ظ„ ط§ظ„ط­ط¯ظˆط¯.'],
        tipsEn: ['Always expand parentheses prior to grouping terms.']
      }
    ],
    assessment: {
      id: 'quiz-math-3',
      lectureId: 'math-3',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ„ط«ط©: ط§ظ„ظ…طھط؛ظٹط±ط§طھ ظپظٹ ط§ظ„ط·ط±ظپظٹظ† ظˆط§ظ„ط£ظ‚ظˆط§ط³',
      titleEn: 'Lecture 3 Assessment: Variables on Both Sides & Distribution',
      passingScore: 80,
      questions: [
        {
          id: 'qm3-1',
          textAr: 'ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط©: 7x - 5 = 4x + 10. ظ…ط§ ظ‡ظٹ ظ‚ظٹظ…ط© xطں',
          textEn: 'Solve: 7x - 5 = 4x + 10. What is x ?',
          optionsAr: ['x = 3', 'x = 5', 'x = 15', 'x = 2'],
          optionsEn: ['x = 3', 'x = 5', 'x = 15', 'x = 2'],
          correctIndex: 1,
          conceptTestedAr: 'ط­ظ„ ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ط¨ظ…طھط؛ظٹط±ط§طھ ظپظٹ ط§ظ„ط·ط±ظپظٹظ†',
          conceptTestedEn: 'Variables on Both Sides',
          explanationAr: 'ط·ط±ط­ 4x ظٹط¹ط·ظٹ 3x - 5 = 10. ط¥ط¶ط§ظپط© 5 طھط¹ط·ظٹ 3x = 15. ط§ظ„ظ‚ط³ظ…ط© ط¹ظ„ظ‰ 3 طھط¹ط·ظٹ x = 5.',
          explanationEn: 'Subtract 4x: 3x - 5 = 10. Add 5: 3x = 15. Divide by 3: x = 5.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-4',
    order: 4,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 4: ط§ظ„ظ†ظ…ط°ط¬ط© ط§ظ„ط±ظٹط§ط¶ظٹط© ظˆط­ظ„ ط§ظ„ظ…ط´ظƒظ„ط§طھ ط§ظ„ظ‡ظ†ط¯ط³ظٹط© ظˆط§ظ„ظپظٹط²ظٹط§ط¦ظٹط©',
    titleEn: 'Lecture 4: Applied STEM Modeling & Real-World Problem Solving',
    subtitleAr: 'طھط­ظˆظٹظ„ ط§ظ„ط¸ظˆط§ظ‡ط± ط§ظ„ظˆط§ظ‚ط¹ظٹط© ظˆط§ظ„ظ…ط³ط§ط¦ظ„ ط§ظ„ظ‡ظ†ط¯ط³ظٹط© ط§ظ„ظ…ط¹ظ‚ط¯ط© ط¥ظ„ظ‰ ط£ظ†ط¸ظ…ط© ظ…ط¹ط§ط¯ظ„ط§طھ ط®ط·ظٹط© ظˆطھط­ظ„ظٹظ„ ط­ظ„ظˆظ„ظ‡ط§',
    subtitleEn: 'Translate geometric constraints, kinematics, and scientific word problems into linear models.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-3',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ظ…ط¹ط§ط¯ظ„ط§طھ ظ…ط¹ ظ…طھط؛ظٹط±ط§طھ ظپظٹ ط§ظ„ط·ط±ظپظٹظ† ظˆط®ط§طµظٹط© ط§ظ„طھظˆط²ظٹط¹',
    prerequisiteTitleEn: 'Lecture 3: Variables on Both Sides & The Distributive Property',
    keyConceptsAr: ['طµظٹط§ط؛ط© ط§ظ„ظ†ظ…ط§ط°ط¬ ط§ظ„ط±ظٹط§ط¶ظٹط© ط§ظ„ظˆط§ظ‚ط¹ظٹط©', 'ظ…ط³ط§ط¦ظ„ ط§ظ„ظ…ط­ظٹط· ظˆط§ظ„ظ…ط³ط§ط­ط© ط§ظ„ط¬ط¨ط±ظٹط©', 'طھظپط³ظٹط± ظ…ظ†ط·ظ‚ظٹط© ط§ظ„ط­ظ„ ظˆط§ظ‚ط¹ظٹط§ظ‹'],
    keyConceptsEn: ['Translating Real Contexts into Variables', 'Geometric Perimeters & Algebraic Dimensions', 'Evaluating Physical Validity'],
    summaryAr: 'ط§ظ„ظ…ط­ط·ط© ط§ظ„ط®طھط§ظ…ظٹط© ظ„ظ„ظˆط­ط¯ط©ط› ظ†ط³طھط®ط¯ظ… ظپظٹظ‡ط§ ظƒظ„ ط§ظ„ظ…ظ‡ط§ط±ط§طھ ط§ظ„ط¬ط¨ط±ظٹط© ط§ظ„طھظٹ ط£طھظ‚ظ†ط§ظ‡ط§ ظ„ط­ظ„ ظ…ط´ط§ظƒظ„ ط­ظ‚ظٹظ‚ظٹط© ظپظٹ ط§ظ„ظ‡ظ†ط¯ط³ط© ظˆط§ظ„ظپظٹط²ظٹط§ط،.',
    summaryEn: 'The capstone module synthesizes algebra techniques to solve authentic engineering and physics challenges.',
    sections: [
      {
        titleAr: '1. ط§ظ„ظ‡ظ†ط¯ط³ط© ط§ظ„ط¬ط¨ط±ظٹط©: ط£ط¨ط¹ط§ط¯ ط§ظ„ظ…ط³طھط·ظٹظ„',
        titleEn: '1. Algebraic Geometry: Rectangular Dimensions',
        contentAr: 'ظ…ط³طھط·ظٹظ„ ط·ظˆظ„ظ‡ ظٹط²ظٹط¯ ط¹ظ† ط¹ط±ط¶ظ‡ ط¨ظ…ظ‚ط¯ط§ط± 4 ط£ظ…طھط§ط±طŒ ظˆظ…ط­ظٹط·ظ‡ 36 ظ…طھط±ط§ظ‹. ظ†ط³طھط®ط¯ظ… ظ‚ط§ظ†ظˆظ† ط§ظ„ظ…ط­ظٹط· ظ„ط­ط³ط§ط¨ ط£ط¨ط¹ط§ط¯ظ‡ ط¬ط¨ط±ظٹط§ظ‹.',
        contentEn: 'A rectangle length exceeds its width by 4m, with perimeter 36m. We solve for dimensions algebraically.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚ ظ‚ط§ظ†ظˆظ† ط§ظ„ظ…ط­ظٹط·',
          titleEn: 'Worked Example: Perimeter Modeling',
          equation: '2(w + (w + 4)) = 36',
          steps: [
            { stepNumber: 1, textAr: 'ط¨ط³ط· ظ…ط§ ط¨ط¯ط§ط®ظ„ ط§ظ„ظ‚ظˆط³: 2(2w + 4) = 36', textEn: 'Simplify interior: 2(2w + 4) = 36' },
            { stepNumber: 2, textAr: 'ط·ط¨ظ‚ ط§ظ„طھظˆط²ظٹط¹: 4w + 8 = 36', textEn: 'Distribute: 4w + 8 = 36' },
            { stepNumber: 3, textAr: 'ط§ط·ط±ط­ 8 ظˆط§ظ‚ط³ظ… ط¹ظ„ظ‰ 4: w = 7 ظ…', textEn: 'Subtract 8 and divide by 4: w = 7 meters' }
          ],
          takeawayAr: 'طھط±ط¬ظ…ط© ط§ظ„ظ†طµ ط§ظ„ظ„ط؛ظˆظٹ ط¨ط¯ظ‚ط© ط¥ظ„ظ‰ طھط¹ط¨ظٹط± ط¬ط¨ط±ظٹ ظ‡ظˆ ط§ظ„ط®ط·ظˆط© ط§ظ„ط­ط§ط³ظ…ط© ظ„ظ„ط­ظ„.',
          takeawayEn: 'Translating verbal constraints into algebraic notation is the core skill.'
        },
        tipsAr: ['طھط£ظƒط¯ ظ…ظ† ظƒطھط§ط¨ط© ظˆط­ط¯ط§طھ ط§ظ„ظ‚ظٹط§ط³ (ظ…طھط±طŒ ط«ط§ظ†ظٹط©طŒ ط±ظٹط§ظ„) ظ…ط¹ ط§ظ„ط­ظ„.'],
        tipsEn: ['Always attach physical units to the final answer.']
      }
    ],
    assessment: {
      id: 'quiz-math-4',
      lectureId: 'math-4',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ظ†ظ‡ط§ط¦ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط±ط§ط¨ط¹ط©: ط§ظ„ظ†ظ…ط°ط¬ط© ظˆط­ظ„ ط§ظ„ظ…ط³ط§ط¦ظ„ ط§ظ„ظ…طھظ‚ط¯ظ…ط©',
      titleEn: 'Lecture 4 Assessment: Applied Modeling & Word Problems',
      passingScore: 80,
      questions: [
        {
          id: 'qm4-1',
          textAr: 'ظ…ط³طھط·ظٹظ„ ظ…ط­ظٹط·ظ‡ 40 ط³ظ…طŒ ظˆط¹ط±ط¶ظ‡ 6 ط³ظ…. ظ…ط§ ظ‡ظˆ ط·ظˆظ„ظ‡طں',
          textEn: 'A rectangle has a perimeter of 40 cm and a width of 6 cm. What is its length?',
          optionsAr: ['14 ط³ظ…', '28 ط³ظ…', '20 ط³ظ…', '10 ط³ظ…'],
          optionsEn: ['14 cm', '28 cm', '20 cm', '10 cm'],
          correctIndex: 0,
          conceptTestedAr: 'ظ…ط³ط§ط¦ظ„ ط§ظ„ظ…ط­ظٹط· ظˆط§ظ„ظ…ط³ط§ط­ط©',
          conceptTestedEn: 'Perimeter Modeling',
          explanationAr: 'ظ†طµظپ ط§ظ„ظ…ط­ظٹط· = 20 ط³ظ…. ط¨ظ…ط§ ط£ظ† ط§ظ„ط¹ط±ط¶ 6 ط³ظ…طŒ ظپط¥ظ† ط§ظ„ط·ظˆظ„ = 20 - 6 = 14 ط³ظ….',
          explanationEn: 'Semi-perimeter = 20 cm. Length = 20 - 6 = 14 cm.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 2. ADVANCED PHYSICS CURRICULUM (ط§ظ„ظپظٹط²ظٹط§ط، ط§ظ„ظ…طھظ‚ط¯ظ…ط©)
// ============================================================================
export const PHYSICS_LECTURES: Lecture[] = [
  {
    id: 'phys-1',
    order: 1,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط¹ظ„ظ… ط§ظ„ط­ط±ظƒط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط© ظˆط§ظ„طھط³ط§ط±ط¹ ط§ظ„ظ„ط­ط¸ظٹ',
    titleEn: 'Lecture 1: Kinematics, Velocity Vectors & Instantaneous Acceleration',
    subtitleAr: 'ط¯ط±ط§ط³ط© ظˆطµظپ ط­ط±ظƒط© ط§ظ„ط£ط¬ط³ط§ظ… ظپظٹ ط¨ط¹ط¯ ظˆط§ط­ط¯طŒ ظˆط§ظ„طھظ…ظٹظٹط² ط§ظ„ط¯ظ‚ظٹظ‚ ط¨ظٹظ† ط§ظ„ظ…ط³ط§ظپط© ظˆط§ظ„ط¥ط²ط§ط­ط©',
    subtitleEn: 'Study motion in one dimension, distinguishing scalar distance from vector displacement.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'ط§ظ„طµظپ ط§ظ„ط£ظˆظ„ ط«ط§ظ†ظˆظٹ - ط§ظ„ظ…ط±ط­ظ„ط© ط§ظ„ط«ط§ظ†ظˆظٹط© (ظ…ط³ط§ط± STEM)',
    gradeLevelNameEn: 'Grade 10 / High School - STEM Specialization',
    termAr: 'ط§ظ„ظپطµظ„ ط§ظ„ط¯ط±ط§ط³ظٹ ط§ظ„ط£ظˆظ„',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'ط§ظ„ظˆط­ط¯ط© ط§ظ„ط£ظˆظ„ظ‰: ظ…ط¯ط®ظ„ ط¥ظ„ظ‰ ط¹ظ„ظ… ط§ظ„ظپظٹط²ظٹط§ط، ظˆط­ط±ظƒط© ط§ظ„ط£ط¬ط³ط§ظ…',
    unitTitleEn: 'Unit 1: Introduction to Physics & 1D Kinematics',
    lessonNumberAr: 'ط§ظ„ط¯ط±ط³ 1: ط¹ظ„ظ… ط§ظ„ط­ط±ظƒط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط© ظˆط§ظ„طھط³ط§ط±ط¹',
    lessonNumberEn: 'Lesson 1: Kinematics, Velocity Vectors & Acceleration',

    // Real-world hook
    warmupHookAr: 'ط¹ظ†ط¯ظ…ط§ طھط´ط§ظ‡ط¯ ط§ظ†ط·ظ„ط§ظ‚ ظ‚ط·ط§ط± ط§ظ„ط­ط±ظ…ظٹظ† ط§ظ„ط³ط±ظٹط¹ ط¨ظٹظ† ظ…ظƒط© ط§ظ„ظ…ظƒط±ظ…ط© ظˆط§ظ„ظ…ط¯ظٹظ†ط© ط§ظ„ظ…ظ†ظˆط±ط©ط› ظٹظ‚ط·ط¹ ظ…ط³ط§ظپط© 450 ظƒظ… ط¨ط³ط±ط¹ط© طھطµظ„ ط¥ظ„ظ‰ 300 ظƒظ…/ط³ط§ط¹ط©. ظ‡ظ„ ظٹط³طھط·ظٹط¹ ظ…ظ‡ظ†ط¯ط³ظˆ ط§ظ„ظ…ظ„ط§ط­ط© ط§ظ„ط¬ظˆظٹط© ظˆط§ظ„ط³ظƒظƒ ط§ظ„ط­ط¯ظٹط¯ظٹط© ط­ط³ط§ط¨ ط²ظ…ظ† ط§ظ„ط±ط­ظ„ط© ط¨ط¯ظ‚ط© ط¯ظˆظ† طھط­ط¯ظٹط¯ ط§طھط¬ط§ظ‡ ط§ظ„ط­ط±ظƒط© ظˆط§ظ„طھط³ط§ط±ط¹ ط¹ظ†ط¯ ط§ظ„ظ…ظ†ط¹ط·ظپط§طھطں ظپظٹ ط§ظ„ظپظٹط²ظٹط§ط،طŒ "ط§ظ„ظ…ظ‚ط¯ط§ط±" ظˆط­ط¯ظ‡ ظ„ط§ ظٹظƒظپظٹط› ط¨ظ„ ط§ظ„ط§طھط¬ط§ظ‡ ظٹطµظ†ط¹ ظƒظ„ ط§ظ„ظپط§ط±ظ‚!',
    warmupHookEn: 'When high-speed trains travel between cities at 300 km/h, engineers must factor in not just raw scalar speed, but vector directional displacement and acceleration forces. In physics, direction makes all the difference!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'ط£ظ† ظٹظپط±ظ‘ظ‚ ط§ظ„ط·ط§ظ„ط¨ ط¨ط¯ظ‚ط© ط¹ظ„ظ…ظٹط© ط¨ظٹظ† ط§ظ„ظƒظ…ظٹط§طھ ط§ظ„ظپظٹط²ظٹط§ط¦ظٹط© ط§ظ„ظ‚ظٹط§ط³ظٹط© ظˆط§ظ„ظƒظ…ظٹط§طھ ط§ظ„ظ…طھط¬ظ‡ط©',
      'ط£ظ† ظٹط­ط³ط¨ ط§ظ„ط¥ط²ط§ط­ط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط© ط§ظ„ظ…طھظˆط³ط·ط© ظˆط§ظ„طھط³ط§ط±ط¹ ظ„ط¬ط³ظ… ظٹطھط­ط±ظƒ ظپظٹ ط®ط· ظ…ط³طھظ‚ظٹظ…',
      'ط£ظ† ظٹط·ط¨ظ‚ ظ…ط¹ط§ط¯ظ„ط§طھ ط§ظ„ط­ط±ظƒط© ط§ظ„ط®ط·ظٹط© ط¨طھط³ط§ط±ط¹ ظ…ظ†طھط¸ظ… ظپظٹ ط­ظ„ ط§ظ„ظ…ط´ظƒظ„ط§طھ ط§ظ„ظ‡ظ†ط¯ط³ظٹط© ظˆط§ظ„ظپظٹط²ظٹط§ط¦ظٹط©',
      'ط£ظ† ظٹظپط³ط± ط§ظ„ط±ط³ظˆظ… ط§ظ„ط¨ظٹط§ظ†ظٹط© ظ„ظ„ط¹ظ„ط§ظ‚ط© ط¨ظٹظ† (ط§ظ„ظ…ظˆظ‚ط¹ ظˆط§ظ„ط²ظ…ظ†) ظˆ(ط§ظ„ط³ط±ط¹ط© ظˆط§ظ„ط²ظ…ظ†)'
    ],
    learningOutcomesEn: [
      'Distinguish scalar physical quantities from vector quantities with scientific rigour',
      'Calculate displacement, average velocity vectors, and linear acceleration',
      'Apply constant-acceleration kinematic equations to solve engineering problems',
      'Interpret position-time and velocity-time graphs accurately'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'ط§ظ„ظƒظ…ظٹط© ط§ظ„ظ…طھط¬ظ‡ط© (Vector Quantity)',
        termEn: 'Vector Quantity',
        definitionAr: 'ظƒظ…ظٹط© ظپظٹط²ظٹط§ط¦ظٹط© طھطھط­ط¯ط¯ ط¨ط§ظ„ظ…ظ‚ط¯ط§ط± ظˆظˆط­ط¯ط© ط§ظ„ظ‚ظٹط§ط³ ظˆط§ظ„ط§طھط¬ط§ظ‡ ظ…ط¹ط§ظ‹ (ظ…ط«ظ„: ط§ظ„ط¥ط²ط§ط­ط©طŒ ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©طŒ ظˆط§ظ„طھط³ط§ط±ط¹).',
        definitionEn: 'A physical quantity characterized by both numerical magnitude and spatial direction.'
      },
      {
        termAr: 'ط§ظ„ط¥ط²ط§ط­ط© (Displacement)',
        termEn: 'Displacement',
        definitionAr: 'ظƒظ…ظٹط© ظ…طھط¬ظ‡ط© طھظ…ط«ظ„ ط§ظ„طھط؛ظٹط± ظپظٹ ظ…ظˆظ‚ط¹ ط§ظ„ط¬ط³ظ…طŒ ظˆطھط³ط§ظˆظٹ ط£ظ‚طµط± ظ…ط³ط§ط± ظ…ط³طھظ‚ظٹظ… ظ…ظˆط¬ظ‡ ظ…ظ† ظ†ظ‚ط·ط© ط§ظ„ط¨ط¯ط§ظٹط© ط¥ظ„ظ‰ ظ†ظ‚ط·ط© ط§ظ„ظ†ظ‡ط§ظٹط© (خ”x = x_f - x_i).',
        definitionEn: 'Vector change in position: shortest directed straight line from start to finish.'
      },
      {
        termAr: 'ط§ظ„طھط³ط§ط±ط¹ (Acceleration)',
        termEn: 'Acceleration',
        definitionAr: 'ط§ظ„ظ…ط¹ط¯ظ„ ط§ظ„ط²ظ…ظ†ظٹ ظ„طھط؛ظٹط± ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط© ظ„ظ„ط¬ط³ظ… (a = خ”v / خ”t) ظˆظˆط­ط¯طھظ‡ ظ…/ط«آ².',
        definitionEn: 'The time rate of change of velocity: a = dv/dt in m/sآ².'
      }
    ],

    keyConceptsAr: ['ط§ظ„ظپط±ظ‚ ط¨ظٹظ† ط§ظ„ظƒظ…ظٹط§طھ ط§ظ„ظ‚ظٹط§ط³ظٹط© ظˆط§ظ„ظ…طھط¬ظ‡ط©', 'ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ‚ظٹط§ط³ظٹط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©', 'ط§ظ„طھط³ط§ط±ط¹ ط§ظ„ط«ط§ط¨طھ ظˆظ…ط¹ط§ط¯ظ„ط§طھ ط§ظ„ط­ط±ظƒط©', 'طھظپط³ظٹط± ط§ظ„ط±ط³ظˆظ… ط§ظ„ط¨ظٹط§ظ†ظٹط© ظ„ظ„ط­ط±ظƒط©'],
    keyConceptsEn: ['Scalar vs Vector Quantities', 'Speed vs Velocity Vectors', 'Constant Acceleration Kinematics', 'Graph Interpretation of Motion'],
    summaryAr: 'ظ†ط³طھظƒط´ظپ ظپظٹ ظ‡ط°ظ‡ ط§ظ„ظ…ط­ط§ط¶ط±ط© ط£ط³ط³ ط¹ظ„ظ… ط§ظ„ط­ط±ظƒط© ط§ظ„ظƒظٹظ†ظ…ط§طھظٹظƒط§ط› ظƒظٹظپ ظ†طµظپ ط­ط±ظƒط© ط§ظ„ط£ط¬ط³ط§ظ… ط¹ط¨ط± ط§ظ„ط²ظ…ط§ظ† ظˆط§ظ„ظ…ظƒط§ظ† ط¨ط¯ظ‚ط© ط±ظٹط§ط¶ظٹط© ظˆظپظٹط²ظٹط§ط¦ظٹط© ظپط§ط¦ظ‚ط©.',
    summaryEn: 'Explore the foundations of kinematics: describing motion through space and time with vector precision.',
    sections: [
      {
        titleAr: '1. ط§ظ„ط¥ط²ط§ط­ط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©: ط§ظ„ط§طھط¬ط§ظ‡ ظٹطµظ†ط¹ ط§ظ„ظپط§ط±ظ‚',
        titleEn: '1. Displacement & Velocity: Direction Matters',
        contentAr: 'ط§ظ„ظ…ط³ط§ظپط© ظ‡ظٹ ط·ظˆظ„ ط§ظ„ظ…ط³ط§ط± ط§ظ„ظپط¹ظ„ظٹ ط§ظ„ط°ظٹ ظٹظ‚ط·ط¹ظ‡ ط§ظ„ط¬ط³ظ… ظˆظ‡ظٹ ظƒظ…ظٹط© ظ‚ظٹط§ط³ظٹط©طŒ ط¨ظٹظ†ظ…ط§ ط§ظ„ط¥ط²ط§ط­ط© ظ‡ظٹ ط£ظ‚طµط± ط®ط· ظ…ط³طھظ‚ظٹظ… ظ…ظˆط¬ظ‡ ظ…ظ† ظ†ظ‚ط·ط© ط§ظ„ط¨ط¯ط§ظٹط© ط¥ظ„ظ‰ ط§ظ„ظ†ظ‡ط§ظٹط© ظˆظ‡ظٹ ظƒظ…ظٹط© ظ…طھط¬ظ‡ط©.',
        contentEn: 'Distance is the total path length traveled (scalar), while displacement is the net directed straight line from start to finish (vector).',
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„ طھط·ط¨ظٹظ‚ظٹ: ط­ط³ط§ط¨ ط§ظ„ط¥ط²ط§ط­ط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©',
          titleEn: 'Worked Example: Displacement Calculation',
          equation: 'v = خ”x / خ”t',
          steps: [
            { stepNumber: 1, textAr: 'طھط­ط±ظƒ ط¬ط³ظ… 80 ظ…طھط±ط§ظ‹ ظ†ط­ظˆ ط§ظ„ط´ط±ظ‚طŒ ط«ظ… ط¹ط§ط¯ 30 ظ…طھط±ط§ظ‹ ظ†ط­ظˆ ط§ظ„ط؛ط±ط¨ ط®ظ„ط§ظ„ 10 ط«ظˆط§ظ†ظچ.', textEn: 'An object travels 80m East, then returns 30m West over 10 seconds.', noteAr: 'ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ط¥ط¬ظ…ط§ظ„ظٹط© = 110 ظ…', noteEn: 'Total distance = 110m' },
            { stepNumber: 2, textAr: 'ط§ط­ط³ط¨ ط§ظ„ط¥ط²ط§ط­ط© ط§ظ„طµط§ظپظٹط©: خ”x = 80 - 30 = +50 ظ…طھط±ط§ظ‹ ط´ط±ظ‚ط§ظ‹.', textEn: 'Compute net displacement: خ”x = 80 - 30 = +50m East.', noteAr: 'ط§ظ„ط¥ط²ط§ط­ط© ظ…طھط¬ظ‡ط©', noteEn: 'Displacement is a vector' },
            { stepNumber: 3, textAr: 'ط§ط­ط³ط¨ ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©: v = 50 أ· 10 = 5 ظ…/ط« ط´ط±ظ‚ط§ظ‹.', textEn: 'Compute velocity: v = 50 أ· 10 = 5 m/s East.', noteAr: 'ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ‚ظٹط§ط³ظٹط© ظƒط§ظ†طھ 11 ظ…/ط«!', noteEn: 'Average speed was 11 m/s!' }
          ],
          takeawayAr: 'ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط© طھط¹طھظ…ط¯ ط­طµط±ظٹط§ظ‹ ط¹ظ„ظ‰ ط§ظ„ط¥ط²ط§ط­ط© ط§ظ„طµط§ظپظٹط© ظ„ط§ ط¹ظ„ظ‰ ط·ظˆظ„ ط§ظ„ظ…ط³ط§ط± ط§ظ„ظ…ظ‚ط·ظˆط¹.',
          takeawayEn: 'Average velocity depends purely on net displacement, not cumulative path distance.'
        },
        formativeCheck: {
          id: 'fc-phys1-1',
          questionAr: 'طھط­ط±ظƒطھ ط¯ط±ط§ط¬ط© ظ†ط§ط±ظٹط© ظ…ط³ط§ظپط© 100 ظ…طھط± ظ†ط­ظˆ ط§ظ„ط´ظ…ط§ظ„طŒ ط«ظ… ط§ط³طھط¯ط§ط±طھ ظˆط¹ط§ط¯طھ 40 ظ…طھط±ط§ظ‹ ظ†ط­ظˆ ط§ظ„ط¬ظ†ظˆط¨. ظ…ط§ ظ…ظ‚ط¯ط§ط± ط§ظ„ط¥ط²ط§ط­ط© ط§ظ„طµط§ظپظٹط© ظ„ظ„ط¯ط±ط§ط¬ط©طں',
          questionEn: 'A motorcycle travels 100m North, then reverses 40m South. What is its net displacement?',
          optionsAr: ['140 ظ…طھط±ط§ظ‹ ظ†ط­ظˆ ط§ظ„ط´ظ…ط§ظ„', '60 ظ…طھط±ط§ظ‹ ظ†ط­ظˆ ط§ظ„ط´ظ…ط§ظ„', 'طµظپط± ظ…طھط±', '40 ظ…طھط±ط§ظ‹ ظ†ط­ظˆ ط§ظ„ط¬ظ†ظˆط¨'],
          optionsEn: ['140m North', '60m North', '0m', '40m South'],
          correctIndex: 1,
          explanationAr: 'ط§ظ„ط¥ط²ط§ط­ط© ظ…طھط¬ظ‡ط©: خ”x = +100 - 40 = +60 ظ…طھط±ط§ظ‹ ط¨ط§طھط¬ط§ظ‡ ط§ظ„ط´ظ…ط§ظ„.',
          explanationEn: 'Net displacement is 100 - 40 = 60m North.',
          hintAr: 'ط§ط·ط±ط­ ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ط¹ط§ظƒط³ط© ظ…ظ† ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ط£طµظ„ظٹط©.',
          hintEn: 'Subtract opposite displacement.'
        },
        tipsAr: ['ط§ط­ط±طµ ط¯ط§ط¦ظ…ط§ظ‹ ط¹ظ„ظ‰ طھط­ط¯ظٹط¯ ط¥ط´ط§ط±ط© ط§ظ„ط§طھط¬ط§ظ‡ (ط§ظ„ظ…ظˆط¬ط¨ ظˆط§ظ„ط³ط§ظ„ط¨) ظ‚ط¨ظ„ ظƒطھط§ط¨ط© ط§ظ„ظ…ط¹ط§ط¯ظ„ط©.'],
        tipsEn: ['Always define coordinate convention (positive/negative) before setting up equations.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'ط§ظ„ظƒظ…ظٹط§طھ ط§ظ„ظ‚ظٹط§ط³ظٹط©: طھطھط­ط¯ط¯ ط¨ط§ظ„ظ…ظ‚ط¯ط§ط± ظˆط§ظ„ظˆط­ط¯ط© ظپظ‚ط· (ط§ظ„ظ…ط³ط§ظپط©طŒ ط§ظ„ط²ظ…ظ†طŒ ط§ظ„ظƒطھظ„ط©)',
      'ط§ظ„ظƒظ…ظٹط§طھ ط§ظ„ظ…طھط¬ظ‡ط©: طھطھط­ط¯ط¯ ط¨ط§ظ„ظ…ظ‚ط¯ط§ط± ظˆط§ظ„ظˆط­ط¯ط© ظˆط§ظ„ط§طھط¬ط§ظ‡ (ط§ظ„ط¥ط²ط§ط­ط©طŒ ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©طŒ ط§ظ„ظ‚ظˆط©طŒ ط§ظ„طھط³ط§ط±ط¹)',
      'ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط¥ط²ط§ط­ط©: خ”x = x_ط§ظ„ظ†ظ‡ط§ظٹط© - x_ط§ظ„ط¨ط¯ط§ظٹط©',
      'ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©: v = خ”x / خ”t',
      'ظ…ط¹ط§ط¯ظ„ط© ط§ظ„طھط³ط§ط±ط¹ ط§ظ„ظ…ظ†طھط¸ظ…: a = (v_f - v_i) / خ”t',
      'ظ‚ط§ط¹ط¯ط© ط§ظ„ط§طھط²ط§ظ†: ط¥ط°ط§ ط¹ط§ط¯ ط§ظ„ط¬ط³ظ… ظ„ظ†ظ‚ط·ط© ط§ظ„ط¨ط¯ط§ظٹط©طŒ ظپط¥ظ† ط¥ط²ط§ط­طھظ‡ = طµظپط±ط§ظ‹ ط¯ط§ط¦ظ…ط§ظ‹'
    ],
    conceptMapEn: [
      'Scalar quantities: Magnitude only',
      'Vector quantities: Magnitude + Direction',
      'Displacement equation: خ”x = x_f - x_i',
      'Velocity vector: v = خ”x / خ”t',
      'Constant acceleration: a = خ”v / خ”t'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-phys1-1',
        questionAr: 'ط§ظ†ط·ظ„ظ‚طھ ط³ظٹط§ط±ط© ط³ط¨ط§ظ‚ ظ…ظ† ط§ظ„ط³ظƒظˆظ† (v_i = 0) ط¨طھط³ط§ط±ط¹ ظ…ظ†طھط¸ظ… ظ…ظ‚ط¯ط§ط±ظ‡ 5 ظ…/ط«آ² ظ„ظ…ط¯ط© 6 ط«ظˆط§ظ†ظچ. ط§ط­ط³ط¨ ط³ط±ط¹طھظ‡ط§ ط§ظ„ظ†ظ‡ط§ط¦ظٹط© ظˆط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ظ‚ط·ظˆط¹ط©.',
        questionEn: 'A racecar accelerates from rest at 5 m/sآ² for 6s. Calculate final velocity and displacement.',
        solutionStepsAr: [
          'ط­ط³ط§ط¨ ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ†ظ‡ط§ط¦ظٹط©: v_f = v_i + at = 0 + (5 أ— 6) = 30 ظ…/ط«',
          'ط­ط³ط§ط¨ ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ظ‚ط·ظˆط¹ط©: d = v_i*t + آ½atآ² = 0 + آ½(5)(36) = 90 ظ…طھط±ط§ظ‹',
          'ط§ظ„طھط­ظ‚ظ‚ ط¨ظ…ط¹ط§ط¯ظ„ط© ط¨ط¯ظٹظ„ط©: v_fآ² = 2ad -> (30)آ² = 2(5)(90) -> 900 = 900 (طµط­ظٹط­ 100%)'
        ],
        solutionStepsEn: [
          'Final velocity: v = 0 + (5)(6) = 30 m/s',
          'Displacement: d = 0 + 0.5(5)(36) = 90 m',
          'Verification: vآ² = 2ad confirms 900 = 900'
        ],
        answerAr: 'ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ†ظ‡ط§ط¦ظٹط© = 30 ظ…/ط« â€¢ ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ظ‚ط·ظˆط¹ط© = 90 ظ…طھط±ط§ظ‹',
        answerEn: 'Final velocity = 30 m/s â€¢ Displacement = 90m'
      }
    ],
    assessment: {
      id: 'quiz-phys-1',
      lectureId: 'phys-1',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط£ظˆظ„ظ‰: ط¹ظ„ظ… ط§ظ„ط­ط±ظƒط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط©',
      titleEn: 'Lecture 1 Assessment: Kinematics & Velocity Vectors',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-1',
          textAr: 'ط±ظƒط¶ ط¹ط¯ط§ط، ظپظٹ ظ…ط¶ظ…ط§ط± ط¯ط§ط¦ط±ظٹ ظ…ط­ظٹط·ظ‡ 400 ظ…طھط±طŒ ظˆط¹ط§ط¯ ط¥ظ„ظ‰ ظ†ظپط³ ظ†ظ‚ط·ط© ط§ظ„ط¨ط¯ط§ظٹط©. ظ…ط§ ظ…ظ‚ط¯ط§ط± ط¥ط²ط§ط­طھظ‡ ط§ظ„ظƒظ„ظٹط©طں',
          textEn: 'A runner completes a 400m circular track returning to the starting point. What is the net displacement?',
          optionsAr: ['400 ظ…طھط±', 'طµظپط± ظ…طھط±', '200 ظ…طھط±', '800 ظ…طھط±'],
          optionsEn: ['400 meters', '0 meters', '200 meters', '800 meters'],
          correctIndex: 1,
          conceptTestedAr: 'ظ…ظپظ‡ظˆظ… ط§ظ„ط¥ط²ط§ط­ط© ظˆظ†ظ‚ط·ط© ط§ظ„ط¨ط¯ط§ظٹط© ظˆط§ظ„ظ†ظ‡ط§ظٹط©',
          conceptTestedEn: 'Displacement Definition',
          explanationAr: 'ط¨ظ…ط§ ط£ظ† ط§ظ„ط¹ط¯ط§ط، ط¹ط§ط¯ ظ„ظ†ظپط³ ظ†ظ‚ط·ط© ط§ظ†ط·ظ„ط§ظ‚ظ‡طŒ ظپط¥ظ† ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ظ‚ط·ظˆط¹ط© 400 ظ… ظˆظ„ظƒظ† ط§ظ„ط¥ط²ط§ط­ط© ط§ظ„طµط§ظپظٹط© طھط³ط§ظˆظٹ طµظپط±ط§ظ‹.',
          explanationEn: 'Because the runner returned to the origin, initial and final positions are identical, so net displacement is zero.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-2',
          textAr: 'طھط³ط§ط±ط¹طھ ط³ظٹط§ط±ط© ظ…ظ† ط§ظ„ط³ظƒظˆظ† ط¨طھط³ط§ط±ط¹ ظ…ظ†طھط¸ظ… ظ‚ط¯ط±ظ‡ 4 ظ…/ط«آ² ظ„ظ…ط¯ط© 5 ط«ظˆط§ظ†ظچ. ظ…ط§ ظ‡ظٹ ط³ط±ط¹طھظ‡ط§ ط§ظ„ظ†ظ‡ط§ط¦ظٹط©طں',
          textEn: 'A vehicle accelerates from rest at 4 m/sآ² for 5 seconds. What is its final velocity?',
          optionsAr: ['20 ظ…/ط«', '9 ظ…/ط«', '100 ظ…/ط«', '1 ظ…/ط«'],
          optionsEn: ['20 m/s', '9 m/s', '100 m/s', '1 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'ظ…ط¹ط§ط¯ظ„ط© ط§ظ„ط³ط±ط¹ط© ظˆط§ظ„طھط³ط§ط±ط¹ ط§ظ„ظ…ظ†طھط¸ظ…: v = vâ‚€ + at',
          conceptTestedEn: 'Kinematic Velocity Formula',
          explanationAr: 'ط¨ط§ط³طھط®ط¯ط§ظ… v = vâ‚€ + at: ط§ظ„ط³ط±ط¹ط© ط§ظ„ط§ط¨طھط¯ط§ط¦ظٹط© طµظپط±طŒ ط¥ط°ظ† v = 0 + (4 أ— 5) = 20 ظ…/ط«.',
          explanationEn: 'Using v = vâ‚€ + at: v = 0 + (4 أ— 5) = 20 m/s.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'phys-2',
    order: 2,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ظ‚ظˆط§ظ†ظٹظ† ظ†ظٹظˆطھظ† ظ„ظ„ط­ط±ظƒط© ظˆطھط·ط¨ظٹظ‚ط§طھ ط§ظ„ظ‚ظˆظ‰ ظˆط§ظ„ط§طھط²ط§ظ†',
    titleEn: "Lecture 2: Newton's Laws of Motion & Force Applications",
    subtitleAr: 'ظپظ‡ظ… ط§ظ„ظ‚طµظˆط± ط§ظ„ط°ط§طھظٹطŒ ظˆظ‚ط§ظ†ظˆظ† ط§ظ„ظ‚ظˆط© ظˆط§ظ„طھط³ط§ط±ط¹ (F=ma)طŒ ظˆظ‚ظˆط© ط§ظ„ظپط¹ظ„ ظˆط±ط¯ ط§ظ„ظپط¹ظ„',
    subtitleEn: 'Master inertia, dynamic acceleration (F=ma), and action-reaction pairs.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-1',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط¹ظ„ظ… ط§ظ„ط­ط±ظƒط© ظˆط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھط¬ظ‡ط© ظˆط§ظ„طھط³ط§ط±ط¹ ط§ظ„ظ„ط­ط¸ظٹ',
    prerequisiteTitleEn: 'Lecture 1: Kinematics, Velocity Vectors & Instantaneous Acceleration',
    keyConceptsAr: ['ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط£ظˆظ„ ظ„ظ†ظٹظˆطھظ† (ط§ظ„ظ‚طµظˆط± ط§ظ„ط°ط§طھظٹ)', 'ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط«ط§ظ†ظٹ ظ„ظ†ظٹظˆطھظ†: F = ma', 'ظ…ط®ط·ط· ط§ظ„ط¬ط³ظ… ط§ظ„ط­ط± ظˆطھط­ظ„ظٹظ„ ط§ظ„ظ‚ظˆظ‰', 'ظ‚ظˆظ‰ ط§ظ„ط§ط­طھظƒط§ظƒ ظˆط§ظ„ط¬ط§ط°ط¨ظٹط©'],
    keyConceptsEn: ["Newton's 1st Law (Inertia)", "Newton's 2nd Law (F = ma)", 'Free Body Diagrams & Vectors', 'Friction & Gravitational Forces'],
    summaryAr: 'ظ†ظ†طھظ‚ظ„ ظ…ظ† ظˆطµظپ ط§ظ„ط­ط±ظƒط© ط¥ظ„ظ‰ ط¯ط±ط§ط³ط© ظ…ط³ط¨ط¨ط§طھظ‡ط§ط› ظƒظٹظپ طھظˆظ„ط¯ ط§ظ„ظ‚ظˆظ‰ ط§ظ„طھط³ط§ط±ط¹ ظˆظپظ‚ ظ‚ظˆط§ظ†ظٹظ† ط§ظ„ط³ظٹط± ط¥ط³ط­ط§ظ‚ ظ†ظٹظˆطھظ† ط§ظ„ط«ظ„ط§ط«ط© ط§ظ„ط®ط§ظ„ط¯ط©.',
    summaryEn: 'Transition from describing motion to analyzing its causes through classical Newtonian dynamics.',
    sections: [
      {
        titleAr: '1. ظ‚ط§ظ†ظˆظ† ظ†ظٹظˆطھظ† ط§ظ„ط«ط§ظ†ظٹ: ط§ظ„ط¹ظ„ط§ظ‚ط© ط¨ظٹظ† ط§ظ„ظ‚ظˆط© ظˆط§ظ„ظƒطھظ„ط© ظˆط§ظ„طھط³ط§ط±ط¹',
        titleEn: "1. Newton's 2nd Law: Force, Mass & Acceleration",
        contentAr: 'ظٹظ†طµ ظ‚ط§ظ†ظˆظ† ظ†ظٹظˆطھظ† ط§ظ„ط«ط§ظ†ظٹ ط¹ظ„ظ‰ ط£ظ† طھط³ط§ط±ط¹ ط§ظ„ط¬ط³ظ… ظٹطھظ†ط§ط³ط¨ ط·ط±ط¯ظٹط§ظ‹ ظ…ط¹ ظ…ط­طµظ„ط© ط§ظ„ظ‚ظˆظ‰ ط§ظ„ظ…ط¤ط«ط±ط© ط¹ظ„ظٹظ‡ ظˆط¹ظƒط³ظٹط§ظ‹ ظ…ط¹ ظƒطھظ„طھظ‡: خ£F = ma.',
        contentEn: "Newton's second law states that acceleration is directly proportional to net force and inversely proportional to mass: خ£F = ma.",
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„ طھط·ط¨ظٹظ‚ظٹ: ط­ط³ط§ط¨ ط§ظ„ظ‚ظˆط© ط§ظ„ظ…ط­طµظ„ط© ظˆط§ظ„طھط³ط§ط±ط¹',
          titleEn: 'Worked Example: Net Force Acceleration',
          equation: 'F = m آ· a',
          steps: [
            { stepNumber: 1, textAr: 'طµظ†ط¯ظˆظ‚ ظƒطھظ„طھظ‡ 25 ظƒط¬ظ… طھط¤ط«ط± ط¹ظ„ظٹظ‡ ظ‚ظˆط© ط³ط­ط¨ ط£ظپظ‚ظٹط© ظ…ظ‚ط¯ط§ط±ظ‡ط§ 150 ظ†ظٹظˆطھظ† ظˆظ‚ظˆط© ط§ط­طھظƒط§ظƒ 50 ظ†ظٹظˆطھظ†.', textEn: 'A 25kg box experiences a 150N horizontal pull and 50N friction force.' },
            { stepNumber: 2, textAr: 'ط§ط­ط³ط¨ ظ…ط­طµظ„ط© ط§ظ„ظ‚ظˆظ‰: خ£F = 150 - 50 = 100 ظ†ظٹظˆطھظ† ظپظٹ ط§طھط¬ط§ظ‡ ط§ظ„ط³ط­ط¨.', textEn: 'Net force: خ£F = 150 - 50 = 100N in pull direction.' },
            { stepNumber: 3, textAr: 'ط§ط­ط³ط¨ ط§ظ„طھط³ط§ط±ط¹ ط§ظ„ظ†ط§طھط¬: a = خ£F أ· m = 100 أ· 25 = 4 ظ…/ط«آ².', textEn: 'Resulting acceleration: a = 100 أ· 25 = 4 m/sآ².' }
          ],
          takeawayAr: 'ط§ظ„طھط³ط§ط±ط¹ ظٹظ†طھط¬ ط¯ط§ط¦ظ…ط§ظ‹ ط¹ظ† ظ…ط­طµظ„ط© ط§ظ„ظ‚ظˆظ‰ ط؛ظٹط± ط§ظ„ظ…طھط²ظ†ط©طŒ ظˆظ„ظٹط³ ط¹ظ† ظˆط¬ظˆط¯ ظ‚ظˆط© ظˆط§ط­ط¯ط© ظ…ظ†ط¹ط²ظ„ط©.',
          takeawayEn: 'Acceleration is driven strictly by unbalanced net force, not isolated component forces.'
        },
        tipsAr: ['ط§ط±ط³ظ… ط¯ط§ط¦ظ…ط§ظ‹ ظ…ط®ط·ط· ط§ظ„ط¬ط³ظ… ط§ظ„ط­ط± (Free Body Diagram) ظ„ط¬ظ…ط¹ ط§ظ„ظ‚ظˆظ‰ ظپظٹ ظƒظ„ ظ…ط­ظˆط±.'],
        tipsEn: ['Always sketch a Free Body Diagram to resolve orthogonal forces.']
      }
    ],
    assessment: {
      id: 'quiz-phys-2',
      lectureId: 'phys-2',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ†ظٹط©: ظ‚ظˆط§ظ†ظٹظ† ظ†ظٹظˆطھظ† ظˆطھط·ط¨ظٹظ‚ط§طھ ط§ظ„ظ‚ظˆظ‰',
      titleEn: "Lecture 2 Assessment: Newton's Laws & Force Mechanics",
      passingScore: 80,
      questions: [
        {
          id: 'qp2-1',
          textAr: 'ط¥ط°ط§ طھط¶ط§ط¹ظپطھ ط§ظ„ظ‚ظˆط© ط§ظ„ظ…ط­طµظ„ط© ط§ظ„ظ…ط¤ط«ط±ط© ط¹ظ„ظ‰ ط¬ط³ظ… ظ…ط¹ ط¨ظ‚ط§ط، ظƒطھظ„طھظ‡ ط«ط§ط¨طھط©طŒ ظپظ…ط§ط°ط§ ظٹط­ط¯ط« ظ„طھط³ط§ط±ط¹ظ‡طں',
          textEn: 'If net force on an object doubles while mass remains constant, what happens to acceleration?',
          optionsAr: ['ظٹطھط¶ط§ط¹ظپ ط§ظ„طھط³ط§ط±ط¹', 'ظٹظ‚ظ„ ط§ظ„طھط³ط§ط±ط¹ ط¥ظ„ظ‰ ط§ظ„ظ†طµظپ', 'ظٹط¨ظ‚ظ‰ ط«ط§ط¨طھط§ظ‹', 'ظٹطµظ„ ط¥ظ„ظ‰ ط§ظ„طµظپط±'],
          optionsEn: ['Acceleration doubles', 'Acceleration halves', 'Remains unchanged', 'Drops to zero'],
          correctIndex: 0,
          conceptTestedAr: 'ط§ظ„طھظ†ط§ط³ط¨ ط§ظ„ط·ط±ط¯ظٹ ط¨ظٹظ† ط§ظ„ظ‚ظˆط© ظˆط§ظ„طھط³ط§ط±ط¹',
          conceptTestedEn: 'Direct Proportionality of Force & Acceleration',
          explanationAr: 'ط·ط¨ظ‚ط§ظ‹ ظ„ظ‚ط§ظ†ظˆظ† ظ†ظٹظˆطھظ† ط§ظ„ط«ط§ظ†ظٹ F = maطŒ ط§ظ„ظ‚ظˆط© ظˆط§ظ„طھط³ط§ط±ط¹ ظ…طھظ†ط§ط³ط¨ط§ظ† ط·ط±ط¯ظٹط§ظ‹طŒ ظ„ط°ط§ ظ…ط¶ط§ط¹ظپط© ط§ظ„ظ‚ظˆط© طھط¶ط§ط¹ظپ ط§ظ„طھط³ط§ط±ط¹.',
          explanationEn: 'By F = ma, force and acceleration are directly proportional.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'phys-3',
    order: 3,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ط´ط؛ظ„ ظˆط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظٹظƒط§ظ†ظٹظƒظٹط© ظˆظ‚ط§ظ†ظˆظ† ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط©',
    titleEn: 'Lecture 3: Work, Mechanical Energy & Energy Conservation',
    subtitleAr: 'ط¯ط±ط§ط³ط© ط·ط§ظ‚ط© ط§ظ„ط­ط±ظƒط©طŒ ظˆط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ ط§ظ„طھط«ط§ظ‚ظ„ظٹط©طŒ ظˆظ…ط¨ط¯ط£ ط¨ظ‚ط§ط، ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظٹظƒط§ظ†ظٹظƒظٹط©',
    subtitleEn: 'Study kinetic energy, gravitational potential energy, and conservation principles.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-2',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ظ‚ظˆط§ظ†ظٹظ† ظ†ظٹظˆطھظ† ظ„ظ„ط­ط±ظƒط© ظˆطھط·ط¨ظٹظ‚ط§طھ ط§ظ„ظ‚ظˆظ‰ ظˆط§ظ„ط§طھط²ط§ظ†',
    prerequisiteTitleEn: "Lecture 2: Newton's Laws of Motion & Force Applications",
    keyConceptsAr: ['طھط¹ط±ظٹظپ ط§ظ„ط´ط؛ظ„ ط§ظ„ظپظٹط²ظٹط§ط¦ظٹ: W = F آ· d آ· cos(خ¸)', 'ط·ط§ظ‚ط© ط§ظ„ط­ط±ظƒط©: KE = آ½mvآ²', 'ط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ ط§ظ„طھط«ط§ظ‚ظ„ظٹط©: PE = mgh', 'ظ…ط¨ط¯ط£ ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظٹظƒط§ظ†ظٹظƒظٹط©'],
    keyConceptsEn: ['Mechanical Work Definition', 'Kinetic Energy Formula', 'Gravitational Potential Energy', 'Mechanical Energy Conservation'],
    summaryAr: 'ط§ظ„ط·ط§ظ‚ط© ظ„ط§ طھظپظ†ظ‰ ظˆظ„ط§ طھط³طھط­ط¯ط« ظ…ظ† ط§ظ„ط¹ط¯ظ…طŒ ط¨ظ„ طھطھط­ظˆظ„ ظ…ظ† طµظˆط±ط© ط¥ظ„ظ‰ ط£ط®ط±ظ‰ط› ظ†ط¨ط±ظ‡ظ† ط±ظٹط§ط¶ظٹط§ظ‹ ظˆظپظٹط²ظٹط§ط¦ظٹط§ظ‹ ط¹ظ„ظ‰ ط¨ظ‚ط§ط، ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظٹظƒط§ظ†ظٹظƒظٹط© ظپظٹ ط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„ظ…ط­ط§ظپط¸ط©.',
    summaryEn: 'Energy is conserved across closed systems, shifting between kinetic and potential reservoirs.',
    sections: [
      {
        titleAr: '1. ط§ظ„ط´ط؛ظ„ ظˆط§ظ„ط·ط§ظ‚ط© ط§ظ„ط­ط±ظƒظٹط©',
        titleEn: '1. Work-Energy Theorem',
        contentAr: 'ط§ظ„ط´ط؛ظ„ ظ‡ظˆ ط­ط§طµظ„ ط¶ط±ط¨ ط§ظ„ظ‚ظˆط© ط§ظ„ظ…ط¤ط«ط±ط© ظپظٹ ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ظ‚ط·ظˆط¹ط© ظپظٹ ط§طھط¬ط§ظ‡ ط§ظ„ظ‚ظˆط©. ط§ظ„ط´ط؛ظ„ ط§ظ„ظƒظ„ظٹ ط§ظ„ظ…ط¨ط°ظˆظ„ ط¹ظ„ظ‰ ط¬ط³ظ… ظٹط³ط§ظˆظٹ ط§ظ„طھط؛ظٹط± ظپظٹ ط·ط§ظ‚طھظ‡ ط§ظ„ط­ط±ظƒظٹط©: W_net = خ”KE.',
        contentEn: 'Net work performed on an object equals its change in kinetic energy: W_net = خ”KE.',
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„ طھط·ط¨ظٹظ‚ظٹ: ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط© ظ„ط¬ط³ظ… ط³ط§ظ‚ط·',
          titleEn: 'Worked Example: Freefall Energy Exchange',
          equation: 'KEâ‚پ + PEâ‚پ = KEâ‚‚ + PEâ‚‚',
          steps: [
            { stepNumber: 1, textAr: 'ظƒط±ط© ظƒطھظ„طھظ‡ط§ 2 ظƒط¬ظ… طھط³ظ‚ط· ظ…ظ† ط§ط±طھظپط§ط¹ 20 ظ…طھط±ط§ظ‹ ظ…ظ† ط§ظ„ط³ظƒظˆظ† (g = 9.8 ظ…/ط«آ²).', textEn: 'A 2kg ball drops from rest at 20m height (g = 9.8 m/sآ²).' },
            { stepNumber: 2, textAr: 'ط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ ط§ظ„ط§ط¨طھط¯ط§ط¦ظٹط©: PE = mgh = 2 أ— 9.8 أ— 20 = 392 ط¬ظˆظ„.', textEn: 'Initial potential energy: PE = mgh = 2 أ— 9.8 أ— 20 = 392 Joules.' },
            { stepNumber: 3, textAr: 'ظ„ط­ط¸ط© ط§ظ„ط§طµط·ط¯ط§ظ… ط¨ط§ظ„ط£ط±ط¶طŒ طھطھط­ظˆظ„ ظƒظ„ ط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط­ط±ظƒظٹط©: KE = 392 ط¬ظˆظ„.', textEn: 'At impact, all potential energy transforms to kinetic: KE = 392 Joules.' }
          ],
          takeawayAr: 'ظپظٹ ط؛ظٹط§ط¨ ظ…ظ‚ط§ظˆظ…ط© ط§ظ„ظ‡ظˆط§ط،طŒ طھط¸ظ„ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظٹظƒط§ظ†ظٹظƒظٹط© ط§ظ„ظƒظ„ظٹط© ط«ط§ط¨طھط© ط¹ظ†ط¯ ط£ظٹ ظ†ظ‚ط·ط© ظپظٹ ظ…ط³ط§ط± ط§ظ„ط³ظ‚ظˆط·.',
          takeawayEn: 'Neglecting air resistance, total mechanical energy remains conserved throughout descent.'
        },
        tipsAr: ['ط§ظ†طھط¨ظ‡ ظ„ط²ط§ظˆظٹط© طھط£ط«ظٹط± ط§ظ„ظ‚ظˆط©ط› ط¥ط°ط§ ظƒط§ظ†طھ ط§ظ„ظ‚ظˆط© ط¹ظ…ظˆط¯ظٹط© ط¹ظ„ظ‰ ط§ظ„ط­ط±ظƒط© (cos 90آ° = 0) ظپط¥ظ† ط§ظ„ط´ط؛ظ„ ظٹط³ط§ظˆظٹ طµظپط±ط§ظ‹.'],
        tipsEn: ['If force acts perpendicular to displacement (cos 90آ° = 0), zero work is done.']
      }
    ],
    assessment: {
      id: 'quiz-phys-3',
      lectureId: 'phys-3',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ„ط«ط©: ط§ظ„ط´ط؛ظ„ ظˆط­ظپط¸ ط§ظ„ط·ط§ظ‚ط©',
      titleEn: 'Lecture 3 Assessment: Work & Conservation of Energy',
      passingScore: 80,
      questions: [
        {
          id: 'qp3-1',
          textAr: 'ظٹط­ظ…ظ„ ط´ط®طµ ط­ظ‚ظٹط¨ط© ظˆط²ظ†ظ‡ط§ 50 ظ†ظٹظˆطھظ† ظˆظٹط³ظٹط± ط¨ظ‡ط§ ط£ظپظ‚ظٹط§ظ‹ ظ…ط³ط§ظپط© 10 ط£ظ…طھط§ط± ط¨ط³ط±ط¹ط© ط«ط§ط¨طھط©. ظ…ط§ ط§ظ„ط´ط؛ظ„ ط§ظ„ظ…ط¨ط°ظˆظ„ ط¨ظˆط§ط³ط·ط© ظ‚ظˆط© ط­ظ…ظ„ظ‡طں',
          textEn: 'A person carries a 50N bag walking horizontally for 10m at constant speed. What is the work done by the lifting force?',
          optionsAr: ['500 ط¬ظˆظ„', 'طµظپط± ط¬ظˆظ„', '50 ط¬ظˆظ„', '250 ط¬ظˆظ„'],
          optionsEn: ['500 Joules', '0 Joules', '50 Joules', '250 Joules'],
          correctIndex: 1,
          conceptTestedAr: 'ط§ظ„ط²ط§ظˆظٹط© ط§ظ„ط¹ظ…ظˆط¯ظٹط© ط¨ظٹظ† ط§ظ„ظ‚ظˆط© ظˆط§ظ„ط¥ط²ط§ط­ط© ظˆط§ظ„ط´ط؛ظ„ ط§ظ„طµظپط±ظٹ',
          conceptTestedEn: 'Perpendicular Forces & Zero Work',
          explanationAr: 'ظ‚ظˆط© ط§ظ„ط­ظ…ظ„ ط±ط£ط³ظٹط© ظ„ط£ط¹ظ„ظ‰ ط¨ظٹظ†ظ…ط§ ط§ظ„ط¥ط²ط§ط­ط© ط£ظپظ‚ظٹط©طŒ ظˆط§ظ„ط²ط§ظˆظٹط© ط¨ظٹظ†ظ‡ظ…ط§ 90 ط¯ط±ط¬ط©طŒ ظˆ cos(90آ°) = 0طŒ ط¥ط°ظ† ط§ظ„ط´ط؛ظ„ ط§ظ„ظ…ط¨ط°ظˆظ„ ظٹط³ط§ظˆظٹ طµظپط±ط§ظ‹.',
          explanationEn: 'The lifting force is vertical while displacement is horizontal (خ¸ = 90آ°); cos 90آ° = 0, so work is 0.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'phys-4',
    order: 4,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 4: ط§ظ„ط¯ظٹظ†ط§ظ…ظٹظƒط§ ط§ظ„ط­ط±ط§ط±ظٹط© ظˆط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„ظپظٹط²ظٹط§ط¦ظٹط© ط§ظ„ظ…ط¹ظ‚ط¯ط©',
    titleEn: 'Lecture 4: Thermodynamics & Complex Physical Systems',
    subtitleAr: 'ظ‚ظˆط§ظ†ظٹظ† ط§ظ„ط¯ظٹظ†ط§ظ…ظٹظƒط§ ط§ظ„ط­ط±ط§ط±ظٹط©طŒ ظˆظƒظپط§ط،ط© ط§ظ„ظ…ط­ط±ظƒط§طھ ط§ظ„ط­ط±ط§ط±ظٹط©طŒ ظˆظ…ظپظ‡ظˆظ… ط§ظ„ط¥ظ†طھط±ظˆط¨ظٹط§ ظˆط§ظ„ط§طھط²ط§ظ† ط§ظ„ط­ط±ط§ط±ظٹ',
    subtitleEn: 'Thermodynamic laws, heat engine efficiency, entropy, and thermal equilibrium.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-3',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ط´ط؛ظ„ ظˆط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظٹظƒط§ظ†ظٹظƒظٹط© ظˆظ‚ط§ظ†ظˆظ† ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط©',
    prerequisiteTitleEn: 'Lecture 3: Work, Mechanical Energy & Energy Conservation',
    keyConceptsAr: ['ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط£ظˆظ„ ظ„ظ„ط¯ظٹظ†ط§ظ…ظٹظƒط§ ط§ظ„ط­ط±ط§ط±ظٹط©: خ”U = Q - W', 'ط·ط±ظ‚ ط§ظ†طھظ‚ط§ظ„ ط§ظ„ط­ط±ط§ط±ط©: ط§ظ„طھظˆطµظٹظ„ ظˆط§ظ„ط­ظ…ظ„ ظˆط§ظ„ط¥ط´ط¹ط§ط¹', 'ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط«ط§ظ†ظٹ ظ„ظ„ط­ط±ط§ط±ط© ظˆط§ظ„ط¥ظ†طھط±ظˆط¨ظٹط§', 'ظƒظپط§ط،ط© ظ…ط­ط±ظƒ ظƒط§ط±ظ†ظˆ'],
    keyConceptsEn: ['First Law of Thermodynamics', 'Conduction, Convection & Radiation', 'Second Law & Entropy', 'Carnot Efficiency'],
    summaryAr: 'ط§ظ„ظ…ط­ط·ط© ط§ظ„ط®طھط§ظ…ظٹط© ظ„ظ…ط³ط§ط± ط§ظ„ظپظٹط²ظٹط§ط،ط› ظ†ط±ط¨ط· ط¨ظٹظ† ط§ظ„ظ…ظپط§ظ‡ظٹظ… ط§ظ„ظ…ط¬ظ‡ط±ظٹط© ظ„ظ„ط¬ط³ظٹظ…ط§طھ ظˆط§ظ„ط¸ظˆط§ظ‡ط± ط§ظ„ط­ط±ط§ط±ظٹط© ط§ظ„ط¹ظٹط§ظ†ظٹط© ظˆظƒظپط§ط،ط© ط¥ظ†طھط§ط¬ ط§ظ„ط·ط§ظ‚ط© ظپظٹ ط§ظ„ظƒظˆظ†.',
    summaryEn: 'Synthesizing macroscopic thermal laws with microscopic molecular energetics.',
    sections: [
      {
        titleAr: '1. ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط£ظˆظ„ ظ„ظ„ط¯ظٹظ†ط§ظ…ظٹظƒط§ ط§ظ„ط­ط±ط§ط±ظٹط©',
        titleEn: '1. First Law of Thermodynamics',
        contentAr: 'ط§ظ„طھط؛ظٹط± ظپظٹ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط¯ط§ط®ظ„ظٹط© ظ„ظ†ط¸ط§ظ… ظپظٹط²ظٹط§ط¦ظٹ ظ…ط؛ظ„ظ‚ ظٹط³ط§ظˆظٹ ظƒظ…ظٹط© ط§ظ„ط­ط±ط§ط±ط© ط§ظ„ظ…ط¶ط§ظپط© ط¥ظ„ظٹظ‡ ظ…ط·ط±ظˆط­ط§ظ‹ ظ…ظ†ظ‡ط§ ط§ظ„ط´ط؛ظ„ ط§ظ„ط°ظٹ ظٹط¨ط°ظ„ظ‡ ط§ظ„ظ†ط¸ط§ظ…: خ”U = Q - W.',
        contentEn: 'Internal energy changes equal added heat minus work done by the system: خ”U = Q - W.',
        interactiveExample: {
          titleAr: 'ظ…ط«ط§ظ„ طھط·ط¨ظٹظ‚ظٹ: ط§ظ„طھظ…ط¯ط¯ ط§ظ„ط­ط±ط§ط±ظٹ ظ„ظ„ط؛ط§ط²',
          titleEn: 'Worked Example: Thermal Gas Expansion',
          equation: 'خ”U = Q - W',
          steps: [
            { stepNumber: 1, textAr: 'ط§ظ…طھطµ ط؛ط§ط² ظ…ط­ط¨ظˆط³ ظپظٹ ظ…ظƒط¨ط³ ط­ط±ط§ط±ط© ظ‚ط¯ط±ظ‡ط§ 500 ط¬ظˆظ„طŒ ظˆطھظ…ط¯ط¯ ط¨ط§ط°ظ„ط§ظ‹ ط´ط؛ظ„ط§ظ‹ ظ‚ط¯ط±ظ‡ 200 ط¬ظˆظ„.', textEn: 'Gas in a piston absorbs 500J of heat and expands, doing 200J of work.' },
            { stepNumber: 2, textAr: 'ط§ط­ط³ط¨ ط§ظ„طھط؛ظٹط± ظپظٹ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط¯ط§ط®ظ„ظٹط©: خ”U = 500 - 200 = +300 ط¬ظˆظ„.', textEn: 'Internal energy change: خ”U = 500 - 200 = +300 Joules.' },
            { stepNumber: 3, textAr: 'ط²ظٹط§ط¯ط© ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط¯ط§ط®ظ„ظٹط© طھط¤ط¯ظٹ ظ„ط§ط±طھظپط§ط¹ ط¯ط±ط¬ط© ط­ط±ط§ط±ط© ط§ظ„ط؛ط§ط² ظ…ط¨ط§ط´ط±ط©.', textEn: 'Positive خ”U corresponds directly to increased gas temperature.' }
          ],
          takeawayAr: 'ط§ظ„ط­ط±ط§ط±ط© ظˆط§ظ„ط´ط؛ظ„ طµظˆط±طھط§ظ† ظ…طھظƒط§ظپط¦طھط§ظ† ظ„طھط¨ط§ط¯ظ„ ط§ظ„ط·ط§ظ‚ط© ط¨ظٹظ† ط§ظ„ظ†ط¸ط§ظ… ظˆط§ظ„ظˆط³ط· ط§ظ„ظ…ط­ظٹط·.',
          takeawayEn: 'Heat and work represent dual equivalent pathways for energy transfer.'
        },
        tipsAr: ['ط§ظ†طھط¨ظ‡ ظ„ط¥ط´ط§ط±ط© ط§ظ„ط´ط؛ظ„: ط§ظ„ط´ط؛ظ„ ط§ظ„ظ…ط¨ط°ظˆظ„ ط¨ظˆط§ط³ط·ط© ط§ظ„ظ†ط¸ط§ظ… ظ…ظˆط¬ط¨طŒ ظˆط§ظ„ط´ط؛ظ„ ط§ظ„ظ…ط¨ط°ظˆظ„ ط¹ظ„ظٹظ‡ ط³ط§ظ„ط¨.'],
        tipsEn: ['Work done by the system is positive; work done on the system is negative.']
      }
    ],
    assessment: {
      id: 'quiz-phys-4',
      lectureId: 'phys-4',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ظ†ظ‡ط§ط¦ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط±ط§ط¨ط¹ط©: ط§ظ„ط¯ظٹظ†ط§ظ…ظٹظƒط§ ط§ظ„ط­ط±ط§ط±ظٹط©',
      titleEn: 'Lecture 4 Assessment: Thermodynamics Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qp4-1',
          textAr: 'ط¥ط°ط§ ظپظڈظ‚ط¯طھ ط­ط±ط§ط±ط© ظ…ظ‚ط¯ط§ط±ظ‡ط§ 300 ط¬ظˆظ„ ظ…ظ† ظ†ط¸ط§ظ…طŒ ظˆط¨ظڈط°ظ„ ط¹ظ„ظٹظ‡ ط´ط؛ظ„ ظ…ظ‚ط¯ط§ط±ظ‡ 100 ط¬ظˆظ„طŒ ظپظ…ط§ ط§ظ„طھط؛ظٹط± ظپظٹ ط·ط§ظ‚طھظ‡ ط§ظ„ط¯ط§ط®ظ„ظٹط©طں',
          textEn: 'If 300J of heat is lost from a system and 100J of work is done on it, what is خ”U?',
          optionsAr: ['-200 ط¬ظˆظ„', '+200 ط¬ظˆظ„', '-400 ط¬ظˆظ„', '+400 ط¬ظˆظ„'],
          optionsEn: ['-200 Joules', '+200 Joules', '-400 Joules', '+400 Joules'],
          correctIndex: 0,
          conceptTestedAr: 'طھط·ط¨ظٹظ‚ ط¥ط´ط§ط±ط§طھ ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط£ظˆظ„ ظ„ظ„ط­ط±ط§ط±ط©: خ”U = Q - W',
          conceptTestedEn: 'Thermodynamic Sign Conventions',
          explanationAr: 'Q = -300 ط¬ظˆظ„ (ط­ط±ط§ط±ط© ظ…ظپظ‚ظˆط¯ط©)طŒ W = -100 ط¬ظˆظ„ (ط´ط؛ظ„ ظ…ط¨ط°ظˆظ„ ط¹ظ„ظٹظ‡). ط¥ط°ظ† خ”U = -300 - (-100) = -200 ط¬ظˆظ„.',
          explanationEn: 'Q = -300J and W = -100J, yielding خ”U = -300 - (-100) = -200J.',
          difficulty: 'hard'
        }
      ]
    }
  }
];

// ============================================================================
// 3. ARABIC LITERATURE & RHETORIC CURRICULUM (ط§ظ„ظ„ط؛ط© ط§ظ„ط¹ط±ط¨ظٹط© ظˆط§ظ„ط¨ظ„ط§ط؛ط©)
// ============================================================================
export const ARABIC_LIT_LECTURES: Lecture[] = [
  {
    id: 'lit-1',
    order: 1,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط¹ظ„ظ… ط§ظ„ط¨ظٹط§ظ†: ط§ظ„طھط´ط¨ظٹظ‡ ظˆط£ط±ظƒط§ظ†ظ‡ ظˆط£ط«ط±ظ‡ ط§ظ„ط¨ظ„ط§ط؛ظٹ ظپظٹ ط§ظ„ظ…ط¹ظ†ظ‰',
    titleEn: 'Lecture 1: Rhetoric & Imagery: Simile and Its Semantic Aesthetics',
    subtitleAr: 'ط¯ط±ط§ط³ط© ط£ط±ظƒط§ظ† ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط£ط±ط¨ط¹ط© ظˆط§ظ„طھظ…ظٹظٹط² ط¨ظٹظ† ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ظ…ظپط±ط¯ ظˆط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„طھظ…ط«ظٹظ„ظٹ ظˆط§ظ„ط¶ظ…ظ†ظٹ',
    subtitleEn: 'Explore the 4 components of similes, contrasting explicit, composite, and implied analogies.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['ط£ط±ظƒط§ظ† ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط£ط±ط¨ط¹ط©: ط§ظ„ظ…ط´ط¨ظ‡ ظˆط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ ظˆط§ظ„ط£ط¯ط§ط© ظˆظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡', 'ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ظ…ط¤ظƒط¯ ظˆط§ظ„ظ…ط¬ظ…ظ„ ظˆط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛', 'ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„طھظ…ط«ظٹظ„ظٹ ظˆط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¶ظ…ظ†ظٹ', 'ط§ظ„ط£ط«ط± ط§ظ„ط¨ظ„ط§ط؛ظٹ ظˆط§ظ„ط¬ظ…ط§ظ„ظٹ ظ„ظ„طھط´ط¨ظٹظ‡ ظپظٹ ط¥ظٹطµط§ظ„ ط§ظ„ظ…ط¹ظ†ظ‰'],
    keyConceptsEn: ['Four Components of Simile', 'Confirmed, Concise & Eloquent Similes', 'Composite vs Implied Metaphors', 'Aesthetic and Semantic Impact'],
    summaryAr: 'ط¹ظ„ظ… ط§ظ„ط¨ظٹط§ظ† ظ‡ظˆ ط¨ظˆط§ط¨ط© طھط°ظˆظ‚ ط³ط­ط± ط§ظ„ط¨ظٹط§ظ† ط§ظ„ط¹ط±ط¨ظٹط› ظ†ظƒطھط´ظپ ظپظٹ ظ‡ط°ط§ ط§ظ„ط¯ط±ط³ ظƒظٹظپ ظٹط±طھظ‚ظٹ ط§ظ„ظƒط§طھط¨ ط¨ط§ظ„ظ…ط¹ظ†ظ‰ ط¹ط¨ط± ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛ ط§ظ„ط°ظٹ ظٹط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط¯ظ‚ط© ظˆط§ظ„ط¬ظ…ط§ظ„.',
    summaryEn: 'Discover how classical Arabic rhetoric elevates prose and poetry through layered figurative similes.',
    sections: [
      {
        titleAr: '1. ط£ط±ظƒط§ظ† ط§ظ„طھط´ط¨ظٹظ‡ ظˆط£ظ†ظˆط§ط¹ظ‡ ط§ظ„ط¨ظ„ط§ط؛ظٹط©',
        titleEn: '1. Core Components and Classifications of Similes',
        contentAr: 'ظٹظ‚ظˆظ… ط§ظ„طھط´ط¨ظٹظ‡ ط¹ظ„ظ‰ ط¹ظ‚ط¯ ظ…ظ…ط§ط«ظ„ط© ط¨ظٹظ† ط´ظٹط¦ظٹظ† ط§ط´طھط±ظƒط§ ظپظٹ طµظپط© ط£ظˆ ط£ظƒط«ط±. ط£ط±ظƒط§ظ†ظ‡ ظ‡ظٹ: ط§ظ„ظ…ط´ط¨ظ‡طŒ ظˆط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ (ط·ط±ظپط§ ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط£ط³ط§ط³ظٹط§ظ†)طŒ ظˆط£ط¯ط§ط© ط§ظ„طھط´ط¨ظٹظ‡طŒ ظˆظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡.',
        contentEn: 'A simile establishes an analogy between two entities sharing salient qualities, anchored by tenor, vehicle, connective particle, and ground.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚ ط¨ظ„ط§ط؛ظٹ: طھط­ظ„ظٹظ„ ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛',
          titleEn: 'Worked Analysis: Eloquent Simile Decomposition',
          equation: 'ط§ظ„ظ…ط´ط¨ظ‡ + ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ (ط­ط°ظپ ط§ظ„ط£ط¯ط§ط© ظˆظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡)',
          steps: [
            { stepNumber: 1, textAr: 'طھط£ظ…ظ„ ظ‚ظˆظ„ ط§ظ„ط´ط§ط¹ط±: "ط§ظ„ط¹ظ„ظ…ظڈ ظ†ظˆط±ظŒ ظˆط§ظ„ط¬ظ‡ظ„ظڈ ط¸ظ„ط§ظ…ظŒ".', textEn: 'Examine the phrase: "Knowledge is light, and ignorance is darkness."' },
            { stepNumber: 2, textAr: 'ط§ظ„ظ…ط´ط¨ظ‡: ط§ظ„ط¹ظ„ظ…. ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡: ط§ظ„ظ†ظˆط±. ط­ظڈط°ظپطھ ط£ط¯ط§ط© ط§ظ„طھط´ط¨ظٹظ‡ ظˆط­ظڈط°ظپ ظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡.', textEn: 'Tenor: Knowledge. Vehicle: Light. Connective particle and ground omitted.' },
            { stepNumber: 3, textAr: 'ظ‡ط°ط§ ظ‡ظˆ "ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛" ظˆظ‡ظˆ ط£ط¹ظ„ظ‰ ظ…ط±ط§طھط¨ ط§ظ„طھط´ط¨ظٹظ‡ ظ„ط£ظ†ظ‡ ظٹظˆط­ط¯ ط¨ظٹظ† ط§ظ„ظ…ط´ط¨ظ‡ ظˆط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡.', textEn: 'This constitutes the Eloquent Simile, the pinnacle of analogy creating direct conceptual equivalence.' }
          ],
          takeawayAr: 'ظƒظ„ظ…ط§ ظ‚ظژظ„ظ‘طھ ط§ظ„ط£ط±ظƒط§ظ† ط§ظ„ظ…ط°ظƒظˆط±ط© طµط±ط§ط­ط©ظ‹ (ط¨ط­ط°ظپ ط§ظ„ط£ط¯ط§ط© ظˆظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡)طŒ ظ‚ظˆظٹطھ ط¯ظ„ط§ظ„ط© ط§ظ„طھط´ط¨ظٹظ‡ ظˆط§ط±طھظ‚طھ ط¨ظ„ط§ط؛طھظ‡.',
          takeawayEn: 'Omitting explicit connective particles intensifies rhetorical immediacy and poetic power.'
        },
        tipsAr: ['ط·ط±ظپط§ ط§ظ„طھط´ط¨ظٹظ‡ (ط§ظ„ظ…ط´ط¨ظ‡ ظˆط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡) ظ„ط§ ظٹظ…ظƒظ† ط­ط°ظپظ‡ظ…ط§ ظ…ط¹ط§ظ‹ ظپظٹ ط§ظ„طھط´ط¨ظٹظ‡طŒ ظپط¥ظ† ط­ظڈط°ظپ ط£ط­ط¯ظ‡ظ…ط§ طھط­ظˆظ„ ط¥ظ„ظ‰ ط§ط³طھط¹ط§ط±ط©.'],
        tipsEn: ['If either the tenor or vehicle is completely omitted, the figure of speech transitions into a metaphor.']
      }
    ],
    assessment: {
      id: 'quiz-lit-1',
      lectureId: 'lit-1',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط£ظˆظ„ظ‰: ط¹ظ„ظ… ط§ظ„ط¨ظٹط§ظ† ظˆط§ظ„طھط´ط¨ظٹظ‡',
      titleEn: 'Lecture 1 Assessment: Classical Rhetoric & Similes',
      passingScore: 80,
      questions: [
        {
          id: 'ql1-1',
          textAr: 'ظ…ط§ ظ‡ظˆ ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛ ظپظٹ ط§ظ„ط¨ظ„ط§ط؛ط© ط§ظ„ط¹ط±ط¨ظٹط©طں',
          textEn: 'What defines an Eloquent Simile in Arabic rhetoric?',
          optionsAr: [
            'ظ…ط§ ط­ظڈط°ظپطھ ظ…ظ†ظ‡ ط£ط¯ط§ط© ط§ظ„طھط´ط¨ظٹظ‡ ظˆظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡ ظˆط¨ظ‚ظٹ ط§ظ„ط·ط±ظپط§ظ†',
            'ظ…ط§ ط°ظڈظƒط±طھ ظپظٹظ‡ ط¬ظ…ظٹط¹ ط£ط±ظƒط§ظ† ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط£ط±ط¨ط¹ط©',
            'ظ…ط§ ط­ظڈط°ظپ ظ…ظ†ظ‡ ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡',
            'ظ…ط§ ظƒط§ظ† ظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡ ظپظٹظ‡ ظ…ظ†ظپظٹط§ظ‹'
          ],
          optionsEn: [
            'Simile where particle and ground are omitted, retaining tenor and vehicle',
            'Simile where all four components are explicitly stated',
            'Figure where the vehicle is deleted',
            'Figure with negated comparison'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طھط¹ط±ظٹظپ ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛ ظˆط£ط±ظƒط§ظ†ظ‡ ط§ظ„ظ…ط­ط°ظˆظپط©',
          conceptTestedEn: 'Eloquent Simile Definition',
          explanationAr: 'ط§ظ„طھط´ط¨ظٹظ‡ ط§ظ„ط¨ظ„ظٹط؛ ظ‡ظˆ ظ…ط§ ط­ظڈط°ظپطھ ظ…ظ†ظ‡ ط£ط¯ط§ط© ط§ظ„طھط´ط¨ظٹظ‡ ظˆظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡طŒ ظ…ط«ظ„: "ط§ظ„ظ…ط¹ظ„ظ…ظڈ ط¨ط­ط±ظŒ".',
          explanationEn: 'The eloquent simile deletes the particle and ground, leaving tenor and vehicle directly identified.',
          difficulty: 'easy'
        },
        {
          id: 'ql1-2',
          textAr: 'ظپظٹ ظ‚ظˆظ„ظ†ط§: "ط§ظ„ط¬ظ†ط¯ظٹ ظƒط§ظ„ط£ط³ط¯ ظپظٹ ط§ظ„ط´ط¬ط§ط¹ط©"طŒ ظ…ط§ ظ‡ظˆ "ظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡"طں',
          textEn: 'In "The soldier is like a lion in bravery", what is the ground (ظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡)?',
          optionsAr: ['ط§ظ„ط´ط¬ط§ط¹ط©', 'ط§ظ„ط¬ظ†ط¯ظٹ', 'ط§ظ„ط£ط³ط¯', 'ط§ظ„ظƒط§ظپ'],
          optionsEn: ['Bravery', 'The soldier', 'The lion', 'Like (Kaf)'],
          correctIndex: 0,
          conceptTestedAr: 'طھط­ط¯ظٹط¯ ط£ط±ظƒط§ظ† ط§ظ„طھط´ط¨ظٹظ‡ ظپظٹ ط§ظ„ط¬ظ…ظ„ط©',
          conceptTestedEn: 'Identifying Simile Components',
          explanationAr: 'ظˆط¬ظ‡ ط§ظ„ط´ط¨ظ‡ ظ‡ظˆ ط§ظ„طµظپط© ط§ظ„ظ…ط´طھط±ظƒط© ط§ظ„طھظٹ طھط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ظ…ط´ط¨ظ‡ ظˆط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡طŒ ظˆظ‡ظ†ط§ ظ‡ظٹ "ط§ظ„ط´ط¬ط§ط¹ط©".',
          explanationEn: 'The ground is the shared property between tenor and vehicle, which is bravery.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'lit-2',
    order: 2,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط§ظ„طھطµط±ظٹط­ظٹط© ظˆط³ط± ط§ظ„ط¨ظ„ط§ط؛ط© ط§ظ„ط¬ظ…ط§ظ„ظٹط©',
    titleEn: 'Lecture 2: Implicit & Explicit Metaphors and Aesthetic Eloquence',
    subtitleAr: 'ط§ظ„طھظ…ظٹظٹط² ط§ظ„ط¯ظ‚ظٹظ‚ ط¨ظٹظ† ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط§ظ„طھطµط±ظٹط­ظٹط©طŒ ظˆظپظ‡ظ… ط¹ظ„ط§ظ‚ط© ط§ظ„ظ…ط´ط§ط¨ظ‡ط© ظ…ط¹ ظ‚ط±ظٹظ†ط© ظ…ط§ظ†ط¹ط©',
    subtitleEn: 'Distinguish implicit (Makniyyah) and explicit (Tasrihiyyah) metaphors with context clues.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-1',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط¹ظ„ظ… ط§ظ„ط¨ظٹط§ظ†: ط§ظ„طھط´ط¨ظٹظ‡ ظˆط£ط±ظƒط§ظ†ظ‡ ظˆط£ط«ط±ظ‡ ط§ظ„ط¨ظ„ط§ط؛ظٹ ظپظٹ ط§ظ„ظ…ط¹ظ†ظ‰',
    prerequisiteTitleEn: 'Lecture 1: Rhetoric & Imagery: Simile and Its Semantic Aesthetics',
    keyConceptsAr: ['طھط¹ط±ظٹظپ ط§ظ„ط§ط³طھط¹ط§ط±ط© ط¨ط§ط¹طھط¨ط§ط±ظ‡ط§ طھط´ط¨ظٹظ‡ط§ظ‹ ط­ظڈط°ظپ ط£ط­ط¯ ط·ط±ظپظٹظ‡', 'ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط­ط°ظپ ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ ظ…ط¹ ط¥ط¨ظ‚ط§ط، ظ„ظˆط§ط²ظ…ظ‡', 'ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„طھطµط±ظٹط­ظٹط© ظˆط§ظ„طھطµط±ظٹط­ ط¨ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡', 'ط³ط± ط¬ظ…ط§ظ„ ط§ظ„ط§ط³طھط¹ط§ط±ط©: ط§ظ„طھط´ط®ظٹطµ ظˆط§ظ„طھط¬ط³ظٹظ… ظˆط§ظ„طھظˆط¶ظٹط­'],
    keyConceptsEn: ['Metaphor as Truncated Simile', 'Implicit Metaphor (Makniyyah)', 'Explicit Metaphor (Tasrihiyyah)', 'Personification and Concretization'],
    summaryAr: 'ط§ظ„ط§ط³طھط¹ط§ط±ط© طھط´ط¨ظٹظ‡ ط­ط°ظپ ط£ط­ط¯ ط·ط±ظپظٹظ‡ ظ…ط¹ ظ‚ط±ظٹظ†ط© طھظ…ظ†ط¹ ظ…ظ† ط¥ط±ط§ط¯ط© ط§ظ„ظ…ط¹ظ†ظ‰ ط§ظ„ط­ظ‚ظٹظ‚ظٹ. ط¥ط°ط§ طµظڈط±ط­ ط¨ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ ظپظ‡ظٹ طھطµط±ظٹط­ظٹط©طŒ ظˆط¥ط°ط§ ط­ظڈط°ظپ ظˆظƒظڈظ†ظٹ ط¹ظ†ظ‡ ط¨ط´ظٹط، ظ…ظ† ظ„ظˆط§ط²ظ…ظ‡ ظپظ‡ظٹ ظ…ظƒظ†ظٹط©.',
    summaryEn: 'Metaphor elevates meaning through implicit comparison. Identifying whether tenor or vehicle is retained distinguishes Makniyyah from Tasrihiyyah.',
    sections: [
      {
        titleAr: '1. ط§ظ„طھظ…ظٹظٹط² ط¨ظٹظ† ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط§ظ„طھطµط±ظٹط­ظٹط©',
        titleEn: '1. Implicit vs Explicit Metaphor Analysis',
        contentAr: 'ظپظٹ ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط©: ظ†ط°ظƒط± ط§ظ„ظ…ط´ط¨ظ‡ ظˆظ†ط­ط°ظپ ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ ظˆظ†ط´ظٹط± ط¥ظ„ظٹظ‡ ط¨طµظپط© ظ…ظ† طµظپط§طھظ‡ (ظ…ط«ظ„: ط¨ظƒطھ ط§ظ„ط³ظ…ط§ط،). ط£ظ…ط§ ظپظٹ ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„طھطµط±ظٹط­ظٹط©: ظپظ†ط­ط°ظپ ط§ظ„ظ…ط´ط¨ظ‡ ظˆظ†طµط±ظ‘ط­ ط¨ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ ظ…ط¨ط§ط´ط±ط© (ظ…ط«ظ„: ظˆط§ط¹طھطµظ…ظˆط§ ط¨ط­ط¨ظ„ ط§ظ„ظ„ظ‡).',
        contentEn: 'In Makniyyah, the vehicle is omitted leaving an attributed quality. In Tasrihiyyah, the tenor is omitted and vehicle directly uttered.',
        interactiveExample: {
          titleAr: 'طھط­ظ„ظٹظ„ ط§ط³طھط¹ط§ط±ط© ظ…ظƒظ†ظٹط© ظپظٹ ط§ظ„ط´ط¹ط± ط§ظ„ط¹ط±ط¨ظٹ',
          titleEn: 'Worked Example: Makniyyah Metaphor Analysis',
          equation: 'ط§ظ„ظ…ط´ط¨ظ‡ ظ…ط°ظƒظˆط± + ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ ظ…ط­ط°ظˆظپ + ظ‚ط±ظٹظ†ط© ط¯ط§ظ„ط©',
          steps: [
            { stepNumber: 1, textAr: 'طھط£ظ…ظ„ ظ‚ظˆظ„ ط£ط¨ظٹ ط°ط¤ظٹط¨: "ظˆط¥ط°ط§ ط§ظ„ظ…ظژظ†ظگظٹظژظ‘ط©ظڈ ط£ظژظ†ط´ظژط¨ظژطھ ط£ظژط¸ظپط§ط±ظژظ‡ط§ ... ط£ظژظ„ظپظژظٹطھظژ ظƒظڈظ„ظژظ‘ طھظژظ…ظٹظ…ظژط©ظچ ظ„ط§ طھظژظ†ظپظژط¹ظڈ".', textEn: 'Reflect on: "When fate sinks its claws, every amulet is proven futile."' },
            { stepNumber: 2, textAr: 'ط§ظ„ظ…ط´ط¨ظ‡ ظ‡ظˆ ط§ظ„ظ…ظ†ظٹط© (ط§ظ„ظ…ظˆطھ). ظ‡ظ„ ط§ظ„ظ…ظˆطھ ظ„ظ‡ ط£ط¸ظپط§ط±طں ظƒظ„ط§طŒ ط§ظ„ط£ط¸ظپط§ط± ظ…ظ† ظ„ظˆط§ط²ظ… ط§ظ„ظˆط­ط´ ط§ظ„ظƒط§ط³ط±.', textEn: 'Tenor: Death. Does death possess claws? Claws belong to predatory beasts.' },
            { stepNumber: 3, textAr: 'ط­ظڈط°ظپ ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ (ط§ظ„ظˆط­ط´ ط§ظ„ظ…ظپطھط±ط³) ظˆط±ظڈظ…ط² ظ„ظ‡ ط¨ط´ظٹط، ظ…ظ† ظ„ظˆط§ط²ظ…ظ‡ (ط§ظ„ط£ط¸ظپط§ط±)طŒ ظپظ‡ط°ظ‡ ط§ط³طھط¹ط§ط±ط© ظ…ظƒظ†ظٹط© ط±ط§ط¦ط¹ط©.', textEn: 'Vehicle (beast) omitted; its signature attribute (claws) retained: Makniyyah metaphor.' }
          ],
          takeawayAr: 'ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© طھظ…ظ†ط­ ط§ظ„ظ…ط¹ط§ظ†ظٹ ط§ظ„ظ…ط¬ط±ط¯ط© ط­ظٹط§ط© ظˆط­ط±ظƒط© ظˆطھط¬ط³ظٹظ…ط§ظ‹ ظ†ط§ط¨ط¶ط§ظ‹.',
          takeawayEn: 'Makniyyah metaphors personify abstract concepts into vivid tangible dynamics.'
        },
        tipsAr: ['ط§ط¨ط­ط« ط¯ط§ط¦ظ…ط§ظ‹ ط¹ظ† "ط§ظ„ظ‚ط±ظٹظ†ط©"ط› ط§ظ„ظƒظ„ظ…ط© ط§ظ„طھظٹ ظٹط³طھط­ظٹظ„ ط£ظ† طھظƒظˆظ† ط¨ط§ظ„ظ…ط¹ظ†ظ‰ ط§ظ„ط­ط±ظپظٹ ظ‡ظٹ ظ…ظپطھط§ط­ ط§ظ„ط§ط³طھط¹ط§ط±ط©.'],
        tipsEn: ['Always pinpoint the non-literal contextual clue (Qarinah) to unlock the metaphor.']
      }
    ],
    assessment: {
      id: 'quiz-lit-2',
      lectureId: 'lit-2',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ†ظٹط©: ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط§ظ„طھطµط±ظٹط­ظٹط©',
      titleEn: 'Lecture 2 Assessment: Metaphor Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'ql2-1',
          textAr: 'ظپظٹ ط¬ظ…ظ„ط© "طھط­ط¯ط« ط§ظ„طھط§ط±ظٹط® ط¹ظ† ط£ظ…ط¬ط§ط¯ ط£ظ…طھظ†ط§"طŒ ظ…ط§ ظ†ظˆط¹ ط§ظ„ط§ط³طھط¹ط§ط±ط©طں',
          textEn: 'In "History spoke of our nations glory", what metaphor type is present?',
          optionsAr: ['ط§ط³طھط¹ط§ط±ط© ظ…ظƒظ†ظٹط©', 'ط§ط³طھط¹ط§ط±ط© طھطµط±ظٹط­ظٹط©', 'طھط´ط¨ظٹظ‡ طھظ…ط«ظٹظ„ظٹ', 'ظƒظ†ط§ظٹط© ط¹ظ† ظ…ظˆطµظˆظپ'],
          optionsEn: ['Implicit Metaphor (Makniyyah)', 'Explicit Metaphor (Tasrihiyyah)', 'Composite Simile', 'Metonymy'],
          correctIndex: 0,
          conceptTestedAr: 'ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط§ظ„طھط´ط®ظٹطµ',
          conceptTestedEn: 'Implicit Metaphor & Personification',
          explanationAr: 'ط´ظڈط¨ظگظ‘ظ‡ ط§ظ„طھط§ط±ظٹط® ط¨ط¥ظ†ط³ط§ظ† ظٹطھط­ط¯ط«طŒ ظˆط­ظڈط°ظپ ط§ظ„ظ…ط´ط¨ظ‡ ط¨ظ‡ (ط§ظ„ط¥ظ†ط³ط§ظ†) ظˆط±ظڈظ…ط² ط¥ظ„ظٹظ‡ ط¨ظ„ط§ط²ظ…ط© ظ…ظ† ظ„ظˆط§ط²ظ…ظ‡ ظˆظ‡ظٹ ط§ظ„ط­ط¯ظٹط« (ط§ط³طھط¹ط§ط±ط© ظ…ظƒظ†ظٹط©).',
          explanationEn: 'History is personified as a speaker; the human vehicle is omitted, leaving speech as the attribute.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lit-3',
    order: 3,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط¹ظ„ظ… ط§ظ„ط¨ط¯ظٹط¹: ط§ظ„ظ…ط­ط³ظ†ط§طھ ط§ظ„ظ„ظپط¸ظٹط© ظˆط§ظ„ظ…ط¹ظ†ظˆظٹط© ظˆط£ط«ط±ظ‡ط§ ط§ظ„طµظˆطھظٹ',
    titleEn: 'Lecture 3: Rhetorical Figures: Verbal & Semantic Embellishments',
    subtitleAr: 'ط¯ط±ط§ط³ط© ط§ظ„ط¬ظ†ط§ط³طŒ ظˆط§ظ„ط³ط¬ط¹طŒ ظˆط§ظ„ط·ط¨ط§ظ‚طŒ ظˆط§ظ„ظ…ظ‚ط§ط¨ظ„ط©طŒ ظˆط¯ظˆط±ظ‡ط§ ظپظٹ طھط¹ط²ظٹط² ط§ظ„ط¥ظٹظ‚ط§ط¹ ظˆط§ظ„ط¯ظ„ط§ظ„ط©',
    subtitleEn: 'Master paronomasia (Jinas), rhyme prose (Saj), and antithesis (TibaQ / Muqabalah).',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-2',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط§ظ„ط§ط³طھط¹ط§ط±ط© ط§ظ„ظ…ظƒظ†ظٹط© ظˆط§ظ„طھطµط±ظٹط­ظٹط© ظˆط³ط± ط§ظ„ط¨ظ„ط§ط؛ط© ط§ظ„ط¬ظ…ط§ظ„ظٹط©',
    prerequisiteTitleEn: 'Lecture 2: Implicit & Explicit Metaphors and Aesthetic Eloquence',
    keyConceptsAr: ['ط§ظ„ط¬ظ†ط§ط³ ط§ظ„طھط§ظ… ظˆط§ظ„ط¬ظ†ط§ط³ ط§ظ„ظ†ط§ظ‚طµ', 'ط§ظ„ط³ط¬ط¹ ظˆطھظˆط§ظپظ‚ ط§ظ„ظپظˆط§طµظ„ ط§ظ„ظ†ط«ط±ظٹط©', 'ط§ظ„ط·ط¨ط§ظ‚ ط§ظ„ط¥ظٹط¬ط§ط¨ظٹ ظˆط§ظ„ط³ظ„ط¨ظٹ', 'ط§ظ„ظ…ظ‚ط§ط¨ظ„ط© ظˆط§ظ„طھط¶ط§ط¯ ط§ظ„ظ…طھط¹ط¯ط¯ ظپظٹ ط§ظ„ظ…ط¹ط§ظ†ظٹ'],
    keyConceptsEn: ['Complete vs Incomplete Paronomasia (Jinas)', 'Rhythmical Prose Cadence (Saj)', 'Positive and Negative Antithesis', 'Semantic Multi-Parallelism'],
    summaryAr: 'ط¹ظ„ظ… ط§ظ„ط¨ط¯ظٹط¹ ظٹط¹ظ†ظ‰ ط¨ظˆط¬ظˆظ‡ طھط­ط³ظٹظ† ط§ظ„ظƒظ„ط§ظ… ط¨ط¹ط¯ ط±ط¹ط§ظٹط© ظ…ط·ط§ط¨ظ‚ط© ط§ظ„ظ…ط¹ظ†ظ‰ ظ„ظ…ظ‚طھط¶ظ‰ ط§ظ„ط­ط§ظ„ط› ظٹظ†ظ‚ط³ظ… ط¥ظ„ظ‰ ظ…ط­ط³ظ†ط§طھ ظ„ظپط¸ظٹط© طھط¶ظپظٹ ط¬ط±ط³ط§ظ‹ ظ…ظˆط³ظٹظ‚ظٹط§ظ‹ ط¹ط°ط¨ط§ظ‹ ظˆظ…ط­ط³ظ†ط§طھ ظ…ط¹ظ†ظˆظٹط© طھط¹ظ…ظ‚ ط§ظ„ط¯ظ„ط§ظ„ط©.',
    summaryEn: 'Ilm al-Badi explores verbal and semantic ornamentation, harmonizing phonetic resonance with conceptual depth.',
    sections: [
      {
        titleAr: '1. ط§ظ„ط¬ظ†ط§ط³: ط§ظ„طھظ…ط§ط«ظ„ ط§ظ„طµظˆطھظٹ ظ…ط¹ ط§ط®طھظ„ط§ظپ ط§ظ„ظ…ط¹ظ†ظ‰',
        titleEn: '1. Jinas: Phonetic Identity with Divergent Meanings',
        contentAr: 'ط§ظ„ط¬ظ†ط§ط³ ظ‡ظˆ طھط´ط§ط¨ظ‡ ظƒظ„ظ…طھظٹظ† ظپظٹ ط§ظ„ظ„ظپط¸ ظ…ط¹ ط§ط®طھظ„ط§ظپظ‡ظ…ط§ ط§ظ„طھط§ظ… ظپظٹ ط§ظ„ظ…ط¹ظ†ظ‰. ط¥ظ† ط§طھظپظ‚طھ ط§ظ„ظƒظ„ظ…طھط§ظ† ظپظٹ ظ†ظˆط¹ ط§ظ„ط­ط±ظˆظپ ظˆط¹ط¯ط¯ظ‡ط§ ظˆطھط±طھظٹط¨ظ‡ط§ ظˆط­ط±ظƒط§طھظ‡ط§ ظپظ‡ظˆ طھط§ظ…طŒ ظˆط¥ظ† ط§ط®طھظ„ظپطھط§ ظپظٹ ط£ط­ط¯ظ‡ط§ ظپظ‡ظˆ ظ†ط§ظ‚طµ.',
        contentEn: 'Jinas occurs when two words resonate phonetically but diverge entirely in meaning, classified into complete and partial.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ط§ظ„ط¬ظ†ط§ط³ ط§ظ„طھط§ظ… ظپظٹ ط§ظ„ظ‚ط±ط¢ظ† ط§ظ„ظƒط±ظٹظ…',
          titleEn: 'Worked Example: Quranic Complete Jinas',
          equation: 'ظ„ظپط¸ ظ…طھط·ط§ط¨ظ‚ + ظ…ط¹ظ†ظٹط§ظ† ظ…طھط؛ط§ظٹط±ط§ظ†',
          steps: [
            { stepNumber: 1, textAr: 'طھط£ظ…ظ„ ظ‚ظˆظ„ظ‡ طھط¹ط§ظ„ظ‰: "ظˆظژظٹظژظˆظ’ظ…ظژ طھظژظ‚ظڈظˆظ…ظڈ ط§ظ„ط³ظژظ‘ط§ط¹ظژط©ظڈ ظٹظڈظ‚ظ’ط³ظگظ…ظڈ ط§ظ„ظ’ظ…ظڈط¬ظ’ط±ظگظ…ظڈظˆظ†ظژ ظ…ظژط§ ظ„ظژط¨ظگط«ظڈظˆط§ ط؛ظژظٹظ’ط±ظژ ط³ظژط§ط¹ظژط©ظچ".', textEn: 'Reflect on: "And the Day the Hour appears, criminals swear they remained no more than an hour."' },
            { stepNumber: 2, textAr: 'ظƒظ„ظ…ط© "ط§ظ„ط³ط§ط¹ط©" ط§ظ„ط£ظˆظ„ظ‰ طھط¹ظ†ظٹ ظٹظˆظ… ط§ظ„ظ‚ظٹط§ظ…ط©.', textEn: 'The first "Hour" denotes the Day of Resurrection.' },
            { stepNumber: 3, textAr: 'ظƒظ„ظ…ط© "ط³ط§ط¹ط©" ط§ظ„ط«ط§ظ†ظٹط© طھط¹ظ†ظٹ ظ…ط¯ط© ط²ظ…ظ†ظٹط© ظˆط¬ظٹط²ط© ظ…ظ† ط§ظ„ظˆظ‚طھ.', textEn: 'The second "hour" denotes a brief interval of terrestrial time.' },
            { stepNumber: 4, textAr: 'ظ‡ط°ط§ ظ‡ظˆ ط§ظ„ط¬ظ†ط§ط³ ط§ظ„طھط§ظ…ط› ط§طھظپط§ظ‚ ظƒط§ظ…ظ„ ظپظٹ ط­ط±ظˆظپ ط§ظ„ظƒظ„ظ…ط© ظ…ط¹ طھط¨ط§ظٹظ† ط¹ط¸ظٹظ… ظپظٹ ط§ظ„ظ…ط¹ظ†ظ‰.', textEn: 'Complete Jinas: flawless lexical identity paired with dramatic semantic contrast.' }
          ],
          takeawayAr: 'ط§ظ„ط¬ظ†ط§ط³ ظٹط«ظٹط± ط§ظ†طھط¨ط§ظ‡ ط§ظ„ط³ط§ظ…ط¹ ظˆظٹط­ط¯ط« ظ†ط؛ظ…ط© ظ…ظˆط³ظٹظ‚ظٹط© طھط·ط±ط¨ ظ„ظ‡ط§ ط§ظ„ط¢ط°ط§ظ†.',
          takeawayEn: 'Paronomasia heightens auditor engagement through musical phonetic correspondence.'
        },
        tipsAr: ['ط§ظ„ط¬ظ†ط§ط³ ط§ظ„ظ…طھظƒظ„ظپ ظٹط¶ط¹ظپ ط§ظ„ط£ط³ظ„ظˆط¨ط› ط³ط± ط¨ظ„ط§ط؛ط© ط§ظ„ط¨ط¯ظٹط¹ ط£ظ† ظٹط£طھظٹ ط¹ظپظˆ ط§ظ„ط®ط§ط·ط± ظ„ط®ط¯ظ…ط© ط§ظ„ظ…ط¹ظ†ظ‰.'],
        tipsEn: ['Excessive unmotivated ornamentation weakens prose; authentic rhetoric arises organically.']
      }
    ],
    assessment: {
      id: 'quiz-lit-3',
      lectureId: 'lit-3',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ„ط«ط©: ط¹ظ„ظ… ط§ظ„ط¨ط¯ظٹط¹ ظˆط§ظ„ظ…ط­ط³ظ†ط§طھ',
      titleEn: 'Lecture 3 Assessment: Rhetorical Embellishments',
      passingScore: 80,
      questions: [
        {
          id: 'ql3-1',
          textAr: 'ظ…ط§ ط§ظ„ظپط±ظ‚ ط¨ظٹظ† ط§ظ„ط·ط¨ط§ظ‚ ظˆط§ظ„ظ…ظ‚ط§ط¨ظ„ط© ظپظٹ ط§ظ„ط¨ظ„ط§ط؛ط© ط§ظ„ط¹ط±ط¨ظٹط©طں',
          textEn: 'What is the distinction between TibaQ and Muqabalah?',
          optionsAr: [
            'ط§ظ„ط·ط¨ط§ظ‚ ظٹظƒظˆظ† ط¨ظٹظ† ظƒظ„ظ…طھظٹظ† ظ…طھط¶ط§ط¯طھظٹظ†طŒ ط£ظ…ط§ ط§ظ„ظ…ظ‚ط§ط¨ظ„ط© ظپطھظƒظˆظ† ط¨ظٹظ† طھط±ظƒظٹط¨ظٹظ† ظٹط­طھظˆظٹط§ظ† ط¹ظ„ظ‰ طھط¶ط§ط¯ظٹظ† ط£ظˆ ط£ظƒط«ط± ظ…ط±طھط¨ظٹظ†',
            'ط§ظ„ط·ط¨ط§ظ‚ ظ…ط­ط³ظ† ظ„ظپط¸ظٹ ظˆط§ظ„ظ…ظ‚ط§ط¨ظ„ط© ظ…ط­ط³ظ† ظ…ط¹ظ†ظˆظٹ',
            'ط§ظ„ط·ط¨ط§ظ‚ ظٹط®طھطµ ط¨ط§ظ„ط´ط¹ط± ظپظ‚ط· ظˆط§ظ„ظ…ظ‚ط§ط¨ظ„ط© ط¨ط§ظ„ظ†ط«ط±',
            'ظ„ط§ ظٹظˆط¬ط¯ ظپط±ظ‚ ط¨ظٹظ†ظ‡ظ…ط§ ظƒظ„ط§ظ‡ظ…ط§ طھط¶ط§ط¯ ظˆط§ط­ط¯'
          ],
          optionsEn: [
            'TibaQ is between 2 contrasting words; Muqabalah involves 2 or more sequential contrasts',
            'TibaQ is verbal; Muqabalah is semantic',
            'TibaQ is poetry-only; Muqabalah is prose-only',
            'There is no distinction'
          ],
          correctIndex: 0,
          conceptTestedAr: 'ط§ظ„ظپط±ظ‚ ط¨ظٹظ† ط§ظ„ط·ط¨ط§ظ‚ ظˆط§ظ„ظ…ظ‚ط§ط¨ظ„ط©',
          conceptTestedEn: 'Antithesis vs Parallel Contrast',
          explanationAr: 'ط§ظ„ط·ط¨ط§ظ‚ طھط¶ط§ط¯ ط¨ظٹظ† ظ„ظپط¸ظٹظ† ظ…ظ†ظپط±ط¯ظٹظ† (ظ…ط«ظ„: ط§ظ„ظ„ظٹظ„ ظˆط§ظ„ظ†ظ‡ط§ط±)طŒ ط¨ظٹظ†ظ…ط§ ط§ظ„ظ…ظ‚ط§ط¨ظ„ط© ط£ظ† ظٹط¤طھظ‰ ط¨ظ…ط¹ظ†ظٹظٹظ† ط£ظˆ ط£ظƒط«ط± ط«ظ… ظٹط¤طھظ‰ ط¨ظ…ط§ ظٹظ‚ط§ط¨ظ„ ط°ظ„ظƒ ط¹ظ„ظ‰ ط§ظ„طھط±طھظٹط¨.',
          explanationEn: 'TibaQ pairs single antonyms; Muqabalah orchestrates structured multi-word oppositions.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lit-4',
    order: 4,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 4: ط§ظ„ظ†ظ‚ط¯ ط§ظ„ط£ط¯ط¨ظٹ ظˆط§ظ„طھط­ظ„ظٹظ„ ط§ظ„ظ…ظˆط¶ظˆط¹ظٹ ظˆط§ظ„ط¬ظ…ط§ظ„ظٹ ظ„ظ„ظ†طµظˆطµ',
    titleEn: 'Lecture 4: Literary Criticism & Aesthetic Textual Deconstruction',
    subtitleAr: 'ط§ط³طھط±ط§طھظٹط¬ظٹط§طھ طھظپظƒظٹظƒ ط§ظ„ط¨ظ†ظٹط© ط§ظ„ظپظ†ظٹط©طŒ ظˆطھط°ظˆظ‚ ط§ظ„طµظˆط± ط§ظ„ط´ط¹ط±ظٹط©طŒ ظˆظ†ظ‚ط¯ ط§ظ„ط¹ط§ط·ظپط© ظˆط§ظ„ظپظƒط±ط©',
    subtitleEn: 'Analyze poetic structures, thematic unities, aesthetic resonance, and critical frameworks.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-3',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط¹ظ„ظ… ط§ظ„ط¨ط¯ظٹط¹: ط§ظ„ظ…ط­ط³ظ†ط§طھ ط§ظ„ظ„ظپط¸ظٹط© ظˆط§ظ„ظ…ط¹ظ†ظˆظٹط© ظˆط£ط«ط±ظ‡ط§ ط§ظ„طµظˆطھظٹ',
    prerequisiteTitleEn: 'Lecture 3: Rhetorical Figures: Verbal & Semantic Embellishments',
    keyConceptsAr: ['ط¹ظ†ط§طµط± ط§ظ„ط¹ظ…ظ„ ط§ظ„ط£ط¯ط¨ظٹ: ط§ظ„ط¹ط§ط·ظپط© ظˆط§ظ„ظپظƒط±ط© ظˆط§ظ„طµظˆط±ط© ظˆط§ظ„ط£ط³ظ„ظˆط¨', 'ط§ظ„ظˆط­ط¯ط© ط§ظ„ط¹ط¶ظˆظٹط© ظˆط§ظ„ظ…ظˆط¶ظˆط¹ظٹط© ظپظٹ ط§ظ„ظ‚طµظٹط¯ط©', 'ظ…ط¹ط§ظٹظٹط± ط§ظ„ظ†ظ‚ط¯ ط§ظ„ط¨ظ„ط§ط؛ظٹ ظˆط§ظ„ط¬ظ…ط§ظ„ظٹ', 'ط§ظ„طھط­ظ„ظٹظ„ ط§ظ„طھط·ط¨ظٹظ‚ظٹ ظ„ظ†طµ ط£ط¯ط¨ظٹ ظƒظ„ط§ط³ظٹظƒظٹ ظˆط­ط¯ظٹط«'],
    keyConceptsEn: ['Literary Work Dimensions: Emotion, Idea, Imagery & Style', 'Organic & Thematic Unity', 'Aesthetic Critical Criteria', 'Applied Textual Criticism'],
    summaryAr: 'ط§ظ„ظ…ط­ط·ط© ط§ظ„ط®طھط§ظ…ظٹط© ظ„ظ…ط³ط§ط± ط§ظ„ظ„ط؛ط© ط§ظ„ط¹ط±ط¨ظٹط©ط› ظ†ط¯ظ…ط¬ ظ…ط§ طھط¹ظ„ظ…ظ†ط§ظ‡ ظپظٹ ط§ظ„ط¨ظٹط§ظ† ظˆط§ظ„ط¨ط¯ظٹط¹ ظˆط§ظ„ظ…ط¹ط§ظ†ظٹ ظ„ظ†ظ…ط§ط±ط³ ط§ظ„ظ†ظ‚ط¯ ط§ظ„ط£ط¯ط¨ظٹ ط§ظ„طھط­ظ„ظٹظ„ظٹ ط§ظ„ط±ط§ظ‚ظٹ ظ„ظ„ظ†طµظˆطµ ط§ظ„ط´ط¹ط±ظٹط© ظˆط§ظ„ظ†ط«ط±ظٹط©.',
    summaryEn: 'Synthesizing rhetoric, imagery, and figurative analysis to evaluate authentic literary masterpieces.',
    sections: [
      {
        titleAr: '1. ظ…ط¹ط§ظٹظٹط± ظ†ظ‚ط¯ ط§ظ„طµظˆط±ط© ط§ظ„ط´ط¹ط±ظٹط©',
        titleEn: '1. Poetic Imagery Critical Criteria',
        contentAr: 'ظٹظ‚ط§ط³ ظ†ط¬ط§ط­ ط§ظ„طµظˆط±ط© ط§ظ„ط£ط¯ط¨ظٹط© ط¨ظ…ط¯ظ‰ طµط¯ظ‚ظ‡ط§ ط§ظ„طھط¹ط¨ظٹط±ظٹ ظˆظ‚ط¯ط±طھظ‡ط§ ط¹ظ„ظ‰ ظ†ظ‚ظ„ ظ…ط´ط§ط¹ط± ط§ظ„ظ…ط¨ط¯ط¹ ط¥ظ„ظ‰ ط§ظ„ظ‚ط§ط±ط¦ ط¯ظˆظ† ط§ظپطھط¹ط§ظ„ ط£ظˆ ط؛ط±ط§ط¨ط© ظ…ظ†ظپط±ط©.',
        contentEn: 'Poetic imagery is critiqued by expressive authenticity, emotional fidelity, and organic coherence within the work.',
        interactiveExample: {
          titleAr: 'ظ†ظ‚ط¯ طھط­ظ„ظٹظ„ظٹ: طھط¬ط§ظ†ط³ ط§ظ„ط¹ط§ط·ظپط© ظ…ط¹ ط§ظ„طµظˆط±ط© ط§ظ„ط¨ظٹط§ظ†ظٹط©',
          titleEn: 'Worked Criticism: Emotional Alignment with Imagery',
          equation: 'طµط¯ظ‚ ط§ظ„ط¹ط§ط·ظپط© + ط¨ط±ط§ط¹ط© ط§ظ„طھط´ظƒظٹظ„ ط§ظ„ط®ظٹط§ظ„ظٹ = ط®ظ„ظˆط¯ ط§ظ„ظ†طµ',
          steps: [
            { stepNumber: 1, textAr: 'ط§ظ‚ط±ط£ ط§ظ„ظ†طµ ظˆظ‚ط±ط± ظ…ط§ ط¥ط°ط§ ظƒط§ظ†طھ ط§ظ„ط£ظ„ظپط§ط¸ طھظˆط­ظٹ ط¨ط§ظ„ط­ط²ظ† ط£ظˆ ط§ظ„ظپط±ط­ ط£ظˆ ط§ظ„ط­ظ…ط§ط³ط©.', textEn: 'Discern whether diction evokes melancholy, joy, or valor.' },
            { stepNumber: 2, textAr: 'ط§ظپط­طµ ط§ظ„طµظˆط± ط§ظ„ط¨ظٹط§ظ†ظٹط©: ظ‡ظ„ طھط¯ط¹ظ… ظ‡ط°ظ‡ ط§ظ„ط¹ط§ط·ظپط© ط£ظ… طھظ†ظپط± ظ…ظ†ظ‡ط§طں', textEn: 'Assess if imagery reinforces the prevailing emotional climate.' },
            { stepNumber: 3, textAr: 'ط§ط³طھظ†طھط¬ ط§ظ„ظ‚ظٹظ…ط© ط§ظ„ط¬ظ…ط§ظ„ظٹط© ظˆط§ظ„ظˆط­ط¯ط© ط§ظ„ظپظ†ظٹط© ظ„ظ„ط¹ظ…ظ„ ط§ظ„ط£ط¯ط¨ظٹ.', textEn: 'Synthesize aesthetic value and overall artistic coherence.' }
          ],
          takeawayAr: 'ط§ظ„ظ†طµ ط§ظ„ط£ط¯ط¨ظٹ ط§ظ„ط¹ط¸ظٹظ… ظ‡ظˆ ط§ظ„ط°ظٹ طھطھظƒط§ظ…ظ„ ظپظٹظ‡ ط§ظ„ظ…ظˆط³ظٹظ‚ظ‰ ظˆط§ظ„طµظˆط±ط© ظˆط§ظ„ظپظƒط±ط© ظپظٹ ظ†ط³ظٹط¬ ط¹ط¶ظˆظٹ ظ„ط§ ظٹظ‚ط¨ظ„ ط§ظ„طھط¬ط²ط¦ط©.',
          takeawayEn: 'Masterpiece literature unites rhythm, metaphor, and intellect into an indivisible organic synthesis.'
        },
        tipsAr: ['ط§ط­ط±طµ ط¹ظ„ظ‰ ط§ظ„ط§ط³طھط´ظ‡ط§ط¯ ط¨ط¹ط¨ط§ط±ط§طھ ط¯ظ‚ظٹظ‚ط© ظ…ظ† ط§ظ„ظ†طµ ط¹ظ†ط¯ ظƒطھط§ط¨ط© طھط­ظ„ظٹظ„ظƒ ط§ظ„ظ†ظ‚ط¯ظٹ.'],
        tipsEn: ['Always cite specific textual evidence when constructing literary critiques.']
      }
    ],
    assessment: {
      id: 'quiz-lit-4',
      lectureId: 'lit-4',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ظ†ظ‡ط§ط¦ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط±ط§ط¨ط¹ط©: ط§ظ„ظ†ظ‚ط¯ ظˆط§ظ„طھط­ظ„ظٹظ„ ط§ظ„ط£ط¯ط¨ظٹ',
      titleEn: 'Lecture 4 Assessment: Applied Literary Criticism',
      passingScore: 80,
      questions: [
        {
          id: 'ql4-1',
          textAr: 'ظ…ط§ ط§ظ„ظ…ظ‚طµظˆط¯ ط¨ظ€ "ط§ظ„ظˆط­ط¯ط© ط§ظ„ط¹ط¶ظˆظٹط©" ظپظٹ ط§ظ„ظ‚طµظٹط¯ط© ط§ظ„ط£ط¯ط¨ظٹط© ط§ظ„ط­ط¯ظٹط«ط©طں',
          textEn: 'What is meant by organic unity in modern poetry?',
          optionsAr: [
            'طھط±ط§ط¨ط· ط£ظپظƒط§ط± ط§ظ„ظ‚طµظٹط¯ط© ظˆظ…ط´ط§ظ‡ط±ظ‡ط§ ط¨ط­ظٹط« طھظƒظˆظ† ظƒط§ظ„ظƒط§ط¦ظ† ط§ظ„ط­ظٹ ط§ظ„ظ…طھظ…ط§ط³ظƒ',
            'ط£ظ† طھظƒظˆظ† ط¬ظ…ظٹط¹ ط§ظ„ط£ط¨ظٹط§طھ ظ…ظ†طھظ‡ظٹط© ط¨ظ†ظپط³ ط§ظ„ط­ط±ظپ',
            'ط£ظ† ظٹطھط­ط¯ط« ط§ظ„ط´ط§ط¹ط± ط¹ظ† ط§ظ„ط·ط¨ظٹط¹ط© ظˆط§ظ„ظƒط§ط¦ظ†ط§طھ ط§ظ„ط­ظٹط© ظپظ‚ط·',
            'ط£ظ† طھطھظƒظˆظ† ط§ظ„ظ‚طµظٹط¯ط© ظ…ظ† ط¹ط¯ط¯ ظ…ط­ط¯ط¯ ظ…ظ† ط§ظ„ط£ط¨ظٹط§طھ'
          ],
          optionsEn: [
            'Coherence where ideas and emotions interlock like an organic living entity',
            'All verses ending with identical rhyme letter',
            'Writing exclusively about biology and nature',
            'Restricting verse count'
          ],
          correctIndex: 0,
          conceptTestedAr: 'ظ…ظپظ‡ظˆظ… ط§ظ„ظˆط­ط¯ط© ط§ظ„ط¹ط¶ظˆظٹط© ظپظٹ ط§ظ„ظ†ظ‚ط¯ ط§ظ„ط£ط¯ط¨ظٹ',
          conceptTestedEn: 'Organic Unity Framework',
          explanationAr: 'ط§ظ„ظˆط­ط¯ط© ط§ظ„ط¹ط¶ظˆظٹط© طھط¹ظ†ظٹ ظˆط­ط¯ط© ط§ظ„ظ…ظˆط¶ظˆط¹ ظˆظˆط­ط¯ط© ط§ظ„ط¬ظˆ ط§ظ„ظ†ظپط³ظٹ ظˆطھط±ط§ط¨ط· ط§ظ„ط£ظپظƒط§ط± ظˆطھظƒط§ظ…ظ„ظ‡ط§ ط¹ط¨ط± ط§ظ„ظ‚طµظٹط¯ط©.',
          explanationEn: 'Organic unity signifies thematic coherence, uniform emotional atmosphere, and interlocked ideas.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 4. MIDDLE SCHOOL ARABIC LANGUAGE (ط§ظ„ظ„ط؛ط© ط§ظ„ط¹ط±ط¨ظٹط© - ظ„ط؛طھظٹ ط§ظ„ط®ط§ظ„ط¯ط© ظ„ظ„ظ…ط±ط­ظ„ط© ط§ظ„ظ…طھظˆط³ط·ط©)
// ============================================================================
export const ARABIC_LANG_LECTURES: Lecture[] = [
  {
    id: 'lang-1',
    order: 1,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط£ظ‚ط³ط§ظ… ط§ظ„ظƒظ„ظ…ط© (ط§ظ„ط§ط³ظ… ظˆط§ظ„ظپط¹ظ„ ظˆط§ظ„ط­ط±ظپ) ظˆط¹ظ„ط§ظ…ط§طھ ط§ظ„طھظ…ظٹظٹط²',
    titleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',
    subtitleAr: 'ط§ظ„طھظ…ظٹظٹط² ط¨ظٹظ† ط£ظ‚ط³ط§ظ… ط§ظ„ظƒظ„ظ…ط© ط§ظ„ط«ظ„ط§ط«ط© ظˆط§ظ„طھط¹ط±ظپ ط¹ظ„ظ‰ ط¹ظ„ط§ظ…ط§طھ ط§ظ„ط§ط³ظ… ط§ظ„ط®ط§طµط© ظˆط¹ظ„ط§ظ…ط§طھ ط§ظ„ظپط¹ظ„',
    subtitleEn: 'Master the three categories of Arabic words: Nouns, Verbs, and Particles.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['ط£ظ‚ط³ط§ظ… ط§ظ„ظƒظ„ظ…ط© ط§ظ„ط«ظ„ط§ط«ط©: ط§ط³ظ… ظˆظپط¹ظ„ ظˆط­ط±ظپ', 'ط¹ظ„ط§ظ…ط§طھ ط§ظ„ط§ط³ظ…: ط§ظ„طھظ†ظˆظٹظ†طŒ ط§ظ„ط¬ط±طŒ ط£ظ„ ط§ظ„طھط¹ط±ظٹظپطŒ ط§ظ„ظ†ط¯ط§ط،', 'ط¹ظ„ط§ظ…ط§طھ ط§ظ„ظپط¹ظ„: طھط§ط، ط§ظ„ظپط§ط¹ظ„طŒ طھط§ط، ط§ظ„طھط£ظ†ظٹط«طŒ ط³ظٹظ† ط§ظ„ط§ط³طھظ‚ط¨ط§ظ„', 'ط£ظ‡ظ…ظٹط© ط§ظ„ط­ط±ظˆظپ ظپظٹ ط±ط¨ط· ط§ظ„ظƒظ„ظ…ط§طھ ظˆطھط­ط¯ظٹط¯ ط§ظ„ظ…ط¹ظ†ظ‰'],
    keyConceptsEn: ['Three Parts of Speech: Noun, Verb, Particle', 'Noun Identification Markers', 'Verb Identification Markers', 'Function of Particles'],
    summaryAr: 'ط§ظ„ظƒظ„ط§ظ… ظپظٹ ظ„ط؛طھظ†ط§ ط§ظ„ط¹ط±ط¨ظٹط© ظٹطھط£ظ„ظپ ظ…ظ† ط«ظ„ط§ط« ظ„ط¨ظ†ط§طھ ط£ط³ط§ط³ظٹط© ظ„ط§ ط±ط§ط¨ط¹ ظ„ظ‡ط§: ط§ظ„ط§ط³ظ… ظˆظٹط¯ظ„ ط¹ظ„ظ‰ ظ…ط¹ظ†ظ‰ ط؛ظٹط± ظ…ظ‚طھط±ظ† ط¨ط²ظ…ظ†طŒ ظˆط§ظ„ظپط¹ظ„ ظˆظٹط¯ظ„ ط¹ظ„ظ‰ ط­ط¯ط« ظ…ظ‚طھط±ظ† ط¨ط²ظ…ظ†طŒ ظˆط§ظ„ط­ط±ظپ ظˆظٹط±ط¨ط· ط¨ظٹظ† ط§ظ„ظƒظ„ظ…ط§طھ.',
    summaryEn: 'Arabic words comprise three foundational blocks: Nouns, Verbs, and Relational Particles.',
    sections: [
      {
        titleAr: '1. ظƒظٹظپ ظ†ظ…ظٹط² ط¨ظٹظ† ط§ظ„ط§ط³ظ… ظˆط§ظ„ظپط¹ظ„طں',
        titleEn: '1. Distinguishing Nouns from Verbs',
        contentAr: 'ط§ظ„ط§ط³ظ… ظٹظ‚ط¨ظ„ ط¹ظ„ط§ظ…ط§طھ ظ„ط§ ظٹظ‚ط¨ظ„ظ‡ط§ ط§ظ„ظپط¹ظ„ط› ظپط¥ط°ط§ ط£ط±ط¯طھ ظپط­طµ ظƒظ„ظ…ط© ظ…ط§ ط¬ط±ط¨ ط¥ط¯ط®ط§ظ„ (ط£ظ„ ط§ظ„طھط¹ط±ظٹظپ) ط¹ظ„ظٹظ‡ط§ ظ…ط«ظ„: (ظƒطھط§ط¨ -> ط§ظ„ظƒطھط§ط¨) ط£ظˆ ط§ظ„طھظ†ظˆظٹظ† (ظƒطھط§ط¨ظŒ)طŒ ظپط¥ظ† ظ‚ط¨ظ„طھظ‡ط§ ظپظ‡ظٹ ط§ط³ظ….',
        contentEn: 'Nouns accept markers rejected by verbs, such as the definite article (Al) and nunation (Tanween).',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ط§ط®طھط¨ط§ط± ظ†ظˆط¹ ط§ظ„ظƒظ„ظ…ط©',
          titleEn: 'Worked Example: Word Category Testing',
          equation: 'ط§ط®طھط¨ط§ط± ط§ظ„ظƒظ„ظ…ط© + (ط£ظ„ ط§ظ„طھط¹ط±ظٹظپ) ط£ظˆ (ط§ظ„طھظ†ظˆظٹظ†)',
          steps: [
            { stepNumber: 1, textAr: 'ظپط­طµ ظƒظ„ظ…ط© "ظٹظژظƒظ’طھظڈط¨ظڈ": ظ‡ظ„ ظٹطµط­ ط£ظ† ظ†ظ‚ظˆظ„ "ط§ظ„ظ’ظٹظژظƒظ’طھظڈط¨ظڈ"طں ظƒظ„ط§طŒ ط¥ط°ظ† ظ„ظٹط³طھ ط§ط³ظ…ط§ظ‹ ط¨ظ„ ظپط¹ظ„.', textEn: 'Test "Yaktub" (writes): Can we add Al-? No, thus it is a verb.' },
            { stepNumber: 2, textAr: 'ظپط­طµ ظƒظ„ظ…ط© "ظ…ظژط¯ظ’ط±ظژط³ظژط©": ظ†ظ‚ط¨ظ„ "ط§ظ„ظ’ظ…ظژط¯ظ’ط±ظژط³ظژط©" ظˆ"ظ…ظژط¯ظ’ط±ظژط³ظژط©ظŒ"طŒ ط¥ط°ظ† ظ‡ظٹ ط§ط³ظ….', textEn: 'Test "Madrasah": Accepts Al- and Tanween, confirmed as a noun.' }
          ],
          takeawayAr: 'ط§ظ„ط¹ظ„ط§ظ…ط© ط§ظ„طھظٹ طھظ…ظٹط² ط§ظ„ط§ط³ظ… ظپظˆط±ط§ظ‹ ظ‡ظٹ ظ‚ط¨ظˆظ„ (ط£ظ„ ط§ظ„طھط¹ط±ظٹظپ) ط£ظˆ (ط§ظ„طھظ†ظˆظٹظ†).',
          takeawayEn: 'Definite article and nunation are immediate identifiers for Arabic nouns.'
        },
        tipsAr: ['ط§ظ„ظپط¹ظ„ ط§ظ„ظ…ط§ط¶ظٹ ظٹظ‚ط¨ظ„ طھط§ط، ط§ظ„طھط£ظ†ظٹط« ط§ظ„ط³ط§ظƒظ†ط© ظپظٹ ط¢ط®ط±ظ‡ (ظƒظژطھظژط¨ظژطھظ’).'],
        tipsEn: ['Past tense verbs uniquely accept feminine Taa (ظƒطھط¨طھ).']
      }
    ],
    assessment: {
      id: 'quiz-lang-1',
      lectureId: 'lang-1',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط£ظˆظ„ظ‰: ط£ظ‚ط³ط§ظ… ط§ظ„ظƒظ„ظ…ط©',
      titleEn: 'Lecture 1 Assessment: Parts of Speech',
      passingScore: 80,
      questions: [
        {
          id: 'qlg1-1',
          textAr: 'ط£ظٹ ظ…ظ† ط§ظ„ظƒظ„ظ…ط§طھ ط§ظ„طھط§ظ„ظٹط© طھظڈط¹ط¯ "ط§ط³ظ…ط§ظ‹" ظ„ط£ظ†ظ‡ط§ طھظ‚ط¨ظ„ ط§ظ„طھظ†ظˆظٹظ†طں',
          textEn: 'Which of the following is a noun accepting Tanween?',
          optionsAr: ['ط´ظژط¬ظژط±ظژط©ظŒ', 'ظٹظژط°ظ’ظ‡ظژط¨ظڈ', 'ط¹ظژظ„ظژظ‰', 'ط§ظ†ظ’ط·ظژظ„ظژظ‚ظژ'],
          optionsEn: ['Shajarah (Tree)', 'Yadhhab (Goes)', 'Ala (On)', 'Intalaqa (Launched)'],
          correctIndex: 0,
          conceptTestedAr: 'ط¹ظ„ط§ظ…ط§طھ ط§ظ„ط§ط³ظ…',
          conceptTestedEn: 'Noun Markers',
          explanationAr: 'ظƒظ„ظ…ط© "ط´ط¬ط±ط©ظŒ" ط§ط³ظ… ظ„ط£ظ†ظ‡ط§ طھظ‚ط¨ظ„ ط§ظ„طھظ†ظˆظٹظ† ظˆط§ظ„طھط§ط، ط§ظ„ظ…ط±ط¨ظˆط·ط© ظˆط£ظ„ ط§ظ„طھط¹ط±ظٹظپ.',
          explanationEn: 'Shajarah is a noun because it accepts tanween and the definite article.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'lang-2',
    order: 2,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ط§ط³ظ…ظٹط© ظˆط±ظƒظ†ط§ظ‡ط§ ط§ظ„ط£ط³ط§ط³ظٹط§ظ†: ط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط±',
    titleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',
    subtitleAr: 'ط§ظ„طھط¹ط±ظپ ط¹ظ„ظ‰ ط§ظ„ظ…ط¨طھط¯ط£ ط§ظ„ظ…ط±ظپظˆط¹ ظˆط§ظ„ط®ط¨ط± ط§ظ„ظ…طھظ…ظ… ظ„ظ„ظ…ط¹ظ†ظ‰طŒ ظˆط¹ظ„ط§ظ…ط§طھ ط§ظ„ط±ظپط¹ ط§ظ„ط£طµظ„ظٹط© ظˆط§ظ„ظپط±ط¹ظٹط©',
    subtitleEn: 'Identify subjects and predicates with nominative case inflections.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-1',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط£ظ‚ط³ط§ظ… ط§ظ„ظƒظ„ظ…ط© (ط§ظ„ط§ط³ظ… ظˆط§ظ„ظپط¹ظ„ ظˆط§ظ„ط­ط±ظپ) ظˆط¹ظ„ط§ظ…ط§طھ ط§ظ„طھظ…ظٹظٹط²',
    prerequisiteTitleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',
    keyConceptsAr: ['طھط¹ط±ظٹظپ ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ط§ط³ظ…ظٹط© (طھط¨ط¯ط£ ط¨ط§ط³ظ…)', 'ط§ظ„ظ…ط¨طھط¯ط£: ط§ظ„ط§ط³ظ… ط§ظ„ظ…ط±ظپظˆط¹ ط§ظ„ط°ظٹ ظ†ط¨ط¯ط£ ط¨ظ‡ ط§ظ„ظƒظ„ط§ظ…', 'ط§ظ„ط®ط¨ط±: ط§ظ„ط¬ط²ط، ط§ظ„ط°ظٹ ظٹطھظ…ظ… ظ…ط¹ظ†ظ‰ ط§ظ„ط¬ظ…ظ„ط© ظ…ط¹ ط§ظ„ظ…ط¨طھط¯ط£', 'ط¹ظ„ط§ظ…ط© ط§ظ„ط±ظپط¹ ط§ظ„ط£طµظ„ظٹط© (ط§ظ„ط¶ظ…ط©) ظˆط§ظ„ظپط±ط¹ظٹط© (ط§ظ„ط£ظ„ظپ ظˆط§ظ„ظˆط§ظˆ)'],
    keyConceptsEn: ['Nominal Sentence Structure', 'Mubtada (Subject)', 'Khabar (Predicate)', 'Nominative Case Inflections'],
    summaryAr: 'ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ط§ط³ظ…ظٹط© ظ‡ظٹ ظƒظ„ ط¬ظ…ظ„ط© طھط¨ط¯ط£ ط¨ط§ط³ظ…طŒ ظˆطھطھط£ظ„ظپ ظ…ظ† ط±ظƒظ†ظٹظ† ط±ط¦ظٹط³ظٹظ† ظ…ط±ظپظˆط¹ظٹظ†: ط§ظ„ظ…ط¨طھط¯ط£ ظˆظ‡ظˆ ظ…ط­ظˆط± ط§ظ„ط­ط¯ظٹط«طŒ ظˆط§ظ„ط®ط¨ط± ظˆظ‡ظˆ ظ…ط§ ظ†ط®ط¨ط± ط¨ظ‡ ط¹ظ† ط§ظ„ظ…ط¨طھط¯ط£ ظ„طھظƒطھظ…ظ„ ط§ظ„ظپط§ط¦ط¯ط©.',
    summaryEn: 'Nominal sentences originate with a noun and require subject and predicate in nominative agreement.',
    sections: [
      {
        titleAr: '1. ط±ظƒظ†ط§ ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ط§ط³ظ…ظٹط©',
        titleEn: '1. Subject and Predicate Foundations',
        contentAr: 'ظپظٹ ط¬ظ…ظ„ط© "ط§ظ„ط³ظ…ط§ط،ظڈ طµط§ظپظٹط©ظŒ"طŒ ط¨ط¯ط£ظ†ط§ ط¨ظƒظ„ظ…ط© "ط§ظ„ط³ظ…ط§ط،ظڈ" ظپظ‡ظٹ ظ…ط¨طھط¯ط£ ظ…ط±ظپظˆط¹طŒ ظˆطھظ… ط§ظ„ظ…ط¹ظ†ظ‰ ط¨ظƒظ„ظ…ط© "طµط§ظپظٹط©ظŒ" ظپظ‡ظٹ ط®ط¨ط± ظ…ط±ظپظˆط¹.',
        contentEn: 'In "The sky is clear", the first noun is the subject, completed by the predicate.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: طھط­ط¯ظٹط¯ ط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط±',
          titleEn: 'Worked Example: Identifying Subject and Predicate',
          equation: 'ط§ظ„ظ…ط¨طھط¯ط£ (ط§ط³ظ… ط§ظ„ط¨ط¯ط§ظٹط©) + ط§ظ„ط®ط¨ط± (ط§ظ„ظ…طھظ…ظ… ظ„ظ„ظ…ط¹ظ†ظ‰)',
          steps: [
            { stepNumber: 1, textAr: 'ط§ظ„ط¬ظ…ظ„ط©: "ط§ظ„ط¹ظگظ„ظ’ظ…ظڈ ظ†ظژط§ظپظگط¹ظŒ ظ„ظگظ„ظ’ط¨ظژط´ظژط±ظگظٹظژظ‘ط©ظگ".', textEn: 'Sentence: "Knowledge is beneficial to humanity."' },
            { stepNumber: 2, textAr: 'ط§ظ„ظ…ط¨طھط¯ط£ ظ‡ظˆ "ط§ظ„ط¹ظگظ„ظ’ظ…ظڈ" (ظ…ط±ظپظˆط¹ ط¨ط§ظ„ط¶ظ…ط© ط§ظ„ط¸ط§ظ‡ط±ط©).', textEn: 'Subject: "Knowledge" (Nominative with Dammah).' },
            { stepNumber: 3, textAr: 'ط§ظ„ط®ط¨ط± ظ‡ظˆ "ظ†ظژط§ظپظگط¹ظŒ" ظ„ط£ظ†ظ‡ طھظ…ظ… ط§ظ„ظ…ط¹ظ†ظ‰ ط§ظ„ط£ط³ط§ط³ظٹ ظ„ظ„ظ…ط¨طھط¯ط£.', textEn: 'Predicate: "Beneficial" because it completes the core meaning.' }
          ],
          takeawayAr: 'ط§ظ„ط®ط¨ط± ظ‡ظˆ ط§ظ„ظƒظ„ظ…ط© ط§ظ„طھظٹ طھط¬ظٹط¨ ط¹ظ† ط³ط¤ط§ظ„: "ظ…ط§ ط¨ظ‡ ط§ظ„ظ…ط¨طھط¯ط£طں".',
          takeawayEn: 'The predicate answers what is being predicated about the subject.'
        },
        tipsAr: ['ط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط± ظ…ط±ظپظˆط¹ط§ظ† ط¯ط§ط¦ظ…ط§ظ‹ ظ…ط§ ظ„ظ… ظٹط¯ط®ظ„ ط¹ظ„ظٹظ‡ظ…ط§ ظ†ط§ط³ط® (ظƒط§ظ† ط£ظˆ ط¥ظ†).'],
        tipsEn: ['Both subject and predicate remain nominative unless modified by particles.']
      }
    ],
    assessment: {
      id: 'quiz-lang-2',
      lectureId: 'lang-2',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ†ظٹط©: ط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط±',
      titleEn: 'Lecture 2 Assessment: Nominal Sentences',
      passingScore: 80,
      questions: [
        {
          id: 'qlg2-1',
          textAr: 'ظپظٹ ط¬ظ…ظ„ط© "ط§ظ„ظ’ظ…ظڈط¤ظ’ظ…ظگظ†ظڈظˆظ†ظژ طµظژط§ط¯ظگظ‚ظڈظˆظ†ظژ"طŒ ظ…ط§ ظ‡ظٹ ط¹ظ„ط§ظ…ط© ط±ظپط¹ ط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط±طں',
          textEn: 'In "The believers are truthful", what is the nominative marker?',
          optionsAr: ['ط§ظ„ظˆط§ظˆ ظ„ط£ظ†ظ‡ ط¬ظ…ط¹ ظ…ط°ظƒط± ط³ط§ظ„ظ…', 'ط§ظ„ط¶ظ…ط© ط§ظ„ط¸ط§ظ‡ط±ط©', 'ط§ظ„ط£ظ„ظپ ظ„ط£ظ†ظ‡ ظ…ط«ظ†ظ‰', 'ط§ظ„ظپطھط­ط©'],
          optionsEn: ['Waw (Sound Masculine Plural)', 'Dammah', 'Alif (Dual)', 'Fathah'],
          correctIndex: 0,
          conceptTestedAr: 'ط¹ظ„ط§ظ…ط§طھ ط§ظ„ط±ظپط¹ ط§ظ„ظپط±ط¹ظٹط©',
          conceptTestedEn: 'Secondary Nominative Markers',
          explanationAr: 'ط¬ظ…ط¹ ط§ظ„ظ…ط°ظƒط± ط§ظ„ط³ط§ظ„ظ… ظٹظڈط±ظپط¹ ط¨ط§ظ„ظˆط§ظˆ ظ†ظٹط§ط¨ط© ط¹ظ† ط§ظ„ط¶ظ…ط©طŒ ظپط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط± ظ‡ظ†ط§ ظ…ط±ظپظˆط¹ط§ظ† ط¨ط§ظ„ظˆط§ظˆ.',
          explanationEn: 'Sound masculine plurals take Waw as the nominative inflection marker.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lang-3',
    order: 3,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظپط¹ظ„ظٹط©: ط§ظ„ظپط¹ظ„ ظˆط§ظ„ظپط§ط¹ظ„ ظˆط¹ظ„ط§ظ…ط§طھ ط§ظ„ط¥ط¹ط±ط§ط¨',
    titleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',
    subtitleAr: 'ظپظ‡ظ… ط£ط±ظƒط§ظ† ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظپط¹ظ„ظٹط©طŒ ظˆط£ط­ظƒط§ظ… ط§ظ„ظپط§ط¹ظ„ ط§ظ„ظ…ط±ظپظˆط¹ ظˆطµظˆط±ظ‡ ط§ظ„ظ…ط®طھظ„ظپط©',
    subtitleEn: 'Master verb types, explicit and implicit agents, and case markers.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-2',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ط§ط³ظ…ظٹط© ظˆط±ظƒظ†ط§ظ‡ط§ ط§ظ„ط£ط³ط§ط³ظٹط§ظ†: ط§ظ„ظ…ط¨طھط¯ط£ ظˆط§ظ„ط®ط¨ط±',
    prerequisiteTitleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',
    keyConceptsAr: ['ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظپط¹ظ„ظٹط© طھط¨ط¯ط£ ط¨ظپط¹ظ„ (ظ…ط§ط¶ظچ ط£ظˆ ظ…ط¶ط§ط±ط¹ ط£ظˆ ط£ظ…ط±)', 'ط§ظ„ظپط§ط¹ظ„: ط§ط³ظ… ظ…ط±ظپظˆط¹ ظٹط¯ظ„ ط¹ظ„ظ‰ ظ…ظ† ظ‚ط§ظ… ط¨ط§ظ„ظپط¹ظ„', 'طµظˆط± ط§ظ„ظپط§ط¹ظ„: ط§ط³ظ… ط¸ط§ظ‡ط± ط£ظˆ ط¶ظ…ظٹط± ظ…طھطµظ„ ط£ظˆ ط¶ظ…ظٹط± ظ…ط³طھطھط±'],
    keyConceptsEn: ['Verbal Sentence Structure', 'Faail (Agent / Doer)', 'Explicit vs Implicit Pronoun Agents'],
    summaryAr: 'ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظپط¹ظ„ظٹط© طھط¨ط¯ط£ ط¨ظپط¹ظ„ ظٹط¹ط¨ط± ط¹ظ† ط­ط¯ط«طŒ ظˆظ„ط§ ط¨ط¯ ظ„ظƒظ„ ظپط¹ظ„ ظ…ظ† ظپط§ط¹ظ„ ط¹ط§ظ‚ظ„ ط£ظˆ ط؛ظٹط± ط¹ط§ظ‚ظ„ ظٹط­ط¯ط«ظ‡ط› ظˆط§ظ„ظپط§ط¹ظ„ ط¯ط§ط¦ظ…ط§ظ‹ ظ…ط±ظپظˆط¹.',
    summaryEn: 'Verbal sentences center on actions requiring an explicit or implicit agent in nominative case.',
    sections: [
      {
        titleAr: '1. ط§ظ„ظپط§ط¹ظ„ ظˆط£ط´ظƒط§ظ„ظ‡',
        titleEn: '1. Agent Forms and Rules',
        contentAr: 'ظپظٹ ط¬ظ…ظ„ط© "ط­ظژظپظگط¸ظژ ط§ظ„ط·ظژظ‘ط§ظ„ظگط¨ظڈ ط§ظ„ظ‚ظژطµظگظٹط¯ظژط©ظژ"طŒ ط§ظ„ظپط¹ظ„ ظ‡ظˆ "ط­ظژظپظگط¸ظژ" ظˆط§ظ„ظپط§ط¹ظ„ ظ‡ظˆ "ط§ظ„ط·ظژظ‘ط§ظ„ظگط¨ظڈ" ظˆظ‡ظˆ ط§ط³ظ… ط¸ط§ظ‡ط± ظ…ط±ظپظˆط¹ ط¨ط§ظ„ط¶ظ…ط©.',
        contentEn: 'The agent identifies who executes the verbal action.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ط§ط³طھط®ط±ط§ط¬ ط§ظ„ظپط§ط¹ظ„',
          titleEn: 'Worked Example: Locating the Agent',
          equation: 'ظ…ظژظ† ظپط¹ظ„ ط§ظ„ظپط¹ظ„طں = ط§ظ„ظپط§ط¹ظ„ ط§ظ„ظ…ط±ظپظˆط¹',
          steps: [
            { stepNumber: 1, textAr: 'ط§ظ„ط¬ظ…ظ„ط©: "ط§ظ†ظ’طھظژطµظژط±ظژ ط§ظ„ظ’ط­ظژظ‚ظڈظ‘".', textEn: 'Sentence: "Truth prevailed."' },
            { stepNumber: 2, textAr: 'ظ†ط³ط£ظ„: ظ…ظژظ† ط§ظ„ط°ظٹ ط§ظ†طھطµط±طں ط§ظ„ط¬ظˆط§ط¨: "ط§ظ„ظ’ط­ظژظ‚ظڈظ‘".', textEn: 'Ask: Who prevailed? Answer: "Truth".' },
            { stepNumber: 3, textAr: 'ط¥ط°ظ† "ط§ظ„ظ’ط­ظژظ‚ظڈظ‘" ظپط§ط¹ظ„ ظ…ط±ظپظˆط¹ ظˆط¹ظ„ط§ظ…ط© ط±ظپط¹ظ‡ ط§ظ„ط¶ظ…ط© ط§ظ„ط¸ط§ظ‡ط±ط©.', textEn: 'Thus "Truth" is the agent (Faail) nominative with Dammah.' }
          ],
          takeawayAr: 'ط§ظ„ظپط§ط¹ظ„ ظٹظ‚ط¹ ط¯ط§ط¦ظ…ط§ظ‹ ط¨ط¹ط¯ ط§ظ„ظپط¹ظ„طŒ ظˆظ„ط§ ظٹطھظ‚ط¯ظ… ط¹ظ„ظٹظ‡ ط£ط¨ط¯ط§ظ‹ ظپظٹ ط§ظ„ط¥ط¹ط±ط§ط¨.',
          takeawayEn: 'In Arabic grammar syntax, the Faail strictly succeeds its governing verb.'
        },
        tipsAr: ['ط¥ط°ط§ طھظ‚ط¯ظ… ط§ظ„ظپط§ط¹ظ„ ط¹ظ„ظ‰ ط§ظ„ظپط¹ظ„ طھط­ظˆظ„طھ ط§ظ„ط¬ظ…ظ„ط© ظ…ظ† ظپط¹ظ„ظٹط© ط¥ظ„ظ‰ ط§ط³ظ…ظٹط©.'],
        tipsEn: ['If the doer precedes the verb, the sentence reclassifies as nominal.']
      }
    ],
    assessment: {
      id: 'quiz-lang-3',
      lectureId: 'lang-3',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ„ط«ط©: ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظپط¹ظ„ظٹط© ظˆط§ظ„ظپط§ط¹ظ„',
      titleEn: 'Lecture 3 Assessment: Verbal Sentences',
      passingScore: 80,
      questions: [
        {
          id: 'qlg3-1',
          textAr: 'ظپظٹ ط¬ظ…ظ„ط© "ظƒظژطھظژط¨ظ’طھظڈ ط§ظ„ط¯ظژظ‘ط±ظ’ط³ظژ"طŒ ظ…ط§ ظ‡ظˆ ط§ظ„ظپط§ط¹ظ„طں',
          textEn: 'In "I wrote the lesson", what serves as the agent?',
          optionsAr: ['ط§ظ„طھط§ط، ط§ظ„ظ…طھط­ط±ظƒط© (طھط§ط، ط§ظ„ظپط§ط¹ظ„) ط¶ظ…ظٹط± ظ…طھطµظ„', 'ط§ظ„ط¯ظژظ‘ط±ظ’ط³ظژ', 'ط¶ظ…ظٹط± ظ…ط³طھطھط± طھظ‚ط¯ظٹط±ظ‡ ظ‡ظˆ', 'ط§ظ„ظپط¹ظ„ ظƒظژطھظژط¨ظژ'],
          optionsEn: ['The attached Taa pronoun', 'The lesson', 'Implicit pronoun (Huwa)', 'The verb itself'],
          correctIndex: 0,
          conceptTestedAr: 'ط§ظ„ظپط§ط¹ظ„ ط¶ظ…ظٹط±ط§ظ‹ ظ…طھطµظ„ط§ظ‹',
          conceptTestedEn: 'Attached Pronoun Agents',
          explanationAr: 'ط§ظ„طھط§ط، ظپظٹ "ظƒطھط¨طھظڈ" ظ‡ظٹ طھط§ط، ط§ظ„ظپط§ط¹ظ„طŒ ظˆظ‡ظٹ ط¶ظ…ظٹط± ظ…طھطµظ„ ظ…ط¨ظ†ظٹ ظپظٹ ظ…ط­ظ„ ط±ظپط¹ ظپط§ط¹ظ„.',
          explanationEn: 'The attached Taa functions syntactically as the nominative pronoun agent.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lang-4',
    order: 4,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 4: ظ…ظ‡ط§ط±ط§طھ ط§ظ„ظپظ‡ظ… ط§ظ„ظ‚ط±ط§ط¦ظٹ ظˆط§ط³طھط®ط±ط§ط¬ ط§ظ„ط£ظپظƒط§ط± ط§ظ„ط±ط¦ظٹط³ط© ظˆط§ظ„ط¥ظ…ظ„ط§ط،',
    titleEn: 'Lecture 4: Reading Comprehension, Main Ideas & Orthography',
    subtitleAr: 'ط§ط³طھط±ط§طھظٹط¬ظٹط§طھ ط§ط³طھظٹط¹ط§ط¨ ط§ظ„ظ…ظ‚ط±ظˆط،طŒ ظˆط§ظ„طھظ…ظٹظٹط² ط¨ظٹظ† ظ‡ظ…ط²طھظٹ ط§ظ„ظˆطµظ„ ظˆط§ظ„ظ‚ط·ط¹ ظپظٹ ط§ظ„ظƒطھط§ط¨ط©',
    subtitleEn: 'Master textual comprehension, thematic extraction, and Hamzah orthography.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-3',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ط¬ظ…ظ„ط© ط§ظ„ظپط¹ظ„ظٹط©: ط§ظ„ظپط¹ظ„ ظˆط§ظ„ظپط§ط¹ظ„ ظˆط¹ظ„ط§ظ…ط§طھ ط§ظ„ط¥ط¹ط±ط§ط¨',
    prerequisiteTitleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',
    keyConceptsAr: ['طھط­ط¯ظٹط¯ ط§ظ„ظپظƒط±ط© ط§ظ„ط±ط¦ظٹط³ط© ظˆط§ظ„ط£ظپظƒط§ط± ط§ظ„ظپط±ط¹ظٹط© ظ„ظ„ظ†طµ', 'ط§ظ„طھظ…ظٹظٹط² ط¨ظٹظ† ط§ظ„ط­ظ‚ظٹظ‚ط© ظˆط§ظ„ط±ط£ظٹ ظپظٹ ط§ظ„ظ†طµظˆطµ', 'ظ‚ط§ط¹ط¯ط© ظ‡ظ…ط²ط© ط§ظ„ظˆطµظ„ ظˆظ‡ظ…ط²ط© ط§ظ„ظ‚ط·ط¹ ظˆط·ط±ظٹظ‚ط© ظپط­طµظ‡ط§ ط¨ط­ط±ظپ ط§ظ„ظˆط§ظˆ'],
    keyConceptsEn: ['Main vs Supporting Thematic Ideas', 'Fact vs Opinion Differentiation', 'Hamzat Al-Wasl vs Al-Qat Orthography'],
    summaryAr: 'ظ†ط®طھطھظ… ظ…ظ‡ط§ط±ط§طھ ط§ظ„ظ„ط؛ط© ط¨طھظ†ظ…ظٹط© ظ…ظ‡ط§ط±ط§طھ ط§ظ„ظپظ‡ظ… ط§ظ„ظ‚ط±ط§ط¦ظٹ ط§ظ„ظ…طھظ‚ط¯ظ… ظˆطھط·ط¨ظٹظ‚ ط§ظ„ظ‚ظˆط§ط¹ط¯ ط§ظ„ط¥ظ…ظ„ط§ط¦ظٹط© ط§ظ„ط³ظ„ظٹظ…ط© ظپظٹ ط§ظ„طھظپط±ظٹظ‚ ط¨ظٹظ† ظ‡ظ…ط²طھظٹ ط§ظ„ظˆطµظ„ ظˆط§ظ„ظ‚ط·ط¹.',
    summaryEn: 'Synthesize reading comprehension strategies with foundational Arabic orthography rules.',
    sections: [
      {
        titleAr: '1. ظ‚ط§ط¹ط¯ط© ظ‡ظ…ط²ط© ط§ظ„ظˆطµظ„ ظˆط§ظ„ظ‚ط·ط¹ ط§ظ„ط³ط±ظٹط¹ط©',
        titleEn: '1. Hamzah Orthography Verification Test',
        contentAr: 'ظ„ظ„طھظ…ظٹظٹط² ط§ظ„ط³ط±ظٹط¹ ط¨ظٹظ† ظ‡ظ…ط²ط© ط§ظ„ظˆطµظ„ (ط§) ظˆظ‡ظ…ط²ط© ط§ظ„ظ‚ط·ط¹ (ط£ / ط¥): ط¶ط¹ ط­ط±ظپ ط§ظ„ظˆط§ظˆ ظ‚ط¨ظ„ ط§ظ„ظƒظ„ظ…ط© ظˆط§ظ†ط·ظ‚ظ‡ط§ط› ط¥ط°ط§ ط³ظ‚ط·طھ ط§ظ„ظ‡ظ…ط²ط© ظپظٹ ط§ظ„ظ†ط·ظ‚ ظپظ‡ظٹ ظˆطµظ„ (ظˆط§ظ†ظ’ط·ظژظ„ظژظ‚ظژ)طŒ ظˆط¥ط°ط§ ط«ط¨طھطھ ظپظ‡ظٹ ظ‚ط·ط¹ (ظˆط£ظژظƒظ’ط±ظژظ…ظژ).',
        contentEn: 'Prefix the conjunction Waw: if the glottal stop drops in speech, it is Wasl; if preserved, it is Qat.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ط§ط®طھط¨ط§ط± ط§ظ„ظˆط§ظˆ ظ„ظ‡ظ…ط²ط© ط§ظ„ظƒظ„ظ…ط©',
          titleEn: 'Worked Example: Waw Prefix Test',
          equation: 'ط­ط±ظپ (ظˆ) + ط§ظ„ظƒظ„ظ…ط© ط§ظ„ظ…ظ†ط·ظˆظ‚ط©',
          steps: [
            { stepNumber: 1, textAr: 'ظپط­طµ "ط§ط³طھط؛ظپط§ط±": ظ†ظ‚ظˆظ„ "ظˆظژط§ط³ظ’طھظژط؛ظ’ظپظژط§ط±" (ط§ظ„ظ‡ظ…ط²ط© طھط³ظ‚ط· ظپظٹ ط§ظ„ظ†ط·ظ‚) -> ظ‡ظ…ط²ط© ظˆطµظ„ طھظƒطھط¨ (ط§ط³طھط؛ظپط§ط±) ط¯ظˆظ† ط±ط£ط³ ط§ظ„ط¹ظٹظ†.', textEn: 'Test: "Wa-stighfar" drops glottal stop -> Wasl.' },
            { stepNumber: 2, textAr: 'ظپط­طµ "ط¥ط­ط³ط§ظ†": ظ†ظ‚ظˆظ„ "ظˆظژط¥ظگط­ظ’ط³ظژط§ظ†" (ط§ظ„ظ‡ظ…ط²ط© طھظ†ط·ظ‚ ط¨ظˆط¶ظˆط­) -> ظ‡ظ…ط²ط© ظ‚ط·ط¹ طھظƒطھط¨ (ط¥ط­ط³ط§ظ†).', textEn: 'Test: "Wa-Ihsan" glottal stop pronounced -> Qat.' }
          ],
          takeawayAr: 'ط§ط®طھط¨ط§ط± ط­ط±ظپ ط§ظ„ظˆط§ظˆ ظٹظƒط´ظپ ظ„ظƒ ظ†ظˆط¹ ط§ظ„ظ‡ظ…ط²ط© ظپظٹ ط«ط§ظ†ظٹط© ظˆط§ط­ط¯ط© ط¯ظˆظ† ظ„ط¨ط³.',
          takeawayEn: 'Prefixing Waw reliably reveals Hamzah classification instantaneously.'
        },
        tipsAr: ['ط¬ظ…ظٹط¹ ط§ظ„ط£ط³ظ…ط§ط، ظ‡ظ…ط²طھظ‡ط§ ظ‚ط·ط¹ ظ…ط§ ط¹ط¯ط§ ط¹ط´ط±ط© ط£ط³ظ…ط§ط، ظ…ط³ظ…ظˆط¹ط© ط¹ظ† ط§ظ„ط¹ط±ط¨ (ط§ط¨ظ†طŒ ط§ط¨ظ†ط©طŒ ط§ط³ظ…طŒ ط§ظ…ط±ط¤...).'],
        tipsEn: ['All Arabic nouns take Hamzat Qat except the documented 10 classical exceptions.']
      }
    ],
    assessment: {
      id: 'quiz-lang-4',
      lectureId: 'lang-4',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط±ط§ط¨ط¹ط©: ط§ظ„ظپظ‡ظ… ط§ظ„ظ‚ط±ط§ط¦ظٹ ظˆط§ظ„ط¥ظ…ظ„ط§ط،',
      titleEn: 'Lecture 4 Assessment: Comprehension & Orthography',
      passingScore: 80,
      questions: [
        {
          id: 'qlg4-1',
          textAr: 'ط£ظٹ ظ…ظ† ط§ظ„ظƒظ„ظ…ط§طھ ط§ظ„طھط§ظ„ظٹط© ظƒظڈطھط¨طھ ط¨ظ‡ظ…ط²ط© ظˆطµظ„ طµط­ظٹط­ط©طں',
          textEn: 'Which word features a correct Hamzat Wasl?',
          optionsAr: ['ط§ظ†ظ’طھظگطµظژط§ط±', 'ط£ظژظ†ظ’طھظگطµظژط§ط±', 'ط¥ظگظ†ظ’طھظگطµظژط§ط±', 'ط£ظژط³ظ’طھظژظ…ظگط¹ظڈ'],
          optionsEn: ['Intisar (Victory)', 'Antisar', 'Intisar (with below Hamzah)', 'Astamio'],
          correctIndex: 0,
          conceptTestedAr: 'ظ‡ظ…ط²ط© ط§ظ„ظˆطµظ„ ظپظٹ ط§ظ„ظ…طµط§ط¯ط± ط§ظ„ط®ظ…ط§ط³ظٹط©',
          conceptTestedEn: 'Hamzat Wasl in Pentaconsonantal Nouns',
          explanationAr: '"ط§ظ†طھطµط§ط±" ظ…طµط¯ط± ظ„ظپط¹ظ„ ط®ظ…ط§ط³ظٹ (ط§ظ†طھطµط±)طŒ ظˆظ‡ظ…ط²طھظ‡ ظ‡ظ…ط²ط© ظˆطµظ„ طھط³ظ‚ط· ط¹ظ†ط¯ ط§ظ„ظ†ط·ظ‚ ط¨ط¹ط¯ ط§ظ„ظˆط§ظˆ: "ظˆط§ظ†ظ’طھطµط§ط±".',
          explanationEn: 'Intisar is a 5-letter verbal noun taking Hamzat Wasl.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 5. MIDDLE SCHOOL GENERAL SCIENCE (ط§ظ„ط¹ظ„ظˆظ… ط§ظ„ط¹ط§ظ…ط© ظ„ظ„ظ…ط±ط­ظ„ط© ط§ظ„ظ…طھظˆط³ط·ط©)
// ============================================================================
export const GENERAL_SCIENCE_LECTURES: Lecture[] = [
  {
    id: 'sci-1',
    order: 1,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط·ط¨ظٹط¹ط© ط§ظ„ظ…ط§ط¯ط© ظˆط§ظ„ط°ط±ط§طھ ظˆط§ظ„ط¹ظ†ط§طµط± ظˆط§ظ„ظ…ط±ظƒط¨ط§طھ',
    titleEn: 'Lecture 1: Nature of Matter: Atoms, Elements & Compounds',
    subtitleAr: 'ط¯ط±ط§ط³ط© طھط±ظƒظٹط¨ ط§ظ„ظ…ط§ط¯ط© ظˆط­ط§ظ„ط§طھظ‡ط§ ط§ظ„ط«ظ„ط§ط«طŒ ظˆظ…ظƒظˆظ†ط§طھ ط§ظ„ط°ط±ط© ط§ظ„ط£ط³ط§ط³ظٹط© (ط§ظ„ط¨ط±ظˆطھظˆظ†ط§طھ ظˆط§ظ„ظ†ظٹظˆطھط±ظˆظ†ط§طھ ظˆط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ط§طھ)',
    subtitleEn: 'Explore states of matter, atomic particles, elements and chemical compounds.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['ط§ظ„ظ…ط§ط¯ط© ظˆظƒظ„ ظ…ط§ ظ„ظ‡ ظƒطھظ„ط© ظˆظٹط´ط؛ظ„ ط­ظٹط²ط§ظ‹', 'ط­ط§ظ„ط§طھ ط§ظ„ظ…ط§ط¯ط© ط§ظ„ط«ظ„ط§ط«: ط§ظ„طµظ„ط¨ط© ظˆط§ظ„ط³ط§ط¦ظ„ط© ظˆط§ظ„ط؛ط§ط²ظٹط©', 'ط¨ظ†ظٹط© ط§ظ„ط°ط±ط©: ط§ظ„ظ†ظˆط§ط© (ط¨ط±ظˆطھظˆظ†ط§طھ ظˆظ†ظٹظˆطھط±ظˆظ†ط§طھ) ظˆط³ط­ط§ط¨ط© ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ط§طھ', 'ط§ظ„ظپط±ظ‚ ط¨ظٹظ† ط§ظ„ط¹ظ†طµط± ط§ظ„ظ†ظ‚ظٹ ظˆط§ظ„ظ…ط±ظƒط¨ ط§ظ„ظƒظٹظ…ظٹط§ط¦ظٹ'],
    keyConceptsEn: ['Definition of Matter', 'States of Matter', 'Atomic Structure: Protons, Neutrons, Electrons', 'Elements vs Compounds'],
    summaryAr: 'ظƒظ„ ط´ظٹط، ظٹط­ظٹط· ط¨ظ†ط§ ظپظٹ ظ‡ط°ط§ ط§ظ„ظƒظˆظ† ظ‡ظˆ ظ…ط§ط¯ط©ط› ظ†طھط¹ظ„ظ… ظپظٹ ظ‡ط°ط§ ط§ظ„ط¯ط±ط³ ط§ظ„ظ„ط¨ظ†ط§طھ ط§ظ„ط°ط±ظٹط© ط§ظ„ظ…طھظ†ط§ظ‡ظٹط© ظپظٹ ط§ظ„طµط؛ط± ط§ظ„طھظٹ طھط¨ظ†ظٹ ظƒظ„ ط§ظ„ظ…ظˆط§ط¯ ط§ظ„طµظ„ط¨ط© ظˆط§ظ„ط³ط§ط¦ظ„ط© ظˆط§ظ„ط؛ط§ط²ظٹط© ظ…ظ† ط­ظˆظ„ظ†ط§.',
    summaryEn: 'Discover the microscopic atomic constituents building our physical universe across all matter states.',
    sections: [
      {
        titleAr: '1. ظ…ظ… طھطھظƒظˆظ† ط§ظ„ط°ط±ط©طں',
        titleEn: '1. What Makes Up an Atom?',
        contentAr: 'ط§ظ„ط°ط±ط© ظ‡ظٹ ط£طµط؛ط± ط¬ط²ط، ظ…ظ† ط§ظ„ط¹ظ†طµط± ظٹط­طھظپط¸ ط¨ط®طµط§ط¦طµظ‡ ط§ظ„ظƒظٹظ…ظٹط§ط¦ظٹط©. طھطھظƒظˆظ† ظ…ظ† ظ†ظˆط§ط© ظ…ط±ظƒط²ظٹط© ط«ظ‚ظٹظ„ط© طھط­طھظˆظٹ ط¹ظ„ظ‰ ط¨ط±ظˆطھظˆظ†ط§طھ ظ…ظˆط¬ط¨ط© (+) ظˆظ†ظٹظˆطھط±ظˆظ†ط§طھ ظ…طھط¹ط§ط¯ظ„ط© (0)طŒ ظˆطھط¯ظˆط± ط­ظˆظ„ظ‡ط§ ط¥ظ„ظƒطھط±ظˆظ†ط§طھ ط³ط§ظ„ط¨ط© ط®ظپظٹظپط© (-).',
        contentEn: 'An atom comprises a heavy central nucleus of protons and neutrons orbited by negative electrons.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ط´ط­ظ†ط© ط§ظ„ط°ط±ط© ط§ظ„ظ…طھط¹ط§ط¯ظ„ط©',
          titleEn: 'Worked Example: Neutral Atomic Charge',
          equation: 'ط¹ط¯ط¯ ط§ظ„ط¨ط±ظˆطھظˆظ†ط§طھ (+) = ط¹ط¯ط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ط§طھ (-)',
          steps: [
            { stepNumber: 1, textAr: 'ط°ط±ط© ظƒط±ط¨ظˆظ† طھط­طھظˆظٹ ط¹ظ„ظ‰ 6 ط¨ط±ظˆطھظˆظ†ط§طھ ظ…ظˆط¬ط¨ط© ط¯ط§ط®ظ„ ط§ظ„ظ†ظˆط§ط© (+6).', textEn: 'Carbon atom contains 6 positive protons (+6).' },
            { stepNumber: 2, textAr: 'ظٹط¯ظˆط± ط­ظˆظ„ ط§ظ„ظ†ظˆط§ط© 6 ط¥ظ„ظƒطھط±ظˆظ†ط§طھ ط³ط§ظ„ط¨ط© ط§ظ„ط´ط­ظ†ط© (-6).', textEn: '6 negative electrons orbit the nucleus (-6).' },
            { stepNumber: 3, textAr: 'ط§ظ„ط´ط­ظ†ط© ط§ظ„ظƒظ„ظٹط© ط§ظ„طµط§ظپظٹط© = (+6) + (-6) = طµظپط± (ط°ط±ط© ظ…طھط¹ط§ط¯ظ„ط© ظƒظ‡ط±ط¨ط§ط¦ظٹط§ظ‹).', textEn: 'Net electric charge = 0 (electrically neutral atom).' }
          ],
          takeawayAr: 'ط§ظ„ط°ط±ط© ظپظٹ ط­ط§ظ„طھظ‡ط§ ط§ظ„ط·ط¨ظٹط¹ظٹط© طھظƒظˆظ† ظ…طھط¹ط§ط¯ظ„ط© ط§ظ„ط´ط­ظ†ط© ظ„ط£ظ† ط¹ط¯ط¯ ط§ظ„ط´ط­ظ†ط§طھ ط§ظ„ظ…ظˆط¬ط¨ط© ظٹط³ط§ظˆظٹ ط¹ط¯ط¯ ط§ظ„ط´ط­ظ†ط§طھ ط§ظ„ط³ط§ظ„ط¨ط©.',
          takeawayEn: 'Atoms remain electrically neutral when proton and electron counts balance.'
        },
        tipsAr: ['ط§ظ„ط¹ط¯ط¯ ط§ظ„ط°ط±ظٹ ظ„ظ„ط¹ظ†طµط± ظٹظ…ط«ظ„ ط¹ط¯ط¯ ط§ظ„ط¨ط±ظˆطھظˆظ†ط§طھ ط¯ط§ط®ظ„ ظ†ظˆط§طھظ‡ ط¯ط§ط¦ظ…ط§ظ‹.'],
        tipsEn: ['Atomic number strictly corresponds to the internal nuclear proton count.']
      }
    ],
    assessment: {
      id: 'quiz-sci-1',
      lectureId: 'sci-1',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط£ظˆظ„ظ‰: ط§ظ„ط°ط±ط© ظˆط§ظ„ظ…ط§ط¯ط©',
      titleEn: 'Lecture 1 Assessment: Matter & Atoms',
      passingScore: 80,
      questions: [
        {
          id: 'qsc1-1',
          textAr: 'ظ…ط§ ظ‡ظٹ ط§ظ„ط¬ط³ظٹظ…ط§طھ ط³ط§ظ„ط¨ط© ط§ظ„ط´ط­ظ†ط© ط§ظ„طھظٹ طھط¯ظˆط± ط­ظˆظ„ ظ†ظˆط§ط© ط§ظ„ط°ط±ط©طں',
          textEn: 'Which negatively charged particles orbit the atomic nucleus?',
          optionsAr: ['ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ط§طھ', 'ط§ظ„ط¨ط±ظˆطھظˆظ†ط§طھ', 'ط§ظ„ظ†ظٹظˆطھط±ظˆظ†ط§طھ', 'ط§ظ„ط¬ط²ظٹط¦ط§طھ'],
          optionsEn: ['Electrons', 'Protons', 'Neutrons', 'Molecules'],
          correctIndex: 0,
          conceptTestedAr: 'ط¨ظ†ظٹط© ط§ظ„ط°ط±ط© ظˆط¬ط³ظٹظ…ط§طھظ‡ط§',
          conceptTestedEn: 'Atomic Particle Charges',
          explanationAr: 'ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ط§طھ ظ‡ظٹ ط¬ط³ظٹظ…ط§طھ ط³ط§ظ„ط¨ط© ط§ظ„ط´ط­ظ†ط© طھط¯ظˆط± ظپظٹ ظ…ط³طھظˆظٹط§طھ ط·ط§ظ‚ط© ط­ظˆظ„ ظ†ظˆط§ط© ط§ظ„ط°ط±ط©.',
          explanationEn: 'Electrons are the negative particles orbiting the atomic nucleus.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-2',
    order: 2,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط§ظ„ط®ظ„ظٹط© ط§ظ„ط­ظٹط©: ط§ظ„ظ„ط¨ظ†ط© ط§ظ„ط£ط³ط§ط³ظٹط© ظ„ط¨ظ†ط§ط، ط§ظ„ظƒط§ط¦ظ†ط§طھ ط§ظ„ط­ظٹط©',
    titleEn: 'Lecture 2: The Living Cell: Fundamental Building Block of Life',
    subtitleAr: 'ط§ظ„ظ…ظ‚ط§ط±ظ†ط© ط¨ظٹظ† ط§ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ظˆط§ظ„ط­ظٹظˆط§ظ†ظٹط©طŒ ظˆظˆط¸ط§ط¦ظپ ط§ظ„ط¹ط¶ظٹط§طھ ط§ظ„ط­ظٹظˆظٹط© (ط§ظ„ظ†ظˆط§ط©طŒ ط§ظ„ط؛ط´ط§ط،طŒ ط§ظ„ظ…ظٹطھظˆظƒظˆظ†ط¯ط±ظٹط§)',
    subtitleEn: 'Compare plant and animal cells, examining organelle functions.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-1',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 1: ط·ط¨ظٹط¹ط© ط§ظ„ظ…ط§ط¯ط© ظˆط§ظ„ط°ط±ط§طھ ظˆط§ظ„ط¹ظ†ط§طµط± ظˆط§ظ„ظ…ط±ظƒط¨ط§طھ',
    prerequisiteTitleEn: 'Lecture 1: Nature of Matter: Atoms, Elements & Compounds',
    keyConceptsAr: ['ظ†ط¸ط±ظٹط© ط§ظ„ط®ظ„ظٹط©: ط§ظ„ط®ظ„ظٹط© ظˆط­ط¯ط© ط§ظ„طھط±ظƒظٹط¨ ظˆط§ظ„ظˆط¸ظٹظپط© ظپظٹ ط§ظ„ظƒط§ط¦ظ†ط§طھ ط§ظ„ط­ظٹط©', 'ط§ظ„ظ†ظˆط§ط© ظƒظ…ط±ظƒط² ظ„ظ„طھط­ظƒظ… ط¨ط§ظ„ط®ظ„ظٹط© ظˆط§ط­طھظˆط§ط، ط§ظ„ظ…ط§ط¯ط© ط§ظ„ظˆط±ط§ط«ظٹط©', 'ط§ظ„ظ…ظٹطھظˆظƒظˆظ†ط¯ط±ظٹط§ ظ…طµظ†ط¹ ط§ظ„ط·ط§ظ‚ط© ظپظٹ ط§ظ„ط®ظ„ظٹط©', 'ط§ظ„ظپط±ظˆظ‚ ط¨ظٹظ† ط§ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ظˆط§ظ„ط­ظٹظˆط§ظ†ظٹط© (ط§ظ„ط¬ط¯ط§ط± ط§ظ„ط®ظ„ظˆظٹ ظˆط§ظ„ط¨ظ„ط§ط³طھظٹط¯ط§طھ ط§ظ„ط®ط¶ط±ط§ط،)'],
    keyConceptsEn: ['Cell Theory', 'Nucleus Control Center', 'Mitochondria Powerhouse', 'Plant vs Animal Cell Distinctions'],
    summaryAr: 'ط§ظ„ظƒط§ط¦ظ†ط§طھ ط§ظ„ط­ظٹط© ط¬ظ…ظٹط¹ظ‡ط§طŒ ظ…ظ† ط£طµط؛ط± ط¨ظƒطھظٹط±ظٹط§ ط¥ظ„ظ‰ ط£ط¶ط®ظ… ط­ظˆطھطŒ طھطھظƒظˆظ† ظ…ظ† ط®ظ„ط§ظٹط§ ط­ظٹط© طھط¤ط¯ظٹ ظƒط§ظپط© ظˆط¸ط§ط¦ظپ ط§ظ„ط­ظٹط§ط© ظˆط§ظ„طھظ†ظپط³ ظˆط¥ظ†طھط§ط¬ ط§ظ„ط·ط§ظ‚ط©.',
    summaryEn: 'Explore cellular architecture and compare photosynthetic plant cells with animal cells.',
    sections: [
      {
        titleAr: '1. ط§ظ„ظ…ظ‚ط§ط±ظ†ط© ط¨ظٹظ† ط§ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ظˆط§ظ„ط­ظٹظˆط§ظ†ظٹط©',
        titleEn: '1. Plant vs Animal Cell Comparison',
        contentAr: 'طھطھظ…ظٹط² ط§ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ط¨ظˆط¬ظˆط¯ ط¬ط¯ط§ط± ط®ظ„ظˆظٹ طµظ„ط¨ ظٹط¹ط·ظٹظ‡ط§ ط´ظƒظ„ط§ظ‹ ط«ط§ط¨طھط§ظ‹طŒ ظˆط¨ظ„ط§ط³طھظٹط¯ط§طھ ط®ط¶ط±ط§ط، طھظ‚ظˆظ… ط¨ط¹ظ…ظ„ظٹط© ط§ظ„ط¨ظ†ط§ط، ط§ظ„ط¶ظˆط¦ظٹ ظ„طµظ†ط¹ ط§ظ„ط؛ط°ط§ط،طŒ ظˆظپط¬ظˆط© ط¹طµط§ط±ظٹط© ظ…ط±ظƒط²ظٹط© ظƒط¨ظٹط±ط©.',
        contentEn: 'Plant cells uniquely possess a rigid cellulose wall, chloroplasts for photosynthesis, and a large vacuole.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ظˆط¸ط§ط¦ظپ ط§ظ„ط¹ط¶ظٹط§طھ ط§ظ„ط®ظ„ظˆظٹط©',
          titleEn: 'Worked Example: Organelle Diagnostics',
          equation: 'ط§ظ„ط¨ظ„ط§ط³طھظٹط¯ط§طھ ط§ظ„ط®ط¶ط±ط§ط، + ط¶ظˆط، ط§ظ„ط´ظ…ط³ = ط³ظƒط± ظˆط؛ط°ط§ط، (ظ†ط¨ط§طھ ظپظ‚ط·)',
          steps: [
            { stepNumber: 1, textAr: 'ظپط­طµ ط¹ظٹظ†ط© طھط­طھ ط§ظ„ظ…ط¬ظ‡ط±: ظˆط¬ط¯ظ†ط§ ط¬ط¯ط§ط±ط§ظ‹ ط®ظ„ظˆظٹط§ظ‹ ظˆط¨ظ„ط§ط³طھظٹط¯ط§طھ ط®ط¶ط±ط§ط،.', textEn: 'Microscopic inspection reveals rigid cell wall and green chloroplasts.' },
            { stepNumber: 2, textAr: 'ط§ظ„ط§ط³طھظ†طھط§ط¬: ظ‡ط°ظ‡ ط®ظ„ظٹط© ظ†ط¨ط§طھظٹط© ظ‚ط§ط¯ط±ط© ط¹ظ„ظ‰ طµظ†ط¹ ط؛ط°ط§ط¦ظ‡ط§ ط¨ظ†ظپط³ظ‡ط§.', textEn: 'Conclusion: This is a plant cell capable of autotrophic photosynthesis.' }
          ],
          takeawayAr: 'ط§ظ„ط¬ط¯ط§ط± ط§ظ„ط®ظ„ظˆظٹ ظˆط§ظ„ط¨ظ„ط§ط³طھظٹط¯ط§طھ ط§ظ„ط®ط¶ط±ط§ط، ظ…ظٹط²طھط§ظ† ط­ط§ط³ظ…طھط§ظ† ظ„ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ظ„ط§ طھظˆط¬ط¯ط§ظ† ظپظٹ ط§ظ„ط®ظ„ظٹط© ط§ظ„ط­ظٹظˆط§ظ†ظٹط©.',
          takeawayEn: 'Cell walls and chloroplasts uniquely distinguish plant from animal cells.'
        },
        tipsAr: ['ط§ظ„ظ…ظٹطھظˆظƒظˆظ†ط¯ط±ظٹط§ طھظˆط¬ط¯ ظپظٹ ظƒظ„ط§ ط§ظ„ظ†ظˆط¹ظٹظ† ظ„ط£ظ†ظ‡ط§ ظ…ط³ط¤ظˆظ„ط© ط¹ظ† ط­ط±ظ‚ ط§ظ„ط؛ط°ط§ط، ظ„طھظˆظ„ظٹط¯ ط§ظ„ط·ط§ظ‚ط©.'],
        tipsEn: ['Mitochondria populate both plant and animal cells for cellular respiration.']
      }
    ],
    assessment: {
      id: 'quiz-sci-2',
      lectureId: 'sci-2',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ†ظٹط©: ط§ظ„ط®ظ„ظٹط© ط§ظ„ط­ظٹط©',
      titleEn: 'Lecture 2 Assessment: Cell Biology',
      passingScore: 80,
      questions: [
        {
          id: 'qsc2-1',
          textAr: 'ط£ظٹ ظ…ظ† ط§ظ„طھط±ط§ظƒظٹط¨ ط§ظ„طھط§ظ„ظٹط© ظٹظˆط¬ط¯ ظپظٹ ط§ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ظˆظ„ط§ ظٹظˆط¬ط¯ ظپظٹ ط§ظ„ط®ظ„ظٹط© ط§ظ„ط­ظٹظˆط§ظ†ظٹط©طں',
          textEn: 'Which organelle is found in plant cells but absent in animal cells?',
          optionsAr: ['ط§ظ„ط¬ط¯ط§ط± ط§ظ„ط®ظ„ظˆظٹ ظˆط§ظ„ط¨ظ„ط§ط³طھظٹط¯ط§طھ ط§ظ„ط®ط¶ط±ط§ط،', 'ط§ظ„ط؛ط´ط§ط، ط§ظ„ط¨ظ„ط§ط²ظ…ظٹ', 'ط§ظ„ظ†ظˆط§ط© ظˆط§ظ„ظ…ط§ط¯ط© ط§ظ„ظˆط±ط§ط«ظٹط©', 'ط§ظ„ظ…ظٹطھظˆظƒظˆظ†ط¯ط±ظٹط§'],
          optionsEn: ['Cell wall and chloroplasts', 'Plasma membrane', 'Nucleus', 'Mitochondria'],
          correctIndex: 0,
          conceptTestedAr: 'ط§ظ„ظپط±ظˆظ‚ ط¨ظٹظ† ط§ظ„ط®ظ„ظٹط© ط§ظ„ظ†ط¨ط§طھظٹط© ظˆط§ظ„ط­ظٹظˆط§ظ†ظٹط©',
          conceptTestedEn: 'Plant Cell Specific Structures',
          explanationAr: 'ط§ظ„ط¬ط¯ط§ط± ط§ظ„ط®ظ„ظˆظٹ ظˆط§ظ„ط¨ظ„ط§ط³طھظٹط¯ط§طھ ط§ظ„ط®ط¶ط±ط§ط، طھظˆط¬ط¯ ط­طµط±ظٹط§ظ‹ ظپظٹ ط§ظ„ط®ظ„ط§ظٹط§ ط§ظ„ظ†ط¨ط§طھظٹط© ظ„ط­ظ…ط§ظٹطھظ‡ط§ ظˆطھظ…ظƒظٹظ†ظ‡ط§ ظ…ظ† طµظ†ط¹ ط§ظ„ط؛ط°ط§ط،.',
          explanationEn: 'Cell walls and chloroplasts are exclusive to photosynthetic plant cells.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-3',
    order: 3,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ظ‚ظˆظ‰ ظˆط§ظ„ط­ط±ظƒط©: ط§ظ„ظ‚ظˆط© ط§ظ„ظ…ط­طµظ„ط© ظˆظ…ظپظ‡ظˆظ… ط§ظ„ط³ط±ط¹ط© ظˆط§ظ„طھظˆط§ط²ظ†',
    titleEn: 'Lecture 3: Forces & Motion: Net Force, Velocity & Equilibrium',
    subtitleAr: 'ط­ط³ط§ط¨ ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھظˆط³ط·ط©طŒ ظˆظپظ‡ظ… طھط£ط«ظٹط± ط§ظ„ظ‚ظˆظ‰ ط§ظ„ظ…طھط²ظ†ط© ظˆط؛ظٹط± ط§ظ„ظ…طھط²ظ†ط© ط¹ظ„ظ‰ ط­ط±ظƒط© ط§ظ„ط£ط¬ط³ط§ظ…',
    subtitleEn: 'Calculate average speed, evaluate balanced forces, and predict motion states.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-2',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 2: ط§ظ„ط®ظ„ظٹط© ط§ظ„ط­ظٹط©: ط§ظ„ظ„ط¨ظ†ط© ط§ظ„ط£ط³ط§ط³ظٹط© ظ„ط¨ظ†ط§ط، ط§ظ„ظƒط§ط¦ظ†ط§طھ ط§ظ„ط­ظٹط©',
    prerequisiteTitleEn: 'Lecture 2: The Living Cell: Fundamental Building Block of Life',
    keyConceptsAr: ['ظ‚ط§ظ†ظˆظ† ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھظˆط³ط·ط©: ط§ظ„ط³ط±ط¹ط© = ط§ظ„ظ…ط³ط§ظپط© أ· ط§ظ„ط²ظ…ظ†', 'ط§ظ„ظ‚ظˆظ‰ ط§ظ„ظ…طھط²ظ†ط© ظˆظ…ط­طµظ„طھظ‡ط§ ط§ظ„طµظپط±ظٹط© (ط³ظƒظˆظ† ط£ظˆ ط³ط±ط¹ط© ط«ط§ط¨طھط©)', 'ط§ظ„ظ‚ظˆظ‰ ط؛ظٹط± ط§ظ„ظ…طھط²ظ†ط© ظˆط¥ط­ط¯ط§ط« ط§ظ„طھط³ط§ط±ط¹ ظˆطھط؛ظٹظٹط± ط§ظ„ط­ط±ظƒط©', 'ظ‚ظˆط© ط§ظ„ط§ط­طھظƒط§ظƒ ظˆط£ط«ط±ظ‡ط§ ظپظٹ ط¥ط¨ط·ط§ط، ط§ظ„ط£ط¬ط³ط§ظ…'],
    keyConceptsEn: ['Speed Formula: Distance / Time', 'Balanced Forces & Equilibrium', 'Unbalanced Forces Causing Acceleration', 'Friction Resistance'],
    summaryAr: 'ط§ظ„ط£ط¬ط³ط§ظ… ظ„ط§ طھط؛ظٹط± ط­ط±ظƒطھظ‡ط§ ظ…ظ† طھظ„ظ‚ط§ط، ظ†ظپط³ظ‡ط§ط› ط§ظ„ظ‚ظˆط© ظ‡ظٹ ط§ظ„ظ…ط¤ط«ط± ط§ظ„ط°ظٹ ظٹط¯ظپط¹ ط£ظˆ ظٹط³ط­ط¨ ط§ظ„ط£ط¬ط³ط§ظ… ظ„طھط³ط±ظٹط¹ظ‡ط§ ط£ظˆ ط¥ط¨ط·ط§ط¦ظ‡ط§ ط£ظˆ طھط؛ظٹظٹط± ط§طھط¬ط§ظ‡ظ‡ط§.',
    summaryEn: 'Analyze how balanced and unbalanced forces alter the kinematics of objects in our everyday environment.',
    sections: [
      {
        titleAr: '1. ط­ط³ط§ط¨ ط§ظ„ط³ط±ط¹ط© ط§ظ„ظ…طھظˆط³ط·ط©',
        titleEn: '1. Calculating Average Speed',
        contentAr: 'ط§ظ„ط³ط±ط¹ط© ظ‡ظٹ ط§ظ„ظ…ط³ط§ظپط© ط§ظ„ظ…ظ‚ط·ظˆط¹ط© ظ…ظ‚ط³ظˆظ…ط© ط¹ظ„ظ‰ ط§ظ„ط²ظ…ظ† ط§ظ„ظ…ط³طھط؛ط±ظ‚ ظ„ظ‚ط·ط¹ظ‡ط§: ط¹ = ظپ أ· ط²طŒ ظˆظˆط­ط¯طھظ‡ط§ ط§ظ„ظ‚ظٹط§ط³ظٹط© ظ‡ظٹ ظ…طھط± ظ„ظƒظ„ ط«ط§ظ†ظٹط© (ظ…/ط«).',
        contentEn: 'Average speed equals total path distance divided by elapsed travel time.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: ط­ط³ط§ط¨ ط³ط±ط¹ط© ط³ظٹط§ط±ط©',
          titleEn: 'Worked Example: Vehicle Speed Computation',
          equation: 'ط§ظ„ط³ط±ط¹ط© = ط§ظ„ظ…ط³ط§ظپط© أ· ط§ظ„ط²ظ…ظ†',
          steps: [
            { stepNumber: 1, textAr: 'ظ‚ط·ط¹طھ ط³ظٹط§ط±ط© ظ…ط³ط§ظپط© 180 ظ…طھط±ط§ظ‹ ط®ظ„ط§ظ„ ط²ظ…ظ† ظ‚ط¯ط±ظ‡ 6 ط«ظˆط§ظ†ظچ.', textEn: 'A car covers 180 meters in 6 seconds.' },
            { stepNumber: 2, textAr: 'ط·ط¨ظ‚ ط§ظ„ظ‚ط§ظ†ظˆظ†: ط§ظ„ط³ط±ط¹ط© = 180 أ· 6 = 30 ظ…/ط«.', textEn: 'Apply formula: Speed = 180 / 6 = 30 m/s.' }
          ],
          takeawayAr: 'ظ„ظ…ط¹ط±ظپط© ط§ظ„ط³ط±ط¹ط©طŒ ظ†ظ‚ط³ظ… ط¯ط§ط¦ظ…ط§ظ‹ ظ…ظ‚ط¯ط§ط± ط§ظ„ظ…ط³ط§ظپط© ط¹ظ„ظ‰ ظ…ظ‚ط¯ط§ط± ط§ظ„ط²ظ…ظ†.',
          takeawayEn: 'Dividing displacement distance by duration yields travel rate.'
        },
        tipsAr: ['طھط£ظƒط¯ ط¯ط§ط¦ظ…ط§ظ‹ ظ…ظ† ظ…ط·ط§ط¨ظ‚ط© ظˆط­ط¯ط§طھ ط§ظ„ظ‚ظٹط§ط³ (ط§ظ„ط£ظ…طھط§ط± ظ…ط¹ ط§ظ„ط«ظˆط§ظ†ظٹطŒ ظˆط§ظ„ظƒظٹظ„ظˆظ…طھط±ط§طھ ظ…ط¹ ط§ظ„ط³ط§ط¹ط§طھ).'],
        tipsEn: ['Always verify unit consistency between distance and time dimensions.']
      }
    ],
    assessment: {
      id: 'quiz-sci-3',
      lectureId: 'sci-3',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط«ط§ظ„ط«ط©: ط§ظ„ظ‚ظˆظ‰ ظˆط§ظ„ط³ط±ط¹ط©',
      titleEn: 'Lecture 3 Assessment: Forces and Speed',
      passingScore: 80,
      questions: [
        {
          id: 'qsc3-1',
          textAr: 'ط¥ط°ط§ ظ‚ط·ط¹طھ ط¯ط±ط§ط¬ط© ظ…ط³ط§ظپط© 100 ظ…طھط± ظپظٹ 10 ط«ظˆط§ظ†ظچطŒ ظپظ…ط§ ظ‡ظٹ ط³ط±ط¹طھظ‡ط§ ط§ظ„ظ…طھظˆط³ط·ط©طں',
          textEn: 'If a cyclist rides 100m in 10s, what is the average speed?',
          optionsAr: ['10 ظ…/ط«', '1000 ظ…/ط«', '90 ظ…/ط«', '5 ظ…/ط«'],
          optionsEn: ['10 m/s', '1000 m/s', '90 m/s', '5 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'طھط·ط¨ظٹظ‚ ظ‚ط§ظ†ظˆظ† ط§ظ„ط³ط±ط¹ط©',
          conceptTestedEn: 'Speed Calculation',
          explanationAr: 'ط§ظ„ط³ط±ط¹ط© = ط§ظ„ظ…ط³ط§ظپط© أ· ط§ظ„ط²ظ…ظ† = 100 أ· 10 = 10 ظ…/ط«.',
          explanationEn: 'Speed = 100m / 10s = 10 m/s.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-4',
    order: 4,
    titleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 4: ط£ط´ظƒط§ظ„ ط§ظ„ط·ط§ظ‚ط© ظˆطھط­ظˆظ„ط§طھظ‡ط§ ظˆظ‚ط§ظ†ظˆظ† ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط£ط³ط§ط³ظٹ',
    titleEn: 'Lecture 4: Energy Forms, Conversions & Conservation Laws',
    subtitleAr: 'ط§ط³طھظƒط´ط§ظپ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط­ط±ظƒظٹط© ظˆط§ظ„ظƒط§ظ…ظ†ط©طŒ ظˆطھطھط¨ط¹ ط³ظ„ط§ط³ظ„ طھط­ظˆظ„ط§طھ ط§ظ„ط·ط§ظ‚ط© ظپظٹ ط§ظ„ط­ظٹط§ط© ط§ظ„ظٹظˆظ…ظٹط©',
    subtitleEn: 'Investigate kinetic and potential energy forms and conservation chains.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-3',
    prerequisiteTitleAr: 'ط§ظ„ظ…ط­ط§ط¶ط±ط© 3: ط§ظ„ظ‚ظˆظ‰ ظˆط§ظ„ط­ط±ظƒط©: ط§ظ„ظ‚ظˆط© ط§ظ„ظ…ط­طµظ„ط© ظˆظ…ظپظ‡ظˆظ… ط§ظ„ط³ط±ط¹ط© ظˆط§ظ„طھظˆط§ط²ظ†',
    prerequisiteTitleEn: 'Lecture 3: Forces & Motion: Net Force, Velocity & Equilibrium',
    keyConceptsAr: ['طھط¹ط±ظٹظپ ط§ظ„ط·ط§ظ‚ط©: ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط¥ط­ط¯ط§ط« طھط؛ظٹظٹط± ط£ظˆ ط¨ط°ظ„ ط´ط؛ظ„', 'ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط­ط±ظƒظٹط© (ط·ط§ظ‚ط© ط§ظ„ط£ط¬ط³ط§ظ… ط§ظ„ظ…طھط­ط±ظƒط©)', 'ط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ ط§ظ„ظƒط§ظ…ظ†ط© (ط·ط§ظ‚ط© ظ…ط®ط²ظˆظ†ط© ط¨ظپط¹ظ„ ط§ظ„ط§ط±طھظپط§ط¹ ط£ظˆ ط§ظ„طھظˆطھط±)', 'ظ‚ط§ظ†ظˆظ† ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط©: ط§ظ„ط·ط§ظ‚ط© ظ„ط§ طھظپظ†ظ‰ ظˆظ„ط§ طھط³طھط­ط¯ط« ظ…ظ† ط§ظ„ط¹ط¯ظ…'],
    keyConceptsEn: ['Definition of Energy', 'Kinetic Energy of Motion', 'Gravitational Potential Energy', 'Conservation of Energy Principle'],
    summaryAr: 'ط§ظ„ط·ط§ظ‚ط© ظ‡ظٹ ط§ظ„ظ…ط­ط±ظƒ ط§ظ„ط£ط³ط§ط³ظٹ ظ„ظƒظ„ ظ…ط§ ظٹط­ط¯ط« ظپظٹ ط§ظ„ط·ط¨ظٹط¹ط©ط› طھظ†طھظ‚ظ„ ظˆطھطھط­ظˆظ„ ظ…ظ† طµظˆط±ط© ظƒظٹظ…ظٹط§ط¦ظٹط© ظˆط­ط±ظƒظٹط© ظˆظƒظ‡ط±ط¨ط§ط¦ظٹط© ط¯ظˆظ† ط£ظ† طھظپظ‚ط¯ ط°ط±ط© ظˆط§ط­ط¯ط© ظ…ظ† ط·ط§ظ‚طھظ‡ط§ ط§ظ„ط¥ط¬ظ…ط§ظ„ظٹط©.',
    summaryEn: 'Energy drives all physical phenomena, dynamically transforming between kinetic, thermal, electrical and potential reservoirs.',
    sections: [
      {
        titleAr: '1. طھط­ظˆظ„ط§طھ ط§ظ„ط·ط§ظ‚ط© ظپظٹ ط§ظ„ط£ط¬ظ‡ط²ط© ط§ظ„ظٹظˆظ…ظٹط©',
        titleEn: '1. Energy Transformation Chains',
        contentAr: 'ظپظٹ ط§ظ„ظ…طµط¨ط§ط­ ط§ظ„ظƒظ‡ط±ط¨ط§ط¦ظٹ: طھطھط­ظˆظ„ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظƒظ‡ط±ط¨ط§ط¦ظٹط© ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط¶ظˆط¦ظٹط© ظˆط·ط§ظ‚ط© ط­ط±ط§ط±ظٹط©. ظˆظپظٹ ط§ظ„ظ…ط±ظˆط­ط©: طھطھط­ظˆظ„ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظƒظ‡ط±ط¨ط§ط¦ظٹط© ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط­ط±ظƒظٹط©.',
        contentEn: 'Electrical devices channel energy across forms: lamps produce light and heat; fans produce kinetic airflow.',
        interactiveExample: {
          titleAr: 'طھط·ط¨ظٹظ‚: طھط­ظˆظ„ ط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط­ط±ظƒط©',
          titleEn: 'Worked Example: Potential to Kinetic Energy Shift',
          equation: 'ط·ط§ظ‚ط© ظˆط¶ط¹ (ظپظٹ ط§ظ„ط£ط¹ظ„ظ‰) -> ط·ط§ظ‚ط© ط­ط±ظƒط© (ط¹ظ†ط¯ ط§ظ„ط³ظ‚ظˆط·)',
          steps: [
            { stepNumber: 1, textAr: 'ظƒط±ط© ظ…ط³طھظ‚ط±ط© ط¹ظ„ظ‰ ط­ط§ظپط© ط·ط§ظˆظ„ط© طھظ…طھظ„ظƒ ط·ط§ظ‚ط© ظˆط¶ط¹ ط¬ط§ط°ط¨ظٹط© ظƒط§ظ…ظ†ط©.', textEn: 'A ball atop a table holds gravitational potential energy.' },
            { stepNumber: 2, textAr: 'ط¹ظ†ط¯ظ…ط§ طھط³ظ‚ط· ط§ظ„ظƒط±ط©طŒ طھطھط­ظˆظ„ ط·ط§ظ‚ط© ط§ظ„ظˆط¶ط¹ طھط¯ط±ظٹط¬ظٹط§ظ‹ ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط­ط±ظƒط© ط³ط±ظٹط¹ط©.', textEn: 'During descent, potential energy transitions to kinetic motion.' }
          ],
          takeawayAr: 'ظ…ط¬ظ…ظˆط¹ ط·ط§ظ‚طھظٹ ط§ظ„ط­ط±ظƒط© ظˆط§ظ„ظˆط¶ط¹ ظٹط¸ظ„ ط«ط§ط¨طھط§ظ‹ ظپظٹ ط§ظ„ظ†ط¸ط§ظ… ظˆظپظ‚ ظ‚ط§ظ†ظˆظ† ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط©.',
          takeawayEn: 'Total mechanical energy remains conserved across transformation steps.'
        },
        tipsAr: ['ط§ظ„ط­ط±ط§ط±ط© ط؛ط§ظ„ط¨ط§ظ‹ ظ…ط§ طھظƒظˆظ† طµظˆط±ط© ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظ…ظپظ‚ظˆط¯ط© ط£ظˆ ط§ظ„ظ…ظ‡ط¯ظˆط±ط© ظپظٹ ظ…ط¹ط¸ظ… طھط­ظˆظ„ط§طھ ط§ظ„ط·ط§ظ‚ط©.'],
        tipsEn: ['Thermal dissipation represents the common waste byproduct in mechanical conversions.']
      }
    ],
    assessment: {
      id: 'quiz-sci-4',
      lectureId: 'sci-4',
      titleAr: 'ط§ظ„ط§ط®طھط¨ط§ط± ط§ظ„ط¥ظ„ط²ط§ظ…ظٹ ظ„ظ„ظ…ط­ط§ط¶ط±ط© ط§ظ„ط±ط§ط¨ط¹ط©: طھط­ظˆظ„ط§طھ ط§ظ„ط·ط§ظ‚ط©',
      titleEn: 'Lecture 4 Assessment: Energy Transformations',
      passingScore: 80,
      questions: [
        {
          id: 'qsc4-1',
          textAr: 'ظ…ط§ ظ‡ظˆ طھط­ظˆظ„ ط§ظ„ط·ط§ظ‚ط© ط§ظ„ط£ط³ط§ط³ظٹ ط§ظ„ط°ظٹ ظٹط­ط¯ط« ظپظٹ ط§ظ„ظ…ط±ظˆط­ط© ط§ظ„ظƒظ‡ط±ط¨ط§ط¦ظٹط©طں',
          textEn: 'What is the primary energy transformation in an electric fan?',
          optionsAr: ['ظ…ظ† ط·ط§ظ‚ط© ظƒظ‡ط±ط¨ط§ط¦ظٹط© ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط­ط±ظƒظٹط©', 'ظ…ظ† ط·ط§ظ‚ط© ظƒظٹظ…ظٹط§ط¦ظٹط© ط¥ظ„ظ‰ ط·ط§ظ‚ط© ظ†ظˆظˆظٹط©', 'ظ…ظ† ط·ط§ظ‚ط© طµظˆطھظٹط© ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط¶ظˆط¦ظٹط©', 'ظ…ظ† ط·ط§ظ‚ط© ظˆط¶ط¹ ط¥ظ„ظ‰ ط·ط§ظ‚ط© ظƒظٹظ…ظٹط§ط¦ظٹط©'],
          optionsEn: ['Electrical to kinetic energy', 'Chemical to nuclear energy', 'Sound to light energy', 'Potential to chemical energy'],
          correctIndex: 0,
          conceptTestedAr: 'طھط­ظˆظ„ط§طھ ط§ظ„ط·ط§ظ‚ط© ظپظٹ ط§ظ„ط£ط¬ظ‡ط²ط©',
          conceptTestedEn: 'Device Energy Conversion',
          explanationAr: 'طھط³طھظ‡ظ„ظƒ ط§ظ„ظ…ط±ظˆط­ط© ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظƒظ‡ط±ط¨ط§ط¦ظٹط© ظ…ظ† ط§ظ„ظ…ظ‚ط¨ط³ ظ„طھط­ط±ظٹظƒ ط±ظٹط´ظ‡ط§ ظˆطھط­ظˆظٹظ„ظ‡ط§ ط¥ظ„ظ‰ ط·ط§ظ‚ط© ط­ط±ظƒظٹط©.',
          explanationEn: 'The fan converts electrical input into mechanical kinetic rotation.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

// Master subject curriculum registry
export const SUBJECT_CURRICULA: Record<Subject, Lecture[]> = {
  PRIMARY_MATH: PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC: PRIMARY_ARABIC_FULL,
  PRIMARY_SCIENCE: PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES: ISLAMIC_STUDIES_FULL,
  MATH: MATH_LECTURES,
  PHYSICS: PHYSICS_LECTURES,
  CHEMISTRY: CHEMISTRY_LECTURES,
  BIOLOGY: BIOLOGY_LECTURES,
  COMPUTER_SCIENCE: COMPUTER_SCIENCE_LECTURES,
  ARABIC_LIT: ARABIC_LIT_LECTURES,
  ARABIC_LANG: ARABIC_LANG_LECTURES,
  GENERAL_SCIENCE: GENERAL_SCIENCE_LECTURES
};

export function getCurriculumForSubject(subject: Subject): Lecture[] {
  return SUBJECT_CURRICULA[subject] || MATH_LECTURES;
}

export function loadSubjectLectures(subject: Subject): Lecture[] {
  const masterCurriculum = getCurriculumForSubject(subject);
  const storageKey = `TEACHER_AI_LECTURES_${subject}`;
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as Lecture[];
      if (Array.isArray(parsed)) {
        return masterCurriculum.map((freshLec) => {
          const found = parsed.find((p) => p.id === freshLec.id);
          if (found) {
            return {
              ...freshLec,
              isLocked: found.isLocked,
              isCompleted: found.isCompleted,
              lastAttempt: found.lastAttempt
            };
          }
          return freshLec;
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  return masterCurriculum;
}

export function saveSubjectLectures(subject: Subject, lectures: Lecture[]): void {
  const storageKey = `TEACHER_AI_LECTURES_${subject}`;
  localStorage.setItem(storageKey, JSON.stringify(lectures));
}

export const INITIAL_LECTURES = MATH_LECTURES;

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  id: 'std-1001',
  name: 'ط¹ظ…ط± ط§ظ„طھظ…ظٹظ…ظٹ',
  nameAr: 'ط¹ظ…ط± ط§ظ„طھظ…ظٹظ…ظٹ',
  nameEn: 'Omar Al-Tamimi',
  age: 16,
  dateOfBirth: '2010-04-15',
  country: 'SA',
  specialization: 'STEM',
  subject: 'PHYSICS',
  gradeLevel: 'G12',
  language: 'ar',
  parentEmail: 'parent.altamimi@example.com',
  isParentVerified: true,
  timeLimitMinutes: 60,
  usedTodayMinutes: 18,
  masteryPoints: 450
};


