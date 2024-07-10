import { Card } from "@/components/ui/card";
import { events } from "@/utils/events";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Events from the community",
};

export default function Events() {
  return (
    <>
      <h2 className="font-semibold text-3xl text-center mb-20 pt-20">
        Latest events from the community
      </h2>
      <section className="w-screen md:overflow-hidden h-max md:h-screen px-[7.5%] grid grid cols-1 md:grid-cols-2 gap-12">
        <div className="hidden md:block ">
          <Card className="border-0 shadow-none flex flex-col gap-2">
            <Image
              src={events[0].image}
              alt={events[0].title}
              width={500}
              height={500}
              className="object-contain rounded-lg"
            />
            <p className="text-semraGreen">{events[0].publishedAt}</p>
            <h3 className="text-xl font-semibold">{events[0].title}</h3>
            <p className="font-light">{events[0].description.slice(0, 300)}</p>
            <Link href={`/events/${events[0].id}`} className="underline">
              Read more
            </Link>
          </Card>
        </div>
        <div className="md:overflow-auto flex flex-col gap-12">
          {events.map((event) => (
            <Card className="flex flex-col md:flex-row gap-4 border-0 shadow-none">
              <Image
                src={event.image}
                alt={event.title}
                width={200}
                height={150}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col gap-2">
                <p className="text-semraGreen">{event.publishedAt}</p>
                <h3 className="text-base font-semibold">{event.title}</h3>
                <p className="font-light text-sm">
                  {event.description.slice(0, 100)}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className="underline text-sm"
                >
                  Read more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
