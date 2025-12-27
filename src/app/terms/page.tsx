import Link from "next/link";

export const metadata = {
  title: "Kullanım Koşulları - Science Bites",
  description: "Science Bites Kullanım Koşulları ve Şartları",
};

export default function Terms() {
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
            Kullanım Koşulları
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <p className="text-gray-400 text-sm text-center mb-12">
              Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
            </p>

            {/* Kabul */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Koşulların Kabulü</h2>
              <p>
                Science Bites uygulamasını veya web sitesini kullanarak, bu Kullanım Koşullarını kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayınız.
              </p>
            </section>

            {/* Hizmet Tanımı */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. Hizmet Tanımı</h2>
              <p>
                Science Bites, bilimi eğlenceli ve erişilebilir kılmayı amaçlayan bir eğitim platformudur. Uygulamamız:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>İnteraktif bilim dersleri sunar</li>
                <li>Deney ve aktivite önerileri sağlar</li>
                <li>İlerleme takibi ve başarı sistemi içerir</li>
                <li>Yaşa uygun içerikler barındırır</li>
              </ul>
            </section>

            {/* Hesap */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. Kullanıcı Hesabı</h2>
              <p>
                Bazı özelliklerimizi kullanmak için hesap oluşturmanız gerekebilir. Hesabınızla ilgili:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Doğru ve güncel bilgi vermeniz gerekmektedir</li>
                <li>Hesap güvenliğinizden siz sorumlusunuz</li>
                <li>Hesabınızla yapılan tüm işlemlerden siz sorumlusunuz</li>
                <li>Hesabınızı başkalarıyla paylaşmamalısınız</li>
              </ul>
            </section>

            {/* Fikri Mülkiyet */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Fikri Mülkiyet</h2>
              <p>
                Science Bites uygulaması, içerikleri, tasarımı, logoları ve tüm materyalleri Science Bites&apos;a aittir ve telif hakkı ile korunmaktadır. İzinsiz kopyalama, dağıtma veya ticari kullanım yasaktır.
              </p>
            </section>

            {/* Kullanım Kuralları */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Kabul Edilebilir Kullanım</h2>
              <p>Hizmetlerimizi kullanırken aşağıdakileri yapmayı kabul edersiniz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yasalara uygun davranmak</li>
                <li>Başkalarının haklarına saygı göstermek</li>
                <li>Sisteme zarar verecek faaliyetlerden kaçınmak</li>
                <li>İçerikleri izinsiz paylaşmamak</li>
                <li>Uygulamayı tersine mühendislik yapmamak</li>
              </ul>
            </section>

            {/* Abonelik */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Abonelik ve Ödemeler</h2>
              <p>
                Premium özelliklere erişim için abonelik satın alabilirsiniz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Abonelikler App Store veya Google Play üzerinden işlenir</li>
                <li>Otomatik yenileme özelliği mevcuttur</li>
                <li>İptal işlemleri platform kurallarına tabidir</li>
                <li>İadeler ilgili platform politikalarına göre değerlendirilir</li>
              </ul>
            </section>

            {/* Sorumluluk Reddi */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">7. Sorumluluk Sınırı</h2>
              <p>
                Science Bites, eğitim amaçlı içerik sunmaktadır. Uygulamadaki deneyler ebeveyn gözetiminde yapılmalıdır. İçeriklerin doğruluğu için çaba gösterilmekle birlikte, olası hatalardan doğan zararlardan sorumluluk kabul edilmez.
              </p>
            </section>

            {/* Değişiklikler */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">8. Değişiklikler</h2>
              <p>
                Bu Kullanım Koşullarını önceden bildirmeksizin değiştirme hakkını saklı tutarız. Önemli değişiklikler uygulama içinde duyurulacaktır. Değişikliklerden sonra hizmeti kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            {/* Fesih */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">9. Hesap Feshi</h2>
              <p>
                Bu koşulların ihlali durumunda hesabınızı askıya alma veya sonlandırma hakkını saklı tutarız. Hesabınızı istediğiniz zaman silebilirsiniz.
              </p>
            </section>

            {/* Uygulanacak Hukuk */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">10. Uygulanacak Hukuk</h2>
              <p>
                Bu Kullanım Koşulları, Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklar Türkiye mahkemelerinde çözümlenecektir.
              </p>
            </section>

            {/* İletişim */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">11. İletişim</h2>
              <p>
                Kullanım koşullarıyla ilgili sorularınız için:
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
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
