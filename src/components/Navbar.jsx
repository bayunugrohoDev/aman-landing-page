"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { Link, usePathname } from "../../navigation";

import SupportIcon from "./icons/SupportIcon";
import BurgerIcon from "./icons/BurgerIcon";

const logo_resolutions = {
  en: {
    width: 138.95,
    height: 35,
  },
  ar: {
    width: 106.05,
    height: 42.52,
  },
  ku: {
    width: 123.72,
    height: 37.45,
  },
};

const Navbar = ({ className = "" }) => {
  const currentLocal = useLocale();
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={`fixed top-0 z-40 w-full bg-white shadow ${className}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 ">
        <Link href="/" className="flex items-center gap-1">
          <Image
            height={logo_resolutions[currentLocal].height}
            width={logo_resolutions[currentLocal].width}
            src={`/images/logo_${currentLocal}.svg`}
            alt="Aman Logo"
          />
          {/* <span className="self-center whitespace-nowrap pt-2 text-3xl font-bold">
            {t("title")}
          </span> */}
        </Link>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          onClick={handleToggleClick}
        >
          <span className="sr-only">Open main menu</span>
          {/* burger  */}
          <BurgerIcon />
        </button>
        <div
          className={`absolute top-14 h-screen w-full transition-all  md:relative md:!right-0 md:top-0 md:block md:h-full md:w-auto md:transition-none md:duration-0 ${
            open
              ? `ltr:right-0 rtl:left-0`
              : `ltr:right-[-100%] rtl:left-[-100%]`
          }`}
          id="navbar-default"
        >
          <ul className="mt-4 flex h-screen flex-col items-center justify-center gap-12 border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:h-auto md:flex-row md:gap-8  md:rounded-lg md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className={`rounded-lg px-4 py-2  text-xl font-semibold leading-normal transition-all duration-300 ease-in-out hover:bg-blazerBlue hover:text-white md:text-md ${
                  pathname == "/" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`rounded-lg px-4 py-2 text-xl font-semibold leading-normal text-black transition-all duration-300 ease-in-out hover:bg-blazerBlue hover:text-white md:text-md ${
                  pathname == "/about" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className={`rounded-lg px-4 py-2 text-xl font-semibold leading-normal text-black transition-all duration-300 ease-in-out hover:bg-blazerBlue hover:text-white md:text-md ${
                  pathname == "/quote" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.quote")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`rounded-lg px-4 py-2 text-xl font-semibold leading-normal text-black transition-all duration-300 ease-in-out hover:bg-blazerBlue hover:text-white md:text-md ${
                  pathname == "/contact" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                {t("menu.contact")}
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={` group gap-1 rounded-lg px-4 py-2 text-xl font-semibold leading-normal text-black transition-all duration-300 ease-in-out hover:bg-blazerBlue hover:text-white md:text-md ${
                  pathname == "/support" ? "bg-prussianBlue text-white" : ""
                }`}
              >
                <SupportIcon
                  color={pathname == "/support" ? "white" : "black"}
                />
                {t("menu.support")}
              </Link>
            </li>
            <li className="flex items-center gap-1 rtl:flex-row-reverse ">
              <Link
                href={pathname}
                locale="en"
                className={`${
                  currentLocal == "en" ? "font-bold" : ""
                } flex items-center gap-2 rounded-lg py-2 text-xl leading-normal text-black transition-all duration-300 ease-in-out hover:text-blazerBlue  md:text-md`}
              >
                EN
              </Link>
              <span>/</span>
              <Link
                href={pathname}
                locale="ku"
                className={`${
                  currentLocal == "ku" ? "font-bold" : ""
                } flex items-center gap-2 rounded-lg py-2 text-xl leading-normal text-black transition-all duration-300 ease-in-out hover:text-blazerBlue  md:text-md`}
              >
                کوردی
              </Link>
              <span>/</span>

              <Link
                href={pathname}
                locale="ar"
                className={`${
                  currentLocal == "ar" ? "font-bold" : ""
                } flex items-center gap-2 rounded-lg py-2 text-xl leading-normal text-black transition-all duration-300 ease-in-out hover:text-blazerBlue  md:text-md`}
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
