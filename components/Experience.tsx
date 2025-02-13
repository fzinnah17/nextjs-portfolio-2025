"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Con Edison",
    title: "AI Engineer",
    period: "2023 - Present",
    description: "Developing AI-driven enterprise solutions for energy optimization.",
    details: "Implemented NLP models for predictive maintenance and automation, reducing downtime by 30%.",
  },
  {
    company: "NYU Tandon",
    title: "Graduate Research Assistant",
    period: "2022 - 2023",
    description: "Conducted AI research on machine learning models for healthcare applications.",
    details: "Developed a diagnostic ML model that improved accuracy by 25% compared to previous baselines.",
  },
  {
    company: "HSBC",
    title: "Software Engineer",
    period: "2020 - 2022",
    description: "Built enterprise applications focusing on AI-powered fraud detection.",
    details: "Designed an anomaly detection system that flagged fraudulent transactions with 95% precision.",
  },
];

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {/* Left Side - Company List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelectedExperience(exp)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 
                ${selectedExperience.company === exp.company 
                  ? "bg-primary text-white font-semibold" 
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Right Side - Experience Details */}
        <div className="md:col-span-2">
          <Card className="bg-accent text-accent-foreground shadow-lg">
            <CardContent className="p-10">
              <h3 className="text-xl font-semibold mb-2">{selectedExperience.title}</h3>
              <p className="text-sm mb-2 text-gray-500">{selectedExperience.period}</p>
              <p className="text-md mb-4">{selectedExperience.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{selectedExperience.details}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
