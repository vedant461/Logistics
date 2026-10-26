"use client";
import { useState } from "react";
import Link from "next/link";
const shipments = [
  ["KAV-240918", "Peenya → Chennai ICD", "In Transit", "18 Sep · 16:40"],
  ["KAV-240904", "Whitefield → Electronic City", "At Hub", "Delivered"],
  ["KAV-240887", "Nelamangala → Mangalore Port", "Delayed", "19 Sep · 09:15"],
];
export default function PortalPage() {
  const [tab, setTab] = useState("overview");
  return (
    <section
      className="shell"
      style={{ paddingTop: "clamp(3rem,7vw,6rem)", paddingBottom: "7rem" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: "1rem",
          borderBottom: "1px solid var(--rule)",
          paddingBottom: "1.2rem",
        }}
      >
        <div>
          <p className="eyebrow">CLIENT PORTAL / DEMO ACCOUNT</p>
          <h1
            className="display"
            style={{ fontSize: "clamp(3.3rem,7vw,7rem)", margin: ".6rem 0 0" }}
          >
            Good morning,
            <br />
            <span style={{ color: "var(--signal)" }}>Ananya.</span>
          </h1>
        </div>
        <span
          className="mono"
          style={{ fontSize: ".65rem", color: "var(--success)" }}
        >
          ● MOCK SESSION
        </span>
      </div>
      <nav
        aria-label="Portal sections"
        style={{
          display: "flex",
          gap: "1.2rem",
          padding: "1rem 0",
          overflowX: "auto",
        }}
      >
        {["overview", "book", "documents", "invoices"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            style={{
              border: 0,
              background: "transparent",
              color: tab === item ? "var(--signal-deep)" : "var(--ink-soft)",
              fontFamily: "JetBrains Mono",
              fontSize: ".7rem",
              textTransform: "uppercase",
              padding: ".5rem 0",
            }}
          >
            {item}
          </button>
        ))}
      </nav>
      {tab === "overview" ? (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: ".75rem",
              marginTop: "1rem",
            }}
          >
            {[
              ["07", "active shipments"],
              ["01", "delayed"],
              ["24", "delivered"],
              ["₹1.84L", "outstanding"],
            ].map(([v, l]) => (
              <div
                key={l}
                style={{ background: "var(--paper-muted)", padding: "1rem" }}
              >
                <strong
                  className="display"
                  style={{ fontSize: "clamp(1.8rem,4vw,3.5rem)" }}
                >
                  {v}
                </strong>
                <div
                  className="mono"
                  style={{
                    fontSize: ".6rem",
                    color: "var(--ink-soft)",
                    marginTop: ".4rem",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="eyebrow">RECENT SHIPMENTS</p>
              <button
                onClick={() => setTab("book")}
                style={{
                  background: "var(--signal)",
                  border: 0,
                  padding: ".65rem .8rem",
                  fontFamily: "JetBrains Mono",
                  fontSize: ".65rem",
                }}
              >
                BOOK SHIPMENT ↗
              </button>
            </div>
            {shipments.map(([id, lane, status, eta]) => (
              <div
                key={id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 1fr 1fr",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--rule)",
                  fontSize: ".9rem",
                }}
              >
                <span className="mono" style={{ fontSize: ".68rem" }}>
                  {id}
                </span>
                <span>{lane}</span>
                <span
                  style={{
                    color:
                      status === "Delayed"
                        ? "var(--signal-deep)"
                        : "var(--success)",
                  }}
                >
                  {status}
                </span>
                <span className="mono" style={{ fontSize: ".65rem" }}>
                  {eta}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            background: "var(--paper-muted)",
            padding: "2rem",
            marginTop: "1rem",
          }}
        >
          <p className="eyebrow">{tab.toUpperCase()} / DEMO MODULE</p>
          <h2
            className="display"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)", margin: ".8rem 0" }}
          >
            Built for the next
            <br />
            <span style={{ color: "var(--signal)" }}>handoff.</span>
          </h2>
          <p style={{ maxWidth: 520, color: "var(--ink-soft)" }}>
            This portal surface is mocked and typed for the pitch demo. Booking,
            e-docs, GST invoices, notifications and payment adapters can be
            connected behind the service interfaces without changing the shell.
          </p>
          <Link
            href="/quote"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              background: "var(--ink)",
              color: "var(--paper)",
              padding: ".8rem 1rem",
              fontFamily: "JetBrains Mono",
              fontSize: ".68rem",
            }}
          >
            OPEN PUBLIC RATE DESK ↗
          </Link>
        </div>
      )}
    </section>
  );
}
