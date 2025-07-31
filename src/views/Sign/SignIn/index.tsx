import Link from "next/link";
import React from "react";

const SignInView = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card Container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Card Header */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <Link href="/sign-up" className="text-blue-600 hover:underline ml-1">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
