import { companyConfig } from "@/config/company.config";

export function NetworkTrust() {
  return (
    <>
      <section id="network" className="shell" style={{ paddingBottom: "6rem" }}>
        <div
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "clamp(1.5rem,5vw,4rem)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--signal)" }}>
              NETWORK / 03
            </p>
            <h2
              className="display"
              style={{ fontSize: "clamp(3rem,6vw,6rem)", margin: ".8rem 0" }}
            >
              Bengaluru
              <br />
              is the
              <br />
              <span style={{ color: "var(--signal)" }}>switchyard.</span>
            </h2>
            <p style={{ maxWidth: 390, color: "rgba(244,240,232,.7)" }}>
              Peenya to Whitefield. Nelamangala to Electronic City. Then onward
              to the ICD, airport or coast.
            </p>
          </div>
          <div style={{ alignSelf: "end" }}>
            <div
              className="mono"
              style={{
                fontSize: ".65rem",
                color: "var(--signal)",
                marginBottom: "1rem",
              }}
            >
              ACTIVE LANES / {companyConfig.hubs.length}
            </div>
            {companyConfig.hubs.map((hub, i) => (
              <div
                key={hub}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: ".8rem 0",
                  borderTop: "1px solid rgba(244,240,232,.18)",
                }}
              >
                <span>{hub}</span>
                <span
                  className="mono"
                  style={{ fontSize: ".65rem", opacity: 0.6 }}
                >
                  {i < 4 ? "CITY" : "PORT / ICD"}
                </span>
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 280,
              height: 280,
              border: "1px solid rgba(100,185,197,.4)",
              borderRadius: "50%",
              right: "25%",
              top: "25%",
              opacity: 0.35,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              border: "1px solid rgba(100,185,197,.2)",
              borderRadius: "50%",
              right: "15%",
              top: "5%",
              opacity: 0.35,
            }}
          />
        </div>
      </section>
      <section className="shell" style={{ paddingBottom: "6rem" }}>
        <div
          className="rule"
          style={{
            paddingTop: "1.2rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p className="eyebrow">TRUST / THE LEDGER</p>
          <p
            className="mono"
            style={{ fontSize: ".65rem", color: "var(--ink-soft)" }}
          >
            A CLAIM IS A HANDOFF WE REVISIT
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "3rem",
            marginTop: "2rem",
          }}
        >
          <h2
            className="display"
            style={{ fontSize: "clamp(2.5rem,5vw,5rem)", margin: 0 }}
          >
            Proof in the
            <br />
            <span style={{ color: "var(--signal)" }}>paper trail.</span>
          </h2>
          <div>
            <p style={{ color: "var(--ink-soft)" }}>
              Every exception gets a timestamp, a named owner and the next
              action. If a shipment misses its promise, our claims desk starts
              with the record — not a round of forwarding emails.
            </p>
            <div
              style={{
                display: "flex",
                gap: ".5rem",
                flexWrap: "wrap",
                marginTop: "1.7rem",
              }}
            >
              {companyConfig.certifications.map((item) => (
                <span
                  key={item}
                  className="mono"
                  style={{
                    border: "1px solid var(--rule)",
                    padding: ".55rem .7rem",
                    fontSize: ".62rem",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
