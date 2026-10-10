import type { EducationTrack, Lecture } from '../types';

const sourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-CBM-GNRL-TRC2-SM1-phys2.pdf';
const sourceNoteAr =
  'عناوين الفصول والدروس وأرقام صفحاتها مأخوذة من غلاف وفهرس كتاب الفيزياء 2 السعودي، طبعة 1448هـ/2026م، ص 6–7. تمت مراجعة الغلاف والفهرس فقط؛ الشرح والرسم والتقويم من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page numbers follow the cover and contents (pp. 6–7) of the Saudi Physics 2 textbook, 1448 AH/2026 edition. Only the cover and contents were checked; explanations, diagrams, and assessments are original platform material, not copied textbook pages.';

const chapters = [
  {
    titleAr: 'الجاذبية',
    titleEn: 'Gravitation',
    pageRange: '8–35',
    topics: [
      ['1-1 حركة الكواكب والجاذبية', 'Planetary Motion and Gravitation', '9'],
      ['1-2 استخدام قانون الجذب الكوني', 'Using the Universal Law of Gravitation', '18']
    ],
    conceptsAr: [
      'تفسر الجاذبية حركة الكواكب والأقمار، وترتبط كتلتها والمسافة بينها بقوة التجاذب.',
      'يستخدم قانون الجذب الكوني لوصف القوة بين الأجسام وحركة المدارات.'
    ],
    conceptsEn: [
      'Gravity explains the motion of planets and moons; gravitational force depends on their masses and separation.',
      'The universal law of gravitation describes attraction between objects and orbital motion.'
    ],
    visualTitleAr: 'الكتلة والمسافة وقوة الجاذبية',
    visualTitleEn: 'Mass, Distance, and Gravitational Force',
    diagramType: 'forces_motion_vector',
    stepsAr: ['كتلتان متجاذبتان', 'تحديد المسافة بين مركزيهما', 'تطبيق قانون الجذب الكوني', 'تفسير الحركة المدارية'],
    stepsEn: ['Two attracting masses', 'Measure center-to-center distance', 'Apply universal gravitation', 'Interpret orbital motion'],
    questionAr: 'كيف تتغير قوة الجاذبية بين جسمين عند زيادة المسافة بين مركزيهما؟',
    questionEn: 'How does the gravitational force between two objects change as the distance between their centers increases?',
    optionsAr: ['تقل وفق علاقة عكسية مع مربع المسافة', 'تزداد طرديًا مع مربع المسافة', 'تبقى ثابتة مهما تغيرت المسافة', 'تصبح مساوية لكتلة الجسمين'],
    optionsEn: ['It decreases with the square of the distance', 'It increases with the square of the distance', 'It stays constant at every distance', 'It becomes equal to the objects’ masses'],
    correctIndex: 0,
    explanationAr: 'في قانون الجذب الكوني تتناسب القوة عكسيًا مع مربع المسافة بين مركزي الجسمين.',
    explanationEn: 'In the universal law of gravitation, force is inversely proportional to the square of the distance between centers.'
  },
  {
    titleAr: 'الحركة الدورانية',
    titleEn: 'Rotational Motion',
    pageRange: '36–65',
    topics: [
      ['2-1 وصف الحركة الدورانية', 'Describing Rotational Motion', '37'],
      ['2-2 ديناميكا الحركة الدورانية', 'Rotational Dynamics', '42'],
      ['2-3 الاتزان', 'Equilibrium', '47']
    ],
    conceptsAr: [
      'توصف الحركة الدورانية بالإزاحة والسرعة والتسارع الزاوي.',
      'يؤثر العزم في الحركة الدورانية، ويتحقق الاتزان عندما تتزن محصلة القوى والعزوم.'
    ],
    conceptsEn: [
      'Rotational motion is described by angular displacement, velocity, and acceleration.',
      'Torque changes rotational motion, and equilibrium requires balanced net forces and torques.'
    ],
    visualTitleAr: 'من العزم إلى الاتزان الدوراني',
    visualTitleEn: 'From Torque to Rotational Equilibrium',
    diagramType: 'digital_skills',
    stepsAr: ['محور دوران', 'قوة وذراع عزم', 'تغير في الحركة الدورانية', 'فحص محصلة العزوم'],
    stepsEn: ['Axis of rotation', 'Force and lever arm', 'Change in rotational motion', 'Check net torque'],
    questionAr: 'ما الشرط اللازم للاتزان الدوراني حول محور؟',
    questionEn: 'What condition is required for rotational equilibrium about an axis?',
    optionsAr: ['أن تساوي محصلة العزوم صفرًا', 'أن تؤثر قوة واحدة دائمًا', 'أن تكون السرعة الزاوية متزايدة', 'أن يمر كل عزم بمحور الدوران'],
    optionsEn: ['The net torque must be zero', 'There must always be only one force', 'Angular speed must keep increasing', 'Every torque must pass through the rotation axis'],
    correctIndex: 0,
    explanationAr: 'يبقى الجسم في اتزان دوراني عندما تتعادل العزوم فيكون مجموعها الجبري صفرًا.',
    explanationEn: 'An object is in rotational equilibrium when torques balance and their algebraic sum is zero.'
  },
  {
    titleAr: 'الزخم وحفظه',
    titleEn: 'Momentum and Its Conservation',
    pageRange: '66–95',
    topics: [
      ['3-1 الدفع والزخم', 'Impulse and Momentum', '67'],
      ['3-2 حفظ الزخم', 'Conservation of Momentum', '74']
    ],
    conceptsAr: [
      'يرتبط زخم الجسم بكتلته وسرعته المتجهة، ويغير الدفع زخم الجسم.',
      'يبقى الزخم الكلي محفوظًا في نظام معزول عند التفاعلات والتصادمات.'
    ],
    conceptsEn: [
      'An object’s momentum depends on its mass and velocity, and impulse changes momentum.',
      'Total momentum is conserved in an isolated system during interactions and collisions.'
    ],
    visualTitleAr: 'الدفع وتغير الزخم في التصادم',
    visualTitleEn: 'Impulse and Momentum Change in a Collision',
    diagramType: 'forces_motion_vector',
    stepsAr: ['زخم قبل التفاعل', 'قوة خلال زمن', 'دفع وتغير في الزخم', 'مقارنة الزخم الكلي'],
    stepsEn: ['Momentum before interaction', 'Force over a time interval', 'Impulse and momentum change', 'Compare total momentum'],
    questionAr: 'ما الذي يساويه الدفع المؤثر في جسم؟',
    questionEn: 'What is the impulse on an object equal to?',
    optionsAr: ['التغير في زخمه', 'كتلته مقسومة على الزمن دائمًا', 'طاقته الحرارية', 'مجموع كتل الأجسام المحيطة'],
    optionsEn: ['Its change in momentum', 'Its mass always divided by time', 'Its thermal energy', 'The sum of nearby objects’ masses'],
    correctIndex: 0,
    explanationAr: 'الدفع يساوي التغير في الزخم، ويرتبط بالقوة المحصلة والزمن الذي تؤثر فيه.',
    explanationEn: 'Impulse equals the change in momentum and relates to net force acting over time.'
  },
  {
    titleAr: 'الشغل والطاقة والآلات البسيطة',
    titleEn: 'Work, Energy, and Simple Machines',
    pageRange: '96–129',
    topics: [
      ['4-1 الطاقة والشغل', 'Energy and Work', '97'],
      ['4-2 الآلات', 'Machines', '109']
    ],
    conceptsAr: [
      'ينقل الشغل الطاقة عندما تؤثر قوة في جسم وتحركه في اتجاه القوة أو أحد مركباتها.',
      'تغير الآلات مقدار القوة أو اتجاهها، مع مراعاة الشغل والكفاءة.'
    ],
    conceptsEn: [
      'Work transfers energy when a force moves an object along the force or one of its components.',
      'Machines change the magnitude or direction of a force while work and efficiency remain important.'
    ],
    visualTitleAr: 'القوة والإزاحة والشغل',
    visualTitleEn: 'Force, Displacement, and Work',
    diagramType: 'energy_transformation_chain',
    stepsAr: ['قوة مؤثرة', 'إزاحة الجسم', 'حساب الشغل', 'انتقال الطاقة أو تغيرها'],
    stepsEn: ['Applied force', 'Object displacement', 'Calculate work', 'Energy transfer or change'],
    questionAr: 'متى تبذل قوة شغلًا على جسم؟',
    questionEn: 'When does a force do work on an object?',
    optionsAr: ['عندما تسبب إزاحة لها مركبة في اتجاه القوة', 'كلما أثرت القوة ولو لم يتحرك الجسم', 'عندما تكون القوة عمودية دائمًا على الإزاحة', 'عندما تتساوى كتلة الجسم وسرعته'],
    optionsEn: ['When it causes displacement with a component along the force', 'Whenever a force acts, even with no motion', 'Only when the force is always perpendicular to displacement', 'When the object’s mass equals its speed'],
    correctIndex: 0,
    explanationAr: 'يتطلب الشغل وجود إزاحة ومركبة للقوة في اتجاه الإزاحة.',
    explanationEn: 'Work requires displacement and a component of force along that displacement.'
  },
  {
    titleAr: 'الطاقة وحفظها',
    titleEn: 'Energy and Its Conservation',
    pageRange: '130–163',
    topics: [
      ['5-1 الأشكال المتعددة للطاقة', 'Multiple Forms of Energy', '131'],
      ['5-2 حفظ الطاقة', 'Conservation of Energy', '141']
    ],
    conceptsAr: [
      'تتحول الطاقة بين أشكال مختلفة، ومنها طاقة الحركة وطاقة الوضع.',
      'يبقى مجموع الطاقة في نظام معزول ثابتًا مع إمكان انتقال الطاقة أو تحولها.'
    ],
    conceptsEn: [
      'Energy changes among forms, including kinetic and potential energy.',
      'Total energy in an isolated system remains constant even as energy transfers or transforms.'
    ],
    visualTitleAr: 'تحولات الطاقة وحفظ مجموعها',
    visualTitleEn: 'Energy Transformations and Conservation',
    diagramType: 'energy_transformation_chain',
    stepsAr: ['طاقة وضع', 'حركة أو شغل', 'تحول إلى شكل آخر', 'ثبات مجموع الطاقة'],
    stepsEn: ['Potential energy', 'Motion or work', 'Transform to another form', 'Total energy remains constant'],
    questionAr: 'ماذا يحدث للطاقة الكلية في نظام معزول؟',
    questionEn: 'What happens to the total energy of an isolated system?',
    optionsAr: ['تبقى محفوظة رغم تحولها بين الأشكال', 'تزداد دائمًا مع الزمن', 'تختفي عند توقف الحركة', 'تتحول كلها إلى طاقة وضع'],
    optionsEn: ['It is conserved even when it changes form', 'It always increases with time', 'It disappears when motion stops', 'It all becomes potential energy'],
    correctIndex: 0,
    explanationAr: 'حفظ الطاقة يعني بقاء مجموعها ثابتًا في النظام المعزول مع حدوث التحولات.',
    explanationEn: 'Conservation of energy means its total remains constant in an isolated system as transformations occur.'
  },
  {
    titleAr: 'الطاقة الحرارية',
    titleEn: 'Thermal Energy',
    pageRange: '164–200',
    topics: [
      ['6-1 درجة الحرارة والطاقة الحرارية', 'Temperature and Thermal Energy', '165'],
      ['6-2 تغيرات حالة المادة وقوانين الديناميكا الحرارية', 'Changes of State and the Laws of Thermodynamics', '178']
    ],
    conceptsAr: [
      'ترتبط درجة الحرارة بمتوسط طاقة حركة الجسيمات، بينما تعتمد الطاقة الحرارية على طاقة الجسيمات في المادة.',
      'تتضمن تغيرات الحالة انتقال الطاقة، وتصف قوانين الديناميكا الحرارية العلاقات بين الحرارة والشغل والطاقة.'
    ],
    conceptsEn: [
      'Temperature relates to average particle kinetic energy, while thermal energy depends on the particles’ energy in the substance.',
      'Changes of state involve energy transfer, and thermodynamic laws relate heat, work, and energy.'
    ],
    visualTitleAr: 'انتقال الحرارة وتغير الحالة',
    visualTitleEn: 'Heat Transfer and Changes of State',
    diagramType: 'energy_transformation_chain',
    stepsAr: ['فرق في درجة الحرارة', 'انتقال الحرارة', 'تغير طاقة الجسيمات', 'تغير في حالة المادة'],
    stepsEn: ['Temperature difference', 'Heat transfer', 'Change in particle energy', 'Change in state'],
    questionAr: 'في أي اتجاه تنتقل الحرارة تلقائيًا بين جسمين مختلفي درجة الحرارة؟',
    questionEn: 'In which direction does heat transfer spontaneously between two objects at different temperatures?',
    optionsAr: ['من الأعلى حرارة إلى الأقل حرارة', 'من الأقل حرارة إلى الأعلى حرارة', 'من الجسم الأكبر كتلة فقط', 'لا تنتقل إلا عند تغير الحالة'],
    optionsEn: ['From the warmer object to the cooler object', 'From the cooler object to the warmer object', 'Only from the object with greater mass', 'Only when a change of state occurs'],
    correctIndex: 0,
    explanationAr: 'تنتقل الحرارة تلقائيًا من الجسم الأعلى حرارة إلى الجسم الأقل حرارة حتى يتحقق الاتزان الحراري.',
    explanationEn: 'Heat spontaneously transfers from the warmer object to the cooler one until thermal equilibrium is reached.'
  }
] as const;

