import { useState, useEffect } from 'react';
import type { AssessmentResult, Lecture, StudentProfile, Subject, UserAccount } from './types';
import { BookOpen, Map } from 'lucide-react';
import { 
  INITIAL_STUDENT_PROFILE, 
  loadSubjectLectures, 
  saveSubjectLectures 
} from './data/curriculumData';
import { getCountryInfo } from './data/curriculumCountries';
import { 
  detectStudentCountry, 
  adaptProfileToCountry, 
  isManualCountryOverride, 
  setManualCountryOverride, 
  getCachedGeoResult, 
  detectCountryFromTimezone 
} from './services/geoService';
import { 
  getActiveUserAccount, 
  updateUserAccount, 
  saveUserSubjectLectures, 
  loadUserSubjectLectures,
  saveSharedCurriculumLecture,
  logoutUserAccount,
  saveLastSessionState,
  recordStudySession
} from './services/database';
import { sendStudentHeartbeat, clearStudentPresence } from './services/presenceService';
import { initCloudSync, onCloudLectureGenerated } from './services/cloudSyncService';
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
import { AdminDashboard } from './components/AdminDashboard';
import { ContactModal, FloatingContactButton } from './components/ContactModal';
import { WelcomeOnboardingModal } from './components/WelcomeOnboardingModal';
import { PreparatoryLandingPage } from './components/PreparatoryLandingPage';

