import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Support({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />

      <Container
        className={`relative z-20 bg-white rounded-2xl mt-12 mb-[100px] md:top-[76px]`}
      >
        <div className="h-[430px] w-full bg-blue-100 relative">
          <Image
            src="/images/support-hero.png"
            alt="profile"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover"
          ></Image>
        </div>

        <div className="flex flex-col gap-32 p-16 pt-0 ">
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
                  Submitting a claim with Aman Insurance is quick and
                  hassle-free; just a few clicks online or a simple phone call,
                  and we'll guide you through every step with care and
                  efficiency
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
          <div className="px-[96px] py-16 bg-lightGrey rounded-2xl">
            <div className="flex flex-col gap-8">
              <form>
                <div className="grid grid-cols-2 gap-12">
                  <div className="flex col-span-2">
                    <h4 className="text-[32px]">
                      Make a <b>Claim</b>
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-darkGrey font-bold">Name</label>
                    <input
                      type="text"
                      placeholder="Your first and lastname"
                      className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-darkGrey font-bold">
                      insurance number
                    </label>
                    <input
                      type="text"
                      placeholder="Your insurance number"
                      className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-darkGrey font-bold">Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-darkGrey font-bold">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="+961 7XX XXX XXXX"
                      className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="text-darkGrey font-bold">
                      Claim Details
                    </label>
                    <textarea
                      className="w-full bg-white text-grey p-3 rounded-lg"
                      placeholder="To help us process your claim quickly and efficiently, please provide us with detailed information about the incident, including the date, location, and any relevant details. The more comprehensive the information, the easier it will be for us to assist you."
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex justify-end col-span-2">
                    <button className="py-[10px] px-6 bg-blazerBlue text-white font-bold rounded-full">
                      Make a Claim
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* quote  */}
          <div className="flex gap-12 w-full">
            <div className=" w-[370px]">
              <Image
                height={300}
                width={300}
                src={"/images/quote-user.png"}
                alt="img"
                className=""
              ></Image>
            </div>
            <SectionTitle
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
                  <button className="py-[10px] px-6 bg-blazerBlue text-white font-bold rounded-full">
                    Get a Quote
                  </button>
                </div>
              }
            />
          </div>
          <div className="py-0"></div>
          <ContactUs />
        </div>
        <Footer />
      </Container>
    </>
  );
}
