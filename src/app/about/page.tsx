import { Card, CardContent } from "@/components/ui/card";
import { LucidePhoneCall, MailsIcon, MapIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Timeline from "./timeline";

export const metadata: Metadata = {
  title: "About us",
};

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
        Suncity Estate Muslim Resident Association (SEMRA) started in 2010.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="w-[100%] h-96 md:h-[500px] relative">
        <Image
          className="object-cover rounded-md md:rounded-lg"
          fill
          src="https://uxat7lu2fpipwkob.public.blob.vercel-storage.com/mosque-media/mosque2-xOKKbrhZcK4NGB7nti2QvVqD8VoEZ1.jpeg"
          alt="Suncity Mosque"
        />
      </div>

      <div className="mx-4 text-wrap">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}
