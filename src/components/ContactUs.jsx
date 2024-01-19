import Image from "next/image";
import React from "react";

import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("contact_us");
  return (
    <div data-aos="fade-down" className="flex gap-[27px] rounded-2xl bg-blazerBlue p-8 flex-col md:flex-row md:p-16">
      <div className="flex md:w-1/2 flex-col gap-6 text-white">
        <h3
          className="text-[32px]"
          dangerouslySetInnerHTML={{ __html: t.raw("title") }}
        ></h3>
        <div className="flex flex-col gap-6 font-medium text-white">
          <div className="flex flex-col text-[20px]">
            <p>{t("infoTitle1")} </p>
            <p>{t("infoDescription1")} </p>
          </div>
          <div className="flex flex-col text-[20px]">
            <p>{t("infoTitle2")} </p>
            <p>{t("infoDescription2")} </p>
          </div>
          <div className="flex flex-col text-[20px]">
            <p>{t("infoTitle3")} </p>
            <p>{t("infoDescription3")} </p>
          </div>
        </div>
      </div>
      <div className="flex md:w-1/2 items-center">
        <Image
          height={281}
          width={500}
          src={"/images/undraw_relaxing_at_home.png"}
          alt="img"
          className=""
        ></Image>
      </div>
    </div>
  );
};

export default ContactUs;
