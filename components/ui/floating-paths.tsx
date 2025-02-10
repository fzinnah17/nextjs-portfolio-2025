"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TOTAL_LINES = 20; // Number of lines in the chart
const MAX_HEIGHT = 100; // Maximum height variation

export default function FloatingStats() {
  const [lines, setLines] = useState(
    Array.from({ length: TOTAL_LINES }, () => Math.random() * MAX_HEIGHT)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        const newLines = [...prevLines.slice(1), Math.random() * MAX_HEIGHT];
        return newLines;
      });
    }, 1000); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 right-0 w-[150px] h-[400px] overflow-hidden pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 200 400" fill="none">
        <title>Dynamic Chart Lines</title>
        {lines.map((height, index) => (
          <motion.line
            key={index}
            x1={index * 8 + 5} // Spacing between lines
            y1={400 - height}
            x2={index * 8 + 5}
            y2={400}
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.8"
            initial={{ y1: 400, opacity: 0 }}
            animate={{ y1: 400 - height, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
