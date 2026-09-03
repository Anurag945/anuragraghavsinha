import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-x pt-[180px] pb-[160px] text-center">
      <p className="label mb-6" style={{ color: "var(--color-orange)" }}>// 404</p>
      <h1 className="display font-black text-[64px] md:text-[110px] leading-none tracking-[-0.03em]">
        Nothing here<span style={{ color: "var(--color-orange)" }}>.</span>
      </h1>
      <p className="mt-6 text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
        That page doesn't exist — but the work does.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn-grad rounded-full px-7 py-3.5 transition">
          Back to home
        </Link>
        <Link
          to="/work/central-crm"
          className="rounded-full border border-line px-7 py-3.5 font-medium hover:bg-white/5 transition"
        >
          See a case study
        </Link>
      </div>
    </section>
  );
}
