import {
  broadcastCloudHeartbeat,
  broadcastCloudStudentLeft,
  getCloudActiveStudents,
  onCloudPresenceChange
} from './cloudSyncService';

export interface ActiveStudentPresence {
  userId: string;
  userName: string;
  userEmail: string;
  country: string;
  gradeLevel: string;
  subject: string;
  currentLectureId: string;
  currentLectureTitle: string;
  status: 'STUDYING' | 'QUIZ' | 'IDLE' | 'OFFLINE';
  lastPing: number;        // Epoch timestamp of last heartbeat
  sessionStartedAt: number;
  tabId: string;
  isSimulated?: boolean;
}

const PRESENCE_STORAGE_KEY = 'TEACHER_AI_LIVE_PRESENCE_REGISTRY';
const PRESENCE_CHANNEL_NAME = 'TEACHER_AI_PRESENCE_CHANNEL';
const HEARTBEAT_EXPIRY_MS = 25000; // 25 seconds without ping = considered offline

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
 * Clean up expired heartbeats and return current genuinely active students across all devices
 */
export function getLiveActiveStudents(): ActiveStudentPresence[] {
  if (typeof window === 'undefined') return [];
  const map = new Map<string, ActiveStudentPresence>();
  const now = Date.now();

  // 1. Read Cloud Presence (students active on other laptops, phones, or tabs worldwide)
  try {
    const cloudActive = getCloudActiveStudents();
    cloudActive.forEach((item) => {
      if (item && item.userId && (now - item.lastPing) <= HEARTBEAT_EXPIRY_MS && item.status !== 'OFFLINE') {
        map.set(item.userId, item);
      }
    });
  } catch (err) {
    console.warn('Error reading cloud active students:', err);
  }

  // 2. Read Local Presence (current machine/browser localStorage)
  try {
    const raw = localStorage.getItem(PRESENCE_STORAGE_KEY);
    if (raw) {
      const registry: Record<string, ActiveStudentPresence> = JSON.parse(raw);
      const validRegistry: Record<string, ActiveStudentPresence> = {};

      Object.values(registry).forEach((item) => {
        if (item && item.userId && (now - item.lastPing) <= HEARTBEAT_EXPIRY_MS && item.status !== 'OFFLINE') {
          validRegistry[item.userId] = item;
          const existing = map.get(item.userId);
          if (!existing || item.lastPing > existing.lastPing) {
            map.set(item.userId, item);
          }
        }
      });

      // Write back pruned local registry if items expired
      if (Object.keys(registry).length !== Object.keys(validRegistry).length) {
        localStorage.setItem(PRESENCE_STORAGE_KEY, JSON.stringify(validRegistry));
      }
    }
  } catch (err) {
    console.error('Error reading local live presence:', err);
  }

  return Array.from(map.values());
}

/**
 * Get real-time presence record for a specific student ID (checks both local and global cloud)
 */
export function getStudentPresence(userId: string): ActiveStudentPresence | null {
  const activeStudents = getLiveActiveStudents();
  return activeStudents.find((s) => s.userId === userId) || null;
}

/**
 * Send real-time heartbeat for the current active student session
 * Broadcasts to both local BroadcastChannel AND global Cloud SSE network!
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

    // 1. Local machine persistence
    const raw = localStorage.getItem(PRESENCE_STORAGE_KEY);
    const registry: Record<string, ActiveStudentPresence> = raw ? JSON.parse(raw) : {};
    registry[data.userId] = presenceRecord;
    localStorage.setItem(PRESENCE_STORAGE_KEY, JSON.stringify(registry));

    // 2. Broadcast to local tabs
    if (presenceChannel) {
      presenceChannel.postMessage({
        type: 'STUDENT_HEARTBEAT',
        payload: presenceRecord
      });
    }

    // 3. Broadcast to Global Cloud Network (enables cross-device real-time presence!)
    broadcastCloudHeartbeat(presenceRecord).catch(() => {});
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
    if (raw) {
      const registry: Record<string, ActiveStudentPresence> = JSON.parse(raw);
      delete registry[userId];
      localStorage.setItem(PRESENCE_STORAGE_KEY, JSON.stringify(registry));
    }

    if (presenceChannel) {
      presenceChannel.postMessage({
        type: 'STUDENT_LEFT',
        userId
      });
    }

    // Notify global cloud network that student left
    broadcastCloudStudentLeft(userId);
  } catch (err) {
    console.error('Failed to clear presence:', err);
  }
}

/**
 * Subscribe to real-time presence changes across tabs AND across all devices worldwide
 */
export function subscribeToPresenceUpdates(callback: (activeStudents: ActiveStudentPresence[]) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  // BroadcastChannel listener (local machine)
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

  // Subscribe to Global Cloud Real-Time presence stream (cross-device SSE)
  const unsubCloud = onCloudPresenceChange(() => {
    callback(getLiveActiveStudents());
  });

  // Periodic poll to ensure expiry triggers UI update even without storage event
  const interval = setInterval(() => {
    callback(getLiveActiveStudents());
  }, 3500);

  return () => {
    if (presenceChannel) {
      presenceChannel.removeEventListener('message', handleMessage);
    }
    window.removeEventListener('storage', handleStorage);
    clearInterval(interval);
    unsubCloud();
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
