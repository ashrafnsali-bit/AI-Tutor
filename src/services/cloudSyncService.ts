/**
 * Global Real-Time Cloud Synchronization & Presence Engine for TeacherAI
 * Connects all students and teachers across different devices, phones, and networks worldwide.
 * 
 * Architecture:
 * 1. Ultra-Low-Latency Multi-Device Real-Time Pub/Sub via SSE (Server-Sent Events)
 * 2. Dedicated Channels:
 *    - Presence Channel: teacher_ai_presence_stream_v2 (Heartbeats & Live Activities)
 *    - Data Channel: teacher_ai_users_sync_v2 (User Registrations, Profiles, & Grades)
 * 3. 24-Hour Network History Cache + Permanent Local Storage Persistence
 * 4. Automatic Heartbeat Pruning & State Transitions
 */

import type { UserAccount, Lecture, Subject, EducationTrack, EducationType } from '../types';
import type { GradeRecord } from './database';
import type { ActiveStudentPresence } from './presenceService';

const TOPIC_PRESENCE = 'teacher_ai_presence_stream_v2';
const TOPIC_USERS = 'teacher_ai_users_sync_v2';

const CLOUD_SSE_URL = `https://ntfy.sh/${TOPIC_PRESENCE},${TOPIC_USERS}/sse`;
const CLOUD_PRESENCE_POST_URL = `https://ntfy.sh/${TOPIC_PRESENCE}`;
const CLOUD_USERS_POST_URL = `https://ntfy.sh/${TOPIC_USERS}`;
const CLOUD_USERS_HISTORY_URL = `https://ntfy.sh/${TOPIC_USERS}/json?poll=1&since=24h`;

const CLOUD_STUDENTS_CACHE_KEY = 'TEACHER_AI_CLOUD_STUDENTS_CACHE';
const CLOUD_GRADES_CACHE_KEY = 'TEACHER_AI_CLOUD_GRADES_CACHE';
const CLOUD_LECTURES_CACHE_KEY = 'TEACHER_AI_CLOUD_SHARED_LECTURES';
const CLOUD_PRESENCE_CACHE_KEY = 'TEACHER_AI_CLOUD_PRESENCE_REGISTRY';
const HEARTBEAT_EXPIRY_MS = 25000; // 25 seconds timeout for live presence

export type CloudSyncEvent =
  | { type: 'HEARTBEAT'; payload: ActiveStudentPresence }
  | { type: 'STUDENT_LEFT'; userId: string }
  | { type: 'USER_REGISTERED'; payload: UserAccount }
  | { type: 'GRADE_SAVED'; payload: GradeRecord }
  | { type: 'LECTURE_GENERATED'; payload: Lecture };

// In-memory active presence registry from all cloud nodes
const cloudPresenceRegistry: Record<string, ActiveStudentPresence> = {};
const presenceListeners: Array<(active: ActiveStudentPresence[]) => void> = [];
const userRegisteredListeners: Array<(user: UserAccount) => void> = [];
const lectureGeneratedListeners: Array<(lecture: Lecture) => void> = [];

let sseConnection: EventSource | null = null;
let isInitialized = false;
let lastHeartbeatBroadcast = 0;

/**
 * Initialize Cloud Synchronization (Connects to Real-Time SSE stream across devices)
 */
export function initCloudSync(): void {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  // Restore presence from local storage cache
  try {
    const cached = localStorage.getItem(CLOUD_PRESENCE_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      Object.assign(cloudPresenceRegistry, parsed);
    }
  } catch { /* ignore */ }

  // Initial pull of registered students from Cloud History
  pullCloudData().catch((err) => console.warn('Initial cloud data pull error:', err));

  // Connect to Real-Time Live Server-Sent Events stream
  connectSSE();

  // Periodic prune of inactive heartbeats every 4 seconds
  setInterval(() => {
    pruneExpiredPresence();
  }, 4000);

  // Background refresh of user history every 60 seconds (lightweight, non-intrusive)
  setInterval(() => {
    pullCloudData().catch(() => {});
  }, 60000);
}

/**
 * Connect to SSE for zero-latency live updates across different phones/computers
 */
