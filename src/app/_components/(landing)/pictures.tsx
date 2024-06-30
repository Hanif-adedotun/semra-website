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
//   "/pictures/mosque2.jpeg",
//   "/pictures/mosque3.jpeg",
];
export default function Media() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Card className="bg-[#E6F8EF] min-h-96 w-[85%] sm:w-[60%] mx-auto mt-48">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
          <CarouselItem key={index}>
              <Card>
                <CardContent className="w-full h-full">
                  <Image
                    src={image}
                    className="object-cover"
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
