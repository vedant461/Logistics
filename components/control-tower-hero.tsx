"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { companyConfig } from "@/config/company.config";
import { QuickTrack } from "./quick-track";

export function ControlTowerHero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const onScroll = () =>
      setActive(Math.min(3, Math.floor(window.scrollY / 180)));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        marginTop: "-65px",
        paddingTop: "calc(65px + clamp(2.5rem,5vw,4.5rem))",
        paddingBottom: "5rem",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Hero Background Image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          backgroundImage: "url(/bg-image.png)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Subtle tint overlay to keep typography readable while keeping the background image vibrant */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "linear-gradient(135deg, rgba(244, 240, 232, 0.29) 0%, rgba(244, 240, 232, 0.2) 50%, rgba(244, 240, 232, 0.2) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="shell">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(260px,.85fr)",
            gap: "clamp(2rem,6vw,6rem)",
            alignItems: "start",
          }}
        >
          <div>
            <p className="eyebrow" data-animate>
              BLR / CONTROL TOWER / 2026
            </p>
            <h1
              className="display"
              data-animate
              style={{
                fontSize: "clamp(4rem,10vw,9.5rem)",
                maxWidth: 900,
                margin: ".75rem 0 1.5rem",
              }}
            >
              Freight
              <br />
              <span style={{ color: "var(--signal)" }}>that knows</span>
              <br />
              its way.
            </h1>
            <p
              data-animate
              style={{
                maxWidth: 430,
                fontSize: "clamp(1.05rem,1.8vw,1.35rem)",
                color: "var(--ink-soft)",
              }}
            >
              Road, air, ocean and warehouse operations from Peenya to the ports
              — with every handoff visible.
            </p>
            <div
              data-animate
              style={{
                display: "flex",
                gap: ".8rem",
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              <Link
                href="/quote"
                style={{
                  background: "var(--signal)",
                  padding: ".9rem 1.1rem",
                  fontFamily: "JetBrains Mono",
                  fontSize: ".72rem",
                }}
              >
                BUILD A QUOTE ↗
              </Link>
              <a
                href="#network"
                style={{
                  border: "1px solid var(--rule)",
                  padding: ".9rem 1.1rem",
                  fontFamily: "JetBrains Mono",
                  fontSize: ".72rem",
                }}
              >
                SEE THE NETWORK ↓
              </a>
            </div>
          </div>

          {/* Map widget aligned beside 'that knows' with frosted blur backdrop overlay */}
          <div
            className="hero-map-column"
            style={{
              position: "relative",
              marginTop: "clamp(1rem, 5vw, 4.5rem)",
            }}
          >
            <div
              className="hero-map-card"
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(244, 240, 232, 0.28) 100%)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.65)",
                outline: "1px solid rgba(24, 33, 38, 0.08)",
                borderRadius: "16px",
                padding: "clamp(1.2rem,2.5vw,2rem)",
                boxShadow:
                  "0 20px 48px -12px rgba(24, 33, 38, 0.22), 0 1px 0 0 rgba(255, 255, 255, 0.8) inset",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: ".65rem",
                  color: "var(--ink-soft)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>ROUTE / SOUTHERN CORRIDOR</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".35rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--signal)",
                    }}
                  ></span>
                  LIVE
                </span>
              </div>
              <svg
                viewBox="0 0 420 360"
                role="img"
                aria-label="Schematic freight route from Peenya through Bengaluru to Chennai and Mangalore"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "1.2rem",
                  overflow: "visible",
                }}
              >
                <path
                  d="M48 276 C100 250 88 170 170 176 S235 246 276 174 S307 84 375 54"
                  fill="none"
                  stroke="var(--rule)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <path
                  d="M48 276 C100 250 88 170 170 176 S235 246 276 174 S307 84 375 54"
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth="4"
                  pathLength="1"
                  strokeDasharray={`${0.55 + active * 0.12} 1`}
                  style={{ transition: "stroke-dasharray .7s var(--ease-out)" }}
                />
                {[
                  ["PEENYA", 48, 276],
                  ["WHITEFIELD", 170, 176],
                  ["CHENNAI ICD", 276, 174],
                  ["MANGALORE", 375, 54],
                ].map(([label, x, y], i) => (
                  <g key={label as string}>
                    <circle
                      cx={x as number}
                      cy={y as number}
                      r="7"
                      fill={i <= active ? "var(--signal)" : "var(--paper)"}
                      stroke="var(--ink)"
                      strokeWidth="2"
                    />
                    <text
                      x={(x as number) + 12}
                      y={(y as number) - 12}
                      fill="var(--ink)"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                    >
                      {label as string}
                    </text>
                  </g>
                ))}
                <text
                  x="50"
                  y="330"
                  fill="var(--ink-soft)"
                  fontSize="11"
                  fontFamily="JetBrains Mono"
                >
                  12°58&apos;N / 77°32&apos;E
                </text>
              </svg>
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: ".5rem",
                }}
              >
                {companyConfig.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rule"
                    style={{ paddingTop: ".75rem" }}
                  >
                    <strong
                      className="display"
                      style={{ fontSize: "clamp(1.5rem,2.6vw,2.5rem)" }}
                    >
                      {stat.value}
                    </strong>
                    <div
                      className="mono"
                      style={{
                        fontSize: ".6rem",
                        color: "var(--ink-soft)",
                        marginTop: ".25rem",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          data-animate
          style={{
            marginTop: "clamp(3rem,7vw,7rem)",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)",
            gap: "clamp(1rem,3vw,3rem)",
            alignItems: "start",
          }}
        >
          <div>
            <p className="eyebrow">QUICK TRACK</p>
            <p
              className="display"
              style={{
                fontSize: "clamp(1.8rem,3.5vw,3.5rem)",
                marginTop: ".5rem",
              }}
            >
              A number is
              <br />
              enough to start.
            </p>
          </div>
          <QuickTrack />
        </div>
      </div>
    </section>
  );
}
