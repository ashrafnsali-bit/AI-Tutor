import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL ARABIC LITERATURE & CRITICISM - GRADE 12 (الأدب والبلاغة والنصوص - الصف الثالث الثانوي / الشهادة الثانوية العامة)
// Official Grade 12 National Arab Curriculum Alignment:
// Unit 1: مدرسة الإحياء والبعث وجيل التطوير (Neo-Classical Revivalist School & Development Generation)
// Unit 2: الاتجاه الوجداني ومدرسة الديوان (Romantic Direction & Diwan School of Poetry)
// Unit 3: مدرسة أبوللو ومدرسة المهاجر والمدرسة الواقعية الجديدة (Apollo, Mahjar & Realistic Schools)
// Unit 4: فنون النثر العربي الحديث: المقال، الرواية، القصة القصيرة، والمسرحية (Modern Arabic Prose Arts)
// Unit 5: التجربة الشعرية والوحدة العضوية والموسيقى في النص الأدبي (Poetic Experience & Organic Unity)
// ============================================================================

export const HIGH_ARABIC_LIT_G12_LECTURES: Lecture[] = [
  // ── LECTURE 1: مدرسة الإحياء والبعث وجيل التطوير ──
  {
    id: 'h-lit12-1',
    order: 1,
    titleAr: 'المحاضرة 1: مدرسة الإحياء والبعث وجيل التطوير (البارودي، شوقي، وحافظ إبراهيم)',
    titleEn: 'Lecture 1: The Neo-Classical Revivalist School & Development Generation',
    subtitleAr: 'رائد البعث محمود سامي البارودي، عوامل التجديد عند تلاميذ البارودي، دور أمير الشعراء أحمد شوقي، وأحمد محرم',
    subtitleEn: 'Master the resurgence of classical Arabic diction under Al-Baroudi, Shawqi\'s innovations, and theatrical poetry.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: مدارس الشعر العربي الحديث',
    unitTitleEn: 'Unit 1: Modern Arabic Poetic Movements',
    lessonNumberAr: 'الدرس 1: مدرسة الإحياء والبعث وجيل التطوير',
    lessonNumberEn: 'Lesson 1: Revivalist School & Classical Renaissance',

    warmupHookAr: 'بعد قرون طويلة من الركود والضعف والتكلف البديعي في العصرين المملوكي والعثماني، كادت القصيدة العربية تفقد روحها وجزالتها. حتى نهض فارس السيف والقلم "محمود سامي البارودي" كالبركان الثائر ليعيد للقصيدة العربية رونقها العباسي والجاهلي! ثم جاء أمير الشعراء "أحمد شوقي" ليطوع الشعر العربي للمسرحيات الشعرية والملحمة التاريخية. كيف وازن هؤلاء العمالقة بين أصالة التراث ومعاصرة قضايا العصر ومشكلات الأمة؟',
    warmupHookEn: 'Following centuries of stagnation under Mamluk and Ottoman decline, Mahmoud Sami al-Baroudi single-handedly resuscitated classical Arabic lyricism. Discover how Ahmed Shawqi expanded poetry into verse drama and historical epics.',

    learningOutcomesAr: [
      'أن يوضح الطالب دور محمود سامي البارودي في إحياء الشعر العربي وتخليصه من الابتذال والصنعة المتكلفة',
      'أن يعدد العوامل التي هيأت لتلاميذ البارودي (جيل التطوير) التجديد والانفتاح على الثقافة الغربية والنضال الوطني',
      'أن يحلل مظاهر التجديد عند أمير الشعراء أحمد شوقي (العدول عن المديح للتاريخ، اتجاهه الإسلامي، والمسرح الشعري)',
      'أن يبين دور الشاعر أحمد محرم في تطويع الشعر العربي للقصص الملحمي التاريخي في ديوانه "الإلياذة الإسلامية"',
      'أن يستنتج سمات الكلاسيكية الجديدة (المواءمة بين الأخذ من التراث والالتفات إلى ثقافة العصر ومشكلات المجتمع)'
    ],
    learningOutcomesEn: [
      'Evaluate Mahmoud Sami al-Baroudi\'s revolutionary role in liberating Arabic poetry from medieval artificiality',
      'Identify catalysts empowering Baroudi\'s disciples: Western cultural exposure, national struggle, and free press',
      'Analyze stylistic innovations of Ahmed Shawqi: pivoting from court panegyric to history, Islamic themes, and verse drama',
      'Examine Ahmed Muharram\'s adaptation of Arabic metric verse to historical epics in "The Islamic Iliad"',
      'Articulate cardinal tenets of Neo-Classicism: synthesizing classical heritage with contemporary socio-political realities'
    ],

    vocabulary: [
      {
        termAr: 'المعارضة الشعرية (Poetic Contention / Mu\'arada)',
        termEn: 'Poetic Emulation (Mu\'arada)',
        definitionAr: 'أن ينظم شاعر حديث قصيدة على نفس وزن وقافية وروي قصيدة مشهورة لشاعر قديم منافساً له في الإبداع.',
        definitionEn: 'The neoclassical technique of composing a modern poem adhering to the exact meter and rhyme of an ancient classic.'
      },
      {
        termAr: 'المسرح الشعري (Verse Drama)',
        termEn: 'Verse Drama',
        definitionAr: 'فن درامي مسرحي تُكتب حواراته ومواقفه بالكامل بالشعر العربي الفصيح، وأسسه أحمد شوقي (مثل: مصرع كليوباترا، مجنون ليلى).',
        definitionEn: 'Theatrical drama written entirely in metered classical poetry, pioneered in Arabic by Ahmed Shawqi.'
      }
    ],

    sections: [
      {
        titleAr: '1. دور محمود سامي البارودي في إحياء الشعر العربي (رائد البعث)',
        titleEn: '1. Al-Baroudi\'s Role in Arabic Poetic Revival (The Pioneer)',
        contentAr: `### نشأة مدرسة الإحياء والبعث:
أصاب الشعر العربي في العصرين المملوكي والعثماني ضعفٌ شديد وجمودٌ وركاكة؛ فنهض **محمود سامي البارودي** ليُعيد للشعر العربي ديباجته المشرقة وقوته المفقودة.

### أهم ركائز تجديد البارودي:
1. **أصالة الأسلوب ومتانته:** الابتعاد عن الصنعة المتكلفة والزخارف البديعية السطحية، والاعتماد على قوة العبارة وفصاحة المعجم.
2. **محاكاة فحول شعراء العصور الذهبية:** عارض شعراء العصر الجاهلي والإسلامي والأموي والعباسي (مثل امرئ القيس، أبي تمام، البحتري، والمتنبي) في أوزانهم وقوافيهم.
3. **البناء التقليدي للقصيدة:** حافظ على الوزن الخليلي الواحد، والقافية الموحدة، والبدء بالغزل التقليدي أو الوقوف على الأطلال، ومناجاة الصاحبين.`,
        contentEn: `### Genesis of the Revivalist Movement:
Arabic poetry suffered severe stagnation during Mamluk and Ottoman eras. Mahmoud Sami al-Baroudi initiated a Renaissance to resurrect its classical vigor.
### Key Pillars of Al-Baroudi's School:
1. Restoring robust classical diction and syntactic purity devoid of artificial embellishments.
2. Emulating monumental poets of Golden Eras (Abbasid, Umayyad, Pre-Islamic).
3. Preserving monorhyme, classical metrical feet, and conventional prologues.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1 من 4: تحليل سمات المحاكاة والأصالة عند البارودي',
          titleEn: 'Worked Example 1 of 4: Analyzing Al-Baroudi\'s Classical Emulation',
          equation: 'المحاكاة التراثية = قوة اللفظ + جزالة الوزن + البدء بالغزل ومناجاة الصاحب',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول البارودي في مطلع قصيدته معارضاً أبا فراس الحمداني:\n"أَمِنْ عَينِها مَاءٌ سَكُوبٌ يُسَكَّبُ ... فَمَدمَعُها رَطبٌ وَقَلبِيَ مُجدِبُ"',
              textEn: 'Al-Baroudi opens: "Is it from her eyes that tears pour down profusely? Her cheeks are moist while my heart is arid."'
            },
            {
              stepNumber: 2,
              textAr: 'الملاحظة النقدية: بدأ الشاعر بالغزل الرقيق ومحاكاة المعجم التراثي الفصيح (سكوب، مجدب)، مع الالتزام التام بالوزن الخليلي الموحد والقافية الصريحة (الباء المضمومة)، مما يُبرز كيف أعاد البارودي ديباجة الشعر الأصيل دون تكلف.',
              textEn: 'Literary Critique: Employs classical elegiac prologue with pristine diction and strict adherence to classical meter and monorhyme.'
            }
          ],
          takeawayAr: 'البارودي لم يكن مجرد مقلد، بل بطل أحيا تقاليد الشعر العربي الأصيل ومهد الطريق لجيل التطوير.',
          takeawayEn: 'Al-Baroudi was not a mere copyist, but a pioneer who revived Arabic poetic standards.'
        }
      },
      {
        titleAr: '2. عوامل التجديد والانفتاح الثقافي لدى جيل التطوير (تلاميذ البارودي)',
        titleEn: '2. Catalysts of Innovation in the Development Generation',
        contentAr: `### طرق اتصال تلاميذ البارودي بأستاذهم:
1. **بالمشافهة:** مثل أحمد شوقي، وحافظ إبراهيم، وإسماعيل صبري في مصر.
2. **بالمراسلة:** مثل شكيب أرسلان في لبنان.
3. **بقراءة ما نُشر من شعره:** في كتاب **"الوسيلة الأدبية"** الذي ألفه أستاذه الشيخ حسين المرصفي.

### عوامل الانفتاح والتجديد لدى جيل التطوير:
* **الانفتاح على الثقافة الغربية:** بمعرفة اللغات الأجنبية، واختلاطهم بالأجانب، وقراءة المترجمات إثر الاحتلال البريطاني لمصر (1882م).
* **عمق النضال الوطني:** رسخ الإحساس بتراث الأجداد وماضينا العريق، وجعلهم يُنددون بالاستعمار ومآسيه (كمأساة دنشواي 1906م).
* **الإيمان بفكرة الجامعة الإسلامية:** باعتبارها رمزاً لوحدة المسلمين في مواجهة التغلغل الإنجليزي.
* **التفاعل مع قضايا العصر:** مثل: حرية الصحافة، تحرير المرأة (دعوة قاسم أمين)، إنشاء الجامعة المصرية (1908م)، والدستور وتعدد الأحزاب.`,
        contentEn: `### Transmission Channels of Al-Baroudi\'s Heritage:
Oral mentorship, written correspondence, and study via Al-Marsafi\'s seminal anthology "Al-Waseela Al-Adabiyya".
### Catalysts of Innovation:
1. Western cultural engagement and foreign language proficiency.
2. Deep national anti-colonial struggle and collective memory revival.
3. Championing the Pan-Islamic League as an anti-imperialist solidarity union.
4. Engaging modern sociopolitical issues: press liberty, women\'s emancipation, higher education.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2 من 4: ربط الشعر بقضايا النضال الوطني وحادثة دنشواي',
          titleEn: 'Worked Example 2 of 4: National Struggle & The Denshawai Incident',
          equation: 'شعر النضال = استنهاض الوعي الوطني + التنديد بفظائع الاحتلال + تصوير وجدان الأمة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول حافظ إبراهيم متهكماً ومندداً بجرائم الاحتلال الإنجليزي في محاكمة دنشواي:\n"أَحْسَنْتُمُ قَتْلَى وَأَحْسَنْتُمْ رَبْطاً ... فَلَمْ تُبَالُوا بِمَا جَرَّتْ سَيَاسَاتُكُم\nنَامَتْ نَوَاطِيرُ مِصْرَ عَنْ ثَعَالِبِهَا ... فَقَدْ بَشِمْنَ وَمَا تَفْنَى العَنَاقِيدُ"',
              textEn: 'Hafez Ibrahim denouncing British brutality in Denshawai with stinging political satire.'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل الأدبي: عبر جيل التطوير عن روح عصرهم سياسياً واجتماعياً، وانتقلوا بالشعر من الذاتية الضيقة إلى التعبير عن هموم الشعب والوطن، وأسهمت الصحافة في جعل أسلوبهم سلساً وسهلاً وقريباً من الجماهير.',
              textEn: 'Analysis: Poetry transcended solitary individualism to embody collective national consciousness with accessible journalistic cadence.'
            }
          ],
          takeawayAr: 'تميز جيل التطوير بربط شعرهم بقضايا الوطن السياسية والاجتماعية وسلاسة الأسلوب بسبب الصحافة.',
          takeawayEn: 'Disciples innovated by anchoring poetry in sociopolitical realism and journalistic lucidity.'
        }
      },
      {
        titleAr: '3. مظاهر التجديد والريادة عند أحمد شوقي وأحمد محرم',
        titleEn: '3. Pioneers of Innovation: Ahmed Shawqi & Ahmed Muharram',
        contentAr: `### عوامل تهيأت لشوقي ولم تتهيأ لغيره:
جمع بين الثقافة العربية والثقافة الأوروبية، درس الحقوق في فرنسا، واطلع على الآداب الفرنسية وشاهد مسارحها، وجالس كبار شعرائها (فيكتور هيجو، لامارتين، دي موسيه).

### التجديدات الكبرى لدى أحمد شوقي:
1. **العدول عن المديح إلى التاريخ:** كما في كبار الحوادث في وادي النيل ("همت الفلك واحتواها الماء").
2. **الاتجاه الإسلامي:** في قصائده الدينية ومدائحه النبوية الشهيرة (نهج البردة، والهمزية).
3. **وصف المنجزات العصرية والمخترعات الحديثة:** استبدل وصف الناقة بوصف الطائرة والغواصة والسفينة.
4. **ريادة المسرح الشعري العربي:** ألف مسرحيات شعرية خالدة (مصرع كليوباترا، مجنون ليلى، قمبيز، عنترة، الست هدى).

### دور أحمد محرم في التطوير الملحمي:
طوع الشعر العربي للقصص التاريخي الحماسي الملحمي في ديوانه الكبير **"مجد الإسلام"** (المعروف بـ **الإلياذة الإسلامية** عام 1933م)، مخلداً بطولات النبي ﷺ وصحابته الكرام.`,
        contentEn: `### Shawqi\'s Unique Catalysts:
Dual French-Arabic legal and literary training, theater connoisseurship, and fellowship with Western masters.
### Major Innovations:
1. Pivoting from court eulogy to national historical retrospection.
2. Islamic spiritual devotion (Nahj al-Burda).
3. Poeticizing modern industrial marvels (ships, planes).
4. Founding the Arabic verse drama tradition.
### Ahmed Muharram\'s Epic Poetics:
Adapting Arabic verse to epic historiography in "Majd al-Islam" (The Islamic Iliad).`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3 من 4: الموازنة بين وصف التراث ووصف المنجزات العصرية عند شوقي',
          titleEn: 'Worked Example 3 of 4: Contrasting Ancient Tropes with Modern Marvels in Shawqi',
          equation: 'التجديد في الموضوع = استبدال راحلة القدماء (الناقة) بمنجزات العصر (السفينة / الطائرة) مع الحفاظ على فخامة الوزن',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول أحمد شوقي في مطلع قصيدة "كبار الحوادث في وادي النيل" واصفاً السفينة:\n"هَمَّتِ الفُلْكُ وَاحْتَوَاهَا المَاءُ ... وَحَدَاهَا بِمَنْ تُقِلُّ الرَّجَاءُ\nضَرَبَ البَحْرُ ذُو العُبَابِ حَوَالَيْـ ... ـهَا سَمَاءً قَدْ غَارَبَتْهَا سَمَاءُ"',
              textEn: 'Shawqi describing an ocean liner embarking across turbulent waters.'
            },
            {
              stepNumber: 2,
              textAr: 'دلالة التطوير: تخلى شوقي عن وصف الناقة والرحلة في الصحراء المعتاد عند شعراء الجاهلية، ووصف الباخرة العملاقة التي تمخر عباب البحر، محافظاً على جزالة اللفظ وبحور الشعر الخليلية وقوة الديباجة.',
              textEn: 'Significance: Discarded camel caravans in favor of industrial steamships while preserving classical grandeur.'
            }
          ],
          takeawayAr: 'شوقي طوع الوزن التراثي للتعبير عن منجزات العصر ومخترعاته التقنية برؤية حضارية متقدمة.',
          takeawayEn: 'Shawqi fused classical metric majesty with modern technological iconography.'
        }
      },
      {
        titleAr: '4. الخصائص الفنية المشتركة والمآخذ النقدية على المدرسة الكلاسيكية الجديدة',
        titleEn: '4. Poetic Hallmarks & Critical Evaluations of Neoclassicism',
        contentAr: `### الخصائص الفنية المشتركة لتلاميذ البارودي:
1. **الاهتمام بالناحية البيانية:** العناية الفائقة بروعة الصور وجلال الصياغة والموسيقى اللفظية، ولم يقتصروا على مجرد المحاكاة.
2. **المواءمة بين اتجاهين:** الأخذ من التراث العربي الأصيل، والالتفات لثقافة العصر وقضاياه الراهنة.
3. **إفساح المجال للتجارب الذاتية:** نظموا في تجاربهم الوجدانية الخاصة بجانب شعر المجتمع.
4. **سهولة الأسلوب ووضوحه:** نتيجة تفاعلهم مع الصحافة والجمهور العام.

### المآخذ النقدية التي وجهها شعراء الديوان والرومانسيون إليهم:
* **غلبة المناسبات والمجاملات:** انشغالهم بالقضايا السياسية والاجتماعية جعل كثيراً من شعرهم مناسباتياً يفتقر إلى الحرارة الوجدانية العميقة.
* **الاهتمام بقشور الأشياء وظواهرها:** غلبة البيان والزخرف على حساب استبطان النفس والغوص في أعماق المشاعر.
* **عدم تحقق الوحدة العضوية:** ظلت القصيدة عندهم مفككة ومتعددة الأغراض (غزل، أطلال، مدح، وصف)؛ عملاً بمبدأ **"البيت وحدة القصيدة"** التقليدي.`,
        contentEn: `### Shared Stylistic Traits:
1. Supremacy of imagery and musical orchestration.
2. Harmonizing ancestral heritage with contemporary consciousness.
3. Accommodating subjective introspections.
4. Stylistic clarity and journalistic accessibility.
### Critical Shortcomings (Diwan & Romantic Critiques):
1. Over-reliance on public occasion and social eulogy verse.
2. Formal external rhetoric prioritizing rhetorical veneer over psychological depth.
3. Lack of organic thematic unity, treating individual distichs as autonomous units.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4 من 4: استنتاج المآخذ النقدية في مطلع "نهج البردة" لشوقي',
          titleEn: 'Worked Example 4 of 4: Critiquing Structural Fragmentation & Occasional Verse',
          equation: 'المأخذ النقدي = البدء بالغزل التراثي في موضوع ديني/مدحي + غياب الوحدة العضوية الشاملة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول أحمد شوقي في مطلع قصيدة "نهج البردة" في مدح النبي ﷺ:\n"رِيمٌ عَلَى القَاعِ بَيْنَ البَانِ وَالعَلَمِ ... أَحَلَّ سَفْكَ دَمِي فِي الأَشْهُرِ الحُرُمِ"',
              textEn: 'Shawqi commences his devotional prophetic ode with classical romantic imagery.'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل والاستنتاج: على الرغم من أن القصيدة في المدح النبوي الخالص، إلا أن شوقي استهلها بالغزل الحسي التقليدي جرياً على سنن القدماء، وهو ما عابه نقاد مدرسة الديوان لاحقاً واعتبروه تفككاً في الوحدة العضوية وانفصالاً بين مطلع القصيدة وموضوعها الأساسي.',
              textEn: 'Critical Deduction: Romantic opening in a devotional eulogy reveals traditional fragmentation critique by modernists.'
            }
          ],
          takeawayAr: 'رغم براعة الكلاسيكيين البيانية، أخذ النقاد عليهم تعدد الأغراض في القصيدة وغياب الوحدة العضوية.',
          takeawayEn: 'Despite verbal majesty, modern critics critiqued neoclassicists for thematic heterogeneity.'
        }
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
      id: 'quiz-hlit12-1',
      titleAr: 'اختبار الإحياء والبعث وجيل التطوير',
      titleEn: 'Revivalist School Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هو العمل الأدبي الرائد الذي طوّع فيه الشاعر أحمد محرم الشعر العربي للقصص الملحمي التاريخي؟',
          textEn: 'What is the pioneering epic wherein Ahmed Muharram adapted Arabic verse into an Islamic historical saga?',
          optionsAr: ['مصرع كليوباترا', 'الإلياذة الإسلامية (ديوان مجد الإسلام)', 'نهج البردة', 'كبار الحوادث في وادي النيل'],
          optionsEn: ['The Death of Cleopatra', 'The Islamic Iliad (Majd al-Islam)', 'Nahj al-Burda', 'Great Events in Nile Valley'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'طوع أحمد محرم الشعر للملاحم التاريخية في ديوانه الشهير "مجد الإسلام" المعروف بالإلياذة الإسلامية عام 1933م.',
          explanationEn: 'Ahmed Muharram composed "Majd al-Islam", hailed as "The Islamic Iliad", adapting Arabic meters to historical epics.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: الاتجاه الوجداني ومدرسة الديوان ──
  {
    id: 'h-lit12-2',
    order: 2,
    titleAr: 'المحاضرة 2: الاتجاه الوجداني ومدرسة الديوان (خليل مطران، العقاد، المازني، وشكري)',
    titleEn: 'Lecture 2: The Romantic Direction & Diwan School of Poetry',
    subtitleAr: 'رائد الاتجاه الوجداني خليل مطران، شعراء الديوان الثلاثة، الصدق التعبيري، والوحدة العضوية، وغلبة الجانب الفكري',
    subtitleEn: 'Master romantic introspective lyricism under Khalil Mutran, and intellectual analytical rigor in the Diwan triumvirate.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: مدارس الشعر العربي الحديث',
    unitTitleEn: 'Unit 1: Modern Arabic Poetic Movements',
    lessonNumberAr: 'الدرس 2: الاتجاه الوجداني ومدرسة الديوان',
    lessonNumberEn: 'Lesson 2: Romantic Direction & Diwan Poetics',

    warmupHookAr: 'حين وقف الشاعر اللبناني المبدع "خليل مطران" أمام البحر في الإسكندرية وكتب: "شَاكٍ إِلَى البَحْرِ اضْطِرَابَ خَوَاطِرِي ... فَيُجِيبُنِي بِرِيَاحِهِ الهَوْجَاءِ"، لم يعد البحر مجرد ماء وأمواج، بل أصبح كائناً حياً يبثه الشاعر أحزانه ويشاركه آلامه! هنا ولد "الاتجاه الوجداني" الرومانسي في الشعر العربي! ثم جاء شعراء "مدرسة الديوان" ونادوا بأن القصيدة "كائن حي" مترابط لا يجوز تفكيكه! كيف غير هؤلاء نظرة العرب للشعر؟',
    warmupHookEn: 'When Khalil Mutran confided his broken heart to the Mediterranean, nature became an empathic living consciousness mirroring human emotion. Explore the birth of Arabic Romanticism and the intellectual rebellion of the Diwan school.',

    learningOutcomesAr: [
      'أن يوضح الطالب أسس الاتجاه الوجداني الذي أرساه خليل مطران (اكتشاف الفرد لذاته، الاعتزاز بثقافته، والتطلع للمثل العليا)',
      'أن يحلل سمات شعر مطران (الصدق الشعري، الوحدة العضوية، امتزاج الشاعر بالطبيعة، والتحرر من قيود الوزن والقافية الصارمة)',
      'أن يحدد رواد مدرسة الديوان الثلاثة: عباس محمود العقاد، إبراهيم عبد القادر المازني، وعبد الرحمن شكري',
      'أن يوضح مفهوم القصيدة عند شعراء الديوان (كائن حي لكل جزء فيه وظيفته ومكانه، كأعضاء الجسد)',
      'أن يبرر سبب وضوح الجانب الفكري والعقلاني (الفلسفي) وطغيان الذهنية الجافة على عاطفة شعراء الديوان'
    ],
    learningOutcomesEn: [
      'Articulate foundations of Romanticism under Mutran: individual self-realization, cultural authenticity, and universal ideals',
      'Analyze Mutran\'s stylistic tenets: organic unity, communion with nature, and expressive liberation from rigid rhyme',
      'Identify the Diwan triumvirate: Abbas Mahmoud al-Aqqad, Ibrahim al-Mazini, and Abdulrahman Shukri',
      'Define the Diwan concept of a poem: an organic living organism with interdependent functional parts',
      'Explain the predominance of intellectual philosophical rationality and cerebral abstraction over pure emotion in Diwan poetry'
    ],

    vocabulary: [
      {
        termAr: 'الوحدة العضوية (Organic Unity)',
        termEn: 'Organic Unity',
        definitionAr: 'تماسك القصيدة وتكاملها الفني بحيث تدور حول موضوع واحد وجو نفسي واحد، وتتسلسل الأفكار تسلسلاً لا يمكن فيه حذف بيت أو نقله.',
        definitionEn: 'The aesthetic coherence of a poem unified around a single theme and atmospheric mood where stanzas cannot be rearranged.'
      },
      {
        termAr: 'غلبة الذهنية (Cerebral Rationalism)',
        termEn: 'Intellectual Abstraction',
        definitionAr: 'طغيان التفكير العقلي والتأمل الفلسفي الجاف على العاطفة ودفء الإحساس في شعر مدرسة الديوان.',
        definitionEn: 'The ascendancy of analytical intellect, philosophical speculation, and dry cognitive inquiry over lyric emotion.'
      }
    ],

    sections: [
      {
        titleAr: '1. خليل مطران وركائز نشأة الاتجاه الوجداني في الشعر العربي',
        titleEn: '1. Khalil Mutran & The Foundations of Arabic Romanticism',
        contentAr: `### نشأة الاتجاه الوجداني:
* **البداية والمحاكاة:** بدأ الاتجاه الوجداني يحاكي الرومانسية الغربية مع حركة الإحياء التي ردت للشعر العربي ما كان قد فقده من لمسات وجدانية أصيلة.
* **النمو والازدهار:** نما على يد رائد الرومانسية العربية **خليل مطران** في مطلع القرن العشرين، وازدهر في العقد الثالث مع مدارس (الديوان، أبوللو، والمهاجر).
* **التراجع:** بدأ يتراجع تدريجياً بعد الحرب العالمية الثانية أمام غزو تيار المدرسة الواقعية الجديدة.

### الأسس التي يقوم عليها الاتجاه الوجداني:
1. **اكتشاف الفرد لذاته** والعمل على النهوض بها وتنميتها.
2. **اعتزاز الفرد بثقافته الجديدة** ووعيه الاجتماعي.
3. **التطلع الدائم إلى المُثُل الإنسانية العليا:** من حرية، وكرامة إنسانية، وعدل، ومساواة، وحب، وإخاء، وتواصل، وعشق للجمال، والنفور من القبح والتخلف.`,
        contentEn: `### Emergence of Arabic Romanticism:
Pioneered by Khalil Mutran at the turn of the 20th century under French romantic influences, reaching its zenith in the 1930s with Apollo and Mahjar, before retreating post-WWII before contemporary Realism.
### Foundational Pillars:
1. Individual self-discovery and consciousness cultivation.
2. Pride in contemporary progressive culture.
3. Aspiration toward sublime universal humanist ideals: freedom, dignity, justice, love, and aesthetic transcendence.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1 من 4: تحليل البعد الوجداني والتطلع للمثل العليا عند مطران',
          titleEn: 'Worked Example 1 of 4: Analyzing Affective Introspection & Sublime Ideals in Mutran',
          equation: 'الاتجاه الوجداني = استبطان النفس + الصدق الشعوري + التطلع للمثل الإنسانية العليا',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول خليل مطران في مقدمة ديوانه (1908م) واصفاً شعره:\n"هَذَا شِعْرٌ عَصْرِيٌّ، وَفَخْرُهُ أَنَّهُ عَصْرِيٌّ، وَلَهُ عَلَى سَابِقِهِ مَزِيَّةُ زَمَانِهِ عَلَى سَالِفِ العُصُورِ... لَيْسَ نَاظِمُهُ بِعَبْدِهِ، لا تُحْوِجُهُ ضَرُورَاتُ الوَزْنِ وَالقَافِيَةِ عَلَى غَيْرِ قَصْدِهِ".',
              textEn: 'Mutran in his 1908 preface: "This is modern poetry whose pride lies in modernity; its author is not enslaved by meter and rhyme."'
            },
            {
              stepNumber: 2,
              textAr: 'دلالة النص البلاغية: يؤسس مطران لمبدأ الحرية التعبيرية للشاعر؛ حيث تصبح العاطفة والصدق الإنساني هما القائد للصياغة، دون الخضوع الأعمى للزخارف الشكلية المتكلفة أو الضرورات النظمية الجافة.',
              textEn: 'Rhetorical deduction: Establishes expressive emancipation where affective authenticity guides composition without servile submission to rigid ornament.'
            }
          ],
          takeawayAr: 'حرر مطران الشعر العربي من قيود المحاكاة الجامدة وجعل الذات الإنسانية والصدق الوجداني محور الإبداع.',
          takeawayEn: 'Mutran emancipated Arabic verse from slavish imitation, establishing emotional sincerity as the artistic compass.'
        }
      },
      {
        titleAr: '2. مقومات التجديد الفني في قصيدة مطران (الوحدة العضوية والامتزاج بالطبيعة)',
        titleEn: '2. Artistic Hallmarks of Mutran\'s Lyricism (Organic Unity & Nature)',
        contentAr: `### الخصائص الفنية لشعر مطران كما حددها في مقدمة ديوانه:
1. **الصدق في التعبير:** شعر لا يحمل صاحبه على قول ما لا يشعر به، ولا ينظم في شعر المناسبات المتكلفة.
2. **دقة الوصف واستقصاؤه:** النظر إلى جمال البيت في ذاته وفي موضعه من القصيدة كلها.
3. **الوحدة العضوية (الفنية):** القصيدة بناء حي متكامل تلتئم فيه المشاعر والأفكار في موضوع واحد متناسق دون تنافر.
4. **امتزاج الشاعر بالطبيعة وتجسيمها:** لم تعد الطبيعة مجرد مشهد خارجي جامد، بل مرآة صافية تعكس آلام الشاعر وأحزانه وتتفاعل معه تفاعلاً حياً.`,
        contentEn: `### Hallmarks of Mutran's Poetics:
1. Expressive sincerity avoiding empty public occasion odes.
2. Precise exhaustive description evaluated across the architecture of the entire poem.
3. Organic unity: a cohesive psychological and thematic tapestry.
4. Empathic communion with nature: projecting inner psychological grief onto living landscape panoramas.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2 من 4: تحليل الامتزاج بالطبيعة في قصيدة "المساء" لمطران',
          titleEn: 'Worked Example 2 of 4: Personification & Nature Communion in Mutran\'s "The Evening"',
          equation: 'الامتزاج بالطبيعة = إسقاط مشاعر الألم الإنساني على عناصر الكون الحية (البحر، الرياح، الغروب)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول مطران في رائعته "المساء" متألماً من الحب والمرض في غربته بالإسكندرية:\n"شَاكٍ إِلَى البَحْرِ اضْطِرَابَ خَوَاطِرِي ... فَيُجِيبُنِي بِرِيَاحِهِ الهَوْجَاءِ\nثَاوٍ عَلَى صَخْرٍ أَصَمَّ وَلَيْتَ لِي ... قَلْباً كَهَذِي الصَّخْرَةِ الصَّمَّاءِ"',
              textEn: 'Mutran in "The Evening": "Complaining to the sea of my turbulent thoughts, it answers me with stormy gales..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل الأدبي: شخّص الشاعر البحر كصديق يسمع ويجيب، وتمنى لو كان قلبه كالصخرة في قسوتها ليتخلص من آلام الفراق؛ فصارت عناصر الطبيعة (البحر، الصخرة، الغروب) جزءاً لا يتجزأ من الحالة النفسية والمأساة الشعورية للشاعر.',
              textEn: 'Literary critique: The sea is personified as an interlocutor; natural phenomena become an intimate canvas reflecting existential heartbreak.'
            }
          ],
          takeawayAr: 'أصبحت الطبيعة عند الرومانسيين كائناً حياً ناطقاً يشارك الشاعر أوجاعه ومآسيه الوجدانية.',
          takeawayEn: 'Romantic nature transformed from passive scenery into an empathic entity resonating with human suffering.'
        }
      },
      {
        titleAr: '3. نشأة مدرسة الديوان ومفهوم القصيدة ككائن حي',
        titleEn: '3. The Diwan School & The Living Organism Conception of the Poem',
        contentAr: `### رواد مدرسة الديوان وظروف نشأتها:
* **الرواد الثلاثة:** **عباس محمود العقاد**، **إبراهيم عبد القادر المازني**، و**عبد الرحمن شكري**.
* **سنة الظهور:** ظهرت معالمها بقوة عام **1921م** حين أصدر العقاد والمازني كتابهما النقدي الشهير **"الديوان في الأدب والنقد"**.
* **الدافع الفكري:** تأثروا بالرومانسية الإنجليزية، وواجهوا أزمة خانقة فرضها الاستعمار الإنجليزي في مطلع القرن العشرين، فهربوا من الواقع المرير إلى عالم الأحلام والأوهام والتأمل في الكون وأسرار الوجود.

### مفهوم القصيدة عند شعراء الديوان:
* القصيدة عندهم **"كائن حي"** كجسم الإنسان، لكل عضو فيه وظيفته ومكانه المحدد.
* لا يجوز حذف بيت من القصيدة أو نقله من مكانه، لأن ذلك يخل ببنائها العضوي وتماسكها المعنوي.
* إطلاق عنوان موحد للقصيدة بل وللديوان بأكمله (مثل ديوان "عابر سبيل" للعقاد، و"أزهار الخريف" لشكري) للدلالة على الإطار الفكري والموضوعي للعمل.`,
        contentEn: `### Diwan Triumvirate & Origins:
Founded by Abbas Mahmoud al-Aqqad, Ibrahim al-Mazini, and Abdulrahman Shukri; crystallized in their 1921 critical manifesto "Al-Diwan".
Escaping harsh British colonial realities into deep existential contemplation influenced by English Romanticism.
### Diwan Poem Architecture:
- The poem is an integrated living organism whose distichs function like human anatomical organs.
- Discarding line transposition or deletion; each stanza fulfills an irreplaceable structural role.
- Enforcing cohesive unified titles for individual poems and entire anthologies.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3 من 4: تطبيق مفهوم "القصيدة كائن حي" والوحدة الفنية',
          titleEn: 'Worked Example 3 of 4: Applying "The Poem as Living Anatomy" Concept',
          equation: 'القصيدة كائن حي = وحدة العنوان + تسلسل الأفكار المنطقي + استحالة حذف أو نقل أي بيت',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول عبد الرحمن شكري في قصيدته "طائر الفردوس" المتأملة في عالم المثل والأحلام:\n"أَلا يَا طَائِرَ الفِرْدَوْسِ إِنَّ الشِّعْرَ وِجْدَانُ ... وَفِي شَدْوِكَ لِلنَّفْسِ أَرَاجِيحٌ وَأَشْجَانُ"',
              textEn: 'Abdulrahman Shukri in "Bird of Paradise": "O Bird of Paradise, indeed poetry is affective consciousness..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل والاستنتاج: جسد شكري المبدأ الجوهري للديوانيين؛ فالشعر تعبير عن النفس الإنسانية ووجدانها الصادق، والقصيدة تتسلسل حواراً تصاعدياً مع هذا الطائر الرمزي حتى النهاية بحيث لا يمكن انتزاع بيت من سياقه المعنوي.',
              textEn: 'Analytical deduction: Poetry is defined as existential introspection where stanzas interlock systematically around a central symbolic motif.'
            }
          ],
          takeawayAr: 'ألزم شعراء الديوان أنفسهم بالوحدة العضوية المطلقة واعتبروا تفكك الأبيات عيباً فنياً لا يغتفر.',
          takeawayEn: 'Diwan poets mandated absolute organic coherence, repudiating neoclassical distich autonomy.'
        }
      },
      {
        titleAr: '4. الخصائص الفنية لشعر الديوان والمآخذ النقدية (طغيان الذهنية الجافة)',
        titleEn: '4. Diwan Stylistic Tenets & Critical Flaws (Cerebral Intellectualism)',
        contentAr: `### أهم الخصائص والسمات الفنية لمدرسة الديوان:
1. **الجمع بين الثقافة العربية والثقافة الإنجليزية:** الاطلاع الواسع على روائع الأدب الغربي الرومانسي (كولردج، بايرون، وشيلي).
2. **التطلع في طموح إلى الآفاق وتجاوز آمال عصرهم:** مما ولد لديهم شعوراً بالعجز واليأس والتشاؤم أمام الاستعمار.
3. **وضوح الجانب الفكري والعقلاني:** التعمق في أسرار الكون، والبحث في ما وراء الظواهر الطبيعية.
4. **الصدق في التعبير وتجنب شعر المناسبات والمجاملات:** وهاجموا الكلاسيكيين بعنف على نظمهم للمدائح والتهاني.
5. **استحداث موضوعات جديدة:** كتبوا في موضوعات غير مألوفة في الشعر العربي كـ (رثاء المازني لنفسه، ورجل المرور للعقاد).

### المأخذ النقدي الجوهري على شعراء الديوان:
* **طغيان الجانب الفكري والذهنية الجافة:** غلبة التفكير العقلي والتحليل المنطقي والفلسفي على عاطفة الشعر، مما جعل كثيراً من قصائدهم تتسم بالجفاف والبرود وتخلو من حرارة الانفعال الشعوري ودفء الوجدان.

### نهاية مدرسة الديوان وتفككها:
* اختلف شكري والمازني حول قضايا أدبية وانضم العقاد للمازني ضد شكري.
* توقف شكري عن قول الشعر بعد ديوانه "أزهار الخريف"، وانصرف المازني إلى الصحافة والرواية، وبقي العقاد وحده يمثل الاتجاه وغلبت عليه الكتابات النثرية الفلسفية والإسلامية (العبقريات).`,
        contentEn: `### Stylistic Tenets of the Diwan School:
1. Synthesis of classical Arabic culture with English literary heritage.
2. Aspiration toward unreachable ideals breeding existential melancholy.
3. Ascendancy of intellectual inquiry and cosmic contemplation.
4. Emotional sincerity and militant repudiation of ceremonial eulogies.
5. Novel mundane and psychological topics (Aqqad's "Traffic Policeman", Mazini's elegy for himself).
### Cardinal Critical Shortcoming:
- Tyranny of dry cerebral intellectualism and philosophical detachment cooling lyric warmth.
### Dissolution of the Movement:
Internal polemics fractured the group; Shukri ceased writing, Mazini pivoted to journalistic prose, and Al-Aqqad focused on monumental Islamic historical monographs (Al-Abqariyat).`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4 من 4: استنتاج أثر الذهنية الجافة في شعر العقاد والديوانيين',
          titleEn: 'Worked Example 4 of 4: Identifying Dry Cerebral Intellectualism in Diwan Verse',
          equation: 'المأخذ النقدي للديوان = طغيان الفلسفة والتحليل العقلي المنطقي على حساب حرارة العاطفة ودفء الإحساس',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول العقاد في التأمل الفلسفي للعقل والكون:\n"وَالعَقْلُ فِي صَرْحِ البَصِيرَةِ حَاكِمٌ ... يَزِنُ الوُجُودَ بِمَنْطِقٍ وَدَلِيلِ\nمَا قِيمَةُ الإِحْسَاسِ دُونَ تَأَمُّلٍ ... يَجْلُو الغُمُوضَ بِفِكْرَةٍ وَسَبِيلِ"',
              textEn: 'Al-Aqqad philosophizing: "The intellect in the citadel of insight governs, weighing existence through logic and evidence..."'
            },
            {
              stepNumber: 2,
              textAr: 'النقد الأدبي المعتمد: يبدو البيت كأنه مقطوعة فلسفية أو حكمة منطقية مجردة؛ فقد طغت المعاني العقلية والتجريد الذهني (العقل، المنطق، الدليل) على الصور الشعرية والمشاعر، مما يؤكد مأخذ النقاد على الديوانيين بغلبة الجفاف الفكري على دفء الشعر.',
              textEn: 'Critical evaluation: Resembles philosophical exposition devoid of emotional resonance, illustrating how intellectual abstraction chilled Diwan lyricism.'
            }
          ],
          takeawayAr: 'رغم عمق أفكار الديوانيين، أفقدهم الإفراط في الفلسفة والذهنية حرارة العاطفة الشعرية.',
          takeawayEn: 'Excessive philosophical cerebralism deprived Diwan verse of immediate emotive empathy.'
        }
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
      id: 'quiz-hlit12-2',
      titleAr: 'اختبار الاتجاه الوجداني والديوان',
      titleEn: 'Romanticism & Diwan School Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما العيب الأسلوبي الذي أُخذ على شعراء مدرسة الديوان (العقاد والمازني وشكري) في نتاجهم الشعري؟',
          textEn: 'What stylistic flaw was critically attributed to the poetry of the Diwan school poets?',
          optionsAr: ['الاهتمام الزائد بشعر المناسبات والمجاملات', 'غلبة الجانب الفكري والذهنية الجافة على العاطفة', 'كثرة الأخطاء اللغوية والنحوية', 'التقليد الأعمى للشعر الجاهلي القديم'],
          optionsEn: ['Excessive focus on ceremonial occasions', 'Predominance of dry cerebral intellectualism over emotion', 'Frequent grammatical inaccuracies', 'Blind imitation of archaic pre-Islamic tropes'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'غلب على شعر مدرسة الديوان التعمق في الفلسفة والتفكير العقلاني، فطغت الذهنية الجافة والعقلانية على العاطفة ودفء المشاعر.',
          explanationEn: 'The Diwan poets leaned heavily toward philosophical abstraction, resulting in dry cognitive intellectualism cooling emotional fervor.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: مدرسة أبوللو ومدرسة المهاجر والمدرسة الواقعية ──
  {
    id: 'h-lit12-3',
    order: 3,
    titleAr: 'المحاضرة 3: مدرسة أبوللو وشعراء المهاجر والمدرسة الواقعية الجديدة (شعر التفعيلة)',
    titleEn: 'Lecture 3: Apollo School, Mahjar Diaspora & The New Realist Movement',
    subtitleAr: 'أحمد زكي أبو شادي وإبراهيم ناجي، الرابطة القلمية والعصبة الأندلسية، والتحول إلى شعر التفعيلة الحر',
    subtitleEn: 'Master Apollo\'s lyrical romanticism, diaspora longing and existential mysticism, and the modernist free-verse revolution.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: مدارس الشعر العربي الحديث',
    unitTitleEn: 'Unit 1: Modern Arabic Poetic Movements',
    lessonNumberAr: 'الدرس 3: مدرسة أبوللو والمهاجر والواقعية',
    lessonNumberEn: 'Lesson 3: Apollo, Mahjar & Contemporary Realism',

    warmupHookAr: 'حين هاجر أدباء الشام ولبنان إلى الأمريكتين الشمالية والجنوبية هرباً من الفقر والاضطهاد العثماني، أسس جبران خليل جبران وميخائيل نعيمة وإيليا أبو ماضي "الرابطة القلمية" في نيويورك! كتبوا شعراً يفيض بالحنين الجارف إلى الوطن والتأمل الإنساني الروحي العميق. وبعد الحرب العالمية الثانية، زلزلت النكبة الفلسطينية والواقع السياسي أركان العالم العربي، فظهرت "المدرسة الواقعية" لتهدم نظام الشطرين وتعلن ولادة "شعر التفعيلة"! كيف تطورت القصيدة من الرومانسية الحالمة إلى مواجهة الواقع الحي؟',
    warmupHookEn: 'Exiled in the Americas, Mahjar poets revolutionized Arabic literary consciousness with spiritual mysticism. Following WWII and the 1948 catastrophe, Realist poets dismantled the ancient dual-hemistich system, giving birth to free-verse Taf\'ila poetry.',

    learningOutcomesAr: [
      'أن يوضح الطالب ظروف نشأة مدرسة أبوللو (1932م) بزعامة أحمد زكي أبو شادي وإبراهيم ناجي وعلي محمود طه',
      'أن يحلل السمات الفنية لأبوللو: استعمال اللغة استعمالاً جديداً بدلالات الألفاظ، والتشخيص والتجسيم، وحب الطبيعة والحزن والتشاؤم',
      'أن يميز بين شعراء المهاجر في أمريكا الشمالية (الرابطة القلمية - التجديد الثوري والتساهل اللغوي) وأمريكا الجنوبية (العصبة الأندلسية - المحافظة على التراث)',
      'أن يستنتج أسباب ظهور المدرسة الواقعية الجديدة بعد الحرب العالمية الثانية لمواكبة الواقع وقضايا الجماهير',
      'أن يوضح الخصائص الفنية للشعر الواقعي الحر: التحرر من القافية الموحدة، الاعتماد على التفعيلة الواحدة، السطر الشعري، والرمز والأسطورة'
    ],
    learningOutcomesEn: [
      'Detail origins of the Apollo Movement (1932) led by Ahmed Zaki Abu Shadi, Ibrahim Naji, and Ali Mahmoud Taha',
      'Analyze Apollo stylistic innovations: novel sensory linguistic synesthesia, personification, elegiac melancholy, and pastoral nature',
      'Contrast Mahjar diaspora groups: The Pen League (New York radical modernists) vs Andalusian League (São Paulo conservative classicists)',
      'Explain post-WWII geopolitical shifts catalyzing the emergence of Realist poetry to voice public collective struggle',
      'Identify free-verse Realist hallmarks: breaking dual hemistichs, single foot (Taf\'ila) repetition, metric lines, and symbolic mythological allusions'
    ],

    vocabulary: [
      {
        termAr: 'تراسل الحواس (Synesthesia)',
        termEn: 'Synesthesia (Tarasul al-Hawas)',
        definitionAr: 'ظاهرة أسلوبية عند مدرسة أبوللو يتم فيها إعطاء حاسة وظيفة حاسة أخرى (مثل: العطر القمري، النغم المعطر، تذوق الضوء).',
        definitionEn: 'A poetic technique blending sensory perceptions: describing olfactory scents visually or auditory melodies aromatically.'
      },
      {
        termAr: 'شعر التفعيلة (Free-Verse Taf\'ila)',
        termEn: 'Free Verse (Taf\'ila Poetry)',
        definitionAr: 'شكل شعري حديث يعتمد على تكرار التفعيلة العروضية بعدد غير محدد في أسطر شعرية متفاوتة الطول دون الالتزام بنظام الشطرين.',
        definitionEn: 'Modern metric poetry based on an organic variable number of rhythmic feet (Taf\'ila) per line without dual hemistichs.'
      }
    ],

    sections: [
      {
        titleAr: '1. مدرسة أبوللو (1932م): النشأة والسمات الفنية واستعمال اللغة استعمالاً جديداً',
        titleEn: '1. Apollo Movement (1932): Origins, Poetics & Linguistic Innovation',
        contentAr: `### ظروف النشأة والريادة:
* تأسست **جمعية أبوللو** عام **1932م** وأصدرت مجلتها الشهيرة بريادة الدكتور **أحمد زكي أبو شادي**، والدكتور **إبراهيم ناجي**، وعلي محمود طه، ومحمود حسن إسماعيل.
* **سبب التسمية:** سميت (أبوللو) نسبة إلى "أبولو" إله النور والشعر والموسيقى عند اليونان؛ دلالة على التأثر بالثقافات الغربية والتطلع للتجديد الإنساني الشامل.

### أهم السمات والخصائص الفنية لمدرسة أبوللو:
1. **استعمال اللغة استعمالاً جديداً في دلالات الألفاظ والمجازات:**
   - مثل قولهم: (العطر القمري، الأريج الناعم، الشراع الأبيض، الجنة الضائعة، الأنفاس المحترقة).
   - **ظاهرة تراسل الحواس:** إعطاء حاسة وظيفة حاسة أخرى (كتذوق الضوء، أو سماع العطر).
2. **الميل إلى التجسيم والتشخيص:** تحويل المعنويات إلى مجسمات محسوسة، وإضفاء صفات الحياة والشخصية الإنسانية على الجمادات والطبيعة.
3. **الحنين الجارف إلى مواطن الذكريات والصبا:** كما في قصيدة "الأطلال" و"العودة" لإبراهيم ناجي.
4. **حب الطبيعة والولع بها ومناجاتها ومخاطبتها:** والتسمية بدلالاتها في عناوين الدواوين (أطياف الربيع، أغاني الكوخ، زهر الربيع).
5. **غلبة نغمة الحزن واليأس والتشاؤم والاستسلام للآلام:** حتى تخيلوا الموت راحة من شقاء الدنيا.`,
        contentEn: `### Origins & Pioneers of Apollo (1932):
Founded by Dr. Ahmed Zaki Abu Shadi, Ibrahim Naji, and Ali Mahmoud Taha; publishing the influential "Apollo" journal. Named after the Greek god of arts, epitomizing cosmopolitan romantic renewal.
### Stylistic Innovations:
1. Revolutionary linguistic usage: synesthesia (blending sensory receptors, e.g., "lunar fragrance") and evocative metaphors ("burning sighs").
2. Personification & hypostatization: transforming abstract ideas into palpable embodied entities.
3. Melancholic nostalgia for lost youth and childhood memories (Naji's "Al-Atlal").
4. Pastoral nature worship reflected in anthology titles ("Cottage Songs", "Spring Shades").
5. Pervasive tone of tragic existential pessimism and elegiac surrender.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1 من 4: تحليل تراسل الحواس والتجسيم عند شعراء أبوللو',
          titleEn: 'Worked Example 1 of 4: Analyzing Synesthesia & Personification in Apollo Poetry',
          equation: 'تراسل الحواس = خلط مدركات الحواس (حاسة السمع أو البصر تدرك بالشم أو الذوق)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول الشاعر إبراهيم ناجي في استحضار الذكريات العاطفية:\n"رَفْرَفَ القَلْبُ بِجَنْبِي كَالذَّبِيحْ ... وَأَنَا أَهْتِفُ: يَا قَلْبُ اتَّئِدْ\nفَيُجِيبُ الدَّمْعُ وَالمَاضِي الجَرِيحْ: ... لِمَ عُدْنَا؟ أَوْ لِمَاذَا نَبْتَئِسْ؟"',
              textEn: 'Ibrahim Naji in "Al-Atlal": "My heart fluttered by my side like a slaughtered bird, as tears and the wounded past answered..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل الأدبي والبلاغي: جسد الشاعر خفقان القلب الحسي بصورة ذبيح ينتفض، ثم شخّص "الدمع" و"الماضي الجريح" كإنسان ينطق ويجيب متسائلاً عن جدوى البكاء، مبرزاً قمة التجسيم والتشخيص والنزعة الحزينة التي ميزت مدرسة أبوللو.',
              textEn: 'Analysis: Features visceral hypostatization of the fluttering heart and personification of tears and time, exemplifying Apollo\'s melancholic introspection.'
            }
          ],
          takeawayAr: 'انفردت أبوللو بالتصوير الحسي المبتكر (تراسل الحواس والتشخيص) ومناجاة الوجدان الحزين.',
          takeawayEn: 'Apollo was distinguished by novel synesthetic imagery, personification, and heartfelt melancholy.'
        }
      },
      {
        titleAr: '2. أدب المهجر: المقارنة بين الرابطة القلمية والعصبة الأندلسية وخصائص شعر المهجر',
        titleEn: '2. Mahjar Diaspora: The Pen League vs Andalusian League & Hallmarks',
        contentAr: `### أسباب الهجرة وظروف نشأة أدب المهجر:
هاجر كثير من أبناء الشام ولبنان في منتصف القرن التاسع عشر ومطلع القرن العشرين إلى الأمريكتين بدافع: الاضطهاد السياسي والعثماني، الفقر وضيق العيش، والبحث عن الحرية والكرامة.

### المقارنة الدقيقة بين جماعتي المهجر:
1. **الرابطة القلمية (أمريكا الشمالية - نيويورك 1920م):**
   - **الرواد:** جبران خليل جبران (رئيسها)، ميخائيل نعيمة (مستشارها)، إيليا أبو ماضي (أمير شعرائها).
   - **المنهج الفني:** ثورة جذرية على القديم، دعوة للتجديد الشامل في المضمون والشكل، والتساهل في قواعد اللغة والعروض طلباً لحرية التعبير.
2. **العصبة الأندلسية (أمريكا الجنوبية - البرازيل 1932م):**
   - **الرواد:** رشيد خوري (الشاعر القروي)، شفيق المعلوف، فوزي المعلوف.
   - **المنهج الفني:** ظلت أكثر تمسكاً برصانة اللغة العربية التراثية، وأوزان الشعر الخليلية، ومحاكاة التراث الأندلسي العريق.

### أهم الخصائص المضمونية لأدب المهجر:
* **النزعة الإنسانية العامة:** الإيمان بالأخوة والعدل والمحبة بين بني البشر.
* **استبطان النفس الإنسانية:** والتأمل في الخير والشر، والحياة والموت.
* **الحنين الجارف إلى الوطن العربي الأم:** التغني بذكريات القرية والشوق للأهل.
* **النزعة الروحية:** اللجوء إلى الله بالشكوى والدعاء للتخلص من مادية الغرب الصاخبة.`,
        contentEn: `### Catalysts of Mahjar Emigration:
Fleeing Ottoman political tyranny, sectarian strife, and poverty toward the Americas seeking liberty.
### Comparative Analysis of Diaspora Leagues:
1. The Pen League (New York 1920): Gibran Khalil Gibran, Mikhail Naimy, Elia Abu Madi. Radical modernist manifesto revolting against classical meters with syntactic liberties.
2. The Andalusian League (São Paulo 1932): Rashid Khouri, Shafiq Maloof. Preserved classical linguistic purity and traditional metric elegance.
### Key Thematic Hallmarks:
- Universal humanist fraternity.
- Psychological existential introspection.
- Intense homesickness for native Levant villages.
- Spiritual mysticism countering Western industrial materialism.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2 من 4: تحليل الحنين واستبطان النفس في شعر إيليا أبو ماضي',
          titleEn: 'Worked Example 2 of 4: Introspection & Philosophical Wonder in Elia Abu Madi',
          equation: 'أدب المهجر = الحنين الجارف للوطن + التأمل الوجودي العميق + النزعة الإنسانية الروحية',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول إيليا أبو ماضي في قصيدته الفلسفية الخالدة "الطلاسم":\n"جِئْتُ لا أَعْلَمُ مِنْ أَيْنَ، وَلَكِنِّي أَتَيْتُ ... وَلَقَدْ أَبْصَرْتُ قُدَّامِي طَرِيقاً فَمَشَيْتُ\nوَسَأَبْقَى مَاشِياً إِنْ شِئْتُ هَذَا أَمْ أَبَيْتُ ... كَيْفَ جِئْتُ؟ كَيْفَ أَبْصَرْتُ طَرِيقِي؟ لَسْتُ أَدْرِي!"',
              textEn: 'Elia Abu Madi in "Al-Talasim": "I arrived not knowing whence, but I have arrived; and beheld before me a path, so I walked..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل الأدبي والفكري: يمثل النص ذروة استبطان النفس البشرية والبحث في لغز الوجود والمصير الإنساني، مع اعتماد لغة سهلة قريبة من لغة الحياة الحية، خالية من التعقيد اللفظي، وهو جوهر التجديد المهجري.',
              textEn: 'Critical insight: Embodies deep existential questioning of human purpose delivered in lucid, unpretentious diction.'
            }
          ],
          takeawayAr: 'تميز أدب المهجر بعمق التأمل الإنساني الروحي والتعبير السلس المتحرر من الصنعة الجافة.',
          takeawayEn: 'Mahjar poetry combined spiritual contemplation with fluid diction free of archaic ornamentation.'
        }
      },
      {
        titleAr: '3. المدرسة الواقعية الجديدة (شعر التفعيلة والتحول بعد الحرب العالمية الثانية)',
        titleEn: '3. The Contemporary Realist Movement & Free Verse (Post-WWII Paradigm Shift)',
        contentAr: `### عوامل التحول من الرومانسية إلى الواقعية:
* **الصدمات التاريخية والسياسية:** نهاية الحرب العالمية الثانية (1945م)، ونكبة فلسطين (1948م)، وثورات التحرر الوطني في مصر والجزائر والعالم العربي.
* أدرك الشعراء أن الرومانسية الحالمة والاستغراق في الأحزان الذاتية لم يعودا كافيين لمواجهة واقع الأمة السياسي والاجتماعي المرير.
* تراجع التيار الرومانسي ليحل محله **التيار الواقعي الجديد** الذي اتجه لمعايشة هموم الجماهير وقضايا العدالة والحرية والكرامة الوطنية.

### رواد حركة الشعر الجديد (شعر التفعيلة):
* **العراق:** الشاعرة **نازك الملائكة** (بقصيدتها التاريخية "الكوليرا" عام 1947م)، والشاعر الكبير **بدر شاكر السياب** ("أنشودة المطر").
* **مصر:** صلاح عبد الصبور ("الناس في بلادي")، وأحمد عبد المعطي حجازي ("مدينة بلا قلب").
* **فلسطين والشام:** محمود درويش، وسميح القاسم، ونزار قباني، وأدونيس.`,
        contentEn: `### Catalysts of the Realist Transition:
Post-WWII sociopolitical upheavals, the 1948 Palestinian catastrophe (Nakba), and anti-colonial revolutions rendered romantic escapism obsolete.
Poets embraced contemporary realism to confront collective public struggles: social equity, freedom, and national sovereignty.
### Pioneers of Taf'ila Free Verse:
- Iraq: Nazik al-Malaika ("Cholera", 1947), Badr Shakir al-Sayyab ("Rain Song").
- Egypt: Salah Abdel Sabour ("People in My Homeland"), Ahmed Abdel Muti Hijazi.
- Palestine & Levant: Mahmoud Darwish, Samih al-Qasim, Adonis.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3 من 4: تحليل التحول إلى قضايا الجماهير عند صلاح عبد الصبور',
          titleEn: 'Worked Example 3 of 4: Depicting Collective Realities in Salah Abdel Sabour',
          equation: 'الشعر الواقعي = الالتحام بنبض الجماهير + معالجة الفقر والظلم + التحرر من الرومانسية الفردية',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول صلاح عبد الصبور في ديوانه "الناس في بلادي":\n"فَالنَّاسُ فِي بِلادِي يَصْنَعُونَ الحُبَّ ... بِالصَّبْرِ وَالأَنِينْ\nيَبْنُونَ مَنْزِلاً صَغِيراً طَيِّباً ... وَيُشْعِلُونَ نَارَ حُبٍّ لا يُطْفِئُهُ الشِّتَاءُ\nوَيَسْأَلُونَ عَنْ غَدٍ كَأَنَّهُ غَرِيبْ"',
              textEn: 'Salah Abdel Sabour in "People in My Homeland": "The people in my homeland forge love with patience and endurance..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل والنقد: نزل الشاعر من برج الرومانسية العاجي إلى واقع الفلاحين والبسطاء، مصوراً معاناتهم وصبرهم وأملهم المشوب بالحذر، دون زينة بيانية متكلفة، بل بنبض شعبي حي وتفعيلة حرة مرنة.',
              textEn: 'Analysis: Descended from romantic ivory towers into the everyday struggles of working people, utilizing flexible rhythmic feet.'
            }
          ],
          takeawayAr: 'انتقل الشعر الواقعي من البكاء على الذات إلى التعبير عن هموم الشعب والعدالة الاجتماعية.',
          takeawayEn: 'Realist poetry transitioned from self-absorbed grief to championing sociopolitical justice.'
        }
      },
      {
        titleAr: '4. الخصائص الفنية والموسيقية للشعر الواقعي (السطر الشعري، التفعيلة، والرمز)',
        titleEn: '4. Structural & Sonic Hallmarks of Realist Poetry (Lines, Taf\'ila & Symbolism)',
        contentAr: `### البناء الموسيقي والشكل الهندسي للشعر الجديد:
1. **الاعتماد على "التفعيلة" كوحدة موسيقية أساسية:**
   - إلغاء نظام الشطرين المتساويين (الصدر والعجز).
   - تكرار التفعيلة بعدد يتفاوت في كل سطر حسب تمام المعنى ودفقة الشعور (فقد يحتوي السطر على تفعيلة واحدة، أو اثنتين، أو أربع).
2. **السطر الشعري بدلاً من البيت التقليدي:**
   - يتحدد طول السطر الشعري باكتمال المعنى العاطفي وليس بعدد محدد من التفعيلات.
3. **التحرر من القافية الموحدة الصارمة:**
   - استخدام قوافي متعددة ومتنوعة داخل القصيدة الواحدة تفادياً للملل والرتابة الموسيقية.
4. **توظيف الرمز والأسطورة الشعبية والتاريخية:**
   - استخدام الرموز (مثل: السندباد، عشتار، تموز، زرقاء اليمامة) للتعبير عن قضايا البعث الحضاري والتحدي القومي.
5. **اللغة الحية الحيوية:** استخدام كلمات من لغة التخاطب اليومي لإشعار القارئ بحميمية النص وواقعيته.`,
        contentEn: `### Structural & Musical Innovations:
1. Reliance on the single metric foot (Taf'ila) as rhythmic building block, abandoning rigid dual hemistichs.
2. Poetic Line replacing traditional distich; line length dictated strictly by emotional-cognitive completion.
3. Fluid multirhyme schemes replacing monorhyme monotony.
4. Pervasive historical and mythological symbolism (Tammuz, Ishtar, Sinbad) symbolizing cultural renaissance.
5. Conversational living language engaging readers directly.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4 من 4: تحليل الأسطر الشعرية والتفعيلة والرمز عند بدر شاكر السياب',
          titleEn: 'Worked Example 4 of 4: Analyzing Metric Lines, Taf\'ila & Myth in Al-Sayyab',
          equation: 'هندسة شعر التفعيلة = أسطر متفاوتة الطول + تكرار بحر الخبب أو الرمل + رمز المطر والخصب',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول بدر شاكر السياب في رائعته "أنشودة المطر":\n"عَيْنَاكِ غَابَتَا نَخِيلٍ سَاعَةَ السَّحَرْ،\nأَوْ شُرْفَتَانِ رَاحَ يَنْأَى عَنْهُمَا القَمَرْ.\nعَيْنَاكِ حِينَ تَبْسِمَانِ تُورِقُ الكُرُومْ،\nوَتَرْقُصُ الأَضْوَاءُ... كَالْأَقْمَارِ فِي نَهَرْ\nمَطَرٌ... مَطَرٌ... مَطَرٌ..."',
              textEn: 'Badr Shakir al-Sayyab in "Rain Song": "Your eyes are two palm groves at the hour of dawn... Rain... rain... rain..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل العروضي والرمزي: اعتمد السياب على بحر الرمل وتفعيلته المتكررة (فاعلاتن)، وتراوح عدد التفعيلات بين الأسطر حسب تدفق الإحساس، وجعل "المطر" رمزاً مركباً للثورة، والخصب، وانبعاث العراق والوطن العربي من ركوده.',
              textEn: 'Prosodic and symbolic analysis: Built on repeated Ramal feet (Fa\'ilatun) with variable line lengths; rain functions as an enduring symbol of rebirth.'
            }
          ],
          takeawayAr: 'جسد السياب ثورة شعر التفعيلة بإيقاعها الحر الموسيقي ورموزها الإنسانية الخالدة.',
          takeawayEn: 'Al-Sayyab epitomized the free verse revolution through fluid prosody and timeless evocative symbolism.'
        }
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
      id: 'quiz-hlit12-3',
      titleAr: 'اختبار أبوللو والمهاجر والواقعية',
      titleEn: 'Apollo, Mahjar & Realism Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما الأساس الموسيقي والعروضي الذي بنيت عليه قصائد المدرسة الواقعية (الشعر الحر)؟',
          textEn: 'What metric foundation underpins the compositions of the Realist / Free Verse movement?',
          optionsAr: ['الالتزام بنظام الشطرين المتساويين وقافية موحدة', 'الاعتماد على تكرار التفعيلة الواحدة في أسطر شعرية متفاوتة', 'الشعر المنثور الخالي تماماً من أي إيقاع عروضي', 'العودة لبحور الشعر الجاهلي المركبة كالبسيط والطويل حصراً'],
          optionsEn: ['Strict dual hemistichs with monorhyme', 'Repeating a single rhythmic foot (Taf\'ila) across variable lines', 'Unmetered prose poetry', 'Exclusively returning to archaic compound meters'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'اعتمدت المدرسة الواقعية على وحدة التفعيلة، حيث تتكرر التفعيلة الموسيقية في السطر الشعري بحسب تمام الفكرة دون الالتزام بعدد محدد أو شطرين.',
          explanationEn: 'Realist free verse relies on the single Taf\'ila unit repeated across poetic lines of variable length conforming organically to meaning.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: فنون النثر العربي الحديث (المقال، الرواية، القصة، والمسرحية) ──
  {
    id: 'h-lit12-4',
    order: 4,
    titleAr: 'المحاضرة 4: فنون النثر العربي الحديث (المقال، الرواية، القصة القصيرة، والمسرحية)',
    titleEn: 'Lecture 4: Modern Arabic Prose Arts: Essay, Novel, Short Story & Drama',
    subtitleAr: 'نشأة الرواية العربية (زينب لهيكل)، تقنيات القصة القصيرة (مبدأ التكثيف والوحدة)، وعناصر العمل المسرحي',
    subtitleEn: 'Master prose fiction evolution, narrative architectonics, short story compression, and theatrical conflict.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: فنون النثر العربي المعاصر',
    unitTitleEn: 'Unit 2: Modern Arabic Prose Genres',
    lessonNumberAr: 'الدرس 4: المقال والرواية والقصة القصيرة والمسرحية',
    lessonNumberEn: 'Lesson 4: Narrative Fiction & Dramatic Arts',

    warmupHookAr: 'حين نال الأديب العربي العالمي "نجيب محفوظ" جائزة نوبل في الأدب عام 1988 عن ثلاثيته الشهيرة (بين القصرين، قصر الشوق، السكرية)، أثبت للعالم أجمع أن فن الرواية العربية بلغ الذروة العالمية في رصد الواقع وتجسيد نبض الحارة المصرية والإنسانية! ولكن كيف بدأت الرواية العربية برواية "زينب" لمحمد حسين هيكل عام 1914؟ وما الفارق الجوهري الفارق بين الرواية والقصة القصيرة؟ ولماذا لا تقوم أي مسرحية بدون صراع؟',
    warmupHookEn: 'When Naguib Mahfouz won the Nobel Prize in Literature in 1988 for his Cairo Trilogy, modern Arabic fiction took center stage globally. Explore the evolution of Arabic narrative prose from Haykal\'s "Zaynab" to the technical compression of the short story and the dramatic tension of the stage.',

    learningOutcomesAr: [
      'أن يوضح الطالب أثر الصحافة الحديثة في تطور أسلوب المقال العربي وتخليصه من المحسنات البديعية المتكلفة',
      'أن يعرف الرواية (Novel) بوصفها عملاً سردياً طويلاً يحاكي الواقع في الشخصيات والزمان والمكان واللغة والأحداث',
      'أن يحلل ميلاد الرواية العربية الرائدة "زينب" لمحمد حسين هيكل (1914م) ودور نجيب محفوظ في وصولها للعالمية',
      'أن يميز بين الرواية والقصة القصيرة من حيث الحجم، والزمن، واللغة، ومبدأ التكثيف والتركيز الشديد (لحظة التنوير)',
      'أن يحدد العناصر البنائية للمسرحية (الفكرة، الحكاية، الشخصيات، الحوار، والصراع الدرامي الذي هو قوام المسرحية)'
    ],
    learningOutcomesEn: [
      'Assess the influence of modern journalism in making Arabic essays direct, lucid, and devoid of archaic ornamentation',
      'Define the Novel as an extended narrative emulating realistic sociology in character, setting, dialogue, and temporal flow',
      'Trace landmarks from Muhammad Husayn Haykal\'s "Zaynab" (1914) to Naguib Mahfouz\'s Nobel victory',
      'Contrast novels with short stories regarding narrative scope, compression principle, and the epiphanic moment of illumination',
      'Identify dramatic architectural pillars: premise, plot, characterization, dialogue, and essential dramatic conflict'
    ],

    vocabulary: [
      {
        termAr: 'محاكاة الواقع (Realistic Verisimilitude)',
        termEn: 'Realism / Verisimilitude',
        definitionAr: 'أن تكون أحداث الرواية وشخصياتها وأزمنتها وأماكنها ولغتها مما يجري في بيئة الناس المعاشة وليست خوارق أسطورية.',
        definitionEn: 'The aesthetic imperative that narrative events, characters, settings, and dialogue mirror plausible human reality.'
      },
      {
        termAr: 'لحظة التنوير (Moment of Epiphany)',
        termEn: 'Epiphanic Illumination',
        definitionAr: 'اللحظة الحاسمة والمكثفة في نهاية القصة القصيرة التي ينكشف فيها المعنى العميق للحدث في ومضة إدراك مفاجئة.',
        definitionEn: 'The climactic flash in a short story where underlying emotional or thematic truth is instantaneously unveiled.'
      }
    ],

    sections: [
      {
        titleAr: '1. الرواية العربية ومحاكاة الواقع من "زينب" إلى نوبل لنجيب محفوظ',
        titleEn: '1. The Arabic Novel: Realism from "Zaynab" to Naguib Mahfouz\'s Nobel',
        contentAr: `### مفهوم الرواية ومحاكاة الواقع:
* **الرواية (The Novel):** جنس أدبي نثري سردي طويل، يتميز بحكايته لواقع متكامل ومفصل.
* **المقصود بمحاكاة الواقع (Verisimilitude):**
  1. **الأحداث:** أصبحت من قبيل ما يجري في الحياة المعيشة، وليست خوارق أسطورية أو خيالات بعيدة.
  2. **الشخصيات:** من طينة البشر الذين يعيشون بيننا (فلاحين، موظفين، تجار)، وليست كائنات خرافية.
  3. **الأماكن:** بيئات جغرافية محددة وواقعية (مثل أحياء القاهرة: الحسين، بين القصرين، خان الخليلي).
  4. **الزمان:** معلوم ومحدد بتاريخ حقيقي أو أحداث تاريخية وأزمنة مشهورة (كيوم، شهر، أو سنة).
  5. **اللغة:** أصبحت لغة حية قريبة مما يتخاطب به الناس في حياتهم اليومية.

### مسيرة الرواية العربية:
* **البداية والريادة:** ظهرت أول رواية عربية فنية مكتملة الأركان عام **1914م** وهي رواية **"زينب"** للدكتور **محمد حسين هيكل**، مصورة الريف المصري وأخلاقه وعاداته.
* **الذروة والعالمية:** بلغت الرواية قمة نضجها وتألقها على يد أديب نوبل العربي **نجيب محفوظ**، الذي نال **جائزة نوبل في الأدب عام 1988م** تقديراً لإبداعه السردي، خاصة في **"الثلاثية"** الخالدة (بين القصرين، قصر الشوق، السكرية).`,
        contentEn: `### Definition & Realistic Verisimilitude:
The Novel is an extended prose narrative defined by sociological realism:
1. Plausible human events replacing mythical fantasy.
2. Human characters of everyday flesh and blood (merchants, clerks, farmers).
3. Specific geographic settings (e.g., Cairo's historical alleys).
4. Verifiable historical temporality.
5. Living accessible contemporary idiom.
### Landmarks of the Arabic Novel:
- Pioneering debut: Muhammad Husayn Haykal's "Zaynab" (1914), depicting rural Egypt.
- Global pinnacle: Naguib Mahfouz winning the 1988 Nobel Prize in Literature for his immortal Cairo Trilogy.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1 من 4: تحليل عناصر محاكاة الواقع في روايات نجيب محفوظ',
          titleEn: 'Worked Example 1 of 4: Analyzing Realistic Verisimilitude in Naguib Mahfouz',
          equation: 'محاكاة الواقع الروائي = شخصيات من البشر + مكان جغرافي محدد (خان الخليلي) + لغة حية معاصرة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'في مطلع ثلاثية نجيب محفوظ يصف بيت السيد أحمد عبد الجواد في حي بين القصرين بالقاهرة، وحركة الساعات، وأصوات الباعة في الفجر، والعلاقات الأسرية اليومية بدقة بالغة.',
              textEn: 'In his Trilogy, Mahfouz chronicles the household of Ahmad Abd al-Jawad in historic Cairo with ethnographic granularity.'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل النقدي: يعتمد محفوظ على التفاصيل الحية الدقيقة التي تشعر القارئ بأنه يعيش في قلب الحارة المصرية، حيث ترتبط تصرفات الشخصيات بالزمان التاريخي (ثورة 1919) والمكان الواقعي، محققاً أرقى معايير محاكاة الواقع الروائي.',
              textEn: 'Critical analysis: Concrete historical milestones (1919 Revolution) and authentic urban geography anchor the characters in indisputable realism.'
            }
          ],
          takeawayAr: 'محاكاة الواقع في الرواية تقتضي واقعية الأحداث والشخصيات والأزمنة والأمكنة واللغة.',
          takeawayEn: 'Novelistic realism necessitates plausible human characters, authentic time-space coordinates, and living diction.'
        }
      },
      {
        titleAr: '2. فن القصة القصيرة: المفهوم والتكثيف والتركيز ولحظة التنوير مقارنة بالرواية',
        titleEn: '2. The Short Story: Compression, Focus, Epiphany & Novel Contrast',
        contentAr: `### مفهوم القصة القصيرة:
* هي عمل فني نثري موجز يتميز بـ **المرونة** من حيث الحجم؛ فقد تُقرأ في زمن يمتد من بضع دقائق إلى ساعتين، وتتراوح من أقل من ألف كلمة إلى بضعة آلاف.
* **ليست اختصاراً للرواية:** القصة القصيرة جنس أدبي مستقل له بناؤه الفني الخاص، وليست مجرد تلخيص لرواية طويلة.

### الفوارق الجوهرية بين الرواية والقصة القصيرة:
1. **الرواية:** تقدم حياة كاملة لشخصية أو شخصيات متعددة، تمتد عبر أزمنة طويلة (سنوات أو عقود)، وتتعدد فيها الأماكن، وتتسم لغتها بـ **الإسهاب والإطالة** والوصف التفصيلي.
2. **القصة القصيرة:** تركز على **لقطة واحدة** أو حدث مفرد أو لحظة شعورية مكثفة، وتتسم لغتها بـ **الإيجاز الشديد والتركيز والتكثيف**؛ فكل كلمة مقصودة ومحسوبة، كما قال الكاتب الأمريكي إدغار آلان بو: "لا يمكن حذف جملة أو كلمة من القصة القصيرة دون أن يتأثر بناؤها الفني".

### لحظة التنوير (Epiphany):
هي اللحظة الحاسمة في ختام القصة القصيرة التي ينكشف فيها المعنى العميق للحدث والهدف النفسي أو الأخلاقي في ومضة خاطفة ومؤثرة تترك أثراً انطباعياً واحداً في ذهن القارئ.`,
        contentEn: `### Definition & Nature of the Short Story:
An autonomous, highly compressed literary genre readable in a single sitting (minutes to two hours). It is definitely NOT an abbreviated novel.
### Structural Contrast:
- Novel: Expansive panoramic scope, multi-layered character arcs spanning decades, extensive digressive descriptive prose.
- Short Story: Laser-focused illumination of a single epiphanic incident; governed by strict economy where no sentence is superfluous.
### The Moment of Epiphany:
The climactic revelation in the denouement where central human significance crystallizes in an instantaneous flash of insight.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2 من 4: المقارنة الفنية بين الرواية والقصة القصيرة وتطبيق مبدأ التكثيف',
          titleEn: 'Worked Example 2 of 4: Structural Contrast & The Principle of Aesthetic Compression',
          equation: 'القصة القصيرة = حدث مفرد مكثف + شخصية واحدة أساسية + لغة مركزة وموجزة + لحظة تنوير سريعة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'قصة "نظرة" للأديب الكبير يوسف إدريس: تدور حول طفلة صغيرة خادمة تحمل فوق رأسها صينية بطاطس ثقيلة وحوض غسيل، وتتوقف لحظة لتراقب أطفالاً يلعبون الكرة، ثم تنصرف.',
              textEn: 'Yusuf Idris\'s masterwork "A Glance": A destitute child maid balancing a heavy basin pauses to watch carefree children playing.'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل والملاحظة البلاغية: النص استغرق صفحة واحدة فقط، واقتصر على شخصية واحدة ولحظة زمنية عابرة (نظرة)، لكنه كثّف كل مأساة الطبقية والطفولة المسلوبة ببراعة لا تحتمل حذف حرف واحد، محققاً مبدأ التكثيف القصصي الخالص.',
              textEn: 'Literary critique: In barely a single page, Idris compresses the entirety of social inequality and stolen childhood through an irreplaceable economy of words.'
            }
          ],
          takeawayAr: 'القصة القصيرة فن التكثيف والانطباع الواحد والتركيز الشديد على لقطة محورية مكثفة.',
          takeawayEn: 'The short story is the art of extreme compression, delivering a single unified impression.'
        }
      },
      {
        titleAr: '3. فن المسرحية: المفهوم، الهيكل البنائي، والصراع الدرامي كقوام للعمل',
        titleEn: '3. Dramatic Theatre: Structure, Dialogue & Conflict as Core Foundation',
        contentAr: `### تعريف المسرحية:
قصة تمثيلية تعرض فكرة أو حدثاً من خلال **حوار** يدور بين شخصيات مختلفة، وتجسد على خشبة المسرح أمام الجمهور بحركات ومواقف متصارعة.
* **ارتباط المسرحية بالتمثيل:** لا يكتمل النص المسرحي ولا تظهر قيمته الحقيقية إلا حين يُشاهد مُمثلاً؛ فالتمثيل هو الذي يبعث الحياة في الكلمات المكتوبة.

### الهيكل البنائي للمسرحية (3 مراحل متتالية):
1. **العرض (Exposition):** يأتي في الفصل الأول للتعريف بموضوع المسرحية والشخصيات الرئيسية والمكان والزمان.
2. **التعقيد (Complication):** الطريقة التي تتتابع بها الأحداث وتتشابك حتى تصل إلى ذروة التأزم.
3. **الحل (Denouement):** ختام المسرحية الذي تنفرج فيه الأزمة وتصل الأحداث إلى نهايتها المنطقية.

### الصراع الدرامي (قوام المسرحية وروحها):
* الصراع هو العمود الفقري للمسرحية؛ فلا مسرح بلا صراع.
* ليس مجرد خلاف سطحي، بل هو **صراع معنوي فكري أو قيمي أو اجتماعي** بين الشخصيات حول مبدأ أو موقف (كصراع بين العدل والظلم، أو بين الحرية والاستبداد، أو بين العقل والعاطفة).`,
        contentEn: `### Definition & Nature of Drama:
A staged narrative enacted through character dialogue before an audience. Dramatic texts are conceived intrinsically for theatrical performance.
### Tripartite Structural Architecture:
1. Exposition: Introducing characters, setting, and foundational premise.
2. Complication: The escalation of entangled stakes reaching dramatic climax.
3. Denouement / Resolution: The logical resolution unfurling the crisis.
### Dramatic Conflict (The Lifeblood of Theatre):
No drama exists without conflict; it is the ethical, philosophical, or sociopolitical clash between competing convictions.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3 من 4: تحليل الصراع الدرامي في مسرحية "السلطان الحائر" لتوفيق الحكيم',
          titleEn: 'Worked Example 3 of 4: Analyzing Dramatic Conflict in Tawfiq al-Hakim\'s "The Perplexed Sultan"',
          equation: 'قوام المسرحية = شخصيات متحاورة + صراع درامي فكري (القانون والعدل ضد السيف والبطش)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'في مسرحية "السلطان الحائر" لتوفيق الحكيم، يكتشف السلطان المملوكي أنه لم يُعتق بعد من العبودية، ويقع في صراع حاد بين رأيين: استخدام السيف والقوة لحكم الرعية، أو الامتثال للقانون وبيع نفسه في المزاد العلني ليعتقه المشتري.',
              textEn: 'In "The Perplexed Sultan", the ruler faces a dramatic dilemma: enforce power through the sword, or validate legitimacy through the rule of law.'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل الدرامي: يمثل هذا الموقف جوهر "الصراع المسرحي الفكري"؛ فالمسرحية ليست مجرد كلام متبادل، بل تجسيد لصراع حضاري خالد: هل تسود المجتمعات بالقوة الغاشمة أم بسيادة القانون والعدالة؟',
              textEn: 'Deduction: Exemplifies elevated intellectual conflict—the timeless ethical struggle between raw autocratic might and constitutional jurisprudence.'
            }
          ],
          takeawayAr: 'الصراع الدرامي الفكري هو روح المسرحية وقوامها الأساسي الذي لا يقوم العمل بدونه.',
          takeawayEn: 'Dramatic philosophical conflict is the irreplaceable spine without which theatrical art collapses.'
        }
      },
      {
        titleAr: '4. فن المقال وأثر الصحافة في تطور النثر الحديث وأقسامه',
        titleEn: '4. The Essay (Al-Maqal): Journalistic Impact & Contemporary Taxonomy',
        contentAr: `### تعريف المقال (The Essay):
بحث قصير في العلم أو الأدب أو السياسة أو الاجتماع، يُنشر في صحيفة أو مجلة سيارة.

### أثر الصحافة الحديثة في تطور المقال والنثر العربي:
1. **تخليص الأسلوب العربي من التكلف والزخرفة:** تراجعت السجوع المتكلفة والمحسنات البديعية الجافة الموروثة من عصور الانحدار.
2. **سلاسة العبارة ووضوحها:** اتجه الكتاب إلى لغة حية فصيحة تجمع بين الرصانة وسهولة الفهم لجميع فئات القراء.
3. **تنوع موضوعات النثر:** معالجة المشكلات السياسية والوطنية، وقضايا المجتمع، والدفاع عن الهوية والحرية.

### تقسيمات المقال وفق المنهج الوزاري:
* **من حيث المضمون:**
  - **مقال اجتماعي:** يعالج قضايا الفقر، التعليم، الأسرة، والتربية (مثل مقالات أحمد أمين ومصطفى لطفي المنفلوطي).
  - **مقال سياسي:** يناهض الاستعمار ويدافع عن الحقوق الوطنية (مثل مقالات مصطفى كامل وعبد الله النديم).
  - **مقال أدبي نقدي:** يحلل الأعمال الإبداعية ويقوّمها فنياً (مثل مقالات طه حسين والعقاد والمازني).
* **من حيث الأسلوب:**
  - **الأسلوب الأدبي:** يفيض بالصور البيانية والعاطفة والموسيقى اللفظية العذبة.
  - **الأسلوب العلمي المتأدب:** يعرض الحقائق والمعلومات العلمية بأسلوب مشوق ودقيق يخلو من التعقيد.`,
        contentEn: `### Definition of the Essay:
A focused prose disquisition on literature, sociology, or politics published in periodicals.
### Impact of Modern Journalism:
1. Emancipating Arabic prose from archaic rhymed prose (Saj\') and contrived ornamentation.
2. Promoting clarity, journalistic precision, and syntactic fluidity accessible to broad audiences.
3. Diversifying subjects: sociopolitical critique, public enlightenment, and intellectual discourse.
### Essay Taxonomy:
- Thematic: Social, Political, and Literary-Critical.
- Stylistic: Pure Literary (metaphoric, affective) vs Literate Scientific (precise facts framed gracefully).`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4 من 4: تحليل خصائص المقال الأدبي عند أحمد حسن الزيات',
          titleEn: 'Worked Example 4 of 4: Analyzing Literary Essay Hallmarks in Ahmed Hassan al-Zayyat',
          equation: 'المقال الأدبي = سلامة الفكرة + روعة البيان والموسيقى الهادئة (الازدواج) + الإقناع والإمتاع',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول أحمد حسن الزيات في مقاله الاجتماعي الشهير "التكافل الاجتماعي في الإسلام":\n"كَانَتْ هَزِيمَةُ الفَقْرِ فِي الرِّيفِ أَيْسَرَ؛ لأَنَّ سُبُلَ الحَيَاةِ أَبْسَطُ، وَأَسْبَابَ العَيْشِ أَهْوَنُ، وَحَاجَاتِ النَّفْسِ أَقَلُّ".',
              textEn: 'Al-Zayyat in "Social Solidarity in Islam": "The defeat of rural poverty was simpler, for paths of life were plainer and material needs fewer."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل الأسلوبي: اعتمد الكاتب على "الازدواج الموسيقي الهادئ" (توازن الجمل وقصرها) والعبارات الموحية دون سجع متكلف، جامعاً بين الإقناع العقلي والإمتاع الفني، وهو نموذج المقال الأدبي الراقي في النثر الحديث.',
              textEn: 'Stylistic deduction: Employs gentle parallel phrasing (Izdiwaj) balancing cognitive persuasion with aesthetic pleasure without artificial Saj\'.'
            }
          ],
          takeawayAr: 'طوّرت الصحافة المقال ليصبح وسيلة رائدة للجمع بين عمق الفكرة وجمال الأسلوب والوضوح.',
          takeawayEn: 'Journalism refined the essay into a premier medium fusing analytical substance with stylistic clarity.'
        }
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
      id: 'quiz-hlit12-4',
      titleAr: 'اختبار فنون النثر الحديث',
      titleEn: 'Modern Prose Arts Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هو العنصر الفني الجوهري الذي يعتبر العمود الفقري وقوام أي عمل مسرحي حقيقي؟',
          textEn: 'What essential artistic element constitutes the core spine and foundation of any true theatrical drama?',
          optionsAr: ['كثرة الديكورات والأزياء على الخشبة', 'الصراع الدرامي بين الشخصيات والمواقف', 'طول الفصول المسرحية وامتدادها لساعات', 'الاعتماد على الموسيقى الصامتة وحدها'],
          optionsEn: ['Elaborate stage costumes and sets', 'Dramatic conflict between characters and ideologies', 'Extended multi-hour act duration', 'Exclusive reliance on silent pantomime'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'الصراع الدرامي هو قوام المسرحية وروحها؛ فالحوار وحده لا يصنع مسرحاً ما لم يولد توتراً وصراعاً فكرياً أو اجتماعياً يشد المشاهد للحل.',
          explanationEn: 'Dramatic conflict is the absolute lifeblood of drama; dialogue without intellectual or ethical tension fails as theatre.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: البلاغة المتقدمة والتجربة الشعرية والوحدة العضوية ──
  {
    id: 'h-lit12-5',
    order: 5,
    titleAr: 'المحاضرة 5: البلاغة المتقدمة - عناصر التجربة الشعرية، الوحدة الفنية، والموسيقى في النص',
    titleEn: 'Lecture 5: Advanced Rhetoric: The Poetic Experience, Organic Unity & Textual Music',
    subtitleAr: 'عناصر التجربة الشعرية (الفكر، الوجدان، والصورة التعبيرية)، والوحدة العضوية، والموسيقى الظاهرة والخفية',
    subtitleEn: 'Master the anatomy of poetic experiences, cognitive-affective fusion, organic integrity, and overt/covert rhythm.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Advanced Arabic Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: البلاغة النقدية والتجربة الشعرية',
    unitTitleEn: 'Unit 3: Poetic Experience & Critical Rhetoric',
    lessonNumberAr: 'الدرس 5: التجربة الشعرية والوحدة العضوية والموسيقى',
    lessonNumberEn: 'Lesson 5: Poetic Experience & Sonic Textures',

    warmupHookAr: 'حين تقرأ بيتاً شعرياً فتسري قشعريرة في جسدك ويفيض قلبك تأثراً، ما الذي حدث بينك وبين الشاعر عبر الكلمات؟ لقد نقل الشاعر إليك "تجربته الشعرية" الكاملة! مزج فكره الصائب بوجدانه الصادق في قوالب ألفاظ وموسيقى ساحرة. كيف ينصهر الفكر بالوجدان ليمنع القصيدة من أن تكون مجرد فلسفة جافة أو عاطفة هوجاء تافهة؟ وما الفرق بين الموسيقى الظاهرة الخارجية والموسيقى الخفية الداخلية؟',
    warmupHookEn: 'When poetic verse sends chills through a reader, a successful communion of Poetic Experience has materialized. Explore how great masters fuse cerebral thought with authentic emotion, creating harmonious organic unity and layered overt/covert musicality.',

    learningOutcomesAr: [
      'أن يعرف الطالب مفهوم "التجربة الشعرية" بأنها الرؤية النفسية والوجدانية للشاعر عند انفعاله بمؤثر حقيقي ينقله في إطار فني متكامل',
      'أن يحلل عناصر التجربة الشعرية الثلاثة: الوجدان (العاطفة الصادقة)، الفكر (المعاني والأفكار)، والصورة التعبيرية (الألفاظ والأخيلة والموسيقى)',
      'أن يوضح أهمية امتزاج الفكر بالوجدان: الفكر يمنح التجربة دقتها وعمقها، والوجدان يمنحها حرارتها وحيويتها وخلودها',
      'أن يستخرج مقومات "الوحدة العضوية (الفنية)" في أي نص شعري: وحدة الموضوع، وحدة الجو النفسي، وترابط الأفكار وتكاملها',
      'أن يفرق بدقة بين الموسيقى الظاهرة (الخارجية: الوزن، القافية، التصريع، الجناس، وحسن التقسيم) والموسيقى الخفية (الداخلية: حسن اختيار الألفاظ الموحية، اتساق العبارات، وتآلف الأنغام)'
    ],
    learningOutcomesEn: [
      'Define Poetic Experience as the affective psychological crystallization triggered by real-world stimuli expressed through metric art',
      'Dissect the 3 pillars of poetic experience: Passion (authentic emotion), Intellect (deep conceptual ideas), and Imagery (phrasing, tropes, music)',
      'Explain cognitive-affective fusion: intellect lends structural profundity and clarity; passion imparts immortal emotive resonance',
      'Identify benchmarks of Organic Unity: single thematic focus, homogeneous atmospheric mood, and logically ordered stanzas',
      'Distinguish overt sonic music (meter, monorhyme, initial hemistich rhyme Tasree\', alliteration) from covert internal music (evocative diction, harmonious syntax, tonal cadence)'
    ],

    vocabulary: [
      {
        termAr: 'التجربة الشعرية (The Poetic Experience)',
        termEn: 'The Poetic Experience',
        definitionAr: 'الموقف الشعوري والفكري الكامل الذي يمر به الشاعر حين ينفعل بمؤثر خارجي أو داخلي فيصوغه ببراعة في نص أدبي.',
        definitionEn: 'The total psychological and intellectual encounter wherein an inspired poet translates emotional stimuli into poetic art.'
      },
      {
        termAr: 'الموسيقى الخفية (Covert / Internal Music)',
        termEn: 'Internal Covert Musicality',
        definitionAr: 'نغم داخلي عذب ينبع من دقة اختيار الكلمات الموحية، وتناسق الحروف، وترتيب الأفكار، وصدق العاطفة دون الاعتماد على الوزن والقافية فقط.',
        definitionEn: 'Subtle internal resonance emanating from evocative diction, euphonic consonant sequencing, and genuine emotive sincerity.'
      }
    ],

    sections: [
      {
        titleAr: '1. مفهوم التجربة الشعرية وعناصرها الأساسية (الوجدان والفكر)',
        titleEn: '1. The Poetic Experience: Essence & Pillars (Emotion & Intellect)',
        contentAr: `### مفهوم التجربة الشعرية (Poetic Experience):
هي الرؤية النفسية والوجدانية الكاملة للشاعر حين ينفعل بمؤثر واقعي أو إنساني أو كوني، فيستغرق فيه بفكره ووجدانه، حتى يتفجر التعبير عنه في صياغة شعرية موحية متكاملة.

### عناصر التجربة الشعرية الثلاثة:
1. **الوجدان (العاطفة والانفعال الشعوري):**
   - هو الشرط الجوهري لصدق التجربة وحيويتها وخلودها.
   - **الصدق الشعوري:** ألا يكون الشعر كاذباً أو نفاقاً أو محاكاة شكلية متكلفة، بل نابعاً من إحساس حقيقي صادق.
2. **الفكر (المعاني والأفكار والموضوع):**
   - يمنح التجربة دقتها، ويحول دون انزلاقها إلى السذاجة والتفاهة والسطحية.
   - لا يخلو أي شعر عظيم من فكرة عميقة تهز العقول وتفتح آفاق الوعي.
3. **الصورة التعبيرية (الصياغة الفنية):**
   - وتشمل: الألفاظ والعبارات، والأخيلة والصور (تشبيه، استعارة، كناية)، والموسيقى الشعرية بنوعيها.`,
        contentEn: `### Definition of the Poetic Experience:
The profound holistic psychological state occurring when a poet responds affectively to external or existential stimuli, translating emotional contemplation into sublime verse.
### The Tripartite Architectural Pillars:
1. Emotion (Affective Sincerity): The lifeblood granting artistic longevity and emotional authenticity.
2. Intellect (Substantive Thought): Endowing the poem with cognitive depth, precision, and rational coherence.
3. Expressive Medium: Evocative diction, rhetorical imagery (metaphor, simile, metonymy), and overt/covert musical orchestration.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1 من 4: تحليل صدق الوجدان وانعكاسه على الألفاظ الموحية',
          titleEn: 'Worked Example 1 of 4: Analyzing Affective Sincerity & Evocative Lexicon',
          equation: 'صدق الوجدان = عاطفة جياشة حقيقية + ألفاظ وتراكيب تشع بالحزن أو الفرح التلقائي',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول الشاعر القروي (رشيد خوري) في رثاء ابنته الصغيرة المتوفاة:\n"يَا قَبْرُ رِفْقاً بِالصِّبَا ... وَاحْذَرْ عَلَى غُصْنٍ نَدِي\nكَانَتْ لِقَلْبِيَ كَوْكَبـاً ... يَهْدِي وَفَرْحَةَ مَشْهَدِي"',
              textEn: 'The Village Poet mourning his infant daughter: "O grave, be gentle with childhood, and tender with this moist blossom..."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل البلاغي والنقدي: تنبع قوة الأبيات من صدق العاطفة؛ فالشاعر لم يتكلف البديع، بل اختار ألفاظاً تشع بالحنان واللوعة الأبوية (رفقاً، غصن ندي، كوكباً يهدي)، مما يجعل القارئ ينفعل فوراً مع حزنه الفطري الصادق.',
              textEn: 'Literary analysis: Affective parental grief dictates tender evocative diction without forced ornamentation, forging instantaneous empathy with the reader.'
            }
          ],
          takeawayAr: 'صدق العاطفة هو الروح المحركة للتجربة الشعرية وشرط خلود النص وتأثيره في النفوس.',
          takeawayEn: 'Emotional authenticity is the driving engine granting poetry enduring resonance and psychological power.'
        }
      },
      {
        titleAr: '2. امتزاج الفكر بالوجدان وأثره في نضج التجربة والخلود الأدبي',
        titleEn: '2. Harmonizing Intellect with Emotion: The Hallmark of Masterpiece Poetry',
        contentAr: `### حتمية امتزاج الفكر بالوجدان:
* **الشاعر العبقري:** هو من **"يفكر بقلبه، ويشعر بعقله"**؛ فلا يطغى جانب على آخر.
* **أثر طغيان الفكر على الوجدان:**
  - إذا طغى الفكر تحول الشعر إلى مجرد **فلسفة ذهنية جافة ونظم بارد** يفتقر إلى حرارة التأثير وهز المشاعر.
* **أثر طغيان العاطفة على الفكر:**
  - إذا طغت العاطفة بلا ضابط فكري، تحول الشعر إلى **تهافت وسذاجة وثرثرة شعورية رخيصة** لا قيمة لها.

### التوازن الأسمى:
يعطي **الفكر** القصيدة العمق والدقة والتسلسل المنطقي، بينما يمنحها **الوجدان** النبض الحي والحرارة والخلود؛ وبامتزاجهما تكتمل التجربة الشعرية وتسمو إلى مصاف الروائع العالمية.`,
        contentEn: `### The Inevitable Synthesis of Mind and Heart:
Master poets "think with their hearts and feel with their intellects."
- Flaw of Intellectual Dominance: Devolves into dry didactic versification and detached philosophizing.
- Flaw of Emotional Excess: Collapses into mawkish sentimentality and trivial effusion.
### The Golden Harmony:
Intellect provides architecture and profundity; passion breathes immortal vitality and empathetic warmth.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2 من 4: الموازنة النقدية بين غلبة الفكر وغلبة العاطفة',
          titleEn: 'Worked Example 2 of 4: Critical Balance Between Intellect & Emotive Fervor',
          equation: 'النص الخالد = عمق الفكرة الإنسانية + حرارة العاطفة الوجدانية الصادقة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول الشاعر أبو القاسم الشابي في إرادة الحياة:\n"إِذَا الشَّعْبُ يَوْمـاً أَرَادَ الحَيَـاةَ ... فَلا بُدَّ أَنْ يَسْتَجِيبَ القَـدَرْ\nوَلا بُدَّ لِلَّيْلِ أَنْ يَنْجَلِـي ... وَلا بُدَّ لِلْقَيْدِ أَنْ يَنْكَسِـرْ"',
              textEn: 'Abul-Qasim al-Shabi: "When a people choose life, destiny must inevitably answer; night must depart, and chains must shatter."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل النقدي المعتمد: اجتمع في هذين البيتين فكر فلسفي ثوري عميق عن ناموس الكون وإرادة الشعوب الحرة، مع عاطفة حماسية جارفة تموج بالأمل والتحدي؛ فامتزج الفكر بالوجدان ليخلد البيتان كشعار إنساني خالد عبر الأجيال.',
              textEn: 'Critical synthesis: Seamlessly harmonizes philosophical existential conviction with incandescent revolutionary passion, creating immortal universal verse.'
            }
          ],
          takeawayAr: 'القصيدة العظيمة تجمع بين عمق الفكر الفلسفي وحرارة الوجدان الصادق دون طغيان أحدهما.',
          takeawayEn: 'Mastery demands equanimity: deep intellectual vision fused with authentic lyrical fire.'
        }
      },
      {
        titleAr: '3. الوحدة العضوية (الفنية) في القصيدة ومقوماتها الثلاثة',
        titleEn: '3. Organic & Aesthetic Unity: The Three Foundational Pillars',
        contentAr: `### مفهوم الوحدة العضوية (الفنية):
أن تكون القصيدة كائناً حياً متماسك الأجزاء، لا يمكن انتزاع بيت منه أو نقله من مكانه دون أن يختل المعنى والجو العام.

### مقومات الوحدة العضوية الثلاثة (وفق المنهج الوزاري):
1. **وحدة الموضوع:**
   - أن تدور القصيدة كلها حول فكرة وموضوع واحد، دون تشتت بين أغراض قديمة متعددة (كالبدء بالغزل ثم وصف الراحلة ثم المدح كما كان يفعل الكلاسيكيون).
2. **وحدة الجو النفسي (الشعوري):**
   - أن تسيطر على الشاعر حالة شعورية وعاطفية واحدة طوال القصيدة (مثل: سيطرة الحزن، أو الفرح، أو الفخر والاعتزاز)، فلا تتناقض المشاعر من بيت لآخر.
3. **ترتيب الأفكار وتسلسلها المنطقي:**
   - أن تتسلسل الخواطر والصور بحيث يسلم كل بيت إلى البيت الذي يليه في ترابط محكم لا يقبل التقديم أو التأخير.`,
        contentEn: `### The Doctrine of Organic Unity:
Conceiving the poem as an interdependent living anatomy where stanzas cannot be deleted or reordered without mutilating the aesthetic whole.
### The 3 Cardinal Benchmarks:
1. Single Thematic Focus: Abolishing multi-purpose neoclassical fragmentation.
2. Homogeneous Psychological Atmosphere: Sustaining an unbroken emotional key across all stanzas.
3. Interlocking Logical Sequencing: Each poetic distich organically engenders its successor.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3 من 4: استنتاج مقومات الوحدة الفنية في نص "المساء" لمطران',
          titleEn: 'Worked Example 3 of 4: Evaluating Organic Unity Benchmarks in Mutran\'s "The Evening"',
          equation: 'الوحدة الفنية = موضوع واحد (ألم الغربة والفراق) + جو نفسي واحد (الحزن والأسى) + ترابط تسلسلي متصاعد',
          steps: [
            {
              stepNumber: 1,
              textAr: 'في قصيدة "المساء" لمطران: يدور النص كاملاً حول تجربة واحدة هي آلام الفراق ومرض الشاعر وغربته القاتلة بالإسكندرية، ويسيطر جو نفسي كئيب حزين من أول بيت لآخر بيت، مع التدرج الزمني حتى لحظة الغروب وموت الضوء.',
              textEn: 'In Mutran\'s "The Evening": the poem addresses one unbroken trauma—heartbreak compounded by physical illness—sustained by elegiac gloom.'
            },
            {
              stepNumber: 2,
              textAr: 'الحكم البلاغي: تحققت الوحدة العضوية بكامل أركانها الثلاثة؛ فوحدة الموضوع تضافرت مع وحدة الجو النفسي الحزين وتسلسلت الأبيات متدرجة من الصباح إلى مغيب الشمس وانطفاء الشعلة.',
              textEn: 'Rhetorical verdict: Organic unity is impeccably achieved; singular theme, homogeneous tragic gloom, and seamless chronological progression.'
            }
          ],
          takeawayAr: 'الوحدة الفنية تقتضي وحدة الموضوع ووحدة الجو النفسي وترابط الأفكار تكاملياً.',
          takeawayEn: 'Organic unity demands thematic solidarity, emotional cohesion, and harmonious stanza progression.'
        }
      },
      {
        titleAr: '4. موسيقى الشعر العربي: التمييز الدقيق بين الموسيقى الظاهرة والموسيقى الخفية',
        titleEn: '4. Poetic Musicality: Distinguishing Overt Rhythms from Covert Harmonies',
        contentAr: `### قسمان رئيسيان لموسيقى النص الشعري:
1. **الموسيقى الظاهرة (الخارجية):**
   - هي الموسيقى المحسوسة بالأذن مباشرة من خلال الإيقاع والوزن.
   - **عناصرها:**
     * **الوزن العروضي الواحد:** التزام البحر الشعري الموحد (أو التفعيلة المنتظمة).
     * **القافية الموحدة وحرف الروي:** الجرس الصوتي المتكرر في ختام الأبيات.
     * **المحسنات البديعية الصوتية:** مثل **التصريع** في مطلع القصيدة (اتفاق قافية الشطرين)، و**الجناس** بأنواعه، و**حسن التقسيم** (تقطيع البيت لمقاطع متساوية النغم).
2. **الموسيقى الخفية (الداخلية النابعة من النفس):**
   - هي الموسيقى الأعمق والأبقى أثراً، ولا تخضع للأوزان العروضية بل تدرك بالذوق والوجدان.
   - **عناصرها:**
     * حسن اختيار الألفاظ الموحية ودقة ملاءمتها للمشاعر.
     * جودة الصياغة وتماسك الجمل وسلامة التراكيب.
     * اتساق الصور البيانية وتآلف الحروف وروعة الانتقال بين المعاني.`,
        contentEn: `### The Dual Dimensions of Poetic Musicality:
1. Overt (External) Music: Direct sensory auditory rhythms:
   - Metrical prosody (Bahr / Taf'ila).
   - Monorhyme and consonant Rawiyy.
   - Sonic rhetorical ornaments: initial hemistich rhyme (Tasree'), alliteration (Jinas), and balanced cadence (Husn al-Taqseem).
2. Covert (Internal) Music: Subtle spiritual harmonies perceived by aesthetic sensibility:
   - Evocative diction reflecting psychological authenticity.
   - Consonant euphony and syntactic fluidity.
   - Harmonious transitions between metaphors and ideas.`,
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4 من 4: استخراج عناصر الموسيقى الظاهرة والخفية في بيت شعري',
          titleEn: 'Worked Example 4 of 4: Dissecting Overt & Covert Music in Classical Verse',
          equation: 'الموسيقى الظاهرة = وزن + قافية + تصريع / حسن تقسيم | الموسيقى الخفية = إيحاء اللفظ + تناغم الحروف',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يقول أحمد شوقي في مطلع قصيدة "غربته وحنينه":\n"اخْتِلافُ النَّهَارِ وَاللَّيْلِ يُنْسِي ... اذْكُرَا لِي الصِّبَا وَأَيَّامَ أُنْسِي"',
              textEn: 'Shawqi in his exile ode: "The alternation of day and night induces forgetfulness; remind me of youth and serene days of joy."'
            },
            {
              stepNumber: 2,
              textAr: 'التحليل البلاغي المقارن:\n- **الموسيقى الظاهرة:** تتمثل في التزام بحر البسيط، والقافية الموحدة المكسورة (السين المكسورة والياء)، و**التصريع** البديع في المطلع بين الشطرين (يُنسِي / أُنسِي)، والطباق الصوتي بين (النهار والليل).\n- **الموسيقى الخفية:** نابعة من التناغم الصوتي الهادئ للألفاظ الموحية بالحنين والوفاء وتناسق الفواصل التي تدغدغ المشاعر برقة.',
              textEn: 'Comparative dissection: Overt music stems from the Basit meter, monorhyme, and initial Tasree\' (Yunsi / Unsi); covert music flows from subtle evocations of homesickness and tender consonant euphony.'
            }
          ],
          takeawayAr: 'الموسيقى الظاهرة تصنع الرنين الخارجي، بينما الموسيقى الخفية تنفذ لأعماق الوجدان وتخلد الأثر الأدبي.',
          takeawayEn: 'Overt rhythms provide auditory cadence, while covert music creates indelible psychological communion.'
        }
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
      id: 'quiz-hlit12-5',
      titleAr: 'اختبار التجربة الشعرية والبلاغة',
      titleEn: 'Poetic Experience & Rhetoric Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما النتيجة البلاغية المحتومة إذا طغى جانب الفكر على جانب الوجدان في تجربة الشاعر؟',
          textEn: 'What is the inevitable rhetorical outcome if intellectual abstraction overpowers emotional affect in a poet\'s experience?',
          optionsAr: ['تصبح القصيدة شديدة الحرارة والانفعال', 'تفقد القصيدة روح الشعر وتتحول إلى فلسفة وتقريرية جافة', 'تتحول القصيدة إلى انسيابية رومانسية', 'يتفكك الوزن العروضي للقصيدة'],
          optionsEn: ['Poem becomes excessively fiery and emotive', 'Poem loses lyrical soul, degenerating into dry reporting and philosophy', 'Poem transforms into romantic fluidity', 'Poem loses metrical rhythm'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'إذا طغى الفكر على الوجدان جَفَّت العاطفة وتحول الشعر إلى مجرد نظم عقلاني وفلسفة تقريرية باردة خالية من حرارة التأثير.',
          explanationEn: 'When cognitive intellect eclipses emotion, the verse loses affective warmth, reducing to cold philosophical versification.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
