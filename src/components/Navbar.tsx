import React, { useState, useRef, useEffect } from 'react';
import type { StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import { getCountryInfo } from '../data/curriculumCountries';
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
  X,
  BarChart2,
  ChevronDown,
  BookOpen,
  Mail,
  Compass
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
  onOpenProgress?: () => void;
  onOpenAdmin?: () => void;
  onOpenContact?: () => void;
  onOpenOnboarding?: () => void;
  onReturnHome?: () => void;
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
  onToggleLanguage,
  onOpenProgress,
  onOpenAdmin,
  onOpenContact,
  onOpenOnboarding,
  onReturnHome
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = getTranslations(profile.language);
  const isEn = profile.language === 'en';
  const displayName = isEn ? (profile.nameEn || profile.name) : (profile.nameAr || profile.name);
  const isPrimarySchool = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(profile.gradeLevel);
  const isMiddleSchool = ['G7', 'G8', 'G9'].includes(profile.gradeLevel);
  const countryInfo = getCountryInfo(profile.country);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const stageLabel = isPrimarySchool
    ? t.primarySchoolStage
    : isMiddleSchool
    ? t.middleSchoolStage
    : (t.specLabels[profile.specialization] || profile.specialization);

  const gradeLabel = t.gradeLabels[profile.gradeLevel] || profile.gradeLevel;

  return (
    <header className="site-header">
      <div className="header-container">
        {/* 1. Brand Section */}
        <div 
          className="brand-group" 
          onClick={onReturnHome || onOpenProfile} 
          style={{ cursor: 'pointer' }} 
          title={isEn ? "Return to Learning Preparation Hub & Switch Subject" : "العودة للصفحة التحضيرية واختيار منهج أو مادة أخرى"}
        >
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" size={24} />
            <span className="brand-pulse"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <span className="brand-name">{t.brandName}</span>
              <span className="brand-tag">AI v3.5</span>
            </div>
          </div>
        </div>

        {/* 2. Center Info Pill: Active Academic Track & Score */}
        <div className="header-center-pill desktop-only" onClick={onOpenProfile} title={t.editProfileTooltip} style={{ cursor: 'pointer' }}>
          <span className="pill-country-badge">
            <span className="pill-flag">{countryInfo.flag}</span>
            <span className="pill-country-name">{isEn ? countryInfo.nameEn : (profile.country === 'EG' ? 'مصر' : (profile.country === 'SA' ? 'السعودية' : countryInfo.nameAr))}</span>
          </span>
          <span className="pill-divider">•</span>
          <span className="pill-academic-track" title={`${stageLabel} - ${gradeLabel}`}>
            {stageLabel}
          </span>
          <span className="pill-divider">•</span>
          <div className="pill-score-badge" title={t.masteryPointsTooltip}>
            <Award size={13} className="pill-score-icon" />
            <span>{profile.masteryPoints} {t.pointsShort}</span>
          </div>
        </div>

        {/* 3. Action Hub */}
        <div className="header-actions desktop-only">
          {/* Quick AI Tutor Trigger */}
          {onOpenTutor && (
            <button
              type="button"
              className="btn-header-tutor-glow"
              onClick={onOpenTutor}
              title={t.floatingTutorBtn}
            >
              <Sparkles size={15} className="tutor-sparkle-icon" />
              <span>{t.floatingTutorBtn}</span>
            </button>
          )}

          {/* Quick Platform Guide & Roadmap Trigger */}
          {onOpenOnboarding && (
            <button
              type="button"
              className="btn-header-guide-glow desktop-extra-wide-only"
              onClick={onOpenOnboarding}
              title={isEn ? "Platform Guide & Learning Roadmap" : "دليل المنصة وخريطة المراحل التعليمية"}
            >
              <Compass size={15} className="guide-compass-icon" />
              <span>{isEn ? 'Guide' : 'دليل المنصة'}</span>
            </button>
          )}

          {/* Quick Admin Dashboard Trigger */}
          {onOpenAdmin && (
            <button
              type="button"
              className="btn-header-admin-glow desktop-extra-wide-only"
              onClick={onOpenAdmin}
              title={isEn ? "Admin Dashboard (Students, Progress & Supervision)" : "لوحة تحكم المشرف والأدمن (متابعة الطلاب، اجتياز المحاضرات والرقابة الأبوية)"}
            >
              <ShieldCheck size={15} className="admin-glow-icon" />
              <span>{isEn ? 'Admin' : 'لوحة المشرف'}</span>
            </button>
          )}

          {/* Compact Language Toggle */}
          <button 
            type="button" 
            className="btn-compact-lang"
            onClick={onToggleLanguage}
            title={isEn ? "التبديل إلى العربية" : "Switch to English"}
          >
            <Globe size={14} />
            <span>{isEn ? 'العربية' : 'English'}</span>
          </button>

          {/* User Profile & Settings Menu Dropdown */}
          <div className="user-dropdown-container" ref={dropdownRef}>
            <button 
              type="button" 
              className={`user-menu-trigger ${isDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              title={displayName}
            >
              <div className="user-avatar-small">
                <User size={15} />
              </div>
              <span className="user-name-label">{displayName}</span>
              <span className={`status-indicator-dot ${hasApiKey ? 'dot-active' : 'dot-pending'}`} title={hasApiKey ? t.geminiActive : t.geminiPending} />
              <ChevronDown size={14} className={`dropdown-chevron ${isDropdownOpen ? 'rotate' : ''}`} />
            </button>

            {/* Glassmorphic Dropdown Menu */}
            {isDropdownOpen && (
              <div className="user-dropdown-menu">
                {/* Student Mini Profile Header */}
                <div className="dropdown-profile-header" onClick={() => { setIsDropdownOpen(false); onOpenProfile(); }}>
                  <div className="dropdown-avatar">
                    <User size={18} />
                  </div>
                  <div className="dropdown-student-details">
                    <div className="dropdown-name">{displayName}</div>
                    <div className="dropdown-meta">
                      {countryInfo.flag} {isEn ? countryInfo.nameEn : countryInfo.nameAr} • {gradeLabel}
                    </div>
                  </div>
                  <div className="dropdown-points-tag">
                    <Award size={12} />
                    <span>{profile.masteryPoints} {t.pointsShort}</span>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                {/* Menu Action Items */}
                <div className="dropdown-menu-list">
                  {onOpenAdmin && (
                    <button 
                      type="button" 
                      className="dropdown-item dropdown-item-admin"
                      onClick={() => { setIsDropdownOpen(false); onOpenAdmin(); }}
                    >
                      <Users size={16} className="item-icon item-icon-admin text-cyan-400" />
                      <div className="item-text">
                        <span className="item-title">{isEn ? 'Admin & Supervision Dashboard' : 'لوحة تحكم المشرف والأدمن'}</span>
                        <span className="item-subtitle">{isEn ? 'Students, progress & parent controls' : 'إيميلات المسجلين، تقدم المحاضرات والرقابة'}</span>
                      </div>
                      <span className="status-badge-mini badge-admin">VIP</span>
                    </button>
                  )}

                  {onOpenOnboarding && (
                    <button 
                      type="button" 
                      className="dropdown-item"
                      onClick={() => { setIsDropdownOpen(false); onOpenOnboarding(); }}
                    >
                      <Compass size={16} className="item-icon text-amber-400" />
                      <div className="item-text">
                        <span className="item-title">{isEn ? 'Platform Guide & Roadmap' : 'دليل المنصة وخريطة المراحل'}</span>
                        <span className="item-subtitle">{isEn ? 'Explore stages & subjects' : 'شرح المنصة واختيار المسارات'}</span>
                      </div>
                    </button>
                  )}

                  <button 
                    type="button" 
                    className="dropdown-item"
                    onClick={() => { setIsDropdownOpen(false); onOpenProfile(); }}
                  >
                    <BookOpen size={16} className="item-icon item-icon-curriculum" />
                    <div className="item-text">
                      <span className="item-title">{isEn ? 'Curriculum & Specialization' : 'المنهج والتخصص الدراسي'}</span>
                      <span className="item-subtitle">{stageLabel}</span>
                    </div>
                  </button>

                  {onOpenProgress && (
                    <button 
                      type="button" 
                      className="dropdown-item"
                      onClick={() => { setIsDropdownOpen(false); onOpenProgress(); }}
                    >
                      <BarChart2 size={16} className="item-icon item-icon-progress" />
                      <div className="item-text">
                        <span className="item-title">{isEn ? 'My Grades & Progress' : 'درجاتي وسجل التقييمات'}</span>
                        <span className="item-subtitle">{isEn ? 'Track completed tests' : 'متابعة نتائج الاختبارات'}</span>
                      </div>
                    </button>
                  )}

                  <button 
                    type="button" 
                    className="dropdown-item"
                    onClick={() => { setIsDropdownOpen(false); onOpenApiKey(); }}
                  >
                    <Key size={16} className="item-icon item-icon-api" />
                    <div className="item-text">
                      <span className="item-title">{isEn ? 'Gemini AI Connection' : 'اتصال الذكاء الاصطناعي'}</span>
                      <span className="item-subtitle">
                        {hasApiKey 
                          ? (isEn ? 'Active & connected' : 'متصل ونشط ⚡') 
                          : (isEn ? 'API key required' : 'إعداد المفتاح الشخصي')}
                      </span>
                    </div>
                    <span className={`status-badge-mini ${hasApiKey ? 'badge-connected' : 'badge-pending'}`}>
                      {hasApiKey ? 'OK' : '!'}
                    </span>
                  </button>

                  <button 
                    type="button" 
                    className="dropdown-item"
                    onClick={() => { setIsDropdownOpen(false); onOpenParental(); }}
                  >
                    <ShieldCheck size={16} className="item-icon item-icon-parental" />
                    <div className="item-text">
                      <span className="item-title">{t.parentalBtn}</span>
                      <span className="item-subtitle">{isEn ? 'Parent dashboard & limits' : 'لوحة متابعة ولي الأمر'}</span>
                    </div>
                  </button>

                  {onOpenContact && (
                    <button 
                      type="button" 
                      className="dropdown-item"
                      onClick={() => { setIsDropdownOpen(false); onOpenContact(); }}
                    >
                      <Mail size={16} className="item-icon item-icon-contact text-cyan-400" />
                      <div className="item-text">
                        <span className="item-title">{isEn ? 'Contact Us / Feedback' : 'تواصل معنا والملاحظات'}</span>
                        <span className="item-subtitle">{isEn ? 'Send email feedback' : 'مراسلتنا عبر الإيميل'}</span>
                      </div>
                    </button>
                  )}
                </div>

                <div className="dropdown-divider"></div>

                {/* Session Actions Footer */}
                <div className="dropdown-footer">
                  {isLoggedIn ? (
                    <>
                      {onOpenAuth && (
                        <button 
                          type="button" 
                          className="dropdown-footer-btn"
                          onClick={() => { setIsDropdownOpen(false); onOpenAuth(); }}
                        >
                          <Users size={14} />
                          <span>{t.switchStudent}</span>
                        </button>
                      )}
                      {onLogout && (
                        <button 
                          type="button" 
                          className="dropdown-footer-btn btn-danger-action"
                          onClick={() => { setIsDropdownOpen(false); onLogout(); }}
                        >
                          <LogOut size={14} />
                          <span>{t.logout}</span>
                        </button>
                      )}
                    </>
                  ) : (
                    onOpenAuth && (
                      <button 
                        type="button" 
                        className="dropdown-login-btn"
                        onClick={() => { setIsDropdownOpen(false); onOpenAuth(); }}
                      >
                        <LogIn size={15} />
                        <span>{t.loginOrRegister}</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Mobile Header Right Bar */}
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
                <span className="mobile-country-tag">{countryInfo.flag} {isEn ? countryInfo.nameEn : countryInfo.nameAr}</span>
                {' • '}
                {stageLabel}
                {' • '}
                {gradeLabel}
              </div>
            </div>
            <div className="student-score">
              <Award size={14} className="score-icon" />
              <span>{profile.masteryPoints} {t.pointsShort}</span>
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

            {onOpenOnboarding && (
              <button
                type="button"
                className="btn-mobile-tool btn-mobile-guide"
                onClick={() => { setIsMobileMenuOpen(false); onOpenOnboarding(); }}
              >
                <Compass size={18} className="text-amber-400" />
                <span>{isEn ? 'Platform Guide' : 'دليل المنصة'}</span>
              </button>
            )}

            {onOpenProgress && (
              <button
                type="button"
                className="btn-mobile-tool"
                onClick={() => { setIsMobileMenuOpen(false); onOpenProgress(); }}
              >
                <BarChart2 size={18} />
                <span>{isEn ? 'My Grades' : 'درجاتي'}</span>
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

            {onOpenAdmin && (
              <button
                type="button"
                className="btn-mobile-tool btn-mobile-admin"
                onClick={() => { setIsMobileMenuOpen(false); onOpenAdmin(); }}
              >
                <Users size={18} />
                <span>{isEn ? 'Admin' : 'لوحة المشرف'}</span>
              </button>
            )}

            {onOpenContact && (
              <button
                type="button"
                className="btn-mobile-tool btn-mobile-contact"
                onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}
              >
                <Mail size={18} className="text-cyan-400" />
                <span>{isEn ? 'Contact Us / Feedback' : 'تواصل معنا والملاحظات'}</span>
              </button>
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
        </div>
      )}
    </header>
  );
};
