import { Link } from "react-router-dom";
import { crm } from "../data/content";
import LaptopDashboard from "./LaptopDashboard";
import ArchitectureDiagram from "./ArchitectureDiagram";

export default function CrmCase() {
  return (
    <section id="crm" className="mt-[96px] md:mt-[160px]">
      <div className="container-x border-t border-line pt-12">

        {/* header row — title left, tech tags flush right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Work · 01</p>
            <h2 className="reveal display font-extrabold text-[42px] md:text-[64px] leading-[1.1]">{crm.title}</h2>
            <p className="reveal mt-4 max-w-lg text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
              {crm.blurb}
            </p>
            <Link
              to="/work/central-crm"
              className="reveal inline-flex mt-5 text-sm hover:underline"
              style={{ color: "var(--color-orange)" }}
            >
              Read the full case study →
            </Link>
          </div>
          <div className="reveal flex flex-wrap gap-2 md:max-w-xs md:justify-end shrink-0">
            {crm.stack.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        {/* live dashboard */}
        <div className="reveal relative">
          {/* light bloom emitting from under the dashboard (MacBook-style) */}
          <div className="glow glow-orange" aria-hidden="true"
            style={{ left: "8%", width: "84%", height: 200, bottom: "-60px", opacity: 0.4 }} />
          <div className="relative z-10">
            <LaptopDashboard />
          </div>
          <p className="text-center text-xs mt-4 mono" style={{ color: "var(--color-muted)" }}>
            live demo · updates in real time
          </p>
        </div>

        {/* system architecture */}
        <p className="reveal label mt-16 mb-4" style={{ color: "var(--color-orange)" }}>// System architecture</p>
        <ArchitectureDiagram />

        {/* module cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {crm.modules.map((m, i) => (
            <div key={m.title} className="reveal card p-6">
              <div className="mono text-xs mb-3" style={{ color: "var(--color-orange)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display font-semibold text-lg mb-2">{m.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{m.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
