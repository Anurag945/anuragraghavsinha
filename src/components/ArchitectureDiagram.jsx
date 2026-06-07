import { useEffect, useRef, useState } from "react";

// ── Nodes (boxes) ──
const nodes = [
  { x: 330, y: 30,  w: 200, h: 64, title: "React SPA",   sub: "Client",             delay: 0.00 },
  { x: 70,  y: 190, w: 220, h: 64, title: "Auth Server", sub: "SSO · JWT",          delay: 0.10 },
  { x: 560, y: 190, w: 230, h: 64, title: "API",         sub: "Node · Express",     delay: 0.15 },
  { x: 70,  y: 350, w: 220, h: 60, title: "MySQL",       sub: "Identity store",     delay: 0.20 },
  { x: 345, y: 350, w: 200, h: 60, title: "MongoDB",     sub: "CRM data",           delay: 0.25 },
  { x: 600, y: 350, w: 190, h: 60, title: "node-cron",   sub: "Stagnant-deal scan", delay: 0.30 },
  { x: 600, y: 460, w: 190, h: 56, title: "Email",       sub: "Notify owner",       delay: 0.35 },
];

// ── Edges (arrows) ──
const edges = [
  { d: "M380,94 C340,130 250,150 210,190", delay: 0.50 }, // client → auth
  { d: "M480,94 C520,130 600,150 645,190", delay: 0.60 }, // client → api
  { d: "M560,214 L300,214",                delay: 0.70 }, // api → auth (verify)
  { d: "M180,254 L180,350",                delay: 0.80 }, // auth → mysql
  { d: "M620,254 C560,300 520,320 482,350",delay: 0.90 }, // api → mongo
  { d: "M600,380 L549,380",                delay: 1.00 }, // cron → mongo (scan)
  { d: "M695,410 L695,460",                delay: 1.10 }, // cron → email
];

// ── Edge labels ──
const labels = [
  { x: 298, y: 150, t: "login" },
  { x: 588, y: 150, t: "JWT request" },
  { x: 430, y: 206, t: "verify token" },
  { x: 206, y: 306, t: "resolve" },
  { x: 578, y: 300, t: "read / write" },
  { x: 574, y: 372, t: "scan" },
  { x: 715, y: 438, t: "send" },
];

export default function ArchitectureDiagram() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`arch reveal card p-4 md:p-8 overflow-x-auto ${inView ? "in" : ""}`}>
      <svg
        viewBox="0 0 860 540"
        className="w-full min-w-[680px]"
        role="img"
        aria-label="Central CRM system architecture: a React client authenticates via an SSO auth server, calls a Node/Express API that reads MySQL identity and MongoDB CRM data, while a node-cron job scans for stagnant deals and emails the owner."
      >
        <defs>
          <marker id="arch-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--color-orange)" />
          </marker>
        </defs>

        {/* edges (under nodes) */}
        {edges.map((e, i) => (
          <path
            key={i}
            className="edge"
            d={e.d}
            fill="none"
            stroke="var(--color-orange)"
            strokeWidth="1.5"
            pathLength="1"
            strokeDasharray="1"
            markerEnd="url(#arch-arrow)"
            style={{ transitionDelay: `${e.delay}s` }}
          />
        ))}

        {/* edge labels */}
        {labels.map((l, i) => (
          <text
            key={i}
            className="elabel"
            x={l.x}
            y={l.y}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10.5"
            letterSpacing="0.06em"
            fill="#8c8c8c"
            style={{ transitionDelay: "0.95s" }}
          >
            {l.t}
          </text>
        ))}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i} className="node" style={{ transitionDelay: `${n.delay}s` }}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="12"
              fill="rgba(255,255,255,0.025)"
              stroke="var(--color-line)"
              strokeWidth="1"
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 - 4}
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontWeight="700"
              fontSize="17"
              fill="#f3f3f3"
            >
              {n.title}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 + 16}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="0.05em"
              fill="#8c8c8c"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
