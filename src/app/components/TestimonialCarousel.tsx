"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Swiper as SwiperType } from "swiper";
import Testimonial from "./Testimonial";

export default function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="relative mx-7 mb-20 md:mx-0">
      {" "}
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
          850: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Testimonial
            imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
            name={"James Bond"}
            title={"CEO of BBF"}
            description={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
            name={"James Bond"}
            title={"CEO of BBF"}
            description={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
            name={"James Bond"}
            title={"CEO of BBF"}
            description={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
            name={"James Bond"}
            title={"CEO of BBF"}
            description={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
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
