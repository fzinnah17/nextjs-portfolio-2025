"use client";

import { useTheme } from "next-themes";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-10 max-w-full">
        <div className="text-sm mb-4 sm:mb-0">© 2025 Farnaz Zinnah. All rights reserved.</div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/fzinnah17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/farnaz-zinnah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:farnazsamia@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="h-6"></div>
    </footer>
  );
}
