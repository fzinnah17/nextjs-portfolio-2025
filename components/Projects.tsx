"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    name: "Autonomous Swarm Intelligence",
    role: "Lead AI Engineer",
    period: "2023 - Present",
    description: "Developed a decentralized swarm AI system for distributed computing.",
    details:
      "Implemented emergent behavior algorithms resulting in a 200% efficiency increase in distributed computing tasks.",
    technologies: ["Swarm AI", "Distributed Systems", "Reinforcement Learning"],
  },
  {
    name: "Neuro-Symbolic Reasoning Engine",
    role: "AI Researcher",
    period: "2022 - 2023",
    description: "Created a hybrid AI system combining neural networks with symbolic reasoning.",
    details:
      "Achieved 70% improvement in interpretability of AI decisions while maintaining high accuracy.",
    technologies: ["Neural-Symbolic AI", "Knowledge Graphs", "Probabilistic Logic"],
  },
  {
    name: "Quantum-Enhanced Machine Learning",
    role: "Machine Learning Engineer",
    period: "2021 - 2022",
    description: "Pioneered the integration of quantum algorithms into classical ML pipelines.",
    details:
      "Demonstrated 40% speedup in high-dimensional data processing using quantum-inspired tensor networks.",
    technologies: ["Quantum Computing", "Tensor Networks", "High-Dimensional ML"],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Side - Project List */}
        <div className="space-y-4">
          {projects.map((proj, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(proj)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 
                ${
                  selectedProject.name === proj.name
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Right Side - Project Details */}
        <div className="md:col-span-2">
          <Card className="bg-accent text-accent-foreground shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{selectedProject.role}</h3>
              <p className="text-sm mb-2 text-gray-500">{selectedProject.period}</p>
              <p className="text-md mb-4">{selectedProject.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProject.details}</p>

              {/* Technologies Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
