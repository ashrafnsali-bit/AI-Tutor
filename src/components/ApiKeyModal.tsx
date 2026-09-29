import React, { useState } from 'react';
import type { Language } from '../types';
import { getTranslations } from '../i18n/translations';
import { X, ExternalLink, Check, Sparkles, AlertCircle } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  currentApiKey: string;
  lang: Language;
  onSaveKey: (key: string) => void;
  onClose: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  currentApiKey,
  lang,
  onSaveKey,
  onClose
}) => {
  if (!isOpen) return null;

  const t = getTranslations(lang);
  const [inputKey, setInputKey] = useState(currentApiKey);
  const [testedSuccess, setTestedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveKey(inputKey.trim());
    setTestedSuccess(true);
    setTimeout(() => {
      setTestedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleClear = () => {
    setInputKey('');
    onSaveKey('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge badge-gemini">
              <Sparkles size={22} />
            </div>
            <div>
              <h2 className="modal-title">{t.apiKeyTitle}</h2>
              <p className="modal-subtitle">{t.apiKeySubtitle}</p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave} className="modal-body">
          <div className="gemini-info-card">
            <p>{t.apiKeyDesc}</p>
            <div className="gemini-tip-box">
              <AlertCircle size={18} className="tip-icon" />
              <span>{t.apiKeySimulationTip}</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelApiKey}</label>
            <div className="input-with-action">
              <input
                type="password"
                className="form-input key-input"
                placeholder="AIzaSy..."
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
              />
              {inputKey && (
                <button type="button" className="btn-clear-input" onClick={handleClear}>
                  {t.btnClear}
                </button>
              )}
            </div>
            <div className="key-help-row">
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="ai-studio-link"
              >
                <span>{t.aiStudioLink}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              {t.btnCancel}
            </button>
            <button type="submit" className="btn-primary">
              <Check size={18} />
              <span>{testedSuccess ? t.geminiSavedSuccess : t.btnSaveGemini}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
