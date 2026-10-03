import type { Lecture } from '../types';

// ============================================================================
// PRIMARY ISLAMIC STUDIES — GRADE 3 (التربية الدينية الإسلامية الصف الثالث الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Egyptian Ministry Curriculum Alignment (Edu 2.0 - التربية الدينية الإسلامية):
// Lecture 1: المحور الأول (من أكون؟): العقيدة والإيمان بالرسل والكتب السماوية، أسماء الله الحسنى (العليم، السميع، البصير) وسورتا التين والشرح
// Lecture 2: المحور الأول (من أكون؟): السيرة والقصص: بناء الكعبة وحكمة النبي ﷺ، الجهر بالدعوة، قصة سيدنا يونس وسورة العلق
// Lecture 3: المحور الثاني (العالم من حولي): العبادات: فقه وأحكام الصلاة (شروط الصحة، الأركان، السنن)، فضل صلاة الجماعة، وصلاة الجمعة والعيدين
// Lecture 4: المحور الثاني (العالم من حولي): القيم والأخلاق: الإحسان إلى الجار، الأمانة، الرفق بالحيوان، وآداب الحديث والاستماع
// ============================================================================

export const PRIMARY_ISLAMIC_G3_LECTURES: Lecture[] = [
  // ── LECTURE 1: CREED, PROPHETS, HEAVENLY BOOKS, DIVINE NAMES & SURAHS AT-TEEN & ASH-SHARH ──
  {
    id: 'p3-isl-1',
    order: 1,
    titleAr: 'المحاضرة 1: العقيدة، الإيمان بالرسل والكتب السماوية، أسماء الله الحسنى وسورتا التين والشرح',
    titleEn: 'Lecture 1: Islamic Creed, Faith in Prophets & Heavenly Books, Divine Names & Surahs At-Teen & Ash-Sharh',
    subtitleAr: 'الإيمان برسل الله وكتبه، مفهوم الوحي، معاني أسماء الله (العليم، السميع، البصير، الرحيم)، وتدبر وحفظ سورتي التين والشرح',
    subtitleEn: 'Learn about Faith in Prophets, Heavenly Books, Divine Revelation, Allah\'s Names, and Surahs At-Teen & Ash-Sharh.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — العقيدة والقرآن الكريم',
    unitTitleEn: 'Theme 1: Who Am I? — Creed & Holy Quran',
    lessonNumberAr: 'الدرس 1: الإيمان بالرسل والكتب وسورتا التين والشرح',
    lessonNumberEn: 'Lesson 1: Faith in Messengers, Divine Books & Surahs At-Teen & Ash-Sharh',

    keyConceptsAr: [
      'الإيمان بالرسل عليهم السلام: أرسل الله الرسل والأنبياء لهداية البشر إلى توحيد الله وعبادته ومكارم الأخلاق، ويجب على المسلم الإيمان بجميع الرسل دون تفريق.',
      'أولو العزم من الرسل: سيدنا نوح، سيدنا إبراهيم، سيدنا موسى، سيدنا عيسى، وخاتم الأنبياء والمرسلين سيدنا محمد ﷺ.',
      'الإيمان بالكتب السماوية: كلام الله المنزل على رسله لهداية الناس (صحف إبراهيم، التوراة لموسى، الزبور لداود، الإنجيل لعيسى، والقرآن الكريم لمحمد ﷺ وهو محفوظ من التبديل والتغيير).',
      'مفهوم الوحي: إعلام الله لأنبيائه بما يريد من شرائع وأحكام بواسطة أمين الوحي جبريل عليه السلام.',
      'أسماء الله الحسنى المقررة:',
      '  - (العَلِيم): يعلم ما كان وما سيكون وما لم يكن لو كان كيف يكون، ويعلم السر وأخفى وما في الصدور.',
      '  - (السَّمِيع): يسمع كل الأصوات والنداءات والدعوات في آنٍ واحد دون التباس.',
      '  - (البَصِير): يرى جميع المبصرات بدقة متناهية تحت ظلمات البر والبحر.',
      '  - (الرَّحِيم): عظيم الرحمة بالمؤمنين والخلائق أجمعين.',
      'القرآن الكريم وتفسيره الميسر:',
      '  - سورة التين: يقسم الله بالتين والزيتون وطور سينين وهذا البلد الأمين (مكة المكرمة)، ويؤكد تكريم الإنسان وخلقه في أحسن تقويم.',
      '  - سورة الشرح: تذكير النبي ﷺ بنعم الله عليه بشرح صدره ورفع ذكره، والبشارة بأن مع العسر يسراً.'
    ],
    keyConceptsEn: [
      'Faith in Messengers of Allah: Allah sent prophets to guide humanity to Monotheism (Tawheed) and noble character.',
      'Arch-Prophets (Ulu Al-Azm): Nuh (Noah), Ibrahim (Abraham), Musa (Moses), Isa (Jesus), and Muhammad ﷺ (Seal of the Prophets).',
      'Faith in Heavenly Books: Divine revelations sent to prophets (Scrolls of Ibrahim, Torah, Zaboor, Injeel, and the Holy Quran which is divinely preserved).',
      'Concept of Revelation (Wahy): Divine messages conveyed to prophets through Angel Jibril (peace be upon him).',
      'Divine Names of Allah: Al-Aleem (The All-Knowing), As-Samee (The All-Hearing), Al-Baseer (The All-Seeing), Ar-Raheem (The Most Merciful).',
      'Surahs At-Teen & Ash-Sharh: Divine oaths, honoring human creation in the best form, and divine relief where ease accompanies hardship.'
    ],

    conceptMapAr: [
      'أركان الإيمان ➔ الإيمان بالرسل (خاتمهم محمد ﷺ) ➔ الإيمان بالكتب السماوية (القرآن الكريم) ➔ أسماء الله (العليم، السميع، البصير) ➔ تدبر سورتي التين والشرح'
    ],
    conceptMapEn: [
      'Pillars of Faith ➔ Faith in Messengers ➔ Faith in Divine Books ➔ Allah\'s Names (Al-Aleem, As-Samee, Al-Baseer) ➔ Surahs At-Teen & Ash-Sharh Reflection'
    ],

    learningOutcomesAr: [
      'أن يعدد التلميذ أركان الإيمان وأسماء أولي العزم من الرسل والكتب المنزلة عليهم.',
      'أن يوضح معنى الوحي ودور أمين الوحي سيدنا جبريل عليه السلام.',
      'أن يفسر معاني أسماء الله الحسنى (العليم، السميع، البصير، الرحيم) ومظاهرها في الكون.',
      'أن يرتل ويحفظ سورتي التين والشرح مستنبطاً الدروس والعبر الإيمانية منهما.'
    ],
    learningOutcomesEn: [
      'List the Arch-Messengers and heavenly scriptures revealed to them.',
      'Explain the concept of revelation and the role of Angel Jibril.',
      'Demonstrate understanding of Allah\'s names: Al-Aleem, As-Samee, Al-Baseer, Ar-Raheem.',
      'Recite, memorize, and extract moral lessons from Surahs At-Teen and Ash-Sharh.'
    ],

    vocabulary: [
      {
        termAr: 'أُولُو العَزْمِ مِنَ الرُّسُل',
        termEn: 'Arch-Messengers (Ulu Al-Azm)',
        definitionAr: 'أكثر الرسل صبراً وتحملاً في سبيل تبليغ رسالة الله، وهم: نوح، إبراهيم، موسى، عيسى، ومحمد ﷺ.'
      },
      {
        termAr: 'الوَحْي',
        termEn: 'Divine Revelation (Wahy)',
        definitionAr: 'كلام الله وشرائعه المنزلة على الأنبياء والرسل بواسطة الملك جبريل عليه السلام.'
      },
      {
        termAr: 'الكُتُبُ السَّمَاوِيَّة',
        termEn: 'Heavenly Scriptures',
        definitionAr: 'الكتب التي أنزلها الله على رسله لهداية البشر مثل التوراة والإنجيل والقرآن الكريم الخاتم.'
      },
      {
        termAr: 'العَلِيم',
        termEn: 'Al-Aleem (The All-Knowing)',
        definitionAr: 'اسم من أسماء الله الحسنى، ومعناه الذي يحيط علمه بكل صغيرة وكبيرة في السماوات والأرض.'
      },
      {
        termAr: 'أَحْسَنِ تَقْوِيم',
        termEn: 'Best of Forms (Ahsan Taqwim)',
        definitionAr: 'أكمل وأجمل صورة وهيئة خلق الله عليها الإنسان عقلاً وجسداً وتكريماً.'
      }
    ],

    warmupHookAr: 'مرحباً بأبطال الصف الثالث الابتدائي! 🌟 هل تساءلت يوماً كيف أرسل الله أنبياءه ورسله الكرام لهداية العالم؟ ومن هم الأنبياء الخمسة الذين ضربوا أروع الأمثلة في الصبر والعزم؟ وما هو الكتاب الخاتم الذي نزل على سيدنا محمد ﷺ ليحفظه الله للأبد؟ تعالوا لنبحر في روائع الإيمان والقرآن الكريم!',
    warmupHookEn: 'Welcome 3rd grade champions! Have you ever wondered how Allah sent His noble Prophets and Scriptures to guide humanity? Let us discover the five Arch-Messengers, heavenly books, Allah\'s divine names, and the inspiring verses of Surahs At-Teen and Ash-Sharh!',

    mainContentAr: `
### 1. الإيمان بالرسل والكتب السماوية ومفهوم الوحي (Faith in Messengers & Heavenly Books)

* 🌟 **لماذا أرسل الله الرسل؟**
  - أرسل الله الرسل والأنبياء رحمةً بالبشرية، ليدعوهم إلى عبادة الله الواحد الأحد، ويهدوهم إلى طريق الحق والأخلاق الفاضلة.
  - الإيمان بالرسل هو الركن الرابع من **أركان الإيمان الستة** (الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره).

* 🛡️ **أولو العزم من الرسل (خمسة رسل عظام):**
  1. **سيدنا نوح عليه السلام:** دعا قومه بصبر وثبات ألف سنة إلا خمسين عاماً وبنى السفينة بأمر الله.
  2. **سيدنا إبراهيم عليه السلام:** خليل الرحمن وأبو الأنبياء الذي بنى الكعبة المشرفة ودعا إلى التوحيد الخالص.
  3. **سيدنا موسى عليه السلام:** كليم الله الذي أيده الله بالمعجزات وأنزل عليه التوراة.
  4. **سيدنا عيسى عليه السلام:** رسول الله المؤيد بالمعجزات الباهرة وأنزل عليه الإنجيل.
  5. **سيدنا محمد ﷺ:** خاتم الأنبياء وسيد المرسلين، المبعوث رحمة للعالمين، وأنزل عليه القرآن الكريم.

* 📜 **الكتب السماوية المنزلة:**
  - **الصحف:** على سيدنا إبراهيم عليه السلام.
  - **التوراة:** على سيدنا موسى عليه السلام.
  - **الزبور:** على سيدنا داود عليه السلام.
  - **الإنجيل:** على سيدنا عيسى عليه السلام.
  - **القرآن الكريم:** على نبينا محمد ﷺ، وهو الكتاب الخاتم المحفوظ من كل تحريف: ﴿إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ﴾.

---

### 2. أسماء الله الحسنى: العليم، السميع، البصير، الرحيم

* 💡 **الله (العَلِيم):**
  - يعلم كل شيء في السماوات والأرض، يعلم ما في قلبك ونيتك، وعدد رمال الصحراء وقطرات الأمطار.
  - *تطبيق عملي:* أخلص النية وأعمل الخير سراً وعلانية لأن الله العليم مطلع عليّ.
* 👂 **الله (السَّمِيع):**
  - يسمع كل الأصوات والهمسات ودعاء كل إنسان في كل زمان ومكان.
  - *تطبيق عملي:* أحفظ لساني من الكلام السيء وأكثر من الدعاء وذكر الله.
* 👁️ **الله (البَصِير):**
  - يرى كل الكائنات وحركاتها في أعماق البحار وفي ظلمات الليل.
  - *تطبيق عملي:* أستشعر مراقبة الله في كل تصرفاتي فلا أفعل إلا ما يرضيه.
* 💖 **الله (الرَّحِيم):**
  - عظيم الرحمة الواسعة التي تشمل المؤمنين وجميع الخلائق.

---

### 3. تدبر وتفسير سورة التين وسورة الشرح

#### A. سورة التين الكريمة:
\`\`\`text
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
وَالتِّينِ وَالزَّيْتُونِ (1) وَطُورِ سِينِينَ (2) وَهَٰذَا الْبَلَدِ الْأَمِينِ (3) لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ (4) ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ (5) إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ (6) فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ (7) أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ (8)
\`\`\`
* **معاني ومفردات سورة التين:**
  * **وَالتِّينِ وَالزَّيْتُونِ:** قسم بثمار التين والزيتون المباركة وبأرض الأنبياء في فلسطين.
  * **وَطُورِ سِينِينَ:** جبل الطور بسيناء في مصر المباركة حيث كلم الله سيدنا موسى عليه السلام.
  * **وَهَٰذَا الْبَلَدِ الْأَمِينِ:** مكة المكرمة البلد الحرام الآمن ومهبط الوحي.
  * **فِي أَحْسَنِ تَقْوِيمٍ:** في أعدل وأجمل صورة وهيئة متناسقة ومكرمة بالعقل.
  * **أَجْرٌ غَيْرُ مَمْنُونٍ:** ثواب دائم مستمر غير مقطوع في جنات النعيم.

#### B. سورة الشرح الكريمة:
\`\`\`text
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ (1) وَوَضَعْنَا عَنْكَ وِزْرَكَ (2) الَّذِي أَنْقَضَ ظَهْرَكَ (3) وَرَفَعْنَا لَكَ ذِكْرَكَ (4) فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (5) إِنَّ مَعَ الْعُسْرِ يُسْرًا (6) فَإِذَا فَرَغْتَ فَانْصَبْ (7) وَإِلَىٰ رَبِّكَ فَارْغَبْ (8)
\`\`\`
* **الدروس المستفادة:**
  - نعم الله العظيمة على نبيه محمد ﷺ برفع ذكره وشرح صدره.
  - البشرى الربانية المؤكدة بأن مع كل شدة وضيق فرجاً ويسراً عظيماً.
  - المبادرة إلى العمل الصالح وعبادة الله عند الفراغ.

---

### 4. Interactive Diagram: Prophets & Divine Books
\`\`\`xml
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="240" fill="#0f172a" rx="16"/>
  <!-- Arch Messengers Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">أولو العزم من الرسل الخمسة</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">🌊 <tspan fill="#38bdf8" font-weight="bold">نوح عليه السلام:</tspan> صاحب السفينة</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">🕋 <tspan fill="#38bdf8" font-weight="bold">إبراهيم عليه السلام:</tspan> خليل الرحمن وباني الكعبة</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">⛰️ <tspan fill="#38bdf8" font-weight="bold">موسى عليه السلام:</tspan> كليم الله في سيناء</text>
    <text x="25" y="170" fill="#f8fafc" font-size="13">🕊️ <tspan fill="#38bdf8" font-weight="bold">عيسى ومحمد ﷺ:</tspan> رسل الرحمة والهدى</text>
  </g>

  <!-- Heavenly Books & Divine Names Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">الكتب السماوية وأسماء الله الحسنى</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">📜 <tspan fill="#34d399" font-weight="bold">التوراة:</tspan> لموسى | <tspan fill="#34d399" font-weight="bold">الإنجيل:</tspan> لعيسى</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">📖 <tspan fill="#34d399" font-weight="bold">القرآن الكريم:</tspan> لمحمد ﷺ (خاتم ومحفوظ)</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">💡 <tspan fill="#fbbf24" font-weight="bold">العليم:</tspan> يعلم السر وأخفى وما بالصدور</text>
    <text x="25" y="170" fill="#f8fafc" font-size="13">👂 <tspan fill="#fbbf24" font-weight="bold">السميع البصير:</tspan> يسمع الدعاء ويرى الأعمال</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Faith in Prophets & Heavenly Scriptures
- Messengers were sent by Allah to guide mankind to Monotheism and virtue.
- The five Arch-Messengers: Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ.
- Heavenly Books: Scrolls of Ibrahim, Torah, Zaboor, Injeel, and the Holy Quran.

### 2. Beautiful Names of Allah
- Al-Aleem: The All-Knowing of every secret and open deed.
- As-Samee: The All-Hearing of all sounds and prayers.
- Al-Baseer: The All-Seeing of everything in existence.
- Ar-Raheem: The Most Merciful.

### 3. Reflections on Surahs At-Teen & Ash-Sharh
- Surah At-Teen emphasizes that humanity is created in the best form and rewarded for good faith and deeds.
- Surah Ash-Sharh brings comforting reassurance that ease always accompanies hardship.
`,

    workedExamples: [
      {
        id: 'ex-p3-isl1-1',
        titleAr: 'مثال 1: ربط الرسل والكتب السماوية',
        titleEn: 'Example 1: Matching Prophets with Heavenly Scriptures',
        problemAr: 'صل بين كل نبي كريم والكتاب السماوي الذي أنزل عليه: (موسى، عيسى، داود، محمد ﷺ) مع (الزبور، القرآن الكريم، التوراة، الإنجيل).',
        problemEn: 'Match each noble prophet with his scripture: (Musa, Isa, Dawood, Muhammad ﷺ) with (Zabur, Quran, Torah, Injeel).',
        stepByStepSolutionAr: [
          'الخطوة 1: سيدنا موسى عليه السلام أنزل الله عليه (التوراة).',
          'الخطوة 2: سيدنا داود عليه السلام أنزل الله عليه (الزبور).',
          'الخطوة 3: سيدنا عيسى عليه السلام أنزل الله عليه (الإنجيل).',
          'الخطوة 4: سيدنا محمد ﷺ أنزل الله عليه (القرآن الكريم) المحفوظ بحفظ الله.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Prophet Musa received the Torah.',
          'Step 2: Prophet Dawood received the Zabur.',
          'Step 3: Prophet Isa received the Injeel.',
          'Step 4: Prophet Muhammad received the Holy Quran.'
        ],
        finalAnswerAr: 'موسى: التوراة، داود: الزبور، عيسى: الإنجيل، محمد ﷺ: القرآن الكريم.',
        finalAnswerEn: 'Musa: Torah, Dawood: Zabur, Isa: Injeel, Muhammad ﷺ: Quran.'
      },
      {
        id: 'ex-p3-isl1-2',
        titleAr: 'مثال 2: استشعار أسماء الله (العليم السميع البصير)',
        titleEn: 'Example 2: Reflecting on Allah\'s Names in Daily Life',
        problemAr: 'وجد أحمد نقوداً سقطت من زميله في الفصل أثناء الفسحة ولم يره أحد من زملائه، فماذا يفعل استشعاراً لأسماء الله الحسنى؟',
        problemEn: 'Ahmed found money dropped by a classmate during recess and no one saw him. What should he do reflecting on Allah\'s names?',
        stepByStepSolutionAr: [
          'الخطوة 1: يتذكر أحمد أن الله (البَصِير) يراه في كل مكان، وأن الله (العَلِيم) يعلم نيته وضميره.',
          'الخطوة 2: يستشعر أن الأمانة واجبة، فلا يأخذ ما ليس له.',
          'الخطوة 3: يسلم النقود للمعلم أو لزميله صاحب الحق ليكسب الأجر ومحبة الله ورضوانه.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Ahmed remembers that Allah Al-Baseer sees him and Al-Aleem knows his conscience.',
          'Step 2: Honesty requires returning what belongs to others.',
          'Step 3: He hands the money to the teacher or rightful owner, earning Allah\'s love and reward.'
        ],
        finalAnswerAr: 'يسلم النقود لمعلمه أو لصاحبها لأن الله البصير يراه والعليم يعلم ضميره.',
        finalAnswerEn: 'He returns the money because Allah Al-Baseer sees him and Al-Aleem knows his intention.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-isl1-1',
        problemAr: 'اذكر أسماء أولي العزم من الرسل الخمسة.',
        problemEn: 'Name the five Arch-Messengers (Ulu Al-Azm).',
        solutionStepsAr: [
          '1. سيدنا نوح عليه السلام.',
          '2. سيدنا إبراهيم عليه السلام.',
          '3. سيدنا موسى عليه السلام.',
          '4. سيدنا عيسى عليه السلام.',
          '5. سيدنا محمد ﷺ خاتم النبيين والمرسلين.'
        ],
        solutionStepsEn: [
          '1. Prophet Nuh (Noah).',
          '2. Prophet Ibrahim (Abraham).',
          '3. Prophet Musa (Moses).',
          '4. Prophet Isa (Jesus).',
          '5. Prophet Muhammad ﷺ (Seal of Prophets).'
        ],
        finalAnswerAr: 'نوح، إبراهيم، موسى، عيسى، ومحمد ﷺ.',
        finalAnswerEn: 'Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ.'
      },
      {
        id: 'tb-p3-isl1-2',
        problemAr: 'ما المقصود بـ (طُورِ سِينِينَ) و(هَذَا الْبَلَدِ الْأَمِينِ) في سورة التين؟',
        problemEn: 'What is meant by "Toor Seenan" and "This Secure City" in Surah At-Teen?',
        solutionStepsAr: [
          'طُورِ سِينِينَ: جبل الطور في سيناء بأرض مصر المباركة حيث كلم الله نبيه موسى عليه السلام.',
          'هَذَا الْبَلَدِ الْأَمِينِ: مكة المكرمة، بلد الحرم الآمن ومسقط رأس النبي محمد ﷺ ومهبط الوحي.'
        ],
        solutionStepsEn: [
          'Toor Seenan: Mount Sinai in Egypt where Allah spoke to Moses.',
          'The Secure City: Makkah Al-Mukarramah, the birthplace of Prophet Muhammad ﷺ.'
        ],
        finalAnswerAr: 'طور سينين: جبل الطور بسيناء، والبلد الأمين: مكة المكرمة.',
        finalAnswerEn: 'Mount Sinai and the holy city of Makkah.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-isl1-1',
        questionAr: 'ما هو الكتاب السماوي الذي أنزله الله على سيدنا موسى عليه السلام؟',
        questionEn: 'Which heavenly book was revealed to Prophet Musa (Moses)?',
        optionsAr: ['التوراة', 'الإنجيل', 'الزبور', 'القرآن الكريم'],
        optionsEn: ['Torah', 'Injeel', 'Zabur', 'Quran'],
        correctIndex: 0,
        rationaleAr: 'أنزل الله التوراة على سيدنا موسى عليه السلام، بينما الإنجيل على عيسى والقرآن على محمد ﷺ.',
        rationaleEn: 'Allah revealed the Torah to Prophet Musa.'
      },
      {
        id: 'fa-p3-isl1-2',
        questionAr: 'ما معنى اسم الله (العَلِيم)؟',
        questionEn: 'What does the Divine Name "Al-Aleem" mean?',
        optionsAr: [
          'الذي يعلم كل شيء في الكون في الماضي والحاضر والمستقبل',
          'الذي يسمع الأصوات فقط',
          'الذي يخلق الكائنات فقط',
          'الذي يرزق الطير فقط'
        ],
        optionsEn: [
          'The One who knows everything in the past, present, and future',
          'The One who hears only',
          'The One who creates only',
          'The One who provides for birds only'
        ],
        correctIndex: 0,
        rationaleAr: 'العليم هو الذي أحاط علمه بكل شيء ظاهراً وباطناً ولا يخفى عليه شيء في الأرض ولا في السماء.',
        rationaleEn: 'Al-Aleem is the All-Knowing who encompasses everything in existence.'
      },
      {
        id: 'fa-p3-isl1-3',
        questionAr: 'في سورة الشرح، ما هي البشارة العظيمة التي كررها الله تعالى؟',
        questionEn: 'In Surah Ash-Sharh, what divine promise is repeated twice?',
        optionsAr: [
          'أن مع العسر يسراً وفرجاً كبيراً',
          'أن الليل يطول دائماً',
          'أن الأيام لا تتغير',
          'أن الرزق في البحر فقط'
        ],
        optionsEn: [
          'That ease and relief always accompany hardship',
          'That night is always long',
          'That days never change',
          'That sustenance is only in the sea'
        ],
        correctIndex: 0,
        rationaleAr: 'قال تعالى: ﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾ تأكيداً على تفريج الكرب وتيسير الأمور.',
        rationaleEn: 'Allah promised that ease accompanied with victory will always follow hardship.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة الإيمان برسل الله وأولي العزم الخمسة والكتب السماوية ومفهوم الوحي، وتعرفنا على أسماء الله الحسنى (العليم، السميع، البصير، الرحيم)، وتدبرنا معاني سورتي التين والشرح.',
    summaryEn: 'We learned about Faith in Prophets, Arch-Messengers, Heavenly Books, Divine Revelation, Allah\'s Names (Al-Aleem, As-Samee, Al-Baseer), and reflected upon Surahs At-Teen and Ash-Sharh.',

    assessment: {
      id: 'quiz-p3-isl-1',
      lectureId: 'p3-isl-1',
      titleAr: 'اختبار المحاضرة 1: العقيدة والإيمان بالرسل والكتب وسورتا التين والشرح',
      titleEn: 'Assessment 1: Islamic Creed, Prophets, Scriptures & Surahs',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-isl1-1',
          textAr: 'من هو خاتم الأنبياء والمرسلين الذي أُنزل عليه القرآن الكريم؟',
          textEn: 'Who is the Seal of the Prophets upon whom the Holy Quran was revealed?',
          optionsAr: ['سيدنا محمد ﷺ', 'سيدنا إبراهيم عليه السلام', 'سيدنا موسى عليه السلام', 'سيدنا عيسى عليه السلام'],
          optionsEn: ['Prophet Muhammad ﷺ', 'Prophet Ibrahim', 'Prophet Musa', 'Prophet Isa'],
          correctIndex: 0,
          conceptTestedAr: 'خاتم الأنبياء والمرسلين',
          conceptTestedEn: 'Seal of the Prophets',
          explanationAr: 'سيدنا محمد ﷺ هو خاتم النبيين ورسول الله إلى الناس كافة.',
          explanationEn: 'Prophet Muhammad ﷺ is the last messenger sent to all mankind.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl1-2',
          textAr: 'كم عدد أولي العزم من الرسل المذكورين في القرآن الكريم؟',
          textEn: 'How many Arch-Messengers (Ulu Al-Azm) are there?',
          optionsAr: ['5 رسل', '3 رسل', '10 رسل', '7 رسل'],
          optionsEn: ['5 Messengers', '3 Messengers', '10 Messengers', '7 Messengers'],
          correctIndex: 0,
          conceptTestedAr: 'عدد أولي العزم من الرسل',
          conceptTestedEn: 'Number of Arch-Messengers',
          explanationAr: 'أولو العزم خمسة: نوح، إبراهيم، موسى، عيسى، ومحمد ﷺ.',
          explanationEn: 'The Arch-Messengers are five noble prophets.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl1-3',
          textAr: 'أي من الكتب السماوية التالية أُنزلت على سيدنا داود عليه السلام؟',
          textEn: 'Which scripture was revealed to Prophet Dawood (David)?',
          optionsAr: ['الزبور', 'التوراة', 'الإنجيل', 'القرآن الكريم'],
          optionsEn: ['Zabur (Psalms)', 'Torah', 'Injeel', 'Quran'],
          correctIndex: 0,
          conceptTestedAr: 'الكتب السماوية ورسلها',
          conceptTestedEn: 'Scriptures and Prophets',
          explanationAr: 'أنزل الله الزبور على سيدنا داود عليه السلام: ﴿وَآتَيْنَا دَاوُودَ زَبُورًا﴾.',
          explanationEn: 'Allah revealed the Zabur upon Prophet Dawood.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-isl1-4',
          textAr: 'ما معنى قوله تعالى في سورة التين: ﴿لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ﴾؟',
          textEn: 'What does "Created man in the best of forms" mean in Surah At-Teen?',
          optionsAr: [
            'خلق الله الإنسان في أجمل وأحسن هيئة وصورة متناسقة ومكرمة بالعقل',
            'خلق الإنسان ليعيش في الماء',
            'خلق الإنسان بلا تفكير',
            'خلق الإنسان ليكون ضعيفاً دائماً'
          ],
          optionsEn: [
            'Allah created humans in the most beautiful, balanced form honored with intellect',
            'Created man to live underwater',
            'Created man without thinking',
            'Created man to be forever weak'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تفسير آيات سورة التين',
          conceptTestedEn: 'Tafseer of Surah At-Teen',
          explanationAr: 'أحسن تقويم تدل على كمال وتناسق خلقة الإنسان وتكريمه بالعقل والتمييز.',
          explanationEn: 'Ahsan Taqwim refers to the perfection and dignity bestowed upon human creation.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-isl1-5',
          textAr: 'ما الاسم الدال على أن الله يسمع كل دعاء وهمس في الكون؟',
          textEn: 'Which Divine Name indicates that Allah hears every prayer and whisper in the universe?',
          optionsAr: ['السَّمِيع', 'الخَالِق', 'القَادِر', 'الظَّاهِر'],
          optionsEn: ['As-Samee (The All-Hearing)', 'Al-Khaliq', 'Al-Qadir', 'Az-Zahir'],
          correctIndex: 0,
          conceptTestedAr: 'معاني أسماء الله الحسنى',
          conceptTestedEn: 'Divine Names Meanings',
          explanationAr: 'السَّمِيع هو الذي يسمع جميع الأصوات والدعاء والنداء في كل زمان ومكان.',
          explanationEn: 'As-Samee means The All-Hearing of all prayers and sounds.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: PROPHETIC SEERAH, BUILDING OF KAABAH, PUBLIC CALL & PROPHET YUNUS ──
  {
    id: 'p3-isl-2',
    order: 2,
    titleAr: 'المحاضرة 2: السيرة والقصص: بناء الكعبة وحكمة النبي ﷺ، الجهر بالدعوة، وقصة سيدنا يونس وسورة العلق',
    titleEn: 'Lecture 2: Prophetic Seerah: Rebuilding Kaabah, Public Call, Prophet Yunus & Surah Al-Alaq',
    subtitleAr: 'حكمة النبي ﷺ في وضع الحجر الأسود، نزول الوحي في غار حراء بسورة العلق، الجهر بالدعوة، وقصة سيدنا يونس عليه السلام في بطن الحوت',
    subtitleEn: 'Learn about the rebuilding of Kaabah, Black Stone wisdom, Cave Hira, Public Dawah, Prophet Yunus story, and Surah Al-Alaq.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — السيرة النبوية وقصص الأنبياء',
    unitTitleEn: 'Theme 1: Who Am I? — Prophetic Biography & Quranic Stories',
    lessonNumberAr: 'الدرس 2: تجديد بناء الكعبة، الجهر بالدعوة، وقصة سيدنا يونس',
    lessonNumberEn: 'Lesson 2: Rebuilding Kaabah, Public Dawah & Story of Prophet Yunus',

    keyConceptsAr: [
      'تجديد بناء الكعبة وحكمة النبي ﷺ:',
      '  - عندما تصدعت جدران الكعبة بسبب السيول، أجمعت قريش على إعادة بنائها بمال حلال طيب.',
      '  - اشتد الخلاف بين قبائل قريش حول من ينال شرف وضع "الحجر الأسود" في مكانه، وكادت تقع حرب دموية.',
      '  - اتفقوا على تحكيم أول داخل من باب المسجد، فكان سيدنا محمد ﷺ قبل البعثة، فهتفوا: "هذا الأمين، رضينا به".',
      '  - حكمة النبي ﷺ: بسط رداءه ووضع الحجر في وسطه، وأمر كل قبيلة بأخذ طرف من الرداء ورفعه معاً، ثم تناوله بيده الشريفة ووضعه في مكانه، فحقن دماءهم ووحد كلمتهم.',
      'نزول الوحي في غار حراء وسورة العلق:',
      '  - كان النبي ﷺ يتعبد في غار حراء، فنزل عليه جبريل عليه السلام بأول آيات القرآن الكريم: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾.',
      '  - فضل القراءة والعلم والقلم في رفعة الأمم.',
      'مراحل الدعوة الإسلامية والجهر بالدعوة:',
      '  - الدعوة السرية (3 سنوات): دعا النبي ﷺ المقربين من أهله وأصحابه.',
      '  - الجهر بالدعوة: أمره الله تعالى: ﴿فَاصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ الْمُشْرِكِينَ﴾، فصعد النبي ﷺ على جبل الصفا ودعا قريشاً، وصبر على الأذى في سبيل تبليغ الحق.',
      'قصة نبي الله يونس عليه السلام (ذو النون):',
      '  - أرسله الله إلى أهل نينوى، فدعاهم فلم يستجيبوا، فخرج غاضباً قبل أن يأذن الله له وركب السفينة.',
      '  - هاج البحر وأُلقيت القرعة فأصابت يونس عليه السلام، فالتقمه الحوت بأمر الله دون أن يكسر له عظماً أو يجرح له لحماً.',
      '  - دعاء يونس في ظلمات بطن الحوت والبحر والليل: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾.',
      '  - استجاب الله دعاءه ونجاه وأخرجه إلى الشاطئ وأنبت عليه شجرة من يقطين.'
    ],
    keyConceptsEn: [
      'Rebuilding the Kaabah and the Prophet\'s Wisdom: Placing the Black Stone using his cloak, uniting the quarreling Quraysh tribes.',
      'First Revelation in Cave Hira (Surah Al-Alaq): Angel Jibril bringing the divine command "Read in the name of your Lord".',
      'Phases of Islamic Dawah: Secret Dawah for 3 years, followed by the Public Call from Mount Safa and patient endurance.',
      'Story of Prophet Yunus (Jonah): Leaving his people prematurely, swallowed by the whale, and his great supplication in darkness.'
    ],

    conceptMapAr: [
      'حكمة وضع الحجر الأسود ➔ نزول الوحي وسورة العلق (اقرأ) ➔ الجهر بالدعوة من جبل الصفا ➔ قصة سيدنا يونس ودعاء النجاة والفرج'
    ],
    conceptMapEn: [
      'Black Stone Wisdom ➔ Cave Hira & Surah Al-Alaq ➔ Public Dawah on Mount Safa ➔ Prophet Yunus & The Whale Supplication'
    ],

    learningOutcomesAr: [
      'أن يسرد التلميذ قصة تحكيم النبي ﷺ في وضع الحجر الأسود ويستنتج حكمته وأمانته.',
      'أن يوضح كيف نزل الوحي في غار حراء وأهمية العلم والقراءة من سورة العلق.',
      'أن يشرح مراحل الدعوة الإسلامية (السرية والجهرية) وصبر النبي ﷺ.',
      'أن يروي قصة نبي الله يونس عليه السلام ويحفظ دعاء النجاة من الكرب.'
    ],
    learningOutcomesEn: [
      'Narrate the story of placing the Black Stone and deduce the Prophet\'s arbitration wisdom.',
      'Explain the first revelation in Cave Hira and the importance of reading and knowledge.',
      'Describe the secret and public phases of Islamic Dawah.',
      'Recount the story of Prophet Yunus and memorize his supplication of relief.'
    ],

    vocabulary: [
      {
        termAr: 'الحَجَرُ الأَسْوَد',
        termEn: 'The Black Stone (Al-Hajar Al-Aswad)',
        definitionAr: 'حجر مبارك من الجنة في الركن الجنوبي الشرقي للكعبة المشرفة يبدأ الطواف منه.'
      },
      {
        termAr: 'غَارُ حِرَاء',
        termEn: 'Cave of Hira',
        definitionAr: 'غار في جبل النور بمكة المكرمة كان يتعبد فيه النبي ﷺ ونزل فيه الوحي لأول مرة.'
      },
      {
        termAr: 'ذُو النُّون',
        termEn: 'Dhun-Noon (The Companion of the Whale)',
        definitionAr: 'لقب نبي الله يونس عليه السلام، والنون هو الحوت العظيم.'
      },
      {
        termAr: 'جَبَلُ الصَّفَا',
        termEn: 'Mount As-Safa',
        definitionAr: 'جبل بمكة المكرمة صعد عليه النبي ﷺ عندما أمره الله بالجهر بالدعوة الإسلامية.'
      }
    ],

    warmupHookAr: 'كيف استطاع شاب صادق وأمين أن يمنع حرباً كبرى بين قبائل مكة برداء واحد وحكمة بالغة؟ وكيف نجا نبي كريم في ظلمات بطن حوت عظيم في أعماق البحر بدعاء صادق؟ تعالوا نكتشف معاً هذه المحطات العظيمة في السيرة والقصص القرآني!',
    warmupHookEn: 'How did the Prophet Muhammad ﷺ prevent a massive tribal war with a simple cloak and pure wisdom? And how did Prophet Yunus survive inside a giant whale through sincere prayer? Let us discover together!',

    mainContentAr: `
### 1. حكمة النبي ﷺ في تجديد بناء الكعبة ووضع الحجر الأسود

* 🕋 **إعادة بناء الكعبة وحقن دماء قبائل قريش:**
  - عندما بلغ النبي ﷺ من العمر 35 عاماً (قبل البعثة بخمس سنوات)، هدمت السيول أجزاءً من الكعبة المشرفة، فقررت قريش إعادة بنائها بالمال الحلال الطيب.
  - فلما بلغ البناء موضع **الحجر الأسود**، تنازعت قبائل مكة، وأرادت كل قبيلة أن تنال شرف وضعه بمفردها، حتى استعدوا للقتال وسلت السيوف.
  - اقترح حكيمهم أبو أمية بن المغيرة أن يحكّموا أول رجل يدخل عليهم من باب المسجد الحرام.
  - فكان أول داخل هو **سيدنا محمد ﷺ**، فلما رأوه استبشروا وهتفوا بفرح: **«هذا الأمين، رضينا به حكماً!»**.

* 💡 **الحكمة النبوية العظيمة:**
  1. بسط النبي ﷺ رداءه الشريف على الأرض.
  2. وضع الحجر الأسود في وسط الرداء بيده الشريفة.
  3. أمر رؤساء القبائل جميعاً أن يمسك كل واحد منهم بطرف من أطراف الرداء ويرفعوه معاً إلى موضع الحجر.
  4. فلما رفعوه إلى مكانه، تناوله النبي ﷺ بيديه الكريمتين ووضعه في موضعه.
  - بهذه الحكمة العادلة، شاركت جميع القبائل في الشرف ورضوا جميعاً وحُقنت دماء المسلمين.

---

### 2. نزول الوحي في غار حراء والجهر بالدعوة

* ⛰️ **نزول الوحي وسورة العلق (بداية النور):**
  - كان النبي ﷺ يخلو بنفسه في **غار حراء** بجبل النور ليتفكر في خلق السماوات والأرض.
  - في شهر رمضان، نزل عليه الملك جبريل عليه السلام وقال: «اقرأ»، فقال النبي ﷺ: «ما أنا بقارئ».
  - فغطه جبريل ثم أرسله وأنزل الله أول آيات القرآن الكريم:
    ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ﴾.
  - رجع النبي ﷺ إلى زوجته السيدة خديجة رضي الله عنها فهدأت من روعه وقالت: «كلا والله ما يخزيك الله أبداً؛ إنك لتصل الرحم، وتصدق الحديث، وتحمل الكلّ، وتقري الضيف، وتعين على نوائب الحق».

* 📢 **الجهر بالدعوة الإسلامية من جبل الصفا:**
  - دامت الدعوة سراً 3 سنوات، فآمن السابقون الأولون (خديجة، أبو بكر، علي، وزيد رضي الله عنهم).
  - ثم نزل أمر الله بالجهر: ﴿فَاصْدَعْ بِمَا تُؤْمَرُ﴾.
  - صعد النبي ﷺ على **جبل الصفا** ونادى قريشاً بطناً بطناً، ودعاهم إلى التوحيد ونبذ عبادة الأصنام، وصبر على استهزائهم وأذاهم.

---

### 3. قصة نبي الله يونس عليه السلام (ذو النون) ودعاء النجاة

* 🐋 **في بطن الحوت:**
  - دعا نبي الله يونس عليه السلام أهل قريته (نينوى) بالعراق، فلما أصروا على الكفر، غضب وخرج من قريتهم دون إذن ربه وركب السفينة.
  - هاجت الأمواج واضطربت السفينة، فاقترع الركاب للتخفيف من الحمولة فوقعت القرعة على يونس عليه السلام فألقى بنفسه في البحر.
  - أرسل الله حوتاً ضخماً فالتقم يونس بأمر ربه دون أن يكسر له عظماً أو يخدش له لحماً.
  - في ظلمات ثلاث (ظلمة الليل، وظلمة البحر، وظلمة بطن الحوت)، استشعر يونس خطأه وسبح ربه وناداه بالدعاء الخالد:
    **﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾**.
  - فاستجاب الله له ونجاه من الغم وأمر الحوت فقذفه على الشاطئ وأنبت عليه شجرة من يقطين تظله وتغذيه.

---

### 4. Interactive Diagram: Kaabah & Seerah Milestones
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Black Stone Wisdom -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#fbbf24" font-size="15" font-weight="bold" text-anchor="middle">حكمة النبي ﷺ في وضع الحجر الأسود</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">1. رداء الشرف: بسط رداءه ووضع الحجر بوسطه</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">2. مشاركة الجميع: رؤساء القبائل رفعوا الرداء معاً</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">3. النتيجة: حقن الدماء وإرضاء كافة القبائل</text>
    <text x="25" y="170" fill="#fbbf24" font-size="13" font-weight="bold">✨ لقبوه بـ: «الصادق الأمين»</text>
  </g>

  <!-- Prophet Yunus Story -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#a78bfa" font-size="15" font-weight="bold" text-anchor="middle">قصة سيدنا يونس عليه السلام (ذو النون)</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">🌊 التقام الحوت في البحر بأمر الله دون أذى</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">🤲 دعاء النجاة: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ...﴾</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">🌱 النجاة وإنبات شجرة اليقطين المباركة</text>
    <text x="25" y="170" fill="#a78bfa" font-size="13" font-weight="bold">🛡️ دعوة الفرج لكل مؤمن في الشدائد</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Rebuilding the Kaabah & The Black Stone Wisdom
- Tribal conflict was resolved peacefully by Prophet Muhammad ﷺ using a cloak to allow all tribal chiefs to share in lifting the stone.
- Recognized unanimously as "Al-Ameen" (The Trustworthy).

### 2. Revelation & Public Proclamation
- The first divine revelation was in Cave Hira with Surah Al-Alaq ("Read").
- Secret Dawah lasted 3 years, followed by public proclamation from Mount Safa.

### 3. Story of Prophet Yunus (Jonah)
- Trapped inside the whale in triple darkness, he called upon Allah: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."
- Allah delivered him safely and caused a pumpkin plant to nourish and shelter him.
`,

    workedExamples: [
      {
        id: 'ex-p3-isl2-1',
        titleAr: 'مثال 1: استخراج صفات القائد الحكيم من قصة الكعبة',
        titleEn: 'Example 1: Leadership Lessons from the Kaabah Arbitration',
        problemAr: 'ما هي الصفات القيادية والأخلاقية التي أظهرها سيدنا محمد ﷺ في قصة وضع الحجر الأسود؟',
        problemEn: 'What leadership qualities did Prophet Muhammad ﷺ demonstrate during the Black Stone incident?',
        stepByStepSolutionAr: [
          'الخطوة 1: الصدق والأمانة التي اشتهر بها حتى قالت قريش بالإجماع: "هذا الأمين رضينا به".',
          'الخطوة 2: العدل وإشراك الجميع حتى لا تشعر أي قبيلة بالظلم أو التهميش.',
          'الخطوة 3: التفكير الإبداعي وحل النزاعات بالحكمة والسلام وجمع القلوب.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Renowned honesty and integrity recognized by all Quraysh.',
          'Step 2: Fairness and inclusivity, allowing every tribe to participate in the honor.',
          'Step 3: Creative problem-solving resolving conflicts peacefully and uniting hearts.'
        ],
        finalAnswerAr: 'الأمانة، والعدل في إشراك جميع القبائل، والحكمة في حل النزاع بسلام.',
        finalAnswerEn: 'Integrity, inclusive fairness, and wise conflict resolution.'
      },
      {
        id: 'ex-p3-isl2-2',
        titleAr: 'مثال 2: اللجوء إلى الله بالدعاء عند الشدائد',
        titleEn: 'Example 2: Turning to Allah in Hardship',
        problemAr: 'إذا واجهتك صعوبة أو شعرت بضيق أو خوف، ما الدعاء المبارك الذي علّمنا إياه سيدنا يونس عليه السلام؟',
        problemEn: 'When facing hardship, fear, or difficulty, which blessed supplication of Prophet Yunus should we recite?',
        stepByStepSolutionAr: [
          'الخطوة 1: اليقين بأن الله تعالى قريب يجيب دعوة المضطر إذا دعاه.',
          'الخطوة 2: ترديد دعاء ذي النون: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾.',
          'الخطوة 3: الاستغفار والعمل بجد وتفاؤل مع الثقة بفرج الله ورحمته.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Have firm faith that Allah is near and answers those in distress.',
          'Step 2: Recite Dhun-Noon\'s prayer: "La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen".',
          'Step 3: Seek forgiveness, work diligently, and maintain positive trust in Allah\'s relief.'
        ],
        finalAnswerAr: 'دعاء ذي النون: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾.',
        finalAnswerEn: 'Prophet Yunus\'s prayer: "La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen".'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-isl2-1',
        problemAr: 'ماذا فعل النبي ﷺ ليجعل جميع قبائل مكة تشترك في وضع الحجر الأسود؟',
        problemEn: 'How did Prophet Muhammad ﷺ enable all tribes to participate in placing the Black Stone?',
        solutionStepsAr: [
          '1. بسط رداءه الشريف على الأرض.',
          '2. وضع الحجر الأسود في وسطه.',
          '3. جعل رئيس كل قبيلة يمسك بطرف من أطراف الرداء ويرفعوه معاً.',
          '4. تناوله النبي ﷺ بيده ووضعه في مكانه الشريف.'
        ],
        solutionStepsEn: [
          '1. Spread out his cloak on the ground.',
          '2. Placed the Black Stone in the middle.',
          '3. Had the leader of each tribe hold one corner and lift it together.',
          '4. Placed the stone into its final spot with his noble hands.'
        ],
        finalAnswerAr: 'وضع الحجر في وسط رداءه وأمر زعماء القبائل بحمله معاً.',
        finalAnswerEn: 'Placed the stone on a cloak and had all tribal chiefs lift it together.'
      },
      {
        id: 'tb-p3-isl2-2',
        problemAr: 'ما هو الدعاء العظيم الذي ردده نبي الله يونس عليه السلام في بطن الحوت؟',
        problemEn: 'What is the great supplication repeated by Prophet Yunus inside the whale?',
        solutionStepsAr: [
          'الدعاء هو: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾.'
        ],
        solutionStepsEn: [
          'The prayer is: "La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen" (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers).'
        ],
        finalAnswerAr: '﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾.',
        finalAnswerEn: 'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-isl2-1',
        questionAr: 'ما هو أول ما نزل من القرآن الكريم على سيدنا محمد ﷺ في غار حراء؟',
        questionEn: 'What was the first revelation sent to Prophet Muhammad ﷺ in Cave Hira?',
        optionsAr: [
          '﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾ من سورة العلق',
          'سورة الفاتحة كاملة',
          'سورة الناس',
          'سورة الإخلاص'
        ],
        optionsEn: [
          'Surah Al-Alaq: "Read in the name of your Lord who created"',
          'Full Surah Al-Fatiha',
          'Surah An-Nas',
          'Surah Al-Ikhlas'
        ],
        correctIndex: 0,
        rationaleAr: 'أول ما نزل من القرآن الكريم هو صدر سورة العلق: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾.',
        rationaleEn: 'The first verses revealed were from Surah Al-Alaq starting with "Iqra".'
      },
      {
        id: 'fa-p3-isl2-2',
        questionAr: 'على أي جبل صعد النبي ﷺ ليعلن الجهر بالدعوة الإسلامية لأهل مكة؟',
        questionEn: 'On which mount did the Prophet ﷺ stand to proclaim the public Dawah?',
        optionsAr: ['جبل الصفا', 'جبل أحد', 'جبل الطور', 'جبل عرفات'],
        optionsEn: ['Mount As-Safa', 'Mount Uhud', 'Mount Toor', 'Mount Arafat'],
        correctIndex: 0,
        rationaleAr: 'صعد النبي ﷺ على جبل الصفا بمكة ونادى في قبطان قريش ليدعوهم إلى التوحيد والإيمان.',
        rationaleEn: 'The Prophet ﷺ stood atop Mount As-Safa to proclaim the public call to Islam.'
      },
      {
        id: 'fa-p3-isl2-3',
        questionAr: 'ما الشجرة التي أنبتها الله على سيدنا يونس عليه السلام بعد خروجه من بطن الحوت؟',
        questionEn: 'Which plant did Allah cause to grow over Prophet Yunus after he emerged from the whale?',
        optionsAr: ['شجرة من يقطين (قرع)', 'شجرة زيتون', 'نخلة تمر', 'شجرة تين'],
        optionsEn: ['A pumpkin tree (Yaqteen)', 'Olive tree', 'Date palm', 'Fig tree'],
        correctIndex: 0,
        rationaleAr: 'قال تعالى: ﴿وَأَنْبَتْنَا عَلَيْهِ شَجَرَةً مِنْ يَقْطِينٍ﴾، واليقطين يتميز بأوراقه العريضة المظللة وثماره المغذية.',
        rationaleEn: 'Allah caused a pumpkin (yaqteen) plant to grow over Prophet Yunus to shade and nourish him.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة حكمة النبي ﷺ وأمانته في وضع الحجر الأسود، ونزول الوحي في غار حراء بسورة العلق، ومراحل الجهر بالدعوة، وقصة سيدنا يونس عليه السلام ودعاء النجاة في بطن الحوت.',
    summaryEn: 'We learned about the Prophet\'s arbitration wisdom with the Black Stone, the first revelation of Surah Al-Alaq, the public Dawah, and the miraculous story and prayer of Prophet Yunus.',

    assessment: {
      id: 'quiz-p3-isl-2',
      lectureId: 'p3-isl-2',
      titleAr: 'اختبار المحاضرة 2: السيرة والقصص (الكعبة، الوحي، الجهر بالدعوة، وقصة يونس)',
      titleEn: 'Assessment 2: Prophetic Seerah & Prophet Yunus Story',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-isl2-1',
          textAr: 'ما اللقب الذي أطلقته قريش على سيدنا محمد ﷺ قبل البعثة؟',
          textEn: 'What title did Quraysh give to Muhammad ﷺ before his prophethood?',
          optionsAr: ['الصادق الأمين', 'الفاتح', 'الكريم', 'الشجاع'],
          optionsEn: ['As-Sadiq Al-Ameen (The Truthful & Trustworthy)', 'The Conqueror', 'The Generous', 'The Brave'],
          correctIndex: 0,
          conceptTestedAr: 'أخلاق النبي ﷺ قبل البعثة',
          conceptTestedEn: 'Prophet\'s Character',
          explanationAr: 'كانت قريش تلقبه بالصادق الأمين لما عرفوه عنه من صدق الحديث وحفظ الأمانات.',
          explanationEn: 'He was universally called As-Sadiq Al-Ameen for his truthful and trustworthy character.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl2-2',
          textAr: 'كم سنة استمرت مرحلة الدعوة السرية في بداية الإسلام؟',
          textEn: 'How many years did the secret phase of Dawah last?',
          optionsAr: ['3 سنوات', '5 سنوات', 'سنة واحدة', '10 سنوات'],
          optionsEn: ['3 years', '5 years', '1 year', '10 years'],
          correctIndex: 0,
          conceptTestedAr: 'مراحل الدعوة الإسلامية',
          conceptTestedEn: 'Phases of Islamic Dawah',
          explanationAr: 'استمرت الدعوة السرية ثلاث سنوات يدعو فيها النبي ﷺ أهله والمقربين إليه.',
          explanationEn: 'The secret phase of Dawah lasted for three years before the public call.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-isl2-3',
          textAr: 'ما الحكمة التي طبقها النبي ﷺ لمنع القتال بين قبائل مكة عند وضع الحجر الأسود؟',
          textEn: 'What wise strategy did the Prophet apply to prevent war over the Black Stone?',
          optionsAr: [
            'وضع الحجر في ثوب وطلب من كل قبيلة أن ترفع طرفاً منه معاً',
            'أخذ الحجر وسافر به إلى المدينة',
            'ترك الحجر في مكانه القديم دون تغيير',
            'اختار قبيلة واحدة فقط لحمله'
          ],
          optionsEn: [
            'Placed the stone on a cloth and had every tribe lift a corner together',
            'Carried the stone to Madinah',
            'Left the stone where it was',
            'Selected only one tribe to carry it'
          ],
          correctIndex: 0,
          conceptTestedAr: 'حكمة وضع الحجر الأسود',
          conceptTestedEn: 'Black Stone Wisdom',
          explanationAr: 'بسط رداءه وأشرك جميع زعماء القبائل في حمله لينال الجميع الشرف دون نزاع.',
          explanationEn: 'He placed the stone on his cloak and invited all tribal leaders to lift it together.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl2-4',
          textAr: 'ما الدعاء الذي دعا به نبي الله يونس عليه السلام وهو في بطن الحوت؟',
          textEn: 'What was the prayer of Prophet Yunus inside the whale?',
          optionsAr: [
            '﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾',
            '﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً﴾',
            '﴿رَبِّ اشْرَحْ لِي صَدْرِي﴾',
            '﴿رَبِّ زِدْنِي عِلْمًا﴾'
          ],
          optionsEn: [
            'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen',
            'Rabbana atina fid-dunya hasanah',
            'Rabbi-shrah li sadri',
            'Rabbi zidni ilma'
          ],
          correctIndex: 0,
          conceptTestedAr: 'دعاء ذي النون في القرآن الكريم',
          conceptTestedEn: 'Dhun-Noon Supplication',
          explanationAr: 'هذا الدعاء المبارك جمع بين التوحيد والتسبيح والاعتراف بالتقصير، وهو سبب لتفريج الكربات.',
          explanationEn: 'This great supplication combines monotheism, glorification of Allah, and repentance.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl2-5',
          textAr: 'ما هي أول كلمة نزلت من القرآن الكريم في غار حراء؟',
          textEn: 'What was the very first word revealed in the Quran in Cave Hira?',
          optionsAr: ['اقْرَأْ', 'قُلْ', 'سَبِّحْ', 'اسْمَعْ'],
          optionsEn: ['Iqra (Read)', 'Qul (Say)', 'Sabbih (Glorify)', 'Isma (Listen)'],
          correctIndex: 0,
          conceptTestedAr: 'أول ما نزل من القرآن',
          conceptTestedEn: 'First Word of Revelation',
          explanationAr: 'أول كلمة نزلت هي "اقْرَأْ" بياناً لقيمة العلم والمعرفة والقراءة في الإسلام.',
          explanationEn: '"Iqra" (Read) was the first word revealed, emphasizing knowledge and learning.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: ISLAMIC WORSHIP: RULES OF PRAYER, CONDITIONS, PILLARS, SUNNAHS, CONGREGATION, FRIDAY & EID ──
  {
    id: 'p3-isl-3',
    order: 3,
    titleAr: 'المحاضرة 3: العبادات: فقه وأحكام الصلاة (شروط الصحة، الأركان، السنن)، فضل صلاة الجماعة وصلاة الجمعة والعيدين',
    titleEn: 'Lecture 3: Islamic Worship: Rules of Prayer (Conditions, Pillars, Sunnahs), Congregational, Friday & Eid Prayers',
    subtitleAr: 'التمييز بين شروط صحة الصلاة وأركانها وسننها، فضل صلاة الجماعة، آداب المسجد، وكيفية صلاة الجمعة والعيدين',
    subtitleEn: 'Learn prayer conditions, pillars, and Sunnahs, the reward of congregational prayer, mosque manners, and Friday & Eid prayers.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — العبادات وفقه الصلاة',
    unitTitleEn: 'Theme 2: The World Around Me — Worship & Prayer Fiqh',
    lessonNumberAr: 'الدرس 3: أحكام الصلاة، صلاة الجماعة، الجمعة والعيدين',
    lessonNumberEn: 'Lesson 3: Prayer Rules, Congregational, Friday & Eid Prayers',

    keyConceptsAr: [
      'مكانة الصلاة في الإسلام: الركن الثاني من أركان الإسلام، وهي عماد الدين وأول ما يُحاسب عليه العبد يوم القيامة.',
      'شروط صحة الصلاة (أمور تسبق الصلاة ويلزم توفرها لتصح):',
      '  1. الإسلام والعقل والتمييز.',
      '  2. دخول وقت الصلاة (لكل صلاة وقت محدد معلوم).',
      '  3. الطهارة من الحدثين (الوضوء أو الغسل) وطهارة البدن والثوب والمكان من النجاسات.',
      '  4. سَتْر العَوْرة (عورة الرجل من السرة إلى الركبة، وعورة المرأة جميع بدنها عدا الوجه والكفين).',
      '  5. استقبال القِبلة (نحو الكعبة المشرفة بمكة المكرمة).',
      '  6. النِّيَّة محلها القلب.',
      'أركان الصلاة الأساسية (أفعال وأقوال تبطل الصلاة بترك أحدها عمداً أو سهواً):',
      '  - تكبيرة الإحرام ("الله أكبر").',
      '  - القيام في صلاة الفريضة مع القدرة.',
      '  - قراءة سورة الفاتحة في كل ركعة.',
      '  - الركوع والرفع منه والاعتدال قائماً.',
      '  - السجود على الأعضاء السبعة (الجبهة والأنف، والكفان، والركبتان، وأطراف القدمين) والرفع منه.',
      '  - الجلوس بين السجدتين، والجلوس للتشهد الأخير وقراءة التشهد.',
      '  - التسليم ("السلام عليكم ورحمة الله").',
      '  - الطمأنينة والخشوع في جميع الأركان والترتيب بينها.',
      'سُنن الصلاة (أقوال وأفعال يثاب فاعلها ولا تبطل الصلاة بتركها): دعاء الاستفتاح، قراءة ما تيسر من السور بعد الفاتحة، رفع اليدين عند التكبير، والتسبيح في الركوع والسجود.',
      'فضل صلاة الجماعة وآداب المسجد:',
      '  - صلاة الجماعة تفضل صلاة الفرد بسبع وعشرين (27) درجة.',
      '  - آداب المسجد: لبس الثياب النظيفة، التطيب، المشي بسكينة ووقار، تقديم الرجل اليمنى عند الدخول مع الدعاء ("اللهم افتح لي أبواب رحمتك")، وصلاة ركعتي تحية المسجد.',
      'صلاة الجمعة وصلاة العيدين:',
      '  - صلاة الجمعة: فرض على المسلمين البالغين، ركعتان جهريتان يسبقهما خطبتان.',
      '  - صلاة العيدين (الفطر والأضحى): ركعتان تجمع المسلمين بالفرح والتكبير وصلة الرحم.'
    ],
    keyConceptsEn: [
      'Significance of Salah: Second pillar of Islam and the pillar of religion.',
      'Conditions of Prayer (Shuroot): Islam, sane intellect, arrival of prayer time, purity/Wudu, covering Awrah, facing Qibla, and sincere intention.',
      'Pillars of Prayer (Arkan): Takbeerat Al-Ihram, standing, reciting Surah Al-Fatiha, bowing (Rukoo), prostrating (Sujood on 7 parts), final Tashahhud, Salam, and tranquility (Khushoo).',
      'Sunnahs of Prayer: Opening supplication, extra verses after Fatiha, raising hands, Tasbeeh in Rukoo/Sujood.',
      'Congregational Prayer (Jama\'ah) & Mosque Manners: 27 times more reward than individual prayer, quiet walking, entering with right foot, and Tahiyyat Al-Masjid.',
      'Friday (Jumu\'ah) & Eid Prayers: Community unity, Friday sermon, festive Eid celebrations.'
    ],

    conceptMapAr: [
      'شروط صحة الصلاة (طهارة، قِبلة، ستر عورة) ➔ أركان الصلاة (تكبيرة، فاتحة، ركوع، سجود، سلام) ➔ سنن الصلاة ➔ فضل صلاة الجماعة (27 درجة) والجمعة والعيدين'
    ],
    conceptMapEn: [
      'Conditions (Purity, Qibla, Awrah) ➔ Pillars (Takbeer, Fatiha, Rukoo, Sujood, Salam) ➔ Sunnahs ➔ Congregational Reward (27x), Friday & Eid Prayers'
    ],

    learningOutcomesAr: [
      'أن يميز التلميذ بين شروط صحة الصلاة وأركانها وسننها بدقة.',
      'أن يؤدي أركان الصلاة السبعة بالترتيب الصحيح مع الطمأنينة والخشوع.',
      'أن يوضح فضل صلاة الجماعة وثوابها المضاعف (27 درجة).',
      'أن يعدد آداب الذهاب إلى المسجد والدخول إليه والخروج منه.',
      'أن يشرح فضل وأهمية صلاة الجمعة وصلاة العيدين في حياة المسلم.'
    ],
    learningOutcomesEn: [
      'Differentiate clearly between conditions, pillars, and Sunnahs of Salah.',
      'Perform the essential prayer pillars with tranquility and proper sequence.',
      'Explain the 27x reward multiplier of congregational prayer in the mosque.',
      'List the etiquette of attending the mosque and prayer entrance supplications.',
      'Understand the significance of Friday congregational prayer and Eid celebrations.'
    ],

    vocabulary: [
      {
        termAr: 'شُرُوطُ الصَّلَاة',
        termEn: 'Conditions of Prayer (Shuroot)',
        definitionAr: 'أشياء لازمة يجب توفرها قبل الدخول في الصلاة كالطهارة والوضوء وستر العورة واستقبال القبلة.'
      },
      {
        termAr: 'أَرْكَانُ الصَّلَاة',
        termEn: 'Pillars of Prayer (Arkan)',
        definitionAr: 'أقوال وأفعال أساسية داخل الصلاة لا تصح الصلاة بدونها مثل تكبيرة الإحرام، قراءة الفاتحة، والركوع والسجود.'
      },
      {
        termAr: 'سُنَنُ الصَّلَاة',
        termEn: 'Sunnahs of Prayer',
        definitionAr: 'أفعال وأقوال نبوية مستحبة تزيد أجر المصلي مثل دعاء الاستفتاح وقراءة سورة بعد الفاتحة.'
      },
      {
        termAr: 'صَلَاةُ الجَمَاعَة',
        termEn: 'Congregational Prayer (Salat Al-Jama\'ah)',
        definitionAr: 'صلاة يؤديها المسلمون معاً خلف إمام واحد في المسجد وتزيد في الأجر 27 ضعفاً.'
      },
      {
        termAr: 'تَحِيَّةُ المَسْجِد',
        termEn: 'Greeting of the Mosque (Tahiyyat Al-Masjid)',
        definitionAr: 'ركعتان نافلة يصليها المسلم عند دخول المسجد قبل أن يجلس.'
      }
    ],

    warmupHookAr: 'هل تعلم لماذا جعل الله أجر الصلاة في المسجد مع الجماعة 27 ضعفاً لصلاة الفرد بمفرده في البيت؟ وما هو الفرق بين "شرط الصلاة" و"ركن الصلاة"؟ هيا نتعلم كيف نصلي صلاة كاملة صحيحة يحبها الله تعالى ورسوله!',
    warmupHookEn: 'Did you know praying in congregation in the mosque brings 27 times the reward of praying alone? Let us master the conditions, pillars, and etiquette of prayer together!',

    mainContentAr: `
### 1. شروط صحة الصلاة وأركانها وسننها (Fiqh of Prayer)

* 📋 **أولاً: شروط صحة الصلاة (أمور تسبق الصلاة ولا تصح الصلاة بدونها):**
  1. **دخول الوقت:** أن يحين وقت الصلاة المكتوبة.
  2. **الطهارة:** وضوء صحيح من الحدث، وطهارة الثوب والبدن والمكان من النجاسات.
  3. **ستر العورة:** ثياب ساترة ومحتشمة تناسب الوقوف بين يدي الله.
  4. **استقبال القبلة:** التوجه نحو الكعبة المشرفة بمكة المكرمة.
  5. **النية:** القصد بالقلب لأداء الصلاة لله تعالى.

* 🌟 **ثانياً: أركان الصلاة الأساسية (داخل الصلاة - تبطل الصلاة بتركها):**
  - **تكبيرة الإحرام:** قول "الله أكبر" في أول الصلاة.
  - **القيام:** الوقوف معتدلاً في صلاة الفريضة للقادر.
  - **قراءة سورة الفاتحة:** ركن لازم في كل ركعة.
  - **الركوع والاعتدال قائماً:** الانحناء ووضع اليدين على الركبتين مع استواء الظهر.
  - **السجود والرفع منه:** السجود مرتين على الأعضاء السبعة (الجبهة والأنف، الكفين، الركبتين، أطراف القدمين).
  - **الجلوس بين السجدتين والجلوس للتشهد الأخير وقراءته.**
  - **التسليم:** الالتفات يميناً ثم يساراً بقول "السلام عليكم ورحمة الله".
  - **الطمأنينة والخشوع:** السكون والتمهل في كل ركن.

* 🌿 **ثالثاً: سنن الصلاة (مستحبة وتزيد الثواب):**
  - دعاء الاستفتاح بعد تكبيرة الإحرام.
  - قراءة ما تيسر من القرآن بعد الفاتحة في الركعتين الأولى والثانية.
  - رفع اليدين عند التكبير والركوع والرفع منه.

---

### 2. فضل صلاة الجماعة وآداب المسجد

* 🕌 **فضل صلاة الجماعة:**
  - قال رسول الله ﷺ: **«صَلَاةُ الجَمَاعَةِ تَفْضُلُ صَلَاةَ الفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً»**.
  - صلاة الجماعة توحد المسلمين في صفوف مستوية وتزرع المحبة والأخوة بينهم.

* 🚶 **آداب الذهاب إلى المسجد:**
  1. ارتداء ملابس طاهرة وأنيقة، والتطيب برائحة طيبة والسواك.
  2. المشي إلى المسجد بسكينة ووقار.
  3. الدخول بالرجل اليمنى وترديد الدعاء: **«اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ»**.
  4. صلاة ركعتين خفيفتين (تحية المسجد) قبل الجلوس.
  5. الخروج بالرجل اليسرى مع الدعاء: **«اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ»**.

---

### 3. صلاة الجمعة وصلاة العيدين

* 📅 **صلاة الجمعة:**
  - عيد أسبوعي للمسلمين، وفريضة على الرجال.
  - ركعتان جهريتان يسبقهما خطبتان من الإمام لتذكير المسلمين بالخير والتقوى.
* 🎉 **صلاة العيدين (عيد الفطر وعيد الأضحى):**
  - صلاة فرح وشكر لله بعد إتمام الطاعات، تؤدى ركعتين في صباح العيد بمصلى العيد أو المسجد مع تكبيرات العيد المباركة.

---

### 4. Interactive Diagram: Prayer Pillars & Etiquette
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Prayer Essentials -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">أركان وشروط الصلاة</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">💧 الشروط: الطهارة والوضوء، القبلة، ستر العورة</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">📖 الأركان: تكبيرة الإحرام، الفاتحة، الركوع، السجود</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">🤲 السجود على الأعضاء السبعة بالاطمئنان</text>
    <text x="25" y="170" fill="#38bdf8" font-size="13" font-weight="bold">🕊️ السلام: ختام الصلاة والدعاء</text>
  </g>

  <!-- Congregation & Mosque Manners -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">صلاة الجماعة وآداب المسجد</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">🌟 الأجر: صلاة الجماعة تفضل الفرد بـ 27 درجة</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">🚪 الدخول باليمنى: «اللهم افتح لي أبواب رحمتك»</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">🕌 تحية المسجد: ركعتان نافلة قبل الجلوس</text>
    <text x="25" y="170" fill="#34d399" font-size="13" font-weight="bold">🎉 صلاة الجمعة والعيدين: فرحة ووحدة المسلمين</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Prayer Conditions, Pillars & Sunnahs
- Conditions (Pre-requisites): Purity/Wudu, prayer time, covering Awrah, facing Qibla, sincere intention.
- Pillars (Inside Salah): Takbeerat Al-Ihram, standing, Surah Al-Fatiha, Rukoo, Sujood on 7 parts, final Tashahhud, Tasleem, tranquility.
- Sunnahs: Opening Dua, reciting extra Quranic verses, raising hands.

### 2. Congregational Prayer & Mosque Etiquette
- Hadith: Congregational prayer in the mosque exceeds individual prayer by 27 degrees.
- Mosque Manners: Clean clothes, entering with right foot with Dua, praying Tahiyyat Al-Masjid, serene demeanor.

### 3. Friday & Eid Prayers
- Friday Prayer: Weekly congregational gathering of two audible rak'ahs preceded by sermons.
- Eid Prayers: Festive community celebrations for Eid Al-Fitr and Eid Al-Adha.
`,

    workedExamples: [
      {
        id: 'ex-p3-isl3-1',
        titleAr: 'مثال 1: تصنيف أفعال الصلاة بين (شرط - ركن - سنة)',
        titleEn: 'Example 1: Categorizing Prayer Components',
        problemAr: 'صنف الأفعال التالية: (الوضوء، قراءة الفاتحة، دعاء الاستفتاح، التسليم، ستر العورة).',
        problemEn: 'Categorize the following actions into Condition, Pillar, or Sunnah: (Wudu, Fatiha, Opening Dua, Tasleem, Covering Awrah).',
        stepByStepSolutionAr: [
          'الخطوة 1: (الوضوء وستر العورة) = من **شروط صحة الصلاة** لأنها تسبق الصلاة ويلزم توفرها.',
          'الخطوة 2: (قراءة الفاتحة والتسليم) = من **أركان الصلاة** الأساسية داخل الصلاة.',
          'الخطوة 3: (دعاء الاستفتاح) = من **سنن الصلاة** المستحبة التي تزيد الثواب.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Wudu and covering Awrah are Conditions (Shuroot) required before prayer starts.',
          'Step 2: Reciting Fatiha and Tasleem are Core Pillars (Arkan) inside the prayer.',
          'Step 3: Opening Dua is an encouraged Sunnah multiplying rewards.'
        ],
        finalAnswerAr: 'الوضوء وستر العورة: شروط. قراءة الفاتحة والتسليم: أركان. دعاء الاستفتاح: سنة.',
        finalAnswerEn: 'Wudu & Awrah: Conditions. Fatiha & Tasleem: Pillars. Opening Dua: Sunnah.'
      },
      {
        id: 'ex-p3-isl3-2',
        titleAr: 'مثال 2: مضاعفة ثواب صلاة الجماعة',
        titleEn: 'Example 2: Calculating Congregational Prayer Rewards',
        problemAr: 'إذا صلى عمر صلاة الظهر في المسجد مع الجماعة، بينما صلى صديقه بمفرده في البيت، كم ضعفاً يزيد أجر عمر؟',
        problemEn: 'If Omar prayed Dhuhr in congregation at the mosque while his friend prayed alone at home, how many times greater is Omar\'s reward?',
        stepByStepSolutionAr: [
          'الخطوة 1: صلاة الفرد بمفرده تُحسب بأجر صلاة واحدة (درجة واحدة).',
          'الخطوة 2: صلاة الجماعة تفضل صلاة الفرد بـ 27 درجة بنص الحديث الشريف.',
          'الخطوة 3: أجر صلاة الجماعة = 27 ضعفاً لصلاة المنفرد.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Individual prayer yields 1 degree of reward.',
          'Step 2: Congregational prayer in the mosque gives 27 degrees of reward.',
          'Step 3: Congregational reward = 27 times higher.'
        ],
        finalAnswerAr: 'يزيد أجر صلاة الجماعة بـ 27 ضعفاً لصلاة الفرد بمفرده.',
        finalAnswerEn: 'Congregational prayer multiplies rewards by 27 times.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-isl3-1',
        problemAr: 'ما هي الأعضاء السبعة التي يجب أن يسجد عليها المصلي؟',
        problemEn: 'What are the seven body parts upon which a Muslim must prostrate in Sujood?',
        solutionStepsAr: [
          '1. الجبهة مع الأنف (عضو واحد).',
          '2. الكفان (اليد اليمنى واليد اليسرى - عضوان).',
          '3. الركبتان (الركبة اليمنى واليسرى - عضوان).',
          '4. أطراف أصابع القدمين (القدم اليمنى واليسرى - عضوان).'
        ],
        solutionStepsEn: [
          '1. Forehead along with the nose (1 part).',
          '2. Both hands/palms (2 parts).',
          '3. Both knees (2 parts).',
          '4. Toes of both feet (2 parts).'
        ],
        finalAnswerAr: 'الجبهة والأنف، الكفان، الركبتان، وأطراف القدمين.',
        finalAnswerEn: 'Forehead & nose, both hands, both knees, and toes of both feet.'
      },
      {
        id: 'tb-p3-isl3-2',
        problemAr: 'ما هو دعاء دخول المسجد ودعاء الخروج منه؟',
        problemEn: 'What are the supplications for entering and exiting the mosque?',
        solutionStepsAr: [
          'دعاء دخول المسجد بالرجل اليمنى: «اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ».',
          'دعاء الخروج من المسجد بالرجل اليسرى: «اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ».'
        ],
        solutionStepsEn: [
          'Mosque Entrance Dua: "Allahumma iftah li abwaba rahmatik" (O Allah, open for me the gates of Your mercy).',
          'Mosque Exiting Dua: "Allahumma inni as\'aluka min fadlik" (O Allah, I ask You of Your bounty).'
        ],
        finalAnswerAr: 'دخولاً: «اللهم افتح لي أبواب رحمتك»، وخروجاً: «اللهم إني أسألك من فضلك».',
        finalAnswerEn: 'Entrance: "Open for me the gates of Your mercy", Exit: "I ask You of Your bounty".'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-isl3-1',
        questionAr: 'كم تزيد صلاة الجماعة في الأجر عن صلاة الفرد بمفرده؟',
        questionEn: 'How much does congregational prayer exceed individual prayer in reward?',
        optionsAr: ['بـ 27 درجة', 'بـ 10 درجات', 'بـ 5 درجات', 'بـ 50 درجة'],
        optionsEn: ['By 27 degrees', 'By 10 degrees', 'By 5 degrees', 'By 50 degrees'],
        correctIndex: 0,
        rationaleAr: 'قال النبي ﷺ: «صلاة الجماعة تفضل صلاة الفذ بسبع وعشرين درجة».',
        rationaleEn: 'The Prophet ﷺ confirmed that congregational prayer is 27 degrees higher in reward.'
      },
      {
        id: 'fa-p3-isl3-2',
        questionAr: 'أي من التالية يُعد من أركان الصلاة التي تبطل الصلاة بتركها؟',
        questionEn: 'Which of the following is a mandatory Pillar of Prayer without which prayer is invalid?',
        optionsAr: ['قراءة سورة الفاتحة', 'دعاء الاستفتاح', 'لبس العطر', 'قراءة سورة قصيرة بعد الفاتحة'],
        optionsEn: ['Reciting Surah Al-Fatiha', 'Opening supplication', 'Wearing perfume', 'Reciting short surah after Fatiha'],
        correctIndex: 0,
        rationaleAr: 'قراءة سورة الفاتحة ركن أساسي في كل ركعة، لقوله ﷺ: «لا صلاة لمن لم يقرأ بفاتحة الكتاب».',
        rationaleEn: 'Surah Al-Fatiha is an essential pillar; without it the prayer is invalid.'
      },
      {
        id: 'fa-p3-isl3-3',
        questionAr: 'ما اسم الركعتين اللتين يصليهما المسلم عند دخول المسجد قبل الجلوس؟',
        questionEn: 'What are the two rak\'ahs prayed upon entering the mosque before sitting called?',
        optionsAr: ['تحية المسجد', 'صلاة الوتر', 'صلاة الاستخارة', 'صلاة الكسوف'],
        optionsEn: ['Tahiyyat Al-Masjid (Greeting of Mosque)', 'Witr Prayer', 'Istikhara Prayer', 'Eclipse Prayer'],
        correctIndex: 0,
        rationaleAr: 'تحية المسجد سنة نبوية مؤكدة تؤدى عند دخول المسجد تكريماً لبيت الله.',
        rationaleEn: 'Tahiyyat Al-Masjid is the greeting prayer performed upon entering the mosque.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة شروط صحة الصلاة وأركانها وسننها، وفضل صلاة الجماعة (27 درجة)، وآداب المسجد، وأحكام وسنن صلاة الجمعة وصلاة العيدين.',
    summaryEn: 'We learned prayer conditions, pillars, Sunnahs, the 27x reward of congregational prayer, mosque etiquette, Friday prayers, and Eid festivities.',

    assessment: {
      id: 'quiz-p3-isl-3',
      lectureId: 'p3-isl-3',
      titleAr: 'اختبار المحاضرة 3: فقه وأحكام الصلاة وصلاة الجماعة والجمعة والعيدين',
      titleEn: 'Assessment 3: Prayer Fiqh, Congregation, Friday & Eid Prayers',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-isl3-1',
          textAr: 'ما التكبيرة التي يبدأ بها المسلم صلاته وبها يدخل في حرم الصلاة؟',
          textEn: 'Which opening Takbeer begins the prayer and enters the state of prayer?',
          optionsAr: ['تكبيرة الإحرام', 'تكبيرة الركوع', 'تكبيرة السجود', 'تكبيرة العيد'],
          optionsEn: ['Takbeerat Al-Ihram', 'Takbeer of Rukoo', 'Takbeer of Sujood', 'Takbeer of Eid'],
          correctIndex: 0,
          conceptTestedAr: 'تكبيرة الإحرام ركن الصلاة',
          conceptTestedEn: 'Opening Takbeer Pillar',
          explanationAr: 'تكبيرة الإحرام بقول "الله أكبر" في أول الصلاة هي ركن تبدأ به الصلاة وتحرم به مبطلاتها.',
          explanationEn: 'Takbeerat Al-Ihram is the opening pillar of prayer declaring Allah\'s greatness.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl3-2',
          textAr: 'أي من التالية يعتبر شرطاً لصحة الصلاة يجب توفره قبل البدء فيها؟',
          textEn: 'Which of the following is a Condition required BEFORE beginning the prayer?',
          optionsAr: ['استقبال القبلة والطهارة', 'التشهد الأخير', 'قراءة الفاتحة', 'الركوع'],
          optionsEn: ['Facing the Qibla and Purity (Wudu)', 'Final Tashahhud', 'Reciting Fatiha', 'Bowing (Rukoo)'],
          correctIndex: 0,
          conceptTestedAr: 'شروط صحة الصلاة',
          conceptTestedEn: 'Conditions of Prayer',
          explanationAr: 'استقبال القبلة والوضوء والطهارة من شروط صحة الصلاة التي تسبق الصلاة.',
          explanationEn: 'Facing the Qibla and Wudu are pre-requisite conditions before starting Salah.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-isl3-3',
          textAr: 'ما هي القدم التي يستحب تقديمها عند دخول المسجد؟',
          textEn: 'Which foot is Sunnah to enter the mosque with?',
          optionsAr: ['القدم اليمنى', 'القدم اليسرى', 'القدمان معاً', 'لا فرق'],
          optionsEn: ['Right foot', 'Left foot', 'Both feet together', 'No difference'],
          correctIndex: 0,
          conceptTestedAr: 'آداب دخول المسجد',
          conceptTestedEn: 'Mosque Entrance Etiquette',
          explanationAr: 'يستحب الدخول بالرجل اليمنى وقول دعاء دخول المسجد، والخروج بالرجل اليسرى.',
          explanationEn: 'It is Sunnah to enter the mosque with the right foot and exit with the left.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl3-4',
          textAr: 'كم عدد ركعات صلاة الجمعة التي تصلى جماعة بعد الخطبة؟',
          textEn: 'How many rak\'ahs is Friday (Jumu\'ah) prayer after the sermon?',
          optionsAr: ['ركعتان جهريتان', '4 ركعات', '3 ركعات', 'ركعة واحدة'],
          optionsEn: ['2 audible Rak\'ahs', '4 Rak\'ahs', '3 Rak\'ahs', '1 Rak\'ah'],
          correctIndex: 0,
          conceptTestedAr: 'صفة صلاة الجمعة',
          conceptTestedEn: 'Friday Prayer Form',
          explanationAr: 'صلاة الجمعة ركعتان جهريتان يؤديهما المسلمون خلف الإمام بعد الاستماع للخطبتين.',
          explanationEn: 'Friday prayer consists of two audible rak\'ahs preceded by the Khutbah.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl3-5',
          textAr: 'ما حكم الطمأنينة والخشوع في أركان الصلاة (كالركوع والسجود)؟',
          textEn: 'What is the ruling on tranquility and calmness (Tuma\'neenah) during prayer pillars?',
          optionsAr: ['ركن أساسي لا تصح الصلاة بدونه', 'مستحب فقط', 'مكروه', 'ليس له أهمية'],
          optionsEn: ['Mandatory Pillar without which prayer is invalid', 'Encouraged only', 'Disliked', 'Not important'],
          correctIndex: 0,
          conceptTestedAr: 'الطمأنينة في الصلاة',
          conceptTestedEn: 'Tranquility in Prayer',
          explanationAr: 'الطمأنينة بالسكون والاستقرار في الركوع والسجود والاعتدال ركن أساسي في الصلاة.',
          explanationEn: 'Tranquility and composure in every movement are an essential pillar of prayer.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: ISLAMIC MORALS: KINDNESS TO NEIGHBORS, TRUSTWORTHINESS, ANIMAL WELFARE & LISTENING ETIQUETTE ──
  {
    id: 'p3-isl-4',
    order: 4,
    titleAr: 'المحاضرة 4: القيم والأخلاق: الإحسان إلى الجار، الأمانة، الرفق بالحيوان، وآداب الحديث والاستماع',
    titleEn: 'Lecture 4: Islamic Values: Kindness to Neighbors, Trustworthiness, Animal Welfare & Listening Etiquette',
    subtitleAr: 'حقوق الجار والإحسان إليه، خلق الأمانة، رحمة الحيوانات والرفق بها، وآداب الحوار وحسن الاستماع والتواصل الطيب',
    subtitleEn: 'Learn rights of neighbors, honesty and trust, compassion for animals, and noble communication and listening manners.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الأخلاق والقيم الإسلامية',
    unitTitleEn: 'Theme 2: The World Around Me — Islamic Morals & Values',
    lessonNumberAr: 'الدرس 4: الإحسان للجار، الأمانة، والرفق بالحيوان',
    lessonNumberEn: 'Lesson 4: Neighbor Rights, Trustworthiness & Animal Welfare',

    keyConceptsAr: [
      'حقوق الجار والإحسان إليه في الإسلام:',
      '  - قال رسول الله ﷺ: **«مَا زَالَ جِبْرِيلُ يُوصِينِي بِالجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ»**.',
      '  - صور الإحسان إلى الجار: إلقاء السلام، السؤال عنه إذا غاب وعيادته إذا مرض، مشاركته في الأفراح ومواساته في الأحزان، عدم إزعاجه بالأصوات العالية أو إلقاء القمامة أمام بابه، وإهداؤه من الطعام.',
      'خلق الأمانة والصدق في المعاملات:',
      '  - الأمانة تشمل: حفظ ودائع الناس، أداء الواجبات المدرسية بإتقان، حفظ الأسرار، وعدم الغش في الامتحانات أو البيع والشراء.',
      '  - قال تعالى: ﴿إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا﴾.',
      'الرفق بالحيوان والرحمة بجميع المخلوقات:',
      '  - الإسلام دين الرحمة الشاملة للإنسان والحيوان والبيئة.',
      '  - قصة الرجل الصالح والكلب العطشان: نزل البئر وملأ خفه ماءً وسقى كلباً كاد يموت من العطش، فشكر الله له فغفر له وأدخله الجنة.',
      '  - قصة المرأة والهرة: حذّر النبي ﷺ من عذاب امرأة حبست قطة فلم تطعمها ولم تدعها تأكل من خشاش الأرض حتى ماتت فدخلت النار.',
      '  - إطعام الحيوانات والطيور وسقايتها وعدم إيذائها أو تحميلها ما لا تطيق عبادة يثاب عليها المسلم.',
      'آداب الحديث والاستماع والتواصل الطيب:',
      '  - التحدث بالقول الطيب والكلمة الحسنة: ﴿وَقُولُوا لِلنَّاسِ حُسْنًا﴾.',
      '  - حسن الاستماع والإنصات للمتحدث وعدم مقاطعته.',
      '  - خفض الصوت والتحدث بهدوء واحترام، والابتعاد عن السخرية والسباب والألفاظ السيئة.'
    ],
    keyConceptsEn: [
      'Rights of Neighbors in Islam: High recommendation by Angel Jibril; greeting, checking up during illness, avoiding noise, sharing food.',
      'Virtue of Trustworthiness (Amanah): Preserving belongings, keeping secrets, doing homework honestly, avoiding cheating.',
      'Compassion and Animal Welfare (Rifq bil-Hayawan): Comprehensive Islamic mercy; the story of the man who watered a thirsty dog (granted Jannah), and the warning regarding the cat.',
      'Etiquette of Speaking & Listening: Speaking good words, active listening without interrupting, gentle voice modulation, rejecting mockery.'
    ],

    conceptMapAr: [
      'الإحسان للجار (وصية جبريل) ➔ خلق الأمانة (حفظ الحقوق) ➔ الرفق بالحيوان (الرحمة بالخلائق) ➔ آداب الحديث والاستماع والكلمة الطيبة'
    ],
    conceptMapEn: [
      'Kindness to Neighbors ➔ Amanah & Honesty ➔ Animal Welfare & Mercy ➔ Noble Speech & Active Listening'
    ],

    learningOutcomesAr: [
      'أن يوضح التلميذ وصية الإسلام بالجار ويعدد 4 من حقوق الجيران العملية.',
      'أن يطبق خلق الأمانة في مدرسته وبيته ومع أصدقائه.',
      'أن يستنتج فضل الرفق بالحيوان من القصص النبوية الشريفة.',
      'أن يلتزم بآداب الاستماع والحديث المهذب والكلمة الطيبة في تعاملاته اليومية.'
    ],
    learningOutcomesEn: [
      'Explain the Islamic emphasis on neighbor rights and list practical ways to treat neighbors kindly.',
      'Apply trustworthiness and honesty in school, home, and friendships.',
      'Extract moral lessons on compassion towards animals from Prophetic hadiths.',
      'Demonstrate attentive listening, polite speech, and gentle communication manners.'
    ],

    vocabulary: [
      {
        termAr: 'حَقُّ الجَار',
        termEn: 'Rights of the Neighbor',
        definitionAr: 'واجبات المحبة والإحسان والتعاون وعدم الإيذاء لمن يسكن قريباً منك.'
      },
      {
        termAr: 'الأَمَانَة',
        termEn: 'Trustworthiness (Al-Amanah)',
        definitionAr: 'خلق إسلامي عظيم يعني حفظ الحقوق والودائع والوفاء بالعهود وعدم الغش.'
      },
      {
        termAr: 'الرِّفْقُ بِالحَيَوَان',
        termEn: 'Animal Welfare (Rifq bil-Hayawan)',
        definitionAr: 'الرحمة بالحيوانات وإطعامها وسقايتها ومعاملتها بلطف ومنع تعذيبها.'
      },
      {
        termAr: 'الكَلِمَةُ الطَّيِّبَة',
        termEn: 'Good Speech (Al-Kalimah At-Tayyibah)',
        definitionAr: 'الكلام النافع الجميل الذي يسعد الناس ويؤلف القلوب وهو صدقة يؤجر عليها المسلم.'
      }
    ],

    warmupHookAr: 'هل تعلم أن إطعام قطة جائعة أو سقاية عصفور صغير في حر الصيف قد يكون سبباً لدخولك الجنة ومغفرة ذنوبك؟ وأن النبي ﷺ أوصانا بالجار حتى ظن الصحابة أنه سيجعله شريكاً في الميراث؟ هيا نتعلم كيف ننشر الخير والرحمة في عالمنا!',
    warmupHookEn: 'Did you know that quenching the thirst of a stray animal can lead to Paradise and forgiveness? And that treating your neighbor with respect brings immense blessings? Let us explore these inspiring Islamic values!',

    mainContentAr: `
### 1. حقوق الجار والإحسان إليه في الإسلام

* 🏡 **وصية النبي ﷺ بالجار:**
  - قال رسول الله ﷺ: **«مَا زَالَ جِبْرِيلُ يُوصِينِي بِالجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ»** (أي من شدة التأكيد على حقه ظننت أنه سيجعله وارثاً في المال).
  - وقال ﷺ: **«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَاليَوْمِ الآخِرِ فَلْيُكْرِمْ جَارَهُ»**.

* 🤝 **كيف نكون جيراناً صالحين؟**
  1. **كف الأذى:** عدم رفع صوت التلفاز أو إحداث ضوضاء مزعجة، وعدم إلقاء القمامة أمام أبوابهم.
  2. **التحية والبشاشة:** إلقاء السلام بابتسامة عند لقائهم.
  3. **التفقد والعيادة:** زيارة الجار المريض، ومساعدته إذا احتاج، والتهنئة في الأعياد والأفراح.
  4. **إهداء الطعام:** قال النبي ﷺ لأبي ذر رضي الله عنه: «إِذَا طَبَخْتَ مَرَقَةً فَأَكْثِرْ مَاءَهَا، ثُمَّ انْظُرْ أَهْلَ بَيْتٍ مِنْ جِيرَانِكَ فَأَصِبْهُمْ مِنْهَا بِمَعْرُوفٍ».

---

### 2. خلق الأمانة في القول والعمل

* 💎 **الأمانة تاج الأخلاق الإسلامية:**
  - الأمانة هي أداء كل حق لصاحبه، ومراقبة الله تعالى في السر والعلن.
  - كان نبينا محمد ﷺ يلقب بـ **(الأمين)** حتى قبل البعثة، وكان أهل مكة يضعون ودائعهم وأموالهم عنده ليحفظها لهم.

* 🎒 **مجالات الأمانة في حياة التلميذ:**
  - **أمانة المدرسة:** الحفاظ على مقاعد الفصل وجدران المدرسة وكتب المكتبة.
  - **أمانة العلم:** عدم الغش في الواجبات والامتحانات والاعتماد على النفس.
  - **أمانة الوديعة والسر:** إذا استأمنك زميلك على قلم أو كتاب أو سر، فتحافظ عليه وترده إليه سالماً.
  - **أمانة الصلاة والعبادة:** أداء الصلاة والوضوء بإتقان وصدق.

---

### 3. الرفق بالحيوان وآداب الحديث والاستماع

* 🐾 **الرفق بالحيوان والرحمة بالمخلوقات:**
  1. **جزاء الرحمة بالحيوان:**
     - أخبرنا النبي ﷺ عن رجل كان يمشي في طريق فاشتد عليه العطش، فنزل بئراً فشرب، ثم خرج فإذا كلب يلهث يأكل الثرى من شدة العطش.
     - فقال الرجل: لقد بلغ هذا الكلب من العطش مثل الذي كان بلغ مني، فنزل البئر فملأ خفه ماءً وسقى الكلب، **فشكر الله له فغفر له وأدخله الجنة**.
     - قال الصحابة: يا رسول الله، وإن لنا في البهائم لأجراً؟ فقال ﷺ: **«فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ»**.
  2. **التحذير من القسوة وتعذيب الحيوانات:**
     - حذر النبي ﷺ من حبس الحيوانات أو تجويعها أو ضربها، وذكر قصة المرأة التي دخلت النار في هرة حبستها.

* 🗣️ **آداب الحديث وحسن الاستماع:**
  - **القول الحسن:** قال تعالى: ﴿وَقُولُوا لِلنَّاسِ حُسْنًا﴾، وقال النبي ﷺ: **«الكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ»**.
  - **الإنصات:** الاستماع باهتمام لمن يتحدث وعدم مقاطعته حتى ينتهي.
  - **خفض الصوت:** التحدث بهدوء وتجنب الصراخ والكلمات الجارحة.

---

### 4. Interactive Diagram: Islamic Morals & Community Values
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Neighbors & Amanah -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#ec4899" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#f472b6" font-size="15" font-weight="bold" text-anchor="middle">حقوق الجار وخلق الأمانة</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">🏡 الجار: كف الأذى، السؤال عنه، وإهداء الطعام</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">💎 الأمانة: حفظ الودائع وعدم الغش في الامتحانات</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">🌟 القدوة: سيدنا محمد «الصادق الأمين»</text>
    <text x="25" y="170" fill="#f472b6" font-size="13" font-weight="bold">✨ ﴿إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ﴾</text>
  </g>

  <!-- Animal Welfare & Speech -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">الرفق بالحيوان وآداب الحديث</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">🐾 سقاية الكلب: سبب لمغفرة الذنوب والجنة</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">🕊️ «في كل كبد رطبة أجر» لجميع الكائنات</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">💬 «الكلمة الطيبة صدقة» وحسن الإنصات</text>
    <text x="25" y="170" fill="#38bdf8" font-size="13" font-weight="bold">🌸 ﴿وَقُولُوا لِلنَّاسِ حُسْنًا﴾</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Rights of Neighbors in Islam
- Angel Jibril constantly emphasized kindness to neighbors.
- A Muslim honors neighbors by preventing harm, greeting them with a smile, visiting when ill, and sharing food.

### 2. The Essence of Amanah (Trust)
- Amanah means fulfilling rights and duties conscientiously.
- Examples: Safeguarding school property, studying without cheating, keeping classmates' secrets and belongings.

### 3. Animal Compassion & Communication Manners
- Quenching the thirst of a dog earned a man forgiveness and Jannah.
- Harming or starving animals is strictly prohibited.
- Communication: Kind speech ("Good word is charity"), active listening, and polite tone.
`,

    workedExamples: [
      {
        id: 'ex-p3-isl4-1',
        titleAr: 'مثال 1: تطبيق الإحسان إلى الجار في العمارة',
        titleEn: 'Example 1: Neighborly Kindness in Apartment Living',
        problemAr: 'علم طارق أن جاره المسن مريض ويعيش بمفرده في الشقة المقابلة، فماذا يمكنه أن يفعل ليطبق وصية النبي بالجار؟',
        problemEn: 'Tariq learned his elderly neighbor is sick and living alone opposite his apartment. How can he apply the Prophet\'s teachings?',
        stepByStepSolutionAr: [
          'الخطوة 1: يذهب برفقة والده لزيارة الجار والاطمئنان على صحته والدعاء له بالشفاء.',
          'الخطوة 2: يعرض عليه المساعدة في شراء الدواء أو الاحتياجات من المتجر القريب.',
          'الخطوة 3: يحرص على الهدوء في الممر وألا يصدر أصواتاً مزعجة تمنعه من الراحة.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Visit the neighbor with his father to check on his health and pray for recovery.',
          'Step 2: Offer to help buy groceries or medicine from the nearby store.',
          'Step 3: Keep the hallway quiet to allow the sick neighbor peaceful rest.'
        ],
        finalAnswerAr: 'زيارته والدعاء له، ومساعدته في شراء احتياجاته، ومراعاة الهدوء.',
        finalAnswerEn: 'Visit and pray for him, offer assistance, and maintain quietness.'
      },
      {
        id: 'ex-p3-isl4-2',
        titleAr: 'مثال 2: الرفق بالحيوانات في الشارع وفناء المنزل',
        titleEn: 'Example 2: Practicing Compassion Towards Animals',
        problemAr: 'في يوم صيفي حار، رأى مازن قطة صغيرة تلهث تحت الشجرة وتبحث عن ماء، ماذا يفعل؟',
        problemEn: 'On a hot summer day, Mazen saw a little kitten panting under a tree looking for water. What should he do?',
        stepByStepSolutionAr: [
          'الخطوة 1: يحضر وعاءً نظيفاً ويملأه بالماء العذب البارد.',
          'الخطوة 2: يضع الماء بلطف وهدوء بالقرب من القطة دون إخافتها.',
          'الخطوة 3: يستحضر نية كسب الأجر وثواب سقاية الكبد الرطبة الذي يدخل الجنة.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Fetch a clean bowl and fill it with fresh cool water.',
          'Step 2: Gently place the water near the kitten without scaring it.',
          'Step 3: Keep the intention of earning Allah\'s pleasure and Jannah reward.'
        ],
        finalAnswerAr: 'يقدم لها الماء العذب بلطف لنيل الأجر وثواب سقاية الحيوان الضعيف.',
        finalAnswerEn: 'Offer clean water gently to earn divine reward for mercy.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-isl4-1',
        problemAr: 'اذكر حديثاً شريفاً يوضح وصية جبريل عليه السلام بالجار.',
        problemEn: 'State a noble hadith illustrating Angel Jibril\'s advice regarding neighbors.',
        solutionStepsAr: [
          'قال رسول الله ﷺ: «مَا زَالَ جِبْرِيلُ يُوصِينِي بِالجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ».'
        ],
        solutionStepsEn: [
          'The Messenger of Allah ﷺ said: "Jibril kept enjoining good treatment of the neighbor until I thought he would make him an heir."'
        ],
        finalAnswerAr: '«مَا زَالَ جِبْرِيلُ يُوصِينِي بِالجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ».',
        finalAnswerEn: 'Hadith on neighbor rights enjoining kindness until thought an heir.'
      },
      {
        id: 'tb-p3-isl4-2',
        problemAr: 'ما جزاء الرجل الذي سقى الكلب العطشان كما أخبرنا النبي ﷺ؟',
        problemEn: 'What was the reward of the man who gave water to the thirsty dog?',
        solutionStepsAr: [
          'شكر الله له صنيعه، فغفر له ذنوبه وأدخله الجنة بسبب رحمته بهذا الحيوان الضعيف.'
        ],
        solutionStepsEn: [
          'Allah appreciated his act of mercy, forgave his sins, and admitted him into Paradise.'
        ],
        finalAnswerAr: 'غفر الله له وأدخله الجنة.',
        finalAnswerEn: 'Allah forgave him and admitted him into Paradise.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-isl4-1',
        questionAr: 'ماذا قال النبي ﷺ عن فضل الكلمة الطيبة في الحديث الشريف؟',
        questionEn: 'What did the Prophet ﷺ say about the good word in the hadith?',
        optionsAr: ['الكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ', 'الكلمة الطيبة للشراء فقط', 'الكلمة الطيبة لا أجر فيها', 'الكلمة الطيبة للكبار فقط'],
        optionsEn: ['A good word is a charity', 'A good word is for trading only', 'A good word has no reward', 'A good word is for adults only'],
        correctIndex: 0,
        rationaleAr: 'قال رسول الله ﷺ: «وَالكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ»، فكل كلمة خير ونصح وسلام تؤجر عليها.',
        rationaleEn: 'The Prophet ﷺ taught that every pleasant and kind word counts as a charity.'
      },
      {
        id: 'fa-p3-isl4-2',
        questionAr: 'أي من التصرفات التالية يُعد تطبيقاً صحيحاً لخلق الأمانة؟',
        questionEn: 'Which of the following actions demonstrates true Trustworthiness (Amanah)?',
        optionsAr: [
          'رد القلم المستعار إلى زميلك دون إتلافه والاعتماد على نفسك في الامتحان',
          'أخذ ألعاب الآخرين دون علمهم',
          'الغش في الاختبار للحصول على درجات عالية',
          'إفشاء أسرار الأصدقاء'
        ],
        optionsEn: [
          'Returning a borrowed pen safely and doing exams independently',
          'Taking other kids\' toys secretly',
          'Cheating on tests',
          'Revealing friends\' secrets'
        ],
        correctIndex: 0,
        rationaleAr: 'الأمانة هي الحفاظ على ممتلكات الآخرين وحفظ العهود والابتعاد التام عن الغش.',
        rationaleEn: 'Amanah includes returning borrowed items intact and honest academic integrity.'
      },
      {
        id: 'fa-p3-isl4-3',
        questionAr: 'ما هو التصرف الصحيح عند الاستماع إلى شخص يتحدث إليك؟',
        questionEn: 'What is the correct Islamic etiquette when someone is speaking to you?',
        optionsAr: [
          'الإنصات باهتمام والنظر إليه وعدم مقاطعته حتى يكمل حديثه',
          'التحدث بصوت أعلى منه',
          'الابتعاد وتركه يتكلم بمفرده',
          'السخرية من طريقة كلامه'
        ],
        optionsEn: [
          'Listen attentively, maintain eye contact, and avoid interrupting',
          'Speak louder than him',
          'Walk away and leave him alone',
          'Mock the way he speaks'
        ],
        correctIndex: 0,
        rationaleAr: 'من آداب الحديث والاستماع في الإسلام حسن الإنصات وعدم المقاطعة وإظهار الاحترام للمتكلم.',
        rationaleEn: 'Active listening without interruption demonstrates respect and noble manners.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة حقوق الجار العظيمة والإحسان إليه، وخلق الأمانة، والرفق بالحيوانات ورحمتها لنيل رضا الله والجنة، وآداب التحدث بالكلمة الطيبة والإنصات للآخرين.',
    summaryEn: 'We learned about neighbor rights, trustworthiness, compassion towards animals to earn Jannah, and communication etiquette with good speech and active listening.',

    assessment: {
      id: 'quiz-p3-isl-4',
      lectureId: 'p3-isl-4',
      titleAr: 'اختبار المحاضرة 4: القيم والأخلاق (حقوق الجار، الأمانة، الرفق بالحيوان، وآداب الحديث)',
      titleEn: 'Assessment 4: Islamic Values, Neighbors, Amanah & Compassion',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-isl4-1',
          textAr: 'من هو الملك الكريم الذي ظل يوصي النبي ﷺ بالجار حتى ظن أنه سيورثه؟',
          textEn: 'Which noble angel repeatedly advised the Prophet ﷺ regarding neighbor rights?',
          optionsAr: ['جبريل عليه السلام', 'ميكائيل عليه السلام', 'إسرافيل عليه السلام', 'ملك الموت عليه السلام'],
          optionsEn: ['Angel Jibril (Gabriel)', 'Angel Mikail', 'Angel Israfil', 'Angel of Death'],
          correctIndex: 0,
          conceptTestedAr: 'حديث الوصية بالجار',
          conceptTestedEn: 'Hadith on Neighbor Rights',
          explanationAr: 'قال النبي ﷺ: «مَا زَالَ جِبْرِيلُ يُوصِينِي بِالجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ».',
          explanationEn: 'Angel Jibril frequently commanded kind treatment towards neighbors.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl4-2',
          textAr: 'ماذا قال النبي ﷺ عندما سأله الصحابة: "وإن لنا في البهائم لأجراً"؟',
          textEn: 'What did the Prophet ﷺ answer when asked if there is a reward for being kind to animals?',
          optionsAr: ['«فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ»', 'لا أجر فيها', 'الأجر في الإبل فقط', 'الأجر للكبار فقط'],
          optionsEn: ['"There is a reward for serving any living creature"', 'No reward at all', 'Only for camels', 'Only for adults'],
          correctIndex: 0,
          conceptTestedAr: 'فضل الرحمة والرفق بالحيوان',
          conceptTestedEn: 'Reward for Mercy to Living Creatures',
          explanationAr: 'بين النبي ﷺ أن كل إحسان لكائن حي فيه حياة (كبد رطبة) يثاب فاعله عليه أجراً عظيماً.',
          explanationEn: 'The Prophet ﷺ confirmed great divine rewards for serving and being kind to any living animal.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-isl4-3',
          textAr: 'أي من السلوكيات التالية يعتبر إيذاءً منهياً عنه للجار؟',
          textEn: 'Which behavior is strictly forbidden regarding neighbors?',
          optionsAr: [
            'تشغيل مكبرات الصوت وإلقاء القمامة أمام بابه',
            'إهداؤه طبقاً من الطعام اللذيذ',
            'تهنئته في يوم العيد',
            'زيارته والسؤال عنه عند مرضه'
          ],
          optionsEn: [
            'Loud blaring noise and leaving trash in front of his door',
            'Gifting delicious food',
            'Greeting on Eid day',
            'Visiting when ill'
          ],
          correctIndex: 0,
          conceptTestedAr: 'النهي عن إيذاء الجار',
          conceptTestedEn: 'Prohibition of Harming Neighbors',
          explanationAr: 'نهى الإسلام عن إيذاء الجار بالضوضاء أو القمامة، وأمر بإكرامه وحسن معاملته.',
          explanationEn: 'Islam strictly forbids harming neighbors with noise, pollution, or disrespect.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl4-4',
          textAr: 'ما الآية الكريمة التي تأمر بالقول الحسن لجميع الناس؟',
          textEn: 'Which Quranic verse commands speaking pleasant, good words to all people?',
          optionsAr: [
            '﴿وَقُولُوا لِلنَّاسِ حُسْنًا﴾',
            '﴿وَاقْصِدْ فِي مَشْيِكَ﴾',
            '﴿وَأَقِيمُوا الصَّلَاةَ﴾',
            '﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾'
          ],
          optionsEn: [
            '"And speak to people good words" (Surah Al-Baqarah)',
            '"Be moderate in your pace"',
            '"Establish prayer"',
            '"Indeed, We granted you Al-Kawthar"'
          ],
          correctIndex: 0,
          conceptTestedAr: 'آداب الكلام والكلمة الطيبة',
          conceptTestedEn: 'Quranic Command on Good Speech',
          explanationAr: 'أمر الله عباده بالتحدث بالقول الطيب لجميع الناس: ﴿وَقُولُوا لِلنَّاسِ حُسْنًا﴾.',
          explanationEn: 'Allah commands us to speak good, polite words to everyone.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-isl4-5',
          textAr: 'ما العاقبة التي لاقتها المرأة التي حبست القطة ومنعتها من الأكل والشرب؟',
          textEn: 'What consequence befell the woman who trapped a cat without food or water?',
          optionsAr: [
            'دخلت النار بسبب قسوتها وتعذيبها للحيوان',
            'دخلت الجنة',
            'أصبحت غنية',
            'سامحها الناس'
          ],
          optionsEn: [
            'Entered Hellfire due to her cruelty and torture of the animal',
            'Entered Paradise',
            'Became wealthy',
            'People forgave her'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التحذير من تعذيب الحيوانات',
          conceptTestedEn: 'Warning Against Animal Cruelty',
          explanationAr: 'بين النبي ﷺ أن تعذيب الحيوانات وحبسها دون طعام أو شراب سبب في غضب الله ودخول النار.',
          explanationEn: 'Cruelty to animals invites divine wrath and severe punishment.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
