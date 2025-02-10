import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-2 lg:px-2">
      <Navigation />
      <main className="mt-16 space-y-20"> {/* Ensures spacing between sections */}
      <Hero />
      <AboutMe />
      <h1 className="text-3xl font-bold">Sections 2</h1>

        {/* <section id="about">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p>...</p>
        </section>

        <section id="projects">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>...</p>
        </section>

        <section id="experience">
          <h1 className="text-3xl font-bold">Experience</h1>
          <p>...</p>
        </section>

        <section id="resume">
          <h1 className="text-3xl font-bold">Resume</h1>
          <p>...</p>
        </section> */}
      </main>
    </div>
  );
}
