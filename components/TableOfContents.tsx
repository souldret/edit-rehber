"use client";

import { useEffect, useState, useRef } from "react";
import { addRecentSection } from "@/lib/storage";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Build ToC from article headings
  useEffect(() => {
    const article = document.querySelector(".main-article-area");
    if (!article) return;
    const headings = Array.from(
      article.querySelectorAll("h1[id], h2[id], h2.section-title, h2.subsection-title, h3[id]")
    ) as HTMLElement[];

    const tocItems: TocItem[] = headings
      .filter((h) => h.id)
      .map((h) => ({
        id: h.id,
        text: h.textContent?.replace(/\s+/g, " ").trim() ?? "",
        level: parseInt(h.tagName[1]),
      }));

    setItems(tocItems);
  }, []);

  // Active heading via IntersectionObserver
  useEffect(() => {
    if (items.length === 0) return;
    observerRef.current?.disconnect();

    const cb: IntersectionObserverCallback = (entries) => {
      // Find topmost visible heading
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(cb, {
      rootMargin: "-64px 0px -60% 0px",
      threshold: 0,
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    addRecentSection(id);
  };

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile ToC toggle */}
      <div className="toc-mobile-bar">
        <button
          className="toc-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="İçindekiler tablosunu aç/kapat"
        >
          <i className="fas fa-list" aria-hidden="true" />
          <span>Bu sayfada</span>
          <i className={`fas fa-chevron-${isOpen ? "up" : "down"} toc-chevron`} aria-hidden="true" />
        </button>
        {isOpen && (
          <nav className="toc-mobile-list" aria-label="İçindekiler">
            {items.map((item) => (
              <button
                key={item.id}
                className={`toc-item toc-level-${item.level}${active === item.id ? " toc-active" : ""}`}
                onClick={() => handleClick(item.id)}
                title={item.text}
              >
                {item.text}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop inline ToC (shown inside article before sections) */}
      <nav className="toc-desktop" aria-label="Bu sayfada">
        <div className="toc-desktop-header">
          <i className="fas fa-list" aria-hidden="true" />
          <span>Bu Sayfada</span>
        </div>
        <ul className="toc-desktop-list">
          {items.map((item) => (
            <li key={item.id} className={`toc-level-${item.level}`}>
              <button
                className={`toc-item${active === item.id ? " toc-active" : ""}`}
                onClick={() => handleClick(item.id)}
                title={item.text}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}