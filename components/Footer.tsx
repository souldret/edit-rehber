export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Mangaruhu.com - Tüm Hakları Saklıdır.</p>
        <ul>
          <li>
            <a href="https://mangaruhu.com/gizlilik-politikasi/">
              Gizlilik Politikası
            </a>
          </li>
          <li>
            <a href="https://mangaruhu.com/terms-of-service/">
              Kullanım Şartları
            </a>
          </li>
          <li>
            <a href="https://mangaruhu.com">Ana Sayfaya Dön</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}