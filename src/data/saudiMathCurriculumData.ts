import type { EducationTrack, Lecture, LectureDiagramStep, Question } from '../types';

const grade10SourceNoteAr = 'مطابقة عناوين الفصول والموضوعات ونطاقات صفحاتها لفهرس كتاب الرياضيات 1-1 للسنة الأولى المشتركة بنظام المسارات، طبعة 1448هـ/2026م، ص 8–9. تم التحقق من الغلاف والفهرس فقط؛ الشرح والأنشطة والتقويمات والرسوم من إعداد المنصة وليست منقولة من الكتاب. المصدر: https://iencontent.ien.edu.sa/books/1448-GE-CBM-TRC1-SM1-math1.1-part1.pdf';
const grade10SourceNoteEn = 'Chapter titles, topics, and page ranges match the contents of the 1448 AH/2026 Mathematics 1-1 textbook for the common first year of the pathways system, pp. 8–9. Only the cover and contents pages have been checked; explanations, activities, assessments, and diagrams are platform-authored, not reproduced from the textbook. Source: https://iencontent.ien.edu.sa/books/1448-GE-CBM-TRC1-SM1-math1.1-part1.pdf';
const grade11SourceNoteAr = 'مطابقة عناوين الفصول والموضوعات ونطاقات صفحاتها لفهرس كتاب الرياضيات 2-1، طبعة 1448هـ/2026م، ص 8–9. تم التحقق من الغلاف والفهرس فقط؛ الشرح والأنشطة والتقويمات والرسوم من إعداد المنصة وليست منقولة من الكتاب. المصدر: https://iencontent.ien.edu.sa/books/1448-GE-CBM-GNRL-TRC2-SM1-MATH2.1.pdf';
const grade11SourceNoteEn = 'Chapter titles, topics, and page ranges match the contents of the 1448 AH/2026 Mathematics 2-1 textbook, pp. 8–9. Only the cover and contents pages have been checked; explanations, activities, assessments, and diagrams are platform-authored, not reproduced from the textbook. Source: https://iencontent.ien.edu.sa/books/1448-GE-CBM-GNRL-TRC2-SM1-MATH2.1.pdf';

type Chapter = {
  titleAr: string;
  titleEn: string;
  firstPage: number;
  lastPage: number;
  summaryAr: string;
  summaryEn: string;
  topicsAr: string[];
  topicsEn: string[];
  exampleAr: string;
  exampleEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  question: Omit<Question, 'id' | 'conceptTestedAr' | 'conceptTestedEn' | 'difficulty'>;
};

