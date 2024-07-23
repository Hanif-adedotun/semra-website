import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    logo: "/quran.svg",
    title: "Quran Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    logo: "/sadaqa.svg",
    title: "Quran Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    logo: "/dua.svg",
    title: "Quran Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    logo: "/Allah.svg",
    title: "Quran Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export default function Services() {
  return (
    <Card className="mt-[80px] w-[85%] p-1 md:p-20 bg-semraGreen min-h-96 mx-auto shadow-sm rounded-lg grid grid-cols-1 gap-4 md:gap-0 justify-items-start md:grid-cols-2">
      <CardContent className="flex flex-col text-white justify-start pt-8 gap-2 md:gap-4">
        <h1 className="text-2xl font-bold text-primary">Our Services</h1>
        <p className="text-base">
          Suncity Estate Muslim Resident Association (SEMRA).Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.{" "}
        </p>
        <Link href={"/about"}>
          <Button className="bg-semraYellow rounded-md text-white w-64 h-12">
            Read More
          </Button>
        </Link>
      </CardContent>

      <CardContent className="grid md:grid-cols-2 md:grid-row-2 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`hover:bg-white text-white hover:text-black rounded-md gap-2 p-6 md:p-8 cursor-pointer`}
          >
            <Image
              src={service.logo}
              alt={service.title}
              width={50}
              height={50}
            />
            <h1 className="text-xl font-bold text-primary">{service.title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
