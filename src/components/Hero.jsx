import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Compass, FileText, ArrowRight, MapPin, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'

const HeroParticles = lazy(() => import('./3d/HeroParticles'))

export default function Hero() {
  const taglines = useMemo(() => profile.taglines, [])
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = taglines[index]
    let timer

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % taglines.length)
    } else {
      const speed = isDeleting ? 30 : 60
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index, taglines])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cyber-grid">
      <Suspense fallback={null}>
        <HeroParticles />
      </Suspense>
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 border border-cyan-accent/40 text-cyan-accent backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
        >
          <GraduationCap className="w-4 h-4 text-cyan-accent" />
          <span className="text-xs font-semibold tracking-wide font-mono">
            {profile.role} • {profile.university}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-4 leading-tight"
        >
          YASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-cyan-glow to-uv-light drop-shadow-[0_0_25px_rgba(0,212,255,0.6)]">SIWACH</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-14 sm:h-12 flex items-center justify-center mb-8 max-w-2xl"
        >
          <p className="text-base sm:text-xl font-mono text-slate-300">
            <span className="text-cyan-accent">&gt; </span>
            <span>{displayText}</span>
            <span className="animate-ping font-bold text-cyan-accent">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm text-slate-300"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-slate-700/60">
            <ShieldCheck className="w-4 h-4 text-cyan-accent" /> Laboratory intern (trainee)
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-slate-700/60">
            <FileText className="w-4 h-4 text-uv-glow" /> Legal documentation (academic)
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800/60 border border-slate-700/60">
            <MapPin className="w-4 h-4 text-amber-400" /> {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-cyan-accent via-cyan-glow to-cyan-dim text-navy-950 shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:shadow-[0_0_45px_rgba(0,212,255,0.8)] hover:scale-105 transition-all duration-300"
          >
            <Compass className="w-5 h-5" />
            <span>ABOUT ME</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-sm bg-navy-800/90 border border-cyan-accent/30 text-slate-200 hover:border-cyan-accent hover:text-cyan-accent hover:bg-navy-800 backdrop-blur-md transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-cyan-accent" />
            <span>VIEW PROJECTS</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl glass-panel border border-cyan-accent/20"
        >
          {profile.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center p-3 ${i < profile.stats.length - 1 ? 'sm:border-r border-slate-800/60' : ''}`}
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-cyan-accent">{stat.value}</span>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
