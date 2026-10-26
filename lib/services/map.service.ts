export type MapPoint = {
  id: string;
  label: string;
  lat: number;
  lng: number;
  kind: "hub" | "lane" | "port";
};
export interface MapProvider {
  getPoints(): Promise<readonly MapPoint[]>;
}
// MOCK: replace with MapLibre/MapmyIndia/Google-backed map data in production.
export const mockMapProvider: MapProvider = {
  async getPoints() {
    return [
      { id: "peenya", label: "Peenya", lat: 13.028, lng: 77.519, kind: "hub" },
      {
        id: "whitefield",
        label: "Whitefield",
        lat: 12.9698,
        lng: 77.75,
        kind: "hub",
      },
      {
        id: "chennai",
        label: "Chennai ICD",
        lat: 13.0827,
        lng: 80.2707,
        kind: "port",
      },
    ];
  },
};
