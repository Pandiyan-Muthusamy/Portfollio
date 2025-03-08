import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-commerce Platform",
    description:
      "A fully functional e-commerce website with cart and payment integration.",
    tech: ["Next.js", "MongoDB", "Stripe API"],
  },
  {
    title: "Guess the Number Game",
    description: "A fun number guessing game built with React.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col items-center p-6">
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-blue-50 text-black px-3 py-1 rounded-full text-xs sm:text-xs md:text-sm"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
