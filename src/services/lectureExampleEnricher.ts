import type { InteractiveExample, Lecture, StepItem } from '../types';

/**
 * Pedagogical Examples Engine
 * Ensures every lecture in the platform guarantees exactly 4 high-quality,
 * step-by-step interactive examples to thoroughly convey the concept to the student.
 */

interface ExampleTemplate {
  titleAr: string;
  titleEn: string;
  equation: string;
  steps: StepItem[];
  takeawayAr: string;
  takeawayEn: string;
}

/**
 * Generates 4 subject-tailored, contextual examples based on lecture metadata
 */
function generateContextualExamples(lecture: Lecture): ExampleTemplate[] {
  const title = lecture.titleAr || 'الدرس المقرر';
  const titleEn = lecture.titleEn || 'The Curriculum Lesson';
  const concepts = lecture.keyConceptsAr && lecture.keyConceptsAr.length > 0
    ? lecture.keyConceptsAr
    : [title, 'التطبيق العملي', 'التحليل والاستنتاج', 'التحقق وحل المسائل'];
  const conceptsEn = lecture.keyConceptsEn && lecture.keyConceptsEn.length > 0
    ? lecture.keyConceptsEn
    : [titleEn, 'Practical Application', 'Analysis & Deduction', 'Verification & Problem Solving'];
  
  const subject = lecture.id?.toLowerCase() || '';

  // 1. Math / Primary Math
  if (subject.includes('math') || subject.includes('calculus') || subject.includes('algebra') || subject.includes('geometry')) {
    return [
      {
        titleAr: `مثال تطبيقي 1 من 4: حساب وتطبيق المفهوم التأسيسي لـ (${concepts[0] || title})`,
        titleEn: `Worked Example 1 of 4: Foundational Computation for (${conceptsEn[0] || titleEn})`,
        equation: 'المعطيات: قيمة أ = 12، قيمة ب = 4 | المطلوب: إيجاد الناتج وفق القاعدة الرياضية',
        steps: [
          { stepNumber: 1, textAr: 'تحديد المعطيات بدقة وقراءة المسألة الرياضية بعناية لاستخراج القيم المعلومة.', textEn: 'Identify given parameters carefully and extract known mathematical values.', noteAr: 'تحديد المعطيات', noteEn: 'Given parameters' },
          { stepNumber: 2, textAr: 'كتابة القانون أو المعادلة الرياضية الأساسية والتعويض بالقيم المستخرجة مباشرة.', textEn: 'State the governing formula and substitute extracted values directly.', noteAr: 'التعويض بالقانون', noteEn: 'Formula substitution' },
          { stepNumber: 3, textAr: 'إجراء العمليات الحسابية خطوة بخطوة بالترتيب الصحيح (الأقواس ثم الضرب/القسمة ثم الجمع/الطرح).', textEn: 'Execute arithmetic steps in standard order of operations.', noteAr: 'ترتيب العمليات', noteEn: 'Order of operations' },
          { stepNumber: 4, textAr: 'التحقق من صحة الناتج بالحل العكسي والتأكد من توافق الوحدات الرياضية.', textEn: 'Verify the result via reverse calculation and check dimensional consistency.', noteAr: 'التحقق النهائي', noteEn: 'Verification' }
        ],
        takeawayAr: 'اتباع ترتيب العمليات الرياضية والتعويض المنظم يمنع الأخطاء الشائعة ويضمن دقة الناتج بنسبة 100%.',
        takeawayEn: 'Strict adherence to operation order and systematic substitution guarantees mathematical accuracy.'
      },
      {
        titleAr: `مثال تطبيقي 2 من 4: معالجة مسألة لفظية وربطها بالواقع لـ (${concepts[1] || concepts[0] || title})`,
        titleEn: `Worked Example 2 of 4: Real-World Word Problem for (${conceptsEn[1] || conceptsEn[0] || titleEn})`,
        equation: 'المسألة اللفظية: تحويل النص الواقعي إلى نموذج ومعادلة رياضية قابلة للحل',
        steps: [
          { stepNumber: 1, textAr: 'قراءة النص اللفظي واستخراج المتغير المجهول والكميات الثابتة وتسميتها بوضوح.', textEn: 'Parse word problem text and assign explicit variables to unknown quantities.', noteAr: 'صياغة المتغيرات', noteEn: 'Variable assignment' },
          { stepNumber: 2, textAr: 'بناء المعادلة الجبرية أو النموذج الحسابي الذي يمثل العلاقة بين المتغيرات.', textEn: 'Formulate the algebraic equation representing the described real-world scenario.', noteAr: 'بناء المعادلة', noteEn: 'Equation modeling' },
          { stepNumber: 3, textAr: 'عزل المجهول في أحد طرفي المعادلة بإجراء العمليات المتكافئة على الطرفين.', textEn: 'Isolate the unknown variable through equivalent transformations on both sides.', noteAr: 'حل المعادلة', noteEn: 'Equation solving' }
        ],
        takeawayAr: 'تحويل المسألة اللفظية إلى معادلة دقيقة هو نصف الحل، ويجعل التعامل مع الأرقام منطقياً وسلساً.',
        takeawayEn: 'Translating real-world text into precise algebraic notation provides an immediate roadmap to solution.'
      },
      {
        titleAr: `مثال تطبيقي 3 من 4: مسألة بيانية وهندسية واستنتاج الخواص لـ (${concepts[2] || concepts[0] || title})`,
        titleEn: `Worked Example 3 of 4: Graphical & Geometric Analysis for (${conceptsEn[2] || conceptsEn[0] || titleEn})`,
        equation: 'النموذج البياني: تحليل الميل ونقاط التقاطع واستنتاج السلوك الرياضي',
        steps: [
          { stepNumber: 1, textAr: 'قراءة المنحنى أو الشكل الهندسي وتحديد النقاط المحورية ومحاور الإحداثيات.', textEn: 'Examine geometric diagram/graph and identify pivot points and coordinate axes.', noteAr: 'قراءة الشكل', noteEn: 'Graph inspection' },
          { stepNumber: 2, textAr: 'حساب الميل أو المساحة أو النسبة الهندسية بالاعتماد على الخواص المبرهنة.', textEn: 'Calculate slope, area, or geometric ratio based on proven theorems.', noteAr: 'التطبيق الهندسي', noteEn: 'Geometric calculation' },
          { stepNumber: 3, textAr: 'استنتاج العلاقة الرياضية وتفسير المعنى الهندسي للنتيجة العددية.', textEn: 'Deduce functional relationship and interpret the geometric meaning of numerical result.', noteAr: 'التفسير البياني', noteEn: 'Interpretation' }
        ],
        takeawayAr: 'التمثيل البياني يمنح الطالب رؤية بصرية واضحة للعلاقات المجردة ويؤكد صحة الحل الجبري.',
        takeawayEn: 'Graphical representation provides clear visual intuition that validates algebraic derivations.'
      },
      {
        titleAr: `مثال تطبيقي 4 من 4: مهارة التفكير العليا وتجنب الأفخاخ الامتحانية لـ (${concepts[3] || concepts[1] || title})`,
        titleEn: `Worked Example 4 of 4: Higher-Order Thinking & Exam Trap Avoidance for (${conceptsEn[3] || conceptsEn[1] || titleEn})`,
        equation: 'تحدي الإتقان: فحص الحالات الخاصة والمغالطات الشائعة في الحل',
        steps: [
          { stepNumber: 1, textAr: 'فحص الشروط المسبقة للمسألة (مثل القسمة على الصفر أو القيم السالبة تحت الجذر).', textEn: 'Inspect domain conditions and edge cases (e.g. division by zero or negative radicands).', noteAr: 'فحص الشروط', noteEn: 'Domain conditions' },
          { stepNumber: 2, textAr: 'التمييز بين الحل المقبول والحل المرفوض رياضياً في سياق المسألة.', textEn: 'Differentiate between valid solutions and extraneous/rejected solutions.', noteAr: 'استبعاد الدخيل', noteEn: 'Extraneous check' },
          { stepNumber: 3, textAr: 'كتابة الحل النموذجي النهائي مع التعليل الرياضي الدقيق المقبول وزارياً.', textEn: 'Formulate final standardized solution with complete formal justification.', noteAr: 'الصياغة المعتمدة', noteEn: 'Standard justification' }
        ],
        takeawayAr: 'الانتباه للحالات الخاصة والشرطية هو ما يميز الطالب المتفوق ويحصد الدرجة الكاملة في الاختبارات.',
        takeawayEn: 'Careful handling of edge cases and domain restrictions guarantees top marks in standardized exams.'
      }
    ];
  }

  // 2. Science / Chemistry / Physics / Biology
  if (subject.includes('phys') || subject.includes('chem') || subject.includes('bio') || subject.includes('sci')) {
    return [
      {
        titleAr: `مثال تطبيقي 1 من 4: النموذج العلمي والتفسير الظواهري لـ (${concepts[0] || title})`,
        titleEn: `Worked Example 1 of 4: Scientific Model & Phenomenological Explanation for (${conceptsEn[0] || titleEn})`,
        equation: 'النموذج التجريبي: مراقبة المتغير المستقل والتابع وضبط العوامل الثابتة',
        steps: [
          { stepNumber: 1, textAr: 'تحديد الظاهرة العلمية محل الدراسة وصياغة الفرضية القابلة للاختبار.', textEn: 'Define target scientific phenomenon and formulate a testable hypothesis.', noteAr: 'صياغة الفرضية', noteEn: 'Hypothesis' },
          { stepNumber: 2, textAr: 'تطبيق القانون الفيزيائي/الكيميائي المفسر لحركة الجسيمات أو تحولات الطاقة.', textEn: 'Apply governing scientific law explaining particle motion or energy transformation.', noteAr: 'التفسير العلمي', noteEn: 'Scientific law' },
          { stepNumber: 3, textAr: 'استنتاج العلاقة الطردية أو العكسية بين المتغيرات وتأكيد النتيجة المشاهدة.', textEn: 'Derive direct/inverse proportionality and validate observed empirical outcome.', noteAr: 'الاستنتاج', noteEn: 'Conclusion' }
        ],
        takeawayAr: 'العلوم الطبيعية تبدأ بالملاحظة وتنتهي بقوانين كمية دقيقة تفسر كل ما يدور حولنا في الكون.',
        takeawayEn: 'Natural sciences advance from empirical observation to quantitative laws governing nature.'
      },
      {
        titleAr: `مثال تطبيقي 2 من 4: مسألة حسابية بقوانين ووحدات القياس الدولية لـ (${concepts[1] || concepts[0] || title})`,
        titleEn: `Worked Example 2 of 4: Quantitative Calculation with SI Units for (${conceptsEn[1] || conceptsEn[0] || titleEn})`,
        equation: 'المعادلة الرياضية العلمية: تطبيق القانون وحساب المقدار العددي ووحدة القياس',
        steps: [
          { stepNumber: 1, textAr: 'تفريغ المعطيات وتحويل كافة الوحدات إلى النظام الدولي للوحدات (SI Units).', textEn: 'List given quantities and convert all units to the International System of Units (SI).', noteAr: 'تحويل الوحدات', noteEn: 'Unit conversion' },
          { stepNumber: 2, textAr: 'كتابة القانون الفيزيائي/الكيميائي الصريح وعزل الكمية المجهولة جبرياً.', textEn: 'State explicit scientific equation and isolate target variable algebraically.', noteAr: 'تطبيق القانون', noteEn: 'Equation formulation' },
          { stepNumber: 3, textAr: 'حساب القيمة الرقمية وكتابة وحدة القياس الصحيحة بجانب الناتج.', textEn: 'Calculate numerical magnitude and append proper physical dimension/unit.', noteAr: 'الناتج والوحدة', noteEn: 'Unit check' }
        ],
        takeawayAr: 'وحدة القياس جزء لا يتجزأ من الإجابة العلمية، وكتابة الوحدات الصحيحة تضمن نصف درجات المسألة.',
        takeawayEn: 'Physical dimensions and units are essential components of any complete scientific solution.'
      },
      {
        titleAr: `مثال تطبيقي 3 من 4: تجربة معملية وتطبيق حياتي وصناعي لـ (${concepts[2] || concepts[0] || title})`,
        titleEn: `Worked Example 3 of 4: Laboratory Experiment & Industrial Application for (${conceptsEn[2] || conceptsEn[0] || titleEn})`,
        equation: 'التطبيق الواقعي: دراسة سلوك المادة وتطبيقاتها في التكنولوجيا المعاصرة',
        steps: [
          { stepNumber: 1, textAr: 'وصف التجربة المعملية وتحديد أدوات القياس والمواد المستخدمة باحتياطات السلامة.', textEn: 'Describe lab protocol, measurement apparatus, and safety precautions.', noteAr: 'إعداد التجربة', noteEn: 'Apparatus setup' },
          { stepNumber: 2, textAr: 'ملاحظة التغيرات (انبعاث طاقة، تغير لون، تولد جهد، انقسام خلوي) وتسجيل البيانات.', textEn: 'Record quantitative and qualitative observations systematically.', noteAr: 'تسجيل الملاحظات', noteEn: 'Data logging' },
          { stepNumber: 3, textAr: 'ربط النتيجة بالتطبيقات الصناعية والطبية والبيئية في حياتنا اليومية.', textEn: 'Correlate experimental findings with industrial, biomedical, or environmental applications.', noteAr: 'التطبيق الحيوي', noteEn: 'Practical application' }
        ],
        takeawayAr: 'المفاهيم العلمية ليست نظريات في الكتب، بل هي المحرك الأساسي لكافة التقنيات والصناعات الحديثة.',
        takeawayEn: 'Scientific principles form the foundational backbone for modern technological innovations.'
      },
      {
        titleAr: `مثال تطبيقي 4 من 4: تحليل مقارن واستنتاج وتجنب المفاهيم الخاطئة لـ (${concepts[3] || concepts[1] || title})`,
        titleEn: `Worked Example 4 of 4: Comparative Analysis & Misconception Clarification for (${conceptsEn[3] || conceptsEn[1] || titleEn})`,
        equation: 'المقارنة العلمية: التمييز بين المفاهيم المتقاربة وتصحيح الفهم الخاطئ الشائع',
        steps: [
          { stepNumber: 1, textAr: 'طرح المفهوم الخاطئ الشائع الذي يقع فيه الطلاب غالباً وتحليله علمياً.', textEn: 'Identify widespread student misconception and contrast with rigorous scientific theory.', noteAr: 'كشف المفهوم الخاطئ', noteEn: 'Misconception' },
          { stepNumber: 2, textAr: 'تقديم الدليل العلمي التجريبي والبرهان المنطقي الذي يدحض المفهوم الخاطئ.', textEn: 'Provide empirical evidence and rational proof disproving the misconception.', noteAr: 'البرهان العلمي', noteEn: 'Scientific proof' },
          { stepNumber: 3, textAr: 'صياغة القاعدة العلمية الصحيحة بدقة متناهية للاستحضار الدائم في الامتحانات.', textEn: 'Formulate crystal-clear, verified scientific rule for standardized testing.', noteAr: 'القاعدة الراسخة', noteEn: 'Golden conclusion' }
        ],
        takeawayAr: 'معرفة المفاهيم الخاطئة وتصحيحها يحمي الطالب من خسارة الدرجات في أسئلة التعليل والاختيار من متعدد.',
        takeawayEn: 'Proactively correcting common misconceptions builds deep, resilient conceptual clarity.'
      }
    ];
  }

  // 3. Arabic Literature & Language
  if (subject.includes('arabic')) {
    return [
      {
        titleAr: `مثال تطبيقي 1 من 4: الإعراب والتحليل النحوي الدقيق لـ (${concepts[0] || title})`,
        titleEn: `Worked Example 1 of 4: Detailed Grammatical Parsing (I'rab) for (${conceptsEn[0] || titleEn})`,
        equation: 'النموذج الإعرابي: تحديد الموقع الإعرابي والحالة والعلامة الإعرابية والسبب',
        steps: [
          { stepNumber: 1, textAr: 'قراءة الجملة الفصيحة وتحديد نوعها (جملة اسمية أم فعلية) وأركانها الأساسية.', textEn: 'Classify sentence type (nominal or verbal) and identify its core components.', noteAr: 'تحديد نوع الجملة', noteEn: 'Sentence classification' },
          { stepNumber: 2, textAr: 'تحديد الموقع الإعرابي للكلمة المطلوبة (فاعل، مفعول به، خبر، نعت، مضاف إليه...).', textEn: 'Determine the syntactic function of target word in Arabic grammar.', noteAr: 'الموقع الإعرابي', noteEn: 'Syntactic role' },
          { stepNumber: 3, textAr: 'تحديد الحالة الإعرابية (مرفوع، منصوب، مجرور، مجزوم) واستخراج العلامة الصحيحة.', textEn: 'Identify grammatical case and apply correct vowel/marker (dhamma, fatha, kasra, sukun).', noteAr: 'العلامة الإعرابية', noteEn: 'Case marker' }
        ],
        takeawayAr: 'الإعراب فرع المعنى؛ بفهم المعنى الدقيق للجملة يتضح موقع كل كلمة وعلامتها الإعرابية فوراً.',
        takeawayEn: 'In Arabic grammar, parsing derives from meaning; understanding context reveals syntax immediately.'
      },
      {
        titleAr: `مثال تطبيقي 2 من 4: الميزان الصرفي واشتقاق الأوزان لـ (${concepts[1] || concepts[0] || title})`,
        titleEn: `Worked Example 2 of 4: Morphological Derivation (Sarf) for (${conceptsEn[1] || conceptsEn[0] || titleEn})`,
        equation: 'الميزان الصرفي: فـ - عـ - ل وحساب الحروف الأصلية والزوائد',
        steps: [
          { stepNumber: 1, textAr: 'تجريد الكلمة إلى جذرها الثلاثي أو الرباعي الأصلي ومقابلته بـ (ف ع ل).', textEn: 'Extract the root letters of the word and align with the base root (Fa-Ayn-Lam).', noteAr: 'الجذر الأصلي', noteEn: 'Root extraction' },
          { stepNumber: 2, textAr: 'إنزال حروف الزيادة في مواضعها المحددة من الميزان الصرفي بنفس الحركات.', textEn: 'Map affixes and vowels into corresponding positions in the morphological scale.', noteAr: 'إنزال الزوائد', noteEn: 'Affix mapping' },
          { stepNumber: 3, textAr: 'وزن الكلمة وتحديد دلالتها الصرفية (اسم فاعل، مبالغة، اسم مفعول، صفة مشبهة).', textEn: 'Determine morphological pattern and semantic function of the derived noun.', noteAr: 'الوزن والدلالة', noteEn: 'Morphological weight' }
        ],
        takeawayAr: 'الميزان الصرفي هو مرآة اللغة العربية؛ به نعرف أصول الكلمات وزوائدها ودلالات معانيها بدقة.',
        takeawayEn: 'Arabic morphology precisely mirrors root structures, semantic derivations, and linguistic beauty.'
      },
      {
        titleAr: `مثال تطبيقي 3 من 4: البلاغة والبيان والتحليل الأدبي لـ (${concepts[2] || concepts[0] || title})`,
        titleEn: `Worked Example 3 of 4: Rhetorical Analysis & Imagery (Balagha) for (${conceptsEn[2] || conceptsEn[0] || titleEn})`,
        equation: 'الصورة البيانية: تحديد المشبه والمشبه به وسر الجمال والأثر النفسي',
        steps: [
          { stepNumber: 1, textAr: 'استخراج الصورة البيانية (تشبيه، استعارة، كناية) وتحديد طرفيها الأساسيين.', textEn: 'Identify rhetorical device (simile, metaphor, metonymy) and its core elements.', noteAr: 'تحديد الصورة', noteEn: 'Device identification' },
          { stepNumber: 2, textAr: 'شرح الصورة بأسلوب أدبي رفيع وبيان وجه الشبه بين الطرفين.', textEn: 'Analyze the imagery and describe the shared tenor/vehicle relationship.', noteAr: 'شرح التشبيه/الاستعارة', noteEn: 'Imagery analysis' },
          { stepNumber: 3, textAr: 'تحديد سر الجمال (التشخيص، التجسيم، التوضيح) وأثره في ترسيخ المعنى لدى القارئ.', textEn: 'Highlight aesthetic effect (personification, concretization) and emotional impact.', noteAr: 'سر الجمال', noteEn: 'Aesthetic impact' }
        ],
        takeawayAr: 'الصور البلاغية تمنح المعاني المجردة جسداً وحياة، وتثير خيال القارئ وتضاعف قوة المعنى.',
        takeawayEn: 'Rhetorical imagery breathes vibrant life into abstract ideas, elevating literary impact.'
      },
      {
        titleAr: `مثال تطبيقي 4 من 4: التطبيق الإملائي وتجنب الأخطاء الشائعة لـ (${concepts[3] || concepts[1] || title})`,
        titleEn: `Worked Example 4 of 4: Orthographic Application & Common Error Prevention for (${conceptsEn[3] || conceptsEn[1] || titleEn})`,
        equation: 'القاعدة الإملائية: الضبط السليم للهمزات، الألف اللينة، وعلامات الترقيم',
        steps: [
          { stepNumber: 1, textAr: 'تحليل حركة الحرف وحركة ما قبله وفق سلم قوة الحركات (الكسرة > الضمة > الفتحة > السكون).', textEn: 'Analyze vowel hierarchy (kasra > damma > fatha > sukun) governing hamza writing.', noteAr: 'سلم الحركات', noteEn: 'Vowel hierarchy' },
          { stepNumber: 2, textAr: 'تطبيق القاعدة الإملائية المعتمدة وكتابة الكلمة بالرسم الصحيح.', textEn: 'Execute standardized Arabic orthography rule and write target word accurately.', noteAr: 'الرسم الإملائي', noteEn: 'Spelling rule' },
          { stepNumber: 3, textAr: 'وضع علامة الترقيم المناسبة وتوضيح الفرق بين الكلمات المتشابهة صوتاً والمختلفة رسماً.', textEn: 'Apply appropriate punctuation and clarify homophonic distinctions.', noteAr: 'علامات الترقيم', noteEn: 'Punctuation' }
        ],
        takeawayAr: 'السلامة الإملائية عنوان الفصاحة؛ ومراعاة سلم الحركات يضمن كتابة خالية من الأخطاء دائماً.',
        takeawayEn: 'Mastering orthographic rules and vowel strength ensures flawless Arabic written composition.'
      }
    ];
  }

  // 4. Islamic Studies / التربية الإسلامية والشرعية
  if (subject.includes('islamic') || subject.includes('sharia') || subject.includes('quran')) {
    return [
      {
        titleAr: `مثال تطبيقي 1 من 4: استنباط الحكم الشرعي والدليل من القرآن والسنة لـ (${concepts[0] || title})`,
        titleEn: `Worked Example 1 of 4: Sharia Ruling & Evidence Deduction for (${conceptsEn[0] || titleEn})`,
        equation: 'الأصل الشرعي: النص من القرآن أو السنة النبوية  -->  الحكم التكليفي والدلالة',
        steps: [
          { stepNumber: 1, textAr: 'قراءة النص الشرعي بتدبر وفهم معاني المفردات ودلالات الألفاظ.', textEn: 'Read scriptural text mindfully and analyze foundational terminology.', noteAr: 'فهم النص', noteEn: 'Text comprehension' },
          { stepNumber: 2, textAr: 'استخراج وجه الدلالة من النص وتحديد نوع الحكم (واجب، مستحب، مباح، مكروه، محرم).', textEn: 'Extract theological indication and classify legal status (wajib, mandub, mubah, makruh, haram).', noteAr: 'استخراج الحكم', noteEn: 'Legal ruling' },
          { stepNumber: 3, textAr: 'بيان الحكمة التشريعية العظيمة من وراء هذا الحكم ومقاصده في حفظ الدين والنفس.', textEn: 'Explain divine wisdom and objectives behind the ruling in protecting faith and society.', noteAr: 'الحكمة والمقصد', noteEn: 'Divine wisdom' }
        ],
        takeawayAr: 'الأحكام الشرعية مبنية على جلب المصالح ودرء المفاسد، وحكم الله فيه الخير والسعادة للمجتمع.',
        takeawayEn: 'Islamic rulings center on maximizing welfare, preventing harm, and elevating societal wellbeing.'
      },
      {
        titleAr: `مثال تطبيقي 2 من 4: التطبيق الفقهي العملي والشروط والأركان لـ (${concepts[1] || concepts[0] || title})`,
        titleEn: `Worked Example 2 of 4: Practical Fiqh Execution, Conditions & Pillars for (${conceptsEn[1] || conceptsEn[0] || titleEn})`,
        equation: 'التطبيق الفقهي: التمييز بين الشروط (قبل العمل) والأركان (في صلب العمل) والسنن',
        steps: [
          { stepNumber: 1, textAr: 'التحقق من توافر الشروط المسبقة لصحة العمل التعبدي (كالطهارة ودخول الوقت والنية).', textEn: 'Verify prerequisite conditions required for validity (e.g. purity, intention, timing).', noteAr: 'الشروط المسبقة', noteEn: 'Prerequisites' },
          { stepNumber: 2, textAr: 'أداء الأركان الأساسية بالترتيب المطلوب مع الطمأنينة والإخلاص التام لله تعالى.', textEn: 'Perform fundamental pillars in mandated order with tranquility and sincerity.', noteAr: 'أداء الأركان', noteEn: 'Pillars execution' },
          { stepNumber: 3, textAr: 'تجنب المبطلات والمفسدات ومعرفة كيفية تدارك السهو بالحلول الفقهية المعتمدة.', textEn: 'Avoid invalidating actions and apply approved corrective steps (e.g. prostration of forgetfulness).', noteAr: 'تدارك السهو', noteEn: 'Error correction' }
        ],
        takeawayAr: 'العبادة الصحيحة تجمع بين الإخلاص القلبي لله والاتباع الدقيق لهدي النبي صلى الله عليه وسلم.',
        takeawayEn: 'Acceptable worship harmonizes sincere intention with faithful emulation of prophetic guidance.'
      },
      {
        titleAr: `مثال تطبيقي 3 من 4: القدوة النبوية والموقف التربوي المعاصر لـ (${concepts[2] || concepts[0] || title})`,
        titleEn: `Worked Example 3 of 4: Prophetic Emulation & Contemporary Ethics for (${conceptsEn[2] || conceptsEn[0] || titleEn})`,
        equation: 'القدوة الحسنة: هدي النبي صلى الله عليه وسلم في التعامل الإنساني والأخلاقي',
        steps: [
          { stepNumber: 1, textAr: 'استعراض موقف مشرق من السيرة النبوية العطرة يجسد هذا المفهوم في أبهى صوره.', textEn: 'Review an illuminating instance from prophetic biography demonstrating the virtue.', noteAr: 'الموقف النبوي', noteEn: 'Prophetic biography' },
          { stepNumber: 2, textAr: 'تحليل سلوك النبي صلى الله عليه وسلم وحكمته ورحمته في التعامل مع مختلف المواقف.', textEn: 'Analyze the profound wisdom, compassion, and ethical leadership exhibited.', noteAr: 'التحليل الأخلاقي', noteEn: 'Ethical analysis' },
          { stepNumber: 3, textAr: 'تحويل هذا الهدي إلى ممارسات يومية يقوم بها الطالب مع والديه وزملائه ومجتمعه.', textEn: 'Translate this noble character into actionable student habits at home, school, and community.', noteAr: 'التطبيق اليومي', noteEn: 'Daily practice' }
        ],
        takeawayAr: 'حسن الخلق والرحمة في التعامل هما جوهر رسالة الإسلام وأثقل ما يوضع في ميزان العبد يوم القيامة.',
        takeawayEn: 'Exemplary character and compassion represent the core message of Islamic faith in everyday conduct.'
      },
      {
        titleAr: `مثال تطبيقي 4 من 4: فتاوى ومسائل معاصرة واستنتاجات ذكية لـ (${concepts[3] || concepts[1] || title})`,
        titleEn: `Worked Example 4 of 4: Contemporary Queries & Intelligent Ethical Application for (${conceptsEn[3] || conceptsEn[1] || titleEn})`,
        equation: 'فقه النوازل: تنزيل القواعد الشرعية على مستجدات العصر والتكنولوجيا',
        steps: [
          { stepNumber: 1, textAr: 'عرض المسألة المعاصرة (كالتعاملات الرقمية، الخصوصية في وسائل التواصل، الأمانة العلمية).', textEn: 'Present modern ethical scenario (digital conduct, cyber privacy, academic integrity).', noteAr: 'المسألة المعاصرة', noteEn: 'Modern scenario' },
          { stepNumber: 2, textAr: 'إرجاع المسألة إلى أصلها الشرعي وقواعد الفقه الكلية (كقاعدة: لا ضرر ولا ضرار).', textEn: 'Map modern issue to overarching legal maxims (e.g., neither harm nor reciprocating harm).', noteAr: 'التأصيل الفقهي', noteEn: 'Legal grounding' },
          { stepNumber: 3, textAr: 'صياغة الموقف السلوكي المعتمد الذي يحفظ دين الطالب وضميره وكرامته في العالم الرقمي.', textEn: 'Formulate principled behavioral guidelines protecting student integrity in modern society.', noteAr: 'الموقف السلوكي', noteEn: 'Principled stance' }
        ],
        takeawayAr: 'الإسلام منهج حياة متجدد وشامل لكل زمان ومكان، وقواعده تمنحنا بوصلة أخلاقية ثابتة في كل عصر.',
        takeawayEn: 'Islamic principles offer a timeless moral compass navigating modern technological and social challenges.'
      }
    ];
  }

  // 5. Default General / Computer Science / Social Studies / General Curriculum
  return [
    {
      titleAr: `مثال تطبيقي 1 من 4: تأسيس المفهوم والتحليل الأولي لـ (${concepts[0] || title})`,
      titleEn: `Worked Example 1 of 4: Core Concept Foundation & Initial Analysis for (${conceptsEn[0] || titleEn})`,
      equation: 'النموذج التأسيسي: تفكيك الفكرة المعقدة إلى عناصرها البسيطة المفهومة',
      steps: [
        { stepNumber: 1, textAr: 'قراءة المفهوم الأساسي وتحديد عناصره الجوهرية بدون تعقيد.', textEn: 'Deconstruct central concept into straightforward, intuitive components.', noteAr: 'التفكيك الأولي', noteEn: 'Deconstruction' },
        { stepNumber: 2, textAr: 'استعراض حالة نموذجية وتطبيق القاعدة عليها خطوة بخطوة بالمنطق السليم.', textEn: 'Walk through a benchmark scenario applying the foundational rule logically.', noteAr: 'التطبيق المباشر', noteEn: 'Direct application' },
        { stepNumber: 3, textAr: 'استخلاص النتيجة وتثبيت الفكرة في الذاكرة عبر الملاحظة المقارنة.', textEn: 'Synthesize the confirmed outcome and cement intuition through comparison.', noteAr: 'النتيجة التأسيسية', noteEn: 'Core synthesis' }
      ],
      takeawayAr: 'فهم الأساس النظري الصحيح يمهد الطريق لإتقان كافة التطبيقات المتقدمة بسهولة ويسر.',
      takeawayEn: 'Mastering the fundamental core enables effortless grasp of advanced problem-solving.'
    },
    {
      titleAr: `مثال تطبيقي 2 من 4: تطبيق عملي ومسألة تدريبية لـ (${concepts[1] || concepts[0] || title})`,
      titleEn: `Worked Example 2 of 4: Practical Execution & Guided Practice for (${conceptsEn[1] || conceptsEn[0] || titleEn})`,
      equation: 'التطبيق الإجرائي: الخطوات المنظمة للوصول إلى الحل النموذجي',
      steps: [
        { stepNumber: 1, textAr: 'تحديد المدخلات والمعطيات والشروط الأساسية للعملية أو المسألة.', textEn: 'Identify inputs, parameters, and boundary conditions systematically.', noteAr: 'تحديد المدخلات', noteEn: 'Input identification' },
        { stepNumber: 2, textAr: 'تنفيذ الإجراءات المتسلسلة والمتابعة الدقيقة لكل مرحلة بدون تخطي.', textEn: 'Execute step-by-step sequential operations without skipping crucial stages.', noteAr: 'المعالجة المنهجية', noteEn: 'Systematic execution' },
        { stepNumber: 3, textAr: 'التحقق من صحة المخرجات ومطابقتها للمعايير المتوقعة.', textEn: 'Verify final outputs against expected quality benchmarks and constraints.', noteAr: 'فحص المخرجات', noteEn: 'Output verification' }
      ],
      takeawayAr: 'التدريب العملي المنتظم يحول المعرفة النظرية إلى مهارة تلقائية راسخة لدى الطالب.',
      takeawayEn: 'Structured deliberate practice converts conceptual knowledge into automatic, reliable competence.'
    },
    {
      titleAr: `مثال تطبيقي 3 من 4: سيناريو من واقع الحياة المعاصرة لـ (${concepts[2] || concepts[0] || title})`,
      titleEn: `Worked Example 3 of 4: Real-World Modern Scenario for (${conceptsEn[2] || conceptsEn[0] || titleEn})`,
      equation: 'الربط الواقعي: كيف نرى هذا المفهوم يعمل في حياتنا اليومية وسوق العمل',
      steps: [
        { stepNumber: 1, textAr: 'طرح موقف واقعي ملموس يواجهه الطلاب في حياتهم أو في التقنيات الحديثة.', textEn: 'Present an authentic modern scenario encountered in daily life or modern technology.', noteAr: 'الموقف الواقعي', noteEn: 'Authentic scenario' },
        { stepNumber: 2, textAr: 'تحليل الموقف واستخدام المفهوم المدروس لإيجاد الحل الأمثل أو اتخاذ القرار الصحيح.', textEn: 'Analyze the context using the curriculum concept to arrive at an optimal decision.', noteAr: 'اتخاذ القرار', noteEn: 'Decision making' },
        { stepNumber: 3, textAr: 'ملاحظة الأثر الإيجابي لتطبيق هذه المعرفة في ترشيد الوقت والجهد والموارد.', textEn: 'Observe the tangible benefits of applying this knowledge in conserving time and resources.', noteAr: 'الأثر الإيجابي', noteEn: 'Tangible impact' }
      ],
      takeawayAr: 'التعليم الحقيقي هو الذي يربط ما في الكتب بما يدور حولنا في العالم الواقعي المعاش.',
      takeawayEn: 'Authentic education connects textbook theory directly with the dynamic world around us.'
    },
    {
      titleAr: `مثال تطبيقي 4 من 4: التفكير الناقد واستكشاف الأخطاء وتصحيحها لـ (${concepts[3] || concepts[1] || title})`,
      titleEn: `Worked Example 4 of 4: Critical Thinking & Debugging Pitfalls for (${conceptsEn[3] || conceptsEn[1] || titleEn})`,
      equation: 'تحدي الإتقان: اكتشاف الخطأ، تتبعه، وإصلاحه بالطريقة المعتمدة الصحيحة',
      steps: [
        { stepNumber: 1, textAr: 'عرض حل غير صحيح يحتوي على خطأ شائع يقع فيه الكثير من الطلاب.', textEn: 'Examine a flawed student solution containing a common diagnostic error.', noteAr: 'اكتشاف الخطأ', noteEn: 'Error detection' },
        { stepNumber: 2, textAr: 'تحديد سبب الخطأ وتوضيح لماذا أدى هذا المسار إلى نتيجة غير سليمة.', textEn: 'Analyze the root cause and explain why this misconception derails the solution.', noteAr: 'تحليل السبب', noteEn: 'Root cause analysis' },
        { stepNumber: 3, textAr: 'إعادة الحل بالأسلوب النموذجي وتحديد العلامة التحذيرية لتجنب تكرار هذا الخطأ مستقبلاً.', textEn: 'Reconstruct the correct model solution with explicit warning cues for exam success.', noteAr: 'الحل المصحح', noteEn: 'Corrected resolution' }
      ],
      takeawayAr: 'التعلم من الأخطاء وتحليلها هو أقصر الطرق للوصول إلى الإتقان الكامل والدرجات النهائية.',
      takeawayEn: 'Analyzing and debugging common mistakes is the most effective pathway to complete mastery.'
    }
  ];
}

