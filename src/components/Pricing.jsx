"use client"

import { useState } from "react"
import { CircleCheckBig } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PRICING_PLANS } from "@/constants"

export function PricingPlan() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <section className="flex justify-center w-full py-12 md:py-16 lg:py-20">
      <div className="container px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-lg font-medium text-muted-foreground">Pricing Plan</h3>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">JOIN TODAY</h2>
          </div>
          <div className="flex items-center p-1 space-x-2 rounded-full bg-muted">
            <Button
              variant="ghost"
              size="sm"
              className={cn("rounded-full px-4 ", billingCycle === "monthly" && "bg-[#212121] hover:bg-[#212121] hover:text-white text-white hover:cursor-pointer shadow-sm")}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn("rounded-full px-4", billingCycle === "yearly" && "bg-[#212121] hover:bg-[#212121] text-white hover:text-white hover:cursor-pointer shadow-sm")}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col rounded-lg border shadow-sm overflow-hidden max-w-[400px]",
                plan.featured ? "bg-[#212121] text-white border-[#212121]" : "bg-card text-card-foreground border-border",
              )}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium">{plan.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold">
                    {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className={cn("ml-1 text-sm", plan.featured ? "text-gray-300" : "text-muted-foreground")}>
                    / {billingCycle === "monthly" ? "Month" : "Year"}
                  </span>
                </div>
                <p className={cn("mt-3 text-sm", plan.featured ? "text-gray-300" : "text-muted-foreground")}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CircleCheckBig
                        className={cn("mr-2 h-5 w-5 shrink-0", plan.featured ? "text-white" : "text-muted-foreground")}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This will push the button to the bottom */}
              <div className="p-6 pt-0 mt-auto">
                <Button
                  className={cn(
                    "w-full",
                    plan.featured ? "bg-white text-[#111] hover:bg-gray-100" : "bg-[#212121] text-white hover:bg-[#222]",
                  )}
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


