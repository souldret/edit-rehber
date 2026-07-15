"use client";

import { useState, useEffect } from "react";
import { getTheme, setTheme as persistTheme, type Theme } from "@/lib/storage";
import { showToast } from "@/lib/toast";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const saved = getTheme();
    setThemeState(saved);
    applyTheme(saved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    persistTheme(next);
    applyTheme(next);
    showToast(next === "light" ? "Aydınlık mod etkinleştirildi" : "Karanlık mod etkinleştirildi");
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Aydınlık moda geç" : "Karanlık moda geç"}
      title={theme === "dark" ? "Aydınlık Mod" : "Karanlık Mod"}
    >
      <i
        className={`fas fa-${theme === "dark" ? "sun" : "moon"}`}
        aria-hidden="true"
      />
    </button>
  );
}

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return;
  if (t === "light") {
    document.documentElement.classList.add("light-theme");
    document.documentElement.classList.remove("dark-theme");
  } else {
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
  }
}