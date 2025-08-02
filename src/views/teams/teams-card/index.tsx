"use client";
import React, { FC } from "react";
import { UserValues } from "../type";
interface TeamProps {
  card: UserValues;
}

const TeamsCard: FC<TeamProps> = ({ card }) => {
  return (
    <div className="w-full max-w-[300px] bg-white">
      <div className="border-1 border-red-400 rounded-lg p-4 w-full h-[300px] flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-5 items-center ">
          <div className="h-[128px] w-[128px]">
            <img
              src={card.picture.large}
              alt={card.name.first}
              className="object-cover"
            />
          </div>

          <h2 className=" text-2xl font-semibold text-black truncate font-mont">
            {card.name.first} {card.name.last}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
