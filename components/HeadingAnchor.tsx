"use client";

import { useEffect } from "react";
import { showToast } from "@/lib/toast";

export default function HeadingAnchor() {
  useEffect(() => {
    const article = document.querySelector(".main-article-area");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h1[id], h2[id], h3[id]")
    ) as HTMLHeadingElement[];

    const buttons: HTMLButtonElement[] = [];

    headings.forEach((heading) => {
      if (heading.querySelector(".heading-anchor-btn")) return;

      const btn = document.createElement("button");
      btn.className = "heading-anchor-btn";
      btn.setAttribute("aria-label", "Bağlantıyı Kopyala");
      btn.setAttribute("title", "Bağlantıyı Kopyala");
      btn.setAttribute("type", "button");

      // Use textContent instead of innerHTML to avoid XSS
      const icon = document.createElement("i");
      icon.className = "fas fa-link";
      icon.setAttribute("aria-hidden", "true");
      btn.appendChild(icon);

      btn.addEventListener("click", () => {
        const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
        navigator.clipboard.writeText(url).then(() => {
          btn.classList.add("copied");
          icon.className = "fas fa-check";
          showToast("Bağlantı kopyalandı!");
          setTimeout(() => {
            btn.classList.remove("copied");
            icon.className = "fas fa-link";
          }, 2000);
        }).catch(() => {
          showToast("Kopyalanamadı", "error");
        });
      });

      heading.appendChild(btn);
      buttons.push(btn);
    });

    return () => {
      buttons.forEach((b) => b.remove());
    };
  }, []);

  return null;
}