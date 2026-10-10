import type { EducationTrack, Lecture } from '../types';

const sourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-CBM-TRC1-SM1-chmi1-part1.pdf';
const sourceNoteAr =
  'عناوين الفصول والدروس وأرقام الصفحات مأخوذة من فهرس كتاب الكيمياء 1 السعودي، طبعة 1448هـ/2026م، ص 8. تمت مراجعة الغلاف والفهرس فقط؛ الشرح والرسم والتقويم من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page numbers follow the contents page (p. 8) of the Saudi Chemistry 1 textbook, 1448 AH/2026 edition. Only the cover and contents were checked; explanations, diagrams, and assessments are original platform material, not copied textbook pages.';

const chapters = [
  {
    titleAr: 'مقدمة في علم الكيمياء',
    titleEn: 'Introduction to Chemistry',
    pageRange: '12–38',
    topics: [
      ['1-1 قصة مادتين', 'The Story of Two Substances', '14'],
      ['1-2 الكيمياء والمادة', 'Chemistry and Matter', '19'],
      ['1-3 الطرائق العلمية', 'Scientific Methods', '22'],
      ['1-4 البحث العلمي', 'Scientific Research', '27']
    ],
    conceptsAr: [
      'تدرس الكيمياء المادة وخواصها والتغيرات التي تطرأ عليها.',
      'تساعد الطرائق العلمية والقياس والبحث المنظم على بناء تفسيرات قابلة للاختبار.'
    ],
    conceptsEn: [
      'Chemistry studies matter, its properties, and the changes it undergoes.',
      'Scientific methods, measurement, and organized research support testable explanations.'
    ],
    visualTitleAr: 'من السؤال إلى تفسير علمي',
    visualTitleEn: 'From Question to Scientific Explanation',
    stepsAr: ['سؤال قابل للاختبار', 'ملاحظة وقياس', 'تحليل الأدلة', 'تفسير مدعوم'],
    stepsEn: ['Testable question', 'Observe and measure', 'Analyze evidence', 'Evidence-based explanation'],
    questionAr: 'ما الغرض الأساسي من تغيير عامل واحد في تجربة مضبوطة؟',
    questionEn: 'Why is one factor changed at a time in a controlled experiment?',
    optionsAr: ['لتحديد أثره مع ضبط العوامل الأخرى', 'لإلغاء الحاجة إلى تسجيل النتائج', 'لضمان صحة الفرضية مسبقًا', 'لجعل جميع المتغيرات تتغير معًا'],
    optionsEn: ['To identify its effect while controlling other factors', 'To avoid recording results', 'To guarantee the hypothesis in advance', 'To make all variables change together'],
    correctIndex: 0,
    explanationAr: 'ضبط بقية العوامل يساعد على عزو الاختلاف في النتائج إلى العامل الذي غُيّر.',
    explanationEn: 'Controlling other factors helps attribute a change in results to the factor that was varied.'
  },
  {
    titleAr: 'المادة - الخواص والتغيرات',
    titleEn: 'Matter: Properties and Changes',
    pageRange: '42–69',
    topics: [
      ['2-1 خواص المادة', 'Properties of Matter', '44'],
      ['2-2 تغيرات المادة', 'Changes in Matter', '50'],
      ['2-3 المخاليط', 'Mixtures', '54'],
      ['2-4 العناصر والمركبات', 'Elements and Compounds', '58']
    ],
    conceptsAr: [
      'يمكن وصف المادة بخواص فيزيائية وكيميائية، وتمييز التغير الفيزيائي من التغير الكيميائي.',
      'تختلف العناصر والمركبات والخلائط في تركيبها وإمكان فصل مكوناتها.'
    ],
    conceptsEn: [
      'Matter can be described by physical and chemical properties; physical changes differ from chemical changes.',
      'Elements, compounds, and mixtures differ in composition and how their components can be separated.'
    ],
    visualTitleAr: 'تصنيف المادة والتغيرات',
    visualTitleEn: 'Classifying Matter and Changes',
    stepsAr: ['مادة نقية أو مخلوط', 'خواص مميزة', 'تغير فيزيائي أو كيميائي', 'وصف وتصنيف'],
    stepsEn: ['Pure substance or mixture', 'Distinguishing properties', 'Physical or chemical change', 'Description and classification'],
    questionAr: 'أي مثال يمثل تغيرًا فيزيائيًا؟',
    questionEn: 'Which example is a physical change?',
    optionsAr: ['انصهار الجليد', 'صدأ الحديد', 'احتراق الورق', 'تكوّن مادة جديدة في تفاعل'],
    optionsEn: ['Melting ice', 'Rusting iron', 'Burning paper', 'Forming a new substance in a reaction'],
    correctIndex: 0,
    explanationAr: 'عند انصهار الجليد تتغير الحالة فقط، ويبقى تركيب الماء الكيميائي كما هو.',
    explanationEn: 'When ice melts, only its state changes; the chemical composition of water remains the same.'
  },
  {
    titleAr: 'تركيب الذرة',
    titleEn: 'Atomic Structure',
    pageRange: '74–103',
    topics: [
      ['3-1 الأفكار القديمة للمادة', 'Early Ideas about Matter', '76'],
      ['3-2 تعريف الذرة', 'Defining the Atom', '80'],
      ['3-3 كيف تختلف الذرات؟', 'How Atoms Differ', '89'],
      ['3-4 الأنوية غير المستقرة والتحلل الإشعاعي', 'Unstable Nuclei and Radioactive Decay', '96']
    ],
    conceptsAr: [
      'تتكون الذرة من نواة تضم البروتونات والنيوترونات، وتوجد الإلكترونات حولها.',
      'يحدد عدد البروتونات هوية العنصر، ويؤدي عدم استقرار بعض الأنوية إلى التحلل الإشعاعي.'
    ],
    conceptsEn: [
      'An atom has a nucleus containing protons and neutrons, with electrons around it.',
      'The number of protons identifies an element, and some unstable nuclei undergo radioactive decay.'
    ],
    visualTitleAr: 'مكونات الذرة وهوية العنصر',
    visualTitleEn: 'Atomic Particles and Element Identity',
    stepsAr: ['بروتونات ونيوترونات', 'نواة الذرة', 'إلكترونات حول النواة', 'عدد البروتونات يحدد العنصر'],
    stepsEn: ['Protons and neutrons', 'Atomic nucleus', 'Electrons around the nucleus', 'Proton number identifies the element'],
    questionAr: 'ما الذي يحدد هوية العنصر؟',
    questionEn: 'What determines the identity of an element?',
    optionsAr: ['عدد البروتونات في النواة', 'عدد مستويات الطاقة وحده', 'عدد النيوترونات دائمًا', 'حالة العنصر الفيزيائية'],
    optionsEn: ['The number of protons in the nucleus', 'The number of energy levels alone', 'Always the number of neutrons', 'The physical state of the element'],
    correctIndex: 0,
    explanationAr: 'العدد الذري، وهو عدد البروتونات، يميز عنصرًا عن غيره.',
    explanationEn: 'The atomic number, which is the number of protons, distinguishes one element from another.'
  },
  {
    titleAr: 'التفاعلات الكيميائية',
    titleEn: 'Chemical Reactions',
    pageRange: '110–146',
    topics: [
      ['4-1 التفاعلات والمعادلات', 'Reactions and Equations', '112'],
      ['4-2 تصنيف التفاعلات الكيميائية', 'Classifying Chemical Reactions', '123'],
      ['4-3 التفاعلات في المحاليل المائية', 'Reactions in Aqueous Solutions', '133']
    ],
    conceptsAr: [
      'تعيد التفاعلات الكيميائية ترتيب الذرات، وتمثل المعادلات الموزونة حفظ عدد ذرات كل عنصر.',
      'يمكن تصنيف التفاعلات ودراسة ما يحدث عند وقوعها في المحاليل المائية.'
    ],
    conceptsEn: [
      'Chemical reactions rearrange atoms, and balanced equations conserve the number of atoms of each element.',
      'Reactions can be classified and studied when they occur in aqueous solutions.'
    ],
    visualTitleAr: 'تمثيل التفاعل الكيميائي',
    visualTitleEn: 'Representing a Chemical Reaction',
    stepsAr: ['مواد متفاعلة', 'إعادة ترتيب الذرات', 'معادلة موزونة', 'مواد ناتجة'],
    stepsEn: ['Reactants', 'Atoms rearrange', 'Balanced equation', 'Products'],
    questionAr: 'لماذا يجب موازنة المعادلة الكيميائية؟',
    questionEn: 'Why must a chemical equation be balanced?',
    optionsAr: ['لتحقيق حفظ عدد ذرات كل عنصر', 'لتغيير هوية العناصر', 'لجعل النواتج مساوية للمتفاعلات في الحالة فقط', 'لإزالة معاملات المواد'],
    optionsEn: ['To conserve the number of atoms of each element', 'To change element identities', 'To make products match reactants only in state', 'To remove coefficients'],
    correctIndex: 0,
    explanationAr: 'المعادلة الموزونة تمثل حفظ الذرات أثناء إعادة ترتيبها في التفاعل.',
    explanationEn: 'A balanced equation represents conservation of atoms as they are rearranged in a reaction.'
  },
  {
    titleAr: 'المول',
    titleEn: 'The Mole',
    pageRange: '152–180',
    topics: [
      ['5-1 قياس المادة', 'Measuring Matter', '154'],
      ['5-2 الكتلة والمول', 'Mass and the Mole', '160'],
      ['5-3 مولات المركبات', 'Moles of Compounds', '168']
    ],
    conceptsAr: [
      'المول وحدة لعد جسيمات المادة، ويربط عدد الجسيمات بكمية المادة.',
      'تستخدم الكتلة المولية للتحويل بين كتلة العينة وعدد مولاتها، ويمكن تطبيق ذلك على المركبات.'
    ],
    conceptsEn: [
      'The mole is a unit for counting particles and relates particle number to amount of substance.',
      'Molar mass converts between a sample mass and its amount in moles, including for compounds.'
    ],
    visualTitleAr: 'الربط بين الكتلة والمول والجسيمات',
    visualTitleEn: 'Connecting Mass, Moles, and Particles',
    stepsAr: ['كتلة العينة', 'الكتلة المولية', 'كمية المادة بالمول', 'عدد الجسيمات'],
    stepsEn: ['Sample mass', 'Molar mass', 'Amount in moles', 'Number of particles'],
    questionAr: 'ما الذي تمثله كمية مقدارها مول واحد من المادة؟',
    questionEn: 'What does an amount of one mole represent?',
    optionsAr: ['عدد أفوجادرو من الجسيمات', 'غرامًا واحدًا من كل مادة', 'جزيئًا واحدًا فقط', 'كتلة ثابتة متساوية لكل العناصر'],
    optionsEn: ['Avogadro’s number of particles', 'One gram of every substance', 'Exactly one molecule', 'The same fixed mass for every element'],
    correctIndex: 0,
    explanationAr: 'يمثل المول عددًا محددًا من الجسيمات، وهو عدد أفوجادرو.',
    explanationEn: 'A mole represents a fixed number of particles: Avogadro’s number.'
  }
] as const;

