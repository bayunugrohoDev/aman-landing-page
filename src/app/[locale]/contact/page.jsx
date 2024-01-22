import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Main from "@/components/Main";
import FormCard from "@/components/FormCard";
import Input from "@/components/Input";
import FormContact from "@/components/FormContact";

export default function Contact({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.contact");

  return (
    <>
      <Navbar />
      <Main
        className="top-[76px] mt-6 md:mt-12"
        topImage="/images/contact-hero.png"
      >
        <SectionTitle
          title={
            <span dangerouslySetInnerHTML={{ __html: t.raw("title") }}></span>
          }
          content={
            <div className="text-[22px]">
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("content.paragraph1"),
                }}
              ></p>
              <br />
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("content.paragraph2"),
                }}
              ></p>
              <br />
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("content.paragraph3"),
                }}
              ></p>
            </div>
          }
        />
        {/* form  */}
        <FormContact/>
        <ContactUs />
      </Main>
    </>
  );
}
