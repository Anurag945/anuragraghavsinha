// Spinning circular text badge (Gleamy-style). Click scrolls to a target.
export default function RotatingBadge({
  text = "SCROLL DOWN • SEE MY WORK • ",
  targetId = "crm",
  className = "",
  style = {},
}) {
  const go = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={go} aria-label="Scroll to work" style={style} className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 200 200" className="spin w-[116px] h-[116px]">
        <defs>
          <path id="badgeCircle" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
        </defs>
        <text fill="currentColor" className="mono" style={{ fontSize: "13px", letterSpacing: "3px" }}>
          <textPath href="#badgeCircle">{text.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="absolute grid place-items-center w-9 h-9 rounded-full" style={{ background: "var(--color-orange)", color: "#0a0a0a" }}>
        ↓
      </span>
    </button>
  );
}
