import { profile, images } from "../data/content";
import Photo from "./Photo";

const stats = [
  ["14+", "Months experience"],
  ["02", "Production systems"],
  ["350+", "Tickets resolved"],
];

export default function About() {
  return (
    <section id="about" className="mt-[96px] md:mt-[160px]">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* left label col (4/12) */}
        <div className="md:col-span-4">
          <p className="reveal label" style={{ color: "var(--color-orange)" }}>// About me</p>
        </div>

        {/* right content col (8/12) */}
        <div className="md:col-span-8">
          {/* headline-lg: 42px → 64px, weight 800 */}
          <h2 className="reveal display font-extrabold text-[42px] md:text-[64px] leading-[1.1] mb-12">
            Building things that actually ship.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* photo */}
            <div className="reveal">
              <Photo src={images.me} label="me.jpg" className="w-full aspect-square" rounded="rounded-none" />
            </div>

            {/* body + stats */}
            <div className="reveal flex flex-col justify-between py-2">
              <p className="text-[18px] leading-[1.6] mb-8" style={{ color: "var(--color-muted)" }}>
                {profile.intro}
              </p>
              <div className="grid grid-cols-1 gap-6 border-l border-line pl-6">
                {stats.map(([n, l]) => (
                  <div key={l}>
                    <div className="display font-extrabold text-[42px] leading-none" style={{ color: "var(--color-orange)" }}>{n}</div>
                    <div className="label mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
