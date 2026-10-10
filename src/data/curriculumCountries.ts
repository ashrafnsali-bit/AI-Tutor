import type { CountryCode, EducationTrack, EducationType, GradeLevel, Language, Specialization, Subject, Lecture, LectureSection, Assessment } from '../types';
import { getNationalLessonOverrides, type NationalLessonOverride } from './nationalCurricula';

export interface CountryCurriculumInfo {
  code: CountryCode;
  flag: string;
  nameAr: string;
  nameEn: string;
  ministryAr: string;
  ministryEn: string;
  systemNameAr: string;
  systemNameEn: string;
  termDefaultAr: string;
  termDefaultEn: string;
  termsCount: number; // 2 or 3 terms
  currencyAr: string;
  currencyShortAr: string;
  currencyEn: string;
  currencyCode: string;
  capitalCityAr: string;
  capitalCityEn: string;
  culturalEventAr: string;
  culturalEventEn: string;
  hasHighSchoolTracks: boolean;
  availableTracks: EducationTrack[];
  availableTypes: EducationType[];
}

export const SUPPORTED_COUNTRIES: Record<CountryCode, CountryCurriculumInfo> = {
  SA: {
    code: 'SA',
    flag: '🇸🇦',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
    ministryEn: 'Ministry of Education - Kingdom of Saudi Arabia',
    systemNameAr: 'محتوى تعليمي مكيّف للسعودية (مطابقة المنهج الرسمي قيد التحقق)',
    systemNameEn: 'Saudi-adapted learning content (official curriculum alignment under review)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Trimester / Term 2',
    termsCount: 3,
    currencyAr: 'ريال سعودي',
    currencyShortAr: 'ريال',
    currencyEn: 'Saudi Riyal',
    currencyCode: 'SAR',
    capitalCityAr: 'الرياض',
    capitalCityEn: 'Riyadh',
    culturalEventAr: 'معرض الرياض الدولي للكتاب',
    culturalEventEn: 'Riyadh International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'CS_ENGINEERING', 'HEALTH_LIFE', 'BUSINESS', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC', 'INTERNATIONAL']
  },
  EG: {
    code: 'EG',
    flag: '🇪🇬',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    ministryAr: 'وزارة التربية والتعليم والتعليم الفني بمصر',
    ministryEn: 'Ministry of Education and Technical Education - Egypt',
    systemNameAr: 'المنهج المصري المعتمد (منظومة التعليم 2.0 المطورة)',
    systemNameEn: 'Official Egyptian National Curriculum (Edu 2.0)',
    termDefaultAr: 'الفصل الدراسي الثاني (الترم الثاني)',
    termDefaultEn: 'Second Semester / Term 2',
    termsCount: 2,
    currencyAr: 'جنيه مصري',
    currencyShortAr: 'جنيه',
    currencyEn: 'Egyptian Pound',
    currencyCode: 'EGP',
    capitalCityAr: 'القاهرة',
    capitalCityEn: 'Cairo',
    culturalEventAr: 'معرض القاهرة الدولي للكتاب',
    culturalEventEn: 'Cairo International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC', 'INTERNATIONAL']
  },
  SD: {
    code: 'SD',
    flag: '🇸🇩',
    nameAr: 'جمهورية السودان',
    nameEn: 'Sudan',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - جمهورية السودان',
    ministryEn: 'Federal Ministry of Education - Republic of Sudan',
    systemNameAr: 'المنهج السوداني القومي الجديد المحدث (نظام السلم التعليمي 6-3-3: الابتدائي، المتوسط، والثانوي)',
    systemNameEn: 'Official Sudanese National Curriculum (Updated 6-3-3 System)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'جنيه سوداني',
    currencyShortAr: 'جنيه',
    currencyEn: 'Sudanese Pound',
    currencyCode: 'SDG',
    capitalCityAr: 'الخرطوم',
    capitalCityEn: 'Khartoum',
    culturalEventAr: 'معرض الخرطوم الدولي للكتاب',
    culturalEventEn: 'Khartoum International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC']
  },
  AE: {
    code: 'AE',
    flag: '🇦🇪',
    nameAr: 'دولة الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    ministryAr: 'وزارة التربية والتعليم ومؤسسة الإمارات للتعليم المدرسي',
    ministryEn: 'Ministry of Education - UAE (Emirates Schools Establishment)',
    systemNameAr: 'المنهج الإماراتي المعتمد (نظام الحلقات والمسار العام والمتقدم)',
    systemNameEn: 'Official UAE National Curriculum (Cycles & Advanced Tracks)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Term 2',
    termsCount: 3,
    currencyAr: 'درهم إماراتي',
    currencyShortAr: 'درهم',
    currencyEn: 'UAE Dirham',
    currencyCode: 'AED',
    capitalCityAr: 'أبوظبي',
    capitalCityEn: 'Abu Dhabi',
    culturalEventAr: 'معرض الشارقة الدولي للكتاب',
    culturalEventEn: 'Sharjah International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'CS_ENGINEERING', 'HEALTH_LIFE', 'BUSINESS'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'INTERNATIONAL']
  },
  KW: {
    code: 'KW',
    flag: '🇰🇼',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    ministryAr: 'وزارة التربية بدولة الكويت',
    ministryEn: 'Ministry of Education - State of Kuwait',
    systemNameAr: 'المنهج الكويتي المعتمد (نظام الكفايات والتعليم العام)',
    systemNameEn: 'Official Kuwaiti National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'دينار كويتي',
    currencyShortAr: 'دينار',
    currencyEn: 'Kuwaiti Dinar',
    currencyCode: 'KWD',
    capitalCityAr: 'مدينة الكويت',
    capitalCityEn: 'Kuwait City',
    culturalEventAr: 'معرض الكويت الدولي للكتاب',
    culturalEventEn: 'Kuwait International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC']
  },
  JO: {
    code: 'JO',
    flag: '🇯🇴',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Jordan',
    ministryAr: 'وزارة التربية والتعليم بالمملكة الأردنية الهاشمية',
    ministryEn: 'Ministry of Education - Hashemite Kingdom of Jordan',
    systemNameAr: 'المنهج الأردني المعتمد (مناهج كولينز الوطنية المطورة والتوجيهي)',
    systemNameEn: 'Official Jordanian National Curriculum (Collins & Tawjihi)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'دينار أردني',
    currencyShortAr: 'دينار',
    currencyEn: 'Jordanian Dinar',
    currencyCode: 'JOD',
    capitalCityAr: 'عمّان',
    capitalCityEn: 'Amman',
    culturalEventAr: 'معرض عمّان الدولي للكتاب',
    culturalEventEn: 'Amman International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'HEALTH_LIFE', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE']
  },
  OM: {
    code: 'OM',
    flag: '🇴🇲',
    nameAr: 'سلطنة عُمان',
    nameEn: 'Oman',
    ministryAr: 'وزارة التربية والتعليم بسلطنة عُمان',
    ministryEn: 'Ministry of Education - Sultanate of Oman',
    systemNameAr: 'المنهج العُماني المعتمد (التعليم الأساسي وسلاسل كامبريدج المطبقة)',
    systemNameEn: 'Official Omani National Curriculum (Basic Education)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'ريال عُماني',
    currencyShortAr: 'ريال',
    currencyEn: 'Omani Rial',
    currencyCode: 'OMR',
    capitalCityAr: 'مسقط',
    capitalCityEn: 'Muscat',
    culturalEventAr: 'معرض مسقط الدولي للكتاب',
    culturalEventEn: 'Muscat International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC']
  },
  QA: {
    code: 'QA',
    flag: '🇶🇦',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    ministryAr: 'وزارة التربية والتعليم والتعليم العالي بدولة قطر',
    ministryEn: 'Ministry of Education and Higher Education - Qatar',
    systemNameAr: 'المنهج القطري المعتمد (معايير المناهج التعليمية الوطنية)',
    systemNameEn: 'Official Qatari National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'ريال قطري',
    currencyShortAr: 'ريال',
    currencyEn: 'Qatari Riyal',
    currencyCode: 'QAR',
    capitalCityAr: 'الدوحة',
    capitalCityEn: 'Doha',
    culturalEventAr: 'معرض الدوحة الدولي للكتاب',
    culturalEventEn: 'Doha International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'CS_ENGINEERING', 'HEALTH_LIFE', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'INTERNATIONAL']
  },
  BH: {
    code: 'BH',
    flag: '🇧🇭',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    ministryAr: 'وزارة التربية والتعليم بمملكة البحرين',
    ministryEn: 'Ministry of Education - Kingdom of Bahrain',
    systemNameAr: 'المنهج البحريني المعتمد (التعليم الأساسي وتوحيد المسارات)',
    systemNameEn: 'Official Bahraini National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'دينار بحريني',
    currencyShortAr: 'دينار',
    currencyEn: 'Bahraini Dinar',
    currencyCode: 'BHD',
    capitalCityAr: 'المنامة',
    capitalCityEn: 'Manama',
    culturalEventAr: 'معرض البحرين الدولي للكتاب',
    culturalEventEn: 'Bahrain International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'BUSINESS', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE']
  },
  IQ: {
    code: 'IQ',
    flag: '🇮🇶',
    nameAr: 'جمهورية العراق',
    nameEn: 'Iraq',
    ministryAr: 'وزارة التربية العراقية',
    ministryEn: 'Ministry of Education - Republic of Iraq',
    systemNameAr: 'المنهج العراقي المعتمد (التعليم الابتدائي والفرع العلمي والأدبي)',
    systemNameEn: 'Official Iraqi National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'دينار عراقي',
    currencyShortAr: 'دينار',
    currencyEn: 'Iraqi Dinar',
    currencyCode: 'IQD',
    capitalCityAr: 'بغداد',
    capitalCityEn: 'Baghdad',
    culturalEventAr: 'معرض بغداد الدولي للكتاب',
    culturalEventEn: 'Baghdad International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC']
  },
  MA: {
    code: 'MA',
    flag: '🇲🇦',
    nameAr: 'المملكة المغربية',
    nameEn: 'Morocco',
    ministryAr: 'وزارة التربية الوطنية والتعليم الأولي والرياضة',
    ministryEn: 'Ministry of National Education - Kingdom of Morocco',
    systemNameAr: 'المنهاج المغربي المعتمد (المنهاج المنقح للابتدائي وسلك البكالوريا)',
    systemNameEn: 'Official Moroccan National Curriculum',
    termDefaultAr: 'الدورة الثانية',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    currencyAr: 'درهم مغربي',
    currencyShortAr: 'درهم',
    currencyEn: 'Moroccan Dirham',
    currencyCode: 'MAD',
    capitalCityAr: 'الرباط',
    capitalCityEn: 'Rabat',
    culturalEventAr: 'المعرض الدولي للنشر والكتاب بالرباط',
    culturalEventEn: 'Rabat International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'INTERNATIONAL']
  },
  DZ: {
    code: 'DZ',
    flag: '🇩🇿',
    nameAr: 'الجمهورية الجزائرية',
    nameEn: 'Algeria',
    ministryAr: 'وزارة التربية الوطنية بالجمهورية الجزائرية',
    ministryEn: 'Ministry of National Education - Algeria',
    systemNameAr: 'المنهاج الجزائري المعتمد (مناهج الجيل الثاني وشعب البكالوريا)',
    systemNameEn: 'Official Algerian National Curriculum (Second Generation)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Term',
    termsCount: 3,
    currencyAr: 'دينار جزائري',
    currencyShortAr: 'دينار',
    currencyEn: 'Algerian Dinar',
    currencyCode: 'DZD',
    capitalCityAr: 'الجزائر',
    capitalCityEn: 'Algiers',
    culturalEventAr: 'صالون الجزائر الدولي للكتاب',
    culturalEventEn: 'Algiers International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE']
  },
  TN: {
    code: 'TN',
    flag: '🇹🇳',
    nameAr: 'الجمهورية التونسية',
    nameEn: 'Tunisia',
    ministryAr: 'وزارة التربية بالجمهورية التونسية',
    ministryEn: 'Ministry of Education - Republic of Tunisia',
    systemNameAr: 'البرنامج التعليمي التونسي المعتمد (التعليم الأساسي وشعب الباكالوريا)',
    systemNameEn: 'Official Tunisian National Curriculum',
    termDefaultAr: 'الثلاثي الثاني',
    termDefaultEn: 'Second Trimester',
    termsCount: 3,
    currencyAr: 'دينار تونسي',
    currencyShortAr: 'دينار',
    currencyEn: 'Tunisian Dinar',
    currencyCode: 'TND',
    capitalCityAr: 'تونس',
    capitalCityEn: 'Tunis',
    culturalEventAr: 'معرض تونس الدولي للكتاب',
    culturalEventEn: 'Tunis International Book Fair',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'CS_ENGINEERING', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE']
  },
  INTL: {
    code: 'INTL',
    flag: '🌍',
    nameAr: 'المعايير الدولية والمناهج العالمية',
    nameEn: 'International / General Standards',
    ministryAr: 'معايير التعليم الدولية ومناهج العلوم والرياضيات العالمية',
    ministryEn: 'International Academic & Pedagogical Standards (US/IB/UK)',
    systemNameAr: 'المنهج الدولي المعياري المعتمد (Common Core & STEM)',
    systemNameEn: 'International General Curriculum (Common Core & STEM)',
    termDefaultAr: 'الفصل الثاني',
    termDefaultEn: 'Term 2',
    termsCount: 2,
    currencyAr: 'دولار أمريكي',
    currencyShortAr: '$',
    currencyEn: 'US Dollar',
    currencyCode: 'USD',
    capitalCityAr: 'نيويورك / لندن',
    capitalCityEn: 'Global Centers',
    culturalEventAr: 'المؤتمر الدولي للتعليم والابتكار',
    culturalEventEn: 'Global Education Forum',
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'CS_ENGINEERING', 'HEALTH_LIFE', 'BUSINESS', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'INTERNATIONAL']
  }
};

export const ACTIVE_CURRICULUM_COUNTRIES: readonly CountryCode[] = ['SA', 'EG', 'SD'];

export const TRACK_LABELS: Record<EducationTrack, { ar: string; en: string; descAr: string }> = {
  GENERAL: {
    ar: 'المسار العام',
    en: 'General Track',
    descAr: 'يشمل المهارات والعلوم الأساسية المتنوعة وفق متطلبات المرحلة'
  },
  CS_ENGINEERING: {
    ar: 'مسار علوم الحاسب والهندسة',
    en: 'Computer Science & Engineering',
    descAr: 'البرمجة، الخوارزميات، الرياضيات المتقدمة، الفيزياء الهندسية، والذكاء الاصطناعي'
  },
  HEALTH_LIFE: {
    ar: 'مسار الصحة والحياة',
    en: 'Health & Life Sciences',
    descAr: 'الأحياء المتقدمة، الكيمياء العضوية والحيوية، وعلم وظائف الأعضاء'
  },
  BUSINESS: {
    ar: 'مسار إدارة الأعمال والمالية',
    en: 'Business & Administration',
    descAr: 'الإحصاء التطبيقي، الاقتصاد، مبادئ الإدارة، والتقنية المالية'
  },
  SHARIA_HUMANITIES: {
    ar: 'المسار الشرعي والإنساني',
    en: 'Sharia & Humanities',
    descAr: 'العلوم الشرعية، أصول الفقه، علوم القرآن، والأدب والنحو العربي المتقدم'
  },
  SCIENCE_MATH: {
    ar: 'شعبة العلمي رياضة / العلوم الرياضية',
    en: 'Mathematical Sciences',
    descAr: 'التفاضل والتكامل، الجبر والهندسة الفراغية، والميكانيكا الفيزيائية'
  },
  SCIENCE_BIO: {
    ar: 'شعبة العلمي علوم / العلوم التجريبية',
    en: 'Natural & Biological Sciences',
    descAr: 'الجيولوجيا، الأحياء الوراثية، والكيمياء التحليلية'
  }
};

export function getSpecializationForEducationTrack(track: EducationTrack): Specialization {
  switch (track) {
    case 'CS_ENGINEERING':
    case 'SCIENCE_MATH':
      return 'STEM';
    case 'HEALTH_LIFE':
    case 'SCIENCE_BIO':
      return 'HEALTH';
    case 'SHARIA_HUMANITIES':
      return 'HUMANITIES';
    case 'BUSINESS':
      return 'VOCATIONAL';
    case 'GENERAL':
      return 'GENERAL';
  }
}

export const EDUCATION_TYPE_LABELS: Record<EducationType, { ar: string; en: string; descAr: string }> = {
  PUBLIC: {
    ar: 'تعليم حكومي معتمد',
    en: 'Public National Education',
    descAr: 'وفق خطط ومناهج وزارة التعليم الرسمية للبلد'
  },
  PRIVATE: {
    ar: 'تعليم أهلي / خاص',
    en: 'Private Accredited School',
    descAr: 'مناهج الوزارة المعتمدة مع إثراءات لغوية وتطبيقية إضافية'
  },
  ISLAMIC: {
    ar: 'تعليم شرعي / أزهري',
    en: 'Islamic & Sharia Education',
    descAr: 'تركيز مكثف على العلوم الإسلامية والعربية إلى جانب المواد العلمية'
  },
  INTERNATIONAL: {
    ar: 'تعليم دولي / لغات',
    en: 'International / Advanced STEM',
    descAr: 'معايير علمية دولية ثنائية اللغة معتمدة'
  }
};

export function getCountryInfo(code?: CountryCode): CountryCurriculumInfo {
  if (!code || !SUPPORTED_COUNTRIES[code]) {
    return SUPPORTED_COUNTRIES.SA;
  }
  return SUPPORTED_COUNTRIES[code];
}

export function isActiveCurriculumCountry(code?: CountryCode): boolean {
  return !!code && ACTIVE_CURRICULUM_COUNTRIES.includes(code);
}

export function getActiveCurriculumCountry(code?: CountryCode): CountryCode {
  if (code && isActiveCurriculumCountry(code)) return code;
  return 'SA';
}

export function normalizeEducationTypeForCountry(
  country: CountryCode,
  preferredType?: EducationType
): EducationType {
  const availableTypes = getCountryInfo(country).availableTypes;
  return preferredType && availableTypes.includes(preferredType)
    ? preferredType
    : availableTypes[0] || 'PUBLIC';
}

export function normalizeEducationTrackForCountry(
  country: CountryCode,
  preferredTrack?: EducationTrack
): EducationTrack {
  const availableTracks = getCountryInfo(country).availableTracks;
  return preferredTrack && availableTracks.includes(preferredTrack)
    ? preferredTrack
    : availableTracks[0] || 'GENERAL';
}

export function getCountryDisplayLabel(code: CountryCode, lang: Language = 'ar'): string {
  const info = getCountryInfo(code);
  return lang === 'en' 
    ? `${info.flag} ${info.nameEn}` 
    : `${info.flag} ${info.nameAr} (${info.systemNameAr})`;
}

const GRADE_NAMES_AR: Record<GradeLevel, string> = {
  G1: 'الصف الأول الابتدائي',
  G2: 'الصف الثاني الابتدائي',
  G3: 'الصف الثالث الابتدائي',
  G4: 'الصف الرابع الابتدائي',
  G5: 'الصف الخامس الابتدائي',
  G6: 'الصف السادس الابتدائي',
  G7: 'الصف الأول الإعدادي / المتوسط',
  G8: 'الصف الثاني الإعدادي / المتوسط',
  G9: 'الصف الثالث الإعدادي / المتوسط',
  G10: 'الصف الأول الثانوي',
  G11: 'الصف الثاني الثانوي',
  G12: 'الصف الثالث الثانوي'
};

