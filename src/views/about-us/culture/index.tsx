import Image from "next/image";
import React from "react";
import { cultureData } from "./data";

const CultureView = () => {
  return (
    <div className="w-full h-fit my-10">
      <div className="px-50 py-10">
        <div className="flex flex-row items-center gap-3 mb-10">
          <h1 className="text-4xl font-bold font-mont leading-3">
            Budaya Perusahaan
          </h1>

          <div className="h-[70px] w-[120px] relative shrink-0">
            <Image
              src="/culture/akhlak.webp"
              alt="akhlak"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {cultureData.map((culture) => (
            <div key={culture.id} className="flex flex-row gap-3 items-center">
              <div className="h-[50px] w-[100px] relative shrink-0">
                <Image
                  src={culture.image}
                  alt={culture.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex-col">
                  <h2 className="text-lg font-bold font-mont">
                    {culture.name}
                  </h2>
                  <p className="text-sm font-medium font-mont">
                    {culture.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CultureView;
