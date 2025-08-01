"use client";
import { Formik, FormikHelpers } from "formik";
import React, { FC, PropsWithChildren } from "react";
import { BlogFormikValues } from "../type";
import { SignInFormikValues } from "@/views/Sign/SignIn/type";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import BlogFormSchema from "../Schema/BlogFormSchema";

type BlogFormikProps = PropsWithChildren & { username: string };

const BlogFormik: FC<BlogFormikProps> = ({ children, username }) => {
  const router = useRouter();

  const onSubmit = async (
    values: BlogFormikValues,
    { resetForm }: FormikHelpers<BlogFormikValues>
  ) => {
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const formattedDate = `${day}/${month}/${year}`;

      const payload = {
        title: values.title,
        author: username,
        dates: formattedDate,
        description: values.description,
      };
      if (username === "") {
        toast("Login Terlebih Dahulu", {
          onClose: () => {
            resetForm();
            router.push("/sign-in");
          },
        });

        return;
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/blogs`,
        payload
      );

      toast("Blog Berhasil Dibuat", {
        onClose: () => {
          resetForm();
          router.push("/blog");
        },
      });
    } catch (error) {
      toast("Blog Gagal Dibuat");
      console.log(error);
    }
  };
  return (
    <Formik<BlogFormikValues>
      initialValues={{
        title: "",
        author: "",
        description: "",
        dates: "",
      }}
      validationSchema={BlogFormSchema}
      onSubmit={onSubmit}
    >
      <>{children}</>
    </Formik>
  );
};

export default BlogFormik;
