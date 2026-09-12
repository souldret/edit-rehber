"use client";

import { useState } from "react";
import { showToast } from "@/lib/toast";

const PAGE_URL = encodeURIComponent("https://mangaruhu.com/manga-rehber/");
const PAGE_TITLE = encodeURIComponent("Manga Edit Rehberi — Mangaruhu.com");

const SHARE_LINKS = [
  {
    id: "twitter",
    label: "X (Twitter)",
    icon: "fab fa-x-twitter",
    href: `https://twitter.com/intent/tweet?url=${PAGE_URL}&text=${PAGE_TITLE}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: "fab fa-facebook-f",
    href: `https://www.facebook.com/sharer/sharer.php?u=${PAGE_URL}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: "fab fa-whatsapp",
    href: `https://wa.me/?text=${PAGE_TITLE}%20${PAGE_URL}`,
  },
  {
    id: "telegram",
    label: "Telegram",
    icon: "fab fa-telegram-plane",
    href: `https://t.me/share/url?url=${PAGE_URL}&text=${PAGE_TITLE}`,
  },
] as const;

export default function ShareButtons() {
  const [active, setActive] = useState(false);

  const copyLink = () => {
    navigator.clipboard
      .writeText(decodeURIComponent(PAGE_URL))
      .then(() => showToast("Bağlantı kopyalandı!"))
      .catch(() => showToast("Kopyalanamadı", "error"));
    setActive(false);
  };

  return (
    <div
      className={`social-share-fab${active ? " active" : ""}`}
      aria-label="Paylaş"
    >
      <div className="share-options" role="menu" aria-label="Paylaşım seçenekleri">
        {SHARE_LINKS.map(({ id, label, icon, href }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`share-btn ${id}`}
            role="menuitem"
            aria-label={`${label} ile paylaş`}
            title={`${label} ile Paylaş`}
            tabIndex={active ? 0 : -1}
            onClick={() => setActive(false)}
          >
            <i className={icon} aria-hidden="true" />
          </a>
        ))}
        <button
          className="share-btn copy-link"
          onClick={copyLink}
          role="menuitem"
          aria-label="Bağlantıyı kopyala"
          title="Bağlantıyı Kopyala"
          tabIndex={active ? 0 : -1}
        >
          <i className="fas fa-link" aria-hidden="true" />
        </button>
      </div>

      {/* Main toggle */}
      <button
        className="share-main-btn"
        onClick={() => setActive((v) => !v)}
        aria-expanded={active}
        aria-haspopup="menu"
        aria-label={active ? "Paylaşım menüsünü kapat" : "Paylaşım menüsünü aç"}
        title="Paylaş"
      >
        <i className={`fas fa-${active ? "times" : "share-alt"}`} aria-hidden="true" />
      </button>
    </div>
  );
}