"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Dark Mode"
    >
    {theme === "dark" ? <Sun size={24} className="align-middle" /> : <Moon size={24} className="align-middle" />}
    </button>
  );
}
