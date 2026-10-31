# Kaveri Freight & Logistics

A rebrandable Bengaluru logistics marketing site and client-portal demo built with Next.js App Router, React, strict TypeScript, Tailwind tokens and typed mock service seams.

> 💡 **For AI Agents & Developers:** See [CONTEXT.md](file:///c:/webdev/kaverifreight/CONTEXT.md) for the complete architectural map, design system tokens, responsive layout guidelines, and component specifications.

## Run locally

```bash
pnpm install
pnpm dev
```

Checks:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Rebrand

Edit `config/company.config.ts`. It owns the company name, wordmark, colors, contact details, operational hubs, services, fleet, certifications and home-page stats. Components should read from that config rather than adding client-specific strings.

## Integration swaps

Replace the mock implementations behind `lib/services/*` with provider adapters: MapLibre/MapmyIndia/Google behind `MapProvider`, Razorpay or PayU behind `PaymentService`, WhatsApp Business API behind the messaging service, an e-way bill GSP behind `EwayBillService`, and a TMS/carrier connector behind `TrackingService`. Keep browser-safe values public and provide protected keys through project secrets.

## Demo vs production

The current tracking, quote, portal auth, payments, documents, notifications, maps and e-way bill flows are demo-safe mocks. Before production, add provider credentials, server-side validation, persistent shipment/invoice records, real PDF storage, identity/session policy, audit logging, consent text, rate-card governance and a configured public origin for canonical/OG URLs.