const grade11Chapters: Chapter[] = [
  {
    titleAr: 'الدوال والمتباينات',
    titleEn: 'Functions and Inequalities',
    firstPage: 11,
    lastPage: 58,
    summaryAr: 'يتدرج الفصل من خصائص الأعداد الحقيقية والعلاقات والدوال إلى دوال خاصة وتمثيل المتباينات وحل أنظمتها، ثم البرمجة الخطية والحل الأمثل.',
    summaryEn: 'Progress from properties of real numbers and relations and functions to special functions, graphing inequalities and their systems, then linear programming and optimization.',
    topicsAr: [
      '1-1 خصائص الأعداد الحقيقية',
      '1-2 العلاقات والدوال',
      'توسع 1-2: معمل الجبر - الدوال المنفصلة والدوال المتصلة',
      '1-3 دوال خاصة',
      '1-4 تمثيل المتباينات الخطية ومتباينات القيمة المطلقة بيانياً',
      '1-5 حل أنظمة المتباينات الخطية بيانياً',
      'توسع 1-5: معمل الحاسبة البيانية - أنظمة المتباينات الخطية',
      '1-6 البرمجة الخطية والحل الأمثل'
    ],
    topicsEn: [
      '1-1 Properties of Real Numbers',
      '1-2 Relations and Functions',
      'Extension 1-2: Algebra Lab - Discrete and Continuous Functions',
      '1-3 Special Functions',
      '1-4 Graphing Linear and Absolute Value Inequalities',
      '1-5 Solving Systems of Linear Inequalities Graphically',
      'Extension 1-5: Graphing Calculator Lab - Systems of Linear Inequalities',
      '1-6 Linear Programming and Optimization'
    ],
    exampleAr: 'مثّل قيديْن خطيين بيانياً، ثم حدّد منطقة الحل المشتركة ونقطة تحقق أفضل قيمة لدالة الهدف.',
    exampleEn: 'Graph two linear constraints, identify their common feasible region, and find a point that optimizes an objective function.',
    stepsAr: ['حدّد المتغيرات والقيود', 'مثّل حدود المتباينات', 'ظلّل منطقة الحل', 'اختبر دالة الهدف'],
    stepsEn: ['Identify variables and constraints', 'Graph the inequality boundaries', 'Shade the feasible region', 'Evaluate the objective function'],
    question: {
      textAr: 'ما مجموعة حل النظام: س ≥ 1، س ≤ 4؟',
      textEn: 'What is the solution set of the system x ≥ 1 and x ≤ 4?',
      optionsAr: ['١ ≤ س ≤ ٤', 'س < ١', 'س > ٤', 'لا يوجد حل'],
      optionsEn: ['1 ≤ x ≤ 4', 'x < 1', 'x > 4', 'No solution'],
      correctIndex: 0,
      explanationAr: 'يحقق الحل الشرطين معاً، لذا تقع س بين ١ و٤ شاملتين.',
      explanationEn: 'A solution must satisfy both inequalities, so x lies between 1 and 4, inclusive.'
    }
  },
  {
    titleAr: 'المصفوفات',
    titleEn: 'Matrices',
    firstPage: 61,
    lastPage: 104,
    summaryAr: 'يعرض الفصل تنظيم البيانات في مصفوفات والعمليات عليها وضربها، ثم المحددات وقاعدة كرامر والنظير الضربي للمصفوفة وحل أنظمة المعادلات الخطية.',
    summaryEn: 'Organize data in matrices, perform matrix operations and multiplication, then use determinants, Cramer’s rule, matrix inverses, and systems of linear equations.',
    topicsAr: [
      '2-1 مقدمة في المصفوفات',
      'توسع 2-1: معمل الجداول الإلكترونية - تنظيم البيانات',
      '2-2 العمليات على المصفوفات',
      '2-3 ضرب المصفوفات',
      '2-4 المحددات وقاعدة كرامر',
      '2-5 النظير الضربي للمصفوفة وأنظمة المعادلات الخطية',
      'توسع 2-5: معمل الحاسبة البيانية - المصفوفات الموسعة'
    ],
    topicsEn: [
      '2-1 Introduction to Matrices',
      'Extension 2-1: Spreadsheet Lab - Organizing Data',
      '2-2 Matrix Operations',
      '2-3 Matrix Multiplication',
      '2-4 Determinants and Cramer’s Rule',
      '2-5 Matrix Inverses and Systems of Linear Equations',
      'Extension 2-5: Graphing Calculator Lab - Augmented Matrices'
    ],
    exampleAr: 'تحقق من محدد مصفوفة مربعة؛ فإذا لم يساوِ صفراً أمكن إيجاد النظير الضربي واستخدامه في حل نظام خطي.',
    exampleEn: 'Check the determinant of a square matrix; if it is nonzero, find its inverse and use it to solve a linear system.',
    stepsAr: ['رتّب المعاملات في مصفوفة', 'احسب المحدد', 'أوجد النظير عند إمكانه', 'تحقق من حل النظام'],
    stepsEn: ['Arrange coefficients in a matrix', 'Calculate the determinant', 'Find the inverse when it exists', 'Check the system solution'],
    question: {
      textAr: 'متى يكون للمصفوفة المربعة نظير ضربي؟',
      textEn: 'When does a square matrix have a multiplicative inverse?',
      optionsAr: ['عندما يكون محددها غير صفري', 'عندما تكون جميع عناصرها صفراً', 'عندما لا تكون مربعة', 'في كل الحالات'],
      optionsEn: ['When its determinant is nonzero', 'When all its entries are zero', 'When it is not square', 'In every case'],
      correctIndex: 0,
      explanationAr: 'المصفوفة المربعة تكون قابلة للعكس إذا وفقط إذا كان محددها لا يساوي صفراً.',
      explanationEn: 'A square matrix is invertible if and only if its determinant is nonzero.'
    }
  },
  {
    titleAr: 'كثيرات الحدود ودوالها',
    titleEn: 'Polynomials and Their Functions',
    firstPage: 107,
    lastPage: 174,
    summaryAr: 'يتناول الفصل الأعداد المركبة وحل المعادلات التربيعية، وعمليات كثيرات الحدود وقسمتها، ثم دوالها ومعادلاتها ونظرية الباقي والعوامل والجذور والأصفار.',
    summaryEn: 'Study complex numbers and quadratic equations, polynomial operations and division, then polynomial functions and equations, the Remainder and Factor Theorems, roots, and zeros.',
    topicsAr: [
      '3-1 الأعداد المركبة',
      '3-2 القانون العام والمميز',
      'توسع 3-2: معمل الجبر - مجموع الجذرين وحاصل ضربهما',
      '3-3 العمليات على كثيرات الحدود',
      '3-4 قسمة كثيرات الحدود',
      '3-5 دوال كثيرات الحدود',
      '3-6 حل معادلات كثيرات الحدود',
      'توسع 3-6: معمل الحاسبة البيانية - حل معادلات كثيرات الحدود',
      '3-7 نظرية الباقي والعوامل',
      '3-8 الجذور والأصفار'
    ],
    topicsEn: [
      '3-1 Complex Numbers',
      '3-2 The Quadratic Formula and the Discriminant',
      'Extension 3-2: Algebra Lab - Sum and Product of Roots',
      '3-3 Operations on Polynomials',
      '3-4 Dividing Polynomials',
      '3-5 Polynomial Functions',
      '3-6 Solving Polynomial Equations',
      'Extension 3-6: Graphing Calculator Lab - Solving Polynomial Equations',
      '3-7 The Remainder and Factor Theorems',
      '3-8 Roots and Zeros'
    ],
    exampleAr: 'عند قسمة كثيرة حدود ق(س) على س − أ، استخدم نظرية الباقي لإيجاد الباقي من قيمة ق(أ).',
    exampleEn: 'When dividing a polynomial f(x) by x − a, use the Remainder Theorem to find the remainder from f(a).',
    stepsAr: ['حدّد كثيرة الحدود والقاسم', 'عوّض بقيمة أ في ق(س)', 'بسّط ق(أ)', 'فسّر الناتج بوصفه الباقي'],
    stepsEn: ['Identify the polynomial and divisor', 'Substitute a into f(x)', 'Simplify f(a)', 'Interpret the result as the remainder'],
    question: {
      textAr: 'ما باقي قسمة ق(س) على (س − أ) وفق نظرية الباقي؟',
      textEn: 'By the Remainder Theorem, what is the remainder when f(x) is divided by (x − a)?',
      optionsAr: ['ق(أ)', 'ق(−أ)', 'أ + ق(أ)', 'صفراً دائماً'],
      optionsEn: ['f(a)', 'f(−a)', 'a + f(a)', 'Always zero'],
      correctIndex: 0,
      explanationAr: 'تنص نظرية الباقي على أن باقي القسمة على (س − أ) يساوي ق(أ).',
      explanationEn: 'The Remainder Theorem states that division by (x − a) leaves remainder f(a).'
    }
  },
  {
    titleAr: 'العلاقات والدوال العكسية والجذرية',
    titleEn: 'Inverse Relations and Functions, and Radical Functions',
    firstPage: 177,
    lastPage: 234,
    summaryAr: 'يدرس الفصل العمليات على الدوال والعلاقات والدوال العكسية، ودوال ومتباينات الجذر التربيعي والجذر النوني، والعبارات الجذرية والأسس النسبية وحل المعادلات والمتباينات الجذرية.',
    summaryEn: 'Study operations on functions and inverse relations and functions, square-root and nth-root functions and inequalities, radical expressions, rational exponents, and radical equations and inequalities.',
    topicsAr: [
      '4-1 العمليات على الدوال',
      '4-2 العلاقات والدوال العكسية',
      'توسع 4-2: معمل الحاسبة البيانية - الدالة العكسية',
      '4-3 دوال ومتباينات الجذر التربيعي',
      '4-4 الجذر النوني',
      'توسع 4-4: معمل الحاسبة البيانية - تمثيل دالة الجذر النوني بيانياً',
      '4-5 العمليات على العبارات الجذرية',
      '4-6 الأسس النسبية',
      '4-7 حل المعادلات والمتباينات الجذرية',
      'توسع 4-7: معمل الحاسبة البيانية - حل المعادلات والمتباينات الجذرية'
    ],
    topicsEn: [
      '4-1 Operations on Functions',
      '4-2 Inverse Relations and Functions',
      'Extension 4-2: Graphing Calculator Lab - Inverse Functions',
      '4-3 Square Root Functions and Inequalities',
      '4-4 nth Roots',
      'Extension 4-4: Graphing Calculator Lab - Graphing nth-Root Functions',
      '4-5 Operations on Radical Expressions',
      '4-6 Rational Exponents',
      '4-7 Solving Radical Equations and Inequalities',
      'Extension 4-7: Graphing Calculator Lab - Solving Radical Equations and Inequalities'
    ],
    exampleAr: 'تحقق من تركيب دالة مع دالتها العكسية على مجالها؛ إذ يعيد التركيب قيمة المدخل الأصلية.',
    exampleEn: 'Check the composition of a function with its inverse on its domain; the composition returns the original input.',
    stepsAr: ['حدّد الدالة ومجالها', 'اعثر على الدالة العكسية', 'ركّب الدالتين', 'تحقق من المجال والنتيجة'],
    stepsEn: ['Identify the function and domain', 'Find the inverse function', 'Compose the functions', 'Check the domain and result'],
    question: {
      textAr: 'إذا كانت الدالتان عكسيتين، فما قيمة ق⁻¹(ق(س)) لكل س في مجال ق؟',
      textEn: 'If two functions are inverses, what is f⁻¹(f(x)) for x in the domain of f?',
      optionsAr: ['س', '−س دائماً', 'ق(س) + 1', 'صفراً دائماً'],
      optionsEn: ['x', 'Always −x', 'f(x) + 1', 'Always zero'],
      correctIndex: 0,
      explanationAr: 'تركيب الدالة مع عكسها يعيد المدخل الأصلي لكل قيمة ضمن المجال المناسب.',
      explanationEn: 'Composing a function with its inverse returns the original input on the appropriate domain.'
    }
  }
];

