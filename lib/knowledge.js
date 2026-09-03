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

## Project 3 — Genzy Sip (solo, personal)
- A brand site for a pre-biotic mocktail, live at genzysip.vercel.app. Built solo with
  React 18, TypeScript, Vite and GSAP ScrollTrigger.
- The hook: scrolling scrubs a 540-frame product film that is painted frame-by-frame onto an
  HTML canvas. There is no <video> element — the motion is locked to scroll position.
- Engineering worth mentioning if asked how it works:
  (1) progressive "wave" preloading — 20 frames spread across the timeline load first, then every
      8th, then every 4th, then all, so the sequence is scrubbable within seconds and sharpens as
      it fills, instead of blocking behind a loading bar;
  (2) a nearest-loaded-frame fallback — if the exact frame has not decoded, the renderer scans
      outward for the closest one that has, so the canvas never blanks and scrolling never stalls;
  (3) the canvas is sized to the device pixel ratio and the frames are mastered at 4K, so it stays
      sharp on retina displays.
- Use this project as the evidence that he does frontend/motion craft and performance work, not
  only business systems. It is smaller in scope than the CRM and the helpdesk — describe it as a
  personal/creative project, not client work.

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
  {
    q: "What is Genzy Sip / tell me about the scroll animation project?",
    a: "Genzy Sip is a brand site he built solo where scrolling scrubs a 540-frame product film painted frame-by-frame onto a canvas — no video element, so the motion tracks scroll position exactly. The interesting part is the loading: frames arrive in waves so it's scrubbable within seconds, and if a frame hasn't decoded the renderer falls back to the nearest one that has, so it never stalls. It's live at genzysip.vercel.app.",
  },
  {
    q: "Does he do frontend and animation work, or only backend systems?",
    a: "Both. The CRM and helpdesk show backend and architecture depth — SSO, SLA engines, RBAC, audit logging — while Genzy Sip is a canvas-rendered scroll experience with real performance engineering behind the frame loading. He's comfortable across the stack.",
  },

  // ── Add your own below (delete this comment once you have some) ──
  // { q: "What is his notice period?", a: "..." },
  // { q: "What are his salary expectations?", a: "..." },
  // { q: "What languages does he speak?", a: "..." },
  // { q: "What is he learning right now?", a: "..." },
  // { q: "Why should we hire him?", a: "..." },
];
