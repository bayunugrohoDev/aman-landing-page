import React from "react";
import FbIcon from "./icons/FbIcon";
import LinkInIcon from "./icons/LinkInIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="w-full flex flex-col p-8 gap-8 md:p-16 md:gap-16 bg-prussianBlue rounded-b-2xl">
      {/* Head Office Section */}
      <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
        <p className="font-bold text-white">{t("headOffice.title")}</p>
        <p>{t("headOffice.company")}</p>
        <p>{t("headOffice.building")}</p>
        <p>{t("headOffice.street")}</p>
        <p>{t("headOffice.city")}</p>
        <p>{t("headOffice.country")}</p>
      </div>

      {/* Follow Us Section */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-[128px]">
        <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
          <p className="font-bold text-white">{t("followUs.title")}</p>
          <div className="flex gap-4">
            <a href={t("followUs.socialMedia.0.link")}>
              <FbIcon />
            </a>
            <a href={t("followUs.socialMedia.1.link")}>
              <LinkInIcon />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
          <p className="font-bold text-white">{t("company.title")}</p>
          <p>{t("company.aboutUs")}</p>
          <p>{t("company.executiveTeam")}</p>
          <p>{t("company.partners")}</p>
        </div>

        {/* Careers Section */}
        <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
          <p className="font-bold text-white">{t("careers.title")}</p>
          <p>{t("careers.jobOpenings")}</p>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        <div className="flex gap-2 md:gap-8 text-white text-md font-medium flex-col md:flex-row ">
          <Link href={t("links.staffLogin")}>{t("links.staffLogin")}</Link>
          <Link href={t("links.privacyPolicy")}>
            {t("links.privacyPolicy")}
          </Link>
          <Link href={t("links.sitemap")}>{t("links.sitemap")}</Link>
        </div>
        <div className="text-white text-md font-medium">{t("copyright")}</div>
      </div>
    </div>
  );
};

export default Footer;
