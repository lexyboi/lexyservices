"use client"

import Link from "next/link"
import { useState } from "react"

export default function IletisimPage() {
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      {isNavOpen && (
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 z-50 animate-fade-in">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex space-x-6">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/hakkimizda" className="text-white hover:text-gray-300 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/hizmetler" className="text-white hover:text-gray-300 transition-colors">
                Hizmetler
              </Link>
              <Link href="/iletisim" className="text-white hover:text-gray-300 transition-colors font-semibold">
                İletişim
              </Link>
            </div>
            <button
              onClick={() => setIsNavOpen(false)}
              className="text-white hover:text-gray-300 transition-colors text-xl"
            >
              ^
            </button>
          </div>
        </nav>
      )}

      {/* Menu Button */}
      {!isNavOpen && (
        <button
          onClick={() => setIsNavOpen(true)}
          className="fixed top-4 right-4 bg-white/10 text-white px-3 py-1 rounded hover:bg-white/20 transition-colors z-50 animate-fade-in"
        >
          Menu
        </button>
      )}

      {/* Main Content */}
      <main className={`${isNavOpen ? "pt-16" : "pt-0"} transition-all duration-300`}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 animate-float">İletişim</h1>
            <p className="text-xl text-gray-300 animate-fade-in-delay">
              Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-fade-in hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">
                  <svg className="w-12 h-12 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">E-posta</h3>
                <p className="text-gray-300 mb-4">Sorularınız, önerileriniz için:</p>
                <div className="text-lg font-mono bg-black/30 px-4 py-2 rounded border border-white/20">
                  lexyservicess@proton.me
                </div>
              </div>
            </div>

            {/* Discord Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-fade-in-delay hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">
                  <svg className="w-12 h-12 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Discord</h3>
                <p className="text-gray-300 mb-4">Hızlı destek ve anlık iletişim için:</p>
                <div className="text-lg font-mono bg-black/30 px-4 py-2 rounded border border-white/20">
                  @lexyy (lexiboii)
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 animate-fade-in-delay-2">
            <h3 className="text-2xl font-semibold mb-4 text-center">İletişim Bilgileri</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Yanıt Süresi:</strong> E-posta mesajlarına genellikle 1 gün veya 2 gün içinde yanıt
                verebiliyoruz.
              </p>
              <p>
                <strong>Discord:</strong> Discord üzerinden daha hızlı yanıt alabilirsiniz.
              </p>
              <p>
                <strong>Dil Desteği:</strong> Türkçe ve İngilizce dillerinde destek sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Lexy Services</p>
        </div>
      </footer>
    </div>
  )
}
