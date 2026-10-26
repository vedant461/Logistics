import Link from "next/link";
import { companyConfig } from "@/config/company.config";

const footerLinks = [
  ["Quote", "/quote"],
  ["Track", "/track"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteFooter() {
  return (
    <footer
      className="shell site-footer"
      style={{ paddingTop: "5rem", paddingBottom: "2rem" }}
    >
      <div
        className="rule site-footer-grid"
        style={{
          paddingTop: "2rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <p className="eyebrow">Kaveri Freight & Logistics</p>
          <p
            className="display"
            style={{
              fontSize: "clamp(2rem,4vw,4rem)",
              maxWidth: 500,
              margin: "1rem 0",
            }}
          >
            Move with a clearer view.
          </p>
          <p style={{ maxWidth: 360, color: "var(--ink-soft)" }}>
            {companyConfig.descriptor}
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <div style={{ display: "grid", gap: ".65rem", marginTop: "1rem" }}>
            {footerLinks.map(([l, h]) => (
              <Link key={h} href={h}>
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Peenya control desk</p>
          <p className="mono" style={{ fontSize: ".72rem", lineHeight: 1.8 }}>
            {companyConfig.contact.phone}
            <br />
            {companyConfig.contact.email}
            <br />
            560058 / BLR
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          paddingTop: "2rem",
          fontSize: ".72rem",
          color: "var(--ink-soft)",
        }}
      >
        <span>© 2026 {companyConfig.name}</span>
        <span className="mono">BUILT FOR THE HANDOFF</span>
      </div>
    </footer>
  );
}
