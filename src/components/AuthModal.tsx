import React, { useState, useEffect, useRef } from 'react';
import type { CountryCode, EducationTrack, EducationType, GradeLevel, Language, Specialization, StudentProfile, Subject, UserAccount } from '../types';
import { getTranslations } from '../i18n/translations';
import { registerUserAccount, loginUserAccount } from '../services/database';
import { detectStudentCountry } from '../services/geoService';
import {
  ACTIVE_CURRICULUM_COUNTRIES,
  EDUCATION_TYPE_LABELS,
  TRACK_LABELS,
  getActiveCurriculumCountry,
  getCountryInfo,
  isSaudiPublicBusinessG11DigitalTechnologyAvailable,
  isSaudiPublicEnglishAvailable,
  getSpecializationForEducationTrack,
  getNationalSubjectLabel,
  isSaudiPublicG11BiologyAvailable,
  isSaudiPublicG11HealthScienceAvailable,
  isSaudiPublicG11PhysicsAvailable,
  isSaudiPublicTajweedAvailable,
  isSaudiPublicQuranRecitationAvailable,
  isSaudiPublicG6VisualArtsAvailable,
  isSaudiPublicLifeSkillsAvailable,
  normalizeEducationTrackForCountry,
  normalizeEducationTypeForCountry
} from '../data/curriculumCountries';
import { isBlockedGeographyHistoryRoute, isSaudiSocialStudiesAvailable } from '../data/curriculumData';
import { 
  X, 
  UserPlus, 
  LogIn, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  Phone, 
  Mail, 
  User, 
  Clock, 
  Moon, 
  Smartphone,
  RefreshCw
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialProfile?: StudentProfile | null;
  noticeMessage?: string;
  onSuccess: (user: UserAccount) => void;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  initialProfile, 
  noticeMessage, 
  onSuccess, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [regStep, setRegStep] = useState<'form' | 'otp'>('form');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Login Form State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Student Form State
  const [regName, setRegName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regCountry, setRegCountry] = useState<CountryCode>(
    getActiveCurriculumCountry(initialProfile?.country)
  );
  const [regEducationType, setRegEducationType] = useState<EducationType>(
    normalizeEducationTypeForCountry(
      getActiveCurriculumCountry(initialProfile?.country),
      initialProfile?.educationType
    )
  );
  const [regEducationTrack, setRegEducationTrack] = useState<EducationTrack>(
    normalizeEducationTrackForCountry(
      getActiveCurriculumCountry(initialProfile?.country),
      initialProfile?.educationTrack
    )
  );
  const [regAge, setRegAge] = useState<number>(initialProfile?.age || 16);
  const [regGrade, setRegGrade] = useState<GradeLevel>(initialProfile?.gradeLevel || 'G10');
  const [regSpec, setRegSpec] = useState<Specialization>(() =>
    getSpecializationForEducationTrack(
      normalizeEducationTrackForCountry(
        getActiveCurriculumCountry(initialProfile?.country),
        initialProfile?.educationTrack
      )
    )
  );
  const [regSubject, setRegSubject] = useState<Subject>(initialProfile?.subject || 'PHYSICS');
  const [regLanguage] = useState<Language>(initialProfile?.language || 'ar');
  const countryWasChosen = useRef(false);

  // Pre-fill fields whenever initialProfile changes
  useEffect(() => {
    if (!isOpen || !initialProfile) return;
    const country = getActiveCurriculumCountry(initialProfile.country);
    setRegCountry(country);
    if (initialProfile.gradeLevel) setRegGrade(initialProfile.gradeLevel);
    const educationTrack = normalizeEducationTrackForCountry(country, initialProfile.educationTrack);
    setRegEducationTrack(educationTrack);
    setRegEducationType(normalizeEducationTypeForCountry(country, initialProfile.educationType));
    setRegSpec(getSpecializationForEducationTrack(educationTrack));
    if (initialProfile.subject) {
      const educationTrack = normalizeEducationTrackForCountry(country, initialProfile.educationTrack);
      const educationType = normalizeEducationTypeForCountry(country, initialProfile.educationType);
      const isInvalidNationalSubject =
        ((initialProfile.subject === 'TAJWEED' &&
          !isSaudiPublicTajweedAvailable(country, initialProfile.gradeLevel, educationType)) ||
          (initialProfile.subject === 'QURAN_RECITATION' &&
            !isSaudiPublicQuranRecitationAvailable(country, initialProfile.gradeLevel, educationType)) ||
          (initialProfile.subject === 'VISUAL_ARTS' &&
            !isSaudiPublicG6VisualArtsAvailable(country, initialProfile.gradeLevel, educationType)) ||
          (initialProfile.subject === 'LIFE_SKILLS' &&
            !isSaudiPublicLifeSkillsAvailable(country, initialProfile.gradeLevel, educationType, educationTrack))) ||
        ((initialProfile.subject === 'PHYSICS' || initialProfile.subject === 'BIOLOGY') &&
          country === 'SA' &&
          initialProfile.gradeLevel === 'G11' &&
          ((initialProfile.subject === 'PHYSICS' &&
            !isSaudiPublicG11PhysicsAvailable(country, initialProfile.gradeLevel, educationType, educationTrack)) ||
            (initialProfile.subject === 'BIOLOGY' &&
              !isSaudiPublicG11BiologyAvailable(country, initialProfile.gradeLevel, educationType, educationTrack)))) ||
        (initialProfile.subject === 'ENGLISH' &&
          !isSaudiPublicEnglishAvailable(country, initialProfile.gradeLevel, educationType)) ||
        (initialProfile.subject === 'HEALTH_SCIENCE' &&
          !isSaudiPublicG11HealthScienceAvailable(
            country,
            initialProfile.gradeLevel,
            educationType,
            educationTrack
          )) ||
        (initialProfile.subject === 'COMPUTER_SCIENCE' &&
          country === 'SA' &&
          initialProfile.gradeLevel === 'G11' &&
          !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            country,
            initialProfile.gradeLevel,
            educationType,
            educationTrack
          ));
      const fallbackSubject: Subject = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(initialProfile.gradeLevel)
        ? 'PRIMARY_ARABIC'
        : ['G7', 'G8', 'G9'].includes(initialProfile.gradeLevel)
          ? 'ARABIC_LANG'
          : 'ARABIC_LIT';
      setRegSubject(isInvalidNationalSubject ? fallbackSubject : initialProfile.subject);
    }
    if (initialProfile.age) setRegAge(initialProfile.age);
  }, [initialProfile, isOpen]);

  // Register Parent Supervision Data (Mandatory)
  const [regParentName, setRegParentName] = useState('');
  const [regParentPhone, setRegParentPhone] = useState('+966 5');
  const [regParentEmail, setRegParentEmail] = useState('');
  const [regDailyLimitMinutes, setRegDailyLimitMinutes] = useState<number>(90);
  const [regCurfewEnabled, setRegCurfewEnabled] = useState<boolean>(true);

  // OTP Verification State
  const [generatedOtp, setGeneratedOtp] = useState<string>('');
  const [enteredOtp, setEnteredOtp] = useState<string>('');
  const [otpSentToast, setOtpSentToast] = useState<{ show: boolean; code: string; phone: string } | null>(null);
  const [resendCooldown, setResendCooldown] = useState<number>(0);

  // Auto detect location when the registration modal opens
  useEffect(() => {
    if (!isOpen || initialProfile || countryWasChosen.current) return;
    let isCurrent = true;
    detectStudentCountry().then(geo => {
      if (isCurrent && geo?.country && !countryWasChosen.current) {
        setRegCountry(geo.country);
        if (geo.country === 'EG') setRegParentPhone('+20 1');
        else if (geo.country === 'SD') setRegParentPhone('+249 9');
        else if (geo.country === 'AE') setRegParentPhone('+971 5');
        else if (geo.country === 'KW') setRegParentPhone('+965 ');
        else if (geo.country === 'JO') setRegParentPhone('+962 7');
      }
    }).catch(() => {});
    return () => { isCurrent = false; };
  }, [initialProfile, isOpen]);

  // Cooldown timer
  useEffect(() => {
    if (isOpen && resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, resendCooldown]);

  if (!isOpen) return null;

  const t = getTranslations(regLanguage);
  const countryInfo = getCountryInfo(regCountry);
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(regGrade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(regGrade);

  const PRIMARY_SUBJECTS: Subject[] = ['PRIMARY_ARABIC', 'PRIMARY_MATH', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'];
  const MIDDLE_SUBJECTS: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];
  const isSaudiSocialStudies = (grade: GradeLevel) =>
    isSaudiSocialStudiesAvailable(grade, regCountry, regEducationType, regEducationTrack);
  const isLegacyGeographyHistoryAvailable = () =>
    !isBlockedGeographyHistoryRoute('GEOGRAPHY', regCountry, regEducationType, regEducationTrack);
  const defaultSubjectForGrade = (grade: GradeLevel): Subject =>
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade)
      ? 'PRIMARY_ARABIC'
      : ['G7', 'G8', 'G9'].includes(grade)
        ? 'ARABIC_LANG'
        : 'ARABIC_LIT';
  const normalizeNationalSubject = (
    subject: Subject,
    country: CountryCode,
    educationType: EducationType,
    track: EducationTrack,
    grade: GradeLevel
  ): Subject => {
    if (subject === 'TAJWEED' && !isSaudiPublicTajweedAvailable(country, grade, educationType)) {
      return defaultSubjectForGrade(grade);
    }
    if (subject === 'QURAN_RECITATION' &&
        !isSaudiPublicQuranRecitationAvailable(country, grade, educationType)) {
      return defaultSubjectForGrade(grade);
    }
    if (subject === 'VISUAL_ARTS' &&
        !isSaudiPublicG6VisualArtsAvailable(country, grade, educationType)) {
      return defaultSubjectForGrade(grade);
    }
    if (subject === 'LIFE_SKILLS' &&
        !isSaudiPublicLifeSkillsAvailable(country, grade, educationType, track)) {
      return defaultSubjectForGrade(grade);
    }
    if (subject === 'ENGLISH' && !isSaudiPublicEnglishAvailable(country, grade, educationType)) {
      return defaultSubjectForGrade(grade);
    }
    if (
      subject === 'COMPUTER_SCIENCE' &&
      country === 'SA' &&
      grade === 'G11' &&
      !isSaudiPublicBusinessG11DigitalTechnologyAvailable(country, grade, educationType, track)
    ) return defaultSubjectForGrade(grade);
    if (
      subject === 'PHYSICS' &&
      !isSaudiPublicG11PhysicsAvailable(country, grade, educationType, track) &&
      country === 'SA' &&
      grade === 'G11'
    ) return defaultSubjectForGrade(grade);
    if (
      subject === 'BIOLOGY' &&
      country === 'SA' &&
      grade === 'G11' &&
      !isSaudiPublicG11BiologyAvailable(country, grade, educationType, track)
    ) return defaultSubjectForGrade(grade);
    if (
      subject === 'HEALTH_SCIENCE' &&
      !isSaudiPublicG11HealthScienceAvailable(country, grade, educationType, track)
    ) return defaultSubjectForGrade(grade);
    if (
      subject === 'SAUDI_SOCIAL_STUDIES' &&
      !isSaudiSocialStudiesAvailable(grade, country, educationType, track)
    ) return defaultSubjectForGrade(grade);
    if (
      (subject === 'GEOGRAPHY' || subject === 'HISTORY') &&
      isBlockedGeographyHistoryRoute(subject, country, educationType, track)
    ) return defaultSubjectForGrade(grade);
    return subject;
  };

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
      setRegSpec(getSpecializationForEducationTrack(regEducationTrack));
      setRegSubject('PHYSICS');
    } else if (age >= 17) {
      setRegGrade('G12');
      setRegSpec(getSpecializationForEducationTrack(regEducationTrack));
      setRegSubject('PHYSICS');
    }
    if (age <= 15) setRegEducationTrack('GENERAL');
  };

  const handleGradeChange = (grade: GradeLevel) => {
    setRegGrade(grade);
    const prim = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade);
    const mid = ['G7', 'G8', 'G9'].includes(grade);

    if (prim) {
      setRegSpec('GENERAL');
      setRegEducationTrack('GENERAL');
      if (!PRIMARY_SUBJECTS.includes(regSubject) &&
          !(regSubject === 'TAJWEED' &&
            isSaudiPublicTajweedAvailable(regCountry, grade, regEducationType)) &&
          !(regSubject === 'QURAN_RECITATION' &&
            isSaudiPublicQuranRecitationAvailable(regCountry, grade, regEducationType)) &&
          !(regSubject === 'VISUAL_ARTS' &&
            isSaudiPublicG6VisualArtsAvailable(regCountry, grade, regEducationType)) &&
          !(regSubject === 'LIFE_SKILLS' &&
            isSaudiPublicLifeSkillsAvailable(regCountry, grade, regEducationType, regEducationTrack)) &&
          !(regSubject === 'SAUDI_SOCIAL_STUDIES' && isSaudiSocialStudies(grade))) setRegSubject('PRIMARY_MATH');
    } else if (mid) {
      setRegSpec('GENERAL');
      setRegEducationTrack('GENERAL');
      if (!MIDDLE_SUBJECTS.includes(regSubject) &&
          !(regSubject === 'SAUDI_SOCIAL_STUDIES' && isSaudiSocialStudies(grade))) setRegSubject('ARABIC_LANG');
    } else {
      const educationTrack = normalizeEducationTrackForCountry(regCountry, regEducationTrack);
      setRegEducationTrack(educationTrack);
      setRegSpec(getSpecializationForEducationTrack(educationTrack));
      setRegSubject('PHYSICS');
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      const user = await loginUserAccount(loginIdentifier, loginPassword);
      setSuccessMsg('تم تسجيل الدخول بنجاح! جاري تحميل بياناتك ومسارك الأكاديمي...');
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

  // Step 1: Initiate Parent OTP Verification
  const handleInitiateOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!regName.trim() || regName.trim().length < 3) {
      setErrorMsg('يرجى إدخال اسم الطالب الكامل (ثلاثي على الأقل) لتوثيق الشهادات والمسار الأكاديمي');
      return;
    }

    if (!regUsername.trim() || regUsername.length < 3) {
      setErrorMsg('اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل (بدون مسافات)');
      return;
    }

    if (!regEmail.trim() || !regEmail.includes('@')) {
      setErrorMsg('يرجى إدخال بريد إلكتروني صحيح للطالب');
      return;
    }

    if (!regPassword.trim() || regPassword.length < 6) {
      setErrorMsg('كلمة المرور يجب أن تتكون من 6 خانات على الأقل لضمان أمان الحساب');
      return;
    }

    if (!regParentName.trim() || regParentName.trim().length < 3) {
      setErrorMsg('يرجى كتابة اسم ولي الأمر الكامل للموافقة وتفعيل الرقابة الأبوية');
      return;
    }

    if (!regParentPhone.trim() || regParentPhone.length < 7) {
      setErrorMsg('يرجى إدخال رقم جوال صحيح لولي الأمر لاستلام كود الموافقة والرقابة');
      return;
    }

    if (!regParentEmail.trim() || !regParentEmail.includes('@')) {
      setErrorMsg('يرجى إدخال بريد إلكتروني صحيح لولي الأمر لتلقي تقارير المتابعة والدرجات');
      return;
    }

    // Generate 6-digit OTP code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setRegStep('otp');
    setResendCooldown(60);

    // Simulate SMS dispatch
    setOtpSentToast({
      show: true,
      code,
      phone: regParentPhone
    });
  };

  // Step 2: Verify OTP and Register in Database
  const handleVerifyOtpAndRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (enteredOtp.trim() !== generatedOtp) {
      setErrorMsg('رمز التحقق غير صحيح! يرجى إدخال الرمز المكون من 6 أرقام المرسل إلى جوال ولي الأمر.');
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
        subject: normalizeNationalSubject(regSubject, regCountry, regEducationType, regEducationTrack, regGrade),
        language: regLanguage,
        parentName: regParentName,
        parentPhone: regParentPhone,
        parentEmail: regParentEmail,
        isParentVerified: true,
        parentalSettings: {
          curfewEnabled: regCurfewEnabled,
          curfewStart: '21:30',
          curfewEnd: '06:30',
          maxDailyMinutes: regDailyLimitMinutes,
          restrictedTopics: ['المواضيع السياسية', 'الآراء الشخصية للذكاء الاصطناعي'],
          consentStatus: 'VERIFIED'
        },
        timeLimitMinutes: regDailyLimitMinutes
      });

      setSuccessMsg('تم التحقق من موافقة ولي الأمر وإنشاء حساب الطالب بنجاح! 🎉🎓');
      setTimeout(() => {
        onSuccess(newUser);
        onClose();
      }, 1000);
    } catch (err) {
      setErrorMsg((err as Error)?.message || 'حدث خطأ أثناء حفظ الحساب');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = () => {
    if (resendCooldown > 0) return;
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newCode);
    setResendCooldown(60);
    setOtpSentToast({
      show: true,
      code: newCode,
      phone: regParentPhone
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container modal-auth-wide" onClick={(e) => e.stopPropagation()}>
        
        {/* Simulated SMS Notification Popup */}
        {otpSentToast && (
          <div className="simulated-sms-banner">
            <div className="sms-icon-badge">
              <Smartphone size={20} />
            </div>
            <div className="sms-content">
              <div className="sms-head">
                <span className="sms-sender">رسالة نصية SMS (TeacherAI Consent)</span>
                <span className="sms-to">إلى: {otpSentToast.phone}</span>
              </div>
              <p className="sms-body">
                رمز التحقق وموافقة ولي الأمر على تسجيل الطالب في المنصة هو: <strong className="sms-code-highlight">{otpSentToast.code}</strong>
              </p>
            </div>
            <button 
              type="button" 
              className="btn-quick-fill-code"
              onClick={() => {
                setEnteredOtp(otpSentToast.code);
              }}
              title="تعبئة الرمز تلقائياً"
            >
              تعبئة الرمز ⚡
            </button>
          </div>
        )}

        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="modal-title">
                {regLanguage === 'en' ? 'Student Registration & Parental Supervision' : 'بوابة تسجيل الطلاب والرقابة الأبوية'}
              </h2>
              <p className="modal-subtitle">
                {regLanguage === 'en'
                  ? 'Official national curriculum portal with mandatory parental consent verification'
                  : 'التسجيل الأكاديمي المعتمد مع التحقق الإلزامي من موافقة ولي الأمر عبر رمز SMS'}
              </p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="auth-tab-bar">
          <button
            type="button"
            onClick={() => { setActiveTab('register'); setRegStep('form'); setErrorMsg(''); }}
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
          >
            <UserPlus size={17} />
            <span>تسجيل طالب جديد (مع موافقة ولي الأمر)</span>
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setErrorMsg(''); }}
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
          >
            <LogIn size={17} />
            <span>تسجيل الدخول للطلاب المسجلين</span>
          </button>
        </div>

        {/* Feedback Alerts */}
        {errorMsg && (
          <div className="auth-alert alert-danger">
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="auth-alert alert-success">
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* ─── REGISTER TAB: STEP 1 (STUDENT & PARENT DATA FORM) ─── */}
        {activeTab === 'register' && regStep === 'form' && (
          <form onSubmit={handleInitiateOtp} className="modal-form-wrapper">
            <div className="modal-body auth-scrollable-body">
              
              {/* Selected Track Guidance Banner */}
              {(initialProfile || noticeMessage) && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.16) 0%, rgba(56, 189, 248, 0.12) 100%)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  borderRadius: '12px',
                  padding: '0.85rem 1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Sparkles size={20} className="text-cyan-400" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                      {noticeMessage || (regLanguage === 'en' ? 'Selected Learning Track & Mandatory Onboarding' : 'المسار التعليمي المختار وتأكيد التسجيل')}
                    </div>
                    <div>
                      <span style={{ color: '#38bdf8', fontWeight: 700 }}>
                        {getNationalSubjectLabel(
                          regSubject,
                          regCountry,
                          regGrade,
                          regLanguage,
                          regEducationType,
                          regEducationTrack
                        )}
                      </span>{' • '}
                      <span>{t.gradeLabels[regGrade] || regGrade}</span>{' • '}
                      <span>{getCountryInfo(regCountry)?.nameAr}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '3px' }}>
                      {regLanguage === 'en'
                        ? 'Fill in the mandatory student and parental verification details below to launch your lessons.'
                        : 'يرجى إكمال البيانات الإلزامية وتأكيد موافقة ولي الأمر لتفعيل الحساب والانتقال مباشرة للمحاضرات.'}
                    </div>
                  </div>
                </div>
              )}

              {/* Section 1: Student Details */}
              <div className="auth-section-divider">
                <User size={16} className="text-indigo-400" />
                <span>1. البيانات الأساسية للطالب (إلزامية)</span>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">{t.labelFullName} * (ثلاثي)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="مثال: أحمد علي محمود"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">اسم المستخدم (فريد) *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="ahmed_ali"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value.replace(/\s+/g, '').toLowerCase())}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">البريد الإلكتروني للطالب *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="student@example.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">كلمة مرور الطالب *</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="••••••••"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.countrySelectLabel} *</label>
                  <select
                    className="form-select"
                    value={regCountry}
                    onChange={(e) => {
                        const country = getActiveCurriculumCountry(e.target.value as CountryCode);
                        const educationType = normalizeEducationTypeForCountry(country, regEducationType);
                        const educationTrack = normalizeEducationTrackForCountry(country, regEducationTrack);
                        countryWasChosen.current = true;
                        setRegCountry(country);
                        setRegEducationType(educationType);
                        setRegEducationTrack(educationTrack);
                        setRegSpec(getSpecializationForEducationTrack(educationTrack));
                        setRegSubject(normalizeNationalSubject(
                          regSubject, country, educationType, educationTrack, regGrade
                        ));
                      }}
                      required
                    >
                      {ACTIVE_CURRICULUM_COUNTRIES.map(countryCode => {
                        const countryOption = getCountryInfo(countryCode);
                        return (
                          <option key={countryCode} value={countryCode}>
                            {countryOption.flag} {countryOption.nameAr}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">نوع التعليم *</label>
                  <select
                    className="form-select"
                    value={regEducationType}
                    onChange={(e) => {
                      const educationType = e.target.value as EducationType;
                      setRegEducationType(educationType);
                      setRegSubject(normalizeNationalSubject(
                        regSubject, regCountry, educationType, regEducationTrack, regGrade
                      ));
                    }}
                    required
                  >
                    {countryInfo.availableTypes.map(type => (
                      <option key={type} value={type}>
                        {regLanguage === 'en' ? EDUCATION_TYPE_LABELS[type].en : EDUCATION_TYPE_LABELS[type].ar}
                      </option>
                    ))}
                  </select>
                </div>

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

                <div className="form-group">
                  <label className="form-label">{t.labelGrade} *</label>
                  <select
                    className="form-select"
                    value={regGrade}
                    onChange={(e) => handleGradeChange(e.target.value as GradeLevel)}
                  >
                    <optgroup label="المرحلة الثانوية (الصفوف 10 - 12)">
                      <option value="G12">{t.gradeLabels.G12}</option>
                      <option value="G11">{t.gradeLabels.G11}</option>
                      <option value="G10">{t.gradeLabels.G10}</option>
                    </optgroup>
                    <optgroup label="المرحلة المتوسطة (الصفوف 7 - 9)">
                      <option value="G9">{t.gradeLabels.G9}</option>
                      <option value="G8">{t.gradeLabels.G8}</option>
                      <option value="G7">{t.gradeLabels.G7}</option>
                    </optgroup>
                    <optgroup label="المرحلة الابتدائية (الصفوف 1 - 6)">
                      <option value="G6">{t.gradeLabels.G6}</option>
                      <option value="G5">{t.gradeLabels.G5}</option>
                      <option value="G4">{t.gradeLabels.G4}</option>
                      <option value="G3">{t.gradeLabels.G3}</option>
                      <option value="G2">{t.gradeLabels.G2}</option>
                      <option value="G1">{t.gradeLabels.G1}</option>
                    </optgroup>
                  </select>
                </div>

                {!isPrimary && !isMiddle && (
                  <div className="form-group">
                    <label className="form-label">المسار التعليمي</label>
                    <select
                      className="form-select"
                      value={regEducationTrack}
                      onChange={(e) => {
                        const track = e.target.value as EducationTrack;
                        setRegEducationTrack(track);
                        setRegSpec(getSpecializationForEducationTrack(track));
                        setRegSubject(normalizeNationalSubject(
                          regSubject, regCountry, regEducationType, track, regGrade
                        ));
                      }}
                    >
                      {countryInfo.availableTracks.map(track => (
                        <option key={track} value={track}>
                          {regLanguage === 'en' ? TRACK_LABELS[track].en : TRACK_LABELS[track].ar}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {(isPrimary || isMiddle) && (
                  <div className="form-group">
                    <label className="form-label">{t.labelSpecialization}</label>
                    <select className="form-select select-locked" value="GENERAL" disabled style={{ opacity: 0.85 }}>
                      <option value="GENERAL">التعليم العام الأساسي</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">{t.labelSubject} *</label>
                  <select
                    className="form-select"
                    value={regSubject}
                    onChange={(e) => {
                      const subject = e.target.value as Subject;
                      setRegSubject(subject);
                    }}
                  >
                    {!isPrimary && !isMiddle ? (
                      <optgroup label="المواد التخصصية">
                        {!(regCountry === 'SA' && regGrade === 'G11' &&
                          !isSaudiPublicG11PhysicsAvailable(regCountry, regGrade, regEducationType, regEducationTrack)) && (
                          <option value="PHYSICS">{getNationalSubjectLabel('PHYSICS', regCountry, regGrade, regLanguage, regEducationType, regEducationTrack)}</option>
                        )}
                        <option value="MATH">{getNationalSubjectLabel('MATH', regCountry, regGrade, regLanguage)}</option>
                        <option value="CHEMISTRY">{getNationalSubjectLabel('CHEMISTRY', regCountry, regGrade, regLanguage)}</option>
                        {!(regCountry === 'SA' && regGrade === 'G11' &&
                          !isSaudiPublicG11BiologyAvailable(regCountry, regGrade, regEducationType, regEducationTrack)) && (
                          <option value="BIOLOGY">{getNationalSubjectLabel('BIOLOGY', regCountry, regGrade, regLanguage, regEducationType, regEducationTrack)}</option>
                        )}
                        {isSaudiPublicG11HealthScienceAvailable(
                          regCountry,
                          regGrade,
                          regEducationType,
                          regEducationTrack
                        ) && (
                          <option value="HEALTH_SCIENCE">
                            {getNationalSubjectLabel(
                              'HEALTH_SCIENCE',
                              regCountry,
                              regGrade,
                              regLanguage,
                              regEducationType,
                              regEducationTrack
                            )}
                          </option>
                        )}
                        {isSaudiPublicBusinessG11DigitalTechnologyAvailable(
                          regCountry,
                          regGrade,
                          regEducationType,
                          regEducationTrack
                        ) && (
                          <option value="COMPUTER_SCIENCE">
                            {getNationalSubjectLabel(
                              'COMPUTER_SCIENCE',
                              regCountry,
                              regGrade,
                              regLanguage,
                              regEducationType,
                              regEducationTrack
                            )}
                          </option>
                        )}
                        {isSaudiPublicEnglishAvailable(regCountry, regGrade, regEducationType) && (
                          <option value="ENGLISH">
                            {getNationalSubjectLabel(
                              'ENGLISH',
                              regCountry,
                              regGrade,
                              regLanguage,
                              regEducationType,
                              regEducationTrack
                            )}
                          </option>
                        )}
                        <option value="ARABIC_LIT">{getNationalSubjectLabel('ARABIC_LIT', regCountry, regGrade, regLanguage)}</option>
                        {isLegacyGeographyHistoryAvailable() && (
                          <>
                            <option value="GEOGRAPHY">{getNationalSubjectLabel('GEOGRAPHY', regCountry, regGrade, regLanguage, regEducationType)}</option>
                            <option value="HISTORY">{getNationalSubjectLabel('HISTORY', regCountry, regGrade, regLanguage)}</option>
                          </>
                        )}
                      </optgroup>
                    ) : (
                      <optgroup label="المواد الدراسية">
                        <option value="PRIMARY_MATH">{getNationalSubjectLabel('PRIMARY_MATH', regCountry, regGrade, regLanguage)}</option>
                        <option value="PRIMARY_ARABIC">{getNationalSubjectLabel('PRIMARY_ARABIC', regCountry, regGrade, regLanguage)}</option>
                        <option value="PRIMARY_SCIENCE">{getNationalSubjectLabel('PRIMARY_SCIENCE', regCountry, regGrade, regLanguage)}</option>
                        <option value="ISLAMIC_STUDIES">{getNationalSubjectLabel('ISLAMIC_STUDIES', regCountry, regGrade, regLanguage)}</option>
                        {isSaudiPublicTajweedAvailable(regCountry, regGrade, regEducationType) && (
                          <option value="TAJWEED">{getNationalSubjectLabel('TAJWEED', regCountry, regGrade, regLanguage, regEducationType)}</option>
                        )}
                        {isSaudiPublicQuranRecitationAvailable(regCountry, regGrade, regEducationType) && (
                          <option value="QURAN_RECITATION">{getNationalSubjectLabel('QURAN_RECITATION', regCountry, regGrade, regLanguage, regEducationType)}</option>
                        )}
                        {isSaudiPublicG6VisualArtsAvailable(regCountry, regGrade, regEducationType) && (
                          <option value="VISUAL_ARTS">{getNationalSubjectLabel('VISUAL_ARTS', regCountry, regGrade, regLanguage, regEducationType)}</option>
                        )}
                        {isSaudiPublicLifeSkillsAvailable(regCountry, regGrade, regEducationType, regEducationTrack) && (
                          <option value="LIFE_SKILLS">{getNationalSubjectLabel('LIFE_SKILLS', regCountry, regGrade, regLanguage, regEducationType, regEducationTrack)}</option>
                        )}
                        {isSaudiSocialStudies(regGrade) && (
                          <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', regCountry, regGrade, regLanguage, regEducationType)}</option>
                        )}
                      </optgroup>
                    )}
                    {!isPrimary && !isMiddle && isSaudiSocialStudies(regGrade) && (
                      <optgroup label="مادة سعودية مساندة">
                        <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', regCountry, regGrade, regLanguage, regEducationType)}</option>
                      </optgroup>
                    )}
                  </select>
                </div>
              </div>

              {/* Section 2: Parental Supervision & Mandatory Consent */}
              <div className="auth-section-divider section-parental-divider">
                <ShieldCheck size={18} className="text-purple-400" />
                <span>2. بيانات ولي الأمر والرقابة الأبوية (إلزامية للتحقق والموافقة)</span>
              </div>

              <div className="parental-reg-card">
                <p className="parental-reg-note">
                  🔒 وفقاً لمعايير الأمان التعليمي، يتطلب التسجيل موافقة ولي الأمر الرسمية. سيتم إرسال رمز التحقق المكون من 6 أرقام إلى جوال ولي الأمر لإتمام تفعيل الحساب.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">اسم ولي الأمر الرباعي *</label>
                    <div className="input-with-icon">
                      <User size={15} className="field-icon" />
                      <input
                        type="text"
                        className="form-input"
                        placeholder="مثال: علي محمود السيد"
                        value={regParentName}
                        onChange={(e) => setRegParentName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">رقم جوال ولي الأمر (لاستلام كود SMS) *</label>
                    <div className="input-with-icon">
                      <Phone size={15} className="field-icon text-emerald-400" />
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+966 50 123 4567"
                        value={regParentPhone}
                        onChange={(e) => setRegParentPhone(e.target.value)}
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">البريد الإلكتروني لولي الأمر *</label>
                    <div className="input-with-icon">
                      <Mail size={15} className="field-icon text-indigo-400" />
                      <input
                        type="email"
                        className="form-input"
                        placeholder="parent@example.com"
                        value={regParentEmail}
                        onChange={(e) => setRegParentEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">الحد الأقصى للدراسة اليومية</label>
                    <div className="input-with-icon">
                      <Clock size={15} className="field-icon text-amber-400" />
                      <select 
                        className="form-select"
                        value={regDailyLimitMinutes}
                        onChange={(e) => setRegDailyLimitMinutes(Number(e.target.value))}
                      >
                        <option value="45">45 دقيقة / يومياً</option>
                        <option value="60">60 دقيقة / يومياً</option>
                        <option value="90">90 دقيقة / يومياً</option>
                        <option value="120">120 دقيقة (ساعتان) / يومياً</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label className="checkbox-curfew-label">
                      <input 
                        type="checkbox" 
                        checked={regCurfewEnabled} 
                        onChange={(e) => setRegCurfewEnabled(e.target.checked)}
                      />
                      <Moon size={15} className="text-purple-400" />
                      <span>تفعيل الحظر الليلي التلقائي (من 09:30 مساءً حتى 06:30 صباحاً) للحفاظ على راحة الطالب</span>
                    </label>
                  </div>
                </div>
              </div>

            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>
                {t.btnCancel}
              </button>
              <button type="submit" className="btn-primary btn-proceed-otp">
                <Smartphone size={18} />
                <span>إرسال رمز الموافقة إلى جوال ولي الأمر 📲</span>
              </button>
            </div>
          </form>
        )}

        {/* ─── REGISTER TAB: STEP 2 (OTP VERIFICATION GATE) ─── */}
        {activeTab === 'register' && regStep === 'otp' && (
          <form onSubmit={handleVerifyOtpAndRegister} className="modal-form-wrapper">
            <div className="modal-body otp-body-centered">
              <div className="otp-icon-wrap">
                <ShieldCheck size={36} />
              </div>

              <h3 className="otp-heading">تأكيد موافقة ولي الأمر ورمز التحقق (OTP)</h3>
              <p className="otp-subheading">
                تم إرسال رمز التحقق المكون من 6 أرقام عبر رسالة نصية SMS إلى رقم جوال ولي الأمر:
              </p>

              <div className="otp-phone-display" dir="ltr">
                <Phone size={16} className="text-emerald-400" />
                <strong>{regParentPhone}</strong>
                <button 
                  type="button" 
                  className="btn-change-phone"
                  onClick={() => { setRegStep('form'); setErrorMsg(''); }}
                >
                  تعديل الرقم
                </button>
              </div>

              <div className="otp-input-container">
                <label className="otp-input-label">أدخل رمز التحقق (6 أرقام):</label>
                <input 
                  type="text" 
                  maxLength={6}
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="• • • • • •"
                  className="otp-code-input"
                  autoFocus
                  required
                />
              </div>

              {/* Quick Fill Testing Helper */}
              {generatedOtp && (
                <div className="otp-helper-card">
                  <Sparkles size={16} className="text-amber-400" />
                  <span>الرمز المرسل لجوال ولي الأمر: <strong>{generatedOtp}</strong></span>
                  <button 
                    type="button" 
                    className="btn-quick-fill-chip"
                    onClick={() => setEnteredOtp(generatedOtp)}
                  >
                    تعبئة تلقائية ⚡
                  </button>
                </div>
              )}

              <div className="otp-resend-row">
                {resendCooldown > 0 ? (
                  <span className="cooldown-text">
                    يمكنك طلب إعادة إرسال الرمز بعد ({resendCooldown} ثانية)
                  </span>
                ) : (
                  <button 
                    type="button" 
                    className="btn-resend-otp"
                    onClick={handleResendOtp}
                  >
                    <RefreshCw size={14} />
                    <span>إعادة إرسال كود التحقق SMS</span>
                  </button>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => { setRegStep('form'); setErrorMsg(''); }}
              >
                رجوع لتعديل البيانات
              </button>
              <button 
                type="submit" 
                className="btn-primary btn-confirm-otp"
                disabled={isLoading || enteredOtp.length < 6}
              >
                <CheckCircle2 size={18} />
                <span>{isLoading ? 'جاري التحقق وإنشاء الحساب...' : 'تأكيد الموافقة والدخول للمنصة ✅'}</span>
              </button>
            </div>
          </form>
        )}

        {/* ─── LOGIN TAB ─── */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="modal-form-wrapper">
            <div className="modal-body">
              <div className="form-group full-width">
                <label className="form-label">
                  اسم المستخدم أو البريد الإلكتروني *
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="omar_tamimi / omar.tamimi@student.ai"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">كلمة المرور *</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <div className="demo-users-quick-hint">
                <Sparkles size={14} className="text-amber-400" />
                <span>حساب تجريبي مسجل: اسم المستخدم: <code>omar_tamimi</code> أو <code>sara_shammari</code></span>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn-secondary" onClick={onClose}>
                {t.btnCancel}
              </button>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                <LogIn size={18} />
                <span>{isLoading ? 'جاري التحقق...' : 'تسجيل الدخول'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
