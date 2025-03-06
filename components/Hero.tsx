import { useEffect } from "react";
import { ArrowDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0); // Only reset scroll on a fresh page load
    }
  }, []);

  const handleExperienceClick = () => {
    window.location.hash = "#experience-conedison"; // Update the hash
    setTimeout(() => {
      const experienceSection = document.getElementById("experience-conedison");
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };


  return (
    <section className="pt-32 pb-32 flex items-center">
      <div className="container max-w-7xl space-y-10 text-left">
        <h1 className="text-5xl sm:text-[5rem] font-bold">
          Hi!
        </h1>

        <h1 className="text-7xl sm:text-[6rem] font-light leading-tight ">
          I am <span className="font-bold">Farnaz Zinnah.</span>
        </h1>

        {/* AI Engineer at Con Edison (Large Badge) */}
        <Badge
          variant="outline"
          className="text-2xl sm:text-3xl px-6 py-3 font-semibold flex items-center w-max 
  border-[0px] shadow-lg drop-shadow-7xl cursor-pointer"
        >
          {/* <a href="#experience-conedison" className="flex items-center scroll-mt-32"> */}
          <a href="#experience-conedison" onClick={handleExperienceClick} className="flex items-center">
            I am an AI Engineer at Con Edison
            <ArrowDownRight className="ml-2 size-7" />
          </a>
        </Badge>


        <div className="pt-6 flex flex-col sm:flex-row gap-4">
          <Button className="shadow-md hover:shadow-lg" asChild size="lg">
            <a href="https://drive.google.com/uc?export=download&id=1EwuJxkFwd1bYaAB-Q5dvWwXlh4sdkVX7" target="_blank">Download Resume</a>
          </Button>
          <Button className="shadow-md hover:shadow-lg" asChild size="lg" variant="outline">
            <a href="https://www.linkedin.com/in/farnaz-zinnah" target="_blank">
              Let’s Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
