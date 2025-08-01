import Link from "next/link";
import React from "react";

const OverView = () => {
  return (
    <div className="relative z-10 w-full bg-[url('/static/bg-grafis.png')] max-w-[1440px] h-[450px] mx-auto px-16">
      <div className="w-full h-full flex items-center justify-center">
        <div>
          <h2 className="text-2xl tracking-[0.5] text-black uppercase mb-4 text-center font-bold">
            Meaning Semen Padang
          </h2>
          <h3 className="text-4xl tracking-[0.5] text-red-600 uppercase mb-12 text-center font-bold">
            “Giving the Best to Build a Better Life”
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 - History */}
            <Link
              href="/about-us"
              className="p-6 rounded-lg border border-blue-200 bg-blue-50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                History
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Discover our company's journey from humble beginnings to
                industry leadership.
              </p>
              <div className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </div>
            </Link>

            {/* Card 2 - Teams */}
            <Link
              href="/about-us"
              className="p-6 rounded-lg border border-green-200 bg-green-50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Teams
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Meet the talented individuals who drive our success every day.
              </p>
              <div className="text-green-600 font-medium hover:text-green-800 transition-colors">
                Learn more →
              </div>
            </Link>

            {/* Card 3 - Culture */}
            <Link
              href="/about-us"
              className="p-6 rounded-lg border border-purple-200 bg-purple-50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Culture
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Learn about the values that shape our workplace and community.
              </p>
              <div className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                Learn more →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
