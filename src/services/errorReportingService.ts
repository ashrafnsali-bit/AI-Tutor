/**
 * Automated Student Error Reporting & Real-Time Email Dispatch Service
 * Automatically notifies the administrator via email whenever any student encounters an error.
 * 
 * Target Admin Email: ashraf.nsali@gmail.com
 */

import type { StudentProfile } from '../types';

export const DEFAULT_ADMIN_EMAIL = 'ashraf.nsali@gmail.com';

export interface StudentErrorReportParams {
  errorType: 'UI_RENDER_CRASH' | 'UNHANDLED_EXCEPTION' | 'UNHANDLED_PROMISE' | 'NETWORK_ERROR' | 'AI_GENERATION_ERROR';
  errorMessage: string;
  errorStack?: string;
  componentStack?: string;
  profile?: Partial<StudentProfile>;
  currentLectureId?: string;
  currentLectureTitle?: string;
}

// Anti-spam debouncing cache to avoid flooding the inbox if an error repeats in a render loop
const reportedErrorsCache = new Set<string>();

/**
 * Retrieve current student profile and learning context from storage
 */
export function getActiveStudentContext(): Partial<StudentProfile> & { lastLectureId?: string } {
  if (typeof window === 'undefined') return {};
  try {
    const rawUser = localStorage.getItem('TEACHER_AI_ACTIVE_USER');
    if (rawUser) {
      const u = JSON.parse(rawUser);
      return { ...u, lastLectureId: localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID') || '' };
    }
    const rawProfile = localStorage.getItem('TEACHER_AI_STUDENT_PROFILE');
    if (rawProfile) {
      const p = JSON.parse(rawProfile);
      return { ...p, lastLectureId: localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID') || '' };
    }
  } catch {
    // fallback
  }
  return { lastLectureId: (typeof localStorage !== 'undefined' && localStorage.getItem('TEACHER_AI_LAST_LECTURE_ID')) || '' };
}

/**
 * Gets configured admin email address
 */
export function getAdminNotificationEmail(): string {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('TEACHER_AI_ADMIN_EMAIL') || DEFAULT_ADMIN_EMAIL;
  }
  return DEFAULT_ADMIN_EMAIL;
}

/**
 * Persists an incident log locally so it can be reviewed in the Admin Dashboard
 */
function logIncidentToStorage(incident: any): void {
  try {
    if (typeof localStorage === 'undefined') return;
    const STORAGE_KEY = 'TEACHER_AI_STUDENT_ERROR_LOGS';
    const raw = localStorage.getItem(STORAGE_KEY);
    const logs = raw ? JSON.parse(raw) : [];
    logs.unshift(incident);
    // Keep last 50 error incidents
    if (logs.length > 50) logs.length = 50;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  } catch {
    // ignore
  }
}

/**
 * Automatically dispatches an email to the admin with the student's data and error details
 */
export async function reportStudentError(params: StudentErrorReportParams): Promise<boolean> {
  const context = { ...getActiveStudentContext(), ...(params.profile || {}) };
  const adminEmail = getAdminNotificationEmail();

  // Deduplicate errors within the current browser session
  const errorKey = `${params.errorType}_${params.errorMessage}_${context.id || 'anon'}`;
  if (reportedErrorsCache.has(errorKey)) {
    return false;
  }
  reportedErrorsCache.add(errorKey);

  const timestampIso = new Date().toISOString();
  const timestampLocal = new Date().toLocaleString('ar-SA', { timeZoneName: 'short' });
  const studentName = context.name || context.nameAr || 'طالب غير مسجل / زائر';
  const studentEmail = context.email || 'غير متوفر';
  const studentUsername = context.username || context.id || 'غير محدد';
  const studentCountry = context.country || 'غير محدد';
  const studentGrade = context.gradeLevel || 'غير محدد';
  const studentSubject = context.subject || 'غير محدد';
  const studentEduType = context.educationType || 'عام (حكومي)';
  const lectureId = params.currentLectureId || context.lastLectureId || 'غير محدد';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';

  const incidentPayload = {
    id: `err-${Date.now()}`,
    timestampIso,
    timestampLocal,
    student: {
      name: studentName,
      email: studentEmail,
      username: studentUsername,
      id: context.id || 'unknown',
      country: studentCountry,
      gradeLevel: studentGrade,
      subject: studentSubject,
      educationType: studentEduType,
      currentLectureId: lectureId,
      currentLectureTitle: params.currentLectureTitle || ''
    },
    error: {
      type: params.errorType,
      message: params.errorMessage,
      stack: params.errorStack || 'No stack trace available',
      componentStack: params.componentStack || ''
    },
    environment: {
      url: currentUrl,
      userAgent
    }
  };

  // 1. Record incident in local storage for Admin Dashboard
  logIncidentToStorage(incidentPayload);

  // 2. Prepare Formatted Email Subject and Message Body
  const emailSubject = `🚨 [تنبيه منصة المعلم الذكي] خطأ يواجه الطالب (${studentName}) - ${params.errorType}`;

  const emailTextBody = `
═════════════════════════════════════════════════════════════════════
🚨 تقرير عاجل: خطأ تقني يواجه طالباً في منصة المعلم الذكي (AI Tutor)
═════════════════════════════════════════════════════════════════════

👤 بيانات الطالب:
---------------------------------------------------------------------
• الاسم: ${studentName}
• اسم المستخدم / المعرف: ${studentUsername}
• البريد الإلكتروني: ${studentEmail}
• الدولة: ${studentCountry}
• الصف الدراسي: ${studentGrade}
• المادة: ${studentSubject}
• نوع التعليم: ${studentEduType}
• المحاضرة الجاري دراستها: ${lectureId}

⚠️ تفاصيل ونوع الخطأ:
---------------------------------------------------------------------
• نوع الخطأ: ${params.errorType}
• رسالة الخطأ: ${params.errorMessage}
• التوقيت: ${timestampLocal} (${timestampIso})
• رابط الصفحة: ${currentUrl}
• المتصفح والجهاز: ${userAgent}

📋 مسار الخطأ البرمجي (Stack Trace):
---------------------------------------------------------------------
${params.errorStack || 'غير متوفر'}

${params.componentStack ? `🧩 شجرة المكونات (Component Stack):\n---------------------------------------------------------------------\n${params.componentStack}\n` : ''}

═════════════════════════════════════════════════════════════════════
تم الإرسال تلقائياً وفوراً من نظام المراقبة الذاتي لمنصة المعلم الذكي
═════════════════════════════════════════════════════════════════════
  `.trim();

  // 3. Dispatch Multi-Channel Automated Email Delivery
  let dispatched = false;

  // Channel A: FormSubmit AJAX Endpoint (Sends direct email to adminEmail)
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: emailSubject,
        _replyto: studentEmail !== 'غير متوفر' ? studentEmail : adminEmail,
        _template: 'table',
        _captcha: 'false',
        'اسم الطالب': studentName,
        'بريد الطالب': studentEmail,
        'الدولة والصف': `${studentCountry} - ${studentGrade}`,
        'المادة والمحاضرة': `${studentSubject} - ${lectureId}`,
        'نوع الخطأ': params.errorType,
        'رسالة الخطأ': params.errorMessage,
        'التوقيت': timestampLocal,
        'رابط المنصة': currentUrl,
        'تفاصيل كاملة': emailTextBody
      })
    });
    if (res.ok) {
      dispatched = true;
    }
  } catch (err) {
    console.warn('FormSubmit automated email delivery attempt:', err);
  }

  // Channel B: Backup Direct Cloud Telemetry with Email Header (ntfy.sh)
  try {
    await fetch('https://ntfy.sh/teacher_ai_error_alerts_v1', {
      method: 'POST',
      headers: {
        'Title': `🚨 خطأ طالب: ${studentName} (${params.errorType})`,
        'Priority': 'urgent',
        'Tags': 'warning,rotating_light,school',
        'Email': adminEmail,
        'Content-Type': 'text/plain; charset=utf-8'
      },
      body: emailTextBody
    });
    dispatched = true;
  } catch (err) {
    console.warn('ntfy telemetry email delivery attempt:', err);
  }

  return dispatched;
}
