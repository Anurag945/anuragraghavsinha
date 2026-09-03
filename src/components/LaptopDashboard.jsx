import { useEffect, useMemo, useState } from "react";
import { crm } from "../data/content";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const BAR_COUNT = 14;
const randomBars = () => Array.from({ length: BAR_COUNT }, () => 26 + Math.random() * 72);

export default function LaptopDashboard() {
  const [kpis, setKpis] = useState(crm.kpis.map((k) => k.base));
  const [bars, setBars] = useState(randomBars);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setKpis((prev) =>
        prev.map((v, i) => {
          const jitter = Math.random() * 5 - 2;
          return Math.max(0, Math.round((crm.kpis[i].base + jitter) * 10) / 10);
        })
      );
      setBars(randomBars());
      setPulse(true);
      setTimeout(() => setPulse(false), 700);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const peak = useMemo(() => Math.max(...bars), [bars]);

  return (
    <div className="w-full">
      {/* Browser-style window frame (clean, contained) */}
      <div className="card overflow-hidden rounded-2xl shadow-2xl">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] mono text-muted">central-crm.app/dashboard</span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${pulse ? "bg-emerald-400" : "bg-emerald-500/60"}`} />
            <span className="text-[10px] mono text-muted">{pulse ? "syncing…" : "live"}</span>
          </span>
        </div>

        {/* dashboard body */}
        <div className="p-4" style={{ background: "var(--color-bg-2)" }}>
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {crm.kpis.map((k, i) => (
              <div key={k.label} className="rounded-xl border border-line bg-white/[0.03] p-3">
                <div className="text-[9px] uppercase tracking-wide text-muted">{k.label}</div>
                <div className="text-lg font-bold mt-1 tabular-nums">
                  {k.prefix}
                  {kpis[i]}
                  {k.suffix}
                </div>
                <div className="text-[9px] text-emerald-400 mt-0.5">▲ live</div>
              </div>
            ))}
          </div>

          {/* chart + pipeline */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="col-span-2 rounded-xl border border-line bg-white/[0.03] p-3">
              <div className="text-[9px] uppercase tracking-wide text-muted mb-2">Revenue · last 14 days</div>
              <div className="flex items-end gap-[3px] h-[64px]">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-[height] duration-700 ease-out"
                    style={{
                      height: `${h}%`,
                      background:
                        h === peak
                          ? "linear-gradient(180deg,var(--color-orange-2),var(--color-orange))"
                          : "linear-gradient(180deg,rgba(242,106,27,.55),rgba(242,106,27,.2))",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white/[0.03] p-3 flex flex-col justify-between">
              <div className="text-[9px] uppercase tracking-wide text-muted">Pipeline</div>
              {["New", "Qualified", "Won"].map((s, i) => (
                <div key={s} className="flex items-center justify-between text-[10px] mt-1.5">
                  <span className="text-muted">{s}</span>
                  <span className="font-semibold tabular-nums">{[12, 9, 5][i] + (pulse ? 1 : 0)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
