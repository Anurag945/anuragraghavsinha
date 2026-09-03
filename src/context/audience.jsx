import { createContext, useContext, useEffect, useState } from "react";
import { AUDIENCES, DEFAULT_AUDIENCE } from "../data/audiences";

const AudienceCtx = createContext(null);

export function AudienceProvider({ children }) {
  const [id, setId] = useState(() => {
    try {
      return localStorage.getItem("audience") || DEFAULT_AUDIENCE;
    } catch {
      return DEFAULT_AUDIENCE;
    }
  });

  useEffect(() => {
    try { localStorage.setItem("audience", id); } catch { /* ignore */ }
  }, [id]);

  const audience = AUDIENCES.find((a) => a.id === id) || AUDIENCES[0];

  return (
    <AudienceCtx.Provider value={{ id, setId, audience, all: AUDIENCES }}>
      {children}
    </AudienceCtx.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceCtx);
  if (!ctx) throw new Error("useAudience must be used within AudienceProvider");
  return ctx;
}
