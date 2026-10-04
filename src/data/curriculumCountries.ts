import type { CountryCode, EducationTrack, EducationType, GradeLevel, Language, Subject, Lecture, LectureSection, Assessment } from '../types';
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
    systemNameAr: 'المنهج السعودي المعتمد (نظام الفصول الثلاثة والمسارات)',
    systemNameEn: 'Official Saudi National Curriculum (Masarat System)',
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
        textbookName = `الرياضيات (${gradeAr}) - وزارة التعليم السعودية (نظام الفصول الثلاثة)`;
      } else if (subject === 'PRIMARY_ARABIC') {
        textbookName = `لغتي الجميلة (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`;
      } else if (subject === 'PRIMARY_SCIENCE') {
        textbookName = `العلوم (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`;
      } else if (subject === 'ISLAMIC_STUDIES') {
        textbookName = `الدراسات الإسلامية (التوحيد والفقه والسلوك والحديث) (${gradeAr})`;
      } else if (subject === 'ARABIC_LANG') {
        textbookName = `لغتي الخالدة (${gradeAr}) - وزارة التعليم السعودية`;
      } else if (subject === 'GENERAL_SCIENCE') {
        textbookName = `العلوم (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`;
      } else if (subject === 'MATH') {
        textbookName = isMiddle
          ? `الرياضيات (${gradeAr}) - وزارة التعليم بالمملكة العربية السعودية`
          : gradeLevel === 'G10'
          ? 'الرياضيات 1 (السنة الأولى المشتركة - نظام المسارات)'
          : gradeLevel === 'G11'
          ? 'الرياضيات 2 (المسار العام ومسار علوم الحاسب والهندسة)'
          : 'الرياضيات 3 (مسار علوم الحاسب والهندسة والمسار العام)';
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = isMiddle
          ? `المهارات الرقمية (${gradeAr}) - وزارة التعليم السعودية`
          : gradeLevel === 'G10'
          ? 'التقنية الرقمية 1 (السنة الأولى المشتركة)'
          : gradeLevel === 'G11'
          ? 'علم البيانات وهندسة البرمجيات (مسار علوم الحاسب والهندسة)'
          : 'الذكاء الاصطناعي وإنترنت الأشياء (مسار علوم الحاسب والهندسة)';
      } else if (subject === 'PHYSICS') {
        textbookName = gradeLevel === 'G10'
          ? 'الفيزياء 1 (السنة الأولى المشتركة - نظام المسارات)'
          : gradeLevel === 'G11'
          ? 'الفيزياء 2 (مسار علوم الحاسب والهندسة والصحة)'
          : 'الفيزياء 3 (مسار علوم الحاسب والهندسة)';
      } else if (subject === 'CHEMISTRY') {
        textbookName = gradeLevel === 'G10'
          ? 'الكيمياء 1 (السنة الأولى المشتركة - نظام المسارات)'
          : gradeLevel === 'G11'
          ? 'الكيمياء 2 (مسار الصحة والحياة والعلوم)'
          : 'الكيمياء 3 (مسار الصحة والحياة)';
      } else if (subject === 'BIOLOGY') {
        textbookName = gradeLevel === 'G10'
          ? 'علم البيئة / الأحياء 1 (السنة الأولى المشتركة)'
          : gradeLevel === 'G11'
          ? 'الأحياء 2 (مسار الصحة والحياة)'
          : 'الأحياء 3 (مسار الصحة والحياة)';
      } else if (subject === 'ARABIC_LIT') {
        textbookName = gradeLevel === 'G10'
          ? 'الكفايات اللغوية 1 (السنة الأولى المشتركة - مسارات)'
          : gradeLevel === 'G11'
          ? 'الدراسات الأدبية واللغوية (المسار الشرعي والإنساني)'
          : 'البلاغة والنقد المتقدم (المسار الشرعي والإنساني)';
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

  return {
    textbookName,
    ministry,
    standardCode: `${country}-${educationType}-${subject}-${gradeLevel}-${track}`,
    semester: isEn ? cInfo.termDefaultEn : cInfo.termDefaultAr
  };
}

/**
 * Returns accurately localized subject name adapted to the country's national education system
 */
