import type { CountryCode, EducationTrack, EducationType, GradeLevel, StudentProfile, Subject } from '../types';
import { SUPPORTED_COUNTRIES, getNationalTextbookInfo } from '../data/curriculumCountries';

export interface GeoDetectionResult {
  country: CountryCode;
  countryName: string;
  city?: string;
  ip?: string;
  isAutoDetected: boolean;
  timeZone?: string;
}

const CACHE_KEY = 'TEACHER_AI_DETECTED_GEO';
export const MANUAL_OVERRIDE_KEY = 'TEACHER_AI_MANUAL_COUNTRY_OVERRIDE';

/**
 * Check if the user has manually set a country override
 */
export function isManualCountryOverride(): boolean {
  try {
    return localStorage.getItem(MANUAL_OVERRIDE_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Set or clear the manual country override flag
 */
export function setManualCountryOverride(manual: boolean): void {
  try {
    if (manual) {
      localStorage.setItem(MANUAL_OVERRIDE_KEY, 'true');
    } else {
      localStorage.removeItem(MANUAL_OVERRIDE_KEY);
    }
  } catch {
    /* ignore */
  }
}

/**
 * Retrieve cached geo result if available
 */
export function getCachedGeoResult(): GeoDetectionResult | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
    if (cached) {
      return JSON.parse(cached) as GeoDetectionResult;
    }
  } catch {
    /* ignore */
  }
  return null;
}

// Mapping timezones to CountryCode as an instantaneous zero-network fallback
const TIMEZONE_TO_COUNTRY: Record<string, CountryCode> = {
  // Saudi Arabia & Yemen
  'Asia/Riyadh': 'SA',
  'Asia/Aden': 'SA',
  // Egypt, Sudan, Libya
  'Africa/Cairo': 'EG',
  'Africa/Tripoli': 'EG',
  'Africa/Khartoum': 'EG',
  // UAE
  'Asia/Dubai': 'AE',
  // Kuwait
  'Asia/Kuwait': 'KW',
  // Jordan & Levant
  'Asia/Amman': 'JO',
  'Asia/Damascus': 'JO',
  'Asia/Beirut': 'JO',
  'Asia/Jerusalem': 'JO',
  'Asia/Gaza': 'JO',
  'Asia/Hebron': 'JO',
  // Oman
  'Asia/Muscat': 'OM',
  // Qatar
  'Asia/Qatar': 'QA',
  // Bahrain
  'Asia/Bahrain': 'BH',
  // Iraq
  'Asia/Baghdad': 'IQ',
  // Morocco & Mauritania
  'Africa/Casablanca': 'MA',
  'Africa/El_Aaiun': 'MA',
  'Africa/Nouakchott': 'MA',
  // Algeria
  'Africa/Algiers': 'DZ',
  // Tunisia
  'Africa/Tunis': 'TN'
};

/**
 * Detect country from client timezone fallback
 */
export function detectCountryFromTimezone(): CountryCode {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      if (TIMEZONE_TO_COUNTRY[tz]) {
        return TIMEZONE_TO_COUNTRY[tz];
      }
      // If client timezone is clearly European/American/Asian international:
      if (
        tz.startsWith('Europe/') || 
        tz.startsWith('America/') || 
        tz.startsWith('Australia/') || 
        tz.startsWith('Pacific/') ||
        tz === 'UTC' ||
        tz === 'Etc/UTC' ||
        tz === 'Asia/Tokyo' ||
        tz === 'Asia/Singapore' ||
        tz === 'Asia/Shanghai' ||
        tz === 'Asia/Hong_Kong' ||
        tz === 'Asia/Seoul'
      ) {
        return 'INTL';
      }
    }
  } catch {
    /* ignore */
  }
  return 'SA';
}

/**
 * Dynamically detects student's country of entry using IP Geolocation APIs + Local Timezone heuristics
 */