function connectSSE(): void {
  if (typeof window === 'undefined' || typeof EventSource === 'undefined') return;

  try {
    if (sseConnection) {
      sseConnection.close();
    }

    sseConnection = new EventSource(CLOUD_SSE_URL);

    sseConnection.onmessage = (event) => {
      try {
        if (!event.data) return;
        const ntfyEnvelope = JSON.parse(event.data);
        if (!ntfyEnvelope || !ntfyEnvelope.message) return;

        const eventData: CloudSyncEvent = JSON.parse(ntfyEnvelope.message);
        handleCloudEvent(eventData);
      } catch {
        // Not a JSON message or parse error
      }
    };

    sseConnection.onerror = () => {
      // Reconnect automatically after delay
      if (sseConnection) {
        sseConnection.close();
        sseConnection = null;
      }
      setTimeout(connectSSE, 4000);
    };
  } catch (err) {
    console.warn('Failed to start SSE connection:', err);
  }
}

/**
 * Process incoming real-time cloud events from any student or admin device
 */
function handleCloudEvent(event: CloudSyncEvent): void {
  const now = Date.now();

  switch (event.type) {
    case 'HEARTBEAT': {
      const presence = event.payload;
      if (presence && presence.userId) {
        cloudPresenceRegistry[presence.userId] = {
          ...presence,
          lastPing: now
        };
        savePresenceCache();
        notifyPresenceSubscribers();
      }
      break;
    }

    case 'STUDENT_LEFT': {
      if (event.userId && cloudPresenceRegistry[event.userId]) {
        delete cloudPresenceRegistry[event.userId];
        savePresenceCache();
        notifyPresenceSubscribers();
      }
      break;
    }

    case 'USER_REGISTERED': {
      const user = event.payload;
      if (user && user.id) {
        cacheCloudUser(user);
        userRegisteredListeners.forEach(fn => {
          try { fn(user); } catch (e) { console.error(e); }
        });
        notifyPresenceSubscribers();
      }
      break;
    }

    case 'GRADE_SAVED': {
      if (event.payload && event.payload.id) {
        cacheCloudGrade(event.payload);
      }
      break;
    }

    case 'LECTURE_GENERATED': {
      if (event.payload && event.payload.id) {
        cacheCloudLecture(event.payload);
        lectureGeneratedListeners.forEach(fn => {
          try { fn(event.payload); } catch (e) { console.error(e); }
        });
      }
      break;
    }
  }
}

/**
 * Remove students who haven't pinged in over 25 seconds
 */
function pruneExpiredPresence(): void {
  const now = Date.now();
  let changed = false;

  Object.entries(cloudPresenceRegistry).forEach(([userId, item]) => {
    if (!item || (now - item.lastPing) > HEARTBEAT_EXPIRY_MS) {
      delete cloudPresenceRegistry[userId];
      changed = true;
    }
  });

  if (changed) {
    savePresenceCache();
    notifyPresenceSubscribers();
  }
}

function savePresenceCache(): void {
  try {
    localStorage.setItem(CLOUD_PRESENCE_CACHE_KEY, JSON.stringify(cloudPresenceRegistry));
  } catch { /* ignore */ }
}

function notifyPresenceSubscribers(): void {
  const activeList = getCloudActiveStudents();
  presenceListeners.forEach(fn => {
    try { fn(activeList); } catch (e) { console.error(e); }
  });
}

/**
 * Returns all currently online students across all devices worldwide
 */
export function getCloudActiveStudents(): ActiveStudentPresence[] {
  const now = Date.now();
  const list: ActiveStudentPresence[] = [];

  Object.values(cloudPresenceRegistry).forEach(item => {
    if (item && item.userId && (now - item.lastPing) <= HEARTBEAT_EXPIRY_MS && item.status !== 'OFFLINE') {
      list.push(item);
    }
  });

  return list;
}

/**
 * Check if a specific student is online right now on ANY device
 */
export function getCloudStudentPresence(userId: string): ActiveStudentPresence | null {
  const active = getCloudActiveStudents();
  return active.find(s => s.userId === userId) || null;
}

/**
 * Broadcast Student Heartbeat to the Cloud (called every 5-6 seconds by active students)
 */