const GRADE_NAMES_EN: Record<GradeLevel, string> = {
  G1: 'Grade 1 / Primary 1',
  G2: 'Grade 2 / Primary 2',
  G3: 'Grade 3 / Primary 3',
  G4: 'Grade 4 / Primary 4',
  G5: 'Grade 5 / Primary 5',
  G6: 'Grade 6 / Primary 6',
  G7: 'Grade 7 / Middle 1',
  G8: 'Grade 8 / Middle 2',
  G9: 'Grade 9 / Middle 3',
  G10: 'Grade 10 / High 1',
  G11: 'Grade 11 / High 2',
  G12: 'Grade 12 / High 3'
};

export function isSaudiPublicCommonYearEnglishAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G10' && educationType === 'PUBLIC';
}

export function isSaudiPublicG5EnglishAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G5' && educationType === 'PUBLIC';
}

export function isSaudiPublicG3EnglishAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G3' && educationType === 'PUBLIC';
}

export function isSaudiPublicG2EnglishAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G2' && educationType === 'PUBLIC';
}

export function isSaudiPublicG11EnglishAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G11' && educationType === 'PUBLIC';
}

export function isSaudiPublicEnglishAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return isSaudiPublicG2EnglishAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicG3EnglishAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicG5EnglishAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicCommonYearEnglishAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicG11EnglishAvailable(country, gradeLevel, educationType);
}

export function isSaudiPublicG5TajweedAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G5' && educationType === 'PUBLIC';
}

export function isSaudiPublicG4TajweedAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G4' && educationType === 'PUBLIC';
}

export function isSaudiPublicG6TajweedAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G6' && educationType === 'PUBLIC';
}

export function isSaudiPublicTajweedAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return isSaudiPublicG4TajweedAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicG5TajweedAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicG6TajweedAvailable(country, gradeLevel, educationType);
}

export function isSaudiPublicG6QuranRecitationAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G6' && educationType === 'PUBLIC';
}

export function isSaudiPublicG5QuranRecitationAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G5' && educationType === 'PUBLIC';
}

export function isSaudiPublicQuranRecitationAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return isSaudiPublicG5QuranRecitationAvailable(country, gradeLevel, educationType) ||
    isSaudiPublicG6QuranRecitationAvailable(country, gradeLevel, educationType);
}

export function isSaudiPublicG6VisualArtsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G6' && educationType === 'PUBLIC';
}

export function isSaudiPublicG3VisualArtsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G3' && educationType === 'PUBLIC';
}

export function isSaudiPublicG2VisualArtsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G2' && educationType === 'PUBLIC';
}

export function isSaudiPublicG4VisualArtsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G4' && educationType === 'PUBLIC';
}

export function isSaudiPublicG5VisualArtsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G5' && educationType === 'PUBLIC';
}

export function isSaudiPublicG6IslamicStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G6' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG4IslamicStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G4' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG3IslamicStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G3' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG2IslamicStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G2' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG5IslamicStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G5' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG6PrimaryMathAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G6' && educationType === 'PUBLIC';
}

export function isSaudiPublicG5PrimaryMathAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G5' && educationType === 'PUBLIC';
}

export function isSaudiPublicG4PrimaryMathAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G4' && educationType === 'PUBLIC';
}

export function isSaudiPublicG3PrimaryMathAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined
): boolean {
  return country === 'SA' && gradeLevel === 'G3' && educationType === 'PUBLIC';
}

export function isSaudiPublicG4PrimaryArabicAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G4' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG3PrimaryArabicAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G3' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG2PrimaryArabicAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G2' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG6DigitalSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G6' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG5DigitalSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G5' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG6LifeSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G6' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG4LifeSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G4' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG3LifeSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G3' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG5LifeSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G5' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicLifeSkillsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return isSaudiPublicG3LifeSkillsAvailable(country, gradeLevel, educationType, track) ||
    isSaudiPublicG4LifeSkillsAvailable(country, gradeLevel, educationType, track) ||
    isSaudiPublicG5LifeSkillsAvailable(country, gradeLevel, educationType, track) ||
    isSaudiPublicG6LifeSkillsAvailable(country, gradeLevel, educationType, track);
}

export function isSaudiPublicG6SocialStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G6' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG4SocialStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G4' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG5SocialStudiesAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G5' &&
    educationType === 'PUBLIC' &&
    track === 'GENERAL';
}

export function isSaudiPublicG11PhysicsAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G11' &&
    educationType === 'PUBLIC' &&
    (track === 'CS_ENGINEERING' || track === 'HEALTH_LIFE');
}

export function isSaudiPublicG11BiologyAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G11' &&
    educationType === 'PUBLIC' &&
    track === 'HEALTH_LIFE';
}

export function isSaudiPublicG11HealthScienceAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G11' &&
    educationType === 'PUBLIC' &&
    track === 'HEALTH_LIFE';
}

export function isSaudiPublicBusinessG11DigitalTechnologyAvailable(
  country: string,
  gradeLevel: string | undefined,
  educationType: EducationType | undefined,
  track: EducationTrack | undefined
): boolean {
  return country === 'SA' &&
    gradeLevel === 'G11' &&
    educationType === 'PUBLIC' &&
    track === 'BUSINESS';
}

/**
 * Returns accurate national textbook and chapter information tailored by Country, Subject, Grade & Track
 */