export function getNationalSubjectLabel(
  subject: Subject,
  country: CountryCode = 'SA',
  _gradeLevel?: GradeLevel,
  lang: Language = 'ar'
): string {
  const isEn = lang === 'en';

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
        return isEn ? 'Arabic Language (Lughati Al-Jameelah)' : 'لغتي الجميلة (المرحلة الابتدائية السعودية)';
      case 'ARABIC_LANG':
        return isEn ? 'Arabic Language (Lughati Al-Khalidah)' : 'لغتي الخالدة (المرحلة المتوسطة السعودية)';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Studies (Masarat)' : 'الدراسات الإسلامية (التوحيد والفقه والسلوك)';
      case 'PRIMARY_MATH':
        return isEn ? 'Primary Mathematics (Saudi)' : 'الرياضيات (المرحلة الابتدائية - فصول ثلاثة)';
      case 'PRIMARY_SCIENCE':
        return isEn ? 'Primary Science (Saudi)' : 'العلوم (المرحلة الابتدائية السعودية)';
      case 'GENERAL_SCIENCE':
        return isEn ? 'Middle School Science' : 'العلوم (المرحلة المتوسطة السعودية)';
      case 'MATH':
        return isEn ? 'Mathematics (Masarat Track)' : 'الرياضيات (نظام مسارات الثانوية)';
      case 'PHYSICS':
        return isEn ? 'Physics (CS & Engineering)' : 'الفيزياء (مسار علوم الحاسب والهندسة)';
      case 'CHEMISTRY':
        return isEn ? 'Chemistry (Health & Life)' : 'الكيمياء (مسار الصحة والحياة)';
      case 'BIOLOGY':
        return isEn ? 'Biology (Health & Life)' : 'الأحياء (مسار الصحة والحياة)';
      case 'COMPUTER_SCIENCE':
        return isEn ? 'Digital Technology (Masarat)' : 'التقنية الرقمية وعلوم الحاسب';
      case 'ARABIC_LIT':
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
    case 'COMPUTER_SCIENCE':
      return isEn ? 'Computer Science & AI' : 'علوم الحاسب والذكاء الاصطناعي';
    case 'ARABIC_LIT':
      return isEn ? 'Arabic Literature & Rhetoric' : 'اللغة العربية والبلاغة والأدب';
    case 'GEOGRAPHY':
      return isEn ? 'Geography & Environmental Studies' : 'الجغرافيا والدراسات البيئية';
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

  function generateSudanSectionsForOverride(override: NationalLessonOverride, idx: number): LectureSection[] {
    return [
      {
        titleAr: `1. الشرح النظري والمفاهيم: ${override.titleAr}`,
        titleEn: `1. Core Concepts: ${override.titleEn || override.titleAr}`,
        contentAr: `${override.descriptionAr} يتناول هذا الدرس وفق مفردات كتاب المنهج القومي لوزارة التربية والتعليم الاتحادية بجمهورية السودان (المركز القومي للمناهج والبحث التربوي بخت الرضا) دراسة موضوع "${override.topicAr}"، وما يرتبط به من أسس علمية وتطبيقات عملية في البيئة السودانية والتجارب الوطنية. ${override.subtitleAr}. يحرص المنهج على ربط المفاهيم النظرية بالتطبيقات الحياتية لتزويد الطالب بالمهارات الأساسية للنجاح والتفوق.`,
        contentEn: `According to the authentic Sudanese national syllabus (Bakht Al-Ruda), this lesson covers ${override.topicAr} with practical applications. ${override.subtitleEn || ''}`,
        interactiveExample: {
          titleAr: `تطبيق ومسألة توضيحية: ${override.titleAr}`,
          titleEn: `Worked Example: ${override.titleEn || override.titleAr}`,
          equation: `${override.topicAr} - بخت الرضا`,
          steps: [
            {
              stepNumber: 1,
              textAr: `الخطوة الأولى: تحديد المعطيات والمفاهيم الأساسية المستفادة من: ${override.subtitleAr}`,
              textEn: 'Step 1: Identify given parameters and underlying principles.'
            },
            {
              stepNumber: 2,
              textAr: `الخطوة الثانية: تطبيق القواعد والخطوات العلمية المعتمدة في المنهج القومي السوداني للوصول إلى الحل الدقيق والنموذجي.`,
              textEn: 'Step 2: Apply the national curriculum analytical steps to derive the exact solution.'
            }
          ],
          takeawayAr: `استيعاب درس "${override.titleAr}" وفق معايير كتاب بخت الرضا يرسخ الفهم العميق ويضمن التفوق في امتحانات الشهادة.`,
          takeawayEn: 'Mastering this topic according to Bakht Al-Ruda curriculum standards guarantees solid conceptual grounding.'
        },
        formativeCheck: {
          id: `sd-fc-gen-${idx + 1}`,
          questionAr: `ما هو المحور الأساسي الذي يركز عليه هذا الدرس في ${override.unitTitleAr}؟`,
          questionEn: `What is the primary focus of this lesson in ${override.unitTitleEn || override.unitTitleAr}?`,
          optionsAr: [
            override.titleAr,
            'مفاهيم تمهيدية عامة غير مقررة',
            'قوانين نظرية خارج السلم التعليمي السوداني',
            'مراجعة غير مرتبطة بالوحدة'
          ],
          optionsEn: [
            override.titleEn || override.titleAr,
            'General extraneous theories',
            'Unrelated concepts',
            'Non-syllabus review'
          ],
          correctIndex: 0,
          explanationAr: `يركز هذا الدرس وفق كتاب المنهج القومي السوداني المحدث على دراسة ${override.titleAr} وتطبيقاتها العلمية والعملية.`,
          explanationEn: `This lesson focuses specifically on ${override.titleEn || override.titleAr} aligned with the official national syllabus.`
        }
      }
    ];
  }

  function generateSudanAssessmentForOverride(override: NationalLessonOverride, idx: number): Assessment {
    return {
      id: `sd-assess-gen-${idx + 1}`,
      titleAr: `اختبار تقييم استيعاب: ${override.titleAr}`,
      titleEn: `Mastery Assessment: ${override.titleEn || override.titleAr}`,
      passingScore: 80,
      questions: [
        {
          id: `sd-q-gen-${idx + 1}-1`,
          textAr: `في سياق دراسة ${override.topicAr} وفق المنهج السوداني، ما هو الهدف التعليمي الأهم لهذا الدرس؟`,
          textEn: `In the context of studying ${override.topicEn || override.topicAr}, what is the main objective?`,
          optionsAr: [
            `إتقان وفهم: ${override.titleAr}`,
            'حفظ التعريفات فقط دون فهم التطبيقات',
            'دراسة موضوعات من خارج كتاب بخت الرضا',
            'تجاوز الخطوات المنهجية المعتمدة'
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
          explanationAr: `يهدف الدرس بصورة أساسية إلى تمكين الطالب من استيعاب ${override.titleAr} وتطبيق مهاراته في التمارين والامتحانات القومية بالسودان.`,
          explanationEn: `The lesson empowers the student to master ${override.titleEn || override.titleAr} in accordance with official national exams.`,
          difficulty: 'medium'
        },
        {
          id: `sd-q-gen-${idx + 1}-2`,
          textAr: `أي العبارات الآتية تعبر بدقة عن محتوى الدرس في ${override.unitTitleAr}؟`,
          textEn: `Which statement accurately reflects the lesson content in ${override.unitTitleEn || override.unitTitleAr}?`,
          optionsAr: [
            override.subtitleAr,
            'الدرس لا يشمل أي تطبيقات عملية في السودان',
            'الموضوع يقتصر على سرد تاريخي دون قوانين',
            'محتوى لا ينتمي للمنهج القومي'
          ],
          optionsEn: [
            override.subtitleEn || override.subtitleAr,
            'No practical applications in Sudan',
            'Historical recount only',
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

  const nationalOverrides = getNationalLessonOverrides(country, subject, gradeLevel, educationType, track);

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
    
    // For Sudan, guarantee authentic warmup and summary without bleedover from foreign bases
    const finalWarmupHookAr = override?.warmupHookAr 
      || (country === 'SD' && override
        ? `مرحباً بك في دراسة "${override.titleAr}" وفق مفردات كتاب المنهج القومي لوزارة التربية والتعليم الاتحادية بالسودان (المركز القومي للمناهج والبحث التربوي بخت الرضا). سنستكشف في هذا الدرس ${override.topicAr} ونتعرف على أهم القوانين والتطبيقات العلمية والعملية المرتبطة بها في السودان.`
        : applyTextTransforms(baseLec?.warmupHookAr || ''));

    const finalSummaryAr = override?.summaryAr 
      || (country === 'SD' && override
        ? `ملخص المنهج القومي السوداني: تناول هذا الدرس دراسة ${override.titleAr} و${override.topicAr} وفق معايير المركز القومي للمناهج والبحث التربوي (بخت الرضا) مع التركيز على المهارات والتطبيقات الأساسية.`
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
      ministryAr: natTextbook.ministry,
      ministryEn: natTextbook.ministry,
      termAr: natTextbook.semester,
      termEn: natTextbook.semester,
      country,
      warmupHookAr: finalWarmupHookAr,
      summaryAr: finalSummaryAr,
      isLocked: index > 0,
      isCompleted: false,
      learningOutcomesAr: override?.learningOutcomesAr || (country === 'SD' && override ? [
        `أن يستوعب الطالب المفاهيم الأساسية في ${override.titleAr} وفق منهج بخت الرضا.`,
        `أن يحلل الطالب القوانين والقواعد العلمية المتعلقة بـ ${override.topicAr}.`,
        `أن يطبق القواعد والمهارات في حل التدريبات والمسائل الامتحانية المعتمدة بالسودان.`
      ] : baseLec?.learningOutcomesAr),
      vocabulary: override?.vocabulary || (country === 'SD' && override ? [
        { termAr: override.topicAr, termEn: override.topicEn || override.topicAr, definitionAr: `مفهوم أساسي ضمن مقرر ${override.unitTitleAr} المعتمد من المركز القومي للمناهج بخت الرضا.` }
      ] : baseLec?.vocabulary),
      keyConceptsAr: override?.keyConceptsAr || (country === 'SD' && override ? [
        override.titleAr,
        override.topicAr,
        'تطبيقات المنهج القومي السوداني المحدث (بخت الرضا)'
      ] : baseLec?.keyConceptsAr),
      sections: (override?.sections && override.sections.length > 0)
        ? override.sections
        : (country === 'SD' && override
          ? generateSudanSectionsForOverride(override, index)
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
      assessment: override?.assessment || (country === 'SD' && override
        ? generateSudanAssessmentForOverride(override, index)
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
