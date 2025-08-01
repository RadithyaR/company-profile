"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import BlogCard from "./blog-card";
import axios from "axios";
import { BlogFormikValues } from "./blog-create/type";
import { userAuthStore } from "@/store/authStore";

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
    <div className="w-full h-screen bg-[url('/static/bg-grafis.png')] bg-cover bg-center">
      <div className="flex flex-col items-center w-full max-w-[1440px] h-full mx-auto px-16  ">
        {user.username ? (
          <Link href="/blog/create-blog">
            <button className="focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-5  cursor-pointer">
              Create Blog
            </button>
          </Link>
        ) : (
          ""
        )}

        {blogs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Blog Kosong</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-10 flex-wrap items-center justify-between mt-10">
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
