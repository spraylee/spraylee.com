"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiRust,
  SiPrisma,
  SiTailwindcss,
  SiTrpc,
} from "react-icons/si";

const technologies = [
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "text-blue-500",
    bgColor: "rgba(49, 120, 198, 0.1)",
  },
  {
    icon: SiReact,
    name: "React",
    color: "text-cyan-400",
    bgColor: "rgba(97, 218, 251, 0.1)",
  },
  {
    icon: SiVuedotjs,
    name: "Vue.js",
    color: "text-emerald-500",
    bgColor: "rgba(66, 184, 131, 0.1)",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "text-green-500",
    bgColor: "rgba(83, 158, 67, 0.1)",
  },
  {
    icon: SiRust,
    name: "Rust",
    color: "text-orange-500",
    bgColor: "rgba(230, 126, 34, 0.1)",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
    color: "text-indigo-500",
    bgColor: "rgba(99, 102, 241, 0.1)",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "text-sky-400",
    bgColor: "rgba(56, 189, 248, 0.1)",
  },
  {
    icon: SiTrpc,
    name: "tRPC",
    color: "text-blue-600",
    bgColor: "rgba(37, 99, 235, 0.1)",
  },
];

function TechIcon({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: [1, 1.1, 1.05],
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 },
      });
    } else {
      controls.start({ scale: 1, rotate: 0 });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated background circles */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-20"
          animate={{
            scale: isHovered ? [1, 1.2, 1.1] : 1,
            opacity: isHovered ? [0.2, 0.3, 0.2] : 0.2,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ background: tech.bgColor }}
        />
        <motion.div
          className="absolute inset-0 rounded-full opacity-10"
          animate={{
            scale: isHovered ? [1.1, 1.3, 1.2] : 1.1,
            opacity: isHovered ? [0.1, 0.2, 0.1] : 0.1,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          style={{ background: tech.bgColor }}
        />

        {/* Icon */}
        <motion.div animate={controls} className="relative z-10 p-4">
          <tech.icon className={`w-16 h-16 ${tech.color}`} />
        </motion.div>

        {/* Tech name */}
        <motion.div
          className="absolute -bottom-8 w-full text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm">
            {tech.name}
          </span>
        </motion.div>

        {/* Connecting lines */}
        {index < technologies.length - 1 && (
          <motion.div
            className="absolute hidden md:block h-px w-full right-0 top-1/2 transform translate-x-1/2"
            style={{
              background: `linear-gradient(90deg, ${tech.bgColor}, transparent)`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/90 dark:from-gray-900/50 dark:to-gray-900/90 backdrop-blur-[1px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-24"
        >
          Technologies I Love
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8">
          {technologies.map((tech, index) => (
            <TechIcon key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
