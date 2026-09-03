import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "What's his backend experience?",
  "Tell me about the CRM project",
  "Is he open to remote work?",
  "What did he build solo?",
];

const GREETING = {
  role: "assistant",
  content:
    "Hi! I'm Anurag's AI assistant — ask me anything about his experience, projects, or skills.",
};

export default function AskAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");

    const next = [...messages, { role: "user", content: q }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });

      if (res.status === 503) {
        setMessages((m) => [...m, {
          role: "assistant",
          content: "⚙️ The assistant isn't connected yet — it goes live once the site is deployed with an API key. Until then, email Anurag at anuragraghavsinha@gmail.com.",
        }]);
      } else if (res.status === 429) {
        setMessages((m) => [...m, {
          role: "assistant",
          content: "That's a lot of questions in a short window — give me a minute to catch up, then ask again. In a hurry? Email Anurag at anuragraghavsinha@gmail.com.",
        }]);
      } else if (!res.ok) {
        throw new Error("bad response");
      } else {
        const data = await res.json();
        setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
      }
    } catch {
      setMessages((m) => [...m, {
        role: "assistant",
        content: "Sorry — I hit a snag answering that. Please try again, or email anuragraghavsinha@gmail.com.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* launcher button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Ask AI about Anurag"
        className="fixed left-6 bottom-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 btn-grad shadow-lg transition-transform hover:scale-[1.03]"
      >
        <span aria-hidden="true">✦</span>
        <span className="label" style={{ color: "#0a0a0a" }}>{open ? "Close" : "Ask AI"}</span>
      </button>

      {/* chat panel */}
      {open && (
        <div className="fixed left-6 bottom-24 z-50 w-[min(380px,calc(100vw-3rem))] card overflow-hidden flex flex-col"
             style={{ height: "min(540px, 70vh)", background: "#0c0c0c" }}>
          {/* header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-line shrink-0">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-orange)" }} />
            <span className="label">Ask Anurag's AI</span>
            <span className="ml-auto mono text-[10px]" style={{ color: "var(--color-muted)" }}>powered by an LLM</span>
          </div>

          {/* messages */}
          <div ref={scrollRef} data-lenis-prevent className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[85%] text-sm leading-relaxed rounded-2xl px-3.5 py-2.5"
                  style={
                    m.role === "user"
                      ? { background: "var(--color-orange)", color: "#0a0a0a" }
                      : { background: "rgba(255,255,255,0.05)", color: "var(--color-ink)" }
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-3.5 py-2.5 text-sm" style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-muted)" }}>
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "var(--color-muted)", animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "var(--color-muted)", animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "var(--color-muted)", animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            {/* suggestions (only before the first user message) */}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="chip text-left hover:text-white">
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 p-3 border-t border-line shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Anurag…"
              className="flex-1 bg-transparent text-sm outline-none px-2 py-2"
              style={{ color: "var(--color-ink)" }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn-grad rounded-full w-9 h-9 grid place-items-center disabled:opacity-40 transition"
              aria-label="Send"
            >
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}
