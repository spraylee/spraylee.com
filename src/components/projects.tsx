"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Gomoku Game",
    description:
      "A Gomoku AI opponent powered by Alpha-Beta pruning algorithm, featuring efficient game tree search and position evaluation. An open-source project exploring the elegance of traditional algorithms.",
    image: "/images/gomoku.jpg",
    tags: ["React", "Algorithm", "Game"],
    liveLink: "https://go.spraylee.com",
    githubLink: "https://github.com/spraylee/go",
  },
  {
    title: "2048 Game",
    description:
      "An interactive 2048 puzzle game featuring both manual play and AI auto-play modes. The AI player uses expectimax algorithm to make optimal moves, achieving high scores consistently.",
    image: "/images/2048.png",
    tags: ["React", "TypeScript", "Algorithm"],
    liveLink: "https://2048.spraylee.com",
    // githubLink: "https://github.com/spraylee/2048",
  },
  {
    title: "Creative Weather",
    description:
      "Transforming weather data into visual art, exploring creative data visualization. Each day creates a unique artistic expression.",
    image: "/images/weather.jpg",
    tags: ["Vue.js", "D3.js", "Creative Coding"],
    liveLink: "https://weather.example.com",
    githubLink: "https://github.com/spraylee/weather-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
          Creative Projects
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-center text-gray-500 dark:text-gray-300 sm:mt-4">
          Here are some of my favorite creative projects. Each one represents a
          fun exploration and a fusion of technology and creativity.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 place-items-stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group w-full flex flex-col overflow-hidden border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="object-cover w-full aspect-square rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button
                  variant="outline"
                  onClick={() => window.open(project.liveLink, "_blank")}
                  className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                {project.githubLink && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
