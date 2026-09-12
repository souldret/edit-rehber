/**
 * Merkezi localStorage yardımcısı.
 * Tüm bileşenler buradan okur/yazar — anahtar çakışmalarını önler.
 */

const KEYS = {
  recentSections: "mr_recent_v1",
  bookmarks: "mr_bookmarks_v1",
  readingTime: "mr_reading_time_v1",
  theme: "mr_theme_v1",
  completed: "mr_completed_v1",
} as const;

export type StorageKey = keyof typeof KEYS;

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function get<T>(key: StorageKey, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(KEYS[key]);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function set<T>(key: StorageKey, value: T): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(KEYS[key], JSON.stringify(value));
  } catch {
    // Quota exceeded — silent fail
  }
}

// ── Recent Sections ────────────────────────────────────────────
export interface RecentSection {
  id: string;
  visitedAt: number;
}

function migrateLegacyRecent(): RecentSection[] {
  if (!isBrowser()) return [];
  try {
    const legacy = localStorage.getItem("recentSections");
    if (!legacy) return [];
    const arr = JSON.parse(legacy) as unknown;
    if (!Array.isArray(arr)) return [];
    const next: RecentSection[] = arr
      .filter((id): id is string => typeof id === "string" && id.length > 0)
      .slice(0, 5)
      .map((id) => ({ id, visitedAt: Date.now() }));
    if (next.length) set("recentSections", next);
    localStorage.removeItem("recentSections");
    return next;
  } catch {
    return [];
  }
}

export function getRecentSections(): RecentSection[] {
  const current = get<RecentSection[]>("recentSections", []);
  if (current.length) return current;
  return migrateLegacyRecent();
}

export function addRecentSection(id: string): RecentSection[] {
  const current = getRecentSections();
  const next: RecentSection[] = [
    { id, visitedAt: Date.now() },
    ...current.filter((s) => s.id !== id),
  ].slice(0, 5);
  set("recentSections", next);
  return next;
}

// ── Bookmarks ──────────────────────────────────────────────────
export function getBookmarks(): string[] {
  return get<string[]>("bookmarks", []);
}

export function toggleBookmark(id: string): { bookmarks: string[]; added: boolean } {
  const current = getBookmarks();
  const added = !current.includes(id);
  const next = added ? [...current, id] : current.filter((b) => b !== id);
  set("bookmarks", next);
  return { bookmarks: next, added };
}

// ── Reading Time (seconds) ─────────────────────────────────────
export function getReadingTime(): number {
  return get<number>("readingTime", 0);
}

export function addReadingTime(seconds: number): number {
  const next = getReadingTime() + seconds;
  set("readingTime", next);
  return next;
}

// ── Completed sections ─────────────────────────────────────────
function migrateLegacyProgress(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem("userProgress");
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { completedSections?: unknown };
    const ids = Array.isArray(parsed.completedSections)
      ? parsed.completedSections.filter((id): id is string => typeof id === "string")
      : [];
    if (ids.length) set("completed", ids);
    localStorage.removeItem("userProgress");
    return ids;
  } catch {
    return [];
  }
}

export function getCompletedSections(): string[] {
  const current = get<string[]>("completed", []);
  if (current.length) return current;
  return migrateLegacyProgress();
}

export function markSectionCompleted(id: string): string[] {
  const current = getCompletedSections();
  if (current.includes(id)) return current;
  const next = [...current, id];
  set("completed", next);
  return next;
}

// ── Theme ──────────────────────────────────────────────────────
export type Theme = "dark" | "light";

export function getTheme(): Theme {
  return get<Theme>("theme", "dark");
}

export function setTheme(theme: Theme): void {
  set("theme", theme);
}
