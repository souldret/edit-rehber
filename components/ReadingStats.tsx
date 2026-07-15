"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  getRecentSections,
  addRecentSection,
  getBookmarks,
  toggleBookmark as toggleBookmarkStorage,
  getReadingTime,
  addReadingTime,
  type RecentSection,
} from "@/lib/storage";
import { SECTION_TITLE_MAP, SECTIONS } from "@/lib/sections";
import { showToast } from "@/lib/toast";

export default function ReadingStats() {
  const [recentSections, setRecentSections] = useState<RecentSection[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [readingTime, setReadingTime] = useState(0);
  const [estimatedMinutes, setEstimatedMinutes] = useState(15);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"recent" | "bookmarks">("recent");
  const [showContinue, setShowContinue] = useState(false);
  const [continueId, setContinueId] = useState<string>("");
  const startTimeRef = useRef(Date.now());

  // Load persisted data on mount — no document access in render
  useEffect(() => {
    const recent = getRecentSections();
    setRecentSections(recent);
    setBookmarks(getBookmarks());
    setReadingTime(getReadingTime());

    if (recent.length > 0) {
      setContinueId(recent[0].id);
      setShowContinue(true);
    }

    // Calculate estimated reading time from article content (useEffect = safe)
    const article = document.querySelector(".main-article-area");
    if (article) {
      const words = article.textContent?.split(/\s+/).length ?? 3000;
      setEstimatedMinutes(Math.max(1, Math.ceil(words / 200)));
    }
  }, []);

  // Track reading time every 5s
  useEffect(() => {
    startTimeRef.current = Date.now();
    const tick = setInterval(() => {
      if (document.hidden) return;
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      startTimeRef.current = Date.now();
      setReadingTime((prev) => addReadingTime(elapsed) ?? prev);
    }, 5000);
    return () => clearInterval(tick);
  }, []);

  // Track section visits via IntersectionObserver
  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.3) return;
          const id = entry.target.id;
          if (!id || !SECTION_TITLE_MAP[id]) return;
          const next = addRecentSection(id);
          setRecentSections(next);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    const { bookmarks: next, added } = toggleBookmarkStorage(id);
    setBookmarks(next);
    showToast(added ? "Yer imi eklendi!" : "Yer imi kaldırıldı");
  }, []);

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const formatTime = (secs: number) => {
    if (secs < 60) return `${secs}s`;
    const m = Math.floor(secs / 60);
    return `${m} dk`;
  };

  return (
    <>
      {/* Continue Reading banner */}
      {showContinue && continueId && (
        <div className="continue-reading-bar" role="banner" aria-label="Kaldığınız yerden devam edin">
          <span>
            <i className="fas fa-bookmark" aria-hidden="true" />
            Kaldığınız yerden devam edin
          </span>
          <button
            className="continue-btn"
            onClick={() => { navigateTo(continueId); setShowContinue(false); }}
          >
            {SECTION_TITLE_MAP[continueId] ?? continueId}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
          <button
            className="continue-close"
            onClick={() => setShowContinue(false)}
            aria-label="Devam et çubuğunu kapat"
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Estimated reading time badge */}
      <div
        className="reading-time-badge"
        id="reading-time-badge"
        aria-label={`Tahmini okuma süresi: ${estimatedMinutes} dakika`}
      >
        <i className="fas fa-clock" aria-hidden="true" />
        <span>~{estimatedMinutes} dk okuma</span>
        <span className="reading-time-sep" aria-hidden="true">·</span>
        <span>{formatTime(readingTime)} geçirildi</span>
      </div>

      {/* Stats FAB */}
      <button
        className="stats-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Okuma istatistikleri ve yer imleri"
        title="Son Görüntülenenler & Yer İmleri"
        aria-expanded={isOpen}
      >
        <i className="fas fa-bookmark" aria-hidden="true" />
      </button>

      {/* Stats panel */}
      {isOpen && (
        <>
          <div
            className="stats-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            className="stats-panel"
            role="dialog"
            aria-label="Okuma istatistikleri"
            aria-modal="true"
          >
            <div className="stats-header">
              <div className="stats-tabs" role="tablist">
                <button
                  className={`stats-tab${activeTab === "recent" ? " active" : ""}`}
                  onClick={() => setActiveTab("recent")}
                  role="tab"
                  aria-selected={activeTab === "recent"}
                  aria-controls="stats-recent-panel"
                >
                  <i className="fas fa-history" aria-hidden="true" />
                  Son Görüntülenenler
                </button>
                <button
                  className={`stats-tab${activeTab === "bookmarks" ? " active" : ""}`}
                  onClick={() => setActiveTab("bookmarks")}
                  role="tab"
                  aria-selected={activeTab === "bookmarks"}
                  aria-controls="stats-bookmarks-panel"
                >
                  <i className="fas fa-bookmark" aria-hidden="true" />
                  Yer İmleri
                </button>
              </div>
              <button
                className="stats-close"
                onClick={() => setIsOpen(false)}
                aria-label="Kapat"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            </div>

            <div className="stats-body">
              {activeTab === "recent" && (
                <div id="stats-recent-panel" role="tabpanel">
                  {recentSections.length === 0 ? (
                    <p className="stats-empty">Henüz hiçbir bölüm görüntülemediniz.</p>
                  ) : (
                    recentSections.map((s) => (
                      <button
                        key={s.id}
                        className="stats-item"
                        onClick={() => navigateTo(s.id)}
                        aria-label={`${SECTION_TITLE_MAP[s.id] ?? s.id} bölümüne git`}
                      >
                        <i className="fas fa-clock" aria-hidden="true" />
                        <span>{SECTION_TITLE_MAP[s.id] ?? s.id}</span>
                        <i className="fas fa-arrow-right stats-item-arrow" aria-hidden="true" />
                      </button>
                    ))
                  )}
                </div>
              )}
              {activeTab === "bookmarks" && (
                <div id="stats-bookmarks-panel" role="tabpanel">
                  {bookmarks.length === 0 ? (
                    <p className="stats-empty">
                      Henüz yer imi eklemediniz.{" "}
                      <span style={{ color: "var(--tx-4)" }}>
                        Bölüm başlıklarının yanındaki{" "}
                        <i className="fas fa-bookmark" aria-hidden="true" />{" "}
                        simgesine tıklayın.
                      </span>
                    </p>
                  ) : (
                    bookmarks.map((id) => (
                      <div key={id} className="stats-item stats-item-bm">
                        <button
                          className="stats-item-nav"
                          onClick={() => navigateTo(id)}
                          aria-label={`${SECTION_TITLE_MAP[id] ?? id} bölümüne git`}
                        >
                          <i className="fas fa-bookmark" aria-hidden="true" />
                          <span>{SECTION_TITLE_MAP[id] ?? id}</span>
                        </button>
                        <button
                          className="stats-item-remove"
                          onClick={() => toggleBookmark(id)}
                          aria-label={`${SECTION_TITLE_MAP[id] ?? id} yer imini kaldır`}
                        >
                          <i className="fas fa-times" aria-hidden="true" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Bookmark buttons injected into headings */}
      <BookmarkInjector bookmarks={bookmarks} onToggle={toggleBookmark} />
    </>
  );
}

function BookmarkInjector({
  bookmarks,
  onToggle,
}: {
  bookmarks: string[];
  onToggle: (id: string) => void;
}) {
  useEffect(() => {
    const article = document.querySelector(".main-article-area");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h1[id], h2[id]")
    ) as HTMLHeadingElement[];

    const buttons: HTMLButtonElement[] = [];

    headings.forEach((h) => {
      if (!SECTION_TITLE_MAP[h.id]) return;

      // Update existing button if present
      const existing = h.querySelector<HTMLButtonElement>(".bm-btn");
      if (existing) {
        existing.classList.toggle("bm-active", bookmarks.includes(h.id));
        return;
      }

      const btn = document.createElement("button");
      btn.className = `bm-btn${bookmarks.includes(h.id) ? " bm-active" : ""}`;
      btn.setAttribute("aria-label", "Yer imi ekle/kaldır");
      btn.setAttribute("title", "Yer İmi Ekle/Kaldır");
      btn.setAttribute("type", "button");
      btn.setAttribute("data-id", h.id);

      const icon = document.createElement("i");
      icon.className = "fas fa-bookmark";
      icon.setAttribute("aria-hidden", "true");
      btn.appendChild(icon);
      btn.addEventListener("click", () => onToggle(h.id));

      h.appendChild(btn);
      buttons.push(btn);
    });

    return () => {
      buttons.forEach((b) => b.remove());
    };
  }, [bookmarks, onToggle]);

  return null;
}