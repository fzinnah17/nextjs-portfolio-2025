"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Origami, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";



export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 flex h-16 items-center px-2 md:px-2 bg-white dark:bg-gray-950 shadow-md">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <Link href="#" prefetch={false} className="flex items-center">
              <Origami className="h-6 w-6" />
              <span className="text-xl font-extrabold">
                <span className="text-xs font-extrabold align-super">FZ</span>
              </span>
            </Link>

            <div className="grid gap-2 py-6">
              <Link href="#home" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={closeMenu}>
                Home
              </Link>
              <Link href="#about-me" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={closeMenu}>
                About Me
              </Link>
              <Link href="#experience" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={closeMenu}>
                Experience
              </Link>
              <Link href="#projects" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={closeMenu}>
                Projects
              </Link>
              <Link href="https://drive.google.com/file/d/1EwuJxkFwd1bYaAB-Q5dvWwXlh4sdkVX7/view?usp=sharing"
                target="_blank" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false} onClick={closeMenu}>
                Resume
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="mr-8 hidden lg:flex items-center" prefetch={false}>
          <Origami size={32} />
          <span className="text-xl font-extrabold">
            <span className="text-xs font-extrabold align-super">FZ</span>
          </span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#home"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-extrabold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#about-me"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-extrabold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                About Me
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#experience"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-extrabold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Experience
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#projects"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-extrabold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Projects
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="https://drive.google.com/file/d/1EwuJxkFwd1bYaAB-Q5dvWwXlh4sdkVX7/view?usp=sharing"
                target="_blank"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-extrabold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Resume
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-6 items-center">
          <Link href="https://github.com/fzinnah17" target="_blank" aria-label="GitHub">
            <Github size={30} className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/farnaz-zinnah/" target="_blank" aria-label="LinkedIn">
            <Linkedin size={30} className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition" />
          </Link>
          <Link href="mailto:farnazsamia@gmail.com" aria-label="Email">
            <Mail size={30} className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition" />
          </Link>
          {/* ✅ Dark Mode Toggle */}
          <ThemeToggle />
        </div>
      </header>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

