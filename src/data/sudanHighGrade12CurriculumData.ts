import type { EducationTrack, Lecture, Subject } from '../types';

interface Grade12Unit {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  stepsAr: [string, string, string];
  stepsEn: [string, string, string];
}

interface Grade12Course {
  subject: Subject;
  titleAr: string;
  titleEn: string;
  track?: 'SCIENCE_MATH' | 'SHARIA_HUMANITIES';
  tracks?: readonly EducationTrack[];
  lessonLabelAr?: string;
  lessonLabelEn?: string;
  units: Grade12Unit[];
}

const courses: Grade12Course[] = [
  {
    subject: 'MATH',
    titleAr: 'الرياضيات الأساسية',
    titleEn: 'Basic Mathematics',
    track: 'SHARIA_HUMANITIES',
    units: [
      {
        titleAr: 'الدوال الحقيقية والنهايات',
        titleEn: 'Real Functions and Limits',
        focusAr: 'تمثيل الدوال الحقيقية وإيجاد نهايات الدوال الجبرية والمثلثية.',
        focusEn: 'Represent real functions and evaluate algebraic and trigonometric limits.',
        stepsAr: ['تحديد مجال الدالة وتمثيلها', 'اختيار قاعدة النهاية المناسبة', 'التحقق من النتيجة بالتعويض أو التحليل'],
        stepsEn: ['Identify the function domain and representation', 'Choose an appropriate limit rule', 'Check by substitution or algebraic simplification']
      },
      {
        titleAr: 'التفاضل وتطبيقاته',
        titleEn: 'Differentiation and Applications',
        focusAr: 'فهم المشتقة ومعدل التغير واستخدام قواعد التفاضل في المسائل.',
        focusEn: 'Understand derivatives and rates of change, and apply differentiation rules.',
        stepsAr: ['ربط المشتقة بمعدل التغير', 'تطبيق قواعد الاشتقاق', 'تفسير الناتج في المسألة'],
        stepsEn: ['Relate a derivative to a rate of change', 'Apply differentiation rules', 'Interpret the result in context']
      },
      {
        titleAr: 'التكامل',
        titleEn: 'Integration',
        focusAr: 'دراسة التكامل بوصفه العملية العكسية للتفاضل وتطبيق قواعده الأساسية.',
        focusEn: 'Study integration as the inverse process of differentiation and apply its basic rules.',
        stepsAr: ['تحديد صورة التكامل', 'اختيار القاعدة المناسبة', 'التحقق بالتفاضل'],
        stepsEn: ['Identify the integral form', 'Select a suitable rule', 'Verify by differentiation']
      },
      {
        titleAr: 'الإحصاء الوصفي',
        titleEn: 'Descriptive Statistics',
        focusAr: 'تنظيم البيانات وحساب مقاييس النزعة المركزية والتشتت بما فيها البيانات المبوبة.',
        focusEn: 'Organize data and calculate measures of central tendency and dispersion, including grouped data.',
        stepsAr: ['تنظيم القيم في جدول تكراري', 'حساب الوسط والوسيط والمنوال', 'وصف التشتت ومقارنة مجموعات البيانات'],
        stepsEn: ['Organize values in a frequency table', 'Calculate mean, median, and mode', 'Describe dispersion and compare data sets']
      },
      {
        titleAr: 'الاحتمالات',
        titleEn: 'Probability',
        focusAr: 'تمثيل التجارب العشوائية وفضاء العينة والأحداث، ثم تطبيق مسلمات الاحتمال.',
        focusEn: 'Represent random experiments, sample spaces, and events, then apply probability axioms.',
        stepsAr: ['وصف التجربة العشوائية', 'تحديد فضاء العينة والأحداث', 'حساب الاحتمال باستخدام القواعد المناسبة'],
        stepsEn: ['Describe the random experiment', 'Identify the sample space and events', 'Calculate probability using appropriate rules']
      },
      {
        titleAr: 'المصفوفات',
        titleEn: 'Matrices',
        focusAr: 'التعرف إلى المصفوفات وخصائصها وإجراء العمليات الأساسية عليها.',
        focusEn: 'Recognize matrices and their properties, and perform the basic matrix operations.',
        stepsAr: ['تحديد رتبة المصفوفة وعناصرها', 'تنفيذ الجمع والطرح والضرب بعدد', 'التحقق من صلاحية العملية وأبعاد الناتج'],
        stepsEn: ['Identify matrix order and entries', 'Perform addition, subtraction, and scalar multiplication', 'Check operation compatibility and result dimensions']
      }
    ]
  },
  {
    subject: 'MATH',
    titleAr: 'الرياضيات المتخصصة',
    titleEn: 'Specialized Mathematics',
    track: 'SCIENCE_MATH',
    units: [
      {
        titleAr: 'الدوال الحقيقية والنهايات',
        titleEn: 'Real Functions and Limits',
        focusAr: 'دراسة الدوال الحقيقية وخصائصها والنهايات اللازمة لبناء مفاهيم التفاضل.',
        focusEn: 'Study real functions, their properties, and limits that underpin differentiation.',
        stepsAr: ['تحليل مجال الدالة وسلوكها', 'تبسيط صورة النهاية', 'تطبيق خواص النهايات'],
        stepsEn: ['Analyze a function’s domain and behavior', 'Simplify the limit form', 'Apply limit properties']
      },
      {
        titleAr: 'التفاضل وقواعد الاشتقاق',
        titleEn: 'Differentiation and Derivative Rules',
        focusAr: 'تطبيق قواعد اشتقاق الدوال وإيجاد المشتقات المرتبطة بمسائل المنهج.',
        focusEn: 'Apply function differentiation rules and find derivatives used in the syllabus.',
        stepsAr: ['التعرف إلى نوع الدالة', 'اختيار قاعدة الاشتقاق', 'تبسيط المشتقة والتحقق منها'],
        stepsEn: ['Identify the function type', 'Choose the differentiation rule', 'Simplify and check the derivative']
      },
      {
        titleAr: 'تطبيقات التفاضل',
        titleEn: 'Applications of Differentiation',
        focusAr: 'استخدام المشتقة في تحليل تغير الدوال وحل مسائل تطبيقية.',
        focusEn: 'Use derivatives to analyze function behavior and solve applied problems.',
        stepsAr: ['صياغة العلاقة الرياضية', 'إيجاد المشتقة اللازمة', 'تفسير الحل ضمن شروط المسألة'],
        stepsEn: ['Formulate the mathematical relationship', 'Find the required derivative', 'Interpret the solution under the problem conditions']
      },
      {
        titleAr: 'التكامل وتطبيقاته',
        titleEn: 'Integration and Applications',
        focusAr: 'توظيف التكامل في المسائل المقررة وربطه بالتفاضل.',
        focusEn: 'Use integration in syllabus problems and relate it to differentiation.',
        stepsAr: ['تحديد المقدار المراد تكامله', 'اختيار طريقة التكامل', 'فحص الناتج بالمشتقة'],
        stepsEn: ['Identify the expression to integrate', 'Choose an integration method', 'Check the result by differentiation']
      },
      {
        titleAr: 'الدائرة',
        titleEn: 'The Circle',
        focusAr: 'تمثيل الدائرة وتحليل علاقاتها ومعادلاتها في المستوى وفق موضوعات الكتاب.',
        focusEn: 'Represent a circle and analyze its relations and equations in the plane.',
        stepsAr: ['تحديد المركز ونصف القطر', 'كتابة العلاقة أو المعادلة المناسبة', 'استخدام خصائص الدائرة في الحل'],
        stepsEn: ['Identify the center and radius', 'Write the appropriate relation or equation', 'Use circle properties to solve']
      },
      {
        titleAr: 'الأعداد المركبة',
        titleEn: 'Complex Numbers',
        focusAr: 'تمثيل الأعداد المركبة وإجراء العمليات عليها بحسب عرض الكتاب.',
        focusEn: 'Represent complex numbers and operate on them as presented in the textbook.',
        stepsAr: ['تحديد الجزأين الحقيقي والتخيلي', 'إجراء العملية المطلوبة', 'تبسيط الناتج وتمثيله'],
        stepsEn: ['Identify the real and imaginary parts', 'Perform the required operation', 'Simplify and represent the result']
      },
      {
        titleAr: 'موضوعات رياضية متخصصة من الكتاب',
        titleEn: 'Further Specialized Mathematics Topics',
        focusAr: 'مراجعة المحاور المتبقية في فهرس كتاب الرياضيات المتخصصة وربطها بمفاهيم الدوال والتفاضل والتكامل.',
        focusEn: 'Review the remaining contents of the specialized mathematics textbook and connect them to functions, differentiation, and integration.',
        stepsAr: ['قراءة عنوان الموضوع في الكتاب', 'ربطه بالمفاهيم السابقة', 'حل تدريب ممثل من الكتاب'],
        stepsEn: ['Read the topic heading in the textbook', 'Connect it to earlier concepts', 'Solve a representative textbook exercise']
      }
    ]
  },
  {
    subject: 'PHYSICS',
    titleAr: 'الفيزياء',
    titleEn: 'Physics',
    tracks: ['SCIENCE_MATH', 'SCIENCE_BIO', 'CS_ENGINEERING', 'HEALTH_LIFE', 'GENERAL'],
    lessonLabelAr: 'الفصل',
    lessonLabelEn: 'Chapter',
    units: [
      {
        titleAr: 'المجال التثاقلي (مجال الجاذبية)',
        titleEn: 'Gravitational Field',
        focusAr: 'دراسة مجال الجاذبية وقوة التجاذب، وتمثيل المجال وتطبيق قوانينه على الأجسام.',
        focusEn: 'Study gravitational fields and attraction, represent the field, and apply its laws to objects.',
        stepsAr: ['وصف قوة التجاذب بين الأجسام', 'تمثيل المجال التثاقلي', 'تطبيق قانون الجاذبية في المسائل'],
        stepsEn: ['Describe gravitational attraction between bodies', 'Represent the gravitational field', 'Apply the law of gravitation to problems']
      },
      {
        titleAr: 'الحركة الدائرية',
        titleEn: 'Circular Motion',
        focusAr: 'تحليل الحركة في المسار الدائري وربط السرعة والتسارع والقوة بنصف قطر المسار.',
        focusEn: 'Analyze motion along a circular path and relate speed, acceleration, and force to the radius.',
        stepsAr: ['تحديد مقادير الحركة الدائرية', 'ربط التسارع المركزي بالقوة المحصلة', 'حل مسائل الأجسام المتحركة في دائرة'],
        stepsEn: ['Identify circular-motion quantities', 'Relate centripetal acceleration to the resultant force', 'Solve problems involving objects moving in a circle']
      },
      {
        titleAr: 'حركة الكواكب والأقمار الاصطناعية',
        titleEn: 'Motion of Planets and Artificial Satellites',
        focusAr: 'تطبيق قانون الجاذبية والحركة الدائرية في تفسير مدارات الكواكب والأقمار الاصطناعية.',
        focusEn: 'Apply gravitation and circular-motion laws to explain planetary and artificial-satellite orbits.',
        stepsAr: ['وصف خصائص المدار', 'ربط قوة الجاذبية بالحركة المدارية', 'تفسير حركة الكواكب والأقمار الاصطناعية'],
        stepsEn: ['Describe orbital properties', 'Relate gravitational force to orbital motion', 'Explain planetary and artificial-satellite motion']
      },
      {
        titleAr: 'الحركة التوافقية البسيطة',
        titleEn: 'Simple Harmonic Motion',
        focusAr: 'دراسة الحركة الدورية واستعادة الاتزان، ووصف الإزاحة والزمن الدوري والتردد.',
        focusEn: 'Study periodic motion and restoring forces, and describe displacement, period, and frequency.',
        stepsAr: ['تمييز شروط الحركة التوافقية', 'ربط الإزاحة والزمن الدوري والتردد', 'تحليل أمثلة الحركة التوافقية'],
        stepsEn: ['Identify the conditions for harmonic motion', 'Relate displacement, period, and frequency', 'Analyze examples of harmonic motion']
      },
      {
        titleAr: 'الموجات',
        titleEn: 'Waves',
        focusAr: 'وصف الموجات وخصائصها وعلاقات السرعة والتردد والطول الموجي.',
        focusEn: 'Describe waves and their properties, including the relationships among speed, frequency, and wavelength.',
        stepsAr: ['تمييز أنواع الموجات', 'تحديد الطول الموجي والتردد والسعة', 'تطبيق علاقة سرعة الموجة'],
        stepsEn: ['Distinguish types of waves', 'Identify wavelength, frequency, and amplitude', 'Apply the wave-speed relationship']
      },
      {
        titleAr: 'الضوء',
        titleEn: 'Light',
        focusAr: 'دراسة سلوك الضوء وانتشاره والظواهر المرتبطة به تمهيدًا لموضوعات البصريات.',
        focusEn: 'Study how light travels and behaves as a foundation for the optics chapters.',
        stepsAr: ['وصف انتشار الضوء', 'تفسير انعكاس الضوء', 'ربط الظواهر الضوئية بمسار الأشعة'],
        stepsEn: ['Describe how light propagates', 'Explain reflection of light', 'Relate optical phenomena to ray paths']
      },
      {
        titleAr: 'الانكسار',
        titleEn: 'Refraction',
        focusAr: 'تفسير تغير اتجاه الضوء عند انتقاله بين الأوساط وربط ذلك بخصائص الوسط.',
        focusEn: 'Explain changes in light direction between media and relate them to the properties of each medium.',
        stepsAr: ['تحديد الوسطين وحدّ الفصل', 'تتبع الشعاع الساقط والمنكسر', 'تطبيق قانون الانكسار'],
        stepsEn: ['Identify the two media and their boundary', 'Trace the incident and refracted rays', 'Apply the law of refraction']
      },
      {
        titleAr: 'العدسات',
        titleEn: 'Lenses',
        focusAr: 'تحليل انكسار الضوء في العدسات وتحديد صفات الصور المتكونة.',
        focusEn: 'Analyze refraction in lenses and determine the properties of the images they form.',
        stepsAr: ['تمييز أنواع العدسات', 'رسم مسارات الأشعة الرئيسة', 'تحديد موضع الصورة وصفاتها'],
        stepsEn: ['Distinguish types of lenses', 'Trace the principal rays', 'Determine image position and properties']
      },
      {
        titleAr: 'المجموعات البصرية',
        titleEn: 'Optical Instruments',
        focusAr: 'دراسة تكوين الصور في المجموعات البصرية وكيفية توظيف العدسات في الأجهزة.',
        focusEn: 'Study image formation in optical systems and how lenses are used in instruments.',
        stepsAr: ['تحديد عناصر المجموعة البصرية', 'تتبع تكوّن الصورة', 'تفسير وظيفة الجهاز البصري'],
        stepsEn: ['Identify the components of an optical system', 'Trace image formation', 'Explain the function of the optical instrument']
      },
      {
        titleAr: 'المرايا الكرية',
        titleEn: 'Spherical Mirrors',
        focusAr: 'تحليل انعكاس الأشعة عن المرايا الكرية وربط بعد الجسم بموضع الصورة وصفاتها.',
        focusEn: 'Analyze reflection from spherical mirrors and relate object distance to image position and properties.',
        stepsAr: ['تحديد قطب المرآة وبؤرتها', 'رسم الأشعة الرئيسة', 'تحديد موضع الصورة وصفاتها'],
        stepsEn: ['Identify the mirror pole and focus', 'Trace the principal rays', 'Determine image position and properties']
      },
      {
        titleAr: 'المغناطيسية',
        titleEn: 'Magnetism',
        focusAr: 'التعرف إلى المجالات المغناطيسية وخصائصها وتأثيرها في المواد والمغانط.',
        focusEn: 'Explore magnetic fields, their properties, and their effects on materials and magnets.',
        stepsAr: ['وصف الأقطاب المغناطيسية', 'تمثيل المجال المغناطيسي', 'تحليل أثر المجال في الأجسام'],
        stepsEn: ['Describe magnetic poles', 'Represent the magnetic field', 'Analyze the field’s effects on objects']
      },
      {
        titleAr: 'الكهرباء الساكنة',
        titleEn: 'Static Electricity',
        focusAr: 'دراسة الشحنات الكهربائية والقوى والمجالات الكهربائية الساكنة.',
        focusEn: 'Study electric charges, forces, and static electric fields.',
        stepsAr: ['تمييز أنواع الشحنات', 'تحليل القوى بين الشحنات', 'تمثيل المجال الكهربائي'],
        stepsEn: ['Distinguish types of charge', 'Analyze forces between charges', 'Represent the electric field']
      },
      {
        titleAr: 'الكهرباء التيارية',
        titleEn: 'Current Electricity',
        focusAr: 'فهم التيار الكهربائي والدوائر ومقادير الجهد والمقاومة والعلاقات بينها.',
        focusEn: 'Understand electric current and circuits, and the relationships among voltage and resistance.',
        stepsAr: ['تحديد عناصر الدائرة ومقاديرها', 'تطبيق العلاقة بين الجهد والتيار والمقاومة', 'تحليل الدوائر الكهربائية'],
        stepsEn: ['Identify circuit components and quantities', 'Apply the relationship among voltage, current, and resistance', 'Analyze electric circuits']
      },
      {
        titleAr: 'المجال المغناطيسي للتيار الكهربائي',
        titleEn: 'Magnetic Field of Electric Current',
        focusAr: 'دراسة المجال المغناطيسي الناتج عن مرور التيار في موصلات وأشكالها المختلفة.',
        focusEn: 'Study the magnetic field produced by current in conductors of different shapes.',
        stepsAr: ['تحديد اتجاه التيار والمجال', 'مقارنة المجالات حول الموصلات', 'تطبيق قواعد تحديد اتجاه المجال'],
        stepsEn: ['Identify current and field directions', 'Compare fields around conductors', 'Apply rules for determining field direction']
      },
      {
        titleAr: 'الذرة',
        titleEn: 'The Atom',
        focusAr: 'التعرف إلى بنية الذرة وبعض المفاهيم الفيزيائية الحديثة المرتبطة بها.',
        focusEn: 'Explore atomic structure and selected modern-physics concepts related to the atom.',
        stepsAr: ['وصف مكونات الذرة', 'مقارنة النماذج الذرية', 'ربط الأدلة بالنموذج المناسب'],
        stepsEn: ['Describe the components of the atom', 'Compare atomic models', 'Relate evidence to an appropriate model']
      },
      {
        titleAr: 'الاتصالات',
        titleEn: 'Communications',
        focusAr: 'فهم المبادئ الفيزيائية التي تقوم عليها أنظمة الاتصالات ونقل الإشارات.',
        focusEn: 'Understand the physical principles behind communications systems and signal transmission.',
        stepsAr: ['تحديد الإشارة ومصدرها', 'وصف انتقال المعلومات', 'ربط المفاهيم الفيزيائية بتطبيقات الاتصالات'],
        stepsEn: ['Identify a signal and its source', 'Describe how information is transmitted', 'Connect physics concepts to communications applications']
      }
    ]
  },
  {
    subject: 'CHEMISTRY',
    titleAr: 'الكيمياء',
    titleEn: 'Chemistry',
    tracks: ['SCIENCE_MATH', 'SCIENCE_BIO', 'CS_ENGINEERING', 'HEALTH_LIFE', 'GENERAL'],
    units: [
      {
        titleAr: 'مشتقات الهيدروكربونات العضوية',
        titleEn: 'Organic Hydrocarbon Derivatives',
        focusAr: 'دراسة المجموعات الوظيفية ومشتقات الهيدروكربونات وخواصها وطرق تحضيرها.',
        focusEn: 'Study functional groups and hydrocarbon derivatives, their properties, and preparation.',
        stepsAr: ['تحديد المجموعة الوظيفية', 'ربطها بالخواص والتسمية', 'تمثيل التحضير أو التفاعل'],
        stepsEn: ['Identify the functional group', 'Relate it to properties and nomenclature', 'Represent a preparation or reaction']
      },
      {
        titleAr: 'الهيدروكربونات وتطبيقاتها',
        titleEn: 'Hydrocarbons and Their Applications',
        focusAr: 'مقارنة أنواع الهيدروكربونات وربط تركيبها بخواصها وتفاعلاتها.',
        focusEn: 'Compare hydrocarbon classes and relate their structures to properties and reactions.',
        stepsAr: ['تمييز نوع المركب', 'ربط التركيب بالتسمية والخواص', 'كتابة التفاعل المناسب'],
        stepsEn: ['Classify the compound', 'Relate structure to nomenclature and properties', 'Write the relevant reaction']
      },
      {
        titleAr: 'الأحماض والقواعد',
        titleEn: 'Acids and Bases',
        focusAr: 'التعرف إلى سلوك الأحماض والقواعد وتطبيق المفاهيم الواردة في وحدة الكتاب.',
        focusEn: 'Recognize acid and base behavior and apply the concepts in the textbook unit.',
        stepsAr: ['تحديد المادة الحمضية أو القاعدية', 'وصف التفاعل أو التعادل', 'تفسير النتائج الكيميائية'],
        stepsEn: ['Identify the acid or base', 'Describe the reaction or neutralization', 'Interpret the chemical results']
      },
      {
        titleAr: 'التحليل الكيميائي الكيفي',
        titleEn: 'Qualitative Chemical Analysis',
        focusAr: 'استخدام الملاحظات والاختبارات النوعية للاستدلال على مكونات العينة.',
        focusEn: 'Use observations and qualitative tests to infer the components of a sample.',
        stepsAr: ['تحديد الاختبار المناسب', 'رصد المشاهدة', 'استنتاج الأيون أو المادة المحتملة'],
        stepsEn: ['Select a suitable test', 'Record the observation', 'Infer the likely ion or substance']
      },
      {
        titleAr: 'التحليل الكيميائي الحجمي',
        titleEn: 'Volumetric Analysis',
        focusAr: 'إجراء حسابات التحليل الحجمي وربط الحجم والتركيز بعلاقة المعايرة.',
        focusEn: 'Perform volumetric analysis calculations and relate volume and concentration in titration.',
        stepsAr: ['تحديد بيانات المعايرة', 'استخدام العلاقة الستوكيومترية', 'حساب المقدار المطلوب والتحقق من وحدته'],
        stepsEn: ['Identify titration data', 'Use the stoichiometric relationship', 'Calculate the required quantity and check its unit']
      },
      {
        titleAr: 'الطاقة في التفاعلات الكيميائية',
        titleEn: 'Energy in Chemical Reactions',
        focusAr: 'تحليل التغيرات الحرارية المصاحبة للتفاعلات الكيميائية.',
        focusEn: 'Analyze thermal changes associated with chemical reactions.',
        stepsAr: ['تحديد النظام ومحيطه', 'تمييز التفاعل الطارد والماص للحرارة', 'تفسير مخطط الطاقة'],
        stepsEn: ['Identify the system and surroundings', 'Distinguish exothermic and endothermic reactions', 'Interpret an energy diagram']
      },
      {
        titleAr: 'سرعة التفاعلات الكيميائية وآليتها',
        titleEn: 'Reaction Rates and Mechanisms',
        focusAr: 'دراسة سرعة التفاعل والعوامل المؤثرة فيها وربطها بمسار التفاعل.',
        focusEn: 'Study reaction rate and its influencing factors, and relate it to the reaction pathway.',
        stepsAr: ['تحديد كيفية قياس السرعة', 'تحليل أثر العوامل', 'ربط الخطوات بآلية التفاعل'],
        stepsEn: ['Determine how rate is measured', 'Analyze the effect of factors', 'Relate steps to the reaction mechanism']
      },
      {
        titleAr: 'مبادئ الاتزان الكيميائي',
        titleEn: 'Principles of Chemical Equilibrium',
        focusAr: 'فهم الاتزان الديناميكي وتحليل أثر تغير الظروف على نظام متزن.',
        focusEn: 'Understand dynamic equilibrium and analyze how changing conditions affects an equilibrium system.',
        stepsAr: ['تمييز الاتزان الديناميكي', 'تحديد العامل المتغير', 'توقع اتجاه الاستجابة'],
        stepsEn: ['Recognize dynamic equilibrium', 'Identify the changed condition', 'Predict the direction of response']
      },
      {
        titleAr: 'الكيمياء الكهربائية والنووية',
        titleEn: 'Electrochemistry and Nuclear Chemistry',
        focusAr: 'مراجعة محورَي الكيمياء الكهربائية والكيمياء النووية كما يردان في فهرس الكتاب.',
        focusEn: 'Study electrochemistry and nuclear chemistry as listed in the textbook contents.',
        stepsAr: ['تحديد نوع التحول الكيميائي أو النووي', 'تمثيل التغير بالرموز المناسبة', 'تفسير الطاقة أو الشحنة الناتجة'],
        stepsEn: ['Identify the chemical or nuclear change', 'Represent it with suitable symbols', 'Interpret the resulting energy or charge']
      }
    ]
  },
  {
    subject: 'BIOLOGY',
    titleAr: 'علم الأحياء',
    titleEn: 'Biology',
    tracks: ['SCIENCE_BIO', 'HEALTH_LIFE', 'GENERAL'],
    units: [
      {
        titleAr: 'التكاثر',
        titleEn: 'Reproduction',
        focusAr: 'مقارنة التكاثر الجنسي واللاجنسي وتتبع موضوعات التكاثر في الكائنات الحية والإنسان.',
        focusEn: 'Compare sexual and asexual reproduction and study reproduction in organisms and humans.',
        stepsAr: ['مقارنة نمطي التكاثر', 'تحديد مراحل العملية', 'ربط التكاثر باستمرار النوع'],
        stepsEn: ['Compare the two modes of reproduction', 'Identify stages of the process', 'Relate reproduction to continuity of a species']
      },
      {
        titleAr: 'الوراثة',
        titleEn: 'Genetics',
        focusAr: 'تتبع انتقال الصفات الوراثية وتحليل أمثلة الوراثة الواردة في المقرر.',
        focusEn: 'Trace the inheritance of traits and analyze genetics examples in the course.',
        stepsAr: ['تمييز الصفة ومصدرها الوراثي', 'تمثيل انتقالها بين الأجيال', 'تفسير النتائج الوراثية'],
        stepsEn: ['Identify a trait and its genetic basis', 'Represent inheritance across generations', 'Interpret the genetic outcomes']
      },
      {
        titleAr: 'النظام البيئي',
        titleEn: 'The Ecosystem',
        focusAr: 'تحليل العلاقات في النظام البيئي وأثر تعامل الإنسان مع الموارد الطبيعية.',
        focusEn: 'Analyze relationships in ecosystems and the effects of human interaction with natural resources.',
        stepsAr: ['تحديد مكونات النظام البيئي', 'توضيح العلاقات بين الكائنات', 'تقييم أثر النشاط البشري'],
        stepsEn: ['Identify ecosystem components', 'Explain relationships among organisms', 'Evaluate the effects of human activity']
      }
    ]
  },
  {
    subject: 'ISLAMIC_STUDIES',
    titleAr: 'التربية الإسلامية',
    titleEn: 'Islamic Studies',
    units: [
      {
        titleAr: 'أحكام المد',
        titleEn: 'Rules of Madd',
        focusAr: 'تمييز أنواع المد وأسباب المد الفرعي وضبط مقدار المد في أمثلته.',
        focusEn: 'Distinguish types of madd, causes of secondary madd, and their measures in examples.',
        stepsAr: ['تحديد حرف المد', 'معرفة سبب المد', 'تعيين النوع والمقدار'],
        stepsEn: ['Identify the madd letter', 'Recognize the cause', 'Determine the type and measure']
      },
      {
        titleAr: 'سورة النور: التلاوة والتفسير',
        titleEn: 'Surat An-Nur: Recitation and Tafsir',
        focusAr: 'دراسة الآيات المقررة من سورة النور وما تتضمنه من أحكام وآداب اجتماعية.',
        focusEn: 'Study the assigned verses of Surat An-Nur and their legal and social guidance.',
        stepsAr: ['تلاوة الآيات وضبطها', 'شرح المفردات والمعنى', 'استنباط الأحكام والآداب'],
        stepsEn: ['Recite the verses accurately', 'Explain vocabulary and meaning', 'Derive rulings and manners']
      },
      {
        titleAr: 'آيات مختارة: التفسير والفهم',
        titleEn: 'Selected Verses: Tafsir and Understanding',
        focusAr: 'تدبر الآيات المقررة في صفات عباد الرحمن والعدل والوفاء بالعهد وآيات المواريث.',
        focusEn: 'Study assigned verses on the servants of the Most Merciful, justice, fulfilling covenants, and inheritance.',
        stepsAr: ['قراءة الآية في سياقها', 'شرح دلالاتها', 'استخلاص القيم والأحكام'],
        stepsEn: ['Read the verse in context', 'Explain its meaning', 'Draw out its values and rulings']
      },
      {
        titleAr: 'أحكام فقهية عامة',
        titleEn: 'General Jurisprudential Rulings',
        focusAr: 'دراسة الأحكام الواردة في الكتاب حول تنظيم النسل والأيمان والنذر والوقف والدين.',
        focusEn: 'Study the textbook’s rulings on family planning, oaths, vows, endowments, and debts.',
        stepsAr: ['تحديد المسألة الفقهية', 'بيان الحكم ودليله كما درسه الطالب', 'تطبيق الحكم على الحالة'],
        stepsEn: ['Identify the jurisprudential question', 'State the ruling and studied evidence', 'Apply the ruling to a case']
      },
      {
        titleAr: 'الأمة الإسلامية وخصائصها',
        titleEn: 'The Muslim Ummah and Its Characteristics',
        focusAr: 'بيان معنى الأمة الإسلامية ونشأتها وخصائصها كما يعرضها المقرر.',
        focusEn: 'Explain the meaning, origins, and characteristics of the Muslim ummah as presented in the course.',
        stepsAr: ['تعريف الأمة', 'تتبع نشأتها', 'شرح خصائصها الرئيسة'],
        stepsEn: ['Define the ummah', 'Trace its origins', 'Explain its main characteristics']
      },
      {
        titleAr: 'التوحيد والإيمان',
        titleEn: 'Tawhid and Faith',
        focusAr: 'مراجعة موضوعات التوحيد والإيمان والعلم في القرآن الكريم والسنة النبوية.',
        focusEn: 'Review tawhid, faith, and knowledge in the Qur’an and Prophetic Sunnah.',
        stepsAr: ['تحديد المفهوم العقدي', 'ربطه بالنص المقرر', 'شرح أثره في العمل والسلوك'],
        stepsEn: ['Identify the belief concept', 'Relate it to the assigned text', 'Explain its effect on conduct']
      }
    ]
  },
  {
    subject: 'HISTORY',
    titleAr: 'التاريخ',
    titleEn: 'History',
    tracks: ['SHARIA_HUMANITIES', 'GENERAL'],
    units: [
      {
        titleAr: 'الثورة المهدية والدولة في السودان (1881–1899م)',
        titleEn: 'The Mahdist Revolution and State in Sudan (1881–1899)',
        focusAr: 'تتبع نشأة الثورة المهدية وأحداثها وقيام الدولة ونظامها.',
        focusEn: 'Trace the Mahdist Revolution, its events, the state’s establishment, and its administration.',
        stepsAr: ['تحديد الخلفية التاريخية', 'ترتيب الأحداث زمنيًا', 'تحليل النتائج السياسية'],
        stepsEn: ['Identify the historical background', 'Sequence events chronologically', 'Analyze political outcomes']
      },
      {
        titleAr: 'الحكم الثنائي والحركة الوطنية',
        titleEn: 'The Anglo-Egyptian Condominium and National Movement',
        focusAr: 'دراسة الحكم الثنائي وتطور الحركة الوطنية السودانية حتى الاستقلال.',
        focusEn: 'Study the condominium and the development of the Sudanese national movement to independence.',
        stepsAr: ['وصف نظام الحكم', 'تتبع مراحل الحركة الوطنية', 'ربط المطالب بالأحداث'],
        stepsEn: ['Describe the governing system', 'Trace stages of the national movement', 'Connect demands with events']
      },
      {
        titleAr: 'دولة الخلافة العثمانية',
        titleEn: 'The Ottoman Caliphate',
        focusAr: 'التعرف إلى نشأة الدولة العثمانية وتوسعها ونظم الحكم وأسباب التدهور والإلغاء.',
        focusEn: 'Study the Ottoman state’s origins, expansion, governing systems, decline, and abolition.',
        stepsAr: ['تحديد مراحل النشأة والتوسع', 'مقارنة نظم الحكم', 'تحليل عوامل التدهور والتحول'],
        stepsEn: ['Identify stages of formation and expansion', 'Compare governing systems', 'Analyze factors of decline and change']
      },
      {
        titleAr: 'حركات التحرر العربية',
        titleEn: 'Arab Liberation Movements',
        focusAr: 'دراسة حركات التحرر في العالم العربي والسياقات التاريخية الواردة في الكتاب.',
        focusEn: 'Study liberation movements in the Arab world and their historical contexts.',
        stepsAr: ['تحديد الحركة ومجالها', 'شرح ظروف نشأتها', 'استنتاج أثرها في الاستقلال'],
        stepsEn: ['Identify the movement and its region', 'Explain its origins', 'Assess its contribution to independence']
      }
    ]
  },
  {
    subject: 'GEOGRAPHY',
    titleAr: 'الجغرافيا والدراسات البيئية',
    titleEn: 'Geography and Environmental Studies',
    tracks: ['SHARIA_HUMANITIES', 'GENERAL'],
    units: [
      {
        titleAr: 'قراءة الصور الجوية والفضائية والاستشعار عن بعد',
        titleEn: 'Aerial and Satellite Imagery and Remote Sensing',
        focusAr: 'تفسير الصور الجوية والفضائية واستخدامها في استخلاص المعلومات المكانية.',
        focusEn: 'Interpret aerial and satellite imagery to derive spatial information.',
        stepsAr: ['تحديد نوع الصورة ومقياسها', 'تمييز الظواهر والمعالم', 'استخلاص معلومات مكانية'],
        stepsEn: ['Identify image type and scale', 'Recognize features and patterns', 'Derive spatial information']
      },
      {
        titleAr: 'الجغرافيا الاقتصادية',
        titleEn: 'Economic Geography',
        focusAr: 'دراسة الإنتاج الزراعي والحيواني والمائي والصناعي والطاقة والتجارة والنقل والسياحة.',
        focusEn: 'Study agriculture, livestock, water, industry, energy, trade, transport, and tourism.',
        stepsAr: ['تحديد النشاط ومقوماته', 'تفسير توزيعه المكاني', 'ربط الإنتاج بالنقل والتجارة'],
        stepsEn: ['Identify an activity and its requirements', 'Explain its spatial distribution', 'Relate production to transport and trade']
      },
      {
        titleAr: 'الإنسان والبيئة والتنمية',
        titleEn: 'People, Environment, and Development',
        focusAr: 'تحليل قضايا التلوث واستنزاف الموارد والأمن الغذائي والتنمية ومشكلات المدن.',
        focusEn: 'Analyze pollution, resource depletion, food security, development, and urban problems.',
        stepsAr: ['تحديد القضية البيئية أو التنموية', 'تحليل أسبابها وآثارها', 'اقتراح استجابة مستدامة'],
        stepsEn: ['Identify an environmental or development issue', 'Analyze its causes and effects', 'Propose a sustainable response']
      }
    ]
  },
  {
    subject: 'COMPUTER_SCIENCE',
    titleAr: 'علوم الحاسوب',
    titleEn: 'Computer Science',
    tracks: ['SCIENCE_MATH', 'CS_ENGINEERING', 'GENERAL'],
    units: [
      {
        titleAr: 'المنطق والعد الثنائي',
        titleEn: 'Logic and Binary Number System',
        focusAr: 'تمثيل المعلومات بالنظام الثنائي وتطبيق مبادئ المنطق ذات الصلة بالحاسوب.',
        focusEn: 'Represent information in binary and apply logic concepts relevant to computing.',
        stepsAr: ['تحديد المدخلات والرموز', 'تحويل التمثيل العددي', 'التحقق من النتيجة'],
        stepsEn: ['Identify inputs and symbols', 'Convert the number representation', 'Verify the result']
      },
      {
        titleAr: 'البيانات وتمثيلها',
        titleEn: 'Data and Its Representation',
        focusAr: 'فهم البيانات وطرق تمثيلها ومعالجتها ضمن موضوعات الكتاب.',
        focusEn: 'Understand data and its representation and processing in the textbook topics.',
        stepsAr: ['تمييز نوع البيانات', 'اختيار طريقة التمثيل', 'تفسير البيانات المعالجة'],
        stepsEn: ['Distinguish the data type', 'Choose a representation', 'Interpret processed data']
      },
      {
        titleAr: 'البرمجة بلغة Pascal',
        titleEn: 'Programming in Pascal',
        focusAr: 'قراءة برامج Pascal وبناء تعليمات تستخدم مفاهيم الكتاب.',
        focusEn: 'Read Pascal programs and construct statements using the textbook concepts.',
        stepsAr: ['تحديد المدخلات والمخرجات', 'كتابة خطوات البرنامج', 'اختبار التنفيذ وتصحيح الأخطاء'],
        stepsEn: ['Identify inputs and outputs', 'Write program steps', 'Test execution and correct errors']
      },
      {
        titleAr: 'الخوارزميات',
        titleEn: 'Algorithms',
        focusAr: 'صياغة خطوات محددة لحل المسألة وتمثيل الخوارزمية ومراجعة صحتها.',
        focusEn: 'Specify steps to solve a problem, represent the algorithm, and check its correctness.',
        stepsAr: ['تحليل المشكلة', 'ترتيب خطوات الحل', 'اختبار الخوارزمية بحالات مناسبة'],
        stepsEn: ['Analyze the problem', 'Order the solution steps', 'Test the algorithm with suitable cases']
      },
      {
        titleAr: 'نظم التشغيل',
        titleEn: 'Operating Systems',
        focusAr: 'التعرف إلى دور نظام التشغيل في إدارة موارد الحاسوب وتشغيل البرامج.',
        focusEn: 'Understand how an operating system manages computer resources and runs programs.',
        stepsAr: ['تحديد موارد الحاسوب', 'شرح دور نظام التشغيل', 'ربط الخدمة بالمهمة التي تؤديها'],
        stepsEn: ['Identify computer resources', 'Explain the operating system’s role', 'Relate a service to the task it performs']
      },
      {
        titleAr: 'تحليل وتصميم النظم',
        titleEn: 'Systems Analysis and Design',
        focusAr: 'تحليل احتياجات النظام وتنظيم تصميمه ومكوناته قبل التنفيذ.',
        focusEn: 'Analyze system requirements and organize its design and components before implementation.',
        stepsAr: ['جمع المتطلبات', 'نمذجة النظام ومكوناته', 'مراجعة التصميم وفق الحاجة'],
        stepsEn: ['Gather requirements', 'Model the system and its components', 'Review the design against needs']
      }
    ]
  },
  {
    subject: 'ARABIC_LIT',
    titleAr: 'اللغة العربية: المطالعة والأدب والقواعد والبلاغة والتعبير',
    titleEn: 'Arabic: Reading, Literature, Grammar, Rhetoric, and Writing',
    units: [
      {
        titleAr: 'الأدب في العصر الجاهلي',
        titleEn: 'Literature of the Pre-Islamic Era',
        focusAr: 'قراءة نصوص من الأدب الجاهلي وفهم سياقها وأفكارها وصورها الفنية.',
        focusEn: 'Read pre-Islamic literature and understand its context, ideas, and imagery.',
        stepsAr: ['تحديد سياق النص', 'شرح المفردات والأفكار', 'تحليل الصور والأساليب'],
        stepsEn: ['Establish the text’s context', 'Explain vocabulary and ideas', 'Analyze imagery and style']
      },
      {
        titleAr: 'نصوص من عصور الأدب العربي',
        titleEn: 'Texts from Arabic Literary Periods',
        focusAr: 'قراءة نصوص شعرية ونثرية مختارة من العصور الأدبية الواردة في الكتاب.',
        focusEn: 'Read selected poetry and prose from the literary periods represented in the book.',
        stepsAr: ['قراءة النص قراءة واعية', 'تحديد فكرته وعاطفته', 'تذوق خصائصه الفنية'],
        stepsEn: ['Read the text closely', 'Identify its idea and tone', 'Appreciate its literary features']
      },
      {
        titleAr: 'المطالعة وتحليل النص',
        titleEn: 'Reading and Text Analysis',
        focusAr: 'تنمية الفهم القرائي واستخلاص المعاني والقيم من نصوص المطالعة.',
        focusEn: 'Develop reading comprehension and infer meaning and values from reading passages.',
        stepsAr: ['تحديد الفكرة الرئيسة', 'استخلاص الأدلة والتفاصيل', 'تلخيص المعنى بأسلوب الطالب'],
        stepsEn: ['Identify the main idea', 'Extract supporting details', 'Summarize in the learner’s own words']
      },
      {
        titleAr: 'قواعد النحو والصرف',
        titleEn: 'Grammar and Morphology',
        focusAr: 'مراجعة موضوعات القواعد والصرف والتطبيقات اللغوية الواردة في كتاب الصف.',
        focusEn: 'Review grammar, morphology, and language applications in the grade-level books.',
        stepsAr: ['تحديد التركيب اللغوي', 'تطبيق القاعدة على المثال', 'ضبط الإعراب أو الصيغة'],
        stepsEn: ['Identify the language structure', 'Apply the rule to an example', 'Determine the parsing or word form']
      },
      {
        titleAr: 'البلاغة والتعبير',
        titleEn: 'Rhetoric and Composition',
        focusAr: 'تحليل الأساليب البلاغية والتدرب على التعبير الكتابي وفق موضوعات الكتاب.',
        focusEn: 'Analyze rhetorical devices and practise written expression using the textbook topics.',
        stepsAr: ['ملاحظة الأسلوب في النص', 'تفسير أثره في المعنى', 'صياغة تعبير مترابط'],
        stepsEn: ['Notice the style in a text', 'Explain its effect on meaning', 'Compose a coherent response']
      },
      {
        titleAr: 'اللغة العربية الخاصة',
        titleEn: 'Special Arabic Language Course',
        focusAr: 'مراجعة القراءة والأدب والقواعد والإملاء والتدريبات الخاصة الواردة في الكتاب المخصص.',
        focusEn: 'Review reading, literature, grammar, spelling, and exercises in the dedicated language book.',
        stepsAr: ['قراءة النص', 'تطبيق المهارة اللغوية', 'مراجعة الإملاء والمعنى'],
        stepsEn: ['Read the passage', 'Apply the language skill', 'Review spelling and meaning']
      }
    ]
  },
  {
    subject: 'ENGLISH',
    titleAr: 'اللغة الإنجليزية',
    titleEn: 'English',
    units: [
      {
        titleAr: 'القراءة والفهم: Trees for Life',
        titleEn: 'Reading and Comprehension: Trees for Life',
        focusAr: 'قراءة النص وفهم أثر الأشجار والغابات في حياة الناس والبيئة.',
        focusEn: 'Read the passage and understand the value of trees and forests for people and the environment.',
        stepsAr: ['توقع موضوع النص من عنوانه', 'استخراج الأفكار والتفاصيل', 'مناقشة أثر حماية الغابات'],
        stepsEn: ['Predict the topic from the title', 'Extract ideas and details', 'Discuss the value of forest conservation']
      },
      {
        titleAr: 'اللغة في سياق النصوص',
        titleEn: 'Language in Context',
        focusAr: 'تنمية المفردات وفهم التراكيب من سياقات القراءة والأنشطة الواردة في الكتاب.',
        focusEn: 'Develop vocabulary and understand structures through the readings and activities in the book.',
        stepsAr: ['استنتاج معنى المفردة من السياق', 'ملاحظة التركيب اللغوي', 'إعادة استخدامه في جملة'],
        stepsEn: ['Infer word meaning from context', 'Notice the language structure', 'Reuse it in a sentence']
      },
      {
        titleAr: 'التواصل الشفهي والكتابي',
        titleEn: 'Oral and Written Communication',
        focusAr: 'التدرب على فهم المقروء والتعبير عن الأفكار باللغة الإنجليزية ضمن موضوعات الكتاب.',
        focusEn: 'Practise comprehension and expressing ideas in English through the book’s topics.',
        stepsAr: ['تحديد الغرض من التواصل', 'تنظيم الأفكار', 'تقديم إجابة واضحة ومترابطة'],
        stepsEn: ['Identify the communication purpose', 'Organize ideas', 'Give a clear, connected response']
      }
    ]
  },
  {
    subject: 'FRENCH',
    titleAr: 'اللغة الفرنسية',
    titleEn: 'French',
    tracks: ['SHARIA_HUMANITIES', 'GENERAL'],
    units: [
      {
        titleAr: 'الوحدة 13: C’est trop cher !',
        titleEn: 'Unit 13: C’est trop cher !',
        focusAr: 'التواصل حول الأسعار والشراء والبيع والتفاوض على ثمن السلع.',
        focusEn: 'Communicate about prices, buying and selling, and negotiating the cost of goods.',
        stepsAr: ['تحديد السلعة والسعر', 'استخدام عبارات السؤال والتفاوض', 'إتمام حوار شراء قصير'],
        stepsEn: ['Identify the item and its price', 'Use questions and negotiation phrases', 'Complete a short shopping dialogue']
      },
      {
        titleAr: 'الوحدة 14: On s’habille !',
        titleEn: 'Unit 14: On s’habille !',
        focusAr: 'التواصل حول الملابس والاختيارات المتعلقة بها.',
        focusEn: 'Communicate about clothing and choices related to it.',
        stepsAr: ['تسمية الملابس', 'وصف الاختيار', 'التعبير عن التفضيل'],
        stepsEn: ['Name clothing items', 'Describe a choice', 'Express a preference']
      },
      {
        titleAr: 'الوحدة 15: Je cherche un emploi d’étudiant',
        titleEn: 'Unit 15: Je cherche un emploi d’étudiant',
        focusAr: 'فهم مفردات العمل الطلابي والتعبير عن البحث عن فرصة عمل.',
        focusEn: 'Understand vocabulary about student work and express the search for a job.',
        stepsAr: ['تحديد نوع العمل المطلوب', 'عرض المهارات والاحتياجات', 'صياغة طلب أو حوار مناسب'],
        stepsEn: ['Identify the desired job', 'Present skills and needs', 'Prepare a suitable request or dialogue']
      },
      {
        titleAr: 'الوحدة 16: À la une !',
        titleEn: 'Unit 16: À la une !',
        focusAr: 'التعامل مع موضوعات الوحدة من خلال مهارات الاستماع والقراءة والتحدث والكتابة.',
        focusEn: 'Engage with the unit topics through listening, reading, speaking, and writing.',
        stepsAr: ['فهم الرسالة الأساسية', 'استخراج المعلومات', 'إعادة عرضها شفهيًا أو كتابيًا'],
        stepsEn: ['Understand the main message', 'Extract information', 'Present it orally or in writing']
      },
      {
        titleAr: 'الوحدة 17: Vive la Francophonie !',
        titleEn: 'Unit 17: Vive la Francophonie !',
        focusAr: 'التعرف إلى التواصل والثقافات في البلدان الناطقة بالفرنسية.',
        focusEn: 'Explore communication and cultures in French-speaking countries.',
        stepsAr: ['تحديد البلدان والمفردات', 'مقارنة أمثلة ثقافية', 'التعبير عن معلومة أو رأي'],
        stepsEn: ['Identify countries and vocabulary', 'Compare cultural examples', 'Express a fact or opinion']
      },
      {
        titleAr: 'الوحدة 18: Bienvenue au Soudan',
        titleEn: 'Unit 18: Bienvenue au Soudan',
        focusAr: 'التعبير بالفرنسية عن السودان واستقبال الزائر والتعريف بالمكان.',
        focusEn: 'Use French to introduce Sudan, welcome a visitor, and describe a place.',
        stepsAr: ['تحديد المكان أو المعلم', 'استخدام عبارات الترحيب والوصف', 'تقديم تعريف موجز بالسودان'],
        stepsEn: ['Identify a place or landmark', 'Use welcoming and descriptive phrases', 'Give a brief introduction to Sudan']
      }
    ]
  },
  {
    subject: 'TECHNICAL_EDUCATION',
    titleAr: 'العلوم الهندسية',
    titleEn: 'Engineering Sciences',
    tracks: ['SCIENCE_MATH', 'CS_ENGINEERING', 'GENERAL'],
    units: [
      {
        titleAr: 'مفاهيم العلوم الهندسية وتطبيقاتها',
        titleEn: 'Engineering Science Concepts and Applications',
        focusAr: 'دراسة الموضوعات الهندسية المقررة وربط المبادئ العلمية بالتمثيل والحل العملي.',
        focusEn: 'Study the assigned engineering topics and connect scientific principles to representation and practical problem solving.',
        stepsAr: ['تحديد النظام أو المسألة', 'تمثيل العناصر والعلاقات', 'تحليل الحل والتحقق منه'],
        stepsEn: ['Identify the system or problem', 'Represent components and relationships', 'Analyze and verify the solution']
      }
    ]
  }
];

