// import { Card, CardContent } from "@/components/ui/card";
// import Video from "next-video";
// import mosqueDemo from "../../../../videos/mosqueVideo.mp4";

// export default function Media(){
//      return (
//        <Card className="bg-[#E6F8EF] min-h-96 w-[85%] mx-auto mt-48 relative">
//          <CardContent className="w-[50%] h-[50%] absolute -top-24 rounded-md">
//            <Video className="w-full " src={mosqueDemo} autoPlay loop />
//          </CardContent>
//        </Card>
//      );
// }

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/pictures/mosque1.jpeg",
  "/pictures/mosque2.jpeg",
  "/pictures/mosque3.jpeg",
];
export default function Media() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Card className="bg-[#E6F8EF] min-h-96 w-[85%] mx-auto mt-[80px] flex justify-between">
      <Carousel
        plugins={[plugin.current]}
        className="w-64 h-64 border-2 border-black"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="w-64 h-64 border-2 border-green relative">
                  <Image
                    src={image}
                    className="object-cover w-full h-full border-2 border-red"
                    alt={"Image " + index}
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      <CardContent className="flex flex-col justify-center gap-2 sm:gap-4">
        <ul>
          <li>Serene environment</li>
          <li>Secure premises</li>
          <li>24/7 security</li>
        </ul>
      </CardContent>
    </Card>
  );
}

{/* <div className="p-1">
  <Card>
    <CardContent className="flex aspect-square items-center justify-center p-6">
      <span className="text-4xl font-semibold">{index + 1}</span>
    </CardContent>
  </Card>
</div>;  */}
