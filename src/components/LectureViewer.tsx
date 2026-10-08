import React, { useState, useEffect, useMemo } from 'react';
import type { Language, Lecture, StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import { ensureFourExamplesForLecture } from '../services/lectureExampleEnricher';
import {
  BookOpen, Lightbulb, HelpCircle, CheckCircle, Award,
  AlertOctagon, Sparkles, Flame, CheckCircle2, Compass,
  Target, Sprout, BookMarked, FileCheck2, Eye, EyeOff, ChevronDown,
  ChevronUp, Play, SkipForward, Calculator,
  PenTool, Star, Zap, ArrowRight, RefreshCw, X, Layers
} from 'lucide-react';
import { CurriculumDiagramRenderer } from './CurriculumDiagramRenderer';
import { RichContentRenderer } from './RichContentRenderer';

interface LectureViewerProps {
  lecture: Lecture;
  lang: Language;
  profile?: StudentProfile;
  onStartAssessment: () => void;
  onOpenTutor: () => void;
  onNextLecture?: () => void;
  hasNextUnlocked: boolean;
}

function cleanExampleTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/^مثال\s*(تطبيقي)?\s*(\d*\s*من\s*\d*)?[:\s-]*/i, '')
    .replace(/^Worked\s*Example\s*(\d*\s*of\s*\d*)?[:\s-]*/i, '')
    .trim();
}

function cleanLatexMath(mathStr: string): string {
  return mathStr
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\int_\{([^}]+)\}\^\{([^}]+)\}/g, '∫[$1→$2] ')
    .replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, '∫[$1→$2] ')
    .replace(/\\int_\{([^}]+)\}/g, '∫[$1] ')
    .replace(/\\int_([a-zA-Z0-9]+)/g, '∫[$1] ')
    .replace(/\\int\b/g, '∫ ')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\times\b/g, ' × ')
    .replace(/\\div\b/g, ' ÷ ')
    .replace(/\\pm\b/g, ' ± ')
    .replace(/\\leq?\b/g, ' ≤ ')
    .replace(/\\geq?\b/g, ' ≥ ')
    .replace(/\\neq\b/g, ' ≠ ')
    .replace(/\\approx\b/g, ' ≈ ')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\lambda\b/g, 'λ')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\cdot\b/g, '·')
    .replace(/\\,/g, ' ')
    .replace(/\\quad/g, '  ')
    .replace(/\\qquad/g, '   ')
    .replace(/[\$]/g, '')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^4\b/g, '⁴')
    .replace(/\^n\b/g, 'ⁿ')
    .replace(/_0\b/g, '₀')
    .replace(/_1\b/g, '₁')
    .replace(/_2\b/g, '₂')
    .replace(/_a\b/g, 'ₐ')
    .replace(/_b\b/g, 'ᵦ')
    .replace(/_c\b/g, '꜀')
    .replace(/_d\b/g, 'Ꮷ')
    .trim();
}

