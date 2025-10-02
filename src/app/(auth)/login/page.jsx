"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false); // loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    try {
      const res = await signIn("credentials", {
        ...formData,
        redirect: false, // handle manually
      });

      if (res?.ok) {
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You are being redirected...",
          timer: 1500,
          showConfirmButton: false,
        });
        window.location.href = "/";
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: res?.error || "Invalid credentials",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "Something went wrong",
      });
    } finally {
      setLoading(false); // stop loading
    }
  };

  const handleGoogleLogin = async () => {

    try {
      const res = await signIn("google", { redirect: true, callbackUrl: "/" });

      if (res?.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You are being redirected...",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.message || "Something went wrong",
      });
    } 
  };

  return (
    <div>
      <div className=" min-h-screen bg-gradient-to-br from-indigo-200/50 via-purple-200/50 to-cyan-200/50">
        <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center">
                <Logo className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                Welcome Back!
              </h2>
              <p className="text-gray-600">Please sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                />
              </div>

              <div className="relative">
                <input
                  placeholder="Password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleLogin}
           
              className="w-full flex bg-white items-center justify-center gap-4 shadow-lg rounded-lg pl-3 py-3 border border-gray-300 hover:shadow-xl transition-shadow"
            >
              <img
                alt="Google logo"
                loading="lazy"
                width="24"
                height="24"
                src="https://redwansmethod.com/_next/image?url=%2Fgoogle-logo.png&w=32&q=75"
              />
              <span className="text-gray-700 font-medium">
                {loading ? "Logging in..." : "Continue with Google"}
              </span>
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link className="text-blue-600 hover:underline" href="/register">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <a className="text-blue-600 hover:underline" href="/terms-and-conditions">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="text-blue-600 hover:underline" href="/privacy-policy">
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
