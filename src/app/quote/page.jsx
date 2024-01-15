import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";

export default function Quote() {
  return (
    <>
      <Navbar className="!sticky" />

      <Container
        className={`relative z-20 bg-white rounded-2xl mt-12 mb-[100px]`}
      >
        <div className="flex flex-col gap-32 p-16 ">
          <div className="flex gap-12 w-full">
            <SectionTitle
              className="w-full"
              title={
                <>
                  Get a <span className="font-bold"> Quote</span>
                </>
              }
              content={
                <div className="text-[22px]">
                  <p>
                    At Aman Insurance, we believe in clear, straightforward
                    pricing that you can trust. Our rates are carefully set
                    based on a thorough understanding of the local market,
                    ensuring fairness and affordability. Getting a quote from us
                    is as easy as it gets – just provide your vehicle's make and
                    model, along with a few personal details, and within a
                    minute, you'll have a transparent and tailored quote. No
                    hidden fees, no complicated jargon, just honest pricing that
                    makes sense for you. Experience the Aman difference, where
                    transparency leads the way
                  </p>

                  <br />
                  <p>
                    Fill in your details below, and we'll swiftly get in touch
                    with a personalized quote just for you!{" "}
                  </p>
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
          <div className="px-[96px] py-16 bg-lightGrey rounded-2xl">
            <div className="flex flex-col gap-8">
              <form>
                <div className="grid grid-cols-2 gap-12">
                  <div className="flex flex-col gap-1">
                    <label className="text-darkGrey font-bold">Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="px-4 py-3 bg-white rounded-2xl placeholder:text-grey"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-darkGrey font-bold">
                      Identity Documents
                    </label>
                    <input
                      type="file"
                      placeholder="Identity Documents"
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
                    <label className="text-darkGrey font-bold">Address</label>
                    <textarea
                      className="w-full bg-white text-grey p-3 rounded-lg"
                      placeholder="Building, Street Name, City, and Governate"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="text-darkGrey font-bold">Car Info</label>
                    <textarea
                      className="w-full bg-white text-grey p-3 rounded-lg"
                      placeholder="Brand, Model, Year and other things we need to know "
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex justify-end col-span-2">
                    <button className="py-[10px] px-6 bg-blazerBlue text-white font-bold rounded-full">
                      Get your Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ContactUs />
        </div>
        <Footer />
      </Container>
    </>
  );
}
