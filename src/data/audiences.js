// "Who are you?" — the portfolio reframes itself for each visitor type.
// Edit the copy here; the hero reads whichever one is selected.

export const AUDIENCES = [
  {
    id: "recruiter",
    label: "Recruiter",
    tagline:
      "Full-Stack Developer — open to roles in India & remote. I ship production systems, end to end.",
    points: ["Available now", "2 production systems shipped", "MERN · PHP · AI"],
    cta: { label: "See my work", target: "crm" },
  },
  {
    id: "engineer",
    label: "Engineer",
    tagline:
      "Full-Stack Developer — I care about clean architecture, solid APIs, and systems that don't drift.",
    points: ["SSO · RBAC · SLA engines", "Node/Express · MongoDB · PHP", "AI-integrated (this site's bot)"],
    cta: { label: "See the architecture", target: "crm" },
  },
  {
    id: "founder",
    label: "Founder",
    tagline:
      "Full-Stack Developer — I build the whole thing and ship it fast, from idea to deployment.",
    points: ["Idea → deployed, solo-capable", "Built an institute's helpdesk alone", "Moves fast with AI tooling"],
    cta: { label: "Let's build", target: "contact" },
  },
];

export const DEFAULT_AUDIENCE = "recruiter";
