# Kaveri Freight & Logistics — Implementation Plan

## Scope and approach

Build a rebrandable logistics marketing site plus a mocked client portal demo in phases. The first deliverable focuses on a fast, content-bearing marketing home route and the foundations needed to extend it without rewriting the visual language. Brand content stays in `config/company.config.ts`; feature behavior is typed behind service interfaces and mock fixtures. Public pages are server-rendered by Next.js App Router with route metadata, while client-only motion and map scenes are isolated behind lightweight client components.

### Project structure

```text
app/                         App Router routes, metadata, route handlers
components/                  Shared shell, navigation, data displays, motion primitives
components/marketing/        Home sections, track form, service mode showcase, trust blocks
components/portal/           Later client portal UI: dashboard, booking, tracking, e-docs, billing
config/company.config.ts     Rebrandable company identity, services, hubs, fleet, copy
lib/services/                Typed service contracts and mock implementations
lib/rates/                   Quote/rate-card engine and validators
lib/data/                    Typed fixtures for shipments, hubs, fleet, invoices, documents
lib/i18n/                    Locale messages and language helpers
styles/                      Tokens, theme layers, grain and accessibility overrides
public/                      Route manifest, icons, static brand marks
tests/                       Rate, pincode, validator, and smoke coverage
```

## Design direction

Three candidate directions were considered:

1. **Industrial editorial / live control tower** — 0.06. Swiss grid discipline, technical readouts, route traces, paper/ink contrast and one signal color.
2. **Coastal freight archive** — 0.04. Weathered navy, rust and archival labels with a more documentary tone.
3. **Monsoon infrastructure** — 0.03. Wet asphalt, safety tape, map contours and high-contrast field notes.

Chosen direction: **Industrial editorial / live control tower**.

- **Design Movement:** Swiss International Style crossed with contemporary transport wayfinding and control-room instrumentation.
- **Core Principles:** clarity before decoration; movement shown as information; deliberate asymmetry; warmth in the paper and language, not in gradients.
- **Color Philosophy:** deep ink anchors trust and contrast, warm paper keeps the site human, signal orange marks action and logistics status, and a restrained cyan is reserved for map/data states.
- **Layout Paradigm:** a 12-column editorial canvas with left-anchored narrative, offset data rails, full-bleed bands and thin rule lines; cards are used only where a task needs a bounded surface.
- **Signature Elements:** orange route-line traces with circular waypoints; monospace operational labels; small topographic/receipt-like rules and corner marks.
- **Interaction Philosophy:** controls behave like instruments: focus is visible, states are explicit, and motion confirms progress or reveals relationships.
- **Animation:** 400–700ms reveal curves using `cubic-bezier(0.22, 1, 0.36, 1)`; route line draw and counters are scroll-linked; no decorative parallax or hover scaling; all scenes have a static reduced-motion fallback.
- **Typography System:** Bricolage Grotesque for expressive display type, Instrument Sans for UI/body, and JetBrains Mono for AWB/LR/container IDs, timestamps and readouts. Fluid type uses `clamp()` with tight display tracking and generous body leading.
- **Brand Essence:** Bengaluru freight that makes every handoff legible — precise, grounded, accountable. Personality: precise, steady, local.
- **Brand Voice:** plain language, operational specificity, no hype. Example lines: “From Peenya to the port, every handoff has a timestamp.” “Tell us what is moving. We’ll show you the route and the number.”
- **Wordmark & Logo:** a custom wordmark paired with a compact `K` route-knot mark: two orange bends meeting a vertical ink stem, echoing a road junction and a ledger tick.
- **Signature Brand Color:** Signal Saffron `#F26B38`, used sparingly for the active route, CTAs, live status and key numerals.

## Token set

- Ink: `#182126`; ink-soft: `#29353A`; paper: `#F4F0E8`; paper-muted: `#E8E1D6`.
- Signal saffron: `#F26B38`; signal-deep: `#C84C22`; map cyan: `#64B9C5`; success: `#1A7F62`; warning: `#B56A16`.
- Type scale: `clamp(2.75rem, 7vw, 7.5rem)` display, `clamp(2rem, 4.5vw, 4.5rem)` section title, `clamp(1.1rem, 1.7vw, 1.4rem)` lead, `1rem` body, `.78rem` label, `.68rem` mono metadata.
- Spacing: 4px base with `--space-1` through `--space-12` mapped to 0.25rem–8rem; content gutters `clamp(1rem, 4vw, 5rem)`.
- Easing: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`, `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`.
- Rules: 1px alpha rules, 16px/24px radius only where needed, no gradients, grain at low opacity, strong visible focus ring.

## Component inventory

- `SiteHeader`, `DesktopNav`, `MobileNav`, `LanguageSwitcher`, `ThemeToggle`.
- `RouteMark`, `StatusPill`, `MonoLabel`, `SectionIntro`, `Reveal`, `MagneticLink`.
- `ControlTowerHero`, `RouteMapGraphic`, `MetricTicker`, `QuickTrack`, `QuoteTeaser`.
- `ServiceModeRail`, `ServiceDiagram`, `NetworkStrip`, `PincodeChecker`.
- `TrustLedger`, `CertificationMark`, `FleetPreview`, `SiteFooter`, `WhatsAppFab`, `MobileQuoteBar`.
- Later: `PortalShell`, `ShipmentTimeline`, `BookingWizard`, `SignaturePad`, `InvoiceTable`, `PaymentSheet`, `AdminAssignmentBoard`.

## Hero storyboard

1. **Frame 01 — Dispatch:** paper field, oversized “Freight that knows its way.”, an ink route starts at Peenya, and the track input sits in the same visual rail as the headline.
2. **Frame 02 — Trace:** as the visitor scrolls, the saffron line bends through a schematic Bengaluru / India map; destination labels appear one at a time: Whitefield, Electronic City, Chennai, Mangalore.
3. **Frame 03 — Readout:** counters tick to 18 hubs, 420 daily shipments and 97.8% on-time; a side note explains that the numbers are demo fixtures.
4. **Frame 04 — Handoff:** route reaches a port/airport node; the hero releases into a horizontal service mode rail, turning motion into an actionable service choice.
5. **Reduced motion:** the complete route and metrics are visible immediately, with no information hidden in animation.

## Delivery workflow

1. Foundation: install pinned dependencies, configure Tailwind tokens, fonts, theme, layout, i18n scaffolding, typed config, service contracts, route manifest, lint/typecheck/build scripts.
2. Home: implement hero, Quick Track, quote entry, service showcase, network strip, trust and responsive shell; validate with lint, typecheck, tests and production build.
3. Quote and coverage: add rate engine, pincode checker, MapLibre abstraction, quote route and serviceability states.
4. Marketing expansion: config-driven service detail pages, network/fleet/about/contact/careers/legal routes, SEO, sitemap/robots and performance pass.
5. Portal: mocked auth, dashboard, booking, tracking simulation, e-docs, notifications, invoices/payments and address book.
6. Admin/polish: assignment board, expenses, accessibility audit, visual pass, smoke tests and checkpoint.

## Explicit assumptions

- The first implementation uses realistic fixtures and labels all mock-only paths; no external provider keys are required.
- MapLibre is wrapped now but the initial home visual uses a lightweight SVG schematic so the first route stays fast; the interactive map is code-split into Network and portal routes.
- The portal login is a demo flow until the user supplies a production identity provider; any real auth integration must use the project’s server capability and the platform-compatible session cookie contract.
- Canonical and OG absolute URLs remain unset until a real public origin is configured; relative site links are used in Preview.