const grade10Chapters: Chapter[] = [
  {
    titleAr: 'التبرير والبرهان',
    titleEn: 'Reasoning and Proof',
    firstPage: 11,
    lastPage: 82,
    summaryAr: 'يبني الفصل مهارات التبرير الاستقرائي والاستنتاجي والمنطق والعبارات الشرطية، ثم يوظف المسلمات والبراهين الجبرية والهندسية لإثبات علاقات القطع المستقيمة والزوايا.',
    summaryEn: 'Build inductive and deductive reasoning, logic, and conditional statements, then use postulates and algebraic and geometric proofs to establish relationships between segments and angles.',
    topicsAr: [
      '1-1 التبرير الاستقرائي والتخمين',
      '1-2 المنطق',
      '1-3 العبارات الشرطية',
      'توسع 1-3: معمل الرياضيات - العبارات الشرطية الثنائية',
      '1-4 التبرير الاستنتاجي',
      '1-5 المسلمات والبراهين الحرة',
      '1-6 البرهان الجبري',
      '1-7 إثبات علاقات بين القطع المستقيمة',
      '1-8 إثبات علاقات بين الزوايا'
    ],
    topicsEn: [
      '1-1 Inductive Reasoning and Conjecture',
      '1-2 Logic',
      '1-3 Conditional Statements',
      'Extension 1-3: Mathematics Lab - Biconditional Statements',
      '1-4 Deductive Reasoning',
      '1-5 Postulates and Paragraph Proofs',
      '1-6 Algebraic Proof',
      '1-7 Proving Segment Relationships',
      '1-8 Proving Angle Relationships'
    ],
    exampleAr: 'حوّل عبارة شرطية إلى عكسها ومعكوسها ومعاكسها الإيجابي، ثم تحقق من التكافؤ المنطقي بينها.',
    exampleEn: 'Write the converse, inverse, and contrapositive of a conditional statement, then check their logical relationships.',
    stepsAr: ['حدّد الفرض والنتيجة', 'اكتب العبارة الشرطية', 'كوّن صورها المنطقية', 'تحقق من التكافؤ'],
    stepsEn: ['Identify hypothesis and conclusion', 'Write the conditional', 'Form related statements', 'Check logical equivalence'],
    question: {
      textAr: 'ما معاكس العبارة الشرطية: إذا كان الشكل مربعاً فإنه مستطيل؟',
      textEn: 'What is the contrapositive of: If a figure is a square, then it is a rectangle?',
      optionsAr: ['إذا لم يكن الشكل مستطيلاً فإنه ليس مربعاً', 'إذا كان مستطيلاً فإنه مربع', 'إذا لم يكن مربعاً فإنه ليس مستطيلاً', 'الشكل مربع ومستطيل'],
      optionsEn: ['If a figure is not a rectangle, then it is not a square', 'If it is a rectangle, then it is a square', 'If it is not a square, then it is not a rectangle', 'The figure is a square and a rectangle'],
      correctIndex: 0,
      explanationAr: 'المعاكس الإيجابي ينفي النتيجة والفرض ويبدل ترتيبهما؛ وهو مكافئ منطقياً للعبارة الأصلية.',
      explanationEn: 'The contrapositive negates and reverses the conclusion and hypothesis; it is logically equivalent to the original statement.'
    }
  },
  {
    titleAr: 'التوازي والتعامد',
    titleEn: 'Parallel and Perpendicular Lines',
    firstPage: 85,
    lastPage: 142,
    summaryAr: 'يدرس الفصل المستقيمات والقواطع والزوايا الناتجة عنها وإثبات التوازي، ثم ميل المستقيم وصيغ معادلته والأعمدة والمسافة.',
    summaryEn: 'Study lines, transversals, their angle relationships, and proofs of parallelism, then slope, line equations, perpendiculars, and distance.',
    topicsAr: [
      '2-1 المستقيمان والقاطع',
      'استكشاف 2-2: معمل برمجيات الهندسة - الزوايا والمستقيمات المتوازية',
      '2-2 الزوايا والمستقيمات المتوازية',
      '2-3 إثبات توازي مستقيمين',
      '2-4 ميل المستقيم',
      '2-5 صيغ معادلة المستقيم',
      'توسع 2-5: معمل الهندسة - معادلة العمود المنصف',
      '2-6 الأعمدة والمسافة'
    ],
    topicsEn: [
      '2-1 Lines and Transversals',
      'Explore 2-2: Geometry Software Lab - Angles and Parallel Lines',
      '2-2 Angles and Parallel Lines',
      '2-3 Proving Lines Parallel',
      '2-4 Slope of a Line',
      '2-5 Forms of the Equation of a Line',
      'Extension 2-5: Geometry Lab - Equation of a Perpendicular Bisector',
      '2-6 Perpendiculars and Distance'
    ],
    exampleAr: 'إذا قطع قاطع مستقيمين متوازيين وكانت إحدى الزوايا المتناظرة ٦٥°، فاستعمل علاقات الزوايا لإيجاد الزاوية المتناظرة الأخرى.',
    exampleEn: 'If a transversal cuts parallel lines and one corresponding angle is 65°, use angle relationships to find the other corresponding angle.',
    stepsAr: ['حدّد القاطع والمستقيمين', 'تعرّف نوع الزوايا', 'استخدم خاصية التوازي', 'احسب قياس الزاوية'],
    stepsEn: ['Identify the transversal and lines', 'Classify the angles', 'Use the parallel-line property', 'Calculate the angle measure'],
    question: {
      textAr: 'إذا قطع قاطع مستقيمين متوازيين، فماذا تعرف عن الزاويتين المتناظرتين؟',
      textEn: 'When a transversal cuts two parallel lines, what is true of corresponding angles?',
      optionsAr: ['متطابقتان', 'متكاملتان دائماً', 'مجموعهما ٩٠°', 'لا توجد علاقة بينهما'],
      optionsEn: ['They are congruent', 'They are always supplementary', 'They sum to 90°', 'They have no relationship'],
      correctIndex: 0,
      explanationAr: 'الزاويتان المتناظرتان الناتجتان عن قاطع لمستقيمين متوازيين متطابقتان.',
      explanationEn: 'Corresponding angles formed by a transversal of parallel lines are congruent.'
    }
  },
  {
    titleAr: 'المثلثات المتطابقة',
    titleEn: 'Congruent Triangles',
    firstPage: 145,
    lastPage: 210,
    summaryAr: 'يصنف الفصل المثلثات ويدرس زواياها، ثم يعرّف تطابق المثلثات ويثبت التطابق بمسلمات الأضلاع والزوايا، ويتناول المثلثات الخاصة والبرهان الإحداثي.',
    summaryEn: 'Classify triangles and study their angles, define triangle congruence and prove it using side-angle postulates, then explore special triangles and coordinate proofs.',
    topicsAr: [
      '3-1 تصنيف المثلثات',
      'استكشاف 3-2: معمل الهندسة - زوايا المثلثات',
      '3-2 زوايا المثلثات',
      '3-3 المثلثات المتطابقة',
      '3-4 إثبات تطابق المثلثات SSS, SAS',
      '3-5 إثبات تطابق المثلثات ASA, AAS',
      'توسع 3-5: معمل الهندسة - تطابق المثلثات القائمة',
      '3-6 المثلثات المتطابقة الضلعين والمثلثات المتطابقة الأضلاع',
      '3-7 المثلثات والبرهان الإحداثي'
    ],
    topicsEn: [
      '3-1 Classifying Triangles',
      'Explore 3-2: Geometry Lab - Angles of Triangles',
      '3-2 Angles of Triangles',
      '3-3 Congruent Triangles',
      '3-4 Proving Triangles Congruent: SSS and SAS',
      '3-5 Proving Triangles Congruent: ASA and AAS',
      'Extension 3-5: Geometry Lab - Congruent Right Triangles',
      '3-6 Isosceles and Equilateral Triangles',
      '3-7 Triangles and Coordinate Proof'
    ],
    exampleAr: 'لإثبات تطابق مثلثين، طابق ثلاثة أزواج من الأضلاع المتناظرة واستعمل مسلمة SSS.',
    exampleEn: 'To prove two triangles congruent, match three pairs of corresponding sides and use the SSS postulate.',
    stepsAr: ['حدّد المثلثين', 'طابق الأضلاع المتناظرة', 'اختر مسلمة التطابق', 'اكتب نتيجة التطابق'],
    stepsEn: ['Identify the triangles', 'Match corresponding sides', 'Choose a congruence postulate', 'State the congruence'],
    question: {
      textAr: 'ما المعلومات الكافية لإثبات تطابق مثلثين وفق مسلمة SSS؟',
      textEn: 'What information is sufficient to prove two triangles congruent by SSS?',
      optionsAr: ['تطابق أزواج الأضلاع الثلاثة المتناظرة', 'تطابق زاوية واحدة فقط', 'تطابق ضلع واحد فقط', 'تساوي مساحتيهما فقط'],
      optionsEn: ['Three pairs of corresponding sides are congruent', 'Only one pair of angles is congruent', 'Only one pair of sides is congruent', 'Only their areas are equal'],
      correctIndex: 0,
      explanationAr: 'تنص مسلمة SSS على أن تطابق الأضلاع المتناظرة الثلاثة يكفي لإثبات تطابق المثلثين.',
      explanationEn: 'The SSS postulate states that congruent corresponding sides in all three pairs prove triangle congruence.'
    }
  },
  {
    titleAr: 'العلاقات في المثلث',
    titleEn: 'Relationships in Triangles',
    firstPage: 213,
    lastPage: 272,
    summaryAr: 'يتناول الفصل المنصفات والقطع المتوسطة والارتفاعات في المثلث، والبرهان غير المباشر، ومتباينة المثلث والمتباينات في مثلثين.',
    summaryEn: 'Study triangle bisectors, medians, and altitudes, indirect proof, the Triangle Inequality, and inequalities in two triangles.',
    topicsAr: [
      'استكشاف 4-1: معمل الهندسة - إنشاء المنصفات',
      '4-1 المنصفات في المثلث',
      'استكشاف 4-2: معمل الهندسة - إنشاء القطع المتوسطة والارتفاعات',
      '4-2 القطع المتوسطة والارتفاعات في المثلث',
      '4-3 المتباينات في المثلث',
      '4-4 البرهان غير المباشر',
      'استكشاف 4-5: معمل الحاسبة البيانية - متباينة المثلث',
      '4-5 متباينة المثلث',
      '4-6 المتباينات في مثلثين'
    ],
    topicsEn: [
      'Explore 4-1: Geometry Lab - Constructing Bisectors',
      '4-1 Bisectors in Triangles',
      'Explore 4-2: Geometry Lab - Constructing Medians and Altitudes',
      '4-2 Medians and Altitudes in Triangles',
      '4-3 Inequalities in Triangles',
      '4-4 Indirect Proof',
      'Explore 4-5: Graphing Calculator Lab - Triangle Inequality',
      '4-5 Triangle Inequality',
      '4-6 Inequalities in Two Triangles'
    ],
    exampleAr: 'تحقق من أطوال الأضلاع المقترحة لمثلث؛ يجب أن يكون مجموع طولي أي ضلعين أكبر من طول الضلع الثالث.',
    exampleEn: 'Check proposed side lengths for a triangle; the sum of any two side lengths must exceed the third.',
    stepsAr: ['اختر كل زوج من الأضلاع', 'اجمع طولي الضلعين', 'قارن بالمقدار الثالث', 'تحقق من الشروط الثلاثة'],
    stepsEn: ['Choose each pair of sides', 'Add their lengths', 'Compare with the third side', 'Check all three conditions'],
    question: {
      textAr: 'أي مجموعة أطوال يمكن أن تمثل أضلاع مثلث؟',
      textEn: 'Which set of lengths can be the sides of a triangle?',
      optionsAr: ['٣، ٤، ٥', '١، ٢، ٤', '٢، ٣، ٦', '١، ٣، ٤'],
      optionsEn: ['3, 4, 5', '1, 2, 4', '2, 3, 6', '1, 3, 4'],
      correctIndex: 0,
      explanationAr: 'في المجموعة ٣، ٤، ٥ مجموع كل ضلعين أكبر من طول الضلع الثالث؛ أما المجموعات الأخرى فتخالف متباينة المثلث.',
      explanationEn: 'For 3, 4, 5, the sum of each pair exceeds the third side; the other sets violate the Triangle Inequality.'
    }
  }
];

