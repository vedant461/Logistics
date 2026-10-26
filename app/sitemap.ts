import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "services",
    "network",
    "fleet",
    "track",
    "quote",
    "about",
    "contact",
    "careers",
    "legal",
  ].map((path) => ({
    url: `/${path}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
