import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductHomeView = () => {
  return (
    <div className="w-full h-[450px] relative">
      <div className="absolute z-[1] w-full h-full bg-black opacity-[0.39]" />

      <div className="absolute z-[0] w-full h-full top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src="/static/bg-produk.webp"
            alt="Jumbotron Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-16">
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <h2 className="text-4xl tracking-[0.5] text-white uppercase mb-12 text-center font-bold font-mont">
              Products
            </h2>

            <div className="grid grid-cols-2 gap-8 w-full">
              <Link
                href="/product/semen"
                className="group inline-block bg-white"
              >
                <div className="relative w-[250px] h-[300px] border-2  items-center bg-[url('/static/semen.webp')]  bg-cover bg-center">
                  <div className="absolute w-[250px] h-[300px] bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50" />

                  <p className="relative z-10 text-4xl text-white text-shadow-sm flex items-center justify-center h-full font-mont">
                    Semen
                  </p>
                </div>
              </Link>

              <Link href="/product/non-semen" className="group inline-block">
                <div className="relative w-[250px] h-[300px] border-2 items-center z-0 bg-[url('/static/batu-split.webp')]  bg-cover bg-center">
                  <div className="absolute w-[250px] h-[300px] bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                  <p className="relative z-10 text-4xl text-white flex items-center justify-center h-full font-mont ">
                    Non Semen
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHomeView;
