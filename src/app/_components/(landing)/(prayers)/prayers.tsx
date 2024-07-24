"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import PrayerTable from "./timingDesktop";
import { useMediaQuery } from "@/utils/use-media-query";
import { PrayersMobile } from "./timingMobile";

export default function Timing() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className="bg-cover bg-repeat bg-left-top bg-[url('/bg-pattern-2.jpg')] py-20 my-12"
      style={{ backgroundSize: "300px 300px", backgroundRepeat: "repeat" }}
    >
      <div className="flex items-center justify-between ml-[10%] bg-transparent">
        <h1 className="text-3xl font-bold text-primary">Prayer Times</h1>
      </div>
      <Card className="mt-4 w-[85%] min-h-96 px-6 md:px-12 py-10 md:py-20 mx-auto shadow-sm rounded-lg grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 bg-white shadow-sm">
        <CardContent className="flex flex-col justify-start gap-6 md:gap-12">
          <h1 className="text-2xl font-bold text-primary">Welcome to SEMRA</h1>
          <p>
            Suncity Estate Muslim Resident Association (SEMRA).Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.{" "}
          </p>
          <Link href={"/about"}>
            <Button className="bg-semraYellow rounded-md text-white text-base hover:bg-semraYellow/90">
              Read More
            </Button>
          </Link>
        </CardContent>

        <CardContent className="flex flex-col justify-center gap-2 md:gap-4">
          <h1 className="text-2xl font-bold text-primary">
            {isDesktop ? "Prayer Times" : "Next Prayer"}
          </h1>
          {isDesktop ? <PrayerTable /> : <PrayersMobile />}
        </CardContent>
      </Card>
    </div>
  );
}
