"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const particleIndexes = Array.from({ length: 64 }, (_, index) => index);

export function SeasonalBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`seasonal-background ${mounted ? "seasonal-background-ready" : ""}`} aria-hidden="true">
      <div className="season-sun" />
      <div className="season-cloud season-cloud-one" />
      <div className="season-cloud season-cloud-two" />
      <div className="spring-hills" />
      <div className="season-particles">
        {particleIndexes.map((index) => (
          <span key={index} style={{ "--i": index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
