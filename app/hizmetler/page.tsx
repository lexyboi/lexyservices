"use client"
import { useState } from "react"

export default function HizmetlerPage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white">
      {isNavbarVisible && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a href="/" className="text-white hover:text-white/80 transition-colors">
                Home
              </a>
              <a href="/hakkimizda" className="text-white hover:text-white/80 transition-colors">
                Hakkımızda
              </a>
              <a href="/hizmetler" className="text-white hover:text-white/80 transition-colors font-semibold">
                Hizmetler
              </a>
              <a href="/iletisim" className="text-white hover:text-white/80 transition-colors">
                İletişim
              </a>
            </div>
            <button
              onClick={() => setIsNavbarVisible(false)}
              className="text-white hover:text-white/80 transition-colors text-xl"
            >
              ^
            </button>
          </div>
        </nav>
      )}

      {!isNavbarVisible && (
        <button
          onClick={() => setIsNavbarVisible(true)}
          className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded hover:bg-white/20 transition-colors"
        >
          Menu
        </button>
      )}

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">Hizmetlerimiz</h1>
            <div className="w-24 h-1 bg-white mx-auto animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 animate-fade-in">
            <div className="text-center space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Eğer hizmetlerimize bakmak istiyorsanız, aşağıdaki discord botunu yetkilendirip bir sunucuda ve bir
                kanalda
                <span className="text-white font-semibold"> /hizmetler </span>
                komutunu kullanıp hizmetlerimize bakabilirsiniz, onu da yapmak istemiyorsanız o zaman komutu botun
                DM'ine yazabilirsiniz.
              </p>

              <div className="pt-8">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1407367129371775147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-subtle"
                >
                  Bu metine tıklayarak davet edin!
                </a>
              </div>

              <div className="pt-8 text-sm text-gray-400">
                <p>Bot davet edildikten sonra sunucunuzda /hizmetler komutunu kullanabilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
