import React, { useState } from "react";
import type { Language, Lecture, StudentProfile } from "../types";
import { generateCurriculumLecture } from "../services/geminiService";
import { getCountryInfo } from "../data/curriculumCountries";
import {
  X,
  Sparkles,
  BookOpen,
  Loader2,
  AlertTriangle,
  CheckCircle2,
  GraduationCap,
  Globe,
  BookMarked,
  Wand2
} from "lucide-react";

interface GenerateLectureModalProps {
  isOpen: boolean;
  profile: StudentProfile;
  lang: Language;
  apiKey: string;
  existingLectures: Lecture[];
  onClose: () => void;
  onLectureGenerated: (lecture: Lecture) => void;
  onOpenApiKey: () => void;
}

const SUBJECT_LABELS: Record<string, { ar: string; en: string }> = {
  PRIMARY_MATH:     { ar: "الرياضيات - ابتدائي", en: "Primary Mathematics" },
  PRIMARY_ARABIC:   { ar: "اللغة العربية - ابتدائي", en: "Primary Arabic" },
  PRIMARY_SCIENCE:  { ar: "العلوم - ابتدائي", en: "Primary Science" },
  ISLAMIC_STUDIES:  { ar: "التربية الإسلامية", en: "Islamic Studies" },
  MATH:             { ar: "الرياضيات", en: "Mathematics" },
  PHYSICS:          { ar: "الفيزياء", en: "Physics" },
  CHEMISTRY:        { ar: "الكيمياء", en: "Chemistry" },
  BIOLOGY:          { ar: "الأحياء", en: "Biology" },
  ARABIC_LIT:       { ar: "الأدب العربي", en: "Arabic Literature" },
  ARABIC_LANG:      { ar: "اللغة العربية", en: "Arabic Language" },
  GENERAL_SCIENCE:  { ar: "العلوم العامة", en: "General Science" },
  COMPUTER_SCIENCE: { ar: "الحاسب وتقنية المعلومات", en: "Computer Science" },
};

const GRADE_LABELS: Record<string, { ar: string; en: string }> = {
  G1:  { ar: "الأول الابتدائي",   en: "Grade 1" },
  G2:  { ar: "الثاني الابتدائي",  en: "Grade 2" },
  G3:  { ar: "الثالث الابتدائي",  en: "Grade 3" },
  G4:  { ar: "الرابع الابتدائي",  en: "Grade 4" },
  G5:  { ar: "الخامس الابتدائي",  en: "Grade 5" },
  G6:  { ar: "السادس الابتدائي",  en: "Grade 6" },
  G7:  { ar: "الأول المتوسط",     en: "Grade 7" },
  G8:  { ar: "الثاني المتوسط",    en: "Grade 8" },
  G9:  { ar: "الثالث المتوسط",    en: "Grade 9" },
  G10: { ar: "الأول الثانوي",     en: "Grade 10" },
  G11: { ar: "الثاني الثانوي",    en: "Grade 11" },
  G12: { ar: "الثالث الثانوي",    en: "Grade 12" },
};

