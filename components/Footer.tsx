"use client";

import { useTheme } from "next-themes";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className="w-full flex flex-col items-center justify-center text-center px-10">
      <div className="text-sm">
        Built and designed by Farnaz Zinnah.
        <br />
        All rights reserved. ©
      </div>
      <div className="h-6"></div>
    </footer>
  );
}
