"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useResponsive } from "@/hooks/useResponsive";

export function SectionWrapper({id, children }: { id: string; children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const isMobile = useResponsive();

  return (
    <motion.div
      ref={ref}
      id = {id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // className="w-full scroll-mt-20"
      className={`w-full scroll-mt-20 ${isMobile ? "px-4" : "px-0"}`}
    >
      {children}
    </motion.div>
  );
}
