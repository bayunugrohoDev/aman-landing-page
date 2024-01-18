import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const t = useTranslations("benefits");

  return (
    <div className="flex items-center gap-12">
      <div className="relative w-1/2">
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
      <div className="w-1/2 flex items-center">
        <div className="flex flex-col gap-8">
          <h5
            className="text-[38px] text-black "
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          >
          </h5>
          <p className="text-[22px] ">
          {t("description")}
          </p>

          <button className="bg-prussianBlue rounded-full text-white py-[10px] px-6 text-nd font-bold w-max">
          {t("btnText")}

          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
