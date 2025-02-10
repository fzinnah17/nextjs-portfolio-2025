import { ArrowDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FloatingPaths from "@/components/ui/floating-paths";


export default function Hero() {
  return (
    <section className="pt-20 pb-32 flex items-center">
      {/* Adjusted padding to move content up */}
      <div className="container max-w-7xl space-y-10 text-left">
        {/* Greeting */}
        <h1 className="text-5xl sm:text-[5rem] font-bold">
          Hi!
        </h1>

        {/* Name */}
        <h1 className="text-7xl sm:text-[6rem] font-light leading-tight ">
          I am <span className="font-bold">Farnaz Zinnah.</span>
        </h1>

        {/* AI Engineer at Con Edison (Large Badge) */}
        <Badge
          variant= "outline"
          className="text-2xl sm:text-3xl px-6 py-3 font-semibold flex items-center w-max 
          border-[0px] shadow-lg drop-shadow-7xl"
        >
          I am an AI Engineer at Con Edison
          <ArrowDownRight className="ml-2 size-7" />
        </Badge>

        {/* Resume & LinkedIn Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4">
          <Button className="shadow-md hover:shadow-lg" asChild size="lg">
            <a href="/resume.pdf">Download Resume</a>
          </Button>
          <Button className="shadow-md hover:shadow-lg" asChild size="lg" variant="outline">
            <a href="https://www.linkedin.com/in/farnaz-zinnah" target="_blank">
              Let’s Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
      {/* <FloatingPaths /> */}
    </section>
  );
}
