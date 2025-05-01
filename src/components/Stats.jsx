import React from "react";
import { STATS } from "@/constants";

const Stats = () => {
  return (
    <section className="bg-secondary text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            <p className="text-sm font-medium mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
