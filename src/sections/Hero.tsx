"use client";

import type { FC } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/test-foto1.jpg";
import Button from "@/components/button";

const Hero: FC = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="grid h-full md:grid-cols-12">
        <div className="md:col-span-7 flex items-center">
          <div className="container max-w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              Crafting digital experiencies through code and Insatiable curiosity
            </h1>

            <div className="flex flex-col mt-10 md:flex-row gap-6">
              <Button variant="secundary">My Portfolio</Button>
              <Button variant="text">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative h-full">
          <Image
            src={heroImage}
            alt="Photo of Henrique Petry"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
