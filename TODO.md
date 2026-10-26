# Delivery outcomes

## Foundation and rebrandable system
- [ ] The app uses Next.js App Router, React, strict TypeScript, Tailwind CSS with CSS-variable tokens, a fluid typography system, full light/dark theme tokens, and responsive layouts for 360px, 768px, 1024px, 1440px and 1920px.
- [ ] All client-specific content lives in `config/company.config.ts`, including name, SVG logo/mark, tagline, colors, services, hubs, pincodes served, fleet, certifications, contact information and copy; components contain no hardcoded brand strings.
- [ ] The visual language is industrial editorial meets live control tower: deep ink, warm paper, signal accent, cool map/data state, 1px rules, asymmetrical 12-column layout, grain and route/topographic motifs, with no banned gradient/glassmorphism/blob/template patterns.
- [ ] English, Kannada and Hindi locale scaffolding exists with persisted language selection and suitable Kannada/Devanagari fallbacks.
- [ ] Typed mock service interfaces exist for tracking, payments, WhatsApp, e-way bill, rates and map provider; realistic mock fixtures are indexed in `MOCKS.md` and no real keys are committed.
- [ ] A static `public/manus-routes.json`, `.env.example`, README setup/rebranding/integration-swap/demo-vs-production guidance, lint/typecheck/test/build scripts and visible keyboard focus states are present.

## Marketing home and public interactions
- [ ] The home page is content-bearing on first render with route-specific metadata, descriptive headings, internal navigation, and no generic “Welcome”/lorem/fake testimonial content.
- [ ] The hero presents Quick Track for AWB / container / LR numbers with format hints, an Instant Quote entry point, and a scroll-linked route-drawing sequence from Bengaluru toward destinations with counters for cities, daily shipments and on-time percentage.
- [ ] The hero animation uses transform/opacity and route drawing only, pauses when off-screen where applicable, and provides a complete static `prefers-reduced-motion` fallback.
- [ ] Service modes cover Road, Air, Ocean, Warehouse, Cold Chain and Last-mile in an intentional horizontal/pinned showcase with mode-specific diagrams and no dead CTA.
- [ ] Trust content includes ISO/IATA/FIATA cues, GSTIN, safety/on-time stats, a client-logo placeholder system, and a claims-handling block.
- [ ] WhatsApp, click-to-call and mobile sticky Request a Quote actions are usable and visible at touch sizes.

## Quote, network and serviceability
- [ ] Quote flow accepts origin, destination pincode/city, weight, L×W×H dimensions, cargo type and FTL/LTL/Express/Air/Ocean mode; it computes volumetric weight and shows base freight, fuel surcharge, peak-hour surcharge, handling, 18% GST and animated total from the config rate card.
- [ ] Network route contains a MapProvider abstraction with MapLibre-ready implementation, hub/warehouse/lane states, and a pincode serviceability checker with transit estimate and service tier for Bengaluru sub-zones and sample pan-India pincodes.
- [ ] Rate, pincode, format and validation logic have Vitest coverage; Quick Track and Quote flows have Playwright smoke coverage.

## Remaining marketing routes and resilience
- [ ] Home, Services, config-driven service detail, Network, Fleet, Track, Quote, About, Contact, Careers and Legal routes exist with meaningful server-rendered content, per-route metadata, Open Graph/Twitter fields, canonical strategy, sitemap, robots and JSON-LD for LocalBusiness/Service.
- [ ] Fleet roster includes 3-wheeler, Tata Ace, 14ft Eicher and 20ft/32ft container entries with capacity, dimensions, best-for filter and realistic Bengaluru context.
- [ ] Data-driven sections include loading, empty, error and offline-tolerant tracking states; inputs are sanitized and cookie consent exists.

## Client portal demo
- [ ] Mock login/OTP and dashboard show active shipments, delayed, delivered and outstanding invoices.
- [ ] Booking wizard supports pickup scheduling, cargo classification, drop-off map pin, Fragile/Temperature-controlled/Hazmat tags, E-Way Bill format validation and clearly labeled generation integration stub.
- [ ] Tracking detail shows Placed → Picked Up → In Transit → At Hub → Out for Delivery → Delivered timeline, simulated GPS vehicle marker, ETA and delay alerts.
- [ ] E-Docs repository covers e-POD with digital signature pad, BoL, LR, Commercial Invoice and Packing List with downloadable template PDFs.
- [ ] Notifications preferences cover Email, SMS and WhatsApp behind a stub sending service; invoices include downloadable GST tax invoice and mocked UPI/Card/NetBanking payment behind `PaymentService`; address book supports saved multi-warehouse addresses and booking autofill.

## Admin, quality and handoff
- [ ] Lightweight admin add-on provides driver/vehicle assignment board with drag-and-drop and trip expense log for fuel, FASTag tolls and allowances.
- [ ] Each phase passes lint, typecheck, tests and production build before the next phase; the dev server is run for visual verification at mobile and desktop widths, and generic-looking output is corrected.
- [ ] Conventional commits record phase completion, with a final summary of built vs mocked integrations, known issues and exact run commands.
