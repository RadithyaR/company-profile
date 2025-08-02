import Link from "next/link";
import React from "react";

const OverView = () => {
  return (
    <div className="relative z-10 w-full bg-[url('/static/bg-grafis.png')] max-w-[1440px] h-[450px] mx-auto px-16">
      <div className="w-full h-full flex items-center justify-center">
        <div>
          <h2 className="text-2xl tracking-[0.5] text-black uppercase mb-4 text-center font-bold font-mont">
            Meaning Semen Padang
          </h2>
          <h3 className="text-4xl tracking-[0.5] text-red-600 uppercase mb-12 text-center font-bold font-mont">
            “Giving the Best to Build a Better Life”
          </h3>

          <div className="grid grid-cols-3 gap-8 w-full">
            <Link
              href="/about-us"
              className="p-6 rounded-lg border border-red-200 bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 font-mont">
                Sejarah Perusahaan
              </h3>
              <p className="text-gray-600 mb-4 flex-grow font-mont">
                Telusuri perjalanan panjang dan pencapaian kami melalui sejarah
                perusahaan.
              </p>
              <div className="text-red-600 font-medium hover:text-red-800 transition-colors font-mont">
                Pelajari Lebih Lanjut →
              </div>
            </Link>

            <Link
              href="/our-teams"
              className="p-6 rounded-lg border border-red-200 bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 font-mont">
                Tim
              </h3>
              <p className="text-gray-600 mb-4 flex-grow font-mont">
                Kenali tim profesional di balik kesuksesan dan inovasi kami.
              </p>
              <div className="text-red-600 font-medium hover:text-red-800 transition-colors font-mont">
                Pelajari Lebih Lanjut →
              </div>
            </Link>

            <Link
              href="/about-us"
              className="p-6 rounded-lg border border-red-200 bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 font-mont">
                Budaya Perusahaan
              </h3>
              <p className="text-gray-600 mb-4 flex-grow font-mont">
                Temukan nilai, prinsip, dan budaya kerja yang membentuk
                identitas kami.
              </p>
              <div className="text-red-600 font-medium hover:text-red-800 transition-colors font-mont">
                Pelajari Lebih Lanjut →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
