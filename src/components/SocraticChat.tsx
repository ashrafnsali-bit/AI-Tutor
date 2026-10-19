import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage, Lecture, StudentProfile } from '../types';
import { removeExternalLinksFromText, sanitizeLectureForStudents } from '../services/studentContentSanitizer';
import { isForeignLanguageSubject } from '../data/foreignLanguageLessonLocalization';
import { askGeminiTutor } from '../services/geminiService';
import { getTranslations } from '../i18n/translations';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  HelpCircle, 
  Key, 
  Lightbulb
} from 'lucide-react';

interface SocraticChatProps {
  isOpen: boolean;
  lecture: Lecture;
  profile: StudentProfile;
  apiKey: string;
  onClose: () => void;
  onOpenApiKey: () => void;
}

export const SocraticChat: React.FC<SocraticChatProps> = ({
  isOpen,
  lecture,
  profile,
  apiKey,
  onClose,
  onOpenApiKey
}) => {
  if (!isOpen) return null;

  const effectiveEduType = lecture.educationType || profile.educationType;
  const isForeignLanguage = isForeignLanguageSubject(lecture.subject || profile.subject, effectiveEduType);
  const isEn = profile.language === 'en';
  const isLanguagesTrack = effectiveEduType === 'INTERNATIONAL';
  const isTargetLang = isEn || isForeignLanguage || isLanguagesTrack;
  const t = getTranslations(isTargetLang ? 'en' : profile.language);
  const studentLecture = sanitizeLectureForStudents(lecture);
  const lectureTitle = removeExternalLinksFromText((isTargetLang ? studentLecture.titleEn : studentLecture.titleAr) || studentLecture.titleEn || studentLecture.titleAr || '');

  let initialWelcomeText = `مرحباً يا ${profile.name}! 👋 أنا معلمك السقراطي لمساعدتك في فهم "${lectureTitle}".\n\nتذكر أنني هنا لأوجهك بالأسئلة والتلميحات لتكتشف الحلول بنفسك لا لأعطيك حلولاً جاهزة. ما الذي تود استكشافه أو توضيحه في هذا الدرس؟`;
  let initialSuggestions = [
    'كيف أعزل المتغير بخطوة واحدة؟',
    'ما هي العمليات العكسية وكيف أستخدمها؟',
    'أريد مثالاً إضافياً على خاصية التوازن'
  ];

  if (profile.subject === 'FRENCH') {
    initialWelcomeText = `Bonjour, ${profile.name} ! 👋 Je suis votre tuteur IA socratique pour "${lectureTitle}".\n\nMon rôle est de vous guider avec des questions et des indices afin que vous découvriez les réponses par vous-même. Que souhaitez-vous explorer aujourd'hui ?`;
    initialSuggestions = [
      'Pouvez-vous me donner un exemple avec ces mots ?',
      'Comment utiliser cette règle dans une phrase ?',
      'Pouvez-vous expliquer le point principal de cette leçon ?'
    ];
  } else if (profile.subject === 'GERMAN') {
    initialWelcomeText = `Hallo, ${profile.name}! 👋 Ich bin dein sokratischer KI-Tutor für "${lectureTitle}".\n\nMein Ziel ist es, dich mit gezielten Hinweisen anzuleiten, damit du die Lösung selbst findest. Was möchtest du heute üben?`;
    initialSuggestions = [
      'Kannst du mir ein Beispiel für diesen Satz geben?',
      'Wie wende ich diese Grammatikregel an?',
      'Kannst du die Hauptidee dieser Lektion erklären?'
    ];
  } else if (profile.subject === 'ITALIAN') {
    initialWelcomeText = `Ciao, ${profile.name}! 👋 Sono il tuo tutor IA socratico per "${lectureTitle}".\n\nIl mio obiettivo è guidarti passo dopo passo a scoprire le risposte. Di cosa vorresti parlare oggi?`;
    initialSuggestions = [
      'Puoi farmi un esempio con questi vocaboli?',
      'Come si usa questa regola in una frase?',
      'Puoi spiegare il concetto principale di questa lezione?'
    ];
  } else if (isTargetLang) {
    initialWelcomeText = `Hello, ${profile.name}! 👋 I am your Socratic AI Tutor for "${lectureTitle}".\n\nRemember, my goal is to guide you with targeted questions and hints so you discover the solution yourself rather than receiving ready-made answers. What concept would you like to explore today?`;
    initialSuggestions = [
      'Can you give me an example with these words?',
      'How can I form a sentence using this rule?',
      'Can you explain the main idea of this lesson?'
    ];
  }

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      text: initialWelcomeText,
      timestamp: isEn ? 'Just now' : 'الآن',
      scaffoldingType: 'encouragement',
      suggestedFollowUps: initialSuggestions
    }
  ]);

  // If language changes, reset welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'msg-welcome',
        role: 'assistant',
        text: initialWelcomeText,
        timestamp: isEn ? 'Just now' : 'الآن',
        scaffoldingType: 'encouragement',
        suggestedFollowUps: initialSuggestions
      }
    ]);
  }, [profile.language, lecture.id]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputQuery).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString(isEn ? 'en-US' : 'ar-SA', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    try {
      const response = await askGeminiTutor(studentLecture, text, messages, profile, apiKey);

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString(isEn ? 'en-US' : 'ar-SA', { hour: '2-digit', minute: '2-digit' }),
        scaffoldingType: response.scaffoldingType,
        suggestedFollowUps: isTargetLang
          ? [
              'What is the next step in this solution?',
              'Can you test my understanding with a question?',
              'Give me a simpler hint please'
            ]
          : [
              'ما الخطوة التالية في الحل؟',
              'هل يمكنك اختبار فهمي بسؤال؟',
              'أريد تلميحاً أبسط'
            ]
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="socratic-chat-drawer" dir={isTargetLang ? 'ltr' : 'rtl'}>
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-title-group">
          <div className="chat-bot-icon">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="chat-title">{t.tutorTitle}</h3>
            <span className="chat-subtitle">{t.tutorSubtitlePrefix}{lectureTitle}</span>
          </div>
        </div>

        <div className="chat-header-actions">
          {!apiKey && (
            <button 
              type="button" 
              className="btn-api-hint" 
              onClick={onOpenApiKey}
              title={t.apiKeySimulationTip}
            >
              <Key size={14} />
              <span>{t.simulationModeTag}</span>
            </button>
          )}
          <button type="button" className="btn-close-chat" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Socratic Mission Banner */}
      <div className="socratic-rule-banner">
        <Lightbulb size={16} className="rule-icon" />
        <span>{t.socraticMissionRule}</span>
      </div>

      {/* Messages List */}
      <div className="chat-messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message-row ${msg.role === 'user' ? 'msg-user-row' : 'msg-ai-row'}`}>
            <div className="msg-avatar">
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className="msg-bubble-wrapper">
              <div className="msg-bubble">
                <p className="msg-text">{msg.text}</p>
              </div>
              <span className="msg-time">{msg.timestamp}</span>

              {/* Follow-up suggestions */}
              {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                <div className="suggested-replies-list">
                  {msg.suggestedFollowUps.map((reply, rIdx) => (
                    <button
                      key={rIdx}
                      type="button"
                      className="btn-suggested-reply"
                      onClick={() => handleSendMessage(reply)}
                    >
                      <HelpCircle size={13} />
                      <span>{reply}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message-row msg-ai-row">
            <div className="msg-avatar">
              <Bot size={16} />
            </div>
            <div className="msg-bubble-wrapper">
              <div className="msg-bubble typing-bubble">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="chat-input-bar">
        <input
          type="text"
          className="chat-input"
          placeholder={t.chatPlaceholder}
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          type="button"
          className="btn-chat-send"
          disabled={!inputQuery.trim() || isTyping}
          onClick={() => handleSendMessage()}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
