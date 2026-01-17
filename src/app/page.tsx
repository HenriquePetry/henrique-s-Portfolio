import { AboutMe } from "@/sections/AboutMe";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import MainProjects from "@/sections/MainProjects";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <MainProjects />
    </>
  );
}
