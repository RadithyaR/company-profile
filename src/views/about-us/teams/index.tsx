import React from "react";
import Image from "next/image";

const TeamsAboutView = () => {
  return (
    <div className="w-full h-fit my-10">
      <div className="px-50 pt-10">
        <div className="flex flex-col gap-6 mb-10">
          <h1 className="text-4xl font-bold font-mont leading-3">Team</h1>
          <h2 className="text-3xl font-bold font-mont leading-3">
            Dewan Komisaris
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-row gap-3 items-center  border-b-2 border-red-500">
            <div>
              <div className="flex-col">
                <h2 className="text-lg font-bold font-mont">
                  Mohammad Agus Samsudin
                </h2>
                <p className="text-sm font-medium font-mont">Komisaris Utama</p>
              </div>
            </div>
            <div className="h-[350px] w-[330px]  relative shrink-0">
              <Image
                src="/teams/komisaris-1.webp"
                alt="Mohammad Agus Samsudin"
                fill
                className="object-fit"
              />
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div className="flex flex-row gap-3 items-center border-b-2 border-red-500">
              <div>
                <div className="flex-col">
                  <h2 className="text-lg font-bold font-mont">
                    Werry Darta Taifur
                  </h2>
                  <p className="text-sm font-medium font-mont">Komisaris</p>
                </div>
              </div>
              <div className="h-[350px] w-[250px] relative shrink-0">
                <Image
                  src="/teams/komisaris-2.webp"
                  alt="Werry Darta Taifur"
                  fill
                  className="object-fit"
                />
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center border-b-2 border-red-500">
              <div>
                <div className="flex-col">
                  <h2 className="text-lg font-bold font-mont">Khairul Jasmi</h2>
                  <p className="text-sm font-medium font-mont">Komisaris</p>
                </div>
              </div>
              <div className="h-[350px] w-[350px] relative shrink-0">
                <Image
                  src="/teams/komisaris-3.webp"
                  alt="Khairul Jasmi"
                  fill
                  className="object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsAboutView;
