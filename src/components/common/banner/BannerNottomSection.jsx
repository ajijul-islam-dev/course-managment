import React from "react";

const BannerNottomSection = () => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 gap-8 mb-12 my-20 w-[95%] mx-auto">
        <div
          className="bg-gradient-to-br from-emerald-900/50 via-teal-900/50 to-cyan-900/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-emerald-500/20 flex flex-col"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
              Online Course
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Online Batches are ongoing!
          </h2>
          <h3 className="text-xl md:text-2xl text-emerald-300 mb-6">
            Book your seat now!
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-6 flex-grow">
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer flex items-start space-x-3"
              tabIndex="0"
              style={{ transform: "none" }}
            >
              <div className="text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors flex-shrink-0">
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  className 9, 10
                </h4>
                <p className="text-slate-400 text-sm md:text-base">
                  SSC Preparation
                </p>
              </div>
            </div>
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer flex items-start space-x-3"
              tabIndex="0"
              style={{ transform: "none" }}
            >
              <div className="text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors flex-shrink-0">
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  className="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  College
                </h4>
                <p className="text-slate-400 text-sm md:text-base">
                  HSC Preparation
                </p>
              </div>
            </div>
          </div>
          <button
            className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium group transition-colors text-sm md:text-base mt-auto"
            style={{ transform: "none" }}
          >
            See All Courses
            <svg
              strokeWidth="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>
        </div>
        <div
          className="bg-gradient-to-br from-cyan-900/50 via-sky-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-cyan-500/20 flex flex-col"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">
              Online Course
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            See the stats!
          </h2>
          <h3 className="text-xl md:text-2xl text-cyan-300 mb-6">
            The trust we are building!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-grow">
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer flex items-start space-x-3"
              tabIndex="0"
              style={{ transform: "none" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                  className="w-6 h-6 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  69002
                </h4>
                <p className="text-slate-400 text-sm md:text-base">Students</p>
              </div>
            </div>
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer flex items-start space-x-3"
              tabIndex="0"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  27
                </h4>
                <p className="text-slate-400 text-sm md:text-base">Courses</p>
              </div>
            </div>
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer flex items-start space-x-3"
              tabIndex="0"
              style={{ transform: "none" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  17
                </h4>
                <p className="text-slate-400 text-sm md:text-base">Teachers</p>
              </div>
            </div>
            <div
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer flex items-start space-x-3"
              tabIndex="0"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  strokeWidth="currentColor"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  className="w-6 h-6 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  1304
                </h4>
                <p className="text-slate-400 text-sm md:text-base">Videos</p>
              </div>
            </div>
          </div>
          <button
            className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium group transition-colors text-sm md:text-base mt-auto"
            style={{ transform: "none" }}
          >
            See All Courses
            <svg
              strokeWidth="currentColor"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerNottomSection;
