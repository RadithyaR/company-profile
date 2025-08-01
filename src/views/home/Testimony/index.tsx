import React from "react";
import { testimony } from "./static";

const TestimonyView = () => {
  return (
    <div className="relative z-10 w-full bg-[url('/static/bg-grafis.png')] max-w-auto h-[450px] mx-auto px-[20%] mb-15">
      <div className="w-full h-full flex justify-center ">
        <div>
          <h2 className="text-4xl tracking-[0.5] mt-[80px] text-black uppercase mb-12 text-center font-bold">
            Apa Kata Mereka
          </h2>

          <div className="relative">
            <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-8 ">
              {testimony.map((test, index) => (
                <div
                  key={index}
                  className="shrink-0 w-auto  snap-start bg-local rounded-xl border-2 border-red-300 bg-white p-3"
                >
                  <div className="flex flex-col h-[150px]">
                    <p className="text-gray-600 text-[16px] flex-grow">
                      "{test.message}"
                    </p>

                    <div className="flex justify-between">
                      <div className="mt-1 text-center">
                        <h3 className="font-bold text-lg">- {test.name} -</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyView;
