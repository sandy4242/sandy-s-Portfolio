import { PortfolioNavbar } from "@/components/blocks/navbars/portfolio-navbar";
import SplitWithCodeExample  from "@/components/blocks/heros/split-with-code-example";
import SimpleThreeColumnWithSmallIcons from "@/components/blocks/feature-sections/simple-three-column-with-small-icons";
import { ProjectsShowcase } from "@/components/blocks/portfolio/projects-showcase";
import SimpleCentered from "@/components/blocks/ctas/simple-centered";
import { SimpleCenteredContactForm } from "@/components/blocks/contact-forms/simple-centered-contact-form";
import { CenteredWithLogo } from "@/components/blocks/footers/centered-with-logo";
import { BackgroundAnimation } from "@/components/ui/gsap-background-animation";
import Timeline from "@/components/timeline/Timeline";
import Skills from "@/components/skills/Skills";
import ScrollSpy from "@/components/blocks/ScrollSpy/ScrollSpy";

export default function Home() {
  return (
    <>
      <BackgroundAnimation 
        enabled={true} 
        intensity="high" 
        primaryColor="#10B981"
        className="z-0"
      />
      <ScrollSpy/>
      <PortfolioNavbar />
      <main id="top" className="min-h-screen relative z-10 pt-16">
        <section id="home">
          <SplitWithCodeExample />
        </section>
        <section id="about" className="min-h-screen">
          <SimpleThreeColumnWithSmallIcons />
        </section>
        <section id="timeline" className="min-h-screen">
          <Timeline />
        </section>  
        <section id="projects" className="min-h-screen">
          <ProjectsShowcase/>
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="resume" className="min-h-screen">
          <SimpleCentered />
        </section>
        <section id="contact" className="min-h-screen">
          <SimpleCenteredContactForm />
        </section>
        <CenteredWithLogo />
      </main>
    </>
  )
}