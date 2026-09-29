import React, { useState } from 'react';
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
  LogIn,
  Menu,
  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <GraduationCap className="brand-icon" size={26} />
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

        {/* Desktop Student Profile & Session Section */}
        <div className="student-profile-wrapper desktop-only">
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

        {/* Desktop Action Controls */}
        <div className="header-actions desktop-only">
          {/* Language Switcher */}
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

        {/* Mobile Header Right Bar */}
        <div className="mobile-header-bar mobile-only">
          <button 
            type="button" 
            className="mobile-avatar-btn" 
            onClick={onOpenProfile}
            title={t.editProfileTooltip}
          >
            <div className="avatar-circle">
              <User size={16} />
            </div>
            <span className="mobile-points-badge">{profile.masteryPoints} {t.pointsShort}</span>
          </button>

          <button
            type="button"
            className="btn-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer mobile-only">
          {/* Active Student Summary */}
          <div className="mobile-student-summary" onClick={() => { setIsMobileMenuOpen(false); onOpenProfile(); }}>
            <div className="avatar-circle">
              <User size={20} />
            </div>
            <div className="mobile-student-info">
              <div className="mobile-student-name">{displayName}</div>
              <div className="mobile-student-stage">
                {isPrimarySchool
                  ? t.primarySchoolStage
                  : isMiddleSchool
                  ? t.middleSchoolStage
                  : (t.specLabels[profile.specialization] || profile.specialization)}
                {' • '}
                {t.gradeLabels[profile.gradeLevel] || profile.gradeLevel}
              </div>
            </div>
            <div className="student-score">
              <Award size={14} className="score-icon" />
              <span>{profile.masteryPoints} {t.pointsShort}</span>
            </div>
          </div>

          {/* Account Actions */}
          <div className="mobile-account-actions">
            {isLoggedIn ? (
              <>
                {onOpenAuth && (
                  <button
                    type="button"
                    className="btn-mobile-action"
                    onClick={() => { setIsMobileMenuOpen(false); onOpenAuth(); }}
                  >
                    <Users size={16} />
                    <span>{t.switchStudent}</span>
                  </button>
                )}
                {onLogout && (
                  <button
                    type="button"
                    className="btn-mobile-action btn-mobile-logout"
                    onClick={() => { setIsMobileMenuOpen(false); onLogout(); }}
                  >
                    <LogOut size={16} />
                    <span>{t.logout}</span>
                  </button>
                )}
              </>
            ) : (
              onOpenAuth && (
                <button
                  type="button"
                  className="btn-mobile-action btn-mobile-login"
                  onClick={() => { setIsMobileMenuOpen(false); onOpenAuth(); }}
                >
                  <LogIn size={16} />
                  <span>{t.loginOrRegister}</span>
                </button>
              )
            )}
          </div>

          {/* Language Toggle */}
          <div className="mobile-drawer-lang">
            <span className="drawer-section-title">
              <Globe size={15} />
              <span>{isEn ? "Language / اللغة" : "لغة الواجهة والتعلم"}</span>
            </span>
            <div className="mobile-lang-tabs">
              <button
                type="button"
                className={`mobile-lang-tab ${profile.language === 'ar' ? 'active' : ''}`}
                onClick={() => { if (profile.language !== 'ar') onToggleLanguage(); }}
              >
                العربية
              </button>
              <button
                type="button"
                className={`mobile-lang-tab ${profile.language === 'en' ? 'active' : ''}`}
                onClick={() => { if (profile.language !== 'en') onToggleLanguage(); }}
              >
                English
              </button>
            </div>
          </div>

          {/* Primary Quick Actions */}
          <div className="mobile-tools-grid">
            {onOpenTutor && (
              <button
                type="button"
                className="btn-mobile-tool btn-mobile-tutor"
                onClick={() => { setIsMobileMenuOpen(false); onOpenTutor(); }}
              >
                <Sparkles size={18} />
                <span>{t.floatingTutorBtn}</span>
              </button>
            )}

            <button
              type="button"
              className="btn-mobile-tool"
              onClick={() => { setIsMobileMenuOpen(false); onOpenApiKey(); }}
            >
              <Key size={18} />
              <span>{hasApiKey ? t.geminiActive : t.geminiPending}</span>
            </button>

            <button
              type="button"
              className="btn-mobile-tool"
              onClick={() => { setIsMobileMenuOpen(false); onOpenParental(); }}
            >
              <ShieldCheck size={18} />
              <span>{t.parentalBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

