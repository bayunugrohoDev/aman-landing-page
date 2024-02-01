import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";
import Main from "@/components/Main";

export default function About({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.about");
  return (
    <>
      <Navbar />

      <Main className="mt-6 md:mt-12 top-[76px]" topImage="/images/about-hero.png">
        <SectionTitle
          title={
            <span dangerouslySetInnerHTML={{ __html: t.raw("title") }}></span>
          }
          content={
            <div
              className="text-[22px] md:max-w-[720px]"
              // dangerouslySetInnerHTML={{ __html: t.raw("aboutContent1") }}
            >
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
              <br />
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw("content.paragraph4"),
                }}
              ></p>
            </div>
          }
        />
        <div className="py-0"></div>
        <ContactUs />
      </Main>
      {/* <Container
        className={`relative top-8 z-20 mb-[100px] mt-20 max-w-[92%] overflow-hidden rounded-2xl bg-white md:container md:top-[76px]`}
      >
        <div className="relative h-[430px] w-full bg-blue-100">
          <Image
            src="/images/about-hero.png"
            alt="profile"
            objectFit="cover"
            fill
            className="left-0 top-0 h-full w-full object-cover"
          ></Image>
        </div>

        <div className="flex flex-col gap-16 px-4 py-8 pt-0 md:gap-32 md:p-16 ">
          <SectionTitle
            title={
              <span dangerouslySetInnerHTML={{ __html: t.raw("title") }}></span>
            }
            content={
              <div
                className="text-[22px]"
                // dangerouslySetInnerHTML={{ __html: t.raw("aboutContent1") }}
              >
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
                <br />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.raw("content.paragraph4"),
                  }}
                ></p>
              </div>
            }
          />
          <div className="py-0"></div>
          <ContactUs />
        </div>
        <Footer />
      </Container> */}
    </>
  );
}
