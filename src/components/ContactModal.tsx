import React, { useState } from 'react';
import type { Language, Lecture } from '../types';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  ExternalLink,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
  currentLecture?: Lecture;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  language = 'ar',
  currentLecture
}) => {
  const isEn = language === 'en';
  const recipientEmail = 'ashraf.nsali@gmail.com';

  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [category, setCategory] = useState<'feedback' | 'inquiry' | 'feature' | 'bug' | 'other'>('feedback');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const categories = [
    { id: 'feedback', labelAr: '📝 ملاحظة أو تصحيح علمي', labelEn: '📝 Curriculum / Scientific Feedback' },
    { id: 'inquiry', labelAr: '❓ استفسار أو سؤال تعليمي', labelEn: '❓ Educational Inquiry' },
    { id: 'feature', labelAr: '💡 اقتراح تطوير للمنصة', labelEn: '💡 Feature Suggestion' },
    { id: 'bug', labelAr: '⚠️ بلاغ عن مشكلة تقنية', labelEn: '⚠️ Bug / Technical Issue' },
    { id: 'other', labelAr: '💬 رسالة عامة', labelEn: '💬 General Message' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getFormattedEmailBody = () => {
    const lectureContext = currentLecture 
      ? `\n\n--- السياق التعليمي ---\nالمحاضرة: ${currentLecture.titleAr} (${currentLecture.id})\nالمرحلة: ${currentLecture.gradeLevelNameAr}`
      : '';
    
    return `اسم المرسل: ${name || 'زائر للمنصة'}\nالبريد الإلكتروني للرد: ${senderEmail || 'غير محدد'}\nنوع الملاحظة: ${categories.find(c => c.id === category)?.labelAr}\n\nنص الرسالة:\n${message}${lectureContext}\n\n---\nتم الإرسال عبر منصة المعلم الذكي (AI Tutor Platform)`;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSubject = encodeURIComponent(subject ? `[منصة المعلم الذكي] ${subject}` : `[منصة المعلم الذكي] رسالة من ${name || 'زائر'}`);
    const finalBody = encodeURIComponent(getFormattedEmailBody());
    
    const mailtoUrl = `mailto:${recipientEmail}?subject=${finalSubject}&body=${finalBody}`;
    window.open(mailtoUrl, '_blank');
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      onClose();
    }, 2000);
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(getFormattedEmailBody());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-container" onClick={(e) => e.stopPropagation()} dir={isEn ? 'ltr' : 'rtl'}>
        
        {/* Header */}
        <div className="contact-modal-header">
          <div className="contact-modal-title-wrap">
            <div className="contact-icon-badge">
              <Mail size={22} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="contact-modal-title">
                {isEn ? 'Contact Us & Send Feedback' : 'تواصل معنا وشاركنا ملاحظاتك'}
              </h3>
              <p className="contact-modal-subtitle">
                {isEn 
                  ? 'We welcome all your scientific feedback, questions, and suggestions.' 
                  : 'نسعد بجميع ملاحظاتك العلمية واستفساراتك واقتراحاتك لتطوير المنصة'}
              </p>
            </div>
          </div>
          <button type="button" className="btn-close-contact" onClick={onClose} title={isEn ? "Close" : "إغلاق"}>
            <X size={20} />
          </button>
        </div>

        {/* Direct Email Card */}
        <div className="contact-direct-card">
          <div className="contact-direct-info">
            <span className="contact-direct-label">
              <HeartHandshake size={15} className="text-pink-400" />
              {isEn ? 'Direct Contact Email:' : 'البريد الإلكتروني المباشر للتواصل:'}
            </span>
            <span className="contact-direct-email">{recipientEmail}</span>
          </div>
          <div className="contact-direct-actions">
            <button 
              type="button" 
              className="btn-contact-action btn-copy-email" 
              onClick={handleCopyEmail}
              title={isEn ? "Copy Email" : "نسخ الإيميل"}
            >
              {copiedEmail ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>{isEn ? 'Copied!' : 'تم النسخ!'}</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>{isEn ? 'Copy' : 'نسخ الإيميل'}</span>
                </>
              )}
            </button>
            <a 
              href={`mailto:${recipientEmail}`} 
              className="btn-contact-action btn-open-mail"
              target="_blank" 
              rel="noreferrer"
              title={isEn ? "Open in Mail App" : "فتح تطبيق البريد"}
            >
              <ExternalLink size={14} />
              <span>{isEn ? 'Open Mail' : 'إرسال مباشر'}</span>
            </a>
          </div>
        </div>

        {/* Current Lecture Context Alert */}
        {currentLecture && (
          <div className="contact-context-chip">
            <Sparkles size={14} className="text-amber-400" />
            <span>
              {isEn ? 'Context Lecture:' : 'المحاضرة الحالية:'} <strong>{isEn ? currentLecture.titleEn : currentLecture.titleAr}</strong>
            </span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSendEmail} className="contact-form">
          <div className="contact-form-grid">
            <div className="contact-form-group">
              <label className="contact-form-label">
                {isEn ? 'Your Name' : 'اسمك الكريم'}
              </label>
              <input
                type="text"
                className="contact-form-input"
                placeholder={isEn ? 'e.g. Sarah Ahmad' : 'مثال: أحمد عبد الله'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">
                {isEn ? 'Your Email (for replies)' : 'بريدك الإلكتروني (للرد عليك)'}
              </label>
              <input
                type="email"
                className="contact-form-input"
                placeholder={isEn ? 'yourname@example.com' : 'بريدك الإلكتروني الشخصي'}
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label className="contact-form-label">
              {isEn ? 'Feedback Type' : 'نوع الملاحظة أو الاستفسار'}
            </label>
            <select
              className="contact-form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {isEn ? c.labelEn : c.labelAr}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-form-group">
            <label className="contact-form-label">
              {isEn ? 'Subject' : 'عنوان الرسالة / الملاحظة'}
            </label>
            <input
              type="text"
              className="contact-form-input"
              placeholder={isEn ? 'Brief summary of your note' : 'ملخص سريع لملاحظتك'}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact-form-group">
            <label className="contact-form-label">
              {isEn ? 'Message Details' : 'تفاصيل الملاحظة أو الاستفسار'}
            </label>
            <textarea
              className="contact-form-textarea"
              rows={4}
              required
              placeholder={isEn 
                ? 'Please describe your feedback, question, or note in detail...' 
                : 'اكتب تفاصيل ملاحظتك أو استفسارك هنا بكل وضوح...'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Action Buttons */}
          <div className="contact-form-footer">
            <button
              type="button"
              className="btn-draft-copy"
              onClick={handleCopyDraft}
              disabled={!message.trim()}
            >
              {copiedDraft ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span>{isEn ? 'Draft Copied!' : 'تم نسخ نص الرسالة!'}</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>{isEn ? 'Copy Draft Text' : 'نسخ نص الرسالة'}</span>
                </>
              )}
            </button>

            <button
              type="submit"
              className="btn-contact-submit"
              disabled={!message.trim() || isSent}
            >
              {isSent ? (
                <>
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>{isEn ? 'Opening Email...' : 'جاري فتح البريد...'}</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>{isEn ? 'Send via Email' : 'إرسال عبر البريد الإلكتروني'}</span>
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export const FloatingContactButton: React.FC<{
  onClick: () => void;
  language?: Language;
}> = ({ onClick, language = 'ar' }) => {
  const isEn = language === 'en';

  return (
    <div className="floating-contact-wrapper" dir={isEn ? 'ltr' : 'rtl'}>
      <button
        type="button"
        className="floating-contact-btn"
        onClick={onClick}
        aria-label={isEn ? "Contact Us & Feedback" : "تواصل معنا والملاحظات"}
        title={isEn ? "Contact Us & Feedback" : "تواصل معنا - يسعدنا استقبال ملاحظاتك"}
      >
        <div className="floating-contact-pulse" />
        <div className="floating-contact-icon-box">
          <Mail size={20} className="floating-mail-icon" />
          <span className="floating-contact-dot" />
        </div>
        <span className="floating-contact-label">
          {isEn ? 'Contact Us' : 'تواصل معنا'}
        </span>
      </button>
    </div>
  );
};
