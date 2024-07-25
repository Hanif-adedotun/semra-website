import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";

import { events } from "@/utils/events";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { BackButton } from "./backButton";

export const metadata: Metadata = {
  title: "Event Detail:",
};

const images = [
  "https://uxat7lu2fpipwkob.public.blob.vercel-storage.com/Eid-adha-2024/WhatsApp%20Image%202024-06-22%20at%2021.36.43-G1rLwwIi1SnTb3mDpay998wEebCofj.jpeg",
  "https://uxat7lu2fpipwkob.public.blob.vercel-storage.com/Eid-adha-2024/WhatsApp%20Image%202024-06-22%20at%2021.36.44-8uctoEg1aGY4ALjDxgjmAS29zVXRXP.jpeg",
  "https://uxat7lu2fpipwkob.public.blob.vercel-storage.com/Eid-adha-2024/eidadha2024-6Zgk0HfTqUbWbRm3NpfejW0NF1ZWPg.jpeg",
];

export default function EventDetail({ params }: { params: { id: string } }) {
     
  const event = events.filter((event) => event.id == params.id)[0];
  if (!event) {
    return (
      <div className="h-lvh flex items-center justify-center text-3xl font-semibold">
        Oops, Event not found
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-6 relative justify-center items-center pt-20 px-[15%]">
      <div className="flex flex-col md:flex-row justify-start  md:justify-between items-start md:items-center w-full mb-6 md:mb-12">
        <BackButton />
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <div></div>
      </div>

      <Carousel className="w-full h-96 rounded-md" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="w-full h-96 relative rounded-md">
                  <Image
                    src={image}
                    className="object-cover w-full h-full rounded-md"
                    alt={"Image " + index}
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p className="text-semraGreen text-sm">Posted on {event.publishedAt}</p>

      <p className="font-light">{event.description}</p>
    </div>
  );
}
