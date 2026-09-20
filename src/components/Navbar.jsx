import React, { useState, useEffect } from 'react'
import { ShieldAlert, Sparkles, Menu, X, Send } from 'lucide-react'
import { profile } from '../data/profile'

export default function Navbar({ activeSection, uvMode, toggleUvMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-navy-950/85 backdrop-blur-md border-b border-cyan-accent/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-navy-800 border border-cyan-accent/40 group-hover:border-cyan-accent transition-all duration-300">
            <ShieldAlert className="w-5 h-5 text-cyan-accent" />
          </div>
          <div>
            <span className="text-lg font-bold font-display tracking-wider text-slate-100 group-hover:text-cyan-accent transition-colors">
              {profile.displayName}
            </span>
            <span className="block text-[10px] font-mono text-cyan-accent/80 tracking-widest uppercase">
              Forensic Sci • 2nd Year student
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-accent text-navy-950 shadow-[0_0_15px_rgba(0,212,255,0.6)] font-bold'
                    : 'text-slate-300 hover:text-cyan-accent hover:bg-navy-800/60'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleUvMode}
            title="Toggle UV highlight mode (visual aid)"
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 ${
              uvMode
                ? 'bg-uv-glow/20 border-uv-glow text-uv-light shadow-[0_0_15px_rgba(139,92,246,0.6)]'
                : 'bg-navy-800 border-slate-700 text-slate-300 hover:border-cyan-accent hover:text-cyan-accent'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${uvMode ? 'animate-spin-slow' : ''}`} />
            <span>{uvMode ? 'UV AID ON' : 'UV AID'}</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-accent to-cyan-dim text-navy-950 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all transform hover:-translate-y-0.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleUvMode}
            className="p-2 rounded-lg bg-navy-800 border border-slate-700 text-cyan-accent"
            aria-label="Toggle UV highlight"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-navy-800 border border-slate-700 text-slate-200 hover:text-cyan-accent"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-cyan-accent/20 backdrop-blur-xl px-4 pt-3 pb-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                  activeSection === link.id
                    ? 'bg-cyan-accent text-navy-950 font-bold'
                    : 'text-slate-300 hover:bg-navy-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-cyan-accent text-navy-950 font-bold text-sm"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
