import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { RouteTransitionLoader } from "@/components/route-transition-loader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Sandeep Sarkar | Portfolio",
  description: "Modern developer portfolio for Sandeep Sarkar, full stack and Flutter developer.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        <RouteTransitionLoader />
      </body>
    </html>
  );
}
