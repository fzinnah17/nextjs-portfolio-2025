"use client"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      {/* Sun icon */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ${
          !mounted ? "opacity-0" : resolvedTheme === "dark" ? "text-[#A1A1AA] opacity-100 rotate-12" : "text-foreground opacity-100 rotate-0"
        }`}
      />
      <Switch
        checked={!mounted ? false : resolvedTheme === "dark"}
        onCheckedChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="transition-all duration-700 hover:scale-110"
      />
      {/* Moon icon */}
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ${
          !mounted ? "opacity-0" : resolvedTheme === "light" ? "text-[#A1A1AA] opacity-100 rotate-12" : "text-foreground opacity-100 rotate-0"
        }`}
      />
    </div>
  )
}
