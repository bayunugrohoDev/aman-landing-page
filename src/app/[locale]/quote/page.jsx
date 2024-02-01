import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import FormQuote from "@/components/FormQuote";
import Main from "@/components/Main";

export default function Quote({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.quote");

  return (
    <>
      <Navbar />

      <Main className="top-[76px] mt-6 md:mt-12">
        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-12">
          <SectionTitle
            className="w-full"
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
              </div>
            }
          />
          <div data-aos="fade-up" className="relative w-full md:w-[370px]">
            <Image
              width="422"
              height="356"
              src={`/images/quote-bg-user.png`}
              alt="bg blue testimoni user"
              className="absolute top-2 z-0"
            ></Image>
            <Image
              height={370}
              width={370}
              src={"/images/quote-user.png"}
              alt="img"
              className="relative top-5 z-10"
            ></Image>
          </div>
        </div>
        {/* form  */}
        <FormQuote />
        <ContactUs />
      </Main>
    </>
  );
}
