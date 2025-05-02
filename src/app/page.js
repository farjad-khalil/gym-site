import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="text-red-700">
      <Hero />
      <Stats/>
      <WhyChoose />
    </div>
  );
}
