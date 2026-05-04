"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function RouteTransitionLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const showLoader = () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
      setVisible(true);
    };

    window.addEventListener("portfolio-route-transition", showLoader);
    return () => window.removeEventListener("portfolio-route-transition", showLoader);
  }, []);

  useEffect(() => {
    if (!visible) return;

    closeTimer.current = window.setTimeout(() => {
      setVisible(false);
    }, 650);

    return () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, [pathname, visible]);

  return (
    <div className={`route-loader ${visible ? "route-loader-visible" : ""}`} aria-hidden={!visible}>
      <div className="route-loader-panel">
        <div className="walker-stage">
          <div className="walker">
            <span className="walker-head" />
            <span className="walker-body" />
            <span className="walker-arm walker-arm-left" />
            <span className="walker-arm walker-arm-right" />
            <span className="walker-leg walker-leg-left" />
            <span className="walker-leg walker-leg-right" />
          </div>
          <div className="walker-path" />
        </div>
        <p>Walking to the next page</p>
      </div>
    </div>
  );
}
