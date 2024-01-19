"use client";

import { useTranslations } from "next-intl";
import { Disclosure } from "@headlessui/react";

import { faqData } from "@/constants/data";
import PlusIcon from "./icons/PlusIcon";

const Faqs = () => {
  const t = useTranslations("faqs");
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <h2
        data-aos="zoom-in"
        className="text-2xl font-bold leading-10 md:text-[38px]"
      >
        {" "}
        {t("title")}
      </h2>
      {/* faq 1 */}
      <div data-aos="zoom-in-up" className="w-full rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-2xl bg-lightGrey p-4 text-[22px] text-black md:px-16 md:py-8">
                  <span>{t("faq1.question")}</span>
                  <PlusIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 text-darkGrey md:px-16 md:py-8">
                  {t("faq1.answer")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      {/* faq 2 */}
      <div data-aos="zoom-in-up" className="w-full rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-2xl bg-lightGrey p-4 text-[22px] text-black md:px-16 md:py-8">
                  <span>{t("faq2.question")}</span>
                  <PlusIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 text-darkGrey md:px-16 md:py-8">
                  {t("faq2.answer")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      {/* faq 3 */}
      <div data-aos="zoom-in-up" className="w-full rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-2xl bg-lightGrey p-4 text-[22px] text-black md:px-16 md:py-8">
                  <span>{t("faq3.question")}</span>
                  <PlusIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 text-darkGrey md:px-16 md:py-8">
                  {t("faq3.answer")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
