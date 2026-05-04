import { PortfolioNavbar } from "@/components/blocks/navbars/portfolio-navbar";
import SplitWithCodeExample  from "@/components/blocks/heros/split-with-code-example";
import SimpleThreeColumnWithSmallIcons from "@/components/blocks/feature-sections/simple-three-column-with-small-icons";
import { ProjectsShowcase } from "@/components/blocks/portfolio/projects-showcase";
import SimpleCentered from "@/components/blocks/ctas/simple-centered";
import { SimpleCenteredContactForm } from "@/components/blocks/contact-forms/simple-centered-contact-form";
import { CenteredWithLogo } from "@/components/blocks/footers/centered-with-logo";
import Timeline from "@/components/timeline/Timeline";
import Skills from "@/components/skills/Skills";
import ScrollSpy from "@/components/blocks/ScrollSpy/ScrollSpy";
import { VisualPreferences } from "@/components/visual-preferences";

export default function Home() {
  return (
    <>
      <ScrollSpy/>
      <VisualPreferences />
      <PortfolioNavbar />
      <main id="top" className="min-h-screen relative pt-16">
        <section id="home" className="section-shell">
          <SplitWithCodeExample />
        </section>
        <section id="about" className="section-shell">
          <SimpleThreeColumnWithSmallIcons />
        </section>
        <section id="timeline" className="section-shell">
          <Timeline />
        </section>  
        <section id="projects" className="section-shell">
          <ProjectsShowcase/>
        </section>
        <section id="skills" className="section-shell">
          <Skills />
        </section>
        <section id="resume" className="section-shell">
          <SimpleCentered />
        </section>
        <section id="contact" className="section-shell">
          <SimpleCenteredContactForm />
        </section>
        <CenteredWithLogo />
      </main>
    </>
  )
}
