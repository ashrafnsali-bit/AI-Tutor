import React, { useState } from 'react';
import type { AssessmentResult, Lecture, StudentProfile } from '../types';
import { evaluateAssessmentWithGemini } from '../services/geminiService';
import { getTranslations } from '../i18n/translations';
import confetti from 'canvas-confetti';
import { 
  X, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw, 
  Sparkles,
  BookOpen,
  Lock,
  Unlock
} from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  lecture: Lecture;
  profile: StudentProfile;
  apiKey: string;
  onClose: () => void;
  onPassAssessment: (result: AssessmentResult) => void;
  onFailAssessment: (result: AssessmentResult) => void;
  onGoToNextLecture?: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  lecture,
  profile,
  apiKey,
  onClose,
  onPassAssessment,
  onFailAssessment,
  onGoToNextLecture
}) => {
  if (!isOpen) return null;

  const assessment = lecture.assessment;
  const t = getTranslations(profile.language);
  const isEn = profile.language === 'en';

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(lecture.lastAttempt || null);

  // Clear answers when re-taking
  const handleRetake = () => {
    setSelectedAnswers({});
    setResult(null);
  };

  const handleSelectAnswer = (questionId: string, optionIdx: number) => {
    if (result) return; // Prevent changing after submission
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const totalQuestions = assessment.questions.length;
  const isAllAnswered = answeredCount === totalQuestions;

  const handleSubmit = async () => {
    if (!isAllAnswered) return;

    setIsSubmitting(true);
    try {
      const evaluation = await evaluateAssessmentWithGemini(
        lecture,
        assessment.questions,
        selectedAnswers,
        profile,
        apiKey
      );

      const assessmentResult: AssessmentResult = {
        score: evaluation.score,
        totalQuestions,
        correctCount: Math.round((evaluation.score / 100) * totalQuestions),
        passed: evaluation.passed,
        geminiFeedback: evaluation.qualitativeFeedback,
        conceptBreakdown: evaluation.conceptAdvice,
        timestamp: Date.now()
      };

      setResult(assessmentResult);

      if (evaluation.passed) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        onPassAssessment(assessmentResult);
      } else {
        onFailAssessment(assessmentResult);
      }
    } catch (err) {
      console.error('Error during assessment evaluation:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalTitle = (isEn ? assessment.titleEn : assessment.titleAr) || assessment.titleAr || '';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container modal-wide assessment-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className={`modal-icon-badge ${result?.passed ? 'badge-pass' : 'badge-quiz'}`}>
              <Award size={22} />
            </div>
            <div>
              <h2 className="modal-title">{modalTitle}</h2>
              <p className="modal-subtitle">
                {t.passingRequirementNote(assessment.passingScore)}
              </p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body assessment-body">
          {/* Submitting Loading Overlay */}
          {isSubmitting && (
            <div className="gemini-grading-overlay">
              <div className="grading-spinner">
                <Sparkles className="spin-icon" size={36} />
              </div>
              <h3 className="grading-title">{t.gradingOverlayTitle}</h3>
              <p className="grading-desc">{t.gradingOverlayDesc}</p>
            </div>
          )}

          {/* Results Screen */}
          {result && (
            <div className="assessment-results-screen">
              {/* Result Banner */}
              <div className={`result-hero-card ${result.passed ? 'hero-pass' : 'hero-fail'}`}>
                <div className="score-circle-wrapper">
                  <div className="score-circle">
                    <span className="score-number">{result.score}%</span>
                    <span className="score-subtext">{t.scoreFinalLabel}</span>
                  </div>
                </div>

                <div className="hero-text-col">
                  <div className="result-status-tag">
                    {result.passed ? (
                      <>
                        <Unlock size={18} />
                        <span>{t.statusPassUnlocked}</span>
                      </>
                    ) : (
                      <>
                        <Lock size={18} />
                        <span>{t.statusFailLocked}</span>
                      </>
                    )}
                  </div>
                  <h3 className="result-headline">
                    {result.passed ? t.headlinePass : t.headlineFail}
                  </h3>
                  <div className="gemini-feedback-card">
                    <div className="feedback-header">
                      <Sparkles size={16} className="feedback-sparkle" />
                      <span>{t.geminiAdvisorReport}</span>
                    </div>
                    <p className="feedback-body">{result.geminiFeedback}</p>
                  </div>
                </div>
              </div>

              {/* Concept Mastery Breakdown */}
              <div className="concepts-mastery-section">
                <h4 className="section-subtitle">{t.conceptMasteryHeading}</h4>
                <div className="concepts-grid">
                  {result.conceptBreakdown.map((item, idx) => (
                    <div key={idx} className={`concept-result-card ${item.isCorrect ? 'card-mastered' : 'card-needs-work'}`}>
                      <div className="card-top">
                        {item.isCorrect ? (
                          <CheckCircle2 size={18} className="text-emerald" />
                        ) : (
                          <XCircle size={18} className="text-rose" />
                        )}
                        <strong className="concept-name">{item.concept}</strong>
                      </div>
                      <p className="concept-advice">{item.advice}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="results-actions-bar">
                {result.passed ? (
                  <>
                    <button type="button" className="btn-secondary" onClick={handleRetake}>
                      <RotateCcw size={16} />
                      <span>{t.btnRetakeScore}</span>
                    </button>
                    {onGoToNextLecture && (
                      <button 
                        type="button" 
                        className="btn-primary btn-next-direct"
                        onClick={() => {
                          onClose();
                          onGoToNextLecture();
                        }}
                      >
                        <span>{t.btnGoNextDirect}</span>
                        {isEn ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <button type="button" className="btn-secondary" onClick={onClose}>
                      <BookOpen size={16} />
                      <span>{t.btnReviewLecture}</span>
                    </button>
                    <button type="button" className="btn-primary" onClick={handleRetake}>
                      <RotateCcw size={16} />
                      <span>{t.btnRetakeNow}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Questions Taking View */}
          {!result && !isSubmitting && (
            <div className="questions-container">
              {/* Progress Tracker */}
              <div className="quiz-progress-bar-row">
                <span className="quiz-progress-text">
                  {t.quizAnsweredProgress(answeredCount, totalQuestions)}
                </span>
                <div className="quiz-track">
                  <div 
                    className="quiz-fill" 
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Questions List */}
              <div className="questions-list">
                {assessment.questions.map((q, qIndex) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const questionText = (isEn ? q.textEn : q.textAr) || q.textAr || '';
                  const options = (isEn ? q.optionsEn : q.optionsAr) || q.optionsAr || [];
                  const conceptName = (isEn ? q.conceptTestedEn : q.conceptTestedAr) || q.conceptTestedAr || '';
                  const diffLabel = q.difficulty === 'easy' ? t.diffEasy : q.difficulty === 'medium' ? t.diffMedium : t.diffHard;

                  return (
                    <div key={q.id} className={`question-card ${isAnswered ? 'question-answered' : ''}`}>
                      <div className="question-header-row">
                        <div className="q-number-badge">{t.questionNumBadge(qIndex + 1)}</div>
                        <span className="q-concept-tag">🎯 {conceptName}</span>
                        <span className={`q-diff-tag diff-${q.difficulty}`}>
                          {diffLabel}
                        </span>
                      </div>

                      <h4 className="question-text">{questionText}</h4>

                      <div className="options-grid">
                        {options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;

                          return (
                            <label
                              key={optIdx}
                              className={`option-card ${isSelected ? 'option-selected' : ''}`}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                            >
                              <div className="option-radio-circle">
                                {isSelected && <div className="radio-inner-dot"></div>}
                              </div>
                              <span className="option-text">{opt}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Submit Bar */}
              <div className="assessment-submit-bar">
                <div className="submit-hint">
                  {!isAllAnswered ? (
                    <span className="text-amber">
                      {t.warnAnswerAll(totalQuestions - answeredCount)}
                    </span>
                  ) : (
                    <span className="text-emerald">
                      {t.successAnswerAll}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="btn-primary btn-submit-quiz"
                  disabled={!isAllAnswered || isSubmitting}
                  onClick={handleSubmit}
                >
                  <Sparkles size={18} />
                  <span>{t.btnSubmitEvaluation}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