export function App() {
  // Check if returning registered student or existing learning session:
  // A registered user (TEACHER_AI_ACTIVE_USER) or a student who has launched/studied in a session (TEACHER_AI_HAS_STUDIED)
  // resumes directly in their workspace without seeing the preparatory landing page.
  const [currentView, setCurrentView] = useState<'landing' | 'workspace'>(() => {
    const activeUser = localStorage.getItem('TEACHER_AI_ACTIVE_USER');
    const hasStudied = localStorage.getItem('TEACHER_AI_HAS_STUDIED');
    if (activeUser || hasStudied === 'true') {
      return 'workspace';
    }
    return 'landing';
  });

  // Load saved state or default with dynamic geo-adaptation
  const [profile, setProfile] = useState<StudentProfile>(() => {
    const isManual = isManualCountryOverride();
    const cachedGeo = getCachedGeoResult();
    const tzCountry = detectCountryFromTimezone();
    // Default dynamic country if not manually overridden: cached IP geo, then timezone geo, or SA
    const defaultDynamicCountry = cachedGeo?.country || tzCountry || 'SA';

    // 1. Prioritize authenticated active user account from database session
    const activeStored = localStorage.getItem('TEACHER_AI_ACTIVE_USER');
    if (activeStored) {
      try {
        const parsedActive = JSON.parse(activeStored);
        if (parsedActive && parsedActive.id && parsedActive.name && parsedActive.name !== 'عمر التميمي') {
          return parsedActive;
        }
      } catch {}
    }

    const saved = localStorage.getItem('TEACHER_AI_STUDENT_PROFILE');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Clean up legacy static demo name 'عمر التميمي'
        if (parsed.name === 'عمر التميمي') {
          parsed.name = INITIAL_STUDENT_PROFILE.name;
          parsed.nameAr = INITIAL_STUDENT_PROFILE.nameAr;
          parsed.nameEn = INITIAL_STUDENT_PROFILE.nameEn;
        }
        const merged: StudentProfile = { ...INITIAL_STUDENT_PROFILE, ...parsed };
        
        // If user has NOT manually chosen a country, dynamically apply the detected country
        if (!isManual && defaultDynamicCountry && merged.country !== defaultDynamicCountry) {
          merged.country = defaultDynamicCountry;
          merged.isAutoDetectedCountry = true;
        }

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
          if (['PHYSICS', 'MATH', 'CHEMISTRY', 'BIOLOGY', 'COMPUTER_SCIENCE'].includes(merged.subject)) {
            if (merged.specialization === 'HUMANITIES') {
              merged.specialization = 'GENERAL';
            }
          }
        }
        return merged;
      } catch (e) {
        console.error(e);
      }
    }
    
    // First-time visit: adapt INITIAL_STUDENT_PROFILE to dynamic country if not manually overridden
    if (!isManual && defaultDynamicCountry) {
      return adaptProfileToCountry(INITIAL_STUDENT_PROFILE, defaultDynamicCountry);
    }
    return INITIAL_STUDENT_PROFILE;
  });

  // Hydrate lectures corresponding to student's enrolled subject and grade
  const [lectures, setLectures] = useState<Lecture[]>(() => {
    return loadSubjectLectures(
      profile.subject,
      profile.country,
      profile.gradeLevel,
      profile.educationType || 'PUBLIC',
      profile.educationTrack || 'GENERAL',
      profile.language
    );
  });

  const [selectedLectureId, setSelectedLectureId] = useState<string>(() => {
    const savedLectureId = localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID');
    const lecs = loadSubjectLectures(
      profile.subject,
      profile.country,
      profile.gradeLevel,
      profile.educationType || 'PUBLIC',
      profile.educationTrack || 'GENERAL',
      profile.language
    );
    const savedMatching = lecs.find(l => l.id === savedLectureId && !l.isLocked);
    if (savedMatching && !savedMatching.isCompleted) {
      return savedMatching.id;
    }
    const firstUncompleted = lecs.find(l => !l.isCompleted && !l.isLocked);
    if (firstUncompleted) return firstUncompleted.id;
    return savedMatching ? savedMatching.id : lecs[0]?.id || 'phys-1';
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
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(() => {
    const seen = localStorage.getItem('TEACHER_AI_ONBOARDING_SEEN');
    const activeUser = localStorage.getItem('TEACHER_AI_ACTIVE_USER');
    const hasStudied = localStorage.getItem('TEACHER_AI_HAS_STUDIED');
    return !seen && !activeUser && hasStudied !== 'true';
  });
  const [geoNotice, setGeoNotice] = useState<{ show: boolean; countryName: string; flag: string; city?: string } | null>(null);

  // User session state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return !!localStorage.getItem('TEACHER_AI_ACTIVE_USER');
  });

  // Track selected by a new visitor on landing page pending mandatory registration
  const [pendingTrackProfile, setPendingTrackProfile] = useState<StudentProfile | null>(null);

  // Connect to Global Cloud Synchronization & Real-time Live Network on startup
  useEffect(() => {
    initCloudSync();
  }, []);

  // Listen for real-time cloud lectures generated by any student or teacher anywhere in the world
  useEffect(() => {
    const unsub = onCloudLectureGenerated((cloudLec) => {
      if (!cloudLec || !cloudLec.id) return;
      const matchesCountry = !cloudLec.country || cloudLec.country === profile.country;
      const matchesEducationType = !cloudLec.educationType || cloudLec.educationType === (profile.educationType || 'PUBLIC');
      const matchesGrade = !cloudLec.gradeLevel || !profile.gradeLevel || cloudLec.gradeLevel === profile.gradeLevel;
      const matchesSubject = !cloudLec.subject || cloudLec.subject === profile.subject || cloudLec.id.toLowerCase().includes(profile.subject.toLowerCase().replace('_', ''));

      if (matchesCountry && matchesEducationType && matchesGrade && matchesSubject) {
        setLectures((prev) => {
          if (prev.some(l => l.id === cloudLec.id)) return prev;
          const nextOrder = prev.length + 1;
          const lastLec = prev[prev.length - 1];
          const isPrecedingCompleted = lastLec ? !!lastLec.isCompleted : true;

          const cleanTitleAr = (cloudLec.titleAr || '').replace(/^(المحاضرة|الدرس)\s*\d+\s*[:\-–]\s*/i, '').trim();
          const cleanTitleEn = (cloudLec.titleEn || '').replace(/^(Lecture|Lesson)\s*\d+\s*[:\-–]\s*/i, '').trim();

          const formatted: Lecture = {
            ...cloudLec,
            country: profile.country,
            subject: profile.subject,
            gradeLevel: profile.gradeLevel,
            educationType: profile.educationType || 'PUBLIC',
            educationTrack: profile.educationTrack || 'GENERAL',
            order: nextOrder,
            titleAr: cleanTitleAr ? `المحاضرة ${nextOrder}: ${cleanTitleAr}` : `المحاضرة ${nextOrder}: درس جديد`,
            titleEn: cleanTitleEn ? `Lecture ${nextOrder}: ${cleanTitleEn}` : `Lecture ${nextOrder}: New Lesson`,
            lessonNumberAr: `الدرس ${nextOrder}`,
            lessonNumberEn: `Lesson ${nextOrder}`,
            prerequisiteLectureId: lastLec?.id,
            prerequisiteTitleAr: lastLec?.titleAr,
            prerequisiteTitleEn: lastLec?.titleEn,
            isCompleted: false,
            isLocked: !isPrecedingCompleted
          };
          return [...prev, formatted];
        });
      }
    });

    return () => unsub();
  }, [profile.country, profile.educationType, profile.subject, profile.gradeLevel]);

  // Dynamic Geolocation Detection on startup (unless user manually chose their country)
  useEffect(() => {
    const isManual = isManualCountryOverride();
    if (isManual) return; // Respect user's explicit manual override!

    detectStudentCountry().then(geo => {
      if (!geo || !geo.country) return;
      
      // Double check manual override hasn't been set in the meantime
      if (isManualCountryOverride()) return;

      const cInfo = getCountryInfo(geo.country);

      setProfile(prev => {
        if (prev.country !== geo.country) {
          const adapted = adaptProfileToCountry(prev, geo.country);
          // Immediately reload curriculum lectures for the newly detected country
          const freshLecs = loadSubjectLectures(
            adapted.subject,
            geo.country,
            adapted.gradeLevel,
            adapted.educationType || 'PUBLIC',
            adapted.educationTrack || 'GENERAL',
            adapted.language
          );
          setLectures(freshLecs);
          setSelectedLectureId(freshLecs[0]?.id || '');
          return adapted;
        }
        return prev;
      });

      const hasToasted = sessionStorage.getItem('TEACHER_AI_GEO_TOASTED');
      if (!hasToasted) {
        setGeoNotice({
          show: true,
          countryName: cInfo.nameAr,
          flag: cInfo.flag,
          city: geo.city
        });
        sessionStorage.setItem('TEACHER_AI_GEO_TOASTED', 'true');
        setTimeout(() => setGeoNotice(null), 9000);
      }
    }).catch(err => {
      console.warn('Geolocation detection skipped:', err);
    });
  }, []);

  // Check active user from database on startup
  useEffect(() => {
    getActiveUserAccount().then((user) => {
      if (user && user.name && user.name !== 'عمر التميمي') {
        setIsLoggedIn(true);
        setProfile((prev) => ({
          ...prev,
          ...user,
          id: user.id || prev.id,
          name: user.name,
          nameAr: user.nameAr || user.name,
          nameEn: user.nameEn || user.name
        }));
        try {
          localStorage.setItem('TEACHER_AI_ACTIVE_USER', JSON.stringify(user));
          localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(user));
        } catch {}
        setCurrentView('workspace');
        loadUserSubjectLectures(user.id, user.subject).then((savedLecs) => {
          const freshLecs = loadSubjectLectures(
            user.subject,
            user.country,
            user.gradeLevel,
            user.educationType || 'PUBLIC',
            user.educationTrack || 'GENERAL',
            user.language
          );
          if (savedLecs && savedLecs.length > 0) {
            const reconciled = freshLecs.map((fl) => {
              const found = savedLecs.find((s) => s.id === fl.id);
              return found ? { ...fl, isLocked: found.isLocked, isCompleted: found.isCompleted, lastAttempt: found.lastAttempt } : fl;
            });
            setLectures(reconciled);
            const savedLectureId = localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID');
            const matchingLec = reconciled.find((l) => l.id === savedLectureId && !l.isLocked);
            setSelectedLectureId(matchingLec ? matchingLec.id : reconciled[0]?.id || '');
          } else {
            setLectures(freshLecs);
            setSelectedLectureId(freshLecs[0]?.id || '');
          }
        });
      }
    });
  }, []);

  // Save last accessed lecture ID and learning session flag
  useEffect(() => {
    if (selectedLectureId) {
      localStorage.setItem('TEACHER_AI_LAST_LECTURE_ID', selectedLectureId);
    }
  }, [selectedLectureId]);

  // Sync profile to local storage & database
  useEffect(() => {
    if (profile.name === 'عمر التميمي') return;
    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(profile));
    updateUserAccount(profile.id, { ...profile, lastLoginAt: Date.now() }).catch(() => {});
  }, [profile]);

  // Sync lectures progress per subject, country, and educationType to local storage & database
  useEffect(() => {
    saveSubjectLectures(profile.subject, lectures, profile.gradeLevel, profile.country, profile.educationType || 'PUBLIC');
    saveUserSubjectLectures(profile.id, profile.subject, lectures).catch(() => {});
  }, [profile.id, profile.subject, profile.gradeLevel, profile.country, profile.educationType, lectures]);

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

  // Live Real-Time Presence Heartbeat for Active Student
  useEffect(() => {
    if (!profile || !profile.id) return;

    const currentLec = lectures.find((l) => l.id === selectedLectureId) || lectures[0];
    const lecTitle = currentLec?.titleAr || 'المحاضرة الحالية';

    const sendBeat = () => {
      sendStudentHeartbeat({
        userId: profile.id,
        userName: profile.name,
        userEmail: profile.email || `${profile.username || 'student'}@student.ai`,
        country: profile.country,
        gradeLevel: profile.gradeLevel,
        subject: profile.subject,
        currentLectureId: selectedLectureId || '',
        currentLectureTitle: lecTitle,
        status: isAssessmentOpen ? 'QUIZ' : 'STUDYING',
        sessionStartedAt: Date.now()
      });
    };

    sendBeat();
    const interval = setInterval(sendBeat, 5000);

    const handleBeforeUnload = () => {
      clearStudentPresence(profile.id);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [profile, selectedLectureId, lectures, isAssessmentOpen]);

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
      localStorage.setItem('TEACHER_AI_LAST_LECTURE_ID', nextLecture.id);
      localStorage.setItem('TEACHER_AI_HAS_STUDIED', 'true');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('GEMINI_API_KEY', key);
  };

  const handlePurgeData = () => {
    localStorage.removeItem('TEACHER_AI_STUDENT_PROFILE');
    localStorage.removeItem('TEACHER_AI_HAS_STUDIED');
    localStorage.removeItem('TEACHER_AI_LAST_LECTURE_ID');
    localStorage.removeItem('TEACHER_AI_MANUAL_COUNTRY_OVERRIDE');
    sessionStorage.removeItem('TEACHER_AI_GEO_TOASTED');
    sessionStorage.removeItem('TEACHER_AI_DETECTED_GEO');
    localStorage.removeItem('TEACHER_AI_DETECTED_GEO');
    localStorage.removeItem('TEACHER_AI_LECTURES');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH_G7');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH_G8');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH_G9');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH_G10');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH_G11');
    localStorage.removeItem('TEACHER_AI_LECTURES_MATH_G12');
    localStorage.removeItem('TEACHER_AI_LECTURES_PHYSICS');
    localStorage.removeItem('TEACHER_AI_LECTURES_CHEMISTRY');
    localStorage.removeItem('TEACHER_AI_LECTURES_BIOLOGY');
    localStorage.removeItem('TEACHER_AI_LECTURES_COMPUTER_SCIENCE');
    localStorage.removeItem('TEACHER_AI_LECTURES_ARABIC_LIT');
    const autoCountry = detectCountryFromTimezone() || 'SA';
    const freshProfile = adaptProfileToCountry(INITIAL_STUDENT_PROFILE, autoCountry);
    setProfile(freshProfile);
    const freshLectures = loadSubjectLectures(
      freshProfile.subject,
      freshProfile.country,
      freshProfile.gradeLevel,
      freshProfile.educationType || 'PUBLIC',
      freshProfile.educationTrack || 'GENERAL',
      freshProfile.language
    );
    setLectures(freshLectures);
    setSelectedLectureId(freshLectures[0].id);
  };

  const handleToggleLanguage = () => {
    setProfile((prev) => ({
      ...prev,
      language: prev.language === 'ar' ? 'en' : 'ar'
    }));
  };

  const handleSaveProfile = async (updated: StudentProfile) => {
    // Retain official registered name and ID from central database profile - cannot be modified from profile settings
    const activeDb = await getActiveUserAccount().catch(() => null);
    const officialName = (activeDb?.name && activeDb.name !== 'عمر التميمي')
      ? activeDb.name
      : ((updated.name && updated.name !== 'عمر التميمي') ? updated.name : (profile.name !== 'عمر التميمي' ? profile.name : 'احمد علي'));
    const officialNameAr = (activeDb?.nameAr && activeDb.nameAr !== 'عمر التميمي')
      ? activeDb.nameAr
      : ((updated.nameAr && updated.nameAr !== 'عمر التميمي') ? updated.nameAr : (profile.nameAr !== 'عمر التميمي' ? profile.nameAr : officialName));
    const officialNameEn = (activeDb?.nameEn && activeDb.nameEn !== 'Omar Al-Tamimi')
      ? activeDb.nameEn
      : (updated.nameEn || profile.nameEn || officialName);
    const officialId = activeDb?.id || profile.id || updated.id;

    const sanitized: StudentProfile = {
      ...updated,
      id: officialId,
      name: officialName,
      nameAr: officialNameAr,
      nameEn: officialNameEn
    };

    // Record or clear manual override based on whether it was auto-detected or explicitly picked
    if (sanitized.isAutoDetectedCountry) {
      setManualCountryOverride(false);
    } else {
      setManualCountryOverride(true);
    }
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
      if (['PHYSICS', 'MATH', 'CHEMISTRY', 'BIOLOGY', 'COMPUTER_SCIENCE'].includes(sanitized.subject)) {
        if (sanitized.specialization === 'HUMANITIES') {
          sanitized.specialization = 'GENERAL';
        }
      }
      
    }

    const freshLecs = loadSubjectLectures(
      sanitized.subject,
      sanitized.country,
      sanitized.gradeLevel,
      sanitized.educationType || 'PUBLIC',
      sanitized.educationTrack || 'GENERAL',
      sanitized.language
    );
    setLectures(freshLecs);
    const savedLectureId = localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID');
    const validSaved = freshLecs.find((l) => l.id === savedLectureId && !l.isLocked);
    const chosenLecId = validSaved ? validSaved.id : freshLecs[0]?.id || '';
    setSelectedLectureId(chosenLecId);
    localStorage.setItem('TEACHER_AI_LAST_LECTURE_ID', chosenLecId);

    setProfile(sanitized);
    updateUserAccount(sanitized.id, sanitized).catch(() => {});
  };

  // Mobile Tab view: 'lecture' | 'roadmap'
  const [mobileTab, setMobileTab] = useState<'lecture' | 'roadmap'>('lecture');

  const handleAuthSuccess = async (user: UserAccount) => {
    setIsLoggedIn(true);
    setProfile(user);
    localStorage.setItem('TEACHER_AI_HAS_STUDIED', 'true');
    localStorage.setItem('TEACHER_AI_ONBOARDING_SEEN', 'true');
    localStorage.setItem('TEACHER_AI_ACTIVE_USER', JSON.stringify(user));
    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(user));

    const dbLecs = await loadUserSubjectLectures(user.id, user.subject);
    const freshLecs = loadSubjectLectures(
      user.subject,
      user.country,
      user.gradeLevel,
      user.educationType || 'PUBLIC',
      user.educationTrack || 'GENERAL',
      user.language
    );
    const effectiveLecs = (dbLecs && dbLecs.length > 0)
      ? freshLecs.map((fl) => {
          const found = dbLecs.find((s) => s.id === fl.id);
          return found ? { ...fl, isLocked: found.isLocked, isCompleted: found.isCompleted, lastAttempt: found.lastAttempt } : fl;
        })
      : freshLecs;
    setLectures(effectiveLecs);

    // Auto-advance to the first uncompleted unlocked lecture (or saved lecture if not completed)
    const savedLectureId = localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID');
    const matchingLec = effectiveLecs.find(l => l.id === savedLectureId && !l.isLocked);
    const firstUncompleted = effectiveLecs.find(l => !l.isCompleted && !l.isLocked);
    const chosenId = (matchingLec && !matchingLec.isCompleted)
      ? matchingLec.id
      : (firstUncompleted ? firstUncompleted.id : (effectiveLecs[0]?.id || ''));

    setSelectedLectureId(chosenId);
    localStorage.setItem('TEACHER_AI_LAST_LECTURE_ID', chosenId);

    // Save and record active session
    const currentLec = effectiveLecs.find(l => l.id === chosenId);
    saveLastSessionState({
      userId: user.id,
      userName: user.name,
      subject: user.subject,
      gradeLevel: user.gradeLevel,
      country: user.country,
      educationType: user.educationType || 'PUBLIC',
      educationTrack: user.educationTrack || 'GENERAL',
      lastLectureId: chosenId,
      lastLectureTitle: currentLec?.titleAr || '',
      completedLecturesCount: effectiveLecs.filter(l => l.isCompleted).length,
      totalLecturesCount: effectiveLecs.length,
      timestamp: Date.now()
    });
    recordStudySession(user.id, user.subject, chosenId, currentLec?.titleAr || '', 'start').catch(() => {});

    setCurrentView('workspace');
    setIsAuthOpen(false);
    setPendingTrackProfile(null);
  };

  const handleLogout = async () => {
    if (profile?.id) {
      clearStudentPresence(profile.id);
    }
    await logoutUserAccount();
    setIsLoggedIn(false);
    localStorage.removeItem('TEACHER_AI_HAS_STUDIED');
    localStorage.removeItem('TEACHER_AI_LAST_LECTURE_ID');
    const freshProfile = INITIAL_STUDENT_PROFILE;
    setProfile(freshProfile);
    const freshLecs = loadSubjectLectures(
      freshProfile.subject,
      freshProfile.country,
      freshProfile.gradeLevel,
      freshProfile.educationType || 'PUBLIC',
      freshProfile.educationTrack || 'GENERAL',
      freshProfile.language
    );
    setLectures(freshLecs);
    setSelectedLectureId(freshLecs[0]?.id || '');
    setCurrentView('landing');
  };

  // Handle a newly AI-generated curriculum lecture added to roadmap
  const handleLectureGenerated = (newLecture: Lecture) => {
    setLectures((prev) => {
      const nextOrder = prev.length + 1;
      const lastLec = prev[prev.length - 1];
      const isPrecedingCompleted = lastLec ? !!lastLec.isCompleted : true;

      const cleanTitleAr = (newLecture.titleAr || '').replace(/^(المحاضرة|الدرس)\s*\d+\s*[:\-–]\s*/i, '').trim();
      const finalTitleAr = cleanTitleAr ? `المحاضرة ${nextOrder}: ${cleanTitleAr}` : `المحاضرة ${nextOrder}: درس جديد`;

      const cleanTitleEn = (newLecture.titleEn || '').replace(/^(Lecture|Lesson)\s*\d+\s*[:\-–]\s*/i, '').trim();
      const finalTitleEn = cleanTitleEn ? `Lecture ${nextOrder}: ${cleanTitleEn}` : `Lecture ${nextOrder}: New Lesson`;

      const formattedLec: Lecture = {
        ...newLecture,
        country: profile.country,
        subject: profile.subject,
        gradeLevel: profile.gradeLevel,
        educationType: profile.educationType || 'PUBLIC',
        educationTrack: profile.educationTrack || 'GENERAL',
        order: nextOrder,
        titleAr: finalTitleAr,
        titleEn: finalTitleEn,
        lessonNumberAr: `الدرس ${nextOrder}`,
        lessonNumberEn: `Lesson ${nextOrder}`,
        prerequisiteLectureId: lastLec?.id,
        prerequisiteTitleAr: lastLec?.titleAr,
        prerequisiteTitleEn: lastLec?.titleEn,
        isCompleted: false,
        isLocked: !isPrecedingCompleted
      };

      if (prev.some(l => l.id === formattedLec.id)) return prev;
      const updated = [...prev, formattedLec];

      // Persist in shared community curriculum store with country and educationType matching
      saveSharedCurriculumLecture(
        formattedLec, 
        profile.country, 
        profile.subject, 
        profile.gradeLevel,
        profile.educationType || 'PUBLIC'
      ).catch((err) => {
        console.warn('Could not save to shared curriculum store:', err);
      });

      // If unlocked, select it; otherwise remain on current lecture
      if (!formattedLec.isLocked) {
        setSelectedLectureId(formattedLec.id);
      }

      return updated;
    });
  };

  const handleSelectCurriculumAndStart = (updatedProfile: StudentProfile) => {
    if (!isLoggedIn) {
      // New visitor: Enforce mandatory registration and parental control activation first!
      setPendingTrackProfile(updatedProfile);
      setIsAuthOpen(true);
      return;
    }

    handleSaveProfile(updatedProfile);
    localStorage.setItem('TEACHER_AI_HAS_STUDIED', 'true');
    localStorage.setItem('TEACHER_AI_ONBOARDING_SEEN', 'true');

    // Save and record active session
    saveLastSessionState({
      userId: profile.id,
      userName: profile.name,
      subject: updatedProfile.subject,
      gradeLevel: updatedProfile.gradeLevel,
      country: updatedProfile.country,
      educationType: updatedProfile.educationType || 'PUBLIC',
      educationTrack: updatedProfile.educationTrack || 'GENERAL',
      lastLectureId: selectedLectureId,
      timestamp: Date.now()
    });
    recordStudySession(profile.id, updatedProfile.subject, selectedLectureId, activeLecture?.titleAr || '', 'start').catch(() => {});

    setCurrentView('workspace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* ═══ VIEW 1: PREPARATORY WELCOME & CURRICULUM SELECTION HUB ═══ */}
      {currentView === 'landing' ? (
        <PreparatoryLandingPage
          profile={profile}
          hasApiKey={!!apiKey}
          isLoggedIn={isLoggedIn}
          onSelectCurriculumAndStart={handleSelectCurriculumAndStart}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenApiKey={() => setIsApiKeyOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          onToggleLanguage={handleToggleLanguage}
        />
      ) : (
        /* ═══ VIEW 2: ACTIVE LECTURES & SOCRATIC TUTOR WORKSPACE ═══ */
        <>
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
            onOpenAdmin={() => setIsAdminOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenOnboarding={() => setIsOnboardingOpen(true)}
            onReturnHome={() => setCurrentView('landing')}
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
              onOpenProfile={() => setIsProfileOpen(true)}
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
        </>
      )}

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
        initialProfile={pendingTrackProfile}
        noticeMessage={pendingTrackProfile ? (profile.language === 'en' ? 'Complete mandatory registration to start your selected curriculum track' : 'أكمل التسجيل وتفعيل الرقابة الأبوية للانتقال لمسارك المختار') : undefined}
        onSuccess={handleAuthSuccess}
        onClose={() => {
          setIsAuthOpen(false);
          setPendingTrackProfile(null);
        }}
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

      {/* Comprehensive Admin Dashboard & Supervision Modal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        language={profile.language}
      />

      {/* Floating Always-Visible Contact Us Button */}
      <FloatingContactButton
        onClick={() => setIsContactOpen(true)}
        language={profile.language}
      />

      {/* Interactive Contact Us & Email Feedback Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        language={profile.language}
        currentLecture={activeLecture}
      />

      {/* First-Time Welcome & Learning Roadmap Onboarding Modal */}
      <WelcomeOnboardingModal
        isOpen={isOnboardingOpen}
        profile={profile}
        onFinish={(updatedProfile) => {
          handleSaveProfile(updatedProfile);
          localStorage.setItem('TEACHER_AI_ONBOARDING_SEEN', 'true');
          setIsOnboardingOpen(false);
        }}
        onClose={() => {
          localStorage.setItem('TEACHER_AI_ONBOARDING_SEEN', 'true');
          setIsOnboardingOpen(false);
        }}
      />
    </div>
  );
}

export default App;





