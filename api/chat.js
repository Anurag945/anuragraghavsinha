// Vercel serverless function — POST /api/chat
// Holds the API key (server-side env var) and proxies to the LLM.
import { askAssistant } from "./lib/answer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: "No messages provided." });
      return;
    }
    const answer = await askAssistant(messages);
    res.status(200).json({ answer });
  } catch (e) {
    const msg = String(e?.message || e);
    if (msg.includes("missing_key")) {
      res.status(503).json({ error: "not_configured" });
      return;
    }
    res.status(500).json({ error: "assistant_error" });
  }
}
