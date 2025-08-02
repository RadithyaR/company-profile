"use client";
import React from "react";
import BlogFormik from "./components/BlogFormik";
import BlogForm from "./components/BlogForm";
import { ToastContainer } from "react-toastify";
import { userAuthStore } from "@/store/authStore";
import Link from "next/link";
import Image from "next/image";

const BlogCreateView = () => {
  const { user } = userAuthStore();
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
              <Link href="/blog" className="cursor-pointer">
                <h1 className="text-[42px] tracking-[0.5] text-white uppercase mb-[4px] font-sans">
                  Blog
                </h1>
              </Link>
              <h2 className="text-xl text-white text-center font-sans">
                Create Blog
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex justify-center mt-12">
        <div className="z-10 w-full max-w-[400px] bg-white rounded-lg shadow-lg p-6">
          <BlogFormik username={user?.username || ""}>
            <BlogForm />
          </BlogFormik>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BlogCreateView;