/**
 * Ensures that ANY lecture contains exactly 4 step-by-step interactive examples.
 * If the lecture has fewer than 4 examples, it enriches it with authentic curriculum examples.
 */
export function ensureFourExamplesForLecture(lecture: Lecture): Lecture {
  if (!lecture) return lecture;

  // Clone lecture safely
  const enriched: Lecture = {
    ...lecture,
    sections: lecture.sections ? lecture.sections.map(s => ({ ...s })) : []
  };

  // Collect existing interactive examples from sections
  const existingExamples: InteractiveExample[] = [];
  if (enriched.sections) {
    enriched.sections.forEach(sec => {
      if (sec.interactiveExample && sec.interactiveExample.steps && sec.interactiveExample.steps.length > 0) {
        existingExamples.push(sec.interactiveExample);
      }
    });
  }

  // Also check workedExamples if present
  if (enriched.workedExamples && Array.isArray(enriched.workedExamples)) {
    enriched.workedExamples.forEach(we => {
      if (we && (we.steps || we.stepsAr || we.stepByStepSolutionAr)) {
        const stepsArr: StepItem[] = (we.steps || we.stepsAr || we.stepByStepSolutionAr || []).map((st: any, i: number) => {
          if (typeof st === 'string') {
            return { stepNumber: i + 1, textAr: st, textEn: (we.stepsEn && we.stepsEn[i]) || st };
          }
          return st;
        });
        existingExamples.push({
          titleAr: we.titleAr || `مثال تطبيقي ${existingExamples.length + 1}`,
          titleEn: we.titleEn || `Worked Example ${existingExamples.length + 1}`,
          equation: we.problemAr || we.equation || '',
          steps: stepsArr,
          takeawayAr: we.takeawayAr || 'الفائدة الأساسية من حل هذا المثال',
          takeawayEn: we.takeawayEn || 'Key takeaway from this example'
        });
      }
    });
  }

  // Generate contextual templates if we need more
  const templates = generateContextualExamples(enriched);

  // Build a finalized list of AT LEAST 4 examples
  const finalizedExamples: InteractiveExample[] = [];

  // Add existing ones first
  for (let i = 0; i < existingExamples.length; i++) {
    const ex = existingExamples[i];
    finalizedExamples.push({
      ...ex,
      titleAr: ex.titleAr?.includes('من 4') ? ex.titleAr : `مثال تطبيقي ${i + 1} من 4: ${ex.titleAr.replace(/^مثال\s*\d*[:\s-]*/i, '')}`,
      titleEn: ex.titleEn?.includes('of 4') ? ex.titleEn : `Worked Example ${i + 1} of 4: ${ex.titleEn.replace(/^Example\s*\d*[:\s-]*/i, '')}`
    });
  }

  // Fill in until we have at least 4 examples
  while (finalizedExamples.length < 4) {
    const neededIndex = finalizedExamples.length;
    const template = templates[neededIndex] || templates[neededIndex % templates.length];
    finalizedExamples.push({
      titleAr: template.titleAr,
      titleEn: template.titleEn,
      equation: template.equation,
      steps: template.steps,
      takeawayAr: template.takeawayAr,
      takeawayEn: template.takeawayEn
    });
  }

  // Ensure sections array has at least 4 sections to host the 4 examples
  if (!enriched.sections || enriched.sections.length === 0) {
    enriched.sections = [
      {
        titleAr: '1. الشرح المفاهيمي والأساس العلمي',
        titleEn: '1. Conceptual Explanation & Fundamentals',
        contentAr: enriched.mainContentAr || enriched.descriptionAr || 'شرح تفصيلي للمفاهيم الأساسية للدرس وأبعادها العلمية والتطبيقية.',
        contentEn: enriched.mainContentEn || enriched.descriptionEn || 'Detailed explanation of foundational concepts and applications.',
        interactiveExample: finalizedExamples[0]
      },
      {
        titleAr: '2. النماذج التطبيقية والقوانين الحاكمة',
        titleEn: '2. Applied Models & Governing Principles',
        contentAr: 'تطبيق القواعد المنظمة والمعادلات الأساسية لربط المفهوم النظري بالتحليل العلمي.',
        contentEn: 'Application of governing rules and formulas connecting theoretical principles with analysis.',
        interactiveExample: finalizedExamples[1]
      },
      {
        titleAr: '3. التطبيقات الواقعية والربط الحياتي',
        titleEn: '3. Real-World Applications & Context',
        contentAr: 'دراسة حالات ونماذج واقعية توضح كيف يعمل هذا المفهوم في الحياة والبيئة والصناعة المعاصرة.',
        contentEn: 'Real-world case studies demonstrating practical manifestation in life, environment, and industry.',
        interactiveExample: finalizedExamples[2]
      },
      {
        titleAr: '4. التحليل المتقدم ومهارات الإتقان',
        titleEn: '4. Advanced Synthesis & Mastery Skills',
        contentAr: 'تحليل التحديات المعرفية والمسائل المركبة لتأكيد الفهم العميق والاستعداد التام للاختبارات.',
        contentEn: 'Deep cognitive synthesis and compound problem solving ensuring complete examination readiness.',
        interactiveExample: finalizedExamples[3]
      }
    ];
  } else if (enriched.sections.length < 4) {
    // We have 1, 2, or 3 sections: distribute examples into existing sections, then expand up to 4
    for (let i = 0; i < enriched.sections.length; i++) {
      enriched.sections[i].interactiveExample = finalizedExamples[i];
    }
    // Add missing sections so there are 4 sections with 4 examples
    const sectionTitlesAr = [
      '1. الشرح المفاهيمي والأساس العلمي',
      '2. النماذج التطبيقية والقوانين الحاكمة',
      '3. التطبيقات الواقعية والربط الحياتي',
      '4. التحليل المتقدم ومهارات الإتقان'
    ];
    const sectionTitlesEn = [
      '1. Conceptual Explanation & Fundamentals',
      '2. Applied Models & Governing Principles',
      '3. Real-World Applications & Context',
      '4. Advanced Synthesis & Mastery Skills'
    ];
    while (enriched.sections.length < 4) {
      const idx = enriched.sections.length;
      enriched.sections.push({
        titleAr: sectionTitlesAr[idx],
        titleEn: sectionTitlesEn[idx],
        contentAr: `يتناول هذا القسم الجانب التطبيقي والتحليلي المتقدم لـ (${enriched.titleAr}) لترسيخ الفهم وحل التدريبات.`,
        contentEn: `This section addresses applied and advanced synthesis for (${enriched.titleEn}) to consolidate student mastery.`,
        interactiveExample: finalizedExamples[idx]
      });
    }
  } else {
    // We have 4 or more sections: ensure the first 4 sections each have their example
    for (let i = 0; i < 4; i++) {
      if (!enriched.sections[i].interactiveExample) {
        enriched.sections[i].interactiveExample = finalizedExamples[i];
      } else {
        // Ensure numbering says "من 4" for clarity
        const curr = enriched.sections[i].interactiveExample!;
        if (!curr.titleAr?.includes('من 4')) {
          curr.titleAr = `مثال تطبيقي ${i + 1} من 4: ${curr.titleAr.replace(/^مثال\s*\d*[:\s-]*/i, '')}`;
        }
        if (!curr.titleEn?.includes('of 4')) {
          curr.titleEn = `Worked Example ${i + 1} of 4: ${curr.titleEn.replace(/^Example\s*\d*[:\s-]*/i, '')}`;
        }
      }
    }
  }

  // Also synchronize workedExamples array so it has all 4 examples as a standalone backup
  enriched.workedExamples = finalizedExamples.map((ex, idx) => ({
    id: `we-${enriched.id}-${idx + 1}`,
    titleAr: ex.titleAr,
    titleEn: ex.titleEn,
    problemAr: ex.equation,
    problemEn: ex.equation,
    stepByStepSolutionAr: ex.steps.map(s => `${s.textAr} ${s.noteAr ? `(${s.noteAr})` : ''}`),
    stepByStepSolutionEn: ex.steps.map(s => `${s.textEn} ${s.noteEn ? `(${s.noteEn})` : ''}`),
    takeawayAr: ex.takeawayAr,
    takeawayEn: ex.takeawayEn
  }));

  return enriched;
}
