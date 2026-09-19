import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, BookOpen, CheckCircle2 } from 'lucide-react'
import { projectsList } from '../data/profile'

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null)

  return (
    <section id="projects" className="py-24 relative bg-navy-900 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC / LAB TRAINING — NOT PUBLISHED CASEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Forensic research <span className="text-cyan-glow">projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Undergraduate work at Geeta University. Findings are class or supervised-lab results until you attach notebooks and faculty names.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl glass-panel-hover overflow-hidden flex flex-col justify-between border border-cyan-accent/20 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent">
                    {project.imageBadge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-accent transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-uv-glow mb-4">{project.category}</p>
                <p className="text-xs text-slate-300 line-clamp-3 mb-6 font-sans">{project.summary}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded text-[10px] font-mono bg-navy-800 text-slate-300 border border-slate-700">
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-navy-800 text-cyan-accent">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="px-6 py-4 bg-navy-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Geeta University</span>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-accent hover:text-white transition-colors"
                >
                  <span>FULL NOTE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-navy-900 border border-cyan-accent/40 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-navy-800 text-slate-400 hover:text-cyan-accent"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block px-3 py-1 rounded bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent font-mono text-xs mb-3">
                {activeModalProject.academicInstitution}
              </span>
              <h3 className="text-2xl font-bold font-display text-white mb-2 pr-10">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-mono text-uv-glow mb-6">
                {activeModalProject.category} • {activeModalProject.year}
              </p>

              <div className="space-y-6 text-xs text-slate-300 font-sans">
                <div>
                  <h4 className="text-sm font-bold font-display text-cyan-accent mb-2 uppercase tracking-wide">
                    Abstract
                  </h4>
                  <p className="leading-relaxed bg-navy-950 p-4 rounded-xl border border-slate-800">
                    {activeModalProject.summary}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-uv-glow mb-2 uppercase tracking-wide">
                    Method (as taught / supervised)
                  </h4>
                  <pre className="whitespace-pre-wrap font-sans bg-navy-950 p-4 rounded-xl border border-slate-800 text-slate-300 leading-relaxed">
                    {activeModalProject.fullMethodology}
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-amber-400 mb-2 uppercase tracking-wide">
                    Notes / findings
                  </h4>
                  <ul className="space-y-2 bg-navy-950 p-4 rounded-xl border border-slate-800">
                    {activeModalProject.keyFindings.map((finding) => (
                      <li key={finding} className="flex items-start gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-slate-200 mb-2 uppercase tracking-wide">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-navy-800 text-cyan-accent font-mono border border-cyan-accent/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-xl font-bold font-display text-xs bg-cyan-accent text-navy-950 hover:bg-cyan-glow transition-all"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
