"use client";

import { useState, useEffect } from "react";

// Custom hook to determine if the device is mobile/tablet or desktop
export function useResponsive() {
  const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      setDeviceType(window.innerWidth < 1024 ? "mobile" : "desktop"); // Mobile & Tablet < 1024px
    };

    checkScreenSize(); // Check on first load
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return deviceType;
}
