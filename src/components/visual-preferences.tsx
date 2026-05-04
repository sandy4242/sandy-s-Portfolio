"use client";

import { CloudRain, Flower2, Monitor, Moon, Snowflake, Sun, SunMedium, Zap } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const seasons = [
  { name: "Spring", season: "spring", value: "#16a34a", icon: Flower2 },
  { name: "Summer", season: "summer", value: "#f59e0b", icon: SunMedium },
  { name: "Rain", season: "rain", value: "#2563eb", icon: CloudRain },
  // { name: "Winter", season: "winter", value: "#38bdf8", icon: Snowflake },
];

type Theme = "light" | "dark";
type Density = "calm" | "compact";
type Season = "spring" | "summer" | "rain" | "winter";

export function VisualPreferences() {
  const [theme, setTheme] = useState<Theme>("light");
  const [density, setDensity] = useState<Density>("calm");
  const [motion, setMotion] = useState(true);
  const [season, setSeason] = useState<Season>("spring");
  const [accent, setAccent] = useState(seasons[0].value);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    const savedDensity = localStorage.getItem("portfolio-density") as Density | null;
    const savedMotion = localStorage.getItem("portfolio-motion");
    const savedAccent = localStorage.getItem("portfolio-accent");
    const savedSeason = localStorage.getItem("portfolio-season") as Season | null;

    if (savedTheme) setTheme(savedTheme);
    if (savedDensity) setDensity(savedDensity);
    if (savedMotion) setMotion(savedMotion === "true");
    if (savedSeason) setSeason(savedSeason);
    if (savedAccent) setAccent(savedAccent);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.density = density;
    root.dataset.motion = motion ? "on" : "off";
    root.dataset.season = season;
    root.style.setProperty("--accent", accent);

    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-density", density);
    localStorage.setItem("portfolio-motion", String(motion));
    localStorage.setItem("portfolio-accent", accent);
    localStorage.setItem("portfolio-season", season);
  }, [theme, density, motion, accent, season]);

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-lg border border-border bg-background/90 p-1 shadow-sm backdrop-blur">
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
      {seasons.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.season}
            type="button"
            aria-label={`${item.name} season`}
            title={`${item.name} season`}
            onClick={() => {
              setSeason(item.season as Season);
              setAccent(item.value);
            }}
            className={`season-button ${season === item.season ? "season-button-active" : ""}`}
            style={{ "--season-color": item.value } as CSSProperties}
          >
            <Icon size={15} />
          </button>
        );
      })}
    </div>
  );
}
