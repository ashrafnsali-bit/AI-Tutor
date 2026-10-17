import React, { useEffect, useState } from 'react';
import type { CountryCode, EducationTrack, GradeLevel, StudentProfile, Subject } from '../types';
import {
  ACTIVE_CURRICULUM_COUNTRIES,
  SUPPORTED_COUNTRIES,
  TRACK_LABELS,
  getActiveCurriculumCountry,
  getSpecializationForEducationTrack,
  getNationalSubjectLabel,
  isSaudiPublicBusinessG11DigitalTechnologyAvailable,
  isSaudiPublicEnglishAvailable,
  isSaudiPublicG11BiologyAvailable,
  isSaudiPublicG11PhysicsAvailable,
  isSaudiPublicTajweedAvailable,
  isSaudiPublicQuranRecitationAvailable,
  isSaudiPublicG6VisualArtsAvailable,
  normalizeEducationTrackForCountry,
  normalizeEducationTypeForCountry
} from '../data/curriculumCountries';
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
import { setManualCountryOverride, isManualCountryOverride } from '../services/geoService';
import { 
  Sparkles, 
  Compass, 
  BookOpen, TestTube2, 
  Brain, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  Rocket, 
  Atom, 
  Calculator, 
  FlaskConical, 
  Dna, 
  Code2, 
  BookMarked, 
  Microscope, 
  GraduationCap,
  Globe2,
  X,
  Target,
  ShieldCheck,
  Award,
  Palette
} from 'lucide-react';

interface WelcomeOnboardingModalProps {
  isOpen: boolean;
  profile: StudentProfile;
  onFinish: (updatedProfile: StudentProfile) => void;
  onClose: () => void;
}

