import { useEffect, useState } from "react";
import { profile } from "../data/content";

const username = profile.github.split("/").filter(Boolean).pop();

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("github api");

        const user = await userRes.json();
        const repos = await reposRes.json();

        const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

        // tally primary language across repos → top 5 as percentages
        const counts = {};
        repos.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
        });
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
        const langs = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }));

        if (!alive) return;
        setData({ repos: user.public_repos, followers: user.followers, stars, langs });
        requestAnimationFrame(() => alive && setAnimate(true));
      } catch {
        if (alive) setError(true);
      }
    }

    load();
    return () => { alive = false; };
  }, []);

  if (error) {
    return (
      <div className="reveal card p-6 mono text-xs" style={{ color: "var(--color-muted)" }}>
        GitHub stats are rate-limited right now — try a refresh in a minute.
      </div>
    );
  }

  const allKpis = [
    { label: "Public repos", value: data?.repos },
    { label: "Total stars", value: data?.stars },
    { label: "Followers", value: data?.followers },
  ];
  // Once loaded, hide any stat that's 0 (e.g. no stars yet) so nothing looks weak.
  // They reappear automatically the moment the number goes above zero.
  const kpis = data ? allKpis.filter((k) => k.value > 0) : allKpis;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* KPI tiles */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${kpis.length}, minmax(0,1fr))` }}
      >
        {kpis.map((k) => (
          <div key={k.label} className="reveal card p-5 flex flex-col justify-between">
            <div className="display font-extrabold text-[34px] leading-none tabular-nums" style={{ color: "var(--color-orange)" }}>
              {data ? k.value : "—"}
            </div>
            <div className="label mt-3">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Top languages */}
      <div className="reveal card p-6">
        <h4 className="label pb-2 mb-5 border-b border-line">Top languages</h4>
        {!data && <p className="mono text-xs" style={{ color: "var(--color-muted)" }}>loading…</p>}
        <div className="space-y-3">
          {data?.langs.map((l) => (
            <div key={l.name}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="mono" style={{ color: "var(--color-ink)" }}>{l.name}</span>
                <span className="mono tabular-nums" style={{ color: "var(--color-muted)" }}>{l.pct}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: animate ? `${l.pct}%` : "0%",
                    background: "linear-gradient(90deg, var(--color-orange), var(--color-orange-2))",
                    transition: "width 1s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