function renderMathFormattedText(text: string): React.ReactNode {
  if (!text) return null;

  // Split by display math $$...$$ first
  const displaySegments = text.split(/(\$\$[\s\S]*?\$\$)/g);

  return displaySegments.map((dispSegment, dIdx) => {
    if (!dispSegment) return null;

    if (dispSegment.startsWith('$$') && dispSegment.endsWith('$$')) {
      const mathInner = dispSegment.slice(2, -2).trim();
      return (
        <div key={`disp-${dIdx}`} className="math-formula-display" dir="ltr">
          {cleanLatexMath(mathInner)}
        </div>
      );
    }

    const parts = dispSegment.split(/(\*\*.*?\*\*|\$[^\$]+?\$)/g);

    return (
      <React.Fragment key={`frag-${dIdx}`}>
        {parts.map((part, idx) => {
          if (!part) return null;

          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={idx} style={{ color: '#f8fafc', fontWeight: 700 }}>
                {part.slice(2, -2)}
              </strong>
            );
          }

          if (part.startsWith('$') && part.endsWith('$')) {
            const mathContent = part.slice(1, -1);
            return (
              <span key={idx} className="math-formula-inline" dir="ltr">
                {cleanLatexMath(mathContent)}
              </span>
            );
          }

          if (/(\\[a-zA-Z]+|\b[a-zA-Z]\s*=\s*[^,;.]+)/.test(part) && (part.includes('\\') || part.includes('^') || part.includes('='))) {
            const tokens = part.split(/(\\[a-zA-Z]+(?:\^\{?[^}]*\}?|_\{?[^}]*\}?)?|[a-zA-Z]\s*=\s*[^,;.\s]+)/g);
            if (tokens.length > 1) {
              return (
                <React.Fragment key={idx}>
                  {tokens.map((tk, tIdx) => {
                    if (!tk) return null;
                    if (tk.startsWith('\\') || (tk.includes('=') && !/[\u0600-\u06FF]/.test(tk))) {
                      return (
                        <span key={tIdx} className="math-formula-inline" dir="ltr">
                          {cleanLatexMath(tk)}
                        </span>
                      );
                    }
                    return <span key={tIdx}>{tk}</span>;
                  })}
                </React.Fragment>
              );
            }
          }

          return <span key={idx}>{part}</span>;
        })}
      </React.Fragment>
    );
  });
}

