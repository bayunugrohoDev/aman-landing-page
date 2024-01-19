import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { unstable_setRequestLocale } from "next-intl/server";
import Main from "@/components/Main";
import FormCard from "@/components/FormCard";
import Input from "@/components/Input";

export default function Support({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />

      <Main
        className="top-[76px] mt-6 md:mt-12"
        topImage="/images/support-hero.png"
      >
        <SectionTitle
          title={
            <>
              I need <span className="font-bold"> Support</span>
            </>
          }
          content={
            <div className="text-[22px]">
              <p>
                <b> Hello from Aman Insurance</b> – Your Friendly Neighbor in
                the World of Protection.
              </p>
              <br />
              <p>
                Submitting a claim with Aman Insurance is quick and hassle-free;
                just a few clicks online or a simple phone call, and we'll guide
                you through every step with care and efficiency
              </p>
              <br />

              <p>
                Enter your information below for your claim enquiry, and our
                team will reach out within hours to assist with your enquiry.
              </p>
            </div>
          }
        />
        {/* form  */}
        <FormCard>
          <form>
            <div className="grid grid-cols-2 gap-12">
              <div className="col-span-2 flex">
                <h4 className="text-[32px]">
                  Make a <b>Claim</b>
                </h4>
              </div>
              {/* <div className="flex flex-col gap-1">
                <label className="font-bold text-darkGrey">Name</label>
                <input
                  type="text"
                  placeholder="Your first and lastname"
                  className="rounded-2xl bg-white px-4 py-3 placeholder:text-grey"
                />
              </div> */}

              <Input label="Name" placeholder="Your first and lastname"></Input>

              <Input
                label="Insurance number"
                placeholder="Your insurance number"
              ></Input>

              <Input
                type="email"
                label="Email"
                placeholder="Your Email"
              ></Input>

              <Input
                label="Phone number"
                placeholder="+961 7XX XXX XXXX"
              ></Input>

              <div className="col-span-2 flex flex-col">
                <label className="font-bold text-darkGrey">Claim Details</label>
                <textarea
                  className="w-full rounded-lg bg-white p-3 text-grey"
                  placeholder="To help us process your claim quickly and efficiently, please provide us with detailed information about the incident, including the date, location, and any relevant details. The more comprehensive the information, the easier it will be for us to assist you."
                  rows="5"
                ></textarea>
              </div>
              <div className="col-span-2 flex justify-end">
                <button className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white">
                  Make a Claim
                </button>
              </div>
            </div>
          </form>
        </FormCard>

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
              <>
                Not a customer? <br />
                Make a <span className="font-bold"> Quote</span> today
              </>
            }
            content={
              <div className="text-[22px]">
                <p>
                  At Aman Insurance, we believe in clear, straightforward
                  pricing that you can trust.{" "}
                </p>
                <br />
                <button className="rounded-full bg-blazerBlue px-6 py-[10px] font-bold text-white">
                  Get a Quote
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
