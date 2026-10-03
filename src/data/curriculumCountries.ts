import type { CountryCode, EducationTrack, EducationType, GradeLevel, Language, Subject } from '../types';

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
  hasHighSchoolTracks: boolean; // e.g. Saudi Masarat
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
    systemNameAr: 'المنهج السعودي المعتمد (نظام المسارات)',
    systemNameEn: 'Official Saudi National Curriculum (Masarat System)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Trimester / Term 2',
    termsCount: 3,
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
    systemNameAr: 'المنهج المصري المعتمد (الثانوية العامة المطورة)',
    systemNameEn: 'Official Egyptian National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني (الترم الثاني)',
    termDefaultEn: 'Second Semester / Term 2',
    termsCount: 2,
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
    ministryEn: 'Ministry of Education - UAE',
    systemNameAr: 'المنهج الإماراتي المعتمد (المسار العام والمتقدم)',
    systemNameEn: 'Official UAE National Curriculum (General & Advanced Tracks)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Term 2',
    termsCount: 3,
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
    systemNameAr: 'المنهج الكويتي المعتمد (النظام الموحد)',
    systemNameEn: 'Official Kuwaiti National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC']
  },
  JO: {
    code: 'JO',
    flag: '🇯🇴',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Jordan',
    ministryAr: 'وزارة التربية والتعليم بالمملكة الأردنية',
    ministryEn: 'Ministry of Education - Hashemite Kingdom of Jordan',
    systemNameAr: 'المنهج الأردني المعتمد (التوجيهي الوطني)',
    systemNameEn: 'Official Jordanian National Curriculum (Tawjihi)',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
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
    systemNameAr: 'المنهج العُماني المعتمد (التعليم الأساسي وما بعد الأساسي)',
    systemNameEn: 'Official Omani National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'ISLAMIC']
  },
  QA: {
    code: 'QA',
    flag: '🇶🇦',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    ministryAr: 'وزارة التربية والتعليم والتعليم العالي بقطر',
    ministryEn: 'Ministry of Education and Higher Education - Qatar',
    systemNameAr: 'المنهج القطري المعتمد (المسار العلمي والأدبي والتكنولوجي)',
    systemNameEn: 'Official Qatari National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
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
    systemNameAr: 'المنهج البحريني المعتمد (نظام توحيد المسارات)',
    systemNameEn: 'Official Bahraini National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
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
    ministryEn: 'Ministry of Education - Iraq',
    systemNameAr: 'المنهج العراقي المعتمد (الفرع العلمي والأدبي)',
    systemNameEn: 'Official Iraqi National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
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
    ministryEn: 'Ministry of National Education - Morocco',
    systemNameAr: 'المنهاج المغربي المعتمد (سلك البكالوريا)',
    systemNameEn: 'Official Moroccan National Curriculum (Baccalaureate)',
    termDefaultAr: 'الدورة الثانية',
    termDefaultEn: 'Second Semester',
    termsCount: 2,
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE', 'INTERNATIONAL']
  },
  DZ: {
    code: 'DZ',
    flag: '🇩🇿',
    nameAr: 'الجمهورية الجزائرية',
    nameEn: 'Algeria',
    ministryAr: 'وزارة التربية الوطنية بالجزائر',
    ministryEn: 'Ministry of National Education - Algeria',
    systemNameAr: 'المنهاج الجزائري المعتمد (شعب البكالوريا)',
    systemNameEn: 'Official Algerian National Curriculum',
    termDefaultAr: 'الفصل الدراسي الثاني',
    termDefaultEn: 'Second Term',
    termsCount: 3,
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'SCIENCE_BIO', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE']
  },
  TN: {
    code: 'TN',
    flag: '🇹🇳',
    nameAr: 'الجمهورية التونسية',
    nameEn: 'Tunisia',
    ministryAr: 'وزارة التربية التونسية',
    ministryEn: 'Ministry of Education - Tunisia',
    systemNameAr: 'البرنامج التعليمي التونسي المعتمد (شعب الباكالوريا)',
    systemNameEn: 'Official Tunisian National Curriculum',
    termDefaultAr: 'الثلاثي الثاني',
    termDefaultEn: 'Second Trimester',
    termsCount: 3,
    hasHighSchoolTracks: true,
    availableTracks: ['GENERAL', 'SCIENCE_MATH', 'CS_ENGINEERING', 'SHARIA_HUMANITIES'],
    availableTypes: ['PUBLIC', 'PRIVATE']
  },
  INTL: {
    code: 'INTL',
    flag: '🌍',
    nameAr: 'المنهج الدولي والمعايير العامة',
    nameEn: 'International / General Standards',
    ministryAr: 'معايير التعليم الدولية والمناهج المعتمدة',
    ministryEn: 'International Academic & Pedagogical Standards',
    systemNameAr: 'المنهج العام الدولي المعتمد',
    systemNameEn: 'International General Curriculum',
    termDefaultAr: 'الفصل الثاني',
    termDefaultEn: 'Term 2',
    termsCount: 2,
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

  const textbookMap: Record<string, string> = {
    // Saudi Arabia
    'SA_PRIMARY_MATH_G4': 'رياضيات الصف الرابع الابتدائي - الفصل الدراسي الثاني',
    'SA_PRIMARY_MATH_G6': 'رياضيات الصف السادس الابتدائي - الفصل الدراسي الثاني',
    'SA_PRIMARY_ARABIC_G4': 'لغتي الجميلة - الصف الرابع الابتدائي',
    'SA_PRIMARY_ARABIC_G6': 'لغتي الجميلة - الصف السادس الابتدائي',
    'SA_PRIMARY_SCIENCE_G4': 'العلوم - الصف الرابع الابتدائي (الفصل الثاني)',
    'SA_PRIMARY_SCIENCE_G6': 'العلوم - الصف السادس الابتدائي',
    'SA_ISLAMIC_STUDIES_G4': 'الدراسات الإسلامية - الصف الرابع الابتدائي',
    'SA_ISLAMIC_STUDIES_G6': 'الدراسات الإسلامية - الصف السادس الابتدائي',
    'SA_ARABIC_LANG_G7': 'لغتي الخالدة - أول متوسط',
    'SA_ARABIC_LANG_G8': 'لغتي الخالدة - ثاني متوسط',
    'SA_ARABIC_LANG_G9': 'لغتي الخالدة - ثالث متوسط',
    'SA_MATH_G7': 'الرياضيات (الأعداد النسبية والجبر والإحصاء) - أول متوسط',
    'SA_MATH_G8': 'الرياضيات (الجبر والهندسة والقياس) - ثاني متوسط',
    'SA_MATH_G9': 'الرياضيات (الدوال الخطية والتحليل) - ثالث متوسط',
    'SA_MATH_G10': 'الرياضيات 1-2 (مسارات السنة الأولى المشتركة)',
    'SA_COMPUTER_SCIENCE_G7': 'المهارات الرقمية وتكنولوجيا المعلومات - أول متوسط',
    'SA_COMPUTER_SCIENCE_G8': 'المهارات الرقمية وتكنولوجيا المعلومات - ثاني متوسط',
    'SA_COMPUTER_SCIENCE_G9': 'المهارات الرقمية والبرمجة - ثالث متوسط',
    'SA_PHYSICS_G12': 'الفيزياء 3 (مسار علوم الحاسب والهندسة)',
    'SA_CHEMISTRY_G11': 'الكيمياء 2-1 (مسار الصحة والحياة)',
    'SA_BIOLOGY_G11': 'الأحياء 2-1 (مسار الصحة والحياة)',
    'SA_COMPUTER_SCIENCE_G11': 'التقنية الرقمية 2-1 (مسار علوم الحاسب والهندسة)',
    'SA_ARABIC_LIT_G12': 'الدراسات الأدبية واللغوية (المسار الشرعي والإنساني)',
    // Egypt (وزارة التربية والتعليم المصرية - التعليم 2.0 والثانوية العامة)
    'EG_PRIMARY_MATH_G4': 'الرياضيات - الصف الرابع الابتدائي (كتاب الوزارة وسلاح التلميذ)',
    'EG_PRIMARY_MATH_G6': 'الرياضيات - الصف السادس الابتدائي (منهج التعليم 2.0 المطور)',
    'EG_PRIMARY_ARABIC_G4': 'اللغة العربية - الصف الرابع الابتدائي (كتاب التلميذ)',
    'EG_PRIMARY_ARABIC_G6': 'اللغة العربية - الصف السادس الابتدائي (كتاب التلميذ - التعليم 2.0)',
    'EG_PRIMARY_SCIENCE_G4': 'العلوم - الصف الرابع الابتدائي (التعليم 2.0)',
    'EG_PRIMARY_SCIENCE_G6': 'العلوم - الصف السادس الابتدائي (التعليم 2.0 المطور)',
    'EG_ISLAMIC_STUDIES_G4': 'التربية الدينية الإسلامية - الصف الرابع الابتدائي',
    'EG_ISLAMIC_STUDIES_G6': 'التربية الدينية الإسلامية - الصف السادس الابتدائي',
    'EG_ARABIC_LANG_G7': 'اللغة العربية - الصف الأول الإعدادي',
    'EG_ARABIC_LANG_G8': 'اللغة العربية - الصف الثاني الإعدادي',
    'EG_ARABIC_LANG_G9': 'اللغة العربية - الصف الثالث الإعدادي (الشهادة الإعدادية)',
    'EG_GENERAL_SCIENCE_G7': 'العلوم - الصف الأول الإعدادي',
    'EG_GENERAL_SCIENCE_G8': 'العلوم - الصف الثاني الإعدادي',
    'EG_GENERAL_SCIENCE_G9': 'العلوم - الصف الثالث الإعدادي',
    'EG_MATH_G7': 'الرياضيات (الجبر والإحصاء والهندسة والتحويلات) - الصف الأول الإعدادي (مدارس اللغات والتعليم العام)',
    'EG_MATH_G8': 'الرياضيات (الجبر والأعداد الحقيقية والهندسة) - الصف الثاني الإعدادي',
    'EG_MATH_G9': 'الرياضيات (الجبر والإحصاء وحساب المثلثات) - الصف الثالث الإعدادي (الشهادة الإعدادية)',
    'EG_MATH_G10': 'الرياضيات العامة - الصف الأول الثانوي',
    'EG_COMPUTER_SCIENCE_G7': 'تكنولوجيا المعلومات والاتصالات والحاسب الآلي (ICT & Computer) - الصف الأول الإعدادي (مدارس اللغات والرسمية)',
    'EG_COMPUTER_SCIENCE_G8': 'الكمبيوتر وتكنولوجيا المعلومات - الصف الثاني الإعدادي',
    'EG_COMPUTER_SCIENCE_G9': 'الكمبيوتر وتكنولوجيا المعلومات - الصف الثالث الإعدادي',
    'EG_PHYSICS_G12': 'الفيزياء للثانوية العامة (القسم العلمي)',
    'EG_CHEMISTRY_G12': 'الكيمياء للثانوية العامة (شعبة علمي علوم وعلمي رياضة)',
    'EG_BIOLOGY_G12': 'الأحياء للثانوية العامة (شعبة علمي علوم)',
    'EG_ARABIC_LIT_G12': 'اللغة العربية وقواعد النحو والأدب - الثانوية العامة',
    // UAE
    'AE_PRIMARY_MATH_G4': 'الرياضيات - الصف الرابع (مؤسسة الإمارات للتعليم المدرسي)',
    'AE_PRIMARY_ARABIC_G4': 'اللغة العربية - الصف الرابع (الحلقة الأولى)',
    'AE_PRIMARY_ARABIC_G6': 'اللغة العربية - الصف السادس (الحلقة الثانية)',
    'AE_PHYSICS_G12': 'الفيزياء المتقدمة - الصف الثاني عشر (المسار المتقدم)',
    'AE_COMPUTER_SCIENCE_G11': 'علوم الحاسوب والابتكار - مسار النخبة والمتقدم'
  };

  const key = `${country}_${subject}_${gradeLevel}`;
  const textbookName = textbookMap[key] || `${isEn ? 'Official National Textbook for' : 'الكتاب الوزاري المعتمد لمادة'} ${subject}`;

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
        return isEn ? 'Arabic Language (Student Book - Education 2.0)' : 'اللغة العربية (كتاب التلميذ - التعليم 2.0)';
      case 'ARABIC_LANG':
        return isEn ? 'Arabic Language (Preparatory / Middle School)' : 'اللغة العربية (المرحلة الإعدادية)';
      case 'PRIMARY_MATH':
        return isEn ? 'Mathematics & Arithmetic (Primary School)' : 'الرياضيات والحساب (المرحلة الابتدائية)';
      case 'PRIMARY_SCIENCE':
        if (_gradeLevel === 'G1' || _gradeLevel === 'G2' || _gradeLevel === 'G3') {
          return isEn ? 'Discover & Science (Education 2.0)' : 'ديسكفر والعلوم (التعليم 2.0 - ابتدائي)';
        }
        return isEn ? 'Science (Education 2.0 Primary)' : 'العلوم (التعليم 2.0 - ابتدائي)';
      case 'GENERAL_SCIENCE':
        return isEn ? 'General Science (Preparatory School)' : 'العلوم (المرحلة الإعدادية)';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Religious Education' : 'التربية الدينية الإسلامية';
      case 'MATH':
        return isEn ? 'General Mathematics & Algebra' : 'الرياضيات العامة والجبر';
      case 'PHYSICS':
        return isEn ? 'Physics (General Secondary)' : 'الفيزياء (الثانوية العامة)';
      case 'CHEMISTRY':
        return isEn ? 'Chemistry (General Secondary)' : 'الكيمياء (الثانوية العامة)';
      case 'BIOLOGY':
        return isEn ? 'Biology & Geology (General Secondary)' : 'الأحياء والجيولوجيا (الثانوية العامة)';
      case 'COMPUTER_SCIENCE':
        return isEn ? 'Information Technology & Computer' : 'تكنولوجيا المعلومات والحاسب الآلي';
      case 'ARABIC_LIT':
        return isEn ? 'Arabic Grammar & Rhetoric (High School)' : 'اللغة العربية والنحو والبلاغة';
      default:
        break;
    }
  }

  if (country === 'SA') {
    switch (subject) {
      case 'PRIMARY_ARABIC':
        return isEn ? 'Arabic Language (Lughati Al-Jameelah)' : 'اللغة العربية (لغتي الجميلة - ابتدائي)';
      case 'ARABIC_LANG':
        return isEn ? 'Arabic Language (Lughati Al-Khalidah - Middle)' : 'اللغة العربية (لغتي الخالدة - متوسط)';
      case 'ISLAMIC_STUDIES':
        return isEn ? 'Islamic Studies (Tawheed & Fiqh)' : 'الدراسات الإسلامية (ابتدائي)';
      case 'PRIMARY_MATH':
        return isEn ? 'Primary Mathematics' : 'الرياضيات (المرحلة الابتدائية)';
      case 'PRIMARY_SCIENCE':
        return isEn ? 'Primary Science' : 'العلوم (المرحلة الابتدائية)';
      case 'GENERAL_SCIENCE':
        return isEn ? 'Middle School Science' : 'العلوم (المرحلة المتوسطة)';
      case 'MATH':
        return isEn ? 'Mathematics (Masarat Track)' : 'الرياضيات (نظام المسارات)';
      case 'PHYSICS':
        return isEn ? 'Physics (Masarat Track)' : 'الفيزياء (مسار الهندسة والحاسب)';
      case 'CHEMISTRY':
        return isEn ? 'Chemistry (Masarat Track)' : 'الكيمياء (مسار الصحة والحياة)';
      case 'BIOLOGY':
        return isEn ? 'Biology (Masarat Track)' : 'الأحياء (مسار الصحة والحياة)';
      case 'COMPUTER_SCIENCE':
        return isEn ? 'Digital Technology (Masarat)' : 'التقنية الرقمية وعلوم الحاسب';
      case 'ARABIC_LIT':
        return isEn ? 'Literary Studies (Sharia Track)' : 'الدراسات الأدبية واللغوية (المسار الشرعي)';
      default:
        break;
    }
  }

  // Standard / Universal Arab World Subject Names
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
      return isEn ? 'Islamic Education & Ethics' : 'التربية الإسلامية والدراسات الدينية';
    case 'MATH':
      return isEn ? 'Mathematics (Algebra & Functions)' : 'الرياضيات (الجبر والدوال)';
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

