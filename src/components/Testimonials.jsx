"use client";

import { useTranslations } from "next-intl";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState } from "react";

import LeftArrowIcon from "./icons/LeftArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import TesttimonialItem from "./TestimonialItem";

const Testimonials = () => {
  // const swiper = useSwiper();
  const t = useTranslations("testimonials");

  const [swiper, setSwiper] = useState(null);

  const leftShiftHandler = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const rightShiftHandler = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <div data-aos="zoom-in-up" className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <TesttimonialItem
            imgSrc={"/images/testimoni-user-1.png"}
            message={t("reviews.0.message")}
            name={t("reviews.0.name")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TesttimonialItem
            imgSrc={"/images/testimoni-user-2.png"}
            message={t("reviews.1.message")}
            name={t("reviews.1.name")}
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 z-20 flex w-[152px] items-center gap-6 ltr:right-6 rtl:left-6">
        <button
          onClick={leftShiftHandler}
          className="flex h-16 w-16 rtl:rotate-180 ltr:rotate-0 items-center justify-center rounded-full border-2 border-grey bg-lightGrey"
        >
          <LeftArrowIcon />
        </button>

        <button
          onClick={rightShiftHandler}
          className="flex h-16 w-16 rtl:rotate-0 ltr:rotate-180 items-center justify-center rounded-full border-2 border-grey bg-lightGrey"
        >
          <LeftArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
