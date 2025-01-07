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
    title: "Gomoku AI",
    description:
      "A deep learning-based Gomoku AI opponent, exploring machine learning in gaming. An open-source project open for collaboration.",
    image: "/images/gomoku.jpg",
    tags: ["React", "AI", "Game"],
    liveLink: "https://gomoku.example.com",
    githubLink: "https://github.com/spraylee/gomoku",
  },
  {
    title: "Tech Blog",
    description:
      "Sharing programming insights, technical experiments, and creative project documentation. Focused on frontend innovation and creative coding.",
    image: "/images/blog.jpg",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    liveLink: "https://blog.example.com",
    githubLink: "https://github.com/spraylee/blog",
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
      <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
        Creative Projects
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-center text-gray-500 dark:text-gray-300 sm:mt-4">
        Here are some of my favorite creative projects. Each one represents a
        fun exploration and a fusion of technology and creativity.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:max-w-none">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group flex flex-col overflow-hidden border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10"
          >
            <CardHeader className="p-0">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 rounded-t-lg transition-transform duration-300 group-hover:scale-110"
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
              <Button
                variant="outline"
                onClick={() => window.open(project.githubLink, "_blank")}
                className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
