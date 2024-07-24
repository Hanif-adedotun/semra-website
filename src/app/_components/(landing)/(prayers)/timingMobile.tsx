import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Image from "next/image";
import { prayers, renderTime, timeToMinutes, useNextPrayerIndex } from "@/utils/prayerTypes";

export function PrayersMobile() {
  const [api, setApi] = React.useState<CarouselApi>();
  const nextPrayerIndex = useNextPrayerIndex();

  React.useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(nextPrayerIndex);
  }, [api]);



  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs mt-16"
      setApi={setApi}
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {prayers.map((prayer, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-2 items-center justify-center p-6">
                  <Image
                    src={prayer.logo}
                    alt={prayer.name}
                    className="w-9 h-9"
                    width={15}
                    height={15}
                  />
                  <span className="text-base  font-semibold">
                    {prayer.name}
                  </span>
                  <p className="font-light text-sm mt-2">
                    Adhan: {renderTime(prayer.adhan, prayer.meridian)}
                  </p>
                  <p className="font-light text-sm mt-1">
                    Iqama: {renderTime(prayer.iqhama, prayer.meridian)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
