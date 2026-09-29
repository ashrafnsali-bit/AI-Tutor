import React, { useState, useEffect } from 'react';
import type { Language, Lecture, StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import { getCountryInfo } from '../data/curriculumCountries';
import { 
  BookOpen, 
  Lightbulb, 
  HelpCircle, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  Award, 
  AlertOctagon,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Flame,
  CheckCircle2,
  Compass,
  GraduationCap,
  Building2,
  Calendar,
  Layers,
  Target,
  Sprout,
  BookMarked,
  FileCheck2,
  Eye,
  EyeOff,
  HelpCircle as QuestionIcon
} from 'lucide-react';

interface LectureViewerProps {
  lecture: Lecture;
  lang: Language;
  profile?: StudentProfile;
  onStartAssessment: () => void;
  onOpenTutor: () => void;
  onNextLecture?: () => void;
  hasNextUnlocked: boolean;
}

export const LectureViewer: React.FC<LectureViewerProps> = ({
  lecture,
  lang,
  profile,
  onStartAssessment,
  onOpenTutor,
  onNextLecture,
  hasNextUnlocked
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(0);

  // Interactive Formative Checks State (for "تحقق من فهمك")
  const [formativeSelected, setFormativeSelected] = useState<Record<string, number>>({});
  const [formativeChecked, setFormativeChecked] = useState<Record<string, boolean>>({});
  const [formativeHints, setFormativeHints] = useState<Record<string, boolean>>({});

  // Textbook Exercises Solution Reveal State
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const t = getTranslations(lang);
  const isEn = lang === 'en';
  const countryInfo = getCountryInfo(lecture.country || profile?.country || 'SA');

  // Reset steps & interactive states when switching lecture
  useEffect(() => {
    setActiveStepIndex(0);
    setHighestStepVisited(0);
    setFormativeSelected({});
    setFormativeChecked({});
    setFormativeHints({});
    setRevealedSolutions({});
  }, [lecture.id]);

  const title = (isEn ? lecture.titleEn : lecture.titleAr) || lecture.titleAr || '';
  const subtitle = (isEn ? lecture.subtitleEn : lecture.subtitleAr) || lecture.subtitleAr || '';
  const summary = (isEn ? lecture.summaryEn : lecture.summaryAr) || lecture.summaryAr || '';
  const keyConcepts = (isEn ? lecture.keyConceptsEn : lecture.keyConceptsAr) || lecture.keyConceptsAr || [];

  const warmup = (isEn ? lecture.warmupHookEn : lecture.warmupHookAr) || lecture.warmupHookAr;
  const learningOutcomes = (isEn ? lecture.learningOutcomesEn : lecture.learningOutcomesAr) || lecture.learningOutcomesAr || [];
  const conceptMap = (isEn ? lecture.conceptMapEn : lecture.conceptMapAr) || lecture.conceptMapAr || [];

  const gradeName = isEn 
    ? (lecture.gradeLevelNameEn || profile?.gradeLevel || 'Grade Level')
    : (lecture.gradeLevelNameAr || (profile ? t.gradeLabels[profile.gradeLevel] : '') || 'الصف الدراسي المقرر');

  const termName = isEn
    ? (lecture.termEn || countryInfo.termDefaultEn)
    : (lecture.termAr || countryInfo.termDefaultAr);

  const unitTitle = isEn
    ? (lecture.unitTitleEn || `${t.unitLabel} 1`)
    : (lecture.unitTitleAr || `${t.unitLabel} الأولى`);

  const lessonNumber = isEn
    ? (lecture.lessonNumberEn || `${t.lessonNumberLabel} ${lecture.order}`)
    : (lecture.lessonNumberAr || `${t.lessonNumberLabel} ${lecture.order}`);

  const primaryExample = lecture.sections[0]?.interactiveExample;
  const totalSteps = primaryExample?.steps.length || 0;
  const hasCompletedAllSteps = totalSteps > 0 && highestStepVisited >= totalSteps - 1;

  const handleStepChange = (newIdx: number) => {
    setActiveStepIndex(newIdx);
    setHighestStepVisited((prev) => Math.max(prev, newIdx));
  };

  const scrollToExample = () => {
    const el = document.getElementById('interactive-example-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectFormativeOption = (checkId: string, optIdx: number) => {
    setFormativeSelected((prev) => ({ ...prev, [checkId]: optIdx }));
    // reset checked state if student changes their answer
    setFormativeChecked((prev) => ({ ...prev, [checkId]: false }));
  };

  const handleCheckFormativeAnswer = (checkId: string) => {
    setFormativeChecked((prev) => ({ ...prev, [checkId]: true }));
  };

  const handleToggleHint = (checkId: string) => {
    setFormativeHints((prev) => ({ ...prev, [checkId]: !prev[checkId] }));
  };

  const handleToggleSolution = (exerciseId: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <main className="lecture-main-content">
      {/* 1. Official National Curriculum Accreditation Bar */}
      <section className="curriculum-accreditation-header">
        <div className="accreditation-top-row">
          <div className="ministry-badge">
            <span className="country-flag-icon">{countryInfo.flag}</span>
            <div className="ministry-text-col">
              <span className="ministry-title">{isEn ? countryInfo.ministryEn : countryInfo.ministryAr}</span>
              <span className="curriculum-subtag">{isEn ? countryInfo.systemNameEn : countryInfo.systemNameAr}</span>
            </div>
          </div>
          <div className="accreditation-pills">
            <span className="acc-pill pill-grade">
              <GraduationCap size={14} />
              <span>{gradeName}</span>
            </span>
            <span className="acc-pill pill-term">
              <Calendar size={13} />
              <span>{termName}</span>
            </span>
          </div>
        </div>

        <div className="unit-lesson-locator">
          <span className="locator-unit">
            <Layers size={14} />
            <strong>{t.unitLabel}:</strong> {unitTitle}
          </span>
          <span className="locator-separator">•</span>
          <span className="locator-lesson">
            <BookMarked size={14} />
            <strong>{lessonNumber}</strong>
          </span>
        </div>
      </section>

      {/* 2. Lecture Hero Banner */}
      <section className="lecture-header-hero">
        <div className="hero-top-row">
          <span className="lecture-badge-pill">{t.lectureNumBadge(lecture.order)}</span>
          <span className="lecture-duration-tag">{t.sessionDuration(lecture.durationMinutes)}</span>
        </div>

        <h2 className="hero-lecture-title">{title}</h2>
        <p className="hero-lecture-subtitle">{subtitle}</p>

        {/* Key Concepts Target Pills */}
        <div className="key-concepts-container">
          <span className="concepts-title">{t.keyConceptsHeading}</span>
          <div className="concepts-pills-list">
            {keyConcepts.map((concept, idx) => (
              <span key={idx} className="concept-chip">
                <Sparkles size={14} className="chip-sparkle" />
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Summary Box */}
        <div className="summary-quote-box">
          <p className="summary-quote-text">{summary}</p>
        </div>
      </section>

      {/* 3. Mental Warm-up & Real-World Connection (التهيئة والربط بالواقع) */}
      {warmup && (
        <section className="lecture-warmup-card">
          <div className="warmup-card-header">
            <div className="warmup-icon-circle">
              <Sprout size={20} />
            </div>
            <h3 className="warmup-title">{t.warmupHookHeading}</h3>
          </div>
          <p className="warmup-body-text">{warmup}</p>
        </section>
      )}

      {/* 4. Target Learning Outcomes & Indicators (نواتج التعلم ومؤشرات الأداء) */}
      {learningOutcomes && learningOutcomes.length > 0 && (
        <section className="lecture-outcomes-card">
          <div className="outcomes-card-header">
            <div className="outcomes-icon-circle">
              <Target size={20} />
            </div>
            <h3 className="outcomes-title">{t.learningOutcomesHeading}</h3>
          </div>
          <ul className="outcomes-list">
            {learningOutcomes.map((outcome, idx) => (
              <li key={idx} className="outcome-item">
                <FileCheck2 size={16} className="outcome-check-icon" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Key Vocabulary & Official Definitions (فكرة الدرس والمفردات) */}
      {lecture.vocabulary && lecture.vocabulary.length > 0 && (
        <section className="lecture-vocabulary-card">
          <div className="vocabulary-card-header">
            <div className="vocab-icon-circle">
              <BookOpen size={20} />
            </div>
            <h3 className="vocab-title">{t.lessonIdeaHeading}</h3>
          </div>
          <div className="vocabulary-grid">
            {lecture.vocabulary.map((vItem, vIdx) => {
              const term = isEn ? vItem.termEn : vItem.termAr;
              const def = isEn ? vItem.definitionEn : vItem.definitionAr;
              return (
                <div key={vIdx} className="vocab-item-card">
                  <div className="vocab-term-badge">
                    <span className="term-label-small">{t.vocabularyTerm}</span>
                    <h4 className="vocab-term-name">{term}</h4>
                  </div>
                  <div className="vocab-def-box">
                    <span className="def-label-small">{t.vocabularyDef}</span>
                    <p className="vocab-def-text">{def}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. Mandatory Assessment Gate Banner */}
      <section className={`assessment-trigger-banner ${lecture.isCompleted ? 'banner-completed' : lecture.lastAttempt ? 'banner-retry' : 'banner-pending'}`}>
        <div className="trigger-content">
          <div className="trigger-icon-box">
            {lecture.isCompleted ? (
              <Award size={28} className="trigger-icon-done" />
            ) : lecture.lastAttempt ? (
              <AlertOctagon size={28} className="trigger-icon-retry" />
            ) : (
              <Flame size={28} className="trigger-icon-gate" />
            )}
          </div>
          <div className="trigger-text-col">
            <div className="trigger-badge-row">
              <span className="trigger-badge">{t.gateRequirementBadge}</span>
              {lecture.isCompleted && <span className="trigger-badge-pass">{t.passedBadge}</span>}
              {!lecture.isCompleted && hasCompletedAllSteps && (
                <span className="trigger-badge-ready">
                  <CheckCircle2 size={13} />
                  <span>{isEn ? 'Worked Steps Reviewed' : 'تم استيعاب الخطوات'}</span>
                </span>
              )}
            </div>
            <h3 className="trigger-title">
              {lecture.isCompleted
                ? t.bannerPassedTitle(lecture.lastAttempt?.score || 100)
                : lecture.lastAttempt
                ? t.bannerRetryTitle(lecture.lastAttempt.score)
                : t.bannerPendingTitle(lecture.order)}
            </h3>
            <p className="trigger-desc">
              {lecture.isCompleted
                ? t.bannerPassedDesc
                : lecture.lastAttempt
                ? t.bannerRetryDesc
                : !hasCompletedAllSteps
                ? (isEn 
                    ? 'Recommended: Review the interactive step-by-step example below before attempting the mandatory assessment.' 
                    : 'يُنصح باستعراض خطوات التطبيق العملي التفاعلي بالأسفل لضمان جاهزيتك قبل خوض الاختبار الإلزامي.')
                : t.bannerPendingDesc}
            </p>
          </div>
        </div>

        <div className="trigger-actions">
          {!hasCompletedAllSteps && !lecture.isCompleted && (
            <button 
              type="button" 
              className="btn-secondary btn-review-first"
              onClick={scrollToExample}
              title={isEn ? 'Scroll to worked example' : 'الانتقال إلى خطوات التطبيق العملي'}
            >
              <Compass size={17} />
              <span>{isEn ? 'Explore Steps First' : 'خطوات الحل أولاً'}</span>
            </button>
          )}

          <button 
            type="button" 
            className="btn-primary btn-launch-quiz"
            onClick={onStartAssessment}
          >
            <BookOpen size={18} />
            <span>{lecture.isCompleted ? t.btnRetakeQuiz : lecture.lastAttempt ? t.btnRetryNow : t.btnLaunchQuiz}</span>
          </button>

          {hasNextUnlocked && onNextLecture && (
            <button 
              type="button" 
              className="btn-success btn-next-lecture"
              onClick={onNextLecture}
            >
              <span>{t.btnNextLecture}</span>
              {isEn ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            </button>
          )}
        </div>
      </section>

      {/* 7. Main In-Depth Lecture Sections */}
      <div className="lecture-sections-list">
        <div className="sections-header-divider">
          <BookOpen size={18} />
          <span>{t.detailedExplanationHeading}</span>
        </div>

        {lecture.sections.map((section, sIdx) => {
          const sectionTitle = (isEn ? section.titleEn : section.titleAr) || section.titleAr || '';
          const sectionContent = (isEn ? section.contentEn : section.contentAr) || section.contentAr || '';
          const tips = (isEn ? section.tipsEn : section.tipsAr) || section.tipsAr || [];
          const check = section.formativeCheck;

          return (
            <article key={sIdx} className="lecture-section-card">
              <h3 className="section-title">{sectionTitle}</h3>
              <div className="section-body-text">
                {sectionContent.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="section-paragraph">{paragraph}</p>
                ))}
              </div>

              {/* Interactive Step-by-Step Worked Example */}
              {section.interactiveExample && (() => {
                const example = section.interactiveExample;
                const exampleTitle = (isEn ? example.titleEn : example.titleAr) || example.titleAr || '';
                const exampleTakeaway = (isEn ? example.takeawayEn : example.takeawayAr) || example.takeawayAr || '';
                const activeStep = example.steps[activeStepIndex];
                const stepText = (isEn ? activeStep?.textEn : activeStep?.textAr) || activeStep?.textAr || '';
                const stepNote = (isEn ? activeStep?.noteEn : activeStep?.noteAr) || activeStep?.noteAr;

                return (
                  <div id="interactive-example-section" className="interactive-example-box">
                    <div className="example-header">
                      <div className="example-title-group">
                        <span className="example-pill">{t.practicalExampleBadge}</span>
                        <h4 className="example-heading">{exampleTitle}</h4>
                      </div>
                      {example.equation && (
                        <div className="equation-badge" dir="ltr">
                          <code>{example.equation}</code>
                        </div>
                      )}
                    </div>

                    {/* Steps Visualizer */}
                    <div className="steps-visualizer">
                      <div className="step-display-card">
                        <div className="step-counter-row">
                          <span className="step-counter">
                            {t.stepCounter(activeStepIndex + 1, example.steps.length)}
                          </span>
                          <span className="step-progress-percent">
                            {Math.round(((activeStepIndex + 1) / example.steps.length) * 100)}%
                          </span>
                        </div>
                        <div className="step-main-text">
                          {stepText}
                        </div>
                        {stepNote && (
                          <div className="step-note-box">
                            💡 <strong>{t.mathNote}</strong> {stepNote}
                          </div>
                        )}
                      </div>

                      {/* Numbered Step Buttons Bar */}
                      <div className="step-numbered-tabs">
                        {example.steps.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            className={`step-tab-btn ${dotIdx === activeStepIndex ? 'tab-btn-active' : dotIdx <= highestStepVisited ? 'tab-btn-visited' : ''}`}
                            onClick={() => handleStepChange(dotIdx)}
                            title={`${isEn ? 'Jump to Step' : 'الانتقال للخطوة'} ${dotIdx + 1}`}
                          >
                            <span>{dotIdx + 1}</span>
                          </button>
                        ))}
                      </div>

                      <div className="steps-navigation-bar">
                        <button
                          type="button"
                          className="btn-step-nav"
                          disabled={activeStepIndex === 0}
                          onClick={() => handleStepChange(Math.max(0, activeStepIndex - 1))}
                        >
                          {isEn ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                          <span>{t.btnPrevStep}</span>
                        </button>

                        {activeStepIndex < example.steps.length - 1 ? (
                          <button
                            type="button"
                            className="btn-step-nav btn-step-next-active"
                            onClick={() => handleStepChange(activeStepIndex + 1)}
                          >
                            <span>{t.btnNextStep}</span>
                            {isEn ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                          </button>
                        ) : (
                          <div className="step-completed-badge">
                            <CheckCircle2 size={16} />
                            <span>{isEn ? 'All Steps Reviewed! Ready for Quiz' : 'أكملت جميع الخطوات! جاهز للاختبار'}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="example-takeaway">
                      <span className="takeaway-badge">{t.goldenTakeawayBadge}</span>
                      <p className="takeaway-text">{exampleTakeaway}</p>
                    </div>
                  </div>
                );
              })()}

              {/* Interactive "تحقق من فهمك" (Formative Check) embedded in section */}
              {check && (() => {
                const questionText = isEn ? check.questionEn : check.questionAr;
                const options = isEn ? check.optionsEn : check.optionsAr;
                const explanation = isEn ? check.explanationEn : check.explanationAr;
                const hint = isEn ? check.hintEn : check.hintAr;
                const selectedIdx = formativeSelected[check.id];
                const isChecked = formativeChecked[check.id];
                const isCorrect = isChecked && selectedIdx === check.correctIndex;
                const isWrong = isChecked && selectedIdx !== undefined && selectedIdx !== check.correctIndex;
                const isHintOpen = formativeHints[check.id];

                return (
                  <div className="formative-check-card">
                    <div className="formative-check-header">
                      <div className="formative-title-group">
                        <QuestionIcon size={18} className="formative-icon" />
                        <h4 className="formative-heading">{t.formativeCheckHeading}</h4>
                      </div>
                      <span className="formative-subtitle">{t.formativeCheckSubtitle}</span>
                    </div>

                    <p className="formative-question-text">{questionText}</p>

                    {/* Options List */}
                    <div className="formative-options-grid">
                      {options.map((opt, oIdx) => {
                        const isSelected = selectedIdx === oIdx;
                        let optionClass = 'formative-option-btn';
                        if (isSelected) optionClass += ' option-selected';
                        if (isChecked) {
                          if (oIdx === check.correctIndex) optionClass += ' option-correct';
                          else if (isSelected) optionClass += ' option-wrong';
                        }

                        return (
                          <button
                            key={oIdx}
                            type="button"
                            className={optionClass}
                            onClick={() => handleSelectFormativeOption(check.id, oIdx)}
                          >
                            <span className="option-indicator-circle">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="option-text">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Action & Feedback Row */}
                    <div className="formative-actions-row">
                      <button
                        type="button"
                        className="btn-check-answer"
                        disabled={selectedIdx === undefined}
                        onClick={() => handleCheckFormativeAnswer(check.id)}
                      >
                        <CheckCircle2 size={16} />
                        <span>{t.checkAnswerBtn}</span>
                      </button>

                      {hint && (
                        <button
                          type="button"
                          className="btn-formative-hint"
                          onClick={() => handleToggleHint(check.id)}
                        >
                          <Lightbulb size={15} />
                          <span>{t.showHintBtn}</span>
                        </button>
                      )}
                    </div>

                    {/* Guiding Hint Dropdown */}
                    {isHintOpen && hint && (
                      <div className="formative-hint-box">
                        💡 <strong>تلميح:</strong> {hint}
                      </div>
                    )}

                    {/* Post-Check Feedback Banner */}
                    {isChecked && (
                      <div className={`formative-feedback-box ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
                        <div className="feedback-headline">
                          {isCorrect ? (
                            <>
                              <CheckCircle size={18} className="feedback-icon-ok" />
                              <span>{t.correctFeedback}</span>
                            </>
                          ) : (
                            <>
                              <AlertOctagon size={18} className="feedback-icon-err" />
                              <span>{t.incorrectFeedback}</span>
                            </>
                          )}
                        </div>
                        <p className="feedback-explanation">{explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Tips & Common Pitfalls */}
              {tips && tips.length > 0 && (
                <div className="tips-box">
                  <div className="tips-header">
                    <Lightbulb size={18} className="tips-icon" />
                    <span className="tips-title">{t.tipsHeader}</span>
                  </div>
                  <ul className="tips-list">
                    {tips.map((tip, tIdx) => (
                      <li key={tIdx} className="tip-item">
                        <CheckCircle size={15} className="tip-check" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* 8. Concept Map & Lesson Synthesis (خريطة المفاهيم وخلاصة الدرس) */}
      {conceptMap && conceptMap.length > 0 && (
        <section className="concept-map-card">
          <div className="concept-map-header">
            <Compass size={20} className="map-icon" />
            <h3 className="concept-map-title">{t.conceptMapHeading}</h3>
          </div>
          <div className="concept-map-nodes">
            {conceptMap.map((node, nIdx) => (
              <div key={nIdx} className="concept-node-item">
                <span className="node-number">{nIdx + 1}</span>
                <span className="node-text">{node}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Guided Official Textbook Exercises (تدريبات وأنشطة الكتاب المدرسي المقرر) */}
      {lecture.textbookExercises && lecture.textbookExercises.length > 0 && (
        <section className="textbook-exercises-card">
          <div className="textbook-card-header">
            <FileCheck2 size={20} className="exercises-icon" />
            <h3 className="exercises-title">{t.textbookExercisesHeading}</h3>
          </div>
          <div className="exercises-list">
            {lecture.textbookExercises.map((ex, exIdx) => {
              const qText = isEn ? ex.questionEn : ex.questionAr;
              const steps = isEn ? ex.solutionStepsEn : ex.solutionStepsAr;
              const answer = isEn ? ex.answerEn : ex.answerAr;
              const isRevealed = revealedSolutions[ex.id];

              return (
                <div key={exIdx} className="exercise-box">
                  <div className="exercise-question-row">
                    <span className="exercise-number-badge">تمرين {exIdx + 1}</span>
                    <p className="exercise-question-text">{qText}</p>
                  </div>

                  <button
                    type="button"
                    className="btn-toggle-solution"
                    onClick={() => handleToggleSolution(ex.id)}
                  >
                    {isRevealed ? <EyeOff size={15} /> : <Eye size={15} />}
                    <span>{isRevealed ? t.hideSolutionBtn : t.viewSolutionBtn}</span>
                  </button>

                  {isRevealed && (
                    <div className="exercise-solution-drawer">
                      <span className="solution-drawer-title">خطوات الحل النموذجي المعتمد:</span>
                      <ol className="solution-steps-list">
                        {steps.map((st, stIdx) => (
                          <li key={stIdx} className="solution-step-item">
                            <span>{st}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="solution-final-answer">
                        <strong>النتيجة النهائية المعتمدة:</strong> {answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 10. Socratic Assistant Callout */}
      <section className="socratic-callout-card">
        <div className="callout-content">
          <div className="callout-icon-circle">
            <HelpCircle size={28} />
          </div>
          <div>
            <h4 className="callout-title">{t.socraticCalloutTitle}</h4>
            <p className="callout-desc">{t.socraticCalloutDesc}</p>
          </div>
        </div>
        <button type="button" className="btn-socratic-open" onClick={onOpenTutor}>
          <span>{t.btnAskSocratic}</span>
          <Sparkles size={18} />
        </button>
      </section>
    </main>
  );
};
