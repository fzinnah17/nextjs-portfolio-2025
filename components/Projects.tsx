"use client";
import { useResponsive } from "@/hooks/useResponsive";
import DesktopProjects from "./DesktopProjects";
import MobileProjects from "./MobileProjects";

export default function Projects() {
  const isMobile = useResponsive(); // ✅ Now handled properly

  return isMobile ? <MobileProjects /> : <DesktopProjects />;
}
