import React from 'react'
import { User } from 'lucide-react'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-navy-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            About <span className="text-cyan-glow">Me</span>
          </h2>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-accent/20 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
          {profile.about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <p className="text-xs font-mono text-cyan-accent pt-2">
            {profile.location} · {profile.email}
          </p>
        </div>
      </div>
    </section>
  )
}
