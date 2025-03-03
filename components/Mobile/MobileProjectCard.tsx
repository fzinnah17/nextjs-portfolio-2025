"use client"

import type React from "react"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: {
    icon: React.ElementType
    title: string
    description: string
    color: string
    link: string
    details: string[]
  }
}

export function MobileProjectCard({ project }: ProjectCardProps) {
  const IconComponent = project.icon

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 dark:hover:bg-gradient-to-br dark:hover:from-gray-800 dark:hover:to-gray-700">
      <CardContent className="p-6 h-[500px] overflow-y-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <IconComponent className={`w-12 h-12 transition-colors duration-300 ${project.color}`} />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <ul className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-300">
          {project.details.map((detail, i) => (
            <li key={i} className="before:content-['↪'] before:mr-2 before:text-primary">
              {detail}
            </li>
          ))}
        </ul>

        <Button variant="outline" className="mt-4 w-full" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

