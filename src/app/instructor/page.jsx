"use client";
import InstructorCard from "@/components/common/Instructor/InstructorCard";
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
    <div className="relative min-h-screen overflow-hidden py-20 bg-gray-50">
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-30 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-gradient-to-br from-violet-200 to-purple-200 opacity-30 rounded-lg animate-pulse"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg opacity-30 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute bottom-1/3 left-1/6 w-16 h-16 bg-gradient-to-br from-fuchsia-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-2/3 right-1/6 w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-200 rounded-lg opacity-25 animate-bounce"></div>
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
      <div className="relative z-10 min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full container mx-auto">
          <div className="text-center mb-12 mt-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500/80 via-blue-500/90 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Our Expert Instructors
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated team of educators from both RM and RMH
              platforms
            </p>
            <div className="text-center mb-8 mt-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500/70 via-blue-500/85 to-blue-500 bg-clip-text text-transparent">
                Instructor Panel RMH
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500/60 via-blue-500/80 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
            <InstructorCard/>
          </div>
            
          {/* Additional content would go here */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
