"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import LeftArrowIcon from "./icons/LeftArrowIcon";
const reviews = [
  {
    img: "/images/testimoni-user-1.png",
    text: "Our family feels secure knowing Aman Insurance has our back. Their honest approach and reliable coverage give us peace of mind in our    daily lives.",
    name: "Amina M, Erbil",
  },
  {
    img: "/images/testimoni-user-1.png",
    text: "Best insurance ever.",
    name: "Hana N.",
  },
];

const Testimonials = () => {
  const t = useTranslations("testimonials");

  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) setIndex(reviews.length - 1);
    else setIndex(index - 1);
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) setIndex(0);
    else setIndex(index + 1);
  }

  return (
    <div className="transition-all duration-700 relative">
      <div className={`w-full flex flex-col `}>
        <div className="w-full flex gap-6 px-16 ">
          <div className=" min-w-[114px] relative">
            <Image
              width="114"
              height="96"
              src={`/images/testimoni-bg-user.png`}
              alt="bg blue testimoni user"
              className=""
            ></Image>
            <Image
              width="96"
              height="96"
              src={"/images/testimoni-user-1.png"}
              alt="testimoni 1"
              className="absolute top-2 left-2"
            ></Image>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-[582px]">
            <p className="text-[22px]">{t("reviews.0.message")}</p>
            <p className="text-md">{t("reviews.0.name")}</p>
          </div>
        </div>
        {/* <div className="w-full flex gap-6 px-16 ">
          <div className=" min-w-[114px] relative">
            <Image
              width="114"
              height="96"
              src={`/images/testimoni-bg-user.png`}
              alt="bg blue testimoni user"
              className=""
            ></Image>
            <Image
              width="96"
              height="96"
              src={"/images/testimoni-user-1.png"}
              alt="testimoni 1"
              className="absolute top-2 left-2"
            ></Image>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-[582px]">
            <p className="text-[22px]">{t("reviews.1.message")}</p>
            <p className="text-md">{t("reviews.1.name")}</p>
          </div>
        </div> */}
      </div>
      {/* button  */}
      <div className="flex items-center gap-6 absolute w-[152px] top-0 ltr:right-6 rtl:left-6">
        <button
          onClick={rightShiftHandler}
          className="bg-lightGrey w-16 h-16 border-2 border-grey rounded-full flex items-center justify-center"
        >
          <LeftArrowIcon />
        </button>

        <button
          onClick={leftShiftHandler}
          className="bg-lightGrey w-16 h-16 border-2 border-grey rounded-full flex items-center justify-center rotate-180"
        >
          <LeftArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