export async function broadcastCloudHeartbeat(presence: ActiveStudentPresence): Promise<void> {
  const now = Date.now();
  cloudPresenceRegistry[presence.userId] = {
    ...presence,
    lastPing: now
  };
  savePresenceCache();
  notifyPresenceSubscribers();

  // Throttle HTTP broadcast to once every 3.5 seconds per client
  if (now - lastHeartbeatBroadcast < 3500) return;
  lastHeartbeatBroadcast = now;

  try {
    await fetch(CLOUD_PRESENCE_POST_URL, {
      method: 'POST',
      body: JSON.stringify({
        type: 'HEARTBEAT',
        payload: {
          ...presence,
          lastPing: now
        }
      } as CloudSyncEvent)
    });
  } catch (err) {
    // Non-blocking network error
  }
}

/**
 * Broadcast Student Offline status when closing window/tab
 */
export function broadcastCloudStudentLeft(userId: string): void {
  if (!userId) return;
  delete cloudPresenceRegistry[userId];
  savePresenceCache();
  notifyPresenceSubscribers();

  try {
    const data = JSON.stringify({
      type: 'STUDENT_LEFT',
      userId
    } as CloudSyncEvent);

    if (navigator.sendBeacon) {
      navigator.sendBeacon(CLOUD_PRESENCE_POST_URL, data);
    } else {
      fetch(CLOUD_PRESENCE_POST_URL, {
        method: 'POST',
        body: data,
        keepalive: true
      }).catch(() => {});
    }
  } catch { /* ignore */ }
}

/**
 * Sync a newly registered or updated student account to the Cloud Network
 * and broadcast to all listening Admin Dashboards instantly (< 200ms)
 */
export async function syncUserAccountToCloud(user: UserAccount): Promise<void> {
  if (!user || !user.id) return;

  // 1. Cache locally first
  cacheCloudUser(user);

  // 2. Broadcast live event via ntfy.sh for instant cross-device appearance
  try {
    await fetch(CLOUD_USERS_POST_URL, {
      method: 'POST',
      body: JSON.stringify({
        type: 'USER_REGISTERED',
        payload: user
      } as CloudSyncEvent)
    });
  } catch (err) {
    console.warn('Realtime cloud user sync warning:', err);
  }
}

/**
 * Sync an assessment grade record to the Cloud Network
 */
export async function syncGradeToCloud(grade: GradeRecord): Promise<void> {
  if (!grade || !grade.id) return;

  // 1. Cache locally first
  cacheCloudGrade(grade);

  // 2. Broadcast live event
  try {
    fetch(CLOUD_USERS_POST_URL, {
      method: 'POST',
      body: JSON.stringify({
        type: 'GRADE_SAVED',
        payload: grade
      } as CloudSyncEvent)
    }).catch(() => {});
  } catch { /* ignore */ }
}

/**
 * Pull all data from Cloud History and update local caches
 */
export async function pullCloudData(): Promise<UserAccount[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(CLOUD_USERS_HISTORY_URL, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);

      for (const line of lines) {
        try {
          const envelope = JSON.parse(line);
          if (envelope && envelope.message) {
            const event: CloudSyncEvent = JSON.parse(envelope.message);
            if (event.type === 'USER_REGISTERED' && event.payload) {
              cacheCloudUser(event.payload);
            } else if (event.type === 'GRADE_SAVED' && event.payload) {
              cacheCloudGrade(event.payload);
            } else if (event.type === 'LECTURE_GENERATED' && event.payload) {
              cacheCloudLecture(event.payload);
            }
          }
        } catch {
          // ignore single line malformed
        }
      }
    }
  } catch (_err) {
    // If network offline or timed out, read from local cache
  }

  return getCachedCloudUsers();
}

function cacheCloudUser(user: UserAccount): void {
  try {
    const users = getCachedCloudUsers();
    const idx = users.findIndex(u => u.id === user.id || u.username === user.username);
    if (idx >= 0) {
      users[idx] = { ...users[idx], ...user };
    } else {
      users.push(user);
    }
    localStorage.setItem(CLOUD_STUDENTS_CACHE_KEY, JSON.stringify(users));
  } catch { /* ignore */ }
}

