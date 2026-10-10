import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage, Lecture, StudentProfile } from '../types';
import { removeExternalLinksFromText, sanitizeLectureForStudents } from '../services/studentContentSanitizer';
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

  const t = getTranslations(profile.language);
  const isEn = profile.language === 'en';
  const studentLecture = sanitizeLectureForStudents(lecture);
  const lectureTitle = removeExternalLinksFromText(isEn ? studentLecture.titleEn : studentLecture.titleAr);

  const initialWelcomeText = isEn
    ? `Hello, ${profile.name}! 👋 I am your Socratic AI Tutor for "${lectureTitle}".\n\nRemember, my goal is to guide you with targeted questions and hints so you discover the solution yourself rather than receiving ready-made answers. What mathematical concept would you like to explore today?`
    : `مرحباً يا ${profile.name}! 👋 أنا معلمك السقراطي لمساعدتك في فهم "${lectureTitle}".\n\nتذكر أنني هنا لأوجهك بالأسئلة والتلميحات لتكتشف الحلول بنفسك لا لأعطيك حلولاً جاهزة. ما الذي تود استكشافه أو توضيحه في هذا الدرس؟`;

  const initialSuggestions = isEn
    ? [
        'How do I isolate the variable in one step?',
        'What are inverse operations and how do I apply them?',
        'Can you give me an extra example of the balance scale property?'
      ]
    : [
        'كيف أعزل المتغير بخطوة واحدة؟',
        'ما هي العمليات العكسية وكيف أستخدمها؟',
        'أريد مثالاً إضافياً على خاصية التوازن'
      ];

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
        suggestedFollowUps: isEn
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
    <div className="socratic-chat-drawer">
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
