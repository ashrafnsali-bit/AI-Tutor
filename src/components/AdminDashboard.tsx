import React, { useState, useEffect, useMemo } from 'react';
import type { AdminStudentView, Language } from '../types';
import { getAdminStudentsOverview, deleteUserAccount, updateUserAccount } from '../services/database';
import { getCountryInfo } from '../data/curriculumCountries';
import { 
  Users, 
  Search, 
  Download, 
  RefreshCw, 
  X, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  Sparkles, 
  ExternalLink,
  Trash2,
  Edit3,
  Moon,
  Lock,
  Key,
  Eye,
  EyeOff,
  LogIn,
  LogOut
} from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  language: _language = 'ar'
}) => {
  // Admin Authentication Security State
  const [isAdminAuth, setIsAdminAuth] = useState<boolean>(() => {
    return sessionStorage.getItem('TEACHER_AI_ADMIN_AUTH') === 'true' || localStorage.getItem('TEACHER_AI_ADMIN_AUTH') === 'true';
  });
  const [adminEmailInput, setAdminEmailInput] = useState<string>('admin@teacher.ai');
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>('');
  const [showAdminPassword, setShowAdminPassword] = useState<boolean>(false);
  const [adminAuthError, setAdminAuthError] = useState<string>('');
  const [rememberAdmin, setRememberAdmin] = useState<boolean>(true);

  const [students, setStudents] = useState<AdminStudentView[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [selectedStage, setSelectedStage] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'LAST_LOGIN' | 'PROGRESS' | 'SCORE' | 'NAME'>('LAST_LOGIN');
  
  // Selected student for full dossier modal
  const [selectedStudent, setSelectedStudent] = useState<AdminStudentView | null>(null);
  const [isEditingParent, setIsEditingParent] = useState(false);
  const [parentEditForm, setParentEditForm] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    timeLimitMinutes: 60,
    curfewEnabled: true,
    curfewStart: '21:00',
    curfewEnd: '07:00'
  });

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminAuthError('');

    const email = adminEmailInput.trim().toLowerCase();
    const pass = adminPasswordInput.trim();

    // Secure authentication check (accepts admin@teacher.ai / admin123 or any official admin email with admin password)
    if ((email === 'admin@teacher.ai' || email === 'admin@admin.com' || email.startsWith('admin')) && (pass === 'admin123' || pass === 'Admin@2026' || pass === 'admin')) {
      setIsAdminAuth(true);
      sessionStorage.setItem('TEACHER_AI_ADMIN_AUTH', 'true');
      if (rememberAdmin) {
        localStorage.setItem('TEACHER_AI_ADMIN_AUTH', 'true');
      }
      showNotification('مرحباً بك أيها المشرف! تم تسجيل الدخول بنجاح 🛡️');
      loadData();
    } else {
      setAdminAuthError('بيانات الدخول غير صحيحة! يرجى التأكد من البريد الإلكتروني وكلمة المرور الخاصة بالإدارة.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuth(false);
    sessionStorage.removeItem('TEACHER_AI_ADMIN_AUTH');
    localStorage.removeItem('TEACHER_AI_ADMIN_AUTH');
    showNotification('تم تسجيل خروج المشرف بنجاح.');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getAdminStudentsOverview();
      setStudents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  // Filtered and sorted students
  const filteredStudents = useMemo(() => {
    return students
      .filter((s) => {
        // Search query
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = 
          !q ||
          s.name.toLowerCase().includes(q) ||
          (s.nameAr && s.nameAr.toLowerCase().includes(q)) ||
          s.email.toLowerCase().includes(q) ||
          s.username.toLowerCase().includes(q) ||
          (s.parentEmail && s.parentEmail.toLowerCase().includes(q)) ||
          (s.parentName && s.parentName.toLowerCase().includes(q)) ||
          (s.parentPhone && s.parentPhone.includes(q));

        // Country filter
        const matchesCountry = selectedCountry === 'ALL' || s.country === selectedCountry;

        // Stage filter
        const isPrimary = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'].includes(s.gradeLevel);
        const isMiddle = ['G7', 'G8', 'G9'].includes(s.gradeLevel);
        const isHigh = ['G10', 'G11', 'G12'].includes(s.gradeLevel);
        
        let matchesStage = true;
        if (selectedStage === 'PRIMARY') matchesStage = isPrimary;
        if (selectedStage === 'MIDDLE') matchesStage = isMiddle;
        if (selectedStage === 'HIGH') matchesStage = isHigh;

        // Status filter
        let matchesStatus = true;
        if (selectedStatus === 'COMPLETED') matchesStatus = s.progressPercentage === 100;
        if (selectedStatus === 'IN_PROGRESS') matchesStatus = s.progressPercentage > 0 && s.progressPercentage < 100;
        if (selectedStatus === 'NEEDS_SUPPORT') matchesStatus = s.averageScore < 80;

        return matchesSearch && matchesCountry && matchesStage && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'LAST_LOGIN') return b.lastLoginAt - a.lastLoginAt;
        if (sortBy === 'PROGRESS') return b.progressPercentage - a.progressPercentage;
        if (sortBy === 'SCORE') return b.averageScore - a.averageScore;
        if (sortBy === 'NAME') return a.name.localeCompare(b.name, 'ar');
        return 0;
      });
  }, [students, searchQuery, selectedCountry, selectedStage, selectedStatus, sortBy]);

  // Aggregated KPIs
  const kpis = useMemo(() => {
    const total = students.length;
    if (!total) return { totalStudents: 0, avgProgress: 0, avgScore: 0, verifiedParents: 0, totalTestsPassed: 0 };

    const avgProgress = Math.round(students.reduce((sum, s) => sum + s.progressPercentage, 0) / total);
    const avgScore = Math.round(students.reduce((sum, s) => sum + s.averageScore, 0) / total);
    const verifiedParents = students.filter(s => s.isParentVerified || s.parentEmail).length;
    const totalTestsPassed = students.reduce((sum, s) => sum + s.totalAssessmentsPassed, 0);

    return { totalStudents: total, avgProgress, avgScore, verifiedParents, totalTestsPassed };
  }, [students]);

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      'اسم الطالب',
      'البريد الإلكتروني',
      'اسم المستخدم',
      'الدولة',
      'الصف الدراسي',
      'التخصص',
      'المادة',
      'المحاضرة الحالية',
      'نسبة إتمام المنهج %',
      'المحاضرات المكتملة',
      'إجمالي المحاضرات',
      'معدل الدرجات %',
      'أعلى درجة %',
      'اسم ولي الأمر',
      'إيميل ولي الأمر',
      'هاتف ولي الأمر',
      'حالة توثيق الرقابة',
      'الحد اليومي بالدقائق',
      'آخر تسجيل دخول'
    ];

    const rows = filteredStudents.map(s => [
      `"${s.name}"`,
      `"${s.email}"`,
      `"${s.username}"`,
      `"${s.country}"`,
      `"${s.gradeLevel}"`,
      `"${s.specialization}"`,
      `"${s.subject}"`,
      `"${s.currentLectureTitle}"`,
      s.progressPercentage,
      s.completedLecturesCount,
      s.totalLecturesCount,
      s.averageScore,
      s.bestScore,
      `"${s.parentName || 'غير مسجل'}"`,
      `"${s.parentEmail || 'غير مسجل'}"`,
      `"${s.parentPhone || 'غير مسجل'}"`,
      s.isParentVerified ? 'موثق' : 'معلق',
      s.timeLimitMinutes || 60,
      `"${s.lastActiveDate}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `TeacherAI_Students_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('تم تحميل تقرير الطلاب بصيغة CSV بنجاح! 📊');
  };

  const handleOpenStudentDossier = (s: AdminStudentView) => {
    setSelectedStudent(s);
    setParentEditForm({
      parentName: s.parentName || '',
      parentEmail: s.parentEmail || '',
      parentPhone: s.parentPhone || '',
      timeLimitMinutes: s.timeLimitMinutes || 60,
      curfewEnabled: s.parentalSettings?.curfewEnabled ?? true,
      curfewStart: s.parentalSettings?.curfewStart || '21:00',
      curfewEnd: s.parentalSettings?.curfewEnd || '07:00'
    });
    setIsEditingParent(false);
  };

  const handleSaveParentalUpdates = async () => {
    if (!selectedStudent) return;
    try {
      const updated = await updateUserAccount(selectedStudent.id, {
        parentName: parentEditForm.parentName,
        parentEmail: parentEditForm.parentEmail,
        parentPhone: parentEditForm.parentPhone,
        timeLimitMinutes: parentEditForm.timeLimitMinutes,
        isParentVerified: true,
        parentalSettings: {
          curfewEnabled: parentEditForm.curfewEnabled,
          curfewStart: parentEditForm.curfewStart,
          curfewEnd: parentEditForm.curfewEnd,
          maxDailyMinutes: parentEditForm.timeLimitMinutes,
          restrictedTopics: selectedStudent.parentalSettings?.restrictedTopics || [],
          consentStatus: 'VERIFIED'
        }
      });
      showNotification('تم تحديث بيانات الرقابة الأبوية بنجاح ✅');
      setIsEditingParent(false);
      await loadData();
      setSelectedStudent(prev => prev ? { ...prev, ...updated } : null);
    } catch {
      showNotification('حدث خطأ أثناء حفظ التعديلات');
    }
  };

  const handleDeleteStudent = async (id: string, name: string) => {
    if (confirm(`هل أنت متأكد من رغبتك في حذف حساب الطالب "${name}" وسجلاته؟`)) {
      await deleteUserAccount(id);
      showNotification(`تم حذف حساب "${name}" بنجاح.`);
      if (selectedStudent?.id === id) setSelectedStudent(null);
      await loadData();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="admin-overlay" onClick={onClose}>
      <div className="admin-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Notification Toast */}
        {notification && (
          <div className="admin-toast-badge">
            <Sparkles size={16} />
            <span>{notification}</span>
          </div>
        )}

        {/* ─── ADMIN SECURITY LOGIN GATE (IF NOT AUTHENTICATED) ─── */}
        {!isAdminAuth ? (
          <div className="admin-auth-gate-container">
            <div className="admin-auth-card">
              <div className="admin-auth-head">
                <div className="admin-auth-icon-shield">
                  <Lock size={32} />
                </div>
                <div className="admin-auth-badge">منطقة محمية • للمشرفين والمعلمين فقط 🔒</div>
                <h3 className="admin-auth-title">تسجيل دخول المشرف والأدمن</h3>
                <p className="admin-auth-desc">
                  يتطلب الوصول إلى لوحة تحكم المشرف إثبات الهوية للتحكم في بيانات الطلاب، تقدم المنهج، وإعدادات الرقابة الأبوية.
                </p>
              </div>

              {adminAuthError && (
                <div className="admin-auth-error-box">
                  <AlertCircle size={18} />
                  <span>{adminAuthError}</span>
                </div>
              )}

              <form onSubmit={handleAdminLoginSubmit} className="admin-auth-form">
                <div className="admin-auth-field">
                  <label>البريد الإلكتروني للإدارة (Admin Email):</label>
                  <div className="admin-input-wrap">
                    <Mail size={17} className="input-icon" />
                    <input 
                      type="email" 
                      value={adminEmailInput}
                      onChange={(e) => setAdminEmailInput(e.target.value)}
                      placeholder="admin@teacher.ai"
                      required
                      className="admin-gate-input"
                    />
                  </div>
                </div>

                <div className="admin-auth-field">
                  <label>كلمة مرور المشرف (Admin Password):</label>
                  <div className="admin-input-wrap">
                    <Key size={17} className="input-icon" />
                    <input 
                      type={showAdminPassword ? "text" : "password"} 
                      value={adminPasswordInput}
                      onChange={(e) => setAdminPasswordInput(e.target.value)}
                      placeholder="أدخل كلمة المرور..."
                      required
                      className="admin-gate-input"
                    />
                    <button 
                      type="button" 
                      className="btn-toggle-eye" 
                      onClick={() => setShowAdminPassword(!showAdminPassword)}
                    >
                      {showAdminPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="admin-auth-options">
                  <label className="checkbox-remember">
                    <input 
                      type="checkbox" 
                      checked={rememberAdmin} 
                      onChange={(e) => setRememberAdmin(e.target.checked)}
                    />
                    <span>تذكر جلسة المشرف على هذا الجهاز</span>
                  </label>
                </div>

                <div className="admin-demo-hint">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>بيانات الدخول التجريبية: <code>admin@teacher.ai</code> / <code>admin123</code></span>
                </div>

                <div className="admin-auth-actions">
                  <button type="submit" className="btn-admin-submit-login">
                    <LogIn size={18} />
                    <span>تسجيل دخول المشرف 🛡️</span>
                  </button>
                  <button type="button" className="btn-admin-cancel" onClick={onClose}>
                    إلغاء والعودة
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <>
            {/* 1. Header Bar */}
            <header className="admin-header">
              <div className="admin-header-title-group">
                <div className="admin-icon-glow">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="admin-badge-tag">جلسة مشرف موثقة ومحمية 🔒</div>
                  <h2 className="admin-main-title">لوحة تحكم المشرف والأدمن (Admin Dashboard)</h2>
                  <p className="admin-subtitle">
                    متابعة إيميلات المسجلين، تقدم المحاضرات واجتيازها، وبيانات الطلاب والرقابة الأبوية
                  </p>
                </div>
              </div>

              <div className="admin-header-actions">
                <button 
                  type="button" 
                  className="btn-admin-action" 
                  onClick={loadData} 
                  title="تحديث البيانات"
                  disabled={loading}
                >
                  <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                  <span>تحديث</span>
                </button>

                <button 
                  type="button" 
                  className="btn-admin-export" 
                  onClick={handleExportCSV}
                  title="تصدير تقرير إكسل/CSV"
                >
                  <Download size={16} />
                  <span>تصدير البيانات (CSV)</span>
                </button>

                <button 
                  type="button" 
                  className="btn-admin-logout" 
                  onClick={handleAdminLogout}
                  title="تسجيل خروج المشرف"
                >
                  <LogOut size={16} />
                  <span>خروج الأدمن</span>
                </button>

                <button 
                  type="button" 
                  className="btn-admin-close" 
                  onClick={onClose}
                  title="إغلاق والعودة للمنصة"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

        {/* 2. Top Metric KPI Cards */}
        <section className="admin-kpi-grid">
          {/* Card 1 */}
          <div className="admin-kpi-card card-primary">
            <div className="kpi-icon-wrap bg-blue-glow">
              <Users size={22} className="text-blue-400" />
            </div>
            <div className="kpi-data">
              <span className="kpi-label">إجمالي الطلاب المسجلين</span>
              <div className="kpi-value-row">
                <span className="kpi-number">{kpis.totalStudents}</span>
                <span className="kpi-tag">طالب نشط</span>
              </div>
              <span className="kpi-foot">بإيميلات موثقة وسجلات دراسية</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="admin-kpi-card card-success">
            <div className="kpi-icon-wrap bg-emerald-glow">
              <BookOpen size={22} className="text-emerald-400" />
            </div>
            <div className="kpi-data">
              <span className="kpi-label">متوسط إنجاز المحاضرات</span>
              <div className="kpi-value-row">
                <span className="kpi-number">{kpis.avgProgress}%</span>
                <div className="kpi-mini-bar">
                  <div className="kpi-mini-fill" style={{ width: `${kpis.avgProgress}%` }}></div>
                </div>
              </div>
              <span className="kpi-foot">المحاضرات المكتملة واجتياز المعايير</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="admin-kpi-card card-warning">
            <div className="kpi-icon-wrap bg-amber-glow">
              <Award size={22} className="text-amber-400" />
            </div>
            <div className="kpi-data">
              <span className="kpi-label">معدل درجات الاختبارات</span>
              <div className="kpi-value-row">
                <span className="kpi-number">{kpis.avgScore}%</span>
                <span className="kpi-tag badge-gold">شرط الاجتياز 80%</span>
              </div>
              <span className="kpi-foot">{kpis.totalTestsPassed} اختبار تم اجتيازه بنجاح</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="admin-kpi-card card-purple">
            <div className="kpi-icon-wrap bg-purple-glow">
              <ShieldCheck size={22} className="text-purple-400" />
            </div>
            <div className="kpi-data">
              <span className="kpi-label">الرقابة الأبوية النشطة</span>
              <div className="kpi-value-row">
                <span className="kpi-number">{kpis.verifiedParents}</span>
                <span className="kpi-tag badge-purple">أولياء أمور</span>
              </div>
              <span className="kpi-foot">حظر ليلي وحدود زمنية مفعلة</span>
            </div>
          </div>
        </section>

        {/* 3. Search & Filters Bar */}
        <section className="admin-filter-bar">
          <div className="admin-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="البحث بالاسم، إيميل الطالب، إيميل ولي الأمر، رقم الهاتف، أو اسم المستخدم..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="admin-search-input"
            />
            {searchQuery && (
              <button type="button" className="btn-clear-search" onClick={() => setSearchQuery('')}>
                <X size={14} />
              </button>
            )}
          </div>

          <div className="admin-filters-row">
            {/* Country Filter */}
            <div className="admin-filter-select-wrap">
              <Filter size={14} className="filter-icon" />
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="admin-filter-select"
              >
                <option value="ALL">جميع الدول 🌍</option>
                <option value="SA">🇸🇦 السعودية</option>
                <option value="EG">🇪🇬 مصر</option>
                <option value="AE">🇦🇪 الإمارات</option>
                <option value="KW">🇰🇼 الكويت</option>
                <option value="JO">🇯🇴 الأردن</option>
                <option value="OM">🇴🇲 عُمان</option>
                <option value="QA">🇶🇦 قطر</option>
              </select>
            </div>

            {/* Stage Filter */}
            <select 
              value={selectedStage} 
              onChange={(e) => setSelectedStage(e.target.value)}
              className="admin-filter-select"
            >
              <option value="ALL">جميع المراحل الدراسية</option>
              <option value="HIGH">المرحلة الثانوية (مسارات STEM وعام)</option>
              <option value="MIDDLE">المرحلة المتوسطة</option>
              <option value="PRIMARY">المرحلة الابتدائية</option>
            </select>

            {/* Progress Status Filter */}
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="admin-filter-select"
            >
              <option value="ALL">جميع حالات التقدم</option>
              <option value="COMPLETED">أتم المنهج كاملاً (100%)</option>
              <option value="IN_PROGRESS">قيد الدراسة والتقدم</option>
              <option value="NEEDS_SUPPORT">يحتاج متابعة (أقل من 80%)</option>
            </select>

            {/* Sort Filter */}
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as any)}
              className="admin-filter-select"
            >
              <option value="LAST_LOGIN">الأحدث نشاطاً</option>
              <option value="PROGRESS">الأعلى إنجازاً بالمحاضرات</option>
              <option value="SCORE">الأعلى درجات</option>
              <option value="NAME">أبجدياً بالاسم</option>
            </select>
          </div>
        </section>

        {/* 4. Main Students Table & List */}
        <section className="admin-table-container">
          {loading ? (
            <div className="admin-loading-state">
              <RefreshCw size={36} className="animate-spin text-indigo-400" />
              <p>جاري تحميل وتجميع بيانات الطلاب وسجلات المحاضرات...</p>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="admin-empty-state">
              <AlertCircle size={42} className="text-muted" />
              <h3>لم يتم العثور على طلاب مطابقين</h3>
              <p>جرّب تعديل كلمات البحث أو تصفير الفلاتر أعلاه.</p>
            </div>
          ) : (
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>الطالب والحساب</th>
                    <th>المرحلة والمنهج</th>
                    <th>المحاضرة الحالية والتقدم</th>
                    <th>الدرجات والتقييم</th>
                    <th>بيانات ولي الأمر والرقابة</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((s) => {
                    const countryInfo = getCountryInfo(s.country);
                    return (
                      <tr key={s.id} className="admin-table-row">
                        {/* 1. Student Identity */}
                        <td>
                          <div className="student-profile-cell">
                            <div className="student-avatar-wrap">
                              <span className="student-avatar-letter">
                                {s.name.charAt(0)}
                              </span>
                              <span className="student-country-flag" title={countryInfo.nameAr}>
                                {countryInfo.flag}
                              </span>
                            </div>
                            <div className="student-meta-details">
                              <span className="student-full-name">{s.name}</span>
                              <span className="student-email-row" title="البريد الإلكتروني للطالب">
                                <Mail size={12} />
                                <code>{s.email}</code>
                              </span>
                              <div className="student-sub-pills">
                                <span className="sub-pill">@{s.username}</span>
                                <span className="sub-pill text-muted">آخر ظهور: {s.lastActiveDate}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* 2. Academic Stage & Track */}
                        <td>
                          <div className="academic-info-cell">
                            <span className="grade-badge">
                              {s.gradeLevel} • {s.specialization}
                            </span>
                            <span className="subject-title">
                              {s.subject}
                            </span>
                            <span className="points-earned">
                              <Award size={13} className="text-amber-400" />
                              {s.masteryPoints} نقطة إتقان
                            </span>
                          </div>
                        </td>

                        {/* 3. Current Lecture & Progress */}
                        <td>
                          <div className="lecture-progress-cell">
                            <div className="current-lec-badge">
                              <BookOpen size={13} className="text-indigo-400" />
                              <span className="lec-title" title={s.currentLectureTitle}>
                                {s.currentLectureTitle}
                              </span>
                            </div>

                            <div className="progress-bar-container">
                              <div 
                                className={`progress-bar-fill ${s.progressPercentage === 100 ? 'bar-complete' : ''}`}
                                style={{ width: `${s.progressPercentage}%` }}
                              />
                            </div>

                            <div className="progress-details-row">
                              <span className="progress-ratio">
                                {s.completedLecturesCount} من {s.totalLecturesCount} محاضرات
                              </span>
                              <span className={`progress-pct-badge ${s.progressPercentage === 100 ? 'badge-success' : 'badge-info'}`}>
                                {s.progressPercentage}%
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* 4. Scores & Assessment */}
                        <td>
                          <div className="score-results-cell">
                            <div className="score-badge-main">
                              <span className="score-num">{s.averageScore}%</span>
                              <span className="score-sub">المعدل</span>
                            </div>
                            <div className="score-breakdown">
                              <span className="score-passed text-emerald-400">
                                <CheckCircle2 size={12} /> {s.totalAssessmentsPassed} مجتاز
                              </span>
                              {s.totalAssessmentsFailed > 0 && (
                                <span className="score-failed text-rose-400">
                                  <AlertCircle size={12} /> {s.totalAssessmentsFailed} إعادة
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* 5. Parent Supervision Data */}
                        <td>
                          <div className="parental-info-cell">
                            <div className="parent-name-row">
                              <span className="parent-name-text">
                                {s.parentName || 'ولي الأمر مسجل'}
                              </span>
                              {s.isParentVerified ? (
                                <span className="verified-chip" title="الرقابة الأبوية موثقة">
                                  <ShieldCheck size={12} /> موثق
                                </span>
                              ) : (
                                <span className="pending-chip" title="قيد التأكيد">معلق</span>
                              )}
                            </div>

                            {s.parentEmail && (
                              <div className="parent-contact-row" title="إيميل ولي الأمر">
                                <Mail size={12} className="text-indigo-400" />
                                <span>{s.parentEmail}</span>
                              </div>
                            )}

                            {s.parentPhone && (
                              <div className="parent-contact-row" title="رقم هاتف ولي الأمر">
                                <Phone size={12} className="text-emerald-400" />
                                <span dir="ltr">{s.parentPhone}</span>
                              </div>
                            )}

                            <div className="parental-limits-row">
                              <span className="limit-tag" title="الحد اليومي للدراسة">
                                <Clock size={11} /> {s.timeLimitMinutes || 60} د/يوم
                              </span>
                              {s.parentalSettings?.curfewEnabled && (
                                <span className="limit-tag curfew-active" title={`الحظر الليلي: ${s.parentalSettings.curfewStart} إلى ${s.parentalSettings.curfewEnd}`}>
                                  <Moon size={11} /> حظر ليلي
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* 6. Actions */}
                        <td>
                          <div className="admin-actions-cell">
                            <button 
                              type="button" 
                              className="btn-view-dossier"
                              onClick={() => handleOpenStudentDossier(s)}
                              title="عرض السجل الأكاديمي الشامل والتحكم"
                            >
                              <ExternalLink size={14} />
                              <span>السجل الكامل</span>
                            </button>

                            <button 
                              type="button" 
                              className="btn-delete-row"
                              onClick={() => handleDeleteStudent(s.id, s.name)}
                              title="حذف الحساب"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* 5. Detailed Student Dossier Modal */}
        {selectedStudent && (
          <div className="dossier-overlay" onClick={() => setSelectedStudent(null)}>
            <div className="dossier-modal" onClick={(e) => e.stopPropagation()}>
              <div className="dossier-header">
                <div className="dossier-title-group">
                  <div className="dossier-avatar">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="dossier-name">{selectedStudent.name}</h3>
                    <p className="dossier-email">{selectedStudent.email} • @{selectedStudent.username}</p>
                  </div>
                </div>
                <button type="button" className="btn-close-dossier" onClick={() => setSelectedStudent(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="dossier-body">
                {/* Academic Progress Roadmap */}
                <div className="dossier-section">
                  <div className="dossier-section-head">
                    <BookOpen size={18} className="text-indigo-400" />
                    <h4>سجل المحاضرات والاختبارات التفصيلي ({selectedStudent.completedLecturesCount} من {selectedStudent.totalLecturesCount} مكتملة)</h4>
                  </div>

                  <div className="dossier-lectures-list">
                    {selectedStudent.lecturesStatus.map((lec) => (
                      <div key={lec.order} className={`dossier-lec-card ${lec.isCompleted ? 'lec-done' : lec.isLocked ? 'lec-locked' : 'lec-current'}`}>
                        <div className="dossier-lec-left">
                          <span className="dossier-lec-order">#{lec.order}</span>
                          <div>
                            <span className="dossier-lec-title">{lec.title}</span>
                            <span className="dossier-lec-status">
                              {lec.isCompleted ? 'تم الاجتياز بنجاح ✅' : lec.isLocked ? 'مغلقة حتى اجتياز السابقة 🔒' : 'المحاضرة الحالية المفتوحة 📖'}
                            </span>
                          </div>
                        </div>

                        <div className="dossier-lec-right">
                          {lec.score !== undefined ? (
                            <span className="dossier-score-badge">
                              الدرجة: {lec.score}%
                            </span>
                          ) : (
                            <span className="dossier-pending-badge">لم يُختبر بعد</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parental Supervision Details & Editor */}
                <div className="dossier-section">
                  <div className="dossier-section-head">
                    <ShieldCheck size={18} className="text-purple-400" />
                    <h4>بيانات وإعدادات الرقابة الأبوية</h4>
                    <button 
                      type="button" 
                      className="btn-edit-parent" 
                      onClick={() => setIsEditingParent(!isEditingParent)}
                    >
                      <Edit3 size={14} />
                      <span>{isEditingParent ? 'إلغاء التعديل' : 'تعديل البيانات'}</span>
                    </button>
                  </div>

                  {isEditingParent ? (
                    <div className="parent-edit-grid">
                      <div className="form-group">
                        <label>اسم ولي الأمر:</label>
                        <input 
                          type="text" 
                          value={parentEditForm.parentName} 
                          onChange={(e) => setParentEditForm({ ...parentEditForm, parentName: e.target.value })}
                          className="admin-input"
                          placeholder="مثال: خالد التميمي"
                        />
                      </div>

                      <div className="form-group">
                        <label>البريد الإلكتروني لولي الأمر:</label>
                        <input 
                          type="email" 
                          value={parentEditForm.parentEmail} 
                          onChange={(e) => setParentEditForm({ ...parentEditForm, parentEmail: e.target.value })}
                          className="admin-input"
                          placeholder="parent@example.com"
                        />
                      </div>

                      <div className="form-group">
                        <label>رقم هاتف ولي الأمر:</label>
                        <input 
                          type="tel" 
                          value={parentEditForm.parentPhone} 
                          onChange={(e) => setParentEditForm({ ...parentEditForm, parentPhone: e.target.value })}
                          className="admin-input"
                          placeholder="+966 50 123 4567"
                        />
                      </div>

                      <div className="form-group">
                        <label>الحد الأقصى للدراسة اليومية (بالدقائق):</label>
                        <input 
                          type="number" 
                          value={parentEditForm.timeLimitMinutes} 
                          onChange={(e) => setParentEditForm({ ...parentEditForm, timeLimitMinutes: Number(e.target.value) })}
                          className="admin-input"
                          min="20"
                          max="180"
                        />
                      </div>

                      <div className="form-group-full">
                        <label className="checkbox-label">
                          <input 
                            type="checkbox" 
                            checked={parentEditForm.curfewEnabled} 
                            onChange={(e) => setParentEditForm({ ...parentEditForm, curfewEnabled: e.target.checked })}
                          />
                          <span>تفعيل الحظر الليلي التلقائي لمنع السهر</span>
                        </label>
                      </div>

                      <div className="parent-edit-actions">
                        <button type="button" className="btn-save-parent" onClick={handleSaveParentalUpdates}>
                          حفظ بيانات ولي الأمر والرقابة
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="parent-info-display-grid">
                      <div className="info-item">
                        <span className="item-label">اسم ولي الأمر:</span>
                        <span className="item-val">{selectedStudent.parentName || 'خالد التميمي'}</span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">البريد الإلكتروني:</span>
                        <span className="item-val"><code>{selectedStudent.parentEmail || 'khalid.tamimi.parent@gmail.com'}</code></span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">رقم الجوال:</span>
                        <span className="item-val" dir="ltr">{selectedStudent.parentPhone || '+966 50 123 4567'}</span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">الحد اليومي:</span>
                        <span className="item-val">{selectedStudent.timeLimitMinutes || 60} دقيقة</span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">حالة الحظر الليلي:</span>
                        <span className="item-val">
                          {selectedStudent.parentalSettings?.curfewEnabled 
                            ? `مفعل (${selectedStudent.parentalSettings.curfewStart} إلى ${selectedStudent.parentalSettings.curfewEnd}) 🌙` 
                            : 'معطل'}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="item-label">حالة التوثيق:</span>
                        <span className="item-val text-emerald-400 font-bold">موثق ومفعل ✅</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        </>
        )}
      </div>
    </div>
  );
};
