import type { Lecture } from '../types';

// ============================================================
// ISLAMIC STUDIES — منهج التربية الإسلامية (ابتدائي/متوسط)
// ============================================================
export const ISLAMIC_STUDIES_FULL: Lecture[] = [
  {
    id: 'isls-1', order: 1, isLocked: false, isCompleted: false, passingScoreRequired: 80,
    titleAr: 'الدرس 1: أركان الإسلام الخمسة', titleEn: 'Lesson 1: The Five Pillars of Islam',
    subtitleAr: 'تعرّف على أركان الإسلام الخمسة ومعانيها وأهميتها في حياة المسلم', subtitleEn: 'Discover the Five Pillars of Islam, their meanings and importance',
    durationMinutes: 25, gradeLevelNameAr: 'الصف الثالث المتوسط', gradeLevelNameEn: 'Grade 9 - Middle School',
    termAr: 'الفصل الأول', termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: العقيدة الإسلامية', unitTitleEn: 'Unit 1: Islamic Faith',
    lessonNumberAr: 'الدرس 1', lessonNumberEn: 'Lesson 1',
    warmupHookAr: 'ما الذي يجعل المبنى قوياً ثابتاً؟ أعمدته! وكذلك الإسلام له أعمدة تجعله راسخاً في القلب والعمل.',
    warmupHookEn: 'What makes a building strong and stable? Its pillars! Islam too has pillars that make it firm in heart and deed.',
    learningOutcomesAr: ['ذكر أركان الإسلام الخمسة بالترتيب', 'شرح معنى كل ركن', 'بيان أهمية أركان الإسلام في حياة المسلم'],
    learningOutcomesEn: ['List Five Pillars in order', 'Explain meaning of each pillar', 'State their importance in Muslim life'],
    vocabulary: [
      { termAr: 'الشهادة', termEn: 'Shahada', definitionAr: 'الإقرار بأن لا إله إلا الله وأن محمداً رسول الله', definitionEn: 'Declaration that there is no god but Allah and Muhammad is His messenger' },
      { termAr: 'الزكاة', termEn: 'Zakat', definitionAr: 'إخراج نسبة محددة من المال للمحتاجين', definitionEn: 'Giving a set portion of wealth to those in need' },
      { termAr: 'الحج', termEn: 'Hajj', definitionAr: 'زيارة بيت الله الحرام وأداء مناسكه مرة في العمر لمن استطاع', definitionEn: 'Pilgrimage to Mecca once in a lifetime for those who are able' }
    ],
    keyConceptsAr: ['الشهادة — الصلاة — الزكاة — الصوم — الحج', 'الحديث النبوي: بُنِيَ الإسلام على خمس', 'العبادة في الإسلام شاملة للقلب والجسد والمال'],
    keyConceptsEn: ['Shahada — Prayer — Zakat — Fasting — Hajj', 'Hadith: Islam built on five', 'Worship encompasses heart, body, and wealth'],
    summaryAr: 'أركان الإسلام الخمسة هي أساس دين الإسلام: الشهادة (اعتقاد)، الصلاة (عبادة يومية)، الزكاة (واجب مالي)، الصوم (تزكية روحية)، الحج (رحلة روحانية). قال النبي ﷺ: "بُنِيَ الإسلام على خمس".',
    summaryEn: 'The Five Pillars are Islam\'s foundation: Shahada (belief), Prayer (daily worship), Zakat (financial duty), Fasting (spiritual purification), Hajj (spiritual journey). The Prophet ﷺ said: "Islam is built on five".',
    sections: [
      {
        titleAr: '1. الأركان الخمسة — الترتيب والمعنى', titleEn: '1. The Five Pillars — Order and Meaning',
        contentAr: '١. الشهادة: الأساس العقدي — الإقرار بوحدانية الله ورسالة النبي محمد ﷺ.\n٢. الصلاة: خمس صلوات في اليوم تربط المسلم بخالقه.\n٣. الزكاة: 2.5% من المال للفقراء والمحتاجين تنمية للمجتمع.\n٤. الصوم: صيام رمضان تزكية للنفس وتقوية للإرادة.\n٥. الحج: مرة في العمر لمن استطاع — تجمع المسلمين من كل أنحاء العالم.',
        contentEn: '1. Shahada: Doctrinal foundation — acknowledging Allah\'s oneness and Muhammad\'s prophethood ﷺ.\n2. Prayer: Five daily prayers connecting the Muslim to their Creator.\n3. Zakat: 2.5% of wealth for the poor — social development.\n4. Fasting: Ramadan purifies the soul and strengthens willpower.\n5. Hajj: Once in a lifetime for those who can — unites Muslims worldwide.',
        interactiveExample: {
          titleAr: 'حديث جبريل: الإسلام على خمس', titleEn: 'Hadith of Gabriel: Islam on Five',
          steps: [
            { stepNumber: 1, textAr: '١ — الشهادة: أشهد أن لا إله إلا الله وأن محمداً رسول الله', textEn: '1 — Shahada: I testify no god but Allah, Muhammad is His Messenger', noteAr: 'الأساس العقدي', noteEn: 'Doctrinal foundation' },
            { stepNumber: 2, textAr: '٢ — الصلاة: خمس مرات يومياً فجراً وظهراً وعصراً ومغرباً وعشاءً', textEn: '2 — Prayer: Five times daily — dawn, noon, afternoon, sunset, night', noteAr: 'صلة بالله يومية', noteEn: 'Daily connection to God' },
            { stepNumber: 3, textAr: '٣ — الزكاة: للمحتاجين والفقراء تطهيراً للمال', textEn: '3 — Zakat: For the poor, purifying wealth', noteAr: 'واجب مالي اجتماعي', noteEn: 'Social financial duty' },
            { stepNumber: 4, textAr: '٤ — صوم رمضان: إمساك عن المفطرات من الفجر للمغرب', textEn: '4 — Ramadan fasting: abstaining from dawn to sunset', noteAr: 'تزكية روحية', noteEn: 'Spiritual purification' },
            { stepNumber: 5, textAr: '٥ — الحج: لمن استطاع إليه سبيلاً مرة في العمر', textEn: '5 — Hajj: Once in lifetime for those able', noteAr: 'رحلة الإيمان', noteEn: 'Journey of faith' }
          ],
          takeawayAr: 'الأركان كالبيت: الشهادة أساسه، والصلاة عموده، والزكاة والصوم والحج سقفه وجدرانه',
          takeawayEn: 'Pillars like a house: Shahada = foundation, Prayer = pillar, Zakat/Fasting/Hajj = walls and roof'
        },
        tipsAr: ['احفظ الأركان بالترتيب: شصزصح (ش=شهادة، ص=صلاة، ز=زكاة، ص=صوم، ح=حج)'],
        tipsEn: ['Memorize in order: S-P-Z-F-H (Shahada, Prayer, Zakat, Fasting, Hajj)'],
        formativeCheck: {
          id: 'fc-isl1-1', questionAr: 'ما الركن الثالث من أركان الإسلام؟', questionEn: 'What is the third pillar of Islam?',
          optionsAr: ['الصلاة', 'الزكاة', 'الصوم', 'الحج'],
          optionsEn: ['Prayer', 'Zakat', 'Fasting', 'Hajj'],
          correctIndex: 1, explanationAr: 'الزكاة هي الركن الثالث: شهادة، صلاة، زكاة، صوم، حج', explanationEn: 'Zakat is the third: Shahada, Prayer, Zakat, Fasting, Hajj',
          hintAr: 'رتّب: شهادة، صلاة، ثم ماذا؟', hintEn: 'Order: Shahada, Prayer, then what?'
        }
      }
    ],
    conceptMapAr: ['أركان الإسلام الخمسة', '١ الشهادة ← إقرار العقيدة', '٢ الصلاة ← عبادة يومية', '٣ الزكاة ← واجب مالي', '٤ الصوم ← تزكية النفس', '٥ الحج ← سفر الإيمان'],
    conceptMapEn: ['Five Pillars of Islam', '1 Shahada ← Faith declaration', '2 Prayer ← Daily worship', '3 Zakat ← Financial duty', '4 Fasting ← Soul purification', '5 Hajj ← Journey of faith'],
    textbookExercises: [
      { id: 'ex-isl1-1', questionAr: 'اذكر أركان الإسلام الخمسة مع توضيح معنى كل ركن', questionEn: 'State the Five Pillars with brief meaning of each', solutionStepsAr: ['١ الشهادة: الإقرار بوحدانية الله ورسالة محمد ﷺ', '٢ الصلاة: خمس صلوات يومية فريضة على كل مسلم', '٣ الزكاة: 2.5% من المال للمستحقين بعد حولان الحول', '٤ الصوم: الإمساك في رمضان عن المفطرات من الفجر للمغرب', '٥ الحج: زيارة مكة لأداء مناسك الحج مرة في العمر للمستطيع'], solutionStepsEn: ['1 Shahada: Declaration of faith in Allah and His Messenger', '2 Prayer: Five daily prayers obligatory on every Muslim', '3 Zakat: 2.5% of wealth for eligible recipients after one lunar year', '4 Fasting: Abstaining in Ramadan from dawn to sunset', '5 Hajj: Visiting Mecca for pilgrimage once in lifetime for the able'], answerAr: 'الأركان: الشهادة، الصلاة، الزكاة، الصوم، الحج', answerEn: 'Pillars: Shahada, Prayer, Zakat, Fasting, Hajj' }
    ],
    assessment: {
      id: 'quiz-isl-1', lectureId: 'isls-1', titleAr: 'تقييم الدرس 1: أركان الإسلام', titleEn: 'Lesson 1 Assessment: Pillars of Islam', passingScore: 80,
      questions: [
        { id: 'qi1-1', textAr: 'كم عدد أركان الإسلام؟', textEn: 'How many pillars does Islam have?', optionsAr: ['ثلاثة', 'أربعة', 'خمسة', 'ستة'], optionsEn: ['Three', 'Four', 'Five', 'Six'], correctIndex: 2, conceptTestedAr: 'عدد أركان الإسلام', conceptTestedEn: 'Number of pillars', explanationAr: 'أركان الإسلام خمسة كما في الحديث النبوي الشريف', explanationEn: 'Islam has five pillars as stated in the prophetic hadith', difficulty: 'easy' as const },
        { id: 'qi1-2', textAr: 'أي من التالي الركن الأول للإسلام؟', textEn: 'Which is the first pillar of Islam?', optionsAr: ['الصلاة', 'الحج', 'الشهادة', 'الزكاة'], optionsEn: ['Prayer', 'Hajj', 'Shahada', 'Zakat'], correctIndex: 2, conceptTestedAr: 'أول أركان الإسلام', conceptTestedEn: 'First pillar of Islam', explanationAr: 'الشهادة هي أول أركان الإسلام وأساسه العقدي', explanationEn: 'Shahada is the first and doctrinal foundation of Islam', difficulty: 'easy' as const },
        { id: 'qi1-3', textAr: 'الزكاة واجبة على من:', textEn: 'Zakat is obligatory for:', optionsAr: ['كل مسلم بالغ', 'من يبلغ ماله النصاب بعد حولان الحول', 'الفقراء فقط', 'الأطفال والبالغين'], optionsEn: ['Every adult Muslim', 'Those whose wealth reaches nisab after one year', 'Only the poor', 'Children and adults'], correctIndex: 1, conceptTestedAr: 'شروط الزكاة', conceptTestedEn: 'Zakat conditions', explanationAr: 'الزكاة تجب على من بلغ ماله النصاب وحال عليه الحول', explanationEn: 'Zakat is due when wealth reaches the nisab threshold after one lunar year', difficulty: 'medium' as const }
      ]
    }
  }
];

