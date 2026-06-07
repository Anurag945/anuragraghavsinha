// Infinite horizontal marquee of keywords, separated by orange dots.
export default function Marquee({ items, className = "", big = false }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className={`flex items-center ${big ? "display text-3xl md:text-5xl font-bold" : "mono text-sm"} text-ink/90`}
          >
            <span className="px-6">{t}</span>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-orange)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
