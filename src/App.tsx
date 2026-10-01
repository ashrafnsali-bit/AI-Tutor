import { useState, useEffect } from 'react';
import type { AssessmentResult, Lecture, StudentProfile, Subject, UserAccount } from './types';
import { BookOpen, Map } from 'lucide-react';
import { 
  INITIAL_STUDENT_PROFILE, 
  loadSubjectLectures, 
  saveSubjectLectures 
} from './data/curriculumData';
import { getCountryInfo } from './data/curriculumCountries';
import { detectStudentCountry, adaptProfileToCountry } from './services/geoService';
import { 
  getActiveUserAccount, 
  updateUserAccount, 
  saveUserSubjectLectures, 
  loadUserSubjectLectures,
  saveSharedCurriculumLecture,
  logoutUserAccount
} from './services/database';
import { Navbar } from './components/Navbar';
import { LectureRoadmap } from './components/LectureRoadmap';
import { LectureViewer } from './components/LectureViewer';
import { AssessmentModal } from './components/AssessmentModal';
import { SocraticChat } from './components/SocraticChat';
import { StudentProfileModal } from './components/StudentProfileModal';
import { ParentalModal } from './components/ParentalModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import { AuthModal } from './components/AuthModal';
import { GenerateLectureModal } from './components/GenerateLectureModal';
import { ProgressDashboard } from './components/ProgressDashboard';

