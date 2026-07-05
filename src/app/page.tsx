import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { CreativeWork } from "@/components/sections/CreativeWork";
import { Hobbies } from "@/components/sections/Hobbies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Testimonials />
      <TechStack />
      <Education />
      <Projects />
      <CreativeWork />
      <Hobbies />
      <Contact />
    </main>
  );
}