// ============================================================
// PRIMARY ARABIC — منهج اللغة العربية (ابتدائي كامل)
// ============================================================
export const PRIMARY_ARABIC_FULL: Lecture[] = [
  {
    id: 'parab-1', order: 1, isLocked: false, isCompleted: false, passingScoreRequired: 80,
    titleAr: 'الدرس 1: الجملة الاسمية — المبتدأ والخبر', titleEn: 'Lesson 1: Nominal Sentence — Subject and Predicate',
    subtitleAr: 'تعلّم بناء الجملة الاسمية وكيف يتعلق المبتدأ بالخبر في اللغة العربية', subtitleEn: 'Learn nominal sentence structure and how subject relates to predicate',
    durationMinutes: 30, gradeLevelNameAr: 'الصف الرابع الابتدائي', gradeLevelNameEn: 'Grade 4 - Primary',
    termAr: 'الفصل الثاني', termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الثانية: قواعد اللغة العربية', unitTitleEn: 'Unit 2: Arabic Grammar',
    lessonNumberAr: 'الدرس 1', lessonNumberEn: 'Lesson 1',
    warmupHookAr: '"الحديقةُ جميلةٌ" — ما الكلمة التي تحدثنا عنها؟ وما الذي قلناه عنها؟',
    warmupHookEn: '"The garden is beautiful" — which word are we talking about? And what did we say about it?',
    learningOutcomesAr: ['تعريف الجملة الاسمية', 'تحديد المبتدأ والخبر في الجملة', 'إعراب المبتدأ والخبر (رفع)'],
    learningOutcomesEn: ['Define nominal sentence', 'Identify subject and predicate', 'Parse subject and predicate (nominative case)'],
    vocabulary: [
      { termAr: 'الجملة الاسمية', termEn: 'Nominal Sentence', definitionAr: 'جملة تبدأ باسم وتتكون من مبتدأ وخبر', definitionEn: 'A sentence beginning with a noun, composed of subject and predicate' },
      { termAr: 'المبتدأ', termEn: 'Subject (Mubtada)', definitionAr: 'الاسم الذي نتحدث عنه في الجملة، مرفوع دائماً', definitionEn: 'The noun being spoken about, always nominative' },
      { termAr: 'الخبر', termEn: 'Predicate (Khabar)', definitionAr: 'ما قيل عن المبتدأ، مرفوع دائماً', definitionEn: 'What is said about the subject, always nominative' }
    ],
    keyConceptsAr: ['الجملة الاسمية تبدأ باسم', 'المبتدأ مرفوع علامته الضمة', 'الخبر مرفوع علامته الضمة', 'الخبر قد يكون مفرداً أو جملة أو شبه جملة'],
    keyConceptsEn: ['Nominal sentence starts with noun', 'Subject is nominative (damma)', 'Predicate is nominative (damma)', 'Predicate can be single word, phrase or clause'],
    summaryAr: 'الجملة الاسمية تبدأ باسم مرفوع يُسمى المبتدأ، يُكمله خبرٌ مرفوع. كلاهما مرفوع وعلامة رفعهما الضمة. مثال: "العلمُ نورٌ" — العلم مبتدأ، نور خبر.',
    summaryEn: 'A nominal sentence starts with a nominative noun called mubtada (subject), completed by a nominative khabar (predicate). Both carry the nominative damma marker.',
    sections: [
      {
        titleAr: '1. تحليل الجملة الاسمية', titleEn: '1. Analyzing the Nominal Sentence',
        contentAr: 'الجملة الاسمية لها ركنان أساسيان: المبتدأ هو الاسم الذي نبدأ به الحديث، والخبر هو ما نقوله عن المبتدأ ويُكمل المعنى. كلاهما مرفوع بالضمة في حالة الإفراد.',
        contentEn: 'Nominal sentence has two core elements: mubtada (subject) — the noun we begin with, and khabar (predicate) — what completes the meaning about it. Both carry the nominative damma in singular form.',
        interactiveExample: {
          titleAr: 'تحليل جملة: "الطالبُ مجتهدٌ"', titleEn: 'Analyzing: "The student is diligent"',
          steps: [
            { stepNumber: 1, textAr: 'نقرأ الجملة: الطالبُ مجتهدٌ', textEn: 'Read: Al-tālibu mujtahidun', noteAr: 'جملة اسمية كاملة', noteEn: 'Complete nominal sentence' },
            { stepNumber: 2, textAr: '"الطالبُ" — من نتحدث عنه؟ → هو المبتدأ', textEn: '"The student" — who are we talking about? → Subject (mubtada)', noteAr: 'مرفوع بالضمة (الطالبُ)', noteEn: 'Nominative: damma on الطالبُ' },
            { stepNumber: 3, textAr: '"مجتهدٌ" — ماذا قلنا عنه؟ → هو الخبر', textEn: '"Diligent" — what did we say? → Predicate (khabar)', noteAr: 'مرفوع بالضمة (مجتهدٌ)', noteEn: 'Nominative: damma on مجتهدٌ' },
            { stepNumber: 4, textAr: 'الإعراب: الطالبُ مبتدأ مرفوع / مجتهدٌ خبر مرفوع', textEn: 'Parsing: Subject nominative / Predicate nominative' }
          ],
          takeawayAr: 'تسأل: مَن؟ → المبتدأ. ثم: ماذا عنه؟ → الخبر. كلاهما بالضمة.',
          takeawayEn: 'Ask: Who? → Subject. Then: What about it? → Predicate. Both nominative.'
        },
        tipsAr: ['المبتدأ والخبر دائماً مرفوعان — إذا وجدت ضمة على الكلمتين فأنت في المسار الصحيح'],
        tipsEn: ['Subject and predicate are always nominative — if you see damma on both, you are correct'],
        formativeCheck: {
          id: 'fc-parab1-1', questionAr: 'في جملة "السماءُ صافيةٌ" — ما إعراب "السماء"؟', questionEn: 'In "The sky is clear" — what is the parsing of "sky"?',
          optionsAr: ['فاعل مرفوع', 'مبتدأ مرفوع', 'مفعول به منصوب', 'مضاف إليه مجرور'],
          optionsEn: ['Nominative subject (fa\'il)', 'Nominative mubtada', 'Accusative object', 'Genitive possessive'],
          correctIndex: 1, explanationAr: '"السماء" مبتدأ مرفوع بالضمة لأن الجملة اسمية تبدأ بالاسم', explanationEn: '"Sky" is nominative mubtada because it\'s a nominal sentence starting with a noun',
          hintAr: 'الجملة تبدأ باسم — إذن هي جملة اسمية والاسم الأول هو؟', hintEn: 'Sentence begins with noun — so it\'s nominal and the first noun is?'
        }
      },
      {
        titleAr: '2. أنواع الخبر', titleEn: '2. Types of Predicate (Khabar)',
        contentAr: 'الخبر له ثلاثة أنواع: (١) خبر مفرد: كلمة واحدة مثل "العلمُ نورٌ". (٢) خبر جملة فعلية: مثل "المعلمُ يشرحُ الدرس". (٣) خبر شبه جملة (ظرف أو جار ومجرور): مثل "الكتابُ على المنضدة".',
        contentEn: 'Khabar has three types: (1) Single word: "Knowledge is light". (2) Verbal clause: "The teacher explains the lesson". (3) Quasi-sentence (adverb/preposition phrase): "The book is on the desk".',
        interactiveExample: {
          titleAr: 'أمثلة الأنواع الثلاثة', titleEn: 'Examples of Three Types',
          steps: [
            { stepNumber: 1, textAr: 'خبر مفرد: "القرآنُ هدىً" — هدى = كلمة واحدة', textEn: 'Single: "The Quran is guidance" — one word', noteAr: 'الأكثر شيوعاً', noteEn: 'Most common' },
            { stepNumber: 2, textAr: 'خبر جملة فعلية: "الطالبُ يكتبُ الواجب" — يكتب الواجب جملة فعلية', textEn: 'Verbal clause: "The student writes homework"', noteAr: 'الخبر جملة كاملة', noteEn: 'Khabar is full clause' },
            { stepNumber: 3, textAr: 'خبر شبه جملة: "الحقيبةُ في الفصل" — في الفصل شبه جملة', textEn: 'Quasi-sentence: "The bag is in class"', noteAr: 'جار ومجرور', noteEn: 'Preposition phrase' }
          ],
          takeawayAr: 'الخبر قد يكون كلمة أو جملة كاملة أو مكاناً/زماناً — لكنه دائماً يُكمل المعنى',
          takeawayEn: 'Khabar can be a word, clause, or place/time phrase — always completes the meaning'
        },
        tipsAr: ['عند الشك في نوع الخبر، اسأل: ما الذي أُخبرنا عن المبتدأ؟'],
        tipsEn: ['When unsure of khabar type, ask: what were we told about the subject?'],
        formativeCheck: {
          id: 'fc-parab1-2', questionAr: 'في جملة "الولدُ في الحديقة" — نوع الخبر؟', questionEn: 'In "The boy is in the garden" — type of khabar?',
          optionsAr: ['خبر مفرد', 'خبر جملة فعلية', 'خبر شبه جملة', 'ليس خبراً'],
          optionsEn: ['Single word', 'Verbal clause', 'Quasi-sentence', 'Not a khabar'],
          correctIndex: 2, explanationAr: '"في الحديقة" جار ومجرور يُشكل شبه جملة تقع خبراً', explanationEn: '"In the garden" is a preposition phrase forming a quasi-sentence khabar',
          hintAr: '"في" حرف جر — الجار والمجرور نوع من شبه الجملة', hintEn: '"In" is a preposition — preposition phrase = quasi-sentence'
        }
      }
    ],
    conceptMapAr: ['الجملة الاسمية = مبتدأ + خبر', 'المبتدأ: اسم مرفوع بالضمة', 'الخبر: مفرد / جملة فعلية / شبه جملة — مرفوع'],
    conceptMapEn: ['Nominal sentence = Subject + Predicate', 'Subject: nominative noun (damma)', 'Predicate: single/verbal/quasi-sentence — nominative'],
    textbookExercises: [
      { id: 'ex-parab1-1', questionAr: 'أعرب الجملة التالية: "النهرُ عميقٌ"', questionEn: 'Parse: "The river is deep"', solutionStepsAr: ['النهرُ: مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة على آخره', 'عميقٌ: خبر مرفوع وعلامة رفعه الضمة الظاهرة على آخره'], solutionStepsEn: ['River: nominative subject, marked by damma', 'Deep: nominative predicate, marked by damma'], answerAr: 'النهرُ: مبتدأ مرفوع / عميقٌ: خبر مرفوع', answerEn: 'River: nominative mubtada / Deep: nominative khabar' }
    ],
    assessment: {
      id: 'quiz-parab-1', lectureId: 'parab-1', titleAr: 'تقييم الدرس 1: الجملة الاسمية', titleEn: 'Lesson 1 Assessment: Nominal Sentence', passingScore: 80,
      questions: [
        { id: 'qpa1-1', textAr: 'الجملة الاسمية تبدأ بـ:', textEn: 'Nominal sentence begins with:', optionsAr: ['فعل', 'اسم', 'حرف', 'ضمير فقط'], optionsEn: ['Verb', 'Noun', 'Particle', 'Pronoun only'], correctIndex: 1, conceptTestedAr: 'تعريف الجملة الاسمية', conceptTestedEn: 'Nominal sentence definition', explanationAr: 'الجملة الاسمية تبدأ باسم، بعكس الجملة الفعلية التي تبدأ بفعل', explanationEn: 'Nominal sentence starts with a noun, unlike verbal sentence which starts with a verb', difficulty: 'easy' as const },
        { id: 'qpa1-2', textAr: 'في جملة "البيتُ كبيرٌ" — ما المبتدأ؟', textEn: 'In "The house is big" — what is the subject?', optionsAr: ['كبيرٌ', 'البيتُ', 'كبير وبيت معاً', 'لا يوجد مبتدأ'], optionsEn: ['Big', 'House', 'Both', 'No subject'], correctIndex: 1, conceptTestedAr: 'تحديد المبتدأ', conceptTestedEn: 'Identifying subject', explanationAr: '"البيت" هو المبتدأ لأنه الاسم الذي نتحدث عنه في الجملة', explanationEn: '"House" is the subject because it is the noun being spoken about', difficulty: 'easy' as const },
        { id: 'qpa1-3', textAr: 'ما علامة رفع المبتدأ والخبر المفردين؟', textEn: 'What is the nominative marker for singular subject and predicate?', optionsAr: ['الفتحة', 'الكسرة', 'الضمة', 'السكون'], optionsEn: ['Fatha', 'Kasra', 'Damma', 'Sukun'], correctIndex: 2, conceptTestedAr: 'إعراب المبتدأ والخبر', conceptTestedEn: 'Parsing subject and predicate', explanationAr: 'المبتدأ والخبر المفردان يُرفعان بالضمة', explanationEn: 'Singular subject and predicate are nominative marked with damma', difficulty: 'medium' as const }
      ]
    }
  }
];
