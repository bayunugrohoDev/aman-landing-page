import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import Image from "next/image";

const Main = (props) => {
  return (
    <Container
      className={` relative z-20 mb-[100px] max-w-[92%] overflow-x-auto rounded-2xl  bg-white md:container ${
        props.className ? props.className : ""
      }`}
    >
      {props.topImage && (
        <div className="relative h-[430px] w-full bg-blue-100">
          <Image
            src={props.topImage}
            alt="profile"
            objectFit="cover"
            fill
            className="left-0 top-0 h-full w-full object-cover"
          ></Image>
        </div>
      )}
      <div className="flex flex-col gap-16 px-6 py-8 md:gap-32 md:p-16 ">
        {props.children}
      </div>
      <Footer />
    </Container>
  );
};

export default Main;
