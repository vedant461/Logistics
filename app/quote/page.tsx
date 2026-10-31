"use client";
import { useMemo, useState } from "react";
import { calculateQuote, QuoteInput } from "@/lib/rates/rate-engine";
import { WebGLShaderBackground } from "@/components/webgl-shader-background";

const modes: QuoteInput["mode"][] = ["FTL", "LTL", "Express", "Air", "Ocean"];
export default function QuotePage() {
  const [mode, setMode] = useState<QuoteInput["mode"]>("LTL");
  const [weight, setWeight] = useState(120);
  const [volume, setVolume] = useState(0.6);
  const [distance, setDistance] = useState(90);
  const quote = useMemo(
    () =>
      calculateQuote({
        mode,
        weightKg: weight,
        volumeM3: volume,
        distanceKm: distance,
      }),
    [mode, weight, volume, distance],
  );
  return (
    <section
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
      <WebGLShaderBackground />
      <div
        className="shell"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "clamp(2.5rem,5vw,4.5rem)",
          paddingBottom: "7rem",
        }}
      >
        <p className="eyebrow" style={{ color: "var(--signal)" }}>
          KAVERI / RATE DESK
        </p>
        <div
          className="quote-page-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(300px,.7fr)",
            gap: "clamp(2rem,8vw,8rem)",
            marginTop: "1rem",
          }}
        >
          <div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(4rem,9vw,9rem)",
              margin: "0 0 2rem",
              color: "#FFFFFF",
            }}
          >
            A clearer
            <br />
            <span style={{ color: "var(--signal)" }}>number.</span>
          </h1>
          <p
            style={{
              maxWidth: 430,
              color: "#B0B0B0",
              fontSize: "1.15rem",
            }}
          >
            A demo rate card for Bengaluru lanes. Adjust the load and the route;
            the total moves with it.
          </p>
          <div style={{ marginTop: "3rem", display: "grid", gap: "1.5rem" }}>
            <label>
              Mode
              <div
                style={{
                  display: "flex",
                  gap: ".45rem",
                  flexWrap: "wrap",
                  marginTop: ".6rem",
                }}
              >
                {modes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setMode(item)}
                    style={{
                      padding: ".7rem .8rem",
                      border: "1px solid rgba(255,255,255,.3)",
                      background:
                        item === mode ? "var(--signal)" : "transparent",
                      color: item === mode ? "var(--ink)" : "#F5F5F5",
                      fontFamily: "JetBrains Mono",
                      fontSize: ".68rem",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </label>
            <label>
              Weight / kg
              <input
                type="range"
                min="1"
                max="2000"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                style={{
                  display: "block",
                  width: "100%",
                  accentColor: "var(--signal)",
                  marginTop: ".75rem",
                }}
              />
              <span className="mono" style={{ fontSize: ".75rem" }}>
                {weight} kg
              </span>
            </label>
            <label>
              Volume / m³
              <input
                type="range"
                min=".05"
                max="10"
                step=".05"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                style={{
                  display: "block",
                  width: "100%",
                  accentColor: "var(--signal)",
                  marginTop: ".75rem",
                }}
              />
              <span className="mono" style={{ fontSize: ".75rem" }}>
                {volume.toFixed(2)} m³ · {Math.ceil(volume * 167)} volumetric kg
              </span>
            </label>
            <label>
              Lane / km
              <input
                type="range"
                min="5"
                max="1800"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                style={{
                  display: "block",
                  width: "100%",
                  accentColor: "var(--signal)",
                  marginTop: ".75rem",
                }}
              />
              <span className="mono" style={{ fontSize: ".75rem" }}>
                {distance} km
              </span>
            </label>
          </div>
          </div>
          <aside
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "clamp(1.3rem,3vw,2.5rem)",
            alignSelf: "start",
            position: "sticky",
            top: "5rem",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--signal)" }}>
            ESTIMATE / MOCK RATE CARD
          </span>
          <p
            className="display"
            style={{
              fontSize: "clamp(3.3rem,6vw,6rem)",
              margin: "1rem 0 2rem",
            }}
          >
            ₹{quote.total.toLocaleString("en-IN")}
          </p>
          <div style={{ display: "grid", gap: ".7rem", fontSize: ".9rem" }}>
            {[
              ["Base freight", quote.base],
              ["Fuel surcharge", quote.fuel],
              ["Handling", quote.handling],
              ["Peak-hour", quote.peak],
              ["GST / 18%", quote.gst],
            ].map(([label, value]) => (
              <div
                key={label as string}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(244,240,232,.18)",
                  paddingTop: ".7rem",
                }}
              >
                <span>{label as string}</span>
                <span className="mono" style={{ fontSize: ".72rem" }}>
                  ₹{Number(value).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
          <p
            className="mono"
            style={{
              fontSize: ".62rem",
              color: "var(--signal)",
              marginTop: "2rem",
            }}
          >
            CHARGEABLE WEIGHT / {quote.chargeableKg} KG
          </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
