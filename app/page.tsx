import type { Metadata } from "next";
import Link from "next/link";
import { ControlTowerHero } from "@/components/control-tower-hero";
import { ServiceRail } from "@/components/service-rail";
import { NetworkTrust } from "@/components/network-trust";
import { companyConfig } from "@/config/company.config";

export const metadata: Metadata = {
  title: companyConfig.tagline,
  description:
    "Bengaluru freight logistics that keeps every handoff visible, from Peenya to the ports.",
};

export default function Home() {
  return (
    <>
      <ControlTowerHero />
      <div
        className="shell"
        data-animate
        style={{
          paddingTop: "clamp(2.5rem, 5vw, 4.5rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4.5rem)",
        }}
      >
        <div
          className="home-action-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            alignItems: "stretch",
          }}
        >
          <Link
            href="/quote"
            style={{
              background: "var(--signal)",
              padding: "1.3rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "JetBrains Mono",
              fontSize: ".72rem",
            }}
          >
            CALCULATE A LANE <span>↗</span>
          </Link>
          <Link
            href="/network"
            style={{
              border: "1px solid var(--rule)",
              padding: "1.3rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "JetBrains Mono",
              fontSize: ".72rem",
            }}
          >
            CHECK A PINCODE <span>↗</span>
          </Link>
        </div>
      </div>
      <ServiceRail />
      <NetworkTrust />
      <section className="shell" style={{ paddingBottom: "6rem" }}>
        <div
          className="home-cta-banner"
          style={{
            background: "var(--signal)",
            padding: "clamp(1.5rem,5vw,4rem)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--ink)" }}>
              NEXT HANDOFF
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2.8rem,6vw,6rem)",
                margin: ".8rem 0 0",
              }}
            >
              Have cargo
              <br />
              to place?
            </h2>
          </div>
          <Link
            href="/contact"
            style={{
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "1rem 1.2rem",
              fontFamily: "JetBrains Mono",
              fontSize: ".72rem",
            }}
          >
            TALK TO THE DESK ↗
          </Link>
        </div>
      </section>
    </>
  );
}
