"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-blue-600 uppercase">
                Creative Coding & Tech Exploration
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900 dark:text-white">
                  Creating Digital
                </span>
                <span className="block text-blue-600 dark:text-blue-400">
                  Playgrounds with Code
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Hi, I'm Spray Lee. This is my digital playground where I explore
              and create in the world of programming. From interactive games to
              creative visualizations, I share experiments and ideas that make
              coding fun.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <Button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Code className="h-6 w-6 text-blue-500" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    Creative Coding
                  </span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    Tech Exploration
                  </span>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-red-500" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    Open Source
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <div className="relative block w-full">
                <Image
                  className="w-full object-contain"
                  src="/images/hero-illustration.svg"
                  alt="Developer Illustration"
                  width={500}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
