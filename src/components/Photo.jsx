import { useState } from "react";

// Renders the image if it exists in /public/images, otherwise a clearly
// labeled dark placeholder so the layout never breaks before you add photos.
export default function Photo({ src, label, className = "", rounded = "rounded-2xl" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`relative grid place-items-center overflow-hidden ${rounded} ${className}`}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1.5px dashed rgba(255,255,255,0.16)",
        }}
      >
        <div className="text-center px-4">
          <div className="text-[10px] mono tracking-[0.25em] text-muted uppercase">Photo placeholder</div>
          <div className="mt-1 text-sm text-ink/80">{label}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={label}
      onError={() => setFailed(true)}
      className={`object-cover ${rounded} ${className}`}
    />
  );
}
