# PROJECT CONTEXT: Kaveri Freight & Logistics

> **Comprehensive reference document for AI agents, developers, and automated tools.**  
> Keep this document updated whenever new features, routes, design tokens, or architectural boundaries are changed.

---

## 1. Project Overview & Mission

- **Brand Name:** Kaveri Freight & Logistics (Short name: *Kaveri Freight*)
- **Core Concept:** A rebrandable, premium Bengaluru freight & logistics company web application and client portal demonstration.
- **Tagline:** *"Freight that knows its way."*
- **Aesthetic Movement:** *Industrial editorial / Live control tower* — inspired by Swiss graphic discipline, transport wayfinding, technical telemetry readouts, high contrast warm paper/ink tones, with signal saffron accents.
- **Tech Stack:**
  - **Framework:** Next.js 15 (App Router, React 19, Server & Client Components)
  - **Language:** Strict TypeScript (with `typedRoutes` enabled)
  - **Styling:** CSS variables design tokens + Tailwind CSS utilities + scoped CSS modules / media queries
  - **Icons & Typography:** Google Fonts (`Bricolage Grotesque`, `Instrument Sans`, `JetBrains Mono`)
  - **Testing:** Vitest (`pnpm test` / `npm test`)
  - **Package Manager:** `pnpm` (works with `npm` / `yarn`)

---

## 2. Directory & Architecture Map

```text
kaverifreight/
├── app/
│   ├── layout.tsx             # Root layout: metadata, ScrollRevealProvider, SiteHeader, SiteFooter
│   ├── page.tsx               # Homepage: ControlTowerHero, Quick Actions, ServiceRail, NetworkTrust, CTA
│   ├── globals.css            # Core design system tokens, typography, animations & mobile responsive rules
│   ├── responsive.css         # Breakpoint helper reference
│   ├── quote/page.tsx         # Interactive Rate Calculator (Weight, Volume, Lane KM, Surcharges, GST)
│   ├── network/page.tsx       # Coverage Desk with interactive PincodeChecker & Live Hub Fixture
│   ├── portal/page.tsx        # Mock Client Portal: Overview, Book Shipment, Documents, Invoices
│   ├── [slug]/page.tsx        # Dynamic editorial routes (/services, /fleet, /about, /contact, etc.)
│   ├── sitemap.ts             # SEO XML Sitemap generator
│   └── robots.ts              # Robots.txt handler
├── components/
│   ├── control-tower-hero.tsx # Hero section with dynamic animated SVG route map & real-time telemetry stats
│   ├── quick-track.tsx        # Live desk quick tracking widget (AWB / LR / Container ID lookup)
│   ├── service-rail.tsx       # The 6 modes interactive browser (desktop tabs + mobile touch-snap rail)
│   ├── network-trust.tsx      # Southern corridor lane map, active hubs & trust ledger / certifications
│   ├── pincode-checker.tsx    # Live Bengaluru & regional pincode serviceability validator
│   ├── site-header.tsx        # Sticky frosted glass navbar + mobile responsive drawer toggle
│   ├── site-footer.tsx        # Editorial 3-column footer with contact and legal metadata
│   └── scroll-reveal-provider.tsx # IntersectionObserver provider for smooth scroll animations
├── config/
│   └── company.config.ts      # SINGLE SOURCE OF TRUTH for rebrandable company info, hubs, fleet, copy
├── lib/
│   ├── rates/rate-engine.ts   # Quote calculation engine (base rate, volumetric conversion, GST, handling)
│   └── services/              # Typed mock integration seams (easily swappable for real APIs)
│       ├── tracking.service.ts   # Shipment tracking mock service
│       ├── map.service.ts        # Map coordinates & provider contract
│       └── integration-stubs.ts  # Stubs for WhatsApp, Razorpay/payment, e-way bill, TMS
├── tests/
│   └── rate-engine.test.ts    # Unit test suite for quote calculation mathematics
├── public/                    # Static assets, hero background image (bg-image.png), marks
├── CONTEXT.md                 # This file (Agent Context Reference)
├── plan.md                    # Original design specification & tokens
└── README.md                  # Quickstart & integration guide
```

---

## 3. Design System & Tokens

