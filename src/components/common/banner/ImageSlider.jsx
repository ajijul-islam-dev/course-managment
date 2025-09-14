"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css"; // custom CSS

const slides = [
  { id: 1, img: "/banner1.jpg", title: "HSC-27 Physics 1st Paper", teacher: "Redwan Hushen & Niaz Morshed Faysal" },
  { id: 2, img: "/banner2.jpg", title: "HSC-27 Chemistry", teacher: "Redwan Hushen" },
  { id: 3, img: "/banner3.jpg", title: "HSC-27 Biology", teacher: "Niaz Morshed Faysal" },
  { id: 4, img: "/banner4.jpg", title: "HSC-27 Higher Math", teacher: "Redwan Hushen" },
];

export default function ImageSlider() {
  return (
    <div className=".slider-container image-slider-container w-full max-w-6xl mx-auto py-10 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        className="image-swiper items-start"
        spaceBetween={20}
        slidesPerView={2.1}
        centeredSlides={true}
        navigation={true}              // built-in nav
        pagination={{ clickable: true }} // default pagination (dont override class names)
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className=" w-full h-80  slide-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
              <img
                src="/images/slides/slide_1.webp"
                alt={slide.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{slide.title}</h3>
                <p className="text-sm text-gray-600">{slide.teacher}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
