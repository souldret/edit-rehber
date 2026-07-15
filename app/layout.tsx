import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ── next/font — zero layout shift, self-hosted ────────────────
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

// ── Viewport ──────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ── Metadata ──────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://mangaruhu.com"),
  title: {
    default: "Manga Edit Rehberi — Mangaruhu.com",
    template: "%s | Manga Edit Rehberi",
  },
  description:
    "Manga edit öğrenmek isteyenler için kapsamlı Türkçe rehber. Photoshop teknikleri, balon temizleme, dizgi, fontlar ve adım adım video eğitimler.",
  keywords: [
    "manga edit",
    "manga çeviri",
    "photoshop manga",
    "dizgi",
    "scanlation",
    "manga rehber",
    "türkçe manga",
    "balon temizleme",
    "manga font",
    "webtoon edit",
  ],
  authors: [{ name: "Mangaruhu.com", url: "https://mangaruhu.com" }],
  creator: "Mangaruhu.com",
  publisher: "Mangaruhu.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mangaruhu.com/manga-rehber/",
    languages: { "tr-TR": "https://mangaruhu.com/manga-rehber/" },
  },
  openGraph: {
    type: "article",
    locale: "tr_TR",
    url: "https://mangaruhu.com/manga-rehber/",
    siteName: "Mangaruhu.com",
    title: "Manga Edit Rehberi — Mangaruhu.com",
    description:
      "Manga edit öğrenmek isteyenler için kapsamlı Türkçe rehber. Adım adım video eğitimler ile Photoshop tekniklerini öğrenin.",
    images: [
      {
        url: "https://mangaruhu.com/og-manga-rehber.jpg",
        width: 1200,
        height: 630,
        alt: "Manga Edit Rehberi — Mangaruhu.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manga Edit Rehberi — Mangaruhu.com",
    description:
      "Manga edit öğrenmek isteyenler için kapsamlı Türkçe rehber.",
    images: ["https://mangaruhu.com/og-manga-rehber.jpg"],
    creator: "@mangaruhu",
    site: "@mangaruhu",
  },
  // verification: { google: "REPLACE_WITH_REAL_TOKEN" }, // Uncomment after Search Console verification
  category: "education",
  classification: "Manga Edit Eğitimi",
  other: {
    "article:author": "Mangaruhu.com",
    "article:section": "Eğitim",
    "article:tag": "manga,edit,photoshop,çeviri",
  },
};

// ── Structured Data ───────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mangaruhu.com/manga-rehber/#webpage",
      url: "https://mangaruhu.com/manga-rehber/",
      name: "Manga Edit Rehberi — Mangaruhu.com",
      description:
        "Manga edit öğrenmek isteyenler için kapsamlı Türkçe rehber.",
      isPartOf: { "@id": "https://mangaruhu.com/#website" },
      inLanguage: "tr-TR",
      dateModified: new Date().toISOString().split("T")[0],
    },
    {
      "@type": "WebSite",
      "@id": "https://mangaruhu.com/#website",
      url: "https://mangaruhu.com",
      name: "Mangaruhu.com",
      publisher: { "@id": "https://mangaruhu.com/#organization" },
      inLanguage: "tr-TR",
    },
    {
      "@type": "Organization",
      "@id": "https://mangaruhu.com/#organization",
      name: "Mangaruhu.com",
      url: "https://mangaruhu.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mangaruhu.com/logo.png",
        width: 200,
        height: 60,
      },
    },
    {
      "@type": "HowTo",
      "@id": "https://mangaruhu.com/manga-rehber/#howto",
      name: "Manga Edit Nasıl Yapılır",
      description:
        "Manga edit öğrenmek isteyenler için adım adım kapsamlı rehber.",
      inLanguage: "tr-TR",
      totalTime: "PT30H",
      supply: [
        { "@type": "HowToSupply", name: "Adobe Photoshop veya GIMP" },
        { "@type": "HowToSupply", name: "Manga görsel dosyaları" },
      ],
      tool: [
        { "@type": "HowToTool", name: "Photoshop" },
        { "@type": "HowToTool", name: "HakuNeko" },
      ],
      step: [
        { "@type": "HowToStep", position: 1, name: "Giriş Seviye Edit Eğitimi", text: "Manga editine sıfırdan başlayanlar için temel kavramlar ve Photoshop tanıtımı.", url: "https://mangaruhu.com/manga-rehber/#egitim-giris" },
        { "@type": "HowToStep", position: 2, name: "Balon Temizleme ve Metin Silme", text: "Spot Healing, Clone Stamp ve Patch araçlarıyla orijinal metin balonlarını temizleme.", url: "https://mangaruhu.com/manga-rehber/#balon-temizleme" },
        { "@type": "HowToStep", position: 3, name: "Giriş Seviye Dizgi", text: "Çevrilmiş metinleri manga balonlarına doğru font ve hizalamayla yerleştirme.", url: "https://mangaruhu.com/manga-rehber/#dizgi-giris" },
        { "@type": "HowToStep", position: 4, name: "Photoshop Pentool Kullanımı", text: "Pentool ile hassas seçim ve kesim işlemleri.", url: "https://mangaruhu.com/manga-rehber/#photoshop-pentool" },
        { "@type": "HowToStep", position: 5, name: "Photoshop Yama Aracı", text: "Büyük alan temizleme için Patch Tool kullanımı.", url: "https://mangaruhu.com/manga-rehber/#photoshop-yama" },
        { "@type": "HowToStep", position: 6, name: "Index Resimler ve Panel Modu", text: "Indexed color mode ile optimize manga dosyası hazırlama.", url: "https://mangaruhu.com/manga-rehber/#photoshop-index-panel" },
        { "@type": "HowToStep", position: 7, name: "Katman Kullanımı", text: "Layer yönetimi, mask ve grup tekniklerini öğrenme.", url: "https://mangaruhu.com/manga-rehber/#katman-kullanimi" },
        { "@type": "HowToStep", position: 8, name: "Manga ve Webtoon İndirme", text: "HakuNeko ve Manga Downloader ile kaynak görselleri indirme.", url: "https://mangaruhu.com/manga-rehber/#manga-webtoon-indirme" },
        { "@type": "HowToStep", position: 9, name: "Perspektif Balonları", text: "Açılı ve perspektifli sayfalarda balon yerleştirme teknikleri.", url: "https://mangaruhu.com/manga-rehber/#perspektif-balonlari" },
        { "@type": "HowToStep", position: 10, name: "Webtoon Temizlik", text: "Uzun format webtoon sayfalarını temizleme ve dizgi.", url: "https://mangaruhu.com/manga-rehber/#webtoon-temizlik" },
        { "@type": "HowToStep", position: 11, name: "İleri Seviye Katman Yönetimi", text: "Profesyonel editörlerin kullandığı ileri katman ve organizasyon teknikleri.", url: "https://mangaruhu.com/manga-rehber/#ileri-katman-teknikleri" },
      ],
      author: {
        "@type": "Organization",
        name: "Mangaruhu.com",
        url: "https://mangaruhu.com",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://mangaruhu.com/manga-rehber/#faqpage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Manga edit için hangi program en iyidir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Profesyonel manga editörleri genellikle Adobe Photoshop kullanır. Başlangıç için GIMP (ücretsiz) veya Clip Studio Paint harika alternatiflerdir.",
          },
        },
        {
          "@type": "Question",
          name: "Hiç deneyimim yok, nereden başlamalıyım?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Video 1'den başlayın: Giriş Seviye Edit Eğitimi. Bu video size temel kavramları öğretecektir.",
          },
        },
        {
          "@type": "Question",
          name: "Bir sayfa editleme ne kadar sürer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yeni başlayanlar için 30-60 dakika/sayfa, orta seviye için 15-30 dakika/sayfa, ileri seviye için 5-15 dakika/sayfa.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mangaruhu.com/manga-rehber/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://mangaruhu.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Manga Edit Rehberi",
          item: "https://mangaruhu.com/manga-rehber/",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//i.ibb.co" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        {/* Font Awesome — preload hint for early discovery */}
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        {/* Load normally — icons are critical for nav/UI */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}