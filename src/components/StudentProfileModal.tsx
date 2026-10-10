import React, { useState, useEffect } from 'react';
import type { CountryCode, GradeLevel, Language, StudentProfile, Subject, UserAccount } from '../types';
import { getTranslations } from '../i18n/translations';
import { detectStudentCountry, setManualCountryOverride } from '../services/geoService';
import {
  ACTIVE_CURRICULUM_COUNTRIES,
  EDUCATION_TYPE_LABELS,
  TRACK_LABELS,
  getActiveCurriculumCountry,
  getCountryInfo,
  getSpecializationForEducationTrack,
  getNationalSubjectLabel,
  isSaudiPublicBusinessG11DigitalTechnologyAvailable,
  isSaudiPublicEnglishAvailable,
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
import { getActiveUserAccount } from '../services/database';
import { X, User, ShieldAlert, CheckCircle2, Users, ShieldCheck, Lock, Globe } from 'lucide-react';

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
  const isEn = profile.language === 'en';
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectNotice, setDetectNotice] = useState<string | null>(null);
  const [activeDbUser, setActiveDbUser] = useState<UserAccount | null>(null);

  // Sync active user account from IndexedDB database
  useEffect(() => {
    if (isOpen) {
      getActiveUserAccount().then(user => {
        if (user) {
          setActiveDbUser(user);
        }
      });
    }
  }, [isOpen, profile]);

  const PRIMARY_SUBJECTS: Subject[] = ['PRIMARY_ARABIC', 'PRIMARY_MATH', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'];
  const MIDDLE_SUBJECTS: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];
  const isSaudiPrimaryDigitalSkillsAvailable = (
    gradeLevel: GradeLevel,
    country: CountryCode,
    educationType?: StudentProfile['educationType']
  ) => country === 'SA' && (educationType || 'PUBLIC') === 'PUBLIC' && ['G4', 'G5', 'G6'].includes(gradeLevel);
  const isSaudiSocialStudies = (
    gradeLevel: GradeLevel,
    country: CountryCode,
    educationType?: StudentProfile['educationType'],
    educationTrack?: StudentProfile['educationTrack']
  ) => isSaudiSocialStudiesAvailable(
    gradeLevel,
    country,
    educationType || 'PUBLIC',
    educationTrack || 'GENERAL'
  );
  const isLegacyGeographyHistoryAvailable = (
    country: CountryCode,
    educationType?: StudentProfile['educationType'],
    educationTrack?: StudentProfile['educationTrack']
  ) => !isBlockedGeographyHistoryRoute(
    'GEOGRAPHY',
    country,
    educationType || 'PUBLIC',
    educationTrack || 'GENERAL'
  );
  const isPrimarySubjectAvailable = (
    subject: Subject,
    gradeLevel: GradeLevel,
    country: CountryCode,
    educationType?: StudentProfile['educationType'],
    educationTrack?: StudentProfile['educationTrack']
  ) => PRIMARY_SUBJECTS.includes(subject) ||
    (subject === 'TAJWEED' && isSaudiPublicTajweedAvailable(country, gradeLevel, educationType || 'PUBLIC')) ||
    (subject === 'QURAN_RECITATION' && isSaudiPublicQuranRecitationAvailable(country, gradeLevel, educationType || 'PUBLIC')) ||
    (subject === 'VISUAL_ARTS' && isSaudiPublicG6VisualArtsAvailable(country, gradeLevel, educationType || 'PUBLIC')) ||
    (subject === 'LIFE_SKILLS' && isSaudiPublicLifeSkillsAvailable(country, gradeLevel, educationType || 'PUBLIC', educationTrack || 'GENERAL')) ||
    (subject === 'COMPUTER_SCIENCE' && isSaudiPrimaryDigitalSkillsAvailable(gradeLevel, country, educationType)) ||
    (subject === 'SAUDI_SOCIAL_STUDIES' && isSaudiSocialStudies(gradeLevel, country, educationType, educationTrack));
  const isMiddleSubjectAvailable = (
    subject: Subject,
    gradeLevel: GradeLevel,
    country: CountryCode,
    educationType?: StudentProfile['educationType'],
    educationTrack?: StudentProfile['educationTrack']
  ) => MIDDLE_SUBJECTS.includes(subject) ||
    (subject === 'SAUDI_SOCIAL_STUDIES' && isSaudiSocialStudies(gradeLevel, country, educationType, educationTrack));

  const [formData, setFormData] = useState<StudentProfile>(() => {
    const copy = { ...profile };
    copy.country = getActiveCurriculumCountry(copy.country);
    copy.educationType = normalizeEducationTypeForCountry(copy.country, copy.educationType);
    copy.educationTrack = normalizeEducationTrackForCountry(copy.country, copy.educationTrack);
    if (!['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'].includes(copy.gradeLevel)) {
      copy.specialization = getSpecializationForEducationTrack(copy.educationTrack);
    }
    if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(copy.gradeLevel)) {
      copy.specialization = 'GENERAL';
      if (!isPrimarySubjectAvailable(copy.subject, copy.gradeLevel, copy.country, copy.educationType, copy.educationTrack)) {
        copy.subject = 'PRIMARY_ARABIC';
      }
    } else if (['G7', 'G8', 'G9'].includes(copy.gradeLevel)) {
      copy.specialization = 'GENERAL';
      if (['ARABIC_LIT', 'GEOGRAPHY', 'HISTORY', 'PRIMARY_ARABIC', 'TAJWEED', 'QURAN_RECITATION', 'VISUAL_ARTS', 'LIFE_SKILLS'].includes(copy.subject) ||
          (copy.subject === 'SAUDI_SOCIAL_STUDIES' &&
            !isSaudiSocialStudies(copy.gradeLevel, copy.country, copy.educationType, copy.educationTrack))) copy.subject = 'ARABIC_LANG';
      if (['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'HEALTH_SCIENCE', 'PRIMARY_SCIENCE'].includes(copy.subject)) copy.subject = 'GENERAL_SCIENCE';
      if (copy.subject === 'PRIMARY_MATH') copy.subject = 'MATH';
    } else {
      if (copy.subject === 'TAJWEED' || copy.subject === 'QURAN_RECITATION' || copy.subject === 'VISUAL_ARTS' || copy.subject === 'LIFE_SKILLS') copy.subject = 'ARABIC_LIT';
      if (copy.subject === 'ENGLISH' &&
          !isSaudiPublicEnglishAvailable(copy.country, copy.gradeLevel, copy.educationType)) {
        copy.subject = 'ARABIC_LIT';
      }
      if (copy.subject === 'PHYSICS' && copy.country === 'SA' && copy.gradeLevel === 'G11' &&
          !isSaudiPublicG11PhysicsAvailable(copy.country, copy.gradeLevel, copy.educationType, copy.educationTrack)) {
        copy.subject = 'ARABIC_LIT';
      }
      if (copy.subject === 'BIOLOGY' && copy.country === 'SA' && copy.gradeLevel === 'G11' &&
          !isSaudiPublicG11BiologyAvailable(copy.country, copy.gradeLevel, copy.educationType, copy.educationTrack)) {
        copy.subject = 'ARABIC_LIT';
      }
      if (copy.subject === 'HEALTH_SCIENCE' &&
          !isSaudiPublicG11HealthScienceAvailable(copy.country, copy.gradeLevel, copy.educationType, copy.educationTrack)) {
        copy.subject = 'ARABIC_LIT';
      }
      if (copy.subject === 'COMPUTER_SCIENCE' && copy.country === 'SA' && copy.gradeLevel === 'G11' &&
          !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            copy.country,
            copy.gradeLevel,
            copy.educationType,
            copy.educationTrack
          )) {
        copy.subject = 'ARABIC_LIT';
      }
      if (copy.subject === 'ARABIC_LANG' || copy.subject === 'PRIMARY_ARABIC') copy.subject = 'ARABIC_LIT';
      if (copy.subject === 'SAUDI_SOCIAL_STUDIES' &&
          !isSaudiSocialStudies(copy.gradeLevel, copy.country, copy.educationType, copy.educationTrack)) copy.subject = 'ARABIC_LIT';
      if ((copy.subject === 'GEOGRAPHY' || copy.subject === 'HISTORY') &&
          !isLegacyGeographyHistoryAvailable(copy.country, copy.educationType, copy.educationTrack)) copy.subject = 'ARABIC_LIT';
      if (copy.subject === 'GENERAL_SCIENCE' || copy.subject === 'PRIMARY_SCIENCE') copy.subject = 'PHYSICS';
      if (copy.subject === 'PRIMARY_MATH') copy.subject = 'MATH';
      
    }
    return copy;
  });

  useEffect(() => {
    if (
      formData.country === 'SA' &&
      formData.gradeLevel === 'G11' &&
      ((formData.subject === 'PHYSICS' &&
        !isSaudiPublicG11PhysicsAvailable(
          formData.country,
          formData.gradeLevel,
          formData.educationType,
          formData.educationTrack
        )) ||
        (formData.subject === 'BIOLOGY' &&
          !isSaudiPublicG11BiologyAvailable(
            formData.country,
            formData.gradeLevel,
            formData.educationType,
            formData.educationTrack
          )) ||
        (formData.subject === 'HEALTH_SCIENCE' &&
          !isSaudiPublicG11HealthScienceAvailable(
            formData.country,
            formData.gradeLevel,
            formData.educationType,
            formData.educationTrack
          ))) ||
      (formData.country === 'SA' &&
          formData.gradeLevel === 'G11' &&
          formData.subject === 'COMPUTER_SCIENCE' &&
          !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            formData.country,
            formData.gradeLevel,
            formData.educationType,
            formData.educationTrack
          )) ||
      (formData.subject === 'HEALTH_SCIENCE' &&
        !isSaudiPublicG11HealthScienceAvailable(
          formData.country,
          formData.gradeLevel,
          formData.educationType,
          formData.educationTrack
        )) ||
      ((formData.subject === 'TAJWEED' &&
        !isSaudiPublicTajweedAvailable(formData.country, formData.gradeLevel, formData.educationType)) ||
        (formData.subject === 'QURAN_RECITATION' &&
          !isSaudiPublicQuranRecitationAvailable(formData.country, formData.gradeLevel, formData.educationType)) ||
        (formData.subject === 'VISUAL_ARTS' &&
          !isSaudiPublicG6VisualArtsAvailable(formData.country, formData.gradeLevel, formData.educationType)) ||
        (formData.subject === 'LIFE_SKILLS' &&
          !isSaudiPublicLifeSkillsAvailable(formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)))
    ) {
        setFormData(current => current.subject === 'TAJWEED' || current.subject === 'QURAN_RECITATION' || current.subject === 'VISUAL_ARTS' || current.subject === 'LIFE_SKILLS' ||
          current.subject === 'PHYSICS' || current.subject === 'BIOLOGY' ||
        current.subject === 'HEALTH_SCIENCE' || current.subject === 'COMPUTER_SCIENCE'
        ? {
            ...current,
            subject: (current.subject === 'TAJWEED' || current.subject === 'QURAN_RECITATION' || current.subject === 'VISUAL_ARTS' || current.subject === 'LIFE_SKILLS') &&
              ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(current.gradeLevel)
              ? 'PRIMARY_ARABIC'
              : (current.subject === 'TAJWEED' || current.subject === 'QURAN_RECITATION' || current.subject === 'VISUAL_ARTS' || current.subject === 'LIFE_SKILLS') &&
                ['G7', 'G8', 'G9'].includes(current.gradeLevel)
              ? 'ARABIC_LANG'
              : 'ARABIC_LIT'
          }
        : current);
    }
  }, [formData.country, formData.educationType, formData.educationTrack, formData.gradeLevel, formData.subject]);

  if (!isOpen) return null;

  const t = getTranslations(formData.language);
  const countryInfo = getCountryInfo(formData.country);

  const isPrimarySchool = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(formData.gradeLevel);
  const isMiddleSchool = ['G7', 'G8', 'G9'].includes(formData.gradeLevel);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value, 10) || 0;
    let nextGrade = formData.gradeLevel;
    let nextSpec = formData.specialization;
    let nextSubj = formData.subject;
    let nextTrack = formData.educationTrack || 'GENERAL';

    if (age > 0 && age <= 7) {
      nextGrade = 'G1';
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'PRIMARY_ARABIC';
    } else if (age === 8) {
      nextGrade = 'G2';
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'PRIMARY_MATH';
    } else if (age === 9) {
      nextGrade = 'G3';
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'PRIMARY_SCIENCE';
    } else if (age === 10) {
      nextGrade = 'G4';
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'PRIMARY_MATH';
    } else if (age === 11) {
      nextGrade = 'G5';
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'PRIMARY_ARABIC';
    } else if (age === 12) {
      nextGrade = 'G6';
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'PRIMARY_MATH';
    } else if (age === 13) {
      nextGrade = 'G7';
      nextSpec = 'GENERAL';
      if (!isMiddleSubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'ARABIC_LANG';
    } else if (age === 14) {
      nextGrade = 'G8';
      nextSpec = 'GENERAL';
      if (!isMiddleSubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'MATH';
    } else if (age === 15) {
      nextGrade = 'G9';
      nextSpec = 'GENERAL';
      if (!isMiddleSubjectAvailable(nextSubj, nextGrade, formData.country, formData.educationType, formData.educationTrack)) nextSubj = 'GENERAL_SCIENCE';
    } else if (age === 16) {
      nextGrade = 'G10';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'VISUAL_ARTS' || nextSubj === 'LIFE_SKILLS' || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    } else if (age === 17) {
      nextGrade = 'G11';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'VISUAL_ARTS' || nextSubj === 'LIFE_SKILLS' || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    } else if (age >= 18) {
      nextGrade = 'G12';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'VISUAL_ARTS' || nextSubj === 'LIFE_SKILLS' || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    }
    if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'].includes(nextGrade)) {
      nextTrack = 'GENERAL';
    }
    nextSpec = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'].includes(nextGrade)
      ? 'GENERAL'
      : getSpecializationForEducationTrack(nextTrack);
    if (nextSubj === 'ENGLISH' &&
        !isSaudiPublicEnglishAvailable(formData.country, nextGrade, formData.educationType)) {
      nextSubj = 'ARABIC_LIT';
    }

    setFormData((prev) => ({
      ...prev,
      age,
      gradeLevel: nextGrade,
      specialization: nextSpec,
      educationTrack: nextTrack,
      subject: nextSubj
    }));
  };

  const handleGradeChange = (grade: GradeLevel) => {
    const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade);
    const isMiddle = ['G7', 'G8', 'G9'].includes(grade);
    let nextAge = formData.age;
    let nextSpec = formData.specialization;
    let nextSubj = formData.subject;
    let nextTrack = formData.educationTrack || 'GENERAL';

    if (isPrimary) {
      nextTrack = 'GENERAL';
      if (grade === 'G1' && (formData.age < 6 || formData.age > 7)) nextAge = 7;
      if (grade === 'G2' && (formData.age < 7 || formData.age > 8)) nextAge = 8;
      if (grade === 'G3' && (formData.age < 8 || formData.age > 9)) nextAge = 9;
      if (grade === 'G4' && (formData.age < 9 || formData.age > 10)) nextAge = 10;
      if (grade === 'G5' && (formData.age < 10 || formData.age > 11)) nextAge = 11;
      if (grade === 'G6' && (formData.age < 11 || formData.age > 12)) nextAge = 12;
      nextSpec = 'GENERAL';
      if (!isPrimarySubjectAvailable(nextSubj, grade, formData.country, formData.educationType, formData.educationTrack)) {
        if (['MATH'].includes(nextSubj)) nextSubj = 'PRIMARY_MATH';
        else if (['GENERAL_SCIENCE', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY'].includes(nextSubj)) nextSubj = 'PRIMARY_SCIENCE';
        else nextSubj = 'PRIMARY_ARABIC';
      }
    } else if (isMiddle) {
      nextTrack = 'GENERAL';
      if (grade === 'G7' && (formData.age < 12 || formData.age > 14)) nextAge = 13;
      if (grade === 'G8' && (formData.age < 13 || formData.age > 15)) nextAge = 14;
      if (grade === 'G9' && (formData.age < 14 || formData.age > 16)) nextAge = 15;
      nextSpec = 'GENERAL';
      if (!isMiddleSubjectAvailable(nextSubj, grade, formData.country, formData.educationType, formData.educationTrack)) {
        if (['PRIMARY_ARABIC', 'ARABIC_LIT', 'ISLAMIC_STUDIES'].includes(nextSubj)) nextSubj = 'ARABIC_LANG';
        else if (['PRIMARY_MATH'].includes(nextSubj)) nextSubj = 'MATH';
        else nextSubj = 'GENERAL_SCIENCE';
      }
    } else {
      if (grade === 'G10' && formData.age < 15) nextAge = 16;
      if (grade === 'G11' && formData.age < 16) nextAge = 17;
      if (grade === 'G12' && formData.age < 17) nextAge = 18;
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'VISUAL_ARTS' || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    }
    if (nextSubj === 'ENGLISH' &&
        !isSaudiPublicEnglishAvailable(formData.country, grade, formData.educationType)) {
      nextSubj = 'ARABIC_LIT';
    }
    nextSpec = isPrimary || isMiddle
      ? 'GENERAL'
      : getSpecializationForEducationTrack(nextTrack);

    setFormData((prev) => ({
      ...prev,
      gradeLevel: grade,
      age: nextAge,
      specialization: nextSpec,
      educationTrack: nextTrack,
      subject: nextSubj
    }));
  };

  const handleSubjectChange = (subj: Subject) => {
    setFormData((prev) => ({
      ...prev,
      subject: subj
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guestLabel = isEn ? 'Guest Student' : 'طالب زائر';
    const cleanName = (val?: string) => (val && val !== 'عمر التميمي' && val !== 'احمد علي' && val !== 'Ahmed Ali') ? val : '';

    const finalName = cleanName(activeDbUser?.name) || cleanName(profile.name) || guestLabel;
    const finalNameAr = cleanName(activeDbUser?.nameAr) || cleanName(profile.nameAr) || finalName;
    const finalNameEn = cleanName(activeDbUser?.nameEn) || cleanName(profile.nameEn) || (isEn ? finalName : 'Guest Student');
    const finalId = activeDbUser?.id || profile.id;

    onSave({
      ...formData,
      id: finalId,
      name: finalName,
      nameAr: finalNameAr,
      nameEn: finalNameEn
    });
    onClose();
  };

  const isMinorUnder13 = formData.age > 0 && formData.age < 13;
  const guestLabel = isEn ? 'Guest Student' : 'طالب زائر';
  const cleanName = (val?: string) => (val && val !== 'عمر التميمي' && val !== 'احمد علي' && val !== 'Ahmed Ali') ? val : '';
  const officialStudentName = cleanName(activeDbUser?.name) || cleanName(profile.name) || guestLabel;
  const officialStudentId = activeDbUser?.username ? `@${activeDbUser.username}` : (activeDbUser?.id || profile.id || '@student');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container modal-profile-container" onClick={(e) => e.stopPropagation()}>
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

            {/* Official Student Academic Identity Card (Fetched from Database - Non Editable) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '16px',
              padding: '1.25rem',
              marginBottom: '0.75rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1.5px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0,
                    position: 'relative'
                  }}>
                    <ShieldCheck size={28} />
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#10b981',
                      border: '2px solid #0f172a'
                    }} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        color: '#34d399',
                        fontSize: '0.74rem',
                        fontWeight: 700
                      }}>
                        <CheckCircle2 size={12} />
                        <span>قاعدة البيانات المركزية للطلاب</span>
                      </span>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        background: 'rgba(245, 158, 11, 0.12)',
                        border: '1px solid rgba(245, 158, 11, 0.32)',
                        color: '#fbbf24',
                        fontSize: '0.74rem',
                        fontWeight: 700
                      }}>
                        <Lock size={12} />
                        <span>الاسم معتمد ومحمي من التعديل</span>
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0.15rem 0 0.35rem 0'
                    }}>
                      {officialStudentName}
                    </h3>
                    <div style={{
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      flexWrap: 'wrap'
                    }}>
                      <span><strong>رقم القيد الأكاديمي:</strong> {officialStudentId}</span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                      <span><strong>الحالة:</strong> حساب موثق ومسجل</span>
                      {activeDbUser?.email && (
                        <>
                          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                          <span><strong>البريد:</strong> {activeDbUser.email}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {onSwitchAccount && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSwitchAccount();
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.1rem',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.35)',
                      color: '#38bdf8',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                    title="التبديل إلى طالب آخر أو إنشاء حساب طالب جديد"
                  >
                    <Users size={16} />
                    <span>تبديل الطالب / إضافة حساب</span>
                  </button>
                )}
              </div>
              <div style={{
                marginTop: '0.85rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.75rem',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.4rem',
                lineHeight: 1.5
              }}>
                <span>ℹ️</span>
                <span>يتم جلب اسم الطالب وسجله الدراسي مباشرة من قاعدة البيانات المركزية ولا يمكن تعديل الاسم يدوياً من هذه الخانة لضمان صحة الشهادات والتقارير الأكاديمية.</span>
              </div>
            </div>

            {/* Section Divider */}
            <div className="profile-section-divider">
              <span className="section-divider-title">إعدادات المنهج والدراسة التكيفية</span>
            </div>

            {/* Official State / National Curriculum Country (Full Width Card) */}
            <div className="form-group full-width country-picker-card">
              <div className="country-picker-header">
                <div className="country-label-wrap">
                  <label className="form-label" style={{ margin: 0 }}>
                    <Globe size={16} style={{ display: 'inline', marginInlineEnd: '0.4rem', color: '#38bdf8' }} />
                    {t.countrySelectLabel}
                  </label>
                  <span className={`badge-geo-state ${formData.isAutoDetectedCountry ? 'auto' : 'manual'}`}>
                    {formData.isAutoDetectedCountry ? '✨ كشف جغرافي تلقائي وفق موقعك' : '✏️ تم التحديد يدوياً'}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-auto-detect-geo"
                  onClick={async () => {
                    setIsDetecting(true);
                    try {
                      setManualCountryOverride(false);
                      const res = await detectStudentCountry(true);
                      const country = getActiveCurriculumCountry(res.country);
                      const educationType = normalizeEducationTypeForCountry(country, formData.educationType);
                      const educationTrack = normalizeEducationTrackForCountry(country, formData.educationTrack);
                      const keepSubject = !isPrimarySchool || isPrimarySubjectAvailable(
                        formData.subject, formData.gradeLevel, country, educationType, educationTrack
                      );
                      const keepSaudiSocialStudies = formData.subject !== 'SAUDI_SOCIAL_STUDIES' ||
                        isSaudiSocialStudies(formData.gradeLevel, country, educationType, educationTrack);
                      const keepLegacyGeographyHistory =
                        (formData.subject !== 'GEOGRAPHY' && formData.subject !== 'HISTORY') ||
                        isLegacyGeographyHistoryAvailable(country, educationType, educationTrack);
                      const keepEnglish =
                        formData.subject !== 'ENGLISH' ||
                        isSaudiPublicEnglishAvailable(country, formData.gradeLevel, educationType);
                      setFormData(prev => ({
                        ...prev,
                        country,
                        educationType,
                        educationTrack,
                        specialization: isPrimarySchool || isMiddleSchool
                          ? 'GENERAL'
                          : getSpecializationForEducationTrack(educationTrack),
                        subject: keepSubject && keepSaudiSocialStudies && keepLegacyGeographyHistory && keepEnglish
                          ? prev.subject
                          : isPrimarySchool ? 'PRIMARY_ARABIC' : isMiddleSchool ? 'ARABIC_LANG' : 'ARABIC_LIT',
                        detectedCity: res.city,
                        isAutoDetectedCountry: true
                      }));
                      setDetectNotice(`📍 تم التحديد التلقائي بنجاح وفق موقعك (${res.city || res.countryName}) وتم ضبط المنهج!`);
                    } catch {
                      setDetectNotice('تعذر تحديد الموقع الجغرافي تلقائياً');
                    } finally {
                      setIsDetecting(false);
                    }
                  }}
                  title="العودة للاكتشاف التلقائي لبلد الدخول بالذكاء الجغرافي"
                >
                  {isDetecting ? '⏳ جارٍ التحديد...' : '📍 كشف موقعي تلقائياً'}
                </button>
              </div>
              <select
                className="form-select country-select-input"
                value={formData.country || 'SA'}
                onChange={(e) => {
                  const chosenCountry = getActiveCurriculumCountry(e.target.value as CountryCode);
                  const educationType = normalizeEducationTypeForCountry(chosenCountry, formData.educationType);
                  const educationTrack = normalizeEducationTrackForCountry(chosenCountry, formData.educationTrack);
                  setManualCountryOverride(true);
                  const keepSubject = !isPrimarySchool || isPrimarySubjectAvailable(
                    formData.subject, formData.gradeLevel, chosenCountry, educationType, educationTrack
                  );
                  const keepSaudiSocialStudies = formData.subject !== 'SAUDI_SOCIAL_STUDIES' ||
                    isSaudiSocialStudies(formData.gradeLevel, chosenCountry, educationType, educationTrack);
                  const keepLegacyGeographyHistory =
                    (formData.subject !== 'GEOGRAPHY' && formData.subject !== 'HISTORY') ||
                    isLegacyGeographyHistoryAvailable(chosenCountry, educationType, educationTrack);
                  const keepEnglish =
                    formData.subject !== 'ENGLISH' ||
                    isSaudiPublicEnglishAvailable(chosenCountry, formData.gradeLevel, educationType);
                  setFormData({
                    ...formData,
                    country: chosenCountry,
                    educationType,
                    educationTrack,
                    specialization: isPrimarySchool || isMiddleSchool
                      ? 'GENERAL'
                      : getSpecializationForEducationTrack(educationTrack),
                    subject: keepSubject && keepSaudiSocialStudies && keepLegacyGeographyHistory && keepEnglish
                      ? formData.subject
                      : isPrimarySchool ? 'PRIMARY_ARABIC' : isMiddleSchool ? 'ARABIC_LANG' : 'ARABIC_LIT',
                    isAutoDetectedCountry: false
                  });
                  setDetectNotice(`✏️ تم تثبيت الدولة يدوياً: لن يتم تغييرها تلقائياً.`);
                }}
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
              {detectNotice && (
                <span className="geo-detect-toast" style={{ color: formData.isAutoDetectedCountry ? '#10b981' : '#f59e0b', fontSize: '0.72rem', marginTop: '0.35rem', display: 'block' }}>
                  {detectNotice}
                </span>
              )}
            </div>

            <div className="form-grid">

            {/* Education Type (حكومي / أهلي / شرعي / دولي) */}
            <div className="form-group">
              <label className="form-label">{t.educationTypeLabel || 'نوع التعليم'}</label>
              <select
                className="form-select"
                value={formData.educationType || 'PUBLIC'}
                onChange={(e) => {
                  const educationType = e.target.value as StudentProfile['educationType'];
                  const keepSubject = formData.subject !== 'SAUDI_SOCIAL_STUDIES' ||
                    isSaudiSocialStudies(formData.gradeLevel, formData.country, educationType, formData.educationTrack);
                  const keepLegacyGeographyHistory =
                    (formData.subject !== 'GEOGRAPHY' && formData.subject !== 'HISTORY') ||
                    isLegacyGeographyHistoryAvailable(formData.country, educationType, formData.educationTrack);
                  const keepEnglish =
                    formData.subject !== 'ENGLISH' ||
                    isSaudiPublicEnglishAvailable(formData.country, formData.gradeLevel, educationType);
                  setFormData({
                    ...formData,
                    educationType,
                    subject: keepSubject && keepLegacyGeographyHistory && keepEnglish ? formData.subject : isPrimarySchool
                      ? 'PRIMARY_ARABIC'
                      : isMiddleSchool ? 'ARABIC_LANG' : 'ARABIC_LIT'
                  });
                }}
              >
                {countryInfo.availableTypes.map(type => (
                  <option key={type} value={type}>
                    {formData.language === 'en' ? EDUCATION_TYPE_LABELS[type].en : EDUCATION_TYPE_LABELS[type].ar}
                  </option>
                ))}
              </select>
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

            {/* Primary and middle school have no specialized education tracks. */}
            {isPrimarySchool || isMiddleSchool ? (
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
                ) : (
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
                )}
              </div>
            ) : null}

            {!isPrimarySchool && !isMiddleSchool && (
              <div className="form-group">
                <label className="form-label">
                  {formData.language === 'en' ? 'Education track' : 'المسار التعليمي'}
                </label>
                <select
                  className="form-select"
                  value={formData.educationTrack || 'GENERAL'}
                  onChange={(e) => {
                    const educationTrack = e.target.value as StudentProfile['educationTrack'];
                    const keepSocialStudies = formData.subject !== 'SAUDI_SOCIAL_STUDIES' ||
                      isSaudiSocialStudies(
                        formData.gradeLevel,
                        formData.country,
                        formData.educationType,
                        educationTrack
                      );
                    const keepLegacyGeographyHistory =
                      (formData.subject !== 'GEOGRAPHY' && formData.subject !== 'HISTORY') ||
                      !isBlockedGeographyHistoryRoute(
                        formData.subject,
                        formData.country,
                        formData.educationType || 'PUBLIC',
                        educationTrack || 'GENERAL'
                      );
                    setFormData({
                      ...formData,
                      educationTrack,
                      specialization: getSpecializationForEducationTrack(
                        educationTrack || 'GENERAL'
                      ),
                      subject: keepSocialStudies && keepLegacyGeographyHistory
                        ? formData.subject
                        : 'ARABIC_LIT'
                    });
                  }}
                >
                  {countryInfo.availableTracks.map(track => (
                    <option key={track} value={track}>
                      {formData.language === 'en' ? TRACK_LABELS[track].en : TRACK_LABELS[track].ar}
                    </option>
                  ))}
                </select>
              </div>
            )}

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
                    <option value="PRIMARY_ARABIC">{getNationalSubjectLabel('PRIMARY_ARABIC', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="PRIMARY_MATH">{getNationalSubjectLabel('PRIMARY_MATH', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="PRIMARY_SCIENCE">{getNationalSubjectLabel('PRIMARY_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="ISLAMIC_STUDIES">{getNationalSubjectLabel('ISLAMIC_STUDIES', formData.country, formData.gradeLevel, formData.language)}</option>
                    {isSaudiPublicTajweedAvailable(formData.country, formData.gradeLevel, formData.educationType) && (
                      <option value="TAJWEED">{getNationalSubjectLabel('TAJWEED', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    )}
                    {isSaudiPublicQuranRecitationAvailable(formData.country, formData.gradeLevel, formData.educationType) && (
                      <option value="QURAN_RECITATION">{getNationalSubjectLabel('QURAN_RECITATION', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    )}
                    {isSaudiPublicG6VisualArtsAvailable(formData.country, formData.gradeLevel, formData.educationType) && (
                      <option value="VISUAL_ARTS">{getNationalSubjectLabel('VISUAL_ARTS', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    )}
                    {isSaudiPublicLifeSkillsAvailable(
                      formData.country,
                      formData.gradeLevel,
                      formData.educationType,
                      formData.educationTrack
                    ) && (
                      <option value="LIFE_SKILLS">
                        {getNationalSubjectLabel(
                          'LIFE_SKILLS',
                          formData.country,
                          formData.gradeLevel,
                          formData.language,
                          formData.educationType,
                          formData.educationTrack
                        )}
                      </option>
                    )}
                    {isSaudiPrimaryDigitalSkillsAvailable(formData.gradeLevel, formData.country, formData.educationType) && (
                      <option value="COMPUTER_SCIENCE">{getNationalSubjectLabel('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                    )}
                    {isSaudiSocialStudies(formData.gradeLevel, formData.country, formData.educationType, formData.educationTrack) && (
                      <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    )}
                  </optgroup>
                ) : isMiddleSchool ? (
                  <optgroup label={formData.language === 'en' ? "Middle School Subjects" : "مواد المرحلة المتوسطة"}>
                    <option value="ARABIC_LANG">{getNationalSubjectLabel('ARABIC_LANG', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="MATH">{getNationalSubjectLabel('MATH', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="GENERAL_SCIENCE">{getNationalSubjectLabel('GENERAL_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="COMPUTER_SCIENCE">{getNationalSubjectLabel('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                    {isSaudiSocialStudies(formData.gradeLevel, formData.country, formData.educationType, formData.educationTrack) && (
                      <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    )}
                  </optgroup>
                ) : formData.country === 'SA' &&
                  formData.gradeLevel === 'G11' &&
                  formData.educationTrack === 'BUSINESS' ? (
                  <optgroup label={TRACK_LABELS.BUSINESS[formData.language === 'en' ? 'en' : 'ar']}>
                    {isSaudiPublicBusinessG11DigitalTechnologyAvailable(
                      formData.country,
                      formData.gradeLevel,
                      formData.educationType,
                      formData.educationTrack
                    ) && (
                      <option value="COMPUTER_SCIENCE">
                        {getNationalSubjectLabel(
                          'COMPUTER_SCIENCE',
                          formData.country,
                          formData.gradeLevel,
                          formData.language,
                          formData.educationType,
                          formData.educationTrack
                        )}
                      </option>
                    )}
                    <option value="ARABIC_LIT">
                      {getNationalSubjectLabel(
                        'ARABIC_LIT',
                        formData.country,
                        formData.gradeLevel,
                        formData.language
                      )}
                    </option>
                  </optgroup>
                ) : formData.specialization === 'HUMANITIES' ? (
                  <optgroup label={t.specLabels.HUMANITIES}>
                    <option value="ARABIC_LIT">{getNationalSubjectLabel('ARABIC_LIT', formData.country, formData.gradeLevel, formData.language)}</option>
                    {isLegacyGeographyHistoryAvailable(formData.country, formData.educationType, formData.educationTrack) && (
                      <>
                        <option value="GEOGRAPHY">{getNationalSubjectLabel('GEOGRAPHY', formData.country, formData.gradeLevel, formData.language)}</option>
                        <option value="HISTORY">{getNationalSubjectLabel('HISTORY', formData.country, formData.gradeLevel, formData.language)}</option>
                      </>
                    )}
                  </optgroup>
                ) : formData.specialization === 'HEALTH' ? (
                  <optgroup label={t.specLabels.HEALTH}>
                    {isSaudiPublicG11HealthScienceAvailable(
                      formData.country,
                      formData.gradeLevel,
                      formData.educationType,
                      formData.educationTrack
                    ) && (
                      <option value="HEALTH_SCIENCE">
                        {getNationalSubjectLabel('HEALTH_SCIENCE', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                      </option>
                    )}
                    {!(formData.country === 'SA' && formData.gradeLevel === 'G11' &&
                      !isSaudiPublicG11BiologyAvailable(formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                      <option value="BIOLOGY">{getNationalSubjectLabel('BIOLOGY', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                    )}
                    <option value="CHEMISTRY">{getNationalSubjectLabel('CHEMISTRY', formData.country, formData.gradeLevel, formData.language)}</option>
                    {!(formData.country === 'SA' && formData.gradeLevel === 'G11' &&
                      !isSaudiPublicG11PhysicsAvailable(formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                      <option value="PHYSICS">{getNationalSubjectLabel('PHYSICS', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                    )}
                    {isSaudiSocialStudies(formData.gradeLevel, formData.country, formData.educationType, formData.educationTrack) && (
                      <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    )}
                  </optgroup>
                ) : (
                  <optgroup label={formData.specialization === 'STEM' ? t.specLabels.STEM : t.labelSubject}>
                    {!(formData.country === 'SA' && formData.gradeLevel === 'G11' &&
                      !isSaudiPublicG11PhysicsAvailable(formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                      <option value="PHYSICS">{getNationalSubjectLabel('PHYSICS', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                    )}
                    <option value="MATH">{getNationalSubjectLabel('MATH', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="CHEMISTRY">{getNationalSubjectLabel('CHEMISTRY', formData.country, formData.gradeLevel, formData.language)}</option>
                    {isSaudiPublicG11HealthScienceAvailable(
                      formData.country,
                      formData.gradeLevel,
                      formData.educationType,
                      formData.educationTrack
                    ) && (
                      <option value="HEALTH_SCIENCE">
                        {getNationalSubjectLabel('HEALTH_SCIENCE', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                      </option>
                    )}
                    {!(formData.country === 'SA' && formData.gradeLevel === 'G11' &&
                      !isSaudiPublicG11BiologyAvailable(formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                      <option value="BIOLOGY">{getNationalSubjectLabel('BIOLOGY', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                    )}
                    {!(formData.country === 'SA' && formData.gradeLevel === 'G11') ||
                      isSaudiPublicBusinessG11DigitalTechnologyAvailable(
                        formData.country,
                        formData.gradeLevel,
                        formData.educationType,
                        formData.educationTrack
                      ) ? (
                      <option value="COMPUTER_SCIENCE">
                        {getNationalSubjectLabel(
                          'COMPUTER_SCIENCE',
                          formData.country,
                          formData.gradeLevel,
                          formData.language,
                          formData.educationType,
                          formData.educationTrack
                        )}
                      </option>
                    ) : null}
                    {formData.specialization === 'GENERAL' && (
                      <>
                        <option value="ARABIC_LIT">{getNationalSubjectLabel('ARABIC_LIT', formData.country, formData.gradeLevel, formData.language)}</option>
                        {isLegacyGeographyHistoryAvailable(formData.country, formData.educationType, formData.educationTrack) && (
                          <>
                            <option value="GEOGRAPHY">{getNationalSubjectLabel('GEOGRAPHY', formData.country, formData.gradeLevel, formData.language)}</option>
                            <option value="HISTORY">{getNationalSubjectLabel('HISTORY', formData.country, formData.gradeLevel, formData.language)}</option>
                          </>
                        )}
                      </>
                    )}
                  </optgroup>
                )}
                {!isPrimarySchool && !isMiddleSchool &&
                  isSaudiPublicEnglishAvailable(
                    formData.country,
                    formData.gradeLevel,
                    formData.educationType
                  ) && (
                    <optgroup label={formData.gradeLevel === 'G11'
                      ? formData.language === 'en' ? 'Second Secondary' : 'الصف الثاني الثانوي'
                      : formData.language === 'en' ? 'Common First Year' : 'السنة الأولى المشتركة'}>
                      <option value="ENGLISH">{getNationalSubjectLabel('ENGLISH', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                    </optgroup>
                  )}
                {!isPrimarySchool && !isMiddleSchool &&
                  isSaudiSocialStudies(formData.gradeLevel, formData.country, formData.educationType, formData.educationTrack) && (
                    <optgroup label={formData.language === 'en' ? 'Saudi supplementary subject' : 'مادة سعودية مساندة'}>
                      <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
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
