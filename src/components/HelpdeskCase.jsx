import { Link } from "react-router-dom";
import { helpdesk } from "../data/content";

export default function HelpdeskCase() {
  return (
    <section id="helpdesk" className="mt-[96px] md:mt-[160px]">
      <div className="container-x border-t border-line pt-12">

        <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Work · 02</p>

        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="display font-extrabold text-[42px] md:text-[64px] leading-[1.1]">{helpdesk.title}</h2>
            <p className="mt-4 max-w-xl text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
              {helpdesk.blurb}
            </p>
            <Link
              to="/work/lnmiit-helpdesk"
              className="reveal inline-flex mt-5 text-sm hover:underline"
              style={{ color: "var(--color-orange)" }}
            >
              Read the full case study →
            </Link>
          </div>
          <a
            href={helpdesk.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm whitespace-nowrap hover:underline transition-opacity hover:opacity-70"
            style={{ color: "var(--color-orange)" }}
          >
            Visit live site ↗
          </a>
        </div>

        {/* stat tiles — 2×2 grid, aspect-video, p-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {helpdesk.tiles.map((t) => (
            <div
              key={t.label}
              className="reveal border border-line bg-white/[0.02] p-8 aspect-video flex flex-col justify-between transition-colors hover:border-[rgba(242,106,27,0.5)]"
            >
              <span className="material-symbols-outlined text-4xl" style={{ color: "var(--color-orange)" }}>
                {t.icon}
              </span>
              <div>
                <div className="display font-extrabold text-[42px] leading-none" style={{ color: "var(--color-orange)" }}>
                  {t.stat}
                </div>
                <div className="label mt-1">{t.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* module cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {helpdesk.modules.map((m, i) => (
            <div key={m.title} className="reveal card p-6">
              <div className="mono text-xs mb-3" style={{ color: "var(--color-orange)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display font-semibold text-lg mb-2">{m.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{m.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-2">
          {helpdesk.stack.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>

      </div>
    </section>
  );
}
