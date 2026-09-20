/**
 * SINGLE SOURCE OF TRUTH
 * Fill empty strings / nulls below. The UI hides links that are empty.
 * Do not invent employer names, hashes, or titles.
 */
export const profile = {
  name: 'Yash Siwach',
  displayName: 'YASH SIWACH',
  role: 'B.Sc. Forensic Science Student (2nd Year)',
  headline: 'Forensic Science trainee — laboratory methods, evidence handling, and Indian criminal law',
  university: 'Geeta University, Panipat',
  department: 'Department of Forensic Science',
  location: 'Panipat, Haryana, India',
  email: 'yashsiwach.forensic@gmail.com',

  // --- YOU MUST PROVIDE THESE (leave empty until real) ---
  linkedin: '', // full URL, e.g. https://www.linkedin.com/in/your-handle
  phone: '', // e.g. +91 XXXXXXXXXX
  github: 'https://github.com/2410305056-tech',
  resumeUrl: '', // /resume.pdf after you add the file to /public
  photoUrl: '',
  enrollmentId: '', // shown as ID only — never as "verified"
  internship1OrgExact: '', // exact letterhead name of Jun–Aug 2024 placement
  internship1Supervisor: '',
  internship2OrgExact: '', // exact letterhead name of Jan–Mar 2024 placement
  internship2Supervisor: '',
  usedSEM: false,
  usedAFIS: false,
  usedFTK: false,
  usedAutopsy: false,

  taglines: [
    'Uncovering truth through science, data and legal integrity',
    'Latent fingerprint development and ridge comparison (training)',
    'Toxicological screening and UV-Vis spectrophotometry (lab practicals)',
    'Digital evidence handling and chain-of-custody documentation (coursework)',
  ],

  stats: [
    { value: '2', label: 'Internships' },
    { value: '4', label: 'Featured projects' },
    { value: '2nd Yr', label: 'Geeta University' },
    { value: 'Trainee', label: 'Forensic Science' },
  ],

  about: [
    'I am Yash Siwach, a B.Sc. Forensic Science student at Geeta University, Panipat. I am training in laboratory methods, evidence handling, and the Indian criminal-law framework that governs scientific reports (BSA, BNSS, and BNS).',
    'My academic focus is physical and chemical forensics (fingerprints, toxicology screening, documentation) together with digital-evidence integrity — hashing, chain of custody, and honest limitations. I build this as a student trainee, not as a reporting officer.',
    'Outside the lab I design and code web projects, including this responsive portfolio (React, Vite, Three.js). I am looking for supervised internships and academic collaboration.',
  ],
}

export const education = [
  {
    id: 'bsc',
    program: 'B.Sc. Forensic Science',
    institution: 'Geeta University, Panipat, Haryana',
    period: 'Currently 2nd Year',
    status: 'Pursuing',
    points: [
      'Department of Forensic Science — laboratory practicals and theory',
      'Core areas: dactyloscopy, forensic chemistry/toxicology, crime-scene protocols, Indian evidence law',
      'Training emphasis: chain of custody, screening vs confirmatory methods, BSA 2023 / BNSS 2023 / BNS 2023',
    ],
  },
]

export const certifications = [
  {
    id: 'intern-lab',
    kind: 'Achievement',
    title: 'Forensic laboratory intern (trainee)',
    issuer: 'Supervised placement — organisation name on certificate pending',
    period: 'June 2024 – August 2024',
    detail: 'Assisted with latent fingerprint development, observed UV-Vis screening, and practised evidence packaging under supervision.',
  },
  {
    id: 'intern-legal',
    kind: 'Achievement',
    title: 'Legal & forensic documentation intern (trainee)',
    issuer: 'Academic / legal documentation placement — organisation name pending',
    period: 'January 2024 – March 2024',
    detail: 'Studied BSA s.39 and s.63 (formerly IEA s.45 and s.65B) and drafted mock expert notes for class exercises — not filed in court.',
  },
  {
    id: 'portfolio',
    kind: 'Achievement',
    title: 'Personal 3D forensic portfolio website',
    issuer: 'Self-built · React, Vite, Three.js · GitHub',
    period: '2026',
    detail: 'Responsive public portfolio with working contact, education, skills, projects, and a verifiable SHA-256 training exhibit.',
    link: 'https://github.com/2410305056-tech/yash-forensic-portfolio',
  },
]

export const law = {
  expertOpinion: 'BSA 2023 s.39 (formerly IEA s.45) — expert opinion',
  electronicRecord: 'BSA 2023 s.63 (formerly IEA s.65B) — electronic records',
  scientificReport: 'BNSS 2023 s.329 (formerly CrPC s.293) — scientific expert reports',
  firearms: 'Arms Act 1959; expert opinion under BSA 2023 s.39',
  penalCode: 'BNS 2023 (formerly IPC) — offences against body, property, and cyber-related clauses',
}

