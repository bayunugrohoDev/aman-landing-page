"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { Link, usePathname } from "../../navigation";

import SupportIcon from "./icons/SupportIcon";

const Navbar = ({ className }) => {
  const currentLocal = useLocale();
  const pathname = usePathname();
  const t = useTranslations("navbar");

  return (
    <nav className={`bg-white shadow fixed top-0 z-40 w-full ${className}`}>
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-between ">
        <Link href="/" className="flex items-center gap-1">
          <Image
            height={35}
            width={35}
            src="/images/logo.svg"
            alt="Aman Logo"
          />
          <span className="self-center text-3xl font-bold whitespace-nowrap pt-2">
            {t("title")}
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          {/* burger  */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 items-center mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className={`font-semibold text-md leading-normal  px-4 py-2 rounded-lg ${
                  pathname == "/" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-semibold text-md leading-normal text-black px-4 py-2 rounded-lg ${
                  pathname == "/about" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className={`font-semibold text-md leading-normal text-black px-4 py-2 rounded-lg ${
                  pathname == "/quote" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.quote")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-semibold text-md leading-normal text-black px-4 py-2 rounded-lg ${
                  pathname == "/contact" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.contact")}
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`font-semibold flex gap-1 items-center text-md leading-normal text-black px-4 py-2 rounded-lg ${
                  pathname == "/support" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                <SupportIcon
                  color={pathname == "/support" ? "white" : "black"}
                />
                {t("menu.support")}
              </Link>
            </li>
            <li className="flex gap-1 items-center">
              <Link
                href={pathname}
                locale="en"
                className={`${
                  currentLocal == "en" ? "font-bold" : ""
                } text-md leading-normal text-black py-2 rounded-lg flex items-center gap-2`}
              >
                EN
              </Link>
              <span>/</span>
              <Link
                href={pathname}
                locale="ku"
                className={`${
                  currentLocal == "ku" ? "font-bold" : ""
                } text-md leading-normal text-black py-2 rounded-lg flex items-center gap-2`}
              >
                کوردی
              </Link>
              <span>/</span>

              <Link
                href={pathname}
                locale="ar"
                className={`${
                  currentLocal == "ar" ? "font-bold" : ""
                } text-md leading-normal text-black py-2 rounded-lg flex items-center gap-2`}
              >
                عربي
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
