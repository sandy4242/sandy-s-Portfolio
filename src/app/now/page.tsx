import type { Metadata } from "next";
import { PortfolioNavbar } from "@/components/blocks/navbars/portfolio-navbar";
import { CenteredWithLogo } from "@/components/blocks/footers/centered-with-logo";
import { NowPage } from "@/components/now-page";
import { SeasonalBackground } from "@/components/seasonal-background";
import { VisualPreferences } from "@/components/visual-preferences";

export const metadata: Metadata = {
  title: "Now | Sandeep Sarkar",
  description: "What Sandeep is reading, learning, building, and thinking about right now.",
};

export default function Now() {
  return (
    <>
      <SeasonalBackground />
      <VisualPreferences />
      <PortfolioNavbar />
      <main className="relative z-10 min-h-screen pb-32">
        <NowPage />
        <CenteredWithLogo />
      </main>
    </>
  );
}
