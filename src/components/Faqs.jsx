"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import PlusIcon from "./icons/PlusIcon";

const Faqs = () => {
  const t = useTranslations("faqs");
  const [isOpenAll, setIsOpenAll] = useState(false);
  const [faqStates, setFaqStates] = useState({});

  const togglePanel = (faqId) => {
    setFaqStates((prevState) => ({
      ...prevState,
      [faqId]: !prevState[faqId],
    }));
    setIsOpenAll(false);
  };

  const handleViewAllClick = () => {
    setIsOpenAll((prevState) => !prevState);
    setFaqStates((prevState) => {
      const newState = {};
      for (const key in prevState) {
        newState[key] = !prevState[key] || !isOpenAll;
      }
      return newState;
    });
  };

  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="flex items-center justify-between">
        <h2
          data-aos="zoom-in"
          className="text-2xl font-bold leading-10 md:text-[38px]"
        >
          {" "}
          {t("title")}
        </h2>
        <button
          data-aos="zoom-in"
          onClick={handleViewAllClick}
          className="text-md font-semibold text-darkGrey"
        >
          {t("btnViewAll")}
        </button>
      </div>

      {/* FAQ 1 */}
      <div className="w-full rounded-2xl">
        <div className="mb-5">
          <button
            onClick={() => togglePanel("faq1")}
            className="flex w-full items-center justify-between rounded-2xl bg-lightGrey p-4 text-[22px] text-black md:px-16 md:py-8"
          >
            <span>{t("faq1.question")}</span>
            <PlusIcon />
          </button>
          <div
            className={`p-4 text-darkGrey md:px-16 md:py-8 ${faqStates["faq1"] || isOpenAll ? "block" : "hidden"}`}
          >
            "{t("faq1.answer")}"
          </div>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="w-full rounded-2xl">
        <div className="mb-5">
          <button
            onClick={() => togglePanel("faq2")}
            className="flex w-full items-center justify-between rounded-2xl bg-lightGrey p-4 text-[22px] text-black md:px-16 md:py-8"
          >
            <span>{t("faq2.question")}</span>
            <PlusIcon />
          </button>
          <div
            className={`p-4 text-darkGrey md:px-16 md:py-8 ${faqStates["faq2"] || isOpenAll ? "block" : "hidden"}`}
          >
            "{t("faq2.answer")}"
          </div>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="w-full rounded-2xl">
        <div className="mb-5">
          <button
            onClick={() => togglePanel("faq3")}
            className="flex w-full items-center justify-between rounded-2xl bg-lightGrey p-4 text-[22px] text-black md:px-16 md:py-8"
          >
            <span>{t("faq3.question")}</span>
            <PlusIcon />
          </button>
          <div
            className={`p-4 text-darkGrey md:px-16 md:py-8 ${faqStates["faq3"] || isOpenAll ? "block" : "hidden"}`}
          >
            "{t("faq3.answer")}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
