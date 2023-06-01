"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Swiper as SwiperType } from "swiper";

import PrevWork from "./PrevWork";

export default function PrevWorksCarousel() {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="relative mx-7 mb-20 md:mx-0">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={90}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PrevWork
            imageSrc="/assets/Man has overwork and sitting with laptop and table lamp 1.png"
            title="IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PrevWork
            imageSrc="/assets/Man has overwork and sitting with laptop and table lamp 1.png"
            title="IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PrevWork
            imageSrc="/assets/Man has overwork and sitting with laptop and table lamp 1.png"
            title="IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PrevWork
            imageSrc="/assets/Man has overwork and sitting with laptop and table lamp 1.png"
            title="IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PrevWork
            imageSrc="/assets/Man has overwork and sitting with laptop and table lamp 1.png"
            title="IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY"
          />
        </SwiperSlide>
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="md:-left-18 absolute -left-12 top-[40%]  z-10  text-6xl lg:-left-20 "
      >
        <img alt="" src="/assets/next 2.png" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="md:-right-18 absolute -right-12 top-[40%]  z-10  text-6xl lg:-right-20"
      >
        {" "}
        <img alt="" src="/assets/next 1.png" />
      </button>
    </div>
  );
}
