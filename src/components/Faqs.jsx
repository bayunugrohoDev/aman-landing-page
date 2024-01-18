"use client";

import { useTranslations } from "next-intl";
import { Disclosure } from "@headlessui/react";

import { faqData } from "@/constants/data";
import PlusIcon from "./icons/PlusIcon";

const Faqs = () => {
  const t = useTranslations("faqs");
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-[38px] font-bold leading-10"> {t("title")}</h2>
      {/* faq 1 */}
      <div className="w-full rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-16 py-8 bg-lightGrey rounded-2xl text-[22px] text-black">
                  <span>{t("faq1.question")}</span>
                  <PlusIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="px-16 py-8 text-darkGrey">
                  {t("faq1.answer")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      {/* faq 2 */}
      <div className="w-full rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-16 py-8 bg-lightGrey rounded-2xl text-[22px] text-black">
                  <span>{t("faq2.question")}</span>
                  <PlusIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="px-16 py-8 text-darkGrey">
                  {t("faq2.answer")}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      {/* faq 3 */}
      <div className="w-full rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-16 py-8 bg-lightGrey rounded-2xl text-[22px] text-black">
                  <span>{t("faq3.question")}</span>
                  <PlusIcon />
                </Disclosure.Button>
                <Disclosure.Panel className="px-16 py-8 text-darkGrey">
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
