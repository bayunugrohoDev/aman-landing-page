import Image from "next/image";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Main from "@/components/Main";
import FormSupport from "@/components/FormSupport";

export default function Support({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.support");

  return (
    <>
      <Navbar />

      <Main
        className="top-[76px] mt-6 md:mt-12"
        topImage="/images/support-hero.png"
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
        <FormSupport />

        {/* quote  */}
        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-12">
          <div data-aos="fade-right" className=" w-[370px]">
            <Image
              height={300}
              width={300}
              src={"/images/quote-user.png"}
              alt="img"
              className=""
            ></Image>
          </div>
          <SectionTitle
            data-aos="fade-left"
            className="w-full gap-8"
            title={
              <span
                dangerouslySetInnerHTML={{
                  __html: t.raw("title2"),
                }}
              ></span>
            }
            content={
              <div className="text-[22px]">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.raw("content2.paragraph1"),
                  }}
                ></p>
                <br />
                <button className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white"  dangerouslySetInnerHTML={{
                    __html: t.raw("content2.btnText"),
                  }}>
                  
                </button>
              </div>
            }
          />
        </div>
        <div className="py-0"></div>
        <ContactUs />
      </Main>
    </>
  );
}
