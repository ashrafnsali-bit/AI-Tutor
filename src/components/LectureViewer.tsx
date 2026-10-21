import React, { useState, useEffect, useMemo } from 'react';
import type { Language, Lecture, StudentProfile } from '../types';
import { getTranslations } from '../i18n/translations';
import { ensureFourExamplesForLecture } from '../services/lectureExampleEnricher';
import { isForeignLanguageSubject, localizeSingleLecture } from '../data/foreignLanguageLessonLocalization';
import {
  BookOpen, Lightbulb, HelpCircle, CheckCircle, Award,
  AlertOctagon, Sparkles, Flame, CheckCircle2, Compass,
  Target, Sprout, BookMarked, FileCheck2, Eye, EyeOff, ChevronDown,
  ChevronUp, Play, SkipForward, Calculator,
  PenTool, Star, Zap, ArrowRight, RefreshCw, X, Layers,
  Volume2, Users
} from 'lucide-react';
import { CurriculumDiagramRenderer, resolveDiagramImageUrl } from './CurriculumDiagramRenderer';
import { RichContentRenderer } from './RichContentRenderer';
import { sanitizeLectureForStudents } from '../services/studentContentSanitizer';

interface LectureViewerProps {
  lecture: Lecture;
  lang: Language;
  profile?: StudentProfile;
  onStartAssessment: () => void;
  onOpenTutor: () => void;
  onNextLecture?: () => void;
  hasNextUnlocked: boolean;
}

interface CharacterSpeaker {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  avatarIcon: string;
  color: string;
  bg: string;
  borderColor: string;
}

const KNOWN_SPEAKERS: Record<string, CharacterSpeaker> = {
  'miss mona': {
    name: 'Miss Mona',
    nameAr: 'المعلمة منى',
    role: 'Teacher',
    roleAr: 'معلمة الفصل',
    avatarIcon: '👩‍🏫',
    color: '#0284c7',
    bg: 'rgba(2, 132, 199, 0.12)',
    borderColor: 'rgba(2, 132, 199, 0.35)'
  },
  'adam': {
    name: 'Adam',
    nameAr: 'آدم',
    role: 'Pupil',
    roleAr: 'تلميذ',
    avatarIcon: '👦',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.35)'
  },
  'dina': {
    name: 'Dina',
    nameAr: 'دينا',
    role: 'Pupil',
    roleAr: 'تلميذة',
    avatarIcon: '👧',
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.12)',
    borderColor: 'rgba(236, 72, 153, 0.35)'
  },
  'hany': {
    name: 'Hany',
    nameAr: 'هاني',
    role: 'Pupil',
    roleAr: 'تلميذ',
    avatarIcon: '🧑',
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.35)'
  },
  'hana': {
    name: 'Hana',
    nameAr: 'هنا',
    role: 'Pupil',
    roleAr: 'تلميذة',
    avatarIcon: '👧',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    borderColor: 'rgba(245, 158, 11, 0.35)'
  },
  'busy bee': {
    name: 'Busy Bee',
    nameAr: 'النحلة النشيطة',
    role: 'Phonics Guide',
    roleAr: 'مرشدة الأصوات والقيم',
    avatarIcon: '🐝',
    color: '#eab308',
    bg: 'rgba(234, 179, 8, 0.14)',
    borderColor: 'rgba(234, 179, 8, 0.45)'
  },
  'teacher': {
    name: 'Teacher',
    nameAr: 'المعلم',
    role: 'Instructor',
    roleAr: 'معلم المادة',
    avatarIcon: '👨‍🏫',
    color: '#0ea5e9',
    bg: 'rgba(14, 165, 233, 0.12)',
    borderColor: 'rgba(14, 165, 233, 0.35)'
  },
  'student': {
    name: 'Student',
    nameAr: 'الطالب',
    role: 'Student',
    roleAr: 'تلميذ باحث',
    avatarIcon: '🎓',
    color: '#6366f1',
    bg: 'rgba(99, 102, 241, 0.12)',
    borderColor: 'rgba(99, 102, 241, 0.35)'
  }
};

function parseDialogueLine(text: string): { speaker: CharacterSpeaker; spokenText: string } | null {
  if (!text) return null;
  const match = text.match(/^\s*(Miss Mona|Adam|Dina|Hany|Hana|Busy Bee|Teacher|Student|المعلمة منى|المعلم|الأستاذ|آدم|دينا|هاني|هنا|النحلة النشيطة|بيزي بي|التلميذ|الطالب)\s*[:：]\s*(.*)$/i);
  if (!match) return null;

  const rawSpeaker = match[1].trim().toLowerCase();
  let speakerKey = rawSpeaker;
  if (rawSpeaker.includes('منى') || rawSpeaker.includes('mona')) speakerKey = 'miss mona';
  else if (rawSpeaker.includes('آدم') || rawSpeaker.includes('adam')) speakerKey = 'adam';
  else if (rawSpeaker.includes('دينا') || rawSpeaker.includes('dina')) speakerKey = 'dina';
  else if (rawSpeaker.includes('هاني') || rawSpeaker.includes('hany')) speakerKey = 'hany';
  else if (rawSpeaker.includes('هنا') || rawSpeaker.includes('hana')) speakerKey = 'hana';
  else if (rawSpeaker.includes('نحلة') || rawSpeaker.includes('bee')) speakerKey = 'busy bee';
  else if (rawSpeaker.includes('معلم') || rawSpeaker.includes('أستاذ') || rawSpeaker.includes('teacher')) speakerKey = 'teacher';
  else if (rawSpeaker.includes('طالب') || rawSpeaker.includes('تلميذ') || rawSpeaker.includes('student')) speakerKey = 'student';

  const speaker = KNOWN_SPEAKERS[speakerKey] || {
    name: match[1],
    nameAr: match[1],
    role: 'Character',
    roleAr: 'شخصية المنهج',
    avatarIcon: '💬',
    color: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.3)'
  };

  return { speaker, spokenText: match[2].trim() };
}

function playAudioSpeech(textToSpeak: string, isEnglish: boolean, subject?: string) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const clean = textToSpeak.replace(/[\$*#_\[\]\(\)\{\}\\]/g, ' ').replace(/\s+/g, ' ').trim();
      if (!clean) return;
      const utterance = new SpeechSynthesisUtterance(clean);
      let langCode = isEnglish ? 'en-US' : 'ar-SA';
      if (subject === 'FRENCH') langCode = 'fr-FR';
      else if (subject === 'GERMAN') langCode = 'de-DE';
      else if (subject === 'ITALIAN') langCode = 'it-IT';
      else if (subject === 'ENGLISH') langCode = 'en-US';
      utterance.lang = langCode;
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Ignore if speech synthesis unavailable
    }
  }
}

interface TextbookRubricData {
  titleAr: string;
  titleEn: string;
  strategyAr: string;
  strategyEn: string;
  audioTrack?: number;
  icon: React.ReactNode;
}