export function getNationalTextbookInfo(
  country: CountryCode,
  subject: Subject,
  gradeLevel: GradeLevel,
  track: EducationTrack = 'GENERAL',
  lang: Language = 'ar',
  educationType: EducationType = 'PUBLIC'
): { textbookName: string; ministry: string; standardCode: string; semester: string } {
  const cInfo = getCountryInfo(country);
  const isEn = lang === 'en';
  const gradeAr = GRADE_NAMES_AR[gradeLevel] || gradeLevel;
  const gradeEn = GRADE_NAMES_EN[gradeLevel] || gradeLevel;

  let textbookName = '';

  const isMiddle = ['G7', 'G8', 'G9'].includes(gradeLevel);

  // Country-specific textbook names
  switch (country) {
    case 'SA': // Saudi Arabia
      if (subject === 'PRIMARY_MATH') {
        textbookName = isSaudiPublicG3PrimaryMathAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Mathematics — Saudi public Grade 3, Part One of the curriculum; all five chapters and indexed titles and pages verified against PDF contents pp. 6–7; cover states 1448 AH/2026 CE and internal publication record states 1446 AH'
            : 'الرياضيات — الصف الثالث الابتدائي الحكومي، الجزء الأول من المقرر؛ الفصول الخمسة وعناوينها وصفحاتها مطابقة لفهرسي PDF ص 6–7؛ الغلاف يذكر 1448هـ/2026م وبيانات النشر الداخلية تذكر 1446هـ'
          : isSaudiPublicG4PrimaryMathAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Mathematics — Saudi public Grade 4, Part One, 1448 AH/2026 edition as identified on the cover; printed contents pp. 6–7 verified; internal publication record states 1446 AH'
            : 'الرياضيات — الصف الرابع الابتدائي الحكومي، الجزء الأول، طبعة 1448هـ/2026م بحسب الغلاف؛ الفهرس المطبوع ص 6–7 موثق، وسجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG5PrimaryMathAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Mathematics — Saudi public Grade 5, Part One of the curriculum, 1448 AH/2026 edition; contents pages 6–7 verified; internal publication record states 1446 AH'
            : 'الرياضيات — الصف الخامس الابتدائي، التعليم الحكومي، الجزء الأول من المقرر، طبعة 1448هـ/2026م؛ الفهرس ص 6–7 موثق، وسجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG6PrimaryMathAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Mathematics — Saudi public Grade 6, Part One of the curriculum, 1448 AH/2026 edition; chapter and lesson titles and page references verified against PDF contents pp. 6–7'
            : 'الرياضيات — الصف السادس الابتدائي، التعليم الحكومي، الجزء الأول من المقرر، طبعة 1448هـ/2026م؛ عناوين الفصول والدروس وأرقام الصفحات مطابقة للفهرس ص 6–7'
          : gradeLevel === 'G3'
          ? isEn
            ? 'Saudi Grade 3 Mathematics — textbook edition for this education type has not been verified'
            : 'رياضيات الصف الثالث السعودي — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم'
          : `الرياضيات (${gradeAr}) - وزارة التعليم السعودية (نظام الفصول الثلاثة)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = isSaudiPublicG2PrimaryArabicAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Lughati — Saudi public Grade 2, Part One of the curriculum; cover states 1448 AH/2026 and internal publication record states 1446 AH; printed contents p. 6 and main lesson openings reviewed'
            : 'لغتي — الصف الثاني الابتدائي الحكومي، الجزء الأول من المقرر؛ الغلاف يذكر 1448هـ/2026م وسجل النشر الداخلي يذكر 1446هـ؛ الفهرس المطبوع ص 6 ومطالع الدروس الرئيسة موثقة'
          : isSaudiPublicG3PrimaryArabicAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Lughati — Saudi public Grade 3, Part One of the curriculum; cover states 1448 AH/2026 and internal PDF publication record states 1446 AH; printed contents p. 6 and main lesson openings reviewed'
            : 'لغتي — الصف الثالث الابتدائي الحكومي، الجزء الأول من المقرر؛ الغلاف يذكر 1448هـ/2026م وسجل النشر الداخلي يذكر 1446هـ؛ الفهرس المطبوع ص 6 ومطالع الدروس الرئيسة موثقة'
          : isSaudiPublicG4PrimaryArabicAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Lughati Al-Jameelah — Saudi public Grade 4, Part One, 1448 AH/2026 edition as identified on the cover; printed contents pp. 9–10 verified; PDF metadata conflicts with the printed cover and contents'
            : 'لغتي الجميلة — الصف الرابع الابتدائي الحكومي، الجزء الأول، طبعة 1448هـ/2026م بحسب الغلاف؛ الفهرس المطبوع ص 9–10 موثق، مع تعارض بيانات PDF الداخلية مع الغلاف والفهرس'
          : gradeLevel === 'G5' && educationType === 'PUBLIC'
          ? isEn
            ? 'Lughati Al-Jameelah — Saudi public Grade 5, Part One, 1448 AH/2026 edition; component titles and page references verified against contents pp. 9–10'
            : 'لغتي الجميلة — الصف الخامس الابتدائي، الجزء الأول، طبعة 1448هـ/2026م؛ عناوين المكونات وصفحاتها مطابقة للفهرس ص 9–10'
          : gradeLevel === 'G6' && educationType === 'PUBLIC'
            ? 'لغتي الجميلة — الصف السادس الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م؛ عناوين المكونات وصفحاتها مطابقة للفهرس ص 9–10'
            : `لغتي الجميلة (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = gradeLevel === 'G3' && educationType === 'PUBLIC'
          ? isEn
            ? 'Science — Saudi public Grade 3, Part One of the curriculum; 36 introductory, chapter, review, and test entries checked against the printed contents on pp. 4–5; cover states 1448 AH/2026 CE and internal publication record states 1446 AH; main lesson openings reviewed'
            : 'العلوم — الصف الثالث الابتدائي الحكومي، الجزء الأول من المقرر؛ 36 موضوعًا للمقدمة والفصول والمراجعات والاختبارات مطابقة للفهرسين المطبوعين ص 4–5؛ الغلاف يذكر 1448هـ/2026م وبيانات النشر الداخلية تذكر 1446هـ؛ رُوجعت مطالع الدروس الرئيسة'
          : gradeLevel === 'G3'
          ? isEn
            ? 'Saudi Grade 3 Science — textbook edition for this education type has not been verified'
            : 'علوم الصف الثالث السعودي — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم'
          : gradeLevel === 'G4' && educationType === 'PUBLIC'
          ? isEn
            ? 'Science — Saudi public Grade 4, Part One of the curriculum; cover states 1448 AH/2026 CE and internal publication record states 1446 AH; main lesson, review, and test titles and pages verified against contents pp. 5–6, and main lesson openings reviewed'
            : 'العلوم — الصف الرابع الابتدائي، التعليم الحكومي، الجزء الأول من المقرر؛ الغلاف يذكر 1448هـ/2026م وسجل النشر الداخلي يذكر 1446هـ؛ عناوين الدروس الرئيسة والمراجعات والاختبارات وصفحاتها مطابقة للفهرس ص 5–6، ورُوجعت مطالع الدروس الرئيسة'
          : gradeLevel === 'G5' && educationType === 'PUBLIC'
          ? isEn
            ? 'Science — Saudi Grade 5, Part One of the curriculum, 1448 AH/2026 edition; component titles and page references verified against contents pp. 5–6'
            : 'العلوم — الصف الخامس الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م؛ عناوين المكونات وصفحاتها مطابقة للفهرس ص 5–6'
          : gradeLevel === 'G6' && educationType === 'PUBLIC'
            ? isEn
              ? 'Science — Saudi Grade 6, Part One of the curriculum, 1448 AH/2026 edition; component titles and page references verified against contents pp. 4–5'
              : 'العلوم — الصف السادس الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م؛ عناوين المكونات وصفحاتها مطابقة للفهرس ص 4–5'
            : `العلوم (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`;
      } else if (subject === 'TAJWEED') {
        textbookName = isSaudiPublicG4TajweedAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Optional Tajweed course — Saudi public Grade 4, Qur’an Memorization Schools textbook; title page says Part One while the publication record describes it as undivided; cover states 1448 AH/2026 CE and the record states 1446 AH; lesson titles and pages verified against contents p. 7'
            : 'مقرر تجويد اختياري — كتاب الصف الرابع لمدارس تحفيظ القرآن الكريم؛ صفحة العنوان تسميه الجزء الأول، بينما يصفه سجل النشر بأنه غير مجزأ؛ الغلاف يذكر 1448هـ/2026م وسجل النشر 1446هـ؛ عناوين الدروس وصفحاتها مطابقة للفهرس ص 7'
          : isSaudiPublicG5TajweedAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Optional additional Tajweed course for Grade 5, based on the Qur’an Memorization Schools textbook, Part One, 1448 AH/2026 cover edition; lesson titles and page references verified against contents p. 7; internal publication record states 1446 AH'
            : 'مقرر تجويد اختياري إضافي للصف الخامس، مستند إلى كتاب مدارس تحفيظ القرآن الكريم، الجزء الأول، طبعة الغلاف 1448هـ/2026م؛ عناوين الدروس وصفحاتها مطابقة للفهرس ص 7؛ بيانات النشر الداخلية تذكر 1446هـ'
          : isSaudiPublicG6TajweedAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Optional additional Tajweed course for Grade 6, based on the Qur’an Memorization Schools textbook, Part One, 1448 AH/2026; lesson titles and page references verified against contents p. 7'
            : 'مقرر تجويد اختياري إضافي للصف السادس، مستند إلى كتاب مدارس تحفيظ القرآن الكريم، الجزء الأول، طبعة 1448هـ/2026م؛ عناوين الدروس وصفحاتها مطابقة للفهرس ص 7'
          : isEn
            ? 'Tajweed (not available for this grade or education type)'
            : 'التجويد (غير متاح لهذا الصف أو نوع التعليم)';
      } else if (subject === 'QURAN_RECITATION') {
        textbookName = isSaudiPublicG5QuranRecitationAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Recitation of the Holy Quran and Tajweed — Saudi public Grade 5, full undivided textbook; 1448 AH/2026 cover edition; contents headings and page references verified against PDF pp. 8–10; internal publication record states 1446 AH'
            : 'تلاوة القرآن الكريم وتجويده — الصف الخامس الابتدائي، التعليم الحكومي، كتاب كامل غير مجزأ؛ طبعة الغلاف 1448هـ/2026م؛ عناوين الفهرس وأرقام الصفحات موثقة في PDF ص 8–10؛ سجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG6QuranRecitationAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Recitation of the Holy Quran and Tajweed — Saudi public Grade 6, Part One, 1448 AH/2026; contents headings and page references verified against PDF pp. 6–8'
            : 'تلاوة القرآن الكريم وتجويده — الصف السادس الابتدائي، التعليم الحكومي، الجزء الأول، طبعة 1448هـ/2026م؛ عناوين الفهرس وأرقام الصفحات مطابقة للفهرس ص 6–8'
          : isEn
            ? 'Quran Recitation and Tajweed (not available for this grade or education type)'
            : 'تلاوة القرآن الكريم وتجويده (غير متاح لهذا الصف أو نوع التعليم)';
      } else if (subject === 'VISUAL_ARTS') {
        textbookName = isSaudiPublicG2VisualArtsAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Art Education — Saudi public Grade 2, Part One of the curriculum; 4 units and 10 topics checked against PDF contents pp. 7–8; cover states 1448 AH/2026 CE and internal publication data states 1446 AH'
            : 'التربية الفنية — الصف الثاني الابتدائي الحكومي، الجزء الأول من المقرر؛ 4 وحدات و10 موضوعات مطابقة لفهرس PDF ص 7–8؛ الغلاف يذكر 1448هـ/2026م وبيانات النشر الداخلية تذكر 1446هـ'
          : isSaudiPublicG3VisualArtsAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Art Education — Saudi public Grade 3, Part One of the curriculum; 4 units and 8 topics verified against PDF contents p. 8; cover states 1448 AH/2026 CE and internal publication data states 1446 AH'
            : 'التربية الفنية — الصف الثالث الابتدائي الحكومي، الجزء الأول من المقرر؛ 4 وحدات و8 موضوعات مطابقة لفهرس PDF ص 8؛ الغلاف يذكر 1448هـ/2026م وبيانات النشر الداخلية تذكر 1446هـ'
          : isSaudiPublicG4VisualArtsAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Art Education — Saudi public Grade 4, Parts One and Two, 1448 AH/2026 cover edition; 9 units and 19 topics verified against PDF contents pp. 8–9 and 98–99; internal publication data on PDF p. 2 states 1446 AH'
            : 'التربية الفنية — الصف الرابع الابتدائي، التعليم الحكومي، الجزآن الأول والثاني، طبعة الغلاف 1448هـ/2026م؛ 9 وحدات و19 موضوعًا مطابقة لفهارس PDF ص 8–9 و98–99؛ بيانات النشر الداخلية في PDF ص 2 تذكر 1446هـ'
          : isSaudiPublicG5VisualArtsAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Art Education — Saudi public Grade 5, Parts One and Two, 1448 AH/2026 cover edition; 9 units and 20 topics verified against PDF contents pp. 10 and 115–116; internal publication data states 1446 AH'
            : 'التربية الفنية — الصف الخامس الابتدائي، التعليم الحكومي، الجزآن الأول والثاني، طبعة الغلاف 1448هـ/2026م؛ 9 وحدات و20 موضوعًا مطابقة لفهارس PDF ص 10 و115–116؛ بيانات النشر الداخلية تذكر 1446هـ'
          : isSaudiPublicG6VisualArtsAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Art Education — Saudi public Grade 6, 1448 AH/2026 edition; unit and topic titles and page references verified against PDF contents p. 8'
            : 'التربية الفنية — الصف السادس الابتدائي، التعليم الحكومي، طبعة 1448هـ/2026م؛ عناوين الوحدات والموضوعات وأرقام الصفحات مطابقة للفهرس ص 8'
          : isEn
            ? 'Art Education (not available for this grade or education type)'
            : 'التربية الفنية (غير متاحة لهذا الصف أو نوع التعليم)';
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = isSaudiPublicG2IslamicStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Islamic Studies — Saudi public Grade 2, Part One of the curriculum; cover states 1448 AH/2026 and the internal publication record states 1446 AH; Quran plan and both contents indexes checked against PDF pp. 6–7'
            : 'الدراسات الإسلامية — الصف الثاني الابتدائي الحكومي، الجزء الأول من المقرر؛ الغلاف يذكر 1448هـ/2026م وسجل النشر الداخلي يذكر 1446هـ؛ خطة القرآن وفهرسا PDF ص 6–7 موثقان'
          : isSaudiPublicG3IslamicStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Islamic Studies — Saudi public Grade 3, Part One of the curriculum, 1448 AH/2026 cover edition; Quran plan and all 18 Tawheed and Fiqh and Conduct lessons checked against PDF contents pp. 6–7; internal publication record states 1446 AH'
            : 'الدراسات الإسلامية — الصف الثالث الابتدائي الحكومي، الجزء الأول من المقرر، طبعة الغلاف 1448هـ/2026م؛ خطة القرآن و18 درسًا في التوحيد والفقه والسلوك مطابقة لفهرسي PDF ص 6–7؛ سجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG4IslamicStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Islamic Studies — Saudi public Grade 4, Parts One and Two, 1448 AH/2026 cover edition; Quran plan and 62 Tawheed, Hadith and Seerah, and Fiqh topics checked against PDF contents pp. 5–12 and 126–129; internal publication record states 1446 AH'
            : 'الدراسات الإسلامية — الصف الرابع الابتدائي، التعليم الحكومي، الجزآن الأول والثاني، طبعة الغلاف 1448هـ/2026م؛ خطة القرآن و62 موضوعًا في التوحيد والحديث والسيرة والفقه مطابقة لفهارس PDF ص 5–12 و126–129؛ سجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG5IslamicStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Islamic Studies — Saudi public Grade 5, Part One, 1448 AH/2026 cover edition; Quran plan and Tawheed, Hadith and Seerah, and Fiqh contents and page references verified against the supplied PDF contents'
            : 'الدراسات الإسلامية — الصف الخامس الابتدائي، الجزء الأول، التعليم الحكومي، طبعة الغلاف 1448هـ/2026م؛ خطة القرآن وفهارس التوحيد والحديث والسيرة والفقه وصفحاتها مطابقة لفهرس الكتاب المرفق'
          : isSaudiPublicG6IslamicStudiesAvailable(country, gradeLevel, educationType, track)
            ? isEn
              ? 'Islamic Studies — Saudi public Grade 6, 1448 AH/2026 cover edition; Quran, Tawheed, Hadith and Seerah, and Fiqh contents and page references verified against the supplied PDF; internal publication record states 1446 AH'
              : 'الدراسات الإسلامية — الصف السادس الابتدائي، التعليم الحكومي، طبعة الغلاف 1448هـ/2026م؛ فهارس القرآن والتوحيد والحديث والسيرة والفقه وصفحاتها مطابقة للكتاب المرفق؛ سجل النشر الداخلي يذكر 1446هـ'
            : isEn
              ? 'Saudi Islamic Studies (not available: textbook not verified for this grade, track, or education type)'
              : 'الدراسات الإسلامية السعودية (غير متاحة: لم يُتحقق من كتاب هذا الصف أو المسار أو نوع التعليم)';
      } else if (subject === 'LIFE_SKILLS') {
        textbookName = isSaudiPublicG3LifeSkillsAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills — Saudi public Grade 3, Part One, 1448 AH/2026 cover edition; two units and six lesson titles and printed page references checked against the unit topic lists on PDF pp. 8 and 44; openings on pp. 10, 18, 25, 35, 46, and 55 reviewed; internal publication record states 1446 AH'
            : 'المهارات الحياتية والأسرية — الصف الثالث الابتدائي الحكومي، الجزء الأول، طبعة الغلاف 1448هـ/2026م؛ وحدتان وستة عناوين دروس وصفحاتها مطابقة لقائمتي موضوعات الوحدتين في PDF ص 8 و44؛ روجعت مطالع الدروس ص 10 و18 و25 و35 و46 و55؛ سجل النشر الداخلي يذكر 1446هـ'
          : gradeLevel === 'G3'
          ? isEn
            ? 'Saudi Grade 3 Life and Family Skills — textbook edition for this education type and track has not been verified'
            : 'المهارات الحياتية والأسرية للصف الثالث السعودي — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار'
          : isSaudiPublicG4LifeSkillsAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills — Saudi public Grade 4, Part One, 1448 AH/2026 cover edition; 5 units and 10 lesson titles and page references checked against PDF contents p. 7; internal publication record states 1446 AH'
            : 'المهارات الحياتية والأسرية — الصف الرابع الابتدائي، التعليم الحكومي، الجزء الأول، طبعة الغلاف 1448هـ/2026م؛ خمس وحدات وعشرة دروس وصفحاتها مطابقة لفهرس PDF ص 7؛ سجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG5LifeSkillsAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills — Saudi public Grade 5, full undivided textbook, 1448 AH/2026 cover edition; 5 units and 8 lesson titles and page references checked against PDF contents p. 7; internal publication record states 1446 AH'
            : 'المهارات الحياتية والأسرية — الصف الخامس الابتدائي، التعليم الحكومي، كتاب كامل غير مجزأ، طبعة الغلاف 1448هـ/2026م؛ خمس وحدات وثمانية دروس وصفحاتها مطابقة لفهرس PDF ص 7؛ سجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG6LifeSkillsAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills — Saudi public Grade 6, Part One, 1448 AH/2026 cover edition; 5 units and 9 lesson titles and page references checked against PDF contents p. 7; internal publication record states 1446 AH'
            : 'المهارات الحياتية والأسرية — الصف السادس الابتدائي، التعليم الحكومي، الجزء الأول، طبعة الغلاف 1448هـ/2026م؛ خمس وحدات وتسعة دروس وصفحاتها مطابقة لفهرس PDF ص 7؛ سجل النشر الداخلي يذكر 1446هـ'
          : isEn
            ? `Life and Family Skills — textbook edition for ${gradeEn}, this track, and education type has not been verified`
            : `المهارات الحياتية والأسرية — لم يتم التحقق من الكتاب المناسب لـ ${gradeAr} ونوع التعليم والمسار المحددين`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `لغتي الخالدة (${gradeAr}) - وزارة التعليم السعودية`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`;
      } else if (subject === 'MATH') {
        textbookName = isMiddle
          ? `الرياضيات (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`
          : gradeLevel === 'G10' && educationType === 'PUBLIC'
          ? isEn
            ? 'Mathematics 1-1 - common first year, Saudi pathways system, 1448 AH/2026 edition, Semester 1; chapter topics verified against the supplied contents'
            : 'رياضيات 1-1 - السنة الأولى المشتركة، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ موضوعات الفصول مطابقة للفهرس المرفق'
          : gradeLevel === 'G10'
          ? isEn
            ? 'Saudi Grade 10 Mathematics - textbook edition for this education type has not been verified'
            : 'رياضيات الصف الأول الثانوي السعودية - لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم المحدد'
          : gradeLevel === 'G11' && educationType === 'PUBLIC' &&
            (track === 'GENERAL' || track === 'CS_ENGINEERING')
          ? isEn
            ? 'Mathematics 2-1 - Saudi pathways system, Grade 11, 1448 AH/2026 edition, Semester 1; chapter topics verified against the supplied contents'
            : 'رياضيات 2-1 - نظام المسارات، الصف الثاني الثانوي، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ موضوعات الفصول مطابقة للفهرس المرفق'
          : gradeLevel === 'G11'
          ? isEn
            ? 'Saudi Grade 11 Mathematics - textbook edition for this education type and track has not been verified'
            : 'رياضيات الصف الثاني الثانوي السعودية - لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : 'الرياضيات 3 (مسار علوم الحاسب والهندسة والمسار العام)';
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = country === 'SA' && gradeLevel === 'G4' && educationType === 'PUBLIC'
          ? isEn
            ? 'Digital Skills — Saudi public Grade 4, Part One, 1448 AH/2026 cover edition; 4 units and 15 lesson titles and page references verified against PDF contents pp. 7–10; internal publication data on PDF p. 2 states 1447 AH'
            : 'المهارات الرقمية — الصف الرابع الابتدائي، التعليم الحكومي، الجزء الأول، طبعة الغلاف 1448هـ/2026م؛ أربع وحدات و15 عنوان درس وصفحاتها مطابقة لفهرس PDF ص 7–10؛ بيانات النشر الداخلية في PDF ص 2 تذكر 1447هـ'
          : country === 'SA' && gradeLevel === 'G5'
          ? isSaudiPublicG5DigitalSkillsAvailable(country, gradeLevel, educationType, track)
            ? isEn
              ? 'Digital Skills — Saudi public Grade 5, Parts One and Two, 1448 AH/2026 cover edition; unit and lesson titles and page references verified against PDF contents pp. 7–11 and 239–241; internal publication record states 1447 AH'
              : 'المهارات الرقمية — الصف الخامس الابتدائي، التعليم الحكومي، الجزآن الأول والثاني، طبعة الغلاف 1448هـ/2026م؛ عناوين الوحدات والدروس وصفحاتها مطابقة لفهارس PDF ص 7–11 و239–241؛ بيان النشر الداخلي يذكر 1447هـ'
            : isEn
              ? 'Saudi Grade 5 Digital Skills (not available: verified edition is restricted to public General-track students)'
              : 'المهارات الرقمية للصف الخامس السعودي (غير متاحة: الكتاب المتحقق منه مخصص للتعليم الحكومي والمسار العام)'
          : gradeLevel === 'G6'
          ? isSaudiPublicG6DigitalSkillsAvailable(country, gradeLevel, educationType, track)
            ? isEn
              ? 'Digital Skills — Saudi public Grade 6, Parts One and Two, 1448 AH/2026 cover edition; unit and lesson titles and page references checked against PDF contents pp. 7–9 and 205–207; internal publication record states 1447 AH'
              : 'المهارات الرقمية — الصف السادس الابتدائي، التعليم الحكومي، الجزآن الأول والثاني، طبعة الغلاف 1448هـ/2026م؛ عناوين الوحدات والدروس وصفحاتها مطابقة لفهرسي PDF ص 7–9 و205–207؛ سجل النشر الداخلي يذكر 1447هـ'
            : isEn
              ? 'Saudi Grade 6 Digital Skills (not available: verified edition is restricted to public General-track students)'
              : 'المهارات الرقمية للصف السادس السعودي (غير متاحة: الكتاب المتحقق منه مخصص للتعليم الحكومي والمسار العام)'
          : isMiddle
          ? gradeLevel === 'G7'
            ? 'المهارات الرقمية (الصف الأول المتوسط، طبعة 1448–2026) - عناوين الدروس مطابقة؛ الشرح من إعداد المنصة'
            : gradeLevel === 'G8'
            ? 'المهارات الرقمية (الصف الثاني المتوسط، طبعة 1448–2026) - عناوين الدروس مطابقة؛ الشرح من إعداد المنصة'
            : 'المهارات الرقمية (الصف الثالث المتوسط، طبعة 1448–2026، الجزء الأول) - عناوين الدروس مطابقة؛ الشرح من إعداد المنصة'
          : gradeLevel === 'G10'
          ? 'التقنية الرقمية 1 (السنة الأولى المشتركة)'
          : gradeLevel === 'G11'
          ? isSaudiPublicBusinessG11DigitalTechnologyAvailable(country, gradeLevel, educationType, track)
            ? isEn
              ? 'Digital Technology 2 — Saudi public Grade 11, BM-coded Pathways edition, 1448 AH/2026, Semester 1; unit and lesson titles and page references verified against contents pp. 5–9'
              : 'التقنية الرقمية 2 — التعليم الحكومي، الصف الثاني الثانوي، نسخة عين ذات الرمز BM بنظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الوحدات والدروس وأرقام صفحاتها مطابقة للفهرس ص 5–9'
            : isEn
              ? 'Saudi Grade 11 digital technology — textbook edition for this education type and track has not been verified'
              : 'التقنية الرقمية للصف الثاني الثانوي — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : 'الذكاء الاصطناعي وإنترنت الأشياء (مسار علوم الحاسب والهندسة)';
      } else if (subject === 'PHYSICS') {
        textbookName = gradeLevel === 'G10'
          ? 'الفيزياء 1 (السنة الأولى المشتركة - نظام المسارات)'
          : gradeLevel === 'G11' && isSaudiPublicG11PhysicsAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Physics 2 — Saudi public second secondary, CS & Engineering or Health & Life, 1448 AH/2026 edition, Semester 1; chapter and lesson headings checked against the supplied contents'
            : 'الفيزياء 2 — التعليم الحكومي، الصف الثاني الثانوي، مسارا علوم الحاسب والهندسة والصحة والحياة، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الفصول والدروس مطابقة لفهرس الكتاب المرفق'
          : gradeLevel === 'G11'
          ? isEn
            ? 'Saudi Grade 11 Physics 2 — textbook edition for this education type and track has not been verified'
            : 'الفيزياء 2 السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : 'الفيزياء 3 (مسار علوم الحاسب والهندسة)';
      } else if (subject === 'CHEMISTRY') {
        textbookName = gradeLevel === 'G12' && educationType === 'PUBLIC' && track === 'GENERAL'
          ? isEn
            ? 'Chemistry 3 — Saudi public general course, 1448 AH edition, Semester 1; headings verified against the supplied textbook contents'
            : 'الكيمياء 3 — التعليم الحكومي، المسار العام، طبعة 1448هـ، الفصل الدراسي الأول؛ العناوين مطابقة لفهرس الكتاب المرفق'
          : gradeLevel === 'G12'
          ? isEn
            ? 'Saudi Chemistry 3 — textbook edition for this education type and track has not been verified'
            : 'الكيمياء 3 السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : gradeLevel === 'G10' && educationType === 'PUBLIC'
          ? isEn
            ? 'Chemistry 1 — Saudi public common first year, Pathways System, 1448 AH/2026 edition, Semester 1; chapter and lesson headings checked against the supplied contents'
            : 'الكيمياء 1 — التعليم الحكومي، السنة الأولى المشتركة، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الفصول والدروس مطابقة لفهرس الكتاب المرفق'
          : gradeLevel === 'G10'
          ? isEn
            ? 'Saudi Grade 10 Chemistry 1 — textbook edition for this education type and track has not been verified'
            : 'الكيمياء 1 السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : gradeLevel === 'G11' && educationType === 'PUBLIC'
          ? isEn
            ? 'Chemistry 2-1 — Saudi public second secondary, Pathways System, 1448 AH/2026 edition, Semester 1; chapter and lesson headings checked against the supplied contents'
            : 'الكيمياء 2-1 — التعليم الحكومي، الصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الفصول والدروس مطابقة لفهرس الكتاب المرفق'
          : gradeLevel === 'G11'
          ? isEn
            ? 'Saudi Grade 11 Chemistry 2-1 — textbook edition for this education type and track has not been verified'
            : 'الكيمياء 2-1 السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : 'الكيمياء 3 (لم يتم التحقق من طبعة هذا المسار)';
      } else if (subject === 'BIOLOGY') {
        textbookName = gradeLevel === 'G10' && educationType === 'PUBLIC'
          ? isEn
            ? 'Biology 1 — Saudi public common first year, Pathways System, 1448 AH/2026 edition, Semester 1; chapter and lesson headings checked against the supplied contents'
            : 'الأحياء 1 — التعليم الحكومي، السنة الأولى المشتركة، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الفصول والدروس مطابقة لفهرس الكتاب المرفق'
          : gradeLevel === 'G10'
          ? isEn
            ? 'Saudi Grade 10 Biology 1 — textbook edition for this education type and track has not been verified'
            : 'الأحياء 1 السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : gradeLevel === 'G11' && isSaudiPublicG11BiologyAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Biology 2-1 — Saudi public second secondary, Health & Life pathway, 1448 AH/2026 edition, Semester 1; chapter and lesson headings checked against the supplied contents'
            : 'الأحياء 2-1 — التعليم الحكومي، الصف الثاني الثانوي، مسار الصحة والحياة، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الفصول والدروس مطابقة لفهرس الكتاب المرفق'
          : gradeLevel === 'G11'
          ? isEn
            ? 'Saudi Grade 11 Biology 2-1 — textbook edition for this education type and track has not been verified'
            : 'الأحياء 2-1 السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين'
          : 'الأحياء 3 (مسار الصحة والحياة)';
      } else if (subject === 'HEALTH_SCIENCE') {
        textbookName = isSaudiPublicG11HealthScienceAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Health Science Principles — Saudi public Grade 11, Health & Life pathway, 1448 AH/2026 edition, Semester 1; chapter and lesson titles and page references checked against the supplied contents'
            : 'مبادئ العلوم الصحية — التعليم الحكومي، الصف الثاني الثانوي، مسار الصحة والحياة، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الفصول والدروس وصفحاتها مطابقة للفهرس المرفق'
          : isEn
            ? 'Saudi Health Science Principles — textbook edition for this education type, grade, and track has not been verified'
            : 'مبادئ العلوم الصحية السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والصف والمسار المحددين';
      } else if (subject === 'ENGLISH') {
        textbookName = isSaudiPublicG2EnglishAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'We Can! Student’s Book 2, Part 1 — Saudi public Grade 2; five unit titles and page references verified against PDF p. 3; scope and sequence checked against PDF pp. 4–7; McGraw-Hill adaptation ©2025; 1448 code in the IEN resource URL'
            : 'We Can! Student’s Book 2، الجزء الأول — اللغة الإنجليزية للصف الثاني الحكومي؛ عناوين الوحدات وصفحاتها مطابقة لفهرس PDF ص 3، ونطاق وتسلسل المحتوى موثق في PDF ص 4–7؛ سجل النشر يذكر حقوق التكييف ©2025، ورمز 1448 وارد في رابط مورد عين'
          : isSaudiPublicG3EnglishAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'We Can! Student’s Book 3, Part 1 — Saudi public Grade 3; six unit titles and page references verified against PDF p. 3; scope and sequence checked against PDF pp. 4–7; McGraw-Hill adaptation ©2025; 1448 code in the IEN resource URL'
            : 'We Can! Student’s Book 3، الجزء الأول — اللغة الإنجليزية للصف الثالث الحكومي؛ عناوين الوحدات وصفحاتها مطابقة لفهرس PDF ص 3، ونطاق وتسلسل المحتوى موثق في PDF ص 4–7؛ سجل النشر يذكر حقوق التكييف ©2025، ورمز 1448 وارد في رابط مورد عين'
          : isSaudiPublicG5EnglishAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Top Goal, Student Book 2 — Saudi public Grade 5, Parts One and Two; 8 unit titles and printed page references verified against PDF p. 3, scope and sequence checked against PDF pp. 4–7; McGraw-Hill publication record states ©2025'
            : 'Top Goal, Student Book 2 — اللغة الإنجليزية للصف الخامس الحكومي، الجزآن الأول والثاني؛ عناوين الوحدات وصفحات كتاب الطالب مطابقة لفهرس PDF ص 3، ونطاق وتسلسل المحتوى موثق في PDF ص 4–7؛ سجل النشر يذكر ©2025 لـ McGraw-Hill'
          : isSaudiPublicCommonYearEnglishAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Mega Goal 1 — Saudi public common first year, 1448 AH/2026 edition; unit titles and page spans verified against contents and scope sequence'
            : 'Mega Goal 1 — التعليم الحكومي، السنة الأولى المشتركة، طبعة 1448هـ/2026م؛ عناوين الوحدات وصفحاتها مطابقة للفهرس وجدول النطاق'
          : isSaudiPublicG11EnglishAvailable(country, gradeLevel, educationType)
          ? isEn
            ? 'Mega Goal 2 — Saudi public second secondary, GNRL-coded edition, 1448 AH/2026; unit titles and page spans verified against contents and functions/grammar checked against scope sequence'
            : 'Mega Goal 2 — التعليم الحكومي، الصف الثاني الثانوي، نسخة المصدر ذات الرمز GNRL، طبعة 1448هـ/2026م؛ عناوين الوحدات وصفحاتها مطابقة للفهرس ومحاور الوظائف والقواعد مطابقة لجدول النطاق'
          : isEn
          ? 'Saudi English — textbook edition for this education type, grade, and track has not been verified'
          : 'اللغة الإنجليزية السعودية — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والصف والمسار المحددين';
      } else if (subject === 'ARABIC_LIT') {
        textbookName = gradeLevel === 'G10'
          ? 'اللغة العربية 1-1 (الكفايات اللغوية) - السنة الأولى المشتركة، نظام المسارات، طبعة 1448هـ/2026م، الفصل الأول'
          : gradeLevel === 'G11' && educationType === 'PUBLIC'
          ? isEn
            ? 'Arabic Language 1-2 (Language Competencies) - Grade 11 pathways system, 1448 AH/2026 edition, Semester 1; headings verified against the supplied contents'
            : 'اللغة العربية 1-2 (الكفايات اللغوية) - الصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ العناوين مطابقة للفهرس المرفق'
          : gradeLevel === 'G11'
          ? 'الدراسات الأدبية واللغوية (المسار الشرعي والإنساني)'
          : 'البلاغة والنقد المتقدم (المسار الشرعي والإنساني)';
      } else if (subject === 'SAUDI_SOCIAL_STUDIES' && educationType === 'PUBLIC') {
        textbookName = isSaudiPublicG4SocialStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Saudi Social Studies — Grade 4 public education, Parts One and Two; 9 units and 34 lessons verified against PDF contents pp. 9 and 111; 1448 AH/2026 cover edition, internal publication record cites 1446 AH'
            : 'الدراسات الاجتماعية السعودية — الصف الرابع الحكومي، الجزآن الأول والثاني؛ 9 وحدات و34 درسًا مطابقة لفهرسي PDF ص 9 و111؛ طبعة الغلاف 1448هـ/2026م، وسجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG5SocialStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Saudi Social Studies — Grade 5 public education, Parts One and Two, 1448 AH/2026 cover edition; 8 units and 30 lessons verified against PDF contents pp. 9 and 103; internal publication record cites 1446 AH'
            : 'الدراسات الاجتماعية السعودية — الصف الخامس الحكومي، الجزآن الأول والثاني، طبعة الغلاف 1448هـ/2026م؛ 8 وحدات و30 درسًا مطابقة لفهرسي PDF ص 9 و103؛ سجل النشر الداخلي يذكر 1446هـ'
          : isSaudiPublicG6SocialStudiesAvailable(country, gradeLevel, educationType, track)
          ? isEn
            ? 'Saudi Social Studies — Grade 6 public education; cover edition 1448 AH/2026, lesson titles and page references verified against contents PDF pp. 9 and 109; internal publication record still cites 1446 AH'
            : 'الدراسات الاجتماعية السعودية — الصف السادس الحكومي؛ طبعة الغلاف 1448هـ/2026م، وعناوين الدروس وصفحاتها مطابقة للفهرسين ص 9 و109؛ سجل النشر الداخلي ما زال يذكر 1446هـ'
          : isEn
            ? 'Saudi Social Studies (not available: this grade and track have not been verified against an official textbook)'
            : 'الدراسات الاجتماعية السعودية (غير متاحة: لم يُتحقق من كتاب هذا الصف والمسار)';
      } else if (subject === 'HISTORY' && gradeLevel === 'G11') {
        textbookName = educationType === 'PUBLIC' && track === 'GENERAL'
          ? isEn
            ? 'History — Saudi public Grade 11 Pathways System, 1448 AH/2026 edition, Semester 1; lesson titles and page numbers verified against the supplied contents; platform explanations, diagrams, and assessments are original'
            : 'التاريخ — التعليم الحكومي، الصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول؛ عناوين الدروس وأرقام الصفحات مطابقة للفهرس المرفق، والشروح والرسوم والتقويمات من إعداد المنصة'
          : isEn
            ? 'Saudi Grade 11 History — textbook edition for this education type and track has not been verified'
            : 'التاريخ السعودي للصف الثاني الثانوي — لم يتم التحقق من طبعة الكتاب المناسبة لنوع التعليم والمسار المحددين';
      }
      break;

    case 'EG': // Egypt
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات والحساب المطور (كتاب الوزارة والتعليم 2.0) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        if (gradeLevel === 'G1' || gradeLevel === 'G2' || gradeLevel === 'G3') {
          textbookName = `تواصل - كتاب اللغة العربية (التعليم 2.0) - ${gradeAr}`;
        } else {
          textbookName = `اللغة العربية (كتاب الوزارة وسلاح التلميذ - التعليم 2.0 المطور) - ${gradeAr}`;
        }
      } else if (subject === 'PRIMARY_SCIENCE') {
        if (gradeLevel === 'G1' || gradeLevel === 'G2' || gradeLevel === 'G3') {
          textbookName = `اكتشف والعلوم (Discover - التعليم 2.0) - ${gradeAr}`;
        } else {
          textbookName = `العلوم والمفاهيم العلمية المطورة (التعليم 2.0) - ${gradeAr}`;
        }
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الدينية الإسلامية (كتاب الوزارة المعتمد) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية (المرحلة الإعدادية - وزارة التربية والتعليم) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم العامة (المرحلة الإعدادية - التعليم المصري) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = isMiddle
          ? `الرياضيات (الجبر والإحصاء والهندسة وحساب المثلثات) - ${gradeAr}`
          : gradeLevel === 'G10'
          ? 'الرياضيات العامة (الجبر وحساب المثلثات والهندسة المستوية - 1 ثانوي)'
          : gradeLevel === 'G11'
          ? 'الرياضيات البحتة والتطبيقية (الميكانيكا والتفاضل - 2 ثانوي)'
          : 'الرياضيات للثانوية العامة (التفاضل والتكامل والجبر والهندسة الفراغية - 3 ثانوي)';
      } else if (subject === 'PHYSICS') {
        textbookName = gradeLevel === 'G10'
          ? 'الفيزياء والقياس ومعادلات الحركة (الصف الأول الثانوي - كتاب الوزارة)'
          : gradeLevel === 'G11'
          ? 'الفيزياء (الموجات والضوء والحرارة والموائع - 2 ثانوي)'
          : 'الفيزياء للثانوية العامة ومدارس اللغات (الكهربية والمغناطيسية والحديثة - 3 ثانوي)';
      } else if (subject === 'CHEMISTRY') {
        textbookName = gradeLevel === 'G10'
          ? 'الكيمياء مركز العلوم والحساب الكيميائي (الصف الأول الثانوي)'
          : gradeLevel === 'G11'
          ? 'الكيمياء (بنية الذرة والجدول الدوري والروابط - 2 ثانوي)'
          : 'الكيمياء العامة والعضوية للثانوية العامة (3 ثانوي)';
      } else if (subject === 'BIOLOGY') {
        textbookName = gradeLevel === 'G10'
          ? 'الأحياء الأساس الكيميائي للحياة والخلية (الصف الأول الثانوي)'
          : gradeLevel === 'G11'
          ? 'الأحياء (التغذية والنقل والتنفس والإخراج - 2 ثانوي)'
          : 'الأحياء والجيولوجيا للثانوية العامة (المناعة والوراثة الجزيئية - 3 ثانوي)';
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = isMiddle
          ? `الكمبيوتر وتكنولوجيا المعلومات والاتصالات (${gradeAr})`
          : 'تكنولوجيا المعلومات والاتصالات والحاسب الآلي (ICT - الثانوية العامة)';
      } else if (subject === 'ARABIC_LIT') {
        textbookName = gradeLevel === 'G10'
          ? 'اللغة العربية والأدب والبلاغة والنصوص (الصف الأول الثانوي)'
          : gradeLevel === 'G11'
          ? 'اللغة العربية وتاريخ الأدب والبلاغة (الصف الثاني الثانوي)'
          : 'اللغة العربية ومدارس الشعر الحديث والبلاغة (الثانوية العامة - 3 ثانوي)';
      }
      break;

    case 'SD': // Sudan (جمهورية السودان - المنهج القومي بخت الرضا والسلم 6-3-3)
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات والحساب (سلسلة بخت الرضا المطورة) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `اللغة العربية (العربية لغتي - كتاب بخت الرضا القومي) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم الطبيعية والبيئة (المركز القومي للمناهج بخت الرضا) - ${gradeAr}`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية المعتمدة (القرآن والفقه والسيرة) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية للمرحلة المتوسطة (النحو والصرف والقراءة والنصوص - بخت الرضا) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم العامة للمرحلة المتوسطة (الكيمياء والفيزياء والأحياء والبيئة) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = isMiddle
          ? `الرياضيات للمرحلة المتوسطة (الجبر والهندسة والإحصاء - المنهج القومي الجديد) - ${gradeAr}`
          : gradeLevel === 'G10'
          ? 'الرياضيات العامة (الجبر والهندسة التحليلية وحساب المثلثات - 1 ثانوي سوداني)'
          : gradeLevel === 'G11'
          ? 'الرياضيات (المتخصصة والأساسية - 2 ثانوي سوداني)'
          : 'الرياضيات المتخصصة للشهادة الثانوية السودانية (التفاضل والتكامل والجبر والهندسة - 3 ثانوي)';
      } else if (subject === 'PHYSICS') {
        textbookName = gradeLevel === 'G10'
          ? 'الفيزياء العامة والقياس والميكانيكا (الصف الأول الثانوي السوداني)'
          : gradeLevel === 'G11'
          ? 'الفيزياء (الموجات والحرارة والموائع والضوء - 2 ثانوي سوداني)'
          : 'الفيزياء للشهادة الثانوية السودانية (الكهربائية والمغناطيسية والفيزياء الذرية والنووية - 3 ثانوي)';
      } else if (subject === 'CHEMISTRY') {
        textbookName = gradeLevel === 'G10'
          ? 'الكيمياء العامة وبنية المادة والجدول الدوري (الصف الأول الثانوي السوداني)'
          : gradeLevel === 'G11'
          ? 'الكيمياء (الروابط والحساب الكيميائي والمحاليل والاتزان - 2 ثانوي سوداني)'
          : 'الكيمياء للشهادة الثانوية السودانية (الكيمياء العضوية والتحليلية والحرارية - 3 ثانوي)';
      } else if (subject === 'BIOLOGY') {
        textbookName = gradeLevel === 'G10'
          ? 'الأحياء والبيئة والخلية الحية (الصف الأول الثانوي السوداني)'
          : gradeLevel === 'G11'
          ? 'الأحياء (التغذية والنقل والتنفس والتكاثر - 2 ثانوي سوداني)'
          : 'الأحياء للشهادة الثانوية السودانية (الوراثة وعلم البيئة وأجهزة الجسم - 3 ثانوي)';
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = isMiddle
          ? `تكنولوجيا المعلومات والاتصالات والحاسوب (المرحلة المتوسطة السودانية) - ${gradeAr}`
          : 'علوم الحاسوب وتقنية المعلومات (المرحلة الثانوية السودانية)';
      } else if (subject === 'ARABIC_LIT') {
        textbookName = gradeLevel === 'G10'
          ? 'الأدب العربي والبلاغة والنصوص (الصف الأول الثانوي السوداني)'
          : gradeLevel === 'G11'
          ? 'تاريخ الأدب العربي والنصوص والبلاغة (الصف الثاني الثانوي سوداني)'
          : 'الأدب والبلاغة والنقد وروائع الأدب السوداني والعربي (الشهادة الثانوية السودانية - 3 ثانوي)';
      } else if (subject === 'GEOGRAPHY') {
        textbookName = `كتاب الجغرافيا والدراسات البيئية (المركز القومي للمناهج والبحث التربوي بخت الرضا) - ${gradeAr}`;
      } else if (subject === 'HISTORY') {
        textbookName = `كتاب التاريخ (المركز القومي للمناهج والبحث التربوي بخت الرضا) - ${gradeAr}`;
      }
      break;

    case 'AE': // UAE
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات المتكاملة (كتاب الطالب - ESE) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        if (['G1', 'G2', 'G3', 'G4'].includes(gradeLevel)) {
          textbookName = `اللغة العربية (سلسلة ألف باء الإمارات - الحلقة الأولى) - ${gradeAr}`;
        } else {
          textbookName = `اللغة العربية (الحلقة الثانية - مؤسسة الإمارات للتعليم المدرسي) - ${gradeAr}`;
        }
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم المتكاملة والاستكشاف العلمي (مؤسسة الإمارات للتعليم المدرسي) - ${gradeAr}`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية والهوية الوطنية (وزارة التربية ومؤسسة الإمارات) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية (سلسلة ينابيع المعرفة - الحلقة الثانية) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم المتكاملة والاستكشاف العلمي (الحلقة الثانية - ESE) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = isMiddle
          ? `الرياضيات المتكاملة (الحلقة الثانية - ESE) - ${gradeAr}`
          : `الرياضيات المتقدمة (المسار المتقدم ومسار النخبة) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء المتقدمة (المسار المتقدم ومسار النخبة) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء التطبيقية والحيوية (المسار المتقدم ومسار النخبة) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء والعلوم الصحية (مسار الصحة والحياة - ESE) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `علوم الحاسوب والابتكار والذكاء الاصطناعي - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية والدراسات الأدبية والبلاغية (الثانوية الإماراتية) - ${gradeAr}`;
      } else {
        textbookName = `المنهج الإماراتي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'KW': // Kuwait
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات - ${gradeAr} (وزارة التربية بدولة الكويت)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `لغتي العربية (منهج الكفايات المعتمد) - ${gradeAr} (الكويت)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم - ${gradeAr} (وزارة التربية بدولة الكويت)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية والقرآن الكريم - ${gradeAr} (دولة الكويت)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `لغتي العربية (المرحلة المتوسطة - كفايات وزارة التربية) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم (المرحلة المتوسطة - وزارة التربية بدولة الكويت) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = isMiddle
          ? `الرياضيات (المرحلة المتوسطة - دولة الكويت) - ${gradeAr}`
          : `الرياضيات للثانوية العامة (القسم العلمي والأدبي - الكويت) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `تكنولوجيا المعلومات والحاسوب - ${gradeAr} (دولة الكويت)`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء (المرحلة الثانوية - وزارة التربية بدولة الكويت) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (المرحلة الثانوية - دولة الكويت) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء والعلوم الحياتية (المرحلة الثانوية - الكويت) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية وتاريخ الأدب والبلاغة والنقد (الثانوية الكويتية) - ${gradeAr}`;
      } else {
        textbookName = `المنهج الكويتي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'JO': // Jordan
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات (مناهج كولينز الوطنية المطورة) - ${gradeAr} (الأردن)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم (مناهج كولينز الوطنية المطورة) - ${gradeAr} (الأردن)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `اللغة العربية (مهارات الاتصال) - ${gradeAr} (وزارة التربية الأردنية)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية - ${gradeAr} (المملكة الأردنية الهاشمية)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية (مهارات الاتصال وقواعد اللغة) - ${gradeAr} (الأردن)`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم العامة (مناهج كولينز الوطنية المطورة) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (مناهج كولينز الوطنية المطورة - الفرع العلمي والأساسي) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `الحاسوب وتكنولوجيا المعلومات والبرمجة - ${gradeAr} (الأردن)`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء (الفرع العلمي - المناهج المطورة بالأردن) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (الفرع العلمي - المملكة الأردنية الهاشمية) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `العلوم الحياتية (الأحياء - الفرع العلمي بالأردن) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية تخصص (البلاغة والنقد والأدب وقضاياه - الأردن) - ${gradeAr}`;
      } else {
        textbookName = `المنهج الأردني المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'OM': // Oman
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات (سلاسل كامبريدج المطبقة بسلطنة عُمان) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم (سلاسل كامبريدج المطبقة بسلطنة عُمان) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        if (['G1', 'G2', 'G3', 'G4'].includes(gradeLevel)) {
          textbookName = `أحب لغتي (التعليم الأساسي - الحلقة الأولى) - ${gradeAr} (سلطنة عمان)`;
        } else {
          textbookName = `لغتي الجميلة (التعليم الأساسي - الحلقة الثانية) - ${gradeAr} (سلطنة عمان)`;
        }
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `ديني قيمي (التربية الإسلامية) - ${gradeAr} (وزارة التربية العمانية)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `لغتي الجميلة (التعليم الأساسي - الحلقة الثانية بسلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم (سلاسل كامبريدج للتعليم الأساسي بسلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (سلاسل كامبريدج المطبقة بسلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `تقنية المعلومات والذكاء الاصطناعي (سلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء (سلاسل كامبريدج - دبلوم التعليم العام بسلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (سلاسل كامبريدج - سلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء (سلاسل كامبريدج - سلطنة عمان) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `المؤنس في اللغة والأدب (دبلوم التعليم العام - سلطنة عمان) - ${gradeAr}`;
      } else {
        textbookName = `المنهج العُماني المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'QA': // Qatar
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات (معايير المناهج القطرية ومصادر التعلم) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم (معايير المناهج القطرية ومصادر التعلم) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `اللغة العربية (مصادر التعلم المعتمدة) - ${gradeAr} (دولة قطر)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية - معايير المناهج القطرية - ${gradeAr}`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية (المرحلة الإعدادية - معايير المناهج القطرية) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم العامة (المرحلة الإعدادية - معايير المناهج القطرية) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (معايير المناهج القطرية ومصادر التعلم) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `الحوسبة وتكنولوجيا المعلومات (المناهج القطرية) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء (المسار العلمي والتكنولوجي - الثانوية القطرية) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (المسار العلمي والمسار الطبي - دولة قطر) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء (المسار العلمي والمسار الطبي - قطر) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية والأدب والبلاغة (الثانوية القطرية) - ${gradeAr}`;
      } else {
        textbookName = `المنهج القطري المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'BH': // Bahrain
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات - ${gradeAr} (وزارة التربية والتعليم بمملكة البحرين)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم المطورة - ${gradeAr} (مملكة البحرين)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `اللغة العربية - ${gradeAr} (المنهج الوطني البحريني)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية - ${gradeAr} (مملكة البحرين)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية (المرحلة الإعدادية - مملكة البحرين) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم (المرحلة الإعدادية - وزارة التربية والتعليم بالبحرين) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (توحيد المسارات والمرحلة الإعدادية - البحرين) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `المواد الرقمية والتقنية (مملكة البحرين) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء (المسار العلمي والتوحيد - مملكة البحرين) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (المسار العلمي - مملكة البحرين) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء (المسار العلمي والرياضيات - البحرين) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية والدراسات الأدبية والبلاغية (البحرين) - ${gradeAr}`;
      } else {
        textbookName = `المنهج البحريني المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'IQ': // Iraq
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات - ${gradeAr} (وزارة التربية العراقية)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم - ${gradeAr} (وزارة التربية العراقية)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        if (['G1', 'G2', 'G3'].includes(gradeLevel)) {
          textbookName = `قراءتي - ${gradeAr} (وزارة التربية العراقية)`;
        } else {
          textbookName = `قواعد اللغة العربية وقراءتي - ${gradeAr} (جمهورية العراق)`;
        }
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `القرآن الكريم والتربية الإسلامية - ${gradeAr} (العراق)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `قواعد اللغة العربية والمطالعة والنصوص - ${gradeAr} (العراق)`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم (الجزء الأول والثاني - وزارة التربية العراقية) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (الجبر والهندسة - وزارة التربية العراقية) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `الحاسوب وتكنولوجيا المعلومات (جمهورية العراق) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء للفرع العلمي (التطبيقي والأحيائي - العراق) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء للفرع العلمي (وزارة التربية العراقية) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `علم الأحياء للفرع العلمي (جمهورية العراق) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `الأدب والنصوص وقواعد اللغة العربية (السادس الإعدادي - العراق) - ${gradeAr}`;
      } else {
        textbookName = `المنهج العراقي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'MA': // Morocco
      if (subject === 'PRIMARY_MATH') {
        textbookName = `المرجع في الرياضيات / فضاء الرياضيات - ${gradeAr} (المملكة المغربية)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `النشاط العلمي (المنهاج المنقح للتعليم الابتدائي) - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `المفيد في اللغة العربية / مرشدي في اللغة العربية - ${gradeAr} (المغرب)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية (الممتاز في التربية الإسلامية) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `الرائد في اللغة العربية / مرشدي في اللغة العربية (الثانوي الإعدادي بالمغرب) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `علوم الحياة والأرض والفيزياء والكيمياء (الثانوي الإعدادي - المغرب) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `المفيد في الرياضيات / فضاء الرياضيات (المملكة المغربية) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `المعلوميات والبرمجة (المملكة المغربية) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء والكيمياء (سلك الباكالوريا - العلوم الرياضية والتجريبية بالمغرب) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء والتحولات المادية (سلك الباكالوريا بالمغرب) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `علوم الحياة والأرض (شعبة العلوم التجريبية - الباكالوريا المغربية) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية وآدابها (شعبة الآداب والعلوم الإنسانية - الباكالوريا) - ${gradeAr}`;
      } else {
        textbookName = `المنهاج المغربي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'DZ': // Algeria
      if (subject === 'PRIMARY_MATH') {
        textbookName = `كتاب الرياضيات - ${gradeAr} (مناهج الجيل الثاني - الجزائر)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `التربية العلمية والتكنولوجية - ${gradeAr} (الجمهورية الجزائرية)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `كتابي في اللغة العربية - ${gradeAr} (الجيل الثاني - الجزائر)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية - ${gradeAr} (وزارة التربية الوطنية بالجزائر)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية وآدابها (التعليم المتوسط - الجيل الثاني بالجزائر) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم الفيزيائية والتكنولوجيا وعلوم الطبيعة والحياة (التعليم المتوسط) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (التعليم المتوسط - مناهج الجيل الثاني بالجزائر) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `الإعلام الآلي وتكنولوجيا الاتصال (الجمهورية الجزائرية) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `العلوم الفيزيائية (شعبة العلوم التجريبية والرياضيات - البكالوريا الجزائرية) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء والتحولات الكيميائية (التعليم الثانوي بالجزائر) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `علوم الطبيعة والحياة (شعبة العلوم التجريبية - البكالوريا بالجزائر) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `الأدب العربي واللغات (شعبة الآداب والفلسفة واللغات - البكالوريا) - ${gradeAr}`;
      } else {
        textbookName = `المنهاج الجزائري المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'TN': // Tunisia
      if (subject === 'PRIMARY_MATH') {
        textbookName = `الرياضيات - ${gradeAr} (المركز البيداغوجي بالجمهورية التونسية)`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `الإيقاظ العلمي - ${gradeAr} (التعليم الأساسي بتونس)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `قراءة وتواصل وإنتاج كتابي - ${gradeAr} (تونس)`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية - ${gradeAr} (وزارة التربية التونسية)`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `العربية (المدرسة الإعدادية - المركز البيداغوجي بالجمهورية التونسية) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم الفيزيائية وعلوم الحياة والأرض (التعليم الأساسي التونسي) - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = `الرياضيات (التعليم الأساسي وشعب الباكالوريا بتونس) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `الإعلامية والخوارزميات والبرمجة (الجمهورية التونسية) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `العلوم الفيزيائية (شعبة الرياضيات والعلوم التجريبية - الباكالوريا التونسية) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (شعبة العلوم التجريبية والرياضيات - تونس) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `علوم الحياة والأرض (شعبة العلوم التجريبية - الباكالوريا التونسية) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `العربية وآدابها (شعبة الآداب والباكالوريا التونسية) - ${gradeAr}`;
      } else {
        textbookName = `البرنامج التعليمي التونسي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;

    case 'INTL': // International
    default:
      if (subject === 'PRIMARY_MATH') {
        textbookName = isEn 
          ? `Primary Mathematics & Arithmetic - ${gradeEn} (Common Core Aligned)` 
          : `الرياضيات الابتدائية والمعايير الدولية - ${gradeAr}`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = isEn 
          ? `Primary Science & Inquiry - ${gradeEn} (NGSS Standards)` 
          : `العلوم والاستكشاف العلمي الدولي - ${gradeAr}`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `اللغة العربية وفق المعايير الدولية - ${gradeAr}`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `التربية الإسلامية والقيم الإنسانية - ${gradeAr}`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `اللغة العربية للناطقين بها (المعايير الدولية - المرحلة المتوسطة) - ${gradeAr}`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = isEn
          ? `Middle School Integrated Science (NGSS) - ${gradeEn}`
          : `العلوم المتكاملة للمرحلة المتوسطة وفق معايير NGSS - ${gradeAr}`;
      } else if (subject === 'MATH') {
        textbookName = isEn
          ? `Mathematics & Pre-Calculus / AP Calculus - ${gradeEn}`
          : `الرياضيات الدولية والتفاضل والتكامل - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = isEn
          ? `Advanced AP / IB Physics - ${gradeEn}`
          : `الفيزياء المتقدمة وفق معايير AP / IB الدولية - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = isEn
          ? `Advanced AP / IB Chemistry - ${gradeEn}`
          : `الكيمياء العامة والعضوية وفق المعايير الدولية - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = isEn
          ? `Advanced AP / IB Biology - ${gradeEn}`
          : `الأحياء والعلوم الجزيئية الدولية - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = isEn
          ? `Computer Science, Python & AI Principles - ${gradeEn}`
          : `علوم الحاسوب والبرمجة والذكاء الاصطناعي الدولي - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `الأدب العربي والبلاغة والنقد المقارن (المرحلة الثانوية) - ${gradeAr}`;
      } else {
        textbookName = isEn 
          ? `International Curriculum for ${subject} - ${gradeEn}` 
          : `المنهج الدولي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;
  }

  let ministry = isEn ? cInfo.ministryEn : cInfo.ministryAr;

  if (country === 'SA' && educationType === 'PUBLIC' && subject === 'SAUDI_SOCIAL_STUDIES') {
    ministry = isSaudiPublicG4SocialStudiesAvailable(country, gradeLevel, educationType, track) ||
      isSaudiPublicG5SocialStudiesAvailable(country, gradeLevel, educationType, track) ||
      isSaudiPublicG6SocialStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn
        ? 'Saudi Ministry of Education; cover edition and both contents pages checked; the internal publication record cites 1446 AH'
        : 'وزارة التعليم السعودية؛ جرى فحص الغلاف وفهرسي الجزأين، مع ملاحظة أن سجل النشر الداخلي يذكر 1446هـ'
      : isEn
        ? 'Official textbook not verified for this grade and track'
        : 'لم يتم التحقق من كتاب رسمي لهذا الصف والمسار';
  }

  if (country === 'SA' && subject === 'ISLAMIC_STUDIES') {
    ministry = isSaudiPublicG2IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn
        ? 'Saudi Ministry of Education; Grade 2 Part One cover states 1448 AH/2026, while the internal publication record states 1446 AH; Quran plan and both contents indexes checked'
        : 'وزارة التعليم السعودية؛ غلاف الجزء الأول للصف الثاني يذكر 1448هـ/2026م، وسجل النشر الداخلي يذكر 1446هـ؛ تمت مطابقة خطة القرآن وفهرسي الكتاب'
      : isSaudiPublicG3IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn
        ? 'Saudi Ministry of Education; Grade 3 Part One cover states 1448 AH/2026, while the internal publication record states 1446 AH; Quran plan and both contents indexes checked'
        : 'وزارة التعليم السعودية؛ غلاف الجزء الأول للصف الثالث يذكر 1448هـ/2026م، وسجل النشر الداخلي يذكر 1446هـ؛ تمت مطابقة خطة القرآن وفهرسي الكتاب'
      : isSaudiPublicG4IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn
        ? 'Saudi Ministry of Education; Grade 4 cover states 1448 AH/2026, while the internal publication record states 1446 AH; both parts’ contents checked'
        : 'وزارة التعليم السعودية؛ غلاف الصف الرابع يذكر 1448هـ/2026م، وسجل النشر الداخلي يذكر 1446هـ؛ تمت مطابقة فهارس الجزأين'
      : isSaudiPublicG5IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn
        ? 'Saudi Ministry of Education; Grade 5 Part One cover states 1448 AH/2026; contents and page references checked against the supplied PDF'
        : 'وزارة التعليم السعودية؛ غلاف الجزء الأول للصف الخامس يذكر 1448هـ/2026م؛ تمت مطابقة العناوين والصفحات مع فهرس الكتاب المرفق'
      : isSaudiPublicG6IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn
        ? 'Saudi Ministry of Education; Grade 6 cover states 1448 AH/2026, while the internal publication record states 1446 AH'
        : 'وزارة التعليم السعودية؛ غلاف الصف السادس يذكر 1448هـ/2026م، بينما سجل النشر الداخلي يذكر 1446هـ'
      : isEn
        ? 'Official Islamic Studies textbook not verified for this grade, track, and education type'
        : 'لم يتم التحقق من كتاب رسمي للدراسات الإسلامية لهذا الصف والمسار ونوع التعليم';
  }

  if (subject === 'ENGLISH' && country !== 'SA' && !textbookName) {
    textbookName = isEn
      ? `English Language - national textbook for ${gradeEn} has not been verified`
      : `اللغة الإنجليزية - لم يتم التحقق من الكتاب الوطني المناسب لـ ${gradeAr}`;
  }

  if (educationType === 'ISLAMIC') {
    if (country === 'EG') {
      ministry = isEn ? 'Al-Azhar Al-Sharif - Institutes Sector' : 'الأزهر الشريف - قطاع المعاهد الأزهرية';
      if (subject === 'ISLAMIC_STUDIES') {
        textbookName = isEn ? `Azhar Islamic Jurisprudence & Usul al-Din - ${gradeEn}` : `الفقه المذهبي وأصول الدين والقرآن الكريم - ${gradeAr} (الأزهر الشريف)`;
      } else if (subject === 'ARABIC_LANG' || subject === 'ARABIC_LIT' || subject === 'PRIMARY_ARABIC') {
        textbookName = isEn ? `Azhar Arabic Grammar, Rhetoric & Literature - ${gradeEn}` : `النحو والصرف والبلاغة والأدب الأزهري - ${gradeAr} (المعاهد الأزهرية)`;
      }
    } else if (country === 'SA') {
      ministry = isEn ? 'Al-Imam University - Scientific Religious Institutes' : 'جامعة الإمام محمد بن سعود الإسلامية - المعاهد العلمية';
      if (subject === 'ISLAMIC_STUDIES') {
        textbookName = isEn ? `Sharia Sciences & Hadith (Scientific Institutes) - ${gradeEn}` : `العلوم الشرعية والفرائض والحديث (المعاهد العلمية السعودية) - ${gradeAr}`;
      }
    }
  } else if (educationType === 'PRIVATE') {
    if (country === 'EG') {
      ministry = isEn ? 'Ministry of Education - Experimental & Language Schools' : 'وزارة التربية والتعليم - المدارس الرسمية للغات والتجريبية';
      if (!textbookName.includes('لغات')) {
        textbookName += isEn ? ' (Language & Experimental Schools)' : ' (مدارس اللغات والتعليم الخاص)';
      }
    } else if (country === 'AE') {
      ministry = isEn ? 'ADEK / KHDA Private & Charter Schools' : 'هيئة المعرفة والتنمية البشرية / دائرة التعليم والمعرفة (المدارس الخاصة)';
      textbookName += isEn ? ' (Private & Charter Schools)' : ' (المدارس الخاصة والشراكات التعليمية)';
    }
  } else if (educationType === 'INTERNATIONAL') {
    ministry = isEn ? 'International Boards (Cambridge / IB / College Board AP)' : 'المجالس الدولية للاعتماد الأكاديمي (Cambridge / IB / College Board AP)';
    if (!textbookName.includes('AP') && !textbookName.includes('International') && !textbookName.includes('الدولية')) {
      textbookName = isEn 
        ? `International Standard Curriculum for ${subject} - ${gradeEn} (AP / IB / IGCSE)` 
        : `المعايير الدولية المعتمدة لمادة ${subject} - ${gradeAr} (AP / IB / IGCSE)`;
    }
  }

  if (
    educationType === 'PRIVATE' &&
    !(country === 'EG' || country === 'AE')
  ) {
    ministry = isEn ? 'Private-school platform material; local syllabus not verified' : 'محتوى مساند للمدارس الخاصة؛ لم يتم التحقق من المنهج المحلي';
    textbookName = isEn
      ? `Supplementary ${subject} material for private schools - ${gradeEn}; not mapped to a national public textbook`
      : `محتوى ${subject} مساند للمدارس الخاصة - ${gradeAr}؛ غير مطابق لكتاب حكومي وطني`;
  } else if (
    educationType === 'ISLAMIC' &&
    !(country === 'EG' || country === 'SA') &&
    subject !== 'ISLAMIC_STUDIES'
  ) {
    ministry = isEn ? 'Islamic-school platform material; local syllabus not verified' : 'محتوى مساند للتعليم الشرعي؛ لم يتم التحقق من المنهج المحلي';
    textbookName = isEn
      ? `Supplementary ${subject} material for Islamic schools - ${gradeEn}; not mapped to a national public textbook`
      : `محتوى ${subject} مساند للتعليم الشرعي - ${gradeAr}؛ غير مطابق لكتاب حكومي وطني`;
  } else if (country === 'SA' && educationType === 'ISLAMIC' && subject !== 'ISLAMIC_STUDIES') {
    ministry = isEn ? 'Saudi scientific institutes; subject-specific book not verified' : 'المعاهد العلمية السعودية؛ لم يتم التحقق من كتاب هذه المادة';
    textbookName = isEn
      ? `Supplementary ${subject} material for Saudi scientific institutes - ${gradeEn}; not mapped to a public-school textbook`
      : `محتوى ${subject} مساند للمعاهد العلمية السعودية - ${gradeAr}؛ غير مطابق لكتاب التعليم الحكومي`;
  }

  return {
    textbookName,
    ministry,
    standardCode: `${country}-${educationType}-${subject}-${gradeLevel}-${track}`,
    semester: country === 'SA' && educationType === 'PUBLIC' &&
      subject === 'COMPUTER_SCIENCE' &&
        (gradeLevel === 'G4' ||
          isSaudiPublicG5DigitalSkillsAvailable(country, gradeLevel, educationType, track) ||
          isSaudiPublicG6DigitalSkillsAvailable(country, gradeLevel, educationType, track))
        ? gradeLevel === 'G4'
          ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
          : isEn ? 'Full year (Parts One and Two)' : 'العام الدراسي (الجزآن الأول والثاني)'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'SAUDI_SOCIAL_STUDIES' &&
        (isSaudiPublicG4SocialStudiesAvailable(country, gradeLevel, educationType, track) ||
          isSaudiPublicG5SocialStudiesAvailable(country, gradeLevel, educationType, track) ||
          isSaudiPublicG6SocialStudiesAvailable(country, gradeLevel, educationType, track))
      ? isEn ? 'Full year (Parts One and Two)' : 'العام الدراسي (الجزآن الأول والثاني)'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'VISUAL_ARTS' &&
        (isSaudiPublicG2VisualArtsAvailable(country, gradeLevel, educationType) ||
          isSaudiPublicG3VisualArtsAvailable(country, gradeLevel, educationType))
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'VISUAL_ARTS' &&
        (isSaudiPublicG4VisualArtsAvailable(country, gradeLevel, educationType) ||
          isSaudiPublicG5VisualArtsAvailable(country, gradeLevel, educationType))
      ? isEn ? 'Full year (Parts One and Two)' : 'العام الدراسي (الجزآن الأول والثاني)'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'QURAN_RECITATION' &&
        isSaudiPublicG5QuranRecitationAvailable(country, gradeLevel, educationType)
      ? isEn ? 'Full year (undivided textbook)' : 'العام الدراسي (كتاب كامل غير مجزأ)'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'PRIMARY_ARABIC' &&
        isSaudiPublicG2PrimaryArabicAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Part One of the curriculum' : 'الجزء الأول من المقرر'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'PRIMARY_ARABIC' &&
        isSaudiPublicG3PrimaryArabicAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Part One of the curriculum' : 'الجزء الأول من المقرر'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'PRIMARY_SCIENCE' &&
        gradeLevel === 'G3'
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'PRIMARY_MATH' &&
        isSaudiPublicG3PrimaryMathAvailable(country, gradeLevel, educationType)
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'PRIMARY_MATH' &&
        isSaudiPublicG4PrimaryMathAvailable(country, gradeLevel, educationType)
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'ISLAMIC_STUDIES' &&
        isSaudiPublicG2IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Part One of the curriculum' : 'الجزء الأول من المقرر'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'ISLAMIC_STUDIES' &&
        isSaudiPublicG3IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Part One of the curriculum' : 'الجزء الأول من المقرر'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'ISLAMIC_STUDIES' &&
        isSaudiPublicG4IslamicStudiesAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Full year (Parts One and Two)' : 'العام الدراسي (الجزآن الأول والثاني)'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'PRIMARY_MATH' &&
        isSaudiPublicG5PrimaryMathAvailable(country, gradeLevel, educationType)
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'LIFE_SKILLS' &&
        isSaudiPublicG3LifeSkillsAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'LIFE_SKILLS' &&
        isSaudiPublicG4LifeSkillsAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'LIFE_SKILLS' &&
        isSaudiPublicG5LifeSkillsAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Full year (undivided textbook)' : 'العام الدراسي (كتاب كامل غير مجزأ)'
      : country === 'SA' && educationType === 'PUBLIC' &&
        subject === 'LIFE_SKILLS' &&
        isSaudiPublicG6LifeSkillsAvailable(country, gradeLevel, educationType, track)
      ? isEn ? 'Semester 1 — Part One' : 'الفصل الدراسي الأول — الجزء الأول'
      : country === 'SA' && educationType === 'PUBLIC' &&
      subject === 'ENGLISH' && isSaudiPublicEnglishAvailable(country, gradeLevel, educationType)
      ? ''
      : country === 'SA' && educationType === 'PUBLIC' &&
      (((subject === 'CHEMISTRY' || subject === 'BIOLOGY') && gradeLevel === 'G10') ||
        (subject === 'BIOLOGY' &&
          isSaudiPublicG11BiologyAvailable(country, gradeLevel, educationType, track)) ||
        (subject === 'CHEMISTRY' && gradeLevel === 'G11') ||
        (subject === 'CHEMISTRY' && gradeLevel === 'G12' && track === 'GENERAL') ||
        (subject === 'PHYSICS' &&
          isSaudiPublicG11PhysicsAvailable(country, gradeLevel, educationType, track)) ||
        (subject === 'HEALTH_SCIENCE' &&
          isSaudiPublicG11HealthScienceAvailable(country, gradeLevel, educationType, track)) ||
        (subject === 'TAJWEED' &&
          isSaudiPublicTajweedAvailable(country, gradeLevel, educationType)) ||
        (subject === 'QURAN_RECITATION' &&
          isSaudiPublicG6QuranRecitationAvailable(country, gradeLevel, educationType)) ||
        (subject === 'COMPUTER_SCIENCE' &&
          isSaudiPublicBusinessG11DigitalTechnologyAvailable(country, gradeLevel, educationType, track)) ||
        (subject === 'COMPUTER_SCIENCE' &&
          isSaudiPublicG6DigitalSkillsAvailable(country, gradeLevel, educationType, track)) ||
        (subject === 'MATH' && gradeLevel === 'G10') ||
        (subject === 'MATH' && gradeLevel === 'G11' &&
          (track === 'GENERAL' || track === 'CS_ENGINEERING')) ||
        (subject === 'HISTORY' && gradeLevel === 'G11' && track === 'GENERAL') ||
        (subject === 'ARABIC_LIT' && ['G10', 'G11'].includes(gradeLevel)))
      ? isEn ? 'Semester 1' : 'الفصل الدراسي الأول'
      : isEn ? cInfo.termDefaultEn : cInfo.termDefaultAr
  };
}

/**
 * Returns accurately localized subject name adapted to the country's national education system
 */
export function getNationalSubjectLabel(
  subject: Subject,
  country: CountryCode = 'SA',
  _gradeLevel?: GradeLevel,
  lang: Language = 'ar',
  educationType: EducationType = 'PUBLIC',
  track: EducationTrack = 'GENERAL'
): string {
  const isEn = lang === 'en';

  if (subject === 'PRIMARY_MATH' && isSaudiPublicG3PrimaryMathAvailable(country, _gradeLevel, educationType)) {
    return isEn
      ? 'Mathematics (Saudi public Grade 3, Part One)'
      : 'الرياضيات (الصف الثالث الحكومي — الجزء الأول)';
  }

  if (subject === 'PRIMARY_MATH' && isSaudiPublicG4PrimaryMathAvailable(country, _gradeLevel, educationType)) {
    return isEn
      ? 'Mathematics (Saudi public Grade 4, Part One)'
      : 'الرياضيات (الصف الرابع الحكومي — الجزء الأول)';
  }

  if (subject === 'PRIMARY_MATH' && isSaudiPublicG5PrimaryMathAvailable(country, _gradeLevel, educationType)) {
    return isEn
      ? 'Mathematics (Saudi public Grade 5, Part One)'
      : 'الرياضيات (الصف الخامس الحكومي — الجزء الأول)';
  }

  if (subject === 'PRIMARY_MATH' && isSaudiPublicG6PrimaryMathAvailable(country, _gradeLevel, educationType)) {
    return isEn
      ? 'Mathematics (Saudi public Grade 6, Part One)'
      : 'الرياضيات (الصف السادس الحكومي — الجزء الأول)';
  }

  if (subject === 'SAUDI_SOCIAL_STUDIES') {
    if (isSaudiPublicG4SocialStudiesAvailable(country, _gradeLevel, educationType, track)) {
      return isEn
        ? 'Saudi Social Studies (Public Grade 4 — verified contents)'
        : 'الدراسات الاجتماعية السعودية (الصف الرابع الحكومي — فهرس موثق)';
    }
    if (isSaudiPublicG5SocialStudiesAvailable(country, _gradeLevel, educationType, track)) {
      return isEn
        ? 'Saudi Social Studies (Public Grade 5 — verified contents)'
        : 'الدراسات الاجتماعية السعودية (الصف الخامس الحكومي — فهرس موثق)';
    }
    if (isSaudiPublicG6SocialStudiesAvailable(country, _gradeLevel, educationType, track)) {
      return isEn
        ? 'Saudi Social Studies (Public Grade 6 — verified contents)'
        : 'الدراسات الاجتماعية السعودية (الصف السادس الحكومي — فهرس موثق)';
    }
    return isEn
      ? 'Saudi Social Studies (not available for this grade, track, or education type)'
      : 'الدراسات الاجتماعية السعودية (غير متاحة لهذا الصف أو المسار أو نوع التعليم)';
  }

  if (subject === 'ISLAMIC_STUDIES' && country === 'SA') {
    return isSaudiPublicG2IslamicStudiesAvailable(country, _gradeLevel, educationType, track)
      ? isEn
        ? 'Islamic Studies (Saudi public Grade 2 — verified Part One contents)'
        : 'الدراسات الإسلامية (الصف الثاني الحكومي — فهرسا الجزء الأول موثقان)'
      : isSaudiPublicG3IslamicStudiesAvailable(country, _gradeLevel, educationType, track)
      ? isEn
        ? 'Islamic Studies (Saudi public Grade 3 — verified Part One contents)'
        : 'الدراسات الإسلامية (الصف الثالث الحكومي — فهرس الجزء الأول موثق)'
      : isSaudiPublicG4IslamicStudiesAvailable(country, _gradeLevel, educationType, track)
      ? isEn
        ? 'Islamic Studies (Saudi public Grade 4 — verified full-year contents)'
        : 'الدراسات الإسلامية (الصف الرابع الحكومي — فهرسا العام الدراسي موثقان)'
      : isSaudiPublicG5IslamicStudiesAvailable(country, _gradeLevel, educationType, track)
      ? isEn
        ? 'Islamic Studies (Saudi public Grade 5 — verified Part One textbook contents)'
        : 'الدراسات الإسلامية (الصف الخامس الحكومي — فهرس الجزء الأول موثق)'
      : isSaudiPublicG6IslamicStudiesAvailable(country, _gradeLevel, educationType, track)
      ? isEn
        ? 'Islamic Studies (Saudi public Grade 6 — verified textbook contents)'
        : 'الدراسات الإسلامية (الصف السادس الحكومي — فهرس كتاب موثق)'
      : isEn
        ? 'Islamic Studies (not available: textbook not verified for this grade or education type)'
        : 'الدراسات الإسلامية (غير متاحة: لم يُتحقق من كتاب هذا الصف أو نوع التعليم)';
  }

  if (subject === 'TAJWEED') {
    if (isSaudiPublicG4TajweedAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Tajweed (Optional addition, Grade 4 — Qur’an Memorization Schools textbook)'
        : 'التجويد (إضافة اختيارية — كتاب مدارس تحفيظ القرآن، الصف الرابع)';
    }
    if (isSaudiPublicG5TajweedAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Tajweed (Optional addition, Grade 5 — Memorization Schools textbook)'
        : 'التجويد (إضافة اختيارية — كتاب مدارس تحفيظ القرآن، الصف الخامس)';
    }
    if (isSaudiPublicG6TajweedAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Tajweed (Optional addition, Grade 6 — Memorization Schools textbook)'
        : 'التجويد (إضافة اختيارية — كتاب مدارس تحفيظ القرآن، الصف السادس)';
    }
    return isEn ? 'Tajweed (not available for this education type)' : 'التجويد (غير متاح لنوع التعليم المحدد)';
  }

  if (subject === 'QURAN_RECITATION') {
    if (isSaudiPublicG5QuranRecitationAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Quran Recitation and Tajweed (Grade 5)'
        : 'تلاوة القرآن الكريم وتجويده (الصف الخامس)';
    }
    if (isSaudiPublicG6QuranRecitationAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Quran Recitation and Tajweed (Grade 6)'
        : 'تلاوة القرآن الكريم وتجويده (الصف السادس)';
    }
    return isEn
      ? 'Quran Recitation and Tajweed (not available for this education type)'
      : 'تلاوة القرآن الكريم وتجويده (غير متاح لنوع التعليم المحدد)';
  }

  if (subject === 'VISUAL_ARTS') {
    if (isSaudiPublicG2VisualArtsAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Art Education (Grade 2)'
        : 'التربية الفنية (الصف الثاني)';
    }
    if (isSaudiPublicG3VisualArtsAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Art Education (Grade 3)'
        : 'التربية الفنية (الصف الثالث)';
    }
    if (isSaudiPublicG4VisualArtsAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Art Education (Grade 4)'
        : 'التربية الفنية (الصف الرابع)';
    }
    if (isSaudiPublicG5VisualArtsAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Art Education (Grade 5)'
        : 'التربية الفنية (الصف الخامس)';
    }
    if (isSaudiPublicG6VisualArtsAvailable(country, _gradeLevel, educationType)) {
      return isEn
        ? 'Art Education (Grade 6)'
        : 'التربية الفنية (الصف السادس)';
    }
    return isEn
      ? 'Art Education (not available for this grade or education type)'
      : 'التربية الفنية (غير متاحة لهذا الصف أو نوع التعليم)';
  }

  if (country === 'SD') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return isEn ? 'Arabic Language (Bakht Al-Ruda)' : 'اللغة العربية (العربية لغتي - بخت الرضا)';
      case 'ARABIC_LANG':
        return isEn ? 'Arabic Language (Intermediate Stage)' : 'اللغة العربية (المرحلة المتوسطة السودانية)';
      case 'PRIMARY_MATH':
        return isEn ? 'Mathematics (Bakht Al-Ruda Primary)' : 'الرياضيات والحساب (المرحلة الابتدائية - بخت الرضا)';
      case 'PRIMARY_SCIENCE':
        return isEn ? 'Natural Science & Environment (Primary)' : 'العلوم الطبيعية والبيئة (المرحلة الابتدائية)';
      case 'GENERAL_SCIENCE':
        return isEn ? 'General Science (Intermediate Stage)' : 'العلوم العامة (المرحلة المتوسطة السودانية)';
      case 'COMPUTER_SCIENCE':
        return isEn ? 'ICT & Computer Studies' : 'الحاسوب والتعليم الرقمي';
      case 'MATH':
        return isEn ? 'Mathematics (Sudanese Curriculum)' : 'الرياضيات (المنهج القومي السوداني)';
      case 'PHYSICS':
        return isEn ? 'Physics (Sudanese Secondary)' : 'الفيزياء (المرحلة الثانوية السودانية)';
      case 'CHEMISTRY':
        return isEn ? 'Chemistry (Sudanese Secondary)' : 'الكيمياء (المرحلة الثانوية السودانية)';
      case 'BIOLOGY':
        return isEn ? 'Biology (Sudanese Secondary)' : 'الأحياء (المرحلة الثانوية السودانية)';
      case 'ARABIC_LIT':
        return isEn ? 'Arabic Literature & Sudanese Poetry' : 'الأدب العربي وروائع الشعر السوداني';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Studies (Quran & Fiqh)' : 'التربية الإسلامية (القرآن والفقه والسيرة)';
      case 'GEOGRAPHY':
        return isEn ? 'Geography & Environmental Studies (Bakht Al-Ruda)' : 'الجغرافيا والدراسات البيئية (بخت الرضا)';
      case 'HISTORY':
        return isEn ? 'History (Bakht Al-Ruda Secondary)' : 'التاريخ والحضارة (المرحلة الثانوية - بخت الرضا)';
    }
  }

  if (country === 'EG') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return isEn ? 'Arabic Language (Edu 2.0)' : 'اللغة العربية (التعليم 2.0 - تواصل)';
      case 'ARABIC_LANG':
        return isEn ? 'Arabic Language (Middle School)' : 'اللغة العربية (المرحلة الإعدادية)';
      case 'PRIMARY_MATH':
        return isEn ? 'Mathematics (Primary Edu 2.0)' : 'الرياضيات والحساب (المرحلة الابتدائية المطورة)';
      case 'PRIMARY_SCIENCE':
        if (_gradeLevel === 'G1' || _gradeLevel === 'G2' || _gradeLevel === 'G3') {
          return isEn ? 'Discover & Science (Edu 2.0)' : 'ديسكفر واكتشف والعلوم (التعليم 2.0)';
        }
        return isEn ? 'Science (Edu 2.0 Primary)' : 'العلوم المطورة (التعليم 2.0 الابتدائي)';
      case 'GENERAL_SCIENCE':
        return isEn ? 'General Science (Preparatory)' : 'العلوم العامة (المرحلة الإعدادية)';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Religious Education' : 'التربية الدينية الإسلامية (كتاب الوزارة)';
      case 'MATH':
        return isEn ? 'Mathematics & Algebra' : 'الرياضيات (الجبر والهندسة وحساب المثلثات)';
      case 'PHYSICS':
        return isEn ? 'Physics (General Secondary)' : 'الفيزياء (الثانوية العامة المصرية)';
      case 'CHEMISTRY':
        return isEn ? 'Chemistry (General Secondary)' : 'الكيمياء (الثانوية العامة المصرية)';
      case 'BIOLOGY':
        return isEn ? 'Biology & Geology (Secondary)' : 'الأحياء والجيولوجيا (الثانوية العامة)';
      case 'COMPUTER_SCIENCE':
        return isEn ? 'ICT & Computer Science' : 'تكنولوجيا المعلومات والحاسب الآلي';
      case 'ARABIC_LIT':
        return isEn ? 'Arabic Rhetoric & Grammar' : 'اللغة العربية والنحو والأدب (الثانوية العامة)';
      default:
        break;
    }
  }

  if (country === 'SA') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        if (isSaudiPublicG2PrimaryArabicAvailable(country, _gradeLevel, educationType, track)) {
          return isEn
            ? 'Arabic Language (Saudi public Grade 2 — verified printed Part One contents)'
            : 'لغتي (الصف الثاني الحكومي — فهرس الجزء الأول المطبوع موثق)';
        }
        if (isSaudiPublicG3PrimaryArabicAvailable(country, _gradeLevel, educationType, track)) {
          return isEn
            ? 'Arabic Language (Saudi public Grade 3 — verified printed Part One contents)'
            : 'لغتي (الصف الثالث الحكومي — فهرس الجزء الأول المطبوع موثق)';
        }
        if (isSaudiPublicG4PrimaryArabicAvailable(country, _gradeLevel, educationType, track)) {
          return isEn
            ? 'Arabic Language (Saudi public Grade 4 — verified printed Part One contents)'
            : 'لغتي الجميلة (الصف الرابع الحكومي — فهرس الجزء الأول المطبوع موثق)';
        }
        return isEn ? 'Arabic Language (Lughati Al-Jameelah)' : 'لغتي الجميلة (المرحلة الابتدائية السعودية)';
      case 'ARABIC_LANG':
        return isEn ? 'Arabic Language (Lughati Al-Khalidah)' : 'لغتي الخالدة (المرحلة المتوسطة السعودية)';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Studies' : 'الدراسات الإسلامية';
      case 'PRIMARY_MATH':
        if (isSaudiPublicG3PrimaryMathAvailable(country, _gradeLevel, educationType)) {
          return isEn
            ? 'Mathematics (Saudi public Grade 3 — verified printed Part One contents)'
            : 'الرياضيات (الصف الثالث الحكومي — فهرس الجزء الأول المطبوع موثق)';
        }
        if (_gradeLevel === 'G3') {
          return isEn
            ? 'Mathematics (Saudi Grade 3 — unverified education type)'
            : 'الرياضيات (الصف الثالث السعودي — نوع التعليم غير متحقق)';
        }
        return isEn ? 'Primary Mathematics (Saudi)' : 'الرياضيات (المرحلة الابتدائية - فصول ثلاثة)';
      case 'PRIMARY_SCIENCE':
        if (_gradeLevel === 'G3') {
          return educationType === 'PUBLIC'
            ? isEn
              ? 'Science (Saudi public Grade 3 — verified printed Part One contents)'
              : 'العلوم (الصف الثالث الحكومي — فهرس الجزء الأول المطبوع موثق)'
            : isEn
              ? 'Science (Saudi Grade 3 — unverified education type)'
              : 'العلوم (الصف الثالث السعودي — نوع التعليم غير متحقق)';
        }
        return isEn ? 'Primary Science (Saudi)' : 'العلوم (المرحلة الابتدائية السعودية)';
      case 'GENERAL_SCIENCE':
        return isEn ? 'Middle School Science' : 'العلوم (المرحلة المتوسطة السعودية)';
      case 'MATH':
        if (_gradeLevel === 'G10' && educationType === 'PUBLIC') {
          return isEn ? 'Mathematics 1-1 (Common First Year)' : 'رياضيات 1-1 (السنة الأولى المشتركة)';
        }
        if (_gradeLevel === 'G11' && educationType === 'PUBLIC') {
          return isEn ? 'Mathematics 2-1 (Saudi Pathways)' : 'رياضيات 2-1 (نظام المسارات)';
        }
        return isEn ? 'Mathematics (Masarat Track)' : 'الرياضيات (نظام مسارات الثانوية)';
      case 'PHYSICS':
        if (_gradeLevel === 'G10') {
          return educationType === 'PUBLIC'
            ? isEn ? 'Physics 1 (Common First Year)' : 'الفيزياء 1 (السنة الأولى المشتركة)'
            : isEn ? 'Physics 1 (Unverified Track)' : 'الفيزياء 1 (مسار غير متحقق)';
        }
        if (_gradeLevel === 'G11') {
          return isSaudiPublicG11PhysicsAvailable(country, _gradeLevel, educationType, track)
            ? isEn ? 'Physics 2 (Second Secondary)' : 'الفيزياء 2 (الصف الثاني الثانوي)'
            : isEn ? 'Physics 2 (Unverified Track)' : 'الفيزياء 2 (مسار غير متحقق)';
        }
        return isEn ? 'Physics (CS & Engineering)' : 'الفيزياء (مسار علوم الحاسب والهندسة)';
      case 'CHEMISTRY':
        if (_gradeLevel === 'G10' && educationType === 'PUBLIC') {
          return isEn ? 'Chemistry 1 (Common First Year)' : 'الكيمياء 1 (السنة الأولى المشتركة)';
        }
        if (_gradeLevel === 'G11' && educationType === 'PUBLIC') {
          return isEn ? 'Chemistry 2-1 (Second Secondary)' : 'الكيمياء 2-1 (الصف الثاني الثانوي)';
        }
        if (_gradeLevel === 'G11') {
          return isEn ? 'Chemistry 2-1 (Unverified Track)' : 'الكيمياء 2-1 (مسار غير متحقق)';
        }
        if (_gradeLevel === 'G12' && educationType === 'PUBLIC') {
          return isEn ? 'Chemistry 3 (Third Secondary)' : 'الكيمياء 3 (الثالث الثانوي)';
        }
        return isEn ? 'Chemistry (Health & Life)' : 'الكيمياء (مسار الصحة والحياة)';
      case 'BIOLOGY':
        if (_gradeLevel === 'G10') {
          return educationType === 'PUBLIC'
            ? isEn ? 'Biology 1 (Common First Year)' : 'الأحياء 1 (السنة الأولى المشتركة)'
            : isEn ? 'Biology 1 (Unverified Track)' : 'الأحياء 1 (مسار غير متحقق)';
        }
        if (_gradeLevel === 'G11') {
          return isSaudiPublicG11BiologyAvailable(country, _gradeLevel, educationType, track)
            ? isEn ? 'Biology 2-1 (Second Secondary)' : 'الأحياء 2-1 (الصف الثاني الثانوي)'
            : isEn ? 'Biology 2-1 (Unverified Track)' : 'الأحياء 2-1 (مسار غير متحقق)';
        }
        return isEn ? 'Biology (Health & Life)' : 'الأحياء (مسار الصحة والحياة)';
      case 'HEALTH_SCIENCE':
        return isSaudiPublicG11HealthScienceAvailable(country, _gradeLevel, educationType, track)
          ? isEn ? 'Health Science Principles (Second Secondary)' : 'مبادئ العلوم الصحية (الصف الثاني الثانوي)'
          : isEn ? 'Health Science Principles (Unverified Track)' : 'مبادئ العلوم الصحية (مسار غير متحقق)';
      case 'HISTORY':
        if (_gradeLevel === 'G11') {
          return educationType === 'PUBLIC' && track === 'GENERAL'
            ? isEn ? 'History (Second Secondary)' : 'التاريخ (الصف الثاني الثانوي)'
            : isEn ? 'History (Unverified Track)' : 'التاريخ (مسار غير متحقق)';
        }
        break;
      case 'ENGLISH':
        return isSaudiPublicG2EnglishAvailable(country, _gradeLevel, educationType)
          ? isEn ? 'English (We Can! Student’s Book 2 — Grade 2)' : 'اللغة الإنجليزية (We Can! كتاب الطالب 2 — الصف الثاني)'
          : isSaudiPublicG3EnglishAvailable(country, _gradeLevel, educationType)
          ? isEn ? 'English (We Can! Student’s Book 3 — Grade 3)' : 'اللغة الإنجليزية (We Can! كتاب الطالب 3 — الصف الثالث)'
          : isSaudiPublicG5EnglishAvailable(country, _gradeLevel, educationType)
          ? isEn ? 'English (Top Goal, Student Book 2 — Grade 5)' : 'اللغة الإنجليزية (Top Goal، كتاب الطالب 2 — الصف الخامس)'
          : isSaudiPublicCommonYearEnglishAvailable(country, _gradeLevel, educationType)
          ? isEn ? 'English 1 (Mega Goal)' : 'اللغة الإنجليزية 1 (Mega Goal)'
          : _gradeLevel === 'G10'
          ? isEn ? 'English 1 (Unverified Track)' : 'اللغة الإنجليزية 1 (مسار غير متحقق)'
          : isSaudiPublicG11EnglishAvailable(country, _gradeLevel, educationType)
          ? isEn ? 'English 2 (Mega Goal 2)' : 'اللغة الإنجليزية 2 (Mega Goal 2)'
          : _gradeLevel === 'G11'
          ? isEn ? 'English 2 (Unverified Track)' : 'اللغة الإنجليزية 2 (مسار غير متحقق)'
          : isEn ? `English (Unverified ${_gradeLevel ?? 'Saudi'} edition)` : `اللغة الإنجليزية (${_gradeLevel ?? 'صف سعودي'} غير متحقق)`;
      case 'LIFE_SKILLS':
        return isSaudiPublicG3LifeSkillsAvailable(country, _gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills (Grade 3)'
            : 'المهارات الحياتية والأسرية (الصف الثالث)'
          : isSaudiPublicG4LifeSkillsAvailable(country, _gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills (Grade 4)'
            : 'المهارات الحياتية والأسرية (الصف الرابع)'
          : isSaudiPublicG5LifeSkillsAvailable(country, _gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills (Grade 5)'
            : 'المهارات الحياتية والأسرية (الصف الخامس)'
          : _gradeLevel === 'G6' &&
          isSaudiPublicG6LifeSkillsAvailable(country, _gradeLevel, educationType, track)
          ? isEn
            ? 'Life and Family Skills (Grade 6)'
            : 'المهارات الحياتية والأسرية (الصف السادس)'
          : isEn
            ? 'Life and Family Skills (not available for this grade, track, or education type)'
            : 'المهارات الحياتية والأسرية (غير متاحة لهذا الصف أو المسار أو نوع التعليم)';
      case 'COMPUTER_SCIENCE':
        if (_gradeLevel === 'G11') {
          return isSaudiPublicBusinessG11DigitalTechnologyAvailable(
            country,
            _gradeLevel,
            educationType,
            track
          )
            ? isEn ? 'Digital Technology 2 (Business Management)' : 'التقنية الرقمية 2 (مسار إدارة الأعمال)'
            : isEn ? 'Digital Technology 2 (Unverified Track)' : 'التقنية الرقمية 2 (مسار غير متحقق)';
        }
        if (country === 'SA' && _gradeLevel === 'G4') {
          return educationType === 'PUBLIC'
            ? isEn ? 'Digital Skills (Grade 4)' : 'المهارات الرقمية (الصف الرابع)'
            : isEn
              ? 'Digital Skills (not available for this education type)'
              : 'المهارات الرقمية (غير متاحة لنوع التعليم هذا)';
        }
        if (country === 'SA' && _gradeLevel === 'G5') {
          return isSaudiPublicG5DigitalSkillsAvailable(country, _gradeLevel, educationType, track)
            ? isEn ? 'Digital Skills (Grade 5)' : 'المهارات الرقمية (الصف الخامس)'
            : isEn
              ? 'Digital Skills (not available for this track or education type)'
              : 'المهارات الرقمية (غير متاحة لهذا المسار أو نوع التعليم)';
        }
        if (_gradeLevel === 'G6') {
          return isSaudiPublicG6DigitalSkillsAvailable(country, _gradeLevel, educationType, track)
            ? isEn ? 'Digital Skills (Grade 6)' : 'المهارات الرقمية (الصف السادس)'
            : isEn
              ? 'Digital Skills (not available for this track or education type)'
              : 'المهارات الرقمية (غير متاحة لهذا المسار أو نوع التعليم)';
        }
        return isEn ? 'Digital Technology (Masarat)' : 'التقنية الرقمية وعلوم الحاسب';
      case 'ARABIC_LIT':
        if (_gradeLevel === 'G10' && educationType === 'PUBLIC') {
          return isEn
            ? 'Arabic Language 1-1 (Language Competencies)'
            : 'اللغة العربية 1-1 (الكفايات اللغوية)';
        }
        if (_gradeLevel === 'G11' && educationType === 'PUBLIC') {
          return isEn
            ? 'Arabic Language 1-2 (Language Competencies)'
            : 'اللغة العربية 1-2 (الكفايات اللغوية)';
        }
        return isEn ? 'Literary Studies (Sharia Track)' : 'الدراسات الأدبية واللغوية (المسار الشرعي)';
      default:
        break;
    }
  }

  if (country === 'AE') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return isEn ? 'Arabic Language (UAE Cycles)' : 'اللغة العربية (سلسلة ألف باء الإمارات)';
      case 'PRIMARY_MATH':
        return isEn ? 'Integrated Mathematics (ESE)' : 'الرياضيات المتكاملة (مؤسسة الإمارات)';
      case 'PRIMARY_SCIENCE':
        return isEn ? 'Integrated Science (ESE)' : 'العلوم المتكاملة والاستكشاف (مؤسسة الإمارات)';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Education & Identity' : 'التربية الإسلامية والهوية الوطنية الإماراتية';
      default:
        break;
    }
  }

  if (country === 'KW') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return 'لغتي العربية (منهج الكفايات الكويتي)';
      case 'PRIMARY_MATH':
        return 'الرياضيات (وزارة التربية الكويتية)';
      case 'PRIMARY_SCIENCE':
        return 'العلوم (وزارة التربية الكويتية)';
      case 'ISLAMIC_STUDIES':
        return 'التربية الإسلامية والقرآن الكريم (الكويت)';
      default:
        break;
    }
  }

  if (country === 'JO') {
    switch (subject) {
      case 'PRIMARY_MATH':
        return 'الرياضيات (مناهج كولينز الوطنية المطورة)';
      case 'PRIMARY_SCIENCE':
        return 'العلوم (مناهج كولينز الوطنية المطورة)';
      case 'PRIMARY_ARABIC':
        return 'اللغة العربية (مهارات الاتصال - الأردن)';
      case 'ISLAMIC_STUDIES':
        return 'التربية الإسلامية (المملكة الأردنية)';
      default:
        break;
    }
  }

  if (country === 'OM') {
    switch (subject) {
      case 'PRIMARY_MATH':
        return 'الرياضيات (سلاسل كامبريدج المطبقة بعُمان)';
      case 'PRIMARY_SCIENCE':
        return 'العلوم (سلاسل كامبريدج المطبقة بعُمان)';
      case 'PRIMARY_ARABIC':
        return _gradeLevel && ['G1', 'G2', 'G3', 'G4'].includes(_gradeLevel) ? 'أحب لغتي (التعليم الأساسي العماني)' : 'لغتي الجميلة (التعليم الأساسي العماني)';
      case 'ISLAMIC_STUDIES':
        return 'ديني قيمي (التربية الإسلامية بسلطنة عمان)';
      default:
        break;
    }
  }

  if (country === 'MA') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return 'المفيد / مرشدي في اللغة العربية (المغرب)';
      case 'PRIMARY_MATH':
        return 'المرجع في الرياضيات (المنهاج المنقح - المغرب)';
      case 'PRIMARY_SCIENCE':
        return 'النشاط العلمي (التعليم الابتدائي بالمغرب)';
      case 'ISLAMIC_STUDIES':
        return 'التربية الإسلامية (الممتاز في التربية الإسلامية)';
      default:
        break;
    }
  }

  if (country === 'DZ') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return 'كتابي في اللغة العربية (الجيل الثاني - الجزائر)';
      case 'PRIMARY_MATH':
        return 'كتاب الرياضيات (الجيل الثاني - الجزائر)';
      case 'PRIMARY_SCIENCE':
        return 'التربية العلمية والتكنولوجية (الجزائر)';
      case 'ISLAMIC_STUDIES':
        return 'التربية الإسلامية (الجيل الثاني - الجزائر)';
      default:
        break;
    }
  }

  if (country === 'TN') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return 'قراءة وتواصل وإنتاج كتابي (تونس)';
      case 'PRIMARY_MATH':
        return 'الرياضيات (التعليم الأساسي التونسي)';
      case 'PRIMARY_SCIENCE':
        return 'الإيقاظ العلمي (المرحلة الأولى - تونس)';
      case 'ISLAMIC_STUDIES':
        return 'التربية الإسلامية (التعليم الأساسي بتونس)';
      default:
        break;
    }
  }

  // Fallback labels
  switch (subject) {
    case 'PRIMARY_ARABIC':
      return isEn ? 'Arabic Language (Primary Stage)' : 'اللغة العربية (المرحلة الابتدائية)';
    case 'ARABIC_LANG':
      return isEn ? 'Arabic Language (Middle / Preparatory)' : 'اللغة العربية (المرحلة المتوسطة / الإعدادية)';
    case 'PRIMARY_MATH':
      return isEn ? 'Elementary Mathematics & Arithmetic' : 'الرياضيات والحساب (المرحلة الابتدائية)';
    case 'PRIMARY_SCIENCE':
      return isEn ? 'Elementary Science & Exploration' : 'العلوم والاستكشاف (المرحلة الابتدائية)';
    case 'GENERAL_SCIENCE':
      return isEn ? 'General Science (Middle School)' : 'العلوم العامة (المرحلة المتوسطة)';
    case 'ISLAMIC_STUDIES':
      return isEn ? 'Islamic Religious Studies' : 'التربية الإسلامية والدراسات الدينية';
    case 'MATH':
      return isEn ? 'General Mathematics & Algebra' : 'الرياضيات (الجبر والدوال)';
    case 'PHYSICS':
      return isEn ? 'Physics' : 'الفيزياء';
    case 'CHEMISTRY':
      return isEn ? 'Chemistry' : 'الكيمياء';
    case 'BIOLOGY':
      return isEn ? 'Biology & Life Sciences' : 'علم الأحياء وعلوم الحياة';
    case 'ENGLISH':
      return isEn ? 'English Language (textbook not verified)' : 'اللغة الإنجليزية (كتاب غير متحقق منه)';
    case 'COMPUTER_SCIENCE':
      return isEn ? 'Computer Science & AI' : 'علوم الحاسب والذكاء الاصطناعي';
    case 'ARABIC_LIT':
      return isEn ? 'Arabic Literature & Rhetoric' : 'اللغة العربية والبلاغة والأدب';
    case 'GEOGRAPHY':
      return isEn ? 'Geography & Environmental Studies' : 'الجغرافيا والدراسات البيئية';
    case 'HISTORY':
      return isEn ? 'History' : 'التاريخ';
    default:
      return subject;
  }
}

