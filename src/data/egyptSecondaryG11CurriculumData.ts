import type { EducationTrack, EducationType, Lecture, Subject } from '../types';
import { HIGH_BIO_G11_LECTURES } from './highBio11CurriculumData';

export interface EgyptG11LessonPlan {
  id: string;
  order: number;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  unitTitleAr: string;
  unitTitleEn: string;
  termAr: string;
  termEn: string;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  vocabulary: [string, string][];
}

const COMMON_G11_SUBJECTS: readonly Subject[] = [
  'ARABIC_LIT',
  'ENGLISH',
  'FRENCH',
  'GERMAN',
  'ITALIAN',
  'ISLAMIC_STUDIES'
];

const SCIENTIFIC_G11_SUBJECTS: readonly Subject[] = [
  ...COMMON_G11_SUBJECTS,
  'PHYSICS',
  'CHEMISTRY',
  'MATH',
  'BIOLOGY'
];

const LITERARY_G11_SUBJECTS: readonly Subject[] = [
  ...COMMON_G11_SUBJECTS,
  'PHILOSOPHY', // علم النفس والاجتماع
  'MATH',       // الرياضيات العامة
  'HISTORY',
  'GEOGRAPHY'
];

export function isEgyptG11SubjectAvailable(
  subject: Subject,
  track: EducationTrack = 'GENERAL',
  educationType: EducationType = 'PUBLIC'
): boolean {
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE') return false;
  if (track === 'SHARIA_HUMANITIES') {
    return LITERARY_G11_SUBJECTS.includes(subject);
  }
  // Scientific track (SCIENCE_MATH, SCIENCE_BIO, CS_ENGINEERING, HEALTH_LIFE, GENERAL):
  return SCIENTIFIC_G11_SUBJECTS.includes(subject);
}

export function getEgyptG11Subjects(track: EducationTrack = 'GENERAL'): Subject[] {
  if (track === 'SHARIA_HUMANITIES') {
    return [...LITERARY_G11_SUBJECTS];
  }
  return [...SCIENTIFIC_G11_SUBJECTS];
}

