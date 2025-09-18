import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

const Courses = () => {
  const courseTabs = [
    {
      value: "all",
      label: "All Courses",
      count: 19,
    },
    {
      value: "combos",
      label: "Combos",
      count: 11,
    },
    {
      value: "hsc",
      label: "HSC",
      count: 10,
    },
    {
      value: "ssc",
      label: "SSC",
      count: 19,
    },
    {
      value: "class6-8",
      label: "Class 6-8",
      count: 1,
    },
  ];

  return (
    <div>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 py-12 mt-3">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                {/* svg icon */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-8 h-8 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </div>
              <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                All Courses
              </h1>
            </div>
            <p className="text-md text-justify last:text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Improve Your academic knowledge and prepare effectively for your
              examinations by enrolling in our courses. Learn from expert and
              experienced instructors.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center relative z-0">
              <TabsList className="flex flex-wrap gap-2 sm:gap-4 justify-center bg-transparent p-0 border-0 shadow-none">
                {courseTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="relative z-10 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base
                      data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg
                      data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
                  >
                    <span className="whitespace-nowrap">{tab.label}</span>
                    <span
                      className={`text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ${
                        tab.value === "all"
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value="all">
              <h2 className="text-xl font-semibold text-gray-800 mb-10 mt-20 lg:mt-10  ">
                All Courses
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                style={{ opacity: 1 }}
              >
                {/* --- Course Cards Start --- */}
                <Link href="/courses/1"
                  className="group cursor-pointer"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="group cursor-pointer h-full">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          alt="Final Revision Premium Batch for SSC 26 (FRPB-26) Arts & Commerce"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src="https://cdn.redwansmethod.com/images/FRPB-26%20Arts%20%26%20Commerce%20Web%20Ratio-1757688885045.jpg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            SSC
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            className="w-6 h-6 text-white opacity-80"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                            SSC-26
                          </span>
                          <div className="flex items-center gap-1 ml-auto">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 text-yellow-500 fill-current"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span className="text-sm font-medium text-gray-700"></span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors">
                          Final Revision Premium Batch for SSC 26 (FRPB-26) Arts
                          & Commerce
                        </h3>
                        <div className="mt-auto">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-blue-600">
                                ৳1590
                              </span>
                              <span className="text-gray-400 line-through text-sm">
                                ৳2500
                              </span>
                            </div>
                            <span className="text-green-600 text-sm font-medium">
                              36% OFF
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* --- Repeat similar blocks for other courses --- */}
              </div>
            </TabsContent>
            {/* You can add more <TabsContent value="combos">...</TabsContent> etc. for other tabs */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Courses;
