"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <div className="relative min-h-screen to-cyan-200/50 overflow-hidden py-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-30 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-gradient-to-br from-violet-200 to-purple-200 opacity-30 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/6 w-16 h-16 bg-gradient-to-br from-fuchsia-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-200 rounded-lg opacity-25 animate-bounce"></div>
        <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-16 bg-gradient-to-br from-indigo-200 to-blue-200 opacity-25 rounded-lg rotate-6 animate-pulse"></div>
        <div
          className="absolute top-1/2 right-10 opacity-30"
          style={{
            width: "0px",
            height: "0px",
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: "70px solid rgb(196, 181, 253)",
          }}
        ></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-500 mb-6">
                Director Panel
              </h2>
            </div>
            <div className="flex flex-col items-center gap-10">
              <div className="w-full max-w-xl bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <div className="w-40 h-52 mb-4">
                  <img
                    alt="Redwan Hushen"
                    loading="lazy"
                    width="160"
                    height="208"
                    decoding="async"
                    className="object-cover w-full h-full"
                    style={{ color: "transparent", borderRadius: "0px" }}
                    src="https://redwansmethod.com/_next/image?url=https%3A%2F%2Fcdn.redwansmethod.com%2Fstatic-images%2FRedwan%2520Hushen%2520Famous.png&w=256&q=75"
                   
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  Redwan Hushen
                </h3>
                <p className="text-blue-500 font-semibold mb-1">
                  Founder &amp; CEO
                </p>
                <p className="text-gray-600 mb-2 text-sm">CSE, AUST</p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://youtube.com/redwansmethod_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-red-600 hover:text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/redwansmethod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-blue-700 hover:text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
                <div className="flex-1 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <div className="w-32 h-40 mb-4">
                    <img
                      alt="Sk Maisha"
                      loading="lazy"
                      width="128"
                      height="160"
                      decoding="async"
                      className="object-cover w-full h-full"
                      style={{ color: "transparent", borderRadius: "0px" }}
                      src="https://redwansmethod.com/_next/image?url=https%3A%2F%2Fcdn.redwansmethod.com%2Fstatic-images%2FSk%2520Maisha%2520Blue.png&w=256&q=75"
                    
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Sk Maisha
                  </h3>
                  <p className="text-blue-500 font-semibold mb-1">
                    CFO &amp; Community Manager
                  </p>
                  <p className="text-gray-600 mb-2 text-sm">
                    Dept. Of Accounting
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://web.facebook.com/sk.maisha.893970"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-blue-700 hover:text-white"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                  <div className="w-32 h-40 mb-4">
                    <img
                      alt="Saif Hasan Lovelu"
                      loading="lazy"
                      width="128"
                      height="160"
                      decoding="async"
                      className="object-cover w-full h-full"
                      style={{ color: "transparent", borderRadius: "0px" }}
                      src="https://redwansmethod.com/_next/image?url=https%3A%2F%2Fcdn.redwansmethod.com%2Fstatic-images%2FSaif%2520Hasan%2520Lovelu%2520Blue.png&w=256&q=75"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Saif Hasan Lovelu
                  </h3>
                  <p className="text-blue-500 font-semibold mb-1">
                    COO (Chief Operating Officer)
                  </p>
                  <p className="text-gray-600 mb-2 text-sm">
                    Dept. of CSE, UIU
                  </p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://www.youtube.com/@SHLOVELU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-red-600 hover:text-white"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://web.facebook.com/sh.lovelu.9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-blue-700 hover:text-white"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-center mb-16"
              style={{ opacity: 1, transform: "none" }}
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 mt-20">
                Tech Powered By
              </h2>
            </div>
            <div className="flex flex-col items-center gap-10">
              <div className="w-full max-w-xl bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
                <div className="w-40 h-40 mb-4 rounded-full shadow-2xl border-white border-2">
                  <img
                    alt="Md Adil Hossain"
                    loading="lazy"
                    width="160"
                    height="160"
                    decoding="async"
                    className="object-cover w-full h-full rounded-full"
                    style={{ color: "transparent" }}
                    src="https://redwansmethod.com/_next/image?url=https%3A%2F%2Fcdn.redwansmethod.com%2Fstatic-images%2Fadil.jpg&w=256&q=75"
                   
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  Md Adil Hossain
                </h3>
                <p className="text-blue-500 font-semibold mb-1">
                  Founder, Novion Soft
                </p>
                <p className="text-gray-600 mb-2 text-sm">
                  Full-Stack Developer
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://www.youtube.com/@programmingwithadil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:text-white hover:bg-red-600"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/md.adil.hossain1109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:text-white hover:bg-blue-700"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Adil1109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:text-white hover:bg-gray-800"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://mdadilhossain.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:text-white hover:bg-green-600"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61576559310102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-all duration-300 hover:text-white hover:bg-blue-700"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-lg"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="text-center mt-20 bg-gradient-to-r from-blue-500/70 to-blue-500/90 rounded-3xl p-12 text-white"
              style={{ opacity: 1, transform: "none" }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Advance Your Learning?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who have accelerated their progress
                through our industry-leading programs. Transform your expertise
                today.
              </p>
              <button
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                tabIndex={0}
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
