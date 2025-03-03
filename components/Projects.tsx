"use client";

import { useResponsive } from "@/hooks/useResponsive";
import DesktopProjects from "./Desktop/DesktopProjects";
import MobileProjects from "./Mobile/MobileProjects";

export default function Projects() {
  const deviceType = useResponsive();

  return deviceType === "mobile" ? <MobileProjects /> : <DesktopProjects />;
}
