"use client";

import React, { FC, PropsWithChildren } from "react";
import { SignUpFormikValues } from "../type";
import { Formik, FormikHelpers } from "formik";
import axios from "axios";
import signUpFormSchema from "../schema/SignUpFormSchema";
import { toast } from "react-toastify";

type SignUpFormikProps = PropsWithChildren;

const SignUpFormik: FC<SignUpFormikProps> = ({ children }) => {
  const onSubmit = async (
    values: SignUpFormikValues,
    { resetForm }: FormikHelpers<SignUpFormikValues>
  ) => {
    try {
      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/usersign`,
        payload
      );

      resetForm();
      toast("Sign Up Berhasil");
    } catch (error) {
      toast("Sign Up Gagal");
      console.log(error);
    }
  };
  return (
    <Formik<SignUpFormikValues>
      initialValues={{
        username: "",
        email: "",
        password: "",
        showPassword: false,
      }}
      validationSchema={signUpFormSchema}
      onSubmit={onSubmit}
    >
      <>{children}</>
    </Formik>
  );
};

export default SignUpFormik;
