import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const t = useTranslations("benefits");

  return (
    <div className="flex flex-col items-center gap-12 md:flex-row">
      <div data-aos="fade-right" className="relative md:w-1/2">
        <Image
          width="613"
          height="516"
          src={`/images/bg-blue-vector.png`}
          alt="bg blue testimoni user"
          className="absolute bottom-0 z-0"
        ></Image>
        <Image
          height={535}
          width={515}
          src={"/images/undraw_family.png"}
          alt="img"
          className="relative z-10"
        ></Image>
      </div>
      <div data-aos="fade-left" className="flex items-center md:w-1/2">
        <div className="flex flex-col gap-8">
          <h5
            className="text-2xl text-black md:text-[38px] "
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          ></h5>
          <p className="text-[22px] ">{t("description")}</p>

          <button className="text-nd w-max rounded-full bg-prussianBlue px-6 py-[10px] font-bold text-white">
            {t("btnText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
