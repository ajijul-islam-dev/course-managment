import React from "react";

const StudentsReview = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <h3 className="text-blue-400 font-semibold mb-2 text-lg">
              Student Reviews
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Feedbacks from students who have transformed their learning
              journey with Redwan's Method
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            style={{ opacity: 1 }}
          >
            <div
              className="relative group"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-600/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-800/90 group-hover:to-gray-700/90 flex flex-col">
                <div className="absolute top-6 right-6 text-blue-400/30">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <span className="ml-2 text-sm text-gray-400">(.0)</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 italic flex-grow">
                  "ভাইয়া একটা এমসিকিউ সলভ করানোর মাধ্যমে দশটা এমসিকিউ সলভ করার
                  নিয়ম বুঝিয়ে দেন 🤗 এক্সাম এ ভাইয়ার এমসিকিউ টাইপ কমন আসে।"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img
                      alt="Tasannun Tarin"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover"
                      style={{ color: "transparent" }}
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tasannun%20Tarin&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"
                    />
                    <div className="hidden w-full h-full items-center justify-center text-white font-bold text-lg">
                      TT
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Tasannun Tarin
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Student • Redwan's Method
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative group"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-600/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-800/90 group-hover:to-gray-700/90 flex flex-col">
                <div className="absolute top-6 right-6 text-blue-400/30">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <span className="ml-2 text-sm text-gray-400">(5.0)</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 italic flex-grow">
                  "To be honest,this series is too much effective before i was
                  weak in MCQ of Math.Right now i get 27-29 out of 30.Thank you
                  Redwan Hushen vaiya❤💌"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img
                      alt="Shamim Shohan"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover"
                      style={{ color: "transparent" }}
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shamim%20Shohan&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"
                    />
                    <div className="hidden w-full h-full items-center justify-center text-white font-bold text-lg">
                      SS
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Shamim Shohan
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Student • Redwan's Method
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative group"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-600/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-800/90 group-hover:to-gray-700/90 flex flex-col">
                <div className="absolute top-6 right-6 text-blue-400/30">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="w-4 h-4 text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                  <span className="ml-2 text-sm text-gray-400">(5.0)</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 italic flex-grow">
                  "রত্যেক স্যারই অনেক সুন্দর ভাবে এবং গুছিয়ে আমাদের ক্লাসগুলো
                  করিয়ে থাকেন। FRPB-25 free course টা অসাধারণ। এই একটা কোর্সেই
                  অনেকগুলো সাবজেক্ট পড়তে পারছি এবং শিখতে পারছি। এমন একটা
                  ফ্রি-কোর্স এভাবে পেয়ে যাবো কল্পনায় ছিলনা। অসংখ্য ধন্যবাদ
                  রেদোয়ান স্যারকে এত সুন্দর একটি সিদ্ধান্ত গ্রহণ করার পাশাপাশি
                  আমাদের পর্যাপ্ত সুযোগ-সুবিধা দেওয়ার জন্য 😊"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img
                      alt="Fakir Nazma Nasrin"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover"
                      style={{ color: "transparent" }}
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fakir%20Nazma%20Nasrin&amp;backgroundColor=b6e3f4,c0aede,d1d4f9"
                    />
                    <div className="hidden w-full h-full items-center justify-center text-white font-bold text-lg">
                      FNN
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Fakir Nazma Nasrin
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Student • Redwan's Method
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsReview;
