import React, { useState } from 'react';
import type { GradeLevel, Language, Specialization, StudentProfile, Subject } from '../types';
import { getTranslations } from '../i18n/translations';
import { X, User, ShieldAlert, CheckCircle2, Users } from 'lucide-react';

interface StudentProfileModalProps {
  isOpen: boolean;
  profile: StudentProfile;
  onSave: (updated: StudentProfile) => void;
  onSwitchAccount?: () => void;
  onClose: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  profile,
  onSave,
  onSwitchAccount,
  onClose
}) => {
  if (!isOpen) return null;

  const PRIMARY_SUBJECTS: Subject[] = ['PRIMARY_ARABIC', 'PRIMARY_MATH', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'];
  const MIDDLE_SUBJECTS: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];

  const [formData, setFormData] = useState<StudentProfile>(() => {
    const copy = { ...profile };
    if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(copy.gradeLevel)) {
      copy.specialization = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(copy.subject)) {
        copy.subject = 'PRIMARY_ARABIC';
      }
    } else if (['G7', 'G8', 'G9'].includes(copy.gradeLevel)) {
      copy.specialization = 'GENERAL';
      if (['ARABIC_LIT', 'PRIMARY_ARABIC'].includes(copy.subject)) copy.subject = 'ARABIC_LANG';
      if (['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'PRIMARY_SCIENCE'].includes(copy.subject)) copy.subject = 'GENERAL_SCIENCE';
      if (copy.subject === 'PRIMARY_MATH') copy.subject = 'MATH';
    } else {
      if (copy.subject === 'ARABIC_LANG' || copy.subject === 'PRIMARY_ARABIC') copy.subject = 'ARABIC_LIT';
      if (copy.subject === 'GENERAL_SCIENCE' || copy.subject === 'PRIMARY_SCIENCE') copy.subject = 'PHYSICS';
      if (copy.subject === 'PRIMARY_MATH') copy.subject = 'MATH';
      if (copy.specialization === 'GENERAL' && copy.gradeLevel !== 'G10') copy.specialization = 'STEM';
    }
    return copy;
  });
  const t = getTranslations(formData.language);

  const isPrimarySchool = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(formData.gradeLevel);
  const isMiddleSchool = ['G7', 'G8', 'G9'].includes(formData.gradeLevel);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value, 10) || 0;
    let nextGrade = formData.gradeLevel;
    let nextSpec = formData.specialization;
    let nextSubj = formData.subject;

    if (age > 0 && age <= 7) {
      nextGrade = 'G1';
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) nextSubj = 'PRIMARY_ARABIC';
    } else if (age === 8) {
      nextGrade = 'G2';
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) nextSubj = 'PRIMARY_MATH';
    } else if (age === 9) {
      nextGrade = 'G3';
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) nextSubj = 'PRIMARY_SCIENCE';
    } else if (age === 10) {
      nextGrade = 'G4';
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) nextSubj = 'PRIMARY_MATH';
    } else if (age === 11) {
      nextGrade = 'G5';
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) nextSubj = 'PRIMARY_ARABIC';
    } else if (age === 12) {
      nextGrade = 'G6';
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) nextSubj = 'PRIMARY_MATH';
    } else if (age === 13) {
      nextGrade = 'G7';
      nextSpec = 'GENERAL';
      if (!MIDDLE_SUBJECTS.includes(nextSubj)) nextSubj = 'ARABIC_LANG';
    } else if (age === 14) {
      nextGrade = 'G8';
      nextSpec = 'GENERAL';
      if (!MIDDLE_SUBJECTS.includes(nextSubj)) nextSubj = 'MATH';
    } else if (age === 15) {
      nextGrade = 'G9';
      nextSpec = 'GENERAL';
      if (!MIDDLE_SUBJECTS.includes(nextSubj)) nextSubj = 'GENERAL_SCIENCE';
    } else if (age === 16) {
      nextGrade = 'G10';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    } else if (age === 17) {
      nextGrade = 'G11';
      if (nextSpec === 'GENERAL') nextSpec = 'STEM';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    } else if (age >= 18) {
      nextGrade = 'G12';
      if (nextSpec === 'GENERAL') nextSpec = 'STEM';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    }

    setFormData((prev) => ({
      ...prev,
      age,
      gradeLevel: nextGrade,
      specialization: nextSpec,
      subject: nextSubj
    }));
  };

  const handleGradeChange = (grade: GradeLevel) => {
    const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade);
    const isMiddle = ['G7', 'G8', 'G9'].includes(grade);
    let nextAge = formData.age;
    let nextSpec = formData.specialization;
    let nextSubj = formData.subject;

    if (isPrimary) {
      if (grade === 'G1' && (formData.age < 6 || formData.age > 7)) nextAge = 7;
      if (grade === 'G2' && (formData.age < 7 || formData.age > 8)) nextAge = 8;
      if (grade === 'G3' && (formData.age < 8 || formData.age > 9)) nextAge = 9;
      if (grade === 'G4' && (formData.age < 9 || formData.age > 10)) nextAge = 10;
      if (grade === 'G5' && (formData.age < 10 || formData.age > 11)) nextAge = 11;
      if (grade === 'G6' && (formData.age < 11 || formData.age > 12)) nextAge = 12;
      nextSpec = 'GENERAL';
      if (!PRIMARY_SUBJECTS.includes(nextSubj)) {
        if (['MATH'].includes(nextSubj)) nextSubj = 'PRIMARY_MATH';
        else if (['GENERAL_SCIENCE', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY'].includes(nextSubj)) nextSubj = 'PRIMARY_SCIENCE';
        else nextSubj = 'PRIMARY_ARABIC';
      }
    } else if (isMiddle) {
      if (grade === 'G7' && (formData.age < 12 || formData.age > 14)) nextAge = 13;
      if (grade === 'G8' && (formData.age < 13 || formData.age > 15)) nextAge = 14;
      if (grade === 'G9' && (formData.age < 14 || formData.age > 16)) nextAge = 15;
      nextSpec = 'GENERAL';
      if (!MIDDLE_SUBJECTS.includes(nextSubj)) {
        if (['PRIMARY_ARABIC', 'ARABIC_LIT', 'ISLAMIC_STUDIES'].includes(nextSubj)) nextSubj = 'ARABIC_LANG';
        else if (['PRIMARY_MATH'].includes(nextSubj)) nextSubj = 'MATH';
        else nextSubj = 'GENERAL_SCIENCE';
      }
    } else {
      if (grade === 'G10' && formData.age < 15) nextAge = 16;
      if (grade === 'G11' && formData.age < 16) nextAge = 17;
      if (grade === 'G12' && formData.age < 17) nextAge = 18;
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
      if (nextSpec === 'GENERAL' && grade !== 'G10') nextSpec = 'STEM';
    }

    setFormData((prev) => ({
      ...prev,
      gradeLevel: grade,
      age: nextAge,
      specialization: nextSpec,
      subject: nextSubj
    }));
  };

  const handleSpecializationChange = (spec: Specialization) => {
    let nextSubject = formData.subject;
    if (spec === 'HUMANITIES') {
      nextSubject = 'ARABIC_LIT';
    } else if (spec === 'STEM') {
      if (['ARABIC_LIT', 'ARABIC_LANG', 'GENERAL_SCIENCE', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE'].includes(formData.subject)) {
        nextSubject = 'PHYSICS';
      }
    } else if (spec === 'HEALTH') {
      if (!['BIOLOGY', 'CHEMISTRY', 'PHYSICS'].includes(formData.subject)) {
        nextSubject = 'BIOLOGY';
      }
    }
    setFormData((prev) => ({
      ...prev,
      specialization: spec,
      subject: nextSubject
    }));
  };

  const handleSubjectChange = (subj: Subject) => {
    let nextSpec = formData.specialization;
    if (subj === 'ARABIC_LIT' && formData.specialization === 'STEM') {
      nextSpec = 'HUMANITIES';
    } else if (['PHYSICS', 'MATH', 'COMPUTER_SCIENCE'].includes(subj) && formData.specialization === 'HUMANITIES') {
      nextSpec = 'STEM';
    }
    setFormData((prev) => ({
      ...prev,
      subject: subj,
      specialization: nextSpec
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const isMinorUnder13 = formData.age > 0 && formData.age < 13;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <User size={22} />
            </div>
            <div>
              <h2 className="modal-title">{t.profileModalTitle}</h2>
              <p className="modal-subtitle">{t.profileModalSubtitle}</p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form-wrapper">
          <div className="modal-body">
            {/* COPPA Minor Notice */}
            {isMinorUnder13 && (
              <div className="coppa-warning-banner">
                <ShieldAlert className="warning-icon" size={24} />
                <div>
                  <h4 className="warning-title">{t.coppaTitle}</h4>
                  <p className="warning-desc">{t.coppaDesc}</p>
                </div>
              </div>
            )}

            <div className="form-grid">
            {/* Student Name */}
            <div className="form-group">
              <label className="form-label">{t.labelFullName}</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Omar Al-Tamimi"
              />
            </div>

            {/* Age */}
            <div className="form-group">
              <label className="form-label">{t.labelAge}</label>
              <input
                type="number"
                min="6"
                max="25"
                className="form-input"
                value={formData.age}
                onChange={handleAgeChange}
                required
              />
            </div>

            {/* Grade Level */}
            <div className="form-group">
              <label className="form-label">{t.labelGrade}</label>
              <select
                className="form-select"
                value={formData.gradeLevel}
                onChange={(e) => handleGradeChange(e.target.value as GradeLevel)}
              >
                <optgroup label={formData.language === 'en' ? "Primary / Elementary (Grades 1 - 6)" : "المرحلة الابتدائية (الصفوف 1 - 6)"}>
                  <option value="G1">{t.gradeLabels.G1}</option>
                  <option value="G2">{t.gradeLabels.G2}</option>
                  <option value="G3">{t.gradeLabels.G3}</option>
                  <option value="G4">{t.gradeLabels.G4}</option>
                  <option value="G5">{t.gradeLabels.G5}</option>
                  <option value="G6">{t.gradeLabels.G6}</option>
                </optgroup>
                <optgroup label={formData.language === 'en' ? "Middle School (Grades 7 - 9)" : "المرحلة المتوسطة (الصفوف 7 - 9)"}>
                  <option value="G7">{t.gradeLabels.G7}</option>
                  <option value="G8">{t.gradeLabels.G8}</option>
                  <option value="G9">{t.gradeLabels.G9}</option>
                </optgroup>
                <optgroup label={formData.language === 'en' ? "High School (Grades 10 - 12)" : "المرحلة الثانوية (الصفوف 10 - 12)"}>
                  <option value="G10">{t.gradeLabels.G10}</option>
                  <option value="G11">{t.gradeLabels.G11}</option>
                  <option value="G12">{t.gradeLabels.G12}</option>
                </optgroup>
              </select>
            </div>

            {/* Specialization / Academic Track */}
            <div className="form-group">
              <label className="form-label">{t.labelSpecialization}</label>
              {isPrimarySchool ? (
                <div>
                  <select
                    className="form-select select-locked"
                    value="GENERAL"
                    disabled={true}
                    style={{ opacity: 0.85, cursor: 'not-allowed', background: 'rgba(255, 255, 255, 0.04)' }}
                  >
                    <option value="GENERAL">
                      {formData.language === 'en' ? 'General Primary Curriculum (Foundational)' : 'التعليم العام (المرحلة الابتدائية - تعليم أساسي موحد)'}
                    </option>
                  </select>
                  <span className="form-hint" style={{ color: '#38bdf8', marginTop: '0.35rem', display: 'block', fontSize: '0.72rem' }}>
                    💡 {formData.language === 'en' ? 'Core foundational skills for primary school students (no tracks).' : 'التعليم الأساسي التأسيسي لجميع طلاب المرحلة الابتدائية (بدون تشعيب).'}
                  </span>
                </div>
              ) : isMiddleSchool ? (
                <div>
                  <select
                    className="form-select select-locked"
                    value="GENERAL"
                    disabled={true}
                    style={{ opacity: 0.85, cursor: 'not-allowed', background: 'rgba(255, 255, 255, 0.04)' }}
                  >
                    <option value="GENERAL">
                      {formData.language === 'en' ? 'General Middle School Curriculum' : 'التعليم العام (المرحلة المتوسطة - لا يوجد تشعيب)'}
                    </option>
                  </select>
                  <span className="form-hint" style={{ color: '#38bdf8', marginTop: '0.35rem', display: 'block', fontSize: '0.72rem' }}>
                    💡 {formData.language === 'en' ? 'Specialized tracks (STEM/Humanities/Health) begin in High School.' : 'المسارات التخصصية (العلمي والأدبي والصحي) تبدأ في المرحلة الثانوية.'}
                  </span>
                </div>
              ) : (
                <select
                  className="form-select"
                  value={formData.specialization}
                  onChange={(e) => handleSpecializationChange(e.target.value as Specialization)}
                >
                  <option value="STEM">{t.specLabels.STEM}</option>
                  <option value="HUMANITIES">{t.specLabels.HUMANITIES}</option>
                  <option value="HEALTH">{t.specLabels.HEALTH}</option>
                  <option value="GENERAL">{t.specLabels.GENERAL}</option>
                  <option value="VOCATIONAL">{t.specLabels.VOCATIONAL}</option>
                </select>
              )}
            </div>

            {/* Subject */}
            <div className="form-group">
              <label className="form-label">{t.labelSubject}</label>
              <select
                className="form-select"
                value={formData.subject}
                onChange={(e) => handleSubjectChange(e.target.value as Subject)}
              >
                {isPrimarySchool ? (
                  <optgroup label={formData.language === 'en' ? "Elementary Core Subjects" : "المواد الأساسية للمرحلة الابتدائية"}>
                    <option value="PRIMARY_ARABIC">{t.subjectLabels.PRIMARY_ARABIC}</option>
                    <option value="PRIMARY_MATH">{t.subjectLabels.PRIMARY_MATH}</option>
                    <option value="PRIMARY_SCIENCE">{t.subjectLabels.PRIMARY_SCIENCE}</option>
                    <option value="ISLAMIC_STUDIES">{t.subjectLabels.ISLAMIC_STUDIES}</option>
                  </optgroup>
                ) : isMiddleSchool ? (
                  <optgroup label={formData.language === 'en' ? "Middle School Subjects" : "مواد المرحلة المتوسطة"}>
                    <option value="ARABIC_LANG">{t.subjectLabels.ARABIC_LANG}</option>
                    <option value="MATH">{t.subjectLabels.MATH}</option>
                    <option value="GENERAL_SCIENCE">{t.subjectLabels.GENERAL_SCIENCE}</option>
                    <option value="COMPUTER_SCIENCE">{t.subjectLabels.COMPUTER_SCIENCE}</option>
                  </optgroup>
                ) : formData.specialization === 'HUMANITIES' ? (
                  <optgroup label={t.specLabels.HUMANITIES}>
                    <option value="ARABIC_LIT">{t.subjectLabels.ARABIC_LIT}</option>
                  </optgroup>
                ) : formData.specialization === 'HEALTH' ? (
                  <optgroup label={t.specLabels.HEALTH}>
                    <option value="BIOLOGY">{t.subjectLabels.BIOLOGY}</option>
                    <option value="CHEMISTRY">{t.subjectLabels.CHEMISTRY}</option>
                    <option value="PHYSICS">{t.subjectLabels.PHYSICS}</option>
                  </optgroup>
                ) : (
                  <optgroup label={formData.specialization === 'STEM' ? t.specLabels.STEM : t.labelSubject}>
                    <option value="PHYSICS">{t.subjectLabels.PHYSICS}</option>
                    <option value="MATH">{t.subjectLabels.MATH}</option>
                    <option value="CHEMISTRY">{t.subjectLabels.CHEMISTRY}</option>
                    <option value="BIOLOGY">{t.subjectLabels.BIOLOGY}</option>
                    <option value="COMPUTER_SCIENCE">{t.subjectLabels.COMPUTER_SCIENCE}</option>
                    {formData.specialization === 'GENERAL' && (
                      <option value="ARABIC_LIT">{t.subjectLabels.ARABIC_LIT}</option>
                    )}
                  </optgroup>
                )}
              </select>
            </div>

            {/* Language */}
            <div className="form-group">
              <label className="form-label">{t.labelLanguage}</label>
              <select
                className="form-select"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value as Language })}
              >
                <option value="ar">العربية (من اليمين لليسار - RTL)</option>
                <option value="en">English (Left to Right - LTR)</option>
              </select>
            </div>

            {/* Parent Email (for minors) */}
            <div className="form-group full-width">
              <label className="form-label">{t.labelParentEmail}</label>
              <input
                type="email"
                className="form-input"
                value={formData.parentEmail || ''}
                onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                placeholder="parent@example.com"
              />
              <span className="form-hint">{t.parentEmailHint}</span>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {onSwitchAccount ? (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                onClose();
                onSwitchAccount();
              }}
              style={{ background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}
            >
              <Users size={16} />
              <span>{formData.language === 'en' ? 'Switch / Add Student' : 'تبديل الطالب / إضافة حساب'}</span>
            </button>
          ) : <div />}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              {t.btnCancel}
            </button>
            <button type="submit" className="btn-primary">
              <CheckCircle2 size={18} />
              <span>{t.btnSaveProfile}</span>
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};
