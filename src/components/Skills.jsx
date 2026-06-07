import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="mt-[96px] md:mt-[160px]">
      <div className="container-x">

        <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Capabilities</p>
        <h2 className="reveal display font-extrabold text-[42px] md:text-[64px] leading-[1.1] mb-12">The toolkit.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 border-t border-line pt-12">
          {skills.map((s) => (
            <div key={s.group} className="reveal">
              <h4 className="label pb-2 mb-6 border-b border-line">{s.group}</h4>
              <div className="flex flex-wrap gap-3">
                {s.items.map((item) => (
                  <span key={item} className="chip-sq">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