// ---------------------------------------------------------------------------
// 1. Physics G11 (Scientific Track)
// ---------------------------------------------------------------------------
const physicsUnits: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الفصل الأول: الحركة الموجية',
    unitTitleEn: 'Chapter 1: Wave Motion',
    lessons: [
      {
        titleAr: 'الحركة الاهتزازية وخصائصها',
        titleEn: 'Oscillatory Motion and Its Characteristics',
        subtitleAr: 'دراسة سعة الاهتزازة، التردد، والزمن الدوري، وتحولات طاقة الحركة والوضع في البندول البسيط',
        subtitleEn: 'Study amplitude, frequency, periodic time, and kinetic-potential energy conversion in pendulums',
        focusAr: 'التعرف على الحركة الاهتزازية كمفهوم دوري، واستنتاج العلاقة العكسية بين التردد والزمن الدوري (f = 1/T).',
        focusEn: 'Define periodic oscillatory motion and derive the inverse relationship between frequency and period (f = 1/T).',
        activityAr: 'قم بحساب التردد لبندول يصنع ٦٠ اهتزازة كاملة خلال نصف دقيقة، ثم استنتج زمنه الدوري.',
        activityEn: 'Calculate the frequency of a pendulum making 60 full oscillations in 30 seconds, then find its period.',
        questionAr: 'إذا كان التردد لبندول مهتز يساوي ٥ هرتز، فما زمنه الدوري؟',
        questionEn: 'If the frequency of an oscillating pendulum is 5 Hz, what is its periodic time?',
        optionsAr: ['٠.٢ ثانية', '٥ ثوانٍ', '٠.٥ ثانية'],
        optionsEn: ['0.2 seconds', '5 seconds', '0.5 seconds'],
        correctIndex: 0,
        vocabulary: [['الحركة الاهتزازية', 'oscillatory motion'], ['التردد', 'frequency'], ['الزمن الدوري', 'periodic time']]
      },
      {
        titleAr: 'الحركة الموجية والموجات الطولية والمستعرضة',
        titleEn: 'Wave Motion: Longitudinal and Transverse Waves',
        subtitleAr: 'التمييز بين اضطراب الموجة، القمم والقيعان، والتضاغطات والتخلخلات، وقانون انتشار الموجات v = λ × f',
        subtitleEn: 'Contrast crests/troughs with compressions/rarefactions and apply the wave speed formula v = λ × f',
        focusAr: 'فهم انتقال الطاقة عبر الوسط بالموجات الميكانيكية والكهرومغناطيسية وتطبيق سرعة انتشار الموجة.',
        focusEn: 'Analyze energy transfer through mechanical and electromagnetic waves using v = λ × f.',
        activityAr: 'احسب الطول الموجي لموجة صوتية سرعتها ٣٤٠ م/ث وترددها ١٧٠ هرتز.',
        activityEn: 'Compute the wavelength of a sound wave traveling at 340 m/s with a frequency of 170 Hz.',
        questionAr: 'عند انتقال موجة بين وسطين مختلفين، ما الخاصية التي تظل ثابتة؟',
        questionEn: 'When a wave passes from one medium into another, which property remains constant?',
        optionsAr: ['التردد', 'السرعة', 'الطول الموجي'],
        optionsEn: ['Frequency', 'Speed', 'Wavelength'],
        correctIndex: 0,
        vocabulary: [['الطول الموجي', 'wavelength'], ['موجة مستعرضة', 'transverse wave'], ['موجة طولية', 'longitudinal wave']]
      }
    ]
  },
  {
    unitTitleAr: 'الفصل الثاني: الضوء والحركة الموجية',
    unitTitleEn: 'Chapter 2: Light and Wave Phenomena',
    lessons: [
      {
        titleAr: 'انعكاس وانكسار الضوء وقانون سنل',
        titleEn: 'Reflection, Refraction of Light and Snell’s Law',
        subtitleAr: 'معامل الانكسار النسبي والمطلق، وقانون سنل (n1 sin θ1 = n2 sin θ2) ومسار الشعاع الضوئي',
        subtitleEn: 'Relative and absolute refractive indices, Snell’s law, and light ray paths across media',
        focusAr: 'تطبيق قانون سنل لحساب زاوية الانكسار وتفسير انكسار الضوء عند انتقاله بين وسطين مختلفين في الكثافة الضوئية.',
        focusEn: 'Apply Snell’s law to calculate refraction angles and explain ray bending based on optical density.',
        activityAr: 'احسب معامل الانكسار المطلق لوسط يسير فيه الضوء بسرعة ٢ × ١٠^٨ م/ث، علماً بأن سرعته في الفراغ ٣ × ١٠^٨ م/ث.',
        activityEn: 'Determine the absolute refractive index of a medium where light speed is 2x10^8 m/s (c = 3x10^8 m/s).',
        questionAr: 'ما العلاقة الرياضية المعبرة عن قانون سنل بين وسطين؟',
        questionEn: 'Which mathematical relation expresses Snell’s Law between two media?',
        optionsAr: ['n1 sin θ1 = n2 sin θ2', 'n1 / sin θ1 = n2 / sin θ2', 'n1 cos θ1 = n2 cos θ2'],
        optionsEn: ['n1 sin θ1 = n2 sin θ2', 'n1 / sin θ1 = n2 / sin θ2', 'n1 cos θ1 = n2 cos θ2'],
        correctIndex: 0,
        vocabulary: [['معامل الانكسار', 'refractive index'], ['قانون سنل', "Snell's law"], ['الكثافة الضوئية', 'optical density']]
      },
      {
        titleAr: 'تداخل الضوء وتجربة الشق المزدوج لتوماس يونج',
        titleEn: 'Interference of Light and Young’s Double-Slit Experiment',
        subtitleAr: 'الشروط اللازمة لتداخل الضوء، وتعيين الطول الموجي للضوء عملياً باستخدام العلاقة Δy = (λ × R) / d',
        subtitleEn: 'Coherence conditions for interference and calculating wavelength using Δy = (λ × R) / d',
        focusAr: 'تفسير تكون الهدب المضيئة والمظلمة في تجربة يونج وتحديد المسافة بين هدين متتاليتين من نفس النوع.',
        focusEn: 'Explain constructive and destructive fringes in Young’s experiment and fringe spacing Δy.',
        activityAr: 'وضّح أثر زيادة المسافة بين الشقين والحائل (R) على وضوح واتساع هدب التداخل.',
        activityEn: 'Explain the effect of increasing slit-to-screen distance (R) on interference fringe spacing.',
        questionAr: 'في تجربة يونج، ماذا يحدث للمسافة بين هدبتين مضيئتين متتاليتين (Δy) عند زيادة الطول الموجي للضوء المستخدم؟',
        questionEn: 'In Young’s experiment, what happens to fringe width (Δy) when using light with a longer wavelength?',
        optionsAr: ['تزداد', 'تقل', 'تظل ثابتة'],
        optionsEn: ['Increases', 'Decreases', 'Remains unchanged'],
        correctIndex: 0,
        vocabulary: [['تداخل الضوء', 'light interference'], ['هدب التداخل', 'interference fringes'], ['الشق المزدوج', 'double slit']]
      },
      {
        titleAr: 'الانعكاس الكلي والزاوية الحرجة وتطبيقاتها',
        titleEn: 'Total Internal Reflection, Critical Angle and Applications',
        subtitleAr: 'الشروط الواجب توفرها لحدوث الانعكاس الكلي، وحساب الزاوية الحرجة، وتطبيقات الألياف الضوئية ومنشور العاكس',
        subtitleEn: 'Total internal reflection conditions, critical angle calculation, and fiber optics applications',
        focusAr: 'حساب الزاوية الحرجة sin(θc) = 1/n وتفسير عمل الألياف الضوئية ومناظير الفحص الطبي وظاهرة السراب الصحراوي.',
        focusEn: 'Compute critical angle sin(θc) = 1/n and evaluate applications in optical fibers, periscopes, and mirages.',
        activityAr: 'احسب الزاوية الحرجة للزجاج الذي معامل انكساره المطلق ١.٥ بالنسبة للهواء.',
        activityEn: 'Calculate the critical angle for glass with an absolute refractive index of 1.5 in air.',
        questionAr: 'ما الشرط الأساسي لحدوث الانعكاس الكلي للضوء؟',
        questionEn: 'What is the required condition for total internal reflection of light?',
        optionsAr: ['انتقال الشعاع من وسط أكبر كثافة ضوئية إلى وسط أقل بزاوية سقوط أكبر من الحرجة', 'انتقال الشعاع من وسط أقل كثافة إلى أكبر كثافة', 'سقوط الشعاع عمودياً على السطح الفاصل'],
        optionsEn: ['Ray travels from denser to rarer medium at angle > critical angle', 'Ray travels from rarer to denser medium', 'Ray strikes perpendicularly'],
        correctIndex: 0,
        vocabulary: [['الزاوية الحرجة', 'critical angle'], ['الانعكاس الكلي', 'total internal reflection'], ['الألياف الضوئية', 'optical fibers']]
      },
      {
        titleAr: 'المنشور الثلاثي والانحراف والانفراج اللوني',
        titleEn: 'Triangular Prism, Minimum Deviation, and Dispersion',
        subtitleAr: 'زاوية الانحراف الصغرى، المنشور الرقيق، وقوة التفريق اللوني ومعاملات الانكسار للألوان',
        subtitleEn: 'Angle of minimum deviation, thin prism relations, and chromatic dispersion power',
        focusAr: 'استنتاج زاوية رأس المنشور وزاوية الانحراف، وتحليل الضوء الأبيض إلى ألوان الطيف السبعة.',
        focusEn: 'Relate prism apex angle to deviation and explain light dispersion into rainbow spectrum colors.',
        activityAr: 'احسب زاوية انحراف منشور رقيق زاوية رأسه ٨ درجات ومعامل انكسار مادته ١.٥.',
        activityEn: 'Find the deviation angle of a thin prism with apex angle 8° and refractive index 1.5.',
        questionAr: 'أي ألوان الطيف المرئي يكون أكثر انحرافاً عند مروره داخل منشور ثلاثي؟',
        questionEn: 'Which visible light color deviates the most when passing through a prism?',
        optionsAr: ['الضوء البنفسجي', 'الضوء الأحمر', 'الضوء الأصفر'],
        optionsEn: ['Violet light', 'Red light', 'Yellow light'],
        correctIndex: 0,
        vocabulary: [['المنشور الرقيق', 'thin prism'], ['الانفراج اللوني', 'chromatic dispersion'], ['زاوية الانحراف', 'deviation angle']]
      }
    ]
  },
  {
    unitTitleAr: 'الفصل الثالث: خواص الموائع المتحركة',
    unitTitleEn: 'Chapter 3: Properties of Fluids in Motion',
    lessons: [
      {
        titleAr: 'السريان الهادئ ومعادلة الاستمرارية',
        titleEn: 'Streamline Flow and Equation of Continuity',
        subtitleAr: 'شروط السريان المستقر، خطوط الانسياب، ومعدل السريان الحجمي والكتلي (Qv = A1 v1 = A2 v2)',
        subtitleEn: 'Steady flow conditions, streamlines, and mass/volume flow rates (A1 v1 = A2 v2)',
        focusAr: 'تطبيق معادلة الاستمرارية لإثبات أن سرعة السائل تتناسب عكسياً مع مساحة مقطع الأنبوب.',
        focusEn: 'Apply the continuity equation showing fluid velocity is inversely proportional to cross-sectional area.',
        activityAr: 'أنبوب ماء مساحة مقطعه ٠.٠٤ م² وسرعة الماء فيه ٢ م/ث، ضاق مقطعه إلى ٠.٠١ م²؛ احسب السرعة الجديدة.',
        activityEn: 'Water flows at 2 m/s through a 0.04 m² pipe. If constricted to 0.01 m², find the new velocity.',
        questionAr: 'ماذا يحدث لسرعة سائل في سريان هادئ عند تفرع الأنبوب إلى مقاطع أضيق؟',
        questionEn: 'What happens to fluid speed in streamline flow when the pipe narrows?',
        optionsAr: ['تزداد السرعة', 'تقل السرعة', 'تظل ثابتة'],
        optionsEn: ['Speed increases', 'Speed decreases', 'Speed remains constant'],
        correctIndex: 0,
        vocabulary: [['السريان الهادئ', 'streamline flow'], ['معادلة الاستمرارية', 'continuity equation'], ['معدل السريان', 'flow rate']]
      },
      {
        titleAr: 'اللزوجة ومعامل اللزوجة وتطبيقاتها',
        titleEn: 'Viscosity, Viscosity Coefficient and Applications',
        subtitleAr: 'قوة الاحتكاك الداخلي بين طبقات السائل، وقانون اللزوجة (F = η A v / d) وتزييت الآلات وسرعة ترسيب الدم',
        subtitleEn: 'Internal fluid friction, viscosity formula (F = η A v / d), machine lubrication, and ESR testing',
        focusAr: 'فهم معامل اللزوجة وتفسير ضرورة تزييت وتشحيم الآلات الميكانيكية وتطبيقات اختبار سرعة الترسيب طبياً.',
        focusEn: 'Analyze the viscosity coefficient and practical engineering lubrication and medical ESR applications.',
        activityAr: 'اشرح لماذا ترتفع سرعة الترسيب لكرات الدم الحمراء عند الإصابة ببعض الأمراض كالروماتيزم.',
        activityEn: 'Explain why erythrocyte sedimentation rate (ESR) increases during conditions like rheumatic fever.',
        questionAr: 'ما العوامل التي يتوقف عليها معامل اللزوجة لسائل معين؟',
        questionEn: 'What determines the viscosity coefficient of a given fluid?',
        optionsAr: ['نوع مادة السائل ودرجة حرارته فقط', 'مساحة اللوح وسرعته', 'سمك طبقة السائل فقط'],
        optionsEn: ['Nature of fluid and temperature only', 'Plate area and speed', 'Fluid thickness only'],
        correctIndex: 0,
        vocabulary: [['اللزوجة', 'viscosity'], ['معامل اللزوجة', 'viscosity coefficient'], ['سرعة الترسيب', 'sedimentation rate']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 2. Chemistry G11 (Scientific Track)
// ---------------------------------------------------------------------------
const chemistryUnits: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الباب الأول: بنية الذرة',
    unitTitleEn: 'Chapter 1: Atomic Structure',
    lessons: [
      {
        titleAr: 'تطور مفهوم بنية الذرة: من دالتون إلى رذرفورد',
        titleEn: 'Evolution of Atomic Models: Dalton, Thomson to Rutherford',
        subtitleAr: 'فروض دالتون، تجربة التفريغ الكهربي واكتشاف أشعة المهبط، وتجربة رذرفورد برقاقة الذهب وجسيمات ألفا',
        subtitleEn: 'Dalton postulates, cathode rays discovery, and Rutherford gold-foil alpha-scattering experiment',
        focusAr: 'مقارنة النماذج الذرية القديمة وفهم استنتاجات رذرفورد بأن معظم الذرة فراغ وتتركز كتلتها في نواة موجبة.',
        focusEn: 'Contrast early atomic models and trace Rutherford’s deduction of a dense positive nucleus and empty space.',
        activityAr: 'لخص النتائج الثلاث الأساسية لتجربة رذرفورد وقارنها بتصور تومسون للذرة المصمتة.',
        activityEn: 'Summarize the three core observations of Rutherford’s experiment contrasting Thomson’s plum pudding model.',
        questionAr: 'أي مشاهدة في تجربة رذرفورد أثبتت وجود نواة دقيقة موجبة الشحنة تتركز فيها معظم كتلة الذرة؟',
        questionEn: 'Which observation in Rutherford’s experiment proved the presence of a tiny, dense, positive nucleus?',
        optionsAr: ['ارتداد نسبة ضئيلة جداً من جسيمات ألفا إلى الخلف', 'نفاذ معظم جسيمات ألفا دون انحراف', 'انحراف نسبة قليلة من الجسيمات'],
        optionsEn: ['A tiny fraction of alpha particles bounced straight back', 'Most alpha particles passed straight through', 'A small fraction deflected at angles'],
        correctIndex: 0,
        vocabulary: [['أشعة المهبط', 'cathode rays'], ['النواة الذرية', 'atomic nucleus'], ['رقاقة الذهب', 'gold foil']]
      },
      {
        titleAr: 'نموذج بور الذري والطيف الخطي والنظرية الذرية الحديثة',
        titleEn: 'Bohr Model, Line Spectra, and Modern Quantum Theory',
        subtitleAr: 'طيف الانبعاث الخطي للهيدروجين، مستويات الطاقة الرئيسية، الطبيعة المزدوجة ومبدأ هايزنبرج ومعادلة شرودنجر',
        subtitleEn: 'Hydrogen emission spectrum, energy quantization, de Broglie duality, Heisenberg uncertainty, Schrödinger wave equation',
        focusAr: 'تفسير انبعاث طيف الهيدروجين عند عودة الإلكترون المثار، واستيعاب مفاهيم السحابة الإلكترونية والأوربيتال.',
        focusEn: 'Explain quantized atomic spectra, wave-particle duality, Heisenberg uncertainty, and electron orbitals.',
        activityAr: 'بيّن كيف عدّلت النظرية الذرية الحديثة فكرة المدار الدائري الثابت المحدّد التي وضعها نيلز بور.',
        activityEn: 'Explain how modern quantum mechanics replaced Bohr’s rigid orbits with 3D probability orbitals.',
        questionAr: 'ما المفهوم العلمي الذي يعبر عن المنطقة من الفراغ حول النواة التي يزيد فيها احتمال وجود الإلكترون؟',
        questionEn: 'Which concept denotes the 3D space around the nucleus with the highest probability of finding an electron?',
        optionsAr: ['الأوربيتال', 'المدار الثابت', 'المستوى المجهري'],
        optionsEn: ['Orbital', 'Fixed orbit', 'Microscopic level'],
        correctIndex: 0,
        vocabulary: [['الطيف الخطي', 'line spectrum'], ['الأوربيتال', 'orbital'], ['مبدأ عدم التأكد', 'uncertainty principle']]
      },
      {
        titleAr: 'أعداد الكم الأربعة وقواعد توزيع الإلكترونات',
        titleEn: 'Four Quantum Numbers and Electron Configuration Rules',
        subtitleAr: 'عدد الكم الرئيسي (n)، الثانوي (l)، المغناطيسي (ml)، والمغزلي (ms)، ومبدأ البناء التصاعدي وقاعدة هوند',
        subtitleEn: 'Principal, angular, magnetic, and spin quantum numbers (n, l, ml, ms), Aufbau principle, and Hund’s rule',
        focusAr: 'استخدام أعداد الكم الأربعة لتوصيف حالة وموقع أي إلكترون في الذرة وتطبيق التوزيع الإلكتروني الصحيح.',
        focusEn: 'Assign quantum numbers to electrons and configure electrons using Aufbau, Hund’s rule, and Pauli exclusion.',
        activityAr: 'اكتب التوزيع الإلكتروني لذرة الحديد Fe (عددها الذري ٢٦) ثم حدد أعداد الكم الأربعة للإلكترون الأخير.',
        activityEn: 'Write the electron configuration of Iron (Z = 26) and find the four quantum numbers of the last electron.',
        questionAr: 'ما أقصى عدد من الإلكترونات يمكن أن يتسع له المستوى الفرعي 3d؟',
        questionEn: 'What is the maximum number of electrons the 3d subshell can accommodate?',
        optionsAr: ['١٠ إلكترونات', '٦ إلكترونات', '١٤ إلكتروناً'],
        optionsEn: ['10 electrons', '6 electrons', '14 electrons'],
        correctIndex: 0,
        vocabulary: [['أعداد الكم', 'quantum numbers'], ['مبدأ البناء التصاعدي', 'Aufbau principle'], ['قاعدة هوند', "Hund's rule"]]
      }
    ]
  },
  {
    unitTitleAr: 'الباب الثاني: الجدول الدوري وتدرج خواص العناصر',
    unitTitleEn: 'Chapter 2: Periodic Table and Periodic Trends',
    lessons: [
      {
        titleAr: 'وصف الجدول الدوري وتصنيف العناصر',
        titleEn: 'Structure of the Modern Periodic Table and Element Classification',
        subtitleAr: 'فئات الجدول الدوري الأربع (s, p, d, f)، العناصر الممثلة والانتقالية الرئيسية والداخلية والغازات النبيلة',
        subtitleEn: 'The four periodic blocks (s, p, d, f), representative, transition, inner-transition elements, and noble gases',
        focusAr: 'تحديد موقع أي عنصر في الجدول الدوري (رقم الدورة والمجموعة والفئة) من خلال توزيعه الإلكتروني.',
        focusEn: 'Locate elements in the periodic table (period, group, block) from their valence electron configurations.',
        activityAr: 'صنف العناصر الآتية حسب فئاتها ومجموعاتها: الصوديوم Na (11)، الكلور Cl (17)، والحديد Fe (26).',
        activityEn: 'Classify Sodium (11), Chlorine (17), and Iron (26) by periodic block and group family.',
        questionAr: 'إلى أي فئة ينتمي عنصر ينتهي توزيعه الإلكتروني بالمستوى الفرعي 4p³؟',
        questionEn: 'To which block does an element ending with valence subshell 4p³ belong?',
        optionsAr: ['الفئة p', 'الفئة s', 'الفئة d'],
        optionsEn: ['p-block', 's-block', 'd-block'],
        correctIndex: 0,
        vocabulary: [['الجدول الدوري الحديث', 'modern periodic table'], ['عناصر ممثلة', 'representative elements'], ['عناصر انتقالية', 'transition elements']]
      },
      {
        titleAr: 'تدرج نصف القطر الذري وطاقة التأين والسالبية الكهربية',
        titleEn: 'Trends in Atomic Radius, Ionization Energy, and Electronegativity',
        subtitleAr: 'تأثير شحنة النواة الفعالة وتدرج الخواص في الدورات الأفقية والمجموعات الرأسية مع تبرير الشذوذ',
        subtitleEn: 'Effective nuclear charge (Zeff) and horizontal/vertical periodic trends across groups and periods',
        focusAr: 'تفسير تناقص الحجم الذري عبر الدورة وزيادته في المجموعة، وربطه بارتفاع طاقة التأين والسالبية الكهربية.',
        focusEn: 'Analyze horizontal atomic contraction, vertical expansion, and inverse relationships with ionization energy.',
        activityAr: 'رتّب العناصر الآتية تصاعدياً حسب نصف القطر الذري: الليثيوم Li، الصوديوم Na، والفلور F، مع التعليل.',
        activityEn: 'Order Li, Na, and F by increasing atomic radius and explain the periodic rationale.',
        questionAr: 'ماذا يحدث لقيم السالبية الكهربية للعناصر عند الانتقال من يسار الدورة إلى يمينها في الجدول الدوري؟',
        questionEn: 'What happens to element electronegativity values moving from left to right across a period?',
        optionsAr: ['تزداد', 'تقل', 'تظل ثابتة'],
        optionsEn: ['Increases', 'Decreases', 'Remains constant'],
        correctIndex: 0,
        vocabulary: [['نصف القطر الذري', 'atomic radius'], ['طاقة التأين', 'ionization energy'], ['السالبية الكهربية', 'electronegativity']]
      },
      {
        titleAr: 'الخاصية الفلزية واللافلزية والحامضية والقاعدية وأعداد التأكسد',
        titleEn: 'Metallic Trends, Acidic/Basic Oxides, and Oxidation States',
        subtitleAr: 'الأكاسيد القاعدية والحامضية والمترددة، وقواعد حساب أعداد التأكسد في المركبات والأيونات',
        subtitleEn: 'Basic, acidic, and amphoteric oxides, plus oxidation number calculation rules in compounds and polyatomic ions',
        focusAr: 'التمييز بين الأكاسيد وتفاعلاتها، وتحديد أعداد التأكسد للعناصر الانتقالية في مختلف مركباتها.',
        focusEn: 'Distinguish basic vs acidic vs amphoteric oxides and compute oxidation numbers in chemical formulas.',
        activityAr: 'احسب عدد تأكسد المنجنيز في مركب برمنجنات البوتاسيوم KMnO4، وحدد نوع أكسيد الألومنيوم Al2O3.',
        activityEn: 'Determine the oxidation state of Manganese in KMnO4, and identify the oxide type of Al2O3.',
        questionAr: 'أي من الأكاسيد الآتية يعتبر أكسيداً متردداً يتفاعل مع كل من الأحماض والقلويات مكوناً ملحاً وماء؟',
        questionEn: 'Which oxide is amphoteric, reacting with both acids and bases to yield salt and water?',
        optionsAr: ['أكسيد الألومنيوم Al2O3', 'أكسيد الصوديوم Na2O', 'ثاني أكسيد الكربون CO2'],
        optionsEn: ['Aluminum oxide Al2O3', 'Sodium oxide Na2O', 'Carbon dioxide CO2'],
        correctIndex: 0,
        vocabulary: [['أكسيد متردد', 'amphoteric oxide'], ['عدد التأكسد', 'oxidation number'], ['خاصية فلزية', 'metallic character']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. Pure Mathematics G11 (Scientific Track)
// ---------------------------------------------------------------------------
const pureMathUnits: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: الجبر والدوال الحقيقية',
    unitTitleEn: 'Unit 1: Algebra and Real Functions',
    lessons: [
      {
        titleAr: 'الدوال الحقيقية وتحديد المجال والمدى',
        titleEn: 'Real Functions: Finding Domain and Range',
        subtitleAr: 'الدوال كثيرة الحدود، الدوال الكسرية، الدوال الجذرية، وبحث اطراد الدالة (تزايد، تناقص، ثبوت)',
        subtitleEn: 'Polynomial, rational, and radical functions; analyzing domain, range, and monotonicity',
        focusAr: 'إيجاد مجال ومدى الدوال جبرياً وبيانياً وبحث نوع الدالة من حيث كونها زوجية أو فردية أو غير ذلك.',
        focusEn: 'Determine domain and range algebraically/graphically, and classify even, odd, or neither symmetry.',
        activityAr: 'أوجد مجال الدالة د(س) = ١ / √(س − ٣)، ثم حدد ما إذا كانت الدالة د(س) = س³ فردية أم زوجية.',
        activityEn: 'Find the domain of f(x) = 1 / √(x − 3), and determine whether f(x) = x³ is even or odd.',
        questionAr: 'ما مجال الدالة الكسرية د(س) = (س + ٢) / (س − ٥)؟',
        questionEn: 'What is the domain of the rational function f(x) = (x + 2) / (x − 5)?',
        optionsAr: ['ح − {٥}', 'ح', 'ح − {−٢}'],
        optionsEn: ['R − {5}', 'R', 'R − {−2}'],
        correctIndex: 0,
        vocabulary: [['المجال', 'domain'], ['المدى', 'range'], ['دالة زوجية', 'even function']]
      },
      {
        titleAr: 'التمثيل البياني للدوال الأساسية والتحويلات الهندسية',
        titleEn: 'Graphing Basic Functions and Geometric Transformations',
        subtitleAr: 'رسم دالة المقياس، الدالة التربيعية والتكعيبية والكسرية، والإزاحات الرأسية والأفقية والانعكاسات',
        subtitleEn: 'Graphing modulus, quadratic, cubic, and reciprocal functions; translations and reflections',
        focusAr: 'استخدام نقطة التماثل والتحويلات الهندسية لرسم منحنيات الدوال واستنتاج الخواص من الرسم مباشرة.',
        focusEn: 'Plot function curves from symmetry vertices using vertical/horizontal shifts and reflection rules.',
        activityAr: 'صف التحويل الهندسي الحاصل لمنحنى د(س) = |س| للحصول على ر(س) = |س − ٢| + ٣، وحدد رأس المنحنى.',
        activityEn: 'Describe the transformation from f(x) = |x| to g(x) = |x − 2| + 3, and state the vertex.',
        questionAr: 'ما نقطة رأس المنحنى للدالة د(س) = (س − ٤)² + ١؟',
        questionEn: 'What is the vertex of the quadratic parabola f(x) = (x − 4)² + 1?',
        optionsAr: ['(٤ ، ١)', '(−٤ ، ١)', '(٤ ، −١)'],
        optionsEn: ['(4, 1)', '(−4, 1)', '(4, −1)'],
        correctIndex: 0,
        vocabulary: [['التحويلات الهندسية', 'geometric transformations'], ['دالة المقياس', 'modulus function'], ['نقطة التماثل', 'point of symmetry']]
      },
      {
        titleAr: 'الأسس الكسرية والدوال الأسية واللوغاريتمات',
        titleEn: 'Rational Exponents, Exponential Functions and Logarithms',
        subtitleAr: 'قوانين الأسس، رسم الدالة الأسية، حل المعادلات الأسية، واللوغاريتمات وقوانينها الأساسية',
        subtitleEn: 'Laws of rational exponents, exponential graphing, exponential equations, and logarithm rules',
        focusAr: 'التحويل بين الصورة الأسية واللوغاريتمية واستخدام خواص اللوغاريتمات في حل المعادلات المعقدة.',
        focusEn: 'Convert between exponential and logarithmic forms, applying log laws to solve equations.',
        activityAr: 'حل المعادلة ٣^(س+١) = ٢٧، ثم احسب قيمة لو_٢ (٣٢).',
        activityEn: 'Solve 3^(x+1) = 27, then evaluate log_2(32).',
        questionAr: 'إذا كان لو_٣ (س) = ٤، فما قيمة س؟',
        questionEn: 'If log_3(x) = 4, what is the value of x?',
        optionsAr: ['٨١', '١٢', '٦٤'],
        optionsEn: ['81', '12', '64'],
        correctIndex: 0,
        vocabulary: [['اللوغاريتمات', 'logarithms'], ['الدالة الأسية', 'exponential function'], ['الأسس الكسرية', 'rational exponents']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: التفاضل وحساب المثلثات',
    unitTitleEn: 'Unit 2: Calculus and Trigonometry',
    lessons: [
      {
        titleAr: 'نهايات الدوال جبرياً وبيانياً',
        titleEn: 'Limits of Functions Algebraically and Graphically',
        subtitleAr: 'مفهوم النهاية عند نقطة، التحليل والضرب في المرافق، ونظرية القانون (س^ن − أ^ن) / (س − أ)',
        subtitleEn: 'Limit concepts, algebraic factoring, conjugate multiplication, and standard limit theorems',
        focusAr: 'إيجاد النهايات لصيغ عدم التعيين (٠/٠) باستخدام الطرائق الجبرية والقانون.',
        focusEn: 'Evaluate indeterminate forms (0/0) using factoring, conjugates, and limit theorem formulas.',
        activityAr: 'احسب نهاية (س² − ٩) / (س − ٣) عندما تقترب س من ٣.',
        activityEn: 'Compute lim (x² − 9) / (x − 3) as x approaches 3.',
        questionAr: 'ما قيمة نهـــا (س² − ٤) / (س − ٢) عندما س تقترب من ٢؟',
        questionEn: 'What is lim (x² − 4) / (x − 2) as x approaches 2?',
        optionsAr: ['٤', '٠', 'غير معرفة'],
        optionsEn: ['4', '0', 'Undefined'],
        correctIndex: 0,
        vocabulary: [['نهاية الدالة', 'limit of a function'], ['كمية غير معينة', 'indeterminate form'], ['مرافق المقدار', 'conjugate']]
      },
      {
        titleAr: 'قاعدة الجيب في حساب المثلثات وتطبيقاتها',
        titleEn: 'The Sine Rule and Triangle Applications',
        subtitleAr: 'العلاقة أ / جا أ = ب / جا ب = جـ / جا جـ = ٢ نق، وحساب مساحة المثلث ومحيطه',
        subtitleEn: 'The sine rule a/sin A = b/sin B = c/sin C = 2R, circumcircle radius, and triangle area',
        focusAr: 'حل المثلث باستخدام قاعدة الجيب وحساب طول قطر الدائرة المارة برؤوس المثلث.',
        focusEn: 'Solve triangles using the sine law and relate side-angle ratios to circumcircle diameter (2R).',
        activityAr: 'في المثلث أ ب جـ، إذا كان أ = ١٠ سم، وقياس زاوية أ = ٣٠ درجة؛ احسب طول نصف قطر الدائرة المارة برؤوسه.',
        activityEn: 'In triangle ABC, side a = 10 cm and angle A = 30°. Find the radius of the circumscribed circle.',
        questionAr: 'في أي مثلث، ما النسبة التي تساويها (أ / جا أ) وفق قانون الجيب؟',
        questionEn: 'In any triangle, what does a / sin A equal according to the Sine Rule?',
        optionsAr: ['٢ نق (قطر الدائرة المارة برؤوسه)', 'نق (نصف القطر)', 'مساحة المثلث'],
        optionsEn: ['2R (diameter of circumcircle)', 'R (circumradius)', 'Triangle area'],
        correctIndex: 0,
        vocabulary: [['قاعدة الجيب', 'sine rule'], ['الدائرة المارة بالرؤوس', 'circumscribed circle'], ['حل المثلث', 'solving triangles']]
      },
      {
        titleAr: 'قاعدة جيب التمام وحل المثلث وتطبيقات الزوايا',
        titleEn: 'The Cosine Rule and Angle Applications',
        subtitleAr: 'الصيغة أ² = ب² + جـ² − ٢ ب جـ جتا أ، واستخدامها عند معرفة ضلعين وزاوية محصورة أو ثلاثة أضلاع',
        subtitleEn: 'Cosine rule a² = b² + c² − 2bc cos A for SAS and SSS triangle configurations',
        focusAr: 'تطبيق قاعدة جيب التمام لإيجاد أطوال الأضلاع المجهولة وقياسات زوايا المثلث وتطبيقات الارتفاعات والانخفاضات.',
        focusEn: 'Apply the cosine rule to compute unknown sides and angles for practical navigation and geometry.',
        activityAr: 'احسب طول الضلع الثالث في مثلث طولا ضلعيه ٥ سم و ٦ سم والزاوية المحصورة بينهما ٦٠ درجة.',
        activityEn: 'Find the third side of a triangle with sides 5 cm, 6 cm, and included angle 60° (cos 60° = 0.5).',
        questionAr: 'متى نلجأ إلى استخدام قاعدة جيب التمام بدلاً من قاعدة الجيب لحل المثلث؟',
        questionEn: 'When is the Cosine Rule necessary instead of the Sine Rule?',
        optionsAr: ['عند معرفة أطوال الأضلاع الثلاثة أو ضلعين وزاوية محصورة', 'عند معرفة قياس زاويتين وضلع', 'في المثلث القائم الزاوية فقط'],
        optionsEn: ['When given 3 sides (SSS) or 2 sides and included angle (SAS)', 'When given 2 angles and a side', 'Right-angled triangles only'],
        correctIndex: 0,
        vocabulary: [['قاعدة جيب التمام', 'cosine rule'], ['زاوية محصورة', 'included angle'], ['زوايا الارتفاع والانخفاض', 'elevation and depression angles']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 4. Psychology & Sociology G11 (Literary Track)
// ---------------------------------------------------------------------------
const psychologySociologyUnits: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: مبادئ ونشأة علم النفس',
    unitTitleEn: 'Unit 1: Principles and Origins of Psychology',
    lessons: [
      {
        titleAr: 'نشأة علم النفس وتطوره ومدارسه الكبرى',
        titleEn: 'Origins of Psychology and Major Historical Schools',
        subtitleAr: 'المرحلة الفلسفية والفسيولوجية ومرحلة الاستقلال، والمدارس: البنائية (فونت)، السلوكية (واطسون)، والتحليل النفسي (فرويد)',
        subtitleEn: 'Philosophical, physiological, and independent stages; Structuralism, Behaviorism, and Psychoanalysis',
        focusAr: 'تتبع المسار التاريخي لانفصال علم النفس كعلم تجريبي مستقل، والمقارنة بين مدارسه الأساسية.',
        focusEn: 'Trace psychology’s historical emergence and compare Wilhelm Wundt, John Watson, and Sigmund Freud.',
        activityAr: 'قارن في جدول بين المدرسة السلوكية ومدرسة التحليل النفسي من حيث موضوع الدراسة ومنهجه.',
        activityEn: 'Compare Behaviorism and Psychoanalysis regarding study subject matter and methodology.',
        questionAr: 'من هو العالم الذي أنشأ أول معمل لعلم النفس التجريبي في جامعة ليبزج بألمانيا عام ١٨٧٩؟',
        questionEn: 'Who founded the first psychological laboratory at Leipzig University in 1879?',
        optionsAr: ['فيلهلم فونت', 'جون واطسون', 'سيجموند فرويد'],
        optionsEn: ['Wilhelm Wundt', 'John B. Watson', 'Sigmund Freud'],
        correctIndex: 0,
        vocabulary: [['المدرسة البنائية', 'structuralism'], ['التحليل النفسي', 'psychoanalysis'], ['المدرسة السلوكية', 'behaviorism']]
      },
      {
        titleAr: 'تعريف علم النفس وأهدافه وميادينه',
        titleEn: 'Definition, Goals, and Branches of Psychology',
        subtitleAr: 'دراسة السلوك الإنساني، أهداف العلم (الفهم والتفسير، التنبؤ، والتحكم والضبط)، والميادين النظرية والتطبيقية',
        subtitleEn: 'Human behavior study, three goals (understanding, prediction, control), and theoretical vs applied fields',
        focusAr: 'تحليل أهداف علم النفس الثلاثة والتمييز بين الميادين الأساسية كعلم النفس العام والنمو، والتطبيقية كالتربوي والصناعي.',
        focusEn: 'Analyze the three scientific goals and differentiate theoretical (general/developmental) from applied fields.',
        activityAr: 'اذكر موقفاً يومياً يوضح الفرق بين "تفسير السلوك" و"التحكم فيه وتعديله".',
        activityEn: 'Provide an everyday example illustrating the difference between explaining behavior and controlling it.',
        questionAr: 'أي من الميادين الآتية يعتبر من الميادين التطبيقية لعلم النفس؟',
        questionEn: 'Which of the following is an applied branch of psychology?',
        optionsAr: ['علم النفس التربوي والصناعي', 'علم النفس العام', 'علم النفس الفسيولوجي'],
        optionsEn: ['Educational and industrial psychology', 'General psychology', 'Physiological psychology'],
        correctIndex: 0,
        vocabulary: [['السلوك الإنساني', 'human behavior'], ['التنبؤ بالسلوك', 'behavior prediction'], ['علم النفس التطبيقي', 'applied psychology']]
      },
      {
        titleAr: 'مناهج البحث في علم النفس: الاستبطان والمنهج التجريبي',
        titleEn: 'Research Methods in Psychology: Introspection and Experimental',
        subtitleAr: 'منهج التأمل الباطني (الاستبطان)، المنهج التجريبي والمتغيرات (المستقل، التابع، الدخيل)، والمنهج الإكلينيكي والوصفي',
        subtitleEn: 'Introspection, experimental design (independent, dependent, confounding variables), clinical and descriptive methods',
        focusAr: 'تصميم تجربة نفسية وضبط المتغير المستقل وقياس المتغير التابع وعزل المتغيرات الدخيلة بموضوعية.',
        focusEn: 'Understand experimental psychological design, variable isolation, and objective scientific control.',
        activityAr: 'حدد المتغير المستقل والتابع في دراسة تبحث "أثر الضوضاء على التركيز الذهني للطلاب أثناء الاستذكار".',
        activityEn: 'Identify the independent and dependent variables in a study on noise effects on student concentration.',
        questionAr: 'في التجربة النفسية، ما المتغير الذي يراد قياس أثره ومعرفة مدى تأثيره في المتغير التابع؟',
        questionEn: 'In psychological experimentation, which variable is manipulated to measure its effect?',
        optionsAr: ['المتغير المستقل', 'المتغير التابع', 'المتغير الدخيل'],
        optionsEn: ['Independent variable', 'Dependent variable', 'Confounding variable'],
        correctIndex: 0,
        vocabulary: [['المنهج التجريبي', 'experimental method'], ['المتغير المستقل', 'independent variable'], ['الاستبطان', 'introspection']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: مدخل إلى علم الاجتماع',
    unitTitleEn: 'Unit 2: Introduction to Sociology',
    lessons: [
      {
        titleAr: 'تعريف علم الاجتماع وأهميته ورواده المؤسسون',
        titleEn: 'Definition, Importance of Sociology, and Founding Pioneers',
        subtitleAr: 'دراسة المجتمع وظواهره، إسهامات عبد الرحمن بن خلدون في العمران البشري، وأوجست كونت، وإميل دوركايم',
        subtitleEn: 'Study of society; foundational contributions of Ibn Khaldun, Auguste Comte, and Émile Durkheim',
        focusAr: 'التعرف على نشأة علم الاجتماع وإدراك إسهامات ابن خلدون التأسيسية ومنهجه في فحص الأخبار والوقائع.',
        focusEn: 'Evaluate the emergence of sociology and examine Ibn Khaldun’s science of human civilization (Umran).',
        activityAr: 'اكتب فقرة تلخص كيف أسس ابن خلدون لقواعد البحث الاجتماعي قبل علماء الغرب بقرون.',
        activityEn: 'Write a summary explaining how Ibn Khaldun founded social research principles centuries before Western scholars.',
        questionAr: 'من هو المفكر العربي المسلم الذي يُعد المؤسس الحقيقي لعلم الاجتماع وأطلق عليه "علم العمران البشري"؟',
        questionEn: 'Which Arab-Muslim scholar is recognized as the pioneer founder of sociology ("Science of Human Umran")?',
        optionsAr: ['عبد الرحمن بن خلدون', 'الفارابي', 'ابن رشد'],
        optionsEn: ['Ibn Khaldun', 'Al-Farabi', 'Ibn Rushd'],
        correctIndex: 0,
        vocabulary: [['علم الاجتماع', 'sociology'], ['علم العمران البشري', 'science of human civilization'], ['الظاهرة الاجتماعية', 'social phenomenon']]
      },
      {
        titleAr: 'البناء الاجتماعي والجماعات الاجتماعية الأولية والثانوية',
        titleEn: 'Social Structure and Primary vs Secondary Social Groups',
        subtitleAr: 'مفهوم البناء الاجتماعي ومكوناته، والفرق بين الجماعة الأولية (الأسرة) والجماعة الثانوية (المصنع والمؤسسة)',
        subtitleEn: 'Concept of social structure; contrasting primary groups (family) with secondary groups (workplace/associations)',
        focusAr: 'تحليل شبكة العلاقات الاجتماعية ومقارنة الروابط العاطفية في الجماعة الأولية بالعلاقات الرسمية النفعية في الثانوية.',
        focusEn: 'Contrast intimate informal bonds of primary groups with formal contractual relations of secondary groups.',
        activityAr: 'صنف الجماعات الآتية إلى أولية أو ثانوية: الأسرة، فريق العمل في شركة، الأصدقاء المقربون، النقابة المهنية.',
        activityEn: 'Classify as primary or secondary: family, corporate project team, close friends, labor union.',
        questionAr: 'أي من الخصائص الآتية تميز "الجماعة الاجتماعية الأولية" مثل الأسرة؟',
        questionEn: 'Which characteristic uniquely defines a primary social group such as the family?',
        optionsAr: ['العلاقات الشخصية المباشرة والروابط العاطفية القوية', 'العلاقات الرسمية والتعاقدية النفعية', 'العضوية المؤقتة القائمة على المصلحة'],
        optionsEn: ['Direct personal relationships and strong emotional bonds', 'Formal utilitarian contractual ties', 'Temporary interest-based membership'],
        correctIndex: 0,
        vocabulary: [['البناء الاجتماعي', 'social structure'], ['الجماعة الأولية', 'primary group'], ['الجماعة الثانوية', 'secondary group']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 5. English Language G11 (Common Core - Egypt Secondary 2)
// ---------------------------------------------------------------------------
const englishUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: البقاء بصحة جيدة',
    unitTitleEn: 'Unit 1: Staying Healthy',
    lessons: [
      {
        titleAr: 'الإسعافات الأولية وأسلوب الحياة الصحي',
        titleEn: 'First Aid and Healthy Living',
        subtitleAr: 'مفردات الإسعافات الأولية (CPR، الضمادات، العدوى)، وأفعال الإلزام والضرورة (must, have to, should)',
        subtitleEn: 'First aid vocabulary (CPR, bandaging, hygiene) and modal verbs of obligation/advice',
        focusAr: 'استخدام المصطلحات الطبية الأساسية والتعبير عن الضرورة والإلزام والنصيحة في مواقف الطوارئ الصحية.',
        focusEn: 'Deploy first-aid terminology and apply modal verbs (must, have to, need to) in health scenarios.',
        activityAr: 'اكتب دليلاً موجزاً من أربع خطوات لإجراء الإنعاش القلبي الرئوي (CPR) باستخدام أفعال الضرورة.',
        activityEn: 'Write a 4-step first aid guide for CPR using modal verbs of obligation and necessity.',
        questionAr: 'Which modal verb expresses strong internal obligation and personal duty?',
        questionEn: 'Which modal verb expresses strong internal obligation and personal duty?',
        optionsAr: ['must', 'might', 'could'],
        optionsEn: ['must', 'might', 'could'],
        correctIndex: 0,
        vocabulary: [['CPR', 'الإنعاش القلبي الرئوي'], ['infection', 'عدوى'], ['obligation', 'إلزام']]
      },
      {
        titleAr: 'الجهاز المناعي والحفاظ على الصحة',
        titleEn: 'The Immune System and Staying Well',
        subtitleAr: 'الوقاية من الفيروسات، دور كرات الدم البيضاء، وصياغة الجمل الشرطية للنصائح الصحية',
        subtitleEn: 'Preventing viral infections, immune response, and conditional sentences for health tips',
        focusAr: 'شرح آلية المناعة بأسلوب لغوي واضح، وتطبيق القواعد النحوية على نصوص علمية ميسرة.',
        focusEn: 'Explain immunity mechanisms and structure zero and first conditional advice statements.',
        activityAr: 'صغ ثلاث جمل شرطية توضح كيف يحافظ الإنسان على قوة جهازه المناعي.',
        activityEn: 'Form three conditional sentences detailing how a person keeps their immune system resilient.',
        questionAr: 'If you want to boost your immune system, you ______ eat balanced meals and sleep well.',
        questionEn: 'If you want to boost your immune system, you ______ eat balanced meals and sleep well.',
        optionsAr: ['should', 'would', 'will not'],
        optionsEn: ['should', 'would', 'will not'],
        correctIndex: 0,
        vocabulary: [['immune system', 'جهاز المناعة'], ['boost', 'يعزز'], ['vaccine', 'لقاح']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: تناول الطعام حول العالم',
    unitTitleEn: 'Unit 2: Eating Around the World',
    lessons: [
      {
        titleAr: 'ثقافات الطعام والاحتفالات التقليدية',
        titleEn: 'Food Traditions and Cultural Celebrations',
        subtitleAr: 'المأكولات الشعبية والمناسبات، والمقارنة والتفضيل بين العادات الغذائية (Comparatives & Superlatives)',
        subtitleEn: 'Culinary traditions, festive meals, and comparative/superlative structures',
        focusAr: 'وصف العادات والتقاليد الغذائية في مختلف الثقافات واستخدام صيغ المقارنة بدقة.',
        focusEn: 'Describe diverse international food cultures using comparative and superlative structures.',
        activityAr: 'قارن بين وجبتين تقليديتين باستخدام صفات المقارنة (more nutritious, as delicious as).',
        activityEn: 'Compare two traditional meals using comparative and equality adjectives.',
        questionAr: 'Homemade food is usually ______ than fast food.',
        questionEn: 'Homemade food is usually ______ than fast food.',
        optionsAr: ['healthier', 'more healthy', 'healthy'],
        optionsEn: ['healthier', 'more healthy', 'healthy'],
        correctIndex: 0,
        vocabulary: [['tradition', 'تقليد'], ['celebration', 'احتفال'], ['nutritious', 'مغذٍ']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 6. Second Foreign Languages G11 (French & German)
// ---------------------------------------------------------------------------
const frenchUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: نادي سكان المدينة',
    unitTitleEn: 'Unité 1: Le club des citadins',
    lessons: [
      {
        titleAr: 'وصف المدينة والحي السكني وخط السير',
        titleEn: 'Décrire sa ville, son quartier et indiquer un itinéraire',
        subtitleAr: 'الأماكن في المدينة، حروف الجر الدالة على المكان، وأفعال الحركة وتوجيه المارة',
        subtitleEn: 'Town locations, prepositions of place, and imperative directions',
        focusAr: 'استخدام المفردات الفرنسية لوصف معالم المدينة وحروف الجر (devant, derrière, à côté de).',
        focusEn: 'Use French vocabulary to describe urban locations and prepositions of place accurately.',
        activityAr: 'Écris trois phrases pour indiquer le chemin de la gare au musée.',
        activityEn: 'Write three sentences giving directions from the train station to the museum.',
        questionAr: 'Pour aller au musée, vous ______ tout droit puis tournez à droite.',
        questionEn: 'Pour aller au musée, vous ______ tout droit puis tournez à droite.',
        optionsAr: ['allez', 'va', 'vont'],
        optionsEn: ['allez', 'va', 'vont'],
        correctIndex: 0,
        vocabulary: [['la ville', 'المدينة'], ['le quartier', 'الحي السكني'], ['tourner', 'ينعطف']]
      }
    ]
  }
];

const germanUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: الطعام والشراب والتسوق',
    unitTitleEn: 'Lektion 1: Essen, Trinken und Einkaufen',
    lessons: [
      {
        titleAr: 'الوجبات والتسوق والتعبير عن الرغبة',
        titleEn: 'Mahlzeiten, Einkaufen und Wünsche äußern',
        subtitleAr: 'المفردات الألمانية للأطعمة والمشروبات، وأفعال (möchten, essen, trinken)',
        subtitleEn: 'German food vocabulary, grocery shopping, and verbs möchten/essen/trinken',
        focusAr: 'التحدث عن الوجبات اليومية وطلب الأطعمة في المتجر أو المطعم باللغة الألمانية.',
        focusEn: 'Express daily food habits, order groceries, and conjugate modal verb möchten.',
        activityAr: 'Schreibe drei Sätze: Was isst du gerne zum Frühstück?',
        activityEn: 'Write three sentences about what you like to eat for breakfast in German.',
        questionAr: 'Was ______ du gerne zum Mittagessen trinken?',
        questionEn: 'Was ______ du gerne zum Mittagessen trinken?',
        optionsAr: ['möchtest', 'möchte', 'möchtet'],
        optionsEn: ['möchtest', 'möchte', 'möchtet'],
        correctIndex: 0,
        vocabulary: [['das Frühstück', 'الإفطار'], ['das Mittagessen', 'الغداء'], ['trinken', 'يشرب']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 8. Arabic Literature & Grammar G11 (Common Core - Egypt Secondary 2)
// ---------------------------------------------------------------------------
const arabicLitUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: علم البيان والبديع وتطبيقات البلاغة',
    unitTitleEn: 'Unit 1: Arabic Rhetoric: Imagery and Stylistic Devices',
    lessons: [
      {
        titleAr: 'أسرار التشبيه والاستعارة في البلاغة العربية',
        titleEn: 'Simile and Metaphor in Arabic Rhetoric',
        subtitleAr: 'دراسة أركان التشبيه، والتمييز بين التشبيه البليغ والتمثيلي والاستعارة المكنية والتصريحية وأثرهما الجمالي',
        subtitleEn: 'Analyze simile components, eloquent comparison, and implicit vs explicit metaphors in classical Arabic text',
        focusAr: 'التمييز بين التشبيه والاستعارة وتذوق القيمة البلاغية والجمالية للتشبيه البليغ في تشخيص وتجسيم المعاني.',
        focusEn: 'Distinguish between simile and metaphor and analyze the aesthetic value of poetic imagery in Arabic literature.',
        activityAr: 'استخرج الاستعارة من قول الشاعر: «وإذا المنية أنشبت أظفارها ** ألفيت كل تميمة لا تنفع»، وبين نوعها وقيمتها الجمالية.',
        activityEn: 'Identify the metaphor in classical verse and state whether it is implicit (Makniyya) or explicit (Tasrihiyya).',
        questionAr: 'ما نوع الاستعارة في قولنا: «ابتسمت لنا الأيام بعد طول عناء»؟',
        questionEn: 'What type of metaphor is used when smiling is attributed to days?',
        optionsAr: ['استعارة مكنية (حُذف المشبه به ودُلّ عليه بصفة من صفاته)', 'استعارة تصريحية (صُرّح بالمشبه به)', 'تشبيه مجمل مرسل'],
        optionsEn: ['Implicit metaphor (Makniyya)', 'Explicit metaphor (Tasrihiyya)', 'Simple simile'],
        correctIndex: 0,
        vocabulary: [['علم البيان', 'Arabic figurative rhetoric'], ['الاستعارة المكنية', 'implicit metaphor'], ['التشبيه البليغ', 'eloquent simile']]
      },
      {
        titleAr: 'علم البديع: المحسنات المعنوية واللفظية',
        titleEn: 'Arabic Stylistic Devices: Semantic and Phonetic Ornaments',
        subtitleAr: 'دراسة الطباق والمقابلة والتورية ومراعاة النظير (معنوية)، والجناس والسجع والتصريع وحسن التقسيم (لفظية)',
        subtitleEn: 'Study semantic contrasts (Tibaq, Muqabala) and rhythmic sonic devices (Jinas, Saj\') and their rhetorical effects',
        focusAr: 'إتقان استخراج المحسنات البديعية وتحديد أثرها المعنوي في توكيد الفكرة أو أثرها اللفظي في إعطاء جرس موسيقي.',
        focusEn: 'Identify stylistic rhetorical devices and classify them into semantic enhancers or musical acoustic ornaments.',
        activityAr: 'هات مثالاً لجناس تام وآخر لجناس ناقص، وميّز بين الأثر البلاغي للطباق الإيجابي والسلبي.',
        activityEn: 'Provide examples of complete and partial homonymy (Jinas), and contrast positive and negative antithesis (Tibaq).',
        questionAr: 'أي من المحسنات البديعية الآتية يُعد محسناً لفظياً يمنح الكلام جرساً موسيقياً تطرب له الأذن؟',
        questionEn: 'Which of the following is classified as a phonetic sonic ornament in Arabic rhetoric?',
        optionsAr: ['الجناس (التام أو الناقص)', 'الطباق الإيجابي', 'المقابلة المعنوية'],
        optionsEn: ['Jinas (Homonymy)', 'Positive antithesis', 'Semantic contrast'],
        correctIndex: 0,
        vocabulary: [['المحسنات اللفظية', 'phonetic ornaments'], ['الجناس', 'homonymy'], ['الطباق', 'antithesis']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: القواعد النحوية وإعراب الفعل المضارع',
    unitTitleEn: 'Unit 2: Arabic Grammar: The Present Tense (Al-Mudari\') Moods',
    lessons: [
      {
        titleAr: 'إعراب الفعل المضارع: النصب والجزم وأسلوب الشرط',
        titleEn: 'Present Tense Inflection: Subjunctive, Jussive, and Conditionals',
        subtitleAr: 'نواصب المضارع (أن، لن، كي، حتى، لام التعليل، فاء السببية، لام الجحود)، وجوازم المضارع وأدوات الشرط الجازمة',
        subtitleEn: 'Subjunctive particles (Hatta, Fa of causality), jussive tools, and dual-verb conditional constructs',
        focusAr: 'ضبط إعراب الفعل المضارع في حالات الرفع والنصب والجزم، ومعرفة أدوات الشرط الجازمة وإعراب فعلي الشرط وجوابه.',
        focusEn: 'Master inflection rules of Arabic present verbs in subjunctive and jussive moods and conditional sentences.',
        activityAr: 'أعرب الفعل المضارع في جملة: «من يجتهدْ في عمله ينلْ ما يتمنى»، موضحاً أداة الشرط وفعل الشرط وجوابه.',
        activityEn: 'Parse the conditional sentence identifying the particle, condition verb, and resulting jussive verb.',
        questionAr: 'متى يجب اقتران جواب الشرط بالفاء في اللغة العربية؟',
        questionEn: 'When must the conditional response (Jawab al-Shart) be prefixed with Fa?',
        optionsAr: [
          'إذا كان الجواب جملة اسمية أو طلبية أو فعلها جامد أو مسبوقاً بـ (ما، لن، قد، السين، سوف)',
          'إذا كان فعل الجواب فعلاً مضارعاً صحيح الآخر فقط',
          'في كل جملة شرطية وجوباً دون استثناء'
        ],
        optionsEn: [
          'When the response is a nominal clause, imperative/prohibitive, stative verb, or preceded by particles like Qad/Lan/Sawfa',
          'Only when the response verb is regular present tense',
          'Mandatorily in all conditional clauses'
        ],
        correctIndex: 0,
        vocabulary: [['أسلوب الشرط', 'conditional sentence'], ['اقتران الجواب بالفاء', 'Fa-coupling in response'], ['فاء السببية', 'causative Fa']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 9. History G11 (Literary Track - Egypt Secondary 2)
// ---------------------------------------------------------------------------
const historyUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: الحضارة الإسلامية وأسس بناء الدولة',
    unitTitleEn: 'Unit 1: Islamic Civilization and Medina State Foundations',
    lessons: [
      {
        titleAr: 'دعائم بناء الدولة الإسلامية في المدينة المنورة',
        titleEn: 'Foundational Pillars of the Medina Islamic State',
        subtitleAr: 'دراسة وثيقة صحيفة المدينة، المؤاخاة بين المهاجرين والأنصار، بناء المسجد، وإرساء قيم المواطنة والتعايش',
        subtitleEn: 'The Medina Charter constitution, brotherhood pact, and institutionalization of civic coexistence',
        focusAr: 'فهم الخطوات النبوية التأسيسية لبناء المجتمع المدني المتماسك وترسيخ مبدأ المواطنة والعدالة لجميع السكان.',
        focusEn: 'Analyze the constitutional steps of Prophet Muhammad in Medina establishing citizenship and mutual rights.',
        activityAr: 'اكتب تحليلاً لأهم ثلاثة بنود وردت في صحيفة المدينة تؤكد على مبدأ حرية العقيدة والتعايش السلمي.',
        activityEn: 'Analyze three core articles of the Medina Charter demonstrating freedom of belief and civic unity.',
        questionAr: 'ما الهدف الأساسي الذي حققته «صحيفة المدينة» (دستور المدينة) التي وضعها النبي ﷺ؟',
        questionEn: 'What was the primary achievement of the Medina Charter formulated by the Prophet?',
        optionsAr: [
          'تنظيم العلاقات بين جميع سكان المدينة وإقرار مبدأ المواطنة والتعايش السلمي والدفاع المشترك',
          'فرض نظام مالي أحادي واحتكار التجارة بالمدينة',
          'إلغاء الأحلاف والروابط القبلية بالقوة الجبرية'
        ],
        optionsEn: [
          'Regulating civic relations, establishing equal citizenship, peaceful coexistence, and joint defense',
          'Imposing trade monopoly in Medina',
          'Abolishing tribal structures by force'
        ],
        correctIndex: 0,
        vocabulary: [['صحيفة المدينة', 'Medina Charter'], ['المواطنة', 'citizenship'], ['المؤاخاة', 'brotherhood pact']]
      },
      {
        titleAr: 'النظم الإدارية والسياسية في الحضارة الإسلامية',
        titleEn: 'Administrative and Political Systems in Islamic Civilization',
        subtitleAr: 'نشأة الخلافة، الوزارة، ولاية الأقاليم (الإمارة)، الدواوين في عهد عمر بن الخطاب، والقضاء والشرطة',
        subtitleEn: 'The evolution of Caliphate, Vizierate, Diwan administrative departments, judiciary, and police',
        focusAr: 'تحليل تطور المؤسسات الإدارية للدولة الإسلامية وكيف استحدث عمر بن الخطاب نظام الدواوين استجابة لاتساع رقعة الدولة.',
        focusEn: 'Evaluate Islamic administrative institutions and the creation of Diwans under Umar ibn al-Khattab.',
        activityAr: 'قارن بين اختصاصات ديوان الجند وديوان الخراج في الدولة الإسلامية ودورهما في إدارة الموارد.',
        activityEn: 'Compare the roles of Diwan al-Jund (Army) and Diwan al-Kharaj (Revenue) in resource management.',
        questionAr: 'من هو الخليفة الراشد الذي استحدث نظام الدواوين (مثل ديوان الجند وديوان الخراج) لتنظيم شؤون الدولة؟',
        questionEn: 'Which Caliph established the administrative Diwan registry system in the Islamic State?',
        optionsAr: ['عمر بن الخطاب رضي الله عنه', 'أبو بكر الصديق رضي الله عنه', 'عثمان بن عفان رضي الله عنه'],
        optionsEn: ['Umar ibn al-Khattab', 'Abu Bakr al-Siddiq', 'Uthman ibn Affan'],
        correctIndex: 0,
        vocabulary: [['نظام الدواوين', 'Diwan administrative registry'], ['الخلافة', 'Caliphate'], ['بيت المال', 'treasury']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: مصر في العصر الإسلامي ودورها التاريخي',
    unitTitleEn: 'Unit 2: Egypt in the Islamic Era and Historical Pivots',
    lessons: [
      {
        titleAr: 'الفتح الإسلامي لمصر وتأسيس مدينة الفسطاط',
        titleEn: 'The Islamic Conquest of Egypt and the Founding of Fustat',
        subtitleAr: 'دوافع فتح مصر عام ٢٠هـ/٦٤١م بقيادة عمرو بن العاص، معركة عين شمس، صلح الإسكندرية، وتشييد الفسطاط وجامع عمرو',
        subtitleEn: 'Motives of the 641 CE Egypt conquest led by Amr ibn al-Aas, treaty of Alexandria, and founding of Fustat',
        focusAr: 'إدراك الدوافع الدينية والحربية والاقتصادية لفتح مصر، والتعرف على السياسة السمحة التي اتبعها المسلمون مع الأقباط.',
        focusEn: 'Understand the strategic and humanitarian drivers of Egypt\'s conquest and the tolerance policy granted to Egyptians.',
        activityAr: 'بين أهمية إعادة حفر خليج تراجان (خليج أمير المؤمنين) في ربط الفسطاط بالبحر الأحمر وتجارة الحجاز.',
        activityEn: 'Explain the strategic economic role of re-digging the Canal of the Commander of the Faithful.',
        questionAr: 'ما هي أول عاصمة إسلامية تم تشييدها في مصر وقارة أفريقيا بعد الفتح الإسلامي؟',
        questionEn: 'What was the first Islamic capital city established in Egypt and Africa following the conquest?',
        optionsAr: ['مدينة الفسطاط', 'مدينة القاهرة', 'مدينة القطائع'],
        optionsEn: ['Al-Fustat', 'Cairo', 'Al-Qata\'i'],
        correctIndex: 0,
        vocabulary: [['الفسطاط', 'Al-Fustat capital'], ['صلح الإسكندرية', 'Alexandria Treaty'], ['خليج أمير المؤمنين', 'Canal of the Commander of the Faithful']]
      },
      {
        titleAr: 'مصر في عصر الدول المستقلة والدفاع عن الحضارة',
        titleEn: 'Egypt during Independent Dynasties and Defense of Civilization',
        subtitleAr: 'الدول المستقلة (الطولونية، الإخشيدية، الفاطمية، الأيوبية، والمملوكية) ودور مصر الحاسم في معركتي حطين وعين جالوت',
        subtitleEn: 'Autonomous dynasties (Tulunid, Fatimid, Ayyubid, Mamluk) and Egypt\'s historic victories at Hattin and Ain Jalut',
        focusAr: 'استيعاب أسباب استقلال ولاة مصر عن مركز الخلافة، والدور المصيري للجيش المصري في حماية المشرق الإسلامي ودحر المغول والصليبيين.',
        focusEn: 'Analyze Egypt\'s geopolitical leadership under autonomous rulers and its decisive triumph against the Mongols at Ain Jalut.',
        activityAr: 'لخص خطة القائد المظفر قطز في معركة عين جالوت عام 1260م لاستدراج جيش التتار وتحقيق النصر الحاسم.',
        activityEn: 'Summarize Sultan Qutuz’s military tactical encirclement against the Mongols at Ain Jalut (1260 CE).',
        questionAr: 'ما المعركة التاريخية الفاصلة التي خاضها الجيش المصري بقيادة سيف الدين قطز عام ١٢٦٠م وكسرت شوكة التتار المغول؟',
        questionEn: 'Which decisive battle did the Egyptian army lead under Sultan Qutuz in 1260 CE to stop the Mongol advance?',
        optionsAr: ['معركة عين جالوت', 'معركة حطين', 'معركة اليرموك'],
        optionsEn: ['Battle of Ain Jalut', 'Battle of Hattin', 'Battle of Yarmouk'],
        correctIndex: 0,
        vocabulary: [['عين جالوت', 'Ain Jalut battle'], ['سيف الدين قطز', 'Sultan Qutuz'], ['الدول المستقلة', 'autonomous dynasties']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 10. Geography G11 (Literary Track - Egypt Secondary 2)
// ---------------------------------------------------------------------------
const geographyUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: مدخل إلى جغرافيا التنمية ومجالاتها',
    unitTitleEn: 'Unit 1: Introduction to Development Geography',
    lessons: [
      {
        titleAr: 'مفهوم جغرافيا التنمية ومبادئها واستدامتها',
        titleEn: 'Concepts and Principles of Sustainable Development Geography',
        subtitleAr: 'تطور مفهوم التنمية من الاقتصادية إلى البشرية والمستدامة، ومبادئ التنمية (الشمولية، التكامل، والاستمرارية)',
        subtitleEn: 'Evolution from economic growth to human and sustainable development; principles of comprehensiveness and continuity',
        focusAr: 'التمييز بين التنمية الاقتصادية والتنمية المستدامة واستيعاب متطلبات التنمية السياسية والاجتماعية والاقتصادية والبيئية.',
        focusEn: 'Differentiate between economic expansion and sustainable development, preserving resources for future generations.',
        activityAr: 'صمم مخططاً ذهنياً يوضح المبادئ الثلاثة لجغرافيا التنمية: الشمولية، التكامل، والاستمرارية.',
        activityEn: 'Create a conceptual map diagramming the 3 principles of development geography: inclusiveness, integration, continuity.',
        questionAr: 'ما المبدأ التنموي الذي يهدف إلى تلبية احتياجات الحاضر دون الإضرار بحقوق الأجيال القادمة في الموارد؟',
        questionEn: 'Which development principle focuses on meeting present needs without compromising future generations?',
        optionsAr: ['التنمية المستدامة (الاستمرارية)', 'النمو الاقتصادي المؤقت', 'الاستغلال الاستنزافي للموارد'],
        optionsEn: ['Sustainable Development', 'Temporary economic growth', 'Resource depletion'],
        correctIndex: 0,
        vocabulary: [['جغرافيا التنمية', 'development geography'], ['التنمية المستدامة', 'sustainable development'], ['التكامل التنموي', 'developmental integration']]
      },
      {
        titleAr: 'التقنيات الحديثة في خدمة جغرافيا التنمية',
        titleEn: 'Modern Geotechnologies in Development Geography',
        subtitleAr: 'دور الاستشعار عن بعد (RS) ونظم المعلومات الجغرافية (GIS) في تنمية الموارد البيئية، والتنمية الاقتصادية، والعمرانية',
        subtitleEn: 'Applications of Remote Sensing (RS) and GIS in environmental monitoring, economic planning, and urban management',
        focusAr: 'تطبيق أدوات الاستشعار عن بعد والخرائط الرقمية في الكشف عن الموارد المائية، ومراقبة تآكل الشواطئ، والتخطيط العمراني الذكي.',
        focusEn: 'Evaluate remote sensing satellite imagery and GIS database modeling in environmental protection and infrastructure planning.',
        activityAr: 'اذكر كيف يساعد نظام GIS متخذي القرار في اختيار أفضل المواقع لإنشاء مدينة جديدة أو مد شبكة طرق.',
        activityEn: 'Explain how GIS spatial analytics assists urban planners in selecting optimal infrastructure routes.',
        questionAr: 'أي تقنية جغرافية حديثة توفر بيانات ومعلومات رقمية عن سطح الأرض دون ملامسة مادية مباشرة بواسطة الأقمار الصناعية؟',
        questionEn: 'Which modern spatial technology provides digital planetary data via satellites without direct physical contact?',
        optionsAr: ['الاستشعار عن بعد (Remote Sensing)', 'المسح الميداني التقليدي بالبوصلة', 'الرسم اليدوي للخرائط'],
        optionsEn: ['Remote Sensing (RS)', 'Traditional compass surveying', 'Manual cartography'],
        correctIndex: 0,
        vocabulary: [['الاستشعار عن بعد', 'Remote Sensing'], ['نظم المعلومات الجغرافية', 'Geographic Information Systems (GIS)'], ['المرئيات الفضائية', 'satellite imagery']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: جغرافيا الموارد والتنمية المستدامة',
    unitTitleEn: 'Unit 2: Resource Geography and Sustainable Management',
    lessons: [
      {
        titleAr: 'الموارد المائية العذبة وأساليب إدارتها المتكاملة',
        titleEn: 'Freshwater Resources and Integrated Watershed Management',
        subtitleAr: 'أزمة المياه العذبة ومؤشرات الفقر المائي، إدارة أحواض الأنهار، ودراسة حوض نهر النيل والشراكة المائية المصرية الأفريقية',
        subtitleEn: 'Global freshwater scarcity, watershed ecology, the Nile River basin hydrology, and Egyptian-African water partnerships',
        focusAr: 'تحليل ميزان الموارد المائية في مصر والوطن العربي، واستراتيجيات إدارة مياه الأمطار والمياه الجوفية ومعالجة الصرف الصحي.',
        focusEn: 'Analyze hydrological water security in Egypt and the Nile Basin, advocating wastewater recycling and drip irrigation.',
        activityAr: 'اقترح ثلاثة حلول مبتكرة للحد من الفاقد المائي في الزراعة والصناعة وترشيد الاستهلاك المنزلي في مصر.',
        activityEn: 'Propose 3 innovative solutions for modern irrigation and industrial water recycling in Egypt.',
        questionAr: 'ما المصدر الرئيسي الذي يمد جمهورية مصر العربية بأكثر من 95% من احتياجاتها المائية العذبة؟',
        questionEn: 'What is the primary natural source supplying over 95% of Egypt\'s freshwater supply?',
        optionsAr: ['نهر النيل وروافده', 'الأمطار الشتوية الساحلية', 'تحلية مياه البحر'],
        optionsEn: ['The Nile River basin', 'Coastal winter rainfall', 'Desalination plants'],
        correctIndex: 0,
        vocabulary: [['الأمن المائي', 'water security'], ['حوض نهر النيل', 'Nile River basin'], ['الإدارة المتكاملة للموارد', 'integrated water resources management']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 11. Islamic Studies G11 (Common Core - Egypt Secondary 2)
// ---------------------------------------------------------------------------
const islamicUnitsG11: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[] = [
  {
    unitTitleAr: 'الوحدة الأولى: العقيدة الإسلامية والتوجيهات القرآنية',
    unitTitleEn: 'Unit 1: Islamic Creed and Quranic Guidance',
    lessons: [
      {
        titleAr: 'الإيمان بالغيب والتوكل على الله والسعي والعمل',
        titleEn: 'Faith in the Unseen, Reliance on God, and Active Endeavor',
        subtitleAr: 'أثر الإيمان بالغيب في طمأنينة النفس واستقامة السلوك، والفرق الجوهري بين التوكل المشروع والتواكل المذموم',
        subtitleEn: 'The transformative power of faith in the Unseen; contrasting dynamic reliance (Tawakkul) with passive fatalism',
        focusAr: 'ترسيخ مفهوم التوكل على الله المقترن بالأخذ بالأسباب والإتقان في العمل والاجتهاد في طلب العلم وبناء المجتمع.',
        focusEn: 'Internalize authentic faith that pairs spiritual reliance upon God with rigorous effort and scientific agency.',
        activityAr: 'اشرح في ثلاث نقاط كيف يدفع الإيمان بالغيب الإنسان إلى العمل الجاد وعمارة الأرض بدلاً من السلبية.',
        activityEn: 'Explain how genuine belief in the unseen inspires positive productivity and societal contribution.',
        questionAr: 'ما المفهوم الإسلامي الصحيح للتوكل على الله تعالى؟',
        questionEn: 'What is the correct Islamic understanding of reliance on God (Tawakkul)?',
        optionsAr: [
          'تفويض الأمر لله تعالى مع الأخذ الكامل بكافة الأسباب المشروعة والاجتهاد والعمل',
          'ترك العمل والأسباب بدعوى انتظار الرزق دون سعي',
          'الاعتماد على الأسباب المادية وحدها دون يقين في حكمة الله'
        ],
        optionsEn: [
          'Entrusting the outcome to God while actively pursuing all valid practical means and hard work',
          'Abandoning effort waiting for passive provision',
          'Relying solely on material factors without spiritual belief'
        ],
        correctIndex: 0,
        vocabulary: [['التوكل على الله', 'Tawakkul (reliance on God)'], ['الأخذ بالأسباب', 'pursuing practical means'], ['الإيمان بالغيب', 'faith in the unseen']]
      },
      {
        titleAr: 'إعلاء شأن العلم والبحث والتفكر في الإسلام',
        titleEn: 'Veneration of Knowledge, Research, and Reflection in Islam',
        subtitleAr: 'مكانة العلماء في القرآن والسنة، دعوة الإسلام لإعمال العقل والتدبر في الكون، ونبذ الخرافة والتقليد الأعمى',
        subtitleEn: 'The rank of scholars in the Quran and Sunnah, cognitive contemplation, and repudiation of blind imitation',
        focusAr: 'إدراك أن طلب العلم فريضة دينية تشمل العلوم الشرعية والكونية والتطبيقية لبناء الحضارة وإسعاد البشرية.',
        focusEn: 'Appreciate that seeking both religious and empirical scientific knowledge is a spiritual obligation in Islam.',
        activityAr: 'اذكر آيتين كريمتين أو حديثين شريفين يحثان على التفكر في خلق السماوات والأرض واستخدام العقل والبرهان.',
        activityEn: 'Cite two Quranic verses urging rational reflection upon cosmic creation and logical deduction.',
        questionAr: 'ما الحكم الشرعي لطلب العلم النافع (الشرعي والتجريبي) في الإسلام؟',
        questionEn: 'What is the religious status of seeking beneficial empirical and spiritual knowledge in Islam?',
        optionsAr: ['فريضة وشرف عظيم يسهم في نهضة الأمة وعمارة الكون', 'أمر هامشي لا ثواب فيه', 'مقتصر على العلوم النظرية فقط'],
        optionsEn: ['A sacred duty and virtue driving civilization', 'A marginal pursuit', 'Limited to theoretical studies'],
        correctIndex: 0,
        vocabulary: [['طلب العلم', 'seeking knowledge'], ['إعمال العقل', 'rational contemplation'], ['عمارة الأرض', 'civilizational stewardship']]
      }
    ]
  },
  {
    unitTitleAr: 'الوحدة الثانية: مقاصد الشريعة وقيم المواطنة والتكافل',
    unitTitleEn: 'Unit 2: Objectives of Sharia, Citizenship, and Social Solidarity',
    lessons: [
      {
        titleAr: 'مقاصد الشريعة الإسلامية وحفظ الكليات الخمس',
        titleEn: 'Objectives of Sharia (Maqasid) and Protecting the Five Essentials',
        subtitleAr: 'حفظ الدين، النفس، العقل، النسل/العرض، والمال، وأثر تطبيق هذه المقاصد في استقرار وسلامة المجتمع الإنساني',
        subtitleEn: 'Preservation of Religion, Life, Intellect, Lineage/Honor, and Wealth to ensure human flourishing',
        focusAr: 'فهم الغايات التشريعية الكبرى للإسلام في حماية كرامة الإنسان وحقوقه الأساسية وتحقيق العدالة والنفع العام.',
        focusEn: 'Understand the overarching objectives of Islamic law in safeguarding human dignity, rights, and public welfare.',
        activityAr: 'اربط بين كل كلية من الكليات الخمس وإجراء تشريعي أو مدني يسهم في حمايتها في حياتنا المعاصرة.',
        activityEn: 'Map each of the five essentials to modern civil safeguards and ethical legal practices.',
        questionAr: 'ما هي الكليات الخمس الضرورية التي أجمعت الشرائع السماوية على وجوب حفظها ورعايتها؟',
        questionEn: 'What are the Five Essentials (Al-Kulliyyat Al-Khams) protected by Islamic Sharia?',
        optionsAr: [
          'حفظ الدين، والنفس، والعقل، والنسل (أو العرض)، والمال',
          'حفظ المناصب، والمصالح الفردية، والثروات الخاصة، والسلطة فقط',
          'حفظ التقاليد الموروثة، واللغات، والحدود الجغرافية'
        ],
        optionsEn: [
          'Preservation of Religion, Life, Intellect, Lineage, and Wealth',
          'Preservation of personal prestige and monopoly',
          'Preservation of arbitrary customs'
        ],
        correctIndex: 0,
        vocabulary: [['مقاصد الشريعة', 'Objectives of Sharia (Maqasid)'], ['الكليات الخمس', 'The Five Essentials'], ['حفظ النفس والعقل', 'Preservation of life and intellect']]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Lecture Builder Helper
// ---------------------------------------------------------------------------
function buildLecturesFromUnits(
  units: { unitTitleAr: string; unitTitleEn: string; lessons: Omit<EgyptG11LessonPlan, 'id' | 'order' | 'unitTitleAr' | 'unitTitleEn' | 'termAr' | 'termEn'>[] }[],
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  let globalOrder = 1;
  return units.flatMap((unit, _unitIndex) =>
    unit.lessons.map((lesson): Lecture => {
      const order = globalOrder++;
      const id = `eg-${subject.toLowerCase()}-g11-t1-${order}`;
      return {
        id,
        order,
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        subtitleAr: lesson.subtitleAr,
        subtitleEn: lesson.subtitleEn,
        descriptionAr: `شرح وأنشطة أصلية مساندة لموضوع كتاب الوزارة: ${lesson.focusAr}`,
        descriptionEn: `Original lessons and assessments supporting the Ministry textbook: ${lesson.focusEn}`,
        topicAr: unit.unitTitleAr,
        topicEn: unit.unitTitleEn,
        durationMinutes: 35,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel: 'G11',
        educationType,
        educationTrack: track,
        gradeLevelNameAr: 'الصف الثاني الثانوي',
        gradeLevelNameEn: 'Secondary 2',
        termAr: 'الفصل الدراسي الأول',
        termEn: 'First Semester',
        unitTitleAr: unit.unitTitleAr,
        unitTitleEn: unit.unitTitleEn,
        lessonNumberAr: `الدرس ${order}`,
        lessonNumberEn: `Lesson ${order}`,
        warmupHookAr: `كيف يرتبط موضوع «${lesson.titleAr}» بالظواهر والتطبيقات اليومية في حياتنا؟`,
        warmupHookEn: `How does “${lesson.titleEn}” apply to real-world observations and practices?`,
        learningOutcomesAr: [
          lesson.focusAr,
          `تطبيق المفهوم وحل التدريبات المرتبطة بـ «${lesson.titleAr}».`
        ],
        learningOutcomesEn: [
          lesson.focusEn,
          `Apply concepts and complete problem-solving tasks for “${lesson.titleEn}.”`
        ],
        vocabulary: lesson.vocabulary.map(([termEn, termAr]) => ({
          termAr,
          termEn,
          definitionAr: `مفهوم علمي/لغوي أساسي في درس «${lesson.titleAr}».`,
          definitionEn: `Core concept in the lesson “${lesson.titleEn}.”`
        })),
        keyConceptsAr: [unit.unitTitleAr, lesson.titleAr],
        keyConceptsEn: [unit.unitTitleEn, lesson.titleEn],
        summaryAr: lesson.focusAr,
        summaryEn: lesson.focusEn,
        mainContentAr: `${lesson.focusAr}\n\nنشاط تطبيقي تفاعلي: ${lesson.activityAr}\n\nتذكّر أن هذا المحتوى الرقمي الأصلي هو دعم تعليمي مساند وموجّه وفق أهداف كتاب الوزارة الرسمي.`,
        mainContentEn: `${lesson.focusEn}\n\nPractice activity: ${lesson.activityEn}\n\nThis platform content provides original supplementary instruction supporting the official Ministry curriculum.`,
        sections: [
          {
            titleAr: 'الفكرة الرئيسة والمفاهيم الأساسية',
            titleEn: 'Core Concepts & Principles',
            contentAr: lesson.focusAr,
            contentEn: lesson.focusEn,
            tipsAr: ['ركز على الفهم العميق والربط المنطقي بين القوانين والمفاهيم.', 'استعن بالأنشطة التطبيقية لترسيخ المعلومة.'],
            tipsEn: ['Focus on deep understanding and conceptual reasoning.', 'Use hands-on activities to reinforce mastery.']
          },
          {
            titleAr: 'النشاط التطبيقي والتدريب العملي',
            titleEn: 'Practical Activity & Application',
            contentAr: lesson.activityAr,
            contentEn: lesson.activityEn
          }
        ],
        formativeAssessment: [
          {
            id: `${id}-check`,
            questionAr: lesson.questionAr,
            questionEn: lesson.questionEn,
            optionsAr: [...lesson.optionsAr],
            optionsEn: [...lesson.optionsEn],
            correctIndex: lesson.correctIndex,
            explanationAr: 'تستند الإجابة إلى القواعد والمفاهيم العلمية الواردة في الدرس.',
            explanationEn: 'The answer directly follows the principles explained in the lesson.'
          }
        ],
        assessment: {
          id: `${id}-assessment`,
          lectureId: id,
          titleAr: `تقويم: ${lesson.titleAr}`,
          titleEn: `Assessment: ${lesson.titleEn}`,
          passingScore: 80,
          questions: [
            {
              id: `${id}-q1`,
              textAr: lesson.questionAr,
              textEn: lesson.questionEn,
              optionsAr: [...lesson.optionsAr],
              optionsEn: [...lesson.optionsEn],
              correctIndex: lesson.correctIndex,
              conceptTestedAr: lesson.titleAr,
              conceptTestedEn: lesson.titleEn,
              explanationAr: 'الإجابة المعتمدة وفق شرح كتاب الوزارة الرسمي والمفاهيم المقررة.',
              explanationEn: 'The verified answer according to the official curriculum standard.',
              difficulty: 'medium'
            }
          ]
        }
      };
    })
  );
}

// ---------------------------------------------------------------------------
// Main Curriculum Retrieval for Egypt Grade 11
// ---------------------------------------------------------------------------
export function getEgyptG11Curriculum(
  subject: Subject,
  track: EducationTrack = 'GENERAL',
  educationType: EducationType = 'PUBLIC'
): Lecture[] {
  if (!isEgyptG11SubjectAvailable(subject, track, educationType)) return [];

  switch (subject) {
    case 'PHYSICS':
      return buildLecturesFromUnits(physicsUnits, subject, educationType, track);
    case 'CHEMISTRY':
      return buildLecturesFromUnits(chemistryUnits, subject, educationType, track);
    case 'MATH':
      return buildLecturesFromUnits(pureMathUnits, subject, educationType, track);
    case 'BIOLOGY':
      return HIGH_BIO_G11_LECTURES.map((lec) => ({
        ...lec,
        subject: 'BIOLOGY',
        country: 'EG',
        gradeLevel: 'G11',
        educationType,
        educationTrack: track
      }));
    case 'PHILOSOPHY':
      return buildLecturesFromUnits(psychologySociologyUnits, subject, educationType, track);
    case 'ENGLISH':
      return buildLecturesFromUnits(englishUnitsG11, subject, educationType, track);
    case 'FRENCH':
      return buildLecturesFromUnits(frenchUnitsG11, subject, educationType, track);
    case 'GERMAN':
    case 'ITALIAN':
      return buildLecturesFromUnits(germanUnitsG11, subject, educationType, track);
    case 'ARABIC_LIT':
      return buildLecturesFromUnits(arabicLitUnitsG11, subject, educationType, track);
    case 'HISTORY':
      return buildLecturesFromUnits(historyUnitsG11, subject, educationType, track);
    case 'GEOGRAPHY':
      return buildLecturesFromUnits(geographyUnitsG11, subject, educationType, track);
    case 'ISLAMIC_STUDIES':
      return buildLecturesFromUnits(islamicUnitsG11, subject, educationType, track);
    default:
      return [];
  }
}
