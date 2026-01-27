// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { AboutMe } from "@/sections/AboutMe";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import MainProjects from "@/sections/MainProjects";
import Comment from "@/sections/Comment";
import SliderLogos from "@/sections/SliderLogos";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Animação suave de entrada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero />
        <AboutMe />
        <MainProjects />
        <Comment />
      </motion.div>
    </>
  );
}