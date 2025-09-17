import React from "react";

const SSCResult = () => {
  return (
    <div>
      <div className="relative min-h-screen  overflow-hidden py-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-20 rotate-12 animate-pulse"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 py-20">
            <div
              className="text-center mb-16"
              style={{ opacity: 1, transform: "none" }}
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4">
                SSC Result 2025
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Check your official SSC results from the Bangladesh Education
                Board
              </p>
            </div>
            <div
              className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl p-8 md:p-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="text-center">
                <div
                  className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  style={{ transform: "none" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="text-6xl text-blue-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Official SSC Result Portal
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Access the official Bangladesh Education Board website to
                  check your SSC examination results instantly. Get your results
                  with roll number, registration number, or name.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div
                    className="flex flex-col items-center"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-2xl text-blue-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Quick Search
                    </h4>
                    <p className="text-sm text-gray-600">
                      Find results by roll number or name
                    </p>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-2xl text-green-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Official Results
                    </h4>
                    <p className="text-sm text-gray-600">
                      Direct from Education Board
                    </p>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        className="text-2xl text-purple-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      All Boards
                    </h4>
                    <p className="text-sm text-gray-600">
                      Results from all education boards
                    </p>
                  </div>
                </div>
                <a
                  href="https://eboardresults.com/en/ebr.app/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-blue-500 text-white rounded-xl font-semibold text-base md:text-xl hover:bg-blue-500/90 transition-colors shadow-lg"
                  tabIndex="0"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Check SSC Result{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="ml-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCResult;
