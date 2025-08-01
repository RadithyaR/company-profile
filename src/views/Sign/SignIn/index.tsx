import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import SignInForm from "./components/SignInForm";
import SignInFormik from "./components/SignInFormik";

const SignInView = () => {
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
              Sign In
            </h1>
          </div>
          <SignInFormik>
            <SignInForm />
          </SignInFormik>

          <p className="mt-5 text-sm text-center">
            Belum punya akun{"? "}
            <Link href="/sign-up" className="text-red-500">
              Daftar
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignInView;
