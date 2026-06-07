import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
          © {new Date().getFullYear()} {profile.name} — Built with React &amp; GSAP.
        </p>
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: profile.linkedin },
            { label: "GitHub",   href: profile.github },
            { label: "Email",    href: `mailto:${profile.email}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
