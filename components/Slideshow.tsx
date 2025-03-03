"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"

const hackathonImages = [
  "/images/picture1.jpeg",
  "/images/picture2.jpeg",
  "/images/picture3.jpeg",
  "/images/picture4.jpeg",
  "/images/picture5.jpeg",
  "/images/picture6.jpeg",
  "/images/picture9.jpeg",
  "/images/picture10.jpeg",
  "/images/picture11.jpeg",
  "/images/picture13.jpeg",
  "/images/picture14.jpeg",
  "/images/picture16.jpeg",
  "/images/picture17.jpeg",
  "/images/picture18.jpeg",
  "/images/picture19.jpeg",
  "/images/picture20.jpeg",
  "/images/picture21.jpeg",
  "/images/picture22.jpeg",
  "/images/picture23.jpeg",
  "/images/picture25.jpeg",
  "/images/picture26.jpeg",
  "/images/picture27.jpeg",
  "/images/picture28.jpeg",
  "/images/picture30.jpeg",
  "/images/picture32.jpeg",
  "/images/picture33.jpeg",
  "/images/picture34.jpeg",
  
];


// export function Slideshow() {
//   const [shuffledImages, setShuffledImages] = useState<string[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Shuffle images when component mounts
//   useEffect(() => {
//     const shuffled = [...hackathonImages].sort(() => Math.random() - 0.5);
//     setShuffledImages(shuffled);
//     setCurrentIndex(0); // Reset index to start from the first shuffled image
//   }, []);

//   // Automatic cycling every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [shuffledImages]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? hackathonImages.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathonImages.length);
//   };

//   return (
//     <div
//       className="relative w-[100%] h-[400px]  overflow-hidden rounded-lg -mt-6"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence>
//         {shuffledImages.length > 0 && (
//           <motion.img
//             key={shuffledImages[currentIndex]}
//             src={shuffledImages[currentIndex]}
//             alt="Hackathon Event"
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//           />
//         )}
//       </AnimatePresence>
//       {isHovered && (
//         <>
//           <button
//             onClick={handlePrev}
//             className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//             >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//             >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </>
//       )}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-full h-full border-4 border-gray-300 dark:border-gray-600 animate-pulse"></div>
//       </div>
//     </div>
//   );
// }



export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathonImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hackathonImages.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathonImages.length)
  }

  return (
    <div
      className="relative w-full h-full min-h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={hackathonImages[currentIndex] || "/placeholder.svg"}
            alt="Hackathon Event"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
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
    </div>
  )
}

