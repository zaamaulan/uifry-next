import { Advantage } from "@/components/organisms/advantage";
import { CTA } from "@/components/organisms/cta";
import { FAQ } from "@/components/organisms/faq";
import { Feature } from "@/components/organisms/feature";
import { Hero } from "@/components/organisms/hero";
import { Testimonial } from "@/components/organisms/testimonial";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-y-20 px-4">
      <Hero />
      <Feature />
      <Advantage />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LandingPage;
