import React, { useState, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { evidenceDetails } from '../data/profile'

const CrimeSceneCanvas = lazy(() => import('./3d/CrimeSceneCanvas'))

export default function CrimeScene3DSection({ uvMode = false }) {
  const [selectedEvidenceId, setSelectedEvidenceId] = useState('01')
  const activeEvidence = evidenceDetails[selectedEvidenceId]
  const shortLabel = {
    '01': 'Fingerprint',
    '02': 'Toxicology',
    '03': 'Cyber',
    '04': 'Ballistics',
  }

  return (
    <section id="crime-scene" className="py-24 relative bg-navy-950 border-t border-b border-cyan-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDUCATIONAL SIMULATION — NOT A REAL CASEFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Virtual training lab <span className="text-cyan-glow">&amp; exhibit inspector</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Rotate the 3D lab and inspect markers #01–#04. These are teaching aids. Legal sections are cited for study, not as an expert report.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="w-full h-[450px] sm:h-[550px] rounded-2xl border border-cyan-accent/20 bg-navy-950" />}>
              <CrimeSceneCanvas
                selectedId={selectedEvidenceId}
                onSelectEvidence={(id) => setSelectedEvidenceId(id)}
                uvMode={uvMode}
              />
            </Suspense>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.keys(evidenceDetails).map((key) => {
                const item = evidenceDetails[key]
                const isSelected = selectedEvidenceId === key
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedEvidenceId(key)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 ${
                      isSelected
                        ? 'bg-navy-800 border-cyan-accent shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                        : 'bg-navy-900/60 border-slate-800 hover:border-slate-700 hover:bg-navy-850'
                    }`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent font-bold font-mono text-xs flex items-center justify-center">
                      #{key}
                    </span>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-semibold text-slate-200 truncate">
                        {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                      </span>
                      <span className="block text-[10px] text-slate-400 font-mono">{shortLabel[key]}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvidence.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 rounded-2xl border border-cyan-accent/30 relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-cyan-accent/20 border border-cyan-accent text-cyan-accent font-display font-extrabold text-base flex items-center justify-center">
                      #{activeEvidence.id}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">{activeEvidence.title}</h3>
                      <span className="text-xs font-mono text-cyan-accent/90">{activeEvidence.category}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300 font-sans">
                  <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                    <span className="block text-[10px] font-mono text-cyan-accent uppercase tracking-wider mb-1">
                      Location &amp; method
                    </span>
                    <p className="font-medium text-slate-200">{activeEvidence.methodology}</p>
                    <span className="block mt-1 text-[11px] text-slate-400 font-mono">
                      {activeEvidence.location}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                    <span className="block text-[10px] font-mono text-uv-glow uppercase tracking-wider mb-1">
                      Teaching notes
                    </span>
                    <p className="font-semibold text-slate-100">{activeEvidence.findings}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                    <span className="block text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-2">
                      Metrics (demo only)
                    </span>
                    <div className="space-y-1 font-mono text-[11px]">
                      {activeEvidence.spectralData.map((spec, i) => {
                        const parts = spec.split(':')
                        return (
                          <div key={i} className="flex items-center justify-between border-b border-slate-800/60 pb-1 last:border-b-0">
                            <span className="text-slate-400">{parts[0]}</span>
                            <span className="text-cyan-accent font-bold">{parts.slice(1).join(':') || '—'}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                    <span className="block text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                      Statute cited for study
                    </span>
                    <p className="font-mono text-[11px] text-emerald-300">{activeEvidence.legalAdmissibility}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] font-mono text-cyan-accent uppercase tracking-widest">
                        Simulated chain of custody
                      </span>
                      <span className="text-[11px] font-mono font-bold text-slate-200">
                        {activeEvidence.chainOfCustody}
                      </span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-cyan-accent" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
