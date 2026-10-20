import type { EducationTrack, EducationType, Lecture, Subject } from '../types';

const units = [
  {
    titleAr: 'قيم عربية',
    titleEn: 'Arabic Values',
    texts: [
      {
        titleAr: 'مكارم الأخلاق وحاتم الطائي',
        titleEn: 'Noble Character and Hatim al-Tai',
        genreAr: 'قراءة',
        genreEn: 'Reading',
        focusAr: 'استخلاص أثر الكرم والوفاء وحسن المعاملة في بناء العلاقات، والاستدلال على الفكرة من تفاصيل النص.',
        focusEn: 'Explore how generosity, loyalty, and good conduct shape relationships, supporting interpretations with textual details.',
        outcomesAr: ['تحديد الفكرة الرئيسة والتفاصيل الداعمة', 'استنتاج قيمة أخلاقية من موقف وسلوكه', 'التعبير عن أثر مكارم الأخلاق في المجتمع'],
        outcomeEn: ['Identify the central idea and supporting details', 'Infer an ethical value from an action and its consequences', 'Explain how good character benefits society'],
        warmupAr: 'كيف تترك خصلة أخلاقية واحدة أثرًا يتجاوز صاحبها إلى مجتمعه؟',
        warmupEn: 'How can one good quality affect more than the person who shows it?',
        vocabularyAr: ['مكرمة', 'نجدة'],
        vocabularyEn: ['Virtue', 'Helping someone in need'],
        activityAr: 'صنّف موقفًا من الحياة اليومية إلى قيمة أخلاقية، ثم اكتب دليلًا يوضح أثرها في الآخرين.',
        activityEn: 'Classify a real-life situation by the value it shows, then explain its effect on others.',
        questionAr: 'أي طريقة تساعد على استنتاج قيمة أخلاقية من نص قرائي؟',
        questionEn: 'Which approach helps infer an ethical value from a reading?',
        optionsAr: ['ربط أفعال الشخصيات بنتائجها', 'الاعتماد على عدد الفقرات', 'اختيار أول كلمة في النص'],
        optionsEn: ['Connect characters’ actions to their consequences', 'Rely on the number of paragraphs', 'Choose the first word in the text'],
        correctIndex: 0
      },
      {
        titleAr: 'شباب تسامى للعلا',
        titleEn: 'Youth Aspire to Excellence',
        genreAr: 'نص شعري',
        genreEn: 'Poetry',
        focusAr: 'قراءة النص قراءة معبّرة، وتتبّع صور الطموح والعمل، وشرح العلاقة بين الاجتهاد ورفعة المجتمع.',
        focusEn: 'Read the poem expressively and trace its images of aspiration and effort, relating diligence to the good of society.',
        outcomesAr: ['تحديد المعنى العام للأبيات', 'تفسير صورة أو تعبير في سياقه', 'استخلاص صفات الشباب الطامح'],
        outcomeEn: ['State the overall meaning of the poem', 'Interpret an image or expression in context', 'Infer qualities of aspiring youth'],
        warmupAr: 'ما الفرق بين تمني النجاح واتخاذ خطوة عملية نحوه؟',
        warmupEn: 'What is the difference between wishing for success and taking a step toward it?',
        vocabularyAr: ['تسامى', 'العلا'],
        vocabularyEn: ['Rise above', 'Excellence'],
        activityAr: 'حوّل معنى بيت تختاره إلى هدف قابل للقياس وخطوتين عمليتين لتحقيقه.',
        activityEn: 'Turn the meaning of a chosen verse into a measurable goal and two practical steps.',
        questionAr: 'ما الذي يحوّل الطموح إلى إنجاز؟',
        questionEn: 'What can turn aspiration into achievement?',
        optionsAr: ['العمل المنظم والمثابرة', 'تأجيل البداية', 'انتظار النتائج دون تخطيط'],
        optionsEn: ['Organized effort and persistence', 'Putting off the start', 'Waiting without a plan'],
        correctIndex: 0
      },
      {
        titleAr: 'قيم الحياة الزوجية',
        titleEn: 'Values in Married Life',
        genreAr: 'نص نثري',
        genreEn: 'Prose',
        focusAr: 'مناقشة أسس المودة والتفاهم والمسؤولية المشتركة، والتمييز بين الرأي والدليل في النص.',
        focusEn: 'Discuss affection, understanding, and shared responsibility, distinguishing a claim from its supporting evidence.',
        outcomesAr: ['تلخيص الفكرة المحورية للنص', 'تحديد قيم الحوار والتعاون الواردة فيه', 'التمييز بين الرأي وما يسنده من تعليل'],
        outcomeEn: ['Summarize the central idea', 'Identify values of dialogue and cooperation', 'Distinguish an opinion from its reasoning'],
        warmupAr: 'كيف يسهم الحوار الهادئ في حل اختلاف وجهات النظر؟',
        warmupEn: 'How can calm dialogue help resolve differing viewpoints?',
        vocabularyAr: ['المودة', 'التشاور'],
        vocabularyEn: ['Affection', 'Consultation'],
        activityAr: 'أنشئ خريطة تربط قيمة أسرية بممارسة يومية وأثر متوقع.',
        activityEn: 'Create a map linking a family value to a daily practice and its expected effect.',
        questionAr: 'أي سلوك يعبّر عن المسؤولية المشتركة؟',
        questionEn: 'Which behavior shows shared responsibility?',
        optionsAr: ['التشاور وتقاسم المسؤوليات', 'فرض الرأي دون استماع', 'إلقاء المسؤولية على طرف واحد'],
        optionsEn: ['Consulting and sharing responsibilities', 'Imposing an opinion without listening', 'Leaving responsibility to one person'],
        correctIndex: 0
      }
    ],
    languageAr: 'تمييز الأفعال الناقصة والتامة، ومراجعة أفعال المقاربة والرجاء والشروع في سياقها ودلالتها.',
    languageEn: 'Distinguish incomplete and complete verbs, and study verbs of imminence, hope, and beginning in context.',
    rhetoricAr: 'تمييز الحقيقة والمجاز والتشبيه في سياق النص.',
    rhetoricEn: 'Recognize literal meaning, figurative meaning, and simile in context.',
    literatureAr: 'التعرّف إلى ملامح الأدب في العصر الجاهلي وصدر الإسلام بقدر ما يخدم قراءة نصوص الوحدة.',
    literatureEn: 'Connect selected features of pre-Islamic and early Islamic literature to the unit readings.'
  },
  {
    titleAr: 'التسامح والسلام',
    titleEn: 'Tolerance and Peace',
    texts: [
      {
        titleAr: 'قيم اجتماعية',
        titleEn: 'Social Values',
        genreAr: 'قراءة',
        genreEn: 'Reading',
        focusAr: 'تحليل دور التعاون والاحترام والتكافل في تقوية الروابط الاجتماعية.',
        focusEn: 'Analyze how cooperation, respect, and mutual support strengthen social bonds.',
        outcomesAr: ['استخراج الأفكار المرتبطة بالتعايش', 'شرح أثر قيمة اجتماعية في موقف محدد', 'اقتراح ممارسة تدعم التعاون'],
        outcomeEn: ['Identify ideas related to living together', 'Explain a social value through a situation', 'Suggest a practice that supports cooperation'],
        warmupAr: 'ما الذي يجعل الاختلاف مصدر تعلّم بدلًا من أن يكون سببًا للنزاع؟',
        warmupEn: 'What can make differences a source of learning rather than conflict?',
        vocabularyAr: ['التكافل', 'التعايش'],
        vocabularyEn: ['Mutual support', 'Coexistence'],
        activityAr: 'حلّل موقفًا افتراضيًا يتطلب تعاونًا، وحدد مسؤولية كل مشارك.',
        activityEn: 'Analyze a scenario that requires cooperation and assign each participant a responsibility.',
        questionAr: 'أي سلوك يعزز التعايش في المجتمع؟',
        questionEn: 'Which behavior supports coexistence in a community?',
        optionsAr: ['احترام الاختلاف والتعاون', 'نشر الشائعات', 'إقصاء من يختلف'],
        optionsEn: ['Respecting differences and cooperating', 'Spreading rumors', 'Excluding people with different views'],
        correctIndex: 0
      },
      {
        titleAr: 'العفو مأمول',
        titleEn: 'Forgiveness Is Hoped For',
        genreAr: 'نص شعري',
        genreEn: 'Poetry',
        focusAr: 'تتبّع معنى العفو في النص، وتأمل أثر ضبط النفس وإصلاح العلاقة بعد الخطأ.',
        focusEn: 'Trace the poem’s treatment of forgiveness and consider self-control and repairing relationships after a mistake.',
        outcomesAr: ['شرح الفكرة العامة للنص الشعري', 'تحديد تعبير يصور التسامح وبيان أثره', 'الموازنة بين العفو والتنازل عن الحقوق'],
        outcomeEn: ['Explain the poem’s general idea', 'Identify an expression that portrays tolerance and explain its effect', 'Distinguish forgiveness from giving up legitimate rights'],
        warmupAr: 'ما الخطوات التي تجعل الاعتذار والعفو بداية لإصلاح العلاقة؟',
        warmupEn: 'What makes an apology and forgiveness a beginning for repairing a relationship?',
        vocabularyAr: ['العفو', 'الصفح'],
        vocabularyEn: ['Forgiveness', 'Pardon'],
        activityAr: 'اكتب حوارًا قصيرًا يبيّن اعتذارًا صادقًا وردًا متزنًا يحفظ الكرامة.',
        activityEn: 'Write a short dialogue with a sincere apology and a balanced response that preserves dignity.',
        questionAr: 'ما الأثر الأقرب للعفو الواعي؟',
        questionEn: 'What is a likely effect of thoughtful forgiveness?',
        optionsAr: ['فتح طريق للإصلاح مع حفظ الحقوق', 'تشجيع تكرار الأذى', 'إنكار وقوع الخطأ'],
        optionsEn: ['Making room for repair while respecting rights', 'Encouraging harm to be repeated', 'Denying that a mistake occurred'],
        correctIndex: 0
      },
      {
        titleAr: 'من أجل حياة كريمة',
        titleEn: 'For a Dignified Life',
        genreAr: 'نص نثري',
        genreEn: 'Prose',
        focusAr: 'فهم الصلة بين الكرامة الإنسانية والتكافل والعمل، وتقويم الحجج التي تدعو إلى تحسين الحياة.',
        focusEn: 'Understand the link between human dignity, solidarity, and work, and evaluate arguments for improving life.',
        outcomesAr: ['تحديد المشكلة والفكرة المقترحة لمعالجتها', 'تمييز الحجة من المثال', 'صياغة مبادرة واقعية تخدم المجتمع'],
        outcomeEn: ['Identify a problem and a proposed response', 'Distinguish an argument from an example', 'Design a realistic community initiative'],
        warmupAr: 'كيف يمكن لمبادرة صغيرة أن تحسن حياة فئة من المجتمع؟',
        warmupEn: 'How can a small initiative improve life for a community group?',
        vocabularyAr: ['الكرامة', 'المبادرة'],
        vocabularyEn: ['Dignity', 'Initiative'],
        activityAr: 'صمّم مبادرة مدرسية قصيرة، وحدد الفئة المستفيدة وخطوة التنفيذ.',
        activityEn: 'Design a small school initiative and identify its beneficiaries and first action.',
        questionAr: 'أي عنصر يجعل المبادرة المجتمعية قابلة للتنفيذ؟',
        questionEn: 'What makes a community initiative actionable?',
        optionsAr: ['هدف واضح وخطوات ومسؤوليات', 'شعار عام بلا خطة', 'تجاهل حاجات المستفيدين'],
        optionsEn: ['A clear goal, steps, and responsibilities', 'A slogan without a plan', 'Ignoring beneficiaries’ needs'],
        correctIndex: 0
      }
    ],
    languageAr: 'مراجعة اسم الفاعل واسم المفعول وصيغ المبالغة، وتمييز عمل كل صيغة ودلالتها في الجملة.',
    languageEn: 'Review active and passive participles and intensive forms, identifying their function and meaning in sentences.',
    rhetoricAr: 'تتبّع الاستعارة والتعبير التصويري وأثرهما في تقوية معنى التسامح.',
    rhetoricEn: 'Trace metaphor and imagery and explain how they strengthen ideas of tolerance.',
    literatureAr: 'ربط النصوص بملامح من الأدب في صدر الإسلام والعصر الأموي في حدود موضوعات الوحدة.',
    literatureEn: 'Relate the readings to selected features of early Islamic and Umayyad literature.'
  },
  {
    titleAr: 'العلم والأخلاق',
    titleEn: 'Knowledge and Ethics',
    texts: [
      {
        titleAr: 'تكنولوجيا المعلومات',
        titleEn: 'Information Technology',
        genreAr: 'قراءة',
        genreEn: 'Reading',
        focusAr: 'فهم منافع التقنية ومسؤولية استخدامها، والتمييز بين المعلومة الموثوقة والمحتوى غير المتحقق.',
        focusEn: 'Understand technology’s benefits and responsible use, distinguishing reliable information from unverified content.',
        outcomesAr: ['تحديد الفكرة والتفاصيل التقنية في النص', 'تقويم أثر التقنية في الفرد والمجتمع', 'اقتراح ضوابط للاستخدام المسؤول'],
        outcomeEn: ['Identify the main idea and technical details', 'Evaluate technology’s effects on individuals and society', 'Suggest guidelines for responsible use'],
        warmupAr: 'كيف تتحقق من معلومة وصلتك عبر منصة رقمية؟',
        warmupEn: 'How do you verify information received through a digital platform?',
        vocabularyAr: ['الموثوقية', 'المواطنة الرقمية'],
        vocabularyEn: ['Reliability', 'Digital citizenship'],
        activityAr: 'قارن بين مصدرين افتراضيين للمعلومة مستخدمًا معايير الكاتب والحداثة والدليل.',
        activityEn: 'Compare two hypothetical information sources using authorship, currency, and evidence.',
        questionAr: 'ما الخطوة الأهم قبل مشاركة معلومة رقمية؟',
        questionEn: 'What is the most important step before sharing digital information?',
        optionsAr: ['التحقق من مصدرها ودليلها', 'إعادة نشرها فورًا', 'الاعتماد على عنوانها فقط'],
        optionsEn: ['Verify its source and supporting evidence', 'Repost it immediately', 'Rely only on its headline'],
        correctIndex: 0
      },
      {
        titleAr: 'ابدأ بنفسك',
        titleEn: 'Begin with Yourself',
        genreAr: 'نص شعري',
        genreEn: 'Poetry',
        focusAr: 'تأمل دعوة النص إلى إصلاح الذات، وربط السلوك الفردي بأثره في المحيط.',
        focusEn: 'Examine the text’s call to self-improvement and connect personal conduct to its effect on others.',
        outcomesAr: ['تفسير الدعوة المحورية في النص', 'استنتاج العلاقة بين السلوك الفردي والصالح العام', 'تحويل فكرة النص إلى هدف سلوكي'],
        outcomeEn: ['Interpret the text’s central call', 'Infer how personal conduct affects the common good', 'Turn an idea from the text into a behavioral goal'],
        warmupAr: 'ما العادة التي يمكنك تحسينها هذا الأسبوع ويلاحظ أثرها من حولك؟',
        warmupEn: 'What habit could you improve this week in a way others would notice?',
        vocabularyAr: ['الإصلاح', 'القدوة'],
        vocabularyEn: ['Improvement', 'Role model'],
        activityAr: 'ضع خطة أسبوعية من ثلاث خطوات لتطوير عادة، ثم حدّد مؤشرًا لمراجعة التقدم.',
        activityEn: 'Make a three-step weekly plan to improve a habit and choose a progress measure.',
        questionAr: 'كيف يترجم الطالب دعوة النص إلى سلوك؟',
        questionEn: 'How can a student put the text’s call into practice?',
        optionsAr: ['يبدأ بتغيير عملي في نفسه', 'ينتظر أن يبدأ الآخرون', 'يكتفي بوصف المشكلة'],
        optionsEn: ['Begin with a practical change in their own behavior', 'Wait for others to begin', 'Only describe the problem'],
        correctIndex: 0
      },
      {
        titleAr: 'آداب صناعة الكتاب',
        titleEn: 'The Ethics of Making a Book',
        genreAr: 'نص نثري',
        genreEn: 'Prose',
        focusAr: 'التعرّف إلى مراحل إنتاج الكتاب وأخلاقيات الدقة والأمانة واحترام عمل المؤلفين.',
        focusEn: 'Explore stages of producing a book and the ethics of accuracy, honesty, and respect for authors’ work.',
        outcomesAr: ['ترتيب مراحل إعداد الكتاب بحسب النص', 'شرح قيمة الأمانة والدقة في النشر', 'تمييز الاقتباس المسؤول من النقل غير المنسوب'],
        outcomeEn: ['Sequence the stages of preparing a book', 'Explain honesty and accuracy in publishing', 'Distinguish responsible quotation from unattributed copying'],
        warmupAr: 'كم عملًا يمر به الكتاب قبل أن يصل إلى القارئ؟',
        warmupEn: 'How many kinds of work happen before a book reaches its reader?',
        vocabularyAr: ['المراجعة', 'الأمانة العلمية'],
        vocabularyEn: ['Proofreading', 'Academic integrity'],
        activityAr: 'ارسم مخططًا من الفكرة إلى النسخة المنشورة، وأضف قيمة أخلاقية إلى كل مرحلة.',
        activityEn: 'Draw a process from idea to publication and add an ethical value to each stage.',
        questionAr: 'ما الممارسة التي تعبّر عن الأمانة عند استخدام فكرة من كتاب؟',
        questionEn: 'What is an honest way to use an idea from a book?',
        optionsAr: ['نسب الفكرة إلى مصدرها', 'حذف اسم صاحبها', 'عرضها على أنها فكرة شخصية'],
        optionsEn: ['Credit the source of the idea', 'Remove the author’s name', 'Present it as your own idea'],
        correctIndex: 0
      }
    ],
    languageAr: 'دراسة إعمال اسم المفعول في الجملة، وربط شروط عمله بالمعنى والسياق.',
    languageEn: 'Study how the passive participle functions in a sentence and connect its conditions to meaning and context.',
    rhetoricAr: 'تحليل الصورة البيانية وأثرها في توضيح الفكرة وتقريبها للقارئ.',
    rhetoricEn: 'Analyze imagery and how it clarifies an idea for the reader.',
    literatureAr: 'استخدام ما يتصل بنشأة الكتابة والتأليف في الثقافة العربية لفهم نصوص الوحدة.',
    literatureEn: 'Use relevant context about writing and authorship in Arabic culture to interpret the unit readings.'
  }
] as const;

