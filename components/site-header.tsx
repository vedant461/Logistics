"use client";

import Link from "next/link";
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
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244, 240, 232, 0.35)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
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
              {companyConfig.logo.mark}
            </span>
            <span
              className="mono"
              style={{ fontSize: ".67rem", lineHeight: 1.1 }}
            >
              {companyConfig.logo.wordmark}
              <br />
              <span style={{ color: "var(--signal-deep)" }}>BLR / INDIA</span>
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
                <Link key={href} href={href}>
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
              REQUEST A QUOTE ↗
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
              {open ? "×" : "≡"}
            </button>
          </nav>
        </div>
        {open && (
          <div
            className="mobile-drawer"
            style={{ padding: "1.2rem 0", display: "grid", gap: "1rem" }}
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ fontSize: "1.5rem" }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
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
