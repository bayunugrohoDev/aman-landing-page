"use client";

import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";

import { faqData } from "@/constants/data";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-[38px] font-bold leading-10">FAQ'S</h2>
      <div className="w-full rounded-2xl">
        {faqData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-16 py-8 bg-lightGrey rounded-2xl text-[22px] text-black">
                    <span>{item.question}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#A0A0A0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#A0A0A0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-16 py-8 text-darkGrey">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
