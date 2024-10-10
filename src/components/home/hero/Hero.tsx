"use client";
import React from "react";

import heroImg from "@/assets/home-1/home-decoration.png";
import { useTranslations } from "use-intl";
const Hero = () => {
  const t = useTranslations("HomePage.section1");

  return (
    <section
      className="min-h-[45rem] text-center md:text-left max-w-screen-2xl mx-auto bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="banner md:max-w-[40rem] grid gap-5 bg-[#FFF3E3] p-[4rem_3rem] absolute inset-[0_0_auto_0] md:inset-[auto_5%_8%_auto]">
        <p className="font-medium">{t("p1")}</p>
        <h3 className="text-3xl md:text-[3.5rem] text-[#B78E2E] font-semibold m:w-[12ch] leading-[1]">
          {t("h1")}
        </h3>
        <p>{t("p2")}</p>
        <button className="mx-auto md:mx-0 w-fit py-4 px-7 bg-[#B78E2E] text-white text-sm font-bold">
          {t("btn")}
        </button>
      </div>
    </section>
  );
};

export default Hero;