export const LectureViewer: React.FC<LectureViewerProps> = ({
  lecture: rawLecture, lang, onStartAssessment, onOpenTutor, onNextLecture, hasNextUnlocked
}) => {
  const lecture = useMemo(() => ensureFourExamplesForLecture(rawLecture), [rawLecture]);
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
  }, [lecture?.id]);

  if (!lecture) {
    return (
      <div className="lecture-viewer-root" style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
        <p>{lang === 'en' ? 'Loading lesson content...' : 'جاري تحميل محتوى الدرس...'}</p>
      </div>
    );
  }

  const title      = (isEn ? lecture.titleEn      : lecture.titleAr)      || lecture.titleAr  || '';
  const subtitle   = (isEn ? lecture.subtitleEn   : lecture.subtitleAr)   || lecture.subtitleAr|| '';
  const summary    = (isEn ? lecture.summaryEn     : lecture.summaryAr)    || lecture.summaryAr || '';
  const keyConcepts= (isEn ? lecture.keyConceptsEn: lecture.keyConceptsAr)|| [];
  const conceptMap = (isEn ? lecture.conceptMapEn : lecture.conceptMapAr) || [];
  const outcomes   = (isEn ? lecture.learningOutcomesEn : lecture.learningOutcomesAr) || [];
  const vocab      = lecture.vocabulary || [];
  const warmup     = (isEn ? lecture.warmupHookEn : lecture.warmupHookAr) || '';
  const unitTitle  = (isEn ? lecture.unitTitleEn : lecture.unitTitleAr) || '';
  const hasFourInteractiveExamples =
    (lecture.sections || []).filter((section) => (section.interactiveExample?.steps?.length || 0) > 0).length >= 4;

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
            {hasFourInteractiveExamples && (
              <span className="lesson-meta-badge badge-examples-guarantee" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)', fontWeight: 600 }}>
                <Calculator size={13} />
                {isEn ? '4 Step-by-Step Worked Examples' : '🎯 4 أمثلة توضيحية تفاعلية محلولة'}
              </span>
            )}
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

      {/* ═══ LECTURE SOLVED / NEXT LECTURE DIRECT BANNER ═══ */}
      {lecture.isCompleted && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.08) 100%)',
          border: '1.5px solid rgba(16, 185, 129, 0.4)',
          borderRadius: '14px',
          padding: '1rem 1.25rem',
          margin: '1.25rem 0 1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
              flexShrink: 0
            }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.05rem', marginBottom: '2px' }}>
                {isEn ? '✓ Lecture Solved and Passed Successfully!' : '✓ تم حل هذه المحاضرة واجتياز التقييم بنجاح!'}
              </div>
              <div style={{ fontSize: '0.84rem', color: '#a7f3d0' }}>
                {isEn
                  ? `Achievement score: ${lecture.lastAttempt?.score || 100}% • The next lecture is unlocked and ready for you.`
                  : `درجة الإنجاز: ${lecture.lastAttempt?.score || 100}% • المحاضرة التالية مفتوحة وجاهزة للدراسة.`}
              </div>
            </div>
          </div>

          {hasNextUnlocked && onNextLecture && (
            <button
              type="button"
              onClick={onNextLecture}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '0.7rem 1.35rem',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.2s'
              }}
            >
              <span>{isEn ? 'Go to Next Lesson' : 'الانتقال للمحاضرة القادمة'}</span>
              <ArrowRight size={17} />
            </button>
          )}
        </div>
      )}

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
                        <span>{isEn ? `Example ${secIdx + 1} of 4` : `مثال ${secIdx + 1} من 4`}</span>
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
                      <div key={pi} className="section-para">
                        {renderMathFormattedText(para)}
                      </div>
                    ))}
                  </div>

                  {/* ── CURRICULUM ILLUSTRATION & SCIENTIFIC DIAGRAM ── */}
                  {sec.diagram && (
                    <CurriculumDiagramRenderer diagram={sec.diagram} lang={lang} />
                  )}

                  {/* ── INTERACTIVE WORKED EXAMPLE (Step-by-Step) ── */}
                  {ex && (
                    <div className="worked-example-card">
                      {/* Card Header */}
                      <div className="we-header">
                        <div className="we-header-left">
                          <div className="we-icon-wrap">
                            <Calculator size={18} />
                          </div>
                          <div className="we-title-group">
                            <span className="we-label">
                              <Sparkles size={13} />
                              {isEn ? `Interactive Example ${secIdx + 1} of 4` : `مثال توضيحي تفاعلي (${secIdx + 1} من 4)`}
                            </span>
                            <h4 className="we-title">
                              {cleanExampleTitle(isEn ? ex.titleEn : ex.titleAr)}
                            </h4>
                          </div>
                        </div>

                        {/* Step Count Chip */}
                        <div className="we-step-counter-chip">
                          {isEn
                            ? `Step ${(activeExampleStep[exKey] ?? 0) + 1} of ${ex.steps.length}`
                            : `الخطوة ${(activeExampleStep[exKey] ?? 0) + 1} من ${ex.steps.length}`}
                        </div>
                      </div>

                      {/* Problem Statement / Formula Banner */}
                      {ex.equation && (
                        <div className="we-problem-statement">
                          <div className="we-problem-tag-row">
                            <BookOpen size={14} />
                            <span>{isEn ? 'Problem / Governing Rule' : 'نص المسألة / القاعدة الرياضية'}</span>
                          </div>
                          <div className="we-problem-content">
                            {renderMathFormattedText(ex.equation)}
                          </div>
                        </div>
                      )}

                      {/* Step-by-Step Progress */}
                      <div className="we-steps-progress">
                        {ex.steps.map((_, sIdx) => (
                          <div
                            key={sIdx}
                            className={`we-step-dot ${sIdx <= currentStep || allShown ? 'step-dot-active' : ''} ${sIdx === currentStep && !allShown ? 'step-dot-current' : ''}`}
                            title={`الخطوة ${sIdx + 1}`}
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
                                <p className="we-step-text">
                                  {renderMathFormattedText(stepText)}
                                </p>
                                {stepNote && (
                                  <span className="we-step-note">
                                    <Lightbulb size={12} /> {stepNote}
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
                            <Play size={15} />
                            {isEn ? 'Next Step' : 'الخطوة التالية'}
                          </button>
                        ) : !allShown ? (
                          <button
                            type="button"
                            className="we-btn-next we-btn-finish"
                            onClick={() => setShowAllSteps(p => ({ ...p, [exKey]: true }))}
                          >
                            <SkipForward size={15} />
                            {isEn ? 'Show All Steps' : 'عرض جميع الخطوات'}
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
                          <RefreshCw size={14} />
                          {isEn ? 'Restart' : 'إعادة'}
                        </button>
                      </div>

                      {/* Golden Takeaway */}
                      {ex.takeawayAr && (
                        <div className="we-takeaway">
                          <Star size={16} className="takeaway-star" />
                          <div className="takeaway-content" style={{ flex: 1 }}>
                            <div className="takeaway-title" style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: 800, marginBottom: '0.2rem' }}>
                              {isEn ? 'Golden Pedagogical Takeaway' : 'الفائدة التربوية الذهبية'}
                            </div>
                            <p className="takeaway-text">
                              {renderMathFormattedText(isEn ? ex.takeawayEn : ex.takeawayAr)}
                            </p>
                          </div>
                        </div>
                      )}
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
                    const opts        = (isEn ? check.optionsEn : check.optionsAr) || check.optionsAr || check.optionsEn || [];
                    const qText       = (isEn ? check.questionEn : check.questionAr) || check.questionAr || '';
                    const explanation = (isEn ? check.explanationEn : check.explanationAr) || check.explanationAr || '';
                    const hint        = (isEn ? check.hintEn : check.hintAr) || check.hintAr || '';
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
          <div className="content-section-card" style={{ padding: '1.75rem', lineHeight: '1.8' }}>
            <RichContentRenderer
              content={(isEn ? (lecture.mainContentEn || lecture.mainContentAr) : (lecture.mainContentAr || lecture.mainContentEn)) || ''}
              isEn={isEn}
            />
          </div>
        )}
      </section>

      {/* ═══ STANDALONE WORKED EXAMPLES (IF SECTIONS EMPTY) ═══ */}
      {(!lecture.sections || lecture.sections.length === 0) && lecture.workedExamples && lecture.workedExamples.length > 0 && (
        <section className="lesson-section worked-examples-section">
          <div className="lesson-section-head" style={{ borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <div className="section-head-icon" style={{ background: '#3b82f6', color: '#fff', borderRadius: '8px', padding: '6px', display: 'flex' }}>
              <Calculator size={18} />
            </div>
            <h2 className="lesson-section-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8' }}>
              {isEn ? '💡 Interactive Worked Examples' : '💡 أمثلة محلولة خطوة بخطوة'}
            </h2>
          </div>

          <div className="worked-examples-grid" style={{ display: 'grid', gap: '1.25rem' }}>
            {lecture.workedExamples.map((ex, exIdx) => {
              const exTitle = isEn ? ex.titleEn : ex.titleAr;
              const probText = (isEn ? (ex.problemEn || ex.problemAr) : (ex.problemAr || ex.problemEn)) || '';
              const steps = (isEn ? (ex.stepByStepSolutionEn || ex.stepsEn || ex.stepByStepSolutionAr || ex.stepsAr) : (ex.stepByStepSolutionAr || ex.stepsAr)) || [];
              const finalAns = (isEn ? (ex.finalAnswerEn || ex.finalAnswerAr) : (ex.finalAnswerAr || ex.finalAnswerEn)) || '';
              const takeaway = (isEn ? (ex.takeawayEn || ex.takeawayAr) : (ex.takeawayAr || ex.takeawayEn)) || '';
              return (
                <div key={ex.id || exIdx} className="worked-example-card" style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '1.25rem' }}>
                  <div className="we-header" style={{ display: 'flex', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem' }}>
                        {isEn ? `Example ${exIdx + 1}` : `مثال ${exIdx + 1}`}
                      </span>
                      <h4 style={{ margin: 0, color: '#f8fafc', fontSize: '1.1rem' }}>{exTitle}</h4>
                    </div>
                  </div>

                  {probText && (
                    <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '10px', marginBottom: '1rem', color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.7' }}>
                      <p style={{ margin: 0 }}>{probText}</p>
                    </div>
                  )}

                  {steps.length > 0 && (
                    <div className="we-steps-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {steps.map((st: string, sIdx: number) => (
                        <div key={sIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: '#141e33', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: isEn ? '3px solid #38bdf8' : 'none', borderRight: !isEn ? '3px solid #38bdf8' : 'none' }}>
                          <span style={{ color: '#38bdf8', fontWeight: 'bold', minWidth: '24px' }}>{sIdx + 1}.</span>
                          <span style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{st}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {finalAns && (
                    <div style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '0.75rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399' }}>
                      <CheckCircle2 size={16} />
                      <span>{isEn ? 'Final Answer:' : 'النتيجة النهائية:'} <strong>{finalAns}</strong></span>
                    </div>
                  )}

                  {takeaway && (
                    <div style={{ marginTop: '0.75rem', color: '#fbbf24', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Star size={14} />
                      <span>{takeaway}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ STANDALONE FORMATIVE ASSESSMENT (IF SECTIONS EMPTY) ═══ */}
      {(!lecture.sections || lecture.sections.length === 0) && lecture.formativeAssessment && lecture.formativeAssessment.length > 0 && (
        <section className="lesson-section formative-section">
          <div className="lesson-section-head" style={{ borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <div className="section-head-icon" style={{ background: '#10b981', color: '#fff', borderRadius: '8px', padding: '6px', display: 'flex' }}>
              <CheckCircle size={18} />
            </div>
            <h2 className="lesson-section-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#34d399' }}>
              {isEn ? '❓ Quick Understanding Checks' : '❓ أسئلة تحقق سريعة'}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {lecture.formativeAssessment.map((q: any, qIdx: number) => {
              const qText = (isEn ? q.questionEn : q.questionAr) || q.questionAr || '';
              const opts = (isEn ? q.optionsEn : q.optionsAr) || q.optionsAr || q.optionsEn || [];
              const rationale = (isEn ? q.rationaleEn : q.rationaleAr) || q.rationaleAr || '';
              const selectedIdx = formativeSelected[q.id];
              const isChecked = formativeChecked[q.id];
              const isCorrect = isChecked && selectedIdx === q.correctIndex;

              return (
                <div key={q.id || qIdx} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '1.25rem' }}>
                  <p style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#f8fafc', marginBottom: '1rem' }}>
                    {qIdx + 1}. {qText}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                    {opts.map((opt: string, oIdx: number) => {
                      let btnBg = '#1e293b';
                      let btnBorder = '#334155';
                      let btnColor = '#cbd5e1';

                      const isSelected = selectedIdx === oIdx;
                      if (isChecked) {
                        if (oIdx === q.correctIndex) {
                          btnBg = 'rgba(16, 185, 129, 0.2)';
                          btnBorder = '#10b981';
                          btnColor = '#34d399';
                        } else if (isSelected) {
                          btnBg = 'rgba(239, 68, 68, 0.2)';
                          btnBorder = '#ef4444';
                          btnColor = '#f87171';
                        }
                      } else if (isSelected) {
                        btnBg = 'rgba(56, 189, 248, 0.2)';
                        btnBorder = '#38bdf8';
                        btnColor = '#38bdf8';
                      }

                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSelectFormativeOption(q.id, oIdx)}
                          style={{
                            background: btnBg,
                            border: `1px solid ${btnBorder}`,
                            color: btnColor,
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            textAlign: 'start',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}
                        >
                          <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    {!isChecked ? (
                      <button
                        type="button"
                        disabled={selectedIdx === undefined}
                        onClick={() => handleCheckFormativeAnswer(q.id)}
                        style={{
                          background: selectedIdx !== undefined ? '#38bdf8' : '#334155',
                          color: selectedIdx !== undefined ? '#0f172a' : '#94a3b8',
                          border: 'none',
                          padding: '0.5rem 1.25rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: selectedIdx !== undefined ? 'pointer' : 'not-allowed',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <CheckCircle2 size={15} />
                        {isEn ? 'Check Answer' : 'تحقق من الإجابة'}
                      </button>
                    ) : (
                      <div style={{ color: isCorrect ? '#34d399' : '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                        {isCorrect ? <CheckCircle size={16} /> : <AlertOctagon size={16} />}
                        <span>{isCorrect ? (isEn ? 'Correct!' : 'إجابة صحيحة!') : (isEn ? 'Incorrect' : 'إجابة غير صحيحة')}</span>
                      </div>
                    )}
                  </div>

                  {isChecked && rationale && (
                    <div style={{ marginTop: '0.75rem', background: '#141e33', padding: '0.75rem', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.9rem' }}>
                      💡 {rationale}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

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
