"use client";
import { userAuthStore } from "@/store/authStore";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const { user } = userAuthStore();

  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute z-[1] w-full h-full bg-black opacity-[0.39]" />

      <div className="absolute z-[0] w-full h-full top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src="/static/bg-image.webp"
            alt="Jumbotron Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-16">
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px]">
              Selamat Datang di PT Semen Padang
            </h1>

            <h2 className="text-xl text-white text-center mb-[40px]">
              Perusahaan Semen Pertama di Asia Tenggara Sejak 1910
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
