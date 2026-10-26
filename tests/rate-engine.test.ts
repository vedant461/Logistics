import { describe, expect, it } from 'vitest';
import { calculateQuote } from '../lib/rates/rate-engine';

describe('calculateQuote', () => {
  it('uses the larger of scale and volumetric weight and adds GST', () => {
    const result = calculateQuote({ mode: 'LTL', weightKg: 100, volumeM3: 1, distanceKm: 120 });
    expect(result.chargeableKg).toBe(167);
    expect(result.gst).toBeGreaterThan(0);
    expect(result.total).toBeGreaterThan(result.base);
  });
});
