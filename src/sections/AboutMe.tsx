"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { fadeUp, fadeLeft, stagger } from "@/lib/animations";

/* =======================
   DATA
======================= */

const experiences = [
  {
    company: "AZZAS 2154",
    role: "Senior IT Analyst | Front-End Developer",
    period: "Jun 2025 — Present",
    logo: "/assets/logos/AZZAS.PNG",
  },
  {
    company: "Arezzo&Co",
    role: "Mid-Level IT Analyst | Front-End Developer",
    period: "Apr 2023 — Jul 2025",
    logo: "/assets/logos/ArezzoCo.png",
  },
  {
    company: "Curadoria Digital",
    role: "Junior Front-End Developer",
    period: "Apr 2021 — Mar 2023",
    logo: "/assets/logos/curadoria.png",
  },
  {
    company: "The HEINEKEN Company",
    role: "Apprentice",
    period: "Sep 2018 — Nov 2019",
    logo: "/assets/logos/heineken.png",
  },
];

const skills = [
  { name: "React", logo: "/assets/skills/react.svg" },
  { name: "Next.js", logo: "/assets/skills/nextdotjs.svg" },
  { name: "JavaScript", logo: "/assets/skills/javascript.svg" },
  { name: "Shopify Plus", logo: "/assets/skills/shopify.svg" },
  { name: "GA4", logo: "/assets/skills/googleanalytics.svg" },
  { name: "GTM", logo: "/assets/skills/googletagmanager.svg" },
];

/* =======================
   CARD
======================= */

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`
        relative p-6 rounded-2xl
        bg-neutral-900/70
        border border-white/10
        backdrop-blur-xl
        shadow-lg shadow-black/40
        hover:border-purple-500/40
        hover:shadow-purple-500/10
        transition-all duration-300
        h-full flex flex-col
        ${className}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

      <h4 className="text-xl font-semibold mb-6 tracking-wide">{title}</h4>

      {children}
    </motion.div>
  );
}

/* =======================
   COMPONENT
======================= */

export function AboutMe() {
  return (
    <motion.section
      className="w-full bg-neutral-950 text-white py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* =======================
            LEFT — ABOUT
        ======================= */}

        <motion.div variants={fadeUp} className="flex flex-col gap-6 max-w-2xl">
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-neutral-300 leading-relaxed text-base md:text-lg"
          >
            I'm a{" "}
            <span className="text-white font-medium">
              Front-End Developer based in Brazil
            </span>{" "}
            with <span className="text-purple-400 font-semibold">5+ years</span>{" "}
            of experience building high-performance web applications for global
            clients.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-neutral-300 leading-relaxed text-base md:text-lg"
          >
            After <span className="text-white font-medium">2 years</span> at a
            digital agency serving clients across Brazil and{" "}
            <span className="text-white font-semibold">Australia</span>, I
            transitioned to working with a{" "}
            <span className="text-amber-400 font-semibold">
              US-based company
            </span>
            , where I've spent the last{" "}
            <span className="text-white font-medium">3 years</span> developing
            scalable solutions across e-commerce and web platforms.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-neutral-300 leading-relaxed text-base md:text-lg mt-4"
          >
            I specialize in{" "}
            <span className="text-cyan-400 font-semibold">React</span>,{" "}
            <span className="text-white bg-white px-1.5 py-0.5 rounded font-semibold">
              Next.js
            </span>
            , and modern web technologies, with a strong focus on{" "}
            <span className="text-purple-400 font-medium">
              performance optimization
            </span>
            , <span className="text-purple-400 font-medium">SEO</span>,{" "}
            <span className="text-purple-400 font-medium">analytics</span>, and{" "}
            <span className="text-purple-400 font-medium">user experience</span>
            .
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-neutral-300 leading-relaxed text-base md:text-lg mt-4"
          >
            My work centers on creating digital products that deliver{" "}
            <span className="text-white font-medium">measurable impact</span>
            —whether it's faster load times, improved user engagement, or
            scalable architecture that supports business growth.
          </motion.p>

          {/* PHOTO */}
          <motion.div
            variants={fadeUp}
            className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/10 mt-8"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative w-full h-full border border-white/10 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/1000478769.jpg"
                alt="Henrique Petry portrait"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition duration-700"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* =======================
            RIGHT — GRID
        ======================= */}

        <motion.div
          variants={fadeLeft}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr"
        >
          {/* EXPERIENCE */}
          <Card title="Experience" className="lg:row-span-2">
            <div className="relative flex flex-col gap-6 pl-6">
              {/* Timeline */}
              <div className="absolute left-2 top-0 bottom-0 w-px bg-purple-500/30" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative flex gap-4"
                >
                  {/* Dot */}
                  <div className="absolute -left-[30px] top-4 w-3 h-3 rounded-full bg-purple-500 shadow-md shadow-purple-500/50" />

                  {/* Logo */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-semibold">{exp.company}</p>

                    <p className="text-neutral-400 text-sm">{exp.role}</p>

                    <p className="text-purple-400 text-xs mt-1">{exp.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* EDUCATION */}
          <Card title="Education">
            <ul className="space-y-5 text-sm">
              <li>
                <p className="font-semibold">Systems Analysis & Development</p>

                <p className="text-neutral-400">Universidade XYZ</p>

                <p className="text-purple-400 text-xs">2018 — 2021</p>
              </li>

              <li>
                <p className="font-semibold">Front-End Specialization</p>

                <p className="text-neutral-400">
                  Online Courses & Certifications
                </p>

                <p className="text-purple-400 text-xs">Ongoing</p>
              </li>
            </ul>
          </Card>

          {/* LANGUAGES */}
          <Card title="Languages">
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Portuguese</span>
                <span className="text-purple-400">Native</span>
              </li>

              <li className="flex justify-between">
                <span>English</span>
                <span className="text-purple-400">Advanced</span>
              </li>

              <li className="flex justify-between">
                <span>Spanish</span>
                <span className="text-purple-400">Basic</span>
              </li>
            </ul>
          </Card>

          {/* SKILLS */}
          <Card title="Skills" className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 hover:bg-purple-500/10 transition"
                >
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      fill
                      className="invert brightness-0"
                    />
                  </div>

                  <span className="text-neutral-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* CONTACT */}
          <Card title="Contact" className="lg:col-span-2">
            <p className="text-neutral-400 mb-4">
              Let's build something great together.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
              <li className="hover:text-purple-400 transition">
                📧 henrique@email.com
              </li>

              <li className="hover:text-purple-400 transition">
                🔗 linkedin.com/in/henriquepetry
              </li>

              <li className="hover:text-purple-400 transition">
                💻 github.com/henriquepetry
              </li>

              <li className="hover:text-purple-400 transition">
                📱 +55 11 99999-9999
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
