import type { Lecture } from '../types';

// ============================================================================
// REPUBLIC OF SUDAN - MINISTRY OF EDUCATION - BAKHT AL-RUDA
// جمهورية السودان - وزارة التعليم والتربية الوطنية
// المركز القومي للمناهج والبحث التربوي (بخت الرضا) - المرحلة الثانوية
// كتاب الجغرافيا والدراسات البيئية - الصف الأول الثانوي - الطبعة الأولى ٢٠٢٥م
// ============================================================================

export const SUDAN_HIGH_GEOGRAPHY_G10_LECTURES: Lecture[] = [
  // ── الوحدة الأولى: أسس الجغرافيا الطبيعية ──
  {
    id: 'sd-g10-geo-1',
    order: 1,
    subject: 'GEOGRAPHY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - الجغرافيا والدراسات البيئية (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Geography & Environmental Studies (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: أسس الجغرافيا الطبيعية',
    unitTitleEn: 'Unit 1: Foundations of Physical Geography',
    lessonNumberAr: 'الدرس الأول إلى الخامس: الكون، الأرض، التضاريس، وصخور القشرة',
    lessonNumberEn: 'Lessons 1 to 5: Universe, Earth, Relief, and Crustal Dynamics',
    titleAr: 'المحاضرة 1: أسس الجغرافيا الطبيعية والكون وأغلفة الأرض وتشكل التضاريس',
    titleEn: 'Lecture 1: Foundations of Physical Geography, the Universe, Earth Spheres, and Landforms',
    subtitleAr: 'فروع الجغرافيا والاتجاهات الرقمية الحديثة، الكون والمجموعة الشمسية، حركة الأرض وحساب الزمن، أغلفة الأرض الأربعة، وعوامل تشكيل التضاريس الباطنية والخارجية',
    subtitleEn: 'Geographical disciplines, cosmos, solar dynamics, time calculations, planetary spheres, and endogenic vs exogenic geomorphology.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تقف على ضفاف ملتقى النيلين الأبيض والأزرق في الخرطوم، أو تتأمل قمم بركان جبل مرة الخامد في دارفور، وسهول الجزيرة والبطانة المنبسطة، فأنت تشهد مئات الملايين من السنين من العمليات الجيولوجية الباطنية والخارجية! كيف تشكلت أغلفتنا الأرضية الأربعة؟ وكيف يحسب الجغرافيون فروق التوقيت بين عواصم العالم بخطوط الطول؟ وكيف أصبحت الجغرافيا اليوم علماً رقمياً يعتمد على الأقمار الاصطناعية والذكاء الاصطناعي لحماية البيئة؟',
    warmupHookEn: 'From the confluence of the two Niles in Khartoum to the dormant caldera of Jebel Marra, Earth is shaped by dynamic endogenic and exogenic forces. Discover how physical geography, celestial mechanics, and modern spatial AI decode our living planet.',
    learningOutcomesAr: [
      'أن يعرّف الطالب علم الجغرافيا وفروعه الطبيعية والبشرية والتقنية والاتجاهات الحديثة (GIS والذكاء الاصطناعي).',
      'أن يوضح مكونات الكون والمجموعة الشمسية وخصائص كوكب الأرض وحركتيه ونتائج ميل المحور 23.5 درجة.',
      'أن يطبق القواعد الرياضية لخطوط الطول في حساب فروق التوقيت الزمني بين مدن العالم بدقة.',
      'أن يميز بين أغلفة الأرض الأربعة (الصخري، الجوي، المائي، والحيوي) ويصنف صخور القشرة (نارية، رسوبية، متحولة).',
      'أن يحلل العوامل الباطنية البطيئة (التواءات وصدوع) والسريعة (زلازل وبراكين) والعوامل الخارجية (تجوية وتعرية) في تشكيل تضاريس السودان والعالم.'
    ],
    learningOutcomesEn: [
      'Define geography, branches, and modern paradigms including geospatial AI and GIS.',
      'Explain astronomical components, Earth’s axial tilt of 23.5 degrees, and diurnal/annual consequences.',
      'Calculate longitudinal time differences across global time zones.',
      'Characterize the four Earth spheres and classify igneous, sedimentary, and metamorphic rocks.',
      'Analyze slow/rapid endogenic and exogenic processes shaping Earth and Sudanese relief.'
    ],
    keyConceptsAr: [
      'فروع الجغرافيا والتحول الرقمي والذكاء الاصطناعي الجغرافي',
      'خصائص كوكب الأرض: انبعاج استوائي وتفلطح قطبي وميل المحور 23.5°',
      'حساب الزمن: كل 15 خط طول = 1 ساعة (4 دقائق لكل خط)',
      'أغلفة الأرض الأربعة وطبقات الغلاف الجوي (تروبوسفير، ستراتوسفير، ميزوسفير، أيونوسفير)',
      'صخور القشرة الأرضية: النارية (بازلت وجرانيت)، الرسوبية، والمتحولة (رخام ونايس)',
      'العوامل الباطنية (الأخدود الأفريقي العظيم وجبل مرة) والعوامل الخارجية (التجوية والتعرية)'
    ],
    keyConceptsEn: [
      'Geographical branches, digital GIS, and GeoAI',
      'Earth oblate spheroid geometry and 23.5 degree axial tilt',
      'Longitudinal time mathematics: 15 degrees per hour',
      'Atmospheric thermal layers: troposphere to ionosphere',
      'Igneous, sedimentary, and metamorphic petrology',
      'Endogenic plate rifting, vulcanism, and exogenic erosion'
    ],
    vocabulary: [
      {
        termAr: 'علم الجغرافيا (Geography)',
        termEn: 'Geography',
        definitionAr: 'العلم الذي يهتم بدراسة الظواهر الطبيعية والبشرية والعلاقة التفاعلية المتبادلة بينهما وما يترتب عليها من آثار وتوزيعات مكانية.'
      },
      {
        termAr: 'خط التاريخ الدولي (International Date Line)',
        termEn: 'International Date Line',
        definitionAr: 'خط وهمي يتطابق تقريباً مع خط طول 180° شرقاً وغرباً، ويعد الحد الفاصل لتحديد بداية اليوم ونهايته في التوقيت العالمي.'
      },
      {
        termAr: 'الغلاف الصخري (Lithosphere)',
        termEn: 'Lithosphere',
        definitionAr: 'النطاق الصخري الصلب الخارجي للأرض، يشمل القشرة الأرضية (طبقتي السيال الجرانيتية والسيما البازلتية) والجزء العلوي من الوشاح.'
      },
      {
        termAr: 'الأخدود الأفريقي العظيم (Great Rift Valley)',
        termEn: 'Great Rift Valley',
        definitionAr: 'أعظم نظام صدعي انكساري هابط في القشرة الأرضية يمتد من بلاد الشام عبر البحر الأحمر وشرق أفريقيا، مسبباً بحيرات ووديان صدعية ونشاطاً بركانياً.'
      },
      {
        termAr: 'التجوية والتعرية (Weathering & Erosion)',
        termEn: 'Weathering & Erosion',
        definitionAr: 'التجوية هي تفتت الصخور ميكانيكياً أو تحللها كيميائياً في موضعها دون نقل، بينما التعرية تشمل عمليات النحت والنقل والإرساب بعوامل الرياح والمياه.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الأولى من كتاب الجغرافيا والدراسات البيئية للصف الأول الثانوي (بخت الرضا ٢٠٢٥م): تؤسس الجغرافيا الطبيعية لفهم الكون والمجموعة الشمسية وحساب التوقيت عبر خطوط الطول، وتدرس تفاعل أغلفة الأرض الأربعة (الصخري والجوي والمائي والحيوي)، وتحلل القوى الباطنية كالصدوع والبراكين (مثل جبل مرة والأخدود الأفريقي) والقوى الخارجية كالتجوية والتعرية التي شكلت سهول وجبال السودان والعالم.',
    summaryEn: 'Summary of Unit 1: Foundations of Physical Geography cover celestial systems, time zone calculations, the four terrestrial spheres, rock classifications, and geomorphic endogenic and exogenic processes.',
    sections: [
      {
        titleAr: '1. علم الجغرافيا وفروعه والاتجاهات الرقمية الحديثة والكون',
        titleEn: '1. The Discipline of Geography, Modern Digital Trends, and Astronomy',
        contentAr: `**أ - تعريف الجغرافيا وفروعها الرئيسية:**
- **تعريف الجغرافيا:** هي العلم الذي يدرس الظواهر الطبيعية والبشرية والعلاقات المكانية والسببية المتبادلة بين الإنسان وبيئته وتأثير ذلك على التنمية وإدارة الموارد.
- **الفروع الأساسية:**
  1. **الجغرافيا الطبيعية:** تشمل الجغرافيا الفلكية، تضاريس الأرض (الجيومورفولوجيا)، الجغرافيا المناخية، جغرافيا المياه والهيدرولوجيا، جغرافيا البحار والمحيطات، وجغرافيا التربة والنبات.
  2. **التقنيات الجغرافية:** تضم علم الخرائط (الكارتوغرافيا)، المساحة الأرضية، الاستشعار عن بعد (Remote Sensing)، ونظم المعلومات الجغرافية (GIS).
  3. **الجغرافيا البشرية:** تضم جغرافيا السكان، الجغرافيا الاقتصادية، جغرافيا العمران الريفي والحضري، جغرافيا الخدمات والتخطيط، والجغرافيا السياسية.

**ب - الاتجاهات الحديثة في الجغرافيا:**
- **الاتجاه التطبيقي:** توجيه الدراسات الجغرافية نحو حل المشكلات الواقعية كالتخطيط الإقليمي واستخدامات الأراضي.
- **الاتجاه التقني ونظم المعلومات الجغرافية (GIS):** نمذجة البيانات المكانية رقمياً لإدارة البيئة والكوارث.
- **الذكاء الاصطناعي الجغرافي (GeoAI):** توظيف الخوارزميات الذكية في تحليل الصور الفضائية ونمذجة التغيرات المناخية والتنبؤ بالفيضانات.
- **التخصص والشمولية:** دمج التحليل العلمي الدقيق مع الرؤية الشاملة لعلاقات السبب والنتيجة.

**ج - الجغرافيا الفلكية والكون:**
- **الكون:** فضاء لا متناهٍ يحتوي على بلايين المجرات والأجرام السماوية المنضبطة بقوانين كونية بالغة الدقة.
- **المجرة:** تجمع عملاق يضم مليارات النجوم والغازات، ومجرتنا هي **مجرة درب التبانة (الطريق اللبني)** وهي مجرة حلزونية.
- **النظام الشمسي وكوكب الأرض:**
  - الشمس نجم غازي متوهج يمد الكواكب بالضوء والحرارة باندماج الهيدروجين إلى هيليوم.
  - كواكب المجموعة الشمسية الثمانية تدور في مدارات بيضاوية (إهليلجية) من الغرب إلى الشرق: **عطارد، الزهرة، الأرض (الثالث بعداً)، المريخ، المشتري (الأكبر حجماً وأسرعها دوراناً حول محوره)، زحل، أورانوس، ونبتون**.
  - **أبعاد وخصائص كوكب الأرض:**
    - المسطحات المائية تغطي 70.8% واليابس يغطي 29.2%، وتتركز معظم كتل اليابس في نصف الكرة الشمالي.
    - شكل الأرض **شبه كروي مفلطح عند القطبين ومنبعج عند خط الاستواء**؛ ولذلك فالقطر الاستوائي (12,756.8 كم) أطول من القطر القطبي (12,713.8 كم) بفارق 42.54 كم.
    - يميل محور الأرض بمقدار **23.5 درجة** عن العمود المقام، مما يسبب اختلاف زاوية سقوط أشعة الشمس وتعاقب الفصول الأربعة واختلاف طول الليل والنهار.`,
        contentEn: 'Geography integrates physical, human, and geospatial technical domains. Modern advances incorporate GIS and GeoAI. Planetary astronomy details the oblate Earth geometry with a 23.5 degree axial tilt.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: حساب زمن مدينة الخرطوم مقارنة بتوقيت غرينتش (GMT)',
          titleEn: 'Interactive Example 1: Calculating Solar Time Difference for Khartoum vs GMT',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: تقع الخرطوم على خط طول 32.5° شرقاً تقريباً، وخط غرينتش رقمه 0°. فرق خطوط الطول = 32.5 - 0 = 32.5 خط طول.',
              textEn: 'Khartoum lies at 32.5° E longitude; Greenwich is 0°. Difference = 32.5 degrees.'
            },
            {
              stepNumber: 2,
              textAr: 'حساب الفرق بالدقائق: كل خط طول يمثل 4 دقائق. الفرق بالدقائق = 32.5 × 4 = 130 دقيقة = ساعتان و 10 دقائق.',
              textEn: 'Time difference in minutes = 32.5 * 4 = 130 minutes (2 hours and 10 minutes).'
            },
            {
              stepNumber: 3,
              textAr: 'تطبيق الاتجاه: بما أن الخرطوم تقع شرق خط غرينتش، تضاف الساعات؛ فإذا كانت الساعة 12 ظهراً في لندن، تكون في الخرطوم 2:10 ظهراً.',
              textEn: 'Since Khartoum is eastward, time advances: 12:00 noon GMT corresponds to 14:10 Khartoum local time.'
            }
          ],
          takeawayAr: 'كل 15 خط طول تعادل فرق ساعة كاملة (60 دقيقة)، ويضاف الوقت شرقاً ويطرح غرباً.',
          takeawayEn: 'Earth rotates 15 degrees of longitude per hour (4 minutes per degree); advance eastward, subtract westward.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-1',
          questionAr: 'كم يبلغ مقدار ميل المحور الوهمي للأرض عن المستوى الرأسي العمودي؟',
          questionEn: 'What is the inclination angle of Earth’s rotational axis from the vertical?',
          optionsAr: ['23.5 درجة', '66.5 درجة', '45 درجة', '90 درجة'],
          optionsEn: ['23.5 degrees', '66.5 degrees', '45 degrees', '90 degrees'],
          correctIndex: 0,
          explanationAr: 'يميل محور دوران الأرض بزاوية قدرها 23.5 درجة عن العمود المقام، وهو المسؤول عن حدوث الفصول الأربعة واختلاف طول الليل والنهار.',
          explanationEn: 'The 23.5 degree axial tilt governs seasonal variations and daylight hour inequalities.'
        }
      },
      {
        titleAr: '2. أغلفة الأرض وصخور القشرة والعوامل الباطنية والخارجية للتضاريس',
        titleEn: '2. Earth Spheres, Crustal Petrology, and Geomorphic Processes',
        contentAr: `**أ - أغلفة كوكب الأرض الأربعة:**
1. **الغلاف الصخري (Lithosphere):** يتكون من النواة المركزية (اللب الداخلي الصلب واللب الخارجي المصهور)، والوشاح (الغطاء)، والقشرة الأرضية الرقيقة التي تنقسم إلى:
   - **السيال (SIAL):** صخور جرانيتية غنية بالسيليكا والألومنيوم وتكون كتل القارات.
   - **السيما (SIMA):** صخور بازلتية ثقيلة غنية بالسيليكا والمغنيسيوم وتكون قيعان المحيطات.
   - *أنواع الصخور:*
     - **نارية:** صلبة متبلورة ناتجة عن تبرد الصهارة (الماقما في الباطن كالجرانيت، أو اللافا على السطح كالبازلت).
     - **رسوبية:** طباقية تكونت من تراكم فتات الصخور أو ترسبات عضوية وكيميائية (كالحجر الرملي والحجر الجيري الغني بالحفريات).
     - **متحولة:** صخور نارية أو رسوبية تعرضت لضغط وحرارة جوفية شديدة فتغير نسيجها وتركيبها (مثل تحول الحجر الجيري إلى **رخام**، والجرانيت إلى **نايس**).
2. **الغلاف الجوي (Atmosphere):** يحمي الأرض ويتألف من طبقات رئيسية: **التروبوسفير** (طبقة الطقس والسحب)، **الستراتوسفير** (تحتوي على طبقة الأوزون الحامية من الأشعة فوق البنفسجية)، **الميزوسفير** (أبرد الطبقات وتحترق فيها الشهب)، و**الأيونوسفير/الثرموسفير** (طبقة متأينة مهمة للاتصالات اللاسلكية).
3. **الغلاف المائي (Hydrosphere):** يغطي 71% من مساحة الأرض، وتتحرك مياهه في دورة هيدرولوجية مغلقة مستمرة (تبخر، تكاثف، تساقط، وجريان).
4. **الغلاف الحيوي (Biosphere):** الحيز المكاني الذي تتفاعل فيه الكائنات الحية مع الأغلفة الثلاثة السابقة.

**ب - العوامل المؤثرة في تشكيل تضاريس الأرض:**
1. **عوامل باطنية بطيئة (حركات بانية للجبال):**
   - **الالتواءات (Folds):** انثناء طبقات الصخور الرسوبية المرنة بفعل الضغط الجانبي مكونة طيات محدبة (جبال) وطيات مقعرة (أودية)، مثل جبال الألب والهيمالايا وأطلس.
   - **الانكسارات والصدوع (Faults):** كسر يصيب الصخور الصلبة مصحوباً بزحزحة للكتل الصخرية؛ وأعظمها **الأخدود الأفريقي العظيم** الذي شكّل البحر الأحمر وخليج العقبة وبحيرات شرق أفريقيا.
2. **عوامل باطنية سريعة وعنيفة:**
   - **الزلازل:** هزات أرضية سريعة ومفاجئة تنشأ في بؤرة باطنية وتقاس شدتها بمقياس **رختر** عبر جهاز **السيسموجراف**.
   - **البراكين:** تدفقات الصهارة والغازات المنصهرة إلى السطح. ومن أشهر البراكين في السودان **بركان جبل مرة الخامد** بغرب السودان والذي يتميز ببحيرتين بركانيتين عند فوهته (كالديرة).
3. **عوامل خارجية (التجوية والتعرية):**
   - **التجوية:** تفتيت الصخور مكانياً دون نقل؛ وهي ميكانيكية (بتغير الحرارة وتجمد الماء) أو كيميائية (بالأكسدة والتحلل المائي والكربنة).
   - **التعرية:** نحت ونقل وإرساب بواسطة الرياح (الموائد الصحراوية والكثبان الرملية) والمياه الجارية في الأنهار (مرحلة الشباب والشلالات، مرحلة النضج، ومرحلة الشيخوخة وتكون السهول الفيضية الخصبة كسهول الجزيرة بدلتا النيلين بالسودان).`,
        contentEn: 'The four spheres interact continuously. Crustal rocks comprise igneous, sedimentary, and metamorphic types. Geomorphology balances tectonic folding/faulting and volcanism with weathering and river erosion.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: أثر العوامل التضاريسية في بيئة السودان (جبل مرة وسهول الجزيرة)',
          titleEn: 'Interactive Example 2: Geomorphic Features in Sudan (Jebel Marra & Gezira Plains)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'النشاط البركاني الباطني: جبل مرة غرب السودان هو هضبة بركانية بازلتية شاهقة تكونت عبر ثورات لافية تاريخية أوجدت تربة بركانية بالغة الخصوبة.',
              textEn: 'Volcanic activity created the fertile basaltic highlands of Jebel Marra in western Sudan.'
            },
            {
              stepNumber: 2,
              textAr: 'التعرية المائية النيلية: نهر النيل الأزرق والنيل الأبيض نهتا الطمي من الهضبة الإثيوبية ورسباه عبر آلاف السنين في مرحلة النضج والشيخوخة.',
              textEn: 'River erosion deposited alluvial volcanic silt forming the vast flat Gezira plain.'
            },
            {
              stepNumber: 3,
              textAr: 'النتيجة التنموية: انبساط سهول الجزيرة وخصوبة تربتها النيلية أتاحا إقامة أكبر مشروع زراعي مروي بإشراف هندسي ريادي في أفريقيا (مشروع الجزيرة).',
              textEn: 'Topographic flatness enabled the gravity irrigation infrastructure of the Gezira Agricultural Scheme.'
            }
          ],
          takeawayAr: 'تتكامل القوى الباطنية والتعرية النهرية لتشكيل البيئة التضاريسية والتربة الصالحة للزراعة والاستقرار البشري.',
          takeawayEn: 'Endogenic landforms and exogenic alluvial deposition forge agricultural plains and human settlements.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-2',
          questionAr: 'ما هو النوع الصخري الذي ينتمي إليه حجر الرخام بعد تعرض الحجر الجيري لضغط وحرارة شديدين؟',
          questionEn: 'Which petrological rock type does marble belong to after limestone undergoes high heat and pressure?',
          optionsAr: ['صخور متحولة', 'صخور نارية بركانية', 'صخور رسوبية كيميائية', 'صخور زجاجية خام'],
          optionsEn: ['Metamorphic rock', 'Extrusive igneous rock', 'Chemical sedimentary rock', 'Raw volcanic glass'],
          correctIndex: 0,
          explanationAr: 'الرخام صخر متحول ناتج عن تحول الصخر الرسوبي (الحجر الجيري) تحت وطأة الضغط والحرارة الجوفية العالية.',
          explanationEn: 'Marble is a metamorphic rock recrystallized from the sedimentary protolith limestone.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-geo-1-assess',
      titleAr: 'اختبار تقييم الوحدة الأولى: أسس الجغرافيا الطبيعية (منهج بخت الرضا ٢٠٢٥م)',
      titleEn: 'Unit 1 Assessment: Physical Geography Foundations (Bakht Al-Ruda 2025)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-g10-q1',
          textAr: 'إذا كانت الساعة في مدينة غرينتش (خط طول 0°) هي 12:00 ظهراً، فكم تكون الساعة في مدينة تقع على خط طول 60° شرقاً؟',
          textEn: 'If it is 12:00 noon at Greenwich (0°), what time is it in a city located at 60° E longitude?',
          optionsAr: ['4:00 عصراً (16:00)', '8:00 صباحاً', '2:00 بعد الظهر', '6:00 مساءً'],
          optionsEn: ['4:00 PM (16:00)', '8:00 AM', '2:00 PM', '6:00 PM'],
          correctIndex: 0,
          conceptTestedAr: 'حساب فرق الزمن عبر خطوط الطول',
          conceptTestedEn: 'Longitudinal time calculation',
          explanationAr: 'فرق الخطوط = 60 خط طول. بما أن كل 15 خط طول تمثل ساعة واحدة: 60 ÷ 15 = 4 ساعات. ونظراً لأن المدينة تقع شرقاً تضاف الساعات: 12 + 4 = 4:00 عصراً.',
          explanationEn: '60 degrees / 15 deg/hr = 4 hours. Being eastward of prime meridian, add 4 hours: 12:00 + 4 = 16:00 (4:00 PM).',
          difficulty: 'medium'
        },
        {
          id: 'sd-g10-q2',
          textAr: 'أي من الظواهر التضاريسية التالية في السودان يُعد مثالاً بارزاً على النشاط البركاني الباطني؟',
          textEn: 'Which topographic feature in Sudan is a prime example of volcanic activity?',
          optionsAr: ['جبل مرة', 'سهل الجزيرة', 'هضبة البطانة', 'صحراء العتمور'],
          optionsEn: ['Jebel Marra', 'Gezira Plain', 'Butana Plateau', 'Atmura Desert'],
          correctIndex: 0,
          conceptTestedAr: 'التضاريس البركانية في السودان',
          conceptTestedEn: 'Sudanese volcanic topography',
          explanationAr: 'جبل مرة في إقليم دارفور هو مجمع بركاني خامد شهير يحتوي على فوهات وبحيرات بركانية ومقذوفات بازلتية.',
          explanationEn: 'Jebel Marra is a renowned dormant volcanic complex in Darfur featuring calderas and crater lakes.',
          difficulty: 'easy'
        },
        {
          id: 'sd-g10-q3',
          textAr: 'ما هي الطبقة من طبقات الغلاف الجوي التي تحتوي على طبقة غاز الأوزون الممتصة للأشعة فوق البنفسجية الضارة؟',
          textEn: 'Which atmospheric layer contains the ozone layer that absorbs harmful UV rays?',
          optionsAr: ['الستراتوسفير', 'التروبوسفير', 'الميزوسفير', 'الأيونوسفير'],
          optionsEn: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Ionosphere'],
          correctIndex: 0,
          conceptTestedAr: 'طبقات الغلاف الجوي وطبقة الأوزون',
          conceptTestedEn: 'Atmospheric layers and ozone layer',
          explanationAr: 'تتركز طبقة الأوزون في الستراتوسفير بين ارتفاع 20 إلى 35 كم لحماية كوكب الأرض من الأشعة فوق البنفسجية القصيرة.',
          explanationEn: 'The ozone layer resides primarily within the stratosphere, shielding the biosphere from high-energy UV.',
          difficulty: 'easy'
        },
        {
          id: 'sd-g10-q4',
          textAr: 'ما هو السبب الجغرافي الأساسي في حدوث الفصول الأربعة واختلاف طول الليل والنهار على سطح الأرض؟',
          textEn: 'What is the primary astronomical cause of the four seasons and unequal day/night duration?',
          optionsAr: [
            'ميل محور الأرض بمقدار 23.5 درجة ودورانها حول الشمس',
            'دوران الأرض حول محورها كل 24 ساعة فقط',
            'تغير المسافة بين الأرض والشمس في المدار البيضاوي فقط',
            'جاذبية القمر لمياه المحيطات'
          ],
          optionsEn: [
            'Earth’s axial tilt of 23.5 degrees combined with its revolution around the Sun',
            'Earth rotating on its axis every 24 hours alone',
            'Variations in orbital distance from the Sun alone',
            'Lunar gravitational pull on oceans'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أسباب حدوث الفصول الأربعة',
          conceptTestedEn: 'Causes of the four astronomical seasons',
          explanationAr: 'ميل محور دوران الأرض بزاوية ثابتة (23.5°) أثناء دورانها حول الشمس كل 365.25 يوماً يغير زاوية سقوط أشعة الشمس مسبباً الفصول الأربعة.',
          explanationEn: 'The parallelism and 23.5 degree axial tilt during Earth’s heliocentric revolution changes solar declination, driving the seasons.',
          difficulty: 'medium'
        },
        {
          id: 'sd-g10-q5',
          textAr: 'يُصنف الأخدود الأفريقي العظيم من الوجهة الجيومورفولوجية على أنه ناتج عن:',
          textEn: 'Geomorphologically, the Great African Rift Valley is classified as originating from:',
          optionsAr: ['انكسارات وصدوع هابطة في القشرة الأرضية', 'التواءات صخرية محدبة', 'ترسيبات مائية نهرية', 'تعرية جليدية'],
          optionsEn: ['Crustal faulting and tectonic rifting', 'Anticlinal rock folding', 'Alluvial river sedimentation', 'Glacial erosion'],
          correctIndex: 0,
          conceptTestedAr: 'الأخدود الأفريقي العظيم والانكسارات',
          conceptTestedEn: 'Great Rift Valley faulting mechanism',
          explanationAr: 'الأخدود الأفريقي العظيم هو نظام صدوع انكسارية متدرجة أخدودية (Graben) هبطت فيها كتل القشرة الوسطى بين صدعين متوازيين.',
          explanationEn: 'The Great Rift Valley formed via massive extensional faulting and graben subsidence along continental plates.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة الثانية: المناخ والنبات الطبيعي ──
  {
    id: 'sd-g10-geo-2',
    order: 2,
    subject: 'GEOGRAPHY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - الجغرافيا والدراسات البيئية (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Geography & Environmental Studies (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: المناخ والنبات الطبيعي',
    unitTitleEn: 'Unit 2: Climate and Natural Vegetation',
    lessonNumberAr: 'الدروس 1 إلى 4: عناصر المناخ والإشعاع والحرارة والأقاليم',
    lessonNumberEn: 'Lessons 1 to 4: Climate Elements, Solar Radiation, and Biomes',
    titleAr: 'المحاضرة 2: المناخ والنبات الطبيعي والإشعاع الشمسي والتغير المناخي',
    titleEn: 'Lecture 2: Climate, Natural Vegetation, Solar Radiation, and Global Climate Change',
    subtitleAr: 'الفرق بين الطقس والمناخ، عناصر المناخ، طيف الإشعاع الشمسي وميزانية الطاقة، والضغط الجوي والرياح، وتصنيف الأقاليم المناخية والنباتية، ومخاطر الاحتباس الحراري والتصحر في السودان',
    subtitleEn: 'Weather vs climate, atmospheric elements, solar electromagnetic spectrum, thermal balance, winds, biomes, and climate change in Sudan.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'تتميز ولاية الخرطوم والولايات الشمالية في السودان بجو مشمس وحار وجاف معظم فترات العام، بينما تهطل الأمطار الصيفية الغزيرة في ولايات كردفان ودارفور والنيل الأزرق والقضارف لتكسو الأرض بغابات السافنا الغنية! ما الذي يحدد مناخ كل منطقة؟ وكيف يقسم الغلاف الجوي طاقة الشمس القادمة بين امتصاص وانعكاس؟ وما هو سر التغير المناخي الذي بات يهدد بتوسع رقعة التصحر وتذبذب مياه الأمطار في السودان وحزام الساحل الأفريقي؟',
    warmupHookEn: 'From northern arid deserts to the lush monsoonal savannas of Blue Nile and Gedaref, Sudan experiences dramatic climatic gradients. Explore radiation budgets, wind systems, biomes, and the pressing challenge of global climate change.',
    learningOutcomesAr: [
      'أن يفرّق الطالب بدقة بين مفهومي الطقس (قصير الأجل) والمناخ (أكثر من 35 سنة).',
      'أن يحلل مكونات الإشعاع الشمسي الثلاثة (الأشعة فوق البنفسجية 9%، الضوئية 45%، وتحت الحمراء 46%) وميزانية امتصاص وتشتت الطاقة.',
      'أن يشرح دور الضغط الجوي والحرارة في نشأة الرياح وحركة الكتل الهوائية وتساقط الأمطار.',
      'أن يصنف الأقاليم المناخية والنباتية في العالم مع التركيز على نطاقات السودان (الصحراوي، شبه الصحراوي، والسافنا).',
      'أن يقيّم أسباب وآثار ظاهرة التغير المناخي والاحتباس الحراري والتصحر وسبل التكيف البيئي في السودان.'
    ],
    learningOutcomesEn: [
      'Distinguish short-term weather from long-term climate (>35 years).',
      'Analyze the three solar spectrum bands (UV 9%, visible 45%, IR 46%) and planetary energy budget.',
      'Explain thermodynamics of barometric pressure, wind circulation, and precipitation.',
      'Classify global biomes and Sudanese climate zones (desert, semi-desert, savanna).',
      'Evaluate mechanisms of greenhouse warming, desertification, and adaptive environmental mitigation in Sudan.'
    ],
    keyConceptsAr: [
      'المناخ (> 35 سنة) والطقس (أيام)',
      'عناصر المناخ: الحرارة، الضغط الجوي، الرياح، الرطوبة، والتساقط',
      'أنواع الأشعة الشمسية: فوق البنفسجية (9%)، الضوئية المرئية (45%)، وتحت الحمراء الحرارية (46%)',
      'ميزانية الإشعاع: امتصاص الغلاف 19%، انعكاس وانتشار، وامتصاص سطح الأرض 47%',
      'الأقاليم المناخية والنباتية في السودان (حزام الصمغ العربي والسافنا)',
      'التغير المناخي، الاحتباس الحراري، ومكافحة التصحر والجفاف'
    ],
    keyConceptsEn: [
      'Climate vs weather time horizons',
      'Climatic variables: temperature, pressure, winds, moisture',
      'Solar spectrum partitioning: UV 9%, visible 45%, infrared 46%',
      'Planetary albedo and thermal budget',
      'Sudanese biomes and the Gum Arabic belt',
      'Global warming, desertification, and arid zone resilience'
    ],
    vocabulary: [
      {
        termAr: 'المناخ والطقس (Climate & Weather)',
        termEn: 'Climate & Weather',
        definitionAr: 'الطقس هو حالة الجو لعناصر المناخ في مكان معين لفترة زمنية قصيرة (ساعات أو أيام)، بينما المناخ هو متوسط حالة الجو لإقليم واسع لفترة زمنية طويلة تزيد عن 35 عاماً.'
      },
      {
        termAr: 'الإشعاع الشمسي (Solar Radiation)',
        termEn: 'Solar Radiation',
        definitionAr: 'الطاقة الكهرومغناطيسية المنبعثة من الشمس وتصل الأرض على شكل أمواج تتفاوت بين فوق بنفسجية، ضوئية مرئية، وتحت حمراء حرارية.'
      },
      {
        termAr: 'الاحتباس الحراري (Global Warming)',
        termEn: 'Global Warming',
        definitionAr: 'ارتفاع تدريجي في معدل درجات حرارة الغلاف الجوي للأرض نتيجة حبس الغازات الدفيئة (كثاني أكسيد الكربون والميثان) للأشعة تحت الحمراء الصادرة من الأرض.'
      },
      {
        termAr: 'حزام السافنا في السودان (Savanna Belt)',
        termEn: 'Savanna Belt',
        definitionAr: 'إقليم مناخي نباتي مداري رطب يمتد في وسط وجنوب السودان، ينقسم لسافنا فقيرة ذات حشائش قصيرة وأشجار الهشاب (الصمغ العربي)، وسافنا غنية ذات حشائش طويلة وأشجار كثيفة.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الثانية: يمثل المناخ الإطار الحاكم للغطاء النباتي والحياة؛ ويعتمد توازن حرارة كوكبنا على الإشعاع الشمسي وميزانية الطاقة، بينما يتحكم الضغط الجوي والرياح في توزيع الأمطار ونشوء الأقاليم المناخية من الصحاري إلى السافنا الغنية في السودان، مع تزايد أهمية التصدي لتحديات التغير المناخي والتصحر.',
    summaryEn: 'Summary of Unit 2: Detailed investigation of atmospheric thermodynamics, solar radiation budgets, planetary wind systems, vegetation biomes, and the pressing issues of desertification and climate change.',
    sections: [
      {
        titleAr: '1. طبيعة المناخ والإشعاع الشمسي والحرارة',
        titleEn: '1. Climatology, Solar Radiation Spectrum, and Heat Balance',
        contentAr: `**أ - الفرق بين الطقس والمناخ:**
- **الطقس:** هو حالة الجو بعناصره المختلفة (حرارة، ضغط، رياح، رطوبة، أمطار) في منطقة محددة خلال فترة زمنية قصيرة تتراوح بين يوم وبضعة أيام.
- **المناخ:** هو حالة الجو الإجمالية ونمطه العام الممتد لفترة زمنية طويلة لا تقل عن **35 عاماً متواصلة**؛ مما يسمح باستنتاج المعدلات العامة والفصول المناخية للأقاليم.
- **عناصر المناخ الرئيسية:** 1) الإشعاع الشمسي والحرارة، 2) الضغط الجوي، 3) الرياح، 4) الرطوبة والتكاثف والتساقط.

**ب - الإشعاع الشمسي والحرارة ومصادرها:**
- الشمس هي المصدر الرئيسي والأساسي للطاقة والحرارة والحياة على كوكب الأرض، إلى جانب نسب ضئيلة من الطاقة الجوفية للراديوأكتيف في باطن الأرض والنجوم البعيدة.
- **طيف الأشعة الشمسية القادمة:**
  1. **الأشعة فوق البنفسجية (9%):** موجات كهرومغناطيسية قصيرة جداً (أقل من 0.4 مايكرون)، غير مرئية؛ تمتص طبقة الأوزون في الستراتوسفير معظمها، ولها فوائد طبية وتعقيمية واستخدامات في كشف التزوير، بينما يسبب التعرض المفرط لها حروقاً وسرطانات للجلد.
  2. **الأشعة الضوئية المرئية (45%):** موجات متوسطة (0.4 إلى 0.7 مايكرون)، تتيح الرؤية بألوان الطيف السبعة وهي المسؤولة عن عملية **التمثيل الضوئي** في النباتات الخضراء.
  3. **الأشعة تحت الحمراء (46%):** موجات طويلة (أكثر من 0.7 مايكرون)، غير مرئية، ولكنها تمثل الطاقة الحرارية المحسوسة التي تدفئ سطح الأرض والغلاف الجوي.

**ج - ميزانية الطاقة الشمسية وتأثير الغلاف الجوي:**
- عندما يصل الإشعاع الشمسي إلى قمة الغلاف الجوي، يتعرض لثلاث عمليات: **الامتصاص، الانعكاس، والتشتت (الانتشار)**:
  - يمتص الغلاف الجوي (الغازات وبخار الماء والغبار) حوالي **19%** من الإشعاع الشمسي القادم.
  - ينعكس ويتشتت في الفضاء نحو **34%** بفعل السحب وذرات الهواء وجزيئات الألبيدو السطحية.
  - يتبقى نحو **47%** من الطاقة تصل إلى سطح الأرض وتمتصها اليابسة والمسطحات المائية لتدفئة الكوكب.`,
        contentEn: 'Solar radiation consists of UV (9%), visible (45%), and infrared (46%). The atmosphere absorbs 19%, reflects/scatters 34%, while Earth absorbs 47% to maintain thermodynamic equilibrium.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: استغلال الإشعاع الشمسي النظيف في محطات المياه بالطاقة الشمسية في السودان',
          titleEn: 'Interactive Example 1: Solar Energy for Deep Water Wells in Rural Sudan',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الوفرة الإشعاعية: يقع السودان في الحزام الشمسي المداري بمعدل سطوع يتجاوز 10 إلى 12 ساعة يومياً وإشعاع يصل لنحو 5.5 إلى 6 كيلوواط ساعة/م².',
              textEn: 'Sudan lies in the high-insolation solar belt with 10-12 daily sunshine hours.'
            },
            {
              stepNumber: 2,
              textAr: 'التحويل الكهروضوئي: تقوم الألواح الشمسية بامتصاص الأشعة الضوئية وتحويلها إلى تيار كهربي يشغل مضخات الآبار الجوفية في القرى ومشاريع الري.',
              textEn: 'Photovoltaic cells convert visible radiation to electricity running irrigation pumps.'
            },
            {
              stepNumber: 3,
              textAr: 'الأثر البيئي: استبدال محركات الديزل يقلل من انبعاثات غاز ثاني أكسيد الكربون ويحمي البيئة من مخاطر الاحتباس الحراري والتلوث.',
              textEn: 'Solar pumping displaces diesel fuel, reducing CO2 greenhouse emissions.'
            }
          ],
          takeawayAr: 'الإشعاع الشمسي مصدر دائم ونظيف يمكن استثماره لتحقيق التنمية ومكافحة الجفاف دون زيادة الاحتباس الحراري.',
          takeawayEn: 'Perpetual solar power provides sustainable agrarian resilience without fossil carbon emissions.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-3',
          questionAr: 'أي نسبة من مكونات الإشعاع الشمسي تمثل الأشعة تحت الحمراء المسؤولة عن الحرارة؟',
          questionEn: 'What percentage of incoming solar radiation constitutes thermal infrared rays?',
          optionsAr: ['46%', '45%', '9%', '19%'],
          optionsEn: ['46%', '45%', '9%', '19%'],
          correctIndex: 0,
          explanationAr: 'تمثل الأشعة تحت الحمراء 46% من طيف الإشعاع الشمسي وهي المسؤولة عن رفع درجة حرارة الأرض والغلاف الجوي.',
          explanationEn: 'Infrared waves represent 46% of solar radiation, governing sensible thermal energy.'
        }
      },
      {
        titleAr: '2. الأقاليم المناخية والنباتية والتغير المناخي والاحتباس الحراري',
        titleEn: '2. Global & Sudanese Biomes, Climate Change, and Desertification',
        contentAr: `**أ - الأقاليم المناخية والنباتية في السودان:**
يتميز السودان بتدرج مناخي ونباتي واضح من الشمال إلى الجنوب تبعاً لكمية وموسمية الأمطار:
1. **الإقليم الصحراوي (في أقصى الشمال):**
   - أمطار نادرة وشحيحة تقل عن 75 ملم سنوياً، ومدى حراري يومي وسنوي كبير جداً، مع نباتات شوكية نادرة مقاومة للجفاف كالعاقول والصبار.
2. **الإقليم شبه الصحراوي (شمال كردفان وشمال دارفور ونهر النيل):**
   - أمطار تتراوح بين 75 إلى 300 ملم صيفاً، وغطاء نباتي من الأعشاب الحولية وشجيرات السمر والسيال.
3. **إقليم السافنا الفقيرة (المنخفضة الأمطار):**
   - أمطار بين 300 إلى 500 ملم؛ ويعد الموطن الرئيسي لـ **شجرة الهشاب** التي تنتج **الصمغ العربي** (السودان المنتج الأكبر عالمياً)، وحشائش قصيرة ترعى عليها الإبل والضأن.
4. **إقليم السافنا الغنية (عالية الأمطار):**
   - أمطار تتجاوز 500 إلى 900 ملم في جنوب كردفان وجنوب دارفور والنيل الأزرق؛ حشائش استوائية طويلة (حلفا) وأشجار ضخمة كالتبلدي (القنقليز) والمهوجني والدوم والأبنوس.

**ب - ظاهرة التغير المناخي والاحتباس الحراري:**
- **ظاهرة الدفيئة الطبيعية:** حبس بعض الغازات كبخار الماء وCO2 للحرارة يمنح الأرض متوسط حرارة معتدلاً (نحو 15°م) ملائماً للحياة.
- **الاحتباس الحراري البشري:** التوسع الصناعي وحرق الوقود الأحفوري وقطع الغابات أدى لزيادة تركيز غازات ثاني أكسيد الكربون، الميثان، وأكاسيد النيتروجين، مما أدى لاحتجاز إشعاع حراري أرضي فائض وارتفاع حرارة الكوكب.
- **الآثار البيئية المباشرة على السودان والمنطقة:**
  1. تذبذب مواسم هطول الأمطار وحدوث موجات جفاف حادة تعقبها سيول وفيضانات مدمرة.
  2. زحف الكثبان الرملية جنوباً وتدهور التربة الزراعية والمراعي الطبيعية (**التصحر**).
  3. تراجع الغطاء الشجري لأشجار الهشاب وتناقص إنتاجية الصمغ العربي والمحاصيل الغذائية (الذرة والسمسم).
- **سبل المواجهة:** إنشاء **مشاريع الحزام الأخضر**، استزراع أشجار الهشاب لمقاومة زحف الرمال، ترشيد الري، والتحول إلى الطاقة الشمسية وطاقة الرياح.`,
        contentEn: 'Sudan spans arid deserts, semi-arid scrub, low-rainfall savanna (Gum Arabic acacia belt), and high-rainfall savanna. Climate change triggers desertification, addressed via green belts.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: دور حزام شجرة الهشاب والصمغ العربي في حماية البيئة السودانية',
          titleEn: 'Interactive Example 2: The Acacia Senegal (Gum Arabic) Belt Combating Desertification',
          steps: [
            {
              stepNumber: 1,
              textAr: 'التثبيت الحيوي للتربة: تمتد جذور شجرة الهشاب لأعماق كبيرة أفقياً ورأسياً، فتعمل كحاجز طبيعي يصد زحف الرمال المتحركة في إقليم السافنا الفقيرة.',
              textEn: 'Acacia senegal root systems stabilize sandy soils, halting advancing dunes.'
            },
            {
              stepNumber: 2,
              textAr: 'تخصيب التربة وتثبيت النيتروجين: كشجرة بقولية، تثبت بكتيريا جذورها نيتروجين الهواء مما يحسن خصوبة الأراضي الزراعية المجاورة لمحاصيل السمسم والفول.',
              textEn: 'Root nodules fix atmospheric nitrogen, enhancing contiguous agricultural fertility.'
            },
            {
              stepNumber: 3,
              textAr: 'العائد الاقتصادي الوطني: تنتج شجرة الهشاب الصمغ العربي الممتاز الذي يدخل في الصناعات الدوائية والغذائية العالمية ويدعم المزارع السوداني.',
              textEn: 'Gum Arabic production provides crucial non-oil foreign currency export revenues.'
            }
          ],
          takeawayAr: 'تعد شجرة الهشاب حائط الصد البيئي الأول ضد التصحر ورافداً اقتصادياً قومياً لا يقدر بثمن في السودان.',
          takeawayEn: 'Acacia senegal serves as the premier biological rampart against desertification while securing rural livelihoods.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-4',
          questionAr: 'في أي إقليم مناخي نباتي في السودان تنمو وتنتشر أشجار الهشاب المنتجة للصمغ العربي؟',
          questionEn: 'In which Sudanese climate biome do Acacia senegal trees naturally thrive?',
          optionsAr: ['إقليم السافنا الفقيرة', 'الإقليم الصحراوي التام', 'إقليم التندرا البارد', 'إقليم الغابات الاستوائية المطيرة الدائمة'],
          optionsEn: ['Low-rainfall savanna biome', 'Hyper-arid desert biome', 'Tundra biome', 'Evergreen equatorial rainforest'],
          correctIndex: 0,
          explanationAr: 'تنمو أشجار الهشاب المنتجة للصمغ العربي بشكل مثالي في نطاق حزام السافنا الفقيرة (المنخفضة الأمطار) في كردفان ودارفور والنيل الأزرق والقضارف.',
          explanationEn: 'Acacia senegal grows predominantly across the low-rainfall savanna belt in Kordofan, Darfur, and Gedaref.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-geo-2-assess',
      titleAr: 'اختبار تقييم الوحدة الثانية: المناخ والنبات الطبيعي (منهج بخت الرضا ٢٠٢٥م)',
      titleEn: 'Unit 2 Assessment: Climate and Natural Vegetation (Bakht Al-Ruda 2025)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-g10-u2-q1',
          textAr: 'ما هي الفترة الزمنية القياسية المعتمدة في علم الجغرافيا لحساب متوسطات المناخ لإقليم ما؟',
          textEn: 'What is the standard meteorological timescale required to calculate climatic averages for an area?',
          optionsAr: ['أكثر من 35 سنة', 'أسبوع واحد إلى 10 أيام', 'شهر واحد فقط', 'سنة واحدة كاملة'],
          optionsEn: ['Over 35 years', 'One week to 10 days', 'One single month', 'One complete year'],
          correctIndex: 0,
          conceptTestedAr: 'الفارق الزمني بين الطقس والمناخ',
          conceptTestedEn: 'Temporal standard of climatic averaging',
          explanationAr: 'يتطلب تحديد مناخ أي إقليم رصد السجلات المناخية لعناصره لفترة طويلة لا تقل عن 35 عاماً متواصلة لضمان تمثيل الدورات الجوية بدقة.',
          explanationEn: 'Climate normals require continuous 30-35 year observation records to smooth annual variability.',
          difficulty: 'easy'
        },
        {
          id: 'sd-g10-u2-q2',
          textAr: 'أي من أنواع الأشعة الشمسية تتيح الرؤية وتعتمد عليها النباتات الخضراء في عملية البناء الضوئي؟',
          textEn: 'Which band of solar radiation enables human vision and powers chlorophyll photosynthesis?',
          optionsAr: ['الأشعة الضوئية المرئية (45%)', 'الأشعة تحت الحمراء (46%)', 'الأشعة فوق البنفسجية (9%)', 'أشعة غاما الكونية'],
          optionsEn: ['Visible spectrum rays (45%)', 'Infrared rays (46%)', 'Ultraviolet rays (9%)', 'Gamma cosmic rays'],
          correctIndex: 0,
          conceptTestedAr: 'طيف الإشعاع الشمسي والتمثيل الضوئي',
          conceptTestedEn: 'Visible solar radiation and photosynthesis',
          explanationAr: 'الأشعة الضوئية المرئية ذات الأطوال الموجية بين 0.4 و 0.7 مايكرون هي المسؤولة عن الرؤية وعملية التمثيل الضوئي في النباتات.',
          explanationEn: 'Visible light (0.4–0.7 microns) drives retinal photoreceptors and photosynthetic chloroplast reaction centers.',
          difficulty: 'easy'
        },
        {
          id: 'sd-g10-u2-q3',
          textAr: 'ما هي النتيجة البيئية الأخطر الناتجة عن تذبذب الأمطار وإزالة الأشجار في النطاق شبه الصحراوي بالسودان؟',
          textEn: 'What is the most severe environmental consequence of rainfall fluctuations and deforestation in Sudan?',
          optionsAr: ['التصحر وتدهور الأراضي الزراعية', 'تكون الجليد الدائم', 'نشاط البراكين الثائرة', 'ارتفاع نسبة الأوزون في المدن'],
          optionsEn: ['Desertification and land degradation', 'Glaciation', 'Active volcanic eruptions', 'Urban ozone surplus'],
          correctIndex: 0,
          conceptTestedAr: 'التصحر والتدهور البيئي في السودان',
          conceptTestedEn: 'Desertification hazards in Sudan',
          explanationAr: 'يؤدي الجفاف والرعي الجائر والقطع المفرط للغابات إلى تقدم الكثبان الرملية وتدهور خصوبة التربة في ظاهرة التصحر.',
          explanationEn: 'Anthropogenic pressure and recurrent droughts trigger accelerated desert encroachment across the Sahelian belt.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة الثالثة: علم الخرائط ──
  {
    id: 'sd-g10-geo-3',
    order: 3,
    subject: 'GEOGRAPHY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - الجغرافيا والدراسات البيئية (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Geography & Environmental Studies (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الثالثة: علم الخرائط',
    unitTitleEn: 'Unit 3: Cartography and Topographic Mapping',
    lessonNumberAr: 'الدروس 1 إلى 5: مبادئ الخرائط ومقاييس الرسم والكنتور',
    lessonNumberEn: 'Lessons 1 to 5: Principles of Cartography, Scales & Contours',
    titleAr: 'المحاضرة 3: علم الخرائط ومقاييس الرسم والخرائط الطبوغرافية',
    titleEn: 'Lecture 3: Cartography, Map Scales, Projections, and Topographic Contour Analysis',
    subtitleAr: 'عناصر الخريطة الأساسية، أنواع مقاييس الرسم وحساب المسافات، مساقط الخرائط (الأسطوانية والمخروطية والسمتية)، وقراءة الخرائط الطبوغرافية وتفسير خطوط الكنتور والتضاريس',
    subtitleEn: 'Map components, scale conversions, projections (cylindrical, conic, azimuthal), and topographic contour terrain analysis.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'قبل أن تضغط زراً على هاتفك الذكي لترى موقعك عبر خرائط جوجل أو تتنقل في شوارع مدينتك، استغرق الإنسان آلاف السنين لتطوير لغة بصرية كونية تختصر الأرض الكروية الشاسعة على لوحة مستوية! هذه اللغة تسمى "الخريطة". كيف استطاع علماء الجغرافيا نقل انحناء الكرة الأرضية دون تشويه؟ وكيف تخبرنا خطوط بنية متموجة تسمى (خطوط الكنتور) عن ارتفاعات الجبال وعمق الأودية بمجرد النظر إليها؟',
    warmupHookEn: 'Long before smartphone satellite GPS, cartographers developed a universal geometric language projecting our spherical globe onto flat surfaces. Discover the precision of scale, map projections, and topographic contour relief.',
    learningOutcomesAr: [
      'أن يعدد الطالب عناصر الخريطة الأساسية (العنوان، الإطار، المفتاح، مقياس الرسم، اتجاه الشمال، والإحداثيات).',
      'أن يفرق بين أنواع مقاييس الرسم (الكتابي، النسبي، والخطي) ويجري العمليات الحسابية لتحويل المسافات على الخريطة إلى مسافات حقيقية على الطبيعة.',
      'أن يقارن بين مساقط الخرائط الثلاثة: الأسطوانية (مركاتور)، المخروطية، والسمتية/المستوية.',
      'أن يقرأ الخريطة الطبوغرافية ويفسر خطوط الكنتور ويستنتج درجة الانحدار وشكل التضاريس (قمة، وادٍ، هضبة، سرج).',
      'أن يقدّر دور علم الخرائط في مشروعات التنمية والتخطيط العمراني والدفاع الوطني في السودان.'
    ],
    learningOutcomesEn: [
      'Identify essential map elements: title, neatline, legend, scale, orientation, graticule.',
      'Convert between verbal, representative fraction, and linear graphic scales to calculate ground distances.',
      'Contrast cylindrical, conic, and azimuthal map projections.',
      'Interpret topographic contour spacing, intervals, and terrain features (peaks, valleys, saddles).',
      'Evaluate cartographic utility in civil planning, resource surveys, and national defense in Sudan.'
    ],
    keyConceptsAr: [
      'عناصر الخريطة الستة وأهميتها للمستخدم',
      'أنواع مقياس الرسم: الكسري (1: 100,000)، الخطي (الأدق)، والكتابي',
      'مساقط الخرائط: أسطواني (مركاتور)، مخروطي، ومستوٍ/سمتي',
      'الخريطة الطبوغرافية والفاصل الكنتوري',
      'تفسير خطوط الكنتور: تقاربها يدل على انحدار شديد وتباعدها يدل على انحدار هين'
    ],
    keyConceptsEn: [
      'Essential cartographic elements',
      'Map scale types: representative fraction, graphic/linear, verbal',
      'Map projections: Mercator cylindrical, conic, planar azimuthal',
      'Topographic contour intervals and datum',
      'Contour gradient interpretation: steep vs gentle slopes'
    ],
    vocabulary: [
      {
        termAr: 'علم الخرائط (Cartography)',
        termEn: 'Cartography',
        definitionAr: 'علم وفن وتقنية صناعة الخرائط واستخدامها لتمثيل المعالم الطبيعية والبشرية لسطح الأرض وفق مقياس رسم ومسقط محدد.'
      },
      {
        termAr: 'مقياس الرسم (Map Scale)',
        termEn: 'Map Scale',
        definitionAr: 'النسبة الرياضية الثابتة بين أي مسافة مقاسة على الخريطة والمسافة الحقيقية المقابلة لها على أرض الواقع.'
      },
      {
        termAr: 'مسقط الخريطة (Map Projection)',
        termEn: 'Map Projection',
        definitionAr: 'طريقة هندسية ورياضية لنقل معالم سطح الكرة الأرضية المنحني أو جزء منه إلى لوحة مستوية مسطحة.'
      },
      {
        termAr: 'خط الكنتور (Contour Line)',
        termEn: 'Contour Line',
        definitionAr: 'خط وهمي مرسوم على الخريطة الطبوغرافية يربط بين جميع النقاط ذات الارتفاع الواحد المتساوي عن مستوى سطح البحر.'
      },
      {
        termAr: 'الفاصل الكنتوري (Contour Interval)',
        termEn: 'Contour Interval',
        definitionAr: 'فرق الارتفاع الرأسي الثابت بين كل خطي كنتور متتاليين على الخريطة الطبوغرافية.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الثالثة: يعد علم الخرائط ركيزة التحليل المكاني؛ حيث تضبط عناصره ومقاييس رسمه ومساقطه الهندسية دقة التمثيل الرياضي للواقع، بينما توفر الخرائط الطبوغرافية وخطوط الكنتور رؤية مجسمة ثلاثية الأبعاد للارتفاعات والانحدارات بما يخدم دراسات السدود والطرق والتخطيط العمراني في السودان.',
    summaryEn: 'Summary of Unit 3: Cartographic science enables spatial geometric representation via standardized scales, projection transformations, and 3D topographic relief contour analysis.',
    sections: [
      {
        titleAr: '1. عناصر الخريطة ومقاييس الرسم وحساب المسافات',
        titleEn: '1. Map Components, Scales, and Distance Computations',
        contentAr: `**أ - عناصر الخريطة الأساسية:**
لكي تكون الخريطة وثيقة علمية قابلة للقراءة والاعتماد، يجب أن تحتوي على:
1. **عنوان الخريطة:** يوضح محتوى الخريطة ومنطقتها الجغرافية وتاريخها بدقة.
2. **إطار الخريطة:** خط يحدد امتداد الخريطة ويحافظ على ترابط محتوياتها.
3. **مفتاح الخريطة (دليل الرموز):** جدول يشرح الرموز الاصطلاحية (النقطية كالمدن، الخطية كالأنهار والطرق، والمساحية كالزراعة والمستنقعات).
4. **مقياس الرسم:** يحدد نسبة التصغير بين الخريطة والواقع.
5. **سهم اتجاه الشمال الجغرافي:** يساعد على توجيه الخريطة في الميدان.
6. **شبكة الإحداثيات:** خطوط الطول ودوائر العرض لتحديد المواقع الفلكية وحساب الزمن.

**ب - أنواع مقاييس الرسم:**
1. **المقياس الكتابي:** يُكتب بصيغة لفظية مباشرة (مثل: 1 سم لكل 1 كيلومتر).
2. **المقياس النسبي أو الكسري:** يُكتب في صورة نسبة عددية دون ذكر وحدات قياس (مثل: 1 : 100,000، ويعني أن كل 1 سم على الخريطة يقابله 100,000 سم = 1 كم على الطبيعة).
3. **المقياس الخطي (الرسمي):** خط مستقيم مقسم إلى أجزاء متساوية تمثل وحدات المسافة الحقيقية (كم أو ميل).
   - *ميزة المقياس الخطي:* **هو المقياس الوحيد الذي يظل صحيحاً عند تصغير الخريطة أو تكبيرها** بآلات التصوير، لأن المقياس الخطي يتمدد وينكمش بنفس نسبة تمدد وانكماش الخريطة.`,
        contentEn: 'Core map elements provide navigational and thematic fidelity. Scales include verbal, representative fraction, and graphic linear scales, with linear scales retaining accuracy upon enlargement.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: حساب المسافة الحقيقية بين مدينتي الخرطوم وود مدني على الخريطة',
          titleEn: 'Interactive Example 1: Calculating Distance between Khartoum and Wad Madani',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: مقياس رسم الخريطة هو 1 : 2,000,000، والمسافة المقاسة بالمسطرة بين الخرطوم وود مدني على الخريطة = 9.3 سم.',
              textEn: 'Given: Map scale = 1:2,000,000; measured map distance = 9.3 cm.'
            },
            {
              stepNumber: 2,
              textAr: 'التحويل الحسابي: المسافة الحقيقية بالسنتيمتر = 9.3 × 2,000,000 = 18,600,000 سم.',
              textEn: 'Ground distance in cm = 9.3 * 2,000,000 = 18,600,000 cm.'
            },
            {
              stepNumber: 3,
              textAr: 'التحويل إلى كيلومترات (القسمة على 100,000 لأن الكيلومتر = 100,000 سم): المسافة = 18,600,000 ÷ 100,000 = 186 كم تقريباً.',
              textEn: 'Convert to km (divide by 100,000): 18,600,000 / 100,000 = 186 km ground distance.'
            }
          ],
          takeawayAr: 'المسافة على الطبيعة = المسافة على الخريطة × مقام مقياس الرسم الكسري، ثم تقسم على 100,000 للتحويل إلى كيلومترات.',
          takeawayEn: 'Ground distance = Map distance * Scale denominator; divide by 100,000 for kilometers.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-5',
          questionAr: 'ما هو نوع مقياس الرسم الذي يظل صحيحاً ودقيقاً حتى عند تكبير أو تصغير الخريطة عبر الطباعة والتصوير؟',
          questionEn: 'Which map scale type remains accurate when a map is mechanically enlarged or reduced?',
          optionsAr: ['المقياس الخطي', 'المقياس الكسري (النسبي)', 'المقياس الكتابي اللفظي', 'مقياس درجات العرض فقط'],
          optionsEn: ['Graphic linear scale', 'Representative fraction scale', 'Verbal descriptive scale', 'Latitude degree scale only'],
          correctIndex: 0,
          explanationAr: 'المقياس الخطي يُرسم مباشرة كخط مرقم، فيتمدد وينكمش تلقائياً بنفس النسبة المئوية عند تكبير أو تصغير الخريطة.',
          explanationEn: 'Graphic linear scales expand or contract proportionally with the printed map substrate.'
        }
      },
      {
        titleAr: '2. مساقط الخرائط وقراءة الخرائط الطبوغرافية وخطوط الكنتور',
        titleEn: '2. Map Projections and Topographic Contour Terrain Reading',
        contentAr: `**أ - مساقط الخرائط (Map Projections):**
بما أن الأرض كرة ثلاثية الأبعاد، فإنه يستحيل فرد سطحها على لوحة مستوية دون حدوث تشويه في إما **المساحة، الشكل، الاتجاه، أو المسافة**:
1. **المسقط الأسطواني (مسقط مركاتور):**
   - يلف سطح أسطواني حول الكرة الأرضية مماساً لخط الاستواء.
   - تتقاطع فيه خطوط الطول ودوائر العرض بزوايا قائمة.
   - *ميزته واستخدامه:* يحافظ على الاتجاهات الصحيحة بدقة ولذلك هو **المسقط المعتمد للملاحة البحرية والجوية العالمية**، وعيبه أنه يضخم المساحات كلما اقتربنا من القطبين (مثل جزيرة جرينلاند).
2. **المسقط المخروطي:**
   - يوضع مخروط ورقي يمس الكرة الأرضية عند دائرة عرض معينة (دائرة العرض القياسية).
   - يناسب جداً رسم خرائط الدول الواقعة في **العروض المعتدلة والوسطى**.
3. **المسقط السمتي (المستوي):**
   - توضع لوحة مستوية تمس القطب الشمالي أو الجنوبي مباشرة.
   - يناسب رسم **المناطق القطبية والمحيط المتجمد**.

**ب - الخرائط الطبوغرافية وقراءة خطوط الكنتور:**
- **الخريطة الطبوغرافية:** خريطة عامة دقيقة توضح المعالم الطبيعية (تضاريس ومجاري مائية) والبشرية (طرق ومستوطنات).
- **خطوط الكنتور:** هي الخطوط البنية التي تصل النقاط ذات الارتفاع المتساوي فوق مستوى سطح البحر.
- **قواعد قراءة التضاريس من خطوط الكنتور:**
  1. **تقارب خطوط الكنتور:** يدل على أن السطح **شديد الانحدار** كحواف الجبال والجروف الصخرية.
  2. **تباعد خطوط الكنتور:** يدل على أن السطح **هين الانحدار ومنبسط** كالسهول والوديان.
  3. **الخطوط الدائرية المغلقة المتداخلة ذات القيم المتزايدة نحو الداخل:** تمثل **قمة جبلية أو تلاً مرتفعاً**.
  4. **الخطوط الدائرية المغلقة ذات القيم المتناقصة نحو الداخل:** تمثل **منخفضاً أو حفرة بركانية (كالديرة)**.
  5. **خطوط كنتور على شكل حرف V يشير رأسها نحو الارتفاعات الأعلى:** تمثل **مجرى وادٍ نهري**.`,
        contentEn: 'Map projections compromise between area, shape, distance, and bearing. Mercator cylindrical projection preserves rhumb lines for navigation. Contour spacing directly signals terrain slope steepness.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: قراءة وتفسير خطوط الكنتور لتحديد مسار طريق جبلي',
          titleEn: 'Interactive Example 2: Interpreting Contour Topography for Highway Routing',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المهندسون الجغرافيون يفحصون الخريطة الطبوغرافية لمنطقة جبلية وعرة في شرق السودان (تلال البحر الأحمر).',
              textEn: 'Engineers examine topographic contour maps of the rugged Red Sea Hills in eastern Sudan.'
            },
            {
              stepNumber: 2,
              textAr: 'تجنب المناطق التي تتقارب فيها خطوط الكنتور بشدة لأنها تمثل جروفاً صخرية شديدة الوعورة والانحدار يصعب شق الطرق فيها.',
              textEn: 'Areas with tightly clustered contours indicate precipitous cliffs, unsuitable for transit.'
            },
            {
              stepNumber: 3,
              textAr: 'اختيار المسار الذي تتباعد فيه خطوط الكنتور ويمر عبر "سرج جبلي" (ممر منخفض بين قمتين) لتشييد طريق آمن واقتصادي.',
              textEn: 'Select gentle slopes with spaced contours traversing mountain saddles for safe highway construction.'
            }
          ],
          takeawayAr: 'تقارب خطوط الكنتور يعني انحداراً شديداً، بينما تباعدها يعني انحداراً سهلاً ومناسباً للتنمية والعمران.',
          takeawayEn: 'Close contour spacing designates steep precipices; wide spacing indicates gentle gradients ideal for engineering.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-6',
          questionAr: 'ماذا تستنتج جغرافياً عند مشاهدة خطوط الكنتور شديدة التقارب والتلاصق على الخريطة الطبوغرافية؟',
          questionEn: 'What does tightly clustered contour spacing signify on a topographic map?',
          optionsAr: ['انحدار شديد جداً أو جرف صخري قائم', 'أرض منبسطة سهلية هينة الانحدار', 'حفرة مياه ضحلة', 'صحراء رملية مستوية'],
          optionsEn: ['Extremely steep slope or vertical cliff', 'Flat gentle plain', 'Shallow water basin', 'Level sandy desert'],
          correctIndex: 0,
          explanationAr: 'تقارب خطوط الكنتور يعبر عن تغير كبير وسريع في الارتفاع الرأسي في مسافة أفقية قصيرة مما يعني انحداراً شديداً.',
          explanationEn: 'Tight contour intervals indicate steep vertical rise over minimal horizontal ground distance.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-geo-3-assess',
      titleAr: 'اختبار تقييم الوحدة الثالثة: علم الخرائط (منهج بخت الرضا ٢٠٢٥م)',
      titleEn: 'Unit 3 Assessment: Cartography and Topography (Bakht Al-Ruda 2025)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-g10-u3-q1',
          textAr: 'ما هو مسقط الخريطة المعتمد عالمياً للملاحة البحرية والجوية لأنه يحافظ على صحة الاتجاهات والزوايا؟',
          textEn: 'Which map projection is globally adopted for maritime and aeronautical navigation because it preserves true bearings?',
          optionsAr: ['مسقط مركاتور الأسطواني', 'المسقط المخروطي البسيط', 'المسقط السمتي القطبي', 'مسقط العيون المجسم'],
          optionsEn: ['Mercator cylindrical projection', 'Simple conic projection', 'Polar azimuthal projection', 'Orthographic projection'],
          correctIndex: 0,
          conceptTestedAr: 'مسقط مركاتور الأسطواني للملاحة',
          conceptTestedEn: 'Mercator projection navigation properties',
          explanationAr: 'يتميز مسقط مركاتور الأسطواني بأنه يحفظ الاتجاهات وخطوط الملاحة الثابتة (Rhumb lines) كخطوط مستقيمة، مما يجعله مثالياً للملاحة.',
          explanationEn: 'Mercator’s cylindrical conformal projection preserves true compass bearings as straight lines, making it indispensable for navigation.',
          difficulty: 'medium'
        },
        {
          id: 'sd-g10-u3-q2',
          textAr: 'خريطة مقياس رسمها 1 : 50,000، قيس عليها مجرى مائي فكان طوله 6 سم، فكم يبلغ طوله الحقيقي على الطبيعة؟',
          textEn: 'A water channel measures 6 cm on a map with scale 1:50,000. What is its actual ground length in kilometers?',
          optionsAr: ['3 كيلومترات', '30 كيلومتراً', '0.3 كيلومتر', '12 كيلومتراً'],
          optionsEn: ['3 kilometers', '30 kilometers', '0.3 kilometers', '12 kilometers'],
          correctIndex: 0,
          conceptTestedAr: 'حساب المسافة الحقيقية من مقياس الرسم',
          conceptTestedEn: 'Distance computation from scale',
          explanationAr: 'المسافة الحقيقية = 6 سم × 50,000 = 300,000 سم. للتحويل إلى كيلومترات: 300,000 ÷ 100,000 = 3 كم.',
          explanationEn: 'Actual distance = 6 cm * 50,000 = 300,000 cm. In kilometers: 300,000 / 100,000 = 3 km.',
          difficulty: 'medium'
        },
        {
          id: 'sd-g10-u3-q3',
          textAr: 'ما هو المصطلح الذي يُطلق على فرق الارتفاع الرأسي الثابت بين كل خطي كنتور متتاليين؟',
          textEn: 'What term denotes the uniform vertical elevation difference between consecutive contour lines?',
          optionsAr: ['الفاصل الكنتوري', 'مقياس الرسم', 'خط الزوال', 'الميل المحوري'],
          optionsEn: ['Contour interval', 'Map scale', 'Meridian line', 'Axial inclination'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الفاصل الكنتوري',
          conceptTestedEn: 'Definition of contour interval',
          explanationAr: 'الفاصل الكنتوري هو البعد والارتفاع الرأسي الثابت بين خط كنتور والخط الذي يليه مباشرة على الخريطة الطبوغرافية.',
          explanationEn: 'The contour interval is the vertical distance separating adjacent contour elevations on a topographic map.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── الوحدة الرابعة: نظم المعلومات الجغرافية ──
  {
    id: 'sd-g10-geo-4',
    order: 4,
    subject: 'GEOGRAPHY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - الجغرافيا والدراسات البيئية (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Geography & Environmental Studies (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الرابعة: نظم المعلومات الجغرافية',
    unitTitleEn: 'Unit 4: Geographic Information Systems (GIS)',
    lessonNumberAr: 'الدروس 1 إلى 3: مفهوم GIS ومكوناته والاستشعار والتطبيقات',
    lessonNumberEn: 'Lessons 1 to 3: GIS Concept, Components, Remote Sensing & Applications',
    titleAr: 'المحاضرة 4: نظم المعلومات الجغرافية (GIS) والاستشعار عن بعد وتطبيقاتها البيئية',
    titleEn: 'Lecture 4: Geographic Information Systems (GIS), Remote Sensing, and Environmental Applications',
    subtitleAr: 'مفهوم نظم GIS، المكونات الخمسة (الأجهزة والبرمجيات والبيانات والأفراد والطرائق)، تمثيل البيانات المكانية (Vector و Raster)، والاستشعار عن بعد وتطبيقاته في إدارة مياه النيل ومكافحة التصحر بالسودان',
    subtitleEn: 'GIS architecture, vector vs raster spatial data structures, remote sensing, and environmental resource management in Sudan.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تدير وزارة الري والموارد المائية بالسودان بوابات سد مروي أو خزان الروصيرص لتنظيم فيضان النيل الأزرق والأبيض وحماية الخرطوم والمدن النيلية من الغرق، كيف يستطيع المهندسون مراقبة أمطار الهضبة الإثيوبية ومناسيب المياه لحظة بلحظة؟ الحل يكمن في ثورة التقنيات الجغرافية: أقمار اصطناعية تلتقط البيانات من الفضاء، ونظم معلومات جغرافية (GIS) تحلل ملايين الطبقات المكانية في ثوانٍ معدودة! كيف تعمل هذه المنظومات وما هي تطبيقاتها في مستقبل السودان؟',
    warmupHookEn: 'Managing seasonal Nile floods across Merowe and Roseires dams requires real-time monitoring of rainfall patterns over thousands of kilometers. Discover how satellite remote sensing and Geographic Information Systems (GIS) safeguard communities and guide national planning.',
    learningOutcomesAr: [
      'أن يعرّف الطالب نظم المعلومات الجغرافية (GIS) ويوضح أهميتها ومراحل تطورها الرقمي.',
      'أن يعدد المكونات الخمسة المتكاملة لنظام GIS (الأجهزة، البرمجيات، البيانات، الكادر البشري، والأساليب والتحليلات).',
      'أن يقارن بين نموذجي تمثيل البيانات المكانية: النموذج المتجهي (Vector) والنموذج الشبكي النقطي (Raster).',
      'أن يوضح مبادئ الاستشعار عن بعد (Remote Sensing) واستخدام الأقمار الاصطناعية في رصد الغطاء الأرضي.',
      'أن يقترح تطبيقات واقعية لنظم GIS والاستشعار في إدارة الموارد المائية، التخطيط العمراني، ومكافحة التصحر في السودان.'
    ],
    learningOutcomesEn: [
      'Define Geographic Information Systems (GIS) and its role in modern spatial science.',
      'Detail the 5 core GIS components: hardware, software, data, personnel, and methods.',
      'Compare Vector (points, lines, polygons) vs Raster (grid cell pixels) spatial data models.',
      'Explain satellite remote sensing principles and spectral land-use analysis.',
      'Apply GIS workflows to water resource engineering, urban planning, and anti-desertification campaigns in Sudan.'
    ],
    keyConceptsAr: [
      'تعريف نظام المعلومات الجغرافي (GIS) كنظام رقمي متكامل',
      'المكونات الخمسة: Hardware, Software, Data, People, Methods',
      'البيانات المكانية والبيانات الوصفية (Spatial & Attribute Data)',
      'النموذج الشبكي (Raster) والنموذج المتجهي (Vector)',
      'الاستشعار عن بعد وصور الأقمار الاصطناعية',
      'تطبيقات GIS في السودان: حوض النيل، مكافحة التصحر، والتخطيط الحضري'
    ],
    keyConceptsEn: [
      'Integrated GIS definition and analytical framework',
      'Five core components: hardware, software, data, people, methods',
      'Spatial coordinate data paired with attribute tables',
      'Raster pixel matrices vs vector topological entities',
      'Satellite remote sensing and multispectral imagery',
      'Geospatial environmental applications across Sudan'
    ],
    vocabulary: [
      {
        termAr: 'نظم المعلومات الجغرافية (GIS)',
        termEn: 'Geographic Information Systems (GIS)',
        definitionAr: 'منظومة حاسوبية متكاملة مصممة لإدخال، وتخزين، ومعالجة، واسترجاع، وتحليل، ونمذجة، وعرض كافة أشكال البيانات المكانية المرتبطة بمواقع جغرافية.'
      },
      {
        termAr: 'البيانات المكانية والوصفية (Spatial & Attribute Data)',
        termEn: 'Spatial & Attribute Data',
        definitionAr: 'البيانات المكانية تحدد أين يقع المعلم بإحداثياته (X, Y)، بينما البيانات الوصفية هي الجداول النصية والرقمية التي تصف خصائص ذلك المعلم (كاسم المدرسة أو عدد سكان الحي).'
      },
      {
        termAr: 'النموذج الشبكي النقطي (Raster Model)',
        termEn: 'Raster Model',
        definitionAr: 'بنية بيانات مكانية تتكون من شبكة مصفوفة من الخلايا المربعة المتساوية (بكسل)، تحتوي كل خلية على قيمة رقمية تمثل ظاهرة معينة (كالصور الجوية والخرائط الحرارية).'
      },
      {
        termAr: 'النموذج المتجهي (Vector Model)',
        termEn: 'Vector Model',
        definitionAr: 'بنية بيانات مكانية تعتمد على الهندسة الإحداثية لتمثيل المعالم في شكل: نقاط (كالآبار والمدن)، خطوط (كالطرق ومجاري الأنهار)، ومضلعات مساحية (كالغابات والولايات).'
      },
      {
        termAr: 'الاستشعار عن بعد (Remote Sensing)',
        termEn: 'Remote Sensing',
        definitionAr: 'علم وفن الحصول على معلومات وبيانات موثوقة عن سطح الأرض ومعالمها دون ملامسة مادية مباشرة، باستخدام مستشعرات الأقمار الاصطناعية والطائرات.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الرابعة والأخيرة من كتاب الجغرافيا والدراسات البيئية: تشكل نظم المعلومات الجغرافية (GIS) والاستشعار عن بعد الذراع الرقمي والتقني للجغرافيا الحديثة؛ حيث تدمج الحواسيب والبرمجيات لتحليل البيانات المكانية والوصفية في طبقات متعددة، مما يمكن متخذي القرار في السودان من التنبؤ بالفيضانات وإدارة السدود وحماية الغابات وتخطيط المدن بأساليب علمية متطورة.',
    summaryEn: 'Summary of Unit 4: GIS and Remote Sensing constitute the digital backbone of contemporary geography, integrating spatial algorithms, satellite sensors, and layered data models for environmental governance in Sudan.',
    sections: [
      {
        titleAr: '1. مفهوم نظم المعلومات الجغرافية (GIS) ومكوناته ونماذج البيانات',
        titleEn: '1. GIS Concept, System Architecture, and Spatial Data Models',
        contentAr: `**أ - مفهوم نظم المعلومات الجغرافية (GIS):**
- **التعريف:** هي منظومة علمية وتقنية محوسبة تقوم بجمع وتخزين وإدارة ومعالجة وتحليل ونمذجة وإخراج البيانات الجغرافية المكانية المقترنة بمعلومات وصفية، لإنتاج خرائط وتقارير تدعم اتخاذ القرارات التنموية والبيئية.
- **تاريخ وتطور نظم GIS:** نشأت الفكرة في كندا والولايات المتحدة في ستينيات القرن العشرين، وتطورت مع ثورة الحواسيب والإنترنت لتصبح اليوم جزءاً لا يتجزأ من أنظمة الملاحة والهواتف الذكية والتخطيط الاستراتيجي للدول.

**ب - المكونات الخمسة الأساسية لنظام GIS:**
1. **الأجهزة (Hardware):** أجهزة الحاسوب، الخوادم السحابية، أجهزة GPS، شاشات العرض فائقة الدقة، والماسحات الضوئية والطابعات الكبيرة.
2. **البرمجيات (Software):** برامج متخصصة توفر أدوات إدخال ومعالجة البيانات المكانية وتحليلها وبناء النماذج وعرض الخرائط (مثل ArcGIS و QGIS).
3. **البيانات الجغرافية (Data - قلب النظام):**
   - **بيانات مكانية (Spatial):** تحدد موقع وشكل المعلم وإحداثياته على سطح الأرض.
   - **بيانات وصفية (Attribute):** جداول توضح خصائص المعلم وأسماءه وأرقامه وإحصاءاته.
4. **الكادر البشري (People):** المهندسون والمحللون والمبرمجون ومستخدمو النظام الذين يصممون قواعد البيانات ويجرون التحليلات المكانية.
5. **الأساليب والإجراءات (Methods):** النماذج الرياضية والخوارزميات وخطوات العمل المنظمة لتحليل الظواهر وحل المشكلات.

**ج - نماذج تمثيل البيانات المكانية في الحاسوب:**
- **النموذج المتجهي (Vector):** يمثل المعالم الجغرافية بأشكال هندسية دقيقة:
  - *النقطة (Point):* لتمثيل المعالم المنفردة صغيرة الحجم (مثل: موقع بئر ماء، مدرسة، أو محطة وقود).
  - *الخط (Line):* لتمثيل المعالم الطولية الشبكية (مثل: مسار نهر النيل، شبكة السكك الحديدية، أو خطوط الكهرباء).
  - *المضلع المساحي (Polygon):* لتمثيل المساحات المغلقة (مثل: مساحة ولاية الخرطوم، بحيرة خزان سنار، أو مشروع الجزيرة).
- **النموذج الشبكي النقطي (Raster):** يمثل السطح كمصفوفة من الخلايا المربعة (بكسل) المتراصة، وتناسب الظواهر المستمرة كـ **الصور الفضائية، الارتفاعات الطبوغرافية الرقمية (DEM)، وخرائط درجات الحرارة وتوزيع الأمطار**.`,
        contentEn: 'GIS architecture unites hardware, software, data, people, and methods. Spatial phenomena are represented via discrete Vector entities (points, lines, polygons) or continuous Raster pixel grids.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: تمييز معالم ولاية الخرطوم بين نموذجي Vector و Raster',
          titleEn: 'Interactive Example 1: Differentiating Khartoum Spatial Layers into Vector vs Raster',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الطبقات المتجهية (Vector): تمثيل مستشفيات الخرطوم كنقاط (Points)، ومجرى النيل الأبيض والأزرق كخطوط (Lines)، وحدود محليات الخرطوم كمضلعات (Polygons).',
              textEn: 'Vector layers depict hospitals as points, Nile riverbeds as lines, and municipal zones as polygons.'
            },
            {
              stepNumber: 2,
              textAr: 'الطبقات الشبكية (Raster): صورة فضائية ملتقطة بالقمر الصناعي (Landsat) لمنطقة المقرن، حيث كل بكسل يحمل قيمة انعكاس الضوء للطمي والمباني والمياه.',
              textEn: 'Raster imagery from Landsat registers reflection radiance values per grid pixel.'
            },
            {
              stepNumber: 3,
              textAr: 'التحليل المتكامل: وضع الطبقات المتجهية فوق الصورة الفضائية لتحديد المستشفيات والمدارس المهددة بالفيضان بدقة متناهية.',
              textEn: 'Layer overlay analysis identifies infrastructure exposed to inundation hazards.'
            }
          ],
          takeawayAr: 'يتميز نموذج Vector بالدقة الهندسية للحدود، بينما يتميز Raster بتمثيل الظواهر المستمرة كالصور الفضائية والارتفاعات.',
          takeawayEn: 'Vectors provide crisp boundary topology; rasters excel in representing continuous environmental surfaces.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-7',
          questionAr: 'ما هو النموذج المكاني في نظم GIS الأنسب لتمثيل مسار نهر النيل وشبكة الطرق القومية بالسودان؟',
          questionEn: 'Which GIS spatial data primitive is optimal for modeling the River Nile and highways?',
          optionsAr: ['النموذج المتجهي الخطي (Vector Line)', 'النموذج المتجهي النقطي (Vector Point)', 'النموذج النقطي الحجمي (3D Voxel)', 'النموذج المضلعي فقط'],
          optionsEn: ['Vector line primitive', 'Vector point primitive', '3D volumetric voxel', 'Polygon primitive only'],
          correctIndex: 0,
          explanationAr: 'تُمثل المعالم الطولية كالسكك الحديدية والأنهار والطرق بواسطة الخطوط المتجهية (Vector Lines) التي تربط سلسلة من الإحداثيات.',
          explanationEn: 'Linear geographic features like rivers and road networks are canonically digitized as vector lines.'
        }
      },
      {
        titleAr: '2. الاستشعار عن بعد وتطبيقات GIS في حوض النيل ومكافحة التصحر',
        titleEn: '2. Remote Sensing and GIS Applications in Nile Hydrology and Desertification',
        contentAr: `**أ - مبادئ الاستشعار عن بعد (Remote Sensing):**
- هو عملية رصد وجمع المعلومات الطيفية لسطح الأرض ومكوناتها عبر مستشعرات محمولة على أقمار اصطناعية أو طائرات، دون ملامسة سطحية مباشرة.
- **آلية العمل:** تسقط أشعة الشمس على معالم الأرض (مياه، نباتات، مبانٍ، وتربة)، فتقوم كل مادة بعكس جزء من الطاقة الكهرومغناطيسية وفق **بصمتها الطيفية المميزة**، ويسجل المستشعر الفضائي هذه الإشعاعات المنعكسة لإنتاج صور أقمار اصطناعية رقمية تفصيلية.

**ب - التطبيقات الاستراتيجية لنظم GIS والاستشعار في السودان:**
1. **إدارة الموارد المائية وحوض نهر النيل ورصد الفيضانات:**
   - استخدام صور الأقمار الاصطناعية ونماذج الارتفاع الرقمية لرصد كميات الأمطار الساقطة على الهضبة الإثيوبية ومنابع النيل الأزرق والنيل الأبيض.
   - نمذجة تدفقات المياه عبر نظم GIS للتنبؤ الدقيق بمواعيد ذروة الفيضان وسرعة وصوله إلى الخرطوم والولايات النيلية وسد مروي والروصيرص لفتح بوابات التصريف وحماية الأرواح والمنشآت.
2. **رصد ومكافحة التصحر والزحف الصحراوي:**
   - مقارنة الصور الفضائية التاريخية والحديثة لحساب معدلات تراجع الغطاء الشجري ونقص الرقعة الخضراء في كردفان ودارفور والولاية الشمالية.
   - تحديد أفضل المسارات الجغرافية والمناطق ذات المياه الجوفية لزراعة خطوط **الحزام الأخضر** وحماية الأراضي الزراعية من طمر الكثبان الرملية.
3. **التخطيط الحضري وتطوير المدن السودانية:**
   - استخدام قواعد البيانات المكانية لتحديد مواقع الخدمات الجديدة (مدارس، مستشفيات، ومحطات مياه) والتخطيط السليم لمدينة الخرطوم وبورتسودان والمدن الحضرية والحد من العشوائيات السكنية.
4. **إدارة الطوارئ الصحية والأوبئة:**
   - ربط بيانات انتشار الأمراض (مثل الملاريا وحمى الضنك والكوليرا) بمواقع البرك وتجمعات المياه الراكدة، لتوجيه فرق الرش والمكافحة بكفاءة وسرعة.`,
        contentEn: 'Satellite remote sensing measures spectral signatures. In Sudan, GIS is applied in real-time Nile flood simulation, reservoir management, desertification tracking, and urban development.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: نظام الإنذار المبكر للفيضانات النيلية بالسودان عبر GIS',
          titleEn: 'Interactive Example 2: Early Warning GIS Flood Modeling on the River Nile',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الأقمار الاصطناعية ترصد كميات هطول الأمطار فوق حوض النيل الأزرق في إثيوبيا وترسل البيانات رقمياً لمراكز الرصد بالخرطوم.',
              textEn: 'Satellites monitor precipitation across the Blue Nile Ethiopian headwaters.'
            },
            {
              stepNumber: 2,
              textAr: 'برمجيات GIS تحسب حجم المياه الجارية وتتنبأ بالارتفاع المتوقع لمنسوب مياه النيل في محطات الديم والروصيرص والخرطوم ومروي.',
              textEn: 'Hydrological GIS tools calculate runoff routing and downstream water levels.'
            },
            {
              stepNumber: 3,
              textAr: 'إصدار تحذيرات استباقية للدفاع المدني والمزارعين على الجزر النيلية قبل وصول موجة الفيضان بعدة أيام، مما يمنع الخسائر البشرية.',
              textEn: 'Early alerts notify civil defense and riverside agriculturalists days prior to flood peak.'
            }
          ],
          takeawayAr: 'التحليل المكاني بواسطة GIS ينقذ الأرواح ويحمي البنية التحتية عبر تحويل صور الأقمار الاصطناعية إلى قرارات وقائية دقيقة.',
          takeawayEn: 'Spatial modeling transforms satellite sensor streams into life-saving civic and infrastructural interventions.'
        },
        formativeCheck: {
          id: 'sd-g10-fc-8',
          questionAr: 'كيف تستفيد إدارة الموارد المائية في السودان من تقنيات الاستشعار عن بعد ونظم GIS؟',
          questionEn: 'How does water resource management in Sudan leverage remote sensing and GIS?',
          optionsAr: [
            'رصد الأمطار والتنبؤ بمناسيب فيضان النيل وإدارة بوابات السدود بكفاءة',
            'إلغاء الحاجة للسدود والخزانات نهائياً',
            'تغيير مسار الأنهار طبيعياً بالكامل',
            'استخراج المعادن من قاع البحار فقط'
          ],
          optionsEn: [
            'Monitoring rainfall, predicting Nile floods, and optimizing dam sluice gate operations',
            'Eliminating all necessity for dams entirely',
            'Altering river courses automatically',
            'Extracting deep-sea minerals exclusively'
          ],
          correctIndex: 0,
          explanationAr: 'تتيح تقنيات الاستشعار و GIS مراقبة حوض النيل ومناسيب السدود مسبقاً لحماية السكان وإدارة الري والفيضان بأعلى درجات الأمان.',
          explanationEn: 'Satellite monitoring coupled with GIS flow modeling enables proactive reservoir regulation and flood defense.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-geo-4-assess',
      titleAr: 'اختبار تقييم الوحدة الرابعة: نظم المعلومات الجغرافية (منهج بخت الرضا ٢٠٢٥م)',
      titleEn: 'Unit 4 Assessment: Geographic Information Systems (Bakht Al-Ruda 2025)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-g10-u4-q1',
          textAr: 'ما هما النوعان الأساسيان للبيانات التي يتعامل معها ويدمجها نظام المعلومات الجغرافي (GIS)؟',
          textEn: 'What are the two primary data formats integrated within a GIS environment?',
          optionsAr: [
            'البيانات المكانية (Spatial) والبيانات الوصفية (Attribute)',
            'البيانات الصوتية والبيانات الضوئية فقط',
            'البيانات اليدوية والبيانات الورقية فقط',
            'البيانات الفلكية والبيانات الذرية'
          ],
          optionsEn: [
            'Spatial coordinate data and attribute tabular data',
            'Audio and optical signals only',
            'Manual and paper ledger data only',
            'Astronomical and subatomic data'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أنواع بيانات نظم المعلومات الجغرافية',
          conceptTestedEn: 'Spatial vs attribute data distinction',
          explanationAr: 'يدمج نظام GIS بين البيانات المكانية التي توضح "أين يقع المعلم" والبيانات الوصفية التي توضح "ما هي خصائص هذا المعلم".',
          explanationEn: 'GIS fundamentally marries geometry (coordinates defining "where") with attribute tables (tabular descriptors of "what").',
          difficulty: 'easy'
        },
        {
          id: 'sd-g10-u4-q2',
          textAr: 'أي من العناصر التالية يمثل النموذج الشبكي النقطي (Raster) للبيانات المكانية في GIS؟',
          textEn: 'Which of the following elements represents the raster spatial data model in GIS?',
          optionsAr: [
            'مصفوفة من الخلايا المتساوية المربعة (البكسل) كالصور الفضائية',
            'مجموعة من النقاط والخطوط والمضلعات الهندسية',
            'جدول نصي خالٍ من أي إحداثيات',
            'خريطة ورقية مرسومة باليد'
          ],
          optionsEn: [
            'A matrix of uniform square cells (pixels) such as satellite imagery',
            'A set of geometric points, lines, and polygons',
            'A text table lacking coordinates',
            'A hand-drawn parchment map'
          ],
          correctIndex: 0,
          conceptTestedAr: 'النموذج الشبكي النقطي (Raster)',
          conceptTestedEn: 'Raster grid model characteristics',
          explanationAr: 'يتكون النموذج النقطي (Raster) من شبكة مصفوفية من الخلايا المربعة (البكسل) وتستخدم بكثرة في الصور الجوية والأقمار الاصطناعية.',
          explanationEn: 'Raster datasets represent reality through an array of georeferenced square pixel cells.',
          difficulty: 'medium'
        },
        {
          id: 'sd-g10-u4-q3',
          textAr: 'ما هي أهمية صور الأقمار الاصطناعية متعددة التواريخ في مكافحة التصحر بالسودان؟',
          textEn: 'What is the utility of multi-temporal satellite imagery in combating desertification in Sudan?',
          optionsAr: [
            'مقارنة ومراقبة تراجع الغطاء النباتي وزحف الكثبان الرملية عبر الزمن لتحديد خطط التشجير',
            'تغيير مناخ الصحراء فورياً إلى مناخ استوائي',
            'منع هبوب الرياح الشمالية الجافة نهائياً',
            'توليد الكهرباء مباشرة من الكثبان'
          ],
          optionsEn: [
            'Comparing vegetation loss and sand dune encroachment over time to direct reforestation',
            'Instantly transforming desert climate into rainforest',
            'Completely stopping northern dry winds',
            'Generating electricity directly from sand dunes'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات الاستشعار في مراقبة التصحر',
          conceptTestedEn: 'Multi-temporal remote sensing for desertification',
          explanationAr: 'تتيح الصور الفضائية عبر فترات زمنية متعاقبة كشف التغير في المساحات الخضراء وزحف الرمال، مما يساعد في التخطيط العلمي لمشاريع الحزام الأخضر.',
          explanationEn: 'Multi-temporal analysis detects land-cover change trajectories, pinpointing priority stabilization corridors.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
