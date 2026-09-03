// In-memory rate limiter for the public /api/chat endpoint.
//
// The endpoint proxies to Gemini on a personal API key, so it's an open faucet
// on someone else's quota unless it's throttled. Serverless instances are
// short-lived and there may be several at once, so this is not a hard global
// guarantee — but instances are reused across invocations, which is enough to
// stop the realistic abuse case (one person scripting the endpoint in a loop).
//
// If this ever needs to be exact, swap the Map for Upstash/Vercel KV; the
// checkRateLimit() signature stays the same.

const PER_IP = { limit: 10, windowMs: 60 * 1000 }; // 10 messages / minute / IP
const PER_IP_HOURLY = { limit: 60, windowMs: 60 * 60 * 1000 }; // 60 / hour / IP
const GLOBAL = { limit: 120, windowMs: 60 * 1000 }; // 120 / minute overall

const hits = new Map(); // key -> number[] (request timestamps, ascending)
const MAX_KEYS = 5000; // hard ceiling so a spoofed-IP flood can't grow the Map forever

function take(key, { limit, windowMs }, now) {
  const cutoff = now - windowMs;
  const recent = (hits.get(key) || []).filter((t) => t > cutoff);

  if (recent.length >= limit) {
    hits.set(key, recent);
    // Oldest request in the window ages out at recent[0] + windowMs.
    return { ok: false, retryAfter: Math.ceil((recent[0] + windowMs - now) / 1000) };
  }

  recent.push(now);
  hits.set(key, recent);
  return { ok: true };
}

// Drop keys whose newest hit is older than the longest window we track.
function sweep(now) {
  const cutoff = now - PER_IP_HOURLY.windowMs;
  for (const [key, times] of hits) {
    if (!times.length || times[times.length - 1] <= cutoff) hits.delete(key);
  }
}

export function clientIp(req) {
  const fwd = req.headers?.["x-forwarded-for"];
  if (typeof fwd === "string" && fwd) return fwd.split(",")[0].trim();
  if (Array.isArray(fwd) && fwd.length) return String(fwd[0]).split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

export function checkRateLimit(req) {
  const now = Date.now();
  if (hits.size > MAX_KEYS) sweep(now);

  const global = take("__global__", GLOBAL, now);
  if (!global.ok) return global;

  const ip = clientIp(req);
  const perMinute = take(`m:${ip}`, PER_IP, now);
  if (!perMinute.ok) return perMinute;

  return take(`h:${ip}`, PER_IP_HOURLY, now);
}