export const experiences = [
  {
    id: 'rat',
    role: 'Forensic laboratory intern (trainee)',
    organizationFallback: 'Forensic laboratory placement — exact organisation name pending',
    period: 'June 2024 – August 2024',
    location: 'Haryana / Panipat',
    type: 'Laboratory & field training',
    badge: 'PHYSICAL & CHEMICAL FORENSICS',
    badgeColor: 'border-cyan-accent text-cyan-accent bg-cyan-accent/10',
    icon: 'ShieldAlert',
    highlights: [
      'Assisted supervisors with latent fingerprint development on porous and non-porous surfaces (cyanoacrylate fuming and powder methods).',
      'Observed and assisted UV-Vis spectrophotometric screening of toxicological training samples.',
      'Practised chain-of-custody steps: labelling, packaging, and log entries under supervision.',
      'Drafted laboratory notes for academic review. Not an ISO/IEC 17025 signatory and not a reporting officer.',
    ],
    skillsLearned: ['Fingerprint development', 'UV-Vis (assisted)', 'Toxicology screening (observed)', 'Evidence packaging'],
  },
  {
    id: 'legal',
    role: 'Legal & forensic documentation intern (trainee)',
    organizationFallback: 'Legal / academic documentation placement — exact organisation name pending',
    period: 'January 2024 – March 2024',
    location: 'Panipat / Geeta University',
    type: 'Legal training — not courtroom testimony',
    badge: 'LEGAL & JURISPRUDENCE',
    badgeColor: 'border-uv-glow text-uv-glow bg-uv-glow/10',
    icon: 'Scale',
    highlights: [
      'Studied admissibility of scientific and electronic evidence under BSA 2023 s.39 and s.63 (formerly IEA s.45 and s.65B).',
      'Drafted mock expert-witness outlines and examination notes for academic exercises — not filed in any court.',
      'Mapped physical-evidence logs against hypothetical BNS charges in classroom reconstructions.',
      'Reviewed digital-evidence acquisition and chain-of-custody requirements for training files only.',
    ],
    skillsLearned: ['BSA s.39 & s.63', 'Mock expert notes', 'BNS case mapping (academic)', 'Court procedure (coursework)'],
  },
]

