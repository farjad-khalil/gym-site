import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurProgram from "@/components/OurProgram";
import { PricingPlan } from "@/components/Pricing";
import Stats from "@/components/Stats";
import Trainers from "@/components/Trainer";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <WhyChoose />
      <OurProgram />
      <Trainers />
      <PricingPlan />
      <Footer />
    </div>
  );
}
