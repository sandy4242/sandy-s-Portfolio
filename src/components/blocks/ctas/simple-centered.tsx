import { Download, Linkedin } from "lucide-react";

export default function SimpleCentered() {
  return (
    <div className="section-inner">
      <div className="minimal-card grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="eyebrow">Resume</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Want the full version?
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            Download my resume or visit LinkedIn for a closer look at my technical background, coursework, and experience.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground hover:opacity-90"
          >
            <Download size={16} />
            Download
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-sarkar-cse/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-bold text-foreground hover:border-primary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
