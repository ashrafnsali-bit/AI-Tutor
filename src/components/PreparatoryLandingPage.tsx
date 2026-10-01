import React, { useState } from 'react';
import type { CountryCode, EducationTrack, GradeLevel, Specialization, StudentProfile, Subject } from '../types';
import { SUPPORTED_COUNTRIES, getCountryInfo, getNationalSubjectLabel } from '../data/curriculumCountries';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
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
  GraduationCap,
  Globe,
  Globe2,
  ShieldCheck,
  Award,
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
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(profile.country || 'SA');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(profile.gradeLevel || 'G10');
  const [selectedTrack, setSelectedTrack] = useState<EducationTrack>(profile.educationTrack || 'GENERAL');
  const [selectedSpec, setSelectedSpec] = useState<Specialization>(profile.specialization || 'STEM');
  const [selectedSubject, setSelectedSubject] = useState<Subject>(profile.subject || 'PHYSICS');

  // Active Stage determination
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(selectedGrade);
  const isHigh = ['G10', 'G11', 'G12'].includes(selectedGrade);

  const countryInfo = getCountryInfo(selectedCountry);

  const handleSelectStage = (stage: 'primary' | 'middle' | 'high') => {
    if (stage === 'primary') {
      setSelectedGrade('G4');
      setSelectedSpec('GENERAL');
      setSelectedTrack('GENERAL');
      setSelectedSubject('PRIMARY_MATH');
    } else if (stage === 'middle') {
      setSelectedGrade('G8');
      setSelectedSpec('GENERAL');
      setSelectedTrack('GENERAL');
      setSelectedSubject('GENERAL_SCIENCE');
    } else {
      setSelectedGrade('G10');
      setSelectedSpec('STEM');
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
      setSelectedSpec('GENERAL');
      setSelectedTrack('GENERAL');
      if (!['PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'].includes(selectedSubject)) {
        setSelectedSubject('PRIMARY_MATH');
      }
    } else if (inMiddle) {
      setSelectedSpec('GENERAL');
      setSelectedTrack('GENERAL');
      if (!['MATH', 'ARABIC_LANG', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'].includes(selectedSubject)) {
        setSelectedSubject('GENERAL_SCIENCE');
      }
    } else {
      setSelectedSpec('STEM');
      if (['PRIMARY_MATH', 'PRIMARY_ARABIC', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES', 'ARABIC_LANG', 'GENERAL_SCIENCE'].includes(selectedSubject)) {
        setSelectedSubject('PHYSICS');
      }
    }
  };

  const getAvailableSubjects = (): { id: Subject; nameAr: string; nameEn: string; descAr: string; descEn: string; icon: React.ReactNode; color: string }[] => {
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
        }
      ];
    }

    if (isMiddle) {
      return [
        {
          id: 'GENERAL_SCIENCE',
          nameAr: 'العلوم العامة',
          nameEn: 'General Science',
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
          nameAr: 'لغتي الخالدة',
          nameEn: 'Arabic Language & Grammar',
          descAr: 'قواعد النحو والصرف، البلاغة، والتحليل الأدبي',
          descEn: 'Grammar, morphology & expression',
          icon: <BookMarked size={28} />,
          color: '#34d399'
        },
        {
          id: 'COMPUTER_SCIENCE',
          nameAr: 'التقنية والحاسب الآلي',
          nameEn: 'Computer Science & Tech',
          descAr: 'التفكير الخوارزمي، البرمجة، والمنطق الرقمي',
          descEn: 'Algorithms, logic & digital skills',
          icon: <Code2 size={28} />,
          color: '#c084fc'
        }
      ];
    }

    // High School / STEM
    return [
      {
        id: 'PHYSICS',
        nameAr: 'الفيزياء',
        nameEn: 'Physics',
        descAr: 'الميكانيكا، الكهرومغناطيسية، الحرارة، والفيزياء الحديثة',
        descEn: 'Mechanics, electromagnetism & modern physics',
        icon: <Atom size={28} />,
        color: '#38bdf8'
      },
      {
        id: 'MATH',
        nameAr: 'الرياضيات المتقدمة',
        nameEn: 'Advanced Mathematics',
        descAr: 'التفاضل والتكامل، المتجهات، والمصفوفات والاحتمالات',
        descEn: 'Calculus, vectors, matrices & probability',
        icon: <Calculator size={28} />,
        color: '#60a5fa'
      },
      {
        id: 'CHEMISTRY',
        nameAr: 'الكيمياء',
        nameEn: 'Chemistry',
        descAr: 'الروابط الجزيئية، سرعة التفاعلات، والاتزان الكيميائي',
        descEn: 'Chemical bonds, reactions & equilibrium',
        icon: <FlaskConical size={28} />,
        color: '#f472b6'
      },
      {
        id: 'BIOLOGY',
        nameAr: 'الأحياء',
        nameEn: 'Biology',
        descAr: 'علم الوراثة، الخلية، والتنوع الحيوي ووظائف الأعضاء',
        descEn: 'Genetics, cell biology & physiology',
        icon: <Dna size={28} />,
        color: '#34d399'
      },
      {
        id: 'COMPUTER_SCIENCE',
        nameAr: 'علوم الحاسب وهياكل البيانات',
        nameEn: 'Computer Science & STEM',
        descAr: 'هياكل البيانات، البرمجة بلغة بايثون، والخوارزميات',
        descEn: 'Data structures, Python & algorithms',
        icon: <Code2 size={28} />,
        color: '#c084fc'
      },
      {
        id: 'ARABIC_LIT',
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
      gradeLevel: selectedGrade,
      educationTrack: selectedTrack,
      specialization: (isPrimary || isMiddle) ? 'GENERAL' : selectedSpec,
      subject: selectedSubject,
      age: defaultAge
    };

    onSelectCurriculumAndStart(updated);
  };

  const activeSubjectLocalized = getNationalSubjectLabel(selectedSubject, selectedCountry, selectedGrade, isEn ? 'en' : 'ar') || selectedSubject;

  return (
    <div className="preparatory-landing-root" dir={isEn ? 'ltr' : 'rtl'}>
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
            <label className="prep-field-label">
              <Globe2 size={16} />
              <span>{isEn ? '1. Select National Curriculum Standard:' : '1. حدد الدولة والمنهج الوطني المعتمد:'}</span>
            </label>
            <div className="prep-country-grid">
              {(Object.keys(SUPPORTED_COUNTRIES) as CountryCode[]).map((cCode) => {
                const country = SUPPORTED_COUNTRIES[cCode];
                const isSelected = selectedCountry === cCode;
                return (
                  <button
                    key={cCode}
                    type="button"
                    className={`prep-country-btn ${isSelected ? 'country-selected' : ''}`}
                    onClick={() => setSelectedCountry(cCode)}
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

          {/* 3. Subject Grid Selection */}
          <div className="prep-field-block">
            <label className="prep-field-label">
              <BookOpen size={16} />
              <span>{isEn ? '3. Choose Starting Subject to Study:' : '3. اختر المادة المراد دراستها والبدء بها:'}</span>
            </label>
            <div className="prep-subjects-grid">
              {getAvailableSubjects().map((subj) => {
                const isSelected = selectedSubject === subj.id;
                const localizedTitle = getNationalSubjectLabel(subj.id, selectedCountry, selectedGrade, isEn ? 'en' : 'ar') || (isEn ? subj.nameEn : subj.nameAr);

                return (
                  <div
                    key={subj.id}
                    className={`prep-subject-box ${isSelected ? 'subject-box-active' : ''}`}
                    onClick={() => setSelectedSubject(subj.id)}
                  >
                    <div className="psubj-icon" style={{ color: subj.color, borderColor: `${subj.color}40` }}>
                      {subj.icon}
                    </div>
                    <div className="psubj-info">
                      <h4>{localizedTitle}</h4>
                      <p>{isEn ? subj.descEn : subj.descAr}</p>
                    </div>
                    {isSelected ? (
                      <div className="psubj-check">
                        <CheckCircle2 size={20} />
                      </div>
                    ) : (
                      <span className="psubj-select-hint">{isEn ? 'Select' : 'اختيار'}</span>
                    )}
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
        <p>
          {isEn
            ? '© AI Tutor - Adaptive Socratic Educational Platform. Official Curriculum Standards.'
            : 'منصة المعلم الذكي | منصة التعلم التكيفي المعززة بـ Gemini AI وفق المناهج التعليمية المعتمدة.'}
        </p>
      </footer>
    </div>
  );
};
