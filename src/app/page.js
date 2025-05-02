import Hero from "@/components/Hero";
import OurProgram from "@/components/OurProgram";
import Stats from "@/components/Stats";
import Trainers from "@/components/Trainer";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="text-red-700">
      <Hero />
      <Stats/>
      <WhyChoose />
      <OurProgram />
      <Trainers />
    </div>
  );
}
