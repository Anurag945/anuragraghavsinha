// Giant faint background letter behind a section (Gleamy-style).
export default function GhostLetter({ char, className = "" }) {
  return (
    <span className={`ghost ${className}`} aria-hidden="true">
      {char}
    </span>
  );
}
