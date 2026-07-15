/**
 * Merkezi localStorage yardımcısı.
 * Tüm bileşenler buradan okur/yazar — anahtar çakışmalarını önler.
 */

const KEYS = {
  recentSections: "mr_recent_v1",
  bookmarks: "mr_bookmarks_v1",
  readingTime: "mr_reading_time_v1",
  theme: "mr_theme_v1",
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

export function getRecentSections(): RecentSection[] {
  return get<RecentSection[]>("recentSections", []);
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

// ── Reading Time ───────────────────────────────────────────────
export function getReadingTime(): number {
  return get<number>("readingTime", 0);
}

export function addReadingTime(seconds: number): number {
  const next = getReadingTime() + seconds;
  set("readingTime", next);
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