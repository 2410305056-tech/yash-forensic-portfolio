import React from 'react'
import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-navy-900 bg-cyber-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Academic <span className="text-cyan-glow">background</span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <article key={item.id} className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-accent/20">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">{item.program}</h3>
                  <p className="text-sm text-slate-300 mt-1">{item.institution}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-cyan-accent border border-cyan-accent/40 bg-cyan-accent/10">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>
              <p className="text-[11px] font-mono text-uv-glow mb-4">{item.status}</p>
              <ul className="space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="text-sm text-slate-300 pl-3 border-l border-cyan-accent/30">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
