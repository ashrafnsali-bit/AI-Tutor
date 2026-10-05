import React, { useEffect, useState } from 'react';
import type { Language, StudentProfile } from '../types';
import { getStudentSummary, loadAllGrades } from '../services/database';
import type { GradeRecord, StudentSummary } from '../services/database';
import {
  TrendingUp, Award, BookOpen, CheckCircle2, XCircle,
  Clock, BarChart2, Star, Calendar, ChevronDown, ChevronUp,
  Target, Zap, RefreshCw
} from 'lucide-react';

interface ProgressDashboardProps {
  profile: StudentProfile;
  lang: Language;
  onClose: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ profile, lang, onClose }) => {
  const [summary, setSummary] = useState<StudentSummary | null>(null);
  const [grades, setGrades] = useState<GradeRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedGrade, setExpandedGrade] = useState<string | null>(null);
  const isEn = lang === 'en';

  useEffect(() => {
    const load = async () => {
      try {
        const [s, g] = await Promise.all([
          getStudentSummary(profile.id),
          loadAllGrades(profile.id)
        ]);
        setSummary(s);
        setGrades(g);
      } catch {
        setSummary(null);
        setGrades([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [profile.id]);

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString(isEn ? 'en-SA' : 'ar-SA', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'score-excellent';
    if (score >= 80) return 'score-pass';
    if (score >= 60) return 'score-warn';
    return 'score-fail';
  };

  const subjectNames: Record<string, string> = {
    PRIMARY_MATH: isEn ? 'Primary Math' : 'رياضيات ابتدائي',
    PRIMARY_ARABIC: isEn ? 'Primary Arabic' : 'عربي ابتدائي',
    PRIMARY_SCIENCE: isEn ? 'Primary Science' : 'علوم ابتدائي',
    ISLAMIC_STUDIES: isEn ? 'Islamic Studies' : 'تربية إسلامية',
    MATH: isEn ? 'Mathematics' : 'الرياضيات',
    PHYSICS: isEn ? 'Physics' : 'الفيزياء',
    CHEMISTRY: isEn ? 'Chemistry' : 'الكيمياء',
    BIOLOGY: isEn ? 'Biology' : 'الأحياء',
    COMPUTER_SCIENCE: isEn ? 'Computer Science' : 'الحاسب الآلي',
    ARABIC_LIT: isEn ? 'Arabic Literature' : 'الأدب العربي',
    ARABIC_LANG: isEn ? 'Arabic Language' : 'اللغة العربية',
    GENERAL_SCIENCE: isEn ? 'General Science' : 'العلوم العامة',
    GEOGRAPHY: isEn ? 'Geography' : 'الجغرافيا والدراسات البيئية',
    HISTORY: isEn ? 'History' : 'التاريخ',
  };

  return (
    <div className="progress-dashboard-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="progress-dashboard-panel" dir={isEn ? 'ltr' : 'rtl'}>

        {/* Header */}
        <div className="pd-header">
          <div className="pd-header-left">
            <div className="pd-icon-wrap">
              <BarChart2 size={22} />
            </div>
            <div>
              <h2 className="pd-title">{isEn ? 'Progress & Grades' : 'التقدم والدرجات'}</h2>
              <p className="pd-subtitle">{isEn ? profile.nameEn || profile.name : profile.nameAr || profile.name}</p>
            </div>
          </div>
          <button type="button" className="pd-close-btn" onClick={onClose}>✕</button>
        </div>

        {loading ? (
          <div className="pd-loading">
            <RefreshCw size={28} className="spin-icon" />
            <span>{isEn ? 'Loading your grades...' : 'جارٍ تحميل درجاتك...'}</span>
          </div>
        ) : (
          <div className="pd-body">

            {/* SUMMARY CARDS */}
            {summary && (
              <div className="pd-summary-grid">
                <div className="pd-stat-card pd-stat-total">
                  <div className="pd-stat-icon"><Target size={20} /></div>
                  <div className="pd-stat-value">{summary.totalGrades}</div>
                  <div className="pd-stat-label">{isEn ? 'Total Assessments' : 'إجمالي التقييمات'}</div>
                </div>
                <div className="pd-stat-card pd-stat-pass">
                  <div className="pd-stat-icon"><CheckCircle2 size={20} /></div>
                  <div className="pd-stat-value">{summary.passedCount}</div>
                  <div className="pd-stat-label">{isEn ? 'Passed' : 'ناجح'}</div>
                </div>
                <div className="pd-stat-card pd-stat-avg">
                  <div className="pd-stat-icon"><TrendingUp size={20} /></div>
                  <div className="pd-stat-value">{summary.averageScore}%</div>
                  <div className="pd-stat-label">{isEn ? 'Average Score' : 'المعدل العام'}</div>
                </div>
                <div className="pd-stat-card pd-stat-best">
                  <div className="pd-stat-icon"><Star size={20} /></div>
                  <div className="pd-stat-value">{summary.bestScore}%</div>
                  <div className="pd-stat-label">{isEn ? 'Best Score' : 'أعلى درجة'}</div>
                </div>
                {summary.totalStudyMinutes > 0 && (
                  <div className="pd-stat-card pd-stat-time">
                    <div className="pd-stat-icon"><Clock size={20} /></div>
                    <div className="pd-stat-value">{summary.totalStudyMinutes}</div>
                    <div className="pd-stat-label">{isEn ? 'Study Minutes' : 'دقائق الدراسة'}</div>
                  </div>
                )}
              </div>
            )}

            {/* SUBJECT BREAKDOWN */}
            {summary && Object.keys(summary.subjectBreakdown).length > 0 && (
              <section className="pd-section">
                <h3 className="pd-section-title">
                  <BookOpen size={16} />
                  {isEn ? 'Performance by Subject' : 'الأداء حسب المادة'}
                </h3>
                <div className="pd-subject-list">
                  {Object.entries(summary.subjectBreakdown).map(([subj, data]) => (
                    <div key={subj} className="pd-subject-row">
                      <div className="pd-subject-name">{subjectNames[subj] || subj}</div>
                      <div className="pd-subject-bar-wrap">
                        <div className="pd-subject-bar">
                          <div
                            className={`pd-subject-bar-fill ${getScoreColor(data.avgScore)}`}
                            style={{ width: `${data.avgScore}%` }}
                          />
                        </div>
                        <span className="pd-subject-avg">{data.avgScore}%</span>
                      </div>
                      <div className="pd-subject-meta">
                        <span className="pd-meta-count">{data.count} {isEn ? 'attempts' : 'محاولة'}</span>
                        <span className="pd-meta-pass">
                          <CheckCircle2 size={12} /> {data.passed}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* GRADES TABLE */}
            <section className="pd-section">
              <h3 className="pd-section-title">
                <Award size={16} />
                {isEn ? 'Grade History' : 'سجل الدرجات'}
              </h3>

              {grades.length === 0 ? (
                <div className="pd-empty-grades">
                  <Zap size={32} className="pd-empty-icon" />
                  <p>{isEn ? 'No assessments completed yet.' : 'لم تُكمل أي تقييمات بعد.'}</p>
                  <span>{isEn ? 'Complete a lesson assessment to see your grades here.' : 'أكمل تقييم درس لترى درجاتك هنا.'}</span>
                </div>
              ) : (
                <div className="pd-grades-list">
                  {grades.map(g => (
                    <div key={g.id} className={`pd-grade-card ${g.passed ? 'grade-passed' : 'grade-failed'}`}>
                      <div
                        className="pd-grade-header"
                        onClick={() => setExpandedGrade(expandedGrade === g.id ? null : g.id)}
                      >
                        <div className="pd-grade-left">
                          <div className={`pd-grade-score-badge ${getScoreColor(g.score)}`}>
                            {g.score}%
                          </div>
                          <div className="pd-grade-info">
                            <span className="pd-grade-title">{g.lectureTitle}</span>
                            <span className="pd-grade-meta">
                              {subjectNames[g.subject] || g.subject}
                              {' · '}
                              {isEn ? `Attempt ${g.attemptNumber}` : `المحاولة ${g.attemptNumber}`}
                            </span>
                          </div>
                        </div>
                        <div className="pd-grade-right">
                          <span className={`pd-grade-badge ${g.passed ? 'grade-badge-pass' : 'grade-badge-fail'}`}>
                            {g.passed
                              ? <><CheckCircle2 size={12} /> {isEn ? 'Passed' : 'ناجح'}</>
                              : <><XCircle size={12} /> {isEn ? 'Failed' : 'راسب'}</>
                            }
                          </span>
                          {expandedGrade === g.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>

                      {expandedGrade === g.id && (
                        <div className="pd-grade-details">
                          <div className="pd-grade-detail-row">
                            <Calendar size={13} />
                            <span>{formatDate(g.timestamp)}</span>
                          </div>
                          <div className="pd-grade-detail-row">
                            <CheckCircle2 size={13} />
                            <span>
                              {isEn
                                ? `${g.correctCount} of ${g.totalQuestions} correct`
                                : `${g.correctCount} من ${g.totalQuestions} إجابة صحيحة`}
                            </span>
                          </div>
                          <div className="pd-grade-detail-row">
                            <Target size={13} />
                            <span>{g.gradeLevel}</span>
                          </div>
                          {g.feedback && (
                            <div className="pd-grade-feedback">
                              <span className="pd-feedback-label">
                                {isEn ? '🤖 AI Feedback:' : '🤖 تقييم الذكاء الاصطناعي:'}
                              </span>
                              <p className="pd-feedback-text">{g.feedback}</p>
                            </div>
                          )}
                          {g.conceptResults && g.conceptResults.length > 0 && (
                            <div className="pd-concepts-breakdown">
                              <span className="pd-concepts-label">{isEn ? 'Concept Results:' : 'نتائج المفاهيم:'}</span>
                              {g.conceptResults.map((cr, ci) => (
                                <div key={ci} className={`pd-concept-row ${cr.isCorrect ? 'concept-ok' : 'concept-bad'}`}>
                                  {cr.isCorrect ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                                  <span>{cr.concept}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
