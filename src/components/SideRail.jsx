import { profile } from "../data/content";

// Fixed left side-rail: social links (top) + vertical labels (bottom).
// Hidden on small screens to avoid clutter.
export default function SideRail() {
  const socials = [
    { label: "GH", href: profile.github },
    { label: "IN", href: profile.linkedin },
    { label: "@", href: `mailto:${profile.email}` },
  ];

  return (
    <div className="hidden lg:flex fixed left-6 inset-y-0 z-30 flex-col justify-between py-8 pointer-events-none">
      {/* socials */}
      <div className="flex flex-col items-center gap-4 pointer-events-auto mt-20">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-xs mono text-muted hover:text-ink transition"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-orange)" }} />
            {s.label}
          </a>
        ))}
      </div>

      {/* vertical labels */}
      <div className="flex flex-col items-center gap-6 pointer-events-auto mb-8">
        <span className="vtext label">Full-Stack</span>
        <span className="vtext label">React · Node</span>
        <span className="w-px h-16 bg-white/15" />
      </div>
    </div>
  );
}
