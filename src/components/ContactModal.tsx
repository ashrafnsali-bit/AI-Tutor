import React, { useState, useEffect } from 'react';
import type { Language, Lecture, StudentProfile } from '../types';
import { getActiveUserAccount } from '../services/database';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  ExternalLink,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RotateCcw
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
  currentLecture?: Lecture;
  profile?: StudentProfile;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  language = 'ar',
  currentLecture,
  profile
}) => {
  const isEn = language === 'en';
  const recipientEmail = 'ashraf.nsali@gmail.com';

  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [isAutoFilled, setIsAutoFilled] = useState(false);
  const [category, setCategory] = useState<'feedback' | 'inquiry' | 'feature' | 'bug' | 'other'>('feedback');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMeta, setSuccessMeta] = useState<{
    subject: string;
    sender: string;
    date: string;
  } | null>(null);

  // Automatically fetch logged-in user name and email from central database or profile
  useEffect(() => {
    if (!isOpen) return;

    const isInvalid = (val?: string) =>
      !val || ['عمر التميمي', 'احمد علي', 'Ahmed Ali', 'طالب زائر', 'Guest Student', 'طالب مسجل', 'Registered Student'].includes(val.trim());
    const cleanName = (val?: string) => (!isInvalid(val) ? val!.trim() : '');

    const applyUserData = (u: any) => {
      if (!u) return;
      const resolvedName = isEn
        ? (cleanName(u.nameEn) || cleanName(u.name) || cleanName(u.nameAr))
        : (cleanName(u.nameAr) || cleanName(u.name) || cleanName(u.nameEn));

      if (resolvedName) {
        setName((prev) => (!prev || isInvalid(prev) ? resolvedName : prev));
        setIsAutoFilled(true);
      }

      const validEmail = (u.email && u.email.includes('@') && !u.email.endsWith('@student.ai'))
        ? u.email.trim()
        : (u.parentEmail && u.parentEmail.includes('@') ? u.parentEmail.trim() : '');

      if (validEmail) {
        setSenderEmail((prev) => (!prev ? validEmail : prev));
        setIsAutoFilled(true);
      }
    };

    // 1. Check profile prop
    if (profile) {
      applyUserData(profile);
    }

    // 2. Check localStorage
    try {
      const activeStored = localStorage.getItem('TEACHER_AI_ACTIVE_USER');
      if (activeStored) {
        applyUserData(JSON.parse(activeStored));
      }
    } catch {}

    // 3. Check central database
    getActiveUserAccount().then((user) => {
      if (user) {
        applyUserData(user);
      }
    }).catch(() => {});
  }, [isOpen, isEn, profile]);

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
    const categoryLabel = categories.find(c => c.id === category)?.labelAr;
    const lectureContext = currentLecture 
      ? `\n\n--- السياق التعليمي ---\nالمحاضرة: ${currentLecture.titleAr} (${currentLecture.id})\nالمرحلة: ${currentLecture.gradeLevelNameAr}`
      : '';
    
    return `اسم المرسل: ${name.trim() || 'زائر للمنصة'}\nالبريد الإلكتروني للرد: ${senderEmail.trim() || 'غير محدد'}\nنوع الملاحظة: ${categoryLabel}\n\nنص الرسالة:\n${message.trim()}${lectureContext}\n\n---\nتم الإرسال عبر منصة المعلم الذكي (AI Tutor Platform)`;
  };

  const getEmailSubject = () => {
    return subject.trim() 
      ? `[منصة المعلم الذكي] ${subject.trim()}` 
      : `[منصة المعلم الذكي] رسالة من ${name.trim() || (isEn ? 'Visitor' : 'زائر')}`;
  };

  const getGmailComposeUrl = () => {
    const sub = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getFormattedEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${sub}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const sub = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getFormattedEmailBody());
    return `mailto:${recipientEmail}?subject=${sub}&body=${body}`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(getFormattedEmailBody());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setSubject('');
    setMessage('');
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSending) return;

    setIsSending(true);
    setErrorMessage(null);

    const categoryObj = categories.find((c) => c.id === category);
    const categoryLabel = isEn ? categoryObj?.labelEn : categoryObj?.labelAr;
    const emailSubject = getEmailSubject();
    const lectureContext = currentLecture
      ? `المحاضرة: ${currentLecture.titleAr} (${currentLecture.id}) - المرحلة: ${currentLecture.gradeLevelNameAr}`
      : 'الصفحة العامة للمنصة';

    const timestampStr = new Date().toLocaleString(isEn ? 'en-US' : 'ar-SA');

    // 1. Archive in local storage so message history is safely kept
    try {
      const STORAGE_KEY = 'TEACHER_AI_CONTACT_MESSAGES';
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      list.unshift({
        id: `contact-${Date.now()}`,
        name: name.trim() || (isEn ? 'Platform Visitor' : 'زائر للمنصة'),
        email: senderEmail.trim() || (isEn ? 'Not specified' : 'غير محدد'),
        category,
        subject: subject.trim() || (isEn ? 'No subject' : 'بدون عنوان'),
        message: message.trim(),
        lectureContext,
        timestamp: Date.now(),
        date: timestampStr
      });
      if (list.length > 50) list.length = 50;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}

    // 2. HTTP Dispatch to FormSubmit AJAX endpoint
    let delivered = false;
    let failureDetail = '';

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: senderEmail.trim() || recipientEmail,
          _template: 'table',
          _captcha: 'false',
          'اسم المرسل': name.trim() || 'زائر للمنصة',
          'البريد الإلكتروني للرد': senderEmail.trim() || 'غير محدد',
          'نوع الملاحظة': categoryLabel,
          'عنوان الرسالة': subject.trim() || 'بدون عنوان',
          'تفاصيل الرسالة': message.trim(),
          'السياق التعليمي': lectureContext,
          'تاريخ ووقت الإرسال': timestampStr
        })
      });

      if (res.ok) {
        const json = await res.json().catch(() => ({}));
        if (json?.success === true || json?.success === 'true') {
          delivered = true;
        } else if (json?.message) {
          failureDetail = json.message;
        }
      } else {
        failureDetail = `HTTP ${res.status}`;
      }
    } catch (err: any) {
      failureDetail = err?.message || 'Network connection failed';
    }

    setIsSending(false);

    if (delivered) {
      setIsSuccess(true);
      setSuccessMeta({
        subject: emailSubject,
        sender: name.trim() || (isEn ? 'Visitor' : 'زائر للمنصة'),
        date: timestampStr
      });
    } else {
      setErrorMessage(
        failureDetail ||
        (isEn
          ? 'Direct delivery server was unreachable. You can still send instantly via Gmail below!'
          : 'تعذر الاتصال المباشر بخادم الإرسال الخارجي. يمكنك إرسال الرسالة فوراً عبر بريد Gmail بضغطة زر أدناه!')
      );
    }
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
              {isEn ? 'Direct Admin Email:' : 'البريد الإلكتروني المباشر للإدارة:'}
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
              href={getGmailComposeUrl()} 
              className="btn-contact-action btn-open-gmail"
              target="_blank" 
              rel="noreferrer"
              title={isEn ? "Open in Gmail Web" : "فتح في بريد Gmail"}
            >
              <ExternalLink size={14} />
              <span>{isEn ? 'Gmail' : 'بريد Gmail'}</span>
            </a>
            <a 
              href={getMailtoUrl()} 
              className="btn-contact-action btn-open-mail"
              target="_blank" 
              rel="noreferrer"
              title={isEn ? "Open in Mail App" : "فتح تطبيق البريد"}
            >
              <ExternalLink size={14} />
              <span>{isEn ? 'Mail App' : 'تطبيق البريد'}</span>
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

        {/* Logged in User Auto-fill Badge */}
        {isAutoFilled && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 0.85rem',
            margin: '0.75rem 1.5rem 0',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '10px',
            color: '#34d399',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            <CheckCircle2 size={15} style={{ flexShrink: 0 }} />
            <span>
              {isEn
                ? 'Verified Account: Name & Email automatically loaded from database.'
                : 'حساب مسجل وموثق: تم جلب الاسم والبريد الإلكتروني تلقائياً من قاعدة البيانات.'}
            </span>
          </div>
        )}

        {/* Success View */}
        {isSuccess ? (
          <div className="contact-success-panel">
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.35rem' }}>
                {isEn ? 'Message Delivered Successfully!' : 'تم إرسال رسالتك وملاحظتك بنجاح ومباشرة!'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0, maxWidth: '440px', lineHeight: 1.5 }}>
                {isEn
                  ? `Your message was delivered to administration (${recipientEmail}) and safely recorded in platform storage.`
                  : `تم إرسال الرسالة إلى بريد إدارة المنصة (${recipientEmail}) وتسجيلها بنجاح في سجلات المنصة.`}
              </p>
            </div>

            <div className="contact-success-details">
              <div><strong>{isEn ? 'Sender:' : 'المُرسل:'}</strong> {successMeta?.sender}</div>
              {senderEmail && <div><strong>{isEn ? 'Reply Email:' : 'بريد الرد:'}</strong> {senderEmail}</div>}
              <div><strong>{isEn ? 'Subject:' : 'الموضوع:'}</strong> {successMeta?.subject}</div>
              <div><strong>{isEn ? 'Time:' : 'التوقيت:'}</strong> {successMeta?.date}</div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-contact-action btn-open-gmail"
                style={{ padding: '0.65rem 1.1rem', fontSize: '0.86rem' }}
                title={isEn ? "Open copy in Gmail" : "فتح نسخة في Gmail"}
              >
                <ExternalLink size={15} />
                <span>{isEn ? 'Open personal copy in Gmail' : 'فتح نسخة في Gmail للتأكيد الشخصي'}</span>
              </a>

              <button
                type="button"
                className="btn-draft-copy"
                onClick={handleResetForm}
              >
                <RotateCcw size={15} />
                <span>{isEn ? 'Send Another Message' : 'إرسال ملاحظة أخرى'}</span>
              </button>

              <button
                type="button"
                className="btn-contact-submit"
                onClick={onClose}
              >
                <Check size={16} />
                <span>{isEn ? 'Done & Close' : 'تم وإغلاق'}</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Error / Fallback Banner */}
            {errorMessage && (
              <div className="contact-error-banner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  <AlertCircle size={18} className="text-red-400" />
                  <span>{isEn ? 'Notice:' : 'تنبيه الاتصال بالخادم المباشر:'}</span>
                </div>
                <div style={{ fontSize: '0.82rem', lineHeight: 1.5 }}>
                  {errorMessage}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  <a
                    href={getGmailComposeUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-contact-action btn-open-gmail"
                  >
                    <ExternalLink size={14} />
                    <span>{isEn ? 'Send via Gmail Web now' : 'إرسال عبر بريد Gmail الآن (مضمون 100%)'}</span>
                  </a>
                  <a
                    href={getMailtoUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-contact-action btn-open-mail"
                  >
                    <ExternalLink size={14} />
                    <span>{isEn ? 'Open Mail App' : 'فتح تطبيق البريد'}</span>
                  </a>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSendEmail} className="contact-form">
              <div className="contact-form-grid">
                <div className="contact-form-group">
                  <label className="contact-form-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{isEn ? 'Your Name' : 'اسمك الكريم'}</span>
                    {name && isAutoFilled && (
                      <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
                        {isEn ? '✓ Verified' : '✓ معتمد'}
                      </span>
                    )}
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
                  <label className="contact-form-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{isEn ? 'Your Email (for replies)' : 'بريدك الإلكتروني (للرد عليك)'}</span>
                    {senderEmail && isAutoFilled && (
                      <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
                        {isEn ? '✓ Verified' : '✓ معتمد'}
                      </span>
                    )}
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
                  disabled={!message.trim() || isSending}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>{isEn ? 'Sending to Admin...' : 'جاري الإرسال إلى إدارة المنصة...'}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{isEn ? 'Send Message to Admin' : 'إرسال الرسالة إلى إدارة المنصة'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}

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
