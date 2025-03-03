"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Explicitly type the experienceColors object
const experienceColors: Record<"Con Edison" | "CodePath" | "The Difference", string> = {
  "Con Edison": "bg-blue-500",
  "CodePath": "bg-green-500",
  "The Difference": "bg-orange-500",
};

const experiences = [
  {
    company: "Con Edison",
    title: "AI Engineer – Technical Associate",
    period: "Dec 2022 – Present",
    description: "Transforming challenges into smarter solutions with AI and ML, empowering teams with cutting-edge technology to solve real-world problems.",
    details: [
      "Developed an AI transcription & analysis tool, generating $50K in revenue insights from 20K+ calls using Azure Fast Transcription API & OpenAI.",
      "Wrote model prompts for image descriptions, improving screen-reader support for 30K visually impaired users.",
      "Extracted targeted energy data from 2M+ customer records using Azure Data Factory for demand forecasting.",
      "Authored AI chatbot documentation (2.7K views) to upskill non-technical staff.",
    ],
    technologies: ["Azure AI", "NLP", "Machine Learning", "BERT", "Data Engineering"],
  },
  {
    company: "CodePath",
    title: "Teaching Assistant",
    period: "Aug 2023 – Present",
    description: "Guiding students in data structures & algorithms for technical interviews.",
    details: [
      "Mentored 50+ students in DSA, with 5+ securing internships via mock technical interviews.",
      "Taught clean code & design patterns, improving 6/10 students' coding quality.",
      "Integrated pair programming, cutting code review cycles by 50%.",
      "Achieved a 94 NPS & 4.8/5 satisfaction score, leading to re-selection for the role.",
    ],
    technologies: ["Data Structures", "Algorithms", "Python", "Code Review"],
  },
  {
    company: "The Difference",
    title: "Software Developer Intern",
    period: "Feb 2023 – Apr 2023",
    description: "Developing a Flutter fitness app for Android/iOS.",
    details: [
      "Grew user base by 25% in 2 months with PHP & MySQL.",
      "Led 7+ interns in Scrum teams, achieving a 4.5/5 app rating & 3 releases/month.",
      "Optimized progress page load by 20% & cut data transfer by 10MB per session with API sorting.",
    ],
    technologies: ["Flutter", "PHP", "MySQL", "REST APIs"],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(
    experiences.find((exp) => exp.company === "Con Edison") || experiences[0]
  );

  return (
    <section id="experience-conedison" className="py-20 px-4 scroll-mt-24">
      <motion.h2 {...fadeIn} className="text-4xl font-extrabold mb-8 text-center text-primary">
        EXPERIENCE
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-10 max-w-7xl mx-auto">
        {/* Left Side - Company List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedExperience(exp)}
              {...fadeIn}
              className={`block w-full text-left px-6 py-3 rounded-lg transition-all duration-300 text-lg font-medium 
                ${selectedExperience.company === exp.company
                  ? "bg-black text-white dark:bg-white dark:text-black font-bold shadow-md"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }
              `}
            >
              {exp.company}
            </motion.button>
          ))}
        </div>

        {/* Right Side - Experience Details */}
        <motion.div
          key={selectedExperience.company}
          {...fadeIn}
          className="w-full relative overflow-hidden group"
        >

          <Card className="relative text-accent-foreground shadow-xl border w-full transition-all duration-300">
            <CardContent className="p-8 space-y-4 relative z-10">

              {/* Color Blob inside the card content */}
              <motion.div
                className={`absolute top-0 right-0 w-20 h-20 ${experienceColors[selectedExperience.company as "Con Edison" | "CodePath" | "The Difference"]} 
      rounded-bl-full z-0 opacity-70 transition-transform duration-300 group-hover:scale-110`}
              ></motion.div>

              {/* Title & Period */}
              <motion.h3
                {...fadeIn}
                className="text-2xl font-semibold text-gray-900 dark:text-gray-200 relative"
              >
                {selectedExperience.title}
              </motion.h3>
              <motion.p
                {...fadeIn}
                className="text-lg font-medium text-gray-500 relative"
              >
                {selectedExperience.period}
              </motion.p>

              {/* Description */}
              <motion.p {...fadeIn} className="text-lg text-gray-700 dark:text-gray-300 relative">
                {selectedExperience.description}
              </motion.p>

              {/* Details */}
              <motion.ul {...fadeIn} className="space-y-2 text-md text-gray-700 dark:text-gray-300 relative">
                {selectedExperience.details.map((detail, index) => (
                  <li key={index} className="relative pl-5">
                    <span className="absolute left-0 top-1 text-primary">▹</span> {detail}
                  </li>
                ))}
              </motion.ul>

              {/* Technologies */}
              <motion.div {...fadeIn} className="mt-4 flex flex-wrap gap-3 relative">
                {selectedExperience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

            </CardContent>
          </Card>

        </motion.div>
      </div>
    </section>
  );
}
