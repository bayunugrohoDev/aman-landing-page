import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex gap-[27px] bg-blazerBlue p-16 rounded-2xl">
      <div className="flex flex-col w-1/2 text-white gap-6">
        <h3 className="text-[32px]">
          <span className="font-bold"> Get in</span> touch
        </h3>
        <div className="flex flex-col gap-6 font-medium text-white">
          <div className="flex flex-col text-[20px]">
            <p>CALL US AT </p>
            <p>12345698 </p>
          </div>
          <div className="flex flex-col text-[20px]">
            <p> WE CAN CALL YOU </p>
            <p> Call me back </p>
          </div>
          <div className="flex flex-col text-[20px]">
            <p>EMAIL US DIRECTLY </p>
            <p>info@aman-iq.com </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-1/2 ">
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
