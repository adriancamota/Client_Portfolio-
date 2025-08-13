'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-violet-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-center h-16 relative">
                {/* Logo + Mobile menu (left) */}
                <div className="absolute left-0 flex items-center gap-3">
                    <button
                      aria-label="Toggle menu"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="md:hidden text-violet-200 hover:text-violet-400 focus:outline-none"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                      </svg>
                    </button>
                    <h1 className="text-2xl font-bold">
                      <span className="text-violet-400">My</span>Portfolio
                    </h1>
                  </div>

                 {/* Desktop Navigation - Centered */}
                 <nav className="hidden md:flex space-x-8">
             <a href="#home" className="text-violet-100/80 hover:text-white transition-colors duration-200">
               Home
             </a>
             <a href="#about" className="text-violet-100/80 hover:text-white transition-colors duration-200">
               About
             </a>
             <a href="#services" className="text-violet-100/80 hover:text-white transition-colors duration-200">
               Services
             </a>
             <a href="#portfolio" className="text-violet-100/80 hover:text-white transition-colors duration-200">
               Portfolio
             </a>
             <a href="#contact" className="text-violet-100/80 hover:text-white transition-colors duration-200">
               Contact
             </a>
           </nav>

            
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu Panel */}
            <div className="md:hidden fixed top-16 left-4 right-4 z-50">
              <div className="glass rounded-xl ring-1 ring-violet-900/30 shadow-2xl p-2">
                <nav className="flex flex-col">
                  <a
                    href="#home"
                    className="px-4 py-3 rounded-lg text-violet-100 hover:bg-violet-600/15 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="px-4 py-3 rounded-lg text-violet-100 hover:bg-violet-600/15 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="px-4 py-3 rounded-lg text-violet-100 hover:bg-violet-600/15 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#portfolio"
                    className="px-4 py-3 rounded-lg text-violet-100 hover:bg-violet-600/15 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-3 rounded-lg text-violet-100 hover:bg-violet-600/15 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                  
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
