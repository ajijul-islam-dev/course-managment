import React from "react";

const LearningPathSection = () => {
  return (
    <div className="">
      <section className="min-h-screen py-20 flex items-center  relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0a7cc9] to-[#0ac9c0]  text-center">
              Choose Your Learning Path
            </h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Discover diverse courses across multiple disciplines designed to
              help you excel in your academic and admission journey.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4"
            style={{ opacity: 1 }}
          >
            <div style={{ opacity: 1, transform: "none" }}>
              <a href="/courses">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 md:p-8 h-full border border-gray-200/50 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm flex flex-col">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      className="text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-blue-600 group-hover:scale-105 transition-transform duration-300">
                    Academic Courses
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Comprehensive academic preparation for all levels
                  </p>
                  <div className="flex items-center justify-end mt-auto">
                    <div className="flex items-center text-oc-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <a href="/courses">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 md:p-8 h-full border border-gray-200/50 hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm flex flex-col">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-green-600 group-hover:scale-105 transition-transform duration-300">
                    Admission Courses
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Specialized courses for university admissions
                  </p>
                  <div className="flex items-center justify-end mt-auto">
                    <div className="flex items-center text-oc-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <a href="/courses">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 md:p-8 h-full border border-gray-200/50 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm flex flex-col">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-purple-600 group-hover:scale-105 transition-transform duration-300">
                    Mathematics
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Advanced math concepts and problem solving
                  </p>
                  <div className="flex items-center justify-end mt-auto">
                    <div className="flex items-center text-oc-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <a href="/courses">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 md:p-8 h-full border border-gray-200/50 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm flex flex-col">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-orange-600 group-hover:scale-105 transition-transform duration-300">
                    Science &amp; Physics
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Comprehensive science and physics courses
                  </p>
                  <div className="flex items-center justify-end mt-auto">
                    <div className="flex items-center text-oc-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <a href="/courses">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-6 md:p-8 h-full border border-gray-200/50 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm flex flex-col">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      className="text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-indigo-600 group-hover:scale-105 transition-transform duration-300">
                    Technology
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Modern technology and programming courses
                  </p>
                  <div className="flex items-center justify-end mt-auto">
                    <div className="flex items-center text-oc-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
        <div style={{ opacity: 1, transform: "none" }}>
              <a href="/courses">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 md:p-8 h-full border border-gray-200/50 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 group cursor-pointer backdrop-blur-sm flex flex-col">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      className="text-4xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-pink-600 group-hover:scale-105 transition-transform duration-300">
                    Community
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    Join our supportive learning community
                  </p>
                  <div className="flex items-center justify-end mt-auto">
                    <div className="flex items-center text-oc-primary font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPathSection;
