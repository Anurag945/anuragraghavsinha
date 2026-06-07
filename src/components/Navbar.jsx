import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { profile } from "../data/content";

const links = [
  { label: "Work", id: "crm" },
  { label: "Helpdesk", id: "helpdesk" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  // If we're on a sub-page, go home first, then scroll to the section.
  const go = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 160);
    } else {
      scrollToId(id);
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") navigate("/");
    else window.__lenis?.scrollTo(0);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#060606]/85 backdrop-blur-md border-b border-line" : "py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <button onClick={goHome} className="display text-xl font-bold tracking-tight">
          Anurag<span style={{ color: "var(--color-orange)" }}>.</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="label hover:text-white transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="btn-grad label rounded-full px-6 py-3 transition"
        >
          Résumé ↗
        </a>
      </nav>
    </header>
  );
}
