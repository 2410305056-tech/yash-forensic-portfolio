import React from 'react'
import { BookOpen, Hash, AlertTriangle, CheckCircle2, Download } from 'lucide-react'
import { methodCards, conclusionScale, bsa63Checklist, DEMO_EXHIBIT } from '../data/standards'

export default function MethodDiscipline() {
  return (
    <section id="method" className="py-24 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 text-xs font-mono mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>HOW A SENIOR EXAMINER READS SCIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Method, limits, <span className="text-cyan-glow">integrity</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-sm sm:text-base">
            Thirty years of casework teach one rule: the limitation paragraph is the report. Below is the discipline this portfolio is built on — teaching standard, not expert testimony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {methodCards.map((card) => (
            <article key={card.id} className="glass-panel p-6 rounded-2xl border border-cyan-accent/20">
              <h3 className="text-lg font-bold font-display text-white mb-3">{card.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-display font-bold text-cyan-accent uppercase tracking-wide mb-4">
              Conclusion scale (friction ridge / comparison work)
            </h3>
            <ul className="space-y-3">
              {conclusionScale.map((row) => (
                <li key={row.code} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-12 h-8 rounded-lg bg-navy-900 border border-cyan-accent/40 text-cyan-accent font-mono text-xs font-bold flex items-center justify-center">
                    {row.code}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-100">{row.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{row.use}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-display font-bold text-uv-glow uppercase tracking-wide mb-4">
              BSA 2023 s.63 — practice checklist (SAMPLE)
            </h3>
            <ul className="space-y-2">
              {bsa63Checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-uv-glow shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] font-mono text-slate-500">
              Case law lineage: Anvar P.V. (2014) and Arjun Panditrao (2020) under IEA s.65B. BSA s.63 is the current section. This list is study notes, not a filed certificate.
            </p>
          </div>
        </div>

        <div className="mt-8 glass-panel p-6 rounded-2xl border border-cyan-accent/30 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent shrink-0">
              <Hash className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-mono text-cyan-accent uppercase tracking-wider">Verifiable training exhibit</p>
              <p className="text-sm text-slate-200 mt-1">
                {DEMO_EXHIBIT.algorithm} · {DEMO_EXHIBIT.filename}
              </p>
              <p className="text-[11px] font-mono text-slate-400 break-all mt-1">{DEMO_EXHIBIT.hash}</p>
              <p className="text-[11px] text-slate-500 mt-2">{DEMO_EXHIBIT.note}</p>
            </div>
          </div>
          <a
            href={DEMO_EXHIBIT.url}
            download
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-accent text-navy-950 text-xs font-bold font-display shrink-0"
          >
            <Download className="w-4 h-4" />
            Download &amp; re-hash
          </a>
        </div>

        <p className="mt-6 text-center text-[11px] font-mono text-slate-500 flex items-center justify-center gap-2">
          <BookOpen className="w-3.5 h-3.5" />
          Not a substitute for DFSS manuals, NABL 17025 procedures, or a reporting officer’s SOP.
        </p>
      </div>
    </section>
  )
}
