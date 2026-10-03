/**
 * Real-Time Presence Service for TeacherAI
 * Tracks truly active students via localStorage heartbeats, visibility states,
 * and BroadcastChannel for zero-latency multi-tab/cross-window presence.
 */

export interface ActiveStudentPresence {
  userId: string;
  userName: string;
  userEmail: string;
  country: string;
  gradeLevel: string;
  subject: string;
  currentLectureId: string;
  currentLectureTitle: string;
  status: 'STUDYING' | 'QUIZ' | 'IDLE';
  lastPing: number;        // Epoch timestamp of last heartbeat
  sessionStartedAt: number;
  tabId: string;
  isSimulated?: boolean;
}

const PRESENCE_STORAGE_KEY = 'TEACHER_AI_LIVE_PRESENCE_REGISTRY';
const PRESENCE_CHANNEL_NAME = 'TEACHER_AI_PRESENCE_CHANNEL';
const HEARTBEAT_EXPIRY_MS = 20000; // 20 seconds without ping = considered offline

let presenceChannel: BroadcastChannel | null = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    presenceChannel = new BroadcastChannel(PRESENCE_CHANNEL_NAME);
  }
} catch {
  // BroadcastChannel not available in environment
}

/**
 * Get or create unique identifier for the current browser tab
 */
export function getTabId(): string {
  if (typeof window === 'undefined') return 'server';
  let tabId = sessionStorage.getItem('TEACHER_AI_TAB_ID');
  if (!tabId) {
    tabId = 'tab_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    sessionStorage.setItem('TEACHER_AI_TAB_ID', tabId);
  }
  return tabId;
}

/**
 * Clean up expired heartbeats and return current genuinely active students
 */
export function getLiveActiveStudents(): ActiveStudentPresence[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(PRESENCE_STORAGE_KEY);
    if (!raw) return [];

    const registry: Record<string, ActiveStudentPresence> = JSON.parse(raw);
    const now = Date.now();
    const activeList: ActiveStudentPresence[] = [];
    const validRegistry: Record<string, ActiveStudentPresence> = {};

    Object.values(registry).forEach((item) => {
      // Must have pinged within the last 20 seconds
      if (item && item.userId && (now - item.lastPing) <= HEARTBEAT_EXPIRY_MS) {
        activeList.push(item);
        validRegistry[item.userId] = item;
      }
    });

    // Write back pruned registry if items expired
    if (Object.keys(registry).length !== Object.keys(validRegistry).length) {
      localStorage.setItem(PRESENCE_STORAGE_KEY, JSON.stringify(validRegistry));
    }

    return activeList;
  } catch (err) {
    console.error('Error reading live presence:', err);
    return [];
  }
}

/**
 * Get real-time presence record for a specific student ID
 */
export function getStudentPresence(userId: string): ActiveStudentPresence | null {
  const activeStudents = getLiveActiveStudents();
  return activeStudents.find((s) => s.userId === userId) || null;
}

/**
 * Send real-time heartbeat for the current active student session
 */
export function sendStudentHeartbeat(data: Omit<ActiveStudentPresence, 'lastPing' | 'tabId'>): void {
  if (typeof window === 'undefined' || !data.userId) return;

  try {
    const now = Date.now();
    const tabId = getTabId();
    const presenceRecord: ActiveStudentPresence = {
      ...data,
      lastPing: now,
      tabId
    };

    const raw = localStorage.getItem(PRESENCE_STORAGE_KEY);
    const registry: Record<string, ActiveStudentPresence> = raw ? JSON.parse(raw) : {};

    registry[data.userId] = presenceRecord;
    localStorage.setItem(PRESENCE_STORAGE_KEY, JSON.stringify(registry));

    // Broadcast live event to Admin Dashboard
    if (presenceChannel) {
      presenceChannel.postMessage({
        type: 'STUDENT_HEARTBEAT',
        payload: presenceRecord
      });
    }
  } catch (err) {
    console.error('Failed to send presence heartbeat:', err);
  }
}

/**
 * Clear student presence when they logout or close tab
 */
export function clearStudentPresence(userId: string): void {
  if (typeof window === 'undefined' || !userId) return;

  try {
    const raw = localStorage.getItem(PRESENCE_STORAGE_KEY);
    if (!raw) return;

    const registry: Record<string, ActiveStudentPresence> = JSON.parse(raw);
    delete registry[userId];
    localStorage.setItem(PRESENCE_STORAGE_KEY, JSON.stringify(registry));

    if (presenceChannel) {
      presenceChannel.postMessage({
        type: 'STUDENT_LEFT',
        userId
      });
    }
  } catch (err) {
    console.error('Failed to clear presence:', err);
  }
}

/**
 * Subscribe to real-time presence changes across tabs
 */
export function subscribeToPresenceUpdates(callback: (activeStudents: ActiveStudentPresence[]) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  // BroadcastChannel listener
  const handleMessage = (event: MessageEvent) => {
    if (event.data?.type === 'STUDENT_HEARTBEAT' || event.data?.type === 'STUDENT_LEFT' || event.data?.type === 'SIMULATION_UPDATE') {
      callback(getLiveActiveStudents());
    }
  };

  // localStorage storage event listener (cross-window/cross-tab)
  const handleStorage = (event: StorageEvent) => {
    if (event.key === PRESENCE_STORAGE_KEY) {
      callback(getLiveActiveStudents());
    }
  };

  if (presenceChannel) {
    presenceChannel.addEventListener('message', handleMessage);
  }
  window.addEventListener('storage', handleStorage);

  // Periodic poll to ensure expiry triggers UI update even without storage event
  const interval = setInterval(() => {
    callback(getLiveActiveStudents());
  }, 4000);

  return () => {
    if (presenceChannel) {
      presenceChannel.removeEventListener('message', handleMessage);
    }
    window.removeEventListener('storage', handleStorage);
    clearInterval(interval);
  };
}

/**
 * Optional Supervisor Testing: simulate a student joining with auto-expiry
 */
export function simulateStudentJoin(student: {
  userId: string;
  userName: string;
  userEmail: string;
  country: string;
  gradeLevel: string;
  subject: string;
  currentLectureTitle: string;
}): void {
  sendStudentHeartbeat({
    ...student,
    currentLectureId: 'lec-sim',
    status: 'STUDYING',
    sessionStartedAt: Date.now(),
    isSimulated: true
  });
}

/**
 * End a simulated session
 */
export function endSimulatedStudent(userId: string): void {
  clearStudentPresence(userId);
}
