export type TrackingInput = { reference: string };
export type TrackingResult = {
  reference: string;
  kind: "AWB" | "LR" | "CONTAINER";
  status: "In Transit";
  origin: string;
  destination: string;
  eta: string;
  progress: number;
  note: string;
};
export interface TrackingService {
  track(input: TrackingInput): Promise<TrackingResult>;
}

// MOCK: Replace with a carrier or TMS adapter in production.
export const mockTrackingService: TrackingService = {
  async track({ reference }) {
    const normalized = reference.trim().toUpperCase();
    const kind = normalized.startsWith("AWB")
      ? "AWB"
      : normalized.startsWith("CONT")
        ? "CONTAINER"
        : "LR";
    return {
      reference: normalized || "KAV-240918",
      kind,
      status: "In Transit",
      origin: "Peenya, Bengaluru",
      destination: "Chennai ICD",
      eta: "18 Sep · 16:40",
      progress: 68,
      note: "Vehicle checked in at Nelamangala hub · 12 min ahead of plan",
    };
  },
};
