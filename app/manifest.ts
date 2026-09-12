import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manga Edit Rehberi — Mangaruhu.com",
    short_name: "Manga Rehber",
    description:
      "Manga edit öğrenmek isteyenler için kapsamlı Türkçe rehber.",
    start_url: "/manga-rehber/",
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#c0392b",
    orientation: "portrait-primary",
    lang: "tr",
    categories: ["education", "books"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
