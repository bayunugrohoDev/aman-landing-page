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

export default function Contact({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <Main
        className="top-[76px] mt-6 md:mt-12"
        topImage="/images/contact-hero.png"
      >
        <SectionTitle
          title={
            <>
              Get in <span className="font-bold"> Contact</span>
            </>
          }
          content={
            <div className="text-[22px]">
              <p>
                <b> CALL US AT </b> <br />
                12345698
              </p>
              <br />
              <p>
                <b> WE CAN CALL YOU </b> <br />
                <a href="" className="underline">
                  Call me back
                </a>
              </p>
              <br />
              <p>
                <b> EMAIL US DIRECTLY</b> <br />
                <a href="" className="underline">
                  info@aman-iq.com
                </a>
              </p>
            </div>
          }
        />
        {/* form  */}
        <FormCard>
          <form>
            <div className="grid grid-cols-2 gap-12">

              <Input
                label="Name"
                name="name"
                placeholder="Your first and lastname"
              />

              <Input
                label="insurance number"
                name="insurance"
                placeholder="Your insurance number"
              />

              <Input
                type="email"
                label="Email"
                name="email"
                placeholder="Your Email"
              />

              <Input
                label="Phone number"
                name="email"
                placeholder="+961 7XX XXX XXXX"
              />

              <div className="col-span-2 flex flex-col">
                <label className="font-bold text-darkGrey">Subject</label>
                <textarea
                  className="w-full rounded-lg bg-white p-3 text-grey"
                  placeholder="Tell us what you need help with"
                  rows="5"
                ></textarea>
              </div>
              <div className="col-span-2 flex justify-end">
                <button className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white">
                  Send Message
                </button>
              </div>
              <div className="col-span-2 flex justify-end">
                <p className="text-sm font-normal text-darkGrey">
                  * if you already a member of the Aman family.
                </p>
              </div>
            </div>
          </form>
        </FormCard>
        <ContactUs />
      </Main>
    </>
  );
}
