import type { Lecture, LectureDiagram, LectureDiagramStep } from '../types';

type ChemistryUnit = {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  diagram: LectureDiagramStep[];
};

const units: ChemistryUnit[] = [
  {
    titleAr: 'التركيب الذري للمادة',
    titleEn: 'Atomic Structure of Matter',
    focusAr: 'يتناول هذا المحور تركيب الذرة وتطور نماذجها، والإلكترونات والعدد الذري وأعداد الكم.',
    focusEn: 'Study atomic structure, the development of atomic models, electrons, atomic number, and quantum numbers.',
    diagram: [
      { labelAr: 'المادة تتكون من ذرات', labelEn: 'Matter is made of atoms' },
      { labelAr: 'النواة تضم البروتونات والنيوترونات', labelEn: 'The nucleus contains protons and neutrons' },
      { labelAr: 'الإلكترونات تشغل مستويات الطاقة', labelEn: 'Electrons occupy energy levels' },
      { labelAr: 'العدد الذري يحدد هوية العنصر', labelEn: 'Atomic number identifies the element' }
    ]
  },
  {
    titleAr: 'الروابط الكيميائية',
    titleEn: 'Chemical Bonds',
    focusAr: 'يفسر هذا المحور تكوّن الروابط الكيميائية، ويميز بين الرابطة الأيونية والتساهمية وجزيئات العناصر.',
    focusEn: 'Explain how chemical bonds form and distinguish ionic and covalent bonds and molecules of elements.',
    diagram: [
      { labelAr: 'تتفاعل الذرات للوصول إلى حالة أكثر استقرارًا', labelEn: 'Atoms interact to reach a more stable state' },
      { labelAr: 'انتقال الإلكترونات يؤدي إلى رابطة أيونية', labelEn: 'Electron transfer forms an ionic bond' },
      { labelAr: 'مشاركة الإلكترونات تؤدي إلى رابطة تساهمية', labelEn: 'Electron sharing forms a covalent bond' },
      { labelAr: 'ترتبط الذرات في جزيئات أو مركبات', labelEn: 'Atoms combine into molecules or compounds' }
    ]
  },
  {
    titleAr: 'المعادلات الكيميائية',
    titleEn: 'Chemical Equations',
    focusAr: 'يمثل هذا المحور التفاعلات بالمعادلات اللفظية والرمزية، ويوازن المعادلات للمحافظة على عدد الذرات.',
    focusEn: 'Represent reactions with word and symbolic equations, then balance equations to conserve atoms.',
    diagram: [
      { labelAr: 'حدد المواد المتفاعلة والناتجة', labelEn: 'Identify reactants and products' },
      { labelAr: 'اكتب المعادلة بالرموز والصيغ', labelEn: 'Write the equation with symbols and formulas' },
      { labelAr: 'احصر ذرات كل عنصر في الطرفين', labelEn: 'Count each element’s atoms on both sides' },
      { labelAr: 'وازن المعادلة بتغيير المعاملات', labelEn: 'Balance the equation by changing coefficients' }
    ]
  },
  {
    titleAr: 'التفاعلات الكيميائية',
    titleEn: 'Chemical Reactions',
    focusAr: 'يتعرف المتعلم أنواع التفاعلات الكيميائية ومبادئ تفاعلات الأكسدة والاختزال وموازنتها.',
    focusEn: 'Recognize types of chemical reactions and the principles of oxidation-reduction and balancing.',
    diagram: [
      { labelAr: 'تتغير الروابط بين المواد المتفاعلة', labelEn: 'Bonds change among the reactants' },
      { labelAr: 'تتكون مواد جديدة', labelEn: 'New substances form' },
      { labelAr: 'تتبادل بعض الأنواع الكيميائية الإلكترونات', labelEn: 'Some chemical species transfer electrons' },
      { labelAr: 'وازن المعادلة مع حفظ الذرات والشحنة', labelEn: 'Balance the equation while conserving atoms and charge' }
    ]
  },
  {
    titleAr: 'أسس الحساب الكيميائي',
    titleEn: 'Foundations of Chemical Calculations',
    focusAr: 'يربط هذا المحور بين كمية المادة وعدد الجسيمات والكتلة والحجم، ويطبق العلاقات في الحسابات الكيميائية.',
    focusEn: 'Relate amount of substance to particle count, mass, and volume, and apply these relations in chemical calculations.',
    diagram: [
      { labelAr: 'حدد المعطيات والوحدات', labelEn: 'Identify the given values and units' },
      { labelAr: 'اختر العلاقة الكيميائية المناسبة', labelEn: 'Choose the appropriate chemical relation' },
      { labelAr: 'حوّل بين الكمية والكتلة أو الحجم', labelEn: 'Convert between amount, mass, or volume' },
      { labelAr: 'تحقق من الناتج ووحدته', labelEn: 'Check the result and its unit' }
    ]
  },
  {
    titleAr: 'قوانين الاتحاد الكيميائي',
    titleEn: 'Laws of Chemical Combination',
    focusAr: 'يدرس هذا المحور قوانين الاتحاد الكيميائي، ومنها بقاء الكتلة والنسب الثابتة والنسب المتضاعفة.',
    focusEn: 'Study the laws of chemical combination, including conservation of mass, definite proportions, and multiple proportions.',
    diagram: [
      { labelAr: 'تتفاعل المواد بنسب محددة', labelEn: 'Substances react in defined proportions' },
      { labelAr: 'تبقى الكتلة محفوظة في التفاعل', labelEn: 'Mass is conserved in a reaction' },
      { labelAr: 'للمركب نسبة كتلية ثابتة لعناصره', labelEn: 'A compound has a fixed mass ratio of its elements' },
      { labelAr: 'تقارن النسب عند تكوّن مركبات متعددة', labelEn: 'Compare ratios when multiple compounds form' }
    ]
  }
];

