"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useResponsive } from "@/hooks/useResponsive";

export default function Home() {
  const isMobile = useResponsive();
  return (
    <>
      {/* ✅ Container Wrapping Main Sections */}
      <div className="container mx-auto px-2 md:px-2 lg:px-2">
        <Navigation />
        <main className="mt-20 space-y-20">
          <SectionWrapper id = "home">
            <Hero />
          </SectionWrapper>

          <SectionWrapper id = "about-me">
            <AboutMe />
          </SectionWrapper>

          <SectionWrapper id="experience">
            <Experience /> {/* ✅ Mobile/Desktop logic handled inside */}
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects /> {/* ✅ Mobile/Desktop logic handled inside */}
          </SectionWrapper>
        </main>
      </div> {/* ✅ Correctly closing container */}

      {/* ✅ Full-width Footer placed correctly */}
      <Footer />
    </>
  );
}
