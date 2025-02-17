"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function SectionWrapper({id, children }: { id: string; children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.1, // Starts the animation when 10% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      id = {id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
