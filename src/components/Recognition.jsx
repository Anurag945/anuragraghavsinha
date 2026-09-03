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
          {/* Award feature */}
          <div className="reveal card overflow-hidden p-0">
            <Photo
              src={images.awardCeo}
              alt={`${award.title} award being presented by the CSK Infotech CEO`}
              rounded="rounded-none"
              className="w-full aspect-video"
            />
            <div className="p-6">
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <h3 className="display text-xl font-bold">“{award.title}”</h3>
              </div>
              <p className="text-sm text-muted mt-1">{award.issuer} · {award.date}</p>
              <p className="text-sm text-ink/80 mt-3 leading-relaxed">{award.text}</p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid gap-6 content-start">
            {images.certChoice && (
              <div className="reveal card overflow-hidden p-4">
                {/* contain, not cover — the certificate is portrait, and cropping
                    it to a 16:9 strip would hide the thing worth showing. */}
                <Photo
                  src={images.certChoice}
                  alt={`“${award.title}” certificate awarded to ${profile.name}`}
                  fit="contain"
                  rounded="rounded-lg"
                  className="w-full max-h-[420px]"
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
