"use client";
import DesktopExperience from "./DesktopExperience";
import MobileExperience from "./MobileExperience";
import { useResponsive } from "@/hooks/useResponsive";

export default function Experience() {
  const isMobile = useResponsive(); // ✅ Now correctly runs on the client side

  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}
