"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import BlogCard from "./blog-card";
import axios from "axios";
import { BlogFormikValues } from "./blog-create/type";
import { userAuthStore } from "@/store/authStore";
import Image from "next/image";

const BlogView = () => {
  const { user } = userAuthStore();

  const [blogs, setBlogs] = useState<BlogFormikValues[]>([]);

  const fetchBlogs = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/blogs`
      );

      setBlogs(res.data);
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
                Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-[1440px] h-full mx-auto px-16  ">
        {user.username ? (
          <Link href="/blog/create-blog">
            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5  cursor-pointer">
              Create Blog
            </button>
          </Link>
        ) : (
          <p className="text-sm font-mono font-medium mt-5">
            Menambah Blog?{" "}
            <Link href="/sign-in" className="cursor-pointer text-blue-700">
              Log In
            </Link>
          </p>
        )}

        {blogs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Blog Kosong</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10 flex-wrap items-center justify-between py-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogView;
