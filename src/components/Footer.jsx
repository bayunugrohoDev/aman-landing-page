import React from "react";
import FbIcon from "./icons/FbIcon";
import LinkInIcon from "./icons/LinkInIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="flex w-full flex-col items-center gap-8 rounded-b-2xl bg-prussianBlue p-8 text-center md:items-start md:gap-16 md:p-16 md:text-left">
      {/* Head Office Section */}
      <div className="flex flex-col items-center gap-2 text-center text-md  font-medium text-lightGrey md:items-start md:text-left">
        <p className="font-bold  text-white">{t("headOffice.title")}</p>
        <p>{t("headOffice.company")}</p>
        <p>{t("headOffice.building")}</p>
        <p>{t("headOffice.street")}</p>
        <p>{t("headOffice.city")}</p>
        <p>{t("headOffice.country")}</p>
      </div>

      {/* Follow Us Section */}
      <div className="flex flex-col items-center  gap-6 text-center md:flex-row md:items-start md:gap-[128px] md:text-left">
        <div className="flex flex-col items-center gap-2 text-center text-md font-medium text-lightGrey md:items-start md:text-left">
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
        <div className="flex flex-col items-center gap-2 text-center text-md font-medium text-lightGrey md:items-start md:text-left">
          <p className="font-bold text-white">{t("company.title")}</p>
          <p>{t("company.aboutUs")}</p>
          <p>{t("company.executiveTeam")}</p>
          <p>{t("company.partners")}</p>
        </div>

        {/* Careers Section */}
        <div className="flex flex-col items-center gap-2 text-center text-md font-medium text-lightGrey md:items-start md:text-left">
          <p className="font-bold text-white">{t("careers.title")}</p>
          <p>{t("careers.jobOpenings")}</p>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-start md:gap-0 md:text-left">
        <div className="flex flex-col items-center gap-2 text-center text-md font-medium text-white md:flex-row md:items-start md:gap-8 md:text-left ">
          <Link href={t("links.staffLogin")}>{t("links.staffLogin")}</Link>
          <Link href={t("links.privacyPolicy")}>
            {t("links.privacyPolicy")}
          </Link>
          <Link href={t("links.sitemap")}>{t("links.sitemap")}</Link>
        </div>
        <div className="text-md font-medium text-white">{t("copyright")}</div>
      </div>
    </div>
  );
};

export default Footer;
