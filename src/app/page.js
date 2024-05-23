import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import "./globals.css";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/contact";

export const metadata = {
  title: "Nee-Shar",
  description: "Portfolio",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}