export function getSaudiChemistryG10Curriculum(track: EducationTrack): Lecture[] {
  return chapters.map((chapter, index) => {
    const order = index + 1;
    const lectureId = `sa-chemistry1-1448-g10-${track.toLowerCase()}-${order}`;
    const topicListAr = chapter.topics.map(([title, , page]) => `${title} (ص ${page})`).join('؛ ');
    const topicListEn = chapter.topics.map(([, title, page]) => `${title} (p. ${page})`).join('; ');

    return {
      id: lectureId,
      order,
      titleAr: chapter.titleAr,
      titleEn: chapter.titleEn,
      subtitleAr: `الفصل ${order} — الكيمياء 1`,
      subtitleEn: `Chapter ${order} — Chemistry 1`,
      descriptionAr: `${sourceNoteAr} موضوعات الفهرس: ${topicListAr}. صفحات الفصل والتقويم: ${chapter.pageRange}. المصدر: ${sourceUrl}`,
      descriptionEn: `${sourceNoteEn} Contents topics: ${topicListEn}. Chapter and review pages: ${chapter.pageRange}. Source: ${sourceUrl}`,
      topicAr: topicListAr,
      topicEn: topicListEn,
      durationMinutes: 45,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'CHEMISTRY',
      gradeLevel: 'G10',
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الأول الثانوي — السنة الأولى المشتركة، نظام المسارات، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'First Secondary — Common First Year, Pathways System, 1448 AH/2026 edition',
      termAr: 'الفصل الدراسي الأول — كتاب الكيمياء 1، طبعة 1448هـ',
      termEn: 'Semester 1 — Chemistry 1, 1448 AH edition',
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
          captionAr: 'رسم توضيحي أصلي من إعداد المنصة لربط المفاهيم الرئيسة في الفصل.',
          captionEn: 'Original platform illustration connecting the chapter’s main concepts.',
          diagramType: order === 2
            ? 'chemistry_mixtures_solutions'
            : order === 3
            ? 'atomic_structure'
            : order === 4
            ? 'chemical_kinetics'
            : 'digital_skills',
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

const chemistry2SourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-CBM-GNRL-TRC2-SM1-CHMI2.1.pdf';
const chemistry2SourceNoteAr =
  'عناوين الفصول والدروس وأرقام صفحاتها مأخوذة من غلاف وفهرس كتاب الكيمياء 2-1 السعودي، طبعة 1448هـ/2026م، ص 6. تمت مراجعة الغلاف والفهرس فقط؛ الشرح والرسم والتقويم من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const chemistry2SourceNoteEn =
  'Chapter and lesson titles and page numbers follow the cover and contents (p. 6) of the Saudi Chemistry 2-1 textbook, 1448 AH/2026 edition. Only the cover and contents were checked; explanations, diagrams, and assessments are original platform material, not copied textbook pages.';

const chemistry2Chapters = [
  {
    titleAr: 'الإلكترونات في الذرات',
    titleEn: 'Electrons in Atoms',
    pageRange: '10–47',
    topics: [
      ['1-1 الضوء وطاقة الكم', 'Light and Quantum Energy', '12'],
      ['1-2 نظرية الكم والذرة', 'Quantum Theory and the Atom', '22'],
      ['1-3 التوزيع الإلكتروني', 'Electron Configuration', '32'],
      ['الكيمياء والصحة: ملاقط الليزر', 'Chemistry and Health: Laser Tweezers', '39']
    ],
    conceptsAr: [
      'تصف نظرية الكم طاقة الإلكترونات في الذرات بمستويات وكمّات محددة.',
      'يمثل التوزيع الإلكتروني ترتيب الإلكترونات في مستويات الطاقة والأفلاك.'
    ],
    conceptsEn: [
      'Quantum theory describes atomic electron energies in defined levels and quanta.',
      'Electron configuration represents how electrons are arranged in energy levels and orbitals.'
    ],
    visualTitleAr: 'من مستويات الطاقة إلى التوزيع الإلكتروني',
    visualTitleEn: 'From Energy Levels to Electron Configuration',
    diagramType: 'atomic_structure',
    stepsAr: ['طاقة مكمّاة', 'مستويات الذرة', 'أفلاك الطاقة', 'توزيع الإلكترونات'],
    stepsEn: ['Quantized energy', 'Atomic energy levels', 'Energy orbitals', 'Electron arrangement'],
    questionAr: 'ما الذي يوضحه التوزيع الإلكتروني للذرة؟',
    questionEn: 'What does an atom’s electron configuration show?',
    optionsAr: ['ترتيب إلكتروناتها في مستويات الطاقة والأفلاك', 'عدد النيوترونات في نواتها فقط', 'ترتيب ذراتها في مركب', 'كتلة عينة العنصر'],
    optionsEn: ['How its electrons are arranged in energy levels and orbitals', 'Only the number of neutrons in its nucleus', 'How its atoms are arranged in a compound', 'The mass of an element sample'],
    correctIndex: 0,
    explanationAr: 'يبين التوزيع الإلكتروني مواقع الإلكترونات في مستويات الطاقة والأفلاك حول النواة.',
    explanationEn: 'Electron configuration describes electrons in the atom’s energy levels and orbitals.'
  },
  {
    titleAr: 'الجدول الدوري والتدرج في خواص العناصر',
    titleEn: 'The Periodic Table and Periodic Trends',
    pageRange: '48–81',
    topics: [
      ['2-1 تطور الجدول الدوري الحديث', 'Development of the Modern Periodic Table', '50'],
      ['2-2 تصنيف العناصر', 'Classification of the Elements', '58'],
      ['2-3 تدرج خواص العناصر', 'Periodic Trends in Element Properties', '63'],
      ['الكيمياء والصحة: العناصر في جسم الإنسان', 'Chemistry and Health: Elements in the Human Body', '71']
    ],
    conceptsAr: [
      'ترتب عناصر الجدول الدوري الحديث وفق أعدادها الذرية وتظهر فيه أنماط دورية.',
      'يساعد موقع العنصر في الجدول على مقارنة خواصه وتوقع سلوكه الكيميائي.'
    ],
    conceptsEn: [
      'The modern periodic table orders elements by atomic number and displays recurring patterns.',
      'An element’s position helps compare its properties and predict chemical behavior.'
    ],
    visualTitleAr: 'قراءة موقع العنصر واتجاه خواصه',
    visualTitleEn: 'Reading an Element’s Position and Trends',
    diagramType: 'digital_skills',
    stepsAr: ['العدد الذري', 'الدورة والمجموعة', 'تصنيف العنصر', 'مقارنة الخاصية'],
    stepsEn: ['Atomic number', 'Period and group', 'Element classification', 'Compare a property'],
    questionAr: 'لماذا تتشابه عناصر المجموعة الواحدة غالبًا في خواصها الكيميائية؟',
    questionEn: 'Why do elements in the same group often have similar chemical properties?',
    optionsAr: ['لتشابه إلكترونات مستوى الطاقة الخارجي', 'لتساوي عدد النيوترونات فيها', 'لوقوعها في الدورة نفسها دائمًا', 'لتساوي كتل ذراتها'],
    optionsEn: ['They have similar outer-shell electron arrangements', 'They have the same number of neutrons', 'They are always in the same period', 'Their atoms have equal masses'],
    correctIndex: 0,
    explanationAr: 'يسهم تشابه إلكترونات التكافؤ في تشابه سلوك عناصر المجموعة.',
    explanationEn: 'Similar valence-electron arrangements contribute to similar group behavior.'
  },
  {
    titleAr: 'المركبات الأيونية والفلزات',
    titleEn: 'Ionic Compounds and Metals',
    pageRange: '82–115',
    topics: [
      ['3-1 تكون الأيون', 'Formation of Ions', '84'],
      ['3-2 الروابط الأيونية والمركبات الأيونية', 'Ionic Bonds and Ionic Compounds', '88'],
      ['3-3 صيغ المركبات الأيونية وأسماؤها', 'Formulas and Names of Ionic Compounds', '96'],
      ['3-4 الروابط الفلزية وخواص الفلزات', 'Metallic Bonds and Properties of Metals', '103'],
      ['الكيمياء من واقع الحياة: الموضة القاتلة', 'Chemistry in Real Life: Killer Fashion', '106']
    ],
    conceptsAr: [
      'تتكون الأيونات عندما تفقد الذرات إلكترونات أو تكتسبها، وتجذب الشحنات المتعاكسة بعضها.',
      'تفسر الروابط الأيونية والفلزية بعض خواص المركبات والفلزات.'
    ],
    conceptsEn: [
      'Ions form when atoms lose or gain electrons, and opposite charges attract.',
      'Ionic and metallic bonding help explain properties of compounds and metals.'
    ],
    visualTitleAr: 'انتقال الإلكترونات وتكوّن الروابط',
    visualTitleEn: 'Electron Transfer and Bond Formation',
    diagramType: 'matter_states_compound',
    stepsAr: ['ذرة فلز', 'انتقال إلكترون', 'أيونات متعاكسة الشحنة', 'مركب أو رابطة فلزية'],
    stepsEn: ['Metal atom', 'Electron transfer', 'Oppositely charged ions', 'Compound or metallic bond'],
    questionAr: 'كيف تتكون الرابطة الأيونية؟',
    questionEn: 'How does an ionic bond form?',
    optionsAr: ['تجاذب بين أيونات مختلفة الشحنة', 'مشاركة زوج إلكتروني بين ذرتين فقط', 'تجاذب بين نواتين متعادلتين', 'تساوي أعداد الإلكترونات والبروتونات في أيونين'],
    optionsEn: ['Attraction between oppositely charged ions', 'Sharing one electron pair between only two atoms', 'Attraction between two neutral nuclei', 'Equal electron and proton counts in two ions'],
    correctIndex: 0,
    explanationAr: 'ينشأ التجاذب الأيوني بين أيونات موجبة وسالبة بعد انتقال الإلكترونات.',
    explanationEn: 'Ionic attraction occurs between positive and negative ions after electron transfer.'
  },
  {
    titleAr: 'الروابط التساهمية',
    titleEn: 'Covalent Bonds',
    pageRange: '116–159',
    topics: [
      ['4-1 الرابطة التساهمية', 'The Covalent Bond', '118'],
      ['4-2 تسمية الجزيئات', 'Naming Molecules', '126'],
      ['4-3 التراكيب الجزيئية', 'Molecular Structures', '131'],
      ['4-4 أشكال الجزيئات', 'Molecular Shapes', '140'],
      ['4-5 الكهرسالبية والقطبية', 'Electronegativity and Polarity', '144'],
      ['كيف تعمل الأشياء؟ الأقدام اللاصقة', 'How Things Work: Sticky Feet', '150']
    ],
    conceptsAr: [
      'تتكون الرابطة التساهمية بمشاركة الذرات أزواجًا من الإلكترونات.',
      'تؤثر بنية الجزيء وشكله والكهرسالبية في قطبيته.'
    ],
    conceptsEn: [
      'Covalent bonds form when atoms share pairs of electrons.',
      'Molecular structure, shape, and electronegativity affect polarity.'
    ],
    visualTitleAr: 'من مشاركة الإلكترونات إلى قطبية الجزيء',
    visualTitleEn: 'From Shared Electrons to Molecular Polarity',
    diagramType: 'digital_skills',
    stepsAr: ['مشاركة الإلكترونات', 'بناء تركيب لويس', 'تحديد شكل الجزيء', 'استنتاج القطبية'],
    stepsEn: ['Share electrons', 'Build a Lewis structure', 'Determine molecular shape', 'Infer polarity'],
    questionAr: 'ما العاملان اللذان يساعدان على تحديد قطبية الجزيء؟',
    questionEn: 'Which two factors help determine a molecule’s polarity?',
    optionsAr: ['قطبية الروابط وشكل الجزيء', 'عدد النيوترونات ولون المادة', 'كتلة العينة ودرجة غليانها فقط', 'عدد الذرات دون ترتيبها'],
    optionsEn: ['Bond polarity and molecular shape', 'Neutron count and material color', 'Sample mass and boiling point alone', 'Atom count without their arrangement'],
    correctIndex: 0,
    explanationAr: 'تعتمد قطبية الجزيء على قطبية روابطه وعلى كيفية توزعها في شكله الفراغي.',
    explanationEn: 'Molecular polarity depends on bond polarities and how they are arranged in the molecule’s shape.'
  },
  {
    titleAr: 'الحسابات الكيميائية',
    titleEn: 'Chemical Calculations',
    pageRange: '160–215',
    topics: [
      ['5-1 الصيغة الأولية والصيغة الجزيئية', 'Empirical and Molecular Formulas', '162'],
      ['5-2 صيغ الأملاح المائية', 'Formulas of Hydrates', '172'],
      ['5-3 المقصود بالحسابات الكيميائية', 'Introduction to Chemical Calculations', '176'],
      ['5-4 حسابات المعادلات الكيميائية', 'Chemical Equation Calculations', '181'],
      ['5-5 المادة المحددة للتفاعل', 'Limiting Reactant', '187'],
      ['5-6 نسبة المردود المئوية', 'Percent Yield', '194'],
      ['الكيمياء والصحة: محاربة السلالات المقاومة', 'Chemistry and Health: Fighting Resistant Strains', '199']
    ],
    conceptsAr: [
      'تربط الحسابات الكيميائية كميات المواد بنسب مولية مستمدة من معادلة موزونة.',
      'تحدد المادة المحددة مقدار الناتج الممكن، وتقارن نسبة المردود المئوية الناتج الفعلي بالنظري.'
    ],
    conceptsEn: [
      'Stoichiometric calculations relate amounts of substances through mole ratios in a balanced equation.',
      'The limiting reactant determines possible product, while percent yield compares actual and theoretical yield.'
    ],
    visualTitleAr: 'من المعادلة الموزونة إلى كمية الناتج',
    visualTitleEn: 'From a Balanced Equation to Product Amount',
    diagramType: 'digital_skills',
    stepsAr: ['موازنة المعادلة', 'استخراج النسبة المولية', 'تحديد المتفاعل المحدد', 'حساب الناتج والمردود'],
    stepsEn: ['Balance the equation', 'Find the mole ratio', 'Identify the limiting reactant', 'Calculate yield'],
    questionAr: 'ما المقصود بالمتفاعل المحدد؟',
    questionEn: 'What is the limiting reactant?',
    optionsAr: ['متفاعل يُستهلك أولًا ويحدد كمية الناتج', 'مادة لا تدخل في التفاعل', 'ناتج يتكون بكمية غير محدودة', 'عامل يسرّع التفاعل دون أن يتغير'],
    optionsEn: ['A reactant consumed first that limits the amount of product', 'A substance that does not take part in the reaction', 'A product formed in unlimited amount', 'A factor that speeds a reaction without changing'],
    correctIndex: 0,
    explanationAr: 'ينفد المتفاعل المحدد أولًا، ولذلك يضع حدًا أعلى لكمية الناتج.',
    explanationEn: 'The limiting reactant is used up first and sets the maximum possible product amount.'
  },
  {
    titleAr: 'حالات المادة',
    titleEn: 'States of Matter',
    pageRange: '216–259',
    topics: [
      ['6-1 قوانين الغازات', 'Gas Laws', '218'],
      ['6-2 قوى التجاذب', 'Intermolecular Forces', '228'],
      ['6-3 المواد السائلة والمواد الصلبة', 'Liquids and Solids', '233'],
      ['6-4 تغيرات الحالة الفيزيائية', 'Physical Changes of State', '243'],
      ['الكيمياء في واقع الحياة: كيمياء الكاكاو', 'Chemistry in Real Life: The Chemistry of Cocoa', '249']
    ],
    conceptsAr: [
      'ترتبط خواص الغازات بحركة جسيماتها والضغط والحجم ودرجة الحرارة.',
      'تؤثر قوى التجاذب بين الجسيمات في خواص السوائل والمواد الصلبة وتغيرات الحالة.'
    ],
    conceptsEn: [
      'Gas properties relate to particle motion, pressure, volume, and temperature.',
      'Intermolecular forces affect liquid and solid properties and changes of state.'
    ],
    visualTitleAr: 'حركة الجسيمات وتغير الحالة',
    visualTitleEn: 'Particle Motion and Changes of State',
    diagramType: 'matter_states_compound',
    stepsAr: ['جسيمات متقاربة أو متباعدة', 'حركة وطاقة حرارية', 'تغير في قوى التجاذب', 'تحول في الحالة'],
    stepsEn: ['Particles close together or spread apart', 'Motion and thermal energy', 'Change in attractive forces', 'Change of state'],
    questionAr: 'ماذا يحدث لجسيمات المادة عند اكتسابها طاقة حرارية كافية للانصهار؟',
    questionEn: 'What happens to particles when a substance gains enough thermal energy to melt?',
    optionsAr: ['تزداد حركتها وتضعف قيود ترتيبها الصلب', 'تتحول أنويتها إلى عناصر أخرى', 'تتوقف عن الحركة تمامًا', 'تختفي قوى التجاذب كلها في جميع الحالات'],
    optionsEn: ['Their motion increases and the solid arrangement becomes less restrictive', 'Their nuclei change into other elements', 'They stop moving completely', 'All attractions vanish in every state'],
    correctIndex: 0,
    explanationAr: 'تكتسب الجسيمات طاقة تمكّنها من الحركة بالنسبة إلى مواضعها في الصلب، فتتحول المادة إلى سائل.',
    explanationEn: 'Particles gain energy to move relative to their fixed solid positions, allowing the substance to become liquid.'
  },
  {
    titleAr: 'الغازات',
    titleEn: 'Gases',
    pageRange: '260–295',
    topics: [
      ['7-1 قوانين الغازات', 'Gas Laws', '262'],
      ['7-2 قانون الغاز المثالي', 'The Ideal Gas Law', '273'],
      ['7-3 الحسابات المتعلقة بالغازات', 'Gas Calculations', '281'],
      ['الكيمياء والصحة: الصحة والضغط', 'Chemistry and Health: Health and Pressure', '286']
    ],
    conceptsAr: [
      'تصف قوانين الغازات العلاقات بين الضغط والحجم ودرجة الحرارة وكمية الغاز.',
      'يستخدم قانون الغاز المثالي والحسابات الكيميائية لحل مسائل الغازات.'
    ],
    conceptsEn: [
      'Gas laws describe relationships among pressure, volume, temperature, and amount of gas.',
      'The ideal gas law and stoichiometric calculations can be used to solve gas problems.'
    ],
    visualTitleAr: 'متغيرات الغاز في القانون المثالي',
    visualTitleEn: 'Gas Variables in the Ideal Gas Law',
    diagramType: 'digital_skills',
    stepsAr: ['كمية الغاز', 'الحجم والضغط', 'درجة الحرارة المطلقة', 'تطبيق العلاقة الحسابية'],
    stepsEn: ['Amount of gas', 'Volume and pressure', 'Absolute temperature', 'Apply the quantitative relationship'],
    questionAr: 'أي علاقة تربط متغيرات الغاز في قانون الغاز المثالي؟',
    questionEn: 'Which relationship connects gas variables in the ideal gas law?',
    optionsAr: ['PV = nRT', 'F = ma', 'E = mc²', 'pH = −log[H⁺]'],
    optionsEn: ['PV = nRT', 'F = ma', 'E = mc²', 'pH = −log[H⁺]'],
    correctIndex: 0,
    explanationAr: 'يربط قانون الغاز المثالي الضغط والحجم وكمية الغاز ودرجة الحرارة المطلقة بثابت الغاز R.',
    explanationEn: 'The ideal gas law relates pressure, volume, amount of gas, and absolute temperature through R.'
  }
] as const;

export function getSaudiChemistryG11Curriculum(track: EducationTrack): Lecture[] {
  return chemistry2Chapters.map((chapter, index) => {
    const order = index + 1;
    const lectureId = `sa-chemistry2-1448-g11-${track.toLowerCase()}-${order}`;
    const topicListAr = chapter.topics.map(([title, , page]) => `${title} (ص ${page})`).join('؛ ');
    const topicListEn = chapter.topics.map(([, title, page]) => `${title} (p. ${page})`).join('; ');

    return {
      id: lectureId,
      order,
      titleAr: chapter.titleAr,
      titleEn: chapter.titleEn,
      subtitleAr: `الفصل ${order} — الكيمياء 2-1`,
      subtitleEn: `Chapter ${order} — Chemistry 2-1`,
      descriptionAr: `${chemistry2SourceNoteAr} موضوعات الفهرس: ${topicListAr}. صفحات الفصل والتقويم: ${chapter.pageRange}. المصدر: ${chemistry2SourceUrl}`,
      descriptionEn: `${chemistry2SourceNoteEn} Contents topics: ${topicListEn}. Chapter and review pages: ${chapter.pageRange}. Source: ${chemistry2SourceUrl}`,
      topicAr: topicListAr,
      topicEn: topicListEn,
      durationMinutes: 45,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'CHEMISTRY',
      gradeLevel: 'G11',
      educationType: 'PUBLIC',
      educationTrack: track,
      ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
      ministryEn: 'Ministry of Education, Saudi Arabia',
      gradeLevelNameAr: 'الصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م',
      gradeLevelNameEn: 'Second Secondary, Pathways System, 1448 AH/2026 edition',
      termAr: 'الفصل الدراسي الأول — الكيمياء 2-1، طبعة 1448هـ',
      termEn: 'Semester 1 — Chemistry 2-1, 1448 AH edition',
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
        contentAr: `${topicListAr}. تمت مطابقة هذه العناوين وأرقام صفحاتها مع فهرس الكتاب. ${chemistry2SourceNoteAr}`,
        contentEn: `${topicListEn}. These titles and page numbers were checked against the book contents. ${chemistry2SourceNoteEn}`,
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
