import { useState } from "react";

// Renders an image from /public/images. If the path is null or the file fails
// to load, renders nothing at all — a half-finished placeholder box is worse on
// a live portfolio than simply not showing the image. Callers that would be left
// with an empty container should check the path themselves before rendering.
// `fit`: "cover" crops to fill the box (portraits, photos); "contain" shows the
// whole image (documents like certificates, where cropping loses the content).
export default function Photo({ src, alt, className = "", rounded = "rounded-2xl", fit = "cover" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${rounded} ${className}`}
    />
  );
}
