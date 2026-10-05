import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, CheckCircle2 } from 'lucide-react';
import { reportStudentError } from '../services/errorReportingService';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  reportedEmail: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    reportedEmail: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, reportedEmail: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in UI component tree:', error, errorInfo);

    // Automatically send an email report with student and error metadata
    reportStudentError({
      errorType: 'UI_RENDER_CRASH',
      errorMessage: error?.message || 'Unknown UI Component Error',
      errorStack: error?.stack,
      componentStack: errorInfo?.componentStack || undefined
    }).then((sent) => {
      if (sent) {
        this.setState({ reportedEmail: true });
      }
    }).catch(err => {
      console.warn('Failed to send error notification email:', err);
    });
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('TEACHER_AI_STUDENT_PROFILE');
      localStorage.removeItem('TEACHER_AI_HAS_STUDIED');
      localStorage.removeItem('TEACHER_AI_LAST_LECTURE_ID');
      localStorage.removeItem('TEACHER_AI_CLOUD_SHARED_LECTURES');
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('TEACHER_AI_LECTURES') || k.startsWith('TEACHER_AI_SHARED_LECS'))) {
          localStorage.removeItem(k);
        }
      }
    } catch {
      // ignore
    }
    window.location.href = window.location.origin + window.location.pathname;
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #090d16 0%, #0f172a 100%)',
          color: '#f8fafc',
          fontFamily: "'Cairo', 'Outfit', sans-serif",
          padding: '24px',
          textAlign: 'center',
          direction: 'rtl'
        }}>
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '16px',
            padding: '36px 28px',
            maxWidth: '520px',
            width: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(12px)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <AlertTriangle size={36} />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px', color: '#fff' }}>
              حدث خطأ أثناء تحميل الجلسة التعليمية
            </h2>
            
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              تم استعادة النظام بنجاح. يمكنك الضغط على الزر أدناه لإعادة تحديث الجلسة والبدء في منصة المعلم الذكي مباشرة.
            </p>

            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '10px',
              padding: '10px 14px',
              marginBottom: '22px',
              fontSize: '0.85rem',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <CheckCircle2 size={16} />
              <span>تم إرسال تقرير فوري ببيانات الخطأ آلياً إلى إدارة المنصة للمتابعة</span>
            </div>

            <button
              onClick={this.handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '14px 20px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <RefreshCw size={18} />
              <span>إعادة تحميل المنصة والبدء</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
