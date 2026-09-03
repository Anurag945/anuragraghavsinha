// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit values here — every section reads from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Anurag Raghav Sinha",
  role: "Full-Stack Developer",
  tagline: "I design, build, and ship production systems — end to end.",
  intro:
    "I'm a full-stack developer at CSK Infotech. I single-handedly built and deployed a production IT helpdesk for a 150+ faculty institute, and I build core modules for an enterprise sales CRM used by our sales team. I care about the why behind every decision — and I use modern tooling, including AI, to ship fast.",
  location: "Greater Noida, India · Open to Remote",
  email: "anuragraghavsinha@gmail.com",
  phone: "+91 76686 27902",
  github: "https://github.com/Anurag945",
  linkedin: "https://linkedin.com/in/anurag-sinha945",
  // Résumé link. Leave null while there's no PDF — the navbar hides the button
  // instead of linking to a file that doesn't exist (a missing file falls through
  // the vercel.json SPA rewrite and serves a blank page, not a 404).
  // To enable: drop the PDF in /public and set this to "/<filename>.pdf".
  resume: null,
};

export const crm = {
  index: "01",
  tint: "sky",
  label: "Case Study",
  title: "Central CRM",
  subtitle: "Enterprise B2B Sales Platform",
  blurb:
    "A role-based CRM that runs the company's entire sales lifecycle — leads, pipeline, quotations, cost-sheets, and analytics. I built core modules that made the sales team's daily work dramatically faster.",
  stack: ["React 19", "Node / Express", "MongoDB", "JWT / SSO", "Recharts", "Puppeteer"],
  modules: [
    {
      title: "Quotation & Approval Engine",
      text: "Multi-vendor price comparison, GST / freight / margin math, and server-side PDF generation with a Pending → Approved/Rejected flow.",
    },
    {
      title: "Automated Reminders",
      text: "A node-cron job flags deals stagnant 15+ days and emails the owning salesperson — keeping the pipeline clean automatically.",
    },
    {
      title: "SSO & Role Access",
      text: "JWT-based single sign-on with a central auth server, resolving identities across MySQL & MongoDB into role-scoped dashboards.",
    },
  ],
  // Animated dashboard mock numbers (kept playful, not real company data)
  kpis: [
    { label: "Pipeline value", prefix: "₹", base: 48, suffix: "L" },
    { label: "Open deals", prefix: "", base: 36, suffix: "" },
    { label: "Win rate", prefix: "", base: 62, suffix: "%" },
  ],
};

export const helpdesk = {
  index: "02",
  tint: "peach",
  label: "Case Study",
  title: "LNMIIT IT Helpdesk",
  subtitle: "Production Support Portal · Built & Deployed Solo",
  url: "https://lnmiitsupport.cskinfotech.com",
  blurb:
    "I single-handedly designed, built, and deployed a production IT helpdesk for The LNM Institute of Information Technology, Jaipur — serving 150+ faculty and a 10-person field team under a multi-year maintenance contract.",
  stack: ["PHP 8", "MariaDB", "Chart.js", "GitHub Actions", "cPanel"],
  // Stat tiles on the home-page section (icons are Material Symbols names).
  tiles: [
    { icon: "confirmation_number", stat: "350+", label: "Tickets resolved" },
    { icon: "group", stat: "4", label: "Distinct user roles" },
    { icon: "speed", stat: "SLA", label: "Custom engine built" },
    { icon: "verified_user", stat: "100%", label: "Solo built & deployed" },
  ],
  // "At a glance" tiles on the deep-dive case-study page.
  glance: [
    { stat: "150+", label: "Faculty served" },
    { stat: "10", label: "Field engineers" },
    { stat: "SLA", label: "Custom engine built" },
    { stat: "100%", label: "Solo built & deployed" },
  ],
  modules: [
    {
      title: "Live SLA Engine",
      text: "Per-priority response/resolution targets with business-hour math, computed live from timestamps to never drift.",
    },
    {
      title: "Auto-Escalation",
      text: "A 5-minute cron poll escalates breaching tickets through L1/L2, with a full audit trail of every event.",
    },
    {
      title: "Security Hardening",
      text: "bcrypt with transparent MD5 rehash, parameterized SQL, single-use reset tokens, and a before/after audit log.",
    },
  ],
};