function buildSaudiMathCurriculum(
  gradeLevel: 'G10' | 'G11',
  courseCode: 'math1-1' | 'math2-1',
  courseNameAr: string,
  courseNameEn: string,
  sourceNoteAr: string,
  sourceNoteEn: string,
  courseChapters: Chapter[],
  track: EducationTrack
): Lecture[] {
  return courseChapters.map((chapter, index) => {
    const order = index + 1;
    const lectureId = `sa-${courseCode}-g${gradeLevel.slice(1)}-${track.toLowerCase()}-${order}`;
    const visualSteps: LectureDiagramStep[] = chapter.stepsAr.map((labelAr, stepIndex) => ({
      labelAr,
      labelEn: chapter.stepsEn[stepIndex]
    }));
    const question: Question = {
      ...chapter.question,
      id: `${lectureId}-q1`,
      conceptTestedAr: chapter.titleAr,
      conceptTestedEn: chapter.titleEn,
      difficulty: 'medium'
    };
    const pageRangeAr = `ص ${chapter.firstPage}–${chapter.lastPage}`;
    const pageRangeEn = `pp. ${chapter.firstPage}–${chapter.lastPage}`;

    return {
      id: lectureId,
      order,
      titleAr: chapter.titleAr,
      titleEn: chapter.titleEn,
      subtitleAr: `الفصل ${order}: ${chapter.titleAr}`,
      subtitleEn: `Chapter ${order}: ${chapter.titleEn}`,
      descriptionAr: `${sourceNoteAr} نطاق الفصل: ${pageRangeAr}.`,
      descriptionEn: `${sourceNoteEn} Chapter pages: ${pageRangeEn}.`,
      durationMinutes: 40,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'MATH',
      gradeLevel,
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
      ministryEn: 'Ministry of Education - Kingdom of Saudi Arabia',
      gradeLevelNameAr: `${gradeLevel === 'G10' ? 'الصف الأول الثانوي' : 'الصف الثاني الثانوي'} - ${courseNameAr}، نظام المسارات، طبعة 1448هـ/2026م`,
      gradeLevelNameEn: `${gradeLevel === 'G10' ? 'Grade 10' : 'Grade 11'} - ${courseNameEn}, Pathways System, 1448 AH/2026 edition`,
      termAr: 'الفصل الدراسي الأول',
      termEn: 'Semester 1',
      unitTitleAr: `الفصل ${order}: ${chapter.titleAr}`,
      unitTitleEn: `Chapter ${order}: ${chapter.titleEn}`,
      lessonNumberAr: `الفصل ${order}`,
      lessonNumberEn: `Chapter ${order}`,
      warmupHookAr: chapter.exampleAr,
      warmupHookEn: chapter.exampleEn,
      learningOutcomesAr: [chapter.summaryAr],
      learningOutcomesEn: [chapter.summaryEn],
      keyConceptsAr: chapter.topicsAr,
      keyConceptsEn: chapter.topicsEn,
      conceptMapAr: chapter.stepsAr,
      conceptMapEn: chapter.stepsEn,
      summaryAr: chapter.summaryAr,
      summaryEn: chapter.summaryEn,
      sections: [
        {
          titleAr: 'موضوعات الفصل',
          titleEn: 'Chapter topics',
          contentAr: `${chapter.topicsAr.join('\n')}\n\n${sourceNoteAr} نطاق الفصل: ${pageRangeAr}.`,
          contentEn: `${chapter.topicsEn.join('\n')}\n\n${sourceNoteEn} Chapter pages: ${pageRangeEn}.`,
          diagram: {
            id: `${lectureId}-diagram`,
            figureNumberAr: `شكل ${order}`,
            figureNumberEn: `Figure ${order}`,
            titleAr: `خريطة مفاهيم: ${chapter.titleAr}`,
            titleEn: `Concept map: ${chapter.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من المنصة لتوضيح خطوات التفكير الرياضي، وليس صورة من الكتاب.',
            captionEn: 'An original platform learning diagram illustrating mathematical reasoning, not an image from the textbook.',
            diagramType: 'digital_skills',
            visualSteps
          }
        },
        {
          titleAr: 'مثال تطبيقي',
          titleEn: 'Worked example',
          contentAr: chapter.exampleAr,
          contentEn: chapter.exampleEn
        }
      ],
      assessment: {
        id: `${lectureId}-assessment`,
        lectureId,
        titleAr: `تحقق من الفهم: ${chapter.titleAr}`,
        titleEn: `Check your understanding: ${chapter.titleEn}`,
        passingScore: 80,
        questions: [question]
      }
    };
  });
}

export function getSaudiMathG10Curriculum(track: EducationTrack): Lecture[] {
  return buildSaudiMathCurriculum(
    'G10',
    'math1-1',
    'رياضيات 1-1',
    'Mathematics 1-1',
    grade10SourceNoteAr,
    grade10SourceNoteEn,
    grade10Chapters,
    track
  );
}

export function getSaudiMathG11Curriculum(track: EducationTrack): Lecture[] {
  return buildSaudiMathCurriculum(
    'G11',
    'math2-1',
    'رياضيات 2-1',
    'Mathematics 2-1',
    grade11SourceNoteAr,
    grade11SourceNoteEn,
    grade11Chapters,
    track
  );
}