import { useEffect, useState } from "react";

const sections = [
  { id: "home",        label: "Home" },
  { id: "about",       label: "About" },
  { id: "crm",         label: "Work · CRM" },
  { id: "helpdesk",    label: "Helpdesk" },
  { id: "skills",      label: "Skills" },
  { id: "activity",    label: "Activity" },
  { id: "recognition", label: "Recognition" },
  { id: "contact",     label: "Contact" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  // top progress bar
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // active section (dot highlight)
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
        <div
          className="h-full origin-left"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--color-orange), var(--color-orange-2))",
          }}
        />
      </div>

      {/* side section dots */}
      <nav className="hidden lg:flex flex-col items-end gap-4 fixed right-7 top-1/2 -translate-y-1/2 z-40">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              aria-label={s.label}
              className="group relative grid place-items-center w-4 h-4"
            >
              <span
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 11 : 7,
                  height: isActive ? 11 : 7,
                  background: isActive ? "var(--color-orange)" : "rgba(255,255,255,0.25)",
                }}
              />
              <span
                className="absolute right-6 whitespace-nowrap label opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                style={{ color: "var(--color-muted)" }}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
