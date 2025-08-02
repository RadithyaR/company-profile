import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductView = () => {
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

        <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-16">
          <div className="w-full h-full flex items-center">
            <div>
              <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px] font-sans">
                Produk
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full max-w-[1440px] h-fit mx-auto py-10 gap-6 ">
        <Link href="/product/semen" className="bg-white">
          <div className="w-[250px] h-[300px] border-2  items-center bg-[url('/static/semen.webp')]  bg-cover bg-center">
            <div className="absolute w-[250px] h-[300px] bg-black opacity-30" />

            <p className="relative z-10 text-4xl text-white flex items-center justify-center h-full font-mont">
              Semen
            </p>
          </div>
        </Link>

        <Link href="/product/non-semen">
          <div className="w-[250px] h-[300px] border-2 items-center z-0 bg-[url('/static/batu-split.webp')]  bg-cover bg-center">
            <div className="absolute w-[250px] h-[300px] bg-black opacity-30" />
            <p className="relative z-10 text-4xl text-white flex items-center justify-center h-full font-mont">
              Non Semen
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductView;
