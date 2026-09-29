import type { Lecture, StudentProfile, Subject, UserAccount } from '../types';
import { INITIAL_STUDENT_PROFILE } from '../data/curriculumData';

const DB_NAME = 'TeacherAI_PlatformDB';
const DB_VERSION = 1;
const USERS_STORE = 'users';
const PROGRESS_STORE = 'progress';
const SESSION_STORE = 'session';

let dbInstance: IDBDatabase | null = null;

/**
 * Initialize IndexedDB Database
 */
export async function getDB(): Promise<IDBDatabase> {
  if (dbInstance) return dbInstance;

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // 1. Users Store
      if (!db.objectStoreNames.contains(USERS_STORE)) {
        const userStore = db.createObjectStore(USERS_STORE, { keyPath: 'id' });
        userStore.createIndex('username', 'username', { unique: true });
        userStore.createIndex('email', 'email', { unique: false });
      }

      // 2. Progress Store (userId + subject)
      if (!db.objectStoreNames.contains(PROGRESS_STORE)) {
        db.createObjectStore(PROGRESS_STORE, { keyPath: 'compositeKey' });
      }

      // 3. Active Session Store
      if (!db.objectStoreNames.contains(SESSION_STORE)) {
        db.createObjectStore(SESSION_STORE, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(dbInstance);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/**
 * Register a new Student Account in Database
 */
export async function registerUserAccount(data: {
  name: string;
  username: string;
  email: string;
  password?: string;
  age: number;
  gradeLevel: StudentProfile['gradeLevel'];
  specialization: StudentProfile['specialization'];
  subject: Subject;
  language: StudentProfile['language'];
  parentEmail?: string;
}): Promise<UserAccount> {
  const cleanUsername = data.username.trim().toLowerCase();
  const cleanEmail = data.email.trim().toLowerCase();

  // Create full UserAccount object
  const newUser: UserAccount = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    username: cleanUsername,
    name: data.name.trim(),
    nameAr: data.name.trim(),
    nameEn: data.name.trim(),
    email: cleanEmail,
    password: data.password || '',
    age: data.age,
    dateOfBirth: new Date(Date.now() - data.age * 365.25 * 24 * 3600 * 1000).toISOString().split('T')[0],
    specialization: data.specialization,
    subject: data.subject,
    gradeLevel: data.gradeLevel,
    language: data.language,
    parentEmail: data.parentEmail || '',
    isParentVerified: data.age < 13 ? !!data.parentEmail : true,
    timeLimitMinutes: 60,
    usedTodayMinutes: 0,
    masteryPoints: 100, // Welcome bonus points
    createdAt: Date.now(),
    lastLoginAt: Date.now()
  };

  try {
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction([USERS_STORE, SESSION_STORE], 'readwrite');
      const userStore = tx.objectStore(USERS_STORE);
      const sessionStore = tx.objectStore(SESSION_STORE);

      const addReq = userStore.add(newUser);
      addReq.onsuccess = () => {
        sessionStore.put({ key: 'activeUserId', userId: newUser.id, user: newUser });
        resolve();
      };
      addReq.onerror = () => {
        reject(new Error('اسم المستخدم مسجل مسبقاً، يرجى اختيار اسم مستخدم آخر'));
      };
    });
  } catch {
    // LocalStorage Fallback
    const existing = getLocalUsers();
    if (existing.some(u => u.username === cleanUsername)) {
      throw new Error('اسم المستخدم مسجل مسبقاً، يرجى اختيار اسم آخر');
    }
    existing.push(newUser);
    localStorage.setItem('TEACHER_AI_USERS_DB', JSON.stringify(existing));
    localStorage.setItem('TEACHER_AI_ACTIVE_USER', JSON.stringify(newUser));
  }

  // Also sync current profile to local storage for backward compatibility
  localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(newUser));
  return newUser;
}

/**
 * Login User by username or email
 */
export async function loginUserAccount(identifier: string, password?: string): Promise<UserAccount> {
  const cleanId = identifier.trim().toLowerCase();

  try {
    const db = await getDB();
    const allUsers = await new Promise<UserAccount[]>((resolve, reject) => {
      const tx = db.transaction(USERS_STORE, 'readonly');
      const store = tx.objectStore(USERS_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result as UserAccount[]);
      req.onerror = () => reject(req.error);
    });

    const user = allUsers.find(
      u => u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );

    if (!user) {
      throw new Error('اسم المستخدم أو البريد الإلكتروني غير مسجل');
    }

    if (password && user.password && user.password !== password) {
      throw new Error('كلمة المرور غير صحيحة');
    }

    // Update lastLoginAt
    user.lastLoginAt = Date.now();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction([USERS_STORE, SESSION_STORE], 'readwrite');
      tx.objectStore(USERS_STORE).put(user);
      tx.objectStore(SESSION_STORE).put({ key: 'activeUserId', userId: user.id, user });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(user));
    return user;
  } catch (err) {
    // LocalStorage Fallback
    const existing = getLocalUsers();
    const user = existing.find(
      u => u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId
    );
    if (!user) {
      throw new Error((err as Error)?.message || 'المستخدم غير موجود');
    }
    if (password && user.password && user.password !== password) {
      throw new Error('كلمة المرور غير صحيحة');
    }
    user.lastLoginAt = Date.now();
    localStorage.setItem('TEACHER_AI_ACTIVE_USER', JSON.stringify(user));
    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(user));
    return user;
  }
}

