import { profile, recognition, education, images } from "../data/content";
import Photo from "./Photo";

export default function Recognition() {
  const { award, certs } = recognition;
  return (
    <section id="recognition" className="mt-[96px] md:mt-[160px]">
      <div className="container-x border-t border-line pt-12">
        <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Recognition</p>
        <h2 className="reveal display font-extrabold text-[42px] md:text-[64px] leading-[1.1] mb-12">Proof &amp; honors.</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Award feature — caption leads, photo fills the tall remainder */}
          <div className="reveal card overflow-hidden p-0 flex flex-col">
            <div className="p-6">
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <h3 className="display text-xl font-bold">“{award.title}”</h3>
              </div>
              <p className="text-sm text-muted mt-1">{award.issuer} · {award.date}</p>
              <p className="text-sm text-ink/80 mt-3 leading-relaxed">{award.text}</p>
            </div>

            {images.awardCeo && (
              // mt-auto pins the photo to the bottom of the stretched card.
              // contain, not cover — this is a portrait shot, and a cover crop
              // would slice the heads or the certificate out of frame.
              <div className="mt-auto px-6 pb-6">
                <Photo
                  src={images.awardCeo}
                  alt={`${profile.name} receiving the “${award.title}” award from the CSK Infotech CEO`}
                  fit="contain"
                  rounded="rounded-lg"
                  className="w-full max-h-[560px] mx-auto"
                />
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="grid gap-6 content-start">
            {images.certChoice && (
              <div className="reveal card overflow-hidden p-4">
                {/* contain, not cover — this is a photo of the framed certificate,
                    and a crop would cut the frame or the text off. */}
                <Photo
                  src={images.certChoice}
                  alt={`The framed “${award.title}” certificate awarded to ${profile.name} by CSK Information Technology`}
                  fit="contain"
                  rounded="rounded-lg"
                  className="w-full max-h-[460px] mx-auto"
                />
              </div>
            )}

            <div className="reveal card p-6">
              <h3 className="display font-semibold mb-4">Certifications</h3>
              <ul className="space-y-3">
                {certs.map((c) => (
                  <li key={c.title} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-ink/90">{c.title}</p>
                      <p className="text-sm text-muted">{c.issuer}</p>
                    </div>
                    <span className="mono text-xs text-muted whitespace-nowrap">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal card p-6">
              <h3 className="display font-semibold mb-1">Education</h3>
              <p className="font-medium text-ink/90">{education.degree}</p>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="mono text-xs text-muted mt-2">{education.period} · {education.score}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