function getTextbookRubric(
  subject: string = '',
  exampleIndex: number
): TextbookRubricData {
  const norm = subject.toLowerCase();
  const trackNum = exampleIndex + 1;

  if (norm.includes('english') || norm.includes('french') || norm.includes('german') || norm.includes('lang')) {
    const rubrics: TextbookRubricData[] = [
      {
        titleAr: 'النشاط ١: انظر، استمع وردد (Look, Listen & Repeat)',
        titleEn: 'Activity 1: Look, Listen & Repeat',
        strategyAr: 'استراتيجية النمذجة السمعية والترديد الصوتي',
        strategyEn: 'Auditory Modeling & Choral Repetition',
        audioTrack: trackNum,
        icon: <Volume2 size={13} style={{ color: '#38bdf8' }} />
      },
      {
        titleAr: 'النشاط ٢: اسأل وأجب مع زميلك (محادثة تفاعلية)',
        titleEn: 'Activity 2: Ask & Answer with a Partner',
        strategyAr: 'استراتيجية المحادثة التفاعلية وتبادل الأدوار',
        strategyEn: 'Interactive Dialogue & Peer Role-Play',
        audioTrack: trackNum,
        icon: <Users size={13} style={{ color: '#10b981' }} />
      },
      {
        titleAr: 'النشاط ٣: معمل الأصوات والتهجئة مع Busy Bee',
        titleEn: 'Activity 3: Phonics & Sounds Lab with Busy Bee',
        strategyAr: 'استراتيجية الوعي الصوتي والتهجئة السليمة',
        strategyEn: 'Phonemic Awareness & Sound Discrimination',
        audioTrack: trackNum,
        icon: <Sparkles size={13} style={{ color: '#eab308' }} />
      },
      {
        titleAr: 'النشاط ٤: المهارات الحياتية والقيم والتطبيق اليومي',
        titleEn: 'Activity 4: Life Skills & Values in Daily Life',
        strategyAr: 'استراتيجية ربط المنهج بالحياة والمسؤولية الأخلاقية',
        strategyEn: 'Life Skills Integration & Values in Action',
        audioTrack: trackNum,
        icon: <Award size={13} style={{ color: '#a855f7' }} />
      }
    ];
    return rubrics[exampleIndex % 4];
  }

  if (norm.includes('arabic')) {
    const rubrics: TextbookRubricData[] = [
      {
        titleAr: 'النشاط ١: أستمع وأقرأ بطلاقة (نص الاستماع والقراءة الجهرية)',
        titleEn: 'Activity 1: Fluent Reading & Listening Comprehension',
        strategyAr: 'استراتيجية القراءة النمذجية والتذوق اللغوي',
        strategyEn: 'Model Reading & Textual Appreciation',
        audioTrack: trackNum,
        icon: <BookOpen size={13} style={{ color: '#38bdf8' }} />
      },
      {
        titleAr: 'النشاط ٢: ألاحظ وأناقش (الفهم القرائي والتحليل الحواري)',
        titleEn: 'Activity 2: Reading Comprehension & Interactive Discussion',
        strategyAr: 'استراتيجية الأسئلة السابرة والمناقشة البناءة',
        strategyEn: 'Probing Questions & Guided Discussion',
        icon: <Lightbulb size={13} style={{ color: '#10b981' }} />
      },
      {
        titleAr: 'النشاط ٣: أستنتج القاعدة والظواهر اللغوية (النحو والإملاء)',
        titleEn: 'Activity 3: Grammar Rule Induction & Spelling Clinic',
        strategyAr: 'استراتيجية الاستقراء النحوي والقياس اللغوي',
        strategyEn: 'Inductive Grammar & Linguistic Analogy',
        icon: <PenTool size={13} style={{ color: '#f59e0b' }} />
      },
      {
        titleAr: 'النشاط ٤: شارك وعبّر (القيم الأخلاقية والتعبير الحياتي)',
        titleEn: 'Activity 4: Values, Moral Reflection & Written Expression',
        strategyAr: 'استراتيجية الإنتاج اللغوي والتعبير القيمي التطبيقي',
        strategyEn: 'Applied Linguistic Expression & Ethical Values',
        icon: <Star size={13} style={{ color: '#ec4899' }} />
      }
    ];
    return rubrics[exampleIndex % 4];
  }

  if (norm.includes('math') || norm.includes('calculus') || norm.includes('algebra') || norm.includes('geometry')) {
    const rubrics: TextbookRubricData[] = [
      {
        titleAr: 'النشاط ١: ألاحظ وأستكشف (نمذجة المفهوم بالرسم والمحسوسات)',
        titleEn: 'Activity 1: Observe & Explore (Concept Modeling)',
        strategyAr: 'استراتيجية النمذجة البصرية والمحسوسات الرياضية',
        strategyEn: 'Visual & Concrete Mathematical Modeling',
        icon: <Compass size={13} style={{ color: '#38bdf8' }} />
      },
      {
        titleAr: 'النشاط ٢: أفكر وأحل مع المعلم (مسألة متدرجة خطوة بخطوة)',
        titleEn: 'Activity 2: Think & Solve (Step-by-Step Guided Practice)',
        strategyAr: 'استراتيجية الحل الإجرائي المتدرج والتدريس التبادلي',
        strategyEn: 'Stepwise Algorithmic Practice & Reciprocal Teaching',
        icon: <Calculator size={13} style={{ color: '#10b981' }} />
      },
      {
        titleAr: 'النشاط ٣: القاعدة الرياضية وتصويب الخطأ الشائع',
        titleEn: 'Activity 3: Governing Formula & Pitfall Analysis',
        strategyAr: 'استراتيجية تحليل الأخطاء المفاهيمية وإعادة الضبط',
        strategyEn: 'Misconception Analysis & Cognitive Correction',
        icon: <AlertOctagon size={13} style={{ color: '#f59e0b' }} />
      },
      {
        titleAr: 'النشاط ٤: تطبيق حياتي وتحدي التميز الرياضي',
        titleEn: 'Activity 4: Real-World Application & Mastery Challenge',
        strategyAr: 'استراتيجية حل المشكلات الواقعية والتفكير الرياضي المتقدم',
        strategyEn: 'Real-World Problem Solving & Advanced Reasoning',
        icon: <Award size={13} style={{ color: '#8b5cf6' }} />
      }
    ];
    return rubrics[exampleIndex % 4];
  }

  if (norm.includes('sci') || norm.includes('phys') || norm.includes('chem') || norm.includes('bio')) {
    const rubrics: TextbookRubricData[] = [
      {
        titleAr: 'النشاط ١: ألاحظ وأتساءل (ملاحظة الظاهرة وطرح الفرضيات)',
        titleEn: 'Activity 1: Observe & Wonder (Phenomenon & Hypotheses)',
        strategyAr: 'استراتيجية التساؤل الموجه والملاحظة الاستقصائية',
        strategyEn: 'Inquiry-Based Questioning & Observation',
        icon: <Eye size={13} style={{ color: '#38bdf8' }} />
      },
      {
        titleAr: 'النشاط ٢: أجرّب وأستنتج (التجربة والتحليل المعملي)',
        titleEn: 'Activity 2: Experiment & Conclude (Lab Investigation)',
        strategyAr: 'استراتيجية التجريب العملي وضبط المتغيرات',
        strategyEn: 'Hands-on Experimentation & Variable Control',
        icon: <Sparkles size={13} style={{ color: '#10b981' }} />
      },
      {
        titleAr: 'النشاط ٣: القانون العلمي والتفسير النظري في الطبيعة',
        titleEn: 'Activity 3: Scientific Law & Theoretical Explanation',
        strategyAr: 'استراتيجية استخلاص المفاهيم العلمية والقوانين الكونية',
        strategyEn: 'Scientific Conceptualization & Physical Laws',
        icon: <Lightbulb size={13} style={{ color: '#f59e0b' }} />
      },
      {
        titleAr: 'النشاط ٤: العلوم والبيئة في حياتنا وتحدي المستقبل',
        titleEn: 'Activity 4: Science, Technology & Environmental Impact',
        strategyAr: 'استراتيجية التطبيق التكنولوجي والمسؤولية البيئية',
        strategyEn: 'Technological Applications & Eco-Citizenship',
        icon: <Sprout size={13} style={{ color: '#10b981' }} />
      }
    ];
    return rubrics[exampleIndex % 4];
  }

  const defaultRubrics: TextbookRubricData[] = [
    {
      titleAr: 'النشاط ١: الاستكشاف وملاحظة المفهوم الأصيل',
      titleEn: 'Activity 1: Explore & Observe the Core Concept',
      strategyAr: 'استراتيجية الاستكشاف الموجه وقراءة النص المصدر',
      strategyEn: 'Guided Exploration & Source Text Analysis',
      icon: <BookOpen size={13} style={{ color: '#38bdf8' }} />
    },
    {
      titleAr: 'النشاط ٢: التطبيق العملي والمناقشة الموجهة',
      titleEn: 'Activity 2: Hands-on Practice & Guided Dialogue',
      strategyAr: 'استراتيجية التدريس التفاعلي والممارسة المنظمة',
      strategyEn: 'Interactive Instruction & Structured Practice',
      icon: <PenTool size={13} style={{ color: '#10b981' }} />
    },
    {
      titleAr: 'النشاط ٣: القاعدة المعتمدة وضبط المفاهيم',
      titleEn: 'Activity 3: Standard Rule & Conceptual Verification',
      strategyAr: 'استراتيجية الضبط المعرفي وتجنب اللبس',
      strategyEn: 'Cognitive Verification & Precision',
      icon: <CheckCircle2 size={13} style={{ color: '#f59e0b' }} />
    },
    {
      titleAr: 'النشاط ٤: الربط بالحياة اليومية وبناء الشخصية والقيم',
      titleEn: 'Activity 4: Real-Life Integration & Character Values',
      strategyAr: 'استراتيجية التعلم القائم على الحياة والمواطنة الإيجابية',
      strategyEn: 'Real-Life Context & Ethical Character Building',
      icon: <Award size={13} style={{ color: '#ec4899' }} />
    }
  ];
  return defaultRubrics[exampleIndex % 4];
}

function cleanExampleTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/^مثال\s*(تطبيقي)?\s*(\d*\s*من\s*\d*)?[:\s-]*/i, '')
    .replace(/^Worked\s*Example\s*(\d*\s*of\s*\d*)?[:\s-]*/i, '')
    .trim();
}

