import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası - Science Bites",
  description: "Science Bites Gizlilik Politikası ve KVKK Aydınlatma Metni",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold hover:text-purple-400 transition-colors"
          >
            Science Bites
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Ana Sayfa
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1 py-12 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-8 text-center">
            Gizlilik Politikası
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <p className="text-gray-400 text-sm text-center mb-12">
              Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
            </p>

            {/* Giriş */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Giriş</h2>
              <p>
                Science Bites (&quot;biz&quot;, &quot;bizim&quot; veya &quot;Şirket&quot;) olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasını önemsiyoruz. Bu Gizlilik Politikası, Science Bites mobil uygulaması ve web sitesi aracılığıyla topladığımız bilgileri ve bu bilgileri nasıl kullandığımızı açıklamaktadır.
              </p>
            </section>

            {/* Toplanan Veriler */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. Toplanan Veriler</h2>
              <p>Hizmetlerimizi kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kişisel Bilgiler:</strong> Ad, e-posta adresi (hesap oluşturduğunuzda)</li>
                <li><strong>Kullanım Verileri:</strong> Uygulama içi aktiviteler, tamamlanan dersler, ilerleme durumu</li>
                <li><strong>Cihaz Bilgileri:</strong> Cihaz türü, işletim sistemi, uygulama versiyonu</li>
                <li><strong>Analitik Veriler:</strong> Uygulama performansı ve kullanım istatistikleri</li>
              </ul>
            </section>

            {/* Verilerin Kullanımı */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. Verilerin Kullanımı</h2>
              <p>Topladığımız verileri aşağıdaki amaçlarla kullanırız:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmetlerimizi sunmak ve geliştirmek</li>
                <li>Kişiselleştirilmiş öğrenme deneyimi sağlamak</li>
                <li>İlerlemenizi takip etmek ve kaydetmek</li>
                <li>Teknik sorunları tespit etmek ve çözmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>
            </section>

            {/* Veri Güvenliği */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. Verileriniz şifreli bağlantılar üzerinden iletilir ve güvenli sunucularda saklanır. Ancak, internet üzerinden yapılan hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
              </p>
            </section>

            {/* Üçüncü Taraflar */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Üçüncü Taraf Hizmetler</h2>
              <p>Aşağıdaki üçüncü taraf hizmetlerini kullanabiliriz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Firebase:</strong> Kimlik doğrulama ve veri depolama</li>
                <li><strong>Google Analytics:</strong> Kullanım analizi</li>
                <li><strong>RevenueCat:</strong> Abonelik yönetimi</li>
              </ul>
              <p>
                Bu hizmet sağlayıcılar kendi gizlilik politikalarına tabidir.
              </p>
            </section>

            {/* Çerezler */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Çerezler</h2>
              <p>
                Web sitemiz, deneyiminizi iyileştirmek için çerezler kullanabilir. Çerezler, tarayıcınız tarafından cihazınızda saklanan küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
              </p>
            </section>

            {/* KVKK Hakları */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">7. KVKK Kapsamındaki Haklarınız</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                <li>Silinmesini veya yok edilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              </ul>
            </section>

            {/* Çocukların Gizliliği */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">8. Çocukların Gizliliği</h2>
              <p>
                Science Bites, çocuklar için tasarlanmış eğitici bir uygulamadır. 13 yaşından küçük çocukların kişisel verilerini ebeveyn izni olmadan bilerek toplamıyoruz. Ebeveynler, çocuklarının verilerinin silinmesini talep edebilir.
              </p>
            </section>

            {/* Değişiklikler */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">9. Politika Değişiklikleri</h2>
              <p>
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda sizi uygulama içi bildirim veya e-posta yoluyla bilgilendireceğiz. Politikanın en güncel halini bu sayfada bulabilirsiniz.
              </p>
            </section>

            {/* İletişim */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">10. İletişim</h2>
              <p>
                Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 mt-4">
                <p><strong>E-posta:</strong> info@sciencebites.app</p>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Science Bites. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
