import React from "react";

import Hero from "@/components/shop/hero/Hero";
import Products from "@/components/shop/products/Products";
import Advantages from "@/components/feature/advantages/Advantages";

const About = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Hero />
      <Products />
      <Advantages />
    </section>
  );
};

export default About;