function cleanLatexMath(mathStr: string): string {
  return mathStr
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\int_\{([^}]+)\}\^\{([^}]+)\}/g, '∫[$1→$2] ')
    .replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, '∫[$1→$2] ')
    .replace(/\\int_\{([^}]+)\}/g, '∫[$1] ')
    .replace(/\\int_([a-zA-Z0-9]+)/g, '∫[$1] ')
    .replace(/\\int\b/g, '∫ ')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\times\b/g, ' × ')
    .replace(/\\div\b/g, ' ÷ ')
    .replace(/\\pm\b/g, ' ± ')
    .replace(/\\leq?\b/g, ' ≤ ')
    .replace(/\\geq?\b/g, ' ≥ ')
    .replace(/\\neq\b/g, ' ≠ ')
    .replace(/\\approx\b/g, ' ≈ ')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\lambda\b/g, 'λ')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\cdot\b/g, '·')
    .replace(/\\,/g, ' ')
    .replace(/\\quad/g, '  ')
    .replace(/\\qquad/g, '   ')
    .replace(/[\$]/g, '')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^4\b/g, '⁴')
    .replace(/\^n\b/g, 'ⁿ')
    .replace(/_0\b/g, '₀')
    .replace(/_1\b/g, '₁')
    .replace(/_2\b/g, '₂')
    .replace(/_a\b/g, 'ₐ')
    .replace(/_b\b/g, 'ᵦ')
    .replace(/_c\b/g, '꜀')
    .replace(/_d\b/g, 'Ꮷ')
    .trim();
}

function renderMathFormattedText(text: string): React.ReactNode {
  if (!text) return null;

  // Split by display math $$...$$ first
  const displaySegments = text.split(/(\$\$[\s\S]*?\$\$)/g);

  return displaySegments.map((dispSegment, dIdx) => {
    if (!dispSegment) return null;

    if (dispSegment.startsWith('$$') && dispSegment.endsWith('$$')) {
      const mathInner = dispSegment.slice(2, -2).trim();
      return (
        <div key={`disp-${dIdx}`} className="math-formula-display" dir="ltr">
          {cleanLatexMath(mathInner)}
        </div>
      );
    }

    const parts = dispSegment.split(/(\*\*.*?\*\*|\$[^\$]+?\$)/g);

    return (
      <React.Fragment key={`frag-${dIdx}`}>
        {parts.map((part, idx) => {
          if (!part) return null;

          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={idx} style={{ color: '#f8fafc', fontWeight: 700 }}>
                {part.slice(2, -2)}
              </strong>
            );
          }

          if (part.startsWith('$') && part.endsWith('$')) {
            const mathContent = part.slice(1, -1);
            return (
              <span key={idx} className="math-formula-inline" dir="ltr">
                {cleanLatexMath(mathContent)}
              </span>
            );
          }

          // Skip XML/HTML/SVG tags or attributes
          if (part.includes('<') || part.includes('>') || part.includes('"') || part.includes("'") || /\b(xmlns|fill|stroke|width|height|font|text|rx|ry|cx|cy|d|transform|style)\b/i.test(part)) {
            return <span key={idx}>{part}</span>;
          }

          if (/(\\[a-zA-Z]+|\b[a-zA-Z]\s*=\s*[^,;.]+)/.test(part) && (part.includes('\\') || part.includes('^') || (part.includes('=') && !part.includes('"') && !part.includes("'")))) {
            const tokens = part.split(/(\\[a-zA-Z]+(?:\^\{?[^}]*\}?|_\{?[^}]*\}?)?|[a-zA-Z]\s*=\s*[^,;.\s]+)/g);
            if (tokens.length > 1) {
              return (
                <React.Fragment key={idx}>
                  {tokens.map((tk, tIdx) => {
                    if (!tk) return null;
                    if (tk.startsWith('\\') || (tk.includes('=') && !/[\u0600-\u06FF]/.test(tk) && !tk.includes('"') && !tk.includes("'") && !/[<>#/]/.test(tk))) {
                      return (
                        <span key={tIdx} className="math-formula-inline" dir="ltr">
                          {cleanLatexMath(tk)}
                        </span>
                      );
                    }
                    return <span key={tIdx}>{tk}</span>;
                  })}
                </React.Fragment>
              );
            }
          }

          return <span key={idx}>{part}</span>;
        })}
      </React.Fragment>
    );
  });
}

const DialogueBubble: React.FC<{
  speaker: CharacterSpeaker;
  text: string;
  isEn: boolean;
  onPlayAudio?: () => void;
}> = ({ speaker, text, isEn, onPlayAudio }) => {
  return (
    <div className="textbook-dialogue-card" style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.85rem',
      padding: '0.85rem 1.1rem',
      margin: '0.5rem 0',
      borderRadius: '16px',
      background: speaker.bg,
      border: `1.5px solid ${speaker.borderColor}`,
      boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
    }}>
      <div className="textbook-dialogue-avatar" style={{
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: speaker.color,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        boxShadow: `0 4px 10px ${speaker.color}44`,
        flexShrink: 0
      }}>
        {speaker.avatarIcon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 800, color: speaker.color, fontSize: '0.95rem' }}>
              {isEn ? speaker.name : speaker.nameAr}
            </span>
            <span style={{
              fontSize: '0.72rem',
              padding: '2px 8px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontWeight: 600
            }}>
              {isEn ? speaker.role : speaker.roleAr}
            </span>
          </div>
          {onPlayAudio && (
            <button
              type="button"
              onClick={onPlayAudio}
              title={isEn ? 'Listen to pronunciation' : 'استمع للنطق الصوتي 🎧'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#38bdf8',
                borderRadius: '8px',
                padding: '3px 8px',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Volume2 size={13} />
              <span>{isEn ? 'Listen' : 'استمع 🎧'}</span>
            </button>
          )}
        </div>
        <div className="textbook-dialogue-text" style={{ fontSize: '0.96rem', color: '#f8fafc', lineHeight: 1.6, fontWeight: 500 }} dir="auto">
          {renderMathFormattedText(text)}
        </div>
      </div>
    </div>
  );
};

function renderContentWithDialogues(
  text: string,
  isEn: boolean,
  onPlayAudio?: (textToPlay: string) => void
): React.ReactNode {
  if (!text) return null;

  const lines = text.split('\n').filter(l => l.trim().length > 0);
  const hasDialogue = lines.some(l => parseDialogueLine(l) !== null);

  if (!hasDialogue) {
    const singleDiag = parseDialogueLine(text);
    if (singleDiag) {
      return (
        <DialogueBubble
          speaker={singleDiag.speaker}
          text={singleDiag.spokenText}
          isEn={isEn}
          onPlayAudio={onPlayAudio ? () => onPlayAudio(singleDiag.spokenText) : undefined}
        />
      );
    }
    return renderMathFormattedText(text);
  }

  return (
    <div className="textbook-dialogue-thread" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
      {lines.map((line, lIdx) => {
        const diag = parseDialogueLine(line);
        if (diag) {
          return (
            <DialogueBubble
              key={lIdx}
              speaker={diag.speaker}
              text={diag.spokenText}
              isEn={isEn}
              onPlayAudio={onPlayAudio ? () => onPlayAudio(diag.spokenText) : undefined}
            />
          );
        }
        return (
          <div key={lIdx} className="textbook-standard-line" style={{ margin: '0.25rem 0' }} dir="auto">
            {renderMathFormattedText(line)}
          </div>
        );
      })}
    </div>
  );
}

