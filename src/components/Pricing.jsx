import React from "react";
import { PRICING_PLANS } from "@/constants";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";

const Pricing = () => {
  return (
    <section className="w-full  bg-white py-20">
      <div className="max-w-[1440px] mx-auto text-center px-6 md:px-16 py-10">
        {/* Header */}
        <p className="text-gray-400 text-base mb-2">Pricing Plan</p>
        <h2 className="text-3xl md:text-5xl text-black font-extrabold mb-12">JOIN TODAY</h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-10 ">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`w-full md:w-1/3 rounded-xl p-8 flex flex-col justify-between ${
                plan.highlight ? "bg-black text-white" : "bg-white text-gray-800 shadow-2xl "
              }`}
            >
              <div>
                <h4 className="text-sm font-semibold mb-2">{plan.title}</h4>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{plan.price} <span className="text-base font-medium">/ {plan.period}</span></div>
                <p className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-500"} mb-6`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-6 ">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className={`text-xl ${plan.highlight ? "text-white" : "text-gray-600"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.highlight ? "primary" : "secondary"}
                className={`w-full py-3 text-sm md:text-base mt-auto ${
                  plan.highlight ? "bg-white text-black hover:bg-gray300" : ""
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
