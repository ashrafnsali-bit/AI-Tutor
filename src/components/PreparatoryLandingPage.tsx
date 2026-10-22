import React, { useState, useEffect } from 'react';
import type { CountryCode, EducationTrack, GradeLevel, StudentProfile, Subject } from '../types';
import {
  ACTIVE_CURRICULUM_COUNTRIES,
  SUPPORTED_COUNTRIES,
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
  normalizeEducationTrackForCountry,
  normalizeEducationTypeForCountry,
  getAvailableTracksForCountryAndGrade,
  getTrackLabel
} from '../data/curriculumCountries';
import { isEgyptG12SubjectAvailable, getEgyptG12Subjects } from '../data/egyptSecondaryG12CurriculumData';
import { isEgyptG11SubjectAvailable, getEgyptG11Subjects } from '../data/egyptSecondaryG11CurriculumData';
import {
  isSudanPublicGrade4SubjectAvailable,
  isSudanPublicGrade5SubjectAvailable,
  isSudanPublicGrade6SubjectAvailable,
  isSudanPublicMiddleSubjectAvailable,
  isSudanPublicGrade10SubjectAvailable,
  isSudanPublicGrade11SubjectAvailable,
  getSudanPublicGrade12Subjects,
  isSudanPublicGrade12SubjectAvailable,
  isEgyptPrimarySubjectAvailable,
  isEgyptPrepSubjectAvailable,
  isEnglishCourseAvailable
} from '../data/curriculumData';
import { isEgyptG10BookCourseAvailable } from '../data/egyptSecondaryCoreCurriculumData';
import { isForeignLanguageSubject, isArabicSubject } from '../data/foreignLanguageLessonLocalization';
import { getSubjectVisual, getStageVisual } from '../data/subjectVisuals';
import { detectStudentCountry, setManualCountryOverride, isManualCountryOverride } from '../services/geoService';
import { 
  Sparkles, 
  Compass, 
  BookOpen, TestTube2, 
  Brain, 
  CheckCircle2, 
  Layers, 
  Rocket, 
  Atom, 
  Calculator, 
  FlaskConical, 
  Dna, 
  Code2, 
  BookMarked, 
  Microscope, 
  HeartPulse,
  GraduationCap,
  Globe,
  Globe2,
  ShieldCheck,
  Award,
  Palette,
  Users,
  Mail,
  Key
} from 'lucide-react';

interface PreparatoryLandingPageProps {
  profile: StudentProfile;
  hasApiKey: boolean;
  isLoggedIn: boolean;
  onSelectCurriculumAndStart: (updatedProfile: StudentProfile) => void;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
  onOpenApiKey: () => void;
  onOpenContact: () => void;
  onOpenShare?: () => void;
  onToggleLanguage: () => void;
}

