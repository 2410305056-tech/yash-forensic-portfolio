import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Send, CheckCircle2, Copy, Phone } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Forensic science enquiry',
    message: '',
  })
  const [copied, setCopied] = useState(false)
  const [openedMail, setOpenedMail] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Forensic science enquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.organization || '—'}\n\n${formData.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setOpenedMail(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Get In <span className="text-cyan-glow">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Open to supervised lab internships, academic collaboration, and documented training opportunities.
            This form opens your email app — nothing is stored on a server.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl glass-panel-hover border border-cyan-accent/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <span className="block text-[10px] font-mono text-cyan-accent uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <p className="text-sm sm:text-base font-bold font-mono text-slate-100 truncate">
                    {profile.email}
                  </p>
                  <button
                    onClick={copyEmail}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-accent hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied' : 'Copy email'}</span>
                  </button>
                </div>
              </div>
            </div>

            {profile.linkedin ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-6 rounded-2xl glass-panel-hover border border-uv-glow/30 block group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-uv-glow/10 border border-uv-glow/40 text-uv-glow shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-uv-glow uppercase tracking-wider mb-1">
                      LinkedIn
                    </span>
                    <p className="text-base font-bold font-display text-slate-100 group-hover:text-cyan-accent transition-colors">
                      {profile.name} • Forensic Science student
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-1">Open profile</p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 opacity-80">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-navy-800 border border-slate-700 text-slate-400 shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                      LinkedIn
                    </span>
                    <p className="text-sm font-bold font-display text-slate-300">
                      Profile URL not added yet
                    </p>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      Send your LinkedIn link to have it published here
                    </p>
                  </div>
                </div>
              </div>
            )}

            {profile.phone ? (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-accent/10 border border-cyan-accent/40 text-cyan-accent shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-cyan-accent uppercase tracking-wider mb-1">
                      Phone
                    </span>
                    <p className="text-sm font-bold font-mono text-slate-100">{profile.phone}</p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/40 text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                    Location &amp; university
                  </span>
                  <p className="text-sm font-bold font-display text-slate-100">{profile.university}</p>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    {profile.department} • {profile.role}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono text-slate-400">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                className="block text-center py-3 rounded-xl bg-navy-800 border border-cyan-accent/30 text-cyan-accent text-xs font-bold font-display hover:border-cyan-accent"
              >
                Download CV (PDF)
              </a>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-accent/30">
              <h3 className="text-xl font-bold font-display text-white mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-accent" />
                <span>Send a message</span>
              </h3>
              <p className="text-[11px] font-mono text-slate-400 mb-6">
                Submitting opens your email client addressed to {profile.email}. No fake “encrypted dispatch”.
              </p>

              {openedMail ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-cyan-accent/10 border border-cyan-accent text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-cyan-accent mx-auto" />
                  <h4 className="text-xl font-bold font-display text-white">Email app should have opened</h4>
                  <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                    If nothing opened, copy the address and write directly. Then send the message yourself.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenedMail(false)}
                    className="text-xs font-mono text-cyan-accent underline"
                  >
                    Edit and try again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-cyan-accent uppercase mb-1" htmlFor="contact-name">
                        Your full name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 text-sm focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-cyan-accent uppercase mb-1" htmlFor="contact-email">
                        Your email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@organisation.org"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 text-sm focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1" htmlFor="contact-org">
                        Organisation / institute
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="FSL / university / firm"
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 text-sm focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1" htmlFor="contact-subject">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 text-sm focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-accent uppercase mb-1" htmlFor="contact-message">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Internship, training, or academic enquiry…"
                      className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-700 text-slate-100 text-sm focus:border-cyan-accent focus:outline-none focus:ring-1 focus:ring-cyan-accent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-cyan-accent via-cyan-glow to-cyan-dim text-navy-950 shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.7)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>OPEN EMAIL TO YASH</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
