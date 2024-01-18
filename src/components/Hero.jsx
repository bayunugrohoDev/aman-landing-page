import React from "react";
import Container from "./Container";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <div className="relative bg-cover bg-center  bg-hero">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <Container className="flex items-center p-16 absolute inset-0 ">
        <div className="md:w-[620px] text-white z-10">
          <h1 className="text-[78px] leading-[78px] font-bold mb-4">
            {t("title")}
          </h1>
          <p
            className="text-xl font-medium mt-4 md:w-[542px]"
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          ></p>
          <button className="bg-blazerBlue mt-6 text-white py-[10px] px-6 rounded-full font-bold">
            {t("btnText")}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
