import AbouteMe from "./components/AbouteMe";
import Education from "./components/Education";
import Hero from "./components/HeroSection";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
     <div className="w-full bg-white dark:bg-c2">
      <Hero />
      <AbouteMe/>
      <Education/>
      <TechStack/>
    </div>
  );
}