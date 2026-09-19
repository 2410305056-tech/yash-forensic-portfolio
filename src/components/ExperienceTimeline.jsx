import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldAlert, Scale } from 'lucide-react'
import { experiences, profile } from '../data/profile'

const ICONS = { ShieldAlert, Scale }

export default function ExperienceTimeline() {
  const orgFor = (exp) => {
    if (exp.id === 'rat' && profile.internship1OrgExact) return profile.internship1OrgExact
    if (exp.id === 'legal' && profile.internship2OrgExact) return profile.internship2OrgExact
    return exp.organizationFallback
  }

  const supervisorFor = (exp) => {
    if (exp.id === 'rat') return profile.internship1Supervisor
    if (exp.id === 'legal') return profile.internship2Supervisor
    return ''
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.35 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="experience" className="py-24 relative bg-navy-900 bg-cyber-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-uv-glow/10 border border-uv-glow/30 text-uv-glow text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SUPERVISED TRAINING — NOT SIGNED CASEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-uv-glow">timeline</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Trainee placements. Exact letterhead names appear once you confirm them.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-accent via-uv-glow to-cyan-accent -translate-x-1/2 shadow-[0_0_15px_rgba(0,212,255,0.6)]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              const IconComp = ICONS[exp.icon] || ShieldAlert
              const supervisor = supervisorFor(exp)

              return (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-navy-950 border-2 border-cyan-accent text-cyan-accent shadow-[0_0_20px_rgba(0,212,255,0.8)]">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="w-full md:w-[calc(50%-2.5rem)] ml-10 md:ml-0">
                    <div className="glass-panel p-6 rounded-2xl glass-panel-hover relative group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-cyan-accent">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">{orgFor(exp)}</p>
                      {supervisor ? (
                        <p className="text-xs text-slate-400 mt-0.5">Supervisor: {supervisor}</p>
                      ) : (
                        <p className="text-xs text-slate-500 mt-0.5 italic">Supervisor name pending</p>
                      )}

                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2 mb-5">
                        {exp.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.skillsLearned.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-navy-800 border border-slate-700/60 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
