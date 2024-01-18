import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";

export default function About({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.about");
  return (
    <>
      <Navbar className="!sticky" />

      <Container
        className={`relative z-20 bg-white rounded-2xl mt-12 mb-[100px]`}
      >
        <div className="h-[430px] w-full bg-blue-100 relative">
          <Image
            src="/images/about-hero.png"
            alt="profile"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover"
          ></Image>
        </div>

        <div className="flex flex-col gap-32 p-16 pt-0 ">
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
                >
                </p>
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
      </Container>
    </>
  );
}
