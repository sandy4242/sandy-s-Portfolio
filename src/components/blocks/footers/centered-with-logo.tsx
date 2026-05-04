import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function CenteredWithLogo() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-inner flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-heading text-lg font-semibold text-foreground hover:text-primary">
            Sandeep Sarkar
          </Link>
          <p className="mt-1">Crafting digital experiences with code.</p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="https://github.com/sandy4242" className="control-button" aria-label="GitHub">
            <Github size={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/sandeep-sarkar-cse/" className="control-button" aria-label="LinkedIn">
            <Linkedin size={18} />
          </Link>
          <Link href="mailto:sandeepsarkar316@gmail.com" className="control-button" aria-label="Email">
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
