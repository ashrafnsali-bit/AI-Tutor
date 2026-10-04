import React, { useState } from 'react';
import { 
  Share2, 
  Check, 
  Copy, 
  MessageCircle, 
  Send, 
  Globe, 
  Sparkles, 
  X,
  ExternalLink,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

export const PLATFORM_SHARE_URL = 'https://ashrafnsali-bit.github.io/AI-Tutor/';

export const PLATFORM_SHARE_INFO = {
  titleAr: 'منصة المعلم الذكي | AI Tutor',
  titleEn: 'AI Tutor Platform | Smart Adaptive Learning',
  summaryAr: 'منصة تعليمية ذكية وتكيفية معززة بـ Gemini AI للمناهج الوطنية المعتمدة؛ شرح تفاعلي خطوة بخطوة، معلم سقراطي، تقييمات فورية، ورقابة أبوية آمنة لمتابعة مسار الطلاب.',
  summaryEn: 'Smart adaptive learning platform powered by Gemini AI, aligned with official national curriculums; interactive step-by-step lessons, Socratic AI tutor, instant assessments, and verified parental controls.',
  fullShareMessageAr: `🎓 *منصة المعلم الذكي | AI Tutor*
منصة تعليمية ذكية وتكيفية معززة بـ Gemini AI للمناهج الوطنية المعتمدة؛ شرح تفاعلي خطوة بخطوة، معلم سقراطي، تقييمات فورية، ورقابة أبوية آمنة لمتابعة مسار الطلاب.

🔗 رابط المنصة:
https://ashrafnsali-bit.github.io/AI-Tutor/`,
  fullShareMessageEn: `🎓 *AI Tutor Platform*
Smart adaptive learning platform powered by Gemini AI, aligned with official national curriculums; interactive step-by-step lessons, Socratic AI tutor, instant assessments, and verified parental controls.

🔗 Platform Link:
https://ashrafnsali-bit.github.io/AI-Tutor/`
};

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEn?: boolean;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  isEn = false
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const title = isEn ? PLATFORM_SHARE_INFO.titleEn : PLATFORM_SHARE_INFO.titleAr;
  const summary = isEn ? PLATFORM_SHARE_INFO.summaryEn : PLATFORM_SHARE_INFO.summaryAr;
  const fullText = isEn ? PLATFORM_SHARE_INFO.fullShareMessageEn : PLATFORM_SHARE_INFO.fullShareMessageAr;

  const handleCopyLinkOnly = async () => {
    try {
      await navigator.clipboard.writeText(PLATFORM_SHARE_URL);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyFullText = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: summary,
          url: PLATFORM_SHARE_URL
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      handleCopyFullText();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(PLATFORM_SHARE_URL)}&text=${encodeURIComponent(summary)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(summary)}&url=${encodeURIComponent(PLATFORM_SHARE_URL)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in" dir={isEn ? 'ltr' : 'rtl'}>
      <div className="relative w-full max-w-lg bg-slate-900/95 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 p-6 text-white overflow-hidden max-h-[90vh] flex flex-col">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400">
              <Share2 size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>{isEn ? 'Share Platform Link' : 'مشاركة رابط وشرح المنصة'}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-normal">
                  Link Preview
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {isEn 
                  ? 'Concise platform overview ready for instant sharing on WhatsApp and social channels' 
                  : 'شرح مختصر للمنصة مع الشعار يظهر مباشرة عند مشاركة الرابط عبر وسائل التواصل'}
              </p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={isEn ? 'Close' : 'إغلاق'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-4 space-y-4 overflow-y-auto pr-1">
          {/* Visual Link Preview Card (How it looks on WhatsApp/Social) */}
          <div className="rounded-xl border border-slate-700/80 bg-slate-950/60 p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} />
                {isEn ? 'Social Link Preview Card' : 'معاينة ظهور الرابط عند المشاركة (WhatsApp / Telegram)'}
              </span>
              <span className="text-slate-500 text-[10px]">Open Graph Verified</span>
            </div>

            <div className="flex gap-3 items-start bg-slate-900/90 rounded-lg p-3 border border-slate-800">
              <img 
                src="https://ashrafnsali-bit.github.io/AI-Tutor/og-image.jpg" 
                alt="AI Tutor Logo" 
                className="w-20 h-20 rounded-lg object-cover border border-cyan-500/30 flex-shrink-0 bg-slate-950"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex-1 min-w-0 space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                  <GraduationCap size={14} className="text-cyan-400 flex-shrink-0" />
                  <span>{title}</span>
                </div>
                <p className="text-[12px] text-slate-300 leading-relaxed line-clamp-3">
                  {summary}
                </p>
                <div className="text-[10px] text-cyan-400/90 flex items-center gap-1 font-mono pt-0.5">
                  <Globe size={11} />
                  <span>ashrafnsali-bit.github.io/AI-Tutor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Copyable Message Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>{isEn ? 'Ready-to-send Message' : 'نص الرسالة الجاهزة للإرسال:'}</span>
              <span className="text-[10px] text-slate-400">
                {isEn ? 'Formatted for WhatsApp' : 'منسق ومجهز للواتساب'}
              </span>
            </label>
            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed font-sans select-all whitespace-pre-line">
              {fullText}
            </div>
          </div>

          {/* Instant Share Channels */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {/* WhatsApp Direct */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all hover:scale-[1.02]"
            >
              <MessageCircle size={15} />
              <span>{isEn ? 'WhatsApp' : 'واتساب'}</span>
            </a>

            {/* Telegram Direct */}
            <a 
              href={telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-sky-300 text-xs font-semibold transition-all hover:scale-[1.02]"
            >
              <Send size={14} />
              <span>{isEn ? 'Telegram' : 'تيليجرام'}</span>
            </a>

            {/* Twitter / X Direct */}
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600/50 text-slate-200 text-xs font-semibold transition-all hover:scale-[1.02]"
            >
              <span className="font-bold text-[13px]">𝕏</span>
              <span>{isEn ? 'Post' : 'منشور'}</span>
            </a>
          </div>

          {/* Action Buttons: Native Share & Copy */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                type="button"
                onClick={handleNativeShare}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-900/30 transition-all hover:scale-[1.01]"
              >
                <Share2 size={15} />
                <span>{isEn ? 'Open Device Share Sheet' : 'مشاركة عبر تطبيقات الهاتف (تويتر، إيميل، فيسبوك...)'}</span>
              </button>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopyFullText}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
              >
                {copiedAll ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>
                  {copiedAll 
                    ? (isEn ? 'Message Copied!' : 'تم نسخ الشرح والرابط!') 
                    : (isEn ? 'Copy Full Message' : 'نسخ الرسالة كاملة')}
                </span>
              </button>

              <button
                type="button"
                onClick={handleCopyLinkOnly}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 border border-slate-700 transition-colors"
              >
                {copiedLink ? <Check size={14} className="text-emerald-400" /> : <ExternalLink size={14} />}
                <span>
                  {copiedLink 
                    ? (isEn ? 'Link Copied!' : 'تم نسخ الرابط!') 
                    : (isEn ? 'Copy Link Only' : 'نسخ الرابط فقط')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer note */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck size={13} className="text-emerald-400" />
            {isEn ? 'Safe link with verified Open Graph tags' : 'رابط آمن معتمد بالمعايير الرسمية'}
          </span>
          <button 
            type="button" 
            onClick={onClose} 
            className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
          >
            {isEn ? 'Dismiss' : 'إغلاق'}
          </button>
        </div>
      </div>
    </div>
  );
};
