"use client";
import { useState } from "react";
const lanes: Record<string, { area: string; time: string; tier: string }> = {
  "560058": {
    area: "Peenya Industrial Area",
    time: "Same day",
    tier: "Priority city",
  },
  "560066": { area: "Whitefield", time: "Next day", tier: "Priority city" },
  "560100": {
    area: "Electronic City",
    time: "Next day",
    tier: "City standard",
  },
  "600001": { area: "Chennai central", time: "2–3 days", tier: "Regional" },
  "575001": { area: "Mangalore", time: "2–3 days", tier: "Regional" },
};
export function PincodeChecker() {
  const [pin, setPin] = useState("560058");
  const lane = lanes[pin];
  return (
    <div
      style={{
        borderTop: "1px solid var(--rule)",
        paddingTop: "1rem",
        marginTop: "2rem",
      }}
    >
      <p className="eyebrow">Pincode serviceability</p>
      <div style={{ display: "flex", gap: ".5rem", marginTop: ".7rem" }}>
        <input
          inputMode="numeric"
          maxLength={6}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          aria-label="Pincode"
          style={{
            flex: 1,
            padding: ".8rem",
            border: "1px solid var(--rule)",
            background: "transparent",
            color: "var(--ink)",
          }}
        />
        <span
          className="mono"
          style={{
            padding: ".8rem",
            background: lane ? "var(--success)" : "var(--paper-muted)",
            color: lane ? "white" : "var(--ink)",
            fontSize: ".7rem",
          }}
        >
          {lane ? "SERVICEABLE" : "CHECK"}
        </span>
      </div>
      {lane && (
        <p style={{ marginTop: ".8rem", fontSize: ".9rem" }}>
          {lane.area} · {lane.time} ·{" "}
          <span className="mono" style={{ fontSize: ".65rem" }}>
            {lane.tier}
          </span>
        </p>
      )}
    </div>
  );
}
