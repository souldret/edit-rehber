"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { searchSections, type Section } from "@/lib/sections";
import { addRecentSection } from "@/lib/storage";

const LEVEL_COLOR: Record<string, string> = {
  "Başlangıç": "#4ade80",
  "Orta": "#fbbf24",
  "İleri": "#f87171",
};

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="cp-mark">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results: Section[] = searchSections(query);

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelected(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const navigate = useCallback(
    (id: string) => {
      closePalette();
      addRecentSection(id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [closePalette]
  );

  // Ctrl+K / Cmd+K shortcut + mobile search event
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (open) { closePalette(); } else { openPalette(); }
      }
      if (e.key === "Escape" && open) closePalette();
    };
    const openFromEvent = () => openPalette();
    document.addEventListener("keydown", handler);
    window.addEventListener("open-command-palette", openFromEvent);
    return () => {
      document.removeEventListener("keydown", handler);
      window.removeEventListener("open-command-palette", openFromEvent);
    };
  }, [open, openPalette, closePalette]);

  // Arrow key navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, Math.max(results.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[selected]) navigate(results[selected].id);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, results, selected, navigate]);

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(
      `[data-idx="${selected}"]`
    ) as HTMLElement | null;
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  if (!open) {
    return (
      <button
        className="cp-trigger"
        onClick={openPalette}
        aria-label="Komut Paletini Aç (Ctrl+K)"
        aria-keyshortcuts="Control+k Meta+k"
      >
        <i className="fas fa-search" aria-hidden="true" />
        <span className="cp-trigger-text">Rehberde ara...</span>
        <kbd className="cp-kbd">Ctrl K</kbd>
      </button>
    );
  }

  return (
    <div className="cp-backdrop" onClick={closePalette}>
      <div
        className="cp-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Komut Paleti"
      >
        {/* Search input */}
        <div className="cp-search">
          <i className="fas fa-search cp-search-icon" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            className="cp-input"
            placeholder="Bir bölüm, konu veya anahtar kelime arayın..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            autoComplete="off"
            spellCheck={false}
            aria-label="Arama sorgusu"
            aria-controls="cp-listbox"
            aria-activedescendant={results[selected] ? `cp-item-${results[selected].id}` : undefined}
          />
          <button className="cp-esc" onClick={closePalette} aria-label="Kapat">
            <kbd>Esc</kbd>
          </button>
        </div>

        {/* Results */}
        <div
          id="cp-listbox"
          className="cp-results"
          ref={listRef}
          role="listbox"
          aria-label="Arama sonuçları"
        >
          {results.length === 0 ? (
            <div className="cp-empty" role="status">
              <i className="fas fa-search" aria-hidden="true" />
              <span>&quot;{query}&quot; için sonuç bulunamadı</span>
            </div>
          ) : (
            <>
              <div className="cp-group-label" aria-hidden="true">
                {!query ? "Öneriler" : `${results.length} sonuç`}
              </div>
              {results.map((item, i) => (
                <div
                  key={item.id}
                  id={`cp-item-${item.id}`}
                  className={`cp-item${selected === i ? " cp-item-active" : ""}`}
                  data-idx={i}
                  role="option"
                  aria-selected={selected === i}
                  onClick={() => navigate(item.id)}
                  onMouseEnter={() => setSelected(i)}
                  // keyboard support via Enter handled in useEffect
                  tabIndex={-1}
                >
                  <span className="cp-item-icon" aria-hidden="true">
                    <i className="fas fa-hash" />
                  </span>
                  <span className="cp-item-body">
                    <span className="cp-item-title">
                      {highlight(item.title, query)}
                    </span>
                    <span className="cp-item-meta">
                      <span className="cp-topic">{item.topic}</span>
                    </span>
                  </span>
                  <span
                    className="cp-level"
                    style={{ color: LEVEL_COLOR[item.level] ?? "#888" }}
                    aria-label={`Seviye: ${item.level}`}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="cp-footer" aria-hidden="true">
          <span><kbd>↑↓</kbd> gezin</span>
          <span><kbd>↵</kbd> git</span>
          <span><kbd>Esc</kbd> kapat</span>
        </div>
      </div>
    </div>
  );
}