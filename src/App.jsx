import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import CrimeScene3DSection from './components/CrimeScene3DSection'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsGrid from './components/SkillsGrid'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import MethodDiscipline from './components/MethodDiscipline'
import CareerPathway from './components/CareerPathway'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ShieldCheck } from 'lucide-react'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [uvMode, setUvMode] = useState(false)
  const [showToast, setShowToast] = useState(true)

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'crime-scene', 'experience', 'skills', 'projects', 'certifications', 'method', 'pathway', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen bg-navy-900 text-slate-100 transition-colors duration-500 ${uvMode ? 'uv-mode' : ''}`}>
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm glass-panel p-4 rounded-2xl border border-cyan-accent/40 shadow-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-accent/20 text-cyan-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-bold font-display text-white">
                Educational simulation
              </span>
              <span className="block text-[10px] font-mono text-cyan-accent">
                3D exhibits are training aids — not real case files
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-slate-400 hover:text-white text-xs font-bold font-mono px-2 py-1 rounded bg-navy-800"
            aria-label="Dismiss notice"
          >
            ✕
          </button>
        </div>
      )}

      <Navbar
        activeSection={activeSection}
        uvMode={uvMode}
        toggleUvMode={() => setUvMode((v) => !v)}
      />

      <main>
        <Hero />
        <About />
        <Education />
        <SkillsGrid />
        <Projects />
        <Certifications />
        <CrimeScene3DSection uvMode={uvMode} />
        <ExperienceTimeline />
        <MethodDiscipline />
        <CareerPathway />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
