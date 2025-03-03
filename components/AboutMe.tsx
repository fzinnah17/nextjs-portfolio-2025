"use client";

import { useResponsive } from "@/hooks/useResponsive";
import AboutMeMobile from "./Mobile/MobileAboutMe";
import AboutMeDesktop from "./Desktop/DesktopAboutMe";

export default function AboutMe() {
  const deviceType = useResponsive();

  return deviceType === "mobile" ? <AboutMeMobile /> : <AboutMeDesktop />;
}
