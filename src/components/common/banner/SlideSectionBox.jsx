import React from "react";
import ImageSlider from "./ImageSlider";

const SlideSectionBox = () => {
  return (
    <div className="pt-28 overflow-hidden">
      <div className=" overflow-hidden w-[95%] mx-auto bg-gradient-to-br from-blue-900/50 via-sky-900/50 to-green-900/50 backdrop-blur-lg rounded-2xl p-5 md:pb-20 md:pt-10 border border-cyan-500/20">
        <div className="text-center">
          <span className="bg-green-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-medium">
            Featured Courses
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
            Discover Our Top Courses
          </h2>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default SlideSectionBox;
