import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
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
    </>
  );
}
