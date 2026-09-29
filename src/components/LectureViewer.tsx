import React, { useState, useEffect } from 'react';
import type { Language, Lecture } from '../types';
import { getTranslations } from '../i18n/translations';
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
  Compass
} from 'lucide-react';

interface LectureViewerProps {
  lecture: Lecture;
  lang: Language;
  onStartAssessment: () => void;
  onOpenTutor: () => void;
  onNextLecture?: () => void;
  hasNextUnlocked: boolean;
}

export const LectureViewer: React.FC<LectureViewerProps> = ({
  lecture,
  lang,
  onStartAssessment,
  onOpenTutor,
  onNextLecture,
  hasNextUnlocked
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(0);
  const t = getTranslations(lang);
  const isEn = lang === 'en';

  // Reset steps when switching lecture
  useEffect(() => {
    setActiveStepIndex(0);
    setHighestStepVisited(0);
  }, [lecture.id]);

  const title = (isEn ? lecture.titleEn : lecture.titleAr) || lecture.titleAr || '';
  const subtitle = (isEn ? lecture.subtitleEn : lecture.subtitleAr) || lecture.subtitleAr || '';
  const summary = (isEn ? lecture.summaryEn : lecture.summaryAr) || lecture.summaryAr || '';
  const keyConcepts = (isEn ? lecture.keyConceptsEn : lecture.keyConceptsAr) || lecture.keyConceptsAr || [];

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

  return (
    <main className="lecture-main-content">
      {/* Lecture Title Card */}
      <section className="lecture-header-hero">
        <div className="hero-top-row">
          <span className="lecture-badge-pill">{t.lectureNumBadge(lecture.order)}</span>
          <span className="lecture-duration-tag">{t.sessionDuration(lecture.durationMinutes)}</span>
        </div>

        <h2 className="hero-lecture-title">{title}</h2>
        <p className="hero-lecture-subtitle">{subtitle}</p>

        {/* Key Concepts Pills */}
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

        {/* Summary Quote */}
        <div className="summary-quote-box">
          <p className="summary-quote-text">{summary}</p>
        </div>
      </section>

      {/* Mandatory Assessment Sticky Trigger Card */}
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
                  <span>{isEn ? 'Steps Reviewed' : 'تم استيعاب الخطوات'}</span>
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

      {/* Main Lecture Sections */}
      <div className="lecture-sections-list">
        {lecture.sections.map((section, sIdx) => {
          const sectionTitle = (isEn ? section.titleEn : section.titleAr) || section.titleAr || '';
          const sectionContent = (isEn ? section.contentEn : section.contentAr) || section.contentAr || '';
          const tips = (isEn ? section.tipsEn : section.tipsAr) || section.tipsAr || [];

          return (
            <article key={sIdx} className="lecture-section-card">
              <h3 className="section-title">{sectionTitle}</h3>
              <p className="section-body-text">{sectionContent}</p>

              {/* Interactive Step-by-Step Example */}
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

      {/* Socratic Assistant Callout */}
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
