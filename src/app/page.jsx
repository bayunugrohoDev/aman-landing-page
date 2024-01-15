import Benefits from "@/components/Benefits";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Layout className="mt-[-90px] ">
        <SectionTitle
          title={
            <>
              Insuring Iraq: <span className="font-bold"> Beyond</span> the
              Road, <br /> and the <span className="font-bold"> Law</span>
            </>
          }
          content={<Video />}
        />

        <SectionTitle
          title={
            <>
              <span className="font-bold">Real</span> Stories, Genuine{" "}
              <span className="font-bold">Trust</span>: <br /> Our Customers
              Speak
            </>
          }
          content={<Testimonials />}
        />

        <SectionTitle
          title={
            <>
              Transform uncertainty into{" "}
              <span className="font-bold">Certainty</span>: <br />
            </>
          }
          content={<Video />}
        />

        {/* benefits  */}
        <Benefits/>

        {/* faqs */}
        <Faqs />

        {/* contact us  */}
        <ContactUs />
      </Layout>
    </>
  );
}
