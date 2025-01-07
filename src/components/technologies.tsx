"use client";

import { motion } from "framer-motion";
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
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  { icon: SiVuedotjs, name: "Vue.js", color: "text-emerald-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiRust, name: "Rust", color: "text-orange-500" },
  { icon: SiPrisma, name: "Prisma", color: "text-indigo-500" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
  { icon: SiTrpc, name: "tRPC", color: "text-blue-600" },
];

export default function Technologies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-16">
          Technologies I Love
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                <tech.icon
                  className={`w-16 h-16 ${tech.color} relative z-10 transition-transform duration-300 group-hover:transform group-hover:translate-y-[-4px]`}
                />
              </div>
              <motion.span
                className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {tech.name}
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
