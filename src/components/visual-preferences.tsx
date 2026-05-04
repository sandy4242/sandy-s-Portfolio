"use client";

import { Monitor, Moon, Paintbrush, Sun, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const accents = [
  { name: "Mint", value: "#10b981" },
  { name: "Blue", value: "#2563eb" },
  { name: "Rose", value: "#e11d48" },
  { name: "Amber", value: "#d97706" },
];

type Theme = "light" | "dark";
type Density = "calm" | "compact";

export function VisualPreferences() {
  const [theme, setTheme] = useState<Theme>("light");
  const [density, setDensity] = useState<Density>("calm");
  const [motion, setMotion] = useState(true);
  const [accent, setAccent] = useState(accents[0].value);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    const savedDensity = localStorage.getItem("portfolio-density") as Density | null;
    const savedMotion = localStorage.getItem("portfolio-motion");
    const savedAccent = localStorage.getItem("portfolio-accent");

    if (savedTheme) setTheme(savedTheme);
    if (savedDensity) setDensity(savedDensity);
    if (savedMotion) setMotion(savedMotion === "true");
    if (savedAccent) setAccent(savedAccent);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.density = density;
    root.dataset.motion = motion ? "on" : "off";
    root.style.setProperty("--accent", accent);

    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-density", density);
    localStorage.setItem("portfolio-motion", String(motion));
    localStorage.setItem("portfolio-accent", accent);
  }, [theme, density, motion, accent]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-lg border border-border bg-background/90 p-1 shadow-sm backdrop-blur">
      <button
        type="button"
        aria-label="Toggle theme"
        title="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="control-button"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <button
        type="button"
        aria-label="Toggle layout density"
        title="Toggle layout density"
        onClick={() => setDensity(density === "calm" ? "compact" : "calm")}
        className="control-button"
      >
        <Monitor size={16} />
      </button>
      <button
        type="button"
        aria-label="Toggle motion"
        title="Toggle motion"
        onClick={() => setMotion(!motion)}
        className="control-button"
      >
        <Zap size={16} />
      </button>
      <div className="h-5 w-px bg-border" />
      <Paintbrush size={15} className="mx-1 text-muted-foreground" />
      {accents.map((item) => (
        <button
          key={item.value}
          type="button"
          aria-label={`${item.name} accent`}
          title={`${item.name} accent`}
          onClick={() => setAccent(item.value)}
          className="h-7 w-7 rounded-full border border-border transition hover:scale-105"
          style={{
            backgroundColor: item.value,
            boxShadow: accent === item.value ? `0 0 0 2px ${item.value}55` : "none",
          }}
        />
      ))}
    </div>
  );
}
