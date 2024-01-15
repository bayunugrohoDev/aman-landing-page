import Image from "next/image";
import React from "react";

const Benefits = () => {
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
          <h5 className="text-[38px] text-black ">
            Easy like <span className="font-bold">1, 2, 3</span>
          </h5>
          <p className="text-[22px] ">
            Submitting a claim with Aman Insurance is quick and hassle-free;
            just a few clicks online or a simple phone call, and we'll guide you
            through every step with care and efficiency
          </p>

          <button className="bg-prussianBlue rounded-full text-white py-[10px] px-6 text-nd font-bold w-max">
            Submit a Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