export const GenerateLectureModal: React.FC<GenerateLectureModalProps> = ({
  isOpen,
  profile,
  lang,
  apiKey,
  existingLectures,
  onClose,
  onLectureGenerated,
  onOpenApiKey
}) => {
  const isEn = lang === "en";
  const countryInfo = getCountryInfo(profile.country);

  const [lessonTopic, setLessonTopic] = useState("");
  const [unitTitle, setUnitTitle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const nextLectureNumber = existingLectures.length + 1;
  const hasApiKey = !!apiKey && apiKey.trim() !== "";

  const subjectLabel = SUBJECT_LABELS[profile.subject] || { ar: profile.subject, en: profile.subject };
  const gradeLabel = GRADE_LABELS[profile.gradeLevel] || { ar: profile.gradeLevel, en: profile.gradeLevel };

  const existingTitles = existingLectures.map(l => isEn ? l.titleEn : l.titleAr).filter(Boolean) as string[];

  const handleGenerate = async () => {
    if (!hasApiKey) {
      onOpenApiKey();
      return;
    }
    setIsGenerating(true);
    setError(null);
    setSuccess(false);

    const result = await generateCurriculumLecture(
      {
        profile,
        lectureNumber: nextLectureNumber,
        unitTitle: unitTitle.trim() || undefined,
        lessonTopic: lessonTopic.trim() || undefined,
        apiKey
      },
      existingTitles
    );

    setIsGenerating(false);

    if (result.lecture) {
      setSuccess(true);
      setTimeout(() => {
        onLectureGenerated(result.lecture!);
        onClose();
        setSuccess(false);
        setLessonTopic("");
        setUnitTitle("");
      }, 1200);
    } else {
      if (result.error === "NO_API_KEY") {
        setError(isEn
          ? "Please add your Gemini API key first to enable AI lecture generation."
          : "يرجى إضافة مفتاح Gemini API أولاً لتفعيل توليد المحاضرات بالذكاء الاصطناعي.");
      } else {
        setError(isEn
          ? `Failed to generate lecture. Please try again. (${result.error})`
          : `فشل توليد المحاضرة. يرجى المحاولة مرة أخرى. (${result.error})`);
      }
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-panel generate-lecture-panel" dir={isEn ? "ltr" : "rtl"}>
        <div className="generate-lecture-header">
          <div className="generate-lecture-title-row">
            <div className="generate-lecture-icon-wrap">
              <Wand2 size={22} />
            </div>
            <div>
              <h2 className="generate-lecture-title">
                {isEn ? "Generate Curriculum Lecture" : "توليد محاضرة من المنهج الرسمي"}
              </h2>
              <p className="generate-lecture-subtitle">
                {isEn
                  ? "AI generates a complete lesson from your national curriculum"
                  : "الذكاء الاصطناعي يُولِّد درسًا كاملاً من المنهج الوطني المقرر"}
              </p>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="generate-lecture-body">
          <div className="gen-lecture-profile-card">
            <div className="gen-profile-row">
              <Globe size={15} className="gen-profile-icon" />
              <span className="gen-profile-label">{isEn ? "Country:" : "الدولة:"}</span>
              <span className="gen-profile-value">{countryInfo.flag} {isEn ? countryInfo.nameEn : countryInfo.nameAr}</span>
            </div>
            <div className="gen-profile-row">
              <GraduationCap size={15} className="gen-profile-icon" />
              <span className="gen-profile-label">{isEn ? "Grade:" : "الصف:"}</span>
              <span className="gen-profile-value">{isEn ? gradeLabel.en : gradeLabel.ar}</span>
            </div>
            <div className="gen-profile-row">
              <BookOpen size={15} className="gen-profile-icon" />
              <span className="gen-profile-label">{isEn ? "Subject:" : "المادة:"}</span>
              <span className="gen-profile-value">{isEn ? subjectLabel.en : subjectLabel.ar}</span>
            </div>
            <div className="gen-profile-row">
              <BookMarked size={15} className="gen-profile-icon" />
              <span className="gen-profile-label">{isEn ? "Education:" : "نوع التعليم:"}</span>
              <span className="gen-profile-value">
                {profile.educationType === 'ISLAMIC'
                  ? (isEn ? 'Islamic / Religious Education' : 'التعليم الديني / الأزهري')
                  : profile.educationType === 'PRIVATE'
                  ? (isEn ? 'Private / Model Schools' : 'التعليم الخاص والنموذجي')
                  : profile.educationType === 'INTERNATIONAL'
                  ? (isEn ? 'International Curriculum' : 'التعليم الدولي')
                  : (isEn ? 'General / Public Education' : 'التعليم العام (الحكومي)')}
              </span>
            </div>
            <div className="gen-profile-row">
              <BookMarked size={15} className="gen-profile-icon" />
              <span className="gen-profile-label">{isEn ? "Curriculum:" : "المنهج:"}</span>
              <span className="gen-profile-value gen-profile-ministry">
                {isEn ? countryInfo.systemNameEn : countryInfo.systemNameAr}
              </span>
            </div>
          </div>

          <div className="gen-lecture-number-badge">
            <Sparkles size={14} />
            <span>
              {isEn
                ? `Will generate Lecture #${nextLectureNumber} (sequential lock: unlocks after mastering Lecture #${nextLectureNumber - 1})`
                : `سيتم توليد المحاضرة رقم ${nextLectureNumber} بالتسلسل (تُفتح تلقائياً بعد إتقان المحاضرة رقم ${nextLectureNumber - 1})`}
            </span>
          </div>

          <div className="gen-input-group">
            <label className="gen-input-label" htmlFor="gen-unit-title">
              {isEn ? "Unit / Chapter (optional)" : "الوحدة / الفصل (اختياري)"}
            </label>
            <input
              id="gen-unit-title"
              type="text"
              className="gen-input-field"
              placeholder={isEn ? "e.g. Unit 3: Algebra & Functions" : "مثال: الوحدة الثالثة: الجبر والدوال"}
              value={unitTitle}
              onChange={(e) => setUnitTitle(e.target.value)}
              disabled={isGenerating}
              dir={isEn ? "ltr" : "rtl"}
            />
          </div>

          <div className="gen-input-group">
            <label className="gen-input-label" htmlFor="gen-lesson-topic">
              {isEn ? "Specific Lesson Topic (optional)" : "موضوع الدرس المحدد (اختياري)"}
            </label>
            <input
              id="gen-lesson-topic"
              type="text"
              className="gen-input-field"
              placeholder={isEn
                ? "e.g. Linear Equations — or leave blank for auto-selection"
                : "مثال: المعادلات الخطية — أو اتركه فارغاً للاختيار التلقائي"}
              value={lessonTopic}
              onChange={(e) => setLessonTopic(e.target.value)}
              disabled={isGenerating}
              dir={isEn ? "ltr" : "rtl"}
            />
            <p className="gen-input-hint">
              {isEn
                ? "If left blank, AI selects the next appropriate lesson from the official curriculum sequence."
                : "إذا تُرك فارغاً، يختار الذكاء الاصطناعي الدرس التالي المناسب من تسلسل المنهج الرسمي."}
            </p>
          </div>

          {!hasApiKey && (
            <div className="gen-warning-box">
              <AlertTriangle size={16} />
              <div>
                <p className="gen-warning-title">
                  {isEn ? "Gemini API Key Required" : "مفتاح Gemini API مطلوب"}
                </p>
                <p className="gen-warning-text">
                  {isEn
                    ? "Add your API key to enable AI-powered lecture generation from the official curriculum."
                    : "أضف مفتاح API الخاص بك لتفعيل توليد المحاضرات من المنهج الرسمي."}
                </p>
                <button type="button" className="gen-warning-link" onClick={() => { onClose(); onOpenApiKey(); }}>
                  {isEn ? "Add API Key" : "إضافة مفتاح API"}
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="gen-error-box" role="alert">
              <AlertTriangle size={16} />
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="gen-success-box" role="status">
              <CheckCircle2 size={16} />
              <p>
                {isEn
                  ? "Lecture generated & published globally for all visitors! Adding to your roadmap..."
                  : "تم توليد المحاضرة ونشرها سحابياً لجميع الزوار والطلاب بنجاح! جاري إضافتها إلى خريطة المنهج..."}
              </p>
            </div>
          )}

          {!isGenerating && !success && (
            <div className="gen-what-included">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', padding: '8px 12px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.25)', fontSize: '0.82rem', color: '#059669', fontWeight: 600 }}>
                <Globe size={16} />
                <span>
                  {isEn
                    ? "Global Cloud Sync: Once generated, this lecture is permanently saved to the site for all visitors worldwide."
                    : "مزامنة سحابية فورية: فور التوليد، يتم حفظ المحاضرة بالموقع وتصبح متاحة فوراً لجميع الزوار حول العالم."}
                </span>
              </div>
              <p className="gen-what-title">
                {isEn ? "Generated lecture includes:" : "المحاضرة المُولَّدة تشمل:"}
              </p>
              <ul className="gen-what-list">
                {(isEn ? [
                  "Real-world warm-up hook & learning outcomes",
                  "Key vocabulary with bilingual definitions",
                  "Full content sections with worked examples",
                  "Formative check questions per section",
                  "Guided textbook exercises with solutions",
                  "Concept map & golden takeaways",
                  "3-question mandatory assessment (80% to pass)"
                ] : [
                  "مقدمة تشويقية من الواقع وأهداف التعلم",
                  "مصطلحات أساسية بتعريفات بالعربية والإنجليزية",
                  "أقسام محتوى كاملة مع أمثلة محلولة",
                  "أسئلة تقييم مرحلية في كل قسم",
                  "تمارين الكتاب المدرسي مع الحلول التفصيلية",
                  "خريطة المفاهيم والخلاصات الذهبية",
                  "تقييم إلزامي (3 أسئلة - النجاح 80%)"
                ]).map((item, i) => (
                  <li key={i}>✦ {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="generate-lecture-footer">
          <button type="button" className="gen-cancel-btn" onClick={onClose} disabled={isGenerating}>
            {isEn ? "Cancel" : "إلغاء"}
          </button>
          <button
            type="button"
            id="btn-generate-lecture"
            className={`gen-generate-btn ${isGenerating ? "gen-generating" : ""} ${success ? "gen-success-state" : ""}`}
            onClick={handleGenerate}
            disabled={isGenerating || success}
          >
            {isGenerating ? (
              <>
                <Loader2 size={18} className="spin-icon" />
                <span>{isEn ? "Generating from Curriculum..." : "يُولِّد من المنهج..."}</span>
              </>
            ) : success ? (
              <>
                <CheckCircle2 size={18} />
                <span>{isEn ? "Done!" : "تم!"}</span>
              </>
            ) : (
              <>
                <Wand2 size={18} />
                <span>
                  {isEn ? `Generate Lecture #${nextLectureNumber}` : `توليد الدرس رقم ${nextLectureNumber}`}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateLectureModal;
