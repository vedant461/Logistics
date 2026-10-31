import type { Metadata } from "next";
import { companyConfig } from "@/config/company.config";
import { PincodeChecker } from "@/components/pincode-checker";
export const metadata: Metadata = {
  title: "Network & Coverage",
  description:
    "Check serviceability across Bengaluru, southern corridors and sample pan-India lanes.",
};
export default function NetworkPage() {
  return (
    <section
      className="shell"
      style={{ paddingTop: "clamp(2.5rem,5vw,4.5rem)", paddingBottom: "7rem" }}
    >
      <p className="eyebrow">NETWORK / COVERAGE DESK</p>
      <h1
        className="display"
        style={{
          fontSize: "clamp(4rem,9vw,9rem)",
          maxWidth: 1000,
          margin: ".75rem 0 1.5rem",
        }}
      >
        The route
        <br />
        <span style={{ color: "var(--signal)" }}>starts local.</span>
      </h1>
      <div
        className="network-page-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          borderTop: "1px solid var(--rule)",
          paddingTop: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "1.25rem", maxWidth: 450 }}>
            A lightweight coverage view for Bengaluru sub-zones, the southern
            corridor and the ports that keep the lane moving.
          </p>
          <PincodeChecker />
        </div>
        <div
          style={{
            background: "var(--paper-muted)",
            padding: "1.5rem",
            minHeight: 360,
          }}
        >
          <p
            className="mono"
            style={{ fontSize: ".68rem", color: "var(--signal-deep)" }}
          >
            HUBS / LIVE FIXTURE
          </p>
          {companyConfig.hubs.map((hub, i) => (
            <div
              key={hub}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              <span>{hub}</span>
              <span
                className="mono"
                style={{ fontSize: ".65rem", color: "var(--ink-soft)" }}
              >
                {String(i + 1).padStart(2, "0")} / LANE
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
