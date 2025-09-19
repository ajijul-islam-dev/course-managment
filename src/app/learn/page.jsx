import React from "react";

const Learn = () => {
  return (
    <div>
      <div className="pt-18 min-h-screen bg-gradient-to-br from-indigo-200/50 via-purple-200/50 to-cyan-200/50">
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mt-6 mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  My Enrolled Courses
                </h1>
              </div>
              <p className="text-md text-justify last:text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Continue your learning journey and track your progress across
                all enrolled courses.
              </p>
            </div>
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12 text-gray-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No enrolled courses yet
              </h3>
              <p className="text-gray-500 mb-6">
                Start your learning journey by enrolling in courses that
                interest you.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
