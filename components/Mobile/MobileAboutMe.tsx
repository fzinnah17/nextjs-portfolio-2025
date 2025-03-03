"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotIcon, Brain, CodeSquareIcon, EarIcon, ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";
import { Slideshow } from "../Slideshow";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useResponsive } from "@/hooks/useResponsive";

export default function AboutMeMobile() {
  const isMobile = useResponsive();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isMobile) return null;

  return (
    <section className="py-12 px-4">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        IT'S ME...
      </motion.h1>

      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none shadow-lg overflow-hidden">
        <CardContent className="p-6 space-y-6">
          <Slideshow />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-base text-gray-700 dark:text-gray-300">
              I am currently an AI Engineer at{" "}
              <a
                href="https://www.coned.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Con Edison
              </a>
              , working in the Enterprise Architecture team. I am also pursuing a part-time Master's in Computer Engineering at{" "}
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
            {
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-semibold">Technologies I work with:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Whisper</Badge>
                    <Badge variant="secondary">OpenAI</Badge>
                    <Badge variant="secondary">React JS</Badge>
                    <Badge variant="secondary">JavaScript ES6+</Badge>
                  </div>

                  <p className="text-base text-gray-700 dark:text-gray-300">
                    Outside of work, I enjoy mentoring CS students at hackathons and through organizations like{" "}
                    <Link href="https://www.codepath.org" target="_blank" className="font-semibold text-green-600 dark:text-green-400 hover:underline">
                      CodePath
                    </Link>,{" "}
                    <Link href="https://cunytechprep.nyc/" target="_blank" className="font-semibold text-orange-600 dark:text-orange-400 hover:underline">
                      CUNY Tech Prep (CTP)
                    </Link>, and{" "}
                    <Link href="https://rewritingthecode.org/" target="_blank" className="font-semibold text-pink-600 dark:text-pink-400 hover:underline">
                      Rewriting the Code
                    </Link>.
                  </p>


                  <div className="flex flex-wrap gap-2">
                    <Skill icon={<Brain className="w-4 h-4" />} label="Algorithm Design" />
                    <Skill icon={<BotIcon className="w-4 h-4" />} label="Machine Learning" />
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>


        </CardContent>
      </Card>
    </section>
  );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm">
      {icon}
      <span className="font-medium text-gray-800 dark:text-gray-200">{label}</span>
    </div>
  );
}