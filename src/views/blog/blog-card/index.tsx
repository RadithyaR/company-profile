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
      <div className="border-1 border-red-400 rounded-lg p-4 h-[300px] flex flex-col">
        <div className="flex flex-col flex-auto gap-3 ">
          <h2 className=" text-2xl font-semibold text-black truncate font-mont">
            {blog.title}
          </h2>

          <p className="text-sm text-[#4c5359] font-mont">{blog.dates}</p>

          <p className="text-sm text-[#4c5359] line-clamp-[8] font-mont">
            {blog.description}
          </p>

          <div className="relative mt-auto text-right font-mont">
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
