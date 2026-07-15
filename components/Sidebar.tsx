"use client";

import { useState } from "react";

export default function Sidebar() {
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(
    new Set(["videos", "tipografi"])
  );

  const toggle = (id: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const open = (id: string) => openSubmenus.has(id);

  return (
    <aside
      className="desktop-sidebar"
      role="complementary"
      aria-label="Rehber navigasyonu"
    >
      <span className="sidebar-label">İçindekiler</span>
      <ul>
        <li>
          <a href="#giris" className="sidebar-link">
            Giriş
          </a>
        </li>

        {/* Rehber Videoları */}
        <li className={`has-submenu${open("videos") ? " open" : ""}`}>
          <button
            className="sidebar-link submenu-toggle"
            onClick={() => toggle("videos")}
            aria-expanded={open("videos")}
          >
            Rehber Videoları
            <i className="fas fa-chevron-down submenu-arrow" aria-hidden="true" />
          </button>
          <ul className="submenu">
            <li><a href="#egitim-giris" className="sidebar-link">1. Yeni Başlayanlar için Giriş Seviye Edit Eğitimi</a></li>
            <li><a href="#balon-temizleme" className="sidebar-link">2. Balon Temizleme ve Metin Silme Teknikleri</a></li>
            <li><a href="#dizgi-giris" className="sidebar-link">3. Giriş Seviye Dizgi Nasıl Yapılır</a></li>
            <li><a href="#photoshop-pentool" className="sidebar-link">4. Photoshop Pentool Kullanımı</a></li>
            <li><a href="#photoshop-yama" className="sidebar-link">5. Photoshop Yama Aracı Kullanımı</a></li>
            <li><a href="#photoshop-index-panel" className="sidebar-link">6. Photoshop Index Resimler ve Panel Modu</a></li>
            <li><a href="#katman-kullanimi" className="sidebar-link">7. Katman Kullanımı</a></li>
            <li className={`has-submenu${open("indirme") ? " open" : ""}`}>
              <button
                className="sidebar-link submenu-toggle"
                onClick={() => toggle("indirme")}
                aria-expanded={open("indirme")}
              >
                8. Manga/Webtoon Bölümleri Nasıl İndirilir?
                <i className="fas fa-chevron-down submenu-arrow" aria-hidden="true" />
              </button>
              <ul className="submenu">
                <li><a href="#hakuneko-indirme" className="sidebar-link">8.1. Hakuneko ile İndirme</a></li>
                <li><a href="#manga-downloader-indirme" className="sidebar-link">8.2. Manga Downloader ile İndirme</a></li>
              </ul>
            </li>
            <li><a href="#perspektif-balonlari" className="sidebar-link">9. Perspektif Balonları</a></li>
            <li><a href="#webtoon-temizlik" className="sidebar-link">10. Webtoon Bölüm Temizlik Videoları</a></li>
            <li><a href="#ileri-katman-teknikleri" className="sidebar-link">11. İleri Seviye Katman Yönetimi ve Profesyonel Teknikler</a></li>
          </ul>
        </li>

        {/* Çeviri & Tipografi */}
        <li className={`has-submenu${open("tipografi") ? " open" : ""}`}>
          <button
            className="sidebar-link submenu-toggle"
            onClick={() => toggle("tipografi")}
            aria-expanded={open("tipografi")}
          >
            Çeviri &amp; Tipografi
            <i className="fas fa-chevron-down submenu-arrow" aria-hidden="true" />
          </button>
          <ul className="submenu">
            <li><a href="#font-secimi" className="sidebar-link">Font Seçimi ve Kaynakları</a></li>
            <li><a href="#balon-yerlesimi" className="sidebar-link">Balon Yerleşimi ve Metin Hizalama</a></li>
            <li><a href="#sfx-edit" className="sidebar-link">SFX (Ses Efekti) Editleri</a></li>
            <li><a href="#cevirinin-onemi" className="sidebar-link">Çevirinin Manga Editine Etkisi</a></li>
          </ul>
        </li>

        <li><a href="#kaynaklar" className="sidebar-link">Kaynaklar ve Linkler</a></li>
        <li><a href="#sss-faq" className="sidebar-link">Sık Sorulan Sorular (SSS)</a></li>
        <li><a href="#topluluk-geri-bildirim" className="sidebar-link">Topluluk &amp; Geri Bildirim</a></li>
      </ul>
    </aside>
  );
}