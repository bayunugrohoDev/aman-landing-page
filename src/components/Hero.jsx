import React from "react";
import Container from "./Container";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <div className="bg-hero relative bg-cover  bg-center">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <Container className="absolute inset-0 flex items-center p-8 md:p-16 ">
        <div className="z-10 text-white md:w-[620px]">
          <h1
            data-aos="fade-right"
            className="mb-4 text-5xl font-bold md:text-[78px] md:leading-[78px]"
          >
            {t("title")}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="200"
            className="mt-4 text-xl font-medium md:w-[542px]"
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          ></p>
          <button
            data-aos="fade-down"
            data-aos-delay="400"
            className="mt-6 rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white"
          >
            {t("btnText")}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
