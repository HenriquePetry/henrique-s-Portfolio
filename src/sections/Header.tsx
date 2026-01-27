"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/assets/icons/logo.svg";
import Button from "@/components/Button";

const navItems = ["Home", "About", "Portfolio", "Education"];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 px-4"
    >
      {/* Glass Container */}
      <div
        className="
          max-w-screen-2xl mx-auto
          rounded-2xl
          bg-neutral-900/70
          backdrop-blur-xl
          border border-white/10
          shadow-xl shadow-black/40
        "
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo.src || logo} alt="Logo" className="h-16 w-auto" />

            <span className="text-lg font-semibold tracking-wide">
              Henrique Petry
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <nav>
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className="
                      relative cursor-pointer text-sm font-medium
                      text-neutral-300
                      hover:text-white
                      transition
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-0 after:bg-purple-500
                      after:transition-all
                      hover:after:w-full
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            <Button variant="outline">Download Resume</Button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
            <Button variant="outline" className="text-sm px-4 py-2">
              Contact
            </Button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 w-8 h-8 flex flex-col justify-center gap-1.5"
            >
              <span
                className={`
                  block h-0.5 w-full bg-white transition
                  ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
                `}
              />
              <span
                className={`
                  block h-0.5 w-full bg-white transition
                  ${isMenuOpen ? "opacity-0" : ""}
                `}
              />
              <span
                className={`
                  block h-0.5 w-full bg-white transition
                  ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
                `}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                overflow-hidden
                border-t border-white/10
              "
            >
              <nav className="px-6 py-6">
                <ul className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <li
                      key={item}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        cursor-pointer text-neutral-300
                        hover:text-white
                        transition
                        text-sm
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
