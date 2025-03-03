"use client"
import { motion, AnimatePresence } from "framer-motion"
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
      <motion.h2
        className="text-3xl font-extrabold mb-8 text-center text-primary md:text-left md:ml-[-30px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        IT'S ME...
      </motion.h2>

      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="w-full md:w-[calc(100%+80px)] ml-[-40px] bg-white dark:bg-gray-900 border-none shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-6 text-gray-900 dark:text-gray-100">
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

                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl md:text-2xl font-semibold flex items-center">
                        <Sparkles className="mr-2 h-6 w-6 text-yellow-500" />
                        Technologies & Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <Badge key={tech.name} variant="secondary" className="px-3 py-1 text-sm flex items-center">
                            <tech.icon className="w-4 h-4 mr-2" />
                            {tech.name}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Skill key={skill.name} icon={<skill.icon className="w-4 h-4" />} label={skill.name} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

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
                    Outside of work, I enjoy mentoring at hackathons and collaborating with:
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

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm">
      {icon}
      <span className="font-medium text-gray-800 dark:text-gray-200">{label}</span>
    </div>
  )
}
