import type React from "react";
import { Brain, Code, Database, Network } from "lucide-react";
import Link from "next/link"


export default function AboutMe() {
    return (
        <section className="max-w-4xl py-20 px-4">
            {/* Section Heading */}
            <h1 className="text-4xl font-bold mb-8 text-left">About Me</h1>

            <div className="grid md:grid-cols-[80%_45%] gap-40 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                    {/* <p className="text-lg text-gray-700 dark:text-gray-300">
            I am currently an <span className="font-bold">AI Engineer at Con Edison</span>, working in the
            <span className="font-bold"> Enterprise Architecture</span> team. At the same time, I am pursuing a
            <span className="font-bold"> part-time Master’s of Science in Computer Engineering</span> at 
            <span className="font-bold"> New York University</span>.
          </p> */}

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I am currently an AI Engineer at{" "}
                        <Link
                            href="https://www.conedison.com"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            Con Edison
                        </Link>, working in the Enterprise Architecture team.
                        Simultaneously, I am pursuing a part-time Master’s in Computer Engineering at{" "}
                        <Link
                            href="https://www.nyu.edu"
                            target="_blank"
                            className="text-purple-900 hover:underline"
                        >
                            New York University
                        </Link>.
                    </p>



                    {/* Technologies */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Technologies I have been working with:</h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                            <li><span className="font-semibold">Programming:</span> Python · TypeScript · Java</li>
                            <li><span className="font-semibold">Frameworks:</span> Whisper · OpenAI · React JS · JavaScript ES6+</li>
                        </ul>
                    </div>

                    {/* Hobbies / Interests */}
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Outside of work, I love mentoring at hackathons and CodePath, and enjoy playing badminton with my brother.
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-4">
                        <Skill icon={<Brain className="w-6 h-6" />} label="Machine Learning" />
                        <Skill icon={<Code className="w-6 h-6" />} label="Algorithm Design" />
                        <Skill icon={<Database className="w-6 h-6" />} label="Big Data" />
                        <Skill icon={<Network className="w-6 h-6" />} label="Neural Networks" />
                    </div>
                </div>

                {/* Right Side - Animated Shape */}
                <div className="relative">
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                        <svg
                            className="w-40 h-40 text-gray-600 opacity-20"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M47.7,-57.2C59.5,-47.3,65.4,-30.9,67.7,-14.3C70.1,2.3,68.9,19.2,61.4,32.6C54,46,40.3,55.9,25.8,60.4C11.2,64.9,-4.1,64,-17.9,59.1C-31.7,54.2,-43.9,45.3,-53.8,33.3C-63.7,21.3,-71.3,6.2,-70.6,-8.8C-69.9,-23.9,-61,-38.9,-48.6,-48.7C-36.2,-58.5,-20.4,-63,-3.2,-59.3C13.9,-55.6,35.9,-67.1,47.7,-57.2Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 border-4 border-gray-300 dark:border-gray-600 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 shadow-md">
            {icon}
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</span>
        </div>
    );
}
