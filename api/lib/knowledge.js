// ════════════════════════════════════════════════════════════════════
//  KNOWLEDGE BASE for the portfolio AI assistant.
//
//  This is what the assistant "knows". To make it answer MORE questions,
//  just add facts here — no training, no cost. Then:
//    • local dev → restart the server (npm run dev)
//    • production → redeploy on Vercel
//
//  Two places to edit:
//    1) KNOWLEDGE — free-form facts about you (paragraphs / bullets)
//    2) FAQ       — specific question → answer pairs
// ════════════════════════════════════════════════════════════════════

export const KNOWLEDGE = `
## Profile
- Full-stack developer (MERN stack + PHP). Software Engineer at CSK Infotech since April 2025.
- Based in Greater Noida, India. Open to roles in India and fully remote.
- Email: anuragraghavsinha@gmail.com. GitHub: github.com/Anurag945.
- Uses modern tooling including AI assistance to ship quickly.

## Skills
- Frontend: React, JavaScript (ES6+), Tailwind CSS, GSAP, Material UI, Recharts.
- Backend: Node.js, Express, PHP, REST APIs, JWT / SSO authentication, node-cron.
- Databases: MongoDB, MySQL, MariaDB.
- Architecture & security: RBAC, SLA engines, audit logging, bcrypt, parameterised SQL.
- DevOps/tools: Git/GitHub, GitHub Actions, cPanel, Linux server deployment, Vercel.
- Comfortable integrating AI / LLMs into apps.

## Project 1 — Central CRM (CSK Infotech)
- A role-based CRM that runs the company's sales lifecycle (leads, pipeline, quotations,
  cost-sheets, approvals, analytics). Built with React, Node/Express, MongoDB, and JWT-based SSO.
- IMPORTANT framing: this was built by a TWO-PERSON team using AI tooling. Anurag did NOT
  solo-build the whole CRM. He OWNED these specific parts end-to-end:
  (1) the quotation & approval engine (multi-vendor price comparison, GST/freight/margin math,
      server-side PDF generation, Pending → Approved/Rejected flow);
  (2) automated stagnant-deal reminders via a node-cron job that emails the owning salesperson;
  (3) SSO & role-based access resolving identities across MySQL and MongoDB.
- This work earned him the internal "Choice of CSK" award from the company CEO.

## Project 2 — LNMIIT IT Helpdesk (solo)
- A production IT helpdesk for The LNM Institute of Information Technology, Jaipur. Built with PHP
  and MariaDB. This one he built ALONE: single-handedly designed, built, and deployed the system.
- Serves 150+ faculty and a 10-person field team under a multi-year maintenance contract.
- Highlights: a live SLA engine with business-hour math; auto-escalation via a 5-minute cron poll
  with a full audit trail; security hardening (bcrypt with transparent legacy-MD5 rehash,
  parameterised SQL, single-use reset tokens); role-based access (RBAC).
- It is the project he is proudest of, because every layer is his.

## Education
- B.Tech, Computer Science & Engineering. Dr. A.P.J. Abdul Kalam Technical University, Greater Noida.
- 2021–2025. CGPA 7.8 / 10.

## Recognition
- "Choice of CSK" award from the CSK Infotech CEO, for the CRM work.
`.trim();

// Add as many { q, a } pairs as you like. The assistant uses these as
// approved answers. Keep answers truthful and in your favour.
export const FAQ = [
  {
    q: "Is he available / open to new roles?",
    a: "Yes — he's actively open to full-stack and backend roles, in India or fully remote.",
  },
  {
    q: "What kind of roles is he looking for?",
    a: "Full-stack (MERN) or backend engineering roles, especially ones involving AI integration.",
  },
  {
    q: "Where is he based and will he relocate or work remotely?",
    a: "He's based in Greater Noida, India, is open to fully remote work, and would relocate for the right role.",
  },

  // ── Add your own below (delete this comment once you have some) ──
  // { q: "What is his notice period?", a: "..." },
  // { q: "What are his salary expectations?", a: "..." },
  // { q: "What languages does he speak?", a: "..." },
  // { q: "What is he learning right now?", a: "..." },
  // { q: "Why should we hire him?", a: "..." },
];
