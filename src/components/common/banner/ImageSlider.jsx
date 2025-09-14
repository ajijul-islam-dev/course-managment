"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function ImageSlider() {
  const slides = [
    {
      href: "/combo/6889269df66fee99adae8793",
      alt: "SSC All In One Basic to Pro 2.0 Combo Course",
      src: "https://cdn.redwansmethod.com/images/1000071485-1753818777740.jpg",
    },
    {
      href: "/combo/pcmb-combo",
      alt: "HSC PCMB (Physics, Chemistry, H.Math, Biology) 1st Paper Combo Course",
      src: "https://cdn.redwansmethod.com/images/1000042971-1756895113906.png",
    },
    {
      href: "/course/000000000",
      alt: "SSC Physics Basic to Pro 2.0",
      src: "https://cdn.redwansmethod.com/images/Physics%20B2P%202p0-1751353538861.jpg",
    },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ el: ".custom-pagination", clickable: true }} // 👈 custom div ব্যবহার করা হলো
        centeredSlides={true}
        slidesPerView={1.7}
        autoplay={{
          delay: 2500, // 2.5 seconds পর slide change
          disableOnInteraction: false, // user interaction থাকলেও autoplay চলবে
        }}
        loop={true}
        allowTouchMove={false}
        className="mySwiper h-[280px] sm:h-[350px] lg:h-[400px]"
        breakpoints={{
          0: {
            // 0px থেকে
            slidesPerView: 1, // mobile → 1 slide
            centeredSlides: false,
          },
          640: {
            // sm screen থেকে
            slidesPerView: 1.5,
            centeredSlides: true,
          },
          1024: {
            // lg screen থেকে
            slidesPerView: 1.7,
            centeredSlides: true,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.href} className="block w-full h-full">
              <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination বাইরে রাখা হলো */}
      <div className="custom-pagination flex justify-center mt-6"></div>

      {/* Navigation Buttons */}
      <button className="p-3 font-bold swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20">
        ‹
      </button>
      <button className="p-3 font-bold swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20">
        ›
      </button>

      {/* Custom CSS */}
      <style jsx global>{`
        .mySwiper .swiper-slide {
          transition: all 0.4s ease;
          transform: scale(0.6);
          opacity: 0.6;
        }
        .mySwiper .swiper-slide-active {
          transform: scale(0.85);
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #2563eb; /* তোমার primary color */
          transform: scale(1.4);
        }
      `}</style>
    </div>
  );
}
