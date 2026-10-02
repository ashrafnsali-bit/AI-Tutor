import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL GENERAL SCIENCE (العلوم - الصف الثاني الإعدادي / Prep 2 - Grade 8)
// Official Grade 8 / Prep 2 National Science Curriculum Alignment (Language & Public Schools):
// Unit 1: Periodic Table & Elements Properties (Mendeleev, Moseley, Modern Periodic Table, Atomic Size, Electronegativity, Metals/Non-metals, Alkali Metals, Halogens, Water)
// Unit 2: The Atmosphere & Protecting the Planet (Atmospheric Layers: Troposphere, Stratosphere, Mesosphere, Thermosphere; Ozone Layer Depletion & Global Warming)
// Unit 3: Fossils & Protecting Species from Extinction (Fossil Types: Mold, Cast, Petrified, Complete; Evolution Evidence, Extinction Causes & Natural Protectorates)
// ============================================================================

export const MIDDLE_SCIENCE_G8_LECTURES: Lecture[] = [
  // ── LECTURE 1: CLASSIFICATION OF ELEMENTS & THE MODERN PERIODIC TABLE ──
  {
    id: 'sci8-1',
    order: 1,
    titleAr: 'المحاضرة 1: محاولات تصنيف العناصر وبنية الجدول الدوري الحديث',
    titleEn: 'Lecture 1: Classification of Elements & The Modern Periodic Table (MPT)',
    subtitleAr: 'جدول مندليف، جدول موزلي، والجدول الدوري الحديث، والدورات والمجموعات والفئات وتحديد موقع العنصر',
    subtitleEn: 'Mendeleev, Moseley, Modern Periodic Table structure, s/p/d/f blocks, and determining element location by atomic number.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - العلوم والساينس',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - General Science & Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Science Curriculum',
    unitTitleAr: 'الوحدة الأولى: دورية العناصر وخواصها (Periodic Table & Element Properties)',
    unitTitleEn: 'Unit 1: Periodicity & Properties of Elements',
    lessonNumberAr: 'الدرس 1: محاولات تصنيف العناصر وبنية الجدول الدوري الحديث',
    lessonNumberEn: 'Lesson 1: Historical Classification & Modern Periodic Table Structure',

    warmupHookAr: 'تخيل أنك دخلت مكتبة ضخمة بها آلاف الكتب دون أي تنظيم أو فهارس، كيف ستجد كتابك المفضل؟ هذا التحدي واجهه العلماء قديماً عندما اكتشفوا العناصر الكيميائية! في هذه المحاضرة نكتشف كيف نظم مندليف ثم موزلي ثم علماء الكيمياء الحديثة 118 عنصراً في أعظم خريطة علمية عرفتها البشرية: الجدول الدوري الحديث!',
    warmupHookEn: 'Imagine searching an unorganized library of thousands of books. Scientists organized 118 elemental building blocks through Mendeleev, Moseley, and the Modern Periodic Table!',

    learningOutcomesAr: [
      'أن يقارن الطالب بين محاولات تصنيف العناصر: جدول مندليف (حسب الوزن الذري) وجدول موزلي (حسب العدد الذري)',
      'أن يوضح الأساس العلمي لبناء الجدول الدوري الحديث (العدد الذري وطريقة ملء مستويات الطاقة الفرعية بالإلكترونات)',
      'أن يصف بنية الجدول الدوري الحديث: 7 دورات أفقية، 18 مجموعة رأسية، و4 فئات أساسية (s, p, d, f)',
      'أن يحدد موقع أي عنصر في الجدول الدوري (رقم الدورة والمجموعة والفئة) بمعلومية عدده الذري',
      'أن يستنتج العدد الذري لعنصر بمعلومية موقعه في الجدول الدوري الحديث'
    ],
    learningOutcomesEn: [
      'Compare historical element classifications: Mendeleev (atomic weight) vs Moseley (atomic number)',
      'State the scientific basis of the Modern Periodic Table (atomic number & subshell energy filling)',
      'Describe MPT architecture: 7 horizontal periods, 18 vertical groups, and 4 blocks (s, p, d, f)',
      'Locate elements (period, group, block) from electronic configuration / atomic number',
      'Deduce the atomic number of an element given its periodic position'
    ],

    vocabulary: [
      {
        termAr: 'الجدول الدوري الحديث (Modern Periodic Table)',
        termEn: 'Modern Periodic Table (MPT)',
        definitionAr: 'جدول رتبت فيه العناصر تصاعدياً حسب أعدادها الذرية وطريقة ملء مستويات الطاقة الفرعية بالإلكترونات.',
        definitionEn: 'The tabular arrangement of elements in increasing order of atomic numbers and subshell electronic configurations.'
      },
      {
        termAr: 'الدورة (Period)',
        termEn: 'Period',
        definitionAr: 'الصف الأفقي في الجدول الدوري، ويتفق عناصر الدورة الواحدة في عدد مستويات الطاقة المشغولة بالإلكترونات.',
        definitionEn: 'A horizontal row in the periodic table sharing the same number of occupied energy levels.'
      },
      {
        termAr: 'المجموعة (Group)',
        termEn: 'Group',
        definitionAr: 'العمود الرأسي في الجدول الدوري، وتتشابه عناصر المجموعة الواحدة في خواصها الكيميائية لتساوي عدد إلكترونات المستوى الخارجي.',
        definitionEn: 'A vertical column of elements sharing similar chemical properties due to identical valence electrons.'
      }
    ],

    keyConceptsAr: [
      'جدول مندليف: أول جدول دوري حقيقي رتب 67 عنصراً تصاعدياً حسب الأوزان الذرية وترك خانات فارغة للعناصر المكتشفة لاحقاً',
      'جدول موزلي: رتب العناصر تصاعدياً حسب أعدادها الذرية بعد دراسة خواص الأشعة السينية (X-rays) وأضاف الغازات الخاملة واللانثانيدات والأكتينيدات',
      'الجدول الدوري الحديث: 118 عنصراً (92 في القشرة الأرضية والباقي يُحضر صناعياً)، 7 دورات أفقية، 18 مجموعة رأسية',
      'الفئات الأربع: الفئة s (يسار الجدول تضم 1A, 2A)، الفئة p (يمين الجدول تضم 3A إلى 7A والمجموعة الصفرية)، الفئة d (وسط الجدول عناصر انتقالية تبدأ من الدورة 4)، والفئة f (أسفل الجدول تضم اللانثانيدات والأكتينيدات)',
      'تحديد الموقع: رقم الدورة = عدد مستويات الطاقة المشغولة | رقم المجموعة = عدد إلكترونات مستوى الطاقة الخارجي (Valence Electrons)'
    ],
    keyConceptsEn: [
      'Mendeleev Table: 67 elements arranged by atomic weight, leaving predicted gaps for undiscovered elements',
      'Moseley Table: Ordered by atomic number based on X-ray diffraction, adding noble gases and f-block series',
      'Modern Periodic Table: 118 elements, 7 horizontal periods, 18 vertical groups',
      'Four Blocks: s-block (left: 1A, 2A), p-block (right: 3A-7A, 0), d-block (middle transition elements from period 4), and f-block (bottom lanthanides/actinides)',
      'Position Rules: Period Number = number of occupied energy levels; Group Number = valence shell electron count'
    ],
    summaryAr: 'تأسيس علمي شامل لجدول العناصر: مقارنة تاريخية بين مندليف وموزلي والجدول الدوري الحديث، تقسيم الفئات s و p و d و f، وقواعد حساب وتحديد موقع العناصر وأعدادها الذرية.',
    summaryEn: 'Comprehensive guide to the Modern Periodic Table: historical evolution from Mendeleev and Moseley, s/p/d/f block taxonomy, and exact algorithms for determining element position and atomic numbers.',

    sections: [
      {
        titleAr: '1. التطور التاريخي: جدول مندليف وجدول موزلي',
        titleEn: '1. Historical Evolution: Mendeleev & Moseley Periodic Tables',
        contentAr: '1) جدول مندليف (Mendeleev): أول جدول دوري حقيقي رتب فيه 67 عنصراً تصاعدياً حسب أوزانها الذرية (Atomic Weights). من مميزاته: تنبأ باكتشاف عناصر جديدة وترك لها خانات فارغة وصحح أوزاناً ذرية مقدرة خطأ. ومن عيوبه: اضطر للإخلال بالترتيب التصاعدي لوضع العناصر في المجموعات المتشابهة ووضع أكثر من عنصر في خانة واحدة. 2) جدول موزلي (Moseley): بعد اكتشاف رذرفورد للبروتونات الموجبة ودراسة موزلي للأشعة السينية، اكتشف أن دورية الخواص ترتبط بالعدد الذري (Atomic Number) وليس الوزن الذري، فرتب العناصر تصاعدياً حسب أعدادها الذرية بحيث يزيد كل عنصر عن سابقه بمقدار 1 صحيح.',
        contentEn: 'Mendeleev arranged 67 elements by atomic weight, predicting undiscovered elements. Moseley discovered through X-ray spectroscopy that elemental periodicity depends on atomic numbers (proton count) rather than atomic weights.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: مقارنة علمية بين جدول مندليف وجدول موزلي',
          titleEn: 'Worked Example 1: Mendeleev vs Moseley Classification Criteria',
          equation: 'مندليف: وزن ذري (Atomic Weight)  -->  موزلي: عدد ذري (Atomic Number)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'أساس ترتيب مندليف: تصاعدياً حسب الوزن الذري مع ترك خانات فارغة وتوقع خواص العناصر مثل الإيكاسيليكون (الجرمانيوم حالياً).',
              textEn: 'Mendeleev criterion: increasing atomic weights with predictive gaps.',
              noteAr: 'الوزن الذري'
            },
            {
              stepNumber: 2,
              textAr: 'اكتشافات مهدت لموزلي: إثبات رذرفورد أن النواة تحتوي بروتونات موجبة سماها بالعدد الذري.',
              textEn: 'Rutherford discovered positive protons inside atomic nucleus.',
              noteAr: 'العدد الذري'
            },
            {
              stepNumber: 3,
              textAr: 'تعديلات موزلي: ترتيب العناصر حسب أعدادها الذرية، إضافة المجموعة الصفرية (الغازات الخاملة)، وتخصيص مكان أسفل الجدول للانثانيدات والأكتينيدات.',
              textEn: 'Moseley added noble gases and bottom lanthanide/actinide series.',
              noteAr: 'جدول موزلي المطور'
            }
          ],
          takeawayAr: 'العنصر في جدول موزلي والجدول الحديث يزيد عدده الذري عن العنصر الذي يسبقه في نفس الدورة بمقدار واحد صحيح دائماً.',
          takeawayEn: 'Across a period in MPT, each element increases strictly by 1 proton (atomic number) over its predecessor.'
        },
        formativeCheck: {
          id: 'fc-sci8-1-1',
          questionAr: 'رتب العالم موزلي العناصر الكيميائية في جدوله تصاعدياً وفقاً لـ:',
          questionEn: 'Moseley arranged the elements in his periodic table in ascending order of their:',
          optionsAr: ['أعدادها الذرية', 'أوزانها الذرية', 'أعداد النيوترونات', 'كثافتها النوعية'],
          optionsEn: ['Atomic numbers', 'Atomic weights', 'Neutron counts', 'Specific densities'],
          correctIndex: 0,
          explanationAr: 'رتب موزلي العناصر حسب أعدادها الذرية بعد اكتشاف أن خواص العناصر ترتبط بالعدد الذري وليس الوزن الذري.',
          explanationEn: 'Moseley ordered elements by atomic number after X-ray studies proved periodicity relates to proton count.',
          hintAr: 'العدد الذي يعبر عن عدد البروتونات الموجبة في النواة.'
        },
        tipsAr: [
          'تذكر: مندليف = وزن ذري | موزلي = عدد ذري | الجدول الحديث = عدد ذري + طريقة ملء مستويات الطاقة الفرعية.',
          'الغازات الخاملة (الهيليوم، النيون، الأرجون...) لم تكن مكتشفة في عهد مندليف وأضافها موزلي في المجموعة الصفرية.'
        ],
        tipsEn: [
          'Rule of thumb: Mendeleev = Atomic Weight; Moseley = Atomic Number; MPT = Atomic Number + Subshell filling.',
          'Inert noble gases were not yet discovered in Mendeleev’s era and were integrated by Moseley.'
        ]
      },
      {
        titleAr: '2. بنية الجدول الدوري الحديث وفئاته الأربع (s, p, d, f)',
        titleEn: '2. Architecture of the Modern Periodic Table & Four Blocks',
        contentAr: 'يحتوي الجدول الدوري الحديث على 118 عنصراً مقسمة إلى 7 دورات أفقية و 18 مجموعة رأسية، وينقسم إلى 4 فئات: 1) الفئة s: تقع يسار الجدول وتضم مجموعتين (1A, 2A). 2) الفئة p: تقع يمين الجدول وتضم 6 مجموعات (3A, 4A, 5A, 6A, 7A والمجموعة الصفرية 18). 3) الفئة d: تقع وسط الجدول وتسمى العناصر الانتقالية وتضم 10 مجموعات بالحرف B وتبدأ من الدورة الرابعة. 4) الفئة f: تقع أسفل الجدول وتضم سلسلتي اللانثانيدات والأكتينيدات.',
        contentEn: 'The MPT houses 118 elements arranged into 7 periods and 18 groups across 4 blocks: s-block (left: 1A, 2A), p-block (right: 3A to 7A and 0), d-block (middle transition metals starting period 4 with B suffix), and f-block (bottom lanthanides and actinides).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: خريطة فئات الجدول الدوري وتوزيع المجموعات',
          titleEn: 'Worked Example 2: Block Mapping and Group Numbering Schemes',
          equation: 's (يسار: مجموعتان) | d (وسط: 10 مجموعات) | p (يمين: 6 مجموعات) | f (أسفل: سلسلتان)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الفئة s (يسار): مجموعتان 1A (المجموعة 1 حديثاً) و 2A (المجموعة 2).',
              textEn: 's-block on left: Groups 1 (1A) and 2 (2A).',
              noteAr: 'الفئة s'
            },
            {
              stepNumber: 2,
              textAr: 'الفئة d (وسط): 10 مجموعات تبدأ من 3B إلى 2B وتفصل بين الفئتين s و p وتبدأ من الدورة 4.',
              textEn: 'd-block middle transition metals span 10 columns.',
              noteAr: 'العناصر الانتقالية'
            },
            {
              stepNumber: 3,
              textAr: 'الفئة p (يمين): 6 مجموعات تبدأ من 3A (13) حتى المجموعة الصفرية 18 (الغازات الخاملة).',
              textEn: 'p-block right: Groups 13 (3A) to 18 (Group 0 noble gases).',
              noteAr: 'الفئة p'
            }
          ],
          takeawayAr: 'العناصر الانتقالية (الفئة d) تظهر لأول مرة في الدورة الرابعة وتفصل بين عناصر الفئة s وعناصر الفئة p.',
          takeawayEn: 'Transition elements (d-block) emerge beginning in Period 4, bridging the s-block and p-block.'
        },
        formativeCheck: {
          id: 'fc-sci8-1-2',
          questionAr: 'تبدأ العناصر الانتقالية (الفئة d) في الظهور بالجدول الدوري الحديث بداية من:',
          questionEn: 'Transition elements (d-block) start to appear in the Modern Periodic Table beginning from:',
          optionsAr: ['الدورة الرابعة', 'الدورة الأولى', 'الدورة الثانية', 'الدورة السادسة'],
          optionsEn: ['Period 4', 'Period 1', 'Period 2', 'Period 6'],
          correctIndex: 0,
          explanationAr: 'تبدأ العناصر الانتقالية في الفئة d بالظهور ابتداءً من الدورة الرابعة وتتكون من 10 مجموعات.',
          explanationEn: 'Transition elements (d-block) begin appearing in Period 4 and comprise 10 vertical columns.',
          hintAr: 'الدورة التي تلي الدورة الثالثة.'
        },
        tipsAr: [
          'الترقيم التقليدي يستخدم الحروف (1A, 2A, 3B...) والترقيم الحديث يستخدم الأرقام من 1 إلى 18.',
          'المجموعة 7A ترقيمها الحديث 17، والمجموعة الصفرية ترقيمها الحديث 18.'
        ],
        tipsEn: [
          'Traditional numbering uses letter suffixes (1A, 7A); modern IUPAC notation numbers columns 1 through 18.',
          'Halogen group 7A corresponds to Group 17; Noble gases Group 0 corresponds to Group 18.'
        ]
      },
      {
        titleAr: '3. تحديد موقع العنصر في الجدول بمعلومية عدده الذري',
        titleEn: '3. Locating Element Position from Electronic Configuration',
        contentAr: 'لتحديد موقع عنصر من الفئتين s و p بمعلومية عدده الذري: 1) اكتب التوزيع الإلكتروني في مستويات الطاقة الرئيسية (K, L, M, N). 2) رقم الدورة = عدد مستويات الطاقة المشغولة بالإلكترونات. 3) رقم المجموعة = عدد إلكترونات مستوى الطاقة الخارجي (إذا انتهى بـ 1 يكون في 1A، وإذا انتهى بـ 8 يكون في المجموعة الصفرية 18). مثال: الكالسيوم 20Ca توزيعه (K:2, L:8, M:8, N:2) -> 4 مستويات = الدورة الرابعة، إلكترونان في الخارج = المجموعة 2A (2).',
        contentEn: 'To find element location: 1) Write main shell electron distribution (K, L, M, N). 2) Period number = count of occupied energy shells. 3) Group number = valence shell electron count (e.g. 20Ca = 2,8,8,2 -> 4 shells = Period 4, 2 valence electrons = Group 2A).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: تحديد موقع عنصري الصوديوم 11Na والكلور 17Cl',
          titleEn: 'Worked Example 3: Finding Periodic Coordinates for Sodium and Chlorine',
          equation: 'رقم الدورة = عدد مستويات الطاقة | رقم المجموعة = إلكترونات التكافؤ الأخيرة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الصوديوم 11Na: التوزيع (K:2, L:8, M:1) -> 3 مستويات = الدورة 3 | إلكترون أخير = المجموعة 1A (الفئة s).',
              textEn: '11Na distribution: 2, 8, 1 -> Period 3, Group 1A (1), s-block.',
              noteAr: 'فلز قلوي'
            },
            {
              stepNumber: 2,
              textAr: 'الكلور 17Cl: التوزيع (K:2, L:8, M:7) -> 3 مستويات = الدورة 3 | 7 إلكترونات = المجموعة 7A أو 17 (الفئة p).',
              textEn: '17Cl distribution: 2, 8, 7 -> Period 3, Group 7A (17), p-block.',
              noteAr: 'هالوجين لا فلزي'
            },
            {
              stepNumber: 3,
              textAr: 'النيون 10Ne: التوزيع (K:2, L:8) -> مستويان = الدورة 2 | المستوى الأخير ممتلئ بـ 8 = المجموعة الصفرية (18).',
              textEn: '10Ne: 2, 8 -> Period 2, Group 0 (18) noble gas.',
              noteAr: 'غاز خامل'
            }
          ],
          takeawayAr: 'غاز الهيليوم 2He لديه إلكترونان فقط في مستوى واحد K (K:2) وبالتالي يقع في الدورة الأولى والمجموعة الصفرية (18) لأنه غاز خامل ومستواه مكتمل.',
          takeawayEn: 'Helium (2He: K=2) is in Period 1 and Group 0 (18) because its single K shell is completely saturated.'
        },
        formativeCheck: {
          id: 'fc-sci8-1-3',
          questionAr: 'عنصر عدده الذري 12 (المغنيسيوم 12Mg)، يقع في أي دورة وأي مجموعة؟',
          questionEn: 'An element with atomic number 12 (12Mg) is located in which period and group?',
          optionsAr: ['الدورة الثالثة والمجموعة 2A (المجموعة 2)', 'الدورة الثانية والمجموعة 3A', 'الدورة الرابعة والمجموعة 1A', 'الدورة الثالثة والمجموعة الصفرية'],
          optionsEn: ['Period 3, Group 2A (Group 2)', 'Period 2, Group 3A', 'Period 4, Group 1A', 'Period 3, Group 0'],
          correctIndex: 0,
          explanationAr: 'التوزيع الإلكتروني لـ 12Mg هو 2, 8, 2 (3 مستويات طاقة = الدورة 3، وإلكترونان في المستوى الخارجي = المجموعة 2A).',
          explanationEn: 'Electronic configuration of 12Mg is 2, 8, 2 (3 shells = Period 3, 2 valence electrons = Group 2A).',
          hintAr: 'وزع الـ 12 إلكترون: K=2, L=8, M=2.'
        },
        tipsAr: [
          'احذر: الهيليوم 2He ينتهي بـ 2 لكنه لا يقع في 2A بل يقع في المجموعة الصفرية 18 لأنه غاز خامل مستواه الخارجي K مكتمل تماماً.',
          'عناصر الدورة الواحدة تتشابه في عدد مستويات الطاقة، بينما عناصر المجموعة الواحدة تتشابه في الخواص الكيميائية.'
        ],
        tipsEn: [
          'Caution: Helium (2He) has 2 electrons but belongs to Group 0 (18), not 2A, because its outer K shell is complete.',
          'Elements in the same period share the same energy shells; elements in the same group share chemical properties.'
        ]
      },
      {
        titleAr: '4. استنتاج العدد الذري وتوقع الخواص الكيميائية',
        titleEn: '4. Deducing Atomic Number from Position & Periodicity',
        contentAr: 'لاستنتاج العدد الذري لعنصر بمعلومية موقعه: 1) عدد مستويات الطاقة = رقم الدورة. 2) عدد إلكترونات المستوى الخارجي = رقم المجموعة. 3) ملء المستويات الداخلية بالسعة القصوى ثم جمع الإلكترونات. مثال: عنصر في الدورة الثالثة والمجموعة 5A -> 3 مستويات (K=2, L=8, M=5) -> العدد الذري = 2 + 8 + 5 = 15 (الفوسفور P). والعنصر الذي يليه في نفس الدورة عدده الذري 16 (+1)، والعنصر الذي يليه في نفس المجموعة عدده الذري 15 + 8 = 23.',
        contentEn: 'To calculate atomic number from coordinates: assemble shells from period count and set valence electrons from group number. Elements in the same period differ by +1; elements in the same group differ by +8 (adding a full energy level).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: حساب العدد الذري لعنصر في الدورة 3 والمجموعة 6A',
          titleEn: 'Worked Example 4: Calculating Atomic Number and Sibling Elements',
          equation: 'Z = 2 (K) + 8 (L) + 6 (M) = 16 (الكبريت Sulfur)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'رقم الدورة = 3 مستويات طاقة (K, L, M).',
              textEn: 'Period 3 corresponds to 3 energy levels (K, L, M).',
              noteAr: 'عدد المستويات'
            },
            {
              stepNumber: 2,
              textAr: 'رقم المجموعة 6A يعني أن المستوى الخارجي M يحتوي 6 إلكترونات، والمستويات السابقة ممتلئة (K:2, L:8).',
              textEn: 'Group 6A sets 6 electrons in outer shell M, inner shells full.',
              noteAr: 'إلكترونات المستوى الأخير'
            },
            {
              stepNumber: 3,
              textAr: 'العدد الذري = 2 + 8 + 6 = 16 (الكبريت 16S). العنصر الذي يليه في نفس الدورة = 17، والذي يليه في نفس المجموعة = 16 + 8 = 24.',
              textEn: 'Atomic number = 2 + 8 + 6 = 16 (Sulfur). Next in period = 17, next in group = 24.',
              noteAr: 'الناتج النهائي'
            }
          ],
          takeawayAr: 'العنصر الذي يلي عنصراً في نفس المجموعة يزيد عنه بمقدار مستوى طاقة مكتمل (8 إلكترونات في الدورات الأولى).',
          takeawayEn: 'Descending down a group increases atomic number by 8 in main block periods representing an added full shell.'
        },
        formativeCheck: {
          id: 'fc-sci8-1-4',
          questionAr: 'عنصر X يقع في الدورة الثانية والمجموعة 7A، فما هو عدده الذري؟',
          questionEn: 'Element X is located in Period 2 and Group 7A. What is its atomic number?',
          optionsAr: ['9 (الفلور)', '17', '7', '19'],
          optionsEn: ['9 (Fluorine)', '17', '7', '19'],
          correctIndex: 0,
          explanationAr: 'الدورة 2 تعني مستويين (K, L)، والمجموعة 7A تعني أن المستوى L يحتوي 7 إلكترونات -> العدد الذري = 2 + 7 = 9 (الفلور 9F).',
          explanationEn: 'Period 2 = 2 shells (K, L); Group 7A = 7 valence electrons -> Z = 2 + 7 = 9 (Fluorine).',
          hintAr: 'مستويان: K ممتلئ بـ 2 و L فيه 7.'
        },
        tipsAr: [
          'تذكر دائماً أن سعة المستويات الرئيسية: K يتشبع بـ 2 إلكترون، L بـ 8، و M بـ 8 في المستويات التمثيلية.',
          'العدد الذري عدد صحيح موجب دائماً لا يمكن أن يكون كسراً أو سالباً.'
        ],
        tipsEn: [
          'Shell capacities for main groups: K holds max 2, L holds max 8, M holds max 8.',
          'Atomic numbers are strictly positive integers.'
        ]
      }
    ],

    conceptMapAr: [
      'التصنيف التاريخي: مندليف (أوزان ذرية) ← موزلي (أعداد ذرية + غازات خاملة) ← الجدول الحديث (أعداد ذرية + ملء المستويات)',
      'هيكل الجدول الحديث: 118 عنصراً + 7 دورات أفقية + 18 مجموعة رأسية',
      'الفئات الأربع: s (يسار 1A, 2A) + p (يمين 3A-7A, 0) + d (وسط انتقالية) + f (أسفل لانثانيدات وأكتينيدات)',
      'تحديد الموقع: رقم الدورة = عدد مستويات الطاقة | رقم المجموعة = إلكترونات المستوى الخارجي'
    ],
    conceptMapEn: [
      'Historical Evolution: Mendeleev (weights) -> Moseley (atomic numbers) -> MPT (atomic number & subshells)',
      'MPT Architecture: 118 elements, 7 horizontal periods, 18 vertical groups',
      'Four Blocks: s-block (left), p-block (right), d-block (middle transition), f-block (bottom series)',
      'Location Rules: Period = occupied energy levels; Group = valence electrons count'
    ],

    textbookExercises: [
      {
        id: 'ex-sci8-1-1',
        questionAr: 'علل لما يأتي: 1) ترك مندليف خانات فارغة في جدوله الدوري. 2) يقع عنصرا الصوديوم 11Na والبوتاسيوم 19K في نفس المجموعة بالجدول الدوري الحديث.',
        questionEn: 'Explain: 1) Why Mendeleev left empty gaps in his table. 2) Why 11Na and 19K belong to the same group.',
        solutionStepsAr: [
          '1) ترك مندليف خانات فارغة لأنه تنبأ باكتشاف عناصر جديدة وقدر أوزانها الذرية وخواصها بدقة.',
          '2) يقع الصوديوم 11Na (2,8,1) والبوتاسيوم 19K (2,8,8,1) في نفس المجموعة (1A) لتشابههما في عدد إلكترونات المستوى الخارجي (إلكترون واحد لكل منهما) وتشابه خواصهما الكيميائية.'
        ],
        solutionStepsEn: [
          '1) Mendeleev predicted the discovery of new elements and estimated their properties and atomic weights.',
          '2) Both 11Na (2,8,1) and 19K (2,8,8,1) have 1 valence electron in their outer shell, placing them in Group 1A.'
        ],
        answerAr: '1) لتوقعه اكتشاف عناصر جديدة • 2) لتساوي عدد إلكترونات المستوى الخارجي (1e⁻).',
        answerEn: '1) Predicted undiscovered elements • 2) Both share 1 valence electron.'
      }
    ],

    assessment: {
      id: 'quiz-sci8-1',
      lectureId: 'sci8-1',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 1: محاولات تصنيف العناصر وبنية الجدول الدوري',
      titleEn: 'Mastery Assessment 1: Elements Classification & Modern Periodic Table',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci8-1-1',
          textAr: 'الأساس العلمي الذي بُني عليه الجدول الدوري الحديث هو ترتيب العناصر تصاعدياً حسب:',
          textEn: 'The scientific basis for arranging elements in the Modern Periodic Table is in ascending order of:',
          optionsAr: [
            'أعدادها الذرية وطريقة ملء مستويات الطاقة الفرعية بالإلكترونات',
            'أوزانها الذرية وكثافتها',
            'أعداد النيوترونات داخل النواة',
            'تاريخ اكتشاف العناصر'
          ],
          optionsEn: [
            'Atomic numbers and subshell electronic configuration filling',
            'Atomic weights and densities',
            'Neutron numbers in nucleus',
            'Chronological discovery dates'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الأساس العلمي لبناء الجدول الدوري الحديث',
          conceptTestedEn: 'Scientific basis of the Modern Periodic Table',
          explanationAr: 'رتبت عناصر الجدول الدوري الحديث تصاعدياً وفق أعدادها الذرية وطريقة ملء مستويات الطاقة الفرعية بالإلكترونات.',
          explanationEn: 'The MPT organizes elements based on increasing atomic numbers and electronic configuration in subshells.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-1-2',
          textAr: 'عنصر الأكسجين 8O يقع في الجدول الدوري الحديث في:',
          textEn: 'Oxygen (8O) is located in the Modern Periodic Table in:',
          optionsAr: ['الدورة الثانية والمجموعة 6A (المجموعة 16)', 'الدورة الأولى والمجموعة 8A', 'الدورة الثالثة والمجموعة 2A', 'الدورة الثانية والمجموعة الصفرية'],
          optionsEn: ['Period 2, Group 6A (Group 16)', 'Period 1, Group 8A', 'Period 3, Group 2A', 'Period 2, Group 0'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد موقع عنصر الأكسجين بالجدول',
          conceptTestedEn: 'Determining oxygen periodic coordinates',
          explanationAr: 'التوزيع الإلكتروني لـ 8O هو (K:2, L:6) -> مستويان = الدورة 2، و6 إلكترونات خارجية = المجموعة 6A (16).',
          explanationEn: '8O has configuration 2, 6 (2 shells = Period 2, 6 valence electrons = Group 6A / 16).',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-1-3',
          textAr: 'الفئة التي تقع في وسط الجدول الدوري وتفصل بين الفئتين s و p وتسمى بالعناصر الانتقالية هي:',
          textEn: 'The block located in the middle of the periodic table comprising transition metals is:',
          optionsAr: ['الفئة d', 'الفئة s', 'الفئة p', 'الفئة f'],
          optionsEn: ['d-block', 's-block', 'p-block', 'f-block'],
          correctIndex: 0,
          conceptTestedAr: 'الفئة d والعناصر الانتقالية',
          conceptTestedEn: 'd-block transition elements location',
          explanationAr: 'الفئة d تقع في وسط الجدول الدوري وتضم العناصر الانتقالية الرئيسية المكونة من 10 مجموعات.',
          explanationEn: 'The d-block occupies the center of the periodic table, containing the transition elements.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-1-4',
          textAr: 'عنصر يقع في الدورة الثالثة والمجموعة الصفرية (18)، فما هو عدده الذري؟',
          textEn: 'An element located in Period 3 and Group 0 (18) has an atomic number of:',
          optionsAr: ['18 (غاز الأرجون)', '10 (غاز النيون)', '8 (الأكسجين)', '20 (الكالسيوم)'],
          optionsEn: ['18 (Argon)', '10 (Neon)', '8 (Oxygen)', '20 (Calcium)'],
          correctIndex: 0,
          conceptTestedAr: 'استنتاج العدد الذري للغازات الخاملة',
          conceptTestedEn: 'Calculating noble gas atomic numbers',
          explanationAr: 'الدورة 3 = 3 مستويات (K, L, M) والمجموعة الصفرية = مستوى خارجي مكتمل بـ 8 -> 2 + 8 + 8 = 18 (الأرجون 18Ar).',
          explanationEn: 'Period 3 with full valence shell = 2, 8, 8 -> Atomic Number = 18 (Argon).',
          difficulty: 'medium'
        },
        {
          id: 'q-sci8-1-5',
          textAr: 'إذا كان العدد الذري لعنصر المغنيسيوم في الدورة الثالثة هو 12، فإن العدد الذري للعنصر الذي يليه في نفس الدورة هو:',
          textEn: 'If magnesium in Period 3 has atomic number 12, the element succeeding it in the same period has atomic number:',
          optionsAr: ['13 (الألومنيوم)', '20 (الكالسيوم)', '11 (الصوديوم)', '4 (البريليوم)'],
          optionsEn: ['13 (Aluminum)', '20 (Calcium)', '11 (Sodium)', '4 (Beryllium)'],
          correctIndex: 0,
          conceptTestedAr: 'تدرج العدد الذري في الدورة الواحدة',
          conceptTestedEn: 'Atomic number increment across a period',
          explanationAr: 'في الدورة الواحدة يزيد كل عنصر عن سابقه بمقدار واحد صحيح (+1) -> 12 + 1 = 13 (الألومنيوم 13Al).',
          explanationEn: 'Across a period, each subsequent element increments by +1 proton -> 12 + 1 = 13 (Aluminum).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: GRADUATION OF PROPERTIES, ATOMIC SIZE & ELECTRONEGATIVITY ──
  {
    id: 'sci8-2',
    order: 2,
    titleAr: 'المحاضرة 2: تدرج خواص العناصر (الحجم الذري، السالبية، والفلزية واللافلزية)',
    titleEn: 'Lecture 2: Periodic Trends: Atomic Size, Electronegativity & Metallic Character',
    subtitleAr: 'تدرج الحجم الذري، السالبية الكهربية والمركبات القطبية، متسلسلة النشاط الكيميائي، وأكاسيد الفلزات واللافلزات',
    subtitleEn: 'Atomic radius trends, electronegativity & polar molecules (H2O, NH3), chemical activity series, and basic vs acidic oxides.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - العلوم والساينس',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - General Science & Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Science Curriculum',
    unitTitleAr: 'الوحدة الأولى: دورية العناصر وخواصها (Periodic Table & Element Properties)',
    unitTitleEn: 'Unit 1: Periodicity & Properties of Elements',
    lessonNumberAr: 'الدرس 2: تدرج خواص العناصر في الجدول الدوري الحديث',
    lessonNumberEn: 'Lesson 2: Periodic Trends & Chemical Properties of Elements',

    warmupHookAr: 'لماذا يتفاعل فلز الصوديوم والبوتاسيوم مع الماء بانفجار عنيف وفرقعة قوية، بينما النحاس والفضة لا يتفاعلان إطلاقاً؟ ولماذا ذرة السيزيوم عملاقة بينما ذرة الفلور متناهية الصغر؟ السر يكمن في تدرج خواص العناصر وحجم الذرات وقوة جذب النواة لإلكتروناتها!',
    warmupHookEn: 'Why do alkali metals react explosively with water while copper remains inert? Discover the atomic radius gradient, electronegativity polar bonds, and chemical reactivity hierarchy!',

    learningOutcomesAr: [
      'أن يشرح تدرج الحجم الذري (Atomic Size) في الدورات والمجموعات ويفسر أسبابه (قوة جذب النواة وعدد مستويات الطاقة)',
      'أن يعرّف السالبية الكهربية (Electronegativity) ويميز بين المركبات القطبية (مثل الماء والنشادر) وغير القطبية والأيونية',
      'أن يصنف العناصر إلى فلزات، لافلزات، أشباه فلزات (Metalloids)، وغازات خاملة',
      'أن يرتب الفلزات في متسلسلة النشاط الكيميائي (Chemical Activity Series) حسب درجة نشاطها الكيميائي',
      'أن يقارن بين سلوك الأكاسيد القاعدية (فلزية تذوب في الماء معطية قلويات) والأكاسيد الحامضية (لافلزية تذوب معطية أحماض)'
    ],
    learningOutcomesEn: [
      'Explain atomic radius trends across periods and groups based on effective nuclear charge and shell shielding',
      'Define electronegativity and classify polar covalent compounds (H2O, NH3) vs nonpolar and ionic compounds',
      'Classify elements into metals, nonmetals, metalloids (semimetals), and noble gases',
      'Rank metals according to the Chemical Activity Series based on reactivity with water and dilute acids',
      'Differentiate basic metal oxides (alkali solutions) from acidic nonmetal oxides (acid solutions)'
    ],

    vocabulary: [
      {
        termAr: 'الحجم الذري (Atomic Size)',
        termEn: 'Atomic Size / Radius',
        definitionAr: 'نصف قطر الذرة ويقاس بوحدة البيكومتر (Picometer pm = 1 × 10⁻¹² متر) لتحديد أبعاد الذرة متناهية الصغر.',
        definitionEn: 'The atomic radius measured in picometers (pm = 10⁻¹² m) determining atomic volume.'
      },
      {
        termAr: 'السالبية الكهربية (Electronegativity)',
        termEn: 'Electronegativity',
        definitionAr: 'مقدرة الذرة في الجزيء التساهمي على جذب إلكترونات الرابطة الكيميائية نحوها.',
        definitionEn: 'The relative ability of an atom in a molecule to attract bonding shared electrons toward itself.'
      },
      {
        termAr: 'متسلسلة النشاط الكيميائي (Chemical Activity Series)',
        termEn: 'Chemical Activity Series',
        definitionAr: 'ترتيب الفلزات تنازلياً حسب درجة نشاطها الكيميائي وتفاعلها مع الماء والأحماض.',
        definitionEn: 'The arrangement of metals in descending order according to their degree of chemical reactivity.'
      }
    ],

    keyConceptsAr: [
      'تدرج الحجم الذري: يقل في الدورة من اليسار لليمين (لزيادة قوة جذب النواة الموجبة لإلكترونات المستوى الخارجي) | ويزداد في المجموعة من أعلى لأسفل (لزيادة عدد مستويات الطاقة المشغولة). أكبر العناصر حجماً هو السيزيوم (Cs) وأصغرها الفلور (F)',
      'المركب القطبي (Polar Molecule): مركب تساهمي الفرق في السالبية الكهربية بين عنصريه كبير نسبياً مثل الماء H₂O والنشادر NH₃ (قطبية الماء أقوى لأن فرق السالبية بين O و H أكبر من N و H)',
      'أشباه الفلزات (Metalloids): عناصر تجمع خواصها بين الفلزات واللافلزات (مثل السيليكون Si، البورون B، الجرمانيوم Ge، الزرنيخ As، الأنتيمون Sb، والتيلوريوم Te)',
      'تفاعلات الأكاسيد: أكاسيد الفلزات أكاسيد قاعدية (تتفاعل مع الأحماض، وبعضها يذوب في الماء مكوناً قلويات تزرق ورقة عباد الشمس: MgO + H₂O -> Mg(OH)₂) | أكاسيد اللافلزات أكاسيد حامضية (تذوب في الماء مكونة أحماض تحمر صبغة عباد الشمس: CO₂ + H₂O -> H₂CO₃)'
    ],
    keyConceptsEn: [
      'Atomic Size Trend: Decreases across a period (increasing nuclear charge attraction); Increases down a group (added electron shells). Largest = Cesium (Cs); Smallest = Fluorine (F)',
      'Polar Covalent Compounds: Molecules with relatively high electronegativity difference (H2O and NH3). Water polarity exceeds ammonia',
      'Metalloids (Semimetals): Elements exhibiting intermediate properties between metals and nonmetals (B, Si, Ge, As, Sb, Te)',
      'Oxide Behavior: Basic metal oxides form alkaline hydroxide solutions (MgO + H2O -> Mg(OH)2 turning litmus blue); Acidic nonmetal oxides form acids (CO2 + H2O -> H2CO3 turning litmus red)'
    ],
    summaryAr: 'شرح متعمق لتدرج خواص العناصر في الجدول الدوري: تدرج الحجم الذري والسالبية الكهربية وقطبية الجزيئات، وتصنيف أشباه الفلزات ومتسلسلة النشاط الكيميائي وسلوك الأكاسيد القاعدية والحامضية.',
    summaryEn: 'In-depth coverage of periodic trends: atomic radius and electronegativity dynamics, molecular polarity, semimetals, chemical activity hierarchy, and basic vs acidic oxide reactions.',

    sections: [
      {
        titleAr: '1. تدرج الحجم الذري (Atomic Radius Trend)',
        titleEn: '1. Atomic Size Trends Across Periods and Groups',
        contentAr: 'يقاس الحجم الذري بوحدة البيكومتر (pm = جزء من مليون مليون جزء من المتر 10⁻¹² m). 1) في الدورة الواحدة: يقل الحجم الذري بزيادة العدد الذري من اليسار لليمين بسبب زيادة شحنة النواة الموجبة الفعالة وزيادة قوة جذبها لإلكترونات التكافؤ الخارجية. 2) في المجموعة الواحدة: يزداد الحجم الذري بزيادة العدد الذري من أعلى لأسفل لزيادة عدد مستويات الطاقة الرئيسية المشغولة بالإلكترونات. يعتبر الفلور (F) أصغر الذرات حجماً، بينما السيزيوم (Cs) أكبر ذرات الجدول الدوري حجماً.',
        contentEn: 'Atomic size (measured in picometers pm) decreases across periods due to stronger effective nuclear charge pulling valence electrons closer, and increases down groups due to the addition of occupied principal energy levels. Fluorine is the smallest atom; Cesium is the largest.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: مقارنة الحجم الذري لعناصر الدورة 3 وعناصر المجموعة 1A',
          titleEn: 'Worked Example 1: Comparing Atomic Radii in Period 3 and Group 1A',
          equation: 'الدورة: 11Na > 12Mg > 13Al > 17Cl | المجموعة: 3Li < 11Na < 19K < 55Cs',
          steps: [
            {
              stepNumber: 1,
              textAr: 'عناصر الدورة 3: الصوديوم 11Na أكبر حجماً من المغنيسيوم 12Mg، والكلور 17Cl هو الأصغر في دورته.',
              textEn: 'In Period 3: 11Na radius exceeds 12Mg and 17Cl is the smallest.',
              noteAr: 'تدرج الدورة'
            },
            {
              stepNumber: 2,
              textAr: 'عناصر المجموعة 1A: يزداد الحجم من الليثيوم 3Li إلى الصوديوم 11Na ثم البوتاسيوم 19K حتى السيزيوم 55Cs.',
              textEn: 'In Group 1A: radius expands down to Cesium (55Cs).',
              noteAr: 'تدرج المجموعة'
            },
            {
              stepNumber: 3,
              textAr: 'الاستنتاج: توجد علاقة عكسية بين العدد الذري والحجم الذري في الدورة، وعلاقة طردية بينهما في المجموعة.',
              textEn: 'Inverse relation in periods; direct linear expansion in groups.',
              noteAr: 'القاعدة العامة'
            }
          ],
          takeawayAr: 'كلما زادت مستويات الطاقة زاد الحجم الذري، وكلما زادت شحنة النواة في نفس المستوى انكمش الحجم الذري.',
          takeawayEn: 'More electron shells increase size; higher effective nuclear charge in the same shell contracts atomic radius.'
        },
        formativeCheck: {
          id: 'fc-sci8-2-1',
          questionAr: 'أكبر عناصر الجدول الدوري الحديث من حيث الحجم الذري هو عنصر:',
          questionEn: 'The element with the largest atomic radius in the Modern Periodic Table is:',
          optionsAr: ['السيزيوم (Cs)', 'الفلور (F)', 'الصوديوم (Na)', 'الهيليوم (He)'],
          optionsEn: ['Cesium (Cs)', 'Fluorine (F)', 'Sodium (Na)', 'Helium (He)'],
          correctIndex: 0,
          explanationAr: 'السيزيوم Cs يقع في أسفل يسار الجدول الدوري (المجموعة 1A) وهو أكبر الذرات حجماً ذرياً.',
          explanationEn: 'Cesium (Cs) is located at the bottom left of the periodic table, possessing the largest atomic radius.',
          hintAr: 'فلز قلوي يقع في أسفل المجموعة 1A.'
        },
        tipsAr: [
          'احفظ: أصغر ذرة = الفلور F (أعلى اليمين) | أكبر ذرة = السيزيوم Cs (أسفل اليسار).',
          'وحدة قياس الحجم الذري هي البيكومتر pm = 1 × 10⁻¹² متر.'
        ],
        tipsEn: [
          'Remember: Smallest atom = Fluorine (top right); Largest atom = Cesium (bottom left).',
          'Atomic radius is quantified in picometers (1 pm = 10⁻¹² m).'
        ]
      },
      {
        titleAr: '2. السالبية الكهربية والمركبات القطبية',
        titleEn: '2. Electronegativity & Polar Covalent Molecules',
        contentAr: 'السالبية الكهربية هي قدرة الذرة في الجزيء على جذب إلكترونات الرابطة التساهمية نحوها. الفلور هو أعلى عناصر الجدول الدوري سالبية كهربية (قيمتها 4). الغازات الخاملة ليس لها قيم سالبية كهربية لأنها لا تدخل في تفاعلات كيميائية في الظروف العادية. المركب القطبي هو مركب تساهمي الفرق في السالبية بين ذراته كبير نسبياً مثل الماء H₂O والنشادر NH₃. قطبية جزيء الماء أقوى من قطبية جزيء النشادر لأن الفرق في السالبية بين الأكسجين والهيدروجين (3.5 - 2.1 = 1.4) أكبر من الفرق بين النيتروجين والهيدروجين (3.0 - 2.1 = 0.9).',
        contentEn: 'Electronegativity is the relative attraction of an atom for shared electrons. Fluorine has the maximum electronegativity (4.0). Noble gases lack electronegativity values. Polar covalent molecules (H2O, NH3) feature significant electronegativity differentials, with water exhibiting greater polarity than ammonia.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: حساب الفرق في السالبية وتفسير قطبية الماء والنشادر',
          titleEn: 'Worked Example 2: Calculating Electronegativity Difference in H2O and NH3',
          equation: 'ΔEN (الماء) = 3.5 (O) - 2.1 (H) = 1.4  |  ΔEN (النشادر) = 3.0 (N) - 2.1 (H) = 0.9',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الماء H₂O: سالبية الأكسجين 3.5 وسالبية الهيدروجين 2.1 -> الفرق = 1.4 (مركب قطبي قوي).',
              textEn: 'Water: O(3.5) - H(2.1) = 1.4 electronegativity gap.',
              noteAr: 'قطبية عالية'
            },
            {
              stepNumber: 2,
              textAr: 'النشادر NH₃: سالبية النيتروجين 3.0 وسالبية الهيدروجين 2.1 -> الفرق = 0.9 (مركب قطبي).',
              textEn: 'Ammonia: N(3.0) - H(2.1) = 0.9 electronegativity gap.',
              noteAr: 'قطبية متوسطة'
            },
            {
              stepNumber: 3,
              textAr: 'المقارنة: قطبية الماء أقوى لأن الفرق في السالبية بين ذرتي الأكسجين والهيدروجين أكبر من النيتروجين والهيدروجين.',
              textEn: 'Water is more polar because the ΔEN of O-H exceeds N-H.',
              noteAr: 'سبب الشذوذ القطبي'
            }
          ],
          takeawayAr: 'يحدد الفرق في السالبية الكهربية نوع الرابطة: مركب أيوني (فرق كبير جداً > 1.7)، تساهمي قطبي (كبير نسبياً)، أو تساهمي غير قطبي.',
          takeawayEn: 'Electronegativity difference determines bond character: ionic (>1.7), polar covalent, or nonpolar covalent.'
        },
        formativeCheck: {
          id: 'fc-sci8-2-2',
          questionAr: 'علل: يعتبر جزيء الماء H2O من المركبات التساهمية القطبية لأن:',
          questionEn: 'Water (H2O) is classified as a polar covalent compound because:',
          optionsAr: [
            'الفرق في السالبية الكهربية بين عنصري الأكسجين والهيدروجين كبير نسبياً',
            'الماء يوصل التيار الكهربائي دائماً',
            'الماء مركب أيوني يتفكك في الزيت',
            'ذرة الهيدروجين أكبر حجماً من الأكسجين'
          ],
          optionsEn: [
            'The electronegativity difference between oxygen and hydrogen is relatively large',
            'Water always conducts electricity',
            'Water is an ionic salt dissolving in oil',
            'Hydrogen atom is larger than oxygen'
          ],
          correctIndex: 0,
          explanationAr: 'المركب القطبي هو مركب تساهمي يكون فيه الفرق في السالبية الكهربية بين عنصريه كبيراً نسبياً.',
          explanationEn: 'Polar compounds are covalent molecules possessing a relatively high electronegativity difference between their bonded atoms.',
          hintAr: 'الفرق في مقدرة جذب الإلكترونات كبير نسبياً.'
        },
        tipsAr: [
          'الغازات الخاملة (المجموعة 18) ليس لها قيم سالبية كهربية لأنها لا تشارك بإلكترونات في الظروف العادية.',
          'المركبات القطبية تذوب فيها المواد الأيونية والقطبية بسهولة كقاعدة (المذيب يذيب شبيهه Like dissolves like).'
        ],
        tipsEn: [
          'Noble gases do not have electronegativity values since they do not form covalent bonds under standard conditions.',
          'Polar solvents readily dissolve ionic and polar solutes ("like dissolves like").'
        ]
      },
      {
        titleAr: '3. الخاصية الفلزية واللافلزية وأشباه الفلزات',
        titleEn: '3. Metallic, Non-metallic & Semimetal (Metalloid) Classes',
        contentAr: '1) الفلزات: تتميز باحتواء مستوى طاقتها الخارجي على أقل من 4 إلكترونات (1 أو 2 أو 3)، وتميل لفقدها أثناء التفاعل الكيميائي لتصل للتركيب الثماني المستقر متحولة إلى أيونات موجبة (Cations). 2) اللافلزات: يحتوي مستواها الخارجي على أكثر من 4 إلكترونات (5 أو 6 أو 7)، وتميل لاكتساب إلكترونات متحولة إلى أيونات سالبة (Anions). 3) أشباه الفلزات (Metalloids): عناصر تجمع في خواصها بين الفلزات واللافلزات مثل السيليكون Si والبورون B والزرنيخ As. في الدورة: تبدأ بفلز قوي ثم تقل الفلزية وتظهر أشباه الفلزات ثم تزداد اللافلزية حتى الهالوجينات (7A) وتختم بغاز خامل.',
        contentEn: 'Metals have 1-3 valence electrons and lose them forming positive cations. Nonmetals have 5-7 valence electrons and gain them forming negative anions. Metalloids (B, Si, Ge, As, Sb, Te) exhibit intermediate properties. Periods begin with strong metals and terminate with active halogens and noble gases.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: تدرج الخواص الفلزية واللافلزية في الدورة الثالثة',
          titleEn: 'Worked Example 3: Period 3 Metal-to-Nonmetal Transition Continuum',
          equation: '11Na (فلز قوي) -> 12Mg (فلز) -> 13Al (فلز ضعيف) -> 14Si (شبه فلز) -> 15P -> 16S -> 17Cl (لافلز قوي)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'بداية الدورة: الصوديوم 11Na فلز قلوي قوي جداً يليه المغنيسيوم 12Mg ثم الألومنيوم 13Al (تقل الفلزية).',
              textEn: 'Period 3 opens with highly reactive alkali metal 11Na.',
              noteAr: 'فلزات'
            },
            {
              stepNumber: 2,
              textAr: 'المنطقة الوسطى: السيليكون 14Si شبه فلز (يستخدم في صناعة الشرائح الإلكترونية).',
              textEn: 'Middle transition: Silicon (14Si) is a semiconductor metalloid.',
              noteAr: 'شبه فلز'
            },
            {
              stepNumber: 3,
              textAr: 'نهاية الدورة: الفوسفور 15P والكبريت 16S لافلزات، حتى نصل لأقوى لافلز في الدورة وهو الكلور 17Cl.',
              textEn: 'Nonmetals escalate in reactivity up to halogen Chlorine (17Cl).',
              noteAr: 'لافلزات نشطة'
            }
          ],
          takeawayAr: 'أقوى الفلزات تقع في أقصى يسار الجدول (المجموعة 1A وأقواها السيزيوم)، وأقوى اللافلزات تقع في أقصى يمين الجدول (المجموعة 7A وأقواها الفلور).',
          takeawayEn: 'Strongest metals occupy Group 1A (Cesium); strongest nonmetals occupy Group 7A (Fluorine).'
        },
        formativeCheck: {
          id: 'fc-sci8-2-3',
          questionAr: 'أي من العناصر التالية يُعد من أشباه الفلزات (Metalloids)؟',
          questionEn: 'Which of the following elements is classified as a metalloid (semimetal)?',
          optionsAr: ['عنصر السيليكون (Si)', 'عنصر الصوديوم (Na)', 'عنصر الكلور (Cl)', 'عنصر الحديد (Fe)'],
          optionsEn: ['Silicon (Si)', 'Sodium (Na)', 'Chlorine (Cl)', 'Iron (Fe)'],
          correctIndex: 0,
          explanationAr: 'السيليكون Si شبه فلز يجمع بين خواص الفلزات واللافلزات ويستخدم كشبه موصل في الرقائق الإلكترونية.',
          explanationEn: 'Silicon is a classic metalloid possessing intermediate semiconductor electrical conductivity.',
          hintAr: 'يستخدم في صناعة الشرائح الإلكترونية والكمبيوتر.'
        },
        tipsAr: [
          'الأيون الموجب يحمل شحنات موجبة مساوية لعدد الإلكترونات المفقودة، ويكون عدد البروتونات فيه أكبر من الإلكترونات.',
          'عناصر أشباه الفلزات يصعب التعرف عليها من توزيعها الإلكتروني لتنوع عدد إلكترونات تكافؤها.'
        ],
        tipsEn: [
          'Cations carry positive charges equal to lost electrons, having more protons than electrons.',
          'Metalloids cannot be easily identified by valence count alone due to varied configurations.'
        ]
      },
      {
        titleAr: '4. متسلسلة النشاط الكيميائي وسلوك الأكاسيد',
        titleEn: '4. Chemical Activity Series & Basic vs Acidic Oxides',
        contentAr: '1) متسلسلة النشاط الكيميائي: ترتيب الفلزات تنازلياً حسب نشاطها: البوتاسيوم والصوديوم (يتفاعلان لحظياً مع الماء ويتصاعد غاز H₂ يشتعل بفرقعة) -> الكالسيوم والمغنيسيوم (يتفاعلان ببطء مع الماء البارد) -> الخارصين والحديد (يتفاعلان مع بخار الماء الساخن في درجات الحرارة العالية) -> النحاس والفضة (لا يتفاعلان مع الماء). 2) الأكاسيد القاعدية: أكاسيد فلزية يذوب بعضها في الماء مكوناً قلويات (MgO + H₂O -> Mg(OH)₂). 3) الأكاسيد الحامضية: أكاسيد لافلزية تذوب في الماء مكونة أحماضاً (CO₂ + H₂O -> H₂CO₃).',
        contentEn: 'The Chemical Activity Series ranks metals: K, Na (react instantly with water producing popping H2) -> Ca, Mg (slow cold water reaction) -> Zn, Fe (react with hot steam) -> Cu, Ag (no reaction). Basic metal oxides form alkaline solutions turning litmus blue; Acidic nonmetal oxides form acids turning litmus red.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: التمييز العملي بين أكسيد المغنيسيوم وثاني أكسيد الكربون بصبغة عباد الشمس',
          titleEn: 'Worked Example 4: Testing Basic and Acidic Oxides with Litmus Indicator',
          equation: 'MgO + H2O -> Mg(OH)2 (أزرق)  |  CO2 + H2O -> H2CO3 (أحمر)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'حرق شريط مغنيسيوم وتذويب المسحوق الأبيض MgO في الماء -> يتكون محلول هيدروكسيد المغنيسيوم القلوي.',
              textEn: 'Dissolve magnesium oxide powder in water forming Mg(OH)2.',
              noteAr: 'محلول قلوي'
            },
            {
              stepNumber: 2,
              textAr: 'إضافة قطرات من صبغة عباد الشمس البنفسجية لمحلول Mg(OH)₂ -> يتلون المحلول باللون الأزرق (أكسيد قاعدي).',
              textEn: 'Add litmus drops to Mg(OH)2 turning solution blue.',
              noteAr: 'تأثير قاعدي'
            },
            {
              stepNumber: 3,
              textAr: 'إذابة غاز CO₂ الناتج من حرق الفحم في الماء -> يتكون حمض الكربونيك H₂CO₃ ويتلون عباد الشمس بالأحمر (أكسيد حامضي).',
              textEn: 'Dissolve CO2 in water forming carbonic acid H2CO3 turning litmus red.',
              noteAr: 'تأثير حمضي'
            }
          ],
          takeawayAr: 'كل القلويات قواعد، ولكن ليست كل القواعد قلويات (لأن القلويات هي فقط القواعد الذائبة في الماء).',
          takeawayEn: 'All alkalis are bases, but not all bases are alkalis (alkalis are water-soluble bases only).'
        },
        formativeCheck: {
          id: 'fc-sci8-2-4',
          questionAr: 'عند إذابة أكسيد المغنيسيوم (MgO) في الماء وإضافة صبغة عباد الشمس، يتلون المحلول باللون:',
          questionEn: 'When dissolving magnesium oxide (MgO) in water and adding litmus indicator, the solution turns:',
          optionsAr: ['اللون الأزرق (محلول قلوي)', 'اللون الأحمر (محلول حمضي)', 'اللون الأصفر', 'يبقى عديم اللون'],
          optionsEn: ['Blue (alkaline solution)', 'Red (acidic solution)', 'Yellow', 'Remains colorless'],
          correctIndex: 0,
          explanationAr: 'MgO أكسيد فلزي قاعدي يذوب في الماء معطياً هيدروكسيد المغنيسيوم القلوي الذي يزرق صبغة عباد الشمس.',
          explanationEn: 'MgO is a basic metal oxide yielding alkaline Mg(OH)2 which turns litmus indicator blue.',
          hintAr: 'الأكاسيد القاعدية والقلويات تزرق عباد الشمس.'
        },
        tipsAr: [
          'الفلزات مثل النحاس والفضة لا تتفاعل مع الماء أو الأحماض المخففة لوقوعها بعد الهيدروجين في متسلسلة النشاط.',
          'الغاز المتصاعد عند تفاعل الفلزات النشطة مع الأحماض هو غاز الهيدروجين H₂ الذي يشتعل بفرقعة عند تقريب شظية مشتعلة.'
        ],
        tipsEn: [
          'Metals like copper and silver lie below hydrogen in the activity series and do not react with dilute acids.',
          'Hydrogen gas (H2) evolved in active metal reactions burns with a characteristic pop sound.'
        ]
      }
    ],

    conceptMapAr: [
      'الحجم الذري: يقل في الدورة (زيادة الجذب) | يزداد في المجموعة (زيادة المستويات) | الأكبر Cs والأصغر F',
      'السالبية الكهربية: مقدرة الذرة على جذب إلكترونات الرابطة | الأعلى F (4.0) | المركبات القطبية H₂O و NH₃',
      'تصنيف العناصر: فلزات (أيونات موجبة) + لافلزات (أيونات سالبة) + أشباه فلزات (Si, Ge, As)',
      'تفاعلات الأكاسيد: أكاسيد قاعدية (تزرق عباد الشمس Mg(OH)₂) + أكاسيد حامضية (تحمر عباد الشمس H₂CO₃)'
    ],
    conceptMapEn: [
      'Atomic Size: Decreases across periods, increases down groups (Largest Cs, Smallest F)',
      'Electronegativity: Bond electron attraction power (Max F=4.0; Polar molecules H2O, NH3)',
      'Element Classes: Metals (cations), Nonmetals (anions), Metalloids (Si, Ge, As)',
      'Oxide Behavior: Basic metal oxides (turns litmus blue) vs Acidic nonmetal oxides (turns litmus red)'
    ],

    textbookExercises: [
      {
        id: 'ex-sci8-2-1',
        questionAr: 'وضح بالمعادلات الكيميائية الرمزية الموزونة: 1) تفاعل المغنيسيوم مع حمض الهيدروكلوريك المخفف. 2) ذوبان ثاني أكسيد الكربون في الماء.',
        questionEn: 'Write balanced chemical equations for: 1) Magnesium with dilute HCl. 2) Dissolving CO2 in water.',
        solutionStepsAr: [
          '1) تفاعل المغنيسيوم مع حمض الهيدروكلوريك المخفف: Mg + 2HCl (dil) -> MgCl₂ + H₂↑ (يتصاعد غاز الهيدروجين).',
          '2) ذوبان غاز ثاني أكسيد الكربون في الماء: CO₂ + H₂O -> H₂CO₃ (يتكون حمض الكربونيك).'
        ],
        solutionStepsEn: [
          '1) Magnesium with dilute acid: Mg + 2HCl (dil) -> MgCl2 + H2^.',
          '2) Carbon dioxide with water: CO2 + H2O -> H2CO3 (carbonic acid).'
        ],
        answerAr: '1) Mg + 2HCl -> MgCl₂ + H₂↑ • 2) CO₂ + H₂O -> H₂CO₃',
        answerEn: '1) Mg + 2HCl -> MgCl2 + H2^ • 2) CO2 + H2O -> H2CO3'
      }
    ],

    assessment: {
      id: 'quiz-sci8-2',
      lectureId: 'sci8-2',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 2: تدرج خواص العناصر والسالبية والنشاط الكيميائي',
      titleEn: 'Mastery Assessment 2: Periodic Trends, Electronegativity & Chemical Activity',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci8-2-1',
          textAr: 'يقل الحجم الذري لعناصر الدورة الواحدة في الجدول الدوري بزيادة العدد الذري نتيجة:',
          textEn: 'Atomic size decreases across a single period with increasing atomic number due to:',
          optionsAr: [
            'زيادة قوة جذب النواة الموجبة لإلكترونات مستوى الطاقة الخارجي',
            'زيادة عدد مستويات الطاقة المشغولة بالإلكترونات',
            'تناقص عدد البروتونات في النواة',
            'تحول العناصر إلى غازات خاملة'
          ],
          optionsEn: [
            'Increasing attraction of the positive nucleus for valence shell electrons',
            'Increasing number of occupied energy levels',
            'Decreasing proton count in nucleus',
            'Conversion into noble gases'
          ],
          correctIndex: 0,
          conceptTestedAr: 'سبب تناقص الحجم الذري في الدورة الواحدة',
          conceptTestedEn: 'Reason for atomic radius contraction across periods',
          explanationAr: 'في الدورة الواحدة تزداد شحنة النواة الموجبة الفعالة مع ثبات عدد المستويات مما يزيد من قوة جذب الإلكترونات فينكمش الحجم الذري.',
          explanationEn: 'Higher effective nuclear charge in the same shell pulls valence electrons inward, reducing atomic radius.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-2-2',
          textAr: 'أقوى العناصر اللافلزية نشاطاً وسالبية كهربية في الجدول الدوري الحديث هو:',
          textEn: 'The most active nonmetal and most electronegative element in the periodic table is:',
          optionsAr: ['الفلور (F)', 'السيزيوم (Cs)', 'الكلور (Cl)', 'الأكسجين (O)'],
          optionsEn: ['Fluorine (F)', 'Cesium (Cs)', 'Chlorine (Cl)', 'Oxygen (O)'],
          correctIndex: 0,
          conceptTestedAr: 'الفلور كأعلى العناصر سالبية ونشاطاً لا فلزياً',
          conceptTestedEn: 'Fluorine as highest electronegative element',
          explanationAr: 'الفلور F هو أعلى عناصر الجدول الدوري سالبية كهربية (قيمتها 4) وأصغرها حجماً وأقواها لافلزية.',
          explanationEn: 'Fluorine (F) has the highest electronegativity (4.0), smallest atomic radius, and strongest nonmetallic character.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-2-3',
          textAr: 'جميع المركبات التالية تُعد من الأكاسيد القاعدية ما عدا:',
          textEn: 'All of the following are basic metal oxides EXCEPT:',
          optionsAr: ['ثاني أكسيد الكربون (CO₂)', 'أكسيد المغنيسيوم (MgO)', 'أكسيد الصوديوم (Na₂O)', 'أكسيد الكالسيوم (CaO)'],
          optionsEn: ['Carbon dioxide (CO₂)', 'Magnesium oxide (MgO)', 'Sodium oxide (Na₂O)', 'Calcium oxide (CaO)'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الأكاسيد القاعدية والحامضية',
          conceptTestedEn: 'Differentiating basic metal oxides from acidic nonmetal oxides',
          explanationAr: 'CO₂ أكسيد لافلز حامضي يذوب في الماء معطياً حمض الكربونيك، بينما البقية أكاسيد فلزية قاعدية.',
          explanationEn: 'CO2 is an acidic nonmetal oxide forming carbonic acid, unlike basic metal oxides.',
          difficulty: 'medium'
        },
        {
          id: 'q-sci8-2-4',
          textAr: 'أي من الفلزات التالية يتفاعل لحظياً وبشدة مع الماء البارد ويتصاعد غاز الهيدروجين الذي يشتعل بفرقعة؟',
          textEn: 'Which metal reacts instantly and vigorously with cold water evolving popping hydrogen gas?',
          optionsAr: ['البوتاسيوم (K)', 'الحديد (Fe)', 'النحاس (Cu)', 'الفضة (Ag)'],
          optionsEn: ['Potassium (K)', 'Iron (Fe)', 'Copper (Cu)', 'Silver (Ag)'],
          correctIndex: 0,
          conceptTestedAr: 'تفاعل فلزات قمة متسلسلة النشاط مع الماء',
          conceptTestedEn: 'Alkali metal instantaneous water reactivity',
          explanationAr: 'البوتاسيوم K والصوديوم Na في قمة متسلسلة النشاط الكيميائي ويتفاعلان لحظياً مع الماء مع تصاعد H₂ واشتعال بفرقعة.',
          explanationEn: 'Potassium and Sodium top the chemical activity series and react violently with cold water.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-2-5',
          textAr: 'قطبية جزيء الماء (H₂O) أقوى وأعلى من قطبية جزيء النشادر (NH₃) لأن:',
          textEn: 'The polarity of water (H2O) is stronger than ammonia (NH3) because:',
          optionsAr: [
            'الفرق في السالبية الكهربية بين الأكسجين والهيدروجين أكبر من الفرق بين النيتروجين والهيدروجين',
            'الماء سائل والنشادر غاز',
            'الماء يحتوي على ذرتي هيدروجين والنشادر 3 ذرات',
            'سالبية النيتروجين أعلى من الأكسجين'
          ],
          optionsEn: [
            'Electronegativity difference between O and H is greater than between N and H',
            'Water is liquid while ammonia is gas',
            'Water has 2 hydrogens while ammonia has 3',
            'Nitrogen electronegativity exceeds oxygen'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تفسير ارتفاع قطبية الماء عن النشادر',
          conceptTestedEn: 'Explaining higher polarity of water compared to ammonia',
          explanationAr: 'الفرق في السالبية بين O و H في الماء هو (1.4)، بينما بين N و H في النشادر هو (0.9)، لذا فالماء أعلى قطبية.',
          explanationEn: 'The electronegativity difference in O-H (1.4) exceeds that of N-H (0.9), giving water greater molecular dipole polarity.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: MAIN GROUPS & WATER ANOMALIES ──
  {
    id: 'sci8-3',
    order: 3,
    titleAr: 'المحاضرة 3: المجموعات الرئيسية (الأقلاء والهالوجينات) والخواص الشاذة للماء',
    titleEn: 'Lecture 3: Main Groups (Alkali Metals, Halogens) & Water Properties',
    subtitleAr: 'فلزات الأقلاء 1A، الهالوجينات 7A، شذوذ خواص الماء، الرابطة الهيدروجينية، والتحليل الكهربي للماء بفولتمتر هوفمان',
    subtitleEn: 'Alkali metals Group 1A, Halogens Group 7A, hydrogen bonding, anomalous water density/boiling points, Hofmann voltameter electrolysis & water pollution.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - العلوم والساينس',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - General Science & Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Science Curriculum',
    unitTitleAr: 'الوحدة الأولى: دورية العناصر وخواصها (Periodic Table & Element Properties)',
    unitTitleEn: 'Unit 1: Periodicity & Properties of Elements',
    lessonNumberAr: 'الدرس 3: المجموعات الرئيسية وخواص الماء والتحليل الكهربي',
    lessonNumberEn: 'Lesson 3: Alkali Metals, Halogens & Water Properties',

    warmupHookAr: 'الماء هو سر الحياة على كوكب الأرض، لكن هل تعلم أن له خواص فيزيائية وكيميائية شاذة تخالف جميع سوائل الكون؟ لماذا يطفو الثلج فوق الماء لحماية الكائنات البحرية من التجمد في القطبين؟ وكيف يمكننا تفكيك الماء إلى غازي الهيدروجين والأكسجين باستخدام الكهرباء؟ تعال نكتشف أسرار الأقلاء والهالوجينات والماء العجيب!',
    warmupHookEn: 'Water exhibits extraordinary anomalies essential for planetary life. Discover hydrogen bonding, why ice floats to sustain aquatic life, and how Hofmann voltameter splits water into hydrogen and oxygen!',

    learningOutcomesAr: [
      'أن يصف الخواص الفيزيائية والكيميائية لفلزات الأقلاء (مجموعة 1A: Li, Na, K, Rb, Cs) وتفاعلها مع الماء',
      'أن يوضح الخواص العامة للهالوجينات (مجموعة 7A: F, Cl, Br, I) وتفاعلات الإحلال في محاليل أملاحها',
      'أن يفسر شذوذ الخواص الفيزيائية للماء (ارتفاع درجتي الغليان والتجمد، وانخفاض كثافته عند التجمد) بسبب الروابط الهيدروجينية',
      'أن يشرح تجربة التحليل الكهربي للماء باستخدام جهاز فولتمتر هوفمان وحساب حجوم الغازات المتصاعدة عند المهبط والمصعد',
      'أن يحدد أنواع ملوثات المياه (بيولوجي، كيميائي، حراري، إشعاعي) وطرق الحماية والوقاية منها'
    ],
    learningOutcomesEn: [
      'Characterize Group 1A Alkali Metals (Li, Na, K, Rb, Cs): physical traits, storage under kerosene, and violent water reactions',
      'Examine Group 7A Halogens (F, Cl, Br, I): diatomic nature, salt formation, and displacement reactions',
      'Explain anomalous water properties (elevated boiling/freezing points, density decrease upon freezing) via hydrogen bonds',
      'Analyze water electrolysis in a Hofmann voltameter (2:1 volume ratio of hydrogen cathode to oxygen anode)',
      'Classify water pollutants (biological, chemical, thermal, radioactive) and environmental protection measures'
    ],

    vocabulary: [
      {
        termAr: 'فلزات الأقلاء (Alkali Metals)',
        termEn: 'Alkali Metals',
        definitionAr: 'عناصر المجموعة 1A في أقصى يسار الجدول الدوري، وهي فلزات أحادية التكافؤ نشطة جداً تتفاعل مع الماء مكونة محاليل قلوية.',
        definitionEn: 'Group 1A monovalent active metals reacting vigorously with water to form alkaline hydroxide solutions.'
      },
      {
        termAr: 'الهالوجينات (Halogens)',
        termEn: 'Halogens',
        definitionAr: 'عناصر المجموعة 7A في الفئة p، وهي لافلزات أحادية التكافؤ نشطة تتحد مع الفلزات مكونة أملاحاً (مكونات الأملاح).',
        definitionEn: 'Group 7A active nonmetals ("salt-formers") combining with metals to produce halide salts.'
      },
      {
        termAr: 'الرابطة الهيدروجينية (Hydrogen Bond)',
        termEn: 'Hydrogen Bond',
        definitionAr: 'تجاذب كهروستاتيكي ضعيف ينشأ بين ذرة هيدروجين مرتبطة بذرة ذات سالبية كهربية عالية (كالأكسجين) في جزيء مجاور.',
        definitionEn: 'A weak electrostatic attraction between a hydrogen atom covalently bonded to an electronegative atom and a nearby electronegative atom.'
      },
      {
        termAr: 'فولتمتر هوفمان (Hofmann Voltameter)',
        termEn: 'Hofmann Voltameter',
        definitionAr: 'جهاز معملي يُستخدم في التحليل الكهربي للماء المحمض إلى غازي الهيدروجين (عند المهبط) والأكسجين (عند المصعد).',
        definitionEn: 'Laboratory apparatus used for the electrolysis of acidified water into hydrogen and oxygen gases.'
      }
    ],

    keyConceptsAr: [
      'فلزات الأقلاء 1A: أحادية التكافؤ، تفقد إلكتروناً واحداً، تزداد نشاطاً من أعلى لأسفل (السيزيوم أنشطها)، تحفظ تحت الكيروسين لمنع تفاعلها مع رطوبة الهواء، وتتفاعل مع الماء: 2Na + 2H₂O -> 2NaOH + H₂↑',
      'الهالوجينات 7A: لافلزات أحادية التكافؤ، تكتسب إلكتروناً، جزيئاتها ثنائية الذرة (F₂, Cl₂, Br₂, I₂)، يحل العنصر الأنشط محل الذي يليه في محاليل أملاحه: Cl₂ + 2KBr -> 2KCl + Br₂',
      'شذوذ خواص الماء: 1) ارتفاع درجتي الغليان (100°C) والتجمد (0°C) لوجود الروابط الهيدروجينية. 2) انخفاض كثافة الماء عند التجمد (أقل من 4°C تتجمع الجزيئات بروابط هيدروجينية مكونة بلورات ثلج سداسية الشكل كبيرة الحجم بينها فراغات فيطفو الثلج)',
      'التحليل الكهربي للماء: 2H₂O -> 2H₂ (عند المهبط السالب Cathode بنسبة 2 حجم) + O₂ (عند المصعد الموجب Anode بنسبة 1 حجم)',
      'تلوث المياه: بيولوجي (اختلاط فضلات الإنسان بالماء يسبب البلهارسيا والتيفود) | كيميائي (مخلفات المصانع كالرصاص والزئبق والزرنيخ) | حراري (تبريد المفاعلات) | إشعاعي (النفايات النووية)'
    ],
    keyConceptsEn: [
      'Alkali Metals (1A): Monovalent, stored under kerosene, reactivity increases down to Cesium: 2Na + 2H2O -> 2NaOH + H2^',
      'Halogens (7A): Monovalent diatomic nonmetals forming salts; more active halogen displaces the lower: Cl2 + 2KBr -> 2KCl + Br2',
      'Water Anomalies: High boiling (100°C) & freezing (0°C) points; Density decreases below 4°C as open hexagonal ice crystals form with empty spaces, causing ice to float',
      'Water Electrolysis: 2H2O -> 2H2 (Cathode -, 2 volumes) + O2 (Anode +, 1 volume)',
      'Water Pollution Types: Biological (pathogens: Typhoid, Bilharzia), Chemical (Lead, Mercury, Arsenic toxicity), Thermal (heat discharge), and Radioactive'
    ],
    summaryAr: 'دراسة متكاملة لمجموعتي الأقلاء والهالوجينات، والتفسير الكيميائي لشذوذ خواص الماء بسبب الروابط الهيدروجينية، وتجربة فولتمتر هوفمان وحساب حجوم الغازات ومخاطر تلوث المياه.',
    summaryEn: 'Complete analysis of Group 1A alkali metals and Group 7A halogens, hydrogen bonding origins of water anomalies, Hofmann voltameter gas stoichiometry, and aquatic pollution toxicology.',

    sections: [
      {
        titleAr: '1. مجموعة فلزات الأقلاء (مجموعة 1A)',
        titleEn: '1. Group 1A: The Alkali Metals',
        contentAr: 'تقع فلزات الأقلاء في أقصى يسار الجدول الدوري (المجموعة 1A في الفئة s) وتضم: الليثيوم Li، الصوديوم Na، البوتاسيوم K، الروبيديوم Rb، والسيزيوم Cs. خواصها: 1) فلزات أحادية التكافؤ (Monovalent) لاحتواء مستواها الخارجي على إلكترون واحد تفقده مكونة أيونات موجبة (+1). 2) جيدة التوصيل للحرارة والكهرباء ومنخفضة الكثافة (الليثيوم والصوديوم والبوتاسيوم تطفو فوق الماء). 3) نشطة كيميائياً جداً وتزداد نشاطاً من أعلى لأسفل بزيادة الحجم الذري (السيزيوم أنشطها)، لذا تحفظ تحت سطح الكيروسين أو زيت البرافين لمنع تفاعلها مع أكسجين وبخار ماء الهواء الجوي. 4) سُميت بالأقلاء لأنها تتفاعل بشدة مع الماء مكونة محاليل قلوية: 2Na + 2H₂O -> 2NaOH + H₂↑.',
        contentEn: 'Group 1A Alkali Metals (Li, Na, K, Rb, Cs) reside in the s-block. They are monovalent metals with 1 valence electron, highly reactive, low density, and stored under kerosene to prevent oxidation. Reacting vigorously with water, they produce alkaline hydroxides and hydrogen: 2Na + 2H2O -> 2NaOH + H2.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: تفاعل الصوديوم والبوتاسيوم مع الماء',
          titleEn: 'Worked Example 1: Comparing Sodium and Potassium Water Reactivity',
          equation: '2Na + 2H2O -> 2NaOH + H2^ (اشتعال بفرقعة) | 2K + 2H2O -> 2KOH + H2^ (أشد عنفاً)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'عند وضع قطعة صوديوم صغيرة في حوض به ماء: تطفو وتتحرك بسرعة وتتفاعل منتجة هيدروكسيد الصوديوم القلوي وغاز الهيدروجين.',
              textEn: 'Sodium floats and reacts vigorously producing NaOH and H2.',
              noteAr: 'تفاعل الصوديوم'
            },
            {
              stepNumber: 2,
              textAr: 'غاز الهيدروجين المتصاعد يشتعل فوراً بفرقعة بسبب حرارة التفاعل الطاردة للحرارة.',
              textEn: 'Evolved H2 gas ignites with a characteristic pop sound.',
              noteAr: 'تصاعد واشتعال H2'
            },
            {
              stepNumber: 3,
              textAr: 'تفاعل البوتاسيوم K مع الماء أكثر عنفاً وشدة من الصوديوم لأن البوتاسيوم أكبر حجماً ذرياً وأسهل في فقد إلكترون التكافؤ.',
              textEn: 'Potassium reacts even more violently due to its larger atomic size.',
              noteAr: 'مقارنة النشاط'
            }
          ],
          takeawayAr: 'لا تطفأ حرائق الصوديوم بالماء لأن الصوديوم يتفاعل مع الماء بشدة ويتصاعد غاز الهيدروجين الذي يزيد من شدة الحريق بالفرقعة.',
          takeawayEn: 'Sodium fires must never be extinguished with water because water reacts to generate flammable hydrogen gas.'
        },
        formativeCheck: {
          id: 'fc-sci8-3-1',
          questionAr: 'تحفظ فلزات الصوديوم والبوتاسيوم في المعمل تحت سطح الكيروسين أو البرافين من أجل:',
          questionEn: 'Sodium and potassium metals are preserved under kerosene in laboratories in order to:',
          optionsAr: [
            'منع تفاعلها مع أكسجين وبخار ماء الهواء الرطب لشدة نشاطها الكيميائي',
            'زيادة لمعانها وبريقها المعدني',
            'تبريدها وخفض درجة حرارتها',
            'تحويلها إلى مواد مغناطيسية'
          ],
          optionsEn: [
            'Prevent their reaction with atmospheric oxygen and moisture due to high reactivity',
            'Enhance their metallic luster',
            'Cool them down',
            'Make them magnetic'
          ],
          correctIndex: 0,
          explanationAr: 'تحفظ تحت الكيروسين لعزلها تماماً عن الهواء الجوي الرطب نظراً لسرعة ونشاط تفاعلها الكيميائي.',
          explanationEn: 'Submerging alkali metals under kerosene shields them from reactive atmospheric moisture and oxygen.',
          hintAr: 'لمنع تفاعلها مع رطوبة الهواء.'
        },
        tipsAr: [
          'أنشط فلز في الجدول الدوري الحديث بأكمله هو عنصر السيزيوم 55Cs لكبر حجمه الذري وسهولة فقد إلكترونه.',
          'الليثيوم يحفظ تحت زيت البرافين ولا يحفظ في الكيروسين لأنه يطفو فوق سطح الكيروسين لقلة كثافته.'
        ],
        tipsEn: [
          'Cesium (55Cs) is the most reactive metal in the entire periodic table due to its maximum atomic radius.',
          'Lithium is stored in paraffin oil rather than kerosene because its ultra-low density causes it to float on kerosene.'
        ]
      },
      {
        titleAr: '2. مجموعة الهالوجينات (مجموعة 7A)',
        titleEn: '2. Group 7A: The Halogens',
        contentAr: 'تقع الهالوجينات في يمين الجدول الدوري (المجموعة 7A أو 17 في الفئة p) وتضم: الفلور F (غاز)، الكلور Cl (غاز)، البروم Br (سائل أحمر متطاير)، اليود I (صلب بنفسجي)، والأستاتين At (يحضر صناعياً). خواصها: 1) لافلزات أحادية التكافؤ تكتسب إلكتروناً واحداً متحولة إلى أيونات سالبة (-1). 2) جزيئاتها ثنائية الذرة (Diatomic: F₂, Cl₂, Br₂, I₂). 3) سُميت بالهالوجينات (مكونات الأملاح) لأنها تتفاعل مع الفلزات مكونة أملاحاً: 2K + Br₂ -> 2KBr (بروميد البوتاسيوم). 4) نشطة كيميائياً ويحل العنصر الأنشط محل العنصر الذي يليه في محاليل أملاحه: Cl₂ + 2KBr -> 2KCl + Br₂ ، و Br₂ + 2KI -> 2KBr + I₂ (بينما البروم لا يستطيع أن يحل محل الكلور).',
        contentEn: 'Group 7A Halogens (F2 gas, Cl2 gas, Br2 liquid, I2 solid) are diatomic monovalent nonmetals. Known as "salt-formers", they react with metals to form halide salts (2K + Br2 -> 2KBr). In displacement reactions, a more active halogen displaces a lower one: Cl2 + 2KBr -> 2KCl + Br2.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: تفاعلات الإحلال بين الهالوجينات ومحاليل أملاحها',
          titleEn: 'Worked Example 2: Halogen Displacement Reactions in Halide Salts',
          equation: 'Cl2 + 2KBr -> 2KCl + Br2 (يحل الكلور محل البروم لأن الكلور يسبقه في المجموعة)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'ترتيب النشاط في مجموعة الهالوجينات: الفلور F أنشط من الكلور Cl أنشط من البروم Br أنشط من اليود I.',
              textEn: 'Activity hierarchy: F > Cl > Br > I.',
              noteAr: 'ترتيب النشاط'
            },
            {
              stepNumber: 2,
              textAr: 'عند إمرار غاز الكلور في محلول بروميد البوتاسيوم KBr: Cl₂ + 2KBr -> 2KCl + Br₂ (يتحرر البروم ذو اللون البني المحمر).',
              textEn: 'Chlorine displaces bromine: Cl2 + 2KBr -> 2KCl + Br2.',
              noteAr: 'إحلال الكلور'
            },
            {
              stepNumber: 3,
              textAr: 'عند إضافة البروم Br₂ إلى محلول يوديد البوتاسيوم KI: Br₂ + 2KI -> 2KBr + I₂ (يحل البروم محل اليود).',
              textEn: 'Bromine displaces iodine: Br2 + 2KI -> 2KBr + I2.',
              noteAr: 'إحلال البروم'
            }
          ],
          takeawayAr: 'الفلور لا يستخدم في تفاعلات الإحلال في المحاليل المائية لأنه يتفاعل مع ماء المحلول نفسه بشدة.',
          takeawayEn: 'Fluorine is excluded from aqueous displacement because it vigorously oxidizes water itself.'
        },
        formativeCheck: {
          id: 'fc-sci8-3-2',
          questionAr: 'عند إمرار غاز الكلور (Cl₂) في محلول بروميد البوتاسيوم (KBr)، يحدث التفاعل التالي:',
          questionEn: 'Passing chlorine gas (Cl2) into potassium bromide solution (KBr) results in:',
          optionsAr: [
            'يحل الكلور محل البروم ويتكون كلوريد البوتاسيوم (KCl) ويتحرر البروم (Br₂)',
            'لا يحدث تفاعل لأن البروم أنشط من الكلور',
            'يتصاعد غاز الهيدروجين فقط',
            'يتكون راسب أبيض من البوتاسيوم النقي'
          ],
          optionsEn: [
            'Chlorine displaces bromine forming KCl and releasing Br2',
            'No reaction occurs because bromine is more active',
            'Hydrogen gas is evolved exclusively',
            'White precipitate of pure potassium forms'
          ],
          correctIndex: 0,
          explanationAr: 'الكلور يسبق البروم في مجموعة الهالوجينات فهو أنشط منه ويحل محله في محاليل أملاحه.',
          explanationEn: 'Chlorine precedes bromine in Group 7A, being more electronegative and displacing bromide ions.',
          hintAr: 'الكلور أنشط من البروم.'
        },
        tipsAr: [
          'الهالوجين السائل الوحيد في الجدول الدوري هو البروم (Br₂).',
          'الهالوجينات توجد في الطبيعة على هيئة جزيئات ثنائية الذرة ولا توجد في صورة ذرات منفردة لشدة نشاطها.'
        ],
        tipsEn: [
          'Bromine (Br2) is the only liquid nonmetal halogen element in the periodic table.',
          'Halogens exist in nature strictly as diatomic molecules (X2) due to high chemical reactivity.'
        ]
      },
      {
        titleAr: '3. الروابط الهيدروجينية والخواص الشاذة للماء',
        titleEn: '3. Hydrogen Bonding & Water Anomalies (Density & Boiling)',
        contentAr: 'يتكون جزيء الماء من ذرة أكسجين مرتبطة بذرتي هيدروجين برابطتين تساهميتين أحاديتين الزاوية بينهما 104.5°. لكبر سالبية الأكسجين (3.5) مقارنة بالهيدروجين (2.1)، تنشأ روابط هيدروجينية (Hydrogen Bonds) بين جزيئات الماء وهي المسؤولة عن شذوذ خواصه: 1) ارتفاع درجتي الغليان (100°C) والتجمد (0°C) لاستهلاك طاقة حرارية في تكسير الروابط الهيدروجينية. 2) انخفاض كثافة الماء عند التجمد: عندما تقل حرارة الماء عن 4°C تتجمع الجزيئات بروابط هيدروجينية مكونة بلورات ثلج سداسية الشكل كبيرة الحجم بينها فراغات هوائية فيزداد الحجم وتقل الكثافة، لذلك يطفو الجليد فوق سطح البحار القطبية مما يحمي الحياة المائية في الأعماق من التجمد.',
        contentEn: 'A water molecule contains two polar covalent O-H bonds at a 104.5° angle. High oxygen electronegativity creates intermolecular Hydrogen Bonds causing anomalous properties: elevated boiling (100°C) / freezing (0°C) points, and decreased density below 4°C as open hexagonal ice crystals form, allowing ice to float and sustain aquatic life.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: تفسير طفو الجليد وبقاء الكائنات البحرية في القطبين',
          titleEn: 'Worked Example 3: Why Ice Floats & Preserves Polar Aquatic Ecosystems',
          equation: 'T < 4°C  -->  تكون بلورات سداسية بفراغات  -->  زيادة الحجم وانخفاض الكثافة  -->  طفو الجليد',
          steps: [
            {
              stepNumber: 1,
              textAr: 'عند انخفاض درجة حرارة الماء عن 4 درجات مئوية: تتجمع جزيئات الماء بالروابط الهيدروجينية.',
              textEn: 'Below 4°C, hydrogen bonds organize water molecules.',
              noteAr: 'آلية التبريد'
            },
            {
              stepNumber: 2,
              textAr: 'تتشكل بلورات ثلج سداسية الشكل تحتوي على الكثير من الفراغات، مما يؤدي إلى زيادة حجم الثلج وانخفاض كثافته عن كثافة الماء السائل.',
              textEn: 'Molecules lock into open hexagonal lattice with voids, lowering density.',
              noteAr: 'تشكل البلورات'
            },
            {
              stepNumber: 3,
              textAr: 'النتيجة: يطفو الجليد كطبقة عازلة على السطح ويبقى الماء في القاع سائلاً عند 4°C فتستمر حياة الأسماك والكائنات المائية.',
              textEn: 'Surface ice insulates deep water at 4°C, preserving aquatic life.',
              noteAr: 'حفظ الحياة البحرية'
            }
          ],
          takeawayAr: 'الرابطة التساهمية داخل جزيء الماء أقوى بكثير من الرابطة الهيدروجينية بين الجزيئات، لكن الرابطة الهيدروجينية هي المسؤولة عن الشذوذ الفيزيائي.',
          takeawayEn: 'Intramolecular covalent O-H bonds are stronger than intermolecular hydrogen bonds, but hydrogen bonds dictate physical anomalies.'
        },
        formativeCheck: {
          id: 'fc-sci8-3-3',
          questionAr: 'يرجع سبب شذوذ خواص الماء مثل ارتفاع درجة غليانه وانخفاض كثافته عند التجمد إلى وجود:',
          questionEn: 'Anomalous properties of water such as high boiling point and low ice density are caused by:',
          optionsAr: ['الروابط الهيدروجينية بين جزيئاته', 'الروابط الأيونية داخل جزيئاته', 'الروابط الفلزية', 'الغازات الذائبة فيه'],
          optionsEn: ['Hydrogen bonds between its molecules', 'Ionic bonds inside molecules', 'Metallic bonding', 'Dissolved gases'],
          correctIndex: 0,
          explanationAr: 'الروابط الهيدروجينية بين جزيئات الماء هي المسؤولة عن ارتفاع درجة غليانه وانخفاض كثافته عند التحول لجليد.',
          explanationEn: 'Intermolecular hydrogen bonding between water molecules accounts for elevated thermal constants and ice expansion.',
          hintAr: 'الروابط بين ذرة الهيدروجين والأكسجين في الجزيئات المجاورة.'
        },
        tipsAr: [
          'الزاوية بين الرابطتين التساهميتين في جزيء الماء تساوي 104.5 درجة.',
          'الماء النقي متعادل التأثير على ورقتي عباد الشمس (لا يغير لونهما) لتساوي تركيز أيونات H⁺ الموجبة مع OH⁻ السالبة.'
        ],
        tipsEn: [
          'The bond angle between the two single covalent O-H bonds in water is exactly 104.5°.',
          'Pure distilled water is neutral to litmus paper because [H+] concentration equals [OH-] concentration.'
        ]
      },
      {
        titleAr: '4. التحليل الكهربي للماء (فولتمتر هوفمان) وتلوث المياه',
        titleEn: '4. Hofmann Voltameter Electrolysis & Water Pollution',
        contentAr: '1) التحليل الكهربي للماء: الماء النقي رديء التوصيل للكهرباء، لذا يضاف قليل من حمض الكبريتيك المخفف أو كربونات الصوديوم لجعله موصلاً. باستخدام جهاز (فولتمتر هوفمان): يتفكك الماء كهربياً: 2H₂O -> 2H₂↑ (يتصاعد عند المهبط السالب Cathode بحجم ضعف الأكسجين) + O₂↑ (يتصاعد عند المصعد الموجب Anode بحجم نصف الهيدروجين). نكشف عن الهيدروجين بتقريب شظية مشتعلة فتشتعل بفرقعة، ونكشف عن الأكسجين فيزداد توهج الشظية. 2) تلوث المياه: أ) بيولوجي: اختلاط فضلات الكائنات بالماء (يسبب البلهارسيا والتيفود والالتهاب الكبدي الوبائي). ب) كيميائي: تصريف مخلفات المصانع (الرصاص يسبب موت خلايا المخ، الزئبق يسبب فقدان البصر، والزرنيخ يزيد سرطان الكبد). ج) حراري: تبريد المفاعلات النووية في البحار (يؤدي لموت الكائنات لانفصال الأكسجين الذائب). د) إشعاعي: تسرب المواد المشعة.',
        contentEn: 'Electrolysis of acidified water in a Hofmann voltameter decomposes water into 2 volumes of Hydrogen at the negative Cathode (burns with pop sound) and 1 volume of Oxygen at the positive Anode (relights glowing splint): 2H2O -> 2H2 + O2. Water pollution includes Biological (Typhoid, Bilharzia), Chemical (Lead causes brain cell death, Mercury causes blindness, Arsenic causes cancer), Thermal, and Radioactive.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: حساب حجوم الغازات في جهاز فولتمتر هوفمان',
          titleEn: 'Worked Example 4: Gas Stoichiometry Calculations in Hofmann Voltameter',
          equation: 'حجم غاز الهيدروجين (عند المهبط) = 2 × حجم غاز الأكسجين (عند المصعد)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المسألة: إذا كان حجم الغاز المتصاعد عند المصعد (الأكسجين O₂) هو 10 سم³، فما حجم الغاز المتصاعد عند المهبط؟',
              textEn: 'Problem: If oxygen volume at anode is 10 cm³, find hydrogen volume at cathode.',
              noteAr: 'معطيات المسألة'
            },
            {
              stepNumber: 2,
              textAr: 'القاعدة: غاز المهبط هو الهيدروجين وحجمه يساوي ضعف حجم غاز الأكسجين (نسبة 2 : 1).',
              textEn: 'Cathode gas is H2, having twice the volume of O2.',
              noteAr: 'تطبيق القانون'
            },
            {
              stepNumber: 3,
              textAr: 'الحساب: حجم الهيدروجين = 10 × 2 = 20 سم³.',
              textEn: 'Calculation: Hydrogen volume = 10 × 2 = 20 cm³.',
              noteAr: 'الناتج النهائي'
            }
          ],
          takeawayAr: 'تذكر دائماً: المهبط (سالب وفيه حرف هـ) يتصاعد عنده الهيدروجين (حرف هـ وبنسبة 2)، والمصعد (موجب) يتصاعد عنده الأكسجين (بنسبة 1).',
          takeawayEn: 'Mnemonic: Negative Cathode evolves Hydrogen (2 vols); Positive Anode evolves Oxygen (1 vol).'
        },
        formativeCheck: {
          id: 'fc-sci8-3-4',
          questionAr: 'عند التحليل الكهربي للماء في جهاز فولتمتر هوفمان، إذا كان حجم غاز الهيدروجين المتصاعد 14 سم³، فإن حجم غاز الأكسجين يكون:',
          questionEn: 'In water electrolysis via Hofmann voltameter, if hydrogen volume is 14 cm³, oxygen volume is:',
          optionsAr: ['7 سم³ (النصف)', '28 سم³ (الضعف)', '14 سم³ (مساوٍ له)', '21 سم³'],
          optionsEn: ['7 cm³ (half)', '28 cm³ (double)', '14 cm³ (equal)', '21 cm³'],
          correctIndex: 0,
          explanationAr: 'حجم غاز الأكسجين عند المصعد يساوي نصف حجم غاز الهيدروجين المتصاعد عند المهبط: 14 ÷ 2 = 7 سم³.',
          explanationEn: 'Oxygen volume at the anode is exactly half the hydrogen volume at the cathode: 14 / 2 = 7 cm³.',
          hintAr: 'اقسم حجم الهيدروجين على 2.'
        },
        tipsAr: [
          'يضاف قليل من حمض الكبريتيك المخفف H₂SO₄ إلى الماء النقي في فولتمتر هوفمان لأن الماء النقي رديء التوصيل للكهرباء.',
          'تناول أسماك تحتوي أجسامها على تركيزات عالية من الرصاص يسبب موت خلايا المخ، والزئبق يسبب فقدان البصر.'
        ],
        tipsEn: [
          'Dilute sulfuric acid (H2SO4) is added to pure water in electrolysis because distilled water is a poor electrical conductor.',
          'Accumulation of lead in food causes brain damage; mercury bioaccumulation causes blindness.'
        ]
      }
    ],

    conceptMapAr: [
      'الأقلاء 1A: فلزات أحادية + تحفظ تحت الكيروسين + 2Na + 2H₂O -> 2NaOH + H₂↑ + تزداد نشاطاً حتى Cs',
      'الهالوجينات 7A: لافلزات أحادية ثنائية الذرة (F₂, Cl₂, Br₂, I₂) + تكون أملاحاً + تفاعلات إحلال Cl₂ + 2KBr -> 2KCl + Br₂',
      'شذوذ الماء: روابط هيدروجينية + غليان 100°C وتجمد 0°C + بلورات ثلج سداسية تطفو (كثافة أقل عند التجمد)',
      'فولتمتر هوفمان: 2H₂O -> 2H₂ (مهبط سالب) + 1O₂ (مصعد موجب) | التلوث: بيولوجي، كيميائي، حراري، إشعاعي'
    ],
    conceptMapEn: [
      'Alkali Metals 1A: Monovalent, stored in kerosene, 2Na+2H2O->2NaOH+H2, max reactivity at Cs',
      'Halogens 7A: Monovalent diatomic nonmetals, form salts, displacement: Cl2+2KBr->2KCl+Br2',
      'Water Anomalies: Hydrogen bonding, 100°C boiling / 0°C freezing, open hexagonal ice floats below 4°C',
      'Hofmann Voltameter: 2H2 (cathode -) + 1O2 (anode +); Pollution: Biological, Chemical, Thermal, Radioactive'
    ],

    textbookExercises: [
      {
        id: 'ex-sci8-3-1',
        questionAr: 'علل لما يأتي: 1) يطفو الثلج فوق سطح الماء بالرغم من أنهما نفس المادة. 2) لا تطفأ حرائق الصوديوم بالماء.',
        questionEn: 'Explain: 1) Why ice floats on water despite being the same substance. 2) Why sodium fires are not extinguished with water.',
        solutionStepsAr: [
          '1) يطفو الثلج لأن كثافته أقل من كثافة الماء السائل؛ فعندما تنخفض درجة الحرارة عن 4°C تتجمع الجزيئات بالروابط الهيدروجينية مكونة بلورات سداسية كبيرة الحجم بينها فراغات هوائية فيزداد الحجم وتقل الكثافة.',
          '2) لا تطفأ حرائق الصوديوم بالماء لأن الصوديوم يتفاعل بشدة مع الماء ويتصاعد غاز الهيدروجين الذي يشتعل بفرقعة بفعل حرارة التفاعل ويزيد الحريق اشتعالاً.'
        ],
        solutionStepsEn: [
          '1) Below 4°C, hydrogen bonds form hexagonal ice crystals with large voids, expanding volume and lowering density below water.',
          '2) Sodium reacts violently with water producing hydrogen gas which explodes due to reaction heat.'
        ],
        answerAr: '1) لانخفاض كثافة الثلج لتكون بلورات سداسية بفراغات • 2) لتصاعد غاز H₂ الذي يشتعل بفرقعة.',
        answerEn: '1) Hexagonal ice crystals reduce density • 2) Generates flammable explosive H2 gas.'
      }
    ],

    assessment: {
      id: 'quiz-sci8-3',
      lectureId: 'sci8-3',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 3: المجموعات الرئيسية وخواص الماء والتحليل الكهربي',
      titleEn: 'Mastery Assessment 3: Alkali Metals, Halogens, Hydrogen Bonds & Water Electrolysis',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci8-3-1',
          textAr: 'عند التحليل الكهربي للماء المحمض في جهاز فولتمتر هوفمان، يتصاعد غاز الهيدروجين عند:',
          textEn: 'During water electrolysis in a Hofmann voltameter, hydrogen gas evolves at the:',
          optionsAr: ['المهبط (القطب السالب) ويكون حجمه ضعف الأكسجين', 'المصعد (القطب الموجب)', 'كلا القطبين بنفس الحجم', 'لا يتصاعد أي غاز'],
          optionsEn: ['Cathode (negative pole) with double the volume of oxygen', 'Anode (positive pole)', 'Both poles with equal volumes', 'No gas evolution'],
          correctIndex: 0,
          conceptTestedAr: 'موقع وحجم غاز الهيدروجين في فولتمتر هوفمان',
          conceptTestedEn: 'Hydrogen cathode location and volume ratio',
          explanationAr: 'يتصاعد غاز الهيدروجين عند المهبط (القطب السالب) بنسبة 2 حجم، بينما الأكسجين عند المصعد بنسبة 1 حجم.',
          explanationEn: 'Hydrogen evolves at the negative Cathode with double the volumetric ratio of anode oxygen (2:1).',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-3-2',
          textAr: 'الهالوجين الوحيد الذي يوجد في الحالة السائلة في درجات الحرارة العادية هو:',
          textEn: 'The only halogen element that exists in liquid state at standard room temperature is:',
          optionsAr: ['البروم (Br₂)', 'الفلور (F₂)', 'الكلور (Cl₂)', 'اليود (I₂)'],
          optionsEn: ['Bromine (Br₂)', 'Fluorine (F₂)', 'Chlorine (Cl₂)', 'Iodine (I₂)'],
          correctIndex: 0,
          conceptTestedAr: 'الحالة الفيزيائية للهالوجينات والبروم السائل',
          conceptTestedEn: 'Physical state of halogens and liquid bromine',
          explanationAr: 'البروم Br₂ هو الهالوجين واللافلز السائل الوحيد (الفلور والكلور غازات، واليود صلب).',
          explanationEn: 'Bromine is the sole liquid halogen nonmetal at room temperature.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-3-3',
          textAr: 'الرابطة المسؤولة عن شذوذ الخواص الفيزيائية للماء مثل ارتفاع درجة غليانه هي:',
          textEn: 'The bond responsible for the anomalous physical properties of water such as high boiling point is:',
          optionsAr: ['الرابطة الهيدروجينية بين جزيئات الماء', 'الرابطة التساهمية الأحادية داخل الجزيء', 'الرابطة الأيونية', 'الرابطة التناسقية'],
          optionsEn: ['Hydrogen bond between water molecules', 'Single covalent bond within molecule', 'Ionic bond', 'Coordinate bond'],
          correctIndex: 0,
          conceptTestedAr: 'دور الرابطة الهيدروجينية في شذوذ خواص الماء',
          conceptTestedEn: 'Role of hydrogen bonding in water anomalies',
          explanationAr: 'الروابط الهيدروجينية بين جزيئات الماء تستهلك طاقة حرارية لتكسيرها مما يرفع درجة الغليان إلى 100°C.',
          explanationEn: 'Intermolecular hydrogen bonds require substantial thermal energy to overcome, elevating water boiling point.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-3-4',
          textAr: 'أي من المعادلات التالية تمثل تفاعل إحلال صحيح بين الهالوجينات؟',
          textEn: 'Which of the following equations represents a valid halogen displacement reaction?',
          optionsAr: ['Cl₂ + 2KBr -> 2KCl + Br₂', 'Br₂ + 2KCl -> 2KBr + Cl₂', 'I₂ + 2KCl -> 2KI + Cl₂', 'I₂ + 2KBr -> 2KI + Br₂'],
          optionsEn: ['Cl₂ + 2KBr -> 2KCl + Br₂', 'Br₂ + 2KCl -> 2KBr + Cl₂', 'I₂ + 2KCl -> 2KI + Cl₂', 'I₂ + 2KBr -> 2KI + Br₂'],
          correctIndex: 0,
          conceptTestedAr: 'تفاعلات الإحلال في الهالوجينات',
          conceptTestedEn: 'Halogen displacement reaction equations',
          explanationAr: 'الكلور أنشط من البروم فيحل محله في محلول بروميد البوتاسيوم مكوناً KCl ومحرراً Br₂.',
          explanationEn: 'Chlorine is more active than bromine and displaces bromide ions in aqueous solution.',
          difficulty: 'medium'
        },
        {
          id: 'q-sci8-3-5',
          textAr: 'تناول مياه ملوثة بعنصر الرصاص (Lead) بصفة مستمرة يؤدي إلى إصابة الإنسان بـ:',
          textEn: 'Continuous ingestion of drinking water contaminated with Lead causes:',
          optionsAr: ['موت خلايا المخ', 'فقدان البصر', 'سرطان الكبد', 'التيفود'],
          optionsEn: ['Brain cell death', 'Loss of sight (blindness)', 'Liver cancer', 'Typhoid'],
          correctIndex: 0,
          conceptTestedAr: 'أضرار التلوث الكيميائي بالرصاص',
          conceptTestedEn: 'Lead contamination health hazards',
          explanationAr: 'التلوث الكيميائي بالرصاص يسبب موت خلايا المخ، بينما الزئبق يسبب فقدان البصر، والزرنيخ يزيد سرطان الكبد.',
          explanationEn: 'Lead poisoning damages central nervous system neurons causing brain cell death.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: ATMOSPHERIC LAYERS, OZONE DEPLETION & GLOBAL WARMING ──
  {
    id: 'sci8-4',
    order: 4,
    titleAr: 'المحاضرة 4: طبقات الغلاف الجوي، تآكل طبقة الأوزون والاحترار العالمي',
    titleEn: 'Lecture 4: Atmospheric Layers, Ozone Depletion & Global Warming',
    subtitleAr: 'طبقات الغلاف الجوي (التروبوسفير، الستراتوسفير، الميزوسفير، الثرموسفير)، ثقب الأوزون، غازات الاحتباس الحراري والتغيرات المناخية',
    subtitleEn: 'Atmospheric pressure, Troposphere, Stratosphere, Mesosphere, Thermosphere/Ionosphere, Ozone layer depletion & Greenhouse Effect.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - العلوم والساينس',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - General Science & Earth Sciences',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Science Curriculum',
    unitTitleAr: 'الوحدة الثانية: الغلاف الجوي وحماية كوكب الأرض (The Atmosphere & Earth Protection)',
    unitTitleEn: 'Unit 2: The Atmosphere & Protecting Planet Earth',
    lessonNumberAr: 'الدرس 4: طبقات الغلاف الجوي وظواهر تآكل الأوزون والاحتباس الحراري',
    lessonNumberEn: 'Lesson 4: Atmospheric Layers, Ozone Depletion & Global Climate Change',

    warmupHookAr: 'الغلاف الجوي هو الدرع الواقي الخارق الذي يحمي كوكب الأرض من الإشعاعات الفضائية القاتلة والشهب والنيازك الحارقة! كيف تنخفض الحرارة إلى 90 تحت الصفر في طبقة ثم ترتفع إلى 1200 درجة مئوية في طبقة أخرى؟ وما هو ثقب الأوزون وظاهرة الاحتباس الحراري التي تهدد بغرق مدن ساحلية كاملة؟ لنستكشف طبقات سمائنا!',
    warmupHookEn: 'Earth atmosphere is our cosmic shield against lethal UV radiation and meteorites. Discover the four atmospheric layers, the ozone layer protective umbrella, and global warming impacts!',

    learningOutcomesAr: [
      'أن يوضح مفهوم الضغط الجوي المعتاد (1013.25 مليبار) وأجهزة قياسه (الأنيرويد والالتيميتر)',
      'أن يقارن بين طبقات الغلاف الجوي الأربع (التروبوسفير، الستراتوسفير، الميزوسفير، الثرموسفير) من حيث السمك، والحرارة، والضغط، والأهمية',
      'أن يفسر أهمية طبقة الأوزون في الستراتوسفير في امتصاص الأشعة فوق البنفسجية الضارة (UV-B, UV-C)',
      'أن يحدد ملوثات طبقة الأوزون (مركبات CFCs، الهالونات، بروميد الميثيل، وأكاسيد النيتروجين)',
      'أن يشرح آلية ظاهرة الاحتباس الحراري (Greenhouse Effect) والغازات المسببة لها والآثار السلبية للاحترار العالمي'
    ],
    learningOutcomesEn: [
      'Define standard atmospheric pressure (1013.25 mbar) and barometers (Aneroid, Altimeter)',
      'Compare 4 atmospheric layers (Troposphere, Stratosphere, Mesosphere, Thermosphere) in pressure, temperature & function',
      'Explain how Stratospheric Ozone absorbs harmful UV radiation (UV-B, UV-C)',
      'Identify ozone depleting substances (CFCs, Halons, Methyl Bromide, Nitrogen oxides)',
      'Explain the Greenhouse Effect mechanism, greenhouse gases, and global warming hazards'
    ],

    vocabulary: [
      {
        termAr: 'الضغط الجوي المعتاد (Standard Atmospheric Pressure)',
        termEn: 'Standard Atmospheric Pressure',
        definitionAr: 'وزن عمود من الهواء مساحة مقطعه وحدة المساحات (1 م²) وطوله بارتفاع الغلاف الجوي، ويعادل 1013.25 مليبار عند مستوى سطح البحر.',
        definitionEn: 'The weight of an air column of unit cross-sectional area extending to the top of atmosphere, equaling 1013.25 mbar at sea level.'
      },
      {
        termAr: 'طبقة الأوزون (Ozone Layer)',
        termEn: 'Ozone Layer',
        definitionAr: 'طبقة توجد في الستراتوسفير على ارتفاع 20-40 كم تتكون من غاز الأوزون O₃ وتحمي الأرض من الأشعة فوق البنفسجية الضارة.',
        definitionEn: 'A stratospheric layer at 20-40 km altitude composed of O3 absorbing hazardous solar ultraviolet radiation.'
      },
      {
        termAr: 'ظاهرة الاحتباس الحراري (Greenhouse Effect)',
        termEn: 'Greenhouse Effect',
        definitionAr: 'احتباس الأشعة تحت الحمراء في طبقة التروبوسفير نتيجة زيادة نسبة غازات الدفيئة مما يؤدي لارتفاع متوسط درجة حرارة كوكب الأرض.',
        definitionEn: 'The trapping of infrared radiation in the troposphere caused by greenhouse gases, raising global mean temperatures.'
      }
    ],

    keyConceptsAr: [
      'طبقات الجو الأربع: 1) التروبوسفير (سمكها 13 كم، تحدث فيها كافة الظواهر الجوية، تنخفض الحرارة بمعدل 6.5°C لكل 1 كم حتى تصل -60°C). 2) الستراتوسفير (سمكها 37 كم، تحتوي طبقة الأوزون، خالية من الغيوم ومناسبة لتحليق الطائرات، ترتفع حرارتها إلى 0°C). 3) الميزوسفير (سمكها 35 كم، أبرد الطبقات -90°C وتتكون فيها الشهب). 4) الثرموسفير (أسخن الطبقات 1200°C، تحتوي الأيونوسفير لعكس موجات الراديو وحزامي فان ألين وظاهرة الشفق القطبي الأورورا Aurora)',
      'تكون الأوزون: تفكك جزيء O₂ بالأشعة فوق البنفسجية UV إلى ذرتين حرتين 2O ثم تتحد كل ذرة O مع جزيء O₂ لتكوين جزيء أوزون O₃. يقاس سمك الأوزون بوحدة دوبسون (Dobson Unit DU) وسمكه الطبيعي 300 DU',
      'ملوثات الأوزون: مركبات الكلوروفلوروكربون CFCs (الفريون)، الهالونات (إطفاء حرائق البترول)، بروميد الميثيل (مبيد حشري)، وأكاسيد النيتروجين (عوادم طائرات الكونكورد)',
      'غازات الاحتباس الحراري: ثاني أكسيد الكربون CO₂، الميثان CH₄، أكسيد النيتروز N₂O، بخار الماء H₂O، ومركبات CFCs',
      'آثار الاحترار العالمي: ذوبان جليد القطبين (غرق المدن الساحلية وانقراض الدب القطبي) وحدوث تغيرات مناخية حادة (أعاصير وجفاف وفيضانات)'
    ],
    keyConceptsEn: [
      'Four Layers: 1) Troposphere (13 km, all weather phenomena, lapse rate 6.5°C/km to -60°C). 2) Stratosphere (37 km, ozone layer, airplane cruising zone, rises to 0°C). 3) Mesosphere (coldest layer -90°C, meteors burn up). 4) Thermosphere (hottest 1200°C, Ionosphere radio reflection, Van Allen belts, Aurora borealis)',
      'Ozone Formation: O2 -> 2O (via UV), then O + O2 -> O3. Standard thickness is 300 Dobson Units (DU)',
      'Ozone Depleters: CFCs (Freon), Halons (firefighting), Methyl Bromide (pesticide), Nitrogen Oxides (supersonic jets)',
      'Greenhouse Gases: CO2, CH4, N2O, water vapor, and CFCs trapping infrared radiation',
      'Global Warming Hazards: Polar ice melting (sea level rise, coastal flooding) and extreme climatic anomalies'
    ],
    summaryAr: 'دراسة شاملة لطبقات الغلاف الجوي الأربع وتغيرات الضغط والحرارة بها، وميكانيكية حماية طبقة الأوزون وملوثاتها وثقب الأوزون، وتحليل ظاهرة الاحتباس الحراري وتأثيراتها المناخية.',
    summaryEn: 'Complete analysis of atmospheric layers, pressure/temperature gradients, stratospheric ozone chemistry and depletion vectors, and the greenhouse effect driving global climate change.',

    sections: [
      {
        titleAr: '1. الضغط الجوي والطبقات الأربع للغلاف الجوي',
        titleEn: '1. Atmospheric Pressure & The Four Atmospheric Layers',
        contentAr: 'يمتد الغلاف الجوي لارتفاع 1000 كم فوق مستوى سطح البحر، والضغط الجوي المعتاد عند سطح البحر يساوي 1013.25 مليبار (mbar). يقاس الضغط بالبارومترات ومنها: الأنيرويد (Aneroid لمعرفة طقس اليوم) والالتيميتر (Altimeter في الطائرات لتحديد الارتفاع). ينقسم الغلاف الجوي إلى 4 طبقات تفصل بينها حدود توقف (Tropopause, Stratopause, Mesopause): 1) التروبوسفير: الطبقة الأولى المضطربة. 2) الستراتوسفير: الطبقة الثانية الهادئة. 3) الميزوسفير: الطبقة الثالثة المتوسطة. 4) الثرموسفير: الطبقة الرابعة الحرارية.',
        contentEn: 'The atmosphere extends 1000 km with standard sea-level pressure of 1013.25 mbar. Measured via Aneroids (weather forecasting) and Altimeters (aircraft altitude). Subdivided into 4 primary layers bounded by pauses: Troposphere, Stratosphere, Mesosphere, and Thermosphere.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب درجة الحرارة عند قمة جبل بالتروبوسفير',
          titleEn: 'Worked Example 1: Calculating Temperature Drop at Mountain Summits',
          equation: 'الانخفاض في درجة الحرارة = الارتفاع بالكيلومتر (كم) × 6.5°C',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المسألة: إذا كانت درجة الحرارة عند سفح جبل ارتفاعه 4 كم هي 26°C، فكم تكون درجة الحرارة عند قمته؟',
              textEn: 'Problem: Base temp is 26°C for a 4 km high mountain. Find summit temp.',
              noteAr: 'معطيات المسألة'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: حساب مقدار الانخفاض في الحرارة = 4 × 6.5 = 26°C.',
              textEn: 'Step 1: Temp decrease = 4 km × 6.5°C/km = 26°C.',
              noteAr: 'مقدار الانخفاض'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: درجة الحرارة عند القمة = درجة حرارة السفح - مقدار الانخفاض = 26 - 26 = 0°C (درجة التجمد).',
              textEn: 'Step 2: Summit temp = 26°C - 26°C = 0°C.',
              noteAr: 'درجة حرارة القمة'
            }
          ],
          takeawayAr: 'في طبقة التروبوسفير تنخفض درجة الحرارة بمعدل 6.5 درجة مئوية كلما ارتفعنا 1 كم للأعلى حتى تصل إلى -60°C عند التروبوبوز.',
          takeawayEn: 'In the troposphere, temperature decreases at the lapse rate of 6.5°C per kilometer of altitude.'
        },
        formativeCheck: {
          id: 'fc-sci8-4-1',
          questionAr: 'الجهاز المستخدم في الطائرات لتحديد الارتفاع بمعلومية الضغط الجوي هو جهاز:',
          questionEn: 'The instrument used in aircraft to determine flight altitude based on atmospheric pressure is:',
          optionsAr: ['الالتيميتر (Altimeter)', 'الأنيرويد (Aneroid)', 'المانومتر', 'فولتمتر هوفمان'],
          optionsEn: ['Altimeter', 'Aneroid', 'Manometer', 'Hofmann Voltameter'],
          correctIndex: 0,
          explanationAr: 'جهاز الالتيميتر Altimeter يستخدمه الطيارون لتحديد ارتفاع الطائرة عن مستوى سطح البحر بالضغط الجوي.',
          explanationEn: 'The Altimeter is an altitudinal barometer calibrated for aircraft flight telemetry.',
          hintAr: 'جهاز تحديد الارتفاع Altitude.'
        },
        tipsAr: [
          'الضغط الجوي يقل كلما ارتفعنا لأعلى لنقص طول ووزن عمود الهواء.',
          'التروبوسفير تحتوي 75% من كتلة الهواء الجوي و 99% من بخار الماء المسؤول عن تكون السحب والأمطار.'
        ],
        tipsEn: [
          'Atmospheric pressure decreases with altitude due to shortening of the overhead air column.',
          'The troposphere holds 75% of total atmospheric mass and 99% of moisture driving precipitation.'
        ]
      },
      {
        titleAr: '2. مقارنة طبقات الغلاف الجوي وأهمية الأيونوسفير',
        titleEn: '2. Comparative Analysis of Atmospheric Layers & The Ionosphere',
        contentAr: '1) التروبوسفير (سمكها 13 كم): حركة الهواء فيها رأسية (تصعد التيارات الساخنة وتهبط الباردة). 2) الستراتوسفير (تمتد من 13 إلى 50 كم): حركة الهواء فيها أفقية وخالية من الغيوم والاضطرابات الجوية لذا يفضل الطيارون التحليق في جزئها السفلي، وتحتوي طبقة الأوزون وترتفع حرارتها إلى 0°C لامتصاص الأشعة فوق البنفسجية. 3) الميزوسفير (من 50 إلى 85 كم): طبقة مخلخلة شديدة البرودة تصل حرارتها إلى -90°C وتتكون فيها الشهب نتيجة احتكاك الكتل الصخرية بالهواء. 4) الثرموسفير (من 85 إلى 675 كم): أسخن الطبقات (1200°C)، ينتهي جزؤها العلوي بالأيونوسفير (طبقة مشحونة تعكس موجات الراديو والاتصالات) ويحيط بها حزاما فان ألين المغناطيسيان لتشتيت الإشعاعات الكونية مسببين ظاهرة الشفق القطبي (الأورورا Aurora).',
        contentEn: 'Stratosphere features horizontal air movement ideal for aircraft and contains the ozone shield. Mesosphere burns meteors into shooting stars at -90°C. Thermosphere (1200°C) includes the Ionosphere reflecting radio signals and Van Allen radiation belts causing Aurora displays.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: لماذا يفضل الطيارون التحليق في الجزء السفلي من الستراتوسفير؟',
          titleEn: 'Worked Example 2: Why Commercial Jets Cruise in the Lower Stratosphere',
          equation: 'هواء أفقي + خلو من الغيوم والاضطرابات + رؤية واضحة = طيران آمن',
          steps: [
            {
              stepNumber: 1,
              textAr: 'خلو الطبقة من كافة الاضطرابات الجوية والغيوم والعواصف الرعدية (التي تحدث فقط في التروبوسفير).',
              textEn: 'Absence of convective turbulence, clouds, and storms.',
              noteAr: 'استقرار جوي'
            },
            {
              stepNumber: 2,
              textAr: 'حركة الهواء في الجزء السفلي من الستراتوسفير حركة أفقية وليست رأسية، مما يضمن ثبات الطائرة.',
              textEn: 'Horizontal laminar airflow stabilizes aircraft flight.',
              noteAr: 'حركة أفقية'
            },
            {
              stepNumber: 3,
              textAr: 'توفر وقود الطيران وتجنب مقاومة التيارات الهوائية الصاعدة والهابطة.',
              textEn: 'Optimized fuel economy and smooth cruising altitude.',
              noteAr: 'كفاءة الطيران'
            }
          ],
          takeawayAr: 'ظاهرة الشفق القطبي (الأورورا) هي ستائر ضوئية ملونة مبهرة تُرى من القطبين الشمالي والجنوبي ناتجة عن تشتيت حزامي فان ألين للإشعاعات الكونية الضارة.',
          takeawayEn: 'Aurora displays are dazzling luminous curtains at polar regions resulting from Van Allen belts deflecting solar cosmic rays.'
        },
        formativeCheck: {
          id: 'fc-sci8-4-2',
          questionAr: 'في أي طبقة من طبقات الغلاف الجوي تتكون الشهب وتحترق الصخور الفضائية؟',
          questionEn: 'In which atmospheric layer do meteors burn up creating shooting stars?',
          optionsAr: ['طبقة الميزوسفير', 'طبقة التروبوسفير', 'طبقة الستراتوسفير', 'طبقة الثرموسفير'],
          optionsEn: ['Mesosphere', 'Troposphere', 'Stratosphere', 'Thermosphere'],
          correctIndex: 0,
          explanationAr: 'تحترق الكتل الصخرية مكونة الشهب في طبقة الميزوسفير بسبب احتكاكها بجزيئات الهواء في هذه الطبقة.',
          explanationEn: 'Meteors incinerate in the Mesosphere due to high-speed friction against atmospheric gas particles.',
          hintAr: 'الطبقة المتوسطة وأبرد طبقات الجو.'
        },
        tipsAr: [
          'الأيونوسفير هي المسؤولة عن البث الإذاعي والاتصالات اللاسلكية لأنها تعكس موجات الراديو للأرض.',
          'المنطقة التي يندمج فيها الغلاف الجوي بالفضاء الخارجي وتسبح فيها الأقمار الصناعية تسمى الإكسوسفير (Exosphere).'
        ],
        tipsEn: [
          'The Ionosphere enables long-distance telecommunications by bouncing radio frequencies back to Earth.',
          'The Exosphere is the outermost atmospheric zone where satellites orbit Earth in vacuum.'
        ]
      },
      {
        titleAr: '3. طبقة الأوزون وتآكلها (ثقب الأوزون)',
        titleEn: '3. The Ozone Layer Umbrella & Ozone Depletion',
        contentAr: 'تتكون طبقة الأوزون في الستراتوسفير على ارتفاع 20-40 كم لأنها أول طبقة تقابل الأشعة فوق البنفسجية وبها كمية مناسبة من غاز الأكسجين O₂. خطوات التكون: 1) تمتص جزيئات الأكسجين الأشعة فوق البنفسجية UV فتنكسر الرابطة التساهمية: O₂ -> O + O. 2) تتحد كل ذرة أكسجين حرة مع جزيء أكسجين: O + O₂ -> O₃ (غاز الأوزون). أهميتها: تمتص 100% من الأشعة فوق البنفسجية البعيدة القاتلة و95% من المتوسطة الضارة وتنفذ القريبة المفيدة فقط. ثقب الأوزون هو تآكل في طبقة الأوزون فوق منطقة القطب الجنوبي يزداد في شهر سبتمبر من كل عام بسبب تجمع ملوثات الأوزون (مركبات الفريون CFCs، الهالونات، بروميد الميثيل، وأكاسيد النيتروجين).',
        contentEn: 'The ozone layer forms in the stratosphere: O2 absorbs UV breaking into 2O radicals, then O + O2 -> O3. It blocks 100% of lethal far-UV and 95% of harmful mid-UV. The Ozone Hole is seasonal thinning over Antarctica in September driven by CFCs, Halons, Methyl Bromide, and NOx emissions.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: حساب النسبة المئوية لتآكل طبقة الأوزون في منطقة معينة',
          titleEn: 'Worked Example 3: Calculating Ozone Depletion Percentage',
          equation: 'درجة التآكل = 300 DU - درجة الأوزون المقاسة | النسبة المئوية = (درجة التآكل ÷ 300) × 100%',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المسألة: إذا كانت درجة الأوزون في منطقة ما 150 دوبسون (150 DU)، فاحسب النسبة المئوية لتآكل الأوزون فيها.',
              textEn: 'Problem: Measured ozone is 150 DU. Calculate depletion percentage.',
              noteAr: 'معطيات المسألة'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: درجة التآكل = درجة الأوزون الطبيعية (300 DU) - الدرجة المقاسة (150 DU) = 150 DU.',
              textEn: 'Step 1: Depletion level = 300 - 150 = 150 DU.',
              noteAr: 'مقدار التآكل'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: النسبة المئوية للتآكل = (150 ÷ 300) × 100% = 50% (نصف طبقة الأوزون متآكل في هذه المنطقة).',
              textEn: 'Step 2: Percentage = (150 / 300) × 100% = 50%.',
              noteAr: 'النسبة المئوية'
            }
          ],
          takeawayAr: 'اتفاقية مونتريال الدولية نجحت في حظر استخدام مركبات الفريون CFCs لحماية طبقة الأوزون وبدء تعافيها.',
          takeawayEn: 'The Montreal Protocol successfully phased out CFC chlorofluorocarbons, initiating global ozone recovery.'
        },
        formativeCheck: {
          id: 'fc-sci8-4-3',
          questionAr: 'تتكون طبقة الأوزون في الستراتوسفير عندما تتحد ذرة أكسجين حرة (O) مع:',
          questionEn: 'Ozone gas forms in the stratosphere when a free oxygen atom (O) combines with:',
          optionsAr: ['جزيء أكسجين (O₂)', 'ذرة هيدروجين', 'جزيء نيتروجين', 'جزيء ماء'],
          optionsEn: ['Oxygen molecule (O₂)', 'Hydrogen atom', 'Nitrogen molecule', 'Water molecule'],
          correctIndex: 0,
          explanationAr: 'يتكون الأوزون O₃ من اتحاد ذرة أكسجين حرة ناتجة من تكسير الأشعة UV مع جزيء أكسجين O₂ (O + O₂ -> O₃).',
          explanationEn: 'Ozone (O3) synthesizes when a photolyzed oxygen radical bonds with an O2 molecule: O + O2 -> O3.',
          hintAr: 'O + O₂ -> O₃.'
        },
        tipsAr: [
          'درجة الأوزون الطبيعية تقدر بـ 300 وحدة دوبسون (300 DU) بافتراض العالم دوبسون.',
          'مركبات الهالونات تستخدم في إطفاء حرائق البترول التي لا تطفأ بالماء ولكنها من أخطر ملوثات الأوزون.'
        ],
        tipsEn: [
          'Standard pristine stratospheric ozone thickness is calibrated at 300 Dobson Units (DU).',
          'Halons extinguish electrical and chemical fires but are potent ozone-depleting substances.'
        ]
      },
      {
        titleAr: '4. ظاهرة الاحتباس الحراري والاحترار العالمي',
        titleEn: '4. The Greenhouse Effect & Global Warming Crisis',
        contentAr: 'الاحترار العالمي هو الارتفاع المستمر في متوسط درجة حرارة الهواء القريب من سطح الأرض. أسبابه: زيادة نسبة غازات الدفيئة (Greenhouse Gases) وأهمها: CO₂، CH₄، N₂O، بخار الماء H₂O، ومركبات CFCs بسبب حرق الوقود الحفري وقطع الغابات. آلية الحدوث (أثر الصوبة الزجاجية): ينفذ الغلاف الجوي أشعة الضوء المرئي والأشعة ذات الأطوال الموجية القصيرة، فتمتصها الأرض وتعيد إشعاعها في صورة أشعة تحت حمراء (Infrared) ذات طول موجي كبير، فلا تستطيع النفاذ وتُحبس في التروبوسفير مسببة ارتفاع حرارة كوكب الأرض. الآثار السلبية: 1) ذوبان جليد القطبين وارتفاع منسوب البحار وغرق المدن الساحلية. 2) التغيرات المناخية الحادة كالأعاصير (إعصار كاترينا) والجفاف وحرائق الغابات.',
        contentEn: 'Global warming is the persistent increase in Earth near-surface air temperatures driven by rising greenhouse gases (CO2, CH4, N2O, CFCs, H2O). The atmosphere admits shortwave solar radiation, but greenhouse gases trap outgoing longwave thermal infrared radiation. Consequences: polar ice melt, sea level rise flooding coastal cities, and severe extreme weather events.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: تجربة محاكاة أثر غاز CO2 في رفع درجة الحرارة (الصوبة)',
          titleEn: 'Worked Example 4: Demonstrating the Greenhouse Effect with Carbon Dioxide',
          equation: 'تفاعل بيكربونات الصوديوم + الخل  -->  تصاعد غاز CO2  -->  ارتفاع مقياس الحرارة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'إحضار زجاجتين بلاستيكيتين: الأولى بها ماء ومقياس حرارة، والثانية بها خل وبيكربونات صوديوم ومقياس حرارة.',
              textEn: 'Set up 2 closed bottles: one control with water, one with vinegar and baking soda.',
              noteAr: 'تجهيز التجربة'
            },
            {
              stepNumber: 2,
              textAr: 'وضع الزجاجتين في مكان مشمس أو تحت مصباح كهربي لنفس المدة الزمنية.',
              textEn: 'Expose both bottles to identical sunlight or heat lamp source.',
              noteAr: 'التعريض للحرارة'
            },
            {
              stepNumber: 3,
              textAr: 'الملاحظة: ارتفاع درجة حرارة الزجاجة الثانية المحتوية على غاز CO₂ بدرجة أكبر بكثير من زجاجة الماء بسبب احتباس الحرارة.',
              textEn: 'Bottle with elevated CO2 records significantly higher temperature.',
              noteAr: 'إثبات الاحتباس الحراري'
            }
          ],
          takeawayAr: 'غاز ثاني أكسيد الكربون يسمح بمرور ضوء الشمس ويحبس الحرارة داخل الجو تماماً كما تفعل الصوبة الزجاجية الزراعية (Greenhouse).',
          takeawayEn: 'CO2 transmits visible sunlight while blocking thermal infrared radiation, mirroring agricultural greenhouse physics.'
        },
        formativeCheck: {
          id: 'fc-sci8-4-4',
          questionAr: 'تحتبس الأشعة الحرارية في التروبوسفير مسببة الاحتباس الحراري لأن الأشعة تحت الحمراء تتميز بـ:',
          questionEn: 'Thermal radiation is trapped in the troposphere causing global warming because infrared rays have:',
          optionsAr: ['طول موجي كبير لا يستطيع النفاذ من الغلاف الجوي', 'طول موجي قصير جداً', 'سرعة تفوق سرعة الضوء', 'قدرة على تجميد الغازات'],
          optionsEn: ['Long wavelength unable to penetrate atmospheric greenhouse layer', 'Very short wavelength', 'Superluminal speed', 'Gas freezing ability'],
          correctIndex: 0,
          explanationAr: 'الأشعة تحت الحمراء المنبعثة من الأرض ذات طول موجي كبير لا تستطيع النفاذ عبر غازات الاحتباس الحراري فتحبس مسببة ارتفاع الحرارة.',
          explanationEn: 'Terrestrial thermal infrared features long wavelengths trapped by greenhouse gas absorption bands.',
          hintAr: 'طولها الموجي كبير.'
        },
        tipsAr: [
          'الأشعة تحت الحمراء لها تأثير حراري، بينما الأشعة فوق البنفسجية لها تأثير كيميائي.',
          'الحد من استخدام الوقود الحفري والتوسع في الطاقة الشمسية وطاقة الرياح هو الحل الجذري لأزمة الاحترار العالمي.'
        ],
        tipsEn: [
          'Infrared radiation produces thermal heating; ultraviolet radiation drives photochemical reactions.',
          'Transitioning to renewable clean energy (solar, wind) is the definitive solution to the global warming crisis.'
        ]
      }
    ],

    conceptMapAr: [
      'طبقات الجو: تروبوسفير (طقس وانخفاض 6.5°C/كم) + ستراتوسفير (أوزون وطيران) + ميزوسفير (شهب -90°C) + ثرموسفير (أيونوسفير وأورورا)',
      'الأوزون O₃: في الستراتوسفير (20-40 كم) + سمكه الطبيعي 300 DU + يحمي من UV الضارة',
      'ملوثات الأوزون: CFCs الفريون + الهالونات + بروميد الميثيل + أكاسيد النيتروجين',
      'الاحتباس الحراري: زيادة CO₂ وغازات الدفيئة + احتباس الأشعة تحت الحمراء IR + ذوبان الجليد وغرق السواحل'
    ],
    conceptMapEn: [
      'Atmospheric Layers: Troposphere (weather), Stratosphere (ozone/jets), Mesosphere (meteors), Thermosphere (ionosphere/aurora)',
      'Ozone Shield O3: Stratosphere (20-40 km), 300 DU standard, blocks dangerous far/mid UV',
      'Ozone Depleters: CFCs, Halons, Methyl Bromide, Nitrogen Oxides',
      'Greenhouse Effect: Elevated CO2 & greenhouse gases trap thermal IR -> polar ice melt & sea level rise'
    ],

    textbookExercises: [
      {
        id: 'ex-sci8-4-1',
        questionAr: 'احسب درجة الحرارة عند سفح جبل ارتفاعه 3 كم، إذا كانت درجة الحرارة عند قمته مسجلة 5.5°C.',
        questionEn: 'Calculate the temperature at the base of a 3 km mountain if summit temperature is 5.5°C.',
        solutionStepsAr: [
          '1) حساب مقدار الارتفاع في الحرارة عند الهبوط للسفح = الارتفاع (كم) × 6.5 = 3 × 6.5 = 19.5°C.',
          '2) درجة حرارة السفح = درجة حرارة القمة + مقدار التغير = 5.5 + 19.5 = 25°C.'
        ],
        solutionStepsEn: [
          '1) Temperature gain from summit to base = 3 km × 6.5°C/km = 19.5°C.',
          '2) Base Temperature = Summit Temp + Gain = 5.5 + 19.5 = 25°C.'
        ],
        answerAr: 'درجة حرارة سفح الجبل = 25°C.',
        answerEn: 'Base temperature = 25°C.'
      }
    ],

    assessment: {
      id: 'quiz-sci8-4',
      lectureId: 'sci8-4',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 4: طبقات الغلاف الجوي والأوزون والاحتباس الحراري',
      titleEn: 'Mastery Assessment 4: Atmospheric Layers, Ozone Shield & Global Climate Change',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci8-4-1',
          textAr: 'الطبقة المناسبة لتحليق الطائرات لخلوها من الغيوم والاضطرابات الجوية ولحركة الهواء الأفقية فيها هي:',
          textEn: 'The atmospheric layer preferred for airplane cruising due to absence of storms and horizontal airflow is:',
          optionsAr: ['الجزء السفلي من الستراتوسفير', 'طبقة التروبوسفير', 'طبقة الميزوسفير', 'طبقة الأيونوسفير'],
          optionsEn: ['Lower Stratosphere', 'Troposphere', 'Mesosphere', 'Ionosphere'],
          correctIndex: 0,
          conceptTestedAr: 'أهمية الستراتوسفير لتحليق الطائرات',
          conceptTestedEn: 'Aviation advantage in the lower stratosphere',
          explanationAr: 'الجزء السفلي من الستراتوسفير يتميز بحركة هواء أفقية وخلوه من السحب والتقلبات الجوية مما يجعله مثالياً للطيران.',
          explanationEn: 'The lower stratosphere provides horizontal laminar airflow and clear storm-free cruising conditions.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-4-2',
          textAr: 'وحدة قياس درجة تآكل وسماكة طبقة الأوزون هي وحدة:',
          textEn: 'The measurement unit used to quantify ozone layer thickness is:',
          optionsAr: ['الدوبسون (Dobson Unit DU)', 'المليبار (mbar)', 'البيكومتر (pm)', 'النانومتر (nm)'],
          optionsEn: ['Dobson Unit (DU)', 'Millibar (mbar)', 'Picometer (pm)', 'Nanometer (nm)'],
          correctIndex: 0,
          conceptTestedAr: 'وحدة قياس الأوزون دوبسون',
          conceptTestedEn: 'Dobson unit for ozone measurement',
          explanationAr: 'تقاس درجة الأوزون بوحدة الدوبسون DU ودرجة الأوزون الطبيعية تعادل 300 DU.',
          explanationEn: 'Ozone column density is quantified in Dobson Units (standard pristine value = 300 DU).',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-4-3',
          textAr: 'أبرد طبقات الغلاف الجوي على الإطلاق والتي تصل درجة الحرارة عند نهايتها إلى -90°C هي:',
          textEn: 'The coldest atmospheric layer reaching -90°C at its upper boundary is the:',
          optionsAr: ['الميزوسفير', 'التروبوسفير', 'الستراتوسفير', 'الثرموسفير'],
          optionsEn: ['Mesosphere', 'Troposphere', 'Stratosphere', 'Thermosphere'],
          correctIndex: 0,
          conceptTestedAr: 'درجة حرارة طبقة الميزوسفير',
          conceptTestedEn: 'Mesosphere minimum temperature',
          explanationAr: 'الميزوسفير هي أبرد طبقات الجو وتنخفض الحرارة فيها حتى تصل -90°C عند الميزوبوز.',
          explanationEn: 'The Mesosphere is the coldest atmospheric zone, dropping to -90°C at the mesopause.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-4-4',
          textAr: 'أي من الغازات التالية يُعد من غازات الاحتباس الحراري المسؤولة عن رفع درجة حرارة الأرض؟',
          textEn: 'Which of the following is a greenhouse gas responsible for trapping atmospheric heat?',
          optionsAr: ['غاز ثاني أكسيد الكربون (CO₂)', 'غاز الأكسجين (O₂)', 'غاز النيتروجين (N₂)', 'غاز الأرجون (Ar)'],
          optionsEn: ['Carbon dioxide (CO₂)', 'Oxygen (O₂)', 'Nitrogen (N₂)', 'Argon (Ar)'],
          correctIndex: 0,
          conceptTestedAr: 'التعرف على غازات الاحتباس الحراري',
          conceptTestedEn: 'Identifying greenhouse gases',
          explanationAr: 'CO₂ والميثان وبخار الماء من أهم غازات الدفيئة التي تحبس الأشعة تحت الحمراء وترفع حرارة الكوكب.',
          explanationEn: 'CO2, methane, and water vapor are potent greenhouse gases absorbing infrared radiation.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-4-5',
          textAr: 'المركبات المستخدمة في إطفاء حرائق البترول والتي تُعد من أخطر ملوثات طبقة الأوزون هي:',
          textEn: 'Chemical compounds used in petroleum fire extinguishers that severely deplete ozone are:',
          optionsAr: ['الهالونات (Halons)', 'الفريونات (CFCs)', 'بروميد الميثيل', 'أكاسيد النيتروجين'],
          optionsEn: ['Halons', 'Freons (CFCs)', 'Methyl Bromide', 'Nitrogen Oxides'],
          correctIndex: 0,
          conceptTestedAr: 'الهالونات واستخداماتها وتأثيرها على الأوزون',
          conceptTestedEn: 'Halons applications and ozone impact',
          explanationAr: 'الهالونات تستخدم في إطفاء حرائق البترول والطائرات ولكنها تسبب تآكل طبقة الأوزون بشدة.',
          explanationEn: 'Halons are halogenated hydrocarbons used in specialized fire suppression that heavily destroy ozone molecules.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: FOSSILS, EVOLUTION & EXTINCTION ──
  {
    id: 'sci8-5',
    order: 5,
    titleAr: 'المحاضرة 5: الأحافير والحفريات وتطور الكائنات الحية وحمايتها من الانقراض',
    titleEn: 'Lecture 5: Fossils, Evolutionary Evidence & Protecting Species from Extinction',
    subtitleAr: 'أنواع الحفريات (كائن كامل، قالب، طابع، متحجرة)، الأهمية الجيولوجية، الحفرية المرشدة، أسباب الانقراض والمحميات الطبيعية',
    subtitleEn: 'Fossil types (solid mold, cast, petrified, amber/mammoth), index fossils, petroleum exploration, extinction causes & natural protectorates (Ras Mohamed, Wadi El-Hitan).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - العلوم والساينس',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - General Science & Paleontology',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Science Curriculum',
    unitTitleAr: 'الوحدة الثالثة: الحفريات وحماية الأنواع من الانقراض (Fossils & Species Protection)',
    unitTitleEn: 'Unit 3: Fossils & Protection of Living Species',
    lessonNumberAr: 'الدرس 5: أنواع الحفريات وأهميتها العلمية وحماية التنوع البيولوجي',
    lessonNumberEn: 'Lesson 5: Fossil Formations, Evolutionary History & Anti-Extinction Reserves',

    warmupHookAr: 'كيف استطاع العلماء معرفة أن جبل المقطم في القاهرة كان قاع بحر دافئ منذ 35 مليون سنة؟ وكيف عرفنا شكل وأحجام الديناصورات والماموث العملاق بالرغم من انقراضها قبل ملايين السنين؟ الجواب محفور في الصخور الرسوبية: إنها الحفريات والأحافير، سجل الأرض الحجري المدهش!',
    warmupHookEn: 'How do we know Cairo Mokattam mountain was once an ancient ocean floor 35 million years ago? Discover the fossil record, evolutionary transition species like Archaeopteryx, and global conservation protectorates!',

    learningOutcomesAr: [
      'أن يعرّف الحفريات (Fossils) ويصنف أنواعها الأربعة (حفرية كائن كامل، قالب مصمت، طابع، وحفريات متحجرة)',
      'أن يشرح شروط تكون الحفريات (وجود هيكل صلب، دفن سريع في وسط عازل للأكسجين، وإحلال المعادن)',
      'أن يوضح الأهمية العلمية للحفريات: تحديد العمر النسبي للصخور بـ (الحفرية المرشدة Index Fossil)، الاستدلال على البيئات القديمة، ودراسة تطور الحياة والتنقيب عن البترول (الفورامنيفرا والراديولاريا)',
      'أن يحلل أسباب الانقراض في العصور القديمة (النيازك والعصور الجليدية) والعصور الحديثة (تدمير البيئة والصيد الجائر)',
      'أن يقارن بين الأنظمة البيئية البسيطة والمركبة ويحدد دور المحميات الطبيعية (مثل وادي الحيتان ورأس محمد) في حماية الأنواع المهددة'
    ],
    learningOutcomesEn: [
      'Define fossils and classify into 4 categories: complete organism, solid mold, cast/impression, and petrified fossils',
      'Explain fossilization prerequisites: hard skeletal anatomy, rapid anaerobic burial, and mineral replacement',
      'Apply index fossils to determine sedimentary rock age, paleoenvironments, evolution links (Archaeopteryx), and oil exploration (Foraminifera, Radiolaria)',
      'Analyze ancient mass extinction causes vs contemporary anthropogenic extinction drivers',
      'Compare simple desert vs complex rainforest ecosystems and evaluate conservation reserves (Wadi El-Hitan, Ras Mohamed)'
    ],

    vocabulary: [
      {
        termAr: 'الحفرية (Fossil)',
        termEn: 'Fossil',
        definitionAr: 'آثار وبقايا الكائنات الحية القديمة المحفوظة في الصخور الرسوبية منذ ملايين السنين.',
        definitionEn: 'The preserved remains or traces of ancient organisms embedded in sedimentary rock strata.'
      },
      {
        termAr: 'الحفرية المرشدة (Index Fossil)',
        termEn: 'Index Fossil',
        definitionAr: 'حفرية لكائن حي عاش لمدى زمني قصير ومدى جغرافي واسع ثم انقرض، وتستخدم لتحديد العمر النسبي للصخور الرسوبية.',
        definitionEn: 'A fossil of an organism that existed over a short geological timespan and wide geographic distribution, dating rock layers.'
      },
      {
        termAr: 'الانقراض (Extinction)',
        termEn: 'Extinction',
        definitionAr: 'التناقص المستمر في أعداد أفراد نوع من الكائنات الحية دون تعويض حتى موت كل أفراد هذا النوع تماماً.',
        definitionEn: 'The continuous, irreversible decrease in the population of a species ending with the death of its last surviving individual.'
      },
      {
        termAr: 'المحمية الطبيعية (Natural Protectorate)',
        termEn: 'Natural Protectorate / Reserve',
        definitionAr: 'مساحة مخصصة ومحمية قانونياً للحفاظ على الكائنات الحية المهددة بالانقراض وتأمين بيئتها الطبيعية.',
        definitionEn: 'A designated secure geographic territory managed to conserve endangered biodiversity in natural habitats.'
      }
    ],

    keyConceptsAr: [
      'أنواع الحفريات الأربعة: 1) كائن كامل (حفظ سريع في وسط عازل للتحلل مثل الماموث في الجليد والكهرمان Amber). 2) قالب مصمت Mold (نسخة لتفاصيل السطح الداخلي مثل الأمونايت والنيمولايت والتريلوبيت). 3) طابع Cast (نسخة لتفاصيل السطح الخارجي مثل طابع سمكة أو نبات السرخسيات). 4) متحجرة Petrified (إحلال مادة السيليكا المعدنية محل المادة العضوية جزءاً بجزء مثل الأخشاب المتحجرة وبيض الديناصور)',
      'أهمية الحفريات: تحديد العمر النسبي للصخور الرسوبية (الحفرية المرشدة) + الاستدلال على البيئات القديمة (النيمولايت تدل على قاع بحر جبل المقطم، السرخسيات بيئة استوائية حارة ممطرة، والمرجان بحار دافئة صافية) + دراسة تطور الحياة (الأركيوبتركس حلقة وصل بين الزواحف والطيور) + التنقيب عن البترول (الفورامنيفرا والراديولاريا)',
      'الانقراض: قديم (اصطدام نيازك كبرى، انبعاث غازات بركانية سامة، وحلول عصور جليدية طويلة أدت لانقراض الديناصورات والماموث) | حديث (تدمير الموطن الطبيعي، الصيد الجائر، والتلوث البيئي مثل انقراض طائر الدودو Dodo وحيوان الكواجا Quagga)',
      'الأنظمة البيئية: نظام بيئي بسيط (كالصحراء قليل الأنواع يتأثر بشدة بغياب أي نوع) vs نظام بيئي مركب (كالغابة الاستوائية متعدد الأنواع لا يتأثر بسهولة لوجود بدائل)',
      'المحميات الطبيعية: محمية رأس محمد في مصر (حماية الشعاب المرجانية والأسماك النادرة)، محمية وادي الحيتان بالفيوم (موقع تراث عالمي يحتوي هياكل عظمية كاملة لحيتان عمرها 40 مليون سنة)، ومحمية يلوستون بأمريكا (حماية الدب الرمادي)'
    ],
    keyConceptsEn: [
      'Four Fossil Types: Complete organism (ice mammoth, amber insects), Solid mold (internal shell details: Ammonite, Nummulites), Cast/Impression (external details: fish/fern cast), and Petrified fossils (silica mineralization: petrified wood, dinosaur eggs)',
      'Fossil Significance: Geological age dating via Index Fossils, paleoenvironment reconstruction, evolutionary transitions (Archaeopteryx: reptile-bird link), and petroleum microfossils (Foraminifera, Radiolaria)',
      'Extinction Catalysts: Ancient catastrophic causes (meteorite impact, ice ages, volcanic toxicity) vs Modern anthropogenic causes (habitat destruction, poaching, pollution like Dodo and Quagga)',
      'Ecosystem Dynamics: Simple ecosystems (deserts: fragile, highly vulnerable to species loss) vs Complex ecosystems (rainforests: resilient with multiple alternative food chains)',
      'Conservation Protectorates: Ras Mohamed (coral reefs/marine fauna), Wadi El-Hitan (complete 40-million-year-old whale fossil skeletons - UNESCO site), Yellowstone (grizzly bear)'
    ],
    summaryAr: 'خاتمة منهج العلوم للصف الثاني الإعدادي: دراسة الحفريات وأنواعها الأربعة وشروط تكونها، استنتاج البيئات القديمة والأعمار الجيولوجية وتطور الأحياء، وأسباب الانقراض ودور المحميات الطبيعية في حماية التنوع البيولوجي.',
    summaryEn: 'Comprehensive concluding unit on paleontology and biodiversity: fossil taxonomy, fossilization mechanisms, evolutionary index markers, ancient vs modern extinction drivers, and natural protectorate conservation ecosystems.',

    sections: [
      {
        titleAr: '1. أنواع الحفريات الأربعة وشروط تكونها',
        titleEn: '1. Four Fossil Types & Fossilization Prerequisites',
        contentAr: 'الحفرية هي أثر أو بقايا كائن حي قديم محفوظ في الصخور الرسوبية. شروط التكون: 1) وجود هيكل صلب للكائن (عظام، أصداف، أسنان). 2) الدفن السريع فور الموت في وسط يحميه من التحلل. 3) توفر وسط ملائم لتحل فيه المعادن محل المادة العضوية. أنواع الحفريات: 1) حفرية كائن كامل: دفن في الجليد (مثل فيل الماموث المحفوظ بلحمه وشعره) أو في الكهرمان (صمغ أشجار صنوبرية حفظ الحشرات). 2) حفرية القالب المصمت (Mold): نسخة طبق الأصل للتفاصيل الداخلية لهيكل الكائن (مثل حفرية الأمونايت والنيمولايت). 3) حفرية الطابع (Cast): نسخة للتفاصيل الخارجية (مثل طابع سمكة أو طابع سرخسيات). 4) الحفريات المتحجرة: إحلال المعادن (كالسيليكا) محل المادة العضوية جزءاً بجزء (مثل الأخشاب المتحجرة وسن الديناصور).',
        contentEn: 'Fossils require hard skeletal parts, rapid anaerobic burial, and mineralizing media. Types: 1) Complete organism (Mammoth in ice, Insects in amber resin). 2) Solid mold (internal shell casting: Ammonite, Nummulites). 3) Cast/Impression (external surface imprint: fish/fern cast). 4) Petrified fossils (mineral replacement by silica: petrified wood, dinosaur bones).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: التمييز العملي بين القالب المصمت (Mold) والطابع (Cast)',
          titleEn: 'Worked Example 1: Differentiating Solid Mold vs External Cast in Paleontology',
          equation: 'القالب (Mold) = تفاصيل السطح الداخلي | الطابع (Cast) = تفاصيل السطح الخارجي',
          steps: [
            {
              stepNumber: 1,
              textAr: 'صنع قالب جبسي: ملء قوقعة بالجبس حتى يجف ثم كسر القوقعة -> نحصل على قالب مصمت (Mold) يوضح التفاصيل الداخلية.',
              textEn: 'Fill shell with plaster to produce internal solid mold.',
              noteAr: 'القالب المصمت'
            },
            {
              stepNumber: 2,
              textAr: 'صنع طابع بالصلصال: الضغط بقوقعة أو ورقة شجر على الصلصال -> نحصل على طابع (Cast) يوضح التفاصيل والزخارف الخارجية.',
              textEn: 'Press leaf onto clay to replicate external impression cast.',
              noteAr: 'حفرية الطابع'
            },
            {
              stepNumber: 3,
              textAr: 'الأخشاب المتحجرة: تعتبر صخوراً حفرية لأنها تدل على تفاصيل حياة نباتات قديمة بالرغم من تحولها لمادة صخرية بالسيليكا.',
              textEn: 'Petrified wood retains internal tree ring anatomy mineralized by silica.',
              noteAr: 'التحجر المعدني'
            }
          ],
          takeawayAr: 'الأثر (Trace) هو ما يتركه الكائن أثناء حياته (كأثر أقدام الديناصور)، بينما البقايا (Remains) هي ما يتبقى منه بعد موته (كأسنان الديناصور).',
          takeawayEn: 'Trace fossils record living activity (footprints, burrows); Remains are physical body parts left after death.'
        },
        formativeCheck: {
          id: 'fc-sci8-5-1',
          questionAr: 'حفرية فيل الماموث المحفوظة بكامل تفاصيلها في جليد سيبيريا تُعد مثالاً على:',
          questionEn: 'The mammoth fossil preserved intact in Siberian ice represents an example of:',
          optionsAr: ['حفرية كائن كامل', 'حفرية قالب مصمت', 'حفرية طابع', 'حفرية متحجرة'],
          optionsEn: ['Complete organism fossil', 'Solid mold fossil', 'Cast fossil', 'Petrified fossil'],
          correctIndex: 0,
          explanationAr: 'الماموث حفرية كائن كامل لأنه دُفن سريعاً فور موته في الجليد الذي حفظه من التحلل.',
          explanationEn: 'The woolly mammoth is a complete organism fossil rapidly entombed in anaerobic cryogenic ice.',
          hintAr: 'كائن محفوظ بشعره ولحمه دون تحلل.'
        },
        tipsAr: [
          'الكهرمان هو مادة صمغية كانت تفرزها الأشجار الصنوبرية القديمة ثم تجمدت وحفظت الحشرات بداخلها كحفرية كائن كامل.',
          'الأخشاب المتحجرة تتكون بعملية التحجر بإحلال مادة السيليكا محل مادة الخشب السليلوزية جزءاً بجزء.'
        ],
        tipsEn: [
          'Amber is fossilized tree resin that encapsulated ancient insects forming complete organism fossils.',
          'Petrified wood forms through petrifaction where silica replaces plant cellular tissue part by part.'
        ]
      },
      {
        titleAr: '2. الأهمية العلمية للحفريات وتطور الأحياء',
        titleEn: '2. Scientific Value of Fossils: Rock Dating, Paleoecology & Evolution',
        contentAr: 'للحفريات 4 استخدامات علمية كبرى: 1) تحديد العمر النسبي للصخور الرسوبية: باستخدام الحفريات المرشدة (Index Fossils) لكائنات عاشت لمدى زمني قصير ومدى جغرافي واسع. 2) الاستدلال على البيئات القديمة: وجود حفريات النيمولايت (Nummulites) في صخور جبل المقطم يثبت أنه كان قاع بحر منذ أكثر من 35 مليون سنة، وحفريات نبات السرخسيات تدل على بيئة استوائية حارة ممطرة، والمرجان يدل على بحار دافئة ضحلة صافية. 3) دراسة تطور الحياة: توضح الحفريات تدرج الحياة من البسيط للمعقد (في النباتات: الطحالب سبقت الحزازيات والسرخسيات، وعاريات البذور سبقت كاسيات البذور | في الحيوانات: اللافقاريات سبقت الفقاريات، والأسماك أول الفقاريات ثم البرمائيات ثم الزواحف ثم ظهرت الطيور والثدييات معاً). وطائر الأركيوبتركس (Archaeopteryx) حلقة وصل شهيرة تجمع بين صفات الزواحف والطيور. 4) التنقيب عن البترول: وجود حفريات كائنات دقيقة مثل الفورامنيفرا (Foraminifera) والراديولاريا (Radiolaria) يدل على ملاءمة الظروف لتكون البترول.',
        contentEn: 'Fossils serve 4 core applications: Index Fossils date sedimentary strata; Paleoecology indicators (Nummulites in Mokattam proves ancient seabed 35 mya, Ferns show tropical climate, Corals show warm shallow seas); Evolutionary progression (Algae -> Ferns -> Gymnosperms -> Angiosperms; Invertebrates -> Fish -> Amphibians -> Reptiles -> Birds/Mammals; Archaeopteryx is reptile-bird transitional link); and Petroleum exploration via microfossils (Foraminifera, Radiolaria).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: كيف أثبتت حفرية النيمولايت أن جبل المقطم كان قاع بحر؟',
          titleEn: 'Worked Example 2: How Nummulites Proved Mokattam Mountain was an Ancient Ocean',
          equation: 'حفريات النيمولايت في الحجر الجيري للمقطم  -->  كائنات بحرية  -->  المقطم كان قاع بحر قبل 35 مليون سنة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'العثور على حفريات قواقع النيمولايت (Nummulites) بكثرة في صخور الحجر الجيري لهضبة المقطم.',
              textEn: 'Abundant Nummulites fossils discovered in Mokattam limestone.',
              noteAr: 'الكشف الأحفوري'
            },
            {
              stepNumber: 2,
              textAr: 'كائن النيمولايت كائن بحري رخوي لا يعيش إلا في قيعان البحار الضحلة الدافئة.',
              textEn: 'Nummulites organisms inhabited exclusively warm shallow marine seabeds.',
              noteAr: 'البيئة الطبيعية للكائن'
            },
            {
              stepNumber: 3,
              textAr: 'الاستنتاج الجيولوجي: منطقة جبل المقطم الحالية كانت مغمورة بمياه البحر منذ أكثر من 35 مليون سنة (في عصر الإيوسين).',
              textEn: 'Conclusion: Cairo Mokattam plateau was submerged under sea 35 million years ago.',
              noteAr: 'إثبات جيولوجي قاطع'
            }
          ],
          takeawayAr: 'الحفرية المرشدة تدل على عمر الصخور لأنها لكائن ظهر واختفى في فترة زمنية قصيرة، بينما حفريات البيئة تدل على المناخ القديم.',
          takeawayEn: 'Index fossils establish strata chronology; paleoecological fossils reconstruct prehistoric climate.'
        },
        formativeCheck: {
          id: 'fc-sci8-5-2',
          questionAr: 'حفرية طائر "الأركيوبتركس" (Archaeopteryx) تمثل حلقة وصل هامة في التطور بين:',
          questionEn: 'The Archaeopteryx fossil represents an important evolutionary transitional link between:',
          optionsAr: ['الزواحف والطيور', 'الأسماك والبرمائيات', 'البرمائيات والزواحف', 'الطيور والثدييات'],
          optionsEn: ['Reptiles and Birds', 'Fish and Amphibians', 'Amphibians and Reptiles', 'Birds and Mammals'],
          correctIndex: 0,
          explanationAr: 'طائر الأركيوبتركس يجمع بين صفات الزواحف (أسنان ومخالب في الأجنحة وذيل عظمي) وصفات الطيور (الريش ومنقار الطير).',
          explanationEn: 'Archaeopteryx exhibits mosaic transitional anatomy combining reptilian claws/teeth/tail with avian feathers.',
          hintAr: 'يجمع بين صفات الزواحف وصفات الطيور.'
        },
        tipsAr: [
          'الفورامنيفرا والراديولاريا كائنات حية دقيقة مجهرية يستدل بوجودها في عينات الصخور على وجود آبار البترول وعمر الصخور.',
          'الأسماك هي أول من ظهر من الفقاريات على مسرح الحياة ثم تلتها البرمائيات ثم الزواحف.'
        ],
        tipsEn: [
          'Microfossils like Foraminifera and Radiolaria in well borehole drill cuttings guide petroleum reservoir exploration.',
          'Fish represent the earliest vertebrate class to evolve, followed by amphibians and reptiles.'
        ]
      },
      {
        titleAr: '3. الانقراض وأسبابه في العصور القديمة والحديثة',
        titleEn: '3. Extinction Dynamics: Ancient Catastrophes vs Modern Anthropogenic Drivers',
        contentAr: 'الانقراض هو التناقص المستمر لأفراد النوع دون تعويض حتى موت آخر فرد. لحظة الانقراض هي تاريخ موت آخر كائن حي من هذا النوع. 1) الانقراضات الكبرى القديمة: سببها كوارث طبيعية كبرى مثل اصطدام نيازك ضخمة بالأرض، الغازات السامة الناتجة من البراكين العنيفة، وحلول عصور جليدية طويلة أدت لانقراض الديناصورات وحيوان الماموث وثلاثية الفصوص (التريلوبيت). 2) الانقراضات الحديثة: سببها الأنشطة البشرية الجائرة مثل تدمير المواطن الطبيعية (قطع الغابات الاستوائية)، الصيد الجائر للحيوانات، والتلوث البيئي والتغيرات المناخية. من الكائنات المنقرضة حديثاً: طائر الدودو Dodo (طائر لا يطير لصغر أجنحته فكان فريسة سهلة للصيادين)، وحيوان الكواجا Quagga (يجمع بين شكل الحصان والحمار الوحشي).',
        contentEn: 'Extinction is the irreversible total loss of a biological species. Ancient mass extinctions were triggered by asteroid collisions, volcanic outgassing, and global ice ages (Dinosaurs, Trilobites). Contemporary extinctions are driven by habitat destruction, poaching, pollution, and climate change (Dodo bird, Quagga).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: دراسة أسباب انقراض طائر الدودو Dodo حديثاً',
          titleEn: 'Worked Example 3: Case Study of the Extinct Dodo Bird',
          equation: 'أجنحة صغيرة لا تطير + أرجل قصيرة + صيد جائر للإنسان  -->  انقراض طائر الدودو',
          steps: [
            {
              stepNumber: 1,
              textAr: 'عاش طائر الدودو في جزيرة موريشيوس المنعزلة دون وجود مفترسات طبيعية.',
              textEn: 'Dodo evolved on isolated Mauritius island with zero natural predators.',
              noteAr: 'بيئة معزولة'
            },
            {
              stepNumber: 2,
              textAr: 'كان الطائر يمتلك أجنحة صغيرة جداً لا تمكنه من الطيران، وأرجلاً قصيرة تجعل حركته بطيئة، ويبني عشه على الأرض مباشرة.',
              textEn: 'Vestigial small wings prevented flight; nested on ground.',
              noteAr: 'صفات تشريحية'
            },
            {
              stepNumber: 3,
              textAr: 'عند وصول البحارة والصيادين تم صيده وافتراس بيضه بسهولة حتى انقرض تماماً في القرن السابع عشر.',
              textEn: 'Human sailors and introduced pests drove total extinction by 17th century.',
              noteAr: 'انقراض حديث'
            }
          ],
          takeawayAr: 'انقراض نوع واحد من الكائنات الحية قد يؤدي إلى اضطراب السلاسل والشبكات الغذائية في النظام البيئي بأكمله.',
          takeawayEn: 'Extinction of a single keystone species disrupts ecological food webs and biodiversity equilibrium.'
        },
        formativeCheck: {
          id: 'fc-sci8-5-3',
          questionAr: 'أي من الكائنات التالية يُعد مثالاً لحيوان انقرض في العصور الحديثة بفعل الصيد الجائر؟',
          questionEn: 'Which of the following animals is an example of modern extinction caused by overhunting?',
          optionsAr: ['طائر الدودو وحيوان الكواجا', 'حيوان الديناصور', 'فيل الماموث', 'ثلاثية الفصوص (التريلوبيت)'],
          optionsEn: ['Dodo bird and Quagga', 'Dinosaur', 'Mammoth', 'Trilobite'],
          correctIndex: 0,
          explanationAr: 'طائر الدودو والكواجا انقرضا في العصور الحديثة نتيجة التدخل البشري والصيد الجائر.',
          explanationEn: 'The Dodo and Quagga are classic modern extinctions driven directly by human exploitation.',
          hintAr: 'طائر لا يطير وحيوان يشبه الحصان والحمار الوحشي.'
        },
        tipsAr: [
          'حيوان الكواجا هو حيوان ثديي منقرض حديثاً يجمع نصفه الأمامي شكل الحمار الوحشي المخطط ونصفه الخلفي شكل الحصان.',
          'تدمير الغابات الاستوائية المطيرة يتسبب في فقدان نحو 68 نوعاً من الأشجار والكائنات يومياً.'
        ],
        tipsEn: [
          'The Quagga was a zebra subspecies with striping confined to the head and neck, extinct since 1883.',
          'Tropical rainforest deforestation eliminates an estimated 68 species daily from habitat loss.'
        ]
      },
      {
        titleAr: '4. حماية الكائنات الحية والمحميات الطبيعية في مصر والعالم',
        titleEn: '4. Biodiversity Conservation & Natural Protectorates (Egypt & Global)',
        contentAr: '1) الأنظمة البيئية وتأثرها بالانقراض: أ) نظام بيئي بسيط (مثل الصحراء): قليل الأنواع، يتأثر بشدة عند غياب أو انقراض أحد أنواعه لعدم وجود بدائل تعوض غيابه في السلسلة الغذائية. ب) نظام بيئي مركب (مثل الغابة الاستوائية): كثير الأنواع ومتشابك السلاسل، لا يتأثر كثيراً عند انقراض أحد أنواعه لوجود بدائل متعددة تقوم بدوره. 2) الكائنات المهددة بالانقراض: دب الباندا، الخرتيت (وحيد القرن)، كبش أروى، طائر أبو منجل، ونبات البردي في مصر الفرعونية. 3) المحميات الطبيعية: أماكن آمنة تُخصص للحفاظ على الأنواع المهددة بالانقراض وإعادة إكثارها. من أهمها: أ) محمية رأس محمد (أول محمية في مصر 1983 بجنوب سيناء): لحماية الشعاب المرجانية النادرة والأسماك الملونة. ب) محمية وادي الحيتان (بمحافظة الفيوم): أدرجتها اليونسكو كموقع تراث عالمي لاحتوائها على هياكل عظمية كاملة لحيتان عمرها 40 مليون سنة. ج) محمية يلوستون (بأمريكا): لحماية الدب الرمادي.',
        contentEn: 'Simple ecosystems (deserts) are fragile to species loss; complex ecosystems (rainforests) possess trophic redundancies. Endangered species include Panda, Rhinoceros, Arrui barbary sheep, Ibis bird, and Papyrus. Natural Protectorates preserve biodiversity: Ras Mohamed (coral reefs/marine fauna), Wadi El-Hitan in Fayoum (UNESCO fossil site with 40-million-year-old whale skeletons), and Yellowstone (Grizzly bears).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: مقارنة النظام البيئي الصحراوي البسيط بالغابة الاستوائية المركبة',
          titleEn: 'Worked Example 4: Desert Simple Ecosystem vs Rainforest Complex Ecosystem',
          equation: 'صحراء (بدائل قليلة = تأثر شديد)  vs  غابة استوائية (بدائل متعددة = توازن مستقر)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الصحراء: مسار غذائي محدود: عشب -> جراد -> ثعبان -> صقر. انقراض الثعبان يؤدي لتكاثر الجراد وهلاك العشب وموت الصقر.',
              textEn: 'Desert linear chain breaks upon loss of single link.',
              noteAr: 'نظام بسيط وهش'
            },
            {
              stepNumber: 2,
              textAr: 'الغابة الاستوائية: شبكة غذائية معقدة تضم مئات الفرائس والمفترسات. غياب نوع يعوضه نوع آخر فوراً.',
              textEn: 'Rainforest complex food web absorbs losses via alternative prey.',
              noteAr: 'نظام مركب متزن'
            },
            {
              stepNumber: 3,
              textAr: 'دور المحميات: إنشاء بنوك للجينات وتربية وتوطين الكائنات المهددة في بيئتها الأصلية وإعادتها للطبيعة.',
              textEn: 'Reserves breed endangered species and restore wild populations.',
              noteAr: 'إدارة المحميات'
            }
          ],
          takeawayAr: 'محمية وادي الحيتان بالفيوم تُعد من أعظم متاحف الحفريات المفتوحة في العالم وتثبت تاريخ تطور الحيتان من كائنات برية إلى كائنات بحرية.',
          takeawayEn: 'Wadi El-Hitan (Whale Valley) in Egypt provides iconic paleontological proof of cetacean land-to-sea evolution.'
        },
        formativeCheck: {
          id: 'fc-sci8-5-4',
          questionAr: 'أول محمية طبيعية تم إنشاؤها في جمهورية مصر العربية عام 1983 هي محمية:',
          questionEn: 'The first established natural protectorate in Egypt (1983) is:',
          optionsAr: ['محمية رأس محمد (بجنوب سيناء)', 'محمية وادي الحيتان (بالفيوم)', 'محمية يلوستون', 'محمية وادي الريان'],
          optionsEn: ['Ras Mohamed (South Sinai)', 'Wadi El-Hitan (Fayoum)', 'Yellowstone', 'Wadi El-Rayan'],
          correctIndex: 0,
          explanationAr: 'محمية رأس محمد هي أول محمية أُنشئت في مصر عام 1983 لحماية الشعاب المرجانية النادرة والأسماك الملونة.',
          explanationEn: 'Ras Mohamed in South Sinai was designated as Egypt’s first marine national park in 1983.',
          hintAr: 'تقع في جنوب سيناء وتشتهر بالشعاب المرجانية.'
        },
        tipsAr: [
          'نبات البردي استخدمه الفراعنة في صناعة ورق الكتابة وهو من النباتات المهددة بالانقراض في مصر.',
          'محمية وادي الحيتان بالفيوم تم إدراجها ضمن قائمة التراث الطبيعي العالمي لليونسكو عام 2005.'
        ],
        tipsEn: [
          'Papyrus was used by Ancient Egyptians for writing scrolls and is an endangered native plant.',
          'Wadi El-Hitan was inscribed as a UNESCO World Natural Heritage site in 2005.'
        ]
      }
    ],

    conceptMapAr: [
      'أنواع الحفريات: كائن كامل (ماموث وكهرمان) + قالب مصمت (أمونايت) + طابع (سمكة وسرخسيات) + متحجرة (أخشاب بسيليكا)',
      'أهمية الحفريات: الحفرية المرشدة (عمر الصخور) + بيئات قديمة (نيمولايت = بحر) + تطور (أركيوبتركس) + بترول (فورامنيفرا)',
      'الانقراض: قديم (نيازك وعصور جليدية كالديناصور) + حديث (صيد جائر وتدمير الموطن كالدودو والكواجا)',
      'المحميات: رأس محمد (مرجان وأسماك) + وادي الحيتان (حفريات حيتان كاملة بالفيوم) + يلوستون (دب رمادي)'
    ],
    conceptMapEn: [
      'Fossil Classes: Complete (mammoth, amber), Solid mold (ammonite), Cast (fish/fern), Petrified (silica wood)',
      'Applications: Index fossils (dating), Paleoenvironments (Nummulites seabed), Evolution (Archaeopteryx), Oil (Foraminifera)',
      'Extinctions: Ancient mass extinctions (Dinosaurs) vs Modern anthropogenic losses (Dodo, Quagga)',
      'Reserves: Ras Mohamed (coral reefs), Wadi El-Hitan (whale fossils - UNESCO), Yellowstone (grizzly bears)'
    ],

    textbookExercises: [
      {
        id: 'ex-sci8-5-1',
        questionAr: 'علل لما يأتي: 1) يعتبر جبل المقطم جزءاً من قاع بحر منذ أكثر من 35 مليون سنة. 2) يتأثر النظام البيئي الصحراوي بشدة عند غياب أحد أنواعه.',
        questionEn: 'Explain: 1) Why Mokattam mountain was part of a seabed 35 mya. 2) Why desert ecosystems suffer heavily from species loss.',
        solutionStepsAr: [
          '1) لوجود حفريات قواقع النيمولايت (Nummulites) بكثرة في صخور أحجاره الجيرية وهي كائنات بحرية لا تعيش إلا في قيعان البحار.',
          '2) لأن النظام البيئي الصحراوي نظام بيئي بسيط قليل الأنواع والبدائل، فلا توجد كائنات بديلة تعوض غياب الكائن المنقرض في السلسلة الغذائية.'
        ],
        solutionStepsEn: [
          '1) Abundance of marine Nummulites fossils embedded in its limestone rocks proves it was a submerged ocean floor.',
          '2) The desert is a simple ecosystem with low biodiversity and few alternative food chain links to replace lost species.'
        ],
        answerAr: '1) لوجود حفريات النيمولايت البحرية في صخوره • 2) لأنه نظام بيئي بسيط قليل الأنواع والبدائل.',
        answerEn: '1) Presence of marine Nummulites fossils • 2) Simple fragile ecosystem with low species diversity.'
      }
    ],

    assessment: {
      id: 'quiz-sci8-5',
      lectureId: 'sci8-5',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 5: الأحافير والحفريات وتطور الكائنات والانقراض',
      titleEn: 'Mastery Assessment 5: Fossils, Evolutionary Progression & Extinction Prevention',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci8-5-1',
          textAr: 'تدل حفريات قواقع "النيمولايت" (Nummulites) الموجودة في صخور جبل المقطم على أن هذه المنطقة كانت:',
          textEn: 'Nummulites fossils in the limestone of Mokattam plateau prove this region was formerly a:',
          optionsAr: [
            'قاع بحر دافئ وضحل منذ أكثر من 35 مليون سنة',
            'غابة استوائية حارة ممطرة',
            'صحراء قاحلة شديدة الجفاف',
            'منطقة جليدية قطبية'
          ],
          optionsEn: [
            'Warm shallow seabed over 35 million years ago',
            'Hot tropical rainforest',
            'Arid desert landscape',
            'Polar glacial region'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الاستدلال على البيئة القديمة من حفرية النيمولايت',
          conceptTestedEn: 'Nummulites as a paleoenvironmental marine indicator',
          explanationAr: 'النيمولايت كائنات بحرية عاشت في قيعان البحار ووجودها في صخور المقطم يثبت أنه كان قاع بحر مغمور بالماء في عصر الإيوسين.',
          explanationEn: 'Nummulites are marine organisms; their abundance in limestone strata proves Mokattam was a submerged ocean floor.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-5-2',
          textAr: 'أي من الكائنات الحية الدقيقة التالية يستدل بوجود حفرياتها في صخور الآبار على ملاءمة الظروف لتكون البترول؟',
          textEn: 'Which microfossil organisms indicate favorable conditions for petroleum reservoir formation?',
          optionsAr: ['الفورامنيفرا والراديولاريا', 'الأمونايت والتريلوبيت', 'السرخسيات والنيمولايت', 'الماموث والديناصور'],
          optionsEn: ['Foraminifera and Radiolaria', 'Ammonite and Trilobite', 'Ferns and Nummulites', 'Mammoth and Dinosaur'],
          correctIndex: 0,
          conceptTestedAr: 'الحفريات الدقيقة المرشدة للبترول',
          conceptTestedEn: 'Petroleum microfossils (Foraminifera and Radiolaria)',
          explanationAr: 'الفورامنيفرا والراديولاريا كائنات دقيقة يستدل بوجودها في عينات الصخور على تحديد عمر الصخور وظروف تكون البترول.',
          explanationEn: 'Foraminifera and Radiolaria are petroleum index microfossils verifying thermal maturity and reservoir strata age.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-5-3',
          textAr: 'محمية "وادي الحيتان" بمحافظة الفيوم المصرية مدرجة ضمن مواقع التراث العالمي لليونسكو لاحتوائها على:',
          textEn: 'Wadi El-Hitan reserve in Fayoum is a UNESCO World Heritage site because it contains:',
          optionsAr: [
            'هياكل عظمية كاملة لحيتان عاشت منذ أكثر من 40 مليون سنة',
            'حفريات الديناصورات الطائرة',
            'أشجار متحجرة نادرة فقط',
            'أكبر تجمع للشعاب المرجانية'
          ],
          optionsEn: [
            'Complete fossil skeletons of whales dating back over 40 million years',
            'Flying dinosaur fossils',
            'Petrified trees exclusively',
            'Coral reef colonies'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أهمية ومحتويات محمية وادي الحيتان',
          conceptTestedEn: 'Significance of Wadi El-Hitan UNESCO whale fossil site',
          explanationAr: 'تحتوي محمية وادي الحيتان على هياكل حيتان كاملة عمرها 40 مليون سنة توضح تطور الحيتان من ثدييات برية إلى كائنات بحرية.',
          explanationEn: 'Wadi El-Hitan contains complete fossilized whale skeletons from 40 million years ago recording cetacean evolution.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-5-4',
          textAr: 'يتميز النظام البيئي البسيط (كالصحراء) بأنه:',
          textEn: 'A simple ecosystem like a desert is characterized by being:',
          optionsAr: [
            'قليل الأنواع ويتأثر بشدة عند غياب أحد أنواعه لعدم وجود بدائل',
            'كثير الأنواع ولا يتأثر بغياب أي كائن',
            'يحتوي على شبكات غذائية معقدة ومتشابكة',
            'محصن ضد الانقراض تماماً'
          ],
          optionsEn: [
            'Low species diversity, heavily destabilized upon loss of any species due to lack of substitutes',
            'High species diversity, unaffected by losses',
            'Rich in interconnected complex food webs',
            'Immune to extinction'
          ],
          correctIndex: 0,
          conceptTestedAr: 'خصائص النظام البيئي البسيط',
          conceptTestedEn: 'Simple ecosystem vulnerability dynamics',
          explanationAr: 'الصحراء نظام بيئي بسيط قليل التنوع، لذا فإن انقراض أي كائن يُحدث فجوة واضطراباً شديداً لعدم وجود بدائل تعوض دوره.',
          explanationEn: 'Simple ecosystems have limited trophic links; removing one species disrupts the entire food chain.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci8-5-5',
          textAr: 'جميع الكائنات التالية تُعد من الكائنات المهددة بالانقراض في العصر الحالي ما عدا:',
          textEn: 'All of the following are currently endangered living species EXCEPT:',
          optionsAr: ['طائر الدودو (Dodo)', 'دب الباندا (Panda)', 'وحيد القرن (الخرتيت)', 'طائر أبو منجل'],
          optionsEn: ['Dodo bird', 'Giant Panda', 'Rhinoceros', 'Ibis bird'],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين الكائنات المنقرضة بالفعل والمهددة بالانقراض',
          conceptTestedEn: 'Differentiating extinct species from endangered living species',
          explanationAr: 'طائر الدودو حيوان منقرض بالفعل تماماً منذ قرون، بينما الباندا والخرتيت وأبو منجل كائنات مهددة بالانقراض لا تزال تعيش.',
          explanationEn: 'The Dodo is already totally extinct; Pandas, Rhinos, and Ibis birds are living endangered species under conservation.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
