import { Metadata } from "next";
import Image from "next/image";
import Timeline from "./timeline";
import { readMore } from "@/lib/static";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About us",
};

const coreValues = [
  ["I", "Integrity"],
  ["S", "Solidarity"],
  ["L", "Love"],
  ["A", "Accountability"],
  ["M", "Mastery"],
];

export default function AboutUs() {
  const timelineItems = [
    {
      year: "2019 - 2020",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      year: "2021 - 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      year: "2021 - 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      year: "2021 - 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      year: "2021 - 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more items as needed
  ];
  return (
    <div className="w-screen min-h-max flex flex-col items-center justify-center gap-20 py-12 px-[7.5%] md:px-[15%]">
      <h2 className="font-semibold text-3xl text-center text-black mt-12">
        About Us
      </h2>

      <p className="text-center text-base">
        Suncity Estate Muslim Residents Association (SEMRA), started as a small
        gathering of few Muslim residents in Suncity Estate who normally spread
        their mats and observe daily prayers in a car parking lot donated by one
        of the brothers on Pomona Street. The small group has evolved to become
        a large community of Muslim residents in Suncity Estate and is
        subsequently transitioning to a top-notch Islamic Learning Centre in
        Abuja.
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-auto my-3">
              <Button
                variant={"outline"}
                className="m-auto text-center text-base font-semibold w-2/5 border-none"
              >
                Read More
                <ChevronDown className=" ml-4 h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              {readMore.map((read, i) => (
                <p key={i} className="text-base text-left mb-2">
                  {read}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </p>

      <div className="w-[100%] h-96 md:h-[500px] relative">
        <Image
          className="object-cover rounded-md md:rounded-lg"
          fill
          src="https://uxat7lu2fpipwkob.public.blob.vercel-storage.com/mosque-media/mosque2-xOKKbrhZcK4NGB7nti2QvVqD8VoEZ1.jpeg"
          alt="Suncity Mosque"
        />
      </div>

      <section>
        <h2 className="font-semibold text-center text-xl mb-12">
          Aims and Objectives
        </h2>
        <div>
          {" "}
          To seek the pleasure of Almighty Allah and be rewarded with Al-Jana’ah
          Firdaus. To bridge the knowledge gap in the understanding of authentic
          Islamic teachings. To extend humanitarian support to those in need. To
          inspire the Ummah towards the culture of love for the Beloved
          Messenger of Allah (PBUH). To spread the message of love, peace and
          harmony among all the classes of human society.
        </div>
      </section>

      <section>
        {/* Add image here */}
        <h2 className="font-semibold text-center text-xl mb-12">Core Values</h2>
        <section className="flex flex-col gap-6 md:gap-12 md:flex-row">
          <Image src="/ramadan-podium.png" width={300} height={50} alt="" />

          <div className="flex flex-col">
            {coreValues.map((value, i) => (
              <div className="grid grid-cols-2 gap-1 items-center" key={i}>
                <span className="text-3xl">{value[0]}</span>{" "}
                <span className="text-md text-left">{value[1]}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section>
        <h2 className="font-semibold text-center text-xl mb-12">
          Mision & vision
        </h2>
        <div>
          <h3 className="font-semibold text-left text-md mb-4">Our Mision</h3>{" "}
          To provide the platform for making better Muslims in our community and
          beyond
        </div>
        <div>
          <h3 className="font-semibold text-left text-md mb-4 mt-4">
            {" "}
            Our vision{" "}
          </h3>
          To be a renowned Centre for Islamic excellence and broad teaching in
          Nigeria and beyond
        </div>
      </section>

      <div className="mx-4 text-wrap">
        <h2 className="font-semibold text-center text-xl mb-12">
          Timeline of the formation of semra
        </h2>
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}
