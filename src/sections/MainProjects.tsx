"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

import { fadeUp, stagger } from "@/lib/animations";

const FILTERS = ["All", "Shopify Plus", "Landing Page", "Web App"];

export default function MainProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="py-28 bg-neutral-950 text-white"
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
        >
          My Portfolio
        </motion.h2>

        {/* FILTERS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              variants={fadeUp}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                border transition-all

                ${
                  activeFilter === filter
                    ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/40"
                    : "border-white/20 text-neutral-300 hover:border-purple-500/40 hover:text-white"
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

     <AnimatePresence mode="wait">

  <motion.div
    layout
    className="
      grid grid-cols-1
      sm:grid-cols-1
      lg:grid-cols-4
      xl:grid-cols-4
      gap-6
    "
  >
    {filteredProjects.map((project) => (
      <motion.div
        key={project.title}
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <ProjectCard {...project} />
      </motion.div>
    ))}
  </motion.div>

</AnimatePresence>

      </div>
    </section>
  );
}
