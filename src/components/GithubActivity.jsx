import { GitHubCalendar } from "react-github-calendar";
import { profile } from "../data/content";
import GithubStats from "./GithubStats";

// Pull the handle straight from profile.github so there's one source of truth.
const username = profile.github.split("/").filter(Boolean).pop();

// Recolor the heatmap from GitHub-green → your orange (5 levels: empty → most).
const theme = {
  dark: ["#171717", "#5a2a0e", "#9c4512", "#d4651a", "#f26a1b"],
};

export default function GithubActivity() {
  return (
    <section id="activity" className="mt-[96px] md:mt-[160px]">
      <div className="container-x border-t border-line pt-12">
        <p className="reveal label mb-4" style={{ color: "var(--color-orange)" }}>// Open-source activity</p>
        <h2 className="reveal display font-extrabold text-[42px] md:text-[64px] leading-[1.1] mb-12">
          I ship, consistently.
        </h2>

        {/* live repo/star/language stats */}
        <div className="mb-4">
          <GithubStats />
        </div>

        {/* live contribution heatmap */}
        <div
          className="reveal card p-6 md:p-8 overflow-x-auto"
          style={{ color: "var(--color-muted)" }}
        >
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            theme={theme}
            blockSize={13}
            blockMargin={4}
            fontSize={14}
            errorMessage="Couldn't load GitHub activity right now."
          />
        </div>

        <p className="reveal mono text-xs mt-4" style={{ color: "var(--color-muted)" }}>
          Live from GitHub · @{username}
        </p>
      </div>
    </section>
  );
}
