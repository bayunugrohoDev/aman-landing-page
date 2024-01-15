import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <>
      <Navbar className="!sticky" />

      <Container
        className={`relative z-20 bg-white rounded-2xl mt-12 mb-[100px]`}
      >
        <div className="h-[430px] w-full bg-blue-100 relative">
          <Image
            src="/images/contact-hero.png"
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
                  <b>  WE CAN CALL YOU </b> <br />
                  <a href="" className="underline">Call me back</a>
                </p>
                <br />
                <p>
                  <b> EMAIL US DIRECTLY</b> <br />
                  <a href="" className="underline">info@aman-iq.com</a>
                </p>
               
              </div>
            }
          />
          {/* form  */}
          <div className="px-[96px] py-16 bg-lightGrey rounded-2xl">
            <div className="flex flex-col gap-8">
              <form>
                <div className="grid grid-cols-2 gap-12">
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
                      Subject
                    </label>
                    <textarea
                      className="w-full bg-white text-grey p-3 rounded-lg"
                      placeholder="Tell us what you need help with"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex justify-end col-span-2">
                    <button className="py-[10px] px-6 bg-blazerBlue text-white font-bold rounded-full">
                      Send Message
                    </button>
                  </div>
                  <div className="flex justify-end col-span-2">
                    <p className="text-darkGrey text-sm font-normal">* if you already a member of the Aman family.</p>
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
