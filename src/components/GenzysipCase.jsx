import { genzysip, images } from "../data/content";
import Photo from "./Photo";

export default function GenzysipCase() {
  return (
    <section id="genzysip" className="mt-[96px] md:mt-[160px]">
      <div className="container-x border-t border-line pt-12">

        {/* header row — title left, tech tags flush right (matches Work 01/02) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>
              // Work · {genzysip.index}
            </p>
            <h2 className="reveal display font-extrabold text-[42px] md:text-[64px] leading-[1.1]">
              {genzysip.title}
            </h2>
            <p className="reveal label mt-3">{genzysip.subtitle}</p>
            <p className="reveal mt-4 max-w-lg text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
              {genzysip.blurb}
            </p>
            <div className="reveal mt-5 flex flex-wrap items-center gap-5">
              <a
                href={genzysip.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:underline"
                style={{ color: "var(--color-orange)" }}
              >
                Visit live site ↗
              </a>
              <a
                href={genzysip.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:underline"
                style={{ color: "var(--color-muted)" }}
              >
                Source ↗
              </a>
            </div>
          </div>
          <div className="reveal flex flex-wrap gap-2 md:max-w-xs md:justify-end shrink-0">
            {genzysip.stack.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        {/* browser-framed still from the live sequence */}
        {images.genzysip && (
          <div className="reveal relative">
            <div className="glow glow-orange" aria-hidden="true"
              style={{ left: "8%", width: "84%", height: 200, bottom: "-60px", opacity: 0.35 }} />
            <div className="relative z-10 card overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] mono" style={{ color: "var(--color-muted)" }}>
                  genzysip.vercel.app
                </span>
              </div>
              <Photo
                src={images.genzysip}
                alt="Genzy Sip hero — a frame from the scroll-scrubbed product film, cans mid-splash"
                rounded="rounded-none"
                className="w-full aspect-video"
              />
            </div>
            <p className="text-center text-xs mt-4 mono" style={{ color: "var(--color-muted)" }}>
              one of 540 frames · the sequence scrubs with the scroll
            </p>
          </div>
        )}

        {/* the three facts */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {genzysip.facts.map((f) => (
            <div key={f.label} className="reveal border border-line bg-white/[0.02] p-6 flex flex-col justify-between transition-colors hover:border-[rgba(242,106,27,0.5)]">
              <div className="display font-extrabold text-[36px] md:text-[42px] leading-none" style={{ color: "var(--color-orange)" }}>
                {f.stat}
              </div>
              <div className="label mt-2">{f.label}</div>
            </div>
          ))}
        </div>

        {/* how it actually works */}
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {genzysip.modules.map((m, i) => (
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
