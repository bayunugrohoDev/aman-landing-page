"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { AOSInit } from "./AOSInit";

import { usePathname } from "../../navigation";

const Provider = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={`${pathname != "/" ? "bg-beige-top" : pathname} `}>
      <AOSInit />
      {children}
      <ProgressBar
        height="4px"
        color="#003153"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};

export default Provider;
