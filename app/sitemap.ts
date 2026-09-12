import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mangaruhu.com/manga-rehber/",
      lastModified: new Date("2026-09-12"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}