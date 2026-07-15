"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scrollToTopBtn"
      title="Başa Dön"
      aria-label="Sayfanın başına dön"
      className={visible ? "show" : ""}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}