export function getEgyptArabicG10Curriculum(
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  if (
    !(['ARABIC_LIT', 'ARABIC_LANG'] as Subject[]).includes(subject) ||
    !(['PUBLIC', 'PRIVATE', 'INTERNATIONAL'] as EducationType[]).includes(educationType)
  ) {
    return [];
  }

  return units.flatMap((unit, unitIndex) =>
    unit.texts.map((text, textIndex): Lecture => {
      const order = unitIndex * 3 + textIndex + 1;
      const unitNumber = ['الأولى', 'الثانية', 'الثالثة'][unitIndex];
      const lessonNumber = ['الأول', 'الثاني', 'الثالث'][textIndex];
      const id = `eg-arabic-g10-t1-${order}`;
      const lessonFocus = `يركز الدرس على ${text.focusAr}`;

      return {
        id,
        order,
        titleAr: text.titleAr,
        titleEn: text.titleEn,
        subtitleAr: `${text.genreAr} — اللغة العربية، الصف الأول الثانوي`,
        subtitleEn: `${text.genreEn} — Arabic, Grade 10`,
        descriptionAr: lessonFocus,
        descriptionEn: text.focusEn,
        topicAr: unit.titleAr,
        topicEn: unit.titleEn,
        durationMinutes: 30,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel: 'G10',
        educationType,
        educationTrack: track,
        gradeLevelNameAr: 'الصف الأول الثانوي',
        gradeLevelNameEn: 'Grade 10',
        termAr: 'الفصل الدراسي الأول 2026–2027',
        termEn: 'First Semester 2026–2027',
        unitTitleAr: `الوحدة ${unitNumber}: ${unit.titleAr}`,
        unitTitleEn: `Unit ${unitIndex + 1}: ${unit.titleEn}`,
        lessonNumberAr: `الدرس ${lessonNumber}: ${text.titleAr}`,
        lessonNumberEn: `Lesson ${textIndex + 1}: ${text.titleEn}`,
        warmupHookAr: text.warmupAr,
        warmupHookEn: text.warmupEn,
        learningOutcomesAr: [...text.outcomesAr],
        learningOutcomesEn: [...text.outcomeEn],
        vocabulary: text.vocabularyAr.map((termAr, index) => ({
          termAr,
          termEn: text.vocabularyEn[index],
          definitionAr: `مفردة مرتبطة بموضوع «${text.titleAr}»؛ يحدد معناها الدقيق من سياق النص.`,
          definitionEn: `A key term in “${text.titleEn}”; infer its precise meaning from the text.`
        })),
        keyConceptsAr: [unit.titleAr, text.genreAr, ...text.outcomesAr],
        keyConceptsEn: [unit.titleEn, text.genreEn, ...text.outcomeEn],
        summaryAr: `${text.focusAr} ويرتبط الدرس بموضوع الوحدة: ${unit.titleAr}.`,
        summaryEn: `${text.focusEn} This lesson is part of the unit “${unit.titleEn}.”`,
        mainContentAr: `${text.focusAr}\n\nنشاط تطبيقي: ${text.activityAr}\n\nمن مهارات الوحدة: ${unit.languageAr}\n\nالسياق الأدبي والبلاغي: ${unit.literatureAr} ${unit.rhetoricAr}`,
        mainContentEn: `${text.focusEn}\n\nPractice: ${text.activityEn}\n\nUnit language focus: ${unit.languageEn}\n\nLiterary context: ${unit.literatureEn} ${unit.rhetoricEn}`,
        sections: [
          {
            titleAr: 'الفهم والتحليل',
            titleEn: 'Comprehension and Analysis',
            contentAr: `${text.focusAr}\n\n${text.outcomesAr.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n')}`,
            contentEn: `${text.focusEn}\n\n${text.outcomeEn.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n')}`,
            tipsAr: ['استند إلى قرائن النص عند تفسير معنى أو قيمة.', 'اربط الفكرة بسياقها ولا تقتطع عبارة من معناها.'],
            tipsEn: ['Use clues from the text to support an interpretation.', 'Keep ideas in context rather than isolating a phrase.']
          },
          {
            titleAr: 'نشاط تطبيقي ومهارات الوحدة',
            titleEn: 'Practice and Unit Skills',
            contentAr: `${text.activityAr}\n\n${unit.languageAr}\n\n${unit.rhetoricAr}`,
            contentEn: `${text.activityEn}\n\n${unit.languageEn}\n\n${unit.rhetoricEn}`
          }
        ],
        formativeAssessment: [
          {
            id: `${id}-check`,
            questionAr: text.questionAr,
            questionEn: text.questionEn,
            optionsAr: [...text.optionsAr],
            optionsEn: [...text.optionsEn],
            correctIndex: text.correctIndex,
            explanationAr: 'الإجابة الصحيحة تستند إلى فكرة الدرس ومهارات القراءة والتحليل.',
            explanationEn: 'The correct answer follows the lesson’s focus and reading skills.'
          }
        ],
        assessment: {
          id: `${id}-assessment`,
          lectureId: id,
          titleAr: `تقويم: ${text.titleAr}`,
          titleEn: `Check: ${text.titleEn}`,
          passingScore: 80,
          questions: [{
            id: `${id}-q1`,
            textAr: text.questionAr,
            textEn: text.questionEn,
            optionsAr: [...text.optionsAr],
            optionsEn: [...text.optionsEn],
            correctIndex: text.correctIndex,
            conceptTestedAr: 'فهم النص ومهارات الوحدة',
            conceptTestedEn: 'Text comprehension and unit skills',
            explanationAr: 'تُبنى الإجابة على معنى النص والقرائن المرتبطة به.',
            explanationEn: 'Base the answer on the text’s meaning and relevant evidence.',
            difficulty: 'easy'
          }]
        }
      };
    })
  );
}
