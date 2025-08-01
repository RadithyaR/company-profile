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
            <h2 className="text-4xl tracking-[0.5] text-white uppercase mb-12 text-center font-bold">
              Products
            </h2>

            <div className="grid grid-cols-3 gap-8 w-full">
              <Link
                href="/about-us"
                className="p-16 rounded-lg border border-blue-200 bg-blue-50 flex items-center"
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  Semen Kantong
                </h3>
              </Link>

              <Link
                href="/about-us"
                className="p-16 rounded-lg border border-blue-200 bg-blue-50 flex items-center"
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  Semen Curah
                </h3>
              </Link>

              <Link
                href="/about-us"
                className="p-16 rounded-lg border border-blue-200 bg-blue-50 flex items-center"
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  Non Semen
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHomeView;
