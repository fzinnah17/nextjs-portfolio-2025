"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Shield,
  BotIcon as Robot,
  Network,
  LayoutGrid,
  Users
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MobileProjectCard } from "./MobileProjectCard";

const projects = [
  {
    icon: Brain,
    title: "WealthWise",
    description: "AI financial bot for investment strategies and budget optimization.",
    color: "group-hover:text-blue-500",
    delay: 0,
    link: "#",
    details: [
      "Led development for 50+ students using ModalAI.",
      "Implemented blockchain for secure transactions via Verbwire.",
      "Visualized spending trends, securing high ratings in 15+ surveys.",
    ],
  },
  {
    icon: Shield,
    title: "Yoda the Conversation Co-Pilot",
    description: "Speech assistant using Whisper to help students with social anxiety.",
    color: "group-hover:text-red-500",
    delay: 0.1,
    link: "#",
    details: [
      "Assisted 20+ students in improving meeting conversations.",
      "Reduced inappropriate responses 4x using GPT & LangChain.",
    ],
  },
  {
    icon: Robot,
    title: "GreenCloset (Web)",
    description: "Textile waste reduction app for underserved communities.",
    color: "group-hover:text-green-500",
    delay: 0.2,
    link: "#",
    details: [
      "Built donation platform with React, Express & PostgreSQL.",
      "Optimized photo uploads, improving speed by 10ms with JSONB.",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Portfolio Website",
    description: "Minimalistic, responsive, and performance-optimized personal portfolio.",
    color: "group-hover:text-purple-500",
    delay: 0.3,
    link: "#",
    details: [
      "Developed with TypeScript, ShadCN, Radix UI, and Lucide Icons.",
      "Fully responsive for mobile, tablet, and desktop.",
      "Implemented light/dark mode with smooth transitions.",
      "Integrated motion animations for a seamless experience.",
    ],
  },
  {
    icon: Users,
    title: "Creatorverse",
    description: "A React & Supabase-powered content creator management platform.",
    color: "group-hover:text-orange-500",
    delay: 0.4,
    link: "#",
    details: [
      "Built a smooth UI with React JS & PicoCSS.",
      "Implemented CRUD operations for content creators using Supabase.",
      "Developed personalized recommendations & search filters.",
      "Enabled user authentication for secure content modification.",
    ],
  },
  {
    icon: Network,
    title: "CodeFM",
    description: "A React-based online coding community for tech enthusiasts.",
    color: "group-hover:text-teal-500",
    delay: 0.5,
    link: "https://codefm-client-production.up.railway.app/",
    details: [
      "Implemented full-stack app with React, Express, PostgreSQL.",
      "Enabled user authentication, CRUD posts, and comments.",
      "Built a dynamic discussion board with real-time updates.",
      "Designed resource-sharing & networking features for students.",
    ],
  },
];

export default function MobileProjects() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  return (
    <motion.section
      id="projects-mobile"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-8 mb-16 scroll-mt-32"
    >
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center text-gray-900 dark:text-white">PROJECTS</h2>

      <div className="max-w-md mx-auto px-4">
        {/* Circular Project Navigation */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-64">
            {projects.map((project, index) => {
              const angle = (index / projects.length) * 2 * Math.PI
              const x = Math.cos(angle) * 100 + 100
              const y = Math.sin(angle) * 100 + 100
              return (
                <TooltipProvider key={project.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedProject(project)}
                        className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                          selectedProject.title === project.title
                            ? "bg-primary text-primary-foreground shadow-lg scale-110"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <project.icon className="w-8 h-8" />
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
        </div>

        {/* Project Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <MobileProjectCard project={selectedProject} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}