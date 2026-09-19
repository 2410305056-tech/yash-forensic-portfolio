/** Examiner-facing reference. Educational, not legal advice. */

export const DEMO_EXHIBIT = {
  filename: 'demo-exhibit.txt',
  url: '/demo-exhibit.txt',
  algorithm: 'SHA-256',
  hash: 'f9369f595fab867bf7a4b3b86693f8afc2b7e69aded78cc594e65709f7369974',
  note: 'Download the file and recompute. If the digest differs, the published copy was changed.',
}

export const conclusionScale = [
  { code: 'ID', label: 'Identification', use: 'Not used by a 2nd-year trainee. Reserved for verified case examiners.' },
  { code: 'EX', label: 'Exclusion', use: 'Only after documented class disagreement. Training comparisons only here.' },
  { code: 'INC', label: 'Inconclusive', use: 'Insufficient, ambiguous, or quality too low. This is a scientific result, not a failure.' },
  { code: 'NS', label: 'Not suitable', use: 'No value for comparison. State this early. Do not force minutiae.' },
]

export const methodCards = [
  {
    id: 'acev',
    title: 'Friction ridge — ACE-V',
    body: 'Analysis, Comparison, Evaluation, Verification. Level 1 (pattern) never identifies a person. Level 2 (minutiae) is the working comparison. Level 3 (pores/edges) is supporting, not a trophy. PCAST (2016) warned against overclaiming on close non-matches. This portfolio records development quality, not identifications.',
  },
  {
    id: 'tox',
    title: 'Toxicology — screen vs confirm',
    body: 'Spot tests, TLC and UV-Vis are presumptive or quantitative-support methods. Court identity of a poison in biological matrix requires a hyphenated confirmatory technique (GC-MS / LC-MS/MS) with blanks, controls and measurement uncertainty. Marquis or Dragendorff colour is not a reportable identity.',
  },
  {
    id: 'digital',
    title: 'Digital — integrity before opinion',
    body: 'Write-block (or software equivalent), image, hash, then analyse the working copy. Hash at acquisition and at close. BSA 2023 s.63 (Anvar / Arjun Panditrao line of cases under old s.65B) needs a certificate from a responsible person — not a neon badge. Empty-string SHA-256 is never published as a case hash.',
  },
  {
    id: 'bias',
    title: 'Cognitive bias — linear sequential unmasking',
    body: 'Domain-irrelevant context (confession, “the accused already admitted”) shifts ridge and toolmark decisions (Dror et al.). Verification should be independent. A student who writes the limitation is more employable than one who writes 98%.',
  },
]

export const bsa63Checklist = [
  'What device / computer produced the output',
  'Who was in charge of that device',
  'How the copy was made (tool, write-block, imaging)',
  'Hash algorithm and digest of the exhibit',
  'Date, time (IST), and unique exhibit ID',
  'Signature of a responsible official — student drafts are labelled SAMPLE',
]

export const pathway = [
  {
    when: 'Now (2nd year)',
    items: [
      'Lab notebook with n, controls, and limitations on every practical',
      'One documented internship at a named lab (Haryana FSL Madhuban is the state lab nearest Panipat)',
      'BSA / BNSS / BNS section map you can explain aloud, not decorate',
      'FACT (NFSU Forensic Aptitude and Caliber Test) awareness',
    ],
  },
  {
    when: '3rd year',
    items: [
      'Dissertation with a supervisor, sample size, and a negative-result clause',
      'Poster at a university / ICF / regional forensic meet',
      'Repeat internship — different division (biology vs cyber vs chemistry)',
      'Draft SAMPLE BSA s.63 certificate and a mock expert outline',
    ],
  },
  {
    when: 'After B.Sc.',
    items: [
      'M.Sc. Forensic Science (NFSU or a UGC programme) if you want reporting-officer track',
      'State FSL scientific staff via HPSC / departmental recruitment — not via a 3D website',
      'UGC-NET Forensic Science if aiming at teaching / JRF',
      'Never use the title Forensic Scientist until the appointment order says so',
    ],
  },
]
