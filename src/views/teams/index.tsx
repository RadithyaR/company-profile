"use client";
import React, { useCallback, useEffect, useState } from "react";
import { UserValues } from "./type";
import axios from "axios";
import TeamsCard from "./teams-card";
import Image from "next/image";

export interface RandomUserResponse {
  results: UserValues[];
  info: any;
}

const TeamsView = () => {
  const [randUser, setRandUser] = useState<UserValues[]>([]);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await axios.get(`https://randomuser.me/api/?results=15`);

      setRandUser(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

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
              <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px] font-sans cursor-pointer">
                Our Team
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-50  my-10">
        <h2 className="text-4xl font-bold font-mont leading-3">Team</h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-[1440px] h-full mx-auto px-16  ">
        <div className="grid grid-cols-4 gap-10 flex-wrap items-center justify-between py-10">
          {randUser.map((user) => (
            <TeamsCard key={user.login.uuid} card={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsView;
