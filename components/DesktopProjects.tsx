"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Shield, BotIcon as Robot, Network, Lock, Sparkles, ExternalLink, LayoutGrid, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

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

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const IconComponent = projects[currentIndex].icon;


  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-8 mb-16 scroll-mt-32"
    >
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center text-gray-900 dark:text-white">
        PROJECTS
      </h2>

      {/* {isMobile ? (
        <div className="max-w-md mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 dark:hover:bg-gradient-to-br dark:hover:from-gray-800 dark:hover:to-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <IconComponent className={`w-12 h-12 transition-colors duration-300 ${projects[currentIndex].color}`} />
                    <h3 className="text-xl font-semibold">{projects[currentIndex].title}</h3>
                    <p className="text-muted-foreground">{projects[currentIndex].description}</p>
                  </div>

                  <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {projects[currentIndex].details.map((detail, i) => (
                      <li key={i} className="before:content-['↪'] before:mr-2 before:text-primary">
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={prevProject}>
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            <Button variant="outline" onClick={nextProject}>
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      ) : ( */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: project.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 dark:hover:bg-gradient-to-br dark:hover:from-gray-800 dark:hover:to-gray-700 h-full flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <project.icon className={`w-12 h-12 transition-colors duration-300 ${project.color}`} />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {project.details.map((detail, i) => (
                      <li key={i} className="before:content-['↪'] before:mr-2 before:text-primary">
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      {/* )} */}
    </motion.section>
  );
}