// ── Experience, derived not hardcoded ─────────────────────────────────────────
// First professional role (the Mangoesorange internship). The About stat reads
// from this, so it can never drift out of date again — never hardcode the number
// somewhere else. Month is 0-indexed: 9 = October.
export const CAREER_START = new Date(2024, 9, 1);

export function experience(now = new Date()) {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());
  return months < 24
    ? { value: `${months}+`, label: "Months experience" }
    : { value: `${Math.floor(months / 12)}+`, label: "Years experience" };
}

export const genzysip = {
  index: "03",
  title: "Genzy Sip",
  subtitle: "Scroll-Driven Product Film",
  url: "https://genzysip.vercel.app",
  repo: "https://github.com/Anurag945/Genzysip",
  blurb:
    "A brand site for a pre-biotic mocktail where scrolling scrubs a 540-frame product film. Every frame is painted to a canvas by hand — there's no video element — so the motion is locked to scroll position instead of merely playing near it.",
  stack: ["React 18", "TypeScript", "Canvas 2D", "GSAP ScrollTrigger", "Vite"],
  facts: [
    { stat: "540", label: "Frames scrubbed" },
    { stat: "4K", label: "Source masters" },
    { stat: "0", label: "Video elements" },
  ],
  modules: [
    {
      title: "Progressive wave loading",
      text: "Frames arrive in four passes — 20 spread across the timeline, then every 8th, every 4th, then the rest. The sequence is scrubbable in seconds at coarse resolution and sharpens as it fills, instead of holding the page behind a loading bar.",
    },
    {
      title: "Never a blank frame",
      text: "If the exact frame hasn't decoded yet, the renderer scans outward for the nearest one that has. Painting is fully decoupled from loading and always completes in the same animation frame, so fast scrolling never stalls or flashes.",
    },
    {
      title: "Sharp on every display",
      text: "The canvas is sized to the device pixel ratio and repainted on resize, with frames mastered at 4K — so the film stays crisp on retina screens rather than softening the way an upscaled 1080p source would.",
    },
  ],
};

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "PHP", "Python", "Java", "SQL"] },
  { group: "Frontend", items: ["React.js", "Material UI", "Tailwind", "Recharts", "GSAP", "Three.js"] },
  { group: "Backend", items: ["Node.js", "Express", "PHP 8", "REST APIs", "JWT / SSO"] },
  { group: "Databases", items: ["MongoDB", "MariaDB", "MySQL", "PostgreSQL"] },
  { group: "Architecture", items: ["RBAC", "SLA Engines", "Audit Logging", "System Design"] },
  { group: "DevOps & AI", items: ["Git / GitHub", "GitHub Actions", "cPanel", "node-cron", "LLM Integration"] },
];

export const recognition = {
  award: {
    title: "Choice of CSK",
    issuer: "Awarded by the CSK Infotech CEO",
    date: "May 2026",
    text: "Recognition for building the Central CRM modules that streamlined the sales team's daily workflow.",
  },
  certs: [
    { title: "Mastering Generative AI & ChatGPT", issuer: "GeeksforGeeks", date: "2026 · In progress" },
    { title: "Data Structures & Algorithms with Java", issuer: "Coding Ninjas", date: "2024" },
    { title: "Introduction to Java", issuer: "Coding Ninjas", date: "2024" },
  ],
};

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Dr. A.P.J. Abdul Kalam Technical University, Greater Noida",
  period: "2021 – 2025",
  score: "CGPA 7.8 / 10",
};

// Image paths — drop files in /public/images/ and point an entry at them.
// A null entry is simply not rendered (see <Photo />), so nothing half-finished
// ever ships. Keep source images web-sized: ~1400px on the long edge is plenty.
export const images = {
  me: "/images/me.jpg",
  // A frame lifted from the live Genzy Sip build, for the case card.
  genzysip: "/images/genzysip.jpg",
  // You receiving the award from the CEO — fills the tall left card.
  awardCeo: "/images/award-ceo.jpg",
  // The framed certificate itself.
  certChoice: "/images/cert-choice-of-csk.jpg",
};
