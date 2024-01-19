import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Benefits from "@/components/Benefits";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("section_titles.home");

  return (
    <>

      <Navbar />

      <Hero />

      <Main className="mt-[-90px] ">
        {/* Why should you buy a car insurance policy? */}
        <SectionTitle
          title={
            <span
              dangerouslySetInnerHTML={{ __html: t.raw("title1") }}
            ></span>
          }
          content={<Video />}
        />

        {/* What people are saying about us */}
        <SectionTitle
          title={
            <span
            dangerouslySetInnerHTML={{ __html: t.raw("title2") }}
          ></span>
          }
          content={<Testimonials />}
        />

        {/* Benefits of being an Aman member */}
        <SectionTitle
          title={
            <span
            dangerouslySetInnerHTML={{ __html: t.raw("title3") }}
          ></span>
          }
          content={<Video />}
        />

        {/* benefits  */}
        <Benefits />

        {/* faqs */}
        <Faqs />

        {/* contact us  */}
        <ContactUs />
      </Main>
    </>
  );
}
