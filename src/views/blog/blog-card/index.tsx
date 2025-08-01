"use client";
import React, { FC } from "react";
import { BlogFormikValues } from "../blog-create/type";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogFormikValues;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="w-full max-w-[350px] bg-white">
      <div className="border-2 rounded-sm p-4 h-[300px] flex flex-col">
        <div className="flex flex-col flex-auto gap-3 ">
          <h2 className=" text-2xl font-semibold text-black truncate">
            {blog.title}
          </h2>

          <p className="text-sm text-[#4c5359] ">{blog.dates}</p>

          <p className="text-sm text-[#4c5359] line-clamp-[8]">
            {blog.description}
          </p>

          <div className="relative mt-auto text-right">
            <Link href="#" className="text-gray-500">
              Detail...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
