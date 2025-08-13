export default function Hero() {
  return (
         <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="glow-center pointer-events-none select-none" aria-hidden>
        <div className="blob"></div>
      </div>
      <div className="hero-grid pointer-events-none select-none" aria-hidden></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-violet-100 mb-6 animate-fade-up" style={{animationDelay: '.05s'}}>
            Bringing Your
            <span className="block text-transparent bg-clip-text violet-gradient">
              Vision to Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-violet-200/90 mb-8 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '.15s'}}>
            Hi I'm Frances! I do video editing and graphic design services that transform your ideas into stunning visual content
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{animationDelay: '.25s'}}>
            <a
              href="#portfolio"
              className="violet-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg btn-shine animate-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-violet-500 text-violet-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-violet-600 hover:text-white transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          <div className="mt-14 animate-fade-up" style={{animationDelay: '.35s'}}>
            <div className="scroll-indicator" aria-hidden></div>
          </div>
        </div>
        

      </div>
    </section>
  )
}

