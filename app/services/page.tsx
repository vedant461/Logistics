import type { Metadata } from "next";
import Link from "next/link";
import { companyConfig } from "@/config/company.config";
import { WebGLShaderBackground } from "@/components/webgl-shader-background";

export const metadata: Metadata = {
  title: "Services / Built around the handoff",
  description:
    "Road, air, ocean, warehouse, cold chain and last-mile operations behind one control desk.",
};

export default function ServicesPage() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        marginTop: "-72px",
        paddingTop: "72px",
        backgroundColor: "#101010",
        color: "#F5F5F5",
        overflow: "hidden",
      }}
    >
      {/* Animated WebGL Mesh Drift Shader Background flowing from top of viewport under the floating header */}
      <WebGLShaderBackground />

      <section
        className="shell"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "clamp(3rem, 6vw, 5.5rem)",
          paddingBottom: "8rem",
        }}
      >
        <p
          className="eyebrow"
          style={{
            color: "var(--signal)",
            letterSpacing: "0.15em",
          }}
        >
          KAVERI / SERVICES
        </p>

        <h1
          className="display"
          style={{
            fontSize: "clamp(3.5rem, 8.5vw, 8rem)",
            maxWidth: 1100,
            margin: "0.75rem 0 1.5rem",
            color: "#FFFFFF",
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
          }}
        >
          Services built around{" "}
          <span style={{ color: "var(--signal)" }}>the handoff.</span>
        </h1>

        <div
          className="slug-page-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.18)",
            paddingTop: "2.5rem",
            marginTop: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)",
                lineHeight: 1.2,
                color: "#F5F5F5",
                fontWeight: 500,
              }}
            >
              Choose the lane, see the next checkpoint.
            </p>
            <p
              style={{
                color: "#B0B0B0",
                fontSize: "1.1rem",
                marginTop: "1.5rem",
                lineHeight: 1.6,
                maxWidth: 480,
              }}
            >
              Road, air, ocean, warehouse, cold chain and last-mile operations sit
              behind one control desk. Each service is engineered around the moment
              cargo changes hands.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                background: "rgba(16, 16, 16, 0.65)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "clamp(1.25rem, 3vw, 2rem)",
                borderRadius: "2px",
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: "0.7rem",
                  color: "var(--signal)",
                  marginBottom: "1rem",
                  letterSpacing: "0.08em",
                }}
              >
                CAPACITY & SLA DESK
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "#B0B0B0" }}>
                    HANDOFF RECORD
                  </div>
                  <div
                    className="display"
                    style={{ fontSize: "2rem", color: "#FFFFFF", marginTop: "0.25rem" }}
                  >
                    97.8%
                  </div>
                  <div className="mono" style={{ fontSize: "0.62rem", color: "#B0B0B0" }}>
                    on-time index
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "#B0B0B0" }}>
                    ACTIVE HUBS
                  </div>
                  <div
                    className="display"
                    style={{ fontSize: "2rem", color: "#FFFFFF", marginTop: "0.25rem" }}
                  >
                    18
                  </div>
                  <div className="mono" style={{ fontSize: "0.62rem", color: "#B0B0B0" }}>
                    pan-corridor
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "#B0B0B0" }}>
                    TRACKING
                  </div>
                  <div
                    className="display"
                    style={{ fontSize: "2rem", color: "var(--signal)", marginTop: "0.25rem" }}
                  >
                    LIVE
                  </div>
                  <div className="mono" style={{ fontSize: "0.62rem", color: "#B0B0B0" }}>
                    checkpoint feed
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link
                href="/quote"
                style={{
                  display: "inline-block",
                  background: "var(--signal)",
                  color: "#182126",
                  padding: "1rem 1.6rem",
                  fontFamily: "JetBrains Mono",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
              >
                REQUEST A QUOTE ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Six Detailed Mode Cards */}
        <div style={{ marginTop: "4.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderBottom: "1px solid rgba(255, 255, 255, 0.18)",
              paddingBottom: "1rem",
              marginBottom: "2rem",
            }}
          >
            <p className="eyebrow" style={{ color: "#B0B0B0", margin: 0 }}>
              ALL OPERATIONAL MODES / 01–06
            </p>
            <span
              className="mono"
              style={{ fontSize: "0.68rem", color: "var(--signal)" }}
            >
              ● SYSTEM ACTIVE
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {companyConfig.services.map((item, idx) => (
              <div
                key={item.key}
                style={{
                  background: "rgba(16, 16, 16, 0.7)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "clamp(1.5rem, 3vw, 2.25rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 280,
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      className="mono"
                      style={{ fontSize: "0.68rem", color: "var(--signal)" }}
                    >
                      {item.eyebrow}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: "0.75rem", color: "#666" }}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <h2
                    className="display"
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                      color: "#FFFFFF",
                      margin: "0 0 0.85rem",
                    }}
                  >
                    {item.name}
                  </h2>
                  <p
                    style={{
                      color: "#B0B0B0",
                      fontSize: "0.98rem",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: "0.68rem", color: "#F5F5F5" }}
                  >
                    {item.metric}
                  </span>
                  <Link
                    href="/quote"
                    className="mono"
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--signal)",
                      textDecoration: "none",
                    }}
                  >
                    BOOK LANE ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
