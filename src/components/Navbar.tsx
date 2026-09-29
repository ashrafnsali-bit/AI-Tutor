import React from 'react';
import type { StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import { 
  GraduationCap, 
  Key, 
  ShieldCheck, 
  User, 
  Award,
  Globe,
  Sparkles,
  UserPlus
} from 'lucide-react';

interface NavbarProps {
  profile: StudentProfile;
  hasApiKey: boolean;
  onOpenProfile: () => void;
  onOpenApiKey: () => void;
  onOpenParental: () => void;
  onOpenTutor?: () => void;
  onOpenAuth?: () => void;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  hasApiKey,
  onOpenProfile,
  onOpenApiKey,
  onOpenParental,
  onOpenTutor,
  onOpenAuth,
  onToggleLanguage
}) => {
  const t = getTranslations(profile.language);
  const isEn = profile.language === 'en';
  const displayName = isEn ? (profile.nameEn || profile.name) : (profile.nameAr || profile.name);
  const isPrimarySchool = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(profile.gradeLevel);
  const isMiddleSchool = ['G7', 'G8', 'G9'].includes(profile.gradeLevel);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <div className="brand-group">
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" size={28} />
            <span className="brand-pulse"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <h1 className="brand-name">{t.brandName}</h1>
              <span className="brand-tag">{t.brandTag}</span>
            </div>
            <p className="brand-subtitle">{t.brandSubtitle}</p>
          </div>
        </div>

        {/* Student Quick Pill */}
        <div className="student-badge-card" onClick={onOpenProfile} title={t.editProfileTooltip}>
          <div className="avatar-circle">
            <User size={18} />
          </div>
          <div className="student-meta">
            <span className="student-name">{displayName}</span>
            <div className="student-tags">
              <span className="tag-spec">
                {isPrimarySchool
                  ? t.primarySchoolStage
                  : isMiddleSchool
                  ? t.middleSchoolStage
                  : (t.specLabels[profile.specialization] || profile.specialization)}
              </span>
              <span className="tag-grade">{t.gradeLabels[profile.gradeLevel] || profile.gradeLevel}</span>
            </div>
          </div>
          <div className="student-score" title={t.masteryPointsTooltip}>
            <Award size={14} className="score-icon" />
            <span>{profile.masteryPoints} {t.pointsShort}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Refined Glassmorphic Language Switcher */}
          <div className="lang-pill-container" title={isEn ? "تبديل اللغة إلى العربية" : "Switch language to English"}>
            <Globe size={15} className="lang-globe-icon" />
            <div className="lang-segments-wrap">
              <button 
                type="button" 
                className={`lang-segment-btn ${profile.language === 'ar' ? 'segment-active' : ''}`}
                onClick={() => { if (profile.language !== 'ar') onToggleLanguage(); }}
              >
                العربية
              </button>
              <button 
                type="button" 
                className={`lang-segment-btn ${profile.language === 'en' ? 'segment-active' : ''}`}
                onClick={() => { if (profile.language !== 'en') onToggleLanguage(); }}
              >
                English
              </button>
            </div>
          </div>

          {/* Quick Socratic Tutor Button */}
          {onOpenTutor && (
            <button
              type="button"
              className="btn-header btn-header-tutor"
              onClick={onOpenTutor}
              title={t.floatingTutorBtn}
            >
              <Sparkles size={16} className="header-sparkle-icon" />
              <span>{t.floatingTutorBtn}</span>
            </button>
          )}

          {/* Gemini API Key Button */}
          <button 
            type="button" 
            className={`btn-header ${hasApiKey ? 'btn-gemini-active' : 'btn-gemini-pending'}`}
            onClick={onOpenApiKey}
            title={hasApiKey ? t.geminiActive : t.geminiPending}
          >
            <Key size={16} />
            <span>{hasApiKey ? t.geminiActive : t.geminiPending}</span>
            <span className={`status-dot ${hasApiKey ? 'dot-active' : 'dot-pending'}`}></span>
          </button>

          {/* Parental Control Button */}
          <button 
            type="button" 
            className="btn-header btn-parental"
            onClick={onOpenParental}
            title={t.parentalBtn}
          >
            <ShieldCheck size={16} className="parental-icon" />
            <span>{t.parentalBtn}</span>
          </button>

          {/* Student Account / Database Registration Button */}
          {onOpenAuth && (
            <button 
              type="button" 
              className="btn-header btn-auth-portal" 
              onClick={onOpenAuth}
              title={isEn ? "Student Account / Register in Database" : "تسجيل طالب جديد أو تسجيل الدخول في قاعدة البيانات"}
              style={{ background: 'rgba(56, 189, 248, 0.12)', borderColor: 'rgba(56, 189, 248, 0.35)', color: '#38bdf8' }}
            >
              <UserPlus size={16} />
              <span>{isEn ? 'Student Portal' : 'تسجيل طالب جديد'}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
