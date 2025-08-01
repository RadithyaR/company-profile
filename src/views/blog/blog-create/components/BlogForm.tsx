"use client";

import { useFormikContext } from "formik";
import React from "react";
import { BlogFormikValues } from "../type";
import { userAuthStore } from "@/store/authStore";

const BlogForm = () => {
  const { user } = userAuthStore();

  const { values, errors, touched, handleSubmit, getFieldProps } =
    useFormikContext<BlogFormikValues>();
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <input
          {...getFieldProps("title")}
          placeholder="title"
          type="text"
          className={`w-full p-[18px_24px] rounded-sm ${
            errors.title && touched.title
              ? "shadow-[0px_0px_0px_1px_#C73E1D]"
              : "shadow-[0px_0px_0px_1px_#E3E3E3]"
          }`}
        />
        {errors.title && touched.title && (
          <p className="text-sm text-red-600 mt-2">{errors.title}</p>
        )}
      </div>

      <div className="w-full">
        <textarea
          {...getFieldProps("description")}
          placeholder="email"
          className={`w-full p-[18px_24px] rounded-sm ${
            errors.description && touched.description
              ? "shadow-[0px_0px_0px_1px_#C73E1D]"
              : "shadow-[0px_0px_0px_1px_#E3E3E3]"
          } `}
        />
        {errors.description && touched.description && (
          <p className="text-sm text-red-600 mt-2">{errors.description}</p>
        )}
      </div>

      <button
        type="submit"
        className="p-[8px_40px] bg-red-500 rounded-sm cursor-pointer"
        onClick={() => handleSubmit()}
      >
        <p className="p-0 font-mono text-base text-white">Upload</p>
      </button>
    </div>
  );
};

export default BlogForm;
