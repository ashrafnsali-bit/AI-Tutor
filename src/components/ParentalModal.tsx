import React, { useState } from 'react';
import type { ParentalControlSettings, StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import { X, ShieldCheck, Clock, Moon, Ban, Trash2, Check, AlertTriangle } from 'lucide-react';

interface ParentalModalProps {
  isOpen: boolean;
  profile: StudentProfile;
  onClose: () => void;
  onPurgeData: () => void;
}

export const ParentalModal: React.FC<ParentalModalProps> = ({
  isOpen,
  profile,
  onClose,
  onPurgeData
}) => {
  if (!isOpen) return null;

  const t = getTranslations(profile.language);
  const isEn = profile.language === 'en';

  const [settings, setSettings] = useState<ParentalControlSettings>({
    curfewEnabled: true,
    curfewStart: '21:00',
    curfewEnd: '07:00',
    maxDailyMinutes: profile.timeLimitMinutes || 60,
    restrictedTopics: isEn
      ? ['Political Debates', 'AI Personal Beliefs', 'Off-Curriculum Material']
      : ['المواضيع السياسية', 'الآراء الشخصية للذكاء الاصطناعي', 'المحتوى خارج المنهج'],
    consentStatus: profile.age < 13 ? 'VERIFIED' : 'EXEMPT'
  });

  const [purgeConfirm, setPurgeConfirm] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container modal-wide" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge badge-parental">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="modal-title">{t.parentalTitle}</h2>
              <p className="modal-subtitle">{t.parentalSubtitle}</p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Status Alert */}
          <div className="parental-status-banner">
            <div className="status-indicator-ring">
              <Check size={20} className="check-icon" />
            </div>
            <div>
              <h4 className="banner-heading">{t.parentalVerifiedTitle}</h4>
              <p className="banner-text">
                {t.parentalVerifiedDesc(profile.name, profile.age)}
              </p>
            </div>
          </div>

          <div className="settings-sections-grid">
            {/* Time Management */}
            <div className="settings-card">
              <div className="card-head">
                <Clock size={18} className="head-icon text-indigo" />
                <h4 className="card-title">{t.studyLimitTitle}</h4>
              </div>
              <p className="card-desc">{t.studyLimitDesc}</p>
              
              <div className="slider-box">
                <div className="slider-labels">
                  <span>{isEn ? 'Daily Cap:' : 'الحد المخصص:'}</span>
                  <strong className="slider-val">{settings.maxDailyMinutes} {isEn ? 'minutes / day' : 'دقيقة / يومياً'}</strong>
                </div>
                <input
                  type="range"
                  min="20"
                  max="180"
                  step="10"
                  value={settings.maxDailyMinutes}
                  onChange={(e) => setSettings({ ...settings, maxDailyMinutes: Number(e.target.value) })}
                  className="range-slider"
                />
                <div className="slider-ticks">
                  <span>20 {isEn ? 'm' : 'د'}</span>
                  <span>60 {isEn ? 'm' : 'د'}</span>
                  <span>120 {isEn ? 'm' : 'د'}</span>
                  <span>180 {isEn ? 'm' : 'د'}</span>
                </div>
              </div>
            </div>

            {/* Curfew Hours */}
            <div className="settings-card">
              <div className="card-head">
                <Moon size={18} className="head-icon text-purple" />
                <h4 className="card-title">{t.curfewTitle}</h4>
              </div>
              <p className="card-desc">{t.curfewDesc}</p>
              
              <div className="curfew-toggle-row">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.curfewEnabled}
                    onChange={(e) => setSettings({ ...settings, curfewEnabled: e.target.checked })}
                  />
                  <span className="slider round"></span>
                </label>
                <span className="toggle-label">{settings.curfewEnabled ? t.curfewActive : t.curfewInactive}</span>
              </div>

              {settings.curfewEnabled && (
                <div className="time-inputs-row">
                  <div>
                    <label className="input-sublabel">{t.curfewFrom}</label>
                    <input
                      type="time"
                      className="form-input time-input"
                      value={settings.curfewStart}
                      onChange={(e) => setSettings({ ...settings, curfewStart: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="input-sublabel">{t.curfewTo}</label>
                    <input
                      type="time"
                      className="form-input time-input"
                      value={settings.curfewEnd}
                      onChange={(e) => setSettings({ ...settings, curfewEnd: e.target.value })}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Content Restrictions */}
            <div className="settings-card full-width">
              <div className="card-head">
                <Ban size={18} className="head-icon text-amber" />
                <h4 className="card-title">{t.contentBarriersTitle}</h4>
              </div>
              <p className="card-desc">{t.contentBarriersDesc}</p>
              
              <div className="chips-container">
                {settings.restrictedTopics.map((topic, i) => (
                  <span key={i} className="restriction-chip">
                    <Check size={14} />
                    {topic}
                  </span>
                ))}
                <span className="restriction-chip chip-fixed">
                  <Check size={14} />
                  {t.topicDomainIsolation}
                </span>
                <span className="restriction-chip chip-fixed">
                  <Check size={14} />
                  {t.topicZeroDirectAnswer}
                </span>
              </div>
            </div>

            {/* GDPR-K Right to Erasure */}
            <div className="settings-card full-width card-danger">
              <div className="card-head">
                <Trash2 size={18} className="head-icon text-rose" />
                <h4 className="card-title">{t.gdprErasureTitle}</h4>
              </div>
              <p className="card-desc">
                {t.gdprErasureDesc}
              </p>

              {!purgeConfirm ? (
                <button 
                  type="button" 
                  className="btn-danger-outline"
                  onClick={() => setPurgeConfirm(true)}
                >
                  <Trash2 size={16} />
                  <span>{t.btnRequestPurge}</span>
                </button>
              ) : (
                <div className="purge-confirmation-box">
                  <div className="confirm-text">
                    <AlertTriangle size={18} className="alert-icon" />
                    <span>{t.purgeConfirmText}</span>
                  </div>
                  <div className="confirm-buttons">
                    <button 
                      type="button" 
                      className="btn-danger"
                      onClick={() => {
                        onPurgeData();
                        setPurgeConfirm(false);
                        onClose();
                      }}
                    >
                      {t.btnConfirmPurge}
                    </button>
                    <button 
                      type="button" 
                      className="btn-secondary"
                      onClick={() => setPurgeConfirm(false)}
                    >
                      {t.btnCancel}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              {t.btnClose}
            </button>
            <button type="button" className="btn-primary" onClick={handleSave}>
              <Check size={18} />
              <span>{saveSuccess ? t.savedSuccess : t.btnSaveParental}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
