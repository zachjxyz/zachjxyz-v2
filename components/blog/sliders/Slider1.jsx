"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  {
    src: "/assets/images/portfolio/full-project-1.jpg",
    alt: "Image Description",
  },
  {
    src: "/assets/images/portfolio/full-project-2.jpg",
    alt: "Image Description",
  },
  {
    src: "/assets/images/portfolio/full-project-3.jpg",
    alt: "Image Description",
  },
];
import Image from "next/image";
export default function Slider1() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".snbp1",
          nextEl: ".snbn1",
        }}
        watchSlidesProgress
        resizeObserver
        className="clearlist content-slider owl-carousel owl-theme overflow-hidden"
        style={{
          opacity: 1,
          display: "block",
        }}
        pagination={{
          el: ".sp1",
          clickable: true,
          bulletActiveClass: "active",
          renderBullet: (index, className) => {
            return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
          },
        }}
      >
        {/* Team item */}
        {images.map((image, index) => (
          <SwiperSlide className="owl-item" key={index}>
            <Image
              src={image.src}
              width={1350}
              height={865}
              alt="Image Description"
            />
          </SwiperSlide>
        ))}
        <div className="owl-controls clickable">
          <div className="owl-pagination sp1"></div>
          <div className="owl-buttons">
            <div className="owl-prev snbp1 " role="button" tabIndex="0">
              <span className="visually-hidden">Previous Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27px"
                height="57px"
                viewBox="0 0 27 57"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
              </svg>
            </div>
            <div className="owl-next snbn1" role="button" tabIndex="0">
              <span className="visually-hidden">Next Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27px"
                height="57px"
                viewBox="0 0 27 57"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* End Team item */}
      </Swiper>
    </>
  );
}
