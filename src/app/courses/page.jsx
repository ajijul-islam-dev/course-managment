"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import  Loading  from '@/app/loading';


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const courseTabs = [
    { value: "all", label: "All Courses" },
    { value: "combos", label: "Combos" },
    { value: "hsc", label: "HSC" },
    { value: "ssc", label: "SSC" },
    { value: "class6-8", label: "Class 6-8" },
  ];

  // fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // count for each tab
  const getCount = (tab) => {
    if (tab === "all") return courses.length;
    if (tab === "combos") return courses.filter((c) => c.category?.toLowerCase() === "combos").length;
    if (tab === "hsc") return courses.filter((c) => c.category?.toLowerCase() === "hsc").length;
    if (tab === "ssc") return courses.filter((c) => c.category?.toLowerCase() === "ssc").length;
    if (tab === "class6-8") return courses.filter((c) => c.category?.toLowerCase() === "class6-8").length;
    return 0;
  };

  // filter courses by tab
  const filteredCourses = (tab) => {
    if (tab === "all") return courses;
    return courses.filter((c) => c.category?.toLowerCase() === tab);
  };

  return (
    <div>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 py-12 mt-3">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-8 h-8 text-white"
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
                      {getCount(tab.value)}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {courseTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <h2 className="text-xl font-semibold text-gray-800 mb-10 mt-28 lg:mt-10">
                  {tab.label}
                </h2>

                {loading ? (
                  <Loading />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses(tab.value).map((course) => (
                      <Link
                        key={course._id}
                        href={`/courses/${course._id}`}
                        className="group cursor-pointer"
                      >
                        <div className="group cursor-pointer h-full">
                          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col">
                            <div className="relative overflow-hidden aspect-video">
                              <img
                                alt={course.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src={course.thumbnail || "/placeholder.png"}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                              <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                  {course.category}
                                </span>
                              </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                              <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors">
                                {course.title}
                              </h3>
                              <div className="mt-auto">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-blue-600">
                                      ৳{course.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Courses;