export const skillCategories = [
  {
    id: 'physical',
    title: 'Physical & digital forensics',
    icon: 'Fingerprint',
    accentColor: 'text-cyan-accent',
    borderColor: 'border-cyan-accent/30',
    description: 'Coursework and supervised practicals — not independent casework.',
    skills: [
      { name: 'Latent fingerprint development', level: 'Lab', detail: 'Powder / fuming practicals; ridge types; class comparison exercises' },
      { name: 'Ballistics familiarisation', level: 'Course', detail: 'Cartridge class characteristics; comparison-microscope demonstration' },
      { name: 'Questioned documents', level: 'Lab', detail: 'Ink TLC practicals; handwriting comparison exercises' },
      { name: 'Digital evidence handling', level: 'Course', detail: 'Hashing concept; write-blocker principle; training images only' },
    ],
  },
  {
    id: 'chemical',
    title: 'Chemical & biological analysis',
    icon: 'TestTube2',
    accentColor: 'text-uv-glow',
    borderColor: 'border-uv-glow/30',
    description: 'Undergraduate laboratory methods on training / surrogate samples.',
    skills: [
      { name: 'Forensic toxicology screening', level: 'Lab', detail: 'Spot tests and UV-Vis on teaching samples — not case toxicology' },
      { name: 'DNA profiling principles', level: 'Course', detail: 'STR / PCR theory and gel electrophoresis demonstration' },
      { name: 'Serological stain tests', level: 'Lab', detail: 'Presumptive tests (e.g. Kastle-Meyer) in practical class' },
      { name: 'Thin-layer chromatography', level: 'Lab', detail: 'Rf measured only with stated solvent system and plate type' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal & criminology (India, post-1 Jul 2024)',
    icon: 'Scale',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    description: 'Academic knowledge of BSA, BNSS and BNS. Not legal advice and not expert testimony.',
    skills: [
      { name: 'BSA 2023 s.39 & s.63', level: 'Course', detail: 'Expert opinion and electronic records (formerly IEA s.45 & s.65B)' },
      { name: 'Crime scene protocols', level: 'Lab', detail: 'Search patterns, photography, sketching — training scenes' },
      { name: 'Chain of custody', level: 'Lab', detail: 'Packaging and logs under supervision; not a custodian of real case property' },
      { name: 'BNS 2023 (formerly IPC)', level: 'Course', detail: 'Offences against body, property, and selected cyber clauses' },
    ],
  },
  {
    id: 'instrumentation',
    title: 'Lab instrumentation',
    icon: 'Microscope',
    accentColor: 'text-cyan-accent',
    borderColor: 'border-cyan-accent/30',
    description: 'Hands-on only where the university lab provided the instrument.',
    skills: [
      { name: 'Comparison microscopy', level: 'Demo', detail: 'Side-by-side comparison demonstrated in practicals' },
      { name: 'UV-Vis spectrophotometer', level: 'Lab', detail: 'Absorbance scans and calibration-curve exercises' },
      { name: 'FT-IR (if used)', level: 'Course', detail: 'Functional-group identification — confirm instrument access' },
      { name: 'Stereomicroscope / ALS', level: 'Lab', detail: 'Fibre and trace observation in class' },
    ],
  },
  {
    id: 'technical',
    title: 'Web & professional skills',
    icon: 'Code2',
    accentColor: 'text-cyan-accent',
    borderColor: 'border-cyan-accent/30',
    description: 'Technical and workplace skills used to build this site and document laboratory work.',
    skills: [
      { name: 'HTML, CSS, JavaScript, React', level: 'Lab', detail: 'This portfolio: Vite, React 18, Tailwind CSS' },
      { name: 'Git & GitHub', level: 'Lab', detail: 'Public repositories and version control' },
      { name: 'Three.js / WebGL (learning)', level: 'Lab', detail: 'Interactive 3D training-lab visualisation' },
      { name: 'Scientific documentation', level: 'Lab', detail: 'Lab notes, structured reports, professional email' },
    ],
  },
]

export const projectsList = [
  {
    id: 'portfolio-site',
    title: 'Personal portfolio website (this site)',
    category: 'Web development · assignment project',
    academicInstitution: 'Built by Yash Siwach',
    year: '2026',
    summary:
      'Responsive personal portfolio introducing my education, skills, forensic academic projects, achievements, and contact details. Includes an educational 3D training-lab demo. Not a real casefile.',
    fullMethodology: `1. Planned required sections: About, Education, Skills, Projects, Certifications/Achievements, Contact.
2. Implemented with React 18, Vite, Tailwind CSS, and React Three Fiber.
3. Made the layout responsive for mobile and desktop; navigation and mailto contact are functional.
4. Published source on GitHub for version control and deployment on Vercel.`,
    keyFindings: [
      'Single-page site with working in-page navigation and a real email contact path.',
      'GitHub: https://github.com/2410305056-tech/yash-forensic-portfolio',
    ],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Three.js'],
    imageBadge: 'WEB · PORTFOLIO',
    link: 'https://github.com/2410305056-tech/yash-forensic-portfolio',
  },
  {
    id: 'nanopowder',
    title: 'Latent fingerprint enhancement using eco-friendly powders (academic)',
    category: 'Dactyloscopy — undergraduate research / practical',
    academicInstitution: 'Geeta University • Department of Forensic Science',
    year: '2024 (2nd year academic work)',
    summary:
      'Class and supervised lab work on developing latent prints on non-porous surfaces with safer powder formulations, photographed under UV where available. Training samples only — not case exhibits.',
    fullMethodology: `1. Prepared or used teaching-grade zinc oxide / silica powders as directed by faculty (particle-size claims only if measured).
2. Deposited latent impressions on glass, metal and smooth plastic training substrates.
3. Compared development quality against the laboratory’s standard black / magnetic powder.
4. Photographed ridge detail; UV (365 nm) used only if the lab lamp was available.
5. Scored visible Level 1–2 features. Level 3 (pores) recorded only when clearly photographed — not claimed as AFIS-ready.`,
    keyFindings: [
      'Improved visual contrast on some non-porous training surfaces versus untreated controls.',
      'Level-2 minutiae were recordable on a subset of lifts; formal AFIS encoding was not performed.',
      'This is an academic exercise. Sample size, scoring sheet and faculty supervisor still to be attached.',
    ],
    tools: ['UV lamp (if used)', 'Comparison photography', 'Standard fingerprint powders'],
    imageBadge: 'FINGERPRINT — ACADEMIC',
  },
  {
    id: 'digital',
    title: 'Digital imaging workflow and chain-of-custody log (training media)',
    category: 'Cyber forensics — coursework',
    academicInstitution: 'Geeta University • Forensic lab / IT practical',
    year: '2024',
    summary:
      'Practised a documented acquisition workflow on student-owned or faculty-provided sample media. No suspect device. No live investigation.',
    fullMethodology: `1. Created a forensic image of sample/training media only (write-blocker used if the lab provided one).
2. Recorded file-system type and basic metadata fields on the training copy.
3. Generated a cryptographic hash at acquisition and after analysis; values stored in a student log.
4. Drafted a practice BSA s.63 (formerly IEA s.65B) style certificate for the classroom — not for filing.`,
    keyFindings: [
      'Completed a repeatable hash-and-log workflow on training files.',
      'Recovery percentages are not published — they depend on media and are not validated case statistics.',
      'Exhibit below is labelled DEMO. Replace with your real FTK/Autopsy log when you provide it.',
    ],
    tools: ['Training disk image', 'Hash utility (SHA-256)', 'Student chain-of-custody sheet'],
    imageBadge: 'CYBER — TRAINING',
  },
  {
    id: 'toxicology',
    title: 'TLC / UV-Vis screening of teaching adulterant samples',
    category: 'Forensic chemistry — lab practical',
    academicInstitution: 'Geeta University Laboratory',
    year: '2023 – 2024',
    summary:
      'Undergraduate practicals isolating and screening surrogate/teaching samples with TLC and UV-Vis. Not case toxicology and not a clinical result.',
    fullMethodology: `1. Solvent extraction of faculty-provided surrogate matrix (method as in the practical manual).
2. Silica TLC; Rf reported only together with solvent system, plate type and visualisation reagent.
3. UV-Vis scan over the range specified in the practical (typically 200–400 nm).
4. Calibration curve for quantitative estimate on standards — not on unknown case material.`,
    keyFindings: [
      'Rf and λmax recorded in the practical notebook (attach scan / table when available).',
      'Detection limits are method- and instrument-specific; round-number claims removed until the lab sheet is supplied.',
      'Reagents such as Marquis / Dragendorff used only if the practical listed them.',
    ],
    tools: ['UV-Vis spectrophotometer', 'TLC plates', 'Standard teaching reagents'],
    imageBadge: 'TOX — LAB PRACTICAL',
  },
]

export const evidenceDetails = {
  '01': {
    id: '01',
    title: 'Latent fingerprint (simulated exhibit)',
    category: 'Physical evidence • Dactyloscopy — SIMULATION',
    location: 'Training grid B-4 (not a real scene)',
    methodology: 'Cyanoacrylate fuming and powder enhancement (demonstration)',
    findings: 'Ridge flow and selected minutiae marked for teaching. Not an identification.',
    legalAdmissibility: law.expertOpinion + ' — educational citation only',
    chainOfCustody: 'SIM-YFS-FP-01 • training seal • not case property',
    spectralData: ['Status: Simulated', 'Pattern: Teaching loop example', 'ID: Not effected'],
  },
  '02': {
    id: '02',
    title: 'Toxicology vial (simulated exhibit)',
    category: 'Chemical evidence • Bio-toxicology — SIMULATION',
    location: 'Teaching rack #02',
    methodology: 'TLC + UV-Vis on a surrogate teaching sample',
    findings: 'Rf shown only as a worked example. Solvent system must be stated before this is data.',
    legalAdmissibility: law.scientificReport + ' — educational citation only',
    chainOfCustody: 'SIM-YFS-TOX-02 • training seal • not case property',
    spectralData: ['Status: Simulated', 'λmax: example 274 nm', 'Not a case concentration'],
  },
  '03': {
    id: '03',
    title: 'Digital media (simulated exhibit)',
    category: 'Cyber forensics • Electronic evidence — SIMULATION',
    location: 'Training write-blocked port',
    methodology: 'Documented imaging workflow on sample media (classroom)',
    findings: 'Download /demo-exhibit.txt and recompute SHA-256. A matching digest is integrity. It is still not a case.',
    legalAdmissibility: law.electronicRecord + ' — educational citation only',
    chainOfCustody: 'SIM-YFS-CYB-03 • training log • not case property',
    spectralData: [
      'SHA-256: f9369f595fab867bf7a4b3b86693f8afc2b7e69aded78cc594e65709f7369974',
      'File: demo-exhibit.txt',
      'Case: none',
    ],
  },
  '04': {
    id: '04',
    title: 'Cartridge case (simulated exhibit)',
    category: 'Physical evidence • Firearms — SIMULATION',
    location: 'Training grid D-1',
    methodology: 'Comparison-microscope demonstration on a teaching aid',
    findings: 'Class characteristics discussed. No firearm identification is claimed.',
    legalAdmissibility: law.firearms + ' — educational citation only',
    chainOfCustody: 'SIM-YFS-BAL-04 • training seal • not case property',
    spectralData: ['Status: Simulated', 'Calibre: teaching 9 mm aid', 'ID: Not effected'],
  },
}
