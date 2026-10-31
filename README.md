# Kaveri Freight & Logistics

A rebrandable Bengaluru logistics marketing site and client-portal demo built with Next.js App Router, React, strict TypeScript, and Tailwind CSS.

The site is intentionally demo-safe: tracking, quote, portal authentication, payments, documents, notifications, maps, and e-way bill flows use typed mock service seams. It is suitable for showcasing a logistics website concept to prospective clients.

## Run locally

```bash
npm install
npm run dev
```

Checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Rebrand

Edit `config/company.config.ts`. It owns the company name, wordmark, colors, contact details, operational hubs, services, fleet, certifications and home-page stats. Components should read from that config rather than adding client-specific strings.

## Project structure

- `app/` - App Router pages, metadata, sitemap, and robots rules
- `components/` - Shared interactive and presentation components
- `config/company.config.ts` - Rebrandable company content
- `lib/` - Rate calculation and service integration seams
- `public/` - Browser-delivered images, icons, and web manifest
- `tests/` - Focused unit tests

## Integration swaps

Replace the mock implementations behind `lib/services/*` with provider adapters: MapLibre/MapmyIndia/Google behind `MapProvider`, Razorpay or PayU behind `PaymentService`, WhatsApp Business API behind the messaging service, an e-way bill GSP behind `EwayBillService`, and a TMS/carrier connector behind `TrackingService`. Keep browser-safe values public and provide protected keys through project secrets.

## Demo vs production

The current tracking, quote, portal auth, payments, documents, notifications, maps and e-way bill flows are demo-safe mocks. Before production, add provider credentials, server-side validation, persistent shipment/invoice records, real PDF storage, identity/session policy, audit logging, consent text, rate-card governance, and a configured public origin for canonical/OG URLs.

## Docker

The production image uses Next.js standalone output and runs as a non-root user:

```bash
docker build -t kaveri-freight .
docker run --rm -p 3000:3000 kaveri-freight
```

## Deploy to Render

This repository includes `render.yaml`, so Render can create the service from the repository definition.

1. Push the repository to GitHub.
2. In Render, choose **New → Blueprint** and select the repository.
3. Keep the service as a Docker web service. Render will use the included `Dockerfile`.
4. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL if canonical URLs are needed. `NEXT_PUBLIC_MAP_STYLE_URL` is optional.
5. Deploy. Render supplies the `PORT` environment variable; the container listens on it automatically.

For a manual Render service, choose **Docker**, leave the Dockerfile path as `Dockerfile`, and use the same environment variables. No package-manager installation or custom build command is required.