export const LectureViewer: React.FC<LectureViewerProps> = ({
  lecture: rawLecture, lang, profile, onStartAssessment, onOpenTutor, onNextLecture, hasNextUnlocked
}) => {
  const effectiveSubject = rawLecture?.subject || profile?.subject;
  const effectiveEducationType = rawLecture?.educationType || profile?.educationType;
  const isForeignLanguageLesson = isForeignLanguageSubject(effectiveSubject, effectiveEducationType);
  const isEn = lang === 'en';
  const isLessonTargetLang = isEn || isForeignLanguageLesson;
  const lecture = useMemo(
    () => {
      if (!rawLecture) return rawLecture;
      const lectureWithContext = {
        ...rawLecture,
        subject: effectiveSubject,
        educationType: effectiveEducationType
      };
      return sanitizeLectureForStudents(
        isForeignLanguageLesson
          ? localizeSingleLecture(ensureFourExamplesForLecture(lectureWithContext))
          : ensureFourExamplesForLecture(lectureWithContext)
      );
    },
    [rawLecture, isForeignLanguageLesson, effectiveSubject, effectiveEducationType]
  );
  const [formativeSelected, setFormativeSelected] = useState<Record<string, number>>({});
  const [formativeChecked, setFormativeChecked]   = useState<Record<string, boolean>>({});
  const [formativeHints, setFormativeHints]       = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [openSections, setOpenSections]           = useState<Record<number, boolean>>({ 0: true });
  const [activeExampleStep, setActiveExampleStep] = useState<Record<string, number>>({});
  const [showAllSteps, setShowAllSteps]           = useState<Record<string, boolean>>({});

  const isArabicLanguageLesson = Boolean(
    (effectiveSubject || rawLecture?.subject) &&
    String(effectiveSubject || rawLecture?.subject).toUpperCase().includes('ARABIC')
  );
  const t = getTranslations(isEn ? 'en' : 'ar');

  let socraticTitle = t.socraticCalloutTitle;
  let socraticDesc = t.socraticCalloutDesc;
  let socraticBtn = t.btnAskSocratic;

  if (effectiveSubject === 'FRENCH') {
    socraticTitle = 'Avez-vous une question ou un point flou dans cette leçon ?';
    socraticDesc = 'Échangez directement avec le Tuteur Socratique propulsé par Gemini pour comprendre le concept sans réponses toutes faites !';
    socraticBtn = 'Demander au Tuteur Socratique ✨';
  } else if (effectiveSubject === 'GERMAN') {
    socraticTitle = 'Hast du eine Frage oder ist ein Punkt in dieser Lektion unklar?';
    socraticDesc = 'Sprich direkt mit dem sokratischen KI-Tutor von Gemini, um das Konzept ohne fertige Antworten selbst zu begreifen!';
    socraticBtn = 'Sokratischen Tutor jetzt fragen ✨';
  } else if (effectiveSubject === 'ITALIAN') {
    socraticTitle = 'Hai una domanda o un punto poco chiaro in questa lezione?';
    socraticDesc = 'Parla direttamente con il Tutor Socratico potenziato da Gemini per capire il concetto senza risposte già pronte!';
    socraticBtn = 'Chiedi al Tutor Socratico ora ✨';
  } else if (isLessonTargetLang) {
    const enT = getTranslations('en');
    socraticTitle = enT.socraticCalloutTitle;
    socraticDesc = enT.socraticCalloutDesc;
    socraticBtn = `${enT.btnAskSocratic} ✨`;
  }

  useEffect(() => {
    setFormativeSelected({});
    setFormativeChecked({});
    setFormativeHints({});
    setRevealedSolutions({});
    setOpenSections({ 0: true });
    setActiveExampleStep({});
    setShowAllSteps({});
  }, [lecture?.id]);

  if (!lecture) {
    return (
      <div className="lecture-viewer-root" style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
        <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.08)', marginBottom: '1rem' }}>
          <BookOpen size={36} style={{ color: '#38bdf8' }} />
        </div>
        <p style={{ fontSize: '1rem', fontWeight: 500 }}>
          {lang === 'en' ? 'Select a lesson from the roadmap to start learning.' : 'اختر محاضرة من الخارطة لبدء الشرح والتفاعل.'}
        </p>
      </div>
    );
  }

  const title      = (isLessonTargetLang ? lecture.titleEn      : lecture.titleAr)      || lecture.titleEn || lecture.titleAr  || '';
  const subtitle   = (isLessonTargetLang ? lecture.subtitleEn   : lecture.subtitleAr)   || lecture.subtitleEn || lecture.subtitleAr|| '';
  const summary    = (isLessonTargetLang ? lecture.summaryEn     : lecture.summaryAr)    || lecture.summaryEn || lecture.summaryAr || '';
  const keyConcepts= (isLessonTargetLang ? lecture.keyConceptsEn: lecture.keyConceptsAr)|| lecture.keyConceptsEn || lecture.keyConceptsAr || [];
  const conceptMap = (isLessonTargetLang ? lecture.conceptMapEn : lecture.conceptMapAr) || lecture.conceptMapEn || lecture.conceptMapAr || [];
  const outcomes   = ((isLessonTargetLang ? lecture.learningOutcomesEn : lecture.learningOutcomesAr) || lecture.learningOutcomesEn || []).filter(o => o && o.trim().length > 0);
  const vocab      = lecture.vocabulary || [];
  const warmup     = (isLessonTargetLang ? lecture.warmupHookEn : lecture.warmupHookAr) || lecture.warmupHookEn || lecture.warmupHookAr || '';
  const unitTitle  = (isLessonTargetLang ? lecture.unitTitleEn : lecture.unitTitleAr) || lecture.unitTitleEn || lecture.unitTitleAr || '';
  const curriculumCoverUrl =
    ((lecture.sections || []).find(s => (s.diagram as any)?.diagramType === 'curriculum_cover')?.diagram?.imageUrl) ||
    (lecture as any).coverUrl ||
    lecture.diagramData?.imageUrl ||
    (isForeignLanguageLesson && (lecture.gradeLevel === 'G1' || (lecture.id || '').includes('connect-1') || (lecture.id || '').includes('g1-u'))
      ? '/curriculum_covers/egypt_primary_1_english.png'
      : undefined);
  const hasFourInteractiveExamples =
    (lecture.sections || []).filter((section) => (section.interactiveExample?.steps?.length || 0) > 0).length >= 4;

  const handleSelectFormativeOption = (checkId: string, oIdx: number) => {
    if (!formativeChecked[checkId]) setFormativeSelected(p => ({ ...p, [checkId]: oIdx }));
  };
  const handleCheckFormativeAnswer = (checkId: string) => {
    if (formativeSelected[checkId] !== undefined) setFormativeChecked(p => ({ ...p, [checkId]: true }));
  };
  const handleToggleHint     = (id: string) => setFormativeHints(p => ({ ...p, [id]: !p[id] }));
  const handleToggleSolution = (id: string) => setRevealedSolutions(p => ({ ...p, [id]: !p[id] }));
  const toggleSection        = (idx: number) => setOpenSections(p => ({ ...p, [idx]: !p[idx] }));
  const stepKey              = (secIdx: number, exTitle: string) => `${secIdx}-${exTitle}`;
  const advanceStep = (key: string, total: number) =>
    setActiveExampleStep(p => ({ ...p, [key]: Math.min((p[key] ?? 0) + 1, total - 1) }));
  const resetSteps = (key: string) =>
    setActiveExampleStep(p => ({ ...p, [key]: 0 }));

  const passed = lecture.lastAttempt?.passed;
  const score  = lecture.lastAttempt?.score;

  return (
    <main className="lecture-viewer-root" dir={isLessonTargetLang ? 'ltr' : 'rtl'}>
      {/* ═══ LESSON TITLE HERO ═══ */}
      <header className="lesson-hero-header">
        <div className="lesson-hero-left">
          {/* Official Ministry Curriculum Alignment Stamp */}
          <div className="curriculum-official-stamp">
            <Award size={14} style={{ color: '#38bdf8' }} />
            <span>
              {isLessonTargetLang
                ? '📘 Aligned with Official MOE Curricula & Teacher Guide Pedagogical Standards'
                : '📘 أسلوب الكتاب المدرسي المعتمد ومطابقة المعايير الوزارية الرسمية'}
            </span>
          </div>

          <div className="lesson-chips-row">
            <div className="lesson-number-chip">
              <BookMarked size={14} />
              <span>{isLessonTargetLang ? (lecture.lessonNumberEn || lecture.lessonNumberAr) : lecture.lessonNumberAr}</span>
            </div>
            {unitTitle && (
              <div className="lesson-unit-chip">
                <Layers size={13} />
                <span>{unitTitle}</span>
              </div>
            )}
          </div>
          <h1 className="lesson-hero-title" dir="auto">{title}</h1>
          <p className="lesson-hero-subtitle" dir="auto">{subtitle}</p>

          {/* Official Textbook Cover Card */}
          {curriculumCoverUrl && (
            <div className="textbook-cover-hero-badge" title={isLessonTargetLang ? 'Official MOE Textbook' : 'غلاف الكتاب المدرسي المعتمد'}>
              <img
                src={resolveDiagramImageUrl(curriculumCoverUrl)}
                alt="Official Textbook Cover"
                className="textbook-cover-img"
                onError={(e) => {
                  const img = e.currentTarget;
                  const clean = (curriculumCoverUrl || '').replace(/^\/+/, '');
                  if (!img.dataset.retryCount) {
                    img.dataset.retryCount = '1';
                    img.src = `./${clean}`;
                  } else if (img.dataset.retryCount === '1') {
                    img.dataset.retryCount = '2';
                    img.src = `/${clean}`;
                  }
                }}
              />
              <div className="textbook-cover-meta">
                <span className="textbook-cover-label">
                  {isLessonTargetLang ? 'Official Ministry Textbook' : 'الكتاب المدرسي المعتمد رسمياً'}
                </span>
                <span className="textbook-cover-subject">{unitTitle || title}</span>
              </div>
            </div>
          )}

          <div className="lesson-hero-meta">
            <span className="lesson-meta-badge">
              <Flame size={13} />
              {lecture.durationMinutes} {isLessonTargetLang ? 'min' : t.minutesUnit}
            </span>
            {hasFourInteractiveExamples && (
              <span className="lesson-meta-badge badge-examples-guarantee" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)', fontWeight: 600 }}>
                <Calculator size={13} />
                {isLessonTargetLang ? '4 Step-by-Step Worked Examples' : '🎯 4 أمثلة توضيحية تفاعلية محلولة'}
              </span>
            )}
            {passed !== undefined && (
              <span className={`lesson-meta-badge ${passed ? 'badge-passed' : 'badge-failed'}`}>
                <Star size={13} />
                {passed ? `${score}% ✓` : `${score}% ✗`}
              </span>
            )}
            {lecture.isCompleted && (
              <span className="lesson-meta-badge badge-completed">
                <CheckCircle2 size={13} />
                {isEn ? 'Completed' : 'مكتمل'}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ═══ LECTURE SOLVED / NEXT LECTURE DIRECT BANNER ═══ */}
      {lecture.isCompleted && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.08) 100%)',
          border: '1.5px solid rgba(16, 185, 129, 0.4)',
          borderRadius: '14px',
          padding: '1rem 1.25rem',
          margin: '1.25rem 0 1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
              flexShrink: 0
            }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.05rem', marginBottom: '2px' }}>
                {isEn ? '✓ Lecture Solved and Passed Successfully!' : '✓ تم حل هذه المحاضرة واجتياز التقييم بنجاح!'}
              </div>
              <div style={{ fontSize: '0.84rem', color: '#a7f3d0' }}>
                {isEn
                  ? `Achievement score: ${lecture.lastAttempt?.score || 100}% • The next lecture is unlocked and ready for you.`
                  : `درجة الإنجاز: ${lecture.lastAttempt?.score || 100}% • المحاضرة التالية مفتوحة وجاهزة للدراسة.`}
              </div>
            </div>
          </div>

          {hasNextUnlocked && onNextLecture && (
            <button
              type="button"
              onClick={onNextLecture}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '0.7rem 1.35rem',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.2s'
              }}
            >
              <span>{isLessonTargetLang ? 'Go to Next Lesson' : 'الانتقال للمحاضرة القادمة'}</span>
              <ArrowRight size={17} />
            </button>
          )}
        </div>
      )}

      {/* ═══ SECTION 1 — WARM-UP / REAL WORLD HOOK ═══ */}
      {warmup && (
        <section className="lesson-section warmup-section">
          <div className="lesson-section-head warmup-head">
            <div className="section-head-icon warmup-icon-wrap">
              <Zap size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '🌍 Real-World Connection' : '🌍 ربط بالحياة اليومية'}
            </h2>
          </div>
          <div className="warmup-bubble">
            <p className="warmup-text" dir="auto">{warmup}</p>
          </div>
        </section>
      )}

      {/* ═══ SECTION 2 — LEARNING OUTCOMES ═══ */}
      {outcomes.length > 0 && (
        <section className="lesson-section outcomes-section">
          <div className="lesson-section-head outcomes-head">
            <div className="section-head-icon outcomes-icon-wrap">
              <Target size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '🎯 Learning Objectives' : '🎯 أهداف الدرس'}
            </h2>
          </div>
          <div className="outcomes-checklist">
            {outcomes.map((out, i) => (
              <div key={i} className="outcome-item">
                <div className="outcome-check-circle">
                  <CheckCircle2 size={14} />
                </div>
                <span className="outcome-text" dir="auto">{out}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 3 — KEY VOCABULARY (مفردات الدرس) ═══ */}
      {vocab.length > 0 && (
        <section className="lesson-section vocab-section">
          <div className="lesson-section-head vocab-head">
            <div className="section-head-icon vocab-icon-wrap">
              <BookOpen size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '📚 Key Terms & Vocabulary' : '📚 مصطلحات الدرس'}
            </h2>
          </div>
          <div className="vocab-grid">
            {vocab.map((v, i) => {
              const displayTermAr = isArabicLanguageLesson
                ? (v.termAr || '').replace(/\s*\([A-Za-z0-9\s\-–—_/'&.,:;\\]+\)\s*/g, '').trim()
                : v.termAr;
              const termToSpeak = isLessonTargetLang
                ? (v.termEn || v.termAr)
                : (isArabicLanguageLesson ? displayTermAr : v.termAr);

              return (
                <div key={i} className="vocab-card">
                  <div className="vocab-term-row">
                    <span className="vocab-term-ar">{isLessonTargetLang ? (v.termEn || v.termAr) : displayTermAr}</span>
                    {!isArabicLanguageLesson && !isLessonTargetLang && v.termEn && v.termEn !== v.termAr && (
                      <span className="vocab-term-en">{v.termEn}</span>
                    )}
                    <button
                      type="button"
                      className="vocab-audio-listen-btn"
                      onClick={() => playAudioSpeech(termToSpeak, isLessonTargetLang, rawLecture?.subject)}
                      title={isLessonTargetLang ? 'Listen to pronunciation' : 'استمع للنطق الصوتي 🎧'}
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <p className="vocab-definition" dir="auto">
                    {(isLessonTargetLang ? (v.definitionEn || v.definitionAr) : (v.definitionAr || v.definitionEn)) || ''}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ SECTION 4 — LESSON CONTENT SECTIONS ═══ */}
      <section className="lesson-sections-container">
        <div className="lesson-section-head content-head">
          <div className="section-head-icon content-icon-wrap">
            <PenTool size={18} />
          </div>
          <h2 className="lesson-section-title">
            {isLessonTargetLang ? '📖 Lesson Content' : '📖 شرح الدرس'}
          </h2>
        </div>

        {/* Lesson Sections or Markdown Content */}
        {lecture.sections && lecture.sections.length > 0 ? (
          lecture.sections.map((sec, secIdx) => {
            const secTitle   = (isLessonTargetLang ? sec.titleEn   : sec.titleAr) || sec.titleEn || sec.titleAr;
            const secContent = (isLessonTargetLang ? sec.contentEn : sec.contentAr) || sec.contentEn || sec.contentAr;
            const tips       = ((isLessonTargetLang ? sec.tipsEn    : sec.tipsAr) || sec.tipsEn || sec.tipsAr || []).filter(t => t && t.trim().length > 0);
            const check      = sec.formativeCheck;
            const ex         = sec.interactiveExample;
            const isOpen     = openSections[secIdx] !== false;
            const exKey      = ex ? stepKey(secIdx, ex.titleAr || '') : '';
            const currentStep = ex ? (activeExampleStep[exKey] ?? 0) : 0;
            const allShown    = ex ? (showAllSteps[exKey] ?? false) : false;

          return (
            <article key={secIdx} className="content-section-card">
              {/* Section Header / Accordion Toggle */}
              <button
                type="button"
                className={`section-accordion-header ${isOpen ? 'accordion-open' : ''}`}
                onClick={() => toggleSection(secIdx)}
              >
                <div className="section-header-main">
                  <div className="section-header-left">
                    <span className="section-number-badge">{secIdx + 1}</span>
                    <span className="section-title-text">{secTitle}</span>
                  </div>
                  <div className="section-header-toggle-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {(sec.diagram || check || ex) && (
                  <div className="section-header-badges-row">
                    {sec.diagram && (
                      <span className="section-has-diagram-badge">
                        <Layers size={12} />
                        <span>{isLessonTargetLang ? 'Diagram' : 'رسم توضيحي'}</span>
                      </span>
                    )}
                    {check && (
                      <span className="section-has-check-badge">
                        <CheckCircle size={12} />
                        <span>{isLessonTargetLang ? 'Quiz' : 'تحقق'}</span>
                      </span>
                    )}
                    {ex && (
                      <span className="section-has-example-badge">
                        <Calculator size={12} />
                        <span>{isLessonTargetLang ? `Example ${secIdx + 1} of 4` : `مثال ${secIdx + 1} من 4`}</span>
                      </span>
                    )}
                  </div>
                )}
              </button>

              {isOpen && (
                <div className="section-body">

                  {/* Main Explanation Text */}
                  <div className="section-explanation">
                    <RichContentRenderer content={secContent} isEn={isLessonTargetLang} />
                  </div>

                  {/* ── CURRICULUM ILLUSTRATION & SCIENTIFIC DIAGRAM ── */}
                  {sec.diagram && (
                    <CurriculumDiagramRenderer diagram={sec.diagram} lang={isLessonTargetLang ? 'en' : lang} />
                  )}

                  {/* ── INTERACTIVE WORKED EXAMPLE (Step-by-Step) ── */}
                  {ex && (() => {
                    const rubric = getTextbookRubric(rawLecture?.subject, secIdx);
                    return (
                    <div className="worked-example-card">
                      {/* ── Official Textbook Rubric Banner ── */}
                      <div className="textbook-rubric-bar">
                        <div className="textbook-rubric-left">
                          <span className="textbook-activity-chip">
                            {rubric.icon}
                            <span>{isLessonTargetLang ? rubric.titleEn : rubric.titleAr}</span>
                          </span>
                          {rubric.audioTrack && (
                            <button
                              type="button"
                              className="textbook-track-chip"
                              onClick={() => playAudioSpeech(ex.equation || ex.steps[0]?.textEn || ex.steps[0]?.textAr || '', isLessonTargetLang, rawLecture?.subject)}
                              title={isLessonTargetLang ? 'Play Lesson Audio Track' : 'استمع للمسار الصوتي للنشاط 🎧'}
                            >
                              <Volume2 size={13} />
                              <span>Track {String(rubric.audioTrack).padStart(2, '0')} 🎧</span>
                            </button>
                          )}
                        </div>
                        <div className="textbook-rubric-right">
                          <span className="textbook-strategy-chip" title={isLessonTargetLang ? rubric.strategyEn : rubric.strategyAr}>
                            <Compass size={12} />
                            <span>{isLessonTargetLang ? rubric.strategyEn : rubric.strategyAr}</span>
                          </span>
                          <span className="textbook-moe-badge">
                            <CheckCircle2 size={11} />
                            <span>{isLessonTargetLang ? 'MOE Standard' : 'معتمد وزارياً'}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Header */}
                      <div className="we-header">
                        <div className="we-header-left">
                          <div className="we-icon-wrap">
                            <Calculator size={18} />
                          </div>
                          <div className="we-title-group">
                            <span className="we-label">
                              <Sparkles size={13} />
                              {isLessonTargetLang ? `Interactive Example ${secIdx + 1} of 4` : `مثال توضيحي تفاعلي (${secIdx + 1} من 4)`}
                            </span>
                            <h4 className="we-title" dir="auto">
                              {cleanExampleTitle((isLessonTargetLang ? ex.titleEn : ex.titleAr) || ex.titleEn || ex.titleAr)}
                            </h4>
                          </div>
                        </div>

                        {/* Step Count Chip */}
                        <div className="we-step-counter-chip">
                          {isLessonTargetLang
                            ? `Step ${(activeExampleStep[exKey] ?? 0) + 1} of ${ex.steps.length}`
                            : `الخطوة ${(activeExampleStep[exKey] ?? 0) + 1} من ${ex.steps.length}`}
                        </div>
                      </div>

                      {/* Problem Statement / Formula Banner */}
                      {Boolean(
                        isLessonTargetLang
                          ? ((ex as any).problemEn || (ex as any).equationEn || ex.equation)
                          : (ex.equation || (ex as any).problemAr || (ex as any).problemEn)
                      ) && (
                        <div className="we-problem-statement">
                          <div className="we-problem-tag-row">
                            <BookOpen size={14} />
                            <span>{isLessonTargetLang ? 'Problem / Governing Rule' : 'نص المسألة / القاعدة الرياضية'}</span>
                          </div>
                          <div className="we-problem-content" dir="auto">
                            {renderContentWithDialogues(
                              (isLessonTargetLang
                                ? ((ex as any).problemEn || (ex as any).equationEn || ex.equation)
                                : (ex.equation || (ex as any).problemAr || (ex as any).problemEn)) || '',
                              isLessonTargetLang,
                              (txt) => playAudioSpeech(txt, isLessonTargetLang, rawLecture?.subject || profile?.subject)
                            )}
                          </div>
                        </div>
                      )}

                      {/* Step-by-Step Progress */}
                      <div className="we-steps-progress">
                        {ex.steps.map((_, sIdx) => (
                          <div
                            key={sIdx}
                            className={`we-step-dot ${sIdx <= currentStep || allShown ? 'step-dot-active' : ''} ${sIdx === currentStep && !allShown ? 'step-dot-current' : ''}`}
                            title={isLessonTargetLang ? `Step ${sIdx + 1}` : `الخطوة ${sIdx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Steps Display */}
                      <div className="we-steps-list">
                        {ex.steps.map((step, sIdx) => {
                          const visible = allShown || sIdx <= currentStep;
                          if (!visible) return null;
                          const stepText = (isLessonTargetLang ? step.textEn : step.textAr) || step.textEn || step.textAr;
                          const stepNote = (isLessonTargetLang ? step.noteEn : step.noteAr) || step.noteEn || step.noteAr;
                          return (
                            <div
                              key={sIdx}
                              className={`we-step-row ${sIdx === currentStep && !allShown ? 'step-row-highlight' : ''}`}
                            >
                              <div className="we-step-num">{step.stepNumber}</div>
                              <div className="we-step-content">
                                <div className="we-step-text" dir="auto">
                                  {renderContentWithDialogues(stepText, isLessonTargetLang, (txt) => playAudioSpeech(txt, isLessonTargetLang, rawLecture?.subject))}
                                </div>
                                {stepNote && (
                                  <span className="we-step-note" dir="auto">
                                    <Lightbulb size={12} /> {stepNote}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Step Navigation Controls */}
                      <div className="we-nav-controls">
                        {!allShown && currentStep < ex.steps.length - 1 ? (
                          <button
                            type="button"
                            className="we-btn-next"
                            onClick={() => advanceStep(exKey, ex.steps.length)}
                          >
                            <Play size={15} />
                            {isLessonTargetLang ? 'Next Step' : 'الخطوة التالية'}
                          </button>
                        ) : !allShown ? (
                          <button
                            type="button"
                            className="we-btn-next we-btn-finish"
                            onClick={() => setShowAllSteps(p => ({ ...p, [exKey]: true }))}
                          >
                            <SkipForward size={15} />
                            {isLessonTargetLang ? 'Show All Steps' : 'عرض جميع الخطوات'}
                          </button>
                        ) : null}
                        <button
                          type="button"
                          className="we-btn-reset"
                          onClick={() => {
                            resetSteps(exKey);
                            setShowAllSteps(p => ({ ...p, [exKey]: false }));
                          }}
                        >
                          <RefreshCw size={14} />
                          {isLessonTargetLang ? 'Restart' : 'إعادة'}
                        </button>
                      </div>

                      {/* Golden Takeaway */}
                      {(ex.takeawayAr || ex.takeawayEn) && (
                        <div className="we-takeaway">
                          <Star size={16} className="takeaway-star" />
                          <div className="takeaway-content" style={{ flex: 1 }}>
                            <div className="takeaway-title" style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: 800, marginBottom: '0.2rem' }}>
                              {isLessonTargetLang ? 'Golden Pedagogical Takeaway' : 'الفائدة التربوية الذهبية'}
                            </div>
                            <p className="takeaway-text" dir="auto">
                              {renderMathFormattedText((isLessonTargetLang ? ex.takeawayEn : ex.takeawayAr) || ex.takeawayEn || ex.takeawayAr)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    );
                  })()}

                  {/* ── TIPS BOX ── */}
                  {tips && tips.length > 0 && (
                    <div className="tips-box-v2">
                      <div className="tips-v2-header">
                        <Lightbulb size={16} className="tips-v2-icon" />
                        <span>{isLessonTargetLang ? 'Key Tips' : 'نصائح مهمة'}</span>
                      </div>
                      <ul className="tips-v2-list">
                        {tips.map((tip, ti) => (
                          <li key={ti} className="tips-v2-item">
                            <span className="tip-dot">◆</span>
                            <span dir="auto">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── FORMATIVE CHECK ── */}
                  {check && (() => {
                    const opts        = (isLessonTargetLang ? check.optionsEn : check.optionsAr) || check.optionsEn || check.optionsAr || [];
                    const qText       = (isLessonTargetLang ? check.questionEn : check.questionAr) || check.questionEn || check.questionAr || '';
                    const explanation = (isLessonTargetLang ? check.explanationEn : check.explanationAr) || check.explanationEn || check.explanationAr || '';
                    const hint        = (isLessonTargetLang ? check.hintEn : check.hintAr) || check.hintEn || check.hintAr || '';
                    const selectedIdx = formativeSelected[check.id];
                    const isChecked   = formativeChecked[check.id];
                    const isCorrect   = isChecked && selectedIdx === check.correctIndex;
                    const isHintOpen  = formativeHints[check.id];

                    return (
                      <div className="formative-check-v2">
                        <div className="fc-header-v2">
                          <div className="fc-icon-v2">❓</div>
                          <div>
                            <span className="fc-label-v2">
                              {isLessonTargetLang ? 'Check Your Understanding' : 'تحقق من فهمك'}
                            </span>
                            <p className="fc-question-v2" dir="auto">{qText}</p>
                          </div>
                        </div>

                        <div className="fc-options-v2">
                          {opts.map((opt, oIdx) => {
                            let cls = 'fc-option-v2';
                            const isSelected = selectedIdx === oIdx;
                            if (isChecked) {
                              if (oIdx === check.correctIndex) cls += ' fc-opt-correct';
                              else if (isSelected)            cls += ' fc-opt-wrong';
                            } else if (isSelected) {
                              cls += ' fc-opt-selected';
                            }
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                className={cls}
                                onClick={() => handleSelectFormativeOption(check.id, oIdx)}
                              >
                                <span className="fc-opt-letter">
                                  {isLessonTargetLang ? String.fromCharCode(65 + oIdx) : (['أ', 'ب', 'ج', 'د'][oIdx] || String.fromCharCode(65 + oIdx))}
                                </span>
                                <span className="fc-opt-text" dir="auto">{opt}</span>
                                {isChecked && oIdx === check.correctIndex && (
                                  <CheckCircle2 size={14} className="fc-opt-icon-ok" />
                                )}
                                {isChecked && isSelected && oIdx !== check.correctIndex && (
                                  <X size={14} className="fc-opt-icon-err" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="fc-actions-v2">
                          {!isChecked && (
                            <button
                              type="button"
                              className="fc-btn-check"
                              disabled={selectedIdx === undefined}
                              onClick={() => handleCheckFormativeAnswer(check.id)}
                            >
                              <CheckCircle2 size={15} />
                              {isLessonTargetLang ? 'Check Answer' : 'تحقق من الإجابة'}
                            </button>
                          )}
                          {hint && (
                            <button
                              type="button"
                              className="fc-btn-hint"
                              onClick={() => handleToggleHint(check.id)}
                            >
                              <Lightbulb size={14} />
                              {isHintOpen ? (isLessonTargetLang ? 'Hide Hint' : 'إخفاء التلميح') : (isLessonTargetLang ? 'Show Hint' : 'تلميح')}
                            </button>
                          )}
                        </div>

                        {isHintOpen && hint && (
                          <div className="fc-hint-box">
                            <Lightbulb size={13} />
                            <span>{hint}</span>
                          </div>
                        )}

                        {isChecked && (
                          <div className={`fc-feedback-v2 ${isCorrect ? 'fc-correct' : 'fc-wrong'}`}>
                            <div className="fc-feedback-head">
                              {isCorrect
                                ? <><CheckCircle size={16} /> <span>{isLessonTargetLang ? '✅ Correct! Well done!' : '✅ ممتاز! إجابة صحيحة!'}</span></>
                                : <><AlertOctagon size={16} /> <span>{isLessonTargetLang ? '❌ Not quite right.' : '❌ ليست الإجابة الصحيحة.'}</span></>
                              }
                            </div>
                            <p className="fc-feedback-exp">{explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </article>
          );
        })
        ) : (
          <div className="content-section-card" style={{ padding: '1.75rem', lineHeight: '1.8' }}>
            <RichContentRenderer
              content={(isLessonTargetLang ? (lecture.mainContentEn || lecture.mainContentAr) : (lecture.mainContentAr || lecture.mainContentEn)) || ''}
              isEn={isLessonTargetLang}
            />
          </div>
        )}
      </section>

      {/* ═══ STANDALONE WORKED EXAMPLES (IF SECTIONS EMPTY) ═══ */}
      {(!lecture.sections || lecture.sections.length === 0) && lecture.workedExamples && lecture.workedExamples.length > 0 && (
        <section className="lesson-section worked-examples-section">
          <div className="lesson-section-head" style={{ borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <div className="section-head-icon" style={{ background: '#3b82f6', color: '#fff', borderRadius: '8px', padding: '6px', display: 'flex' }}>
              <Calculator size={18} />
            </div>
            <h2 className="lesson-section-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8' }}>
              {isLessonTargetLang ? '💡 Interactive Worked Examples' : '💡 أمثلة محلولة خطوة بخطوة'}
            </h2>
          </div>

          <div className="worked-examples-grid" style={{ display: 'grid', gap: '1.25rem' }}>
            {lecture.workedExamples.map((ex, exIdx) => {
              const exTitle = (isLessonTargetLang ? ex.titleEn : ex.titleAr) || ex.titleEn || ex.titleAr;
              const probText = (isLessonTargetLang ? (ex.problemEn || ex.problemAr) : (ex.problemAr || ex.problemEn)) || ex.problemEn || '';
              const steps = (isLessonTargetLang ? (ex.stepByStepSolutionEn || ex.stepsEn || ex.stepByStepSolutionAr || ex.stepsAr) : (ex.stepByStepSolutionAr || ex.stepsAr)) || [];
              const finalAns = (isLessonTargetLang ? (ex.finalAnswerEn || ex.finalAnswerAr) : (ex.finalAnswerAr || ex.finalAnswerEn)) || '';
              const takeaway = (isLessonTargetLang ? (ex.takeawayEn || ex.takeawayAr) : (ex.takeawayAr || ex.takeawayEn)) || '';
              return (
                <div key={ex.id || exIdx} className="worked-example-card" style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '1.25rem' }}>
                  <div className="we-header" style={{ display: 'flex', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 'bold', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem' }}>
                        {isLessonTargetLang ? `Example ${exIdx + 1}` : `مثال ${exIdx + 1}`}
                      </span>
                      <h4 style={{ margin: 0, color: '#f8fafc', fontSize: '1.1rem' }}>{exTitle}</h4>
                    </div>
                  </div>

                  {probText && (
                    <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '10px', marginBottom: '1rem', color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.7' }}>
                      <p style={{ margin: 0 }}>{probText}</p>
                    </div>
                  )}

                  {steps.length > 0 && (
                    <div className="we-steps-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {steps.map((st: string, sIdx: number) => (
                        <div key={sIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: '#141e33', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: isLessonTargetLang ? '3px solid #38bdf8' : 'none', borderRight: !isLessonTargetLang ? '3px solid #38bdf8' : 'none' }}>
                          <span style={{ color: '#38bdf8', fontWeight: 'bold', minWidth: '24px' }}>{sIdx + 1}.</span>
                          <span style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{st}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {finalAns && (
                    <div style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '0.75rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399' }}>
                      <CheckCircle2 size={16} />
                      <span>{isLessonTargetLang ? 'Final Answer:' : 'النتيجة النهائية:'} <strong>{finalAns}</strong></span>
                    </div>
                  )}

                  {takeaway && (
                    <div style={{ marginTop: '0.75rem', color: '#fbbf24', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Star size={14} />
                      <span>{takeaway}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ STANDALONE FORMATIVE ASSESSMENT (IF SECTIONS EMPTY) ═══ */}
      {(!lecture.sections || lecture.sections.length === 0) && lecture.formativeAssessment && lecture.formativeAssessment.length > 0 && (
        <section className="lesson-section formative-section">
          <div className="lesson-section-head" style={{ borderBottom: '1px solid #334155', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <div className="section-head-icon" style={{ background: '#10b981', color: '#fff', borderRadius: '8px', padding: '6px', display: 'flex' }}>
              <CheckCircle size={18} />
            </div>
            <h2 className="lesson-section-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#34d399' }}>
              {isLessonTargetLang ? '❓ Quick Understanding Checks' : '❓ أسئلة تحقق سريعة'}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {lecture.formativeAssessment.map((q: any, qIdx: number) => {
              const qText = (isLessonTargetLang ? q.questionEn : q.questionAr) || q.questionEn || q.questionAr || '';
              const opts = (isLessonTargetLang ? q.optionsEn : q.optionsAr) || q.optionsEn || q.optionsAr || [];
              const rationale = (isLessonTargetLang ? q.rationaleEn : q.rationaleAr) || q.rationaleEn || q.rationaleAr || '';
              const selectedIdx = formativeSelected[q.id];
              const isChecked = formativeChecked[q.id];
              const isCorrect = isChecked && selectedIdx === q.correctIndex;

              return (
                <div key={q.id || qIdx} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '1.25rem' }}>
                  <p style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#f8fafc', marginBottom: '1rem' }}>
                    {qIdx + 1}. {qText}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                    {opts.map((opt: string, oIdx: number) => {
                      let btnBg = '#1e293b';
                      let btnBorder = '#334155';
                      let btnColor = '#cbd5e1';

                      const isSelected = selectedIdx === oIdx;
                      if (isChecked) {
                        if (oIdx === q.correctIndex) {
                          btnBg = 'rgba(16, 185, 129, 0.2)';
                          btnBorder = '#10b981';
                          btnColor = '#34d399';
                        } else if (isSelected) {
                          btnBg = 'rgba(239, 68, 68, 0.2)';
                          btnBorder = '#ef4444';
                          btnColor = '#f87171';
                        }
                      } else if (isSelected) {
                        btnBg = 'rgba(56, 189, 248, 0.2)';
                        btnBorder = '#38bdf8';
                        btnColor = '#38bdf8';
                      }

                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSelectFormativeOption(q.id, oIdx)}
                          style={{
                            background: btnBg,
                            border: `1px solid ${btnBorder}`,
                            color: btnColor,
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            textAlign: 'start',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}
                        >
                          <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    {!isChecked ? (
                      <button
                        type="button"
                        disabled={selectedIdx === undefined}
                        onClick={() => handleCheckFormativeAnswer(q.id)}
                        style={{
                          background: selectedIdx !== undefined ? '#38bdf8' : '#334155',
                          color: selectedIdx !== undefined ? '#0f172a' : '#94a3b8',
                          border: 'none',
                          padding: '0.5rem 1.25rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: selectedIdx !== undefined ? 'pointer' : 'not-allowed',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <CheckCircle2 size={15} />
                        {isLessonTargetLang ? 'Check Answer' : 'تحقق من الإجابة'}
                      </button>
                    ) : (
                      <div style={{ color: isCorrect ? '#34d399' : '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                        {isCorrect ? <CheckCircle size={16} /> : <AlertOctagon size={16} />}
                        <span>{isCorrect ? (isLessonTargetLang ? 'Correct!' : 'إجابة صحيحة!') : (isLessonTargetLang ? 'Incorrect' : 'إجابة غير صحيحة')}</span>
                      </div>
                    )}
                  </div>

                  {isChecked && rationale && (
                    <div style={{ marginTop: '0.75rem', background: '#141e33', padding: '0.75rem', borderRadius: '8px', color: '#cbd5e1', fontSize: '0.9rem' }}>
                      💡 {rationale}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ SECTION 5 — LESSON SUMMARY ═══ */}
      {summary && (
        <section className="lesson-section summary-section">
          <div className="lesson-section-head summary-head">
            <div className="section-head-icon summary-icon-wrap">
              <Sprout size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '📝 Lesson Summary' : '📝 ملخص الدرس'}
            </h2>
          </div>
          <div className="summary-card">
            <p className="summary-text">{summary}</p>
          </div>
        </section>
      )}

      {/* ═══ SECTION 6 — KEY CONCEPTS ═══ */}
      {keyConcepts.length > 0 && (
        <section className="lesson-section concepts-section">
          <div className="lesson-section-head concepts-head">
            <div className="section-head-icon concepts-icon-wrap">
              <Layers size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '🔑 Key Concepts' : '🔑 المفاهيم الأساسية'}
            </h2>
          </div>
          <div className="concepts-tags">
            {keyConcepts.map((c, i) => (
              <span key={i} className="concept-tag">{c}</span>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 7 — CONCEPT MAP ═══ */}
      {conceptMap.length > 0 && (
        <section className="lesson-section concept-map-section">
          <div className="lesson-section-head concept-map-head">
            <div className="section-head-icon concept-map-icon-wrap">
              <Compass size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '🗺️ Concept Map' : '🗺️ خريطة المفاهيم'}
            </h2>
          </div>
          <div className="concept-map-v2">
            {conceptMap.map((node, i) => (
              <div key={i} className="concept-map-node-v2">
                <span className="cm-node-num">{i + 1}</span>
                <span className="cm-node-text">{node}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ SECTION 8 — TEXTBOOK EXERCISES (تدريبات الكتاب) ═══ */}
      {lecture.textbookExercises && lecture.textbookExercises.length > 0 && (
        <section className="lesson-section exercises-section">
          <div className="lesson-section-head exercises-head">
            <div className="section-head-icon exercises-icon-wrap">
              <FileCheck2 size={18} />
            </div>
            <h2 className="lesson-section-title">
              {isLessonTargetLang ? '✏️ Guided Practice' : '✏️ تدريبات تطبيقية'}
            </h2>
          </div>

          <div className="exercises-v2-list">
            {lecture.textbookExercises.map((ex, exIdx) => {
              const qText  = (isLessonTargetLang ? (ex.questionEn || ex.problemEn) : (ex.questionAr || ex.problemAr)) || ex.questionEn || ex.problemEn || '';
              const steps  = (isLessonTargetLang ? (ex.solutionStepsEn || ex.solutionStepsAr) : ex.solutionStepsAr) || ex.solutionStepsEn || [];
              const answer = (isLessonTargetLang ? (ex.answerEn || ex.finalAnswerEn) : (ex.answerAr || ex.finalAnswerAr)) || ex.answerEn || ex.finalAnswerEn || '';
              const revealed = revealedSolutions[ex.id];

              return (
                <div key={exIdx} className="exercise-v2-card">
                  <div className="ex-v2-top">
                    <div className="ex-v2-num-badge">
                      {isLessonTargetLang ? `Ex ${exIdx + 1}` : `تمرين ${exIdx + 1}`}
                    </div>
                    <p className="ex-v2-question">{qText}</p>
                  </div>

                  <button
                    type="button"
                    className="ex-v2-toggle-btn"
                    onClick={() => handleToggleSolution(ex.id)}
                  >
                    {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span>
                      {revealed
                        ? (isLessonTargetLang ? 'Hide Solution' : 'إخفاء الحل')
                        : (isLessonTargetLang ? 'Show Step-by-Step Solution' : 'عرض الحل خطوة بخطوة')}
                    </span>
                  </button>

                  {revealed && (
                    <div className="ex-v2-solution">
                      <div className="ex-solution-steps">
                        {steps.map((st, si) => (
                          <div key={si} className="ex-solution-step-row">
                            <span className="ex-sol-step-num">{si + 1}</span>
                            <span className="ex-sol-step-text">{st}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ex-final-answer">
                        <Award size={15} />
                        <span>{isLessonTargetLang ? 'Answer:' : 'الإجابة:'}</span>
                        <strong>{answer}</strong>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ═══ SECTION 9 — SOCRATIC AI TUTOR ═══ */}
      <section className="lesson-section socratic-cta-section">
        <div className="socratic-cta-card" dir={isLessonTargetLang ? 'ltr' : 'rtl'}>
          <div className="socratic-cta-icon-wrap">
            <HelpCircle size={26} />
          </div>
          <div className="socratic-cta-text">
            <h4 className="socratic-cta-title">{socraticTitle}</h4>
            <p className="socratic-cta-desc">{socraticDesc}</p>
          </div>
          <button type="button" className="socratic-cta-btn" onClick={onOpenTutor}>
            <Sparkles size={16} />
            {socraticBtn}
          </button>
        </div>
      </section>

      {/* ═══ SECTION 10 — ASSESSMENT CTA ═══ */}
      <section className="lesson-section assessment-launch-section">
        <div className="assessment-launch-card">
          <div className="al-left">
            <div className="al-icon-wrap">
              <BookMarked size={24} />
            </div>
            <div>
              <h3 className="al-title">
                {isLessonTargetLang ? '🏆 Ready for the Assessment?' : '🏆 هل أنت مستعد للتقييم؟'}
              </h3>
              <p className="al-desc">
                {isLessonTargetLang
                  ? `Score ${lecture.passingScoreRequired}% or above to unlock the next lesson.`
                  : `احصل على ${lecture.passingScoreRequired}% أو أعلى لفتح الدرس التالي.`}
              </p>
              {lecture.lastAttempt && (
                <span className={`al-last-attempt ${lecture.lastAttempt.passed ? 'al-passed' : 'al-failed'}`}>
                  {isLessonTargetLang ? `Last attempt: ${lecture.lastAttempt.score}%` : `آخر محاولة: ${lecture.lastAttempt.score}%`}
                </span>
              )}
            </div>
          </div>
          <div className="al-right">
            <button
              id="btn-start-assessment"
              type="button"
              className={`al-btn-primary ${lecture.isCompleted ? 'al-btn-retry' : ''}`}
              onClick={onStartAssessment}
            >
              {lecture.isCompleted ? (
                <><RefreshCw size={17} /> {isLessonTargetLang ? 'Retake' : 'إعادة التقييم'}</>
              ) : (
                <><Play size={17} /> {isLessonTargetLang ? 'Start Assessment' : 'ابدأ التقييم'}</>
              )}
            </button>

            {hasNextUnlocked && onNextLecture && (
              <button
                type="button"
                className="al-btn-next"
                onClick={onNextLecture}
              >
                {isLessonTargetLang ? 'Next Lesson' : 'الدرس التالي'}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
