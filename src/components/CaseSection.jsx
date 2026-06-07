// Reusable section wrapper for the deep-dive case-study pages.
export default function CaseSection({ label, title, children, narrow = false }) {
  return (
    <section className="mt-[72px] md:mt-[110px]">
      <div className="container-x border-t border-line pt-12">
        {label && (
          <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// {label}</p>
        )}
        {title && (
          <h2 className="reveal display font-extrabold text-[30px] md:text-[46px] leading-[1.1] mb-8">
            {title}
          </h2>
        )}
        <div className={narrow ? "max-w-3xl" : ""}>{children}</div>
      </div>
    </section>
  );
}

// Prose paragraph block (muted, comfortable reading width).
export function Prose({ children }) {
  return (
    <div
      className="reveal text-[17px] leading-[1.75] space-y-4 max-w-3xl"
      style={{ color: "var(--color-muted)" }}
    >
      {children}
    </div>
  );
}
