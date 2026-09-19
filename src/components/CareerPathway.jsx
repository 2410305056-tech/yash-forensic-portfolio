import React from 'react'
import { MapPinned, GraduationCap } from 'lucide-react'
import { pathway } from '../data/standards'

export default function CareerPathway() {
  return (
    <section id="pathway" className="py-24 relative bg-navy-900 bg-cyber-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <MapPinned className="w-3.5 h-3.5" />
            <span>HARYANA / INDIA — STUDENT TRACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Where this degree <span className="text-cyan-glow">actually goes</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-sm sm:text-base">
            Geeta University, Panipat sits next to the Haryana forensic ecosystem. A 3D site does not appoint you. Named labs, FACT, and a defensible notebook do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pathway.map((col) => (
            <article key={col.when} className="glass-panel p-6 rounded-2xl border border-cyan-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-accent" />
                <h3 className="font-display font-bold text-white">{col.when}</h3>
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-slate-300 leading-relaxed pl-3 border-l border-cyan-accent/30">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-sm text-slate-300 space-y-2">
          <p>
            <span className="text-cyan-accent font-mono text-xs">GEOGRAPHY · </span>
            State FSL Haryana is at Madhuban (Karnal), short range from Panipat. CFSL Chandigarh is the next federal-style stop. NFSU (including the Delhi campus, former LNJN NICFS) is the national teaching/testing node.
          </p>
          <p>
            <span className="text-cyan-accent font-mono text-xs">LAW · </span>
            From 1 July 2024: BNS, BNSS, BSA. Expert opinion BSA s.39. Electronic records BSA s.63. Scientific expert reports BNSS s.329. Quote the new book first.
          </p>
          <p>
            <span className="text-cyan-accent font-mono text-xs">QUALITY · </span>
            Accredited case labs run ISO/IEC 17025 with NABL. Interns observe; they do not “conform” the lab. Learn uncertainty, blanks, and proficiency testing vocabulary before you learn another particle effect.
          </p>
        </div>
      </div>
    </section>
  )
}
