import Image from "next/image";

import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
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
              <>
                About <span className="font-bold"> Aman</span>
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
                  Imagine a group of friends in Erbil, sharing dreams over a cup
                  of tea about a future where every Iraqi family feels safe and
                  secure. That's how Aman Insurance started – not in a
                  boardroom, but in the bustling streets and tranquil
                  neighborhoods of Iraq. We're a fully homegrown team, fueled by
                  local chai, spirited conversations in the markets of Erbil.
                  and Baghdad, and a shared passion for safeguarding our
                  community's dreams. Whether it's protecting your family's
                  treasured moments in Basra or ensuring your business in
                  Sulaymaniyah thrives against all odds, we're here, just around
                  the corner, ready to lend a helping hand.
                </p>
                <br />

                <p>
                  <b> A Journey of Trust, A Lifetime of Memories</b>
                </p>
                <br />
                <p>
                  Ever had a friend who knows exactly what you need, even before
                  you say it? That's us at Aman Insurance. We're the familiar
                  faces you see at the market in Sulaymaniyah, the friendly
                  voices you hear on the phone in Baghdad, always ready zwith a
                  solution tailored just for you. Our journey has been an
                  exciting adventure, filled with stories of people we’ve helped
                  and lives we’ve touched in cities like Erbil and Basra. We're
                  not just about insurance; we're about being there for each
                  other, celebrating our victories, and facing our challenges
                  together. So, next time you think about securing your future,
                  remember Aman Insurance – your friend in the neighborhood,
                  weaving a safer, brighter tapestry for all of us in Iraq.
                </p>
              </div>
            }
          />
        <div className="py-0"></div>
          <ContactUs/>
        </div>
        <Footer />
      </Container>
    </>
  );
}
