"use client";
import { FormEvent, useState } from "react";
import {
  mockTrackingService,
  TrackingResult,
} from "@/lib/services/tracking.service";

export function QuickTrack() {
  const [reference, setReference] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    const next = await mockTrackingService.track({
      reference: reference || "AWB 7842 9012",
    });
    setResult(next);
    setLoading(false);
  }
  return (
    <section
      id="track"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "1.25rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <span className="eyebrow" style={{ color: "var(--signal)" }}>
            LIVE DESK / 01
          </span>
          <p style={{ margin: ".35rem 0 0", fontSize: "1.1rem" }}>
            Where is it now?
          </p>
        </div>
        <span className="mono" style={{ fontSize: ".66rem", opacity: 0.65 }}>
          AWB · LR · CONTAINER
        </span>
      </div>
      <form
        onSubmit={submit}
        style={{ display: "flex", gap: ".65rem", marginTop: "1rem" }}
      >
        <input
          aria-label="AWB, LR or container reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="e.g. AWB 7842 9012"
          style={{
            minWidth: 0,
            flex: 1,
            border: 0,
            borderBottom: "1px solid rgba(244,240,232,.35)",
            background: "transparent",
            color: "var(--paper)",
            padding: ".75rem 0",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            border: 0,
            background: "var(--signal)",
            color: "var(--ink)",
            padding: "0 1rem",
            fontFamily: "JetBrains Mono",
            fontSize: ".72rem",
          }}
        >
          {loading ? "READING…" : "TRACK ↗"}
        </button>
      </form>
      {result && (
        <div
          style={{
            borderTop: "1px solid rgba(244,240,232,.2)",
            marginTop: "1.1rem",
            paddingTop: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div>
            <span
              className="mono"
              style={{ fontSize: ".66rem", color: "var(--signal)" }}
            >
              {result.kind} / {result.reference}
            </span>
            <p style={{ margin: ".35rem 0 0" }}>
              {result.origin} → {result.destination}
            </p>
          </div>
          <div>
            <span
              className="mono"
              style={{ fontSize: ".66rem", opacity: 0.65 }}
            >
              ETA / {result.eta}
            </span>
            <p style={{ margin: ".35rem 0 0" }}>{result.note}</p>
          </div>
        </div>
      )}
    </section>
  );
}
