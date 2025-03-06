"use client";
import { motion } from "framer-motion";
import { BotIcon, Brain, CodeSquareIcon, EarIcon, Cpu, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import { Slideshow } from "../Slideshow";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const technologies = [
  { name: "Python", icon: CodeSquareIcon },
  { name: "TypeScript", icon: Code },
  { name: "Java", icon: Cpu },
  { name: "Whisper", icon: EarIcon },
  { name: "OpenAI", icon: Brain },
  { name: "React JS", icon: CodeSquareIcon },
  { name: "JavaScript ES6+", icon: Code },
];

const skills = [
  { name: "Algorithm Design", icon: Brain },
  { name: "Machine Learning", icon: BotIcon },
];

const mentorships = [
  { name: "CodePath", link: "https://www.codepath.org", color: "text-green-600 dark:text-green-400" },
  { name: "Rewriting the Code", link: "https://rewritingthecode.org/", color: "text-pink-600 dark:text-pink-400" },
  { name: "CUNY Tech Prep (CTP)", link: "https://cunytechprep.nyc/", color: "text-orange-600 dark:text-orange-400" },
];

export default function AboutMe() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto scroll-mt-24">
      <motion.h2
        {...fadeIn}
        className="text-3xl font-extrabold mb-8 text-center text-primary"
      >
        IT&apos;S ME...
      </motion.h2>

      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="w-full bg-transparent border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-8 text-gray-900 dark:text-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12">
              {/* Left: 60% Content */}
              <motion.div {...fadeIn} className="space-y-6">
                <motion.p className="text-lg text-gray-700 dark:text-gray-300">
                  I am currently an <span className="font-semibold text-primary">AI Engineer</span> at{" "}
                  <a
                    href="https://www.coned.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Con Edison
                  </a>
                  , working in the Enterprise Architecture team. I am also pursuing a part-time Master&apos;s in{" "}
                  <a
                    href="https://engineering.nyu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Computer Engineering at NYU
                  </a>
                  .
                </motion.p>

                {/* Technologies & Skills */}
                <motion.div {...fadeIn}>
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Sparkles className="mr-2 h-6 w-6 text-yellow-500" />
                    Technologies & Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="px-3 py-1 text-sm flex items-center">
                        <tech.icon className="w-4 h-4 mr-2" />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((skill) => (
                      <Skill key={skill.name} icon={<skill.icon className="w-4 h-4" />} label={skill.name} />
                    ))}
                  </div>
                </motion.div>

                {/* AI Mentorship & Volunteering */}
                <motion.div {...fadeIn} className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold flex items-center">
                    <BotIcon className="mr-2 h-5 w-5 text-primary" />
                    AI Mentorship & Volunteering
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    Outside of work, I enjoy mentoring CS students at hackathons and organizations like:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {mentorships.map((mentorship, index) => (
                      <li key={index} className="text-lg">
                        <Link href={mentorship.link} target="_blank" className={`font-semibold ${mentorship.color} hover:underline`}>
                          {mentorship.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Right: 40% Slideshow */}
              <motion.div {...fadeIn} className="flex justify-center">
                <Slideshow />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 text-sm">
      {icon}
      <span className="font-medium text-gray-800 dark:text-gray-200">{label}</span>
    </div>
  );
}