/**
 * Deep Country Curriculum Adaptor:
 * Tailors lectures seamlessly to reflect the target country's authentic curriculum:
 * 1. Ministry and national textbook titles.
 * 2. Currency units in word problems.
 * 3. Geographic, cultural, and national landmarks in warmups, examples, and checks.
 * 4. National educational system structure and standard codes.
 */
export function adaptCurriculumToCountry(
  lectures: Lecture[],
  country: CountryCode,
  subject: Subject,
  gradeLevel: GradeLevel,
  educationType: EducationType = 'PUBLIC',
  track: EducationTrack = 'GENERAL',
  lang: Language = 'ar'
): Lecture[] {
  const cInfo = getCountryInfo(country);
  const natTextbook = getNationalTextbookInfo(country, subject, gradeLevel, track, lang, educationType);

  // Replacement patterns for currencies
  const currencyReplacements: { from: RegExp; to: string }[] = [
    { from: /ريالاً\s*سعودياً|ريالاً|ريالات|ريال\s*سعودي/g, to: cInfo.currencyAr },
    { from: /جنيهات|جنيهاً|جنيه\s*مصري/g, to: cInfo.currencyAr },
    { from: /دراهم|درهماً|درهم\s*إماراتي/g, to: cInfo.currencyAr },
    { from: /دنانير|ديناراً|دينار\s*كويتي|دينار\s*أردني|دينار\s*بحريني|دينار\s*عراقي|دينار\s*جزائري|دينار\s*تونسي/g, to: cInfo.currencyAr },
    { from: /SAR|EGP|AED|KWD|JOD|OMR|QAR|BHD|IQD|MAD|DZD|TND/g, to: cInfo.currencyCode }
  ];

  // Specific city / landmark replacements
  const cityReplacements: { from: RegExp; to: string }[] = [];
  if (country === 'EG') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض القاهرة الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*جدة/g, to: 'مدينة القاهرة' },
      { from: /واحة\s*الأحساء/g, to: 'واحات الفيوم ووادي النيل' },
      { from: /جبال\s*السروات/g, to: 'جبال البحر الأحمر وسانت كاترين' }
    );
  } else if (country === 'SD') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي|معرض\s*القاهرة\s*الدولي\s*للكتاب/g, to: 'معرض الخرطوم الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة|مدينة\s*جدة/g, to: 'مدينة الخرطوم وأم درمان' },
      { from: /واحة\s*الأحساء|واحات\s*الفيوم/g, to: 'مقرن النيلين والجزيرة' },
      { from: /جبال\s*السروات|جبال\s*البحر\s*الأحمر/g, to: 'جبل مرة وتلال البحر الأحمر' }
    );
  } else if (country === 'AE') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض الشارقة الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة أبوظبي ودبي' },
      { from: /واحة\s*الأحساء/g, to: 'واحة العين الخضراء' }
    );
  } else if (country === 'KW') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض الكويت الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة الكويت' }
    );
  } else if (country === 'JO') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض عمّان الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة عمّان' },
      { from: /واحة\s*الأحساء/g, to: 'واحة وادي رم والبحر الميت' }
    );
  } else if (country === 'OM') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض مسقط الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة مسقط وصلالة' }
    );
  } else if (country === 'QA') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض الدوحة الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة الدوحة ولوسيل' }
    );
  } else if (country === 'MA') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'المعرض الدولي للنشر والكتاب بالرباط' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة الرباط والدار البيضاء' }
    );
  } else if (country === 'DZ') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'صالون الجزائر الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة الجزائر العاصمة ووهران' }
    );
  } else if (country === 'TN') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض تونس الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة تونس وصفاقس' }
    );
  } else if (country === 'IQ') {
    cityReplacements.push(
      { from: /معرض\s*الرياض\s*الدولي\s*للكتاب|معرض\s*الكتاب\s*المدرسي/g, to: 'معرض بغداد الدولي للكتاب' },
      { from: /مدينة\s*الرياض|مدينة\s*القاهرة/g, to: 'مدينة بغداد والبصرة' }
    );
  }

  // Strict text sanitizer to purge cross-country terminology when a country is selected
  const applyTextTransforms = (text?: string): string => {
    if (!text) return '';
    let result = text;
    // Apply currency adaptations
    for (const cr of currencyReplacements) {
      result = result.replace(cr.from, cr.to);
    }
    // Apply city adaptations
    for (const lr of cityReplacements) {
      result = result.replace(lr.from, lr.to);
    }
    // Strict Sudanese national curriculum sanitizer: eliminate all foreign terms
    if (country === 'SD') {
      const sudanSanitizers: { from: RegExp; to: string }[] = [
        { from: /جمهورية\s*مصر\s*العربية|جمهورية\s*مصر/g, to: 'جمهورية السودان' },
        { from: /المملكة\s*العربية\s*السعودية|المملكة/g, to: 'جمهورية السودان' },
        { from: /الصف\s*الثالث\s*الإعدادي|الصف\s*الثاني\s*الإعدادي|الصف\s*الأول\s*الإعدادي|المرحلة\s*الإعدادية/g, to: 'المرحلة المتوسطة بالسودان' },
        { from: /الشهادة\s*الإعدادية/g, to: 'شهادة المرحلة المتوسطة' },
        { from: /الثانوية\s*العامة\s*المصرية|الثانوية\s*العامة/g, to: 'الشهادة الثانوية السودانية' },
        { from: /بنك\s*المعرفة\s*المصري|التعليم\s*2\.0/g, to: 'المركز القومي للمناهج والبحث التربوي (بخت الرضا)' },
        { from: /نظام\s*المسارات|الفصول\s*الثلاثة/g, to: 'السلم التعليمي السوداني (6-3-3)' },
        { from: /وزارة\s*التربية\s*والتعليم\s*والتعليم\s*الفني|وزارة\s*التعليم\s*السعودية/g, to: 'وزارة التربية والتعليم الاتحادية بالسودان' },
        { from: /رؤية\s*المملكة\s*2030|رؤية\s*2030/g, to: 'أهداف التعليم القومي بجمهورية السودان' },
        { from: /سلسلة\s*الأضواء|سلسلة\s*سلاح\s*التلميذ|سلسلة\s*المعاصر/g, to: 'سلسلة كتب بخت الرضا القومية' },
        { from: /محافظة\s*القاهرة|محافظة\s*الجيزة|محافظة\s*الإسكندرية/g, to: 'ولاية الخرطوم وولاية الجزيرة' },
        { from: /منطقة\s*الرياض|منطقة\s*مكة|مدينة\s*جدة/g, to: 'العاصمة القومية وولايات السودان' },
        { from: /نهر\s*النيل\s*بمصر/g, to: 'نهر النيل وملتقى النيلين بالخرطوم' }
      ];
      for (const s of sudanSanitizers) {
        result = result.replace(s.from, s.to);
      }
    }
    return result;
  };

  function getMinistryAuthority(countryCode: CountryCode, eduType: EducationType): { ministryAr: string; authorityAr: string; examNameAr: string } {
    if (countryCode === 'EG') {
      if (eduType === 'ISLAMIC') {
        return {
          ministryAr: 'قطاع المعاهد الأزهرية - مشيخة الأزهر الشريف',
          authorityAr: 'الإدارة المركزية للمناهج والكتب بالأزهر الشريف بمصر',
          examNameAr: 'امتحانات الشهادة الأزهرية'
        };
      }
      return {
        ministryAr: 'وزارة التربية والتعليم والتعليم الفني - جمهورية مصر العربية',
        authorityAr: 'مركز تطوير المناهج والمواد التعليمية (بنك المعرفة المصري)',
        examNameAr: 'امتحانات الثانوية العامة والشهادات المصرية'
      };
    }
    if (countryCode === 'SD') {
      if (eduType === 'ISLAMIC') {
        return {
          ministryAr: 'وزارة التربية والتعليم الاتحادية - إدارة التعليم الديني والقرآني',
          authorityAr: 'إدارة المعاهد العلمية والدينية بجمهورية السودان',
          examNameAr: 'امتحانات الشهادة الأهلية والدينية السودانية'
        };
      }
      return {
        ministryAr: 'وزارة التربية والتعليم الاتحادية - جمهورية السودان',
        authorityAr: 'المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
        examNameAr: 'امتحانات الشهادة الثانوية والابتدائية السودانية'
      };
    }
    if (countryCode === 'SA') {
      if (eduType === 'ISLAMIC') {
        return {
          ministryAr: 'وزارة التعليم - المعاهد العلمية ومدارس تحفيظ القرآن الكريم',
          authorityAr: 'وكالة البرامج التعليمية ومدارس تحفيظ القرآن بالمملكة',
          examNameAr: 'اختبارات التحصيل الدراسي والمعاهد العلمية'
        };
      }
      return {
        ministryAr: 'وزارة التعليم - المملكة العربية السعودية',
        authorityAr: 'الإدارة العامة للمناهج (نظام الفصول الثلاثة والمسارات)',
        examNameAr: 'اختبارات نافس والتحصيلي والقدرات بالمملكة'
      };
    }
    if (countryCode === 'AE') {
      return {
        ministryAr: 'مؤسسة الإمارات للتعليم المدرسي - وزارة التربية والتعليم',
        authorityAr: 'قطاع المناهج الوطنية بدولة الإمارات العربية المتحدة',
        examNameAr: 'اختبارات الإمارات القياسية (EmSAT)'
      };
    }
    if (countryCode === 'JO') {
      return {
        ministryAr: 'وزارة التربية والتعليم - المملكة الأردنية الهاشمية',
        authorityAr: 'إدارة المناهج والكتب المدرسية الأردنية',
        examNameAr: 'امتحان شهادة الدراسة الثانوية العامة (التوجيهي)'
      };
    }
    if (countryCode === 'KW') {
      return {
        ministryAr: 'وزارة التربية - دولة الكويت',
        authorityAr: 'قطاع البحوث التربوية والمناهج بدولة الكويت',
        examNameAr: 'الامتحانات الموحدة لوزارة التربية الكويتية'
      };
    }
    if (countryCode === 'QA') {
      return {
        ministryAr: 'وزارة التربية والتعليم والتعليم العالي - دولة قطر',
        authorityAr: 'إدارة المناهج ومصادر التعلم بدولة قطر',
        examNameAr: 'اختبارات الشهادة الثانوية العامة القطرية'
      };
    }
    if (countryCode === 'OM') {
      return {
        ministryAr: 'وزارة التربية والتعليم - سلطنة عمان',
        authorityAr: 'المديرية العامة لتطوير المناهج بسلطنة عمان',
        examNameAr: 'امتحانات دبلوم التعليم العام بسلطنة عمان'
      };
    }
    if (countryCode === 'BH') {
      return {
        ministryAr: 'وزارة التربية والتعليم - مملكة البحرين',
        authorityAr: 'إدارة المناهج بوزارة التربية والتعليم بمملكة البحرين',
        examNameAr: 'الامتحانات الوطنية والشهادة الثانوية بالبحرين'
      };
    }
    if (countryCode === 'IQ') {
      return {
        ministryAr: 'وزارة التربية - جمهورية العراق',
        authorityAr: 'المديرية العامة للمناهج بالعراق',
        examNameAr: 'الامتحانات الوزارية العامة (البكالوريا)'
      };
    }
    if (countryCode === 'MA') {
      return {
        ministryAr: 'وزارة التربية الوطنية والتعليم الأولي والرياضة - المملكة المغربية',
        authorityAr: 'مديرية المناهج بالمملكة المغربية',
        examNameAr: 'امتحانات نيل شهادة البكالوريا المغربية'
      };
    }
    if (countryCode === 'DZ') {
      return {
        ministryAr: 'وزارة التربية الوطنية - الجمهورية الجزائرية الديمقراطية الشعبية',
        authorityAr: 'المعهد الوطني للبحث في التربية بالجزائر',
        examNameAr: 'امتحان شهادة البكالوريا الجزائرية'
      };
    }
    if (countryCode === 'TN') {
      return {
        ministryAr: 'وزارة التربية - الجمهورية التونسية',
        authorityAr: 'الإدارة العامة للبرامج والتكوين المستمر بتونس',
        examNameAr: 'امتحان البكالوريا التونسية'
      };
    }
    return {
      ministryAr: 'المعايير التعليمية الوطنية المعتمدة',
      authorityAr: 'المجلس الأكاديمي لتطوير المناهج',
      examNameAr: 'الاختبارات القياسية المعتمدة'
    };
  }

  function generateNationalSectionsForOverride(
    override: NationalLessonOverride,
    idx: number,
    countryCode: CountryCode,
    eduType: EducationType
  ): LectureSection[] {
    const auth = getMinistryAuthority(countryCode, eduType);
    const countryName = getCountryInfo(countryCode).nameAr;
    const eduTypeLabel = eduType === 'ISLAMIC' ? 'التعليم الشرعي / الأزهري' : (eduType === 'PRIVATE' ? 'التعليم الخاص' : (eduType === 'INTERNATIONAL' ? 'التعليم الدولي' : 'التعليم العام'));

    return [
      {
        titleAr: `1. الشرح المفاهيمي والأساس العلمي: ${override.titleAr}`,
        titleEn: `1. Conceptual Fundamentals: ${override.titleEn || override.titleAr}`,
        contentAr: `${override.descriptionAr} يتناول هذا الدرس وفق المعايير الرسمية المعتمدة لدى (${auth.ministryAr} - ${countryName}) ومقررات ${eduTypeLabel} دراسة موضوع "${override.topicAr}"، وما يرتبط به من محاور وقوانين تأسيسية وتطبيقات حيوية. ${override.subtitleAr}. يحرص المنهج الوطني على ربط الجانب النظري بالواقع العملي لإكساب الطالب الفهم العميق والمهارات التحليلية المطلوبة.`,
        contentEn: `According to the official curriculum standards of ${auth.ministryAr}, this unit addresses ${override.topicAr}. ${override.subtitleEn || ''}`,
        tipsAr: [
          `التركيز على المفاهيم الجوهرية المعتمدة رسمياً في (${auth.authorityAr}).`,
          `استحضار التطبيقات والمسائل النموذجية للتحضير المباشر لـ (${auth.examNameAr}).`
        ],
        tipsEn: [
          'Focus on core ministerial syllabus concepts.',
          'Review worked examples to prepare for national assessments.'
        ],
        interactiveExample: {
          titleAr: `مثال تطبيقي ومسألة محلولة: ${override.titleAr}`,
          titleEn: `Worked Example: ${override.titleEn || override.titleAr}`,
          equation: `${override.topicAr} - ${auth.ministryAr}`,
          steps: [
            {
              stepNumber: 1,
              textAr: `تحديد المعطيات والمفاهيم الأساسية المستفادة من: ${override.subtitleAr}`,
              textEn: 'Step 1: Identify given parameters and underlying principles.'
            },
            {
              stepNumber: 2,
              textAr: `تطبيق القواعد العلمية والخطوات المنهجية المعتمدة لدى (${auth.authorityAr}) للوصول إلى النتيجة الصحيحة النموذجية.`,
              textEn: 'Step 2: Apply the analytical steps to derive the exact standardized solution.'
            }
          ],
          takeawayAr: `استيعاب درس "${override.titleAr}" وفق معايير (${auth.ministryAr}) يرسخ الفهم العميق ويضمن التفوق في (${auth.examNameAr}).`,
          takeawayEn: 'Mastering this topic guarantees strong conceptual foundation and academic excellence.'
        },
        formativeCheck: {
          id: `nat-fc-${countryCode.toLowerCase()}-${eduType.toLowerCase()}-${idx + 1}`,
          questionAr: `ما هو المحور الأساسي الذي يركز عليه هذا الدرس في ${override.unitTitleAr}؟`,
          questionEn: `What is the primary focus of this lesson in ${override.unitTitleEn || override.unitTitleAr}?`,
          optionsAr: [
            override.titleAr,
            'مفاهيم عامة خارج المقرر المعتمد',
            'قوانين نظرية ملغاة من الخطة الدراسية',
            'مراجعة غير مرتبطة بالوحدة المقررة'
          ],
          optionsEn: [
            override.titleEn || override.titleAr,
            'General extraneous theories',
            'Unrelated concepts',
            'Non-syllabus review'
          ],
          correctIndex: 0,
          explanationAr: `يركز هذا الدرس وفق كتاب المنهج الرسمي لـ (${auth.ministryAr}) على دراسة "${override.titleAr}" وتطبيقاتها العلمية والعملية.`,
          explanationEn: `This lesson focuses specifically on ${override.titleEn || override.titleAr} aligned with official national syllabus.`
        }
      }
    ];
  }

  function generateNationalAssessmentForOverride(
    override: NationalLessonOverride,
    idx: number,
    countryCode: CountryCode,
    eduType: EducationType
  ): Assessment {
    const auth = getMinistryAuthority(countryCode, eduType);

    return {
      id: `nat-assess-${countryCode.toLowerCase()}-${eduType.toLowerCase()}-${idx + 1}`,
      titleAr: `اختبار تقييم استيعاب: ${override.titleAr}`,
      titleEn: `Mastery Assessment: ${override.titleEn || override.titleAr}`,
      passingScore: 80,
      questions: [
        {
          id: `nat-q-${countryCode.toLowerCase()}-${idx + 1}-1`,
          textAr: `في سياق دراسة ${override.topicAr} وفق معايير (${auth.ministryAr})، ما هو الهدف التعليمي الأهم لهذا الدرس؟`,
          textEn: `In the context of studying ${override.topicEn || override.topicAr}, what is the main objective?`,
          optionsAr: [
            `إتقان وفهم: ${override.titleAr}`,
            'حفظ القوانين دون فهم التطبيقات الواقعية',
            'دراسة موضوعات من خارج الخطة الدراسية المعتمدة',
            'تجاوز الخطوات المنهجية المحددة في الدليل'
          ],
          optionsEn: [
            `Mastering: ${override.titleEn || override.titleAr}`,
            'Rote memorization only',
            'Studying outside topics',
            'Bypassing methodology'
          ],
          correctIndex: 0,
          conceptTestedAr: `استيعاب أهداف: ${override.titleAr}`,
          conceptTestedEn: 'Syllabus objective mastery',
          explanationAr: `يهدف الدرس بصورة أساسية إلى تمكين الطالب من استيعاب "${override.titleAr}" وتطبيق مهاراته في (${auth.examNameAr}).`,
          explanationEn: `The lesson empowers the student to master ${override.titleEn || override.titleAr} in accordance with official national exams.`,
          difficulty: 'medium'
        },
        {
          id: `nat-q-${countryCode.toLowerCase()}-${idx + 1}-2`,
          textAr: `أي العبارات الآتية تعبر بدقة عن محتوى الدرس في ${override.unitTitleAr}؟`,
          textEn: `Which statement accurately reflects the lesson content in ${override.unitTitleEn || override.unitTitleAr}?`,
          optionsAr: [
            override.subtitleAr,
            'الدرس لا يشمل أي تطبيقات عملية في المنهج المعتمد',
            'الموضوع يقتصر على سرد عام دون تفاصيل علمية',
            'محتوى لا ينتمي للمنهج الوطني الرسمي'
          ],
          optionsEn: [
            override.subtitleEn || override.subtitleAr,
            'No practical applications in curriculum',
            'General recount without detail',
            'Non-curriculum content'
          ],
          correctIndex: 0,
          conceptTestedAr: `المفاهيم والمهارات في: ${override.titleAr}`,
          conceptTestedEn: 'Conceptual skills',
          explanationAr: `المحتوى العلمي المعتمد يركز على: ${override.subtitleAr}.`,
          explanationEn: `The syllabus focuses directly on: ${override.subtitleEn || override.subtitleAr}.`,
          difficulty: 'easy'
        }
      ]
    };
  }

  // 1. Guard against mangling dedicated authentic national curricula:
  const isAlreadyDedicated = lectures.length > 0 && lectures.every(l => l.country === country);
  const nationalOverrides = getNationalLessonOverrides(country, subject, gradeLevel, educationType, track);

  if (isAlreadyDedicated && !nationalOverrides) {
    return lectures;
  }

  const totalCount = nationalOverrides && nationalOverrides.length > 0
    ? Math.max(lectures.length, nationalOverrides.length)
    : lectures.length;

  const result: Lecture[] = [];

  for (let index = 0; index < totalCount; index++) {
    const baseLec = lectures[index] || lectures[index % Math.max(1, lectures.length)] || lectures[0];
    const override = nationalOverrides && nationalOverrides[index] ? nationalOverrides[index] : null;

    const finalTitleAr = override?.titleAr || applyTextTransforms(baseLec?.titleAr || `الدرس ${index + 1}`);
    const finalTitleEn = override?.titleEn || baseLec?.titleEn || `Lesson ${index + 1}`;
    const finalSubtitleAr = override?.subtitleAr || applyTextTransforms(baseLec?.subtitleAr || baseLec?.descriptionAr || '');
    const finalSubtitleEn = override?.subtitleEn || baseLec?.subtitleEn || baseLec?.descriptionEn || '';
    const finalTopicAr = override?.topicAr || applyTextTransforms(baseLec?.topicAr || '');
    const finalTopicEn = override?.topicEn || baseLec?.topicEn || '';
    const finalUnitTitleAr = override?.unitTitleAr || baseLec?.unitTitleAr || finalTopicAr;
    const finalUnitTitleEn = override?.unitTitleEn || baseLec?.unitTitleEn || finalTopicEn;
    const finalDescriptionAr = override?.descriptionAr || applyTextTransforms(baseLec?.descriptionAr || '');
    const finalDescriptionEn = override?.descriptionEn || baseLec?.descriptionEn || '';
    const finalLessonNumberAr = override?.lessonNumberAr || baseLec?.lessonNumberAr || `الدرس ${index + 1}`;
    
    const auth = getMinistryAuthority(country, educationType);
    const finalWarmupHookAr = override?.warmupHookAr 
      || (override
        ? `مرحباً بك في دراسة "${override.titleAr}" وفق المعايير الرسمية المعتمدة لدى (${auth.ministryAr}). سنستكشف في هذا الدرس ${override.topicAr} ونتعرف على أهم القوانين والتطبيقات العلمية والعملية المرتبطة بها.`
        : applyTextTransforms(baseLec?.warmupHookAr || ''));

    const finalSummaryAr = override?.summaryAr 
      || (override
        ? `ملخص المنهج الرسمي: تناول هذا الدرس دراسة ${override.titleAr} و${override.topicAr} وفق معايير (${auth.authorityAr}) مع التركيز على المهارات والتطبيقات الأساسية لـ (${auth.examNameAr}).`
        : applyTextTransforms(baseLec?.summaryAr || ''));

    // Clone lecture deeply with authentic national adaptation
    const adapted: Lecture = {
      ...baseLec,
      id: `${country.toLowerCase()}-${educationType.toLowerCase()}-${subject.toLowerCase()}-${(gradeLevel || 'g').toLowerCase()}-lec-${index + 1}`,
      titleAr: finalTitleAr,
      titleEn: finalTitleEn,
      subtitleAr: finalSubtitleAr,
      subtitleEn: finalSubtitleEn,
      topicAr: finalTopicAr,
      topicEn: finalTopicEn,
      unitTitleAr: finalUnitTitleAr,
      unitTitleEn: finalUnitTitleEn,
      descriptionAr: finalDescriptionAr,
      descriptionEn: finalDescriptionEn,
      lessonNumberAr: finalLessonNumberAr,
      order: index + 1,
      gradeLevelNameAr: `${cInfo.nameAr} - ${natTextbook.textbookName}`,
      gradeLevelNameEn: `${cInfo.nameEn} - ${natTextbook.textbookName}`,
      ministryAr: auth.ministryAr || natTextbook.ministry,
      ministryEn: natTextbook.ministry,
      termAr: natTextbook.semester,
      termEn: natTextbook.semester,
      country,
      educationType,
      educationTrack: track,
      warmupHookAr: finalWarmupHookAr,
      summaryAr: finalSummaryAr,
      isLocked: index > 0,
      isCompleted: false,
      learningOutcomesAr: override?.learningOutcomesAr || (override ? [
        `أن يستوعب الطالب المفاهيم الأساسية في ${override.titleAr} وفق معايير ${auth.authorityAr}.`,
        `أن يحلل الطالب القوانين والقواعد العلمية المتعلقة بـ ${override.topicAr}.`,
        `أن يطبق القواعد والمهارات في حل التدريبات والمسائل الامتحانية لـ ${auth.examNameAr}.`
      ] : baseLec?.learningOutcomesAr),
      vocabulary: override?.vocabulary || (override ? [
        { termAr: override.topicAr, termEn: override.topicEn || override.topicAr, definitionAr: `مفهوم أساسي ضمن مقرر ${override.unitTitleAr} المعتمد من ${auth.authorityAr}.` }
      ] : baseLec?.vocabulary),
      keyConceptsAr: override?.keyConceptsAr || (override ? [
        override.titleAr,
        override.topicAr,
        `تطبيقات المنهج المعتمد (${auth.authorityAr})`
      ] : baseLec?.keyConceptsAr),
      sections: (override?.sections && override.sections.length > 0)
        ? override.sections
        : (override
          ? generateNationalSectionsForOverride(override, index, country, educationType)
          : (baseLec?.sections ? baseLec.sections.map(sec => ({
              ...sec,
              titleAr: applyTextTransforms(sec.titleAr),
              contentAr: applyTextTransforms(sec.contentAr),
              interactiveExample: sec.interactiveExample ? {
                ...sec.interactiveExample,
                titleAr: applyTextTransforms(sec.interactiveExample.titleAr),
                steps: sec.interactiveExample.steps ? sec.interactiveExample.steps.map(st => ({
                  ...st,
                  textAr: applyTextTransforms(st.textAr),
                  noteAr: applyTextTransforms(st.noteAr)
                })) : [],
                takeawayAr: applyTextTransforms(sec.interactiveExample.takeawayAr)
              } : undefined,
              formativeCheck: sec.formativeCheck ? {
                ...sec.formativeCheck,
                questionAr: applyTextTransforms(sec.formativeCheck.questionAr),
                optionsAr: sec.formativeCheck.optionsAr ? sec.formativeCheck.optionsAr.map(opt => applyTextTransforms(opt)) : [],
                explanationAr: applyTextTransforms(sec.formativeCheck.explanationAr)
              } : undefined
            })) : [])),
      assessment: override?.assessment || (override
        ? generateNationalAssessmentForOverride(override, index, country, educationType)
        : (baseLec?.assessment ? {
            ...baseLec.assessment,
            titleAr: applyTextTransforms(baseLec.assessment.titleAr),
            questions: baseLec.assessment.questions ? baseLec.assessment.questions.map(q => ({
              ...q,
              textAr: applyTextTransforms(q.textAr),
              optionsAr: q.optionsAr ? q.optionsAr.map(opt => applyTextTransforms(opt)) : [],
              conceptTestedAr: applyTextTransforms(q.conceptTestedAr),
              explanationAr: applyTextTransforms(q.explanationAr)
            })) : []
          } : baseLec?.assessment))
    };

    result.push(adapted);
  }

  return result;
}
