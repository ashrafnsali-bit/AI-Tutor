import React, { useState } from 'react';
import type { CountryCode, EducationTrack, GradeLevel, Specialization, StudentProfile, Subject } from '../types';
import { SUPPORTED_COUNTRIES, getNationalSubjectLabel } from '../data/curriculumCountries';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
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
  Award
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
  if (!isOpen) return null;

  const isEn = profile.language === 'en';
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Configuration state for Step 3
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(profile.country || 'SA');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(profile.gradeLevel || 'G10');
  const [selectedTrack, setSelectedTrack] = useState<EducationTrack>(profile.educationTrack || 'GENERAL');
  const [selectedSpec, setSelectedSpec] = useState<Specialization>(profile.specialization || 'STEM');
  const [selectedSubject, setSelectedSubject] = useState<Subject>(profile.subject || 'PHYSICS');

  // Determine stage category from grade
  const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(selectedGrade);
  const isMiddle = ['G7', 'G8', 'G9'].includes(selectedGrade);
  const isHigh = ['G10', 'G11', 'G12'].includes(selectedGrade);

  // Available subjects based on stage
  const getAvailableSubjects = (): { id: Subject; nameAr: string; nameEn: string; descAr: string; descEn: string; icon: React.ReactNode; color: string }[] => {
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
        }
      ];
    }

    if (isMiddle) {
      return [
        {
          id: 'GENERAL_SCIENCE',
          nameAr: 'العلوم العامة',
          nameEn: 'General Science',
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
          nameAr: 'لغتي الخالدة',
          nameEn: 'Arabic Language & Grammar',
          descAr: 'النحو، الصرف، والتعبير البلاغي',
          descEn: 'Grammar, morphology & expression',
          icon: <BookMarked size={24} />,
          color: '#34d399'
        },
        {
          id: 'COMPUTER_SCIENCE',
          nameAr: 'التقنية والحاسب الآلي',
          nameEn: 'Computer Science & Tech',
          descAr: 'أساسيات البرمجة، والمنطق الرقمي',
          descEn: 'Algorithms, logic & digital skills',
          icon: <Code2 size={24} />,
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
        descAr: 'الميكانيكا، الكهرومغناطيسية، والضوء والجسيمات',
        descEn: 'Mechanics, electromagnetism & modern physics',
        icon: <Atom size={24} />,
        color: '#38bdf8'
      },
      {
        id: 'MATH',
        nameAr: 'الرياضيات المتقدمة',
        nameEn: 'Advanced Mathematics',
        descAr: 'التفاضل والتكامل، الدوال، وحساب المثلثات',
        descEn: 'Calculus, functions & trigonometry',
        icon: <Calculator size={24} />,
        color: '#60a5fa'
      },
      {
        id: 'CHEMISTRY',
        nameAr: 'الكيمياء',
        nameEn: 'Chemistry',
        descAr: 'الروابط الكيميائية، التفاعلات، والحرارة الذرية',
        descEn: 'Chemical bonds, reactions & thermochemistry',
        icon: <FlaskConical size={24} />,
        color: '#f472b6'
      },
      {
        id: 'BIOLOGY',
        nameAr: 'الأحياء',
        nameEn: 'Biology',
        descAr: 'الوراثة الجزيئية، الخلية، ووظائف الأعضاء',
        descEn: 'Genetics, cell biology & physiology',
        icon: <Dna size={24} />,
        color: '#34d399'
      },
      {
        id: 'COMPUTER_SCIENCE',
        nameAr: 'علوم الحاسب وهياكل البيانات',
        nameEn: 'Computer Science & STEM',
        descAr: 'الخوارزميات، البرمجة، وبنى البيانات المتقدمة',
        descEn: 'Data structures, Python & algorithms',
        icon: <Code2 size={24} />,
        color: '#c084fc'
      },
      {
        id: 'ARABIC_LIT',
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

    const updated: StudentProfile = {
      ...profile,
      country: selectedCountry,
      gradeLevel: selectedGrade,
      educationTrack: selectedTrack,
      specialization: (isPrim || isMid) ? 'GENERAL' : selectedSpec,
      subject: selectedSubject,
      age: defaultAge
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
                {(Object.keys(SUPPORTED_COUNTRIES) as CountryCode[]).map((cCode) => {
                  const country = SUPPORTED_COUNTRIES[cCode];
                  const isSelected = selectedCountry === cCode;
                  return (
                    <button
                      key={cCode}
                      type="button"
                      className={`country-chip-btn ${isSelected ? 'country-chip-active' : ''}`}
                      onClick={() => setSelectedCountry(cCode)}
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

            {/* Subject Selection Grid */}
            <div className="onboarding-config-section">
              <label className="config-section-label">
                <Target size={16} />
                <span>{isEn ? 'Choose Starting Subject to Begin:' : 'اختر المادة المراد البدء بها:'}</span>
              </label>
              <div className="onboarding-subjects-grid">
                {getAvailableSubjects().map((subj) => {
                  const isSelected = selectedSubject === subj.id;
                  const localizedLabel = getNationalSubjectLabel(subj.id, selectedCountry, selectedGrade, isEn ? 'en' : 'ar');
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
                    ? `Launch ${getNationalSubjectLabel(selectedSubject, selectedCountry, selectedGrade, 'en') || selectedSubject}` 
                    : `ابدأ رحلة التعلم في ${getNationalSubjectLabel(selectedSubject, selectedCountry, selectedGrade, 'ar') || selectedSubject}`}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
