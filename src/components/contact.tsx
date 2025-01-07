"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Let's Connect
        </h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          If you're interested in creative coding or want to discuss tech ideas,
          feel free to reach out
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => window.open("https://github.com/spraylee", "_blank")}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() =>
              window.open("mailto:spray.lee@example.com", "_blank")
            }
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() =>
              window.open("https://linkedin.com/in/spraylee", "_blank")
            }
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
