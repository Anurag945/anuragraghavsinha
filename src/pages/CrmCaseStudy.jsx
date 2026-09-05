import { Link } from "react-router-dom";
import { crm } from "../data/content";
import LaptopDashboard from "../components/LaptopDashboard";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import CaseSection, { Prose } from "../components/CaseSection";

export default function CrmCaseStudy() {
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

        <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Case study · 01</p>
        <h1 className="reveal display font-black text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.03em]">
          Central CRM<span style={{ color: "var(--color-orange)" }}>.</span>
        </h1>
        <p className="reveal mt-5 max-w-2xl text-[18px] leading-[1.6]" style={{ color: "var(--color-muted)" }}>
          {crm.blurb}
        </p>

        {/* meta */}
        <div className="reveal mt-10 grid sm:grid-cols-3 gap-8 border-t border-line pt-8">
          <div>
            <p className="label mb-3">Role</p>
            <p className="text-ink/90 text-[15px] leading-relaxed">Full-stack developer · 2-person team (AI-assisted)</p>
          </div>
          <div>
            <p className="label mb-3">What I owned</p>
            <p className="text-ink/90 text-[15px] leading-relaxed">Quotation &amp; approval engine · cron reminders · SSO</p>
          </div>
          <div>
            <p className="label mb-3">Stack</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {crm.stack.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* ── Overview ── */}
      <CaseSection label="Overview" title="The problem">
        <Prose>
          <p>
            CSK Infotech's sales team ran their entire pipeline across spreadsheets and email threads.
            Quotations were rebuilt by hand for every deal, approvals happened informally over chat, and
            deals that went quiet simply slipped through the cracks.
          </p>
          <p>
            The goal was to replace all of it with one role-based CRM that owned the full sales lifecycle —
            leads, pipeline, quotations, cost-sheets, approvals and analytics — in a single place the whole
            team could trust.
          </p>
        </Prose>
      </CaseSection>

      {/* ── My contribution (honest framing) ── */}
      <CaseSection label="My contribution" title="What I built">
        <Prose>
          <p>
            I worked on a two-person engineering team, using AI tooling to move faster through boilerplate.
            Within that, I owned three areas end to end:
          </p>
        </Prose>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {crm.modules.map((m, i) => (
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

      {/* ── Live dashboard ── */}
      <CaseSection label="Product" title="The dashboard">
        <Prose>
          <p>
            A role-scoped dashboard surfaces pipeline value, open deals and win-rate at a glance, with
            live-updating figures so the team always sees the current state of play. (Illustrative demo
            data below.)
          </p>
        </Prose>
        <div className="reveal relative mt-8">
          <div className="glow glow-orange" aria-hidden="true"
            style={{ left: "8%", width: "84%", height: 200, bottom: "-60px", opacity: 0.4 }} />
          <div className="relative z-10"><LaptopDashboard /></div>
        </div>
      </CaseSection>

      {/* ── Architecture ── */}
      <CaseSection label="Architecture" title="How it fits together">
        <Prose>
          <p>
            The client authenticates through a central auth server (SSO / JWT), then talks to a Node/Express
            API. Identities resolve across a MySQL identity store and the MongoDB CRM data, while a node-cron
            job continuously scans for stagnant deals and emails the owning salesperson.
          </p>
        </Prose>
        <div className="mt-8">
          <ArchitectureDiagram />
        </div>
      </CaseSection>

      {/* ── Results ── */}
      <CaseSection label="Outcome" title="The result">
        <Prose>
          <p>
            The quotation flow turned ~30 minutes of manual spreadsheet work into a few guided clicks, with a
            clear Pending → Approved / Rejected trail replacing ad-hoc chat approvals. The cron reminders
            stopped deals from going stale unnoticed, keeping the pipeline honest automatically.
          </p>
          <p>
            This work was recognised internally with the <span style={{ color: "var(--color-orange)" }}>“Choice of CSK”</span> award
            from the company CEO.
          </p>
        </Prose>

        <div className="reveal mt-10 flex flex-wrap gap-4">
          <Link to="/work/it-helpdesk" className="btn-grad rounded-full px-7 py-3.5 transition">
            Next: IT Helpdesk →
          </Link>
          <Link to="/" className="rounded-full border border-line px-7 py-3.5 font-medium hover:bg-white/5 transition">
            Back to home
          </Link>
        </div>
      </CaseSection>
    </article>
  );
}
