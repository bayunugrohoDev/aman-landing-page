import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import Image from "next/image";

const Layout = (props) => {
  return (
    <Container
      className={`relative z-20 bg-white rounded-2xl  mb-[100px] ${
        props.className ? props.className : ""
      }`}
    >
      <div className="flex flex-col gap-32 p-16 ">{props.children}</div>
      <Footer />
    </Container>
  );
};

export default Layout;
