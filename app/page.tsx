import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper"; // Import the fade-in wrapper

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-2 lg:px-2">
      <Navigation />
      <main className="mt-16 space-y-20"> {/* Ensures spacing between sections */}

        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <SectionWrapper>
          <AboutMe />
        </SectionWrapper>

        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        <h1 className="text-3xl font-bold">Sections 2</h1>

        {/* Example of other sections that can also use fade-in */}
        {/* <SectionWrapper>
          <section id="about">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p>...</p>
          </section>
        </SectionWrapper>

        <SectionWrapper>
          <section id="projects">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p>...</p>
          </section>
        </SectionWrapper>

        <SectionWrapper>
          <section id="experience">
            <h1 className="text-3xl font-bold">Experience</h1>
            <p>...</p>
          </section>
        </SectionWrapper>

        <SectionWrapper>
          <section id="resume">
            <h1 className="text-3xl font-bold">Resume</h1>
            <p>...</p>
          </section>
        </SectionWrapper> */}
      </main>
    </div>
  );
}
