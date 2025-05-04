import Image from "next/image";
import Button from "./Button";
import { OUR_PROGRAM } from "@/constants";

const OurProgram = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Images */}
        <div className="flex gap-6 w-full lg:w-1/2 justify-center">
          {OUR_PROGRAM.images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Coach ${index + 1}`}
              width={index === 0 ? 200 : 350}
              height={350}
              className={`rounded-xl object-cover  ${
                index === 0 ? "w-[200px] h-[350px]" : "w-[350px] h-[350px]"
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#9E9E9E] text-base md:text-lg mb-1">
            {OUR_PROGRAM.tagline}
          </p>
          <h2 className="text-3xl text-[#424242] md:text-4xl font-extrabold mb-4">
            {OUR_PROGRAM.title}
          </h2>
          <p className="text-[#9E9E9E] text-base md:text-lg leading-relaxed mb-6">
            {OUR_PROGRAM.description}
          </p>
          <Button
            variant="secondary"
            className="px-6 py-2 text-sm md:text-base bg-[#212121]"
          >
            {OUR_PROGRAM.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
