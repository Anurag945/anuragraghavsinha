import { useAudience } from "../context/audience";

export default function AudienceSwitch() {
  const { id, setId, all } = useAudience();

  return (
    <div
      className="inline-flex items-center gap-1 p-1 rounded-full border border-line"
      role="group"
      aria-label="Choose what to highlight"
    >
      <span className="label px-3 hidden sm:inline" style={{ color: "var(--color-muted)" }}>
        I'm a
      </span>
      {all.map((a) => {
        const active = a.id === id;
        return (
          <button
            key={a.id}
            onClick={() => setId(a.id)}
            aria-pressed={active}
            className="label rounded-full px-3.5 py-2 transition-colors"
            style={
              active
                ? { background: "var(--color-orange)", color: "#0a0a0a" }
                : { color: "var(--color-muted)" }
            }
          >
            {a.label}
          </button>
        );
      })}
    </div>
  );
}
