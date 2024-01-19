"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { AOSInit } from "./AOSInit";

const Provider = ({ children }) => {
  return (
    <>
      <AOSInit />
      {children}
      <ProgressBar
        height="4px"
        color="#003153"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Provider;
