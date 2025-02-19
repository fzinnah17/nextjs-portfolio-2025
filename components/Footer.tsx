"use client";

import { useTheme } from "next-themes";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-10 max-w-full">
        <div className="text-sm mb-4 sm:mb-0">Built and designed by Farnaz Zinnah. All rights reserved.</div>
        <div className="flex space-x-4">
          
        </div>
      </div>
      <div className="h-6"></div>
    </footer>
  );
}
