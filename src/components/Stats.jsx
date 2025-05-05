import React from "react";
import { STATS } from "@/constants";

const Stats = () => {
  return (
    <section className="bg-[#212121] text-white py-10 px-4  w-full block mx-auto">
      <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto text-center sm:grid-cols-4">
        {STATS.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            <p className="mt-2 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
