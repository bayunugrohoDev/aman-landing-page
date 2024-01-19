import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import Image from "next/image";

const Layout = (props) => {
  return (
    <Container
      className={`relative z-20 mb-[100px] rounded-2xl  bg-white overflow-x-auto ${
        props.className ? props.className : ""
      }`}
    >
      <div className="flex flex-col gap-16 p-8 md:gap-32 md:p-16 ">
        {props.children}
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
