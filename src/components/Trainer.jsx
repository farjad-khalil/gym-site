import React from "react";
import Image from "next/image";
import { TRAINERS } from "@/constants";

const Trainers = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl text-black md:text-4xl font-extrabold mb-4">{TRAINERS.title}</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            {TRAINERS.description}
          </p>
        </div>

        {/* Images Grid */}
        <div className="flex flex-wrap justify-center gap-4">
            {TRAINERS.images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={`Trainer ${index + 1}`}
              width={img.width}
              height={288}
              className="rounded-xl object-cover h-[288px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
