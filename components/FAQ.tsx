"use client";

import { useState, type ReactNode } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: "program",
    question: "Manga edit için hangi program en iyidir?",
    answer: (
      <p>
        Profesyonel manga editörleri genellikle <strong>Adobe Photoshop</strong> kullanır. Ancak başlangıç için{" "}
        <strong>GIMP</strong> (ücretsiz) veya <strong>Clip Studio Paint</strong> (manga için özel) harika
        alternatiflerdir. Photoshop&apos;un güçlü retouching araçları, katman yönetimi ve yaygın kullanımı onu
        endüstri standardı yapar.
      </p>
    ),
  },
  {
    id: "baslangic",
    question: "Hiç deneyimim yok, nereden başlamalıyım?",
    answer: (
      <p>
        <a href="#egitim-giris">Video 1: Giriş Seviye Edit Eğitimi</a>&apos;nden başlayın. Bu video size temel
        kavramları öğretecektir. Ardından basit bir manga sayfası seçin (karmaşık arka plan olmayanı tercih edin) ve
        pratik yapın. İlk 10-20 sayfa zorlanacaksınız, bu normal!
      </p>
    ),
  },
  {
    id: "sure",
    question: "Bir sayfa editleme ne kadar sürer?",
    answer: (
      <>
        <p>Deneyime göre değişir:</p>
        <ul>
          <li><strong>Yeni başlayanlar:</strong> 30-60 dakika/sayfa</li>
          <li><strong>Orta seviye:</strong> 15-30 dakika/sayfa</li>
          <li><strong>İleri seviye:</strong> 5-15 dakika/sayfa</li>
          <li><strong>Profesyoneller:</strong> 2-10 dakika/sayfa</li>
        </ul>
        <p>Karmaşık sayfalar (yoğun arka plan, SFX, detaylı çizimler) daha uzun sürer. Pratik yaparak hızınız katlanarak artar!</p>
      </>
    ),
  },
  {
    id: "font",
    question: "Hangi fontları kullanmalıyım?",
    answer: (
      <>
        <p>Türkçe manga editinde en çok kullanılan fontlar:</p>
        <ul>
          <li><strong>Wild Words</strong> — Genel diyaloglar için</li>
          <li><strong>Anime Ace</strong> — Manga tarzı diyaloglar</li>
          <li><strong>CC Wild Words</strong> — Action sahneleri</li>
          <li><strong>Comic Sans MS</strong> — Yedek seçenek (önerilmez)</li>
        </ul>
        <p>Detaylı font kaynaklarını <a href="#font-secimi">Font Seçimi</a> bölümünde bulabilirsiniz.</p>
      </>
    ),
  },
  {
    id: "sfx",
    question: "SFX'leri nasıl editlemeli? Türkçeye çevirmeli miyim?",
    answer: (
      <>
        <p>SFX (ses efektleri) için üç yöntem vardır:</p>
        <ol>
          <li><strong>Çevirili + orijinal:</strong> Orijinali bırakıp yanına Türkçe ekleyin (önerilen)</li>
          <li><strong>Sadece Türkçe:</strong> Orijinali tamamen silip Türkçe yazın</li>
          <li><strong>Orijinali bırak:</strong> Hiç dokunmayın (dipnot ekleyebilirsiniz)</li>
        </ol>
        <p>Detaylar için <a href="#sfx-edit">SFX Editleri</a> bölümüne bakın.</p>
      </>
    ),
  },
  {
    id: "bilgisayar",
    question: "Bilgisayarımın minimum özellikleri ne olmalı?",
    answer: (
      <>
        <p><strong>Minimum gereksinimler:</strong></p>
        <ul>
          <li>İşlemci: Intel i3 veya eşdeğeri</li>
          <li>RAM: 4GB (8GB önerilir)</li>
          <li>Depolama: 10GB boş alan</li>
          <li>Ekran çözünürlüğü: 1366x768 minimum</li>
        </ul>
        <p><strong>Önerilen özellikler:</strong> i5 işlemci, 16GB RAM, SSD disk ile çalışma hızınız çok artar.</p>
      </>
    ),
  },
  {
    id: "gorsel",
    question: "Manga görselleri nereden bulabilirim?",
    answer: (
      <>
        <p>Resmi kaynaklardan satın almak en iyisidir. Pratik için:</p>
        <ul>
          <li><a href="#hakuneko-indirme">HakuNeko</a> — Çoklu kaynak desteği</li>
          <li><a href="#manga-downloader-indirme">Manga Downloader</a> — Kolay kullanım</li>
          <li>Resmi manga siteleri — Yasal ve kaliteli</li>
        </ul>
        <p><strong>Uyarı:</strong> Telif hakkı kanunlarına uyun. Ticari amaçla kullanmayın.</p>
      </>
    ),
  },
  {
    id: "tablet",
    question: "Tablet ile manga edit yapabilir miyim?",
    answer: (
      <>
        <p>iPad veya Android tablet ile manga edit mümkün ama sınırlı:</p>
        <ul>
          <li><strong>iPad:</strong> Procreate veya Photoshop iPad versiyonu kullanabilirsiniz</li>
          <li><strong>Android:</strong> IbisPaint X, PicsArt gibi uygulamalar</li>
        </ul>
        <p>Ancak profesyonel çalışma için bilgisayar şarttır. Çoğu araç sadece masaüstünde mevcuttur.</p>
      </>
    ),
  },
  {
    id: "ceviri",
    question: "Çeviriyi ben mi yapmalıyım?",
    answer: (
      <>
        <p>Editör ve çevirmen genellikle farklı kişilerdir. İki seçenek:</p>
        <ol>
          <li><strong>Çevirmen + Editör takımı:</strong> Daha profesyonel, önerilen yöntem</li>
          <li><strong>Solo çalışma:</strong> Hem çeviri hem edit kendiniz yaparsınız (daha uzun sürer)</li>
        </ol>
        <p>
          İyi Japonca/İngilizce bilmiyorsanız, bir çevirmenle çalışmanız önerilir.{" "}
          <a href="#cevirinin-onemi">Çevirinin önemi</a> hakkında daha fazla bilgi alabilirsiniz.
        </p>
      </>
    ),
  },
  {
    id: "para",
    question: "Editimden para kazanabilir miyim?",
    answer: (
      <>
        <p><strong>Yasal yollar:</strong></p>
        <ul>
          <li>Resmi yayınevleri için çalışma (freelance veya tam zamanlı)</li>
          <li>Eğitim içerikleri oluşturma (YouTube, kurslar)</li>
          <li>Orijinal içerik editörlüğü (webtoon sanatçılarına yardım)</li>
        </ul>
        <p><strong>Dikkat:</strong> Telif hakkı olmayan içerikleri satmak yasadışıdır ve etik değildir.</p>
      </>
    ),
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-container" role="list">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;
        const headingId = `faq-heading-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="faq-item" role="listitem">
            {/* Heading wraps the button — valid HTML, correct ARIA */}
            <h3 className="faq-heading" id={headingId}>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="faq-icon" aria-hidden="true">
                  <i className="fas fa-plus" />
                </span>
                <span className="faq-question-text">{item.question}</span>
              </button>
            </h3>
            <div
              id={panelId}
              className="faq-answer"
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
            >
              <div className="faq-answer-inner">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}