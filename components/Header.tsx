import CommandPalette from "./CommandPalette";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container header-content">
        {/* Logo */}
        <div className="logo-area">
          <a href="https://mangaruhu.com" className="main-logo">
            mangaruhu
          </a>
          <span className="logo-sep" aria-hidden="true" />
          <span className="guide-title">Manga Edit Rehberi</span>
        </div>

        <div className="header-spacer" />

        {/* Desktop Nav */}
        <nav className="main-nav" role="navigation" aria-label="Ana menü">
          <ul role="menubar">
            <li>
              <a href="#giris">Giriş</a>
            </li>
            <li className="has-submenu">
              <a href="#rehber-videolari">
                Videolar <i className="fas fa-chevron-down" aria-hidden="true" />
              </a>
              <ul className="submenu">
                <li><a href="#egitim-giris">Yeni Başlayanlar</a></li>
                <li><a href="#balon-temizleme">Balon Temizleme</a></li>
                <li><a href="#dizgi-giris">Dizgi</a></li>
                <li><a href="#photoshop-pentool">Pentool</a></li>
                <li><a href="#photoshop-yama">Yama Aracı</a></li>
                <li><a href="#photoshop-index-panel">Index &amp; Panel</a></li>
                <li><a href="#katman-kullanimi">Katmanlar</a></li>
                <li><a href="#manga-webtoon-indirme">İndirme</a></li>
                <li><a href="#perspektif-balonlari">Perspektif</a></li>
                <li><a href="#webtoon-temizlik">Webtoon</a></li>
                <li><a href="#ileri-katman-teknikleri">İleri Seviye</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#cevirme-tipografi">
                Tipografi <i className="fas fa-chevron-down" aria-hidden="true" />
              </a>
              <ul className="submenu">
                <li><a href="#font-secimi">Font Seçimi</a></li>
                <li><a href="#balon-yerlesimi">Balon Yerleşimi</a></li>
                <li><a href="#sfx-edit">SFX Edit</a></li>
                <li><a href="#cevirinin-onemi">Çeviri Önemi</a></li>
              </ul>
            </li>
            <li><a href="#kaynaklar">Kaynaklar</a></li>
            <li><a href="#sss-faq">SSS</a></li>
          </ul>
        </nav>

        <CommandPalette />
        <MobileMenu />
      </div>
    </header>
  );
}