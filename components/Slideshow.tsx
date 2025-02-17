"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const hackathonImages = [
  "/images/picture1.jpg",
  "/images/picture2.jpeg",
  "/images/picture3.jpeg",
  // Add 7+ more image paths
];

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Automatic cycling every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathonImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hackathonImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathonImages.length);
  };

  return (
    <div
      className="relative w-full h-64 overflow-hidden rounded-lg -mt-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        <motion.img
          key={hackathonImages[currentIndex]}
          src={hackathonImages[currentIndex]}
          alt="Hackathon Event"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      {isHovered && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-64 border-4 border-gray-300 dark:border-gray-600 animate-pulse"></div>
      </div>
    </div>
  );
}
