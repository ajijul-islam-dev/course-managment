"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Loading from "@/app/loading";





const CourseDetails = ({ params }) => {
  const { id } =  React.use(params);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await fetch(`/api/courses/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course');
        }
        const courseData = await response.json();
        setCourse(courseData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <Loading />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error: {error || "Course not found"}</p>
          <button
            onClick={() => router.back()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Transform modules data for the UI
  const getInstructorsData = () => {
    // You might want to fetch actual instructor data based on course.instructor
    // For now, using placeholder data as in your original code
    return [
      {
        name: "Redwan Hushen",
        img: "https://cdn.redwansmethod.com/images/Redwan%20Hushen%20Famous%20%281%29-1749843038117.png",
      },
      {
        name: "Rafiqul Islam Nafi",
        img: "https://cdn.redwansmethod.com/images/Nafi-1749844433572.png",
      },
      {
        name: "Durbar Roy Dhrubo",
        img: "https://cdn.redwansmethod.com/images/Durbar%20Roy%20Dhruba-1749844600701.png",
      },
      {
        name: "Mohimenul Islam Omi",
        img: "https://cdn.redwansmethod.com/images/Mohimenul%20Islam%20Omi-1749844685445.png",
      },
    ];
  };

  const getIncludedCoursesData = () => {
    // Transform subjects into included courses format
    return course.subjects.map((subject, index) => ({
      name: `${subject} Course`,
      img: `https://cdn.redwansmethod.com/images/course-${index + 1}.jpg`, // You might want to use actual images from your course data
    }));
  };

  const instructors = getInstructorsData();
  const includedCourses = getIncludedCoursesData();

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden py-20 bg-gray-100">
        {/* Background gradients and SVGs */}
        <div
          className="absolute opacity-10 rounded-full w-96 h-96 -top-48 -right-48"
          style={{
            background:
              "linear-gradient(135deg, rgb(10, 124, 201), rgb(100, 181, 246))",
          }}
        />
        <div
          className="absolute opacity-10 rounded-lg rotate-45 w-32 h-32 top-1/4 -left-16"
          style={{
            background:
              "linear-gradient(135deg, rgb(10, 124, 201), rgb(100, 181, 246))",
          }}
        />
        <div
          className="absolute opacity-10 rounded-full w-64 h-64 bottom-1/4 right-1/4"
          style={{
            background:
              "linear-gradient(135deg, rgb(10, 124, 201), rgb(100, 181, 246))",
          }}
        />
        <div className="absolute top-20 right-20 opacity-5">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-24 h-24 text-blue-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 opacity-5">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-20 h-20 text-blue-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2"></path>
            <path d="M5 12h6"></path>
            <path d="M15 12l6 6"></path>
            <path d="M15 18l6 -6"></path>
          </svg>
        </div>
        
        {/* Main container */}
        <div className="relative z-10 container mx-auto px-4 py-8 mt-10">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            style={{ opacity: 1 }}
          >
            ← Back to Courses
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left section */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="flex border-b bg-transparent w-full py-0">
                    <TabsTrigger
                      value="overview"
                      className="flex-1 flex flex-col items-center justify-center gap-1 py-4 px-6 font-medium transition-all text-gray-600 hover:text-blue-600 hover:bg-gray-50 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span className="text-xs sm:text-sm">Overview</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="demo"
                      className="flex-1 flex flex-col items-center justify-center gap-1 py-4 px-6 font-medium transition-all text-gray-600 hover:text-blue-600 hover:bg-gray-50 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 border-b-2 border-transparent data-[state=active]:border-blue-600"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span className="text-xs sm:text-sm">Demo Class</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Overview Tab */}
                  <TabsContent value="overview" className="p-8">
                    <div className="space-y-6" style={{ opacity: 1 }}>
                      {/* Instructors */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Combo Instructors
                        </h3>
                        <div className="overflow-x-auto teachers-scroll">
                          <div className="flex gap-4 pb-2 min-w-max">
                            {instructors.map((inst) => (
                              <div
                                key={inst.name}
                                className="flex flex-col items-center text-center min-w-[120px] group"
                              >
                                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-200 hover:border-blue-300 transition-colors shadow-sm group-hover:shadow-md">
                                  <img
                                    alt={inst.name}
                                    loading="lazy"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                    src={inst.img}
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <h4 className="text-sm font-semibold text-gray-900 truncate w-full group-hover:text-blue-600 transition-colors">
                                  {inst.name}
                                </h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Course Description
                        </h3>
                        <p
                          style={{ whiteSpace: "pre-line" }}
                          className="text-gray-600 text-justify leading-relaxed"
                        >
                          {course.description}
                        </p>
                        <button className="text-blue-600 hover:underline mt-2 mb-2">
                          See more
                        </button>
                        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <span className="block font-semibold text-blue-700 text-base sm:text-lg mb-1">
                            Important Note: Please watch this video before purchasing:
                          </span>
                          <a
                            href="https://www.youtube.com/watch?v=WO1KcxKmgYk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-600 underline break-all text-sm sm:text-base"
                          >
                            https://www.youtube.com/watch?v=WO1KcxKmgYk
                          </a>
                        </div>
                      </div>
                      
                      {/* Included Courses */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                          Included Subjects
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {includedCourses.map((courseItem, index) => (
                            <div
                              key={index}
                              className="w-full sm:w-40 sm:min-w-[8rem] sm:max-w-[10rem] bg-blue-50 rounded-lg border border-blue-100 shadow-sm flex flex-col cursor-pointer hover:bg-blue-100 hover:text-blue-900 transition-all duration-200 overflow-hidden group mb-2"
                            >
                              <div className="relative w-full aspect-[16/9]">
                                <img
                                  alt={courseItem.name}
                                  className="object-cover object-center rounded-t-lg group-hover:scale-105 transition-transform duration-200"
                                  style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: 0,
                                    color: "transparent",
                                  }}
                                  src={courseItem.img}
                                />
                              </div>
                              <div className="px-4 py-3 sm:py-2 text-center text-blue-700 text-sm sm:text-xs font-semibold break-words w-full h-full flex items-center justify-center min-h-[3rem] sm:min-h-[2.25rem]">
                                {courseItem.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Demo Tab */}
                  <TabsContent value="demo" className="p-8">
                    <div>
                      <div className="p-8">
                        <div
                          className="space-y-4"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          {course.subjects.map((subject, subjectIndex) => (
                            <div key={subject} className="mb-6">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {subject}
                              </h4>
                              {course.modules[subject]?.map((module, moduleIndex) => (
                                <div
                                  key={module._id}
                                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer mb-2"
                                  tabIndex={0}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-sm">
                                          {moduleIndex + 1}
                                        </span>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-gray-900">
                                          {module.title}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                          {module.videos.length} videos
                                        </p>
                                      </div>
                                    </div>
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="w-5 h-5 text-blue-600"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                  </div>
                                </div>
                              ))}
                              {(!course.modules[subject] || course.modules[subject].length === 0) && (
                                <div className="text-gray-500 text-sm mb-4">
                                  No demo videos available for this subject.
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right section */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div
                className="bg-white rounded-2xl shadow-lg p-4 sticky top-8"
                style={{ opacity: 1 }}
              >
                <div>
                  <img
                    alt={course.title}
                    className="w-full aspect-video object-cover rounded-lg"
                    src={course.thumbnail || "https://cdn.redwansmethod.com/images/1000071573-1753804000126.jpg"}
                  />
                </div>
                <div className="text-center mt-4 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-blue-600">
                      ৳{course.price}
                    </span>
                    <span className="text-gray-400 line-through text-lg">
                      ৳{Math.round(course.price * 1.07)}
                    </span>
                  </div>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    7% OFF
                  </span>
                </div>
                <div className="mb-6">
                  <button
                    className="w-full text-blue-600 hover:text-blue-700 font-medium py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                    tabIndex={0}
                  >
                    Have Coupon Code?
                  </button>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
                  tabIndex={0}
                >
                  Login to Enroll
                </button>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-gray-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span className="text-gray-700">Students</span>
                    </div>
                    <span className="font-semibold text-gray-900">6094</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="w-5 h-5 text-gray-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"></path>
                      </svg>
                      <span className="text-gray-700">Exam System</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;