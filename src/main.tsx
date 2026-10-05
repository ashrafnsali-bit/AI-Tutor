import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { reportStudentError } from './services/errorReportingService'

// Global Uncaught Error Telemetry Listener for automatic administrator alerts
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.message?.includes('ResizeObserver') || event.message?.includes('Script error.')) return;
    reportStudentError({
      errorType: 'UNHANDLED_EXCEPTION',
      errorMessage: event.message || 'Window Uncaught Error',
      errorStack: event.error?.stack || `${event.filename}:${event.lineno}:${event.colno}`
    }).catch(() => {});
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reasonMsg = event.reason?.message || String(event.reason || 'Unhandled Promise Rejection');
    if (reasonMsg.includes('ResizeObserver')) return;
    reportStudentError({
      errorType: 'UNHANDLED_PROMISE',
      errorMessage: reasonMsg,
      errorStack: event.reason?.stack
    }).catch(() => {});
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)


