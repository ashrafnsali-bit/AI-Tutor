import React from 'react';
import type { Language, Lecture, StudentProfile, Subject } from '../types';
import { getTranslations } from '../i18n/translations';
import { getNationalSubjectLabel } from '../data/curriculumCountries';
import { Lock, CheckCircle2, PlayCircle, BookOpen, Award, ArrowDown, Wand2, Clock } from 'lucide-react';

interface LectureRoadmapProps {
  lectures: Lecture[];
  selectedLectureId: string;
  lang: Language;
  profile: StudentProfile;
  onSelectLecture: (lectureId: string) => void;
  onGenerateLecture?: () => void;
  onSwitchSubject?: (subject: Subject) => void;
  onOpenProfile?: () => void;
}

export const LectureRoadmap: React.FC<LectureRoadmapProps> = ({
  lectures,
  selectedLectureId,
  lang,
  profile,
  onSelectLecture,
  onGenerateLecture,
  onSwitchSubject,
  onOpenProfile
}) => {
  const t = getTranslations(lang);
  const isEn = lang === 'en';

  const completedCount = lectures.filter((l) => l.isCompleted).length;
  const progressPercent = Math.round((completedCount / lectures.length) * 100);

  // Dynamic Course Header matching student's active track, country and grade
  const subjectKey = profile?.subject || 'PHYSICS';
  const gradeKey = profile?.gradeLevel || 'G11';
  const specKey = profile?.specialization || 'STEM';
  const countryKey = profile?.country || 'SA';
  const courseSubject = getNationalSubjectLabel(subjectKey, countryKey, gradeKey, lang);
  const courseGrade = t.gradeLabels[gradeKey] || gradeKey;
  const courseTrack = t.specLabels[specKey] || specKey;

  const isPrimarySchool = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(gradeKey);
  const isMiddleSchool = ['G7', 'G8', 'G9'].includes(gradeKey);
  const dynamicCourseName = (isPrimarySchool || isMiddleSchool)
    ? `${courseSubject} • ${courseGrade}`
    : `${courseSubject} • ${courseGrade} (${courseTrack})`;

  // Available subjects based on grade level
  const availableSubjects: Subject[] = isPrimarySchool
    ? ['PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES']
    : isMiddleSchool
    ? ['GENERAL_SCIENCE', 'MATH', 'ARABIC_LANG', 'COMPUTER_SCIENCE']
    : ['PHYSICS', 'MATH', 'CHEMISTRY', 'BIOLOGY', 'COMPUTER_SCIENCE', 'ARABIC_LIT'];

  return (
    <aside className="roadmap-sidebar">
      {/* Course Header */}
      <div className="roadmap-header">
        <div className="roadmap-header-top">
          <div className="roadmap-header-icon-wrap">
            <BookOpen className="roadmap-icon" size={20} />
          </div>
          <div className="roadmap-header-text" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '2px' }}>
              <h3 className="roadmap-title">{t.roadmapTitle}</h3>
              {onOpenProfile && (
                <button
                  type="button"
                  onClick={onOpenProfile}
                  style={{
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    fontSize: '0.72rem',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  title={isEn ? "Change Grade or Track" : "تغيير الصف أو المسار"}
                >
                  {courseGrade} ⚙️
                </button>
              )}
            </div>
            <span className="roadmap-course-name">{dynamicCourseName}</span>

            {/* Quick Interactive Subject Switcher */}
            {onSwitchSubject && (
              <div style={{ marginTop: '8px', position: 'relative' }}>
                <select
                  value={subjectKey}
                  onChange={(e) => onSwitchSubject(e.target.value as Subject)}
                  style={{
                    width: '100%',
                    padding: '6px 10px',
                    paddingRight: isEn ? '24px' : '10px',
                    paddingLeft: isEn ? '10px' : '24px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    appearance: 'auto'
                  }}
                  title={isEn ? "Switch to another subject" : "التبديل إلى مادة أخرى"}
                >
                  {availableSubjects.map((s) => (
                    <option key={s} value={s} style={{ background: '#0f172a', color: '#fff' }}>
                      📚 {getNationalSubjectLabel(s, countryKey, gradeKey, lang)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="roadmap-progress-box">
          <div className="progress-labels">
            <span className="progress-label-text">{t.progressLabel}</span>
            <span className="progress-value">{t.progressCompletedOf(completedCount, lectures.length, progressPercent)}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* Lectures List */}
      <div className="roadmap-list">
        {lectures.map((lecture, index) => {
          const isSelected = lecture.id === selectedLectureId;
          const isLocked = lecture.isLocked;
          const isCompleted = lecture.isCompleted;

          const title = (isEn ? lecture.titleEn : lecture.titleAr) || lecture.titleAr || '';
          const subtitle = (isEn ? lecture.subtitleEn : lecture.subtitleAr) || lecture.subtitleAr || '';

          return (
            <div key={lecture.id} className="roadmap-item-wrapper">
              <div
                className={`roadmap-card ${isSelected ? 'card-selected' : ''} ${
                  isLocked ? 'card-locked' : 'card-unlocked'
                } ${isCompleted ? 'card-completed' : ''}`}
                onClick={() => {
                  if (!isLocked) {
                    onSelectLecture(lecture.id);
                  }
                }}
                role="button"
                tabIndex={isLocked ? -1 : 0}
              >
                {/* Status Indicator Icon */}
                <div className="card-status-col">
                  {isCompleted ? (
                    <div className="status-badge-icon badge-completed" title={t.passedBadge}>
                      <CheckCircle2 size={18} />
                    </div>
                  ) : isLocked ? (
                    <div className="status-badge-icon badge-locked" title={t.lockedGatePill(lecture.passingScoreRequired, index)}>
                      <Lock size={18} />
                    </div>
                  ) : (
                    <div className="status-badge-icon badge-active" title={t.btnLaunchQuiz}>
                      <PlayCircle size={18} />
                    </div>
                  )}
                  <span className="lecture-num-tag">{index + 1}</span>
                </div>

                {/* Content Info */}
                <div className="card-info-col">
                  <div className="card-title-row">
                    <h4 className="card-lecture-title">{title}</h4>
                  </div>
                  <p className="card-lecture-desc">{subtitle}</p>

                  <div className="card-meta-row">
                    <span className="meta-pill duration-pill">
                      <Clock size={11} style={{ marginInlineEnd: '4px' }} />
                      {lecture.durationMinutes} {t.minutesUnit}
                    </span>
                    
                    {isLocked ? (
                      <span className="meta-pill locked-gate-pill">
                        {t.lockedGatePill(lecture.passingScoreRequired, index)}
                      </span>
                    ) : isCompleted ? (
                      <span className="meta-pill score-pass-pill">
                        {t.scorePassPill(lecture.lastAttempt?.score || 100)}
                      </span>
                    ) : lecture.lastAttempt ? (
                      <span className="meta-pill score-fail-pill">
                        {t.scoreFailPill(lecture.lastAttempt.score)}
                      </span>
                    ) : (
                      <span className="meta-pill current-pill">
                        {t.quizRequiredPill}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Connecting line to next lecture */}
              {index < lectures.length - 1 && (
                <div className={`roadmap-connector ${lectures[index + 1].isLocked ? 'connector-locked' : 'connector-unlocked'}`}>
                  <ArrowDown size={14} className="connector-arrow" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AI Generate New Curriculum Lecture Button */}
      {onGenerateLecture && (
        <div className="roadmap-generate-wrap">
          <button
            type="button"
            id="btn-open-generate-lecture"
            className="roadmap-generate-btn"
            onClick={onGenerateLecture}
            title={isEn ? "Generate a new lesson from the official national curriculum" : "توليد درس جديد من المنهج الرسمي"}
          >
            <Wand2 size={16} />
            <span>{isEn ? "Generate New Lesson" : "توليد درس جديد من المنهج"}</span>
          </button>
        </div>
      )}
      {/* Strict Requirement Notice Banner */}
      <div className="roadmap-footer-notice">
        <div className="notice-inner">
          <Award size={16} className="notice-icon" />
          <p className="notice-text">
            <strong>{t.roadmapNoticeTitle}</strong> {t.roadmapNoticeText}
          </p>
        </div>
      </div>
    </aside>
  );
};