export async function detectStudentCountry(forceRefresh = false): Promise<GeoDetectionResult> {
  // Check cached detection
  if (!forceRefresh) {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY) || localStorage.getItem(CACHE_KEY);
      if (cached) {
        return JSON.parse(cached) as GeoDetectionResult;
      }
    } catch {
      /* ignore */
    }
  }

  // Fallback default
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tzCountry = detectCountryFromTimezone();
  let detectedCountry: CountryCode = tzCountry;
  let city: string | undefined;
  let ip: string | undefined;

  // 1. Try ipwho.is (Free, CORS enabled, fast)
  try {
    const res = await fetch('https://ipwho.is/', { signal: AbortSignal.timeout(3500) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.country_code) {
        const cCode = data.country_code.toUpperCase() as CountryCode;
        if (SUPPORTED_COUNTRIES[cCode]) {
          detectedCountry = cCode;
        } else {
          detectedCountry = 'INTL';
        }
        city = data.city;
        ip = data.ip;
      }
    }
  } catch {
    // 2. Fallback to freeipapi.com
    try {
      const res2 = await fetch('https://freeipapi.com/api/json', { signal: AbortSignal.timeout(3000) });
      if (res2.ok) {
        const data2 = await res2.json();
        if (data2 && data2.countryCode) {
          const cCode = data2.countryCode.toUpperCase() as CountryCode;
          if (SUPPORTED_COUNTRIES[cCode]) {
            detectedCountry = cCode;
          } else {
            detectedCountry = 'INTL';
          }
          city = data2.cityName;
          ip = data2.ipAddress;
        }
      }
    } catch {
      // Keep timezone-derived country
    }
  }

  const result: GeoDetectionResult = {
    country: detectedCountry,
    countryName: SUPPORTED_COUNTRIES[detectedCountry]?.nameAr || 'المملكة العربية السعودية',
    city,
    ip,
    isAutoDetected: true,
    timeZone: tz
  };

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
    localStorage.setItem(CACHE_KEY, JSON.stringify(result));
  } catch {
    /* ignore */
  }

  return result;
}

/**
 * Adapt a student's profile & curriculum alignment according to their country, grade, education type, and track
 */
export function adaptProfileToCountry(
  profile: StudentProfile,
  country: CountryCode,
  educationType?: EducationType,
  educationTrack?: EducationTrack
): StudentProfile {
  const countryInfo = SUPPORTED_COUNTRIES[country] || SUPPORTED_COUNTRIES.SA;
  const nextType: EducationType = educationType || profile.educationType || countryInfo.availableTypes[0] || 'PUBLIC';
  const nextTrack: EducationTrack = educationTrack || profile.educationTrack || countryInfo.availableTracks[0] || 'GENERAL';

  // Align specialization with high school track if applicable
  let specialization = profile.specialization;
  if (['G10', 'G11', 'G12'].includes(profile.gradeLevel)) {
    if (nextTrack === 'CS_ENGINEERING' || nextTrack === 'HEALTH_LIFE' || nextTrack === 'SCIENCE_MATH' || nextTrack === 'SCIENCE_BIO') {
      specialization = 'STEM';
    } else if (nextTrack === 'SHARIA_HUMANITIES') {
      specialization = 'HUMANITIES';
    } else if (nextTrack === 'BUSINESS') {
      specialization = 'GENERAL';
    }
  } else {
    specialization = 'GENERAL';
  }

  return {
    ...profile,
    country,
    educationType: nextType,
    educationTrack: nextTrack,
    specialization,
    isAutoDetectedCountry: true
  };
}

/**
 * Get dynamic curriculum alignment object for any lecture or lesson
 */
export function getLectureCurriculumAlignment(
  country: CountryCode,
  subject: Subject,
  gradeLevel: GradeLevel,
  track: EducationTrack = 'GENERAL',
  lang: 'ar' | 'en' = 'ar'
) {
  const nationalInfo = getNationalTextbookInfo(country, subject, gradeLevel, track, lang);
  return {
    country,
    nationalStandardCode: nationalInfo.standardCode,
    curriculumBookName: nationalInfo.textbookName,
    ministry: nationalInfo.ministry,
    chapterNumber: 1,
    gradeLevel,
    semester: nationalInfo.semester
  };
}
