"use client"
import { motion } from "framer-motion"
import { BotIcon, Brain, CodeSquareIcon, EarIcon, Cpu, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { Slideshow } from "../Slideshow"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  { name: "Python", icon: CodeSquareIcon },
  { name: "TypeScript", icon: Code },
  { name: "Java", icon: Cpu },
  { name: "Whisper", icon: EarIcon },
  { name: "OpenAI", icon: Brain },
  { name: "React JS", icon: CodeSquareIcon },
  { name: "JavaScript ES6+", icon: Code },
]

const skills = [
  { name: "Algorithm Design", icon: Brain },
  { name: "Machine Learning", icon: BotIcon },
]

const mentorships = [
  { name: "CodePath", link: "https://www.codepath.org", color: "text-green-600 dark:text-green-400" },
  { name: "Rewriting the Code", link: "https://rewritingthecode.org/", color: "text-pink-600 dark:text-pink-400" },
  { name: "CUNY Tech Prep (CTP)", link: "https://cunytechprep.nyc/", color: "text-orange-600 dark:text-orange-400" },
]

export default function AboutMe() {
  return (
    <section className="py-12 px-4 md:py-20 md:px-6 max-w-7xl mx-auto scroll-mt-24">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        IT'S ME...
      </motion.h1>

      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="w-full md:w-[calc(100%+80px)] ml-[-40px] bg-white border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:gap-12">
              {/* Left: 60% content */}
              <div className="md:w-3/5 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    I am currently an AI Engineer at{" "}
                    <a
                      href="https://www.coned.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Con Edison
                    </a>
                    , working in the Enterprise Architecture team. I'm also pursuing a part-time Master's in Computer
                    Engineering at{" "}
                    <a
                      href="https://engineering.nyu.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      NYU
                    </a>
                    .
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center">
                    <Sparkles className="mr-2 h-6 w-6 text-yellow-500" />
                    Technologies & Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="text-base px-3 py-1 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300"
                      >
                        <tech.icon className="w-4 h-4 mr-2" />
                        {tech.name}
                      </Badge>
                    ))}
                    {skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="text-base px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <skill.icon className="w-4 h-4 mr-2" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 p-4 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <BotIcon className="mr-2 h-5 w-5 text-primary" />
                    AI Mentorship & Volunteering
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                    Passionate about fostering AI talent, I actively engage in:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {mentorships.map((mentorship, index) => (
                      <li key={index} className="text-base md:text-lg">
                        <Link
                          href={mentorship.link}
                          target="_blank"
                          className={`font-semibold ${mentorship.color} hover:underline`}
                        >
                          {mentorship.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="text-base md:text-lg mt-2 text-gray-700 dark:text-gray-300">
                    Guiding students in AI development, ethics, and cutting-edge technologies.
                  </p>
                </motion.div>
              </div>

              {/* Right: 40% slideshow */}
              <div className="md:w-2/5">
                <Slideshow />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
