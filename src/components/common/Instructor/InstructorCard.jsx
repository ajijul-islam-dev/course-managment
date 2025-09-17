import React from "react";
import { useRouter } from "next/navigation";

const InstructorCard = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/teacher/682d2692d7be70f5f6a4f2e6");
  };

  return (
    <div
      onClick={handleCardClick}
      className=" w-full bg-white  rounded-3xl shadow-lg overflow-hidden cursor-pointer group h-full flex flex-col"
    >
      <div className="relative h-24 bg-gradient-to-r from-blue-500/70 to-blue-500" />

      <div className="relative -mt-12 flex justify-center mb-3">
        <div className="relative" style={{ transform: "none" }}>
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-blue-500/70 to-blue-500 shadow-lg">
            <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-transparent">
              <img
                alt="Redwan Hushen"
                width="120"
                height="120"
                className="w-full h-full object-cover"
                style={{ color: "transparent" }}
                src="https://cdn.redwansmethod.com/images/Redwan%20Hushen%20Famous%20(1)-1749843038117.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-6 pb-6 flex-1 flex flex-col">
        <div className="text-center mb-3">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            Redwan Hushen
          </h3>
        </div>

        <div className="flex items-center justify-center mb-2">
          <div className="flex items-center bg-gradient-to-r from-blue-500/10 to-blue-500/20 px-4 py-2 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="text-blue-500 mr-2 text-sm"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
            </svg>
            <span className="text-sm font-semibold text-gray-700">Physics</span>
          </div>
        </div>
        <div className="text-center mb-4 flex-1 flex flex-col justify-center">
          <p className="text-gray-600 text-sm leading-relaxed mb-1">
            Founder & CEO, Redwan's Method
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-1">
            CSE, AUST
          </p>
          <div className="overflow-hidden" style={{ height: 0, opacity: 0 }} />
        </div>

        <div className="flex justify-center space-x-4 mt-auto">
          <a
            href="https://www.youtube.com/@RedwanHushen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white shadow-md hover:shadow-lg transition-shadow duration-200"
            style={{ transform: "none" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/redwan.hushen.16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white shadow-md hover:shadow-lg transition-shadow duration-200"
            style={{ transform: "none" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-xl"
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
  );
};

export default InstructorCard;
