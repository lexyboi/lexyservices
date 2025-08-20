"use client"
import { useState } from "react"

export default function HakkimizdaPage() {
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
          <h1 className="text-4xl font-bold text-foreground animate-glow text-center">Lexy Services Hakkında</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-8 animate-bounce-subtle">
              Lexy Services, bir çok işe yarayacak toolu paylaşan bir platformdur. Fakat arkasında kim var?
            </p>
          </div>

          <div className="animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-8 text-foreground animate-glow text-center">
              Lexy Services'ın arkasında olanlar:
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 bg-white/5 rounded-lg animate-scale-pulse">
                <h3 className="text-xl font-semibold text-foreground mb-2">lexyy</h3>
                <p className="text-muted-foreground">Discord: lexiboii</p>
                <p className="text-sm text-muted-foreground mt-2">Kurucu, Geliştirici & Tasarımcı</p>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-lg animate-scale-pulse">
                <h3 className="text-xl font-semibold text-foreground mb-2">𖤐 Şahin</h3>
                <p className="text-muted-foreground">Discord: asmsmskam</p>
                <p className="text-sm text-muted-foreground mt-2">Geliştirici & Yardımcı</p>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-lg animate-scale-pulse">
                <h3 className="text-xl font-semibold text-foreground mb-2">Demon</h3>
                <p className="text-muted-foreground">Discord: demondev00</p>
                <p className="text-sm text-muted-foreground mt-2">Geliştirici & Yardımcı</p>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-lg animate-scale-pulse">
                <h3 className="text-xl font-semibold text-foreground mb-2">Umut</h3>
                <p className="text-muted-foreground">Discord: umutsgang</p>
                <p className="text-sm text-muted-foreground mt-2">Satıcı & Destek</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in text-center">
            <h2 className="text-2xl font-bold mb-6 text-foreground animate-glow">Misyonumuz</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Toollar kullanmak isteyenler için tool yapıyoruz, bu toollarla çoğu şeyi kolaylaştırarak işimizi
              yapıyoruz.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-foreground animate-glow">Vizyonumuz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Amacımız kodlamayı basitleştiren bazı toollar yapmak, örneğin: Token Tool, terminalden kodlama bilgisi
              gerektirmeden discord botunuzu tokenını girerekten çalıştırmak için bir proje.
            </p>
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
