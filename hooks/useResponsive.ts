"use client";

import { useState, useEffect } from "react";

// Hook to check screen width globally
export function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Mobile & Tablet <= 1024px
    };

    checkScreenSize(); // Check on first load
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
}
