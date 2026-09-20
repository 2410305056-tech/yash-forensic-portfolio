import React from 'react'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/profile'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-navy-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS AND ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Certifications &amp; <span className="text-cyan-glow">achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm">
            Internships and work I can stand behind. Named certificates will be added when letterheads are confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((item) => (
            <article key={item.id} className="glass-panel p-6 rounded-2xl border border-cyan-accent/20 flex flex-col">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                {item.kind}
              </span>
              <h3 className="text-lg font-bold font-display text-white mb-2">{item.title}</h3>
              <p className="text-xs font-mono text-cyan-accent mb-1">{item.issuer}</p>
              <p className="text-[11px] font-mono text-slate-500 mb-4">{item.period}</p>
              <p className="text-sm text-slate-300 flex-1">{item.detail}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-accent hover:text-white"
                >
                  View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