export const PreparatoryLandingPage: React.FC<PreparatoryLandingPageProps> = ({
  profile,
  hasApiKey,
  isLoggedIn,
  onSelectCurriculumAndStart,
  onOpenAuth,
  onOpenAdmin,
  onOpenApiKey,
  onOpenContact,
  onToggleLanguage
}) => {
  const isEn = profile.language === 'en';

  // Selection states
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    getActiveCurriculumCountry(profile.country)
  );
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(profile.gradeLevel || 'G10');
  const [selectedTrack, setSelectedTrack] = useState<EducationTrack>(
    normalizeEducationTrackForCountry(getActiveCurriculumCountry(profile.country), profile.educationTrack)
  );
  const [selectedSubject, setSelectedSubject] = useState<Subject>(profile.subject || 'PHYSICS');
  const [isManual, setIsManual] = useState<boolean>(() => isManualCountryOverride());
  const [isDetecting, setIsDetecting] = useState<boolean>(false);

  // Sync selectedCountry with profile.country if not manually overridden
  useEffect(() => {
    if (!isManualCountryOverride() && profile.country) {
      const country = getActiveCurriculumCountry(profile.country);
      setSelectedCountry(country);
      setSelectedTrack(current => normalizeEducationTrackForCountry(country, current));
      setIsManual(false);
    }
  }, [profile.country]);

  useEffect(() => {
    const educationType = normalizeEducationTypeForCountry(selectedCountry, profile.educationType);
    const invalidSudanMiddleSubject = selectedCountry === 'SD' &&
      (selectedGrade === 'G7' || selectedGrade === 'G8') &&
      !isSudanPublicMiddleSubjectAvailable(
        selectedSubject,
        selectedCountry,
        selectedGrade,
        educationType,
        selectedTrack
      );
    const invalidSudanGrade10Subject = selectedCountry === 'SD' &&
      selectedGrade === 'G10' &&
      !isSudanPublicGrade10SubjectAvailable(
        selectedSubject,
        selectedCountry,
        selectedGrade,
        educationType,
        selectedTrack
      );
    const invalidSudanGrade11Subject = selectedCountry === 'SD' &&
      selectedGrade === 'G11' &&
      !isSudanPublicGrade11SubjectAvailable(
        selectedSubject,
        selectedCountry,
        selectedGrade,
        educationType,
        selectedTrack
      );
    const invalidSudanGrade12Subject = selectedCountry === 'SD' &&
      selectedGrade === 'G12' &&
      !isSudanPublicGrade12SubjectAvailable(
        selectedSubject,
        selectedCountry,
        selectedGrade,
        educationType,
        selectedTrack
      );
    const invalidEgyptG10Subject =
      selectedCountry === 'EG' &&
      selectedGrade === 'G10' &&
      !((['ARABIC_LIT', 'ARABIC_LANG', 'ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN'].includes(selectedSubject) &&
        (educationType === 'PUBLIC' || educationType === 'PRIVATE')) ||
        isEgyptG10BookCourseAvailable(selectedSubject, educationType, selectedTrack));
    if (
      invalidSudanMiddleSubject ||
      invalidSudanGrade10Subject ||
      invalidSudanGrade11Subject ||
      invalidSudanGrade12Subject ||
      invalidEgyptG10Subject ||
      (selectedSubject === 'PHYSICS' &&
        selectedCountry === 'SA' &&
        selectedGrade === 'G11' &&
        !isSaudiPublicG11PhysicsAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        )) ||
      (selectedSubject === 'BIOLOGY' &&
        selectedCountry === 'SA' &&
        selectedGrade === 'G11' &&
        !isSaudiPublicG11BiologyAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        )) ||
      (selectedSubject === 'HEALTH_SCIENCE' &&
        !isSaudiPublicG11HealthScienceAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        )) ||
      (selectedSubject === 'ENGLISH' &&
        !isEnglishCourseAvailable(
          selectedCountry,
          selectedGrade,
          educationType,
          selectedTrack
        )) ||
      (selectedSubject === 'COMPUTER_SCIENCE' &&
        selectedCountry === 'SA' &&
        selectedGrade === 'G11' &&
        !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        )) ||
      (selectedSubject === 'TAJWEED' &&
        !isSaudiPublicTajweedAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        )) ||
      (selectedSubject === 'QURAN_RECITATION' &&
        !isSaudiPublicQuranRecitationAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        )) ||
      (selectedSubject === 'VISUAL_ARTS' &&
        !isSaudiPublicG6VisualArtsAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        ) &&
        !isSudanPublicGrade4SubjectAvailable(
          selectedSubject,
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ) &&
        !isSudanPublicGrade5SubjectAvailable(
          selectedSubject,
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ) &&
        !isSudanPublicGrade6SubjectAvailable(
          selectedSubject,
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ))
    ) {
      setSelectedSubject(selectedCountry === 'SD' && selectedGrade === 'G10'
        ? 'CHEMISTRY'
        : selectedCountry === 'SD' && selectedGrade === 'G11' ? 'BIOLOGY'
        : selectedCountry === 'SD' && selectedGrade === 'G12'
          ? getSudanPublicGrade12Subjects(selectedTrack)[0] ?? 'ARABIC_LIT'
        : ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade)
        ? 'PRIMARY_ARABIC'
        : isMiddle ? 'ARABIC_LANG' : 'ARABIC_LIT');
    }
  }, [selectedCountry, selectedGrade, selectedSubject, selectedTrack, profile.educationType]);

  // Active Stage determination
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(selectedGrade);
  const isHigh = ['G10', 'G11', 'G12'].includes(selectedGrade);

  const countryInfo = getCountryInfo(selectedCountry);

  const handleSelectStage = (stage: 'primary' | 'middle' | 'high') => {
    if (stage === 'primary') {
      setSelectedGrade('G4');
      setSelectedTrack('GENERAL');
      setSelectedSubject('PRIMARY_MATH');
    } else if (stage === 'middle') {
      setSelectedGrade('G8');
      setSelectedTrack('GENERAL');
      setSelectedSubject('GENERAL_SCIENCE');
    } else {
      setSelectedGrade('G10');
      setSelectedSubject('PHYSICS');
    }

    const element = document.getElementById('curriculum-selection-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGrade = (grade: GradeLevel) => {
    setSelectedGrade(grade);
    const inPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(grade);
    const inMiddle = ['G7', 'G8', 'G9'].includes(grade);

    if (inPrimary) {
      setSelectedTrack('GENERAL');
      const validEgyptPrimary = selectedCountry === 'EG' && isEgyptPrimarySubjectAvailable(selectedSubject, grade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType));
      const validEnglish = selectedSubject === 'ENGLISH' && isEnglishCourseAvailable(selectedCountry, grade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack);
      if (!validEgyptPrimary && !validEnglish && !['PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'].includes(selectedSubject) &&
          !(selectedSubject === 'TAJWEED' &&
            isSaudiPublicTajweedAvailable(
              selectedCountry,
              grade,
              normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
            )) &&
          !(selectedSubject === 'QURAN_RECITATION' &&
            isSaudiPublicQuranRecitationAvailable(
              selectedCountry,
              grade,
              normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
            )) &&
          !(selectedSubject === 'VISUAL_ARTS' &&
            isSaudiPublicG6VisualArtsAvailable(
              selectedCountry,
              grade,
              normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
            )) &&
          !isSudanPublicGrade4SubjectAvailable(
            selectedSubject,
            selectedCountry,
            grade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            'GENERAL'
          ) &&
          !isSudanPublicGrade5SubjectAvailable(
            selectedSubject,
            selectedCountry,
            grade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            'GENERAL'
          ) &&
          !isSudanPublicGrade6SubjectAvailable(
            selectedSubject,
            selectedCountry,
            grade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            'GENERAL'
          )) {
        setSelectedSubject('PRIMARY_MATH');
      }
    } else if (inMiddle) {
      setSelectedTrack('GENERAL');
      const validEgyptPrep = selectedCountry === 'EG' && isEgyptPrepSubjectAvailable(selectedSubject, grade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType));
      const validEnglish = selectedSubject === 'ENGLISH' && isEnglishCourseAvailable(selectedCountry, grade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack);
      if (!validEgyptPrep && !validEnglish && !['MATH', 'ARABIC_LANG', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'].includes(selectedSubject) &&
          !(selectedCountry === 'SD' &&
            isSudanPublicMiddleSubjectAvailable(
              selectedSubject,
              selectedCountry,
              grade,
              normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
              'GENERAL'
            ))) {
        setSelectedSubject('GENERAL_SCIENCE');
      }
    } else {
      if (selectedCountry === 'EG' && grade === 'G12') {
        const nextTrack = normalizeEducationTrackForCountry('EG', selectedTrack, 'G12');
        setSelectedTrack(nextTrack);
        const available = getEgyptG12Subjects(nextTrack);
        if (!available.includes(selectedSubject)) setSelectedSubject(available[0] ?? 'ARABIC_LIT');
        return;
      }
      if (selectedCountry === 'EG' && grade === 'G11') {
        const nextTrack = normalizeEducationTrackForCountry('EG', selectedTrack, 'G11');
        setSelectedTrack(nextTrack);
        const available = getEgyptG11Subjects(nextTrack);
        if (!available.includes(selectedSubject)) setSelectedSubject(available[0] ?? 'ARABIC_LIT');
        return;
      }
      if (selectedCountry === 'SD' && grade === 'G12') {
        const available = getSudanPublicGrade12Subjects(selectedTrack);
        if (!available.includes(selectedSubject)) setSelectedSubject(available[0] ?? 'ARABIC_LIT');
        return;
      }
      if (['PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES', 'TAJWEED', 'QURAN_RECITATION', 'VISUAL_ARTS', 'ARABIC_LANG', 'GENERAL_SCIENCE'].includes(selectedSubject)) {
        setSelectedSubject('PHYSICS');
      }
    }
  };

  const getAvailableSubjects = (): { id: Subject; nameAr: string; nameEn: string; descAr: string; descEn: string; icon: React.ReactNode; color: string }[] => {
    if (selectedCountry === 'EG' && selectedGrade === 'G11') {
      const isHumanities = selectedTrack === 'SHARIA_HUMANITIES';
      const commonCourses = [
        { id: 'ARABIC_LIT' as const, nameAr: 'اللغة العربية', nameEn: 'Arabic Language', descAr: 'القراءة والنصوص والبلاغة والأدب والنحو', descEn: 'Literature, rhetoric, reading, and grammar', icon: <BookMarked size={28} />, color: '#34d399' },
        { id: 'ENGLISH' as const, nameAr: 'اللغة الإنجليزية (لغة أولى)', nameEn: 'English (First Language)', descAr: 'كتاب وزارة التربية والتعليم الرسمية لغة أولى', descEn: 'Official Ministry textbook first language', icon: <BookOpen size={28} />, color: '#a78bfa' },
        { id: 'FRENCH' as const, nameAr: 'اللغة الفرنسية (لغة ثانية)', nameEn: 'French (Second Language)', descAr: 'مقرر اللغة الأجنبية الثانية المعتمد', descEn: 'Official second foreign language course', icon: <Globe2 size={28} />, color: '#60a5fa' },
        { id: 'GERMAN' as const, nameAr: 'اللغة الألمانية (لغة ثانية)', nameEn: 'German (Second Language)', descAr: 'مقرر اللغة الأجنبية الثانية المعتمد', descEn: 'Official second foreign language course', icon: <Globe2 size={28} />, color: '#60a5fa' },
        { id: 'ISLAMIC_STUDIES' as const, nameAr: 'التربية الدينية الإسلامية', nameEn: 'Islamic Religious Education', descAr: 'منهاج التربية الإسلامية المعتمد', descEn: 'Accredited Islamic education curriculum', icon: <Award size={28} />, color: '#fbbf24' }
      ];
      if (isHumanities) {
        return [
          ...commonCourses,
          { id: 'PHILOSOPHY' as const, nameAr: 'علم النفس والاجتماع (الشعبة الأدبية)', nameEn: 'Psychology & Sociology (Literary Track)', descAr: 'مبادئ علم النفس ومناهج البحث ومدخل علم الاجتماع', descEn: 'Psychology principles and introduction to sociology', icon: <Brain size={28} />, color: '#c084fc' },
          { id: 'MATH' as const, nameAr: 'الرياضيات العامة (الشعبة الأدبية)', nameEn: 'General Mathematics (Literary Track)', descAr: 'الجبر والتفاضل وحساب المثلثات لطلاب الأدبي', descEn: 'Algebra, calculus, and trigonometry for arts students', icon: <Calculator size={28} />, color: '#38bdf8' },
          { id: 'HISTORY' as const, nameAr: 'التاريخ (الشعبة الأدبية)', nameEn: 'History (Literary Track)', descAr: 'مصر والحضارة الإسلامية عبر العصور', descEn: 'Egypt and Islamic civilization throughout the ages', icon: <BookOpen size={28} />, color: '#f59e0b' },
          { id: 'GEOGRAPHY' as const, nameAr: 'الجغرافيا (الشعبة الأدبية)', nameEn: 'Geography (Literary Track)', descAr: 'تنمية الموارد البيئية والمائية والطاقة', descEn: 'Environmental, water, and energy development', icon: <Globe2 size={28} />, color: '#10b981' }
        ];
      }
      return [
        ...commonCourses,
        { id: 'PHYSICS' as const, nameAr: 'الفيزياء (الشعبة العلمية)', nameEn: 'Physics (Scientific Track)', descAr: 'الحركة الموجية والضوء وانكساره وخواص الموائع واللزوجة', descEn: 'Wave motion, light refraction/dispersion, and fluids', icon: <Atom size={28} />, color: '#38bdf8' },
        { id: 'CHEMISTRY' as const, nameAr: 'الكيمياء (الشعبة العلمية)', nameEn: 'Chemistry (Scientific Track)', descAr: 'بنية الذرة والجدول الدوري وتدرج خواص العناصر', descEn: 'Atomic structure, periodic table, and periodic trends', icon: <TestTube2 size={28} />, color: '#ec4899' },
        { id: 'MATH' as const, nameAr: 'الرياضيات البحتة (الشعبة العلمية)', nameEn: 'Pure Mathematics (Scientific Track)', descAr: 'الجبر والدوال والتفاضل وقاعدتا الجيب وجيب التمام', descEn: 'Algebra, functions, calculus, and sine/cosine laws', icon: <Calculator size={28} />, color: '#60a5fa' },
        { id: 'BIOLOGY' as const, nameAr: 'الأحياء (الشعبة العلمية)', nameEn: 'Biology (Scientific Track)', descAr: 'التغذية والهضم والنقل والتنفس الخلوي في الكائنات الحية', descEn: 'Nutrition, transport, and cellular respiration', icon: <Dna size={28} />, color: '#a3e635' }
      ];
    }
    if (selectedCountry === 'EG' && selectedGrade === 'G10') {
      const books: { id: Subject; nameAr: string; nameEn: string; descAr: string; descEn: string; icon: React.ReactNode; color: string }[] = [
        { id: 'ARABIC_LIT', nameAr: 'اللغة العربية (الفصل الأول)', nameEn: 'Arabic Language (Semester 1)', descAr: 'مقرر كتاب الوزارة للفصل الدراسي الأول 2026–2027', descEn: 'Ministry textbook course for Semester 1, 2026–2027', icon: <BookMarked size={28} />, color: '#34d399' },
        { id: 'ENGLISH', nameAr: 'اللغة الإنجليزية', nameEn: 'English Language', descAr: 'كتاب وزارة التربية والتعليم المصرية، ست وحدات', descEn: 'Egyptian Ministry textbook, six units', icon: <BookOpen size={28} />, color: '#a78bfa' },
        { id: 'FRENCH', nameAr: 'الفرنسية (لغة أولى / مسار اللغات)', nameEn: 'French First Language (Language Track)', descAr: 'مقرر مساند تختاره المدرسة، وليس كتابًا وزاريًا موثقًا', descEn: 'School-selected support course, not a verified Ministry textbook', icon: <Globe2 size={28} />, color: '#60a5fa' },
        { id: 'GERMAN', nameAr: 'الألمانية (لغة ثانية)', nameEn: 'German (Second Language)', descAr: 'مقرر مساند تختاره المدرسة، وليس كتابًا وزاريًا موثقًا', descEn: 'School-selected support course, not a verified Ministry textbook', icon: <Globe2 size={28} />, color: '#60a5fa' },
        { id: 'ITALIAN', nameAr: 'الإيطالية (لغة ثانية)', nameEn: 'Italian (Second Language)', descAr: 'مقرر مساند تختاره المدرسة، وليس كتابًا وزاريًا موثقًا', descEn: 'School-selected support course, not a verified Ministry textbook', icon: <Globe2 size={28} />, color: '#60a5fa' },
        { id: 'MATH', nameAr: 'الرياضيات (الفصل الأول)', nameEn: 'Mathematics (Semester 1)', descAr: 'الجبر والدوال والتشابه وحساب المثلثات وفق موضوعات الكتاب المرفق', descEn: 'Algebra, functions, similarity, and trigonometry from the supplied book', icon: <Calculator size={28} />, color: '#60a5fa' },
        { id: 'HISTORY', nameAr: 'التاريخ (الفصل الأول)', nameEn: 'History (Semester 1)', descAr: 'مصر والعالم القديم وفق الكتاب الوزاري المرفق', descEn: 'Egypt and the ancient world, based on the supplied Ministry textbook', icon: <BookOpen size={28} />, color: '#f59e0b' },
        { id: 'GENERAL_SCIENCE', nameAr: 'العلوم المتكاملة (الفصل الأول)', nameEn: 'Integrated Science (Semester 1)', descAr: 'النظام البيئي المائي والغلاف الجوي وفق الكتاب المرفق', descEn: 'Aquatic ecosystems and the atmosphere from the supplied book', icon: <Microscope size={28} />, color: '#38bdf8' },
        { id: 'PHILOSOPHY', nameAr: 'الفلسفة والمنطق (الفصل الأول)', nameEn: 'Philosophy and Logic (Semester 1)', descAr: 'التفكير الإنساني والتفلسف ومبادئ المنطق والاستدلال', descEn: 'Human thought, philosophical inquiry, logic, and reasoning', icon: <Brain size={28} />, color: '#c084fc' },
        { id: 'ISLAMIC_STUDIES', nameAr: 'التربية الدينية الإسلامية', nameEn: 'Islamic Religious Education', descAr: 'مقرر الكتاب الوزاري للفصلين الدراسيين', descEn: 'Ministry textbook course for both semesters', icon: <Award size={28} />, color: '#fbbf24' },
        { id: 'COMPUTER_SCIENCE', nameAr: 'تكنولوجيا المعلومات والاتصالات', nameEn: 'Information and Communication Technology', descAr: 'مقرر ICT من النسخة الإنجليزية للكتاب المرفق', descEn: 'ICT course from the supplied English-edition textbook', icon: <Code2 size={28} />, color: '#22c55e' }
      ];
      const educationType = normalizeEducationTypeForCountry(selectedCountry, profile.educationType);
      return books.filter((course) =>
        isEgyptG10BookCourseAvailable(course.id, educationType, selectedTrack) ||
        (['ARABIC_LIT', 'ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN'].includes(course.id) &&
          (educationType === 'PUBLIC' || educationType === 'PRIVATE'))
      );
    }
    if (selectedCountry === 'SD' && selectedGrade === 'G11') {
      return [
        {
          id: 'PHYSICS' as const,
          nameAr: 'الفيزياء',
          nameEn: 'Physics',
          descAr: 'الميكانيكا والموجات والصوت والضوء والكهرباء والمغناطيسية',
          descEn: 'Mechanics, waves, sound, optics, electricity & magnetism',
          icon: <Atom size={28} />,
          color: '#0284c7'
        },
        {
          id: 'CHEMISTRY' as const,
          nameAr: 'الكيمياء',
          nameEn: 'Chemistry',
          descAr: 'الاتزان الكيميائي والمحاليل والأحماض والقواعد والكيمياء العضوية',
          descEn: 'Chemical equilibrium, solutions, acids & bases, organic chemistry',
          icon: <FlaskConical size={28} />,
          color: '#ec4899'
        },
        {
          id: 'BIOLOGY' as const,
          nameAr: 'علم الأحياء',
          nameEn: 'Biology',
          descAr: 'التغذية والنقل والتنفس والإخراج والتنسيق العصبي والهرموني',
          descEn: 'Nutrition, transport, respiration, excretion, neural and hormonal coordination',
          icon: <Dna size={28} />,
          color: '#10b981'
        },
        {
          id: 'MATH' as const,
          nameAr: 'الرياضيات',
          nameEn: 'Mathematics',
          descAr: 'الدوال، التفاضل، التكامل، الهندسة التحليلية، وحساب المثلثات',
          descEn: 'Functions, differentiation, integration, analytical geometry, trigonometry',
          icon: <Calculator size={28} />,
          color: '#3b82f6'
        },
        {
          id: 'ARABIC_LIT' as const,
          nameAr: 'اللغة العربية',
          nameEn: 'Arabic Language',
          descAr: 'الأدب والنصوص والبلاغة والنقد وقواعد النحو والصرف',
          descEn: 'Literature, texts, rhetoric, literary criticism, and grammar',
          icon: <BookOpen size={28} />,
          color: '#f59e0b'
        },
        {
          id: 'ENGLISH' as const,
          nameAr: 'اللغة الإنجليزية',
          nameEn: 'English Language',
          descAr: 'مهارات القراءة المتقدمة، القواعد، الكتابة، واستيعاب النصوص',
          descEn: 'Advanced reading, grammar, writing, and text comprehension',
          icon: <Sparkles size={28} />,
          color: '#6366f1'
        },
        {
          id: 'ISLAMIC_STUDIES' as const,
          nameAr: 'التربية الإسلامية',
          nameEn: 'Islamic Studies',
          descAr: 'القرآن الكريم، علوم الحديث، العقيدة، الفقه الإسلامي، والسيرة',
          descEn: 'Holy Quran, Hadith, Aqeedah, Islamic Fiqh, and Sirah',
          icon: <Compass size={28} />,
          color: '#14b8a6'
        },
        {
          id: 'GEOGRAPHY' as const,
          nameAr: 'الجغرافيا',
          nameEn: 'Geography',
          descAr: 'جغرافية السودان والدراسات البيئية والموارد الطبيعية والاقتصادية',
          descEn: 'Sudan geography, environmental studies, natural & economic resources',
          icon: <Globe2 size={28} />,
          color: '#84cc16'
        },
        {
          id: 'HISTORY' as const,
          nameAr: 'التاريخ',
          nameEn: 'History',
          descAr: 'تاريخ السودان الحديث والمعاصر، الثورة المهدية، والحركات الوطنية',
          descEn: 'Modern & contemporary Sudan history, Mahdist revolution, national movements',
          icon: <BookMarked size={28} />,
          color: '#d97706'
        },
        {
          id: 'COMPUTER_SCIENCE' as const,
          nameAr: 'علوم الحاسوب',
          nameEn: 'Computer Science',
          descAr: 'أساسيات البرمجة، الخوارزميات، قواعد البيانات، والشبكات',
          descEn: 'Programming fundamentals, algorithms, databases, and networks',
          icon: <Code2 size={28} />,
          color: '#8b5cf6'
        }
      ].filter((course) => isSudanPublicGrade11SubjectAvailable(
        course.id,
        selectedCountry,
        selectedGrade,
        normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
        selectedTrack
      ));
    }
    if (selectedCountry === 'SD' && selectedGrade === 'G10') {
      return [
        {
          id: 'PHYSICS' as const,
          nameAr: 'الفيزياء',
          nameEn: 'Physics',
          descAr: 'المادة والحركة، معادلات الحركة، قوانين نيوتن، خواص المادة، وقياس الحرارة',
          descEn: 'Matter & motion, motion equations, Newton’s laws, properties of matter, and thermometry',
          icon: <Atom size={28} />,
          color: '#0284c7'
        },
        {
          id: 'CHEMISTRY' as const,
          nameAr: 'الكيمياء',
          nameEn: 'Chemistry',
          descAr: 'التركيب الذري والروابط والمعادلات والتفاعلات والحساب الكيميائي',
          descEn: 'Atomic structure, bonds, equations, reactions, and chemical calculations',
          icon: <FlaskConical size={28} />,
          color: '#f472b6'
        },
        {
          id: 'GEOGRAPHY' as const,
          nameAr: 'الجغرافيا والدراسات البيئية',
          nameEn: 'Geography & Environmental Studies',
          descAr: 'الجغرافيا الطبيعية والمناخ والخرائط ونظم المعلومات الجغرافية',
          descEn: 'Physical geography, climate, maps, and geographic information systems',
          icon: <Globe2 size={28} />,
          color: '#38bdf8'
        },
        {
          id: 'HISTORY' as const,
          nameAr: 'التاريخ',
          nameEn: 'History',
          descAr: 'تاريخ السودان والإسلام وأفريقيا والتاريخ الإنساني',
          descEn: 'Sudanese, Islamic, African, and human history',
          icon: <BookOpen size={28} />,
          color: '#f59e0b'
        }
      ].filter((course) => isSudanPublicGrade10SubjectAvailable(
        course.id,
        selectedCountry,
        selectedGrade,
        normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
        selectedTrack
      ));
    }
    if (selectedCountry === 'SD' && selectedGrade === 'G12') {
      const meta: Partial<Record<Subject, { descAr: string; descEn: string; icon: React.ReactNode; color: string }>> = {
        ARABIC_LIT: { descAr: 'المطالعة والأدب والقواعد والبلاغة والتعبير', descEn: 'Reading, literature, grammar, rhetoric, and writing', icon: <BookMarked size={28} />, color: '#34d399' },
        BIOLOGY: { descAr: 'التكاثر والوراثة والنظام البيئي', descEn: 'Reproduction, genetics, and ecosystems', icon: <Dna size={28} />, color: '#a3e635' },
        CHEMISTRY: { descAr: 'المشتقات العضوية والتحليل والطاقة والاتزان', descEn: 'Organic chemistry, analysis, energy, and equilibrium', icon: <FlaskConical size={28} />, color: '#f472b6' },
        COMPUTER_SCIENCE: { descAr: 'المنطق والعد الثنائي وPascal والخوارزميات', descEn: 'Logic, binary, Pascal, and algorithms', icon: <Code2 size={28} />, color: '#c084fc' },
        ENGLISH: { descAr: 'القراءة والفهم والمهارات اللغوية', descEn: 'Reading, comprehension, and language skills', icon: <BookOpen size={28} />, color: '#a78bfa' },
        FRENCH: { descAr: 'التواصل والقراءة والكتابة باللغة الفرنسية', descEn: 'French communication, reading, and writing', icon: <Globe2 size={28} />, color: '#60a5fa' },
        GERMAN: { descAr: 'التواصل والقراءة والكتابة باللغة الألمانية', descEn: 'German communication, reading, and writing', icon: <Globe2 size={28} />, color: '#60a5fa' },
        ITALIAN: { descAr: 'التواصل والقراءة والكتابة باللغة الإيطالية', descEn: 'Italian communication, reading, and writing', icon: <Globe2 size={28} />, color: '#60a5fa' },
        GEOGRAPHY: { descAr: 'الجغرافيا الاقتصادية والبيئة والتنمية', descEn: 'Economic geography, environment, and development', icon: <Globe2 size={28} />, color: '#38bdf8' },
        HISTORY: { descAr: 'تاريخ السودان والعالم العربي', descEn: 'Sudanese and Arab history', icon: <BookOpen size={28} />, color: '#f59e0b' },
        ISLAMIC_STUDIES: { descAr: 'التفسير والفقه والعقيدة والتجويد', descEn: 'Tafsir, jurisprudence, creed, and tajweed', icon: <Award size={28} />, color: '#fbbf24' },
        MATH: { descAr: selectedTrack === 'SCIENCE_MATH' ? 'الدوال والتفاضل والتكامل والرياضيات المتخصصة' : 'الدوال والتفاضل والتكامل والإحصاء والاحتمالات', descEn: selectedTrack === 'SCIENCE_MATH' ? 'Functions, calculus, and specialized mathematics' : 'Functions, calculus, statistics, and probability', icon: <Calculator size={28} />, color: '#60a5fa' },
        TECHNICAL_EDUCATION: { descAr: 'موضوعات العلوم الهندسية وتطبيقاتها', descEn: 'Engineering science topics and applications', icon: <Atom size={28} />, color: '#22c55e' }
      };
      return getSudanPublicGrade12Subjects(selectedTrack)
        .filter((subject) => isSudanPublicGrade12SubjectAvailable(
          subject,
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ))
        .map((id) => ({
          id,
          nameAr: getNationalSubjectLabel(id, selectedCountry, selectedGrade, 'ar', 'PUBLIC', selectedTrack),
          nameEn: getNationalSubjectLabel(id, selectedCountry, selectedGrade, 'en', 'PUBLIC', selectedTrack),
          ...(meta[id] ?? { descAr: 'محاور الكتاب المقرر', descEn: 'Textbook course topics', icon: <BookOpen size={28} />, color: '#60a5fa' })
        }));
    }
    if (selectedCountry === 'EG' && selectedGrade === 'G12') {
      const g12Meta: Partial<Record<Subject, { descAr: string; descEn: string; icon: React.ReactNode; color: string }>> = {
        ARABIC_LIT: { descAr: 'الأدب والنصوص والبلاغة والنحو وقصة الأيام', descEn: 'Literature, texts, rhetoric, grammar and story', icon: <BookMarked size={28} />, color: '#34d399' },
        ENGLISH: { descAr: 'القراءة والكتابة والمحادثة والقصة المقررة', descEn: 'Reading, writing, communication and novel', icon: <BookOpen size={28} />, color: '#a78bfa' },
        FRENCH: { descAr: 'اللغة الفرنسية كلغة أجنبية ثانية', descEn: 'French as second foreign language', icon: <Globe2 size={28} />, color: '#60a5fa' },
        GERMAN: { descAr: 'اللغة الألمانية كلغة أجنبية ثانية', descEn: 'German as second foreign language', icon: <Globe2 size={28} />, color: '#60a5fa' },
        ITALIAN: { descAr: 'اللغة الإيطالية كلغة أجنبية ثانية', descEn: 'Italian as second foreign language', icon: <Globe2 size={28} />, color: '#60a5fa' },
        ISLAMIC_STUDIES: { descAr: 'القرآن الكريم والحديث والعقيدة والآداب', descEn: 'Quran, Hadith, creed and morals', icon: <Award size={28} />, color: '#fbbf24' },
        PHYSICS: { descAr: 'الكهربية والتيار المتردد والفيزياء الحديثة', descEn: 'Electricity, AC circuits and modern physics', icon: <Atom size={28} />, color: '#38bdf8' },
        CHEMISTRY: { descAr: 'العناصر الانتقالية والاتزان والكهربية والعضوية', descEn: 'Transition elements, equilibrium and organic chemistry', icon: <FlaskConical size={28} />, color: '#f472b6' },
        BIOLOGY: { descAr: 'الدعامة والحركة والتنسيق الهرموني والتكاثر والمناعة والبيولوجيا الجزيئية', descEn: 'Physiology, reproduction, immunity and molecular biology', icon: <Dna size={28} />, color: '#a3e635' },
        MATH: { descAr: selectedTrack === 'SCIENCE_MATH' ? 'التفاضل والتكامل والجبر العام والهندسة الفراغية' : 'الإحصاء والاحتمال وتطبيقات البيانات', descEn: selectedTrack === 'SCIENCE_MATH' ? 'Calculus, algebra and solid geometry' : 'Statistics and probability', icon: <Calculator size={28} />, color: '#60a5fa' },
        COMPUTER_SCIENCE: { descAr: 'الاستاتيكا والديناميكا وعلم الحركة والقوى', descEn: 'Statics and dynamics', icon: <Code2 size={28} />, color: '#c084fc' },
        HISTORY: { descAr: 'تاريخ مصر الحديث والمعاصر والقضايا القومية', descEn: 'Modern and contemporary history of Egypt', icon: <BookOpen size={28} />, color: '#f59e0b' },
        GEOGRAPHY: { descAr: 'الدولة والمقومات والحدود السياسية والتكتلات الاقتصادية', descEn: 'Political geography, states and borders', icon: <Globe2 size={28} />, color: '#38bdf8' },
        PHILOSOPHY: { descAr: 'الفلسفة التطبيقية والبيئية والمنطق وتطور الفكر', descEn: 'Applied philosophy, ethics and logic', icon: <Brain size={28} />, color: '#fbbf24' }
      };
      return getEgyptG12Subjects(selectedTrack).map((id) => ({
        id,
        nameAr: getNationalSubjectLabel(id, 'EG', 'G12', 'ar', normalizeEducationTypeForCountry('EG', profile.educationType), selectedTrack),
        nameEn: getNationalSubjectLabel(id, 'EG', 'G12', 'en', normalizeEducationTypeForCountry('EG', profile.educationType), selectedTrack),
        ...(g12Meta[id] ?? { descAr: 'محاور الكتاب المقرر', descEn: 'Textbook course topics', icon: <BookOpen size={28} />, color: '#60a5fa' })
      }));
    }
    if (isPrimary) {
      return [
        {
          id: 'PRIMARY_MATH',
          nameAr: 'الرياضيات الابتدائية',
          nameEn: 'Primary Mathematics',
          descAr: 'الأعداد، العمليات الحسابية، والكسور والمفاهيم الهندسية',
          descEn: 'Numbers, arithmetic & basic geometry',
          icon: <Calculator size={28} />,
          color: '#38bdf8'
        },
        {
          id: 'PRIMARY_ARABIC',
          nameAr: 'لغتي الجميلة',
          nameEn: 'Arabic Language',
          descAr: 'القراءة، المهارات الإملائية، والقواعد الأساسية',
          descEn: 'Reading, spelling & foundation grammar',
          icon: <BookMarked size={28} />,
          color: '#34d399'
        },
        {
          id: 'PRIMARY_SCIENCE',
          nameAr: 'العلوم المبسطة',
          nameEn: 'Primary Science',
          descAr: 'الكائنات الحية، البيئة، والمادة والطاقة',
          descEn: 'Living organisms, environment & matter',
          icon: <Microscope size={28} />,
          color: '#a78bfa'
        },
        {
          id: 'ISLAMIC_STUDIES',
          nameAr: 'الدراسات الإسلامية',
          nameEn: 'Islamic Studies',
          descAr: 'القرآن الكريم، العقيدة، والفقه والآداب',
          descEn: 'Quran, values & Islamic principles',
          icon: <Award size={28} />,
          color: '#fbbf24'
        },
        ...(isEnglishCourseAvailable(selectedCountry, selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'ENGLISH' as const,
          nameAr: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'ar', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          nameEn: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'en', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          descAr: selectedCountry === 'EG' ? 'منهج Connect المعتمد - محادثة وقراءة واستماع وكتابة' : 'الاستماع والتحدث والقراءة والكتابة',
          descEn: selectedCountry === 'EG' ? 'Official Connect curriculum - speaking, reading & writing' : 'Listening, speaking, reading and writing',
          icon: <BookOpen size={28} />,
          color: '#a78bfa'
        }] : []),
        ...(isSudanPublicGrade4SubjectAvailable('COMPUTER_SCIENCE', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          isSudanPublicGrade5SubjectAvailable('COMPUTER_SCIENCE', selectedCountry, selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          isSudanPublicGrade6SubjectAvailable('COMPUTER_SCIENCE', selectedCountry, selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          (selectedCountry === 'EG' && isEgyptPrimarySubjectAvailable('COMPUTER_SCIENCE', selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType))) ? [{
          id: 'COMPUTER_SCIENCE' as const,
          nameAr: 'تكنولوجيا المعلومات والاتصالات',
          nameEn: 'Information and Communication Technology',
          descAr: 'مهارات رقمية واستخدام آمن للتقنية',
          descEn: 'Digital skills and safe use of technology',
          icon: <Code2 size={28} />,
          color: '#c084fc'
        }] : []),
        ...((isSudanPublicGrade5SubjectAvailable('GEOGRAPHY', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          isSudanPublicGrade6SubjectAvailable('GEOGRAPHY', selectedCountry, selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          (selectedCountry === 'EG' && isEgyptPrimarySubjectAvailable('GEOGRAPHY', selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType)))) ? [{
          id: 'GEOGRAPHY' as const,
          nameAr: selectedCountry === 'EG' ? 'الدراسات الاجتماعية (الجغرافيا)' : 'الجغرافيا',
          nameEn: 'Geography',
          descAr: selectedCountry === 'EG' ? 'البيئات والموارد الطبيعية والموقع الجغرافي' : 'الخرائط والبيئات والموارد في السودان',
          descEn: 'Maps, environments and resources',
          icon: <Globe2 size={28} />,
          color: '#38bdf8'
        }] : []),
        ...((isSudanPublicGrade5SubjectAvailable('HISTORY', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          isSudanPublicGrade6SubjectAvailable('HISTORY', selectedCountry, selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          (selectedCountry === 'EG' && isEgyptPrimarySubjectAvailable('HISTORY', selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType)))) ? [{
          id: 'HISTORY' as const,
          nameAr: selectedCountry === 'EG' ? 'الدراسات الاجتماعية (التاريخ)' : 'التاريخ',
          nameEn: 'History',
          descAr: selectedCountry === 'EG' ? 'شخصيات وأحداث وحضارات عبر العصور' : 'محطات وشخصيات من تاريخ السودان',
          descEn: 'Historical figures and civilizations',
          icon: <BookOpen size={28} />,
          color: '#f59e0b'
        }] : []),
        ...(isSaudiPublicTajweedAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        ) ? [{
          id: 'TAJWEED' as const,
          nameAr: 'التجويد (مقرر اختياري)',
          nameEn: 'Tajweed (Optional)',
          descAr: 'مقرر اختياري مستند إلى كتاب مدارس تحفيظ القرآن الكريم؛ الشرح والرسوم من إعداد المنصة.',
          descEn: 'Optional course based on the Qur’an Memorization Schools textbook; platform-created explanations and diagrams.',
          icon: <BookOpen size={28} />,
          color: '#f59e0b'
        }] : []),
        ...(isSaudiPublicQuranRecitationAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        ) ? [{
          id: 'QURAN_RECITATION' as const,
          nameAr: 'تلاوة القرآن الكريم وتجويده',
          nameEn: 'Quran Recitation and Tajweed',
          descAr: selectedGrade === 'G5'
            ? 'كتاب الصف الخامس الحكومي كامل غير مجزأ؛ عناوين الفهرس موثقة والشرح والرسوم من إعداد المنصة.'
            : 'كتاب الصف السادس الحكومي، الجزء الأول؛ عناوين الفهرس موثقة والشرح والرسوم من إعداد المنصة.',
          descEn: selectedGrade === 'G5'
            ? 'Full undivided Saudi public Grade 5 textbook; contents headings verified, with platform-created explanations and diagrams.'
            : 'Saudi public Grade 6 textbook, Part One; contents headings verified, with platform-created explanations and diagrams.',
          icon: <BookOpen size={28} />,
          color: '#d4a72c'
        }] : []),
        ...((isSaudiPublicG6VisualArtsAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        ) || isSudanPublicGrade4SubjectAvailable('VISUAL_ARTS', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ||
          isSudanPublicGrade5SubjectAvailable('VISUAL_ARTS', selectedCountry, selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack)) ? [{
          id: 'VISUAL_ARTS' as const,
          nameAr: 'التربية الفنية',
          nameEn: 'Art Education',
          descAr: 'الرسم والتصميم والتشكيل بخامات متنوعة',
          descEn: 'Drawing, design and construction with varied materials',
          icon: <Palette size={28} />,
          color: '#fb7185'
        }] : [])
      ];
    }

    if (isMiddle) {
      return [
        {
          id: 'GENERAL_SCIENCE',
          nameAr: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'العلوم الطبيعية' : 'العلوم العامة',
          nameEn: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'Natural Science' : 'General Science',
          descAr: 'القوى والحركة، المادة وتغيراتها، والأنظمة الحية',
          descEn: 'Forces, physical laws & life systems',
          icon: <Microscope size={28} />,
          color: '#38bdf8'
        },
        {
          id: 'MATH',
          nameAr: 'الرياضيات المتوسطة',
          nameEn: 'Middle Mathematics',
          descAr: 'الجبر، المعادلات الخطية، والهندسة والقياس',
          descEn: 'Algebra, equations & geometry',
          icon: <Calculator size={28} />,
          color: '#60a5fa'
        },
        {
          id: 'ARABIC_LANG',
          nameAr: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'اللغة العربية' : 'لغتي الخالدة',
          nameEn: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'Arabic Language' : 'Arabic Language & Grammar',
          descAr: 'قواعد النحو والصرف، البلاغة، والتحليل الأدبي',
          descEn: 'Grammar, morphology & expression',
          icon: <BookMarked size={28} />,
          color: '#34d399'
        },
        {
          id: 'COMPUTER_SCIENCE',
          nameAr: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'تكنولوجيا المعلومات والاتصالات' : 'التقنية والحاسب الآلي',
          nameEn: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'Information and Communication Technology' : 'Computer Science & Tech',
          descAr: 'التفكير الخوارزمي، البرمجة، والمنطق الرقمي',
          descEn: 'Algorithms, logic & digital skills',
          icon: <Code2 size={28} />,
          color: '#c084fc'
        },
        ...(isEnglishCourseAvailable(selectedCountry, selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'ENGLISH' as const,
          nameAr: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'ar', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          nameEn: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'en', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          descAr: selectedCountry === 'EG' ? 'منهج Prep Connect - لغة وقواعد وكتابة متقدمة' : selectedCountry === 'SD' ? `ثماني وحدات في مهارات اللغة والتواصل (SMILE Book ${selectedGrade === 'G8' ? '8' : '7'})` : 'مهارات اللغة الإنجليزية والتواصل',
          descEn: 'Eight units in language and communication skills',
          icon: <BookOpen size={28} />,
          color: '#a78bfa'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('ISLAMIC_STUDIES', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'ISLAMIC_STUDIES' as const,
          nameAr: 'التربية الإسلامية',
          nameEn: 'Islamic Studies',
          descAr: 'القرآن والتجويد والحديث والعقيدة والفقه والسيرة',
          descEn: 'Quran, tajweed, hadith, creed, jurisprudence, and biography',
          icon: <Award size={28} />,
          color: '#fbbf24'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('GEOGRAPHY', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'GEOGRAPHY' as const,
          nameAr: 'الجغرافيا',
          nameEn: 'Geography',
          descAr: selectedGrade === 'G8' ? 'دراسة قارات أمريكا الشمالية والجنوبية وأستراليا' : 'دراسة قارات إفريقيا وآسيا وأوروبا',
          descEn: selectedGrade === 'G8' ? 'Study of North America, South America, and Australia' : 'Study of Africa, Asia, and Europe',
          icon: <Globe2 size={28} />,
          color: '#38bdf8'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('HISTORY', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'HISTORY' as const,
          nameAr: 'التاريخ',
          nameEn: 'History',
          descAr: selectedGrade === 'G8' ? 'تاريخ السودان والدولة الأموية وإفريقيا وأوروبا' : 'تاريخ السودان والدولة الإسلامية وإفريقيا وأوروبا القديمة',
          descEn: selectedGrade === 'G8' ? 'Sudanese, Umayyad, African, and European history' : 'Sudanese, Islamic, African, and ancient European history',
          icon: <BookOpen size={28} />,
          color: '#f59e0b'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('NATIONAL_EDUCATION', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'NATIONAL_EDUCATION' as const,
          nameAr: 'التربية الوطنية',
          nameEn: 'National Education',
          descAr: 'الوطن والوطنية والسودان والمجتمع والدولة',
          descEn: 'Homeland, citizenship, Sudan, society, and the state',
          icon: <Award size={28} />,
          color: '#fb923c'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('TECHNICAL_EDUCATION', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'TECHNICAL_EDUCATION' as const,
          nameAr: 'أساسيات التربية التقنية',
          nameEn: 'Foundations of Technical Education',
          descAr: 'تطبيقات هندسية وزراعية وفندقية وتجارية',
          descEn: 'Engineering, agriculture, hospitality, and commerce',
          icon: <Code2 size={28} />,
          color: '#22c55e'
        }] : [])
      ];
    }

    // High School / STEM
    return [
      ...(isSaudiPublicEnglishAvailable(
        selectedCountry,
        selectedGrade,
        normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
      ) ? [{
        id: 'ENGLISH' as const,
        nameAr: selectedGrade === 'G11' ? 'اللغة الإنجليزية 2 (Mega Goal 2)' : 'اللغة الإنجليزية 1 (Mega Goal)',
        nameEn: selectedGrade === 'G11' ? 'English 2 (Mega Goal 2)' : 'English 1 (Mega Goal)',
        descAr: 'التواصل، القراءة، الكتابة، والقواعد في سياقات واقعية',
        descEn: 'Communication, reading, writing, and grammar in real-world contexts',
        icon: <BookOpen size={28} />,
        color: '#a78bfa'
      }] : []),
      ...(selectedCountry === 'SA' && selectedGrade === 'G11' &&
        !isSaudiPublicG11PhysicsAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ) ? [] : [{
        id: 'PHYSICS' as const,
        nameAr: 'الفيزياء',
        nameEn: 'Physics',
        descAr: 'الميكانيكا، الكهرومغناطيسية، الحرارة، والفيزياء الحديثة',
        descEn: 'Mechanics, electromagnetism & modern physics',
        icon: <Atom size={28} />,
        color: '#38bdf8'
      }]),
      {
        id: 'MATH' as const,
        nameAr: 'الرياضيات المتقدمة',
        nameEn: 'Advanced Mathematics',
        descAr: 'التفاضل والتكامل، المتجهات، والمصفوفات والاحتمالات',
        descEn: 'Calculus, vectors, matrices & probability',
        icon: <Calculator size={28} />,
        color: '#60a5fa'
      },
      {
        id: 'CHEMISTRY' as const,
        nameAr: 'الكيمياء',
        nameEn: 'Chemistry',
        descAr: 'الروابط الجزيئية، سرعة التفاعلات، والاتزان الكيميائي',
        descEn: 'Chemical bonds, reactions & equilibrium',
        icon: <FlaskConical size={28} />,
        color: '#f472b6'
      },
      ...(selectedCountry === 'SA' && selectedGrade === 'G11' &&
        !isSaudiPublicG11BiologyAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ) ? [] : [{
        id: 'BIOLOGY' as const,
        nameAr: 'الأحياء',
        nameEn: 'Biology',
        descAr: 'علم الوراثة، الخلية، والتنوع الحيوي ووظائف الأعضاء',
        descEn: 'Genetics, cell biology & physiology',
        icon: <Dna size={28} />,
        color: '#34d399'
      }]),
      ...(isSaudiPublicG11HealthScienceAvailable(
        selectedCountry,
        selectedGrade,
        normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
        selectedTrack
      ) ? [{
        id: 'HEALTH_SCIENCE' as const,
        nameAr: 'مبادئ العلوم الصحية',
        nameEn: 'Health Sciences',
        descAr: 'أساسيات الرعاية الصحية، صحة الإنسان، ومهارات السلامة والإسعاف',
        descEn: 'Healthcare foundations, human health, safety and first aid',
        icon: <HeartPulse size={28} />,
        color: '#fb7185'
      }] : []),
      ...(selectedCountry === 'SA' && selectedGrade === 'G11'
        ? isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ) ? [{
            id: 'COMPUTER_SCIENCE' as const,
            nameAr: 'التقنية الرقمية 2 (نسخة BM لمسار إدارة الأعمال)',
            nameEn: 'Digital Technology 2 (BM Edition, Business Track)',
            descAr: 'علم البيانات والذكاء الاصطناعي والتصميم والتسويق الإلكتروني وتطوير المواقع',
            descEn: 'Data science, AI, graphic design, e-marketing, and web development',
            icon: <Code2 size={28} />,
            color: '#c084fc'
          }] : []
        : [{
          id: 'COMPUTER_SCIENCE' as const,
          nameAr: 'علوم الحاسب وهياكل البيانات',
          nameEn: 'Computer Science & STEM',
          descAr: 'هياكل البيانات، البرمجة بلغة بايثون، والخوارزميات',
          descEn: 'Data structures, Python & algorithms',
          icon: <Code2 size={28} />,
          color: '#c084fc'
        }]),
      {
        id: 'ARABIC_LIT' as const,
        nameAr: 'الدراسات الأدبية واللغوية',
        nameEn: 'Arabic Literature & Linguistics',
        descAr: 'النقد الأدبي، البلاغة، وتاريخ الأدب والشعر',
        descEn: 'Rhetoric, literature history & analysis',
        icon: <BookMarked size={28} />,
        color: '#fbbf24'
      }
    ];
  };

  const handleLaunchLearningHub = () => {
    let defaultAge = 16;
    if (selectedGrade === 'G1') defaultAge = 7;
    else if (selectedGrade === 'G2') defaultAge = 8;
    else if (selectedGrade === 'G3') defaultAge = 9;
    else if (selectedGrade === 'G4') defaultAge = 10;
    else if (selectedGrade === 'G5') defaultAge = 11;
    else if (selectedGrade === 'G6') defaultAge = 12;
    else if (selectedGrade === 'G7') defaultAge = 13;
    else if (selectedGrade === 'G8') defaultAge = 14;
    else if (selectedGrade === 'G9') defaultAge = 15;
    else if (selectedGrade === 'G10') defaultAge = 16;
    else if (selectedGrade === 'G11') defaultAge = 17;
    else if (selectedGrade === 'G12') defaultAge = 18;

    const updated: StudentProfile = {
      ...profile,
      country: selectedCountry,
      educationType: normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
      gradeLevel: selectedGrade,
      educationTrack: selectedTrack,
      specialization: (isPrimary || isMiddle) 
        ? 'GENERAL' 
        : getSpecializationForEducationTrack(selectedTrack),
      subject: (selectedSubject === 'PHYSICS' &&
        !isSaudiPublicG11PhysicsAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ) && selectedCountry === 'SA' && selectedGrade === 'G11') ||
        (selectedSubject === 'BIOLOGY' &&
          !isSaudiPublicG11BiologyAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ) && selectedCountry === 'SA' && selectedGrade === 'G11')
        || (selectedSubject === 'HEALTH_SCIENCE' &&
          !isSaudiPublicG11HealthScienceAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ))
        || (selectedSubject === 'COMPUTER_SCIENCE' &&
          selectedCountry === 'SA' &&
          selectedGrade === 'G11' &&
          !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ))
        || (selectedSubject === 'ENGLISH' &&
          !isEnglishCourseAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ))
        || (selectedSubject === 'TAJWEED' &&
          !isSaudiPublicTajweedAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
          ))
        || (selectedSubject === 'QURAN_RECITATION' &&
          !isSaudiPublicQuranRecitationAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
          ))
        || (selectedSubject === 'VISUAL_ARTS' &&
          !isSaudiPublicG6VisualArtsAvailable(
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
          ) &&
          !isSudanPublicGrade4SubjectAvailable(
            selectedSubject,
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ) &&
          !isSudanPublicGrade5SubjectAvailable(
            selectedSubject,
            selectedCountry,
            selectedGrade,
            normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
            selectedTrack
          ))
        ? isPrimary ? 'PRIMARY_ARABIC' : 'ARABIC_LIT'
        : selectedSubject,
      age: defaultAge,
      isAutoDetectedCountry: !isManual
    };

    onSelectCurriculumAndStart(updated);
  };

  const activeSubjectLocalized = getNationalSubjectLabel(
    selectedSubject,
    selectedCountry,
    selectedGrade,
    isEn ? 'en' : 'ar',
    normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
    selectedTrack
  ) || selectedSubject;

  const effectiveEduType = normalizeEducationTypeForCountry(selectedCountry, profile.educationType);
  const isLanguagesTrack = effectiveEduType === 'INTERNATIONAL';
  const isArabicSubj = isArabicSubject(selectedSubject);
  const isForeignSubj = isForeignLanguageSubject(selectedSubject, effectiveEduType);
  const isLtrMode = isEn || (!isArabicSubj && (isForeignSubj || (isLanguagesTrack && !selectedSubject)));

  return (
    <div className="preparatory-landing-root" dir={isLtrMode ? 'ltr' : 'rtl'}>
      {/* Top Header Bar */}
      <header className="prep-site-header">
        <div className="prep-header-inner">
          <div className="prep-brand">
            <div className="prep-brand-icon">
              <GraduationCap size={22} />
            </div>
            <div className="prep-brand-text">
              <span className="prep-brand-title">{isEn ? 'Smart AI Tutor' : 'منصة المعلم الذكي'}</span>
              <span className="prep-brand-tag">AI v3.5 • Gemini Adaptive</span>
            </div>
          </div>

          <div className="prep-header-actions">
            {/* Language Switcher */}
            <button 
              type="button" 
              className="btn-prep-action" 
              onClick={onToggleLanguage}
              title={isEn ? 'Switch to Arabic' : 'التحويل للإنجليزية'}
            >
              <Globe size={15} />
              <span>{isEn ? 'العربية' : 'English'}</span>
            </button>



            {/* Desktop Only Tools */}
            <button 
              type="button" 
              className="btn-prep-action desktop-only" 
              onClick={onOpenContact}
            >
              <Mail size={15} className="text-cyan-400" />
              <span>{isEn ? 'Contact Us' : 'تواصل معنا'}</span>
            </button>

            <button 
              type="button" 
              className="btn-prep-action desktop-only" 
              onClick={onOpenApiKey}
              title={isEn ? "Configure Gemini AI Key" : "إعداد مفتاح الذكاء الاصطناعي"}
            >
              <Key size={15} className={hasApiKey ? "text-emerald-400" : "text-amber-400"} />
              <span>{hasApiKey ? (isEn ? 'AI Active' : 'الذكاء نشط') : (isEn ? 'AI Key' : 'مفتاح AI')}</span>
            </button>

            <button 
              type="button" 
              className="btn-prep-action btn-prep-admin desktop-only" 
              onClick={onOpenAdmin}
            >
              <ShieldCheck size={15} />
              <span>{isEn ? 'Admin' : 'لوحة المشرف'}</span>
            </button>

            {/* Account / Login Button */}
            <button 
              type="button" 
              className="btn-prep-login" 
              onClick={onOpenAuth}
            >
              <Users size={15} />
              <span>{isLoggedIn ? (isEn ? 'Account' : 'حسابي') : (isEn ? 'Log In' : 'دخول')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Presentation Banner */}
      <main className="prep-main-content">
        <section className="prep-hero-section">
          <div className="prep-hero-badge">
            <Sparkles size={16} className="sparkle-pulse" />
            <span>{isEn ? 'The Future of AI-Driven Personal Education' : 'الجيل القادم من التعلم التكيفي المعزز بـ Gemini'}</span>
          </div>

          <h1 className="prep-hero-title">
            {isEn 
              ? 'Your Personal 1-on-1 AI Tutor for Arab National Curricula' 
              : 'معلمك الذكي الخاص 1-on-1 لتفوق استثنائي في المناهج الوطنية'}
          </h1>

          <p className="prep-hero-subtitle">
            {isEn
              ? 'Welcome! AI Tutor adapts dynamically to your pace. Explore the stages roadmap below, choose your national curriculum and subject, then launch your interactive learning journey.'
              : 'أهلاً بك! منصة تعليمية ذكية تحاورك بأسلوب سقراطي تفاعلي، تشرح المفاهيم بـ 4 نماذج تطبيقية ورسوم علمية دقيقة، وتختبر إتقانك عبر بوابات تقييم ذكية. اختر مرحلتك ومادتك للبدء فوراً.'}
          </p>

          {/* Mobile Quick Action Strip */}
          <div className="prep-mobile-tools-strip mobile-only">
            <button 
              type="button" 
              className="prep-mobile-tool-btn" 
              onClick={onOpenContact}
            >
              <Mail size={14} className="text-cyan-400" />
              <span>{isEn ? 'Contact' : 'تواصل معنا'}</span>
            </button>

            <button 
              type="button" 
              className="prep-mobile-tool-btn" 
              onClick={onOpenApiKey}
            >
              <Key size={14} className={hasApiKey ? "text-emerald-400" : "text-amber-400"} />
              <span>{hasApiKey ? (isEn ? 'AI Active' : 'AI نشط') : (isEn ? 'API Key' : 'مفتاح AI')}</span>
            </button>

            <button 
              type="button" 
              className="prep-mobile-tool-btn prep-mobile-tool-admin" 
              onClick={onOpenAdmin}
            >
              <ShieldCheck size={14} />
              <span>{isEn ? 'Admin' : 'المشرف'}</span>
            </button>


          </div>

          {/* Quick Platform Pillars */}
          <div className="prep-pillars-row">
            <div className="prep-pillar-pill">
              <Brain size={18} className="text-purple-400" />
              <span>{isEn ? 'Socratic Thinking AI' : 'حوار سقراطي يوجه تفكيرك'}</span>
            </div>
            <div className="prep-pillar-pill">
              <BookOpen size={18} className="text-sky-400" />
              <span>{isEn ? '4 Solved Models Per Lesson' : '4 نماذج وتدريبات محلولة لكل درس'}</span>
            </div>
            <div className="prep-pillar-pill">
              <Layers size={18} className="text-pink-400" />
              <span>{isEn ? 'Interactive Scientific Diagrams' : 'مخططات ورسوم علمية تفاعلية'}</span>
            </div>
            <div className="prep-pillar-pill">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>{isEn ? 'Mastery Gating Exams' : 'بوابات تقييم تضمن الإتقان'}</span>
            </div>
          </div>
        </section>

        {/* Section 1: Educational Stages Roadmap */}
        <section className="prep-section">
          <div className="prep-section-header">
            <div className="section-title-wrap">
              <Compass size={22} className="text-sky-400" />
              <h2>{isEn ? 'Educational Stages & Learning Paths Roadmap' : 'خريطة المراحل التعليمية ومسارات التعلم'}</h2>
            </div>
            <p>
              {isEn 
                ? 'Select an educational stage to view its core curriculum and automatically align the subject selector below:' 
                : 'اضغط على المرحلة التعليمية المناسبة لاستعراض تفاصيلها وضبط المواد الدراسية تلقائياً:'}
            </p>
          </div>

          <div className="prep-stages-grid">
            {/* Elementary Stage Card */}
            <div 
              className={`prep-stage-card ${isPrimary ? 'active-stage-card' : ''}`}
              onClick={() => handleSelectStage('primary')}
            >
              <div className="prep-stage-cover">
                <img 
                  src={getStageVisual('primary').coverImage} 
                  alt={isEn ? 'Primary Foundation Stage' : 'المرحلة الابتدائية - التأسيس المعرفي'} 
                  className="prep-stage-cover-img"
                  loading="lazy"
                />
                <div className="prep-stage-cover-overlay" />
                <span className="prep-stage-cover-badge">{isEn ? 'Grades 1 – 6' : 'الصفوف 1 - 6'}</span>
              </div>
              <div className="stage-card-header">
                <span className="stage-badge stage-badge-emerald">{isEn ? 'Elementary' : 'المرحلة الابتدائية'}</span>
                <span className="stage-age">{isEn ? 'Ages 6 - 12' : '6 - 12 سنة'}</span>
              </div>
              <h3>{isEn ? 'Grades 1 – 6 (Foundation)' : 'الصفوف (1 - 6) التأسيس المعرفي'}</h3>
              <p>
                {isEn 
                  ? 'Foundational skills in reading, spelling, arithmetic operations, simple science, and moral values.' 
                  : 'تأسيس متين وممتع في الحساب والكسور، القراءة والإملاء، استكشاف العلوم المبسطة، والتربية الإسلامية.'}
              </p>
              <div className="stage-tags-list">
                <span>📐 رياضيات</span>
                <span>📖 لغتي الجميلة</span>
                <span>🔬 علوم مبسطة</span>
                <span>🕌 دراسات إسلامية</span>
              </div>
              <div className="stage-select-btn">
                <span>{isPrimary ? (isEn ? '✓ Selected' : '✓ المرحلة المحددة') : (isEn ? 'Select Stage ➔' : 'تحديد هذه المرحلة ➔')}</span>
              </div>
            </div>

            {/* Middle Stage Card */}
            <div 
              className={`prep-stage-card ${isMiddle ? 'active-stage-card' : ''}`}
              onClick={() => handleSelectStage('middle')}
            >
              <div className="prep-stage-cover">
                <img 
                  src={getStageVisual('middle').coverImage} 
                  alt={isEn ? 'Middle Stage' : 'المرحلة المتوسطة - التفكير المنطقي'} 
                  className="prep-stage-cover-img"
                  loading="lazy"
                />
                <div className="prep-stage-cover-overlay" />
                <span className="prep-stage-cover-badge">{isEn ? 'Grades 7 – 9' : 'الصفوف 7 - 9'}</span>
              </div>
              <div className="stage-card-header">
                <span className="stage-badge stage-badge-sky">{isEn ? 'Middle / Intermediate' : 'المرحلة المتوسطة'}</span>
                <span className="stage-age">{isEn ? 'Ages 13 - 15' : '13 - 15 سنة'}</span>
              </div>
              <h3>{isEn ? 'Grades 7 – 9 (Core Sciences)' : 'الصفوف (7 - 9) التفكير المنطقي'}</h3>
              <p>
                {isEn 
                  ? 'Strengthening logical reasoning, algebraic equations, integrated sciences, and digital skills.' 
                  : 'تعميق الاستيعاب العلمي، المعادلات الرياضية، قواعد النحو المتقدم، ومقدمة شاملة في البرمجة والتقنية.'}
              </p>
              <div className="stage-tags-list">
                <span>🔬 علوم عامة</span>
                <span>📐 رياضيات متوسطة</span>
                <span>📖 لغتي الخالدة</span>
                <span>💻 حاسب وتقنية</span>
              </div>
              <div className="stage-select-btn">
                <span>{isMiddle ? (isEn ? '✓ Selected' : '✓ المرحلة المحددة') : (isEn ? 'Select Stage ➔' : 'تحديد هذه المرحلة ➔')}</span>
              </div>
            </div>

            {/* High School & STEM Card */}
            <div 
              className={`prep-stage-card ${isHigh ? 'active-stage-card' : ''}`}
              onClick={() => handleSelectStage('high')}
            >
              <div className="prep-stage-cover">
                <img 
                  src={getStageVisual('high').coverImage} 
                  alt={isEn ? 'High School & STEM' : 'المرحلة الثانوية و STEM'} 
                  className="prep-stage-cover-img"
                  loading="lazy"
                />
                <div className="prep-stage-cover-overlay" />
                <span className="prep-stage-cover-badge">{isEn ? 'Grades 10 – 12' : 'الصفوف 10 - 12'}</span>
              </div>
              <div className="stage-card-header">
                <span className="stage-badge stage-badge-purple">{isEn ? 'High School & STEM' : 'المرحلة الثانوية و STEM'}</span>
                <span className="stage-age">{isEn ? 'Ages 16 - 18+' : '16 - 18 سنة'}</span>
              </div>
              <h3>{isEn ? 'Grades 10 – 12 (Specialized Sciences)' : 'الصفوف (10 - 12) التخصص الدقيق'}</h3>
              <p>
                {isEn 
                  ? 'Advanced specialization in Physics, Calculus, Chemistry, Biology, Algorithms & Data Structures.' 
                  : 'تخصص علمي مكثف في الميكانيكا والفيزياء، التفاضل والتكامل، التفاعلات الكيميائية، الوراثة، وهياكل البيانات.'}
              </p>
              <div className="stage-tags-list">
                <span>⚡ فيزياء</span>
                <span>📐 رياضيات متقدمة</span>
                <span>🧪 كيمياء</span>
                <span>🧬 أحياء</span>
                <span>💻 علوم حاسب</span>
              </div>
              <div className="stage-select-btn">
                <span>{isHigh ? (isEn ? '✓ Selected' : '✓ المرحلة المحددة') : (isEn ? 'Select Stage ➔' : 'تحديد هذه المرحلة ➔')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Curriculum & Subject Selection Portal */}
        <section className="prep-section prep-config-card" id="curriculum-selection-section">
          <div className="prep-section-header">
            <div className="section-title-wrap">
              <GraduationCap size={22} className="text-purple-400" />
              <h2>{isEn ? 'Curriculum, Grade & Subject Selection Portal' : 'بوابة اختيار المنهج والصف والمادة للبدء'}</h2>
            </div>
            <p>
              {isEn 
                ? 'Tailor the national curriculum standard, select your grade, and choose the subject you wish to launch:' 
                : 'حدد الدولة والمنهج المعتمد، واختر الصف والمادة التي ترغب في دراستها:'}
            </p>
          </div>

          {/* 1. Country Selection */}
          <div className="prep-field-block">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <label className="prep-field-label" style={{ marginBottom: 0 }}>
                <Globe2 size={16} />
                <span>{isEn ? '1. Select National Curriculum Standard:' : '1. حدد الدولة والمنهج الوطني المعتمد:'}</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: !isManual ? '#38bdf8' : '#f59e0b', marginInlineStart: '0.5rem' }}>
                  {!isManual ? (isEn ? '(✨ Auto-detected by Location)' : '(✨ كشف تلقائي حسب موقعك الجغرافي)') : (isEn ? '(✏️ تم الاختيار يدوياً)' : '(✏️ تم الاختيار يدوياً)')}
                </span>
              </label>

              <button
                type="button"
                className="btn-prep-auto-geo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '10px',
                  background: !isManual ? 'rgba(56, 189, 248, 0.16)' : 'rgba(30, 41, 59, 0.8)',
                  border: !isManual ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.18)',
                  color: !isManual ? '#38bdf8' : '#e2e8f0',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: !isManual ? '0 0 10px rgba(56, 189, 248, 0.2)' : 'none'
                }}
                onClick={async () => {
                  setIsDetecting(true);
                  try {
                    setManualCountryOverride(false);
                    setIsManual(false);
                    const res = await detectStudentCountry(true);
                    const country = getActiveCurriculumCountry(res.country);
                    setSelectedCountry(country);
                    setSelectedTrack(current => normalizeEducationTrackForCountry(country, current));
                  } catch {
                    /* ignore */
                  } finally {
                    setIsDetecting(false);
                  }
                }}
                title={isEn ? "Reset and detect country automatically from your location" : "إعادة الكشف التلقائي وضبط المنهج حسب موقعك الجغرافي"}
              >
                {isDetecting ? (isEn ? '⏳ Detecting...' : '⏳ جارٍ الكشف...') : (isEn ? '📍 Auto-Detect Location' : '📍 كشف موقعي تلقائياً')}
              </button>
            </div>

            <div className="prep-country-grid">
              {ACTIVE_CURRICULUM_COUNTRIES.map((cCode) => {
                const country = SUPPORTED_COUNTRIES[cCode];
                const isSelected = selectedCountry === cCode;
                return (
                  <button
                    key={cCode}
                    type="button"
                    className={`prep-country-btn ${isSelected ? 'country-selected' : ''}`}
                    onClick={() => {
                      setManualCountryOverride(true);
                      setIsManual(true);
                      setSelectedCountry(cCode);
                      setSelectedTrack(current => normalizeEducationTrackForCountry(cCode, current));
                    }}
                  >
                    <span className="pcountry-flag">{country.flag}</span>
                    <span className="pcountry-name">{isEn ? country.nameEn : country.nameAr}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Grade Selection */}
          <div className="prep-field-block">
            <label className="prep-field-label">
              <GraduationCap size={16} />
              <span>{isEn ? '2. Select Your Grade Level:' : '2. اختر الصف الدراسي:'}</span>
            </label>
            <div className="prep-grades-container">
              {/* Primary */}
              <div className="prep-grade-row">
                <span className="pgrade-label">{isEn ? 'Primary' : 'الابتدائي'}:</span>
                <div className="pgrade-btns">
                  {(['G1', 'G2', 'G3', 'G4', 'G5', 'G6'] as GradeLevel[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={`pgrade-btn ${selectedGrade === g ? 'pgrade-active' : ''}`}
                      onClick={() => handleSelectGrade(g)}
                    >
                      {g.replace('G', isEn ? 'Grade ' : 'صف ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Middle */}
              <div className="prep-grade-row">
                <span className="pgrade-label">{isEn ? 'Middle' : 'المتوسط'}:</span>
                <div className="pgrade-btns">
                  {(['G7', 'G8', 'G9'] as GradeLevel[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={`pgrade-btn ${selectedGrade === g ? 'pgrade-active' : ''}`}
                      onClick={() => handleSelectGrade(g)}
                    >
                      {g === 'G7' ? (isEn ? 'Grade 7' : 'أول متوسط') : g === 'G8' ? (isEn ? 'Grade 8' : 'ثاني متوسط') : (isEn ? 'Grade 9' : 'ثالث متوسط')}
                    </button>
                  ))}
                </div>
              </div>

              {/* High School */}
              <div className="prep-grade-row">
                <span className="pgrade-label">{isEn ? 'High School' : 'الثانوي'}:</span>
                <div className="pgrade-btns">
                  {(['G10', 'G11', 'G12'] as GradeLevel[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={`pgrade-btn ${selectedGrade === g ? 'pgrade-active' : ''}`}
                      onClick={() => handleSelectGrade(g)}
                    >
                      {g === 'G10' ? (isEn ? 'Grade 10' : 'أول ثانوي') : g === 'G11' ? (isEn ? 'Grade 11' : 'ثاني ثانوي') : (isEn ? 'Grade 12' : 'ثالث ثانوي')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isHigh && (
            <div className="prep-field-block">
              <label className="prep-field-label">
                <Layers size={16} />
                <span>{isEn ? '3. Select education track:' : '3. اختر المسار التعليمي:'}</span>
              </label>
              <select
                className="form-select"
                value={selectedTrack}
                onChange={(event) => {
                  const track = event.target.value as EducationTrack;
                  setSelectedTrack(track);
                  if (selectedCountry === 'EG' && selectedGrade === 'G12') {
                    if (!isEgyptG12SubjectAvailable(selectedSubject, track, normalizeEducationTypeForCountry(selectedCountry, profile.educationType))) {
                      setSelectedSubject(getEgyptG12Subjects(track)[0] ?? 'ARABIC_LIT');
                    }
                  } else if (selectedCountry === 'EG' && selectedGrade === 'G11') {
                    if (!isEgyptG11SubjectAvailable(selectedSubject, track, normalizeEducationTypeForCountry(selectedCountry, profile.educationType))) {
                      setSelectedSubject(getEgyptG11Subjects(track)[0] ?? 'ARABIC_LIT');
                    }
                  } else if (selectedCountry === 'SD' && selectedGrade === 'G12' &&
                      !isSudanPublicGrade12SubjectAvailable(
                        selectedSubject,
                        selectedCountry,
                        selectedGrade,
                        normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
                        track
                      )) {
                    setSelectedSubject(getSudanPublicGrade12Subjects(track)[0] ?? 'ARABIC_LIT');
                  }
                }}
              >
                {getAvailableTracksForCountryAndGrade(selectedCountry, selectedGrade).map((track) => (
                  <option key={track} value={track}>
                    {getTrackLabel(track, selectedCountry, isEn ? 'en' : 'ar')}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 4. Subject Grid Selection */}
          <div className="prep-field-block">
            <label className="prep-field-label">
              <BookOpen size={16} />
              <span>{isEn ? '4. Choose Starting Subject to Study:' : '4. اختر المادة المراد دراستها والبدء بها:'}</span>
            </label>
            <div className="prep-subjects-grid">
              {getAvailableSubjects().map((subj) => {
                const isSelected = selectedSubject === subj.id;
                const localizedTitle = getNationalSubjectLabel(
                  subj.id,
                  selectedCountry,
                  selectedGrade,
                  isEn ? 'en' : 'ar',
                  normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
                  selectedTrack
                ) || (isEn ? subj.nameEn : subj.nameAr);

                const subjVisual = getSubjectVisual(subj.id, selectedCountry, selectedGrade, selectedTrack);

                return (
                  <div
                    key={subj.id}
                    className={`prep-subject-box ${isSelected ? 'subject-box-active' : ''}`}
                    onClick={() => {
                      setSelectedSubject(subj.id);
                    }}
                  >
                    {/* Official Curriculum Subject Cover Visual */}
                    <div className="prep-subject-cover-wrap">
                      <img 
                        src={subjVisual.coverImage} 
                        alt={localizedTitle} 
                        className="prep-subject-cover-img"
                        loading="lazy"
                      />
                      <div className="prep-subject-cover-overlay" />
                      <div className="prep-subject-curriculum-badge">
                        <ShieldCheck size={12} className="text-emerald-400" />
                        <span>{isEn ? subjVisual.badgeEn : subjVisual.badgeAr}</span>
                      </div>
                    </div>

                    <div className="prep-subject-content">
                      <div className="prep-subject-head">
                        <div className="psubj-icon" style={{ color: subj.color, borderColor: `${subj.color}40`, background: `${subj.color}15` }}>
                          {subj.icon}
                        </div>
                        <div className="psubj-title-wrap">
                          <h4>{localizedTitle}</h4>
                          <span className="psubj-stage-pill">{isEn ? subjVisual.stageEn : subjVisual.stageAr}</span>
                        </div>
                        {isSelected ? (
                          <div className="psubj-check">
                            <CheckCircle2 size={22} className="text-emerald-400" />
                          </div>
                        ) : (
                          <span className="psubj-select-hint">{isEn ? 'Select' : 'اختيار'}</span>
                        )}
                      </div>

                      <p className="psubj-desc">{isEn ? subj.descEn : subj.descAr}</p>

                      <div className="prep-subject-topics-strip">
                        {(isEn ? subjVisual.topicsEn : subjVisual.topicsAr).slice(0, 3).map((topic, i) => (
                          <span key={i} className="prep-subject-topic-pill">
                            • {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Big Action Call To Action Bar */}
          <div className="prep-launch-bar">
            <div className="launch-summary">
              <span className="launch-summary-label">{isEn ? 'Ready to Start:' : 'مسار التعلم المحدد:'}</span>
              <div className="launch-summary-tags">
                <span className="ltag">{countryInfo.flag} {isEn ? countryInfo.nameEn : countryInfo.nameAr}</span>
                <span className="ltag">{selectedGrade.replace('G', isEn ? 'Grade ' : 'الصف ')}</span>
                <span className="ltag ltag-subject">{activeSubjectLocalized}</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-prep-launch"
              onClick={handleLaunchLearningHub}
            >
              <Rocket size={20} />
              <span>
                {isEn 
                  ? `Launch Lessons & Start ${activeSubjectLocalized} ➔` 
                  : `دخول منصة التعلم وبدء محاضرات ${activeSubjectLocalized} ➔`}
              </span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="prep-footer">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: 0 }}>
            {isEn
              ? '© AI Tutor - Adaptive Socratic Educational Platform. Official Curriculum Standards.'
              : 'منصة المعلم الذكي | منصة التعلم التكيفي المعززة بـ Gemini AI وفق المناهج التعليمية المعتمدة.'}
          </p>

        </div>
      </footer>
    </div>
  );
};
