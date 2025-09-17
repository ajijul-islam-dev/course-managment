"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const ContactUs = () => {
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
    <div>
      <div className="relative min-h-screen overflow-hidden bg-gray-50 py-10 sm:py-20">
        <div className="relative z-10 min-h-screen sm:p-6 ">
          <div className="max-w-7xl mx-auto">
            <div
              className="text-center mb-8 sm:mb-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-6 sm:mt-10">
                Get In Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Have questions about our courses? Need support? We'd love to
                hear from you. Send us a message and we'll respond as soon as
                possible.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 px-4">
              <div
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12"
                style={{ opacity: 1, transform: "none" }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      onChange={handleChange}
                      type="text"
                      className="py-4 w-full text-black px-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder="What's this about?"
                      required=""
                      name="subject"
                      defaultValue={formData.subject}
                    />
                  </div>
                  <div style={{ opacity: 1, transform: "none" }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                        onChange={handleChange}
                      name="message"
                      rows="6"
                      className="w-full text-black px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                      defaultValue={formData.message}
                      placeholder="Tell us more about your inquiry..."
                      required=""
                    ></Textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-500/90 transition-all duration-300"
                    
                    style={{ opacity: 1, transform: "none" }}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              <div
                className="space-y-6 sm:space-y-8"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="grid gap-4 sm:gap-6">
                  <div
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-blue-500 text-xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Email Us
                        </h4>
                        <p className="text-blue-500 font-medium mb-1">
                          redwansmethod.info@gmail.com
                        </p>
                        <p className="text-sm text-gray-600">
                          Send us an email anytime
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-blue-500 text-xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Call Us
                        </h4>
                        <p className="text-blue-500 font-medium mb-1">
                          01309270105
                        </p>
                        <p className="text-sm text-gray-600">
                          Mon-Fri from 9am to 9pm
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 384 512"
                          className="text-blue-500 text-xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Visit Us
                        </h4>
                        <p className="text-blue-500 font-medium mb-1">
                          Dhaka, Bangladesh
                        </p>
                        <p className="text-sm text-gray-600">
                          Come say hello at our office
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="https://www.youtube.com/@RedwansMethod"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Redwan's Method YouTube"
                      className="bg-gray-100 p-4 rounded-xl text-gray-600 transition-colors hover:text-red-600 flex items-center gap-3 hover:bg-gray-50"
                      tabIndex="0"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        className="text-xl flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                      </svg>
                      <span className="font-medium text-sm">Redwan's Method</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@RedwanHushen"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Redwan Hushen YouTube"
                      className="bg-gray-100 p-4 rounded-xl text-gray-600 transition-colors hover:text-red-600 flex items-center gap-3 hover:bg-gray-50"
                      tabIndex="0"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        className="text-xl flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                      </svg>
                      <span className="font-medium text-sm">Redwan Hushen</span>
                    </a>
                    <a
                      href="https://www.facebook.com/Redwanhushenofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Redwan Hushen Facebook"
                      className="bg-gray-100 p-4 rounded-xl text-gray-600 transition-colors hover:text-blue-600 flex items-center gap-3 hover:bg-gray-50"
                      tabIndex="0"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-xl flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                      </svg>
                      <span className="font-medium text-sm">Facebook Page</span>
                    </a>
                    <a
                      href="https://www.facebook.com/groups/1006473473215937"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Redwan's Method Facebook Group"
                      className="bg-gray-100 p-4 rounded-xl text-gray-600 transition-colors hover:text-blue-600 flex items-center gap-3 hover:bg-gray-50"
                      tabIndex="0"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-xl flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                      </svg>
                      <span className="font-medium text-sm">Facebook Group</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