export function getCachedCloudUsers(): UserAccount[] {
  try {
    const raw = localStorage.getItem(CLOUD_STUDENTS_CACHE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cacheCloudGrade(grade: GradeRecord): void {
  try {
    const grades = getCachedCloudGrades();
    const idx = grades.findIndex(g => g.id === grade.id);
    if (idx >= 0) {
      grades[idx] = { ...grades[idx], ...grade };
    } else {
      grades.push(grade);
    }
    if (grades.length > 500) grades.splice(0, grades.length - 500);
    localStorage.setItem(CLOUD_GRADES_CACHE_KEY, JSON.stringify(grades));
  } catch { /* ignore */ }
}

export function getCachedCloudGrades(userId?: string): GradeRecord[] {
  try {
    const raw = localStorage.getItem(CLOUD_GRADES_CACHE_KEY);
    const list: GradeRecord[] = raw ? JSON.parse(raw) : [];
    return userId ? list.filter(g => g.userId === userId) : list;
  } catch {
    return [];
  }
}

/**
 * Subscribe to live cloud presence updates (when any student connects or leaves anywhere)
 */
export function onCloudPresenceChange(callback: (active: ActiveStudentPresence[]) => void): () => void {
  initCloudSync();
  presenceListeners.push(callback);
  callback(getCloudActiveStudents());

  return () => {
    const idx = presenceListeners.indexOf(callback);
    if (idx >= 0) presenceListeners.splice(idx, 1);
  };
}

/**
 * Subscribe to new student registrations happening in real-time on other devices
 */
export function onCloudUserRegistered(callback: (user: UserAccount) => void): () => void {
  initCloudSync();
  userRegisteredListeners.push(callback);

  return () => {
    const idx = userRegisteredListeners.indexOf(callback);
    if (idx >= 0) userRegisteredListeners.splice(idx, 1);
  };
}

/**
 * Broadcast newly AI-generated lecture to the entire cloud so all visitors can immediately access it
 */
export async function syncSharedLectureToCloud(lecture: Lecture): Promise<void> {
  if (!lecture || !lecture.id) return;

  // 1. Cache locally first
  cacheCloudLecture(lecture);

  // 2. Broadcast live event to all connected visitors and students across the internet
  try {
    await fetch(CLOUD_USERS_POST_URL, {
      method: 'POST',
      body: JSON.stringify({
        type: 'LECTURE_GENERATED',
        payload: lecture
      } as CloudSyncEvent)
    });
    console.log(`[CloudSync] Broadcasted new shared lecture: ${lecture.titleAr || lecture.id}`);
  } catch (err) {
    console.warn('Realtime cloud lecture sync warning:', err);
  }
}

export function cacheCloudLecture(lecture: Lecture): void {
  try {
    const list = getCachedCloudLectures();
    const idx = list.findIndex(l => l.id === lecture.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...lecture };
    } else {
      list.push(lecture);
    }
    localStorage.setItem(CLOUD_LECTURES_CACHE_KEY, JSON.stringify(list));
  } catch { /* ignore */ }
}

export function getCachedCloudLectures(
  subject?: Subject,
  country?: string,
  gradeLevel?: string,
  educationType?: EducationType,
  educationTrack?: EducationTrack
): Lecture[] {
  try {
    const raw = localStorage.getItem(CLOUD_LECTURES_CACHE_KEY);
    const list: Lecture[] = raw ? JSON.parse(raw) : [];
    if (!subject && !country && !gradeLevel && !educationType && !educationTrack) return list;
    return list.filter(l => {
      if (country && l.country !== country) return false;
      if (subject && l.subject !== subject) return false;
      if (gradeLevel && l.gradeLevel !== gradeLevel) return false;
      if (educationType && l.educationType !== educationType) return false;
      if (educationTrack && l.educationTrack !== educationTrack) return false;
      return true;
    });
  } catch {
    return [];
  }
}

export function onCloudLectureGenerated(callback: (lecture: Lecture) => void): () => void {
  initCloudSync();
  lectureGeneratedListeners.push(callback);
  return () => {
    const idx = lectureGeneratedListeners.indexOf(callback);
    if (idx >= 0) lectureGeneratedListeners.splice(idx, 1);
  };
}
