"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signIn("credentials", {
        ...formData,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="pt-18 min-h-screen bg-gradient-to-br from-indigo-200/50 via-purple-200/50 to-cyan-200/50">
        <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className="text-center mb-8"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex justify-center items-center">
                <img
                  alt="Redwans Method"
                  loading="lazy"
                  width="200"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://redwansmethod.com/_next/image?url=%2Flogo.png&w=256&q=75"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                Welcome Back!
              </h2>
              <p className="text-gray-600">Please sign in to continue</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
                <input
                  placeholder="Email Address"
                  required=""
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                  type="email"
                  onChange={handleChange}
                  defaultValue={formData.email}
                  name="email"
                />
              </div>
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                </svg>
                <input
                  placeholder="Password"
                  required=""
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                  type="password"
                  onChange={handleChange}
                  defaultValue={formData.password}
                  name="password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Sign In
              </button>
              <div className="text-center">
                <a
                  className="text-blue-600 hover:text-blue-700 text-sm"
                  href="/forgot-password"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Set Password for Google Account
                </button>
              </div>
            </form>
            <div className="my-6 flex items-center" style={{ opacity: 1 }}>
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex bg-white items-center justify-center gap-4 shadow-lg rounded-lg pl-3 py-3 border border-gray-300 hover:shadow-xl transition-shadow"
              tabIndex="0"
              style={{ transform: "none" }}
            >
              <img
                alt="Google logo"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="https://redwansmethod.com/_next/image?url=%2Fgoogle-logo.png&w=32&q=75"
              />
              <span className="text-gray-700 font-medium">
                Continue with Google
              </span>
            </button>
            <div className="mt-6 text-center" style={{ opacity: 1 }}>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign Up
                </button>
              </p>
            </div>
            <div className="mt-6 text-center" style={{ opacity: 1 }}>
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="/terms-and-conditions"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
