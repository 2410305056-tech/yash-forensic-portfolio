import React, { useState, useEffect } from 'react'
import { ShieldAlert, ArrowUp, Clock } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour12: false,
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 py-12 text-xs font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-accent/10 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-bold font-display text-white tracking-wider">
                {profile.displayName}
              </span>
              <span className="block text-[10px] font-mono text-cyan-accent">
                {profile.role} • {profile.university}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-slate-300">
            <a href="#crime-scene" className="hover:text-cyan-accent transition-colors">3D Lab</a>
            <a href="#experience" className="hover:text-cyan-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-accent transition-colors">Projects</a>
            <a href="#method" className="hover:text-cyan-accent transition-colors">Method</a>
            <a href="#pathway" className="hover:text-cyan-accent transition-colors">Path</a>
            <a href="#contact" className="hover:text-cyan-accent transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 font-mono text-[11px] text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-accent" />
              <span>{time || '— IST'}</span>
            </div>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-cyan-accent hover:border-cyan-accent transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-2">
          <p>© {new Date().getFullYear()} {profile.name}. Student portfolio — educational content only.</p>
          <p>React 18 • Three.js • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
