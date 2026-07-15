/**
 * Merkezi bölüm metadata kaynağı.
 * CommandPalette, TableOfContents, ReadingStats, Search — hepsi buradan okur.
 */

export interface Section {
  id: string;
  title: string;
  level: "Başlangıç" | "Orta" | "İleri";
  topic: string;
  keywords?: string;
}

export const SECTIONS: Section[] = [
  { id: "giris", title: "Giriş: Manga Edit Rehberine Hoş Geldiniz", level: "Başlangıç", topic: "Giriş" },
  { id: "manga-edit-nedir", title: "Manga Edit Nedir?", level: "Başlangıç", topic: "Giriş", keywords: "tanım açıklama" },
  { id: "rehber-videolari", title: "Rehber Videoları: Adım Adım Eğitimler", level: "Başlangıç", topic: "Videolar" },
  { id: "egitim-giris", title: "1. Yeni Başlayanlar İçin Giriş Seviye Edit Eğitimi", level: "Başlangıç", topic: "Videolar", keywords: "temel ilk başlangıç sıfır" },
  { id: "balon-temizleme", title: "2. Balon Temizleme ve Metin Silme Teknikleri", level: "Başlangıç", topic: "Temizleme", keywords: "spot healing clone stamp silme" },
  { id: "dizgi-giris", title: "3. Giriş Seviye Dizgi Nasıl Yapılır", level: "Başlangıç", topic: "Tipografi", keywords: "metin yerleştirme hizalama" },
  { id: "photoshop-pentool", title: "4. Photoshop Pentool Kullanımı", level: "Orta", topic: "Photoshop", keywords: "kalem araç seçim çizim" },
  { id: "photoshop-yama", title: "5. Photoshop Yama Aracı Kullanımı", level: "Orta", topic: "Photoshop", keywords: "patch tool büyük alan" },
  { id: "photoshop-index-panel", title: "6. Photoshop Index Resimler ve Panel Modu", level: "Orta", topic: "Photoshop", keywords: "indexed color mod panel" },
  { id: "katman-kullanimi", title: "7. Katman Kullanımı", level: "Orta", topic: "Photoshop", keywords: "layer yönetim mask" },
  { id: "manga-webtoon-indirme", title: "8. Manga/Webtoon Bölümleri Nasıl İndirilir?", level: "Başlangıç", topic: "İndirme", keywords: "download kaynak" },
  { id: "hakuneko-indirme", title: "8.1. Hakuneko ile İndirme", level: "Başlangıç", topic: "İndirme", keywords: "hakuneko program" },
  { id: "manga-downloader-indirme", title: "8.2. Manga Downloader ile İndirme", level: "Başlangıç", topic: "İndirme" },
  { id: "perspektif-balonlari", title: "9. Perspektif Balonları", level: "İleri", topic: "Photoshop", keywords: "açı eğik dönüştür" },
  { id: "webtoon-temizlik", title: "10. Webtoon Bölüm Temizlik Videoları", level: "Orta", topic: "Temizleme", keywords: "uzun görsel" },
  { id: "ileri-katman-teknikleri", title: "11. İleri Seviye Katman Yönetimi ve Profesyonel Teknikler", level: "İleri", topic: "Photoshop", keywords: "profesyonel organize" },
  { id: "cevirme-tipografi", title: "Çeviri & Tipografi: Metinlerinizi Yerleştirme Sanatı", level: "Orta", topic: "Tipografi" },
  { id: "font-secimi", title: "Font Seçimi ve Kaynakları", level: "Başlangıç", topic: "Tipografi", keywords: "wild words anime ace blambot" },
  { id: "balon-yerlesimi", title: "Balon Yerleşimi ve Metin Hizalama", level: "Başlangıç", topic: "Tipografi", keywords: "hizalama merkez boşluk" },
  { id: "sfx-edit", title: "SFX (Ses Efekti) Editleri", level: "Orta", topic: "Tipografi", keywords: "ses efekti onomatope" },
  { id: "cevirinin-onemi", title: "Çevirinin Manga Editine Etkisi", level: "Başlangıç", topic: "Tipografi", keywords: "japonca ingilizce kalite" },
  { id: "kaynaklar", title: "Kaynaklar ve Linkler", level: "Başlangıç", topic: "Kaynaklar", keywords: "photoshop gimp hakuneko indirme program" },
  { id: "sss-faq", title: "Sık Sorulan Sorular (SSS)", level: "Başlangıç", topic: "SSS", keywords: "soru cevap faq" },
  { id: "topluluk-geri-bildirim", title: "Topluluk & Geri Bildirim", level: "Başlangıç", topic: "Topluluk", keywords: "discord reddit iletişim" },
];

/** Hızlı id→title lookup için Record */
export const SECTION_TITLE_MAP: Record<string, string> = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s.title])
);

/** Bölümü id ile bul */
export function getSectionById(id: string): Section | undefined {
  return SECTIONS.find((s) => s.id === id);
}

/** Tam metin araması (title + keywords) */
export function searchSections(query: string): Section[] {
  const q = query.toLowerCase().trim();
  if (!q) return SECTIONS.slice(0, 8);
  return SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.topic.toLowerCase().includes(q) ||
      (s.keywords ?? "").toLowerCase().includes(q)
  ).slice(0, 10);
}