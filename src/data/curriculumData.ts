import type { Lecture, StudentProfile, Subject } from '../types';
import { BIOLOGY_LECTURES, COMPUTER_SCIENCE_LECTURES } from './stemCurriculumData';
import { ISLAMIC_STUDIES_FULL, PRIMARY_ARABIC_FULL } from './islamicArabicCurriculum';
import { getNationalTextbookInfo, getCountryInfo } from './curriculumCountries';

import {
  PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC_LECTURES,
  PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES_LECTURES
} from './primaryCurriculumData';
import { MIDDLE_MATH_LECTURES } from './middleMathCurriculumData';
import { MIDDLE_MATH_G8_LECTURES } from './middleMath8CurriculumData';
import { MIDDLE_MATH_G9_LECTURES } from './middleMath9CurriculumData';
import { HIGH_MATH_G10_LECTURES } from './highMath10CurriculumData';
import { HIGH_MATH_G11_LECTURES } from './highMath11CurriculumData';
import { HIGH_MATH_G12_LECTURES } from './highMath12CurriculumData';
import { MIDDLE_COMPUTER_SCIENCE_LECTURES } from './middleCompCurriculumData';
import { MIDDLE_COMPUTER_SCIENCE_G8_LECTURES } from './middleComp8CurriculumData';
import { HIGH_COMP_G10_LECTURES } from './highComp10CurriculumData';
import { HIGH_COMP_G11_LECTURES } from './highComp11CurriculumData';
import { HIGH_COMP_G12_LECTURES } from './highComp12CurriculumData';
import { MIDDLE_SCIENCE_G8_LECTURES } from './middleScience8CurriculumData';
import { MIDDLE_SCIENCE_G9_LECTURES } from './middleScience9CurriculumData';
import { HIGH_CHEMISTRY_G10_LECTURES } from './highChemistry10CurriculumData';
import { HIGH_CHEMISTRY_G11_LECTURES } from './highChemistry11CurriculumData';
import { HIGH_CHEMISTRY_G12_LECTURES } from './highChemistry12CurriculumData';
import { HIGH_BIO_G10_LECTURES } from './highBio10CurriculumData';
import { HIGH_BIO_G11_LECTURES } from './highBio11CurriculumData';
import { HIGH_PHYSICS_G11_LECTURES } from './highPhysics11CurriculumData';
import { HIGH_PHYSICS_G12_LECTURES } from './highPhysics12CurriculumData';
import { MIDDLE_ARABIC_G9_LECTURES } from './middleArabic9CurriculumData';
import { PRIMARY_ARABIC_G1_LECTURES } from './primaryArabic1CurriculumData';
import { PRIMARY_ARABIC_G2_LECTURES } from './primaryArabic2CurriculumData';
import { PRIMARY_MATH_G1_LECTURES } from './primaryMath1CurriculumData';
import { PRIMARY_MATH_G2_LECTURES } from './primaryMath2CurriculumData';
import { PRIMARY_MATH_G3_LECTURES } from './primaryMath3CurriculumData';
import { PRIMARY_SCIENCE_G1_LECTURES } from './primaryScience1CurriculumData';
import { PRIMARY_SCIENCE_G2_LECTURES } from './primaryScience2CurriculumData';
import { PRIMARY_SCIENCE_G3_LECTURES } from './primaryScience3CurriculumData';
import { PRIMARY_ISLAMIC_G2_LECTURES } from './primaryIslamic2CurriculumData';
import { PRIMARY_ISLAMIC_G3_LECTURES } from './primaryIslamic3CurriculumData';
import { PRIMARY_ISLAMIC_G4_LECTURES } from './primaryIslamic4CurriculumData';

export {
  PRIMARY_MATH_LECTURES,
  PRIMARY_MATH_G2_LECTURES,
  PRIMARY_MATH_G3_LECTURES,
  PRIMARY_ARABIC_LECTURES,
  PRIMARY_ARABIC_G2_LECTURES,
  PRIMARY_SCIENCE_LECTURES,
  PRIMARY_SCIENCE_G1_LECTURES,
  PRIMARY_SCIENCE_G2_LECTURES,
  PRIMARY_SCIENCE_G3_LECTURES,
  ISLAMIC_STUDIES_LECTURES,
  PRIMARY_ISLAMIC_G2_LECTURES,
  PRIMARY_ISLAMIC_G3_LECTURES,
  PRIMARY_ISLAMIC_G4_LECTURES,
  MIDDLE_MATH_LECTURES,
  MIDDLE_MATH_G8_LECTURES,
  MIDDLE_MATH_G9_LECTURES,
  HIGH_MATH_G10_LECTURES,
  HIGH_MATH_G11_LECTURES,
  HIGH_MATH_G12_LECTURES,
  MIDDLE_COMPUTER_SCIENCE_LECTURES,
  MIDDLE_COMPUTER_SCIENCE_G8_LECTURES,
  HIGH_COMP_G10_LECTURES,
  HIGH_COMP_G11_LECTURES,
  HIGH_COMP_G12_LECTURES,
  MIDDLE_SCIENCE_G8_LECTURES,
  MIDDLE_SCIENCE_G9_LECTURES,
  HIGH_CHEMISTRY_G10_LECTURES,
  HIGH_CHEMISTRY_G11_LECTURES,
  HIGH_CHEMISTRY_G12_LECTURES,
  HIGH_BIO_G10_LECTURES,
  HIGH_BIO_G11_LECTURES,
  HIGH_PHYSICS_G11_LECTURES,
  HIGH_PHYSICS_G12_LECTURES,
  MIDDLE_ARABIC_G9_LECTURES,
  PRIMARY_ARABIC_G1_LECTURES,
  PRIMARY_MATH_G1_LECTURES
};

// ============================================================================
// ============================================================================
// ============================================================================
// 1. MATHEMATICS CURRICULUM — GRADE 12 (رياضيات الصف الثالث الثانوي - الثانوية العامة ومدارس اللغات)
// ============================================================================
export const MATH_LECTURES: Lecture[] = HIGH_MATH_G12_LECTURES;

// ============================================================================
// 2. ADVANCED / GENERAL SECONDARY PHYSICS CURRICULUM (الفيزياء للثانوية العامة ومدارس اللغات)
// ============================================================================
export const PHYSICS_LECTURES: Lecture[] = HIGH_PHYSICS_G12_LECTURES;
export const CHEMISTRY_LECTURES: Lecture[] = HIGH_CHEMISTRY_G12_LECTURES;

// ============================================================================
// 3. ARABIC LITERATURE & RHETORIC CURRICULUM (اللغة العربية والبلاغة)
// ============================================================================
export const ARABIC_LIT_LECTURES: Lecture[] = [
  {
    id: 'lit-1',
    order: 1,
    titleAr: 'المحاضرة 1: علم البيان: التشبيه وأركانه وأثره البلاغي في المعنى',
    titleEn: 'Lecture 1: Rhetoric & Imagery: Simile and Its Semantic Aesthetics',
    subtitleAr: 'دراسة أركان التشبيه الأربعة والتمييز بين التشبيه المفرد والتشبيه البليغ والتمثيلي والضمني',
    subtitleEn: 'Explore the 4 components of similes, contrasting explicit, composite, and implied analogies.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثاني ثانوي - المرحلة الثانوية (مسار اللغة العربية والإنسانيات)',
    gradeLevelNameEn: 'Grade 11 / High School - Arabic Literature & Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: علم البيان والتصوير الفني',
    unitTitleEn: 'Unit 1: Imagery, Rhetoric & Artistic Expression',
    lessonNumberAr: 'الدرس 1: التشبيه: أركانه، وأقسامه، وأسراره البلاغية',
    lessonNumberEn: 'Lesson 1: The Simile: Structure, Types & Aesthetics',

    // Real-world Rhetorical Hook
    warmupHookAr: 'حين قال الشاعر يصف شجاعة البطل: "أنتَ كالشَّمْسِ فِي الضِّيَاءِ وَإِنْ جَاوَزْتَ كَيْوَانَ فِي عُلُوِّ المَكَانِ"، لم يكن يصف حقيقة فلكية، بل صاغ صورة بيانية تنقل الإحساس بعظمة الممدوح وضياء مكانته. التشبيه هو أقدم فنون التصوير البياني وأكثرها تأثيراً في النفس الإنسانية؛ كيف تفكك أي تشبيه بلاغي وتحدد أركانه الأربعة؟ وما السر الذي يجعل حذف بعض الأركان يرفع البلاغة إلى قمتها في "التشبيه البليغ"؟',
    warmupHookEn: 'Similes elevate literal descriptions into immortal poetic imagery. Discover the 4 cardinal pillars of Arabic similes and why omitting explicit particles yields supreme rhetorical power.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يحدد الطالب أركان التشبيه الأربعة (المشبه، المشبه به، أداة التشبيه، وجه الشبه) في شواهد شعرية ونثرية',
      'أن يصنف الطالب أنواع التشبيه (مرسل، مؤكد، مجمل، مفصل، بليغ) بدقة',
      'أن يميز الطالب بين التشبيه المفرد والتشبيه التمثيلي والتشبيه الضمني',
      'أن يحلل الطالب الأثر البلاغي والجمالي للتشبيه في نقل المعنى وإثارة العاطفة'
    ],
    learningOutcomesEn: [
      'Identify the 4 components of simile (Tenor, Vehicle, Particle, Ground) in classical poetry and prose',
      'Classify simile categories (Mursal, Muakkad, Mujmal, Mufassal, Baleegh) accurately',
      'Distinguish between simple, composite (Tamtheeli), and implied (Dhimni) similes',
      'Analyze the aesthetic and emotional impact of rhetorical analogies on textual reception'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'علم البيان (Ilm Al-Bayan)',
        termEn: 'Ilm Al-Bayan (Rhetoric / Imagery)',
        definitionAr: 'علم يُعرف به إيراد المعنى الواحد بطرق مختلفة في وضوح الدلالة عليه (التشبيه، الاستعارة، الكناية، المجاز).',
        definitionEn: 'The classical Arabic rhetorical discipline of expressing a single idea through diverse figurative modalities.'
      },
      {
        termAr: 'المشبه والمشبه به (Tenor & Vehicle)',
        termEn: 'Tenor and Vehicle',
        definitionAr: 'طرفا التشبيه الأساسيان اللذان لا يقوم التشبيه إلا بهما؛ المشبه هو المراد إيضاحه، والمشبه به هو الطرف الأقوى في الصفة.',
        definitionEn: 'The two indispensable pillars of comparison: the entity described and the illustrative analogue.'
      },
      {
        termAr: 'وجه الشبه (Ground / Shared Quality)',
        termEn: 'Wajh Ash-Shabah (Ground)',
        definitionAr: 'الوصف أو الصفة المشتركة التي تجمع بين المشبه والمشبه به، ويكون في المشبه به أقوى وأظهر.',
        definitionEn: 'The common attribute linking tenor and vehicle, predominantly manifested in the vehicle.'
      },
      {
        termAr: 'التشبيه البليغ (Eloquent Simile)',
        termEn: 'Eloquent Simile (Baleegh)',
        definitionAr: 'تشبيه حُذفت منه أداة التشبيه ووجه الشبه معاً وبقي الطرفان فقط (مثل: العلمُ نورٌ)، وهو أعلى مراتب التشبيه.',
        definitionEn: 'The pinnacle of simile where connective particle and ground are deleted, leaving direct identification.'
      },
      {
        termAr: 'التشبيه التمثيلي (Composite Simile)',
        termEn: 'Composite Simile (Tamtheeli)',
        definitionAr: 'تشبيه تكون فيه صورة مركبة من عدة عناصر مشبهة بصورة مركبة أخرى منتزعة من متعدد.',
        definitionEn: 'A holistic analogy comparing a complex multifaceted scene with another multi-element tableau.'
      },
      {
        termAr: 'التشبيه الضمني (Implied Simile)',
        termEn: 'Implied Simile (Dhimni)',
        definitionAr: 'تشبيه لا يُصرّح فيه بأركان التشبيه في صورة تركيبية معتادة، بل يُلمح التشبيه من سياق المعنى ويؤتى بالشطر الثاني كبرهان.',
        definitionEn: 'An analogy where comparison is subtly woven into context without formal syntactic markers.'
      }
    ],

    keyConceptsAr: [
      'أركان التشبيه الأربعة: المشبه، والمشبه به، والأداة، ووجه الشبه',
      'أقسام التشبيه بحسب ذكر وحذف الأداة ووجه الشبه (التام، المؤكد، المجمل، البليغ)',
      'التشبيه التمثيلي والتشبيه الضمني',
      'الأسرار البلاغية والجمالية: التشخيص، والتجسيم، والتوضيح'
    ],
    keyConceptsEn: [
      'Four Pillars of Simile: Tenor, Vehicle, Particle, Ground',
      'Taxonomy by Omission: Complete, Confirmed, Concise, Eloquent',
      'Composite vs Contextually Implied Analogies',
      'Rhetorical Aesthetics: Personification, Concretization, Illumination'
    ],
    summaryAr: 'علم البيان هو بوابة تذوق سحر البيان العربي؛ نكتشف في هذا الدرس كيف يرتقي الكاتب بالمعنى عبر التشبيه البليغ الذي يجمع بين الدقة والجمال، ونفصل أركانه الأربعة وصوره التمثيلية والضمنية.',
    summaryEn: 'Discover how classical Arabic rhetoric elevates prose and poetry through layered figurative similes, mastering the 4 pillars and advanced composite and implied forms.',

    sections: [
      {
        titleAr: '1. أركان التشبيه الأربعة ومخطط شجرة البيان',
        titleEn: '1. The Four Pillars of Simile & Rhetorical Schema',
        contentAr: 'يقوم التشبيه على عقد مماثلة بين شيئين اشتركا في صفة أو أكثر. أركانه الأربعة هي:\n1. المشبه: الأمر الذي يراد إلحاقه بغيره لبيان صفته.\n2. المشبه به: الأمر الذي يُلحق به المشبه وتكون الصفة فيه أقوى وأجلى (وهما طرفا التشبيه الأساسيان).\n3. أداة التشبيه: اللفظ الدال على المماثلة، وتكون حرفاً (كـ، كأنَّ) أو اسماً (مثل، شبه) أو فعلاً (يشبه، يماثل).\n4. وجه الشبه: المعنى المشترك الجامع بين الطرفين (مثل: الشجاعة، الضياء، الكرم).',
        contentEn: 'A simile establishes an analogy between two entities sharing salient qualities, anchored by tenor, vehicle, connective particle, and ground.',
        diagram: {
          id: 'diag-rhetoric-simile',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'مخطط أركان التشبيه البلاغي ومراتبه في علم البيان',
          titleEn: 'Four Pillars of Simile & Taxonomy Spectrum',
          captionAr: 'مخطط توضيحي يبين أركان التشبيه الأربعة (المشبه، الأداة، المشبه به، وجه الشبه) ويوضح درجات البلاغة عند حذف الأداة أو وجه الشبه وصولاً إلى التشبيه البليغ.',
          captionEn: 'Structural hierarchy of simile components illustrating how progressive omissions yield the supreme Eloquent Simile.',
          diagramType: 'rhetoric_simile_map',
          takeawayFormulaAr: 'التشبيه البليغ = المشبه + المشبه به (حذف الأداة ووجه الشبه لتوحيد الطرفين)',
          takeawayFormulaEn: 'Eloquent Simile = Tenor + Vehicle (Particle and Ground deleted)',
          keyLabels: [
            { tagAr: 'طرفا التشبيه', tagEn: 'Tenor & Vehicle', color: '#38bdf8' },
            { tagAr: 'أداة التشبيه', tagEn: 'Connective Particle', color: '#f59e0b' },
            { tagAr: 'وجه الشبه', tagEn: 'Shared Ground', color: '#ec4899' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (1-1): تفكيك أركان التشبيه في بيت شعر كلاسيكي',
          titleEn: 'Worked Example (1-1): Deconstructing Simile Pillars in Classical Poetry',
          equation: 'المشبه + الأداة + المشبه به + وجه الشبه',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'البيت الشعري: "أَنْتَ كَاللَّيْثِ فِي الشَّجَاعَةِ وَالإِقْدَامِ ... وَالسَّيْفِ فِي قِرَاعِ الخُطُوبِ".', 
              textEn: 'Verse: "You are like the lion in courage and valor, and like the sword in overcoming calamities."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المشبه: الضمير "أنتَ" (الممدوح).', 
              textEn: 'Tenor (المشبه): Pronoun "Anta" (the praised hero).' 
            },
            { 
              stepNumber: 3, 
              textAr: 'أداة التشبيه: حرف الكاف (كـ).', 
              textEn: 'Connective Particle (الأداة): Letter Kaf (Like).' 
            },
            { 
              stepNumber: 4, 
              textAr: 'المشبه به: "اللَّيْثِ" (الأسد).', 
              textEn: 'Vehicle (المشبه به): "Al-Layth" (The Lion).' 
            },
            { 
              stepNumber: 5, 
              textAr: 'وجه الشبه: "فِي الشَّجَاعَةِ وَالإِقْدَامِ" (الصفة المشتركة الأقوى في الأسد).', 
              textEn: 'Ground (وجه الشبه): "Courage and bravery", most intensely manifested in the lion.' 
            }
          ],
          takeawayAr: 'ذكر جميع الأركان الأربعة يسمى "تشبيهاً تاماً ومفصلاً ومرسلاً".',
          takeawayEn: 'Explicit articulation of all four components constitutes a fully articulated complete simile.'
        },
        tipsAr: ['طرفا التشبيه لا يمكن حذفهما معاً في التشبيه، فإن حُذف أحدهما تحول الأسلوب إلى استعارة!']
      },
      {
        titleAr: '2. مراتب التشبيه وأنواعه بحسب الحذف والذكر',
        titleEn: '2. Simile Classifications by Structural Omission',
        contentAr: 'تتفاوت بلاغة التشبيه بحسب ما يُذكر أو يُحذف من أركانه:\n\n1. التشبيه المرسل: ما ذُكرت فيه أداة التشبيه (مثل: كان خلقه كالنسيم).\n2. التشبيه المؤكد: ما حُذفت منه أداة التشبيه (مثل: أنت ليثٌ في الشجاعة).\n3. التشبيه المجمل: ما حُذف منه وجه الشبه (مثل: المعلمُ كالبحر).\n4. التشبيه المفصل: ما ذُكر فيه وجه الشبه صراحة (مثل: المعلم كالبحر في الكرم).\n5. التشبيه البليغ (ذروة البلاغة): ما حُذفت منه الأداة ووجه الشبه معاً، وبقي الطرفان فقط (مثل: "العلمُ نورٌ"، "الأمُّ مدرسةٌ")؛ وسر بلاغته أنه يدعي التطابق التام والاتحاد بين المشبه والمشبه به.',
        contentEn: 'Simile taxonomy: Mursal (particle stated), Muakkad (particle omitted), Mujmal (ground omitted), Mufassal (ground stated), and Baleegh (both omitted, creating total identity).',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (1-2): تحويل التشبيه التام إلى تشبيه بليغ راقٍ',
          titleEn: 'Worked Example (1-2): Transforming an Explicit Simile into an Eloquent Simile',
          equation: 'تشبيه مفصل مرسل -> حذف الأداة -> حذف وجه الشبه = تشبيه بليغ',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الجملة الأصلية (تشبيه تام مفصل مرسل): "القُرْآنُ كَالنُّورِ فِي الهِدَايَةِ".', 
              textEn: 'Base sentence: "The Quran is like the light in guidance."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'الخطوة الأولى (حذف الأداة): "القُرْآنُ نُورٌ فِي الهِدَايَةِ" -> أصبح تشبيهاً مؤكداً.', 
              textEn: 'Step 1 (Drop particle): "The Quran is light in guidance" -> Confirmed Simile.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'الخطوة الثانية (حذف وجه الشبه): "القُرْآنُ نُورٌ" -> أصبح تشبيهاً بليغاً في أعلى درجات الفصاحة والتأثير.', 
              textEn: 'Step 2 (Drop ground): "The Quran is light" -> Eloquent Simile (Baleegh).' 
            }
          ],
          takeawayAr: 'التشبيه البليغ يجعل المشبه عين المشبه به، مما يمنح المعنى قوة إيحائية مضاعفة.',
          takeawayEn: 'The Baleegh simile directly identifies tenor with vehicle, maximizing poetic and emotional impact.'
        },
        tipsAr: ['صور التشبيه البليغ في اللغة: 1) المبتدأ والخبر (العلم نور)، 2) الحال وصاحبها (هجم الجندي أسداً)، 3) المفعول المطلق المبين للنوع (تفوق تفوق العباقرة)، 4) إضافة المشبه به للمشبه (نور العلم).']
      },
      {
        titleAr: '3. التشبيه التمثيلي والتشبيه الضمني',
        titleEn: '3. Composite (Tamtheeli) & Implied (Dhimni) Similes',
        contentAr: 'حين يرتقي الأديب بالصورة من مقارنة مفردة إلى مشهد متكامل، نصل إلى:\n\nأولاً: التشبيه التمثيلي:\n- تشبيه صورة مركبة بصورة مركبة أخرى، ويكون وجه الشبه فيه منتزعاً من عدة أمور.\n- مثاله قوله تعالى: ﴿مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ﴾؛ حيث شُبهت هيئة النفقة المباركة وتضاعف أجرها بهيئة حبة قمح زُرعت في أرض طيبة فأثمرت سبعمائة حبة.\n\nثانياً: التشبيه الضمني:\n- تشبيه لا تظهر فيه أركان التشبيه بصورة صريحة، بل يُفهم ضمناً من سياق الكلام، ويكون الشطر الثاني حكماً وبرهاناً على الشطر الأول.\n- مثاله قول المتنبي:\n"مَنْ يَهُنْ يَسْهُلِ الهَوَانُ عَلَيْهِ ... مَا لِجُرْحٍ بِمَيِّتٍ إِيلَامُ"\nشبه الذي اعتاد الذل فلا يتألم به بالميت الذي لا يتألم بالجرح، دون استخدام أي أداة تشبيه!',
        contentEn: 'Composite similes compare full multi-element tableaux (Tamtheeli), while Implied similes (Dhimni) weave the comparison subtly into thematic context without formal markers.',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (1-3): تحليل تشبيه ضمني واستخراج وجه المقارنة',
          titleEn: 'Worked Example (1-3): Deconstructing an Implied (Dhimni) Simile',
          equation: 'القضية الأولى (الشطر الأول) + الدليل والبرهان البياني (الشطر الثاني)',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'تأمل قول أبي فراس الحمداني: "سَيَذْكُرُنِي قَوْمِي إِذَا جَدَّ جِدُّهُمْ ... وَفِي اللَّيْلَةِ الظَّلْمَاءِ يُفْتَقَدُ البَدْرُ".', 
              textEn: 'Reflect on: "My people shall remember me in intense hardship, just as the full moon is missed in the darkest night."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المعنى الأول: تذكر قوم الشاعر له عند الشدائد وحاجتهم لفروسيته ورأيه.', 
              textEn: 'First premise: The tribe seeking the poet in moments of dire adversity.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'المعنى الثاني (البرهان): حاجة الناس إلى البدر المنير في الليلة شديدة الظلام.', 
              textEn: 'Second premise (Proof): The desperate longing for the radiant full moon in pitch-black night.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'نوع التشبيه: تشبيه ضمني؛ لم يقل الشاعر "أنا كالبدر"، بل ألمح للمقارنة ببراعة وذكاء فني.', 
              textEn: 'Simile Type: Implied Simile (Dhimni); subtle analogy without literal syntactic scaffolding.' 
            }
          ],
          takeawayAr: 'التشبيه الضمني يأتي دائماً دليلاً وبرهاناً مقنعاً على القضية المطروحة في صدر البيت.',
          takeawayEn: 'Implied similes serve as elegant intuitive proofs confirming the preceding assertion.'
        },
        tipsAr: ['التشبيه الضمني يخلو دائماً من أدوات التشبيه الصريحة، وتأتي جملته الثانية بمثابة مثل سائر.']
      }
    ],

    conceptMapSummaryAr: 'أركان التشبيه 4: مشبه، مشبه به (طرفان أساسيان)، أداة تشبيه، وجه الشبه. مراتبه: تام (ذكر الكل)، مؤكد (حذف الأداة)، مجمل (حذف الوجه)، بليغ (حذف الأداة والوجه وهو أعلاها). وأنواعه المركبة: تمثيلي (صورة بصورة) وضمني (يُفهم من السياق).',
    conceptMapSummaryEn: 'Simile Pillars: Tenor, Vehicle, Particle, Ground. Ranks: Complete, Confirmed, Concise, Eloquent. Composite Types: Tamtheeli (Scene vs Scene) and Dhimni (Contextually Implied).',

    goldenRulesAr: [
      'القاعدة 1: لا ينعقد التشبيه إلا بوجود طرفي التشبيه الأساسيين: المشبه والمشبه به.',
      'القاعدة 2: إذا حُذف المشبه أو المشبه به خرج الأسلوب من التشبيه إلى "الاستعارة".',
      'القاعدة 3: التشبيه المؤكد هو ما حُذفت منه الأداة، والمجمل ما حُذف منه وجه الشبه.',
      'القاعدة 4: التشبيه البليغ يحذف الأداة ووجه الشبه معاً لإفادة التماهي والاتحاد التام.',
      'القاعدة 5: التشبيه التمثيلي يقارن بين هيئة مركبة وهيئة مركبة أخرى منتزعة من متعدد.',
      'القاعدة 6: التشبيه الضمني يلمح للمقارنة دون أدوات، ويكون الشطر الثاني برهاناً وحكمة.',
      'القاعدة 7: أسرار جمال التشبيه تنحصر في: التشخيص (لغير العاقل)، والتجسيم (للمعنويات)، والتوضيح.'
    ],
    goldenRulesEn: [
      'Rule 1: A simile strictly requires both primary pillars: Tenor and Vehicle.',
      'Rule 2: Deleting either tenor or vehicle transforms the figure into a Metaphor.',
      'Rule 3: Confirmed similes omit particles; Concise similes omit grounds.',
      'Rule 4: Eloquent similes (Baleegh) omit both particle and ground for complete identification.',
      'Rule 5: Composite similes compare complex multi-faceted scenes.',
      'Rule 6: Implied similes lack explicit particles and function as proverbial proofs.',
      'Rule 7: Aesthetic aims of simile are Personification, Concretization, and Vivid Illumination.'
    ],

    textbookExercises: [
      {
        id: 'ex-lit-1-1',
        questionAr: 'عين أركان التشبيه ونوعه في قول الشاعر: "وَالعِلْمُ مَالُ المُعْدَمِينَ إِذَا هُمُ ... خَرَجُوا إِلَى الدُّنْيَا بِغَيْرِ حُطَامِ".',
        questionEn: 'Identify simile pillars and classification in the poetic verse on knowledge as wealth.',
        solutionStepsAr: [
          '1. المشبه: "العِلْمُ".',
          '2. المشبه به: "مَالُ المُعْدَمِينَ".',
          '3. أداة التشبيه: محذوفة.',
          '4. وجه الشبه: محذوف (القيمة والغنى والاستغناء).',
          '5. نوع التشبيه: تشبيه بليغ؛ لأنه جاء على صورة المبتدأ والخبر وحُذفت الأداة ووجه الشبه.'
        ],
        solutionStepsEn: [
          '1. Tenor: "Knowledge".',
          '2. Vehicle: "Wealth of the destitute".',
          '3. Particle: Omitted.',
          '4. Ground: Omitted (Value, enrichment).',
          '5. Classification: Eloquent Simile (Baleegh).'
        ],
        answerAr: 'المشبه: العلم | المشبه به: مال المعدمين | نوعه: تشبيه بليغ.',
        answerEn: 'Tenor: Knowledge | Vehicle: Wealth | Type: Eloquent Simile.'
      },
      {
        id: 'ex-lit-1-2',
        questionAr: 'بين نوع التشبيه في قول الشاعر: "تَرْجُو النَّجَاةَ وَلَمْ تَسْلُكْ مَسَالِكَهَا ... إِنَّ السَّفِينَةَ لَا تَجْرِي عَلَى اليَبَسِ".',
        questionEn: 'Identify the simile type in the verse on seeking salvation without taking righteous paths.',
        solutionStepsAr: [
          '1. الشطر الأول يعبر عن استحالة نيل النجاة والفوز دون بذل الأسباب وسلوك طريقها.',
          '2. الشطر الثاني يأتي بحقيقة واقعية ملموسة وهي أن السفينة يستحيل أن تبحر على الأرض اليابسة.',
          '3. لم يستخدم الشاعر أداة تشبيه ولم يصرح بالمقارنة مباشرة، بل لُمح التشبيه ضمناً.',
          '4. إذن نوع التشبيه: تشبيه ضمني رائع.'
        ],
        solutionStepsEn: [
          '1. First half asserts the impossibility of salvation without pursuing its means.',
          '2. Second half brings empirical proof: ships cannot sail on dry land.',
          '3. No connective particle or direct explicit syntax used.',
          '4. Classification: Implied Simile (Dhimni).'
        ],
        answerAr: 'تشبيه ضمني؛ لأن الشطر الثاني جاء دليلاً وبرهاناً وحكمة على المعنى في الشطر الأول.',
        answerEn: 'Implied Simile (Dhimni), serving as proverbial verification.'
      }
    ],

    assessment: {
      id: 'quiz-lit-1',
      lectureId: 'lit-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: علم البيان والتشبيه وأركانه',
      titleEn: 'Lecture 1 Assessment: Classical Rhetoric & Similes Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'ql1-1',
          textAr: 'ما هو التشبيه البليغ في البلاغة العربية؟',
          textEn: 'What defines an Eloquent Simile in Arabic rhetoric?',
          optionsAr: [
            'ما حُذفت منه أداة التشبيه ووجه الشبه وبقي الطرفان الأساسيان فقط (مثل: العلمُ نورٌ)',
            'ما ذُكرت فيه جميع أركان التشبيه الأربعة كاملة',
            'ما حُذف منه المشبه به واستُعيرت لوازمه',
            'ما كان وجه الشبه فيه منفياً'
          ],
          optionsEn: [
            'Simile where particle and ground are omitted, retaining tenor and vehicle',
            'Simile where all four components are explicitly stated',
            'Figure where the vehicle is deleted',
            'Figure with negated comparison'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف التشبيه البليغ وأركانه المحذوفة',
          conceptTestedEn: 'Eloquent Simile Definition',
          explanationAr: 'التشبيه البليغ هو ما حُذفت منه أداة التشبيه ووجه الشبه، مثل: "المعلمُ بحرٌ" و"الصبرُ درعٌ".',
          explanationEn: 'The eloquent simile deletes the particle and ground, leaving tenor and vehicle directly identified.',
          difficulty: 'easy'
        },
        {
          id: 'ql1-2',
          textAr: 'في قول الشاعر: "كَأَنَّ أَخْلَاقَكَ فِي لُطْفِهَا ... وَرِقَّةٍ فِيهَا نَسِيمُ الصَّبَاحِ"، ما نوع التشبيه من حيث الأركان؟',
          textEn: 'In the verse comparing gentle morals to the morning breeze, what is the simile classification?',
          optionsAr: [
            'تشبيه تام مرسل مفصل (ذُكرت فيه الأركان الأربعة: الأداة كأن، والمشبه أخلاقك، والمشبه به نسيم الصباح، والوجه في لطفها)',
            'تشبيه بليغ',
            'تشبيه مؤكد مجمل',
            'تشبيه ضمني'
          ],
          optionsEn: [
            'Complete Mursal Mufassal Simile (all 4 components stated)',
            'Eloquent Simile',
            'Confirmed Concise Simile',
            'Implied Simile'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تحليل الأركان الكاملة للتشبيه المرسل المفصل',
          conceptTestedEn: 'Full Pillar Simile Analysis',
          explanationAr: 'ذُكرت الأركان الأربعة: الأداة (كأنَّ)، المشبه (أخلاقك)، المشبه به (نسيم الصباح)، ووجه الشبه (في لطفها ورقة فيها)، فهو تشبيه تام مفصل مرسل.',
          explanationEn: 'All four components are explicitly present, categorizing it as a complete articulated simile.',
          difficulty: 'medium'
        },
        {
          id: 'ql1-3',
          textAr: 'ما الفرق الجوهري بين التشبيه التمثيلي والتشبيه الضمني؟',
          textEn: 'What is the fundamental distinction between Composite and Implied Similes?',
          optionsAr: [
            'التمثيلي يشبه صورة مركبة بصورة مركبة مع وجود أداة، بينما الضمني يُلمح من السياق ويكون الشطر الثاني برهاناً دون أداة',
            'التمثيلي يختص بالنثر والضمني بالشعر فقط',
            'التمثيلي يحذف المشبه والضمني يحذف المشبه به',
            'لا يوجد فرق بينهما كلاهما تشبيه بليغ'
          ],
          optionsEn: [
            'Tamtheeli compares structured composite scenes often with particles; Dhimni is contextually inferred without particles serving as proof',
            'Tamtheeli is prose-only, Dhimni poetry-only',
            'Tamtheeli deletes tenor, Dhimni deletes vehicle',
            'No difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفروق الدقيقة بين التشبيه التمثيلي والضمني',
          conceptTestedEn: 'Composite vs Implied Analogy Distinction',
          explanationAr: 'التشبيه التمثيلي تشبيه صورة بصورة مركبة وتكون فيه الأداة غالباً، بينما الضمني يُفهم من السياق ويكون الشطر الثاني بمثابة دليل وبرهان يثبت صحة الشطر الأول.',
          explanationEn: 'Tamtheeli compares vivid multi-element tableaux; Dhimni is subtly implied as a contextual proof without explicit simile syntax.',
          difficulty: 'hard'
        },
        {
          id: 'ql1-4',
          textAr: 'ما هو سر الجمال البلاغي في قولنا: "تَبَسَّمَتِ الحَيَاةُ لِلْمُجْتَهِدِينَ" أو "الْأَمَلُ يَمُدُّ يَدَهُ إِلَيْكَ"؟',
          textEn: 'What is the rhetorical aesthetic effect in attributing smiles and outstretched hands to abstract life and hope?',
          optionsAr: [
            'التشخيص (منح المعنويات والجمادات صفات الأشخاص العاقلين لإضفاء حيوية وتأثير)',
            'الجناس الصوتي',
            'السجع النثري',
            'الطباق السلبي'
          ],
          optionsEn: [
            'Personification (Tashkhees, endowing abstract concepts with human vitality)',
            'Phonetic Jinas',
            'Prose Rhyme (Saj)',
            'Negative Antithesis'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أسرار الجمال البلاغي: التشخيص والتجسيم',
          conceptTestedEn: 'Aesthetic Rhetorical Aims: Personification',
          explanationAr: 'التشخيص هو بث الحياة الإنسانية في الجمادات والمعنويات بجعلها تتكلم أو تبتسم كالإنسان، مما يقرب المعنى ويثير العاطفة.',
          explanationEn: 'Personification (التشخيص) animates inanimate and abstract concepts with human agency and traits.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lit-2',
    order: 2,
    titleAr: 'المحاضرة 2: الاستعارة المكنية والتصريحية وسر البلاغة الجمالية',
    titleEn: 'Lecture 2: Implicit & Explicit Metaphors and Aesthetic Eloquence',
    subtitleAr: 'التمييز الدقيق بين الاستعارة المكنية والتصريحية، وفهم علاقة المشابهة مع قرينة مانعة تمنع إرادة المعنى الحقيقي',
    subtitleEn: 'Master implicit (Makniyyah) and explicit (Tasrihiyyah) metaphors with context clues (Qarinah) and aesthetic personification.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-1',
    prerequisiteTitleAr: 'المحاضرة 1: علم البيان: التشبيه وأركانه وأثره البلاغي في المعنى',
    prerequisiteTitleEn: 'Lecture 1: Rhetoric & Imagery: Simile and Its Semantic Aesthetics',

    gradeLevelNameAr: 'الصف الثاني ثانوي - المرحلة الثانوية (مسار اللغة العربية والإنسانيات)',
    gradeLevelNameEn: 'Grade 11 / High School - Arabic Literature & Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: علم البيان والتصوير الفني',
    unitTitleEn: 'Unit 1: Imagery, Rhetoric & Artistic Expression',
    lessonNumberAr: 'الدرس 2: الاستعارة: المكنية والتصريحية وأسرار الجمال',
    lessonNumberEn: 'Lesson 2: Metaphor: Implicit, Explicit & Aesthetic Values',

    warmupHookAr: 'حين قال الشاعر يصف هول المصيبة: "وَإِذَا المَنِيَّةُ أَنْشَبَتْ أَظْفَارَهَا ... أَلْفَيْتَ كُلَّ تَمِيمَةٍ لَا تَنْفَعُ"، هل للموت أظفار كالحيوان المفترس؟ بالتأكيد لا! لكن الشاعر استعار أظفار الوحش الكاسر وألصقها بالموت ليجسد شراسته وفتكه. الاستعارة هي تشبيه حذف أحد طرفيه لتتحد الحقيقة بالخيال؛ فكيف تفرق بين أن تحذف المشبه أو تحذف المشبه به؟ وكيف تكتشف "القرينة" التي تمنع المعنى الحقيقي؟',
    warmupHookEn: 'Metaphors transform abstract ideas into living entities by borrowing attributes. Discover how omitting either tenor or vehicle births poetic power.',

    learningOutcomesAr: [
      'أن يعرّف الطالب الاستعارة باعتبارها تشبيهاً بليغاً حُذف أحد طرفيه مع وجود قرينة مانعة',
      'أن يفرّق بدقة بين الاستعارة المكنية (حذف المشبه به) والاستعارة التصريحية (حذف المشبه)',
      'أن يحدد "القرينة" اللفظية أو الحالية التي تمنع إرادة المعنى الحقيقي',
      'أن يحلل أسرار جمال الاستعارة: التشخيص (بث الحياة في الجماد) والتجسيم (تجسيد المعنويات) والتوضيح'
    ],
    learningOutcomesEn: [
      'Define metaphor as a truncated simile omitting one primary pillar with a context clue (Qarinah)',
      'Differentiate between Makniyyah (implicit) and Tasrihiyyah (explicit) metaphors',
      'Identify textual or contextual clues preventing literal interpretation',
      'Analyze aesthetic aims: personification, concretization, and clarity'
    ],

    vocabulary: [
      {
        termAr: 'الاستعارة (Metaphor / Isti\'arah)',
        termEn: 'Metaphor (Isti\'arah)',
        definitionAr: 'تشبيه حُذف أحد طرفيه الأساسيين (المشبه أو المشبه به) مع وجود علاقة المشابهة وقرينة مانعة من إرادة المعنى الأصلي.',
        definitionEn: 'A figurative trope formed by deleting either the tenor or the vehicle while retaining a prohibitive contextual clue.'
      },
      {
        termAr: 'الاستعارة المكنية (Implicit Metaphor / Makniyyah)',
        termEn: 'Implicit Metaphor (Makniyyah)',
        definitionAr: 'استعارة يُذكر فيها المشبه ويُحذف المشبه به، ويُكنى عنه بشيء من لوازمه وصفاته (مثل: طار الخبر، وبكت السماء).',
        definitionEn: 'A metaphor retaining the tenor while omitting the vehicle, alluding to it via a signature characteristic.'
      },
      {
        termAr: 'الاستعارة التصريحية (Explicit Metaphor / Tasrihiyyah)',
        termEn: 'Explicit Metaphor (Tasrihiyyah)',
        definitionAr: 'استعارة يُحذف فيها المشبه ويُصرّح بلفظ المشبه به مباشرة (مثل: واعتصموا بحبل الله - أي دينه).',
        definitionEn: 'A metaphor omitting the tenor and explicitly declaring the illustrative vehicle.'
      },
      {
        termAr: 'القرينة (Contextual Clue / Qarinah)',
        termEn: 'Contextual Clue (Qarinah)',
        definitionAr: 'اللفظ أو السياق الدال على أن المعنى الحقيقي غير مقصود، بل المقصود هو المعنى المجازي الخيالي.',
        definitionEn: 'The lexical marker or situational context that rules out a literal reading and confirms figurative intent.'
      }
    ],

    keyConceptsAr: [
      'الاستعارة تشبيه حذف أحد طرفيه (المشبه أو المشبه به)',
      'الاستعارة المكنية: ذكر المشبه + حذف المشبه به + إبقاء لازمة من لوازمه',
      'الاستعارة التصريحية: حذف المشبه + التصريح بلفظ المشبه به',
      'دور القرينة في إثبات المجاز ومنع المعنى الحقيقي',
      'أسرار جمال الاستعارة: التشخيص والتجسيم والتوضيح'
    ],
    keyConceptsEn: [
      'Metaphor as Truncated Simile omitting Tenor or Vehicle',
      'Implicit Metaphor (Makniyyah): Tenor retained, Vehicle deleted with trait clue',
      'Explicit Metaphor (Tasrihiyyah): Tenor deleted, Vehicle explicitly uttered',
      'Prohibitive Clue (Qarinah) validating non-literal interpretation',
      'Aesthetic Goals: Personification, Concretization, Illumination'
    ],
    summaryAr: 'في هذه المحاضرة نغوص في جوهر الاستعارة البلاغية؛ نميز بين المكنية التي ترمز للمشبه به بصفاته والتصريحية التي تصرح بالمشبه به، ونحلل الأثر الوجداني والجمالي للتشخيص والتجسيم في روائع الشعر والنثر العربي.',
    summaryEn: 'Master classical Arabic metaphor analysis: distinguishing implicit Makniyyah from explicit Tasrihiyyah tropes, isolating context clues, and evaluating personification aesthetics.',

    sections: [
      {
        titleAr: '1. شجرة الاستعارة: المكنية والتصريحية وفك شفرة القرينة',
        titleEn: '1. Metaphor Schema: Makniyyah vs Tasrihiyyah & Context Clues',
        contentAr: 'الاستعارة في أصلها تشبيه بليغ حُذف أحد طرفيه؛ فإذا ذكرت المشبه وحذفت المشبه به ورمزت له بشيء من خصائصه (كالأظفار للوحش، أو البكاء للإنسان) فأنت أمام "استعارة مكنية" (كنّيت عن المشبه به). وإذا حذفت المشبه وصرّحت بلفظ المشبه به مباشرة (كأن تسمي العالم نبيلاً بالبدر أو البحر) فأنت أمام "استعارة تصريحية". القرينة هي اللفظ الذي ينبه القارئ إلى استحالة المعنى الحقيقي واستدعاء الخيال.',
        contentEn: 'Metaphor is an elliptical simile. Retaining the tenor while alluding to a deleted vehicle via an attribute forms a Makniyyah metaphor; declaring the vehicle while deleting the tenor forms a Tasrihiyyah metaphor.',
        diagram: {
          id: 'diag-lit2-metaphor-tree',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'مخطط شجرة الاستعارة: المكنية والتصريحية وأسرار الجمال',
          titleEn: 'Metaphor Classification Tree: Makniyyah, Tasrihiyyah & Aesthetics',
          captionAr: 'يوضح المخطط كيفية نشوء الاستعارة من التشبيه بحذف أحد الطرفين: فالمكنية تذكر المشبه وتحذف المشبه به، والتصريحية تحذف المشبه وتصرح بالمشبه به، مع بيان أسرار الجمال البلاغي.',
          captionEn: 'Structural comparison: Makniyyah omits the vehicle retaining an attribute; Tasrihiyyah explicitly articulates the vehicle, achieving personification and concretization.',
          diagramType: 'rhetoric_metaphor_map',
          takeawayFormulaAr: 'المكنية = المشبه مَذْكُور + المشبه به مَحْذُوف | التصريحية = المشبه مَحْذُوف + المشبه به مُصَرَّح به',
          takeawayFormulaEn: 'Makniyyah = Tenor present + Vehicle deleted | Tasrihiyyah = Tenor deleted + Vehicle declared',
          keyLabels: [
            { tagAr: 'استعارة مكنية', tagEn: 'Makniyyah (Implicit)', color: '#38bdf8' },
            { tagAr: 'استعارة تصريحية', tagEn: 'Tasrihiyyah (Explicit)', color: '#10b981' },
            { tagAr: 'القرينة المانعة', tagEn: 'Prohibitive Clue', color: '#f59e0b' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (2-1): تفكيك استعارة مكنية واستعارة تصريحية',
          titleEn: 'Worked Example (2-1): Deconstructing Makniyyah & Tasrihiyyah Metaphors',
          equation: 'المشبه + المشبه به (أحدهما محذوف) + القرينة المانعة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'النموذج الأول: "طَارَ الخَبَرُ فِي الْمَدِينَةِ". المشبه: الخبر (مذكور). المشبه به: الطائر (محذوف). القرينة: الفعل "طار" (من صفات الطيور). الحكم: استعارة مكنية سر جمالها التجسيم وسرعة الانتشار.',
              textEn: 'Model 1: "The news flew across town." Tenor: News. Vehicle: Bird (omitted). Clue: "flew". Classification: Makniyyah Metaphor.'
            },
            {
              stepNumber: 2,
              textAr: 'النموذج الثاني: "أَقْبَلَ الْبَدْرُ يَمْشِي إِلَى المِنْبَرِ لِيَخْطُبَ فِي النَّاسِ". المشبه: الخطيب أو العالم (محذوف). المشبه به: البدر (مذكور ومصرح به). القرينة: "يمشي ويخطب" (البدر الحقيقي لا يمشي ولا يخطب). الحكم: استعارة تصريحية.',
              textEn: 'Model 2: "The full moon stepped onto the pulpit to deliver the speech." Tenor: Orator (omitted). Vehicle: Full Moon (declared). Classification: Tasrihiyyah Metaphor.'
            }
          ],
          takeawayAr: 'انظر دائماً إلى اللفظ المذكور: إن كان هو المشبه به فالاستعارة تصريحية، وإن كان المشبه فالاستعارة مكنية.',
          takeawayEn: 'Inspect the stated entity: if it is the vehicle, it is Tasrihiyyah; if it is the tenor, it is Makniyyah.'
        },
        formativeCheck: {
          id: 'fc-lit2-1',
          questionAr: 'في قول المتنبي يصف دخول رسول الروم على سيف الدولة: "وَأَقْبَلَ يَمْشِي فِي البِسَاطِ فَمَا دَرَى ... إِلَى البَحْرِ يَسْعَى أَمْ إِلَى البَدْرِ يَرْتَقِي"، ما نوع الاستعارة في (البحر) و(البدر)؟',
          questionEn: 'In Al-Mutanabbi\'s verse describing the envoy walking towards the prince: "walking to the sea or rising to the moon", what metaphor type is present?',
          optionsAr: [
            'استعارة تصريحية؛ لأنه حذف المشبه (سيف الدولة) وصرح بلفظ المشبه به (البحر والبدر)',
            'استعارة مكنية؛ لأنه ذكر المشبه وحذف المشبه به',
            'تشبيه بليغ كامل الأركان',
            'كناية عن نسبة'
          ],
          optionsEn: [
            'Tasrihiyyah (Explicit Metaphor); tenor (prince) is omitted and vehicles (sea, moon) are declared',
            'Makniyyah (Implicit Metaphor)',
            'Complete Eloquent Simile',
            'Metonymy of attribution'
          ],
          correctIndex: 0,
          explanationAr: 'شبه الشاعر الأمير (سيف الدولة) بالبحر في الكرم وبالبدر في الرفعة والضياء، وحذف المشبه (الأمير) وصرّح بلفظ المشبه به (البحر، البدر)، فهي استعارة تصريحية.',
          explanationEn: 'The poet omits the prince and explicitly utters the vehicles "sea" and "full moon", forming explicit metaphors.',
          hintAr: 'هل ذُكر لفظ سيف الدولة أم استُبدل مباشرة بلفظ البحر والبدر؟'
        },
        tipsAr: [
          'الاستعارة المكنية ملازمة دائماً للتشخيص عندما تمنح الجماد أو المعنى أفعال الكائنات الحية.',
          'القرينة هي الضمانة التي تمنع فهم الكلام على حقيقته الفيزيائية.'
        ]
      },
      {
        titleAr: '2. أسرار الجمال البلاغي: التشخيص والتجسيم والتوضيح',
        titleEn: '2. Rhetorical Aesthetic Aims: Personification, Concretization & Clarification',
        contentAr: 'لا تأتي الاستعارة لمجرد الزينة اللفظية، بل تؤدي وظائف دلالية ووجدانية كبرى تنقسم إلى ثلاثة أسرار جمالية رئيسية:\n1. التشخيص (Tashkhees): منح الجمادات والمعنويات صفات الأشخاص العاقلين، كأن تتحدث الجبال أو تبتسم الآمال.\n2. التجسيم (Tajseem): تحويل الأمور المعنوية المجردة (كالعدل، العلم، الحزن، اليأس) إلى صور مادية مجسمة ذات أبعاد تلمسها الحواس (مثل: "افترس اليأس قلبه"، "نسج خيوط الأمل").\n3. التوضيح (Tawdeeh): توضيح الفكرة حين يكون الطرفان من نفس الطبيعة (مادي بمادي أو معنوي بمعنوي).',
        contentEn: 'Metaphor achieves three core aesthetic purposes: Personification (endowing non-humans with human agency), Concretization (transforming abstract concepts into tangible physical entities), and Clarification.',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (2-2): تحديد سر الجمال في شواهد بلاغية',
          titleEn: 'Worked Example (2-2): Determining Aesthetic Aims in Classical Texts',
          equation: 'المعنى المجرد + صورة مجسمة/شخصية = سر الجمال',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الشاهد الأول: "شَكَتْ إِلَيَّ جِمَالِي طُولَ السُّرَى". شُبهت الجمال بإنسان يشكو (تشخيص؛ بث الحياة والعقل في غير العاقل).',
              textEn: 'Quote 1: "My camels complained of the long nocturnal journey." Personification (Tashkhees).'
            },
            {
              stepNumber: 2,
              textAr: 'الشاهد الثاني: "حَطَّمَ الصَّبْرُ قُيُودَ الْهَوَانِ". الصبر معنى مجرد شُبه بآلة صلبة تحطم القيود (تجسيم؛ تحويل المعنوي إلى مادي ملموس).',
              textEn: 'Quote 2: "Patience shattered the shackles of humiliation." Concretization (Tajseem).'
            }
          ],
          takeawayAr: 'إذا كان المشبه به شخصاً عاقلاً فالسر هو التشخيص، وإذا كان المشبه به جسماً مادياً لمشبه معنوي فالسر هو التجسيم.',
          takeawayEn: 'If the vehicle is a human person, the effect is Personification; if an abstract concept is given physical form, it is Concretization.'
        },
        tipsAr: ['التشخيص يجعل النص ينبض بالحياة والمشاعر الإنسانية، والتجسيم يرسخ المعنى في الأذهان بصرياً.']
      }
    ],

    conceptMapSummaryAr: 'الاستعارة: تشبيه حذف أحد طرفيه. مكنية (ذكر المشبه + حذف المشبه به + قرينة لازمة) مثل: "بكت السماء". تصريحية (حذف المشبه + التصريح بالمشبه به) مثل: "واعتصموا بحبل الله". أسرار الجمال: التشخيص، التجسيم، التوضيح.',
    conceptMapSummaryEn: 'Metaphor: Truncated simile. Makniyyah (Tenor + deleted vehicle + clue). Tasrihiyyah (Deleted tenor + declared vehicle). Aesthetics: Personification, Concretization, Clarity.',

    goldenRulesAr: [
      'القاعدة 1: الاستعارة هي في الأصل تشبيه بليغ حُذف أحد طرفيه (المشبه أو المشبه به).',
      'القاعدة 2: إذا ذُكر المشبه وحُذف المشبه به ودلّت عليه صفة من صفاته فالاستعارة مكنية.',
      'القاعدة 3: إذا حُذف المشبه وصُرّح بلفظ المشبه به مباشرة في السياق فالاستعارة تصريحية.',
      'القاعدة 4: لا تصح الاستعارة بلا "قرينة" تمنع إرادة المعنى الحقيقي للفظ.',
      'القاعدة 5: سر الجمال هو "التشخيص" إذا شُبّه غير العاقل (جماد أو معنوي) بإنسان عاقل.',
      'القاعدة 6: سر الجمال هو "التجسيم" إذا حُوّل الأمر المعنوي المجرد إلى كائن أو جسم مادي ملموس.',
      'القاعدة 7: الاستعارة أبلغ من التشبيه الصريح لأنها تدعي أن المشبه هو عين المشبه به لا مجرد شبيه له.'
    ],
    goldenRulesEn: [
      'Rule 1: Metaphor is fundamentally an eloquent simile with one pillar deleted.',
      'Rule 2: Tenor stated + Vehicle omitted with trait marker = Makniyyah (Implicit).',
      'Rule 3: Tenor omitted + Vehicle explicitly declared = Tasrihiyyah (Explicit).',
      'Rule 4: A prohibitive contextual clue (Qarinah) is mandatory to establish figurative meaning.',
      'Rule 5: Personification occurs when non-human entities receive human agency and attributes.',
      'Rule 6: Concretization occurs when abstract intangibles are rendered as physical solid bodies.',
      'Rule 7: Metaphors surpass similes by asserting complete ontological identity rather than mere resemblance.'
    ],

    textbookExercises: [
      {
        id: 'ex-lit-2-1',
        questionAr: 'اشرح الاستعارة وبين نوعها وسر جمالها في قوله تعالى: "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ".',
        questionEn: 'Explain the metaphor type and aesthetic value in the Quranic verse: "to bring mankind out of darknesses into light".',
        solutionStepsAr: [
          '1. المعنى الحقيقي المراد: إخراج الناس من الكفر والضلال إلى الإيمان والهدى.',
          '2. المشبه: الكفر والضلال (محذوف)، والهدى والإيمان (محذوف).',
          '3. المشبه به: الظلمات (مذكور ومصرح به)، والنور (مذكور ومصرح به).',
          '4. القرينة: سياق إنزال الكتاب وهداية البشر تمنع إرادة الظلام الحسي الحقيقي.',
          '5. نوع الاستعارة: استعارة تصريحية في كلمتي (الظلمات) و(النور).',
          '6. سر الجمال: التجسيم وتوضيح أثر الإيمان في إنارة بصيرة الإنسان.'
        ],
        solutionStepsEn: [
          '1. Intended sense: guidance from disbelief/misguidance into faith/enlightenment.',
          '2. Tenor: Disbelief and Faith (both omitted).',
          '3. Vehicle: Darknesses and Light (both explicitly stated).',
          '4. Classification: Explicit Metaphors (Tasrihiyyah).',
          '5. Aesthetic value: Concretization and vivid illumination.'
        ],
        answerAr: 'استعارة تصريحية في كلمتي (الظلمات) و(النور)؛ حُذف المشبه (الكفر والإيمان) وصُرّح بلفظ المشبه به، وسر جمالها التجسيم والتوضيح.',
        answerEn: 'Tasrihiyyah in "Darknesses" and "Light"; tenors omitted, vehicles stated. Aesthetic value: Concretization.'
      },
      {
        id: 'ex-lit-2-2',
        questionAr: 'حدد نوع الاستعارة في قول الحجاج بن يوسف الثقفي: "إِنِّي لأَرَى رُؤُوساً قَدْ أَيْنَعَتْ وَحَانَ قِطَافُهَا وَإِنِّي لَصَاحِبُهَا".',
        questionEn: 'Identify the metaphor in Al-Hajjaj\'s speech: "I see heads that have ripened and whose harvest has arrived".',
        solutionStepsAr: [
          '1. المشبه: رؤوس المتمردين (مذكور).',
          '2. المشبه به: الثمار والفواكه الناضجة (محذوف).',
          '3. القرينة الدالة: قوله "أينعت وحان قطافها"؛ فالإيناع والقطاف من صفات الثمار لا الرؤوس البشرية.',
          '4. نوع الاستعارة: استعارة مكنية رائعة ومؤثرة.',
          '5. سر الجمال: التجسيم وإبراز هول الوعيد والقدرة على حسم الأمر.'
        ],
        solutionStepsEn: [
          '1. Tenor: Heads of rebels (stated).',
          '2. Vehicle: Ripe fruits (deleted).',
          '3. Trait clue: "Ripened and ready for harvest".',
          '4. Classification: Makniyyah (Implicit Metaphor).',
          '5. Aesthetic value: Vivid concretization and dramatic menace.'
        ],
        answerAr: 'استعارة مكنية؛ شُبهت الرؤوس بالثمار، وحُذف المشبه به ورُمز له بشيء من لوازمه (أينعت وحان قطافها).',
        answerEn: 'Makniyyah Metaphor: Heads compared to ripe harvest fruits with vehicle omitted.'
      }
    ],

    assessment: {
      id: 'quiz-lit-2',
      lectureId: 'lit-2',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 2: الاستعارة المكنية والتصريحية وأسرار البلاغة',
      titleEn: 'Mastery Assessment 2: Metaphors & Rhetorical Aesthetics',
      passingScore: 80,
      questions: [
        {
          id: 'ql2-1',
          textAr: 'في جملة "تَحَدَّثَ التَّارِيخُ عَنْ أَمْجَادِ أُمَّتِنَا وَبَطُولَاتِهَا"، ما نوع الاستعارة وسر جمالها؟',
          textEn: 'In "History spoke of our nation\'s glory", what is the metaphor type and its aesthetic effect?',
          optionsAr: [
            'استعارة مكنية، وسر جمالها التشخيص (منح التاريخ صفة الإنسان المتحدث)',
            'استعارة تصريحية، وسر جمالها التوضيح',
            'تشبيه تمثيلي مركب',
            'كناية عن موصوف'
          ],
          optionsEn: [
            'Makniyyah (Implicit Metaphor), aesthetic effect is Personification',
            'Tasrihiyyah (Explicit Metaphor), aesthetic effect is Clarification',
            'Composite Simile',
            'Metonymy'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الاستعارة المكنية وسر الجمال (التشخيص)',
          conceptTestedEn: 'Implicit Metaphor & Personification',
          explanationAr: 'شُبِّه التاريخ بإنسان يتحدث، وحُذف المشبه به (الإنسان) ورُمز إليه بلازمة من لوازمه وهي الحديث (استعارة مكنية)، وسر جمالها التشخيص.',
          explanationEn: 'History is personified as a human speaker; the human vehicle is omitted leaving speech as the attribute (Makniyyah, Personification).',
          difficulty: 'easy'
        },
        {
          id: 'ql2-2',
          textAr: 'ما الفرق البنيوي الجوهري بين الاستعارة المكنية والاستعارة التصريحية؟',
          textEn: 'What is the fundamental structural distinction between Makniyyah and Tasrihiyyah metaphors?',
          optionsAr: [
            'المكنية يُذكر فيها المشبه ويُحذف المشبه به، بينما التصريحية يُحذف فيها المشبه ويُصرّح بالمشبه به',
            'المكنية تختص بالشعر فقط بينما التصريحية بالنثر فقط',
            'المكنية لا تحتاج إلى قرينة بينما التصريحية تشترط القرينة',
            'المكنية تحذف الطرفين معاً'
          ],
          optionsEn: [
            'Makniyyah retains tenor and deletes vehicle; Tasrihiyyah deletes tenor and declares vehicle',
            'Makniyyah is poetry-only; Tasrihiyyah prose-only',
            'Makniyyah needs no clue',
            'Makniyyah deletes both pillars'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفروق البنيوية بين أقسام الاستعارة',
          conceptTestedEn: 'Structural Tenor/Vehicle Taxonomy',
          explanationAr: 'في المكنية نذكر المشبه ونحذف المشبه به (مع إبقاء لوازمه)، وفي التصريحية نحذف المشبه ونصرّح بلفظ المشبه به مباشرة.',
          explanationEn: 'Makniyyah states tenor and omits vehicle; Tasrihiyyah omits tenor and explicitly names vehicle.',
          difficulty: 'medium'
        },
        {
          id: 'ql2-3',
          textAr: 'في قول الشاعر: "فَأَمْطَرَتْ لُؤْلُؤاً مِنْ نَرْجِسٍ وَسَقَتْ ... وَرْداً وَعَضَّتْ عَلَى العُنَّابِ بِالبَرَدِ"، كم استعارة تصريحية وردت في هذا البيت الشهير؟',
          textEn: 'In the famous verse describing tears like pearls from narcissus eyes upon rose cheeks, how many explicit metaphors are present?',
          optionsAr: [
            'خمس استعارات تصريحية: (اللؤلؤ = الدموع)، (النرجس = العيون)، (الورد = الخدود)، (العناب = الأنامل)، (البرد = الأسنان)',
            'استعارتان فقط',
            'استعارة مكنية واحدة وتشبيهان',
            'خمس استعارات مكنية'
          ],
          optionsEn: [
            '5 Tasrihiyyah metaphors: Pearls (Tears), Narcissus (Eyes), Roses (Cheeks), Jujubes (Fingertips), Hail (Teeth)',
            '2 Metaphors only',
            '1 Makniyyah and 2 similes',
            '5 Makniyyah metaphors'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعدد الاستعارات التصريحية المتتابعة في بيت واحد',
          conceptTestedEn: 'Consecutive Tasrihiyyah Identification',
          explanationAr: 'حذف الشاعر 5 مشبهات وصرح بـ 5 مشبهات بها: اللؤلؤ (الدمع)، النرجس (العيون)، الورد (الخدود)، العناب (الأنامل المخضبة)، البرد (الأسنان البيضاء).',
          explanationEn: 'The poet crafted 5 consecutive Tasrihiyyah metaphors by stating vehicles for tears, eyes, cheeks, fingers, and teeth.',
          difficulty: 'hard'
        },
        {
          id: 'ql2-4',
          textAr: 'ما هو سر الجمال في قولنا: "نَسَجَ الْأَمَلُ ثَوْباً مِنَ النُّورِ لِلْمُجْتَهِدِ"؟',
          textEn: 'What is the primary aesthetic effect of attributing cloth-weaving to abstract hope?',
          optionsAr: [
            'التجسيم (تحويل الأمل وهو معنى مجرد إلى شيء مادي ينسج ثوباً) والتشخيص',
            'الطباق السلبي',
            'الجناس الناقص الصوتي',
            'التورية المعنوية'
          ],
          optionsEn: [
            'Concretization (Tajseem) and Personification of abstract hope into a weaving craftsman',
            'Negative Antithesis',
            'Phonetic Jinas',
            'Tawriyah'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أسرار الجمال: التجسيم والتشخيص',
          conceptTestedEn: 'Aesthetic Effect: Tajseem & Tashkhees',
          explanationAr: 'جعل الأمل كائناً ينسج (تشخيص) وصور الأمل والنور في هيئة ثوب مادي ملموس (تجسيم)، مما يضفي بهجة وتجسيداً بصرياً رائعاً للمشاعر.',
          explanationEn: 'Hope is personified as a weaver and visualized as a tangible garment, unifying Tashkhees and Tajseem.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lit-3',
    order: 3,
    titleAr: 'المحاضرة 3: علم البديع: المحسنات اللفظية والمعنوية وأثرها الصوتي',
    titleEn: 'Lecture 3: Rhetorical Figures: Verbal & Semantic Embellishments',
    subtitleAr: 'دراسة الجناس، والسجع، والتصريع، والطباق، والمقابلة، والتورية، ودورها في تعزيز الإيقاع والدلالة',
    subtitleEn: 'Master complete/partial paronomasia (Jinas), prose cadence (Saj), poetic opening rhyme (Tasree), antithesis (TibaQ), and multi-polarity contrasts (Muqabalah).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-2',
    prerequisiteTitleAr: 'المحاضرة 2: الاستعارة المكنية والتصريحية وسر البلاغة الجمالية',
    prerequisiteTitleEn: 'Lecture 2: Implicit & Explicit Metaphors and Aesthetic Eloquence',

    gradeLevelNameAr: 'الصف الثاني ثانوي - المرحلة الثانوية (مسار اللغة العربية والإنسانيات)',
    gradeLevelNameEn: 'Grade 11 / High School - Arabic Literature & Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: علم البديع والمحسنات البلاغية',
    unitTitleEn: 'Unit 2: Rhetorical Embellishment & Stylistic Aesthetics',
    lessonNumberAr: 'الدرس 1: المحسنات اللفظية والمعنوية وأسرارها الموسيقية والدلالية',
    lessonNumberEn: 'Lesson 1: Verbal & Semantic Figures of Speech',

    warmupHookAr: 'تأمل روعة البيان في قوله تعالى: "وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ"! كلمتان متطابقتان تماماً في الحروف والترتيب، لكن الأولى تعني "يوم القيامة" والأخرى تعني "مدة وجيزة من الزمن". هذا هو سحر "علم البديع"؛ العلم الذي يزين الألفاظ بنغمات موسيقية تطرب لها الآذان (المحسنات اللفظية)، ويعمق المعاني بإبراز التضاد والتوافق الذي يرسخ الفكرة في الأذهان (المحسنات المعنوية).',
    warmupHookEn: 'Ilm al-Badi harmonizes euphonic phonetic resonance with profound semantic depth through symmetry, rhyme, and antithesis.',

    learningOutcomesAr: [
      'أن يصنف الطالب فنون علم البديع إلى محسنات لفظية ومحسنات معنوية بدقة',
      'أن يميز بين الجناس التام والجناس الناقص وشروط تطابق الكلمات الأربعة (النوع، العدد، الترتيب، الحركات)',
      'أن يحلل فن السجع والتصريع في النثر والشعر وأثرهما الإيقاعي والموسيقي',
      'أن يفرّق بين الطباق (تضاد كلمتين) والمقابلة (تضاد جملتين أو أكثر على الترتيب) والتورية'
    ],
    learningOutcomesEn: [
      'Classify rhetorical figures into verbal (phonetic) and semantic categories',
      'Distinguish Complete vs Incomplete Jinas based on 4 criteria (type, count, order, vocalization)',
      'Analyze prose cadence (Saj) and verse rhyming (Tasree)',
      'Differentiate single antithesis (TibaQ) from structured parallel contrasts (Muqabalah)'
    ],

    vocabulary: [
      {
        termAr: 'علم البديع (Ilm Al-Badi\')',
        termEn: 'Ilm Al-Badi (Aesthetic Ornamentation)',
        definitionAr: 'علم بلاغي يُعرف به وجوه تحسين الكلام وتزيينه بعد مطابقة المعنى لمقتضى الحال، وينقسم إلى محسنات لفظية ومعنوية.',
        definitionEn: 'The classical Arabic rhetorical science of verbal and conceptual embellishment.'
      },
      {
        termAr: 'الجناس (Paronomasia / Jinas)',
        termEn: 'Paronomasia (Jinas)',
        definitionAr: 'تشابه كلمتين في اللفظ مع اختلافهما التام في المعنى؛ تام إذا تطابقت الكلمتان في أربعة أمور، وناقص إذا اختلفت في أحدها.',
        definitionEn: 'Phonetic similarity between words carrying divergent semantic meanings (Complete vs Partial).'
      },
      {
        termAr: 'السجع (Prose Rhyme / Saj\')',
        termEn: 'Prose Rhyme (Saj\')',
        definitionAr: 'توافق الحرف الأخير في فواصل الجمل النثرية مما يحدث جرساً موسيقياً عذباً.',
        definitionEn: 'Rhyming cadence at the terminations of consecutive prose clauses.'
      },
      {
        termAr: 'المقابلة (Multi-Polar Antithesis / Muqabalah)',
        termEn: 'Structured Contrast (Muqabalah)',
        definitionAr: 'أن يؤتى بمعنيين أو أكثر ثم يؤتى بما يقابل ذلك على الترتيب (مثل: "يحل لهم الطيبات ويحرم عليهم الخبائث").',
        definitionEn: 'Syntactic arrangement where two or more concepts are paired with sequential opposing counterparts.'
      }
    ],

    keyConceptsAr: [
      'أقسام البديع: المحسنات اللفظية (الجناس، السجع، التصريع) والمحسنات المعنوية (الطباق، المقابلة، التورية)',
      'الجناس التام وشروطه الأربعة (نوع الحروف، عددها، ترتيبها، ضبطها بالشكل)',
      'السجع وفواصل النثر، والتصريع في مطلع القصائد الشعرية',
      'الطباق الإيجابي (أبيض/أسود) والطباق السلبي (يعلمون/لا يعلمون)',
      'المقابلة: تضاد مركب متعدد على الترتيب',
      'سر بلاغة البديع: إيقاع صوتي عذب وإبراز المعنى بضده'
    ],
    keyConceptsEn: [
      'Verbal vs Semantic Figures Classification',
      'Four Criteria for Complete Jinas',
      'Prose Saj Cadence & Poetic Opening Tasree',
      'Positive vs Negative Antithesis (TibaQ)',
      'Multi-Element Ordered Oppositions (Muqabalah)',
      'Aesthetic Function: Phonetic Harmony & Conceptual Contrast'
    ],
    summaryAr: 'نستكشف في هذا الدرس روائع علم البديع بشقيه؛ فنتذوق الجرس الموسيقي الأخاذ في الجناس والسجع والتصريع، ونتعلم كيف تبرز الأضداد جمال المعنى في الطباق والمقابلة والتورية الرائعة.',
    summaryEn: 'Explore verbal music and semantic brilliance through Jinas, Saj, Tasree, TibaQ, and Muqabalah.',

    sections: [
      {
        titleAr: '1. المحسنات اللفظية: الجناس، والسجع، والتصريع',
        titleEn: '1. Verbal Embellishments: Jinas, Saj & Tasree',
        contentAr: 'المحسنات اللفظية هي الأساليب التي تُعنى بجمال اللفظ وإيقاعه الصوتي:\n1. الجناس: تشابه كلمتين في النطق مع اختلاف المعنى؛ وهو تام إن تطابقت الكلمتان في (نوع الحروف، عددها، ترتيبها، وحركاتها) مثل "ساعة / ساعة"، وناقص إن اختلف شرط منها مثل "عَبْرَة (دمعة) / عِبْرَة (عظة)".\n2. السجع: توافق الحروف الأخيرة في فواصل الجمل النثرية (مثل: "الصومُ حِرمانٌ مشروع، وتأديبٌ بالْجُوع، وخُشوعٌ لِلرَّبِّ الْمَتْبُوع").\n3. التصريع: اتفاق قافيتي شطري البيت الأول في القصيدة الشعرية لإعلان الإيقاع الموسيقي للقصيدة.',
        contentEn: 'Verbal tropes elevate phonetic resonance: Jinas exploits lexical homophony, Saj provides rhyming prose cadences, and Tasree unifies opening verse hemistichs.',
        diagram: {
          id: 'diag-lit3-badi-map',
          figureNumberAr: 'شكل (3-1)',
          figureNumberEn: 'Figure (3-1)',
          titleAr: 'خريطة علم البديع: تصنيف المحسنات اللفظية والمعنوية',
          titleEn: 'Ilm Al-Badi Taxonomy: Verbal & Semantic Figures',
          captionAr: 'مخطط تصنيفي يبين تقسيم علم البديع إلى محسنات لفظية تمنح جرساً موسيقياً عذباً (الجناس، السجع، التصريع) ومحسنات معنوية تعمق وتبرز الفكرة (الطباق، المقابلة، التورية).',
          captionEn: 'Comprehensive taxonomy contrasting musical verbal embellishments with concept-deepening semantic figures.',
          diagramType: 'rhetoric_badi_map',
          takeawayFormulaAr: 'المحسنات اللفظية = جرس موسيقي وإيقاع | المحسنات المعنوية = إبراز المعنى وتوكيد الفكرة',
          takeawayFormulaEn: 'Verbal Figures = Musical Cadence | Semantic Figures = Conceptual Contrast & Depth',
          keyLabels: [
            { tagAr: 'جناس تام وناقص', tagEn: 'Complete & Partial Jinas', color: '#38bdf8' },
            { tagAr: 'سجع وتصريع', tagEn: 'Saj & Tasree', color: '#f59e0b' },
            { tagAr: 'طباق ومقابلة', tagEn: 'TibaQ & Muqabalah', color: '#ec4899' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (3-1): التمييز بين الجناس التام والجناس الناقص',
          titleEn: 'Worked Example (3-1): Distinguishing Complete vs Partial Jinas',
          equation: 'تطابق نوع الحروف + عددها + ترتيبها + حركاتها',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المثال 1: "صَلَّيْتُ المَغْرِبَ فِي أَحَدِ مَسَاجِدِ المَغْرِبِ". الكلمتان: المغرب (صلاة) والمغرب (دولة/جهة). الشروط الأربعة متطابقة تماماً => جناس تام.',
              textEn: 'Example 1: "I prayed Maghrib in Maghrib (Morocco)." Identical phonetics across all 4 criteria => Complete Jinas.'
            },
            {
              stepNumber: 2,
              textAr: 'المثال 2: "بِيضُ الصَّفَائِحِ لَا سُودُ الصَّحَائِفِ". الكلمتان: الصفائح والصحائف. اختلف ترتيب الحروف (ف-ا-ئ-ح مقابل ح-ا-ئ-ف) => جناس ناقص.',
              textEn: 'Example 2: "Safaa-ih vs Sahaa-if". Letter order rearranged => Incomplete Jinas.'
            }
          ],
          takeawayAr: 'الجناس التام يتطلب التطابق الكامل بنسبة 100% مع تباين المعنى كلياً.',
          takeawayEn: 'Complete Jinas demands flawless phonetic matching paired with absolute semantic divergence.'
        },
        tipsAr: ['الجناس المتكلف يفسد الأسلوب؛ سر بلاغة البديع أن ينساب عفوياً مع المعنى.']
      },
      {
        titleAr: '2. المحسنات المعنوية: الطباق والمقابلة والتورية',
        titleEn: '2. Semantic Figures: Antithesis (TibaQ), Ordered Parallelism (Muqabalah) & Double Entendre',
        contentAr: 'المحسنات المعنوية تُعنى بتعزيز المعنى وتعميقه:\n1. الطباق: الجمع بين لفظين متضادين؛ وهو طباق إيجاب إذا كان بين كلمتين مثبتتين (مثل: "الْأَعْمَى وَالْبَصِيرُ"، "تَحْسَبُهُمْ أَيْقَاظاً وَهُمْ رُقُودٌ")، وطباق سلب إذا كان بين الكلمة ونفيها (مثل: "فَلَا تَخْشَوُا النَّاسَ وَاخْشَوْنِ").\n2. المقابلة: أن يؤتى بمعنيين أو أكثر ثم يؤتى بما يقابل ذلك على الترتيب؛ وهي أوسع وأبلغ من الطباق (مثل: "فَلْيَضْحَكُوا قَلِيلاً وَلْيَبْكُوا كَثِيراً" - ضحك يقابله بكاء، وقليلاً يقابله كثيراً).\n3. التورية: لفظ مفرد له معنيان: معنى قريب غير مقصود، ومعنى بعيد هو المراد المقصود.',
        contentEn: 'Semantic figures enrich meaning: TibaQ pairs single antonyms (positive or negative), Muqabalah structures ordered multi-word oppositions, and Tawriyah plays on double entendres.',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (3-2): التمييز الدقيق بين الطباق والمقابلة',
          titleEn: 'Worked Example (3-2): Contrasting Single Antithesis with Multi-Element Muqabalah',
          equation: 'تضاد لفظين = طباق | تضاد جملتين مرتبين = مقابلة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الآية الأولى: "وَأَنَّهُ هُوَ أَضْحَكَ وَأَبْكَى". التضاد بين لفظين منفردين (أضحك ضد أبكى) => طباق إيجاب.',
              textEn: 'Verse 1: "He brings laughter and brings tears." Single word pair => Positive TibaQ.'
            },
            {
              stepNumber: 2,
              textAr: 'الآية الثانية: "يُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ". المعنى الأول: (يحل + الطيبات) يقابله على الترتيب: (يحرم + الخبائث) => مقابلة بديعية رائعة (2 ضد 2).',
              textEn: 'Verse 2: "Permits good things and forbids foul things." Sequential multi-word pairs => Muqabalah (2 vs 2).'
            }
          ],
          takeawayAr: 'المقابلة هي في الحقيقة طباق متعدد منظم على التوالي بين تراكيب متقابلة.',
          takeawayEn: 'Muqabalah functions as an orchestrated sequential multi-dimensional antithesis.'
        },
        tipsAr: ['"وبضدها تتبين الأشياء"؛ التضاد في الطباق والمقابلة يقوي الفكرة ويجلو غموضها.']
      }
    ],

    conceptMapSummaryAr: 'علم البديع: محسنات لفظية (جناس تام وناقص، سجع فواصل، تصريع مطالع) تضفي جرساً موسيقياً. محسنات معنوية (طباق إيجاب وسلب، مقابلة مرتبة، تورية) توضح وتعمق المعنى.',
    conceptMapSummaryEn: 'Ilm al-Badi: Verbal figures (Complete/Partial Jinas, Saj, Tasree) evoke musical cadence. Semantic figures (TibaQ, Muqabalah, Tawriyah) sharpen and intensify meaning.',

    goldenRulesAr: [
      'القاعدة 1: علم البديع ينقسم إلى قسمين رئيسيين: محسنات لفظية ومحسنات معنوية.',
      'القاعدة 2: الجناس التام يشترط تطابق الكلمتين في: نوع الحروف، وعددها، وترتيبها، وحركاتها مع تباين المعنى.',
      'القاعدة 3: الجناس الناقص يحدث إذا اختلفت الكلمتان في واحد فقط من الشروط الأربعة.',
      'القاعدة 4: السجع يختص بالنثر وهو توافق الحروف الأخيرة في فواصل الجمل.',
      'القاعدة 5: التصريع يختص بالشعر ويكون في مطلع القصيدة (البيت الأول) باتفاق قافيتي الشطرين.',
      'القاعدة 6: الطباق تضاد بين كلمتين منفردتين (إيجاب: ليل/نهار، سلب: يعلم/لا يعلم).',
      'القاعدة 7: المقابلة تضاد تركيبي بين معنيين أو أكثر وما يقابلها على الترتيب في الجملة اللاحقة.'
    ],
    goldenRulesEn: [
      'Rule 1: Badi figures split strictly into verbal (phonetic) and semantic categories.',
      'Rule 2: Complete Jinas demands identity in letter types, counts, order, and diacritics.',
      'Rule 3: Partial Jinas occurs if any one of the 4 conditions diverges.',
      'Rule 4: Saj is prose clause end-rhyming.',
      'Rule 5: Tasree is the rhyming symmetry of the first verse hemistichs in classical poetry.',
      'Rule 6: TibaQ pairs single contrasting words (positive or negated).',
      'Rule 7: Muqabalah orchestrates structured sequential contrasts between multi-word clauses.'
    ],

    textbookExercises: [
      {
        id: 'ex-lit-3-1',
        questionAr: 'استخرج المحسنات البديعية وبين نوعها في قول الشاعر: "السَّيْفُ أَصْدَقُ أَنْبَاءً مِنَ الكُتُبِ ... فِي حَدِّهِ الحَدُّ بَيْنَ الجِدِّ وَاللَّعِبِ".',
        questionEn: 'Extract and classify rhetorical figures in Abu Tammam\'s famous opening verse on the sword and books.',
        solutionStepsAr: [
          '1. في مطلع البيت: اتفاق نهاية الشطر الأول "الكتبِ" ونهاية الشطر الثاني "اللعبِ" في القافية والوزن => (تصريع).',
          '2. بين كلمتي "حَدِّهِ" (شفرة السيف) و"الحَدُّ" (الفاصل والحاجز) => (جناس تام في اللفظ مع اختلاف المعنى).',
          '3. بين كلمتي "الجِدِّ" و"اللَّعِبِ" => (طباق إيجاب يوضح المعنى ويقويه).'
        ],
        solutionStepsEn: [
          '1. Rhyming between hemistich ends (Al-Kutubi / Al-La\'ibi) => Tasree.',
          '2. Wordplay on "Haddihi" (blade) and "Al-Hadd" (boundary) => Complete Jinas.',
          '3. Contrast between "Al-Jidd" (earnestness) and "Al-La\'ib" (frivolity) => Positive TibaQ.'
        ],
        answerAr: '1. تصريع بين (الكتب واللعب) • 2. جناس تام بين (حده والحد) • 3. طباق إيجاب بين (الجد واللعب).',
        answerEn: '1. Tasree (Opening rhyme) • 2. Jinas on "Hadd" • 3. TibaQ (Earnestness vs Play).'
      },
      {
        id: 'ex-lit-3-2',
        questionAr: 'بين نوع المحسن البديعي في قوله تعالى: "فَأَمَّا مَنْ أَعْطَى وَاتَّقَى * وَصَدَّقَ بِالْحُسْنَى * فَسَنُيَسِّرُهُ لِلْيُسْرَى * وَأَمَّا مَنْ بَخِلَ وَاسْتَغْنَى * وَكَذَّبَ بِالْحُسْنَى * فَسَنُيَسِّرُهُ لِلْعُسْرَى".',
        questionEn: 'Identify the structural rhetorical figure across these paired Quranic passages.',
        solutionStepsAr: [
          '1. المقطع الأول يذكر: (أعطى + اتقى + صدق + لليسرى).',
          '2. المقطع الثاني يذكر ما يقابلها جميعاً على الترتيب: (بخل + استغنى + كذب + للعسرى).',
          '3. تضاد متسلسل متعدد مرتب بين جملتين كاملتين => مقابلة بديعية في غاية الإعجاز والجمال، مع وجود سجع فواصل متوازن.'
        ],
        solutionStepsEn: [
          '1. Passage 1 states: (Give + Fear God + Affirm truth + Ease).',
          '2. Passage 2 parallels directly: (Withhold + Self-sufficient + Deny truth + Hardship).',
          '3. Classification: Masterful Muqabalah paired with harmonic clause endings (Saj).'
        ],
        answerAr: 'مقابلة بديعية متكاملة بين صفات المؤمن المنفق وجزائه وصفات البخيل المكذب ومصيره.',
        answerEn: 'Profound structural Muqabalah contrasting righteous benevolence with obstinate miserliness.'
      }
    ],

    assessment: {
      id: 'quiz-lit-3',
      lectureId: 'lit-3',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 3: علم البديع والمحسنات اللفظية والمعنوية',
      titleEn: 'Mastery Assessment 3: Rhetorical Figures & Embellishments',
      passingScore: 80,
      questions: [
        {
          id: 'ql3-1',
          textAr: 'ما هو الفارق الجوهري بين الطباق والمقابلة في علم البديع؟',
          textEn: 'What is the precise distinction between TibaQ and Muqabalah in rhetoric?',
          optionsAr: [
            'الطباق تضاد بين لفظين منفردين، بينما المقابلة تضاد بين معنيين أو أكثر وما يقابل ذلك على الترتيب',
            'الطباق محسن لفظي والمقابلة محسن معنوي',
            'الطباق يختص بالشعر والمقابلة بالنثر فقط',
            'لا يوجد فرق بينهما كلاهما جناس'
          ],
          optionsEn: [
            'TibaQ pairs single antonyms; Muqabalah orchestrates structured multi-word sequential oppositions',
            'TibaQ is verbal; Muqabalah is semantic',
            'TibaQ is poetry-only; Muqabalah prose-only',
            'No difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق البلاغي بين الطباق والمقابلة',
          conceptTestedEn: 'TibaQ vs Muqabalah Distinction',
          explanationAr: 'الطباق يكون بين كلمتين (مثل: ليل ونهار)، بينما المقابلة تكون بين جملتين تحتويان على معنيين أو أكثر متضادين على الترتيب.',
          explanationEn: 'TibaQ contrasts single words; Muqabalah structures ordered multi-element clause oppositions.',
          difficulty: 'easy'
        },
        {
          id: 'ql3-2',
          textAr: 'في قوله تعالى: "وَتَحْسَبُهُمْ أَيْقَاظاً وَهُمْ رُقُودٌ"، ما نوع المحسن البديعي؟',
          textEn: 'In "And you would think they were awake, while they were asleep", what rhetorical figure is present?',
          optionsAr: [
            'طباق إيجاب (بين أيقاظاً ورقود)',
            'طباق سلب',
            'جناس تام',
            'مقابلة رباعية'
          ],
          optionsEn: [
            'Positive TibaQ (between awake and asleep)',
            'Negative TibaQ',
            'Complete Jinas',
            'Four-way Muqabalah'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق الطباق الإيجابي',
          conceptTestedEn: 'Positive Antithesis Identification',
          explanationAr: 'التضاد وقع بين كلمتين مثبتتين متضادتين في المعنى (أيقاظ ضد رقود)، فهو طباق إيجاب.',
          explanationEn: 'Antithesis between two affirmative antonyms (awake vs asleep) constitutes positive TibaQ.',
          difficulty: 'easy'
        },
        {
          id: 'ql3-3',
          textAr: 'بين كلمتي "خَيْل" و"خَيْر" في قول النبي ﷺ: "الْخَيْلُ مَعْقُودٌ فِي نَوَاصِيهَا الْخَيْرُ"، ما نوع المحسن البديعي؟',
          textEn: 'Between Khayl (horses) and Khayr (goodness), what rhetorical figure exists?',
          optionsAr: [
            'جناس ناقص (لاختلاف الحرف الأخير: اللام والراء)',
            'جناس تام',
            'سجع فواصل',
            'طباق سلب'
          ],
          optionsEn: [
            'Partial Jinas (diverging in the final letter: L vs R)',
            'Complete Jinas',
            'Prose Saj',
            'Negative TibaQ'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تمييز الجناس الناقص لاختلاف نوع الحرف',
          conceptTestedEn: 'Incomplete Jinas Letter Divergence',
          explanationAr: 'اتفقت الكلمتان في عدد الحركات والترتيب وعدد الحروف واختلفتا في نوع حرف واحد (اللام في الخيل، والراء في الخير) فهو جناس ناقص.',
          explanationEn: 'Words share identical rhythm and letter count but differ in one consonant (L vs R), creating partial Jinas.',
          difficulty: 'medium'
        },
        {
          id: 'ql3-4',
          textAr: 'ما المحسن اللفظي الذي يُعرف باتفاق قافيتي الشطر الأول في البيت الافتتاحي للقصيدة الشعرية؟',
          textEn: 'Which verbal figure is defined by matching rhymes in the two hemistichs of a poem\'s opening verse?',
          optionsAr: [
            'التصريع (Tasree\')',
            'السجع (Saj\')',
            'الطباق (TibaQ)',
            'التورية (Tawriyah)'
          ],
          optionsEn: [
            'Tasree (Opening verse hemistich rhyme)',
            'Saj (Prose clause rhyme)',
            'TibaQ (Antithesis)',
            'Tawriyah (Double Entendre)'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف التصريع في الشعر العربي',
          conceptTestedEn: 'Definition of Poetic Tasree',
          explanationAr: 'التصريع هو محسن لفظي خاص بالشعر، ويعني اتفاق نهاية الشطر الأول مع نهاية الشطر الثاني في البيت الأول من القصيدة.',
          explanationEn: 'Tasree is exclusively poetic, rhyming the end of the first hemistich with the second in the opening verse.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'lit-4',
    order: 4,
    titleAr: 'المحاضرة 4: النقد الأدبي والتحليل الموضوعي والجمالي للنصوص',
    titleEn: 'Lecture 4: Literary Criticism & Aesthetic Textual Deconstruction',
    subtitleAr: 'استراتيجيات تفكيك البنية الفنية، وتذوق الصور الشعرية، ونقد العاطفة والفكرة والأسلوب وتحقيق الوحدة العضوية',
    subtitleEn: 'Master applied literary criticism: evaluate emotional sincerity, intellectual depth, figurative artistry, style rhythm, and organic unity in classical and modern Arabic literature.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-3',
    prerequisiteTitleAr: 'المحاضرة 3: علم البديع: المحسنات اللفظية والمعنوية وأثرها الصوتي',
    prerequisiteTitleEn: 'Lecture 3: Rhetorical Figures: Verbal & Semantic Embellishments',

    gradeLevelNameAr: 'الصف الثاني ثانوي - المرحلة الثانوية (مسار اللغة العربية والإنسانيات)',
    gradeLevelNameEn: 'Grade 11 / High School - Arabic Literature & Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: النقد الأدبي وقراءة النصوص وتذوقها',
    unitTitleEn: 'Unit 3: Literary Criticism & Aesthetic Textual Appreciation',
    lessonNumberAr: 'الدرس 1: مناهج النقد الأدبي، عناصر العمل الأدبي، والوحدة العضوية',
    lessonNumberEn: 'Lesson 1: Literary Criticism Frameworks & Organic Unity',

    warmupHookAr: 'حين نقرأ قصيدة خالدة لشاعر كالمتنبي أو أحمد شوقي، ما الذي يجعل كلماتها تهز وجداننا بعد مئات السنين؟ هل هي مجرد كلمات منسقة على بحر شعري وقافية، أم نسيج حي نابض بالصدق والجمال والفكر العميق؟ النقد الأدبي ليس "تصيداً للأخطاء"، بل هو عين البصيرة الذواقة التي تفكك أسرار العبقرية الأدبية: كيف اندمجت العاطفة الصادقة مع الفكرة السامية؟ وكيف خدمت الصور البيانية والموسيقى موضوع النص ليصبح كائناً حياً متماسكاً يحقق "الوحدة العضوية"؟',
    warmupHookEn: 'Literary criticism is not mere fault-finding, but the enlightened appreciation of artistic genius: evaluating how emotion, thought, imagery, and rhythm fuse into an indivisible organic masterpiece.',

    learningOutcomesAr: [
      'أن يحلل الطالب أركان العمل الأدبي الأربعة (العاطفة، الفكرة، الخيال والتصوير، الأسلوب والإيقاع)',
      'أن يطبق معايير نقد العاطفة (الصدق، القوة، الانسجام) ونقد الفكرة (العمق، الأصالة، الصحة)',
      'أن يقيّم جودة الصور البيانية والمحسنات البلاغية ومدى خدمتها للجو النفسي للنص',
      'أن يوضح مفهوم "الوحدة العضوية والموضوعية" ويميز بين القصيدة المفككة والقصيدة الحية المتكاملة',
      'أن يكتب تحليلاً نقدياً تطبيقياً لنص أدبي شعري أو نثري وفق المعايير العلمية'
    ],
    learningOutcomesEn: [
      'Deconstruct the 4 cardinal pillars of literary works: Emotion, Intellect, Imagery, Style',
      'Apply critical criteria for emotion (sincerity, intensity) and intellect (depth, authenticity)',
      'Evaluate how figurative imagery and rhetorical ornaments support thematic atmosphere',
      'Explain organic and thematic unity, contrasting modular poetry with unified modern masterpieces',
      'Compose structured applied literary critiques using rigorous analytical frameworks'
    ],

    vocabulary: [
      {
        termAr: 'النقد الأدبي (Literary Criticism)',
        termEn: 'Literary Criticism',
        definitionAr: 'دراسة النصوص الأدبية وفحصها وتفسيرها وتقويمها لبيان مواطن الجمال والقوة وأوجه القصور والضعف وفق معايير موضوعية وذوقية.',
        definitionEn: 'The disciplined analysis, interpretation, and qualitative evaluation of literary texts based on objective aesthetic criteria.'
      },
      {
        termAr: 'الوحدة العضوية (Organic Unity)',
        termEn: 'Organic Unity',
        definitionAr: 'تماسك القصيدة بحيث تصبح كالكائن الحي؛ تدور حول موضوع واحد (وحدة الموضوع)، وتسيطر عليها عاطفة واحدة (وحدة الجو النفسي)، مع ترابط الأفكار وتسلسلها.',
        definitionEn: 'Coherence where a poem functions like a living organism with thematic singularity, emotional consistency, and sequential progression.'
      },
      {
        termAr: 'صدق العاطفة (Emotional Sincerity)',
        termEn: 'Emotional Sincerity',
        definitionAr: 'أن تكون المشاعر المنبثة في النص نابعة من تجربة شعورية حقيقية وإحساس صادق لدى الأديب بعيداً عن الافتعال والنفاق والتقليد البارد.',
        definitionEn: 'Authentic affective resonance stemming from genuine lived psychological experience rather than artificial imitation.'
      },
      {
        termAr: 'الجو النفسي (Atmospheric Tone / Mood)',
        termEn: 'Atmospheric Mood',
        definitionAr: 'الحالة الوجدانية والشعورية العامة التي تخيم على النص الأدبي وتوجه اختيار الألفاظ والصور والإيقاع الموسيقي.',
        definitionEn: 'The overarching emotional climate governing lexical choice, imagery, and rhythmic cadence.'
      }
    ],

    keyConceptsAr: [
      'أركان العمل الأدبي الأربعة: العاطفة، الفكرة، الخيال/الصورة، الأسلوب واللغة',
      'معايير نقد العاطفة: صدق الشعور، وقوة التأثير، والانسجام مع الموضوع',
      'معايير نقد الفكرة: العمق والأصالة، والسلامة المنطقية، وملاءمتها للواقع الإنساني',
      'معايير نقد الصورة والخيال: الابتكار، والبعد عن الغرابة والابتذال، والتعبير عن المعنى',
      'الوحدة العضوية: وحدة الموضوع + وحدة الجو النفسي + ترابط الأفكار وتسلسلها',
      'الفرق بين النقد الانطباعي الذاتي والنقد المنهجي الموضوعي'
    ],
    keyConceptsEn: [
      'Four Pillars: Emotion, Idea, Imagery/Imagination, Style/Diction',
      'Emotion Criteria: Sincerity, Affective Intensity, Thematic Concordance',
      'Idea Criteria: Intellectual Depth, Originality, Logical Coherence',
      'Imagery Criteria: Originality, Vividness, Organic Integration',
      'Organic Unity: Thematic Singularity + Emotional Consistency + Sequential Structure',
      'Impressionistic vs Methodological Objective Criticism'
    ],
    summaryAr: 'المحطة الختامية المتوجة لمسار اللغة العربية؛ ندمج ما تعلمناه في علوم البيان والبديع والمعاني لنمارس النقد الأدبي التحليلي الراقي للنصوص، ونفكك أسرار خلود الأعمال الأدبية من خلال تقييم العاطفة والفكرة والصورة والوحدة العضوية.',
    summaryEn: 'The pinnacle capstone of Arabic Literature: synthesizing imagery, rhetoric, and stylistic analysis into rigorous, illuminating literary criticism and organic unity evaluation.',

    sections: [
      {
        titleAr: '1. أركان العمل الأدبي ومعايير التحليل النقدي',
        titleEn: '1. The Four Pillars of Literature & Critical Assessment Criteria',
        contentAr: 'يقوم أي عمل أدبي خالد على أربعة أركان متكاملة:\n1. العاطفة (المحرك الوجداني): المشاعر والأحاسيس التي عاشها الأديب؛ وتُنقد بمعيارين: "صدق الشعور" (أن يعبر عن تجربة حقيقية) و"قوة التأثير" في نفس القارئ.\n2. الفكرة (الجوهر العقلي): المعاني والحقائق التي يريد الأديب إيصالها؛ وتُنقد بمدى "عمقها وأصالتها" وسلامتها المنطقية.\n3. الخيال والتصوير (الرداء الجمالي): الصور البيانية من تشبيه واستعارة وكناية؛ وتُنقد بمدى ابتكارها وتناغمها مع العاطفة دون تكلف أو غرابة.\n4. الأسلوب والإيقاع (البناء اللغوي والموسيقي): اختيار الألفاظ الفصيحة، والتراكيب المعبرة، والوزن الموسيقي الذي ينسجم مع نغمة المشاعر.',
        contentEn: 'Every literary masterpiece rests upon four interlocked pillars: Emotion (sincerity and intensity), Idea (depth and originality), Imagery (inventiveness and affective resonance), and Style (diction and musical cadence).',
        diagram: {
          id: 'diag-lit4-criticism-pillars',
          figureNumberAr: 'شكل (4-1)',
          figureNumberEn: 'Figure (4-1)',
          titleAr: 'مخطط أركان النقد الأدبي وتحقيق الوحدة العضوية للنص',
          titleEn: 'Pillars of Literary Criticism & Organic Unity Architecture',
          captionAr: 'يوضح المخطط تفاعل أركان العمل الأدبي الأربعة (العاطفة، الفكرة، الخيال، الأسلوب) وذروة النقد الأدبي المتمثلة في تقييم "الوحدة العضوية والموضوعية" للقصيدة.',
          captionEn: 'Comprehensive framework mapping the four dimensions of literary creation converging into organic and thematic unity.',
          diagramType: 'literary_criticism_map',
          takeawayFormulaAr: 'العمل الأدبي العظيم = صدق العاطفة + عمق الفكرة + إشراق الخيال + سلاسة الأسلوب + الوحدة العضوية',
          takeawayFormulaEn: 'Masterpiece Literature = Sincere Emotion + Deep Idea + Radiant Imagery + Refined Style + Organic Unity',
          keyLabels: [
            { tagAr: 'العاطفة والفكرة', tagEn: 'Emotion & Intellect', color: '#ef4444' },
            { tagAr: 'الخيال والأسلوب', tagEn: 'Imagery & Style', color: '#a855f7' },
            { tagAr: 'الوحدة العضوية', tagEn: 'Organic Unity', color: '#38bdf8' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق نقدي (4-1): تحليل نقدي تطبيقي لبيتين من الشعر العربي',
          titleEn: 'Worked Criticism (4-1): Applied Literary Deconstruction of Classical Verses',
          equation: 'تفكيك العاطفة + الفكرة + الصور + الموسيقى = الحكم النقدي',
          steps: [
            {
              stepNumber: 1,
              textAr: 'البيتان (لأبي القاسم الشابي): "إِذَا الشَّعْبُ يَوْمـاً أَرَادَ الْحَيَـاةَ ... فَلا بُدَّ أَنْ يَسْتَجِيبَ الْقَـدَر / وَلا بُـدَّ لِلَّيـْلِ أَنْ يَنْجَلِــي ... وَلا بُدَّ للْقَيْـدِ أَنْ يَنْكَسِـر".',
              textEn: 'Verses: Al-Shabbi on the will to live and inevitability of dawn.'
            },
            {
              stepNumber: 2,
              textAr: 'نقد العاطفة: عاطفة حماسية وطنية جياشة تمتلئ بالأمل والتحدي والإيمان الراسخ بحرية الإنسان (عاطفة صادقة قوية).',
              textEn: 'Emotion: Intense patriotic fervor, unyielding hope and faith in liberty.'
            },
            {
              stepNumber: 3,
              textAr: 'نقد الفكرة والصور: الفكرة عميقة وأصيلة تدعو للإرادة والعمل. الصور البيانية: استعار "الليل" للظلم والاستعمار (استعارة تصريحية)، و"القيد" للعبودية والقهر، وجعل القدر مستجيباً لإرادة الأحرار (تشخيص بديع).',
              textEn: 'Idea & Imagery: Deep message; Night = Oppression (Tasrihiyyah), Chains = Servitude, Fate responding = Personification.'
            },
            {
              stepNumber: 4,
              textAr: 'نقد الأسلوب والموسيقى: استخدام بحر المتقارب السريع مع تكرار عبارة "فلا بد / ولا بد" التي منحت النص إيقاعاً حاسماً جازماً يؤكد حتمية النصر.',
              textEn: 'Style & Rhythm: Rapid Mutagarib meter with decisive repetition reinforcing inevitability.'
            }
          ],
          takeawayAr: 'التحليل النقدي الناجح يربط دائماً بين اختيار الألفاظ والصور البيانية وبين العاطفة المسيطرة على الشاعر.',
          takeawayEn: 'Insightful criticism inextricably links diction and figurative tropes directly to prevailing affective sentiment.'
        },
        tipsAr: ['احرص في النقد على الاستشهاد بكلمات محددة من النص لدعم حكمك النقدي.']
      },
      {
        titleAr: '2. الوحدة العضوية والموضوعية في القصيدة الحديثة',
        titleEn: '2. Organic & Thematic Unity in Contemporary Literature',
        contentAr: 'كانت القصيدة الجاهلية القديمة تتعدد فيها الأغراض (الوقوف على الأطلال، الغزل، رحلة الصحراء، ثم المدح أو الفخر) فتسمى "قصيدة البيت المفرد". أما في النقد الأدبي الحديث، فإن المعيار الأسمى لجودة النص هو "الوحدة العضوية" (Organic Unity)، وتتحقق بتوافر ثلاثة شروط:\n1. وحدة الموضوع: أن تدور القصيدة بكاملها حول فكرة أو تجربة شعورية واحدة دون استطراد مخل.\n2. وحدة الجو النفسي: أن تسود النص عاطفة منسجمة تتدرج بتناغم من المطلع إلى المقطع الختامي دون تناقض عاطفي.\n3. ترابط الأفكار وتكاملها: أن يسلم كل بيت إلى البيت الذي يليه، بحيث لا يمكن حذف بيت أو تقديمه دون أن يختل بناء القصيدة، كما لا يمكن بتر عضو من جسد كائن حي.',
        contentEn: 'Unlike modular multi-thematic pre-Islamic odes, modern literary criticism prizes Organic Unity: thematic singularity, emotional atmosphere consistency, and interdependent stanza progressions where no line can be rearranged without destroying the living synthesis.',
        interactiveExample: {
          titleAr: 'تطبيق نقدي (4-2): اختبار تحقق الوحدة العضوية في نص أدبي',
          titleEn: 'Worked Criticism (4-2): Testing for Organic Unity in Poetry',
          equation: 'وحدة موضوع + وحدة جو نفسي + ترابط بنيوي = وحدة عضوية مكتملة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'افحص موضوع النص: هل يتحدث الشاعر عن تجربة الغربة والحنين للوطن من أول بيت لآخر بيت؟ نعم => تحقق وحدة الموضوع.',
              textEn: 'Step 1: Does the poem maintain a singular thematic focus (e.g. exile and longing)? Yes => Thematic Unity.'
            },
            {
              stepNumber: 2,
              textAr: 'افحص الجو النفسي: هل تسيطر نغمة الشوق والشجن دون انتقال مفاجئ إلى الفرح أو الهجاء؟ نعم => تحقق وحدة الجو النفسي.',
              textEn: 'Step 2: Is the emotional atmosphere consistently resonant without dissonant shifts? Yes => Atmospheric Unity.'
            },
            {
              stepNumber: 3,
              textAr: 'افحص ترابط الأبيات: هل تتدرج المشاعر وتنمو فكرة القصيدة تصاعدياً نحو الذروة والختام؟ نعم => اكتملت الوحدة العضوية للنص.',
              textEn: 'Step 3: Do verses progress climactically like an organic living entity? Yes => Flawless Organic Unity.'
            }
          ],
          takeawayAr: 'القصيدة ذات الوحدة العضوية تشبه اللوحة الزيتية المتناسقة؛ كل لون وضربة فرشاة تخدم المشهد الكلي.',
          takeawayEn: 'A poem with organic unity resembles a unified canvas where every brushstroke serves the holistic portrait.'
        },
        tipsAr: ['القصيدة التي تفتقد الوحدة العضوية تبدو كمجموعة من الأبيات المتفرقة التي يمكن إعادة ترتيبها دون أثر.']
      }
    ],

    conceptMapSummaryAr: 'النقد الأدبي: تقويم وتذوق للنصوص. أركان العمل الأدبي: 1) العاطفة (الصدق والقوة)، 2) الفكرة (العمق والأصالة)، 3) الصورة/الخيال (التشخيص والتجسيم والابتكار)، 4) الأسلوب والموسيقى. غاية النقد: تقييم الوحدة العضوية (وحدة الموضوع، وحدة الجو النفسي، وترابط الأفكار).',
    conceptMapSummaryEn: 'Literary Criticism: Evaluating texts. 4 Pillars: Emotion (sincerity), Idea (depth), Imagery (invention), Style (rhythm). Goal: Organic Unity (Thematic unity + Emotional harmony + Sequential coherence).',

    goldenRulesAr: [
      'القاعدة 1: النقد الأدبي ليس هجوماً أو مدحاً انطباعياً، بل هو تحليل علمي وتذوق منهجي لجماليات النص.',
      'القاعدة 2: أركان العمل الأدبي الأربعة هي: العاطفة، والفكرة، والصورة/الخيال، والأسلوب/اللغة.',
      'القاعدة 3: مقياس جودة العاطفة هو صدق الشعور وقوة حرارته وقدرته على التأثير في المتلقي.',
      'القاعدة 4: مقياس جودة الفكرة هو عمقها، وأصالتها، وملاءمتها للمنطق والواقع الإنساني.',
      'القاعدة 5: الصورة الشعرية الناجحة هي التي تنبع من العاطفة وتخدمها وتبتعد عن الغرابة والافتعال.',
      'القاعدة 6: الوحدة العضوية تتحقق باجتماع: وحدة الموضوع، ووحدة الجو النفسي، وترابط الأفكار وتسلسلها.',
      'القاعدة 7: في القصيدة ذات الوحدة العضوية يستحيل حذف بيت أو تغيير موضعه دون الإخلال بالمعنى العام.'
    ],
    goldenRulesEn: [
      'Rule 1: Literary criticism is methodological aesthetic analysis, not subjective impressionism.',
      'Rule 2: The 4 cardinal pillars are Emotion, Intellect, Imagery, and Style.',
      'Rule 3: Emotion is judged by sincerity, affective intensity, and reader engagement.',
      'Rule 4: Ideas are critiqued on depth, originality, and philosophical fidelity.',
      'Rule 5: Imagery must arise organically from emotion, avoiding strained extravagance.',
      'Rule 6: Organic Unity requires Thematic Unity + Emotional Consistency + Sequential Progression.',
      'Rule 7: In an organically unified work, no line can be deleted or transposed without structural collapse.'
    ],

    textbookExercises: [
      {
        id: 'ex-lit-4-1',
        questionAr: 'ما هي معايير نقد "العاطفة" في النص الأدبي؟ وكيف يُميز الناقد بين العاطفة الصادقة والعاطفة المفتعلة؟',
        questionEn: 'What are the critical criteria for evaluating Emotion in literature? How does a critic distinguish sincere from fabricated sentiment?',
        solutionStepsAr: [
          '1. معايير نقد العاطفة تنحصر في ثلاثة أمور أساسية: أ) صدق العاطفة، ب) قوة العاطفة وحرارتها، ج) انسجامها مع طبيعة الفكرة والموقف.',
          '2. العاطفة الصادقة: نابعة من تجربة نفسية عاشها الأديب، وتظهر في حرارة الألفاظ وتلقائيتها وتناسق الصور دون تكلف.',
          '3. العاطفة المفتعلة (الكاذبة): عاطفة مصطنعة للمجاملة أو التكسب، وتبدو باردة، مليئة بالصور المكررة والمبالغات التي لا يصدقها العقل ولا تهز الوجدان.'
        ],
        solutionStepsEn: [
          '1. Three cardinal criteria: A) Sincerity, B) Affective intensity and warmth, C) Thematic harmony.',
          '2. Sincere emotion springs from authentic lived experience, marked by natural, vibrant diction and unforced imagery.',
          '3. Fabricated emotion feels cold and mechanical, riddled with hollow clichés and unconvincing hyperbole.'
        ],
        answerAr: 'معايير نقد العاطفة: الصدق، القوة والحرارة، والانسجام؛ وتتميز الصادقة بالحرارة والتأثير والتلقائية بينما المفتعلة تتسم بالبرود والمبالغة المستهلكة.',
        answerEn: 'Emotion criteria: Sincerity, Intensity, Harmony. Sincere emotion resonates naturally; fabricated emotion feels cold and clichéd.'
      },
      {
        id: 'ex-lit-4-2',
        questionAr: 'اشرح بمثال تطبيقي مفهوم "الوحدة العضوية" في القصيدة، وكيف تختلف عن مبدأ "وحدة البيت" في الشعر الكلاسيكي القديم.',
        questionEn: 'Explain Organic Unity in poetry versus the classical Modular Verse concept with an illustrative example.',
        solutionStepsAr: [
          '1. مبدأ "وحدة البيت": كان البيت في بعض القصائد القديمة يمثل وحدة مستقلة في المعنى، مما يسمح بحذف بعض الأبيات أو تقديمها دون الإخلال بالموضوع.',
          '2. مبدأ "الوحدة العضوية": يتعامل مع القصيدة كجسد واحد متصل؛ موضوعها واحد، وعاطفتها متسقة نامية، وترتيب أبياتها محكم كبناء عضوي متماسك.',
          '3. مثال: في قصائد مثل "المساء" لخليل مطران، كل بيت يقود إلى ما بعده في تدرج تصاعدي من حزن الغروب إلى استشعار النهاية، مما يمنع تجزئة النص.'
        ],
        solutionStepsEn: [
          '1. Modular Verse: Each line formed an independent semantic unit, allowing transpositions or deletions without narrative rupture.',
          '2. Organic Unity: The poem functions as a single living organism with singular theme, consistent mood, and indivisible progression.',
          '3. Example: Khalil Mutran\'s "Al-Masaa" progresses inexorably from melancholy sunset to metaphysical mortality.'
        ],
        answerAr: 'الوحدة العضوية تجعل القصيدة كالكائن الحي المتماسك (وحدة موضوع + جو نفسي + ترابط أفكار)، بينما وحدة البيت تجعل كل بيت مستقلاً بذاته.',
        answerEn: 'Organic Unity renders the poem an indivisible living entity, whereas modular verse treats each line as a standalone unit.'
      }
    ],

    assessment: {
      id: 'quiz-lit-4',
      lectureId: 'lit-4',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 4: النقد الأدبي والتحليل الموضوعي والجمالي',
      titleEn: 'Mastery Assessment 4: Applied Literary Criticism & Organic Unity',
      passingScore: 80,
      questions: [
        {
          id: 'ql4-1',
          textAr: 'ما هي الأركان الثلاثة اللازمة لتحقق "الوحدة العضوية" في القصيدة الأدبية الحديثة؟',
          textEn: 'What are the three mandatory elements for achieving Organic Unity in modern poetry?',
          optionsAr: [
            'وحدة الموضوع، ووحدة الجو النفسي، وترابط الأفكار والمشاعر وتسلسلها',
            'اتفاق القافية، واستخدام بحر الطويل، وكثرة الجناس',
            'التحدث عن الطبيعة فقط، والالتزام بعدد 20 بيتاً، واستخدام الألفاظ الغريبة',
            'حذف المشبه به في جميع الأبيات'
          ],
          optionsEn: [
            'Thematic Singularity, Psychological Mood Consistency, and Sequential Progression of ideas',
            'Uniform rhyme, long meter, and frequent Jinas',
            'Writing only about nature, fixed line count, archaic diction',
            'Omitting vehicle in all lines'
          ],
          correctIndex: 0,
          conceptTestedAr: 'شروط تحقق الوحدة العضوية الثلاثة',
          conceptTestedEn: 'Three Pillars of Organic Unity',
          explanationAr: 'تتحقق الوحدة العضوية عندما تدور القصيدة حول موضوع واحد، في ظل جو نفسي وعاطفي منسجم، وتترابط أفكارها ترابطاً سببياً ووجدانياً كأعضاء الجسد الواحد.',
          explanationEn: 'Organic unity demands thematic unity, emotional consistency, and sequential progression interlocking verses into a living whole.',
          difficulty: 'easy'
        },
        {
          id: 'ql4-2',
          textAr: 'ما هو المقياس النقدي الأول للحكم على جودة "العاطفة" في العمل الأدبي؟',
          textEn: 'What is the primary critical criterion for judging Emotion in a literary work?',
          optionsAr: [
            'صدق الشعور وحرارته وقدرته على التأثير في وجدان المتلقي',
            'استخدام أطول الكلمات المعجمية',
            'التحدث بصوت مرتفع وإلقاء النص بسرعة',
            'أن تكون العاطفة هادئة دائماً دون أي انفعال'
          ],
          optionsEn: [
            'Emotional Sincerity, warmth, and affective engagement of the audience',
            'Long dictionary vocabulary',
            'Loud recitation',
            'Keeping emotion completely subdued'
          ],
          correctIndex: 0,
          conceptTestedAr: 'معايير نقد العاطفة: الصدق وقوة التأثير',
          conceptTestedEn: 'Emotion Critique: Sincerity & Impact',
          explanationAr: 'الصدق الشعوري هو روح العمل الأدبي؛ فالقارئ يدرك بفطرته العاطفة الحقيقية النابعة من القلب ويتأثر بها، وينفر من العاطفة المصطنعة الكاذبة.',
          explanationEn: 'Emotional sincerity distinguishes authentic art from cold imitation, ensuring deep reader connection.',
          difficulty: 'easy'
        },
        {
          id: 'ql4-3',
          textAr: 'كيف يقيم الناقد الأدبي جودة "الصورة البيانية والخيال" في النص؟',
          textEn: 'How does a literary critic evaluate the quality of figurative imagery and imagination?',
          optionsAr: [
            'بمدى ابتكارها وتعبيرها الصادق عن عاطفة النص وتجسيدها للمعنى دون تكلف أو غرابة منفرة',
            'بعدد الصور البيانية في البيت الواحد حتى لو شتتت المعنى',
            'بأن تكون الصورة منقولة حرفياً من الشعراء القدماء دون أي تجديد',
            'باستبعاد كل أنواع التشبيه والاستعارة والاعتماد على التقرير المباشر'
          ],
          optionsEn: [
            'By inventiveness, emotional alignment, and natural illumination without strained dissonance',
            'By maximizing image count per line regardless of clarity',
            'By copying ancient images without novelty',
            'By eliminating all metaphors'
          ],
          correctIndex: 0,
          conceptTestedAr: 'معايير نقد الصورة الشعرية والخيال',
          conceptTestedEn: 'Criteria for Poetic Imagery Evaluation',
          explanationAr: 'الصورة البيانية الناجحة تنبع من التجربة الشعورية الحقيقية وتخدم الفكرة بابتكار وأناقة، بعيداً عن حشو الصور المصطنعة أو الغرابة المربكة.',
          explanationEn: 'Masterful poetic imagery arises organically from genuine emotion, illuminating themes with originality and elegance.',
          difficulty: 'medium'
        },
        {
          id: 'ql4-4',
          textAr: 'ما الفرق الرئيسي بين "النقد المنهجي الموضوعي" و"النقد الانطباعي الذاتي"؟',
          textEn: 'What is the core distinction between Methodological Objective Criticism and Impressionistic Subjective Criticism?',
          optionsAr: [
            'المنهجي يستند إلى معايير وأدلة وشواهد بلاغية وفنية محددة، بينما الانطباعي يعتمد على مجرد الاستحسان أو الاستهجان العاطفي المجرد دون تعليل',
            'المنهجي يختص بالشعر فقط والانطباعي بالنثر',
            'المنهجي يرفض تذوق الجمال والانطباعي علمي بحت',
            'لا يوجد فرق كلاهما يعتمد على الصدفة'
          ],
          optionsEn: [
            'Objective criticism relies on rigorous aesthetic standards and textual evidence; Impressionistic relies on unreasoned personal like/dislike',
            'Objective is poetry-only; Impressionistic prose-only',
            'Objective rejects beauty',
            'No difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين النقد المنهجي الموضوعي والنقد الانطباعي',
          conceptTestedEn: 'Objective Methodological vs Impressionistic Criticism',
          explanationAr: 'النقد المنهجي يحلل عناصر النص (العاطفة، الفكرة، الأسلوب، البناء) بأدلة وبراهين واضحة، بينما الانطباعي يكتفي بقول "هذا جميل" أو "هذا رديء" دون تحليل علمي.',
          explanationEn: 'Methodological criticism substantiates aesthetic judgements with concrete textual evidence across structure, emotion, and rhetoric.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 4. MIDDLE SCHOOL ARABIC LANGUAGE (اللغة العربية - لغتي الخالدة للمرحلة المتوسطة)
// ============================================================================
export const ARABIC_LANG_LECTURES: Lecture[] = [
  {
    id: 'lang-1',
    order: 1,
    titleAr: 'المحاضرة 1: أقسام الكلمة (الاسم والفعل والحرف) وعلامات التمييز',
    titleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',
    subtitleAr: 'التمييز بين أقسام الكلمة الثلاثة والتعرف على علامات الاسم الخمس وعلامات أزمنة الفعل ودور الحروف',
    subtitleEn: 'Master the three categories of Arabic words: Nouns, Verbs, and Particles with authoritative criteria.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: القيم الإسلامية والهوية اللغوية',
    unitTitleEn: 'Unit 1: Islamic Values & Linguistic Identity',
    lessonNumberAr: 'الدرس 1: الصنف اللغوي: أقسام الكلمة وعلاماتها الفارقة',
    lessonNumberEn: 'Lesson 1: Parts of Speech & Definitive Markers',

    // Real-world Linguistic Hook
    warmupHookAr: 'لغتنا العربية لغة بديعة تمتاز بدقة البناء والاشتقاق؛ فكل كلمة ننطق بها أو نكتبها في هذا الكون الفسيح، من كلام فصيح أو شعر بليغ أو محادثة يومية، تقع حتماً وبلا استثناء تحت ثلاثة أبواب لا رابع لها: اسم، أو فعل، أو حرف. كيف صاغ علماء النحو كابن مالك وابن هشام ضوابط دقيقة لا تخطئ للتمييز بين هذه الأقسام؟ وكيف يمكنك فحص أي كلمة في ثانية واحدة؟ لنكتشف ذلك معاً!',
    warmupHookEn: 'Arabic words comprise three foundational blocks: Nouns, Verbs, and Relational Particles. Discover classical grammatical tests to classify any word instantaneously.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يصنف الطالب أي كلمة في اللغة العربية بدقة إلى (اسم أو فعل أو حرف)',
      'أن يحدد الطالب علامات الاسم الخمس المشهورة (الجر، التنوين، النداء، أل التعريف، الإسناد)',
      'أن يميز الطالب بين أزمنة الفعل الثلاثة (الماضي، المضارع، الأمر) مستخدماً علامة كل فعل',
      'أن يوضح الطالب وظيفة الحرف في ربط أجزاء الكلام واستحالة استقلاله بالمعنى منفرداً',
      'أن يحلل الطالب شواهد ونصوصاً فصيحة مستخرجاً أقسام الكلمة مع التعليل المنهجي'
    ],
    learningOutcomesEn: [
      'Classify any Arabic word accurately into Noun, Verb, or Particle',
      'Identify the 5 cardinal noun markers (Genitive, Nunation, Vocative, Definite Article, Attribution)',
      'Distinguish the 3 verb tenses using dedicated test markers for each',
      'Explain the connective role of particles and their contextual dependency',
      'Analyze authentic Arabic texts extracting parts of speech with rigorous syntactic justification'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'الاسم (Noun)',
        termEn: 'Ism (Noun)',
        definitionAr: 'كلمة دلت على معنى في نفسها دون أن تقترن بزمن محدد (مثل: كتاب، شجرة، أحمد، عدل).',
        definitionEn: 'A word denoting a substantive or abstract meaning in itself, unbound to temporal tense.'
      },
      {
        termAr: 'الفعل (Verb)',
        termEn: 'Fil (Verb)',
        definitionAr: 'كلمة دلت على حدث مقترن بزمن محدد؛ فإن دلت على ما مضى فهو ماضٍ، وإن دلت على الحال والاستقبال فهو مضارع، وإن دلت على طلب فهو أمر.',
        definitionEn: 'A word expressing an action intrinsically tethered to past, present, or future command time.'
      },
      {
        termAr: 'الحرف (Particle)',
        termEn: 'Harf (Particle)',
        definitionAr: 'كلمة لا تدل على معنى مستقل بذاتها، وإنما يظهر معناها التام عند ضمها إلى غيرها في جملة مفيدة (مثل: من، إلى، ثم، هل).',
        definitionEn: 'A connective particle with no standalone semantic meaning until paired with words in context.'
      },
      {
        termAr: 'التنوين (Nunation)',
        termEn: 'Tanween',
        definitionAr: 'نون ساكنة زائدة تلحق آخر الأسماء المعربة لفظاً وتفارقها خطاً ووقفاً (مثل: قلمٌ، قلماً، قلمٍ)، وهي علامة فارقة للاسم.',
        definitionEn: 'An unwritten doubled vocalic suffix (un, an, in) strictly unique to non-definite Arabic nouns.'
      },
      {
        termAr: 'أل التعريف (Definite Article)',
        termEn: 'Al-Taareef',
        definitionAr: 'حرف تعريف يدخل على الأسماء النكرة ليكسبها التعيين والتعريف (مثل: علم -> العلم)، ولا يدخل مطلقاً على الأفعال أو الحروف.',
        definitionEn: 'The definite prefix "Al-" transforming generic nouns into designated entities; rejected by verbs.'
      },
      {
        termAr: 'تاء التأنيث الساكنة (Feminine Taa)',
        termEn: 'Taat At-Taaneeth',
        definitionAr: 'تاء ساكنة تلحق آخر الفعل الماضي فقط للدلالة على أن الفاعل مؤنث (مثل: كَتَبَتْ، نَجَحَتْ).',
        definitionEn: 'Quiescent suffix Taa exclusively accepted by past-tense verbs when the agent is feminine.'
      },
      {
        termAr: 'الإسناد (Attribution)',
        termEn: 'Isnad',
        definitionAr: 'أن يُسند إلى الكلمة حكم أو خبر يفيد المعنى (مثل: الصدقُ منجاةٌ، قمتُ)، وهو أعم علامات الاسم.',
        definitionEn: 'Syntactic predication or attribution, constituting the most comprehensive noun identifier.'
      }
    ],

    keyConceptsAr: [
      'أقسام الكلمة الثلاثة: الاسم، الفعل، الحرف',
      'علامات الاسم الخمس: (الجر، التنوين، النداء، أل، الإسناد)',
      'علامات أزمنة الفعل: الماضي (تاء الفاعل وتاء التأنيث)، المضارع (لم، سين، سوف)، الأمر (دلالة الطلب مع ياء المخاطبة)',
      'الحروف لا تقبل علامات الاسم ولا الفعل ووظيفتها الربط وتوجيه المعنى'
    ],
    keyConceptsEn: [
      'Three Speech Categories: Noun, Verb, Particle',
      'The 5 Cardinal Noun Markers',
      'Tense-Specific Verb Identification Markers',
      'Particle Functions in Sentence Cohesion'
    ],
    summaryAr: 'يتألف الكلام في اللغة العربية من ثلاثة أقسام حصرية: الاسم ويدل على معنى مجرد من الزمن وله علامات كالتنوين والجر وأل؛ والفعل ويدل على حدث وزمن وله علامات تختلف باختلاف ماضيه ومضارعه وأمره؛ والحرف ويربط بين أجزاء الجملة ولا يقبل علاماتهما.',
    summaryEn: 'Arabic words comprise three foundational blocks: Nouns (atemporal concepts accepting Tanween and Al-), Verbs (actions with tense markers), and Particles (connective operators).',
    
    sections: [
      {
        titleAr: '1. الاسم ومفهومه وعلاماته الخمس الفارقة',
        titleEn: '1. Nouns: Concept & Five Definitive Identification Markers',
        contentAr: 'الاسم كلمة تدل على إنسان، أو حيوان، أو نبات، أو جماد، أو صفة، أو معنى مجرد دون ارتباط بزمن. وقد جمع الإمام ابن مالك علامات الاسم في بيته الشهير في الألفية:\n"بِالجَرِّ وَالتَّنْوِينِ وَالنِّدَا وَأَلْ ... وَمُسْنَدٍ لِلاِسْمِ تَمْيِيزٌ حَصَلْ"\nوعلامات الاسم هي:\n1. الجر: قبول حرف الجر أو الإضافة (مثل: في المدرسةِ).\n2. التنوين: قبول الضمتين أو الفتحتين أو الكسرتين (مثل: رجلٌ، قلماً).\n3. النداء: صحة دخول حرف النداء عليه (مثل: يا طالبُ، يا كريمُ).\n4. قبول أل التعريف: (مثل: كتاب -> الكتاب).\n5. الإسناد إليه: أن تخبر عنه بخبر (مثل: أنا قمتُ؛ حيث عُرفت اسمية الضمير "أنا" بقبول الإسناد).',
        contentEn: 'Nouns express entities or abstract ideas devoid of temporal tense. Ibn Malik summarized their 5 signature tests: Genitive case, Nunation, Vocative call (Ya), Definite article (Al-), and Syntactic Attribution (Isnad).',
        diagram: {
          id: 'diag-arabic-speech-tree',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'مخطط شجرة أقسام الكلمة وعلاماتها في اللغة العربية',
          titleEn: 'Arabic Parts of Speech & Cardinal Distinctions Tree',
          captionAr: 'شجرة توضيحية تقارن بين الاسم والفعل والحرف مع أهم العلامات المميزة لكل صنف وأمثلتها النموذجية.',
          captionEn: 'Comprehensive taxonomy contrasting Nouns, Verbs, and Particles with their distinctive tests.',
          diagramType: 'arabic_parts_of_speech',
          takeawayFormulaAr: 'الكلمة = اسم (يقبل التنوين وأل) | فعل (يقترن بزمن) | حرف (يربط بينهما)',
          takeawayFormulaEn: 'Speech = Ism (accepts Al/Tanween) | Fil (tensed event) | Harf (connector)',
          keyLabels: [
            { tagAr: 'الاسم وعلاماته', tagEn: 'Noun Markers', color: '#38bdf8' },
            { tagAr: 'الفعل وأزمنته', tagEn: 'Verb Tenses', color: '#10b981' },
            { tagAr: 'الحرف ووظيفته', tagEn: 'Particle Role', color: '#f59e0b' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق منهجي (1-1): فحص علامات الأسماء في جملة مركبة',
          titleEn: 'Worked Example (1-1): Testing Noun Markers in a Compound Sentence',
          equation: 'الكلمة المراد فحصها + اختبار العلامات (الجر / التنوين / أل)',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الجملة: "حَرَصَ عُمَرُ عَلَى طَلَبِ العِلْمِ فِي صِغَرِهِ". نريد تحديد الأسماء في الجملة مع بيان العلامة.', 
              textEn: 'Sentence: "Umar was eager for knowledge acquisition in his youth." Identify all nouns with their proof markers.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'فحص "عُمَرُ": اسم علم يدل على إنسان ويقبل النداء ("يا عمرُ") والإسناد إليه، فهو اسم.', 
              textEn: 'Analyze "Umar": Proper noun denoting human, accepts vocative (Ya Umar) and attribution -> Noun.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'فحص "طَلَبِ": سُبقت بحرف الجر (عَلَى) وجاءت مكسورة مجرورة ("على طلبِ")، والجر خاص بالأسماء -> إذن "طلب" اسم.', 
              textEn: 'Analyze "Talab": Governed by genitive preposition (Ala) with kasrah -> strictly a Noun.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'فحص "العِلْمِ": دخلت عليها (أل التعريف) وجاءت مضافة إليها -> إذن "العلم" اسم قطعي.', 
              textEn: 'Analyze "Al-Ilm": Features definite article "Al-" -> Noun.' 
            },
            { 
              stepNumber: 5, 
              textAr: 'فحص "صِغَرِهِ": سُبقت بـ (فِي) وقبلت حرف الجر واتصل بها ضمير -> اسم.', 
              textEn: 'Analyze "Sighar": Governed by preposition "Fi" and holds attached genitive pronoun -> Noun.' 
            }
          ],
          takeawayAr: 'يكفي قبول علامة واحدة فقط من علامات الاسم الخمس للحكم على الكلمة بأنها اسم.',
          takeawayEn: 'Accepting even a single noun marker definitively proves the word is a noun.'
        },
        tipsAr: ['لا يجتمع التنوين مع (أل التعريف) في كلمة واحدة أبداً؛ نقول: "كتابٌ" أو "الكتابُ".'],
        tipsEn: ['Nunation and the definite article Al- are mutually exclusive and never coexist on the same word.']
      },
      {
        titleAr: '2. الفعل وأقسامه الثلاثة وعلامات كل قسم',
        titleEn: '2. Verbs: Three Tenses & Tense-Specific Verification Markers',
        contentAr: 'الفعل يدل على حدوث عمل في زمن محدد، وينقسم حسب الزمن إلى ثلاثة أقسام لكل منها علامات فارقة:\n\n1. الفعل الماضي: ما دل على حدث وقع قبل زمن التكلم (مثل: كَتَبَ، فَهِمَ).\n   - علامته الفارقة: قبول تاء الفاعل المتحركة (كَتَبْتُ، كَتَبْتَ) أو قبول تاء التأنيث الساكنة (كَتَبَتْ).\n\n2. الفعل المضارع: ما دل على حدث يقع في زمن التكلم أو بعده (مثل: يَكْتُبُ، نَفْهَمُ).\n   - علامته الفارقة: قبول دخول جازم مثل (لَمْ يَكْتُبْ) أو ناصب مثل (لَنْ يَكْتُبَ) أو سين الاستقبال وسوف (سَيَكْتُبُ، سَوْفَ يَكْتُبُ). ولا بد أن يبدأ بأحد حروف المضارعة (أ، ن، ي، ت).\n\n3. فعل الأمر: ما دل على طلب حصول العمل في المستقبل بصيغة الطلب المباشر (مثل: اكْتُبْ، انْتَبِهْ).\n   - علامته الفارقة: أن يدل بنفسه على الطلب مع قبوله ياء المخاطبة المؤنثة (اكْتُبِي، انْتَبِهِي).',
        contentEn: 'Verbs express actions across 3 tenses: Past (accepts Subject Taa / Feminine Taa), Present (accepts Lam / Seen / Saufa), and Command/Imperative (conveys request and accepts feminine Yaa).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (1-2): التمييز بين أزمنة الفعل وتطبيق الاختبارات النحوية',
          titleEn: 'Worked Example (1-2): Verb Tense Classification & Verification Tests',
          equation: 'الفعل المعطى + علامة الاختبار الخاصة بكل زمن',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الكلمات المعطاة: (انْطَلَقَ - يَسْتَمِعُ - احْفَظْ). نريد تحديد نوع كل فعل مع الدليل.', 
              textEn: 'Analyze verbs: (Intalaqa, Yastamiu, Ihfadh) and prove tense classification with markers.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'فحص "انْطَلَقَ": نقوم بتجربة تاء التأنيث: (انْطَلَقَتْ هِنْدٌ) -> قبل تاء التأنيث الساكنة ودل على مضى، إذن هو فعل ماضٍ مبني.', 
              textEn: 'Test "Intalaqa": Accepts feminine Taa (Intalaqat) and denotes past event -> Past Tense Verb.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'فحص "يَسْتَمِعُ": يبدأ بالياء ويقبل أداة الجزم (لَمْ يَسْتَمِعْ) والسين (سَيَسْتَمِعُ) -> إذن هو فعل مضارع مرفوع.', 
              textEn: 'Test "Yastamiu": Accepts Lam (Lam Yastamia) and future Seen (Sa-Yastamiu) -> Present Tense Verb.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'فحص "احْفَظْ": يدل على طلب الحفظ في المستقبل ويقبل ياء المخاطبة المؤنثة (احْفَظِي) -> إذن هو فعل أمر مبني.', 
              textEn: 'Test "Ihfadh": Conveys direct imperative command and accepts feminine Yaa (Ihfadhi) -> Imperative Verb.' 
            }
          ],
          takeawayAr: 'لكل نوع من الأفعال علامة حصرية تكشفه فوراً: الماضي بالتاء، والمضارع بـ (لم والسين)، والأمر بالطلب مع ياء المخاطبة.',
          takeawayEn: 'Each verb tense has an infallible exclusive test: Past accepts Taa, Present accepts Lam/Seen, Imperative conveys request + Yaa.'
        },
        tipsAr: ['الفعل المضارع يبدأ دائماً بأحد أحرف كلمة (نَأْتِي) أو (أَنَيْتُ).'],
        tipsEn: ['Present tense verbs always commence with one of the 4 prefix letters from "Na-ati".']
      },
      {
        titleAr: '3. الحرف: أنواعه ودوره في ربط المعاني وإعراب الجمل',
        titleEn: '3. Particles: Types, Syntactic Roles & Semantic Modulation',
        contentAr: 'الحرف هو القسم الثالث من أقسام الكلمة، وضابطه السلبي: أنه لا يقبل أياً من علامات الاسم ولا أياً من علامات الفعل. وضابطه الإيجابي: أنه يربط الكلمات داخل الجملة ليولد معاني جديدة لا تقوم بدونها، كالمكانية أو السببية أو التوكيد أو النفي أو الاستقبال.\n\nمن أشهر أقسام الحروف في اللغة العربية:\n1. حروف الجر: (مِنْ، إِلَى، عَنْ، عَلَى، فِي، الباء، الكاف، اللام) - وظيفتها جر الأسماء بعدها.\n2. حروف العطف: (الواو، الفاء، ثُمَّ، أَوْ، بَلْ، لا) - وظيفتها المشاركة والترتيب والتعقيب والتخيير.\n3. حروف النصب والجزم: (أَنْ، لَنْ، كَيْ، إِذَنْ) للنصب، و(لَمْ، لَمَّا، لا الناهية، لام الأمر) للجزم.\n4. حروف النداء والاستفهام والنفي: (يا، أيا - الهمزة، هل - ما، لا، ليس).',
        contentEn: 'Particles accept neither noun nor verb markers. Their sole function is establishing relational and syntactic linkages (Genitive, Conjunction, Subjunctive, Jussive, Interrogative).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (1-3): تحليل الأثر المعنوي والإعرابي للحروف في السياق',
          titleEn: 'Worked Example (1-3): Analyzing Semantic Shift Induced by Particles',
          equation: 'الجملة الأساسية + إدخال الحرف = تغير الدلالة والإعراب',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'قارن بين الجمل التالية: 1) "سَافَرَ سَعِيدٌ إِلَى الرِّيَاضِ" ، 2) "سَافَرَ سَعِيدٌ مِنْ الرِّيَاضِ" ، 3) "هَلْ سَافَرَ سَعِيدٌ؟" ، 4) "لَمْ يُسَافِرْ سَعِيدٌ".', 
              textEn: 'Compare: 1) Traveled to Riyadh, 2) Traveled from Riyadh, 3) Did he travel?, 4) Did not travel.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'في (1): الحرف "إِلَى" حرف جر أفاد "انتهاء الغاية المكانية" وجر الاسم بعده (الرياضِ).', 
              textEn: 'In (1): "Ila" marks spatial destination and causes genitive inflection on the noun.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'في (2): الحرف "مِنْ" أفاد "ابتداء الغاية المكانية"؛ تغير المعنى كلياً بعكس الاتجاه بمجرد استبدال الحرف!', 
              textEn: 'In (2): "Min" marks spatial origin; changing one particle inverted the entire movement direction.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'في (3): "هَلْ" حرف استفهام حول الجملة من خبرية إلى إنشائية استفهامية.', 
              textEn: 'In (3): "Hal" converts a declarative statement into an interrogative query.' 
            },
            { 
              stepNumber: 5, 
              textAr: 'في (4): "لَمْ" حرف نفي وجزم وقلب، نفى الحدث وجزم الفعل المضارع بالسكون وقلب زمنه إلى الماضي.', 
              textEn: 'In (4): "Lam" negates the action, inflects the verb with Sukoon jussive, and shifts time to past.' 
            }
          ],
          takeawayAr: 'الحرف وإن كان لا معنى له بمفرده، إلا أنه هو المحرك الأساسي لتوجيه دلالات المعاني وبناء الإعراب.',
          takeawayEn: 'Though semantically incomplete in isolation, particles drive contextual meaning and syntactic inflection.'
        },
        tipsAr: ['الحروف كلها مبنية لا محل لها من الإعراب في لغة العرب.']
      }
    ],

    conceptMapSummaryAr: 'تتفرع الكلمة إلى ثلاثة أقسام حصرية: 1) الاسم (يقبل أل، التنوين، الجر، النداء، الإسناد)، 2) الفعل (ماضٍ يقبل تاء الفاعل والتأنيث، ومضارع يقبل لم وسين، وأمر يدل على الطلب ويقبل ياء المخاطبة)، 3) الحرف (يربط أجزاء الكلام ولا يقبل علاماتهما وكل الحروف مبنية).',
    conceptMapSummaryEn: 'Words split into: Nouns (accepting Al/Tanween/Genitive), Verbs (Past/Present/Imperative with dedicated markers), and Particles (connectors devoid of noun/verb markers).',

    goldenRulesAr: [
      'القاعدة 1: كل كلام في اللغة العربية ينحصر قطعاً في ثلاثة أصناف: اسم، فعل، حرف.',
      'القاعدة 2: الاسم يدل على معنى في نفسه غير مقترن بزمن، ويكفيه قبول علامة واحدة من علاماته الخمس.',
      'القاعدة 3: التنوين وأل التعريف علامتان خاصتان بالاسم لا تجتمعان في كلمة واحدة أبداً.',
      'القاعدة 4: الفعل الماضي يختص بقبول تاء الفاعل (كتبتُ) وتاء التأنيث الساكنة (كتبتْ).',
      'القاعدة 5: الفعل المضارع يختص بقبول أحرف الجزم والنصب والسين وسوف (سأكتب، لن أكتب).',
      'القاعدة 6: فعل الأمر يجمع بين الدلالة على الطلب بالصيغة وقبول ياء المخاطبة المؤنثة (اقرئي).',
      'القاعدة 7: الحرف كلمة لا معنى لها وحدها وتظهر فائدتها في تركيب الجملة، وجميع الحروف مبنية.'
    ],
    goldenRulesEn: [
      'Rule 1: All Arabic speech strictly subdivides into Noun, Verb, or Particle.',
      'Rule 2: Nouns denote meaning independent of time; passing 1 of 5 tests suffices.',
      'Rule 3: Nunation and Al- are exclusive to nouns and never coexist simultaneously.',
      'Rule 4: Past tense verbs uniquely accept Subject Taa and quiescent Feminine Taa.',
      'Rule 5: Present tense verbs uniquely accept particle operators (Lam, Lan, Seen, Saufa).',
      'Rule 6: Imperative verbs combine direct request meaning with acceptance of feminine Yaa.',
      'Rule 7: Particles hold contextual meaning only, orchestrate syntax, and are entirely indeclinable.'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-1-1',
        questionAr: 'صنف الكلمات التي تحتها خط في الآية الكريمة: ﴿وَقُلْ رَبِّ زِدْنِي عِلْمًا﴾ إلى أقسامها الثلاثة مع ذكر علامة كل كلمة.',
        questionEn: 'Classify the words in Quranic verse: "And say: My Lord, increase me in knowledge" specifying markers.',
        solutionStepsAr: [
          '1. "قُلْ": فعل أمر؛ لأنه يدل على الطلب ويقبل ياء المخاطبة المؤنثة (قُولِي).',
          '2. "رَبِّ": اسم؛ لأنه أُضيف إليه ضمير المتكلم المحذوف وقَبِلَ حرف النداء التقديري (يا ربِّ).',
          '3. "زِدْ": فعل أمر؛ دال على الدعاء والطلب ويقبل ياء المخاطبة (زِيدِي).',
          '4. "عِلْمًا": اسم؛ دليله قبول التنوين (تنوين الفتح) وصحة دخول أل عليه (العلم).'
        ],
        solutionStepsEn: [
          '1. "Qul": Imperative verb conveying command and accepting feminine Yaa (Qooli).',
          '2. "Rabbi": Noun accepting implicit vocative call (Ya Rabbi).',
          '3. "Zid": Imperative/supplicatory verb accepting feminine Yaa (Zeedi).',
          '4. "Ilman": Noun accepting explicit Nunation (Tanween) and the definite article.'
        ],
        answerAr: 'قُل: فعل أمر | رَبّ: اسم منادى | زِدْ: فعل أمر | عِلماً: اسم منون.',
        answerEn: 'Qul: Verb | Rabbi: Noun | Zid: Verb | Ilman: Noun.'
      },
      {
        id: 'ex-lang-1-2',
        questionAr: 'بين سبب امتناع دخول التنوين على الكلمات التالية: (يَشْرَبُ - فِي - القَلَمُ).',
        questionEn: 'State why Nunation cannot be appended to: (Yashrabu, Fi, Al-Qalamu).',
        solutionStepsAr: [
          '1. كلمة "يَشْرَبُ": فعل مضارع، والتنوين من علامات الأسماء الخاصة التي يمتنع دخولها على الأفعال.',
          '2. كلمة "فِي": حرف جر، والحروف مبنية ولا تقبل علامات الأسماء.',
          '3. كلمة "القَلَمُ": اسم لكنه مقترن بـ (أل التعريف)، والتنوين وأل ضدان لا يجتمعان في كلمة واحدة.'
        ],
        solutionStepsEn: [
          '1. "Yashrabu": Verb; verbs reject nominal nunation.',
          '2. "Fi": Particle; indeclinable and rejects noun markers.',
          '3. "Al-Qalamu": Noun with definite article "Al-"; Al- and Tanween are strictly mutually exclusive.'
        ],
        answerAr: 'يَشْرَبُ لأنه فعل | فِي لأنه حرف | القَلَمُ لاقترانه بأل التعريف المانعة للتنوين.',
        answerEn: 'Yashrabu is a verb | Fi is a particle | Al-Qalamu carries the definite article.'
      }
    ],

    assessment: {
      id: 'quiz-lang-1',
      lectureId: 'lang-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: أقسام الكلمة وعلامات التمييز',
      titleEn: 'Lecture 1 Assessment: Parts of Speech & Definitive Markers',
      passingScore: 80,
      questions: [
        {
          id: 'qlg1-1',
          textAr: 'أي من الكلمات التالية تُعد "اسماً" لأنها تقبل علامة التنوين ودخول أل التعريف؟',
          textEn: 'Which of the following is a noun accepting Tanween and the definite article?',
          optionsAr: ['شَجَرَةٌ', 'يَذْهَبُ', 'عَلَى', 'انْطَلَقَ'],
          optionsEn: ['Shajarah (Tree)', 'Yadhhab (Goes)', 'Ala (On)', 'Intalaqa (Launched)'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الاسم الفارقة (التنوين وأل)',
          conceptTestedEn: 'Noun Identification Markers',
          explanationAr: 'كلمة "شجرةٌ" اسم لأنها تقبل التنوين، وأل التعريف (الشجرة)، والتاء المربوطة، وحروف الجر (على شجرةٍ). أما يذهب وانطلق فهما فعلان، وعلى حرف.',
          explanationEn: 'Shajarah is a noun because it readily accepts tanween, the definite article (Al-Shajarah), and prepositions.',
          difficulty: 'easy'
        },
        {
          id: 'qlg1-2',
          textAr: 'ما العلامة النحوية الفارقة التي يختص بها الفعل الماضي دون سائر الأفعال؟',
          textEn: 'What grammatical marker is uniquely exclusive to past tense verbs?',
          optionsAr: [
            'قبول تاء التأنيث الساكنة وتاء الفاعل المتحركة في آخره (مثل: نَجَحَتْ / نَجَحْتُ)',
            'قبول حرف الجزم "لَمْ" في أوله',
            'قبول سين الاستقبال "سـ"',
            'قبول دخول أل التعريف في أوله'
          ],
          optionsEn: [
            'Accepting quiescent feminine Taa and subject Taa suffixes (e.g. نجحت)',
            'Accepting jussive particle Lam prefix',
            'Accepting future particle Seen prefix',
            'Accepting definite article Al-'
          ],
          correctIndex: 0,
          conceptTestedAr: 'علامات الفعل الماضي الحصرية',
          conceptTestedEn: 'Past Tense Verb Verification Markers',
          explanationAr: 'الفعل الماضي يختص بقبول تاء التأنيث الساكنة (كتبَتْ) وتاء الفاعل المتحركة (كتبتُ). أما "لم" والسين فهما للمضارع، وأل للاسم.',
          explanationEn: 'Past tense verbs uniquely accept quiescent feminine Taa and agent Taa suffixes.',
          difficulty: 'easy'
        },
        {
          id: 'qlg1-3',
          textAr: 'عند فحص كلمة "اسْتَغْفَرَ"، كيف نثبت أنها فعل ماضٍ وليست اسماً ولا فعلاً مضارعاً؟',
          textEn: 'How do we prove that "Istaghfara" is a past verb and not a noun or present verb?',
          optionsAr: [
            'لأنها تقبل تاء التأنيث الساكنة في آخرها: "اسْتَغْفَرَتْ" وتمتنع عن قبول التنوين و"لَمْ"',
            'لأنها تبدأ بهمزة وصل فقط',
            'لأنها تقبل التنوين: "استغفارٌ"',
            'لأنها تقبل حرف الجر "في"'
          ],
          optionsEn: [
            'Accepts feminine Taa "Istaghfarat" while rejecting Tanween and Lam',
            'Because it begins with Hamzat Wasl',
            'Accepts tanween',
            'Accepts prepositions'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التطبيق العملي لاختبارات أزمنة الأفعال',
          conceptTestedEn: 'Applied Verb Tense Testing',
          explanationAr: '"استغفر" فعل ماضٍ لأنه يقبل تاء التأنيث (استغفرَتْ) وتاء الفاعل (استغفرتُ)، ولا يقبل علامات الاسم (لا يصح الاستغفرَ) ولا علامات المضارع.',
          explanationEn: 'Istaghfara accepts past-tense Taa suffixes (Istaghfarat) confirming past verb status.',
          difficulty: 'medium'
        },
        {
          id: 'qlg1-4',
          textAr: 'ما الضابط النحوي الصحيح للحرف في اللغة العربية؟',
          textEn: 'What is the precise grammatical definition of an Arabic particle (Harf)?',
          optionsAr: [
            'كلمة لا يقبل علامات الاسم ولا علامات الفعل، ولا يتضح معناه التام إلا مقترناً بغيره في جملة',
            'كلمة تدل على حدث مقترن بزمن المستقبل',
            'اسم مبني يقبل التنوين في الضرورة الشعرية',
            'فعل ناقص لا يحتاج إلى فاعل'
          ],
          optionsEn: [
            'Word rejecting noun and verb markers, revealing full meaning only when contextualized',
            'Word denoting action in future tense',
            'Declinable noun with poetical license',
            'Defective verb requiring no agent'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الحرف وضابطه النحوي السلبي والإيجابي',
          conceptTestedEn: 'Definition and Criteria of Particles',
          explanationAr: 'الحرف هو ما لا يصلح معه دليل الاسم ولا دليل الفعل، ودوره ربط الكلمات لبناء معانٍ سياقية (كالظرفية والابتداء والانتهاء).',
          explanationEn: 'A particle is identified by rejecting both noun and verb markers and functioning as a syntactic and semantic connector.',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'lang-2',
    order: 2,
    titleAr: 'المحاضرة 2: الجملة الاسمية وركناها الأساسيان: المبتدأ والخبر',
    titleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',
    subtitleAr: 'التعرف على المبتدأ المرفوع والخبر المتمم للمعنى، وعلامات الرفع الأصلية والفرعية وصور الخبر',
    subtitleEn: 'Master subject and predicate identification, nominative inflections, and diverse predicate structures.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-1',
    prerequisiteTitleAr: 'المحاضرة 1: أقسام الكلمة (الاسم والفعل والحرف) وعلامات التمييز',
    prerequisiteTitleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: الأعلام والمجتمع',
    unitTitleEn: 'Unit 2: Notable Figures & Society',
    lessonNumberAr: 'الدرس 2: الوظيفة النحوية: المبتدأ والخبر وعلامات رفعهما',
    lessonNumberEn: 'Lesson 2: Syntactic Roles: Subject, Predicate & Nominative Case',

    warmupHookAr: 'عندما تريد التعبير عن حقيقة ثابتة كقولك: "الصِّدْقُ خُلُقٌ عَظِيمٌ" أو "السَّمَاءُ صَافِيَةٌ"، فإنك تبدأ جملتك باسم لتبني عليه حكماً واضحاً ومكتملاً. هذا التركيب الثنائي المتماسك هو "الجملة الاسمية". كيف نحدد المبتدأ والخبر مهما طالت الجملة؟ وما هي علامات رفعهما في المفرد والمثنى وجمع المذكر السالم والأسماء الخمسة؟',
    warmupHookEn: 'Nominal sentences establish enduring truths by pairing a leading subject (Mubtada) with an informative predicate (Khabar). Master their syntactic agreement across singular, dual, and plural declensions.',

    learningOutcomesAr: [
      'أن يحدد الطالب ركني الجملة الاسمية (المبتدأ والخبر) في نصوص فصيحة',
      'أن يطبق الطالب حكم الرفع الإعرابي على المبتدأ والخبر بالعلامات الأصلية والفرعية',
      'أن يوضح الطالب صور الخبر المختلفة (مفرد، جملة فعلية، جملة اسمية، شبه جملة)',
      'أن يضبط الطالب أواخر المبتدأ والخبر ضبطاً إعرابياً صحيحاً بالشكل'
    ],
    learningOutcomesEn: [
      'Pinpoint Subject (Mubtada) and Predicate (Khabar) in authentic sentences',
      'Apply primary and secondary nominative case inflections accurately',
      'Distinguish predicate classifications: Single Word, Verbal Sentence, Nominal Sentence, Prepositional Phrase',
      'Vocalize and vocal-mark sentence terminal vowels according to strict Arabic grammar'
    ],

    vocabulary: [
      {
        termAr: 'الجملة الاسمية (Nominal Sentence)',
        termEn: 'Nominal Sentence',
        definitionAr: 'كل جملة تبتدئ باسم في الأصل، وتتألف من ركنين أساسيين هما المبتدأ والخبر.',
        definitionEn: 'A sentence commencing with a noun, fundamentally structured around Subject and Predicate.'
      },
      {
        termAr: 'المبتدأ (Subject / Mubtada)',
        termEn: 'Mubtada (Subject)',
        definitionAr: 'اسم صريح أو مؤول مرفوع، مجرد عن العوامل اللفظية غير الزائدة، يقع في صدر الجملة غالباً ليكون محور الحديث.',
        definitionEn: 'The primary nominative noun positioned as the thematic anchor of the nominal sentence.'
      },
      {
        termAr: 'الخبر (Predicate / Khabar)',
        termEn: 'Khabar (Predicate)',
        definitionAr: 'الجزء المنتظم منه مع المبتدأ جملة مفيدة تُتمم المعنى وتخبر عن حال المبتدأ.',
        definitionEn: 'The syntactically vital complement that completes the propositional meaning of the subject.'
      },
      {
        termAr: 'علامات الرفع الأصلية والفرعية (Nominative Markers)',
        termEn: 'Nominative Inflections',
        definitionAr: 'الضمة (العلامة الأصلية للمفرد وجمع التكسير وجمع المؤنث السالم)، والألف (للمثنى)، والواو (لجمع المذكر السالم والأسماء الخمسة).',
        definitionEn: 'Dammah (primary for singular/broken plural), Alif (for dual), and Waw (for sound masculine plural & five nouns).'
      }
    ],

    keyConceptsAr: [
      'تعريف الجملة الاسمية وركناها: المبتدأ والخبر',
      'حكم المبتدأ والخبر: الرفع دائماً',
      'علامات الرفع: الضمة (أصلية)، الألف (مثنى)، الواو (جمع مذكر سالم وأسماء خمسة)',
      'أنواع الخبر: مفرد، جملة (فعلية/اسمية)، شبه جملة (جار ومجرور أو ظرف)'
    ],
    keyConceptsEn: [
      'Nominal Sentence Architecture: Mubtada + Khabar',
      'Nominative Agreement Rule',
      'Primary vs Secondary Nominative Inflection Markers',
      'Predicate Typology: Single, Verbal, Phrasal'
    ],
    summaryAr: 'الجملة الاسمية تبدأ باسم وتتألف من ركنين مرفوعين: المبتدأ وهو المتحدث عنه، والخبر وهو الجزء الذي يكمل المعنى ويحقق الفائدة التامة للمستمع.',
    summaryEn: 'Nominal sentences unite a nominative subject and predicate to form a coherent statement carrying primary (Dammah) or secondary (Alif/Waw) inflections.',

    sections: [
      {
        titleAr: '1. ركنا الجملة الاسمية وحكمهما الإعرابي',
        titleEn: '1. Subject and Predicate Architecture & Invariant Nominative Rule',
        contentAr: 'تتكون الجملة الاسمية من ركنين أساسيين متلازمين:\n1. المبتدأ: وهو الاسم المرفوع الذي نبدأ به الجملة ونريد الإخبار عنه.\n2. الخبر: وهو الكلمة أو التركيب الذي يتمم معنى الجملة مع المبتدأ؛ فإذا سألت بعد ذكر المبتدأ: "ما به؟" أو "ما شأنه؟"، فإن الجواب هو الخبر.\n\nحكم المبتدأ والخبر: مرفوعان دائماً ما لم يدخل عليهما ناسخ.\nوعلامات رفعهما:\n- الضمة الظاهرة: في الاسم المفرد (الطالبُ مجتهدٌ)، وجمع التكسير (العلماءُ مصابيحُ)، وجمع المؤنث السالم (المعلماتُ مخلصاتٌ).\n- الألف: في المثنى (الطالبانِ مجتهدانِ).\n- الواو: في جمع المذكر السالم (المعلمونَ مخلصونَ)، وفي الأسماء الخمسة (أبوك رجلٌ فاضلٌ).',
        contentEn: 'Nominal sentences require two nominative pillars: Mubtada (subject) and Khabar (predicate). Inflections include Dammah (singular/broken plural), Alif (dual), and Waw (sound masculine plural and five nouns).',
        diagram: {
          id: 'diag-arabic-sentence-struct',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'بنية الجملة الاسمية ومقارنتها بالجملة الفعلية',
          titleEn: 'Nominal Sentence Architecture vs Verbal Structure',
          captionAr: 'مخطط تفصيلي يوضح تركيب الجملة الاسمية (المبتدأ + الخبر) وحكمهما الإعرابي المرفوع، ومقارنتها بالجملة الفعلية.',
          captionEn: 'Structural schema contrasting Nominal sentences (Subject + Predicate) with Verbal sentences (Verb + Agent + Object).',
          diagramType: 'arabic_sentence_structure',
          takeawayFormulaAr: 'الجملة الاسمية = مبتدأ (مرفوع) + خبر (مرفوع متمم للمعنى)',
          takeawayFormulaEn: 'Nominal Sentence = Mubtada (Nominative) + Khabar (Nominative Complement)',
          keyLabels: [
            { tagAr: 'المبتدأ والخبر', tagEn: 'Subject & Predicate', color: '#818cf8' },
            { tagAr: 'علامات الرفع', tagEn: 'Nominative Markers', color: '#38bdf8' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق منهجي (2-1): تحديد المبتدأ والخبر وعلامات رفعهما الإعرابية',
          titleEn: 'Worked Example (2-1): Identifying Subject, Predicate & Inflection Markers',
          equation: 'المبتدأ المرفوع + الخبر المرفوع المتمم',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الجملة الأولى: "المُعَلِّمُونَ صَانِعُو الأَجْيَالِ".', 
              textEn: 'Sentence 1: "Teachers are the shapers of generations."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المبتدأ: "المُعَلِّمُونَ" -> مبتدأ مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم.', 
              textEn: 'Subject: "Al-Muallimoona" -> Nominative with Waw (Sound Masculine Plural).' 
            },
            { 
              stepNumber: 3, 
              textAr: 'الخبر: "صَانِعُو" -> خبر مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم، وحُذفت نونه للإضافة (صانعو الأجيال).', 
              textEn: 'Predicate: "Saaniou" -> Nominative with Waw; Nun dropped due to Idhafah annexation.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'الجملة الثانية: "أَخُوكَ ذُو خُلُقٍ حَسَنٍ". المبتدأ "أَخُوكَ" مرفوع بالواو لأنه من الأسماء الخمسة، والخبر "ذُو" مرفوع بالواو لأنه من الأسماء الخمسة.', 
              textEn: 'Sentence 2: "Akhooka dhoo khuluqin". Both subject and predicate are nominative with Waw (Five Nouns).' 
            }
          ],
          takeawayAr: 'الخبر لا يشترط أن يأتي ملاصقاً للمبتدأ مباشرة، بل هو الكلمة التي يكتمل بها المعنى والفائدة.',
          takeawayEn: 'The predicate need not strictly adjoin the subject; it is defined by completing the propositional assertion.'
        },
        tipsAr: ['إذا كان المبتدأ جمع تكسير لغير العاقل جاز الإخبار عنه بالمفرد المؤنث؛ نقول: "الجبالُ شاهقةٌ" أو "الجبالُ شاهقاتٌ".']
      },
      {
        titleAr: '2. أنواع وصور الخبر في الجملة الاسمية',
        titleEn: '2. Predicate Classifications: Single, Sentence & Phrasal Forms',
        contentAr: 'الخبر ليس دائماً كلمة مفردة، بل يأتي على ثلاثة أقسام رئيسة:\n\n1. خبر مفرد: ما ليس جملة ولا شبه جملة، حتى لو كان مثنى أو جمعاً (مثل: الطالبُ نشيطٌ، الطلابُ نشيطونَ).\n2. خبر جملة:\n   - جملة فعلية: (مثل: الطالبُ يُذَاكِرُ دُرُوسَهُ)؛ حيث الجملة الفعلية "يذاكر" في محل رفع خبر.\n   - جملة اسمية: (مثل: الحديقةُ أَزْهَارُهَا جَمِيلَةٌ)؛ وتشتمل على ضمير (الهاء) يعود على المبتدأ الأول.\n3. خبر شبه جملة:\n   - جار ومجرور: (مثل: العُصْفُورُ عَلَى الشَّجَرَةِ).\n   - ظرف زمان أو مكان: (مثل: السَّفَرُ غَداً، القَائِدُ أَمَامَ الجُنُودِ).',
        contentEn: 'Predicates present across 3 typologies: Single Word (Mufrad), Full Sentence (Verbal/Nominal requiring a linking pronoun), and Phrasal (Prepositional / Adverbial quasi-sentence).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (2-2): تمييز أنواع الخبر المتعددة وإعرابها محلياً',
          titleEn: 'Worked Example (2-2): Discriminating Predicate Typologies & Local Parsing',
          equation: 'المبتدأ + [الخبر ونوعه: مفرد / جملة فعلية / جملة اسمية / شبه جملة]',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'النموذج 1: "المُسْلِمُ يُحِبُّ الخَيْرَ". المبتدأ: المسلمُ. الخبر: جملة "يُحِبُّ الخيرَ" (جملة فعلية في محل رفع خبر).', 
              textEn: 'Model 1: "The Muslim loves goodness". Predicate: "Loves goodness" (Verbal sentence in nominative place).' 
            },
            { 
              stepNumber: 2, 
              textAr: 'النموذج 2: "المَدْرَسَةُ فِنَاؤُهَا وَاسِعٌ". المبتدأ الأول: المدرسة. الخبر: "فناؤها واسع" (جملة اسمية مركبة من مبتدأ ثانٍ وخبره في محل رفع خبر المبتدأ الأول).', 
              textEn: 'Model 2: "The school, its courtyard is vast". Predicate: Embedded nominal sentence with linking pronoun.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'النموذج 3: "النَّصْرُ قَرِيبٌ". المبتدأ: النصر. الخبر: "قريب" (خبر مفرد مرفوع بالضمة).', 
              textEn: 'Model 3: "Victory is near". Predicate: Single word nominative with Dammah.' 
            }
          ],
          takeawayAr: 'خبر الجملة الاسمية أو الفعلية يكون دائماً "في محل رفع"، ولا بد أن يشتمل على رابط (ضمير) يربطه بالمبتدأ.',
          takeawayEn: 'Sentence predicates occupy nominative syntactic place and require an explicit or implicit referencing pronoun.'
        },
        tipsAr: ['شبه الجملة (الجار والمجرور أو الظرف) متعلق بمحذوف تقديره "كائن" أو "مستقر".']
      }
    ],

    conceptMapSummaryAr: 'الجملة الاسمية تبدأ باسم وتتكون من: مبتدأ (مرفوع) + خبر (مرفوع متمم للمعنى). علامات الرفع: الضمة (مفرد، جمع تكسير، مؤنث سالم)، الألف (مثنى)، الواو (مذكر سالم، أسماء خمسة). ويأتي الخبر: مفرداً، أو جملة اسمية/فعلية، أو شبه جملة.',
    conceptMapSummaryEn: 'Nominal Sentence = Subject (Nominative) + Predicate (Nominative Complement). Inflections: Dammah, Alif, Waw. Predicate Forms: Single Word, Sentence, Prepositional/Adverbial Phrase.',

    goldenRulesAr: [
      'القاعدة 1: الجملة الاسمية تبدأ باسم وتتألف من ركنين متلازمين هما المبتدأ والخبر.',
      'القاعدة 2: المبتدأ والخبر كلاهما مرفوع دائماً في أصل اللغة.',
      'القاعدة 3: الضمة هي علامة الرفع الأصلية للمفرد وجمع التكسير وجمع المؤنث السالم.',
      'القاعدة 4: الألف هي علامة رفع المثنى (الكتابان مفيدان).',
      'القاعدة 5: الواو هي علامة رفع جمع المذكر السالم (المجتهدون فائزون) والأسماء الخمسة (أخوك ذو فضل).',
      'القاعدة 6: الخبر هو الجزء المتمم للفائدة، ولا يشترط أن يلي المبتدأ مباشرة.',
      'القاعدة 7: خبر الجملة (الفعلية أو الاسمية) وخبر شبه الجملة يكون في محل رفع.'
    ],
    goldenRulesEn: [
      'Rule 1: Nominal sentences commence with a noun and require Subject + Predicate.',
      'Rule 2: Subject and predicate are strictly nominative by default.',
      'Rule 3: Dammah is the cardinal primary nominative marker.',
      'Rule 4: Alif is the secondary nominative marker for dual nouns.',
      'Rule 5: Waw is the secondary nominative marker for sound masculine plurals and Five Nouns.',
      'Rule 6: Predicates are defined by informational completion rather than strict adjacent adjacency.',
      'Rule 7: Sentential and phrasal predicates occupy nominative syntactic place (Fee Mahalli Raf).'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-2-1',
        questionAr: 'أعرب الجملة التالية إعراباً تفصيلياً تاماً: "الطَّالِبَانِ المُجْتَهِدَانِ فَائِزَانِ بالجَائِزَةِ".',
        questionEn: 'Fully parse the sentence: "The two diligent students are winners of the prize."',
        solutionStepsAr: [
          '1. "الطَّالِبَانِ": مبتدأ مرفوع وعلامة رفعه الألف لأنه مثنى، والنون عوض عن التنوين في الاسم المفرد.',
          '2. "المُجْتَهِدَانِ": نعت (صفة) مرفوع وعلامة رفعه الألف لأنه مثنى (لم يتمم المعنى بل وصف المبتدأ).',
          '3. "فَائِزَانِ": خبر المبتدأ مرفوع وعلامة رفعه الألف لأنه مثنى (تم به المعنى).',
          '4. "بالجَائِزَةِ": الباء حرف جر، والجائزةِ اسم مجرور بالكسرة الظاهرة.'
        ],
        solutionStepsEn: [
          '1. "Al-Talibani": Subject nominative with Alif (Dual).',
          '2. "Al-Mujtahidani": Adjective nominative with Alif.',
          '3. "Faaizani": Predicate nominative with Alif (Dual) completing propositional sense.',
          '4. "Bil-Jaaizati": Preposition + Genitive Noun with Kasrah.'
        ],
        answerAr: 'الطالبان: مبتدأ مرفوع بالألف | المجتهدان: نعت مرفوع بالألف | فائزان: خبر مرفوع بالألف | بالجائزة: جار ومجرور.',
        answerEn: 'Subject, Adjective, Predicate (all dual nominative with Alif), followed by prepositional phrase.'
      },
      {
        id: 'ex-lang-2-2',
        questionAr: 'عين الخبر ونوعه في الجملة التالية: ﴿وَاللهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ﴾.',
        questionEn: 'Identify the predicate and its type in the verse: "And Allah knows while you do not know."',
        solutionStepsAr: [
          '1. المبتدأ هو لفظ الجلالة "اللهُ" (مبتدأ مرفوع بالضمة الظاهرة).',
          '2. الكلمة التي أخبرت عن المبتدأ وتممت المعنى هي الفعل "يَعْلَمُ" مع فاعله المستتر (تقديره هو).',
          '3. إذن نوع الخبر: جملة فعلية (جملة "يعلم" في محل رفع خبر المبتدأ).'
        ],
        solutionStepsEn: [
          '1. Subject is the Divine Name "Allah" (Nominative with Dammah).',
          '2. Complementing utterance is the verbal phrase "Yalamu" (knows) with implied pronoun.',
          '3. Predicate Classification: Verbal Sentence in nominative place.'
        ],
        answerAr: 'الخبر هو الجملة الفعلية "يَعْلَمُ" (في محل رفع خبر).',
        answerEn: 'Predicate: The verbal sentence "Yalamu" (in nominative place).'
      }
    ],

    assessment: {
      id: 'quiz-lang-2',
      lectureId: 'lang-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: المبتدأ والخبر وعلامات رفعهما',
      titleEn: 'Lecture 2 Assessment: Nominal Sentences Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qlg2-1',
          textAr: 'في جملة "المُهَنْدِسُونَ البَارِعُونَ مُكَرَّمُونَ"، ما هي علامة رفع المبتدأ والخبر؟',
          textEn: 'In "The ingenious engineers are honored", what is the nominative marker?',
          optionsAr: ['الواو لأنه جمع مذكر سالم', 'الضمة الظاهرة', 'الألف لأنه مثنى', 'ثبوت النون'],
          optionsEn: ['Waw (Sound Masculine Plural)', 'Dammah', 'Alif (Dual)', 'Retained Nun'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الرفع الفرعية لجمع المذكر السالم',
          conceptTestedEn: 'Secondary Nominative Markers for Plurals',
          explanationAr: 'جمع المذكر السالم يُرفع بالواو نيابة عن الضمة، فالمبتدأ (المهندسون) والخبر (مكرمون) كلاهما مرفوع وعلامة رفعه الواو.',
          explanationEn: 'Sound masculine plurals take Waw as their secondary nominative inflection marker.',
          difficulty: 'easy'
        },
        {
          id: 'qlg2-2',
          textAr: 'ما نوع الخبر في جملة: "المُؤْمِنُ أَخْلَاقُهُ سَامِيَةٌ"؟',
          textEn: 'What is the predicate type in: "The believer, his morals are sublime"?',
          optionsAr: ['خبر جملة اسمية', 'خبر مفرد', 'خبر جملة فعلية', 'خبر شبه جملة'],
          optionsEn: ['Nominal Sentence Predicate', 'Single Word Predicate', 'Verbal Sentence Predicate', 'Phrasal Predicate'],
          correctIndex: 0,
          conceptTestedAr: 'صور الخبر: الجملة الاسمية ورابط الضمير',
          conceptTestedEn: 'Nominal Sentence Predicate Identification',
          explanationAr: '"أخلاقه سامية" جملة اسمية مركبة من مبتدأ ثانٍ (أخلاق) متصل بضمير (الهاء) وخبر للمبتدأ الثاني (سامية)، والجملة الاسمية كلها في محل رفع خبر للمبتدأ الأول (المؤمن).',
          explanationEn: 'The clause constitutes an embedded nominal sentence with a linking pronoun functioning as the primary predicate.',
          difficulty: 'medium'
        },
        {
          id: 'qlg2-3',
          textAr: 'في جملة "المُعَلِّمُ أَمَامَ التَّلَامِيذِ"، ما هو إعراب "أَمَامَ" وموقع شبه الجملة؟',
          textEn: 'In "The teacher is in front of the students", what is the syntactic role of "Amama"?',
          optionsAr: [
            'ظرف مكان منصوب، وشبه الجملة متعلق بمحذوف خبر في محل رفع',
            'مبتدأ ثانٍ مرفوع بالضمة',
            'مفعول به منصوب للفعل المحذوف',
            'نعت منصوب للمعلم'
          ],
          optionsEn: [
            'Adverb of place (accusative), with the phrase functioning as predicate in nominative place',
            'Second subject nominative with Dammah',
            'Direct object accusative',
            'Adjective'
          ],
          correctIndex: 0,
          conceptTestedAr: 'إعراب خبر شبه الجملة الظرفي',
          conceptTestedEn: 'Adverbial Predicate Parsing',
          explanationAr: '"أمامَ" ظرف مكان منصوب، وشبه الجملة الظرفية متعلق بمحذوف تقديره "كائن" أو "مستقر" في محل رفع خبر للمبتدأ "المعلم".',
          explanationEn: 'Amama is an adverb of place forming a locative phrasal predicate in the nominative place.',
          difficulty: 'medium'
        },
        {
          id: 'qlg2-4',
          textAr: 'أي من الجمل التالية كُتبت وضُبطت إعرابياً بشكل سليم وصحيح 100%؟',
          textEn: 'Which sentence is 100% grammatically correct in nominative inflection?',
          optionsAr: [
            'أَبُوكَ ذُو عِلْمٍ وَفَضْلٍ',
            'أَبَاكَ ذَا عِلْمٍ وَفَضْلٍ',
            'أَبِيكَ ذِي عِلْمٍ وَفَضْلٍ',
            'أَبُوكَ ذَا عِلْمٍ وَفَضْلٍ'
          ],
          optionsEn: [
            'Abooka dhoo ilmin (Both with Waw)',
            'Abaaka dhaa ilmin (Both with Alif)',
            'Abeeka dhee ilmin (Both with Yaa)',
            'Abooka dhaa ilmin'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق علامات رفع الأسماء الخمسة في المبتدأ والخبر',
          conceptTestedEn: 'Five Nouns Nominative Agreement in Subject & Predicate',
          explanationAr: 'الأسماء الخمسة تُرفع بالواو؛ فالمبتدأ "أَبُوكَ" مرفوع بالواو، والخبر "ذُو" مرفوع بالواو أيضاً.',
          explanationEn: 'Both subject and predicate from the Five Nouns take Waw in the nominative case (Abooka Dhoo).',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'lang-3',
    order: 3,
    titleAr: 'المحاضرة 3: الجملة الفعلية: الفعل والفاعل وعلامات الإعراب',
    titleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',
    subtitleAr: 'فهم أركان الجملة الفعلية، وأحكام الفاعل المرفوع وصوره المتعددة وعلامات إعرابه ومفهوم المفعول به',
    subtitleEn: 'Master verb types, explicit, attached, and implicit agents, case markers, and transitivity.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-2',
    prerequisiteTitleAr: 'المحاضرة 2: الجملة الاسمية وركناها الأساسيان: المبتدأ والخبر',
    prerequisiteTitleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: الوطن والعطاء',
    unitTitleEn: 'Unit 3: Homeland & Dedication',
    lessonNumberAr: 'الدرس 3: الوظيفة النحوية: الجملة الفعلية والفاعل وأنواعه',
    lessonNumberEn: 'Lesson 3: Syntactic Roles: Verbal Sentences, Agents & Types',

    warmupHookAr: 'إذا كانت الجملة الاسمية تعبر عن الثبوت والاستقرار، فإن "الجملة الفعلية" هي لغة الحركة والحدث والتجدد في العربية. لا يمكن لأي فعل في الكون أن يحدث من تلقاء نفسه؛ فلكل عمل فاعل أوجده! كيف نحدد الفاعل حين يختفي في ضمير مستتر أو يتصل كحرف واحد بالفعل؟ وكيف نميز بين الفاعل المرفوع والمفعول به المنصوب؟',
    warmupHookEn: 'Verbal sentences bring movement and dynamism to language. Every action demands an agent (Faail). Master explicit, attached, and implicit pronoun agents with infallible precision.',

    learningOutcomesAr: [
      'أن يحدد الطالب ركني الجملة الفعلية الأساسيين (الفعل والفاعل) في شواهد متنوعة',
      'أن يميز الطالب بين صور الفاعل الثلاث (اسم ظاهر، ضمير متصل، ضمير مستتر)',
      'أن يضبط الطالب الفاعل بعلامة الرفع المناسبة (الضمة، الألف، الواو)',
      'أن يفرق الطالب بين الفعل اللازم والفعل المتعدي الذي ينصب مفعولاً به'
    ],
    learningOutcomesEn: [
      'Locate primary pillars of verbal sentences (Verb and Faail / Agent)',
      'Distinguish 3 agent forms: Explicit Noun, Attached Pronoun, and Latent / Implicit Pronoun',
      'Vocalize agents with correct nominative markers across all noun subclasses',
      'Differentiate intransitive vs transitive verbs governing accusative objects'
    ],

    vocabulary: [
      {
        termAr: 'الجملة الفعلية (Verbal Sentence)',
        termEn: 'Verbal Sentence',
        definitionAr: 'كل جملة تبدأ بفعل تام (ماضٍ أو مضارع أو أمر)، وتتألف أساساً من فعل وفاعل.',
        definitionEn: 'A sentence commencing with a finite verb and constituted fundamentally of Verb and Agent.'
      },
      {
        termAr: 'الفاعل (Faail / Agent)',
        termEn: 'Faail (Agent / Subject of Verb)',
        definitionAr: 'اسم مرفوع أو في محل رفع، يقع بعد فعل تام مبني للمعلوم ويدل على من قام بالفعل أو اتصف به.',
        definitionEn: 'The nominative entity succeeding an active verb, denoting the doer or bearer of the action.'
      },
      {
        termAr: 'الضمير المتصل (Attached Pronoun Agent)',
        termEn: 'Attached Pronoun',
        definitionAr: 'ضمير يتصل بالفعل مباشرة ليكون في محل رفع فاعل (مثل تاء الفاعل، نا الفاعلين، واو الجماعة، ألف الاثنين، ياء المخاطبة، نون النسوة).',
        definitionEn: 'Nominative pronoun suffixes directly fusing to verbs (Taa, Na, Waw of Plurality, Alif of Dual, Nun of Femininity).'
      },
      {
        termAr: 'الضمير المستتر (Implicit / Latent Pronoun)',
        termEn: 'Latent Pronoun',
        definitionAr: 'ضمير غير منطوق ولا مكتوب يُقدر في الذهن ويكون في محل رفع فاعل (مثل: محمدٌ قَرَأَ [أي: هو]).',
        definitionEn: 'An unpronounced, implicit subject pronoun mentally inferred from context (e.g. He/She/I).'
      }
    ],

    keyConceptsAr: [
      'أركان الجملة الفعلية: فعل تام + فاعل مرفوع',
      'صور الفاعل: اسم ظاهر، ضمير متصل، ضمير مستتر',
      'الفاعل يقع دائماً بعد الفعل ولا يتقدم عليه أبداً في الإعراب',
      'الفعل اللازم يكتفي بفاعله، والمتعدي يتعدى لينصب مفعولاً به'
    ],
    keyConceptsEn: [
      'Verbal Sentence Foundations: Finite Verb + Nominative Agent',
      'Three Agent Typologies: Explicit, Attached, Latent',
      'Syntactic Precedence Rule (Agent strictly follows verb)',
      'Intransitive vs Transitive Verbal Complements'
    ],
    summaryAr: 'تبدأ الجملة الفعلية بفعل يعبر عن حدث مقترن بزمن، ويليه الفاعل المرفوع دائماً والذي قد يكون اسماً ظاهراً أو ضميراً متصلاً أو مستتراً، وقد يحتاج الفعل المتعدي إلى مفعول به منصوب لتتم الفائدة.',
    summaryEn: 'Verbal sentences originate with an action verb followed by its nominative agent (explicit noun or pronoun), occasionally completed by an accusative object when transitive.',

    sections: [
      {
        titleAr: '1. أركان الجملة الفعلية وأحكام الفاعل وصوره',
        titleEn: '1. Verbal Sentence Pillars & Agent Typologies',
        contentAr: 'تتألف الجملة الفعلية من ركنين رئيسين:\n1. الفعل: وهو اللبنة الأولى الدالة على الحدث والزمن.\n2. الفاعل: وهو الاسم المرفوع الذي يدل على من فعل الفعل أو اتصف به، وحكمه الإعرابي: الرَّفْعُ دائماً.\n\nيأتي الفاعل على ثلاث صور رئيسة:\n- أولاً: اسم ظاهر: (مثل: حَفِظَ الطَّالِبُ القُرْآنَ) -> الفاعل "الطالبُ" اسم مفرد مرفوع بالضمة.\n- ثانياً: ضمير متصل: (مثل: كَتَبْتُ الواجبَ - الطلابُ حَضَرُوا - الفتياتُ كَتَبْنَ) -> التاء، واو الجماعة، ونون النسوة ضمائر متصلة مبنية في محل رفع فاعل.\n- ثالثاً: ضمير مستتر: (مثل: الجنديُّ دَافَعَ عن الوطنِ -> أي دافع [هُوَ] - اكْتُبْ دَرْسَكَ -> أي اكتب [أَنْتَ]).',
        contentEn: 'Verbal sentences feature Verb and Agent. The Agent is strictly nominative and manifests as an Explicit Noun, Attached Pronoun (e.g. Taa, Waw, Nun), or Latent Pronoun (Huwa, Anta, Ana).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (3-1): تحديد صور الفاعل وإعرابه في شواهد متعددة',
          titleEn: 'Worked Example (3-1): Identifying Agent Forms & Syntactic Parsing',
          equation: 'الفعل + السؤال: (مَن فعل الحدث؟) = الفاعل وصورته',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'المثال 1: "انْتَصَرَ الحَقُّ". نسأل: من انتصر؟ الجواب: "الحَقُّ" -> فاعل اسم ظاهر مرفوع وعلامة رفعه الضمة الظاهرة.', 
              textEn: 'Example 1: "Truth triumphed". Agent: "Al-Haqqu" (Explicit Noun nominative with Dammah).' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المثال 2: "سَاعَدْتُ المُحْتَاجِينَ". نسأل: من ساعد؟ تاء المتكلم -> التاء ضمير متصل مبني على الضم في محل رفع فاعل.', 
              textEn: 'Example 2: "I helped the needy". Agent: Attached Taa pronoun in nominative place.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'المثال 3: "خَالِدٌ قَرَأَ الكِتَابَ". الفعل "قَرَأَ" والفاعل ضمير مستتر جوازاً تقديره "هُوَ" يعود على خالد (ولا يجوز إعراب خالد فاعلاً لأنه تقدم على الفعل).', 
              textEn: 'Example 3: "Khalid read the book". Agent is an implicit pronoun (Huwa); Khalid is the preceding subject.' 
            }
          ],
          takeawayAr: 'الفاعل لا يتقدم على فعله أبداً؛ فإذا تقدم الاسم على الفعل أصبح "مبتدأ" والفاعل ضميراً مستتراً يعود عليه.',
          takeawayEn: 'In Arabic grammar, the Agent never precedes the verb; if a noun precedes, it becomes a Subject (Mubtada).'
        },
        tipsAr: ['تاء التأنيث الساكنة (كَتَبَتْ) حرف لا محل له من الإعراب وليست فاعلاً؛ الفاعل بعدها مستتر (هي) أو اسم ظاهر (كتبت هندٌ).']
      },
      {
        titleAr: '2. الفعل اللازم والمتعدي والمفعول به المنصوب',
        titleEn: '2. Intransitive vs Transitive Verbs & Accusative Objects',
        contentAr: 'ينقسم الفعل من حيث حاجته إلى مفعول به إلى نوعين:\n1. الفعل اللازم: هو الفعل الذي يكتفي بفاعله لإتمام معنى الجملة ولا ينصب مفعولاً به (مثل: نَامَ الطِّفْلُ، أَشْرَقَتِ الشَّمْسُ، جَلَسَ الضَّيْفُ).\n2. الفعل المتعدي: هو الفعل الذي لا يكتفي بفاعله، بل يحتاج إلى مفعول به واحد أو أكثر لإتمام معنى الجملة (مثل: كَرَّمَ المُعَلِّمُ المُتَفَوِّقِينَ).\n\nالمفعول به: اسم منصوب يدل على من وقع عليه فعل الفاعل.\nعلامات نصبه:\n- الفتحة: في المفرد وجمع التكسير (قرأتُ كتاباً / كتباً).\n- الياء: في المثنى وجمع المذكر السالم (كافأتُ الطالبَيْنِ / الفائزِينَ).\n- الكسرة نيابة عن الفتحة: في جمع المؤنث السالم (شكرتُ المعلماتِ).\n- الألف: في الأسماء الخمسة (أكرمتُ أباك).',
        contentEn: 'Verbs are Intransitive (Lazim, satisfying meaning with Agent alone) or Transitive (Mutaaddi, governing accusative objects). Accusative markers include Fathah (singular), Yaa (dual/plural), Kasrah (sound feminine plural), and Alif (Five Nouns).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (3-2): تمييز الفعل اللازم من المتعدي وإعراب المفعول به',
          titleEn: 'Worked Example (3-2): Transitivity Testing & Direct Object Inflections',
          equation: 'الفعل + (ماذا / هـ الغيبة) -> إن قبلها فهو متعدٍ',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'فحص "ذَهَبَ": هل يصح أن نقول "ماذا ذهب؟" أو "ذهبَه"؟ لا يصح -> إذن "ذهب" فعل لازم يكتفي بفاعله (ذهب الطالبُ إلى المدرسةِ).', 
              textEn: 'Test "Dhahaba" (went): Cannot take direct object pronoun -> Intransitive.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'فحص "شَرَحَ": يصح أن نقول "شَرَحَهُ المعلمُ" و"ماذا شرح؟ شرحَ الدرسَ" -> إذن "شرح" فعل متعدٍ.', 
              textEn: 'Test "Sharaha" (explained): Readily accepts object pronoun (Sharahahu) -> Transitive.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'إعراب المفعول به في: "كَرَّمَتِ المَدْرَسَةُ الطَّالِبَاتِ المُتَفَوِّقَاتِ": "الطَّالِبَاتِ" مفعول به منصوب وعلامة نصبه الكسرة نيابة عن الفتحة لأنه جمع مؤنث سالم.', 
              textEn: 'Parse: "Al-Talibati" is direct object accusative with Kasrah substituting for Fathah (Sound Feminine Plural).' 
            }
          ],
          takeawayAr: 'علامة نصب جمع المؤنث السالم هي الكسرة نيابة عن الفتحة وهي من أهم مواضع الاختبارات النحوية.',
          takeawayEn: 'Sound feminine plurals take Kasrah as an accusative substitution marker, a prime testing focal point.'
        },
        tipsAr: ['للتفريق السريع بين اللازم والمتعدي: صل بالفعل هاء الغيبة، فإن قبلها فهو متعدٍ (فَهِمَ -> فَهِمَهُ).']
      }
    ],

    conceptMapSummaryAr: 'الجملة الفعلية = فعل تام + فاعل مرفوع (+ مفعول به منصوب إن كان الفعل متعدياً). صور الفاعل: اسم ظاهر، ضمير متصل (توانينا)، ضمير مستتر. علامات رفع الفاعل: الضمة، الألف، الواو. علامات نصب المفعول به: الفتحة، الياء، الكسرة، الألف.',
    conceptMapSummaryEn: 'Verbal Sentence = Finite Verb + Nominative Agent (+ Accusative Object if transitive). Agent Forms: Explicit Noun, Attached Pronoun, Latent Pronoun. Nominative Markers: Dammah, Alif, Waw.',

    goldenRulesAr: [
      'القاعدة 1: الجملة الفعلية تبدأ بفعل تام، ولا بد لكل فعل من فاعل يقوم به.',
      'القاعدة 2: الفاعل مرفوع دائماً، ولا يتقدم على فعله في الإعراب مطلقاً.',
      'القاعدة 3: ضمائر الرفع المتصلة المجموعة في (تَوَانَيْنَا) تكون دائماً في محل رفع فاعل.',
      'القاعدة 4: الضمير المستتر يقدر بـ (هو، هي، أنا، نحن، أنت) حسب سياق الفعل.',
      'القاعدة 5: الفعل اللازم يكتفي بفاعله، بينما الفعل المتعدي يتعدى لنصب مفعول به.',
      'القاعدة 6: المفعول به منصوب دائماً، وتكون علامة نصبه الكسرة في جمع المؤنث السالم والألف في الأسماء الخمسة.',
      'القاعدة 7: تاء التأنيث الساكنة حرف لا محل له من الإعراب، بينما تاء الفاعل المتحركة ضمير في محل رفع فاعل.'
    ],
    goldenRulesEn: [
      'Rule 1: Verbal sentences commence with a finite verb requiring an agent.',
      'Rule 2: The Agent is strictly nominative and never precedes its governing verb in syntax.',
      'Rule 3: Attached nominative pronouns (Tawanayna) occupy nominative Faail place.',
      'Rule 4: Latent pronouns are inferred contextually (Huwa, Hiya, Ana, Nahnu, Anta).',
      'Rule 5: Intransitive verbs suffice with an agent; transitive verbs govern accusative objects.',
      'Rule 6: Direct objects are strictly accusative (taking Kasrah for feminine plurals and Alif for Five Nouns).',
      'Rule 7: Quiescent feminine Taa is a mere letter, whereas mobile agent Taa is a full pronoun.'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-3-1',
        questionAr: 'استخرج الفاعل وبين نوعه وعلامة إعرابه في الجملة: ﴿إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ * وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا﴾.',
        questionEn: 'Extract the agents, their types, and inflections in Surah An-Nasr.',
        solutionStepsAr: [
          '1. الفعل "جَاءَ": الفاعل هو "نَصْرُ" (نوعه: اسم ظاهر، مرفوع بالضمة الظاهرة).',
          '2. الفعل "رَأَيْتَ": الفاعل هو "التاء" المتحركة (نوعه: ضمير متصل مبني في محل رفع فاعل).',
          '3. الفعل "يَدْخُلُونَ": الفاعل هو "واو الجماعة" (نوعه: ضمير متصل مبني في محل رفع فاعل).'
        ],
        solutionStepsEn: [
          '1. "Jaa-a": Agent is "Nasru" (Explicit Noun, nominative with Dammah).',
          '2. "Ra-ayta": Agent is attached Taa pronoun in nominative place.',
          '3. "Yadkhuloona": Agent is attached Waw of plurality in nominative place.'
        ],
        answerAr: '1) نَصْرُ: اسم ظاهر مرفوع بالضمة | 2) التاء في رأيت: ضمير متصل | 3) الواو في يدخلون: ضمير متصل.',
        answerEn: '1) Nasru: Explicit Noun | 2) Taa: Attached Pronoun | 3) Waw: Attached Pronoun.'
      },
      {
        id: 'ex-lang-3-2',
        questionAr: 'أعرب ما تحته خط في الجملة: "شَكَرَ المُدِيرُ <u>المُعَلِّمَاتِ المُخْلِصَاتِ</u>".',
        questionEn: 'Fully parse the underlined phrase: "The principal thanked the dedicated female teachers."',
        solutionStepsAr: [
          '1. "المُعَلِّمَاتِ": مفعول به منصوب وعلامة نصبه الكسرة الظاهرة نيابة عن الفتحة لأنه جمع مؤنث سالم.',
          '2. "المُخْلِصَاتِ": نعت (صفة) منصوب وعلامة نصبه الكسرة الظاهرة لأنه يتبع المنعوت جمع المؤنث السالم في النصب.'
        ],
        solutionStepsEn: [
          '1. "Al-Muallimati": Direct object accusative with Kasrah substituting for Fathah (Sound Feminine Plural).',
          '2. "Al-Mukhlisati": Adjective accusative with Kasrah following its qualified noun.'
        ],
        answerAr: 'المعلماتِ: مفعول به منصوب بالكسرة نيابة عن الفتحة | المخلصاتِ: نعت منصوب بالكسرة.',
        answerEn: 'Direct object and modifying adjective, both accusative with Kasrah.'
      }
    ],

    assessment: {
      id: 'quiz-lang-3',
      lectureId: 'lang-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: الجملة الفعلية والفاعل',
      titleEn: 'Lecture 3 Assessment: Verbal Sentences Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qlg3-1',
          textAr: 'في جملة "كَتَبْتُ الوَاجِبَ"، ما هو الموقع الإعرابي لـ "التاء" المتحركة؟',
          textEn: 'In "I wrote the homework", what is the syntactic role of the attached Taa?',
          optionsAr: ['ضمير متصل مبني في محل رفع فاعل', 'تاء التأنيث لا محل لها من الإعراب', 'مفعول به مقدم', 'نعت للفعل'],
          optionsEn: ['Attached pronoun in nominative place as Faail (Agent)', 'Quiescent feminine marker', 'Fronted object', 'Adjective'],
          correctIndex: 0,
          conceptTestedAr: 'إعراب تاء الفاعل كضمير متصل',
          conceptTestedEn: 'Attached Pronoun Agent Parsing',
          explanationAr: 'التاء المتحركة (كتبتُ / كتبتَ / كتبتِ) هي تاء الفاعل، وهي ضمير متصل مبني في محل رفع فاعل.',
          explanationEn: 'The mobile Taa is the subject pronoun functioning syntactically as the nominative agent.',
          difficulty: 'easy'
        },
        {
          id: 'qlg3-2',
          textAr: 'في جملة "المُعَلِّمُ شَرَحَ الدَّرْسَ"، أين يقع الفاعل للفعل "شَرَحَ"؟',
          textEn: 'In "The teacher explained the lesson", where is the agent of "Sharaha"?',
          optionsAr: [
            'ضمير مستتر جوازاً تقديره (هُوَ) يعود على المعلم',
            'كلمة (المعلم) المتقدمة في أول الجملة',
            'كلمة (الدرس)',
            'الفعل نفسه'
          ],
          optionsEn: [
            'Implicit pronoun (Huwa) referring back to the teacher',
            'The preceding word (Al-Muallim)',
            'The word (Al-Dars)',
            'The verb itself'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفاعل ضميراً مستتراً وعدم تقدم الفاعل على الفعل',
          conceptTestedEn: 'Latent Pronoun Agent & Non-Precedence Rule',
          explanationAr: 'الفاعل لا يتقدم على الفعل مطلقاً؛ لذا "المعلم" مبتدأ مرفوع، وفاعل "شرح" ضمير مستتر تقديره (هو) يعود على المعلم.',
          explanationEn: 'The agent cannot precede its verb; thus "Al-Muallim" is the subject and the verb holds a latent pronoun agent (Huwa).',
          difficulty: 'medium'
        },
        {
          id: 'qlg3-3',
          textAr: 'ما هي علامة نصب المفعول به في جملة: "احْتَرَمْتُ ذَا الفَضْلِ وَالعِلْمِ"؟',
          textEn: 'What is the accusative marker for the object in: "I respected the possessor of merit"?',
          optionsAr: ['الألف لأنه من الأسماء الخمسة', 'الفتحة الظاهرة', 'الياء لأنه مثنى', 'الكسرة'],
          optionsEn: ['Alif (Five Nouns)', 'Fathah', 'Yaa', 'Kasrah'],
          correctIndex: 0,
          conceptTestedAr: 'علامات نصب الأسماء الخمسة',
          conceptTestedEn: 'Five Nouns Accusative Case Markers',
          explanationAr: 'الأسماء الخمسة تُنصب بالألف نيابة عن الفتحة؛ فكلمة "ذَا" مفعول به منصوب وعلامة نصبه الألف لأنه من الأسماء الخمسة.',
          explanationEn: 'The Five Nouns take Alif as the accusative inflection marker (Dhaa).',
          difficulty: 'medium'
        },
        {
          id: 'qlg3-4',
          textAr: 'أي من الجمل التالية تشتمل على "فعل متعدٍ" استوفى مفعوله المنصوب؟',
          textEn: 'Which of the following sentences features a transitive verb with its object?',
          optionsAr: [
            'رَعَى الرَّاعِي المَاشِيَةَ فِي المَرْعَى',
            'نَامَ الطِّفْلُ فِي سَرِيرِهِ هَادِئاً',
            'جَلَسَ الشَّيْخُ تَحْتَ الشَّجَرَةِ',
            'انْطَلَقَ القِطَارُ سَرِيعاً'
          ],
          optionsEn: [
            'The shepherd tended the cattle in the pasture',
            'The child slept peacefully in his bed',
            'The elder sat under the tree',
            'The train launched swiftly'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الفعل اللازم والفعل المتعدي',
          conceptTestedEn: 'Transitive vs Intransitive Sentence Identification',
          explanationAr: 'الفعل "رَعَى" فعل متعدٍ نصب المفعول به "المَاشِيَةَ". أما الأفعال (نام، جلس، انطلق) فهي أفعال لازمة اكتفت بفاعلها.',
          explanationEn: 'The verb "Raa" is transitive and governs the accusative object "Al-Maashiyah".',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'lang-4',
    order: 4,
    titleAr: 'المحاضرة 4: مهارات الفهم القرائي واستخراج الأفكار الرئيسة والإملاء',
    titleEn: 'Lecture 4: Reading Comprehension, Main Ideas & Orthography',
    subtitleAr: 'استراتيجيات استيعاب المقروء، وتفكيك النصوص، والتمييز القطعي بين همزتي الوصل والقطع كتابةً ونطقاً',
    subtitleEn: 'Master textual comprehension, thematic extraction, fact vs opinion, and Hamzat Al-Wasl vs Al-Qat orthography.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-3',
    prerequisiteTitleAr: 'المحاضرة 3: الجملة الفعلية: الفعل والفاعل وعلامات الإعراب',
    prerequisiteTitleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الرابعة: التواصل والمهارات اللغوية والكتابية',
    unitTitleEn: 'Unit 4: Communication & Writing Orthography',
    lessonNumberAr: 'الدرس 4: الرسم الإملائي ومهارات الفهم القرائي والتحليل',
    lessonNumberEn: 'Lesson 4: Arabic Orthography & Textual Deconstruction',

    warmupHookAr: 'القراءة ليست مجرد فك لرموز الحروف، بل هي حوار فكري عميق بين القارئ والكاتب لاستخراج الدرر والتمييز بين الحقيقة المثبتة والرأي الذاتي. وبالمثل، فإن كتابة الهمزة في مطلع الكلمات (أ / إ / ا) هي ميزان الإتقان الإملائي الذي يُميز الكاتب الفصيح. كيف تستخرج الفكرة المحورية لأي نص في دقائق؟ وكيف تتقن كتابة همزتي الوصل والقطع باختبار سحري بسيط لا يخطئ؟',
    warmupHookEn: 'Master reading comprehension frameworks to extract core thematic nodes and discern facts from opinions, alongside infallible orthographic rules for Hamzat Wasl and Qat.',

    learningOutcomesAr: [
      'أن يستخرج الطالب الفكرة الرئيسة والأفكار الداعمة من أي نص نثري معطى',
      'أن يميز الطالب بدقة بين الحقيقة الموضوعية والرأي الشخصي للكاتب',
      'أن يحدد الطالب مواضع همزة الوصل وهمزة القطع في الأسماء والأفعال والحروف',
      'أن يطبق الطالب اختبار حرف الواو والفاء للتحقق الفوري من نوع الهمزة إملائياً'
    ],
    learningOutcomesEn: [
      'Extract main and supporting ideas from structured prose passages',
      'Distinguish objective facts from subjective authorial opinions',
      'Identify orthographic positions of Hamzat Wasl and Hamzat Qat across Nouns, Verbs, and Particles',
      'Apply the Waw/Faa phonetic test for instantaneous Hamzah verification'
    ],

    vocabulary: [
      {
        termAr: 'الفكرة الرئيسة (Main Idea)',
        termEn: 'Main Idea',
        definitionAr: 'المعنى العام والشامل الذي يدور حوله النص بأكمله وتنتظم تحته جميع الأفكار الفرعية.',
        definitionEn: 'The central overarching proposition around which the entire text revolves.'
      },
      {
        termAr: 'الحقيقة مقابل الرأي (Fact vs Opinion)',
        termEn: 'Fact vs Opinion',
        definitionAr: 'الحقيقة معلومة مثبتة بالدليل والواقع لا خلاف عليها، أما الرأي فهو وجهة نظر أو مشاعر شخصية تقبل الصواب والخطأ.',
        definitionEn: 'A fact is an objectively verifiable truth; an opinion reflects personal subjective sentiment or evaluation.'
      },
      {
        termAr: 'همزة الوصل (Hamzat Al-Wasl)',
        termEn: 'Hamzat Al-Wasl',
        definitionAr: 'همزة تُنطق في ابتداء الكلام وتسقط في دَرَجِهِ ووصله، وتُكتب ألفاً قائمة دون رأس عين (ا) مثل: انْطَلَقَ، اسْم.',
        definitionEn: 'A glottal onset pronounced only at utterance beginning, dropping in connected speech, written as plain Alif (ا).'
      },
      {
        termAr: 'همزة القطع (Hamzat Al-Qat)',
        termEn: 'Hamzat Al-Qat',
        definitionAr: 'همزة أصلية تثبت في النطق والكتابة دائماً سواء في أول الكلام أو في وسطه، وتكتب برأس عين (أَ / أُ / إِ) مثل: أَكْرَمَ، إِحْسَان.',
        definitionEn: 'A stable phonemic glottal stop explicitly pronounced and orthographically marked with Hamzah head (أ/إ).'
      }
    ],

    keyConceptsAr: [
      'استراتيجيات الفهم القرائي وتحديد الفكرة المركزية',
      'التمييز بين الحقائق العلمية والآراء الانطباعية',
      'مواضع همزة الوصل في: أل التعريف، الأسماء العشرة، ماضي وأمر ومصدر الخماسي والسداسي، وأمر الثلاثي',
      'مواضع همزة القطع في: جميع الحروف (ما عدا أل)، جميع الأسماء (ما عدا العشرة)، ماضي ومصدر الرباطي والثلاثي المبدوء بهمزة'
    ],
    keyConceptsEn: [
      'Reading Comprehension & Central Thematic Extraction',
      'Fact vs Opinion Epistemic Distinction',
      'Hamzat Wasl Morphological Environments',
      'Hamzat Qat Morphological Environments'
    ],
    summaryAr: 'نختتم مهارات اللغة العربية بالجمع بين كفاءة الفهم القرائي والتحليل الموضوعي للنصوص من جهة، والضبط الإملائي المتقن للهمزات (الوصل والقطع) من جهة أخرى لضمان الفصاحة قراءةً وكتابة.',
    summaryEn: 'Synthesizing advanced reading comprehension and critical textual analysis with authoritative orthographic mastery of Hamzat Wasl and Qat.',

    sections: [
      {
        titleAr: '1. مهارات الفهم القرائي واستخراج الأفكار ونقد النصوص',
        titleEn: '1. Reading Comprehension, Thematic Deconstruction & Fact vs Opinion',
        contentAr: 'لاستيعاب أي نص قرائي بمهارة واتقان، نتبع الخطوات المنهجية التالية:\n1. القراءة الاستكشافية السريعة لتحديد العنوان والجو العام.\n2. تحديد الفكرة الرئيسة: وهي الإجابة الشاملة عن سؤال: "عَمَّ يتحدث النص عموماً؟".\n3. استخراج الأفكار الفرعية: وهي المضامين الجزئية التي تشرح الفكرة الرئيسة في كل فقرة.\n4. التمييز بين الحقيقة والرأي:\n   - الحقيقة: جملة تعبر عن واقع مثبت بأرقام أو تجارب علمية (مثل: "تغلي المياه عند 100 درجة مئوية"، "الرياض عاصمة المملكة").\n   - الرأي: جملة تعبر عن مشاعر أو تفضيلات ذاتية (مثل: "فصل الشتاء أجمل فصول السنة"، "الرواية ممتعة للغاية").',
        contentEn: 'Textual comprehension requires isolating the central premise, tracing subordinate supporting claims, and distinguishing objective facts from personal opinions.',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (4-1): تحليل نص واستخراج الفكرة المحورية والتمييز بين الحقيقة والرأي',
          titleEn: 'Worked Example (4-1): Textual Analysis, Thematic Extraction & Fact vs Opinion',
          equation: 'قراءة الفقرة -> استخلاص الفكرة المحورية + فحص العبارات (حقيقة أم رأي)',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'النص: "تُعد المملكة العربية السعودية أكبر مصدر للنفط في العالم، وهي تمتلك رؤية 2030 الطموحة التي تُعد أعظم خطة تنموية في العصر الحديث".', 
              textEn: 'Passage: "Saudi Arabia is the world largest oil exporter and possesses Vision 2030, which is the greatest development plan in modern history."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'استخراج الفكرة الرئيسة: المكانة الاقتصادية والتنموية الرائدة للمملكة ورؤية 2030.', 
              textEn: 'Main Idea: The economic leadership and transformative development of Vision 2030.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'فحص عبارة "أكبر مصدر للنفط": حقيقة موضوعية مثبتة بالبيانات والأرقام الاقتصادية العالمية.', 
              textEn: 'Analyze "largest oil exporter": Verifiable objective Fact.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'فحص عبارة "تُعد أعظم خطة تنموية": رأي وتقييم انطباعي يعبر عن وجهة نظر الكاتب واستحسانه.', 
              textEn: 'Analyze "greatest plan": Evaluative Opinion.' 
            }
          ],
          takeawayAr: 'الحقائق تُقبل أو تُرفض بالأدلة، بينما الآراء تُناقش وتُحترم كوجهات نظر شخصية.',
          takeawayEn: 'Facts are evaluated through empirical evidence; opinions represent authorial perspectives.'
        },
        tipsAr: ['الكلمات التفضيلية مثل (أجمل، أعظم، أسوأ، أروع) تدل غالباً على أن العبارة "رأي" وليست حقيقة.']
      },
      {
        titleAr: '2. قواعد همزة الوصل وهمزة القطع واختبار الفحص السريع',
        titleEn: '2. Hamzat Wasl vs Qat: Morphological Rules & The Verification Test',
        contentAr: 'للهمزة في أول الكلمة نوعان:\n\nأولاً: همزة الوصل (ا):\n- تنطق في أول الكلام وتسقط في وسطه، وتكتب ألفاً مجردة دون همزة.\n- مواضعها:\n  1. (أل) التعريف: (الكتاب، المدرسة).\n  2. الأسماء العشرة المسموعة: (اسم، ابن، ابنة، امرؤ، امرأة، اثنان، اثنتان، ايمن الله...).\n  3. أمر الفعل الثلاثي: (اكْتُبْ، اقْرَأْ، اسْمَعْ).\n  4. ماضي وأمر ومصدر الفعل الخماسي والسداسي: (انْطَلَقَ - انْطَلِقْ - انْطِلَاق / اسْتَغْفَرَ - اسْتَغْفِرْ - اسْتِغْفَار).\n\nثانياً: همزة القطع (أَ / أُ / إِ):\n- تنطق وتكتب دائماً أينما وقعت.\n- مواضعها:\n  1. جميع الحروف ما عدا أل: (إلى، أن، إن، أو، إذا).\n  2. جميع الأسماء ما عدا الأسماء العشرة: (أحمد، إبراهيم، أسد، أمل).\n  3. ماضي ومصدر الفعل الثلاثي المهموز: (أَخَذَ - أَخْذاً / أَكَلَ - أَكْلاً).\n  4. ماضي وأمر ومصدر الفعل الرباعي: (أَكْرَمَ - أَكْرِمْ - إِكْرَام / أَنْجَزَ - أَنْجِزْ - إِنْجَاز).\n  5. كل فعل مضارع مبدوء بهمزة المتكلم: (أَكْتُبُ، أَسْتَغْفِرُ).',
        contentEn: 'Hamzat Wasl occurs in Al-, ten classical nouns, 5/6-letter verbs/nouns, and 3-letter imperatives. Hamzat Qat occurs in all particles, general nouns, 4-letter verb paradigms, and 1st-person present verbs.',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (4-2): تطبيق اختبار الواو والفاء للتمييز الفوري بين الهمزتين',
          titleEn: 'Worked Example (4-2): Applying the Waw/Faa Prefix Test for Rapid Hamzah Verification',
          equation: 'حرف (و) أو (ف) + الكلمة المنطوقة بالسليقة',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الكلمة الأولى: "استعانة". نضع واواً وننطق: "وَاسْتِعَانَة" (نلاحظ سقوط صوت الهمزة تماماً والانتقال من الواو إلى السين مباشرة) -> إذن هي همزة وصل وتكتب: (استعانة) دون همزة.', 
              textEn: 'Test 1: "Istianah" -> "Wa-stianah" (glottal stop drops) -> Hamzat Wasl (استعانة).' 
            },
            { 
              stepNumber: 2, 
              textAr: 'الكلمة الثانية: "إكرام". نضع واواً وننطق: "وَإِكْرَام" (يستحيل إسقاط الهمزة في النطق الصحيح) -> إذن هي همزة قطع وتكتب بهمزة تحت الألف: (إكرام).', 
              textEn: 'Test 2: "Ikram" -> "Wa-Ikram" (glottal stop strictly preserved) -> Hamzat Qat (إكرام).' 
            },
            { 
              stepNumber: 3, 
              textAr: 'الكلمة الثالثة: "اذهب". نضع فاء وننطق: "فَاذْهَبْ" (تسقط الهمزة) -> همزة وصل لأمر الثلاثي: (اذهب).', 
              textEn: 'Test 3: "Idhhab" -> "Fa-dhhab" (drops) -> Hamzat Wasl (اذهب).' 
            }
          ],
          takeawayAr: 'اختبار حرف الواو يكشف لك نوع الهمزة في ثانية واحدة بالسليقة اللغوية السليمة.',
          takeawayEn: 'Prefixing Waw or Faa immediately reveals glottal retention (Qat) or phonetic dropping (Wasl).'
        },
        tipsAr: ['الهمزة في الفعل المضارع همزة قطع دائماً مهما كان عدد حروفه؛ نقول: (أَكْتُبُ، أَنْطَلِقُ، أَسْتَغْفِرُ).']
      }
    ],

    conceptMapSummaryAr: 'الفهم القرائي يقوم على استخراج الفكرة الرئيسة وتمييز الحقيقة عن الرأي. الرسم الإملائي يفرق بين همزة الوصل (تسقط وصلاً وتكتب ا) وهمزة القطع (تثبت دائماً وتكتب أ/إ)، ويُكشف نوعها باختبار الواو والفاء.',
    conceptMapSummaryEn: 'Reading Comprehension extracts central themes and separates facts from opinions. Orthography distinguishes Hamzat Wasl (dropped in speech, plain Alif) from Qat (persistent glottal stop with Hamzah head).',

    goldenRulesAr: [
      'القاعدة 1: الفكرة الرئيسة هي المظلة الشاملة لجميع أفكار النص وفقراته.',
      'القاعدة 2: الحقيقة معلومة موضوعية مدعومة بالأدلة، بينما الرأي تعبير ذاتي عن مشاعر أو تفضيل.',
      'القاعدة 3: همزة الوصل تنطق في أول الكلام وتسقط عند وصله بالواو أو الفاء.',
      'القاعدة 4: همزة القطع تثبت نطقاً ورسماً في جميع الأحوال (أَ، أُ، إِ).',
      'القاعدة 5: جميع الحروف في اللغة العربية همزتها قطع (إلى، إن، أن) ما عدا (أل) التعريف.',
      'القاعدة 6: ماضي وأمر ومصدر الخماسي والسداسي همزته وصل دائماً (انطلاق، استخراج).',
      'القاعدة 7: كل فعل مضارع مبدوء بهمزة المتكلم فهمزته همزة قطع دائماً (أستمعُ، أحفظُ).'
    ],
    goldenRulesEn: [
      'Rule 1: The Main Idea represents the overarching thematic premise of the text.',
      'Rule 2: Facts rely on empirical verification; opinions reflect subjective judgment.',
      'Rule 3: Hamzat Wasl is vocalized in isolation but dropped in connected speech.',
      'Rule 4: Hamzat Qat is orthographically written and vocalized in all contexts.',
      'Rule 5: All Arabic particles take Hamzat Qat except the definite article Al-.',
      'Rule 6: 5- and 6-letter verb forms and verbal nouns take Hamzat Wasl exclusively.',
      'Rule 7: All 1st-person present tense verbs take Hamzat Qat unconditionally.'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-4-1',
        questionAr: 'بين نوع الهمزة مع ذكر السبب في الكلمات التالية: (إِحْسَان - انْتِصَار - اكْتُبْ - أَقْبَلَ).',
        questionEn: 'Specify the Hamzah type and justification for: (Ihsan, Intisar, Uktub, Aqbala).',
        solutionStepsAr: [
          '1. "إِحْسَان": همزة قطع؛ لأنه مصدر لفعل رباعي (أَحْسَنَ).',
          '2. "انْتِصَار": همزة وصل؛ لأنه مصدر لفعل خماسي (انْتَصَرَ).',
          '3. "اكْتُبْ": همزة وصل؛ لأنه أمر لفعل ثلاثي (كَتَبَ).',
          '4. "أَقْبَلَ": همزة قطع؛ لأنه فعل ماضٍ رباعي.'
        ],
        solutionStepsEn: [
          '1. "Ihsan": Hamzat Qat (4-letter verbal noun).',
          '2. "Intisar": Hamzat Wasl (5-letter verbal noun).',
          '3. "Uktub": Hamzat Wasl (3-letter imperative).',
          '4. "Aqbala": Hamzat Qat (4-letter past verb).'
        ],
        answerAr: 'إحسان: قطع (مصدر رباعي) | انتصار: وصل (مصدر خماسي) | اكتب: وصل (أمر ثلاثي) | أقبل: قطع (ماضٍ رباعي).',
        answerEn: 'Ihsan: Qat | Intisar: Wasl | Uktub: Wasl | Aqbala: Qat.'
      },
      {
        id: 'ex-lang-4-2',
        questionAr: 'صنف العبارتين التاليتين إلى (حقيقة) أو (رأي): 1) "تبلغ مساحة المملكة 2 مليون كم² تقريباً"، 2) "اللغة العربية أجمل لغات الأرض وأعذبها".',
        questionEn: 'Classify into Fact or Opinion: 1) Saudi area is ~2M km², 2) Arabic is the most beautiful language.',
        solutionStepsAr: [
          '1. العبارة الأولى: (حقيقة)؛ لأنها تستند إلى بيانات جغرافية ومساحية مثبتة علمياً.',
          '2. العبارة الثانية: (رأي)؛ لأنها تعبر عن مشاعر محبة وتقدير جمالي ذوقي.'
        ],
        solutionStepsEn: [
          '1. First statement: Fact based on geographical measurement.',
          '2. Second statement: Opinion reflecting aesthetic appreciation.'
        ],
        answerAr: '1) حقيقة علمية جغرافية | 2) رأي وانطباع وجداني.',
        answerEn: '1) Fact | 2) Opinion.'
      }
    ],

    assessment: {
      id: 'quiz-lang-4',
      lectureId: 'lang-4',
      titleAr: 'الاختبار الإلزامي للمحاضرة الرابعة: الفهم القرائي والرسم الإملائي',
      titleEn: 'Lecture 4 Assessment: Comprehension & Orthography Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qlg4-1',
          textAr: 'أي من الكلمات التالية كُتبت بهمزة وصل صحيحة لأنها مصدر لفعل خماسي؟',
          textEn: 'Which word features a correct Hamzat Wasl as a 5-letter verbal noun?',
          optionsAr: ['انْتِصَار', 'أَنْتِصَار', 'إِنْتِصَار', 'أَسْتَمِعُ'],
          optionsEn: ['Intisar (Victory)', 'Antisar', 'Intisar (with below Hamzah)', 'Astamio'],
          correctIndex: 0,
          conceptTestedAr: 'همزة الوصل في المصادر الخماسية',
          conceptTestedEn: 'Hamzat Wasl in 5-Letter Verbal Nouns',
          explanationAr: '"انتصار" مصدر للفعل الخماسي (انتصر)، وهمزته همزة وصل تسقط وصلاً وتكتب ألفاً قائمة (انتصار) دون رسم رأس العين.',
          explanationEn: 'Intisar is a 5-letter verbal noun taking Hamzat Wasl written as a plain Alif.',
          difficulty: 'easy'
        },
        {
          id: 'qlg4-2',
          textAr: 'ما نوع الهمزة في كلمة "أَكْرَمَ" وما سبب كتابتها همزة قطع؟',
          textEn: 'What type of Hamzah is in "Akrama" and why is it Hamzat Qat?',
          optionsAr: [
            'همزة قطع؛ لأنه فعل ماضٍ رباعي على وزن أَفْعَلَ',
            'همزة وصل؛ لأنه فعل ثلاثي',
            'همزة وصل؛ لأنه مصدر سداسي',
            'همزة قطع؛ لأنه حرف من حروف الجر'
          ],
          optionsEn: [
            'Hamzat Qat; because it is a 4-letter past tense verb',
            'Hamzat Wasl; 3-letter verb',
            'Hamzat Wasl; 6-letter verbal noun',
            'Hamzat Qat; preposition'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مواضع همزة القطع في الأفعال الرباعية',
          conceptTestedEn: 'Hamzat Qat in 4-Letter Verb Paradigms',
          explanationAr: 'الفعل الرباعي وماضيه وأمره ومصدره همزته قطع دائماً (أَكْرَمَ - أَكْرِمْ - إِكْرَام).',
          explanationEn: '4-letter verbs, their commands, and verbal nouns strictly feature Hamzat Qat.',
          difficulty: 'medium'
        },
        {
          id: 'qlg4-3',
          textAr: 'أي من العبارات التالية تُمثل "حقيقة موضوعية" وليس رأياً شخصياً؟',
          textEn: 'Which statement represents an objective fact rather than a subjective opinion?',
          optionsAr: [
            'يَدُورُ كَوْكَبُ الأَرْضِ حَوْلَ الشَّمْسِ فِي مَدَارٍ بَيْضَاوِيٍّ',
            'القِرَاءَةُ فِي المَسَاءِ أَمْتَعُ مِنْ القِرَاءَةِ فِي الصَّبَاحِ',
            'السَّفَرُ بِالطَّائِرَةِ أَفْضَلُ وَسِيلَةٍ لِلتَّنَقُّلِ',
            'فَصْلُ الرَّبِيعِ يُعْطِي الإِنْسَانَ أَعْظَمَ شُعُورٍ بِالبَهْجَةِ'
          ],
          optionsEn: [
            'Earth orbits the Sun in an elliptical path',
            'Reading in the evening is more enjoyable than morning',
            'Air travel is the best mode of transport',
            'Spring provides the greatest sense of joy'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الحقيقة العلمية والرأي الانطباعي',
          conceptTestedEn: 'Fact vs Opinion Textual Evaluation',
          explanationAr: 'دوران الأرض حول الشمس حقيقة فلكية علمية مثبتة بالبراهين والقياسات، بينما باقي العبارات تشتمل على ألفاظ تفضيل ذاتية تعبر عن آراء شخصية.',
          explanationEn: 'Earth planetary orbit is an empirically established scientific fact, whereas the others convey subjective preferences.',
          difficulty: 'medium'
        },
        {
          id: 'qlg4-4',
          textAr: 'إذا أردت فحص كلمة "استعلام" للتأكد من كتابة همزتها، ما هو التطبيق السليم لاختبار الواو؟',
          textEn: 'What is the correct execution of the Waw prefix test on "Istilam"?',
          optionsAr: [
            'ننطق "وَاسْتِعْلَام" فنجد الهمزة تسقط في النطق وتتصل الواو بالسين؛ لذا تُكتب همزة وصل (استعلام) دون همزة',
            'ننطق "وَإِسْتِعْلَام" ونثبت الهمزة قسراً فتكتب همزة قطع',
            'الهمزة في أول الكلمات لا يمكن فحصها بالواو',
            'تكتب همزة قطع لأنها تتكون من ستة أحرف'
          ],
          optionsEn: [
            'Pronounce "Wa-stialam" where glottal stop drops naturally -> Hamzat Wasl (استعلام)',
            'Force glottal pronunciation -> Hamzat Qat',
            'Cannot be tested with Waw',
            'Always Qat for 6 letters'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التطبيق الصوتي الصحيح لاختبار فحص الهمزة بالواو',
          conceptTestedEn: 'Phonetic Execution of the Waw Test',
          explanationAr: 'عند نطق "واستعلام" بالسليقة الفصيحة تسقط همزة الوصل في دَرَج الكلام، مما يثبت أنها همزة وصل وتكتب ألفاً قائمة (استعلام).',
          explanationEn: 'Prefixing Waw drops the glottal onset phonetically, definitively confirming Hamzat Wasl.',
          difficulty: 'hard'
        }
      ]
    }
  }
];

// ============================================================================
// 5. MIDDLE SCHOOL GENERAL SCIENCE (العلوم العامة للمرحلة المتوسطة)
// ============================================================================
export const GENERAL_SCIENCE_LECTURES: Lecture[] = [
  {
    id: 'sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: طبيعة المادة والذرات والعناصر والمركبات',
    titleEn: 'Lecture 1: Nature of Matter: Atoms, Elements & Compounds',
    subtitleAr: 'دراسة تركيب المادة وحالاتها، وحساب الكثافة، وبنية الذرة والعدد الذري والكتلي، والتمييز بين العناصر والمركبات والمخاليط',
    subtitleEn: 'Master matter states, density calculations, subatomic particle configurations, atomic numbers, elements, compounds, and mixtures.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط (الصف السابع) - المرحلة المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Middle School - General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: طبيعة المادة وخصائصها وبنيتها الذرية',
    unitTitleEn: 'Unit 1: Nature of Matter, Properties & Atomic Structure',
    lessonNumberAr: 'الدرس 1: المادة والذرات والعناصر والمركبات والمخاليط',
    lessonNumberEn: 'Lesson 1: Matter, Atoms, Elements, Compounds & Mixtures',

    // Real-world warm-up & Hook
    warmupHookAr: 'هل تعلم أن قلم الرصاص الأسود الذي تكتب به (الجرافيت) وخاتم الألماس فائق الصلابة واللمعان يتكونان كلاهما من نفس نوع الذرات تماماً: ذرات الكربون (C)؟ كيف يمكن لذرات واحدة أن تصنع مادة لينة نكتب بها ومادة أخرى هي الأصلب على وجه الأرض؟ السر يكمن في البنية الذرية وطبيعة ترابط الذرات. كل شيء في هذا الكون الشاسع، من الهواء الذي نتنفسه إلى المياه والصخور، مبني من 118 عنصراً كيميائياً فقط!',
    warmupHookEn: 'Soft pencil graphite and brilliant hard diamonds consist of identical carbon atoms. The difference lies in atomic arrangement and chemical bonding. Everything across the cosmos is assembled from just 118 elemental building blocks!',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يعرّف الطالب المادة وحالاتها الفيزيائية الثلاث (صلبة، سائلة، غازية) بناءً على حركة الجسيمات وقوى التماسك',
      'أن يحسب كثافة الأجسام الصلبة والسوائل رياضياً باستخدام قانون الكثافة D = m / V ويتنبأ بسلوك الطفو والانغمار',
      'أن يحدد المكونات الثلاثة الأساسية لبنية الذرة (البروتونات p⁺، النيوترونات n⁰، والإلكترونات e⁻) ومواقعها وشحناتها',
      'أن يستنتج العدد الذري (Z) والعدد الكتلي (A) ويحسب عدد النيوترونات في أي نواة بالقانون: N = A - Z',
      'أن يفرّق بدقة علمية بين العنصر النقي، المركب الكيميائي المتحد بنسب ثابتة، والمخلوط القابل للفصل بالطرق الفيزيائية'
    ],
    learningOutcomesEn: [
      'Define matter states based on particle kinetic energy and intermolecular attraction forces',
      'Compute density using D = m / V and predict buoyancy floatation/sinking behavior',
      'Identify subatomic particles: nuclear protons (+), neutrons (0), and orbiting electrons (-)',
      'Calculate atomic number (Z), mass number (A), and neutron count via N = A - Z',
      'Differentiate between pure elements, chemically bonded compounds, and physical mixtures'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'المادة (Matter)',
        termEn: 'Matter',
        definitionAr: 'كل شيء له كتلة ويشغل حيزاً من الفراغ (له حجم).',
        definitionEn: 'Anything that possesses mass and occupies physical space (volume).'
      },
      {
        termAr: 'الكثافة (Density)',
        termEn: 'Density',
        definitionAr: 'كتلة وحدة الحجوم من المادة، وتحسب بقسمة الكتلة على الحجم (D = m / V) بوحدة g/cm³ أو kg/m³.',
        definitionEn: 'Mass per unit volume (D = m / V), measured in g/cm³ or kg/m³.'
      },
      {
        termAr: 'الذرة (Atom)',
        termEn: 'Atom',
        definitionAr: 'أصغر وحدة بنائية للمادة تحتفظ بالخصائص الكيميائية والفيزيائية للعنصر.',
        definitionEn: 'The basic building block of matter retaining elemental properties.'
      },
      {
        termAr: 'العدد الذري (Atomic Number - Z)',
        termEn: 'Atomic Number (Z)',
        definitionAr: 'عدد البروتونات الموجبة داخل نواة الذرة، وهو يحدد هوية العنصر في الجدول الدوري ويساوي عدد الإلكترونات في الذرة المتعادلة.',
        definitionEn: 'The number of protons in a nucleus, defining elemental identity.'
      },
      {
        termAr: 'العدد الكتلي (Mass Number - A)',
        termEn: 'Mass Number (A)',
        definitionAr: 'مجموع عدد البروتونات والنيوترونات الموجودة داخل نواة الذرة (A = p⁺ + n⁰).',
        definitionEn: 'Total count of nuclear nucleons: protons plus neutrons (A = Z + N).'
      },
      {
        termAr: 'المركب (Compound)',
        termEn: 'Compound',
        definitionAr: 'مادة نقية تتكون من اتحاد عنصرين أو أكثر بنسب وزنية ثابتة بروابط كيميائية وتختلف خصائصها تماماً عن خصائص عناصرها المكونة لها.',
        definitionEn: 'A pure substance formed by chemically bonded elements in fixed stoichiometric ratios.'
      },
      {
        termAr: 'المخلوط (Mixture)',
        termEn: 'Mixture',
        definitionAr: 'مادتان أو أكثر ممتزجتان معاً دون اتحاد كيميائي، وتحتفظ كل مادة بخصائصها ويمكن فصلها بطرق فيزيائية بسيطة.',
        definitionEn: 'Physical combination of substances retaining individual properties without chemical bonds.'
      }
    ],

    keyConceptsAr: [
      'حالات المادة الثلاث وقانون حساب الكثافة: D = m / V',
      'بنية الذرة: نواة مركزية ثقيلة (بروتونات ونيوترونات) وسحابة إلكترونات',
      'العدد الذري Z = عدد البروتونات | العدد الكتلي A = البروتونات + النيوترونات',
      'قاعدة حساب النيوترونات: عدد النيوترونات N = A - Z',
      'الفرق بين العنصر (ذرات متماثلة) والمركب (اتحاد كيميائي) والمخلوط (امتزاج فيزيائي)',
      'طرق فصل المخاليط: الترشيح، التبخير، المغناطيسية، والتقطير'
    ],
    keyConceptsEn: [
      'States of Matter & Density Equation: D = m / V',
      'Atomic Anatomy: Nucleus (p+, n0) and Orbiting Electron Cloud (e-)',
      'Atomic Number (Z) vs Mass Number (A = Z + N)',
      'Neutron Calculation: N = A - Z',
      'Elements vs Compounds vs Mixtures Classification',
      'Physical Separation Techniques: Filtration, Evaporation, Magnetism, Distillation'
    ],
    summaryAr: 'في هذه المحاضرة الشاملة نتقن أسس علم الكيمياء والفيزياء العامة؛ بدءاً من قياس خواص المادة وحساب الكثافة، ثم النفاذ إلى أعماق الذرة وحساب البروتونات والنيوترونات والإلكترونات عبر العدد الذري والكتلي، وصولاً إلى التمييز الدقيق بين العناصر والمركبات والمخاليط وطرق فصلها.',
    summaryEn: 'Master foundational chemistry and physics: matter states, density computation, atomic nuclear arithmetic (protons, neutrons, electrons), and the taxonomy of elements, compounds, and mixtures.',
    
    sections: [
      {
        titleAr: '1. حالات المادة وخصائصها وحساب الكثافة والطفو',
        titleEn: '1. States of Matter, Physical Properties & Density Calculations',
        contentAr: 'توجد المادة في ثلاث حالات رئيسية: الصلبة (شكل وحجم ثابتان، حركة اهتزازية مقيدة)، السائلة (حجم ثابت وشكل متغير يأخذ شكل الإناء)، والغازية (حجم وشكل غير ثابتين وجسيمات حرة الحركة متباعدة). الكثافة خاصية فيزيائية مميزة للمادة النقية، وتُحسب بقسمة الكتلة على الحجم: D = m / V. يطفو الجسم فوق السائل إذا كانت كثافته أقل من كثافة السائل، وينغمر إذا كانت كثافته أكبر.',
        contentEn: 'Matter exists as solid, liquid, or gas depending on particle kinetic freedom. Density is an intrinsic physical metric: D = m / V. Objects float when their density is less than the supporting fluid.',
        diagram: {
          id: 'diag-sci1-matter-taxonomy',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'تصنيف المادة: العنصر النقي والمركب الكيميائي والمخلوط الفيزيائي',
          titleEn: 'Taxonomy of Matter: Elements, Compounds & Physical Mixtures',
          captionAr: 'يوضح الرسم الفروق الجوهرية على المستوى الجزيئي: العنصر يتكون من ذرات متماثلة (مثل النحاس)، والمركب ينتج عن اتحاد ذرات مختلفة بروابط كيميائية بنسب ثابتة (مثل الماء H₂O)، بينما المخلوط هو مزيج فيزيائي بدون روابط كيميائية يمكن فصله بسهولة.',
          captionEn: 'Molecular comparison: Pure elements consist of identical atoms, compounds feature chemically bonded distinct atoms in fixed proportions (H₂O), and mixtures are physical blends separable by non-chemical means.',
          diagramType: 'matter_states_compound',
          takeawayFormulaAr: 'قانون الكثافة: الكثافة = الكتلة ÷ الحجم (D = m / V) • شرط الطفو: كثافة الجسم < كثافة السائل',
          takeawayFormulaEn: 'Density D = m / V | Floats if D_object < D_fluid',
          keyLabels: [
            { tagAr: 'عنصر نقي (Element)', tagEn: 'Pure Element', descAr: 'ذرات متطابقة لا يمكن تجزئتها كيميائياً', descEn: 'Identical atoms indivisible by chemical means' },
            { tagAr: 'مركب كيميائي (Compound)', tagEn: 'Chemical Compound', descAr: 'ذرات مختلفة متحدة بروابط بنسب وزنية ثابتة', descEn: 'Distinct atoms bonded in stoichiometric ratios' },
            { tagAr: 'مخلوط (Mixture)', tagEn: 'Physical Mixture', descAr: 'مزيج فيزيائي يحتفظ بخصائص مكوناته ويمكن فصله', descEn: 'Physical blend retaining individual component traits' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب كثافة معدن مجهول وتحديد هل يطفو في الماء أم ينغمر',
          titleEn: 'Worked Example 1: Density Calculation & Water Buoyancy Test',
          equation: 'D = m / V',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: قطعة معدنية كتلتها m = 160 جراماً، وحجمها V = 20 سم³، وكثافة الماء النقي = 1.0 g/cm³.',
              textEn: 'Given: Metal sample mass m = 160g, volume V = 20 cm³, water density = 1.0 g/cm³.',
              noteAr: 'الكتلة والحجم معلومان'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: نطبق قانون الكثافة: D = m ÷ V = 160 ÷ 20 = 8.0 g/cm³.',
              textEn: 'Step 1: Compute density D = 160 / 20 = 8.0 g/cm³.',
              noteAr: 'كثافة المعدن = 8.0 g/cm³ (معدن الحديد/الفولاذ)'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: نقارن كثافة المعدن (8.0 g/cm³) بكثافة الماء (1.0 g/cm³): بما أن 8.0 > 1.0، فإن القطعة ستنغمر (تغوص) في قاع الماء فوراً.',
              textEn: 'Step 2: Compare: 8.0 > 1.0 g/cm³ => Object sinks immediately.',
              noteAr: 'الحكم: تنغمر القطعة في الماء'
            }
          ],
          takeawayAr: 'الكثافة خاصية ثابتة لكل مادة نقية عند نفس درجة الحرارة والضغط، وتحدد قابلية الطفو والانغمار بدقة.',
          takeawayEn: 'Density is a unique fingerprint for every pure substance and dictates buoyancy.'
        },
        formativeCheck: {
          id: 'fc-sci1-1',
          questionAr: 'قطعة خشبية كتلتها 45 جراماً وحجمها 50 سم³. ما مقدار كثافتها، وهل تطفو على سطح الماء (كثافة الماء = 1 g/cm³)؟',
          questionEn: 'A wood block has mass 45g and volume 50 cm³. What is its density and does it float in water?',
          optionsAr: [
            'كثافتها 0.9 g/cm³ وتطفو على سطح الماء',
            'كثافتها 1.1 g/cm³ وتنغمر في الماء',
            'كثافتها 2250 g/cm³ وتغوص في القاع',
            'كثافتها 0.5 g/cm³ وتنغمر في الماء'
          ],
          optionsEn: [
            'Density is 0.9 g/cm³ and it floats on water',
            'Density is 1.1 g/cm³ and it sinks',
            'Density is 2250 g/cm³ and it sinks',
            'Density is 0.5 g/cm³ and it sinks'
          ],
          correctIndex: 0,
          explanationAr: 'D = m / V = 45 ÷ 50 = 0.9 g/cm³. بما أن 0.9 < 1.0 (أقل من كثافة الماء) فإن الخشب يطفو على السطح.',
          explanationEn: 'D = 45 / 50 = 0.9 g/cm³. Since 0.9 < 1.0 g/cm³, it floats.',
          hintAr: 'اقسم الكتلة على الحجم، ثم قارن الناتج بالرقم 1.'
        },
        tipsAr: [
          'احرص دائماً على تطابق الوحدات: جرام مع سم³ (g/cm³)، أو كيلوجرام مع متر مكعب (kg/m³).',
          'الجليد يطفو فوق الماء السائل لأن كثافة الجليد (0.92 g/cm³) أقل من كثافة الماء السائل (1.0 g/cm³).'
        ],
        tipsEn: [
          'Ensure consistent units: g/cm³ or kg/m³.',
          'Ice floats on water because its crystalline structure lowers its density to 0.92 g/cm³.'
        ]
      },
      {
        titleAr: '2. بنية الذرة والجسيمات دون الذرية والعدد الذري والكتلي',
        titleEn: '2. Atomic Anatomy, Subatomic Particles & Nuclear Arithmetic',
        contentAr: 'تتكون كل ذرة في الكون من جزأين رئيسيين: 1) نواة مركزية موجبة الشحنة تتركز فيها 99.9% من كتلة الذرة وتحتوي على نوعين من الجسيمات: بروتونات موجبة (+p) ونيوترونات متعادلة الشحنة (0n). 2) سحابة إلكترونية خارجية تدور فيها إلكترونات سالبة الشحنة (-e) ذات كتلة متناهية في الصغر. في الذرة المتعادلة كهربائياً: عدد البروتونات = عدد الإلكترونات. العدد الذري (Z) هو عدد البروتونات فقط، والعدد الكتلي (A) هو مجموع البروتونات والنيوترونات: A = p⁺ + n⁰. ومنها نحسب عدد النيوترونات: N = A - Z.',
        contentEn: 'Every atom contains a dense central nucleus of positive protons (p+) and neutral neutrons (n0), orbited by negative electrons (e-). Mass Number A = Z + N, where Z is the atomic number.',
        diagram: {
          id: 'diag-sci1-bohr-atom',
          figureNumberAr: 'شكل (1-2)',
          figureNumberEn: 'Figure (1-2)',
          titleAr: 'النموذج الذري: النواة والجسيمات النووية ومستويات الطاقة للإلكترونات',
          titleEn: 'Bohr Atomic Model: Nucleus, Nucleons & Electron Shells',
          captionAr: 'تتركز كتلة الذرة داخل النواة التي تضم البروتونات الموجبة (+p) والنيوترونات المتعادلة (0n)، بينما تدور الإلكترونات سالبة الشحنة (-e) في مدارات طاقة خارجية محددة.',
          captionEn: 'Atomic mass is packed within the nucleus containing positive protons and neutral neutrons, surrounded by quantized electron shells.',
          diagramType: 'atomic_structure',
          takeawayFormulaAr: 'العدد الكتلي A = Z + N  |  عدد النيوترونات N = A - Z  |  p⁺ = e⁻',
          takeawayFormulaEn: 'Mass Number A = Z + N | Neutrons N = A - Z | p⁺ = e⁻',
          keyLabels: [
            { tagAr: 'البروتونات الموجبة (p⁺)', tagEn: 'Protons (p⁺)', descAr: 'جسيمات موجبة داخل النواة تحدد العدد الذري Z', descEn: 'Positive nucleons defining atomic number Z' },
            { tagAr: 'النيوترونات المتعادلة (n⁰)', tagEn: 'Neutrons (n⁰)', descAr: 'جسيمات متعادلة الشحنة داخل النواة', descEn: 'Neutral nucleons contributing to nuclear mass' },
            { tagAr: 'الإلكترونات السالبة (e⁻)', tagEn: 'Electrons (e⁻)', descAr: 'جسيمات سالبة تدور في مستويات الطاقة', descEn: 'Negative particles in orbital energy shells' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: استنتاج عدد البروتونات والنيوترونات والإلكترونات لذرة الصوديوم والألومنيوم',
          titleEn: 'Worked Example 2: Deducing Protons, Neutrons & Electrons for Sodium & Aluminum',
          equation: 'A = Z + N  -->  N = A - Z',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطى الأول: رمز ذرة الصوديوم هو ₁₁²³Na (العدد الذري في الأسفل Z = 11، والعدد الكتلي في الأعلى A = 23).',
              textEn: 'Given 1: Sodium ₁₁²³Na (Z = 11, A = 23).',
              noteAr: 'رمز العنصر القياسي'
            },
            {
              stepNumber: 2,
              textAr: 'حساب جسيمات الصوديوم: 1) عدد البروتونات p⁺ = Z = 11. 2) عدد الإلكترونات e⁻ = عدد البروتونات = 11. 3) عدد النيوترونات n⁰ = A - Z = 23 - 11 = 12 نيوتروناً.',
              textEn: 'Sodium particles: Protons = 11, Electrons = 11, Neutrons = 23 - 11 = 12.',
              noteAr: 'الصوديوم: 11 بروتون، 11 إلكترون، 12 نيوترون'
            },
            {
              stepNumber: 3,
              textAr: 'المعطى الثاني: ذرة الألومنيوم ₁₃²⁷Al (Z = 13، A = 27). البروتونات = 13، الإلكترونات = 13، والنيوترونات = 27 - 13 = 14 نيوتروناً.',
              textEn: 'Aluminum ₁₃²⁷Al: Protons = 13, Electrons = 13, Neutrons = 27 - 13 = 14.',
              noteAr: 'الألومنيوم: 13 بروتون، 13 إلكترون، 14 نيوترون'
            }
          ],
          takeawayAr: 'العدد الذري هو بطاقة الهوية الفريدة للعنصر؛ تغيير عدد البروتونات يغير نوع العنصر بالكامل، بينما تغيير النيوترونات ينتج النظائر.',
          takeawayEn: 'Atomic number is the element identity fingerprint. Changing proton count alters the element entirely.'
        },
        formativeCheck: {
          id: 'fc-sci1-2',
          questionAr: 'ذرة عنصر تحتوي نواتها على 17 بروتوناً و18 نيوتروناً. ما هو العدد الذري والعدد الكتلي لهذه الذرة؟',
          questionEn: 'An atom has 17 protons and 18 neutrons. What are its atomic number and mass number?',
          optionsAr: [
            'العدد الذري = 17، والعدد الكتلي = 35',
            'العدد الذري = 18، والعدد الكتلي = 35',
            'العدد الذري = 35، والعدد الكتلي = 17',
            'العدد الذري = 17، والعدد الكتلي = 1'
          ],
          optionsEn: [
            'Atomic number = 17, Mass number = 35',
            'Atomic number = 18, Mass number = 35',
            'Atomic number = 35, Mass number = 17',
            'Atomic number = 17, Mass number = 1'
          ],
          correctIndex: 0,
          explanationAr: 'العدد الذري Z = عدد البروتونات = 17. والعدد الكتلي A = البروتونات + النيوترونات = 17 + 18 = 35 (عنصر الكلور Cl-35).',
          explanationEn: 'Atomic number Z = 17 (protons). Mass number A = 17 + 18 = 35 (Chlorine).',
          hintAr: 'العدد الذري هو البروتونات فقط، والكتلي هو مجموع البروتونات والنيوترونات معاً.'
        },
        tipsAr: [
          'تذكر دائماً أن الإلكترونات لا تدخل في حساب العدد الكتلي لأن كتلتها متناهية الصغر (1/1840 من كتلة البروتون).',
          'في الجدول الدوري، يُكتب العدد الذري دائماً كعدد صحيح متسلسل (1, 2, 3...).'
        ],
        tipsEn: [
          'Electrons do not contribute to mass number due to their negligible mass.',
          'In the periodic table, atomic number increments sequentially by +1.'
        ]
      },
      {
        titleAr: '3. العناصر والمركبات والمخاليط وطرق الفصل الفيزيائية والكيميائية',
        titleEn: '3. Elements, Compounds, Mixtures & Physical Separation Techniques',
        contentAr: 'تنقسم المواد إلى نوعين كبيرين: 1) المواد النقية: وتشمل (العناصر) وهي مواد تتكون من نوع واحد فقط من الذرات مثل الأكسجين O₂ والحديد Fe، و(المركبات) وهي مواد ناتجة عن اتحاد كيميائي لعنصرين أو أكثر بنسب ثابتة مثل ملح الطعام NaCl وغاز ثاني أكسيد الكربون CO₂ ولا يمكن فصلها إلا بتفاعل كيميائي. 2) المخاليط: وهي مزيج فيزيائي لمادتين أو أكثر دون روابط كيميائية، وتنقسم إلى مخاليط متجانسة (محاليل مثل الماء والملح أو الهواء الجوي) ومخاليط غير متجانسة (مثل سلطة الخضار أو الرمل والماء). تُفصل المخاليط بطرق فيزيائية: الترشيح (للمواد الصلبة غير الذائبة)، التبخير (لفصل المواد الصلبة الذائبة)، الجذب المغناطيسي (لفصل المواد المغناطيسية كالحديد)، والتقطير (لفصل السوائل حسب درجات الغليان).',
        contentEn: 'Matter is divided into Pure Substances (Elements and Compounds) and Mixtures (Homogeneous and Heterogeneous). Mixtures are separable by physical techniques like filtration, evaporation, magnetism, and distillation.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: خطة تجريبية لفصل مخلوط معقد من (برادة الحديد + الرمل + ملح الطعام)',
          titleEn: 'Worked Example 3: Step-by-Step Separation of Iron Filings, Sand & Table Salt Mixture',
          equation: 'مخلوط ثلاثي  -->  جذب مغناطيسي  -->  إذابة وترشيح  -->  تبخير',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1 (فصل الحديد): نمرر مغناطيساً قوياً فوق المخلوط الجاف، فتنجذب برادة الحديد إلى المغناطيس ويبقى الرمل والملح.',
              textEn: 'Step 1 (Iron extraction): Pass a magnet over the dry mixture to attract iron filings.',
              noteAr: 'خاصية المغناطيسية'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2 (إذابة الملح): نضيف الماء إلى ما تبقى (الرمل والملح) ونحرك جيداً؛ يذوب الملح في الماء بينما يستقر الرمل دون ذوبان.',
              textEn: 'Step 2 (Dissolving salt): Add water and stir; salt dissolves completely while sand settles.',
              noteAr: 'خاصية الذائبية'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3 (فصل الرمل): نسكب الخليط عبر ورقة ترشيح وقمع؛ يُحتجز الرمل الصلب فوق الورقة، وينزل المحلول الملحي الصافي في الكأس.',
              textEn: 'Step 3 (Sand filtration): Pour through filter paper; sand is trapped while saltwater passes.',
              noteAr: 'عملية الترشيح'
            },
            {
              stepNumber: 4,
              textAr: 'الخطوة 4 (استرجاع الملح): نسخن المحلول الملحي حتى يتبخر الماء بالكامل، فيتبقى بلورات ملح الطعام النقية في قاع الوعاء.',
              textEn: 'Step 4 (Salt recovery): Evaporate the water via heating to obtain pure dry salt crystals.',
              noteAr: 'عملية التبخير'
            }
          ],
          takeawayAr: 'فصل المخاليط يعتمد على استغلال الفروق في الخصائص الفيزيائية للمكونات (المغناطيسية، الذائبية، حجم الحبيبات، ودرجة الغليان).',
          takeawayEn: 'Separation exploits disparities in physical properties: magnetism, solubility, particle size, and boiling points.'
        },
        formativeCheck: {
          id: 'fc-sci1-3',
          questionAr: 'أي من المواد التالية يُعد "مركباً كيميائياً" نقياً؟',
          questionEn: 'Which of the following substances represents a pure chemical compound?',
          optionsAr: [
            'الماء النقي (H₂O)',
            'الهواء الجوي',
            'عصير البرتقال',
            'سبيكة الذهب والنحاس'
          ],
          optionsEn: [
            'Pure Water (H₂O)',
            'Atmospheric Air',
            'Orange Juice',
            'Gold-Copper Alloy'
          ],
          correctIndex: 0,
          explanationAr: 'الماء (H₂O) مركب كيميائي ناتج عن اتحاد عنصري الهيدروجين والأكسجين بروابط كيميائية بنسبة ثابتة (2 ذرة هيدروجين إلى 1 ذرة أكسجين). أما الهواء والعصير والسبائك فهي مخاليط.',
          explanationEn: 'Water (H₂O) is a chemical compound with fixed stoichiometric bonding. Air, juice, and alloys are mixtures.',
          hintAr: 'ابحث عن المادة التي يعبر عنها بصيغة كيميائية بروابط محددة وثابتة.'
        },
        tipsAr: [
          'المركب يفقد خصائص عناصره تماماً: فمثلاً الصوديوم فلز سام حارق وغاز الكلور سام خانق، لكن اتحادهما ينتج ملح الطعام المفيد NaCl!',
          'المخلوط المتجانس يسمى (محلولاً) وتتوزع فيه الدقائق بانتظام فلا يمكن تمييز مكوناته بالعين المجردة.'
        ],
        tipsEn: [
          'Compounds exhibit entirely new properties distinct from their constituent elements.',
          'Homogeneous mixtures are uniform solutions where individual particles cannot be discerned by eye.'
        ]
      },
      {
        titleAr: '4. التغيرات الفيزيائية والكيميائية وقانون حفظ الكتلة',
        titleEn: '4. Physical vs Chemical Changes & Law of Conservation of Mass',
        contentAr: 'التغير الفيزيائي يغير في الشكل أو المظهر الخارجي أو الحالة فقط دون تغيير هوية المادة (مثل انصهار الجليد، تمزيق الورق، ذوبان السكر). أما التغير الكيميائي فينتج عنه مواد جديدة تماماً بخصائص مختلفة عبر تكسير روابط وتكوين روابط جديدة (مثل صدأ الحديد، احتراق الخشب، تخمر العجين). وينص قانون حفظ الكتلة على أن: "المادة لا تفنى ولا تستحدث من العدم، ومجموع كتل المواد المتفاعلة يساوي دائماً مجموع كتل المواد الناتجة في أي نظام مغلق".',
        contentEn: 'Physical changes alter form or state without changing chemical identity (melting, tearing, dissolving). Chemical changes forge entirely new substances via chemical reactions (rusting, burning, fermentation). The Law of Conservation of Mass states that mass is neither created nor destroyed: Total Reactant Mass = Total Product Mass.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: تطبيق قانون حفظ الكتلة في تفاعل كيميائي مغلق وحساب كتلة الغاز الناتج',
          titleEn: 'Worked Example 4: Applying Law of Conservation of Mass in Chemical Reaction',
          equation: 'مجموع كتل المتفاعلات = مجموع كتل النواتج  |  m_متفاعلات = m_نواتج',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: تفاعل 10 جرامات من مسحوق الخل والبيكربونات في دورق مغلق يحتوي على 50 جراماً من الخل. كتلة المتفاعلات الكلية = 10 + 50 = 60 جراماً.',
              textEn: 'Given: 10g baking soda reacts with 50g vinegar in a closed flask. Total reactants mass = 60g.',
              noteAr: 'حساب كتل المتفاعلات الكلية'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: بعد انتهاء الفوران وتصاعد غاز ثاني أكسيد الكربون داخل الدورق المحكم، وُجد أن كتلة السائل المتبقي = 55.6 جراماً.',
              textEn: 'Step 1: After reaction in closed system, remaining liquid mass = 55.6g.',
              noteAr: 'كتلة النواتج السائلة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2 (تطبيق قانون حفظ الكتلة): كتلة المتفاعلات (60g) = كتلة السائل الناتج (55.6g) + كتلة غاز CO₂ المحبوس. إذن: كتلة الغاز = 60 - 55.6 = 4.4 جرامات.',
              textEn: 'Step 2: Total Reactants (60g) = Liquid Product (55.6g) + Trapped Gas. Gas mass = 60 - 55.6 = 4.4g.',
              noteAr: 'كتلة الغاز المتصاعد = 4.4g'
            }
          ],
          takeawayAr: 'في أي تفاعل كيميائي، تظل كتلة الذرات محفوظة تماماً ولا تضيع، بل يعاد ترتيب ارتباطها فقط.',
          takeawayEn: 'In any chemical reaction, atomic mass is strictly conserved; atoms are simply rearranged.'
        },
        formativeCheck: {
          id: 'fc-sci1-4',
          questionAr: 'أي من التغيرات التالية يُعتبر "تغيراً كيميائياً" ينتج عنه مادة جديدة؟',
          questionEn: 'Which of the following processes represents a chemical change forming new substances?',
          optionsAr: [
            'صدأ مسمار من الحديد عند تعرضه للهواء والرطوبة',
            'ذوبان ملح الطعام في كأس ماء دافئ',
            'انصهار قالب من الشمع بالتسخين',
            'تقطيع لوح من الخشب إلى قطع صغيرة'
          ],
          optionsEn: [
            'Rusting of an iron nail exposed to moist air',
            'Dissolving table salt in warm water',
            'Melting a wax candle with heat',
            'Cutting a wooden plank into small pieces'
          ],
          correctIndex: 0,
          explanationAr: 'صدأ الحديد ينتج مادة جديدة تماماً هي (أكسيد الحديد Fe₂O₃) تختلف جذرياً في خواصها ولونها عن فلز الحديد الأصلي، بينما الباقي تغيرات فيزيائية فقط.',
          explanationEn: 'Rusting forms a new compound (Iron Oxide Fe₂O₃) with completely new properties. The others are purely physical alterations.',
          hintAr: 'ابحث عن العملية التي تؤدي لتكوين مركب جديد بروابط كيميائية لا يمكن عكسها بسهولة.'
        },
        tipsAr: [
          'من أهم دلائل حدوث التغير الكيميائي: تصاعد غاز، تغير اللون، انبعاث ضوء أو حرارة، وتكون راسب صلب.',
          'الكتلة لا تتغير في الأنظمة المغلقة، وإذا بدا أن الكتلة نقصت في نظام مفتوح فالسبب هو تسرب غاز متصاعد للجو.'
        ],
        tipsEn: [
          'Evidence of chemical change: gas evolution, color change, heat/light release, precipitate formation.',
          'Apparent mass loss in open systems is typically due to escaped gaseous products.'
        ]
      }
    ],

    // Concept Map / Golden takeaways
    conceptMapAr: [
      'تعريف المادة: كل ما له كتلة ويشغل حيزاً (حجم). وحالاتها: صلبة، سائلة، وغازية',
      'معادلة الكثافة: D = m / V (الكتلة مقسومة على الحجم) | شرط الطفو: D_الجسم < D_السائل',
      'بنية الذرة: النواة (بروتونات موجبة p⁺ + نيوترونات متعادلة n⁰) + إلكترونات سالبة e⁻ في مستويات الطاقة',
      'العدد الذري (Z): عدد البروتونات = عدد الإلكترونات في الذرة المتعادلة',
      'العدد الكتلي (A): مجموع البروتونات والنيوترونات (A = Z + N) | عدد النيوترونات N = A - Z',
      'العنصر: ذرات متطابقة (O₂, Fe) | المركب: اتحاد كيميائي بنسب ثابتة (H₂O, NaCl) | المخلوط: مزيج فيزيائي (الهواء، الرمل والملح)',
      'طرق الفصل: المغناطيس (للحديد)، الترشيح (لغير الذائب)، التبخير والتقطير (للسوائل والمحاليل)',
      'التغيرات وقانون حفظ الكتلة: التغير الكيميائي يكوّن روابط ومواد جديدة، والكتلة الكلية للمتفاعلات تساوي كتلة النواتج دائماً'
    ],
    conceptMapEn: [
      'Matter definition: Has mass and volume (Solid, Liquid, Gas states)',
      'Density formula: D = m / V | Floating criterion: D_object < D_fluid',
      'Atom anatomy: Nucleus (p+, n0) + Energy shells (e-)',
      'Atomic number Z = protons = electrons (neutral atom)',
      'Mass number A = Z + N | Neutrons N = A - Z',
      'Element (same atoms) vs Compound (chemically bonded) vs Mixture (physical blend)',
      'Separation: Magnetism, Filtration, Evaporation, Distillation',
      'Conservation of Mass: Chemical changes create new substances, total reactant mass equals product mass'
    ],

    // Guided Textbook Exercises (4 Complete Worked Models)
    textbookExercises: [
      {
        id: 'ex-sci1-1',
        questionAr: 'مكعب صلب كتلته 270 جراماً وطول ضلعه 5 سم. 1) احسب حجم المكعب. 2) احسب كثافته. 3) إذا وُضع المكعب في حوض ماء (كثافة الماء = 1 g/cm³)، فهل يطفو أم يغوص؟ مع التعليل العلمي.',
        questionEn: 'A solid cube has mass 270g and edge length 5 cm. 1) Find volume. 2) Compute density. 3) Predict if it floats or sinks in water (density 1 g/cm³) with explanation.',
        solutionStepsAr: [
          'الخطوة 1: حساب حجم المكعب: V = طول الضلع × نفسه × نفسه = 5 × 5 × 5 = 125 سم³.',
          'الخطوة 2: حساب الكثافة: D = m ÷ V = 270 ÷ 125 = 2.16 g/cm³.',
          'الخطوة 3: المقارنة بالماء: بما أن كثافة المكعب (2.16 g/cm³) أكبر من كثافة الماء (1.0 g/cm³)، فإن المكعب سوف ينغمر (يغوص) في القاع.'
        ],
        solutionStepsEn: [
          'Step 1: Volume V = 5 x 5 x 5 = 125 cm³.',
          'Step 2: Density D = 270 / 125 = 2.16 g/cm³.',
          'Step 3: Comparison: 2.16 > 1.0 g/cm³, so the cube sinks to the bottom.'
        ],
        answerAr: 'حجم المكعب = 125 سم³ • الكثافة = 2.16 g/cm³ • يغوص المكعب لأن كثافته أكبر من كثافة الماء.',
        answerEn: 'Volume = 125 cm³ • Density = 2.16 g/cm³ • Sinks because its density exceeds water.'
      },
      {
        id: 'ex-sci1-2',
        questionAr: 'ذرة عنصر المغنيسيوم يُرمز لها بالرمز ₁₂²⁴Mg. 1) ما هو العدد الذري والعدد الكتلي؟ 2) احسب عدد كل من: البروتونات، الإلكترونات، والنيوترونات.',
        questionEn: 'Magnesium atom is represented as ₁₂²⁴Mg. 1) State atomic and mass numbers. 2) Calculate protons, electrons, and neutrons.',
        solutionStepsAr: [
          'العدد الذري Z = 12 (الرقم السفلي)، والعدد الكتلي A = 24 (الرقم العلوي).',
          'عدد البروتونات p⁺ = Z = 12 بروتوناً موجباً.',
          'عدد الإلكترونات e⁻ = عدد البروتونات = 12 إلكتروناً سالباً (ذرة متعادلة).',
          'عدد النيوترونات N = A - Z = 24 - 12 = 12 نيوتروناً متعادلاً.'
        ],
        solutionStepsEn: [
          'Atomic number Z = 12, Mass number A = 24.',
          'Protons = 12, Electrons = 12.',
          'Neutrons N = 24 - 12 = 12.'
        ],
        answerAr: 'العدد الذري = 12، العدد الكتلي = 24 • البروتونات = 12، الإلكترونات = 12، النيوترونات = 12.',
        answerEn: 'Atomic number = 12, Mass number = 24 • Protons = 12, Electrons = 12, Neutrons = 12.'
      },
      {
        id: 'ex-sci1-3',
        questionAr: 'لديك عينة من سائل مجهول حجمها 40 mL وكتلتها 32 g. احسب كثافة هذا السائل، وهل سيطفو فوق الماء أم ينغمر فيه؟',
        questionEn: 'An unknown liquid has volume 40 mL and mass 32 g. Calculate its density and determine if it floats on water.',
        solutionStepsAr: [
          'الخطوة 1: قانون الكثافة D = الكتلة m ÷ الحجم V = 32 ÷ 40 = 0.8 g/mL (أو g/cm³).',
          'الخطوة 2: مقارنة الكثافة بالماء: بما أن كثافة السائل (0.8 g/cm³) أقل من كثافة الماء (1.0 g/cm³)، فإن السائل سوف يطفو فوق سطح الماء مشكلاً طبقة عليا (مثل الزيوت أو الكحول).'
        ],
        solutionStepsEn: [
          'Step 1: Density D = 32 / 40 = 0.8 g/cm³.',
          'Step 2: Since 0.8 < 1.0 g/cm³, the liquid floats on water.'
        ],
        answerAr: 'كثافة السائل = 0.8 g/cm³ • يطفو السائل فوق الماء لأن كثافته أقل من كثافة الماء.',
        answerEn: 'Density = 0.8 g/cm³ • Floats on water because its density is less than water.'
      },
      {
        id: 'ex-sci1-4',
        questionAr: 'ذرة عنصر الكلور ₁₇³⁷Cl: احسب عدد البروتونات والنيوترونات والإلكترونات. وما وجه الشبه والاختلاف بينها وبين ذرة الكلور ₁₇³⁵Cl (نظائر الكلور)؟',
        questionEn: 'For Chlorine ₁₇³⁷Cl: Compute protons, neutrons, electrons, and compare with Chlorine-35 isotope.',
        solutionStepsAr: [
          'البروتونات p⁺ = Z = 17، الإلكترونات e⁻ = 17.',
          'النيوترونات n⁰ في الكلور-37 = A - Z = 37 - 17 = 20 نيوتروناً.',
          'في الكلور-35: النيوترونات = 35 - 17 = 18 نيوتروناً.',
          'وجه الشبه: متماثلان في العدد الذري وعدد البروتونات والإلكترونات والخواص الكيميائية.',
          'وجه الاختلاف: يختلفان في العدد الكتلي وعدد النيوترونات (20 نيوترون مقابل 18 نيوترون).'
        ],
        solutionStepsEn: [
          'Protons = 17, Electrons = 17. Neutrons in Cl-37 = 37 - 17 = 20.',
          'Neutrons in Cl-35 = 35 - 17 = 18.',
          'Similarity: Same atomic number and chemical behavior.',
          'Difference: Distinct mass numbers and neutron counts.'
        ],
        answerAr: 'البروتونات = 17، الإلكترونات = 17، النيوترونات = 20 • يتشابه النظيران في البروتونات ويختلفان في عدد النيوترونات والكتلة.',
        answerEn: 'Protons = 17, Electrons = 17, Neutrons = 20 • Isotopes share proton count but differ in neutron count.'
      }
    ],

    assessment: {
      id: 'quiz-sci-1',
      lectureId: 'sci-1',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 1: طبيعة المادة والذرات والعناصر والمركبات',
      titleEn: 'Comprehensive Mastery Assessment 1: Matter, Atoms & Compounds',
      passingScore: 80,
      questions: [
        {
          id: 'qsc1-1',
          textAr: 'ما هي الجسيمات سالبة الشحنة التي تدور في مستويات طاقة حول نواة الذرة؟',
          textEn: 'Which negatively charged particles orbit the atomic nucleus in energy shells?',
          optionsAr: ['الإلكترونات (e⁻)', 'البروتونات (p⁺)', 'النيوترونات (n⁰)', 'الجزيئات'],
          optionsEn: ['Electrons (e⁻)', 'Protons (p⁺)', 'Neutrons (n⁰)', 'Molecules'],
          correctIndex: 0,
          conceptTestedAr: 'بنية الذرة وجسيماتها دون الذرية',
          conceptTestedEn: 'Subatomic Particle Charges & Locations',
          explanationAr: 'الإلكترونات هي جسيمات سالبة الشحنة (-e) تدور في مدارات حول النواة، بينما البروتونات والنيوترونات توجد داخل النواة.',
          explanationEn: 'Electrons are the negative particles orbiting the atomic nucleus.',
          difficulty: 'easy'
        },
        {
          id: 'qsc1-2',
          textAr: 'جسم كتلته 200 جرام وحجمه 40 سم³. ما هي كثافته، وماذا يحدث له عند وضعه في سائل كثافته 2.5 g/cm³؟',
          textEn: 'An object has mass 200g and volume 40 cm³. What is its density, and how does it behave in a fluid with density 2.5 g/cm³?',
          optionsAr: [
            'كثافته 5.0 g/cm³ وينغمر في السائل',
            'كثافته 5.0 g/cm³ ويطفو على السائل',
            'كثافته 0.2 g/cm³ ويطفو على السائل',
            'كثافته 8000 g/cm³ وينغمر في السائل'
          ],
          optionsEn: [
            'Density is 5.0 g/cm³ and it sinks in the liquid',
            'Density is 5.0 g/cm³ and it floats',
            'Density is 0.2 g/cm³ and it floats',
            'Density is 8000 g/cm³ and it sinks'
          ],
          correctIndex: 0,
          conceptTestedAr: 'حساب الكثافة ومقارنة الطفو والانغمار',
          conceptTestedEn: 'Density Calculation & Fluid Buoyancy',
          explanationAr: 'D = m / V = 200 ÷ 40 = 5.0 g/cm³. بما أن كثافة الجسم (5.0) أكبر من كثافة السائل (2.5)، فإنه ينغمر ويغوص في القاع.',
          explanationEn: 'D = 200 / 40 = 5.0 g/cm³. Since 5.0 > 2.5 g/cm³, it sinks.',
          difficulty: 'medium'
        },
        {
          id: 'qsc1-3',
          textAr: 'ذرة عنصر الفوسفور ₁₅³¹P تحتوي نواتها على:',
          textEn: 'A Phosphorus atom ₁₅³¹P contains in its nucleus:',
          optionsAr: [
            '15 بروتوناً و 16 نيوتروناً',
            '15 بروتوناً و 31 نيوتروناً',
            '31 بروتوناً و 15 نيوتروناً',
            '16 بروتوناً و 15 نيوتروناً'
          ],
          optionsEn: [
            '15 protons and 16 neutrons',
            '15 protons and 31 neutrons',
            '31 protons and 15 neutrons',
            '16 protons and 15 neutrons'
          ],
          correctIndex: 0,
          conceptTestedAr: 'حساب النيوترونات والبروتونات من الرمز الذري',
          conceptTestedEn: 'Nuclear Particle Counting via A and Z',
          explanationAr: 'العدد الذري Z = 15 (عدد البروتونات). العدد الكتلي A = 31. عدد النيوترونات N = A - Z = 31 - 15 = 16 نيوتروناً.',
          explanationEn: 'Protons = Z = 15. Neutrons N = 31 - 15 = 16.',
          difficulty: 'medium'
        },
        {
          id: 'qsc1-4',
          textAr: 'أي من الطرق التالية هي الطريقة الفيزيائية المناسبة لفصل ملح الطعام الذائب في الماء؟',
          textEn: 'Which physical method is suitable to separate dissolved table salt from water?',
          optionsAr: [
            'التبخير (تسخين المحلول لتبخير الماء)',
            'الترشيح بورقة الترشيح',
            'الجذب المغناطيسي',
            'استخدام الملقط والفرز اليدوي'
          ],
          optionsEn: [
            'Evaporation (heating to vaporize water)',
            'Paper filtration',
            'Magnetic attraction',
            'Manual sorting'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طرق فصل المخاليط والمحاليل المتجانسة',
          conceptTestedEn: 'Separation of Homogeneous Solutions',
          explanationAr: 'الملح مادة صلبة ذائبة تماماً في الماء (مخلوط متجانس)، لذا لا تنفصل بالترشيح بل بالتبخير حيث يتبخر الماء وتبقى بلورات الملح.',
          explanationEn: 'Dissolved salt passes through filter paper; evaporation boils off water leaving salt crystals behind.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-2',
    order: 2,
    titleAr: 'المحاضرة 2: الخلية الحية: اللبنة الأساسية لبناء الكائنات الحية',
    titleEn: 'Lecture 2: The Living Cell: Fundamental Building Block of Life',
    subtitleAr: 'المقارنة الدقيقة بين الخلية النباتية والحيوانية، ووظائف العضيات الخلوية (النواة، الغشاء، الميتوكوندريا، البلاستيدات، الجدار الخلوي)',
    subtitleEn: 'Master cell theory, organelle functions (nucleus, mitochondria, membrane), and structural contrasts between plant and animal cells.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-1',
    prerequisiteTitleAr: 'المحاضرة 1: طبيعة المادة والذرات والعناصر والمركبات',
    prerequisiteTitleEn: 'Lecture 1: Nature of Matter: Atoms, Elements & Compounds',

    gradeLevelNameAr: 'الصف الأول متوسط (الصف السابع) - المرحلة المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Middle School - General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: تنوع الحياة وبنية الخلايا الحية',
    unitTitleEn: 'Unit 2: Cellular Biology & Living Systems',
    lessonNumberAr: 'الدرس 1: الخلية: التركيب والوظائف والمقارنة الخلوية',
    lessonNumberEn: 'Lesson 1: Cell Structure, Organelles & Comparative Cytology',

    warmupHookAr: 'جسم الإنسان البالغ يتكون من أكثر من 37 تريليون خلية حية تعمل بتناغم مذهل كمدينة عملاقة فائقة التطور! في كل خلية هناك مركز تحكم وإدارة (النواة)، ومحطات لتوليد الطاقة الكهربائية والكيميائية (الميتوكوندريا)، وبوابات أمنية تسمح بدخول المواد وخروجها (الغشاء البلازمي). فما الفارق المجهري الذي يجعل النباتات قادرة على صنع غذائها من أشعة الشمس بينما تعتمد الحيوانات على التغذي؟',
    warmupHookEn: 'The human body comprises over 37 trillion cooperating living cells. Compare the miraculous microscopic machinery of photosynthetic plant cells against animal cells.',

    learningOutcomesAr: [
      'أن يوضح الطالب بنود نظرية الخلية الثلاثة وتاريخ اكتشافها بالمجهر',
      'أن يحدد وظائف العضيات الخلوية الرئيسية: النواة (DNA)، الميتوكوندريا (ATP)، الغشاء البلازمي، والسيتوبلازم',
      'أن يقارن بدقة مجهرية بين الخلية النباتية والخلية الحيوانية في ثلاثة تراكيب رئيسية (الجدار الخلوي، البلاستيدات الخضراء، الفجوة العصارية)',
      'أن يربط بين تركيب العضية ووظيفتها الحيوية في الحفاظ على حياة الكائن الحي وتكاثره'
    ],
    learningOutcomesEn: [
      'State the three postulates of Cell Theory',
      'Identify key organelle roles: Nucleus (DNA control), Mitochondria (ATP energy), Plasma Membrane, Cytoplasm',
      'Compare plant vs animal cells across cell walls, chloroplasts, central vacuoles, and centrosomes',
      'Correlate organelle anatomy with macroscopic physiological function'
    ],

    vocabulary: [
      {
        termAr: 'نظرية الخلية (Cell Theory)',
        termEn: 'Cell Theory',
        definitionAr: 'نظرية علمية تنص على: 1) جميع الكائنات الحية تتكون من خلية أو أكثر، 2) الخلية هي الوحدة الأساسية للتركيب والوظيفة، 3) تنشأ جميع الخلايا من خلايا سابقة لها بالانقسام.',
        definitionEn: 'Biological doctrine stating all living organisms consist of cells, cells are the unit of life, and cells arise from pre-existing cells.'
      },
      {
        termAr: 'الميتوكوندريا (Mitochondria)',
        termEn: 'Mitochondria',
        definitionAr: 'عضيات خلوية تُعرف بمحطات توليد الطاقة في الخلية؛ تقوم بالتنفس الخلوي وأكسدة الجلوكوز لإنتاج مركبات الطاقة ATP.',
        definitionEn: 'The powerhouse of the cell, carrying out cellular respiration to synthesize ATP energy.'
      },
      {
        termAr: 'البلاستيدات الخضراء (Chloroplasts)',
        termEn: 'Chloroplasts',
        definitionAr: 'عضيات توجد في الخلايا النباتية فقط تحتوي على صبغة الكلوروفيل الخضراء وتمتص ضوء الشمس للقيام بعملية البناء الضوئي وصنع السكر.',
        definitionEn: 'Plant-exclusive organelles containing chlorophyll that capture sunlight for photosynthetic glucose production.'
      },
      {
        termAr: 'الجدار الخلوي (Cell Wall)',
        termEn: 'Cell Wall',
        definitionAr: 'جدار صلب خارجي يحيط بالغشاء البلازمي للخلية النباتية يتكون من السليلوز ويوفر الدعامة والحماية والشكل الثابت للخلية.',
        definitionEn: 'A rigid cellulose outer layer enclosing plant cells that provides structural support and protection.'
      }
    ],

    keyConceptsAr: [
      'بنود نظرية الخلية الثلاثة',
      'العضيات المشتركة: النواة (مركز التحكم والوراثة)، الميتوكوندريا (إنتاج الطاقة)، الغشاء البلازمي (النفاذية الاختيارية)',
      'الفروق المميزة للخلية النباتية: جدار خلوي صلب + بلاستيدات خضراء + فجوة عصارية مركزية كبيرة',
      'الفروق المميزة للخلية الحيوانية: غشاء مرن + شكل غير منتظم + فجوات صغيرة + جسم مركزي (سنتروسوم)',
      'التنفس الخلوي (حرق الغذاء وإنتاج الطاقة) مقابل البناء الضوئي (صنع الغذاء)'
    ],
    keyConceptsEn: [
      'Three Postulates of Cell Theory',
      'Shared Organelles: Nucleus (DNA & control), Mitochondria (ATP), Plasma Membrane (selective permeability)',
      'Plant Exclusive: Cellulose Wall + Photosynthetic Chloroplasts + Giant Central Vacuole',
      'Animal Characteristics: Flexible shape, small vacuoles, Centrosomes for division',
      'Cellular Respiration vs Photosynthesis Energy Dynamics'
    ],
    summaryAr: 'في هذه المحاضرة نغوص داخل عالم الخلية الحية المجهري؛ نتعلم بنود نظرية الخلية، ونفحص وظائف عضيات الخلية كالنواة والميتوكوندريا، ونجري مقارنة تشريحية دقيقة توضح الفروق بين الخلية النباتية والحيوانية.',
    summaryEn: 'Explore cellular anatomy and organelle physiology, comparing photosynthetic plant cells possessing cell walls and chloroplasts with animal cells.',

    sections: [
      {
        titleAr: '1. بنية الخلية والعضيات الخلوية الحيوية',
        titleEn: '1. Cellular Architecture & Essential Organelles',
        contentAr: 'الخلية هي أصغر وحدة حية قادرة على القيام بجميع مظاهر الحياة. تشترك جميع الخلايا حقيقية النواة في تراكيب أساسية:\n1. النواة: مركز إدارة الخلية وتحتوي على المادة الوراثية (DNA) التي تحمل الصفات الوراثية وتوجه صناعة البروتينات.\n2. الغشاء البلازمي: غشاء مزدوج رقيق يحيط بالخلية ويتميز بخاصية "النفاذية الاختيارية" (ينظم دخول الماء والغذاء وخروج الفضلات).\n3. السيتوبلازم: سائل هلامي يملأ الخلية تسبح فيه العضيات وتحدث فيه معظم التفاعلات الكيميائية الحيوية.\n4. الميتوكوندريا: مصانع الطاقة التي تحرق جزيئات السكر بالأكسجين لإنتاج طاقة ATP التي تحتاجها الخلية للنمو والحركة.',
        contentEn: 'Cells contain conserved core organelles: the genetic control nucleus (DNA), the selectively permeable plasma membrane, cytoplasm fluid, and ATP-generating mitochondria.',
        diagram: {
          id: 'diag-sci2-cell-comparison',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'المقارنة التشريحية الدقيقة بين الخلية النباتية والخلية الحيوانية',
          titleEn: 'Comparative Anatomy: Plant vs Animal Cell Architecture',
          captionAr: 'مخطط مقارن يبين العضيات المشتركة (النواة، الميتوكوندريا، الغشاء البلازمي، السيتوبلازم)، والتركيبات الحصرية للخلية النباتية (الجدار الخلوي السليلوزي، البلاستيدات الخضراء، الفجوة العصارية الضخمة)، والخلية الحيوانية (الجسم المركزي).',
          captionEn: 'Detailed vector cytological comparison contrasting plant-exclusive chloroplasts and cell walls with animal cell morphology.',
          diagramType: 'plant_animal_cell',
          takeawayFormulaAr: 'الخلية النباتية = جدار خلوي صلب + بلاستيدات خضراء + فجوة عصارية كبيرة',
          takeawayFormulaEn: 'Plant Cell = Rigid Cellulose Wall + Chloroplasts + Giant Vacuole',
          keyLabels: [
            { tagAr: 'جدار خلوي سلولوزي', tagEn: 'Cellulose Wall', color: '#10b981' },
            { tagAr: 'بلاستيدات خضراء', tagEn: 'Chloroplasts', color: '#22c55e' },
            { tagAr: 'ميتوكوندريا الطاقة', tagEn: 'Mitochondria (ATP)', color: '#ef4444' },
            { tagAr: 'النواة وDNA', tagEn: 'Nucleus & DNA', color: '#a855f7' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق عملي (2-1): تشخيص نوع الخلية من خلال فحص العضيات المجهرية',
          titleEn: 'Worked Example (2-1): Cytological Microscopic Identification',
          equation: 'وجود الجدار الخلوي + البلاستيدات = خلية نباتية',
          steps: [
            {
              stepNumber: 1,
              textAr: 'فحص مجهري لعينة (أ): لوحظ وجود جدار خلوي سليلوزي منتظم الشكل وأجسام خضراء بيضاوية تسبح في السيتوبلازم وفجوة مائية ضخمة.',
              textEn: 'Microscopic inspection of Sample A reveals rigid polygonal walls, green ovoid organelles, and large vacuole.'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل: وجود البلاستيدات الخضراء والجدار الخلوي دليل قاطع على أنها (خلية نباتية) من نسيج ورقة نباتية تصنع الغذاء بالبناء الضوئي.',
              textEn: 'Deduction: Presence of chloroplasts and cellulose wall confirms Sample A is a photosynthetic Plant Cell.'
            },
            {
              stepNumber: 3,
              textAr: 'فحص عينة (ب): خلايا مرنة مستديرة الشكل محاطة بغشاء بلازمي فقط وتفتقر للجدار والبلاستيدات وبها ميتوكوندريا بكثرة => (خلية حيوانية).',
              textEn: 'Sample B: Flexible rounded shape, plasma membrane only, lacking chloroplasts => Animal Cell.'
            }
          ],
          takeawayAr: 'الجدار الخلوي والبلاستيدات الخضراء هما البصمة التشريحية الحاسمة لتمييز الخلايا النباتية.',
          takeawayEn: 'Cell walls and chloroplasts serve as the definitive microscopic hallmarks of plant cytology.'
        },
        formativeCheck: {
          id: 'fc-sci2-1',
          questionAr: 'أي من العضيات التالية هو المسؤول عن تزويد الخلية بالطاقة اللازمة للأنشطة الحيوية عن طريق التنفس الخلوي؟',
          questionEn: 'Which organelle powers the cell with ATP energy through cellular respiration?',
          optionsAr: ['الميتوكوندريا (Mitochondria)', 'البلاستيدات الخضراء', 'الجدار الخلوي', 'الفجوة العصارية'],
          optionsEn: ['Mitochondria', 'Chloroplasts', 'Cell wall', 'Vacuole'],
          correctIndex: 0,
          explanationAr: 'الميتوكوندريا هي محطات توليد الطاقة في الخلية؛ تقوم بأكسدة الجلوكوز وإنتاج جزيئات الطاقة ATP في كل من الخلايا النباتية والحيوانية.',
          explanationEn: 'Mitochondria generate cellular ATP energy via aerobic respiration in all eukaryotic cells.',
          hintAr: 'تسمى هذه العضية بـ "مصنع الطاقة" في الخلية.'
        },
        tipsAr: [
          'الميتوكوندريا توجد في الخلايا النباتية والحيوانية معاً، فالنبات يصنع الغذاء بالبلاستيدات ثم يحرقه بالميتوكوندريا لإنتاج الطاقة!',
          'الغشاء البلازمي يحيط بجميع أنواع الخلايا بلا استثناء.'
        ]
      },
      {
        titleAr: '2. المقارنة التفصيلية بين الخلية النباتية والحيوانية',
        titleEn: '2. Comprehensive Plant vs Animal Cell Cytology',
        contentAr: 'رغم أن كلا النوعين من الخلايا حقيقيات النواة، إلا أن هناك فروقاً تركيبية محورية تلائم طبيعة حياة كل كائن:\n\n• الخلية النباتية: 1) تمتلك جداراً خلوياً سليلوزياً صلباً يمنحها دعامة وشكلاً هندسياً ثابتاً، 2) تحتوي على بلاستيدات خضراء تقوم بالبناء الضوئي، 3) تحتوي على فجوة عصارية مركزية واحدة عملاقة تخزن الماء والأملاح.\n\n• الخلية الحيوانية: 1) لا تمتلك جداراً خلوياً بل غشاء بلازمياً مرناً يعطيها شكلاً مرناً متغيراً، 2) لا تحتوي على بلاستيدات خضراء (غير ذاتية التغذية)، 3) تحتوي على فجوات عصارية متعددة صغيرة الحجم، 4) تمتلك جسماً مركزياً (السنتروسوم) يسهم في عملية الانقسام الخلوي.',
        contentEn: 'Plant cells possess rigid cellulose cell walls, photosynthetic chloroplasts, and a massive central vacuole. Animal cells feature flexible plasma membranes, small vacuoles, and centrosomes for mitotic division.',
        interactiveExample: {
          titleAr: 'تطبيق عملي (2-2): جدول المقارنة التشخيصي بين الخليتين',
          titleEn: 'Worked Example (2-2): Diagnostic Cytological Contrast Matrix',
          equation: 'جدار خلوي + بلاستيدات = نباتية | غشاء فقط + جسم مركزي = حيوانية',
          steps: [
            {
              stepNumber: 1,
              textAr: 'خاصية الجدار الخلوي: موجود في النباتية (يعطي صلابة) / غائب في الحيوانية (يسمح بالمرونة والحركة).',
              textEn: 'Cell wall: Present in plant / Absent in animal.'
            },
            {
              stepNumber: 2,
              textAr: 'خاصية البلاستيدات الخضراء: موجودة في النباتية لصنع الغذاء / غائبة تماماً في الحيوانية.',
              textEn: 'Chloroplasts: Present in plant / Absent in animal.'
            },
            {
              stepNumber: 3,
              textAr: 'خاصية الفجوات: فجوة واحدة ضخمة في النباتية / فجوات عديدة وصغيرة في الحيوانية.',
              textEn: 'Vacuoles: One giant central vacuole in plant / multiple small vacuoles in animal.'
            }
          ],
          takeawayAr: 'التكامل بين التركيب والوظيفة يتجلى في حاجة النبات للدعامة الثابتة وحاجة الحيوان للمرونة الحركية.',
          takeawayEn: 'Structure reflects lifestyle: rigid structural support for autotrophic plants vs locomotion flexibility for animals.'
        },
        tipsAr: ['الخلايا الحيوانية تنفجر إذا امتصت كميات كبيرة من الماء، بينما الخلية النباتية يحميها جدارها السليلوزي الصلب من الانفجار!']
      }
    ],

    conceptMapSummaryAr: 'نظرية الخلية: وحدة البناء والوظيفة وتنشأ بالانقسام. العضيات المشتركة: نواة (تحكم وDNA)، ميتوكوندريا (طاقة ATP)، غشاء بلازمي، سيتوبلازم. مميزات النباتية: جدار خلوي سلولوزي، بلاستيدات خضراء، فجوة ضخمة. مميزات الحيوانية: غشاء مرن، فجوات صغيرة، جسم مركزي.',
    conceptMapSummaryEn: 'Cell Theory: Unit of structure and life arising from division. Shared: Nucleus, Mitochondria, Membrane, Cytoplasm. Plant: Wall + Chloroplasts + Giant Vacuole. Animal: Flexible membrane + Small vacuoles + Centrosome.',

    goldenRulesAr: [
      'القاعدة 1: الخلية هي الوحدة التركيبية والوظيفية الأساسية لجميع الكائنات الحية على كوكب الأرض.',
      'القاعدة 2: تنشأ جميع الخلايا الحية حصرياً من انقسام خلايا حية كانت موجودة من قبل.',
      'القاعدة 3: النواة هي مركز إدارة الخلية وتحتوي على المادة الوراثية (DNA).',
      'القاعدة 4: الميتوكوندريا هي مصنع إنتاج طاقة ATP وتوجد في كل من الخلايا النباتية والحيوانية.',
      'القاعدة 5: الجدار الخلوي السليلوزي والبلاستيدات الخضراء توجد حصرياً في الخلايا النباتية.',
      'القاعدة 6: الغشاء البلازمي يتمتع بخاصية النفاذية الاختيارية لتنظيم حركة المواد من وإلى الخلية.',
      'القاعدة 7: الفجوة العصارية في النبات تكون واحدة وضخمة لتخزين الماء وضغط الامتلاء، بينما في الحيوان صغيرة ومتعددة.'
    ],
    goldenRulesEn: [
      'Rule 1: The cell is the fundamental unit of structure and physiological function in all living organisms.',
      'Rule 2: All living cells arise exclusively from the division of pre-existing cells.',
      'Rule 3: The nucleus is the cellular control center housing genetic DNA blueprints.',
      'Rule 4: Mitochondria generate ATP energy via cellular respiration in both plant and animal cells.',
      'Rule 5: Cellulose cell walls and chloroplasts are exclusive to photosynthetic plant cells.',
      'Rule 6: Plasma membranes exhibit selective permeability controlling substance exchange.',
      'Rule 7: Plant cells contain a giant turgor vacuole; animal cells feature small dispersed vacuoles.'
    ],

    textbookExercises: [
      {
        id: 'ex-sci-2-1',
        questionAr: 'ماذا يحدث لخلية حيوانية وخلية نباتية عند وضعهما في ماء مقطر نقي؟ فسّر الإجابة بناءً على التركيب الخلوي لكل منهما.',
        questionEn: 'What happens to an animal cell vs a plant cell when placed in pure distilled water? Explain based on cell wall anatomy.',
        solutionStepsAr: [
          '1. في كلتا الحالتين: يدخل الماء إلى داخل الخلية بالخاصية الأسموزية بسبب اختلاف التركيز.',
          '2. الخلية الحيوانية: تمتلئ بالماء وتنتفخ ثم تنفجر في النهاية لأنها محاطة بغشاء بلازمي مرن رقيق فقط لا يتحمل ضغط الماء الداخلي.',
          '3. الخلية النباتية: تمتلئ فجوتها العصارية بالماء وتنتفخ وتصبح مشدودة (ممتلئة) دون أن تنفجر؛ لأن الجدار الخلوي السليلوزي الصلب يحيط بها ويتحمل الضغط ويحميها.'
        ],
        solutionStepsEn: [
          '1. Water enters both cells via osmosis.',
          '2. Animal cell: swells and lyses (bursts) because its thin flexible membrane cannot withstand osmotic turgor pressure.',
          '3. Plant cell: expands and becomes turgid without lysing due to the mechanical rigidity of its cellulose cell wall.'
        ],
        answerAr: 'تنفجر الخلية الحيوانية لعدم وجود جدار خلوي، بينما تنتفخ الخلية النباتية دون أن تنفجر بفضل جدارها الخلوي السليلوزي القوي.',
        answerEn: 'The animal cell bursts; the plant cell becomes turgid safely protected by its rigid cellulose wall.'
      },
      {
        id: 'ex-sci-2-2',
        questionAr: 'لماذا تحتوي خلايا العضلات في الحيوانات وخلايا الأوراق المعرضة للشمس في النباتات على أعداد هائلة من الميتوكوندريا والبلاستيدات الخضراء بالترتيب؟',
        questionEn: 'Why do animal muscle cells contain high counts of mitochondria, and plant leaf cells high counts of chloroplasts?',
        solutionStepsAr: [
          '1. خلايا العضلات: تبذل شغلاً حركياً مكثفاً ومستمراً فتحتاج إلى كميات هائلة من طاقة ATP، والميتوكوندريا هي المسؤولة عن إنتاج هذه الطاقة بحرق الجلوكوز.',
          '2. خلايا أوراق النبات: هي المصنع الرئيسي للبناء الضوئي المعرض لضوء الشمس، فتحتاج لكثافة عالية من البلاستيدات الخضراء لاقتناص أكبر قدر من الطاقة الضوئية وصنع السكر.'
        ],
        solutionStepsEn: [
          '1. Muscle cells perform high-demand mechanical contraction requiring massive ATP synthesized by mitochondria.',
          '2. Leaf cells capture sunlight for photosynthesis, requiring dense chloroplast populations to produce glucose.'
        ],
        answerAr: 'لتلبية الاحتياجات الوظيفية؛ فالعضلات تحتاج طاقة حركة هائلة (ميتوكوندريا)، والأوراق تحتاج تصنيع الغذاء بالبناء الضوئي (بلاستيدات).',
        answerEn: 'Structure matches function: high ATP demand in muscles (mitochondria) and high glucose synthesis in leaves (chloroplasts).'
      }
    ],

    assessment: {
      id: 'quiz-sci-2',
      lectureId: 'sci-2',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 2: الخلية الحية والعضيات والمقارنة الخلوية',
      titleEn: 'Mastery Assessment 2: Cell Biology & Organelles',
      passingScore: 80,
      questions: [
        {
          id: 'qsc2-1',
          textAr: 'أي من التراكيب التالية يوجد في الخلية النباتية ولا يوجد في الخلية الحيوانية؟',
          textEn: 'Which structure is present in plant cells but strictly absent in animal cells?',
          optionsAr: [
            'الجدار الخلوي السليلوزي والبلاستيدات الخضراء',
            'الغشاء البلازمي والسيتوبلازم',
            'النواة والمادة الوراثية DNA',
            'الميتوكوندريا'
          ],
          optionsEn: [
            'Cellulose cell wall and Chloroplasts',
            'Plasma membrane and Cytoplasm',
            'Nucleus and DNA',
            'Mitochondria'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفروق التشريحية المميزة للخلية النباتية',
          conceptTestedEn: 'Plant-Exclusive Cytological Structures',
          explanationAr: 'الجدار الخلوي (للدعامة والحماية) والبلاستيدات الخضراء (للبناء الضوئي) توجد حصرياً في الخلايا النباتية.',
          explanationEn: 'Cell walls and chloroplasts are unique to plant cells, enabling photosynthesis and structural rigidity.',
          difficulty: 'easy'
        },
        {
          id: 'qsc2-2',
          textAr: 'ما هي الوظيفة الأساسية للنواة داخل الخلية الحية؟',
          textEn: 'What is the primary physiological function of the cell nucleus?',
          optionsAr: [
            'التحكم في جميع أنشطة الخلية واحتواء المادة الوراثية (DNA) وتوجيه الانقسام',
            'إنتاج الطاقة الحركية ATP',
            'امتصاص ضوء الشمس للقيام بالبناء الضوئي',
            'تخزين الفضلات والماء فقط'
          ],
          optionsEn: [
            'Control cellular activities, house DNA, and direct replication',
            'Synthesize ATP energy',
            'Absorb sunlight for photosynthesis',
            'Store waste and water only'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة النواة والتحكم الوراثي',
          conceptTestedEn: 'Nuclear Control & Genetic Role',
          explanationAr: 'النواة هي مركز القيادة والتحكم في الخلية؛ لأنها تحتوي على الكروموسومات والـ DNA الذي يحمل كافة التعليمات الوراثية وصناعة البروتينات.',
          explanationEn: 'The nucleus houses genetic blueprints (DNA) directing all cellular metabolism and reproduction.',
          difficulty: 'easy'
        },
        {
          id: 'qsc2-3',
          textAr: 'أي من العضيات التالية توجد في كل من الخلايا النباتية والخلايا الحيوانية معاً وتختص بإنتاج الطاقة ATP؟',
          textEn: 'Which organelle is shared between both plant and animal cells, specialized in ATP energy generation?',
          optionsAr: [
            'الميتوكوندريا (Mitochondria)',
            'البلاستيدات الخضراء',
            'الجدار الخلوي',
            'السنتروسوم'
          ],
          optionsEn: [
            'Mitochondria',
            'Chloroplasts',
            'Cell wall',
            'Centrosome'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وجود الميتوكوندريا في كلا نوعي الخلايا',
          conceptTestedEn: 'Mitochondrial Energy Production in Plants and Animals',
          explanationAr: 'الميتوكوندريا مسؤولة عن التنفس الخلوي وإنتاج طاقة ATP وتوجد في كل من الخلايا الحيوانية والنباتية لمساعدتها على النمو والحياة.',
          explanationEn: 'Both plant and animal cells rely on mitochondria for aerobic cellular respiration to generate ATP.',
          difficulty: 'medium'
        },
        {
          id: 'qsc2-4',
          textAr: 'وفقاً لنظرية الخلية الحديثة، من أين تنشأ الخلايا الحية الجديدة؟',
          textEn: 'According to Cell Theory, from where do new living cells originate?',
          optionsAr: [
            'تنشأ من انقسام خلايا حية سابقة لها',
            'تتولد تلقائياً من المواد غير الحية في البيئة',
            'تنشأ من تجمع ذرات المعادن في التربة',
            'تتكون من أشعة الشمس مباشرة دون خلايا سابقة'
          ],
          optionsEn: [
            'From the division of pre-existing living cells',
            'Spontaneous generation from non-living matter',
            'Aggregation of soil minerals',
            'Direct crystallization from sunlight'
          ],
          correctIndex: 0,
          conceptTestedAr: 'البند الثالث من بنود نظرية الخلية',
          conceptTestedEn: 'Third Postulate of Cell Theory',
          explanationAr: 'أثبتت نظرية الخلية (فيرشو وريداي) أن الخلايا لا تتولد ذاتياً من العدم، بل تنشأ حصرياً من انقسام خلايا حية كانت موجودة قبلها.',
          explanationEn: 'All cells arise exclusively from pre-existing cells via cellular division (Omnis cellula e cellula).',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-3',
    order: 3,
    titleAr: 'المحاضرة 3: القوى والحركة: القوة المحصلة ومفهوم السرعة والتوازن',
    titleEn: 'Lecture 3: Forces & Motion: Net Force, Velocity & Equilibrium',
    subtitleAr: 'حساب السرعة المتوسطة وتطبيقاتها، وتحليل القوى المتزنة وغير المتزنة، وقوة الاحتكاك والتسارع',
    subtitleEn: 'Master average speed calculations (v = d/t), net force vectors, balanced equilibrium, friction, and Newton\'s acceleration laws.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-2',
    prerequisiteTitleAr: 'المحاضرة 2: الخلية الحية: اللبنة الأساسية لبناء الكائنات الحية',
    prerequisiteTitleEn: 'Lecture 2: The Living Cell: Fundamental Building Block of Life',

    gradeLevelNameAr: 'الصف الأول متوسط (الصف السابع) - المرحلة المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Middle School - General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: الميكانيكا والقوى والحركة في الفيزياء',
    unitTitleEn: 'Unit 3: Mechanics, Forces & Kinematics',
    lessonNumberAr: 'الدرس 1: السرعة، والقوة المحصلة، والقوانين الفيزيائية للحركة',
    lessonNumberEn: 'Lesson 1: Speed, Net Force & Kinematic Principles',

    warmupHookAr: 'عندما تركب سيارة تسير بسرعة 120 كم/ساعة على طريق مستقيم وسلس، تشعر وكأنك جالس في غرفتك دون حركة! ولكن بمجرد أن يضغط السائق على المكابح، تندفع إلى الأمام بقوة مفاجئة. ما القوة الخفية التي أبقتك متحركاً؟ وكيف يؤثر الاحتكاك ومحصلة القوى على تحريك الأجسام أو إيقافها؟ مرحباً بك في عالم الميكانيكا الكلاسيكية التي تشرح كل حركة في الكون من حركة الإلكترونات إلى دوران الكواكب!',
    warmupHookEn: 'Why do you feel motionless in a smoothly cruising car at 120 km/h, yet lurch forward upon braking? Master kinematics, friction vectors, and net force dynamics!',

    learningOutcomesAr: [
      'أن يطبق الطالب قانون السرعة المتوسطة رياضياً (السرعة = المسافة ÷ الزمن) مع تحويل الوحدات القياسية (م/ث و كم/س)',
      'أن يحسب القوة المحصلة (Net Force) لمجموعة قوى تؤثر في اتجاه واحد أو في اتجاهين متعاكسين',
      'أن يميّز بين القوى المتزنة (محصلتها صفر وحالة سكون/سرعة ثابتة) والقوى غير المتزنة (تحدث تسارعاً وتغيراً في الحركة)',
      'أن يوضح أثر قوة الاحتكاك (Friction) في إعاقة الحركة وتوليد الحرارة وطرق تقليلها أو زيادتها'
    ],
    learningOutcomesEn: [
      'Calculate average speed (v = d / t) and perform standard metric unit conversions (m/s and km/h)',
      'Compute Net Force for collinear parallel and opposing force vectors',
      'Distinguish balanced forces (Net force = 0, state of rest or constant velocity) from unbalanced forces (acceleration)',
      'Analyze friction resistance forces, thermal dissipation, and methods of reducing/increasing friction'
    ],

    vocabulary: [
      {
        termAr: 'السرعة المتوسطة (Average Speed)',
        termEn: 'Average Speed',
        definitionAr: 'المسافة الكلية المقطوعة مقسومة على الزمن الكلي المستغرق لقطع تلك المسافة: v = d / t، وتقاس بوحدة (م/ث) أو (كم/س).',
        definitionEn: 'Total path distance divided by elapsed travel time (v = d / t), measured in m/s or km/h.'
      },
      {
        termAr: 'القوة (Force)',
        termEn: 'Force',
        definitionAr: 'سحب أو دفع يؤثر في جسم ما ويكسبه تسارعاً أو يغير من شكله أو اتجاه حركته، وتقاس بوحدة النيوتن (N).',
        definitionEn: 'A push or pull exerted on an object capable of altering its motion state, measured in Newtons (N).'
      },
      {
        termAr: 'القوة المحصلة (Net Force - F_net)',
        termEn: 'Net Force (F_net)',
        definitionAr: 'المجموع الاتجاهي لجميع القوى المؤثرة في جسم ما في لحظة معينة؛ وتحدد ما إذا كان الجسم سيتسارع أم يظل متزناً.',
        definitionEn: 'The vector sum of all concurrent forces acting on a body determining its acceleration.'
      },
      {
        termAr: 'الاحتكاك (Friction)',
        termEn: 'Friction',
        definitionAr: 'قوة مقاومة تنشأ بين أسطح الأجسام المتلامسة وتعمل دائماً في اتجاه معاكس لاتجاه الحركة.',
        definitionEn: 'A resistive contact force between sliding/rolling surfaces acting opposite to relative motion.'
      }
    ],

    keyConceptsAr: [
      'قانون السرعة: السرعة = المسافة ÷ الزمن (v = d / t)',
      'مثلث حساب السرعة والمسافة والزمن: d = v × t  |  t = d ÷ v',
      'القوى المتزنة (ΣF = 0): الجسم يظل ساكناً أو يتحرك بسرعة منتظمة ثابتة في خط مستقيم',
      'القوى غير المتزنة (ΣF ≠ 0): تحدث تغيراً في السرعة (تسارعاً أو تباطؤاً) في اتجاه القوة المحصلة',
      'قوة الاحتكاك: تعاكس اتجاه الحركة وتعتمد على طبيعة السطح والقوة الضاغطة'
    ],
    keyConceptsEn: [
      'Speed Equation: v = d / t',
      'Kinematic Triangle: d = v * t | t = d / v',
      'Balanced Forces (Net F = 0): Equilibrium, stationary state, or constant rectilinear velocity',
      'Unbalanced Forces (Net F != 0): Causes acceleration (change in speed/direction)',
      'Friction Force: Opposes motion vector and dissipates kinetic energy into heat'
    ],
    summaryAr: 'في هذه المحاضرة نتقن قوانين الحركة والقوى الفيزيائية؛ نحسب السرعة المتوسطة للأجسام المتحركة، ونحلل متجهات القوى المحصلة لنفرق بين التوازن والسكون وبين التسارع الناشئ عن القوى غير المتزنة وقوة الاحتكاك.',
    summaryEn: 'Master kinematics and Newtonian dynamics: speed calculations, net force vector arithmetic, balanced equilibrium, and friction resistance.',

    sections: [
      {
        titleAr: '1. السرعة المتوسطة ومثلث حساب الحركة',
        titleEn: '1. Average Speed & Kinematics Computation Triangle',
        contentAr: 'السرعة هي مقياس لمعدل تغير المسافة بالنسبة للزمن. تُحسب السرعة المتوسطة بقسمة المسافة على الزمن: v = d / t.\n• إذا كانت المسافة بالأمتار (m) والزمن بالثواني (s)، تكون وحدة السرعة: متر لكل ثانية (م/ث أو m/s).\n• إذا كانت المسافة بالكيلومترات (km) والزمن بالساعات (h)، تكون الوحدة: كيلومتر لكل ساعة (كم/س أو km/h).\n• للتحويل من (كم/س) إلى (م/ث): نقسم على 3.6. وللتحويل من (م/ث) إلى (كم/س): نضرب في 3.6.',
        contentEn: 'Speed measures displacement rate: v = d / t. Metric SI units are m/s and km/h. To convert km/h to m/s, divide by 3.6.',
        diagram: {
          id: 'diag-sci3-forces-motion',
          figureNumberAr: 'شكل (3-1)',
          figureNumberEn: 'Figure (3-1)',
          titleAr: 'مخطط متجهات القوى، وحساب السرعة، والقوى المتزنة',
          titleEn: 'Force Vectors, Kinematic Triangle & Dynamic Equilibrium',
          captionAr: 'يوضح الرسم متجهات القوى المؤثرة في جسم (قوة السحب للأمام، الاحتكاك للخلف، الوزن للأسفل، والقوة العمودية للأعلى)، مع مثلث حساب السرعة وقوانين القوى المتزنة وغير المتزنة.',
          captionEn: 'Free body vector diagram illustrating applied force, friction, normal force, gravity, and kinematics triangle.',
          diagramType: 'forces_motion_vector',
          takeawayFormulaAr: 'السرعة v = المسافة d ÷ الزمن t  |  القوة المحصلة F_net = F_سحب - f_احتكاك',
          takeawayFormulaEn: 'Speed v = d / t | Net Force F_net = F_applied - f_friction',
          keyLabels: [
            { tagAr: 'قوة السحب F', tagEn: 'Applied Force', color: '#10b981' },
            { tagAr: 'قوة الاحتكاك f', tagEn: 'Friction Force', color: '#f59e0b' },
            { tagAr: 'مثلث السرعة v=d/t', tagEn: 'Speed Triangle', color: '#38bdf8' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب السرعة المتوسطة لقطار فائق السرعة',
          titleEn: 'Worked Example 1: High-Speed Train Kinematics',
          equation: 'v = d / t',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: قطار الحرمين قطع مسافة d = 450 كيلومتراً بين مكة والمدينة في زمن قدره t = 2.25 ساعة (ساعتان و 15 دقيقة).',
              textEn: 'Given: Train distance d = 450 km, travel duration t = 2.25 hours.'
            },
            {
              stepNumber: 2,
              textAr: 'حساب السرعة بوحدة كم/س: v = d ÷ t = 450 ÷ 2.25 = 200 كم/س.',
              textEn: 'Speed in km/h: v = 450 / 2.25 = 200 km/h.'
            },
            {
              stepNumber: 3,
              textAr: 'تحويل السرعة إلى م/ث: 200 ÷ 3.6 = 55.56 م/ث (أي يقطع 55.5 متراً في كل ثانية واحدة!).',
              textEn: 'Conversion to m/s: 200 / 3.6 = 55.56 m/s.'
            }
          ],
          takeawayAr: 'السرعة تعبر عن المعدل الزمني لقطع المسافات، ويمكن إيجاد أي متغير إذا علم المتغيران الآخران في مثلث الحركة.',
          takeawayEn: 'Kinematic triangle allows solving for distance, rate, or duration given two known variables.'
        },
        formativeCheck: {
          id: 'fc-sci3-1',
          questionAr: 'عداء يركض بسرعة متوسطة مقدارها 8 م/ث. كم ثانية يستغرق لقطع مسافة 400 متر؟',
          questionEn: 'A runner sprints at 8 m/s. How many seconds does it take to cover 400 meters?',
          optionsAr: ['50 ثانية', '3200 ثانية', '408 ثوانٍ', '25 ثانية'],
          optionsEn: ['50 seconds', '3200 seconds', '408 seconds', '25 seconds'],
          correctIndex: 0,
          explanationAr: 'من مثلث السرعة: الزمن t = المسافة d ÷ السرعة v = 400 ÷ 8 = 50 ثانية.',
          explanationEn: 'Time t = distance / speed = 400 / 8 = 50 seconds.',
          hintAr: 'اقسم المسافة على السرعة لإيجاد الزمن.'
        },
        tipsAr: [
          'احذر من جمع أو قسمة وحدات غير متطابقة (مثل قسمة الكيلومترات على الثواني دون تحويل).',
          'السرعة اللحظية هي قراءة عداد السرعة في لحظة معينة، بينما السرعة المتوسطة تحسب على كامل الرحلة.'
        ]
      },
      {
        titleAr: '2. القوة المحصلة والقوى المتزنة وغير المتزنة والاحتكاك',
        titleEn: '2. Net Force, Equilibrium, Acceleration & Friction Dynamics',
        contentAr: 'عندما تؤثر عدة قوى على جسم:\n1. قوى في نفس الاتجاه: نجمع مقاديرها (F_net = F₁ + F₂).\n2. قوى في اتجاهين متعاكسين: نطرح القوة الصغرى من الكبرى وتكون المحصلة في اتجاه القوة الكبرى (F_net = F₁ - F₂).\n\n• القوى المتزنة (Balanced Forces): إذا كانت القوة المحصلة تساوي صفراً (F_net = 0)، تسمى القوى متزنة؛ والجسم في هذه الحالة إما أن يظل ساكناً في مكانه أو يستمر في حركته بسرعة ثابتة في خط مستقيم.\n• القوى غير المتزنة (Unbalanced Forces): إذا كانت القوة المحصلة لا تساوي صفراً (F_net ≠ 0)، فإنها تُحدث تسارعاً في الجسم (يزيد من سرعته، يبطئه، أو يغير اتجاه حركته).\n• قوة الاحتكاك: قوة تعاكس الحركة تنشأ من خشونة الأسطح؛ تفيدنا في المشي وفرملة السيارات ولكنها تهدر طاقة على شكل حرارة.',
        contentEn: 'Net force is the vector sum of applied forces. When Net Force = 0 (balanced), velocity is constant. When Net Force != 0 (unbalanced), acceleration occurs. Friction opposes motion vector.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: حساب القوة المحصلة في لعبة شد الحبل وصندوق منزلق',
          titleEn: 'Worked Example 2: Net Force Vector Resolution',
          equation: 'F_net = F_يمين - F_يسار',
          steps: [
            {
              stepNumber: 1,
              textAr: 'صندوق يُسحب بقوة 80 نيوتن جهة اليمين، وتؤثر عليه قوة احتكاك مقدارها 30 نيوتن جهة اليسار.',
              textEn: 'Box pulled right with 80 N, opposing friction is 30 N left.'
            },
            {
              stepNumber: 2,
              textAr: 'حساب القوة المحصلة: بما أن القوتين متعاكستان: F_net = 80 - 30 = 50 نيوتن باتجاه اليمين.',
              textEn: 'Net Force: 80 - 30 = 50 N directed right.'
            },
            {
              stepNumber: 3,
              textAr: 'الاستنتاج: القوى غير متزنة (المحصلة > 0)؛ لذا سيتسارع الصندوق ويتحرك متجهاً إلى اليمين.',
              textEn: 'Conclusion: Unbalanced forces cause box to accelerate rightwards.'
            }
          ],
          takeawayAr: 'تسارع الأجسام واتجاه حركتها يحددهما دائماً مقدار واتجاه القوة المحصلة الإجمالية.',
          takeawayEn: 'The magnitude and orientation of the Net Force vector uniquely determines kinematics acceleration.'
        },
        tipsAr: ['لتقليل الاحتكاك نستخدم التزييت والتشحيم واستخدام العجلات وكراسي التحميل (رولمان بلي).']
      }
    ],

    conceptMapSummaryAr: 'السرعة: المسافة ÷ الزمن (v = d / t). القوة المحصلة: جمع في نفس الاتجاه وطرح في الاتجاه المعاكس. قوى متزنة (المحصلة = 0 -> سكون أو سرعة ثابتة). قوى غير متزنة (المحصلة ≠ 0 -> تسارع وتغير حركة). الاحتكاك: يعاكس الحركة ويولد حرارة.',
    conceptMapSummaryEn: 'Speed: v = d / t. Net Force: additive when parallel, subtractive when opposing. Balanced (F_net = 0 -> rest/constant v). Unbalanced (F_net != 0 -> acceleration). Friction: opposes motion.',

    goldenRulesAr: [
      'القاعدة 1: السرعة المتوسطة تساوي حاصل قسمة المسافة الكلية على الزمن الكلي: v = d ÷ t.',
      'القاعدة 2: للتحويل من كم/س إلى م/ث نقسم على 3.6، وللتحويل من م/ث إلى كم/س نضرب في 3.6.',
      'القاعدة 3: القوة المحصلة لقوتين في نفس الاتجاه تساوي مجموعهما: F_net = F₁ + F₂.',
      'القاعدة 4: القوة المحصلة لقوتين متعاكستين تساوي الفرق بينهما باتجاه القوة الكبرى: F_net = F_كبيرة - F_صغيرة.',
      'القاعدة 5: عندما تكون القوى متزنة (F_net = 0) يظل الجسم الساكن ساكناً والمتحرك يستمر بسرعة ثابتة.',
      'القاعدة 6: القوى غير المتزنة (F_net ≠ 0) هي الوحيدة القادرة على إحداث تسارع وتغيير حالة الحركة.',
      'القاعدة 7: قوة الاحتكاك تعمل دائماً في اتجاه معاكس تماماً لاتجاه حركة الجسم المتلامس.'
    ],
    goldenRulesEn: [
      'Rule 1: Average speed equals total distance divided by elapsed time: v = d / t.',
      'Rule 2: Convert km/h to m/s by dividing by 3.6; convert m/s to km/h by multiplying by 3.6.',
      'Rule 3: Net Force for co-directional forces is their scalar sum: F_net = F1 + F2.',
      'Rule 4: Net Force for opposing forces is their difference directed towards the larger magnitude.',
      'Rule 5: Balanced forces (Net F = 0) maintain equilibrium: resting bodies remain still, moving bodies sustain constant velocity.',
      'Rule 6: Unbalanced forces (Net F != 0) produce acceleration, altering speed or direction.',
      'Rule 7: Friction forces strictly oppose the relative velocity vector of contact surfaces.'
    ],

    textbookExercises: [
      {
        id: 'ex-sci-3-1',
        questionAr: 'سيارة تسير بسرعة منتظمة مقدارها 25 م/ث. 1) احسب المسافة التي تقطعها خلال 40 ثانية. 2) عبر عن سرعة السيارة بوحدة (كم/ساعة).',
        questionEn: 'A car travels at constant speed 25 m/s. 1) Find distance covered in 40s. 2) Convert speed to km/h.',
        solutionStepsAr: [
          '1. حساب المسافة: المسافة d = السرعة v × الزمن t = 25 × 40 = 1000 متر (أي 1 كيلومتر).',
          '2. تحويل السرعة إلى كم/س: السرعة بوحدة كم/س = 25 × 3.6 = 90 كم/ساعة.'
        ],
        solutionStepsEn: [
          '1. Distance d = v * t = 25 * 40 = 1000 meters (1 km).',
          '2. Speed in km/h = 25 * 3.6 = 90 km/h.'
        ],
        answerAr: 'المسافة المقطوعة = 1000 متر • سرعة السيارة = 90 كم/ساعة.',
        answerEn: 'Distance = 1000 meters • Speed = 90 km/h.'
      },
      {
        id: 'ex-sci-3-2',
        questionAr: 'يقوم شخصان بدفع خزانة كتب: الأول يدفع بقوة 70 نيوتن نحو الشرق، والثاني يدفع بقوة 50 نيوتن نحو الشرق أيضاً، بينما قوة الاحتكاك مع الأرض 40 نيوتن نحو الغرب. 1) احسب القوة المحصلة المؤثرة في الخزانة. 2) حدد اتجاه حركتها وهل القوى متزنة أم غير متزنة؟',
        questionEn: 'Two people push a bookcase: Person 1 applies 70N East, Person 2 applies 50N East, friction is 40N West. 1) Find Net Force. 2) State motion state.',
        solutionStepsAr: [
          '1. مجموع قوى الدفع شرقاً: 70 + 50 = 120 نيوتن شرقاً.',
          '2. قوة الاحتكاك المعاكسة: 40 نيوتن غرباً.',
          '3. القوة المحصلة: F_net = 120 - 40 = 80 نيوتن باتجاه الشرق.',
          '4. حالة القوى: قوى غير متزنة (المحصلة = 80 N)، وتتحرك الخزانة بتسارع نحو الشرق.'
        ],
        solutionStepsEn: [
          '1. Total applied force East = 70 + 50 = 120 N East.',
          '2. Opposing friction = 40 N West.',
          '3. Net Force = 120 - 40 = 80 N East.',
          '4. State: Unbalanced forces causing eastward acceleration.'
        ],
        answerAr: 'القوة المحصلة = 80 نيوتن باتجاه الشرق • القوى غير متزنة وتتحرك الخزانة شرقاً.',
        answerEn: 'Net Force = 80 N East • Unbalanced forces accelerating eastward.'
      }
    ],

    assessment: {
      id: 'quiz-sci-3',
      lectureId: 'sci-3',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 3: القوى والحركة والسرعة والتوازن',
      titleEn: 'Mastery Assessment 3: Forces, Motion & Velocity Equilibrium',
      passingScore: 80,
      questions: [
        {
          id: 'qsc3-1',
          textAr: 'إذا قطعت حافلة مسافة 180 كيلومتراً في زمن قدره 3 ساعات، فما هي سرعتها المتوسطة؟',
          textEn: 'If a bus covers 180 km in 3 hours, what is its average speed?',
          optionsAr: ['60 كم/س', '540 كم/س', '177 كم/س', '20 كم/س'],
          optionsEn: ['60 km/h', '540 km/h', '177 km/h', '20 km/h'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون السرعة المتوسطة',
          conceptTestedEn: 'Average Speed Calculation',
          explanationAr: 'السرعة v = المسافة d ÷ الزمن t = 180 ÷ 3 = 60 كم/س.',
          explanationEn: 'Speed = 180 km / 3 h = 60 km/h.',
          difficulty: 'easy'
        },
        {
          id: 'qsc3-2',
          textAr: 'عندما تؤثر قوتان متساويتان في المقدار ومتعاكستان في الاتجاه على جسم ما، فإن القوة المحصلة تكون:',
          textEn: 'When two equal and opposite forces act on an object, the Net Force is:',
          optionsAr: [
            'تساوي صفراً (قوى متزنة ولا يتغير تسارع الجسم)',
            'تساوي ضعف مقدار إحدى القوتين',
            'تكون موجبة دائماً وتسبب تسارعاً سريعاً',
            'تساوي حاصل ضرب القوتين'
          ],
          optionsEn: [
            'Zero (balanced forces, acceleration remains zero)',
            'Double the single force',
            'Always positive causing rapid acceleration',
            'Product of the two forces'
          ],
          correctIndex: 0,
          conceptTestedAr: 'محصلة القوى المتزنة المتعاكسة',
          conceptTestedEn: 'Balanced Opposing Forces Equilibrium',
          explanationAr: 'القوتان المتساويتان والمتعاكستان تلغي كل منهما الأخرى فتكون المحصلة F_net = F - F = 0 (قوى متزنة).',
          explanationEn: 'Equal and opposite collinear forces cancel out completely yielding F_net = 0.',
          difficulty: 'easy'
        },
        {
          id: 'qsc3-3',
          textAr: 'جسم كتلته تتحرك على سطح أفقي؛ ما هو اتجاه قوة الاحتكاك المؤثرة عليه؟',
          textEn: 'An object slides horizontally; in which direction does friction act?',
          optionsAr: [
            'دائماً في اتجاه معاكس لاتجاه حركة الجسم',
            'في نفس اتجاه حركة الجسم لزيادة سرعته',
            'عمودياً للأعلى في اتجاه السماء',
            'عمودياً للأسفل في اتجاه مركز الأرض'
          ],
          optionsEn: [
            'Always opposite to the object\'s velocity vector',
            'In the same direction to boost speed',
            'Vertically upward',
            'Vertically downward'
          ],
          correctIndex: 0,
          conceptTestedAr: 'اتجاه قوة الاحتكاك المقاومة للحركة',
          conceptTestedEn: 'Friction Directional Opposition',
          explanationAr: 'قوة الاحتكاك تنشأ عند تلامس السطوح وتعمل دائماً في الاتجاه المعاكس لاتجاه انزلاق أو حركة الجسم لتقاوم الحركة.',
          explanationEn: 'Friction is a resistive contact force acting strictly opposite to relative motion.',
          difficulty: 'easy'
        },
        {
          id: 'qsc3-4',
          textAr: 'سيارة تسير بسرعة 90 كم/ساعة؛ ما مقدار هذه السرعة بوحدة متر لكل ثانية (م/ث)؟',
          textEn: 'A car moves at 90 km/h; what is this speed in m/s?',
          optionsAr: ['25 م/ث', '324 م/ث', '90 م/ث', '15 م/ث'],
          optionsEn: ['25 m/s', '324 m/s', '90 m/s', '15 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل القياسي بين كم/س و م/ث',
          conceptTestedEn: 'Metric Speed Unit Conversion',
          explanationAr: 'للتحويل من كم/س إلى م/ث نقسم على 3.6: السرعة = 90 ÷ 3.6 = 25 م/ث.',
          explanationEn: '90 km/h divided by 3.6 = 25 m/s.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'sci-4',
    order: 4,
    titleAr: 'المحاضرة 4: أشكال الطاقة وتحولاتها وقانون حفظ الطاقة الأساسي',
    titleEn: 'Lecture 4: Energy Forms, Conversions & Conservation Laws',
    subtitleAr: 'استكشاف طاقة الحركة والوضع، وتتبع سلاسل تحولات الطاقة في الحياة اليومية، وقانون حفظ الطاقة الميكانيكية والكيميائية',
    subtitleEn: 'Master kinetic energy (E_k = 1/2 m v^2), potential energy (E_p = m g h), transformation chains, and the Universal Law of Conservation of Energy.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-3',
    prerequisiteTitleAr: 'المحاضرة 3: القوى والحركة: القوة المحصلة ومفهوم السرعة والتوازن',
    prerequisiteTitleEn: 'Lecture 3: Forces & Motion: Net Force, Velocity & Equilibrium',

    gradeLevelNameAr: 'الصف الأول متوسط (الصف السابع) - المرحلة المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Middle School - General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الرابعة: الطاقة وتحولاتها وقوانين حفظها في الكون',
    unitTitleEn: 'Unit 4: Energy Thermodynamics & Conservation Laws',
    lessonNumberAr: 'الدرس 1: أشكال الطاقة، السلاسل التحويلية، وقانون حفظ الطاقة',
    lessonNumberEn: 'Lesson 1: Energy Forms, Conversion Chains & Conservation',

    warmupHookAr: 'تأمل فنجان القهوة الساخن، أو هاتفك الذكي الذي يعمل لساعات، أو سيارة تسير بسرعة فائقة: كل هذه الظواهر يقودها عامل واحد مشترك وهو "الطاقة"! عندما تأكل تفاحة، تتحول طاقتها الكيميائية المخزونة إلى طاقة حركية في عضلاتك وطاقة حرارية تدفئ جسمك. هل يمكن أن تختفي الطاقة أو تفنى تماماً؟ الإجابة القاطعة في علم الفيزياء هي: لا! فالطاقة لا تفنى ولا تُستحدث، بل تتنكر في أشكال وصور لا حصر لها!',
    warmupHookEn: 'Energy is the universal currency of the cosmos. From dietary calories powering muscle kinematics to solar panels charging batteries, discover how energy transitions between kinetic and potential forms without a single joule lost!',

    learningOutcomesAr: [
      'أن يعرّف الطالب الطاقة ويصنف أشكالها الرئيسية (حركية، وضع جاذبية، كيميائية، حرارية، كهربائية، إشعاعية)',
      'أن يربط بين طاقة الحركة وسرعة وكتلة الجسم، وبين طاقة الوضع وارتفاع الجسم عن الأرض',
      'أن يتتبع سلاسل تحولات الطاقة في الأجهزة اليومية (المصباح، المروحة، المحرك، الألواح الشمسية)',
      'أن يطبق قانون حفظ الطاقة ويفسر تبادل طاقتي الوضع والحركة في البندول والسقوط الحر'
    ],
    learningOutcomesEn: [
      'Define energy and categorize primary forms (Kinetic, Gravitational Potential, Chemical, Thermal, Electrical, Radiant)',
      'Correlate kinetic energy with mass and velocity, and potential energy with elevation',
      'Trace energy transformation chains across everyday technologies (lamps, fans, motors, solar panels)',
      'Apply the Law of Conservation of Energy to mechanical systems (pendulums, roller coasters, free-fall)'
    ],

    vocabulary: [
      {
        termAr: 'الطاقة (Energy)',
        termEn: 'Energy',
        definitionAr: 'القدرة على إحداث تغيير أو بذل شغل فيزيائي، وتقاس بوحدة الجول (Joule - J).',
        definitionEn: 'The capacity to perform work or effect physical change, measured in Joules (J).'
      },
      {
        termAr: 'الطاقة الحركية (Kinetic Energy - E_k)',
        termEn: 'Kinetic Energy (E_k)',
        definitionAr: 'الطاقة التي يمتلكها الجسم بسبب حركته وسرعته؛ وتزداد بزيادة كتلة الجسم ومربع سرعته: E_k = ½ m v².',
        definitionEn: 'Energy possessed by an object due to motion: E_k = 1/2 m v^2.'
      },
      {
        termAr: 'طاقة الوضع الكامنة (Potential Energy - E_p)',
        termEn: 'Potential Energy (E_p)',
        definitionAr: 'طاقة مخزونة في الجسم بفعل موضعه وارتفاعه عن سطح الأرض ضد الجاذبية: E_p = m · g · h.',
        definitionEn: 'Energy stored within a system by virtue of positional elevation: E_p = m * g * h.'
      },
      {
        termAr: 'قانون حفظ الطاقة (Law of Conservation of Energy)',
        termEn: 'Conservation of Energy',
        definitionAr: 'قانون فيزيائي كوني ينص على أن الطاقة لا تفنى ولا تُستحدث من العدم، وإنما تتحول فقط من شكل إلى شكل آخر.',
        definitionEn: 'Universal thermodynamic principle stating energy cannot be created or destroyed, only transformed.'
      }
    ],

    keyConceptsAr: [
      'مفهوم الطاقة ووحدة قياسها (الجول J)',
      'الطاقة الحركية: تزداد بزيادة الكتلة والسرعة (E_k = ½ m v²)',
      'طاقة الوضع الجاذبية: تزداد بزيادة الارتفاع والكتلة (E_p = m g h)',
      'التبادل الميكانيكي: طاقة الوضع في القمة تتحول بالكامل إلى طاقة حركة في القاع',
      'سلاسل تحول الطاقة: شمسية -> كيميائية -> ميكانيكية -> كهربائية/حرارية',
      'قانون حفظ الطاقة: الطاقة الكلية في النظام المغلق ثابتة دائماً'
    ],
    keyConceptsEn: [
      'Energy Concept & SI Metric Unit (Joule J)',
      'Kinetic Energy dependent on mass and speed squared',
      'Gravitational Potential Energy proportional to elevation height',
      'Mechanical Exchange: Potential energy at peak converts to kinetic at bottom',
      'Transformation Chains: Solar -> Chemical -> Mechanical -> Electrical/Thermal',
      'Conservation Law: Total System Energy = Constant'
    ],
    summaryAr: 'المحاضرة الختامية لمسار العلوم العامة؛ نستكشف فيها أشكال الطاقة وطاقتي الوضع والحركة، ونتتبع سلاسل تحولات الطاقة المذهلة في حياتنا اليومية، ونرسخ القانون الفيزيائي الخالد: قانون حفظ الطاقة الكلي.',
    summaryEn: 'Capstone General Science lecture: exploring kinetic and potential energy reservoirs, tracing multi-step conversion chains, and cementing the universal Law of Conservation of Energy.',

    sections: [
      {
        titleAr: '1. أشكال الطاقة وسلاسل التحولات اليومية',
        titleEn: '1. Energy Forms & Everyday Conversion Chains',
        contentAr: 'تتخذ الطاقة في الكون أشكالاً وصوراً متعددة تتفاعل وتتحول باستمرار:\n1. الطاقة الحركية: طاقة الأجسام المتحركة كالسيارات والرياح.\n2. طاقة الوضع الكامنة: طاقة مخزونة كطاقة الجاذبية عند رفع صخرة لأعلى، أو الطاقة الكامنة في زنبرك مشدود.\n3. الطاقة الكيميائية: طاقة مخزونة في الروابط الكيميائية للغذاء والوقود والبطاريات.\n4. الطاقة الكهربائية والضوئية والحرارية: طاقات ناتجة عن حركة الشحنات والأمواج الكهرومغناطيسية واهتزاز الجزيئات.\n\nتتحول الطاقة عبر سلاسل متصلة: فالشمس تمد النبات بطاقة ضوئية يحولها لبناء ضوئي وطاقة كيميائية، وعندما يتغذى الإنسان تتحول لحركة وحرارة.',
        contentEn: 'Energy manifests as kinetic, gravitational potential, chemical, electrical, thermal, and radiant forms, dynamically converting across interconnected natural and engineered chains.',
        diagram: {
          id: 'diag-sci4-energy-chains',
          figureNumberAr: 'شكل (4-1)',
          figureNumberEn: 'Figure (4-1)',
          titleAr: 'سلاسل تحولات الطاقة وقانون حفظ الطاقة الكلي',
          titleEn: 'Energy Transformation Chains & Universal Conservation Law',
          captionAr: 'مخطط يوضح تسلسل تحولات الطاقة من الإشعاع الشمسي إلى الطاقة الكيميائية في الغذاء والحركية في العضلات والمخرجات الكهربائية والحرارية، مع بيان تبادل طاقتي الوضع والحركة في البندول وقانون حفظ الطاقة.',
          captionEn: 'Comprehensive thermodynamic schema tracing solar radiation to chemical and kinetic energy, along with pendulum mechanical energy conservation.',
          diagramType: 'energy_transformation_chain',
          takeawayFormulaAr: 'الطاقة الكلية = طاقة الوضع + طاقة الحركة = مقدار ثابت دائماً (الطاقة لا تفنى ولا تستحدث)',
          takeawayFormulaEn: 'Total Mechanical Energy = E_potential + E_kinetic = Constant',
          keyLabels: [
            { tagAr: 'طاقة وضع E_p', tagEn: 'Potential Energy', color: '#eab308' },
            { tagAr: 'طاقة حركة E_k', tagEn: 'Kinetic Energy', color: '#38bdf8' },
            { tagAr: 'قانون حفظ الطاقة', tagEn: 'Energy Conservation', color: '#10b981' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: تتبع سلاسل تحولات الطاقة في محطة كهرومائية',
          titleEn: 'Worked Example 1: Hydroelectric Power Energy Chain',
          equation: 'طاقة وضع مائية -> طاقة حركة توربين -> طاقة كهربائية',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الماء المحتجز خلف السد على ارتفاع شاهق يمتلك طاقة وضع جاذبية هائلة (E_p = m·g·h).',
              textEn: 'Water impounded behind elevated dam holds massive gravitational potential energy.'
            },
            {
              stepNumber: 2,
              textAr: 'عند فتح البوابات وتدفق الماء بقوة، تتحول طاقة الوضع إلى طاقة حركة مائية سريعة تدير زعانف التوربينات الضخمة.',
              textEn: 'Released water converts potential energy into kinetic energy spinning heavy turbines.'
            },
            {
              stepNumber: 3,
              textAr: 'يقوم المولد الكهربائي بتحويل الطاقة الحركية للتوربينات إلى طاقة كهربائية تنقل عبر الأسلاك للمنازل والمدن.',
              textEn: 'Generators convert rotational kinetic energy into electrical energy grid output.'
            }
          ],
          takeawayAr: 'في كل خطوة تتحول الطاقة من صورة لأخرى مع انبعاث نسبة بسيطة من الطاقة الحرارية المهدورة بفعل الاحتكاك، والمجموع الكلي ثابت.',
          takeawayEn: 'Energy transitions between forms while total system energy remains precisely conserved.'
        },
        formativeCheck: {
          id: 'fc-sci4-1',
          questionAr: 'ما هي تحولات الطاقة الأساسية التي تحدث عند إضاءة مصباح كهربائي موصول ببطارية جافة؟',
          questionEn: 'What are the energy transformations in a battery-powered flashlight?',
          optionsAr: [
            'من طاقة كيميائية (في البطارية) إلى طاقة كهربائية ثم إلى طاقة ضوئية وحرارية',
            'من طاقة نووية إلى طاقة حركية',
            'من طاقة ضوئية إلى طاقة وضع',
            'من طاقة صوتية إلى طاقة كيميائية'
          ],
          optionsEn: [
            'Chemical (battery) -> Electrical -> Light and Thermal energy',
            'Nuclear -> Kinetic',
            'Light -> Potential',
            'Sound -> Chemical'
          ],
          correctIndex: 0,
          explanationAr: 'البطارية تختزن طاقة كيميائية تتحول لتيار كهربائي، وعند مروره في سلك المصباح يتوهج منتجاً طاقة ضوئية وحرارة.',
          explanationEn: 'Chemical potential stored in the battery yields electric current which illuminates the filament releasing light and heat.',
          hintAr: 'فكر في نوع الطاقة المخزونة داخل البطارية أولاً.'
        },
        tipsAr: [
          'الحرارة هي أكثر صور الطاقة المهدورة شيوعاً في معظم تحولات الطاقة غير المثالية.',
          'كفاءة الجهاز تقاس بنسبة الطاقة المفيدة الناتجة مقارنة بإجمالي الطاقة المدخلة.'
        ]
      },
      {
        titleAr: '2. التبادل الميكانيكي وقانون حفظ الطاقة',
        titleEn: '2. Mechanical Energy Exchange & Universal Conservation Law',
        contentAr: 'الطاقة الميكانيكية لجسم هي مجموع طاقتي الوضع والحركة: E_total = E_p + E_k.\n\nتأمل حركة البندول أو عربة قطار الملاهي (الأفعوانية):\n1. عند أقصى ارتفاع (القمة): يتوقف الجسم لحظياً، فتكون طاقة الوضع في أقصى قيمة لها (E_p = Max)، بينما تكون طاقة الحركة صفراً (E_k = 0).\n2. أثناء السقوط والهبوط: تنقص طاقة الوضع تدريجياً وتتحول بنفس المقدار تماماً إلى طاقة حركة.\n3. عند أدنى نقطة (القاع): تكون طاقة الحركة في أقصى قيمة لها (E_k = Max) وتكون السرعة قصوى، بينما طاقة الوضع أقل ما يمكن.\n\nينص قانون حفظ الطاقة على: "الطاقة لا تفنى ولا تُستحدث من العدم، وإنما تتحول من شكل إلى آخر". هذا يعني أن الطاقة الإجمالية للكون ثابتة لا تزيد ولا تنقص بمقدار ذرة واحدة!',
        contentEn: 'Mechanical energy is conserved: E_mech = E_p + E_k. At maximum height, E_p is maximized and E_k is 0. At the lowest point, E_k is maximized. The Universal Law of Conservation of Energy states energy is neither created nor destroyed.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: حساب الطاقة الميكانيكية لكرة تسقط سقوطاً حراً',
          titleEn: 'Worked Example 2: Mechanical Energy Conservation in Free-Fall',
          equation: 'E_total = E_p + E_k = ثابت',
          steps: [
            {
              stepNumber: 1,
              textAr: 'كرة كتلتها 2 كجم على ارتفاع 10 أمتار تمتلك طاقة وضع: E_p = 2 × 9.8 × 10 = 196 جول، وسرعتها صفر (E_k = 0). الطاقة الكلية = 196 جول.',
              textEn: 'Ball (2kg) at 10m holds E_p = 2 * 9.8 * 10 = 196 J, E_k = 0. Total Energy = 196 J.'
            },
            {
              stepNumber: 2,
              textAr: 'عندما تسقط وتصل إلى منتصف المسافة (ارتفاع 5 أمتار): تصبح طاقة الوضع = 98 جول، وتكون طاقة الحركة قد أصبحت 98 جول. المجموع = 196 جول.',
              textEn: 'At mid-height (5m): E_p = 98 J, E_k = 98 J. Total Energy = 196 J.'
            },
            {
              stepNumber: 3,
              textAr: 'لحظة الاصطدام بالأرض (ارتفاع 0): تصبح طاقة الوضع = 0 جول، وتتحول كل الطاقة إلى طاقة حركة: E_k = 196 جول. المجموع = 196 جول دائماً!',
              textEn: 'At ground impact (0m): E_p = 0 J, E_k = 196 J. Total Energy = 196 J.'
            }
          ],
          takeawayAr: 'النقصان في طاقة الوضع يقابله دائماً زيادة مساوية تماماً في طاقة الحركة وفق قانون حفظ الطاقة.',
          takeawayEn: 'Potential energy loss strictly equals kinetic energy gain in conservative mechanical systems.'
        },
        tipsAr: ['في الحياة الواقعية يتحول جزء يسير من الطاقة الميكانيكية إلى حرارة وصوت بفعل مقاومة الهواء.']
      }
    ],

    conceptMapSummaryAr: 'الطاقة: القدرة على بذل شغل (بالجول). أشكالها: حركية (E_k)، وضع (E_p)، كيميائية، كهربائية، حرارية، ضوئية. تبادل الطاقة الميكانيكية: E_total = E_p + E_k = ثابت. قانون حفظ الطاقة: الطاقة لا تفنى ولا تستحدث من العدم بل تتحول من شكل إلى آخر.',
    conceptMapSummaryEn: 'Energy: Capacity to do work (Joules). Forms: Kinetic (E_k), Potential (E_p), Chemical, Electrical, Thermal, Radiant. Mechanical conservation: E_total = E_p + E_k = Constant. Conservation Law: Energy is neither created nor destroyed.',

    goldenRulesAr: [
      'القاعدة 1: الطاقة هي المقدرة على إحداث تغيير أو إنجاز شغل فيزيائي وتقاس بوحدة الجول (J).',
      'القاعدة 2: الطاقة الحركية تعتمد طردياً على كتلة الجسم ومربع سرعته: E_k = ½ m v².',
      'القاعدة 3: طاقة الوضع الجاذبية تعتمد طردياً على كتلة الجسم وارتفاعه عن سطح الأرض: E_p = m · g · h.',
      'القاعدة 4: عند أقصى ارتفاع تكون طاقة الوضع قصوى وطاقة الحركة صفراً، وعند أدنى نقطة تكون طاقة الحركة قصوى.',
      'القاعدة 5: الطاقة الميكانيكية الكلية لجسم تساوي مجموع طاقتي الوضع والحركة: E_mech = E_p + E_k.',
      'القاعدة 6: قانون حفظ الطاقة: "الطاقة لا تفنى ولا تُستحدث من العدم، بل تتحول من صورة إلى أخرى".',
      'القاعدة 7: الحرارة الناتجة عن الاحتكاك هي أشهر صور الطاقة المهدورة في الآلات والأجهزة.'
    ],
    goldenRulesEn: [
      'Rule 1: Energy is the capacity to do work or effect change, quantified in Joules (J).',
      'Rule 2: Kinetic energy scales with mass and velocity squared: E_k = 1/2 m v^2.',
      'Rule 3: Gravitational potential energy scales with mass and elevation: E_p = m * g * h.',
      'Rule 4: At maximum elevation, potential energy peaks and kinetic energy is zero; at minimum elevation, kinetic energy peaks.',
      'Rule 5: Total mechanical energy equals the sum of potential and kinetic energy: E_total = E_p + E_k.',
      'Rule 6: Conservation Law: Energy is neither created nor destroyed, only transformed between forms.',
      'Rule 7: Thermal dissipation from friction represents the ubiquitous waste output in non-ideal devices.'
    ],

    textbookExercises: [
      {
        id: 'ex-sci-4-1',
        questionAr: 'بندول بسيط كتلته 0.5 كجم تم سحبه لأعلى بحيث اكتسب طاقة وضع مقدارها 20 جول ثم تُرك ليتأرجح بحرية. 1) ما مقدار طاقة حركته عند أعلى نقطة؟ 2) ما مقدار طاقة حركته وطاقة وضعه عند مروره بأدنى نقطة في مساره؟',
        questionEn: 'A simple pendulum (0.5 kg) is elevated gaining 20 J potential energy and released. 1) Find kinetic energy at peak. 2) Find kinetic and potential energy at lowest point.',
        solutionStepsAr: [
          '1. عند أعلى نقطة: يتوقف البندول لحظياً لعكس اتجاه حركته، فتكون سرعته صفراً، وبالتالي طاقة حركته E_k = 0 جول.',
          '2. عند أدنى نقطة (القاع): تنعدم طاقة الوضع (E_p = 0 جول) وتتحول كامل طاقة الوضع الابتدائية إلى طاقة حركة وفق قانون حفظ الطاقة، فتكون طاقة الحركة E_k = 20 جول.'
        ],
        solutionStepsEn: [
          '1. At highest point: velocity is zero, so Kinetic Energy E_k = 0 J.',
          '2. At lowest point: elevation is minimum (E_p = 0 J) and potential energy converts fully to Kinetic Energy E_k = 20 J.'
        ],
        answerAr: '1) عند أعلى نقطة: طاقة الحركة = 0 جول | 2) عند أدنى نقطة: طاقة الحركة = 20 جول، وطاقة الوضع = 0 جول.',
        answerEn: '1) At peak: E_k = 0 J | 2) At bottom: E_k = 20 J, E_p = 0 J.'
      },
      {
        id: 'ex-sci-4-2',
        questionAr: 'تتبع تحولات الطاقة في سيارة تعمل بالبنزين بدءاً من خزان الوقود وحتى حركة عجلات السيارة وإضاءة مصابيحها.',
        questionEn: 'Trace energy conversions in a gasoline automobile from fuel tank to wheel motion and headlamps.',
        solutionStepsAr: [
          '1. في خزان الوقود: يختزن البنزين طاقة كيميائية كامنة في روابطه الجزيئية.',
          '2. في المحرك (الاحتراق): تتحول الطاقة الكيميائية إلى طاقة حرارية هائلة ترفع ضغط الغازات داخل الأسطوانات.',
          '3. في المكابس والعجلات: يدفع تمدد الغازات المكابس لتحويل الطاقة الحرارية إلى طاقة حركية ميكانيكية تدير العجلات.',
          '4. في الدينامو (المولد): يتحول جزء من الطاقة الحركية إلى طاقة كهربائية تشحن البطارية وتضيء مصابيح السيارة (طاقة ضوئية).'
        ],
        solutionStepsEn: [
          '1. Fuel tank: Chemical potential energy in gasoline hydrocarbon bonds.',
          '2. Engine cylinders: Combustion converts chemical energy to high-pressure thermal energy.',
          '3. Pistons and wheels: Gas expansion converts thermal to mechanical kinetic rotation.',
          '4. Alternator and lights: Part of kinetic rotation converts to electrical and radiant light energy.'
        ],
        answerAr: 'طاقة كيميائية (بنزين) -> طاقة حرارية (احتراق) -> طاقة حركية (عجلات) -> طاقة كهربائية وضوئية (مصابيح).',
        answerEn: 'Chemical (gasoline) -> Thermal (combustion) -> Mechanical kinetic (wheels) -> Electrical & Light (lamps).'
      }
    ],

    assessment: {
      id: 'quiz-sci-4',
      lectureId: 'sci-4',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 4: أشكال الطاقة وتحولاتها وقانون حفظ الطاقة',
      titleEn: 'Mastery Assessment 4: Energy Forms & Universal Conservation Laws',
      passingScore: 80,
      questions: [
        {
          id: 'qsc4-1',
          textAr: 'ما هو نص "قانون حفظ الطاقة" الأساسي في الفيزياء؟',
          textEn: 'What is the fundamental postulate of the Law of Conservation of Energy?',
          optionsAr: [
            'الطاقة لا تفنى ولا تُستحدث من العدم، وإنما تتحول من شكل إلى آخر',
            'الطاقة الحركية تفنى دائماً عند التوقف ولا تترك أي أثر',
            'يمكن تصنيع طاقة جديدة من لا شيء في الآلات الحديثة',
            'الطاقة الكلية للكون تتناقص باستمرار مع مرور الوقت'
          ],
          optionsEn: [
            'Energy is neither created nor destroyed, only transformed between forms',
            'Kinetic energy vanishes permanently without trace upon stopping',
            'New energy can be created from nothing in modern engines',
            'Total cosmic energy continually diminishes over time'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نص قانون حفظ الطاقة الكوني',
          conceptTestedEn: 'Universal Law of Energy Conservation',
          explanationAr: 'ينص قانون حفظ الطاقة على أن الطاقة الإجمالية في أي نظام معزول تظل ثابتة ومحفوظة، ولا يمكن إفناؤها أو خلقها من العدم بل تتحول فقط من صورة لأخرى.',
          explanationEn: 'The first law of thermodynamics states total energy in an isolated system remains constant over time.',
          difficulty: 'easy'
        },
        {
          id: 'qsc4-2',
          textAr: 'كرة تسقط من قمة برج نحو الأرض؛ ماذا يحدث لطاقتي الوضع والحركة للكرة أثناء سقوطها بإهمال مقاومة الهواء؟',
          textEn: 'A ball falls from a tower towards ground; what happens to potential and kinetic energies neglecting air resistance?',
          optionsAr: [
            'تتناقص طاقة الوضع وتزداد طاقة الحركة بنفس المقدار ويظل المجموع ثابتاً',
            'تزداد طاقة الوضع وتتناقص طاقة الحركة',
            'تتناقص طاقة الوضع وطاقة الحركة معاً إلى الصفر',
            'تظل طاقة الوضع ثابتة ولا تتغير'
          ],
          optionsEn: [
            'Potential energy decreases while kinetic energy increases equally, keeping total sum constant',
            'Potential increases while kinetic decreases',
            'Both potential and kinetic drop to zero',
            'Potential remains unchanged'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التبادل بين طاقتي الوضع والحركة في السقوط الحر',
          conceptTestedEn: 'Potential to Kinetic Conversion in Free-Fall',
          explanationAr: 'مع تناقص الارتفاع تقل طاقة الوضع (E_p)، وتتحول مباشرة إلى طاقة حركة (E_k) تزيد من سرعة الكرة بحيث يبقى مجموع طاقتي الوضع والحركة (E_mech) ثابتاً دائماً.',
          explanationEn: 'Loss of gravitational potential energy precisely balances the gain in kinetic energy, conserving total mechanical energy.',
          difficulty: 'medium'
        },
        {
          id: 'qsc4-3',
          textAr: 'ما هو تحول الطاقة الأساسي الذي يحدث في المروحة الكهربائية؟',
          textEn: 'What is the primary energy transformation in an electric fan?',
          optionsAr: [
            'من طاقة كهربائية إلى طاقة حركية (مع جزء حراري مهدر)',
            'من طاقة كيميائية إلى طاقة نووية',
            'من طاقة صوتية إلى طاقة ضوئية',
            'من طاقة وضع إلى طاقة كيميائية'
          ],
          optionsEn: [
            'Electrical energy to mechanical kinetic rotation (with thermal waste)',
            'Chemical to nuclear energy',
            'Sound to light energy',
            'Potential to chemical energy'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تحولات الطاقة في الأجهزة الكهروميكانيكية',
          conceptTestedEn: 'Device Energy Transformation',
          explanationAr: 'تستهلك المروحة الطاقة الكهربائية من القابس وتحولها عبر محركها الكهرومغناطيسي إلى طاقة حركية تدير شفرات الهواء.',
          explanationEn: 'Electric fans convert incoming electrical power into rotational kinetic movement of the blades.',
          difficulty: 'easy'
        },
        {
          id: 'qsc4-4',
          textAr: 'أي من الأجسام التالية يمتلك أكبر مقدار من "الطاقة الحركية"؟',
          textEn: 'Which object possesses the greatest Kinetic Energy?',
          optionsAr: [
            'شاحنة ضخمة تسير بسرعة 100 كم/ساعة',
            'دراجة هوائية خفيفة تسير بسرعة 10 كم/ساعة',
            'سيارة متوقفة تماماً في موقف السيارات',
            'شخص يمشي ببطء على قدميه'
          ],
          optionsEn: [
            'A massive heavy truck cruising at 100 km/h',
            'A lightweight bicycle riding at 10 km/h',
            'A stationary parked car',
            'A person walking slowly'
          ],
          correctIndex: 0,
          conceptTestedAr: 'العوامل المؤثرة في مقدار الطاقة الحركية (الكتلة والسرعة)',
          conceptTestedEn: 'Kinetic Energy Dependence on Mass and Speed (E_k = 1/2 m v^2)',
          explanationAr: 'الطاقة الحركية E_k = ½ m v² تعتمد على كتلة الجسم ومربع سرعته؛ والشاحنة تمتلك أكبر كتلة وسرعة عالية مما يمنحها طاقة حركية هائلة.',
          explanationEn: 'Kinetic energy scales with mass and velocity squared; the massive high-speed truck has the maximum kinetic energy.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

// Master subject curriculum registry
export const SUBJECT_CURRICULA: Record<Subject, Lecture[]> = {
  PRIMARY_MATH: PRIMARY_MATH_G1_LECTURES,
  PRIMARY_ARABIC: PRIMARY_ARABIC_G1_LECTURES,
  PRIMARY_SCIENCE: PRIMARY_SCIENCE_G1_LECTURES,
  ISLAMIC_STUDIES: ISLAMIC_STUDIES_FULL,
  MATH: MATH_LECTURES,
  PHYSICS: HIGH_PHYSICS_G12_LECTURES,
  CHEMISTRY: HIGH_CHEMISTRY_G12_LECTURES,
  BIOLOGY: BIOLOGY_LECTURES,
  COMPUTER_SCIENCE: COMPUTER_SCIENCE_LECTURES,
  ARABIC_LIT: ARABIC_LIT_LECTURES,
  ARABIC_LANG: ARABIC_LANG_LECTURES,
  GENERAL_SCIENCE: GENERAL_SCIENCE_LECTURES
};

export function getCurriculumForSubject(subject: Subject, gradeLevel?: string): Lecture[] {
  if (subject === 'PRIMARY_MATH') {
    if (gradeLevel === 'G1') {
      return PRIMARY_MATH_G1_LECTURES;
    }
    if (gradeLevel === 'G2') {
      return PRIMARY_MATH_G2_LECTURES;
    }
    if (gradeLevel === 'G3') {
      return PRIMARY_MATH_G3_LECTURES;
    }
    return PRIMARY_MATH_LECTURES;
  }
  if (subject === 'PRIMARY_ARABIC') {
    if (gradeLevel === 'G1') {
      return PRIMARY_ARABIC_G1_LECTURES;
    }
    if (gradeLevel === 'G2') {
      return PRIMARY_ARABIC_G2_LECTURES;
    }
    if (gradeLevel === 'G3') {
      return PRIMARY_ARABIC_LECTURES;
    }
    if (gradeLevel === 'G4' || gradeLevel === 'G5' || gradeLevel === 'G6') {
      return PRIMARY_ARABIC_FULL;
    }
    return PRIMARY_ARABIC_G2_LECTURES;
  }
  if (subject === 'PRIMARY_SCIENCE') {
    if (gradeLevel === 'G1') {
      return PRIMARY_SCIENCE_G1_LECTURES;
    }
    if (gradeLevel === 'G2') {
      return PRIMARY_SCIENCE_G2_LECTURES;
    }
    if (gradeLevel === 'G3') {
      return PRIMARY_SCIENCE_G3_LECTURES;
    }
    if (gradeLevel === 'G4' || gradeLevel === 'G5' || gradeLevel === 'G6') {
      return PRIMARY_SCIENCE_LECTURES;
    }
    return PRIMARY_SCIENCE_G3_LECTURES;
  }
  if (subject === 'ISLAMIC_STUDIES') {
    if (gradeLevel === 'G2') {
      return PRIMARY_ISLAMIC_G2_LECTURES;
    }
    if (gradeLevel === 'G3') {
      return PRIMARY_ISLAMIC_G3_LECTURES;
    }
    if (gradeLevel === 'G4') {
      return PRIMARY_ISLAMIC_G4_LECTURES;
    }
    return ISLAMIC_STUDIES_FULL;
  }
  if (subject === 'MATH') {
    if (gradeLevel === 'G11') {
      return HIGH_MATH_G11_LECTURES;
    }
    if (gradeLevel === 'G10') {
      return HIGH_MATH_G10_LECTURES;
    }
    if (gradeLevel === 'G8') {
      return MIDDLE_MATH_G8_LECTURES;
    }
    if (gradeLevel === 'G9') {
      return MIDDLE_MATH_G9_LECTURES;
    }
    if (gradeLevel === 'G7') {
      return MIDDLE_MATH_LECTURES;
    }
    if (gradeLevel && ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(gradeLevel)) {
      if (gradeLevel === 'G1') return PRIMARY_MATH_G1_LECTURES;
      if (gradeLevel === 'G2') return PRIMARY_MATH_G2_LECTURES;
      if (gradeLevel === 'G3') return PRIMARY_MATH_G3_LECTURES;
      return PRIMARY_MATH_LECTURES;
    }
    return MATH_LECTURES; // Grade 12 Advanced / STEM
  }
  if (subject === 'COMPUTER_SCIENCE') {
    if (gradeLevel === 'G12') {
      return HIGH_COMP_G12_LECTURES;
    }
    if (gradeLevel === 'G11') {
      return HIGH_COMP_G11_LECTURES;
    }
    if (gradeLevel === 'G10') {
      return HIGH_COMP_G10_LECTURES;
    }
    if (gradeLevel === 'G8') {
      return MIDDLE_COMPUTER_SCIENCE_G8_LECTURES;
    }
    if (gradeLevel && ['G7', 'G9'].includes(gradeLevel)) {
      return MIDDLE_COMPUTER_SCIENCE_LECTURES;
    }
    return HIGH_COMP_G12_LECTURES;
  }
  if (subject === 'GENERAL_SCIENCE') {
    if (gradeLevel === 'G1') {
      return PRIMARY_SCIENCE_G1_LECTURES;
    }
    if (gradeLevel === 'G2') {
      return PRIMARY_SCIENCE_G2_LECTURES;
    }
    if (gradeLevel === 'G3') {
      return PRIMARY_SCIENCE_G3_LECTURES;
    }
    if (gradeLevel === 'G9') {
      return MIDDLE_SCIENCE_G9_LECTURES;
    }
    if (gradeLevel === 'G8') {
      return MIDDLE_SCIENCE_G8_LECTURES;
    }
    return GENERAL_SCIENCE_LECTURES;
  }
  if (subject === 'PHYSICS') {
    if (gradeLevel === 'G11') {
      return HIGH_PHYSICS_G11_LECTURES;
    }
    return HIGH_PHYSICS_G12_LECTURES; // Grade 12 National / Language Schools Physics
  }
  if (subject === 'CHEMISTRY') {
    if (gradeLevel === 'G12') {
      return HIGH_CHEMISTRY_G12_LECTURES;
    }
    if (gradeLevel === 'G11') {
      return HIGH_CHEMISTRY_G11_LECTURES;
    }
    if (gradeLevel === 'G10') {
      return HIGH_CHEMISTRY_G10_LECTURES;
    }
    return HIGH_CHEMISTRY_G12_LECTURES;
  }
  if (subject === 'BIOLOGY') {
    if (gradeLevel === 'G11') {
      return HIGH_BIO_G11_LECTURES;
    }
    if (gradeLevel === 'G10') {
      return HIGH_BIO_G10_LECTURES;
    }
    return BIOLOGY_LECTURES; // Grade 12 Advanced / Molecular Genetics
  }
  if (subject === 'ARABIC_LANG') {
    if (gradeLevel === 'G9') {
      return MIDDLE_ARABIC_G9_LECTURES;
    }
    return ARABIC_LANG_LECTURES;
  }
  return SUBJECT_CURRICULA[subject] || MATH_LECTURES;
}

export function loadSubjectLectures(subject: Subject, country: string = 'SA', gradeLevel?: string): Lecture[] {
  const masterCurriculum = getCurriculumForSubject(subject, gradeLevel);
  
  // Retrieve any community / AI-generated shared lectures for this subject and country
  const countryKey = `TEACHER_AI_SHARED_LECS_${country}_${subject}_${gradeLevel || ''}`;
  const generalKey = `TEACHER_AI_SHARED_LECS_${subject}_${gradeLevel || ''}`;
  let sharedLecs: Lecture[] = [];
  try {
    const list1 = JSON.parse(localStorage.getItem(countryKey) || '[]') as Lecture[];
    const list2 = JSON.parse(localStorage.getItem(generalKey) || '[]') as Lecture[];
    const map = new Map<string, Lecture>();
    [...list1, ...list2].forEach(l => { if (l && l.id) map.set(l.id, l); });
    sharedLecs = Array.from(map.values());
  } catch {
    sharedLecs = [];
  }

  let combined = [...masterCurriculum];
  
  if (gradeLevel) {
    const cInfo = getCountryInfo(country as any);
    const natInfo = getNationalTextbookInfo(country as any, subject, gradeLevel as any);
    combined = combined.map(lec => ({
      ...lec,
      gradeLevelNameAr: `${cInfo.nameAr} - ${natInfo.textbookName}`,
      gradeLevelNameEn: `${cInfo.nameEn} - ${natInfo.textbookName}`,
      ministryAr: cInfo.ministryAr,
      ministryEn: cInfo.ministryEn,
      termAr: natInfo.semester,
      termEn: natInfo.semester
    }));
  }
  sharedLecs.forEach(sh => {
    if (!combined.some(c => c.id === sh.id)) {
      combined.push({
        ...sh,
        order: combined.length + 1
      });
    }
  });

  const storageKey = gradeLevel ? `TEACHER_AI_LECTURES_${subject}_${gradeLevel}` : `TEACHER_AI_LECTURES_${subject}`;
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as Lecture[];
      if (Array.isArray(parsed)) {
        const result = combined.map((freshLec) => {
          const found = parsed.find((p) => p.id === freshLec.id);
          if (found) {
            return {
              ...freshLec,
              isLocked: found.isLocked,
              isCompleted: found.isCompleted,
              lastAttempt: found.lastAttempt
            };
          }
          return freshLec;
        });

        // Also preserve any newly AI-generated lectures saved in user session
        parsed.forEach(p => {
          if (p.id && p.id.startsWith('ai-gen-') && !result.some(r => r.id === p.id)) {
            result.push(p);
          }
        });

        return result;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return combined;
}

export function saveSubjectLectures(subject: Subject, lectures: Lecture[], gradeLevel?: string): void {
  const storageKey = gradeLevel ? `TEACHER_AI_LECTURES_${subject}_${gradeLevel}` : `TEACHER_AI_LECTURES_${subject}`;
  localStorage.setItem(storageKey, JSON.stringify(lectures));
}

export const INITIAL_LECTURES = HIGH_CHEMISTRY_G12_LECTURES;

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  id: 'std-1001',
  name: 'عمر التميمي',
  nameAr: 'عمر التميمي',
  nameEn: 'Omar Al-Tamimi',
  age: 16,
  dateOfBirth: '2010-04-15',
  country: 'EG',
  specialization: 'GENERAL',
  subject: 'CHEMISTRY',
  gradeLevel: 'G12',
  language: 'ar',
  parentEmail: 'parent.altamimi@example.com',
  isParentVerified: true,
  timeLimitMinutes: 60,
  usedTodayMinutes: 18,
  masteryPoints: 450
};

