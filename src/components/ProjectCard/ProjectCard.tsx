"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  url,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        relative h-full rounded-2xl
        bg-neutral-900/70
        border border-white/10
        backdrop-blur-xl
        shadow-lg shadow-black/40
        hover:border-purple-500/40
        hover:shadow-purple-500/20
        transition-all duration-300
        overflow-hidden
        group
        flex flex-col
      "
    >
      {/* Image */}
      <div className="relative w-full aspect-[8/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover scale-105 group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">

        {/* Text */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-sm text-neutral-400 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags (limit height) */}
        <div className="flex flex-wrap gap-2 mb-4 max-h-[64px] overflow-hidden">
          {tags?.slice(0, 10).map((tag) => (
            <span
              key={tag}
              className="
                px-3 py-1 text-xs rounded-full
                bg-purple-500/10
                text-purple-300
                border border-purple-500/20
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        {url && (
          <a
            href={url}
            target="_blank"
            className="
              mt-auto
              inline-flex items-center justify-between
              px-4 py-3 rounded-lg
              border border-purple-500/30
              text-sm font-medium
              text-purple-300
              hover:bg-purple-500/10
              hover:text-white
              transition
            "
          >
            View Project
            <span>→</span>
          </a>
        )}

      </div>
    </motion.div>
  );
}
