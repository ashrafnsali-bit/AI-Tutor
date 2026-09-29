import type { CountryCode, Language } from '../types';

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
}

export const SUPPORTED_COUNTRIES: Record<CountryCode, CountryCurriculumInfo> = {
  SA: {
    code: 'SA',
    flag: '🇸🇦',
    nameAr: 'المملكة العربية السعودية',
    nameEn: 'Saudi Arabia',
    ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
    ministryEn: 'Ministry of Education - Kingdom of Saudi Arabia',
    systemNameAr: 'المنهج السعودي المعتمد',
    systemNameEn: 'Official Saudi National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Trimester / Term 1'
  },
  EG: {
    code: 'EG',
    flag: '🇪🇬',
    nameAr: 'جمهورية مصر العربية',
    nameEn: 'Egypt',
    ministryAr: 'وزارة التربية والتعليم والتعليم الفني بمصر',
    ministryEn: 'Ministry of Education and Technical Education - Egypt',
    systemNameAr: 'المنهج المصري المعتمد',
    systemNameEn: 'Official Egyptian National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Semester / Term 1'
  },
  AE: {
    code: 'AE',
    flag: '🇦🇪',
    nameAr: 'دولة الإمارات العربية المتحدة',
    nameEn: 'United Arab Emirates',
    ministryAr: 'وزارة التربية والتعليم بدولة الإمارات',
    ministryEn: 'Ministry of Education - UAE',
    systemNameAr: 'المنهج الإماراتي المعتمد',
    systemNameEn: 'Official UAE National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'Term 1'
  },
  KW: {
    code: 'KW',
    flag: '🇰🇼',
    nameAr: 'دولة الكويت',
    nameEn: 'Kuwait',
    ministryAr: 'وزارة التربية بدولة الكويت',
    ministryEn: 'Ministry of Education - State of Kuwait',
    systemNameAr: 'المنهج الكويتي المعتمد',
    systemNameEn: 'Official Kuwaiti National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Semester'
  },
  JO: {
    code: 'JO',
    flag: '🇯🇴',
    nameAr: 'المملكة الأردنية الهاشمية',
    nameEn: 'Jordan',
    ministryAr: 'وزارة التربية والتعليم بالمملكة الأردنية',
    ministryEn: 'Ministry of Education - Hashemite Kingdom of Jordan',
    systemNameAr: 'المنهج الأردني المعتمد',
    systemNameEn: 'Official Jordanian National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Semester'
  },
  OM: {
    code: 'OM',
    flag: '🇴🇲',
    nameAr: 'سلطنة عُمان',
    nameEn: 'Oman',
    ministryAr: 'وزارة التربية والتعليم بسلطنة عُمان',
    ministryEn: 'Ministry of Education - Sultanate of Oman',
    systemNameAr: 'المنهج العُماني المعتمد',
    systemNameEn: 'Official Omani National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Semester'
  },
  QA: {
    code: 'QA',
    flag: '🇶🇦',
    nameAr: 'دولة قطر',
    nameEn: 'Qatar',
    ministryAr: 'وزارة التربية والتعليم والتعليم العالي بقطر',
    ministryEn: 'Ministry of Education and Higher Education - Qatar',
    systemNameAr: 'المنهج القطري المعتمد',
    systemNameEn: 'Official Qatari National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Semester'
  },
  BH: {
    code: 'BH',
    flag: '🇧🇭',
    nameAr: 'مملكة البحرين',
    nameEn: 'Bahrain',
    ministryAr: 'وزارة التربية والتعليم بمملكة البحرين',
    ministryEn: 'Ministry of Education - Kingdom of Bahrain',
    systemNameAr: 'المنهج البحريني المعتمد',
    systemNameEn: 'Official Bahraini National Curriculum',
    termDefaultAr: 'الفصل الدراسي الأول',
    termDefaultEn: 'First Semester'
  },
  INTL: {
    code: 'INTL',
    flag: '🌍',
    nameAr: 'المنهج الدولي والمعايير العامة',
    nameEn: 'International / General Standards',
    ministryAr: 'معايير التعليم الدولية والمناهج المعتمدة',
    ministryEn: 'International Academic & Pedagogical Standards',
    systemNameAr: 'المنهج العام المعتمد',
    systemNameEn: 'International General Curriculum',
    termDefaultAr: 'الفصل الأول',
    termDefaultEn: 'Term 1'
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