export function App() {
  // Load saved state or default with consistency checks
  const [profile, setProfile] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('TEACHER_AI_STUDENT_PROFILE');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const merged: StudentProfile = { ...INITIAL_STUDENT_PROFILE, ...parsed };
        
        // Strict educational alignment between grade/age and subject/track:
        const PRIMARY_SUBJS: Subject[] = ['PRIMARY_ARABIC', 'PRIMARY_MATH', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'];
        const MIDDLE_SUBJS: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];

        if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(merged.gradeLevel)) {
          // Primary School: Strictly GENERAL education
          merged.specialization = 'GENERAL';
          if (!PRIMARY_SUBJS.includes(merged.subject)) {
            merged.subject = 'PRIMARY_ARABIC';
          }
          if (merged.gradeLevel === 'G1' && (merged.age < 6 || merged.age > 7)) merged.age = 7;
          if (merged.gradeLevel === 'G2' && (merged.age < 7 || merged.age > 8)) merged.age = 8;
          if (merged.gradeLevel === 'G3' && (merged.age < 8 || merged.age > 9)) merged.age = 9;
          if (merged.gradeLevel === 'G4' && (merged.age < 9 || merged.age > 10)) merged.age = 10;
          if (merged.gradeLevel === 'G5' && (merged.age < 10 || merged.age > 11)) merged.age = 11;
          if (merged.gradeLevel === 'G6' && (merged.age < 11 || merged.age > 12)) merged.age = 12;
        } else if (['G7', 'G8', 'G9'].includes(merged.gradeLevel)) {
          // Middle School: No specialization tracks! Must be GENERAL
          merged.specialization = 'GENERAL';
          if (!MIDDLE_SUBJS.includes(merged.subject)) {
            if (['PRIMARY_ARABIC', 'ARABIC_LIT', 'ISLAMIC_STUDIES'].includes(merged.subject)) merged.subject = 'ARABIC_LANG';
            else if (['PRIMARY_MATH'].includes(merged.subject)) merged.subject = 'MATH';
            else merged.subject = 'GENERAL_SCIENCE';
          }
          if (merged.gradeLevel === 'G7' && (merged.age < 12 || merged.age > 14)) merged.age = 13;
          if (merged.gradeLevel === 'G8' && (merged.age < 13 || merged.age > 15)) merged.age = 14;
          if (merged.gradeLevel === 'G9' && (merged.age < 14 || merged.age > 16)) merged.age = 15;
        } else {
          // High School:
          if (PRIMARY_SUBJS.includes(merged.subject) || merged.subject === 'ARABIC_LANG') {
            merged.subject = 'ARABIC_LIT';
          } else if (['GENERAL_SCIENCE', 'PRIMARY_SCIENCE'].includes(merged.subject)) {
            merged.subject = 'PHYSICS';
          } else if (merged.subject === 'PRIMARY_MATH') {
            merged.subject = 'MATH';
          }
          if (merged.subject === 'PHYSICS' && merged.specialization === 'HUMANITIES') {
            merged.specialization = 'STEM';
          } else if (merged.specialization === 'HUMANITIES' && merged.subject !== 'ARABIC_LIT') {
            merged.subject = 'ARABIC_LIT';
          }
          if (merged.specialization === 'GENERAL' && merged.gradeLevel !== 'G10') {
            merged.specialization = 'STEM';
          }
        }
        return merged;
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_STUDENT_PROFILE;
  });

  // Hydrate lectures corresponding to student's enrolled subject
  const [lectures, setLectures] = useState<Lecture[]>(() => {
    return loadSubjectLectures(profile.subject);
  });

  const [selectedLectureId, setSelectedLectureId] = useState<string>(() => {
    const lecs = loadSubjectLectures(profile.subject);
    return lecs[0]?.id || 'phys-1';
  });

  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('GEMINI_API_KEY') || '';
  });

  // Modal States
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isApiKeyOpen, setIsApiKeyOpen] = useState(false);
  const [isParentalOpen, setIsParentalOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isGenerateLectureOpen, setIsGenerateLectureOpen] = useState(false);
  const [isProgressOpen, setIsProgressOpen] = useState(false);
  const [geoNotice, setGeoNotice] = useState<{ show: boolean; countryName: string; flag: string; city?: string } | null>(null);

  // User session state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return !!localStorage.getItem('TEACHER_AI_ACTIVE_USER');
  });

  // Dynamic Geolocation Detection on startup
  useEffect(() => {
    const hasDetected = sessionStorage.getItem('TEACHER_AI_GEO_TOASTED');
    if (!hasDetected) {
      detectStudentCountry().then(geo => {
        if (geo && geo.country) {
          const cInfo = getCountryInfo(geo.country);
          setProfile(prev => {
            // Auto adapt profile country if it was default or untouched
            if (!prev.isAutoDetectedCountry && prev.country === 'SA' && geo.country !== 'SA') {
              return adaptProfileToCountry(prev, geo.country);
            }
            return prev;
          });
          setGeoNotice({
            show: true,
            countryName: cInfo.nameAr,
            flag: cInfo.flag,
            city: geo.city
          });
          sessionStorage.setItem('TEACHER_AI_GEO_TOASTED', 'true');
          setTimeout(() => setGeoNotice(null), 9000);
        }
      }).catch(() => {});
    }
  }, []);

  // Check active user from database on startup
  useEffect(() => {
    getActiveUserAccount().then((user) => {
      if (user) {
        setIsLoggedIn(true);
        setProfile(user);
        loadUserSubjectLectures(user.id, user.subject).then((savedLecs) => {
          if (savedLecs && savedLecs.length > 0) {
            setLectures(savedLecs);
            setSelectedLectureId(savedLecs[0]?.id || '');
          }
        });
      }
    });
  }, []);

  // Sync profile to local storage & database
  useEffect(() => {
    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(profile));
    updateUserAccount(profile.id, profile).catch(() => {});
  }, [profile]);

  // Sync lectures progress per subject to local storage & database
  useEffect(() => {
    saveSubjectLectures(profile.subject, lectures);
    saveUserSubjectLectures(profile.id, profile.subject, lectures).catch(() => {});
  }, [profile.id, profile.subject, lectures]);

  // Adjust HTML dir and title when language changes
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (profile.language === 'ar') {
      htmlEl.setAttribute('dir', 'rtl');
      htmlEl.setAttribute('lang', 'ar');
      document.title = 'منصة المعلم الذكي | منصة التعلم التكيفي المعززة بـ Gemini';
    } else {
      htmlEl.setAttribute('dir', 'ltr');
      htmlEl.setAttribute('lang', 'en');
      document.title = 'AI Tutor | Adaptive Learning Platform powered by Gemini';
    }
  }, [profile.language]);

  const activeLecture = lectures.find((l) => l.id === selectedLectureId) || lectures[0];

  // Check if next lecture exists and is unlocked
  const currentIndex = lectures.findIndex((l) => l.id === selectedLectureId);
  const nextLecture = currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null;
  const hasNextUnlocked = nextLecture ? !nextLecture.isLocked : false;

  // Handle passing the mandatory assessment
  const handlePassAssessment = (result: AssessmentResult) => {
    setLectures((prev) => {
      return prev.map((lec, idx) => {
        if (lec.id === activeLecture.id) {
          return {
            ...lec,
            isCompleted: true,
            lastAttempt: result
          };
        }
        // Unlock the very next lecture!
        if (idx === currentIndex + 1) {
          return {
            ...lec,
            isLocked: false
          };
        }
        return lec;
      });
    });

    // Award student mastery points
    setProfile((prev) => ({
      ...prev,
      masteryPoints: prev.masteryPoints + 150
    }));
  };

  // Handle failing the assessment
  const handleFailAssessment = (result: AssessmentResult) => {
    setLectures((prev) => {
      return prev.map((lec) => {
        if (lec.id === activeLecture.id) {
          return {
            ...lec,
            lastAttempt: result
          };
        }
        return lec;
      });
    });
  };

  const handleNextLecture = () => {
    if (nextLecture && !nextLecture.isLocked) {
      setSelectedLectureId(nextLecture.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('GEMINI_API_KEY', key);
  };

  const handlePurgeData = () => {
    localStorage.removeItem('TEACHER_AI_STUDENT_PROFILE');
    localStorage.removeItem('TEACHER_AI_LECTURES');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH');
    localStorage.removeItem('TEACHER_AI_LECTURES_PHYSICS');
    localStorage.removeItem('TEACHER_AI_LECTURES_CHEMISTRY');
    localStorage.removeItem('TEACHER_AI_LECTURES_BIOLOGY');
    localStorage.removeItem('TEACHER_AI_LECTURES_COMPUTER_SCIENCE');
    localStorage.removeItem('TEACHER_AI_LECTURES_ARABIC_LIT');
    const freshProfile = INITIAL_STUDENT_PROFILE;
    setProfile(freshProfile);
    const freshLectures = loadSubjectLectures(freshProfile.subject);
    setLectures(freshLectures);
    setSelectedLectureId(freshLectures[0].id);
  };

  const handleToggleLanguage = () => {
    setProfile((prev) => ({
      ...prev,
      language: prev.language === 'ar' ? 'en' : 'ar'
    }));
  };

  const handleSaveProfile = (updated: StudentProfile) => {
    const sanitized: StudentProfile = { ...updated };
    const PRIMARY_SUBJS: Subject[] = ['PRIMARY_ARABIC', 'PRIMARY_MATH', 'PRIMARY_SCIENCE', 'ISLAMIC_STUDIES'];
    const MIDDLE_SUBJS: Subject[] = ['ARABIC_LANG', 'MATH', 'GENERAL_SCIENCE', 'COMPUTER_SCIENCE'];

    if (['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(sanitized.gradeLevel)) {
      sanitized.specialization = 'GENERAL';
      if (!PRIMARY_SUBJS.includes(sanitized.subject)) {
        sanitized.subject = 'PRIMARY_ARABIC';
      }
    } else if (['G7', 'G8', 'G9'].includes(sanitized.gradeLevel)) {
      sanitized.specialization = 'GENERAL';
      if (!MIDDLE_SUBJS.includes(sanitized.subject)) {
        sanitized.subject = 'ARABIC_LANG';
      }
    } else {
      if (PRIMARY_SUBJS.includes(sanitized.subject) || sanitized.subject === 'ARABIC_LANG') sanitized.subject = 'ARABIC_LIT';
      if (['PRIMARY_SCIENCE', 'GENERAL_SCIENCE'].includes(sanitized.subject)) sanitized.subject = 'PHYSICS';
      if (sanitized.subject === 'PRIMARY_MATH') sanitized.subject = 'MATH';
      if (sanitized.specialization === 'GENERAL' && sanitized.gradeLevel !== 'G10') sanitized.specialization = 'STEM';
    }

    if (sanitized.subject !== profile.subject) {
      const freshLecs = loadSubjectLectures(sanitized.subject);
      setLectures(freshLecs);
      setSelectedLectureId(freshLecs[0]?.id || '');
    }
    setProfile(sanitized);
    updateUserAccount(sanitized.id, sanitized).catch(() => {});
  };

  // Mobile Tab view: 'lecture' | 'roadmap'
  const [mobileTab, setMobileTab] = useState<'lecture' | 'roadmap'>('lecture');

  const handleAuthSuccess = async (user: UserAccount) => {
    setIsLoggedIn(true);
    setProfile(user);
    const dbLecs = await loadUserSubjectLectures(user.id, user.subject);
    const effectiveLecs = (dbLecs && dbLecs.length > 0) ? dbLecs : loadSubjectLectures(user.subject);
    setLectures(effectiveLecs);
    setSelectedLectureId(effectiveLecs[0]?.id || '');
    setIsAuthOpen(false);
  };

  const handleLogout = async () => {
    await logoutUserAccount();
    setIsLoggedIn(false);
    const freshProfile = INITIAL_STUDENT_PROFILE;
    setProfile(freshProfile);
    const freshLecs = loadSubjectLectures(freshProfile.subject);
    setLectures(freshLecs);
    setSelectedLectureId(freshLecs[0]?.id || '');
  };

  // Handle a newly AI-generated curriculum lecture added to roadmap
  const handleLectureGenerated = (newLecture: Lecture) => {
    const formattedLec: Lecture = {
      ...newLecture,
      country: profile.country,
      isLocked: false,
      order: lectures.length + 1
    };

    setLectures((prev) => {
      // Ensure the new lecture is unlocked and appended at the end
      const updated = [...prev, formattedLec];
      return updated;
    });
    setSelectedLectureId(formattedLec.id);

    // Persist in shared community curriculum store so all visitors and students in the same country/subject/grade benefit
    saveSharedCurriculumLecture(formattedLec, profile.country, profile.subject, profile.gradeLevel).catch((err) => {
      console.warn('Could not save to shared curriculum store:', err);
    });
  };
  return (
    <div className="app-root">
      {/* Top Navigation */}
      <Navbar
        profile={profile}
        hasApiKey={!!apiKey}
        isLoggedIn={isLoggedIn}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenApiKey={() => setIsApiKeyOpen(true)}
        onOpenParental={() => setIsParentalOpen(true)}
        onOpenTutor={() => setIsChatOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onToggleLanguage={handleToggleLanguage}
        onOpenProgress={() => setIsProgressOpen(true)}
      />

      {/* Dynamic Geolocation Country Notification Banner */}
      {geoNotice && (
        <div className="geo-location-notification-banner" dir={profile.language === 'en' ? 'ltr' : 'rtl'}>
          <div className="gln-content">
            <span className="gln-flag">{geoNotice.flag}</span>
            <span className="gln-text">
              {profile.language === 'en'
                ? `📍 Detected location (${geoNotice.city || geoNotice.countryName}): National curriculum automatically adapted to ${geoNotice.countryName} official standards.`
                : `📍 تم اكتشاف موقعك الجغرافي (${geoNotice.city || geoNotice.countryName}): تم ضبط المنهج الوطني تلقائياً وفق المعايير الرسمية لـ ${geoNotice.countryName}.`}
            </span>
            <button
              type="button"
              className="gln-btn-manage"
              onClick={() => { setGeoNotice(null); setIsProfileOpen(true); }}
            >
              {profile.language === 'en' ? 'Customize' : 'تخصيص المسار'}
            </button>
            <button
              type="button"
              className="gln-btn-close"
              onClick={() => setGeoNotice(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Mobile Learning Hub Segmented Switcher */}
      <div className="mobile-workspace-tabs mobile-only">
        <button
          type="button"
          className={`mobile-tab-btn ${mobileTab === 'lecture' ? 'tab-active' : ''}`}
          onClick={() => setMobileTab('lecture')}
        >
          <BookOpen size={16} />
          <span>{profile.language === 'en' ? 'Active Lecture' : 'المحاضرة والشرح'}</span>
        </button>
        <button
          type="button"
          className={`mobile-tab-btn ${mobileTab === 'roadmap' ? 'tab-active' : ''}`}
          onClick={() => setMobileTab('roadmap')}
        >
          <Map size={16} />
          <span>{profile.language === 'en' ? 'Course Roadmap' : 'خارطة المنهج'}</span>
        </button>
      </div>

      {/* Main Learning Hub Grid */}
      <div className={`learning-workspace mobile-view-${mobileTab}`}>
        {/* Sidebar Roadmap with Locked Gates */}
        <LectureRoadmap
          lectures={lectures}
          selectedLectureId={selectedLectureId}
          lang={profile.language}
          profile={profile}
          onGenerateLecture={() => setIsGenerateLectureOpen(true)}
          onSelectLecture={(id) => {
            setSelectedLectureId(id);
            setMobileTab('lecture');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Active Lecture Learning Viewer */}
        <LectureViewer
          lecture={activeLecture}
          lang={profile.language}
          profile={profile}
          onStartAssessment={() => setIsAssessmentOpen(true)}
          onOpenTutor={() => setIsChatOpen(true)}
          onNextLecture={() => {
            handleNextLecture();
            setMobileTab('lecture');
          }}
          hasNextUnlocked={hasNextUnlocked}
        />
      </div>

      {/* Socratic Chat Drawer */}
      <SocraticChat
        isOpen={isChatOpen}
        lecture={activeLecture}
        profile={profile}
        apiKey={apiKey}
        onClose={() => setIsChatOpen(false)}
        onOpenApiKey={() => setIsApiKeyOpen(true)}
      />

      {/* Mandatory Post-Lecture Assessment Modal */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        lecture={activeLecture}
        profile={profile}
        apiKey={apiKey}
        onClose={() => setIsAssessmentOpen(false)}
        onPassAssessment={handlePassAssessment}
        onFailAssessment={handleFailAssessment}
        onGoToNextLecture={hasNextUnlocked ? handleNextLecture : undefined}
      />

      {/* Profile & Specialization Modal */}
      <StudentProfileModal
        isOpen={isProfileOpen}
        profile={profile}
        onSave={handleSaveProfile}
        onSwitchAccount={() => setIsAuthOpen(true)}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Parental Oversight & COPPA Modal */}
      <ParentalModal
        isOpen={isParentalOpen}
        profile={profile}
        onClose={() => setIsParentalOpen(false)}
        onPurgeData={handlePurgeData}
      />

      {/* Gemini API Key Configuration Modal */}
      <ApiKeyModal
        isOpen={isApiKeyOpen}
        currentApiKey={apiKey}
        lang={profile.language}
        onSaveKey={handleSaveApiKey}
        onClose={() => setIsApiKeyOpen(false)}
      />

      {/* Student Database Auth & Registration Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onSuccess={handleAuthSuccess}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Student Progress & Grades Dashboard */}
      {isProgressOpen && (
        <ProgressDashboard
          profile={profile}
          lang={profile.language}
          onClose={() => setIsProgressOpen(false)}
        />
      )}

      {/* AI Generate Lecture Modal */}
      <GenerateLectureModal
        isOpen={isGenerateLectureOpen}
        profile={profile}
        lang={profile.language}
        apiKey={apiKey}
        existingLectures={lectures}
        onClose={() => setIsGenerateLectureOpen(false)}
        onLectureGenerated={handleLectureGenerated}
        onOpenApiKey={() => setIsApiKeyOpen(true)}
      />
    </div>
  );
}

export default App;