export function getSaudiPhysics2G11Curriculum(track: EducationTrack): Lecture[] {
  return chapters.map((chapter, index) => {
    const order = index + 1;
    const lectureId = `sa-physics2-1448-g11-${track.toLowerCase()}-${order}`;
    const topicListAr = chapter.topics.map(([title, , page]) => `${title} (ص ${page})`).join('؛ ');
    const topicListEn = chapter.topics.map(([, title, page]) => `${title} (p. ${page})`).join('; ');

    return {
      id: lectureId,
      order,
      titleAr: chapter.titleAr,
      titleEn: chapter.titleEn,
      subtitleAr: `الفصل ${order} — الفيزياء 2`,
      subtitleEn: `Chapter ${order} — Physics 2`,
      descriptionAr: `${sourceNoteAr} موضوعات الفهرس: ${topicListAr}. صفحات الفصل والتقويم: ${chapter.pageRange}. المصدر: ${sourceUrl}`,
      descriptionEn: `${sourceNoteEn} Contents topics: ${topicListEn}. Chapter and review pages: ${chapter.pageRange}. Source: ${sourceUrl}`,
      topicAr: topicListAr,
      topicEn: topicListEn,
      durationMinutes: 45,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'PHYSICS',
      gradeLevel: 'G11',
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'Second Secondary, Pathways System, 1448 AH/2026 edition',
      termAr: 'الفصل الدراسي الأول — الفيزياء 2، طبعة 1448هـ',
      termEn: 'Semester 1 — Physics 2, 1448 AH edition',
      unitTitleAr: `الفصل ${order}: ${chapter.titleAr}`,
      unitTitleEn: `Chapter ${order}: ${chapter.titleEn}`,
      lessonNumberAr: `الفصل ${order}`,
      lessonNumberEn: `Chapter ${order}`,
      keyConceptsAr: [...chapter.conceptsAr],
      keyConceptsEn: [...chapter.conceptsEn],
      summaryAr: chapter.conceptsAr.join(' '),
      summaryEn: chapter.conceptsEn.join(' '),
      sections: [{
        titleAr: 'موضوعات الفصل كما وردت في فهرس الكتاب',
        titleEn: 'Chapter topics listed in the textbook contents',
        contentAr: `${topicListAr}. تمت مطابقة هذه العناوين وأرقام صفحاتها مع فهرس الكتاب. ${sourceNoteAr}`,
        contentEn: `${topicListEn}. These titles and page numbers were checked against the book contents. ${sourceNoteEn}`,
        diagram: {
          id: `${lectureId}-figure`,
          figureNumberAr: `شكل (${order}-1)`,
          figureNumberEn: `Figure (${order}-1)`,
          titleAr: chapter.visualTitleAr,
          titleEn: chapter.visualTitleEn,
          captionAr: 'رسم توضيحي أصلي من إعداد المنصة لربط المفاهيم الرئيسة في الفصل، وليس صورة من الكتاب.',
          captionEn: 'An original platform illustration connecting the chapter’s main concepts, not an image from the textbook.',
          diagramType: chapter.diagramType,
          visualSteps: chapter.stepsAr.map((labelAr, stepIndex) => ({
            labelAr,
            labelEn: chapter.stepsEn[stepIndex]
          }))
        }
      }],
      assessment: {
        id: `${lectureId}-assessment`,
        titleAr: `تقويم الفصل ${order}`,
        titleEn: `Chapter ${order} Review`,
        passingScore: 80,
        questions: [{
          id: `${lectureId}-question-1`,
          textAr: chapter.questionAr,
          textEn: chapter.questionEn,
          optionsAr: [...chapter.optionsAr],
          optionsEn: [...chapter.optionsEn],
          correctIndex: chapter.correctIndex,
          conceptTestedAr: chapter.titleAr,
          conceptTestedEn: chapter.titleEn,
          explanationAr: chapter.explanationAr,
          explanationEn: chapter.explanationEn,
          difficulty: 'medium'
        }]
      }
    };
  });
}
