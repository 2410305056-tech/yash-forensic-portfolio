import React from 'react'
import { motion } from 'framer-motion'
import { Fingerprint, TestTube2, Scale, Microscope, Code2, Sparkles, CheckCircle2 } from 'lucide-react'
import { skillCategories } from '../data/profile'

const ICONS = { Fingerprint, TestTube2, Scale, Microscope, Code2 }

const levelStyle = {
  Course: 'bg-slate-700 text-slate-200',
  Lab: 'bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40',
  Demo: 'bg-uv-glow/20 text-uv-light border border-uv-glow/40',
  Internship: 'bg-amber-400/20 text-amber-300 border border-amber-400/40',
}

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-24 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRAINING LEVELS — NOT PERCENTAGE SCORES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Forensic core <span className="text-cyan-glow">competencies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Course = theory. Lab = supervised practical. Demo = instrument shown. No self-scored 90% bars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = ICONS[category.icon] || Fingerprint
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover border ${category.borderColor} relative group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-navy-900 border border-slate-700/60 ${category.accentColor}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-accent transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {category.skills.length} modules
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mb-6 font-sans">{category.description}</p>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs gap-3">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${category.accentColor}`} />
                          {skill.name}
                        </span>
                        <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold ${levelStyle[skill.level] || levelStyle.Course}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono pl-5">{skill.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
