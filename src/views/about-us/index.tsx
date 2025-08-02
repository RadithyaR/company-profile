import Image from "next/image";
import React from "react";
import HistoryView from "./history";
import CultureView from "./culture";
import TeamsAboutView from "./teams";
import Layout from "@/components/layout";

const AboutUsView = () => {
  return (
    <div className="w-full min-h-screen  bg-[url('/static/bg-grafis.png')] bg-repeat-y bg-auto ">
      <div className="w-full h-[150px] relative ">
        <div className="absolute z-[1] w-full h-full bg-black opacity-[0.6]" />

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
          <div className="w-full h-full flex items-center">
            <div>
              <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px] font-sans">
                Tentang Kami
              </h1>
            </div>
          </div>
        </div>

        <HistoryView />
        <TeamsAboutView />
        <CultureView />
      </div>
    </div>
  );
};

export default AboutUsView;