export const SUDAN_HIGH_CHEMISTRY_G10_LECTURES: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const id = `sd-g10-chem-${order}`;
  const diagram: LectureDiagram = {
    id: `${id}-diagram`,
    figureNumberAr: `شكل توضيحي (${order})`,
    figureNumberEn: `Illustration (${order})`,
    titleAr: unit.titleAr,
    titleEn: unit.titleEn,
    captionAr: 'مخطط تعليمي يلخص تسلسل المفاهيم الرئيسة في المحور.',
    captionEn: 'An instructional diagram summarizing the sequence of core ideas in this unit.',
    diagramType: 'primary_lesson_sequence',
    visualSteps: unit.diagram
  };

  return {
    id,
    order,
    titleAr: `الوحدة ${order}: ${unit.titleAr}`,
    titleEn: `Unit ${order}: ${unit.titleEn}`,
    subtitleAr: 'الكيمياء — الصف الأول الثانوي',
    subtitleEn: 'Chemistry — Grade 10',
    descriptionAr: unit.focusAr,
    descriptionEn: unit.focusEn,
    durationMinutes: 35,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'CHEMISTRY',
    gradeLevel: 'G10',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'الصف الأول الثانوي',
    gradeLevelNameEn: 'Grade 10 — First Year of Secondary School',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: `الوحدة ${order}: ${unit.titleAr}`,
    unitTitleEn: `Unit ${order}: ${unit.titleEn}`,
    lessonNumberAr: 'محور دراسي',
    lessonNumberEn: 'Unit overview',
    warmupHookAr: `ما الذي تعرفه عن «${unit.titleAr}»؟ ابدأ بتوقع، ثم راجع المخطط لتبني تفسيرًا علميًا.`,
    warmupHookEn: `What do you know about “${unit.titleEn}”? Start with a prediction, then use the diagram to build a scientific explanation.`,
    learningOutcomesAr: [unit.focusAr],
    learningOutcomesEn: [unit.focusEn],
    keyConceptsAr: [unit.titleAr],
    keyConceptsEn: [unit.titleEn],
    summaryAr: unit.focusAr,
    summaryEn: unit.focusEn,
    sections: [{
      titleAr: unit.titleAr,
      titleEn: unit.titleEn,
      contentAr: `${unit.focusAr}\n\nاستخدم المخطط لتنظيم خطوات الفهم، ثم اشرح العلاقة بين عناصره بمثال علمي مناسب.`,
      contentEn: `${unit.focusEn}\n\nUse the diagram to organize your understanding, then explain the relationships with a suitable scientific example.`,
      diagram
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم الوحدة ${order}`,
      titleEn: `Unit ${order} Check`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: `أي عبارة تصف الفكرة الرئيسة في «${unit.titleAr}»؟`,
        textEn: `Which statement describes the main idea of “${unit.titleEn}”?`,
        optionsAr: [unit.focusAr, 'تفسير لا يرتبط بالمفاهيم الكيميائية للمحور', 'استنتاج لا تدعمه الأفكار الرئيسة للمحور'],
        optionsEn: [unit.focusEn, 'An explanation unrelated to the unit’s chemical concepts', 'A conclusion that contradicts conservation in chemical changes'],
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: unit.focusAr,
        explanationEn: unit.focusEn,
        difficulty: 'medium'
      }]
    }
  };
});
