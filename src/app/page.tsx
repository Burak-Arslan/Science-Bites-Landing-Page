import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold">
            Science Bites
          </div>
          <div className="flex gap-4 md:gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <span className="text-4xl md:text-5xl">🔬</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Yakında Sizlerle
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
            Bilimi eğlenceli ve kolay bir şekilde keşfedin.
            <span className="text-white font-medium"> Science Bites</span> yakında geliyor!
          </p>

          {/* CTA / Email signup placeholder */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:info@sciencebites.app"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              Bize Ulaşın
            </a>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Mobil Uygulama</h3>
              <p className="text-sm text-gray-400">iOS ve Android için</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Kolay Öğrenme</h3>
              <p className="text-sm text-gray-400">Bite-size içerikler</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Eğlenceli</h3>
              <p className="text-sm text-gray-400">Gamification ile</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Science Bites. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Gizlilik Politikası
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
