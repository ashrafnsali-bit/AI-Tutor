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
  normalizeEducationTypeForCountry,
  getAvailableTracksForCountryAndGrade,
  getTrackLabel
} from '../data/curriculumCountries';
import {
  isBlockedGeographyHistoryRoute,
  isSaudiSocialStudiesAvailable,
  isSudanPublicGrade4SubjectAvailable,
  isSudanPublicGrade5SubjectAvailable,
  isSudanPublicGrade6SubjectAvailable,
  isSudanPublicMiddleSubjectAvailable,
  isSudanPublicGrade10SubjectAvailable,
  isSudanPublicGrade11SubjectAvailable,
  getSudanPublicGrade12Subjects,
  isSudanPublicGrade12SubjectAvailable,
  isEnglishCourseAvailable
} from '../data/curriculumData';
import { isEgyptG10BookCourseAvailable } from '../data/egyptSecondaryCoreCurriculumData';
import { isEgyptG11SubjectAvailable, getEgyptG11Subjects } from '../data/egyptSecondaryG11CurriculumData';
import { isEgyptG12SubjectAvailable, getEgyptG12Subjects } from '../data/egyptSecondaryG12CurriculumData';
import { isEgyptPrepSubjectAvailable, getEgyptPrepSubjects } from '../data/egyptPrepCurriculumData';
import { isEgyptPrimarySubjectAvailable, getEgyptPrimarySubjects } from '../data/egyptPrimaryCurriculumData';
import { getSubjectVisual } from '../data/subjectVisuals';
import { getActiveUserAccount } from '../services/database';
import { X, User, ShieldAlert, CheckCircle2, Users, ShieldCheck, Lock, Globe } from 'lucide-react';