/**
 * Get active student account from Database
 */
export async function getActiveUserAccount(): Promise<UserAccount | null> {
  try {
    const db = await getDB();
    const sessionRecord = await new Promise<{ key: string; userId: string; user: UserAccount } | null>((resolve) => {
      const tx = db.transaction(SESSION_STORE, 'readonly');
      const req = tx.objectStore(SESSION_STORE).get('activeUserId');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });

    if (sessionRecord?.user) {
      return sessionRecord.user;
    }
  } catch {
    // Ignore and fallback to local
  }

  // Fallback to localStorage active user or student profile
  const storedActive = localStorage.getItem('TEACHER_AI_ACTIVE_USER');
  if (storedActive) {
    try {
      return JSON.parse(storedActive) as UserAccount;
    } catch {
      // Ignore
    }
  }

  return null;
}

/**
 * Update active student's profile in Database
 */
export async function updateUserAccount(id: string, updates: Partial<UserAccount>): Promise<UserAccount> {
  try {
    const db = await getDB();
    const updated = await new Promise<UserAccount>((resolve, reject) => {
      const tx = db.transaction([USERS_STORE, SESSION_STORE], 'readwrite');
      const userStore = tx.objectStore(USERS_STORE);
      const req = userStore.get(id);

      req.onsuccess = () => {
        const user = req.result as UserAccount;
        if (!user) {
          reject(new Error('User not found in DB'));
          return;
        }
        const merged: UserAccount = { ...user, ...updates };
        userStore.put(merged);
        tx.objectStore(SESSION_STORE).put({ key: 'activeUserId', userId: id, user: merged });
        resolve(merged);
      };
      req.onerror = () => reject(req.error);
    });

    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(updated));
    localStorage.setItem('TEACHER_AI_ACTIVE_USER', JSON.stringify(updated));
    return updated;
  } catch {
    // LocalStorage fallback
    const users = getLocalUsers();
    const idx = users.findIndex(u => u.id === id);
    let updated: UserAccount;
    if (idx !== -1) {
      updated = { ...users[idx], ...updates };
      users[idx] = updated;
      localStorage.setItem('TEACHER_AI_USERS_DB', JSON.stringify(users));
    } else {
      updated = { ...INITIAL_STUDENT_PROFILE, username: 'student', email: 'student@example.com', createdAt: Date.now(), lastLoginAt: Date.now(), ...updates };
    }
    localStorage.setItem('TEACHER_AI_STUDENT_PROFILE', JSON.stringify(updated));
    localStorage.setItem('TEACHER_AI_ACTIVE_USER', JSON.stringify(updated));
    return updated;
  }
}

/**
 * Logout / Clear Active Session
 */
export async function logoutUserAccount(): Promise<void> {
  try {
    const db = await getDB();
    const tx = db.transaction(SESSION_STORE, 'readwrite');
    tx.objectStore(SESSION_STORE).delete('activeUserId');
  } catch {
    // Ignore
  }
  localStorage.removeItem('TEACHER_AI_ACTIVE_USER');
}

/**
 * Save user's lecture progress in Database
 */
export async function saveUserSubjectLectures(userId: string, subject: Subject, lectures: Lecture[]): Promise<void> {
  const compositeKey = `${userId}_${subject}`;
  try {
    const db = await getDB();
    const tx = db.transaction(PROGRESS_STORE, 'readwrite');
    tx.objectStore(PROGRESS_STORE).put({
      compositeKey,
      userId,
      subject,
      lectures,
      updatedAt: Date.now()
    });
  } catch {
    // Ignore
  }
  // Also save in localStorage
  localStorage.setItem(`TEACHER_AI_LECTURES_${subject}`, JSON.stringify(lectures));
}

/**
 * Load user's lecture progress from Database
 */
export async function loadUserSubjectLectures(userId: string, subject: Subject): Promise<Lecture[] | null> {
  const compositeKey = `${userId}_${subject}`;
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction(PROGRESS_STORE, 'readonly');
      const req = tx.objectStore(PROGRESS_STORE).get(compositeKey);
      req.onsuccess = () => {
        if (req.result?.lectures) {
          resolve(req.result.lectures as Lecture[]);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

// Internal Helper for LocalStorage
function getLocalUsers(): UserAccount[] {
  const raw = localStorage.getItem('TEACHER_AI_USERS_DB');
  if (raw) {
    try {
      return JSON.parse(raw) as UserAccount[];
    } catch {
      return [];
    }
  }
  return [];
}
