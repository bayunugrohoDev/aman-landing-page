import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import FormQuote from "@/components/FormQuote";

export default function Quote({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.quote");

  return (
    <>
      <Navbar />

      <Container
        className={`relative z-20 bg-white rounded-2xl mt-12 mb-[100px] md:top-[76px]`}
      >
        <div className="flex flex-col gap-32 p-16 ">
          <div className="flex gap-12 w-full">
            <SectionTitle
              className="w-full"
              title={
                <span
                  dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                ></span>
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
            <div className="relative w-[370px]">
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
                className="relative z-10 top-5"
              ></Image>
            </div>
          </div>
          {/* form  */}
          <FormQuote/>
          <ContactUs />
        </div>
        <Footer />
      </Container>
    </>
  );
}
