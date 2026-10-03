import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL ARABIC LITERATURE & RHETORIC - GRADE 10 (اللغة العربية والأدب والبلاغة - الصف الأول الثانوي)
// Official Grade 10 National Arabic Curriculum Alignment:
// Unit 1: الأدب في العصر الجاهلي وصدر الإسلام (Pre-Islamic & Early Islamic Literature)
// Unit 2: علم البيان: الحقيقة والمجاز والتشبيه والاستعارة (Imagery: Truth, Metaphor & Simile)
// Unit 3: الأفعال الناقصة والتامة: كان وأخواتها وكاد وأخواتها (Copular & Inchoative Verbs)
// Unit 4: إعمال المشتقات العاملة: اسم الفاعل، صيغ المبالغة، واسم المفعول (Active/Passive Participles)
// Unit 5: أسلوب الاستثناء والمقصور والمنقوص والممدود (Exception & Defective Nouns)
// ============================================================================

export const HIGH_ARABIC_LIT_G10_LECTURES: Lecture[] = [
  // ── LECTURE 1: الأدب في العصر الجاهلي وصدر الإسلام ──
  {
    id: 'h-lit10-1',
    order: 1,
    titleAr: 'المحاضرة 1: الأدب في العصر الجاهلي وعصر صدر الإسلام والمعلقات السبع',
    titleEn: 'Lecture 1: Pre-Islamic & Early Islamic Literature: The Seven Mu\'allaqat & Odes',
    subtitleAr: 'بيئة العرب قبل الإسلام، بناء القصيدة الجاهلية، أصحاب المعلقات، وأثر الإسلام في لغة العرب',
    subtitleEn: 'Master Pre-Islamic desert sociology, poem architecture, Mu\'allaqat masters, and Islamic transformation.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الأدب والبلاغة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: تاريخ الأدب العربي وتطوره',
    unitTitleEn: 'Unit 1: History & Evolution of Arabic Literature',
    lessonNumberAr: 'الدرس 1: الأدب الجاهلي والمعلقات وصدر الإسلام',
    lessonNumberEn: 'Lesson 1: Pre-Islamic Poetry & Early Islamic Era',

    warmupHookAr: 'حين أنشد امرؤ القيس مطلع معلقته الخالدة: "قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ / بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ"، صاغ قالباً شعرياً ظل دستوراً للشعراء العرب لأكثر من ألف عام! لماذا سُميت المعلقات بهذا الاسم؟ وكيف أحدث نزول القرآن الكريم ثورة فكرية ولغوية بدلت موازين البيان العربي من الفخر بالقبيلة والعصبية إلى التوحيد ومكارم الأخلاق؟',
    warmupHookEn: 'When Imru\' al-Qais opened his iconic ode, he established the architectural canon of Arabic poetry that endured for millennia. Discover the origin of the Mu\'allaqat and how the Quran revolutionized Arabic eloquence.',

    learningOutcomesAr: [
      'أن يوضح الطالب خصائص البيئة الجاهلية الاجتماعية والجغرافية وأثرها في صقل الفصاحة والفروسية',
      'أن يحلل البناء الفني للقصيدة الجاهلية (البدء بالغزل والأطلال، الوصف، الغرض الرئيسي، ثم الحكمة)',
      'أن يعرف المعلقات السبع وأشهر شعرائها (امرؤ القيس، زهير بن أبي سلمى، طرفة بن العبد، عنترة بن شداد)',
      'أن يوضح فنون النثر الجاهلي: الخطابة، الوصايا، الأمثال، والحكم وسماتها الأسلوبية',
      'أن يستنتج أثر القرآن الكريم والحديث النبوي الشريف في تهذيب الألفاظ ورقي المعاني في صدر الإسلام'
    ],
    learningOutcomesEn: [
      'Analyze socio-geographic conditions in Pre-Islamic Arabia shaping desert eloquence and chivalry',
      'Dissect the classical tripartite structure of the Qasida: ruins, transit voyage, main theme, and maxims',
      'Identify the seven Mu\'allaqat poets and their distinctive thematic masterworks',
      'Evaluate Pre-Islamic prose forms: oratory, testaments, proverbs, and wisdom aphorisms',
      'Trace Quranic and prophetic linguistic impact on refining Arabic vocabulary and humanitarian values'
    ],

    vocabulary: [
      {
        termAr: 'المعلقات (The Mu\'allaqat)',
        termEn: 'The Hanging Odes (Mu\'allaqat)',
        definitionAr: 'قصائد طوال من عيون الشعر الجاهلي وأجوده، اختيرت لجزالتها وعُلقت على أستار الكعبة أو في الأذهان.',
        definitionEn: 'Seven to ten masterwork Pre-Islamic odes revered for sublime meter, lyricism, and desert imagery.'
      },
      {
        termAr: 'الوقوف على الأطلال (Weeping over Ruins)',
        termEn: 'Naseeb / Weeping at the Campsite',
        definitionAr: 'مقدمة تقليدية في القصيدة الجاهلية يقف فيها الشاعر مسترجعاً ذكريات ديار الأحبة الراحلين.',
        definitionEn: 'A conventional poetic prologue reminiscing over abandoned desert encampments and departed loved ones.'
      }
    ],

    sections: [
      {
        titleAr: '1. بناء القصيدة الجاهلية وأثر صدر الإسلام',
        titleEn: '1. Structure of the Pre-Islamic Ode & Islamic Influence',
        contentAr: `**1. منهج القصيدة الجاهلية**:
لم تكن القصيدة الجاهلية تعرف وحدة الموضوع، بل قامت على تعدد الأغراض وفق تسلسل ثابت:
1. البدء بالغزل والبكاء على الأطلال وذكرى الديار.
2. الوصف: وصف الناقة أو الفرس، ورحلة الصحراء ووحوشها.
3. الغرض الأساسي للقصيدة: كـ المدح، أو الهجاء، أو الفخر والحماسة، أو الرثاء.
4. الختام بالحكمة الصادقة المستخلصة من تجارب الحياة.

**2. الأدب في صدر الإسلام**:
- وحّد القرآن الكريم لهجات العرب على لغة قريش الفصحى.
- هذّب الألفاظ وأبعد الشعر عن الفحش والهجاء المقذع والعصبية القبلية المنتنة.
- ازدهرت فنون النثر كـ الخطابة والرسائل لدعوة الأمم ونشر تعاليم الدين والجهاد.`,
        contentEn: `Traditional Qasida structure followed a strict sequence:
1. Ruin lamentation (Naseeb/Atlal).
2. Desert voyage and mount description.
3. Core thematic objective (panegyric, pride, elegy, satire).
4. Philosophical maxims (Hikma).
Islamic impact unified dialects under Qurayshite Arabic, eradicated tribal sectarianism, and elevated prose correspondence.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit10-1',
      titleAr: 'اختبار الأدب الجاهلي وصدر الإسلام',
      titleEn: 'Pre-Islamic & Early Islamic Literature Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما الترتيب المنهجي التقليدي الذي سارت عليه القصيدة في العصر الجاهلي؟',
          textEn: 'What was the traditional conventional sequence observed in Pre-Islamic odes?',
          optionsAr: ['الفخر ثم الحكمة ثم الغزل', 'البدء بالغزل والأطلال ثم الوصف ثم الغرض الرئيسي ثم الحكمة', 'الهجاء المباشر ثم الوصف', 'الحكمة أولاً ثم الرثاء'],
          optionsEn: ['Pride then wisdom then romance', 'Atlal ruins & romance, then description, main theme, and closing wisdom', 'Direct satire then description', 'Wisdom first then elegy'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'التزمت القصيدة الجاهلية بالبدء بالغزل والوقوف على الأطلال، ثم وصف الرحلة، ثم الغرض كالفخر والمدح، وتختم بالحكمة.',
          explanationEn: 'The classical ode systematically opened with ruined campsites and love, transit descriptions, core topic, and closing aphorisms.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: علم البيان (التشبيه والاستعارة) ──
  {
    id: 'h-lit10-2',
    order: 2,
    titleAr: 'المحاضرة 2: علم البيان - الحقيقة والمجاز وأركان التشبيه والاستعارة المكنية والتصريحية',
    titleEn: 'Lecture 2: Rhetoric & Imagery: Literal vs Figurative, Similes & Metaphors',
    subtitleAr: 'التفريق بين التعبير الحقيقي والمجازي، أنواع التشبيه، والتحول إلى الاستعارة المكنية والتصريحية وسر جمالهما',
    subtitleEn: 'Master literal vs figurative expressions, simile taxonomy, and explicit vs implicit metaphors.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الأدب والبلاغة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - Arabic Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: علم البيان والتصوير البلاغي',
    unitTitleEn: 'Unit 2: Rhetorical Imagery & Figurative Language',
    lessonNumberAr: 'الدرس 2: التشبيه والاستعارة وأسرار الجمال',
    lessonNumberEn: 'Lesson 2: Similes, Metaphors & Aesthetic Secrets',

    warmupHookAr: 'حين تقول: "الجندي شجاع في المعركة" فهذا تعبير حقيقي يصف الواقع. ولكن حين تهتف: "زأرَ الجنديُّ في وجه الأعداء"، أنت نقلت صفة الزئير من الأسد المفترس إلى الجندي، فتحولت الجملة إلى لوحة فنية تهز الوجدان! ما الذي حدث هنا؟ حذفت الأسد وأبقيت صفته لتصنع ما يسميه علماء البلاغة "استعارة مكنية"! كيف تفكك شفرات الاستعارة والتشبيه وتحدد سر جمالهما (التشخيص أو التجسيم أو التوضيح)؟',
    warmupHookEn: 'Transforming "The soldier was brave" into "The soldier roared at enemies" shifts literal prose into figurative metaphor. Learn to analyze similes and metaphors and unlock their aesthetic power (personification, embodiment, clarification).',

    learningOutcomesAr: [
      'أن يفرق الطالب بين التعبير الحقيقي (استعمال اللفظ في معناه الأصلي) والمجازي (استعماله في غير معناه لعلاقة المشابهة)',
      'أن يحدد أركان التشبيه الأربعة: المشبه، المشبه به، أداة التشبيه، ووجه الشبه',
      'أن يميز بين أنواع التشبيه المفرد: المفصل، المجمل، المؤكد، والتشبيه البليغ (أعلى درجات التشبيه)',
      'أن يعرف الاستعارة بأنها تشبيه بليغ حُذف أحد طرفيه (المشبه أو المشبه به)',
      'أن يفرق بين الاستعارة التصريحية (صُرح فيها بالمشبه به) والمكنية (حُذف المشبه به ورُمز له بشيء من لوازمه) ويحدد سر جمالهما'
    ],
    learningOutcomesEn: [
      'Differentiate literal language from figurative metaphorical usage',
      'Identify the 4 components of simile: tenor, vehicle, particle, and tertium comparationis',
      'Classify single similes: detailed, concise, emphatic, and supreme eloquent simile (Baleegh)',
      'Define metaphor as an elliptical simile where either tenor or vehicle is suppressed',
      'Distinguish explicit metaphors (Tasreehiyya) from implicit/implicative metaphors (Makniyya) and identify aesthetic resonance'
    ],

    vocabulary: [
      {
        termAr: 'التشبيه البليغ (Eloquent Simile)',
        termEn: 'Eloquent Simile (Tashbeeh Baleegh)',
        definitionAr: 'تشبيه حذفت منه أداة التشبيه ووجه الشبه معاً، وبقي الطرفان الأساسيان فقط: المشبه والمشبه به (مثل: العلمُ نورٌ).',
        definitionEn: 'A high-impact simile omitting both comparative particle and ground, leaving only tenor and vehicle.'
      },
      {
        termAr: 'الاستعارة المكنية (Implicit Metaphor)',
        termEn: 'Implicative Metaphor (Isti\'arah Makniyyah)',
        definitionAr: 'استعارة حُذف فيها المشبه به وذُكر المشبه، مع الإبقاء على صفة أو لازمة من لوازم المشبه به تدل عليه.',
        definitionEn: 'A metaphor where the vehicle is suppressed and represented only by one of its characteristic attributes.'
      }
    ],

    sections: [
      {
        titleAr: '1. أركان التشبيه وقواعد الاستعارة وأسرار الجمال',
        titleEn: '1. Simile Pillars, Metaphor Rules & Aesthetic Secrets',
        contentAr: `**1. أنواع التشبيه**:
- **مفصل**: ذكرت فيه الأركان الأربعة ("الجندي كالأسد في الشجاعة").
- **مجمل**: حُذف منه وجه الشبه ("الجندي كالأسد").
- **مؤكد**: حُذفت منه الأداة ("الجندي أسدٌ في الشجاعة").
- **بليغ**: حُذفت الأداة ووجه الشبه وبقي المشبه والمشبه به ("الجهلُ ظلامٌ").

**2. نوعا الاستعارة**:
- **استعارة تصريحية**: صُرِّح فيها بلفظ المشبه به وحُذف المشبه: "واعتصموا بحبلِ الله" (شبه الدين بالحبل وحذف المشبه وصرح بالمشبه به).
- **استعارة مكنية**: حُذف فيها المشبه به ورُمز له بصفة تدل عليه: "ابتسمتِ الأيامُ لنا" (شبه الأيام بإنسان يبتسم، وحذف الإنسان وأبقى الابتسامة).

**3. أسرار جمال التشبيه والاستعارة**:
- **التشخيص**: منح الجماد أو المعنوي صفات إنسان عاقل.
- **التجسيم**: تحويل الأمر المعنوي غير المحسوس إلى جسم مادي ملموس ("الصبر مفتاح الفرج").
- **التوضيح**: تشبيه معنوي بمعنوي أو مادي بمادي.`,
        contentEn: `Simile breakdown: Detailed, Concise, Emphatic, and Baleegh.
Metaphors:
- Explicit (Tasreehiyya): Vehicle expressed overtly; tenor omitted.
- Implicit (Makniyya): Vehicle suppressed; indicated by an active attribute.
Aesthetic mechanisms: Personification (attributing human soul), Embodiment (reifying abstract concepts), Clarification.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit10-2',
      titleAr: 'اختبار التشبيه والاستعارة',
      titleEn: 'Simile & Metaphor Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'في قول الشاعر: "أقبلَ يمشي في البساطِ فما درى ... إلى البحرِ يسعى أمْ إلى البدرِ يرتقي"، ما نوع الاستعارة في (البحر) و(البدر) لوصف الممدوح؟',
          textEn: 'In describing the generous leader as "the sea" and "the moon", what type of metaphor is employed?',
          optionsAr: ['استعارة مكنية', 'استعارة تصريحية', 'تشبيه تمثيلي', 'تشبيه مجمل'],
          optionsEn: ['Implicit metaphor (Makniyya)', 'Explicit metaphor (Tasreehiyya)', 'Composite simile', 'Concise simile'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'استعارة تصريحية؛ لأنه حذف المشبه (الممدوح الكريم والوسيم) وصرح بلفظ المشبه به (البحر والبدر).',
          explanationEn: 'Explicit metaphor (Tasreehiyya), because the tenor (leader) was deleted and replaced explicitly by vehicles (sea, moon).',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: الأفعال الناقصة والتامة (كان وأخواتها وكاد وأخواتها) ──
  {
    id: 'h-lit10-3',
    order: 3,
    titleAr: 'المحاضرة 3: الأفعال الناقصة والتامة (كان وأخواتها وأفعال المقاربة والرجاء والشروع)',
    titleEn: 'Lecture 3: Copular Verbs: Incomplete vs Complete Kaana and Kaada Group',
    subtitleAr: 'الفرق الدقيق بين كان الناقصة الناسخة والتامة المكتفية بفاعلها، وأحكام كاد وأخواتها واقتران خبرها بأن',
    subtitleEn: 'Master complete vs incomplete copular verbs, and the inchoative Kaada verbs with An conjunction rules.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الأدب والبلاغة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: النحو العربي وقواعد الأفعال الناسخة',
    unitTitleEn: 'Unit 3: Arabic Syntax & Copular Verbs',
    lessonNumberAr: 'الدرس 3: كان التامة والناقصة وكاد وأخواتها',
    lessonNumberEn: 'Lesson 3: Complete Kaana & Inchoative Verbs',

    warmupHookAr: 'تأمل قول الله تعالى: "وَإِنْ كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَى مَيْسَرَةٍ". أين خبر (كان) في هذه الآية الكريمة؟ لا يوجد خبر على الإطلاق! لأن (كان) هنا ليست ناقصة تحتاج خبراً ينصب، بل هي فعل "تام" معناه (وُجِدَ ذو عسرة) وكلمة (ذو) فاعل مرفوع بالواو! كيف تكتشف كان التامة في ثانية واحدة؟ وما شروط عمل أفعال المقاربة والرجاء والشروع (كاد وأخواتها)؟',
    warmupHookEn: 'When Kaana functions as a complete verb meaning "existed/occurred", it requires only a subject agent (Fa\'il) and rejects a predicate. Discover how to identify complete copulars and parse verbs of imminence and hope.',

    learningOutcomesAr: [
      'أن يميز الطالب بين كان الناقصة (تحتاج اسماً وخبراً) وكان التامة (تكتفي بمرفوعها ويعرب فاعلاً)',
      'أن يحدد معاني أفعال كان التامة الشائعة (كان بمعنى وُجد أو حدث، صار بمعنى رجع أو تحول، أصبح وأمسى بمعنى دخل في الصباح والمساء)',
      'أن يصنف أفعال (كاد وأخواتها) إلى: المقاربة (كاد، كَرَب، أوشك)، والرجاء (عسى، حَرَى، اخْلَوْلَق)، والشروع (شرع، بدأ، أخذ، أنشأ، طفق)',
      'أن يطبق شرط عمل كاد وأخواتها: أن يكون خبرها جملة فعلية فعلها مضارع',
      'أن يحدد أحكام اقتران خبر كاد وأخواتها بـ (أنْ): يقل، يكثر، يجب، ويمتنع'
    ],
    learningOutcomesEn: [
      'Contrast incomplete copula (requiring nominal subject and predicate) with complete copula (taking an agent)',
      'Define semantic alterations of complete Kaana verbs (meaning occurred, entered morning/evening, etc.)',
      'Categorize Kaada groups: Imminence (Kaada, Awshaka), Hope (\'Asaa, Haraa), and Inception (Shara\'a, Bada\'a, Akhadha)',
      'Enforce mandatory criterion for Kaada: its predicate must be a present-tense verbal clause',
      'Master governing rules for appending particle "An" to predicate: rare, abundant, obligatory, and prohibited'
    ],

    vocabulary: [
      {
        termAr: 'كان التامة (Complete Kaana)',
        termEn: 'Complete Copula (Kaana Taammah)',
        definitionAr: 'فعل يكتفي بفاعله المرفوع ليتم به المعنى ولا يحتاج إلى خبر منصوب.',
        definitionEn: 'An intransitive verb taking a normal nominative agent (Fa\'il) without requiring a complementary predicate.'
      },
      {
        termAr: 'أفعال الشروع (Inceptive Verbs)',
        termEn: 'Inchoative / Inceptive Verbs',
        definitionAr: 'أفعال تدل على البدء في الفعل (مثل: شرع، بدأ، أخذ، طفق)، ويمتنع اقتران خبرها بأنْ نهائياً.',
        definitionEn: 'Verbs signifying commencement of an action whose verbal predicates categorically prohibit particle An.'
      }
    ],

    sections: [
      {
        titleAr: '1. كان التامة وأحكام كاد وأخواتها',
        titleEn: '1. Complete Kaana & Governing Rules of Kaada',
        contentAr: `**1. كان التامة وأخواتها**:
تأتي أفعال (كان، أصبح، أضحى، أمسى، بات، ظل، صار، ما دام، ما برح، ما انفك) تامة إذا دلت على الحدوث أو الوجود أو الوقت واكتفت بفاعلها:
- "سأجتهد ما دامتِ **الحياةُ**" -> الحياةُ: فاعل مرفوع.
- "ألا إلى الله تصيرُ **الأمورُ**" -> الأمورُ: فاعل مرفوع.

**2. كاد وأخواتها (كاد، كرب، أوشك، عسى، حرى، اخلولق، شرع، بدأ...)**:
تعمل عمل كان بشرط وحيد: **أن يكون خبرها جملة فعلية فعلها مضارع**.

**حكم اقتران خبرها بـ (أنْ)**:
1. **يقل**: مع (كادَ، كَرَبَ).
2. **يكثر**: مع (عَسَى، أَوْشَكَ).
3. **يجب**: مع (حَرَى، اخْلَوْلَقَ).
4. **يمتنع نهائياً**: مع جميع **أفعال الشروع** (شرع، بدأ، أنشأ، أخذ، طفق).`,
        contentEn: `Complete copulas take agent subjects when signifying occurrence or time passage.
Kaada verbs require verbal clauses in present tense.
Particle An attachment rules:
1. Rare with Kaada and Karaba.
2. Abundant with \'Asaa and Awshaka.
3. Mandatory with Haraa and Ikhlawlaqa.
4. Strictly Prohibited with all inceptive verbs (Shara\'a, Bada\'a, Akhadha).`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit10-3',
      titleAr: 'اختبار كان وكاد وأحكامهما',
      titleEn: 'Copular & Inceptive Verbs Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما حكم اقتران خبر الفعل (شرعَ) بأنْ في جملة "شرعَ المهندسُ يصممُ المشروعَ"؟',
          textEn: 'What is the ruling for appending particle "An" to the predicate of the inceptive verb (Shara\'a)?',
          optionsAr: ['يجب الاقتران', 'يكثر الاقتران', 'يمتنع الاقتران نهائياً', 'يقل الاقتران'],
          optionsEn: ['Mandatory', 'Abundant', 'Strictly Prohibited', 'Rare'],
          correctIndex: 2,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'يمتنع اقتران خبر أفعال الشروع بـ (أن) نهائياً؛ لأن الشروع يدل على الحاضر بينما (أن) تفيد الاستقبال.',
          explanationEn: 'Prohibited, because inceptive verbs denote immediate ongoing action whereas particle An denotes future tense.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: إعمال المشتقات (اسم الفاعل وصيغ المبالغة واسم المفعول) ──
  {
    id: 'h-lit10-4',
    order: 4,
    titleAr: 'المحاضرة 4: إعمال المشتقات العاملة عمل فعلها (اسم الفاعل، صيغ المبالغة، واسم المفعول)',
    titleEn: 'Lecture 4: Functional Participles: Active Participles, Intensive Forms & Passive Participles',
    subtitleAr: 'شروط عمل المشتقات المقترنة بأل والمجردة، وإعراب المعمول فاعلاً أو مفعولاً به أو نائب فاعل',
    subtitleEn: 'Master conditions of participle action (definite vs indefinite) and parsing their agents, objects, and deputy agents.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الأدب والبلاغة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الصرف والنحو وإعمال المشتقات',
    unitTitleEn: 'Unit 4: Morphology, Syntax & Participle Operation',
    lessonNumberAr: 'الدرس 4: إعمال المشتقات وصياغتها ومعمولها',
    lessonNumberEn: 'Lesson 4: Participles Functioning as Active/Passive Verbs',

    warmupHookAr: 'حين تقرأ: "ما غافرٌ الذنوبَ إلا اللهُ"، كلمة (غافر) اسم فاعل وليست فعلاً، ومع ذلك رفعت (الله) فاعلاً ونصبت (الذنوبَ) مفعولاً به تماماً كما يفعل الفعل "يغفر"! هذا ما يسميه علماء النحو "إعمال المشتقات". كيف يعمل الاسم عمل الفعل المضارع؟ ومتى يعمل بلا شروط ومتى يحتاج لاعتماده على نفي أو استفهام أو نداء؟',
    warmupHookEn: 'Arabic nouns derived as active or passive participles can execute grammatical operations identical to active or passive verbs. Learn the rigorous syntactical conditions governing their power to govern agents and direct objects.',

    learningOutcomesAr: [
      'أن يسترجع الطالب صياغة اسم الفاعل وصيغ المبالغة الخمس واسم المفعول من الثلاثي وغير الثلاثي',
      'أن يوضح الطالب معنى "إعمال المشتق": أن يرفع فاعلاً وينصب مفعولاً به (أو يرفع نائب فاعل في اسم المفعول)',
      'أن يطبق قاعدة العمل بلا شروط: إذا كان المشتق مقترناً بـ (أل) يعمل في جميع الأزمنة بلا قيد',
      'أن يطبق شرطي عمل المشتق المجرد من أل: أن يدل على الحال أو الاستقبال، وأن يعتمد على (نفي، استفهام، مبتدأ، موصوف، أو نداء)',
      'أن يعرب معمول اسم المفعول دائماً: نائب فاعل مرفوع'
    ],
    learningOutcomesEn: [
      'Review morphological derivation of active participles, 5 intensive forms, and passive participles',
      'Explain functional syntax: governing agents and direct objects, or governing deputy agents (Na\'ib Fa\'il)',
      'Apply unconditional operation rule: participles prefixed with definite article "Al" operate unconditionally',
      'Apply double conditions for indefinite participles: present/future aspect and syntactic reliance on negation, interrogation, etc.',
      'Parse the complement of passive participles strictly as nominative deputy agent (Na\'ib Fa\'il)'
    ],

    vocabulary: [
      {
        termAr: 'المعمول (The Governed Complement)',
        termEn: 'Al-Ma\'mool (Governed Complement)',
        definitionAr: 'الاسم المرفوع أو المنصوب الذي تأثر بالمشتق العامل (فاعلاً أو مفعولاً به أو نائب فاعل).',
        definitionEn: 'The noun governed syntactically by the active participle as an agent, direct object, or deputy agent.'
      },
      {
        termAr: 'صيغ المبالغة القياسية (Intensive Forms)',
        termEn: 'Intensive Paradigm Forms',
        definitionAr: 'خمس صيغ قياسية تدل على كثرة حدوث الفعل: (مِفْعال، فَعُول، فَعِيل، فَعِل، فَعَّال) وتعمل عمل فعلها.',
        definitionEn: 'Five classical morphological templates denoting extreme frequency and intensity of action.'
      }
    ],

    sections: [
      {
        titleAr: '1. شروط عمل المشتقات وإعراب المعمول',
        titleEn: '1. Participle Operational Conditions & Complement Parsing',
        contentAr: `تعمل المشتقات الثلاثة عمل فعلها المضارع:
1. **اسم الفاعل وصيغ المبالغة**: يعملان عمل الفعل المبني للمعلوم (يرفعان فاعلاً وينصبان مفعولاً به).
2. **اسم المفعول**: يعمل عمل الفعل المبني للمجهول (يرفع دائماً **نائب فاعل**).

**شروط العمل**:
- **الحالة الأولى**: إذا كان المشتق **محلّى بـ (أل)** يعمل **بلا شروط وبلا زمن محدد** ("المُكْرِمُ ضَيْفَهُ مشكورٌ" -> ضيفه: مفعول به لاسم الفاعل).
- **الحالة الثانية**: إذا كان المشتق **مجرداً من أل (نكرة منونة)**، يعمل بشرطين معاً:
  1. أن يدل على **الحال أو الاستقبال** (لا يحتوي على كلمة "أمسِ").
  2. أن يعتمد على:
     - **مبتدأ** ("أخوك **قارئٌ** درسَهُ").
     - **نفي** ("ما **مهملٌ** الطالبُ واجبَهُ").
     - **استفهام** ("أَ**فاهمٌ** الطالبُ الشرحَ؟").
     - **موصوف** ("مررت برجلٍ **حاملٍ** رسالةً").
     - **نداء** ("يا **طالعاً** جبلاً").`,
        contentEn: `Operational rules:
- Active participles & intensives function as active verbs governing agents and direct objects.
- Passive participles function as passive verbs governing nominative deputy agents (Na\'ib Fa\'il).
Conditions:
1. Definite (Al-): Unconditional across all timeframes.
2. Indefinite: Must denote present/future and depend upon subject, negation, interrogation, described noun, or vocative.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit10-4',
      titleAr: 'اختبار إعمال المشتقات ومعمولها',
      titleEn: 'Participles Operation Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'في جملة "أمكرمٌ أخوكَ ضيفَهُ؟"، ما إعراب كلمة (أخوكَ)؟',
          textEn: 'In the sentence "Is your brother honoring his guest?", what is the syntactic parsing of (Akhooka)?',
          optionsAr: ['مبتدأ مؤخر', 'فاعل لاسم الفاعل (مكرم) سد مسد الخبر', 'مفعول به أول منصوب', 'نائب فاعل مرفوع'],
          optionsEn: ['Deferred subject', 'Agent (Fa\'il) of active participle substituting predicate', 'Direct object', 'Deputy agent'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'أخوك فاعل مرفوع بالواو لاسم الفاعل العامل (مكرم)، وقد سد هذا الفاعل مسد الخبر في الجملة.',
          explanationEn: 'Akhooka is the nominative agent (Fa\'il) with Waw governed by active participle Mukrim, filling the slot of predicate.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: أسلوب الاستثناء والاسم المقصور والمنقوص والممدود ──
  {
    id: 'h-lit10-5',
    order: 5,
    titleAr: 'المحاضرة 5: أسلوب الاستثناء والاسم المقصور والمنقوص والممدود وتثنيتها وجمعها',
    titleEn: 'Lecture 5: The Style of Exception (Istithnaa) & Morphology of Defective Nouns',
    subtitleAr: 'حالات المستثنى بإلا (تام مثبت، تام منفي، ناقص منفي) والاستثناء بغير وسوى وخلا، وقواعد المقصور والمنقوص',
    subtitleEn: 'Master exception particles (Illa, Ghayr, Siwa, Khala) and defective nouns morphology and dualization.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الأدب والبلاغة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: أساليب النحو والصرف وتثنية الأسماء',
    unitTitleEn: 'Unit 5: Exception Styles & Dualization Morphology',
    lessonNumberAr: 'الدرس 5: أسلوب الاستثناء والمقصور والمنقوص والممدود',
    lessonNumberEn: 'Lesson 5: Exception Styles & Defective Morphology',

    warmupHookAr: 'حين تقول: "حضرَ الطلابُ إلا طالباً"، كلمة (طالباً) مستثنى منصوب وجوباً. ولكن ماذا لو قلت: "ما حضرَ إلا طالبٌ"؟ تحولت الجملة تماماً، وصارت كلمة (طالب) فاعلاً مرفوعاً وكأن (إلا) غير موجودة إطلاقاً! ما السر في تحول إعراب ما بعد إلا؟ وما الفرق بين الاسم المقصور كـ (عصا ورضا) والمنقوص كـ (القاضي) والممدود كـ (سماء وصحراء)؟',
    warmupHookEn: 'Depending on whether an exception clause is positive complete, negative complete, or truncated, the parsing of the excepted noun shifts from mandatory accusative to positional parsing. Discover the morphology of defective nouns.',

    learningOutcomesAr: [
      'أن يحدد الطالب أركان أسلوب الاستثناء: (المستثنى منه + أداة الاستثناء + المستثنى)',
      'أن يميز بين أنواع أسلوب الاستثناء الثلاثة بإلا: تام مثبت (واجب النصب)، تام منفي (جائز النصب أو بدل)، وناقص منفي (يعرب حسب موقعه)',
      'أن يعرب المستثنى بـ (غير وسوى) مضافاً إليه مجروراً، ويعرب غير وسوى إعراب ما بعد إلا',
      'أن يطبق الاستثناء بـ (خلا، عدا، حاشا) باعتبارها حروف جر أو أفعالاً ماضية تنصب مفعولاً به',
      'أن يثني ويجمع الاسم المقصور (المنتهي بألف لازمة) والمنقوص (المنتهي بياء لازمة) والممدود (المنتهي بألف وهمزة)'
    ],
    learningOutcomesEn: [
      'Identify elements of exception: general group (Mustathna minhu), particle, and excepted entity (Mustathna)',
      'Parse the 3 types of Illa exception: complete affirmative (mandatory accusative), complete negative (accusative or apposition), and truncated negative (by position)',
      'Parse nouns following Ghayr and Siwa as genitive annexation, assigning Ghayr/Siwa the case of Illa complement',
      'Apply Khala, \'Ada, Hasha as prepositions or past verbs governing direct objects',
      'Morphologically dualize and pluralize Maqsoor (Alif ending), Manqoos (Yaa ending), and Mamdood (Hamza ending) nouns'
    ],

    vocabulary: [
      {
        termAr: 'الاستثناء الناقص المنفي (Truncated Exception)',
        termEn: 'Truncated Exception (Naqis Manfi)',
        definitionAr: 'أسلوب حُذف منه المستثنى منه وسُبق بنفي أو شبهه، ويُعرب الاسم الواقع بعد إلا حسب موقعه في الجملة بحذف النفي وإلا.',
        definitionEn: 'An exception structure omitting the general collective set preceded by negation, parsed strictly by grammatical position.'
      },
      {
        termAr: 'الاسم المنقوص (Defective Yaa Noun)',
        termEn: 'Al-Ism Al-Manqoos',
        definitionAr: 'كل اسم معرب آخره ياء لازمة غير مشددة مكسور ما قبلها (مثل: القاضي، الداعي)، وتُحذف ياؤه رفعاً وجراً عند التنكير (قاضٍ).',
        definitionEn: 'An inflected noun ending with an unaccented Yaa preceded by kasra, dropping its Yaa in indefinite nominative/genitive states.'
      }
    ],

    sections: [
      {
        titleAr: '1. حالات الاستثناء وقواعد الأسماء المقصور والمنقوص والممدود',
        titleEn: '1. Exception Types & Defective Nouns Morphology',
        contentAr: `**1. حالات إعراب المستثنى بـ (إلا)**:
- **تام مثبت**: لم يسبق بنفي والمستثنى منه مذكور -> **واجب النصب**: "فهمَ الطلابُ إلا طالباً".
- **تام منفي**: سُبق بنفي والمستثنى منه مذكور -> **جائز النصب على الاستثناء أو بدل من المستثنى منه**: "ما نجحَ الطلابُ إلا طالباً / طالبٌ".
- **ناقص منفي (مفرّغ)**: المستثنى منه محذوف وسُبق بنفي -> **يُعرب حسب موقعه في الجملة** (احذف ما وإلا): "ما محمدٌ إلا رسولٌ" -> رسول: خبر مرفوع.

**2. تثنية المقصور والمنقوص والممدود**:
- **المقصور (رضا، عصا، كبرى)**: إذا كانت الألف ثالثة رُدّت لأصلها (عصوان، رضوان)، وإن كانت رابعة فأكثر قُلبت ياءً (كبريان).
- **المنقوص (قاضٍ، القاضي)**: تبقى الياء عند التثنية وتُرد إن كانت محذوفة (قاضيان)، وتُحذف عند جمع المذكر السالم (قاضُونَ / قاضِينَ).
- **الممدود (إنشاء، سماء، صحراء)**:
  - أصلية (إنشاء) -> تبقى (إنشاءان).
  - منقلبة عن أصل (سماء) -> يجوز بقاؤها أو قلبها واواً (سماءان / سماوان).
  - زائدة للتأنيث (صحراء) -> تُقلب واواً وجوباً (صحراوان).`,
        contentEn: `Three types of Illa exception:
1. Complete Affirmative: Mandatory accusative.
2. Complete Negative: Optional accusative or appositive badal.
3. Truncated Negative: Parsed by positional syntax omitting negation and Illa.
Dualization of defectives:
- Maqsoor: 3rd Alif reverts to Waw/Yaa; 4th+ converts to Yaa.
- Manqoos: Yaa preserved in dual; dropped in sound masculine plural.
- Mamdood: Original Hamza preserved; feminine Hamza converts to Waw; root-converted Hamza either preserved or converted to Waw.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit10-5',
      titleAr: 'اختبار الاستثناء والمقصور والمنقوص',
      titleEn: 'Exception & Defective Nouns Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما إعراب كلمة (أحدٌ) وكلمة (مهملٌ) في جملة: "ما عاقبتُ أحداً إلا مهملاً / مهملٌ"؟',
          textEn: 'What is the parsing of the excepted noun in a complete negative exception sentence?',
          optionsAr: ['واجب النصب فقط', 'جائز النصب على الاستثناء أو بدل منصوب من أحداً', 'يعرب فاعلاً حسب موقعه', 'مضاف إليه مجرور'],
          optionsEn: ['Mandatory accusative only', 'Permissible accusative of exception or apposition بدل', 'Positional agent', 'Genitive annex'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'الأسلوب تام منفي، فيجوز في المستثنى النصب على الاستثناء (مهملاً) أو إتباعه بدلاً من المستثنى منه المنصوب (أحداً).',
          explanationEn: 'The sentence is complete negative, allowing either accusative exception or appositive Badal.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
