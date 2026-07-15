// ── Server Components (no hydration cost) ─────────────────────
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TipBox from "@/components/TipBox";
import WarningBox from "@/components/WarningBox";

// ── Client Components — lazy loaded via ClientComponents wrapper ──
import {
  Sidebar,
  ReadingProgress,
  VideoCard,
  ImageZoom,
  FAQ,
  TableOfContents,
  HeadingAnchor,
  ReadingStats,
  PrintButton,
  ThemeToggle,
  ShareButtons,
  ProgressPanel,
  ScrollToTop,
} from "@/components/ClientComponents";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <ReadingProgress />
      <Header />

      <main className="main-content-wrapper">
        <div className="container content-grid">
          <Sidebar />

          <section className="main-article-area" id="main-content">
            <HeadingAnchor />
            <ReadingStats />
            <TableOfContents />
            {/* ===== GİRİŞ ===== */}
            <article className="guide-section" id="giris">
              {/* Hero */}
              <div className="guide-hero">
                <span className="hero-badge">
                  <i className="fas fa-book-open" aria-hidden="true" />
                  Kapsamlı Rehber
                </span>
                <h1>Manga Edit Rehberine<br />Hoş Geldiniz</h1>
                <p className="hero-lead">
                  Manga dünyasına adım atan her okuyucunun, favori serilerini Türkçe okuma isteği oldukça doğal. Ancak
                  her manga resmi olarak yayınlanmayabiliyor. İşte bu noktada <strong>Manga Edit Rehberi</strong> devreye
                  giriyor! Bu rehberde, bir mangayı Japonca veya İngilizceden alıp Türkçe&apos;ye çevirme, balonları
                  düzenleme, efektleri temizleme ve yeniden oluşturma gibi süreçlerin detaylarını bulacaksınız.
                </p>
                <div className="hero-meta">
                  <span className="hero-meta-item">
                    <i className="fas fa-play-circle" aria-hidden="true" />
                    11 Video Eğitim
                  </span>
                  <span className="hero-meta-item">
                    <i className="fas fa-layer-group" aria-hidden="true" />
                    Başlangıç → İleri Seviye
                  </span>
                  <span className="hero-meta-item">
                    <i className="fas fa-clock" aria-hidden="true" />
                    Kapsamlı İçerik
                  </span>
                  <PrintButton />
                </div>
              </div>

              <h2 className="subsection-title" id="manga-edit-nedir">
                Manga Edit Nedir?
              </h2>
              <p>
                Manga edit, temel olarak bir manga sayfasındaki orijinal metinleri silip, yeni çevrilmiş metinleri
                ekleyerek sayfanın okunabilir ve anlaşılır hale getirilmesi sürecidir. Bu süreç, sadece metin
                değişimiyle kalmaz; bazen arka plan detaylarının onarılmasını, ses efektlerinin (SFX) Türkçe&apos;ye
                uyarlanmasını ve hatta sayfanın genel kalitesinin iyileştirilmesini de içerir. Manga edit, hem teknik
                bilgi hem de sanatsal bir bakış açısı gerektiren keyifli bir uğraştır.
              </p>

              <ImageZoom
                src="https://i.ibb.co/VpBQ7bZr/Ba-l-ks-z-1.jpg"
                alt="Manga sayfasında balon temizleme işlemi öncesi ve sonrası karşılaştırması - editlenmiş manga örneği"
                caption="Örnek: Bir manga sayfasının 'önce' ve 'sonra' hali. Metinlerin temizlenip yeniden yerleştirilmesi."
              />

              <TipBox icon="fa-lightbulb">
                <strong>Başlarken Küçük Bir İpucu:</strong> Manga edit&apos;e ilk kez başlıyorsanız, favori ve
                okumaktan keyif aldığınız bir seriden birkaç sayfa seçerek başlayın. Bu, öğrenme sürecini daha keyifli
                hale getirecektir.
              </TipBox>
            </article>

            {/* ===== REHBER VİDEOLARI ===== */}
            <article className="guide-section" id="rehber-videolari">
              <h2 className="section-title">Rehber Videoları: Adım Adım Eğitimler</h2>
              <p>
                Görsel öğrenmeyi sevenler için özel olarak hazırlanmış bu bölümde, manga edit sürecinin temel adımlarını
                adım adım YouTube videoları eşliğinde takip edebilirsiniz. Her video, bir konuyu detaylı bir şekilde
                ele alacaktır.
              </p>

              {/* 1 */}
              <h2 className="subsection-title" id="egitim-giris">
                1. Bölüm: Yeni Başlayanlar İçin Giriş Seviye Edit Eğitimi
              </h2>
              <p>
                Bu video, manga editine sıfırdan başlayanlar için temel kavramları, gerekli ayarlamaları ve ilk adımları
                anlatıyor. Photoshop veya tercih ettiğiniz başka bir yazılıma başlangıç niteliğindedir.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/sOzUHU8R-BE"
                title="Video 1: Yeni Başlayanlar için Giriş Seviye Manga Edit Eğitimi"
                caption="Video 1: Manga Edit'e İlk Adım: Giriş Seviye Temeller."
              />

              {/* 2 */}
              <h2 className="subsection-title" id="balon-temizleme">
                2. Bölüm: Balon Temizleme ve Metin Silme Teknikleri
              </h2>
              <p>
                Manga edit&apos;in en önemli adımlarından biri, orijinal metin balonlarını temizlemektir. Bu video,
                Photoshop&apos;ta spot healing brush (nokta düzeltme fırçası), clone stamp (klonlama damgası) gibi
                araçları kullanarak balonları nasıl temizleyeceğinizi ve orijinal metinleri nasıl tamamen yok
                edeceğinizi gösteriyor.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/UTh_lVYhm-A"
                title="Video 2: Balon Temizleme ve Metin Silme Teknikleri"
                caption="Video 2: Manga Balonlarını Profesyonelce Temizleme Yöntemleri."
              />

              {/* 3 */}
              <h2 className="subsection-title" id="dizgi-giris">
                3. Bölüm: Giriş Seviye Dizgi Nasıl Yapılır
              </h2>
              <p>
                Çevrilmiş metinleri manga panellerine doğru ve estetik bir şekilde yerleştirme sanatıdır dizgi. Bu
                videoda, temel dizgi prensipleri, metin kutuları oluşturma ve hizalama gibi konular ele alınıyor.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/EH5PcE77qDw"
                title="Video 3: Giriş Seviye Dizgi - Metin Yerleştirme Teknikleri"
                caption="Video 3: Manga Dizgisine İlk Adım: Temel Metin Yerleştirme."
              />

              {/* 4 */}
              <h2 className="subsection-title" id="photoshop-pentool">
                4. Bölüm: Photoshop Pentool Kullanımı
              </h2>
              <p>
                Photoshop&apos;ta Pentool, karmaşık şekilleri çizmek, seçmek veya maskelemek için güçlü bir araçtır.
                Bu video, Pentool&apos;u kullanarak hassas çizimler yapmayı, balonları yeniden çizmeyi veya karmaşık
                arka planları temizlemeyi öğrenmenize yardımcı olacak.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/MdOIIPRGyww"
                title="Video 4: Photoshop Pentool Kullanımı ve Hassas Çizim Teknikleri"
                caption="Video 4: Photoshop'ta Pentool Ustalığı: Edit için Hassas Çizimler."
              />

              {/* 5 */}
              <h2 className="subsection-title" id="photoshop-yama">
                5. Bölüm: Photoshop Yama Aracı Kullanımı
              </h2>
              <p>
                Yama Aracı (Patch Tool), özellikle büyük ve karmaşık alanlardaki kusurları temizlemek için harikadır.
                Bu videoda, yama aracını kullanarak büyük metin alanlarını veya bozuk çizimleri nasıl hızlı ve etkili
                bir şekilde düzelteceğinizi öğreneceksiniz.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/S8W5S9dQP-I"
                title="Video 5: Photoshop Yama Aracı (Patch Tool) Kullanımı"
                caption="Video 5: Photoshop Yama Aracı: Büyük Alanları Hızlıca Temizleme."
              />

              {/* 6 */}
              <h2 className="subsection-title" id="photoshop-index-panel">
                6. Bölüm: Photoshop Index Resimler ve Panel Modu
              </h2>
              <p>
                Manga dosyaları bazen &apos;indexed color&apos; modunda olabilir, bu da düzenlemeyi zorlaştırır. Bu
                video, index resimlerle nasıl çalışılacağını ve Photoshop&apos;un &apos;panel&apos; (pencere düzeni)
                modlarını edit iş akışınızı hızlandırmak için nasıl kullanacağınızı açıklıyor.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/LrP2H3u6tdE"
                title="Video 6: Photoshop Index Resimler ve Panel Modu Eğitimi"
                caption="Video 6: Photoshop'ta Index Renkler ve Panel Düzenleri."
              />

              {/* 7 */}
              <h2 className="subsection-title" id="katman-kullanimi">
                7. Bölüm: Katman Kullanımı
              </h2>
              <p>
                Photoshop&apos;un temel taşlarından biri katmanlardır. Bu videoda, katmanları nasıl oluşturacağınızı,
                düzenleyeceğinizi, birleştireceğinizi ve farklı katman modlarını kullanarak editlerinizde esneklik ve
                profesyonellik katacağınızı öğreneceksiniz. Özellikle balonlar ve SFX&apos;ler için katman yönetimi
                hayati öneme sahiptir.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/jmfWLoN22-k"
                title="Video 7: Photoshop Katman Kullanımı ve Yönetimi"
                caption="Video 7: Photoshop Katmanlarını Anlama ve Etkili Kullanım."
              />

              {/* 8 */}
              <h2 className="subsection-title" id="manga-webtoon-indirme">
                8. Bölüm: Manga/Webtoon Bölümleri Nasıl İndirilir?
              </h2>
              <p>
                Edit yapmaya başlamadan önce, yüksek kaliteli kaynak dosyalarına ihtiyacınız olacak. Bu bölümde, manga
                ve webtoon bölümlerini güvenli ve verimli bir şekilde indirebileceğiniz yöntemler açıklanmaktadır.
              </p>

              <h3 className="subsection-title" id="hakuneko-indirme">
                8.1. Hakuneko ile İndirme
              </h3>
              <p>
                Hakuneko, birçok kaynaktan manga ve webtoon indirmek için popüler bir araçtır. Bu video,
                Hakuneko&apos;yu kurmayı, kullanmayı ve istediğiniz serileri toplu olarak bilgisayarınıza kaydetmeyi
                adım adım gösteriyor.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/JoHLqUGS954"
                title="Video 8.1: Hakuneko ile Manga ve Webtoon İndirme Rehberi"
                caption="Video 8.1: Hakuneko ile Manga ve Webtoon İndirme Rehberi."
              />

              <h3 className="subsection-title" id="manga-downloader-indirme">
                8.2. Manga Downloader ile İndirme
              </h3>
              <p>
                Manga Downloader, alternatif bir indirme programıdır. Bu video, Manga Downloader&apos;ın kurulumunu ve
                çeşitli manga sitelerinden nasıl hızlıca bölüm indirebileceğinizi açıklıyor.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/ZnwF1x384RA"
                title="Video 8.2: Manga Downloader Programı Kullanım Rehberi"
                caption="Video 8.2: Manga Downloader ile Kolayca Bölüm İndirme."
              />

              {/* 9 */}
              <h2 className="subsection-title" id="perspektif-balonlari">
                9. Bölüm: Perspektif Balonları
              </h2>
              <p>
                Bazı durumlarda, metin balonları panelin perspektifine uygun olarak yerleştirilmelidir. Bu video,
                Photoshop&apos;ta perspektif araçlarını ve dönüştürme seçeneklerini kullanarak balonları sayfanın
                derinliğine ve açısına göre nasıl ayarlayacağınızı öğretiyor, böylece daha doğal ve profesyonel bir
                görünüm elde edebilirsiniz.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/RfjQY-8XFpo"
                title="Video 9: Perspektif Balonları Oluşturma ve Kullanımı"
                caption="Video 9: Manga Editinde Perspektif Balonları Oluşturma."
              />

              {/* 10 */}
              <h2 className="subsection-title" id="webtoon-temizlik">
                10. Bölüm: Webtoon Bölüm Temizlik Videoları
              </h2>
              <p>
                Webtoonlar genellikle uzun, tek parça görsellerden oluşur ve temizleme süreçleri mangalardan farklılık
                gösterebilir. Bu video, webtoon bölümlerindeki metinleri ve çizimleri temizlemek için özel teknikleri
                ve ipuçlarını sunuyor.
              </p>
              <VideoCard
                src="https://www.youtube.com/embed/h2OQcLzexgs"
                title="Video 10: Webtoon Bölüm Temizleme Teknikleri ve İpuçları"
                caption="Video 10: Webtoon Temizliği: Uzun Görsellerde Edit Teknikleri."
              />

              {/* 11 */}
              <h2
                className="subsection-title"
                id="ileri-katman-teknikleri"
                data-level="advanced"
                data-topic="photoshop"
                data-duration="long"
              >
                11. Bölüm: İleri Seviye Katman Yönetimi ve Profesyonel Teknikler
              </h2>
              <p>
                Bu güncel videoda, manga editinde katman yönetiminin en gelişmiş tekniklerini öğreneceksiniz. Karmaşık
                projelerde katmanları nasıl organize edeceğiniz, katman maskelerini profesyonelce nasıl kullanacağınız
                ve çalışma akışınızı nasıl optimize edeceğiniz konularında derinlemesine bilgi alacaksınız. Profesyonel
                editörlerin kullandığı gizli teknikleri ve ipuçlarını keşfedin!
              </p>
              <WarningBox icon="fa-exclamation-circle">
                <strong>Not:</strong> Bu bölüm için henüz özel bir eğitim videosu hazırlanmamıştır. Video
                7&apos;deki temel katman kullanımını tamamladıktan sonra pratik yaparak ileri seviye teknikleri kendiniz
                geliştirebilirsiniz.
              </WarningBox>
              <TipBox icon="fa-star">
                <strong>Profesyonel İpucu:</strong> Bu ileri seviye teknikleri uygulamadan önce temel katman kullanımını
                iyice kavradığınızdan emin olun. Karmaşık katman yapıları, doğru yönetilmediğinde projeyi yavaşlatabilir.
              </TipBox>
              <TipBox icon="fa-video">
                <strong>İpucu:</strong> Videoları izlerken eş zamanlı olarak kendi programınızda pratik yapmaya çalışın.
                El alışkanlığı kazanmak, edit hızınızı artıracaktır.
              </TipBox>
              <TipBox icon="fa-lightbulb">
                <strong>Bilgilendirme:</strong> Bunun gibi daha birçok eğitim videosu için <strong>Gİ SAMA</strong>{" "}
                youtube kanalına bakabilirsin.{" "}
                <a href="https://www.youtube.com/@gisama315">Kanala gitmek için tıkla.</a>
              </TipBox>
            </article>

            {/* ===== ÇEVİRİ & TİPOGRAFİ ===== */}
            <article className="guide-section" id="cevirme-tipografi">
              <h2 className="section-title">Çeviri &amp; Tipografi: Metinlerinizi Yerleştirme Sanatı</h2>
              <p>
                Manga edit sürecinin en sanatsal ve aynı zamanda teknik yönlerinden biri, çevrilmiş metinleri doğru
                fontlarla, okunaklı ve estetik bir şekilde balonlara yerleştirmektir. İyi yapılmış bir dizgi, okuyucunun
                deneyimini doğrudan etkiler ve mangayı orijinaline sadık kalarak daha keyifli hale getirir.
              </p>

              <h2 className="subsection-title" id="font-secimi">
                Font Seçimi ve Kaynakları: Doğru Karakteri Yakalamak
              </h2>
              <p>
                Manga balonlarında kullanılacak fontlar, genellikle <strong>sans-serif</strong> ve net okunabilirliğe
                sahip olmalıdır. Ancak, serinin ruh haline göre (komedi, korku, aksiyon vb.) bazen daha
                &quot;sanatsal&quot; fontlar da kullanılabilir. Önemli olan, metnin balonda boğulmaması ve göz
                yormamasıdır. Türkçe karakter desteği olan fontları tercih etmek, ileride yaşanabilecek sorunları önler.
              </p>

              <div className="resources-section">
                <h3>En Çok Kullanılan Manga Edit Fontları (Alternatifleriyle)</h3>
                <ul>
                  <li>
                    <a
                      href="https://dosya.co/goph4c5nlod3/Mangalarda_Kullan%C4%B1lan_Genel_Fontlar.rar.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kullanılan Genel Fontlar <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Manga ve webtoonlarda kullanılan genel fontlar)</span>
                  </li>
                  <li>
                    <a
                      href="https://dosya.co/vrj0xxfj1iqj/Scans_Tr_Fontlari.zip.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alternatif Fontlar <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Alternatif olarak kullanabileceğiniz fontlar)</span>
                  </li>
                </ul>
                <h3>Resmi ve Güvenilir Font İndirme Siteleri</h3>
                <ul>
                  <li>
                    <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">
                      Google Fonts <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Çok çeşitli, yüksek kaliteli ve tamamen ücretsiz fontlar)</span>
                  </li>
                  <li>
                    <a href="https://www.dafont.com/" target="_blank" rel="noopener noreferrer">
                      DaFont <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Fantastik, komik, korku gibi kategorilerde zengin seçenekler, lisanslara dikkat!)</span>
                  </li>
                  <li>
                    <a href="https://www.fontsquirrel.com/" target="_blank" rel="noopener noreferrer">
                      Font Squirrel <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Ticari kullanıma uygun ücretsiz fontlar, lisans bilgileri net)</span>
                  </li>
                  <li>
                    <a href="https://www.blambot.com/" target="_blank" rel="noopener noreferrer">
                      Blambot <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Özellikle çizgi roman ve manga için tasarlanmış profesyonel fontlar, ücretli seçenekler de var)</span>
                  </li>
                  <li>
                    <a href="https://fontlibrary.org/" target="_blank" rel="noopener noreferrer">
                      Font Library <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Açık kaynaklı ve ücretsiz fontların büyük bir koleksiyonu)</span>
                  </li>
                </ul>
              </div>

              <WarningBox>
                <strong>Font Lisanslarına Dikkat:</strong> İnternet sitelerinden font indirirken lisans bilgilerini
                kontrol ettiğinizden emin olun. Bazı fontlar sadece kişisel kullanım için ücretsiz olabilir.
              </WarningBox>
              <WarningBox>
                <strong>Virüslere Dikkat:</strong> Burdan indirdiğiniz tüm kaynakların <strong>Virus Total</strong>{" "}
                testi yapılmıştır. Yine de dosyaları indirdikten sonra açmadan önce tekrardan virüs total testi
                yapmanızı öneririz. İndirdiğiniz kaynaklardan virus bulaşması sonucu hiçbir sorumluluk bize ait
                değildir.{" "}
                <a href="https://www.virustotal.com/">Testi Yapmak için tıkla</a>
              </WarningBox>

              <h2 className="subsection-title" id="balon-yerlesimi">
                Balon Yerleşimi ve Metin Hizalama
              </h2>
              <p>
                Metni balona yerleştirirken, balonun şeklini ve boyutunu göz önünde bulundurun. Metnin balon içinde
                dengeli durduğundan, kenarlara çok fazla yapışmadığından ve okuma akışını bozmadığından emin olun.
                Genellikle metin, balonun ortasına hizalanır. Uzun cümleleri birkaç satıra bölmek, okunabilirliği
                artırır. Çok fazla boşluk bırakmaktan veya metni balona sığdırmak için aşırı küçültmekten kaçının.
              </p>
              <ImageZoom
                src="https://i.ibb.co/RjJ5HhJ/zdd.jpg"
                alt="Manga balonunda metnin doğru hizalanmış ve dengeli yerleştirilmiş örneği - tipografi dizgi gösterimi"
                caption="Örnek: Metnin balon içinde doğru hizalanmış ve boşluk bırakılmış hali."
              />

              <h2 className="subsection-title" id="sfx-edit">
                SFX (Ses Efekti) Editleri
              </h2>
              <p>
                SFX&apos;ler, mangadaki ses efektleridir (örn. &quot;BOOM&quot;, &quot;CRASH&quot;). Bunları temizlemek
                ve Türkçe karşılıklarını yerleştirmek, dizginin önemli bir parçasıdır. SFX&apos;ler genellikle orijinal
                manganın çizim stilini taklit eden fontlarla veya özel çizimlerle yapılır. Bu, manganın atmosferini
                korumak için kritik öneme sahiptir. Bazen orijinal SFX&apos;i tamamen temizleyip yeni bir Türkçe SFX
                çizmek gerekebilir, bazen ise üzerine uygun bir fontla yazmak yeterli olabilir.
              </p>
              <TipBox icon="fa-headphones">
                <strong>SFX İpucu:</strong> SFX editlerinizde yaratıcı olmaktan çekinmeyin! Manganın genel tarzına ve
                verilen efektin şiddetine uygun fontlar ve renkler seçmek, okuyucunun deneyimini zenginleştirir.
              </TipBox>
              <TipBox icon="fa-lightbulb">
                <strong>SFX Edit Eğitimi:</strong> SFX nasıl yapılır gibi sorularınız varsa yine gi sama youtube
                kanalından ilgili eğitim videolarına bakabilirsiniz.{" "}
                <a href="https://www.youtube.com/@gisama315/videos">KANALA GİTMEK İÇİN TIKLA.</a>
              </TipBox>

              <h2 className="subsection-title" id="cevirinin-onemi">
                Çevirinin Manga Editine Etkisi
              </h2>
              <p>
                Dizginin kalitesi, doğrudan çevirinin kalitesiyle orantılıdır. Akıcı, doğal ve doğru bir çeviri, edit
                sürecini kolaylaştırır ve sonuç ürünün profesyonelliğini artırır. Çeviri yaparken, metnin balonlara
                sığabilecek uzunlukta olmasına ve okuma akışını bozmayacak şekilde olmasına dikkat edilmelidir.
                Gerekirse çevirmenle iş birliği yaparak metinlerde küçük ayarlamalar yapılabilir.
              </p>
            </article>

            {/* ===== KAYNAKLAR ===== */}
            <article className="guide-section" id="kaynaklar">
              <h2 className="section-title">Kaynaklar ve Linkler: Edit Aracınızın Kurulumu</h2>
              <p>
                Manga edit yolculuğunuzda size yardımcı olacak temel yazılımları ve faydalı kaynakları burada
                bulabilirsiniz. Doğru araçlarla başlamak, sürecinizi çok daha verimli hale getirecektir.
              </p>

              <h2 className="subsection-title">Gerekli Yazılımlar</h2>
              <p>Manga edit için birkaç popüler yazılım bulunmaktadır. İşte en çok tercih edilenler:</p>

              <div className="resources-section">
                <h3>Önerilen Yazılımlar</h3>
                <ul>
                  <li>
                    <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
                      Adobe Photoshop <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Endüstri standardı, güçlü özelliklere sahip ücretli yazılım)</span>
                  </li>
                  <li>
                    <a href="https://www.clipstudio.net/en/" target="_blank" rel="noopener noreferrer">
                      Clip Studio Paint <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Manga ve çizgi roman çizimi için özel, ücretli yazılım)</span>
                  </li>
                  <li>
                    <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer">
                      GIMP <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Ücretsiz ve açık kaynaklı, iyi bir başlangıç alternatifi)</span>
                  </li>
                  <li>
                    <a
                      href="https://github.com/manga-download/hakuneko/releases/tag/v6.1.7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HakuNeko <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Ücretsiz ve açık kaynaklı, manga-webtoon indirme yazılımı)</span>
                  </li>
                  <li>
                    <a href="https://redsquirrel87.com/manga-downloader" target="_blank" rel="noopener noreferrer">
                      Manga Downloader <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Manga-webtoon indirme yazılımı)</span>
                  </li>
                  <li>
                    <a
                      href="https://www.gezginler.net/indir/photoscape.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PhotoScape <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Manga-Webtoon bölüm görselleri birleştirme-ayırma yazılımı)</span>
                  </li>
                  <li>
                    <a
                      href="https://www.gezginler.net/indir/xnconvert.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      XnConvert <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Görsel uzantısı değiştirme yazılımı.)</span>
                  </li>
                </ul>

                <h3>Korsan Yazılımlar</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.fullprogramlarindir.net/adobe-photoshop-2025-indir-full.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adobe Photoshop <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Eğer bilgisayarınız eski ise daha düşük sürüm indirebilirsiniz.)</span>
                  </li>
                </ul>
              </div>

              <WarningBox>
                <strong>Lisans ve Kullanım:</strong> Yazılımları edinirken lisanslama koşullarına dikkat ediniz.
                Ücretsiz ve açık kaynaklı alternatifler başlangıç için harika seçeneklerdir. Maddi durumunuz iyiyse
                lütfen korsan kullanmayınız.
              </WarningBox>
              <WarningBox>
                <strong>Virüslere Dikkat:</strong> Burdan indirdiğiniz tüm kaynakların <strong>Virus Total</strong>{" "}
                testi yapılmıştır. Yine de dosyaları indirdikten sonra açmadan önce tekrardan virüs total testi
                yapmanızı öneririz. İndirdiğiniz kaynaklardan virus bulaşması sonucu hiçbir sorumluluk bize ait
                değildir.{" "}
                <a href="https://www.virustotal.com/">Testi Yapmak için tıkla</a>
              </WarningBox>
            </article>

            {/* ===== SSS ===== */}
            <article
              className="guide-section"
              id="sss-faq"
              data-level="beginner"
              data-topic="faq"
              data-duration="short"
            >
              <h2 className="section-title">Sık Sorulan Sorular (SSS)</h2>
              <p>Manga edit hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.</p>
              <FAQ />
            </article>

            {/* ===== TOPLULUK ===== */}
            <article
              className="guide-section"
              id="topluluk-geri-bildirim"
              data-level="beginner"
              data-topic="community"
              data-duration="short"
            >
              <h2 className="section-title">Mangaruhu.com Topluluğu ve Geri Bildirim</h2>
              <p>
                Manga edit yolculuğunuzda yalnız değilsiniz! Bu rehberi daha iyi hale getirmek için sizin geri
                bildirimleriniz ve deneyimleriniz çok değerli. Ayrıca, diğer editörlerle bağlantı kurabileceğiniz ve
                sorular sorabileceğiniz platformları da burada bulabilirsiniz.
              </p>

              <h2 className="subsection-title">Geri Bildirim Gönderin</h2>
              <p>
                Rehber hakkında düşüncelerinizi, önerilerinizi veya eksik gördüğünüz yerleri bizimle paylaşmaktan
                çekinmeyin. Her geri bildirim, rehberimizi daha iyi bir hale getirmemize yardımcı olacaktır.
              </p>
              <TipBox icon="fa-comment-dots">
                <strong>Geri Bildirim Formu:</strong> Yakında burada basit bir geri bildirim formu bulabilirsiniz.
                Şimdilik{" "}
                <a href="https://discord.gg/huYJ8hu7KV" target="_blank" rel="noopener noreferrer">
                  İletişim
                </a>{" "}
                sayfamızdan bize ulaşabilirsiniz.
              </TipBox>

              <h2 className="subsection-title">Manga Edit Toplulukları</h2>
              <p>
                Deneyimlerinizi paylaşabileceğiniz, sorular sorabileceğiniz ve diğer manga editörleriyle
                tanışabileceğiniz bazı platformlar:
              </p>
              <div className="resources-section">
                <h3>Önerilen Topluluklar</h3>
                <ul>
                  <li>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                      Discord&apos;da Manga Edit Sunucuları <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Çeşitli manga/çeviri topluluklarına katılın)</span>
                  </li>
                  <li>
                    <a href="https://www.reddit.com/r/manga" target="_blank" rel="noopener noreferrer">
                      Reddit r/manga ve r/scanlation <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Büyük manga ve scanlation toplulukları)</span>
                  </li>
                  <li>
                    <a href="https://discord.gg/ynzXznhaY3" target="_blank" rel="noopener noreferrer">
                      Gi Sama Discord Sunucusu <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Edit öğretme üzerine kurulmuş bir sunucu)</span>
                  </li>
                  <li>
                    <a href="https://discord.gg/wbdEfDZKTY" target="_blank" rel="noopener noreferrer">
                      Global Edit Öğretim Sunucusu <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Global editörler discord sunucusu)</span>
                  </li>
                  <li>
                    <a href="https://discord.gg/href7VVMNd" target="_blank" rel="noopener noreferrer">
                      Global Font Sunucusu <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(İstediğiniz türde font bulabileceğiniz bir sunucu)</span>
                  </li>
                  <li>
                    <a
                      href="https://www.korsanfan.com/konu/manga-duezenlemesi.8309"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Edit doğru yanlışları derlemesi <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                    <span>(Manga editine dayalı doğru ve yanlışlar derlemesi)</span>
                  </li>
                </ul>
              </div>
              <p>
                Unutmayın, her büyük manga editörü bir yerden başlamıştır. Bol pratik ve diğer editörlerle etkileşim,
                sizi her zaman daha ileriye taşıyacaktır. Başarılar dileriz!
              </p>
            </article>

            {/* Sayfalama */}
            <div className="pagination-buttons">
              <a href="#giris" className="prev-button">
                <i className="fas fa-arrow-left" aria-hidden="true"></i> Giriş
              </a>
              <a href="#kaynaklar" className="next-button">
                Kaynaklar ve Linkler <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Floating UI */}
      <ScrollToTop />
      <ProgressPanel />
      <ThemeToggle />
      <ShareButtons />
    </>
  );
}