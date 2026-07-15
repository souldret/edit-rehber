"use client";

import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.clear();
        next.add(id);
      }
      return next;
    });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenSubmenus(new Set());
  };

  return (
    <>
      <button
        className="hamburger-menu-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Menüyü aç"
      >
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>

      {/* Overlay */}
      <div
        className="mobile-menu-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <nav
        className={`mobile-sidebar-nav${isOpen ? " is-open" : ""}`}
        role="navigation"
        aria-label="Mobil menü"
      >
        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Menüyü kapat"
        >
          &times;
        </button>
        <h3>Rehber Menüsü</h3>
        <ul>
          <li>
            <a href="#giris" className="menu-link" onClick={handleLinkClick}>
              Giriş
            </a>
          </li>

          {/* Video Eğitimler */}
          <li className={`has-submenu${openSubmenus.has("videos") ? " open" : ""}`}>
            <a
              href="#rehber-videolari"
              className="menu-link submenu-toggle"
              onClick={(e) => { e.preventDefault(); toggleSubmenu("videos"); }}
            >
              Rehber Videoları{" "}
              <i className="fas fa-chevron-down submenu-arrow" aria-hidden="true"></i>
            </a>
            <ul className="submenu">
              <li><a href="#egitim-giris" className="menu-link" onClick={handleLinkClick}>1. Yeni Başlayanlar için Giriş</a></li>
              <li><a href="#balon-temizleme" className="menu-link" onClick={handleLinkClick}>2. Balon Temizleme &amp; Metin Silme</a></li>
              <li><a href="#dizgi-giris" className="menu-link" onClick={handleLinkClick}>3. Giriş Seviye Dizgi</a></li>
              <li><a href="#photoshop-pentool" className="menu-link" onClick={handleLinkClick}>4. Photoshop Pentool Kullanımı</a></li>
              <li><a href="#photoshop-yama" className="menu-link" onClick={handleLinkClick}>5. Photoshop Yama Aracı</a></li>
              <li><a href="#photoshop-index-panel" className="menu-link" onClick={handleLinkClick}>6. Photoshop Index &amp; Panel Modu</a></li>
              <li><a href="#katman-kullanimi" className="menu-link" onClick={handleLinkClick}>7. Katman Kullanımı</a></li>
              <li className={`has-submenu${openSubmenus.has("indirme") ? " open" : ""}`}>
                <a
                  href="#manga-webtoon-indirme"
                  className="menu-link submenu-toggle"
                  onClick={(e) => { e.preventDefault(); toggleSubmenu("indirme"); }}
                >
                  8. Manga/Webtoon İndirme{" "}
                  <i className="fas fa-chevron-down submenu-arrow" aria-hidden="true"></i>
                </a>
                <ul className="submenu">
                  <li><a href="#hakuneko-indirme" className="menu-link" onClick={handleLinkClick}>8.1. Hakuneko ile İndirme</a></li>
                  <li><a href="#manga-downloader-indirme" className="menu-link" onClick={handleLinkClick}>8.2. Manga Downloader ile İndirme</a></li>
                </ul>
              </li>
              <li><a href="#perspektif-balonlari" className="menu-link" onClick={handleLinkClick}>9. Perspektif Balonları</a></li>
              <li><a href="#webtoon-temizlik" className="menu-link" onClick={handleLinkClick}>10. Webtoon Temizliği</a></li>
              <li><a href="#ileri-katman-teknikleri" className="menu-link" onClick={handleLinkClick}>11. İleri Katman Teknikleri</a></li>
            </ul>
          </li>

          {/* Çeviri & Tipografi */}
          <li className={`has-submenu${openSubmenus.has("tipografi") ? " open" : ""}`}>
            <a
              href="#cevirme-tipografi"
              className="menu-link submenu-toggle"
              onClick={(e) => { e.preventDefault(); toggleSubmenu("tipografi"); }}
            >
              Çeviri &amp; Tipografi{" "}
              <i className="fas fa-chevron-down submenu-arrow" aria-hidden="true"></i>
            </a>
            <ul className="submenu">
              <li><a href="#font-secimi" className="menu-link" onClick={handleLinkClick}>Font Seçimi ve Kaynakları</a></li>
              <li><a href="#balon-yerlesimi" className="menu-link" onClick={handleLinkClick}>Balon Yerleşimi ve Metin Hizalama</a></li>
              <li><a href="#sfx-edit" className="menu-link" onClick={handleLinkClick}>SFX (Ses Efekti) Editleri</a></li>
              <li><a href="#cevirinin-onemi" className="menu-link" onClick={handleLinkClick}>Çevirinin Manga Editine Etkisi</a></li>
            </ul>
          </li>

          <li><a href="#kaynaklar" className="menu-link" onClick={handleLinkClick}>Kaynaklar ve Linkler</a></li>
          <li><a href="#sss-faq" className="menu-link" onClick={handleLinkClick}>Sık Sorulan Sorular</a></li>
          <li><a href="#topluluk-geri-bildirim" className="menu-link" onClick={handleLinkClick}>Topluluk &amp; Geri Bildirim</a></li>
        </ul>

        {/* Mobile search */}
        <form className="mobile-search-area" role="search" aria-label="Site içi arama" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="mobile-search-input" className="sr-only">Rehberde ara</label>
          <input
            type="search"
            id="mobile-search-input"
            placeholder="Rehberde ara..."
          />
          <button type="submit" aria-label="Arama yap">
            <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </nav>
    </>
  );
}