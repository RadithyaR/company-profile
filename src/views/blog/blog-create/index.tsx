"use client";
import React from "react";
import BlogFormik from "./components/BlogFormik";
import BlogForm from "./components/BlogForm";
import { ToastContainer } from "react-toastify";
import { userAuthStore } from "@/store/authStore";

const BlogCreateView = () => {
  const { user } = userAuthStore();
  return (
    <div className="w-full h-screen bg-[url('/static/bg-grafis.png')] bg-cover bg-center">
      <div className="w-full h-full flex items-center justify-center">
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
