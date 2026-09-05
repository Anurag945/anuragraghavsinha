import { Link } from "react-router-dom";
import { helpdesk } from "../data/content";
import CaseSection, { Prose } from "../components/CaseSection";

export default function HelpdeskCaseStudy() {
  return (
    <article className="pt-[120px] pb-[120px]">
      {/* ── Header ── */}
      <div className="container-x">
        <Link
          to="/"
          className="reveal label inline-flex items-center gap-2 mb-10 hover:text-white transition-colors"
          style={{ color: "var(--color-muted)" }}
        >
          ← Back to home
        </Link>

        <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Case study · 02</p>
        <h1 className="reveal display font-black text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.03em]">
          IT Helpdesk<span style={{ color: "var(--color-orange)" }}>.</span>
        </h1>
        <p className="reveal mt-5 max-w-2xl text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
          {helpdesk.blurb}
        </p>

        {/* meta */}
        <div className="reveal mt-10 grid sm:grid-cols-3 gap-8 border-t border-line pt-8">
          <div>
            <p className="label mb-3">Role</p>
            <p className="text-ink/90 text-[15px] leading-relaxed">Sole designer, developer &amp; deployer</p>
          </div>
          <div>
            <p className="label mb-3">Context</p>
            <p className="text-ink/90 text-[15px] leading-relaxed">Production support portal · multi-year maintenance contract</p>
          </div>
          <div>
            <p className="label mb-3">Stack</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {helpdesk.stack.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        {/* live link — withheld while the client is unnamed */}
        {helpdesk.url ? (
          <a
            href={helpdesk.url}
            target="_blank"
            rel="noreferrer"
            className="reveal inline-flex mt-8 text-sm hover:underline"
            style={{ color: "var(--color-orange)" }}
          >
            Visit the live site ↗
          </a>
        ) : (
          <p className="reveal mono text-xs mt-8" style={{ color: "var(--color-muted)" }}>
            Internal client system — walkthrough available on request.
          </p>
        )}
      </div>

      {/* ── Stats ── */}
      <CaseSection label="At a glance">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {helpdesk.glance.map((t) => (
            <div key={t.label} className="reveal border border-line bg-white/[0.02] p-6 aspect-video flex flex-col justify-between">
              <div className="display font-extrabold text-[40px] leading-none" style={{ color: "var(--color-orange)" }}>{t.stat}</div>
              <div className="label">{t.label}</div>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* ── Overview ── */}
      <CaseSection label="Overview" title="The problem">
        <Prose>
          <p>
            An engineering institute needed a real IT helpdesk — somewhere 150+
            faculty could raise issues and a 10-person field team could track, prioritise and resolve them,
            all under a multi-year maintenance contract.
          </p>
          <p>
            I took it on solo: I single-handedly designed, built and deployed the entire system, from the
            database schema to the production server.
          </p>
        </Prose>
      </CaseSection>

      {/* ── What I built ── */}
      <CaseSection label="What I built" title="The system">
        <Prose>
          <p>Three pieces did the heavy lifting:</p>
        </Prose>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {helpdesk.modules.map((m, i) => (
            <div key={m.title} className="reveal card p-6">
              <div className="mono text-xs mb-3" style={{ color: "var(--color-orange)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display font-semibold text-lg mb-2">{m.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{m.text}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* ── Engineering detail ── */}
      <CaseSection label="Engineering" title="Decisions that mattered">
        <Prose>
          <p>
            <span style={{ color: "var(--color-ink)" }}>Live SLA, not stored SLA.</span> Response and
            resolution targets are computed live from timestamps with business-hour math, so the numbers can
            never drift out of sync with reality.
          </p>
          <p>
            <span style={{ color: "var(--color-ink)" }}>Escalation as a background job.</span> A 5-minute
            cron poll walks breaching tickets up the L1 → L2 chain and writes a full audit trail of every
            event, so nothing is lost and everything is accountable.
          </p>
          <p>
            <span style={{ color: "var(--color-ink)" }}>Security by default.</span> bcrypt password hashing
            with transparent rehash of legacy MD5 logins, parameterised SQL throughout, single-use reset
            tokens, and a before/after audit log on sensitive changes.
          </p>
        </Prose>
      </CaseSection>

      {/* ── Outcome ── */}
      <CaseSection label="Outcome" title="The result">
        <Prose>
          <p>
            The institute runs its IT support on it today — 150+ faculty and a 10-person field team working
            against clear SLAs, with escalation and auditing handled automatically. It's the project I'm
            proudest of, because every layer of it is mine.
          </p>
        </Prose>

        <div className="reveal mt-10 flex flex-wrap gap-4">
          <Link to="/work/central-crm" className="btn-grad rounded-full px-7 py-3.5 transition">
            ← Back: Central CRM
          </Link>
          <Link to="/" className="rounded-full border border-line px-7 py-3.5 font-medium hover:bg-white/5 transition">
            Back to home
          </Link>
        </div>
      </CaseSection>
    </article>
  );
}
