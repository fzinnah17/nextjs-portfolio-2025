"use client";

import DesktopExperience from "./Desktop/DesktopExperience";
import MobileExperience from "./Mobile/MobileExperience";
import { useResponsive } from "@/hooks/useResponsive";

export default function Experience() {
  const deviceType = useResponsive();

  return deviceType ? <MobileExperience /> : <DesktopExperience />;
}
