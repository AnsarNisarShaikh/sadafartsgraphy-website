"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const sliderData = [
  {
    ID: "1",
    imageSrc: "/images/home/slide-1.png",
  },
  {
    ID: "2",
    imageSrc: "/images/home/slide-2.png",
  },
  {
    ID: "3",
    imageSrc: "/images/home/slide-3.png",
  },
  //   {
  //     ID: "4",
  //     imageSrc: "/images/home/slide-4.png",
  //   },
  //   {
  //     ID: "5",
  //     imageSrc: "/images/home/slide-5.png",
  //   },
  //   {
  //     ID: "6",
  //     imageSrc: "/images/home/slide-6.png",
  //   },
];

const BannerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect={"fade"}
        modules={[EffectFade, Scrollbar, A11y, Autoplay]}
        speed={500}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // navigation
        className="px-5"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.ID}>
            <div className={` `}>
              <Image
                src={slide.imageSrc}
                className="w-full h-auto sm:h-screen -z-10"
                fill
                priority   // 🚀 ensures it loads immediately
                // quality={90}
                alt="slider"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;
