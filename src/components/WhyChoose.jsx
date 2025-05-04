import React from "react";
import Image from "next/image";
import { WHY_CHOOSE_ITEMS, WHY_CHOOSE_IMAGES } from "@/constants";

const WhyChoose = () => {
  return (
    <section className=" bg-white text-gray-800 ">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>

        {/* Layout: Left (icons) + Right (images) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN (features) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-20">
              {WHY_CHOOSE_ITEMS.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="min-w-[48px] min-h-[48px] bg-gray-800 rounded-full flex items-center justify-center transition-all hover:scale-110 ">
                    <Image src={item.icon} alt="icon" width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-gray-500 text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (images) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <Image
                src={WHY_CHOOSE_IMAGES[0]}
                alt="choose1"
                width={300}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src={WHY_CHOOSE_IMAGES[1]}
                alt="choose2"
                width={300}
                height={200}
                className="rounded-xl object-contain w-full h-auto"
              />
            </div>
            <div>
              <Image
                src={WHY_CHOOSE_IMAGES[2]}
                alt="choose3"
                width={300}
                height={420}
                className="rounded-xl  object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
