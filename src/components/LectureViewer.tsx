import React, { useState, useEffect } from 'react';
import type { Language, Lecture, StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import {
  BookOpen, Lightbulb, HelpCircle, CheckCircle, Award,
  AlertOctagon, Sparkles, Flame, CheckCircle2, Compass,
  Target, Sprout, BookMarked, FileCheck2, Eye, EyeOff, ChevronDown,
  ChevronUp, Play, SkipForward, Calculator,
  PenTool, Star, Zap, ArrowRight, RefreshCw, X, Layers
} from 'lucide-react';
import { CurriculumDiagramRenderer } from './CurriculumDiagramRenderer';

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
  lecture, lang, onStartAssessment, onOpenTutor, onNextLecture, hasNextUnlocked
}) => {
  const [formativeSelected, setFormativeSelected] = useState<Record<string, number>>({});
  const [formativeChecked, setFormativeChecked]   = useState<Record<string, boolean>>({});
  const [formativeHints, setFormativeHints]       = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [openSections, setOpenSections]           = useState<Record<number, boolean>>({ 0: true });
  const [activeExampleStep, setActiveExampleStep] = useState<Record<string, number>>({});
  const [showAllSteps, setShowAllSteps]           = useState<Record<string, boolean>>({});

  const t = getTranslations(lang);
  const isEn = lang === 'en';

  useEffect(() => {
    setFormativeSelected({});
    setFormativeChecked({});
    setFormativeHints({});
    setRevealedSolutions({});
    setOpenSections({ 0: true });
    setActiveExampleStep({});
    setShowAllSteps({});
  }, [lecture.id]);

  const title      = (isEn ? lecture.titleEn      : lecture.titleAr)      || lecture.titleAr  || '';
  const subtitle   = (isEn ? lecture.subtitleEn   : lecture.subtitleAr)   || lecture.subtitleAr|| '';
  const summary    = (isEn ? lecture.summaryEn     : lecture.summaryAr)    || lecture.summaryAr || '';
  const keyConcepts= (isEn ? lecture.keyConceptsEn: lecture.keyConceptsAr)|| [];
  const conceptMap = (isEn ? lecture.conceptMapEn : lecture.conceptMapAr) || [];
  const outcomes   = (isEn ? lecture.learningOutcomesEn : lecture.learningOutcomesAr) || [];
  const vocab      = lecture.vocabulary || [];
  const warmup     = (isEn ? lecture.warmupHookEn : lecture.warmupHookAr) || '';
  const unitTitle  = (isEn ? lecture.unitTitleEn : lecture.unitTitleAr) || '';

  const handleSelectFormativeOption = (checkId: string, oIdx: number) => {
    if (!formativeChecked[checkId]) setFormativeSelected(p => ({ ...p, [checkId]: oIdx }));
  };
  const handleCheckFormativeAnswer = (checkId: string) => {
    if (formativeSelected[checkId] !== undefined) setFormativeChecked(p => ({ ...p, [checkId]: true }));
  };
  const handleToggleHint     = (id: string) => setFormativeHints(p => ({ ...p, [id]: !p[id] }));
  const handleToggleSolution = (id: string) => setRevealedSolutions(p => ({ ...p, [id]: !p[id] }));
  const toggleSection        = (idx: number) => setOpenSections(p => ({ ...p, [idx]: !p[idx] }));
  const stepKey              = (secIdx: number, exTitle: string) => `${secIdx}-${exTitle}`;
  const advanceStep = (key: string, total: number) =>
    setActiveExampleStep(p => ({ ...p, [key]: Math.min((p[key] ?? 0) + 1, total - 1) }));
  const resetSteps = (key: string) =>
    setActiveExampleStep(p => ({ ...p, [key]: 0 }));

  const passed = lecture.lastAttempt?.passed;
  const score  = lecture.lastAttempt?.score;

  return (
    <main className="lecture-viewer-root" dir={isEn ? 'ltr' : 'rtl'}>
      {/* ═══ LESSON TITLE HERO ═══ */}
      <header className="lesson-hero-header">
        <div className="lesson-hero-left">
          <div className="lesson-chips-row">
            <div className="lesson-number-chip">
              <BookMarked size={14} />
              <span>{isEn ? lecture.lessonNumberEn : lecture.lessonNumberAr}</span>
            </div>
            {unitTitle && (
              <div className="lesson-unit-chip">
                <Layers size={13} />
                <span>{unitTitle}</span>
              </div>
            )}
          </div>
          <h1 className="lesson-hero-title">{title}</h1>
          <p className="lesson-hero-subtitle">{subtitle}</p>

          <div className="lesson-hero-meta">
            <span className="lesson-meta-badge">
              <Flame size={13} />
              {lecture.durationMinutes} {t.minutesUnit}
            </span>
            {passed !== undefined && (
              <span className={`lesson-meta-badge ${passed ? 'badge-passed' : 'badge-failed'}`}>
                <Star size={13} />
                {passed ? `${score}% ✓` : `${score}% ✗`}
              </span>
            )}
            {lecture.isCompleted && (
              <span className="lesson-meta-badge badge-completed">
                <CheckCircle2 size={13} />
                {isEn ? 'Completed' : 'مكتمل'}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ═══ SECTION 1 — WARM-UP / REAL WORLD HOOK ═══ */}
      {warmup && (
        <section className="lesson-section warmup-section">
          <div className="lesson-section-head warmup-head">
            <div className="section-head-icon warmup-icon-wrap">
              <Zap size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '🌍 Real-World Connection' : '🌍 ربط بالحياة اليومية'}
            </h2>
          </div>
          <div className="warmup-bubble">
            <p className="warmup-text">{warmup}</p>
          </div>
        </section>
      )}

      {/* ═══ SECTION 2 — LEARNING OUTCOMES ═══ */}
      {outcomes.length > 0 && (
        <section className="lesson-section outcomes-section">
          <div className="lesson-section-head outcomes-head">
            <div className="section-head-icon outcomes-icon-wrap">
              <Target size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '🎯 Learning Objectives' : '🎯 أهداف الدرس'}
            </h2>
          </div>
          <div className="outcomes-checklist">
            {outcomes.map((out, i) => (
              <div key={i} className="outcome-item">
                <div className="outcome-check-circle">
                  <CheckCircle2 size={14} />
                </div>
                <span className="outcome-text">{out}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 3 — KEY VOCABULARY (مفردات الدرس) ═══ */}
      {vocab.length > 0 && (
        <section className="lesson-section vocab-section">
          <div className="lesson-section-head vocab-head">
            <div className="section-head-icon vocab-icon-wrap">
              <BookOpen size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '📚 Key Terms & Vocabulary' : '📚 مصطلحات الدرس'}
            </h2>
          </div>
          <div className="vocab-grid">
            {vocab.map((v, i) => (
              <div key={i} className="vocab-card">
                <div className="vocab-term-row">
                  <span className="vocab-term-ar">{v.termAr}</span>
                  {v.termEn !== v.termAr && (
                    <span className="vocab-term-en">{v.termEn}</span>
                  )}
                </div>
                <p className="vocab-definition">
                  {isEn ? v.definitionEn : v.definitionAr}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 4 — LESSON CONTENT SECTIONS ═══ */}
      <section className="lesson-sections-container">
        <div className="lesson-section-head content-head">
          <div className="section-head-icon content-icon-wrap">
            <PenTool size={18} />
          </div>
          <h2 className="lesson-section-title">
            {isEn ? '📖 Lesson Content' : '📖 شرح الدرس'}
          </h2>
        </div>

        {/* Lesson Sections or Markdown Content */}
        {lecture.sections && lecture.sections.length > 0 ? (
          lecture.sections.map((sec, secIdx) => {
            const secTitle   = isEn ? sec.titleEn   : sec.titleAr;
            const secContent = isEn ? sec.contentEn : sec.contentAr;
            const tips       = isEn ? sec.tipsEn    : sec.tipsAr;
            const check      = sec.formativeCheck;
            const ex         = sec.interactiveExample;
            const isOpen     = openSections[secIdx] !== false;
            const exKey      = ex ? stepKey(secIdx, ex.titleAr || '') : '';
            const currentStep = ex ? (activeExampleStep[exKey] ?? 0) : 0;
            const allShown    = ex ? (showAllSteps[exKey] ?? false) : false;

          return (
            <article key={secIdx} className="content-section-card">
              {/* Section Header / Accordion Toggle */}
              <button
                type="button"
                className={`section-accordion-header ${isOpen ? 'accordion-open' : ''}`}
                onClick={() => toggleSection(secIdx)}
              >
                <div className="section-header-main">
                  <div className="section-header-left">
                    <span className="section-number-badge">{secIdx + 1}</span>
                    <span className="section-title-text">{secTitle}</span>
                  </div>
                  <div className="section-header-toggle-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {(sec.diagram || check || ex) && (
                  <div className="section-header-badges-row">
                    {sec.diagram && (
                      <span className="section-has-diagram-badge">
                        <Layers size={12} />
                        <span>{isEn ? 'Diagram' : 'رسم توضيحي'}</span>
                      </span>
                    )}
                    {check && (
                      <span className="section-has-check-badge">
                        <CheckCircle size={12} />
                        <span>{isEn ? 'Quiz' : 'تحقق'}</span>
                      </span>
                    )}
                    {ex && (
                      <span className="section-has-example-badge">
                        <Calculator size={12} />
                        <span>{isEn ? 'Example' : 'مثال'}</span>
                      </span>
                    )}
                  </div>
                )}
              </button>

              {isOpen && (
                <div className="section-body">

                  {/* Main Explanation Text */}
                  <div className="section-explanation">
                    {secContent.split('\n').filter(Boolean).map((para, pi) => (
                      <p key={pi} className="section-para">{para}</p>
                    ))}
                  </div>

                  {/* ── CURRICULUM ILLUSTRATION & SCIENTIFIC DIAGRAM ── */}
                  {sec.diagram && (
                    <CurriculumDiagramRenderer diagram={sec.diagram} lang={lang} />
                  )}

                  {/* ── INTERACTIVE WORKED EXAMPLE (Step-by-Step) ── */}
                  {ex && (
                    <div className="worked-example-card">
                      <div className="we-header">
                        <div className="we-header-left">
                          <div className="we-icon-wrap">
                            <Calculator size={16} />
                          </div>
                          <div>
                            <span className="we-label">{isEn ? 'Worked Example' : 'مثال محلول'}</span>
                            <h4 className="we-title">
                              {isEn ? ex.titleEn : ex.titleAr}
                            </h4>
                          </div>
                        </div>
                        {ex.equation && (
                          <div className="we-equation-badge">
                            {ex.equation}
                          </div>
                        )}
                      </div>

                      {/* Step-by-Step Progress */}
                      <div className="we-steps-progress">
                        {ex.steps.map((_, sIdx) => (
                          <div
                            key={sIdx}
                            className={`we-step-dot ${sIdx <= currentStep || allShown ? 'step-dot-active' : ''} ${sIdx === currentStep && !allShown ? 'step-dot-current' : ''}`}
                          />
                        ))}
                      </div>

                      {/* Steps Display */}
                      <div className="we-steps-list">
                        {ex.steps.map((step, sIdx) => {
                          const visible = allShown || sIdx <= currentStep;
                          if (!visible) return null;
                          const stepText = isEn ? step.textEn : step.textAr;
                          const stepNote = isEn ? step.noteEn : step.noteAr;
                          return (
                            <div
                              key={sIdx}
                              className={`we-step-row ${sIdx === currentStep && !allShown ? 'step-row-highlight' : ''}`}
                            >
                              <div className="we-step-num">{step.stepNumber}</div>
                              <div className="we-step-content">
                                <p className="we-step-text">{stepText}</p>
                                {stepNote && (
                                  <span className="we-step-note">
                                    <Lightbulb size={11} /> {stepNote}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Step Navigation Controls */}
                      <div className="we-nav-controls">
                        {!allShown && currentStep < ex.steps.length - 1 ? (
                          <button
                            type="button"
                            className="we-btn-next"
                            onClick={() => advanceStep(exKey, ex.steps.length)}
                          >
                            <Play size={14} />
                            {isEn ? 'Next Step' : 'الخطوة التالية'}
                          </button>
                        ) : !allShown ? (
                          <button
                            type="button"
                            className="we-btn-next we-btn-finish"
                            onClick={() => setShowAllSteps(p => ({ ...p, [exKey]: true }))}
                          >
                            <SkipForward size={14} />
                            {isEn ? 'See All Steps' : 'عرض جميع الخطوات'}
                          </button>
                        ) : null}
                        <button
                          type="button"
                          className="we-btn-reset"
                          onClick={() => {
                            resetSteps(exKey);
                            setShowAllSteps(p => ({ ...p, [exKey]: false }));
                          }}
                        >
                          <RefreshCw size={13} />
                          {isEn ? 'Restart' : 'إعادة'}
                        </button>
                      </div>

                      {/* Golden Takeaway */}
                      <div className="we-takeaway">
                        <Star size={14} className="takeaway-star" />
                        <p className="takeaway-text">
                          {isEn ? ex.takeawayEn : ex.takeawayAr}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ── TIPS BOX ── */}
                  {tips && tips.length > 0 && (
                    <div className="tips-box-v2">
                      <div className="tips-v2-header">
                        <Lightbulb size={16} className="tips-v2-icon" />
                        <span>{isEn ? 'Key Tips' : 'نصائح مهمة'}</span>
                      </div>
                      <ul className="tips-v2-list">
                        {tips.map((tip, ti) => (
                          <li key={ti} className="tips-v2-item">
                            <span className="tip-dot">◆</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── FORMATIVE CHECK ── */}
                  {check && (() => {
                    const opts        = isEn ? check.optionsEn : check.optionsAr;
                    const qText       = isEn ? check.questionEn : check.questionAr;
                    const explanation = isEn ? check.explanationEn : check.explanationAr;
                    const hint        = isEn ? check.hintEn : check.hintAr;
                    const selectedIdx = formativeSelected[check.id];
                    const isChecked   = formativeChecked[check.id];
                    const isCorrect   = isChecked && selectedIdx === check.correctIndex;
                    const isHintOpen  = formativeHints[check.id];

                    return (
                      <div className="formative-check-v2">
                        <div className="fc-header-v2">
                          <div className="fc-icon-v2">❓</div>
                          <div>
                            <span className="fc-label-v2">
                              {isEn ? 'Check Your Understanding' : 'تحقق من فهمك'}
                            </span>
                            <p className="fc-question-v2">{qText}</p>
                          </div>
                        </div>

                        <div className="fc-options-v2">
                          {opts.map((opt, oIdx) => {
                            let cls = 'fc-option-v2';
                            const isSelected = selectedIdx === oIdx;
                            if (isChecked) {
                              if (oIdx === check.correctIndex) cls += ' fc-opt-correct';
                              else if (isSelected)            cls += ' fc-opt-wrong';
                            } else if (isSelected) {
                              cls += ' fc-opt-selected';
                            }
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                className={cls}
                                onClick={() => handleSelectFormativeOption(check.id, oIdx)}
                              >
                                <span className="fc-opt-letter">
                                  {['أ', 'ب', 'ج', 'د'][oIdx] || String.fromCharCode(65 + oIdx)}
                                </span>
                                <span className="fc-opt-text">{opt}</span>
                                {isChecked && oIdx === check.correctIndex && (
                                  <CheckCircle2 size={14} className="fc-opt-icon-ok" />
                                )}
                                {isChecked && isSelected && oIdx !== check.correctIndex && (
                                  <X size={14} className="fc-opt-icon-err" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="fc-actions-v2">
                          {!isChecked && (
                            <button
                              type="button"
                              className="fc-btn-check"
                              disabled={selectedIdx === undefined}
                              onClick={() => handleCheckFormativeAnswer(check.id)}
                            >
                              <CheckCircle2 size={15} />
                              {isEn ? 'Check Answer' : 'تحقق من الإجابة'}
                            </button>
                          )}
                          {hint && (
                            <button
                              type="button"
                              className="fc-btn-hint"
                              onClick={() => handleToggleHint(check.id)}
                            >
                              <Lightbulb size={14} />
                              {isHintOpen ? (isEn ? 'Hide Hint' : 'إخفاء التلميح') : (isEn ? 'Show Hint' : 'تلميح')}
                            </button>
                          )}
                        </div>

                        {isHintOpen && hint && (
                          <div className="fc-hint-box">
                            <Lightbulb size={13} />
                            <span>{hint}</span>
                          </div>
                        )}

                        {isChecked && (
                          <div className={`fc-feedback-v2 ${isCorrect ? 'fc-correct' : 'fc-wrong'}`}>
                            <div className="fc-feedback-head">
                              {isCorrect
                                ? <><CheckCircle size={16} /> <span>{isEn ? '✅ Correct! Well done!' : '✅ ممتاز! إجابة صحيحة!'}</span></>
                                : <><AlertOctagon size={16} /> <span>{isEn ? '❌ Not quite right.' : '❌ ليست الإجابة الصحيحة.'}</span></>
                              }
                            </div>
                            <p className="fc-feedback-exp">{explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </article>
          );
        })
        ) : (
          <div className="content-section-card" style={{ padding: '1.5rem', lineHeight: '1.8' }}>
            <div 
              className="section-explanation"
              style={{ color: '#e2e8f0', fontSize: '1rem', whiteSpace: 'pre-line' }}
            >
              {(isEn ? (lecture.mainContentEn || lecture.mainContentAr) : (lecture.mainContentAr || lecture.mainContentEn))?.split('\n').filter(Boolean).map((para, pi) => (
                <p key={pi} className="section-para">{para}</p>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ═══ SECTION 5 — LESSON SUMMARY ═══ */}
      {summary && (
        <section className="lesson-section summary-section">
          <div className="lesson-section-head summary-head">
            <div className="section-head-icon summary-icon-wrap">
              <Sprout size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '📝 Lesson Summary' : '📝 ملخص الدرس'}
            </h2>
          </div>
          <div className="summary-card">
            <p className="summary-text">{summary}</p>
          </div>
        </section>
      )}

      {/* ═══ SECTION 6 — KEY CONCEPTS ═══ */}
      {keyConcepts.length > 0 && (
        <section className="lesson-section concepts-section">
          <div className="lesson-section-head concepts-head">
            <div className="section-head-icon concepts-icon-wrap">
              <Layers size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '🔑 Key Concepts' : '🔑 المفاهيم الأساسية'}
            </h2>
          </div>
          <div className="concepts-tags">
            {keyConcepts.map((c, i) => (
              <span key={i} className="concept-tag">{c}</span>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 7 — CONCEPT MAP ═══ */}
      {conceptMap.length > 0 && (
        <section className="lesson-section concept-map-section">
          <div className="lesson-section-head concept-map-head">
            <div className="section-head-icon concept-map-icon-wrap">
              <Compass size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '🗺️ Concept Map' : '🗺️ خريطة المفاهيم'}
            </h2>
          </div>
          <div className="concept-map-v2">
            {conceptMap.map((node, i) => (
              <div key={i} className="concept-map-node-v2">
                <span className="cm-node-num">{i + 1}</span>
                <span className="cm-node-text">{node}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 8 — TEXTBOOK EXERCISES (تدريبات الكتاب) ═══ */}
      {lecture.textbookExercises && lecture.textbookExercises.length > 0 && (
        <section className="lesson-section exercises-section">
          <div className="lesson-section-head exercises-head">
            <div className="section-head-icon exercises-icon-wrap">
              <FileCheck2 size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isEn ? '✏️ Guided Exercises' : '✏️ تدريبات الكتاب المدرسي'}
            </h2>
          </div>

          <div className="exercises-v2-list">
            {lecture.textbookExercises.map((ex, exIdx) => {
              const qText  = (isEn ? (ex.questionEn || ex.problemEn) : (ex.questionAr || ex.problemAr)) || '';
              const steps  = (isEn ? (ex.solutionStepsEn || ex.solutionStepsAr) : ex.solutionStepsAr) || [];
              const answer = (isEn ? (ex.answerEn || ex.finalAnswerEn) : (ex.answerAr || ex.finalAnswerAr)) || '';
              const revealed = revealedSolutions[ex.id];

              return (
                <div key={exIdx} className="exercise-v2-card">
                  <div className="ex-v2-top">
                    <div className="ex-v2-num-badge">
                      {isEn ? `Ex ${exIdx + 1}` : `تمرين ${exIdx + 1}`}
                    </div>
                    <p className="ex-v2-question">{qText}</p>
                  </div>

                  <button
                    type="button"
                    className="ex-v2-toggle-btn"
                    onClick={() => handleToggleSolution(ex.id)}
                  >
                    {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span>
                      {revealed
                        ? (isEn ? 'Hide Solution' : 'إخفاء الحل')
                        : (isEn ? 'Show Step-by-Step Solution' : 'عرض الحل خطوة بخطوة')}
                    </span>
                  </button>

                  {revealed && (
                    <div className="ex-v2-solution">
                      <div className="ex-solution-steps">
                        {steps.map((st, si) => (
                          <div key={si} className="ex-solution-step-row">
                            <span className="ex-sol-step-num">{si + 1}</span>
                            <span className="ex-sol-step-text">{st}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ex-final-answer">
                        <Award size={15} />
                        <span>{isEn ? 'Answer:' : 'الإجابة:'}</span>
                        <strong>{answer}</strong>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ SECTION 9 — SOCRATIC AI TUTOR ═══ */}
      <section className="lesson-section socratic-cta-section">
        <div className="socratic-cta-card">
          <div className="socratic-cta-icon-wrap">
            <HelpCircle size={26} />
          </div>
          <div className="socratic-cta-text">
            <h4 className="socratic-cta-title">{t.socraticCalloutTitle}</h4>
            <p className="socratic-cta-desc">{t.socraticCalloutDesc}</p>
          </div>
          <button type="button" className="socratic-cta-btn" onClick={onOpenTutor}>
            <Sparkles size={16} />
            {t.btnAskSocratic}
          </button>
        </div>
      </section>

      {/* ═══ SECTION 10 — ASSESSMENT CTA ═══ */}
      <section className="lesson-section assessment-launch-section">
        <div className="assessment-launch-card">
          <div className="al-left">
            <div className="al-icon-wrap">
              <BookMarked size={24} />
            </div>
            <div>
              <h3 className="al-title">
                {isEn ? '🏆 Ready for the Assessment?' : '🏆 هل أنت مستعد للتقييم؟'}
              </h3>
              <p className="al-desc">
                {isEn
                  ? `Score ${lecture.passingScoreRequired}% or above to unlock the next lesson.`
                  : `احصل على ${lecture.passingScoreRequired}% أو أعلى لفتح الدرس التالي.`}
              </p>
              {lecture.lastAttempt && (
                <span className={`al-last-attempt ${lecture.lastAttempt.passed ? 'al-passed' : 'al-failed'}`}>
                  {isEn ? `Last attempt: ${lecture.lastAttempt.score}%` : `آخر محاولة: ${lecture.lastAttempt.score}%`}
                </span>
              )}
            </div>
          </div>
          <div className="al-right">
            <button
              id="btn-start-assessment"
              type="button"
              className={`al-btn-primary ${lecture.isCompleted ? 'al-btn-retry' : ''}`}
              onClick={onStartAssessment}
            >
              {lecture.isCompleted ? (
                <><RefreshCw size={17} /> {isEn ? 'Retake' : 'إعادة التقييم'}</>
              ) : (
                <><Play size={17} /> {isEn ? 'Start Assessment' : 'ابدأ التقييم'}</>
              )}
            </button>

            {hasNextUnlocked && onNextLecture && (
              <button
                type="button"
                className="al-btn-next"
                onClick={onNextLecture}
              >
                {isEn ? 'Next Lesson' : 'الدرس التالي'}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
