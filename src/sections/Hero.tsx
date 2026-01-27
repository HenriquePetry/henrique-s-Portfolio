"use client";

import type { FC } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/test-foto1.jpg";
import Button from "@/components/button";
import LogosSlider from "@/components/LogoSlider/LogosSlider";

import { motion } from "framer-motion";

import { fadeUp, fadeLeft, stagger } from "@/lib/animations";

const Hero: FC = () => {
  return (
    <motion.section
      className="relative h-screen overflow-hidden bg-black"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative grid h-full md:grid-cols-12 z-10">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-7 flex items-center"
        >
          <div className="container max-w-full space-y-8">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {/* Perfil - Mantemos a cor de destaque do seu site (Purple) */}
              <span className="inline-block px-4 py-1 text-sm rounded-full border-4 font-semibold border-purple-500/30 text-purple-400 backdrop-blur">
                Software Engineer
              </span>

              {/* Shopify - Verde (#96bf48) */}
              <span className="inline-block px-4 py-1 text-sm rounded-full border-4 font-semibold border-green-500/30 text-green-400 backdrop-blur">
                Shopify
              </span>

              {/* React - Cian (#61dafb) */}
              <span className="inline-block px-4 py-1 text-sm rounded-full border-4 font-semibold border-cyan-500/30 text-cyan-400 backdrop-blur">
                ReactJS
              </span>

              {/* Angular - Vermelho (#dd0031) */}
              <span className="inline-block px-4 py-1 text-sm rounded-full border-4 font-semibold border-red-500/30 text-red-500 backdrop-blur">
                AngularJS
              </span>
            </motion.div>

            {/* Title - "Front-end" is now the hero, E-commerce is removed */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
            >
              I build{" "}
              <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                high-performance
              </span>
              <br />
              and <span className="text-white/90">scalable front-end</span>{" "}
              architectures.
            </motion.h1>

            {/* Subtitle - Now handles the E-commerce & Branding context */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-400 max-w-xl"
            >
              Shopify Plus & React specialist helping global brands scale
              conversion and performance.
            </motion.p>

            {/* Buttons - More active, less generic */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30 px-8">
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 px-8"
                >
                  Get in touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          variants={fadeLeft}
          className="md:col-span-5 relative h-full"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/30 to-black z-10" />

          {/* Image Animation */}
          <motion.div
            className="relative w-full h-full"
            initial={{
              scale: 1.15,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
          >
            <Image
              src={heroImage}
              alt="Photo of Henrique Petry"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6">
        <LogosSlider />
      </div>
    </motion.section>
  );
};

export default Hero;
