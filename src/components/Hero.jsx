import { profile } from "../data/content";
import GhostLetter from "./GhostLetter";
import RotatingBadge from "./RotatingBadge";

const bandA = [
  "React", "Node.js", "Express", "MongoDB", "PHP", "SLA Engine",
  "SSO / JWT", "AI Integration", "GitHub Actions",
];
const bandB = [
  "Full-Stack", "Production Systems", "REST APIs", "System Design",
  "Auth & Security", "Databases", "DevOps", "Clean Code",
];

const BandItems = ({ items }) =>
  [...items, ...items].map((t, i) => (
    <span key={i} className="flex items-center display font-bold text-[24px] uppercase tracking-tight">
      <span className="px-7">{t}</span>
      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--color-orange)" }} />
    </span>
  ));

// ════════════════════════════════════════════════════════════════
//  MARQUEE "X" BANDS — each band has its OWN knobs (tune separately)
//  (refresh the browser after each change to see the result)
//  TOP:  vertical position. LOWER % = HIGHER up the page.
//  LEFT: horizontal pivot.  50% = centre, >50% = right, <50% = left.
//  ANGLE: tilt in degrees. Negative tilts up→right, positive down→right.
//  WIDTH: how far the band runs off both edges.
// ════════════════════════════════════════════════════════════════

// ── Band A — the WHITE band (front) ──
const A_TOP   = "69%";
const A_LEFT  = "56%";
const A_ANGLE = -6;
const A_WIDTH = "175vw";

// ── Band B — the DARK band (behind) ──
const B_TOP   = "39%";
const B_LEFT  = "84%";
const B_ANGLE = 50;
const B_WIDTH = "175vw";

// ── Spinning SCROLL badge position ──
const BADGE_BOTTOM = "10px"; // distance from the BOTTOM. SMALLER = LOWER on screen. (try 40px–300px)
const BADGE_LEFT   = "90%";   // horizontal position. 50% = centre, higher = right.

export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[120px] pb-44"
    >
      <GhostLetter char="A" className="top-1/2 right-[-3vw] -translate-y-1/2" />

      {/* soft orange glow bloom behind the name */}
      <div className="glow glow-orange glow-pulse" aria-hidden="true"
        style={{ width: 620, height: 620, top: "26%", left: "0%" }} />

      <div className="container-x relative z-10 w-full">
        {/* status pill */}
        <div className="reveal inline-flex items-center gap-3 border border-line px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--color-orange)" }} />
          <span className="label">Available for full-stack roles</span>
        </div>

        {/* name — display-xl: 80px → 140px, weight 900, -0.04em, lh 0.9 */}
        <h1 className="reveal display font-black uppercase text-[80px] md:text-[140px] leading-[0.9] tracking-[-0.04em]">
          ANURAG<br />SINHA<span style={{ color: "var(--color-orange)" }}>.</span>
        </h1>

        {/* subtitle — body-md: 18px / 1.6 */}
        <p className="reveal mt-8 max-w-xl text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
          {profile.role} — I design, build &amp; ship production systems, end to end.
        </p>

        {/* CTAs */}
        <div className="reveal mt-9 flex flex-wrap gap-4">
          <button onClick={() => go("crm")} className="btn-grad rounded-full px-7 py-3.5 transition">
            See my work
          </button>
          <button
            onClick={() => go("contact")}
            className="rounded-full border border-line px-7 py-3.5 font-medium hover:bg-white/5 transition"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* spinning scroll badge */}
      <RotatingBadge
        className="hidden md:grid absolute z-20 text-ink/80 hover:text-ink transition"
        style={{ bottom: BADGE_BOTTOM, left: BADGE_LEFT, transform: "translateX(-50%)" }}
      />

      {/* ── crossing diagonal marquee bands (X) — Gleamy style ── */}
      {/* band B (behind): dark, scrolls right */}
      <div
        className="absolute z-[5] pointer-events-none"
        style={{
          top: B_TOP,
          left: B_LEFT,
          width: B_WIDTH,
          transform: `translate(-50%,-50%) rotate(${B_ANGLE}deg)`,
        }}
      >
        <div className="bg-[#141414] text-white py-3 marquee border-y border-white/10">
          <div className="marquee-track-rev"><BandItems items={bandB} /></div>
        </div>
      </div>
      {/* band A (front): white, scrolls left */}
      <div
        className="absolute z-[6] pointer-events-none"
        style={{
          top: A_TOP,
          left: A_LEFT,
          width: A_WIDTH,
          transform: `translate(-50%,-50%) rotate(${A_ANGLE}deg)`,
        }}
      >
        <div className="bg-white text-black py-3 marquee">
          <div className="marquee-track"><BandItems items={bandA} /></div>
        </div>
      </div>
    </section>
  );
}
