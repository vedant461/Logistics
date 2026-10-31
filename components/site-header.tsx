"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { companyConfig } from "@/config/company.config";

const nav = [
  ["Services", "/services"],
  ["Network", "/network"],
  ["Fleet", "/fleet"],
  ["Track", "/track"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const isServicesPage = usePathname() === "/services";
  const isQuotePage = usePathname() === "/quote";
  const darkHeaderPage = isServicesPage || isQuotePage;
  const servicesHeaderTextStyle = darkHeaderPage
    ? { color: "#fff", mixBlendMode: "difference" as const }
    : undefined;
  return (
    <header
      className={`site-header${darkHeaderPage ? " services-header" : ""}`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(244, 240, 232, 0)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="shell"
        style={{ paddingTop: ".9rem", paddingBottom: ".9rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            aria-label={companyConfig.name}
            style={{ display: "flex", alignItems: "center", gap: ".65rem" }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 34,
                height: 34,
                background: "var(--signal)",
                color: "var(--ink)",
                fontFamily: "Bricolage Grotesque",
                fontWeight: 700,
                fontSize: "1.25rem",
                transform: "rotate(-8deg)",
              }}
            >
              <span
                className={darkHeaderPage ? "services-header-text" : undefined}
                style={servicesHeaderTextStyle}
              >
                {companyConfig.logo.mark}
              </span>
            </span>
            <span
              className={`mono${darkHeaderPage ? " services-header-text" : ""}`}
              style={{
                fontSize: ".67rem",
                lineHeight: 1.1,
                ...servicesHeaderTextStyle,
              }}
            >
              {companyConfig.logo.wordmark}
              <br />
              <span
                className={darkHeaderPage ? "services-header-text" : undefined}
                style={{
                  color: darkHeaderPage ? "#fff" : "var(--signal-deep)",
                  ...(darkHeaderPage ? { mixBlendMode: "difference" as const } : {}),
                }}
              >
                BLR / INDIA
              </span>
            </span>
          </Link>
          <nav
            aria-label="Primary navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1rem,2.5vw,2.5rem)",
            }}
          >
            <div
              className="desktop-nav"
              style={{
                display: "flex",
                gap: "clamp(1rem,2.5vw,2.5rem)",
                fontSize: ".9rem",
              }}
            >
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={darkHeaderPage ? "services-header-text" : undefined}
                  style={servicesHeaderTextStyle}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/quote"
              className="header-cta"
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
                padding: ".7rem 1rem",
                fontSize: ".78rem",
                fontFamily: "JetBrains Mono",
              }}
            >
              <span
                className={darkHeaderPage ? "services-header-text" : undefined}
                style={servicesHeaderTextStyle}
              >
                REQUEST A QUOTE ↗
              </span>
            </Link>
            <button
              className="mobile-menu"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: 0,
                color: "var(--ink)",
                fontSize: "1.3rem",
              }}
            >
              <span
                className={darkHeaderPage ? "services-header-text" : undefined}
                style={servicesHeaderTextStyle}
              >
                {open ? "×" : "≡"}
              </span>
            </button>
          </nav>
        </div>
        {open && (
          <div
            className="mobile-drawer"
            style={{
              padding: "1.25rem 0 1rem",
              display: "grid",
              gap: "1.1rem",
              borderTop: "1px solid var(--rule)",
              marginTop: ".8rem",
            }}
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={darkHeaderPage ? "services-header-text" : undefined}
                style={{
                  fontSize: "1.4rem",
                  fontFamily: "Bricolage Grotesque",
                  letterSpacing: "-.02em",
                  ...servicesHeaderTextStyle,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className={darkHeaderPage ? "services-header-text" : undefined}
              style={{
                marginTop: ".5rem",
                background: "var(--signal)",
                color: "var(--ink)",
                padding: "1rem 1.2rem",
                fontSize: ".75rem",
                fontFamily: "JetBrains Mono",
                textAlign: "center",
                display: "block",
                fontWeight: 600,
              }}
            >
              <span style={servicesHeaderTextStyle}>REQUEST A QUOTE ↗</span>
            </Link>
          </div>
        )}
      </div>
      <style jsx>{`
        .services-header-text {
          color: #fff !important;
          mix-blend-mode: difference;
        }

        @media (max-width: 720px) {
          .desktop-nav,
          .header-cta {
            display: none !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
