import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  return (
    <div className="border-t border-border px-8 py-16  w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full text-center">
          {/* Developer Name as Logo */}
          <div className="mb-2">
            <Link
              href="/"
              className="font-heading font-semibold text-2xl text-foregroundhover:text-[#10B981] transition duration-300"
            >
              Sandeep Sarkar
            </Link>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground text-sm mb-8">
            Crafting digital experiences with code
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <Link 
              href="https://github.com/sandy4242"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/sandeep-sarkar-cse/"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:sandeepsarkar316@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          <GridLineHorizontal className="max-w-7xl mx-auto mb-8" />
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Sandy . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};