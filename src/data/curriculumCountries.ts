import type { CountryCode, EducationTrack, EducationType, GradeLevel, Language, Subject, Lecture } from '../types';

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
  lang: Language = 'ar'
): { textbookName: string; ministry: string; standardCode: string; semester: string } {
  const cInfo = getCountryInfo(country);
  const isEn = lang === 'en';
  const gradeAr = GRADE_NAMES_AR[gradeLevel] || gradeLevel;
  const gradeEn = GRADE_NAMES_EN[gradeLevel] || gradeLevel;

  let textbookName = '';

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
      } else if (subject === 'MATH') {
        textbookName = gradeLevel === 'G10' ? 'الرياضيات 1-2 (مسارات السنة الأولى المشتركة)' : `الرياضيات (${gradeAr}) - نظام المسارات`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `المهارات والتقنية الرقمية (${gradeAr}) - مسار علوم الحاسب والهندسة`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء (${gradeAr}) - مسار علوم الحاسب والهندسة`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء (${gradeAr}) - مسار الصحة والحياة`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء (${gradeAr}) - مسار الصحة والحياة`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `الدراسات الأدبية واللغوية (${gradeAr}) - المسار الشرعي والإنساني`;
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
        textbookName = `الرياضيات (الجبر والإحصاء والهندسة وحساب المثلثات) - ${gradeAr}`;
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء للثانوية العامة ومدارس اللغات (القسم العلمي) - ${gradeAr}`;
      } else if (subject === 'CHEMISTRY') {
        textbookName = `الكيمياء للثانوية العامة (علمي علوم وعلمي رياضة) - ${gradeAr}`;
      } else if (subject === 'BIOLOGY') {
        textbookName = `الأحياء والجيولوجيا للثانوية العامة (شعبة علمي علوم) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `تكنولوجيا المعلومات والاتصالات والحاسب الآلي (ICT) - ${gradeAr}`;
      } else if (subject === 'ARABIC_LIT') {
        textbookName = `اللغة العربية وقواعد النحو والأدب والبلاغة (الثانوية العامة) - ${gradeAr}`;
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
      } else if (subject === 'PHYSICS') {
        textbookName = `الفيزياء المتقدمة (المسار المتقدم ومسار النخبة) - ${gradeAr}`;
      } else if (subject === 'COMPUTER_SCIENCE') {
        textbookName = `علوم الحاسوب والابتكار والذكاء الاصطناعي - ${gradeAr}`;
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
      } else {
        textbookName = isEn 
          ? `International Curriculum for ${subject} - ${gradeEn}` 
          : `المنهج الدولي المعتمد لمادة ${subject} - ${gradeAr}`;
      }
      break;
  }

  return {
    textbookName,
    ministry: isEn ? cInfo.ministryEn : cInfo.ministryAr,
    standardCode: `${country}-${subject}-${gradeLevel}-${track}`,
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
  lang: Language = 'ar'
): Lecture[] {
  const cInfo = getCountryInfo(country);
  const natTextbook = getNationalTextbookInfo(country, subject, gradeLevel, 'GENERAL', lang);

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
    return result;
  };

  return lectures.map((lec) => {
    // Clone lecture deeply
    const adapted: Lecture = {
      ...lec,
      gradeLevelNameAr: `${cInfo.nameAr} - ${natTextbook.textbookName}`,
      gradeLevelNameEn: `${cInfo.nameEn} - ${natTextbook.textbookName}`,
      ministryAr: cInfo.ministryAr,
      ministryEn: cInfo.ministryEn,
      termAr: natTextbook.semester,
      termEn: natTextbook.semester,
      country,
      warmupHookAr: applyTextTransforms(lec.warmupHookAr),
      summaryAr: applyTextTransforms(lec.summaryAr),
      sections: lec.sections ? lec.sections.map(sec => ({
        ...sec,
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
          optionsAr: sec.formativeCheck.optionsAr.map(opt => applyTextTransforms(opt)),
          explanationAr: applyTextTransforms(sec.formativeCheck.explanationAr)
        } : undefined
      })) : [],
      assessment: lec.assessment ? {
        ...lec.assessment,
        titleAr: applyTextTransforms(lec.assessment.titleAr),
        questions: lec.assessment.questions ? lec.assessment.questions.map(q => ({
          ...q,
          textAr: applyTextTransforms(q.textAr),
          optionsAr: q.optionsAr ? q.optionsAr.map(opt => applyTextTransforms(opt)) : [],
          conceptTestedAr: applyTextTransforms(q.conceptTestedAr),
          explanationAr: applyTextTransforms(q.explanationAr)
        })) : []
      } : lec.assessment
    };

    return adapted;
  });
}
