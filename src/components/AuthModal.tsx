import React, { useState, useEffect } from 'react';
import type { CountryCode, EducationTrack, EducationType, GradeLevel, Language, Specialization, Subject, UserAccount } from '../types';
import { getTranslations } from '../i18n/translations';
import { registerUserAccount, loginUserAccount } from '../services/database';
import { detectStudentCountry } from '../services/geoService';
import { X, UserPlus, LogIn, Sparkles, AlertCircle, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onSuccess: (user: UserAccount) => void;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onSuccess, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Login Form State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Form State
  const [regName, setRegName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCountry, setRegCountry] = useState<CountryCode>('SA');
  const [regEducationType, setRegEducationType] = useState<EducationType>('PUBLIC');
  const [regEducationTrack, setRegEducationTrack] = useState<EducationTrack>('GENERAL');
  const [regAge, setRegAge] = useState<number>(10);
  const [regGrade, setRegGrade] = useState<GradeLevel>('G4');
  const [regSpec, setRegSpec] = useState<Specialization>('GENERAL');
  const [regSubject, setRegSubject] = useState<Subject>('PRIMARY_MATH');
  const [regLanguage, setRegLanguage] = useState<Language>('ar');
  const [regParentEmail, setRegParentEmail] = useState('');

  // Auto detect location on mount
  useEffect(() => {
    detectStudentCountry().then(geo => {
      if (geo?.country) {
        setRegCountry(geo.country);
      }
    }).catch(() => {});
  }, []);

  const t = getTranslations(regLanguage);
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(regGrade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(regGrade);

  const PRIMARY_SUBJECTS: Subject[] = ['PRIMARY_ARABIC', 'PRIMARY_MATH', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'];
  const MIDDLE_SUBJECTS: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value, 10) || 0;
    setRegAge(age);

    if (age <= 7) {
      setRegGrade('G1');
      setRegSpec('GENERAL');
      setRegSubject('PRIMARY_ARABIC');
    } else if (age === 8) {
      setRegGrade('G2');
      setRegSpec('GENERAL');
      setRegSubject('PRIMARY_MATH');
    } else if (age === 9) {
      setRegGrade('G3');
      setRegSpec('GENERAL');
      setRegSubject('PRIMARY_SCIENCE');
    } else if (age === 10) {
      setRegGrade('G4');
      setRegSpec('GENERAL');
      setRegSubject('PRIMARY_MATH');
    } else if (age === 11) {
      setRegGrade('G5');
      setRegSpec('GENERAL');
      setRegSubject('PRIMARY_ARABIC');
    } else if (age === 12) {
      setRegGrade('G6');
      setRegSpec('GENERAL');
      setRegSubject('PRIMARY_MATH');
    } else if (age === 13) {
      setRegGrade('G7');
      setRegSpec('GENERAL');
      setRegSubject('ARABIC_LANG');
    } else if (age === 14) {
      setRegGrade('G8');
      setRegSpec('GENERAL');
      setRegSubject('MATH');
    } else if (age === 15) {
      setRegGrade('G9');
      setRegSpec('GENERAL');
      setRegSubject('GENERAL_SCIENCE');
    } else if (age === 16) {
      setRegGrade('G10');
      setRegSpec('STEM');
      setRegSubject('PHYSICS');
    } else if (age >= 17) {
      setRegGrade('G11');
      setRegSpec('STEM');
      setRegSubject('PHYSICS');
    }
  };

  const handleGradeChange = (grade: GradeLevel) => {
    setRegGrade(grade);
    const prim = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade);
    const mid = ['G7', 'G8', 'G9'].includes(grade);

    if (prim) {
      setRegSpec('GENERAL');
      if (!PRIMARY_SUBJECTS.includes(regSubject)) setRegSubject('PRIMARY_MATH');
    } else if (mid) {
      setRegSpec('GENERAL');
      if (!MIDDLE_SUBJECTS.includes(regSubject)) setRegSubject('ARABIC_LANG');
    } else {
      if (regSpec === 'GENERAL') setRegSpec('STEM');
      setRegSubject('PHYSICS');
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      const user = await loginUserAccount(loginIdentifier, loginPassword);
      setSuccessMsg('تم تسجيل الدخول بنجاح! جاري تحميل بياناتك...');
      setTimeout(() => {
        onSuccess(user);
        onClose();
      }, 700);
    } catch (err) {
      setErrorMsg((err as Error)?.message || 'فشل تسجيل الدخول، تحقق من البيانات');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!regUsername.trim() || regUsername.length < 3) {
      setErrorMsg('اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل');
      return;
    }

    setIsLoading(true);
    try {
      const newUser = await registerUserAccount({
        name: regName || regUsername,
        username: regUsername,
        email: regEmail || `${regUsername}@student.ai`,
        password: regPassword,
        country: regCountry,
        educationType: regEducationType,
        educationTrack: regEducationTrack,
        age: regAge,
        gradeLevel: regGrade,
        specialization: regSpec,
        subject: regSubject,
        language: regLanguage,
        parentEmail: regParentEmail
      });

      setSuccessMsg('تم إنشاء حساب الطالب وحفظه في قاعدة البيانات بنجاح! 🎓');
      setTimeout(() => {
        onSuccess(newUser);
        onClose();
      }, 900);
    } catch (err) {
      setErrorMsg((err as Error)?.message || 'حدث خطأ أثناء حفظ الحساب');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="modal-title">
                {regLanguage === 'en' ? 'Student Portal & Database Registration' : 'بوابة تسجيل الطلاب وحفظ البيانات'}
              </h2>
              <p className="modal-subtitle">
                {regLanguage === 'en'
                  ? 'Sign in or create a student profile to save your progress & test scores'
                  : 'سجل حسابك لحفظ تقدمك الأكاديمي ودرجات اختباراتك في قاعدة البيانات'}
              </p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.02)' }}>
          <button
            type="button"
            onClick={() => { setActiveTab('register'); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              borderBottom: activeTab === 'register' ? '2px solid #38bdf8' : 'none',
              color: activeTab === 'register' ? '#38bdf8' : 'rgba(255, 255, 255, 0.6)',
              background: activeTab === 'register' ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
              cursor: 'pointer'
            }}
          >
            <UserPlus size={17} />
            <span>{regLanguage === 'en' ? 'Register New Student' : 'تسجيل طالب جديد'}</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              borderBottom: activeTab === 'login' ? '2px solid #38bdf8' : 'none',
              color: activeTab === 'login' ? '#38bdf8' : 'rgba(255, 255, 255, 0.6)',
              background: activeTab === 'login' ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
              cursor: 'pointer'
            }}
          >
            <LogIn size={17} />
            <span>{regLanguage === 'en' ? 'Sign In / Switch Student' : 'تسجيل الدخول / تبديل الطالب'}</span>
          </button>
        </div>

        {/* Feedback Alerts */}
        {errorMsg && (
          <div style={{ margin: '1rem 1.5rem 0', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div style={{ margin: '1rem 1.5rem 0', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* REGISTER TAB */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="modal-form-wrapper">
            <div className="modal-body">
              {regAge < 13 && (
                <div className="coppa-warning-banner">
                  <ShieldCheck className="warning-icon" size={24} />
                  <div>
                    <h4 className="warning-title">{t.coppaTitle}</h4>
                    <p className="warning-desc">{t.coppaDesc}</p>
                  </div>
                </div>
              )}

              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">{t.labelFullName} *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="مثال: عمر التميمي / Sarah"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    required
                  />
                </div>

                {/* Username */}
                <div className="form-group">
                  <label className="form-label">
                    {regLanguage === 'en' ? 'Username (Unique) *' : 'اسم المستخدم (فريد) *'}
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="omar10"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">
                    {regLanguage === 'en' ? 'Student Email (Optional)' : 'البريد الإلكتروني للطالب (اختياري)'}
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="student@example.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="form-group">
                  <label className="form-label">
                    {regLanguage === 'en' ? 'Password' : 'كلمة المرور'}
                  </label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="••••••••"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                  />
                </div>

                {/* Country & Official State Curriculum */}
                <div className="form-group">
                  <label className="form-label">{t.countrySelectLabel} *</label>
                  <select
                    className="form-select"
                    value={regCountry}
                    onChange={(e) => setRegCountry(e.target.value as CountryCode)}
                    required
                  >
                    <option value="SA">🇸🇦 المملكة العربية السعودية (وزارة التعليم)</option>
                    <option value="EG">🇪🇬 جمهورية مصر العربية (وزارة التربية والتعليم)</option>
                    <option value="AE">🇦🇪 دولة الإمارات العربية المتحدة (مؤسسة الإمارات للتعليم)</option>
                    <option value="KW">🇰🇼 دولة الكويت (وزارة التربية)</option>
                    <option value="JO">🇯🇴 المملكة الأردنية الهاشمية (وزارة التربية والتعليم)</option>
                    <option value="OM">🇴🇲 سلطنة عُمان (وزارة التربية والتعليم)</option>
                    <option value="QA">🇶🇦 دولة قطر (وزارة التربية والتعليم والتعليم العالي)</option>
                    <option value="BH">🇧🇭 مملكة البحرين (وزارة التربية والتعليم)</option>
                    <option value="IQ">🇮🇶 جمهورية العراق (وزارة التربية)</option>
                    <option value="MA">🇲🇦 المملكة المغربية (وزارة التربية الوطنية)</option>
                    <option value="DZ">🇩🇿 الجمهورية الجزائرية (وزارة التربية الوطنية)</option>
                    <option value="TN">🇹🇳 الجمهورية التونسية (وزارة التربية)</option>
                    <option value="INTL">🌍 المنهج الدولي والمعايير العامة</option>
                  </select>
                </div>

                {/* Education Type */}
                <div className="form-group">
                  <label className="form-label">{t.educationTypeLabel || 'نوع التعليم'} *</label>
                  <select
                    className="form-select"
                    value={regEducationType}
                    onChange={(e) => setRegEducationType(e.target.value as EducationType)}
                  >
                    <option value="PUBLIC">🏛️ تعليم حكومي معتمد</option>
                    <option value="PRIVATE">🏫 تعليم أهلي / خاص</option>
                    <option value="ISLAMIC">🕌 تعليم شرعي / أزهري</option>
                    <option value="INTERNATIONAL">🌐 تعليم دولي / لغات ومسارات متقدمة</option>
                  </select>
                </div>

                {/* Age */}
                <div className="form-group">
                  <label className="form-label">{t.labelAge} *</label>
                  <input
                    type="number"
                    min="6"
                    max="22"
                    className="form-input"
                    value={regAge}
                    onChange={handleAgeChange}
                    required
                  />
                </div>

                {/* Grade Level */}
                <div className="form-group">
                  <label className="form-label">{t.labelGrade} *</label>
                  <select
                    className="form-select"
                    value={regGrade}
                    onChange={(e) => handleGradeChange(e.target.value as GradeLevel)}
                  >
                    <optgroup label={regLanguage === 'en' ? "Primary / Elementary (Grades 1 - 6)" : "المرحلة الابتدائية (الصفوف 1 - 6)"}>
                      <option value="G1">{t.gradeLabels.G1}</option>
                      <option value="G2">{t.gradeLabels.G2}</option>
                      <option value="G3">{t.gradeLabels.G3}</option>
                      <option value="G4">{t.gradeLabels.G4}</option>
                      <option value="G5">{t.gradeLabels.G5}</option>
                      <option value="G6">{t.gradeLabels.G6}</option>
                    </optgroup>
                    <optgroup label={regLanguage === 'en' ? "Middle School (Grades 7 - 9)" : "المرحلة المتوسطة (الصفوف 7 - 9)"}>
                      <option value="G7">{t.gradeLabels.G7}</option>
                      <option value="G8">{t.gradeLabels.G8}</option>
                      <option value="G9">{t.gradeLabels.G9}</option>
                    </optgroup>
                    <optgroup label={regLanguage === 'en' ? "High School (Grades 10 - 12)" : "المرحلة الثانوية (الصفوف 10 - 12)"}>
                      <option value="G10">{t.gradeLabels.G10}</option>
                      <option value="G11">{t.gradeLabels.G11}</option>
                      <option value="G12">{t.gradeLabels.G12}</option>
                    </optgroup>
                  </select>
                </div>

                {/* Specialization */}
                <div className="form-group">
                  <label className="form-label">{t.labelSpecialization}</label>
                  {isPrimary ? (
                    <div>
                      <select className="form-select select-locked" value="GENERAL" disabled style={{ opacity: 0.85 }}>
                        <option value="GENERAL">
                          {regLanguage === 'en' ? 'General Primary Curriculum' : 'التعليم العام (المرحلة الابتدائية - تعليم أساسي)'}
                        </option>
                      </select>
                    </div>
                  ) : isMiddle ? (
                    <div>
                      <select className="form-select select-locked" value="GENERAL" disabled style={{ opacity: 0.85 }}>
                        <option value="GENERAL">
                          {regLanguage === 'en' ? 'General Middle School Curriculum' : 'التعليم العام (المرحلة المتوسطة - لا يوجد تشعيب)'}
                        </option>
                      </select>
                    </div>
                  ) : (
                    <select
                      className="form-select"
                      value={regSpec}
                      onChange={(e) => {
                        const val = e.target.value as Specialization;
                        setRegSpec(val);
                        if (val === 'STEM') setRegEducationTrack('CS_ENGINEERING');
                        else if (val === 'HEALTH') setRegEducationTrack('HEALTH_LIFE');
                        else if (val === 'HUMANITIES') setRegEducationTrack('SHARIA_HUMANITIES');
                        else setRegEducationTrack('GENERAL');
                      }}
                    >
                      <option value="STEM">{t.specLabels.STEM}</option>
                      <option value="HUMANITIES">{t.specLabels.HUMANITIES}</option>
                      <option value="HEALTH">{t.specLabels.HEALTH}</option>
                      <option value="GENERAL">{t.specLabels.GENERAL}</option>
                    </select>
                  )}
                </div>

                {/* Starting Subject */}
                <div className="form-group">
                  <label className="form-label">{t.labelSubject} *</label>
                  <select
                    className="form-select"
                    value={regSubject}
                    onChange={(e) => setRegSubject(e.target.value as Subject)}
                  >
                    {isPrimary ? (
                      <optgroup label={regLanguage === 'en' ? "Elementary Core Subjects" : "المواد الأساسية للمرحلة الابتدائية"}>
                        <option value="PRIMARY_MATH">{t.subjectLabels.PRIMARY_MATH}</option>
                        <option value="PRIMARY_ARABIC">{t.subjectLabels.PRIMARY_ARABIC}</option>
                        <option value="PRIMARY_SCIENCE">{t.subjectLabels.PRIMARY_SCIENCE}</option>
                        <option value="ISLAMIC_STUDIES">{t.subjectLabels.ISLAMIC_STUDIES}</option>
                      </optgroup>
                    ) : isMiddle ? (
                      <optgroup label={regLanguage === 'en' ? "Middle School Subjects" : "مواد المرحلة المتوسطة"}>
                        <option value="ARABIC_LANG">{t.subjectLabels.ARABIC_LANG}</option>
                        <option value="MATH">{t.subjectLabels.MATH}</option>
                        <option value="GENERAL_SCIENCE">{t.subjectLabels.GENERAL_SCIENCE}</option>
                        <option value="COMPUTER_SCIENCE">{t.subjectLabels.COMPUTER_SCIENCE}</option>
                      </optgroup>
                    ) : (
                      <optgroup label={regLanguage === 'en' ? "High School Subjects" : "مواد المرحلة الثانوية"}>
                        <option value="PHYSICS">{t.subjectLabels.PHYSICS}</option>
                        <option value="MATH">{t.subjectLabels.MATH}</option>
                        <option value="CHEMISTRY">{t.subjectLabels.CHEMISTRY}</option>
                        <option value="BIOLOGY">{t.subjectLabels.BIOLOGY}</option>
                        <option value="ARABIC_LIT">{t.subjectLabels.ARABIC_LIT}</option>
                        <option value="COMPUTER_SCIENCE">{t.subjectLabels.COMPUTER_SCIENCE}</option>
                      </optgroup>
                    )}
                  </select>
                </div>

                {/* Language */}
                <div className="form-group">
                  <label className="form-label">{t.labelLanguage}</label>
                  <select
                    className="form-select"
                    value={regLanguage}
                    onChange={(e) => setRegLanguage(e.target.value as Language)}
                  >
                    <option value="ar">العربية (من اليمين لليسار - RTL)</option>
                    <option value="en">English (Left to Right - LTR)</option>
                  </select>
                </div>

                {/* Parent Email */}
                {regAge < 13 && (
                  <div className="form-group full-width">
                    <label className="form-label">{t.labelParentEmail} *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="parent@example.com"
                      value={regParentEmail}
                      onChange={(e) => setRegParentEmail(e.target.value)}
                      required
                    />
                    <span className="form-hint">{t.parentEmailHint}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>
                {t.btnCancel}
              </button>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                <Sparkles size={18} />
                <span>{isLoading ? 'جاري الحفظ في قاعدة البيانات...' : (regLanguage === 'en' ? 'Register & Start Learning' : 'تسجيل وحفظ الحساب في قاعدة البيانات')}</span>
              </button>
            </div>
          </form>
        )}

        {/* LOGIN TAB */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="modal-form-wrapper">
            <div className="modal-body">
              <div className="form-group full-width">
                <label className="form-label">
                  {regLanguage === 'en' ? 'Username or Email' : 'اسم المستخدم أو البريد الإلكتروني'} *
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="omar10 / student@example.com"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">
                  {regLanguage === 'en' ? 'Password' : 'كلمة المرور'}
                </label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <span className="form-hint">
                  {regLanguage === 'en' ? 'Leave empty if you registered without password' : 'اتركها فارغة إذا سجلت بدون كلمة مرور'}
                </span>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>
                {t.btnCancel}
              </button>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                <LogIn size={18} />
                <span>{isLoading ? 'جاري التحقق...' : (regLanguage === 'en' ? 'Sign In' : 'تسجيل الدخول')}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
