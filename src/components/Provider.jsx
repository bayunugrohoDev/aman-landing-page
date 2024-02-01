"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { AOSInit } from "./AOSInit";

import { usePathname } from "../../navigation";

const Provider = ({ children }) => {
  const pathname = usePathname();

  return (
    <body
      className={`bg-lightGrey ${pathname != "/" ? "bg-beige-top" : pathname} `}
    >
      <div>
        <AOSInit />
        {children}
        <ProgressBar
          height="4px"
          color="#003153"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </div>
    </body>
  );
};

export default Provider;
