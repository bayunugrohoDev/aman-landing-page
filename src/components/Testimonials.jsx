"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
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
    <div className="transition-all duration-700">
      <div className={`w-full flex gap-6 px-16 `}>
        <div className="relative min-w-[114px]">
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
            src={reviews[index].img}
            alt="testimoni 1"
            className="absolute top-2 left-2"
          ></Image>
        </div>
        <div className="flex flex-col gap-6 w-auto">
          <p className="text-[22px]">{reviews[index].text}</p>
          <p className="text-md">{reviews[index].name}</p>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={rightShiftHandler}
            className="bg-lightGrey w-16 h-16 border-2 border-grey rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19 12.5H5"
                stroke="#A0A0A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19.5L5 12.5L12 5.5"
                stroke="#A0A0A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={leftShiftHandler}
            className="bg-lightGrey w-16 h-16 border-2 border-grey rounded-full flex items-center justify-center rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19 12.5H5"
                stroke="#A0A0A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19.5L5 12.5L12 5.5"
                stroke="#A0A0A0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
