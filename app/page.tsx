"use client"
import { useState } from "react"

export default function HomePage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  return (
    <div className="min-h-screen bg-background">
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
              <a href="/hizmetler" className="text-white hover:text-white/80 transition-colors">
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
          Tab'ı Aç
        </button>
      )}

      <header className="container mx-auto px-4 py-8 animate-slide-in-left mt-16">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold text-foreground animate-glow">Lexy Services</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center animate-slide-up">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-foreground animate-float animate-scale-pulse text-center">
            Lexy Services
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto animate-fade-in animate-bounce-subtle text-center">
            Basit ve etkili çözümler sunan platform
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 animate-slide-in-right">
        <div className="text-center max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 animate-glow">İletişim</h3>
          <p className="text-muted-foreground mb-8 animate-bounce-subtle">Sorularınız için bizimle iletişime geçin</p>
          <div className="space-y-4">
            <p className="text-foreground">lexyservicess@proton.me</p>
            <p className="text-foreground">@lexyy (lexyboii)</p>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-8 animate-fade-in animate-scale-pulse">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Lexy Services</p>
        </div>
      </footer>
    </div>
  )
}
