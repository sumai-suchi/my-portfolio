import ExpertiseSection from "@/Components/ExpertiseSection";
import ImmersiveFooter from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TechnicalPhilosophy from "@/Components/PhilosophyEntry";
import ProjectShowcase from "@/Components/ProjectShowCase";
import TechStack from "@/Components/TechStack";
import { Expand } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Hero></Hero>
      <TechnicalPhilosophy></TechnicalPhilosophy>
      <TechStack></TechStack>
      <ProjectShowcase></ProjectShowcase>
      <ExpertiseSection></ExpertiseSection>
    
    </div>
  );
}
