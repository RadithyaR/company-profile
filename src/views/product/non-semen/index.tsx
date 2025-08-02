import React from "react";
import { nonSemenData } from "../static/non-semen/data";
import Image from "next/image";
import Link from "next/link";

const NonSemenView = () => {
  return (
    <div className="w-full min-h-screen  bg-[url('/static/bg-grafis.png')] bg-repeat-y bg-auto ">
      <div className="w-full h-[150px] relative">
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

        <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto  px-16">
          <div className="w-full h-full flex items-center">
            <div>
              <Link href="/product">
                <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px] font-sans">
                  Produk
                </h1>
              </Link>

              <h2 className="text-xl text-white text-center font-sans">
                Non Semen
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 px-60">
        {nonSemenData.map((semen) => (
          <div key={semen.id} className="w-full flex flex-col p-4 gap-5">
            <h2 className="text-2xl leading-[24px] font-bold text-black uppercase font-mont">
              {semen.name}
            </h2>

            <div className="flex flex-row gap-10 items-center justify-between">
              <div className="w-[350px] h-[200px] shrink-0 relative overflow-hidden">
                <Image
                  src={semen.image}
                  alt="semen Image"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xl font-mont">Tipe: {semen.type}</p>
                <p className="text-sm font-mont">{semen.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonSemenView;