Defined in [app/globals.css](file:///c:/webdev/kaverifreight/app/globals.css):

### Color Tokens
| CSS Variable | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ink` | `#182126` | Deep industrial contrast, primary text & dark containers |
| `--ink-soft` | `#29353A` | Secondary text, subtle borders |
| `--paper` | `#F4F0E8` / `#F0DEC4` | Warm tactile paper background |
| `--paper-muted`| `#E8E1D6` | Card backgrounds, muted surfaces |
| `--signal` | `#F26B38` | Signature Saffron for CTAs, active route lines, highlights |
| `--signal-deep`| `#C84C22` | Deep orange for eyebrows, accents |
| `--cyan` | `#64B9C5` | Telemetry rings, radar accents |
| `--success` | `#1A7F62` | Delivered / active status badges |
| `--rule` | `rgba(24, 33, 38, .16)` | Architectural hairline borders (1px) |

### Typography
- **Display:** `'Bricolage Grotesque', sans-serif` — Expressive, tight tracking (`letter-spacing: -0.065em`)
- **Body / UI:** `'Instrument Sans', sans-serif` — Clean, legible modern sans
- **Telemetry & Labels:** `'JetBrains Mono', monospace` — AWB codes, coordinates, numbers, eyebrows

---

## 4. Key Components & Implementation Details

### 1. `ControlTowerHero` (`components/control-tower-hero.tsx`)
- Displays main headline, dynamic animated SVG schematic route from Peenya through Whitefield to Chennai ICD & Mangalore Port.
- Animates route path length on scroll (`active` milestone index 0–3).
- Uses frosted glass backdrop (`backdrop-filter: blur(16px)`).
- Embeds 3 operational stats read directly from `companyConfig.stats`.
- Class hooks for mobile: `.hero-main-grid`, `.hero-map-column`, `.hero-stats-grid`, `.hero-quick-track-container`.

### 2. `QuickTrack` (`components/quick-track.tsx`)
- Form that accepts AWB, LR, or container reference.
- Calls `mockTrackingService.track()`.
- Responsive behavior: Form fields stack vertically (`.quick-track-form`) on mobile to maintain 44px+ touch targets.

### 3. `ServiceRail` (`components/service-rail.tsx`)
- Displays all 6 modes from `companyConfig.services` (Road, Air, Ocean, Warehousing, Cold chain, Last-mile).
- **Desktop:** Vertical button sidebar on left with detail pane on right.
- **Mobile (`max-width: 820px`):** Top horizontal scrollbar (`.service-rail-nav`) with smooth touch scroll snap (`scroll-snap-type: x mandatory`), followed by the detail pane (`.service-rail-content`).

### 4. `NetworkTrust` (`components/network-trust.tsx`)
- Section 1: Bengaluru switchyard dark panel with orbital radar rings and active hub listings.
- Section 2: "Proof in the paper trail" ledger with ISO/IATA certifications.
- Responsive hooks: `.network-grid` and `.trust-ledger-grid` collapse cleanly into 1 column on mobile.

### 5. `SiteHeader` (`components/site-header.tsx`)
- Sticky frosted header (`backdrop-filter: blur(10px)`).
- Desktop: Wordmark + nav links + "REQUEST A QUOTE ↗" button.
- Mobile: Wordmark + hamburger toggle button (`≡` / `×`).
- Mobile drawer includes navigation links plus an integrated "REQUEST A QUOTE ↗" button.

### 6. `Rate Calculator` (`app/quote/page.tsx`)
- Real-time client-side rate engine (`lib/rates/rate-engine.ts`).
- Mode selection, weight slider (1–2000 kg), volume slider (0.05–10 m³), distance slider (5–1800 km).
- Auto-calculates volumetric weight (`volume * 167 kg/m³`), fuel surcharge, handling, and 18% GST.
- Responsive hook: `.quote-page-grid` stacks configuration options above sticky total card on mobile.

### 7. Client Portal (`app/portal/page.tsx`)
- Mock client interface for demoing customer accounts (overview stats, shipment status table, book, documents, invoices).
- Responsive hooks: `.portal-stats-grid` (2x2 on mobile), `.portal-shipment-row`.

---

## 5. Single Source of Truth for Rebranding

**File:** [config/company.config.ts](file:///c:/webdev/kaverifreight/config/company.config.ts)

When rebranding or updating company details, **only edit this file**. Do not hardcode values in components:
- `companyConfig.name` / `shortName` / `tagline` / `descriptor`
- `companyConfig.logo` (`mark`, `wordmark`)
- `companyConfig.contact` (`phone`, `whatsapp`, `email`, `address`)
- `companyConfig.stats` (e.g. `18 hubs`, `420 shipments/day`, `97.8% on-time`)
- `companyConfig.hubs` (List of active city/port hubs)
- `companyConfig.services` (Keys, names, eyebrows, details, metrics)
- `companyConfig.fleet` (Vehicles, payload capacity, best uses)
- `companyConfig.certifications`

---

## 6. Development & Operational Commands

```bash
# 1. Start local dev server (default port 3000)
pnpm dev

# 2. Expose to local network (for testing on real phone on same WiFi)
pnpm dev -H 0.0.0.0

# 3. Type checking
pnpm typecheck

# 4. Linting
pnpm lint

# 5. Unit tests
pnpm test

# 6. Production build test
pnpm build
```

---

## 7. Guidelines for Future AI Agents & Developers

1. **Keep Desktop and Mobile Layouts Synchronized:**
   - Always verify that desktop layout remains untouched when adjusting mobile styles.
   - Use media query `@media (max-width: 820px)` and `@media (max-width: 480px)` in `app/globals.css`.
   - Never remove existing semantic class hooks (`.hero-main-grid`, `.service-rail-grid`, etc.).
2. **Preserve Animations:**
   - Any new section should register with `.reveal-element` or use CSS keyframes (`heroFadeUp`).
   - Respect `prefers-reduced-motion` guidelines.
3. **Typography & Colors:**
   - Always use CSS variables (`var(--signal)`, `var(--ink)`, `var(--paper)`) rather than arbitrary hex values.
   - Use JetBrains Mono for codes, timestamps, and numbers (`.mono` or `fontFamily: "JetBrains Mono"`).
4. **Integration Swaps:**
   - If connecting a real database or 3rd-party APIs (e.g., MapmyIndia, Razorpay, WhatsApp Business, Delhivery/Shiprocket TMS), implement them through `lib/services/` by swapping out the mock providers. Keep component props clean.
