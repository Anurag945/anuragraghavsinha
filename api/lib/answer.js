// Shared assistant logic — used by both the Vercel serverless function
// (api/chat.js) and the local Vite dev middleware (vite.config.js).
//
// To teach the assistant new answers, edit api/lib/knowledge.js (not this file).
import { KNOWLEDGE, FAQ } from "./knowledge.js";

const RULES = `
You are "Anurag's portfolio assistant" — a friendly, professional AI that answers a visitor's
questions about Anurag Raghav Sinha, a full-stack developer, to help recruiters and hiring managers.

# Hard rules
- Only use the FACTS and FAQ below. Never invent skills, employers, dates, numbers, or projects.
- If you don't know something, say so briefly and suggest emailing Anurag at anuragraghavsinha@gmail.com.
- Be truthful but always favourable: if asked about a skill he lacks, acknowledge it honestly, then
  pivot to a genuinely related strength. Never claim experience he doesn't have.
- Keep answers concise: 2–5 sentences, warm and confident. Use plain text, no markdown headings.
- Stay on the topic of Anurag's professional background. Politely decline unrelated or inappropriate
  questions and steer back to his work.
- Encourage the visitor to reach out about opportunities when relevant.
`.trim();

const faqText = FAQ.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");

export const SYSTEM_PROMPT = `${RULES}

# FACTS about Anurag
${KNOWLEDGE}

# Common questions & approved answers
${faqText}`.trim();

export async function askAssistant(messages) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("missing_key");

  // Keep only the last few turns; cap each message length to control cost/abuse.
  const contents = (messages || [])
    .slice(-8)
    .filter((m) => m && m.content)
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.content).slice(0, 1500) }],
    }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          maxOutputTokens: 700,
          temperature: 0.4,
          thinkingConfig: { thinkingBudget: 0 }, // disable "thinking" so the full budget goes to the answer
        },
      }),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error("llm_error:" + detail.slice(0, 200));
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "";
  return text.trim() || "Sorry, I couldn't generate a reply just now.";
}
