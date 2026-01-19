"use client";

import { FC, useState } from "react";
import logo from "@/assets/icons/logo.svg";
import Button from "@/components/Button";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ["Home", "About", "Portfolio", "Education"];

  return (
    <div className="border-b-[1px] border-white/10 ">
      <div className="max-w-screen-2xl m-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo */}
          <img 
            src={logo.src || logo} 
            alt="Logo" 
            className="h-16 w-auto"
          />

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li 
                    key={item}
                    className="cursor-pointer hover:text-primary transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button variant="outline">
              Contact Me
            </Button>
          </div>

          {/* Mobile - Button + Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <Button variant="outline" className="text-sm px-4 py-2">
              Contact Me
            </Button>

            {/* Hamburger Icon */}
<button
  onClick={toggleMenu}
  className="relative z-50 flex flex-col justify-center gap-1.5 w-8 h-8"
  aria-label="Toggle menu"
>
  <span
    className={`block w-full h-0.5 bg-white transition-all duration-300 ${
      isMenuOpen ? "rotate-45 translate-y-2" : ""
    }`}
  />
  <span
    className={`block w-full h-0.5 bg-white transition-all duration-300 ${
      isMenuOpen ? "opacity-0" : ""
    }`}
  />
  <span
    className={`block w-full h-0.5 bg-white transition-all duration-300 ${
      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
    }`}
  />
</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li 
                  key={item}
                  className="cursor-pointer hover:text-primary transition-colors py-2 border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;