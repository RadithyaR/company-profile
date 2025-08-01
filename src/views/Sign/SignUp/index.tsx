import Link from "next/link";
import React from "react";
import SignUpFormik from "./components/SignUpFormik";
import SignUpForm from "./components/SignUpForm";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

const SignUpView = () => {
  return (
    <div className="w-full h-screen bg-[url('/static/bg-sign.webp')] bg-cover bg-center">
      <div className="absolute z-[1] w-full h-full bg-black opacity-25" />
      <div className="w-full h-full flex items-center justify-center">
        <div className="z-10 w-full max-w-[400px] bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <Link href="/">
              <Image
                src="/static/logo-only.png"
                alt="Logo"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
                className="mb-4"
              />
            </Link>

            <h1 className="text-2xl font-bold text-center mb-8 tracking-[0.5px]">
              Sign Up
            </h1>
          </div>

          <SignUpFormik>
            <SignUpForm />
          </SignUpFormik>

          <p className="mt-5 text-sm text-center">
            Sudah punya akun{"? "}
            <Link href="/sign-in" className="text-red-500">
              Masuk
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUpView;
