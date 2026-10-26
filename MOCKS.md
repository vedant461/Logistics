# Mock integrations

The initial demo deliberately uses typed local fixtures. `lib/services/tracking.service.ts` is the swap point for a TMS/carrier tracking API. `lib/rates/rate-engine.ts` is the config-driven quote calculation seam. Future `PaymentService`, WhatsApp, e-way bill and MapProvider adapters should keep the same pattern: a stable TypeScript interface, a realistic mock implementation, and a visible integration status in the portal. No production credentials are present.