export const SUDAN_GRADE12_SUBJECTS: Subject[] = [
  'ARABIC_LIT',
  'BIOLOGY',
  'CHEMISTRY',
  'COMPUTER_SCIENCE',
  'ENGLISH',
  'FRENCH',
  'GEOGRAPHY',
  'HISTORY',
  'ISLAMIC_STUDIES',
  'MATH',
  'PHYSICS',
  'TECHNICAL_EDUCATION'
];

export function getSudanGrade12Subjects(track: EducationTrack): Subject[] {
  return SUDAN_GRADE12_SUBJECTS.filter((subject) => getCourse(subject, track) !== undefined);
}

function getCourse(subject: Subject, track: EducationTrack): Grade12Course | undefined {
  return courses.find((candidate) => {
    if (candidate.subject !== subject) return false;
    if (candidate.tracks) return candidate.tracks.includes(track);
    if (subject === 'MATH') {
      const isMathScience = track === 'SCIENCE_MATH' || track === 'CS_ENGINEERING';
      return candidate.track === (isMathScience ? 'SCIENCE_MATH' : 'SHARIA_HUMANITIES');
    }
    return !candidate.track || candidate.track === track;
  });
}

export function getSudanGrade12Curriculum(subject: Subject, track: EducationTrack): Lecture[] | undefined {
  const course = getCourse(subject, track);
  if (!course) return undefined;

  const trackForCourse = subject === 'MATH' && track !== 'SCIENCE_MATH'
    ? track
    : course.track ?? track;
  return course.units.map((unit, index) => {
    const order = index + 1;
    const lessonLabelAr = course.lessonLabelAr ?? 'الوحدة';
    const lessonLabelEn = course.lessonLabelEn ?? 'Unit';
    const id = `sd-g12-${subject.toLowerCase()}-${trackForCourse.toLowerCase()}-${order}`;
    const diagramSteps = [
      { labelAr: unit.stepsAr[0], labelEn: unit.stepsEn[0] },
      { labelAr: unit.stepsAr[1], labelEn: unit.stepsEn[1] },
      { labelAr: unit.stepsAr[2], labelEn: unit.stepsEn[2] }
    ];
    return {
      id,
      order,
      titleAr: `${lessonLabelAr} ${order}: ${unit.titleAr}`,
      titleEn: `${lessonLabelEn} ${order}: ${unit.titleEn}`,
      subtitleAr: `${course.titleAr} — الصف الثالث الثانوي`,
      subtitleEn: `${course.titleEn} — Grade 12`,
      descriptionAr: unit.focusAr,
      descriptionEn: unit.focusEn,
      durationMinutes: 35,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SD',
      subject,
      gradeLevel: 'G12',
      educationType: 'PUBLIC',
      educationTrack: trackForCourse,
      gradeLevelNameAr: 'الصف الثالث الثانوي',
      gradeLevelNameEn: 'Grade 12 — Third Year of Secondary School',
      termAr: course.titleAr,
      termEn: course.titleEn,
      unitTitleAr: `${lessonLabelAr} ${order}: ${unit.titleAr}`,
      unitTitleEn: `${lessonLabelEn} ${order}: ${unit.titleEn}`,
      lessonNumberAr: `${lessonLabelAr} ${order}`,
      lessonNumberEn: `${lessonLabelEn} ${order}`,
      learningOutcomesAr: [unit.focusAr],
      learningOutcomesEn: [unit.focusEn],
      keyConceptsAr: [unit.titleAr],
      keyConceptsEn: [unit.titleEn],
      summaryAr: unit.focusAr,
      summaryEn: unit.focusEn,
      sections: [{
        titleAr: unit.titleAr,
        titleEn: unit.titleEn,
        contentAr: `${unit.focusAr}\n\n${unit.stepsAr.map((step, stepIndex) => `${stepIndex + 1}. ${step}`).join('\n')}`,
        contentEn: `${unit.focusEn}\n\n${unit.stepsEn.map((step, stepIndex) => `${stepIndex + 1}. ${step}`).join('\n')}`,
        diagram: {
          id: `${id}-diagram`,
          figureNumberAr: `مخطط ${lessonLabelAr} ${order}`,
          figureNumberEn: `${lessonLabelEn} ${order} diagram`,
          titleAr: `خطوات دراسة ${unit.titleAr}`,
          titleEn: `Study sequence: ${unit.titleEn}`,
          captionAr: 'تسلسل بصري يساعد على تنظيم خطوات دراسة موضوع الفصل.',
          captionEn: 'A visual sequence for organizing the study of this chapter.',
          diagramType: 'primary_lesson_sequence',
          visualSteps: diagramSteps
        },
        tipsAr: ['استعن بأمثلة الوحدة وتدريباتها عند تطبيق هذه الخطوات.'],
        tipsEn: ['Use the unit examples and exercises when applying these steps.']
      }],
      assessment: {
        id: `${id}-assessment`,
        lectureId: id,
        titleAr: `تقويم ${lessonLabelAr} ${order}`,
        titleEn: `${lessonLabelEn} ${order} check`,
        passingScore: 80,
        questions: [{
          id: `${id}-q1`,
          difficulty: 'medium',
          textAr: `ما الفكرة الرئيسة في ${lessonLabelAr} «${unit.titleAr}»؟`,
          textEn: `What is the main focus of the ${lessonLabelEn.toLowerCase()} “${unit.titleEn}”?`,
          optionsAr: [
            unit.focusAr,
            'موضوع آخر لا يرتبط بعنوان الوحدة',
            'معلومة لا يذكرها محور الدرس'
          ],
          optionsEn: [
            unit.focusEn,
            'A different topic unrelated to the unit title',
            'An idea not addressed by the lesson focus'
          ],
          correctIndex: 0,
          conceptTestedAr: unit.titleAr,
          conceptTestedEn: unit.titleEn,
          explanationAr: unit.focusAr,
          explanationEn: unit.focusEn
        }]
      }
    };
  });
}