export const WelcomeOnboardingModal: React.FC<WelcomeOnboardingModalProps> = ({
  isOpen,
  profile,
  onFinish,
  onClose
}) => {
  const isEn = profile.language === 'en';
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Configuration state for Step 3
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    getActiveCurriculumCountry(profile.country)
  );
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(profile.gradeLevel || 'G10');
  const [selectedTrack, setSelectedTrack] = useState<EducationTrack>(
    normalizeEducationTrackForCountry(getActiveCurriculumCountry(profile.country), profile.educationTrack)
  );
  const [selectedSubject, setSelectedSubject] = useState<Subject>(profile.subject || 'PHYSICS');

  useEffect(() => {
    const educationType = normalizeEducationTypeForCountry(selectedCountry, profile.educationType);
    const invalidSudanGrade7Subject = selectedCountry === 'SD' &&
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
      !isSudanPublicGrade12SubjectAvailable(selectedSubject, selectedCountry, selectedGrade, educationType, selectedTrack);
    const invalidEgyptG10Subject =
      selectedCountry === 'EG' &&
      selectedGrade === 'G10' &&
      !((['ARABIC_LIT', 'ARABIC_LANG', 'ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN'].includes(selectedSubject) &&
        (educationType === 'PUBLIC' || educationType === 'PRIVATE')) ||
        isEgyptG10BookCourseAvailable(selectedSubject, educationType, selectedTrack));
    if (
      invalidSudanGrade7Subject ||
      invalidSudanGrade10Subject ||
      invalidSudanGrade11Subject ||
      invalidSudanGrade12Subject ||
      invalidEgyptG10Subject ||
      (selectedSubject === 'PHYSICS' &&
        selectedCountry === 'SA' &&
        selectedGrade === 'G11' &&
        !isSaudiPublicG11PhysicsAvailable(selectedCountry, selectedGrade, educationType, selectedTrack)) ||
      (selectedSubject === 'BIOLOGY' &&
        selectedCountry === 'SA' &&
        selectedGrade === 'G11' &&
        !isSaudiPublicG11BiologyAvailable(selectedCountry, selectedGrade, educationType, selectedTrack)) ||
      (selectedSubject === 'COMPUTER_SCIENCE' &&
        selectedCountry === 'SA' &&
        selectedGrade === 'G11' &&
        !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
          selectedCountry,
          selectedGrade,
          educationType,
          selectedTrack
        )) ||
      (selectedSubject === 'TAJWEED' &&
        !isSaudiPublicTajweedAvailable(selectedCountry, selectedGrade, educationType)) ||
      (selectedSubject === 'QURAN_RECITATION' &&
        !isSaudiPublicQuranRecitationAvailable(selectedCountry, selectedGrade, educationType)) ||
      (selectedSubject === 'VISUAL_ARTS' &&
        !isSaudiPublicG6VisualArtsAvailable(selectedCountry, selectedGrade, educationType) &&
        !isSudanPublicGrade4SubjectAvailable(selectedSubject, selectedCountry, selectedGrade, educationType, selectedTrack) &&
        !isSudanPublicGrade5SubjectAvailable(selectedSubject, selectedCountry, selectedGrade, educationType, selectedTrack) &&
        !isSudanPublicGrade6SubjectAvailable(selectedSubject, selectedCountry, selectedGrade, educationType, selectedTrack))
    ) {
      setSelectedSubject(selectedCountry === 'SD' && selectedGrade === 'G10'
        ? 'CHEMISTRY'
        : selectedCountry === 'SD' && selectedGrade === 'G11' ? 'BIOLOGY'
        : selectedCountry === 'SD' && selectedGrade === 'G12'
          ? getSudanPublicGrade12Subjects(selectedTrack)[0] ?? 'ARABIC_LIT'
        : ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade)
        ? 'PRIMARY_ARABIC'
        : selectedGrade === 'G7' || selectedGrade === 'G8' || selectedGrade === 'G9'
          ? 'ARABIC_LANG'
          : 'ARABIC_LIT');
    }
  }, [selectedCountry, selectedGrade, selectedSubject, selectedTrack, profile.educationType]);

  if (!isOpen) return null;

  // Determine stage category from grade
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(selectedGrade);
  const isHigh = ['G10', 'G11', 'G12'].includes(selectedGrade);

  // Available subjects based on stage
  const getAvailableSubjects = (): { id: Subject; nameAr: string; nameEn: string; descAr: string; descEn: string; icon: React.ReactNode; color: string }[] => {
    if (selectedCountry === 'EG' && selectedGrade === 'G11') {
      const isHumanities = selectedTrack === 'SHARIA_HUMANITIES';
      const commonCourses = [
        { id: 'ARABIC_LIT' as const, nameAr: 'اللغة العربية — الصف الثاني الثانوي', nameEn: 'Arabic Language — Secondary 2', descAr: 'القراءة والنصوص والبلاغة والأدب والنحو', descEn: 'Literature, rhetoric, reading, and grammar', icon: <BookMarked size={24} />, color: '#34d399' },
        { id: 'ENGLISH' as const, nameAr: 'اللغة الإنجليزية (لغة أولى) — الصف الثاني الثانوي', nameEn: 'English First Language — Secondary 2', descAr: 'كتاب وزارة التربية والتعليم الرسمية لغة أولى', descEn: 'Official Ministry textbook first language', icon: <BookOpen size={24} />, color: '#a78bfa' },
        { id: 'FRENCH' as const, nameAr: 'اللغة الفرنسية (لغة ثانية) — الصف الثاني الثانوي', nameEn: 'French Second Language — Secondary 2', descAr: 'مقرر اللغة الأجنبية الثانية المعتمد', descEn: 'Official second foreign language course', icon: <Globe2 size={24} />, color: '#60a5fa' },
        { id: 'GERMAN' as const, nameAr: 'اللغة الألمانية (لغة ثانية) — الصف الثاني الثانوي', nameEn: 'German Second Language — Secondary 2', descAr: 'مقرر اللغة الأجنبية الثانية المعتمد', descEn: 'Official second foreign language course', icon: <Globe2 size={24} />, color: '#60a5fa' },
        { id: 'ISLAMIC_STUDIES' as const, nameAr: 'التربية الدينية الإسلامية — الصف الثاني الثانوي', nameEn: 'Islamic Studies — Secondary 2', descAr: 'منهاج التربية الإسلامية المعتمد', descEn: 'Accredited Islamic education curriculum', icon: <Award size={24} />, color: '#fbbf24' }
      ];
      if (isHumanities) {
        return [
          ...commonCourses,
          { id: 'PHILOSOPHY' as const, nameAr: 'علم النفس والاجتماع — الشعبة الأدبية', nameEn: 'Psychology & Sociology — Literary Track', descAr: 'مبادئ علم النفس ومناهج البحث ومدخل علم الاجتماع', descEn: 'Psychology principles and introduction to sociology', icon: <Brain size={24} />, color: '#c084fc' },
          { id: 'MATH' as const, nameAr: 'الرياضيات العامة — الشعبة الأدبية', nameEn: 'General Mathematics — Literary Track', descAr: 'الجبر والتفاضل وحساب المثلثات لطلاب الأدبي', descEn: 'Algebra, calculus, and trigonometry for arts students', icon: <Calculator size={24} />, color: '#38bdf8' },
          { id: 'HISTORY' as const, nameAr: 'التاريخ — الشعبة الأدبية', nameEn: 'History — Literary Track', descAr: 'مصر والحضارة الإسلامية عبر العصور', descEn: 'Egypt and Islamic civilization throughout the ages', icon: <BookOpen size={24} />, color: '#f59e0b' },
          { id: 'GEOGRAPHY' as const, nameAr: 'الجغرافيا — الشعبة الأدبية', nameEn: 'Geography — Literary Track', descAr: 'تنمية الموارد البيئية والمائية والطاقة', descEn: 'Environmental, water, and energy development', icon: <Globe2 size={24} />, color: '#10b981' }
        ];
      }
      return [
        ...commonCourses,
        { id: 'PHYSICS' as const, nameAr: 'الفيزياء — الشعبة العلمية', nameEn: 'Physics — Scientific Track', descAr: 'الحركة الموجية والضوء وانكساره وخواص الموائع واللزوجة', descEn: 'Wave motion, light refraction/dispersion, and fluids', icon: <Atom size={24} />, color: '#38bdf8' },
        { id: 'CHEMISTRY' as const, nameAr: 'الكيمياء — الشعبة العلمية', nameEn: 'Chemistry — Scientific Track', descAr: 'بنية الذرة والجدول الدوري وتدرج خواص العناصر', descEn: 'Atomic structure, periodic table, and periodic trends', icon: <TestTube2 size={24} />, color: '#ec4899' },
        { id: 'MATH' as const, nameAr: 'الرياضيات البحتة — الشعبة العلمية', nameEn: 'Pure Mathematics — Scientific Track', descAr: 'الجبر والدوال والتفاضل وقاعدتا الجيب وجيب التمام', descEn: 'Algebra, functions, calculus, and sine/cosine laws', icon: <Calculator size={24} />, color: '#60a5fa' },
        { id: 'BIOLOGY' as const, nameAr: 'الأحياء — الشعبة العلمية', nameEn: 'Biology — Scientific Track', descAr: 'التغذية والهضم والنقل والتنفس الخلوي في الكائنات الحية', descEn: 'Nutrition, transport, and cellular respiration', icon: <Dna size={24} />, color: '#a3e635' }
      ];
    }
    if (selectedCountry === 'EG' && selectedGrade === 'G10') {
      const books: { id: Subject; nameAr: string; nameEn: string; descAr: string; descEn: string; icon: React.ReactNode; color: string }[] = [
        { id: 'ARABIC_LIT', nameAr: 'اللغة العربية — كتاب الصف الأول الثانوي، الفصل الأول', nameEn: 'Arabic Language — Secondary 1, Semester 1', descAr: 'مقرر كتاب الوزارة للفصل الدراسي الأول 2026–2027', descEn: 'Ministry textbook course for Semester 1, 2026–2027', icon: <BookMarked size={24} />, color: '#34d399' },
        { id: 'ENGLISH', nameAr: 'اللغة الإنجليزية — لغة ثانية، الصف الأول الثانوي', nameEn: 'English — Second Language, Secondary 1', descAr: 'كتاب وزارة التربية والتعليم المصرية، ست وحدات', descEn: 'Egyptian Ministry textbook, six units', icon: <BookOpen size={24} />, color: '#a78bfa' },
        { id: 'FRENCH', nameAr: 'الفرنسية لغة أولى — Champion 1 (دعم مدرسي)', nameEn: 'French First Language — Champion 1 (school support)', descAr: 'مقرر مساند تختاره المدرسة، وليس كتابًا وزاريًا موثقًا', descEn: 'School-selected support course, not a verified Ministry textbook', icon: <Globe2 size={24} />, color: '#60a5fa' },
        { id: 'GERMAN', nameAr: 'الألمانية لغة أجنبية ثانية — A1 (دعم مدرسي)', nameEn: 'German Second Foreign Language — A1 (school support)', descAr: 'مقرر مساند تختاره المدرسة، وليس كتابًا وزاريًا موثقًا', descEn: 'School-selected support course, not a verified Ministry textbook', icon: <Globe2 size={24} />, color: '#60a5fa' },
        { id: 'ITALIAN', nameAr: 'الإيطالية لغة أجنبية ثانية — A1 (دعم مدرسي)', nameEn: 'Italian Second Foreign Language — A1 (school support)', descAr: 'مقرر مساند تختاره المدرسة، وليس كتابًا وزاريًا موثقًا', descEn: 'School-selected support course, not a verified Ministry textbook', icon: <Globe2 size={24} />, color: '#60a5fa' },
        { id: 'MATH', nameAr: 'الرياضيات — كتاب الصف الأول الثانوي، الفصل الأول', nameEn: 'Mathematics — Secondary 1, Semester 1', descAr: 'الجبر والدوال والتشابه وحساب المثلثات وفق موضوعات الكتاب المرفق', descEn: 'Algebra, functions, similarity, and trigonometry from the supplied book', icon: <Calculator size={24} />, color: '#60a5fa' },
        { id: 'HISTORY', nameAr: 'التاريخ — كتاب الصف الأول الثانوي، الفصل الأول', nameEn: 'History — Secondary 1, Semester 1', descAr: 'مصر والعالم القديم وفق الكتاب الوزاري المرفق', descEn: 'Egypt and the ancient world, based on the supplied Ministry textbook', icon: <BookOpen size={24} />, color: '#f59e0b' },
        { id: 'GENERAL_SCIENCE', nameAr: 'العلوم المتكاملة — كتاب الصف الأول الثانوي، الفصل الأول', nameEn: 'Integrated Science — Secondary 1, Semester 1', descAr: 'النظام البيئي المائي والغلاف الجوي وفق الكتاب المرفق', descEn: 'Aquatic ecosystems and the atmosphere from the supplied book', icon: <Microscope size={24} />, color: '#38bdf8' },
        { id: 'PHILOSOPHY', nameAr: 'الفلسفة والمنطق — كتاب الصف الأول الثانوي، الفصل الأول', nameEn: 'Philosophy and Logic — Secondary 1, Semester 1', descAr: 'التفكير الإنساني والتفلسف ومبادئ المنطق والاستدلال', descEn: 'Human thought, philosophical inquiry, logic, and reasoning', icon: <Brain size={24} />, color: '#c084fc' },
        { id: 'ISLAMIC_STUDIES', nameAr: 'التربية الدينية الإسلامية — كتاب الصف الأول الثانوي', nameEn: 'Islamic Religious Education — Secondary 1', descAr: 'مقرر الكتاب الوزاري للفصلين الدراسيين', descEn: 'Ministry textbook course for both semesters', icon: <Award size={24} />, color: '#fbbf24' },
        { id: 'COMPUTER_SCIENCE', nameAr: 'تكنولوجيا المعلومات والاتصالات — النسخة الإنجليزية', nameEn: 'Information and Communication Technology — English edition', descAr: 'مقرر ICT من النسخة الإنجليزية للكتاب المرفق', descEn: 'ICT course from the supplied English-edition textbook', icon: <Code2 size={24} />, color: '#22c55e' }
      ];
      const educationType = normalizeEducationTypeForCountry(selectedCountry, profile.educationType);
      return books.filter((course) =>
        isEgyptG10BookCourseAvailable(course.id, educationType, selectedTrack) ||
        (['ARABIC_LIT', 'ENGLISH', 'FRENCH', 'GERMAN', 'ITALIAN'].includes(course.id) &&
          (educationType === 'PUBLIC' || educationType === 'PRIVATE'))
      );
    }
    if (selectedCountry === 'SD' && selectedGrade === 'G11') {
      return [{
        id: 'BIOLOGY' as const,
        nameAr: 'الأحياء',
        nameEn: 'Biology',
        descAr: 'التغذية والنقل والتنفس والإخراج والتنسيق في الكائنات الحية',
        descEn: 'Nutrition, transport, respiration, excretion, and coordination in living organisms',
        icon: <Dna size={24} />,
        color: '#a3e635'
      }].filter((course) => isSudanPublicGrade11SubjectAvailable(
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
          id: 'CHEMISTRY' as const,
          nameAr: 'الكيمياء',
          nameEn: 'Chemistry',
          descAr: 'التركيب الذري والروابط والمعادلات والتفاعلات والحساب الكيميائي',
          descEn: 'Atomic structure, bonds, equations, reactions, and chemical calculations',
          icon: <FlaskConical size={24} />,
          color: '#f472b6'
        },
        {
          id: 'GEOGRAPHY' as const,
          nameAr: 'الجغرافيا والدراسات البيئية',
          nameEn: 'Geography & Environmental Studies',
          descAr: 'الجغرافيا الطبيعية والمناخ والخرائط ونظم المعلومات الجغرافية',
          descEn: 'Physical geography, climate, maps, and geographic information systems',
          icon: <Globe2 size={24} />,
          color: '#38bdf8'
        },
        {
          id: 'HISTORY' as const,
          nameAr: 'التاريخ',
          nameEn: 'History',
          descAr: 'تاريخ السودان والإسلام وأفريقيا والتاريخ الإنساني',
          descEn: 'Sudanese, Islamic, African, and human history',
          icon: <BookOpen size={24} />,
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
        ARABIC_LIT: { descAr: 'المطالعة والأدب والقواعد والبلاغة والتعبير', descEn: 'Reading, literature, grammar, rhetoric, and writing', icon: <BookMarked size={24} />, color: '#34d399' },
        BIOLOGY: { descAr: 'التكاثر والوراثة والنظام البيئي', descEn: 'Reproduction, genetics, and ecosystems', icon: <Dna size={24} />, color: '#a3e635' },
        CHEMISTRY: { descAr: 'المشتقات العضوية والتحليل والطاقة والاتزان', descEn: 'Organic chemistry, analysis, energy, and equilibrium', icon: <FlaskConical size={24} />, color: '#f472b6' },
        COMPUTER_SCIENCE: { descAr: 'المنطق والعد الثنائي وPascal والخوارزميات', descEn: 'Logic, binary, Pascal, and algorithms', icon: <Code2 size={24} />, color: '#c084fc' },
        ENGLISH: { descAr: 'القراءة والفهم والمهارات اللغوية', descEn: 'Reading, comprehension, and language skills', icon: <BookOpen size={24} />, color: '#a78bfa' },
        FRENCH: { descAr: 'التواصل والقراءة والكتابة باللغة الفرنسية', descEn: 'French communication, reading, and writing', icon: <Globe2 size={24} />, color: '#60a5fa' },
        GERMAN: { descAr: 'التواصل والقراءة والكتابة باللغة الألمانية', descEn: 'German communication, reading, and writing', icon: <Globe2 size={24} />, color: '#60a5fa' },
        ITALIAN: { descAr: 'التواصل والقراءة والكتابة باللغة الإيطالية', descEn: 'Italian communication, reading, and writing', icon: <Globe2 size={24} />, color: '#60a5fa' },
        GEOGRAPHY: { descAr: 'الجغرافيا الاقتصادية والبيئة والتنمية', descEn: 'Economic geography, environment, and development', icon: <Globe2 size={24} />, color: '#38bdf8' },
        HISTORY: { descAr: 'تاريخ السودان والعالم العربي', descEn: 'Sudanese and Arab history', icon: <BookOpen size={24} />, color: '#f59e0b' },
        ISLAMIC_STUDIES: { descAr: 'التفسير والفقه والعقيدة والتجويد', descEn: 'Tafsir, jurisprudence, creed, and tajweed', icon: <Award size={24} />, color: '#fbbf24' },
        MATH: { descAr: selectedTrack === 'SCIENCE_MATH' ? 'الدوال والتفاضل والتكامل والرياضيات المتخصصة' : 'الدوال والتفاضل والتكامل والإحصاء والاحتمالات', descEn: selectedTrack === 'SCIENCE_MATH' ? 'Functions, calculus, and specialized mathematics' : 'Functions, calculus, statistics, and probability', icon: <Calculator size={24} />, color: '#60a5fa' },
        TECHNICAL_EDUCATION: { descAr: 'موضوعات العلوم الهندسية وتطبيقاتها', descEn: 'Engineering science topics and applications', icon: <Atom size={24} />, color: '#22c55e' }
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
          ...(meta[id] ?? { descAr: 'محاور الكتاب المقرر', descEn: 'Textbook course topics', icon: <BookOpen size={24} />, color: '#60a5fa' })
        }));
    }
    if (isPrimary) {
      return [
        {
          id: 'PRIMARY_MATH',
          nameAr: 'الرياضيات الابتدائية',
          nameEn: 'Primary Mathematics',
          descAr: 'الأعداد، العمليات الحسابية، والكسور',
          descEn: 'Numbers, operations & basic fractions',
          icon: <Calculator size={24} />,
          color: '#38bdf8'
        },
        {
          id: 'PRIMARY_ARABIC',
          nameAr: 'لغتي الجميلة',
          nameEn: 'Arabic Language',
          descAr: 'القراءة، الإملاء، والقواعد الأساسية',
          descEn: 'Reading, spelling and foundation grammar',
          icon: <BookMarked size={24} />,
          color: '#34d399'
        },
        {
          id: 'PRIMARY_SCIENCE',
          nameAr: 'العلوم المبسطة',
          nameEn: 'Primary Science',
          descAr: 'استكشاف الكائنات الحية والبيئة والمادة',
          descEn: 'Living organisms, environment & matter',
          icon: <Microscope size={24} />,
          color: '#a78bfa'
        },
        {
          id: 'ISLAMIC_STUDIES',
          nameAr: 'الدراسات الإسلامية',
          nameEn: 'Islamic Studies',
          descAr: 'القرآن الكريم، العقيدة، والفقه المبسط',
          descEn: 'Quran, values and Islamic foundation',
          icon: <Award size={24} />,
          color: '#fbbf24'
        },
        ...(isEnglishCourseAvailable(selectedCountry, selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'ENGLISH' as const,
          nameAr: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'ar', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          nameEn: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'en', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          descAr: selectedCountry === 'EG' ? 'منهج Connect المعتمد - محادثة وقراءة واستماع وكتابة' : 'الاستماع والتحدث والقراءة والكتابة',
          descEn: selectedCountry === 'EG' ? 'Official Connect curriculum - speaking, reading & writing' : 'Listening, speaking, reading and writing',
          icon: <BookOpen size={24} />,
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
          icon: <Code2 size={24} />,
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
          icon: <Globe2 size={24} />,
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
          icon: <BookOpen size={24} />,
          color: '#f59e0b'
        }] : []),
        ...(isSaudiPublicTajweedAvailable(
          selectedCountry,
          selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        ) ? [{
          id: 'TAJWEED' as const,
          nameAr: 'التجويد (إضافة اختيارية — كتاب مدارس التحفيظ)',
          nameEn: 'Tajweed (Optional addition — Memorization Schools book)',
          descAr: 'مسار إضافي مستند إلى كتاب مدارس تحفيظ القرآن الكريم، منفصل عن مادة المنهج العام.',
          descEn: 'Additional course based on the Qur’an Memorization Schools textbook, separate from the general curriculum.',
          icon: <BookOpen size={24} />,
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
          icon: <BookOpen size={24} />,
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
          icon: <Palette size={24} />,
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
          descAr: 'الطاقة، المادة، والظواهر الطبيعية',
          descEn: 'Energy, physical forces & life systems',
          icon: <Microscope size={24} />,
          color: '#38bdf8'
        },
        {
          id: 'MATH',
          nameAr: 'الرياضيات المتوسطة',
          nameEn: 'Middle Mathematics',
          descAr: 'الجبر، المعادلات، والمفاهيم الهندسية',
          descEn: 'Algebra, equations & geometry',
          icon: <Calculator size={24} />,
          color: '#60a5fa'
        },
        {
          id: 'ARABIC_LANG',
          nameAr: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'اللغة العربية' : 'لغتي الخالدة',
          nameEn: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'Arabic Language' : 'Arabic Language & Grammar',
          descAr: 'النحو، الصرف، والتعبير البلاغي',
          descEn: 'Grammar, morphology & expression',
          icon: <BookMarked size={24} />,
          color: '#34d399'
        },
        {
          id: 'COMPUTER_SCIENCE',
          nameAr: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'تكنولوجيا المعلومات والاتصالات' : 'التقنية والحاسب الآلي',
          nameEn: selectedCountry === 'SD' && ['G7', 'G8'].includes(selectedGrade) ? 'Information and Communication Technology' : 'Computer Science & Tech',
          descAr: 'أساسيات البرمجة، والمنطق الرقمي',
          descEn: 'Algorithms, logic & digital skills',
          icon: <Code2 size={24} />,
          color: '#c084fc'
        },
        ...(isEnglishCourseAvailable(selectedCountry, selectedGrade, normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'ENGLISH' as const,
          nameAr: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'ar', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          nameEn: getNationalSubjectLabel('ENGLISH', selectedCountry, selectedGrade, 'en', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack),
          descAr: selectedCountry === 'EG' ? 'منهج Prep Connect - لغة وقواعد وكتابة متقدمة' : selectedCountry === 'SD' ? `ثماني وحدات في مهارات اللغة والتواصل (SMILE Book ${selectedGrade === 'G8' ? '8' : '7'})` : 'مهارات اللغة الإنجليزية والتواصل',
          descEn: 'Eight units in language and communication skills',
          icon: <BookOpen size={24} />,
          color: '#a78bfa'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('ISLAMIC_STUDIES', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'ISLAMIC_STUDIES' as const,
          nameAr: 'التربية الإسلامية',
          nameEn: 'Islamic Studies',
          descAr: 'القرآن والتجويد والحديث والعقيدة والفقه والسيرة',
          descEn: 'Quran, tajweed, hadith, creed, jurisprudence, and biography',
          icon: <Award size={24} />,
          color: '#fbbf24'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('GEOGRAPHY', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'GEOGRAPHY' as const,
          nameAr: 'الجغرافيا',
          nameEn: 'Geography',
          descAr: selectedGrade === 'G8' ? 'دراسة قارات أمريكا الشمالية والجنوبية وأستراليا' : 'دراسة قارات إفريقيا وآسيا وأوروبا',
          descEn: selectedGrade === 'G8' ? 'Study of North America, South America, and Australia' : 'Study of Africa, Asia, and Europe',
          icon: <Globe2 size={24} />,
          color: '#38bdf8'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('HISTORY', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'HISTORY' as const,
          nameAr: 'التاريخ',
          nameEn: 'History',
          descAr: selectedGrade === 'G8' ? 'تاريخ السودان والدولة الأموية وإفريقيا وأوروبا' : 'تاريخ السودان والدولة الإسلامية وإفريقيا وأوروبا القديمة',
          descEn: selectedGrade === 'G8' ? 'Sudanese, Umayyad, African, and European history' : 'Sudanese, Islamic, African, and ancient European history',
          icon: <BookOpen size={24} />,
          color: '#f59e0b'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('NATIONAL_EDUCATION', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'NATIONAL_EDUCATION' as const,
          nameAr: 'التربية الوطنية',
          nameEn: 'National Education',
          descAr: 'الوطن والوطنية والسودان والمجتمع والدولة',
          descEn: 'Homeland, citizenship, Sudan, society, and the state',
          icon: <Award size={24} />,
          color: '#fb923c'
        }] : []),
        ...(isSudanPublicMiddleSubjectAvailable('TECHNICAL_EDUCATION', selectedCountry, selectedGrade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) ? [{
          id: 'TECHNICAL_EDUCATION' as const,
          nameAr: 'أساسيات التربية التقنية',
          nameEn: 'Foundations of Technical Education',
          descAr: 'تطبيقات هندسية وزراعية وفندقية وتجارية',
          descEn: 'Engineering, agriculture, hospitality, and commerce',
          icon: <Code2 size={24} />,
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
        descAr: 'الاستماع، المحادثة، القراءة، الكتابة والقواعد',
        descEn: 'Listening, speaking, reading, writing, and grammar',
        icon: <BookOpen size={24} />,
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
        descAr: 'الميكانيكا، الكهرومغناطيسية، والضوء والجسيمات',
        descEn: 'Mechanics, electromagnetism & modern physics',
        icon: <Atom size={24} />,
        color: '#38bdf8'
      }]),
      {
        id: 'MATH' as const,
        nameAr: 'الرياضيات المتقدمة',
        nameEn: 'Advanced Mathematics',
        descAr: 'التفاضل والتكامل، الدوال، وحساب المثلثات',
        descEn: 'Calculus, functions & trigonometry',
        icon: <Calculator size={24} />,
        color: '#60a5fa'
      },
      {
        id: 'CHEMISTRY' as const,
        nameAr: 'الكيمياء',
        nameEn: 'Chemistry',
        descAr: 'الروابط الكيميائية، التفاعلات، والحرارة الذرية',
        descEn: 'Chemical bonds, reactions & thermochemistry',
        icon: <FlaskConical size={24} />,
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
        descAr: 'الوراثة الجزيئية، الخلية، ووظائف الأعضاء',
        descEn: 'Genetics, cell biology & physiology',
        icon: <Dna size={24} />,
        color: '#34d399'
      }]),
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
            icon: <Code2 size={24} />,
            color: '#c084fc'
          }] : []
        : [{
          id: 'COMPUTER_SCIENCE' as const,
          nameAr: 'علوم الحاسب وهياكل البيانات',
          nameEn: 'Computer Science & STEM',
          descAr: 'الخوارزميات، البرمجة، وبنى البيانات المتقدمة',
          descEn: 'Data structures, Python & algorithms',
          icon: <Code2 size={24} />,
          color: '#c084fc'
        }]),
      {
        id: 'ARABIC_LIT' as const,
        nameAr: 'الأدب والدراسات اللغوية',
        nameEn: 'Arabic Literature & Linguistics',
        descAr: 'البلاغة، النقد، وتاريخ الأدب العربي',
        descEn: 'Rhetoric, literature history & linguistics',
        icon: <BookMarked size={24} />,
        color: '#fbbf24'
      }
    ];
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
      if (selectedCountry === 'SD' && grade === 'G12') {
        const available = getSudanPublicGrade12Subjects(selectedTrack);
        if (!available.includes(selectedSubject)) setSelectedSubject(available[0] ?? 'ARABIC_LIT');
        return;
      }
      if (['PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES', 'TAJWEED', 'QURAN_RECITATION', 'VISUAL_ARTS', 'ARABIC_LANG', 'GENERAL_SCIENCE'].includes(selectedSubject)) {
        setSelectedSubject('PHYSICS');
      }
    }
    if (selectedSubject === 'ENGLISH' &&
        !(selectedCountry === 'EG' && selectedGrade === 'G10') &&
        !isSudanPublicGrade12SubjectAvailable(
          selectedSubject,
          selectedCountry,
          grade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          selectedTrack
        ) &&
        !isSaudiPublicEnglishAvailable(
          selectedCountry,
          grade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType)
        ) &&
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
        ) &&
        !isSudanPublicMiddleSubjectAvailable(
          selectedSubject,
          selectedCountry,
          grade,
          normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
          'GENERAL'
        )) {
      setSelectedSubject(inPrimary ? 'PRIMARY_MATH' : inMiddle ? 'GENERAL_SCIENCE' : 'PHYSICS');
    }
  };

  const handleStartLearning = () => {
    const isPrim = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade);
    const isMid = ['G7', 'G8', 'G9'].includes(selectedGrade);

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

    const educationType = normalizeEducationTypeForCountry(selectedCountry, profile.educationType);
    const englishCourseAvailable = isSaudiPublicEnglishAvailable(
      selectedCountry,
      selectedGrade,
      educationType
    ) || isSudanPublicGrade4SubjectAvailable(
      'ENGLISH',
      selectedCountry,
      selectedGrade,
      educationType,
      selectedTrack
    ) || isSudanPublicGrade5SubjectAvailable(
      'ENGLISH',
      selectedCountry,
      selectedGrade,
      educationType,
      selectedTrack
    ) || isSudanPublicGrade6SubjectAvailable(
      'ENGLISH',
      selectedCountry,
      selectedGrade,
      educationType,
      selectedTrack
    ) || isSudanPublicMiddleSubjectAvailable(
      'ENGLISH',
      selectedCountry,
      selectedGrade,
      educationType,
      selectedTrack
    ) || isSudanPublicGrade12SubjectAvailable(
      'ENGLISH',
      selectedCountry,
      selectedGrade,
      educationType,
      selectedTrack
    ) || (selectedCountry === 'EG' && selectedGrade === 'G10' &&
      (educationType === 'PUBLIC' || educationType === 'PRIVATE'));
    const updated: StudentProfile = {
      ...profile,
      country: selectedCountry,
      educationType,
      gradeLevel: selectedGrade,
      educationTrack: selectedTrack,
      specialization: (isPrim || isMid) ? 'GENERAL' : getSpecializationForEducationTrack(selectedTrack),
      subject: selectedSubject === 'ENGLISH' && !englishCourseAvailable
        ? isPrim ? 'PRIMARY_MATH' : isMid ? 'GENERAL_SCIENCE' : 'PHYSICS'
        : selectedSubject === 'PHYSICS' && selectedCountry === 'SA' && selectedGrade === 'G11' &&
          !isSaudiPublicG11PhysicsAvailable(selectedCountry, selectedGrade, educationType, selectedTrack)
        ? 'ARABIC_LIT'
        : selectedSubject === 'BIOLOGY' && selectedCountry === 'SA' && selectedGrade === 'G11' &&
          !isSaudiPublicG11BiologyAvailable(selectedCountry, selectedGrade, educationType, selectedTrack)
        ? 'ARABIC_LIT'
        : selectedSubject === 'COMPUTER_SCIENCE' && selectedCountry === 'SA' && selectedGrade === 'G11' &&
          !isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            selectedCountry,
            selectedGrade,
            educationType,
            selectedTrack
          )
        ? 'ARABIC_LIT'
          : selectedSubject === 'TAJWEED' &&
            !isSaudiPublicTajweedAvailable(selectedCountry, selectedGrade, educationType)
          ? isPrim ? 'PRIMARY_ARABIC' : 'ARABIC_LIT'
          : selectedSubject === 'QURAN_RECITATION' &&
            !isSaudiPublicQuranRecitationAvailable(selectedCountry, selectedGrade, educationType)
          ? isPrim ? 'PRIMARY_ARABIC' : 'ARABIC_LIT'
          : selectedSubject === 'VISUAL_ARTS' &&
            !isSaudiPublicG6VisualArtsAvailable(selectedCountry, selectedGrade, educationType) &&
            !isSudanPublicGrade4SubjectAvailable(selectedSubject, selectedCountry, selectedGrade, educationType, selectedTrack) &&
            !isSudanPublicGrade5SubjectAvailable(selectedSubject, selectedCountry, selectedGrade, educationType, selectedTrack)
          ? isPrim ? 'PRIMARY_ARABIC' : 'ARABIC_LIT'
          : selectedSubject,
      age: defaultAge,
      isAutoDetectedCountry: !isManualCountryOverride()
    };

    onFinish(updated);
  };

  return (
    <div className="modal-backdrop-blur" onClick={onClose}>
      <div 
        className="onboarding-modal-container"
        onClick={(e) => e.stopPropagation()}
        dir={isEn ? 'ltr' : 'rtl'}
      >
        {/* Header Bar */}
        <div className="onboarding-modal-header">
          <div className="onboarding-header-brand">
            <div className="onboarding-brand-icon-wrap">
              <Sparkles size={20} className="sparkle-pulse" />
            </div>
            <div>
              <span className="onboarding-brand-badge">
                {isEn ? 'Welcome to AI Tutor' : 'مرحباً بك في منصة المعلم الذكي'}
              </span>
              <h2 className="onboarding-modal-title">
                {currentStep === 1 && (isEn ? 'Interactive AI Learning Overview' : 'دليل المنصة ونظام التعلم التكيفي')}
                {currentStep === 2 && (isEn ? 'Educational Roadmap & Paths' : 'خريطة المراحل التعليمية وأنماط التعلم')}
                {currentStep === 3 && (isEn ? 'Select Your Track & Starting Subject' : 'تحديد المرحلة والمادة للبدء فوراً')}
              </h2>
            </div>
          </div>
          <button 
            type="button" 
            className="onboarding-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Progress Pills */}
        <div className="onboarding-steps-indicator">
          <button
            type="button"
            className={`step-pill ${currentStep === 1 ? 'step-active' : ''} ${currentStep > 1 ? 'step-completed' : ''}`}
            onClick={() => setCurrentStep(1)}
          >
            <span className="step-num">1</span>
            <span className="step-label">{isEn ? '1. About Platform' : '1. تعريف المنصة'}</span>
          </button>

          <div className={`step-connector ${currentStep >= 2 ? 'connector-active' : ''}`} />

          <button
            type="button"
            className={`step-pill ${currentStep === 2 ? 'step-active' : ''} ${currentStep > 2 ? 'step-completed' : ''}`}
            onClick={() => setCurrentStep(2)}
          >
            <span className="step-num">2</span>
            <span className="step-label">{isEn ? '2. Stages Roadmap' : '2. خريطة المراحل'}</span>
          </button>

          <div className={`step-connector ${currentStep === 3 ? 'connector-active' : ''}`} />

          <button
            type="button"
            className={`step-pill ${currentStep === 3 ? 'step-active' : ''}`}
            onClick={() => setCurrentStep(3)}
          >
            <span className="step-num">3</span>
            <span className="step-label">{isEn ? '3. Choose Subject' : '3. اختيار المادة'}</span>
          </button>
        </div>

        {/* Step 1: About the Platform & AI Tutor */}
        {currentStep === 1 && (
          <div className="onboarding-step-body animate-fade-in">
            <div className="onboarding-hero-banner">
              <div className="hero-banner-content">
                <span className="hero-kicker">
                  <Brain size={16} />
                  {isEn ? 'Next-Gen Adaptive Learning' : 'الجيل القادم من التعليم التكيفي المعزز بـ Gemini'}
                </span>
                <h3 className="hero-headline">
                  {isEn
                    ? 'Your Personal 1-on-1 AI Tutor for Arab & International Curricula'
                    : 'معلمك الذكي الخاص 1-on-1 لتفوق دراسي غير مسبوق في المناهج المعتمدة'}
                </h3>
                <p className="hero-desc">
                  {isEn
                    ? 'AI Tutor adapts dynamically to your learning pace. It guides your critical thinking step-by-step using the Socratic method, verifies concept mastery with gating assessments, and renders rich scientific diagrams.'
                    : 'صُممت المنصة لتمنح كل طالب تجربة تعليمية مخصصة بالكامل؛ حيث يشرح الذكاء الاصطناعي المفاهيم بأسلوب سقراطي تفاعلي مع رسوم بيانية ونماذج تطبيقية محلولة واختبارات إتقان تضمن استيعابك الكامل.'}
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="onboarding-features-grid">
              <div className="feature-card">
                <div className="feature-icon-box box-violet">
                  <Brain size={22} />
                </div>
                <div className="feature-info">
                  <h4>{isEn ? 'Socratic AI Tutor' : 'معلم سقراطي تفاعلي'}</h4>
                  <p>
                    {isEn
                      ? 'Asks guiding questions to stimulate deep thinking instead of spoon-feeding answers.'
                      : 'يحاورك ويوجهك بالأسئلة التدريجية لتكتشف الحل بنفسك وترسخ الفهم الحقيقي دون تلقين.'}
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box box-sky">
                  <BookOpen size={22} />
                </div>
                <div className="feature-info">
                  <h4>{isEn ? '4 Solved Models Per Lesson' : '4 نماذج وتدريبات محلولة'}</h4>
                  <p>
                    {isEn
                      ? 'Every topic includes 4 complete curriculum-aligned solved exercises with step-by-step math.'
                      : 'كل درس يحتوي على 4 مسائل وتطبيقات نموذجية مشروحة خطوة بخطوة وفق المنهج الرسمي.'}
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box box-pink">
                  <Layers size={22} />
                </div>
                <div className="feature-info">
                  <h4>{isEn ? 'Scientific Diagrams & Visuals' : 'مخططات ورسوم علمية دقيقة'}</h4>
                  <p>
                    {isEn
                      ? 'Interactive SVG diagrams and dynamic vectors to visualize complex scientific concepts.'
                      : 'رسوم توضيحية ومخططات بيانية تفاعلية تجعل استيعاب القوانين والظواهر سهلاً وممتعاً.'}
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-box box-emerald">
                  <ShieldCheck size={22} />
                </div>
                <div className="feature-info">
                  <h4>{isEn ? 'Mastery Gating Assessments' : 'بوابات تقييم الإتقان'}</h4>
                  <p>
                    {isEn
                      ? 'Unlock subsequent lectures only after demonstrating true conceptual mastery.'
                      : 'اختبارات تقييم ذكية تفتح لك المحاضرات التالية بمجرد إتقان المفهوم مع منح نقاط تميز.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Educational Stages & Tracks Roadmap */}
        {currentStep === 2 && (
          <div className="onboarding-step-body animate-fade-in">
            <div className="roadmap-intro-header">
              <span className="roadmap-badge">
                <Compass size={16} />
                {isEn ? 'Structured Educational Pathway' : 'خريطة المسارات التعليمية المعتمدة'}
              </span>
              <h3>
                {isEn 
                  ? 'Choose how the curriculum aligns with your educational level' 
                  : 'تعرف على تسلسل المراحل التعليمية وكيف يتكيف المنهج مع مستواك'}
              </h3>
              <p>
                {isEn
                  ? 'Click any stage card below to pre-select it and explore its learning mode:'
                  : 'اضغط على أي مرحلة لاستكشاف تفاصيلها واختيارها فوراً:'}
              </p>
            </div>

            {/* Interactive Stage Pathway */}
            <div className="stages-pathway-container">
              {/* Stage 1: Primary */}
              <div 
                className={`stage-pathway-card ${isPrimary ? 'stage-card-active' : ''}`}
                onClick={() => handleSelectGrade('G4')}
              >
                <div className="stage-top-meta">
                  <span className="stage-badge stage-badge-emerald">
                    {isEn ? 'Elementary School' : 'المرحلة الابتدائية'}
                  </span>
                  <span className="stage-ages">{isEn ? 'Ages 6 - 12' : 'الأعمار 6 - 12 سنة'}</span>
                </div>
                <h4 className="stage-title">{isEn ? 'Grades 1 – 6 (Foundation)' : 'الصفوف (1 - 6) التأسيس المعرفي'}</h4>
                <p className="stage-desc">
                  {isEn
                    ? 'Interactive foundation in Arabic language, primary arithmetic, basic science exploration, and moral values.'
                    : 'بناء المهارات الأساسية في القراءة، الحساب، واستكشاف الظواهر الطبيعية بأسلوب مبسط وشيق.'}
                </p>
                <div className="stage-subjects-tags">
                  <span className="stage-tag">📐 رياضيات</span>
                  <span className="stage-tag">📖 لغتي الجميلة</span>
                  <span className="stage-tag">🔬 علوم</span>
                  <span className="stage-tag">🕌 دراسات إسلامية</span>
                </div>
                {isPrimary && (
                  <div className="stage-active-indicator">
                    <CheckCircle2 size={16} />
                    <span>{isEn ? 'Selected for setup' : 'تم تحديدها للبدء'}</span>
                  </div>
                )}
              </div>

              {/* Stage 2: Middle */}
              <div 
                className={`stage-pathway-card ${isMiddle ? 'stage-card-active' : ''}`}
                onClick={() => handleSelectGrade('G8')}
              >
                <div className="stage-top-meta">
                  <span className="stage-badge stage-badge-sky">
                    {isEn ? 'Middle / Intermediate' : 'المرحلة المتوسطة (الإعدادية)'}
                  </span>
                  <span className="stage-ages">{isEn ? 'Ages 13 - 15' : 'الأعمار 13 - 15 سنة'}</span>
                </div>
                <h4 className="stage-title">{isEn ? 'Grades 7 – 9 (Core Sciences)' : 'الصفوف (7 - 9) التفكير المنطقي'}</h4>
                <p className="stage-desc">
                  {isEn
                    ? 'Strengthening logical reasoning, algebraic foundations, unified general science, and computational thinking.'
                    : 'تعميق الاستيعاب العلمي، المعادلات الرياضية، النحو المتقدم، ومقدمة في البرمجة والتقنية الرقمية.'}
                </p>
                <div className="stage-subjects-tags">
                  <span className="stage-tag">🔬 علوم عامة</span>
                  <span className="stage-tag">📐 رياضيات</span>
                  <span className="stage-tag">📖 لغتي الخالدة</span>
                  <span className="stage-tag">💻 تقنية وحاسب</span>
                </div>
                {isMiddle && (
                  <div className="stage-active-indicator">
                    <CheckCircle2 size={16} />
                    <span>{isEn ? 'Selected for setup' : 'تم تحديدها للبدء'}</span>
                  </div>
                )}
              </div>

              {/* Stage 3: High / STEM */}
              <div 
                className={`stage-pathway-card ${isHigh ? 'stage-card-active' : ''}`}
                onClick={() => handleSelectGrade('G10')}
              >
                <div className="stage-top-meta">
                  <span className="stage-badge stage-badge-purple">
                    {isEn ? 'High School & STEM' : 'المرحلة الثانوية والمسار العلمي'}
                  </span>
                  <span className="stage-ages">{isEn ? 'Ages 16 - 18+' : 'الأعمار 16 - 18 سنة'}</span>
                </div>
                <h4 className="stage-title">{isEn ? 'Grades 10 – 12 (Specialized STEM)' : 'الصفوف (10 - 12) التخصص الدقيق'}</h4>
                <p className="stage-desc">
                  {isEn
                    ? 'Deep specialization in Physics, Advanced Math, Chemistry, Biology, Data Structures, and Computer Science.'
                    : 'تخصص علمي مكثف في قوانين الفيزياء، التفاضل والتكامل، التفاعلات الكيميائية، الوراثة، وهياكل البيانات.'}
                </p>
                <div className="stage-subjects-tags">
                  <span className="stage-tag">⚡ فيزياء</span>
                  <span className="stage-tag">📐 رياضيات متقدمة</span>
                  <span className="stage-tag">🧪 كيمياء</span>
                  <span className="stage-tag">🧬 أحياء</span>
                  <span className="stage-tag">💻 علوم حاسب</span>
                </div>
                {isHigh && (
                  <div className="stage-active-indicator">
                    <CheckCircle2 size={16} />
                    <span>{isEn ? 'Selected for setup' : 'تم تحديدها للبدء'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Selection & Launch */}
        {currentStep === 3 && (
          <div className="onboarding-step-body animate-fade-in">
            {/* Country & National Curriculum Selection */}
            <div className="onboarding-config-section">
              <label className="config-section-label">
                <Globe2 size={16} />
                <span>{isEn ? 'National Curriculum & Country:' : 'الدولة والمنهج الوطني المعتمد:'}</span>
              </label>
              <div className="country-chips-scroll">
                {ACTIVE_CURRICULUM_COUNTRIES.map((cCode) => {
                  const country = SUPPORTED_COUNTRIES[cCode];
                  const isSelected = selectedCountry === cCode;
                  return (
                    <button
                      key={cCode}
                      type="button"
                      className={`country-chip-btn ${isSelected ? 'country-chip-active' : ''}`}
                      onClick={() => {
                        setManualCountryOverride(true);
                        setSelectedCountry(cCode);
                        setSelectedTrack(current => normalizeEducationTrackForCountry(cCode, current));
                        const educationType = normalizeEducationTypeForCountry(cCode, profile.educationType);
                        if (selectedSubject === 'ENGLISH' &&
                            !isSaudiPublicEnglishAvailable(cCode, selectedGrade, educationType) &&
                            !isSudanPublicGrade4SubjectAvailable('ENGLISH', cCode, selectedGrade, educationType, selectedTrack) &&
                            !isSudanPublicGrade5SubjectAvailable('ENGLISH', cCode, selectedGrade, educationType, selectedTrack) &&
                            !isSudanPublicGrade6SubjectAvailable('ENGLISH', cCode, selectedGrade, educationType, selectedTrack) &&
                            !isSudanPublicMiddleSubjectAvailable('ENGLISH', cCode, selectedGrade, educationType, selectedTrack)) {
                          setSelectedSubject(isPrimary ? 'PRIMARY_MATH' : isMiddle ? 'GENERAL_SCIENCE' : 'PHYSICS');
                        }
                      }}
                    >
                      <span className="chip-flag">{country.flag}</span>
                      <span className="chip-name">{isEn ? country.nameEn : country.nameAr}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grade Selection */}
            <div className="onboarding-config-section">
              <label className="config-section-label">
                <GraduationCap size={16} />
                <span>{isEn ? 'Select Educational Grade:' : 'اختر الصف الدراسي:'}</span>
              </label>
              <div className="grade-selector-group">
                <div className="grade-stage-subgroup">
                  <span className="subgroup-title">{isEn ? 'Primary' : 'الابتدائي'}</span>
                  <div className="grade-buttons-row">
                    {(['G1', 'G2', 'G3', 'G4', 'G5', 'G6'] as GradeLevel[]).map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`grade-pill-btn ${selectedGrade === g ? 'grade-pill-active' : ''}`}
                        onClick={() => handleSelectGrade(g)}
                      >
                        {g.replace('G', isEn ? 'Grade ' : 'صف ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grade-stage-subgroup">
                  <span className="subgroup-title">{isEn ? 'Middle' : 'المتوسط'}</span>
                  <div className="grade-buttons-row">
                    {(['G7', 'G8', 'G9'] as GradeLevel[]).map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`grade-pill-btn ${selectedGrade === g ? 'grade-pill-active' : ''}`}
                        onClick={() => handleSelectGrade(g)}
                      >
                        {g === 'G7' ? (isEn ? 'Grade 7' : 'أول متوسط') : g === 'G8' ? (isEn ? 'Grade 8' : 'ثاني متوسط') : (isEn ? 'Grade 9' : 'ثالث متوسط')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grade-stage-subgroup">
                  <span className="subgroup-title">{isEn ? 'High School' : 'الثانوي'}</span>
                  <div className="grade-buttons-row">
                    {(['G10', 'G11', 'G12'] as GradeLevel[]).map((g) => (
                      <button
                        key={g}
                        type="button"
                        className={`grade-pill-btn ${selectedGrade === g ? 'grade-pill-active' : ''}`}
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
              <div className="onboarding-config-section">
                <label className="config-section-label">
                  <Layers size={16} />
                  <span>{isEn ? 'Select education track:' : 'اختر المسار التعليمي:'}</span>
                </label>
                <select
                  className="form-select"
                  value={selectedTrack}
                  onChange={(event) => {
                    const track = event.target.value as EducationTrack;
                    setSelectedTrack(track);
                    if (selectedCountry === 'SD' && selectedGrade === 'G12' &&
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
                  {SUPPORTED_COUNTRIES[selectedCountry].availableTracks.map((track) => (
                    <option key={track} value={track}>
                      {isEn ? TRACK_LABELS[track].en : TRACK_LABELS[track].ar}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Subject Selection Grid */}
            <div className="onboarding-config-section">
              <label className="config-section-label">
                <Target size={16} />
                <span>{isEn ? 'Choose Starting Subject to Begin:' : 'اختر المادة المراد البدء بها:'}</span>
              </label>
              <div className="onboarding-subjects-grid">
                {getAvailableSubjects().map((subj) => {
                  const isSelected = selectedSubject === subj.id;
                  const localizedLabel = getNationalSubjectLabel(
                    subj.id,
                    selectedCountry,
                    selectedGrade,
                    isEn ? 'en' : 'ar',
                    normalizeEducationTypeForCountry(selectedCountry, profile.educationType),
                    selectedTrack
                  );
                  return (
                    <button
                      key={subj.id}
                      type="button"
                      className={`onboarding-subject-card ${isSelected ? 'subject-card-active' : ''}`}
                      onClick={() => setSelectedSubject(subj.id)}
                    >
                      <div className="subj-card-icon" style={{ color: subj.color, borderColor: `${subj.color}40` }}>
                        {subj.icon}
                      </div>
                      <div className="subj-card-text">
                        <span className="subj-title">{localizedLabel || (isEn ? subj.nameEn : subj.nameAr)}</span>
                        <span className="subj-desc">{isEn ? subj.descEn : subj.descAr}</span>
                      </div>
                      {isSelected && (
                        <div className="subj-selected-check">
                          <CheckCircle2 size={18} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer Controls */}
        <div className="onboarding-modal-footer">
          <div className="footer-left">
            {currentStep > 1 ? (
              <button
                type="button"
                className="btn-onboarding-secondary"
                onClick={() => setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3)}
              >
                {isEn ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                <span>{isEn ? 'Previous' : 'السابق'}</span>
              </button>
            ) : (
              <button
                type="button"
                className="btn-onboarding-ghost"
                onClick={onClose}
              >
                {isEn ? 'Explore on my own' : 'تخطي واستكشاف'}
              </button>
            )}
          </div>

          <div className="footer-right">
            {currentStep < 3 ? (
              <button
                type="button"
                className="btn-onboarding-primary"
                onClick={() => setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3)}
              >
                <span>{currentStep === 1 ? (isEn ? 'View Roadmap' : 'عرض خريطة المسارات ➔') : (isEn ? 'Select Subject' : 'اختيار المادة والبدء ➔')}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </button>
            ) : (
              <button
                type="button"
                className="btn-onboarding-launch"
                onClick={handleStartLearning}
              >
                <Rocket size={18} />
                <span>
                  {isEn 
                    ? `Launch ${getNationalSubjectLabel(selectedSubject, selectedCountry, selectedGrade, 'en', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) || selectedSubject}`
                    : `ابدأ رحلة التعلم في ${getNationalSubjectLabel(selectedSubject, selectedCountry, selectedGrade, 'ar', normalizeEducationTypeForCountry(selectedCountry, profile.educationType), selectedTrack) || selectedSubject}`}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
