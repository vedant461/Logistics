"use client";
import { useState } from "react";
import { companyConfig } from "@/config/company.config";

export function ServiceRail() {
  const [active, setActive] = useState(0);
  const service = companyConfig.services[active];
  return (
    <section
      className="shell"
      style={{
        paddingTop: "clamp(2.5rem, 5vw, 4.5rem)",
        paddingBottom: "6rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p className="eyebrow">THE MODES / 02</p>
          <h2
            className="display"
            style={{ fontSize: "clamp(3rem,7vw,7rem)", margin: ".8rem 0 0" }}
          >
            Move by
            <br />
            <span style={{ color: "var(--signal)" }}>intent.</span>
          </h2>
        </div>
        <p style={{ maxWidth: 300, color: "var(--ink-soft)" }}>
          Six ways to move, one control tower to keep the handoffs legible.
        </p>
      </div>
      <div
        className="service-rail-grid"
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "minmax(190px,.7fr) minmax(0,1.3fr)",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div className="service-rail-nav" style={{ borderRight: "1px solid var(--rule)" }}>
          {companyConfig.services.map((item, i) => (
            <button
              key={item.key}
              onClick={() => setActive(i)}
              className="service-rail-tab-btn"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "1.1rem 1rem",
                border: 0,
                borderBottom: "1px solid var(--rule)",
                background: i === active ? "var(--ink)" : "transparent",
                color: i === active ? "var(--paper)" : "var(--ink)",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span>{item.name}</span>
              <span
                className="mono"
                style={{ fontSize: ".65rem", opacity: 0.65 }}
              >
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
        <div
          className="service-rail-content"
          style={{
            padding: "clamp(1.5rem,5vw,4rem)",
            minHeight: 360,
            backgroundColor: "var(--paper-muted)",
            backgroundImage: "url('/assets/Texturelabs_Paper_146M.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: "inset 0 4px 18px rgba(0, 0, 0, 0.4), inset 0 1px 4px rgba(0, 0, 0, 0.5), inset 0 0 1px rgba(0, 0, 0, 0.8)",
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              className="mono"
              style={{ fontSize: ".68rem", color: "var(--signal-deep)" }}
            >
              {service.eyebrow}
            </div>
            <h3
              className="display"
              style={{
                fontSize: "clamp(2.5rem,6vw,6rem)",
                margin: "1.1rem 0",
                maxWidth: 700,
              }}
            >
              {service.name}
            </h3>
            <p
              style={{
                maxWidth: 480,
                fontSize: "1.1rem",
                color: "var(--ink-soft)",
              }}
            >
              {service.detail}
            </p>
            <div
              className="mono"
              style={{
                fontSize: ".7rem",
                marginTop: "2.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--rule)",
                display: "inline-block",
              }}
            >
              {service.metric}
            </div>
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-2rem",
              bottom: "-4rem",
              fontSize: "13rem",
              lineHeight: 1,
              color: "var(--signal)",
              opacity: 0.18,
              fontFamily: "Bricolage Grotesque",
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {String(active + 1).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
