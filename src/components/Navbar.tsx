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
  Users,
  LogOut,
  LogIn
} from 'lucide-react';

interface NavbarProps {
  profile: StudentProfile;
  hasApiKey: boolean;
  isLoggedIn?: boolean;
  onOpenProfile: () => void;
  onOpenApiKey: () => void;
  onOpenParental: () => void;
  onOpenTutor?: () => void;
  onOpenAuth?: () => void;
  onLogout?: () => void;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  hasApiKey,
  isLoggedIn = false,
  onOpenProfile,
  onOpenApiKey,
  onOpenParental,
  onOpenTutor,
  onOpenAuth,
  onLogout,
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

        {/* Student Profile & Session Section */}
        <div className="student-profile-wrapper">
          {/* Student Profile Badge Card */}
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

          {/* User Session Controls */}
          {isLoggedIn ? (
            <div className="user-session-actions">
              {onOpenAuth && (
                <button 
                  type="button" 
                  className="btn-user-action" 
                  onClick={onOpenAuth}
                  title={t.switchStudentTooltip}
                >
                  <Users size={14} />
                  <span>{t.switchStudent}</span>
                </button>
              )}
              {onLogout && (
                <button 
                  type="button" 
                  className="btn-user-action btn-user-logout" 
                  onClick={onLogout}
                  title={t.logoutTooltip}
                >
                  <LogOut size={14} />
                  <span>{t.logout}</span>
                </button>
              )}
            </div>
          ) : (
            onOpenAuth && (
              <button 
                type="button" 
                className="btn-user-action btn-user-login-cta" 
                onClick={onOpenAuth}
                title={t.loginOrRegister}
              >
                <LogIn size={14} />
                <span>{t.loginOrRegister}</span>
              </button>
            )
          )}
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
        </div>
      </div>
    </header>
  );
};

