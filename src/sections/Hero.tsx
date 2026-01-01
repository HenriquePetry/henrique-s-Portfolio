import type { FC } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/test-foto1.png";
import Button from "@/components/button";
const Hero: FC = () => {
  return (
    <section>
      <div className="container !max-w-full">
        <h1 className="text-5xl mt-40">Crafting digital experiencies through code and Insatiable curiosity</h1>

        <Button variant="secundary" iconAfter = {<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>}>
          <span>My Portfolio</span>
         
        </Button>

        <Button variant="text">Let&apos;s Talk</Button>
      </div>

      <div>
        <Image src={heroImage} alt="Photo of Henrique Petry sit in CWI Software Office, the table has a cup of coofee and small plants, He's smiling." />
      </div>
    </section>
  );
};

export default Hero;
