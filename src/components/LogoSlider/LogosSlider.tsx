"use client";
import Image from "next/image";

import ABLogo from "@/assets/icons/brands/ab.svg";
import ArezzoLogo from "@/assets/icons/brands/arezzo.svg";
import MindrumLogo from "@/assets/icons/brands/mindrum.svg";
import SchutzLogo from "@/assets/icons/brands/schutz.svg";
import KleinLogo from "@/assets/icons/brands/klein.svg";
import GOLDLogo from "@/assets/icons/brands/GOLD.svg";
import CDLLogo from "@/assets/icons/brands/CDL.svg";
import ParanhanaLogo from "@/assets/icons/brands/paranhana.svg";
import TheFoolsLogo from "@/assets/icons/brands/thefools.svg";
import ProjeFarmaLogo from "@/assets/icons/brands/PROJEFARMA.svg";
import InoveLogo from "@/assets/icons/brands/inove.svg";

import "./LogosSlider.css";

const logos = [
  SchutzLogo, ABLogo, ArezzoLogo, GOLDLogo, TheFoolsLogo, ParanhanaLogo,
  ProjeFarmaLogo, InoveLogo, MindrumLogo, KleinLogo, CDLLogo
];

export default function LogosSlider() {
  return (
    <div className="logos-container">
      <div className="logos-track">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <Image
              src={logo.src}
              alt={`Logo ${index}`}
              height={0}
              width={110}
              className={`object-contain ${
                logo.src.includes("klein")
                  ? "w-[60px] h-auto"
                  : logo.src.includes("thefools")
                  ? "w-[80px] h-auto"
                  : "w-[110px] h-auto"
              }`}
            />
          </div>
        ))}
        {/** duplicamos novamente na visualização */}
        {logos.map((logo, index) => (
          <div key={`dup-${index}`} className="logo-item">
            <Image
              src={logo.src}
              alt={`Logo ${index}`}
              width={logo.src.includes("klein") ? 60 : 110}
              height={0}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