const isEgyptG10SubjectAvailable = (
  subject: Subject,
  country: CountryCode,
  gradeLevel: GradeLevel,
  educationType: StudentProfile['educationType'] = 'PUBLIC',
  educationTrack: StudentProfile['educationTrack'] = 'GENERAL'
): boolean => {
  if (country !== 'EG') return true;
  if (gradeLevel === 'G10') {
    if (subject === 'PHILOSOPHY') {
      return isEgyptG10BookCourseAvailable(subject, educationType, educationTrack);
    }
    return (['ARABIC_LIT', 'ARABIC_LANG', 'ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN'].includes(subject) &&
        (educationType === 'PUBLIC' || educationType === 'PRIVATE' || educationType === 'INTERNATIONAL')) ||
      isEgyptG10BookCourseAvailable(subject, educationType, educationTrack);
  }
  if (gradeLevel === 'G11') {
    return isEgyptG11SubjectAvailable(subject, educationTrack || 'GENERAL', educationType || 'PUBLIC');
  }
  if (gradeLevel === 'G12') {
    return isEgyptG12SubjectAvailable(subject, educationTrack || 'GENERAL', educationType || 'PUBLIC');
  }
  if (['G7', 'G8', 'G9'].includes(gradeLevel)) {
    return isEgyptPrepSubjectAvailable(subject, gradeLevel, educationType || 'PUBLIC');
  }
  if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(gradeLevel)) {
    return isEgyptPrimarySubjectAvailable(subject, gradeLevel, educationType || 'PUBLIC');
  }
  return true;
};

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
      const copy = { ...profile };
      copy.country = getActiveCurriculumCountry(copy.country);
      copy.educationType = normalizeEducationTypeForCountry(copy.country, copy.educationType);
      copy.educationTrack = normalizeEducationTrackForCountry(copy.country, copy.educationTrack, copy.gradeLevel);
      if (copy.country === 'EG' && copy.gradeLevel === 'G12') {
        const validG12 = isEgyptG12SubjectAvailable(copy.subject, copy.educationTrack, copy.educationType);
        if (!validG12) {
          copy.subject = getEgyptG12Subjects(copy.educationTrack)[0] || 'ARABIC_LIT';
        }
      } else if (copy.country === 'EG' && copy.gradeLevel === 'G11') {
        const validG11 = isEgyptG11SubjectAvailable(copy.subject, copy.educationTrack, copy.educationType);
        if (!validG11) {
          copy.subject = getEgyptG11Subjects(copy.educationTrack)[0] || 'ARABIC_LIT';
        }
      }
      setFormData(copy);
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
  ) => {
    if (country === 'EG') {
      return isEgyptPrimarySubjectAvailable(subject, gradeLevel, educationType || 'PUBLIC');
    }
    return PRIMARY_SUBJECTS.includes(subject) ||
    isSudanPublicGrade4SubjectAvailable(
      subject,
      country,
      gradeLevel,
      educationType || 'PUBLIC',
      educationTrack || 'GENERAL'
    ) ||
    isSudanPublicGrade5SubjectAvailable(
      subject,
      country,
      gradeLevel,
      educationType || 'PUBLIC',
      educationTrack || 'GENERAL'
    ) ||
    isSudanPublicGrade6SubjectAvailable(
      subject,
      country,
      gradeLevel,
      educationType || 'PUBLIC',
      educationTrack || 'GENERAL'
    ) ||
    (subject === 'TAJWEED' && isSaudiPublicTajweedAvailable(country, gradeLevel, educationType || 'PUBLIC')) ||
    (subject === 'QURAN_RECITATION' && isSaudiPublicQuranRecitationAvailable(country, gradeLevel, educationType || 'PUBLIC')) ||
    (subject === 'VISUAL_ARTS' && isSaudiPublicG6VisualArtsAvailable(country, gradeLevel, educationType || 'PUBLIC')) ||
    (subject === 'LIFE_SKILLS' && isSaudiPublicLifeSkillsAvailable(country, gradeLevel, educationType || 'PUBLIC', educationTrack || 'GENERAL')) ||
    (subject === 'COMPUTER_SCIENCE' && isSaudiPrimaryDigitalSkillsAvailable(gradeLevel, country, educationType)) ||
    (subject === 'SAUDI_SOCIAL_STUDIES' && isSaudiSocialStudies(gradeLevel, country, educationType, educationTrack)) ||
    (subject === 'ENGLISH' && isEnglishCourseAvailable(country, gradeLevel, educationType || 'PUBLIC', educationTrack || 'GENERAL'));
  };
  const isMiddleSubjectAvailable = (
    subject: Subject,
    gradeLevel: GradeLevel,
    country: CountryCode,
    educationType?: StudentProfile['educationType'],
    educationTrack?: StudentProfile['educationTrack']
  ) => {
    if (country === 'EG') {
      return isEgyptPrepSubjectAvailable(subject, gradeLevel, educationType || 'PUBLIC');
    }
    return country === 'SD' && (gradeLevel === 'G7' || gradeLevel === 'G8')
    ? isSudanPublicMiddleSubjectAvailable(
      subject,
      country,
      gradeLevel,
      educationType || 'PUBLIC',
      educationTrack || 'GENERAL'
    )
    : MIDDLE_SUBJECTS.includes(subject) ||
      (subject === 'SAUDI_SOCIAL_STUDIES' && isSaudiSocialStudies(gradeLevel, country, educationType, educationTrack)) ||
      (subject === 'ENGLISH' && isEnglishCourseAvailable(country, gradeLevel, educationType || 'PUBLIC', educationTrack || 'GENERAL'));
  };

  const [formData, setFormData] = useState<StudentProfile>(() => {
    const copy = { ...profile };
    copy.country = getActiveCurriculumCountry(copy.country);
    copy.educationType = normalizeEducationTypeForCountry(copy.country, copy.educationType);
    copy.educationTrack = normalizeEducationTrackForCountry(copy.country, copy.educationTrack);
    if (!isEgyptG10SubjectAvailable(
      copy.subject,
      copy.country,
      copy.gradeLevel,
      copy.educationType,
      copy.educationTrack
    )) {
      copy.subject = 'ARABIC_LIT';
    }
    const isEgyptG10BookSubject =
      copy.country === 'EG' &&
      copy.gradeLevel === 'G10' &&
      ['MATH', 'HISTORY', 'GENERAL_SCIENCE', 'PHILOSOPHY', 'ISLAMIC_STUDIES', 'COMPUTER_SCIENCE'].includes(copy.subject) &&
      isEgyptG10BookCourseAvailable(copy.subject, copy.educationType, copy.educationTrack);
    if (copy.country === 'SD' && copy.gradeLevel === 'G11' &&
        !isSudanPublicGrade11SubjectAvailable(
          copy.subject,
          copy.country,
          copy.gradeLevel,
          copy.educationType,
          copy.educationTrack
        )) {
      copy.subject = 'BIOLOGY';
    }
    if (copy.country === 'SD' && copy.gradeLevel === 'G12' &&
        !isSudanPublicGrade12SubjectAvailable(
          copy.subject,
          copy.country,
          copy.gradeLevel,
          copy.educationType,
          copy.educationTrack
        )) {
      copy.subject = getSudanPublicGrade12Subjects(copy.educationTrack)[0] ?? 'ARABIC_LIT';
    }
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
      if (copy.subject === 'PRIMARY_MATH') copy.subject = 'MATH';
      if (['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'HEALTH_SCIENCE', 'PRIMARY_SCIENCE'].includes(copy.subject)) {
        copy.subject = 'GENERAL_SCIENCE';
      }
      if (!isMiddleSubjectAvailable(copy.subject, copy.gradeLevel, copy.country, copy.educationType, copy.educationTrack)) {
        copy.subject = 'ARABIC_LANG';
      }
    } else {
      const isVerifiedSudanGrade12 = isSudanPublicGrade12SubjectAvailable(
        copy.subject,
        copy.country,
        copy.gradeLevel,
        copy.educationType,
        copy.educationTrack
      );
      if (copy.country === 'SD' && copy.gradeLevel === 'G10' &&
          !isSudanPublicGrade10SubjectAvailable(
            copy.subject,
            copy.country,
            copy.gradeLevel,
            copy.educationType,
            copy.educationTrack
          )) {
        copy.subject = 'CHEMISTRY';
      }
      if (copy.subject === 'TAJWEED' || copy.subject === 'QURAN_RECITATION' || copy.subject === 'VISUAL_ARTS' || copy.subject === 'LIFE_SKILLS') copy.subject = 'ARABIC_LIT';
      if (copy.subject === 'ENGLISH' &&
          !isEnglishCourseAvailable(copy.country, copy.gradeLevel, copy.educationType, copy.educationTrack)) {
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
      const isVerifiedSudanGrade10 = isSudanPublicGrade10SubjectAvailable(
        copy.subject,
        copy.country,
        copy.gradeLevel,
        copy.educationType,
        copy.educationTrack
      );
      const isVerifiedSudanGrade11 = isSudanPublicGrade11SubjectAvailable(
        copy.subject,
        copy.country,
        copy.gradeLevel,
        copy.educationType,
        copy.educationTrack
      );
      if (!isVerifiedSudanGrade12 && !isVerifiedSudanGrade11 && !isVerifiedSudanGrade10 && (copy.subject === 'GEOGRAPHY' || copy.subject === 'HISTORY') &&
          !isLegacyGeographyHistoryAvailable(copy.country, copy.educationType, copy.educationTrack)) copy.subject = 'ARABIC_LIT';
      if (!isEgyptG10BookSubject && (copy.subject === 'GENERAL_SCIENCE' || copy.subject === 'PRIMARY_SCIENCE')) copy.subject = 'PHYSICS';
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
          !isSaudiPublicG6VisualArtsAvailable(formData.country, formData.gradeLevel, formData.educationType) &&
          !isSudanPublicGrade4SubjectAvailable(
            formData.subject,
            formData.country,
            formData.gradeLevel,
            formData.educationType,
            formData.educationTrack
          ) &&
          !isSudanPublicGrade5SubjectAvailable(
            formData.subject,
            formData.country,
            formData.gradeLevel,
            formData.educationType,
            formData.educationTrack
          )) ||
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
      if (!(formData.country === 'EG' && age === 16) &&
          (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE')) nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
      if (nextSubj === 'PHILOSOPHY' && !(formData.country === 'EG' && nextGrade === 'G10')) nextSubj = 'ARABIC_LIT';
    } else if (age === 17) {
      nextGrade = 'G11';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'VISUAL_ARTS' || nextSubj === 'LIFE_SKILLS' || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
      if (formData.country === 'SD' && !isSudanPublicGrade11SubjectAvailable(nextSubj, formData.country, 'G11', formData.educationType, nextTrack)) nextSubj = 'BIOLOGY';
    } else if (age >= 18) {
      nextGrade = 'G12';
      if (PRIMARY_SUBJECTS.includes(nextSubj) || nextSubj === 'VISUAL_ARTS' || nextSubj === 'LIFE_SKILLS' || nextSubj === 'ARABIC_LANG') nextSubj = 'ARABIC_LIT';
      if (nextSubj === 'GENERAL_SCIENCE' || nextSubj === 'PRIMARY_SCIENCE') nextSubj = 'PHYSICS';
      if (nextSubj === 'PRIMARY_MATH') nextSubj = 'MATH';
    }
    if (formData.country === 'SD' && nextGrade === 'G10' &&
        !isSudanPublicGrade10SubjectAvailable(nextSubj, formData.country, nextGrade, formData.educationType, nextTrack)) {
      nextSubj = 'CHEMISTRY';
    }
    if (formData.country === 'SD' && nextGrade === 'G11' &&
        !isSudanPublicGrade11SubjectAvailable(nextSubj, formData.country, nextGrade, formData.educationType, nextTrack)) {
      nextSubj = 'BIOLOGY';
    }
    if (formData.country === 'SD' && nextGrade === 'G12' &&
        !isSudanPublicGrade12SubjectAvailable(nextSubj, formData.country, nextGrade, formData.educationType, nextTrack)) {
      nextSubj = getSudanPublicGrade12Subjects(nextTrack)[0] ?? 'ARABIC_LIT';
    }
    if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'].includes(nextGrade)) {
      nextTrack = 'GENERAL';
    }
    nextSpec = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'].includes(nextGrade)
      ? 'GENERAL'
      : getSpecializationForEducationTrack(nextTrack);
    if (nextSubj === 'ENGLISH' &&
        !isEnglishCourseAvailable(formData.country, nextGrade, formData.educationType || 'PUBLIC', nextTrack)) {
      nextSubj = 'ARABIC_LIT';
    }
    if (!isEgyptG10SubjectAvailable(
      nextSubj,
      formData.country,
      nextGrade,
      formData.educationType,
      nextTrack
    )) nextSubj = 'ARABIC_LIT';

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
    let nextTrack = normalizeEducationTrackForCountry(formData.country, formData.educationTrack, grade);

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
    if (formData.country === 'SD' && grade === 'G10' &&
        !isSudanPublicGrade10SubjectAvailable(nextSubj, formData.country, grade, formData.educationType, nextTrack)) {
      nextSubj = 'CHEMISTRY';
    }
    if (formData.country === 'SD' && grade === 'G11' &&
        !isSudanPublicGrade11SubjectAvailable(nextSubj, formData.country, grade, formData.educationType, nextTrack)) {
      nextSubj = 'BIOLOGY';
    }
    if (formData.country === 'SD' && grade === 'G12' &&
        !isSudanPublicGrade12SubjectAvailable(nextSubj, formData.country, grade, formData.educationType, nextTrack)) {
      nextSubj = getSudanPublicGrade12Subjects(nextTrack)[0] ?? 'ARABIC_LIT';
    }
    if (nextSubj === 'ENGLISH' &&
        !isEnglishCourseAvailable(formData.country, grade, formData.educationType || 'PUBLIC', nextTrack)) {
      nextSubj = 'ARABIC_LIT';
    }
    nextSpec = isPrimary || isMiddle
      ? 'GENERAL'
      : getSpecializationForEducationTrack(nextTrack);
    if (formData.country === 'EG' && grade === 'G12') {
      if (!isEgyptG12SubjectAvailable(nextSubj, nextTrack, formData.educationType)) {
        nextSubj = getEgyptG12Subjects(nextTrack)[0] || 'ARABIC_LIT';
      }
    } else if (formData.country === 'EG' && grade === 'G11') {
      if (!isEgyptG11SubjectAvailable(nextSubj, nextTrack, formData.educationType)) {
        nextSubj = getEgyptG11Subjects(nextTrack)[0] || 'ARABIC_LIT';
      }
    } else if (!isEgyptG10SubjectAvailable(
      nextSubj,
      formData.country,
      grade,
      formData.educationType,
      nextTrack
    )) nextSubj = 'ARABIC_LIT';

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
    if (formData.country === 'SD' && formData.gradeLevel === 'G10' &&
        !isSudanPublicGrade10SubjectAvailable(
          subj,
          formData.country,
          formData.gradeLevel,
          formData.educationType,
          formData.educationTrack
        )) return;
    if (formData.country === 'SD' && formData.gradeLevel === 'G11' &&
        !isSudanPublicGrade11SubjectAvailable(
          subj,
          formData.country,
          formData.gradeLevel,
          formData.educationType,
          formData.educationTrack
        )) return;
    if (formData.country === 'SD' && formData.gradeLevel === 'G12' &&
        !isSudanPublicGrade12SubjectAvailable(
          subj,
          formData.country,
          formData.gradeLevel,
          formData.educationType,
          formData.educationTrack
        )) return;
    setFormData((prev) => ({
      ...prev,
      subject: subj
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guestLabel = isEn ? 'Guest Student' : 'طالب زائر';
    const isInvalid = (val?: string) =>
      !val || ['عمر التميمي', 'احمد علي', 'Ahmed Ali', 'طالب زائر', 'Guest Student', 'طالب مسجل', 'Registered Student'].includes(val.trim());
    const cleanName = (val?: string) => (!isInvalid(val) ? val!.trim() : '');

    const resolvedRealName = cleanName(activeDbUser?.name) || cleanName(profile.name) || '';
    const finalName = resolvedRealName || guestLabel;
    const finalNameAr = cleanName(activeDbUser?.nameAr) || cleanName(profile.nameAr) || resolvedRealName || (isEn ? 'Guest Student' : 'طالب زائر');
    const finalNameEn = cleanName(activeDbUser?.nameEn) || cleanName(profile.nameEn) || resolvedRealName || 'Guest Student';
    const finalId = activeDbUser?.id || profile.id;

    onSave({
      ...formData,
      id: finalId,
      name: finalName,
      nameAr: finalNameAr,
      nameEn: finalNameEn,
      subject: formData.country === 'SD' && formData.gradeLevel === 'G11'
        ? isSudanPublicGrade11SubjectAvailable(
            formData.subject,
            formData.country,
            formData.gradeLevel,
            formData.educationType,
            formData.educationTrack
          ) ? formData.subject : 'BIOLOGY'
        : formData.country === 'SD' && formData.gradeLevel === 'G12'
          ? isSudanPublicGrade12SubjectAvailable(
              formData.subject,
              formData.country,
              formData.gradeLevel,
              formData.educationType,
              formData.educationTrack
            ) ? formData.subject : getSudanPublicGrade12Subjects(formData.educationTrack)[0] ?? 'ARABIC_LIT'
        : formData.subject
    });
    onClose();
  };

  const isMinorUnder13 = formData.age > 0 && formData.age < 13;
  const guestLabel = isEn ? 'Guest Student' : 'طالب زائر';
  const isInvalid = (val?: string) =>
    !val || ['عمر التميمي', 'احمد علي', 'Ahmed Ali', 'طالب زائر', 'Guest Student', 'طالب مسجل', 'Registered Student'].includes(val.trim());
  const cleanName = (val?: string) => (!isInvalid(val) ? val!.trim() : '');
  const officialStudentName = isEn
    ? (cleanName(activeDbUser?.nameEn) || cleanName(activeDbUser?.name) || cleanName(profile.nameEn) || cleanName(profile.name) || guestLabel)
    : (cleanName(activeDbUser?.nameAr) || cleanName(activeDbUser?.name) || cleanName(profile.nameAr) || cleanName(profile.name) || guestLabel);
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
                        isEnglishCourseAvailable(country, formData.gradeLevel, educationType, formData.educationTrack);
                      const keepEgyptBookCourse = isEgyptG10SubjectAvailable(
                        formData.subject,
                        country,
                        formData.gradeLevel,
                        educationType,
                        educationTrack
                      );
                      setFormData(prev => ({
                        ...prev,
                        country,
                        educationType,
                        educationTrack,
                        specialization: isPrimarySchool || isMiddleSchool
                          ? 'GENERAL'
                          : getSpecializationForEducationTrack(educationTrack),
                        subject: keepSubject && keepSaudiSocialStudies && keepLegacyGeographyHistory && keepEnglish && keepEgyptBookCourse
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
                    isEnglishCourseAvailable(chosenCountry, formData.gradeLevel, educationType, formData.educationTrack);
                  const keepEgyptBookCourse = isEgyptG10SubjectAvailable(
                    formData.subject,
                    chosenCountry,
                    formData.gradeLevel,
                    educationType,
                    educationTrack
                  );
                  setFormData({
                    ...formData,
                    country: chosenCountry,
                    educationType,
                    educationTrack,
                    specialization: isPrimarySchool || isMiddleSchool
                      ? 'GENERAL'
                      : getSpecializationForEducationTrack(educationTrack),
                    subject: keepSubject && keepSaudiSocialStudies && keepLegacyGeographyHistory && keepEnglish && keepEgyptBookCourse
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
                    isEnglishCourseAvailable(formData.country, formData.gradeLevel, educationType, formData.educationTrack);
                  const keepEgyptBookCourse = isEgyptG10SubjectAvailable(
                    formData.subject,
                    formData.country,
                    formData.gradeLevel,
                    educationType,
                    formData.educationTrack
                  );
                  setFormData({
                    ...formData,
                    educationType,
                    subject: keepSubject && keepLegacyGeographyHistory && keepEnglish && keepEgyptBookCourse ? formData.subject : isPrimarySchool
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
                    let nextSubj = formData.subject;
                    if (formData.country === 'EG' && formData.gradeLevel === 'G12') {
                      if (!isEgyptG12SubjectAvailable(formData.subject, educationTrack, formData.educationType)) {
                        nextSubj = getEgyptG12Subjects(educationTrack)[0] || 'ARABIC_LIT';
                      }
                    } else if (formData.country === 'EG' && formData.gradeLevel === 'G11') {
                      if (!isEgyptG11SubjectAvailable(formData.subject, educationTrack, formData.educationType)) {
                        nextSubj = getEgyptG11Subjects(educationTrack)[0] || 'ARABIC_LIT';
                      }
                    } else {
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
                      const keepEgyptBookCourse = isEgyptG10SubjectAvailable(
                        formData.subject,
                        formData.country,
                        formData.gradeLevel,
                        formData.educationType,
                        educationTrack || 'GENERAL'
                      );
                      if (!keepSocialStudies || !keepLegacyGeographyHistory || !keepEgyptBookCourse) {
                        nextSubj = 'ARABIC_LIT';
                      }
                    }
                    setFormData({
                      ...formData,
                      educationTrack,
                      specialization: getSpecializationForEducationTrack(
                        educationTrack || 'GENERAL'
                      ),
                      subject: nextSubj
                    });
                  }}
                >
                  {getAvailableTracksForCountryAndGrade(formData.country, formData.gradeLevel).map(track => (
                    <option key={track} value={track}>
                      {getTrackLabel(track, formData.country, formData.language)}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Subject */}
            <div className="form-group full-width">
              <label className="form-label">{t.labelSubject}</label>

              {/* Active Subject Curriculum Visual Card */}
              {(() => {
                const activeVisual = getSubjectVisual(formData.subject, formData.country, formData.gradeLevel, formData.educationTrack);
                const activeSubjTitle = getNationalSubjectLabel(
                  formData.subject,
                  formData.country,
                  formData.gradeLevel,
                  formData.language,
                  formData.educationType,
                  formData.educationTrack
                );
                return (
                  <div className="profile-active-subject-card">
                    <div className="profile-subject-cover-wrap">
                      <img 
                        src={activeVisual.coverImage} 
                        alt={activeSubjTitle} 
                        className="profile-subject-cover-img" 
                        loading="lazy"
                      />
                      <div className="profile-subject-cover-overlay" />
                      <div className="profile-subject-badge">
                        <span>{formData.language === 'en' ? activeVisual.badgeEn : activeVisual.badgeAr}</span>
                      </div>
                    </div>
                    <div className="profile-subject-details">
                      <div className="profile-subject-title">
                        <h4>{activeSubjTitle}</h4>
                        <span className="profile-subject-stage">{formData.language === 'en' ? activeVisual.stageEn : activeVisual.stageAr}</span>
                      </div>
                      <div className="profile-subject-topics">
                        {(formData.language === 'en' ? activeVisual.topicsEn : activeVisual.topicsAr).map((t, idx) => (
                          <span key={idx} className="profile-topic-pill">• {t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              <select
                className="form-select"
                value={formData.subject}
                onChange={(e) => handleSubjectChange(e.target.value as Subject)}
              >
                {isPrimarySchool ? (
                  formData.country === 'EG' ? (
                    <optgroup label={formData.language === 'en' ? "Egyptian Primary Core Subjects (Ministry Edu 2.0)" : "مقررات المرحلة الابتدائية المصرية (منظومة التعليم 2.0 المطورة)"}>
                      {getEgyptPrimarySubjects(formData.gradeLevel).map((subj) => (
                        <option key={subj} value={subj}>
                          {getNationalSubjectLabel(subj, formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                        </option>
                      ))}
                    </optgroup>
                  ) : (
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
                      {(isSaudiPublicG6VisualArtsAvailable(formData.country, formData.gradeLevel, formData.educationType) ||
                        isSudanPublicGrade4SubjectAvailable('VISUAL_ARTS', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade5SubjectAvailable('VISUAL_ARTS', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
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
                      {(isSaudiPrimaryDigitalSkillsAvailable(formData.gradeLevel, formData.country, formData.educationType) ||
                        isSudanPublicGrade4SubjectAvailable('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade5SubjectAvailable('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade6SubjectAvailable('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                        <option value="COMPUTER_SCIENCE">{getNationalSubjectLabel('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                      )}
                      {(isSudanPublicGrade4SubjectAvailable('ENGLISH', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade5SubjectAvailable('ENGLISH', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade6SubjectAvailable('ENGLISH', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                        <option value="ENGLISH">{getNationalSubjectLabel('ENGLISH', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {(isSudanPublicGrade5SubjectAvailable('GEOGRAPHY', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade6SubjectAvailable('GEOGRAPHY', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                        <option value="GEOGRAPHY">{getNationalSubjectLabel('GEOGRAPHY', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {(isSudanPublicGrade5SubjectAvailable('HISTORY', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) ||
                        isSudanPublicGrade6SubjectAvailable('HISTORY', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack)) && (
                        <option value="HISTORY">{getNationalSubjectLabel('HISTORY', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSaudiSocialStudies(formData.gradeLevel, formData.country, formData.educationType, formData.educationTrack) && (
                        <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                      )}
                    </optgroup>
                  )
                ) : isMiddleSchool ? (
                  formData.country === 'EG' ? (
                    <optgroup label={formData.language === 'en' ? "Egyptian Preparatory Core Subjects (Ministry)" : "مقررات المرحلة الإعدادية المصرية (وزارة التربية والتعليم)"}>
                      {getEgyptPrepSubjects(formData.gradeLevel).map((subj) => (
                        <option key={subj} value={subj}>
                          {getNationalSubjectLabel(subj, formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                        </option>
                      ))}
                    </optgroup>
                  ) : (
                    <optgroup label={formData.language === 'en' ? "Middle School Subjects" : "مواد المرحلة المتوسطة"}>
                      <option value="ARABIC_LANG">{getNationalSubjectLabel('ARABIC_LANG', formData.country, formData.gradeLevel, formData.language)}</option>
                      <option value="MATH">{getNationalSubjectLabel('MATH', formData.country, formData.gradeLevel, formData.language)}</option>
                      <option value="GENERAL_SCIENCE">{getNationalSubjectLabel('GENERAL_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                      <option value="COMPUTER_SCIENCE">{getNationalSubjectLabel('COMPUTER_SCIENCE', formData.country, formData.gradeLevel, formData.language)}</option>
                      {isSudanPublicMiddleSubjectAvailable('ENGLISH', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) && (
                        <option value="ENGLISH">{getNationalSubjectLabel('ENGLISH', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSudanPublicMiddleSubjectAvailable('ISLAMIC_STUDIES', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) && (
                        <option value="ISLAMIC_STUDIES">{getNationalSubjectLabel('ISLAMIC_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSudanPublicMiddleSubjectAvailable('GEOGRAPHY', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) && (
                        <option value="GEOGRAPHY">{getNationalSubjectLabel('GEOGRAPHY', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSudanPublicMiddleSubjectAvailable('HISTORY', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) && (
                        <option value="HISTORY">{getNationalSubjectLabel('HISTORY', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSudanPublicMiddleSubjectAvailable('NATIONAL_EDUCATION', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) && (
                        <option value="NATIONAL_EDUCATION">{getNationalSubjectLabel('NATIONAL_EDUCATION', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSudanPublicMiddleSubjectAvailable('TECHNICAL_EDUCATION', formData.country, formData.gradeLevel, formData.educationType, formData.educationTrack) && (
                        <option value="TECHNICAL_EDUCATION">{getNationalSubjectLabel('TECHNICAL_EDUCATION', formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}</option>
                      )}
                      {isSaudiSocialStudies(formData.gradeLevel, formData.country, formData.educationType, formData.educationTrack) && (
                        <option value="SAUDI_SOCIAL_STUDIES">{getNationalSubjectLabel('SAUDI_SOCIAL_STUDIES', formData.country, formData.gradeLevel, formData.language, formData.educationType)}</option>
                      )}
                    </optgroup>
                  )
                ) : formData.country === 'SD' &&
                  formData.gradeLevel === 'G10' ? (
                  <optgroup label={formData.language === 'en' ? 'Sudan Secondary 1 (Grade 10) courses' : 'مقررات الصف الأول الثانوي السوداني'}>
                    {(['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'MATH', 'ARABIC_LIT', 'ENGLISH', 'ISLAMIC_STUDIES', 'GEOGRAPHY', 'HISTORY', 'COMPUTER_SCIENCE'] as Subject[])
                      .filter((subj) => isSudanPublicGrade10SubjectAvailable(
                        subj,
                        formData.country,
                        formData.gradeLevel,
                        formData.educationType,
                        formData.educationTrack
                      ))
                      .map((subj) => (
                        <option key={subj} value={subj}>
                          {getNationalSubjectLabel(
                            subj,
                            formData.country,
                            formData.gradeLevel,
                            formData.language,
                            formData.educationType,
                            formData.educationTrack
                          )}
                        </option>
                      ))}
                  </optgroup>
                ) : formData.country === 'SD' &&
                  formData.gradeLevel === 'G11' ? (
                  <optgroup label={formData.language === 'en' ? 'Sudan Secondary 2 (Grade 11) courses' : 'مقررات الصف الثاني الثانوي السوداني'}>
                    {(['PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'MATH', 'ARABIC_LIT', 'ENGLISH', 'ISLAMIC_STUDIES', 'GEOGRAPHY', 'HISTORY', 'COMPUTER_SCIENCE'] as Subject[])
                      .filter((subj) => isSudanPublicGrade11SubjectAvailable(
                        subj,
                        formData.country,
                        formData.gradeLevel,
                        formData.educationType,
                        formData.educationTrack
                      ))
                      .map((subj) => (
                        <option key={subj} value={subj}>
                          {getNationalSubjectLabel(
                            subj,
                            formData.country,
                            formData.gradeLevel,
                            formData.language,
                            formData.educationType,
                            formData.educationTrack
                          )}
                        </option>
                      ))}
                  </optgroup>
                ) : formData.country === 'EG' &&
                  formData.gradeLevel === 'G10' ? (
                  <optgroup label={formData.language === 'en' ? 'Egypt Secondary 1 textbook courses' : 'مقررات كتب الصف الأول الثانوي المصري'}>
                    <option value="ARABIC_LIT">{getNationalSubjectLabel('ARABIC_LIT', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="ENGLISH">{getNationalSubjectLabel('ENGLISH', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="FRENCH">{getNationalSubjectLabel('FRENCH', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="GERMAN">{getNationalSubjectLabel('GERMAN', formData.country, formData.gradeLevel, formData.language)}</option>
                    <option value="ITALIAN">{getNationalSubjectLabel('ITALIAN', formData.country, formData.gradeLevel, formData.language)}</option>
                    {(['MATH', 'HISTORY', 'GENERAL_SCIENCE', 'PHILOSOPHY', 'ISLAMIC_STUDIES', 'COMPUTER_SCIENCE'] as Subject[])
                      .filter((subject) => isEgyptG10SubjectAvailable(
                        subject,
                        formData.country,
                        formData.gradeLevel,
                        formData.educationType,
                        formData.educationTrack
                      ))
                      .map((subject) => (
                        <option key={subject} value={subject}>
                          {getNationalSubjectLabel(subject, formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                        </option>
                      ))}
                  </optgroup>
                ) : formData.country === 'EG' &&
                  formData.gradeLevel === 'G11' ? (
                  <optgroup label={formData.language === 'en' ? 'Egypt Secondary 2 textbook courses' : 'مقررات كتب الصف الثاني الثانوي المصري'}>
                    {getEgyptG11Subjects(formData.educationTrack).map((subject) => (
                      <option key={subject} value={subject}>
                        {getNationalSubjectLabel(subject, formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                      </option>
                    ))}
                  </optgroup>
                ) : formData.country === 'EG' &&
                  formData.gradeLevel === 'G12' ? (
                  <optgroup label={formData.language === 'en' ? 'Egypt Secondary 3 (Thanawya Amma) courses' : 'مقررات الصف الثالث الثانوي (الثانوية العامة المصرية)'}>
                    {getEgyptG12Subjects(formData.educationTrack).map((subject) => (
                      <option key={subject} value={subject}>
                        {getNationalSubjectLabel(subject, formData.country, formData.gradeLevel, formData.language, formData.educationType, formData.educationTrack)}
                      </option>
                    ))}
                  </optgroup>
                ) : formData.country === 'SD' &&
                  formData.gradeLevel === 'G12' ? (
                  <optgroup label={formData.language === 'en' ? 'Grade 12 textbook courses' : 'مقررات الصف الثالث الثانوي'}>
                    {getSudanPublicGrade12Subjects(formData.educationTrack).map((subject) => (
                      <option key={subject} value={subject}>
                        {getNationalSubjectLabel(
                          subject,
                          formData.country,
                          formData.gradeLevel,
                          formData.language,
                          formData.educationType,
                          formData.educationTrack
                        )}
                      </option>
                    ))}
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
