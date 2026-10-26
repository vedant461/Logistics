export type QuoteInput = {
  mode: "FTL" | "LTL" | "Express" | "Air" | "Ocean";
  weightKg: number;
  volumeM3: number;
  distanceKm: number;
};
export type QuoteBreakdown = {
  base: number;
  fuel: number;
  handling: number;
  peak: number;
  gst: number;
  total: number;
  chargeableKg: number;
};
const modeFactor: Record<QuoteInput["mode"], number> = {
  FTL: 42,
  LTL: 18,
  Express: 32,
  Air: 125,
  Ocean: 9,
};
export function calculateQuote(input: QuoteInput): QuoteBreakdown {
  const volumetricKg = Math.ceil(input.volumeM3 * 167);
  const chargeableKg = Math.max(input.weightKg, volumetricKg);
  const base = Math.max(
    850,
    Math.round(chargeableKg * modeFactor[input.mode] + input.distanceKm * 4.2),
  );
  const fuel = Math.round(base * 0.12);
  const handling = input.mode === "Ocean" ? 1800 : 420;
  const peak = input.distanceKm < 25 ? 160 : 0;
  const gst = Math.round((base + fuel + handling + peak) * 0.18);
  return {
    base,
    fuel,
    handling,
    peak,
    gst,
    chargeableKg,
    total: base + fuel + handling + peak + gst,
  };
}
