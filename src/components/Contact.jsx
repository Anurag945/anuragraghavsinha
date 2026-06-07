import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="mt-[96px] md:mt-[160px] pb-[96px] md:pb-[160px]">
      <div className="container-x">

        {/* bordered box with hover wipe */}
        <div className="relative border border-line py-24 md:py-32 text-center overflow-hidden group transition-colors duration-500 hover:border-[rgba(242,106,27,0.5)]">
          {/* orange fill wipes up from bottom on hover */}
          <div
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none"
            style={{ background: "rgba(242,106,27,0.06)" }}
          />

          <div className="relative z-10">
            <p className="reveal label mb-6" style={{ color: "var(--color-orange)" }}>// Contact</p>
            {/* display-xl scaled: 60px → 100px, weight 900, lh 1 */}
            <h2 className="reveal display font-black text-[60px] md:text-[100px] leading-none mb-12">
              Let's build<br />something.
            </h2>

            <div className="reveal flex flex-col sm:flex-row justify-center gap-4">
              <a href={`mailto:${profile.email}`} className="btn-grad label px-8 py-4 transition">
                EMAIL ME
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="label border border-line px-8 py-4 hover:bg-white/5 transition"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
