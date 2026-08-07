import Navbar from "../../Components/Navbar";

import ServicesHero from "../../Components/ServicesHero";
import ServicesGrid from "../../Components/ServicesGrid";
import HowWeWork from "../../Components/HowWeWork"
import TechnologyStack from "../../Components/TechnologyStack";
import CTAServices from "../../Components/CTAServices";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <ServicesHero />
      <ServicesGrid /> 
      <HowWeWork/>
      <TechnologyStack/>
      <CTAServices/>
    </main>
  );
}